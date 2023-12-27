document.addEventListener('DOMContentLoaded', function () {
  var inner = document
    .getElementById('section1')
    .getElementsByClassName('absolute-c-logo')
  var inner1 = document
    .getElementById('section1')
    .getElementsByClassName('inner1')
  var section2socialmedia = document
    .getElementById('section2')
    .getElementsByClassName('social-media')
  var section2Img = document
    .getElementById('section2')
    .getElementsByClassName('svg-img')
  var section2scetch = document
    .getElementById('section2')
    .getElementsByClassName('scetch scetch-mob')
  var section3socialmedia = document
    .getElementById('section3')
    .getElementsByClassName('social-media')
  var section3Img = document
    .getElementById('section3')
    .getElementsByClassName('svg-img wwd')
  var section3scetch2 = document
    .getElementById('section3')
    .getElementsByClassName('scetch scetch2 scetch-mob')
  var section4socialmedia = document
    .getElementById('section4')
    .getElementsByClassName('social-media')
  var section4scetch = document
    .getElementById('section4')
    .getElementsByClassName('scetch scetch2')
  var section4text = document
    .getElementById('section4')
    .getElementsByClassName('text-i')
  var section4grid = document
    .getElementById('section4')
    .getElementsByClassName('icons-grid')
  var section5socialmedia = document
    .getElementById('section5')
    .getElementsByClassName('social-media')
  var section5scetch = document
    .getElementById('section5')
    .getElementsByClassName('scetch')
  var section5text = document
    .getElementById('section5')
    .getElementsByClassName('text-i text-i3')
  var section5iconslist = document
    .getElementById('section5')
    .getElementsByClassName('icons-list')
  var section6socialmedia = document
    .getElementById('section6')
    .getElementsByClassName('social-media')
  var section6iconslist = document
    .getElementById('section6')
    .getElementsByClassName('icons-list')
  var section6scetch = document
    .getElementById('section6')
    .getElementsByClassName('scetch')
  var section6inner1 = document
    .getElementById('section6')
    .getElementsByClassName('b-inner1 center-mobile')
  var section7socialmedia = document
    .getElementById('section7')
    .getElementsByClassName('social-media')
  var section7scetch = document
    .getElementById('section7')
    .getElementsByClassName('scetch')
  var section7bossphoto = document
    .getElementById('section7')
    .getElementsByClassName('boss-photo')
  var section7teaminner1 = document
    .getElementById('section7')
    .getElementsByClassName('team-inner visible-desktop')
  var section8socialmedia = document
    .getElementById('section8')
    .getElementsByClassName('social-media')
  var section8inner = document
    .getElementById('section8')
    .getElementsByClassName('inner')
  var section8knowInner = document
    .getElementById('section8')
    .getElementsByClassName('know-inner')

  section2Img[0].style.display = 'none'
  section2scetch[0].style.display = 'none'
  section3scetch2[0].style.display = 'none'
  section3Img[0].style.display = 'none'
  section4scetch[0].style.display = 'none'
  section4text[0].style.display = 'none'
  section4grid[0].style.display = 'none'
  section5scetch[0].style.display = 'none'
  section5text[0].style.display = 'none'
  section5iconslist[0].style.display = 'none'
  section2socialmedia[0].style.display = 'none'
  section3socialmedia[0].style.display = 'none'
  section4socialmedia[0].style.display = 'none'
  section5socialmedia[0].style.display = 'none'
  section6socialmedia[0].style.display = 'none'
  section6iconslist[0].style.display = 'none'
  section6scetch[0].style.display = 'none'
  section6inner1[0].style.display = 'none'
  section7socialmedia[0].style.display = 'none'
  section7scetch[0].style.display = 'none'
  section7bossphoto[0].style.display = 'none'
  section7teaminner1[0].style.display = 'none'
  section8socialmedia[0].style.display = 'none'
  section8inner[0].style.display = 'none'
  section8knowInner[0].style.display = 'none'

  // Обновлять текущую видимую секцию при прокрутке
  document.addEventListener('wheel', function (e) {
    var scrollIndicator = document.querySelector('.scroll-indicator')
    var scroll = scrollIndicator.getAttribute('scroll')
    var scrollAmount =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight

    if (scroll === '0') {
      inner[0].style.display = 'block'
      inner1[0].style.display = 'block'
      section2Img[0].style.display = 'none'
      section2scetch[0].style.display = 'none'
    }
    if (scroll * 2 - (scrollAmount / 8) * 2 === scrollAmount * 2) {
      inner[0].style.display = 'none'
      inner1[0].style.display = 'none'
      section2socialmedia[0].style.display = 'flex'
      section2Img[0].style.display = 'block'
      section2scetch[0].style.display = 'block'
      section3socialmedia[0].style.display = 'none'
      section3scetch2[0].style.display = 'none'
      section3Img[0].style.display = 'none'
    }
    if (scroll - (scrollAmount / 8) * 2 + scrollAmount === scrollAmount * 3) {
      section2socialmedia[0].style.display = 'none'
      section2Img[0].style.display = 'none'
      section2scetch[0].style.display = 'none'
      section3socialmedia[0].style.display = 'flex'
      section3scetch2[0].style.display = 'block'
      section3Img[0].style.display = 'flex'
      section4socialmedia[0].style.display = 'none'
      section4scetch[0].style.display = 'none'
      section4text[0].style.display = 'none'
      section4grid[0].style.display = 'none'
    }
    if (scroll - (scrollAmount / 8) * 3 + scrollAmount === scrollAmount * 4) {
      section3socialmedia[0].style.display = 'none'
      section3scetch2[0].style.display = 'none'
      section3Img[0].style.display = 'none'
      section4socialmedia[0].style.display = 'flex'
      section4scetch[0].style.display = 'block'
      section4text[0].style.display = 'block'
      section4grid[0].style.display = 'grid'
      section5socialmedia[0].style.display = 'none'
      section5scetch[0].style.display = 'none'
      section5text[0].style.display = 'none'
      section5iconslist[0].style.display = 'none'
    }
    if (scroll - (scrollAmount / 8) * 4 + scrollAmount === scrollAmount * 5) {
      section4socialmedia[0].style.display = 'none'
      section4scetch[0].style.display = 'none'
      section4text[0].style.display = 'none'
      section4grid[0].style.display = 'none'
      section5socialmedia[0].style.display = 'flex'
      section5scetch[0].style.display = 'block'
      section5text[0].style.display = 'block'
      section5iconslist[0].style.display = 'flex'
      section6socialmedia[0].style.display = 'none'
      section6iconslist[0].style.display = 'none'
      section6scetch[0].style.display = 'none'
      section6inner1[0].style.display = 'none'
    }
    if (scroll - (scrollAmount / 8) * 5 + scrollAmount === scrollAmount * 6) {
      section5socialmedia[0].style.display = 'none'
      section5scetch[0].style.display = 'none'
      section5text[0].style.display = 'none'
      section5iconslist[0].style.display = 'none'
      section6socialmedia[0].style.display = 'flex'
      section6iconslist[0].style.display = 'flex'
      section6scetch[0].style.display = 'block'
      section6inner1[0].style.display = 'block'
      section7socialmedia[0].style.display = 'none'
      section7scetch[0].style.display = 'none'
      section7bossphoto[0].style.display = 'none'
      section7teaminner1[0].style.display = 'none'
    }
    if (scroll - (scrollAmount / 8) * 6 + scrollAmount === scrollAmount * 7) {
      section6socialmedia[0].style.display = 'none'
      section6iconslist[0].style.display = 'none'
      section6scetch[0].style.display = 'none'
      section6inner1[0].style.display = 'none'
      section7socialmedia[0].style.display = 'flex'
      section7scetch[0].style.display = 'flex'
      section7bossphoto[0].style.display = 'flex'
      section7teaminner1[0].style.display = 'flex'
      section8socialmedia[0].style.display = 'none'
      section8inner[0].style.display = 'none'
      section8knowInner[0].style.display = 'none'
    }
    if (scroll - (scrollAmount / 8) * 7 + scrollAmount === scrollAmount * 8) {
      section7socialmedia[0].style.display = 'none'
      section7scetch[0].style.display = 'none'
      section7bossphoto[0].style.display = 'none'
      section7teaminner1[0].style.display = 'none'
      section8socialmedia[0].style.display = 'flex'
      section8inner[0].style.display = 'flex'
      section8knowInner[0].style.display = 'flex'
    }
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const words = document.querySelectorAll('.word')

  function animateLetters(letters) {
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.remove('in')
        letter.classList.add('out')
      }, index * 50)
    })
  }

  function toggleClasses() {
    for (let i = 0; i < words.length; i++) {
      const currentLetters = words[i].querySelectorAll('.letter')
      const nextLetters =
        words[(i + 1) % words.length].querySelectorAll('.letter')

      if (currentLetters[0].classList.contains('in')) {
        animateLetters(currentLetters)
        nextLetters.forEach((letter, index) => {
          setTimeout(() => {
            letter.classList.add('in')
          }, index * 50)
        })
        return
      }
    }
  }

  setInterval(toggleClasses, 10000)

  const numbers = document.querySelector('.numbers-inner')

  setInterval(() => {
    numbers.style.display = 'none'
    setTimeout(() => {
      numbers.style.display = 'block'
    }, 10)
  }, 6000)
})
