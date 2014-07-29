from django.shortcuts import render

from songs.models import Song


def song(request, song_id):

    song = Song.objects.get(id=song_id)
    context = {'song': song}
    return render(request, 'song.html', context) 

   


