function dispaly(val){
    document.getElementById("call").value+=val;
    //console.log(x);
}

function solve(){
    let z = document.getElementById("call").value;
    let y = eval(z);
    document.getElementById("call").value = y;
}
function clr(){
    document.getElementById("call").value= ""

}








