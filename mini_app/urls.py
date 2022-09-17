from django.urls import path
from . import views
app_name = 'mini_app'


urlpatterns = [
    path('', views.home, name='home'),
    path('edit/<int:pk>', views.edit, name='edit'),
    path('login', views.userLogin, name='login'),
    path('addItem', views.addItem, name='add'),
    path('loggedOut', views.userLogout, name='logout'),
    path('deleted/<int:pk>', views.itemDelete, name='delete'),

]
