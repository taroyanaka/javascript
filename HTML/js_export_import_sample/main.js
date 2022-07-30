// IMPORTANT:
// - Must preface relative file paths with / or ./ etc
// - Must include the .js at end of the file name
// - Must surround named imports with { }



import {helper} from "./helper.js"; 
import {return_foo} from "./helper.js"; 

helper("This works! in main.js");
document.querySelector("h1.main_js").textContent = return_foo() + " in main.js";