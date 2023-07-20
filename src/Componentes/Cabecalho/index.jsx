import './Cabecalho.css'

const Cabecalho = (props) => {

    return(
        <div className='cabecalho'>
                <h1>Share Tab</h1>
                <p>{props.texto}</p>
        </div>
    )
}

export default Cabecalho;