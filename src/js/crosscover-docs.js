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
    $(".crosscover").crosscover({
      animateInClass:'fadeInDown',
      animateOutClass:'zoomOut'
    });
  }

  isInit();

  return {};
})();
