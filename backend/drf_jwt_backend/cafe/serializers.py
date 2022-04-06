from rest_framework import serializers
from .models import Customer, BusinessEvent, PersonalEvent
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
       model = User
       fields = ["id","first_name", "last_name"]

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ["id","first_name", "last_name", "phone", "email", "message"]

class BusinessEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessEvent
        fields = ["id","title","start_event","end_event"]

class PersonalEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalEvent
        fields = ["id","title","start_event","end_event"]



