(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList")
        for (const r of o.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(n) {
    const o = {};
    return (
      n.integrity && (o.integrity = n.integrity),
      n.referrerpolicy && (o.referrerPolicy = n.referrerpolicy),
      n.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : n.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function i(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = s(n);
    fetch(n.href, o);
  }
})();
const b = {},
  J = (e, t) => e === t,
  x = { equals: J };
let X = _;
const y = 1,
  A = 2,
  F = { owned: null, cleanups: null, context: null, owner: null };
var u = null;
let g = null,
  f = null,
  c = null,
  w = null,
  D = 0;
function Y(e, t) {
  const s = f,
    i = u,
    n = e.length === 0,
    o = n ? F : { owned: null, cleanups: null, context: null, owner: t || i },
    r = n ? e : () => e(() => I(() => M(o)));
  (u = o), (f = null);
  try {
    return S(r, !0);
  } finally {
    (f = s), (u = i);
  }
}
function T(e, t) {
  t = t ? Object.assign({}, x, t) : x;
  const s = {
      value: e,
      observers: null,
      observerSlots: null,
      comparator: t.equals || void 0,
    },
    i = (n) => (typeof n == "function" && (n = n(s.value)), $(s, n));
  return [P.bind(s), i];
}
function O(e, t, s) {
  const i = H(e, t, !1, y);
  E(i);
}
function L(e, t, s) {
  s = s ? Object.assign({}, x, s) : x;
  const i = H(e, t, !0, 0);
  return (
    (i.observers = null),
    (i.observerSlots = null),
    (i.comparator = s.equals || void 0),
    E(i),
    P.bind(i)
  );
}
function I(e) {
  let t,
    s = f;
  return (f = null), (t = e()), (f = s), t;
}
function Z(e) {
  return (
    u === null ||
      (u.cleanups === null ? (u.cleanups = [e]) : u.cleanups.push(e)),
    e
  );
}
function P() {
  const e = g;
  if (this.sources && (this.state || e))
    if (this.state === y || e) E(this);
    else {
      const t = c;
      (c = null), S(() => C(this), !1), (c = t);
    }
  if (f) {
    const t = this.observers ? this.observers.length : 0;
    f.sources
      ? (f.sources.push(this), f.sourceSlots.push(t))
      : ((f.sources = [this]), (f.sourceSlots = [t])),
      this.observers
        ? (this.observers.push(f),
          this.observerSlots.push(f.sources.length - 1))
        : ((this.observers = [f]),
          (this.observerSlots = [f.sources.length - 1]));
  }
  return this.value;
}
function $(e, t, s) {
  let i = e.value;
  return (
    (!e.comparator || !e.comparator(i, t)) &&
      ((e.value = t),
      e.observers &&
        e.observers.length &&
        S(() => {
          for (let n = 0; n < e.observers.length; n += 1) {
            const o = e.observers[n],
              r = g && g.running;
            r && g.disposed.has(o),
              ((r && !o.tState) || (!r && !o.state)) &&
                (o.pure ? c.push(o) : w.push(o), o.observers && j(o)),
              r || (o.state = y);
          }
          if (c.length > 1e6) throw ((c = []), new Error());
        }, !1)),
    t
  );
}
function E(e) {
  if (!e.fn) return;
  M(e);
  const t = u,
    s = f,
    i = D;
  (f = u = e), k(e, e.value, i), (f = s), (u = t);
}
function k(e, t, s) {
  let i;
  try {
    i = e.fn(t);
  } catch (n) {
    e.pure && (e.state = y), G(n);
  }
  (!e.updatedAt || e.updatedAt <= s) &&
    (e.updatedAt != null && "observers" in e ? $(e, i) : (e.value = i),
    (e.updatedAt = s));
}
function H(e, t, s, i = y, n) {
  const o = {
    fn: e,
    state: i,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: u,
    context: null,
    pure: s,
  };
  return (
    u === null || (u !== F && (u.owned ? u.owned.push(o) : (u.owned = [o]))), o
  );
}
function R(e) {
  const t = g;
  if (e.state === 0 || t) return;
  if (e.state === A || t) return C(e);
  if (e.suspense && I(e.suspense.inFallback)) return e.suspense.effects.push(e);
  const s = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < D); )
    (e.state || t) && s.push(e);
  for (let i = s.length - 1; i >= 0; i--)
    if (((e = s[i]), e.state === y || t)) E(e);
    else if (e.state === A || t) {
      const n = c;
      (c = null), S(() => C(e, s[0]), !1), (c = n);
    }
}
function S(e, t) {
  if (c) return e();
  let s = !1;
  t || (c = []), w ? (s = !0) : (w = []), D++;
  try {
    const i = e();
    return z(s), i;
  } catch (i) {
    c || (w = null), G(i);
  }
}
function z(e) {
  if ((c && (_(c), (c = null)), e)) return;
  const t = w;
  (w = null), t.length && S(() => X(t), !1);
}
function _(e) {
  for (let t = 0; t < e.length; t++) R(e[t]);
}
function C(e, t) {
  const s = g;
  e.state = 0;
  for (let i = 0; i < e.sources.length; i += 1) {
    const n = e.sources[i];
    n.sources &&
      (n.state === y || s ? n !== t && R(n) : (n.state === A || s) && C(n, t));
  }
}
function j(e) {
  const t = g;
  for (let s = 0; s < e.observers.length; s += 1) {
    const i = e.observers[s];
    (!i.state || t) &&
      ((i.state = A), i.pure ? c.push(i) : w.push(i), i.observers && j(i));
  }
}
function M(e) {
  let t;
  if (e.sources)
    for (; e.sources.length; ) {
      const s = e.sources.pop(),
        i = e.sourceSlots.pop(),
        n = s.observers;
      if (n && n.length) {
        const o = n.pop(),
          r = s.observerSlots.pop();
        i < n.length &&
          ((o.sourceSlots[r] = i), (n[i] = o), (s.observerSlots[i] = r));
      }
    }
  if (e.owned) {
    for (t = 0; t < e.owned.length; t++) M(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = 0; t < e.cleanups.length; t++) e.cleanups[t]();
    e.cleanups = null;
  }
  (e.state = 0), (e.context = null);
}
function ee(e) {
  return e instanceof Error || typeof e == "string"
    ? e
    : new Error("Unknown error");
}
function G(e) {
  throw ((e = ee(e)), e);
}
function K(e, t) {
  return I(() => e(t || {}));
}
function te(e, t, s) {
  let i = s.length,
    n = t.length,
    o = i,
    r = 0,
    l = 0,
    h = t[n - 1].nextSibling,
    a = null;
  for (; r < n || l < o; ) {
    if (t[r] === s[l]) {
      r++, l++;
      continue;
    }
    for (; t[n - 1] === s[o - 1]; ) n--, o--;
    if (n === r) {
      const p = o < i ? (l ? s[l - 1].nextSibling : s[o - l]) : h;
      for (; l < o; ) e.insertBefore(s[l++], p);
    } else if (o === l)
      for (; r < n; ) (!a || !a.has(t[r])) && t[r].remove(), r++;
    else if (t[r] === s[o - 1] && s[l] === t[n - 1]) {
      const p = t[--n].nextSibling;
      e.insertBefore(s[l++], t[r++].nextSibling),
        e.insertBefore(s[--o], p),
        (t[n] = s[o]);
    } else {
      if (!a) {
        a = new Map();
        let d = l;
        for (; d < o; ) a.set(s[d], d++);
      }
      const p = a.get(t[r]);
      if (p != null)
        if (l < p && p < o) {
          let d = r,
            N = 1,
            U;
          for (
            ;
            ++d < n && d < o && !((U = a.get(t[d])) == null || U !== p + N);

          )
            N++;
          if (N > p - l) {
            const W = t[r];
            for (; l < p; ) e.insertBefore(s[l++], W);
          } else e.replaceChild(s[l++], t[r++]);
        } else r++;
      else t[r++].remove();
    }
  }
}
function se(e, t, s, i = {}) {
  let n;
  return (
    Y((o) => {
      (n = o),
        t === document ? e() : V(t, e(), t.firstChild ? null : void 0, s);
    }, i.owner),
    () => {
      n(), (t.textContent = "");
    }
  );
}
function Q(e, t, s) {
  const i = document.createElement("template");
  i.innerHTML = e;
  let n = i.content.firstChild;
  return s && (n = n.firstChild), n;
}
function V(e, t, s, i) {
  if ((s !== void 0 && !i && (i = []), typeof t != "function"))
    return v(e, t, i, s);
  O((n) => v(e, t(), n, s), i);
}
function v(e, t, s, i, n) {
  for (b.context && !s && (s = [...e.childNodes]); typeof s == "function"; )
    s = s();
  if (t === s) return s;
  const o = typeof t,
    r = i !== void 0;
  if (
    ((e = (r && s[0] && s[0].parentNode) || e),
    o === "string" || o === "number")
  ) {
    if (b.context) return s;
    if ((o === "number" && (t = t.toString()), r)) {
      let l = s[0];
      l && l.nodeType === 3 ? (l.data = t) : (l = document.createTextNode(t)),
        (s = m(e, s, i, l));
    } else
      s !== "" && typeof s == "string"
        ? (s = e.firstChild.data = t)
        : (s = e.textContent = t);
  } else if (t == null || o === "boolean") {
    if (b.context) return s;
    s = m(e, s, i);
  } else {
    if (o === "function")
      return (
        O(() => {
          let l = t();
          for (; typeof l == "function"; ) l = l();
          s = v(e, l, s, i);
        }),
        () => s
      );
    if (Array.isArray(t)) {
      const l = [],
        h = s && Array.isArray(s);
      if (B(l, t, s, n)) return O(() => (s = v(e, l, s, i, !0))), () => s;
      if (b.context) {
        if (!l.length) return s;
        for (let a = 0; a < l.length; a++) if (l[a].parentNode) return (s = l);
      }
      if (l.length === 0) {
        if (((s = m(e, s, i)), r)) return s;
      } else
        h ? (s.length === 0 ? q(e, l, i) : te(e, s, l)) : (s && m(e), q(e, l));
      s = l;
    } else if (t instanceof Node) {
      if (b.context && t.parentNode) return (s = r ? [t] : t);
      if (Array.isArray(s)) {
        if (r) return (s = m(e, s, i, t));
        m(e, s, null, t);
      } else
        s == null || s === "" || !e.firstChild
          ? e.appendChild(t)
          : e.replaceChild(t, e.firstChild);
      s = t;
    }
  }
  return s;
}
function B(e, t, s, i) {
  let n = !1;
  for (let o = 0, r = t.length; o < r; o++) {
    let l = t[o],
      h = s && s[o];
    if (l instanceof Node) e.push(l);
    else if (!(l == null || l === !0 || l === !1))
      if (Array.isArray(l)) n = B(e, l, h) || n;
      else if (typeof l == "function")
        if (i) {
          for (; typeof l == "function"; ) l = l();
          n = B(e, Array.isArray(l) ? l : [l], Array.isArray(h) ? h : [h]) || n;
        } else e.push(l), (n = !0);
      else {
        const a = String(l);
        h && h.nodeType === 3 && h.data === a
          ? e.push(h)
          : e.push(document.createTextNode(a));
      }
  }
  return n;
}
function q(e, t, s = null) {
  for (let i = 0, n = t.length; i < n; i++) e.insertBefore(t[i], s);
}
function m(e, t, s, i) {
  if (s === void 0) return (e.textContent = "");
  const n = i || document.createTextNode("");
  if (t.length) {
    let o = !1;
    for (let r = t.length - 1; r >= 0; r--) {
      const l = t[r];
      if (n !== l) {
        const h = l.parentNode === e;
        !o && !r
          ? h
            ? e.replaceChild(n, l)
            : e.insertBefore(n, s)
          : h && l.remove();
      } else o = !0;
    }
  } else e.insertBefore(n, s);
  return [n];
}
const ne = Q("<h1>Digital Clock</h1>"),
  ie = () => {
    let [e, t] = T(0),
      [s, i] = T(0),
      [n, o] = T(0),
      r = setInterval(() => {
        let l = new Date();
        t(l.getHours()),
          i(l.getMinutes()),
          o(l.getSeconds()),
          console.log("Selam");
      }, 1e3);
    return (
      Z(() => {
        clearInterval(r);
      }),
      [ne.cloneNode(!0), L(e), " : ", L(s), " : ", L(n)]
    );
  },
  le = Q("<div></div>");
function oe() {
  return (() => {
    const e = le.cloneNode(!0);
    return V(e, K(ie, {})), e;
  })();
}
se(() => K(oe, {}), document.getElementById("root"));
