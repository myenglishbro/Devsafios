const fs= require ("fs")

class ProductManager{

    constructor(path){
        this.path=path,
     this.products=[]
    }

    async getProducts(){
     const listadeproductos=await fs.promises.readFile(this.path,"utf-8")
     const listadoproductosParse=JSON.parse(listadeproductos)
     return listadoproductosParse
    }

    generateIds=async()=>{
        const counter = this.products.length
        if(counter===0){
            return 1
        }
        else{
            return (this.products[counter-1].id)+1
        }
    }

    addProduct=async(title, description, price,thumbnail,code,stock)=>{
    
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

 //UPDATE
 updateProduct=async(id,title,description,price,thumbnail,code,stock)=>{
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


  //DELETE
  deleteProduct=async(id)=>{
    const allproducts=await this.getProducts()
    const productswithoutfound=allproducts.filter(elemento=>elemento.id!==id)
   await fs.promises.writeFile(this.path,JSON.stringify(productswithoutfound,null,2))
  }
getProductbyId=async(id)=>{
    const allproducts=await this.getProducts()
   const found=allproducts.find(element=>element.id===id)
   return found
}



}


const ejecutar =async()=>{
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
ejecutar()

// console.log(productmanager.getProducts())
// console.log(productmanager.getProdudctById(2))