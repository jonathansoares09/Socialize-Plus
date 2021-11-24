import React, { Component, useState } from 'react';
import axios from 'axios';
import "./formulario.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Cadastro from "../../Cadastro/Cadastro";
import EscolheData from "./EscolheData";
import Formulario from './formulario';
import Main from '../template/Main';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const urlAPI = "http://localhost:5000/api/usuario"; 

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

// const handleChange = (event) => {
//   setState({ ...state, [event.target.name]: event.target.checked });
// };

// const [state, setState] = useState({
//   checkedA: true,
//   checkedB: true,
//   checkedF: true,
//   checkedG: true,
// });

const initialState = { 
  usuario: { id: '', nome: '', email: '', senha:'', celular:'',sexo:'',endereco:'',numEndereco:'', bairro:'',
  cidade:'', uf:'', cep:'', diaNasc: '', mesNasc: '', anoNasc: '', ativo: 'S', perfil:'idoso'}, 
  lista: [] 
}

export default class FormularioDeCadastro extends Component {

  state = { ...initialState } // Estado inicial

 componentDidMount() { 
      axios(urlAPI).then(resp => { 
          this.setState({ lista: resp.data }) 
      })  
 }
 
 limpar() {
  this.setState({ usuario: initialState.usuario});
 }

salvar() {
  const usuario = this.state.usuario;
  usuario.id = Number(usuario.id);
  const metodo = usuario.id ? 'put' : 'post'; //Verificação do método a ser usado pela existência ou não do valor de ID.
  const url = usuario.id ? `${urlAPI}/${usuario.id}` : urlAPI; 

  axios[metodo](url, usuario)
  .then(resp => {
      const lista = this.getListaAtualizada(resp.data)
      this.setState({ usuario: initialState.usuario, lista })
  })
}

getListaAtualizada(usuario, add = true) {
  const lista = this.state.lista.filter(a => a.id !== usuario.id);
  if (add) lista.unshift(usuario);
  
  return lista;
}

atualizaCampo(event) {
  //clonar usuário a partir do state, para não alterar o state diretamente
  const usuario = { ...this.state.usuario };
  //usar o atributo NAME do input identificar o campo a ser atualizado
  usuario[event.target.name] = event.target.value;
  //atualizar o state
  this.setState({ usuario });
}

carregar(usuario) {
  this.setState({usuario})
}

 renderForm() {
  return (
    <form onSubmit={e=>this.salvar(e)}>
        <div class="container">
          <label for="uname">
            <b>Nome e Sobrenome</b>
          </label>
          <input
            type="text"
            placeholder="Nome e Sobrenome"
            name="nome"
            value={this.state.usuario.nome}
            onChange={ e => this.atualizaCampo(e)}
            required
          />
          <b>Data de Nascimento</b>
          <div class="data">
            <input type="number" max="31" min="1" size="5" placeholder="dia" name="diaNasc"
            value={this.state.usuario.diaNasc} onChange={ e => this.atualizaCampo(e)} required />

            <input type="number" max="12" min="1" size="5" placeholder="mes" name="mesNasc"
            value={this.state.usuario.mesNasc} onChange={ e => this.atualizaCampo(e)} required />

            <input type="number" min="1910" size="10" placeholder="ano" name="anoNasc"
            value={this.state.usuario.anoNasc} onChange={ e => this.atualizaCampo(e)} required />
          </div>
          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Email" name="email"
          value={this.state.usuario.email} onChange={ e => this.atualizaCampo(e)} required />
          <label for="senha">
            <b>Senha</b>
          </label>
          <input type="password" placeholder="Senha" name="senha"
           value={this.state.usuario.senha} onChange={ e => this.atualizaCampo(e)} required />
          {/* <label for="senha">
            <b>Repita sua senha</b>
          </label>
          <input type="password" placeholder="Repita a senha" name="repSenha" required /> */}
          {/* <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
              />
            }
            label="Aceito todos os termos"
          /> */}
          <button type="submit">Enviar</button>
        </div>
    </form>
  );
 }

 render() {
   return (
     <Main>
      {this.renderForm()}
     </Main>
   )
 }

}