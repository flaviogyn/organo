import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {
  console.log(props)

  const placeholdeModificada = `${props.placeholder}...`

  //let valor = 'Guilherme Silveira'
  // const [valor, setValor] = useState('Guilherme Silveira')

  const aoDigitado = (evento) => {
    // setValor(event.target.value)
    props.aoAlterado(evento.target.value)
  }

  return (
    <div className="campo-texto">
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholdeModificada} />
    </div>
  ) 
}

export default CampoTexto