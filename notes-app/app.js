 const fs = require('fs')
 fs.writeFileSync('notes.txt','Hai Welcomes\n')
 fs.appendFileSync('notes.txt','Node js ')


 const {name}  = require('./utils.js')
 firstName = name
 console.log('Name from utils.js File : ',firstName)
 console.log('Name from utils.js File : ',name)


 const {add} = require('./utils.js')
 result = add(2,3)
 console.log('The sum is : ',add(4,5))
 console.log('The sum is : ',add(4,5))
 

 const print = require('./notes.js')
 result = print();
 console.log('Content in the notes.js file : ',result)
 console.log('Content in the notes.js file : ',print())




