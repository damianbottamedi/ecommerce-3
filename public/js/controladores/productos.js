class ProductosController {

    async obtenerProductos() {
        let productos = await productosService.obtenerProductos()
        return productos
    }

    async guardarProducto(producto) {
        //persisto en el backend
        let productoGuardado = await productosService.guardarProducto(producto)


        productosModel.guardar(productoGuardado)
    
        renderProds(productosModel.obtener())
        
        return productoGuardado
    }


    async actualizarProducto(id) {

        let producto = leerProductoIngresado()
        limpiarFormulario()

        //actualizo el backend
        let productoActualizado = await productosService.actualizarProducto(id,producto)

        productosModel.actualizar(id, productoActualizado)

        renderProds(productosModel.obtener())

        return productoActualizado
    }


    async eliminarProducto(id) {
        //console.log('borrarProducto', id)

        //borro en el backend
        let productoEliminado = await productosService.eliminarProducto(id)

        productosModel.eliminar(id)

        //borro producto en modelo local


        //recargo la vista
        renderProds(productosModel.obtener())


        return productoEliminado
    }
}

const productosController = new ProductosController()