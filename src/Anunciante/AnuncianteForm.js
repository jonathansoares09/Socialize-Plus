import React, { Component, useState, useEffect } from 'react';
import ApiReceitaWs from './ApiReceitaWs';
import axios from 'axios';
import Main from '../components/template/Main';
import AnuncianteFuncao from './AnuncianteFuncao';

const urlAPI = "http://localhost:5000/api/anunciante";

const initialState = { 
  anunciante: { id: '', nomeTitular: '', email: '', emailContato:'', senha:'', cpfTitular:'', razaoSocial:'',cnpj:'',nomeFantasia:'', inscricaoEstadual:'',
  telefone:'', endereco:'', numEndereco:'', bairro: '', cidade: '', uf: '', cep: '', ativo:''}, 
  lista: []  
}

// const [id, setId] = useState(0);
// const [nomeTitular, setNomeTitular] = useState('');
// const [email, setEmail] = useState('');
// const [emailContato, setEmailContato] = useState('');
// const [senha, setSenha] = useState('');
// const [cpfTitular, setCpfTitular] = useState('');
// const [razaoSocial, setRazaoSocial] = useState('');
// const [cnpj, setCnpj] = useState('');
// const [nomeFantasia, setNomeFantasia] = useState('');
// const [inscricaoEstadual, setInscricaoEstadual] = useState('');
// const [telefone, setTelefone] = useState('');
// const [endnereco, setEndereco] = useState('');
// const [numEndereco, setNumEndereco] = useState('');
// const [bairro, setBairro] = useState('');
// const [cidade, setCidade] = useState('');
// const [uf, setUf] = useState('');
// const [cep, setCep] = useState('');
// const [ativo, setAtivo] = useState('');

export default class AnuncianteForm extends Component {

  state = { ...initialState } // Estado inicial

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     nomeEmpresa: ' ',
  //     termos: false,
  //   };

  //   this.handleInputChange = this.handleInputChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  async componentDidMount(){
    const response = await ApiReceitaWs.get("27865757000102");
    console.log(response.data);

    axios(urlAPI).then(resp => { 
      this.setState({ lista: resp.data }) 
  })
  }

  limpar() {
    this.setState({ anunciante: initialState.anunciante});
   }
  
  salvar(e) {
    e.preventDefault();
    const anunciante = this.state.anunciante;
    anunciante.id = Number(anunciante.id);
    const metodo = anunciante.id ? 'put' : 'post'; //Verificação do método a ser usado pela existência ou não do valor de ID.
    const url = anunciante.id ? `${urlAPI}/${anunciante.id}` : urlAPI; 
  
    axios[metodo](url, anunciante)
    .then(resp => {
        const lista = this.getListaAtualizada(resp.data)
        this.setState({ anunciante: initialState.anunciante, lista })
    })
  }
  
  getListaAtualizada(anunciante, add = true) {
    const lista = this.state.lista.filter(a => a.id !== anunciante.id);
    if (add) lista.unshift(anunciante);
    
    return lista;
  }
  
  atualizaCampo(event) {
    //clonar usuário a partir do state, para não alterar o state diretamente
    const anunciante = { ...this.state.anunciante };
    //usar o atributo NAME do input identificar o campo a ser atualizado
    anunciante[event.target.name] = event.target.value;
    //atualizar o state
    this.setState({ anunciante });
  }
  
  carregar(anunciante) {
    this.setState({anunciante})
  }

  // handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // }

  // handleSubmit(event) {
  //   const { nomeEmpresa } = this.state;
  //   alert('Sua empresa' + nomeEmpresa + 'foi enviada para análise, aguarde nosso retorno em seu email');
  //   event.preventDefault();
  // }

  renderForm() {
    return (
      <form onSubmit={e=>this.salvar(e)}>
       <div>
        <div class="container">
          <label htmlFor="nomeFantasia">
            <b>Nome Fantasia</b>
          </label>
          <input
            type="text"
            id="nomeFantasia"
            name="nomeFantasia"
            placeholder="Nome Fantasia"
            value={this.state.anunciante.nomeFantasia}
            onChange={ e => this.atualizaCampo(e)}
            required
          />
            
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            value={this.state.anunciante.email}
            onChange={ e => this.atualizaCampo(e)}  
            required
          />
          
          <label htmlFor="senha">
         <b>Senha</b>
          </label>
          <input
          type="password"
          placeholder="Senha"
          name="senha"
          id="senha"
          value={this.state.anunciante.senha}
          onChange={ e => this.atualizaCampo(e)}
          required
          />

          <label htmlFor="cep">
          <b>Cep</b>
          </label>
          <input
            type="text"
            placeholder="CEP"
            name="cep"
            id="cep"
            value={this.state.anunciante.cep}
            onChange={e => this.atualizaCampo(e)}
            required
          />

            <label for="cnpj">
            <b>CNPJ</b>
            </label>
            <input
              type="text"
              placeholder="CNPJ"
              name="cnpj"
              value={this.state.anunciante.cnpj}
              onChange={ e => this.atualizaCampo(e)}
              required
            />
          
          </div>

          <div class="container">
          <h3> Dados do Proprietario </h3>
            <label htmlFor="nomeTitular">
              <b>Nome Completo</b>
            </label>
            <input
              type="text"
              placeholder="Nome e sobrenome"
              name="nomeTitular"
              id="nomeTitular"
              value={this.state.anunciante.nomeTitular}
              onChange={ e => this.atualizaCampo(e)}
              required
            />
            
          <label htmlFor="emailContato">
            <b>Email de Contato</b>
          </label>
          <input
            type="text"
            placeholder="Email de Contato"
            name="emailContato"
            id="emailContato"
            value={this.state.anunciante.emailContato}
            onChange={ e => this.atualizaCampo(e)}
            required 
          />

          <label htmlFor="cpfTitular">
          <b>Cpf</b>
          </label>
          <input
            type="text"
            placeholder="CPF"
            name="cpfTitular"
            id="cpfTitular"
            value={this.state.anunciante.cpfTitular}
            onChange={ e => this.atualizaCampo(e)}
            required
          />

            <label htmlFor="telefone">
            <b>Celular com DDD</b>
          </label>
          <input
            type="text"
            placeholder="Telefone"
            name="telefone"
            id="telefone"
            value={this.state.anunciante.telefone}
            onChange={ e => this.atualizaCampo(e)}
            required
          />
              </div>
              <button type="submit">Enviar</button>
        </div>
      </form>
    );
  }

  render() {
    return (
      <Main>
      <AnuncianteFuncao />
       {this.renderForm()}
      </Main>
    )
  }

}