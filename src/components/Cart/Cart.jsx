import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const Cart = () => {

    const {cart, clearCart, deletProductById, totalPrice} = useContext(CartContext)
    
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
        <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart