function accum(s){
    return s.split('').map((el,i) => el.toUpperCase() + el.repeat(i)).join('')
    }

//accum(s)
//"STtRrrIiiiNnnnnGggggg"

//forEach
const months = ['January', 'February', 'March', 'April']
for (let i = 0; i < months.length; i++) {
    console.log(months[i]);
}

const returnedValue = months.forEach(function(month) {
    return month
})
console.log('returnedValue: ', returnedValue)

/*forEach is only used to loop through the array and perform some process or logging. It does not return any value, even if you explicitly return a value from the callback function(this means that the returned value comes as undefined in the above example)*/

//also

months.forEach(function(month, index, array) {
    console.log(month, index, array)
})