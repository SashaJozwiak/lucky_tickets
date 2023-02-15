let num = 3132434213645;

function luckyNumbers(num) {
  let arr = String(num).split("");
  let obj = {};

  arr.forEach((item) => {
    obj[item] ? obj[item]++ : (obj[item] = 1);
  });
  
  return obj;
}

console.log(luckyNumbers(num));
