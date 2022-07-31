import React from "react";
import './BotaoAzul.css' // estilo "1" personalizado Botão 


// Nome da constante exportada deve começar com letra maiúscula
export const BotaoCustomizado = ({msg, evento}) => {
    return <button className='botao_azul' onClick={evento}>{msg}</button> //"msg.texto" variavel declarada no "BotaoCustomizado" 
}