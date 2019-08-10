({
	"plugins": ["jsdom-quokka-plugin"],
	"jsdom": {
		"file": "./autoPainter.html"
	}
})

const R = require(`ramda`);

let V1, V2, V3, V4, V5;

    const shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        let tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
      }
      return array
    }
	const randomRange = (from, to) => { return shuffleArray(R.range(from, to)) };
const randomRangeSelectFirst = (from, to) => { return R.head(shuffleArray(R.range(from, to))) };
		const fourColors = [randomRangeSelectFirst(0,255),randomRangeSelectFirst(0,255),randomRangeSelectFirst(0,255),randomRangeSelectFirst(0,255)];
fourColors
const fourColorsStr = R.join(',', fourColors);
fourColorsStr


