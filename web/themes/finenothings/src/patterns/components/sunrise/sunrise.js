/**
 * @file
 * Behaviors for the Filter Accordion.
 */
'use strict';

!((Drupal, $) => {
  /**
   * Setup and attach the Filter Accordion behaviors.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.sunrise = {
    attach: function(context) {
      const $sunrise = $('.sunrise', context);
      const $sunriseContainer = $('.sunriseContainer')[0];

      $(window).scroll(function() {
        const scroll =
          100 *
          (($sunriseContainer.getBoundingClientRect().top - 100) /
            window.innerHeight);
        const position = Math.min(Math.max(parseInt(scroll * 4), 0), 100);
        //console.log($sunriseContainer.getBoundingClientRect().top);
        //console.log(`scroll ${scroll} pos ${position}`);
        $sunrise.css('transform', 'translateY(' + position + '%)');
      });
    }
  };
})(Drupal, jQuery);
