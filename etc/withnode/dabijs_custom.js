// dabi.js
// fork from
// https://gist.github.com/plugnburn/f9d3acf33bee8f3f7e2d
// <input id="app" type="number">
// <script>
// var data = {foo:"",bar:""};
// DaBi('input#app', data, 'foo') // data-to-DOM binding example
// data.foo=100;
// </script>
!function(){
    function get(sel) {
		for (l = document.querySelectorAll(sel), i = 0; el = l[i++];) {
			return 'value' in el ? el.value : el.innerHTML
        }
    }
	function set(sel, val) {
		for (l = document.querySelectorAll(sel), i = 0; el = l[i++];) {
			if ('value' in el) {
				el.value = val
				if (el.tagName.toLowerCase() === 'select')
					Array.prototype.forEach.call(el.querySelectorAll('option'), function (opt) {
						opt.selected = (opt.value == val)
					})
			} else {
				el.innerHTML = val
			}
		}
    }
    // window.DaBi = function(sel, obj, prop, isEnum) {
    window.DaBi = function(sel, obj, prop) {
        Object.defineProperty(obj, prop, {
            get: function(){return get(sel)},
            set: function(val){set(sel, val)},
            configurable: true,
            enumerable: true
        })
    }
}()