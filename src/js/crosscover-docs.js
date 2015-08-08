var $ = require('jquery');
var imagesLoaded = require('imagesloaded');
var crosscover = require('crosscover');

var Docs = (function() {

  var $crosscover = $('.crosscover');
  var crosscoverLoad = imagesLoaded($crosscover);

  function isInit() {
    crosscoverLoad.on( 'always', crosscoverInit );
  }

  function crosscoverInit(instance) {
  	var randomIndex = Math.floor(Math.random() * 4) * 1;
    $(".crosscover").crosscover({
      startIndex: randomIndex,
      animateInClass:'zoomInUp',
      animateOutClass:'zoomOutUp'
    });
  }

  isInit();

  return {};
})();
