import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./Pages/Home";
import Valor from "./Pages/Valor";
import Calculo from "./Pages/Calculo";
import { useState } from "react";


function App() {

  const [numAmigos, setNumAmigos] = useState(0)
  const [valorDividir, setValorDividir] = useState(0)
  const [divisao, setDivisao] = useState(0)

  
  

  const incluirAmigos = (valor) => {
    setNumAmigos(valor)
  }

  function incluirValor (v) {
    setValorDividir(v)
  }

  function valorDividido (valor) {
    setDivisao(valor)
  }

  return (
    <div className="App" >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home amigos={incluirAmigos}/>}></Route>
        <Route path="/Valor" element={<Valor incluirV={incluirValor} valor1={numAmigos} valorDivisao={valorDividido} />}></Route>
        <Route path="/Calculo" element={<Calculo valor1={numAmigos} valor2={valorDividir} divisao={divisao}></Calculo>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
