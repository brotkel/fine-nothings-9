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
  Drupal.behaviors.accordion = {
    attach: function attach(context) {
      var self = this;
      var $accordions = $('.accordion', context);
      $accordions.each(function () {
        var $accordion = $(this); // Attach click handler for accordion.

        var $toggle = $accordion.find('.accordion__toggle');
        $toggle.on('click', function () {
          self.toggleClickEvent($accordion, $(this));
        });
      });
    },
    toggleClickEvent: function toggleClickEvent($accordion, $toggle) {
      // Identify the matching element.
      var $content = $accordion.find('#' + $toggle.attr('aria-controls'));

      if (!$accordion.hasClass('open')) {
        // Accordion does not have `.open`, so we are opening the accordion.
        $accordion.addClass('open'); // Toggle the `aria-expanded`.

        $toggle.attr('aria-expanded', 'true'); // Toggle the `aria-hidden` attribute on the content.

        $content.attr('aria-hidden', 'false');
      } else {
        // Same as the if, but in reverse.
        $accordion.removeClass('open');
        $toggle.attr('aria-expanded', 'false');
        $content.attr('aria-hidden', 'true');
      }
    }
  };
}(Drupal, jQuery);
//# sourceMappingURL=accordion.js.map

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
