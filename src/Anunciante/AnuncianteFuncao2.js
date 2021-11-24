import React, { Component, useState, useEffect } from 'react';
import ApiReceitaWs from './ApiReceitaWs';
import axios from 'axios';
import Main from '../components/template/Main'

export default function Carometro() {

    const [mens, setMens] = useState("ReceitaWS API.");
    
    useEffect(() => {
        async function obtemDados() {

            let response =  await ApiReceitaWs.get("46068425000133");
            response =  await response.data;
            setMens(response)
            console.log(response)
        }
        obtemDados();
    }, []);

    return (
        // Validação do formulario
        // Status != 'ERROR' e Situacao == 'ATIVA'
        
        <Main>
            {/* <h2>{JSON.stringify(mens)}</h2> */}
            <h2>
                    <p>{mens.cnpj}</p>
            </h2>
        </Main>
    )
}