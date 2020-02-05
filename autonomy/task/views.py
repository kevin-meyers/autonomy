from django.shortcuts import render
from django.views.generic.list import ListView
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy
from task.models import Task, TaskForm


# Create your views here.
class TaskList(ListView):
    """Basic overall view of tasks"""
    model = Task

    def get(self, request):
        """Get and display the list of tasks"""
        tasks = self.get_queryset().all().order_by('-created_at')
        return render(request, 'task/list.html', {'tasks': tasks})


class NewTaskView(CreateView):
    """Returns a form for a new task"""

    template_name = 'new_task.html'
    form_class = TaskForm
    success_url = reverse_lazy('task-list-view')

    def form_valid(self, form):
        # This method is called when valid form data has been POSTed.
        # It should return an HttpResponse.
        form.save()
        return super().form_valid(form)
