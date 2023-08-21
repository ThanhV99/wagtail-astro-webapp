from __future__ import unicode_literals
import graphene
from graphene_django import DjangoObjectType
from blog.models import BlogPage

from django.db import models

class BlogNode(DjangoObjectType):
    class Meta:
        model = BlogPage
        only_fields = ['title', 'date', 'description', 'author']


class Query(graphene.ObjectType):
    allBlog = graphene.List(BlogNode)

    @graphene.resolve_only_args
    def resolve_allBlog(self):
        return BlogPage.objects.live()

schema = graphene.Schema(query=Query)