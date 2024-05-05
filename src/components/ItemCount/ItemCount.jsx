import React from 'react'
import { useState } from 'react'


const ItemCount = ( {handleAddToCart, stock}) => {
    const [count, setCount] = useState (1)

    const handleAdd = () => {

        if (count < stock){
        setCount( count + 1)
        }
    };

    const handleSubstract =() => {
        if(count > 1){
        setCount ( count - 1)
        }

    };


  return (
    <div>
        <div>
        <button onClick={handleSubstract}>-</button>
        <p> {count}</p>
        <button onClick={handleAdd}>+</button>
        <div>
            <button onClick={() => handleAddToCart(count)}>Agregar al carrito</button>
        </div>
        </div>
    </div>
  );
};

export default ItemCount

