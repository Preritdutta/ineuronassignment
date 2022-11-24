function farenCon(a){
    return (9/5*a)+32;
}

function celCon(b){
    return (b-32)*(5/9);
}
let c=farenCon(30);
let d=celCon(-40);
console.log(c,d);