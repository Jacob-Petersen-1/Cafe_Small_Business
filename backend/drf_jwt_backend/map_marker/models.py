from django.db import models

class Marker(models.Model):
    address = models.CharField(max_length=50, null=True)
    lat = models.DecimalField(max_digits=10,decimal_places=7)
    lng = models.DecimalField(max_digits=10, decimal_places=7)

