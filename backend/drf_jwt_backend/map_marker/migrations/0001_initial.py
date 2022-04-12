# Generated by Django 4.0.3 on 2022-04-12 15:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Marker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=50)),
                ('lat', models.DecimalField(decimal_places=20, max_digits=20)),
                ('lng', models.DecimalField(decimal_places=20, max_digits=20)),
            ],
        ),
    ]
