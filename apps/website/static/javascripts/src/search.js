/**
 * Search module for the Belt Book
 * by Ian Zapolsky
 */


(function() {

  var search = {

    init: function() {
      var _this = this;
      
      $(document).ready(function() {
        _this.initializeElements();
        _this.bindEvents();
      });
    },
 
    initializeElements: function() {
      this.$button = $('#search');
      this.$tempo = $('#tempo');
      this.$tessitura = $('#tessitura');
      this.$songStyle = $('#songStyle');
      this.$gender = $('#gender');
      this.$characterType = $('#characterType');
      this.$timePeriod = $('#timePeriod');
    },


    bindEvents: function() {
      this.$button.on('click', $.proxy(this.sendRequest, this));
    },
        
    buildURL: function() {
      this.scrapeForm();
      var url = '/songs/search?tempo=' + this.tempo + '&' +
                'tessitura=' + this.tessitura + '&' +
                'songStyle=' + this.songStyle + '&' +
                'gender=' + this.gender + '&' +
                'characterType=' + this.characterType + '&' +
                'timePeriod=' + this.timePeriod;
      return url;
    },
      
    scrapeForm: function() {
      this.tempo = this.$tempo.val() === '- - - -' ? '' : this.$tempo.val();
      this.tessitura = this.$tessitura.val() === '- - - -' ? '' : this.$tessitura.val();
      this.songStyle = this.$songStyle.val() === '- - - -' ? '' : this.$songStyle.val();
      this.gender = this.$gender.val() === '- - - -' ? '' : this.$gender.val();
      this.characterType = this.$characterType.val() === '- - - -' ? '' : this.$characterType.val();
      this.timePeriod = this.$timePeriod.val() === '- - - -' ? '' : this.$timePeriod.val();
    },

    sendRequest: function() {
      var url = this.buildURL();
      var _this = this;
      $.ajax({
        url: url,
        dataType: 'json', 
        success: function(data) {
          _this.renderData(data);
        }
      });
    },

    renderData: function(initData) {
      
      var results = document.querySelector('.results');
      results.innerHTML = '';
      for (var i = 0; i < initData.length; i++) {

        var song = document.createElement('li');
        var songDetail = document.createElement('p');
        songDetail.innerHTML = initData[i].title;
        song.appendChild(songDetail);
        results.appendChild(song);
      }

    },

  }

  search.init();

})();



