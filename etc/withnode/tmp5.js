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
const res = makeDescendList(list);
console.log(res);