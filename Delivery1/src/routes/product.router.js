//Para trabajar con Router
import {Router} from "express";
const routerP=Router()
import { __dirname } from "../utils.js";
//instanciar mi clase
import ProductManager from "../managers/productManager.js";
const pm = new ProductManager(__dirname+"/files/products.json")

//RUTAS
routerP.get("/",async(req,res)=>{
    const productlist=await pm.getProducts(req.query)
    res.json({productlist})
  })
  
  
routerP.get("/:pid",async(req,res)=>{
      const productfound=await pm.getProductbyId(req.params)
      res.json(productfound)
    })

    // Ruta para agregar un nuevo producto
routerP.post("/", async (req, res) => {
    
    try {
      const newproduct = await pm.addProduct(req.body);
      res.status(201).json({ status: "success", newproduct });
    } catch (error) {
      res.status(400).json({ status: "error", message: error.message });
    }
  });
  
  // Ruta para actualizar un producto
  routerP.put("/:pid", async (req, res) => {
    try {
      const updatedproduct = await pm.updateProduct(req.params, req.body);
      res.json({ status: "success", updatedproduct });
    } catch (error) {
      res.status(400).json({ status: "error", message: error.message });
    }
  });
  
  // Ruta para eliminar un producto
  routerP.delete("/:pid", async (req, res) => {
    try {
      const deleteproduct = await pm.deleteProduct(req.params);
      res.json({ status: "success", deleteproduct });
    } catch (error) {
      res.status(400).json({ status: "error", message: error.message });
    }
  });



  
export default routerP  
  

