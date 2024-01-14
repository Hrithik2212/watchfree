import random
from django.shortcuts import render
from .serializer import MovieItemSerializer,HeroBannerSerializer,GenresSeriallizer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import MoviesList,HeroBanner,Genres
# Create your views here.



@api_view(['GET'])
def GetDataList(request,type,order):
    setOrder=None
    if order:
        if order=="TopAiring":
            setOrder="rating"
        if order=="popular":
            setOrder="popularity"

    data = MoviesList.objects.all()[:20]

    if setOrder:
        try:
            data=sorted(data,key=lambda x: getattr(x,str(setOrder)), reverse=True)
        except:
            pass
    
    
    serial=MovieItemSerializer(data,many=True)
    return Response(serial.data)


@api_view(["GET"])
def GetHeroBanner(request,type):
    number=random.randint(0,4)
    data=HeroBanner.objects.all()[number]
    serial=HeroBannerSerializer(data,many=False)
    return Response(serial.data)


@api_view(["GET"])
def GetGenres(request,type):
    data=Genres.objects.all()
    serial=GenresSeriallizer(data,many=True)
    return Response(serial.data)