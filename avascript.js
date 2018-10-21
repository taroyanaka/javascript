var HERE = `
[1,2,3]
map *2
`

var REPLACEDHERE = HERE.replace(/ /g,"(v=>v").replace(/map/g,".map").replace(/filter/g,".filter").replace(/^\..*$/g,")").replace(/$/g,")")

document.write(REPLACEDHERE)
document.write( Function('"use strict";return (' + REPLACEDHERE + ')')() )

document.write( "\n" )

var HERE = `
[10,20,30]
filter ==20
`

var REPLACEDHERE = HERE.replace(/ /g,"(v=>v").replace(/map/g,".map").replace(/filter/g,".filter").replace(/^\..*$/g,")").replace(/$/g,")")

document.write(REPLACEDHERE)
document.write( Function('"use strict";return (' + REPLACEDHERE + ')')() )
