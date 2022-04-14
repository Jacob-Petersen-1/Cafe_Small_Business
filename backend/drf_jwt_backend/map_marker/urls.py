from django.urls import path
from . import views

urlpatterns = [
    path('map/marker/', views.MapMarker.as_view()),
    path('map/marker/<int:pk>/', views.MapMarker.as_view()),
]