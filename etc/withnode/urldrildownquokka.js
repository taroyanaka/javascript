({
	// "plugins": ["jsdom-quokka-plugin"],
	"jsdom": {
		"file": "../urldrilldown.html"
	}
})

const R = require(`ramda`);

const text = `The Moon and Sixpence


Chapter I
I confess that when first I made acquaintance with Charles Strickland I never for a moment discerned that there was in him anything out of the ordinary. Yet now few will be found to deny his greatness. I do not speak of that greatness which is achieved by the fortunate politician or the successful soldier; that is a quality which belongs to the place he occupies rather than to the man; and a change of circumstances reduces it to very discreet proportions. The Prime Minister out of office is seen, too often, to have been but a pompous rhetorician, and the General without an army is but the tame hero of a market town. The greatness of Charles Strickland was authentic. It may be that you do not like his art, but at all events you can hardly refuse it the tribute of your interest. He disturbs and arrests. The time has passed when he was an object of ridicule, and it is no longer a mark of eccentricity to defend or of perversity to extol him. His faults are accepted as the necessary complement to his merits. It is still possible to discuss his place in art, and the adulation of his admirers is perhaps no less capricious than the disparagement of his detractors; but one thing can never be doubtful, and that is that he had genius. To my mind the most interesting thing in art is the personality of the artist; and if that is singular, I am willing to excuse a thousand faults. I suppose Velasquez was a better painter than El Greco, but custom stales one's admiration for him: the Cretan, sensual and tragic, proffers the mystery of his soul like a standing sacrifice. The artist, painter, poet, or musician, by his decoration, sublime or beautiful, satisfies the aesthetic sense; but that is akin to the sexual instinct, and shares its barbarity: he lays before you also the greater gift of himself. To pursue his secret has something of the fascination of a detective story. It is a riddle which shares with the universe the merit of having no answer. The most insignificant of Strickland's works suggests a personality which is strange, tormented, and complex; and it is this surely which prevents even those who do not like his pictures from being indifferent to them; it is this which has excited so curious an interest in his life and character.`;

// console.log(window.document.querySelector(`body > h1`).textContent)
const getURLSParam = () => {return window.document.querySelector("textarea#foo").value.split("\n").filter(V => {return V !== ""}).map(V => {return encodeURIComponent(V)}).join(",")};
// h1.addEventListener('click', () => { h1.textContent = encodeURIComponent(`https.*github\.io.+html`) })
const makeGetRequestParam = () => `?urlstr=` + getURLSParam() + `&regexpstr=` + encodeURIComponent(window.document.querySelector("input#regexp").value);
// console.log(makeGetRequestParam());
hoge = makeGetRequestParam();
hoge

let V1;
window.document.querySelector("#id_textBox1").value = text;
V1 = R.pipe(
R.split(' '),R.countBy(R.toLower),R.toPairs,R.sortBy(R.prop(1)),R.reverse,R.toString
)(window.document.getElementById('id_textBox1').value)

console.log(V1);








// const R = require(`./withnode/node_modules/ramda`);

// let allQuestion = []; //全部の問題(固定)
// const allQuestionReturn = () => ["foo", "bar", "foo", "taro"]; //全部の回答
// allQuestion = allQuestionReturn();

// let allAnswer = []; //重複なしソート済みの全部の回答(固定)
// const diff = function (a, b) {
// 	return a - b
// };
// const allAnswerReturn = () => R.sort(diff, R.uniq(allQuestion));
// allAnswer = allAnswerReturn();

// let question = "foo";
// let answer = "foo";
// // let answer = "bar";
// const allAnsweredReturn = (question, answer, allAnswered) => question === answer ? R.insert(-1, answer, allAnswered) : allAnswered;
// let allAnswered = []; //全部の正解済みの回答
// allAnswered = allAnsweredReturn(question, answer, allAnswered)
// console.log(allAnswered);
// question = "foo";
// // answer = "foo";
// answer = "bar";
// allAnswered = allAnsweredReturn(question, answer, allAnswered)
// console.log(allAnswered);

// let remainingQuestion = []; //全部の残り問題
// const remainingQuestionReturn = (allAnswered, remainingQuestion) => R.without(allAnswered, remainingQuestion);
// remainingQuestion = remainingQuestionReturn(allAnswered, allQuestion);
// console.log(remainingQuestion);


// let allIncorrectAnswer = []; //全部の不正解の回答
// const allIncorrectAnswerReturn = (question, answer, allIncorrectAnswer) => question !== answer ? R.insert(-1, answer, allIncorrectAnswer) : allIncorrectAnswer;
// console.log(allIncorrectAnswer = allIncorrectAnswerReturn(question, answer, allIncorrectAnswer));
