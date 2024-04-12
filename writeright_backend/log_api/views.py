from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

# jwt customized token claims libraries
"""
custom claims are additional information that can be added to the JWT payload
"""
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


# custom claims serializer
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        """
        add names of the attributes that you want to add to the JWT payload
        """
        token['username'] = user.username
        token['email'] = user.email

        return token
    

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint':'/api/log_api/',
            'method':'GET',
            'body':None,
            'description':'This is the main API endpoint for the log_api app'
        }
    ]
    return Response(routes)