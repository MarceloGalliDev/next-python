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

> Imsonia 
    - Para realizar teste de API

> Virtual .env
    - No windows tem que habilitar a execução de scripts no powershell
        - Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    