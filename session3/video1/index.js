//init
console.log('after2');
let tenPhim  = ['Nguoi Phan Xu' , 'Nguoi Van Chuyen' , 'Chim Ruoi', ' Hoa phuong', 'Bao thanh thien', ' Cat do' ];
console.log(tenPhim);

// create
console.log('after4');
let newItem= prompt('Nhap ten phim ma ban yeu thich');
tenPhim.push=(newItem);
console.log(tenPhim);

// read
console.log('after 5');
let i=prompt('Nhap vi tri muon doc');
console.log(tenPhim[i]);

//update
 console.log('after6');
 console.log('2');
 let a= prompt('Nhap vi tri ban muon update');
 tenPhim[a]='Ve nha di con';
 console.log(tenPhim[a]);
 console.log(tenPhim);

 console.log('1');
 console.log(tenPhim[0]);
 tenPhim[0]= 'Chi em chung minh';
 console.log(tenPhim);

 // delete
 console.log('after 7');
 console.log('1');
 let k=prompt('Ban muon xoa vi tri thu may');
 tenPhim.splice(k, 1);
 console.log(tenPhim);

 console.log('2');
 let p=prompt('Ban muon xoa vi tri thu may');
 let u=prompt('Ban muon xoa may phan tu');
 tenPhim.splice(p,u);
 console.log(tenPhim);
 
 //Read all
 console.log('after 10');
 console.log('1');
 for(let n = 0; n < tenPhim.length; n++){
     console.log(tenPhim[n]);

 }

 console.log('2');
 for(let e = 0; e <tenPhim.length/2; e++){
     console.log(tenPhim[e]);
 }

console.log('3');
for(let d = 0; d < tenPhim.length; d++){
    console.log(`${d+1}. ${tenPhim[d]}`);
}

// update all
for(j = 0; j < tenPhim.length; j++ ){
    tenPhim[j]= tenPhim[j].toLowerCase();
}


 


     




 



    

 
 







