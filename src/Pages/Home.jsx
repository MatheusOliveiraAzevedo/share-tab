import { useState } from 'react';
import Cabecalho from '../Componentes/Cabecalho';
import Corpo from '../Componentes/Corpo';
import './style.css'
import { Link } from 'react-router-dom';

function Home (props) {

    const [numAm, setNumAm] = useState(0);


    function alterado() {
        props.amigos(numAm)
    }

    return(
        <section className='container'>
            <Cabecalho texto="Divida a conta com seus amigos, começe abaixo:" ></Cabecalho>
            <Corpo digitado={digitado => setNumAm(digitado)} label="Em quantos amigos(as) quer dividir a conta?" placeholder="Ex: 1, 2, 3..."></Corpo>
            <Link to="/Valor">
                <button onClick={alterado}>Iniciar</button>
            </Link>
        </section>
    )
}

export default Home;