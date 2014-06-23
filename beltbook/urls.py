from django.conf.urls import patterns, include, url
from django.contrib import admin


admin.autodiscover()

urlpatterns = patterns('',

    #
    # Website
    #  
    url(r'^',               include('website.urls')),

    #
    # Admin
    #
    url(r'^admin/',         include(admin.site.urls)),
)

