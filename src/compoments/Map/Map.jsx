import React from "react";
import './Map.css'

export function Map({lista}) {
    return(
        <div className="cor3">  
            <h1>Lista de compras</h1>
            {lista.map((item, index) => (<p key={index}>{item}</p>))}
        </div>
    )
}