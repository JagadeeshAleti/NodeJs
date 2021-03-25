require('../src/db/mongoose')
const User = require('../src/models/user')

//5eba31fcd5a47d0eb88e33fc

// User.findByIdAndUpdate('5eba9c7cf258ba14aa7291f5', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {   
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeCount('5eba31fcd5a47d0eb88e33fc', 20).then((count) => {
    console.log(count)
}).catch((e) => {
        console.log(e)
})