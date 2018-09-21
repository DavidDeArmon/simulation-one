module.exports={

    getInventory(req,res){
        let db = req.app.get('db');
        db.getInventory().then((inventory)=>{
            return res.status(200).json(inventory)
        })        
    },
    createProduct(req,res){
         let db = req.app.get('db');
         const {image_url,name,price} = req.body;
         db.createProduct([image_url,name,price]).then((inventory)=>{
             return res.status(200).json(inventory)
         })
    },
    updateProduct(req,res){
        let db = req.app.get('db');
        const {image_url,name,price} = req.body;
        const {id} = req.params;
        db.updateProduct([id,image_url,name,price]).then(inventory=>{
            return res.status(200).json(inventory)
        })
    },
    deleteProduct(req,res){
        let db = req.app.get('db');
        const {id} = req.params;
        db.deleteProduct(id).then((inventory)=>{
            return res.status(200).json(inventory)
        })
    },
    getProduct(req,res){
        let db = req.app.get('db');
        const {id} = req.params;
        db.getProduct(id).then((product)=>{
            return res.status(200).json(product)
        })
    }

}