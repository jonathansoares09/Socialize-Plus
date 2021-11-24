import React, { useState } from "react";
import axios from "axios";
import "./formulario.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Cadastro from "../../Cadastro/Cadastro";
import { Switch, Route, Redirect } from "react-router";
import Idoso from "../../Idoso/Idoso";
import imgSeis from "../../images/5.jpg";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const url = "http://localhost:5000/api/login/";

function Formulario(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState({senha: '', showPassword: false});
    const [usuario, setUsuario] = useState();
    const [erro, setErro] = useState('');

    const handleClickShowPassword = () => {
      setSenha({
        ...state,
        showPassword: !setSenha.showPassword,
      });
    };
    
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    function handleSubmit(evento) {
      evento.preventDefault(); //serve para evitar que o evento submit carregue uma nova página
      const userForm = { email, senha };
      console.log(userForm);

      axios["post"](url, userForm).then((resp) => {
          console.log("status", resp.status);
          if (resp.status === 200) {
              console.log("dados: ", resp.data); // Usuário foi autenticado
              setUsuario(resp.data);
              localStorage.setItem("socialize", resp.data);
          }
      })
      .catch(function (error) {
          setErro("Usuário inexistente ou servidor off-line.");
          console.log("Usuário inexistente ou servidor off-line.): " + error.message);
      });
    }

  if (usuario) { // Se houver dados do usuário no estado do componente será renderizado
    console.log("entrou no if - user:", localStorage.getItem(usuario))
    //return <Route path="/idoso" component={Idoso} />;
    return <Idoso />;
  }
  else {
  return (
    <div>
     <div className="containerDuplo">
      <img className="imgEstilo" src={imgSeis} />
       <div className="containerLog">
       <h2> Faça login para acessar o Socialize+</h2>
        <form onSubmit={handleSubmit}>
          <div className="container">
            {/* <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
            type="text"
            value={email}
            placeholder="Email"
            name="email"
            onChange={({ target }) => setEmail(target.value)}
            required /> */}
            <FormControl style={{marginBottom: '15px'}} variant="outlined">
              <InputLabel htmlFor="component-outlined">E-mail</InputLabel>
              <OutlinedInput
                required
                id="component-outlined"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                label="E-mail"
              />
            </FormControl>
            {/* <label htmlFor="senha">
              <b>Senha</b>
            </label>
            <input
            type="password"
            value={senha}
            placeholder="Senha"
            name="senha"
            onChange={({ target }) => setSenha(target.value)}
            required /> */}
            <FormControl style={{marginBottom: '15px'}} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
              <OutlinedInput id="outlined-adornment-password"
                type={senha.showPassword ? 'text' : 'password'}
                value={senha.senha}
                onChange={({ target }) => setSenha(target.value)}
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
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                />
              }
              label="Lembre-se de mim"
            />
            <button type="submit"> Login</button>{" "}
            <div className="container">
              <span className="psw">
                <Link className="link" to="/recuperarSenha">
                  {" "}
                  Esqueci minha senha{" "}
                </Link>
              </span>
            </div>
          </div>
          <div className="btnCadastro">
           <Cadastro></Cadastro>
          </div>
        </form>
       </div>
     </div>
    </div>
  );
 }
}

export default Formulario;
