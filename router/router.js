const express = require('express');
const router = express.Router();
const ModelTodo = require('../model/modelTodo.js');


router.get('/', (req, res) => {
res.send('Bienvenid@ a la app - To-do📋!')
})

//GET ALL
router.get('/todos', async (req, res) => {
    try{
        const todos = await ModelTodo.find();// obtenemos todas las tareas
        res.status(200).send(todos);
    }catch(error){
        res.status(500).send({messages: 'error al obtener las tareas', error});
    }
})

//POST
router.post('/todos', async (req, res) => {
    const body = req.body;
    try{
        const todo = await ModelTodo.create(body);
        res.status(200).send({messages: 'Tareas creada correctamente!', todo});
    }catch(error){
        res.status(500).send({messages: 'error al crear la tarea', error});
    }
})

//GET ID
router.get('/todos/:id', async (req, res) => {
    try{
        const todo = await ModelTodo.findById(req.params.id)//Buscamos producto por su id
        if(!todo){
            return res.status(400).send({messages: 'Tareas no encontrada'})
        }
        res.status(200).send(todo);
    }catch(error){
        res.status(500).send({messages: 'Error al obtener tarea', error});
    }
})

//PUT
router.put('/todos/:id', async (req, res) =>{
    try{
        const todoActualizado = await ModelTodo.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        if(!todoActualizado){
            return res.status(404).send({messages: 'Tareas no encontrado'})
            }
            res.status(200).send({messages: 'Se actualizo la tarea!', todoActualizado});
    }catch(error){
        res.status(500).send({messages: 'Error al actualizar tarea!'})
    }
})


//DELETE
router.delete('/todos/:id', async (req, res)=>{
    try{
        const todoEliminado = await ModelTodo.findByIdAndDelete(req.params.id)

        if(!todoEliminado){
            return res.status(400).send({messages: 'Tarea no encontrada'})
        }
        res.status(200).send({messages: 'Tarea eliminada correctamente'})
    }catch(error){
        res.status(500).send({messages: 'Error al intentar eliminar', error})
    }
});


module.exports = router;