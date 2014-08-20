/**
 * Display logic for the Belt Book
 * by Ian Zapolsky
 */

(function() {

  var display = {

    init: function() {
      this.initializeElements();
      this.initializeTooltips();
      this.startMarketingCycle();
    },

    /**
     * Cache DOM elements
     */
    initializeElements: function() {
      this.$adjectives = $('#adjectives');
    },

    /**
     * Generate markup for tooltips with bootstrap.js
     */
    initializeTooltips: function() {
      $('h1').tooltip();
    },

    /**
     * Swap out adjectives every 2 seconds
     */
    startMarketingCycle: function() {
      this.adjectives = ['fun', 'awesome', 'big', 'deep', 'powerful', 'revolutionary', 'musical'];
      var index = 0;
      var adjectiveTimer = setInterval(function() {
        this.$adjectives.animate({opacity: 0}, 200, function() {
          this.$adjectives.text(this.adjectives[index]);
          index += 1;
          if (index === this.adjectives.length) {
            index = 0;
          }
          this.$adjectives.animate({opacity: 1}, 200);
        }.bind(this));
      }.bind(this), 2000);
    }

  }

  $(document).ready(function() {
    display.init();
  });

})();



