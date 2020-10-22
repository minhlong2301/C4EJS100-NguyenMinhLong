let s = (prompt('Nhap cac so ma ban muon nhap duoc phan tach nhau bang (,)'));
let a = s.split(',').map(a=> +a)
let p = 0;
for (let i = 0; i < a.length; i++){
    p=p+a[i];
}
alert(p);

