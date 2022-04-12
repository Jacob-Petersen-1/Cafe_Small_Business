from django.db import models

class Marker(models.Model):
    address = models.CharField(max_length=50, null=True)
    lat = models.DecimalField(max_digits=15,decimal_places=10)
    lng = models.DecimalField(max_digits=15, decimal_places=10)

