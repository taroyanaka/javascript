var HERE = `
[1,2,3]
map *2
map *2
map *2
filter ==16`

var REPLACEDHERE = HERE.replace(/ /gm,"(v=>v").replace(/map/gm,".map").replace(/filter/gm,".filter").replace(/^\..*$/g,")").replace(/$/g,")")
var SPLITED = REPLACEDHERE.split(/\n/)
var MIDDLE = SPLITED.filter(v=>v).filter(v=>v.match(/[^)]$/)).filter(v=>v.match(/=>/)).map(v=>v+")").join('')
var CODE = SPLITED[1]+MIDDLE+SPLITED.slice(-1)[0]

document.write(CODE)
document.write( Function('"use strict";return (' + CODE + ')')() )
