from django.urls import path

from . import views
from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
) # imported for JWT to generate token

"""
access token: short-lived token that is used to access protected resources on behalf of the user
refresh token: long-lived token used to obtain a new access token when the current access token becomes invalid or expires

"""

urlpatterns = [
    path('', views.getRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]