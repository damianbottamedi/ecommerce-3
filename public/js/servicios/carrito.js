class CarritoService{
    URL_CARRITO = 'api/carrito/'//'https://61df3e940f3bdb00179349ef.mockapi.io/carrito/'


    async guardarCarrito(carrito){
        
        let carritoGuardado = await http.post(this.URL_CARRITO,carrito)
        return carritoGuardado
    }
}

const carritoService = new CarritoService()