let num;
let dem=0;
let A = document.getElementById("myNumber");
A.addEventListener('keyup',()=>{
    return A.value;
})
let btn=document.getElementById("btn");
btn.addEventListener('click',()=>{
    num=Math.floor(Math.random() * 11 ); 
    dem++;
    if(A.value == num){
        alert("Chọn đúng. Phần thưởng là ...");
    }
    else alert(`Wrong. Kết quả đúng là ${num}`);
    if(dem == 3){
        alert(`Game over`);
    }
}) 