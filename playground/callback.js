setTimeout( () => {
    console.log('Wait for 2000 seconds')
}, 2000)

const names = ['jagadeesh', 'eswar', 'srinu', 'sis', 'abc']
const shortNames = names.filter( (name) => {
    return name.length <= 4
})

console.log(shortNames)

const geocode = (address, callback) => {
    setTimeout( () => {
        const data = {
            latitude: 0,
            longitude:0
        }
    
       callback(data)
    }, 2000)
}

geocode('india', (data) => {
    console.log(data)
})



const add = (a, b, callback) => {
    setTimeout( () => {
        callback(a+b)
    }, 2000)
}

add(1,4, ( sum ) => {
    console.log( 'The sum is : ' + sum)
})