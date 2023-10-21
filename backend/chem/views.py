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

@api_view(['GET', 'POST'])
def nanoparticles(request):
    if request.method == 'GET':
        data = Nanoparticle.objects.all()
        serializer = NanoparticleSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = NanoparticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def materials(request):
    if request.method == 'GET':
        data = Material.objects.all()
        serializer = MaterialSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = MaterialSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def synthesises(request):
    if request.method == 'GET':
        data = Synthesis.objects.all()
        serializer = SynthesisSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SynthesisSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def NOVAs(request):
    if request.method == 'GET':
        data = NOVA.objects.all()
        serializer = NOVASerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = NOVASerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)