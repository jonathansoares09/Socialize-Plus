import React from 'react';
import axios from 'axios';

const ApiReceitaWs = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://www.receitaws.com.br/v1/cnpj/",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Content-Type": "application/json;charset=UTF-8"
    }
  });

export default ApiReceitaWs;