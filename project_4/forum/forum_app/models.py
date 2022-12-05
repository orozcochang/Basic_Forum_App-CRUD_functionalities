from django.db import models

# Create your models here.
class Category(models.Model):
    category = models.CharField(max_length=100)
    def serialize(self):
        return({
            'category':self.category
        })

class Post(models.Model):
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    post = models.TextField
    def serialize(self):
        return({
            'post':self.post
        })