from django.db import models

from multiselectfield import MultiSelectField


class Song(models.Model):

    CHARACTER_TYPE_CHOICES = (('Youth', 'Youth'),
                              ('Ingenue', 'Ingenue'),
                              ('Young Lead', 'Young Lead'),
                              ('Comic', 'Comic'),
                              ('Lead', 'Lead'), 
                              ('2nd Banana', '2nd Banana'),
                              ('Character', 'Character'))

    SONG_STYLE_CHOICES = (('Belt', 'Belt'),
                          ('Belt Mix', 'Belt Mix'))

    TEMPO_CHOICES = (('Ballad', 'Ballad'),
                     ('Power Ballad', 'Power Ballad'),
                     ('Mid-Tempo', 'Mid-Tempo'),
                     ('Up-Tempo', 'Up-Tempo'))
    
    TESSITURA_CHOICES = (('Low', 'Low'),
                         ('Middle', 'Middle'),
                         ('High', 'High'))

    title           = models.CharField(max_length=100)
    composer        = models.CharField(max_length=100)
    year            = models.IntegerField()
    show            = models.CharField(max_length=100)
    name_in_show    = models.CharField(max_length=100)
    original_artist = models.CharField(max_length=100)
    low_note        = models.CharField(max_length=100)
    high_note       = models.CharField(max_length=100)
    comments        = models.CharField(max_length=100)
    song_style      = models.CharField(max_length=100, choices=SONG_STYLE_CHOICES)
    tempo           = models.CharField(max_length=100, choices=TEMPO_CHOICES)
    tessitura       = models.CharField(max_length=100, choices=TESSITURA_CHOICES)
    character_type  = MultiSelectField(choices=CHARACTER_TYPE_CHOICES)

    def __str__(self):
        return self.title
    

