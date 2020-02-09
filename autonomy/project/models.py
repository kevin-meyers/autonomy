from django.db import models


class Project(models.Model):
    """ Model for a project which holds many tasks

    Properties:
        name - The name of the project
        description (optional) - An overview of the project
        created_at
        updated_at
    """

    name = models.CharField(max_length=100)
    description = models.CharField(max_length=10000, blank=True)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)
