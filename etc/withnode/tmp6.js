// ({
// 	"plugins": ["jsdom-quokka-plugin"],
// })

const R = require(`ramda`);

const fillInTheBlank = (targetList,originalList) => {
	return R.map(X => { 
					return R.any(R.equals(X))(targetList) ? "************" : X
				})(originalList)
	
}

// fillInTheBlank([2,4],[1,2,3,4]) // => [ 1, '************', 3, '************' ] 





