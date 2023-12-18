import {Router} from "express"
//usaremos mongo ya no fs
// import ProductManager from "../dao/filemanagers/controllers/productManager.js"
// const manager=new ProductManager(__dirname+'/dao/filemanagers/db/products.json')

import ProductManager from "../dao/mongomanagers/productManagerMongo.js"
const manager=new ProductManager()
import { __dirname } from "../utils.js"

const router =Router()
//esto es con fs
// router.get("/products",async(req,res)=>{
//     const products= await manager.getProducts(req.query)
//     res.json({products})
// })
// router.get("/products",async(req,res)=>{
//   const products= await manager.getProducts()
//   if(products.length ===0){
//     res.json("No hay productos en la tienda")

//   }
//   else{
//     res.json({message:"success",products})
//   }
// })

router.get("/products", async (req, res) => {
  try {
    const products = await manager.getProducts();
    
    if (products.length === 0) {
      // 204 No Content might be more appropriate when there's no data
      res.status(204).json("No hay productos en la tienda");
    } else {
      res.status(200).json({ status: "success", products });
    }
  } catch (error) {
    // 500 Internal Server Error for unexpected errors
    res.status(500).json({ status: "error", message: "Internal Server Error", error: error.message });
  }
});






// router.get("/products/:pid", async (req, res) => {
//     const productfind = await manager.getProductbyId(req.params);
//     res.json({ status: "success", productfind });
//   });

//   router.post("/products", async (req, res) => {
//     const obj=req.body
//     const newproduct = await manager.addProduct(obj);
//      res.json({ status: "success", newproduct });
//   });
  router.get("/products/:pid", async (req, res) => {
    try {
      const productfind = await manager.getProductbyId(req.params);
      res.status(200).json({ status: "success", productfind });
    } catch (error) {
      // 500 Internal Server Error for unexpected errors
      res.status(500).json({ status: "error", message: "Internal Server Error", error: error.message });
    }
  });

  router.post("/products", async (req, res) => {
    try {
      const obj = req.body;
      const newproduct = await manager.addProduct(obj);
      res.status(201).json({ status: "success", newproduct }); // 201 Created for successful creation
    } catch (error) {
      // 500 Internal Server Error for unexpected errors
      res.status(500).json({ status: "error", message: "Internal Server Error", error: error.message });
    }
  });
  // router.put("/products/:pid", async (req, res) => {
  //   const updatedproduct = await manager.updateProduct(req.params,req.body);
  //    res.json({ status: "success", updatedproduct });
  // });
  router.put("/products/:pid", async (req, res) => {
    try {
      const pid = req.params.pid;
      const obj = req.body;
      const updatedproduct = await manager.updateProduct(pid, obj);
      res.status(200).json({ status: "success", updatedproduct });
    } catch (error) {
      // 500 Internal Server Error for unexpected errors
      res.status(500).json({ status: "error", message: "Internal Server Error", error: error.message });
    }
  });
  
  router.delete("/products/:pid", async (req, res) => {
    try {
      const id = req.params.pid;
      const deleteproduct = await manager.deleteProduct(id);
      res.status(200).json({ status: "success", deleteproduct });
    } catch (error) {
      // 500 Internal Server Error for unexpected errors
      res.status(500).json({ status: "error", message: "Internal Server Error", error: error.message });
    }
  });
  // router.put("/products/:pid", async (req, res) => {
  //   const pid=req.params.pid
  //   const obj=req.body
  //   const updatedproduct = await manager.updateProduct(pid,obj);
  //    res.json({ status: "success", updatedproduct });
  // });
 
  
  // router.delete("/products/:pid", async (req, res) => {
  //   const id=req.params.pid
  //   const deleteproduct = await manager.deleteProduct(id);
  //    res.json({ status: "success",deleteproduct });
  // });



export default router