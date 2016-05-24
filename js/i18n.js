'use strict';
var i18n = {};
/* jshint -W069 */
i18n['en'] = {
  won: "won",
  total: "total",
  averageLength: "average length",
  tooHard: "Too difficult?<br>type <code>skip</code>",
  rule0: "Find a <b>valid</b> JavaScript expression",
  rule1: "whose value is <b>(Number)24</b>.",
  rule2: "Each of the four given numerical digits <b>must appear once</b>, and <b>no other</b> digits are allowed.",
  rule3: "Besides digits, <b>only</b> these operators are allowed: <code>+</code> <code>-</code> <code>*</code> <code>/</code> <code>%</code> <code>~</code> <code>&amp;</code> <code>|</code> <code>^</code> <code>&lt;&lt;</code> <code>&gt;&gt;</code> <code>(</code> <code>)</code> and <code>x</code> <code>o</code>(after a given <code>0</code>).<br><small>* Can you do it like a boss? Try not to use parentheses <code>(</code> <code>)</code>.</small>",
  boss: "",
  rule4: "In additional, to avoid <code>-~</code> from appearing continuously, <code>-</code> is <b>not allowed</b> to be used as a unary operator.",
};
i18n['zh-cn'] = {
  won: "已获胜",
  total: "总局数",
  averageLength: "平均长度",
  tooHard: "太难了？<br>输入 <code>skip</code>",
  rule0: "求一个<b>合法的</b> JavaScript 表达式，",
  rule1: "其值为<b>整数 24</b>。",
  rule2: "四个给定的数字<b>恰好</b>在表达式中出现一次，未给定数字<b>不允许</b>出现。",
  rule3: "除数字外，表达式中<b>仅允许</b>包含下列运算符：<code>+</code> <code>-</code> <code>*</code> <code>/</code> <code>%</code> <code>~</code> <code>&amp;</code> <code>|</code> <code>^</code> <code>&lt;&lt;</code> <code>&gt;&gt;</code> <code>(</code> <code>)</code> 以及 <code>x</code> <code>o</code>（在给定的 <code>0</code> 后面）。<br><small>* 挑战自己！试着不使用小括号 <code>(</code> <code>)</code>。</small>",
  rule4: "另外，为了防止 <code>-~</code> 连续出现，<b>不允许</b>将 <code>-</code> 用作一元运算符。",
};
var language = navigator.language.toLowerCase();
if (!(language in i18n)) {
  language = 'en';
}
document.body.innerHTML = document.body.innerHTML.replace(/\{\{.*?\}\}/g, function(match) {
  return i18n[language][match.slice(2, -2)];
});
