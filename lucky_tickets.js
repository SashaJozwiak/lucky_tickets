//understandable

let result = 0;

for (i = 0; i <= 999999; i++) {
    let arr = String(i).padStart(6, '0').split('');

    let sum1 = Number(arr[0]) + Number(arr[1]) + Number(arr[2])
    let sum2 = Number(arr[3]) + Number(arr[4]) + Number(arr[5])

    if (sum1 === sum2) result++;
}

console.log(result) // 55 252

//shortly

let result = 0;
for (i = 0; i <= 999999; i++) {
    let arr = ("" + i).padStart(6, '0').split('');
    (+(arr[0]) + +(arr[1]) + +(arr[2])) === +(arr[3]) + +(arr[4]) + +(arr[5]) ? result++ : false;
} 
console.log(result) // 55 252 
