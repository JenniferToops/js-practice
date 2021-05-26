// ****** FILTER*******
// Filter() iterates over every element in an array and returns a new array containing those elements that meet the criteria specified. I couldn't find anything regarding complexity 

function numsOnly(strArr) {
    let newArr = strArr.filter(el => !isNaN(el))
    return newArr
    }

    numsOnly(strArr)
// ["1", " 2", " 3", " 4", " 5", " 6", " 7"]

let array = ["love", "my", "dog"]

function addToTheBeginning(word) {
    array.unshift(word)
    return array
}

addToTheBeginning("I")
["I", "love", "my", "dog"]
array.filter(el => el === "dog")
//["dog"]

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0]
let newArr = arr.filter(el => el > 3);
newArr
//[4, 5, 6, 7, 8]


//******* INCLUDES *******/
//includes() iterates over every element in an array and returns a boolean value indicating whether the search term has been found in the array
let arr = [1, 2, 3, 4, 5, "hi"]
arr.includes("hi")
//true
arr. includes(3, 2)
//true
arr.includes(3, 3)
//false

let str = "hey everyone"

function findHey(str) {
    let arr = str.split(" ")
    return arr.includes("hey")
}
findHey(str)
//true


//***** FOR EACH ********/

/*forEach is only used to loop through the array and perform some process or logging. It does not return any value, even if you explicitly return a value from the callback function(this means that the returned value comes as undefined in the above example)*/
//also, I found some information about forEach() complexity, but I didn't understand it
const months = ['January', 'February', 'March', 'April']
for (let i = 0; i < months.length; i++) {
    console.log(months[i]);
}

const returnedValue = months.forEach(function(month) {
    return month
})
console.log('returnedValue: ', returnedValue)

months.forEach(function(month, index, array) {
    console.log(month, index, array)
})

let arr = [1, 2, 4, 4, 5, 6, 4, 8, 0]

function logEach(arr) {
    arr.forEach(el => console.log(el))
}
logEach(arr)
VM27809:2 1
VM27809:2 2
2VM27809:2 4
VM27809:2 5
VM27809:2 6
VM27809:2 4
VM27809:2 8
VM27809:2 0

// ******* MAP ******
//Array method that creates a new array populated with elements resulting from the actions required in the function performed on each element in the original array

function addLength(str) {
        let arr = str.split(" ")
        let addLengthArr = arr.map(el => el + " " + el.length)
        return addLengthArr
  }

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0]
arr.map(el => el ** 3)
//(9) [1, 8, 27, 64, 125, 216, 343, 512, 0]

let arr = [1, 2, 3, 4, 5, 6, 7]
let newArr = []
arr.map(el => newArr.push(el))
newArr
//(7) [1, 2, 3, 4, 5, 6, 7]



// ****** REDUCE *******
//reduce takes the accumulated value and counter value as parameters. It performs the function indicated on each element in the array while accumulating the total and returns that single, accumulated value after it's done iterating through the array elements.
//this is the complexity (based on a stack overflow response: The minimum time complexity of .reduce is O(n), because it must iterate through all elements once (assuming an error isn't thrown), but it can be unbounded (since you can write any code you want inside the callback) 
//https://stackoverflow.com/questions/57670033/what-is-the-time-complexity-of-javascript-array-reduce-and-array-find

let arr = [1, 2, 3, 4]
function multiplyInt(arr) {
    return arr.reduce((acc, c) => acc * c);
}
multiplyInt(arr)
//24

let arr = [1, 2, 3, 4, 5, 6, 7]
arr.reduce((acc, c) => acc + c, 0)
//28

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0]
arr.reduce((acc, c) => acc + c * 2, 0)
//72

// ************ SORT, POP, AND SHIFT *********

//Sort() is both an array and string method that sorts the first character in each element in ascending order. This order can be reversed if using a callback function, or the the sorting can be applied to the whole number within an element if a callback function is used.

