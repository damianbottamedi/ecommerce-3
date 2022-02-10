import api from "../api/productos.js"

const getProductos = async (req,res) => {

    let id = req.params.id

    if(id){
        let id = req.params.id
        
        let producto = await api.obtenerProducto(id)
        res.json(producto)
    }
    else{
        let productos = await api.obtenerProductos()
        res.json(productos)
    }
}

const postProducto = async (req,res) => {
    let producto = req.body

    let productoGuardado = await api.guardarProducto(producto)
    res.json(productoGuardado)
}

const putProducto = async (req,res) => {
    let id = req.params.id
    let producto = req.body

    let productoActualizado = await api.actualizarProducto(id,producto)
    res.json(productoActualizado)
}

const deleteProducto = async (req,res) => {
    let id = req.params.id
    let productoEliminado = await api.eliminarProducto(id)

    res.json(productoEliminado)
}

export default {
    getProductos,
    postProducto,
    putProducto,
    deleteProducto
}