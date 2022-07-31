const Challenge = () => {

    const num1 = 3
    const num2 = 7

    const soma = () => {
       return console.log(`A soma de ${num1} + ${num2} = ${num1+num2}`)
    }

    return(
        <>
            <h1>Soma de valores</h1>
            <p>Primeiro valor = {num1}</p>
            <p>Segundo valor = {num2}</p>
            <button onClick={soma}>Soma</button>
        </>   
    )
}

export {Challenge}