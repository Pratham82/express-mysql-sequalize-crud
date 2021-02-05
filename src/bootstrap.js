module.exports = async () => {
  const User = require('./models/User')
  const Tweet = require('./models/Tweet')

  try {
    const user = await User.create({ username: 'testUser', passwd: 'testPass' })
  } catch (err) {
    console.log(`Error: ${err.message}`)
  }

  try {
    const tweet = await Tweet.create({
      content: 'This is test content',
      userId: user.id,
    })
  } catch (err) {
    console.log(`Error: ${err.message}`)
  }
}
