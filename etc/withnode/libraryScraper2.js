// let hoge = require('./hoge');
// for(let i of require('./hoge').ary){
//     console.log(i)
// };

require('./hoge').ary
.filter(V=>{
    // /一覧/.test(V);
    return ( V.match(/^[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]+$/) )? true : false
})
.map(V=>{
    console.log(V);
})