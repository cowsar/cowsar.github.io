
/*
  Assign class to header
 */

(function() {
  var header, version;

  header = document.getElementsByClassName('js-header');

  version = Math.floor(Math.random() * 6) + 1;

  header[0].className += ' header' + version;

}).call(this);

//# sourceMappingURL=header.js.map
