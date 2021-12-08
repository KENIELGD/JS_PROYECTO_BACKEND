// Importaciones
import mongoose from 'mongoose';
import librosSchema from '../Models/LibrosModel.js';

// Object creado apartir del Schema de libros
const Libros=mongoose.model('Libros', librosSchema);

// Acción para insertar un nuevo libro
export const insertLibros=(req, res)=>{
    
    // New Object basado en el DAO
    let nuevoLibros=new Libros(req.body);

    // Grabar un Libro en mongo
    nuevoLibros.save((error, librosInsert)=>{
        if(error){
            res.send(`Error detectado en el insert: ${error}`);
        }else{
            res.json(librosInsert);
        }
    });
}

// Acción para obtener todos los libros
export const getLibros=(req, res)=>{
    Libros.find({}, (error, libros)=>{
        if(error){
            res.send(`Error detectado en el get: ${error}`);
        }else{
            res.json(libros);
        }
    });
}

// Acción para obtener un libro por :idLibro (El detalle)
export const getLibrosById=(req, res)=>{
     Libros.findById(req.params.idLibro, (error, librosPorId)=>{
        if(error){
            res.send(`Error detectado en el get por id: ${error}`);
        }else{
            res.json(librosPorId);
        }
    });
}

//Acción para actualizar un libro por :idLibro
export const updateLibros=(req, res)=>{
    Libros.findOneAndUpdate(
                                {_id:req.params.idLibro}, 
                                req.body,
                                {
                                    new: true
                                },
    (error)=>{
        if(error){
            res.send(`Error detectado en el insert: ${error}`);
        }else{
            res.send('El registro fue actualizado exitosamente');
        }
    })
}

//Acción para eliminar un libro por _id:idLibro
export const deleteLibros=(req, res)=>{  
    Libros.deleteOne({_id: req.params.idLibro}, (error, librosDelete)=>{
        if(error){
            res.send(`Error detectado en el delete: ${error}`);
        }else{
            res.send('El registro fue eliminado exitosamente');
        }
    });
}