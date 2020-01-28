from django.db import models


# Create your models here.
class Task(models.Model):
    """Model for a single task.

    Properties:
        name - The name/title of the task
        description (optional) - More details on the task
        created_at - The date and time the task was created
        updated_at - The date and time the task was updated
    """

    name = models.CharField(max_length=100, help_text="The name of the task")
    description = models.CharField(default="", help_text="More details")
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)
