let arr = ["let's", "see", "how", "many", "times", "I", "can", "loop", "through", "this", "array"]
let word = ''
const loop = n => {
    for (let i = 0; i < n; i++){
      word = arr[i % arr.length]
  }
  return word
}
//turn into a function




