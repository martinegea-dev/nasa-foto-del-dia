$(document).ready(function() {
    var url = "https://api.nasa.gov/planetary/apod?api_key=KKUxMp0ijnUnc5eRhl0J9R6a4dhCuRt5hRopgkf2";

    $.getJSON(url, function(data) {
      var img = data.url;
      var desc = data.explanation;
      $('#nasa-img').attr('src', img);
      $('#nasa-desc').text(desc);
    });
  });