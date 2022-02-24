import React from 'react'

function OtroComponente(props) {

  return (
    <div className="holder">
      <h3>{`En este Otro Componente puedes ver la fecha de hoy:  ${new Date().getDay()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`}</h3>
    </div>
  )
}

export default OtroComponente