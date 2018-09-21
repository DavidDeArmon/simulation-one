import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Dashboard from './components/Dashboard/Dashboard';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state={
      inventory:[],
      currentProduct:[]
    }
    this.updateInventory=this.updateInventory.bind(this)
    this.updateProduct=this.updateProduct.bind(this)
    this.resetProduct=this.resetProduct.bind(this )
  }
  componentDidMount(){
    axios.get('/api/inventory').then(inventory=>{
      console.log(inventory.data)
      this.setState({inventory:inventory.data})
    })
  }
  updateInventory(inventory){
    this.setState({inventory})
  }
  updateProduct(id){    
    axios.get(`/api/product/${id}`).then(product=>{
      this.setState({currentProduct:product})
    })
  }
  resetProduct(){
    this.setState({currentProduct:0})
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
        <Header resetProduct={this.resetProduct}/>
        <Switch>
        <Route exact path='/' render={()=><Dashboard updateInventory = {this.updateInventory} inventory = {this.state.inventory} updateProduct={this.updateProduct}/>}/>
        <Route  path = '/edit'render={()=><Form currentProduct={this.state.currentProduct} updateInventory = {this.updateInventory} inventory = {this.state.inventory}/>}/>
        </Switch>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
