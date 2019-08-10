({
	"plugins": ["jsdom-quokka-plugin"],
	"jsdom": {
		"file": "./wordcounterwithramdajs.html"
	}
})

const R = require(`ramda`);










let text, V1, V2, V3, V4, V5, V6, V7, V8;

async function appendDOM() {



text = await `The Moon and Sixpence`

V1 = await R.pipe(R.split(' '),R.countBy(R.toLower),R.toPairs,R.sortBy(R.prop(1)),R.reverse)(window.document.getElementById('id_textBox1').value);


V2 = await R.splitEvery(parseInt(document.querySelector("input#wordNumber").value, 10), V1);

FN1 = x => `${x}`;

FN2_1 = (ARG1) => R.pipe(R.map(R.toString), R.map(FN1), R.take(3) ,R.join(''))(ARG1);
FN2_2 = (ARG1) => R.pipe(R.map(R.toString), R.map(FN1), R.take(3) ,R.join(''))(ARG1);
FN2_3 = (ARG1) => R.pipe(R.map(R.toString), R.map(FN1), R.join(''))(ARG1);



const FN2_4 = (VAL, KEY, OBJ) => `<div value="${KEY}" id="result" data-id="${KEY}" onclick="FN2_5(event);FN2_6(event);FN2_7(event);" >${KEY}</div>`;

let V3_2 = R.pipe(R.mapObjIndexed(FN2_4),R.toPairs,R.pluck(1),R.join(''))(V2);


FN2_5 = (event) => {if(document.querySelector("#id_textBox2")){document.querySelector("#id_textBox2").outerHTML = ''}};
FN2_6 = (event) => FN3(event.target.dataset.id);
FN2_7 = () => { if(document.querySelectorAll("#tmp1")){ document.querySelectorAll("#tmp1").forEach(E=>{ E.parentNode.removeChild(E) }) } }






FN3 = (KEY) => document.querySelector('#id_form1').insertAdjacentHTML(`afterend`, `<textarea name="textBox1" id="id_textBox2" cols="30" rows="30">${R.pipe(R.pluck(0), R.map(R.toString), R.join('\n'), R.replace(/"/g, ''))(V2[KEY])}</textarea>`);



await document.querySelector('#id_form1').insertAdjacentHTML(`afterend`, V3_2);
}





// V5 = R.pipe(R.split('\n'), R.join(','), R.toString)(V4)
// // V5 = R.pipe(R.split('\n'), R.join(','), R.toString)(document.querySelector("#id_textBox2").value)
// V5
// V6 = R.pipe(R.split(','))(`Hello, good evening`);
// V6
// const FN5 = (ARG1) => R.pipe(R.split('\n'), R.join(','), R.toString, R.replace(/"/g, ''))(ARG1);
// V7 = FN5(V4);
// V7

// "と、そして、と、と、と、と、と、彼と彼女と持っています、上に、として、そこ、私、あなたによっていつ、から、これ、または、のような、でありますかなし"

// // fetch(`https://script.google.com/macros/s/AKfycbwLghJ0537cr8vgBZamkBOnmhpn6zDhHTMYCSD_iw/exec?text=${FN5(document.querySelector("#id_textBox2").value)}&source=en&target=ja`).then(v => { return v.text() }).then(translatedText => { console.log(translatedText) });


// let foo = JSON.parse(decodeURIComponent("%5B%22the%22%2C%22of%22%2C%22and%22%2C%22to%22%2C%22a%22%2C%22i%22%2C%22in%22%5D"))
// foo
// let hoge = encodeURIComponent(JSON.stringify(V4.split(`\n`)))
// hoge









V4 = `the
of
and
to
a
i
in
was
that
it
with
had
is
his
her
she
but
which
they
not
their
he
my
for
an
have
on
as
there
me
you
by
be
strickland
were
mrs.
no
at
has
one
more
so
them
all
if
than
him
we
who
very
when
from
this
or
like
been
are
do
would
little
think
about
charles
could
only
life
strickland's
some
should
will
never
because
such
those
see
nothing
he's
asked
felt
did
seemed
can
too
into
make
what
much
then
come
gave
most
rather
out
waterford
thought
day
just
woman
small
might`

