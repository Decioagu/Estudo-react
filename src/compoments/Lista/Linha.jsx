import React from "react";
// Pacote de verificação de ddos de entrada do React como (type, )
import PropTypes from 'prop-types';
import { ReactPropTypes } from "react";


function Linha(props) {
    return(
        <>
            <li >{props.marca} - {props.ano}</li>
        </>     
    )
}

Linha.propTypes = {
    // Validação a nivel de programação (ERRO no console)
    ano: PropTypes.number.isRequired, // "isRequired" preenchimento obrigatório
    marca: PropTypes.string.isRequired,
};
// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html



/* Linha.defaulProps = {
    marca: 'Faltou a marca',
    ano: 0,
} */
// https://www.geeksforgeeks.org/reactjs-defaultprops/

export {Linha}