var cellNumber = 25;
var startTime;
var nowTime;
var currentNumber;
var currentNumberElement = document.getElementById("current-number");
var mainBoard = document.getElementById("main-board");


function start() {
	var startButton = document.getElementById("start-button");
	startButton.style.visibility = "hidden";
	
	currentNumber = 0;
	currentNumberElement.innerText = currentNumber;
	
	var listNumber = new Array();
	for(var i = 0; i < cellNumber; i++){ 
		listNumber.push(i + 1); 
	}
	for(var i = 0; i < 5; i++){
		var row = document.createElement("tr");
		for(var j = 0; j < 5; j++){
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
		if(num == (currentNumber + 1)){
			currentNumber++;
			currentNumberElement.innerText = currentNumber;
			var element = document.getElementById(num);
			element.style.visibility = "hidden";
			if(num == cellNumber){
				finish();
			}
		}
	}
}

function finish() {
	alert("クリア！！");
}