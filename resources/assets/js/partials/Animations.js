var _isInView = require('./Helpers').inview;

var Animations = function(){
	'use strict';
	var _window = document.getElementById('wrapper');
	var elements;

	var _init = function(){

		elements = document.getElementsByClassName('e-animate');

		[].map.call(elements, function(el){
			
			if (_isInView(el)) {
				el.style.transitionDelay = el.dataset.delay+'ms';
				el.classList.add('e-animate--done');
				_removeClass(el);
			}else{
				_window.addEventListener('scroll', _onScroll);
			}			
		});
	};

	var _removeClass = function(el){
		var delay = parseInt(el.dataset.delay);
		setTimeout(function(){
			el.classList.remove('e-animate', 'e-animate--done');
			el.removeAttribute('style');

		},delay + 1000);
	};

	var _onScroll = function(){
		
		[].map.call(elements, function(el){
			if (_isInView(el)) {
				el.classList.add('e-animate--done');
				_removeClass(el);
			}
		});
	};

	return {
		init: _init,
	}
}();

document.addEventListener("DOMContentLoaded", Animations.init);