from django.shortcuts import render
from .models import Marker
from .serializers import MarkerSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny
from django.shortcuts import get_object_or_404

@permission_classes([AllowAny])
class MapMarker(APIView):

    def get(self,request):
        markers = Marker.objects.all()
        serializers = MarkerSerializer(markers,many=True)
        return Response(serializers.data,status=status.HTTP_200_OK)

    def patch(self,request,pk):
        marker = get_object_or_404(Marker,pk=pk)
        serializers = MarkerSerializer(marker,data=request.data)
        serializers.is_valid(raise_exception=True)
        serializers.save()
        return Response(serializers.data, status=status.HTTP_201_CREATED)
    
    def delete(self,request,pk,format=None):
        marker = get_object_or_404(Marker,pk=pk)
        marker.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
