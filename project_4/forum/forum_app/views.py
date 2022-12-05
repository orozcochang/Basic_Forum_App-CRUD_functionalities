from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.decorators import api_view
import json
from .models import *
from django.core import serializers
from django.core.serializers import serialize
from django.core.serializers.json import DjangoJSONEncoder

# Create your views here.
def index(request):
    index_file= open('static/index.html').read()
    return HttpResponse(index_file)

@api_view(['GET', 'POST'])
def categories(request):
    # list_of_categories = [{'id': 1, 'title': 'Games'},{'id': 2, 'title': 'Hobbies'},{'id': 3, 'title': 'Movies'}]
    if request.method == 'GET':
       query_set=Category.objects.all()
       print(query_set)
       serialized_data = serialize("json", query_set)
       serialized_data = json.loads(serialized_data)
       print(serialized_data)
       return JsonResponse({'categories':serialized_data})
    elif request.method == 'POST':
        json_data = json.loads(request.body)
        print(json_data['title'])
        Category.objects.create(category=json_data['title'])
        query_set = Category.objects.all()
        print(query_set)
        qs_json=serializers.serialize('json',query_set)
        return JsonResponse({'categories':[qs_json]})
@api_view(['GET','PUT','DELETE'])
def category(request):
    pass
@api_view([])
def posts(request):
    pass
@api_view([])
def post(request, post_id):
    pass
@api_view([])
def category_post(request, category_id):
    pass
@api_view([])
def post_by_category(request, category_id, post_id):
    pass
