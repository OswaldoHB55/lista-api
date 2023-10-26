import fs from "fs"
import path from "path"
import { Router } from "express"; //Importar una funcion de la libreria Express
const router = Router();//ejecutar la funcion Router

//Identificacion de ruta raiz del proyecto 
const tareasfile = path.join(process.cwd(), "data", "tareas.json");

//Ruta Get para obtener todos los usuarios.
router.get('/', (req, res)=> {
    const tareas = ObtenerTareas();
    res.json(tareas);
});

//Ruta POST para Guardar nuevas personas
router.post('/', (req, res)=>{
    const nuevo = req.body;
    GuardarTareas(nuevo);
    res.status(200).json({ message: 'La tarea se guardo exitosamente' });
});

function ObtenerTareas() {
    const contenido = fs.readFileSync(tareasfile,'UTF-8');
    return JSON.parse(contenido);
}

function GuardarTareas(pTareas){
    const contenidoActual = ObtenerTareas();
    const nuevaTareas = [...contenidoActual, pTareas];
    fs.writeFileSync(tareasfile, JSON.stringify(nuevaTareas,null,2));
}
// Ruta PUT para actualizar una persona por su ID
router.put('/:Id', (req, res) => {
    const tareaId = Number(req.params.Id);
    console.table({id: req.params.Id, number: tareaId})
    const personas = ObtenerTareas(); // Se debe definir la función ObtenerTareas() para cargar los datos de tareas.json

    // Buscar la tarea con el ID proporcionado en el cuerpo de la solicitud
    const tareaIndex = tareas.findIndex(tarea => tarea.Id === tareaId);

    if (tareaIndex <= 0) {
        // Si no se encontró la tarea, responder con un error 404
        return res.status(404).json({ message: 'La tarea no se encontró' });
    }

    // Actualizar la información de la tarea con los datos de la solicitud
    const tareaActualizada = req.body;
    tareas[personaIndex] = { ...tareas[tareaIndex], ...tareaActualizada };

    // Guardar el arreglo actualizado en el archivo JSON
    fs.writeFileSync(parsonasfile, JSON.stringify(personas, null, 2));

    res.json({ message: 'tarea actualizada exitosamente' });
});

// Ruta DELETE para eliminar una tarea por su ID
router.delete('/:Id', (req, res) => {
    const tareaId = parseInt(req.params.Id);
    const tareas = ObtenerTareas(); // Debes definir la función ObtenerTareas() para cargar los datos de tareas.json
    // Buscar la tarea con el ID proporcionado en la ruta
    const tareaIndex = tareas.findIndex(tarea => tarea.Id === tareaId);
    if (tareaIndex <= 0) {
    // Si no se encontró la tarea, responder con un error 404
        return res.status(404).json({ message: 'La tarea no se encontró' });
    }
    // Eliminar la tarea del arreglo
    const tareaEliminada = tareas.splice(tareaIndex, 1);

    // Guardar el arreglo actualizado en el archivo JSON
    fs.writeFileSync(tareasfile, JSON.stringify(tareas, null, 2));

    res.json({ message: 'Tarea eliminada exitosamente', tarea: tareaEliminada });
});
export default router;