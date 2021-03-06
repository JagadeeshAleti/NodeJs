require('../src/db/mongoose')
const Task = require('../src/models/task')

//5eba31fcd5a47d0eb88e33fc

// Task.findByIdAndDelete('5ebb757d663961110afe5f72').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskCount('5ebb7451eb99ee0f2f8b57ad').then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})