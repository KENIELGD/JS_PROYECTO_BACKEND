// Importaciones
import {
    insertLibros, 
    getLibros,
    getLibrosById,
    updateLibros,
    deleteLibros
} from "../Controllers/LibrosController.js";

// Construcción de
// Endpoint: rutas en un proyecto REST orientado a servicios
//           responder como mensaje en formato JSON

const rutas=(app)=>{
    app.route('/libros')
       .get(getLibros)
       .post(insertLibros)

    app.route('/libros/:idLibro')
       .get(getLibrosById)
       .put(updateLibros)
       .delete(deleteLibros)
}

export default rutas;