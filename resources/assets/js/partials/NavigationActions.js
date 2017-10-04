var NavigationActions = function(){

  var body;
  var button;

  var _init = function(){
    body = document.body;
    button = document.getElementById('toggleNav');
    button.addEventListener('click', _toggleNav);
  }

  var _toggleNav = function(){
    body.classList.toggle('is-mobile-open');
  };



  return {
    init: _init
  }
}();

if (document.getElementById('toggleNav')) {
  NavigationActions.init();
}
