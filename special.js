const n=Number(prompt("enter a number"));
let a=n;
let sum=0;
 let fac;
while(a>0){
    let last_Digit=parseInt(a%10);
   fac=factorial(last_Digit);
    
    sum=sum+fac;
    a=parseInt(a/10);
}
if(sum==n)
console.log("number is special");
else 
console.log("number is  not special");
function factorial(x){
    let fact=1;
    for(let i=1;i<=x;i++){
        fact=fact*i;
    }
    return fact;

}