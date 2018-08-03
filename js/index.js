const n = parseFloat(prompt('Enter number in sequence'));
function fib(n) {
  if (n < 2){
    return n;
  }
  else
  return fib(n - 1) + fib (n - 2);
}
alert( fib(n) );




//work
//const num = parseFloat(prompt('Enter number in sequence'));
//function fib(num){
//  let arr = [0, 1];
//  for (let i = 2; i < num + 1; i++){
//    arr.push(arr[i - 2] + arr[i -1])
//  }
// return arr[num]
//}
//alert( fib(num) )



//not work
//const num = parseFloat(prompt('Enter number in sequence'));
//function fib(num) {
//  const pre = 1,
//    prePre = 1;
//  for (i = 3; i <= num; i++) {
//    const next = pre + prePre;
//    pre = prePre;
//    prePre = next;
//  }
//  return prePre;
//}
//
//alert( fib(num) )

