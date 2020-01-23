include("Field.js");
include("Cookie.js");


//とことんぷよぷよ*********************************************************************************
function Tokopuyo(){
	var colors = new Array(RED, BLUE, YELLOW, GREEN, PURPLE);
	//実際に出てくる色の配列
	var colorList = new Array();
	//配色をループするターン数
	var loopTurn = 128;
	//ネクストぷよの配列
	var nextList = new Array(loopTurn * 2);

	var size = 32;

	var turn = 1;

	//キーとかネクストぷよとか、設定をしている最中はtrue
	var edit = false;

	var image = new Image();
	image.src = "image/puyo.gif";


	var movePanel = new MovePanel();
	var nextPuyoPanel = new NextPuyoPanel();
	var colorSelecter = new ColorSelecter();
	var controlPanel = new ControlPanel();
	var scorePanel = new ScorePanel("tokopuyo");
	var yokokuPanel = new YokokuPanel();
	var ozyamaGenerator = new OzyamaGenerator();
	var initURL = new InitURL();
	var keyPanel = new KeyPanel();
	var field = new Field("tokopuyo", scorePanel, yokokuPanel);

	//
	var tumosute = false;



	function nextAt(n){
		if(colorList[0] == undefined){
			for(var i = 0, j = 0; i < colors.length; i++){
				if(document.getElementById("color" + colors[i]).flag == true){
					colorList[j] = colors[i];
					j++;
				}
			}
		}
		n %= nextList.length;

		if(nextList[n] == undefined){
			if(n <= 6 && colorList.length > 3){
				// 3手目までは3色以内
				nextList[n] = colorList[Math.floor(Math.random() * 3)];
			}else{
				nextList[n] = colorList[Math.floor(Math.random() * colorList.length)];
			}
		}

		return nextList[n];
	}


	var mapBuffer = new Array();
	var bufferCount = 0;
	var ozyamaFlag = new Array();


	this.init = init;
	function init(){
		document.write('<div style="width: ' + size * (field.col + 8.5) + 'px; ">');

		document.write('<div style="float: left; overflow: hidden;">');
		movePanel.write();
		field.write();
		document.write('</div>');

		document.write('<div style="float: right; overflow: hidden;">');
		nextPuyoPanel.write();
		colorSelecter.write();
		controlPanel.write();
		scorePanel.write();
		yokokuPanel.write();
		ozyamaGenerator.write();
		initURL.write();
		keyPanel.write();

		document.write('<input type="button" value="ぷよ図エディター" id="jumpEditor">');

		document.write('</div>');

		document.write('</div>');
		document.write('<br style="clear: both;">');


		document.getElementById("jumpEditor").onclick = function(){
			var code = field.getCode();
			var url = document.URL;
			url = url.substring(0, url.lastIndexOf("/")) + "/index.html";
			window.open(url + "?" + code);
		};

		retry(true);
	}





	//操作してるぷよを表示するやつ
	function MovePanel(){

		var x = 2;
		var dir = UP;
		var col = 6;
		var row = 3;


		this.write = write;
		function write(){
			document.write('<div style="position: relative;overflow: hidden;' +
					'width: ' + size * col + 'px; ' +
					'height: ' + size * row + 'px; ' +
					'margin: 0px 32px; ' +
					'">');


			document.write('<div id="zikupuyo" ' +
					'style="position: absolute; ' +
					'width: ' + size + 'px;' +
					'height: ' + size + 'px;' +
					'overflow: hidden;">' +
					'<img src=' + image.src + ' ' +
					'id="zikuimage" ' +
					'style="position: absolute; ">' +
					'</div>');
			document.write('<div id="kopuyo" ' +
					'style="position: absolute; ' +
					'width: ' + size + 'px;' +
					'height: ' + size + 'px;' +
					'overflow: hidden;">' +
					'<img src=' + image.src + ' ' +
					'id="koimage" ' +
					'style="position: absolute; ">' +
					'</div>');

			document.write('</div>');
		}


		//左右移動
		this.move = move;
		function move(direction){
			if(direction == LEFT && x != 0){
				x--;

			}
			if(direction == RIGHT && x != col -1){
				x++;
			}
			//初期位置に戻す
			if(direction == 0){
				x = 2;
				dir = UP;
			}
			fix();
			update();
		}


		//回転
		this.rotation = rotation;
		function rotation(direction){
			if(direction == RIGHT){
				switch(dir){
					case UP:
						dir = RIGHT;
						break;
					case RIGHT:
						dir = DOWN;
						break;
					case DOWN:
						dir = LEFT;
						break;
					case LEFT:
						dir = UP;
						break;
				}
			}
			if(direction == LEFT){
				switch(dir){
					case UP:
						dir = LEFT;
						break;
					case RIGHT:
						dir = UP;
						break;
					case DOWN:
						dir = RIGHT;
						break;
					case LEFT:
						dir = DOWN;
						break;
				}
			}

			fix();
			update();
		}


		//移動可能範囲内からはみ出していたら、調整する
		function fix(){
			if(x == 0 && dir == LEFT){
				x = 1;
			}
			if(x == col - 1 && dir == RIGHT){
				x = col - 2;
			}
		}


		//落下させる
		this.drop = drop;
		function drop(){
			if(field.isRunning()){
				return;
			}

			var map = field.getMap();
			mapBuffer[bufferCount] = map;
			mapBuffer[bufferCount + 1] = undefined;
			mapBuffer[bufferCount + 2] = undefined;

			//捨て無し
			if(tumosute == false){
				switch(dir){
					case UP:
						if(map.get(0, x) != BLANK) return;
						if(map.get(1, x) != BLANK){
							field.setPuyo(0, x, nextAt(turn * 2 + 1));
							break;
						}
						field.setPuyo(0, x, nextAt(turn * 2));
						field.setPuyo(1, x, nextAt(turn * 2 + 1));
						break;
					case RIGHT:
						if(map.get(0, x + 1) != BLANK || map.get(0, x) != BLANK) return;
						field.setPuyo(0, x + 1, nextAt(turn * 2));
						field.setPuyo(0, x, nextAt(turn * 2 + 1));
						break;
					case DOWN:
						if(map.get(0, x) != BLANK) return;
						if(map.get(1, x) != BLANK){
							field.setPuyo(0, x, nextAt(turn * 2));
							break;
						}
						field.setPuyo(1, x, nextAt(turn * 2));
						field.setPuyo(0, x, nextAt(turn * 2 + 1));
						break;
					case LEFT:
						if(map.get(0, x - 1) != BLANK || map.get(0, x) != BLANK) return;
						field.setPuyo(0, x - 1, nextAt(turn * 2));
						field.setPuyo(0, x, nextAt(turn * 2 + 1));
						break;
				}
			}
			//捨て有り
			if(tumosute == true){
				switch(dir){
					case UP:
						if(map.get(0, x) != BLANK) break;
						if(map.get(1, x) != BLANK){
							field.setPuyo(0, x, nextAt(turn * 2 + 1));
							break;
						}
						field.setPuyo(0, x, nextAt(turn * 2));
						field.setPuyo(1, x, nextAt(turn * 2 + 1));
						break;
					case RIGHT:
						if(map.get(0, x + 1) == BLANK) field.setPuyo(0, x + 1, nextAt(turn * 2));
						if(map.get(0, x) == BLANK) field.setPuyo(0, x, nextAt(turn * 2 + 1));
						break;
					case DOWN:
						if(map.get(0, x) != BLANK) break;
						if(map.get(1, x) != BLANK){
							field.setPuyo(0, x, nextAt(turn * 2));
							break;
						}
						field.setPuyo(1, x, nextAt(turn * 2));
						field.setPuyo(0, x, nextAt(turn * 2 + 1));
						break;
					case LEFT:
						if(map.get(0, x - 1) == BLANK) field.setPuyo(0, x - 1, nextAt(turn * 2));
						if(map.get(0, x) == BLANK) field.setPuyo(0, x, nextAt(turn * 2 + 1));
						break;
				}
			}


			field.auto();

			ozyamaFlag[bufferCount] = false;
			turn++;
			bufferCount++;
			x = 2;
			dir = UP;
			update();
			nextPuyoPanel.update();

			document.getElementById("戻る").disabled = false;
			document.getElementById("進む").disabled = true;
		}



		this.update = update;
		function update(){
			var zikupuyo = document.getElementById("zikupuyo");
			var kopuyo = document.getElementById("kopuyo");

			document.getElementById("koimage").style.left = -nextAt(turn * 2) * size + "px";

			document.getElementById("zikuimage").style.left = -nextAt(turn * 2 + 1) * size + "px";
			zikupuyo.style.left = x * size +"px";
			zikupuyo.style.top = size + "px";

			switch(dir){
				case UP:
					kopuyo.style.left = x * size +"px";
					kopuyo.style.top = "0px";
					break;
				case RIGHT:
					kopuyo.style.left = (x + 1) * size +"px";
					kopuyo.style.top = size + "px";
					break;
				case DOWN:
					kopuyo.style.left = x * size +"px";
					kopuyo.style.top = size * 2 + "px";
					break;
				case LEFT:
					kopuyo.style.left = (x - 1) * size +"px";
					kopuyo.style.top = size + "px";
					break;
			}
		}
	}




	//ネクストぷよ表示パネル
	function NextPuyoPanel(){
		//何個先まで表示するか
		var showNext = 2;

		this.write = write;
		function write(){
			document.write('<div style="position: relative; overflow: hidden; font-size: 12px;">');

			document.write('<div style="position: relative; overflow: hidden;' +
					'width: ' + size * 5 + 'px; ' +
					'height: ' + size * 2 + 'px; ' +
					'">');

			for(var i = 0; i < 5 * 2; i++){
				var x = Math.floor(i / 2) * size;
				var y = i % 2 * size;
				document.write('<div style="position: absolute; ' +
						'left: ' + x + 'px; ' +
						'top: ' + y + 'px; ' +
						'width: ' + size + 'px; ' +
						'height: ' + size + 'px; ' +
						'overflow: hidden; ' +
						'">');

				document.write('<img src=' + image.src + ' ' +
						'id="next' + i + '" ' +
						'style="position: absolute; ">');


				document.write('</div>');
			}

			document.write('</div>');

			document.write('Nextぷよ表示数<select id="Nextぷよ表示数">' +
					'<option value=0>0</option>' +
					'<option value=1>1</option>' +
					'<option value=2 selected>2</option>' +
					'<option value=3>3</option>' +
					'<option value=4>4</option>' +
					'<option value=5>5</option>' +
					'</select>');


			document.write('</div>');



			var obj = document.getElementById("Nextぷよ表示数");
			obj.onchange = function(){
				update();
			};
			obj.onkeypress = function(){
				update();
			};
			obj.onfocus = function(){
				edit = true;
			};
			obj.onblur = function(){
				edit = false;
			};
		}

		this.update = update;
		function update(){
			var num = document.getElementById("Nextぷよ表示数").value;
			for(var i = 0; i < 5 * 2; i++){
				var img = document.getElementById("next" + i);
				if(i < num * 2){
					img.style.left = -nextAt((turn + 1) * 2 + i) * size + "px";
					img.style.display = "inline";
				}else{
					img.style.display = "none";
				}
			}
		}
	}




	//ボタン操作パネル
	function ControlPanel(){

		this.write = write;
		function write(){
			var width = 32;
			var height = 24;
			document.write('<div style="font-size: 12px; overflow: hidden; margin: 10px 0;">');

			button("←", width, height);
			button("↓", width, height);
			button("→", width, height);
			button("左", width, height);
			button("右", width, height);
			document.write('<br>');
			button("戻る", width * 1.5, height);
			button("進む", width * 1.5, height);
			document.write('<br>');

			button("retry", width * 2, height);
			document.write('<input type="checkbox" id="tumochange" checked>配色を変える');
			document.write('</div>');



			document.getElementById("←").onclick = function(){
				movePanel.move(LEFT);
			}
			document.getElementById("→").onclick = function(){
				movePanel.move(RIGHT);
			}
			document.getElementById("↓").onclick = function(){
				movePanel.drop();
			}
			document.getElementById("左").onclick = function(){
				movePanel.rotation(LEFT);
			}
			document.getElementById("右").onclick = function(){
				movePanel.rotation(RIGHT);
			}

			document.getElementById("戻る").onclick = function(){
				undo();
			}
			document.getElementById("戻る").disabled = true;

			document.getElementById("進む").onclick = function(){
				redo();
			}
			document.getElementById("進む").disabled = true;

			document.getElementById("retry").onclick = function(){
				retry();
			}
		}

		function button(name, width, height){
			document.write('<input type="button" value="' + name + '" id="' + name + '" ' +
			'style="width:' + width + 'px; height: ' + height + 'px;">');
		}
	}


	function ColorSelecter(){

		this.write = write;
		function write(){
			document.write('<div style="position: relative; margin: 10px 0; overflow: hidden; width:160px;height:32px;">');

			for(var i = 0; i < colors.length; i++){
				document.write('<div style="position: absolute; overflow: hidden; ' +
						'width: ' + size + 'px; ' +
						'height: ' + size + 'px; ' +
						'left: ' + size * i + 'px; ' +
						'top: 0; ' +
						'">');

				document.write('<img src=' + image.src + ' style="position: absolute;' +
						'left: ' + (-size * colors[i]) + 'px; ' +
						'">');


				document.write('<img src=' + image.src + ' id=color' + colors[i] + ' style="position: absolute;' +
						'left:' + (-size * OZYAMA) + 'px; ' +
						'top: '+ (-size * (BLANK - OZYAMA)) + 'px; ' +
						'">');


				document.write('</div>');

				var obj = document.getElementById('color' + colors[i]);
				obj.flag = true;
				obj.onmousedown = function(){
					change(this);
				}

				if(i == PURPLE){
					change(obj);
				}

			}

			document.write('</div>');
		}

		function change(obj){
			if(obj.flag == true){
				obj.flag = false;
				obj.style.top = -size * (BATU - OZYAMA) + "px";
			}else if(obj.flag == false){
				obj.flag = true;
				obj.style.top = -size * (BLANK - OZYAMA) + "px";
			}

			var temp = 0;
			for(var i = 0; i < colors.length; i++){
				if(document.getElementById("color" + colors[i]).flag == false){
					temp++;
				}
			}

			if(temp == 5){
				change(obj);
			}
		}
	}




	//おじゃまぷよを降らすやつ
	function OzyamaGenerator(){

		this.write = write;
		function write(){
			document.write('<div style="position: relative; margin: 10px 0; overflow: hidden;">');

			document.write('お邪魔ぷよ');

			document.write('<select id="ozyama_num">');
			for(var i = 1; i <= 30; i++){
				document.write('<option value=' + i + '>' + i + '</option>');
			}
			document.write('</select>個<br>');

			document.write('<input type="button" id="降らせる" value="降らせる">');
			document.write('</div>');

			var obj = document.getElementById("ozyama_num");
			obj.onfocus = function(){
				edit = true;
			};
			obj.onblur = function(){
				edit = false;
			};

			document.getElementById("降らせる").onclick = function(){
				var ozyama = document.getElementById("ozyama_num").value;
				generate(ozyama);
			}
		}

		this.generate = generate;
		function generate(){
			if(field.isRunning()){
				return;
			}
			mapBuffer[bufferCount] = field.getMap();
			mapBuffer[bufferCount + 1] = undefined;
			mapBuffer[bufferCount + 2] = undefined;

			var ozyama = document.getElementById("ozyama_num").value;
			var col = 6;
			while(ozyama > 0){
				var map = field.getMap();

				if(ozyama >= col){
					for(var i = 0; i < col; i++){
						if(map[0][i] == BLANK) map[0][i] = OZYAMA;
					}
					field.setMap(map);
					field.dropPuyo();
					ozyama -= col;
				}else{
					var array = new Array(col);
					for(var i = 0; i < col; i++){
						if(i < ozyama) array[i] = 1;
						else array[i] = 0;
					}
					array.random();
					for(var i = 0; i < col; i++){
						if(array[i] == 1 && map[0][i] == BLANK) map[0][i] = OZYAMA;
					}
					field.setMap(map);
					field.dropPuyo();
					ozyama = 0;
				}

			}
			field.update();

			ozyamaFlag[bufferCount] = true;
			bufferCount++;
			document.getElementById("戻る").disabled = false;
			document.getElementById("進む").disabled = true;
		}
	}


	//初期配置指定
	function InitURL(){
		this.write = write;
		function write(){
			document.write('<div style="margin: 10px 0;">' +
					'<input type="checkbox" id="初期配置">初期配置を指定する<br>' +
					'URL<input type=text id="初期配置URL" value="" style="width: 160px;">' +
					'</div>');
		}
	}



	//キーボード操作パネル
	function KeyPanel(){
		var height = "20px";
		var textWidth = "70px";

		//キー設定
		var keySetting = new Array(
			["左移動", "左移動", KEY_LEFT],
			["右移動", "右移動", KEY_RIGHT],
			["落下", "落下", KEY_DOWN],
			["左回転", "左回転", KEY_Z],
			["右回転", "右回転", KEY_X],
			["戻る", "undo", KEY_B],
			["進む", "redo", KEY_F],
			["リトライ", "リトライ", KEY_R],
			["お邪魔", "お邪魔", KEY_O]
		);

		var keyArray = new Array();


		this.write = write;
		function write(){
			document.write('<div style="margin: 10px 0;">');

			document.write('<div style="float: left; margin-right: 10px; line-height: ' + height + ';">');

			for(var i = 0; i < keySetting.length; i++){
				document.write(keySetting[i][0] + "<br>");
			};


			document.write('</div>');

			document.write('<div style="float: left;">');

			for(var i = 0; i < keySetting.length; i++){
				setKeyField(keySetting[i][1], keySetting[i][2]);
			};


			document.write('</div>');

			document.write('<br style="clear: both;">');

			document.write(
					'<input type="button" value="save" id="key_save">' +
					'<input type="button" value="default" id="key_default">');

			document.write('</div>');

			document.getElementById("key_save").onclick = function(){
				keySave();
			};
			document.getElementById("key_default").onclick = function(){
				keyDefault();
			};


			for(var i = 0; i < keySetting.length; i++){
				keyArray[i] = document.getElementById(keySetting[i][1]);
			};


			keyLoad();
			keySave();

			window.document.onkeydown = function(event){
				var keyCode;
				//IE
				if(navigator.appName=="Microsoft Internet Explorer"){
					keyCode = window.event.keyCode;
				}
				//FireFox
				else{
					keyCode = event.keyCode;
				}
				keyEvent(keyCode);

				keyCommand(keyCode);

				//十字キーによるスクロール防止
				if(keyCode == KEY_UP){
					return false;
				}
				if(keyCode == KEY_RIGHT){
					return false;
				}
				if(keyCode == KEY_DOWN){
					return false;
				}
				if(keyCode == KEY_LEFT){
					return false;
				}
			}


			function keyEvent(keyCode){
				if(edit){
					return;
				}

				if(keyCode == keyArray[0].key){
					movePanel.move(LEFT);
				}
				if(keyCode == keyArray[1].key){
					movePanel.move(RIGHT);
				}
				if(keyCode == keyArray[2].key){
					movePanel.drop();
				}
				if(keyCode == keyArray[3].key){
					movePanel.rotation(LEFT);
				}
				if(keyCode == keyArray[4].key){
					movePanel.rotation(RIGHT);
				}
				if(keyCode == keyArray[5].key){
					undo();
				}
				if(keyCode == keyArray[6].key){
					redo();
				}
				if(keyCode == keyArray[7].key){
					retry();
				}
				if(keyCode == keyArray[8].key){
					ozyamaGenerator.generate();
				}
			}


			var ci = 0;
			function keyCommand(keyCode){
				if(ci == COMMAND.length) return;

				if(keyCode == COMMAND[ci]){
					ci++;
				}else{
					ci = 0;
				}

				if(ci == COMMAND.length){
					tumosute = true;
					//ci = 0;
				}
			}
		}



		//キー設定をクッキーに保存する
		function keySave(){
			var keyData = new Array();
			for(var i = 0; i < keySetting.length; i++){
				keyData[i] = keyArray[i].key;
			}

			addCookieArray("key", keyData ,365);
		}



		//キー設定をクッキーから読み込む
		function keyLoad(){
			var keyData = getCookieArray("key");

			if(keyData == null){
				return;
			}

			for(var i = 0; i < keySetting.length; i++){
				keyArray[i].value = KEY[keyData[i]];
				keyArray[i].key = keyData[i];
			}
		}



		//キー設定を初期化する
		function keyDefault(){
			for(var i = 0; i < keySetting.length; i++){
				keyArray[i].value = KEY[keySetting[i][2]];
				keyArray[i].key = keySetting[i][2];
			}
		}



		function setKeyField(id, code){
			document.write('<div style="width: ' + textWidth + '; height: ' + height + ';">' +
					'<input type="text" readonly id="' + id + '" style="width:' + textWidth + ';">' +
					'</div>');

			var obj = document.getElementById(id);
			obj.key = code;
			if(KEY[code] != undefined){
				obj.value = KEY[code];
			}else{
				obj.value = code;
			}

			obj.onkeydown = function(event){
				var keyCode;
				if(navigator.appName=="Microsoft Internet Explorer"){
					keyCode = window.event.keyCode;
				}else{
					keyCode = event.keyCode;
				}
				if(keyCode == KEY_TAB){
					return;
				}

				if(KEY[keyCode] != undefined){
					obj.value = KEY[keyCode];
				}else{
					obj.value = keyCode;
				}
				obj.key = keyCode;
			}

			obj.onfocus = function(){
				edit = true;
			}

			obj.onblur = function(){
				edit = false;
			}
		}
	}


	function undo(){
		if(bufferCount == 0){
			return;
		}
		if(mapBuffer[bufferCount] == undefined){
			mapBuffer[bufferCount] = field.getMap();
		}
		if(ozyamaFlag[bufferCount - 1] == false){
			turn--;
		}
		bufferCount--;
		field.setMap(mapBuffer[bufferCount]);
		movePanel.move(0);
		nextPuyoPanel.update();

		if(bufferCount == 0){
			document.getElementById("戻る").disabled = true;
		}
		document.getElementById("進む").disabled = false;
	}


	function redo(){
		if(mapBuffer[bufferCount + 1] == undefined){
			return;
		}

		if(ozyamaFlag[bufferCount] == false){
			turn++;
		}
		bufferCount++;
		field.setMap(mapBuffer[bufferCount]);
		movePanel.move(0);
		nextPuyoPanel.update();

		if(mapBuffer[bufferCount + 1] == undefined){
			document.getElementById("進む").disabled = true;
		}
		document.getElementById("戻る").disabled = false;
	}




	function retry(change){
		if(change == true || document.getElementById("tumochange").checked){
			nextList = new Array(loopTurn * 2);
			colorList = new Array();
		}
		turn = 0;
		mapBuffer = new Array();
		bufferCount = 0;
		ozyamaFlag = new Array();
		movePanel.move(0);
		nextPuyoPanel.update();
		field.reset();
		document.getElementById("戻る").disabled = true;
		document.getElementById("進む").disabled = true;

		if(document.getElementById("初期配置").checked){
			field.load(document.getElementById("初期配置URL").value);
		}
	}



}
//*************************************************************************************************



