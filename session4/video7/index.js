let movie = {
    title: 'Attack on titans',
    year:2013,
    rate:8.8,
    characters : ['Eren','Armin','Mikasa']
};
console.log(movie.title);
console.log(movie.year);
console.log(movie.rate);
console.log(...movie.characters);
let a = 'Levi';
movie.characters.push(a);
console.log(...movie.characters); 