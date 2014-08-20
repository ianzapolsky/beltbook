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

    initializeSVG: function() {
      this.drawEasy();  
      this.drawFast();
      this.drawHelpful();
    },

    drawEasy: function() {
      var draw = SVG('easy-svg');
      var rawSVG = '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 16.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256S114.615,512,256,512z M256,48 c114.875,0,208,93.125,208,208s-93.125,208-208,208S48,370.875,48,256S141.125,48,256,48z M256,299.38	c57.975,0,113.115-15.403,160-42.46C408.713,346.139,339.436,416,256,416c-83.434,0-152.711-69.936-160-159.152	C142.885,283.904,198.025,299.38,256,299.38z M128,176c0,26.51,14.327,48,32,48s32-21.49,32-48s-14.327-48-32-48S128,149.49,128,176	z M320,176c0,26.51,14.327,48,32,48s32-21.49,32-48s-14.327-48-32-48S320,149.49,320,176z"/></svg>';
      var icon = draw.svg(rawSVG);
    },

    drawFast: function() {
      var draw = SVG('fast-svg');
      var circle = draw.ellipse(80,80).attr({
        fill: '#fff',
        stroke: '#000',
        'stroke-width': 2
      });
      circle.move(20, 10);
    },

    drawHelpful: function() {
      var draw = SVG('helpful-svg');
      var circle = draw.ellipse(80,80).attr({
        fill: '#fff',
        stroke: '#000',
        'stroke-width': 2
      });
      circle.move(20, 10);
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



