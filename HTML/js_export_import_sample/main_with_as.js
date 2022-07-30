import * as fn from './helper.js'

fn.helper("This works! in main_with_as.js");
document.querySelector("h1.main_with_as_js").textContent = fn.return_foo() + " in main_with_as.js";