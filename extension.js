(function () {
  "use strict";
  var Ne,
    w,
    Nt,
    X,
    Mt,
    Bt,
    it,
    Ft,
    ot,
    at,
    lt,
    ye = {},
    qt = [],
    Es = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    Me = Array.isArray;
  function W(r, e) {
    for (var t in e) r[t] = e[t];
    return r;
  }
  function ct(r) {
    r && r.parentNode && r.parentNode.removeChild(r);
  }
  function ut(r, e, t) {
    var s,
      n,
      i,
      o = {};
    for (i in e)
      i == "key" ? (s = e[i]) : i == "ref" ? (n = e[i]) : (o[i] = e[i]);
    if (
      (arguments.length > 2 &&
        (o.children = arguments.length > 3 ? Ne.call(arguments, 2) : t),
      typeof r == "function" && r.defaultProps != null)
    )
      for (i in r.defaultProps) o[i] === void 0 && (o[i] = r.defaultProps[i]);
    return Be(r, o, s, n, null);
  }
  function Be(r, e, t, s, n) {
    var i = {
      type: r,
      props: e,
      key: t,
      ref: s,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: n ?? ++Nt,
      __i: -1,
      __u: 0,
    };
    return n == null && w.vnode != null && w.vnode(i), i;
  }
  function ae(r) {
    return r.children;
  }
  function q(r, e) {
    (this.props = r), (this.context = e);
  }
  function le(r, e) {
    if (e == null) return r.__ ? le(r.__, r.__i + 1) : null;
    for (var t; e < r.__k.length; e++)
      if ((t = r.__k[e]) != null && t.__e != null) return t.__e;
    return typeof r.type == "function" ? le(r) : null;
  }
  function Ht(r) {
    var e, t;
    if ((r = r.__) != null && r.__c != null) {
      for (r.__e = r.__c.base = null, e = 0; e < r.__k.length; e++)
        if ((t = r.__k[e]) != null && t.__e != null) {
          r.__e = r.__c.base = t.__e;
          break;
        }
      return Ht(r);
    }
  }
  function zt(r) {
    ((!r.__d && (r.__d = !0) && X.push(r) && !Fe.__r++) ||
      Mt !== w.debounceRendering) &&
      ((Mt = w.debounceRendering) || Bt)(Fe);
  }
  function Fe() {
    var r, e, t, s, n, i, o, a;
    for (X.sort(it); (r = X.shift()); )
      r.__d &&
        ((e = X.length),
        (s = void 0),
        (i = (n = (t = r).__v).__e),
        (o = []),
        (a = []),
        t.__P &&
          (((s = W({}, n)).__v = n.__v + 1),
          w.vnode && w.vnode(s),
          ht(
            t.__P,
            s,
            n,
            t.__n,
            t.__P.namespaceURI,
            32 & n.__u ? [i] : null,
            o,
            i ?? le(n),
            !!(32 & n.__u),
            a,
          ),
          (s.__v = n.__v),
          (s.__.__k[s.__i] = s),
          Vt(o, s, a),
          s.__e != i && Ht(s)),
        X.length > e && X.sort(it));
    Fe.__r = 0;
  }
  function Wt(r, e, t, s, n, i, o, a, l, c, u) {
    var h,
      d,
      f,
      p,
      y,
      _,
      g = (s && s.__k) || qt,
      m = e.length;
    for (l = Ps(t, e, g, l, m), h = 0; h < m; h++)
      (f = t.__k[h]) != null &&
        ((d = f.__i === -1 ? ye : g[f.__i] || ye),
        (f.__i = h),
        (_ = ht(r, f, d, n, i, o, a, l, c, u)),
        (p = f.__e),
        f.ref &&
          d.ref != f.ref &&
          (d.ref && dt(d.ref, null, f), u.push(f.ref, f.__c || p, f)),
        y == null && p != null && (y = p),
        4 & f.__u || d.__k === f.__k
          ? (l = Jt(f, l, r))
          : typeof f.type == "function" && _ !== void 0
            ? (l = _)
            : p && (l = p.nextSibling),
        (f.__u &= -7));
    return (t.__e = y), l;
  }
  function Ps(r, e, t, s, n) {
    var i,
      o,
      a,
      l,
      c,
      u = t.length,
      h = u,
      d = 0;
    for (r.__k = new Array(n), i = 0; i < n; i++)
      (o = e[i]) != null && typeof o != "boolean" && typeof o != "function"
        ? ((l = i + d),
          ((o = r.__k[i] =
            typeof o == "string" ||
            typeof o == "number" ||
            typeof o == "bigint" ||
            o.constructor == String
              ? Be(null, o, null, null, null)
              : Me(o)
                ? Be(ae, { children: o }, null, null, null)
                : o.constructor === void 0 && o.__b > 0
                  ? Be(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v)
                  : o).__ = r),
          (o.__b = r.__b + 1),
          (a = null),
          (c = o.__i = Os(o, t, l, h)) !== -1 &&
            (h--, (a = t[c]) && (a.__u |= 2)),
          a == null || a.__v === null
            ? (c == -1 && d--, typeof o.type != "function" && (o.__u |= 4))
            : c != l &&
              (c == l - 1
                ? d--
                : c == l + 1
                  ? d++
                  : (c > l ? d-- : d++, (o.__u |= 4))))
        : (r.__k[i] = null);
    if (h)
      for (i = 0; i < u; i++)
        (a = t[i]) != null &&
          !(2 & a.__u) &&
          (a.__e == s && (s = le(a)), Qt(a, a));
    return s;
  }
  function Jt(r, e, t) {
    var s, n;
    if (typeof r.type == "function") {
      for (s = r.__k, n = 0; s && n < s.length; n++)
        s[n] && ((s[n].__ = r), (e = Jt(s[n], e, t)));
      return e;
    }
    r.__e != e &&
      (e && r.type && !t.contains(e) && (e = le(r)),
      t.insertBefore(r.__e, e || null),
      (e = r.__e));
    do e = e && e.nextSibling;
    while (e != null && e.nodeType == 8);
    return e;
  }
  function qe(r, e) {
    return (
      (e = e || []),
      r == null ||
        typeof r == "boolean" ||
        (Me(r)
          ? r.some(function (t) {
              qe(t, e);
            })
          : e.push(r)),
      e
    );
  }
  function Os(r, e, t, s) {
    var n,
      i,
      o = r.key,
      a = r.type,
      l = e[t];
    if (l === null || (l && o == l.key && a === l.type && !(2 & l.__u)))
      return t;
    if (s > (l != null && !(2 & l.__u) ? 1 : 0))
      for (n = t - 1, i = t + 1; n >= 0 || i < e.length; ) {
        if (n >= 0) {
          if ((l = e[n]) && !(2 & l.__u) && o == l.key && a === l.type)
            return n;
          n--;
        }
        if (i < e.length) {
          if ((l = e[i]) && !(2 & l.__u) && o == l.key && a === l.type)
            return i;
          i++;
        }
      }
    return -1;
  }
  function Gt(r, e, t) {
    e[0] == "-"
      ? r.setProperty(e, t ?? "")
      : (r[e] =
          t == null ? "" : typeof t != "number" || Es.test(e) ? t : t + "px");
  }
  function He(r, e, t, s, n) {
    var i;
    e: if (e == "style")
      if (typeof t == "string") r.style.cssText = t;
      else {
        if ((typeof s == "string" && (r.style.cssText = s = ""), s))
          for (e in s) (t && e in t) || Gt(r.style, e, "");
        if (t) for (e in t) (s && t[e] === s[e]) || Gt(r.style, e, t[e]);
      }
    else if (e[0] == "o" && e[1] == "n")
      (i = e != (e = e.replace(Ft, "$1"))),
        (e =
          e.toLowerCase() in r || e == "onFocusOut" || e == "onFocusIn"
            ? e.toLowerCase().slice(2)
            : e.slice(2)),
        r.l || (r.l = {}),
        (r.l[e + i] = t),
        t
          ? s
            ? (t.u = s.u)
            : ((t.u = ot), r.addEventListener(e, i ? lt : at, i))
          : r.removeEventListener(e, i ? lt : at, i);
    else {
      if (n == "http://www.w3.org/2000/svg")
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        e != "width" &&
        e != "height" &&
        e != "href" &&
        e != "list" &&
        e != "form" &&
        e != "tabIndex" &&
        e != "download" &&
        e != "rowSpan" &&
        e != "colSpan" &&
        e != "role" &&
        e != "popover" &&
        e in r
      )
        try {
          r[e] = t ?? "";
          break e;
        } catch {}
      typeof t == "function" ||
        (t == null || (t === !1 && e[4] != "-")
          ? r.removeAttribute(e)
          : r.setAttribute(e, e == "popover" && t == 1 ? "" : t));
    }
  }
  function Kt(r) {
    return function (e) {
      if (this.l) {
        var t = this.l[e.type + r];
        if (e.t == null) e.t = ot++;
        else if (e.t < t.u) return;
        return t(w.event ? w.event(e) : e);
      }
    };
  }
  function ht(r, e, t, s, n, i, o, a, l, c) {
    var u,
      h,
      d,
      f,
      p,
      y,
      _,
      g,
      m,
      S,
      $,
      P,
      ne,
      ie,
      z,
      Ie,
      Le,
      U = e.type;
    if (e.constructor !== void 0) return null;
    128 & t.__u && ((l = !!(32 & t.__u)), (i = [(a = e.__e = t.__e)])),
      (u = w.__b) && u(e);
    e: if (typeof U == "function")
      try {
        if (
          ((g = e.props),
          (m = "prototype" in U && U.prototype.render),
          (S = (u = U.contextType) && s[u.__c]),
          ($ = u ? (S ? S.props.value : u.__) : s),
          t.__c
            ? (_ = (h = e.__c = t.__c).__ = h.__E)
            : (m
                ? (e.__c = h = new U(g, $))
                : ((e.__c = h = new q(g, $)),
                  (h.constructor = U),
                  (h.render = js)),
              S && S.sub(h),
              (h.props = g),
              h.state || (h.state = {}),
              (h.context = $),
              (h.__n = s),
              (d = h.__d = !0),
              (h.__h = []),
              (h._sb = [])),
          m && h.__s == null && (h.__s = h.state),
          m &&
            U.getDerivedStateFromProps != null &&
            (h.__s == h.state && (h.__s = W({}, h.__s)),
            W(h.__s, U.getDerivedStateFromProps(g, h.__s))),
          (f = h.props),
          (p = h.state),
          (h.__v = e),
          d)
        )
          m &&
            U.getDerivedStateFromProps == null &&
            h.componentWillMount != null &&
            h.componentWillMount(),
            m && h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (
            (m &&
              U.getDerivedStateFromProps == null &&
              g !== f &&
              h.componentWillReceiveProps != null &&
              h.componentWillReceiveProps(g, $),
            !h.__e &&
              ((h.shouldComponentUpdate != null &&
                h.shouldComponentUpdate(g, h.__s, $) === !1) ||
                e.__v == t.__v))
          ) {
            for (
              e.__v != t.__v &&
                ((h.props = g), (h.state = h.__s), (h.__d = !1)),
                e.__e = t.__e,
                e.__k = t.__k,
                e.__k.some(function (C) {
                  C && (C.__ = e);
                }),
                P = 0;
              P < h._sb.length;
              P++
            )
              h.__h.push(h._sb[P]);
            (h._sb = []), h.__h.length && o.push(h);
            break e;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(g, h.__s, $),
            m &&
              h.componentDidUpdate != null &&
              h.__h.push(function () {
                h.componentDidUpdate(f, p, y);
              });
        }
        if (
          ((h.context = $),
          (h.props = g),
          (h.__P = r),
          (h.__e = !1),
          (ne = w.__r),
          (ie = 0),
          m)
        ) {
          for (
            h.state = h.__s,
              h.__d = !1,
              ne && ne(e),
              u = h.render(h.props, h.state, h.context),
              z = 0;
            z < h._sb.length;
            z++
          )
            h.__h.push(h._sb[z]);
          h._sb = [];
        } else
          do
            (h.__d = !1),
              ne && ne(e),
              (u = h.render(h.props, h.state, h.context)),
              (h.state = h.__s);
          while (h.__d && ++ie < 25);
        (h.state = h.__s),
          h.getChildContext != null && (s = W(W({}, s), h.getChildContext())),
          m &&
            !d &&
            h.getSnapshotBeforeUpdate != null &&
            (y = h.getSnapshotBeforeUpdate(f, p)),
          (a = Wt(
            r,
            Me(
              (Ie =
                u != null && u.type === ae && u.key == null
                  ? u.props.children
                  : u),
            )
              ? Ie
              : [Ie],
            e,
            t,
            s,
            n,
            i,
            o,
            a,
            l,
            c,
          )),
          (h.base = e.__e),
          (e.__u &= -161),
          h.__h.length && o.push(h),
          _ && (h.__E = h.__ = null);
      } catch (C) {
        if (((e.__v = null), l || i != null))
          if (C.then) {
            for (
              e.__u |= l ? 160 : 128;
              a && a.nodeType == 8 && a.nextSibling;

            )
              a = a.nextSibling;
            (i[i.indexOf(a)] = null), (e.__e = a);
          } else for (Le = i.length; Le--; ) ct(i[Le]);
        else (e.__e = t.__e), (e.__k = t.__k);
        w.__e(C, e, t);
      }
    else
      i == null && e.__v == t.__v
        ? ((e.__k = t.__k), (e.__e = t.__e))
        : (a = e.__e = As(t.__e, e, t, s, n, i, o, l, c));
    return (u = w.diffed) && u(e), 128 & e.__u ? void 0 : a;
  }
  function Vt(r, e, t) {
    for (var s = 0; s < t.length; s++) dt(t[s], t[++s], t[++s]);
    w.__c && w.__c(e, r),
      r.some(function (n) {
        try {
          (r = n.__h),
            (n.__h = []),
            r.some(function (i) {
              i.call(n);
            });
        } catch (i) {
          w.__e(i, n.__v);
        }
      });
  }
  function As(r, e, t, s, n, i, o, a, l) {
    var c,
      u,
      h,
      d,
      f,
      p,
      y,
      _ = t.props,
      g = e.props,
      m = e.type;
    if (
      (m == "svg"
        ? (n = "http://www.w3.org/2000/svg")
        : m == "math"
          ? (n = "http://www.w3.org/1998/Math/MathML")
          : n || (n = "http://www.w3.org/1999/xhtml"),
      i != null)
    ) {
      for (c = 0; c < i.length; c++)
        if (
          (f = i[c]) &&
          "setAttribute" in f == !!m &&
          (m ? f.localName == m : f.nodeType == 3)
        ) {
          (r = f), (i[c] = null);
          break;
        }
    }
    if (r == null) {
      if (m == null) return document.createTextNode(g);
      (r = document.createElementNS(n, m, g.is && g)),
        a && (w.__m && w.__m(e, i), (a = !1)),
        (i = null);
    }
    if (m === null) _ === g || (a && r.data === g) || (r.data = g);
    else {
      if (
        ((i = i && Ne.call(r.childNodes)), (_ = t.props || ye), !a && i != null)
      )
        for (_ = {}, c = 0; c < r.attributes.length; c++)
          _[(f = r.attributes[c]).name] = f.value;
      for (c in _)
        if (((f = _[c]), c != "children")) {
          if (c == "dangerouslySetInnerHTML") h = f;
          else if (!(c in g)) {
            if (
              (c == "value" && "defaultValue" in g) ||
              (c == "checked" && "defaultChecked" in g)
            )
              continue;
            He(r, c, null, f, n);
          }
        }
      for (c in g)
        (f = g[c]),
          c == "children"
            ? (d = f)
            : c == "dangerouslySetInnerHTML"
              ? (u = f)
              : c == "value"
                ? (p = f)
                : c == "checked"
                  ? (y = f)
                  : (a && typeof f != "function") ||
                    _[c] === f ||
                    He(r, c, f, _[c], n);
      if (u)
        a ||
          (h && (u.__html === h.__html || u.__html === r.innerHTML)) ||
          (r.innerHTML = u.__html),
          (e.__k = []);
      else if (
        (h && (r.innerHTML = ""),
        Wt(
          r,
          Me(d) ? d : [d],
          e,
          t,
          s,
          m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : n,
          i,
          o,
          i ? i[0] : t.__k && le(t, 0),
          a,
          l,
        ),
        i != null)
      )
        for (c = i.length; c--; ) ct(i[c]);
      a ||
        ((c = "value"),
        m == "progress" && p == null
          ? r.removeAttribute("value")
          : p !== void 0 &&
            (p !== r[c] ||
              (m == "progress" && !p) ||
              (m == "option" && p !== _[c])) &&
            He(r, c, p, _[c], n),
        (c = "checked"),
        y !== void 0 && y !== r[c] && He(r, c, y, _[c], n));
    }
    return r;
  }
  function dt(r, e, t) {
    try {
      if (typeof r == "function") {
        var s = typeof r.__u == "function";
        s && r.__u(), (s && e == null) || (r.__u = r(e));
      } else r.current = e;
    } catch (n) {
      w.__e(n, t);
    }
  }
  function Qt(r, e, t) {
    var s, n;
    if (
      (w.unmount && w.unmount(r),
      (s = r.ref) && ((s.current && s.current !== r.__e) || dt(s, null, e)),
      (s = r.__c) != null)
    ) {
      if (s.componentWillUnmount)
        try {
          s.componentWillUnmount();
        } catch (i) {
          w.__e(i, e);
        }
      s.base = s.__P = null;
    }
    if ((s = r.__k))
      for (n = 0; n < s.length; n++)
        s[n] && Qt(s[n], e, t || typeof r.type != "function");
    t || ct(r.__e), (r.__c = r.__ = r.__e = void 0);
  }
  function js(r, e, t) {
    return this.constructor(r, t);
  }
  function Cs(r, e, t) {
    var s, n, i, o;
    e == document && (e = document.documentElement),
      w.__ && w.__(r, e),
      (n = (s = typeof t == "function") ? null : e.__k),
      (i = []),
      (o = []),
      ht(
        e,
        (r = e.__k = ut(ae, null, [r])),
        n || ye,
        ye,
        e.namespaceURI,
        n ? null : e.firstChild ? Ne.call(e.childNodes) : null,
        i,
        n ? n.__e : e.firstChild,
        s,
        o,
      ),
      Vt(i, r, o);
  }
  (Ne = qt.slice),
    (w = {
      __e: function (r, e, t, s) {
        for (var n, i, o; (e = e.__); )
          if ((n = e.__c) && !n.__)
            try {
              if (
                ((i = n.constructor) &&
                  i.getDerivedStateFromError != null &&
                  (n.setState(i.getDerivedStateFromError(r)), (o = n.__d)),
                n.componentDidCatch != null &&
                  (n.componentDidCatch(r, s || {}), (o = n.__d)),
                o)
              )
                return (n.__E = n);
            } catch (a) {
              r = a;
            }
        throw r;
      },
    }),
    (Nt = 0),
    (q.prototype.setState = function (r, e) {
      var t;
      (t =
        this.__s != null && this.__s !== this.state
          ? this.__s
          : (this.__s = W({}, this.state))),
        typeof r == "function" && (r = r(W({}, t), this.props)),
        r && W(t, r),
        r != null && this.__v && (e && this._sb.push(e), zt(this));
    }),
    (q.prototype.forceUpdate = function (r) {
      this.__v && ((this.__e = !0), r && this.__h.push(r), zt(this));
    }),
    (q.prototype.render = ae),
    (X = []),
    (Bt =
      typeof Promise == "function"
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (it = function (r, e) {
      return r.__v.__b - e.__v.__b;
    }),
    (Fe.__r = 0),
    (Ft = /(PointerCapture)$|Capture$/i),
    (ot = 0),
    (at = Kt(!1)),
    (lt = Kt(!0));
  var Rs = 0;
  function v(r, e, t, s, n, i) {
    e || (e = {});
    var o,
      a,
      l = e;
    if ("ref" in l)
      for (a in ((l = {}), e)) a == "ref" ? (o = e[a]) : (l[a] = e[a]);
    var c = {
      type: r,
      props: l,
      key: t,
      ref: o,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: --Rs,
      __i: -1,
      __u: 0,
      __source: n,
      __self: i,
    };
    if (typeof r == "function" && (o = r.defaultProps))
      for (a in o) l[a] === void 0 && (l[a] = o[a]);
    return w.vnode && w.vnode(c), c;
  }
  var ce,
    O,
    ft,
    Xt,
    ue = 0,
    Yt = [],
    A = w,
    Zt = A.__b,
    er = A.__r,
    tr = A.diffed,
    rr = A.__c,
    sr = A.unmount,
    nr = A.__;
  function ze(r, e) {
    A.__h && A.__h(O, r, ue || e), (ue = 0);
    var t = O.__H || (O.__H = { __: [], __h: [] });
    return r >= t.__.length && t.__.push({}), t.__[r];
  }
  function we(r) {
    return (ue = 1), xs(lr, r);
  }
  function xs(r, e, t) {
    var s = ze(ce++, 2);
    if (
      ((s.t = r),
      !s.__c &&
        ((s.__ = [
          t ? t(e) : lr(void 0, e),
          function (a) {
            var l = s.__N ? s.__N[0] : s.__[0],
              c = s.t(l, a);
            l !== c && ((s.__N = [c, s.__[1]]), s.__c.setState({}));
          },
        ]),
        (s.__c = O),
        !O.u))
    ) {
      var n = function (a, l, c) {
        if (!s.__c.__H) return !0;
        var u = s.__c.__H.__.filter(function (d) {
          return !!d.__c;
        });
        if (
          u.every(function (d) {
            return !d.__N;
          })
        )
          return !i || i.call(this, a, l, c);
        var h = s.__c.props !== a;
        return (
          u.forEach(function (d) {
            if (d.__N) {
              var f = d.__[0];
              (d.__ = d.__N), (d.__N = void 0), f !== d.__[0] && (h = !0);
            }
          }),
          (i && i.call(this, a, l, c)) || h
        );
      };
      O.u = !0;
      var i = O.shouldComponentUpdate,
        o = O.componentWillUpdate;
      (O.componentWillUpdate = function (a, l, c) {
        if (this.__e) {
          var u = i;
          (i = void 0), n(a, l, c), (i = u);
        }
        o && o.call(this, a, l, c);
      }),
        (O.shouldComponentUpdate = n);
    }
    return s.__N || s.__;
  }
  function B(r, e) {
    var t = ze(ce++, 3);
    !A.__s && pt(t.__H, e) && ((t.__ = r), (t.i = e), O.__H.__h.push(t));
  }
  function ir(r, e) {
    var t = ze(ce++, 4);
    !A.__s && pt(t.__H, e) && ((t.__ = r), (t.i = e), O.__h.push(t));
  }
  function D(r) {
    return (
      (ue = 5),
      or(function () {
        return { current: r };
      }, [])
    );
  }
  function Is(r, e, t) {
    (ue = 6),
      ir(
        function () {
          return typeof r == "function"
            ? (r(e()),
              function () {
                return r(null);
              })
            : r
              ? ((r.current = e()),
                function () {
                  return (r.current = null);
                })
              : void 0;
        },
        t == null ? t : t.concat(r),
      );
  }
  function or(r, e) {
    var t = ze(ce++, 7);
    return pt(t.__H, e) && ((t.__ = r()), (t.__H = e), (t.__h = r)), t.__;
  }
  function Y(r, e) {
    return (
      (ue = 8),
      or(function () {
        return r;
      }, e)
    );
  }
  function Ls() {
    for (var r; (r = Yt.shift()); )
      if (r.__P && r.__H)
        try {
          r.__H.__h.forEach(We), r.__H.__h.forEach(_t), (r.__H.__h = []);
        } catch (e) {
          (r.__H.__h = []), A.__e(e, r.__v);
        }
  }
  (A.__b = function (r) {
    (O = null), Zt && Zt(r);
  }),
    (A.__ = function (r, e) {
      r && e.__k && e.__k.__m && (r.__m = e.__k.__m), nr && nr(r, e);
    }),
    (A.__r = function (r) {
      er && er(r), (ce = 0);
      var e = (O = r.__c).__H;
      e &&
        (ft === O
          ? ((e.__h = []),
            (O.__h = []),
            e.__.forEach(function (t) {
              t.__N && (t.__ = t.__N), (t.i = t.__N = void 0);
            }))
          : (e.__h.forEach(We), e.__h.forEach(_t), (e.__h = []), (ce = 0))),
        (ft = O);
    }),
    (A.diffed = function (r) {
      tr && tr(r);
      var e = r.__c;
      e &&
        e.__H &&
        (e.__H.__h.length &&
          ((Yt.push(e) !== 1 && Xt === A.requestAnimationFrame) ||
            ((Xt = A.requestAnimationFrame) || Us)(Ls)),
        e.__H.__.forEach(function (t) {
          t.i && (t.__H = t.i), (t.i = void 0);
        })),
        (ft = O = null);
    }),
    (A.__c = function (r, e) {
      e.some(function (t) {
        try {
          t.__h.forEach(We),
            (t.__h = t.__h.filter(function (s) {
              return !s.__ || _t(s);
            }));
        } catch (s) {
          e.some(function (n) {
            n.__h && (n.__h = []);
          }),
            (e = []),
            A.__e(s, t.__v);
        }
      }),
        rr && rr(r, e);
    }),
    (A.unmount = function (r) {
      sr && sr(r);
      var e,
        t = r.__c;
      t &&
        t.__H &&
        (t.__H.__.forEach(function (s) {
          try {
            We(s);
          } catch (n) {
            e = n;
          }
        }),
        (t.__H = void 0),
        e && A.__e(e, t.__v));
    });
  var ar = typeof requestAnimationFrame == "function";
  function Us(r) {
    var e,
      t = function () {
        clearTimeout(s), ar && cancelAnimationFrame(e), setTimeout(r);
      },
      s = setTimeout(t, 100);
    ar && (e = requestAnimationFrame(t));
  }
  function We(r) {
    var e = O,
      t = r.__c;
    typeof t == "function" && ((r.__c = void 0), t()), (O = e);
  }
  function _t(r) {
    var e = O;
    (r.__c = r.__()), (O = e);
  }
  function pt(r, e) {
    return (
      !r ||
      r.length !== e.length ||
      e.some(function (t, s) {
        return t !== r[s];
      })
    );
  }
  function lr(r, e) {
    return typeof e == "function" ? e(r) : e;
  }
  const Ds = (r, e) => {
    const t = [50, 30, 70, 50],
      s = 400;
    let n = 0,
      i = 0,
      o = null;
    const a = () => {
      if ((e(!0), i >= t.length - 1)) {
        e(!1);
        return;
      }
      const l = t[i],
        c = t[i + 1],
        u = n / (s / 2),
        h = u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2,
        d = l + (c - l) * h;
      r(d),
        n++,
        n >= s / 2 && ((n = 0), i++),
        i < t.length - 1 ? (o = requestAnimationFrame(a)) : e(!1);
    };
    return (
      (o = requestAnimationFrame(a)),
      () => {
        o && (cancelAnimationFrame(o), (o = null));
      }
    );
  };
  function cr(r, e) {
    for (var t in e) r[t] = e[t];
    return r;
  }
  function ur(r, e) {
    for (var t in r) if (t !== "__source" && !(t in e)) return !0;
    for (var s in e) if (s !== "__source" && r[s] !== e[s]) return !0;
    return !1;
  }
  function hr(r, e) {
    (this.props = r), (this.context = e);
  }
  ((hr.prototype = new q()).isPureReactComponent = !0),
    (hr.prototype.shouldComponentUpdate = function (r, e) {
      return ur(this.props, r) || ur(this.state, e);
    });
  var dr = w.__b;
  w.__b = function (r) {
    r.type && r.type.__f && r.ref && ((r.props.ref = r.ref), (r.ref = null)),
      dr && dr(r);
  };
  var Ns =
    (typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref")) ||
    3911;
  function Je(r) {
    function e(t) {
      var s = cr({}, t);
      return delete s.ref, r(s, t.ref || null);
    }
    return (
      (e.$$typeof = Ns),
      (e.render = e),
      (e.prototype.isReactComponent = e.__f = !0),
      (e.displayName = "ForwardRef(" + (r.displayName || r.name) + ")"),
      e
    );
  }
  var Ms = w.__e;
  w.__e = function (r, e, t, s) {
    if (r.then) {
      for (var n, i = e; (i = i.__); )
        if ((n = i.__c) && n.__c)
          return (
            e.__e == null && ((e.__e = t.__e), (e.__k = t.__k)), n.__c(r, e)
          );
    }
    Ms(r, e, t, s);
  };
  var fr = w.unmount;
  function _r(r, e, t) {
    return (
      r &&
        (r.__c &&
          r.__c.__H &&
          (r.__c.__H.__.forEach(function (s) {
            typeof s.__c == "function" && s.__c();
          }),
          (r.__c.__H = null)),
        (r = cr({}, r)).__c != null &&
          (r.__c.__P === t && (r.__c.__P = e), (r.__c = null)),
        (r.__k =
          r.__k &&
          r.__k.map(function (s) {
            return _r(s, e, t);
          }))),
      r
    );
  }
  function pr(r, e, t) {
    return (
      r &&
        t &&
        ((r.__v = null),
        (r.__k =
          r.__k &&
          r.__k.map(function (s) {
            return pr(s, e, t);
          })),
        r.__c &&
          r.__c.__P === e &&
          (r.__e && t.appendChild(r.__e), (r.__c.__e = !0), (r.__c.__P = t))),
      r
    );
  }
  function vt() {
    (this.__u = 0), (this.o = null), (this.__b = null);
  }
  function vr(r) {
    var e = r.__.__c;
    return e && e.__a && e.__a(r);
  }
  function Ge() {
    (this.i = null), (this.l = null);
  }
  (w.unmount = function (r) {
    var e = r.__c;
    e && e.__R && e.__R(), e && 32 & r.__u && (r.type = null), fr && fr(r);
  }),
    ((vt.prototype = new q()).__c = function (r, e) {
      var t = e.__c,
        s = this;
      s.o == null && (s.o = []), s.o.push(t);
      var n = vr(s.__v),
        i = !1,
        o = function () {
          i || ((i = !0), (t.__R = null), n ? n(a) : a());
        };
      t.__R = o;
      var a = function () {
        if (!--s.__u) {
          if (s.state.__a) {
            var l = s.state.__a;
            s.__v.__k[0] = pr(l, l.__c.__P, l.__c.__O);
          }
          var c;
          for (s.setState({ __a: (s.__b = null) }); (c = s.o.pop()); )
            c.forceUpdate();
        }
      };
      s.__u++ || 32 & e.__u || s.setState({ __a: (s.__b = s.__v.__k[0]) }),
        r.then(o, o);
    }),
    (vt.prototype.componentWillUnmount = function () {
      this.o = [];
    }),
    (vt.prototype.render = function (r, e) {
      if (this.__b) {
        if (this.__v.__k) {
          var t = document.createElement("div"),
            s = this.__v.__k[0].__c;
          this.__v.__k[0] = _r(this.__b, t, (s.__O = s.__P));
        }
        this.__b = null;
      }
      var n = e.__a && ut(ae, null, r.fallback);
      return n && (n.__u &= -33), [ut(ae, null, e.__a ? null : r.children), n];
    });
  var gr = function (r, e, t) {
    if (
      (++t[1] === t[0] && r.l.delete(e),
      r.props.revealOrder && (r.props.revealOrder[0] !== "t" || !r.l.size))
    )
      for (t = r.i; t; ) {
        for (; t.length > 3; ) t.pop()();
        if (t[1] < t[0]) break;
        r.i = t = t[2];
      }
  };
  ((Ge.prototype = new q()).__a = function (r) {
    var e = this,
      t = vr(e.__v),
      s = e.l.get(r);
    return (
      s[0]++,
      function (n) {
        var i = function () {
          e.props.revealOrder ? (s.push(n), gr(e, r, s)) : n();
        };
        t ? t(i) : i();
      }
    );
  }),
    (Ge.prototype.render = function (r) {
      (this.i = null), (this.l = new Map());
      var e = qe(r.children);
      r.revealOrder && r.revealOrder[0] === "b" && e.reverse();
      for (var t = e.length; t--; ) this.l.set(e[t], (this.i = [1, 0, this.i]));
      return r.children;
    }),
    (Ge.prototype.componentDidUpdate = Ge.prototype.componentDidMount =
      function () {
        var r = this;
        this.l.forEach(function (e, t) {
          gr(r, t, e);
        });
      });
  var Bs =
      (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) ||
      60103,
    Fs =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    qs = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    Hs = /[A-Z0-9]/g,
    zs = typeof document < "u",
    Ws = function (r) {
      return (
        typeof Symbol < "u" && typeof Symbol() == "symbol"
          ? /fil|che|rad/
          : /fil|che|ra/
      ).test(r);
    };
  (q.prototype.isReactComponent = {}),
    [
      "componentWillMount",
      "componentWillReceiveProps",
      "componentWillUpdate",
    ].forEach(function (r) {
      Object.defineProperty(q.prototype, r, {
        configurable: !0,
        get: function () {
          return this["UNSAFE_" + r];
        },
        set: function (e) {
          Object.defineProperty(this, r, {
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    });
  var mr = w.event;
  function Js() {}
  function Gs() {
    return this.cancelBubble;
  }
  function Ks() {
    return this.defaultPrevented;
  }
  w.event = function (r) {
    return (
      mr && (r = mr(r)),
      (r.persist = Js),
      (r.isPropagationStopped = Gs),
      (r.isDefaultPrevented = Ks),
      (r.nativeEvent = r)
    );
  };
  var Vs = {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    yr = w.vnode;
  w.vnode = function (r) {
    typeof r.type == "string" &&
      (function (e) {
        var t = e.props,
          s = e.type,
          n = {},
          i = s.indexOf("-") === -1;
        for (var o in t) {
          var a = t[o];
          if (
            !(
              (o === "value" && "defaultValue" in t && a == null) ||
              (zs && o === "children" && s === "noscript") ||
              o === "class" ||
              o === "className"
            )
          ) {
            var l = o.toLowerCase();
            o === "defaultValue" && "value" in t && t.value == null
              ? (o = "value")
              : o === "download" && a === !0
                ? (a = "")
                : l === "translate" && a === "no"
                  ? (a = !1)
                  : l[0] === "o" && l[1] === "n"
                    ? l === "ondoubleclick"
                      ? (o = "ondblclick")
                      : l !== "onchange" ||
                          (s !== "input" && s !== "textarea") ||
                          Ws(t.type)
                        ? l === "onfocus"
                          ? (o = "onfocusin")
                          : l === "onblur"
                            ? (o = "onfocusout")
                            : qs.test(o) && (o = l)
                        : (l = o = "oninput")
                    : i && Fs.test(o)
                      ? (o = o.replace(Hs, "-$&").toLowerCase())
                      : a === null && (a = void 0),
              l === "oninput" && n[(o = l)] && (o = "oninputCapture"),
              (n[o] = a);
          }
        }
        s == "select" &&
          n.multiple &&
          Array.isArray(n.value) &&
          (n.value = qe(t.children).forEach(function (c) {
            c.props.selected = n.value.indexOf(c.props.value) != -1;
          })),
          s == "select" &&
            n.defaultValue != null &&
            (n.value = qe(t.children).forEach(function (c) {
              c.props.selected = n.multiple
                ? n.defaultValue.indexOf(c.props.value) != -1
                : n.defaultValue == c.props.value;
            })),
          t.class && !t.className
            ? ((n.class = t.class), Object.defineProperty(n, "className", Vs))
            : ((t.className && !t.class) || (t.class && t.className)) &&
              (n.class = n.className = t.className),
          (e.props = n);
      })(r),
      (r.$$typeof = Bs),
      yr && yr(r);
  };
  var wr = w.__r;
  w.__r = function (r) {
    wr && wr(r), r.__c;
  };
  var br = w.diffed;
  w.diffed = function (r) {
    br && br(r);
    var e = r.props,
      t = r.__e;
    t != null &&
      r.type === "textarea" &&
      "value" in e &&
      e.value !== t.value &&
      (t.value = e.value == null ? "" : e.value);
  };
  var kr = Je(({ transition: r, ...e }, t) => {
    let s = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      transition: r ? `clip-path ${r}` : void 0,
      userSelect: "none",
      willChange: "clip-path, transition",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      WebkitUserSelect: "none",
    };
    return v("div", { ...e, style: s, "data-rcs": "clip-item", ref: t });
  });
  kr.displayName = "ContainerClip";
  var Sr = Je(
    (
      { children: r, disabled: e, portrait: t, position: s, transition: n },
      i,
    ) => {
      let o = {
        position: "absolute",
        top: 0,
        width: t ? "100%" : void 0,
        height: t ? void 0 : "100%",
        background: "none",
        border: 0,
        padding: 0,
        pointerEvents: "all",
        appearance: "none",
        WebkitAppearance: "none",
        MozAppearance: "none",
        outline: 0,
        transform: t ? "translate3d(0, -50% ,0)" : "translate3d(-50%, 0, 0)",
        transition: n ? `${t ? "top" : "left"} ${n}` : void 0,
      };
      return v("button", {
        ref: i,
        "aria-label": "Drag to move or focus and use arrow keys",
        "aria-orientation": t ? "vertical" : "horizontal",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": s,
        "data-rcs": "handle-container",
        disabled: e,
        role: "slider",
        style: o,
        children: r,
      });
    },
  );
  Sr.displayName = "ThisHandleContainer";
  var $r = ({ flip: r }) =>
      v("div", {
        className: "__rcs-handle-arrow",
        style: {
          width: 0,
          height: 0,
          borderTop: "8px solid transparent",
          borderRight: "10px solid",
          borderBottom: "8px solid transparent",
          transform: r ? "rotate(180deg)" : void 0,
        },
      }),
    Tr = ({
      className: r = "__rcs-handle-root",
      disabled: e,
      buttonStyle: t,
      linesStyle: s,
      portrait: n,
      style: i,
      ...o
    }) => {
      let a = {
          display: "flex",
          flexDirection: n ? "row" : "column",
          placeItems: "center",
          height: "100%",
          cursor: e ? "not-allowed" : n ? "ns-resize" : "ew-resize",
          pointerEvents: "none",
          color: "#fff",
          ...i,
        },
        l = {
          flexGrow: 1,
          height: n ? 2 : "100%",
          width: n ? "100%" : 2,
          backgroundColor: "currentColor",
          pointerEvents: "auto",
          boxShadow: "0 0 4px rgba(0,0,0,.5)",
          ...s,
        },
        c = {
          display: "grid",
          gridAutoFlow: "column",
          gap: 8,
          placeContent: "center",
          flexShrink: 0,
          width: 56,
          height: 56,
          borderRadius: "50%",
          borderStyle: "solid",
          borderWidth: 2,
          pointerEvents: "auto",
          backdropFilter: "blur(7px)",
          WebkitBackdropFilter: "blur(7px)",
          backgroundColor: "rgba(0, 0, 0, 0.125)",
          boxShadow: "0 0 4px rgba(0,0,0,.35)",
          transform: n ? "rotate(90deg)" : void 0,
          ...t,
        };
      return v("div", {
        ...o,
        className: r,
        style: a,
        children: [
          v("div", { className: "__rcs-handle-line", style: l }),
          v("div", {
            className: "__rcs-handle-button",
            style: c,
            children: [v($r, {}), v($r, { flip: !0 })],
          }),
          v("div", { className: "__rcs-handle-line", style: l }),
        ],
      });
    },
    Er = ((r) => (
      (r.ARROW_LEFT = "ArrowLeft"),
      (r.ARROW_RIGHT = "ArrowRight"),
      (r.ARROW_UP = "ArrowUp"),
      (r.ARROW_DOWN = "ArrowDown"),
      r
    ))(Er || {}),
    Qs = ({
      boxSizing: r = "border-box",
      objectFit: e = "cover",
      objectPosition: t = "center center",
      ...s
    } = {}) => ({
      display: "block",
      width: "100%",
      height: "100%",
      maxWidth: "100%",
      boxSizing: r,
      objectFit: e,
      objectPosition: t,
      ...s,
    }),
    Xs = (r) => {
      let e = D(r);
      return (
        B(() => {
          e.current = r;
        }),
        e.current
      );
    },
    gt = (r, e, t, s) => {
      let n = D();
      B(() => {
        n.current = e;
      }, [e]),
        B(() => {
          if (!(t && t.addEventListener)) return;
          let i = (o) => n.current && n.current(o);
          return (
            t.addEventListener(r, i, s),
            () => {
              t.removeEventListener(r, i, s);
            }
          );
        }, [r, t, s]);
    },
    Ys =
      typeof window < "u" &&
      typeof window.document < "u" &&
      typeof window.document.createElement < "u"
        ? ir
        : B,
    Zs = (r, e) => {
      let t = D(),
        s = Y(() => {
          r.current && t.current && t.current.observe(r.current);
        }, [r]);
      Ys(
        () => (
          (t.current = new ResizeObserver(([n]) => e(n.contentRect))),
          s(),
          () => {
            t.current && t.current.disconnect();
          }
        ),
        [e, s],
      );
    },
    Ke = { capture: !1, passive: !0 },
    mt = { capture: !0, passive: !1 },
    en = (r) => {
      r.preventDefault(), r.currentTarget.focus();
    },
    Pr = Je(
      (
        {
          boundsPadding: r = 0,
          browsingContext: e = globalThis,
          changePositionOnHover: t = !1,
          disabled: s = !1,
          handle: n,
          itemOne: i,
          itemTwo: o,
          keyboardIncrement: a = "5%",
          onlyHandleDraggable: l = !1,
          onPositionChange: c,
          portrait: u = !1,
          position: h = 50,
          style: d,
          transition: f,
          ...p
        },
        y,
      ) => {
        let _ = D(null),
          g = D(null),
          m = D(null),
          S = D(h),
          [$, P] = we(!1),
          [ne, ie] = we(!0),
          z = D(!1),
          [Ie, Le] = we(),
          U = Xs(h),
          C = Y(
            function ({ x: T, y: I, isOffset: M }) {
              let Q = _.current,
                De = m.current,
                st = g.current,
                {
                  width: me,
                  height: oe,
                  left: lo,
                  top: co,
                } = Q.getBoundingClientRect();
              if (me === 0 || oe === 0) return;
              let uo = u
                  ? M
                    ? I - co - e.scrollY
                    : I
                  : M
                    ? T - lo - e.scrollX
                    : T,
                $s = Math.min(Math.max((uo / (u ? oe : me)) * 100, 0), 100),
                Dt = u ? oe / (Q.offsetHeight || 1) : me / (Q.offsetWidth || 1),
                Ts = ((r * Dt) / (u ? oe : me)) * 100,
                nt = Math.min(Math.max($s, Ts * Dt), 100 - Ts * Dt);
              (S.current = $s),
                De.setAttribute("aria-valuenow", `${Math.round(S.current)}`),
                (De.style.top = u ? `${nt}%` : "0"),
                (De.style.left = u ? "0" : `${nt}%`),
                (st.style.clipPath = u
                  ? `inset(${nt}% 0 0 0)`
                  : `inset(0 0 0 ${nt}%)`),
                c && c(S.current);
            },
            [r, c, u, e],
          );
        B(() => {
          let { width: T, height: I } = _.current.getBoundingClientRect(),
            M = h === U ? S.current : h;
          C({ x: (T / 100) * M, y: (I / 100) * M });
        }, [r, h, u, U, C]);
        let so = Y(
            (T) => {
              T.preventDefault(),
                !(s || T.button !== 0) &&
                  (C({ isOffset: !0, x: T.pageX, y: T.pageY }), P(!0), ie(!0));
            },
            [s, C],
          ),
          ge = Y(
            function (T) {
              C({ isOffset: !0, x: T.pageX, y: T.pageY }), ie(!1);
            },
            [C],
          ),
          Ue = Y(() => {
            P(!1), ie(!0);
          }, []),
          no = Y(
            ({ width: T, height: I }) => {
              let { width: M, height: Q } = _.current.getBoundingClientRect();
              C({
                x: ((T / 100) * S.current * M) / T,
                y: ((I / 100) * S.current * Q) / I,
              });
            },
            [C],
          ),
          io = Y(
            (T) => {
              if (!Object.values(Er).includes(T.key)) return;
              T.preventDefault(), ie(!0);
              let { top: I, left: M } = m.current.getBoundingClientRect(),
                { width: Q, height: De } = _.current.getBoundingClientRect(),
                st = typeof a == "string" ? parseFloat(a) : (a / Q) * 100,
                me = u
                  ? T.key === "ArrowLeft" || T.key === "ArrowDown"
                  : T.key === "ArrowRight" || T.key === "ArrowUp",
                oe = Math.min(
                  Math.max(me ? S.current + st : S.current - st, 0),
                  100,
                );
              C({ x: u ? M : (Q * oe) / 100, y: u ? (De * oe) / 100 : I });
            },
            [a, u, C],
          );
        B(() => {
          Le(l ? m.current : _.current);
        }, [l]),
          B(() => {
            let T = _.current,
              I = () => {
                $ || Ue();
              };
            return (
              t &&
                (T.addEventListener("pointermove", ge, Ke),
                T.addEventListener("pointerleave", I, Ke)),
              () => {
                T.removeEventListener("pointermove", ge),
                  T.removeEventListener("pointerleave", I);
              }
            );
          }, [t, ge, Ue, $]),
          B(
            () => (
              $ &&
                !z.current &&
                (e.addEventListener("pointermove", ge, Ke),
                e.addEventListener("pointerup", Ue, Ke),
                (z.current = !0)),
              () => {
                z.current &&
                  (e.removeEventListener("pointermove", ge),
                  e.removeEventListener("pointerup", Ue),
                  (z.current = !1));
              }
            ),
            [ge, Ue, $, e],
          ),
          Is(
            y,
            () => ({
              rootContainer: _.current,
              handleContainer: m.current,
              setPosition(T) {
                let { width: I, height: M } = _.current.getBoundingClientRect();
                C({ x: (I / 100) * T, y: (M / 100) * T });
              },
            }),
            [C],
          ),
          Zs(_, no),
          gt("keydown", io, m.current, mt),
          gt("click", en, m.current, mt),
          gt("pointerdown", so, Ie, mt);
        let oo = n || v(Tr, { disabled: s, portrait: u }),
          Ss = ne ? f : void 0,
          ao = {
            position: "relative",
            display: "flex",
            overflow: "hidden",
            cursor: $ ? (u ? "ns-resize" : "ew-resize") : void 0,
            touchAction: "none",
            userSelect: "none",
            KhtmlUserSelect: "none",
            msUserSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            ...d,
          };
        return v("div", {
          ...p,
          ref: _,
          style: ao,
          "data-rcs": "root",
          children: [
            i,
            v(kr, { ref: g, transition: Ss, children: o }),
            v(Sr, {
              disabled: s,
              portrait: u,
              position: Math.round(S.current),
              ref: m,
              transition: Ss,
              children: oo,
            }),
          ],
        });
      },
    );
  Pr.displayName = "ReactCompareSlider";
  var yt = Je(({ style: r, ...e }, t) => {
    let s = Qs(r);
    return v("img", { ref: t, ...e, style: s, "data-rcs": "image" });
  });
  yt.displayName = "ReactCompareSliderImage";
  function Or({ label: r, position: e }) {
    return !r ||
      e.includes("outside") ||
      e.includes("undefined") ||
      e.includes("null")
      ? null
      : v("div", {
          className: `sldr-label-default sldr-label-position-${e}`,
          children: r,
        });
  }
  function Ar({ children: r, justifyContent: e, alignItems: t }) {
    return v("div", {
      className: "sldr-label-img-container",
      style: { justifyContent: e, alignItems: t },
      children: r,
    });
  }
  function tn({ portrait: r }) {
    return v("div", {
      className: `sldr-minimal-handle ${r && "sldr-minimal-handle--portrait"}`,
      children: v("div", {
        className: `sldr-minimal-handle-divider ${r ? "sldr-minimal-handle-divider--portrait" : "sldr-minimal-handle-divider--horizontal"}`,
      }),
    });
  }
  const Ve = ({
    direction: r = "left",
    width: e = "20",
    height: t = "20",
    strokeWidth: s = "2",
  }) =>
    v("svg", {
      className: `sldr-skeleton-arrow-icon sldr-skeleton-arrow-direction-${r}`,
      width: e,
      height: t,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { transition: "transform 0.2s ease" },
      children: v("path", {
        d: "M15 19L8 12L15 5",
        strokeWidth: s,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    });
  function rn({ portrait: r }) {
    return v("div", {
      className: `sldr-skeleton-handle ${r && "sldr-skeleton-handle--portrait"}`,
      children: [
        v("div", {
          className: "sldr-skeleton-left-arrow ",
          children: v(Ve, { direction: r ? "up" : "left" }),
        }),
        v("div", {
          className: `sldr-skeleton-handle-divider ${r ? "sldr-skeleton-handle-divider--portrait" : "sldr-skeleton-handle-divider--horizontal"}`,
        }),
        v("div", {
          className: "sldr-skeleton-right-arrow ",
          children: v(Ve, { direction: r ? "down" : "right" }),
        }),
      ],
    });
  }
  function sn({ portrait: r }) {
    return v("div", {
      className: `sldr-handle-solid-handle ${r && "sldr-handle-solid-handle--portrait"}`,
      children: [
        v("div", {
          className: `sldr-handle-solid-button ${r ? "sldr-handle-solid-button--portrait" : "sldr-handle-solid-button--horizontal"}`,
          children: [
            v(Ve, {
              direction: "left",
              width: "16",
              height: "16",
              strokeWidth: "2.6",
            }),
            v(Ve, {
              direction: "right",
              width: "16",
              height: "16",
              strokeWidth: "2.6",
            }),
          ],
        }),
        v("div", {
          className: `sldr-handle-solid-divider ${r ? "sldr-handle-solid-divider--portrait" : "sldr-handle-solid-divider--horizontal"}`,
        }),
      ],
    });
  }
  function nn({ portrait: r }) {
    return v("div", {
      className: `sldr-modern-handle ${r && "sldr-modern-handle--portrait"}`,
      children: [
        v("div", {
          className: `sldr-modern-handle-divider ${r ? "sldr-modern-handle-divider--portrait" : "sldr-modern-handle-divider--horizontal"}`,
        }),
        v("div", {
          className: `sldr-modern-handle-button ${r ? "sldr-modern-handle-button--portrait" : "sldr-modern-handle-button--horizontal"}`,
        }),
      ],
    });
  }
  function jr({ afterLabel: r, beforeLabel: e }) {
    return !e && !r
      ? null
      : v("div", {
          className: "sldr-app-slider-label-container",
          children: [
            v("div", { className: " sldr-label-outside-label", children: e }),
            v("div", { className: " sldr-label-outside-label", children: r }),
          ],
        });
  }
  function on({ slider: r }) {
    const [e, t] = we(50),
      [s, n] = we(!1),
      i = D(null),
      o = D(null),
      a = D(!1);
    if (
      (B(() => {
        !s && o.current && (o.current(), (o.current = null));
      }, [s]),
      B(() => {
        if (
          !(r != null && r.animation) ||
          (r == null ? void 0 : r.animation) === "no"
        )
          return;
        const c = new IntersectionObserver(
          ([u]) => {
            if (u.isIntersecting && !a.current) {
              (a.current = !0), c.disconnect();
              const h = Ds(t, n);
              o.current = h;
            }
          },
          { threshold: 0.5 },
        );
        return i.current && c.observe(i.current), () => c.disconnect();
      }, []),
      !r.firstImage || !r.secondImage)
    )
      return null;
    const l = (c) => {
      const u = (r == null ? void 0 : r.direction) === "vertical";
      switch (c) {
        case "skeleton":
          return v(rn, { portrait: u });
        case "minimal":
          return v(tn, { portrait: u });
        case "solid":
          return v(sn, { portrait: u });
        case "modern":
          return v(nn, { portrait: u });
        default:
          return v(Tr, {
            style: {
              color: (r == null ? void 0 : r.dividerHandleColor) || "#fff",
            },
            portrait: u,
          });
      }
    };
    return v("div", {
      ref: i,
      className: "sldr-app-slider-parent-container",
      children: [
        v("style", {
          children: ` 
        :root {
          --slider-padding-top: ${(r == null ? void 0 : r.paddingTop) || 0}px;
          --slider-padding-bottom: ${(r == null ? void 0 : r.paddingBottom) || 0}px;
          --default-handle-color: ${(r == null ? void 0 : r.dividerHandleColor) || "#fff"};  
          --default-arrow-color: ${(r == null ? void 0 : r.arrowColor) || "#000"};
          --default-label-background-color: ${(r == null ? void 0 : r.labelBackgroundColor) || "#F3F3F3"};
          --default-label-color: ${(r == null ? void 0 : r.labelTextColor) || "#000"};
  }`,
        }),
        v("div", {
          style: { position: "relative" },
          className: `sldr-app-slider-container-parent sldr-padding ${r != null && r.alignment ? (r == null ? void 0 : r.alignment) : "items-center"}`,
          children: [
            (!(r != null && r.labelPosition) ||
              (r == null ? void 0 : r.labelPosition) === "outside-top") &&
              v(jr, {
                beforeLabel: r == null ? void 0 : r.beforeLabel,
                afterLabel: r == null ? void 0 : r.afterLabel,
                position: r == null ? void 0 : r.labelPosition,
              }),
            v(Pr, {
              onPointerDown: () => {
                s && n(!1);
              },
              handle: l((r == null ? void 0 : r.dividerStyle) || "default"),
              position: e,
              portrait: (r == null ? void 0 : r.direction) === "vertical",
              itemOne: v(Ar, {
                justifyContent: "flex-start",
                alignItems: "flex-end",
                children: [
                  v(Or, {
                    position: `left-${r == null ? void 0 : r.labelPosition}`,
                    label: r == null ? void 0 : r.beforeLabel,
                  }),
                  v(yt, {
                    className: "bas-max-height",
                    src:
                      (r == null ? void 0 : r.firstImage) ||
                      "/before_image.png",
                  }),
                ],
              }),
              itemTwo: v(Ar, {
                justifyContent: "flex-end",
                alignItems: "flex-start",
                children: [
                  v(Or, {
                    position: `right-${r == null ? void 0 : r.labelPosition}`,
                    label: r == null ? void 0 : r.afterLabel,
                  }),
                  v(yt, {
                    className: "bas-max-height",
                    src:
                      (r == null ? void 0 : r.secondImage) ||
                      "/after_image.jpg",
                  }),
                ],
              }),
            }),
            (r == null ? void 0 : r.labelPosition) === "outside-bottom" &&
              v(jr, {
                beforeLabel: r == null ? void 0 : r.beforeLabel,
                afterLabel: r == null ? void 0 : r.afterLabel,
                position: r == null ? void 0 : r.labelPosition,
              }),
          ],
        }),
      ],
    });
  }
  const an = (r) => {
    let e;
    return (
      r
        ? (e = r)
        : typeof fetch > "u"
          ? (e = (...t) =>
              Promise.resolve()
                .then(() => de)
                .then(({ default: s }) => s(...t)))
          : (e = fetch),
      (...t) => e(...t)
    );
  };
  class wt extends Error {
    constructor(e, t = "FunctionsError", s) {
      super(e), (this.name = t), (this.context = s);
    }
  }
  class ln extends wt {
    constructor(e) {
      super(
        "Failed to send a request to the Edge Function",
        "FunctionsFetchError",
        e,
      );
    }
  }
  class cn extends wt {
    constructor(e) {
      super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
    }
  }
  class un extends wt {
    constructor(e) {
      super(
        "Edge Function returned a non-2xx status code",
        "FunctionsHttpError",
        e,
      );
    }
  }
  var bt;
  (function (r) {
    (r.Any = "any"),
      (r.ApNortheast1 = "ap-northeast-1"),
      (r.ApNortheast2 = "ap-northeast-2"),
      (r.ApSouth1 = "ap-south-1"),
      (r.ApSoutheast1 = "ap-southeast-1"),
      (r.ApSoutheast2 = "ap-southeast-2"),
      (r.CaCentral1 = "ca-central-1"),
      (r.EuCentral1 = "eu-central-1"),
      (r.EuWest1 = "eu-west-1"),
      (r.EuWest2 = "eu-west-2"),
      (r.EuWest3 = "eu-west-3"),
      (r.SaEast1 = "sa-east-1"),
      (r.UsEast1 = "us-east-1"),
      (r.UsWest1 = "us-west-1"),
      (r.UsWest2 = "us-west-2");
  })(bt || (bt = {}));
  var hn = function (r, e, t, s) {
    function n(i) {
      return i instanceof t
        ? i
        : new t(function (o) {
            o(i);
          });
    }
    return new (t || (t = Promise))(function (i, o) {
      function a(u) {
        try {
          c(s.next(u));
        } catch (h) {
          o(h);
        }
      }
      function l(u) {
        try {
          c(s.throw(u));
        } catch (h) {
          o(h);
        }
      }
      function c(u) {
        u.done ? i(u.value) : n(u.value).then(a, l);
      }
      c((s = s.apply(r, e || [])).next());
    });
  };
  class dn {
    constructor(
      e,
      { headers: t = {}, customFetch: s, region: n = bt.Any } = {},
    ) {
      (this.url = e),
        (this.headers = t),
        (this.region = n),
        (this.fetch = an(s));
    }
    setAuth(e) {
      this.headers.Authorization = `Bearer ${e}`;
    }
    invoke(e, t = {}) {
      var s;
      return hn(this, void 0, void 0, function* () {
        try {
          const { headers: n, method: i, body: o } = t;
          let a = {},
            { region: l } = t;
          l || (l = this.region), l && l !== "any" && (a["x-region"] = l);
          let c;
          o &&
            ((n && !Object.prototype.hasOwnProperty.call(n, "Content-Type")) ||
              !n) &&
            ((typeof Blob < "u" && o instanceof Blob) ||
            o instanceof ArrayBuffer
              ? ((a["Content-Type"] = "application/octet-stream"), (c = o))
              : typeof o == "string"
                ? ((a["Content-Type"] = "text/plain"), (c = o))
                : typeof FormData < "u" && o instanceof FormData
                  ? (c = o)
                  : ((a["Content-Type"] = "application/json"),
                    (c = JSON.stringify(o))));
          const u = yield this.fetch(`${this.url}/${e}`, {
              method: i || "POST",
              headers: Object.assign(
                Object.assign(Object.assign({}, a), this.headers),
                n,
              ),
              body: c,
            }).catch((p) => {
              throw new ln(p);
            }),
            h = u.headers.get("x-relay-error");
          if (h && h === "true") throw new cn(u);
          if (!u.ok) throw new un(u);
          let d = (
              (s = u.headers.get("Content-Type")) !== null && s !== void 0
                ? s
                : "text/plain"
            )
              .split(";")[0]
              .trim(),
            f;
          return (
            d === "application/json"
              ? (f = yield u.json())
              : d === "application/octet-stream"
                ? (f = yield u.blob())
                : d === "text/event-stream"
                  ? (f = u)
                  : d === "multipart/form-data"
                    ? (f = yield u.formData())
                    : (f = yield u.text()),
            { data: f, error: null }
          );
        } catch (n) {
          return { data: null, error: n };
        }
      });
    }
  }
  function Cr(r) {
    return r &&
      r.__esModule &&
      Object.prototype.hasOwnProperty.call(r, "default")
      ? r.default
      : r;
  }
  function fn(r) {
    if (r.__esModule) return r;
    var e = r.default;
    if (typeof e == "function") {
      var t = function s() {
        return this instanceof s
          ? Reflect.construct(e, arguments, this.constructor)
          : e.apply(this, arguments);
      };
      t.prototype = e.prototype;
    } else t = {};
    return (
      Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.keys(r).forEach(function (s) {
        var n = Object.getOwnPropertyDescriptor(r, s);
        Object.defineProperty(
          t,
          s,
          n.get
            ? n
            : {
                enumerable: !0,
                get: function () {
                  return r[s];
                },
              },
        );
      }),
      t
    );
  }
  var R = {},
    be = {},
    ke = {},
    Se = {},
    $e = {},
    Te = {},
    _n = function () {
      if (typeof self < "u") return self;
      if (typeof window < "u") return window;
      if (typeof global < "u") return global;
      throw new Error("unable to locate global object");
    },
    he = _n();
  const pn = he.fetch,
    Rr = he.fetch.bind(he),
    xr = he.Headers,
    vn = he.Request,
    gn = he.Response,
    de = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          Headers: xr,
          Request: vn,
          Response: gn,
          default: Rr,
          fetch: pn,
        },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    ),
    mn = fn(de);
  var Qe = {},
    Ir;
  function Lr() {
    if (Ir) return Qe;
    (Ir = 1), Object.defineProperty(Qe, "__esModule", { value: !0 });
    class r extends Error {
      constructor(t) {
        super(t.message),
          (this.name = "PostgrestError"),
          (this.details = t.details),
          (this.hint = t.hint),
          (this.code = t.code);
      }
    }
    return (Qe.default = r), Qe;
  }
  var Ur;
  function Dr() {
    if (Ur) return Te;
    Ur = 1;
    var r =
      Te.__importDefault ||
      function (n) {
        return n && n.__esModule ? n : { default: n };
      };
    Object.defineProperty(Te, "__esModule", { value: !0 });
    const e = r(mn),
      t = r(Lr());
    class s {
      constructor(i) {
        (this.shouldThrowOnError = !1),
          (this.method = i.method),
          (this.url = i.url),
          (this.headers = i.headers),
          (this.schema = i.schema),
          (this.body = i.body),
          (this.shouldThrowOnError = i.shouldThrowOnError),
          (this.signal = i.signal),
          (this.isMaybeSingle = i.isMaybeSingle),
          i.fetch
            ? (this.fetch = i.fetch)
            : typeof fetch > "u"
              ? (this.fetch = e.default)
              : (this.fetch = fetch);
      }
      throwOnError() {
        return (this.shouldThrowOnError = !0), this;
      }
      setHeader(i, o) {
        return (
          (this.headers = Object.assign({}, this.headers)),
          (this.headers[i] = o),
          this
        );
      }
      then(i, o) {
        this.schema === void 0 ||
          (["GET", "HEAD"].includes(this.method)
            ? (this.headers["Accept-Profile"] = this.schema)
            : (this.headers["Content-Profile"] = this.schema)),
          this.method !== "GET" &&
            this.method !== "HEAD" &&
            (this.headers["Content-Type"] = "application/json");
        const a = this.fetch;
        let l = a(this.url.toString(), {
          method: this.method,
          headers: this.headers,
          body: JSON.stringify(this.body),
          signal: this.signal,
        }).then(async (c) => {
          var u, h, d;
          let f = null,
            p = null,
            y = null,
            _ = c.status,
            g = c.statusText;
          if (c.ok) {
            if (this.method !== "HEAD") {
              const P = await c.text();
              P === "" ||
                (this.headers.Accept === "text/csv" ||
                (this.headers.Accept &&
                  this.headers.Accept.includes(
                    "application/vnd.pgrst.plan+text",
                  ))
                  ? (p = P)
                  : (p = JSON.parse(P)));
            }
            const S =
                (u = this.headers.Prefer) === null || u === void 0
                  ? void 0
                  : u.match(/count=(exact|planned|estimated)/),
              $ =
                (h = c.headers.get("content-range")) === null || h === void 0
                  ? void 0
                  : h.split("/");
            S && $ && $.length > 1 && (y = parseInt($[1])),
              this.isMaybeSingle &&
                this.method === "GET" &&
                Array.isArray(p) &&
                (p.length > 1
                  ? ((f = {
                      code: "PGRST116",
                      details: `Results contain ${p.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                      hint: null,
                      message:
                        "JSON object requested, multiple (or no) rows returned",
                    }),
                    (p = null),
                    (y = null),
                    (_ = 406),
                    (g = "Not Acceptable"))
                  : p.length === 1
                    ? (p = p[0])
                    : (p = null));
          } else {
            const S = await c.text();
            try {
              (f = JSON.parse(S)),
                Array.isArray(f) &&
                  c.status === 404 &&
                  ((p = []), (f = null), (_ = 200), (g = "OK"));
            } catch {
              c.status === 404 && S === ""
                ? ((_ = 204), (g = "No Content"))
                : (f = { message: S });
            }
            if (
              (f &&
                this.isMaybeSingle &&
                !(
                  (d = f == null ? void 0 : f.details) === null || d === void 0
                ) &&
                d.includes("0 rows") &&
                ((f = null), (_ = 200), (g = "OK")),
              f && this.shouldThrowOnError)
            )
              throw new t.default(f);
          }
          return { error: f, data: p, count: y, status: _, statusText: g };
        });
        return (
          this.shouldThrowOnError ||
            (l = l.catch((c) => {
              var u, h, d;
              return {
                error: {
                  message: `${(u = c == null ? void 0 : c.name) !== null && u !== void 0 ? u : "FetchError"}: ${c == null ? void 0 : c.message}`,
                  details: `${(h = c == null ? void 0 : c.stack) !== null && h !== void 0 ? h : ""}`,
                  hint: "",
                  code: `${(d = c == null ? void 0 : c.code) !== null && d !== void 0 ? d : ""}`,
                },
                data: null,
                count: null,
                status: 0,
                statusText: "",
              };
            })),
          l.then(i, o)
        );
      }
    }
    return (Te.default = s), Te;
  }
  var Nr;
  function Mr() {
    if (Nr) return $e;
    Nr = 1;
    var r =
      $e.__importDefault ||
      function (s) {
        return s && s.__esModule ? s : { default: s };
      };
    Object.defineProperty($e, "__esModule", { value: !0 });
    const e = r(Dr());
    class t extends e.default {
      select(n) {
        let i = !1;
        const o = (n ?? "*")
          .split("")
          .map((a) => (/\s/.test(a) && !i ? "" : (a === '"' && (i = !i), a)))
          .join("");
        return (
          this.url.searchParams.set("select", o),
          this.headers.Prefer && (this.headers.Prefer += ","),
          (this.headers.Prefer += "return=representation"),
          this
        );
      }
      order(
        n,
        {
          ascending: i = !0,
          nullsFirst: o,
          foreignTable: a,
          referencedTable: l = a,
        } = {},
      ) {
        const c = l ? `${l}.order` : "order",
          u = this.url.searchParams.get(c);
        return (
          this.url.searchParams.set(
            c,
            `${u ? `${u},` : ""}${n}.${i ? "asc" : "desc"}${o === void 0 ? "" : o ? ".nullsfirst" : ".nullslast"}`,
          ),
          this
        );
      }
      limit(n, { foreignTable: i, referencedTable: o = i } = {}) {
        const a = typeof o > "u" ? "limit" : `${o}.limit`;
        return this.url.searchParams.set(a, `${n}`), this;
      }
      range(n, i, { foreignTable: o, referencedTable: a = o } = {}) {
        const l = typeof a > "u" ? "offset" : `${a}.offset`,
          c = typeof a > "u" ? "limit" : `${a}.limit`;
        return (
          this.url.searchParams.set(l, `${n}`),
          this.url.searchParams.set(c, `${i - n + 1}`),
          this
        );
      }
      abortSignal(n) {
        return (this.signal = n), this;
      }
      single() {
        return (
          (this.headers.Accept = "application/vnd.pgrst.object+json"), this
        );
      }
      maybeSingle() {
        return (
          this.method === "GET"
            ? (this.headers.Accept = "application/json")
            : (this.headers.Accept = "application/vnd.pgrst.object+json"),
          (this.isMaybeSingle = !0),
          this
        );
      }
      csv() {
        return (this.headers.Accept = "text/csv"), this;
      }
      geojson() {
        return (this.headers.Accept = "application/geo+json"), this;
      }
      explain({
        analyze: n = !1,
        verbose: i = !1,
        settings: o = !1,
        buffers: a = !1,
        wal: l = !1,
        format: c = "text",
      } = {}) {
        var u;
        const h = [
            n ? "analyze" : null,
            i ? "verbose" : null,
            o ? "settings" : null,
            a ? "buffers" : null,
            l ? "wal" : null,
          ]
            .filter(Boolean)
            .join("|"),
          d =
            (u = this.headers.Accept) !== null && u !== void 0
              ? u
              : "application/json";
        return (
          (this.headers.Accept = `application/vnd.pgrst.plan+${c}; for="${d}"; options=${h};`),
          c === "json" ? this : this
        );
      }
      rollback() {
        var n;
        return (
          ((n = this.headers.Prefer) !== null && n !== void 0 ? n : "").trim()
            .length > 0
            ? (this.headers.Prefer += ",tx=rollback")
            : (this.headers.Prefer = "tx=rollback"),
          this
        );
      }
      returns() {
        return this;
      }
    }
    return ($e.default = t), $e;
  }
  var Br;
  function kt() {
    if (Br) return Se;
    Br = 1;
    var r =
      Se.__importDefault ||
      function (s) {
        return s && s.__esModule ? s : { default: s };
      };
    Object.defineProperty(Se, "__esModule", { value: !0 });
    const e = r(Mr());
    class t extends e.default {
      eq(n, i) {
        return this.url.searchParams.append(n, `eq.${i}`), this;
      }
      neq(n, i) {
        return this.url.searchParams.append(n, `neq.${i}`), this;
      }
      gt(n, i) {
        return this.url.searchParams.append(n, `gt.${i}`), this;
      }
      gte(n, i) {
        return this.url.searchParams.append(n, `gte.${i}`), this;
      }
      lt(n, i) {
        return this.url.searchParams.append(n, `lt.${i}`), this;
      }
      lte(n, i) {
        return this.url.searchParams.append(n, `lte.${i}`), this;
      }
      like(n, i) {
        return this.url.searchParams.append(n, `like.${i}`), this;
      }
      likeAllOf(n, i) {
        return (
          this.url.searchParams.append(n, `like(all).{${i.join(",")}}`), this
        );
      }
      likeAnyOf(n, i) {
        return (
          this.url.searchParams.append(n, `like(any).{${i.join(",")}}`), this
        );
      }
      ilike(n, i) {
        return this.url.searchParams.append(n, `ilike.${i}`), this;
      }
      ilikeAllOf(n, i) {
        return (
          this.url.searchParams.append(n, `ilike(all).{${i.join(",")}}`), this
        );
      }
      ilikeAnyOf(n, i) {
        return (
          this.url.searchParams.append(n, `ilike(any).{${i.join(",")}}`), this
        );
      }
      is(n, i) {
        return this.url.searchParams.append(n, `is.${i}`), this;
      }
      in(n, i) {
        const o = Array.from(new Set(i))
          .map((a) =>
            typeof a == "string" && new RegExp("[,()]").test(a)
              ? `"${a}"`
              : `${a}`,
          )
          .join(",");
        return this.url.searchParams.append(n, `in.(${o})`), this;
      }
      contains(n, i) {
        return (
          typeof i == "string"
            ? this.url.searchParams.append(n, `cs.${i}`)
            : Array.isArray(i)
              ? this.url.searchParams.append(n, `cs.{${i.join(",")}}`)
              : this.url.searchParams.append(n, `cs.${JSON.stringify(i)}`),
          this
        );
      }
      containedBy(n, i) {
        return (
          typeof i == "string"
            ? this.url.searchParams.append(n, `cd.${i}`)
            : Array.isArray(i)
              ? this.url.searchParams.append(n, `cd.{${i.join(",")}}`)
              : this.url.searchParams.append(n, `cd.${JSON.stringify(i)}`),
          this
        );
      }
      rangeGt(n, i) {
        return this.url.searchParams.append(n, `sr.${i}`), this;
      }
      rangeGte(n, i) {
        return this.url.searchParams.append(n, `nxl.${i}`), this;
      }
      rangeLt(n, i) {
        return this.url.searchParams.append(n, `sl.${i}`), this;
      }
      rangeLte(n, i) {
        return this.url.searchParams.append(n, `nxr.${i}`), this;
      }
      rangeAdjacent(n, i) {
        return this.url.searchParams.append(n, `adj.${i}`), this;
      }
      overlaps(n, i) {
        return (
          typeof i == "string"
            ? this.url.searchParams.append(n, `ov.${i}`)
            : this.url.searchParams.append(n, `ov.{${i.join(",")}}`),
          this
        );
      }
      textSearch(n, i, { config: o, type: a } = {}) {
        let l = "";
        a === "plain"
          ? (l = "pl")
          : a === "phrase"
            ? (l = "ph")
            : a === "websearch" && (l = "w");
        const c = o === void 0 ? "" : `(${o})`;
        return this.url.searchParams.append(n, `${l}fts${c}.${i}`), this;
      }
      match(n) {
        return (
          Object.entries(n).forEach(([i, o]) => {
            this.url.searchParams.append(i, `eq.${o}`);
          }),
          this
        );
      }
      not(n, i, o) {
        return this.url.searchParams.append(n, `not.${i}.${o}`), this;
      }
      or(n, { foreignTable: i, referencedTable: o = i } = {}) {
        const a = o ? `${o}.or` : "or";
        return this.url.searchParams.append(a, `(${n})`), this;
      }
      filter(n, i, o) {
        return this.url.searchParams.append(n, `${i}.${o}`), this;
      }
    }
    return (Se.default = t), Se;
  }
  var Fr;
  function qr() {
    if (Fr) return ke;
    Fr = 1;
    var r =
      ke.__importDefault ||
      function (s) {
        return s && s.__esModule ? s : { default: s };
      };
    Object.defineProperty(ke, "__esModule", { value: !0 });
    const e = r(kt());
    class t {
      constructor(n, { headers: i = {}, schema: o, fetch: a }) {
        (this.url = n), (this.headers = i), (this.schema = o), (this.fetch = a);
      }
      select(n, { head: i = !1, count: o } = {}) {
        const a = i ? "HEAD" : "GET";
        let l = !1;
        const c = (n ?? "*")
          .split("")
          .map((u) => (/\s/.test(u) && !l ? "" : (u === '"' && (l = !l), u)))
          .join("");
        return (
          this.url.searchParams.set("select", c),
          o && (this.headers.Prefer = `count=${o}`),
          new e.default({
            method: a,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1,
          })
        );
      }
      insert(n, { count: i, defaultToNull: o = !0 } = {}) {
        const a = "POST",
          l = [];
        if (
          (this.headers.Prefer && l.push(this.headers.Prefer),
          i && l.push(`count=${i}`),
          o || l.push("missing=default"),
          (this.headers.Prefer = l.join(",")),
          Array.isArray(n))
        ) {
          const c = n.reduce((u, h) => u.concat(Object.keys(h)), []);
          if (c.length > 0) {
            const u = [...new Set(c)].map((h) => `"${h}"`);
            this.url.searchParams.set("columns", u.join(","));
          }
        }
        return new e.default({
          method: a,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          body: n,
          fetch: this.fetch,
          allowEmpty: !1,
        });
      }
      upsert(
        n,
        {
          onConflict: i,
          ignoreDuplicates: o = !1,
          count: a,
          defaultToNull: l = !0,
        } = {},
      ) {
        const c = "POST",
          u = [`resolution=${o ? "ignore" : "merge"}-duplicates`];
        if (
          (i !== void 0 && this.url.searchParams.set("on_conflict", i),
          this.headers.Prefer && u.push(this.headers.Prefer),
          a && u.push(`count=${a}`),
          l || u.push("missing=default"),
          (this.headers.Prefer = u.join(",")),
          Array.isArray(n))
        ) {
          const h = n.reduce((d, f) => d.concat(Object.keys(f)), []);
          if (h.length > 0) {
            const d = [...new Set(h)].map((f) => `"${f}"`);
            this.url.searchParams.set("columns", d.join(","));
          }
        }
        return new e.default({
          method: c,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          body: n,
          fetch: this.fetch,
          allowEmpty: !1,
        });
      }
      update(n, { count: i } = {}) {
        const o = "PATCH",
          a = [];
        return (
          this.headers.Prefer && a.push(this.headers.Prefer),
          i && a.push(`count=${i}`),
          (this.headers.Prefer = a.join(",")),
          new e.default({
            method: o,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: n,
            fetch: this.fetch,
            allowEmpty: !1,
          })
        );
      }
      delete({ count: n } = {}) {
        const i = "DELETE",
          o = [];
        return (
          n && o.push(`count=${n}`),
          this.headers.Prefer && o.unshift(this.headers.Prefer),
          (this.headers.Prefer = o.join(",")),
          new e.default({
            method: i,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1,
          })
        );
      }
    }
    return (ke.default = t), ke;
  }
  var Ee = {},
    Pe = {},
    Hr;
  function yn() {
    return (
      Hr ||
        ((Hr = 1),
        Object.defineProperty(Pe, "__esModule", { value: !0 }),
        (Pe.version = void 0),
        (Pe.version = "0.0.0-automated")),
      Pe
    );
  }
  var zr;
  function wn() {
    if (zr) return Ee;
    (zr = 1),
      Object.defineProperty(Ee, "__esModule", { value: !0 }),
      (Ee.DEFAULT_HEADERS = void 0);
    const r = yn();
    return (
      (Ee.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${r.version}` }),
      Ee
    );
  }
  var Wr;
  function bn() {
    if (Wr) return be;
    Wr = 1;
    var r =
      be.__importDefault ||
      function (i) {
        return i && i.__esModule ? i : { default: i };
      };
    Object.defineProperty(be, "__esModule", { value: !0 });
    const e = r(qr()),
      t = r(kt()),
      s = wn();
    class n {
      constructor(o, { headers: a = {}, schema: l, fetch: c } = {}) {
        (this.url = o),
          (this.headers = Object.assign(
            Object.assign({}, s.DEFAULT_HEADERS),
            a,
          )),
          (this.schemaName = l),
          (this.fetch = c);
      }
      from(o) {
        const a = new URL(`${this.url}/${o}`);
        return new e.default(a, {
          headers: Object.assign({}, this.headers),
          schema: this.schemaName,
          fetch: this.fetch,
        });
      }
      schema(o) {
        return new n(this.url, {
          headers: this.headers,
          schema: o,
          fetch: this.fetch,
        });
      }
      rpc(o, a = {}, { head: l = !1, get: c = !1, count: u } = {}) {
        let h;
        const d = new URL(`${this.url}/rpc/${o}`);
        let f;
        l || c
          ? ((h = l ? "HEAD" : "GET"),
            Object.entries(a)
              .filter(([y, _]) => _ !== void 0)
              .map(([y, _]) => [
                y,
                Array.isArray(_) ? `{${_.join(",")}}` : `${_}`,
              ])
              .forEach(([y, _]) => {
                d.searchParams.append(y, _);
              }))
          : ((h = "POST"), (f = a));
        const p = Object.assign({}, this.headers);
        return (
          u && (p.Prefer = `count=${u}`),
          new t.default({
            method: h,
            url: d,
            headers: p,
            schema: this.schemaName,
            body: f,
            fetch: this.fetch,
            allowEmpty: !1,
          })
        );
      }
    }
    return (be.default = n), be;
  }
  var Jr;
  function kn() {
    if (Jr) return R;
    Jr = 1;
    var r =
      R.__importDefault ||
      function (a) {
        return a && a.__esModule ? a : { default: a };
      };
    Object.defineProperty(R, "__esModule", { value: !0 }),
      (R.PostgrestError =
        R.PostgrestBuilder =
        R.PostgrestTransformBuilder =
        R.PostgrestFilterBuilder =
        R.PostgrestQueryBuilder =
        R.PostgrestClient =
          void 0);
    const e = r(bn());
    R.PostgrestClient = e.default;
    const t = r(qr());
    R.PostgrestQueryBuilder = t.default;
    const s = r(kt());
    R.PostgrestFilterBuilder = s.default;
    const n = r(Mr());
    R.PostgrestTransformBuilder = n.default;
    const i = r(Dr());
    R.PostgrestBuilder = i.default;
    const o = r(Lr());
    return (
      (R.PostgrestError = o.default),
      (R.default = {
        PostgrestClient: e.default,
        PostgrestQueryBuilder: t.default,
        PostgrestFilterBuilder: s.default,
        PostgrestTransformBuilder: n.default,
        PostgrestBuilder: i.default,
        PostgrestError: o.default,
      }),
      R
    );
  }
  var Sn = kn();
  const $n = Cr(Sn),
    {
      PostgrestClient: Tn,
      PostgrestQueryBuilder: ho,
      PostgrestFilterBuilder: fo,
      PostgrestTransformBuilder: _o,
      PostgrestBuilder: po,
      PostgrestError: vo,
    } = $n,
    En = { "X-Client-Info": "realtime-js/2.11.2" },
    Pn = "1.0.0",
    Gr = 1e4,
    On = 1e3;
  var fe;
  (function (r) {
    (r[(r.connecting = 0)] = "connecting"),
      (r[(r.open = 1)] = "open"),
      (r[(r.closing = 2)] = "closing"),
      (r[(r.closed = 3)] = "closed");
  })(fe || (fe = {}));
  var L;
  (function (r) {
    (r.closed = "closed"),
      (r.errored = "errored"),
      (r.joined = "joined"),
      (r.joining = "joining"),
      (r.leaving = "leaving");
  })(L || (L = {}));
  var N;
  (function (r) {
    (r.close = "phx_close"),
      (r.error = "phx_error"),
      (r.join = "phx_join"),
      (r.reply = "phx_reply"),
      (r.leave = "phx_leave"),
      (r.access_token = "access_token");
  })(N || (N = {}));
  var St;
  (function (r) {
    r.websocket = "websocket";
  })(St || (St = {}));
  var Z;
  (function (r) {
    (r.Connecting = "connecting"),
      (r.Open = "open"),
      (r.Closing = "closing"),
      (r.Closed = "closed");
  })(Z || (Z = {}));
  class An {
    constructor() {
      this.HEADER_LENGTH = 1;
    }
    decode(e, t) {
      return e.constructor === ArrayBuffer
        ? t(this._binaryDecode(e))
        : t(typeof e == "string" ? JSON.parse(e) : {});
    }
    _binaryDecode(e) {
      const t = new DataView(e),
        s = new TextDecoder();
      return this._decodeBroadcast(e, t, s);
    }
    _decodeBroadcast(e, t, s) {
      const n = t.getUint8(1),
        i = t.getUint8(2);
      let o = this.HEADER_LENGTH + 2;
      const a = s.decode(e.slice(o, o + n));
      o = o + n;
      const l = s.decode(e.slice(o, o + i));
      o = o + i;
      const c = JSON.parse(s.decode(e.slice(o, e.byteLength)));
      return { ref: null, topic: a, event: l, payload: c };
    }
  }
  class Kr {
    constructor(e, t) {
      (this.callback = e),
        (this.timerCalc = t),
        (this.timer = void 0),
        (this.tries = 0),
        (this.callback = e),
        (this.timerCalc = t);
    }
    reset() {
      (this.tries = 0), clearTimeout(this.timer);
    }
    scheduleTimeout() {
      clearTimeout(this.timer),
        (this.timer = setTimeout(
          () => {
            (this.tries = this.tries + 1), this.callback();
          },
          this.timerCalc(this.tries + 1),
        ));
    }
  }
  var E;
  (function (r) {
    (r.abstime = "abstime"),
      (r.bool = "bool"),
      (r.date = "date"),
      (r.daterange = "daterange"),
      (r.float4 = "float4"),
      (r.float8 = "float8"),
      (r.int2 = "int2"),
      (r.int4 = "int4"),
      (r.int4range = "int4range"),
      (r.int8 = "int8"),
      (r.int8range = "int8range"),
      (r.json = "json"),
      (r.jsonb = "jsonb"),
      (r.money = "money"),
      (r.numeric = "numeric"),
      (r.oid = "oid"),
      (r.reltime = "reltime"),
      (r.text = "text"),
      (r.time = "time"),
      (r.timestamp = "timestamp"),
      (r.timestamptz = "timestamptz"),
      (r.timetz = "timetz"),
      (r.tsrange = "tsrange"),
      (r.tstzrange = "tstzrange");
  })(E || (E = {}));
  const Vr = (r, e, t = {}) => {
      var s;
      const n = (s = t.skipTypes) !== null && s !== void 0 ? s : [];
      return Object.keys(e).reduce((i, o) => ((i[o] = jn(o, r, e, n)), i), {});
    },
    jn = (r, e, t, s) => {
      const n = e.find((a) => a.name === r),
        i = n == null ? void 0 : n.type,
        o = t[r];
      return i && !s.includes(i) ? Qr(i, o) : $t(o);
    },
    Qr = (r, e) => {
      if (r.charAt(0) === "_") {
        const t = r.slice(1, r.length);
        return In(e, t);
      }
      switch (r) {
        case E.bool:
          return Cn(e);
        case E.float4:
        case E.float8:
        case E.int2:
        case E.int4:
        case E.int8:
        case E.numeric:
        case E.oid:
          return Rn(e);
        case E.json:
        case E.jsonb:
          return xn(e);
        case E.timestamp:
          return Ln(e);
        case E.abstime:
        case E.date:
        case E.daterange:
        case E.int4range:
        case E.int8range:
        case E.money:
        case E.reltime:
        case E.text:
        case E.time:
        case E.timestamptz:
        case E.timetz:
        case E.tsrange:
        case E.tstzrange:
          return $t(e);
        default:
          return $t(e);
      }
    },
    $t = (r) => r,
    Cn = (r) => {
      switch (r) {
        case "t":
          return !0;
        case "f":
          return !1;
        default:
          return r;
      }
    },
    Rn = (r) => {
      if (typeof r == "string") {
        const e = parseFloat(r);
        if (!Number.isNaN(e)) return e;
      }
      return r;
    },
    xn = (r) => {
      if (typeof r == "string")
        try {
          return JSON.parse(r);
        } catch (e) {
          return console.log(`JSON parse error: ${e}`), r;
        }
      return r;
    },
    In = (r, e) => {
      if (typeof r != "string") return r;
      const t = r.length - 1,
        s = r[t];
      if (r[0] === "{" && s === "}") {
        let i;
        const o = r.slice(1, t);
        try {
          i = JSON.parse("[" + o + "]");
        } catch {
          i = o ? o.split(",") : [];
        }
        return i.map((a) => Qr(e, a));
      }
      return r;
    },
    Ln = (r) => (typeof r == "string" ? r.replace(" ", "T") : r),
    Xr = (r) => {
      let e = r;
      return (
        (e = e.replace(/^ws/i, "http")),
        (e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")),
        e.replace(/\/+$/, "")
      );
    };
  class Tt {
    constructor(e, t, s = {}, n = Gr) {
      (this.channel = e),
        (this.event = t),
        (this.payload = s),
        (this.timeout = n),
        (this.sent = !1),
        (this.timeoutTimer = void 0),
        (this.ref = ""),
        (this.receivedResp = null),
        (this.recHooks = []),
        (this.refEvent = null);
    }
    resend(e) {
      (this.timeout = e),
        this._cancelRefEvent(),
        (this.ref = ""),
        (this.refEvent = null),
        (this.receivedResp = null),
        (this.sent = !1),
        this.send();
    }
    send() {
      this._hasReceived("timeout") ||
        (this.startTimeout(),
        (this.sent = !0),
        this.channel.socket.push({
          topic: this.channel.topic,
          event: this.event,
          payload: this.payload,
          ref: this.ref,
          join_ref: this.channel._joinRef(),
        }));
    }
    updatePayload(e) {
      this.payload = Object.assign(Object.assign({}, this.payload), e);
    }
    receive(e, t) {
      var s;
      return (
        this._hasReceived(e) &&
          t(
            (s = this.receivedResp) === null || s === void 0
              ? void 0
              : s.response,
          ),
        this.recHooks.push({ status: e, callback: t }),
        this
      );
    }
    startTimeout() {
      if (this.timeoutTimer) return;
      (this.ref = this.channel.socket._makeRef()),
        (this.refEvent = this.channel._replyEventName(this.ref));
      const e = (t) => {
        this._cancelRefEvent(),
          this._cancelTimeout(),
          (this.receivedResp = t),
          this._matchReceive(t);
      };
      this.channel._on(this.refEvent, {}, e),
        (this.timeoutTimer = setTimeout(() => {
          this.trigger("timeout", {});
        }, this.timeout));
    }
    trigger(e, t) {
      this.refEvent &&
        this.channel._trigger(this.refEvent, { status: e, response: t });
    }
    destroy() {
      this._cancelRefEvent(), this._cancelTimeout();
    }
    _cancelRefEvent() {
      this.refEvent && this.channel._off(this.refEvent, {});
    }
    _cancelTimeout() {
      clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
    }
    _matchReceive({ status: e, response: t }) {
      this.recHooks.filter((s) => s.status === e).forEach((s) => s.callback(t));
    }
    _hasReceived(e) {
      return this.receivedResp && this.receivedResp.status === e;
    }
  }
  var Yr;
  (function (r) {
    (r.SYNC = "sync"), (r.JOIN = "join"), (r.LEAVE = "leave");
  })(Yr || (Yr = {}));
  class Oe {
    constructor(e, t) {
      (this.channel = e),
        (this.state = {}),
        (this.pendingDiffs = []),
        (this.joinRef = null),
        (this.caller = {
          onJoin: () => {},
          onLeave: () => {},
          onSync: () => {},
        });
      const s = (t == null ? void 0 : t.events) || {
        state: "presence_state",
        diff: "presence_diff",
      };
      this.channel._on(s.state, {}, (n) => {
        const { onJoin: i, onLeave: o, onSync: a } = this.caller;
        (this.joinRef = this.channel._joinRef()),
          (this.state = Oe.syncState(this.state, n, i, o)),
          this.pendingDiffs.forEach((l) => {
            this.state = Oe.syncDiff(this.state, l, i, o);
          }),
          (this.pendingDiffs = []),
          a();
      }),
        this.channel._on(s.diff, {}, (n) => {
          const { onJoin: i, onLeave: o, onSync: a } = this.caller;
          this.inPendingSyncState()
            ? this.pendingDiffs.push(n)
            : ((this.state = Oe.syncDiff(this.state, n, i, o)), a());
        }),
        this.onJoin((n, i, o) => {
          this.channel._trigger("presence", {
            event: "join",
            key: n,
            currentPresences: i,
            newPresences: o,
          });
        }),
        this.onLeave((n, i, o) => {
          this.channel._trigger("presence", {
            event: "leave",
            key: n,
            currentPresences: i,
            leftPresences: o,
          });
        }),
        this.onSync(() => {
          this.channel._trigger("presence", { event: "sync" });
        });
    }
    static syncState(e, t, s, n) {
      const i = this.cloneDeep(e),
        o = this.transformState(t),
        a = {},
        l = {};
      return (
        this.map(i, (c, u) => {
          o[c] || (l[c] = u);
        }),
        this.map(o, (c, u) => {
          const h = i[c];
          if (h) {
            const d = u.map((_) => _.presence_ref),
              f = h.map((_) => _.presence_ref),
              p = u.filter((_) => f.indexOf(_.presence_ref) < 0),
              y = h.filter((_) => d.indexOf(_.presence_ref) < 0);
            p.length > 0 && (a[c] = p), y.length > 0 && (l[c] = y);
          } else a[c] = u;
        }),
        this.syncDiff(i, { joins: a, leaves: l }, s, n)
      );
    }
    static syncDiff(e, t, s, n) {
      const { joins: i, leaves: o } = {
        joins: this.transformState(t.joins),
        leaves: this.transformState(t.leaves),
      };
      return (
        s || (s = () => {}),
        n || (n = () => {}),
        this.map(i, (a, l) => {
          var c;
          const u = (c = e[a]) !== null && c !== void 0 ? c : [];
          if (((e[a] = this.cloneDeep(l)), u.length > 0)) {
            const h = e[a].map((f) => f.presence_ref),
              d = u.filter((f) => h.indexOf(f.presence_ref) < 0);
            e[a].unshift(...d);
          }
          s(a, u, l);
        }),
        this.map(o, (a, l) => {
          let c = e[a];
          if (!c) return;
          const u = l.map((h) => h.presence_ref);
          (c = c.filter((h) => u.indexOf(h.presence_ref) < 0)),
            (e[a] = c),
            n(a, c, l),
            c.length === 0 && delete e[a];
        }),
        e
      );
    }
    static map(e, t) {
      return Object.getOwnPropertyNames(e).map((s) => t(s, e[s]));
    }
    static transformState(e) {
      return (
        (e = this.cloneDeep(e)),
        Object.getOwnPropertyNames(e).reduce((t, s) => {
          const n = e[s];
          return (
            "metas" in n
              ? (t[s] = n.metas.map(
                  (i) => (
                    (i.presence_ref = i.phx_ref),
                    delete i.phx_ref,
                    delete i.phx_ref_prev,
                    i
                  ),
                ))
              : (t[s] = n),
            t
          );
        }, {})
      );
    }
    static cloneDeep(e) {
      return JSON.parse(JSON.stringify(e));
    }
    onJoin(e) {
      this.caller.onJoin = e;
    }
    onLeave(e) {
      this.caller.onLeave = e;
    }
    onSync(e) {
      this.caller.onSync = e;
    }
    inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel._joinRef();
    }
  }
  var Zr;
  (function (r) {
    (r.ALL = "*"),
      (r.INSERT = "INSERT"),
      (r.UPDATE = "UPDATE"),
      (r.DELETE = "DELETE");
  })(Zr || (Zr = {}));
  var es;
  (function (r) {
    (r.BROADCAST = "broadcast"),
      (r.PRESENCE = "presence"),
      (r.POSTGRES_CHANGES = "postgres_changes"),
      (r.SYSTEM = "system");
  })(es || (es = {}));
  var H;
  (function (r) {
    (r.SUBSCRIBED = "SUBSCRIBED"),
      (r.TIMED_OUT = "TIMED_OUT"),
      (r.CLOSED = "CLOSED"),
      (r.CHANNEL_ERROR = "CHANNEL_ERROR");
  })(H || (H = {}));
  class Et {
    constructor(e, t = { config: {} }, s) {
      (this.topic = e),
        (this.params = t),
        (this.socket = s),
        (this.bindings = {}),
        (this.state = L.closed),
        (this.joinedOnce = !1),
        (this.pushBuffer = []),
        (this.subTopic = e.replace(/^realtime:/i, "")),
        (this.params.config = Object.assign(
          {
            broadcast: { ack: !1, self: !1 },
            presence: { key: "" },
            private: !1,
          },
          t.config,
        )),
        (this.timeout = this.socket.timeout),
        (this.joinPush = new Tt(this, N.join, this.params, this.timeout)),
        (this.rejoinTimer = new Kr(
          () => this._rejoinUntilConnected(),
          this.socket.reconnectAfterMs,
        )),
        this.joinPush.receive("ok", () => {
          (this.state = L.joined),
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach((n) => n.send()),
            (this.pushBuffer = []);
        }),
        this._onClose(() => {
          this.rejoinTimer.reset(),
            this.socket.log(
              "channel",
              `close ${this.topic} ${this._joinRef()}`,
            ),
            (this.state = L.closed),
            this.socket._remove(this);
        }),
        this._onError((n) => {
          this._isLeaving() ||
            this._isClosed() ||
            (this.socket.log("channel", `error ${this.topic}`, n),
            (this.state = L.errored),
            this.rejoinTimer.scheduleTimeout());
        }),
        this.joinPush.receive("timeout", () => {
          this._isJoining() &&
            (this.socket.log(
              "channel",
              `timeout ${this.topic}`,
              this.joinPush.timeout,
            ),
            (this.state = L.errored),
            this.rejoinTimer.scheduleTimeout());
        }),
        this._on(N.reply, {}, (n, i) => {
          this._trigger(this._replyEventName(i), n);
        }),
        (this.presence = new Oe(this)),
        (this.broadcastEndpointURL =
          Xr(this.socket.endPoint) + "/api/broadcast"),
        (this.private = this.params.config.private || !1);
    }
    subscribe(e, t = this.timeout) {
      var s, n;
      if ((this.socket.isConnected() || this.socket.connect(), this.joinedOnce))
        throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
      {
        const {
          config: { broadcast: i, presence: o, private: a },
        } = this.params;
        this._onError((u) => (e == null ? void 0 : e(H.CHANNEL_ERROR, u))),
          this._onClose(() => (e == null ? void 0 : e(H.CLOSED)));
        const l = {},
          c = {
            broadcast: i,
            presence: o,
            postgres_changes:
              (n =
                (s = this.bindings.postgres_changes) === null || s === void 0
                  ? void 0
                  : s.map((u) => u.filter)) !== null && n !== void 0
                ? n
                : [],
            private: a,
          };
        this.socket.accessTokenValue &&
          (l.access_token = this.socket.accessTokenValue),
          this.updateJoinPayload(Object.assign({ config: c }, l)),
          (this.joinedOnce = !0),
          this._rejoin(t),
          this.joinPush
            .receive("ok", async ({ postgres_changes: u }) => {
              var h;
              if ((this.socket.setAuth(), u === void 0)) {
                e == null || e(H.SUBSCRIBED);
                return;
              } else {
                const d = this.bindings.postgres_changes,
                  f =
                    (h = d == null ? void 0 : d.length) !== null && h !== void 0
                      ? h
                      : 0,
                  p = [];
                for (let y = 0; y < f; y++) {
                  const _ = d[y],
                    {
                      filter: { event: g, schema: m, table: S, filter: $ },
                    } = _,
                    P = u && u[y];
                  if (
                    P &&
                    P.event === g &&
                    P.schema === m &&
                    P.table === S &&
                    P.filter === $
                  )
                    p.push(Object.assign(Object.assign({}, _), { id: P.id }));
                  else {
                    this.unsubscribe(),
                      e == null ||
                        e(
                          H.CHANNEL_ERROR,
                          new Error(
                            "mismatch between server and client bindings for postgres changes",
                          ),
                        );
                    return;
                  }
                }
                (this.bindings.postgres_changes = p), e && e(H.SUBSCRIBED);
                return;
              }
            })
            .receive("error", (u) => {
              e == null ||
                e(
                  H.CHANNEL_ERROR,
                  new Error(
                    JSON.stringify(Object.values(u).join(", ") || "error"),
                  ),
                );
            })
            .receive("timeout", () => {
              e == null || e(H.TIMED_OUT);
            });
      }
      return this;
    }
    presenceState() {
      return this.presence.state;
    }
    async track(e, t = {}) {
      return await this.send(
        { type: "presence", event: "track", payload: e },
        t.timeout || this.timeout,
      );
    }
    async untrack(e = {}) {
      return await this.send({ type: "presence", event: "untrack" }, e);
    }
    on(e, t, s) {
      return this._on(e, t, s);
    }
    async send(e, t = {}) {
      var s, n;
      if (!this._canPush() && e.type === "broadcast") {
        const { event: i, payload: o } = e,
          l = {
            method: "POST",
            headers: {
              Authorization: this.socket.accessTokenValue
                ? `Bearer ${this.socket.accessTokenValue}`
                : "",
              apikey: this.socket.apiKey ? this.socket.apiKey : "",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              messages: [
                {
                  topic: this.subTopic,
                  event: i,
                  payload: o,
                  private: this.private,
                },
              ],
            }),
          };
        try {
          const c = await this._fetchWithTimeout(
            this.broadcastEndpointURL,
            l,
            (s = t.timeout) !== null && s !== void 0 ? s : this.timeout,
          );
          return (
            await ((n = c.body) === null || n === void 0 ? void 0 : n.cancel()),
            c.ok ? "ok" : "error"
          );
        } catch (c) {
          return c.name === "AbortError" ? "timed out" : "error";
        }
      } else
        return new Promise((i) => {
          var o, a, l;
          const c = this._push(e.type, e, t.timeout || this.timeout);
          e.type === "broadcast" &&
            !(
              !(
                (l =
                  (a =
                    (o = this.params) === null || o === void 0
                      ? void 0
                      : o.config) === null || a === void 0
                    ? void 0
                    : a.broadcast) === null || l === void 0
              ) && l.ack
            ) &&
            i("ok"),
            c.receive("ok", () => i("ok")),
            c.receive("error", () => i("error")),
            c.receive("timeout", () => i("timed out"));
        });
    }
    updateJoinPayload(e) {
      this.joinPush.updatePayload(e);
    }
    unsubscribe(e = this.timeout) {
      this.state = L.leaving;
      const t = () => {
        this.socket.log("channel", `leave ${this.topic}`),
          this._trigger(N.close, "leave", this._joinRef());
      };
      return (
        this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        new Promise((s) => {
          const n = new Tt(this, N.leave, {}, e);
          n
            .receive("ok", () => {
              t(), s("ok");
            })
            .receive("timeout", () => {
              t(), s("timed out");
            })
            .receive("error", () => {
              s("error");
            }),
            n.send(),
            this._canPush() || n.trigger("ok", {});
        })
      );
    }
    async _fetchWithTimeout(e, t, s) {
      const n = new AbortController(),
        i = setTimeout(() => n.abort(), s),
        o = await this.socket.fetch(
          e,
          Object.assign(Object.assign({}, t), { signal: n.signal }),
        );
      return clearTimeout(i), o;
    }
    _push(e, t, s = this.timeout) {
      if (!this.joinedOnce)
        throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
      let n = new Tt(this, e, t, s);
      return (
        this._canPush()
          ? n.send()
          : (n.startTimeout(), this.pushBuffer.push(n)),
        n
      );
    }
    _onMessage(e, t, s) {
      return t;
    }
    _isMember(e) {
      return this.topic === e;
    }
    _joinRef() {
      return this.joinPush.ref;
    }
    _trigger(e, t, s) {
      var n, i;
      const o = e.toLocaleLowerCase(),
        { close: a, error: l, leave: c, join: u } = N;
      if (s && [a, l, c, u].indexOf(o) >= 0 && s !== this._joinRef()) return;
      let d = this._onMessage(o, t, s);
      if (t && !d)
        throw "channel onMessage callbacks must return the payload, modified or unmodified";
      ["insert", "update", "delete"].includes(o)
        ? (n = this.bindings.postgres_changes) === null ||
          n === void 0 ||
          n
            .filter((f) => {
              var p, y, _;
              return (
                ((p = f.filter) === null || p === void 0 ? void 0 : p.event) ===
                  "*" ||
                ((_ =
                  (y = f.filter) === null || y === void 0
                    ? void 0
                    : y.event) === null || _ === void 0
                  ? void 0
                  : _.toLocaleLowerCase()) === o
              );
            })
            .map((f) => f.callback(d, s))
        : (i = this.bindings[o]) === null ||
          i === void 0 ||
          i
            .filter((f) => {
              var p, y, _, g, m, S;
              if (["broadcast", "presence", "postgres_changes"].includes(o))
                if ("id" in f) {
                  const $ = f.id,
                    P =
                      (p = f.filter) === null || p === void 0
                        ? void 0
                        : p.event;
                  return (
                    $ &&
                    ((y = t.ids) === null || y === void 0
                      ? void 0
                      : y.includes($)) &&
                    (P === "*" ||
                      (P == null ? void 0 : P.toLocaleLowerCase()) ===
                        ((_ = t.data) === null || _ === void 0
                          ? void 0
                          : _.type.toLocaleLowerCase()))
                  );
                } else {
                  const $ =
                    (m =
                      (g = f == null ? void 0 : f.filter) === null ||
                      g === void 0
                        ? void 0
                        : g.event) === null || m === void 0
                      ? void 0
                      : m.toLocaleLowerCase();
                  return (
                    $ === "*" ||
                    $ ===
                      ((S = t == null ? void 0 : t.event) === null ||
                      S === void 0
                        ? void 0
                        : S.toLocaleLowerCase())
                  );
                }
              else return f.type.toLocaleLowerCase() === o;
            })
            .map((f) => {
              if (typeof d == "object" && "ids" in d) {
                const p = d.data,
                  {
                    schema: y,
                    table: _,
                    commit_timestamp: g,
                    type: m,
                    errors: S,
                  } = p;
                d = Object.assign(
                  Object.assign(
                    {},
                    {
                      schema: y,
                      table: _,
                      commit_timestamp: g,
                      eventType: m,
                      new: {},
                      old: {},
                      errors: S,
                    },
                  ),
                  this._getPayloadRecords(p),
                );
              }
              f.callback(d, s);
            });
    }
    _isClosed() {
      return this.state === L.closed;
    }
    _isJoined() {
      return this.state === L.joined;
    }
    _isJoining() {
      return this.state === L.joining;
    }
    _isLeaving() {
      return this.state === L.leaving;
    }
    _replyEventName(e) {
      return `chan_reply_${e}`;
    }
    _on(e, t, s) {
      const n = e.toLocaleLowerCase(),
        i = { type: n, filter: t, callback: s };
      return (
        this.bindings[n] ? this.bindings[n].push(i) : (this.bindings[n] = [i]),
        this
      );
    }
    _off(e, t) {
      const s = e.toLocaleLowerCase();
      return (
        (this.bindings[s] = this.bindings[s].filter((n) => {
          var i;
          return !(
            ((i = n.type) === null || i === void 0
              ? void 0
              : i.toLocaleLowerCase()) === s && Et.isEqual(n.filter, t)
          );
        })),
        this
      );
    }
    static isEqual(e, t) {
      if (Object.keys(e).length !== Object.keys(t).length) return !1;
      for (const s in e) if (e[s] !== t[s]) return !1;
      return !0;
    }
    _rejoinUntilConnected() {
      this.rejoinTimer.scheduleTimeout(),
        this.socket.isConnected() && this._rejoin();
    }
    _onClose(e) {
      this._on(N.close, {}, e);
    }
    _onError(e) {
      this._on(N.error, {}, (t) => e(t));
    }
    _canPush() {
      return this.socket.isConnected() && this._isJoined();
    }
    _rejoin(e = this.timeout) {
      this._isLeaving() ||
        (this.socket._leaveOpenTopic(this.topic),
        (this.state = L.joining),
        this.joinPush.resend(e));
    }
    _getPayloadRecords(e) {
      const t = { new: {}, old: {} };
      return (
        (e.type === "INSERT" || e.type === "UPDATE") &&
          (t.new = Vr(e.columns, e.record)),
        (e.type === "UPDATE" || e.type === "DELETE") &&
          (t.old = Vr(e.columns, e.old_record)),
        t
      );
    }
  }
  const Un = () => {},
    Dn = typeof WebSocket < "u",
    Nn = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
  class Mn {
    constructor(e, t) {
      var s;
      (this.accessTokenValue = null),
        (this.apiKey = null),
        (this.channels = []),
        (this.endPoint = ""),
        (this.httpEndpoint = ""),
        (this.headers = En),
        (this.params = {}),
        (this.timeout = Gr),
        (this.heartbeatIntervalMs = 3e4),
        (this.heartbeatTimer = void 0),
        (this.pendingHeartbeatRef = null),
        (this.ref = 0),
        (this.logger = Un),
        (this.conn = null),
        (this.sendBuffer = []),
        (this.serializer = new An()),
        (this.stateChangeCallbacks = {
          open: [],
          close: [],
          error: [],
          message: [],
        }),
        (this.accessToken = null),
        (this._resolveFetch = (i) => {
          let o;
          return (
            i
              ? (o = i)
              : typeof fetch > "u"
                ? (o = (...a) =>
                    Promise.resolve()
                      .then(() => de)
                      .then(({ default: l }) => l(...a)))
                : (o = fetch),
            (...a) => o(...a)
          );
        }),
        (this.endPoint = `${e}/${St.websocket}`),
        (this.httpEndpoint = Xr(e)),
        t != null && t.transport
          ? (this.transport = t.transport)
          : (this.transport = null),
        t != null && t.params && (this.params = t.params),
        t != null &&
          t.headers &&
          (this.headers = Object.assign(
            Object.assign({}, this.headers),
            t.headers,
          )),
        t != null && t.timeout && (this.timeout = t.timeout),
        t != null && t.logger && (this.logger = t.logger),
        t != null &&
          t.heartbeatIntervalMs &&
          (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
      const n =
        (s = t == null ? void 0 : t.params) === null || s === void 0
          ? void 0
          : s.apikey;
      if (
        (n && ((this.accessTokenValue = n), (this.apiKey = n)),
        (this.reconnectAfterMs =
          t != null && t.reconnectAfterMs
            ? t.reconnectAfterMs
            : (i) => [1e3, 2e3, 5e3, 1e4][i - 1] || 1e4),
        (this.encode =
          t != null && t.encode ? t.encode : (i, o) => o(JSON.stringify(i))),
        (this.decode =
          t != null && t.decode
            ? t.decode
            : this.serializer.decode.bind(this.serializer)),
        (this.reconnectTimer = new Kr(async () => {
          this.disconnect(), this.connect();
        }, this.reconnectAfterMs)),
        (this.fetch = this._resolveFetch(t == null ? void 0 : t.fetch)),
        t != null && t.worker)
      ) {
        if (typeof window < "u" && !window.Worker)
          throw new Error("Web Worker is not supported");
        (this.worker = (t == null ? void 0 : t.worker) || !1),
          (this.workerUrl = t == null ? void 0 : t.workerUrl);
      }
      this.accessToken = (t == null ? void 0 : t.accessToken) || null;
    }
    connect() {
      if (!this.conn) {
        if (this.transport) {
          this.conn = new this.transport(this.endpointURL(), void 0, {
            headers: this.headers,
          });
          return;
        }
        if (Dn) {
          (this.conn = new WebSocket(this.endpointURL())),
            this.setupConnection();
          return;
        }
        (this.conn = new Bn(this.endpointURL(), void 0, {
          close: () => {
            this.conn = null;
          },
        })),
          Promise.resolve()
            .then(() => ro)
            .then(({ default: e }) => {
              (this.conn = new e(this.endpointURL(), void 0, {
                headers: this.headers,
              })),
                this.setupConnection();
            });
      }
    }
    endpointURL() {
      return this._appendParams(
        this.endPoint,
        Object.assign({}, this.params, { vsn: Pn }),
      );
    }
    disconnect(e, t) {
      this.conn &&
        ((this.conn.onclose = function () {}),
        e ? this.conn.close(e, t ?? "") : this.conn.close(),
        (this.conn = null),
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.reconnectTimer.reset());
    }
    getChannels() {
      return this.channels;
    }
    async removeChannel(e) {
      const t = await e.unsubscribe();
      return this.channels.length === 0 && this.disconnect(), t;
    }
    async removeAllChannels() {
      const e = await Promise.all(this.channels.map((t) => t.unsubscribe()));
      return this.disconnect(), e;
    }
    log(e, t, s) {
      this.logger(e, t, s);
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case fe.connecting:
          return Z.Connecting;
        case fe.open:
          return Z.Open;
        case fe.closing:
          return Z.Closing;
        default:
          return Z.Closed;
      }
    }
    isConnected() {
      return this.connectionState() === Z.Open;
    }
    channel(e, t = { config: {} }) {
      const s = new Et(`realtime:${e}`, t, this);
      return this.channels.push(s), s;
    }
    push(e) {
      const { topic: t, event: s, payload: n, ref: i } = e,
        o = () => {
          this.encode(e, (a) => {
            var l;
            (l = this.conn) === null || l === void 0 || l.send(a);
          });
        };
      this.log("push", `${t} ${s} (${i})`, n),
        this.isConnected() ? o() : this.sendBuffer.push(o);
    }
    async setAuth(e = null) {
      let t =
        e ||
        (this.accessToken && (await this.accessToken())) ||
        this.accessTokenValue;
      if (t) {
        let s = null;
        try {
          s = JSON.parse(atob(t.split(".")[1]));
        } catch {}
        if (s && s.exp && !(Math.floor(Date.now() / 1e3) - s.exp < 0))
          return (
            this.log(
              "auth",
              `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${s.exp}`,
            ),
            Promise.reject(
              `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${s.exp}`,
            )
          );
        (this.accessTokenValue = t),
          this.channels.forEach((n) => {
            t && n.updateJoinPayload({ access_token: t }),
              n.joinedOnce &&
                n._isJoined() &&
                n._push(N.access_token, { access_token: t });
          });
      }
    }
    async sendHeartbeat() {
      var e;
      if (this.isConnected()) {
        if (this.pendingHeartbeatRef) {
          (this.pendingHeartbeatRef = null),
            this.log(
              "transport",
              "heartbeat timeout. Attempting to re-establish connection",
            ),
            (e = this.conn) === null ||
              e === void 0 ||
              e.close(On, "hearbeat timeout");
          return;
        }
        (this.pendingHeartbeatRef = this._makeRef()),
          this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef,
          }),
          this.setAuth();
      }
    }
    flushSendBuffer() {
      this.isConnected() &&
        this.sendBuffer.length > 0 &&
        (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
    }
    _makeRef() {
      let e = this.ref + 1;
      return (
        e === this.ref ? (this.ref = 0) : (this.ref = e), this.ref.toString()
      );
    }
    _leaveOpenTopic(e) {
      let t = this.channels.find(
        (s) => s.topic === e && (s._isJoined() || s._isJoining()),
      );
      t &&
        (this.log("transport", `leaving duplicate topic "${e}"`),
        t.unsubscribe());
    }
    _remove(e) {
      this.channels = this.channels.filter(
        (t) => t._joinRef() !== e._joinRef(),
      );
    }
    setupConnection() {
      this.conn &&
        ((this.conn.binaryType = "arraybuffer"),
        (this.conn.onopen = () => this._onConnOpen()),
        (this.conn.onerror = (e) => this._onConnError(e)),
        (this.conn.onmessage = (e) => this._onConnMessage(e)),
        (this.conn.onclose = (e) => this._onConnClose(e)));
    }
    _onConnMessage(e) {
      this.decode(e.data, (t) => {
        let { topic: s, event: n, payload: i, ref: o } = t;
        o &&
          o === this.pendingHeartbeatRef &&
          (this.pendingHeartbeatRef = null),
          this.log(
            "receive",
            `${i.status || ""} ${s} ${n} ${(o && "(" + o + ")") || ""}`,
            i,
          ),
          this.channels
            .filter((a) => a._isMember(s))
            .forEach((a) => a._trigger(n, i, o)),
          this.stateChangeCallbacks.message.forEach((a) => a(t));
      });
    }
    async _onConnOpen() {
      if (
        (this.log("transport", `connected to ${this.endpointURL()}`),
        this.flushSendBuffer(),
        this.reconnectTimer.reset(),
        !this.worker)
      )
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
          (this.heartbeatTimer = setInterval(
            () => this.sendHeartbeat(),
            this.heartbeatIntervalMs,
          ));
      else {
        this.workerUrl
          ? this.log("worker", `starting worker for from ${this.workerUrl}`)
          : this.log("worker", "starting default worker");
        const e = this._workerObjectUrl(this.workerUrl);
        (this.workerRef = new Worker(e)),
          (this.workerRef.onerror = (t) => {
            this.log("worker", "worker error", t.message),
              this.workerRef.terminate();
          }),
          (this.workerRef.onmessage = (t) => {
            t.data.event === "keepAlive" && this.sendHeartbeat();
          }),
          this.workerRef.postMessage({
            event: "start",
            interval: this.heartbeatIntervalMs,
          });
      }
      this.stateChangeCallbacks.open.forEach((e) => e());
    }
    _onConnClose(e) {
      this.log("transport", "close", e),
        this._triggerChanError(),
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.reconnectTimer.scheduleTimeout(),
        this.stateChangeCallbacks.close.forEach((t) => t(e));
    }
    _onConnError(e) {
      this.log("transport", e.message),
        this._triggerChanError(),
        this.stateChangeCallbacks.error.forEach((t) => t(e));
    }
    _triggerChanError() {
      this.channels.forEach((e) => e._trigger(N.error));
    }
    _appendParams(e, t) {
      if (Object.keys(t).length === 0) return e;
      const s = e.match(/\?/) ? "&" : "?",
        n = new URLSearchParams(t);
      return `${e}${s}${n}`;
    }
    _workerObjectUrl(e) {
      let t;
      if (e) t = e;
      else {
        const s = new Blob([Nn], { type: "application/javascript" });
        t = URL.createObjectURL(s);
      }
      return t;
    }
  }
  class Bn {
    constructor(e, t, s) {
      (this.binaryType = "arraybuffer"),
        (this.onclose = () => {}),
        (this.onerror = () => {}),
        (this.onmessage = () => {}),
        (this.onopen = () => {}),
        (this.readyState = fe.connecting),
        (this.send = () => {}),
        (this.url = null),
        (this.url = e),
        (this.close = s.close);
    }
  }
  class Pt extends Error {
    constructor(e) {
      super(e), (this.__isStorageError = !0), (this.name = "StorageError");
    }
  }
  function j(r) {
    return typeof r == "object" && r !== null && "__isStorageError" in r;
  }
  class Fn extends Pt {
    constructor(e, t) {
      super(e), (this.name = "StorageApiError"), (this.status = t);
    }
    toJSON() {
      return { name: this.name, message: this.message, status: this.status };
    }
  }
  class Ot extends Pt {
    constructor(e, t) {
      super(e), (this.name = "StorageUnknownError"), (this.originalError = t);
    }
  }
  var qn = function (r, e, t, s) {
    function n(i) {
      return i instanceof t
        ? i
        : new t(function (o) {
            o(i);
          });
    }
    return new (t || (t = Promise))(function (i, o) {
      function a(u) {
        try {
          c(s.next(u));
        } catch (h) {
          o(h);
        }
      }
      function l(u) {
        try {
          c(s.throw(u));
        } catch (h) {
          o(h);
        }
      }
      function c(u) {
        u.done ? i(u.value) : n(u.value).then(a, l);
      }
      c((s = s.apply(r, e || [])).next());
    });
  };
  const ts = (r) => {
      let e;
      return (
        r
          ? (e = r)
          : typeof fetch > "u"
            ? (e = (...t) =>
                Promise.resolve()
                  .then(() => de)
                  .then(({ default: s }) => s(...t)))
            : (e = fetch),
        (...t) => e(...t)
      );
    },
    Hn = () =>
      qn(void 0, void 0, void 0, function* () {
        return typeof Response > "u"
          ? (yield Promise.resolve().then(() => de)).Response
          : Response;
      }),
    At = (r) => {
      if (Array.isArray(r)) return r.map((t) => At(t));
      if (typeof r == "function" || r !== Object(r)) return r;
      const e = {};
      return (
        Object.entries(r).forEach(([t, s]) => {
          const n = t.replace(/([-_][a-z])/gi, (i) =>
            i.toUpperCase().replace(/[-_]/g, ""),
          );
          e[n] = At(s);
        }),
        e
      );
    };
  var ee = function (r, e, t, s) {
    function n(i) {
      return i instanceof t
        ? i
        : new t(function (o) {
            o(i);
          });
    }
    return new (t || (t = Promise))(function (i, o) {
      function a(u) {
        try {
          c(s.next(u));
        } catch (h) {
          o(h);
        }
      }
      function l(u) {
        try {
          c(s.throw(u));
        } catch (h) {
          o(h);
        }
      }
      function c(u) {
        u.done ? i(u.value) : n(u.value).then(a, l);
      }
      c((s = s.apply(r, e || [])).next());
    });
  };
  const jt = (r) =>
      r.msg || r.message || r.error_description || r.error || JSON.stringify(r),
    zn = (r, e, t) =>
      ee(void 0, void 0, void 0, function* () {
        const s = yield Hn();
        r instanceof s && !(t != null && t.noResolveJson)
          ? r
              .json()
              .then((n) => {
                e(new Fn(jt(n), r.status || 500));
              })
              .catch((n) => {
                e(new Ot(jt(n), n));
              })
          : e(new Ot(jt(r), r));
      }),
    Wn = (r, e, t, s) => {
      const n = { method: r, headers: (e == null ? void 0 : e.headers) || {} };
      return r === "GET"
        ? n
        : ((n.headers = Object.assign(
            { "Content-Type": "application/json" },
            e == null ? void 0 : e.headers,
          )),
          s && (n.body = JSON.stringify(s)),
          Object.assign(Object.assign({}, n), t));
    };
  function Ae(r, e, t, s, n, i) {
    return ee(this, void 0, void 0, function* () {
      return new Promise((o, a) => {
        r(t, Wn(e, s, n, i))
          .then((l) => {
            if (!l.ok) throw l;
            return s != null && s.noResolveJson ? l : l.json();
          })
          .then((l) => o(l))
          .catch((l) => zn(l, a, s));
      });
    });
  }
  function Xe(r, e, t, s) {
    return ee(this, void 0, void 0, function* () {
      return Ae(r, "GET", e, t, s);
    });
  }
  function J(r, e, t, s, n) {
    return ee(this, void 0, void 0, function* () {
      return Ae(r, "POST", e, s, n, t);
    });
  }
  function Jn(r, e, t, s, n) {
    return ee(this, void 0, void 0, function* () {
      return Ae(r, "PUT", e, s, n, t);
    });
  }
  function Gn(r, e, t, s) {
    return ee(this, void 0, void 0, function* () {
      return Ae(
        r,
        "HEAD",
        e,
        Object.assign(Object.assign({}, t), { noResolveJson: !0 }),
        s,
      );
    });
  }
  function rs(r, e, t, s, n) {
    return ee(this, void 0, void 0, function* () {
      return Ae(r, "DELETE", e, s, n, t);
    });
  }
  var x = function (r, e, t, s) {
    function n(i) {
      return i instanceof t
        ? i
        : new t(function (o) {
            o(i);
          });
    }
    return new (t || (t = Promise))(function (i, o) {
      function a(u) {
        try {
          c(s.next(u));
        } catch (h) {
          o(h);
        }
      }
      function l(u) {
        try {
          c(s.throw(u));
        } catch (h) {
          o(h);
        }
      }
      function c(u) {
        u.done ? i(u.value) : n(u.value).then(a, l);
      }
      c((s = s.apply(r, e || [])).next());
    });
  };
  const Kn = {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    },
    ss = {
      cacheControl: "3600",
      contentType: "text/plain;charset=UTF-8",
      upsert: !1,
    };
  class Vn {
    constructor(e, t = {}, s, n) {
      (this.url = e),
        (this.headers = t),
        (this.bucketId = s),
        (this.fetch = ts(n));
    }
    uploadOrUpdate(e, t, s, n) {
      return x(this, void 0, void 0, function* () {
        try {
          let i;
          const o = Object.assign(Object.assign({}, ss), n);
          let a = Object.assign(
            Object.assign({}, this.headers),
            e === "POST" && { "x-upsert": String(o.upsert) },
          );
          const l = o.metadata;
          typeof Blob < "u" && s instanceof Blob
            ? ((i = new FormData()),
              i.append("cacheControl", o.cacheControl),
              l && i.append("metadata", this.encodeMetadata(l)),
              i.append("", s))
            : typeof FormData < "u" && s instanceof FormData
              ? ((i = s),
                i.append("cacheControl", o.cacheControl),
                l && i.append("metadata", this.encodeMetadata(l)))
              : ((i = s),
                (a["cache-control"] = `max-age=${o.cacheControl}`),
                (a["content-type"] = o.contentType),
                l && (a["x-metadata"] = this.toBase64(this.encodeMetadata(l)))),
            n != null &&
              n.headers &&
              (a = Object.assign(Object.assign({}, a), n.headers));
          const c = this._removeEmptyFolders(t),
            u = this._getFinalPath(c),
            h = yield this.fetch(
              `${this.url}/object/${u}`,
              Object.assign(
                { method: e, body: i, headers: a },
                o != null && o.duplex ? { duplex: o.duplex } : {},
              ),
            ),
            d = yield h.json();
          return h.ok
            ? { data: { path: c, id: d.Id, fullPath: d.Key }, error: null }
            : { data: null, error: d };
        } catch (i) {
          if (j(i)) return { data: null, error: i };
          throw i;
        }
      });
    }
    upload(e, t, s) {
      return x(this, void 0, void 0, function* () {
        return this.uploadOrUpdate("POST", e, t, s);
      });
    }
    uploadToSignedUrl(e, t, s, n) {
      return x(this, void 0, void 0, function* () {
        const i = this._removeEmptyFolders(e),
          o = this._getFinalPath(i),
          a = new URL(this.url + `/object/upload/sign/${o}`);
        a.searchParams.set("token", t);
        try {
          let l;
          const c = Object.assign({ upsert: ss.upsert }, n),
            u = Object.assign(Object.assign({}, this.headers), {
              "x-upsert": String(c.upsert),
            });
          typeof Blob < "u" && s instanceof Blob
            ? ((l = new FormData()),
              l.append("cacheControl", c.cacheControl),
              l.append("", s))
            : typeof FormData < "u" && s instanceof FormData
              ? ((l = s), l.append("cacheControl", c.cacheControl))
              : ((l = s),
                (u["cache-control"] = `max-age=${c.cacheControl}`),
                (u["content-type"] = c.contentType));
          const h = yield this.fetch(a.toString(), {
              method: "PUT",
              body: l,
              headers: u,
            }),
            d = yield h.json();
          return h.ok
            ? { data: { path: i, fullPath: d.Key }, error: null }
            : { data: null, error: d };
        } catch (l) {
          if (j(l)) return { data: null, error: l };
          throw l;
        }
      });
    }
    createSignedUploadUrl(e, t) {
      return x(this, void 0, void 0, function* () {
        try {
          let s = this._getFinalPath(e);
          const n = Object.assign({}, this.headers);
          t != null && t.upsert && (n["x-upsert"] = "true");
          const i = yield J(
              this.fetch,
              `${this.url}/object/upload/sign/${s}`,
              {},
              { headers: n },
            ),
            o = new URL(this.url + i.url),
            a = o.searchParams.get("token");
          if (!a) throw new Pt("No token returned by API");
          return {
            data: { signedUrl: o.toString(), path: e, token: a },
            error: null,
          };
        } catch (s) {
          if (j(s)) return { data: null, error: s };
          throw s;
        }
      });
    }
    update(e, t, s) {
      return x(this, void 0, void 0, function* () {
        return this.uploadOrUpdate("PUT", e, t, s);
      });
    }
    move(e, t, s) {
      return x(this, void 0, void 0, function* () {
        try {
          return {
            data: yield J(
              this.fetch,
              `${this.url}/object/move`,
              {
                bucketId: this.bucketId,
                sourceKey: e,
                destinationKey: t,
                destinationBucket: s == null ? void 0 : s.destinationBucket,
              },
              { headers: this.headers },
            ),
            error: null,
          };
        } catch (n) {
          if (j(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    copy(e, t, s) {
      return x(this, void 0, void 0, function* () {
        try {
          return {
            data: {
              path: (yield J(
                this.fetch,
                `${this.url}/object/copy`,
                {
                  bucketId: this.bucketId,
                  sourceKey: e,
                  destinationKey: t,
                  destinationBucket: s == null ? void 0 : s.destinationBucket,
                },
                { headers: this.headers },
              )).Key,
            },
            error: null,
          };
        } catch (n) {
          if (j(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    createSignedUrl(e, t, s) {
      return x(this, void 0, void 0, function* () {
        try {
          let n = this._getFinalPath(e),
            i = yield J(
              this.fetch,
              `${this.url}/object/sign/${n}`,
              Object.assign(
                { expiresIn: t },
                s != null && s.transform ? { transform: s.transform } : {},
              ),
              { headers: this.headers },
            );
          const o =
            s != null && s.download
              ? `&download=${s.download === !0 ? "" : s.download}`
              : "";
          return (
            (i = { signedUrl: encodeURI(`${this.url}${i.signedURL}${o}`) }),
            { data: i, error: null }
          );
        } catch (n) {
          if (j(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    createSignedUrls(e, t, s) {
      return x(this, void 0, void 0, function* () {
        try {
          const n = yield J(
              this.fetch,
              `${this.url}/object/sign/${this.bucketId}`,
              { expiresIn: t, paths: e },
              { headers: this.headers },
            ),
            i =
              s != null && s.download
                ? `&download=${s.download === !0 ? "" : s.download}`
                : "";
          return {
            data: n.map((o) =>
              Object.assign(Object.assign({}, o), {
                signedUrl: o.signedURL
                  ? encodeURI(`${this.url}${o.signedURL}${i}`)
                  : null,
              }),
            ),
            error: null,
          };
        } catch (n) {
          if (j(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    download(e, t) {
      return x(this, void 0, void 0, function* () {
        const n =
            typeof (t == null ? void 0 : t.transform) < "u"
              ? "render/image/authenticated"
              : "object",
          i = this.transformOptsToQueryString(
            (t == null ? void 0 : t.transform) || {},
          ),
          o = i ? `?${i}` : "";
        try {
          const a = this._getFinalPath(e);
          return {
            data: yield (yield Xe(this.fetch, `${this.url}/${n}/${a}${o}`, {
              headers: this.headers,
              noResolveJson: !0,
            })).blob(),
            error: null,
          };
        } catch (a) {
          if (j(a)) return { data: null, error: a };
          throw a;
        }
      });
    }
    info(e) {
      return x(this, void 0, void 0, function* () {
        const t = this._getFinalPath(e);
        try {
          const s = yield Xe(this.fetch, `${this.url}/object/info/${t}`, {
            headers: this.headers,
          });
          return { data: At(s), error: null };
        } catch (s) {
          if (j(s)) return { data: null, error: s };
          throw s;
        }
      });
    }
    exists(e) {
      return x(this, void 0, void 0, function* () {
        const t = this._getFinalPath(e);
        try {
          return (
            yield Gn(this.fetch, `${this.url}/object/${t}`, {
              headers: this.headers,
            }),
            { data: !0, error: null }
          );
        } catch (s) {
          if (j(s) && s instanceof Ot) {
            const n = s.originalError;
            if ([400, 404].includes(n == null ? void 0 : n.status))
              return { data: !1, error: s };
          }
          throw s;
        }
      });
    }
    getPublicUrl(e, t) {
      const s = this._getFinalPath(e),
        n = [],
        i =
          t != null && t.download
            ? `download=${t.download === !0 ? "" : t.download}`
            : "";
      i !== "" && n.push(i);
      const a =
          typeof (t == null ? void 0 : t.transform) < "u"
            ? "render/image"
            : "object",
        l = this.transformOptsToQueryString(
          (t == null ? void 0 : t.transform) || {},
        );
      l !== "" && n.push(l);
      let c = n.join("&");
      return (
        c !== "" && (c = `?${c}`),
        { data: { publicUrl: encodeURI(`${this.url}/${a}/public/${s}${c}`) } }
      );
    }
    remove(e) {
      return x(this, void 0, void 0, function* () {
        try {
          return {
            data: yield rs(
              this.fetch,
              `${this.url}/object/${this.bucketId}`,
              { prefixes: e },
              { headers: this.headers },
            ),
            error: null,
          };
        } catch (t) {
          if (j(t)) return { data: null, error: t };
          throw t;
        }
      });
    }
    list(e, t, s) {
      return x(this, void 0, void 0, function* () {
        try {
          const n = Object.assign(Object.assign(Object.assign({}, Kn), t), {
            prefix: e || "",
          });
          return {
            data: yield J(
              this.fetch,
              `${this.url}/object/list/${this.bucketId}`,
              n,
              { headers: this.headers },
              s,
            ),
            error: null,
          };
        } catch (n) {
          if (j(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    encodeMetadata(e) {
      return JSON.stringify(e);
    }
    toBase64(e) {
      return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
    }
    _getFinalPath(e) {
      return `${this.bucketId}/${e}`;
    }
    _removeEmptyFolders(e) {
      return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
    }
    transformOptsToQueryString(e) {
      const t = [];
      return (
        e.width && t.push(`width=${e.width}`),
        e.height && t.push(`height=${e.height}`),
        e.resize && t.push(`resize=${e.resize}`),
        e.format && t.push(`format=${e.format}`),
        e.quality && t.push(`quality=${e.quality}`),
        t.join("&")
      );
    }
  }
  const Qn = { "X-Client-Info": "storage-js/2.7.1" };
  var _e = function (r, e, t, s) {
    function n(i) {
      return i instanceof t
        ? i
        : new t(function (o) {
            o(i);
          });
    }
    return new (t || (t = Promise))(function (i, o) {
      function a(u) {
        try {
          c(s.next(u));
        } catch (h) {
          o(h);
        }
      }
      function l(u) {
        try {
          c(s.throw(u));
        } catch (h) {
          o(h);
        }
      }
      function c(u) {
        u.done ? i(u.value) : n(u.value).then(a, l);
      }
      c((s = s.apply(r, e || [])).next());
    });
  };
  class Xn {
    constructor(e, t = {}, s) {
      (this.url = e),
        (this.headers = Object.assign(Object.assign({}, Qn), t)),
        (this.fetch = ts(s));
    }
    listBuckets() {
      return _e(this, void 0, void 0, function* () {
        try {
          return {
            data: yield Xe(this.fetch, `${this.url}/bucket`, {
              headers: this.headers,
            }),
            error: null,
          };
        } catch (e) {
          if (j(e)) return { data: null, error: e };
          throw e;
        }
      });
    }
    getBucket(e) {
      return _e(this, void 0, void 0, function* () {
        try {
          return {
            data: yield Xe(this.fetch, `${this.url}/bucket/${e}`, {
              headers: this.headers,
            }),
            error: null,
          };
        } catch (t) {
          if (j(t)) return { data: null, error: t };
          throw t;
        }
      });
    }
    createBucket(e, t = { public: !1 }) {
      return _e(this, void 0, void 0, function* () {
        try {
          return {
            data: yield J(
              this.fetch,
              `${this.url}/bucket`,
              {
                id: e,
                name: e,
                public: t.public,
                file_size_limit: t.fileSizeLimit,
                allowed_mime_types: t.allowedMimeTypes,
              },
              { headers: this.headers },
            ),
            error: null,
          };
        } catch (s) {
          if (j(s)) return { data: null, error: s };
          throw s;
        }
      });
    }
    updateBucket(e, t) {
      return _e(this, void 0, void 0, function* () {
        try {
          return {
            data: yield Jn(
              this.fetch,
              `${this.url}/bucket/${e}`,
              {
                id: e,
                name: e,
                public: t.public,
                file_size_limit: t.fileSizeLimit,
                allowed_mime_types: t.allowedMimeTypes,
              },
              { headers: this.headers },
            ),
            error: null,
          };
        } catch (s) {
          if (j(s)) return { data: null, error: s };
          throw s;
        }
      });
    }
    emptyBucket(e) {
      return _e(this, void 0, void 0, function* () {
        try {
          return {
            data: yield J(
              this.fetch,
              `${this.url}/bucket/${e}/empty`,
              {},
              { headers: this.headers },
            ),
            error: null,
          };
        } catch (t) {
          if (j(t)) return { data: null, error: t };
          throw t;
        }
      });
    }
    deleteBucket(e) {
      return _e(this, void 0, void 0, function* () {
        try {
          return {
            data: yield rs(
              this.fetch,
              `${this.url}/bucket/${e}`,
              {},
              { headers: this.headers },
            ),
            error: null,
          };
        } catch (t) {
          if (j(t)) return { data: null, error: t };
          throw t;
        }
      });
    }
  }
  class Yn extends Xn {
    constructor(e, t = {}, s) {
      super(e, t, s);
    }
    from(e) {
      return new Vn(this.url, this.headers, e, this.fetch);
    }
  }
  const Zn = "2.47.10";
  let je = "";
  typeof Deno < "u"
    ? (je = "deno")
    : typeof document < "u"
      ? (je = "web")
      : typeof navigator < "u" && navigator.product === "ReactNative"
        ? (je = "react-native")
        : (je = "node");
  const ei = { headers: { "X-Client-Info": `supabase-js-${je}/${Zn}` } },
    ti = { schema: "public" },
    ri = {
      autoRefreshToken: !0,
      persistSession: !0,
      detectSessionInUrl: !0,
      flowType: "implicit",
    },
    si = {};
  var ni = function (r, e, t, s) {
    function n(i) {
      return i instanceof t
        ? i
        : new t(function (o) {
            o(i);
          });
    }
    return new (t || (t = Promise))(function (i, o) {
      function a(u) {
        try {
          c(s.next(u));
        } catch (h) {
          o(h);
        }
      }
      function l(u) {
        try {
          c(s.throw(u));
        } catch (h) {
          o(h);
        }
      }
      function c(u) {
        u.done ? i(u.value) : n(u.value).then(a, l);
      }
      c((s = s.apply(r, e || [])).next());
    });
  };
  const ii = (r) => {
      let e;
      return (
        r ? (e = r) : typeof fetch > "u" ? (e = Rr) : (e = fetch),
        (...t) => e(...t)
      );
    },
    oi = () => (typeof Headers > "u" ? xr : Headers),
    ai = (r, e, t) => {
      const s = ii(t),
        n = oi();
      return (i, o) =>
        ni(void 0, void 0, void 0, function* () {
          var a;
          const l = (a = yield e()) !== null && a !== void 0 ? a : r;
          let c = new n(o == null ? void 0 : o.headers);
          return (
            c.has("apikey") || c.set("apikey", r),
            c.has("Authorization") || c.set("Authorization", `Bearer ${l}`),
            s(i, Object.assign(Object.assign({}, o), { headers: c }))
          );
        });
    };
  var li = function (r, e, t, s) {
    function n(i) {
      return i instanceof t
        ? i
        : new t(function (o) {
            o(i);
          });
    }
    return new (t || (t = Promise))(function (i, o) {
      function a(u) {
        try {
          c(s.next(u));
        } catch (h) {
          o(h);
        }
      }
      function l(u) {
        try {
          c(s.throw(u));
        } catch (h) {
          o(h);
        }
      }
      function c(u) {
        u.done ? i(u.value) : n(u.value).then(a, l);
      }
      c((s = s.apply(r, e || [])).next());
    });
  };
  function ci(r) {
    return r.replace(/\/$/, "");
  }
  function ui(r, e) {
    const { db: t, auth: s, realtime: n, global: i } = r,
      { db: o, auth: a, realtime: l, global: c } = e,
      u = {
        db: Object.assign(Object.assign({}, o), t),
        auth: Object.assign(Object.assign({}, a), s),
        realtime: Object.assign(Object.assign({}, l), n),
        global: Object.assign(Object.assign({}, c), i),
        accessToken: () =>
          li(this, void 0, void 0, function* () {
            return "";
          }),
      };
    return (
      r.accessToken ? (u.accessToken = r.accessToken) : delete u.accessToken, u
    );
  }
  const ns = "2.67.3",
    hi = "http://localhost:9999",
    di = "supabase.auth.token",
    fi = { "X-Client-Info": `gotrue-js/${ns}` },
    is = 10,
    Ct = "X-Supabase-Api-Version",
    os = {
      "2024-01-01": {
        timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
        name: "2024-01-01",
      },
    };
  function _i(r) {
    return Math.round(Date.now() / 1e3) + r;
  }
  function pi() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (r) {
        const e = (Math.random() * 16) | 0;
        return (r == "x" ? e : (e & 3) | 8).toString(16);
      },
    );
  }
  const F = () => typeof window < "u" && typeof document < "u",
    te = { tested: !1, writable: !1 },
    Ce = () => {
      if (!F()) return !1;
      try {
        if (typeof globalThis.localStorage != "object") return !1;
      } catch {
        return !1;
      }
      if (te.tested) return te.writable;
      const r = `lswt-${Math.random()}${Math.random()}`;
      try {
        globalThis.localStorage.setItem(r, r),
          globalThis.localStorage.removeItem(r),
          (te.tested = !0),
          (te.writable = !0);
      } catch {
        (te.tested = !0), (te.writable = !1);
      }
      return te.writable;
    };
  function vi(r) {
    const e = {},
      t = new URL(r);
    if (t.hash && t.hash[0] === "#")
      try {
        new URLSearchParams(t.hash.substring(1)).forEach((n, i) => {
          e[i] = n;
        });
      } catch {}
    return (
      t.searchParams.forEach((s, n) => {
        e[n] = s;
      }),
      e
    );
  }
  const as = (r) => {
      let e;
      return (
        r
          ? (e = r)
          : typeof fetch > "u"
            ? (e = (...t) =>
                Promise.resolve()
                  .then(() => de)
                  .then(({ default: s }) => s(...t)))
            : (e = fetch),
        (...t) => e(...t)
      );
    },
    gi = (r) =>
      typeof r == "object" &&
      r !== null &&
      "status" in r &&
      "ok" in r &&
      "json" in r &&
      typeof r.json == "function",
    ls = async (r, e, t) => {
      await r.setItem(e, JSON.stringify(t));
    },
    Ye = async (r, e) => {
      const t = await r.getItem(e);
      if (!t) return null;
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    },
    Ze = async (r, e) => {
      await r.removeItem(e);
    };
  function mi(r) {
    const e =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let t = "",
      s,
      n,
      i,
      o,
      a,
      l,
      c,
      u = 0;
    for (r = r.replace("-", "+").replace("_", "/"); u < r.length; )
      (o = e.indexOf(r.charAt(u++))),
        (a = e.indexOf(r.charAt(u++))),
        (l = e.indexOf(r.charAt(u++))),
        (c = e.indexOf(r.charAt(u++))),
        (s = (o << 2) | (a >> 4)),
        (n = ((a & 15) << 4) | (l >> 2)),
        (i = ((l & 3) << 6) | c),
        (t = t + String.fromCharCode(s)),
        l != 64 && n != 0 && (t = t + String.fromCharCode(n)),
        c != 64 && i != 0 && (t = t + String.fromCharCode(i));
    return t;
  }
  class et {
    constructor() {
      this.promise = new et.promiseConstructor((e, t) => {
        (this.resolve = e), (this.reject = t);
      });
    }
  }
  et.promiseConstructor = Promise;
  function cs(r) {
    const e = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,
      t = r.split(".");
    if (t.length !== 3)
      throw new Error("JWT is not valid: not a JWT structure");
    if (!e.test(t[1]))
      throw new Error("JWT is not valid: payload is not in base64url format");
    const s = t[1];
    return JSON.parse(mi(s));
  }
  async function yi(r) {
    return await new Promise((e) => {
      setTimeout(() => e(null), r);
    });
  }
  function wi(r, e) {
    return new Promise((s, n) => {
      (async () => {
        for (let i = 0; i < 1 / 0; i++)
          try {
            const o = await r(i);
            if (!e(i, null, o)) {
              s(o);
              return;
            }
          } catch (o) {
            if (!e(i, o)) {
              n(o);
              return;
            }
          }
      })();
    });
  }
  function bi(r) {
    return ("0" + r.toString(16)).substr(-2);
  }
  function ki() {
    const e = new Uint32Array(56);
    if (typeof crypto > "u") {
      const t =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
        s = t.length;
      let n = "";
      for (let i = 0; i < 56; i++) n += t.charAt(Math.floor(Math.random() * s));
      return n;
    }
    return crypto.getRandomValues(e), Array.from(e, bi).join("");
  }
  async function Si(r) {
    const t = new TextEncoder().encode(r),
      s = await crypto.subtle.digest("SHA-256", t),
      n = new Uint8Array(s);
    return Array.from(n)
      .map((i) => String.fromCharCode(i))
      .join("");
  }
  function $i(r) {
    return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  async function Ti(r) {
    if (
      !(
        typeof crypto < "u" &&
        typeof crypto.subtle < "u" &&
        typeof TextEncoder < "u"
      )
    )
      return (
        console.warn(
          "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.",
        ),
        r
      );
    const t = await Si(r);
    return $i(t);
  }
  async function pe(r, e, t = !1) {
    const s = ki();
    let n = s;
    t && (n += "/PASSWORD_RECOVERY"), await ls(r, `${e}-code-verifier`, n);
    const i = await Ti(s);
    return [i, s === i ? "plain" : "s256"];
  }
  const Ei = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
  function Pi(r) {
    const e = r.headers.get(Ct);
    if (!e || !e.match(Ei)) return null;
    try {
      return new Date(`${e}T00:00:00.0Z`);
    } catch {
      return null;
    }
  }
  class Rt extends Error {
    constructor(e, t, s) {
      super(e),
        (this.__isAuthError = !0),
        (this.name = "AuthError"),
        (this.status = t),
        (this.code = s);
    }
  }
  function b(r) {
    return typeof r == "object" && r !== null && "__isAuthError" in r;
  }
  class Oi extends Rt {
    constructor(e, t, s) {
      super(e, t, s),
        (this.name = "AuthApiError"),
        (this.status = t),
        (this.code = s);
    }
  }
  function Ai(r) {
    return b(r) && r.name === "AuthApiError";
  }
  class us extends Rt {
    constructor(e, t) {
      super(e), (this.name = "AuthUnknownError"), (this.originalError = t);
    }
  }
  class re extends Rt {
    constructor(e, t, s, n) {
      super(e, s, n), (this.name = t), (this.status = s);
    }
  }
  class G extends re {
    constructor() {
      super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
    }
  }
  function ji(r) {
    return b(r) && r.name === "AuthSessionMissingError";
  }
  class xt extends re {
    constructor() {
      super(
        "Auth session or user missing",
        "AuthInvalidTokenResponseError",
        500,
        void 0,
      );
    }
  }
  class tt extends re {
    constructor(e) {
      super(e, "AuthInvalidCredentialsError", 400, void 0);
    }
  }
  class rt extends re {
    constructor(e, t = null) {
      super(e, "AuthImplicitGrantRedirectError", 500, void 0),
        (this.details = null),
        (this.details = t);
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        details: this.details,
      };
    }
  }
  function Ci(r) {
    return b(r) && r.name === "AuthImplicitGrantRedirectError";
  }
  class hs extends re {
    constructor(e, t = null) {
      super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
        (this.details = null),
        (this.details = t);
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        details: this.details,
      };
    }
  }
  class It extends re {
    constructor(e, t) {
      super(e, "AuthRetryableFetchError", t, void 0);
    }
  }
  function Lt(r) {
    return b(r) && r.name === "AuthRetryableFetchError";
  }
  class ds extends re {
    constructor(e, t, s) {
      super(e, "AuthWeakPasswordError", t, "weak_password"), (this.reasons = s);
    }
  }
  var Ri = function (r, e) {
    var t = {};
    for (var s in r)
      Object.prototype.hasOwnProperty.call(r, s) &&
        e.indexOf(s) < 0 &&
        (t[s] = r[s]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function")
      for (var n = 0, s = Object.getOwnPropertySymbols(r); n < s.length; n++)
        e.indexOf(s[n]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(r, s[n]) &&
          (t[s[n]] = r[s[n]]);
    return t;
  };
  const se = (r) =>
      r.msg || r.message || r.error_description || r.error || JSON.stringify(r),
    xi = [502, 503, 504];
  async function fs(r) {
    var e;
    if (!gi(r)) throw new It(se(r), 0);
    if (xi.includes(r.status)) throw new It(se(r), r.status);
    let t;
    try {
      t = await r.json();
    } catch (i) {
      throw new us(se(i), i);
    }
    let s;
    const n = Pi(r);
    if (
      (n &&
      n.getTime() >= os["2024-01-01"].timestamp &&
      typeof t == "object" &&
      t &&
      typeof t.code == "string"
        ? (s = t.code)
        : typeof t == "object" &&
          t &&
          typeof t.error_code == "string" &&
          (s = t.error_code),
      s)
    ) {
      if (s === "weak_password")
        throw new ds(
          se(t),
          r.status,
          ((e = t.weak_password) === null || e === void 0
            ? void 0
            : e.reasons) || [],
        );
      if (s === "session_not_found") throw new G();
    } else if (
      typeof t == "object" &&
      t &&
      typeof t.weak_password == "object" &&
      t.weak_password &&
      Array.isArray(t.weak_password.reasons) &&
      t.weak_password.reasons.length &&
      t.weak_password.reasons.reduce((i, o) => i && typeof o == "string", !0)
    )
      throw new ds(se(t), r.status, t.weak_password.reasons);
    throw new Oi(se(t), r.status || 500, s);
  }
  const Ii = (r, e, t, s) => {
    const n = { method: r, headers: (e == null ? void 0 : e.headers) || {} };
    return r === "GET"
      ? n
      : ((n.headers = Object.assign(
          { "Content-Type": "application/json;charset=UTF-8" },
          e == null ? void 0 : e.headers,
        )),
        (n.body = JSON.stringify(s)),
        Object.assign(Object.assign({}, n), t));
  };
  async function k(r, e, t, s) {
    var n;
    const i = Object.assign({}, s == null ? void 0 : s.headers);
    i[Ct] || (i[Ct] = os["2024-01-01"].name),
      s != null && s.jwt && (i.Authorization = `Bearer ${s.jwt}`);
    const o =
      (n = s == null ? void 0 : s.query) !== null && n !== void 0 ? n : {};
    s != null && s.redirectTo && (o.redirect_to = s.redirectTo);
    const a = Object.keys(o).length
        ? "?" + new URLSearchParams(o).toString()
        : "",
      l = await Li(
        r,
        e,
        t + a,
        { headers: i, noResolveJson: s == null ? void 0 : s.noResolveJson },
        {},
        s == null ? void 0 : s.body,
      );
    return s != null && s.xform
      ? s == null
        ? void 0
        : s.xform(l)
      : { data: Object.assign({}, l), error: null };
  }
  async function Li(r, e, t, s, n, i) {
    const o = Ii(e, s, n, i);
    let a;
    try {
      a = await r(t, Object.assign({}, o));
    } catch (l) {
      throw (console.error(l), new It(se(l), 0));
    }
    if ((a.ok || (await fs(a)), s != null && s.noResolveJson)) return a;
    try {
      return await a.json();
    } catch (l) {
      await fs(l);
    }
  }
  function K(r) {
    var e;
    let t = null;
    Mi(r) &&
      ((t = Object.assign({}, r)),
      r.expires_at || (t.expires_at = _i(r.expires_in)));
    const s = (e = r.user) !== null && e !== void 0 ? e : r;
    return { data: { session: t, user: s }, error: null };
  }
  function _s(r) {
    const e = K(r);
    return (
      !e.error &&
        r.weak_password &&
        typeof r.weak_password == "object" &&
        Array.isArray(r.weak_password.reasons) &&
        r.weak_password.reasons.length &&
        r.weak_password.message &&
        typeof r.weak_password.message == "string" &&
        r.weak_password.reasons.reduce(
          (t, s) => t && typeof s == "string",
          !0,
        ) &&
        (e.data.weak_password = r.weak_password),
      e
    );
  }
  function V(r) {
    var e;
    return {
      data: { user: (e = r.user) !== null && e !== void 0 ? e : r },
      error: null,
    };
  }
  function Ui(r) {
    return { data: r, error: null };
  }
  function Di(r) {
    const {
        action_link: e,
        email_otp: t,
        hashed_token: s,
        redirect_to: n,
        verification_type: i,
      } = r,
      o = Ri(r, [
        "action_link",
        "email_otp",
        "hashed_token",
        "redirect_to",
        "verification_type",
      ]),
      a = {
        action_link: e,
        email_otp: t,
        hashed_token: s,
        redirect_to: n,
        verification_type: i,
      },
      l = Object.assign({}, o);
    return { data: { properties: a, user: l }, error: null };
  }
  function Ni(r) {
    return r;
  }
  function Mi(r) {
    return r.access_token && r.refresh_token && r.expires_in;
  }
  var Bi = function (r, e) {
    var t = {};
    for (var s in r)
      Object.prototype.hasOwnProperty.call(r, s) &&
        e.indexOf(s) < 0 &&
        (t[s] = r[s]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function")
      for (var n = 0, s = Object.getOwnPropertySymbols(r); n < s.length; n++)
        e.indexOf(s[n]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(r, s[n]) &&
          (t[s[n]] = r[s[n]]);
    return t;
  };
  class Fi {
    constructor({ url: e = "", headers: t = {}, fetch: s }) {
      (this.url = e),
        (this.headers = t),
        (this.fetch = as(s)),
        (this.mfa = {
          listFactors: this._listFactors.bind(this),
          deleteFactor: this._deleteFactor.bind(this),
        });
    }
    async signOut(e, t = "global") {
      try {
        return (
          await k(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
            headers: this.headers,
            jwt: e,
            noResolveJson: !0,
          }),
          { data: null, error: null }
        );
      } catch (s) {
        if (b(s)) return { data: null, error: s };
        throw s;
      }
    }
    async inviteUserByEmail(e, t = {}) {
      try {
        return await k(this.fetch, "POST", `${this.url}/invite`, {
          body: { email: e, data: t.data },
          headers: this.headers,
          redirectTo: t.redirectTo,
          xform: V,
        });
      } catch (s) {
        if (b(s)) return { data: { user: null }, error: s };
        throw s;
      }
    }
    async generateLink(e) {
      try {
        const { options: t } = e,
          s = Bi(e, ["options"]),
          n = Object.assign(Object.assign({}, s), t);
        return (
          "newEmail" in s &&
            ((n.new_email = s == null ? void 0 : s.newEmail),
            delete n.newEmail),
          await k(this.fetch, "POST", `${this.url}/admin/generate_link`, {
            body: n,
            headers: this.headers,
            xform: Di,
            redirectTo: t == null ? void 0 : t.redirectTo,
          })
        );
      } catch (t) {
        if (b(t)) return { data: { properties: null, user: null }, error: t };
        throw t;
      }
    }
    async createUser(e) {
      try {
        return await k(this.fetch, "POST", `${this.url}/admin/users`, {
          body: e,
          headers: this.headers,
          xform: V,
        });
      } catch (t) {
        if (b(t)) return { data: { user: null }, error: t };
        throw t;
      }
    }
    async listUsers(e) {
      var t, s, n, i, o, a, l;
      try {
        const c = { nextPage: null, lastPage: 0, total: 0 },
          u = await k(this.fetch, "GET", `${this.url}/admin/users`, {
            headers: this.headers,
            noResolveJson: !0,
            query: {
              page:
                (s =
                  (t = e == null ? void 0 : e.page) === null || t === void 0
                    ? void 0
                    : t.toString()) !== null && s !== void 0
                  ? s
                  : "",
              per_page:
                (i =
                  (n = e == null ? void 0 : e.perPage) === null || n === void 0
                    ? void 0
                    : n.toString()) !== null && i !== void 0
                  ? i
                  : "",
            },
            xform: Ni,
          });
        if (u.error) throw u.error;
        const h = await u.json(),
          d =
            (o = u.headers.get("x-total-count")) !== null && o !== void 0
              ? o
              : 0,
          f =
            (l =
              (a = u.headers.get("link")) === null || a === void 0
                ? void 0
                : a.split(",")) !== null && l !== void 0
              ? l
              : [];
        return (
          f.length > 0 &&
            (f.forEach((p) => {
              const y = parseInt(p.split(";")[0].split("=")[1].substring(0, 1)),
                _ = JSON.parse(p.split(";")[1].split("=")[1]);
              c[`${_}Page`] = y;
            }),
            (c.total = parseInt(d))),
          { data: Object.assign(Object.assign({}, h), c), error: null }
        );
      } catch (c) {
        if (b(c)) return { data: { users: [] }, error: c };
        throw c;
      }
    }
    async getUserById(e) {
      try {
        return await k(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
          headers: this.headers,
          xform: V,
        });
      } catch (t) {
        if (b(t)) return { data: { user: null }, error: t };
        throw t;
      }
    }
    async updateUserById(e, t) {
      try {
        return await k(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
          body: t,
          headers: this.headers,
          xform: V,
        });
      } catch (s) {
        if (b(s)) return { data: { user: null }, error: s };
        throw s;
      }
    }
    async deleteUser(e, t = !1) {
      try {
        return await k(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
          headers: this.headers,
          body: { should_soft_delete: t },
          xform: V,
        });
      } catch (s) {
        if (b(s)) return { data: { user: null }, error: s };
        throw s;
      }
    }
    async _listFactors(e) {
      try {
        const { data: t, error: s } = await k(
          this.fetch,
          "GET",
          `${this.url}/admin/users/${e.userId}/factors`,
          {
            headers: this.headers,
            xform: (n) => ({ data: { factors: n }, error: null }),
          },
        );
        return { data: t, error: s };
      } catch (t) {
        if (b(t)) return { data: null, error: t };
        throw t;
      }
    }
    async _deleteFactor(e) {
      try {
        return {
          data: await k(
            this.fetch,
            "DELETE",
            `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
            { headers: this.headers },
          ),
          error: null,
        };
      } catch (t) {
        if (b(t)) return { data: null, error: t };
        throw t;
      }
    }
  }
  const qi = {
    getItem: (r) => (Ce() ? globalThis.localStorage.getItem(r) : null),
    setItem: (r, e) => {
      Ce() && globalThis.localStorage.setItem(r, e);
    },
    removeItem: (r) => {
      Ce() && globalThis.localStorage.removeItem(r);
    },
  };
  function ps(r = {}) {
    return {
      getItem: (e) => r[e] || null,
      setItem: (e, t) => {
        r[e] = t;
      },
      removeItem: (e) => {
        delete r[e];
      },
    };
  }
  function Hi() {
    if (typeof globalThis != "object")
      try {
        Object.defineProperty(Object.prototype, "__magic__", {
          get: function () {
            return this;
          },
          configurable: !0,
        }),
          (__magic__.globalThis = __magic__),
          delete Object.prototype.__magic__;
      } catch {
        typeof self < "u" && (self.globalThis = self);
      }
  }
  const ve = {
    debug: !!(
      globalThis &&
      Ce() &&
      globalThis.localStorage &&
      globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") ===
        "true"
    ),
  };
  class vs extends Error {
    constructor(e) {
      super(e), (this.isAcquireTimeout = !0);
    }
  }
  class zi extends vs {}
  async function Wi(r, e, t) {
    ve.debug &&
      console.log("@supabase/gotrue-js: navigatorLock: acquire lock", r, e);
    const s = new globalThis.AbortController();
    return (
      e > 0 &&
        setTimeout(() => {
          s.abort(),
            ve.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock acquire timed out",
                r,
              );
        }, e),
      await Promise.resolve().then(() =>
        globalThis.navigator.locks.request(
          r,
          e === 0
            ? { mode: "exclusive", ifAvailable: !0 }
            : { mode: "exclusive", signal: s.signal },
          async (n) => {
            if (n) {
              ve.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: acquired",
                  r,
                  n.name,
                );
              try {
                return await t();
              } finally {
                ve.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: released",
                    r,
                    n.name,
                  );
              }
            } else {
              if (e === 0)
                throw (
                  (ve.debug &&
                    console.log(
                      "@supabase/gotrue-js: navigatorLock: not immediately available",
                      r,
                    ),
                  new zi(
                    `Acquiring an exclusive Navigator LockManager lock "${r}" immediately failed`,
                  ))
                );
              if (ve.debug)
                try {
                  const i = await globalThis.navigator.locks.query();
                  console.log(
                    "@supabase/gotrue-js: Navigator LockManager state",
                    JSON.stringify(i, null, "  "),
                  );
                } catch (i) {
                  console.warn(
                    "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                    i,
                  );
                }
              return (
                console.warn(
                  "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request",
                ),
                await t()
              );
            }
          },
        ),
      )
    );
  }
  Hi();
  const Ji = {
      url: hi,
      storageKey: di,
      autoRefreshToken: !0,
      persistSession: !0,
      detectSessionInUrl: !0,
      headers: fi,
      flowType: "implicit",
      debug: !1,
      hasCustomAuthorizationHeader: !1,
    },
    Re = 30 * 1e3,
    gs = 3;
  async function ms(r, e, t) {
    return await t();
  }
  class xe {
    constructor(e) {
      var t, s;
      (this.memoryStorage = null),
        (this.stateChangeEmitters = new Map()),
        (this.autoRefreshTicker = null),
        (this.visibilityChangedCallback = null),
        (this.refreshingDeferred = null),
        (this.initializePromise = null),
        (this.detectSessionInUrl = !0),
        (this.hasCustomAuthorizationHeader = !1),
        (this.suppressGetSessionWarning = !1),
        (this.lockAcquired = !1),
        (this.pendingInLock = []),
        (this.broadcastChannel = null),
        (this.logger = console.log),
        (this.instanceID = xe.nextInstanceID),
        (xe.nextInstanceID += 1),
        this.instanceID > 0 &&
          F() &&
          console.warn(
            "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.",
          );
      const n = Object.assign(Object.assign({}, Ji), e);
      if (
        ((this.logDebugMessages = !!n.debug),
        typeof n.debug == "function" && (this.logger = n.debug),
        (this.persistSession = n.persistSession),
        (this.storageKey = n.storageKey),
        (this.autoRefreshToken = n.autoRefreshToken),
        (this.admin = new Fi({
          url: n.url,
          headers: n.headers,
          fetch: n.fetch,
        })),
        (this.url = n.url),
        (this.headers = n.headers),
        (this.fetch = as(n.fetch)),
        (this.lock = n.lock || ms),
        (this.detectSessionInUrl = n.detectSessionInUrl),
        (this.flowType = n.flowType),
        (this.hasCustomAuthorizationHeader = n.hasCustomAuthorizationHeader),
        n.lock
          ? (this.lock = n.lock)
          : F() &&
              !(
                (t = globalThis == null ? void 0 : globalThis.navigator) ===
                  null || t === void 0
              ) &&
              t.locks
            ? (this.lock = Wi)
            : (this.lock = ms),
        (this.mfa = {
          verify: this._verify.bind(this),
          enroll: this._enroll.bind(this),
          unenroll: this._unenroll.bind(this),
          challenge: this._challenge.bind(this),
          listFactors: this._listFactors.bind(this),
          challengeAndVerify: this._challengeAndVerify.bind(this),
          getAuthenticatorAssuranceLevel:
            this._getAuthenticatorAssuranceLevel.bind(this),
        }),
        this.persistSession
          ? n.storage
            ? (this.storage = n.storage)
            : Ce()
              ? (this.storage = qi)
              : ((this.memoryStorage = {}),
                (this.storage = ps(this.memoryStorage)))
          : ((this.memoryStorage = {}),
            (this.storage = ps(this.memoryStorage))),
        F() &&
          globalThis.BroadcastChannel &&
          this.persistSession &&
          this.storageKey)
      ) {
        try {
          this.broadcastChannel = new globalThis.BroadcastChannel(
            this.storageKey,
          );
        } catch (i) {
          console.error(
            "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
            i,
          );
        }
        (s = this.broadcastChannel) === null ||
          s === void 0 ||
          s.addEventListener("message", async (i) => {
            this._debug(
              "received broadcast notification from other tab or client",
              i,
            ),
              await this._notifyAllSubscribers(
                i.data.event,
                i.data.session,
                !1,
              );
          });
      }
      this.initialize();
    }
    _debug(...e) {
      return (
        this.logDebugMessages &&
          this.logger(
            `GoTrueClient@${this.instanceID} (${ns}) ${new Date().toISOString()}`,
            ...e,
          ),
        this
      );
    }
    async initialize() {
      return this.initializePromise
        ? await this.initializePromise
        : ((this.initializePromise = (async () =>
            await this._acquireLock(
              -1,
              async () => await this._initialize(),
            ))()),
          await this.initializePromise);
    }
    async _initialize() {
      var e;
      try {
        const t = vi(window.location.href);
        let s = "none";
        if (
          (this._isImplicitGrantCallback(t)
            ? (s = "implicit")
            : (await this._isPKCECallback(t)) && (s = "pkce"),
          F() && this.detectSessionInUrl && s !== "none")
        ) {
          const { data: n, error: i } = await this._getSessionFromURL(t, s);
          if (i) {
            if (
              (this._debug(
                "#_initialize()",
                "error detecting session from URL",
                i,
              ),
              Ci(i))
            ) {
              const l =
                (e = i.details) === null || e === void 0 ? void 0 : e.code;
              if (
                l === "identity_already_exists" ||
                l === "identity_not_found" ||
                l === "single_identity_not_deletable"
              )
                return { error: i };
            }
            return await this._removeSession(), { error: i };
          }
          const { session: o, redirectType: a } = n;
          return (
            this._debug(
              "#_initialize()",
              "detected session in URL",
              o,
              "redirect type",
              a,
            ),
            await this._saveSession(o),
            setTimeout(async () => {
              a === "recovery"
                ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o)
                : await this._notifyAllSubscribers("SIGNED_IN", o);
            }, 0),
            { error: null }
          );
        }
        return await this._recoverAndRefresh(), { error: null };
      } catch (t) {
        return b(t)
          ? { error: t }
          : { error: new us("Unexpected error during initialization", t) };
      } finally {
        await this._handleVisibilityChange(),
          this._debug("#_initialize()", "end");
      }
    }
    async signInAnonymously(e) {
      var t, s, n;
      try {
        const i = await k(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            body: {
              data:
                (s =
                  (t = e == null ? void 0 : e.options) === null || t === void 0
                    ? void 0
                    : t.data) !== null && s !== void 0
                  ? s
                  : {},
              gotrue_meta_security: {
                captcha_token:
                  (n = e == null ? void 0 : e.options) === null || n === void 0
                    ? void 0
                    : n.captchaToken,
              },
            },
            xform: K,
          }),
          { data: o, error: a } = i;
        if (a || !o) return { data: { user: null, session: null }, error: a };
        const l = o.session,
          c = o.user;
        return (
          o.session &&
            (await this._saveSession(o.session),
            await this._notifyAllSubscribers("SIGNED_IN", l)),
          { data: { user: c, session: l }, error: null }
        );
      } catch (i) {
        if (b(i)) return { data: { user: null, session: null }, error: i };
        throw i;
      }
    }
    async signUp(e) {
      var t, s, n;
      try {
        let i;
        if ("email" in e) {
          const { email: u, password: h, options: d } = e;
          let f = null,
            p = null;
          this.flowType === "pkce" &&
            ([f, p] = await pe(this.storage, this.storageKey)),
            (i = await k(this.fetch, "POST", `${this.url}/signup`, {
              headers: this.headers,
              redirectTo: d == null ? void 0 : d.emailRedirectTo,
              body: {
                email: u,
                password: h,
                data:
                  (t = d == null ? void 0 : d.data) !== null && t !== void 0
                    ? t
                    : {},
                gotrue_meta_security: {
                  captcha_token: d == null ? void 0 : d.captchaToken,
                },
                code_challenge: f,
                code_challenge_method: p,
              },
              xform: K,
            }));
        } else if ("phone" in e) {
          const { phone: u, password: h, options: d } = e;
          i = await k(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            body: {
              phone: u,
              password: h,
              data:
                (s = d == null ? void 0 : d.data) !== null && s !== void 0
                  ? s
                  : {},
              channel:
                (n = d == null ? void 0 : d.channel) !== null && n !== void 0
                  ? n
                  : "sms",
              gotrue_meta_security: {
                captcha_token: d == null ? void 0 : d.captchaToken,
              },
            },
            xform: K,
          });
        } else
          throw new tt(
            "You must provide either an email or phone number and a password",
          );
        const { data: o, error: a } = i;
        if (a || !o) return { data: { user: null, session: null }, error: a };
        const l = o.session,
          c = o.user;
        return (
          o.session &&
            (await this._saveSession(o.session),
            await this._notifyAllSubscribers("SIGNED_IN", l)),
          { data: { user: c, session: l }, error: null }
        );
      } catch (i) {
        if (b(i)) return { data: { user: null, session: null }, error: i };
        throw i;
      }
    }
    async signInWithPassword(e) {
      try {
        let t;
        if ("email" in e) {
          const { email: i, password: o, options: a } = e;
          t = await k(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=password`,
            {
              headers: this.headers,
              body: {
                email: i,
                password: o,
                gotrue_meta_security: {
                  captcha_token: a == null ? void 0 : a.captchaToken,
                },
              },
              xform: _s,
            },
          );
        } else if ("phone" in e) {
          const { phone: i, password: o, options: a } = e;
          t = await k(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=password`,
            {
              headers: this.headers,
              body: {
                phone: i,
                password: o,
                gotrue_meta_security: {
                  captcha_token: a == null ? void 0 : a.captchaToken,
                },
              },
              xform: _s,
            },
          );
        } else
          throw new tt(
            "You must provide either an email or phone number and a password",
          );
        const { data: s, error: n } = t;
        return n
          ? { data: { user: null, session: null }, error: n }
          : !s || !s.session || !s.user
            ? { data: { user: null, session: null }, error: new xt() }
            : (s.session &&
                (await this._saveSession(s.session),
                await this._notifyAllSubscribers("SIGNED_IN", s.session)),
              {
                data: Object.assign(
                  { user: s.user, session: s.session },
                  s.weak_password ? { weakPassword: s.weak_password } : null,
                ),
                error: n,
              });
      } catch (t) {
        if (b(t)) return { data: { user: null, session: null }, error: t };
        throw t;
      }
    }
    async signInWithOAuth(e) {
      var t, s, n, i;
      return await this._handleProviderSignIn(e.provider, {
        redirectTo:
          (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo,
        scopes: (s = e.options) === null || s === void 0 ? void 0 : s.scopes,
        queryParams:
          (n = e.options) === null || n === void 0 ? void 0 : n.queryParams,
        skipBrowserRedirect:
          (i = e.options) === null || i === void 0
            ? void 0
            : i.skipBrowserRedirect,
      });
    }
    async exchangeCodeForSession(e) {
      return (
        await this.initializePromise,
        this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
      );
    }
    async _exchangeCodeForSession(e) {
      const t = await Ye(this.storage, `${this.storageKey}-code-verifier`),
        [s, n] = (t ?? "").split("/");
      try {
        const { data: i, error: o } = await k(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=pkce`,
          {
            headers: this.headers,
            body: { auth_code: e, code_verifier: s },
            xform: K,
          },
        );
        if ((await Ze(this.storage, `${this.storageKey}-code-verifier`), o))
          throw o;
        return !i || !i.session || !i.user
          ? {
              data: { user: null, session: null, redirectType: null },
              error: new xt(),
            }
          : (i.session &&
              (await this._saveSession(i.session),
              await this._notifyAllSubscribers("SIGNED_IN", i.session)),
            {
              data: Object.assign(Object.assign({}, i), {
                redirectType: n ?? null,
              }),
              error: o,
            });
      } catch (i) {
        if (b(i))
          return {
            data: { user: null, session: null, redirectType: null },
            error: i,
          };
        throw i;
      }
    }
    async signInWithIdToken(e) {
      try {
        const {
            options: t,
            provider: s,
            token: n,
            access_token: i,
            nonce: o,
          } = e,
          a = await k(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=id_token`,
            {
              headers: this.headers,
              body: {
                provider: s,
                id_token: n,
                access_token: i,
                nonce: o,
                gotrue_meta_security: {
                  captcha_token: t == null ? void 0 : t.captchaToken,
                },
              },
              xform: K,
            },
          ),
          { data: l, error: c } = a;
        return c
          ? { data: { user: null, session: null }, error: c }
          : !l || !l.session || !l.user
            ? { data: { user: null, session: null }, error: new xt() }
            : (l.session &&
                (await this._saveSession(l.session),
                await this._notifyAllSubscribers("SIGNED_IN", l.session)),
              { data: l, error: c });
      } catch (t) {
        if (b(t)) return { data: { user: null, session: null }, error: t };
        throw t;
      }
    }
    async signInWithOtp(e) {
      var t, s, n, i, o;
      try {
        if ("email" in e) {
          const { email: a, options: l } = e;
          let c = null,
            u = null;
          this.flowType === "pkce" &&
            ([c, u] = await pe(this.storage, this.storageKey));
          const { error: h } = await k(this.fetch, "POST", `${this.url}/otp`, {
            headers: this.headers,
            body: {
              email: a,
              data:
                (t = l == null ? void 0 : l.data) !== null && t !== void 0
                  ? t
                  : {},
              create_user:
                (s = l == null ? void 0 : l.shouldCreateUser) !== null &&
                s !== void 0
                  ? s
                  : !0,
              gotrue_meta_security: {
                captcha_token: l == null ? void 0 : l.captchaToken,
              },
              code_challenge: c,
              code_challenge_method: u,
            },
            redirectTo: l == null ? void 0 : l.emailRedirectTo,
          });
          return { data: { user: null, session: null }, error: h };
        }
        if ("phone" in e) {
          const { phone: a, options: l } = e,
            { data: c, error: u } = await k(
              this.fetch,
              "POST",
              `${this.url}/otp`,
              {
                headers: this.headers,
                body: {
                  phone: a,
                  data:
                    (n = l == null ? void 0 : l.data) !== null && n !== void 0
                      ? n
                      : {},
                  create_user:
                    (i = l == null ? void 0 : l.shouldCreateUser) !== null &&
                    i !== void 0
                      ? i
                      : !0,
                  gotrue_meta_security: {
                    captcha_token: l == null ? void 0 : l.captchaToken,
                  },
                  channel:
                    (o = l == null ? void 0 : l.channel) !== null &&
                    o !== void 0
                      ? o
                      : "sms",
                },
              },
            );
          return {
            data: {
              user: null,
              session: null,
              messageId: c == null ? void 0 : c.message_id,
            },
            error: u,
          };
        }
        throw new tt("You must provide either an email or phone number.");
      } catch (a) {
        if (b(a)) return { data: { user: null, session: null }, error: a };
        throw a;
      }
    }
    async verifyOtp(e) {
      var t, s;
      try {
        let n, i;
        "options" in e &&
          ((n =
            (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo),
          (i =
            (s = e.options) === null || s === void 0
              ? void 0
              : s.captchaToken));
        const { data: o, error: a } = await k(
          this.fetch,
          "POST",
          `${this.url}/verify`,
          {
            headers: this.headers,
            body: Object.assign(Object.assign({}, e), {
              gotrue_meta_security: { captcha_token: i },
            }),
            redirectTo: n,
            xform: K,
          },
        );
        if (a) throw a;
        if (!o) throw new Error("An error occurred on token verification.");
        const l = o.session,
          c = o.user;
        return (
          l != null &&
            l.access_token &&
            (await this._saveSession(l),
            await this._notifyAllSubscribers(
              e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
              l,
            )),
          { data: { user: c, session: l }, error: null }
        );
      } catch (n) {
        if (b(n)) return { data: { user: null, session: null }, error: n };
        throw n;
      }
    }
    async signInWithSSO(e) {
      var t, s, n;
      try {
        let i = null,
          o = null;
        return (
          this.flowType === "pkce" &&
            ([i, o] = await pe(this.storage, this.storageKey)),
          await k(this.fetch, "POST", `${this.url}/sso`, {
            body: Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      {},
                      "providerId" in e ? { provider_id: e.providerId } : null,
                    ),
                    "domain" in e ? { domain: e.domain } : null,
                  ),
                  {
                    redirect_to:
                      (s =
                        (t = e.options) === null || t === void 0
                          ? void 0
                          : t.redirectTo) !== null && s !== void 0
                        ? s
                        : void 0,
                  },
                ),
                !(
                  (n = e == null ? void 0 : e.options) === null || n === void 0
                ) && n.captchaToken
                  ? {
                      gotrue_meta_security: {
                        captcha_token: e.options.captchaToken,
                      },
                    }
                  : null,
              ),
              {
                skip_http_redirect: !0,
                code_challenge: i,
                code_challenge_method: o,
              },
            ),
            headers: this.headers,
            xform: Ui,
          })
        );
      } catch (i) {
        if (b(i)) return { data: null, error: i };
        throw i;
      }
    }
    async reauthenticate() {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._reauthenticate())
      );
    }
    async _reauthenticate() {
      try {
        return await this._useSession(async (e) => {
          const {
            data: { session: t },
            error: s,
          } = e;
          if (s) throw s;
          if (!t) throw new G();
          const { error: n } = await k(
            this.fetch,
            "GET",
            `${this.url}/reauthenticate`,
            { headers: this.headers, jwt: t.access_token },
          );
          return { data: { user: null, session: null }, error: n };
        });
      } catch (e) {
        if (b(e)) return { data: { user: null, session: null }, error: e };
        throw e;
      }
    }
    async resend(e) {
      try {
        const t = `${this.url}/resend`;
        if ("email" in e) {
          const { email: s, type: n, options: i } = e,
            { error: o } = await k(this.fetch, "POST", t, {
              headers: this.headers,
              body: {
                email: s,
                type: n,
                gotrue_meta_security: {
                  captcha_token: i == null ? void 0 : i.captchaToken,
                },
              },
              redirectTo: i == null ? void 0 : i.emailRedirectTo,
            });
          return { data: { user: null, session: null }, error: o };
        } else if ("phone" in e) {
          const { phone: s, type: n, options: i } = e,
            { data: o, error: a } = await k(this.fetch, "POST", t, {
              headers: this.headers,
              body: {
                phone: s,
                type: n,
                gotrue_meta_security: {
                  captcha_token: i == null ? void 0 : i.captchaToken,
                },
              },
            });
          return {
            data: {
              user: null,
              session: null,
              messageId: o == null ? void 0 : o.message_id,
            },
            error: a,
          };
        }
        throw new tt(
          "You must provide either an email or phone number and a type",
        );
      } catch (t) {
        if (b(t)) return { data: { user: null, session: null }, error: t };
        throw t;
      }
    }
    async getSession() {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () =>
          this._useSession(async (t) => t),
        )
      );
    }
    async _acquireLock(e, t) {
      this._debug("#_acquireLock", "begin", e);
      try {
        if (this.lockAcquired) {
          const s = this.pendingInLock.length
              ? this.pendingInLock[this.pendingInLock.length - 1]
              : Promise.resolve(),
            n = (async () => (await s, await t()))();
          return (
            this.pendingInLock.push(
              (async () => {
                try {
                  await n;
                } catch {}
              })(),
            ),
            n
          );
        }
        return await this.lock(`lock:${this.storageKey}`, e, async () => {
          this._debug(
            "#_acquireLock",
            "lock acquired for storage key",
            this.storageKey,
          );
          try {
            this.lockAcquired = !0;
            const s = t();
            for (
              this.pendingInLock.push(
                (async () => {
                  try {
                    await s;
                  } catch {}
                })(),
              ),
                await s;
              this.pendingInLock.length;

            ) {
              const n = [...this.pendingInLock];
              await Promise.all(n), this.pendingInLock.splice(0, n.length);
            }
            return await s;
          } finally {
            this._debug(
              "#_acquireLock",
              "lock released for storage key",
              this.storageKey,
            ),
              (this.lockAcquired = !1);
          }
        });
      } finally {
        this._debug("#_acquireLock", "end");
      }
    }
    async _useSession(e) {
      this._debug("#_useSession", "begin");
      try {
        const t = await this.__loadSession();
        return await e(t);
      } finally {
        this._debug("#_useSession", "end");
      }
    }
    async __loadSession() {
      this._debug("#__loadSession()", "begin"),
        this.lockAcquired ||
          this._debug(
            "#__loadSession()",
            "used outside of an acquired lock!",
            new Error().stack,
          );
      try {
        let e = null;
        const t = await Ye(this.storage, this.storageKey);
        if (
          (this._debug("#getSession()", "session from storage", t),
          t !== null &&
            (this._isValidSession(t)
              ? (e = t)
              : (this._debug(
                  "#getSession()",
                  "session from storage is not valid",
                ),
                await this._removeSession())),
          !e)
        )
          return { data: { session: null }, error: null };
        const s = e.expires_at ? e.expires_at <= Date.now() / 1e3 : !1;
        if (
          (this._debug(
            "#__loadSession()",
            `session has${s ? "" : " not"} expired`,
            "expires_at",
            e.expires_at,
          ),
          !s)
        ) {
          if (this.storage.isServer) {
            let o = this.suppressGetSessionWarning;
            e = new Proxy(e, {
              get: (l, c, u) => (
                !o &&
                  c === "user" &&
                  (console.warn(
                    "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.",
                  ),
                  (o = !0),
                  (this.suppressGetSessionWarning = !0)),
                Reflect.get(l, c, u)
              ),
            });
          }
          return { data: { session: e }, error: null };
        }
        const { session: n, error: i } = await this._callRefreshToken(
          e.refresh_token,
        );
        return i
          ? { data: { session: null }, error: i }
          : { data: { session: n }, error: null };
      } finally {
        this._debug("#__loadSession()", "end");
      }
    }
    async getUser(e) {
      return e
        ? await this._getUser(e)
        : (await this.initializePromise,
          await this._acquireLock(-1, async () => await this._getUser()));
    }
    async _getUser(e) {
      try {
        return e
          ? await k(this.fetch, "GET", `${this.url}/user`, {
              headers: this.headers,
              jwt: e,
              xform: V,
            })
          : await this._useSession(async (t) => {
              var s, n, i;
              const { data: o, error: a } = t;
              if (a) throw a;
              return !(
                !((s = o.session) === null || s === void 0) && s.access_token
              ) && !this.hasCustomAuthorizationHeader
                ? { data: { user: null }, error: new G() }
                : await k(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt:
                      (i =
                        (n = o.session) === null || n === void 0
                          ? void 0
                          : n.access_token) !== null && i !== void 0
                        ? i
                        : void 0,
                    xform: V,
                  });
            });
      } catch (t) {
        if (b(t))
          return (
            ji(t) &&
              (await this._removeSession(),
              await Ze(this.storage, `${this.storageKey}-code-verifier`)),
            { data: { user: null }, error: t }
          );
        throw t;
      }
    }
    async updateUser(e, t = {}) {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._updateUser(e, t))
      );
    }
    async _updateUser(e, t = {}) {
      try {
        return await this._useSession(async (s) => {
          const { data: n, error: i } = s;
          if (i) throw i;
          if (!n.session) throw new G();
          const o = n.session;
          let a = null,
            l = null;
          this.flowType === "pkce" &&
            e.email != null &&
            ([a, l] = await pe(this.storage, this.storageKey));
          const { data: c, error: u } = await k(
            this.fetch,
            "PUT",
            `${this.url}/user`,
            {
              headers: this.headers,
              redirectTo: t == null ? void 0 : t.emailRedirectTo,
              body: Object.assign(Object.assign({}, e), {
                code_challenge: a,
                code_challenge_method: l,
              }),
              jwt: o.access_token,
              xform: V,
            },
          );
          if (u) throw u;
          return (
            (o.user = c.user),
            await this._saveSession(o),
            await this._notifyAllSubscribers("USER_UPDATED", o),
            { data: { user: o.user }, error: null }
          );
        });
      } catch (s) {
        if (b(s)) return { data: { user: null }, error: s };
        throw s;
      }
    }
    _decodeJWT(e) {
      return cs(e);
    }
    async setSession(e) {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._setSession(e))
      );
    }
    async _setSession(e) {
      try {
        if (!e.access_token || !e.refresh_token) throw new G();
        const t = Date.now() / 1e3;
        let s = t,
          n = !0,
          i = null;
        const o = cs(e.access_token);
        if ((o.exp && ((s = o.exp), (n = s <= t)), n)) {
          const { session: a, error: l } = await this._callRefreshToken(
            e.refresh_token,
          );
          if (l) return { data: { user: null, session: null }, error: l };
          if (!a) return { data: { user: null, session: null }, error: null };
          i = a;
        } else {
          const { data: a, error: l } = await this._getUser(e.access_token);
          if (l) throw l;
          (i = {
            access_token: e.access_token,
            refresh_token: e.refresh_token,
            user: a.user,
            token_type: "bearer",
            expires_in: s - t,
            expires_at: s,
          }),
            await this._saveSession(i),
            await this._notifyAllSubscribers("SIGNED_IN", i);
        }
        return { data: { user: i.user, session: i }, error: null };
      } catch (t) {
        if (b(t)) return { data: { session: null, user: null }, error: t };
        throw t;
      }
    }
    async refreshSession(e) {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._refreshSession(e))
      );
    }
    async _refreshSession(e) {
      try {
        return await this._useSession(async (t) => {
          var s;
          if (!e) {
            const { data: o, error: a } = t;
            if (a) throw a;
            e = (s = o.session) !== null && s !== void 0 ? s : void 0;
          }
          if (!(e != null && e.refresh_token)) throw new G();
          const { session: n, error: i } = await this._callRefreshToken(
            e.refresh_token,
          );
          return i
            ? { data: { user: null, session: null }, error: i }
            : n
              ? { data: { user: n.user, session: n }, error: null }
              : { data: { user: null, session: null }, error: null };
        });
      } catch (t) {
        if (b(t)) return { data: { user: null, session: null }, error: t };
        throw t;
      }
    }
    async _getSessionFromURL(e, t) {
      try {
        if (!F()) throw new rt("No browser detected.");
        if (e.error || e.error_description || e.error_code)
          throw new rt(
            e.error_description ||
              "Error in URL with unspecified error_description",
            {
              error: e.error || "unspecified_error",
              code: e.error_code || "unspecified_code",
            },
          );
        switch (t) {
          case "implicit":
            if (this.flowType === "pkce")
              throw new hs("Not a valid PKCE flow url.");
            break;
          case "pkce":
            if (this.flowType === "implicit")
              throw new rt("Not a valid implicit grant flow url.");
            break;
          default:
        }
        if (t === "pkce") {
          if (
            (this._debug("#_initialize()", "begin", "is PKCE flow", !0),
            !e.code)
          )
            throw new hs("No code detected.");
          const { data: m, error: S } = await this._exchangeCodeForSession(
            e.code,
          );
          if (S) throw S;
          const $ = new URL(window.location.href);
          return (
            $.searchParams.delete("code"),
            window.history.replaceState(window.history.state, "", $.toString()),
            { data: { session: m.session, redirectType: null }, error: null }
          );
        }
        const {
          provider_token: s,
          provider_refresh_token: n,
          access_token: i,
          refresh_token: o,
          expires_in: a,
          expires_at: l,
          token_type: c,
        } = e;
        if (!i || !a || !o || !c) throw new rt("No session defined in URL");
        const u = Math.round(Date.now() / 1e3),
          h = parseInt(a);
        let d = u + h;
        l && (d = parseInt(l));
        const f = d - u;
        f * 1e3 <= Re &&
          console.warn(
            `@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${h}s`,
          );
        const p = d - h;
        u - p >= 120
          ? console.warn(
              "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
              p,
              d,
              u,
            )
          : u - p < 0 &&
            console.warn(
              "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
              p,
              d,
              u,
            );
        const { data: y, error: _ } = await this._getUser(i);
        if (_) throw _;
        const g = {
          provider_token: s,
          provider_refresh_token: n,
          access_token: i,
          expires_in: h,
          expires_at: d,
          refresh_token: o,
          token_type: c,
          user: y.user,
        };
        return (
          (window.location.hash = ""),
          this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
          { data: { session: g, redirectType: e.type }, error: null }
        );
      } catch (s) {
        if (b(s))
          return { data: { session: null, redirectType: null }, error: s };
        throw s;
      }
    }
    _isImplicitGrantCallback(e) {
      return !!(e.access_token || e.error_description);
    }
    async _isPKCECallback(e) {
      const t = await Ye(this.storage, `${this.storageKey}-code-verifier`);
      return !!(e.code && t);
    }
    async signOut(e = { scope: "global" }) {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._signOut(e))
      );
    }
    async _signOut({ scope: e } = { scope: "global" }) {
      return await this._useSession(async (t) => {
        var s;
        const { data: n, error: i } = t;
        if (i) return { error: i };
        const o =
          (s = n.session) === null || s === void 0 ? void 0 : s.access_token;
        if (o) {
          const { error: a } = await this.admin.signOut(o, e);
          if (
            a &&
            !(
              Ai(a) &&
              (a.status === 404 || a.status === 401 || a.status === 403)
            )
          )
            return { error: a };
        }
        return (
          e !== "others" &&
            (await this._removeSession(),
            await Ze(this.storage, `${this.storageKey}-code-verifier`)),
          { error: null }
        );
      });
    }
    onAuthStateChange(e) {
      const t = pi(),
        s = {
          id: t,
          callback: e,
          unsubscribe: () => {
            this._debug(
              "#unsubscribe()",
              "state change callback with id removed",
              t,
            ),
              this.stateChangeEmitters.delete(t);
          },
        };
      return (
        this._debug("#onAuthStateChange()", "registered callback with id", t),
        this.stateChangeEmitters.set(t, s),
        (async () => (
          await this.initializePromise,
          await this._acquireLock(-1, async () => {
            this._emitInitialSession(t);
          })
        ))(),
        { data: { subscription: s } }
      );
    }
    async _emitInitialSession(e) {
      return await this._useSession(async (t) => {
        var s, n;
        try {
          const {
            data: { session: i },
            error: o,
          } = t;
          if (o) throw o;
          await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0
            ? void 0
            : s.callback("INITIAL_SESSION", i)),
            this._debug("INITIAL_SESSION", "callback id", e, "session", i);
        } catch (i) {
          await ((n = this.stateChangeEmitters.get(e)) === null || n === void 0
            ? void 0
            : n.callback("INITIAL_SESSION", null)),
            this._debug("INITIAL_SESSION", "callback id", e, "error", i),
            console.error(i);
        }
      });
    }
    async resetPasswordForEmail(e, t = {}) {
      let s = null,
        n = null;
      this.flowType === "pkce" &&
        ([s, n] = await pe(this.storage, this.storageKey, !0));
      try {
        return await k(this.fetch, "POST", `${this.url}/recover`, {
          body: {
            email: e,
            code_challenge: s,
            code_challenge_method: n,
            gotrue_meta_security: { captcha_token: t.captchaToken },
          },
          headers: this.headers,
          redirectTo: t.redirectTo,
        });
      } catch (i) {
        if (b(i)) return { data: null, error: i };
        throw i;
      }
    }
    async getUserIdentities() {
      var e;
      try {
        const { data: t, error: s } = await this.getUser();
        if (s) throw s;
        return {
          data: {
            identities:
              (e = t.user.identities) !== null && e !== void 0 ? e : [],
          },
          error: null,
        };
      } catch (t) {
        if (b(t)) return { data: null, error: t };
        throw t;
      }
    }
    async linkIdentity(e) {
      var t;
      try {
        const { data: s, error: n } = await this._useSession(async (i) => {
          var o, a, l, c, u;
          const { data: h, error: d } = i;
          if (d) throw d;
          const f = await this._getUrlForProvider(
            `${this.url}/user/identities/authorize`,
            e.provider,
            {
              redirectTo:
                (o = e.options) === null || o === void 0
                  ? void 0
                  : o.redirectTo,
              scopes:
                (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
              queryParams:
                (l = e.options) === null || l === void 0
                  ? void 0
                  : l.queryParams,
              skipBrowserRedirect: !0,
            },
          );
          return await k(this.fetch, "GET", f, {
            headers: this.headers,
            jwt:
              (u =
                (c = h.session) === null || c === void 0
                  ? void 0
                  : c.access_token) !== null && u !== void 0
                ? u
                : void 0,
          });
        });
        if (n) throw n;
        return (
          F() &&
            !(
              !((t = e.options) === null || t === void 0) &&
              t.skipBrowserRedirect
            ) &&
            window.location.assign(s == null ? void 0 : s.url),
          {
            data: { provider: e.provider, url: s == null ? void 0 : s.url },
            error: null,
          }
        );
      } catch (s) {
        if (b(s))
          return { data: { provider: e.provider, url: null }, error: s };
        throw s;
      }
    }
    async unlinkIdentity(e) {
      try {
        return await this._useSession(async (t) => {
          var s, n;
          const { data: i, error: o } = t;
          if (o) throw o;
          return await k(
            this.fetch,
            "DELETE",
            `${this.url}/user/identities/${e.identity_id}`,
            {
              headers: this.headers,
              jwt:
                (n =
                  (s = i.session) === null || s === void 0
                    ? void 0
                    : s.access_token) !== null && n !== void 0
                  ? n
                  : void 0,
            },
          );
        });
      } catch (t) {
        if (b(t)) return { data: null, error: t };
        throw t;
      }
    }
    async _refreshAccessToken(e) {
      const t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
      this._debug(t, "begin");
      try {
        const s = Date.now();
        return await wi(
          async (n) => (
            n > 0 && (await yi(200 * Math.pow(2, n - 1))),
            this._debug(t, "refreshing attempt", n),
            await k(
              this.fetch,
              "POST",
              `${this.url}/token?grant_type=refresh_token`,
              { body: { refresh_token: e }, headers: this.headers, xform: K },
            )
          ),
          (n, i) => {
            const o = 200 * Math.pow(2, n);
            return i && Lt(i) && Date.now() + o - s < Re;
          },
        );
      } catch (s) {
        if ((this._debug(t, "error", s), b(s)))
          return { data: { session: null, user: null }, error: s };
        throw s;
      } finally {
        this._debug(t, "end");
      }
    }
    _isValidSession(e) {
      return (
        typeof e == "object" &&
        e !== null &&
        "access_token" in e &&
        "refresh_token" in e &&
        "expires_at" in e
      );
    }
    async _handleProviderSignIn(e, t) {
      const s = await this._getUrlForProvider(`${this.url}/authorize`, e, {
        redirectTo: t.redirectTo,
        scopes: t.scopes,
        queryParams: t.queryParams,
      });
      return (
        this._debug(
          "#_handleProviderSignIn()",
          "provider",
          e,
          "options",
          t,
          "url",
          s,
        ),
        F() && !t.skipBrowserRedirect && window.location.assign(s),
        { data: { provider: e, url: s }, error: null }
      );
    }
    async _recoverAndRefresh() {
      var e;
      const t = "#_recoverAndRefresh()";
      this._debug(t, "begin");
      try {
        const s = await Ye(this.storage, this.storageKey);
        if (
          (this._debug(t, "session from storage", s), !this._isValidSession(s))
        ) {
          this._debug(t, "session is not valid"),
            s !== null && (await this._removeSession());
          return;
        }
        const n = Math.round(Date.now() / 1e3),
          i =
            ((e = s.expires_at) !== null && e !== void 0 ? e : 1 / 0) < n + is;
        if (
          (this._debug(
            t,
            `session has${i ? "" : " not"} expired with margin of ${is}s`,
          ),
          i)
        ) {
          if (this.autoRefreshToken && s.refresh_token) {
            const { error: o } = await this._callRefreshToken(s.refresh_token);
            o &&
              (console.error(o),
              Lt(o) ||
                (this._debug(
                  t,
                  "refresh failed with a non-retryable error, removing the session",
                  o,
                ),
                await this._removeSession()));
          }
        } else await this._notifyAllSubscribers("SIGNED_IN", s);
      } catch (s) {
        this._debug(t, "error", s), console.error(s);
        return;
      } finally {
        this._debug(t, "end");
      }
    }
    async _callRefreshToken(e) {
      var t, s;
      if (!e) throw new G();
      if (this.refreshingDeferred) return this.refreshingDeferred.promise;
      const n = `#_callRefreshToken(${e.substring(0, 5)}...)`;
      this._debug(n, "begin");
      try {
        this.refreshingDeferred = new et();
        const { data: i, error: o } = await this._refreshAccessToken(e);
        if (o) throw o;
        if (!i.session) throw new G();
        await this._saveSession(i.session),
          await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
        const a = { session: i.session, error: null };
        return this.refreshingDeferred.resolve(a), a;
      } catch (i) {
        if ((this._debug(n, "error", i), b(i))) {
          const o = { session: null, error: i };
          return (
            Lt(i) || (await this._removeSession()),
            (t = this.refreshingDeferred) === null ||
              t === void 0 ||
              t.resolve(o),
            o
          );
        }
        throw (
          ((s = this.refreshingDeferred) === null ||
            s === void 0 ||
            s.reject(i),
          i)
        );
      } finally {
        (this.refreshingDeferred = null), this._debug(n, "end");
      }
    }
    async _notifyAllSubscribers(e, t, s = !0) {
      const n = `#_notifyAllSubscribers(${e})`;
      this._debug(n, "begin", t, `broadcast = ${s}`);
      try {
        this.broadcastChannel &&
          s &&
          this.broadcastChannel.postMessage({ event: e, session: t });
        const i = [],
          o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
            try {
              await a.callback(e, t);
            } catch (l) {
              i.push(l);
            }
          });
        if ((await Promise.all(o), i.length > 0)) {
          for (let a = 0; a < i.length; a += 1) console.error(i[a]);
          throw i[0];
        }
      } finally {
        this._debug(n, "end");
      }
    }
    async _saveSession(e) {
      this._debug("#_saveSession()", e),
        (this.suppressGetSessionWarning = !0),
        await ls(this.storage, this.storageKey, e);
    }
    async _removeSession() {
      this._debug("#_removeSession()"),
        await Ze(this.storage, this.storageKey),
        await this._notifyAllSubscribers("SIGNED_OUT", null);
    }
    _removeVisibilityChangedCallback() {
      this._debug("#_removeVisibilityChangedCallback()");
      const e = this.visibilityChangedCallback;
      this.visibilityChangedCallback = null;
      try {
        e &&
          F() &&
          window != null &&
          window.removeEventListener &&
          window.removeEventListener("visibilitychange", e);
      } catch (t) {
        console.error("removing visibilitychange callback failed", t);
      }
    }
    async _startAutoRefresh() {
      await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
      const e = setInterval(() => this._autoRefreshTokenTick(), Re);
      (this.autoRefreshTicker = e),
        e && typeof e == "object" && typeof e.unref == "function"
          ? e.unref()
          : typeof Deno < "u" &&
            typeof Deno.unrefTimer == "function" &&
            Deno.unrefTimer(e),
        setTimeout(async () => {
          await this.initializePromise, await this._autoRefreshTokenTick();
        }, 0);
    }
    async _stopAutoRefresh() {
      this._debug("#_stopAutoRefresh()");
      const e = this.autoRefreshTicker;
      (this.autoRefreshTicker = null), e && clearInterval(e);
    }
    async startAutoRefresh() {
      this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
    }
    async stopAutoRefresh() {
      this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
    }
    async _autoRefreshTokenTick() {
      this._debug("#_autoRefreshTokenTick()", "begin");
      try {
        await this._acquireLock(0, async () => {
          try {
            const e = Date.now();
            try {
              return await this._useSession(async (t) => {
                const {
                  data: { session: s },
                } = t;
                if (!s || !s.refresh_token || !s.expires_at) {
                  this._debug("#_autoRefreshTokenTick()", "no session");
                  return;
                }
                const n = Math.floor((s.expires_at * 1e3 - e) / Re);
                this._debug(
                  "#_autoRefreshTokenTick()",
                  `access token expires in ${n} ticks, a tick lasts ${Re}ms, refresh threshold is ${gs} ticks`,
                ),
                  n <= gs && (await this._callRefreshToken(s.refresh_token));
              });
            } catch (t) {
              console.error(
                "Auto refresh tick failed with error. This is likely a transient error.",
                t,
              );
            }
          } finally {
            this._debug("#_autoRefreshTokenTick()", "end");
          }
        });
      } catch (e) {
        if (e.isAcquireTimeout || e instanceof vs)
          this._debug("auto refresh token tick lock not available");
        else throw e;
      }
    }
    async _handleVisibilityChange() {
      if (
        (this._debug("#_handleVisibilityChange()"),
        !F() || !(window != null && window.addEventListener))
      )
        return this.autoRefreshToken && this.startAutoRefresh(), !1;
      try {
        (this.visibilityChangedCallback = async () =>
          await this._onVisibilityChanged(!1)),
          window == null ||
            window.addEventListener(
              "visibilitychange",
              this.visibilityChangedCallback,
            ),
          await this._onVisibilityChanged(!0);
      } catch (e) {
        console.error("_handleVisibilityChange", e);
      }
    }
    async _onVisibilityChanged(e) {
      const t = `#_onVisibilityChanged(${e})`;
      this._debug(t, "visibilityState", document.visibilityState),
        document.visibilityState === "visible"
          ? (this.autoRefreshToken && this._startAutoRefresh(),
            e ||
              (await this.initializePromise,
              await this._acquireLock(-1, async () => {
                if (document.visibilityState !== "visible") {
                  this._debug(
                    t,
                    "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting",
                  );
                  return;
                }
                await this._recoverAndRefresh();
              })))
          : document.visibilityState === "hidden" &&
            this.autoRefreshToken &&
            this._stopAutoRefresh();
    }
    async _getUrlForProvider(e, t, s) {
      const n = [`provider=${encodeURIComponent(t)}`];
      if (
        (s != null &&
          s.redirectTo &&
          n.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`),
        s != null &&
          s.scopes &&
          n.push(`scopes=${encodeURIComponent(s.scopes)}`),
        this.flowType === "pkce")
      ) {
        const [i, o] = await pe(this.storage, this.storageKey),
          a = new URLSearchParams({
            code_challenge: `${encodeURIComponent(i)}`,
            code_challenge_method: `${encodeURIComponent(o)}`,
          });
        n.push(a.toString());
      }
      if (s != null && s.queryParams) {
        const i = new URLSearchParams(s.queryParams);
        n.push(i.toString());
      }
      return (
        s != null &&
          s.skipBrowserRedirect &&
          n.push(`skip_http_redirect=${s.skipBrowserRedirect}`),
        `${e}?${n.join("&")}`
      );
    }
    async _unenroll(e) {
      try {
        return await this._useSession(async (t) => {
          var s;
          const { data: n, error: i } = t;
          return i
            ? { data: null, error: i }
            : await k(
                this.fetch,
                "DELETE",
                `${this.url}/factors/${e.factorId}`,
                {
                  headers: this.headers,
                  jwt:
                    (s = n == null ? void 0 : n.session) === null ||
                    s === void 0
                      ? void 0
                      : s.access_token,
                },
              );
        });
      } catch (t) {
        if (b(t)) return { data: null, error: t };
        throw t;
      }
    }
    async _enroll(e) {
      try {
        return await this._useSession(async (t) => {
          var s, n;
          const { data: i, error: o } = t;
          if (o) return { data: null, error: o };
          const a = Object.assign(
              { friendly_name: e.friendlyName, factor_type: e.factorType },
              e.factorType === "phone"
                ? { phone: e.phone }
                : { issuer: e.issuer },
            ),
            { data: l, error: c } = await k(
              this.fetch,
              "POST",
              `${this.url}/factors`,
              {
                body: a,
                headers: this.headers,
                jwt:
                  (s = i == null ? void 0 : i.session) === null || s === void 0
                    ? void 0
                    : s.access_token,
              },
            );
          return c
            ? { data: null, error: c }
            : (e.factorType === "totp" &&
                !((n = l == null ? void 0 : l.totp) === null || n === void 0) &&
                n.qr_code &&
                (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
              { data: l, error: null });
        });
      } catch (t) {
        if (b(t)) return { data: null, error: t };
        throw t;
      }
    }
    async _verify(e) {
      return this._acquireLock(-1, async () => {
        try {
          return await this._useSession(async (t) => {
            var s;
            const { data: n, error: i } = t;
            if (i) return { data: null, error: i };
            const { data: o, error: a } = await k(
              this.fetch,
              "POST",
              `${this.url}/factors/${e.factorId}/verify`,
              {
                body: { code: e.code, challenge_id: e.challengeId },
                headers: this.headers,
                jwt:
                  (s = n == null ? void 0 : n.session) === null || s === void 0
                    ? void 0
                    : s.access_token,
              },
            );
            return a
              ? { data: null, error: a }
              : (await this._saveSession(
                  Object.assign(
                    { expires_at: Math.round(Date.now() / 1e3) + o.expires_in },
                    o,
                  ),
                ),
                await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", o),
                { data: o, error: a });
          });
        } catch (t) {
          if (b(t)) return { data: null, error: t };
          throw t;
        }
      });
    }
    async _challenge(e) {
      return this._acquireLock(-1, async () => {
        try {
          return await this._useSession(async (t) => {
            var s;
            const { data: n, error: i } = t;
            return i
              ? { data: null, error: i }
              : await k(
                  this.fetch,
                  "POST",
                  `${this.url}/factors/${e.factorId}/challenge`,
                  {
                    body: { channel: e.channel },
                    headers: this.headers,
                    jwt:
                      (s = n == null ? void 0 : n.session) === null ||
                      s === void 0
                        ? void 0
                        : s.access_token,
                  },
                );
          });
        } catch (t) {
          if (b(t)) return { data: null, error: t };
          throw t;
        }
      });
    }
    async _challengeAndVerify(e) {
      const { data: t, error: s } = await this._challenge({
        factorId: e.factorId,
      });
      return s
        ? { data: null, error: s }
        : await this._verify({
            factorId: e.factorId,
            challengeId: t.id,
            code: e.code,
          });
    }
    async _listFactors() {
      const {
        data: { user: e },
        error: t,
      } = await this.getUser();
      if (t) return { data: null, error: t };
      const s = (e == null ? void 0 : e.factors) || [],
        n = s.filter(
          (o) => o.factor_type === "totp" && o.status === "verified",
        ),
        i = s.filter(
          (o) => o.factor_type === "phone" && o.status === "verified",
        );
      return { data: { all: s, totp: n, phone: i }, error: null };
    }
    async _getAuthenticatorAssuranceLevel() {
      return this._acquireLock(
        -1,
        async () =>
          await this._useSession(async (e) => {
            var t, s;
            const {
              data: { session: n },
              error: i,
            } = e;
            if (i) return { data: null, error: i };
            if (!n)
              return {
                data: {
                  currentLevel: null,
                  nextLevel: null,
                  currentAuthenticationMethods: [],
                },
                error: null,
              };
            const o = this._decodeJWT(n.access_token);
            let a = null;
            o.aal && (a = o.aal);
            let l = a;
            ((s =
              (t = n.user.factors) === null || t === void 0
                ? void 0
                : t.filter((h) => h.status === "verified")) !== null &&
            s !== void 0
              ? s
              : []
            ).length > 0 && (l = "aal2");
            const u = o.amr || [];
            return {
              data: {
                currentLevel: a,
                nextLevel: l,
                currentAuthenticationMethods: u,
              },
              error: null,
            };
          }),
      );
    }
  }
  xe.nextInstanceID = 0;
  const Gi = xe;
  class Ki extends Gi {
    constructor(e) {
      super(e);
    }
  }
  var Vi = function (r, e, t, s) {
    function n(i) {
      return i instanceof t
        ? i
        : new t(function (o) {
            o(i);
          });
    }
    return new (t || (t = Promise))(function (i, o) {
      function a(u) {
        try {
          c(s.next(u));
        } catch (h) {
          o(h);
        }
      }
      function l(u) {
        try {
          c(s.throw(u));
        } catch (h) {
          o(h);
        }
      }
      function c(u) {
        u.done ? i(u.value) : n(u.value).then(a, l);
      }
      c((s = s.apply(r, e || [])).next());
    });
  };
  class Qi {
    constructor(e, t, s) {
      var n, i, o;
      if (((this.supabaseUrl = e), (this.supabaseKey = t), !e))
        throw new Error("supabaseUrl is required.");
      if (!t) throw new Error("supabaseKey is required.");
      const a = ci(e);
      (this.realtimeUrl = `${a}/realtime/v1`.replace(/^http/i, "ws")),
        (this.authUrl = `${a}/auth/v1`),
        (this.storageUrl = `${a}/storage/v1`),
        (this.functionsUrl = `${a}/functions/v1`);
      const l = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,
        c = {
          db: ti,
          realtime: si,
          auth: Object.assign(Object.assign({}, ri), { storageKey: l }),
          global: ei,
        },
        u = ui(s ?? {}, c);
      (this.storageKey =
        (n = u.auth.storageKey) !== null && n !== void 0 ? n : ""),
        (this.headers =
          (i = u.global.headers) !== null && i !== void 0 ? i : {}),
        u.accessToken
          ? ((this.accessToken = u.accessToken),
            (this.auth = new Proxy(
              {},
              {
                get: (h, d) => {
                  throw new Error(
                    `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(d)} is not possible`,
                  );
                },
              },
            )))
          : (this.auth = this._initSupabaseAuthClient(
              (o = u.auth) !== null && o !== void 0 ? o : {},
              this.headers,
              u.global.fetch,
            )),
        (this.fetch = ai(t, this._getAccessToken.bind(this), u.global.fetch)),
        (this.realtime = this._initRealtimeClient(
          Object.assign(
            {
              headers: this.headers,
              accessToken: this._getAccessToken.bind(this),
            },
            u.realtime,
          ),
        )),
        (this.rest = new Tn(`${a}/rest/v1`, {
          headers: this.headers,
          schema: u.db.schema,
          fetch: this.fetch,
        })),
        u.accessToken || this._listenForAuthEvents();
    }
    get functions() {
      return new dn(this.functionsUrl, {
        headers: this.headers,
        customFetch: this.fetch,
      });
    }
    get storage() {
      return new Yn(this.storageUrl, this.headers, this.fetch);
    }
    from(e) {
      return this.rest.from(e);
    }
    schema(e) {
      return this.rest.schema(e);
    }
    rpc(e, t = {}, s = {}) {
      return this.rest.rpc(e, t, s);
    }
    channel(e, t = { config: {} }) {
      return this.realtime.channel(e, t);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(e) {
      return this.realtime.removeChannel(e);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    _getAccessToken() {
      var e, t;
      return Vi(this, void 0, void 0, function* () {
        if (this.accessToken) return yield this.accessToken();
        const { data: s } = yield this.auth.getSession();
        return (t =
          (e = s.session) === null || e === void 0
            ? void 0
            : e.access_token) !== null && t !== void 0
          ? t
          : null;
      });
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: s,
        storage: n,
        storageKey: i,
        flowType: o,
        lock: a,
        debug: l,
      },
      c,
      u,
    ) {
      var h;
      const d = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new Ki({
        url: this.authUrl,
        headers: Object.assign(Object.assign({}, d), c),
        storageKey: i,
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: s,
        storage: n,
        flowType: o,
        lock: a,
        debug: l,
        fetch: u,
        hasCustomAuthorizationHeader:
          (h = "Authorization" in this.headers) !== null && h !== void 0
            ? h
            : !1,
      });
    }
    _initRealtimeClient(e) {
      return new Mn(
        this.realtimeUrl,
        Object.assign(Object.assign({}, e), {
          params: Object.assign(
            { apikey: this.supabaseKey },
            e == null ? void 0 : e.params,
          ),
        }),
      );
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((t, s) => {
        this._handleTokenChanged(
          t,
          "CLIENT",
          s == null ? void 0 : s.access_token,
        );
      });
    }
    _handleTokenChanged(e, t, s) {
      (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") &&
      this.changedAccessToken !== s
        ? (this.changedAccessToken = s)
        : e === "SIGNED_OUT" &&
          (this.realtime.setAuth(),
          t == "STORAGE" && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  }
  const ys = (r, e, t) => new Qi(r, e, t),
    ws = "https://sqesugujbokqdacsgqxu.supabase.co",
    bs =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxZXN1Z3VqYm9rcWRhY3NncXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwNzQzMjEsImV4cCI6MjA0NzY1MDMyMX0.NdG4HHj-12E1SPTYKQQ7onMsBM7vRzoFrH27T4CgsCc",
    Xi = async (r) => {
      const e = ys(ws, bs),
        { data: t, error: s } = await e
          .from("before_after_slider")
          .select("*")
          .eq("sliderID", r);
      return s || t.length === 0 ? null : t[0];
    },
    Yi = async (r, e) => {
      const t = ys(ws, bs),
        { data: s, error: n } = await t
          .from("before_after_slider")
          .select("data")
          .eq("productID", r)
          .eq("storeID", e);
      return n || s.length === 0 ? null : s[0];
    };
  async function Zi() {
    const r = document.querySelectorAll(".sjois-before-after-embedder");
    for (const e of r) {
      const t = e.getAttribute("slidr-app-ba-product-id"),
        s = e.getAttribute("slidr-app-ba-store-id"),
        n = e.getAttribute("slidr-app-ba-id");
      let i;
      t && s ? (i = await Yi(t, s)) : n && (i = await Xi(n)),
        i && Cs(v(on, { slider: i.data }), e);
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    Zi();
  });
  var Ut, ks;
  function eo() {
    return (
      ks ||
        ((ks = 1),
        (Ut = function () {
          throw new Error(
            "ws does not work in the browser. Browser clients must use the native WebSocket object",
          );
        })),
      Ut
    );
  }
  var to = eo();
  const ro = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Cr(to) },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
})();
