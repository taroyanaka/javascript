var DATA = `[1,2,3]`
var LOGICS = `map*2|filter==4|map*3`
var PARSABLELOGIC = LOGICS.split('|').map(v=>v.replace(/(map|filter)+/g,".$&(v=>v").replace(/$/g,")")).join('')

document.write( CODE=DATA+PARSABLELOGIC )
document.write( Function('"use strict";return (' + CODE + ')')() )
