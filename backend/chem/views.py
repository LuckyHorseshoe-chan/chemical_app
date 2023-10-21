from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import json
from django.http import JsonResponse
from .serializers import *

@api_view(['POST'])
def authentication(request):
    if request.method == "POST" and request.content_type == "application/json":
        json.loads(str(request.body.decode('utf8'))) 
        try:
            data = json.loads(request.body.decode('utf8'))
            username = data["username"]
            password = data["password"]
            rememberMe = data["rememberMe"]
            user = authenticate(username=username, password=password)
            if user is not None:
                return JsonResponse(
                    {"success": True, "user": user, "message": "User authenticated successfully"}
                )
            else:
                return JsonResponse(
                    {"success": False, "message": "Invalid username or password"}
                )
        except:
            return JsonResponse(
                {
                    "success": False,
                    "message": "An error occurred while authenticating user",
                }
            )
    else:
        return JsonResponse({"success": False, "message": "Invalid request method"})

def authenticate(username, password):
    users = list(User.objects.all().values())
    for user in users:
        if ((username == user['username'] 
            or username == user['email']) 
            and password == user['password']):
            return user
    return None