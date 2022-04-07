from django.db import models
from django.contrib.auth.models import User

class Customer(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    phone = models.CharField(max_length=11)
    email = models.CharField(max_length=20)
    message = models.CharField(max_length=280)


class BusinessEvent(models.Model):
    title = models.CharField(max_length=20)
    start_event = models.DateField()
    end_event = models.DateField()

class PersonalEvent(models.Model):
    title = models.CharField(max_length=20)
    start_event = models.DateField()
    end_event = models.DateField() 
