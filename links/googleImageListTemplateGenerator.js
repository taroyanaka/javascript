const getLines = (event) =>{
	const NAMES = event.target.value;
	// NAMES = `Nadir Afonso
	// Yaacov Agam
	// Larry Zox
	// Jan Zrzavý`
	const HEADER = `<div><a href="https://www.google.com/search?q=`
	const FOOTER = `&tbm=isch">`
	const ATAG = `</a></div>\n`
	const URLS = R.pipe(R.split('\n'), R.map(R.replace(/ /g, '+')), R.map(R.replace(/^/g, HEADER)), R.map(R.replace(/$/g, FOOTER)))(NAMES);
	const ALLNAMES = R.pipe(R.split('\n'), R.map(R.replace(/$/g, ATAG)))(NAMES);
	const URLSWITHNAMES = R.pipe(R.transpose, R.flatten, R.join(""))([URLS, ALLNAMES])
	document.querySelector("#bar").value = `<!DOCTYPE html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8">
		<script src="//cdnjs.cloudflare.com/ajax/libs/ramda/0.26.1/ramda.min.js"></script>
		<title></title>
	</head>
<body>
	<button onclick="openTab();">If you allow pop-ups, you can open all tabs with this button</button>
	<script type="text/javascript">
	function openTab(){
	const NAMES = \`${NAMES}\`
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
};