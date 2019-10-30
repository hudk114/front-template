function code2script (script) {
  var s = document.createElement('script');
  s.textContent = script;
  document.body.appendChild(s);
}
