import React from 'react';
import '../compoments.css'

/* export function Pessoa(props) {
    return(
        <div>
            <img src={props.foto} alt="logo" />
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Sexo: {props.sexo}</p>
        </div>
    )
    
} */

// ========== OU ==========

export function Pessoa({foto, nome, idade, sexo}) {
    return(
        <div className='cor1'>
            <h1>Cadastro</h1>
            <img src={foto} alt="logo" />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Sexo: {sexo}</p>
        </div>
    )
    
}