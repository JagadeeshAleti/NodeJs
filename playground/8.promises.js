const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 4, 3])          // For success
        reject('Things went wrong') // For Errors
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success! ', result)
}).catch((error) => {
    console.log('Error!!!' + error)
})


// In the above code doWorkPromise is a promise where it is peding for 2 seconds and then the promise is fullfilled