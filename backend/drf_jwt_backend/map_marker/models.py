from django.db import models

class Marker(models.Model):
    address = models.CharField(max_length=50)
    lat = models.DecimalField(max_digits=20,decimal_places=20)
    lng = models.DecimalField(max_digits=20, decimal_places=20)

