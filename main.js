class ProductManager{

    constructor(){
        this.products = []
    }

    buscarIdMayor() {

        let mayor = 0;
    
        this.products.forEach(producto => {
            
            const {id} = producto
            if (id> mayor){
                mayor = id
            }
            
        });
    
        return parseInt(mayor);
    }
    
    
    addProducts(nuevoProduct) {
    
        const existeCodigo = this.products.some((producto) => producto.code === nuevoProduct.code);
        let seAgrega = false;
    
        if(!existeCodigo){
    
            nuevoProduct.id = this.buscarIdMayor() + 1; //Incrementa en 1 el valor de Id al nuevo producto agregado
            this.products.push(nuevoProduct);
            seAgrega = true;
        }
    
        return seAgrega;
    }

    getProducts() {
        console.log(this.products);
    }

    getProductById(id) {
        const prodBuscado = this.products.find((prod) => prod.id === id)
        return prodBuscado
    }


   
}

class Producto{

    constructor(title, description, price, thumbnail, code, stock){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}


prodMan = new ProductManager();

prodMan.getProducts();


unProd = new Producto("Galletas", "Galletas SIN TAC", 100, "Sin Especificar", "GG100", 200)
otroProd = new Producto("Fideos", "Fideos Largos", 200, "Sin Especificar", "FF100", 200)

prodMan.addProducts(unProd);
prodMan.addProducts(otroProd);


prodMan.getProducts();

tercerProd = new Producto("Fideos", "Fideos Largos", 200, "Sin Especificar", "FF100", 200)

if(!prodMan.addProducts(tercerProd)){
    console.log("Producto no agregado: El código ya existe")
}


const prodBuscado = prodMan.getProductById(3);

if(prodBuscado != undefined){
    console.log(prodBuscado)
}else {
    console.log("No se encontró dicho producto")
}







