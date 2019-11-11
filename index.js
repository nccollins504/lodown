'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
/**
 * Identity: Returns <value> unchanged
 * 
 * @param {value} value: Any value.
 * @return {value}: Value unchanged.
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;
/**
 * typeOf: Return the type of <value> as a string
 * 
 * @param {value} value: Any value.
 * @return {value}: <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
 */
function typeOf(value) {
      if(typeof value === 'string'){
        return 'string'
    }else if(typeof value === 'number'){
        return 'number'
    }else if(typeof value === 'boolean'){
        return 'boolean'
    }else if(value === null){
        return 'null'
    }else if(Array.isArray(value)){
        return 'array'
    }else if(typeof value === 'function'){
        return 'function'
    }else if(typeof value === 'undefined'){
        return 'undefined'
    }else if(value instanceof Date){
        return 'date'
}else if(typeof value === 'object'){
        return 'object'
}
}
module.exports.typeOf = typeOf;
/**
 * first: If <array> is not an array, return []. If <number> is not given or not a number, return just 
 * the first element in <array>. Otherwise, return the first <number> items of <array>
 * 
 * @param {array} array: An array
 * @param {number} number: A number
 * @return {value}: If <number> is not given or not a number, return just the first element in <array>.
*   Otherwise, return the first <number> items of <array>
 **/
function first(array, number) {
    if(!Array.isArray(array) || number < 0) return [] ;
        if(number === undefined || typeof number !== 'number') return array[0];
        return array.slice(0, number)
}
module.exports.first = first;
/**
 * last: If <array> is not an array, return []. If <number> is not given or not a number, return just 
 * the last element in <array>. Otherwise, return the last <number> items of <array>
 * 
 * @param {array} array: An array
 * @param {number} number: A number
 * @return {value}: If <number> is not given or not a number, return just the last element in <array>.
*   Otherwise, return the last <number> items of <array>
 **/
function last(array, number) {
    if(!Array.isArray(array) || number < 0) return [];
    if(number === undefined || typeof number !== 'number') return array[array.length - 1];
    if(number > array.length) return array;
    return array.slice(-number);
}
module.exports.last = last;
/**
 * indexOf: Return the index of <array> that is the first occurrance of <value>
 * Return -1 if <value> is not in <array>
 * 
 * @param {array} array: An array
 * @param {value} number: A value
 * @return {value}:Return the index of <array> that is the first occurrance of <value>
 *  Return -1 if <value> is not in <array>
 **/
function indexOf(array, value) {
    for(var i = 0; i < array.length; i++) {
        return array.indexOf(value);
    }
}
module.exports.indexOf = indexOf;
/**
 * contains: Return true if <array> contains <value>. Return false otherwise
 * 
 * @param {array} array: An array
 * @param {value} number: A value
 * @return {value}:Return true if <array> contains <value>. Return false otherwise
 **/
function contains(array, value) {
   if(!value) {
       return false;
   }
   return array.includes(value) ? true : false
}
module.exports.contains = contains;
/**
 * unique: Return a new array of all elements from <array> with duplicates removed
 * 
 * @param {array} array: An array
 * @return {value}:Return a new array of all elements from <array> with duplicates removed
 **/
function unique(array) {
 const uniqueArr = new Set(array);
 const backToArray = [...uniqueArr];
 return backToArray;
}
module.exports.unique = unique;
/**
 * filter: return a new array of elements for which calling <function> returned true
 * 
 * @param {array} array: An array
 * @param {function} action: A function
 * @return {value}: return a new array of elements for which calling <function> returned true
 **/
function filter(array, action) {
    let arr = [];
    each(array,(element, index, array) => {
        if(action(element, index, array)) {
            arr.push(element);
        }
        
    }) 
    return arr;
}

module.exports.filter = filter;
/**
 * reject: return a new array of elements for which calling <function> returned false
 * 
 * @param {array} array: An array
 * @param {function} action: A function
 * @return {value}: return a new array of elements for which calling <function> returned false
 **/
function reject(array, action) {
       let arr = [];
    filter(array,(element, index, array) => {
        if(!action(element, index, array)) {
            arr.push(element);
        }
        
    }) 
    return arr;
}
module.exports.reject = reject;
/**
 * partition: Return an array that is made up of 2 sub arrays:
*       An array that contains all the values for which <function> returned something truthy
*        An array that contains all the values for which <function> returned something falsy
 * 
 * @param {array} array: An array
 * @param {function} action: A function
 * @return {value}: Return an array that is made up of 2 sub arrays:
*       An array that contains all the values for which <function> returned something truthy
*       An array that contains all the values for which <function> returned something falsy
 **/
