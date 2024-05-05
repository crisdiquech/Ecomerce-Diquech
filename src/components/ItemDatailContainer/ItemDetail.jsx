import React from 'react'
import "./itemdetail.css"
import "../CountControler"
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import {useContext} from "react"

const ItemDetail = ({product}) => {

  const { cart, addToCart } = useContext(CartContext)
  console.log (cart)

  const handleAddToCart = (count) => {

    const productCart = {...product, quantity: count }

   addToCart(productCart)

  }

  return (
    <div className="card">
    <h1 className="card-title">{product.name}</h1>
    <div>
    <img src={product.image} className="card-img-top"/>
    </div>
    <p className="card-text">{product.description}</p>
    <p className="card-text">{product.price}</p>
    <ItemCount handleAddToCart={handleAddToCart} stock={product.stock}/>
</div>
  )
}

export default ItemDetail