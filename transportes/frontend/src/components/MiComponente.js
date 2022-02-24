import React from 'react'

function MiComponente(props) {
  
  return (
    <h3>{`Hola ${props.usuario ? props.usuario.name : ""} ${props.usuario ? props.usuario.lastName : ""} este es tu primer Componente`}</h3>
  )
}

export default MiComponente