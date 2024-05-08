import React from 'react'
import { useState, useContext } from 'react'
import FormularioCheckout from './FormularioCheckout'
import { CartContext } from '../../context/CartContext'
import {addDoc, collection } from "firebase/firestore";
import db from '../../db/db';
import {Link} from "react-router-dom";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({

        name:"",
        phone:"",
        email:""
    });
const [idOrder, setIdOrder] = useState(null)
const { cart, totalPrice, clearCart  } = useContext(CartContext)


const handleChangeInput = (event) => {
    setDataForm({...dataForm, [event.target.name] : event.target.value })

};

const  handleSubmit = (event) => {
    event.preventDefault();
    const order = {
        user: {...dataForm},
        products: [...cart ],
        total : totalPrice()
    }
    
    uploadOrder(order)
    
};

    const uploadOrder = async(order) =>{

        const ordersRef = collection (db,"orders")
        const response = await addDoc(ordersRef, order )

       setIdOrder(response.id);
       clearCart()
    };


  return (
    <div>
        {idOrder ? ( 
        <div>
            <h2>Su compra se realizo con éxito</h2>
            <p>Guarde el id de su compra:{idOrder}</p>
            <Link to="/"> Volver al inicio</Link>
        </div>
             ) : (
        <FormularioCheckout dataForm={dataForm}
        handleChangeInput={handleChangeInput}
        handleSubmit={handleSubmit}
        />
             )}
    </div>
  )
}

export default Checkout