import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import getProducts from '../../data/getProducts'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  
  useEffect (()=>{
    getProducts
    .then ((respuesta)=>{
        const newProduct = respuesta.find((product)=> product.id === "Rm1")
        setProduct(newProduct)
    })

    .catch((error)=> console.log(error))

  }, [])

  return (
        <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer