import React from "react";
import {BotaoCustomizado} from '../Botao/Botao'

export function Evento2(){
    function meuEvento1(){
        console.log('Primeiro Evento...')
    }
    function meuEvento2(){
        console.log('Segundo Evento...')
    }

    return(
        <div>
            <h1>Meu Evento</h1>
            <p>Clique para disparar um evento no console:</p>
            <BotaoCustomizado evento={meuEvento1} msg='Novo Evento 1'/>
            <br/>
            <BotaoCustomizado evento={meuEvento2} msg='Novo Evento 2'/>
        </div>
    )
}

