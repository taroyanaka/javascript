// ({
// 	"plugins": ["jsdom-quokka-plugin"],
// })

const R = require(`ramda`);


R.test(/^x/, 'xyz'); //=> true
R.test(/^y/, 'xyz'); //=> false

const a = R.filter(R.test(/x/gi), ["abc", "axb", "xb", "xb", "axax", "XA"]); 
const b = R.filter(R.test(/x/g), ["abc", "axb", "xb", "xb", "axax", "XA"]); 
const c = R.filter(R.test(/x/i), ["abc", "axb", "xb", "xb", "axax", "XA"]); 
// console.table([a, b, c])

const makeDescendList = (array) => {
	return R.pipe(
		R.countBy(R.identity),
		R.toPairs,
		R.sort(R.descend(R.prop(1))),
		R.pluck(0),
		R.reject(R.isEmpty),
		R.reject(R.isNil)
	)(array);
}

const list = ["hospital", "chairperson", "table", "agenda", ""]
const res0 = makeDescendList(list);
// console.log(res);

// const res1 = [...Array(10000000).keys()].map(function (value) {
// 	return String.fromCharCode(value)
// }).filter(function (value) {
// 	return /\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu.test(value);
// })
// res1


// // （1）ワーカーの実装チェック
// if (window.Worker) {
// 	// Web Workersに関する処理を記述
// 	document.getElementById("button").addEventListener("click", send, false);
// 	var worker = new Worker("multiple.js");
// } else {
// 	window.alert("このブラウザではWeb Workersは利用できません");
// }

// function send() {
// 	var total = document.getElementById("inputtotalnum").value;
// 	var num = document.getElementById("num").value;
// 	// （2）ワーカーに入力値を送る
// 	worker.postMessage({ "total": total, "num": num });
// }

// // （3）ワーカーからのメッセージ取得時の処理
// worker.onmessage = function (event) {
// 	document.getElementById("disp").innerHTML = event.data;
// }
