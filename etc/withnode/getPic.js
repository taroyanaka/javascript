const { JSDOM } = require('jsdom')
const jsdom = require("jsdom");
const R = require("ramda");

// const resourceLoader = new jsdom.ResourceLoader({
//     proxy: `http://${process.env.PROXYIDPASS}@${process.env.PROXYHOST}`
// });


let URL = "https://pixabay.com/ja/images/search/%E5%AD%90%E7%8C%AB/?pagi="
let numberArray = R.range(1, 72);

const getURL = (pageID) => {
	JSDOM.fromURL(URL+pageID).then(dom => {
		console.log(
			dom.window.document.querySelectorAll("#content > div > div > div > div.flex_grid.credits.search_results > div > a > img").forEach(V=>{console.log(V.src)})
		);
	})
}

numberArray.forEach(V => {
	getURL(V);
});