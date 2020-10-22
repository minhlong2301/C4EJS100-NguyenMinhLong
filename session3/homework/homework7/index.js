const a= [ 3, 4 , 6 , -9 , 10 , -88 , 2];
let s= Number(prompt('Nhap so '));
if (a.indexOf(s)==-1){
    alert(' NOT FOUND');
}
else{
    alert(`FOUND AT ${a.indexOf(s)}`);
}