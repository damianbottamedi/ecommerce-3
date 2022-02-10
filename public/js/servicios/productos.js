class ProductosService{

    URL_PRODUCTOS = 'api/productos/'

    async obtenerProductos(){
        let productos = await http.get(this.URL_PRODUCTOS)
        return productos
    }

    async guardarProducto(producto){
        let productoGuardado = await http.post(this.URL_PRODUCTOS, producto)
        return productoGuardado
    }

    async actualizarProducto(id, producto){
        let productoActualizado = await http.put(this.URL_PRODUCTOS,id, producto)
        return productoActualizado
    }

    async eliminarProducto(id){
        let productoEliminado = await http.delete(this.URL_PRODUCTOS,id)
        return productoEliminado
    }
}


const productosService = new ProductosService()