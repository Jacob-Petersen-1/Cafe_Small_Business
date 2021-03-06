from django.urls import path
from . import views

urlpatterns = [
    path('messages/',views.CustomerMessages.as_view()),
    path('messages/send/', views.SendMessage.as_view()),
    path('business/events/',views.BusinessEvents.as_view()),
    path('business/events/update/',views.BusinessEventUpdate.as_view()),
    path('personal/events/',views.PersonalEvents.as_view()),
]