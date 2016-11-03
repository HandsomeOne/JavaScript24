!function(e){function t(a){if(o[a])return o[a].exports;var i=o[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return document.querySelector(e)}function n(e){return document.querySelectorAll(e)}function r(){i("#won").innerHTML=localStorage.won,i("#total").innerHTML=localStorage.total,i("#average-length").innerHTML=(+localStorage.averageLength).toFixed(3)}function s(){for(var e=0;e<4;e+=1)for(;y[e].children.length>1;)y[e].removeChild(y[e].children[0])}function l(){for(var e=0;e<4;e+=1){var t=document.createElement("div");t.className="style-"+Math.floor(4*Math.random()),t.innerHTML=localStorage.digits[e],y[e].className="animation-"+Math.floor(6*Math.random()),y[e].appendChild(t)}setTimeout(s,1250),r()}function d(){localStorage.digits=(""+Math.random()).substr(2,4),l(),b.value="",b.removeAttribute("disabled"),b.focus()}function c(){parent.postMessage({height:document.body.clientHeight},"*")}function f(){localStorage.averageLength=(localStorage.averageLength*localStorage.won+b.value.length)/(+localStorage.won+1),localStorage.won=+localStorage.won+1,localStorage.total=+localStorage.total+1,w.className="animate",v.className="animate",v.innerHTML=" = "+b.value,b.setAttribute("disabled",""),setTimeout(function(){r(),k.className="hover"},250),setTimeout(function(){k.className=""},1750),setTimeout(function(){w.className="",w.innerHTML="",d()},2250),setTimeout(function(){v.className="",v.innerHTML=""},2500)}function u(e){for(var t=b.value,o=t.replace(/(\d|\))-/g,/$1/).replace(/&&|\|\|/g,"#").replace(/>>|<<|[+*\/%~^&|()]/g,"").replace(/0x|0o/gi,"0"),a=0,i=0;i<4;i+=1)o.match(localStorage.digits[i])&&(o=o.replace(localStorage.digits[i],""),a+=1);var n=!0;24!==e&&(x[1].className="bad",n=!1),(4!==a||o.match(/\d/))&&(x[2].className="bad",o=o.replace(/\d/g,""),n=!1),o.match(/-/)&&(x[4].className="bad",o=o.replace(/-/g,""),n=!1),o&&(x[3].className="bad",n=!1),n&&f()}o(6);var m=o(2),p=a(m),g=o(3),h=a(g);(0,h.default)();var b=i("#expr"),w=i("#result"),v=i("#solution"),k=i("#stats"),y=n("#digits li"),x=n("#rules li");localStorage.won=localStorage.won||0,localStorage.total=localStorage.total||0,localStorage.averageLength=localStorage.averageLength||0,localStorage.digits=localStorage.digits||(""+Math.random()).substr(2,4),parent!==window&&(window.addEventListener("resize",c),c()),setInterval(function(){b.placeholder=document.activeElement===b||b.placeholder?"":"█"},500),l(),b.addEventListener("keydown",function(e){32===e.keyCode&&e.preventDefault()}),b.addEventListener("focus",function(){b.placeholder=""}),b.addEventListener("input",function(){var e=b.value,t=b.value.replace(/\s/g,"");e!==t&&(b.value=t);for(var o=0,a=x.length;o<a;o+=1)x[o].className="";switch(t.toLowerCase()){case"":return void(w.innerHTML="");case"s":return void(w.innerHTML="~ is useful");case"sk":return void(w.innerHTML="x&lt;&lt;y is x*2<sup>y</sup>");case"ski":return void(w.innerHTML="try & | ^");case"skip":return localStorage.total=+localStorage.total+1,d(),k.className="hover",setTimeout(function(){k.className=""},1500),void(w.innerHTML="");default:try{var i=(0,p.default)(b.value);null===i?w.innerHTML="null":w.innerHTML=i,u(i)}catch(e){w.innerHTML=t,x[0].className="bad"}}}),document.addEventListener("keydown",function(){b.focus()})},function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},i=0;i<this.length;i++){var n=this[i][0];"number"==typeof n&&(a[n]=!0)}for(i=0;i<t.length;i++){var r=t[i];"number"==typeof r[0]&&a[r[0]]||(o&&!r[2]?r[2]=o:o&&(r[2]="("+r[2]+") and ("+o+")"),e.push(r))}},e}},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(e){return eval(e)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e={en:{won:"won",total:"total",averageLength:"average length",tooHard:"too difficult?<br>type <code>skip</code>",rule0:"Find a <b>valid</b> JavaScript expression",rule1:"whose value is <b>(Number)24</b>.",rule2:"Each of the four given numerical digits <b>must appear once</b>, and <b>no other</b> digits are allowed.",rule3:"Besides digits, <b>only</b> these operators are allowed: <code>+</code> <code>-</code> <code>*</code> <code>/</code> <code>%</code> <code>~</code> <code>&amp;</code> <code>|</code> <code>^</code> <code>&lt;&lt;</code> <code>&gt;&gt;</code> <code>(</code> <code>)</code> and <code>x</code> <code>o</code>(after a given <code>0</code>).<br><small>* Can you do it like a boss? Try not to use parentheses <code>(</code> <code>)</code>.</small>",boss:"",rule4:"In additional, to avoid <code>-~</code> from appearing continuously, <code>-</code> is <b>not allowed</b> to be used as a unary operator."},zh:{won:"已获胜",total:"总局数",averageLength:"平均长度",tooHard:"太难了？<br>输入 <code>skip</code>",rule0:"求一个<b>合法的</b> JavaScript 表达式，",rule1:"其值为<b>整数 24</b>。",rule2:"四个给定的数字<b>恰好</b>在表达式中出现一次，未给定数字<b>不允许</b>出现。",rule3:"除数字外，表达式中<b>仅允许</b>包含下列运算符：<code>+</code> <code>-</code> <code>*</code> <code>/</code> <code>%</code> <code>~</code> <code>&amp;</code> <code>|</code> <code>^</code> <code>&lt;&lt;</code> <code>&gt;&gt;</code> <code>(</code> <code>)</code> 以及 <code>x</code> <code>o</code>（在给定的 <code>0</code> 后面）。<br><small>* 挑战自己！试着不使用小括号 <code>(</code> <code>)</code>。</small>",rule4:"另外，为了防止 <code>-~</code> 连续出现，<b>不允许</b>将 <code>-</code> 用作一元运算符。"}},t="en",o=0;o<navigator.languages.length;o+=1){var a=navigator.languages[o].toLowerCase();if(a in e){t=a;break}}document.body.innerHTML=document.body.innerHTML.replace(/\{\{.*?\}\}/g,function(o){return e[t][o.slice(2,-2)]})}},function(e,t,o){t=e.exports=o(1)(),t.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700);",""]),t.push([e.id,'::-moz-selection{background-color:#373a33;color:#ffcd00}::selection{background-color:#373a33;color:#ffcd00}body{font-family:Source Sans Pro,sans-serif;margin:0 auto;max-width:960px;color:#373a33;position:relative;text-rendering:optimizeLegibility}code{font-family:Fira Code,monospace}header{font-size:4rem;overflow:hidden}@media (max-width:520px){header{font-size:3rem}}h1{font-size:1em;font-weight:700;margin:0;height:1.5625em;position:relative;letter-spacing:-.05em}#js-background{position:absolute;width:0;height:1.5625em;background-color:#ffcd00;-webkit-animation:js-background .5s ease-in forwards;animation:js-background .5s ease-in forwards}@-webkit-keyframes js-background{to{width:1.5625em}}@keyframes js-background{to{width:1.5625em}}#js{position:absolute;bottom:0;left:.125em;color:#373a33;opacity:0;-webkit-animation:js .75s .25s ease-in-out forwards;animation:js .75s .25s ease-in-out forwards}@-webkit-keyframes js{to{left:.375em;opacity:1}}@keyframes js{to{left:.375em;opacity:1}}#twenty-four{position:absolute;left:2em;bottom:0;color:#ffcd00;white-space:nowrap;opacity:0;-webkit-animation:twenty-four .75s .25s ease-in-out forwards;animation:twenty-four .75s .25s ease-in-out forwards}@-webkit-keyframes twenty-four{to{left:1.75em;opacity:1}}@keyframes twenty-four{to{left:1.75em;opacity:1}}#result{position:absolute;left:1.75em;bottom:0;max-width:calc(100% - 3.5em);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-right:.05em;box-sizing:border-box}#result.animate{-webkit-animation:fade-out .5s 1.75s forwards;animation:fade-out .5s 1.75s forwards}@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}#solution{opacity:0;position:relative}#solution:before{left:0}#solution:after,#solution:before{content:"";display:block;height:100%;background-color:#fff;position:absolute;top:0}#solution:after{width:100%;right:0}#solution.animate{opacity:1;-webkit-animation:fade-out .5s 2s forwards;animation:fade-out .5s 2s forwards}#solution.animate:before{-webkit-animation:slide-in .5s 2s forwards;animation:slide-in .5s 2s forwards}#solution.animate:after{-webkit-animation:slide-out .5s .25s forwards;animation:slide-out .5s .25s forwards}@-webkit-keyframes slide-in{0%{width:0}to{width:100%}}@keyframes slide-in{0%{width:0}to{width:100%}}@-webkit-keyframes slide-out{0%{width:100%}to{width:0}}@keyframes slide-out{0%{width:100%}to{width:0}}#stats{background-color:#ffcd00;width:1.5625em;height:1.5625em;position:absolute;top:0;left:0;opacity:0;-webkit-transition:opacity .5s;transition:opacity .5s}#stats.hover,#stats:hover{opacity:1}#stats td{text-transform:uppercase;vertical-align:top;font-size:.1875em;padding:0 .2em}#stats td[id]{text-align:right;font-weight:700}#digits{width:1.5625em;height:1.5625em;top:0;right:0}#digits,#digits li{margin:0;padding:0;position:absolute}#digits li{list-style:none;width:50%;height:50%;text-align:center;font-size:50%;line-height:1.5625em;font-weight:700;overflow:hidden}#digits li:nth-child(1){top:0;left:0}#digits li:nth-child(2){top:0;left:50%}#digits li:nth-child(3){top:50%;left:0}#digits li:nth-child(4){top:50%;left:50%}#digits .style-0{background:#fff;color:#373a33}#digits .style-1{background:#ffcd00;color:#373a33}#digits .style-2{background:#373a33;color:#ffcd00}#digits .style-3{background:#373a33;color:#fff}#digits li>div{width:100%;height:100%;position:absolute}#digits li.animation-0>div:last-child{top:0;left:100%;-webkit-animation:animation-0 .5s ease-out forwards;animation:animation-0 .5s ease-out forwards}#digits li.animation-1>div:last-child{top:0;left:-100%;-webkit-animation:animation-1 .5s ease-out forwards;animation:animation-1 .5s ease-out forwards}#digits li.animation-2>div:last-child{left:0;top:100%;-webkit-animation:animation-2 .5s ease-out forwards;animation:animation-2 .5s ease-out forwards}#digits li.animation-3>div:last-child{left:0;top:-100%;-webkit-animation:animation-3 .5s ease-out forwards;animation:animation-3 .5s ease-out forwards}#digits li.animation-4>div{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-animation:animation-4-old .5s ease-in forwards;animation:animation-4-old .5s ease-in forwards}#digits li.animation-4>div:last-child{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-animation:animation-4 .5s ease-out forwards;animation:animation-4 .5s ease-out forwards}#digits li.animation-5>div{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-animation:animation-5-old .5s ease-in forwards;animation:animation-5-old .5s ease-in forwards}#digits li.animation-5>div:last-child{-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-animation:animation-5 .5s ease-out forwards;animation:animation-5 .5s ease-out forwards}#digits li:nth-child(2)>div{-webkit-animation-delay:.25s!important;animation-delay:.25s!important}#digits li:nth-child(3)>div{-webkit-animation-delay:.5s!important;animation-delay:.5s!important}#digits li:nth-child(4)>div{-webkit-animation-delay:.75s!important;animation-delay:.75s!important}@-webkit-keyframes animation-0{to{left:0}}@keyframes animation-0{to{left:0}}@-webkit-keyframes animation-1{to{left:0}}@keyframes animation-1{to{left:0}}@-webkit-keyframes animation-2{to{top:0}}@keyframes animation-2{to{top:0}}@-webkit-keyframes animation-3{to{top:0}}@keyframes animation-3{to{top:0}}@-webkit-keyframes animation-4-old{50%{-webkit-transform:scaleX(0);transform:scaleX(0)}to{-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes animation-4-old{50%{-webkit-transform:scaleX(0);transform:scaleX(0)}to{-webkit-transform:scaleX(0);transform:scaleX(0)}}@-webkit-keyframes animation-4{50%{-webkit-transform:scaleX(0);transform:scaleX(0)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes animation-4{50%{-webkit-transform:scaleX(0);transform:scaleX(0)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes animation-5-old{50%{-webkit-transform:scaleY(0);transform:scaleY(0)}to{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes animation-5-old{50%{-webkit-transform:scaleY(0);transform:scaleY(0)}to{-webkit-transform:scaleY(0);transform:scaleY(0)}}@-webkit-keyframes animation-5{50%{-webkit-transform:scaleY(0);transform:scaleY(0)}to{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes animation-5{50%{-webkit-transform:scaleY(0);transform:scaleY(0)}to{-webkit-transform:scaleY(1);transform:scaleY(1)}}#hints{position:absolute;top:0;right:0;width:1.5625em;height:1.5625em;text-align:center;background:#373a33;color:#ffcd00;display:table;opacity:0;-webkit-transition:opacity .5s ease;transition:opacity .5s ease}#hints:hover{opacity:1}#hints>div{font-size:.25em;display:table-cell;vertical-align:middle}#hints code{font-weight:700;background-color:#ffcd00;color:#373a33;padding:0 .2em}#expr-wrapper{position:relative;font-family:Fira Code,monospace}#expr-caret{position:absolute;top:50%;left:16px;color:#fff;line-height:0;opacity:.5}#expr{font-family:Fira Code,monospace;background-color:#373a33;color:#fff;border-radius:0;margin:0;width:100%;border-width:0;box-sizing:border-box;font-size:20px;line-height:20px;padding:10px;padding-left:36px;text-align:right}#expr:focus{outline:0 none}#rules{margin:16px 0;padding:0}#rules li{list-style-type:none;line-height:22px;padding:4px 16px;-webkit-transition:background-color .5s;transition:background-color .5s}#rules li b{text-transform:uppercase;text-shadow:0 -4px 0 #fff}#rules li.bad{background-color:#ffcd00}#rules code{font-weight:700;background-color:#373a33;color:#ffcd00;padding:0 .2em}footer{text-align:center;height:32px;line-height:32px;position:relative;border:4px solid #373a33;-webkit-transition:background-color .5s;transition:background-color .5s}footer:hover{background-color:#ffcd00}footer a{text-decoration:none;font-weight:700;color:#373a33;display:block}',""])},function(e,t,o){function a(e,t){for(var o=0;o<e.length;o++){var a=e[o],i=m[a.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](a.parts[n]);for(;n<a.parts.length;n++)i.parts.push(d(a.parts[n],t))}else{for(var r=[],n=0;n<a.parts.length;n++)r.push(d(a.parts[n],t));m[a.id]={id:a.id,refs:1,parts:r}}}}function i(e){for(var t=[],o={},a=0;a<e.length;a++){var i=e[a],n=i[0],r=i[1],s=i[2],l=i[3],d={css:r,media:s,sourceMap:l};o[n]?o[n].parts.push(d):t.push(o[n]={id:n,parts:[d]})}return t}function n(e,t){var o=h(),a=v[v.length-1];if("top"===e.insertAt)a?a.nextSibling?o.insertBefore(t,a.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(t)}}function r(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",n(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",n(e,t),t}function d(e,t){var o,a,i;if(t.singleton){var n=w++;o=b||(b=s(t)),a=c.bind(null,o,n,!1),i=c.bind(null,o,n,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=l(t),a=u.bind(null,o),i=function(){r(o),o.href&&URL.revokeObjectURL(o.href)}):(o=s(t),a=f.bind(null,o),i=function(){r(o)});return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else i()}}function c(e,t,o,a){var i=o?"":a.css;if(e.styleSheet)e.styleSheet.cssText=k(t,i);else{var n=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(n,r[t]):e.appendChild(n)}}function f(e,t){var o=t.css,a=t.media;if(a&&e.setAttribute("media",a),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}function u(e,t){var o=t.css,a=t.sourceMap;a&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([o],{type:"text/css"}),n=e.href;e.href=URL.createObjectURL(i),n&&URL.revokeObjectURL(n)}var m={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},g=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=p(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,w=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=g()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=i(e);return a(o,t),function(e){for(var n=[],r=0;r<o.length;r++){var s=o[r],l=m[s.id];l.refs--,n.push(l)}if(e){var d=i(e);a(d,t)}for(var r=0;r<n.length;r++){var l=n[r];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete m[l.id]}}}};var k=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},function(e,t,o){var a=o(4);"string"==typeof a&&(a=[[e.id,a,""]]);o(5)(a,{});a.locals&&(e.exports=a.locals)}]);