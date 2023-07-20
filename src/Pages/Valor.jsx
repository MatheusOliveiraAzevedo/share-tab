import { useState } from "react";
import Cabecalho from "../Componentes/Cabecalho";
import Corpo from "../Componentes/Corpo";
import { Link } from "react-router-dom";

function Valor (props) {

    const [numAm, setNumAm] = useState(0);


    function alterado () {
        props.incluirV(numAm)
        calculoDivisao()
    }

    function calculoDivisao () {
        const resultado = numAm / props.valor1
        props.valorDivisao(resultado)
    }

    return(
        <section className="container">
            <Cabecalho texto=""></Cabecalho>
            <Corpo digitado={digitado => setNumAm(digitado)} label="Qual o valor (R$) da despesa sera dividido? " placeholder="R$" valor="Calcular"></Corpo>
            <Link to="/Calculo">
                <button onClick={alterado}>Iniciar</button>
            </Link>
        </section>

    )
}

export default Valor;