import "./InicioUsuario.css";
import React from "react";
import Button from "@material-ui/core/Button";
import MediaCard from "../card/MediaCard";
import imgUm from "../../images/idosos.jpg";
import imgDois from "../../images/1.jpg";
import imgTres from "../../images/2.jpg";
import imgQuatro from "../../images/3.jpg";
import imgCinco from "../../images/4.jpg";
import imgSeis from "../../images/5.jpg";
import video from "../../videos/pitch.mp4";
import { Link } from "react-router-dom";
import BarraNav from "../BarraNav/BarraNav";

import Grid from '@material-ui/core/Grid';

function InicioUsuario() {
  return (
    <div className="pag">          
       <div className="App">
          <div>
            <p> Aqui você não fica sozinho! </p>
            <p>
              Pensado em todos os idosos e em sua socialização o Socialize+ traz até vocês os eventos mias proximos! 
              Aproveite também recomendações de cursos e programas especiais para a terceira idade!
            </p>
          </div>
          <Link to="/idoso" className="linkE" >
          <Button>
         <span className = "btAcesso" >  Acessar </span> 
          </Button> </Link>
        </div>

        <div className="pag boxBranca">
        <Grid container className ="divCont">
         
          <MediaCard img={imgUm} titulo="Diversão"></MediaCard>
          <MediaCard img={imgQuatro} titulo="Datas Comemorativas" />
          <MediaCard img={imgCinco} titulo="Família e amigos" />
          <MediaCard img={imgSeis} titulo="Cursos e educação" />
          <MediaCard img={imgDois} titulo="Socioculturais" />
          <MediaCard img={imgTres} titulo="Religiosos" />
        </Grid>
      </div> 
      <div className="App">

        <h1 id="#SaibaMais"> Sobre o Socialize+ </h1>
        <h3> Aqui você encontra mais informações sobre nós! </h3>
        <div >
        <embed src={video} autostart="false" className="video" />
        </div>
        <div className="bolas divCont"> 
          <div className="bola"> <span className = "textoSM"> Segurança </span> </div>
          <div className="bola"> <span className = "textoSM"> Eventos</span>  </div> 
          <div className="bola"> <span className = "textoSM"> Saúde </span> </div>
        </div>
      </div> 
    </div>
  );
}

export default InicioUsuario;