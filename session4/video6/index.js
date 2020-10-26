let movie1={
    title:'Fast 8',
    year:2019,
    rate:9,
    cast : ['Eren','Armin','Mikasa'],
};
let movie2 = {
    title:'Ve nha di con',
    year:2020,
    rate:9.5,
    cast:['Thanh Hai'],
};
let movie3 = {
    title:'Nguoi Phan Xu',
    year:2019,
    rate:9,
    cast : ['Thanh Hai'],
};
let movie = [movie1,movie2,movie3];
console.log(movie);
console.log(movie[0]);
console.log(movie[2].title);
for(let i = 0; i<movie.length;i++){
    console.log(movie[i]);
}
for(let i=0;i<movie.length;i++){
    console.log(movie[i].title);
    console.log(`Year: ${movie[i].year}`);
    console.log(`Rate: ${movie[i].rate}`);
    console.log(`Cast :${movie[i].cast}`);
    console.log('----------------------------------');
} 