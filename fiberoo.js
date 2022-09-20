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
  newArr = _.map(arr, function (num) { return ${arr[num]} ; });
  return newArr;
}

console.log(numsToString(fib()));

function numEvenNums(arr){
  let count = 0;
  for(let i = 0; arr.length; i++){
    if(arr[i]%2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(numEvenNums(fib()));