function $(selector) {
  return document.querySelector(selector);
}
function $$(selector) {
  return document.querySelectorAll(selector);
}

$('#expr').addEventListener('input', function() {
  var expr = $('#expr').value.replace(/\s/g, '');
  $('#expr').value = expr;
  var rules = $$('#rules li');
  for (var i = 0, l = rules.length; i < l; i++) {
    rules[i].className = '';
  }
  switch (expr) {
    case '':
      $('#result').innerHTML = '';
      return;
    case 's':
      $('#result').innerHTML = '~ is useful';
      return;
    case 'sk':
      $('#result').innerHTML = 'x&lt;&lt;y is x*2<sup>y</sup>';
      return;
    case 'ski':
      $('#result').innerHTML = 'try & | ^';
      return;
    case 'skip':
      localStorage.total = + localStorage.total + 1;
      refresh();
      $('#stats').className = 'hover';
      setTimeout(function() {
        $('#stats').className = '';
      }, 1500);
      $('#result').innerHTML = '';
      return;
    default:
      try {
        var result = eval($('#expr').value);
        if (result === null) {
          $('#result').innerHTML = 'null';
        } else {
          $('#result').innerHTML = result;
        }
        check(result);
      } catch (e) {
        $('#result').innerHTML = expr;
        rules[0].className = 'bad';
      }
  }
});
function check(result) {
  var rules = $$('#rules li');
  var expr = $('#expr').value;
  var e = expr.replace(/(\d|\))-/g, /$1/).replace(/&&|\|\|/g, '#').replace(/>>|<<|[+*\/%~^&|()]/g, '').replace(/0x/ig, '0');
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
    e = e.replace(/\d/g, '');
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
    success();
  }
}
function success() {
  localStorage.averageLength = (localStorage.averageLength * localStorage.won + $('#expr').value.length) / (+ localStorage.won + 1);
  localStorage.won = + localStorage.won + 1;
  localStorage.total = + localStorage.total + 1;

  $('#result').className = 'animate';
  $('#solution').className = 'animate';
  $('#solution').innerHTML = ' = ' + $('#expr').value;
  $('#expr').setAttribute('disabled', '');
  setTimeout(function(params) {
    printStats();
    $('#stats').className = 'hover';
  }, 250);
  setTimeout(function() {
    $('#stats').className = '';
  }, 1750);
  setTimeout(function() {
    $('#result').className = '';
    $('#result').innerHTML = '';
    refresh();
  }, 2250);
  setTimeout(function() {
    $('#solution').className = '';
    $('#solution').innerHTML = '';
  }, 2500);
}
function refresh() {
  localStorage.digits = (Math.random() + '').substr(2, 4);
  print();

  $('#expr').value = '';
  $('#expr').removeAttribute('disabled');
  $('#expr').focus();
}
function print() {
  var digits = $$('#digits li');
  for (var i = 0; i < 4; i++) {
    var digit = document.createElement('div');
    digit.className = 'style-' + Math.floor(Math.random() * 4);
    digit.innerHTML = localStorage.digits[i];
    digits[i].className = 'animation-' + Math.floor(Math.random() * 6);
    digits[i].appendChild(digit);
  }
  setTimeout(removeOldDigits, 500);

  printStats();
}
function printStats() {
  $('#won').innerHTML = localStorage.won;
  $('#total').innerHTML = localStorage.total;
  $('#average-length').innerHTML = localStorage.averageLength.substr(0, 4);
}
function removeOldDigits() {
  var digits = $$('#digits li');
  for (var i = 0; i < 4; i++) {
    while (digits[i].children.length > 1) {
      digits[i].removeChild(digits[i].children[0]);
    }
  }
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
