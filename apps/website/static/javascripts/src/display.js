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
      this.startTestimonialCycle();
    },

    /**
     * Cache DOM elements
     */
    initializeElements: function() {
      this.$marketingCycle = $('#marketing-cycle');
      this.$testimonialCycle = $('#testimonial-cycle');
    },

    /**
     * Generate markup for tooltips with bootstrap.js
     */
    initializeTooltips: function() {
      $('h1').tooltip();
    },

    /**
     * Swap out marketing adjectives every 2 seconds
     */
    startMarketingCycle: function() {
      var words = ['fun', 'big', 'deep', 'powerful', 'musical', 'valuable', 'awesome'];
      var index = 0;
      var timer = setInterval(function() {
        this.$marketingCycle.animate({opacity: 0}, 200, function() {
          this.$marketingCycle.text(words[index]);
          index += 1;
          if (index === words.length) {
            clearInterval(timer);
          }
          this.$marketingCycle.animate({opacity: 1}, 200);
        }.bind(this));
      }.bind(this), 2000);
    },

    /**
     * Swap out testimonial verbs every 2 seconds
     */
    startTestimonialCycle: function() {
      var words = ['belting', 'crooning', 'crying', 'cooing', 'singing'];
      var index = 0;
      var timer = setInterval(function() {
        this.$testimonialCycle.animate({opacity: 0}, 200, function() {
          this.$testimonialCycle.text(words[index]);
          index += 1;
          if (index === words.length) {
            clearInterval(timer);
          }
          this.$testimonialCycle.animate({opacity: 1}, 200);
        }.bind(this));
      }.bind(this), 2000);
    }

  }

  $(document).ready(function() {
    display.init();
  });

})();



