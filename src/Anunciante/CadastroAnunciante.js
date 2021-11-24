import React from "react";
import "./CadastroAnunciante.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import AnuncianteForm from "./AnuncianteForm";

import BarraNav from "../components/BarraNav/BarraNav";

function CadastroAnunciante() {

  return (
    <div className="pag">
    <BarraNav titulo = "Socialize+" rota = "/idoso" texto = "Pagina inicial"/>
    <h2> Cadastre aqui sua empresa para poder anunciar em nosso site! </h2>


 <div>
     <AnuncianteForm ></AnuncianteForm>
   </div>
    
    </div>
  );
}

export default CadastroAnunciante;
