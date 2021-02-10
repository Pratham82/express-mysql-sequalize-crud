const express = require('express')
const createNewTodo = require('../controllers/createNewTodo')
const deleteTodoById = require('../controllers/deleteTodoById')
const getAllTodos = require('../controllers/getAllTodos')
const getTodoById = require('../controllers/getTodoById')
const updateTodoById = require('../controllers/updateTodoById')
const router = express.Router()

router.get('/all', getAllTodos)
router.post('/new', createNewTodo)
router.get('/find/:id', getTodoById)
router.delete('/delete/:id', deleteTodoById)
router.put('/update/:id', updateTodoById)

module.exports = router
