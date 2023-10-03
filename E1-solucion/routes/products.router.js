import {Router} from "express"
import ProductManager from "../managers/productManager.js"
import { __dirname } from "../utils.js"

const manager=new ProductManager(__dirname+'/files/products.json')
const router =Router()

// Ruta para obtener un producto por su ID
router.get("/products/:pid", async (req, res) => {
  try {
    const productfind = await manager.getProductbyId(req.params);
    res.status(200).json({ status: "success", productfind });
  } catch (error) {
    res.status(404).json({ status: "error", message: error.message });
  }
});

// Ruta para agregar un nuevo producto
router.post("/products", async (req, res) => {
  try {
    const newproduct = await manager.addProduct(req.body);
    res.status(201).json({ status: "success", newproduct });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
});

// Ruta para actualizar un producto
router.put("/products/:pid", async (req, res) => {
  try {
    const updatedproduct = await manager.updateProduct(req.params, req.body);
    res.json({ status: "success", updatedproduct });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
});

// Ruta para eliminar un producto
router.delete("/products/:pid", async (req, res) => {
  try {
    const deleteproduct = await manager.deleteProduct(req.params);
    res.json({ status: "success", deleteproduct });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
});



export default router