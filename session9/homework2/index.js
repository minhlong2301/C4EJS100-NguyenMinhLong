// async function load(){
//     const conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR25vCIxjgoxbNpMT-No5truuK68l4qU5GDpZgnjMJJ1-oCSYLHkkIznMik');
//     const data = await conn.json();
//     return data;
// }
// let x = load();
// console.log(x);

const fetchProm = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR25vCIxjgoxbNpMT-No5truuK68l4qU5GDpZgnjMJJ1-oCSYLHkkIznMik');
fetchProm.then(connect=>{
    console.log('connected');
    console.log(connect);
    const data = connect.json();
    console.log(data);
})