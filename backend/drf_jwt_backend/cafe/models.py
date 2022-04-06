from django.db import models

class Customer(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    phone = models.IntegerField(default=0)
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
