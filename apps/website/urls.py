from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView


urlpatterns = patterns('',

    #
    # Website
    #
    url(r'^$',              TemplateView.as_view(template_name='search.html')),
    url(r'^about$',         TemplateView.as_view(template_name='about.html')),
    url(r'^contact$',       TemplateView.as_view(template_name='contact.html')),

    #
    # Songs
    #
    url(r'songs$', 'songs.views.get_all'),
    url(r'songs/(?P<song_id>\d+)$', 'website.views.song'),
    url(r'songs/search$', 'songs.views.search_songs'),

)
