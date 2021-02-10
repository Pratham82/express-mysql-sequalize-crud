const db = require('../models')

const deleteTodoById = async (req, res) => {
  try {
    const deletedTodo = await db.Todo.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.json({ deletedTodo })
  } catch (err) {
    /* handle error */
    res.send(err)
  }
}

module.exports = deleteTodoById
