import React from 'react';
import {useState} from 'react';
import '../compoments.css'

export const UseState0 = function FavoriteColor() {
  let testeCor = "Amarelo"
  testeCor = "Verde"

  const corFavorita = () => {
    testeCor = "Azul"
  }

  const [cor, setColor] = useState("vermelho");

  return (
    <>
      <h1>Minha cor preferida é {cor}!</h1>
      <button className="botao-azul" onClick={() => setColor("azul")}>Azul</button>
      {/* Não é funcional esta função */}
      <h1>Minha cor preferida é {testeCor}!</h1>
      <button className="botao-azul" onClick={corFavorita}>Azul</button>
    </>
  )
}

export function UseState1(){

    function cadastrarUsuario(event){
        // Evento padrão não ocorrerar
        event.preventDefault()  //https://www.w3schools.com/jsref/event_preventdefault.asp
        
    }

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    return(
        <div className="centro">
            <div className="cor1">
                <form  onSubmit={cadastrarUsuario}>
                    <h1>useState</h1>
                    <div className="col-sm-3">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email: &emsp;</label>
                        <input type="email"  className="form-control" id="inputEmail"  placeholder="name@example.com" onChange={(event) => setEmail(event.target.value)}/>  
                    </div>
                    <div className="col-sm-3">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Senha:&emsp;</label>
                        <input type="text" className="form-control" id="inputPassword" placeholder="Digite sua senha..."onChange={(event) => setSenha(event.target.value)}/> 
                    </div>
                    <div className="cor2">
                        <p>mail: {email} e senha: {senha}</p>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export const UseState2 = () => {
    const [num, setNum] = useState(0)

  return (
    <div className='cor1'>
        <h1>UseState Contador</h1>
        <p>Meu valor é: {num}...</p>
        <button onClick={() => setNum(num + 1)}>Contador</button>
    </div>
  )
}

export function UseState3() {
    const [Lista] = useState(['Ana', 'Décio', "Luana"])

    return(
        <div>
            <ul>
                {Lista.map( (item, index) => (<li key={index}>{item}</li>) )}
            </ul>
        </div>
    )

}

export function UseState4() {
    const [users, setUsers] = useState([
      { id: 1, name: "Matheus", age: 31 },
      { id: 2, name: "Jones", age: 19 },
      { id: 3, name: "Scorpion", age: 201 },
    ]);
  
    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * 4);
  
      setUsers((prevUsers) => {
        return prevUsers.filter((user) => randomNumber !== user.id);
      });
    };
  
    return (
      <div className='cor1'>
          <h1>UserState deletar lista por sorteio</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              ({user.id}) = {user.name} - {user.age} anos
            </li>
          ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
      </div>
    );
};


