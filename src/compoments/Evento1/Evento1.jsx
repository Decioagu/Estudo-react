import React from "react";
import '../compoments.css'

function Evento1(){

    function meuEvento(){
        //<p>Novo Evento...</p>
        console.log('Novo Evento...')
    }

    return(
        <div className="cor1">
            <h1>Testando Evento</h1>
            <p>Clique para disparar um evento no console:</p>
            <button onClick={meuEvento}>Meu Evento</button>
        </div>
    )
    
}

export default Evento1