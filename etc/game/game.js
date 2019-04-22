// import("../..//ramda.min.js")
// const R = require('../..//ramda.min.js');

import * as R from '../../ramda.min.js';
const printXPlusFive = x => console.log(x + 5);
R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
// logs 6
// logs 7
// logs 8