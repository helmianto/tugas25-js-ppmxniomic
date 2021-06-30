const numbers = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log(`Sebelumnya : ${numbers}`);
const ascending = numbers.sort();
console.log(`Ascending : ${ascending}`);
const descending = numbers.reverse();
console.log(`Descending : ${descending}`);
const filterNumbers = numbers.filter(number => number > 10);
console.log(`Filter > 10 : ${filterNumbers}`);