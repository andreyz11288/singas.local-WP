document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('.section')

  function setSectionHeightToScreen() {
    var screenHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight

    sections.forEach(function (section) {
      section.style.height = screenHeight + 'px'
    })
  }

  setSectionHeightToScreen()

  window.addEventListener('resize', setSectionHeightToScreen)
})

document.addEventListener('DOMContentLoaded', function () {
  var container = document.querySelector('.fixed-container')
  var scrollIndicator = document.querySelector('.scroll-indicator')

  var scrollAmount =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  var currentPosition = 0
  var fifthOfScreen = 0
  var currentPositionScrollIndicator = 0

  var isDragging = false
  var startY, startTop

  function handleWheel(event) {
    if (isDragging) {
      return
    }

    var isContactPage = document
      .querySelector('.section')
      .getAttribute('is_contact_page')

    if (isContactPage === '1') {
      fifthOfScreen = scrollAmount / 3

      if (event.deltaY > 0) {
        currentPosition -= scrollAmount
        currentPositionScrollIndicator =
          currentPositionScrollIndicator + fifthOfScreen
      } else {
        currentPosition += scrollAmount
        currentPositionScrollIndicator =
          currentPositionScrollIndicator - fifthOfScreen
      }

      currentPosition = Math.max(currentPosition, -2 * scrollAmount)
      currentPosition = Math.min(currentPosition, 0)
      currentPositionScrollIndicator = Math.min(
        currentPositionScrollIndicator,
        scrollAmount - fifthOfScreen
      )
    } else {
      fifthOfScreen = scrollAmount / 8

      if (event.deltaY > 0) {
        currentPosition -= scrollAmount
        currentPositionScrollIndicator =
          currentPositionScrollIndicator + scrollAmount + fifthOfScreen
      } else {
        currentPosition += scrollAmount
        currentPositionScrollIndicator =
          currentPositionScrollIndicator - fifthOfScreen - scrollAmount
      }

      currentPosition = Math.max(currentPosition, -7 * scrollAmount)
      currentPosition = Math.min(currentPosition, 0)
      currentPositionScrollIndicator = Math.min(
        currentPositionScrollIndicator,
        scrollAmount * 8 - fifthOfScreen
      )
    }

    currentPositionScrollIndicator = Math.max(currentPositionScrollIndicator, 0)
    container.style.transform =
      'translate3d(0px, ' + currentPosition + 'px, 0px)'
    scrollIndicator.style.height = fifthOfScreen + 'px'
    scrollIndicator.style.transform =
      'translate3d(0px, ' + currentPositionScrollIndicator + 'px, 0px)'
    scrollIndicator.setAttribute('scroll', currentPositionScrollIndicator)
  }

  function touchStartHandler(event) {
    touchStartY = event.touches[0].clientY
  }

  function touchMoveHandler(event) {
    var deltaY = event.touches[0].clientY - touchStartY
    event.deltaY = deltaY
    handleWheel(event)
    console.log(deltaY)
    console.log(event.touches[0].clientY)
    console.log(touchStartY)
  }

  container.addEventListener('wheel', handleWheel)
  if ('ontouchstart' in window) {
    container.addEventListener('touchmove', touchStartHandler)
    container.addEventListener('touchstart', touchMoveHandler)
  }
})

document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.querySelector('.menu-btn')
  var fixedBg = document.querySelector('.fixed-bg')
  var menu = document.querySelector('.menu')
  var navItem = document.querySelectorAll('.menu-item a')

  var isMenuActive = false

  menuBtn.addEventListener('click', function () {
    var currentURL = window.location.href
    navItem.forEach((element) => {
      if (element.href.replace(/\/$/, '') === currentURL.replace(/\/$/, '')) {
        element.classList.add('nuxt-link-active-custom')
      }
    })

    isMenuActive = !isMenuActive

    if (isMenuActive) {
      menuBtn.classList.add('active', 'pen')
      setTimeout(function () {
        menuBtn.classList.remove('pen')
      }, 3000)

      fixedBg.classList.add('active')
      menu.classList.add('active')
      menu.style.zIndex = '2'
    } else {
      menuBtn.classList.remove('active', 'pen')

      fixedBg.classList.remove('active')
      menu.classList.remove('active')
      menu.style.zIndex = ''
    }
  })
})