function partition(array, action) {
    let arr2 = [];
    let arr3 = [];
    let arr4 =[];
    for(let i = 0; i <= array.length -1; i++) {
        if(action(array[i], i, array)) {
            arr2.push(array[i]);
        } else if(action(array[i], i, array) !== true) {
            arr3.push(array[i])
        } 
    }
    arr4.push(arr2, arr3);
    return arr4;
}

module.exports.partition = partition;
/**
 * map: return the new array
 * @param {array} array: An array
 * @param {function} callback: A function
 * @return {array}: return the new array
 **/
function map(array, callback) {
    var newArr = [];
    if(Array.isArray(array)) {
        for(var i = 0; i < array.length; i++) {
            newArr.push(callback(array[i], i, array));
        }
    } else{
        for(var key in array) {
            newArr.push(callback(array[key], key, array));
        }
    }
    return newArr;
}

module.exports.map = map;
/**
 * pluck:  Return an array containing the value of <property> for every element in <array>
 * @param {array} array: An array
 * @param {property} key: A property
 * @return {array}:  Return an array containing the value of <property> for every element in <array>
 **/
function pluck(array, key) {
    return map(array,function(object, i, a) {
        return object[key];
    })
}

module.exports.pluck = pluck;
/**
 * every: Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   If the return value of calling <function> for every element is true, return true
*   If even one of them returns false, return false
*   If <function> is not provided, return true if every element is truthy, otherwise return false
 * @param {array} array: An array
 * @param {function} action: A function
 * @return {boolean}:  If the return value of calling <function> for every element is true, return true
*   If even one of them returns false, return false
*   If <function> is not provided, return true if every element is truthy, otherwise return false
 **/
function every(collection, action) {
    if(action === undefined) {
        action = function(collectstuff) {
            if(!!collectstuff == true) {
                return true;
            } else {
                return false;
            }
        }
    }
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            if(action(collection[i], i, collection) === false) {
                return false;
            }
        }
        return true;
    } else if(typeof(collection) === 'object') {
        for(var key in collection) {
            if(action(collection[key], key, collection) === false) {
                return false;
            }
        }
        return true;
    }
}
module.exports.every = every;
/**
 * some: Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   If the return value of calling <function> is true for at least one element, return true
*   If it is false for all elements, return false
*   If <function> is not provided return true if at least one element is truthy, otherwise return false
 * @param {array} array: An array
 * @param {function} action: A function
 * @return {boolean}: If the return value of calling <function> is true for at least one element, return true
*    If it is false for all elements, return false
*    If <function> is not provided return true if at least one element is truthy, otherwise return false
**/
function some(collection, action) {
    if(action === undefined) {
        action = function(collectstuff) {
            if(!!collectstuff == true) {
                return true;
            } else {
                return false;
            }
        }
    }
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            if(action(collection[i], i, collection) === true) {
                return true;
            }
        }
        return false;
    } else if(typeof(collection) === 'object') {
        for(var key in collection) {
            if(action(collection[key], key, collection) === true) {
                return true;
            }
        }
        return false;
    }
}
module.exports.some = some;
/**
 * reduce: Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   Use the return value of <function> as the "previous result"
*      for the next iteration
*   On the very first iteration, use <seed> as the "previous result"
*   If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   After the last iteration, return the return value of the final <function> call
 * @param {array} array: An array
 * @param {function} func: A function
 * @param {seed} seed: A seed
 * @return {seed}: return the return value of the final <function> call
**/
function reduce(array, func, seed) {
    let seedDefined = 0;
    if(seed === undefined) {
        seed = array[0];
        seedDefined = 1;
    }
    //iterate through every element
    for(var i = seedDefined; i < array.length; i++) {
        seed = func(seed, array[i], i);
    }
    return seed;
}
module.exports.reduce = reduce;
/**
 * extend: Copy properties from <object 2> to <object 1>
*    If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*    Return the update <object 1>
 * @param {object} object1: An object
 * @param {object} ...restOfObject: An object
 * @return {object}:  Return the update <object 1>
**/
function extend(object1, ...restOfObjects) {
    for(var i = 0; i < restOfObjects.length; i++) {
        for(var key in restOfObjects[i]) {
            object1[key] = restOfObjects[i][key];
        }
    } 
    return object1;
}
module.exports.extend = extend;