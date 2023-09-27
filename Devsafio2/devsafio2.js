function calculadora(valor){
    return new Promise ((resolve,reject)=>{

        if (valor == "saludo"){
            resolve(valor);
        }
        else{
            reject("no sirve")
        }
    }).then((valor)=>{
        console.log(valor)
    }).catch((err)=>{
        console.log(err)
    });
}


calculadora("saludssso")
