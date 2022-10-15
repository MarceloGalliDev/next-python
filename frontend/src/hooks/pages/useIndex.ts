import { useEffect, useState } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../service/ApiService";

export function useIndex() {
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);

    useEffect(() => {
      ApiService.get('/professores').then((resposta) => {
        setListaProfessores(resposta.data)
      })
    }, [])

    return {
        listaProfessores
    }
}
//return listaProfessores = estamos externando o array criado para uso fora do hook