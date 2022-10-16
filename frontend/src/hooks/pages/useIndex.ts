import { useEffect, useState } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../service/ApiService";

export function useIndex() {
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [professorSelecionado, setProfessorSelecionado] = useState<Professor | null>(null);
    const [mensagem, setMensagem] = useState('');


    useEffect(() => {
      ApiService.get('/professores').then((resposta) => {
        setListaProfessores(resposta.data)
      })
    }, []);

    useEffect(() => {
      limparFormulario()
    }, [professorSelecionado])

    function marcarAula() {
      if (professorSelecionado !== null) {
        if (validarDadosAula()) {
          ApiService.post('/professores/' + professorSelecionado.id + '/aulas', { nome, email })//o objeto dentro da url são as informações que serão enviadas
          .then(() => { setProfessorSelecionado(null), setMensagem('Cadastrado com sucesso!')})//resposta se true
          .catch((error) => { setMensagem(error.response?.data.message)})//resposta em caso de false, retorna um erro, respondido ?(talvez não tenha resposta), data = dados, message = vem do back end
        } else {
          setMensagem('Preencha os dados corretamente!')
        }
      }
    };

    function validarDadosAula() {
      return nome.length > 0 && email.length > 0;
    };

    function limparFormulario() {
      setNome('');
      setEmail('');
    };

    return {
        listaProfessores,
        nome,
        setNome,
        email,
        setEmail,
        professorSelecionado,
        setProfessorSelecionado,
        marcarAula,
        mensagem,
        setMensagem,
    }
}
//return listaProfessores = estamos externando o array criado para uso fora do hook