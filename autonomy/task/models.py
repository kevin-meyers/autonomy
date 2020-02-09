from django.db import models
from django.forms import ModelForm


# Create your models here.
class Task(models.Model):
    """Model for a single task.

    Properties:
        name - The name/title of the task
        description (optional) - More details on the task
        created_at - The date and time the task was created
        updated_at - The date and time the task was updated
        pinned - If the task is pinned
        project - Project this task is a part of
    """

    name = models.CharField(max_length=100, help_text="The name of the task")
    description = models.CharField(max_length=1000, blank=True,
                                   help_text="More details")
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    pinned = models.BooleanField(default=False)

    project = models.ForeignKey('project.Project', on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class TaskForm(ModelForm):
    """Form for a new task"""

    class Meta:
        model = Task
        fields = ['name', 'description']
