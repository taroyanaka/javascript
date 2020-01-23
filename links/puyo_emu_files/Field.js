//include("Array2D.js");
include("Encode.js");





//方向定数
var UP = 1;
var DOWN = 2;
var LEFT = 4;
var RIGHT = 8;




//フィールドクラス*********************************************************************************
function Field(mode, scorePanel, yokokuPanel){
	var size;

	//行数
	var row = 13;
	this.row = row;
	//列数
	var col = 6;
	this.col = col;
	//繋がると消える数
	var eraseNum = 4;

	//連鎖数
	var chain = 0;
	//点数
	var score = 0;


	//フィールド
	var map = Array2D(row, col, BLANK);
	//フィールド（保存用）
	var mapBuffer;
	//消えるぷよの場所
	var mapErase = Array2D(row, col, false);
	var mapEraseBuffer;

	var start = false;
	//自動実行用のアレ
	var timerID;

	//自動実行中trueにする
	var running = false;



	//画像の行数
	var imageRow = 18;
	//画像の列数
	var imageCol = 6;
	//ぷよの画像
	var image = new Image();


	//背景画像
	var background = new Image();

	//カーソル
	var cursor;


	//連鎖ボーナス
	var chainBonus = new Array(0, 0, 8, 16, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 480, 512);
	//多色ボーナス
	var colorBonus = new Array(0, 0, 3, 6, 12, 24);
	//連結ボーナス
	var combineBonus = new Array(0, 0, 0, 0, 0, 2, 3, 4, 5, 6, 7, 10);





	var ID;

	IDcounter = 0;


	this.write = write;
	function write(){
		ID = IDcounter++;
		var imageSrc = "image/puyo.gif";

		if(mode == "view"){
			size = 16;
			imageSrc = "image/puyo16.gif";
		}
		else{
			size = 32;
		}

		image.src = imageSrc;
		image.style.position = "absolute";
		image.style.width = size * imageCol + "px";
		image.style.height = size * imageRow + "px";
		background.src = "image/bg" + Math.floor(Math.random() * 13) + ".png";


		document.write('<div id="puyofield" style="position: relative; overflow: hidden; ' +
				'width: ' + size * (col + 2) + 'px; ' +
				'height: ' + size * (row + 1) + 'px; ' +
				'">');


		//背景から描く
		document.write('<img src=' + background.src + ' ' +
				'style="width: ' + (col + 2) * size + 'px; ' +
				'height: ' + (row + 1) * size + 'px; ' +
				'position: absolute; ' +
				'">');


		document.write('<div style="position: relative; left:' + size + 'px;">');

		//フィールドを書く
		var text = "";
		for(var y = 0; y < row; y++){
			for(var x = 0; x < col; x++){

				text += '<img src=' + image.src + ' ' +
						'id="field' + ID + '(' + y + ',' + x + ')" ' +
						'style="position: ' + image.style.position + '; ' +
						'width: ' + image.style.width + '; ' +
						'height: ' + image.style.height + ';">';

			}
		}
		document.write(text);



		if(mode == "edit"){
			for(var y = 0; y < row; y++){
				for(var x = 0; x < col; x++){
					addEvent(y, x);
				}
			}
			drawCursor();
		}

		document.write('</div>');


		document.write('</div>');




		update();
	}



	function addEvent(y, x){
		var obj = document.getElementById("field" + ID + "(" + y + "," + x + ")");

		obj.onmousedown = function(){
			var select = document.getElementById("select").type;
			setPuyo(y, x, select);
		};


		obj.onmouseover = function(event){
			cursor.x = x;
			cursor.y = y;
			cursor.style.left = x * size + "px";
			cursor.style.top = y * size + "px";
			cursor.style.display = "inline";
		};



	}



	function drawCursor(){
		document.write('<div id="cursor' + ID + '" ' +
				'style="position: absolute; ' +
				'width: ' + size + 'px; ' +
				'height: ' + size + 'px; ' +
				'display: none; ' +
				'overflow: hidden;' +
				'">' +

				'<img src="' + image.src + '" ' +
				'style="position: absolute; ' +
				'width: ' + image.style.width + '; ' +
				'height: ' + image.style.height + '; ' +
				'left:' + -size * OZYAMA + 'px; ' +
				'top:' + -size * (CURSOR - OZYAMA) + 'px;' +
				'">' +
				'</div>');

		cursor = document.getElementById("cursor" + ID);
		cursor.onmousedown = function(){
			var select = document.getElementById("select").type;
			setPuyo(cursor.y, cursor.x, select);
		};

		cursor.onmouseout = function(){
			cursor.style.display = "none";
		};

	}



	this.update = update;
	function update(){

		for(y = 0; y < row; y++){
			for(x = 0; x < col; x++){
				setFieldImage(y, x);
			}
		}

		if(yokokuPanel != undefined){
			yokokuPanel.update(score);
		}
		if(scorePanel != undefined){
			scorePanel.update(chain, score);
		}

	}


	//ぷよが消えたときに実行されるイベント
	function onErase(){

	}



	//フィールドの画像の種類を変える
	function setFieldImage(y, x){
		var sx = x * size;
		var sy = y * size;
		var type = map.get(y, x);


		var dx = 0;
		var dy = 0;
		if(RED <= type && type <= PURPLE){
			var combine = 0;
			//画面外の連結無し
			if(y >= 1){
				if(y >= 2){
					if(type == map.get(y - 1, x)) combine += UP;
				}
				if(type == map.get(y + 1, x)) combine += DOWN;
				if(type == map.get(y, x - 1)) combine += LEFT;
				if(type == map.get(y, x + 1)) combine += RIGHT;
			}
			dx = type * size;
			dy = combine * size;
			if(y == 0){
				dy = size * 16;
			}
			if(mapErase[y][x] == true){
				dy = size * 17;
			}
		}else{
			dx = OZYAMA * size;
			dy = (type - OZYAMA) * size;

			if(y == 0 && type != BLANK){
				dy += size * 10;
			}
			if(mapErase[y][x] == true){
				dy += size * 15;
			}
		}

		var img = document.getElementById("field" + ID + "(" + y + "," + x + ")");
		img.style.left = (sx - dx) + "px";
		img.style.top = (sy - dy) + "px";
		img.style.clip = "rect("+ dy + "px, " + (dx + size) + "px, " + (dy + size) + "px, " + dx + "px)";
		img.style.width = image.style.width;
		img.style.height = image.style.height;

	}




	//URLからフィールドを構築する
	this.load = load;
	function load(URL){
		FIELD = URL;
		if(FIELD == undefined){
			var FIELD = document.URL;
		}
		FIELD = FIELD.split("?")[1];


		//コードが無い場合
		if(FIELD == undefined || FIELD == ""){
			return;
		}

		//イノセン堂
		if(FIELD.match("^[0-8]")){
			if(FIELD.match("[^0-8]")){
				alert("コードに不正な文字が含まれています。");
				return;
			}
			var convert = new Array(BLANK, OZYAMA, BLOCK, BLACK, RED, BLUE, YELLOW, GREEN, PURPLE);

			var i = 0;
			var j = 0;
			for(y = 0; y < row; y++){
				for(x = 0; x < col; x++){
					if(i < col * row - FIELD.length){
						map[y][x] = BLANK;
					}else{
						map[y][x] = convert[FIELD.charAt(j)];
						j++;
					}
					i++;
				}
			}



		}
		else{
			map = decode(FIELD);
		}

		chain = 0;
		score = 0;
		update();
	}



	//現在の配置を記憶します。
	this.save = save;
	function save(){
		mapBuffer = copyArray2D(map);
		mapEraseBuffer = copyArray2D(mapErase);
	}






	//自動実行
	this.auto = auto;
	function auto(loop){
		running = true;

		//待機時間(ms)
		var sleep = 500;
		if(mode == "edit"){
			sleep = (10 - parseInt(document.getElementById("speed").value)) * 100;
		}

		if(step()){
			if((isChange() == true) || chain != 0){
				timerID = setTimeout(function(){auto();}, sleep);
				return true;
			}
		}
		if(loop == true){
			setTimeout(function(){back();}, sleep);
			setTimeout(function(){auto();}, sleep * 2);
		}
		stop();
		return false;
	}


	this.stop = stop;
	function stop(){
		clearTimeout(timerID);

		/*
		if(mode == "edit"){
			document.getElementById("auto").value = "auto";
		}
		if(mode == "view"){
			document.getElementById("[>").value = "[>";
		}
		*/

		var auto1 = document.getElementById("auto");
		var auto2 = document.getElementById("[>");
		if(auto1 != undefined){
			auto1.value = "auto";
		}
		if(auto2 != undefined){
			auto2.value = "[>";
		}

		running = false;
	}


	//1ステップ毎に実行。変化があるとtrueを返す。
	this.step = step;
	function step(){

		if(!start){
			save();
			start = true;
			chain = 0;
			score = 0;
		}

		if(dropPuyo() == true){
			update();
			return true;
		}

		//同じ場所を二重に調べないためのフラグ
		var check = Array2D(row, col, false);


		//繋がっているぷよを記憶する
		var listX = new Array();
		var listY = new Array();
		//どの色が消えたか記憶する
		var eraseColors = new Array();
		//消えたぷよの数
		var erasePuyos = 0;
		//ボーナス
		var bonus = 0;
		//ぷよが消えたらtrue
		var change = false;

		for(var y = 1; y < row; y++){
			for(var x = 0; x < col; x++){
				var color = map.get(y, x);

				if((check[y][x] == false) && (RED <= color) && (color <= PURPLE)){
					check[y][x] = true;

					listX[1] = x;
					listY[1] = y;

					var length = 1;
					var count = 1;
					while(count <= length){
						var dx = listX[count];
						var dy = listY[count];

						if((dy > 1) && (check.get(dy - 1, dx) == false) && (map.get(dy - 1, dx) == color)){
							length++;
							listX[length] = dx;
							listY[length] = dy - 1;
							check[dy - 1][dx] = true;
						}
						if((check.get(dy + 1, dx) == false) && (map.get(dy + 1, dx) == color)){
							length++;
							listX[length] = dx;
							listY[length] = dy + 1;
							check[dy + 1][dx] = true;
						}
						if((check.get(dy, dx - 1) == false) && (map.get(dy, dx - 1) == color)){
							length++;
							listX[length] = dx - 1;
							listY[length] = dy;
							check[dy][dx - 1] = true;
						}
						if((check.get(dy, dx + 1) == false) && (map.get(dy, dx + 1) == color)){
							length++;
							listX[length] = dx + 1;
							listY[length] = dy;
							check[dy][dx + 1] = true;
						}

						count++;
					}


					if(length >= eraseNum){
						var tokuten = 50;
						if(document.getElementById("tokuten") != undefined){
							tokuten = parseInt(document.getElementById("tokuten").value);
						}
						for(var i = 1; i <= length; i++){
							var sx = listX[i];
							var sy = listY[i];
							//map[sy][sx] = ERASE;
							mapErase[sy][sx] = true;
							erasePuyos++;

							//お邪魔ぷよを消す
							if(sy != 1 && map.get(sy - 1, sx) == OZYAMA) mapErase[sy - 1][sx] = true;
							if(map.get(sy + 1, sx) == OZYAMA) mapErase[sy + 1][sx] = true;
							if(map.get(sy, sx - 1) == OZYAMA) mapErase[sy][sx - 1] = true;
							if(map.get(sy, sx + 1) == OZYAMA) mapErase[sy][sx + 1] = true;
							//得点ぷよ
							if(sy != 1 && map.get(sy - 1, sx) == TOKUTEN){
								//map[sy - 1][sx] = ERASE;
								mapErase[sy - 1][sx] = true;
								score += tokuten;
							}if(map.get(sy + 1, sx) == TOKUTEN){
								//map[sy + 1][sx] = ERASE;
								mapErase[sy + 1][sx] = true;
								score += tokuten;
							}if(map.get(sy, sx - 1) == TOKUTEN){
								//map[sy][sx - 1] = ERASE;
								mapErase[sy][sx - 1] = true;
								score += tokuten;
							}if(map.get(sy, sx + 1) == TOKUTEN){
								//map[sy][sx + 1] = ERASE;
								mapErase[sy][sx + 1] = true;
								score += tokuten;
							}
							//かたぷよ
							if(sy != 1 && map.get(sy - 1, sx) == KATAPUYO) map[sy - 1][sx] = OZYAMA;
							if(map.get(sy + 1, sx) == KATAPUYO) map[sy + 1][sx] = OZYAMA;
							if(map.get(sy, sx - 1) == KATAPUYO) map[sy][sx - 1] = OZYAMA;
							if(map.get(sy, sx + 1) == KATAPUYO) map[sy][sx + 1] = OZYAMA;

						}
						change = true;
						//どの色が消えたか記憶する
						eraseColors[color] = true;
						//連結ボーナス
						if(length >= combineBonus.length){
							length = combineBonus.length - 1;
						}
						bonus += combineBonus[length];

					}


				}


			}
		}


		if(change){
			chain++;

			var colors = 0;
			for(var i = 0; i <= eraseColors.length; i++){
				if(!isNaN(eraseColors[i])){
					colors++;
				}
			}
			bonus += colorBonus[colors];
			bonus += chainBonus[chain];


			if(bonus == 0){
				bonus = 1;
			}
			score += 10 * erasePuyos * bonus;
		}

		update();

		if(change == true){
			onErase();
		}

		return change;
	}



	//浮いているぷよを落下させる。変化があった場合trueを返す。
	this.dropPuyo = dropPuyo;
	function dropPuyo(){
		for(x = 0; x < col; x++){
			for(y = 0; y < row; y++){
				//if(map[y][x] == ERASE){
				//	map[y][x] = BLANK;
				//}
				if(mapErase[y][x] == true){
					map[y][x] = BLANK;
					mapErase[y][x] = false;
				}
			}
		}

		change = false;
		for(i = 0; i < row - 1; i++){
			for(y = row - 2; y >= 0; y--){
				for(x = 0; x < col; x++){
					if((map[y][x] != BLOCK) && (map[y][x] != BLANK) && (map[y + 1][x] == BLANK)){
						map[y + 1][x] = map[y][x];
						map[y][x] = BLANK;
						change = true;
					}
				}
			}


		}

		return change;
	}


	//stepを実行すると、変化の起きる場合はtrueを返す。
	this.isChange = isChange;
	function isChange(){

		//消えたやつがあるかどうか
		for(var y = 1; y < row; y++){
			for(var x = 0; x < col; x++){
				if(map.get(y, x) == ERASE) return true;
			}
		}

		//浮いてるぷよがあるかどうか
		for(var y = 1; y < row; y++){
			for(var x = 0; x < col; x++){
				if((map.get(y, x) == BLANK) && (map.get(y- 1, x) != BLANK) && (map.get(y- 1, x) != BLOCK)) return true;
			}
		}


		//４つ以上繋がっているぷよがあるかどうか

		//同じ場所を二重に調べないためのフラグ
		var check = Array2D(row, col, false);

		//繋がっているぷよを記憶する
		var listX = new Array();
		var listY = new Array();

		var color;

		for(var y = 1; y < row; y++){
			for(var x = 0; x < col; x++){
				color = map.get(y, x);

				if((check[y][x] == false) && (RED <= color) && (color <= PURPLE)){
					check[y][x] = true;

					listX[1] = x;
					listY[1] = y;

					var length = 1;
					var count = 1;
					while(count <= length){
						var dx = listX[count];
						var dy = listY[count];

						if((dy > 1) && (check.get(dy - 1, dx) == false) && (map.get(dy - 1, dx) == color)){
							length++;
							listX[length] = dx;
							listY[length] = dy - 1;
							check[dy - 1][dx] = true;
						}
						if((check.get(dy + 1, dx) == false) && (map.get(dy + 1, dx) == color)){
							length++;
							listX[length] = dx;
							listY[length] = dy + 1;
							check[dy + 1][dx] = true;
						}
						if((check.get(dy, dx - 1) == false) && (map.get(dy, dx - 1) == color)){
							length++;
							listX[length] = dx - 1;
							listY[length] = dy;
							check[dy][dx - 1] = true;
						}
						if((check.get(dy, dx + 1) == false) && (map.get(dy, dx + 1) == color)){
							length++;
							listX[length] = dx + 1;
							listY[length] = dy;
							check[dy][dx + 1] = true;
						}


						count++;
					}

					if(length >= eraseNum){
						return true;
					}

				}


			}
		}

		return false;
	}


	//発火前の状態に戻ります。
	this.back = back;
	function back(){
		for(var y = 0; y < row; y++){
			for(var x = 0; x < col; x++){
				map[y][x] = mapBuffer[y][x];
				mapErase[y][x] = mapEraseBuffer[y][x];
			}
		}

		chain = 0;
		score = 0;
		stop();
		update();


	}



	//フィールドを空にします。
	this.reset = reset;
	function reset(){
		for(var y = 0; y < row; y++){
			for(var x = 0; x < col; x++){
				map[y][x] = BLANK;
				mapErase[y][x] = false;
			}
		}
		chain = 0;
		score = 0;
		stop();
		update();

	}





	//配置する
	this.setPuyo = setPuyo;
	function setPuyo(y, x, select){
		start = false;

		//挿入モード
		if(mode == "edit" && document.getElementById("insert").checked){
			if(select == DELETE){
				for(var i = y; i > 0 ; i--){
					map[i][x] = map[i - 1][x];
					mapErase[i][x] = mapErase[i - 1][x];
				}
				map[0][x] = BLANK;
			}else{
				for(var i = 0; i < y; i++){
					map[i][x] = map[i + 1][x];
					mapErase[i][x] = mapErase[i + 1][x];
				}
				map[y][x] = select;
				mapErase[y][x] = false;
			}
		}
		//上書き
		else{
			if(select == DELETE){
				map[y][x] = BLANK;
			}else{
				map[y][x] = select;
			}
			mapErase[y][x] = false;
		}

		update();
	}



	this.getMap = getMap;
	function getMap(){
		return copyArray2D(map);
	}



	this.setMap = setMap;
	function setMap(newMap){
		map = copyArray2D(newMap);
		update();
	}



	this.getCode = getCode;
	function getCode(){
		var temp = copyArray2D(map);
		for(var y = 0; y < row; y++){
			for(var x = 0; x < col; x++){
				if(mapErase[y][x] == true){
					map[y][x] = BLANK;
				}
			}
		}
		return encode(map);
	}



	//自動実行中かどうか
	this.isRunning = isRunning;
	function isRunning(){
		return running;
	}
}
//*************************************************************************************************





