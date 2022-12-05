from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('api/categories/', views.categories),
    path('api/categories/<int:category_id>', views.category),
    path('api/posts/', views.posts),
    path('api/posts/<int:post_id', views.post),
    path('api/categories/<int:category_id>/post', views.category_post),
    path('api/categories/<int:category_id>/<int:post_id>', views.post_by_category),
]