//pop() is an array method that removes the last element in an array
//shift() is an array method that removes the first element in an array

let array = [0, 13, 68, 40]

function minMaxDifference(array) {
    let sortedArr = array.sort((a, b) => a - b) 
    sortedArr.pop()
    sortedArr.shift()
    return sortedArr
}

let arr = [1, 2, 3, 4]
arr.pop()
arr
//(3) [1, 2, 3]
arr.shift()
arr
//(2) [2, 3]

let newArr = [1.25, 3.5, 100.6, 285, 2.085]
newArr.sort((a, b) => a - b)
newArr
//(5) [1.25, 2.085, 3.5, 100.6, 285]

newArr.sort((a, z) => z - a)
//(5) [285, 100.6, 3.5, 2.085, 1.25]
newArr.pop()
//1.25
newArr
//(4) [285, 100.6, 3.5, 2.085]
newArr.shift()
//285
newArr
//(3) [100.6, 3.5, 2.085]

// ********* PUSH *******
//push() is an array method that adds an element to the end of an array. It is very handy when one needs to populate an empty array.


function filter_list(l) {
    let newList = []
    for (let i = 0; i < l.length; i++) {
    if (typeof l[i] !== 'string') {
        newList.push(l[i])
    }
} return newList
}

let newArr = [1.25, 3.5, 100.6, 285, 2.085]
newArr.filter(el => el < 100)
//(3) [1.25, 3.5, 2.085]
newArr.filter(el => el < 2)
//[1.25]

let arr = ["let's", "see", "how", "many", "times", "I", "can", "loop", "through", "this", "array"]
arr.filter(el => el === "many")
//["many"]


//******* EVERY *******/
//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
array = [3, 3, 3, 3, 3, 3, 3]
array.every(el => el < 4)
//true

let array = ['hi', 'hi', 'hi']
array.every(el => el === "hi")
//true

let arr = ["let's", "see", "how", "many", "times", "I", "can", "loop", "through", "this", "array"]
arr.every(el => el === "times")
//false

//********INDEXOF */
// indexOf() is both a string and array method that returns the FIRST index matching the character/number that is being seached for. To find the last index, you need to use lastIndexOf()
arr = ['hi', 'bye', 4, 'woohoo']
arr.indexOf(4)
//2

let str = "hey everyone!"
str.indexOf("y")
//2

let arr = ["let's", "see", "how", "many", "times", "I", "can", "loop", "through", "this", "array"]
arr.indexOf("I")
//5

// ***** SLICE *****//
//slice() is an array and string method that returns a portion of the original array:

newStr = "Oh my goodness, look at that dog!"
newStr.slice(16, newStr.length)
//"look at that dog!"


function makeArray(n) {
    let array = []
    for (let i = 0; i < n; i++) {
        array.push(i)
    } return array
}
makeArray(30)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
let newSlicedArray = makeArray(30).slice(2, 22)
newSlicedArray
//(20) [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

let arr = ["let's", "see", "how", "many", "times", "I", "can", "loop", "through", "this", "array"]
arr.slice(5, arr.length)
(6) ["I", "can", "loop", "through", "this", "array"]



//******** UNSHIFT ****/
//unshift() is an array method that modifies the original array by inserting a new element at the beginning of an array. 

let array = ["love", "my", "dog"]

function addToTheBeginning(word) {
    array.unshift(word)
    return array
}

addToTheBeginning("I")
//["I", "love", "my", "dog"]


let arr = ["let's", "see", "how", "many", "times", "I", "can", "loop", "through", "this", "array"]
function addWords(word) {
    arr.unshift(word)
    return arr
}
addWords("we'll")
//(12) ["we'll", "let's", "see", "how", "many", "times", "I", "can", "loop", "through", "this", "array"]
addWords("now")
//(13) ["now", "we'll", "let's", "see", "how", "many", "times", "I", "can", "loop", "through", "this", "array"]