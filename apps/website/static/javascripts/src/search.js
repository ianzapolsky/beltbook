/**
 * Search module for the Belt Book
 * by Ian Zapolsky
 */

(function() {

  var search = {

    init: function() {
      this.initializeElements();
      this.requestAllSongs();
      this.bindEvents();
    },
 
    /**
     * Cache DOM elements
     */
    initializeElements: function() {
      this.$button        = $('#search');
      this.$tempo         = $('#tempo');
      this.$tessitura     = $('#tessitura');
      this.$songStyle     = $('#songStyle');
      this.$gender        = $('#gender');
      this.$characterType = $('#characterType');
      this.$timePeriod    = $('#timePeriod');
      this.$resultsTable  = $('#results');
      this.$lengthHeader  = $('#length');
      this.resultsHeight  = this.$lengthHeader.offset().top;
    },

    /**
     * Request all songs from backend
     */
    requestAllSongs: function() {
      var url = '/songs';
      var _this = this;
      $.ajax({
        url: url,
        dataType: 'json', 
        success: function(data) {
          _this.songs = data;
        }
      });
    },

    /**
     * Bind the search button
     */
    bindEvents: function() {
      this.$button.on('click', $.proxy(this.handleSearch, this));
    },

    /**
     * Scrape form data, return filtered list of songs
     */
    handleSearch: function() {
      this.scrapeForm();
      var songlist = [];
      for (var i = 0; i < this.songs.length; i++) {
        if (this.isValidResult(this.songs[i])) {
          songlist.push(this.songs[i]);
        }
      }
      $('html, body').animate({scrollTop:this.resultsHeight}, '500', 'swing');
      this.renderData(songlist);
    },
  
    /**
     * Scrape search form
     */
    scrapeForm: function() {
      this.tempo = this.$tempo.val() === '- - - -' ? null : this.$tempo.val();
      this.tessitura = this.$tessitura.val() === '- - - -' ? null : this.$tessitura.val();
      this.songStyle = this.$songStyle.val() === '- - - -' ? null : this.$songStyle.val();
      this.gender = this.$gender.val() === '- - - -' ? null : this.$gender.val();
      this.characterType = this.$characterType.val() === '- - - -' ? null : this.$characterType.val();
      this.timePeriod = this.$timePeriod.val() === '- - - -' ? null : this.$timePeriod.val();
    },

    /**
     * Filter songs based on search
     */
    isValidResult: function(song) {
      if ((!this.tempo         || this.tempo === song.tempo) &&
          (!this.tessitura     || this.tessitura === song.tessitura) &&
          (!this.songStyle     || this.songStyle === song.song_style) &&
          (!this.gender        || song.gender.indexOf(this.gender) !== -1) && 
          (!this.characterType || song.character_type.indexOf(this.characterType) !== -1) && 
          (!this.timePeriod    || this.timePeriod === song.pre_post)) {
        return true;
      } else {
        return false;
      }
    },
    
    /**
     * Render a list of songs to the DOM
     */
    renderData: function(data) {
 
      var tableHeader = '<tr><th>Title</th><th>Show</th><th>Composer</th><th>Style</th></tr>';
      this.$resultsTable.html('').append(tableHeader);
      this.$lengthHeader.text('Showing ' + data.length + ' results');

      for (var i = 0; i < data.length; i++) {
        var songLink = '/songs/' + data[i].id;
        var songRow = document.createElement('tr');
        var songTitle = document.createElement('td');
        songTitle.appendChild(document.createElement('a'));
        songTitle.firstChild.href = songLink;
        songTitle.firstChild.innerHTML = data[i].title;
        var songShow = document.createElement('td');
        songShow.innerHTML = data[i].show;
        var songComposer = document.createElement('td');
        songComposer.innerHTML = data[i].composer;
        var songStyle = document.createElement('td');
        songStyle.innerHTML = data[i].song_style;

        songRow.appendChild(songTitle);
        songRow.appendChild(songShow);
        songRow.appendChild(songComposer);
        songRow.appendChild(songStyle);
        this.$resultsTable.find('tbody').append(songRow);
      }
    },
  }

  $(document).ready(function() {
    search.init();
  });

})();



