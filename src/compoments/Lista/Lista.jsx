import React from "react";
import './Lista.css'
import {Linha} from './Linha'

function Lista() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul className="sem_tipo">
                <li >Item 1</li>
                <li >Item 2</li>
                <Linha marca='Gol' ano={2006}/>
            </ul>
        </>     
    )
}

export default Lista