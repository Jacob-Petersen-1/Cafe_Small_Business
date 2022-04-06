from django.shortcuts import render
from http import server
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import permission_classes
from rest_framework.views import APIView
from .models import Customer,BusinessEvent,PersonalEvent
from .serializers import  CustomerSerializer, BusinessEventSerializer, PersonalEventSerializer



# @permission_classes([AllowAny])
#     class 

