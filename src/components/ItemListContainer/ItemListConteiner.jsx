import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import getProducts from '../../data/getProducts'
import {useParams} from "react-router-dom" 
import ItemList from './ItemList';
import ItemLoading from "../../loadings/ItemLoading"


const ItemListConteiner = ({saludo}) => {
  const [products, setProducts] = useState ([]);

  const [loading, setLoading] = useState(false)
  
  const {idCategory} = useParams()


useEffect (() =>{
  setLoading(true)

  getProducts
  .then ((respuesta) => {
    if(idCategory){
     const newProducts = respuesta.filter((producto)=> producto.category === idCategory )
     setProducts(newProducts)
    }else{
      setProducts(respuesta)
    }
  })
  .catch ((error) => console.log(error))
  .finally(() => setLoading(false));

}, [idCategory]); 



  return (
    <div>
      
      <div> {saludo} </div>
      {
        loading ?  <ItemLoading/> : <ItemList products={products}/>
      }
      

 
    
    </div>
  );
};

export default ItemListConteiner