function namedArgumentFunc({
    foo = 'bar',
    baz = 200,
    qux = false
} = {}) {
    return `a=${foo}, b=${baz}, c=${qux}`;
}

for (let i = 0; i <= 100;i++){
randomNumber = require("faker").random.number();
randomWord = require('faker').random.word();
randomBoolean = require('faker').random.boolean();
res = `a=${randomNumber}, b=${randomWord}, c=${randomBoolean}`

require('assert').equal(
    namedArgumentFunc({
        foo: randomNumber,
        baz: randomWord,
        qux: randomBoolean,
    }),
    res,
    console.log("ok!")
)
}