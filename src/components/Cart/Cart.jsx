import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import {Link} from "react-router-dom";


const Cart = () => {

    const {cart, clearCart, deletProductById, totalPrice} = useContext(CartContext)

    if (cart.length === 0){
        return <div>
            <h2>No hay productos en el carrito</h2>
            <Link to="/"> Volver a Productos</Link>
            </div>
    }
    
    return (
    <div>
        {
            cart.map((product)=> (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Precio unitario:${product.price}</p>
                    <p>Precio total:${product.price * product.quantity}</p>
                    <img src={product.image} style={{width:"100px"}} />
                    <button onClick={()=> deletProductById(product.id)}>Eliminar</button>

                </div>

            )) 
        }
        <h3>Total compra:$ {totalPrice()} </h3>
        <Link to="/checkout">Continuar compra</Link>
        <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart