import React from "react";
import { useState } from "react";
import './Condicional.css'

export function Condicional(){

    const [email, setEmail] = useState()
    const [usuarioEmail, setUsuarioEmail] = useState()

    function cadastroEmail(event){
        event.preventDefault()
        setUsuarioEmail(email)
    }

    function limparEmail(){
        setUsuarioEmail(null)
    }

    return(
        <div className="cor1">
            <h1>Condicional</h1>
        <form onSubmit={cadastroEmail}>
            <input type="email" className="form-control" placeholder="nome@exemplo.com" onChange={(event) => setEmail(event.target.value)}/>
            <button type='submit' onClick={cadastroEmail}>Cadastro</button>
            {/* "if/else" */}
            {usuarioEmail && (
                <div className="cor2">
                    <p>E-mail do usuario: {usuarioEmail}</p>
                    <button onClick={limparEmail}>Limpar e-mail</button>                   
                </div>
            )}
            {usuarioEmail?(<p>Email preenchido</p>):(<p>Email não preenchido</p>)}
            
        </form>
        </div>
        
    )

}