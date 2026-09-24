const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Batman", "Superman", "Flash"];

// marvel_heros.push( dc_heros);
// console.log(marvel_heros); // array inside array and we don't want that

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]; // Spread Operator mostly used instead of concat
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_another_array = another_array.flat(Infinity);
const real_another_array = another_array.flat(1); // can use 1 or 2 is recommended.
// console.log(real_another_array);


// console.log(Array.isArray("Batman")); // questioning?
// console.log(Array.from("Batman"));

// console.log(Array.from({name: "spiderman"})); // for interview we have to define what we want like - want keys

// Object.keys(obj) // keys
// Object.values(obj) // values
// Object.entries(obj) // key-value pairs
// Array.from() // converts iterables/array-like things into arrays.


let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));