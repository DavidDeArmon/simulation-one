import React, {Component} from 'react'
import axios from'axios'
import {Link} from 'react-router-dom'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            image_url:'',
            name:'',
            price:0,
            product:{}
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleCancel=this.handleCancel.bind(this)
        this.handleAdd=this.handleAdd.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidUpdate(prevProps){
        if(prevProps.currentProduct !== this.props.currentProduct&&this.props.currentProduct !==0){
            console.log(this.props.currentProduct.data[0])
           this.setState({product:this.props.currentProduct.data[0]})
        }else{}
    }
    handleChange({target:{name,value}}){
    this.setState({[name]:value})
    }
    
    handleCancel(){
        this.setState({image_url:'',name:'',price:0,currentProduct:0})
    }
    handleAdd(){
        const {image_url,name,price} = this.state;
        axios.post('/api/product',{image_url,name,price}).then((Inventory)=>{
            this.props.updateInventory(Inventory.data)
        })
        this.handleCancel()
    }
    handleSubmit(){
        const {image_url,name,price} = this.state;
        axios.put(`/api/product/${this.state.product.product_id}`,{image_url,name,price}).then(Inventory=>{
            this.props.updateInventory(Inventory.data)
        })
    }
    

    render(){
        var title,imageURL,imageTitle,nameTitle,priceTitle,updateLink;
          if(this.props.currentProduct===0){
            title="Add Product"
            imageURL = <img className="productIMG" alt="product" src={this.state.image_url}/>
            imageTitle = 'Image URL'
            nameTitle = 'Name'
            priceTitle = 'Price'
            updateLink = <Link className="link" to = "/"  onClick = {this.handleAdd}>Add to Inventory</Link> 


          }else{
            title="Update Product"
            imageURL = <img className="productIMG" alt="product" src={this.state.product.image_url}/>
            imageTitle = this.state.product.image_url
            nameTitle = this.state.product.name
            priceTitle = this.state.product.price
            updateLink = <Link className="link" to = "/"  onClick = {this.handleSubmit}>Update</Link> 
          }

        return(

        <div className="Form">
            <h2>{title}</h2>
            {imageURL}
            <div className="FormInput">   
            <h5>{imageTitle}</h5>     
            <input placeholder={imageTitle} value = {this.state.image_url} name="image_url" onChange={this.handleChange}/>
            <h5>{nameTitle}</h5>
            <input placeholder={nameTitle} value = {this.state.name} name="name" onChange={this.handleChange}/>
            <h5>{priceTitle}</h5>
            <input placeholder={priceTitle} value = {this.state.price} name="price" onChange={this.handleChange}/>
            </div>
            <div className="FormButton">
            <Link className="link" to = "/"  onClick = {this.handleCancel}>Cancel</Link>
            {updateLink}
            </div>
        </div>
        )
    }
}