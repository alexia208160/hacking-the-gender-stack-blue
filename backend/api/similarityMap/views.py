from django.http import HttpResponse
from api.similarityMap.serializers import SimilarityRequestSerializer
from rdkit import Chem
from rdkit.Chem import Draw
from rdkit.Chem.Draw import SimilarityMaps
import io
from PIL import Image
import numpy as np
import rdkit
from rest_framework.views import APIView
from drf_spectacular.utils import extend_schema, OpenApiExample, OpenApiParameter
from drf_spectacular.types import OpenApiTypes


class SimilarityMap(APIView):
    @extend_schema(
        parameters=[
            OpenApiParameter(
                name="smiles1",
                style="query",
            ),
            OpenApiParameter(
                name="smiles2",
                style="query",
            ),
        ],
        responses={
            (200, "*/*"): OpenApiTypes.BYTE,
            (200, "image/svg+xml"): OpenApiTypes.BYTE,
        },
    )
    def get(self, request):
        txt = request.query_params
        print("******************")
        print(txt)

        serializer1 = SimilarityRequestSerializer(data=txt)
        # serializer2 = SimilarityRequestSerializer(data=txt["smiles2"])

        serializer1.is_valid(raise_exception=True)
        # serializer2.is_valid(raise_exception=True)

        smiles1 = serializer1.validated_data["smiles1"]
        smiles2 = serializer1.validated_data["smiles2"]

        mol1 = Chem.MolFromSmiles(smiles1)
        mol2 = Chem.MolFromSmiles(smiles2)
        img = Draw.MolsToGridImage((smiles1, smiles2))

        return HttpResponse(img, content_type="image/svg+xml")

        """
        d = Draw.MolDraw2DCairo(400, 400)
        _, maxWeight = SimilarityMaps.GetSimilarityMapForFingerprint(
            mol1,
            mol2,
            lambda m, i: SimilarityMaps.GetMorganFingerprint(
                m, i, radius=2, fpType="bv"
            ),
            draw2d=d,
        )

        d.FinishDrawing()
        bio = io.BytesIO(d.GetDrawingText())
        img = Image.open(bio)

        return HttpResponse(img, content_type="image/png")
        """
