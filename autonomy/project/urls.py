from django.urls import path
from project.views import NewProject

app = 'project'
urlpatterns = [
    path('create', NewProject.as_view(), name="create"),
 
