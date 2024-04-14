import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import getProducts from '../../data/getProducts'
import ItemList from './ItemList';


const ItemListConteiner = ({saludo}) => {
  const [products, setProducts] = useState ([]);
  
useEffect (() =>{
  getProducts
  .then ((respuesta) => setProducts(respuesta))
  .catch ((error) => console.log(error))
  .finally(() => console.log("Finalizo la promesa"));

}, []); 



  return (
    <div>
      
      <div> {saludo} </div>
      <ItemList products={products}/>

 
    
    </div>
  );
};

export default ItemListConteiner