console.log('Bai tap them');
let n = prompt('Enter the number of elements');
let nums = [];
for (let i = 0; i < n; i++) {
    nums.push(prompt(`Enter ${i}th element`));
}
// a
nums.sort((a,b) => a-b);
alert(nums);

