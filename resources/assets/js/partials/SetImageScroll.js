var SetImageScroll = function(){
	'use strict';
	var buttons;

	var _init = function(){
		buttons = document.getElementsByClassName('m-project-section__image');

		[].map.call(buttons, function(button){
			button.addEventListener('click', _makeImageScrollable);
		});
	};

	var _makeImageScrollable = function(e){
		e.currentTarget.parentNode.classList.toggle('scrollable');
	};

	return {
		init: _init
	}
}();

SetImageScroll.init();