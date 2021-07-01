let array = [1, 2, 3, 4, 5, 6]

array.forEach(element => console.log(element))
//1
//2
//3
//4
//5
//6

array.forEach(element => console.log(element * 2))
//2
//4
//6
//8
//10
//12

// array = [1, 2, 3, 4, 5, 6]
let newArr = array.map(el => el *2)
console.log(newArr);
//(6) [2, 4, 6, 8, 10, 12]

const regex = /[A-Z]/g

let string = "It's a beautiful day in May."

function matchUpper(string) {
    let upper = string.match(regex)
    console.log(upper)
}
matchUpper(string)

let newStr = 'I am not ready for capture groups!'

//const regex = new RegExp() -- don't use new RegExp unless I have to use variables in it

const regex2 = /^I/
console.log(regex2.test(newStr))


const regex4 = /dogs/
let string3 = "I love dogs."

console.log(string3.replace(regex4, "cats"))
/*first argument needs to be the regex, second needs to be the string replacing the regex */

let string5 = "Why is it bad to write comments under the code?"
const regex5 = /bad/

console.log(string5.replace(regex5, "good"))

let string6 = "I have a dog named Becky."
let regex6 = /[aeiou]/gi
console.log(string6.replace(regex6, "#"))


let string7 = "Geraldine is awesome!"
const regex7 = /a/
console.log(string7.search(regex7)) 
//returns the index of the first matching character or -1 if there is no match

let string8 = "Stream is almost over you all..."
const regex8 = /\./
console.log(string8.search(regex8))





