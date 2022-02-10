import mongoose from 'mongoose'
import DB_Mongo from '../model/db_mongo.js'


const productoSchema = mongoose.Schema({
    nombre: String,
    marca: String,
    precio: Number,
    stock: Number,
    categoria: String,
    foto: String,
    descripcion: String,
    envio: Boolean,
})

const ProductoModel = mongoose.model('productos', productoSchema)



class ProductosModelMongoDB{

    async createProducto(producto) {
        if(!DB_Mongo.conexionOK) return{}
        
        try{
            const productoSave = new ProductoModel(producto)
            await productoSave.save()
            let productos = await ProductoModel.find({}).lean()
            let productosGuardados = productos[productos.length-1]
            
            return DB_Mongo.genIdKey(productosGuardados)
        }
        catch(error){
            console.log('error en', error.message)
            return{}
        }        
    }
    
    async readProducto(id) {
        if(!DB_Mongo.conexionOK) return{}
        
        try{
            let producto = await ProductoModel.findOne({_id:id}).lean()
            return DB_Mongo.genIdKey(producto)
        }
        catch(error){
            console.log('error en', error.message)
            return{}
        }
    }
    
    async readProductos(){
    if(!DB_Mongo.conexionOK) return[]
    try{
        
        let productos = await ProductoModel.find({}).lean()
        return DB_Mongo.genIdKey(productos)
    }
    catch(error){
        console.log('error en', error.message)
        return{}
    }        
    }

    async updateProducto(id,producto){
        if(!DB_Mongo.conexionOK) return{}
        
        try{
            await ProductoModel.updateOne({_id:id},{$set:producto})
            let productoActualizado = await ProductoModel.findOne({}).lean()
            
            return DB_Mongo.genIdKey(productoActualizado)
        }
        catch(error){
            console.log('error en', error.message)
            return{}
        }   
        
        
    }

    async deleteProducto(id) {
        if(!DB_Mongo.conexionOK) return{}
        
        try{
            let productoEliminado = await ProductoModel.findOne({}).lean()
            
            await ProductoModel.deleteOne({_id:id})
            return DB_Mongo.genIdKey(productoEliminado)
        }
        catch(error){
            console.log('error en', error.message)
            return{}
        }   
    }
}

export default ProductosModelMongoDB