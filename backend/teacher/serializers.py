from dataclasses import fields
from rest_framework import serializers
from teacher.models import Professor, Aula
from django.forms import ValidationError

class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        fields = '__all__' #usando o dander eu trago todas as colunas da minha tabela, ou posso especificar quais eu quero usando ('id', 'name') por exemplo
        
class CadastrarAulaSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    nome = serializers.CharField(max_length=100)
    
    def validate_nome(self, value):
        if len(value) < 3:
            raise ValidationError("Deve ter pelo menos três caracteres!")
        return value
    
class AulaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aula
        fields = '__all__'