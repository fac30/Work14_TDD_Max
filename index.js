function map(array, callback) {
  const newArr = [];
  for (element of array) {
    newArr.push(callback(element));
  }
  return newArr;
}

function filter(array, callback) {
  const newArr = [];
  for (element of array) {
    if (callback(element)) {
      newArr.push(element);
    }
  }
  return newArr;
}

function every(array, callback) {
  for (element of array) {
    if (!callback(element)) {
      return false;
    }
  }
  return true;
}

function some(array, callback) {
  for (element of array) {
    if (callback(element)) {
      return true;
    }
  }
  return false;
}

function find(array, callback) {
  for (element of array) {
    if (callback(element)) {
      return element;
    }
  }
  return undefined;
}

function reduce(array, callback, initial) {
  let result;
  if (initial || initial === 0) {
    result = initial;
  } else {
    result = array.shift();
  }
  for (element of array) {
    result = callback(result, element);
  }
  return result;
}
