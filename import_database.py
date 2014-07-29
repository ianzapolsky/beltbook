import xlrd

attrs = ['title', 'show', 'gender', 'voice_type', 'additional_info', 'character_type',
         'low_note', 'high_note', 'tessitura', 'song_type', 'character_name',
         'original_artist', 'year', 'pre_post', 'composer', 'media_link',
         'buy_sheet', 'buy_audio']

book = xlrd.open_workbook('beltBookExcel.xlsx')

sheet = book.sheets()[0]

for i in xrange(1, sheet.nrows):
  song = {}
  for c in xrange(len(sheet.row(i))):
    attribute_str = attrs[c]
    song[attribute_str] = sheet.row(i)[c]
  print song
    
