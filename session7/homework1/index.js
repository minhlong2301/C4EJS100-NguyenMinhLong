const container = document.getElementById('list');
for(let i=0;i<3;i++){
    container.insertAdjacentHTML(`beforeBegin`,`<li>${i}</li>`)
}

console.log('BeforeBegin - D \n AfterBegin- C \n BeforeEnd - A \n AfterEnd - B') 