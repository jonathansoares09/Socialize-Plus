import React from "react";
import "./Evento.css";
import MeuCard from "../components/card/MediaCard";
import BarraNav from "../components/BarraNav/BarraNav";
import imgCinco from "../images/6.jpg";
import { useState } from "react";
import UploadImg from "./UploadImg";

function Evento(props) {
  function cadastraUsuario(e) {
    e.preventDefault();
    console.log(name);
    console.log("Usuário cadastrado");
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="pagina">
      <BarraNav titulo="Socialize+" rota="/idoso" texto="Pagina inicial" />
      <h1> Crie e divulgue seu evento! </h1>

      <form onSubmit={cadastraUsuario}>
        <div class="wrapper">
          <div class="box1">
          <div class="nested" ><UploadImg /></div>

          <div class="nested"><label for="name">
              <b>Nome do Evento:</b>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do Evento"
              onChange={(e) => setName(e.target.value)}
              required
            /> 
            </div>

       <div class="nested"><label for="empresa">
              <b>Empresa</b>
            </label>
            <input type="text" placeholder="Empresa" name="empresa" required />
          </div></div>


            
            
          <div class="box2">
           
          </div>
          <div class="box3">
            <label for="text">
              <b>Descrição do Evento</b>
            </label>
            <input
              type="text"
              placeholder="Descrição"
              name="descricao"
              required
            />
          </div>
          <div class="box4">
            <label for="dataHor">
              <b>Data e horario do evento</b>
            </label>
            <input type="date" placeholder="data" name="data" required />
            <input type="time" placeholder="time" name="time" required />
          </div>
          <button type="submit"> Enviar Evento </button>{" "}
        </div>
      </form>
    </div>
  );
}

export default Evento;

/*  <div className = "contDois">  
     <form onSubmit = {cadastraUsuario}>
      <div className = "divTres"> 
          <UploadImg /> 
          <label for="name">
            <b>Nome do Evento:</b>
          </label>
          <input
            type="text"
            id = "name"
            name="name"
            placeholder="Nome do Evento"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label for="empresa">
            <b>Empresa</b>
          </label>
          <input type="text" placeholder="Empresa" name="empresa" required />

          </div>

          <div className = "divDois"> 
          <label for="text">
            <b>Descrição do Evento</b>
          </label>
          <input type="textArea" placeholder="Descrição" name="descricao" required />

     <label for="dataHor">
            <b>Data e horario do evento</b>
          </label>
          <input type="date" placeholder="data" name="data" required />
          <input type="time" placeholder="time" name="time" required />
        </div> 

          <button type="submit"> Enviar Evento </button>{" "}

      </form>
     </div> */
