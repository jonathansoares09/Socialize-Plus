import React from "react";
import "./Anunciante.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MediaCard from "../components/card/MediaCard";
import imgUm from "../images/idosos.jpg";
import imgDois from "../images/1.jpg";
import imgTres from "../images/11.jpg";
import imgQuatro from "../images/7.jpg";
import imgCinco from "../images/6.jpg";
import imgSeis from "../images/5.jpg";
import video from "../videos/pitch.mp4";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import BarraNav from "../components/BarraNav/BarraNav";


const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
 
}));

function Anunciante() {
  const classes = useStyles();

  return (
    <div className="pag2">
              <BarraNav titulo = "Socialize+" rota = "/idoso" texto = "Idoso"/>

    <div className="App">

          <div>
            <p> Levando você até a terceira idade de modo rápido e simples! </p>
            <p>
              Divulgue seus eventos e serviços! Alcance seu público alvo! Receba feedbacks!
              <p> Aqui no Socialize+ você consegue tudo isso! </p>
            </p>
          </div>
          <Link to="/anuncianteAdm" className="link"> <Button>
           <span className = "btAcesso" >  Acessar </span> 
          </Button> </Link>

          <Link to="/cadastroAnunciante" className="link"> <Button>
           <span className = "btAcesso" >  Cadastre sua empresa aqui! </span> 
          </Button> </Link>
        </div>

        <div className="pag boxBranca">
        <h1 className ="centro"> Veja o que você pode anunciar em nosso site! </h1>
        <div className ="divCont">
          <MediaCard img={imgUm} titulo="Grupos"></MediaCard>
          <MediaCard img={imgQuatro} titulo="Festas" />
          <MediaCard img={imgCinco} titulo="Encontros" />
          <MediaCard img={imgSeis} titulo="Eventos" />
          <MediaCard img={imgDois} titulo="Serviços" />
          <MediaCard img={imgTres} titulo="Cursos" />
        </div>
      </div> 
      <div className="App">
        <h1> Sobre o Socialize+ </h1>
        <h3> Aqui você encontra mais informações sobre nós! </h3>
        <div className="video">
          <a
            href="https://drive.google.com/file/d/1KuirqwpGecQslh6Mx1TuQ7aEG1zHgRS_/view?usp=sharing"
            target="_blank"
          >
            <div id="triangulo-para-direita"></div>

          </a>
        </div>
        <div className="bolas divCont"> 
        <div className="bola"> <span className = "textoSM"> Segurança </span>  </div> 
        <div className="bola"> <span className = "textoSM"> Eventos</span>  </div> 
        <div className="bola"> <span className = "textoSM"> Saúde </span> </div>
        
        </div>
      </div>
    </div>
  );
}

export default Anunciante;
