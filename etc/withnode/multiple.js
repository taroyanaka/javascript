onmessage = (event) => {
	postMessage(event.data.join(""));
};