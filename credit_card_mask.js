
function maskify(str) {
  console.log('#'.repeat(str.length-4).concat(str.substring(str.length-4,str.length)))
}

const str = prompt("Enter the String:");

if (str.length<=4){
  console.log(str)
}else{
  maskify(str)
}
