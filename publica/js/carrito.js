let mostrarCarrito = false

async function renderCarrito(carrito){
    
    let plantilla = await fetch('vistas/carrito.hbs').then(r => r.text())
    
    var template = Handlebars.compile(plantilla)
    let html = template({carrito: carrito})
    document.querySelector('.section-carrito').innerHTML = html

}
var elemSectionCarrito = document.querySelector('.section-carrito')

function initCarrito(){
    var btnCarrito0 = document.getElementsByClassName('btn-carrito')[0]
    var btnCarrito1 = document.getElementsByClassName('btn-carrito')[1]
    
    btnCarrito0.addEventListener('click', async () => {
        if(mostrarCarrito == false){
            await renderCarrito(carritoModel.obtener())
            elemSectionCarrito.classList.add('section-carrito--visible')
            mostrarCarrito = true
        }
    })
   
    btnCarrito1.addEventListener('click', async () => {
        if(mostrarCarrito == false){
            await renderCarrito(carritoModel.obtener())
            elemSectionCarrito.classList.add('section-carrito--visible')
            mostrarCarrito = true
        }
    })    
}

initCarrito()

function closeCarrito(){
    elemSectionCarrito.classList.remove('section-carrito--visible')
    mostrarCarrito = false
}