let mostrarProductoSelect = false

var sectionProductoSelect = document.querySelector('.section-producto-seleccionado')

async function renderProductoSelect(producto){
    
    let plantilla = await fetch('vistas/productoselect.hbs').then(r => r.text())
    var template = Handlebars.compile(plantilla)
    let html = template({producto: producto})
    document.querySelector('.section-producto-seleccionado').innerHTML = html

}

function mostrarProducto(id){
    let producto = productosModel.obtener(id)
    renderProductoSelect(producto)
    sectionProductoSelect.classList.add('section-producto-seleccionado--visible')
}



function closeProdSelect(){
    sectionProductoSelect.classList.remove('section-producto-seleccionado--visible')

}
