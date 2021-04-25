//regex prototype test

const str = 'house mouse'

const regex = new RegExp('ou', 'g')

console.log(regex.test(str))
//true

//also
const str = 'house mouse'
const regex2 = /ou/g
console.log(regex2.test(str))
//true