module.exports = async () => {
  const Tweet = require('./models/Tweet')
  const User = require('./models/User')

  //  Setting user and tweets relationship
  User.hasMany(Tweet, { as: 'Tweets', foreignKey: 'userId' })
  Tweet.belongsTo(User, { as: 'User', foreignKey: 'userId' })

  const errorHandler = (err) => console.log(`Error: ${err.message}`)

  // Creating new User
  const user = await User.create({
    username: 'testUser',
    passwd: 'testPass',
  }).catch(errorHandler)

  // Creating new Tweet
  const tweet = await Tweet.create({
    content: 'This is test content',
  }).catch(errorHandler)

  const users = await User.findAll({
    where: { username: 'testUser' },
    include: [{ model: Tweet, as: 'Tweets' }],
  }).catch(errorHandler)

  console.log(users)
}
