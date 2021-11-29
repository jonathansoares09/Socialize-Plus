import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./CadastroEvento.css";
import MeuCard from "../components/card/MediaCard";
import BarraNav from "../components/BarraNav/BarraNav";
import imgCinco from "../images/6.jpg";
import UploadImg from "./UploadImg";
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import TextField from '@material-ui/core/TextField';

const urlAPI = "http://localhost:5000/api/evento";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
{
  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  title: 'Breakfast',
  rows: 2,
  cols: 2,
  opacity: 0.4
},
{
  img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  title: 'Burger',
  rows: 2,
  cols: 1,
},
{
  img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
  title: 'Camera',
},
{
  img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  title: 'Coffee',
},
{
  img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  title: 'Basketball',
},
];

function CadastroEvento(props) {

  // const [value, setValue] = useState(new Date());

  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [id, setId] = useState(0);
  const [nomeEvento, setNomeEvento] = useState('');
  const [dataEvento, setDataEvento] = useState(new Date());
  const [idCategoria, setIdCategoria] = useState(0);
  const [descEvento, setDescEvento] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [evento, setEvento] = useState({});
  const [eventos, setEventos] = useState([{}]);

  useEffect(() => {
    carregarEventos();
  }, []);

  function limpar() {
    setNomeEvento('');
    setDataEvento('');
    setIdCategoria('');
    setDescEvento('');
    setCep('');
    setLogradouro('');
    setNumero('');
    setBairro('');
    setCidade('');
    setUf('');
  }

  function salvar() {
    const newEvento = {id: id, nomeEvento: nomeEvento, dataEvento: dataEvento, descEvento: descEvento,
      cep: cep, logradouro: logradouro};
    const metodo = newEvento.id !== 0 ? 'put' : 'post'; //Verificação do método a ser usado pela existência ou não do valor de ID.
    console.log("Entrou no metodo: " + metodo);
    const url = newEvento.id ? `${urlAPI}/${newEvento.id}` : urlAPI;
  
      axios[metodo](url, newEvento).then(resp => {
          const lista = getListaAtualizada(resp.data)
          setEvento(newEvento);
          setEventos(lista);
      });
      setSuccess(true);
      limpar();
  }

  function getListaAtualizada(evento, add = true) {
    const lista = eventos.filter(a => a.id !== evento.id);
    if (add) lista.unshift(evento);
    
    return lista;
  }

  function carregarEventos(){
    axios(urlAPI).then(resp => {
        setEventos(resp.data);
        
    })
  }

  function carregar(evento){
    setId(evento.id)
    setNomeEvento(evento.nomeEvento);
    setDataEvento(evento.dataEvento);
    setIdCategoria(evento.idCategoria);
    setDescEvento(evento.descEvento);
    setCep(evento.cep);
    setLogradouro(evento.logradouro);
    setNumero(evento.numero);
    setBairro(evento.bairro);
    setCidade(evento.cidade);
    setUf(evento.uf);
  }

  return (
    <div className="pagina">
      <BarraNav titulo="Socialize+" rota="/idoso" texto="Pagina inicial" />
      <form onSubmit={e=>salvar(e)}>
      <h1> Cadastrar Evento </h1>
       <Grid container spacing={2} style={{margin: '10px'}}>
        <Grid item xs={4}>
         <div class="container">
           <ImageList sx={{ width: 500, height: 450 }} variant="quilted" cols={3} rowHeight={121}>
            {itemData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
           </ImageList>
            {/* <div class="nested" ><UploadImg /></div> */}
           </div> 
          </Grid>
          <Grid item xs={8}>
            <div class="container">
            <FormControl style={{marginBottom: '15px', width: '90%'}} variant="outlined">
                <InputLabel htmlFor="component-outlined">Nome do Evento</InputLabel>
                <OutlinedInput
                  required
                  id="component-outlined"
                  value={nomeEvento}
                  onChange={ e => {setNomeEvento(e.target.value)}}
                  label="Nome do Evento"
                />
              </FormControl>
              {/* <br/>
              <LocalizationProvider style={{width: '90%'}} dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  style={{width: '90%'}}
                  renderInput={(props) => <TextField style={{width: '90%'}} {...props} />}
                  label="DateTimePicker"
                  value={dataEvento}
                   onChange={(newDataEvento) => {
                    setDataEvento(newDataEvento);
                  }}
                />
            </LocalizationProvider> */}
            <br />
            <p>Endereço:</p>
            <FormControl style={{marginBottom: '15px', width: '90%'}} variant="outlined">
                <InputLabel htmlFor="component-outlined">Logradouro</InputLabel>
                <OutlinedInput
                  required
                  id="component-outlined"
                  value={logradouro}
                  onChange={ e => {setLogradouro(e.target.value)}}
                  label="Logradouro"
                />
              </FormControl>
              <br />
              <FormControl style={{marginBottom: '15px', width: '30%'}} variant="outlined">
                <InputLabel htmlFor="component-outlined">CEP</InputLabel>
                <OutlinedInput
                  required
                  id="component-outlined"
                  value={cep}
                  onChange={ e => {setCep(e.target.value)}}
                  label="CEP"
                />
              </FormControl>
              <FormControl style={{marginBottom: '15px', width: '90%'}} variant="outlined">
              <TextField
                id="outlined-multiline-static"
                label="Descrição"
                value={descEvento}
                onChange={ e => {setDescEvento(e.target.value)}}
                multiline
                rows={4}
              />
              </FormControl>
              <button type="submit"> Enviar Evento </button>{" "}
            </div>      
           </Grid>
       </Grid>

      </form>
    </div>
  );
}

export default CadastroEvento;
