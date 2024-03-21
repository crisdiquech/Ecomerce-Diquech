import React from 'react'
import "./count.scss"

const Count = ({contador, sumar, restar, borrar}) => {
  return (
   <div className='contador'>
   <p className='contador-parrafo' > Contador: {contador}</p> 
   <button className='boton-sumar' onClick={sumar}> + </button>
   <button className='boton-sumar' onClick={restar}> - </button>
   <button className='boton-sumar' onClick={borrar}> borrar </button> 
</div>
  )
}

export default Count