from django.shortcuts import render
from . models import MiniCrud

# Create your views here.


def home(request):

    fields = MiniCrud.objects.all()

    return render(request, 'mini_app/home.html', {'fields': fields})


def edit(request, pk):

    profile = MiniCrud.objects.get(pk=pk)
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        new_email = request.POST['email']
        profile.email = new_email
        profile.first_name = first_name
        profile.last_name = last_name
        profile.save
        print(first_name+last_name+new_email)
    return render(request, 'mini_app/edit.html', {'profile': profile})
