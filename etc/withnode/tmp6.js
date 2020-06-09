// ({
// 	"plugins": ["jsdom-quokka-plugin"],
// })

const R = require(`ramda`);



const foo = `const str = "foobarbaz";
const numberArray = [1,2,3,4];
		const keyConfig = () => {
			window.addEventListener("keydown", function (event) {
			if (event.defaultPrevented) {
				return; // Do nothing if the event was already processed
			}
				switch (event.key) {
				case "5":
					document.querySelector('#start').click()
				break;
				case "1":
					document.querySelector('#previous').click()
				break;
				case "2":
					document.querySelector('#minibackward').click()
				break;
				case "3":
					document.querySelector('#miniforward').click()
				break;
				case "4":
					document.querySelector('#next').click()
				break;
				case "h":
					document.querySelector('#position').value = 50;
					position();
				break;
				case "Enter":
				default:
				}
			// Cancel the default action to avoid it being handled twice
			event.preventDefault();
			}, true);
		};`

let bar="";

const lexicalGrammar = `break
case
catch
continue
debugger
default
delete
do
else
finally
for
function
if
in
instanceof
new
return
switch
this
throw
try
typeof
var
void
while
with
class
enum
export
extends
import
super
implements
interface
let
package
private
protected
public
static
yield
null
true
false`

// const replaceText1 = (STR) => {
// 	// data.bar = R.replace(new RegExp( STR ,"g" ), '**************', data.bar) 
// 	const TARGETTEXT = foo;
// 	let REG = new RegExp("(" + STR + "?)", "gi");
// 	// let REG = /(const|let|var)\s(.+?)\s/gi;
// 	let MATCH = REG.exec(TARGETTEXT);
// 	do {
// 		// bar = R.replace(new RegExp( MATCH[0] ), `<B>${ MATCH[0] }</B>`, bar)
// 		// bar = R.replace(new RegExp(MATCH[1]), `<B>${MATCH[1]}</B>`, bar)
// 		console.log( MATCH[0] )
// 	} while ((MATCH = REG.exec(TARGETTEXT)) !== null);
// };
// lexicalGrammar.split("\n").forEach(V => { replaceText1(V) });

bar = foo;
const TARGETTEXT = foo;
let REG = /(const)/gi;
let MATCH = REG.exec(TARGETTEXT);
do {
	bar = R.replace(new RegExp(MATCH[1]), `<B>${MATCH[1]}</B>`, bar);
	// console.log(MATCH[0])
	console.log(bar);
} while ((MATCH = REG.exec(TARGETTEXT)) !== null);