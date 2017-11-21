var cellNumber = 25;
var currentNumber;
var currentNumberElement = document.getElementById("current-number");
var mainBoard = document.getElementById("main-board");
var listNumber = [];

function start() {
    var startButton = document.getElementById("start-button");
    startButton.style.visibility = "hidden";

    currentNumber = 0;
    currentNumberElement.innerText = currentNumber;

    for(var i = 0; i < cellNumber; i++) {
        listNumber.push(i + 1);
    }
    
    for(var i = 0; i < 5; i++) {
        var row = document.createElement("tr");
        for(var j = 0; j < 5; j++) {
            var column = document.createElement("td");
            var randomNumber = Math.floor(Math.random() * listNumber.length);
            column.innerText = listNumber[randomNumber];
            column.onclick = checkNumber;
            listNumber.splice(randomNumber, 1);
            row.appendChild(column);
        }
        mainBoard.appendChild(row);
    }
}

function checkNumber(event) {
    var num = event.target.innerText;
    if(num == (currentNumber + 1)) {
        currentNumber++;
        currentNumberElement.innerText = currentNumber;
        event.target.style.visibility = "hidden";
        if(num == cellNumber) {
            alert("クリア！！");
        }
    }
}

function finish() {

}
