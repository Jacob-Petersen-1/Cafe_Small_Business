from django.contrib import admin
from .models import Customer, BusinessEvent, PersonalEvent

# Register your models here.
admin.site.register(Customer)
admin.site.register(PersonalEvent)
admin.site.register(BusinessEvent)
