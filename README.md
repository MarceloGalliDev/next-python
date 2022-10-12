# next-python
 Project in react-next-typescript-python

>> Front-End
> Habilitar a execução de scripts no Windows
    - Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    
> Criar o projeto
    - npx create-next-app . --ts

> Framework
    - Material UI - npm i @mui/material@5.10.2 @emotion/react@11.10.0 @emotion/styled@11.10.0


> NextJS
    - Primeiros passos
    - Criar os components da página principal
        - Header
        - Footer
        - Aside
    
> Styled-Components
    - Posso concatenar JS dentro dos parametros de CSS
        - Exemplo:
            var primaryColor = '#F52273';
            export const Valor = styled('p')`
                    margin: 0;
                    font-weight: bold;
                    color: ${() => primaryColor};
            `;

> Theme
    - Crio um theme central e aplico a toda aplicação, onde posso resgatar utilizando props
        - Exemplo:
            export const Valor = styled('p')`
                margin: 0;
                font-weight: bold;
                color: ${(props) => props.theme.palette.primary.main};
            `;

> Criando responsividade para outros tamanho de tela
    - Criando BreakPoint


>> Back-End
> Django
    - Para python, framework voltada para desenvolvimento web, ajuda a resolver problemas com desenvolvimento web
    - criando o projeto
        - pip install django
        - django-admin startproject myteacher .
        - python manage.py runserver  
    - asgi = é para aplicação assíncrona
    - wsgi = é para aplicação síncrona
    - __init__ = todo arquivo python que começa com __ são chamados de arquivos dander, é para indicar que a pasta tem arquivos importáveis
    - admin.py = para controle de admin do django
    - apps.py = arquivo de configuração do app
    - models.py =  arquivo onde vai os modelos da aplicação, representa as tabelas no banco de dados
    - testes.py = relativo aos testes unitários
    - views.py = todo código da camada de view, regra do negócio
    - migrations = é a atualização do app

    - comunicação das rotas (MTV)
        > cliente faz a requisição GET para /
        > URL Dispatcher envia para o VIEW
        > VIEW faz a busca nos Models que retorna com a regra do negócio
        > VIEW então busca o Template e retorna para View
        > Completado a sequência retorna para o Cliente com o conteúdo HTML

    - comunicação das rotas entre Front e Back
        > App Frontend faz a requisição GET
        > API onde encontra-se o Backend retor com um STATUS CODE, 200 que é Ok se ocorrer corretamente

    - Migration
        - é a forma de versionar o banco de dados
            - python manage.py makemigrations = cria o migration
            - python manage.py migrate = inclui no banco de dados
        - no SQLite3 temos uma sequencia de tabelas onde o primeiro nome é o nome da app e o segundo é a tabela
        
> Imsonia 
    - Para realizar teste de API

> Virtual .env
    - No windows tem que habilitar a execução de scripts no powershell
        - Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
        - macOs
            - python3 -m venv .venv
            - source .venv/bin/activate
            - ou anaconda (mais fácil identificar o PATH)
        - windows
            - python -m venv .venv
            - .\.venv\Scripts\activate
