// 2.1
let movie = {};
console.log(movie);
movie.title = 'The dark night rises';
movie.year = '2012';
movie.rate = '8.4';
console.log(movie);

movie ['gia ve'] = '80k';
movie [' rap phim'] = 'Cgv';
console.log(movie);

// 2.2
console.log('No se khong hien ra duoc ngoai man hinh');

// 2.3
let movie={
    title: 'The dark night riess',
    year : '2012',
    rate: '8.4',
};
console.log(movie);
const a = movie.year;
for( i = 0; i < a.length; i++){
    let x = prompt('what you want to know');
    if(x == null || x == undefined){
        alert('x does not exits in our data');

    }
    else{
        alert(' Attack on titans');
    }
    
}
 





