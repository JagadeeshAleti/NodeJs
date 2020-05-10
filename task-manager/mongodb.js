// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
            
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    //By id
    db.collection('users').findOne( { _id: new ObjectID('5eb6c583d1ea0211858c7b5f') }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(user)
    })

    //By field name
    db.collection('tasks').findOne({ description: 'Pot plants'}, (error, task) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(task)
    })

    //cursor is return type of find method
    db.collection('users').find({ age: 27 }).toArray( (error, user) => {
        if (error) {
            return console.log('Unable to fetch the data')
        }

        console.log(user)
    })

    db.collection('users').find( {age: 27} ).count( (error, no_of_users) => {
        if (error) {
            return console.log('Unab;e to fetch the data')
        }

        console.log('Total no.of users where age 27 is : ' + no_of_users)
    })

    db.collection('tasks').findOne( {_id: new ObjectID('5eb6c14d04e04b0ff8d313d4') }, (error, task) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(task)
    })

    db.collection('tasks').find({ completed: false}).toArray((error, task) => {
        if (error) {
            return console.log('Unable to Fetch!!')
        }

        console.log(task)
    })
})
