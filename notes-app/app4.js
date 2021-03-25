const yargs = require('yargs')
console.log(process.argv)
console.log(yargs.argv)
const add = function() {
    return 'Adding note successfully';
}

const remove = function() {
    return 'Note removed successfully'
}

const list = function() {
    return 'list'
}

const read = function() {
    return 'Note already readed'
}

const input = process.argv[2]
if(input === 'add') {
    console.log(add())
} else if(input === 'remove') {
    console.log(remove())
} else if(input === 'list') {
    console.log(list())
} else {
    console.log(read())
}