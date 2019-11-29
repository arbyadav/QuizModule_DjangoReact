"""
todocrud URL Configuration
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('api/', include('todos.api.urls')),
    path('api/auth/', include('accounts.api.urls')),  # ACCOUNTS
    path('apiquiz/', include('Quiz.api.urls')),  # Quiz
    path('nested_admin/', include('nested_admin.urls')),  # Nested_Admin
    path('admin/', admin.site.urls),
]
