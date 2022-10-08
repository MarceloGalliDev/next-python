import type { NextPage } from 'next'
import Cabecalho from '../src/components/Cabecalho/Cabecalho'


const Home: NextPage = () => {
  return (
    <div>
      <Cabecalho></Cabecalho>
    </div>
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