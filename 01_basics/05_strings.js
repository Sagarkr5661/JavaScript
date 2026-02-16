const name = "Sagar"
const repoCount = 10

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // This will not work as expected


const gameName = new String("8 ball pool")
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt('p'));      // This will not work as expected, charAt expects an index, not a character
console.log(gameName.indexOf('p'));     // This will return the index of the first occurrence of 'p'

console.log(gameName.charAt(4));        // This will return the character at index 4, which is 'l'  

const newString = gameName.substring(0, 4); // This will return the substring from index 0 to index 4 (not inclusive), which is '8 ba'
console.log(newString);


const anotherString = gameName.slice(-8, 4); // This will return the substring from index -8 to index 4 (not inclusive), which is '8 ba'
console.log(anotherString);


const newString1 = "  Sagar  "
console.log(newString1);
console.log(newString1.trim());


const url = "https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCDQ"
console.log(url.replace('channel','page'));

console.log(url.includes('channel'));
console.log(url.includes('page'));


console.log(gameName.split('-'));
