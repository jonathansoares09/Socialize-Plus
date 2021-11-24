import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./BarraNav.css";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Idoso from '../../Idoso/Idoso.js';
import Anunciante from '../../Anunciante/Anunciante';
import Login from '../../Login/Login';
import Cadastro from '../../Cadastro/Cadastro';
import App from '../../App/App';  

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function BarraNav(props) {
  const classes = useStyles();

  return (
    <div className= "root">
      <AppBar position="fixed">
        <Toolbar className = "corDaNav">
          <Typography variant="h6" className={classes.title}>
           <scan className = "fonte">   {props.titulo} </scan>
           </Typography>
          
            <div className = "">
              <ul className="nav">
                <li>
                  <Button color="inherit">
                  <Link to="/#SaibaMais">Saiba Mais</Link>
                  </Button>
                </li>
                <li>
                <Button color="inherit">
                  <Link to= "/anunciante" className = "fonte" >Anunciante</Link>
                  </Button>
                </li>
                <li >
                <Button color="inherit" className = "fonte" >
                  <Link to="/login" className="btConecte" >Conecte-se</Link>
                  </Button>
                </li>
              </ul>
            </div>
          
        </Toolbar>
      </AppBar>

    </div>
  );
}

/* 
 <Button color="inherit">{props.link}</Button>
          <Button color="inherit">Anunciante</Button>
          <Button color="inherit">Conecte-se</Button>
          <Button color="inherit"> <span className = "corVerde"> Inscreva-se </span> </Button>
                <Route path="/cadastro" component={Cadastro} />
*/
