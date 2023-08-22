from __future__ import unicode_literals
import graphene
from graphene_django import DjangoObjectType
from blog.models import BlogPage, BlogCategory

from blog.blocks import SectionBlock
from wagtail import blocks
from wagtail.images.models import Image

# --------- section block ------- #
class SectionBlockType(graphene.ObjectType):
    image = graphene.String()
    caption = graphene.String()
    
class RichTextBlockType(graphene.ObjectType):
    content = graphene.String()
    
class BlockUnion(graphene.Union):
    class Meta:
        types = (SectionBlockType, RichTextBlockType)
# ------------------------------------
# ------------ tags ------------------
class TagsBlockType(graphene.ObjectType):
    tag = graphene.String()
# ------------------------------------

# ---------- category ----------------
class CategoryType(DjangoObjectType):
    class Meta:
        model = BlogCategory
# ------------------------------------

class BlogNode(DjangoObjectType):
    body = graphene.List(BlockUnion)
    feed_image = graphene.String()
    category = graphene.List(CategoryType)
    
    class Meta:
        model = BlogPage
        only_fields = ['title', 'date_post', 'description', 'author']
    
    def resolve_body(self, info):
        body_data = []
        for block in self.body:
            # ininstance kiem tra doi tuong la 1 mot instance hay mot class con
            if isinstance(block.block, blocks.RichTextBlock):
                body_data.append(RichTextBlockType(content=block.value))
            elif isinstance(block.block, SectionBlock):
                section_block = block.value
                body_data.append(SectionBlockType(image=section_block.get('image').file.url, caption=section_block.get('caption')))
        return body_data   
     
    def resolve_feed_image(self, info):
        return self.feed_image.file.url if self.feed_image else None
    
    def resolve_category(self, info):
        return self.categories.all() 
    
class Query(graphene.ObjectType):
    allBlog = graphene.List(BlogNode)
    blog = graphene.Field(BlogNode, slug=graphene.String())
    allCategories = graphene.List(CategoryType)
    blogsByCategory = graphene.List(BlogNode, slug=graphene.String())

    @graphene.resolve_only_args
    def resolve_allBlog(self):
        return BlogPage.objects.live()
    
    def resolve_blog(self, info, slug):
        try:
            return BlogPage.objects.live().get(slug=slug)
        except BlogPage.DoesNotExist:
            return None
        
    def resolve_allCategories(self, info):
        return BlogCategory.objects.all()
    
    def resolve_blogsByCategory(self, info, slug):
        try:
            category = BlogCategory.objects.get(slug=slug)
            return category.categories.live()  # Retrieve live blog pages associated with the category
        except BlogCategory.DoesNotExist:
            return []

schema = graphene.Schema(query=Query)