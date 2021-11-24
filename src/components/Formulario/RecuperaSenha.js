import React from "react";
import "./RecuperaSenha.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Cadastro from "../../Cadastro/Cadastro";
import imgSeis from "../../images/5.jpg";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function RecuperaSenha(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className = "pag">
       <div className="containerDuplo">
        <div>
          <h2> Coloque as informações da sua conta e depois cheque seu email!</h2>
      <form>
        <div className="container">
          <label for="uname">
            <b>Email cadastrado</b>
          </label>
          <input type="text" placeholder="Email" name="uname" required />
          <label for="psw">
            <b>Confirmação de Email</b>
          </label>
          <input type="text" placeholder="Repita seu Email" name="uname" required />
           <button type="submit"> Enviar </button>{" "}
          </div>
          </form>

 </div>
 <img className="imgEstilo" src={imgSeis} />

 </div>
 </div>
  );
}

export default RecuperaSenha;