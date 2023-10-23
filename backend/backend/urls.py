from django.contrib import admin
from django.urls import path
from chem import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/authenticate/', views.authentication),
    path('api/nanoparticles/', views.nanoparticles),
    path('api/materials/', views.materials),
    path('api/synthesises/', views.synthesises),
    path('api/NOVA/', views.NOVAs),
    path('api/send_form/', views.send_form),
    path("api/set_ids/", views.set_ids)
]
