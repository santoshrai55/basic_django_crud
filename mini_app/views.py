import email
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, reverse
from . models import MiniCrud
from django.contrib.auth.models import User

# Create your views here.


def home(request):
    fields = MiniCrud.objects.all()
    return render(request, 'mini_app/home.html', {'fields': fields})


@login_required
def itemDelete(request, pk):
    # fields = MiniCrud.objects.all()
    profile = MiniCrud.objects.get(pk=pk)
    profile.delete()
    # return render(request, 'mini_app/home.html', {'fields': fields})
    return redirect('mini_app:home')
    # return reverse('mini_app:home')


@login_required
def edit(request, pk):

    profile = MiniCrud.objects.get(pk=pk)
    if request.method == 'POST':
        first_name = (request.POST['first_name']).strip()
        last_name = (request.POST['last_name']).strip()
        new_email = (request.POST['email']).strip()
        profile.email = new_email
        profile.first_name = first_name
        profile.last_name = last_name
        profile.save
        print(first_name+last_name+new_email)
    return render(request, 'mini_app/edit.html', {'profile': profile})


@login_required
def addItem(request):
    if request.method == 'POST':
        first_name = (request.POST['first_name']).strip()
        last_name = (request.POST['last_name']).strip()
        new_email = (request.POST['email']).strip()
        age = request.POST['age']
        manager = request.POST['manager']

        manager = User.objects.get(username=manager)
        m = MiniCrud(first_name=first_name, last_name=last_name,
                     email=new_email, age=age, manager=manager)
        m.save()
        fields = MiniCrud.objects.all()
        return render(request, 'mini_app/home.html', {'fields': fields})
    else:
        return render(request, 'mini_app/create.html')


def userLogin(request):
    fields = MiniCrud.objects.all()
    if request.method == 'POST':
        username_passed = request.POST['username']
        password__passed = request.POST['password']
        user = authenticate(request, username=username_passed,
                            password=password__passed)
        if user is not None:
            login(request, user)
            # Redirect to a success page.

            return redirect('mini_app:home')
    else:
        # Return an 'invalid login' error message.
        return render(request, 'mini_app/login.html')


def userLogout(request):
    logout(request)
    # fields = MiniCrud.objects.all()
    # Redirect to a success page.
    return redirect('mini_app:home')
    # return redirect(request, 'mini_app/home.html', {'fields': fields})
