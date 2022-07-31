import React from 'react'

export const Props = ({nome, data}) => {
  return (
    <div className='cor1'>
        <h1>Uso de Props compomente pai para filho</h1>
        <p>{nome}</p>
        <p>{data}</p>
    </div>
  )
};

export const Props2 = ({marca, modelo, ano}) => {
  return (
    <div className='cor1'>
        <p>{marca} / {modelo} / {ano}</p>
        
    </div>
  )
};

