# Generated by Django 2.2 on 2019-11-27 21:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Quiz', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='quiz',
            options={'ordering': ['created'], 'verbose_name_plural': 'Quizes'},
        ),
        migrations.RemoveField(
            model_name='quiztakers',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='quiztakers',
            name='owner',
        ),
        migrations.RemoveField(
            model_name='response',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='response',
            name='owner',
        ),
    ]
