# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-05-29 07:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('food', '0011_auto_20160529_1324'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fooditem',
            name='photo',
            field=models.ImageField(upload_to='food_items/', verbose_name='Фотография'),
        ),
    ]
