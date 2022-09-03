const numbers = prompt("Enter numbers with spaces in between");

const numbers_int = numbers.trim().split(/\s+/)


var even  = []
var odd = []

for (let i=0 ; i < numbers_int.length; i++){
  // ternary operator
  const result = (numbers_int[i] % 2  == 0) ? even.push(numbers_int[i]) : odd.push(numbers_int[i]);
}

if (even.length==1){
  console.log(even[0])
}else{
  console.log(odd[0])
}


