const marvel_heroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
const dc_heroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"];

// marvel_heroes.push(dc_heroes); // adds the entire dc_heroes array as a single element to the end of marvel_heroes
// console.log(marvel_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[5][3]);


// const allHeroes = marvel_heroes.concat(dc_heroes); // creates a new array by concatenating marvel_heroes and dc_heroes, but does not modify marvel_heroes
// console.log(allHeroes);



// const all_new_heroes = [...marvel_heroes, ...dc_heroes]; // creates a new array by spreading the elements of marvel_heroes and dc_heroes, but does not modify marvel_heroes
// console.log(all_new_heroes);


const another_Array = [1,2,3,4, [5,6,7,8], 9,10]
const real_another_Array = another_Array.flat(Infinity)
console.log(real_another_Array);



console.log(Array.isArray("Sagar"));
console.log(Array.from("Sagar"));
console.log(Array.from({name: "Sagar"}));   // creates an array from the values of the object, but since the object does not have any iterable properties, it returns an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


