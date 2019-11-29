from django.urls import path

from .views import index, TodoDetailView, QuizDetailView

urlpatterns = [
    path('', index),
    path('login', index),
    path('register', index),
    path('edit/<int:pk>', TodoDetailView.as_view()),
    path('delete/<int:pk>', TodoDetailView.as_view()),
    path('edit/<int:pk>', QuizDetailView.as_view()),
    path('delete/<int:pk>', QuizDetailView.as_view()),
]
