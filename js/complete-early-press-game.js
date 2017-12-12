var startTime;
var nowTime;
var nextNumber;
var nextNumberElement = document.getElementById("current-number");
var mainBoard = document.getElementById("main-board");
var startButton = document.getElementById("start-button");
var listNumber = [];

function start() {
    startButton.style.visibility = "hidden";
    startTime = new Date().getTime();

    nextNumber = 1;
    nextNumberElement.innerText = nextNumber;

    for(var i = 0; i < 25; i++) {
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
    if(num == nextNumber) {
        nextNumber++;
        nextNumberElement.innerText = nextNumber;
        event.target.style.visibility = "hidden";
        if(num == 25) {
            finish();
        }
    }
}

function finish() {
    nowTime = new Date().getTime();
    var playTime = (nowTime - startTime) / 1000
    alert(playTime + "秒でクリア！！");
    startButton.style.visibility = "visible";
    for(var i = 0; i < 5; i++) {
        mainBoard.deleteRow(0);
    }
}
