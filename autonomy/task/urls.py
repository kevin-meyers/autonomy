from django.urls import path
from task.views import TaskList, NewTaskView

urlpatterns = [
    path('', TaskList.as_view(), name="task-list-view"),
    path('new', NewTaskView.as_view(), name="task-new"),
]
