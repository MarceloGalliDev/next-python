import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import { FormatadorService } from "../../service/FormatadorService";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from "./Lista.style";


interface ListaProps {
    professores: Professor[],
    onSelect: (professor: Professor) => void,
};

const Lista = (props: ListaProps) => {
    return (
        <div>
            {props.professores.length > 0 ? (
                <ListaStyled>
                    {props.professores.map(professor => (
                        <ItemLista key={professor.id}>
                            <Foto src={professor.foto}/>
                            <Informacoes>
                                <Nome>{professor.nome}</Nome>
                                <Valor>{FormatadorService.valorMonetario(professor.valor_hora)} por hora</Valor>
                                <Descricao>{FormatadorService.limitadorTexto(professor.descricao, 200)}</Descricao>
                                <Button 
                                    sx={{ width: '70%'}}
                                    onClick={() => props.onSelect(professor)}//propriedade vindo la no index.tsx, incluica função de lá, vinda como pripriedade aqui
                                >Marcar Aula com {professor.nome}</Button>
                            </Informacoes>
                        </ItemLista>
                    ))}
                </ListaStyled>
            ) : (
                <ListaVazia>
                    <p>Nenhum professor encontrado!</p>
                </ListaVazia>
            )}
        </div>
    )
};

export default Lista;