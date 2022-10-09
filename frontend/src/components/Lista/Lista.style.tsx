import { styled } from "@mui/material";

export const ListaStyled = styled('ul')`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: ${({theme}) => theme.spacing(10, 2, 10, 2)};

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({theme}) => theme.spacing(9)};
    
    ${({theme}) => theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
        gap: ${({theme}) => theme.spacing(8)};
    };//definindo especificações em md, que é dentro do theme, telas de tamanho médio
`;

export const ItemLista = styled('li')`
    list-style: none;
`;

export const ListaVazia = styled('h2')`
    text-align: center;
    padding: ${({theme}) => theme.spacing(20, 0)};
`;

export const Foto = styled('img')`
    width: 100%;
`;//width está 100% do elemento pai

export const Informacoes = styled('div')`

`;

export const Nome = styled('h3')`
    margin: ${({theme}) => theme.spacing(2, 0, 0, 0)};
`;//spacing tem base 8px, entao sempre será multiplos de 8px, ou seja spacing aqui tem 16px

export const Valor = styled('p')`
    margin: 0;
    font-weight: bold;
    color: ${({theme}) => theme.palette.primary.main};
`;//desconstrui o props pegando somente o theme

export const Descricao = styled('p')`
    word-break: break-word;
`;

