import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Main from "./components/template/Main";
import Idoso from "./Idoso/Idoso";
import Anunciante from "./Anunciante/Anunciante";
import Cadastro from "./Cadastro/Cadastro";
import Login from "./Login/Login";
import InicioUsuario from "./components/template/InicioUsuario";
import CadastroEvento from "./Evento/CadastroEvento";
import RecuperaSenha from "./components/Formulario/RecuperaSenha";
import CadastroAnunciante from "./Anunciante/CadastroAnunciante";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={InicioUsuario} />
      <Route path="/idoso" component={Idoso} />
      <Route path="/anunciante" component={Anunciante} />
      <Route path="/login" component={Login} />
      <Route path="/recuperarSenha" component={RecuperaSenha} />
      <Route path="/cadastroAnunciante" component={CadastroAnunciante} />
      <Route path="/cadastroEvento" component={CadastroEvento} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
