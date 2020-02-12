from django.shortcuts import render, redirect
from project.models import Project
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def NewProject(request):
    if request.method == 'POST':
        name = request.POST.get('name', None)
        p = Project(name=name)
        p.save()
        return redirect('task-list-view')
