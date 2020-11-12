//1.1
let myPromise = new Promise(function(resolve, reject){
    // resolve(setTimeout(() => { console.log("Loi hua tot nhat la ")}, 2000));
    reject(setTimeout(() => { console.log('Loi hua tot nhat la')},2000));

});
console.log(myPromise);

//1.2
async function f(){
    let promise = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('Loi hua tot nhat'),1000)
    });
    let result = await promise;
    alert(result);
}
f();

//1.3
let myPromise1 = new Promise(function(resolve, reject){
    setTimeout(() => reject(new Error("Loi hua tot nhat la")),1000);
});

myPromise1.then(
    result => console.log(result),
    error => console.log(error)

);
