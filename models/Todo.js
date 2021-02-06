// Using async await
module.exports = async (sequelize, DataTypes) => {
  await sequelize.define('Todo', {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
}

// Using promises
// module.exports = (sequelize, DataTypes) => {
//   const Todo = sequelize.define('Todo', {
//     text: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   })
//   return Todo
// }
