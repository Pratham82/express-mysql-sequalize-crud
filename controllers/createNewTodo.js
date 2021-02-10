const db = require('../models')

const createNewTodo = async (req, res) => {
  try {
    const newToodo = await db.Todo.create({ text: req.body.text })
    res.json({ newToodo })
  } catch (err) {
    /* handle error */
    res.send(err)
  }
}

module.exports = createNewTodo
