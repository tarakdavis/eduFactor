from django.conf.urls import url
from . import views
from .views import IndexView, CreateTest, AddClass
from django.views.generic.edit import CreateView
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.views import login, logout

urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name='index'),
    url(r'^login/$', login, name='login'),
    url(r'^logout/$', logout, {'next_page': '/login'}, name='logout'),
    url(r'^register/$', views.register, name='register'),
    url(r'^create_test/$', views.CreateTest.as_view(), name='create_test'),
    url(r'^addclass/$', views.AddClass.as_view(), name='add_class'),
    url(r'^student/$', views.student, name='student')
]
