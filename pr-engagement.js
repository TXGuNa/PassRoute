/* pr-engagement.js — shared engagement layer for all PassRoute apps (CDL/DL/Citizenship/SAT).
   Same-origin localStorage, so the daily streak is global across every exam.
   Heavy logic lives here; each app just calls a few PR.* functions. Dependency-free. */
(function () {
  "use strict";
  var SK = "pr_streak", MK = "pr_mistakes";
  function load(k, d) { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function dayKey(d) { d = d || new Date(); return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
  function prevKey() { var d = new Date(); d.setDate(d.getDate() - 1); return dayKey(d); }

  /* ---------- daily streak + goal ---------- */
  function defStreak() { return { streak: 0, best: 0, last: null, todayCount: 0, goal: 20 }; }
  function getStreak() { var s = load(SK, defStreak()); if (s.goal == null) s.goal = 20; return s; }
  /* call once per finished test/mock; `answered` = questions answered in it */
  function recordActivity(answered) {
    var s = getStreak(), t = dayKey();
    if (s.last !== t) { s.streak = (s.last === prevKey()) ? (s.streak + 1) : 1; s.last = t; s.todayCount = 0; }
    s.todayCount += (answered || 0);
    if (s.streak > s.best) s.best = s.streak;
    save(SK, s); return s;
  }
  function setGoal(n) { var s = getStreak(); s.goal = Math.max(5, Math.min(200, n | 0)); save(SK, s); return s; }
  /* a compact streak/goal badge (string of HTML) for the home screen; pass localized labels */
  function streakHTML(L) {
    var s = getStreak(); L = L || {};
    var active = s.last === dayKey();
    var pct = Math.min(100, Math.round(s.todayCount / Math.max(1, s.goal) * 100));
    var goalTxt = (L.goal || "{c}/{g} today").split("{c}").join(active ? s.todayCount : 0).split("{g}").join(s.goal);
    var streakTxt = (L.streak || "{n}-day streak").split("{n}").join(s.streak);
    return '<div class="pr-streak"><div class="pr-fire">' + (s.streak > 0 ? "🔥" : "✨") + '</div>' +
      '<div class="pr-streak-body"><div class="pr-streak-n">' + (s.streak > 0 ? streakTxt : (L.start || "Start a streak today")) + '</div>' +
      '<div class="pr-goal"><div class="pr-goal-bar"><i style="width:' + pct + '%"></i></div><span>' + goalTxt + '</span></div></div></div>';
  }

  /* ---------- mistake tracking (per exam, per category, set of question ids) ---------- */
  function getMistakes(exam) { return load(MK, {})[exam] || {}; }
  function mistakeCount(exam) { var o = getMistakes(exam), c = 0; for (var k in o) c += o[k].length; return c; }
  function recordMistakes(exam, catId, qids) {
    if (!qids || !qids.length) return;
    var m = load(MK, {}); m[exam] = m[exam] || {}; m[exam][catId] = m[exam][catId] || [];
    var arr = m[exam][catId];
    qids.forEach(function (q) { if (arr.indexOf(q) < 0) arr.push(q); });
    save(MK, m);
  }
  function clearMistake(exam, catId, qid) {
    var m = load(MK, {}); if (!m[exam] || !m[exam][catId]) return;
    var i = m[exam][catId].indexOf(qid); if (i >= 0) m[exam][catId].splice(i, 1);
    if (!m[exam][catId].length) delete m[exam][catId];
    if (m[exam] && !Object.keys(m[exam]).length) delete m[exam];
    save(MK, m);
  }
  /* flat list [{catId, qid}] of everything missed, optional cap */
  function mistakeList(exam, cap) {
    var o = getMistakes(exam), out = [];
    for (var c in o) o[c].forEach(function (q) { out.push({ catId: c, qid: q }); });
    if (cap && out.length > cap) out = out.slice(0, cap);
    return out;
  }

  /* ---------- shareable score card (native canvas, no libs) ---------- */
  function rr(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
  function drawCard(opts) {
    var W = 1200, H = 630, c = document.createElement("canvas"); c.width = W; c.height = H;
    var x = c.getContext("2d");
    var g = x.createLinearGradient(0, 0, W, H); g.addColorStop(0, "#0b1424"); g.addColorStop(1, opts.accent2 || "#16294e");
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    var ga = x.createLinearGradient(0, 0, W, 0); ga.addColorStop(0, "#3b82f6"); ga.addColorStop(1, "#22d3a8");
    x.fillStyle = ga; x.fillRect(0, 0, W, 10);
    x.fillStyle = "#fff"; x.textBaseline = "alphabetic";
    x.font = "800 46px -apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
    x.fillText("PassRoute", 80, 120); x.fillStyle = "#22d3a8"; x.fillText(".ai", 80 + x.measureText("PassRoute").width, 120);
    x.fillStyle = "#9fb3d1"; x.font = "600 30px -apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
    x.fillText(opts.exam || "", 80, 175);
    // big score
    x.fillStyle = "#fff"; x.font = "820 150px -apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
    x.fillText(String(opts.score), 80, 360);
    if (opts.scoreSub) { x.fillStyle = "#9fb3d1"; x.font = "600 36px -apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"; x.fillText(opts.scoreSub, 80, 410); }
    // headline
    x.fillStyle = "#fff"; x.font = "800 48px -apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
    x.fillText(opts.title || "", 80, 500);
    // pill
    if (opts.tag) { x.font = "700 28px -apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"; var tw = x.measureText(opts.tag).width; x.fillStyle = opts.pass ? "#16a34a" : "#b45309"; rr(x, 80, 528, tw + 40, 52, 26); x.fill(); x.fillStyle = "#fff"; x.fillText(opts.tag, 100, 562); }
    x.fillStyle = "#22d3a8"; x.font = "700 30px -apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
    x.textAlign = "right"; x.fillText("passroute.ai", W - 80, 120); x.textAlign = "left";
    return c;
  }
  /* share via Web Share (with image file) where supported, else download the PNG */
  function shareScore(opts) {
    var canvas; try { canvas = drawCard(opts); } catch (e) { return; }
    canvas.toBlob(function (blob) {
      if (!blob) return;
      var file = null;
      try { file = new File([blob], "passroute-score.png", { type: "image/png" }); } catch (e) {}
      var shareText = (opts.shareText || "My PassRoute result") + " — passroute.ai";
      if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file], title: "PassRoute", text: shareText }).catch(function () {});
      } else {
        var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "passroute-score.png";
        document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      }
    }, "image/png");
  }

  window.PR = {
    getStreak: getStreak, recordActivity: recordActivity, setGoal: setGoal, streakHTML: streakHTML,
    getMistakes: getMistakes, mistakeCount: mistakeCount, recordMistakes: recordMistakes,
    clearMistake: clearMistake, mistakeList: mistakeList, shareScore: shareScore, dayKey: dayKey
  };
})();
