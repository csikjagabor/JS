
let count = 0;

function increment() {
    count++;
    document.getElementById("result1").innerHTML = "Count: " + count;
}


function multiplication() {
    var num1 = count;
    var num2 = 12;
    var result = num1 * num2;
    document.getElementById("result").innerHTML = num1 + " x " + num2 + " = $" + result;
}
