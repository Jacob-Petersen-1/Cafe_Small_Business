from django.urls import path
from . import views

urlpatterns = [
    path('map/marker/', views.MapMarker.as_view()),
]