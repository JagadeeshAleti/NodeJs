const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Emai is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password doesnt contain password')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be Positive number')
            }
        }
    }
})

// const me = new User({
//    name: '   Mike   ',
//    email: 'JAGADEESH.ALETI955@gmail.COM',
//    password: 'jagadeeshpassword'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!!!\n' + error)
// })


const Task = mongoose.model('Task', {
    description: {
        type: String ,
        required: true,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: '     Eat Lunch'
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Error!!!' + error)
})