let inputs = null
let form = null
let button = null
let dropArea = null
let progressBar = null
let URLImagenSubida = ''

const setCustomValidity = function(mensaje, index){
    const errorDivs = document.getElementsByClassName('form-registro__mensaje-error')
    errorDivs[index].innerHTML = mensaje
    errorDivs[index].parentNode.classList.toggle('input-group--error', !!mensaje)
}

const regExpValidar = [
    /^.+$/,
    /^.+$/,
    /^.+$/,
    /^.+$/,
    /^.+$/,
    /^.+$/,
    /^.+|\s+$/,
]

const camposValidos = [false, false, false, false, false, false,]
const algunCampoNoValido = () =>{
    let valido = 
        camposValidos[0] &&
        camposValidos[1] &&
        camposValidos[2] &&
        camposValidos[3] &&
        camposValidos[4] &&
        camposValidos[5] 
        
    return !valido
}

function limpiarFormulario(){
    inputs.forEach(input => {
        input.type == 'checkbox'? input.checked = false : input.value = ''
    })

    button.disabled = true
    for(let i=0; i<camposValidos.length; i++){
        camposValidos[i] = false
    }

    let img = document.getElementById('form-registro__container-input__drop-area__div-gallery')
    img.src = ''

    initProgressBar()
    URLImagenSubida = ''
}

function renderProds(productos){

    fetch('vistas/alta.hbs')
    .then(r => r.text())
    .then(plantilla => {
        var template = Handlebars.compile(plantilla)
        let html = template({productos: productos})
    
        document.querySelector('.listado-productos').innerHTML = html
    })

}

function leerProductoIngresado(){
    return{
        nombre: inputs[0].value,
        marca: inputs[1].value,
        precio: inputs[2].value,
        stock: inputs[3].value,
        categoria: inputs[4].value,
        foto: URLImagenSubida,
        descripcion: inputs[5].value,
        envio: inputs[6].checked,
    }
}

function validarInput(valor, condicion, index){
    if(!condicion.test(valor)){
        setCustomValidity('Dato no válido', index)
        camposValidos[index] = false
        button.disabled = true
        return null
    }

    camposValidos[index] = true
    button.disabled = algunCampoNoValido()

    setCustomValidity('', index)
    return valor
}

function initProgressBar(){
    progressBar.value= 0
}
function actualizarProgress(porcentaje){
    progressBar.value = porcentaje
}

function previewFile(file){
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function(){
        let img = document.querySelector('.form-registro__container-input__drop-area__div-gallery img')
        img.src = reader.result
    }
}

function handleFiles(files){
    let file = files[0]
    initProgressBar()
    previewFile(file)
    uploadFile(file)
    let gallery = document.getElementById('form-registro__container-input__drop-area__div-gallery')
    gallery.classList.add('form-registro__container-input__drop-area__div-gallery--mr')

}

function uploadFile(file){
    var url = '/upload'
    var xhr = new XMLHttpRequest()
    xhr.open('POST',url)

    xhr.upload.addEventListener('progress', e =>{
        let porcentaje = (e.loaded * 100) / e.total
        actualizarProgress(porcentaje)
    })

    xhr.addEventListener('load',()=>{
        if(xhr.status == 200){
            let nombreImagenSubida = JSON.parse(xhr.response).nombre
            URLImagenSubida = nombreImagenSubida? ('/uploads/' + nombreImagenSubida) : ''
        }
    })

    var formData = new FormData()
    formData.append('foto',file)

    xhr.send(formData)
}


async function initAlta(){    
    inputs = document.querySelectorAll('.form-registro__input')
    button = document.getElementById('form-registro__button')
    formAlta = document.getElementById('form-registro')
    
    button.disabled = true
    
    productosModel.inicializar(await productosController.obtenerProductos())
    renderProds(productosModel.obtener())
    
    inputs.forEach((input, index) =>{
        if(input.type != 'checkbox'){
            input.addEventListener('input', () => {
                validarInput(input.value, regExpValidar[index], index)
            })
        }
    })
    
    formAlta.addEventListener('submit', async e =>{
        e.preventDefault()

        let productoNuevo = leerProductoIngresado()
        
        await productosController.guardarProducto(productoNuevo)

        limpiarFormulario()
    })

    dropArea = document.getElementById('form-registro__container-input__drop-area')
    progressBar = document.getElementById('form-registro__container-input__drop-area__bar-progress')

    ;['dragenter','dragover','dragleave', 'drop'].forEach(eventName =>{
        dropArea.addEventListener(eventName, e => e.preventDefault())
        document.body.addEventListener(eventName, e => e.preventDefault())
    })

    ;['dragenter','dragover'].forEach(eventName =>{
        dropArea.addEventListener(eventName, ()=>{
            dropArea.classList.add('form-registro__container-input__drop-area--lleno')
        })
    })

    ;['dragleave', 'drop'].forEach(eventName =>{
        dropArea.addEventListener(eventName, ()=>{
            dropArea.classList.remove('form-registro__container-input__drop-area--lleno')
        })
    })

    dropArea.addEventListener('drop', e =>{
        var dt = e.dataTransfer
        var files = dt.files
        console.log(files)
        handleFiles(files)
    })
}
                    
                 
                    