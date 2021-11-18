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

      const setPos = () => {
        const scroll =
          100 *
          (($sunriseContainer.getBoundingClientRect().top -
            (Math.max(window.innerHeight / 3), 250)) /
            window.innerHeight);
        const position = Math.min(Math.max(parseInt(scroll * 5), 0), 100);
        console.log(window.innerHeight / 4);
        console.log(`scroll ${scroll} pos ${position}`);
        $sunrise.css('transform', 'translateY(' + position + '%)');
      };

      $(window).scroll(function() {
        setPos();
      });
    }
  };
})(Drupal, jQuery);
