from rest_framework import routers
from django.urls import path, include, re_path
from .views import QuizzesAPI, QuizDetailAPI, QuizResultAPI, ResponseAPI

from .views import QuizzesViewsetAPI


router = routers.DefaultRouter()
router.register('quizzesview', QuizzesViewsetAPI, 'quizzesview')

urlpatterns = [
    path('quizzes/', QuizzesAPI.as_view()),
    re_path(r'^quizzes/(?P<slug>[\w\-]+)/$', QuizDetailAPI.as_view()),
    re_path(r'^quizresult/(?P<slug>[\w\-]+)/$', QuizResultAPI.as_view()),
    re_path(r'^response/', ResponseAPI.as_view()),
]

urlpatterns += router.urls
