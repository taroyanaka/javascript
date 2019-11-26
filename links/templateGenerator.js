const getLines = (event) =>{
let NAMES = event.target.value;



// NAMES = `Nadir Afonso
// Yaacov Agam
// Larry Zox
// Jan Zrzavý`


let HEADER = `<div><a href="https://www.google.com/search?q=`
let FOOTER = `&tbm=isch">`
let ATAG = `</a></div>\n`
let URLS = R.pipe(R.split('\n'), R.map(R.replace(/ /g, '+')), R.map(R.replace(/^/g, HEADER)), R.map(R.replace(/$/g, FOOTER)))(NAMES);
let ALLNAMES = R.pipe(R.split('\n'), R.map(R.replace(/$/g, ATAG)))(NAMES);
let URLSWITHNAMES = R.pipe(R.transpose, R.flatten, R.join(""))([URLS, ALLNAMES])
let DATA = `<!DOCTYPE html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8">
		<script src="//cdnjs.cloudflare.com/ajax/libs/ramda/0.26.1/ramda.min.js"></script>
		<title></title>
	</head>
<body>
	<button onclick="openTab();">If you allow pop-ups, you can open all tabs with this button</button>
	<script type="text/javascript">
	function openTab(){
let NAMES = \`${NAMES}\`

	const HEADER = \`https://www.google.com/search?q=\`
	const FOOTER = \`&tbm=isch\`
	const URLS = R.pipe(R.split('\\n'), R.map(R.replace(/ /g, '+')), R.map(R.replace(/^/g, HEADER)), R.map(R.replace(/$/g, FOOTER)))(NAMES);

	const allTabOpen = x => {
		window.open(x, '_blank');
	};
	R.forEach(allTabOpen,  URLS );
}
</script>
${URLSWITHNAMES}
</body>
</html>`
document.querySelector("#bar").value = DATA;

};