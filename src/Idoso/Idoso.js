import React from "react";
import "./Idoso.css"
import { makeStyles } from "@material-ui/core/styles";
import MediaCard from "../components/card/MediaCard";
import pesquisa from "../images/pes.png";
import Button from "@material-ui/core/Button";
import imgUm from "../images/idosos.jpg";
import imgDois from "../images/1.jpg";
import imgTres from "../images/2.jpg";
import imgQuatro from "../images/3.jpg";
import imgCinco from "../images/4.jpg";
import imgSeis from "../images/11.jpg";
import imgSete from "../images/6.jpg";
import imgOito from "../images/13.jpg";
import imgNove from "../images/10.jpg";
import img10 from "../images/5.jpg";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({

  
})); 

function Idoso() {
  const classes = useStyles();

  return (
    <div className= "pag">
     
     <div className = "pesquisa"> 
     <div className="divBusca"> 
      <input type="text" id="txtBusca" placeholder="Buscar..."/>  
      <Button id="btnBusca"> <img src= {pesquisa} alt="Buscar..."/> </Button> 
     </div>
     </div>

  <div className = "">
     <div className = "faixa "> <h2> Recomendados para você </h2></div>
       
      <Grid container className = "divCont">
      <MediaCard img={imgDois} titulo="Dança anos 80"/> <MediaCard img={imgTres} titulo="Palestra - Viajando na terceira idade" /> <MediaCard img={imgQuatro} titulo="Aula aberta de Yoga"/> 
      </Grid>
      
      <div className = "faixaD"> <h2>  Para a Família </h2></div>
      <Grid container className = "divCont">
      <MediaCard img={imgDois} titulo="Dança anos 80" /> <MediaCard img={img10} titulo="Bingo" /> <MediaCard img={imgNove} titulo="Tarde do chá"/> 
      </Grid>
      
      <div className = "faixaTres"> <h2> Cursos </h2></div>
      <Grid container className = "divCont">
      <MediaCard img={imgSeis} titulo="Curso de tecnologia para a terceira idade" /> <MediaCard img={imgOito} titulo="Curso de desenho para a terceira idade" /> <MediaCard img={imgQuatro} titulo="Aula aberta de Yoga"/> 
      </Grid>
      </div>
      </div>
  );
}

export default Idoso;
