//---- histats ----
// Cukup ganti 4403915 dengan ID Histats kamu ---
(function () {
  injectScript(
    [
      {
        attr: [{ name: "type", value: "text/javascript" }],
        tag: "script",
        inner:
          "var _Hasync= _Hasync|| [];\n_Hasync.push(['Histats.start', '1,4636601,4,0,0,0,00010000']);\n_Hasync.push(['Histats.fasi', '1']);\n_Hasync.push(['Histats.track_hits', '']);\n(function() {\nvar hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;\nhs.src = ('//s10.histats.com/js15_as.js');\n(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);\n})();",
      },
      {
        attr: [],
        tag: "noscript",
        inner:
          '<a href="/" target="_blank"><img src="//sstatic1.histats.com/0.gif?4581776&amp;101" alt="" border="0"></a>',
      },
    ],
    { target: "body" }
  );
  function injectScript(e, t) {
    let n = t.target;
    for (let t of e) {
      let e = t.tag,
        r = t.inner,
        o = document.createElement(e);
      o.innerHTML = r;
      let c = t.attr;
      for (let e of c) o.setAttribute(e.name, e.value);
      document.querySelector(n) && document.querySelector(n).append(o);
    }
  }
})();
