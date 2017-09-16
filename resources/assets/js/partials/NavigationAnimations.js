var NavigationAnimations = function(){

  var navigation;
  var items;

  var _init = function(){
    navigation = document.getElementById('mobileNav');
    items = navigation.getElementsByClassName('m-mobile-nav__item');

    _addDelays(items);
  }


  var _addDelays = function(items){

    [].map.call(items, function(item, i){
      item.style.transitionDelay = '0.'+i+'s';
    })
  }

  return {
    init: _init
  }
}();

NavigationAnimations.init();
