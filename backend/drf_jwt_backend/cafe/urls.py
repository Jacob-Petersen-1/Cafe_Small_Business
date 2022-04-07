from django.urls import path
from . import views

urlpatterns = [
    path('messages/',views.CustomerMessages.as_view()),
    path('send/<int:pk>/', views.SendMessage.as_view()),
]