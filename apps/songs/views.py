from django.http import HttpResponse

import jsonpickle

from .models import Song


#
# AJAX methods
#

def get_all(request):

    songs_array = []
    for song in Song.objects.all():
        songs_array.append(song)
    songs_json = jsonpickle.encode(songs_array, unpicklable=False)
    return HttpResponse(songs_json, content_type='application/json')

def get_song(request, song_id):
    
    song = Song.objects.get(id=song_id)
    song_json = jsonpickle.encode(song, unpicklable=False)
    return HttpResponse(song_json, content_type='application/json')

def search_songs(request):

    tempo          = request.GET.get('tempo', None)
    tessitura      = request.GET.get('tessitura', None)
    song_style     = request.GET.get('song_style', None)
    gender         = request.GET.get('gender', None)
    character_type = request.GET.get('character_type', None)
    pre_post       = request.GET.get('pre_post', None)

    songs_array = []

    songs = Song.objects.all()
    if tempo:
        songs = songs.filter(tempo=tempo)
    if tessitura:
        songs = songs.filter(tessitura=tessitura)
    if song_style:
        songs = songs.filter(song_style=song_style)
    if gender:
        songs = songs.filter(gender=gender)
    if character_type:
        songs = songs.filter(character_type=character_type)
    if pre_post:
        songs = songs.filter(pre_post=pre_post)

    for song in songs:
        songs_array.append(song)
    
    songs_json = jsonpickle.encode(songs_array, unpicklable=False)
    return HttpResponse(songs_json, content_type='application/json')

    

     



