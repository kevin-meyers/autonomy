from django.shortcuts import render, redirect
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
        tasks = list(self.get_queryset().all().order_by('-created_at'))

        username = None
        auth = request.user.is_authenticated
        if auth:
            username = request.user.username

        # TODO: Optimize
        for task in tasks:
            if task.pinned is True:
                tasks.insert(0, tasks.pop(tasks.index(task)))

        return render(request, 'task/index.html', {'tasks': tasks,
                                                   'auth': auth,
                                                   'username': username})


class NewTaskView(CreateView):
    """Returns a form for a new task"""

    template_name = 'new_task.html'
    form_class = TaskForm
    success_url = reverse_lazy('task-list-view')

    def form_valid(self, form):
        """This method is called when valid form data has been POSTed.
        It should return an HttpResponse.
        """
        form.save()
        return super().form_valid(form)


def RemoveTask(request):
    # Pass id from url tag.
    id = request.POST.get("delete", "")
    task = Task.objects.get(id=id)
    task.delete()

    return redirect('task-list-view')


def PinTask(request, id):
    task = Task.objects.get(id=id)
    if task.pinned is False:
        task.pinned = True
    else:
        task.pinned = False

    task.save()
    return redirect('task-list-view')
