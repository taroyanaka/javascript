// ({
// 	"plugins": ["jsdom-quokka-plugin"],
// })

const R = require(`ramda`);

let foo = R.filter(V => V % 50 === 0, R.range(0, 500));  //=> [50, 51, 52]
// console.table(foo )
data = [
	[0, 1],
	[3, 4, "gray"],
	[8, 8, "pink"]
];

console.table(data);

R.prop('x', {x: 100}); //=> 100
R.prop('x', {}); //=> undefined
R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
R.compose(R.inc, R.prop(0))([0,1])

const double = x => [x[0]+1 ,x[1] ,x[2]];

R.map(double, [ [0,1],[10,20] ] );
R.map(double, data );
R.reject(R.isNil)([1, 1, undefined]);


// const double = x => [x[0] + 1, x[1], x[2]];
const res = R.pipe(
	R.map(double),
	R.map(R.reject(R.isNil))
)(data)

res

let allZeroToNine = R.xprod(R.range(0, 10), R.range(0, 10));
let allZeroToNineAndWhite = R.map(R.insert(-1, 'white'))(allZeroToNine);
R.insert(-1, 'white', [1,2,3,4]); //=> [1,2,'x',3,4]

// R.reject(R.isNil)([1, 1, undefined]);


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
