

let arr = [1, 2, 4, 4, 5, 6, 4, 8, 0]
undefined
arr.filter(el => el === 4)
(3) [4, 4, 4]
let fourArr = arr.filter(el => el === 4)
undefined
fourArr
(3) [4, 4, 4]
let multiplyByThreeArr = arr.map(el => el * 3);
undefined
multiplyByThreeArr
(9) [3, 6, 12, 12, 15, 18, 12, 24, 0]
let sqRootArr = arr.map(el => Math.round(el**1/2))
undefined
sqRootArr;
(9) [1, 1, 2, 2, 3, 3, 2, 4, 0]
let sortedAscArr = arr.sort((a, b) => a - b)
undefined
sortedAscArr;
(9) [0, 1, 2, 4, 4, 4, 5, 6, 8]
let newArr = [1.25, 3.5, 100.6, 285, 2.085]
undefined
let sortedDescNewArr = newArr.sort((a, b) => b - a)
undefined
sortedDescNewArr;
(5) [285, 100.6, 3.5, 2.085, 1.25]

strArr = str.split(",")
(7) ["1", " 2", " 3", " 4", " 5", " 6", " 7"]
let trimmedStrArr = strArr.map(el => el.trim())
undefined
trimmedStrArr
(7) ["1", "2", "3", "4", "5", "6", "7"]
trimmedStrArr.join("-*-*-")
"1-*-*-2-*-*-3-*-*-4-*-*-5-*-*-6-*-*-7"

function numsOnly(strArr) {
    let newArr = strArr.filter(el => !isNaN(el))
    return newArr
    }

    numsOnly(strArr)
(7) ["1", " 2", " 3", " 4", " 5", " 6", " 7"]

function trimEls(strArr) {
    let trimmed = strArr.map(el => el.trim())
    console.log(trimmed)
}
trimEls(strArr)
VM20386:3 (7) ["1", "2", "3", "4", "5", "6", "7"]

function makeNums(strArr) {
    let newStrArr = strArr.map(el => parseInt(el))
    console.log(newStrArr)
    return newStrArr.map(el => el ** 3)    
}
undefined
makeNums(strArr)
VM20937:3 (7) [1, 2, 3, 4, 5, 6, 7]
// (7) [1, 8, 27, 64, 125, 216, 343]

// shortened version 

// let strArr = ["1", "2", "3"]
undefined
function makeNums(strArr) {
    let newStrArrCubed = strArr.map((el) => parseInt(el) ** 3)
    return newStrArrCubed
}

makeNums(strArr)
//(3) [1, 8, 27]

function multiplyAndAddAll(newStrArr) {
    return newStrArr.reduce((acc, c) => acc * c)
}

multiplyAndAddAll(newStrArr)
//5040

let string = "ooopsie doopsie"

typeof string
//"string"
Array.isArray(string)
//false
Array.isArray(newStrArr)
//true
let newerArr = 'hey there'
Array.isArray(newerArr)
//false