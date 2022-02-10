import dotenv from 'dotenv'

dotenv.config({
    path: process.env.NODE_ENV + '.env'
})

export default {
    PORT: process.env.PORT || 8080,
    TIPO_DE_PERSISTENCIA: process.env.TIPO_P || 'MEM',//'MEM', 'FILE', 'MONGODB'
    STRING_CONEXION: process.env.CNX || ''//'mongodb+srv://damianbottamedi1:damilomas@datos.sezd5.mongodb.net/ecommerce3?retryWrites=true&w=majority',
    //STRING_CONEXION: 'mongodb://localhost/ecommerce3',
}

