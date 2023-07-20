import { Link } from 'react-router-dom';
import Cabecalho from '../Componentes/Cabecalho';
import './style.css'

function Calculo (props) {
    return(
        <div className='container'>
            <Cabecalho></Cabecalho>
            <p className='texoResultado'>O valor de R$ {props.valor2} sera divido em {props.valor1} pessoas.</p>
            <p className='texoResultado textoMaior'>Ficando R$ {props.divisao} para cada amigo.</p>
            <Link to="/">
                <button>Inicio</button>
            </Link>
        </div>
    )
}

export default Calculo;