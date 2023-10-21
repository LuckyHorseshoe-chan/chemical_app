from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User 
        fields = ('id', 'name', 'surname', 'username', 'email', 'password')

class MaterialSerializer(serializers.ModelSerializer):

    class Meta:
        model = Material 
        fields = ('mat_id', 'name', 'synonyms', 'chem_form', 'cas_num')

class NanoparticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Nanoparticle 
        fields = ('id', 'np_str', 'size', 'article_id', 'mat_id', 'mep_id', 'user_id')

class SynthesisSerializer(serializers.ModelSerializer):

    class Meta:
        model = Synthesis 
        fields = ('id', 'method', 'article_id', 'np_id')

class NOVASerializer(serializers.ModelSerializer):

    class Meta:
        model = NOVA 
        fields = ('id', 'method', 'absorbat', 'pore_size', 'density', 'ads_desorb_curve',
        'pore_distr_curve', 'np_id')