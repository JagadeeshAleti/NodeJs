
const validator = require('validator')
console.log(validator.isEmail('jagadeesh.aleti955@gmail.com'))
console.log(validator.isEmail('hai'))
console.log(validator.isURL('wwwfacebook'))
console.log(validator.isURL('www.facebook.com'))


//If you want to use the functionalities of chalk youmust download it from the npm website
const chalk = require('chalk')
console.log(chalk.green('Success!!!!!!!!'))
console.log(chalk.bold('Bold text'))
console.log(chalk.inverse('Inversed text'))
console.log(chalk.green.bold.inverse.green('This is text where it allows diffrent type of attributes at the same time'))

console.log(chalk.red('Error'))
console.log('Hai welcome')
console.log(chalk.green.bold.inverse.green('This is text where it allows diffrent type of attributes to use at the same time'))
//nodemon filename ===> which turnsout to be a continuos runtime enity
console.log('Hai')
