import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'


const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Professor 1",
      foto: "http://github.com/MarceloGalliDev.png",
      descricao: "Descrição do professor 1",
      valor_hora: 100
    },
    {
      id: 2,
      nome: "Professor 2",
      foto: "http://github.com/MarceloGalliDev.png",
      descricao: "Descrição do professor 2",
      valor_hora: 100
    },
    {
      id: 3,
      nome: "Professor 3",
      foto: "http://github.com/MarceloGalliDev.png",
      descricao: "Descrição do professor 3",
      valor_hora: 100
    },
    {
      id: 4,
      nome: "Professor 4",
      foto: "http://github.com/MarceloGalliDev.png",
      descricao: "Descrição do professor 4",
      valor_hora: 100
    },
  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista professores={professores}/>
    </Box>
  )
}

export default Home


//criando componente
//so realizar a tipagem do props
/*
function Button(props) {
  return <a href="#">{props.title}</a>
}

<Button title="click" /><br />
<Button title="Push" /><br />
<Button title="Pull" /><br />

*/

