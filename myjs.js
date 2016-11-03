document.getElementById("myButton").onclick = changeColor;
var currentColor = "darkgoldenrod";

function changeColor(){

    if (currentColor == "darkgoldenrod"){
        document.body.style.color = "green";
        currentColor = "green";
    } else {
        document.body.style.color = "darkgoldenrod";
        currentColor = "darkgoldenrod";
    }
    return currentColor;
}
