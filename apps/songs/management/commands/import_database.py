import xlrd

from django.core.management.base import BaseCommand, CommandError

from songs.models import Song


class Command(BaseCommand):

    help = 'Import the database'

    def handle(self, *args, **kwargs):
        print 'Beginning import....'

        attrs = ['title', 'show', 'gender', 'song_style', 'additional_info', 'character_type',
                 'low_note', 'high_note', 'tessitura', 'tempo', 'character_name',
                 'original_artist', 'year', 'pre_post', 'composer', 'media_link',
                 'buy_sheet', 'buy_audio']

        book = xlrd.open_workbook('apps/songs/management/data/beltBookExcel.xlsx')
        sheet = book.sheets()[0] 

        for i in xrange(1, sheet.nrows):
            song = Song()
            for c in xrange(len(sheet.row(i))):
              attribute_str = attrs[c]
              try:
                  setattr(song, attribute_str, sheet.row(i)[c].value)
              except:
                  pass
            song.save()

        print 'Done'

    
            
        




