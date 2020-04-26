const square1 = function(x) {
    return x * x
}

const square2 = (x) => {
    return x * x
} 

const square3 = (x) => x * x;

console.log(square1(3))
console.log(square2(4))
console.log(square3(5))

const event = {
    name: 'BirthDay Party',
    guestList: ['jay','jimmy','jhon'],
    printGuestList: function() {
        console.log('\n\nGuest list for '+this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + 'attending ' + this.name)
        })
    },
    printGuestList1() {
        const that = this
        console.log('\n\nGuest list for '+that.name)
        this.guestList.forEach(function (guest) {
            console.log(guest + ' attended '+ that.name)
        })
    }
}

event.printGuestList()
event.printGuestList1()