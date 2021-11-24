import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Idoso from './Idoso/Idoso';
import Anunciante from './Anunciante/Anunciante';
import Login from './Login/Login';
import Cadastro from './Cadastro/Cadastro';
import BarraNav from './components/BarraNav/BarraNav';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
  );


/*ReactDOM.render(
  <div>
            <BarraNav titulo = "Socialize"> </BarraNav> 

    <BarraNav titulo = "Socialize"> </BarraNav> 
        <BarraNav titulo = "Socialize"> </BarraNav> 



        -----------
        const routing = (
  <div className = "index">
            <BarraNav titulo = "Socialize"> </BarraNav> 
        <Footer /> 

 </div>
  );
  ReactDOM.render(routing, document.getElementById('root'));
        ------------

    <BarraNav titulo = "Socialize"> </BarraNav>
    <App> </App>    
  </div>,
  document.getElementById('root')

        <BarraNav titulo = "Socialize"> </BarraNav> 

          /*<App> </App>

); 


<Router>
    <div>
        <ul>
             <li>
                <Link to="/cadastro">Cadastro</Link>
             </li>
             <li>
                <Link to="/contact">Contato</Link>
             </li>
             <li>
                <Link to="/login">Login</Link>
             </li>
          </ul>
  
     <Route exact path="/" component={App}/>
     <Route path="/cadastro" component={Cadastro}/>
     <Route path="/idoso" component={Idoso}/>
     <Route path="/anunciante" component={Anunciante}/> 
     <Route path="/login" component={Login}/>
    </div>
  </Router>
*/
