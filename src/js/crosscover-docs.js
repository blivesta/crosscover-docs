var $ = require('jquery');
var crosscover = require('crosscover');

(function() {

    $(".crosscover").crosscover({
      animateInClass:'fadeInDown',
      animateOutClass:'zoomOut',
    });

    // $('.next').on('click', function(){
    //   $('.crosscover').crosscover('toggle', $('.crosscover').children('.crosscover-list').children('li'), 'next');
    // });

})();
