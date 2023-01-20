from rest_framework.serializers import Serializer
from rest_framework.serializers import ModelSerializer
from rest_framework.fields import CharField
from api.models import PropertiesModel


class PropertiesRequestSerializer(Serializer):
    smiles = CharField(required=True)


class PropertiesModelSerializer(ModelSerializer):
    class Meta:
        model = PropertiesModel
        fields = "__all__"
