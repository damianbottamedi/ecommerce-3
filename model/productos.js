import ProductosModelMem from "./productos-mem.js"
import ProductosModelFile from "./productos-file.js"
import ProductosModelMongoDB from "./productos-mongodb.js"

class ProductoModel{
    static get(tipo){
        switch(tipo){
            case 'MEM': console.log('memoria') 
            return new ProductosModelMem()

            case'FILE': console.log('file')
            return new ProductosModelFile()

            case 'MONGODB': console.log('mongo')
            return new ProductosModelMongoDB()

            default: console.log('default')
            return new ProductosModelMem()
        }
    }
}

export default ProductoModel