//スコア表示クラス*********************************************************************************
function ScorePanel(mode){
	var exist = false;

	this.write = write;
	function write(){
		exist = true;
		if(mode == "edit" || mode == "tokopuyo"){
			document.write('<div style="position: relative; margin: 5px 0px; overflow: hidden;">' +
					'<input type=text id="chain" value=0 readonly style="text-align:right; width:20px; height:20px;">連鎖' +
					'<input type=text id="score" value=0 readonly style="text-align:right; width:60px; height:20px;">点' +
					'</div>');
			return;
		}

		if(mode == "view"){
			document.write('<div style="font-size: 12px; position: relative; white-space: nowrap;">' +
					'<input type=text id="chain" value=0 readonly style="text-align:right; width:20px; height:20px;">連鎖' +
					'<input type=text id="score" value=0 readonly style="text-align:right; width:60px; height:20px;">点' +
					'</div>');
			return;
		}
	}



	this.update = update;
	function update(chain, score){
		if(exist == false){
			return;
		}
		document.getElementById("chain").value = chain;
		document.getElementById("score").value = score;
	}


}
//*************************************************************************************************





//予告ぷよ表示クラス*******************************************************************************
function YokokuPanel(){
	var size = 32;
	//お邪魔ぷよのレート
	var rate = 70;

	var image = new Image();
	image.src = "image/yokoku.gif";
	//画像のそれぞれの幅
	var yokokuWidth = new Array(32, 32, 32, 32, 28, 20);
	//画像の高さ
	var yokokuHeight = 32;
	//予告ぷよのレート
	var yokokuRate = new Array(420, 300, 210, 30, 6, 1);
	//これの幅
	var width = size * 6;
	//これの高さ
	var height = size;
	//img要素を何個用意しておくか
	var num = 8;

	var exist = false;

	this.write = write;
	function write(){
		exist = true;
		document.write('<div style="position: relative; '+
		'width: ' + width + 'px; ' +
		'height: ' + height + 'px; ' +
		'overflow: hidden; ' +
		'margin: 5px 0px;">');

		for(var i = 0; i < num; i++){
			document.write('<img src=' + image.src + ' ' +
			'id="yokoku' + i + '" ' +
			'style="position: absolute; display: none;">');
		}

		document.write('</div>');
	}



	this.update = update;
	function update(score){
		if(exist == false){
			return;
		}
		var ozyama = Math.floor(score / rate);


		//一旦全部非表示にする
		for(var i = 0; i < num; i++){
			document.getElementById("yokoku" + i).style.display = "none";
		}


		//既に描画に使用した領域の幅を記憶する変数
		var temp = 0;
		//何個目のimg要素を使うか
		var index = 0;
		var offsetX = 0;

		for(var i = 0; i < yokokuRate.length; i++){
			var count = Math.floor(ozyama / yokokuRate[i]);
			ozyama %= yokokuRate[i];

			for(var j = 0; j < count; j++){
				//描画できる範囲を超えてしまったら終了
				if(temp + yokokuWidth[i] > width){
					return;
				}
				//img要素を使い切ったら終了
				if(index >= num){
					return;
				}

				var img = document.getElementById("yokoku" + index);
				img.style.left = (temp - offsetX) + "px";
				img.style.top = "0px";
				img.style.clip = "rect(0px," + (offsetX + yokokuWidth[i]) + "px," + height + "px," + offsetX + "px)";
				img.style.display = "inline";

				temp += yokokuWidth[i];
				index++;
			}

			offsetX += yokokuWidth[i];
		}


	}



}
//*************************************************************************************************







function include(file){
	document.write('<script type=text/javascript src="src/', file, '"></script>');
}
