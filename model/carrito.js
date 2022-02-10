import CarritoModelMongoDB from './carrito-mongodb.js'

class CarritoModel{
    static get(tipo){
        switch(tipo){
            case 'MONGODB':
            console.log('mongo carrito')
            return new CarritoModelMongoDB()

            default:
            console.log('default carrito')
            return new CarritoModelMongoDB()
        }
    }
}

export default CarritoModel