var KEY_TAB		= 9;
var KEY_LEFT	= 37;
var KEY_UP		= 38;
var KEY_RIGHT	= 39;
var KEY_DOWN	= 40;
var KEY_X		= 88;
var KEY_Z		= 90;
var KEY_A		= 65;
var KEY_B		= 66;
var KEY_F		= 70;
var KEY_R		= 82;
var KEY_O		= 79;

var KEY = new Array();

KEY[8]  = "BackSpace";
KEY[9]  = "Tab";
KEY[13] = "Enter";
KEY[16] = "Shift";
KEY[17] = "Ctrl";
KEY[18] = "Alt";
KEY[19] = "PauseBreak";
KEY[27] = "Esc";
KEY[28] = "変換";
KEY[29] = "無変換";
KEY[32] = "Space";
KEY[37] = "←";
KEY[38] = "↑";
KEY[39] = "→";
KEY[40] = "↓";
KEY[45] = "Insert";
KEY[46] = "Delete";
KEY[48] = "0";
KEY[49] = "1";
KEY[50] = "2";
KEY[51] = "3";
KEY[52] = "4";
KEY[53] = "5";
KEY[54] = "6";
KEY[55] = "7";
KEY[56] = "8";
KEY[57] = "9";
KEY[59] = ":";		//FireFox
KEY[65] = "A";
KEY[66] = "B";
KEY[67] = "C";
KEY[68] = "D";
KEY[69] = "E";
KEY[70] = "F";
KEY[71] = "G";
KEY[72] = "H";
KEY[73] = "I";
KEY[74] = "J";
KEY[75] = "K";
KEY[76] = "L";
KEY[77] = "M";
KEY[78] = "N";
KEY[79] = "O";
KEY[80] = "P";
KEY[81] = "Q";
KEY[82] = "R";
KEY[83] = "S";
KEY[84] = "T";
KEY[85] = "U";
KEY[86] = "V";
KEY[87] = "M";
KEY[88] = "X";
KEY[89] = "Y";
KEY[90] = "Z";
KEY[91] = "Windows";
KEY[107] = ";";		//FireFox
KEY[109] = "-";		//FireFox
KEY[112] = "F1";
KEY[113] = "F2";
KEY[114] = "F3";
KEY[115] = "F4";
KEY[116] = "F5";
KEY[117] = "F6";
KEY[118] = "F7";
KEY[119] = "F8";
KEY[120] = "F9";
KEY[121] = "F10";
KEY[122] = "F11";
KEY[123] = "F12";
KEY[186] = ":";		//IE
KEY[187] = ";";		//IE
KEY[188] = ",";
KEY[189] = "-";		//IE
KEY[190] = ".";
KEY[191] = "/";
KEY[192] = "@";
KEY[219] = "[";
KEY[220] = "\\";
KEY[221] = "]";
KEY[222] = "^";
KEY[226] = "\\";
KEY[240] = "CapsLock";
KEY[242] = "カナ/ひら";




var COMMAND = new Array();
COMMAND[0] = KEY_UP;
COMMAND[1] = KEY_UP;
COMMAND[2] = KEY_DOWN;
COMMAND[3] = KEY_DOWN;
COMMAND[4] = KEY_LEFT;
COMMAND[5] = KEY_RIGHT;
COMMAND[6] = KEY_LEFT;
COMMAND[7] = KEY_RIGHT;
COMMAND[8] = KEY_B;
COMMAND[9] = KEY_A;


Array.prototype.random = function() {
    var i = this.length;
    while(i){
        var j = Math.floor(Math.random()*i);
        var t = this[--i];
        this[i] = this[j];
        this[j] = t;
    }
    return this;
}


function include(file){
	document.write('<script type=text/javascript src="src/', file, '"></script>');
}
