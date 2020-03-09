var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray (array, element) {
  var arrayTwo = [...array, element];
  return arrayTwo;
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
}

function accessElementInArray (array, index) {
  var element = array[index];
  return element;
}
