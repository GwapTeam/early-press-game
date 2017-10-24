var cellNumber = 25; 	//数字セル個数
var startTime;			//ゲーム開始の時刻
var nowTime;			//現在の時刻
var currentNumber;		//現在表示されている数字
var currentNumberElement = document.getElementById("current-number");
var mainBoard = document.getElementById("main-board");	

//ゲームスタート
function start(){
	//スタートボタンを非表示
	var startButton = document.getElementById("start-button")
	startButton.style.visibility="hidden";
	
	//スタート時刻を格納
	startTime = new Date().getTime();
	
	//状態をリセット
	var length = mainBoard.rows.length;
	for(var i=0; i<length; i++){
		mainBoard.deleteRow(0);
	}
	currentNumber = 0;
	currentNumberElement.innerText = currentNumber;
	
	//配列に1～cellNumberの数を格納する
	var listNumber = new Array();
	for(var i=0; i<cellNumber; i++){ 
		listNumber.push(i+1); 
	}
	
	//ランダムな値が入ったテーブルを作成する(5*5)
	for(var i=0; i<5; i++){
		var row = document.createElement("tr");
		for(var j=0; j<5; j++){
			var column = document.createElement("td");
			var randomNumber = Math.floor(Math.random() * listNumber.length);
			column.innerText = listNumber[randomNumber];
			column.id = listNumber[randomNumber];
			var num = listNumber[randomNumber];
			listNumber.splice(randomNumber,1);
			column.onclick = checkNumber(num);
			row.appendChild(column);
		}
		mainBoard.appendChild(row);
	}
}

//押された数字チェック
function checkNumber(num){
	return function(){
		if(num == (currentNumber + 1)){
		currentNumber++;
		currentNumberElement.innerText = currentNumber;
		var element = document.getElementById(num)
		element.style.visibility = "hidden";
			if(num == cellNumber){
				finish();
			}
		}
	}
}

//ゲーム終了
function finish(){
	nowTime = new Date().getTime();
	var playTime = (nowTime - startTime).toString();
	playTime = playTime.substring(0,playTime.length-3)
	alert(playTime + "秒でクリア");
	document.getElementById("start-button").style.visibility="visible";
}