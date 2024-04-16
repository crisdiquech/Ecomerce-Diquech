import React from 'react'
import {Link} from "react-router-dom" 
import "./itemlistcontainer.css"

const Item = ({ product }) => {
  return (
    
    <div key={product.id} className="card">
        <div>
            <img src={product.image} className="card-img-top"/>
        </div>
        <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
    <p className="card-text">{product.description}</p>
        <Link to={`/detail/${product.id}`} className="btn btn-primary">Ver Detalles</Link>
        </div>
    </div>
    
  )
}

export default Item


