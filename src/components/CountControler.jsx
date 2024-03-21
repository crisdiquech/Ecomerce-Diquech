import React from 'react'
import { useState } from 'react'
import Count from './Count'


const CountControler = () => {

  const [contador , setContador ] = useState(1)
   // let contador = 0

    const sumar = () => {
      setContador(contador +1)
        // contador = contador + 1
        console.log ("se sumo contador", contador);
    };

    const restar = () => {
      if (contador > 0){
      setContador(contador - 1);
    };
    };

    const borrar = () => {
      setContador(0);
    }

  return (

<Count contador={contador} sumar={sumar} restar={restar} borrar={borrar} />
  )
} 

export default CountControler