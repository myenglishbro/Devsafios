//crear mi servidor con express
import express from "express"
import routerP from "./routes/product.router.js"
import routerC from "./routes/cart.router.js"
const server=express()
//indico el port
const PORT=3000


//
server.use(express.json())
server.use(express.urlencoded({ extended:true}))


//para usar las rutas

server.use("/api/products",routerP)
server.use("/api/carts",routerC)



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










