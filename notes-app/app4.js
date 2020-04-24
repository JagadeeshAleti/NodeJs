const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Adding note',
    handler: function() {
        console.log('Note added successfully')
    }
}).parse();