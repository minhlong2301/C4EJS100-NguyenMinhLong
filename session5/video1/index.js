 console.log(1.1);
 console.log(Math.random());

 console.log(1.2);
 let a =['2', '5', '6', '9', '10'];
 function randomNumber(){
   return Math.floor(Math.random())
 }
 for( let i = 0; i < a.length; i ++){
   consolog(`${a[i]} `);
 }


console.log(1.3);
let cauhoi1={
  cauhoi: 'Con ga co bao nhieu chan?',
  dapan: ['1', '2', '3','4'],
  dapandung: '3',
  conlai: false,
};

let cauhoi2={
  cauhoi: 'Con nhen co bao nhieu chan?',
  dapan: ['100', '200', '300', '8'],
  dapandung: '8',
  conlai: false,
};


let cauhoi3 ={
  cauhoi: 'Diem cao nhat la bao nhieu?',
  dapan: ['10','40','20','30'],
  dapandung: '10',
  conlai: false,
};

let a=['cauhoi1','cauhoi2','cauhoi3'];
console.log(a);

console.log(1.4);
let randomA = a[Math.floor(Math.random()*a.length)];
let answer = prompt(randomA.cauhoi + '\n' + randomA.dapan);

console.log(1.5);
if(randomA.dapandung == answer) alert('True');
else alert('False');


console.log(1.6-1.7);
let count = 0;
for(let cauhois in a)
{
    let randomA = a[Math.floor(Math.random()*a.length)];
    let answer = prompt(randomA.cauhoi + '\n' + randomA.dapan);
    if(randomA.dapandung == answer)
    { 
        alert('True');
        count++;
    }
    else
    {
        alert('False');
    } 
}
alert('We are out of question');
alert(`You answered correctly ${count} of ${a.length} questions`);






