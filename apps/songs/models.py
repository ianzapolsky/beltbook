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
                     ('Uptempo', 'Uptempo'))
    
    TESSITURA_CHOICES = (('Low', 'Low'),
                         ('Middle', 'Middle'),
                         ('High', 'High'))

    GENDER_CHOICES = (('Male', 'Male'),
                      ('Female', 'Female'))

    PRE_POST_CHOICES = (('Pre-1965', 'Pre-1965'),
                        ('Post-1965', 'Post-1965'))

    title           = models.CharField(max_length=100)
    show            = models.CharField(max_length=100)
    gender          = models.CharField(max_length=100, choices=GENDER_CHOICES)
    composer        = models.CharField(max_length=100)
    year            = models.IntegerField()
    pre_post        = models.CharField(max_length=100, choices=PRE_POST_CHOICES)
    character_name  = models.CharField(max_length=100)
    original_artist = models.CharField(max_length=100)
    low_note        = models.CharField(max_length=100)
    high_note       = models.CharField(max_length=100)
    song_style      = models.CharField(max_length=100, choices=SONG_STYLE_CHOICES)
    tempo           = models.CharField(max_length=100, choices=TEMPO_CHOICES)
    tessitura       = models.CharField(max_length=100, choices=TESSITURA_CHOICES)
    character_type  = MultiSelectField(choices=CHARACTER_TYPE_CHOICES)
    additional_info = models.CharField(max_length=500)
    media_link      = models.CharField(max_length=100)
    buy_sheet       = models.CharField(max_length=100)
    buy_audio       = models.CharField(max_length=100)

    def __str__(self):
        return self.title
    

