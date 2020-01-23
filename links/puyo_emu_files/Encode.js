include("Array2D.js");

var RED = 0;
var BLUE = 1;
var YELLOW = 2;
var GREEN = 3;
var PURPLE = 4;
var OZYAMA = 5;
var TOKUTEN = 6;
var KATAPUYO = 7;
var BLACK = 8;
var BLOCK = 9;

var DELETE = 10;
var BLANK = 11;

var ERASE = 12; 
var CURSOR = 13;
var BATU = 14;







function encode(map){
	var row = 13;
	var col = 6;
	var key = new Array();
	key[BLANK] = "a";	key["a"] = BLANK;
	key[ERASE] = "a";
	key[RED] = "b";		key["b"] = RED;
	key[BLUE] = "c";	key["c"] = BLUE;
	key[YELLOW] = "d";	key["d"] = YELLOW;
	key[GREEN] = "e";	key["e"] = GREEN;
	key[PURPLE] = "f";	key["f"] = PURPLE;
	key[OZYAMA] = "g";	key["g"] = OZYAMA;
	key[BLACK] = "h";	key["h"] = BLACK;
	key[BLOCK] = "i";	key["i"] = BLOCK;
	key[TOKUTEN] = "j";	key["j"] = TOKUTEN;
	key[KATAPUYO] = "k";key["k"] = KATAPUYO;



	var pre = key[map[0][0]];
	var length = 0;
	var code = "";
	code += key[map[0][0]];

	for(y = 0; y < row; y++){
		for(x = 0; x < col; x++){
			if(key[map[y][x]] == pre){
				length++;
			}else{
				if(length != 1){
					code += length;
				}
				code += key[map[y][x]];
				length = 1;
			}
			pre = key[map[y][x]];
		}
	}

	if(length != 1){
		code += length;
	}

	return code;
}




function decode(code){
	var row = 13;
	var col = 6;
	var map = new Array2D(row, col, BLANK);

	var key = new Array();
	key[BLANK] = "a";	key["a"] = BLANK;;
	key[RED] = "b";		key["b"] = RED;
	key[BLUE] = "c";	key["c"] = BLUE;
	key[YELLOW] = "d";	key["d"] = YELLOW;
	key[GREEN] = "e";	key["e"] = GREEN;
	key[PURPLE] = "f";	key["f"] = PURPLE;
	key[OZYAMA] = "g";	key["g"] = OZYAMA;
	key[BLACK] = "h";	key["h"] = BLACK;
	key[BLOCK] = "i";	key["i"] = BLOCK;
	key[TOKUTEN] = "j";	key["j"] = TOKUTEN;
	key[KATAPUYO] = "k";key["k"] = KATAPUYO;


	if(code == undefined){
		return map;
	}

	if(code.match("[^" + key.join("") + "0-9]")){
		alert("コードに不正な文字が含まれています。");
		return map;
	}

	var pre = "";
	var result = "";
	var length = "";


	for(i = 0; i < code.length; i++){
		if(code.charAt(i).match("[0-9]")){
			//数字の場合
			length += code.charAt(i);
		}else{
			//アルファベットの場合
			if(length != ""){
				for(j = 0; j < length - 1; j++){
					result += pre;
				}
			}
			result += code.charAt(i);
			pre = code.charAt(i);
			length = "";
		}
	}

	if(length != ""){
		for(j = 0; j < length - 1; j++){
			result += pre;
		}
	}

	if(result.length != (row * col)){
		alert("コードのサイズが不正です。");
		return map;
	}

	var i = 0;
	for(var y = 0; y < row; y++){
		for(var x = 0; x < col; x++){
			map[y][x] = key[result.charAt(i)];
			i++;
		}
	}

	return map;
}




function include(file){
	document.write('<script type=text/javascript src="src/', file, '"></script>');
}
