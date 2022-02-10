//import ProductosModelFile from "../model/productos-file.js"
//import ProductosModelMem from "../model/productos-mem.js"
//import ProductoModelMongoDB from "../model/productos-mongodb.js"
import config from "../config.js"
import ProductoModel from "../model/productos.js"


//const model = new ProductosModelFile()
//const model = new ProductosModelMem()
//const model = new ProductoModelMongoDB()


const model = ProductoModel.get(config.TIPO_DE_PERSISTENCIA)



const obtenerProductos = async () => {
    let productos = await model.readProductos()
    return productos
}

const obtenerProducto = async id => {
    let producto = await model.readProducto(id)
    return producto
}

const guardarProducto = async producto => {
    let productoGuardado = await model.createProducto(producto)
    return productoGuardado
}

const actualizarProducto = async (id,producto) => {
    let productoActualizado = await model.updateProducto(id,producto)
    return productoActualizado
}

const eliminarProducto = async id => {
    let productoEliminado = await model.deleteProducto(id)
    return productoEliminado
}

export default {
    obtenerProductos,
    obtenerProducto,
    guardarProducto,
    actualizarProducto,
    eliminarProducto,
}