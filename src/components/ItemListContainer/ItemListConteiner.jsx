import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import getProducts from '../../data/getProducts'
import {useParams} from "react-router-dom" 
import ItemList from './ItemList';


const ItemListConteiner = ({saludo}) => {
  const [products, setProducts] = useState ([]);
  
  const {idCategory} = useParams()


useEffect (() =>{
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
  .finally(() => console.log("Finalizo la promesa"));

}, [idCategory]); 



  return (
    <div>
      
      <div> {saludo} </div>
      <ItemList products={products}/>

 
    
    </div>
  );
};

export default ItemListConteiner