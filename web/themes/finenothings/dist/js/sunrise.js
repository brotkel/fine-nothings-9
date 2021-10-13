/**
 * @file
 * Behaviors for the Filter Accordion.
 */
'use strict';

!function (Drupal, $) {
  /**
   * Setup and attach the Filter Accordion behaviors.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.sunrise = {
    attach: function attach(context) {
      var $sunrise = $('.sunrise', context);
      var $sunriseContainer = $('.sunriseContainer')[0];
      $(window).scroll(function () {
        var scroll = 100 * (($sunriseContainer.getBoundingClientRect().top - 100) / window.innerHeight);
        var position = Math.min(Math.max(parseInt(scroll * 4), 0), 100); //console.log($sunriseContainer.getBoundingClientRect().top);
        //console.log(`scroll ${scroll} pos ${position}`);

        $sunrise.css('transform', 'translateY(' + position + '%)');
      });
    }
  };
}(Drupal, jQuery);
//# sourceMappingURL=sunrise.js.map
