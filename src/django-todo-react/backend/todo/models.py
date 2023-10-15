from django.db import models

# Create your models here.

class Todo(models.Model):
    abrev = models.CharField(max_length=3)
    fullname = models.CharField(max_length=120)
    longitude = models.DecimalField(max_digits=8, decimal_places=4)
    latitude = models.DecimalField(max_digits=8, decimal_places=4)

    def _str_(self):
        return self.fullname