import React from 'react'
import {Link} from "react-router-dom" 

const Item = ({ product }) => {
  return (
    
    <div key={product.id}>
        <div>
            <img src={product.image} />
        </div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <Link to={`/detail/${product.id}`}>Ver Detalles</Link>
    </div>
    
  )
}

export default Item