// ({
// 	"plugins": ["jsdom-quokka-plugin"],
// })

const R = require(`ramda`);

const a = [0, 1, 2];
const b = [0, 10, 20];
const c = [0, 100, 200];
// https://www.it-swarm.dev/ja/javascript/python%E3%81%AEzip%E9%96%A2%E6%95%B0%E3%81%AB%E7%9B%B8%E5%BD%93%E3%81%99%E3%82%8Bjavascript/972067105/
const nZip = (arr, ...arrs) => {
	return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));
}
console.log(
	nZip(a, b, c)
)