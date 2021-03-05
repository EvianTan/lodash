const { words, has, invert } = require("lodash");

const _ = {

    clamp: function(number, lower, upper) {
        lowerClampedValue = Math.max(number, lower)
        clampedValue = Math.min(lowerClampedValue, upper)
        return clampedValue;
    },

    inRange: function(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        } 
        if (start > end) {
            temp = end;
            end = start;
            start = temp;
        }
        var isInRange = (number >= start && number < end) ? true : false;
        return isInRange;
    },

    words: function(string) {
        return string.split(" ");
    },

    pad: function(string, length) {
        if (string.length > length) {
            return string;
        }
        startPaddingLength = Math.floor((length - string.length)/2);
        endPaddingLength = length - string.length - startPaddingLength;
        paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },

    has: function(object, key) {
        hasValue = (object[key] !== undefined);
        return hasValue;
    },

    invert: function(object) {
        var invertedObject = {};
        for (key in object) {
            originalValue = object[key];  
            invertedObject[originalValue] = key;
        }
        return invertedObject;
    },

    findKey: function(object, predicate) {
        for (key in object) {
            value = object[key];
            predicateReturnValue = predicate(value);
            if (predicateReturnValue === true) {
                returned = 'yes'
                return key;
            }
        }
        return undefined;
    },

    drop(array, number) {
        if (number === undefined) {
            number = 1
        }
        droppedArray = array.slice(number, array.length);
        return droppedArray;
    },

    dropWhile(array, predicate) {
        cb = (element, index) => {
            return !predicate(element, index, array);
        }
        dropNumber = array.findIndex(cb);
        droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },

    chunk(array, size = 1) {
        arrayChuncks = [];
        for (i = 0; i < array.length; i += size) {
            arrayChunck = array.slice(i, i+size);
            arrayChuncks.push(arrayChunck);
        }
        return arrayChuncks;
    }
}




// Do not write or modify code below this line.
module.exports = _;