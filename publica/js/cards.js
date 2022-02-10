function renderCards(productos){

    fetch('vistas/inicio.hbs')
    .then(r => r.text())
    .then(plantilla => {
        var template = Handlebars.compile(plantilla)
        let html = template({productos: productos})
    
        document.querySelector('.cards-container').innerHTML = html
    })

}

function agregarAlCarrito(id){
    
    let producto = productosModel.obtener(id)
    carritoController.agregarAlCarrito(producto)

    var elemSectionProdSeleccionado = document.querySelector('.section-producto-seleccionado')

    elemSectionProdSeleccionado.innerHTML = '<div class="section-producto-seleccionado__mensaje-container"><h3 class="section-producto-seleccionado__mensaje">Producto añadido</h3><img class="section-producto-seleccionado__mensaje-container__img" src="img/check.png"></div>'

    setTimeout(() =>{
        elemSectionProdSeleccionado.classList.remove('section-producto-seleccionado--visible')
        mostrarProductoSelect = false
    },1500)
    
}

async function initInicio(){
    productosModel.inicializar(await productosController.obtenerProductos())
    let productos = productosModel.obtener()

    //productosModel.inicializar([])
    renderCards(productos)

}