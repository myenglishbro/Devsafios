const fs= require ("fs")

class ProductManager{

    constructor(path){
        this.path=path,
     this.products=[]
    }

    async getProducts(){
     
     try{
        const listadeproductos=await fs.promises.readFile(this.path,"utf-8")
        const listadoproductosParse=JSON.parse(listadeproductos)
        return listadoproductosParse
     }
     catch (error) {
        console.error("Error while getting products:", error);
        throw error; // Re-throw the error to handle it at a higher level if needed
    }
    }

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
getProductbyId=async(id)=>{
   

   try{
    const allproducts=await this.getProducts()
    const found=allproducts.find(element=>element.id===id)
    return found
   }
   catch (error) {
    console.error("Error while Gtting the product:", error);
    throw error; // Re-throw the error to handle it at a higher level if needed
}
}



}


const ejecutar =async()=>{
    try{
        const productmanager = new ProductManager("./files/products.json");
        // await productmanager.addProduct("product1","description1",12,"url","code1",500)
        // await productmanager.addProduct("product2","description2",13,"url","code2",600)
        // await productmanager.addProduct("product3","description3",16,"url","code3",600)
        // await productmanager.addProduct("product4","description4",19,"url","code4",700)
        // await  productmanager.addProduct("product5","description5",29,"url","code5",700)
        // await productmanager.addProduct("product6","description6",22,"url","code6",700)
        const listado=await productmanager.getProducts()
        console.log(listado)
    }
    catch(error){
        console.error("An error occurred:", error);
        throw error; // Re-throw the error to handle it at a higher level if needed
    }
}
ejecutar()

// console.log(productmanager.getProducts())
// console.log(productmanager.getProdudctById(2))