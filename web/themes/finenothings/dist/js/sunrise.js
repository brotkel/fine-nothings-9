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

      var setPos = function setPos() {
        var scroll = 100 * (($sunriseContainer.getBoundingClientRect().top - (Math.max(window.innerHeight / 3), 250)) / window.innerHeight);
        var position = Math.min(Math.max(parseInt(scroll * 5), 0), 100);
        $sunrise.css('transform', 'translateY(' + position + '%)');
      };

      $(window).scroll(function () {
        setPos();
      });
    }
  };
}(Drupal, jQuery);
//# sourceMappingURL=sunrise.js.map
