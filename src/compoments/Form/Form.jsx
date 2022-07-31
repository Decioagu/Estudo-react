import React from "react";

export function Form(){

    function cadastrarUsuario(event){
        // Evento padrão não ocorrerar
        event.preventDefault()  //https://www.w3schools.com/jsref/event_preventdefault.asp
        console.log('Cadastrou o usuárrio!!!')
    }

    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={cadastrarUsuario}>
                <label>Qual é o seu nome?</label>
                <br/>
                <input type='text' placeholder="Digite seu texto"/>
                <br/>
                {/* Conportamento de botão "type="submit"" */}
                <input type="submit" value="Cadastro" />
            </form>
        </div>
    )
    // https://getbootstrap.com/docs/5.0/forms/overview/
}