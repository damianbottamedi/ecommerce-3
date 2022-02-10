import mongoose from 'mongoose'
import DB_Mongo from '../model/db_mongo.js'

const carritoSchema = mongoose.Schema({
    carrito: Array
})

const CarritoModel = mongoose.model('carritos', carritoSchema)



class CarritoModelMongoDB{

    async createCarrito(carrito) {
        if(!DB_Mongo.conexionOK) return{}
        
        try{
            const carritoSave = new CarritoModel({carrito:carrito})
            await carritoSave.save()

            return carrito
        }
        catch(error){
            console.log('error en createcarrito', error.message)
            return{}
        }        
    }
 
}

export default CarritoModelMongoDB