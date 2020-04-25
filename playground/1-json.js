const fs = require('fs')

// const book = {
//     title: 'secret',
//     author: 'Andrew'
// }

// const bookJSON = JSON.stringify(book) // String
// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json') // Retuns binary numbers
// const dataJSON = dataBuffer.toString(); // return string
// const data = JSON.parse(dataJSON)  // return object
// console.log(data.author)


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON)

user.name = 'jagadeehs'
user.age = 21
user.planet = 'Moon'

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)