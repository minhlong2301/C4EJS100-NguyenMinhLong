// 3.1
let movie = {
    title: 'The dark night riese',
    year: 2012,
    rate: 8.4,
};
console.log(movie);
movie.rate= 8.7;
console.log(movie);

movie.rate= movie.rate +0,5;
console.log(movie);

//3.2
let c= prompt("What you want to update?");
if (c == null || c == undefined || c == ''|| c!='rate' && c!='year' && c!='title'){
    alert(`${c} does not exits in our data, we will add new`);
    let d = prompt("Enter the new data");
    movie.c=d;
}else if(c == 'title'){
    let b = prompt("What is the update?");
    movie.title=b;
}else if(c== 'year'){
    let b = prompt("What is the update?");
    movie.year=b;
}else if (c=='rate'){
    let b = prompt("What is the update?");
    movie.rate=b;
}
console.log(movie);












