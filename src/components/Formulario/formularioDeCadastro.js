import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./formulario.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Main from '../template/Main';
import FlashMessage from './FlashMessage'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

const urlAPI = "http://localhost:5000/api/usuario";

const FormularioDeCadastro = () =>  {

const [success, setSuccess] = useState(false);
const [message, setMessage] = useState('');

const [id, setId] = useState(0);
const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState({senha: '', showPassword: false});
const [celular, setCelular] = useState('');
const [sexo, setSexo] = useState('');
const [endereco, setEndereco] = useState('');
const [numEndereco, setNumEndereco] = useState('');
const [bairro, setBairro] = useState('');
const [cidade, setCidade] = useState('');
const [uf, setUf] = useState('');
const [diaNasc, setDiaNasc] = useState('');
const [mesNasc, setMesNasc] = useState('');
const [anoNasc, setAnoNasc] = useState('');
const [ativo, setAtivo] = useState('S');
const [perfil, setPerfil] = useState('idoso');
const [usuario, setUsuario] = useState({});
const [usuarios, setUsuarios] = useState([{}]);

const handleClickShowPassword = () => {
  setSenha({
    ...state,
    showPassword: !setSenha.showPassword,
  });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const handleChange = (event) => {
  setState({ ...state, [event.target.name]: event.target.checked });
};

const [state, setState] = useState({
  checkedA: true,
  checkedB: true,
  checkedF: true,
  checkedG: true,
});

useEffect(() => {
  carregarUsuarios();
}, []);
 
function limpar() {
  setNome('');
  setEmail('');
  setSenha('');
  setSenha({senha: ''});
  setDiaNasc('');
  setMesNasc('');
  setAnoNasc('');
}

function salvar() {
  const newUsuario = {id: id, nome: nome, email: email, senha:senha, diaNasc: diaNasc, mesNasc: mesNasc, anoNasc: anoNasc, ativo: ativo, perfil: perfil};
  const metodo = newUsuario.id !== 0 ? 'put' : 'post'; //Verificação do método a ser usado pela existência ou não do valor de ID.
  const url = newUsuario.id ? `${urlAPI}/${newUsuario.id}` : urlAPI;

    axios[metodo](url, newUsuario).then(resp => {
        const lista = getListaAtualizada(resp.data)
        setUsuario(newUsuario);
        setUsuarios(lista);
    });
    setSuccess(true);
    limpar();
}

function getListaAtualizada(usuario, add = true) {
  const lista = usuarios.filter(a => a.id !== usuario.id);
  if (add) lista.unshift(usuario);
  
  return lista;
}

function carregarUsuarios(){
  axios(urlAPI).then(resp => {
      setUsuarios(resp.data);
  })
}

function carregar(usuario){
  setId(usuario.id)
  setNome(usuario.nome);
  setEmail(usuario.email);
  setDiaNasc(usuario.diaNasc);
  setMesNasc(usuario.mesNasc);
  setAnoNasc(usuario.anoNasc);
}

 function renderForm() {
  return (
    <form onSubmit={e=>salvar(e)}>
        <div class="container" style={{padding: 0}}>
            <FormControl style={{marginBottom: '15px'}} variant="outlined">
              <InputLabel htmlFor="component-outlined">Nome Completo</InputLabel>
              <OutlinedInput
                required
                id="component-outlined"
                value={nome}
                onChange={ e => {setNome(e.target.value)}}
                label="Nome Completo"
              />
            </FormControl>
            <div>
            <p style={{fontSize: '12px', margin: 0, color: '#606770'}}>Data de nascimento</p>
            <FormControl style={{width: '70px', marginRight: '10px', marginBottom: '15px'}} variant="outlined">
            <InputLabel htmlFor="component-outlined">Dia</InputLabel>
            <OutlinedInput
              required
              id="component-outlined"
              value={diaNasc}
              onChange={ e => {setDiaNasc(e.target.value)}}
              label="Dia"
            />
          </FormControl>
          <FormControl style={{width: '70px', marginRight: '10px', marginBottom: '15px'}} variant="outlined">
            <InputLabel htmlFor="component-outlined">Mês</InputLabel>
            <OutlinedInput
              required
              id="component-outlined"
              value={mesNasc}
              onChange={ e => {setMesNasc(e.target.value)}}
              label="Mês"
            />
          </FormControl>
          <FormControl style={{width: '100px', marginBottom: '15px'}} variant="outlined">
            <InputLabel htmlFor="component-outlined">Ano</InputLabel>
            <OutlinedInput
              required
              id="component-outlined"
              value={anoNasc}
              onChange={ e => {setAnoNasc(e.target.value)}}
              label="Ano"
            />
          </FormControl>
          </div>
          <br /><br />
          <FormControl style={{marginBottom: '15px'}} variant="outlined">
            <InputLabel htmlFor="component-outlined">E-mail</InputLabel>
            <OutlinedInput
              required
              id="component-outlined"
              value={email}
              onChange={ e => {setEmail(e.target.value)}}
              label="E-mail"
            />
          </FormControl>

        <FormControl style={{marginBottom: '15px'}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
          <OutlinedInput id="outlined-adornment-password"
            type={senha.showPassword ? 'text' : 'password'}
            value={senha.senha}
            onChange={ e => {setSenha(e.target.value)}}
            endAdornment={
              <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} 
                  onMouseDown={handleMouseDownPassword} edge="end">
                    {senha.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
              </InputAdornment>
            }
            label="Senha"
          />
        </FormControl>

          <FormControlLabel
            style={{marginBottom: 0}}
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
              />
            }
            label="Aceito todos os termos"
          />
          <p style={{fontSize: '12px', marginBottom: '15px', marginTop: 0, color: '#606770'}}>Ao clicar em Cadastre-se, você concorda com nossos Termos, Política de Dados e Política de Cookies. Você poderá receber notificações por SMS e cancelar isso quando quiser.</p>
          <button type="submit" style={{fontWeight: 'bold'}}>Cadastre-se</button>
        </div>
        {success ? <FlashMessage message={message}/> : ''}
    </form>
  );
 }

   return (
      renderForm()
   )

} 
export default FormularioDeCadastro;