import React, { useState } from "react";
import "./UploadImg.css";

function UploadImg() {

  const [image, setImage] = useState('');
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  const uploadImage = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    const headers = {
      'headers': {
        'Content-Type': 'application/json'
      }
    }

  }

  return (
    <div>
      {status.type === 'success'? <p style={{color: "green"}}>{status.mensagem}</p> : ""}
      {status.type === 'error'? <p style={{color: "#ff0000"}}>{status.mensagem}</p> : ""}

      <form onSubmit={uploadImage} className = "formularioImagem" >
        <input type="file" name="image" onChange={e => setImage(e.target.files[0])} /><br /><br />

      </form>
    </div>
  );
}

export default UploadImg;


/* await api.post("/upload-image", formData, headers)
    .then((response) => {
      setStatus({
        type: 'success',
        mensagem: response.data.mensagem
      });
    }).catch((err) => {
      if(err.response){
        setStatus({
          type: 'error',
          mensagem: err.response.data.mensagem
        });
      }else{
        setStatus({
          type: 'error',
          mensagem: "Erro: Tente mais tarde!"
        });
      } 

    }); */