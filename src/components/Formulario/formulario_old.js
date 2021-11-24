import React from "react";
import "./formulario.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Cadastro from "../../Cadastro/Cadastro";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

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

  return (
    <div>
      <form>
        <div className="container">
          <label for="uname">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Email" name="uname" required />
          <label for="psw">
            <b>Senha</b>
          </label>
          <input type="password" placeholder="Senha" name="psw" required />
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
      </form>
      <div className="btnCadastro">
        <Cadastro></Cadastro>
      </div>
    </div>
  );
}

export default Formulario;
