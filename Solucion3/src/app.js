import express from "express"
import ProductManager from "./productManager.js";
const manager = new ProductManager("../files/products.json")
const app = express()
const PORT = 8080;

app.get("/products", async (req, res) => {
    const { limit } = req.query;
    const products = await manager.getProducts();
    if (limit) {
        const limitProducts = products.slice(0, limit);
        res.status(200).json({ status: "Success", products: limitProducts });
    } else {
        res.status(200).json({ status: "Success", products });
    }
});

app.get("/products/:pid", async (req, res) => {
    const { pid } = req.params;
    const products = await manager.getProducts();
    const productFind = products.find(elemento => elemento.id === parseInt(pid));
    
    if (productFind) {
        res.status(200).json({ status: "Success", product: productFind });
    } else {
        res.status(404).json({ status: "Not Found", message: "Product not found" });
    }
});

app.listen(PORT, () => {
    console.log("Server is working");
});
