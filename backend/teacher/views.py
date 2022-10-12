from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework.status import HTTP_200_OK
from teacher.models import Professor
from teacher.serializers import ProfessorSerializer
class ProfessorAPIView(APIView):
    def get(self, request, format=None):
        professores = Professor.objects.all() #buscar todos professores dentro do banco de dados
        serializer = ProfessorSerializer(professores, many=True) #usamos many pois é uma lista composta de professores
        return Response(serializer.data, status=HTTP_200_OK)