import express from 'express'
import routerProductos from './router/productos.js'
import routerCarrito from './router/carrito.js'
import routerUpload from './router/upload.js'
import DB_Mongo from './model/db_mongo.js'

import config from './config.js'

if(config.TIPO_DE_PERSISTENCIA == 'MONGODB'){   
    DB_Mongo.conectarDB()
}

const app = express()


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)
app.use('/upload', routerUpload)

//console.log(process.env)



/* ------------ LISTEN DEL SERVIDOR --------------- */
const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error en servidor express: ${error.message}`) )
