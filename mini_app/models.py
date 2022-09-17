from queue import Empty
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class MiniCrud(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(null=True)
    age = models.IntegerField()
    manager = models.ForeignKey(
        User, on_delete=models.CASCADE)

    def __str__(self):
        return self.first_name + ' has been created by ' + self.manager.first_name
