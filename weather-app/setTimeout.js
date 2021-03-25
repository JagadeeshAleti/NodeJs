console.log('Starting')

setTimeout( () => {
    console.log('Excuted after 2 seconds')
}, 2000)

setTimeout( () => {
    console.log('Printed without waiting')
}, 0)

console.log('Stopping')