import express from 'express'
import controller from '../controller/productos.js'

const router = express.Router()


router.get('/:id?', controller.getProductos)

router.post('/', controller.postProducto)

router.put('/:id', controller.putProducto)

router.delete('/:id', controller.deleteProducto)


export default router

