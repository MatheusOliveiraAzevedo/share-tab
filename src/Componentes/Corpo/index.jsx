import './Corpo.css'

const Corpo = (props) => {

    function alterando (evento) {
        props.digitado(evento.target.value)
    }

    return(
        <div className='corpo'>
                <label >{props.label}</label>
                <input onChange={alterando} placeholder={props.placeholder} type="number" />
        </div>
    )
}

export default Corpo;