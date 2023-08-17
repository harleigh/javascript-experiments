/**
 * Small programs making structures using factories (function that return a
 * new object)
 */


/**
 * Not my favorite way: 
 * @param {*} keys a string of keys seperated by "," 
 * @returns function that takes an arbirary amount of
 *          arguments which are values for the keys
 */
function makeStruct(keys) {
    //destroy all whitespace and then split on ","
    var keys = keys.replace(/\s/g, '').split(',');
    var count = keys.length;
    function constructor() {
      for (var i = 0; i < count; i++) {
        this[keys[i]] = arguments[i];
      }
    }
    return constructor;
}


/**
 * 
 * keys: an arbitrarily long list of keys
 * returns a function that is row in the form of 
 *    {key1: value1, key2:value2, ..., keyN:valueN}
 */
const Struct = (...keys) => {
    const row = (...vals) =>   {
        if(vals.length!==keys.length){ throw "missmatch in number of keys and arguments"}
        return keys.reduce( (runningEntry, curKey, idx) => {
                              //console.log("Row Element Before", runningEntry )
                              //console.log("current key and vals[idx]", curKey, vals[idx])
                              runningEntry[curKey] = vals[idx];
                              //console.log("Row Element After", runningEntry, curKey )
                              //console.log()
                              return runningEntry
                             }, {})
    }
    return row
}

/**
 * Play Code 
 */

//a reminder with keys and objects
const arr = {}
arr["key1"] = "value1"
arr["key2"] = "value2"
arr["key3"] = "value3"
arr["magic key"] = "treasure!"
console.log(arr)
console.log(arr["key1"])
arr["key1"] = "value4"
console.log(arr["key1"])
console.log(arr["magic key"])
console.log()


//playing with the makeStruct function
var Item = makeStruct("id,speaker,country");
var row = new Item("1", 'john', 'au');  
 console.log(row); 
console.log(row.speaker); 
console.log()




//making a few data rows using the Struct arrow-style method
const dataRow = Struct('id', 'speaker', 'country')
row = dataRow("1", "john", "au")
console.log("We built the following row: ", row); 
console.log()

newRow = dataRow("2", "luke", "ee")
console.log("We built the following row: ", newRow); 
console.log()