const FN5 = (ARG1) => R.pipe(R.split('\n'), R.join(','), R.toString, R.replace(/"/g, ''))(ARG1);
let paramArray = FN5(V4).split(',');
paramArray
paramArray = encodeURIComponent(JSON.stringify(paramArray))
paramArray

paramArray = JSON.parse(decodeURIComponent(paramArray)).join(`\\n`);
paramArray

let URL = `https://us-south.functions.cloud.ibm.com/api/v1/web/ababbbccc%40gmail.com_dev/command-js/helloworld.json?text=${ encodeURIComponent(JSON.stringify( paramArray )) }`;
let result;
fetch(URL).then(v => { return v.text() }).then(translatedText => { result = translatedText });

JSON.parse(JSON.parse(result)["result"])["translations"].map(V => { return V["translation"] })[0].split(`\n`)
















const V4 = `the
of
and
to
a
i
in
was
that
it
with
had
is
his
her
she
but
which
they
not
their
he
my
for
an
have
on
as
there
me
you
by
be
strickland
were
mrs.
no
at
has
one
more
so
them
all
if
than
him
we
who
very
when
from
this
or
like
been
are
do
would
little
think
about
charles
could
only
life
strickland's
some
should
will
never
because
such
those
see
nothing
he's
asked
felt
did
seemed
can
too
into
make
what
much
then
come
gave
most
rather
out
waterford
thought
day
just
woman
small
might`

	let V5 = V4.split(`\n`);
	V5

const script = `curl -X POST -u "apikey:oaZfF10o2nnc0SOWdwRRerLXO4f1DWMBke7RZm9F_7KR" --header "Content-Type: application/json" --data '{"text": ["Hello, world! ", "How are you?"], "model_id":"en-ja"}' "https://gateway.watsonplatform.net/language-translator/api/v3/translate?version=2018-05-01"`;

// let V6 = '{"greeting": "{\n  \"translations\" : [ {\n    \"translation\" : \"こんにちは、世界! \"\n  }, {\n    \"translation\" : \"調子はどう?\"\n  } ],\n  \"word_count\" : 5,\n  \"character_count\" : 26\n}"}'


let URL = `https://us-south.functions.cloud.ibm.com/api/v1/web/ababbbccc%40gmail.com_dev/command-js/helloworld.json?text=taro`;
let result;
// fetch(URL).then(v => { return v.text() }).then(translatedText => { result = translatedText });
result = '{
  "result": "{\n  \"translations\" : [ {\n    \"translation\" : \"その\"\n  }, {\n    \"translation\" : \"(1)\"\n  } ],\n  \"word_count\" : 2,\n  \"character_count\" : 5\n}"
}'
const FN9 = (VAL,INDEX) => console.log(VAL[INDEX]["translation"]);
R.forEachObjIndexed(FN9, JSON.parse(JSON.parse(result)["result"])["translations"] );





const FN8 = (VAL, INDEX) => console.log(`VAL ${VAL}   INDEX${INDEX}`)

const printKeyConcatValue = (value, key) => console.log(key + ':' + value);
R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
// logs x:1
// logs y:2


curl - X POST - u "apikey:oaZfF10o2nnc0SOWdwRRerLXO4f1DWMBke7RZm9F_7KR" --header "Content-Type: application/json" --data '{"text": ["hey" "hello"], "model_id":"en-ja"}' "https://gateway.watsonplatform.net/language-translator/api/v3/translate?version=2018-05-01"

curl - X POST - u "apikey:oaZfF10o2nnc0SOWdwRRerLXO4f1DWMBke7RZm9F_7KR" --header "Content-Type: application/json" --data "{"\text\": [\hey\\nhello\], \"model_id\":\"en-ja\"}" "https://gateway.watsonplatform.net/language-translator/api/v3/translate?version=2018-05-01"




// /////// client side JS
// //// fetch
// let URL = `https://us-south.functions.cloud.ibm.com/api/v1/web/ababbbccc%40gmail.com_dev/command-js/helloworld.json?text=${ encodeURIComponent(JSON.stringify( ["the", "of", "and", "to", "a", "i", "in", "was", "that", "it"] )) }`;
// let result;
// fetch(URL).then(v => { return v.text() }).then(translatedText => { result = translatedText });
// //// and parse
// JSON.parse(JSON.parse(result)["result"])["translations"].map(V => { return V["translation"] })[0].split(`\n`) 
// /////////













/**
  *
  * main() will be invoked when you Run This Action.
  *
  * @param Cloud Functions actions accept a single parameter,
  *        which must be a JSON object.
  *
  * In this case, the params variable will look like:
  *     { "name": "xxxx" }
  *
  * @return which must be a JSON object.
  *         It will be the output of this action.
  *
  */
function main(params) {
  //if (params.text) {
//    return { greeting: `Hello ${params.text}` };
//  }
  
const V4 = `the
of
and
to
a
i
in
was
that
it
with
had
is
his
her
she
but
which
they
not
their
he
my
for
an
have
on
as
there
me
you
by
be
strickland
were
mrs.
no
at
has
one
more
so
them
all
if
than
him
we
who
very
when
from
this
or
like
been
are
do
would
little
think
about
charles
could
only
life
strickland's
some
should
will
never
because
such
those
see
nothing
he's
asked
felt
did
seemed
can
too
into
make
what
much
then
come
gave
most
rather
out
waterford
thought
day
just
woman
small
might`
	let V5 = V4.split(`\n`);

  
//const execSync = require('child_process').execSync;
//const result = execSync('ls -la ./').toString();
// console.log(result);
//const script = `curl -X POST -u "apikey:oaZfF10o2nnc0SOWdwRRerLXO4f1DWMBke7RZm9F_7KR" --header "Content-Type: application/json" --data '{\"text\": [\"Hello, world! \", \"How are you?\"], \"model_id\":\"en-ja\"}' "https://gateway.watsonplatform.net/language-translator/api/v3/translate?version=2018-05-01"`;
const script = `curl -X POST -u "apikey:oaZfF10o2nnc0SOWdwRRerLXO4f1DWMBke7RZm9F_7KR" --header "Content-Type: application/json" --data '{\"text\": [\"${V5[0]}", \"${V5[1]}\"], \"model_id\":\"en-ja\"}' "https://gateway.watsonplatform.net/language-translator/api/v3/translate?version=2018-05-01"`;
  return { result: require('child_process').execSync(script).toString() };

    //return require('child_process').execSync(script).toString();
}

exports.main = main;






























const execSync = require('child_process').execSync;
// const script = `curl -X POST -u "apikey:oaZfF10o2nnc0SOWdwRRerLXO4f1DWMBke7RZm9F_7KR" --header "Content-Type: application/json" --data "{\"text\": [\"Hello, world! \", \"How are you?\"], \"model_id\":\"en-ja\"}" "https://gateway.watsonplatform.net/language-translator/api/v3/translate?version=2018-05-01"`;
const script = `curl -X POST -u "apikey:oaZfF10o2nnc0SOWdwRRerLXO4f1DWMBke7RZm9F_7KR" --header "Content-Type: application/json" --data '{\"text\": [\"Hello, world! \", \"How are you?\"], \"model_id\":\"en-ja\"}' "https://gateway.watsonplatform.net/language-translator/api/v3/translate?version=2018-05-01"`;
// const result = execSync(`curl -u "456b320e-62ee-41c9-8ad2-6d66890cebb3:3Rxb5viCGOIqJR0FScuzb6NyB4xWxEOr00vtv2eKwT5vAWCZIBRSUSoX7IEQzdKy" -X POST "https://us-south.functions.cloud.ibm.com/api/v1/namespaces/ababbbccc%40gmail.com_dev/actions/hello-world/helloworld?blocking=true"`).toString();
const result = execSync(script).toString();
console.log(result);






const V4 = `the,of,and,to,a,i,in,was,that,it,with,had,is,his,her,she,but,which,they,not,their,he,my,for,an,have,on,as,there,me,you,by,be,strickland,were,mrs.,no,at,has,one,more,so,them,all,if,than,him,we,who,very,when,from,this,or,like,been,are,do,would,little,think,about,charles,could,only,life,strickland's,some,should,will,never,because,such,those,see,nothing,he's,asked,felt,did,seemed,can,too,into,make,what,much,then,come,gave,most,rather,out,waterford,thought,day,just,woman,small,might`,










let URL = `https://us-south.functions.cloud.ibm.com/api/v1/web/ababbbccc%40gmail.com_dev/command-js/helloworld.json?text=taro`;
let result;
fetch(URL).then(v => { return v.text() }).then(translatedText => { result = translatedText });

JSON.parse(JSON.parse(result)["result"])["translations"].map(V => { return V["translation"] })[0].split(`\n`)


copy(encodeURIComponent(JSON.stringify(['the', 'of', 'and', 'to', 'a', 'i', 'in'])))

JSON.parse(decodeURIComponent("%5B%22the%22%2C%22of%22%2C%22and%22%2C%22to%22%2C%22a%22%2C%22i%22%2C%22in%22%5D"))