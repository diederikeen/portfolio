var _inview = function(el, offset){
	if (offset === undefined) {
		offset = 0;
	}
  var rect = el.getBoundingClientRect();
  return (
      rect.top >= offset &&
      rect.left >= offset &&
      rect.bottom <= (window.innerHeight + el.clientHeight|| document.documentElement.clientHeight + el.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );

};

var obj = {
	inview: _inview
}


module.exports = obj;