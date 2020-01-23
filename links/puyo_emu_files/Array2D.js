/**
 * 2次元配列を作ります。
 * @param row 行数
 * @param col 列数
 * @param element この値で各要素を初期化します
 * @return 各要素をelementで初期化された2次元配列
 */
function Array2D(row, col, element){
	var array = new Array(row);
		for(var y = 0; y < row; y++){
			array[y] = new Array(col);
			for(var x = 0; x < col; x++){
				array[y][x] = element;
		}
	}

	/**
	 * 指定された位置にある、値を返します。
	 * 値渡しなので、値の変更はできない。
	 * @param y 行番号
	 * @param x 列番号
	 */
	array.get = function(y, x){
		if(array[y] == undefined){
			return undefined;
		}
		return array[y][x];
	}

	return array;
}



/**
 * 2次元配列をコピーして返します。
 * @param array コピーする2次元配列
 */
function copyArray2D(array2D){
	var newArray = new Array(array2D.length);
	for(var y = 0; y < array2D.length; y++){
		newArray[y] = new Array(array2D[0].length);
		for(var x = 0; x < array2D[0].length; x++){
			newArray[y][x] = array2D[y][x];
		}
	}

	/**
	 * 指定された位置にある、値を返します。
	 * 値渡しなので、値の変更はできない。
	 * @param y 行番号
	 * @param x 列番号
	 */
	newArray.get = function(y, x){
		if(newArray[y] == undefined){
			return undefined;
		}
		return newArray[y][x];
	}

	return newArray;
}
