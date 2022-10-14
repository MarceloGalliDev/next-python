from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from teacher.models import Aula, Professor
from teacher.serializers import ProfessorSerializer, CadastrarAulaSerializer, AulaSerializer
class ProfessorAPIView(APIView):
    def get(self, request, format=None):
        professores = Professor.objects.all() #buscar todos professores dentro do banco de dados
        serializer = ProfessorSerializer(professores, many=True) #usamos many pois é uma lista composta de professores
        return Response(serializer.data, status=HTTP_200_OK)

class CadastrarAulaAPIView(APIView):
    def post(self, request, id, format=None): # como vou inserir o id do professor na URL eu incluo no post como variavel
        professor = get_object_or_404(Professor, id=id)
        serializer = CadastrarAulaSerializer(data=request.data) # pegando os dados que foram enviados na requisição
        if serializer.is_valid():
            aula = Aula(
                nome=serializer.validated_data.get('nome'), # estamos pegando o dado já validado, que foi passado no parametro serializer
                email=serializer.validated_data.get('email'),
                professor=professor
            )
            aula.save()
            aula_serializer = AulaSerializer(aula, many=False)
            return Response(aula_serializer.data, status=HTTP_201_CREATED)
        return Response({"message": "Houve erro na validação!", "errors": serializer.errors}, status=HTTP_400_BAD_REQUEST)# estamos passando um dicionario python para resposta do erro