const {Router} = require('express')
const Todosdb = require('../models/models')

const router = Router()

router.get("/api/v1/todos", async(req, res) => {
    try {
        const todosdb = await Todosdb.findAll({
            attributes : ["id", "title", "description", "status"]
        })
        res.json(todosdb)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.post("/api/v1/todos", async(req, res) =>{
    try {
        const newTodosdb = req.body
        const result = await Todosdb.create(newTodosdb)
        res.status(201).send(result)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
})


router.put("/api/v1/todos/:id", async(req,res)=>{
    try {
        const {id}= req.params
        const data = req.body
        const result = await Todosdb.update(data, {
            where: {id}
        })
        res.status(204).send()   
    } catch (error) {
        res.status(400).json({message : error.message}) 
    }
})


router.delete("/api/v1/todos/:id", async(req, res) =>{
    try {
        const {id} = req.params
        const result = await Todosdb.destroy({
            where : {id}
        })
        res.status(204).send()
    } catch (error) {
        res.status(400).json({message : error.message})        
    }
})

module.exports = router;

