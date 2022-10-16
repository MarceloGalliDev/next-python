export const FormatadorService = {
    valorMonetario(valor: number): string {
        return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
    },//mascara para retornar o valor monetario com o cifrão e , corretamente
    
    limitadorTexto(texto: string, tamanhoMaximo: number): string {
        if (texto.length < tamanhoMaximo) {
            return texto;
        }
        return texto.slice(0, tamanhoMaximo) + '...';
    },//mascara para construir a descricao ate 50 caracteres, se estiver maior que 50 entra função slice 
}