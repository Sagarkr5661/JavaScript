// **************************** Arrays ****************************

const myArr = [1, 2, 3, 4, 5];
const myHeros = ["Batman", "Superman", "Spiderman"];

const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArr[2]);



// Array Methods

// myArr.push(6); // adds an element to the end of the array
// // myArr.pop(); 
// myArr.unshift(9); // adds an element to the beginning of the array
// myArr.shift(); // removes the first element of the array


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));  


// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);


// console.log(myArr);





//  ********************* slice and splice *********************

console.log('A ', myArr);

const myn1 = myArr.slice(1, 4); // creates a new array from index 1 to 3 (4 is not included)
console.log(myn1);

console.log("B", myArr);


const myn2 = myArr.splice(1, 4); // removes elements from index 1 to 3 (4 is not included) and returns the removed elements
// console.log(myn2);

console.log("C", myArr); // myArr is modified by splice, it removes the elements from index 1 to 3  
console.log(myn2);


