// Importaciones
import mongoose from 'mongoose';

// Crear un objeto mongo:Schema:
const Schema=mongoose.Schema;

// Construcción de un Schema para biblioteca:
const librosSchema=new Schema({
    nombreLibro:{
        type: String,
        required: 'Se requiere un nombre para el libro'
    },
    nombreAutor:{
        type: String,
        required: 'Se requiere un nombre para el autor'
    },
    fechaPublicacion:{
        type: Date,
        required: 'Se requiere la fecha en la cual se publico el libro'
    },
    estadoLibro:{
        type: String,
        required: 'Se requiere un estado para el libro'
    },
    cantidadLibros:{
        type: Number,
        required: 'Se requiere la cantidad de libros disponibles'
    }
});

export default librosSchema;