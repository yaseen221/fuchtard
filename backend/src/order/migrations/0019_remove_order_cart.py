# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-05 17:34
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0018_fill_cart_meta_field'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='cart',
        ),
    ]
