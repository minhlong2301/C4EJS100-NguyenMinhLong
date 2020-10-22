let a =prompt(' Nhap cac so ma ban muon nhap va chung duoc ngan cach nhau bang (,)');
let p= a.split(',');
let min=0;
for (let item of p){
    if (min > Number(item)){
        min = Number(item);

    }
   
}
alert(`So nho nhat la ${min}`);


