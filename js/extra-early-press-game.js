var cellNumber = 25;
var startTime;
var nowTime;
var currentNumber;
var currentNumberElement = document.getElementById("current-number");
var mainBoard = document.getElementById("main-board");
var listNumber = [];

function start() {
    var startButton = document.getElementById("start-button");
    startButton.style.visibility = "hidden";
    startTime = new Date().getTime();

    var length = mainBoard.rows.length;
    for(var i = 0; i < length; i++) {
        mainBoard.deleteRow(0);
    }
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
            column.id = listNumber[randomNumber];
            var num = listNumber[randomNumber];
            listNumber.splice(randomNumber, 1);
            column.onclick = checkNumber(num);
            row.appendChild(column);
        }
        mainBoard.appendChild(row);
    }
}

function checkNumber(num) {
    return function() {
        if(num == (currentNumber + 1)) {
            currentNumber++;
            currentNumberElement.innerText = currentNumber;
            var element = document.getElementById(num);
            element.style.visibility = "hidden";
            if(num == cellNumber) {
                finish();
            }
        }
    }
}

function finish() {
    nowTime = new Date().getTime();
    var playTime = (nowTime - startTime).toString();
    playTime = playTime.substring(0, playTime.length - 3);
    alert(playTime + "秒でクリア！！");
    document.getElementById("start-button").style.visibility = "visible";
}
