

// commandline arguments
console.log(process.argv)

const command = process.argv[3]

if(command === 'a') {
    console.log('a')
} else if(command === 'b') {
    console.log('b')
}


// node app1.js student --Name='Jagadeesh' --Marks='A' ===> example to run
// node app1.js yargs --version

const yargs = require('yargs')
yargs.version('1.1.0')  // to setup the version
console.log(yargs.argv)
