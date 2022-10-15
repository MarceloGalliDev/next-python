import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'
import { useIndex } from '../src/hooks/pages/useIndex'


const Home: NextPage = () => {
  const { listaProfessores } = useIndex()
  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista professores={listaProfessores}/>
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

