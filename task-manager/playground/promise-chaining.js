require('../src/db/mongoose')
const User = require('../src/models/user')

//5eba31fcd5a47d0eb88e33fc

User.findByIdAndUpdate('5eba9c7cf258ba14aa7291f5', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {   
    console.log(result)
}).catch((e) => {
    console.log(e)
})