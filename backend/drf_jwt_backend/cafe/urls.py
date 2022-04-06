from django.urls import path
from . import views

urlpatterns = [
    path('messages/',views.CustomerMessages.as_view())
]