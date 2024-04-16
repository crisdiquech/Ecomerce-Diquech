import React from 'react'
import "./itemdetail.css"

const ItemDetail = ({product}) => {
  return (
    <div className="card">
    <h1 className="card-title">{product.name}</h1>
    <div>
    <img src={product.image} className="card-img-top"/>
    </div>
    <p className="card-text">{product.description}</p>
    <p className="card-text">{product.price}</p>
</div>
  )
}

export default ItemDetail