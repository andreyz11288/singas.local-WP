document.addEventListener('DOMContentLoaded', function () {
  var inner = document
    .getElementById('contact-section1')
    .getElementsByClassName('top-text')
  var inner1 = document
    .getElementById('contact-section1')
    .getElementsByClassName('contacts-bottom-block')
  var section2Img = document
    .getElementById('contact-section2')
    .getElementsByClassName('top-text')
  var section2scetch = document
    .getElementById('contact-section2')
    .getElementsByClassName('contacts-bottom-block')
  var section3scetch2 = document
    .getElementById('contact-section3')
    .getElementsByClassName('contacts-bottom-block')
  var section3Img = document
    .getElementById('contact-section3')
    .getElementsByClassName('top-text')

  section2Img[0].style.display = 'none'
  section2scetch[0].style.display = 'none'
  section3scetch2[0].style.display = 'none'
  section3Img[0].style.display = 'none'

  document.addEventListener('wheel', function (e) {
    var scrollIndicator = document.querySelector('.scroll-indicator')
    var scroll = scrollIndicator.getAttribute('scroll')
    var scrollAmount =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight

    if (scroll === '0') {
      inner[0].style.display = 'flex'
      inner1[0].style.display = 'flex'
      section2Img[0].style.display = 'none'
      section2scetch[0].style.display = 'none'
    }

    if (parseInt(scroll) === parseInt(scrollAmount / 3)) {
      inner[0].style.display = 'none'
      inner1[0].style.display = 'none'
      section2Img[0].style.display = 'flex'
      section2scetch[0].style.display = 'flex'
      section3scetch2[0].style.display = 'none'
      section3Img[0].style.display = 'none'
    }
    if (parseInt(scroll) === parseInt((scrollAmount / 3) * 2)) {
      section2Img[0].style.display = 'none'
      section2scetch[0].style.display = 'none'
      section3scetch2[0].style.display = 'flex'
      section3Img[0].style.display = 'flex'
    }
  })
})
