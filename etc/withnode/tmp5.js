// ({
// 	"plugins": ["jsdom-quokka-plugin"],
// })

const R = require(`ramda`);

console.log(1);
const foo = `a
b
c
`;

R.split("\n")(foo)