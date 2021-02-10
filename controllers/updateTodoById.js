const db = require('../models')

const updateTodoById = async (req, res) => {
  try {
    const updatedTodo = await db.Todo.update(
      { text: req.body.text },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    res.json({
      message: 'Todo Updated',
      updatedTodo,
    })
  } catch (err) {
    /* handle error */
    res.send(err)
  }
}

module.exports = updateTodoById
