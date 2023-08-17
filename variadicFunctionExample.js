/**
 * sandbox play of variadic functions in javascript
 */

/**
 * variadic function using the "arguments" object
 * @returns the argument with the longest length 
 */
function longestStringArgsVer() {
    let longest = "";
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i].length > longest.length) {
        longest = arguments[i];
      }
    }
    return longest;
}

/**
 * variadic function using the "..." parameter
 * @returns the argument with the longest length 
 */
function longestStringEllipse(...params) {
  let longest = "";
    for (let i = 0; i < params.length; i++) {
      if (params[i].length > longest.length) {
        longest = params[i];
      }
    }
    return longest;
}

/**
 * With the arrow function style, we can not
 * use the "arguments" object 
 */
const longestArrowStyle = (...params) => {
  let longest = "";
    for (let i = 0; i < params.length; i++) {
      if (params[i].length > longest.length) {
        longest = params[i];
      }
    }
    return longest;
}

/* 
console.log(longestStringArgsVer( "1", "22", "333", "4444", "55555"))
console.log(longestStringArgsVer( ["1", "22", "333", "4444", "55555"]))
console.log(longestStringArgsVer( ["1"], ["22", "22"], ["333", "333", "333"]))
console.log("\n")

console.log(longestStringEllipse( "1", "22", "333", "4444", "55555"))
console.log(longestStringEllipse( ["1", "22", "333", "4444", "55555"]))
console.log(longestStringEllipse( ["1"], ["22", "22"], ["333", "333", "333"]))
console.log("\n") */

console.log(longestArrowStyle( "1", "22", "333", "4444", "55555"))
console.log(longestArrowStyle( ["1", "22", "333", "4444", "55555"]))
console.log(longestArrowStyle( ["1"], ["22", "22"], ["333", "333", "333"]))
