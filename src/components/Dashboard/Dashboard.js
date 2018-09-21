import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.deleteProduct=this.deleteProduct.bind(this)
    }

    deleteProduct(id){
        axios.delete(`/api/product/${id}`).then((inventory)=>{
            console.log(inventory.data)
            this.props.updateInventory(inventory.data)
        })
    }

    render(){
        return(
            <div className = "Dashboard">
            <div></div>
            {this.props.inventory.map((product,idx)=>{
            return <Product key = {idx} product={product} deleteProduct={this.deleteProduct} updateProduct={this.props.updateProduct}/>
            })}
            
            </div>
        )
    }
}