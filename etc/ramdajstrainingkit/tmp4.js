const ar = [
		[
			"__"
		],
		[
			"add",
			"subtract"
		],
		[
			"addIndex"
		],
		[
			"adjust",
			"update"
		],
		[
			"all",
			"any",
			"none",
			"transduce"
		],
		[
			"allPass",
			"anyPass"
		],
]


const R = require(`ramda`);

ar1 = R.filter(n => n.length > 1, ar)
ar1

R.remove(2, 3, [1, 2, 3, 4, 5, 6, 7, 8]); //=> [1,2,6,7,8]

const withoutZeroElmArray = R.remove(0, 1, ar1);
const onlyZeroElmArray = R.map(V => V[0], ar1);

withoutZeroElmArray
const withoutZeroElmArrayJoined = R.map(V => R.join(" ")(V), withoutZeroElmArray)
// const spacer = R.join(' ');
// spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
// R.join('|', [1, 2, 3]);    //=> '1|2|3'
withoutZeroElmArrayJoined
onlyZeroElmArray
// R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
// R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]

// // If some of the rows are shorter than the following rows, their elements are skipped:
// R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
const onlyZeroElmArrayAndWithoutZeroElmArrayJoined = R.transpose([
	onlyZeroElmArray,
	withoutZeroElmArrayJoined
])

onlyZeroElmArrayAndWithoutZeroElmArrayJoined