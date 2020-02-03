from django.shortcuts import render
from django.views.generic.list import ListView
from task.models import Task


# Create your views here.
class TaskList(ListView):
    """Basic overall view of tasks"""
    model = Task

    def get(self, request):
        """Get and display the list of tasks"""
        tasks = self.get_queryset().all().order_by('-created_at')
        return render(request, 'task/list.html', {'tasks': tasks})
