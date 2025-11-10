console.log('Testing My New-Note');

let newElement = document.createElement('textarea');


function myFunction() {
    let containerElement = document.getElementById('section');
        containerElement.style.display = "flex";
        containerElement.style.flexDirection = "column";
        containerElement.style.justifyContent = "center";


        newElement.style.width = "500px";
        newElement.style.height = "1000px";
        newElement.style.border = "1px solid grey";

        containerElement.appendChild(newElement)

}

function applyStyle() {
    let fontSize = document.getElementById('fontSize').value;
    let fontFamily = document.getElementById('fontFamily').value;
    let fontColor = document.getElementById('fontColor').value;
    let backgroundColor = document.getElementById('backgroundColor').value;
    let pageNumber = document.getElementById('pageNumber').value;
    let createPageBtn = document.getElementById('createPageBtn');

    newElement.style.fontSize = fontSize + "px";
    newElement.style.fontFamily = fontFamily;
    newElement.style.color = fontColor;
    newElement.style.backgroundColor = backgroundColor;
}