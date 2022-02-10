class CarritoController {
    
    constructor(){
        try{
            carritoModel.inicializar(JSON.parse(localStorage.getItem('carrito')) || [])
        }
        catch{
            carritoModel.inicializar([])
            localStorage.setItem('carrito', carritoModel.obtener())
        }
    }   

    agregarAlCarrito(producto){

        if(!carritoModel.produtoExiste(producto)){
            producto.cantidad = 1
            carritoModel.guardar(producto)
        }
        else{
            let productoDeCarrito = carritoModel.obtenerProducto(producto)
            productoDeCarrito.cantidad++
        }

        localStorage.setItem('carrito', JSON.stringify(carritoModel.obtener()))
    }

    async sacarDelCarrito(id){
        console.log('borrar', id)

        carritoModel.eliminar(id)
        localStorage.setItem('carrito', JSON.stringify(carritoModel.obtener()))

        await renderCarrito(carritoModel.obtener())


    }

    async comprarCarrito(){

        var elemSectionCarrito = document.querySelector('.section-carrito')

        elemSectionCarrito.innerHTML = '<div class="section-carrito__mensaje-container"><h3 class"section-carrito__mensaje">Enviando...</h3></div>'
        await carritoService.guardarCarrito(carritoModel.obtener())

        elemSectionCarrito.innerHTML = '<div class="section-carrito__mensaje-container"><h3 class"section-carrito__mensaje">¡Compra realizada!</h3><img src="img/check.png" class="section-carrito__mensaje-container__img"></div>'

        carritoModel.inicializar([])
        localStorage.setItem('carrito',carritoModel.obtener())

        setTimeout(() =>{
            elemSectionCarrito.classList.remove('section-carrito--visible')
            mostrarCarrito = false
        },1500)


    }
}

const carritoController = new CarritoController()