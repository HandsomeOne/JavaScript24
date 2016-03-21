function $(selector) {
  return document.querySelector(selector);
}
function $$(selector) {
  return document.querySelectorAll(selector);
}

$('#expr').addEventListener('input', function() {
  var rules = $$('#rules li');
  var expr = $('#expr').value;
  $('#result').innerHTML = expr;
  for (var i = 0, l = rules.length; i < l; i++) {
    rules[i].className = '';
  }
  if (expr === '') {
    return;
  } else if (expr.toLowerCase() === 'skip') {
    refresh();
    return;
  }

  try {
    var result = eval($('#expr').value);
    if (result === null) {
      $('#result').innerHTML = 'null';
    } else {
      $('#result').innerHTML = result;
    }
    check(result);
  } catch (e) {
    rules[0].className = 'bad';
  }
});
function check(result) {
  var rules = $$('#rules li');
  var expr = $('#expr').value;
  var e = expr.replace(/(\d)-/g, /$1/).replace(/&&|\|\|/g, '#').replace(/>>|<<|[+*\/%~^&|()]/g, '').replace(/0x/ig, '0');
  var digitsAppeared = 0;
  for (i = 0; i < 4; i++) {
    if (e.match(localStorage.digits[i])) {
      e = e.replace(localStorage.digits[i], '');
      digitsAppeared += 1;
    }
  }
  var valid = true;
  if (result !== 24) {
    rules[1].className = 'bad';
    valid = false;
  }
  if (digitsAppeared !== 4 || e.match(/\d/)) {
    rules[2].className = 'bad';
    e = e.replace(/[\d\s]/g, '');
    valid = false;
  }
  if (e.match(/-/)) {
    rules[4].className = 'bad';
    e = e.replace(/-/g, '');
    valid = false;
  }
  if (e) {
    rules[3].className = 'bad';
    valid = false;
  }
  if (valid) {
    localStorage.averageLength = (localStorage.averageLength * localStorage.won + expr.length) / (+ localStorage.won + 1);
    localStorage.won = + localStorage.won + 1;
    refresh();
  }
}
function refresh() {
  $('#expr').value = '';
  $('#result').innerHTML = '';
  localStorage.digits = (Math.random() + '').substr(2, 4);
  localStorage.total = + localStorage.total + 1;
  print();
}
function print() {
  var digits = $$('#digits li');
  for (var i = 0; i < 4; i++) {
    digits[i].className = 'style-' + Math.floor(Math.random() * 4);
    digits[i].innerHTML = localStorage.digits[i];
  }
  $('#won').innerHTML = localStorage.won;
  $('#total').innerHTML = localStorage.total;
  $('#average-length').innerHTML = localStorage.averageLength.substr(0, 4);
}
function resize() {
  parent.postMessage({
    height: document.body.clientHeight,
  }, '*');
}
function init() {
  localStorage.won = localStorage.won || 0;
  localStorage.total = localStorage.total || 0;
  localStorage.averageLength = localStorage.averageLength || 0;
  localStorage.digits = localStorage.digits || (Math.random() + '').substr(2, 4);
  if (parent !== window) {
    window.addEventListener('resize', resize);
    resize();
  }
  print();
}
init();
