async function load(){
    const conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR1YlmCqlUMTvAXjOQFi2iE4LhMNkAV57PPJo5cdci_MzXjR-QYBXsDEJNQ');
    const data = await conn.json();
    show(data);
}
load();

function show(data){
    let quote = data.contents.quotes[0].quote;
    let arthor = data.contents.quotes[0].arthor;
    console.log(quote);
    console.log(arthor);
    const main = document.getElementById('main');
    main.insertAdjacentHTML('befroreend',`
    <p><b>${quote}</b></p>
    <p>${arthor}</p>
    `);

}