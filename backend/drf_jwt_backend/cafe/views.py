from email import message
from django.shortcuts import render
from http import server
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import permission_classes
from rest_framework.views import APIView
from .models import Customer,BusinessEvent,PersonalEvent,User
from .serializers import  CustomerSerializer, BusinessEventSerializer, PersonalEventSerializer




@permission_classes([IsAuthenticated])
class CustomerMessages(APIView):
        
    def get(self, request):
        messages = Customer.objects.all()
        serializer = CustomerSerializer(messages, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)


@permission_classes([AllowAny]) #Further Testing Needed
class SendMessage(APIView):

    def post(self,request,pk):
        user_id = pk
        temp_data = request.data
        temp_data['user_id'] = user_id
        serializer = CustomerSerializer(data=temp_data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data,status=status.HTTP_201_CREATED)

@permission_classes([AllowAny])
class BusinessEvents(APIView):

    def get(self,request):
        events = BusinessEvent.objects.all()
        serializer = BusinessEventSerializer(events,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    


@permission_classes([IsAuthenticated])
class PersonalEvents(APIView):

    def get(self,request):
        events = PersonalEvent.objects.all()
        serializer = PersonalEventSerializer(events,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request):
        serializers = BusinessEventSerializer(data=request.data)
        # the following validates that API user input is true or accurate to the database
        serializers.is_valid(raise_exception=True)
        serializers.save(user=request.user)
        return Response(serializers.data, status=status.HTTP_201_CREATED)
