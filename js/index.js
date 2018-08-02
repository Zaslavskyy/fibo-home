const n = parseFloat(prompt('Enter number in sequence'));
function fib(n) {
  if (n < 2){
    return n;
  }
  else
  return fib(n - 1) + fib (n - 2);
}
alert( fib(n) );