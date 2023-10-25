from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import json
import os
from django.http import JsonResponse
import random
from .serializers import *
from .models import *

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

@api_view(['GET'])
def nanoparticles(request):
    data = Nanoparticle.objects.all()
    serializer = NanoparticleSerializer(data, context={'request': request}, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def materials(request):
    data = Material.objects.all()
    serializer = MaterialSerializer(data, context={'request': request}, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def synthesises(request):
    data = Synthesis.objects.all()
    serializer = SynthesisSerializer(data, context={'request': request}, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def NOVAs(request):
    data = NOVA.objects.all()
    serializer = NOVASerializer(data, context={'request': request}, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def send_form(request):
    print(request.data)
    try:
        submitted = []
        mat_serializer = MaterialSerializer(data=request.data['material'])
        if mat_serializer.is_valid():
            mat_serializer.save()
            submitted.append('material')
        nano_data = request.data['nanoparticle']
        nano_serializer = NanoparticleSerializer(data=request.data['nanoparticle'])
        if nano_serializer.is_valid():
            Nanoparticle(id=nano_data['id'], np_str=nano_data['np_str'], 
            size=float(nano_data['size']), article_id=nano_data['article_id'], 
            mep_id=nano_data['mep_id'], mat_id=nano_data['mat_id'], user_id=nano_data['user_id']).save()
            submitted.append('nanoparticle')
        nova_serializer = NOVASerializer(data=request.data['nova'])
        nova_data = request.data['nova']
        if nova_serializer.is_valid():
            NOVA(id=nova_data['id'], method=nova_data['method'], absorbat=nova_data['absorbat'], 
            pore_size=nova_data['pore_size'], density=nova_data['density'], ads_desorb_curve=nova_data['ads_desorb_curve'],
            pore_distr_curve=nova_data['pore_distr_curve'], np_id=nova_data['np_id']).save()
            submitted.append('NOVA')
        syn_serializer = SynthesisSerializer(data=request.data['synthesis'])
        syn_data = request.data['synthesis']
        if syn_serializer.is_valid():
            Synthesis(id=syn_data['id'], method=syn_data['method'], article_id=syn_data['article_id'], np_id=syn_data['np_id']).save()
            submitted.append('synthesis')
        if len(submitted):
            return JsonResponse({"success": True, "message": ", ".join(submitted) + " forms submitted"})
        return JsonResponse({"success": False, "message": "Error: invalid data"})
    except:
        return JsonResponse({"success": False, "message": "Error: invalid data"})

@api_view(['POST'])
def set_ids(request):
    if 'np_name' not in request.data or len(request.data['np_name']) >= 3:
        return JsonResponse({
            "np_id": "MV11" + str(random.randint(10000, 99999)),
            "article_id": random.randint(1000, 9999),
            "mat_id": "MV11" + str(random.randint(100, 999)),
            "mep_id": random.randint(10000, 99999),
            "syn_id": random.randint(10000, 99999),
            "nova_id": random.randint(10000, 99999)
        })
    return JsonResponse({
            "np_id": "",
            "article_id": 0,
            "mat_id": "",
            "mep_id": 0,
            "syn_id": 0,
            "nova_id": 0
        })
@api_view(['POST'])
def register(request):
    try:
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse({"success": True})
        return JsonResponse({"success": False})
    except:
        return JsonResponse({"success": False})