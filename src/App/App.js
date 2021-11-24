import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../components/Footer/Footer";
import BarraNav from "../components/BarraNav/BarraNav";
import InicioUsuario from "../components/template/InicioUsuario";
import Main from "../components/template/Main";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";

function App() {
  return (
    <BrowserRouter>    
        <BarraNav titulo = "Socialize+"/>
        <Routes />
        <Footer /> 
    </BrowserRouter>
  );
}

export default App;

/* <div className = ""> 
        <div>
          <img src={imgSeis}></img>
        </div>
        <div className="bola">
          <img src={imgSeis}></img>
        </div>
        <div className="bola">
          <img src={imgSeis}></img>
        </div>
      </div> */
