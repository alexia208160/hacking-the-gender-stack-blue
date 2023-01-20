import re

from numpy import require
from rest_framework.serializers import Serializer
from rest_framework.serializers import CharField


class SimilarityRequestSerializer(Serializer):
    smiles1 = CharField(required=True)
    smiles2 = CharField(required=True)
