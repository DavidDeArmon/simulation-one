import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(props){
    return (
    
    <div className= "Header">
        <h1>Web Store</h1>
        <Link className="link" to='/'> Dashboard</Link>
        <Link onClick={()=>props.resetProduct()} className="link" to='/edit'>Add Inventory</Link>


    </div>


    )
}