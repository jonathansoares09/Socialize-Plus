import React, { useState, useEffect } from 'react';
import ApiReceitaWs from './ApiReceitaWs';
import axios from 'axios';
import Main from '../components/template/Main';
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import FlashMessage from './FlashMessage';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from "@material-ui/core/FormControlLabel";

const urlAPI = "http://localhost:5000/api/anunciante";

const AnuncianteForm = () => {

  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const [id, setId] = useState(0);
  const [nomeTitular, setNomeTitular] = useState('');
  const [email, setEmail] = useState('');
  const [emailContato, setEmailContato] = useState('');
  const [senha, setSenha] = useState('');
  const [cpfTitular, setCpfTitular] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [inscricaoEstadual, setInscricaoEstadual] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numEndereco, setNumEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [cep, setCep] = useState('');
  const [ativo, setAtivo] = useState('');
  const [perfil, setPerfil] = useState('anunciante');
  const [anunciante, setAnunciante] = useState({});
  const [anunciantes, setAnunciantes] = useState([{}]);

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
    carregarAnunciantes();
  }, []);

  function limpar() {
    setNomeTitular(''); setEmail(''); setSenha(''); setSenha({senha: ''}); setCpfTitular(''); setRazaoSocial(''); setCnpj('');
    setNomeFantasia(''); setInscricaoEstadual(''); setTelefone(''); setEndereco(''); setNumEndereco(''); setBairro('');
    setCidade(''); setUf(''); setCep(''); setAtivo(''); setEmailContato(''); setPerfil('');
  }
  
  function salvar() {
    const newAnunciante = {id: id, nomeTitular: nomeTitular, email: email, senha:senha, cpfTitular: cpfTitular, razaoSocial: razaoSocial, cnpj: cnpj, nomeFantasia: nomeFantasia, 
    inscricaoEstadual: inscricaoEstadual, telefone: telefone, endereco: endereco, numEndereco: numEndereco, bairro: bairro, cidade: cidade, uf: uf, cep: cep, ativo:ativo, emailContato: emailContato, perfil: perfil};
    const metodo = newAnunciante.id !== 0 ? 'put' : 'post'; //Verificação do método a ser usado pela existência ou não do valor de ID.
    const url = newAnunciante.id ? `${urlAPI}/${newAnunciante.id}` : urlAPI;
  
      axios[metodo](url, newAnunciante).then(resp => {
          const lista = getListaAtualizada(resp.data)
          console.log("metodo: " + metodo);
          console.log("retorno: " + resp.data);
          setAnunciante(newAnunciante);
          setAnunciantes(lista);
      });
      setSuccess(true);
      limpar();
  }
  
  function getListaAtualizada(anunciante, add = true) {
    const lista = anunciantes.filter(a => a.id !== anunciante.id);
    if (add) lista.unshift(anunciante);
    
    return lista;
  }
  
  function carregarAnunciantes(){
    axios(urlAPI).then(resp => {
        setAnunciantes(resp.data);
        
    })
  }

  // function carregar(anunciante){
  //   setId(anunciante.id); setNomeTitular(anunciante.nomeTitular) // terminar
  // }

  function renderForm() {
    return (
      <form onSubmit={e=>salvar(e)}>
        <div class="container">
            <FormControl style={{marginBottom: '15px'}} variant="outlined">
              <InputLabel htmlFor="component-outlined">Nome Fantasia</InputLabel>
              <OutlinedInput
                required
                id="component-outlined"
                value={nomeFantasia}
                onChange={ e => {setNomeFantasia(e.target.value)}}
                label="Nome Fantasia"
              />
            </FormControl>

            <FormControl style={{marginBottom: '15px'}} variant="outlined">
              <InputLabel htmlFor="component-outlined">CEP</InputLabel>
              <OutlinedInput
                required
                id="component-outlined"
                value={cep}
                onChange={ e => {setCep(e.target.value)}}
                label="CEP"
              />
            </FormControl>

            <FormControl style={{marginBottom: '15px'}} variant="outlined">
              <InputLabel htmlFor="component-outlined">CNPJ</InputLabel>
              <OutlinedInput
                required
                id="component-outlined"
                value={cnpj}
                onChange={ e => {setCnpj(e.target.value)}}
                label="CNPJ"
              />
            </FormControl>

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
          
          </div>

          <div class="container">
          <h3> Dados do Proprietario </h3>
            <FormControl style={{marginBottom: '15px'}} variant="outlined">
                <InputLabel htmlFor="component-outlined">Nome Completo</InputLabel>
                <OutlinedInput
                  required
                  id="component-outlined"
                  value={nomeTitular}
                  onChange={ e => {setNomeTitular(e.target.value)}}
                  label="Nome Completo"
                />
              </FormControl>
            
              <FormControl style={{marginBottom: '15px'}} variant="outlined">
                <InputLabel htmlFor="component-outlined">E-mail de Contato</InputLabel>
                <OutlinedInput
                  required
                  id="component-outlined"
                  value={emailContato}
                  onChange={ e => {setEmailContato(e.target.value)}}
                  label="E-mail de Contato"
                />
              </FormControl>

              <FormControl style={{marginBottom: '15px'}} variant="outlined">
                <InputLabel htmlFor="component-outlined">CPF</InputLabel>
                <OutlinedInput
                  required
                  id="component-outlined"
                  value={cpfTitular}
                  onChange={ e => {setCpfTitular(e.target.value)}}
                  label="CPF"
                />
              </FormControl>

              <FormControl style={{marginBottom: '15px'}} variant="outlined">
                <InputLabel htmlFor="component-outlined">Celular</InputLabel>
                <OutlinedInput
                  required
                  id="component-outlined"
                  value={telefone}
                  onChange={ e => {setTelefone(e.target.value)}}
                  label="Celular com DDD"
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
      // <AnuncianteFuncao />
       renderForm()
    )
}
export default AnuncianteForm;