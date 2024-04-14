import React from 'react'

const Item = ({ product }) => {
  return (
    
    <div key={product.id}>
        <div>
            <img src={product.image} />
        </div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
    </div>
    
  )
}

export default Item