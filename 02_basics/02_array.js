const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Batman", "Superman", "Flash"];

// marvel_heros.push( dc_heros);
// console.log(marvel_heros); // array inside array and we don't want that.

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// Spread Operator is the second method and mostly used method instead of concat.
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_another_array = another_array.flat(Infinity);
// const real_another_array = another_array.flat(1); // can use 1 or 2 is recommended.
// console.log(real_another_array);


// console.log(Array.isArray("Admin"));
// console.log(Array.from("Admin"));
// console.log(Array.from({name: "admin"})); // intresting case.


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
