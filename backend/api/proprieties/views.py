from api.proprieties.serializers import (
    PropertiesRequestSerializer,
    PropertiesModelSerializer,
)
from django.http import HttpResponse
from rdkit.Chem import QED
from rdkit import Chem
from drf_spectacular.utils import extend_schema, OpenApiExample, OpenApiParameter
from drf_spectacular.types import OpenApiTypes
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response


class Proprieties(APIView):
    @extend_schema(
        parameters=[
            OpenApiParameter(
                name="smiles",
                style="query",
            ),
        ],
        responses={
            (200, "*/*"): OpenApiTypes.BYTE,
            (200, "applications/json"): OpenApiTypes.BYTE,
        },
    )
    def get(self, request):
        data = request.query_params
        serializer = PropertiesRequestSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        smiles = serializer.validated_data["smiles"]
        mol = Chem.MolFromSmiles(smiles)
        prop = QED.properties(mol)
        print(type(prop))
        rule5 = prop[0] < 500 and prop[1] <= 5 and prop[2] <= 5 and prop[3] <= 10
        modelSerializer = PropertiesModelSerializer(
            data={
                "MW": prop[0],
                "ALOGP": prop[1],
                "HBD": prop[2],
                "HBA": prop[3],
                "PSA": prop[4],
                "ROTB": prop[5],
                "AROM": prop[6],
                "ALERTS": prop[7],
                "RULEOF5": str(rule5),
            }
        )
        modelSerializer.is_valid(raise_exception=True)
        savedModel = modelSerializer.save()

        # Serialize back to json and return
        responseJson = PropertiesModelSerializer(savedModel).data
        return Response(responseJson, status=201)
