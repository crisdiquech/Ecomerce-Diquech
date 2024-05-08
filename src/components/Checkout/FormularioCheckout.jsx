import React from 'react'

const FormularioCheckout = ({dataForm, handleChangeInput, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor='name'>Nombre:</label>
    <input type="text" id="name" name="name" value={dataForm.name} onChange={handleChangeInput}/>
    <label htmlFor='phone'>Telefono:</label>
    <input type="text" id="phone" name="phone" value={dataForm.phone} onChange={handleChangeInput} /> 
    <label htmlFor='email'>Email:</label>
    <input type="text" id="email" name="email" value={dataForm.email} onChange={handleChangeInput} /> 

    <button type='submit'>Enviar pedido</button>
    </form>
  )
}

export default FormularioCheckout