from typing import Iterable, Optional
from django.db import models
from modelcluster.fields import ParentalKey
from wagtail.models import Page, Orderable
from wagtail.fields import RichTextField, StreamField
from wagtail.admin.panels import FieldPanel, InlinePanel
from wagtail.search import index

# tag
from modelcluster.contrib.taggit import ClusterTaggableManager
from taggit.models import TaggedItemBase
from wagtail.admin.panels import MultiFieldPanel

#catogory
from django import forms
from modelcluster.fields import ParentalKey, ParentalManyToManyField
from django.utils.text import slugify
from django.contrib import messages


from blog.blocks import SectionBlock
from wagtail import blocks

from datetime import datetime
import locale
from django.utils import timezone

from wagtail.api import APIField
from rest_framework import serializers

class BlogIndexPage(Page):
    age_description = "Use this page for converting users"
    intro = RichTextField(blank=True)

    def get_context(self, request):
        # Update context to include only published posts, ordered by reverse-chron
        context = super().get_context(request)
        blogpages = self.get_children().live().order_by('-first_published_at')
        context['blogpages'] = blogpages
        return context
    
    content_panels = Page.content_panels + [
        FieldPanel('intro')
    ]
    
    
class BlogPageTag(TaggedItemBase):
    content_object = ParentalKey(
        'BlogPage',
        related_name='tagged_items',
        on_delete=models.CASCADE
    )

from rest_framework .fields import Field
class ImageSerializedField(Field):
    def to_representation(self, value):
        return {
            "url": value.file.url,
            "title": value.title,
            "width": value.width,
            "height": value.height
        }
        
class BlogPage(Page):
    date = models.DateField("Creation time", null=True, blank=True)
    date_post = models.CharField("Post date formatted", max_length=100, blank=True, null=True)
    update_time = models.DateTimeField("Update time", null=True, blank=True)
    description = models.CharField(max_length=250)
    body = StreamField(
        [
            ('content', blocks.RichTextBlock(required=False)),
            ("image", SectionBlock()),
        ],
        use_json_field=True,
        blank=True,
    )
    author = models.CharField(max_length=100, default="Anonymous")
    tags = ClusterTaggableManager(through=BlogPageTag, blank=True)
    categories = ParentalManyToManyField('blog.BlogCategory', blank=True, related_name='BlogPage_Category')
    feed_image = models.ForeignKey('wagtailimages.Image', on_delete=models.SET_NULL, null=True, blank=False, related_name="+")
    
    def main_image(self):
        gallery_item = self.gallery_images.first()
        if gallery_item:
            return gallery_item.image
        else:
            return None
        
    search_fields = Page.search_fields + [
        index.SearchField('categories')
        # index.SearchField('intro'),
        # index.SearchField('content'),
    ]
    
    content_panels = Page.content_panels + [
        MultiFieldPanel([
            FieldPanel('date', read_only=True),
            FieldPanel('update_time', read_only=True),
        ], heading="Time"),
        MultiFieldPanel([
            # FieldPanel('date'),
            FieldPanel('tags'),
            FieldPanel('categories', widget=forms.CheckboxSelectMultiple),
        ], heading="Blog information"),
        MultiFieldPanel([
            FieldPanel('description'),
            FieldPanel('body'),
            FieldPanel('author'),
        ], heading="Content News"),
        InlinePanel('gallery_images', label="Gallery images"),
        FieldPanel("feed_image")
    ]
    
    api_fields = [
        APIField("date_post"),
        APIField("description"),
        APIField("feed_image"),
        APIField('body'),
        APIField('categories'),
        APIField('author'),
    ]
    
    def save(self, *args, **kwargs):
        if not self.id:
            self.date = timezone.now()
        
        self.update_time = timezone.now()
        super().save(*args, **kwargs)
    
class BlogPageGalleryImage(Orderable):
    page = ParentalKey(BlogPage, on_delete=models.CASCADE, related_name='gallery_images')
    image = models.ForeignKey(
        'wagtailimages.Image', on_delete=models.CASCADE, related_name='+'
    )
    caption = models.CharField(blank=True, max_length=250)

    panels = [
        FieldPanel('image'),
        FieldPanel('caption'),
    ]
    
    
class BlogTagIndexPage(Page):

    def get_context(self, request):

        # Filter by tag
        tag = request.GET.get('tag')
        blogpages = BlogPage.objects.filter(tags__name=tag)

        # Update template context
        context = super().get_context(request)
        context['blogpages'] = blogpages
        return context
    
from wagtail.snippets.models import register_snippet

@register_snippet
class BlogCategory(models.Model):
    class Meta:
        verbose_name_plural = 'blog categories'
        verbose_name = "blog categories",
        ordering = ["name"]
        
    name = models.CharField(max_length=255)
    slug = models.SlugField(
        verbose_name="slug",
        allow_unicode=True,
        max_length=255,
        help_text='A slug to identify posts by this category',
        blank=True,
    )

    panels = [
        FieldPanel('name'),
        FieldPanel("slug", read_only=True),
    ]

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            # Generate slug from name if it doesn't exist
            self.slug = self.generate_unique_slug()
        super().save(*args, **kwargs)
        
    def generate_unique_slug(self):
        original_slug = slugify(self.name)
        slug = original_slug
        while BlogCategory.objects.filter(slug=slug).exclude(id=self.id).exists():
            messages.error(None, f"Slug '{slug}' is not unique. Please choose a different name.")
            raise ValueError("Non-unique slug")
        return slug
        
    api_fields = [
        APIField('name'),
    ]
        
class BlogPageAuthor(Orderable):
    page = models.ForeignKey('blog.BlogPage', on_delete=models.CASCADE, related_name='authors')
    name = models.CharField(max_length=255)

    api_fields = [
        APIField('name'),
    ]