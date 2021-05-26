/* charAt
charCodeAt
concat
includes
indexOf
match
repeat
replace
search
slice
split
substr
toLowerCase
toUpperCase
trim */

const { cpus } = require("node:os")

//charAt is a string method that returns a new string consisting of the UTF-16 (UTF-16 (16-bit Unicode Transformation Format) code unit located at the specified offset into the string. 
//example 1: 
let str = "Hey, I hope everyone is having an awesome night!"
console.log(str.charAt(0))
//"H"

function getThirdChar(str) {
    console.log(`The third character in this string, ${str.charAt(2)}, is actually at the second index.`)
}
getThirdChar(str)
// The third character in this string, y, is actually at the second index.

str.charAt(10)
//"e"

//charCodeAt() 
//The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
let string = "ooopsie doopsie"
string.charCodeAt(6)
//101

function findCharCode(string) {
    console.log(string.charCodeAt(9))
}

findCharCode(string)
//111

findCharCode(string)
//32

function charStuff(string) {
    console.log(`The "${string.charAt(3)}" character has a UTF-16 character code of ${string.charCodeAt(3)} and it is located at index 3.`)
}

charStuff(string)
//The "p" character has a UTF-16 character code of 112 and it is located at index 3.

//concat
//concatinates two arrays or strings
let str = "Hey, I hope everyone is having an awesome night!"
let string = "I also hope we all sleep well"
str.concat(string)
//"Hey, I hope everyone is having an awesome night!I also hope we all sleep well"

let arr1 = ["Hey", "this", "is", "array", "number", "one"], arr2 = [" And", "this", "is", "array", "number", "two"]
arr1.concat(arr2)
// ["Hey", "this", "is", "array", "number", "one", " And", "this", "is", "array", "number", "two"]

let str = '1minus2minus3minus4', str2 = 'lots of words'
function concatenateStrings(str, str2) {
    console.log(str.concat(str2))
}
concatenateStrings(str, str2)
// "1minus2minus3minus4lots of words"

//includes() ...returns a boolean value indicating whether the element or characters were in the array or string
//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

let string = "ooopsie doopsie"
string.includes("o")
//true

let string = "ooopsie doopsie"
string.includes("o")

//true

function findTheCat(string2) {
    let lowerCaseString = string2.toLowerCase()
    console.log(lowerCaseString.includes("cat"))
}
findTheCat(string2)
//true

let array = ["love", "my", "dog"]

function love(array) {
    alert(`This array contains the word "love" --${array.includes("love")}`)
}
//love(array)

//indexOf() is a string and array method that returns the index of the character you are looking for

let str = "Hey, I hope everyone is having an awesome night!"
let string = "I also hope we all sleep well"

function findIndex(str) {
    let newString = str.concat(string)
    console.log(newString.indexOf("h"))
}

findIndex(str)
//7

let arr = ["let's", "see", "how", "many", "times", "I", "can", "loop", "through", "this", "array"]
arr.indexOf("how")
//2

arr.indexOf("times")
4

//match() finds a match using a regular expression in a string

function findLetters(string) {     
    console.log(string.match(regex))
}

let string = "1234Jkl 2q3 aSdf"

findLetters(string)
//["J", "k", "l", "q", "a", "S", "d", "f"]

function findLetters(string) {     
    console.log(typeof string.match(regex))
}

let string = "1234Jkl 2q3 aSdf"
findLetters(string)
// object

const regex4 = /[0-9]|\s/g
function findLetters(string) {     
    console.log(string.match(regex4))
}
let string = "1234Jkl 2q3 aSdf"
findLetters(string)
// ["1", "2", "3", "4", " ", "2", "3", " "]

let string = "I'm a big girl and I like donuts."

function findDonuts(string) {
    let regex = /donuts/gi
    return string.match(regex)
}

findDonuts(string)
["donuts"]
let string = "I'm a big girl and I like cake."

findDonuts(string)
null

//repeat - takes a character or sequence of characters and repeats them a specific number of times
//mozilla: The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

function numberOfCoffeeCups(o, things, x) {
    return `I have s${o.repeat(x)} many ${things}, ${x} to be exact, and I'm not getting rid of any!`
}

let o = "o"
let things = "coffee cups" 
let x = 50

//numberOfCoffeeCups(o, things, x)
"I have soooooooooooooooooooooooooooooooooooooooooooooooooo many coffee cups, 50 to be exact, and I'm not getting rid of any!"

let arr = ["x".repeat(3), "o".repeat(3), "p".repeat(3)]
//arr
(3) ["xxx", "ooo", "ppp"]

let dogTags500 = "dogTags".repeat(500)
dogTags500
"dogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTagsdogTags"


//replace method works for strings (also using regex)
/*mozilla: The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.*/

