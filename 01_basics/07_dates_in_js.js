//******************** Dates **************
// 

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());


// console.log(typeof myDate);

// let myCreatedDate = new Date('2026-02-16');
let myCreatedDate = new Date('02-16-2026');
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// 
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp); // This will print the timestamp in milliseconds since epoch
// console.log(Math.floor(Date.now()/1000));



let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // This will return the month (0-11), so we add 1 to get the correct month number
console.log(newDate.getDay());



newDate.toLocaleString('default',{
    weekday: "long",
     
})

