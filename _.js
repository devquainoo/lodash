const _ = {};
// _.clamp = (number,lower,upper) => {
//   if(number>lower && number < upper){
//     return number;
//   }
//   if (number < lower){
//     return lower;
//   }
//   if (number > upper){
//     return upper;
//   }
// }
_.clamp = (number,lower,upper) => {
  let lowerClamped = Math.max(number,lower);
  let clamped = Math.min(lowerClamped,upper);
  return clamped;
};
_.inRange = (num,start,end) => {
  if (end === undefined) {
      end = start;
      start = 0;
  }
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  if(num < start || num >= end) {
    return false;
  } else {
    return true;
  }
}
_.words = str => str.split(' ');
_.pad = (str, length) => {
  if (str.length >= length) {
    return str;
  }
  let leftPad = undefined;
  let rightPad = undefined;
  let diff = length - str.length;
  if (diff % 2 === 0) {
    leftPad = diff/2;
    leftPad = ' '.repeat(leftPad);
    rightPad = leftPad;
  } else {
    let remainder = diff % 2;
    leftPad = Math.floor((diff/2));
    leftPad = ' '.repeat(leftPad);
    rightPad = leftPad + ' '.repeat(remainder);
  }
  str = leftPad + str + rightPad;
  return str;
} 
_.has = (obj, key) => {
  let hasValue = obj[key]!==undefined ;
  return hasValue;
}
_.invert = obj => {
  const newObj = {};
  for (let key in obj) {
    // let newObjKey = String(obj[key]);
    newObj[String(obj[key])] = key;
  }
  return newObj;
}
_.findKey = (obj,f) => {
  for (let key in obj) {
    let truthy = f(obj[key]);
    if (truthy){
      return key;
    } 
  }
  return undefined;
}
// drops array from beginning
_.drop = (arr,numberToDrop=1) => {
  if (arr.length <= numberToDrop || numberToDrop ===0) {
    return arr
  }
  posToSliceFrom = numberToDrop ;
  let newArr = arr.slice(posToSliceFrom);
  return newArr;
}
_.dropWhile = (arr,f) => {
  let newArr = arr.slice();
  for (let i = 0; i<arr.length; i++){
    let falsy = f(arr[i],i,arr);
    if (falsy === false){
      break;
    } else {
      newArr.shift();
    }

  }
  return newArr;
}
_.chunk = (arr,size) => {
  let newArr = [];
  let numOfEvenChunks = Math.floor(arr.length/size);
  let remainder = arr.length % size;
  let chunk = [];
  let chunkCounts = 0;
  for (let i =0; i<arr.length; i++){
    chunk.push(arr[i]);
    if (chunk.length === size) {
      newArr.push(chunk);
      chunkCounts ++;
      chunk = [];
    } else if (chunkCounts === numOfEvenChunks){
      newArr.push(chunk);
      
    
    }
  }
  return newArr;
}
// Do not write or modify code below this line.
module.exports = _;