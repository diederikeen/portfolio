var SetImageScroll = function(){
	'use strict';
	var buttons;

	var _init = function(){
		buttons = document.getElementsByClassName('m-project-section__button');

		[].map.call(buttons, function(button){
			button.addEventListener('click', _makeImageScrollable);
		});
	};

	var _makeImageScrollable = function(e){
		var button = e.currentTarget;
		button.classList.add('hidden');
		button.parentNode.classList.add('scrollable');
	};

	return {
		init: _init
	}
}();

SetImageScroll.init();