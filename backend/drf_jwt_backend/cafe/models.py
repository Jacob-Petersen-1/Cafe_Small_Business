from django.db import models
from django.contrib.auth.models import User

class Customer(models.Model):
    # user = models.ForeignKey(User,on_delete=models.CASCADE, null=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    phone = models.CharField(max_length=11)
    email = models.CharField(max_length=20)
    message = models.CharField(max_length=280)


class BusinessEvent(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    title = models.CharField(max_length=20)
    start = models.DateField()
    end = models.DateField()

class PersonalEvent(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    title = models.CharField(max_length=20)
    start = models.DateField()
    end = models.DateField() 
