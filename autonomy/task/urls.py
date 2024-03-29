from django.urls import path
from task.views import TaskList, NewTaskView, RemoveTask, PinTask

urlpatterns = [
    path('', TaskList.as_view(), name="task-list-view"),
    path('new', NewTaskView.as_view(), name="task-new"),
    path('remove', RemoveTask, name="task-remove"),
    path('pin', PinTask, name="task-pin"),
]
