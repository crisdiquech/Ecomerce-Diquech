import React from 'react'
import "./itemdetail.css"
import "../CountControler"
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import {useContext} from "react"
import { useState } from 'react'
import {Link} from "react-router-dom";

const ItemDetail = ({product}) => {

  const { cart, addToCart } = useContext(CartContext)
  const [clickAdd, setClickAdd] = useState(false)


  const handleAddToCart = (count) => {
   
    const productCart = {...product, quantity: count }
   addToCart(productCart)
   setClickAdd(true)

  }

  return (
    <div className="card">
    <h1 className="card-title">{product.name}</h1>
    <div>
    <img src={product.image} className="card-img-top"/>
    </div>
    <p className="card-text">Descripcion:{product.description}</p>
    <p className="card-text">Precio:${product.price}</p>
    {
      clickAdd ? <Link to="/cart" > Ir al Carrito</Link> : <ItemCount handleAddToCart={handleAddToCart} stock={product.stock}/>

    }
    
</div>
  )
}

export default ItemDetail