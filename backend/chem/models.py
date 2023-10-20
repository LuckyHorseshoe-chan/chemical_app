from django.db import models

# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.

class Material(models.Model):
    mat_id = models.BigAutoField(primary_key=True)
    name = models.CharField()
    synonyms = models.CharField()
    chem_form = models.CharField()
    cas_num = models.IntegerField()

    class Meta:
        db_table = 'material'

class User(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField()
    surname = models.CharField()
    username = models.CharField()
    email = models.EmailField()
    password = models.CharField()

    class Meta:
        db_table = 'user'

class Nanoparticle(models.Model):
    id = models.BigAutoField(primary_key=True)
    np_str = models.CharField()
    size = models.FloatField()
    article_id = models.IntegerField()
    mat = models.ForeignKey(Material, on_delete=models.CASCADE)
    mep_id = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    class Meta:
        db_table = 'nanoparticle'

class NOVA(models.Model):
    id = models.BigAutoField(primary_key=True)
    np = models.ForeignKey(Nanoparticle, on_delete=models.CASCADE)
    method = models.CharField()
    absorbat = models.CharField()
    pore_size = models.FloatField()
    density = models.FloatField()
    ads_desorb_curve = models.CharField()
    pore_distr_curve = models.CharField()

    class Meta:
        db_table = 'NOVA'

class Synthesis(models.Model):
    id = models.BigAutoField(primary_key=True)
    np = models.ForeignKey(Nanoparticle, on_delete=models.CASCADE)
    method = models.CharField()
    article_id = models.IntegerField()

    class Meta:
        db_table = 'synthesis'