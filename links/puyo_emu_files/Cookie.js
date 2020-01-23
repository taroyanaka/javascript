/*
 * 単体データをCookieに書き込む
 * id Cookieの名前
 * days Cookieの有効日数
 */
function addCookie(id, data, days){
	var exp = new Date();
	var day = 1000 * 60 * 60 * 24;
	exp.setTime(exp.getTime() + day * days);
	
	document.cookie = id + "=" + escape(data) + "; expires=" + exp.toGMTString();	
}



/*
 * Cookieから指定した単体データを読み込む
 * 無い場合はnullを返す
 */
function getCookie(id){
	var cookie = document.cookie;
	var data = null;
	
	if(cookie.match(id + "=")){
		cookie = cookie.split("; ");
		for(var i = 0; i < cookie.length; i++){
			if(cookie[i].match("^" + id + "=")){
				data = unescape(cookie[i].replace(id + "=", ""));
			}
		}
	}
	
	return data;
}



/*
 * 配列データをCookieに書き込む
 * id Cookieの名前
 * days Cookieの有効日数
 */
function addCookieArray(id, array, days){
	var cookie = escape(array[0]);
	
	for(var i = 1; i < array.length; i++){
		cookie += "%00" + escape(array[i]);
	}
	
	var exp = new Date();
	var day = 1000 * 60 * 60 * 24;
	exp.setTime(exp.getTime() + day * days);
	
	document.cookie = id + "=" + cookie + "; expires=" + exp.toGMTString();
}



/*
 * Cookieから指定した配列データを読み込む
 * 無い場合はnullを返す
 */
function getCookieArray(id){
	var cookie = document.cookie;
	var array = null;
	
	//指定のcookieが有る場合
	if(cookie.match(id + "=")){
		cookie = cookie.split("; ");
		for(var i = 0; i < cookie.length; i++){
			if(cookie[i].match("^" + id + "=")){
				array = cookie[i].replace(id + "=", "").split("%00");
				
			}
		}
		
		for(var i = 0; i < array.length; i++){
			array[i] = unescape(array[i]);
		}
	}
	
	return array;
}
