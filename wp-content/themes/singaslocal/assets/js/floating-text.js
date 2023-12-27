'use strict'

var app = {
  chars: [
    'JS',
    'Vue JS',
    'CSS 3',
    'React JS',
    'WebGL',
    // 'JS',
    // 'CSS 3',
    // 'React JS',
    // 'WebGL',
    // 'JS',
    // 'Vue JS',
    // 'CSS 3',
    // 'React JS',
    // 'WebGL',
  ],

  init: function () {
    app.container = document.createElement('div')
    app.container.className = 'floating-text'
    app.container.style.cssText = 'color: rgb(11, 35, 64); top:0'

    // Получаем ссылку на секцию с id 'section4'
    var section4 = document.getElementById('section4')

    // Проверяем, что секция существует, прежде чем добавить контейнер
    if (section4) {
      section4.insertAdjacentElement('afterbegin', app.container)
      window.setInterval(app.add, 100)
    } else {
      console.error("Секция с id 'section4' не найдена.")
    }
  },

  add: function () {
    var element = document.createElement('span')
    app.container.appendChild(element)
    app.animate(element)
  },

  animate: function (element) {
    var screenHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    var character = app.chars[Math.floor(Math.random() * app.chars.length)]
    var duration = Math.floor(Math.random() * 30) + 1
    var offset = Math.floor(Math.random() * ((100 - duration) * 2)) + 3
    var size = 20 + (20 - duration)
    var translateY = Math.floor(Math.random() * -3 * screenHeight) - 100
    element.style.cssText =
      'right:' +
      offset +
      'vw; font-size:' +
      size +
      'px;animation-duration:' +
      duration +
      's;transition-duration:' +
      duration +
      's; transform: translate3d(0px, 0px, 0px);'
    element.innerHTML = character
    window.setTimeout(app.remove, duration * 1000, element)
  },

  remove: function (element) {
    element.parentNode.removeChild(element)
  },
}

document.addEventListener('DOMContentLoaded', app.init)
