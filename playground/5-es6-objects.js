// object property shorthand
const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'New York'
}

console.log(user)


//Object destructuring
const product = {
    label: 'Red NoteBook',
    price: 3,
    stock: 201,
    salePrice: undefined,
}

// const label = product.label
// const stock = product.stock

const {label, stock: propertyStock, rating = 5} = product // if the rating is not in the product then we can assign default value otherwise if it exist int he object the value on the oject will be printed

console.log(label, label, propertyStock, rating)


// const transaction = (type, product) => {
//     console.log(type, product.label, product.stock)
// }
const transaction = (type, {label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)