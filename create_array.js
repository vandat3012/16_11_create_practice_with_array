let x = 0;
let array = [];
function addValue() {
    array[x] = document.getElementById("value1").value;
    alert(`element ${x} ${array[x]} has been added `);
    x++;
    document.getElementById("value1").value= "";
}
function displayValue() {
    let element = "<hr/>"
    for (let i=0 ; i < array.length ; i++) {
        element += "Element" + i + "=" + array[i] + "<br>";
    }
    document.getElementById("result").innerHTML=  element;
}
