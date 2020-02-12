from django.urls import path
from project.views import NewProject

app_name = 'project'
urlpatterns = [
    path('create', NewProject, name='create'),
]
