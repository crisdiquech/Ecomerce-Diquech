import React from 'react'
import "./navbar.css"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom";

const CardWidget = () => { 

  const { totalQuantity } = useContext(CartContext)

  return (
   <Link to="/cart">
    <p className='carrito-contador'>{totalQuantity() === 0 ? "": totalQuantity() }</p>
    <img className='carrito-navbar' src='/img/carrito.png' />
    </Link>
  );
};

export default CardWidget;