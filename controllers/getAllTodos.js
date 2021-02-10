const db = require('../models')

const getAllTodos = async (_, res) => {
  try {
    const data = await db.Todo.findAll()
    res.send(data)
  } catch (err) {
    /* handle error */
    res.send(err)
  }
}

module.exports = getAllTodos
