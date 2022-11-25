num=Number(prompt("enter the number"));
let x= matchHouses(num);
console.log("number of matchsticks is :"+x);
function matchHouses(num){
    no_Of_matchSticks=num*5+1;
    return no_Of_matchSticks;
}