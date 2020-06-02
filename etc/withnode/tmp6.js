// ({
// 	"plugins": ["jsdom-quokka-plugin"],
// })

const R = require(`ramda`);

const txt = `const count = ()=>{
	data.foo = data.foo.replace(/\r?\n/g,"");
	const val0 = R.split(" ")(data.foo);
	const val1 = R.countBy(R.identity)(val0);
	const val2 = R.toPairs(val1);
	const by1AryDescend = R.descend(R.prop(1));
	const val3 = R.sort(by1AryDescend, val2);
	const UNDER = N => N[1] <= Number(data.number1);
	const val4 = R.filter(UNDER, val3);
	const OVER = N => N[1] >= Number(data.number0);
	const val5 = R.filter(OVER, val4);
	data.qux = R.join("\n")(R.pluck(0)(val5));
	data.quux = R.join("\n")(R.pluck(1)(val5));
}`

console.log(
	txt
);




var aliceExcerpt = `const str = "foobarbaz";
let numberArray = [1,2,3,4];
		var keyConfig = () => {`

let regexpNames = /[const|let|var]\s(.+?)\s.+?\s/mig;
let match = regexpNames.exec(aliceExcerpt);

do {
	console.log(`Hello ${match[1]} ${match[2]}`);
} while ((match = regexpNames.exec(aliceExcerpt)) !== null);