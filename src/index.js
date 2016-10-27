import './style.scss'
import evaluate from './eval'
import i18n from './i18n'

i18n()

function $(selector) {
  return document.querySelector(selector)
}
function $$(selector) {
  return document.querySelectorAll(selector)
}
const $expr = $('#expr')
const $result = $('#result')
const $solution = $('#solution')
const $stats = $('#stats')
const $digits = $$('#digits li')
const $rules = $$('#rules li')

function showStats() {
  $('#won').innerHTML = localStorage.won
  $('#total').innerHTML = localStorage.total
  $('#average-length').innerHTML = (+localStorage.averageLength).toFixed(3)
}

function removeOldDigits() {
  for (let i = 0; i < 4; i += 1) {
    while ($digits[i].children.length > 1) {
      $digits[i].removeChild($digits[i].children[0])
    }
  }
}
function show() {
  for (let i = 0; i < 4; i += 1) {
    const digit = document.createElement('div')
    digit.className = `style-${Math.floor(Math.random() * 4)}`
    digit.innerHTML = localStorage.digits[i]
    $digits[i].className = `animation-${Math.floor(Math.random() * 6)}`
    $digits[i].appendChild(digit)
  }
  setTimeout(removeOldDigits, 1250)

  showStats()
}
function refresh() {
  localStorage.digits = (`${Math.random()}`).substr(2, 4)
  show()

  $expr.value = ''
  $expr.removeAttribute('disabled')
  $expr.focus()
}

function resize() {
  parent.postMessage({
    height: document.body.clientHeight,
  }, '*')
}
function success() {
  localStorage.averageLength =
    ((localStorage.averageLength * localStorage.won) + $expr.value.length) / (+localStorage.won + 1)
  localStorage.won = +localStorage.won + 1
  localStorage.total = +localStorage.total + 1

  $result.className = 'animate'
  $solution.className = 'animate'
  $solution.innerHTML = ` = ${$expr.value}`
  $expr.setAttribute('disabled', '')
  setTimeout(() => {
    showStats()
    $stats.className = 'hover'
  }, 250)
  setTimeout(() => {
    $stats.className = ''
  }, 1750)
  setTimeout(() => {
    $result.className = ''
    $result.innerHTML = ''
    refresh()
  }, 2250)
  setTimeout(() => {
    $solution.className = ''
    $solution.innerHTML = ''
  }, 2500)
}
function check(result) {
  const expr = $expr.value
  let e = expr
    .replace(/(\d|\))-/g, /$1/)
    .replace(/&&|\|\|/g, '#')
    .replace(/>>|<<|[+*\/%~^&|()]/g, '')
    .replace(/0x|0o/ig, '0')
  let digitsAppeared = 0
  for (let i = 0; i < 4; i += 1) {
    if (e.match(localStorage.digits[i])) {
      e = e.replace(localStorage.digits[i], '')
      digitsAppeared += 1
    }
  }
  let valid = true
  if (result !== 24) {
    $rules[1].className = 'bad'
    valid = false
  }
  if (digitsAppeared !== 4 || e.match(/\d/)) {
    $rules[2].className = 'bad'
    e = e.replace(/\d/g, '')
    valid = false
  }
  if (e.match(/-/)) {
    $rules[4].className = 'bad'
    e = e.replace(/-/g, '')
    valid = false
  }
  if (e) {
    $rules[3].className = 'bad'
    valid = false
  }
  if (valid) {
    success()
  }
}

localStorage.won = localStorage.won || 0
localStorage.total = localStorage.total || 0
localStorage.averageLength = localStorage.averageLength || 0
localStorage.digits = localStorage.digits || (`${Math.random()}`).substr(2, 4)
if (parent !== window) {
  window.addEventListener('resize', resize)
  resize()
}
setInterval(() => {
  $expr.placeholder = document.activeElement === $expr || $expr.placeholder ?
    '' : '█'
}, 500)
show()

$expr.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) {
    e.preventDefault()
  }
})

$expr.addEventListener('focus', () => {
  $expr.placeholder = ''
})

$expr.addEventListener('input', () => {
  const oldValue = $expr.value
  const expr = $expr.value.replace(/\s/g, '')
  if (oldValue !== expr) {
    $expr.value = expr
  }

  for (let i = 0, l = $rules.length; i < l; i += 1) {
    $rules[i].className = ''
  }
  switch (expr.toLowerCase()) {
    case '':
      $result.innerHTML = ''
      return
    case 's':
      $result.innerHTML = '~ is useful'
      return
    case 'sk':
      $result.innerHTML = 'x&lt;&lt;y is x*2<sup>y</sup>'
      return
    case 'ski':
      $result.innerHTML = 'try & | ^'
      return
    case 'skip':
      localStorage.total = +localStorage.total + 1
      refresh()
      $stats.className = 'hover'
      setTimeout(() => {
        $stats.className = ''
      }, 1500)
      $result.innerHTML = ''
      return
    default:
      try {
        const result = evaluate($expr.value)
        if (result === null) {
          $result.innerHTML = 'null'
        } else {
          $result.innerHTML = result
        }
        check(result)
      } catch (e) {
        $result.innerHTML = expr
        $rules[0].className = 'bad'
      }
  }
})
