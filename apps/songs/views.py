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



