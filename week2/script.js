
function display(){
    var input_value = document.getElementById("input").value
    sumAll(input_value);
   // document.getElementById("display").innerHTML = sum;
}

function sumAll(input_value) {
    let res = 0;
    for(i=1; i<=5; i++) {
        res +=1;
        console.log(res);
    }
    return res;
}