let str = "Hey, I hope everyone is having an awesome night!"
let string = "I also hope we all sleep well"

function combineStrings(str, string) {
    return str.concat(" "+string)
}
const regex3 = /i/gi
let star = "*"

combineStrings(str,string).replace(regex3, star)
"Hey, * hope everyone *s hav*ng an awesome n*ght! * also hope we all sleep well"

"Oh Lord, I hope I get a job by the end of the summer so I can pay my bills.".replace("hope I", "need to")
"Oh Lord, I need to get a job by the end of the summer so I can pay my bills."

let str = "I have the best kids in the universe."

let newStr = "dog"

str.replace("kids", newStr)
"I have the best dog in the universe."

//new replace
let str1 = "Becky, stop barking!"

let str2 = "start running"

let str3 = "Rosie"

let str4 = "stop barking"

str1.replace("Becky", str3).replace(str4, str2)
"Rosie, start running!"

//search - takes regex and finds the first index of the expression

const regex = /s/gi

aufWiedersehen.search(regex)
5

let string = "He took his vorpal sword in hand; Long time the manxome foe he sought — So rested he by the Tumtum tree And stood awhile in thought."

let regexS = /s/gi

let sses = string.search(regexS)

sses
10

let strNumLetter = "123hji123"

const regex3 = /[0-9]/

strNumLetter.search(regex3)
0
const regex4 = /[a-z]/gi

strNumLetter.search(regex4)
3




//slice
//slice is a string method that takes a starting index and ending index as parameters and produces a new string with the sliced characters
let str = "Hey, I hope everyone is having an awesome night!"
let sliceOfStr = str.slice(5, str.length)

sliceOfStr
"I hope everyone is having an awesome night!"

let string = "I'm a big girl and I like donuts."

let newSlice2 = string.slice(10, 14).concat(", " + string.slice(15, string.length))

newSlice2
"girl, and I like donuts."

"Oh Lord, I hope I get a job by the end of the summer so I can pay my bills.".slice(0, 27) + "."
"Oh Lord, I hope I get a job."

//split: an string method that converts a javascript string to an array 

let string = "You're a good boy, Charlie Brown."

let arr = string.split(" ")

arr
(6) ["You're", "a", "good", "boy,", "Charlie", "Brown."]

let string = "12345678"

let numArray = string.split("")

numArray
(8) ["1", "2", "3", "4", "5", "6", "7", "8"]

//substring: a string method that returns a string from the starting index and ending endex as parameters 
let string = "I'm a big girl and I like donuts."

let donuts = string.substr(19, string.length)

donuts
"I like donuts."
string.substr(19, string.length)
"I like donuts."

let longString = "There was a little orange kitty who lived behind the fence, and every time I watered the flower beds, I saw kitty footprints in the dark mulch."

let newString = longString[64].toUpperCase() + longString.substring(65, longString.length)
newString

"Every time I watered the flower beds, I saw kitty footprints in the dark mulch."

let str = "starry, starry night... paint your pictures blue and white"
undefined
str.substr(8, 16)
"starry night... "

//toLowerCase - The toLowerCase() method returns the calling string value converted to lower case.

"THIS IS AN ALL UPPERCASE STRING".toLowerCase()
"this is an all uppercase string"

let str = "It was many and many a year ago in a kingdom by the sea, I was a child and she was a child"

function indexZero(str) {
    return `${str[0].toLowerCase()} am happy!`
}
indexZero(str)
"i am happy!"

"OFF WITH THEIR HEADS!".toLowerCase()
"off with their heads!"

//toUpperCase
let string = "Puttin' on the ritz"

let newerString = string[string.length-4].toUpperCase() + string.slice(string.length-3, string.length)

newerString
"Ritz"
//

"let it be".toUpperCase()
"LET IT BE"

let str = "The Walrus and the Carpenter Walked on a mile or so, And then they rested on a rock Conveniently low: And all the little Oysters stood And waited in a row."

let allUppers = str.toUpperCase()

allUppers
"THE WALRUS AND THE CARPENTER WALKED ON A MILE OR SO, AND THEN THEY RESTED ON A ROCK CONVENIENTLY LOW: AND ALL THE LITTLE OYSTERS STOOD AND WAITED IN A ROW."

//trim
//mozilla: The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

let aufWiedersehen = "     So long! Farewell...  "

let bye = aufWiedersehen.trim()

bye
"So long! Farewell..."

aufWiedersehen.substr(14, aufWiedersehen.length).trim()
"Farewell..."

let soLong = aufWiedersehen.trim(0, 12)
"So long! Farewell..."

let soLong = aufWiedersehen.substr(0, 14)

let shortSoLong = soLong.trim()

shortSoLong

"So long!"