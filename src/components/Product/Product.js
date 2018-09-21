import React from 'react';
import {Link} from 'react-router-dom';

export default function Product(props){
    return( 
        <div className = 'Product'>
        <h1>{props.product.name}</h1>
        <img alt="product" src = {props.product.image_url}/>
        <h2>${props.product.price}</h2>
        <div className="productButton">
        <Link className="productButtons" to = "/edit" onClick={()=>{props.updateProduct(props.product.product_id)}}>Edit</Link>
        <button className="productButtons" onClick={()=>{props.deleteProduct(props.product.product_id)}}>Delete</button>
        </div>
        </div>


    )
}