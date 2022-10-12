from django.db import models

class Professor(models.Model):
    nome = models.CharField(max_length=100, null=False, blank=False)
    valor_hora = models.DecimalField(max_digits=9, decimal_places=2, null=False, blank=False)
    descricao = models.TextField(null=False, blank=False)
    foto = models.URLField(max_length=255, null=False, blank=False)
    
#é uma tabela que tem nome Professor, e os atributos refere-se a uma coluna
# nome é um tributo, que representa uma coluna na nossa tabela onde temos os parâmetros incluidos, como null, max_length e blank