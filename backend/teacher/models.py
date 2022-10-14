from django.db import models

class Professor(models.Model):
    nome = models.CharField(max_length=100, null=False, blank=False)
    valor_hora = models.DecimalField(max_digits=9, decimal_places=2, null=False, blank=False)
    descricao = models.TextField(null=False, blank=False)
    foto = models.URLField(max_length=255, null=False, blank=False)
# é uma tabela que tem nome Professor, e os atributos refere-se a uma coluna
# nome é um tributo, que representa uma coluna na nossa tabela onde temos os parâmetros incluidos, como null, max_length e blank
    
class Aula(models.Model):
    nome = models.CharField(max_length=100, null=False, blank=False)
    email = models.EmailField(max_length=255, null=False, blank=False)
    professor = models.ForeignKey(to=Professor, on_delete=models.CASCADE, related_name="aulas")
# professor é um tributo relacionado a outro, por isso usamos o foreignKey(to= é com quem ele tem relacionamento,)
# on_delete=models.CASCADE é uma forma de apagar o relacionamento e o que vai acontecer, temos várias opções de relacionamento no on_delete
# realted_name= é uma forma de realizar busca dentro da instancia professor, logo temos todas as aulas para o professor desejado
