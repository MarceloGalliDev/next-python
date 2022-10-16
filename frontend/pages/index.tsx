import { Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'
import { useIndex } from '../src/hooks/pages/useIndex'


const Home: NextPage = () => {
  const { 
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
  } = useIndex()


  return (
    <div>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <Lista 
          professores={listaProfessores}
          onSelect={(professor) => setProfessorSelecionado(professor)}
        />
      </Box>

      <Dialog 
        open={professorSelecionado !== null}
        fullWidth
        PaperProps={{sx: {p: 5}}}
        onClose={() => setProfessorSelecionado(null)}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField 
              label="Digite o Nome"
              type="text"
              fullWidth
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label="Digite o Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{mt:3}}>
          <Button
            onClick={() => setProfessorSelecionado(null)} 
            size='large' 
            sx={{width: 100, borderRadius: 2}}
          >Cancelar</Button>
          <Button
            onClick={() => marcarAula()} 
            size='large' 
            sx={{width: 100, borderRadius: 2}}
          >Marcar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        message={mensagem}
        open={mensagem.length > 0}
        autoHideDuration={2500}//fechar automaticamente a janela
        onClose={() => setMensagem('')}
      />

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

