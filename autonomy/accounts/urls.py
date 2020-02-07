from django.urls import path
from accounts.views import SignUpView


urlpatterns = [
    path('new-user', SignUpView.as_view(), name='signup'),
]
