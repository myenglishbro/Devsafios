import express from "express";
import ProductManager from "./managers/productManager.js";
const pm = new ProductManager("./src/files/products.json")
const server = express();
const PORT=3000


server.get("/api/products",async (req,res)=>{
   const productlist= await pm.getProducts(req.query)
   res.json(productlist)
})

server.get("/api/products/:id",async (req,res)=>{
    const productlist= await pm.getProductbyId(req.params)
    res.json(productlist)
 })

server.listen(PORT,()=>{
    try {
        console.log(`Listening to the port ${PORT}\nAcceder a:`);
        console.log(`\t1). http://localhost:${PORT}/api/products`)
        console.log(`\t2). http://localhost:${PORT}/api/carts`);
    }
    catch (err) {
        console.log(err);
    }
})

