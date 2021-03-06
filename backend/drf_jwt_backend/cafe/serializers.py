from rest_framework import serializers
from .models import Customer, BusinessEvent, PersonalEvent
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
       model = User
       fields = ["id","first_name", "last_name"]

class CustomerSerializer(serializers.ModelSerializer):
    # user = UserSerializer(many=False, read_only=True)
    class Meta:
        model = Customer
        fields = ["id","first_name", "last_name", "phone", "email", "message"]
        depth = 1

class BusinessEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessEvent
        fields = ["id","title","start","end"]

class PersonalEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalEvent
        fields = ["id","title","start","end"]

# customer_id = serializers.IntegerField(write_only = True)


