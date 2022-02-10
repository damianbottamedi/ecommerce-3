import mongoose from 'mongoose'

import config from '../config.js'


class DB_Mongo{

    static conexionOK = false

    static genIdKey(obj){
        if(Array.isArray(obj)){
            for(let i=0; i<obj.length;i++){
                obj[i].id = obj[i]._id
            }
        }else{
            obj.id = obj._id
        }
        return obj
    }
    static async conectarDB(){
        try{
            if(!DB_Mongo.conexionOK){
                await mongoose.connect(config.STRING_CONEXION,{
                    useNewUrlParser : true,
                    useUnifiedTopology: true
                })
                console.log('Base conectada')
                DB_Mongo.conexionOK = true
            }
        }
        catch(error){
            console.log('error',error.message)
        }
    }
}

export default DB_Mongo