import fs from "fs"

export default class ProductManager{

    constructor(path){
        this.path=path,
     this.products=[]
    }

  //READ
  getProducts = async (objectquery) => {
    const { limit } = objectquery;
    try {
     

      if (fs.existsSync(this.path)) {
      
        const productlist = await fs.promises.readFile(this.path, "utf-8");
        const productlistJs = JSON.parse(productlist);
        if (limit) {
          const limitProducts = productlistJs.slice(0, parseInt(limit));
          return limitProducts;
        } else {
          return productlistJs;
        }
      } else {
        return [];
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  getProductbyId = async (objectparams) => {
    const {pid}=objectparams
    try {
      
      if (fs.existsSync(this.path)) {
        const allproducts = await this.getProducts({});
        const found = allproducts.find((element) => element.id === parseInt(pid));
        if (found) {
          return found;
        } else {
          throw new Error("Producto no existe");
        }
      } else {
        throw new Error("Product file not found");
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  

    async generateIds() {
        try {
            const counter = this.products.length;
            if (counter === 0) {
                return 1;
            } else {
                return this.products[counter - 1].id + 1;
            }
        } catch (error) {
            console.error("Error while generating IDs:", error);
            throw error;
        }
    }

    addProduct=async(title, description, price,thumbnail,code,stock)=>{
    
       
        try{
            if(!title || !description || !price || !thumbnail || !code || !stock){
                console.error("Ingrese todos los datos del product")
                return
            }
            else{
            const productfiltrado= this.products.find(element=>element.code==code)  
            const id= await this.generateIds();
               if (!productfiltrado){
                const newproduct={
                      id,
                     title,
                     description,
                      price,
                      thumbnail,
                      code,
                      stock
                }
                 this.products.push(newproduct)
                 await fs.promises.writeFile(this.path, JSON.stringify(this.products,null,2))
               }
    
               else{
                console.error("El codigo del producto ya existe")
               }
            
            }
        }
        catch (error) {
            console.error("Error while Adding products:", error);
            throw error; // Re-throw the error to handle it at a higher level if needed
        }
        
    }

 //UPDATE
 updateProduct=async(id,title,description,price,thumbnail,code,stock)=>{
   
    try{
        if(!id|| !title || !description || !price || !thumbnail|| !code||!stock){
            console.error("INGRESE TODOS LOS DATOS DEL PRODUCTO PARA SU ACTUALIZACION")
            return 
          }
          else{
              const allproducts=await this.getProducts()
              const codigorepetido=allproducts.find(elemento=>elemento.code===code)
              if(codigorepetido){
                   console.error("EL CODIGO DEL PRODUCTO QUE DESEA ACTUALIZAR ES REPETIDO")
                   return
              }
              else{
                  const currentProductsList=await this.getProducts()
                  const newProductsList=currentProductsList.map(elemento=>{
                      if(elemento.id===id){
                        const updatedProduct={
                          ...elemento,
                          title,description,price,thumbnail,code,stock
                        }
                        return updatedProduct
                      }
                      else{
                          return elemento
                      }
                  })
                  await fs.promises.writeFile(this.path,JSON.stringify(newProductsList,null,2))
              }
              
          }
    }
    catch (error) {
        console.error("Error while Updating products:", error);
        throw error; // Re-throw the error to handle it at a higher level if needed
    }
    
  }


  //DELETE
  deleteProduct=async(id)=>{
   

   try{
    const allproducts=await this.getProducts()
    const productswithoutfound=allproducts.filter(elemento=>elemento.id!==id)
   await fs.promises.writeFile(this.path,JSON.stringify(productswithoutfound,null,2))
   }
   catch (error) {
    console.error("Error while Deleting products:", error);
    throw error; // Re-throw the error to handle it at a higher level if needed
}
  }




}


