const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
        }, 2000)
    })
}

// add(2,1).then((sum) => {
//     console.log('****************WithOut Proper Promise chaining*********')
//     console.log(sum)

//     add(sum, 5).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })


add(1, 1).then((sum) => {
    console.log('****************With Proper Promise chaining*********')
    console.log(sum)

    return add(sum, sum)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})