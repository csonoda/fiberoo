function fib(){
  let fibArr = [0, 1];
  for(let i = 0; i < 50; i++){
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
  }
  return fibArr;
}
console.log(fib());

function numsToString(arr){
  let newArr;
  newArr = _.map(arr, function (other, string) { return `${other} + ${string}`; });
  return newArr;
}

console.log(numsToString(fib()));

function numEvenNums(arr){
  let count = 0;
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i]%2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(numEvenNums(fib()));