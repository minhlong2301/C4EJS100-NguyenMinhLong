const input = prompt('Nhap cac ten ma ban muon');
const names = input.split(',');
let newNames1 = [];
for (let name of names) {
    newNames1.push('<' + name + '>');
}
alert(`${names} => ${newNames1}`);

 