# Generated by Django 4.2.6 on 2023-10-15 05:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('abrev', models.CharField(max_length=3)),
                ('fullname', models.CharField(max_length=120)),
                ('longitude', models.DecimalField(decimal_places=4, max_digits=8)),
                ('latitude', models.DecimalField(decimal_places=4, max_digits=8)),
            ],
        ),
    ]
