import './App.css';
// Compomente importado
import {useState} from 'react';
import decio from './img/decio.jpg'
import {Pessoa} from './compoments/Pessoa/Pessoa'
import Lista from './compoments/Lista/Lista' //exportado como "export default Lista"
import Evento1 from './compoments/Evento1/Evento1';
import {Form} from './compoments/Form/Form'
import { UseState0, UseState1, UseState2, UseState3, UseState4, UseState5 } from './compoments/UseState/UseState';
import { Evento2 } from './compoments/Evento2/Evento2';
import { Condicional } from './compoments/Condicional/Condicional';
import {Map} from './compoments/Map/Map'
import { Challenge } from './compoments/Challenge/Challenge';
import { Props, Props2 } from './compoments/Props/Props';



function App() {
  const listaDeCompras = ['Arroz', 'Feijão', 'Macarrão', 'Óleo', 'Frango']
  const [imagem, setImagem] = useState(false)
  const mostarImagem = () => {
    setImagem(!imagem)
  }

  const listaDeCarros = [
    {marca:"Volkswagen", modelo:"Gol", ano:2006},
    {marca:"Fiat", modelo:"Palio", ano:2010},
    {marca:"Renault", modelo:"Duster", ano:2021}
  ]

  return (
    <div className="App">
      <div>
        <h1>Mudança de estado useState</h1>
        {/* imagem na pasta "public" não necessario importar pasta local */}
        {imagem && (<img src="logo192.png" alt="Logo React" />)}
        <br />
        <button type='button' onClick={mostarImagem}> {imagem ? 'Esconder imagem' : 'Mostrar imagem'} </button>
      </div>
      <hr />
      <div>
        <Pessoa nome='Décio Santana de Aguiar' idade='40' sexo='Masculino' foto={decio}/>
      </div>
      <hr/>
      <div>
        <Lista/>
      </div>
      <hr/>
      <div>
        <Evento1/>
      </div>
      <hr/>
      <div>
        <Evento2/>
      </div>
      <hr/>
      <div>
        <Form/>
      </div>
      <hr/>
      <div>
        <Condicional />
      </div>
      <hr/>
      <div>
        <Map lista={listaDeCompras} />
      </div> 
      <hr/>
      <div>
        <Challenge/>
      </div>
      <hr/>
      <div>
        <UseState0/>
      </div>
      <hr/>
      <div>
        <UseState1/>
      </div>
      <hr/>
      <div>
        <UseState2/>
      </div>
      <hr />
      <div>
        <UseState3/>
      </div>
      <hr />
      <div>
        <UseState4/>
      </div>
      <hr />
      <div>
        {/* <UseState5/> */}
      </div>
      <hr />
      <div>
        <Props nome="Décio Santana de Aguiar" data='15/05/1981'/>
        <Props nome="Ana Rosa Nogueira Aguiar" data='09/10/2018'/>
      </div>
      <hr />
        <dir>
          <h1>MAP</h1>
          {listaDeCarros.map((carro, index) => (
            <p key={index}>{carro.marca}, {carro.modelo}, {carro.ano}</p>
          ))}
          <hr />
          <h1>MAP</h1>
          {listaDeCarros.map(({marca, modelo, ano}, index) => (
            <p key={index}>{marca} - {modelo} - {ano}</p>
          ))}
          <hr />
          <h1>MAP - Props</h1>
          {listaDeCarros.map(({marca, modelo, ano}, index) => (
            <Props2 key={index} marca={marca} modelo={modelo} ano={ano}/> 
          ))}
        </dir>
      <hr />
      <br/><br/><br/><br/><br/><br/>
    </div>
    
  );
}

export default App;
