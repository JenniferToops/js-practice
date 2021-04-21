const items = [{   
    id: 1,
        name: 'burger',
        price: 400
    },
               {
    id: 2,
        name: 'fries',
        price: 300
    },
                {
    id: 3,
        name: 'shake',
        price: 350
    }]

//create an array from the object of items ids 
items.map((items) => items.id)
//[1, 2, 3]

//create an array from the object of items names
items.map((item) => item.name)
//["burger", "fries", "shake"]

//create an array from the object of the items prices
const reduced = items.map((item) => item.price);
console.log(reduced)
//[400, 300, 350]

//get the total cost for all of the items in the array (above)
let total = reduced.reduce((acc, c) => acc + c)
//1050

//can combine the two methods map() and reduce()
let total = 
    items.map(item => item.price).reduce((acc, c) => acc + c)
console.log(total)
//1050

//or, we can avoid mapping to an array entirely and just reduce the values in the object:
let reduced = items.reduce((acc, c) => acc + c.price, 0)
console.log(reduced)
//1050

//log all of the ids
items.forEach(item => console.log(item.id))
//VM2780:1 1
//VM2780:1 2
//VM2780:1 3

//log all of the names
items.forEach(item => console.log(item.name))
//VM3035:1 burger
//VM3035:1 fries
//VM3035:1 shake

//in for-loop to show callback accumulation
let reduced
let previous = 0
for (let i = 0; i < items.length; i++) {
    let next = items[i]
    previous = previous + next.price
}
reduced = previous
console.log(reduced)