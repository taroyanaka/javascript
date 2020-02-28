({
	"plugins": ["jsdom-quokka-plugin"],
})

const R = require(`ramda`);

const moment = require(`moment`);
moment()
// moment("2018-02-04T14:12:57.506")
moment().year()
// 2018
moment().month()
// 1 ← 1月が0なので注意
moment().date()
// 4 ← dayだと曜日番号になるので注意
moment().day()
// 0 ← 日曜日が0
moment().hour()
moment().minutes()
moment().second()

let nowMoment = moment().toDate();
// new Date();
console.log(nowMoment);
console.log(nowMoment.toString());
console.log(moment());
console.log(new Date());

// const format = require('date-fns/format');
// console.log(
//   format(new Date(2017, 6), 'mm/dd')
// );

