require ('dotenv').config()
const express =  require ('express'),
    {json} = require ('body-parser'),
    app = express(),
    port = process.env.PORT||3001,
    massive = require ('massive'),
    {getInventory,getProduct,updateProduct,createProduct,deleteProduct} = require ('./controller')
    app.use(json());

    massive(process.env.CONNECTION_STRING).then(dbInstance=>{
        app.set('db',dbInstance)
        // dbInstance.init()
    }).catch(err=>console.log(err))
    
    app.get('/api/inventory', getInventory)
    app.get('/api/product/:id',getProduct)
    app.put('/api/product/:id',updateProduct)
    app.post('/api/product', createProduct)
    app.delete('/api/product/:id',deleteProduct)


app.listen(port,()=>console.log("server is listening on",port))