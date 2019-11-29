
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from Quiz.models import Quiz, Answer, Question, QuizTakers, Response


class ResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Response
        fields = "__all__"


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = "__all__"


class QuestionSerializer(serializers.ModelSerializer):
    answer_set = AnswerSerializer(many=True)

    class Meta:
        model = Question
        fields = "__all__"


class QuizTakersSerializer(serializers.ModelSerializer):
    response_set = ResponseSerializer(many=True)

    class Meta:
        model = QuizTakers
        fields = "__all__"


class QuizSerializer(serializers.ModelSerializer):
    quiztakers_set = serializers.SerializerMethodField()
    question_set = QuestionSerializer(many=True)

    class Meta:
        model = Quiz
        fields = "__all__"

    def get_quiztakers_set(self, obj):
        try:
            items = QuizTakers.objects.get(
                user=self.context['request'].user, quiz=obj)
            serializer = QuizTakersSerializer(items)
            return serializer.data
        except QuizTakers.DoesNotExist:
            return None
