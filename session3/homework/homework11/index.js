const a =prompt('Nhap cac so theo de bai');
const b= a.split(',');
let c =[];
for (let Number of b){
   if (Number % 2 == 1)
   c.push(Number);
}
alert(`${b} => ${c}`);