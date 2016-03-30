# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-03-30 10:20
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('food', '0007_foodcategory_slug'),
        ('order', '0002_auto_20160124_1137'),
    ]

    operations = [
        migrations.CreateModel(
            name='Gift',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('requirement', models.IntegerField()),
                ('food_item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='food.FoodItem')),
            ],
        ),
    ]
