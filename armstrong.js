const n= Number(prompt("Please enter a number"));


let a=n;
let sum=0;
while(a>0){
    b=parseInt(a%10);
    sum+=b*b*b;
    a=parseInt(a/10);
}
if(sum===n)
console.log("number is armstrong");
else
console.log("number is not armsstrong");

