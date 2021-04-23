//.padStart(total numberOfCharacters, "padString")
str1 = '234789'
str1.padStart(12, "*")
"******234789"


//.padEnd(total numberOfCharacters, "padString")
str1.padEnd(11, "-****")
"234789-****"

//.toFixed(number of digits after the decimal point)
let num = 2.345667
num.toFixed(3)
//2.346