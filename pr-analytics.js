/* pr-analytics.js — tiny first-party analytics for PassRoute.
   Sends a pageview on load, then auto-wraps the apps' existing globals so test starts and
   exam picks/switches are tracked with NO changes to any engine. Fails silently; never blocks.
   Events go to /api/track (handled by the Worker -> SQLite Durable Object). */
(function () {
  "use strict";
  try {
    // Don't track the owner's own browser (opt-out set when you log into /admin), and never
    // track the admin dashboard or API paths themselves.
    try { if (localStorage.getItem("pr_notrack") === "1") return; } catch (e) {}
    if (/^\/(admin|api)(\/|$)/.test(location.pathname || "")) return;
    var ENDPOINT = "/api/track";

    function lang() {
      try {
        var u = new URLSearchParams(location.search).get("lang");
        if (u) return u;
        var k = ["pr_civ_lang", "tx_cdl_lang", "pr_cb_lang"];
        for (var i = 0; i < k.length; i++) { var v = localStorage.getItem(k[i]); if (v) return v; }
      } catch (e) {}
      return "en";
    }

    /* a stable, readable key for the current page (cdl / home / dl / customs-broker / cdl/texas ...) */
    function pageKey() {
      var p = location.pathname.replace(/\/index\.html$/, "/");
      p = p.replace(/^\/+|\/+$/g, "");
      return p || "cdl";
    }

    function send(ev) {
      try {
        if (!ev.lang) ev.lang = lang();
        var body = JSON.stringify({ events: [ev] });
        if (navigator.sendBeacon) {
          if (navigator.sendBeacon(ENDPOINT, new Blob([body], { type: "application/json" }))) return;
        }
        fetch(ENDPOINT, { method: "POST", body: body, headers: { "Content-Type": "application/json" }, keepalive: true, credentials: "omit" }).catch(function () {});
      } catch (e) {}
    }

    var PRA = {
      track: function (type, name, extra) {
        if (!type || name == null || name === "") return;
        var ev = { type: type, name: String(name).slice(0, 200) };
        if (extra && extra.lang) ev.lang = extra.lang;
        send(ev);
      },
    };
    window.PRA = PRA;

    /* pageview, once per load */
    send({ type: "pageview", name: pageKey() });

    /* wrap the apps' globals as soon as they exist (script may load before or after the engine) */
    function wrapOne(fnName, evType, keyFn) {
      var orig = window[fnName];
      if (typeof orig !== "function" || orig.__pra) return false;
      var wrapped = function () {
        try { PRA.track(evType, keyFn.apply(null, arguments)); } catch (e) {}
        return orig.apply(this, arguments);
      };
      wrapped.__pra = 1;
      try { window[fnName] = wrapped; } catch (e) { return false; }
      return true;
    }
    function wrapAll() {
      // startTest(catId, idx) exists in every exam app (incl. the mock: catId='mock')
      wrapOne("startTest", "test_start", function (catId, idx) {
        return pageKey() + ":" + catId + ":" + (idx == null ? "" : idx);
      });
      // pick(exam) is the home-page exam chooser
      wrapOne("pick", "exam_pick", function (exam) { return String(exam); });
      // switchExam(target) is the in-app exam switcher
      wrapOne("switchExam", "exam_switch", function (t) { return String(t); });
    }
    wrapAll();
    var tries = 0, iv = setInterval(function () { wrapAll(); if (++tries > 25) clearInterval(iv); }, 120);
    if (document.addEventListener) document.addEventListener("DOMContentLoaded", wrapAll);
  } catch (e) {}
})();
