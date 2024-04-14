import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div>
    <h1>{product.name}</h1>
    <div>
    <img src={product.image}/>
    </div>
    <p>{product.description}</p>
    <p>{product.price}</p>
</div>
  )
}

export default ItemDetail