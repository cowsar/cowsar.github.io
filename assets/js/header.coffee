###
  Assign class to header
###

header = document.getElementsByClassName('js-header')
version = Math.floor(Math.random() * 6) + 1

header[0].className += ' header'+version
