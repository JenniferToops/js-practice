//MATCH

let quote = "You miss 100% of the shots you don't take.".toLowerCase()

const regex1 = /you/

const regex2 = /shots/

quote.match(regex1)
//["you", index: 27, input: "You miss 100% of the shots you don't take.", groups: undefined]

quote.match(regex2)
//["shots", index: 21, input: "You miss 100% of the shots you don't take.", groups: undefined]

quote.match(regex1/g)
//(2) ["you", "you"]

let youQuote = quote.match(regex4).length
youQuote;
//2

let newQuote = "Why are there so many songs about rainbows?"
const regex3 = /rainbows/gi

newQuote.match(regex3)
//["rainbows"]



