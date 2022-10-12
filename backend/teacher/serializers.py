from rest_framework import serializers
from teacher.models import Professor

class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        fields = '__all__' #usando o dander eu trago todas as colunas da minha tabela, ou posso especificar quais eu quero usando ('id', 'name') por exemplo