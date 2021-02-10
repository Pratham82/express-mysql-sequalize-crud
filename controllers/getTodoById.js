const db = require('../models')

const getTodoById = async (req, res) => {
  try {
    //const todo = await db.Todo.findAll({ where: { id: req.params.id } })
    const id = req.params.id
    const todo = await db.Todo.findAll({
      where: {
        id: req.params.id,
      },
    })
    res.json({ todo })
  } catch (err) {
    /* handle error */
    res.send(err)
  }
}

module.exports = getTodoById
