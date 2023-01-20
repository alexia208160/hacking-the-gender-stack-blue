from django.db import models
from django.contrib.auth.models import User


class Core(models.Model):
    smiles = models.TextField(null=False, unique=True)
    rgroup_labels = models.TextField(null=False)


class RGroup(models.Model):
    smiles = models.TextField(null=False, unique=True)


class PropertiesModel(models.Model):
    MW = models.TextField(null=False)
    ALOGP = models.TextField(null=False)
    HBD = models.TextField(null=False)
    HBA = models.TextField(null=False)
    PSA = models.TextField(null=False)
    ROTB = models.TextField(null=False)
    AROM = models.TextField(null=False)
    ALERTS = models.TextField(null=False)
    RULEOF5 = models.TextField(null=False)
