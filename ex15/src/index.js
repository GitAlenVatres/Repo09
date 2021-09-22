// Only change code below this line
function myDoWhile(){
    var i=5;
    var myNumbers="";
    
    do{
        if(i==9){
            myNumbers+=i;
        }
        else{
            myNumbers+=i + ', ';
        }
        i++;
    }
    while(i<10);
    return myNumbers;
}
// Only change code above this line

console.log(myDoWhile());
module.exports=myDoWhile;