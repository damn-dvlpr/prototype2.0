from django.urls import path
from . import views
urlpatterns = [
    path('', views.response_view), 
    path('index/', views.index), 
#     patterns('',
#                (r'^media/(?P<path>.*)$', 'django.views.static.serve',
#                  {'document_root': settings.MEDIA_ROOT}),
#               )
]