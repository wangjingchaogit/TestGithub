/** 
 * Kendo UI v2017.1.223 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2017 Telerik AD. All rights reserved.                                                                                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/

!function (e, define) {
    define("kendo.core.min", ["jquery"], e)
}(function () {
    return function (e, t, n) {
        function i() { }
        function r(e, t) {
            if (t)
                return "'" + e.split("'").join("\\'").split('\\"').join('\\\\\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") + "'";
            var n = e.charAt(0)
              , i = e.substring(1);
            return "=" === n ? "+(" + i + ")+" : ":" === n ? "+$kendoHtmlEncode(" + i + ")+" : ";" + e + ";$kendoOutput+="
        }
        function o(e, t, n) {
            return e += "",
            t = t || 2,
            n = t - e.length,
            n ? W[t].substring(0, n) + e : e
        }
        function a(e) {
            var t = e.css(ve.support.transitions.css + "box-shadow") || e.css("box-shadow")
              , n = t ? t.match(Fe) || [0, 0, 0, 0, 0] : [0, 0, 0, 0, 0]
              , i = xe.max(+n[3], +(n[4] || 0));
            return {
                left: -n[1] + i,
                right: +n[1] + i,
                bottom: +n[2] + i
            }
        }
        function s(t, n) {
            var i, r, o, a, s, l, d, u = Te.browser, c = ve._outerWidth, h = ve._outerHeight;
            return t.parent().hasClass("k-animation-container") ? (l = t.parent(".k-animation-container"),
            d = l[0].style,
            l.is(":hidden") && l.show(),
            i = Se.test(d.width) || Se.test(d.height),
            i || l.css({
                width: c(t),
                height: h(t),
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            })) : (r = t[0].style.width,
            o = t[0].style.height,
            a = Se.test(r),
            s = Se.test(o),
            i = a || s,
            !a && (!n || n && r) && (r = c(t)),
            !s && (!n || n && o) && (o = h(t)),
            t.wrap(e("<div/>").addClass("k-animation-container").css({
                width: r,
                height: o
            })),
            i && t.css({
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            })),
            u.msie && xe.floor(u.version) <= 7 && (t.css({
                zoom: 1
            }),
            t.children(".k-menu").width(t.width())),
            t.parent()
        }
        function l(e) {
            var t = 1
              , n = arguments.length;
            for (t = 1; t < n; t++)
                d(e, arguments[t]);
            return e
        }
        function d(e, t) {
            var n, i, r, o, a, s = ve.data.ObservableArray, l = ve.data.LazyObservableArray, u = ve.data.DataSource, c = ve.data.HierarchicalDataSource;
            for (n in t)
                i = t[n],
                r = typeof i,
                o = r === Me && null !== i ? i.constructor : null,
                o && o !== Array && o !== s && o !== l && o !== u && o !== c && o !== RegExp ? i instanceof Date ? e[n] = new Date(i.getTime()) : I(i.clone) ? e[n] = i.clone() : (a = e[n],
                e[n] = typeof a === Me ? a || {} : {},
                d(e[n], i)) : r !== Ne && (e[n] = i);
            return e
        }
        function u(e, t, i) {
            for (var r in t)
                if (t.hasOwnProperty(r) && t[r].test(e))
                    return r;
            return i !== n ? i : e
        }
        function c(e) {
            return e.replace(/([a-z][A-Z])/g, function (e) {
                return e.charAt(0) + "-" + e.charAt(1).toLowerCase()
            })
        }
        function h(e) {
            return e.replace(/\-(\w)/g, function (e, t) {
                return t.toUpperCase()
            })
        }
        function p(t, n) {
            var i, r = {};
            return document.defaultView && document.defaultView.getComputedStyle ? (i = document.defaultView.getComputedStyle(t, ""),
            n && e.each(n, function (e, t) {
                r[t] = i.getPropertyValue(t)
            })) : (i = t.currentStyle,
            n && e.each(n, function (e, t) {
                r[t] = i[h(t)]
            })),
            ve.size(r) || (r = i),
            r
        }
        function f(e) {
            if (e && e.className && "string" == typeof e.className && e.className.indexOf("k-auto-scrollable") > -1)
                return !0;
            var t = p(e, ["overflow"]).overflow;
            return "auto" == t || "scroll" == t
        }
        function m(t, i) {
            var r, o = Te.browser.webkit, a = Te.browser.mozilla, s = t instanceof e ? t[0] : t;
            if (t)
                return r = Te.isRtl(t),
                i === n ? r && o ? s.scrollWidth - s.clientWidth - s.scrollLeft : Math.abs(s.scrollLeft) : (s.scrollLeft = r && o ? s.scrollWidth - s.clientWidth - i : r && a ? -i : i,
                n)
        }
        function g(e) {
            var t, n = 0;
            for (t in e)
                e.hasOwnProperty(t) && "toJSON" != t && n++;
            return n
        }
        function v(e, n, i) {
            var r, o, a;
            return n || (n = "offset"),
            r = e[n](),
            o = {
                top: r.top,
                right: r.right,
                bottom: r.bottom,
                left: r.left
            },
            Te.browser.msie && (Te.pointers || Te.msPointers) && !i && (a = Te.isRtl(e) ? 1 : -1,
            o.top -= t.pageYOffset + a * document.documentElement.scrollTop,
            o.left -= t.pageXOffset + a * document.documentElement.scrollLeft),
            o
        }
        function _(e) {
            var t = {};
            return be("string" == typeof e ? e.split(" ") : e, function (e) {
                t[e] = this
            }),
            t
        }
        function b(e) {
            return new ve.effects.Element(e)
        }
        function k(e, t, n, i) {
            return typeof e === Re && (I(t) && (i = t,
            t = 400,
            n = !1),
            I(n) && (i = n,
            n = !1),
            typeof t === He && (n = t,
            t = 400),
            e = {
                effects: e,
                duration: t,
                reverse: n,
                complete: i
            }),
            _e({
                effects: {},
                duration: 400,
                reverse: !1,
                init: ye,
                teardown: ye,
                hide: !1
            }, e, {
                completeCallback: e.complete,
                complete: ye
            })
        }
        function w(t, n, i, r, o) {
            for (var a, s = 0, l = t.length; s < l; s++)
                a = e(t[s]),
                a.queue(function () {
                    q.promise(a, k(n, i, r, o))
                });
            return t
        }
        function y(e, t, n, i) {
            return t && (t = t.split(" "),
            be(t, function (t, n) {
                e.toggleClass(n, i)
            })),
            e
        }
        function x(e) {
            return ("" + e).replace(j, "&amp;").replace($, "&lt;").replace(K, "&gt;").replace(G, "&quot;").replace(Y, "&#39;")
        }
        function C(e, t) {
            var i;
            return 0 === t.indexOf("data") && (t = t.substring(4),
            t = t.charAt(0).toLowerCase() + t.substring(1)),
            t = t.replace(re, "-$1"),
            i = e.getAttribute("data-" + ve.ns + t),
            null === i ? i = n : "null" === i ? i = null : "true" === i ? i = !0 : "false" === i ? i = !1 : Ee.test(i) ? i = parseFloat(i) : ne.test(i) && !ie.test(i) && (i = Function("return (" + i + ")")()),
            i
        }
        function T(t, i) {
            var r, o, a = {};
            for (r in i)
                o = C(t, r),
                o !== n && (te.test(r) && (o = "string" == typeof o ? ve.template(e("#" + o).html()) : t.getAttribute(r)),
                a[r] = o);
            return a
        }
        function S(t, n) {
            return e.contains(t, n) ? -1 : 1
        }
        function D() {
            var t = e(this);
            return e.inArray(t.attr("data-" + ve.ns + "role"), ["slider", "rangeslider"]) > -1 || t.is(":visible")
        }
        function F(e, t) {
            var n = e.nodeName.toLowerCase();
            return (/input|select|textarea|button|object/.test(n) ? !e.disabled : "a" === n ? e.href || t : t) && E(e)
        }
        function E(t) {
            return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
                return "hidden" === e.css(this, "visibility")
            }).length
        }
        function A(e, t) {
            return new A.fn.init(e, t)
        }
        var R, I, M, z, H, N, B, P, L, O, V, W, U, q, j, $, G, Y, K, Q, X, J, Z, ee, te, ne, ie, re, oe, ae, se, le, de, ue, ce, he, pe, fe, me, ge, ve = t.kendo = t.kendo || {
            cultures: {}
        }, _e = e.extend, be = e.each, ke = e.isArray, we = e.proxy, ye = e.noop, xe = Math, Ce = t.JSON || {}, Te = {}, Se = /%/, De = /\{(\d+)(:[^\}]+)?\}/g, Fe = /(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+)?/i, Ee = /^(\+|-?)\d+(\.?)\d*$/, Ae = "function", Re = "string", Ie = "number", Me = "object", ze = "null", He = "boolean", Ne = "undefined", Be = {}, Pe = {}, Le = [].slice;
        ve.version = "2017.1.223".replace(/^\s+|\s+$/g, ""),
        i.extend = function (e) {
            var t, n, i = function () { }, r = this, o = e && e.init ? e.init : function () {
                r.apply(this, arguments)
            }
            ;
            i.prototype = r.prototype,
            n = o.fn = o.prototype = new i;
            for (t in e)
                n[t] = null != e[t] && e[t].constructor === Object ? _e(!0, {}, i.prototype[t], e[t]) : e[t];
            return n.constructor = o,
            o.extend = r.extend,
            o
        }
        ,
        i.prototype._initOptions = function (e) {
            this.options = l({}, this.options, e)
        }
        ,
        I = ve.isFunction = function (e) {
            return "function" == typeof e
        }
        ,
        M = function () {
            this._defaultPrevented = !0
        }
        ,
        z = function () {
            return this._defaultPrevented === !0
        }
        ,
        H = i.extend({
            init: function () {
                this._events = {}
            },
            bind: function (e, t, i) {
                var r, o, a, s, l, d = this, u = typeof e === Re ? [e] : e, c = typeof t === Ae;
                if (t === n) {
                    for (r in e)
                        d.bind(r, e[r]);
                    return d
                }
                for (r = 0,
                o = u.length; r < o; r++)
                    e = u[r],
                    s = c ? t : t[e],
                    s && (i && (a = s,
                    s = function () {
                        d.unbind(e, s),
                        a.apply(d, arguments)
                    }
                    ,
                    s.original = a),
                    l = d._events[e] = d._events[e] || [],
                    l.push(s));
                return d
            },
            one: function (e, t) {
                return this.bind(e, t, !0)
            },
            first: function (e, t) {
                var n, i, r, o, a = this, s = typeof e === Re ? [e] : e, l = typeof t === Ae;
                for (n = 0,
                i = s.length; n < i; n++)
                    e = s[n],
                    r = l ? t : t[e],
                    r && (o = a._events[e] = a._events[e] || [],
                    o.unshift(r));
                return a
            },
            trigger: function (e, t) {
                var n, i, r = this, o = r._events[e];
                if (o) {
                    for (t = t || {},
                    t.sender = r,
                    t._defaultPrevented = !1,
                    t.preventDefault = M,
                    t.isDefaultPrevented = z,
                    o = o.slice(),
                    n = 0,
                    i = o.length; n < i; n++)
                        o[n].call(r, t);
                    return t._defaultPrevented === !0
                }
                return !1
            },
            unbind: function (e, t) {
                var i, r = this, o = r._events[e];
                if (e === n)
                    r._events = {};
                else if (o)
                    if (t)
                        for (i = o.length - 1; i >= 0; i--)
                            o[i] !== t && o[i].original !== t || o.splice(i, 1);
                    else
                        r._events[e] = [];
                return r
            }
        }),
        N = /^\w+/,
        B = /\$\{([^}]*)\}/g,
        P = /\\\}/g,
        L = /__CURLY__/g,
        O = /\\#/g,
        V = /__SHARP__/g,
        W = ["", "0", "00", "000", "0000"],
        R = {
            paramName: "data",
            useWithBlock: !0,
            render: function (e, t) {
                var n, i, r = "";
                for (n = 0,
                i = t.length; n < i; n++)
                    r += e(t[n]);
                return r
            },
            compile: function (e, t) {
                var n, i, o, a = _e({}, this, t), s = a.paramName, l = s.match(N)[0], d = a.useWithBlock, u = "var $kendoOutput, $kendoHtmlEncode = kendo.htmlEncode;";
                if (I(e))
                    return e;
                for (u += d ? "with(" + s + "){" : "",
                u += "$kendoOutput=",
                i = e.replace(P, "__CURLY__").replace(B, "#=$kendoHtmlEncode($1)#").replace(L, "}").replace(O, "__SHARP__").split("#"),
                o = 0; o < i.length; o++)
                    u += r(i[o], o % 2 === 0);
                u += d ? ";}" : ";",
                u += "return $kendoOutput;",
                u = u.replace(V, "#");
                try {
                    return n = Function(l, u),
                    n._slotCount = Math.floor(i.length / 2),
                    n
                } catch (c) {
                    throw Error(ve.format("Invalid template:'{0}' Generated code:'{1}'", e, u))
                }
            }
        },
        function () {
            function e(e) {
                return a.lastIndex = 0,
                a.test(e) ? '"' + e.replace(a, function (e) {
                    var t = s[e];
                    return typeof t === Re ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + e + '"'
            }
            function t(o, a) {
                var s, d, u, c, h, p, f = n, m = a[o];
                if (m && typeof m === Me && typeof m.toJSON === Ae && (m = m.toJSON(o)),
                typeof r === Ae && (m = r.call(a, o, m)),
                p = typeof m,
                p === Re)
                    return e(m);
                if (p === Ie)
                    return isFinite(m) ? m + "" : ze;
                if (p === He || p === ze)
                    return m + "";
                if (p === Me) {
                    if (!m)
                        return ze;
                    if (n += i,
                    h = [],
                    "[object Array]" === l.apply(m)) {
                        for (c = m.length,
                        s = 0; s < c; s++)
                            h[s] = t(s, m) || ze;
                        return u = 0 === h.length ? "[]" : n ? "[\n" + n + h.join(",\n" + n) + "\n" + f + "]" : "[" + h.join(",") + "]",
                        n = f,
                        u
                    }
                    if (r && typeof r === Me)
                        for (c = r.length,
                        s = 0; s < c; s++)
                            typeof r[s] === Re && (d = r[s],
                            u = t(d, m),
                            u && h.push(e(d) + (n ? ": " : ":") + u));
                    else
                        for (d in m)
                            Object.hasOwnProperty.call(m, d) && (u = t(d, m),
                            u && h.push(e(d) + (n ? ": " : ":") + u));
                    return u = 0 === h.length ? "{}" : n ? "{\n" + n + h.join(",\n" + n) + "\n" + f + "}" : "{" + h.join(",") + "}",
                    n = f,
                    u
                }
            }
            var n, i, r, a = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, s = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            }, l = {}.toString;
            typeof Date.prototype.toJSON !== Ae && (Date.prototype.toJSON = function () {
                var e = this;
                return isFinite(e.valueOf()) ? o(e.getUTCFullYear(), 4) + "-" + o(e.getUTCMonth() + 1) + "-" + o(e.getUTCDate()) + "T" + o(e.getUTCHours()) + ":" + o(e.getUTCMinutes()) + ":" + o(e.getUTCSeconds()) + "Z" : null
            }
            ,
            String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
                return this.valueOf()
            }
            ),
            typeof Ce.stringify !== Ae && (Ce.stringify = function (e, o, a) {
                var s;
                if (n = "",
                i = "",
                typeof a === Ie)
                    for (s = 0; s < a; s += 1)
                        i += " ";
                else
                    typeof a === Re && (i = a);
                if (r = o,
                o && typeof o !== Ae && (typeof o !== Me || typeof o.length !== Ie))
                    throw Error("JSON.stringify");
                return t("", {
                    "": e
                })
            }
            )
        }(),
        function () {
            function t(e) {
                if (e) {
                    if (e.numberFormat)
                        return e;
                    if (typeof e === Re) {
                        var t = ve.cultures;
                        return t[e] || t[e.split("-")[0]] || null
                    }
                    return null
                }
                return null
            }
            function i(e) {
                return e && (e = t(e)),
                e || ve.cultures.current
            }
            function r(e, t, r) {
                r = i(r);
                var a = r.calendars.standard
                  , s = a.days
                  , l = a.months;
                return t = a.patterns[t] || t,
                t.replace(u, function (t) {
                    var i, r, d;
                    return "d" === t ? r = e.getDate() : "dd" === t ? r = o(e.getDate()) : "ddd" === t ? r = s.namesAbbr[e.getDay()] : "dddd" === t ? r = s.names[e.getDay()] : "M" === t ? r = e.getMonth() + 1 : "MM" === t ? r = o(e.getMonth() + 1) : "MMM" === t ? r = l.namesAbbr[e.getMonth()] : "MMMM" === t ? r = l.names[e.getMonth()] : "yy" === t ? r = o(e.getFullYear() % 100) : "yyyy" === t ? r = o(e.getFullYear(), 4) : "h" === t ? r = e.getHours() % 12 || 12 : "hh" === t ? r = o(e.getHours() % 12 || 12) : "H" === t ? r = e.getHours() : "HH" === t ? r = o(e.getHours()) : "m" === t ? r = e.getMinutes() : "mm" === t ? r = o(e.getMinutes()) : "s" === t ? r = e.getSeconds() : "ss" === t ? r = o(e.getSeconds()) : "f" === t ? r = xe.floor(e.getMilliseconds() / 100) : "ff" === t ? (r = e.getMilliseconds(),
                    r > 99 && (r = xe.floor(r / 10)),
                    r = o(r)) : "fff" === t ? r = o(e.getMilliseconds(), 3) : "tt" === t ? r = e.getHours() < 12 ? a.AM[0] : a.PM[0] : "zzz" === t ? (i = e.getTimezoneOffset(),
                    d = i < 0,
                    r = ("" + xe.abs(i / 60)).split(".")[0],
                    i = xe.abs(i) - 60 * r,
                    r = (d ? "+" : "-") + o(r),
                    r += ":" + o(i)) : "zz" !== t && "z" !== t || (r = e.getTimezoneOffset() / 60,
                    d = r < 0,
                    r = ("" + xe.abs(r)).split(".")[0],
                    r = (d ? "+" : "-") + ("zz" === t ? o(r) : r)),
                    r !== n ? r : t.slice(1, t.length - 1)
                })
            }
            function a(e, t, r) {
                r = i(r);
                var o, a, d, u, k, w, y, x, C, T, S, D, F, E, A, R, I, M, z, H, N, B, P, L = r.numberFormat, O = L[m], V = L.decimals, W = L.pattern[0], U = [], q = e < 0, j = f, $ = f, G = -1;
                if (e === n)
                    return f;
                if (!isFinite(e))
                    return e;
                if (!t)
                    return r.name.length ? e.toLocaleString() : "" + e;
                if (k = c.exec(t)) {
                    if (t = k[1].toLowerCase(),
                    a = "c" === t,
                    d = "p" === t,
                    (a || d) && (L = a ? L.currency : L.percent,
                    O = L[m],
                    V = L.decimals,
                    o = L.symbol,
                    W = L.pattern[q ? 0 : 1]),
                    u = k[2],
                    u && (V = +u),
                    "e" === t)
                        return u ? e.toExponential(V) : e.toExponential();
                    if (d && (e *= 100),
                    e = l(e, V),
                    q = e < 0,
                    e = e.split(m),
                    w = e[0],
                    y = e[1],
                    q && (w = w.substring(1)),
                    $ = s(w, 0, w.length, L),
                    y && ($ += O + y),
                    "n" === t && !q)
                        return $;
                    for (e = f,
                    T = 0,
                    S = W.length; T < S; T++)
                        D = W.charAt(T),
                        e += "n" === D ? $ : "$" === D || "%" === D ? o : D;
                    return e
                }
                if (q && (e = -e),
                (t.indexOf("'") > -1 || t.indexOf('"') > -1 || t.indexOf("\\") > -1) && (t = t.replace(h, function (e) {
                    var t = e.charAt(0).replace("\\", "")
                      , n = e.slice(1).replace(t, "");
                    return U.push(n),
                    b
                })),
                t = t.split(";"),
                q && t[1])
                    t = t[1],
                    E = !0;
                else if (0 === e) {
                    if (t = t[2] || t[0],
                    t.indexOf(v) == -1 && t.indexOf(_) == -1)
                        return t
                } else
                    t = t[0];
                if (H = t.indexOf("%"),
                N = t.indexOf("$"),
                d = H != -1,
                a = N != -1,
                d && (e *= 100),
                a && "\\" === t[N - 1] && (t = t.split("\\").join(""),
                a = !1),
                (a || d) && (L = a ? L.currency : L.percent,
                O = L[m],
                V = L.decimals,
                o = L.symbol),
                F = t.indexOf(g) > -1,
                F && (t = t.replace(p, f)),
                A = t.indexOf(m),
                S = t.length,
                A != -1 ? (y = ("" + e).split("e"),
                y = y[1] ? l(e, Math.abs(y[1])) : y[0],
                y = y.split(m)[1] || f,
                I = t.lastIndexOf(_) - A,
                R = t.lastIndexOf(v) - A,
                M = I > -1,
                z = R > -1,
                T = y.length,
                M || z || (t = t.substring(0, A) + t.substring(A + 1),
                S = t.length,
                A = -1,
                T = 0),
                M && I > R ? T = I : R > I && (z && T > R ? T = R : M && T < I && (T = I)),
                T > -1 && (e = l(e, T))) : e = l(e),
                R = t.indexOf(v),
                B = I = t.indexOf(_),
                G = R == -1 && I != -1 ? I : R != -1 && I == -1 ? R : R > I ? I : R,
                R = t.lastIndexOf(v),
                I = t.lastIndexOf(_),
                P = R == -1 && I != -1 ? I : R != -1 && I == -1 ? R : R > I ? R : I,
                G == S && (P = G),
                G != -1) {
                    for ($ = ("" + e).split(m),
                    w = $[0],
                    y = $[1] || f,
                    x = w.length,
                    C = y.length,
                    q && e * -1 >= 0 && (q = !1),
                    e = t.substring(0, G),
                    q && !E && (e += "-"),
                    T = G; T < S; T++) {
                        if (D = t.charAt(T),
                        A == -1) {
                            if (P - T < x) {
                                e += w;
                                break
                            }
                        } else if (I != -1 && I < T && (j = f),
                        A - T <= x && A - T > -1 && (e += w,
                        T = A),
                        A === T) {
                            e += (y ? O : f) + y,
                            T += P - A + 1;
                            continue
                        }
                        D === _ ? (e += D,
                        j = D) : D === v && (e += j)
                    }
                    if (F && (e = s(e, G + (q && !E ? 1 : 0), Math.max(P, x + G), L)),
                    P >= G && (e += t.substring(P + 1)),
                    a || d) {
                        for ($ = f,
                        T = 0,
                        S = e.length; T < S; T++)
                            D = e.charAt(T),
                            $ += "$" === D || "%" === D ? o : D;
                        e = $
                    }
                    if (S = U.length)
                        for (T = 0; T < S; T++)
                            e = e.replace(b, U[T])
                }
                return e
            }
            var s, l, d, u = /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|HH|H|hh|h|mm|m|fff|ff|f|tt|ss|s|zzz|zz|z|"[^"]*"|'[^']*'/g, c = /^(n|c|p|e)(\d*)$/i, h = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g, p = /\,/g, f = "", m = ".", g = ",", v = "#", _ = "0", b = "??", k = "en-US", w = {}.toString;
            ve.cultures["en-US"] = {
                name: k,
                numberFormat: {
                    pattern: ["-n"],
                    decimals: 2,
                    ",": ",",
                    ".": ".",
                    groupSize: [3],
                    percent: {
                        pattern: ["-n %", "n %"],
                        decimals: 2,
                        ",": ",",
                        ".": ".",
                        groupSize: [3],
                        symbol: "%"
                    },
                    currency: {
                        name: "US Dollar",
                        abbr: "USD",
                        pattern: ["($n)", "$n"],
                        decimals: 2,
                        ",": ",",
                        ".": ".",
                        groupSize: [3],
                        symbol: "$"
                    }
                },
                calendars: {
                    standard: {
                        days: {
                            names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                            namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                        },
                        months: {
                            names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                            namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                        },
                        AM: ["AM", "am", "AM"],
                        PM: ["PM", "pm", "PM"],
                        patterns: {
                            d: "M/d/yyyy",
                            D: "dddd, MMMM dd, yyyy",
                            F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                            g: "M/d/yyyy h:mm tt",
                            G: "M/d/yyyy h:mm:ss tt",
                            m: "MMMM dd",
                            M: "MMMM dd",
                            s: "yyyy'-'MM'-'ddTHH':'mm':'ss",
                            t: "h:mm tt",
                            T: "h:mm:ss tt",
                            u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                            y: "MMMM, yyyy",
                            Y: "MMMM, yyyy"
                        },
                        "/": "/",
                        ":": ":",
                        firstDay: 0,
                        twoDigitYearMax: 2029
                    }
                }
            },
            ve.culture = function (e) {
                var i, r = ve.cultures;
                return e === n ? r.current : (i = t(e) || r[k],
                i.calendar = i.calendars.standard,
                r.current = i,
                n)
            }
            ,
            ve.findCulture = t,
            ve.getCulture = i,
            ve.culture(k),
            s = function (e, t, i, r) {
                var o, a, s, l, d, u, c = e.indexOf(r[m]), h = r.groupSize.slice(), p = h.shift();
                if (i = c !== -1 ? c : i + 1,
                o = e.substring(t, i),
                a = o.length,
                a >= p) {
                    for (s = a,
                    l = []; s > -1;)
                        if (d = o.substring(s - p, s),
                        d && l.push(d),
                        s -= p,
                        u = h.shift(),
                        p = u !== n ? u : p,
                        0 === p) {
                            l.push(o.substring(0, s));
                            break
                        }
                    o = l.reverse().join(r[g]),
                    e = e.substring(0, t) + o + e.substring(i)
                }
                return e
            }
            ,
            l = function (e, t) {
                return t = t || 0,
                e = ("" + e).split("e"),
                e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] + t : t))),
                e = ("" + e).split("e"),
                e = +(e[0] + "e" + (e[1] ? +e[1] - t : -t)),
                e.toFixed(Math.min(t, 20))
            }
            ,
            d = function (e, t, i) {
                if (t) {
                    if ("[object Date]" === w.call(e))
                        return r(e, t, i);
                    if (typeof e === Ie)
                        return a(e, t, i)
                }
                return e !== n ? e : ""
            }
            ,
            ve.format = function (e) {
                var t = arguments;
                return e.replace(De, function (e, n, i) {
                    var r = t[parseInt(n, 10) + 1];
                    return d(r, i ? i.substring(1) : "")
                })
            }
            ,
            ve._extractFormat = function (e) {
                return "{0:" === e.slice(0, 3) && (e = e.slice(3, e.length - 1)),
                e
            }
            ,
            ve._activeElement = function () {
                try {
                    return document.activeElement
                } catch (e) {
                    return document.documentElement.activeElement
                }
            }
            ,
            ve._round = l,
            ve._outerWidth = function (t, n) {
                return e(t).outerWidth(n || !1) || 0
            }
            ,
            ve._outerHeight = function (t, n) {
                return e(t).outerHeight(n || !1) || 0
            }
            ,
            ve.toString = d
        }(),
        function () {
            function t(e, t, n) {
                return !(e >= t && e <= n)
            }
            function i(e) {
                return e.charAt(0)
            }
            function r(t) {
                return e.map(t, i)
            }
            function o(e, t) {
                t || 23 !== e.getHours() || e.setHours(e.getHours() + 2)
            }
            function a(e) {
                for (var t = 0, n = e.length, i = []; t < n; t++)
                    i[t] = (e[t] + "").toLowerCase();
                return i
            }
            function s(e) {
                var t, n = {};
                for (t in e)
                    n[t] = a(e[t]);
                return n
            }
            function l(e, i, a) {
                if (!e)
                    return null;
                var l, d, u, c, h, m, g, v, _, k, w, y, x, C = function (e) {
                    for (var t = 0; i[N] === e;)
                        t++,
                        N++;
                    return t > 0 && (N -= 1),
                    t
                }, T = function (t) {
                    var n = b[t] || RegExp("^\\d{1," + t + "}")
                      , i = e.substr(B, t).match(n);
                    return i ? (i = i[0],
                    B += i.length,
                    parseInt(i, 10)) : null
                }, S = function (t, n) {
                    for (var i, r, o, a = 0, s = t.length, l = 0, d = 0; a < s; a++)
                        i = t[a],
                        r = i.length,
                        o = e.substr(B, r),
                        n && (o = o.toLowerCase()),
                        o == i && r > l && (l = r,
                        d = a);
                    return l ? (B += l,
                    d + 1) : null
                }, D = function () {
                    var t = !1;
                    return e.charAt(B) === i[N] && (B++,
                    t = !0),
                    t
                }, F = a.calendars.standard, E = null, A = null, R = null, I = null, M = null, z = null, H = null, N = 0, B = 0, P = !1, L = new Date, O = F.twoDigitYearMax || 2029, V = L.getFullYear();
                for (i || (i = "d"),
                c = F.patterns[i],
                c && (i = c),
                i = i.split(""),
                u = i.length; N < u; N++)
                    if (l = i[N],
                    P)
                        "'" === l ? P = !1 : D();
                    else if ("d" === l) {
                        if (d = C("d"),
                        F._lowerDays || (F._lowerDays = s(F.days)),
                        null !== R && d > 2)
                            continue;
                        if (R = d < 3 ? T(2) : S(F._lowerDays[3 == d ? "namesAbbr" : "names"], !0),
                        null === R || t(R, 1, 31))
                            return null
                    } else if ("M" === l) {
                        if (d = C("M"),
                        F._lowerMonths || (F._lowerMonths = s(F.months)),
                        A = d < 3 ? T(2) : S(F._lowerMonths[3 == d ? "namesAbbr" : "names"], !0),
                        null === A || t(A, 1, 12))
                            return null;
                        A -= 1
                    } else if ("y" === l) {
                        if (d = C("y"),
                        E = T(d),
                        null === E)
                            return null;
                        2 == d && ("string" == typeof O && (O = V + parseInt(O, 10)),
                        E = V - V % 100 + E,
                        E > O && (E -= 100))
                    } else if ("h" === l) {
                        if (C("h"),
                        I = T(2),
                        12 == I && (I = 0),
                        null === I || t(I, 0, 11))
                            return null
                    } else if ("H" === l) {
                        if (C("H"),
                        I = T(2),
                        null === I || t(I, 0, 23))
                            return null
                    } else if ("m" === l) {
                        if (C("m"),
                        M = T(2),
                        null === M || t(M, 0, 59))
                            return null
                    } else if ("s" === l) {
                        if (C("s"),
                        z = T(2),
                        null === z || t(z, 0, 59))
                            return null
                    } else if ("f" === l) {
                        if (d = C("f"),
                        x = e.substr(B, d).match(b[3]),
                        H = T(d),
                        null !== H && (H = parseFloat("0." + x[0], 10),
                        H = ve._round(H, 3),
                        H *= 1e3),
                        null === H || t(H, 0, 999))
                            return null
                    } else if ("t" === l) {
                        if (d = C("t"),
                        v = F.AM,
                        _ = F.PM,
                        1 === d && (v = r(v),
                        _ = r(_)),
                        h = S(_),
                        !h && !S(v))
                            return null
                    } else if ("z" === l) {
                        if (m = !0,
                        d = C("z"),
                        "Z" === e.substr(B, 1)) {
                            D();
                            continue
                        }
                        if (g = e.substr(B, 6).match(d > 2 ? f : p),
                        !g)
                            return null;
                        if (g = g[0].split(":"),
                        k = g[0],
                        w = g[1],
                        !w && k.length > 3 && (B = k.length - 2,
                        w = k.substring(B),
                        k = k.substring(0, B)),
                        k = parseInt(k, 10),
                        t(k, -12, 13))
                            return null;
                        if (d > 2 && (w = parseInt(w, 10),
                        isNaN(w) || t(w, 0, 59)))
                            return null
                    } else if ("'" === l)
                        P = !0,
                        D();
                    else if (!D())
                        return null;
                return y = null !== I || null !== M || z || null,
                null === E && null === A && null === R && y ? (E = V,
                A = L.getMonth(),
                R = L.getDate()) : (null === E && (E = V),
                null === R && (R = 1)),
                h && I < 12 && (I += 12),
                m ? (k && (I += -k),
                w && (M += -w),
                e = new Date(Date.UTC(E, A, R, I, M, z, H))) : (e = new Date(E, A, R, I, M, z, H),
                o(e, I)),
                E < 100 && e.setFullYear(E),
                e.getDate() !== R && m === n ? null : e
            }
            function d(e) {
                var t = "-" === e.substr(0, 1) ? -1 : 1;
                return e = e.substring(1),
                e = 60 * parseInt(e.substr(0, 2), 10) + parseInt(e.substring(2), 10),
                t * e
            }
            function u(e) {
                var t, n, i, r = xe.max(v.length, _.length), o = e.calendar.patterns, a = [];
                for (i = 0; i < r; i++) {
                    for (t = v[i],
                    n = 0; n < t.length; n++)
                        a.push(o[t[n]]);
                    a = a.concat(_[i])
                }
                return a
            }
            var c = /\u00A0/g
              , h = /[eE][\-+]?[0-9]+/
              , p = /[+|\-]\d{1,2}/
              , f = /[+|\-]\d{1,2}:?\d{2}/
              , m = /^\/Date\((.*?)\)\/$/
              , g = /[+-]\d*/
              , v = [[], ["G", "g", "F"], ["D", "d", "y", "m", "T", "t"]]
              , _ = [["yyyy-MM-ddTHH:mm:ss.fffffffzzz", "yyyy-MM-ddTHH:mm:ss.fffffff", "yyyy-MM-ddTHH:mm:ss.fffzzz", "yyyy-MM-ddTHH:mm:ss.fff", "ddd MMM dd yyyy HH:mm:ss", "yyyy-MM-ddTHH:mm:sszzz", "yyyy-MM-ddTHH:mmzzz", "yyyy-MM-ddTHH:mmzz", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-dd HH:mm:ss", "yyyy/MM/dd HH:mm:ss"], ["yyyy-MM-ddTHH:mm", "yyyy-MM-dd HH:mm", "yyyy/MM/dd HH:mm"], ["yyyy/MM/dd", "yyyy-MM-dd", "HH:mm:ss", "HH:mm"]]
              , b = {
                  2: /^\d{1,2}/,
                  3: /^\d{1,3}/,
                  4: /^\d{4}/
              }
              , k = {}.toString;
            ve.parseDate = function (e, t, n) {
                var i, r, o, a;
                if ("[object Date]" === k.call(e))
                    return e;
                if (i = 0,
                r = null,
                e && 0 === e.indexOf("/D") && (r = m.exec(e)))
                    return r = r[1],
                    a = g.exec(r.substring(1)),
                    r = new Date(parseInt(r, 10)),
                    a && (a = d(a[0]),
                    r = ve.timezone.apply(r, 0),
                    r = ve.timezone.convert(r, 0, -1 * a)),
                    r;
                for (n = ve.getCulture(n),
                t || (t = u(n)),
                t = ke(t) ? t : [t],
                o = t.length; i < o; i++)
                    if (r = l(e, t[i], n))
                        return r;
                return r
            }
            ,
            ve.parseInt = function (e, t) {
                var n = ve.parseFloat(e, t);
                return n && (n = 0 | n),
                n
            }
            ,
            ve.parseFloat = function (e, t, n) {
                if (!e && 0 !== e)
                    return null;
                if (typeof e === Ie)
                    return e;
                e = "" + e,
                t = ve.getCulture(t);
                var i, r, o = t.numberFormat, a = o.percent, s = o.currency, l = s.symbol, d = a.symbol, u = e.indexOf("-");
                return h.test(e) ? (e = parseFloat(e.replace(o["."], ".")),
                isNaN(e) && (e = null),
                e) : u > 0 ? null : (u = u > -1,
                e.indexOf(l) > -1 || n && n.toLowerCase().indexOf("c") > -1 ? (o = s,
                i = o.pattern[0].replace("$", l).split("n"),
                e.indexOf(i[0]) > -1 && e.indexOf(i[1]) > -1 && (e = e.replace(i[0], "").replace(i[1], ""),
                u = !0)) : e.indexOf(d) > -1 && (r = !0,
                o = a,
                l = d),
                e = e.replace("-", "").replace(l, "").replace(c, " ").split(o[","].replace(c, " ")).join("").replace(o["."], "."),
                e = parseFloat(e),
                isNaN(e) ? e = null : u && (e *= -1),
                e && r && (e /= 100),
                e)
            }
        }(),
        function () {
            var i, r, o, a, s, l, d, c, h;
            Te._scrollbar = n,
            Te.scrollbar = function (e) {
                if (isNaN(Te._scrollbar) || e) {
                    var t, n = document.createElement("div");
                    return n.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block",
                    n.innerHTML = "&nbsp;",
                    document.body.appendChild(n),
                    Te._scrollbar = t = n.offsetWidth - n.scrollWidth,
                    document.body.removeChild(n),
                    t
                }
                return Te._scrollbar
            }
            ,
            Te.isRtl = function (t) {
                return e(t).closest(".k-rtl").length > 0
            }
            ,
            i = document.createElement("table");
            try {
                i.innerHTML = "<tr><td></td></tr>",
                Te.tbodyInnerHtml = !0
            } catch (p) {
                Te.tbodyInnerHtml = !1
            }
            Te.touch = "ontouchstart" in t,
            r = document.documentElement.style,
            o = Te.transitions = !1,
            a = Te.transforms = !1,
            s = "HTMLElement" in t ? HTMLElement.prototype : [],
            Te.hasHW3D = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix || "MozPerspective" in r || "msPerspective" in r,
            Te.cssFlexbox = "flexWrap" in r || "WebkitFlexWrap" in r || "msFlexWrap" in r,
            be(["Moz", "webkit", "O", "ms"], function () {
                var e, t = "" + this, n = typeof i.style[t + "Transition"] === Re;
                if (n || typeof i.style[t + "Transform"] === Re)
                    return e = t.toLowerCase(),
                    a = {
                        css: "ms" != e ? "-" + e + "-" : "",
                        prefix: t,
                        event: "o" === e || "webkit" === e ? e : ""
                    },
                    n && (o = a,
                    o.event = o.event ? o.event + "TransitionEnd" : "transitionend"),
                    !1
            }),
            i = null,
            Te.transforms = a,
            Te.transitions = o,
            Te.devicePixelRatio = t.devicePixelRatio === n ? 1 : t.devicePixelRatio;
            try {
                Te.screenWidth = t.outerWidth || t.screen ? t.screen.availWidth : t.innerWidth,
                Te.screenHeight = t.outerHeight || t.screen ? t.screen.availHeight : t.innerHeight
            } catch (p) {
                Te.screenWidth = t.screen.availWidth,
                Te.screenHeight = t.screen.availHeight
            }
            Te.detectOS = function (e) {
                var n, i, r = !1, o = [], a = !/mobile safari/i.test(e), s = {
                    wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
                    fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
                    android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)\.(\d+(\.\d+)?)/,
                    iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
                    ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
                    meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
                    webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
                    blackberry: /(BlackBerry|BB10).*?Version\/(\d+)\.(\d+(\.\d+)?)/,
                    playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
                    windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
                    tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
                    sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i,
                    ffos: /(Mobile).*rv:(\d+)\.(\d+(\.\d+)?).*Firefox/
                }, l = {
                    ios: /^i(phone|pad|pod)$/i,
                    android: /^android|fire$/i,
                    blackberry: /^blackberry|playbook/i,
                    windows: /windows/,
                    wp: /wp/,
                    flat: /sailfish|ffos|tizen/i,
                    meego: /meego/
                }, d = {
                    tablet: /playbook|ipad|fire/i
                }, c = {
                    omini: /Opera\sMini/i,
                    omobile: /Opera\sMobi/i,
                    firefox: /Firefox|Fennec/i,
                    mobilesafari: /version\/.*safari/i,
                    ie: /MSIE|Windows\sPhone/i,
                    chrome: /chrome|crios/i,
                    webkit: /webkit/i
                };
                for (i in s)
                    if (s.hasOwnProperty(i) && (o = e.match(s[i]))) {
                        if ("windows" == i && "plugins" in navigator)
                            return !1;
                        r = {},
                        r.device = i,
                        r.tablet = u(i, d, !1),
                        r.browser = u(e, c, "default"),
                        r.name = u(i, l),
                        r[r.name] = !0,
                        r.majorVersion = o[2],
                        r.minorVersion = o[3].replace("_", "."),
                        n = r.minorVersion.replace(".", "").substr(0, 2),
                        r.flatVersion = r.majorVersion + n + Array(3 - (n.length < 3 ? n.length : 2)).join("0"),
                        r.cordova = typeof t.PhoneGap !== Ne || typeof t.cordova !== Ne,
                        r.appMode = t.navigator.standalone || /file|local|wmapp/.test(t.location.protocol) || r.cordova,
                        r.android && (Te.devicePixelRatio < 1.5 && r.flatVersion < 400 || a) && (Te.screenWidth > 800 || Te.screenHeight > 800) && (r.tablet = i);
                        break
                    }
                return r
            }
            ,
            l = Te.mobileOS = Te.detectOS(navigator.userAgent),
            Te.wpDevicePixelRatio = l.wp ? screen.width / 320 : 0,
            Te.hasNativeScrolling = !1,
            (l.ios || l.android && l.majorVersion > 2 || l.wp) && (Te.hasNativeScrolling = l),
            Te.delayedClick = function () {
                if (Te.touch) {
                    if (l.ios)
                        return !0;
                    if (l.android)
                        return !Te.browser.chrome || !(Te.browser.version < 32) && !(e("meta[name=viewport]").attr("content") || "").match(/user-scalable=no/i)
                }
                return !1
            }
            ,
            Te.mouseAndTouchPresent = Te.touch && !(Te.mobileOS.ios || Te.mobileOS.android),
            Te.detectBrowser = function (e) {
                var t, n = !1, i = [], r = {
                    edge: /(edge)[ \/]([\w.]+)/i,
                    webkit: /(chrome)[ \/]([\w.]+)/i,
                    safari: /(webkit)[ \/]([\w.]+)/i,
                    opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
                    msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
                    mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
                };
                for (t in r)
                    if (r.hasOwnProperty(t) && (i = e.match(r[t]))) {
                        n = {},
                        n[t] = !0,
                        n[i[1].toLowerCase().split(" ")[0].split("/")[0]] = !0,
                        n.version = parseInt(document.documentMode || i[2], 10);
                        break
                    }
                return n
            }
            ,
            Te.browser = Te.detectBrowser(navigator.userAgent),
            Te.detectClipboardAccess = function () {
                var e = {
                    copy: !!document.queryCommandSupported && document.queryCommandSupported("copy"),
                    cut: !!document.queryCommandSupported && document.queryCommandSupported("cut"),
                    paste: !!document.queryCommandSupported && document.queryCommandSupported("paste")
                };
                return Te.browser.chrome && (e.paste = !1,
                Te.browser.version >= 43 && (e.copy = !0,
                e.cut = !0)),
                e
            }
            ,
            Te.clipboard = Te.detectClipboardAccess(),
            Te.zoomLevel = function () {
                var e, n, i;
                try {
                    return e = Te.browser,
                    n = 0,
                    i = document.documentElement,
                    e.msie && 11 == e.version && i.scrollHeight > i.clientHeight && !Te.touch && (n = Te.scrollbar()),
                    Te.touch ? i.clientWidth / t.innerWidth : e.msie && e.version >= 10 ? ((top || t).document.documentElement.offsetWidth + n) / (top || t).innerWidth : 1
                } catch (r) {
                    return 1
                }
            }
            ,
            Te.cssBorderSpacing = n !== r.borderSpacing && !(Te.browser.msie && Te.browser.version < 8),
            function (t) {
                var n = ""
                  , i = e(document.documentElement)
                  , r = parseInt(t.version, 10);
                t.msie ? n = "ie" : t.mozilla ? n = "ff" : t.safari ? n = "safari" : t.webkit ? n = "webkit" : t.opera ? n = "opera" : t.edge && (n = "edge"),
                n && (n = "k-" + n + " k-" + n + r),
                Te.mobileOS && (n += " k-mobile"),
                Te.cssFlexbox || (n += " k-no-flexbox"),
                i.addClass(n)
            }(Te.browser),
            Te.eventCapture = document.documentElement.addEventListener,
            d = document.createElement("input"),
            Te.placeholder = "placeholder" in d,
            Te.propertyChangeEvent = "onpropertychange" in d,
            Te.input = function () {
                for (var e, t = ["number", "date", "time", "month", "week", "datetime", "datetime-local"], n = t.length, i = "test", r = {}, o = 0; o < n; o++)
                    e = t[o],
                    d.setAttribute("type", e),
                    d.value = i,
                    r[e.replace("-", "")] = "text" !== d.type && d.value !== i;
                return r
            }(),
            d.style.cssText = "float:left;",
            Te.cssFloat = !!d.style.cssFloat,
            d = null,
            Te.stableSort = function () {
                var e, t = 513, n = [{
                    index: 0,
                    field: "b"
                }];
                for (e = 1; e < t; e++)
                    n.push({
                        index: e,
                        field: "a"
                    });
                return n.sort(function (e, t) {
                    return e.field > t.field ? 1 : e.field < t.field ? -1 : 0
                }),
                1 === n[0].index
            }(),
            Te.matchesSelector = s.webkitMatchesSelector || s.mozMatchesSelector || s.msMatchesSelector || s.oMatchesSelector || s.matchesSelector || s.matches || function (t) {
                for (var n = document.querySelectorAll ? (this.parentNode || document).querySelectorAll(t) || [] : e(t), i = n.length; i--;)
                    if (n[i] == this)
                        return !0;
                return !1
            }
            ,
            Te.pushState = t.history && t.history.pushState,
            c = document.documentMode,
            Te.hashChange = "onhashchange" in t && !(Te.browser.msie && (!c || c <= 8)),
            Te.customElements = "registerElement" in t.document,
            h = Te.browser.chrome,
            Te.msPointers = !h && t.MSPointerEvent,
            Te.pointers = !h && t.PointerEvent,
            Te.kineticScrollNeeded = l && (Te.touch || Te.msPointers || Te.pointers)
        }(),
        U = {
            left: {
                reverse: "right"
            },
            right: {
                reverse: "left"
            },
            down: {
                reverse: "up"
            },
            up: {
                reverse: "down"
            },
            top: {
                reverse: "bottom"
            },
            bottom: {
                reverse: "top"
            },
            "in": {
                reverse: "out"
            },
            out: {
                reverse: "in"
            }
        },
        q = {},
        e.extend(q, {
            enabled: !0,
            Element: function (t) {
                this.element = e(t)
            },
            promise: function (e, t) {
                e.is(":visible") || e.css({
                    display: e.data("olddisplay") || "block"
                }).css("display"),
                t.hide && e.data("olddisplay", e.css("display")).hide(),
                t.init && t.init(),
                t.completeCallback && t.completeCallback(e),
                e.dequeue()
            },
            disable: function () {
                this.enabled = !1,
                this.promise = this.promiseShim
            },
            enable: function () {
                this.enabled = !0,
                this.promise = this.animatedPromise
            }
        }),
        q.promiseShim = q.promise,
        "kendoAnimate" in e.fn || _e(e.fn, {
            kendoStop: function (e, t) {
                return this.stop(e, t)
            },
            kendoAnimate: function (e, t, n, i) {
                return w(this, e, t, n, i)
            },
            kendoAddClass: function (e, t) {
                return ve.toggleClass(this, e, t, !0)
            },
            kendoRemoveClass: function (e, t) {
                return ve.toggleClass(this, e, t, !1)
            },
            kendoToggleClass: function (e, t, n) {
                return ve.toggleClass(this, e, t, n)
            }
        }),
        j = /&/g,
        $ = /</g,
        G = /"/g,
        Y = /'/g,
        K = />/g,
        Q = function (e) {
            return e.target
        }
        ,
        Te.touch && (Q = function (e) {
            var t = "originalEvent" in e ? e.originalEvent.changedTouches : "changedTouches" in e ? e.changedTouches : null;
            return t ? document.elementFromPoint(t[0].clientX, t[0].clientY) : e.target
        }
        ,
        be(["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap"], function (t, n) {
            e.fn[n] = function (e) {
                return this.bind(n, e)
            }
        })),
        Te.touch ? Te.mobileOS ? (Te.mousedown = "touchstart",
        Te.mouseup = "touchend",
        Te.mousemove = "touchmove",
        Te.mousecancel = "touchcancel",
        Te.click = "touchend",
        Te.resize = "orientationchange") : (Te.mousedown = "mousedown touchstart",
        Te.mouseup = "mouseup touchend",
        Te.mousemove = "mousemove touchmove",
        Te.mousecancel = "mouseleave touchcancel",
        Te.click = "click",
        Te.resize = "resize") : Te.pointers ? (Te.mousemove = "pointermove",
        Te.mousedown = "pointerdown",
        Te.mouseup = "pointerup",
        Te.mousecancel = "pointercancel",
        Te.click = "pointerup",
        Te.resize = "orientationchange resize") : Te.msPointers ? (Te.mousemove = "MSPointerMove",
        Te.mousedown = "MSPointerDown",
        Te.mouseup = "MSPointerUp",
        Te.mousecancel = "MSPointerCancel",
        Te.click = "MSPointerUp",
        Te.resize = "orientationchange resize") : (Te.mousemove = "mousemove",
        Te.mousedown = "mousedown",
        Te.mouseup = "mouseup",
        Te.mousecancel = "mouseleave",
        Te.click = "click",
        Te.resize = "resize"),
        X = function (e, t) {
            var n, i, r, o, a = t || "d", s = 1;
            for (i = 0,
            r = e.length; i < r; i++)
                o = e[i],
                "" !== o && (n = o.indexOf("["),
                0 !== n && (n == -1 ? o = "." + o : (s++,
                o = "." + o.substring(0, n) + " || {})" + o.substring(n))),
                s++,
                a += o + (i < r - 1 ? " || {})" : ")"));
            return Array(s).join("(") + a
        }
        ,
        J = /^([a-z]+:)?\/\//i,
        _e(ve, {
            widgets: [],
            _widgetRegisteredCallbacks: [],
            ui: ve.ui || {},
            fx: ve.fx || b,
            effects: ve.effects || q,
            mobile: ve.mobile || {},
            data: ve.data || {},
            dataviz: ve.dataviz || {},
            drawing: ve.drawing || {},
            spreadsheet: {
                messages: {}
            },
            keys: {
                INSERT: 45,
                DELETE: 46,
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                ESC: 27,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                END: 35,
                HOME: 36,
                SPACEBAR: 32,
                PAGEUP: 33,
                PAGEDOWN: 34,
                F2: 113,
                F10: 121,
                F12: 123,
                NUMPAD_PLUS: 107,
                NUMPAD_MINUS: 109,
                NUMPAD_DOT: 110
            },
            support: ve.support || Te,
            animate: ve.animate || w,
            ns: "",
            attr: function (e) {
                return "data-" + ve.ns + e
            },
            getShadows: a,
            wrap: s,
            deepExtend: l,
            getComputedStyles: p,
            webComponents: ve.webComponents || [],
            isScrollable: f,
            scrollLeft: m,
            size: g,
            toCamelCase: h,
            toHyphens: c,
            getOffset: ve.getOffset || v,
            parseEffects: ve.parseEffects || _,
            toggleClass: ve.toggleClass || y,
            directions: ve.directions || U,
            Observable: H,
            Class: i,
            Template: R,
            template: we(R.compile, R),
            render: we(R.render, R),
            stringify: we(Ce.stringify, Ce),
            eventTarget: Q,
            htmlEncode: x,
            isLocalUrl: function (e) {
                return e && !J.test(e)
            },
            expr: function (e, t, n) {
                return e = e || "",
                typeof t == Re && (n = t,
                t = !1),
                n = n || "d",
                e && "[" !== e.charAt(0) && (e = "." + e),
                t ? (e = e.replace(/"([^.]*)\.([^"]*)"/g, '"$1_$DOT$_$2"'),
                e = e.replace(/'([^.]*)\.([^']*)'/g, "'$1_$DOT$_$2'"),
                e = X(e.split("."), n),
                e = e.replace(/_\$DOT\$_/g, ".")) : e = n + e,
                e
            },
            getter: function (e, t) {
                var n = e + t;
                return Be[n] = Be[n] || Function("d", "return " + ve.expr(e, t))
            },
            setter: function (e) {
                return Pe[e] = Pe[e] || Function("d,value", ve.expr(e) + "=value")
            },
            accessor: function (e) {
                return {
                    get: ve.getter(e),
                    set: ve.setter(e)
                }
            },
            guid: function () {
                var e, t, n = "";
                for (e = 0; e < 32; e++)
                    t = 16 * xe.random() | 0,
                    8 != e && 12 != e && 16 != e && 20 != e || (n += "-"),
                    n += (12 == e ? 4 : 16 == e ? 3 & t | 8 : t).toString(16);
                return n
            },
            roleSelector: function (e) {
                return e.replace(/(\S+)/g, "[" + ve.attr("role") + "=$1],").slice(0, -1)
            },
            directiveSelector: function (e) {
                var t, n = e.split(" ");
                if (n)
                    for (t = 0; t < n.length; t++)
                        "view" != n[t] && (n[t] = n[t].replace(/(\w*)(view|bar|strip|over)$/, "$1-$2"));
                return n.join(" ").replace(/(\S+)/g, "kendo-mobile-$1,").slice(0, -1)
            },
            triggeredByInput: function (e) {
                return /^(label|input|textarea|select)$/i.test(e.target.tagName)
            },
            onWidgetRegistered: function (e) {
                for (var t = 0, n = ve.widgets.length; t < n; t++)
                    e(ve.widgets[t]);
                ve._widgetRegisteredCallbacks.push(e)
            },
            logToConsole: function (e, i) {
                var r = t.console;
                !ve.suppressLog && n !== r && r.log && r[i || "log"](e)
            }
        }),
        Z = H.extend({
            init: function (e, t) {
                var n, i = this;
                i.element = ve.jQuery(e).handler(i),
                i.angular("init", t),
                H.fn.init.call(i),
                n = t ? t.dataSource : null,
                n && (t = _e({}, t, {
                    dataSource: {}
                })),
                t = i.options = _e(!0, {}, i.options, t),
                n && (t.dataSource = n),
                i.element.attr(ve.attr("role")) || i.element.attr(ve.attr("role"), (t.name || "").toLowerCase()),
                i.element.data("kendo" + t.prefix + t.name, i),
                i.bind(i.events, t)
            },
            events: [],
            options: {
                prefix: ""
            },
            _hasBindingTarget: function () {
                return !!this.element[0].kendoBindingTarget
            },
            _tabindex: function (e) {
                e = e || this.wrapper;
                var t = this.element
                  , n = "tabindex"
                  , i = e.attr(n) || t.attr(n);
                t.removeAttr(n),
                e.attr(n, isNaN(i) ? 0 : i)
            },
            setOptions: function (t) {
                this._setEvents(t),
                e.extend(this.options, t)
            },
            _setEvents: function (e) {
                for (var t, n = this, i = 0, r = n.events.length; i < r; i++)
                    t = n.events[i],
                    n.options[t] && e[t] && n.unbind(t, n.options[t]);
                n.bind(n.events, e)
            },
            resize: function (e) {
                var t = this.getSize()
                  , n = this._size;
                (e || (t.width > 0 || t.height > 0) && (!n || t.width !== n.width || t.height !== n.height)) && (this._size = t,
                this._resize(t, e),
                this.trigger("resize", t))
            },
            getSize: function () {
                return ve.dimensions(this.element)
            },
            size: function (e) {
                return e ? (this.setSize(e),
                n) : this.getSize()
            },
            setSize: e.noop,
            _resize: e.noop,
            destroy: function () {
                var e = this;
                e.element.removeData("kendo" + e.options.prefix + e.options.name),
                e.element.removeData("handler"),
                e.unbind()
            },
            _destroy: function () {
                this.destroy()
            },
            angular: function () { },
            _muteAngularRebind: function (e) {
                this._muteRebind = !0,
                e.call(this),
                this._muteRebind = !1
            }
        }),
        ee = Z.extend({
            dataItems: function () {
                return this.dataSource.flatView()
            },
            _angularItems: function (t) {
                var n = this;
                n.angular(t, function () {
                    return {
                        elements: n.items(),
                        data: e.map(n.dataItems(), function (e) {
                            return {
                                dataItem: e
                            }
                        })
                    }
                })
            }
        }),
        ve.dimensions = function (e, t) {
            var n = e[0];
            return t && e.css(t),
            {
                width: n.offsetWidth,
                height: n.offsetHeight
            }
        }
        ,
        ve.notify = ye,
        te = /template$/i,
        ne = /^\s*(?:\{(?:.|\r\n|\n)*\}|\[(?:.|\r\n|\n)*\])\s*$/,
        ie = /^\{(\d+)(:[^\}]+)?\}|^\[[A-Za-z_]*\]$/,
        re = /([A-Z])/g,
        ve.initWidget = function (i, r, o) {
            var a, s, l, d, u, c, h, p, f, m, g, v, _;
            if (o ? o.roles && (o = o.roles) : o = ve.ui.roles,
            i = i.nodeType ? i : i[0],
            c = i.getAttribute("data-" + ve.ns + "role")) {
                f = c.indexOf(".") === -1,
                l = f ? o[c] : ve.getter(c)(t),
                g = e(i).data(),
                v = l ? "kendo" + l.fn.options.prefix + l.fn.options.name : "",
                m = f ? RegExp("^kendo.*" + c + "$", "i") : RegExp("^" + v + "$", "i");
                for (_ in g)
                    if (_.match(m)) {
                        if (_ !== v)
                            return g[_];
                        a = g[_]
                    }
                if (l) {
                    for (p = C(i, "dataSource"),
                    r = e.extend({}, T(i, l.fn.options), r),
                    p && (r.dataSource = typeof p === Re ? ve.getter(p)(t) : p),
                    d = 0,
                    u = l.fn.events.length; d < u; d++)
                        s = l.fn.events[d],
                        h = C(i, s),
                        h !== n && (r[s] = ve.getter(h)(t));
                    return a ? e.isEmptyObject(r) || a.setOptions(r) : a = new l(i, r),
                    a
                }
            }
        }
        ,
        ve.rolesFromNamespaces = function (e) {
            var t, n, i = [];
            for (e[0] || (e = [ve.ui, ve.dataviz.ui]),
            t = 0,
            n = e.length; t < n; t++)
                i[t] = e[t].roles;
            return _e.apply(null, [{}].concat(i.reverse()))
        }
        ,
        ve.init = function (t) {
            var n = ve.rolesFromNamespaces(Le.call(arguments, 1));
            e(t).find("[data-" + ve.ns + "role]").addBack().each(function () {
                ve.initWidget(this, {}, n)
            })
        }
        ,
        ve.destroy = function (t) {
            e(t).find("[data-" + ve.ns + "role]").addBack().each(function () {
                var t, n = e(this).data();
                for (t in n)
                    0 === t.indexOf("kendo") && typeof n[t].destroy === Ae && n[t].destroy()
            })
        }
        ,
        ve.resize = function (t, n) {
            var i, r = e(t).find("[data-" + ve.ns + "role]").addBack().filter(D);
            r.length && (i = e.makeArray(r),
            i.sort(S),
            e.each(i, function () {
                var t = ve.widgetInstance(e(this));
                t && t.resize(n)
            }))
        }
        ,
        ve.parseOptions = T,
        _e(ve.ui, {
            Widget: Z,
            DataBoundWidget: ee,
            roles: {},
            progress: function (t, n) {
                var i, r, o, a, s = t.find(".k-loading-mask"), l = ve.support, d = l.browser;
                n ? s.length || (i = l.isRtl(t),
                r = i ? "right" : "left",
                a = t.scrollLeft(),
                o = d.webkit && i ? t[0].scrollWidth - t.width() - 2 * a : 0,
                s = e("<div class='k-loading-mask'><span class='k-loading-text'>" + ve.ui.progress.messages.loading + "</span><div class='k-loading-image'/><div class='k-loading-color'/></div>").width("100%").height("100%").css("top", t.scrollTop()).css(r, Math.abs(a) + o).prependTo(t)) : s && s.remove()
            },
            plugin: function (t, i, r) {
                var o, a, s, l, d = t.fn.options.name;
                for (i = i || ve.ui,
                r = r || "",
                i[d] = t,
                i.roles[d.toLowerCase()] = t,
                o = "getKendo" + r + d,
                d = "kendo" + r + d,
                a = {
                    name: d,
                    widget: t,
                    prefix: r || ""
                },
                ve.widgets.push(a),
                s = 0,
                l = ve._widgetRegisteredCallbacks.length; s < l; s++)
                    ve._widgetRegisteredCallbacks[s](a);
                e.fn[d] = function (i) {
                    var r, o = this;
                    return typeof i === Re ? (r = Le.call(arguments, 1),
                    this.each(function () {
                        var t, a, s = e.data(this, d);
                        if (!s)
                            throw Error(ve.format("Cannot call method '{0}' of {1} before it is initialized", i, d));
                        if (t = s[i],
                        typeof t !== Ae)
                            throw Error(ve.format("Cannot find method '{0}' of {1}", i, d));
                        if (a = t.apply(s, r),
                        a !== n)
                            return o = a,
                            !1
                    })) : this.each(function () {
                        return new t(this, i)
                    }),
                    o
                }
                ,
                e.fn[d].widget = t,
                e.fn[o] = function () {
                    return this.data(d)
                }
            }
        }),
        ve.ui.progress.messages = {
            loading: "Loading..."
        },
        oe = {
            bind: function () {
                return this
            },
            nullObject: !0,
            options: {}
        },
        ae = Z.extend({
            init: function (e, t) {
                Z.fn.init.call(this, e, t),
                this.element.autoApplyNS(),
                this.wrapper = this.element,
                this.element.addClass("km-widget")
            },
            destroy: function () {
                Z.fn.destroy.call(this),
                this.element.kendoDestroy()
            },
            options: {
                prefix: "Mobile"
            },
            events: [],
            view: function () {
                var e = this.element.closest(ve.roleSelector("view splitview modalview drawer"));
                return ve.widgetInstance(e, ve.mobile.ui) || oe
            },
            viewHasNativeScrolling: function () {
                var e = this.view();
                return e && e.options.useNativeScrolling
            },
            container: function () {
                var e = this.element.closest(ve.roleSelector("view layout modalview drawer splitview"));
                return ve.widgetInstance(e.eq(0), ve.mobile.ui) || oe
            }
        }),
        _e(ve.mobile, {
            init: function (e) {
                ve.init(e, ve.mobile.ui, ve.ui, ve.dataviz.ui)
            },
            appLevelNativeScrolling: function () {
                return ve.mobile.application && ve.mobile.application.options && ve.mobile.application.options.useNativeScrolling
            },
            roles: {},
            ui: {
                Widget: ae,
                DataBoundWidget: ee.extend(ae.prototype),
                roles: {},
                plugin: function (e) {
                    ve.ui.plugin(e, ve.mobile.ui, "Mobile")
                }
            }
        }),
        l(ve.dataviz, {
            init: function (e) {
                ve.init(e, ve.dataviz.ui)
            },
            ui: {
                roles: {},
                themes: {},
                views: [],
                plugin: function (e) {
                    ve.ui.plugin(e, ve.dataviz.ui)
                }
            },
            roles: {}
        }),
        ve.touchScroller = function (t, n) {
            return n || (n = {}),
            n.useNative = !0,
            e(t).map(function (t, i) {
                return i = e(i),
                !(!Te.kineticScrollNeeded || !ve.mobile.ui.Scroller || i.data("kendoMobileScroller")) && (i.kendoMobileScroller(n),
                i.data("kendoMobileScroller"))
            })[0]
        }
        ,
        ve.preventDefault = function (e) {
            e.preventDefault()
        }
        ,
        ve.widgetInstance = function (e, n) {
            var i, r, o, a, s = e.data(ve.ns + "role"), l = [];
            if (s) {
                if ("content" === s && (s = "scroller"),
                n)
                    if (n[0])
                        for (i = 0,
                        r = n.length; i < r; i++)
                            l.push(n[i].roles[s]);
                    else
                        l.push(n.roles[s]);
                else
                    l = [ve.ui.roles[s], ve.dataviz.ui.roles[s], ve.mobile.ui.roles[s]];
                for (s.indexOf(".") >= 0 && (l = [ve.getter(s)(t)]),
                i = 0,
                r = l.length; i < r; i++)
                    if (o = l[i],
                    o && (a = e.data("kendo" + o.fn.options.prefix + o.fn.options.name)))
                        return a
            }
        }
        ,
        ve.onResize = function (n) {
            var i = n;
            return Te.mobileOS.android && (i = function () {
                setTimeout(n, 600)
            }
            ),
            e(t).on(Te.resize, i),
            i
        }
        ,
        ve.unbindResize = function (n) {
            e(t).off(Te.resize, n)
        }
        ,
        ve.attrValue = function (e, t) {
            return e.data(ve.ns + t)
        }
        ,
        ve.days = {
            Sunday: 0,
            Monday: 1,
            Tuesday: 2,
            Wednesday: 3,
            Thursday: 4,
            Friday: 5,
            Saturday: 6
        },
        e.extend(e.expr[":"], {
            kendoFocusable: function (t) {
                var n = e.attr(t, "tabindex");
                return F(t, !isNaN(n) && n > -1)
            }
        }),
        se = ["mousedown", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "mouseup", "click"],
        le = "label, input, [data-rel=external]",
        de = {
            setupMouseMute: function () {
                var t, n = 0, i = se.length, r = document.documentElement;
                if (!de.mouseTrap && Te.eventCapture)
                    for (de.mouseTrap = !0,
                    de.bustClick = !1,
                    de.captureMouse = !1,
                    t = function (t) {
                        de.captureMouse && ("click" === t.type ? de.bustClick && !e(t.target).is(le) && (t.preventDefault(),
                        t.stopPropagation()) : t.stopPropagation())
                    }
                    ; n < i; n++)
                        r.addEventListener(se[n], t, !0)
            },
            muteMouse: function (e) {
                de.captureMouse = !0,
                e.data.bustClick && (de.bustClick = !0),
                clearTimeout(de.mouseTrapTimeoutID)
            },
            unMuteMouse: function () {
                clearTimeout(de.mouseTrapTimeoutID),
                de.mouseTrapTimeoutID = setTimeout(function () {
                    de.captureMouse = !1,
                    de.bustClick = !1
                }, 400)
            }
        },
        ue = {
            down: "touchstart mousedown",
            move: "mousemove touchmove",
            up: "mouseup touchend touchcancel",
            cancel: "mouseleave touchcancel"
        },
        Te.touch && (Te.mobileOS.ios || Te.mobileOS.android) ? ue = {
            down: "touchstart",
            move: "touchmove",
            up: "touchend touchcancel",
            cancel: "touchcancel"
        } : Te.pointers ? ue = {
            down: "pointerdown",
            move: "pointermove",
            up: "pointerup",
            cancel: "pointercancel pointerleave"
        } : Te.msPointers && (ue = {
            down: "MSPointerDown",
            move: "MSPointerMove",
            up: "MSPointerUp",
            cancel: "MSPointerCancel MSPointerLeave"
        }),
        !Te.msPointers || "onmspointerenter" in t || e.each({
            MSPointerEnter: "MSPointerOver",
            MSPointerLeave: "MSPointerOut"
        }, function (t, n) {
            e.event.special[t] = {
                delegateType: n,
                bindType: n,
                handle: function (t) {
                    var i, r = this, o = t.relatedTarget, a = t.handleObj;
                    return o && (o === r || e.contains(r, o)) || (t.type = a.origType,
                    i = a.handler.apply(this, arguments),
                    t.type = n),
                    i
                }
            }
        }),
        ce = function (e) {
            return ue[e] || e
        }
        ,
        he = /([^ ]+)/g,
        ve.applyEventMap = function (e, t) {
            return e = e.replace(he, ce),
            t && (e = e.replace(he, "$1." + t)),
            e
        }
        ,
        pe = e.fn.on,
        _e(!0, A, e),
        A.fn = A.prototype = new e,
        A.fn.constructor = A,
        A.fn.init = function (t, n) {
            return n && n instanceof e && !(n instanceof A) && (n = A(n)),
            e.fn.init.call(this, t, n, fe)
        }
        ,
        A.fn.init.prototype = A.fn,
        fe = A(document),
        _e(A.fn, {
            handler: function (e) {
                return this.data("handler", e),
                this
            },
            autoApplyNS: function (e) {
                return this.data("kendoNS", e || ve.guid()),
                this
            },
            on: function () {
                var e, t, n, i, r, o, a = this, s = a.data("kendoNS");
                return 1 === arguments.length ? pe.call(a, arguments[0]) : (e = a,
                t = Le.call(arguments),
                typeof t[t.length - 1] === Ne && t.pop(),
                n = t[t.length - 1],
                i = ve.applyEventMap(t[0], s),
                Te.mouseAndTouchPresent && i.search(/mouse|click/) > -1 && this[0] !== document.documentElement && (de.setupMouseMute(),
                r = 2 === t.length ? null : t[1],
                o = i.indexOf("click") > -1 && i.indexOf("touchend") > -1,
                pe.call(this, {
                    touchstart: de.muteMouse,
                    touchend: de.unMuteMouse
                }, r, {
                    bustClick: o
                })),
                typeof n === Re && (e = a.data("handler"),
                n = e[n],
                t[t.length - 1] = function (t) {
                    n.call(e, t)
                }
                ),
                t[0] = i,
                pe.apply(a, t),
                a)
            },
            kendoDestroy: function (e) {
                return e = e || this.data("kendoNS"),
                e && this.off("." + e),
                this
            }
        }),
        ve.jQuery = A,
        ve.eventMap = ue,
        ve.timezone = function () {
            function e(e, t) {
                var n, i, r, o = t[3], a = t[4], s = t[5], l = t[8];
                return l || (t[8] = l = {}),
                l[e] ? l[e] : (isNaN(a) ? 0 === a.indexOf("last") ? (n = new Date(Date.UTC(e, u[o] + 1, 1, s[0] - 24, s[1], s[2], 0)),
                i = c[a.substr(4, 3)],
                r = n.getUTCDay(),
                n.setUTCDate(n.getUTCDate() + i - r - (i > r ? 7 : 0))) : a.indexOf(">=") >= 0 && (n = new Date(Date.UTC(e, u[o], a.substr(5), s[0], s[1], s[2], 0)),
                i = c[a.substr(0, 3)],
                r = n.getUTCDay(),
                n.setUTCDate(n.getUTCDate() + i - r + (i < r ? 7 : 0))) : n = new Date(Date.UTC(e, u[o], a, s[0], s[1], s[2], 0)),
                l[e] = n)
            }
            function t(t, n, i) {
                var r, o, a, s;
                return (n = n[i]) ? (a = new Date(t).getUTCFullYear(),
                n = jQuery.grep(n, function (e) {
                    var t = e[0]
                      , n = e[1];
                    return t <= a && (n >= a || t == a && "only" == n || "max" == n)
                }),
                n.push(t),
                n.sort(function (t, n) {
                    return "number" != typeof t && (t = +e(a, t)),
                    "number" != typeof n && (n = +e(a, n)),
                    t - n
                }),
                s = n[jQuery.inArray(t, n) - 1] || n[n.length - 1],
                isNaN(s) ? s : null) : (r = i.split(":"),
                o = 0,
                r.length > 1 && (o = 60 * r[0] + +r[1]),
                [-1e6, "max", "-", "Jan", 1, [0, 0, 0], o, "-"])
            }
            function n(e, t, n) {
                var i, r, o, a = t[n];
                if ("string" == typeof a && (a = t[a]),
                !a)
                    throw Error('Timezone "' + n + '" is either incorrect, or kendo.timezones.min.js is not included.');
                for (i = a.length - 1; i >= 0 && (r = a[i][3],
                !(r && e > r)) ; i--)
                    ;
                if (o = a[i + 1],
                !o)
                    throw Error('Timezone "' + n + '" not found on ' + e + ".");
                return o
            }
            function i(e, i, r, o) {
                typeof e != Ie && (e = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
                var a = n(e, i, o);
                return {
                    zone: a,
                    rule: t(e, r, a[1])
                }
            }
            function r(e, t) {
                var n, r, o;
                return "Etc/UTC" == t || "Etc/GMT" == t ? 0 : (n = i(e, this.zones, this.rules, t),
                r = n.zone,
                o = n.rule,
                ve.parseFloat(o ? r[0] - o[6] : r[0]))
            }
            function o(e, t) {
                var n = i(e, this.zones, this.rules, t)
                  , r = n.zone
                  , o = n.rule
                  , a = r[2];
                return a.indexOf("/") >= 0 ? a.split("/")[o && +o[6] ? 1 : 0] : a.indexOf("%s") >= 0 ? a.replace("%s", o && "-" != o[7] ? o[7] : "") : a
            }
            function a(e, t, n) {
                var i, r;
                return typeof t == Re && (t = this.offset(e, t)),
                typeof n == Re && (n = this.offset(e, n)),
                i = e.getTimezoneOffset(),
                e = new Date(e.getTime() + 6e4 * (t - n)),
                r = e.getTimezoneOffset(),
                new Date(e.getTime() + 6e4 * (r - i))
            }
            function s(e, t) {
                return this.convert(e, e.getTimezoneOffset(), t)
            }
            function l(e, t) {
                return this.convert(e, t, e.getTimezoneOffset())
            }
            function d(e) {
                return this.apply(new Date(e), "Etc/UTC")
            }
            var u = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                May: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Oct: 9,
                Nov: 10,
                Dec: 11
            }
              , c = {
                  Sun: 0,
                  Mon: 1,
                  Tue: 2,
                  Wed: 3,
                  Thu: 4,
                  Fri: 5,
                  Sat: 6
              };
            return {
                zones: {},
                rules: {},
                offset: r,
                convert: a,
                apply: s,
                remove: l,
                abbr: o,
                toLocalDate: d
            }
        }(),
        ve.date = function () {
            function e(e, t) {
                return 0 === t && 23 === e.getHours() && (e.setHours(e.getHours() + 2),
                !0)
            }
            function t(t, n, i) {
                var r = t.getHours();
                i = i || 1,
                n = (n - t.getDay() + 7 * i) % 7,
                t.setDate(t.getDate() + n),
                e(t, r)
            }
            function i(e, n, i) {
                return e = new Date(e),
                t(e, n, i),
                e
            }
            function r(e) {
                return new Date(e.getFullYear(), e.getMonth(), 1)
            }
            function o(e) {
                var t = new Date(e.getFullYear(), e.getMonth() + 1, 0)
                  , n = r(e)
                  , i = Math.abs(t.getTimezoneOffset() - n.getTimezoneOffset());
                return i && t.setHours(n.getHours() + i / 60),
                t
            }
            function a(i, r) {
                var o, a;
                return i = new Date(i.getFullYear(), i.getMonth(), i.getDate()),
                e(i, 0),
                o = i.getFullYear(),
                r !== n ? (t(i, r, -1),
                i.setDate(i.getDate() + 4)) : i.setDate(i.getDate() + (4 - (i.getDay() || 7))),
                e(i, 0),
                a = Math.floor((i.getTime() - new Date(o, 0, 1, (-6))) / 864e5),
                1 + Math.floor(a / 7)
            }
            function s(t) {
                return t = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0),
                e(t, 0),
                t
            }
            function l(e) {
                return Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds())
            }
            function d(e) {
                return e.getTime() - s(e)
            }
            function u(e, t, n) {
                var i, r = d(t), o = d(n);
                return !e || r == o || (t >= n && (n += b),
                i = d(e),
                r > i && (i += b),
                o < r && (o += b),
                i >= r && i <= o)
            }
            function c(e, t, n) {
                var i, r = t.getTime(), o = n.getTime();
                return r >= o && (o += b),
                i = e.getTime(),
                i >= r && i <= o
            }
            function h(t, n) {
                var i = t.getHours();
                return t = new Date(t),
                p(t, n * b),
                e(t, i),
                t
            }
            function p(e, t, n) {
                var i, r = e.getTimezoneOffset();
                e.setTime(e.getTime() + t),
                n || (i = e.getTimezoneOffset() - r,
                e.setTime(e.getTime() + i * _))
            }
            function f(t, n) {
                return t = new Date(ve.date.getDate(t).getTime() + ve.date.getMilliseconds(n)),
                e(t, n.getHours()),
                t
            }
            function m() {
                return s(new Date)
            }
            function g(e) {
                return s(e).getTime() == m().getTime()
            }
            function v(e) {
                var t = new Date(1980, 1, 1, 0, 0, 0);
                return e && t.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()),
                t
            }
            var _ = 6e4
              , b = 864e5;
            return {
                adjustDST: e,
                dayOfWeek: i,
                setDayOfWeek: t,
                getDate: s,
                isInDateRange: c,
                isInTimeRange: u,
                isToday: g,
                nextDay: function (e) {
                    return h(e, 1)
                },
                previousDay: function (e) {
                    return h(e, -1)
                },
                toUtcTime: l,
                MS_PER_DAY: b,
                MS_PER_HOUR: 60 * _,
                MS_PER_MINUTE: _,
                setTime: p,
                setHours: f,
                addDays: h,
                today: m,
                toInvariantTime: v,
                firstDayOfMonth: r,
                lastDayOfMonth: o,
                weekInYear: a,
                getMilliseconds: d
            }
        }(),
        ve.stripWhitespace = function (e) {
            var t, n, i;
            if (document.createNodeIterator)
                for (t = document.createNodeIterator(e, NodeFilter.SHOW_TEXT, function (t) {
                    return t.parentNode == e ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
                }, !1) ; t.nextNode() ;)
                    t.referenceNode && !t.referenceNode.textContent.trim() && t.referenceNode.parentNode.removeChild(t.referenceNode);
            else
                for (n = 0; n < e.childNodes.length; n++)
                    i = e.childNodes[n],
                    3 != i.nodeType || /\S/.test(i.nodeValue) || (e.removeChild(i),
                    n--),
                    1 == i.nodeType && ve.stripWhitespace(i)
        }
        ,
        me = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
            setTimeout(e, 1e3 / 60)
        }
        ,
        ve.animationFrame = function (e) {
            me.call(t, e)
        }
        ,
        ge = [],
        ve.queueAnimation = function (e) {
            ge[ge.length] = e,
            1 === ge.length && ve.runNextAnimation()
        }
        ,
        ve.runNextAnimation = function () {
            ve.animationFrame(function () {
                ge[0] && (ge.shift()(),
                ge[0] && ve.runNextAnimation())
            })
        }
        ,
        ve.parseQueryStringParams = function (e) {
            for (var t = e.split("?")[1] || "", n = {}, i = t.split(/&|=/), r = i.length, o = 0; o < r; o += 2)
                "" !== i[o] && (n[decodeURIComponent(i[o])] = decodeURIComponent(i[o + 1]));
            return n
        }
        ,
        ve.elementUnderCursor = function (e) {
            if (n !== e.x.client)
                return document.elementFromPoint(e.x.client, e.y.client)
        }
        ,
        ve.wheelDeltaY = function (e) {
            var t, i = e.originalEvent, r = i.wheelDeltaY;
            return i.wheelDelta ? (r === n || r) && (t = i.wheelDelta) : i.detail && i.axis === i.VERTICAL_AXIS && (t = 10 * -i.detail),
            t
        }
        ,
        ve.throttle = function (e, t) {
            var i, r, o = 0;
            return !t || t <= 0 ? e : (r = function () {
                function r() {
                    e.apply(a, l),
                    o = +new Date
                }
                var a = this
                  , s = +new Date - o
                  , l = arguments;
                return o ? (i && clearTimeout(i),
                s > t ? r() : i = setTimeout(r, t - s),
                n) : r()
            }
            ,
            r.cancel = function () {
                clearTimeout(i)
            }
            ,
            r)
        }
        ,
        ve.caret = function (t, i, r) {
            var o, a, s, l, d = i !== n;
            if (r === n && (r = i),
            t[0] && (t = t[0]),
            !d || !t.disabled) {
                try {
                    t.selectionStart !== n ? d ? (t.focus(),
                    t.setSelectionRange(i, r)) : i = [t.selectionStart, t.selectionEnd] : document.selection && (e(t).is(":visible") && t.focus(),
                    o = t.createTextRange(),
                    d ? (o.collapse(!0),
                    o.moveStart("character", i),
                    o.moveEnd("character", r - i),
                    o.select()) : (a = o.duplicate(),
                    o.moveToBookmark(document.selection.createRange().getBookmark()),
                    a.setEndPoint("EndToStart", o),
                    s = a.text.length,
                    l = s + o.text.length,
                    i = [s, l]))
                } catch (u) {
                    i = []
                }
                return i
            }
        }
        ,
        ve.compileMobileDirective = function (e, n) {
            var i = t.angular;
            return e.attr("data-" + ve.ns + "role", e[0].tagName.toLowerCase().replace("kendo-mobile-", "").replace("-", "")),
            i.element(e).injector().invoke(["$compile", function (t) {
                t(e)(n),
                /^\$(digest|apply)$/.test(n.$$phase) || n.$digest()
            }
            ]),
            ve.widgetInstance(e, ve.mobile.ui)
        }
        ,
        ve.antiForgeryTokens = function () {
            var t = {}
              , i = e("meta[name=csrf-token],meta[name=_csrf]").attr("content")
              , r = e("meta[name=csrf-param],meta[name=_csrf_header]").attr("content");
            return e("input[name^='__RequestVerificationToken']").each(function () {
                t[this.name] = this.value
            }),
            r !== n && i !== n && (t[r] = i),
            t
        }
        ,
        ve.cycleForm = function (e) {
            function t(e) {
                var t = ve.widgetInstance(e);
                t && t.focus ? t.focus() : e.focus()
            }
            var n = e.find("input, .k-widget").first()
              , i = e.find("button, .k-button").last();
            i.on("keydown", function (e) {
                e.keyCode != ve.keys.TAB || e.shiftKey || (e.preventDefault(),
                t(n))
            }),
            n.on("keydown", function (e) {
                e.keyCode == ve.keys.TAB && e.shiftKey && (e.preventDefault(),
                t(i))
            })
        }
        ,
        function () {
            function n(t, n, i, r) {
                var o, a, s = e("<form>").attr({
                    action: i,
                    method: "POST",
                    target: r
                }), l = ve.antiForgeryTokens();
                l.fileName = n,
                o = t.split(";base64,"),
                l.contentType = o[0].replace("data:", ""),
                l.base64 = o[1];
                for (a in l)
                    l.hasOwnProperty(a) && e("<input>").attr({
                        value: l[a],
                        name: a,
                        type: "hidden"
                    }).appendTo(s);
                s.appendTo("body").submit().remove()
            }
            function i(e, t) {
                var n, i, r, o, a, s = e;
                if ("string" == typeof e) {
                    for (n = e.split(";base64,"),
                    i = n[0],
                    r = atob(n[1]),
                    o = new Uint8Array(r.length),
                    a = 0; a < r.length; a++)
                        o[a] = r.charCodeAt(a);
                    s = new Blob([o.buffer], {
                        type: i
                    })
                }
                navigator.msSaveBlob(s, t)
            }
            function r(e, n) {
                t.Blob && e instanceof Blob && (e = URL.createObjectURL(e)),
                o.download = n,
                o.href = e;
                var i = document.createEvent("MouseEvents");
                i.initMouseEvent("click", !0, !1, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
                o.dispatchEvent(i),
                setTimeout(function () {
                    URL.revokeObjectURL(e)
                })
            }
            var o = document.createElement("a")
              , a = "download" in o && !ve.support.browser.edge;
            ve.saveAs = function (e) {
                var t = n;
                e.forceProxy || (a ? t = r : navigator.msSaveBlob && (t = i)),
                t(e.dataURI, e.fileName, e.proxyURL, e.proxyTarget)
            }
        }(),
        ve.proxyModelSetters = function (e) {
            var t = {};
            return Object.keys(e || {}).forEach(function (n) {
                Object.defineProperty(t, n, {
                    get: function () {
                        return e[n]
                    },
                    set: function (t) {
                        e[n] = t,
                        e.dirty = !0
                    }
                })
            }),
            t
        }
    }(jQuery, window),
    window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, n) {
    (n || t)()
}
),
function (e, define) {
    define("kendo.data.min", ["kendo.core.min", "kendo.data.odata.min", "kendo.data.xml.min"], e)
}(function () {
    return function (e, t) {
        function n(e, t, n, i) {
            return function (r) {
                var o, a = {};
                for (o in r)
                    a[o] = r[o];
                a.field = i ? n + "." + r.field : n,
                t == Fe && e._notifyChange && e._notifyChange(a),
                e.trigger(t, a)
            }
        }
        function i(t, n) {
            if (t === n)
                return !0;
            var r, o = e.type(t), a = e.type(n);
            if (o !== a)
                return !1;
            if ("date" === o)
                return t.getTime() === n.getTime();
            if ("object" !== o && "array" !== o)
                return !1;
            for (r in t)
                if (!i(t[r], n[r]))
                    return !1;
            return !0
        }
        function r(e, t) {
            var n, i;
            for (i in e) {
                if (n = e[i],
                ce(n) && n.field && n.field === t)
                    return n;
                if (n === t)
                    return n
            }
            return null
        }
        function o(e) {
            this.data = e || []
        }
        function a(e, n) {
            if (e) {
                var i = typeof e === ye ? {
                    field: e,
                    dir: n
                } : e
                  , r = pe(i) ? i : i !== t ? [i] : [];
                return fe(r, function (e) {
                    return !!e.dir
                })
            }
        }
        function s(e) {
            var t, n, i, r, o = e.filters;
            if (o)
                for (t = 0,
                n = o.length; t < n; t++)
                    i = o[t],
                    r = i.operator,
                    r && typeof r === ye && (i.operator = X[r.toLowerCase()] || r),
                    s(i)
        }
        function l(e) {
            if (e && !he(e))
                return !pe(e) && e.filters || (e = {
                    logic: "and",
                    filters: pe(e) ? e : [e]
                }),
                s(e),
                e
        }
        function d(e, t) {
            return !e.logic && !t.logic && (e.field === t.field && e.value === t.value && e.operator === t.operator)
        }
        function u(e) {
            return e = e || {},
            he(e) ? {
                logic: "and",
                filters: []
            } : l(e)
        }
        function c(e, t) {
            return t.logic || e.field > t.field ? 1 : e.field < t.field ? -1 : 0
        }
        function h(e, t) {
            var n, i, r, o, a;
            if (e = u(e),
            t = u(t),
            e.logic !== t.logic)
                return !1;
            if (r = (e.filters || []).slice(),
            o = (t.filters || []).slice(),
            r.length !== o.length)
                return !1;
            for (r = r.sort(c),
            o = o.sort(c),
            a = 0; a < r.length; a++)
                if (n = r[a],
                i = o[a],
                n.logic && i.logic) {
                    if (!h(n, i))
                        return !1
                } else if (!d(n, i))
                    return !1;
            return !0
        }
        function p(e) {
            return pe(e) ? e : [e]
        }
        function f(e, n) {
            var i = typeof e === ye ? {
                field: e,
                dir: n
            } : e
              , r = pe(i) ? i : i !== t ? [i] : [];
            return W(r, function (e) {
                return {
                    field: e.field,
                    dir: e.dir || "asc",
                    aggregates: e.aggregates
                }
            })
        }
        function m(e, t) {
            return e && e.getTime && t && t.getTime ? e.getTime() === t.getTime() : e === t
        }
        function g(e, t, n, i, r, o) {
            var a, s, l, d, u;
            for (t = t || [],
            d = t.length,
            a = 0; a < d; a++)
                s = t[a],
                l = s.aggregate,
                u = s.field,
                e[u] = e[u] || {},
                o[u] = o[u] || {},
                o[u][l] = o[u][l] || {},
                e[u][l] = J[l.toLowerCase()](e[u][l], n, _e.accessor(u), i, r, o[u][l])
        }
        function v(e) {
            return "number" == typeof e && !isNaN(e)
        }
        function _(e) {
            return e && e.getTime
        }
        function b(e) {
            var t, n = e.length, i = Array(n);
            for (t = 0; t < n; t++)
                i[t] = e[t].toJSON();
            return i
        }
        function k(e, t, n, i, r) {
            var o, a, s, l, d, u = {};
            for (l = 0,
            d = e.length; l < d; l++) {
                o = e[l];
                for (a in t)
                    s = r[a],
                    s && s !== a && (u[s] || (u[s] = _e.setter(s)),
                    u[s](o, t[a](o)),
                    delete o[a])
            }
        }
        function w(e, t, n, i, r) {
            var o, a, s, l, d;
            for (l = 0,
            d = e.length; l < d; l++) {
                o = e[l];
                for (a in t)
                    o[a] = n._parse(a, t[a](o)),
                    s = r[a],
                    s && s !== a && delete o[s]
            }
        }
        function y(e, t, n, i, r) {
            var o, a, s, l;
            for (a = 0,
            l = e.length; a < l; a++)
                o = e[a],
                s = i[o.field],
                s && s != o.field && (o.field = s),
                o.value = n._parse(o.field, o.value),
                o.hasSubgroups ? y(o.items, t, n, i, r) : w(o.items, t, n, i, r)
        }
        function x(e, t, n, i, r, o) {
            return function (a) {
                return a = e(a),
                a && !he(i) && ("[object Array]" === Ge.call(a) || a instanceof Qe || (a = [a]),
                n(a, i, new t, r, o)),
                a || []
            }
        }
        function C(e, t, n, i) {
            for (var r, o, a, s = 0; t.length && i && (r = t[s],
            o = r.items,
            a = o.length,
            e && e.field === r.field && e.value === r.value ? (e.hasSubgroups && e.items.length ? C(e.items[e.items.length - 1], r.items, n, i) : (o = o.slice(n, n + i),
            e.items = e.items.concat(o)),
            t.splice(s--, 1)) : r.hasSubgroups && o.length ? (C(r, o, n, i),
            r.items.length || t.splice(s--, 1)) : (o = o.slice(n, n + i),
            r.items = o,
            r.items.length || t.splice(s--, 1)),
            0 === o.length ? n -= a : (n = 0,
            i -= o.length),
            !(++s >= t.length)) ;)
                ;
            s < t.length && t.splice(s, t.length - s)
        }
        function T(e) {
            var t, n, i, r, o, a = [];
            for (t = 0,
            n = e.length; t < n; t++)
                if (o = e.at(t),
                o.hasSubgroups)
                    a = a.concat(T(o.items));
                else
                    for (i = o.items,
                    r = 0; r < i.length; r++)
                        a.push(i.at(r));
            return a
        }
        function S(e, t) {
            var n, i, r;
            if (t)
                for (n = 0,
                i = e.length; n < i; n++)
                    r = e.at(n),
                    r.hasSubgroups ? S(r.items, t) : r.items = new U(r.items, t)
        }
        function D(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n].hasSubgroups) {
                    if (D(e[n].items, t))
                        return !0
                } else if (t(e[n].items, e[n]))
                    return !0
        }
        function F(e, t, n, i) {
            for (var r = 0; r < e.length && e[r].data !== t && !E(e[r].data, n, i) ; r++)
                ;
        }
        function E(e, t, n) {
            for (var i = 0, r = e.length; i < r; i++) {
                if (e[i] && e[i].hasSubgroups)
                    return E(e[i].items, t, n);
                if (e[i] === t || e[i] === n)
                    return e[i] = n,
                    !0
            }
        }
        function A(e, n, i, r, o) {
            var a, s, l, d;
            for (a = 0,
            s = e.length; a < s; a++)
                if (l = e[a],
                l && !(l instanceof r))
                    if (l.hasSubgroups === t || o) {
                        for (d = 0; d < n.length; d++)
                            if (n[d] === l) {
                                e[a] = n.at(d),
                                F(i, n, l, e[a]);
                                break
                            }
                    } else
                        A(l.items, n, i, r, o)
        }
        function R(e, t) {
            var n, i, r;
            for (n = 0,
            i = e.length; n < i; n++)
                if (r = e.at(n),
                r.uid == t.uid)
                    return e.splice(n, 1),
                    r
        }
        function I(e, t) {
            return t ? z(e, function (e) {
                return e.uid && e.uid == t.uid || e[t.idField] === t.id && t.id !== t._defaultId
            }) : -1
        }
        function M(e, t) {
            return t ? z(e, function (e) {
                return e.uid == t.uid
            }) : -1
        }
        function z(e, t) {
            var n, i;
            for (n = 0,
            i = e.length; n < i; n++)
                if (t(e[n]))
                    return n;
            return -1
        }
        function H(e, t) {
            var n, i;
            return e && !he(e) ? (n = e[t],
            i = ce(n) ? n.from || n.field || t : e[t] || t,
            be(i) ? t : i) : t
        }
        function N(e, t) {
            var n, i, r, o = {};
            for (r in e)
                "filters" !== r && (o[r] = e[r]);
            if (e.filters)
                for (o.filters = [],
                n = 0,
                i = e.filters.length; n < i; n++)
                    o.filters[n] = N(e.filters[n], t);
            else
                o.field = H(t.fields, o.field);
            return o
        }
        function B(e, t) {
            var n, i, r, o, a, s = [];
            for (n = 0,
            i = e.length; n < i; n++) {
                r = {},
                o = e[n];
                for (a in o)
                    r[a] = o[a];
                r.field = H(t.fields, r.field),
                r.aggregates && pe(r.aggregates) && (r.aggregates = B(r.aggregates, t)),
                s.push(r)
            }
            return s
        }
        function P(t, n) {
            var i, r, o, a, s, l, d, u, c, h;
            for (t = e(t)[0],
            i = t.options,
            r = n[0],
            o = n[1],
            a = [],
            s = 0,
            l = i.length; s < l; s++)
                c = {},
                u = i[s],
                d = u.parentNode,
                d === t && (d = null),
                u.disabled || d && d.disabled || (d && (c.optgroup = d.label),
                c[r.field] = u.text,
                h = u.attributes.value,
                h = h && h.specified ? u.value : u.text,
                c[o.field] = h,
                a.push(c));
            return a
        }
        function L(t, n) {
            var i, r, o, a, s, l, d, u = e(t)[0].tBodies[0], c = u ? u.rows : [], h = n.length, p = [];
            for (i = 0,
            r = c.length; i < r; i++) {
                for (s = {},
                d = !0,
                a = c[i].cells,
                o = 0; o < h; o++)
                    l = a[o],
                    "th" !== l.nodeName.toLowerCase() && (d = !1,
                    s[n[o].field] = l.innerHTML);
                d || p.push(s)
            }
            return p
        }
        function O(e) {
            return function () {
                var t = this._data
                  , n = ie.fn[e].apply(this, je.call(arguments));
                return this._data != t && this._attachBubbleHandlers(),
                n
            }
        }
        function V(t, n) {
            function i(e, t) {
                return e.filter(t).add(e.find(t))
            }
            var r, o, a, s, l, d, u, c, h = e(t).children(), p = [], f = n[0].field, m = n[1] && n[1].field, g = n[2] && n[2].field, v = n[3] && n[3].field;
            for (r = 0,
            o = h.length; r < o; r++)
                a = {
                    _loaded: !0
                },
                s = h.eq(r),
                d = s[0].firstChild,
                c = s.children(),
                t = c.filter("ul"),
                c = c.filter(":not(ul)"),
                l = s.attr("data-id"),
                l && (a.id = l),
                d && (a[f] = 3 == d.nodeType ? d.nodeValue : c.text()),
                m && (a[m] = i(c, "a").attr("href")),
                v && (a[v] = i(c, "img").attr("src")),
                g && (u = i(c, ".k-sprite").prop("className"),
                a[g] = u && e.trim(u.replace("k-sprite", ""))),
                t.length && (a.items = V(t.eq(0), n)),
                "true" == s.attr("data-hasChildren") && (a.hasChildren = !0),
                p.push(a);
            return p
        }
        var W, U, q, j, $, G, Y, K, Q, X, J, Z, ee, te, ne, ie, re, oe, ae, se, le, de = e.extend, ue = e.proxy, ce = e.isPlainObject, he = e.isEmptyObject, pe = e.isArray, fe = e.grep, me = e.ajax, ge = e.each, ve = e.noop, _e = window.kendo, be = _e.isFunction, ke = _e.Observable, we = _e.Class, ye = "string", xe = "function", Ce = "create", Te = "read", Se = "update", De = "destroy", Fe = "change", Ee = "sync", Ae = "get", Re = "error", Ie = "requestStart", Me = "progress", ze = "requestEnd", He = [Ce, Te, Se, De], Ne = function (e) {
            return e
        }, Be = _e.getter, Pe = _e.stringify, Le = Math, Oe = [].push, Ve = [].join, We = [].pop, Ue = [].splice, qe = [].shift, je = [].slice, $e = [].unshift, Ge = {}.toString, Ye = _e.support.stableSort, Ke = /^\/Date\((.*?)\)\/$/, Qe = ke.extend({
            init: function (e, t) {
                var n = this;
                n.type = t || q,
                ke.fn.init.call(n),
                n.length = e.length,
                n.wrapAll(e, n)
            },
            at: function (e) {
                return this[e]
            },
            toJSON: function () {
                var e, t, n = this.length, i = Array(n);
                for (e = 0; e < n; e++)
                    t = this[e],
                    t instanceof q && (t = t.toJSON()),
                    i[e] = t;
                return i
            },
            parent: ve,
            wrapAll: function (e, t) {
                var n, i, r = this, o = function () {
                    return r
                };
                for (t = t || [],
                n = 0,
                i = e.length; n < i; n++)
                    t[n] = r.wrap(e[n], o);
                return t
            },
            wrap: function (e, t) {
                var n, i = this;
                return null !== e && "[object Object]" === Ge.call(e) && (n = e instanceof i.type || e instanceof G,
                n || (e = e instanceof q ? e.toJSON() : e,
                e = new i.type(e)),
                e.parent = t,
                e.bind(Fe, function (e) {
                    i.trigger(Fe, {
                        field: e.field,
                        node: e.node,
                        index: e.index,
                        items: e.items || [this],
                        action: e.node ? e.action || "itemloaded" : "itemchange"
                    })
                })),
                e
            },
            push: function () {
                var e, t = this.length, n = this.wrapAll(arguments);
                return e = Oe.apply(this, n),
                this.trigger(Fe, {
                    action: "add",
                    index: t,
                    items: n
                }),
                e
            },
            slice: je,
            sort: [].sort,
            join: Ve,
            pop: function () {
                var e = this.length
                  , t = We.apply(this);
                return e && this.trigger(Fe, {
                    action: "remove",
                    index: e - 1,
                    items: [t]
                }),
                t
            },
            splice: function (e, t, n) {
                var i, r, o, a = this.wrapAll(je.call(arguments, 2));
                if (i = Ue.apply(this, [e, t].concat(a)),
                i.length)
                    for (this.trigger(Fe, {
                        action: "remove",
                        index: e,
                        items: i
                    }),
                    r = 0,
                    o = i.length; r < o; r++)
                        i[r] && i[r].children && i[r].unbind(Fe);
                return n && this.trigger(Fe, {
                    action: "add",
                    index: e,
                    items: a
                }),
                i
            },
            shift: function () {
                var e = this.length
                  , t = qe.apply(this);
                return e && this.trigger(Fe, {
                    action: "remove",
                    index: 0,
                    items: [t]
                }),
                t
            },
            unshift: function () {
                var e, t = this.wrapAll(arguments);
                return e = $e.apply(this, t),
                this.trigger(Fe, {
                    action: "add",
                    index: 0,
                    items: t
                }),
                e
            },
            indexOf: function (e) {
                var t, n, i = this;
                for (t = 0,
                n = i.length; t < n; t++)
                    if (i[t] === e)
                        return t;
                return -1
            },
            forEach: function (e) {
                for (var t = 0, n = this.length; t < n; t++)
                    e(this[t], t, this)
            },
            map: function (e) {
                for (var t = 0, n = [], i = this.length; t < i; t++)
                    n[t] = e(this[t], t, this);
                return n
            },
            reduce: function (e) {
                var t, n = 0, i = this.length;
                for (2 == arguments.length ? t = arguments[1] : n < i && (t = this[n++]) ; n < i; n++)
                    t = e(t, this[n], n, this);
                return t
            },
            reduceRight: function (e) {
                var t, n = this.length - 1;
                for (2 == arguments.length ? t = arguments[1] : n > 0 && (t = this[n--]) ; n >= 0; n--)
                    t = e(t, this[n], n, this);
                return t
            },
            filter: function (e) {
                for (var t, n = 0, i = [], r = this.length; n < r; n++)
                    t = this[n],
                    e(t, n, this) && (i[i.length] = t);
                return i
            },
            find: function (e) {
                for (var t, n = 0, i = this.length; n < i; n++)
                    if (t = this[n],
                    e(t, n, this))
                        return t
            },
            every: function (e) {
                for (var t, n = 0, i = this.length; n < i; n++)
                    if (t = this[n],
                    !e(t, n, this))
                        return !1;
                return !0
            },
            some: function (e) {
                for (var t, n = 0, i = this.length; n < i; n++)
                    if (t = this[n],
                    e(t, n, this))
                        return !0;
                return !1
            },
            remove: function (e) {
                var t = this.indexOf(e);
                t !== -1 && this.splice(t, 1)
            },
            empty: function () {
                this.splice(0, this.length)
            }
        });
        "undefined" != typeof Symbol && Symbol.iterator && !Qe.prototype[Symbol.iterator] && (Qe.prototype[Symbol.iterator] = [][Symbol.iterator]),
        U = Qe.extend({
            init: function (e, t) {
                ke.fn.init.call(this),
                this.type = t || q;
                for (var n = 0; n < e.length; n++)
                    this[n] = e[n];
                this.length = n,
                this._parent = ue(function () {
                    return this
                }, this)
            },
            at: function (e) {
                var t = this[e];
                return t instanceof this.type ? t.parent = this._parent : t = this[e] = this.wrap(t, this._parent),
                t
            }
        }),
        q = ke.extend({
            init: function (e) {
                var t, n, i = this, r = function () {
                    return i
                };
                ke.fn.init.call(this),
                this._handlers = {};
                for (n in e)
                    t = e[n],
                    "object" == typeof t && t && !t.getTime && "_" != n.charAt(0) && (t = i.wrap(t, n, r)),
                    i[n] = t;
                i.uid = _e.guid()
            },
            shouldSerialize: function (e) {
                return this.hasOwnProperty(e) && "_handlers" !== e && "_events" !== e && typeof this[e] !== xe && "uid" !== e
            },
            forEach: function (e) {
                for (var t in this)
                    this.shouldSerialize(t) && e(this[t], t)
            },
            toJSON: function () {
                var e, t, n = {};
                for (t in this)
                    this.shouldSerialize(t) && (e = this[t],
                    (e instanceof q || e instanceof Qe) && (e = e.toJSON()),
                    n[t] = e);
                return n
            },
            get: function (e) {
                var t, n = this;
                return n.trigger(Ae, {
                    field: e
                }),
                t = "this" === e ? n : _e.getter(e, !0)(n)
            },
            _set: function (e, t) {
                var n, i, r, o = this, a = e.indexOf(".") >= 0;
                if (a)
                    for (n = e.split("."),
                    i = ""; n.length > 1;) {
                        if (i += n.shift(),
                        r = _e.getter(i, !0)(o),
                        r instanceof q)
                            return r.set(n.join("."), t),
                            a;
                        i += "."
                    }
                return _e.setter(e)(o, t),
                a
            },
            set: function (e, t) {
                var n = this
                  , i = !1
                  , r = e.indexOf(".") >= 0
                  , o = _e.getter(e, !0)(n);
                return o !== t && (o instanceof ke && this._handlers[e] && (this._handlers[e].get && o.unbind(Ae, this._handlers[e].get),
                o.unbind(Fe, this._handlers[e].change)),
                i = n.trigger("set", {
                    field: e,
                    value: t
                }),
                i || (r || (t = n.wrap(t, e, function () {
                    return n
                })),
                (!n._set(e, t) || e.indexOf("(") >= 0 || e.indexOf("[") >= 0) && n.trigger(Fe, {
                    field: e
                }))),
                i
            },
            parent: ve,
            wrap: function (e, t, i) {
                var r, o, a, s, l = this, d = Ge.call(e);
                return null == e || "[object Object]" !== d && "[object Array]" !== d || (a = e instanceof Qe,
                s = e instanceof ie,
                "[object Object]" !== d || s || a ? ("[object Array]" === d || a || s) && (a || s || (e = new Qe(e)),
                o = n(l, Fe, t, !1),
                e.bind(Fe, o),
                l._handlers[t] = {
                    change: o
                }) : (e instanceof q || (e = new q(e)),
                r = n(l, Ae, t, !0),
                e.bind(Ae, r),
                o = n(l, Fe, t, !0),
                e.bind(Fe, o),
                l._handlers[t] = {
                    get: r,
                    change: o
                }),
                e.parent = i),
                e
            }
        }),
        j = {
            number: function (e) {
                return _e.parseFloat(e)
            },
            date: function (e) {
                return _e.parseDate(e)
            },
            "boolean": function (e) {
                return typeof e === ye ? "true" === e.toLowerCase() : null != e ? !!e : e
            },
            string: function (e) {
                return null != e ? e + "" : e
            },
            "default": function (e) {
                return e
            }
        },
        $ = {
            string: "",
            number: 0,
            date: new Date,
            "boolean": !1,
            "default": ""
        },
        G = q.extend({
            init: function (n) {
                var i, r, o = this;
                if ((!n || e.isEmptyObject(n)) && (n = e.extend({}, o.defaults, n),
                o._initializers))
                    for (i = 0; i < o._initializers.length; i++)
                        r = o._initializers[i],
                        n[r] = o.defaults[r]();
                q.fn.init.call(o, n),
                o.dirty = !1,
                o.idField && (o.id = o.get(o.idField),
                o.id === t && (o.id = o._defaultId))
            },
            shouldSerialize: function (e) {
                return q.fn.shouldSerialize.call(this, e) && "uid" !== e && !("id" !== this.idField && "id" === e) && "dirty" !== e && "_accessors" !== e
            },
            _parse: function (e, t) {
                var n, i = this, o = e, a = i.fields || {};
                return e = a[e],
                e || (e = r(a, o)),
                e && (n = e.parse,
                !n && e.type && (n = j[e.type.toLowerCase()])),
                n ? n(t) : t
            },
            _notifyChange: function (e) {
                var t = e.action;
                "add" != t && "remove" != t || (this.dirty = !0)
            },
            editable: function (e) {
                return e = (this.fields || {})[e],
                !e || e.editable !== !1
            },
            set: function (e, t, n) {
                var r = this
                  , o = r.dirty;
                r.editable(e) && (t = r._parse(e, t),
                i(t, r.get(e)) || (r.dirty = !0,
                q.fn.set.call(r, e, t, n) && !o && (r.dirty = o)))
            },
            accept: function (e) {
                var t, n, i = this, r = function () {
                    return i
                };
                for (t in e)
                    n = e[t],
                    "_" != t.charAt(0) && (n = i.wrap(e[t], t, r)),
                    i._set(t, n);
                i.idField && (i.id = i.get(i.idField)),
                i.dirty = !1
            },
            isNew: function () {
                return this.id === this._defaultId
            }
        }),
        G.define = function (e, n) {
            n === t && (n = e,
            e = G);
            var i, r, o, a, s, l, d, u, c = de({
                defaults: {}
            }, n), h = {}, p = c.id, f = [];
            if (p && (c.idField = p),
            c.id && delete c.id,
            p && (c.defaults[p] = c._defaultId = ""),
            "[object Array]" === Ge.call(c.fields)) {
                for (l = 0,
                d = c.fields.length; l < d; l++)
                    o = c.fields[l],
                    typeof o === ye ? h[o] = {} : o.field && (h[o.field] = o);
                c.fields = h
            }
            for (r in c.fields)
                o = c.fields[r],
                a = o.type || "default",
                s = null,
                u = r,
                r = typeof o.field === ye ? o.field : r,
                o.nullable || (s = c.defaults[u !== r ? u : r] = o.defaultValue !== t ? o.defaultValue : $[a.toLowerCase()],
                "function" == typeof s && f.push(r)),
                n.id === r && (c._defaultId = s),
                c.defaults[u !== r ? u : r] = s,
                o.parse = o.parse || j[a];
            return f.length > 0 && (c._initializers = f),
            i = e.extend(c),
            i.define = function (e) {
                return G.define(i, e)
            }
            ,
            c.fields && (i.fields = c.fields,
            i.idField = c.idField),
            i
        }
        ,
        Y = {
            selector: function (e) {
                return be(e) ? e : Be(e)
            },
            compare: function (e) {
                var t = this.selector(e);
                return function (e, n) {
                    return e = t(e),
                    n = t(n),
                    null == e && null == n ? 0 : null == e ? -1 : null == n ? 1 : e.localeCompare ? e.localeCompare(n) : e > n ? 1 : e < n ? -1 : 0
                }
            },
            create: function (e) {
                var t = e.compare || this.compare(e.field);
                return "desc" == e.dir ? function (e, n) {
                    return t(n, e, !0)
                }
                : t
            },
            combine: function (e) {
                return function (t, n) {
                    var i, r, o = e[0](t, n);
                    for (i = 1,
                    r = e.length; i < r; i++)
                        o = o || e[i](t, n);
                    return o
                }
            }
        },
        K = de({}, Y, {
            asc: function (e) {
                var t = this.selector(e);
                return function (e, n) {
                    var i = t(e)
                      , r = t(n);
                    return i && i.getTime && r && r.getTime && (i = i.getTime(),
                    r = r.getTime()),
                    i === r ? e.__position - n.__position : null == i ? -1 : null == r ? 1 : i.localeCompare ? i.localeCompare(r) : i > r ? 1 : -1
                }
            },
            desc: function (e) {
                var t = this.selector(e);
                return function (e, n) {
                    var i = t(e)
                      , r = t(n);
                    return i && i.getTime && r && r.getTime && (i = i.getTime(),
                    r = r.getTime()),
                    i === r ? e.__position - n.__position : null == i ? 1 : null == r ? -1 : r.localeCompare ? r.localeCompare(i) : i < r ? 1 : -1
                }
            },
            create: function (e) {
                return this[e.dir](e.field)
            }
        }),
        W = function (e, t) {
            var n, i = e.length, r = Array(i);
            for (n = 0; n < i; n++)
                r[n] = t(e[n], n, e);
            return r
        }
        ,
        Q = function () {
            function e(e) {
                return "string" == typeof e && (e = e.replace(/[\r\n]+/g, "")),
                JSON.stringify(e)
            }
            function t(t) {
                return function (n, i, r) {
                    return i += "",
                    r && (n = "(" + n + " || '').toLowerCase()",
                    i = i.toLowerCase()),
                    t(n, e(i), r)
                }
            }
            function n(t, n, i, r) {
                if (null != i) {
                    if (typeof i === ye) {
                        var o = Ke.exec(i);
                        o ? i = new Date((+o[1])) : r ? (i = e(i.toLowerCase()),
                        n = "((" + n + " || '')+'').toLowerCase()") : i = e(i)
                    }
                    i.getTime && (n = "(" + n + "&&" + n + ".getTime?" + n + ".getTime():" + n + ")",
                    i = i.getTime())
                }
                return n + " " + t + " " + i
            }
            function i(e) {
                var t, n, i, r;
                for (t = "/^",
                n = !1,
                i = 0; i < e.length; ++i) {
                    if (r = e.charAt(i),
                    n)
                        t += "\\" + r;
                    else {
                        if ("~" == r) {
                            n = !0;
                            continue
                        }
                        t += "*" == r ? ".*" : "?" == r ? "." : ".+^$()[]{}|\\/\n\r\u2028\u2029 ".indexOf(r) >= 0 ? "\\" + r : r
                    }
                    n = !1
                }
                return t + "$/"
            }
            return {
                quote: function (t) {
                    return t && t.getTime ? "new Date(" + t.getTime() + ")" : e(t)
                },
                eq: function (e, t, i) {
                    return n("==", e, t, i)
                },
                neq: function (e, t, i) {
                    return n("!=", e, t, i)
                },
                gt: function (e, t, i) {
                    return n(">", e, t, i)
                },
                gte: function (e, t, i) {
                    return n(">=", e, t, i)
                },
                lt: function (e, t, i) {
                    return n("<", e, t, i)
                },
                lte: function (e, t, i) {
                    return n("<=", e, t, i)
                },
                startswith: t(function (e, t) {
                    return e + ".lastIndexOf(" + t + ", 0) == 0"
                }),
                doesnotstartwith: t(function (e, t) {
                    return e + ".lastIndexOf(" + t + ", 0) == -1"
                }),
                endswith: t(function (e, t) {
                    var n = t ? t.length - 2 : 0;
                    return e + ".indexOf(" + t + ", " + e + ".length - " + n + ") >= 0"
                }),
                doesnotendwith: t(function (e, t) {
                    var n = t ? t.length - 2 : 0;
                    return e + ".indexOf(" + t + ", " + e + ".length - " + n + ") < 0"
                }),
                contains: t(function (e, t) {
                    return e + ".indexOf(" + t + ") >= 0"
                }),
                doesnotcontain: t(function (e, t) {
                    return e + ".indexOf(" + t + ") == -1"
                }),
                matches: t(function (e, t) {
                    return t = t.substring(1, t.length - 1),
                    i(t) + ".test(" + e + ")"
                }),
                doesnotmatch: t(function (e, t) {
                    return t = t.substring(1, t.length - 1),
                    "!" + i(t) + ".test(" + e + ")"
                }),
                isempty: function (e) {
                    return e + " === ''"
                },
                isnotempty: function (e) {
                    return e + " !== ''"
                },
                isnull: function (e) {
                    return "(" + e + " == null)"
                },
                isnotnull: function (e) {
                    return "(" + e + " != null)"
                }
            }
        }(),
        o.filterExpr = function (e) {
            var n, i, r, a, s, l, d = [], u = {
                and: " && ",
                or: " || "
            }, c = [], h = [], p = e.filters;
            for (n = 0,
            i = p.length; n < i; n++)
                r = p[n],
                s = r.field,
                l = r.operator,
                r.filters ? (a = o.filterExpr(r),
                r = a.expression.replace(/__o\[(\d+)\]/g, function (e, t) {
                    return t = +t,
                    "__o[" + (h.length + t) + "]"
                }).replace(/__f\[(\d+)\]/g, function (e, t) {
                    return t = +t,
                    "__f[" + (c.length + t) + "]"
                }),
                h.push.apply(h, a.operators),
                c.push.apply(c, a.fields)) : (typeof s === xe ? (a = "__f[" + c.length + "](d)",
                c.push(s)) : a = _e.expr(s),
                typeof l === xe ? (r = "__o[" + h.length + "](" + a + ", " + Q.quote(r.value) + ")",
                h.push(l)) : r = Q[(l || "eq").toLowerCase()](a, r.value, r.ignoreCase === t || r.ignoreCase)),
                d.push(r);
            return {
                expression: "(" + d.join(u[e.logic]) + ")",
                fields: c,
                operators: h
            }
        }
        ,
        X = {
            "==": "eq",
            equals: "eq",
            isequalto: "eq",
            equalto: "eq",
            equal: "eq",
            "!=": "neq",
            ne: "neq",
            notequals: "neq",
            isnotequalto: "neq",
            notequalto: "neq",
            notequal: "neq",
            "<": "lt",
            islessthan: "lt",
            lessthan: "lt",
            less: "lt",
            "<=": "lte",
            le: "lte",
            islessthanorequalto: "lte",
            lessthanequal: "lte",
            ">": "gt",
            isgreaterthan: "gt",
            greaterthan: "gt",
            greater: "gt",
            ">=": "gte",
            isgreaterthanorequalto: "gte",
            greaterthanequal: "gte",
            ge: "gte",
            notsubstringof: "doesnotcontain",
            isnull: "isnull",
            isempty: "isempty",
            isnotempty: "isnotempty"
        },
        o.normalizeFilter = l,
        o.compareFilters = h,
        o.prototype = {
            toArray: function () {
                return this.data
            },
            range: function (e, t) {
                return new o(this.data.slice(e, e + t))
            },
            skip: function (e) {
                return new o(this.data.slice(e))
            },
            take: function (e) {
                return new o(this.data.slice(0, e))
            },
            select: function (e) {
                return new o(W(this.data, e))
            },
            order: function (e, t) {
                var n = {
                    dir: t
                };
                return e && (e.compare ? n.compare = e.compare : n.field = e),
                new o(this.data.slice(0).sort(Y.create(n)))
            },
            orderBy: function (e) {
                return this.order(e, "asc")
            },
            orderByDescending: function (e) {
                return this.order(e, "desc")
            },
            sort: function (e, t, n) {
                var i, r, o = a(e, t), s = [];
                if (n = n || Y,
                o.length) {
                    for (i = 0,
                    r = o.length; i < r; i++)
                        s.push(n.create(o[i]));
                    return this.orderBy({
                        compare: n.combine(s)
                    })
                }
                return this
            },
            filter: function (e) {
                var t, n, i, r, a, s, d, u, c = this.data, h = [];
                if (e = l(e),
                !e || 0 === e.filters.length)
                    return this;
                for (r = o.filterExpr(e),
                s = r.fields,
                d = r.operators,
                a = u = Function("d, __f, __o", "return " + r.expression),
                (s.length || d.length) && (u = function (e) {
                    return a(e, s, d)
                }
                ),
                t = 0,
                i = c.length; t < i; t++)
                    n = c[t],
                    u(n) && h.push(n);
                return new o(h)
            },
            group: function (e, t) {
                e = f(e || []),
                t = t || this.data;
                var n, i = this, r = new o(i.data);
                return e.length > 0 && (n = e[0],
                r = r.groupBy(n).select(function (i) {
                    var r = new o(t).filter([{
                        field: i.field,
                        operator: "eq",
                        value: i.value,
                        ignoreCase: !1
                    }]);
                    return {
                        field: i.field,
                        value: i.value,
                        items: e.length > 1 ? new o(i.items).group(e.slice(1), r.toArray()).toArray() : i.items,
                        hasSubgroups: e.length > 1,
                        aggregates: r.aggregate(n.aggregates)
                    }
                })),
                r
            },
            groupBy: function (e) {
                if (he(e) || !this.data.length)
                    return new o([]);
                var t, n, i, r, a = e.field, s = this._sortForGrouping(a, e.dir || "asc"), l = _e.accessor(a), d = l.get(s[0], a), u = {
                    field: a,
                    value: d,
                    items: []
                }, c = [u];
                for (i = 0,
                r = s.length; i < r; i++)
                    t = s[i],
                    n = l.get(t, a),
                    m(d, n) || (d = n,
                    u = {
                        field: a,
                        value: d,
                        items: []
                    },
                    c.push(u)),
                    u.items.push(t);
                return new o(c)
            },
            _sortForGrouping: function (e, t) {
                var n, i, r = this.data;
                if (!Ye) {
                    for (n = 0,
                    i = r.length; n < i; n++)
                        r[n].__position = n;
                    for (r = new o(r).sort(e, t, K).toArray(),
                    n = 0,
                    i = r.length; n < i; n++)
                        delete r[n].__position;
                    return r
                }
                return this.sort(e, t).toArray()
            },
            aggregate: function (e) {
                var t, n, i = {}, r = {};
                if (e && e.length)
                    for (t = 0,
                    n = this.data.length; t < n; t++)
                        g(i, e, this.data[t], t, n, r);
                return i
            }
        },
        J = {
            sum: function (e, t, n) {
                var i = n.get(t);
                return v(e) ? v(i) && (e += i) : e = i,
                e
            },
            count: function (e) {
                return (e || 0) + 1
            },
            average: function (e, n, i, r, o, a) {
                var s = i.get(n);
                return a.count === t && (a.count = 0),
                v(e) ? v(s) && (e += s) : e = s,
                v(s) && a.count++,
                r == o - 1 && v(e) && (e /= a.count),
                e
            },
            max: function (e, t, n) {
                var i = n.get(t);
                return v(e) || _(e) || (e = i),
                e < i && (v(i) || _(i)) && (e = i),
                e
            },
            min: function (e, t, n) {
                var i = n.get(t);
                return v(e) || _(e) || (e = i),
                e > i && (v(i) || _(i)) && (e = i),
                e
            }
        },
        o.process = function (e, n) {
            n = n || {};
            var i, r = new o(e), s = n.group, l = f(s || []).concat(a(n.sort || [])), d = n.filterCallback, u = n.filter, c = n.skip, h = n.take;
            return u && (r = r.filter(u),
            d && (r = d(r)),
            i = r.toArray().length),
            l && (r = r.sort(l),
            s && (e = r.toArray())),
            c !== t && h !== t && (r = r.range(c, h)),
            s && (r = r.group(s, e)),
            {
                total: i,
                data: r.toArray()
            }
        }
        ,
        Z = we.extend({
            init: function (e) {
                this.data = e.data
            },
            read: function (e) {
                e.success(this.data)
            },
            update: function (e) {
                e.success(e.data)
            },
            create: function (e) {
                e.success(e.data)
            },
            destroy: function (e) {
                e.success(e.data)
            }
        }),
        ee = we.extend({
            init: function (e) {
                var t, n = this;
                e = n.options = de({}, n.options, e),
                ge(He, function (t, n) {
                    typeof e[n] === ye && (e[n] = {
                        url: e[n]
                    })
                }),
                n.cache = e.cache ? te.create(e.cache) : {
                    find: ve,
                    add: ve
                },
                t = e.parameterMap,
                be(e.push) && (n.push = e.push),
                n.push || (n.push = Ne),
                n.parameterMap = be(t) ? t : function (e) {
                    var n = {};
                    return ge(e, function (e, i) {
                        e in t && (e = t[e],
                        ce(e) && (i = e.value(i),
                        e = e.key)),
                        n[e] = i
                    }),
                    n
                }
            },
            options: {
                parameterMap: Ne
            },
            create: function (e) {
                return me(this.setup(e, Ce))
            },
            read: function (n) {
                var i, r, o, a = this, s = a.cache;
                n = a.setup(n, Te),
                i = n.success || ve,
                r = n.error || ve,
                o = s.find(n.data),
                o !== t ? i(o) : (n.success = function (e) {
                    s.add(n.data, e),
                    i(e)
                }
                ,
                e.ajax(n))
            },
            update: function (e) {
                return me(this.setup(e, Se))
            },
            destroy: function (e) {
                return me(this.setup(e, De))
            },
            setup: function (e, t) {
                e = e || {};
                var n, i = this, r = i.options[t], o = be(r.data) ? r.data(e.data) : r.data;
                return e = de(!0, {}, r, e),
                n = de(!0, {}, o, e.data),
                e.data = i.parameterMap(n, t),
                be(e.url) && (e.url = e.url(n)),
                e
            }
        }),
        te = we.extend({
            init: function () {
                this._store = {}
            },
            add: function (e, n) {
                e !== t && (this._store[Pe(e)] = n)
            },
            find: function (e) {
                return this._store[Pe(e)]
            },
            clear: function () {
                this._store = {}
            },
            remove: function (e) {
                delete this._store[Pe(e)]
            }
        }),
        te.create = function (e) {
            var t = {
                inmemory: function () {
                    return new te
                }
            };
            return ce(e) && be(e.find) ? e : e === !0 ? new te : t[e]()
        }
        ,
        ne = we.extend({
            init: function (e) {
                var t, n, i, r, o, a, s, l, d, u, c, h, p, f = this;
                e = e || {};
                for (t in e)
                    n = e[t],
                    f[t] = typeof n === ye ? Be(n) : n;
                r = e.modelBase || G,
                ce(f.model) && (f.model = i = r.define(f.model)),
                o = ue(f.data, f),
                f._dataAccessFunction = o,
                f.model && (a = ue(f.groups, f),
                s = ue(f.serialize, f),
                l = {},
                d = {},
                u = {},
                c = {},
                h = !1,
                i = f.model,
                i.fields && (ge(i.fields, function (e, t) {
                    var n;
                    p = e,
                    ce(t) && t.field ? p = t.field : typeof t === ye && (p = t),
                    ce(t) && t.from && (n = t.from),
                    h = h || n && n !== e || p !== e,
                    d[e] = Be(n || p),
                    u[e] = Be(e),
                    l[n || p] = e,
                    c[e] = n || p
                }),
                !e.serialize && h && (f.serialize = x(s, i, k, u, l, c))),
                f._dataAccessFunction = o,
                f.data = x(o, i, w, d, l, c),
                f.groups = x(a, i, y, d, l, c))
            },
            errors: function (e) {
                return e ? e.errors : null
            },
            parse: Ne,
            data: Ne,
            total: function (e) {
                return e.length
            },
            groups: Ne,
            aggregates: function () {
                return {}
            },
            serialize: function (e) {
                return e
            }
        }),
        ie = ke.extend({
            init: function (e) {
                var n, i, r, o = this;
                e && (i = e.data),
                e = o.options = de({}, o.options, e),
                o._map = {},
                o._prefetch = {},
                o._data = [],
                o._pristineData = [],
                o._ranges = [],
                o._view = [],
                o._pristineTotal = 0,
                o._destroyed = [],
                o._pageSize = e.pageSize,
                o._page = e.page || (e.pageSize ? 1 : t),
                o._sort = a(e.sort),
                o._filter = l(e.filter),
                o._group = f(e.group),
                o._aggregate = e.aggregate,
                o._total = e.total,
                o._shouldDetachObservableParents = !0,
                ke.fn.init.call(o),
                o.transport = re.create(e, i, o),
                be(o.transport.push) && o.transport.push({
                    pushCreate: ue(o._pushCreate, o),
                    pushUpdate: ue(o._pushUpdate, o),
                    pushDestroy: ue(o._pushDestroy, o)
                }),
                null != e.offlineStorage && ("string" == typeof e.offlineStorage ? (r = e.offlineStorage,
                o._storage = {
                    getItem: function () {
                        return JSON.parse(localStorage.getItem(r))
                    },
                    setItem: function (e) {
                        localStorage.setItem(r, Pe(o.reader.serialize(e)))
                    }
                }) : o._storage = e.offlineStorage),
                o.reader = new _e.data.readers[e.schema.type || "json"](e.schema),
                n = o.reader.model || {},
                o._detachObservableParents(),
                o._data = o._observe(o._data),
                o._online = !0,
                o.bind(["push", Re, Fe, Ie, Ee, ze, Me], e)
            },
            options: {
                data: null,
                schema: {
                    modelBase: G
                },
                offlineStorage: null,
                serverSorting: !1,
                serverPaging: !1,
                serverFiltering: !1,
                serverGrouping: !1,
                serverAggregates: !1,
                batch: !1
            },
            clone: function () {
                return this
            },
            online: function (n) {
                return n !== t ? this._online != n && (this._online = n,
                n) ? this.sync() : e.Deferred().resolve().promise() : this._online
            },
            offlineData: function (e) {
                return null == this.options.offlineStorage ? null : e !== t ? this._storage.setItem(e) : this._storage.getItem() || []
            },
            _isServerGrouped: function () {
                var e = this.group() || [];
                return this.options.serverGrouping && e.length
            },
            _pushCreate: function (e) {
                this._push(e, "pushCreate")
            },
            _pushUpdate: function (e) {
                this._push(e, "pushUpdate")
            },
            _pushDestroy: function (e) {
                this._push(e, "pushDestroy")
            },
            _push: function (e, t) {
                var n = this._readData(e);
                n || (n = e),
                this[t](n)
            },
            _flatData: function (e, t) {
                if (e) {
                    if (this._isServerGrouped())
                        return T(e);
                    if (!t)
                        for (var n = 0; n < e.length; n++)
                            e.at(n)
                }
                return e
            },
            parent: ve,
            get: function (e) {
                var t, n, i = this._flatData(this._data);
                for (t = 0,
                n = i.length; t < n; t++)
                    if (i[t].id == e)
                        return i[t]
            },
            getByUid: function (e) {
                var t, n, i = this._flatData(this._data);
                if (i)
                    for (t = 0,
                    n = i.length; t < n; t++)
                        if (i[t].uid == e)
                            return i[t]
            },
            indexOf: function (e) {
                return M(this._data, e)
            },
            at: function (e) {
                return this._data.at(e)
            },
            data: function (e) {
                var n, i = this;
                if (e === t) {
                    if (i._data)
                        for (n = 0; n < i._data.length; n++)
                            i._data.at(n);
                    return i._data
                }
                i._detachObservableParents(),
                i._data = this._observe(e),
                i._pristineData = e.slice(0),
                i._storeData(),
                i._ranges = [],
                i.trigger("reset"),
                i._addRange(i._data),
                i._total = i._data.length,
                i._pristineTotal = i._total,
                i._process(i._data)
            },
            view: function (e) {
                return e === t ? this._view : (this._view = this._observeView(e),
                t)
            },
            _observeView: function (e) {
                var t, n = this;
                return A(e, n._data, n._ranges, n.reader.model || q, n._isServerGrouped()),
                t = new U(e, n.reader.model),
                t.parent = function () {
                    return n.parent()
                }
                ,
                t
            },
            flatView: function () {
                var e = this.group() || [];
                return e.length ? T(this._view) : this._view
            },
            add: function (e) {
                return this.insert(this._data.length, e)
            },
            _createNewModel: function (e) {
                return this.reader.model ? new this.reader.model(e) : e instanceof q ? e : new q(e)
            },
            insert: function (e, t) {
                return t || (t = e,
                e = 0),
                t instanceof G || (t = this._createNewModel(t)),
                this._isServerGrouped() ? this._data.splice(e, 0, this._wrapInEmptyGroup(t)) : this._data.splice(e, 0, t),
                t
            },
            pushCreate: function (e) {
                var t, n, i, r, o, a;
                pe(e) || (e = [e]),
                t = [],
                n = this.options.autoSync,
                this.options.autoSync = !1;
                try {
                    for (i = 0; i < e.length; i++)
                        r = e[i],
                        o = this.add(r),
                        t.push(o),
                        a = o.toJSON(),
                        this._isServerGrouped() && (a = this._wrapInEmptyGroup(a)),
                        this._pristineData.push(a)
                } finally {
                    this.options.autoSync = n
                }
                t.length && this.trigger("push", {
                    type: "create",
                    items: t
                })
            },
            pushUpdate: function (e) {
                var t, n, i, r, o;
                for (pe(e) || (e = [e]),
                t = [],
                n = 0; n < e.length; n++)
                    i = e[n],
                    r = this._createNewModel(i),
                    o = this.get(r.id),
                    o ? (t.push(o),
                    o.accept(i),
                    o.trigger(Fe),
                    this._updatePristineForModel(o, i)) : this.pushCreate(i);
                t.length && this.trigger("push", {
                    type: "update",
                    items: t
                })
            },
            pushDestroy: function (e) {
                var t = this._removeItems(e);
                t.length && this.trigger("push", {
                    type: "destroy",
                    items: t
                })
            },
            _removeItems: function (e) {
                var t, n, i, r, o, a;
                pe(e) || (e = [e]),
                t = [],
                n = this.options.autoSync,
                this.options.autoSync = !1;
                try {
                    for (i = 0; i < e.length; i++)
                        r = e[i],
                        o = this._createNewModel(r),
                        a = !1,
                        this._eachItem(this._data, function (e) {
                            var n, i;
                            for (n = 0; n < e.length; n++)
                                if (i = e.at(n),
                                i.id === o.id) {
                                    t.push(i),
                                    e.splice(n, 1),
                                    a = !0;
                                    break
                                }
                        }),
                        a && (this._removePristineForModel(o),
                        this._destroyed.pop())
                } finally {
                    this.options.autoSync = n
                }
                return t
            },
            remove: function (e) {
                var t, n = this, i = n._isServerGrouped();
                return this._eachItem(n._data, function (r) {
                    if (t = R(r, e),
                    t && i)
                        return t.isNew && t.isNew() || n._destroyed.push(t),
                        !0
                }),
                this._removeModelFromRanges(e),
                this._updateRangesLength(),
                e
            },
            destroyed: function () {
                return this._destroyed
            },
            created: function () {
                var e, t, n = [], i = this._flatData(this._data);
                for (e = 0,
                t = i.length; e < t; e++)
                    i[e].isNew && i[e].isNew() && n.push(i[e]);
                return n
            },
            updated: function () {
                var e, t, n = [], i = this._flatData(this._data);
                for (e = 0,
                t = i.length; e < t; e++)
                    i[e].isNew && !i[e].isNew() && i[e].dirty && n.push(i[e]);
                return n
            },
            sync: function () {
                var t, n = this, i = [], r = [], o = n._destroyed, a = e.Deferred().resolve().promise();
                if (n.online()) {
                    if (!n.reader.model)
                        return a;
                    i = n.created(),
                    r = n.updated(),
                    t = [],
                    n.options.batch && n.transport.submit ? t = n._sendSubmit(i, r, o) : (t.push.apply(t, n._send("create", i)),
                    t.push.apply(t, n._send("update", r)),
                    t.push.apply(t, n._send("destroy", o))),
                    a = e.when.apply(null, t).then(function () {
                        var e, t;
                        for (e = 0,
                        t = arguments.length; e < t; e++)
                            arguments[e] && n._accept(arguments[e]);
                        n._storeData(!0),
                        n._change({
                            action: "sync"
                        }),
                        n.trigger(Ee)
                    })
                } else
                    n._storeData(!0),
                    n._change({
                        action: "sync"
                    });
                return a
            },
            cancelChanges: function (e) {
                var t = this;
                e instanceof _e.data.Model ? t._cancelModel(e) : (t._destroyed = [],
                t._detachObservableParents(),
                t._data = t._observe(t._pristineData),
                t.options.serverPaging && (t._total = t._pristineTotal),
                t._ranges = [],
                t._addRange(t._data),
                t._change(),
                t._markOfflineUpdatesAsDirty())
            },
            _markOfflineUpdatesAsDirty: function () {
                var e = this;
                null != e.options.offlineStorage && e._eachItem(e._data, function (e) {
                    var t, n;
                    for (t = 0; t < e.length; t++)
                        n = e.at(t),
                        "update" != n.__state__ && "create" != n.__state__ || (n.dirty = !0)
                })
            },
            hasChanges: function () {
                var e, t, n = this._flatData(this._data);
                if (this._destroyed.length)
                    return !0;
                for (e = 0,
                t = n.length; e < t; e++)
                    if (n[e].isNew && n[e].isNew() || n[e].dirty)
                        return !0;
                return !1
            },
            _accept: function (t) {
                var n, i = this, r = t.models, o = t.response, a = 0, s = i._isServerGrouped(), l = i._pristineData, d = t.type;
                if (i.trigger(ze, {
                    response: o,
                    type: d
                }),
                o && !he(o)) {
                    if (o = i.reader.parse(o),
                    i._handleCustomErrors(o))
                        return;
                    o = i.reader.data(o),
                    pe(o) || (o = [o])
                } else
                    o = e.map(r, function (e) {
                        return e.toJSON()
                    });
                for ("destroy" === d && (i._destroyed = []),
                a = 0,
                n = r.length; a < n; a++)
                    "destroy" !== d ? (r[a].accept(o[a]),
                    "create" === d ? l.push(s ? i._wrapInEmptyGroup(r[a]) : o[a]) : "update" === d && i._updatePristineForModel(r[a], o[a])) : i._removePristineForModel(r[a])
            },
            _updatePristineForModel: function (e, t) {
                this._executeOnPristineForModel(e, function (e, n) {
                    _e.deepExtend(n[e], t)
                })
            },
            _executeOnPristineForModel: function (e, t) {
                this._eachPristineItem(function (n) {
                    var i = I(n, e);
                    if (i > -1)
                        return t(i, n),
                        !0
                })
            },
            _removePristineForModel: function (e) {
                this._executeOnPristineForModel(e, function (e, t) {
                    t.splice(e, 1)
                })
            },
            _readData: function (e) {
                var t = this._isServerGrouped() ? this.reader.groups : this.reader.data;
                return t.call(this.reader, e)
            },
            _eachPristineItem: function (e) {
                this._eachItem(this._pristineData, e)
            },
            _eachItem: function (e, t) {
                e && e.length && (this._isServerGrouped() ? D(e, t) : t(e))
            },
            _pristineForModel: function (e) {
                var t, n, i = function (i) {
                    if (n = I(i, e),
                    n > -1)
                        return t = i[n],
                        !0
                };
                return this._eachPristineItem(i),
                t
            },
            _cancelModel: function (e) {
                var t = this._pristineForModel(e);
                this._eachItem(this._data, function (n) {
                    var i = M(n, e);
                    i >= 0 && (!t || e.isNew() && !t.__state__ ? n.splice(i, 1) : (n[i].accept(t),
                    "update" == t.__state__ && (n[i].dirty = !0)))
                })
            },
            _submit: function (t, n) {
                var i = this;
                i.trigger(Ie, {
                    type: "submit"
                }),
                i.transport.submit(de({
                    success: function (n, i) {
                        var r = e.grep(t, function (e) {
                            return e.type == i
                        })[0];
                        r && r.resolve({
                            response: n,
                            models: r.models,
                            type: i
                        })
                    },
                    error: function (e, n, r) {
                        for (var o = 0; o < t.length; o++)
                            t[o].reject(e);
                        i.error(e, n, r)
                    }
                }, n))
            },
            _sendSubmit: function (t, n, i) {
                var r = this
                  , o = [];
                return r.options.batch && (t.length && o.push(e.Deferred(function (e) {
                    e.type = "create",
                    e.models = t
                })),
                n.length && o.push(e.Deferred(function (e) {
                    e.type = "update",
                    e.models = n
                })),
                i.length && o.push(e.Deferred(function (e) {
                    e.type = "destroy",
                    e.models = i
                })),
                r._submit(o, {
                    data: {
                        created: r.reader.serialize(b(t)),
                        updated: r.reader.serialize(b(n)),
                        destroyed: r.reader.serialize(b(i))
                    }
                })),
                o
            },
            _promise: function (t, n, i) {
                var r = this;
                return e.Deferred(function (e) {
                    r.trigger(Ie, {
                        type: i
                    }),
                    r.transport[i].call(r.transport, de({
                        success: function (t) {
                            e.resolve({
                                response: t,
                                models: n,
                                type: i
                            })
                        },
                        error: function (t, n, i) {
                            e.reject(t),
                            r.error(t, n, i)
                        }
                    }, t))
                }).promise()
            },
            _send: function (e, t) {
                var n, i, r = this, o = [], a = r.reader.serialize(b(t));
                if (r.options.batch)
                    t.length && o.push(r._promise({
                        data: {
                            models: a
                        }
                    }, t, e));
                else
                    for (n = 0,
                    i = t.length; n < i; n++)
                        o.push(r._promise({
                            data: a[n]
                        }, [t[n]], e));
                return o
            },
            read: function (t) {
                var n = this
                  , i = n._params(t)
                  , r = e.Deferred();
                return n._queueRequest(i, function () {
                    var e = n.trigger(Ie, {
                        type: "read"
                    });
                    e ? (n._dequeueRequest(),
                    r.resolve(e)) : (n.trigger(Me),
                    n._ranges = [],
                    n.trigger("reset"),
                    n.online() ? n.transport.read({
                        data: i,
                        success: function (e) {
                            n._ranges = [],
                            n.success(e, i),
                            r.resolve()
                        },
                        error: function () {
                            var e = je.call(arguments);
                            n.error.apply(n, e),
                            r.reject.apply(r, e)
                        }
                    }) : null != n.options.offlineStorage && (n.success(n.offlineData(), i),
                    r.resolve()))
                }),
                r.promise()
            },
            _readAggregates: function (e) {
                return this.reader.aggregates(e)
            },
            success: function (e) {
                var n, i, r, o, a, s, l, d, u = this, c = u.options;
                if (u.trigger(ze, {
                    response: e,
                    type: "read"
                }),
                u.online()) {
                    if (e = u.reader.parse(e),
                    u._handleCustomErrors(e))
                        return u._dequeueRequest(),
                        t;
                    u._total = u.reader.total(e),
                    u._aggregate && c.serverAggregates && (u._aggregateResult = u._readAggregates(e)),
                    e = u._readData(e),
                    u._destroyed = []
                } else {
                    for (e = u._readData(e),
                    n = [],
                    i = {},
                    r = u.reader.model,
                    o = r ? r.idField : "id",
                    a = 0; a < this._destroyed.length; a++)
                        s = this._destroyed[a][o],
                        i[s] = s;
                    for (a = 0; a < e.length; a++)
                        l = e[a],
                        d = l.__state__,
                        "destroy" == d ? i[l[o]] || this._destroyed.push(this._createNewModel(l)) : n.push(l);
                    e = n,
                    u._total = e.length
                }
                u._pristineTotal = u._total,
                u._pristineData = e.slice(0),
                u._detachObservableParents(),
                u._data = u._observe(e),
                u._markOfflineUpdatesAsDirty(),
                u._storeData(),
                u._addRange(u._data),
                u._process(u._data),
                u._dequeueRequest()
            },
            _detachObservableParents: function () {
                if (this._data && this._shouldDetachObservableParents)
                    for (var e = 0; e < this._data.length; e++)
                        this._data[e].parent && (this._data[e].parent = ve)
            },
            _storeData: function (e) {
                function t(e) {
                    var n, i, r, o = [];
                    for (n = 0; n < e.length; n++)
                        i = e.at(n),
                        r = i.toJSON(),
                        a && i.items ? r.items = t(i.items) : (r.uid = i.uid,
                        s && (i.isNew() ? r.__state__ = "create" : i.dirty && (r.__state__ = "update"))),
                        o.push(r);
                    return o
                }
                var n, i, r, o, a = this._isServerGrouped(), s = this.reader.model;
                if (null != this.options.offlineStorage) {
                    for (n = t(this._data),
                    i = [],
                    r = 0; r < this._destroyed.length; r++)
                        o = this._destroyed[r].toJSON(),
                        o.__state__ = "destroy",
                        i.push(o);
                    this.offlineData(n.concat(i)),
                    e && (this._pristineData = this._readData(n))
                }
            },
            _addRange: function (e) {
                var t = this
                  , n = t._skip || 0
                  , i = n + t._flatData(e, !0).length;
                t._ranges.push({
                    start: n,
                    end: i,
                    data: e,
                    timestamp: (new Date).getTime()
                }),
                t._ranges.sort(function (e, t) {
                    return e.start - t.start
                })
            },
            error: function (e, t, n) {
                this._dequeueRequest(),
                this.trigger(ze, {}),
                this.trigger(Re, {
                    xhr: e,
                    status: t,
                    errorThrown: n
                })
            },
            _params: function (e) {
                var t = this
                  , n = de({
                      take: t.take(),
                      skip: t.skip(),
                      page: t.page(),
                      pageSize: t.pageSize(),
                      sort: t._sort,
                      filter: t._filter,
                      group: t._group,
                      aggregate: t._aggregate
                  }, e);
                return t.options.serverPaging || (delete n.take,
                delete n.skip,
                delete n.page,
                delete n.pageSize),
                t.options.serverGrouping ? t.reader.model && n.group && (n.group = B(n.group, t.reader.model)) : delete n.group,
                t.options.serverFiltering ? t.reader.model && n.filter && (n.filter = N(n.filter, t.reader.model)) : delete n.filter,
                t.options.serverSorting ? t.reader.model && n.sort && (n.sort = B(n.sort, t.reader.model)) : delete n.sort,
                t.options.serverAggregates ? t.reader.model && n.aggregate && (n.aggregate = B(n.aggregate, t.reader.model)) : delete n.aggregate,
                n
            },
            _queueRequest: function (e, n) {
                var i = this;
                i._requestInProgress ? i._pending = {
                    callback: ue(n, i),
                    options: e
                } : (i._requestInProgress = !0,
                i._pending = t,
                n())
            },
            _dequeueRequest: function () {
                var e = this;
                e._requestInProgress = !1,
                e._pending && e._queueRequest(e._pending.options, e._pending.callback)
            },
            _handleCustomErrors: function (e) {
                if (this.reader.errors) {
                    var t = this.reader.errors(e);
                    if (t)
                        return this.trigger(Re, {
                            xhr: null,
                            status: "customerror",
                            errorThrown: "custom error",
                            errors: t
                        }),
                        !0
                }
                return !1
            },
            _shouldWrap: function (e) {
                var t = this.reader.model;
                return !(!t || !e.length) && !(e[0] instanceof t)
            },
            _observe: function (e) {
                var t, n = this, i = n.reader.model;
                return n._shouldDetachObservableParents = !0,
                e instanceof Qe ? (n._shouldDetachObservableParents = !1,
                n._shouldWrap(e) && (e.type = n.reader.model,
                e.wrapAll(e, e))) : (t = n.pageSize() && !n.options.serverPaging ? U : Qe,
                e = new t(e, n.reader.model),
                e.parent = function () {
                    return n.parent()
                }
                ),
                n._isServerGrouped() && S(e, i),
                n._changeHandler && n._data && n._data instanceof Qe ? n._data.unbind(Fe, n._changeHandler) : n._changeHandler = ue(n._change, n),
                e.bind(Fe, n._changeHandler)
            },
            _updateTotalForAction: function (e, t) {
                var n = this
                  , i = parseInt(n._total, 10);
                v(n._total) || (i = parseInt(n._pristineTotal, 10)),
                "add" === e ? i += t.length : "remove" === e ? i -= t.length : "itemchange" === e || "sync" === e || n.options.serverPaging ? "sync" === e && (i = n._pristineTotal = parseInt(n._total, 10)) : i = n._pristineTotal,
                n._total = i
            },
            _change: function (e) {
                var t, n, i, r = this, o = e ? e.action : "";
                if ("remove" === o)
                    for (t = 0,
                    n = e.items.length; t < n; t++)
                        e.items[t].isNew && e.items[t].isNew() || r._destroyed.push(e.items[t]);
                !r.options.autoSync || "add" !== o && "remove" !== o && "itemchange" !== o ? (r._updateTotalForAction(o, e ? e.items : []),
                r._process(r._data, e)) : (i = function (t) {
                    "sync" === t.action && (r.unbind("change", i),
                    r._updateTotalForAction(o, e.items))
                }
                ,
                r.first("change", i),
                r.sync())
            },
            _calculateAggregates: function (e, t) {
                t = t || {};
                var n = new o(e)
                  , i = t.aggregate
                  , r = t.filter;
                return r && (n = n.filter(r)),
                n.aggregate(i)
            },
            _process: function (e, n) {
                var i, r = this, o = {};
                r.options.serverPaging !== !0 && (o.skip = r._skip,
                o.take = r._take || r._pageSize,
                o.skip === t && r._page !== t && r._pageSize !== t && (o.skip = (r._page - 1) * r._pageSize)),
                r.options.serverSorting !== !0 && (o.sort = r._sort),
                r.options.serverFiltering !== !0 && (o.filter = r._filter),
                r.options.serverGrouping !== !0 && (o.group = r._group),
                r.options.serverAggregates !== !0 && (o.aggregate = r._aggregate,
                r._aggregateResult = r._calculateAggregates(e, o)),
                i = r._queryProcess(e, o),
                r.view(i.data),
                i.total === t || r.options.serverFiltering || (r._total = i.total),
                n = n || {},
                n.items = n.items || r._view,
                r.trigger(Fe, n)
            },
            _queryProcess: function (e, t) {
                return o.process(e, t)
            },
            _mergeState: function (e) {
                var n = this;
                return e !== t && (n._pageSize = e.pageSize,
                n._page = e.page,
                n._sort = e.sort,
                n._filter = e.filter,
                n._group = e.group,
                n._aggregate = e.aggregate,
                n._skip = n._currentRangeStart = e.skip,
                n._take = e.take,
                n._skip === t && (n._skip = n._currentRangeStart = n.skip(),
                e.skip = n.skip()),
                n._take === t && n._pageSize !== t && (n._take = n._pageSize,
                e.take = n._take),
                e.sort && (n._sort = e.sort = a(e.sort)),
                e.filter && (n._filter = e.filter = l(e.filter)),
                e.group && (n._group = e.group = f(e.group)),
                e.aggregate && (n._aggregate = e.aggregate = p(e.aggregate))),
                e
            },
            query: function (n) {
                var i, r, o = this.options.serverSorting || this.options.serverPaging || this.options.serverFiltering || this.options.serverGrouping || this.options.serverAggregates;
                return o || (this._data === t || 0 === this._data.length) && !this._destroyed.length ? this.read(this._mergeState(n)) : (r = this.trigger(Ie, {
                    type: "read"
                }),
                r || (this.trigger(Me),
                i = this._queryProcess(this._data, this._mergeState(n)),
                this.options.serverFiltering || (this._total = i.total !== t ? i.total : this._data.length),
                this._aggregateResult = this._calculateAggregates(this._data, n),
                this.view(i.data),
                this.trigger(ze, {
                    type: "read"
                }),
                this.trigger(Fe, {
                    items: i.data
                })),
                e.Deferred().resolve(r).promise())
            },
            fetch: function (e) {
                var t = this
                  , n = function (n) {
                      n !== !0 && be(e) && e.call(t)
                  };
                return this._query().then(n)
            },
            _query: function (e) {
                var t = this;
                return t.query(de({}, {
                    page: t.page(),
                    pageSize: t.pageSize(),
                    sort: t.sort(),
                    filter: t.filter(),
                    group: t.group(),
                    aggregate: t.aggregate()
                }, e))
            },
            next: function (e) {
                var t = this
                  , n = t.page()
                  , i = t.total();
                if (e = e || {},
                n && !(i && n + 1 > t.totalPages()))
                    return t._skip = t._currentRangeStart = n * t.take(),
                    n += 1,
                    e.page = n,
                    t._query(e),
                    n
            },
            prev: function (e) {
                var t = this
                  , n = t.page();
                if (e = e || {},
                n && 1 !== n)
                    return t._skip = t._currentRangeStart = t._skip - t.take(),
                    n -= 1,
                    e.page = n,
                    t._query(e),
                    n
            },
            page: function (e) {
                var n, i = this;
                return e !== t ? (e = Le.max(Le.min(Le.max(e, 1), i.totalPages()), 1),
                i._query({
                    page: e
                }),
                t) : (n = i.skip(),
                n !== t ? Le.round((n || 0) / (i.take() || 1)) + 1 : t)
            },
            pageSize: function (e) {
                var n = this;
                return e !== t ? (n._query({
                    pageSize: e,
                    page: 1
                }),
                t) : n.take()
            },
            sort: function (e) {
                var n = this;
                return e !== t ? (n._query({
                    sort: e
                }),
                t) : n._sort
            },
            filter: function (e) {
                var n = this;
                return e === t ? n._filter : (n.trigger("reset"),
                n._query({
                    filter: e,
                    page: 1
                }),
                t)
            },
            group: function (e) {
                var n = this;
                return e !== t ? (n._query({
                    group: e
                }),
                t) : n._group
            },
            total: function () {
                return parseInt(this._total || 0, 10)
            },
            aggregate: function (e) {
                var n = this;
                return e !== t ? (n._query({
                    aggregate: e
                }),
                t) : n._aggregate
            },
            aggregates: function () {
                var e = this._aggregateResult;
                return he(e) && (e = this._emptyAggregates(this.aggregate())),
                e
            },
            _emptyAggregates: function (e) {
                var t, n, i = {};
                if (!he(e))
                    for (t = {},
                    pe(e) || (e = [e]),
                    n = 0; n < e.length; n++)
                        t[e[n].aggregate] = 0,
                        i[e[n].field] = t;
                return i
            },
            _wrapInEmptyGroup: function (e) {
                var t, n, i, r, o = this.group();
                for (i = o.length - 1,
                r = 0; i >= r; i--)
                    n = o[i],
                    t = {
                        value: e.get(n.field),
                        field: n.field,
                        items: t ? [t] : [e],
                        hasSubgroups: !!t,
                        aggregates: this._emptyAggregates(n.aggregates)
                    };
                return t
            },
            totalPages: function () {
                var e = this
                  , t = e.pageSize() || e.total();
                return Le.ceil((e.total() || 0) / t)
            },
            inRange: function (e, t) {
                var n = this
                  , i = Le.min(e + t, n.total());
                return !n.options.serverPaging && n._data.length > 0 || n._findRange(e, i).length > 0
            },
            lastRange: function () {
                var e = this._ranges;
                return e[e.length - 1] || {
                    start: 0,
                    end: 0,
                    data: []
                }
            },
            firstItemUid: function () {
                var e = this._ranges;
                return e.length && e[0].data.length && e[0].data[0].uid
            },
            enableRequestsInProgress: function () {
                this._skipRequestsInProgress = !1
            },
            _timeStamp: function () {
                return (new Date).getTime()
            },
            range: function (e, n) {
                var i, r, o, a, s, l, d, u;
                if (this._currentRequestTimeStamp = this._timeStamp(),
                this._skipRequestsInProgress = !0,
                e = Le.min(e || 0, this.total()),
                i = this,
                r = Le.max(Le.floor(e / n), 0) * n,
                o = Le.min(r + n, i.total()),
                a = i._findRange(e, Le.min(e + n, i.total())),
                a.length) {
                    i._pending = t,
                    i._skip = e > i.skip() ? Le.min(o, (i.totalPages() - 1) * i.take()) : r,
                    i._currentRangeStart = e,
                    i._take = n,
                    s = i.options.serverPaging,
                    l = i.options.serverSorting,
                    d = i.options.serverFiltering,
                    u = i.options.serverAggregates;
                    try {
                        i.options.serverPaging = !0,
                        i._isServerGrouped() || i.group() && i.group().length || (i.options.serverSorting = !0),
                        i.options.serverFiltering = !0,
                        i.options.serverPaging = !0,
                        i.options.serverAggregates = !0,
                        s && (i._detachObservableParents(),
                        i._data = a = i._observe(a)),
                        i._process(a)
                    } finally {
                        i.options.serverPaging = s,
                        i.options.serverSorting = l,
                        i.options.serverFiltering = d,
                        i.options.serverAggregates = u
                    }
                } else
                    n !== t && (i._rangeExists(r, o) ? r < e && i.prefetch(o, n, function () {
                        i.range(e, n)
                    }) : i.prefetch(r, n, function () {
                        e > r && o < i.total() && !i._rangeExists(o, Le.min(o + n, i.total())) ? i.prefetch(o, n, function () {
                            i.range(e, n)
                        }) : i.range(e, n)
                    }))
            },
            _findRange: function (e, n) {
                var i, r, o, s, l, d, u, c, h, p, m, g, v = this, _ = v._ranges, b = [], k = v.options, w = k.serverSorting || k.serverPaging || k.serverFiltering || k.serverGrouping || k.serverAggregates;
                for (r = 0,
                m = _.length; r < m; r++)
                    if (i = _[r],
                    e >= i.start && e <= i.end) {
                        for (p = 0,
                        o = r; o < m; o++)
                            if (i = _[o],
                            h = v._flatData(i.data, !0),
                            h.length && e + p >= i.start && (d = i.data,
                            u = i.end,
                            w || (g = f(v.group() || []).concat(a(v.sort() || [])),
                            c = v._queryProcess(i.data, {
                                sort: g,
                                filter: v.filter()
                            }),
                            h = d = c.data,
                            c.total !== t && (u = c.total)),
                            s = 0,
                            e + p > i.start && (s = e + p - i.start),
                            l = h.length,
                            u > n && (l -= u - n),
                            p += l - s,
                            b = v._mergeGroups(b, d, s, l),
                            n <= i.end && p == n - e))
                                return b;
                        break
                    }
                return []
            },
            _mergeGroups: function (e, t, n, i) {
                if (this._isServerGrouped()) {
                    var r, o = t.toJSON();
                    return e.length && (r = e[e.length - 1]),
                    C(r, o, n, i),
                    e.concat(o)
                }
                return e.concat(t.slice(n, i))
            },
            skip: function () {
                var e = this;
                return e._skip === t ? e._page !== t ? (e._page - 1) * (e.take() || 1) : t : e._skip
            },
            currentRangeStart: function () {
                return this._currentRangeStart || 0
            },
            take: function () {
                return this._take || this._pageSize
            },
            _prefetchSuccessHandler: function (e, t, n, i) {
                var r = this
                  , o = r._timeStamp();
                return function (a) {
                    var s, l, d, u = !1, c = {
                        start: e,
                        end: t,
                        data: [],
                        timestamp: r._timeStamp()
                    };
                    if (r._dequeueRequest(),
                    r.trigger(ze, {
                        response: a,
                        type: "read"
                    }),
                    a = r.reader.parse(a),
                    d = r._readData(a),
                    d.length) {
                        for (s = 0,
                        l = r._ranges.length; s < l; s++)
                            if (r._ranges[s].start === e) {
                                u = !0,
                                c = r._ranges[s];
                                break
                            }
                        u || r._ranges.push(c)
                    }
                    c.data = r._observe(d),
                    c.end = c.start + r._flatData(c.data, !0).length,
                    r._ranges.sort(function (e, t) {
                        return e.start - t.start
                    }),
                    r._total = r.reader.total(a),
                    (i || o >= r._currentRequestTimeStamp || !r._skipRequestsInProgress) && (n && d.length ? n() : r.trigger(Fe, {}))
                }
            },
            prefetch: function (e, t, n) {
                var i = this
                  , r = Le.min(e + t, i.total())
                  , o = {
                      take: t,
                      skip: e,
                      page: e / t + 1,
                      pageSize: t,
                      sort: i._sort,
                      filter: i._filter,
                      group: i._group,
                      aggregate: i._aggregate
                  };
                i._rangeExists(e, r) ? n && n() : (clearTimeout(i._timeout),
                i._timeout = setTimeout(function () {
                    i._queueRequest(o, function () {
                        i.trigger(Ie, {
                            type: "read"
                        }) ? i._dequeueRequest() : i.transport.read({
                            data: i._params(o),
                            success: i._prefetchSuccessHandler(e, r, n),
                            error: function () {
                                var e = je.call(arguments);
                                i.error.apply(i, e)
                            }
                        })
                    })
                }, 100))
            },
            _multiplePrefetch: function (e, t, n) {
                var i = this
                  , r = Le.min(e + t, i.total())
                  , o = {
                      take: t,
                      skip: e,
                      page: e / t + 1,
                      pageSize: t,
                      sort: i._sort,
                      filter: i._filter,
                      group: i._group,
                      aggregate: i._aggregate
                  };
                i._rangeExists(e, r) ? n && n() : i.trigger(Ie, {
                    type: "read"
                }) || i.transport.read({
                    data: i._params(o),
                    success: i._prefetchSuccessHandler(e, r, n, !0)
                })
            },
            _rangeExists: function (e, t) {
                var n, i, r = this, o = r._ranges;
                for (n = 0,
                i = o.length; n < i; n++)
                    if (o[n].start <= e && o[n].end >= t)
                        return !0;
                return !1
            },
            _removeModelFromRanges: function (e) {
                var t, n, i, r, o;
                for (r = 0,
                o = this._ranges.length; r < o && (i = this._ranges[r],
                this._eachItem(i.data, function (i) {
                    t = R(i, e),
                    t && (n = !0)
                }),
                !n) ; r++)
                    ;
            },
            _updateRangesLength: function () {
                var e, t, n, i, r = 0;
                for (n = 0,
                i = this._ranges.length; n < i; n++)
                    e = this._ranges[n],
                    e.start = e.start - r,
                    t = this._flatData(e.data, !0).length,
                    r = e.end - t,
                    e.end = e.start + t
            }
        }),
        re = {},
        re.create = function (t, n, i) {
            var r, o = t.transport ? e.extend({}, t.transport) : null;
            return o ? (o.read = typeof o.read === ye ? {
                url: o.read
            } : o.read,
            "jsdo" === t.type && (o.dataSource = i),
            t.type && (_e.data.transports = _e.data.transports || {},
            _e.data.schemas = _e.data.schemas || {},
            _e.data.transports[t.type] ? ce(_e.data.transports[t.type]) ? o = de(!0, {}, _e.data.transports[t.type], o) : r = new _e.data.transports[t.type](de(o, {
                data: n
            })) : _e.logToConsole("Unknown DataSource transport type '" + t.type + "'.\nVerify that registration scripts for this type are included after Kendo UI on the page.", "warn"),
            t.schema = de(!0, {}, _e.data.schemas[t.type], t.schema)),
            r || (r = be(o.read) ? o : new ee(o))) : r = new Z({
                data: t.data || []
            }),
            r
        }
        ,
        ie.create = function (e) {
            (pe(e) || e instanceof Qe) && (e = {
                data: e
            });
            var n, i, r, o = e || {}, a = o.data, s = o.fields, l = o.table, d = o.select, u = {};
            if (a || !s || o.transport || (l ? a = L(l, s) : d && (a = P(d, s),
            o.group === t && a[0] && a[0].optgroup !== t && (o.group = "optgroup"))),
            _e.data.Model && s && (!o.schema || !o.schema.model)) {
                for (n = 0,
                i = s.length; n < i; n++)
                    r = s[n],
                    r.type && (u[r.field] = r);
                he(u) || (o.schema = de(!0, o.schema, {
                    model: {
                        fields: u
                    }
                }))
            }
            return o.data = a,
            d = null,
            o.select = null,
            l = null,
            o.table = null,
            o instanceof ie ? o : new ie(o)
        }
        ,
        oe = G.define({
            idField: "id",
            init: function (e) {
                var t = this
                  , n = t.hasChildren || e && e.hasChildren
                  , i = "items"
                  , r = {};
                _e.data.Model.fn.init.call(t, e),
                typeof t.children === ye && (i = t.children),
                r = {
                    schema: {
                        data: i,
                        model: {
                            hasChildren: n,
                            id: t.idField,
                            fields: t.fields
                        }
                    }
                },
                typeof t.children !== ye && de(r, t.children),
                r.data = e,
                n || (n = r.schema.data),
                typeof n === ye && (n = _e.getter(n)),
                be(n) && (t.hasChildren = !!n.call(t, t)),
                t._childrenOptions = r,
                t.hasChildren && t._initChildren(),
                t._loaded = !(!e || !e._loaded)
            },
            _initChildren: function () {
                var e, t, n, i = this;
                i.children instanceof ae || (e = i.children = new ae(i._childrenOptions),
                t = e.transport,
                n = t.parameterMap,
                t.parameterMap = function (e, t) {
                    return e[i.idField || "id"] = i.id,
                    n && (e = n(e, t)),
                    e
                }
                ,
                e.parent = function () {
                    return i
                }
                ,
                e.bind(Fe, function (e) {
                    e.node = e.node || i,
                    i.trigger(Fe, e)
                }),
                e.bind(Re, function (e) {
                    var t = i.parent();
                    t && (e.node = e.node || i,
                    t.trigger(Re, e))
                }),
                i._updateChildrenField())
            },
            append: function (e) {
                this._initChildren(),
                this.loaded(!0),
                this.children.add(e)
            },
            hasChildren: !1,
            level: function () {
                for (var e = this.parentNode(), t = 0; e && e.parentNode;)
                    t++,
                    e = e.parentNode ? e.parentNode() : null;
                return t
            },
            _updateChildrenField: function () {
                var e = this._childrenOptions.schema.data;
                this[e || "items"] = this.children.data()
            },
            _childrenLoaded: function () {
                this._loaded = !0,
                this._updateChildrenField()
            },
            load: function () {
                var n, i, r = {}, o = "_query";
                return this.hasChildren ? (this._initChildren(),
                n = this.children,
                r[this.idField || "id"] = this.id,
                this._loaded || (n._data = t,
                o = "read"),
                n.one(Fe, ue(this._childrenLoaded, this)),
                i = n[o](r)) : this.loaded(!0),
                i || e.Deferred().resolve().promise()
            },
            parentNode: function () {
                var e = this.parent();
                return e.parent()
            },
            loaded: function (e) {
                return e === t ? this._loaded : (this._loaded = e,
                t)
            },
            shouldSerialize: function (e) {
                return G.fn.shouldSerialize.call(this, e) && "children" !== e && "_loaded" !== e && "hasChildren" !== e && "_childrenOptions" !== e
            }
        }),
        ae = ie.extend({
            init: function (e) {
                var t = oe.define({
                    children: e
                });
                ie.fn.init.call(this, de(!0, {}, {
                    schema: {
                        modelBase: t,
                        model: t
                    }
                }, e)),
                this._attachBubbleHandlers()
            },
            _attachBubbleHandlers: function () {
                var e = this;
                e._data.bind(Re, function (t) {
                    e.trigger(Re, t)
                })
            },
            remove: function (e) {
                var t, n = e.parentNode(), i = this;
                return n && n._initChildren && (i = n.children),
                t = ie.fn.remove.call(i, e),
                n && !i.data().length && (n.hasChildren = !1),
                t
            },
            success: O("success"),
            data: O("data"),
            insert: function (e, t) {
                var n = this.parent();
                return n && n._initChildren && (n.hasChildren = !0,
                n._initChildren()),
                ie.fn.insert.call(this, e, t)
            },
            _find: function (e, t) {
                var n, i, r, o, a = this._data;
                if (a) {
                    if (r = ie.fn[e].call(this, t))
                        return r;
                    for (a = this._flatData(this._data),
                    n = 0,
                    i = a.length; n < i; n++)
                        if (o = a[n].children,
                        o instanceof ae && (r = o[e](t)))
                            return r
                }
            },
            get: function (e) {
                return this._find("get", e)
            },
            getByUid: function (e) {
                return this._find("getByUid", e)
            }
        }),
        ae.create = function (e) {
            e = e && e.push ? {
                data: e
            } : e;
            var t = e || {}
              , n = t.data
              , i = t.fields
              , r = t.list;
            return n && n._dataSource ? n._dataSource : (n || !i || t.transport || r && (n = V(r, i)),
            t.data = n,
            t instanceof ae ? t : new ae(t))
        }
        ,
        se = _e.Observable.extend({
            init: function (e, t, n) {
                _e.Observable.fn.init.call(this),
                this._prefetching = !1,
                this.dataSource = e,
                this.prefetch = !n;
                var i = this;
                e.bind("change", function () {
                    i._change()
                }),
                e.bind("reset", function () {
                    i._reset()
                }),
                this._syncWithDataSource(),
                this.setViewSize(t)
            },
            setViewSize: function (e) {
                this.viewSize = e,
                this._recalculate()
            },
            at: function (e) {
                var n = this.pageSize
                  , i = !0;
                return e >= this.total() ? (this.trigger("endreached", {
                    index: e
                }),
                null) : this.useRanges ? this.useRanges ? ((e < this.dataOffset || e >= this.skip + n) && (i = this.range(Math.floor(e / n) * n)),
                e === this.prefetchThreshold && this._prefetch(),
                e === this.midPageThreshold ? this.range(this.nextMidRange, !0) : e === this.nextPageThreshold ? this.range(this.nextFullRange) : e === this.pullBackThreshold && this.range(this.offset === this.skip ? this.previousMidRange : this.previousFullRange),
                i ? this.dataSource.at(e - this.dataOffset) : (this.trigger("endreached", {
                    index: e
                }),
                null)) : t : this.dataSource.view()[e]
            },
            indexOf: function (e) {
                return this.dataSource.data().indexOf(e) + this.dataOffset
            },
            total: function () {
                return parseInt(this.dataSource.total(), 10)
            },
            next: function () {
                var e = this
                  , t = e.pageSize
                  , n = e.skip - e.viewSize + t
                  , i = Le.max(Le.floor(n / t), 0) * t;
                this.offset = n,
                this.dataSource.prefetch(i, t, function () {
                    e._goToRange(n, !0)
                })
            },
            range: function (e, t) {
                if (this.offset === e)
                    return !0;
                var n = this
                  , i = this.pageSize
                  , r = Le.max(Le.floor(e / i), 0) * i
                  , o = this.dataSource;
                return t && (r += i),
                o.inRange(e, i) ? (this.offset = e,
                this._recalculate(),
                this._goToRange(e),
                !0) : !this.prefetch || (o.prefetch(r, i, function () {
                    n.offset = e,
                    n._recalculate(),
                    n._goToRange(e, !0)
                }),
                !1)
            },
            syncDataSource: function () {
                var e = this.offset;
                this.offset = null,
                this.range(e)
            },
            destroy: function () {
                this.unbind()
            },
            _prefetch: function () {
                var e = this
                  , t = this.pageSize
                  , n = this.skip + t
                  , i = this.dataSource;
                i.inRange(n, t) || this._prefetching || !this.prefetch || (this._prefetching = !0,
                this.trigger("prefetching", {
                    skip: n,
                    take: t
                }),
                i.prefetch(n, t, function () {
                    e._prefetching = !1,
                    e.trigger("prefetched", {
                        skip: n,
                        take: t
                    })
                }))
            },
            _goToRange: function (e, t) {
                this.offset === e && (this.dataOffset = e,
                this._expanding = t,
                this.dataSource.range(e, this.pageSize),
                this.dataSource.enableRequestsInProgress())
            },
            _reset: function () {
                this._syncPending = !0
            },
            _change: function () {
                var e = this.dataSource;
                this.length = this.useRanges ? e.lastRange().end : e.view().length,
                this._syncPending && (this._syncWithDataSource(),
                this._recalculate(),
                this._syncPending = !1,
                this.trigger("reset", {
                    offset: this.offset
                })),
                this.trigger("resize"),
                this._expanding && this.trigger("expand"),
                delete this._expanding
            },
            _syncWithDataSource: function () {
                var e = this.dataSource;
                this._firstItemUid = e.firstItemUid(),
                this.dataOffset = this.offset = e.skip() || 0,
                this.pageSize = e.pageSize(),
                this.useRanges = e.options.serverPaging
            },
            _recalculate: function () {
                var e = this.pageSize
                  , t = this.offset
                  , n = this.viewSize
                  , i = Math.ceil(t / e) * e;
                this.skip = i,
                this.midPageThreshold = i + e - 1,
                this.nextPageThreshold = i + n - 1,
                this.prefetchThreshold = i + Math.floor(e / 3 * 2),
                this.pullBackThreshold = this.offset - 1,
                this.nextMidRange = i + e - n,
                this.nextFullRange = i,
                this.previousMidRange = t - n,
                this.previousFullRange = i - e
            }
        }),
        le = _e.Observable.extend({
            init: function (e, t) {
                var n = this;
                _e.Observable.fn.init.call(n),
                this.dataSource = e,
                this.batchSize = t,
                this._total = 0,
                this.buffer = new se(e, 3 * t),
                this.buffer.bind({
                    endreached: function (e) {
                        n.trigger("endreached", {
                            index: e.index
                        })
                    },
                    prefetching: function (e) {
                        n.trigger("prefetching", {
                            skip: e.skip,
                            take: e.take
                        })
                    },
                    prefetched: function (e) {
                        n.trigger("prefetched", {
                            skip: e.skip,
                            take: e.take
                        })
                    },
                    reset: function () {
                        n._total = 0,
                        n.trigger("reset")
                    },
                    resize: function () {
                        n._total = Math.ceil(this.length / n.batchSize),
                        n.trigger("resize", {
                            total: n.total(),
                            offset: this.offset
                        })
                    }
                })
            },
            syncDataSource: function () {
                this.buffer.syncDataSource()
            },
            at: function (e) {
                var t, n, i = this.buffer, r = e * this.batchSize, o = this.batchSize, a = [];
                for (i.offset > r && i.at(i.offset - 1),
                n = 0; n < o && (t = i.at(r + n),
                null !== t) ; n++)
                    a.push(t);
                return a
            },
            total: function () {
                return this._total
            },
            destroy: function () {
                this.buffer.destroy(),
                this.unbind()
            }
        }),
        de(!0, _e.data, {
            readers: {
                json: ne
            },
            Query: o,
            DataSource: ie,
            HierarchicalDataSource: ae,
            Node: oe,
            ObservableObject: q,
            ObservableArray: Qe,
            LazyObservableArray: U,
            LocalTransport: Z,
            RemoteTransport: ee,
            Cache: te,
            DataReader: ne,
            Model: G,
            Buffer: se,
            BatchBuffer: le
        })
    }(window.kendo.jQuery),
    window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, n) {
    (n || t)()
}
),

function(e, define) {
    define("kendo.binder.min", ["kendo.core.min", "kendo.data.min"], e)
}(function() {
    return function(e, t) {
        function n(t, n, i) {
            return v.extend({
                init: function(e, t, n) {
                    var i = this;
                    v.fn.init.call(i, e.element[0], t, n),
                    i.widget = e,
                    i._dataBinding = R(i.dataBinding, i),
                    i._dataBound = R(i.dataBound, i),
                    i._itemChange = R(i.itemChange, i)
                },
                itemChange: function(e) {
                    a(e.item[0], e.data, this._ns(e.ns), [e.data].concat(this.bindings[t]._parents()))
                },
                dataBinding: function(e) {
                    var t, n, i = this.widget, r = e.removedItems || i.items();
                    for (t = 0,
                    n = r.length; t < n; t++)
                        d(r[t], !1)
                },
                _ns: function(t) {
                    t = t || C.ui;
                    var n = [C.ui, C.dataviz.ui, C.mobile.ui];
                    return n.splice(e.inArray(t, n), 1),
                    n.unshift(t),
                    C.rolesFromNamespaces(n)
                },
                dataBound: function(e) {
                    var i, r, o, s, l = this.widget, d = e.addedItems || l.items(), u = l[n], c = C.data.HierarchicalDataSource;
                    if (!(c && u instanceof c) && d.length)
                        for (o = e.addedDataItems || u.flatView(),
                        s = this.bindings[t]._parents(),
                        i = 0,
                        r = o.length; i < r; i++)
                            a(d[i], o[i], this._ns(e.ns), [o[i]].concat(s))
                },
                refresh: function(e) {
                    var r, o, a, s = this, l = s.widget;
                    e = e || {},
                    e.action || (s.destroy(),
                    l.bind("dataBinding", s._dataBinding),
                    l.bind("dataBound", s._dataBound),
                    l.bind("itemChange", s._itemChange),
                    r = s.bindings[t].get(),
                    l[n]instanceof C.data.DataSource && l[n] != r && (r instanceof C.data.DataSource ? l[i](r) : r && r._dataSource ? l[i](r._dataSource) : (l[n].data(r),
                    o = C.ui.Select && l instanceof C.ui.Select,
                    a = C.ui.MultiSelect && l instanceof C.ui.MultiSelect,
                    s.bindings.value && (o || a) && l.value(p(s.bindings.value.get(), l.options.dataValueField)))))
                },
                destroy: function() {
                    var e = this.widget;
                    e.unbind("dataBinding", this._dataBinding),
                    e.unbind("dataBound", this._dataBound),
                    e.unbind("itemChange", this._itemChange)
                }
            })
        }
        function i(e, t) {
            var n = C.initWidget(e, {}, t);
            if (n)
                return new w(n)
        }
        function r(e) {
            var t, n, i, o, a, s, l, d = {};
            for (l = e.match(y),
            t = 0,
            n = l.length; t < n; t++)
                i = l[t],
                o = i.indexOf(":"),
                a = i.substring(0, o),
                s = i.substring(o + 1),
                "{" == s.charAt(0) && (s = r(s)),
                d[a] = s;
            return d
        }
        function o(e, t, n) {
            var i, r = {};
            for (i in e)
                r[i] = new n(t,e[i]);
            return r
        }
        function a(e, t, n, s) {
            var d, u, c, h, p = e.getAttribute("data-" + C.ns + "role"), v = e.getAttribute("data-" + C.ns + "bind"), _ = [], b = !0, w = {};
            if (s = s || [t],
            (p || v) && l(e, !1),
            p && (c = i(e, n)),
            v && (v = r(v.replace(x, "")),
            c || (w = C.parseOptions(e, {
                textField: "",
                valueField: "",
                template: "",
                valueUpdate: L,
                valuePrimitive: !1,
                autoBind: !0
            }),
            w.roles = n,
            c = new k(e,w)),
            c.source = t,
            u = o(v, s, f),
            w.template && (u.template = new g(s,"",w.template)),
            u.click && (v.events = v.events || {},
            v.events.click = v.click,
            u.click.destroy(),
            delete u.click),
            u.source && (b = !1),
            v.attr && (u.attr = o(v.attr, s, f)),
            v.style && (u.style = o(v.style, s, f)),
            v.events && (u.events = o(v.events, s, m)),
            v.css && (u.css = o(v.css, s, f)),
            c.bind(u)),
            c && (e.kendoBindingTarget = c),
            h = e.children,
            b && h) {
                for (d = 0; d < h.length; d++)
                    _[d] = h[d];
                for (d = 0; d < _.length; d++)
                    a(_[d], t, n, s)
            }
        }
        function s(t, n) {
            var i, r, o, s = C.rolesFromNamespaces([].slice.call(arguments, 2));
            for (n = C.observable(n),
            t = e(t),
            i = 0,
            r = t.length; i < r; i++)
                o = t[i],
                1 === o.nodeType && a(o, n, s)
        }
        function l(t, n) {
            var i, r = t.kendoBindingTarget;
            r && (r.destroy(),
            B ? delete t.kendoBindingTarget : t.removeAttribute ? t.removeAttribute("kendoBindingTarget") : t.kendoBindingTarget = null),
            n && (i = C.widgetInstance(e(t)),
            i && typeof i.destroy === P && i.destroy())
        }
        function d(e, t) {
            l(e, t),
            u(e, t)
        }
        function u(e, t) {
            var n, i, r = e.children;
            if (r)
                for (n = 0,
                i = r.length; n < i; n++)
                    d(r[n], t)
        }
        function c(t) {
            var n, i;
            for (t = e(t),
            n = 0,
            i = t.length; n < i; n++)
                d(t[n], !1)
        }
        function h(e, t) {
            var n = e.element
              , i = n[0].kendoBindingTarget;
            i && s(n, i.source, t)
        }
        function p(e, t) {
            var n, i, r = [], o = 0;
            if (!t)
                return e;
            if (e instanceof D) {
                for (n = e.length; o < n; o++)
                    i = e[o],
                    r[o] = i.get ? i.get(t) : i[t];
                e = r
            } else
                e instanceof S && (e = e.get(t));
            return e
        }
        var f, m, g, v, _, b, k, w, y, x, C = window.kendo, T = C.Observable, S = C.data.ObservableObject, D = C.data.ObservableArray, F = {}.toString, E = {}, A = C.Class, R = e.proxy, I = "value", M = "source", z = "events", H = "checked", N = "css", B = !0, P = "function", L = "change";
        !function() {
            var e = document.createElement("a");
            try {
                delete e.test
            } catch (t) {
                B = !1
            }
        }(),
        f = T.extend({
            init: function(e, t) {
                var n = this;
                T.fn.init.call(n),
                n.source = e[0],
                n.parents = e,
                n.path = t,
                n.dependencies = {},
                n.dependencies[t] = !0,
                n.observable = n.source instanceof T,
                n._access = function(e) {
                    n.dependencies[e.field] = !0
                }
                ,
                n.observable && (n._change = function(e) {
                    n.change(e)
                }
                ,
                n.source.bind(L, n._change))
            },
            _parents: function() {
                var t, n = this.parents, i = this.get();
                return i && "function" == typeof i.parent && (t = i.parent(),
                e.inArray(t, n) < 0 && (n = [t].concat(n))),
                n
            },
            change: function(e) {
                var t, n, i = e.field, r = this;
                if ("this" === r.path)
                    r.trigger(L, e);
                else
                    for (t in r.dependencies)
                        if (0 === t.indexOf(i) && (n = t.charAt(i.length),
                        !n || "." === n || "[" === n)) {
                            r.trigger(L, e);
                            break
                        }
            },
            start: function(e) {
                e.bind("get", this._access)
            },
            stop: function(e) {
                e.unbind("get", this._access)
            },
            get: function() {
                var e = this
                  , n = e.source
                  , i = 0
                  , r = e.path
                  , o = n;
                if (!e.observable)
                    return o;
                for (e.start(e.source),
                o = n.get(r); o === t && n; )
                    n = e.parents[++i],
                    n instanceof S && (o = n.get(r));
                if (o === t)
                    for (n = e.source; o === t && n; )
                        n = n.parent(),
                        n instanceof S && (o = n.get(r));
                return "function" == typeof o && (i = r.lastIndexOf("."),
                i > 0 && (n = n.get(r.substring(0, i))),
                e.start(n),
                o = n !== e.source ? o.call(n, e.source) : o.call(n),
                e.stop(n)),
                n && n !== e.source && (e.currentSource = n,
                n.unbind(L, e._change).bind(L, e._change)),
                e.stop(e.source),
                o
            },
            set: function(e) {
                var t = this.currentSource || this.source
                  , n = C.getter(this.path)(t);
                "function" == typeof n ? t !== this.source ? n.call(t, this.source, e) : n.call(t, e) : t.set(this.path, e)
            },
            destroy: function() {
                this.observable && (this.source.unbind(L, this._change),
                this.currentSource && this.currentSource.unbind(L, this._change)),
                this.unbind()
            }
        }),
        m = f.extend({
            get: function() {
                var e, t = this.source, n = this.path, i = 0;
                for (e = t.get(n); !e && t; )
                    t = this.parents[++i],
                    t instanceof S && (e = t.get(n));
                return R(e, t)
            }
        }),
        g = f.extend({
            init: function(e, t, n) {
                var i = this;
                f.fn.init.call(i, e, t),
                i.template = n
            },
            render: function(e) {
                var t;
                return this.start(this.source),
                t = C.render(this.template, e),
                this.stop(this.source),
                t
            }
        }),
        v = A.extend({
            init: function(e, t, n) {
                this.element = e,
                this.bindings = t,
                this.options = n
            },
            bind: function(e, t) {
                var n = this;
                e = t ? e[t] : e,
                e.bind(L, function(e) {
                    n.refresh(t || e)
                }),
                n.refresh(t)
            },
            destroy: function() {}
        }),
        _ = v.extend({
            dataType: function() {
                var e = this.element.getAttribute("data-type") || this.element.type || "text";
                return e.toLowerCase()
            },
            parsedValue: function() {
                return this._parseValue(this.element.value, this.dataType())
            },
            _parseValue: function(e, t) {
                return "date" == t ? e = C.parseDate(e, "yyyy-MM-dd") : "datetime-local" == t ? e = C.parseDate(e, ["yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mm"]) : "number" == t ? e = C.parseFloat(e) : "boolean" == t && (e = e.toLowerCase(),
                e = null !== C.parseFloat(e) ? !!C.parseFloat(e) : "true" === e.toLowerCase()),
                e
            }
        }),
        E.attr = v.extend({
            refresh: function(e) {
                this.element.setAttribute(e, this.bindings.attr[e].get())
            }
        }),
        E.css = v.extend({
            init: function(e, t, n) {
                v.fn.init.call(this, e, t, n),
                this.classes = {}
            },
            refresh: function(t) {
                var n = e(this.element)
                  , i = this.bindings.css[t]
                  , r = this.classes[t] = i.get();
                r ? n.addClass(t) : n.removeClass(t)
            }
        }),
        E.style = v.extend({
            refresh: function(e) {
                this.element.style[e] = this.bindings.style[e].get() || ""
            }
        }),
        E.enabled = v.extend({
            refresh: function() {
                this.bindings.enabled.get() ? this.element.removeAttribute("disabled") : this.element.setAttribute("disabled", "disabled")
            }
        }),
        E.readonly = v.extend({
            refresh: function() {
                this.bindings.readonly.get() ? this.element.setAttribute("readonly", "readonly") : this.element.removeAttribute("readonly")
            }
        }),
        E.disabled = v.extend({
            refresh: function() {
                this.bindings.disabled.get() ? this.element.setAttribute("disabled", "disabled") : this.element.removeAttribute("disabled")
            }
        }),
        E.events = v.extend({
            init: function(e, t, n) {
                v.fn.init.call(this, e, t, n),
                this.handlers = {}
            },
            refresh: function(t) {
                var n = e(this.element)
                  , i = this.bindings.events[t]
                  , r = this.handlers[t];
                r && n.off(t, r),
                r = this.handlers[t] = i.get(),
                n.on(t, i.source, r)
            },
            destroy: function() {
                var t, n = e(this.element);
                for (t in this.handlers)
                    n.off(t, this.handlers[t])
            }
        }),
        E.text = v.extend({
            refresh: function() {
                var t = this.bindings.text.get()
                  , n = this.element.getAttribute("data-format") || "";
                null == t && (t = ""),
                e(this.element).text(C.toString(t, n))
            }
        }),
        E.visible = v.extend({
            refresh: function() {
                this.element.style.display = this.bindings.visible.get() ? "" : "none"
            }
        }),
        E.invisible = v.extend({
            refresh: function() {
                this.element.style.display = this.bindings.invisible.get() ? "none" : ""
            }
        }),
        E.html = v.extend({
            refresh: function() {
                this.element.innerHTML = this.bindings.html.get()
            }
        }),
        E.value = _.extend({
            init: function(t, n, i) {
                _.fn.init.call(this, t, n, i),
                this._change = R(this.change, this),
                this.eventName = i.valueUpdate || L,
                e(this.element).on(this.eventName, this._change),
                this._initChange = !1
            },
            change: function() {
                this._initChange = this.eventName != L,
                this.bindings[I].set(this.parsedValue()),
                this._initChange = !1
            },
            refresh: function() {
                var e, t;
                this._initChange || (e = this.bindings[I].get(),
                null == e && (e = ""),
                t = this.dataType(),
                "date" == t ? e = C.toString(e, "yyyy-MM-dd") : "datetime-local" == t && (e = C.toString(e, "yyyy-MM-ddTHH:mm:ss")),
                this.element.value = e),
                this._initChange = !1
            },
            destroy: function() {
                e(this.element).off(this.eventName, this._change)
            }
        }),
        E.source = v.extend({
            init: function(e, t, n) {
                v.fn.init.call(this, e, t, n);
                var i = this.bindings.source.get();
                i instanceof C.data.DataSource && n.autoBind !== !1 && i.fetch()
            },
            refresh: function(e) {
                var t = this
                  , n = t.bindings.source.get();
                n instanceof D || n instanceof C.data.DataSource ? (e = e || {},
                "add" == e.action ? t.add(e.index, e.items) : "remove" == e.action ? t.remove(e.index, e.items) : "itemchange" != e.action && t.render()) : t.render()
            },
            container: function() {
                var e = this.element;
                return "table" == e.nodeName.toLowerCase() && (e.tBodies[0] || e.appendChild(document.createElement("tbody")),
                e = e.tBodies[0]),
                e
            },
            template: function() {
                var e = this.options
                  , t = e.template
                  , n = this.container().nodeName.toLowerCase();
                return t || (t = "select" == n ? e.valueField || e.textField ? C.format('<option value="#:{0}#">#:{1}#</option>', e.valueField || e.textField, e.textField || e.valueField) : "<option>#:data#</option>" : "tbody" == n ? "<tr><td>#:data#</td></tr>" : "ul" == n || "ol" == n ? "<li>#:data#</li>" : "#:data#",
                t = C.template(t)),
                t
            },
            add: function(t, n) {
                var i, r, o, s, l = this.container(), d = l.cloneNode(!1), u = l.children[t];
                if (e(d).html(C.render(this.template(), n)),
                d.children.length)
                    for (i = this.bindings.source._parents(),
                    r = 0,
                    o = n.length; r < o; r++)
                        s = d.children[0],
                        l.insertBefore(s, u || null),
                        a(s, n[r], this.options.roles, [n[r]].concat(i))
            },
            remove: function(e, t) {
                var n, i, r = this.container();
                for (n = 0; n < t.length; n++)
                    i = r.children[e],
                    d(i, !0),
                    i.parentNode == r && r.removeChild(i)
            },
            render: function() {
                var t, n, i, r = this.bindings.source.get(), o = this.container(), s = this.template();
                if (null != r)
                    if (r instanceof C.data.DataSource && (r = r.view()),
                    r instanceof D || "[object Array]" === F.call(r) || (r = [r]),
                    this.bindings.template) {
                        if (u(o, !0),
                        e(o).html(this.bindings.template.render(r)),
                        o.children.length)
                            for (t = this.bindings.source._parents(),
                            n = 0,
                            i = r.length; n < i; n++)
                                a(o.children[n], r[n], this.options.roles, [r[n]].concat(t))
                    } else
                        e(o).html(C.render(s, r))
            }
        }),
        E.input = {
            checked: _.extend({
                init: function(t, n, i) {
                    _.fn.init.call(this, t, n, i),
                    this._change = R(this.change, this),
                    e(this.element).change(this._change)
                },
                change: function() {
                    var e, t, n, i = this.element, r = this.value();
                    if ("radio" == i.type)
                        r = this.parsedValue(),
                        this.bindings[H].set(r);
                    else if ("checkbox" == i.type)
                        if (e = this.bindings[H].get(),
                        e instanceof D) {
                            if (r = this.parsedValue(),
                            r instanceof Date) {
                                for (n = 0; n < e.length; n++)
                                    if (e[n]instanceof Date && +e[n] === +r) {
                                        t = n;
                                        break
                                    }
                            } else
                                t = e.indexOf(r);
                            t > -1 ? e.splice(t, 1) : e.push(r)
                        } else
                            this.bindings[H].set(r)
                },
                refresh: function() {
                    var e, t, n = this.bindings[H].get(), i = n, r = this.dataType(), o = this.element;
                    if ("checkbox" == o.type)
                        if (i instanceof D) {
                            if (e = -1,
                            n = this.parsedValue(),
                            n instanceof Date) {
                                for (t = 0; t < i.length; t++)
                                    if (i[t]instanceof Date && +i[t] === +n) {
                                        e = t;
                                        break
                                    }
                            } else
                                e = i.indexOf(n);
                            o.checked = e >= 0
                        } else
                            o.checked = i;
                    else
                        "radio" == o.type && null != n && ("date" == r ? n = C.toString(n, "yyyy-MM-dd") : "datetime-local" == r && (n = C.toString(n, "yyyy-MM-ddTHH:mm:ss")),
                        o.checked = o.value === "" + n)
                },
                value: function() {
                    var e = this.element
                      , t = e.value;
                    return "checkbox" == e.type && (t = e.checked),
                    t
                },
                destroy: function() {
                    e(this.element).off(L, this._change)
                }
            })
        },
        E.select = {
            source: E.source.extend({
                refresh: function(n) {
                    var i, r = this, o = r.bindings.source.get();
                    o instanceof D || o instanceof C.data.DataSource ? (n = n || {},
                    "add" == n.action ? r.add(n.index, n.items) : "remove" == n.action ? r.remove(n.index, n.items) : "itemchange" != n.action && n.action !== t || (r.render(),
                    r.bindings.value && r.bindings.value && (i = p(r.bindings.value.get(), e(r.element).data("valueField")),
                    null === i ? r.element.selectedIndex = -1 : r.element.value = i))) : r.render()
                }
            }),
            value: _.extend({
                init: function(t, n, i) {
                    _.fn.init.call(this, t, n, i),
                    this._change = R(this.change, this),
                    e(this.element).change(this._change)
                },
                parsedValue: function() {
                    var e, t, n, i, r = this.dataType(), o = [];
                    for (n = 0,
                    i = this.element.options.length; n < i; n++)
                        t = this.element.options[n],
                        t.selected && (e = t.attributes.value,
                        e = e && e.specified ? t.value : t.text,
                        o.push(this._parseValue(e, r)));
                    return o
                },
                change: function() {
                    var e, n, i, r, o, a, s, l, d = [], u = this.element, c = this.options.valueField || this.options.textField, h = this.options.valuePrimitive;
                    for (o = 0,
                    a = u.options.length; o < a; o++)
                        n = u.options[o],
                        n.selected && (r = n.attributes.value,
                        r = r && r.specified ? n.value : n.text,
                        d.push(c ? r : this._parseValue(r, this.dataType())));
                    if (c)
                        for (e = this.bindings.source.get(),
                        e instanceof C.data.DataSource && (e = e.view()),
                        i = 0; i < d.length; i++)
                            for (o = 0,
                            a = e.length; o < a; o++)
                                if (s = e[o].get(c),
                                l = s + "" === d[i]) {
                                    d[i] = e[o];
                                    break
                                }
                    r = this.bindings[I].get(),
                    r instanceof D ? r.splice.apply(r, [0, r.length].concat(d)) : this.bindings[I].set(h || !(r instanceof S || null === r || r === t) && c ? d[0].get(c) : d[0])
                },
                refresh: function() {
                    var e, t, n, i = this.element, r = i.options, o = this.bindings[I].get(), a = o, s = this.options.valueField || this.options.textField, l = !1, d = this.dataType();
                    for (a instanceof D || (a = new D([o])),
                    i.selectedIndex = -1,
                    n = 0; n < a.length; n++)
                        for (o = a[n],
                        s && o instanceof S && (o = o.get(s)),
                        "date" == d ? o = C.toString(a[n], "yyyy-MM-dd") : "datetime-local" == d && (o = C.toString(a[n], "yyyy-MM-ddTHH:mm:ss")),
                        e = 0; e < r.length; e++)
                            t = r[e].value,
                            "" === t && "" !== o && (t = r[e].text),
                            null != o && t == "" + o && (r[e].selected = !0,
                            l = !0)
                },
                destroy: function() {
                    e(this.element).off(L, this._change)
                }
            })
        },
        E.widget = {
            events: v.extend({
                init: function(e, t, n) {
                    v.fn.init.call(this, e.element[0], t, n),
                    this.widget = e,
                    this.handlers = {}
                },
                refresh: function(e) {
                    var t = this.bindings.events[e]
                      , n = this.handlers[e];
                    n && this.widget.unbind(e, n),
                    n = t.get(),
                    this.handlers[e] = function(e) {
                        e.data = t.source,
                        n(e),
                        e.data === t.source && delete e.data
                    }
                    ,
                    this.widget.bind(e, this.handlers[e])
                },
                destroy: function() {
                    var e;
                    for (e in this.handlers)
                        this.widget.unbind(e, this.handlers[e])
                }
            }),
            checked: v.extend({
                init: function(e, t, n) {
                    v.fn.init.call(this, e.element[0], t, n),
                    this.widget = e,
                    this._change = R(this.change, this),
                    this.widget.bind(L, this._change)
                },
                change: function() {
                    this.bindings[H].set(this.value())
                },
                refresh: function() {
                    this.widget.check(this.bindings[H].get() === !0)
                },
                value: function() {
                    var e = this.element
                      , t = e.value;
                    return "on" != t && "off" != t || (t = e.checked),
                    t
                },
                destroy: function() {
                    this.widget.unbind(L, this._change)
                }
            }),
            visible: v.extend({
                init: function(e, t, n) {
                    v.fn.init.call(this, e.element[0], t, n),
                    this.widget = e
                },
                refresh: function() {
                    var e = this.bindings.visible.get();
                    this.widget.wrapper[0].style.display = e ? "" : "none"
                }
            }),
            invisible: v.extend({
                init: function(e, t, n) {
                    v.fn.init.call(this, e.element[0], t, n),
                    this.widget = e
                },
                refresh: function() {
                    var e = this.bindings.invisible.get();
                    this.widget.wrapper[0].style.display = e ? "none" : ""
                }
            }),
            enabled: v.extend({
                init: function(e, t, n) {
                    v.fn.init.call(this, e.element[0], t, n),
                    this.widget = e
                },
                refresh: function() {
                    this.widget.enable && this.widget.enable(this.bindings.enabled.get())
                }
            }),
            disabled: v.extend({
                init: function(e, t, n) {
                    v.fn.init.call(this, e.element[0], t, n),
                    this.widget = e
                },
                refresh: function() {
                    this.widget.enable && this.widget.enable(!this.bindings.disabled.get())
                }
            }),
            source: n("source", "dataSource", "setDataSource"),
            value: v.extend({
                init: function(t, n, i) {
                    v.fn.init.call(this, t.element[0], n, i),
                    this.widget = t,
                    this._change = e.proxy(this.change, this),
                    this.widget.first(L, this._change);
                    var r = this.bindings.value.get();
                    this._valueIsObservableObject = !i.valuePrimitive && (null == r || r instanceof S),
                    this._valueIsObservableArray = r instanceof D,
                    this._initChange = !1
                },
                _source: function() {
                    var e;
                    return this.widget.dataItem && (e = this.widget.dataItem(),
                    e && e instanceof S) ? [e] : (this.bindings.source && (e = this.bindings.source.get()),
                    (!e || e instanceof C.data.DataSource) && (e = this.widget.dataSource.flatView()),
                    e)
                },
                change: function() {
                    var e, t, n, i, r, o, a, s = this.widget.value(), l = this.options.dataValueField || this.options.dataTextField, d = "[object Array]" === F.call(s), u = this._valueIsObservableObject, c = [];
                    if (this._initChange = !0,
                    l)
                        if ("" === s && (u || this.options.valuePrimitive))
                            s = null;
                        else {
                            for (a = this._source(),
                            d && (t = s.length,
                            c = s.slice(0)),
                            r = 0,
                            o = a.length; r < o; r++)
                                if (n = a[r],
                                i = n.get(l),
                                d) {
                                    for (e = 0; e < t; e++)
                                        if (i == c[e]) {
                                            c[e] = n;
                                            break
                                        }
                                } else if (i == s) {
                                    s = u ? n : i;
                                    break
                                }
                            c[0] && (s = this._valueIsObservableArray ? c : u || !l ? c[0] : c[0].get(l))
                        }
                    this.bindings.value.set(s),
                    this._initChange = !1
                },
                refresh: function() {
                    var e, n, i, r, o, a, s, l, d;
                    if (!this._initChange) {
                        if (e = this.widget,
                        n = e.options,
                        i = n.dataTextField,
                        r = n.dataValueField || i,
                        o = this.bindings.value.get(),
                        a = n.text || "",
                        s = 0,
                        d = [],
                        o === t && (o = null),
                        r)
                            if (o instanceof D) {
                                for (l = o.length; s < l; s++)
                                    d[s] = o[s].get(r);
                                o = d
                            } else
                                o instanceof S && (a = o.get(i),
                                o = o.get(r));
                        n.autoBind !== !1 || n.cascadeFrom || !e.listView || e.listView.bound() ? e.value(o) : (i !== r || a || (a = o),
                        a || !o && 0 !== o || !n.valuePrimitive ? e._preselect(o, a) : e.value(o))
                    }
                    this._initChange = !1
                },
                destroy: function() {
                    this.widget.unbind(L, this._change)
                }
            }),
            gantt: {
                dependencies: n("dependencies", "dependencies", "setDependenciesDataSource")
            },
            multiselect: {
                value: v.extend({
                    init: function(t, n, i) {
                        v.fn.init.call(this, t.element[0], n, i),
                        this.widget = t,
                        this._change = e.proxy(this.change, this),
                        this.widget.first(L, this._change),
                        this._initChange = !1
                    },
                    change: function() {
                        var e, n, i, r, o, a, s, l, d, u = this, c = u.bindings[I].get(), h = u.options.valuePrimitive, p = h ? u.widget.value() : u.widget.dataItems(), f = this.options.dataValueField || this.options.dataTextField;
                        if (p = p.slice(0),
                        u._initChange = !0,
                        c instanceof D) {
                            for (e = [],
                            n = p.length,
                            i = 0,
                            r = 0,
                            o = c[i],
                            a = !1; o !== t; ) {
                                for (d = !1,
                                r = 0; r < n; r++)
                                    if (h ? a = p[r] == o : (l = p[r],
                                    l = l.get ? l.get(f) : l,
                                    a = l == (o.get ? o.get(f) : o)),
                                    a) {
                                        p.splice(r, 1),
                                        n -= 1,
                                        d = !0;
                                        break
                                    }
                                d ? i += 1 : (e.push(o),
                                b(c, i, 1),
                                s = i),
                                o = c[i]
                            }
                            b(c, c.length, 0, p),
                            e.length && c.trigger("change", {
                                action: "remove",
                                items: e,
                                index: s
                            }),
                            p.length && c.trigger("change", {
                                action: "add",
                                items: p,
                                index: c.length - 1
                            })
                        } else
                            u.bindings[I].set(p);
                        u._initChange = !1
                    },
                    refresh: function() {
                        if (!this._initChange) {
                            var e, n, i = this.options, r = this.widget, o = i.dataValueField || i.dataTextField, a = this.bindings.value.get(), s = a, l = 0, d = [];
                            if (a === t && (a = null),
                            o)
                                if (a instanceof D) {
                                    for (e = a.length; l < e; l++)
                                        n = a[l],
                                        d[l] = n.get ? n.get(o) : n;
                                    a = d
                                } else
                                    a instanceof S && (a = a.get(o));
                            i.autoBind !== !1 || i.valuePrimitive === !0 || r._isBound() ? r.value(a) : r._preselect(s, a)
                        }
                    },
                    destroy: function() {
                        this.widget.unbind(L, this._change)
                    }
                })
            },
            scheduler: {
                source: n("source", "dataSource", "setDataSource").extend({
                    dataBound: function(e) {
                        var t, n, i, r, o = this.widget, s = e.addedItems || o.items();
                        if (s.length)
                            for (i = e.addedDataItems || o.dataItems(),
                            r = this.bindings.source._parents(),
                            t = 0,
                            n = i.length; t < n; t++)
                                a(s[t], i[t], this._ns(e.ns), [i[t]].concat(r))
                    }
                })
            }
        },
        b = function(e, t, n, i) {
            var r, o, a, s, l;
            if (i = i || [],
            n = n || 0,
            r = i.length,
            o = e.length,
            a = [].slice.call(e, t + n),
            s = a.length,
            r) {
                for (r = t + r,
                l = 0; t < r; t++)
                    e[t] = i[l],
                    l++;
                e.length = r
            } else if (n)
                for (e.length = t,
                n += t; t < n; )
                    delete e[--n];
            if (s) {
                for (s = t + s,
                l = 0; t < s; t++)
                    e[t] = a[l],
                    l++;
                e.length = s
            }
            for (t = e.length; t < o; )
                delete e[t],
                t++
        }
        ,
        k = A.extend({
            init: function(e, t) {
                this.target = e,
                this.options = t,
                this.toDestroy = []
            },
            bind: function(e) {
                var t, n, i, r, o, a, s = this instanceof w, l = this.binders();
                for (t in e)
                    t == I ? n = !0 : t == M ? i = !0 : t != z || s ? t == H ? o = !0 : t == N ? a = !0 : this.applyBinding(t, e, l) : r = !0;
                i && this.applyBinding(M, e, l),
                n && this.applyBinding(I, e, l),
                o && this.applyBinding(H, e, l),
                r && !s && this.applyBinding(z, e, l),
                a && !s && this.applyBinding(N, e, l)
            },
            binders: function() {
                return E[this.target.nodeName.toLowerCase()] || {}
            },
            applyBinding: function(e, t, n) {
                var i, r = n[e] || E[e], o = this.toDestroy, a = t[e];
                if (r)
                    if (r = new r(this.target,t,this.options),
                    o.push(r),
                    a instanceof f)
                        r.bind(a),
                        o.push(a);
                    else
                        for (i in a)
                            r.bind(a, i),
                            o.push(a[i]);
                else if ("template" !== e)
                    throw Error("The " + e + " binding is not supported by the " + this.target.nodeName.toLowerCase() + " element")
            },
            destroy: function() {
                var e, t, n = this.toDestroy;
                for (e = 0,
                t = n.length; e < t; e++)
                    n[e].destroy()
            }
        }),
        w = k.extend({
            binders: function() {
                return E.widget[this.target.options.name.toLowerCase()] || {}
            },
            applyBinding: function(e, t, n) {
                var i, r = n[e] || E.widget[e], o = this.toDestroy, a = t[e];
                if (!r)
                    throw Error("The " + e + " binding is not supported by the " + this.target.options.name + " widget");
                if (r = new r(this.target,t,this.target.options),
                o.push(r),
                a instanceof f)
                    r.bind(a),
                    o.push(a);
                else
                    for (i in a)
                        r.bind(a, i),
                        o.push(a[i])
            }
        }),
        y = /[A-Za-z0-9_\-]+:(\{([^}]*)\}|[^,}]+)/g,
        x = /\s/g,
        C.unbind = c,
        C.bind = s,
        C.data.binders = E,
        C.data.Binder = v,
        C.notify = h,
        C.observable = function(e) {
            return e instanceof S || (e = new S(e)),
            e
        }
        ,
        C.observableHierarchy = function(e) {
            function t(e) {
                var n, i;
                for (n = 0; n < e.length; n++)
                    e[n]._initChildren(),
                    i = e[n].children,
                    i.fetch(),
                    e[n].items = i.data(),
                    t(e[n].items)
            }
            var n = C.data.HierarchicalDataSource.create(e);
            return n.fetch(),
            t(n.data()),
            n._data._dataSource = n,
            n._data
        }
    }(window.kendo.jQuery),
    window.kendo
}, "function" == typeof define && define.amd ? define : function(e, t, n) {
    (n || t)()
}
),


function(e, define) {
    define("kendo.core.min", ["jquery"], e)
}(function() {
    return function(e, t, n) {
        function i() {}
        function r(e, t) {
            if (t)
                return "'" + e.split("'").join("\\'").split('\\"').join('\\\\\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") + "'";
            var n = e.charAt(0)
              , i = e.substring(1);
            return "=" === n ? "+(" + i + ")+" : ":" === n ? "+$kendoHtmlEncode(" + i + ")+" : ";" + e + ";$kendoOutput+="
        }
        function o(e, t, n) {
            return e += "",
            t = t || 2,
            n = t - e.length,
            n ? W[t].substring(0, n) + e : e
        }
        function a(e) {
            var t = e.css(ve.support.transitions.css + "box-shadow") || e.css("box-shadow")
              , n = t ? t.match(Fe) || [0, 0, 0, 0, 0] : [0, 0, 0, 0, 0]
              , i = xe.max(+n[3], +(n[4] || 0));
            return {
                left: -n[1] + i,
                right: +n[1] + i,
                bottom: +n[2] + i
            }
        }
        function s(t, n) {
            var i, r, o, a, s, l, d, u = Te.browser, c = ve._outerWidth, h = ve._outerHeight;
            return t.parent().hasClass("k-animation-container") ? (l = t.parent(".k-animation-container"),
            d = l[0].style,
            l.is(":hidden") && l.show(),
            i = Se.test(d.width) || Se.test(d.height),
            i || l.css({
                width: c(t),
                height: h(t),
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            })) : (r = t[0].style.width,
            o = t[0].style.height,
            a = Se.test(r),
            s = Se.test(o),
            i = a || s,
            !a && (!n || n && r) && (r = c(t)),
            !s && (!n || n && o) && (o = h(t)),
            t.wrap(e("<div/>").addClass("k-animation-container").css({
                width: r,
                height: o
            })),
            i && t.css({
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            })),
            u.msie && xe.floor(u.version) <= 7 && (t.css({
                zoom: 1
            }),
            t.children(".k-menu").width(t.width())),
            t.parent()
        }
        function l(e) {
            var t = 1
              , n = arguments.length;
            for (t = 1; t < n; t++)
                d(e, arguments[t]);
            return e
        }
        function d(e, t) {
            var n, i, r, o, a, s = ve.data.ObservableArray, l = ve.data.LazyObservableArray, u = ve.data.DataSource, c = ve.data.HierarchicalDataSource;
            for (n in t)
                i = t[n],
                r = typeof i,
                o = r === Me && null !== i ? i.constructor : null,
                o && o !== Array && o !== s && o !== l && o !== u && o !== c && o !== RegExp ? i instanceof Date ? e[n] = new Date(i.getTime()) : I(i.clone) ? e[n] = i.clone() : (a = e[n],
                e[n] = typeof a === Me ? a || {} : {},
                d(e[n], i)) : r !== Ne && (e[n] = i);
            return e
        }
        function u(e, t, i) {
            for (var r in t)
                if (t.hasOwnProperty(r) && t[r].test(e))
                    return r;
            return i !== n ? i : e
        }
        function c(e) {
            return e.replace(/([a-z][A-Z])/g, function(e) {
                return e.charAt(0) + "-" + e.charAt(1).toLowerCase()
            })
        }
        function h(e) {
            return e.replace(/\-(\w)/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        function p(t, n) {
            var i, r = {};
            return document.defaultView && document.defaultView.getComputedStyle ? (i = document.defaultView.getComputedStyle(t, ""),
            n && e.each(n, function(e, t) {
                r[t] = i.getPropertyValue(t)
            })) : (i = t.currentStyle,
            n && e.each(n, function(e, t) {
                r[t] = i[h(t)]
            })),
            ve.size(r) || (r = i),
            r
        }
        function f(e) {
            if (e && e.className && "string" == typeof e.className && e.className.indexOf("k-auto-scrollable") > -1)
                return !0;
            var t = p(e, ["overflow"]).overflow;
            return "auto" == t || "scroll" == t
        }
        function m(t, i) {
            var r, o = Te.browser.webkit, a = Te.browser.mozilla, s = t instanceof e ? t[0] : t;
            if (t)
                return r = Te.isRtl(t),
                i === n ? r && o ? s.scrollWidth - s.clientWidth - s.scrollLeft : Math.abs(s.scrollLeft) : (s.scrollLeft = r && o ? s.scrollWidth - s.clientWidth - i : r && a ? -i : i,
                n)
        }
        function g(e) {
            var t, n = 0;
            for (t in e)
                e.hasOwnProperty(t) && "toJSON" != t && n++;
            return n
        }
        function v(e, n, i) {
            var r, o, a;
            return n || (n = "offset"),
            r = e[n](),
            o = {
                top: r.top,
                right: r.right,
                bottom: r.bottom,
                left: r.left
            },
            Te.browser.msie && (Te.pointers || Te.msPointers) && !i && (a = Te.isRtl(e) ? 1 : -1,
            o.top -= t.pageYOffset + a * document.documentElement.scrollTop,
            o.left -= t.pageXOffset + a * document.documentElement.scrollLeft),
            o
        }
        function _(e) {
            var t = {};
            return be("string" == typeof e ? e.split(" ") : e, function(e) {
                t[e] = this
            }),
            t
        }
        function b(e) {
            return new ve.effects.Element(e)
        }
        function k(e, t, n, i) {
            return typeof e === Re && (I(t) && (i = t,
            t = 400,
            n = !1),
            I(n) && (i = n,
            n = !1),
            typeof t === He && (n = t,
            t = 400),
            e = {
                effects: e,
                duration: t,
                reverse: n,
                complete: i
            }),
            _e({
                effects: {},
                duration: 400,
                reverse: !1,
                init: ye,
                teardown: ye,
                hide: !1
            }, e, {
                completeCallback: e.complete,
                complete: ye
            })
        }
        function w(t, n, i, r, o) {
            for (var a, s = 0, l = t.length; s < l; s++)
                a = e(t[s]),
                a.queue(function() {
                    q.promise(a, k(n, i, r, o))
                });
            return t
        }
        function y(e, t, n, i) {
            return t && (t = t.split(" "),
            be(t, function(t, n) {
                e.toggleClass(n, i)
            })),
            e
        }
        function x(e) {
            return ("" + e).replace(j, "&amp;").replace($, "&lt;").replace(K, "&gt;").replace(G, "&quot;").replace(Y, "&#39;")
        }
        function C(e, t) {
            var i;
            return 0 === t.indexOf("data") && (t = t.substring(4),
            t = t.charAt(0).toLowerCase() + t.substring(1)),
            t = t.replace(re, "-$1"),
            i = e.getAttribute("data-" + ve.ns + t),
            null === i ? i = n : "null" === i ? i = null : "true" === i ? i = !0 : "false" === i ? i = !1 : Ee.test(i) ? i = parseFloat(i) : ne.test(i) && !ie.test(i) && (i = Function("return (" + i + ")")()),
            i
        }
        function T(t, i) {
            var r, o, a = {};
            for (r in i)
                o = C(t, r),
                o !== n && (te.test(r) && (o = "string" == typeof o ? ve.template(e("#" + o).html()) : t.getAttribute(r)),
                a[r] = o);
            return a
        }
        function S(t, n) {
            return e.contains(t, n) ? -1 : 1
        }
        function D() {
            var t = e(this);
            return e.inArray(t.attr("data-" + ve.ns + "role"), ["slider", "rangeslider"]) > -1 || t.is(":visible")
        }
        function F(e, t) {
            var n = e.nodeName.toLowerCase();
            return (/input|select|textarea|button|object/.test(n) ? !e.disabled : "a" === n ? e.href || t : t) && E(e)
        }
        function E(t) {
            return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
                return "hidden" === e.css(this, "visibility")
            }).length
        }
        function A(e, t) {
            return new A.fn.init(e,t)
        }
        var R, I, M, z, H, N, B, P, L, O, V, W, U, q, j, $, G, Y, K, Q, X, J, Z, ee, te, ne, ie, re, oe, ae, se, le, de, ue, ce, he, pe, fe, me, ge, ve = t.kendo = t.kendo || {
            cultures: {}
        }, _e = e.extend, be = e.each, ke = e.isArray, we = e.proxy, ye = e.noop, xe = Math, Ce = t.JSON || {}, Te = {}, Se = /%/, De = /\{(\d+)(:[^\}]+)?\}/g, Fe = /(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+)?/i, Ee = /^(\+|-?)\d+(\.?)\d*$/, Ae = "function", Re = "string", Ie = "number", Me = "object", ze = "null", He = "boolean", Ne = "undefined", Be = {}, Pe = {}, Le = [].slice;
        ve.version = "2017.1.223".replace(/^\s+|\s+$/g, ""),
        i.extend = function(e) {
            var t, n, i = function() {}, r = this, o = e && e.init ? e.init : function() {
                r.apply(this, arguments)
            }
            ;
            i.prototype = r.prototype,
            n = o.fn = o.prototype = new i;
            for (t in e)
                n[t] = null != e[t] && e[t].constructor === Object ? _e(!0, {}, i.prototype[t], e[t]) : e[t];
            return n.constructor = o,
            o.extend = r.extend,
            o
        }
        ,
        i.prototype._initOptions = function(e) {
            this.options = l({}, this.options, e)
        }
        ,
        I = ve.isFunction = function(e) {
            return "function" == typeof e
        }
        ,
        M = function() {
            this._defaultPrevented = !0
        }
        ,
        z = function() {
            return this._defaultPrevented === !0
        }
        ,
        H = i.extend({
            init: function() {
                this._events = {}
            },
            bind: function(e, t, i) {
                var r, o, a, s, l, d = this, u = typeof e === Re ? [e] : e, c = typeof t === Ae;
                if (t === n) {
                    for (r in e)
                        d.bind(r, e[r]);
                    return d
                }
                for (r = 0,
                o = u.length; r < o; r++)
                    e = u[r],
                    s = c ? t : t[e],
                    s && (i && (a = s,
                    s = function() {
                        d.unbind(e, s),
                        a.apply(d, arguments)
                    }
                    ,
                    s.original = a),
                    l = d._events[e] = d._events[e] || [],
                    l.push(s));
                return d
            },
            one: function(e, t) {
                return this.bind(e, t, !0)
            },
            first: function(e, t) {
                var n, i, r, o, a = this, s = typeof e === Re ? [e] : e, l = typeof t === Ae;
                for (n = 0,
                i = s.length; n < i; n++)
                    e = s[n],
                    r = l ? t : t[e],
                    r && (o = a._events[e] = a._events[e] || [],
                    o.unshift(r));
                return a
            },
            trigger: function(e, t) {
                var n, i, r = this, o = r._events[e];
                if (o) {
                    for (t = t || {},
                    t.sender = r,
                    t._defaultPrevented = !1,
                    t.preventDefault = M,
                    t.isDefaultPrevented = z,
                    o = o.slice(),
                    n = 0,
                    i = o.length; n < i; n++)
                        o[n].call(r, t);
                    return t._defaultPrevented === !0
                }
                return !1
            },
            unbind: function(e, t) {
                var i, r = this, o = r._events[e];
                if (e === n)
                    r._events = {};
                else if (o)
                    if (t)
                        for (i = o.length - 1; i >= 0; i--)
                            o[i] !== t && o[i].original !== t || o.splice(i, 1);
                    else
                        r._events[e] = [];
                return r
            }
        }),
        N = /^\w+/,
        B = /\$\{([^}]*)\}/g,
        P = /\\\}/g,
        L = /__CURLY__/g,
        O = /\\#/g,
        V = /__SHARP__/g,
        W = ["", "0", "00", "000", "0000"],
        R = {
            paramName: "data",
            useWithBlock: !0,
            render: function(e, t) {
                var n, i, r = "";
                for (n = 0,
                i = t.length; n < i; n++)
                    r += e(t[n]);
                return r
            },
            compile: function(e, t) {
                var n, i, o, a = _e({}, this, t), s = a.paramName, l = s.match(N)[0], d = a.useWithBlock, u = "var $kendoOutput, $kendoHtmlEncode = kendo.htmlEncode;";
                if (I(e))
                    return e;
                for (u += d ? "with(" + s + "){" : "",
                u += "$kendoOutput=",
                i = e.replace(P, "__CURLY__").replace(B, "#=$kendoHtmlEncode($1)#").replace(L, "}").replace(O, "__SHARP__").split("#"),
                o = 0; o < i.length; o++)
                    u += r(i[o], o % 2 === 0);
                u += d ? ";}" : ";",
                u += "return $kendoOutput;",
                u = u.replace(V, "#");
                try {
                    return n = Function(l, u),
                    n._slotCount = Math.floor(i.length / 2),
                    n
                } catch (c) {
                    throw Error(ve.format("Invalid template:'{0}' Generated code:'{1}'", e, u))
                }
            }
        },
        function() {
            function e(e) {
                return a.lastIndex = 0,
                a.test(e) ? '"' + e.replace(a, function(e) {
                    var t = s[e];
                    return typeof t === Re ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + e + '"'
            }
            function t(o, a) {
                var s, d, u, c, h, p, f = n, m = a[o];
                if (m && typeof m === Me && typeof m.toJSON === Ae && (m = m.toJSON(o)),
                typeof r === Ae && (m = r.call(a, o, m)),
                p = typeof m,
                p === Re)
                    return e(m);
                if (p === Ie)
                    return isFinite(m) ? m + "" : ze;
                if (p === He || p === ze)
                    return m + "";
                if (p === Me) {
                    if (!m)
                        return ze;
                    if (n += i,
                    h = [],
                    "[object Array]" === l.apply(m)) {
                        for (c = m.length,
                        s = 0; s < c; s++)
                            h[s] = t(s, m) || ze;
                        return u = 0 === h.length ? "[]" : n ? "[\n" + n + h.join(",\n" + n) + "\n" + f + "]" : "[" + h.join(",") + "]",
                        n = f,
                        u
                    }
                    if (r && typeof r === Me)
                        for (c = r.length,
                        s = 0; s < c; s++)
                            typeof r[s] === Re && (d = r[s],
                            u = t(d, m),
                            u && h.push(e(d) + (n ? ": " : ":") + u));
                    else
                        for (d in m)
                            Object.hasOwnProperty.call(m, d) && (u = t(d, m),
                            u && h.push(e(d) + (n ? ": " : ":") + u));
                    return u = 0 === h.length ? "{}" : n ? "{\n" + n + h.join(",\n" + n) + "\n" + f + "}" : "{" + h.join(",") + "}",
                    n = f,
                    u
                }
            }
            var n, i, r, a = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, s = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            }, l = {}.toString;
            typeof Date.prototype.toJSON !== Ae && (Date.prototype.toJSON = function() {
                var e = this;
                return isFinite(e.valueOf()) ? o(e.getUTCFullYear(), 4) + "-" + o(e.getUTCMonth() + 1) + "-" + o(e.getUTCDate()) + "T" + o(e.getUTCHours()) + ":" + o(e.getUTCMinutes()) + ":" + o(e.getUTCSeconds()) + "Z" : null
            }
            ,
            String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                return this.valueOf()
            }
            ),
            typeof Ce.stringify !== Ae && (Ce.stringify = function(e, o, a) {
                var s;
                if (n = "",
                i = "",
                typeof a === Ie)
                    for (s = 0; s < a; s += 1)
                        i += " ";
                else
                    typeof a === Re && (i = a);
                if (r = o,
                o && typeof o !== Ae && (typeof o !== Me || typeof o.length !== Ie))
                    throw Error("JSON.stringify");
                return t("", {
                    "": e
                })
            }
            )
        }(),
        function() {
            function t(e) {
                if (e) {
                    if (e.numberFormat)
                        return e;
                    if (typeof e === Re) {
                        var t = ve.cultures;
                        return t[e] || t[e.split("-")[0]] || null
                    }
                    return null
                }
                return null
            }
            function i(e) {
                return e && (e = t(e)),
                e || ve.cultures.current
            }
            function r(e, t, r) {
                r = i(r);
                var a = r.calendars.standard
                  , s = a.days
                  , l = a.months;
                return t = a.patterns[t] || t,
                t.replace(u, function(t) {
                    var i, r, d;
                    return "d" === t ? r = e.getDate() : "dd" === t ? r = o(e.getDate()) : "ddd" === t ? r = s.namesAbbr[e.getDay()] : "dddd" === t ? r = s.names[e.getDay()] : "M" === t ? r = e.getMonth() + 1 : "MM" === t ? r = o(e.getMonth() + 1) : "MMM" === t ? r = l.namesAbbr[e.getMonth()] : "MMMM" === t ? r = l.names[e.getMonth()] : "yy" === t ? r = o(e.getFullYear() % 100) : "yyyy" === t ? r = o(e.getFullYear(), 4) : "h" === t ? r = e.getHours() % 12 || 12 : "hh" === t ? r = o(e.getHours() % 12 || 12) : "H" === t ? r = e.getHours() : "HH" === t ? r = o(e.getHours()) : "m" === t ? r = e.getMinutes() : "mm" === t ? r = o(e.getMinutes()) : "s" === t ? r = e.getSeconds() : "ss" === t ? r = o(e.getSeconds()) : "f" === t ? r = xe.floor(e.getMilliseconds() / 100) : "ff" === t ? (r = e.getMilliseconds(),
                    r > 99 && (r = xe.floor(r / 10)),
                    r = o(r)) : "fff" === t ? r = o(e.getMilliseconds(), 3) : "tt" === t ? r = e.getHours() < 12 ? a.AM[0] : a.PM[0] : "zzz" === t ? (i = e.getTimezoneOffset(),
                    d = i < 0,
                    r = ("" + xe.abs(i / 60)).split(".")[0],
                    i = xe.abs(i) - 60 * r,
                    r = (d ? "+" : "-") + o(r),
                    r += ":" + o(i)) : "zz" !== t && "z" !== t || (r = e.getTimezoneOffset() / 60,
                    d = r < 0,
                    r = ("" + xe.abs(r)).split(".")[0],
                    r = (d ? "+" : "-") + ("zz" === t ? o(r) : r)),
                    r !== n ? r : t.slice(1, t.length - 1)
                })
            }
            function a(e, t, r) {
                r = i(r);
                var o, a, d, u, k, w, y, x, C, T, S, D, F, E, A, R, I, M, z, H, N, B, P, L = r.numberFormat, O = L[m], V = L.decimals, W = L.pattern[0], U = [], q = e < 0, j = f, $ = f, G = -1;
                if (e === n)
                    return f;
                if (!isFinite(e))
                    return e;
                if (!t)
                    return r.name.length ? e.toLocaleString() : "" + e;
                if (k = c.exec(t)) {
                    if (t = k[1].toLowerCase(),
                    a = "c" === t,
                    d = "p" === t,
                    (a || d) && (L = a ? L.currency : L.percent,
                    O = L[m],
                    V = L.decimals,
                    o = L.symbol,
                    W = L.pattern[q ? 0 : 1]),
                    u = k[2],
                    u && (V = +u),
                    "e" === t)
                        return u ? e.toExponential(V) : e.toExponential();
                    if (d && (e *= 100),
                    e = l(e, V),
                    q = e < 0,
                    e = e.split(m),
                    w = e[0],
                    y = e[1],
                    q && (w = w.substring(1)),
                    $ = s(w, 0, w.length, L),
                    y && ($ += O + y),
                    "n" === t && !q)
                        return $;
                    for (e = f,
                    T = 0,
                    S = W.length; T < S; T++)
                        D = W.charAt(T),
                        e += "n" === D ? $ : "$" === D || "%" === D ? o : D;
                    return e
                }
                if (q && (e = -e),
                (t.indexOf("'") > -1 || t.indexOf('"') > -1 || t.indexOf("\\") > -1) && (t = t.replace(h, function(e) {
                    var t = e.charAt(0).replace("\\", "")
                      , n = e.slice(1).replace(t, "");
                    return U.push(n),
                    b
                })),
                t = t.split(";"),
                q && t[1])
                    t = t[1],
                    E = !0;
                else if (0 === e) {
                    if (t = t[2] || t[0],
                    t.indexOf(v) == -1 && t.indexOf(_) == -1)
                        return t
                } else
                    t = t[0];
                if (H = t.indexOf("%"),
                N = t.indexOf("$"),
                d = H != -1,
                a = N != -1,
                d && (e *= 100),
                a && "\\" === t[N - 1] && (t = t.split("\\").join(""),
                a = !1),
                (a || d) && (L = a ? L.currency : L.percent,
                O = L[m],
                V = L.decimals,
                o = L.symbol),
                F = t.indexOf(g) > -1,
                F && (t = t.replace(p, f)),
                A = t.indexOf(m),
                S = t.length,
                A != -1 ? (y = ("" + e).split("e"),
                y = y[1] ? l(e, Math.abs(y[1])) : y[0],
                y = y.split(m)[1] || f,
                I = t.lastIndexOf(_) - A,
                R = t.lastIndexOf(v) - A,
                M = I > -1,
                z = R > -1,
                T = y.length,
                M || z || (t = t.substring(0, A) + t.substring(A + 1),
                S = t.length,
                A = -1,
                T = 0),
                M && I > R ? T = I : R > I && (z && T > R ? T = R : M && T < I && (T = I)),
                T > -1 && (e = l(e, T))) : e = l(e),
                R = t.indexOf(v),
                B = I = t.indexOf(_),
                G = R == -1 && I != -1 ? I : R != -1 && I == -1 ? R : R > I ? I : R,
                R = t.lastIndexOf(v),
                I = t.lastIndexOf(_),
                P = R == -1 && I != -1 ? I : R != -1 && I == -1 ? R : R > I ? R : I,
                G == S && (P = G),
                G != -1) {
                    for ($ = ("" + e).split(m),
                    w = $[0],
                    y = $[1] || f,
                    x = w.length,
                    C = y.length,
                    q && e * -1 >= 0 && (q = !1),
                    e = t.substring(0, G),
                    q && !E && (e += "-"),
                    T = G; T < S; T++) {
                        if (D = t.charAt(T),
                        A == -1) {
                            if (P - T < x) {
                                e += w;
                                break
                            }
                        } else if (I != -1 && I < T && (j = f),
                        A - T <= x && A - T > -1 && (e += w,
                        T = A),
                        A === T) {
                            e += (y ? O : f) + y,
                            T += P - A + 1;
                            continue
                        }
                        D === _ ? (e += D,
                        j = D) : D === v && (e += j)
                    }
                    if (F && (e = s(e, G + (q && !E ? 1 : 0), Math.max(P, x + G), L)),
                    P >= G && (e += t.substring(P + 1)),
                    a || d) {
                        for ($ = f,
                        T = 0,
                        S = e.length; T < S; T++)
                            D = e.charAt(T),
                            $ += "$" === D || "%" === D ? o : D;
                        e = $
                    }
                    if (S = U.length)
                        for (T = 0; T < S; T++)
                            e = e.replace(b, U[T])
                }
                return e
            }
            var s, l, d, u = /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|HH|H|hh|h|mm|m|fff|ff|f|tt|ss|s|zzz|zz|z|"[^"]*"|'[^']*'/g, c = /^(n|c|p|e)(\d*)$/i, h = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g, p = /\,/g, f = "", m = ".", g = ",", v = "#", _ = "0", b = "??", k = "en-US", w = {}.toString;
            ve.cultures["en-US"] = {
                name: k,
                numberFormat: {
                    pattern: ["-n"],
                    decimals: 2,
                    ",": ",",
                    ".": ".",
                    groupSize: [3],
                    percent: {
                        pattern: ["-n %", "n %"],
                        decimals: 2,
                        ",": ",",
                        ".": ".",
                        groupSize: [3],
                        symbol: "%"
                    },
                    currency: {
                        name: "US Dollar",
                        abbr: "USD",
                        pattern: ["($n)", "$n"],
                        decimals: 2,
                        ",": ",",
                        ".": ".",
                        groupSize: [3],
                        symbol: "$"
                    }
                },
                calendars: {
                    standard: {
                        days: {
                            names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                            namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                        },
                        months: {
                            names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                            namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                        },
                        AM: ["AM", "am", "AM"],
                        PM: ["PM", "pm", "PM"],
                        patterns: {
                            d: "M/d/yyyy",
                            D: "dddd, MMMM dd, yyyy",
                            F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                            g: "M/d/yyyy h:mm tt",
                            G: "M/d/yyyy h:mm:ss tt",
                            m: "MMMM dd",
                            M: "MMMM dd",
                            s: "yyyy'-'MM'-'ddTHH':'mm':'ss",
                            t: "h:mm tt",
                            T: "h:mm:ss tt",
                            u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                            y: "MMMM, yyyy",
                            Y: "MMMM, yyyy"
                        },
                        "/": "/",
                        ":": ":",
                        firstDay: 0,
                        twoDigitYearMax: 2029
                    }
                }
            },
            ve.culture = function(e) {
                var i, r = ve.cultures;
                return e === n ? r.current : (i = t(e) || r[k],
                i.calendar = i.calendars.standard,
                r.current = i,
                n)
            }
            ,
            ve.findCulture = t,
            ve.getCulture = i,
            ve.culture(k),
            s = function(e, t, i, r) {
                var o, a, s, l, d, u, c = e.indexOf(r[m]), h = r.groupSize.slice(), p = h.shift();
                if (i = c !== -1 ? c : i + 1,
                o = e.substring(t, i),
                a = o.length,
                a >= p) {
                    for (s = a,
                    l = []; s > -1; )
                        if (d = o.substring(s - p, s),
                        d && l.push(d),
                        s -= p,
                        u = h.shift(),
                        p = u !== n ? u : p,
                        0 === p) {
                            l.push(o.substring(0, s));
                            break
                        }
                    o = l.reverse().join(r[g]),
                    e = e.substring(0, t) + o + e.substring(i)
                }
                return e
            }
            ,
            l = function(e, t) {
                return t = t || 0,
                e = ("" + e).split("e"),
                e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] + t : t))),
                e = ("" + e).split("e"),
                e = +(e[0] + "e" + (e[1] ? +e[1] - t : -t)),
                e.toFixed(Math.min(t, 20))
            }
            ,
            d = function(e, t, i) {
                if (t) {
                    if ("[object Date]" === w.call(e))
                        return r(e, t, i);
                    if (typeof e === Ie)
                        return a(e, t, i)
                }
                return e !== n ? e : ""
            }
            ,
            ve.format = function(e) {
                var t = arguments;
                return e.replace(De, function(e, n, i) {
                    var r = t[parseInt(n, 10) + 1];
                    return d(r, i ? i.substring(1) : "")
                })
            }
            ,
            ve._extractFormat = function(e) {
                return "{0:" === e.slice(0, 3) && (e = e.slice(3, e.length - 1)),
                e
            }
            ,
            ve._activeElement = function() {
                try {
                    return document.activeElement
                } catch (e) {
                    return document.documentElement.activeElement
                }
            }
            ,
            ve._round = l,
            ve._outerWidth = function(t, n) {
                return e(t).outerWidth(n || !1) || 0
            }
            ,
            ve._outerHeight = function(t, n) {
                return e(t).outerHeight(n || !1) || 0
            }
            ,
            ve.toString = d
        }(),
        function() {
            function t(e, t, n) {
                return !(e >= t && e <= n)
            }
            function i(e) {
                return e.charAt(0)
            }
            function r(t) {
                return e.map(t, i)
            }
            function o(e, t) {
                t || 23 !== e.getHours() || e.setHours(e.getHours() + 2)
            }
            function a(e) {
                for (var t = 0, n = e.length, i = []; t < n; t++)
                    i[t] = (e[t] + "").toLowerCase();
                return i
            }
            function s(e) {
                var t, n = {};
                for (t in e)
                    n[t] = a(e[t]);
                return n
            }
            function l(e, i, a) {
                if (!e)
                    return null;
                var l, d, u, c, h, m, g, v, _, k, w, y, x, C = function(e) {
                    for (var t = 0; i[N] === e; )
                        t++,
                        N++;
                    return t > 0 && (N -= 1),
                    t
                }, T = function(t) {
                    var n = b[t] || RegExp("^\\d{1," + t + "}")
                      , i = e.substr(B, t).match(n);
                    return i ? (i = i[0],
                    B += i.length,
                    parseInt(i, 10)) : null
                }, S = function(t, n) {
                    for (var i, r, o, a = 0, s = t.length, l = 0, d = 0; a < s; a++)
                        i = t[a],
                        r = i.length,
                        o = e.substr(B, r),
                        n && (o = o.toLowerCase()),
                        o == i && r > l && (l = r,
                        d = a);
                    return l ? (B += l,
                    d + 1) : null
                }, D = function() {
                    var t = !1;
                    return e.charAt(B) === i[N] && (B++,
                    t = !0),
                    t
                }, F = a.calendars.standard, E = null, A = null, R = null, I = null, M = null, z = null, H = null, N = 0, B = 0, P = !1, L = new Date, O = F.twoDigitYearMax || 2029, V = L.getFullYear();
                for (i || (i = "d"),
                c = F.patterns[i],
                c && (i = c),
                i = i.split(""),
                u = i.length; N < u; N++)
                    if (l = i[N],
                    P)
                        "'" === l ? P = !1 : D();
                    else if ("d" === l) {
                        if (d = C("d"),
                        F._lowerDays || (F._lowerDays = s(F.days)),
                        null !== R && d > 2)
                            continue;
                        if (R = d < 3 ? T(2) : S(F._lowerDays[3 == d ? "namesAbbr" : "names"], !0),
                        null === R || t(R, 1, 31))
                            return null
                    } else if ("M" === l) {
                        if (d = C("M"),
                        F._lowerMonths || (F._lowerMonths = s(F.months)),
                        A = d < 3 ? T(2) : S(F._lowerMonths[3 == d ? "namesAbbr" : "names"], !0),
                        null === A || t(A, 1, 12))
                            return null;
                        A -= 1
                    } else if ("y" === l) {
                        if (d = C("y"),
                        E = T(d),
                        null === E)
                            return null;
                        2 == d && ("string" == typeof O && (O = V + parseInt(O, 10)),
                        E = V - V % 100 + E,
                        E > O && (E -= 100))
                    } else if ("h" === l) {
                        if (C("h"),
                        I = T(2),
                        12 == I && (I = 0),
                        null === I || t(I, 0, 11))
                            return null
                    } else if ("H" === l) {
                        if (C("H"),
                        I = T(2),
                        null === I || t(I, 0, 23))
                            return null
                    } else if ("m" === l) {
                        if (C("m"),
                        M = T(2),
                        null === M || t(M, 0, 59))
                            return null
                    } else if ("s" === l) {
                        if (C("s"),
                        z = T(2),
                        null === z || t(z, 0, 59))
                            return null
                    } else if ("f" === l) {
                        if (d = C("f"),
                        x = e.substr(B, d).match(b[3]),
                        H = T(d),
                        null !== H && (H = parseFloat("0." + x[0], 10),
                        H = ve._round(H, 3),
                        H *= 1e3),
                        null === H || t(H, 0, 999))
                            return null
                    } else if ("t" === l) {
                        if (d = C("t"),
                        v = F.AM,
                        _ = F.PM,
                        1 === d && (v = r(v),
                        _ = r(_)),
                        h = S(_),
                        !h && !S(v))
                            return null
                    } else if ("z" === l) {
                        if (m = !0,
                        d = C("z"),
                        "Z" === e.substr(B, 1)) {
                            D();
                            continue
                        }
                        if (g = e.substr(B, 6).match(d > 2 ? f : p),
                        !g)
                            return null;
                        if (g = g[0].split(":"),
                        k = g[0],
                        w = g[1],
                        !w && k.length > 3 && (B = k.length - 2,
                        w = k.substring(B),
                        k = k.substring(0, B)),
                        k = parseInt(k, 10),
                        t(k, -12, 13))
                            return null;
                        if (d > 2 && (w = parseInt(w, 10),
                        isNaN(w) || t(w, 0, 59)))
                            return null
                    } else if ("'" === l)
                        P = !0,
                        D();
                    else if (!D())
                        return null;
                return y = null !== I || null !== M || z || null,
                null === E && null === A && null === R && y ? (E = V,
                A = L.getMonth(),
                R = L.getDate()) : (null === E && (E = V),
                null === R && (R = 1)),
                h && I < 12 && (I += 12),
                m ? (k && (I += -k),
                w && (M += -w),
                e = new Date(Date.UTC(E, A, R, I, M, z, H))) : (e = new Date(E,A,R,I,M,z,H),
                o(e, I)),
                E < 100 && e.setFullYear(E),
                e.getDate() !== R && m === n ? null : e
            }
            function d(e) {
                var t = "-" === e.substr(0, 1) ? -1 : 1;
                return e = e.substring(1),
                e = 60 * parseInt(e.substr(0, 2), 10) + parseInt(e.substring(2), 10),
                t * e
            }
            function u(e) {
                var t, n, i, r = xe.max(v.length, _.length), o = e.calendar.patterns, a = [];
                for (i = 0; i < r; i++) {
                    for (t = v[i],
                    n = 0; n < t.length; n++)
                        a.push(o[t[n]]);
                    a = a.concat(_[i])
                }
                return a
            }
            var c = /\u00A0/g
              , h = /[eE][\-+]?[0-9]+/
              , p = /[+|\-]\d{1,2}/
              , f = /[+|\-]\d{1,2}:?\d{2}/
              , m = /^\/Date\((.*?)\)\/$/
              , g = /[+-]\d*/
              , v = [[], ["G", "g", "F"], ["D", "d", "y", "m", "T", "t"]]
              , _ = [["yyyy-MM-ddTHH:mm:ss.fffffffzzz", "yyyy-MM-ddTHH:mm:ss.fffffff", "yyyy-MM-ddTHH:mm:ss.fffzzz", "yyyy-MM-ddTHH:mm:ss.fff", "ddd MMM dd yyyy HH:mm:ss", "yyyy-MM-ddTHH:mm:sszzz", "yyyy-MM-ddTHH:mmzzz", "yyyy-MM-ddTHH:mmzz", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-dd HH:mm:ss", "yyyy/MM/dd HH:mm:ss"], ["yyyy-MM-ddTHH:mm", "yyyy-MM-dd HH:mm", "yyyy/MM/dd HH:mm"], ["yyyy/MM/dd", "yyyy-MM-dd", "HH:mm:ss", "HH:mm"]]
              , b = {
                2: /^\d{1,2}/,
                3: /^\d{1,3}/,
                4: /^\d{4}/
            }
              , k = {}.toString;
            ve.parseDate = function(e, t, n) {
                var i, r, o, a;
                if ("[object Date]" === k.call(e))
                    return e;
                if (i = 0,
                r = null,
                e && 0 === e.indexOf("/D") && (r = m.exec(e)))
                    return r = r[1],
                    a = g.exec(r.substring(1)),
                    r = new Date(parseInt(r, 10)),
                    a && (a = d(a[0]),
                    r = ve.timezone.apply(r, 0),
                    r = ve.timezone.convert(r, 0, -1 * a)),
                    r;
                for (n = ve.getCulture(n),
                t || (t = u(n)),
                t = ke(t) ? t : [t],
                o = t.length; i < o; i++)
                    if (r = l(e, t[i], n))
                        return r;
                return r
            }
            ,
            ve.parseInt = function(e, t) {
                var n = ve.parseFloat(e, t);
                return n && (n = 0 | n),
                n
            }
            ,
            ve.parseFloat = function(e, t, n) {
                if (!e && 0 !== e)
                    return null;
                if (typeof e === Ie)
                    return e;
                e = "" + e,
                t = ve.getCulture(t);
                var i, r, o = t.numberFormat, a = o.percent, s = o.currency, l = s.symbol, d = a.symbol, u = e.indexOf("-");
                return h.test(e) ? (e = parseFloat(e.replace(o["."], ".")),
                isNaN(e) && (e = null),
                e) : u > 0 ? null : (u = u > -1,
                e.indexOf(l) > -1 || n && n.toLowerCase().indexOf("c") > -1 ? (o = s,
                i = o.pattern[0].replace("$", l).split("n"),
                e.indexOf(i[0]) > -1 && e.indexOf(i[1]) > -1 && (e = e.replace(i[0], "").replace(i[1], ""),
                u = !0)) : e.indexOf(d) > -1 && (r = !0,
                o = a,
                l = d),
                e = e.replace("-", "").replace(l, "").replace(c, " ").split(o[","].replace(c, " ")).join("").replace(o["."], "."),
                e = parseFloat(e),
                isNaN(e) ? e = null : u && (e *= -1),
                e && r && (e /= 100),
                e)
            }
        }(),
        function() {
            var i, r, o, a, s, l, d, c, h;
            Te._scrollbar = n,
            Te.scrollbar = function(e) {
                if (isNaN(Te._scrollbar) || e) {
                    var t, n = document.createElement("div");
                    return n.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block",
                    n.innerHTML = "&nbsp;",
                    document.body.appendChild(n),
                    Te._scrollbar = t = n.offsetWidth - n.scrollWidth,
                    document.body.removeChild(n),
                    t
                }
                return Te._scrollbar
            }
            ,
            Te.isRtl = function(t) {
                return e(t).closest(".k-rtl").length > 0
            }
            ,
            i = document.createElement("table");
            try {
                i.innerHTML = "<tr><td></td></tr>",
                Te.tbodyInnerHtml = !0
            } catch (p) {
                Te.tbodyInnerHtml = !1
            }
            Te.touch = "ontouchstart"in t,
            r = document.documentElement.style,
            o = Te.transitions = !1,
            a = Te.transforms = !1,
            s = "HTMLElement"in t ? HTMLElement.prototype : [],
            Te.hasHW3D = "WebKitCSSMatrix"in t && "m11"in new t.WebKitCSSMatrix || "MozPerspective"in r || "msPerspective"in r,
            Te.cssFlexbox = "flexWrap"in r || "WebkitFlexWrap"in r || "msFlexWrap"in r,
            be(["Moz", "webkit", "O", "ms"], function() {
                var e, t = "" + this, n = typeof i.style[t + "Transition"] === Re;
                if (n || typeof i.style[t + "Transform"] === Re)
                    return e = t.toLowerCase(),
                    a = {
                        css: "ms" != e ? "-" + e + "-" : "",
                        prefix: t,
                        event: "o" === e || "webkit" === e ? e : ""
                    },
                    n && (o = a,
                    o.event = o.event ? o.event + "TransitionEnd" : "transitionend"),
                    !1
            }),
            i = null,
            Te.transforms = a,
            Te.transitions = o,
            Te.devicePixelRatio = t.devicePixelRatio === n ? 1 : t.devicePixelRatio;
            try {
                Te.screenWidth = t.outerWidth || t.screen ? t.screen.availWidth : t.innerWidth,
                Te.screenHeight = t.outerHeight || t.screen ? t.screen.availHeight : t.innerHeight
            } catch (p) {
                Te.screenWidth = t.screen.availWidth,
                Te.screenHeight = t.screen.availHeight
            }
            Te.detectOS = function(e) {
                var n, i, r = !1, o = [], a = !/mobile safari/i.test(e), s = {
                    wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
                    fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
                    android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)\.(\d+(\.\d+)?)/,
                    iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
                    ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
                    meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
                    webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
                    blackberry: /(BlackBerry|BB10).*?Version\/(\d+)\.(\d+(\.\d+)?)/,
                    playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
                    windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
                    tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
                    sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i,
                    ffos: /(Mobile).*rv:(\d+)\.(\d+(\.\d+)?).*Firefox/
                }, l = {
                    ios: /^i(phone|pad|pod)$/i,
                    android: /^android|fire$/i,
                    blackberry: /^blackberry|playbook/i,
                    windows: /windows/,
                    wp: /wp/,
                    flat: /sailfish|ffos|tizen/i,
                    meego: /meego/
                }, d = {
                    tablet: /playbook|ipad|fire/i
                }, c = {
                    omini: /Opera\sMini/i,
                    omobile: /Opera\sMobi/i,
                    firefox: /Firefox|Fennec/i,
                    mobilesafari: /version\/.*safari/i,
                    ie: /MSIE|Windows\sPhone/i,
                    chrome: /chrome|crios/i,
                    webkit: /webkit/i
                };
                for (i in s)
                    if (s.hasOwnProperty(i) && (o = e.match(s[i]))) {
                        if ("windows" == i && "plugins"in navigator)
                            return !1;
                        r = {},
                        r.device = i,
                        r.tablet = u(i, d, !1),
                        r.browser = u(e, c, "default"),
                        r.name = u(i, l),
                        r[r.name] = !0,
                        r.majorVersion = o[2],
                        r.minorVersion = o[3].replace("_", "."),
                        n = r.minorVersion.replace(".", "").substr(0, 2),
                        r.flatVersion = r.majorVersion + n + Array(3 - (n.length < 3 ? n.length : 2)).join("0"),
                        r.cordova = typeof t.PhoneGap !== Ne || typeof t.cordova !== Ne,
                        r.appMode = t.navigator.standalone || /file|local|wmapp/.test(t.location.protocol) || r.cordova,
                        r.android && (Te.devicePixelRatio < 1.5 && r.flatVersion < 400 || a) && (Te.screenWidth > 800 || Te.screenHeight > 800) && (r.tablet = i);
                        break
                    }
                return r
            }
            ,
            l = Te.mobileOS = Te.detectOS(navigator.userAgent),
            Te.wpDevicePixelRatio = l.wp ? screen.width / 320 : 0,
            Te.hasNativeScrolling = !1,
            (l.ios || l.android && l.majorVersion > 2 || l.wp) && (Te.hasNativeScrolling = l),
            Te.delayedClick = function() {
                if (Te.touch) {
                    if (l.ios)
                        return !0;
                    if (l.android)
                        return !Te.browser.chrome || !(Te.browser.version < 32) && !(e("meta[name=viewport]").attr("content") || "").match(/user-scalable=no/i)
                }
                return !1
            }
            ,
            Te.mouseAndTouchPresent = Te.touch && !(Te.mobileOS.ios || Te.mobileOS.android),
            Te.detectBrowser = function(e) {
                var t, n = !1, i = [], r = {
                    edge: /(edge)[ \/]([\w.]+)/i,
                    webkit: /(chrome)[ \/]([\w.]+)/i,
                    safari: /(webkit)[ \/]([\w.]+)/i,
                    opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
                    msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
                    mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
                };
                for (t in r)
                    if (r.hasOwnProperty(t) && (i = e.match(r[t]))) {
                        n = {},
                        n[t] = !0,
                        n[i[1].toLowerCase().split(" ")[0].split("/")[0]] = !0,
                        n.version = parseInt(document.documentMode || i[2], 10);
                        break
                    }
                return n
            }
            ,
            Te.browser = Te.detectBrowser(navigator.userAgent),
            Te.detectClipboardAccess = function() {
                var e = {
                    copy: !!document.queryCommandSupported && document.queryCommandSupported("copy"),
                    cut: !!document.queryCommandSupported && document.queryCommandSupported("cut"),
                    paste: !!document.queryCommandSupported && document.queryCommandSupported("paste")
                };
                return Te.browser.chrome && (e.paste = !1,
                Te.browser.version >= 43 && (e.copy = !0,
                e.cut = !0)),
                e
            }
            ,
            Te.clipboard = Te.detectClipboardAccess(),
            Te.zoomLevel = function() {
                var e, n, i;
                try {
                    return e = Te.browser,
                    n = 0,
                    i = document.documentElement,
                    e.msie && 11 == e.version && i.scrollHeight > i.clientHeight && !Te.touch && (n = Te.scrollbar()),
                    Te.touch ? i.clientWidth / t.innerWidth : e.msie && e.version >= 10 ? ((top || t).document.documentElement.offsetWidth + n) / (top || t).innerWidth : 1
                } catch (r) {
                    return 1
                }
            }
            ,
            Te.cssBorderSpacing = n !== r.borderSpacing && !(Te.browser.msie && Te.browser.version < 8),
            function(t) {
                var n = ""
                  , i = e(document.documentElement)
                  , r = parseInt(t.version, 10);
                t.msie ? n = "ie" : t.mozilla ? n = "ff" : t.safari ? n = "safari" : t.webkit ? n = "webkit" : t.opera ? n = "opera" : t.edge && (n = "edge"),
                n && (n = "k-" + n + " k-" + n + r),
                Te.mobileOS && (n += " k-mobile"),
                Te.cssFlexbox || (n += " k-no-flexbox"),
                i.addClass(n)
            }(Te.browser),
            Te.eventCapture = document.documentElement.addEventListener,
            d = document.createElement("input"),
            Te.placeholder = "placeholder"in d,
            Te.propertyChangeEvent = "onpropertychange"in d,
            Te.input = function() {
                for (var e, t = ["number", "date", "time", "month", "week", "datetime", "datetime-local"], n = t.length, i = "test", r = {}, o = 0; o < n; o++)
                    e = t[o],
                    d.setAttribute("type", e),
                    d.value = i,
                    r[e.replace("-", "")] = "text" !== d.type && d.value !== i;
                return r
            }(),
            d.style.cssText = "float:left;",
            Te.cssFloat = !!d.style.cssFloat,
            d = null,
            Te.stableSort = function() {
                var e, t = 513, n = [{
                    index: 0,
                    field: "b"
                }];
                for (e = 1; e < t; e++)
                    n.push({
                        index: e,
                        field: "a"
                    });
                return n.sort(function(e, t) {
                    return e.field > t.field ? 1 : e.field < t.field ? -1 : 0
                }),
                1 === n[0].index
            }(),
            Te.matchesSelector = s.webkitMatchesSelector || s.mozMatchesSelector || s.msMatchesSelector || s.oMatchesSelector || s.matchesSelector || s.matches || function(t) {
                for (var n = document.querySelectorAll ? (this.parentNode || document).querySelectorAll(t) || [] : e(t), i = n.length; i--; )
                    if (n[i] == this)
                        return !0;
                return !1
            }
            ,
            Te.pushState = t.history && t.history.pushState,
            c = document.documentMode,
            Te.hashChange = "onhashchange"in t && !(Te.browser.msie && (!c || c <= 8)),
            Te.customElements = "registerElement"in t.document,
            h = Te.browser.chrome,
            Te.msPointers = !h && t.MSPointerEvent,
            Te.pointers = !h && t.PointerEvent,
            Te.kineticScrollNeeded = l && (Te.touch || Te.msPointers || Te.pointers)
        }(),
        U = {
            left: {
                reverse: "right"
            },
            right: {
                reverse: "left"
            },
            down: {
                reverse: "up"
            },
            up: {
                reverse: "down"
            },
            top: {
                reverse: "bottom"
            },
            bottom: {
                reverse: "top"
            },
            "in": {
                reverse: "out"
            },
            out: {
                reverse: "in"
            }
        },
        q = {},
        e.extend(q, {
            enabled: !0,
            Element: function(t) {
                this.element = e(t)
            },
            promise: function(e, t) {
                e.is(":visible") || e.css({
                    display: e.data("olddisplay") || "block"
                }).css("display"),
                t.hide && e.data("olddisplay", e.css("display")).hide(),
                t.init && t.init(),
                t.completeCallback && t.completeCallback(e),
                e.dequeue()
            },
            disable: function() {
                this.enabled = !1,
                this.promise = this.promiseShim
            },
            enable: function() {
                this.enabled = !0,
                this.promise = this.animatedPromise
            }
        }),
        q.promiseShim = q.promise,
        "kendoAnimate"in e.fn || _e(e.fn, {
            kendoStop: function(e, t) {
                return this.stop(e, t)
            },
            kendoAnimate: function(e, t, n, i) {
                return w(this, e, t, n, i)
            },
            kendoAddClass: function(e, t) {
                return ve.toggleClass(this, e, t, !0)
            },
            kendoRemoveClass: function(e, t) {
                return ve.toggleClass(this, e, t, !1)
            },
            kendoToggleClass: function(e, t, n) {
                return ve.toggleClass(this, e, t, n)
            }
        }),
        j = /&/g,
        $ = /</g,
        G = /"/g,
        Y = /'/g,
        K = />/g,
        Q = function(e) {
            return e.target
        }
        ,
        Te.touch && (Q = function(e) {
            var t = "originalEvent"in e ? e.originalEvent.changedTouches : "changedTouches"in e ? e.changedTouches : null;
            return t ? document.elementFromPoint(t[0].clientX, t[0].clientY) : e.target
        }
        ,
        be(["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap"], function(t, n) {
            e.fn[n] = function(e) {
                return this.bind(n, e)
            }
        })),
        Te.touch ? Te.mobileOS ? (Te.mousedown = "touchstart",
        Te.mouseup = "touchend",
        Te.mousemove = "touchmove",
        Te.mousecancel = "touchcancel",
        Te.click = "touchend",
        Te.resize = "orientationchange") : (Te.mousedown = "mousedown touchstart",
        Te.mouseup = "mouseup touchend",
        Te.mousemove = "mousemove touchmove",
        Te.mousecancel = "mouseleave touchcancel",
        Te.click = "click",
        Te.resize = "resize") : Te.pointers ? (Te.mousemove = "pointermove",
        Te.mousedown = "pointerdown",
        Te.mouseup = "pointerup",
        Te.mousecancel = "pointercancel",
        Te.click = "pointerup",
        Te.resize = "orientationchange resize") : Te.msPointers ? (Te.mousemove = "MSPointerMove",
        Te.mousedown = "MSPointerDown",
        Te.mouseup = "MSPointerUp",
        Te.mousecancel = "MSPointerCancel",
        Te.click = "MSPointerUp",
        Te.resize = "orientationchange resize") : (Te.mousemove = "mousemove",
        Te.mousedown = "mousedown",
        Te.mouseup = "mouseup",
        Te.mousecancel = "mouseleave",
        Te.click = "click",
        Te.resize = "resize"),
        X = function(e, t) {
            var n, i, r, o, a = t || "d", s = 1;
            for (i = 0,
            r = e.length; i < r; i++)
                o = e[i],
                "" !== o && (n = o.indexOf("["),
                0 !== n && (n == -1 ? o = "." + o : (s++,
                o = "." + o.substring(0, n) + " || {})" + o.substring(n))),
                s++,
                a += o + (i < r - 1 ? " || {})" : ")"));
            return Array(s).join("(") + a
        }
        ,
        J = /^([a-z]+:)?\/\//i,
        _e(ve, {
            widgets: [],
            _widgetRegisteredCallbacks: [],
            ui: ve.ui || {},
            fx: ve.fx || b,
            effects: ve.effects || q,
            mobile: ve.mobile || {},
            data: ve.data || {},
            dataviz: ve.dataviz || {},
            drawing: ve.drawing || {},
            spreadsheet: {
                messages: {}
            },
            keys: {
                INSERT: 45,
                DELETE: 46,
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                ESC: 27,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                END: 35,
                HOME: 36,
                SPACEBAR: 32,
                PAGEUP: 33,
                PAGEDOWN: 34,
                F2: 113,
                F10: 121,
                F12: 123,
                NUMPAD_PLUS: 107,
                NUMPAD_MINUS: 109,
                NUMPAD_DOT: 110
            },
            support: ve.support || Te,
            animate: ve.animate || w,
            ns: "",
            attr: function(e) {
                return "data-" + ve.ns + e
            },
            getShadows: a,
            wrap: s,
            deepExtend: l,
            getComputedStyles: p,
            webComponents: ve.webComponents || [],
            isScrollable: f,
            scrollLeft: m,
            size: g,
            toCamelCase: h,
            toHyphens: c,
            getOffset: ve.getOffset || v,
            parseEffects: ve.parseEffects || _,
            toggleClass: ve.toggleClass || y,
            directions: ve.directions || U,
            Observable: H,
            Class: i,
            Template: R,
            template: we(R.compile, R),
            render: we(R.render, R),
            stringify: we(Ce.stringify, Ce),
            eventTarget: Q,
            htmlEncode: x,
            isLocalUrl: function(e) {
                return e && !J.test(e)
            },
            expr: function(e, t, n) {
                return e = e || "",
                typeof t == Re && (n = t,
                t = !1),
                n = n || "d",
                e && "[" !== e.charAt(0) && (e = "." + e),
                t ? (e = e.replace(/"([^.]*)\.([^"]*)"/g, '"$1_$DOT$_$2"'),
                e = e.replace(/'([^.]*)\.([^']*)'/g, "'$1_$DOT$_$2'"),
                e = X(e.split("."), n),
                e = e.replace(/_\$DOT\$_/g, ".")) : e = n + e,
                e
            },
            getter: function(e, t) {
                var n = e + t;
                return Be[n] = Be[n] || Function("d", "return " + ve.expr(e, t))
            },
            setter: function(e) {
                return Pe[e] = Pe[e] || Function("d,value", ve.expr(e) + "=value")
            },
            accessor: function(e) {
                return {
                    get: ve.getter(e),
                    set: ve.setter(e)
                }
            },
            guid: function() {
                var e, t, n = "";
                for (e = 0; e < 32; e++)
                    t = 16 * xe.random() | 0,
                    8 != e && 12 != e && 16 != e && 20 != e || (n += "-"),
                    n += (12 == e ? 4 : 16 == e ? 3 & t | 8 : t).toString(16);
                return n
            },
            roleSelector: function(e) {
                return e.replace(/(\S+)/g, "[" + ve.attr("role") + "=$1],").slice(0, -1)
            },
            directiveSelector: function(e) {
                var t, n = e.split(" ");
                if (n)
                    for (t = 0; t < n.length; t++)
                        "view" != n[t] && (n[t] = n[t].replace(/(\w*)(view|bar|strip|over)$/, "$1-$2"));
                return n.join(" ").replace(/(\S+)/g, "kendo-mobile-$1,").slice(0, -1)
            },
            triggeredByInput: function(e) {
                return /^(label|input|textarea|select)$/i.test(e.target.tagName)
            },
            onWidgetRegistered: function(e) {
                for (var t = 0, n = ve.widgets.length; t < n; t++)
                    e(ve.widgets[t]);
                ve._widgetRegisteredCallbacks.push(e)
            },
            logToConsole: function(e, i) {
                var r = t.console;
                !ve.suppressLog && n !== r && r.log && r[i || "log"](e)
            }
        }),
        Z = H.extend({
            init: function(e, t) {
                var n, i = this;
                i.element = ve.jQuery(e).handler(i),
                i.angular("init", t),
                H.fn.init.call(i),
                n = t ? t.dataSource : null,
                n && (t = _e({}, t, {
                    dataSource: {}
                })),
                t = i.options = _e(!0, {}, i.options, t),
                n && (t.dataSource = n),
                i.element.attr(ve.attr("role")) || i.element.attr(ve.attr("role"), (t.name || "").toLowerCase()),
                i.element.data("kendo" + t.prefix + t.name, i),
                i.bind(i.events, t)
            },
            events: [],
            options: {
                prefix: ""
            },
            _hasBindingTarget: function() {
                return !!this.element[0].kendoBindingTarget
            },
            _tabindex: function(e) {
                e = e || this.wrapper;
                var t = this.element
                  , n = "tabindex"
                  , i = e.attr(n) || t.attr(n);
                t.removeAttr(n),
                e.attr(n, isNaN(i) ? 0 : i)
            },
            setOptions: function(t) {
                this._setEvents(t),
                e.extend(this.options, t)
            },
            _setEvents: function(e) {
                for (var t, n = this, i = 0, r = n.events.length; i < r; i++)
                    t = n.events[i],
                    n.options[t] && e[t] && n.unbind(t, n.options[t]);
                n.bind(n.events, e)
            },
            resize: function(e) {
                var t = this.getSize()
                  , n = this._size;
                (e || (t.width > 0 || t.height > 0) && (!n || t.width !== n.width || t.height !== n.height)) && (this._size = t,
                this._resize(t, e),
                this.trigger("resize", t))
            },
            getSize: function() {
                return ve.dimensions(this.element)
            },
            size: function(e) {
                return e ? (this.setSize(e),
                n) : this.getSize()
            },
            setSize: e.noop,
            _resize: e.noop,
            destroy: function() {
                var e = this;
                e.element.removeData("kendo" + e.options.prefix + e.options.name),
                e.element.removeData("handler"),
                e.unbind()
            },
            _destroy: function() {
                this.destroy()
            },
            angular: function() {},
            _muteAngularRebind: function(e) {
                this._muteRebind = !0,
                e.call(this),
                this._muteRebind = !1
            }
        }),
        ee = Z.extend({
            dataItems: function() {
                return this.dataSource.flatView()
            },
            _angularItems: function(t) {
                var n = this;
                n.angular(t, function() {
                    return {
                        elements: n.items(),
                        data: e.map(n.dataItems(), function(e) {
                            return {
                                dataItem: e
                            }
                        })
                    }
                })
            }
        }),
        ve.dimensions = function(e, t) {
            var n = e[0];
            return t && e.css(t),
            {
                width: n.offsetWidth,
                height: n.offsetHeight
            }
        }
        ,
        ve.notify = ye,
        te = /template$/i,
        ne = /^\s*(?:\{(?:.|\r\n|\n)*\}|\[(?:.|\r\n|\n)*\])\s*$/,
        ie = /^\{(\d+)(:[^\}]+)?\}|^\[[A-Za-z_]*\]$/,
        re = /([A-Z])/g,
        ve.initWidget = function(i, r, o) {
            var a, s, l, d, u, c, h, p, f, m, g, v, _;
            if (o ? o.roles && (o = o.roles) : o = ve.ui.roles,
            i = i.nodeType ? i : i[0],
            c = i.getAttribute("data-" + ve.ns + "role")) {
                f = c.indexOf(".") === -1,
                l = f ? o[c] : ve.getter(c)(t),
                g = e(i).data(),
                v = l ? "kendo" + l.fn.options.prefix + l.fn.options.name : "",
                m = f ? RegExp("^kendo.*" + c + "$", "i") : RegExp("^" + v + "$", "i");
                for (_ in g)
                    if (_.match(m)) {
                        if (_ !== v)
                            return g[_];
                        a = g[_]
                    }
                if (l) {
                    for (p = C(i, "dataSource"),
                    r = e.extend({}, T(i, l.fn.options), r),
                    p && (r.dataSource = typeof p === Re ? ve.getter(p)(t) : p),
                    d = 0,
                    u = l.fn.events.length; d < u; d++)
                        s = l.fn.events[d],
                        h = C(i, s),
                        h !== n && (r[s] = ve.getter(h)(t));
                    return a ? e.isEmptyObject(r) || a.setOptions(r) : a = new l(i,r),
                    a
                }
            }
        }
        ,
        ve.rolesFromNamespaces = function(e) {
            var t, n, i = [];
            for (e[0] || (e = [ve.ui, ve.dataviz.ui]),
            t = 0,
            n = e.length; t < n; t++)
                i[t] = e[t].roles;
            return _e.apply(null, [{}].concat(i.reverse()))
        }
        ,
        ve.init = function(t) {
            var n = ve.rolesFromNamespaces(Le.call(arguments, 1));
            e(t).find("[data-" + ve.ns + "role]").addBack().each(function() {
                ve.initWidget(this, {}, n)
            })
        }
        ,
        ve.destroy = function(t) {
            e(t).find("[data-" + ve.ns + "role]").addBack().each(function() {
                var t, n = e(this).data();
                for (t in n)
                    0 === t.indexOf("kendo") && typeof n[t].destroy === Ae && n[t].destroy()
            })
        }
        ,
        ve.resize = function(t, n) {
            var i, r = e(t).find("[data-" + ve.ns + "role]").addBack().filter(D);
            r.length && (i = e.makeArray(r),
            i.sort(S),
            e.each(i, function() {
                var t = ve.widgetInstance(e(this));
                t && t.resize(n)
            }))
        }
        ,
        ve.parseOptions = T,
        _e(ve.ui, {
            Widget: Z,
            DataBoundWidget: ee,
            roles: {},
            progress: function(t, n) {
                var i, r, o, a, s = t.find(".k-loading-mask"), l = ve.support, d = l.browser;
                n ? s.length || (i = l.isRtl(t),
                r = i ? "right" : "left",
                a = t.scrollLeft(),
                o = d.webkit && i ? t[0].scrollWidth - t.width() - 2 * a : 0,
                s = e("<div class='k-loading-mask'><span class='k-loading-text'>" + ve.ui.progress.messages.loading + "</span><div class='k-loading-image'/><div class='k-loading-color'/></div>").width("100%").height("100%").css("top", t.scrollTop()).css(r, Math.abs(a) + o).prependTo(t)) : s && s.remove()
            },
            plugin: function(t, i, r) {
                var o, a, s, l, d = t.fn.options.name;
                for (i = i || ve.ui,
                r = r || "",
                i[d] = t,
                i.roles[d.toLowerCase()] = t,
                o = "getKendo" + r + d,
                d = "kendo" + r + d,
                a = {
                    name: d,
                    widget: t,
                    prefix: r || ""
                },
                ve.widgets.push(a),
                s = 0,
                l = ve._widgetRegisteredCallbacks.length; s < l; s++)
                    ve._widgetRegisteredCallbacks[s](a);
                e.fn[d] = function(i) {
                    var r, o = this;
                    return typeof i === Re ? (r = Le.call(arguments, 1),
                    this.each(function() {
                        var t, a, s = e.data(this, d);
                        if (!s)
                            throw Error(ve.format("Cannot call method '{0}' of {1} before it is initialized", i, d));
                        if (t = s[i],
                        typeof t !== Ae)
                            throw Error(ve.format("Cannot find method '{0}' of {1}", i, d));
                        if (a = t.apply(s, r),
                        a !== n)
                            return o = a,
                            !1
                    })) : this.each(function() {
                        return new t(this,i)
                    }),
                    o
                }
                ,
                e.fn[d].widget = t,
                e.fn[o] = function() {
                    return this.data(d)
                }
            }
        }),
        ve.ui.progress.messages = {
            loading: "Loading..."
        },
        oe = {
            bind: function() {
                return this
            },
            nullObject: !0,
            options: {}
        },
        ae = Z.extend({
            init: function(e, t) {
                Z.fn.init.call(this, e, t),
                this.element.autoApplyNS(),
                this.wrapper = this.element,
                this.element.addClass("km-widget")
            },
            destroy: function() {
                Z.fn.destroy.call(this),
                this.element.kendoDestroy()
            },
            options: {
                prefix: "Mobile"
            },
            events: [],
            view: function() {
                var e = this.element.closest(ve.roleSelector("view splitview modalview drawer"));
                return ve.widgetInstance(e, ve.mobile.ui) || oe
            },
            viewHasNativeScrolling: function() {
                var e = this.view();
                return e && e.options.useNativeScrolling
            },
            container: function() {
                var e = this.element.closest(ve.roleSelector("view layout modalview drawer splitview"));
                return ve.widgetInstance(e.eq(0), ve.mobile.ui) || oe
            }
        }),
        _e(ve.mobile, {
            init: function(e) {
                ve.init(e, ve.mobile.ui, ve.ui, ve.dataviz.ui)
            },
            appLevelNativeScrolling: function() {
                return ve.mobile.application && ve.mobile.application.options && ve.mobile.application.options.useNativeScrolling
            },
            roles: {},
            ui: {
                Widget: ae,
                DataBoundWidget: ee.extend(ae.prototype),
                roles: {},
                plugin: function(e) {
                    ve.ui.plugin(e, ve.mobile.ui, "Mobile")
                }
            }
        }),
        l(ve.dataviz, {
            init: function(e) {
                ve.init(e, ve.dataviz.ui)
            },
            ui: {
                roles: {},
                themes: {},
                views: [],
                plugin: function(e) {
                    ve.ui.plugin(e, ve.dataviz.ui)
                }
            },
            roles: {}
        }),
        ve.touchScroller = function(t, n) {
            return n || (n = {}),
            n.useNative = !0,
            e(t).map(function(t, i) {
                return i = e(i),
                !(!Te.kineticScrollNeeded || !ve.mobile.ui.Scroller || i.data("kendoMobileScroller")) && (i.kendoMobileScroller(n),
                i.data("kendoMobileScroller"))
            })[0]
        }
        ,
        ve.preventDefault = function(e) {
            e.preventDefault()
        }
        ,
        ve.widgetInstance = function(e, n) {
            var i, r, o, a, s = e.data(ve.ns + "role"), l = [];
            if (s) {
                if ("content" === s && (s = "scroller"),
                n)
                    if (n[0])
                        for (i = 0,
                        r = n.length; i < r; i++)
                            l.push(n[i].roles[s]);
                    else
                        l.push(n.roles[s]);
                else
                    l = [ve.ui.roles[s], ve.dataviz.ui.roles[s], ve.mobile.ui.roles[s]];
                for (s.indexOf(".") >= 0 && (l = [ve.getter(s)(t)]),
                i = 0,
                r = l.length; i < r; i++)
                    if (o = l[i],
                    o && (a = e.data("kendo" + o.fn.options.prefix + o.fn.options.name)))
                        return a
            }
        }
        ,
        ve.onResize = function(n) {
            var i = n;
            return Te.mobileOS.android && (i = function() {
                setTimeout(n, 600)
            }
            ),
            e(t).on(Te.resize, i),
            i
        }
        ,
        ve.unbindResize = function(n) {
            e(t).off(Te.resize, n)
        }
        ,
        ve.attrValue = function(e, t) {
            return e.data(ve.ns + t)
        }
        ,
        ve.days = {
            Sunday: 0,
            Monday: 1,
            Tuesday: 2,
            Wednesday: 3,
            Thursday: 4,
            Friday: 5,
            Saturday: 6
        },
        e.extend(e.expr[":"], {
            kendoFocusable: function(t) {
                var n = e.attr(t, "tabindex");
                return F(t, !isNaN(n) && n > -1)
            }
        }),
        se = ["mousedown", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "mouseup", "click"],
        le = "label, input, [data-rel=external]",
        de = {
            setupMouseMute: function() {
                var t, n = 0, i = se.length, r = document.documentElement;
                if (!de.mouseTrap && Te.eventCapture)
                    for (de.mouseTrap = !0,
                    de.bustClick = !1,
                    de.captureMouse = !1,
                    t = function(t) {
                        de.captureMouse && ("click" === t.type ? de.bustClick && !e(t.target).is(le) && (t.preventDefault(),
                        t.stopPropagation()) : t.stopPropagation())
                    }
                    ; n < i; n++)
                        r.addEventListener(se[n], t, !0)
            },
            muteMouse: function(e) {
                de.captureMouse = !0,
                e.data.bustClick && (de.bustClick = !0),
                clearTimeout(de.mouseTrapTimeoutID)
            },
            unMuteMouse: function() {
                clearTimeout(de.mouseTrapTimeoutID),
                de.mouseTrapTimeoutID = setTimeout(function() {
                    de.captureMouse = !1,
                    de.bustClick = !1
                }, 400)
            }
        },
        ue = {
            down: "touchstart mousedown",
            move: "mousemove touchmove",
            up: "mouseup touchend touchcancel",
            cancel: "mouseleave touchcancel"
        },
        Te.touch && (Te.mobileOS.ios || Te.mobileOS.android) ? ue = {
            down: "touchstart",
            move: "touchmove",
            up: "touchend touchcancel",
            cancel: "touchcancel"
        } : Te.pointers ? ue = {
            down: "pointerdown",
            move: "pointermove",
            up: "pointerup",
            cancel: "pointercancel pointerleave"
        } : Te.msPointers && (ue = {
            down: "MSPointerDown",
            move: "MSPointerMove",
            up: "MSPointerUp",
            cancel: "MSPointerCancel MSPointerLeave"
        }),
        !Te.msPointers || "onmspointerenter"in t || e.each({
            MSPointerEnter: "MSPointerOver",
            MSPointerLeave: "MSPointerOut"
        }, function(t, n) {
            e.event.special[t] = {
                delegateType: n,
                bindType: n,
                handle: function(t) {
                    var i, r = this, o = t.relatedTarget, a = t.handleObj;
                    return o && (o === r || e.contains(r, o)) || (t.type = a.origType,
                    i = a.handler.apply(this, arguments),
                    t.type = n),
                    i
                }
            }
        }),
        ce = function(e) {
            return ue[e] || e
        }
        ,
        he = /([^ ]+)/g,
        ve.applyEventMap = function(e, t) {
            return e = e.replace(he, ce),
            t && (e = e.replace(he, "$1." + t)),
            e
        }
        ,
        pe = e.fn.on,
        _e(!0, A, e),
        A.fn = A.prototype = new e,
        A.fn.constructor = A,
        A.fn.init = function(t, n) {
            return n && n instanceof e && !(n instanceof A) && (n = A(n)),
            e.fn.init.call(this, t, n, fe)
        }
        ,
        A.fn.init.prototype = A.fn,
        fe = A(document),
        _e(A.fn, {
            handler: function(e) {
                return this.data("handler", e),
                this
            },
            autoApplyNS: function(e) {
                return this.data("kendoNS", e || ve.guid()),
                this
            },
            on: function() {
                var e, t, n, i, r, o, a = this, s = a.data("kendoNS");
                return 1 === arguments.length ? pe.call(a, arguments[0]) : (e = a,
                t = Le.call(arguments),
                typeof t[t.length - 1] === Ne && t.pop(),
                n = t[t.length - 1],
                i = ve.applyEventMap(t[0], s),
                Te.mouseAndTouchPresent && i.search(/mouse|click/) > -1 && this[0] !== document.documentElement && (de.setupMouseMute(),
                r = 2 === t.length ? null : t[1],
                o = i.indexOf("click") > -1 && i.indexOf("touchend") > -1,
                pe.call(this, {
                    touchstart: de.muteMouse,
                    touchend: de.unMuteMouse
                }, r, {
                    bustClick: o
                })),
                typeof n === Re && (e = a.data("handler"),
                n = e[n],
                t[t.length - 1] = function(t) {
                    n.call(e, t)
                }
                ),
                t[0] = i,
                pe.apply(a, t),
                a)
            },
            kendoDestroy: function(e) {
                return e = e || this.data("kendoNS"),
                e && this.off("." + e),
                this
            }
        }),
        ve.jQuery = A,
        ve.eventMap = ue,
        ve.timezone = function() {
            function e(e, t) {
                var n, i, r, o = t[3], a = t[4], s = t[5], l = t[8];
                return l || (t[8] = l = {}),
                l[e] ? l[e] : (isNaN(a) ? 0 === a.indexOf("last") ? (n = new Date(Date.UTC(e, u[o] + 1, 1, s[0] - 24, s[1], s[2], 0)),
                i = c[a.substr(4, 3)],
                r = n.getUTCDay(),
                n.setUTCDate(n.getUTCDate() + i - r - (i > r ? 7 : 0))) : a.indexOf(">=") >= 0 && (n = new Date(Date.UTC(e, u[o], a.substr(5), s[0], s[1], s[2], 0)),
                i = c[a.substr(0, 3)],
                r = n.getUTCDay(),
                n.setUTCDate(n.getUTCDate() + i - r + (i < r ? 7 : 0))) : n = new Date(Date.UTC(e, u[o], a, s[0], s[1], s[2], 0)),
                l[e] = n)
            }
            function t(t, n, i) {
                var r, o, a, s;
                return (n = n[i]) ? (a = new Date(t).getUTCFullYear(),
                n = jQuery.grep(n, function(e) {
                    var t = e[0]
                      , n = e[1];
                    return t <= a && (n >= a || t == a && "only" == n || "max" == n)
                }),
                n.push(t),
                n.sort(function(t, n) {
                    return "number" != typeof t && (t = +e(a, t)),
                    "number" != typeof n && (n = +e(a, n)),
                    t - n
                }),
                s = n[jQuery.inArray(t, n) - 1] || n[n.length - 1],
                isNaN(s) ? s : null) : (r = i.split(":"),
                o = 0,
                r.length > 1 && (o = 60 * r[0] + +r[1]),
                [-1e6, "max", "-", "Jan", 1, [0, 0, 0], o, "-"])
            }
            function n(e, t, n) {
                var i, r, o, a = t[n];
                if ("string" == typeof a && (a = t[a]),
                !a)
                    throw Error('Timezone "' + n + '" is either incorrect, or kendo.timezones.min.js is not included.');
                for (i = a.length - 1; i >= 0 && (r = a[i][3],
                !(r && e > r)); i--)
                    ;
                if (o = a[i + 1],
                !o)
                    throw Error('Timezone "' + n + '" not found on ' + e + ".");
                return o
            }
            function i(e, i, r, o) {
                typeof e != Ie && (e = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
                var a = n(e, i, o);
                return {
                    zone: a,
                    rule: t(e, r, a[1])
                }
            }
            function r(e, t) {
                var n, r, o;
                return "Etc/UTC" == t || "Etc/GMT" == t ? 0 : (n = i(e, this.zones, this.rules, t),
                r = n.zone,
                o = n.rule,
                ve.parseFloat(o ? r[0] - o[6] : r[0]))
            }
            function o(e, t) {
                var n = i(e, this.zones, this.rules, t)
                  , r = n.zone
                  , o = n.rule
                  , a = r[2];
                return a.indexOf("/") >= 0 ? a.split("/")[o && +o[6] ? 1 : 0] : a.indexOf("%s") >= 0 ? a.replace("%s", o && "-" != o[7] ? o[7] : "") : a
            }
            function a(e, t, n) {
                var i, r;
                return typeof t == Re && (t = this.offset(e, t)),
                typeof n == Re && (n = this.offset(e, n)),
                i = e.getTimezoneOffset(),
                e = new Date(e.getTime() + 6e4 * (t - n)),
                r = e.getTimezoneOffset(),
                new Date(e.getTime() + 6e4 * (r - i))
            }
            function s(e, t) {
                return this.convert(e, e.getTimezoneOffset(), t)
            }
            function l(e, t) {
                return this.convert(e, t, e.getTimezoneOffset())
            }
            function d(e) {
                return this.apply(new Date(e), "Etc/UTC")
            }
            var u = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                May: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Oct: 9,
                Nov: 10,
                Dec: 11
            }
              , c = {
                Sun: 0,
                Mon: 1,
                Tue: 2,
                Wed: 3,
                Thu: 4,
                Fri: 5,
                Sat: 6
            };
            return {
                zones: {},
                rules: {},
                offset: r,
                convert: a,
                apply: s,
                remove: l,
                abbr: o,
                toLocalDate: d
            }
        }(),
        ve.date = function() {
            function e(e, t) {
                return 0 === t && 23 === e.getHours() && (e.setHours(e.getHours() + 2),
                !0)
            }
            function t(t, n, i) {
                var r = t.getHours();
                i = i || 1,
                n = (n - t.getDay() + 7 * i) % 7,
                t.setDate(t.getDate() + n),
                e(t, r)
            }
            function i(e, n, i) {
                return e = new Date(e),
                t(e, n, i),
                e
            }
            function r(e) {
                return new Date(e.getFullYear(),e.getMonth(),1)
            }
            function o(e) {
                var t = new Date(e.getFullYear(),e.getMonth() + 1,0)
                  , n = r(e)
                  , i = Math.abs(t.getTimezoneOffset() - n.getTimezoneOffset());
                return i && t.setHours(n.getHours() + i / 60),
                t
            }
            function a(i, r) {
                var o, a;
                return i = new Date(i.getFullYear(),i.getMonth(),i.getDate()),
                e(i, 0),
                o = i.getFullYear(),
                r !== n ? (t(i, r, -1),
                i.setDate(i.getDate() + 4)) : i.setDate(i.getDate() + (4 - (i.getDay() || 7))),
                e(i, 0),
                a = Math.floor((i.getTime() - new Date(o,0,1,(-6))) / 864e5),
                1 + Math.floor(a / 7)
            }
            function s(t) {
                return t = new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0),
                e(t, 0),
                t
            }
            function l(e) {
                return Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds())
            }
            function d(e) {
                return e.getTime() - s(e)
            }
            function u(e, t, n) {
                var i, r = d(t), o = d(n);
                return !e || r == o || (t >= n && (n += b),
                i = d(e),
                r > i && (i += b),
                o < r && (o += b),
                i >= r && i <= o)
            }
            function c(e, t, n) {
                var i, r = t.getTime(), o = n.getTime();
                return r >= o && (o += b),
                i = e.getTime(),
                i >= r && i <= o
            }
            function h(t, n) {
                var i = t.getHours();
                return t = new Date(t),
                p(t, n * b),
                e(t, i),
                t
            }
            function p(e, t, n) {
                var i, r = e.getTimezoneOffset();
                e.setTime(e.getTime() + t),
                n || (i = e.getTimezoneOffset() - r,
                e.setTime(e.getTime() + i * _))
            }
            function f(t, n) {
                return t = new Date(ve.date.getDate(t).getTime() + ve.date.getMilliseconds(n)),
                e(t, n.getHours()),
                t
            }
            function m() {
                return s(new Date)
            }
            function g(e) {
                return s(e).getTime() == m().getTime()
            }
            function v(e) {
                var t = new Date(1980,1,1,0,0,0);
                return e && t.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()),
                t
            }
            var _ = 6e4
              , b = 864e5;
            return {
                adjustDST: e,
                dayOfWeek: i,
                setDayOfWeek: t,
                getDate: s,
                isInDateRange: c,
                isInTimeRange: u,
                isToday: g,
                nextDay: function(e) {
                    return h(e, 1)
                },
                previousDay: function(e) {
                    return h(e, -1)
                },
                toUtcTime: l,
                MS_PER_DAY: b,
                MS_PER_HOUR: 60 * _,
                MS_PER_MINUTE: _,
                setTime: p,
                setHours: f,
                addDays: h,
                today: m,
                toInvariantTime: v,
                firstDayOfMonth: r,
                lastDayOfMonth: o,
                weekInYear: a,
                getMilliseconds: d
            }
        }(),
        ve.stripWhitespace = function(e) {
            var t, n, i;
            if (document.createNodeIterator)
                for (t = document.createNodeIterator(e, NodeFilter.SHOW_TEXT, function(t) {
                    return t.parentNode == e ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
                }, !1); t.nextNode(); )
                    t.referenceNode && !t.referenceNode.textContent.trim() && t.referenceNode.parentNode.removeChild(t.referenceNode);
            else
                for (n = 0; n < e.childNodes.length; n++)
                    i = e.childNodes[n],
                    3 != i.nodeType || /\S/.test(i.nodeValue) || (e.removeChild(i),
                    n--),
                    1 == i.nodeType && ve.stripWhitespace(i)
        }
        ,
        me = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
            setTimeout(e, 1e3 / 60)
        }
        ,
        ve.animationFrame = function(e) {
            me.call(t, e)
        }
        ,
        ge = [],
        ve.queueAnimation = function(e) {
            ge[ge.length] = e,
            1 === ge.length && ve.runNextAnimation()
        }
        ,
        ve.runNextAnimation = function() {
            ve.animationFrame(function() {
                ge[0] && (ge.shift()(),
                ge[0] && ve.runNextAnimation())
            })
        }
        ,
        ve.parseQueryStringParams = function(e) {
            for (var t = e.split("?")[1] || "", n = {}, i = t.split(/&|=/), r = i.length, o = 0; o < r; o += 2)
                "" !== i[o] && (n[decodeURIComponent(i[o])] = decodeURIComponent(i[o + 1]));
            return n
        }
        ,
        ve.elementUnderCursor = function(e) {
            if (n !== e.x.client)
                return document.elementFromPoint(e.x.client, e.y.client)
        }
        ,
        ve.wheelDeltaY = function(e) {
            var t, i = e.originalEvent, r = i.wheelDeltaY;
            return i.wheelDelta ? (r === n || r) && (t = i.wheelDelta) : i.detail && i.axis === i.VERTICAL_AXIS && (t = 10 * -i.detail),
            t
        }
        ,
        ve.throttle = function(e, t) {
            var i, r, o = 0;
            return !t || t <= 0 ? e : (r = function() {
                function r() {
                    e.apply(a, l),
                    o = +new Date
                }
                var a = this
                  , s = +new Date - o
                  , l = arguments;
                return o ? (i && clearTimeout(i),
                s > t ? r() : i = setTimeout(r, t - s),
                n) : r()
            }
            ,
            r.cancel = function() {
                clearTimeout(i)
            }
            ,
            r)
        }
        ,
        ve.caret = function(t, i, r) {
            var o, a, s, l, d = i !== n;
            if (r === n && (r = i),
            t[0] && (t = t[0]),
            !d || !t.disabled) {
                try {
                    t.selectionStart !== n ? d ? (t.focus(),
                    t.setSelectionRange(i, r)) : i = [t.selectionStart, t.selectionEnd] : document.selection && (e(t).is(":visible") && t.focus(),
                    o = t.createTextRange(),
                    d ? (o.collapse(!0),
                    o.moveStart("character", i),
                    o.moveEnd("character", r - i),
                    o.select()) : (a = o.duplicate(),
                    o.moveToBookmark(document.selection.createRange().getBookmark()),
                    a.setEndPoint("EndToStart", o),
                    s = a.text.length,
                    l = s + o.text.length,
                    i = [s, l]))
                } catch (u) {
                    i = []
                }
                return i
            }
        }
        ,
        ve.compileMobileDirective = function(e, n) {
            var i = t.angular;
            return e.attr("data-" + ve.ns + "role", e[0].tagName.toLowerCase().replace("kendo-mobile-", "").replace("-", "")),
            i.element(e).injector().invoke(["$compile", function(t) {
                t(e)(n),
                /^\$(digest|apply)$/.test(n.$$phase) || n.$digest()
            }
            ]),
            ve.widgetInstance(e, ve.mobile.ui)
        }
        ,
        ve.antiForgeryTokens = function() {
            var t = {}
              , i = e("meta[name=csrf-token],meta[name=_csrf]").attr("content")
              , r = e("meta[name=csrf-param],meta[name=_csrf_header]").attr("content");
            return e("input[name^='__RequestVerificationToken']").each(function() {
                t[this.name] = this.value
            }),
            r !== n && i !== n && (t[r] = i),
            t
        }
        ,
        ve.cycleForm = function(e) {
            function t(e) {
                var t = ve.widgetInstance(e);
                t && t.focus ? t.focus() : e.focus()
            }
            var n = e.find("input, .k-widget").first()
              , i = e.find("button, .k-button").last();
            i.on("keydown", function(e) {
                e.keyCode != ve.keys.TAB || e.shiftKey || (e.preventDefault(),
                t(n))
            }),
            n.on("keydown", function(e) {
                e.keyCode == ve.keys.TAB && e.shiftKey && (e.preventDefault(),
                t(i))
            })
        }
        ,
        function() {
            function n(t, n, i, r) {
                var o, a, s = e("<form>").attr({
                    action: i,
                    method: "POST",
                    target: r
                }), l = ve.antiForgeryTokens();
                l.fileName = n,
                o = t.split(";base64,"),
                l.contentType = o[0].replace("data:", ""),
                l.base64 = o[1];
                for (a in l)
                    l.hasOwnProperty(a) && e("<input>").attr({
                        value: l[a],
                        name: a,
                        type: "hidden"
                    }).appendTo(s);
                s.appendTo("body").submit().remove()
            }
            function i(e, t) {
                var n, i, r, o, a, s = e;
                if ("string" == typeof e) {
                    for (n = e.split(";base64,"),
                    i = n[0],
                    r = atob(n[1]),
                    o = new Uint8Array(r.length),
                    a = 0; a < r.length; a++)
                        o[a] = r.charCodeAt(a);
                    s = new Blob([o.buffer],{
                        type: i
                    })
                }
                navigator.msSaveBlob(s, t)
            }
            function r(e, n) {
                t.Blob && e instanceof Blob && (e = URL.createObjectURL(e)),
                o.download = n,
                o.href = e;
                var i = document.createEvent("MouseEvents");
                i.initMouseEvent("click", !0, !1, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
                o.dispatchEvent(i),
                setTimeout(function() {
                    URL.revokeObjectURL(e)
                })
            }
            var o = document.createElement("a")
              , a = "download"in o && !ve.support.browser.edge;
            ve.saveAs = function(e) {
                var t = n;
                e.forceProxy || (a ? t = r : navigator.msSaveBlob && (t = i)),
                t(e.dataURI, e.fileName, e.proxyURL, e.proxyTarget)
            }
        }(),
        ve.proxyModelSetters = function(e) {
            var t = {};
            return Object.keys(e || {}).forEach(function(n) {
                Object.defineProperty(t, n, {
                    get: function() {
                        return e[n]
                    },
                    set: function(t) {
                        e[n] = t,
                        e.dirty = !0
                    }
                })
            }),
            t
        }
    }(jQuery, window),
    window.kendo
}, "function" == typeof define && define.amd ? define : function(e, t, n) {
    (n || t)()
}
),

function(e, define) {
    define("kendo.menu.min", ["kendo.popup.min"], e)
}(function() {
    return function(e, t) {
        function n(e, t) {
            return e = e.split(" ")[!t + 0] || e,
            e.replace("top", "up").replace("bottom", "down")
        }
        function i(e, t, n) {
            e = e.split(" ")[!t + 0] || e;
            var i = {
                origin: ["bottom", n ? "right" : "left"],
                position: ["top", n ? "right" : "left"]
            }
              , r = /left|right/.test(e);
            return r ? (i.origin = ["top", e],
            i.position[1] = p.directions[e].reverse) : (i.origin[0] = e,
            i.position[0] = p.directions[e].reverse),
            i.origin = i.origin.join(" "),
            i.position = i.position.join(" "),
            i
        }
        function r(t, n) {
            try {
                return e.contains(t, n)
            } catch (i) {
                return !1
            }
        }
        function o(t) {
            t = e(t),
            t.addClass("k-item").children(D).addClass(H),
            t.children("a").addClass(A).children(D).addClass(H),
            t.filter(":not([disabled])").addClass(K),
            t.filter(".k-separator").empty().append("&nbsp;"),
            t.filter("li[disabled]").addClass(J).removeAttr("disabled").attr("aria-disabled", !0),
            t.filter("[role]").length || t.attr("role", "menuitem"),
            t.children("." + A).length || t.contents().filter(function() {
                return !(this.nodeName.match(T) || 3 == this.nodeType && !e.trim(this.nodeValue))
            }).wrapAll("<span class='" + A + "'/>"),
            a(t),
            l(t)
        }
        function a(t) {
            t = e(t),
            t.find("> .k-link > [class*=k-i-arrow]:not(.k-sprite)").remove(),
            t.filter(":has(.k-menu-group)").children(".k-link:not(:has([class*=k-i-arrow]:not(.k-sprite)))").each(function() {
                var t = e(this)
                  , n = s(t);
                t.append("<span class='k-icon " + n + "'/>")
            })
        }
        function s(e) {
            var t, n = e.parent().parent(), i = p.support.isRtl(n);
            return t = n.hasClass(E + "-horizontal") ? " k-i-arrow-60-down" : i ? " k-i-arrow-60-left" : " k-i-arrow-60-right"
        }
        function l(t) {
            t = e(t),
            t.filter(".k-first:not(:first-child)").removeClass(z),
            t.filter(".k-last:not(:last-child)").removeClass(R),
            t.filter(":first-child").addClass(z),
            t.filter(":last-child").addClass(R)
        }
        function d(t, n) {
            var i = c(n);
            i && u(t, i),
            n.items && e(t).children("ul").children("li").each(function(e) {
                d(this, n.items[e])
            })
        }
        function u(t, n) {
            e(t).children(".k-link").data({
                selectHandler: n
            })
        }
        function c(e) {
            var t = e.select
              , n = p.isFunction;
            return t && n(t) ? t : null
        }
        var h, p = window.kendo, f = p.ui, m = p._activeElement, g = p.support.touch && p.support.mobileOS, v = "mousedown", _ = "click", b = e.extend, k = e.proxy, w = e.each, y = p.template, x = p.keys, C = f.Widget, T = /^(ul|a|div)$/i, S = ".kendoMenu", D = "img", F = "open", E = "k-menu", A = "k-link", R = "k-last", I = "close", M = "timer", z = "k-first", H = "k-image", N = "select", B = "zIndex", P = "activate", L = "deactivate", O = "touchstart" + S + " MSPointerDown" + S + " pointerdown" + S, V = p.support.pointers, W = p.support.msPointers, U = W || V, q = V ? "pointerover" : W ? "MSPointerOver" : "mouseenter", j = V ? "pointerout" : W ? "MSPointerOut" : "mouseleave", $ = g || U, G = e(document.documentElement), Y = "kendoPopup", K = "k-state-default", Q = "k-state-hover", X = "k-state-focused", J = "k-state-disabled", Z = "k-state-selected", ee = ".k-menu", te = ".k-menu-group", ne = te + ",.k-animation-container", ie = ":not(.k-list) > .k-item", re = ".k-item.k-state-disabled", oe = ".k-item:not(.k-state-disabled)", ae = ".k-item:not(.k-state-disabled) > .k-link", se = ":not(.k-item.k-separator)", le = se + ":eq(0)", de = se + ":last", ue = "div:not(.k-animation-container,.k-list-container)", ce = {
            2: 1,
            touch: 1
        }, he = {
            content: y("<div #= contentCssAttributes(item) # tabindex='-1'>#= content(item) #</div>"),
            group: y("<ul class='#= groupCssClass(group) #'#= groupAttributes(group) # role='menu' aria-hidden='true'>#= renderItems(data) #</ul>"),
            itemWrapper: y("<#= tag(item) # class='#= textClass(item) #'#= textAttributes(item) #>#= image(data) ##= sprite(item) ##= text(item) ##= arrow(data) #</#= tag(item) #>"),
            item: y("<li class='#= wrapperCssClass(group, item) #' #= itemCssAttributes(item) # role='menuitem'  #=item.items ? \"aria-haspopup='true'\": \"\"##=item.enabled === false ? \"aria-disabled='true'\" : ''#>#= itemWrapper(data) ## if (item.items) { ##= subGroup({ items: item.items, menu: menu, group: { expanded: item.expanded } }) ## } else if (item.content || item.contentUrl) { ##= renderContent(data) ## } #</li>"),
            image: y("<img #= imageCssAttributes(item) # alt='' src='#= item.imageUrl #' />"),
            arrow: y("<span class='#= arrowClass(item, group) #'></span>"),
            sprite: y("<span class='k-sprite #= spriteCssClass #'></span>"),
            empty: y("")
        }, pe = {
            wrapperCssClass: function(e, t) {
                var n = "k-item"
                  , i = t.index;
                return n += t.enabled === !1 ? " k-state-disabled" : " k-state-default",
                e.firstLevel && 0 === i && (n += " k-first"),
                i == e.length - 1 && (n += " k-last"),
                t.cssClass && (n += " " + t.cssClass),
                t.attr && t.attr.hasOwnProperty("class") && (n += " " + t.attr["class"]),
                t.selected && (n += " " + Z),
                n
            },
            itemCssAttributes: function(e) {
                var t, n = "", i = e.attr || {};
                for (t in i)
                    i.hasOwnProperty(t) && "class" !== t && (n += t + '="' + i[t] + '" ');
                return n
            },
            imageCssAttributes: function(e) {
                var t, n = "", i = e.imageAttr || {};
                i["class"] ? i["class"] += " " + H : i["class"] = H;
                for (t in i)
                    i.hasOwnProperty(t) && (n += t + '="' + i[t] + '" ');
                return n
            },
            contentCssAttributes: function(e) {
                var t, n = "", i = e.contentAttr || {}, r = "k-content k-group k-menu-group";
                i["class"] ? i["class"] += " " + r : i["class"] = r;
                for (t in i)
                    i.hasOwnProperty(t) && (n += t + '="' + i[t] + '" ');
                return n
            },
            textClass: function() {
                return A
            },
            textAttributes: function(e) {
                return e.url ? " href='" + e.url + "'" : ""
            },
            arrowClass: function(e, t) {
                var n = "k-icon";
                return n += t.horizontal ? " k-i-arrow-60-down" : " k-i-arrow-60-right"
            },
            text: function(e) {
                return e.encoded === !1 ? e.text : p.htmlEncode(e.text)
            },
            tag: function(e) {
                return e.url ? "a" : "span"
            },
            groupAttributes: function(e) {
                return e.expanded !== !0 ? " style='display:none'" : ""
            },
            groupCssClass: function() {
                return "k-group k-menu-group"
            },
            content: function(e) {
                return e.content ? e.content : "&nbsp;"
            }
        }, fe = C.extend({
            init: function(t, n) {
                var i = this;
                C.fn.init.call(i, t, n),
                t = i.wrapper = i.element,
                n = i.options,
                i._initData(n),
                i._updateClasses(),
                i._animations(n),
                i.nextItemZIndex = 100,
                i._tabindex(),
                i._focusProxy = k(i._focusHandler, i),
                t.on(O, oe, i._focusProxy).on(_ + S, re, !1).on(_ + S, oe, k(i._click, i)).on("keydown" + S, k(i._keydown, i)).on("focus" + S, k(i._focus, i)).on("focus" + S, ".k-content", k(i._focus, i)).on(O + " " + v + S, ".k-content", k(i._preventClose, i)).on("blur" + S, k(i._removeHoverItem, i)).on("blur" + S, "[tabindex]", k(i._checkActiveElement, i)).on(q + S, oe, k(i._mouseenter, i)).on(j + S, oe, k(i._mouseleave, i)).on(q + S + " " + j + S + " " + v + S + " " + _ + S, ae, k(i._toggleHover, i)),
                n.openOnClick && (i.clicked = !1,
                i._documentClickHandler = k(i._documentClick, i),
                e(document).click(i._documentClickHandler)),
                t.attr("role", "menubar"),
                t[0].id && (i._ariaId = p.format("{0}_mn_active", t[0].id)),
                p.notify(i)
            },
            events: [F, I, P, L, N],
            options: {
                name: "Menu",
                animation: {
                    open: {
                        duration: 200
                    },
                    close: {
                        duration: 100
                    }
                },
                orientation: "horizontal",
                direction: "default",
                openOnClick: !1,
                closeOnClick: !0,
                hoverDelay: 100,
                popupCollision: t
            },
            _initData: function(e) {
                var t = this;
                e.dataSource && (t.angular("cleanup", function() {
                    return {
                        elements: t.element.children()
                    }
                }),
                t.element.empty(),
                t.append(e.dataSource, t.element),
                t.angular("compile", function() {
                    return {
                        elements: t.element.children()
                    }
                }))
            },
            setOptions: function(e) {
                var t = this.options.animation;
                this._animations(e),
                e.animation = b(!0, t, e.animation),
                "dataSource"in e && this._initData(e),
                this._updateClasses(),
                C.fn.setOptions.call(this, e)
            },
            destroy: function() {
                var t = this;
                C.fn.destroy.call(t),
                t.element.off(S),
                t._documentClickHandler && e(document).unbind("click", t._documentClickHandler),
                p.destroy(t.element)
            },
            enable: function(e, t) {
                return this._toggleDisabled(e, t !== !1),
                this
            },
            disable: function(e) {
                return this._toggleDisabled(e, !1),
                this
            },
            append: function(e, t) {
                t = this.element.find(t);
                var n = this._insert(e, t, t.length ? t.find("> .k-menu-group, > .k-animation-container > .k-menu-group") : null);
                return w(n.items, function(t) {
                    n.group.append(this),
                    a(this),
                    d(this, e[t] || e)
                }),
                a(t),
                l(n.group.find(".k-first, .k-last").add(n.items)),
                this
            },
            insertBefore: function(e, t) {
                t = this.element.find(t);
                var n = this._insert(e, t, t.parent());
                return w(n.items, function(n) {
                    t.before(this),
                    a(this),
                    l(this),
                    d(this, e[n] || e)
                }),
                l(t),
                this
            },
            insertAfter: function(e, t) {
                t = this.element.find(t);
                var n = this._insert(e, t, t.parent());
                return w(n.items, function(n) {
                    t.after(this),
                    a(this),
                    l(this),
                    d(this, e[n] || e)
                }),
                l(t),
                this
            },
            _insert: function(t, n, i) {
                var r, a, s, l, d = this;
                return n && n.length || (i = d.element),
                s = e.isPlainObject(t),
                l = {
                    firstLevel: i.hasClass(E),
                    horizontal: i.hasClass(E + "-horizontal"),
                    expanded: !0,
                    length: i.children().length
                },
                n && !i.length && (i = e(fe.renderGroup({
                    group: l
                })).appendTo(n)),
                s || e.isArray(t) ? r = e(e.map(s ? [t] : t, function(t, n) {
                    return "string" == typeof t ? e(t).get() : e(fe.renderItem({
                        group: l,
                        item: b(t, {
                            index: n
                        })
                    })).get()
                })) : (r = "string" == typeof t && "<" != t.charAt(0) ? d.element.find(t) : e(t),
                a = r.find("> ul").addClass("k-menu-group").attr("role", "menu"),
                r = r.filter("li"),
                r.add(a.find("> li")).each(function() {
                    o(this)
                })),
                {
                    items: r,
                    group: i
                }
            },
            remove: function(e) {
                var t, n, i, r;
                return e = this.element.find(e),
                t = this,
                n = e.parentsUntil(t.element, ie),
                i = e.parent("ul:not(.k-menu)"),
                e.remove(),
                i && !i.children(ie).length && (r = i.parent(".k-animation-container"),
                r.length ? r.remove() : i.remove()),
                n.length && (n = n.eq(0),
                a(n),
                l(n)),
                t
            },
            open: function(r) {
                var o = this
                  , a = o.options
                  , s = "horizontal" == a.orientation
                  , l = a.direction
                  , d = p.support.isRtl(o.wrapper);
                return r = o.element.find(r),
                /^(top|bottom|default)$/.test(l) && (l = d ? s ? (l + " left").replace("default", "bottom") : "left" : s ? (l + " right").replace("default", "bottom") : "right"),
                r.siblings().find(">.k-popup:visible,>.k-animation-container>.k-popup:visible").each(function() {
                    var t = e(this).data("kendoPopup");
                    t && t.close(!0)
                }),
                r.each(function() {
                    var r = e(this);
                    clearTimeout(r.data(M)),
                    r.data(M, setTimeout(function() {
                        var u, c, h, f, m, v, _, k, w = r.find(".k-menu-group:first:hidden");
                        w[0] && o._triggerEvent({
                            item: r[0],
                            type: F
                        }) === !1 && (!w.find(".k-menu-group")[0] && w.children(".k-item").length > 1 ? (c = e(window).height(),
                        h = function() {
                            w.css({
                                maxHeight: c - (p._outerHeight(w) - w.height()) - p.getShadows(w).bottom,
                                overflow: "auto"
                            })
                        }
                        ,
                        p.support.browser.msie && p.support.browser.version <= 7 ? setTimeout(h, 0) : h()) : w.css({
                            maxHeight: "",
                            overflow: ""
                        }),
                        r.data(B, r.css(B)),
                        r.css(B, o.nextItemZIndex++),
                        u = w.data(Y),
                        f = r.parent().hasClass(E),
                        m = f && s,
                        v = i(l, f, d),
                        _ = a.animation.open.effects,
                        k = _ !== t ? _ : "slideIn:" + n(l, f),
                        u ? (u = w.data(Y),
                        u.options.origin = v.origin,
                        u.options.position = v.position,
                        u.options.animation.open.effects = k) : u = w.kendoPopup({
                            activate: function() {
                                o._triggerEvent({
                                    item: this.wrapper.parent(),
                                    type: P
                                })
                            },
                            deactivate: function(e) {
                                e.sender.element.removeData("targetTransform").css({
                                    opacity: ""
                                }),
                                o._triggerEvent({
                                    item: this.wrapper.parent(),
                                    type: L
                                })
                            },
                            origin: v.origin,
                            position: v.position,
                            collision: a.popupCollision !== t ? a.popupCollision : m ? "fit" : "fit flip",
                            anchor: r,
                            appendTo: r,
                            animation: {
                                open: b(!0, {
                                    effects: k
                                }, a.animation.open),
                                close: a.animation.close
                            },
                            close: function(e) {
                                var t = e.sender.wrapper.parent();
                                o._triggerEvent({
                                    item: t[0],
                                    type: I
                                }) ? e.preventDefault() : (t.css(B, t.data(B)),
                                t.removeData(B),
                                g && (t.removeClass(Q),
                                o._removeHoverItem()))
                            }
                        }).data(Y),
                        w.removeAttr("aria-hidden"),
                        u.open())
                    }, o.options.hoverDelay))
                }),
                o
            },
            close: function(t, n) {
                var i = this
                  , r = i.element;
                return t = r.find(t),
                t.length || (t = r.find(">.k-item")),
                t.each(function() {
                    var t = e(this);
                    !n && i._isRootItem(t) && (i.clicked = !1),
                    clearTimeout(t.data(M)),
                    t.data(M, setTimeout(function() {
                        var e = t.find(".k-menu-group:not(.k-list-container):not(.k-calendar-container):first:visible").data(Y);
                        e && (e.close(),
                        e.element.attr("aria-hidden", !0))
                    }, i.options.hoverDelay))
                }),
                i
            },
            _toggleDisabled: function(t, n) {
                this.element.find(t).each(function() {
                    e(this).toggleClass(K, n).toggleClass(J, !n).attr("aria-disabled", !n)
                })
            },
            _toggleHover: function(t) {
                var n = e(p.eventTarget(t) || t.target).closest(ie)
                  , i = t.type == q || v.indexOf(t.type) !== -1;
                n.parents("li." + J).length || n.toggleClass(Q, i || "mousedown" == t.type || "click" == t.type),
                this._removeHoverItem()
            },
            _preventClose: function() {
                this.options.closeOnClick || (this._closurePrevented = !0)
            },
            _checkActiveElement: function(t) {
                var n = this
                  , i = e(t ? t.currentTarget : this._hoverItem())
                  , o = n._findRootParent(i)[0];
                this._closurePrevented || setTimeout(function() {
                    document.hasFocus() && (r(o, p._activeElement()) || !t || r(o, t.currentTarget)) || n.close(o)
                }, 0),
                this._closurePrevented = !1
            },
            _removeHoverItem: function() {
                var e = this._hoverItem();
                e && e.hasClass(X) && (e.removeClass(X),
                this._oldHoverItem = null)
            },
            _updateClasses: function() {
                var e, t = this.element, n = ".k-menu-init div ul";
                t.removeClass("k-menu-horizontal k-menu-vertical"),
                t.addClass("k-widget k-reset k-header k-menu-init " + E).addClass(E + "-" + this.options.orientation),
                t.find("li > ul").filter(function() {
                    return !p.support.matchesSelector.call(this, n)
                }).addClass("k-group k-menu-group").attr("role", "menu").attr("aria-hidden", t.is(":visible")).end().find("li > div").addClass("k-content").attr("tabindex", "-1"),
                e = t.find("> li,.k-menu-group > li"),
                t.removeClass("k-menu-init"),
                e.each(function() {
                    o(this)
                })
            },
            _mouseenter: function(t) {
                var n = this
                  , i = e(t.currentTarget)
                  , o = i.children(".k-animation-container").length || i.children(te).length;
                t.delegateTarget == i.parents(ee)[0] && (n.options.openOnClick && !n.clicked || g || (V || W) && t.originalEvent.pointerType in ce && n._isRootItem(i.closest(ie)) || !r(t.currentTarget, t.relatedTarget) && o && n.open(i),
                (n.options.openOnClick && n.clicked || $) && i.siblings().each(k(function(e, t) {
                    n.close(t, !0)
                }, n)))
            },
            _mouseleave: function(n) {
                var i = this
                  , o = e(n.currentTarget)
                  , a = o.children(".k-animation-container").length || o.children(te).length;
                return o.parentsUntil(".k-animation-container", ".k-list-container,.k-calendar-container")[0] ? (n.stopImmediatePropagation(),
                t) : (i.options.openOnClick || g || (V || W) && n.originalEvent.pointerType in ce || r(n.currentTarget, n.relatedTarget || n.target) || !a || r(n.currentTarget, p._activeElement()) || i.close(o),
                t)
            },
            _click: function(n) {
                for (var i, r, o, a = this, s = a.options, l = e(p.eventTarget(n)), d = l[0], u = l[0] ? l[0].nodeName.toUpperCase() : "", c = "INPUT" == u || "SELECT" == u || "BUTTON" == u || "LABEL" == u, h = l.closest("." + A), f = l.closest(ie), m = f[0], g = h.attr("href"), v = l.attr("href"), _ = e("<a href='#' />").attr("href"), b = !!g && g !== _, k = b && !!g.match(/^#/), w = !!v && v !== _, y = s.openOnClick && o && a._isRootItem(f); d && d.parentNode != m; )
                    d = d.parentNode;
                if (!e(d).is(ue)) {
                    if (f.hasClass(J))
                        return n.preventDefault(),
                        t;
                    if (n.handled || !a._triggerSelect(l, m) || c || n.preventDefault(),
                    n.handled = !0,
                    r = f.children(ne),
                    o = r.is(":visible"),
                    s.closeOnClick && (!b || k) && (!r.length || y))
                        return f.removeClass(Q).css("height"),
                        a._oldHoverItem = a._findRootParent(f),
                        a.close(h.parentsUntil(a.element, ie)),
                        a.clicked = !1,
                        "MSPointerUp".indexOf(n.type) != -1 && n.preventDefault(),
                        t;
                    b && n.enterKey && h[0].click(),
                    (a._isRootItem(f) && s.openOnClick || p.support.touch || (V || W) && a._isRootItem(f.closest(ie))) && (b || c || w || n.preventDefault(),
                    a.clicked = !0,
                    i = r.is(":visible") ? I : F,
                    (s.closeOnClick || i != I) && a[i](f))
                }
            },
            _triggerSelect: function(e, t) {
                var n, i, r, o = e.data("selectHandler");
                return o && (n = this._getEventData(e),
                o.call(this, n)),
                i = n && n.isDefaultPrevented(),
                r = this._triggerEvent({
                    item: t,
                    type: N
                }),
                i || r
            },
            _getEventData: function(e) {
                var t = {
                    sender: this,
                    target: e,
                    _defaultPrevented: !1,
                    preventDefault: function() {
                        this._defaultPrevented = !0
                    },
                    isDefaultPrevented: function() {
                        return this._defaultPrevented
                    }
                };
                return t
            },
            _documentClick: function(e) {
                r(this.element[0], e.target) || (this.clicked = !1)
            },
            _focus: function(n) {
                var i = this
                  , r = n.target
                  , o = i._hoverItem()
                  , a = m();
                return r == i.wrapper[0] || e(r).is(":kendoFocusable") ? (a === n.currentTarget && (o.length ? i._moveHover([], o) : i._oldHoverItem || i._moveHover([], i.wrapper.children().first())),
                t) : (n.stopPropagation(),
                e(r).closest(".k-content").closest(".k-menu-group").closest(".k-item").addClass(X),
                i.wrapper.focus(),
                t)
            },
            _keydown: function(e) {
                var n, i, r, o = this, a = e.keyCode, s = o._oldHoverItem, l = p.support.isRtl(o.wrapper);
                if (e.target == e.currentTarget || a == x.ESC) {
                    if (s || (s = o._oldHoverItem = o._hoverItem()),
                    i = o._itemBelongsToVertival(s),
                    r = o._itemHasChildren(s),
                    a == x.RIGHT)
                        n = o[l ? "_itemLeft" : "_itemRight"](s, i, r);
                    else if (a == x.LEFT)
                        n = o[l ? "_itemRight" : "_itemLeft"](s, i, r);
                    else if (a == x.DOWN)
                        n = o._itemDown(s, i, r);
                    else if (a == x.UP)
                        n = o._itemUp(s, i, r);
                    else if (a == x.ESC)
                        n = o._itemEsc(s, i);
                    else if (a == x.ENTER || a == x.SPACEBAR)
                        n = s.children(".k-link"),
                        n.length > 0 && (o._click({
                            target: n[0],
                            preventDefault: function() {},
                            enterKey: !0
                        }),
                        o._moveHover(s, o._findRootParent(s)));
                    else if (a == x.TAB)
                        return n = o._findRootParent(s),
                        o._moveHover(s, n),
                        o._checkActiveElement(),
                        t;
                    n && n[0] && (e.preventDefault(),
                    e.stopPropagation())
                }
            },
            _hoverItem: function() {
                return this.wrapper.find(".k-item.k-state-hover,.k-item.k-state-focused").filter(":visible")
            },
            _itemBelongsToVertival: function(e) {
                var t = this.wrapper.hasClass("k-menu-vertical");
                return e.length ? e.parent().hasClass("k-menu-group") || t : t
            },
            _itemHasChildren: function(e) {
                return !!e.length && e.children("ul.k-menu-group, div.k-animation-container").length > 0
            },
            _moveHover: function(t, n) {
                var i = this
                  , r = i._ariaId;
                t.length && n.length && t.removeClass(X),
                n.length && (n[0].id && (r = n[0].id),
                n.addClass(X),
                i._oldHoverItem = n,
                r && (i.element.removeAttr("aria-activedescendant"),
                e("#" + r).removeAttr("id"),
                n.attr("id", r),
                i.element.attr("aria-activedescendant", r)))
            },
            _findRootParent: function(e) {
                return this._isRootItem(e) ? e : e.parentsUntil(ee, "li.k-item").last()
            },
            _isRootItem: function(e) {
                return e.parent().hasClass(E)
            },
            _itemRight: function(e, t, n) {
                var i, r, o = this;
                if (!e.hasClass(J))
                    return t ? n ? (o.open(e),
                    i = e.find(".k-menu-group").children().first()) : "horizontal" == o.options.orientation && (r = o._findRootParent(e),
                    o.close(r),
                    i = r.nextAll(le)) : (i = e.nextAll(le),
                    i.length || (i = e.prevAll(de))),
                    i && !i.length ? i = o.wrapper.children(".k-item").first() : i || (i = []),
                    o._moveHover(e, i),
                    i
            },
            _itemLeft: function(e, t) {
                var n, i = this;
                return t ? (n = e.parent().closest(".k-item"),
                i.close(n),
                i._isRootItem(n) && "horizontal" == i.options.orientation && (n = n.prevAll(le))) : (n = e.prevAll(le),
                n.length || (n = e.nextAll(de))),
                n.length || (n = i.wrapper.children(".k-item").last()),
                i._moveHover(e, n),
                n
            },
            _itemDown: function(e, t, n) {
                var i, r = this;
                if (t)
                    i = e.nextAll(le);
                else {
                    if (!n || e.hasClass(J))
                        return;
                    r.open(e),
                    i = e.find(".k-menu-group").children().first()
                }
                return !i.length && e.length ? i = e.parent().children().first() : e.length || (i = r.wrapper.children(".k-item").first()),
                r._moveHover(e, i),
                i
            },
            _itemUp: function(e, t) {
                var n, i = this;
                if (t)
                    return n = e.prevAll(le),
                    !n.length && e.length ? n = e.parent().children().last() : e.length || (n = i.wrapper.children(".k-item").last()),
                    i._moveHover(e, n),
                    n
            },
            _itemEsc: function(e, t) {
                var n, i = this;
                return t ? (n = e.parent().closest(".k-item"),
                i.close(n),
                i._moveHover(e, n),
                n) : e
            },
            _triggerEvent: function(e) {
                var t = this;
                return t.trigger(e.type, {
                    type: e.type,
                    item: e.item
                })
            },
            _focusHandler: function(t) {
                var n = this
                  , i = e(p.eventTarget(t)).closest(ie);
                i.hasClass(J) || setTimeout(function() {
                    n._moveHover([], i),
                    i.children(".k-content")[0] && i.parent().closest(".k-item").removeClass(X)
                }, 200)
            },
            _animations: function(e) {
                e && "animation"in e && !e.animation && (e.animation = {
                    open: {
                        effects: {}
                    },
                    close: {
                        hide: !0,
                        effects: {}
                    }
                })
            }
        });
        b(fe, {
            renderItem: function(e) {
                e = b({
                    menu: {},
                    group: {}
                }, e);
                var t = he.empty
                  , n = e.item;
                return he.item(b(e, {
                    image: n.imageUrl ? he.image : t,
                    sprite: n.spriteCssClass ? he.sprite : t,
                    itemWrapper: he.itemWrapper,
                    renderContent: fe.renderContent,
                    arrow: n.items || n.content ? he.arrow : t,
                    subGroup: fe.renderGroup
                }, pe))
            },
            renderGroup: function(e) {
                return he.group(b({
                    renderItems: function(e) {
                        for (var t = "", n = 0, i = e.items, r = i ? i.length : 0, o = b({
                            length: r
                        }, e.group); n < r; n++)
                            t += fe.renderItem(b(e, {
                                group: o,
                                item: b({
                                    index: n
                                }, i[n])
                            }));
                        return t
                    }
                }, e, pe))
            },
            renderContent: function(e) {
                return he.content(b(e, pe))
            }
        }),
        h = fe.extend({
            init: function(t, n) {
                var i = this;
                fe.fn.init.call(i, t, n),
                i._marker = p.guid().substring(0, 8),
                i.target = e(i.options.target),
                i._popup(),
                i._wire()
            },
            options: {
                name: "ContextMenu",
                filter: null,
                showOn: "contextmenu",
                orientation: "vertical",
                alignToAnchor: !1,
                target: "body"
            },
            events: [F, I, P, L, N],
            setOptions: function(t) {
                var n = this;
                fe.fn.setOptions.call(n, t),
                n.target.off(n.showOn + S + n._marker, n._showProxy),
                n.userEvents && n.userEvents.destroy(),
                n.target = e(n.options.target),
                t.orientation && n.popup.wrapper[0] && n.popup.element.unwrap(),
                n._wire(),
                fe.fn.setOptions.call(this, t)
            },
            destroy: function() {
                var e = this;
                e.target.off(e.options.showOn + S + e._marker),
                G.off(p.support.mousedown + S + e._marker, e._closeProxy),
                e.userEvents && e.userEvents.destroy(),
                fe.fn.destroy.call(e)
            },
            open: function(n, i) {
                var o = this;
                return n = e(n)[0],
                r(o.element[0], e(n)[0]) ? fe.fn.open.call(o, n) : o._triggerEvent({
                    item: o.element,
                    type: F
                }) === !1 && (o.popup.visible() && o.options.filter && (o.popup.close(!0),
                o.popup.element.kendoStop(!0)),
                i !== t ? (o.popup.wrapper.hide(),
                o.popup.open(n, i)) : (o.popup.options.anchor = (n ? n : o.popup.anchor) || o.target,
                o.popup.element.kendoStop(!0),
                o.popup.open()),
                G.off(o.popup.downEvent, o.popup._mousedownProxy),
                G.on(p.support.mousedown + S + o._marker, o._closeProxy)),
                o
            },
            close: function() {
                var t = this;
                r(t.element[0], e(arguments[0])[0]) ? fe.fn.close.call(t, arguments[0]) : t.popup.visible() && t._triggerEvent({
                    item: t.element,
                    type: I
                }) === !1 && (t.popup.close(),
                G.off(p.support.mousedown + S, t._closeProxy),
                t.unbind(N, t._closeTimeoutProxy))
            },
            _showHandler: function(e) {
                var t, n = e, i = this, o = i.options;
                e.event && (n = e.event,
                n.pageX = e.x.location,
                n.pageY = e.y.location),
                r(i.element[0], e.relatedTarget || e.target) || (i._eventOrigin = n,
                n.preventDefault(),
                n.stopImmediatePropagation(),
                i.element.find("." + X).removeClass(X),
                (o.filter && p.support.matchesSelector.call(n.currentTarget, o.filter) || !o.filter) && (o.alignToAnchor ? (i.popup.options.anchor = n.currentTarget,
                i.open(n.currentTarget)) : (i.popup.options.anchor = n.currentTarget,
                i._targetChild ? (t = i.target.offset(),
                i.open(n.pageX - t.left, n.pageY - t.top)) : i.open(n.pageX, n.pageY))))
            },
            _closeHandler: function(t) {
                var n, i = this, o = e(t.relatedTarget || t.target), a = o.closest(i.target.selector)[0] == i.target[0], s = o.closest(oe).children(ne), l = r(i.element[0], o[0]);
                i._eventOrigin = t,
                n = 3 !== t.which,
                i.popup.visible() && (n && a || !a) && (i.options.closeOnClick && !s[0] && l || !l) && (l ? (this.unbind(N, this._closeTimeoutProxy),
                i.bind(N, i._closeTimeoutProxy)) : i.close())
            },
            _wire: function() {
                var e = this
                  , t = e.options
                  , n = e.target;
                e._showProxy = k(e._showHandler, e),
                e._closeProxy = k(e._closeHandler, e),
                e._closeTimeoutProxy = k(e.close, e),
                n[0] && (p.support.mobileOS && "contextmenu" == t.showOn ? (e.userEvents = new p.UserEvents(n,{
                    filter: t.filter,
                    allowSelection: !1
                }),
                n.on(t.showOn + S + e._marker, !1),
                e.userEvents.bind("hold", e._showProxy)) : t.filter ? n.on(t.showOn + S + e._marker, t.filter, e._showProxy) : n.on(t.showOn + S + e._marker, e._showProxy))
            },
            _triggerEvent: function(n) {
                var i = this
                  , r = e(i.popup.options.anchor)[0]
                  , o = i._eventOrigin;
                return i._eventOrigin = t,
                i.trigger(n.type, b({
                    type: n.type,
                    item: n.item || this.element[0],
                    target: r
                }, o ? {
                    event: o
                } : {}))
            },
            _popup: function() {
                var e = this;
                e._triggerProxy = k(e._triggerEvent, e),
                e.popup = e.element.addClass("k-context-menu").kendoPopup({
                    anchor: e.target || "body",
                    copyAnchorStyles: e.options.copyAnchorStyles,
                    collision: e.options.popupCollision || "fit",
                    animation: e.options.animation,
                    activate: e._triggerProxy,
                    deactivate: e._triggerProxy,
                    appendTo: e.options.appendTo
                }).data("kendoPopup"),
                e._targetChild = r(e.target[0], e.popup.element[0])
            }
        }),
        f.plugin(fe),
        f.plugin(h)
    }(window.kendo.jQuery),
    window.kendo
}, "function" == typeof define && define.amd ? define : function(e, t, n) {
    (n || t)()
}
),
function(e, define) {
    define("kendo.columnmenu.min", ["kendo.popup.min", "kendo.filtermenu.min", "kendo.menu.min"], e)
}(function() {
    return function(e, t) {
        function n(t) {
            return e.trim(t).replace(/&nbsp;/gi, "")
        }
        function i(e, t) {
            var n, i, r, o = {};
            for (n = 0,
            i = e.length; n < i; n++)
                r = e[n],
                o[r[t]] = r;
            return o
        }
        function r(e) {
            var t, n = [];
            for (t = 0; t < e.length; t++)
                e[t].columns ? n = n.concat(r(e[t].columns)) : n.push(e[t]);
            return n
        }
        var o = window.kendo
          , a = o.ui
          , s = e.proxy
          , l = e.extend
          , d = e.grep
          , u = e.map
          , c = e.inArray
          , h = "k-state-selected"
          , p = "asc"
          , f = "desc"
          , m = "change"
          , g = "init"
          , v = "select"
          , _ = "kendoPopup"
          , b = "kendoFilterMenu"
          , k = "kendoMenu"
          , w = ".kendoColumnMenu"
          , y = a.Widget
          , x = y.extend({
            init: function(t, n) {
                var i, r = this;
                y.fn.init.call(r, t, n),
                t = r.element,
                n = r.options,
                r.owner = n.owner,
                r.dataSource = n.dataSource,
                r.field = t.attr(o.attr("field")),
                r.title = t.attr(o.attr("title")),
                i = t.find(".k-header-column-menu"),
                i[0] || (i = t.addClass("k-with-icon").prepend('<a class="k-header-column-menu" href="#" title="' + n.messages.settings + '"><span class="k-icon k-i-more-vertical"></span></a>').find(".k-header-column-menu")),
                r.link = i.attr("tabindex", -1).on("click" + w, s(r._click, r)),
                r.wrapper = e('<div class="k-column-menu"/>'),
                r._refreshHandler = s(r.refresh, r),
                r.dataSource.bind(m, r._refreshHandler)
            },
            _init: function() {
                var e = this;
                e.pane = e.options.pane,
                e.pane && (e._isMobile = !0),
                e._isMobile ? e._createMobileMenu() : e._createMenu(),
                e.owner._muteAngularRebind(function() {
                    e._angularItems("compile")
                }),
                e._sort(),
                e._columns(),
                e._filter(),
                e._lockColumns(),
                e.trigger(g, {
                    field: e.field,
                    container: e.wrapper
                })
            },
            events: [g, "sort", "filtering"],
            options: {
                name: "ColumnMenu",
                messages: {
                    sortAscending: "Sort Ascending",
                    sortDescending: "Sort Descending",
                    filter: "Filter",
                    columns: "Columns",
                    done: "Done",
                    settings: "Column Settings",
                    lock: "Lock",
                    unlock: "Unlock"
                },
                filter: "",
                columns: !0,
                sortable: !0,
                filterable: !0,
                animations: {
                    left: "slide"
                }
            },
            _createMenu: function() {
                var e = this
                  , t = e.options;
                e.wrapper.html(o.template(C)({
                    uid: o.guid(),
                    ns: o.ns,
                    messages: t.messages,
                    sortable: t.sortable,
                    filterable: t.filterable,
                    columns: e._ownerColumns(),
                    showColumns: t.columns,
                    lockedColumns: t.lockedColumns
                })),
                e.popup = e.wrapper[_]({
                    anchor: e.link,
                    open: s(e._open, e),
                    activate: s(e._activate, e),
                    close: function() {
                        e.options.closeCallback && e.options.closeCallback(e.element)
                    }
                }).data(_),
                e.menu = e.wrapper.children()[k]({
                    orientation: "vertical",
                    closeOnClick: !1
                }).data(k)
            },
            _createMobileMenu: function() {
                var e = this
                  , t = e.options
                  , n = o.template(T)({
                    ns: o.ns,
                    field: e.field,
                    title: e.title || e.field,
                    messages: t.messages,
                    sortable: t.sortable,
                    filterable: t.filterable,
                    columns: e._ownerColumns(),
                    showColumns: t.columns,
                    lockedColumns: t.lockedColumns
                });
                e.view = e.pane.append(n),
                e.wrapper = e.view.element.find(".k-column-menu"),
                e.menu = new S(e.wrapper.children(),{
                    pane: e.pane
                }),
                e.view.element.on("click", ".k-done", function(t) {
                    e.close(),
                    t.preventDefault()
                }),
                e.options.lockedColumns && e.view.bind("show", function() {
                    e._updateLockedColumns()
                })
            },
            _angularItems: function(t) {
                var n = this;
                n.angular(t, function() {
                    var t = n.wrapper.find(".k-columns-item input[" + o.attr("field") + "]").map(function() {
                        return e(this).closest("li")
                    })
                      , i = u(n._ownerColumns(), function(e) {
                        return {
                            column: e._originalObject
                        }
                    });
                    return {
                        elements: t,
                        data: i
                    }
                })
            },
            destroy: function() {
                var e = this;
                e._angularItems("cleanup"),
                y.fn.destroy.call(e),
                e.filterMenu && e.filterMenu.destroy(),
                e._refreshHandler && e.dataSource.unbind(m, e._refreshHandler),
                e.options.columns && e.owner && (e._updateColumnsMenuHandler && (e.owner.unbind("columnShow", e._updateColumnsMenuHandler),
                e.owner.unbind("columnHide", e._updateColumnsMenuHandler)),
                e._updateColumnsLockedStateHandler && (e.owner.unbind("columnLock", e._updateColumnsLockedStateHandler),
                e.owner.unbind("columnUnlock", e._updateColumnsLockedStateHandler))),
                e.menu && (e.menu.element.off(w),
                e.menu.destroy()),
                e.wrapper.off(w),
                e.popup && e.popup.destroy(),
                e.view && e.view.purge(),
                e.link.off(w),
                e.owner = null,
                e.wrapper = null,
                e.element = null
            },
            close: function() {
                this.menu.close(),
                this.popup && (this.popup.close(),
                this.popup.element.off("keydown" + w))
            },
            _click: function(e) {
                e.preventDefault(),
                e.stopPropagation();
                var t = this.options;
                t.filter && this.element.is(!t.filter) || (this.popup || this.pane || this._init(),
                this._isMobile ? this.pane.navigate(this.view, this.options.animations.left) : this.popup.toggle())
            },
            _open: function() {
                var t = this;
                e(".k-column-menu").not(t.wrapper).each(function() {
                    e(this).data(_).close()
                }),
                t.popup.element.on("keydown" + w, function(e) {
                    e.keyCode == o.keys.ESC && t.close()
                }),
                t.options.lockedColumns && t._updateLockedColumns()
            },
            _activate: function() {
                this.menu.element.focus()
            },
            _ownerColumns: function() {
                var e = r(this.owner.columns)
                  , t = d(e, function(e) {
                    var t = !0
                      , i = n(e.title || "");
                    return e.menu !== !1 && (e.field || i.length) || (t = !1),
                    t
                });
                return u(t, function(t) {
                    return {
                        originalField: t.field,
                        field: t.field || t.title,
                        title: t.title || t.field,
                        hidden: t.hidden,
                        index: c(t, e),
                        locked: !!t.locked,
                        _originalObject: t
                    }
                })
            },
            _sort: function() {
                var t = this;
                t.options.sortable && (t.refresh(),
                t.menu.bind(v, function(n) {
                    var i, r = e(n.item);
                    r.hasClass("k-sort-asc") ? i = p : r.hasClass("k-sort-desc") && (i = f),
                    i && (r.parent().find(".k-sort-" + (i == p ? f : p)).removeClass(h),
                    t._sortDataSource(r, i),
                    t.close())
                }))
            },
            _sortDataSource: function(e, n) {
                var i, r, o = this, a = o.options.sortable, s = null === a.compare ? t : a.compare, l = o.dataSource, d = l.sort() || [], u = e.hasClass(h) && a && a.allowUnsort !== !1;
                if (n = u ? t : n,
                !o.trigger("sort", {
                    sort: {
                        field: o.field,
                        dir: n,
                        compare: s
                    }
                })) {
                    if (u ? e.removeClass(h) : e.addClass(h),
                    "multiple" === a.mode) {
                        for (i = 0,
                        r = d.length; i < r; i++)
                            if (d[i].field === o.field) {
                                d.splice(i, 1);
                                break
                            }
                        d.push({
                            field: o.field,
                            dir: n,
                            compare: s
                        })
                    } else
                        d = [{
                            field: o.field,
                            dir: n,
                            compare: s
                        }];
                    l.sort(d)
                }
            },
            _columns: function() {
                var t = this;
                t.options.columns && (t._updateColumnsMenu(),
                t._updateColumnsMenuHandler = s(t._updateColumnsMenu, t),
                t.owner.bind(["columnHide", "columnShow"], t._updateColumnsMenuHandler),
                t._updateColumnsLockedStateHandler = s(t._updateColumnsLockedState, t),
                t.owner.bind(["columnUnlock", "columnLock"], t._updateColumnsLockedStateHandler),
                t.menu.bind(v, function(n) {
                    var i, a, s, l = e(n.item), u = r(t.owner.columns);
                    t._isMobile && n.preventDefault(),
                    l.parent().closest("li.k-columns-item")[0] && (i = l.find(":checkbox"),
                    i.attr("disabled") || (s = i.attr(o.attr("field")),
                    a = d(u, function(e) {
                        return e.field == s || e.title == s
                    })[0],
                    a.hidden === !0 ? t.owner.showColumn(a) : t.owner.hideColumn(a)))
                }))
            },
            _updateColumnsMenu: function() {
                var e, t, n, i, r, a, s = o.attr("field"), l = o.attr("locked"), h = d(this._ownerColumns(), function(e) {
                    return !e.hidden
                }), p = d(h, function(e) {
                    return e.originalField
                }), f = d(p, function(e) {
                    return e.locked === !0
                }).length, m = d(p, function(e) {
                    return e.locked !== !0
                }).length;
                for (h = u(h, function(e) {
                    return e.field
                }),
                this.wrapper.find("[role='menuitemcheckbox']").attr("aria-checked", !1),
                a = this.wrapper.find(".k-columns-item input[" + s + "]").prop("disabled", !1).prop("checked", !1),
                e = 0,
                t = a.length; e < t; e++)
                    n = a.eq(e),
                    r = "true" === n.attr(l),
                    i = !1,
                    c(n.attr(s), h) > -1 && (i = !0,
                    n.prop("checked", i)),
                    n.closest("[role='menuitemcheckbox']").attr("aria-checked", i),
                    i && (1 == f && r && n.prop("disabled", !0),
                    1 != m || r || n.prop("disabled", !0))
            },
            _updateColumnsLockedState: function() {
                var e, t, n, r, a = o.attr("field"), s = o.attr("locked"), l = i(this._ownerColumns(), "field"), d = this.wrapper.find(".k-columns-item input[type=checkbox]");
                for (e = 0,
                t = d.length; e < t; e++)
                    n = d.eq(e),
                    r = l[n.attr(a)],
                    r && n.attr(s, r.locked);
                this._updateColumnsMenu()
            },
            _filter: function() {
                var t = this
                  , n = b
                  , i = t.options;
                i.filterable !== !1 && (i.filterable.multi && (n = "kendoFilterMultiCheck",
                i.filterable.dataSource && (i.filterable.checkSource = i.filterable.dataSource,
                delete i.filterable.dataSource)),
                t.filterMenu = t.wrapper.find(".k-filterable")[n](l(!0, {}, {
                    appendToElement: !0,
                    dataSource: i.dataSource,
                    values: i.values,
                    field: t.field,
                    title: t.title,
                    change: function(e) {
                        t.trigger("filtering", {
                            filter: e.filter,
                            field: e.field
                        }) && e.preventDefault()
                    }
                }, i.filterable)).data(n),
                t._isMobile && t.menu.bind(v, function(n) {
                    var i = e(n.item);
                    i.hasClass("k-filter-item") && t.pane.navigate(t.filterMenu.view, t.options.animations.left)
                }))
            },
            _lockColumns: function() {
                var t = this;
                t.menu.bind(v, function(n) {
                    var i = e(n.item);
                    i.hasClass("k-lock") ? (t.owner.lockColumn(t.field),
                    t.close()) : i.hasClass("k-unlock") && (t.owner.unlockColumn(t.field),
                    t.close())
                })
            },
            _updateLockedColumns: function() {
                var e, t, n, i, r = this.field, o = this.owner.columns, a = d(o, function(e) {
                    return e.field == r || e.title == r
                })[0];
                a && (e = a.locked === !0,
                t = d(o, function(t) {
                    return !t.hidden && (t.locked && e || !t.locked && !e)
                }).length,
                n = this.wrapper.find(".k-lock").removeClass("k-state-disabled"),
                i = this.wrapper.find(".k-unlock").removeClass("k-state-disabled"),
                (e || 1 == t) && n.addClass("k-state-disabled"),
                e && 1 != t || i.addClass("k-state-disabled"),
                this._updateColumnsLockedState())
            },
            refresh: function() {
                var e, t, n, i = this, r = i.options.dataSource.sort() || [], o = i.field;
                for (i.wrapper.find(".k-sort-asc, .k-sort-desc").removeClass(h),
                t = 0,
                n = r.length; t < n; t++)
                    e = r[t],
                    o == e.field && i.wrapper.find(".k-sort-" + e.dir).addClass(h);
                i.link[i._filterExist(i.dataSource.filter()) ? "addClass" : "removeClass"]("k-state-active")
            },
            _filterExist: function(e) {
                var t, n, i, r = !1;
                if (e) {
                    for (e = e.filters,
                    n = 0,
                    i = e.length; n < i; n++)
                        t = e[n],
                        t.field == this.field ? r = !0 : t.filters && (r = r || this._filterExist(t));
                    return r
                }
            }
        })
          , C = '<ul id="#=uid#">#if(sortable){#<li class="k-item k-sort-asc"><span class="k-link"><span class="k-icon k-i-sort-asc-sm"></span>${messages.sortAscending}</span></li><li class="k-item k-sort-desc"><span class="k-link"><span class="k-icon k-i-sort-desc-sm"></span>${messages.sortDescending}</span></li>#if(showColumns || filterable){#<li class="k-separator" role="presentation"></li>#}##}##if(showColumns){#<li class="k-item k-columns-item" aria-haspopup="true"><span class="k-link"><span class="k-icon k-i-columns"></span>${messages.columns}</span><ul>#for (var idx = 0; idx < columns.length; idx++) {#<li role="menuitemcheckbox" aria-checked="false"><input type="checkbox" data-#=ns#field="#=columns[idx].field.replace(/"/g,"&\\#34;")#" data-#=ns#index="#=columns[idx].index#" data-#=ns#locked="#=columns[idx].locked#"/>#=columns[idx].title#</li>#}#</ul></li>#if(filterable || lockedColumns){#<li class="k-separator" role="presentation"></li>#}##}##if(filterable){#<li class="k-item k-filter-item" aria-haspopup="true"><span class="k-link"><span class="k-icon k-i-filter"></span>${messages.filter}</span><ul><li><div class="k-filterable"></div></li></ul></li>#if(lockedColumns){#<li class="k-separator" role="presentation"></li>#}##}##if(lockedColumns){#<li class="k-item k-lock"><span class="k-link"><span class="k-icon k-i-lock"></span>${messages.lock}</span></li><li class="k-item k-unlock"><span class="k-link"><span class="k-icon k-i-unlock"></span>${messages.unlock}</span></li>#}#</ul>'
          , T = '<div data-#=ns#role="view" data-#=ns#init-widgets="false" data-#=ns#use-native-scrolling="true" class="k-grid-column-menu"><div data-#=ns#role="header" class="k-header">${messages.settings}<button class="k-button k-done">#=messages.done#</button></div><div class="k-column-menu k-mobile-list"><ul><li><span class="k-link">${title}</span><ul>#if(sortable){#<li class="k-item k-sort-asc"><span class="k-link"><span class="k-icon k-i-sort-asc-sm"></span>${messages.sortAscending}</span></li><li class="k-item k-sort-desc"><span class="k-link"><span class="k-icon k-i-sort-desc-sm"></span>${messages.sortDescending}</span></li>#}##if(lockedColumns){#<li class="k-item k-lock"><span class="k-link"><span class="k-icon k-i-lock"></span>${messages.lock}</span></li><li class="k-item k-unlock"><span class="k-link"><span class="k-icon k-i-unlock"></span>${messages.unlock}</span></li>#}##if(filterable){#<li class="k-item k-filter-item"><span class="k-link k-filterable"><span class="k-icon k-i-filter"></span>${messages.filter}</span></li>#}#</ul></li>#if(showColumns){#<li class="k-columns-item"><span class="k-link">${messages.columns}</span><ul>#for (var idx = 0; idx < columns.length; idx++) {#<li class="k-item"><label class="k-label"><input type="checkbox" class="k-check" data-#=ns#field="#=columns[idx].field.replace(/"/g,"&\\#34;")#" data-#=ns#index="#=columns[idx].index#" data-#=ns#locked="#=columns[idx].locked#"/>#=columns[idx].title#</label></li>#}#</ul></li>#}#</ul></div></div>'
          , S = y.extend({
            init: function(e, t) {
                y.fn.init.call(this, e, t),
                this.element.on("click" + w, "li.k-item:not(.k-separator):not(.k-state-disabled)", "_click")
            },
            events: [v],
            _click: function(t) {
                e(t.target).is("[type=checkbox]") || t.preventDefault(),
                this.trigger(v, {
                    item: t.currentTarget
                })
            },
            close: function() {
                this.options.pane.navigate("")
            },
            destroy: function() {
                y.fn.destroy.call(this),
                this.element.off(w)
            }
        });
        a.plugin(x)
    }(window.kendo.jQuery),
    window.kendo
}, "function" == typeof define && define.amd ? define : function(e, t, n) {
    (n || t)()
}
),

function(e, define) {
    define("spreadsheet/filtermenu.min", ["kendo.core.min", "kendo.popup.min", "kendo.treeview.min", "kendo.numerictextbox.min", "kendo.datepicker.min", "kendo.datetimepicker.min"], e)
}(function() {
    !function(e) {
        function t(e) {
            var t, n = {}, i = [];
            for (t = 0; t < e.length; t++)
                n[e[t].value] ? !n[e[t].value].checked && e[t].checked && (n[e[t].value].checked = !0) : (n[e[t].value] = e[t],
                i.push(e[t]));
            return i
        }
        function n(t, i) {
            var r, o, a, s, l, d = !1, u = t instanceof e.data.HierarchicalDataSource && t.data();
            for (r = 0; r < u.length; r++)
                o = u[r],
                a = ("" + o.text).toLowerCase(),
                s = i === !0 || "" === i || a.indexOf(i) >= 0,
                l = n(o.children, s || i),
                d = d || l || s,
                o.hidden = !s && !l,
                o.checked = !o.hidden;
            return u && t.filter({
                field: "hidden",
                operator: "neq",
                value: !0
            }),
            d
        }
        function i(t) {
            var n, r, o = t instanceof e.data.HierarchicalDataSource && t.data();
            for (n = 0; n < o.length; n++)
                r = o[n],
                r.checked = !1,
                r.hasChildren && i(r.children)
        }
        function r(e) {
            var t, n, i = d.operators, r = [];
            for (t in e)
                if (e.hasOwnProperty(t))
                    for (n in e[t])
                        e[t].hasOwnProperty(n) && r.push({
                            text: i[t][n],
                            value: n,
                            unique: t + "_" + n,
                            type: t
                        });
            return r
        }
        var o, a, s, l, d, u, c, h, p;
        e.support.browser.msie && e.support.browser.version < 9 || (o = e.jQuery,
        a = e.ui.Widget,
        s = {
            details: "k-details",
            button: "k-button",
            detailsSummary: "k-details-summary",
            detailsContent: "k-details-content",
            icon: "k-icon",
            iconCollapse: "k-i-arrow-45-down-right",
            iconExpand: "k-i-arrow-60-right",
            iconSearch: "k-i-zoom",
            textbox: "k-textbox",
            wrapper: "k-spreadsheet-filter-menu",
            filterByCondition: "k-spreadsheet-condition-filter",
            filterByValue: "k-spreadsheet-value-filter",
            valuesTreeViewWrapper: "k-spreadsheet-value-treeview-wrapper",
            actionButtons: "k-action-buttons"
        },
        l = a.extend({
            init: function(t, n) {
                a.fn.init.call(this, t, n),
                this.element.addClass(p.classNames.details),
                this._summary = this.element.find("." + p.classNames.detailsSummary).on("click", this._toggle.bind(this));
                var i = n.expanded ? p.classNames.iconCollapse : p.classNames.iconExpand;
                this._icon = o("<span />", {
                    "class": p.classNames.icon + " " + i
                }).prependTo(this._summary),
                this._container = e.wrap(this._summary.next(), !0),
                n.expanded || this._container.hide()
            },
            options: {
                name: "Details"
            },
            events: ["toggle"],
            visible: function() {
                return this.options.expanded
            },
            toggle: function(t) {
                var n = e.fx(this._container).expand("vertical");
                n.stop()[t ? "reverse" : "play"](),
                this._icon.toggleClass(p.classNames.iconExpand, t).toggleClass(p.classNames.iconCollapse, !t),
                this.options.expanded = !t
            },
            _toggle: function() {
                var e = this.visible();
                this.toggle(e),
                this.trigger("toggle", {
                    show: e
                })
            }
        }),
        d = e.spreadsheet.messages.filterMenu = {
            sortAscending: "Sort range A to Z",
            sortDescending: "Sort range Z to A",
            filterByValue: "Filter by value",
            filterByCondition: "Filter by condition",
            apply: "Apply",
            search: "Search",
            addToCurrent: "Add to current selection",
            clear: "Clear",
            blanks: "(Blanks)",
            operatorNone: "None",
            and: "AND",
            or: "OR",
            operators: {
                string: {
                    contains: "Text contains",
                    doesnotcontain: "Text does not contain",
                    startswith: "Text starts with",
                    endswith: "Text ends with",
                    matches: "Text matches",
                    doesnotmatch: "Text does not match"
                },
                date: {
                    eq: "Date is",
                    neq: "Date is not",
                    lt: "Date is before",
                    gt: "Date is after"
                },
                number: {
                    eq: "Is equal to",
                    neq: "Is not equal to",
                    gte: "Is greater than or equal to",
                    gt: "Is greater than",
                    lte: "Is less than or equal to",
                    lt: "Is less than"
                }
            }
        },
        e.data.binders.spreadsheetFilterValue = e.data.Binder.extend({
            init: function(t, n, i) {
                e.data.Binder.fn.init.call(this, t, n, i),
                this._change = o.proxy(this.change, this),
                o(this.element).on("change", this._change)
            },
            refresh: function() {
                var e = this
                  , t = e.bindings.spreadsheetFilterValue.get();
                o(e.element).val(t instanceof Date ? "" : t)
            },
            change: function() {
                var e = this.element.value;
                this.bindings.spreadsheetFilterValue.set(e)
            }
        }),
        e.data.binders.widget.spreadsheetFilterValue = e.data.Binder.extend({
            init: function(t, n, i) {
                e.data.Binder.fn.init.call(this, t.element[0], n, i),
                this.widget = t,
                this._change = o.proxy(this.change, this),
                this.widget.first("change", this._change)
            },
            refresh: function() {
                var e = this.bindings.spreadsheetFilterValue
                  , t = e.get()
                  , n = o(this.widget.element).data("filterType");
                this.widget.value("date" === n && t instanceof Date || "number" === n && !isNaN(t) ? t : null)
            },
            change: function() {
                var e = this.widget.value()
                  , t = this.bindings.spreadsheetFilterValue;
                t.set(e)
            }
        }),
        u = {
            filterByValue: "<div class='" + s.detailsSummary + "'>#= messages.filterByValue #</div><div class='" + s.detailsContent + "'><div class='k-textbox k-space-right'><input placeholder='#= messages.search #' data-#=ns#bind='events: { input: filterValues }' /><span class='k-icon k-i-zoom' /></div><div data-#=ns#bind='visible: hasActiveSearch'><input class='k-checkbox' type='checkbox' data-#=ns#bind='checked: appendToSearch' id='_#=guid#' /><label class='k-checkbox-label' for='_#=guid#'>#= messages.addToCurrent #</label></div><div class='" + s.valuesTreeViewWrapper + "'><div data-#=ns#role='treeview' data-#=ns#checkboxes='{ checkChildren: true }' data-#=ns#bind='source: valuesDataSource, events: { check: valuesChange, select: valueSelect }' /></div></div>",
            filterByCondition: "<div class='" + s.detailsSummary + "'>#= messages.filterByCondition #</div><div class='" + s.detailsContent + '\'><div><select data-#=ns#role="dropdownlist"data-#=ns#bind="value: operator, source: operators, events: { change: operatorChange } "data-value-primitive="false"data-option-label="#=messages.operatorNone#"data-height="auto"data-text-field="text"data-value-field="unique"></select></div><div data-#=ns#bind="visible: isString"><input data-filter-type="string" data-#=ns#bind="spreadsheetFilterValue: customFilter.criteria[0].value" class="k-textbox" /></div><div data-#=ns#bind="visible: isNumber"><input data-filter-type="number" data-#=ns#role="numerictextbox" data-#=ns#bind="spreadsheetFilterValue: customFilter.criteria[0].value" /></div><div data-#=ns#bind="visible: isDate"><input data-filter-type="date" data-#=ns#role="datepicker" data-#=ns#bind="spreadsheetFilterValue: customFilter.criteria[0].value" /></div></div>',
            menuItem: "<li data-command='#=command#' data-dir='#=dir#'><span class='k-icon k-i-#=iconClass#'></span>#=text#</li>",
            actionButtons: "<button data-#=ns#bind='click: apply' class='k-button k-primary'>#=messages.apply#</button><button data-#=ns#bind='click: clear' class='k-button'>#=messages.clear#</button>"
        },
        c = e.spreadsheet.FilterMenuViewModel = e.data.ObservableObject.extend({
            valuesChange: function(t) {
                var n = t ? t.sender.dataSource : this.valuesDataSource
                  , i = function(e) {
                    return e.checked
                }
                  , r = function(t) {
                    return "date" === t.dataType ? e.spreadsheet.dateToNumber(t.value) : t.value
                }
                  , o = function(e, t, n) {
                    return n.lastIndexOf(e) === t
                }
                  , a = n.data()
                  , s = a[0].children.data().toJSON()
                  , l = s.filter(function(e) {
                    return "blank" === e.dataType
                });
                l = !!l.length && l[0].checked,
                s = s.filter(i).map(r),
                this.appendToSearch && this.valueFilter && this.valueFilter.values.length && (s = s.concat(this.valueFilter.values.toJSON()).sort().filter(o)),
                this.set("valueFilter", {
                    values: s,
                    blanks: l
                })
            },
            valueSelect: function(e) {
                e.preventDefault();
                var t = e.sender.dataItem(e.node);
                t.set("checked", !t.checked)
            },
            hasActiveSearch: !1,
            appendToSearch: !1,
            filterValues: function(e) {
                var t = "string" == typeof e ? e : o(e.target).val().toLowerCase()
                  , r = this.valuesDataSource;
                this.set("hasActiveSearch", !!t),
                i(r),
                n(r, t)
            },
            reset: function() {
                this.set("customFilter", {
                    logic: "and",
                    criteria: [{
                        operator: null,
                        value: null
                    }]
                }),
                this.set("valueFilter", {
                    values: []
                })
            },
            operatorChange: function(e) {
                var t = e.sender.dataItem();
                this.set("operatorType", t.type),
                this.set("customFilter.criteria[0].operator", t.value)
            },
            isNone: function() {
                return void 0 === this.get("operatorType")
            },
            isString: function() {
                return "string" === this.get("operatorType")
            },
            isNumber: function() {
                return "number" === this.get("operatorType")
            },
            isDate: function() {
                return "date" === this.get("operatorType")
            }
        }),
        h = e.spreadsheet.FilterMenuController = {
            valuesTree: function(e, t) {
                return [{
                    text: "All",
                    expanded: !0,
                    checked: !0,
                    items: this.values(e.resize({
                        top: 1
                    }), t)
                }]
            },
            values: function(n, i) {
                var r = []
                  , o = d
                  , a = n.column(i)
                  , s = n.sheet();
                return a.forEachCell(function(t, n, i) {
                    var a, l, d;
                    s.isHiddenRow(t) || (a = i.value,
                    l = i.dataType,
                    d = i.text,
                    l = void 0 === a ? "blank" : i.format ? e.spreadsheet.formatting.type(a, i.format) : typeof a,
                    d = null !== a && i.format ? e.spreadsheet.formatting.text(a, i.format) : "blank" == l ? o.blanks : a,
                    "percent" === l && (l = "number"),
                    "date" === l && (a = e.spreadsheet.numberToDate(a)),
                    r.push({
                        dataType: l,
                        value: a,
                        text: d,
                        checked: !0
                    }))
                }),
                r = t(r),
                r.sort(function(e, t) {
                    return e.dataType === t.dataType ? 0 : "blank" === e.dataType || "blank" === t.dataType ? "blank" === e.dataType ? -1 : 1 : "number" === e.dataType || "number" === t.dataType ? "number" === e.dataType ? -1 : 1 : "date" === e.dataType || "date" === t.dataType ? "date" === e.dataType ? -1 : 1 : 0
                }),
                r
            },
            filterType: function(e, t) {
                var n, i, r, o = e.sheet(), a = this.filterForColumn(t, o);
                return a = a && a.filter.toJSON(),
                a && "custom" == a.filter && (i = a.criteria[0].value,
                i instanceof Date ? n = "date" : "string" == typeof i ? n = "string" : "number" == typeof i && (n = "number")),
                n || (r = this.values(e.row(1), t)[0],
                n = r && r.dataType,
                "blank" == n && (n = null)),
                n
            },
            filterForColumn: function(e, t) {
                var n, i = t.filter();
                return i && (n = i.columns.filter(function(t) {
                    return t.index === e
                })[0]),
                n
            },
            filter: function(e, t) {
                var n, i, r, o, a = this.filterForColumn(e, t);
                if (a)
                    return n = a.filter.toJSON(),
                    i = n.filter,
                    delete n.filter,
                    r = {
                        type: i,
                        options: n
                    },
                    o = n.criteria,
                    o && o.length && (r.operator = o[0].operator),
                    r
            }
        },
        p = a.extend({
            init: function(e, t) {
                a.call(this, e, t),
                this.element.addClass(p.classNames.wrapper),
                this.viewModel = new c({
                    active: "value",
                    operator: null,
                    operators: r(this.options.operators),
                    clear: this.clear.bind(this),
                    apply: this.apply.bind(this)
                }),
                this._filterInit(),
                this._popup(),
                this._sort(),
                this._filterByCondition(),
                this._filterByValue(),
                this._actionButtons()
            },
            options: {
                name: "FilterMenu",
                column: 0,
                range: null,
                operators: {
                    string: {
                        contains: "Text contains",
                        doesnotcontain: "Text does not contain",
                        startswith: "Text starts with",
                        endswith: "Text ends with",
                        matches: "Text matches",
                        doesnotmatch: "Text does not match"
                    },
                    date: {
                        eq: "Date is",
                        neq: "Date is not",
                        lt: "Date is before",
                        gt: "Date is after"
                    },
                    number: {
                        eq: "Is equal to",
                        neq: "Is not equal to",
                        gte: "Is greater than or equal to",
                        gt: "Is greater than",
                        lte: "Is less than or equal to",
                        lt: "Is less than"
                    }
                }
            },
            events: ["action"],
            destroy: function() {
                a.fn.destroy.call(this),
                this.menu.destroy(),
                this.valuesTreeView.destroy(),
                this.popup.destroy()
            },
            openFor: function(e) {
                this.popup.setOptions({
                    anchor: e
                }),
                this.popup.open()
            },
            close: function() {
                this.popup.close()
            },
            clear: function() {
                this.action({
                    command: "ClearFilterCommand",
                    options: {
                        column: this.options.column
                    }
                }),
                this.viewModel.reset(),
                this.close()
            },
            apply: function() {
                var e, t, n;
                this._active(),
                e = {
                    operatingRange: this.options.range,
                    column: this.options.column
                },
                "value" === this.viewModel.active ? (this.viewModel.valuesChange({
                    sender: this.valuesTreeView
                }),
                t = this.viewModel.valueFilter.toJSON(),
                (t.blanks || t.values && t.values.length) && (e.valueFilter = t)) : "custom" === this.viewModel.active && (n = this.viewModel.customFilter.toJSON(),
                n.criteria.length && null !== n.criteria[0].value && (e.customFilter = n)),
                (e.valueFilter || e.customFilter) && this.action({
                    command: "ApplyFilterCommand",
                    options: e
                })
            },
            action: function(e) {
                this.trigger("action", o.extend({}, e))
            },
            _filterInit: function() {
                var e, t = this.options.column, n = this.options.range, i = n.sheet(), r = h.filter(t, i);
                r ? (e = h.filterType(n, t),
                this.viewModel.set("active", r.type),
                this.viewModel.set(r.type + "Filter", r.options),
                "custom" == r.type && (this.viewModel.set("operator", e + "_" + r.operator),
                this.viewModel.set("operatorType", e))) : this.viewModel.reset()
            },
            _popup: function() {
                this.popup = this.element.kendoPopup({
                    copyAnchorStyles: !1
                }).data("kendoPopup")
            },
            _sort: function() {
                var t = e.template(p.templates.menuItem)
                  , n = d
                  , i = [{
                    command: "sort",
                    dir: "asc",
                    text: n.sortAscending,
                    iconClass: "sort-asc"
                }, {
                    command: "sort",
                    dir: "desc",
                    text: n.sortDescending,
                    iconClass: "sort-desc"
                }]
                  , r = o("<ul />", {
                    html: e.render(t, i)
                }).appendTo(this.element);
                this.menu = r.kendoMenu({
                    orientation: "vertical",
                    select: function(e) {
                        var t = o(e.item).data("dir")
                          , n = this.options.range.resize({
                            top: 1
                        })
                          , i = {
                            value: t,
                            sheet: !1,
                            operatingRange: n,
                            column: this.options.column
                        };
                        n.isSortable() ? this.action({
                            command: "SortCommand",
                            options: i
                        }) : this.close()
                    }
                    .bind(this)
                }).data("kendoMenu")
            },
            _appendTemplate: function(t, n, i, r) {
                var a = e.template(t)
                  , s = o("<div class='" + n + "'/>").html(a({
                    messages: d,
                    guid: e.guid(),
                    ns: e.ns
                }));
                return this.element.append(s),
                i && (i = new l(s,{
                    expanded: r,
                    toggle: this._detailToggle.bind(this)
                })),
                e.bind(s, this.viewModel),
                s
            },
            _detailToggle: function(e) {
                this.element.find("[data-role=details]").not(e.sender.element).data("kendoDetails").toggle(!e.show)
            },
            _filterByCondition: function() {
                var e = "custom" === this.viewModel.active;
                this._appendTemplate(p.templates.filterByCondition, p.classNames.filterByCondition, !0, e)
            },
            _filterByValue: function() {
                var t, n = "value" === this.viewModel.active, i = this._appendTemplate(p.templates.filterByValue, p.classNames.filterByValue, !0, n);
                this.valuesTreeView = i.find("[data-role=treeview]").data("kendoTreeView"),
                t = h.valuesTree(this.options.range, this.options.column),
                this.viewModel.set("valuesDataSource", new e.data.HierarchicalDataSource({
                    data: t
                }))
            },
            _actionButtons: function() {
                this._appendTemplate(p.templates.actionButtons, p.classNames.actionButtons, !1)
            },
            _active: function() {
                var e = this.element.find("[data-role=details]").filter(function(e, t) {
                    return o(t).data("kendoDetails").visible()
                });
                e.hasClass(p.classNames.filterByValue) ? this.viewModel.set("active", "value") : e.hasClass(p.classNames.filterByCondition) && this.viewModel.set("active", "custom")
            }
        }),
        e.spreadsheet.FilterMenu = p,
        o.extend(!0, p, {
            classNames: s,
            templates: u
        }))
    }(window.kendo)
}, "function" == typeof define && define.amd ? define : function(e, t, n) {
    (n || t)()
}
),



function(e, define) {
    define("kendo.datepicker.min", ["kendo.calendar.min", "kendo.popup.min"], e)
}(function() {
    return function(e, t) {
        function n(t) {
            var n = t.parseFormats
              , i = t.format;
            H.normalize(t),
            n = e.isArray(n) ? n : [n],
            n.length || n.push("yyyy-MM-dd"),
            e.inArray(i, n) === -1 && n.splice(0, 0, t.format),
            t.parseFormats = n
        }
        function i(e) {
            e.preventDefault()
        }
        var r, o = window.kendo, a = o.ui, s = a.Widget, l = o.parseDate, d = o.keys, u = o.template, c = o._activeElement, h = "<div />", p = "<span />", f = ".kendoDatePicker", m = "click" + f, g = "open", v = "close", _ = "change", b = "disabled", k = "readonly", w = "k-state-default", y = "k-state-focused", x = "k-state-selected", C = "k-state-disabled", T = "k-state-hover", S = "mouseenter" + f + " mouseleave" + f, D = "mousedown" + f, F = "id", E = "min", A = "max", R = "month", I = "aria-disabled", M = "aria-expanded", z = "aria-hidden", H = o.calendar, N = H.isInRange, B = H.restrictValue, P = H.isEqualDatePart, L = e.extend, O = e.proxy, V = Date, W = function(t) {
            var n, i = this, r = document.body, s = e(h).attr(z, "true").addClass("k-calendar-container").appendTo(r);
            i.options = t = t || {},
            n = t.id,
            n && (n += "_dateview",
            s.attr(F, n),
            i._dateViewID = n),
            i.popup = new a.Popup(s,L(t.popup, t, {
                name: "Popup",
                isRtl: o.support.isRtl(t.anchor)
            })),
            i.div = s,
            i.value(t.value)
        };
        W.prototype = {
            _calendar: function() {
                var t, n = this, r = n.calendar, s = n.options;
                r || (t = e(h).attr(F, o.guid()).appendTo(n.popup.element).on(D, i).on(m, "td:has(.k-link)", O(n._click, n)),
                n.calendar = r = new a.Calendar(t),
                n._setOptions(s),
                o.calendar.makeUnselectable(r.element),
                r.navigate(n._value || n._current, s.start),
                n.value(n._value))
            },
            _setOptions: function(e) {
                this.calendar.setOptions({
                    focusOnNav: !1,
                    change: e.change,
                    culture: e.culture,
                    dates: e.dates,
                    depth: e.depth,
                    footer: e.footer,
                    format: e.format,
                    max: e.max,
                    min: e.min,
                    month: e.month,
                    weekNumber: e.weekNumber,
                    start: e.start,
                    disableDates: e.disableDates
                })
            },
            setOptions: function(e) {
                var t = this.options
                  , n = e.disableDates;
                n && (e.disableDates = H.disabled(n)),
                this.options = L(t, e, {
                    change: t.change,
                    close: t.close,
                    open: t.open
                }),
                this.calendar && this._setOptions(this.options)
            },
            destroy: function() {
                this.popup.destroy()
            },
            open: function() {
                var e = this;
                e._calendar(),
                e.popup.open()
            },
            close: function() {
                this.popup.close()
            },
            min: function(e) {
                this._option(E, e)
            },
            max: function(e) {
                this._option(A, e)
            },
            toggle: function() {
                var e = this;
                e[e.popup.visible() ? v : g]()
            },
            move: function(e) {
                var t = this
                  , n = e.keyCode
                  , i = t.calendar
                  , r = e.ctrlKey && n == d.DOWN || n == d.ENTER
                  , o = !1;
                if (e.altKey)
                    n == d.DOWN ? (t.open(),
                    e.preventDefault(),
                    o = !0) : n == d.UP && (t.close(),
                    e.preventDefault(),
                    o = !0);
                else if (t.popup.visible()) {
                    if (n == d.ESC || r && i._cell.hasClass(x))
                        return t.close(),
                        e.preventDefault(),
                        !0;
                    t._current = i._move(e),
                    o = !0
                }
                return o
            },
            current: function(e) {
                this._current = e,
                this.calendar._focus(e)
            },
            value: function(e) {
                var t = this
                  , n = t.calendar
                  , i = t.options
                  , r = i.disableDates;
                r && r(e) && (e = null),
                t._value = e,
                t._current = new V((+B(e, i.min, i.max))),
                n && n.value(e)
            },
            _click: function(e) {
                e.currentTarget.className.indexOf(x) !== -1 && this.close()
            },
            _option: function(e, t) {
                var n = this
                  , i = n.calendar;
                n.options[e] = t,
                i && i[e](t)
            }
        },
        W.normalize = n,
        o.DateView = W,
        r = s.extend({
            init: function(t, i) {
                var r, a, d = this;
                s.fn.init.call(d, t, i),
                t = d.element,
                i = d.options,
                i.disableDates = o.calendar.disabled(i.disableDates),
                i.min = l(t.attr("min")) || l(i.min),
                i.max = l(t.attr("max")) || l(i.max),
                n(i),
                d._initialOptions = L({}, i),
                d._wrapper(),
                d.dateView = new W(L({}, i, {
                    id: t.attr(F),
                    anchor: d.wrapper,
                    change: function() {
                        d._change(this.value()),
                        d.close()
                    },
                    close: function(e) {
                        d.trigger(v) ? e.preventDefault() : (t.attr(M, !1),
                        a.attr(z, !0))
                    },
                    open: function(e) {
                        var n, i = d.options;
                        d.trigger(g) ? e.preventDefault() : (d.element.val() !== d._oldText && (n = l(t.val(), i.parseFormats, i.culture),
                        d.dateView[n ? "current" : "value"](n)),
                        t.attr(M, !0),
                        a.attr(z, !1),
                        d._updateARIA(n))
                    }
                })),
                a = d.dateView.div,
                d._icon();
                try {
                    t[0].setAttribute("type", "text")
                } catch (u) {
                    t[0].type = "text"
                }
                t.addClass("k-input").attr({
                    role: "combobox",
                    "aria-expanded": !1,
                    "aria-owns": d.dateView._dateViewID
                }),
                d._reset(),
                d._template(),
                r = t.is("[disabled]") || e(d.element).parents("fieldset").is(":disabled"),
                r ? d.enable(!1) : d.readonly(t.is("[readonly]")),
                d._old = d._update(i.value || d.element.val()),
                d._oldText = t.val(),
                o.notify(d)
            },
            events: [g, v, _],
            options: {
                name: "DatePicker",
                value: null,
                footer: "",
                format: "",
                culture: "",
                parseFormats: [],
                min: new Date(1900,0,1),
                max: new Date(2099,11,31),
                start: R,
                depth: R,
                animation: {},
                month: {},
                dates: [],
                ARIATemplate: 'Current focused date is #=kendo.toString(data.current, "D")#'
            },
            setOptions: function(e) {
                var t = this
                  , i = t._value;
                s.fn.setOptions.call(t, e),
                e = t.options,
                e.min = l(e.min),
                e.max = l(e.max),
                n(e),
                t.dateView.setOptions(e),
                i && (t.element.val(o.toString(i, e.format, e.culture)),
                t._updateARIA(i))
            },
            _editable: function(e) {
                var t = this
                  , n = t._dateIcon.off(f)
                  , r = t.element.off(f)
                  , o = t._inputWrapper.off(f)
                  , a = e.readonly
                  , s = e.disable;
                a || s ? (o.addClass(s ? C : w).removeClass(s ? w : C),
                r.attr(b, s).attr(k, a).attr(I, s)) : (o.addClass(w).removeClass(C).on(S, t._toggleHover),
                r.removeAttr(b).removeAttr(k).attr(I, !1).on("keydown" + f, O(t._keydown, t)).on("focusout" + f, O(t._blur, t)).on("focus" + f, function() {
                    t._inputWrapper.addClass(y)
                }),
                n.on(m, O(t._click, t)).on(D, i))
            },
            readonly: function(e) {
                this._editable({
                    readonly: e === t || e,
                    disable: !1
                })
            },
            enable: function(e) {
                this._editable({
                    readonly: !1,
                    disable: !(e = e === t || e)
                })
            },
            destroy: function() {
                var e = this;
                s.fn.destroy.call(e),
                e.dateView.destroy(),
                e.element.off(f),
                e._dateIcon.off(f),
                e._inputWrapper.off(f),
                e._form && e._form.off("reset", e._resetHandler)
            },
            open: function() {
                this.dateView.open()
            },
            close: function() {
                this.dateView.close()
            },
            min: function(e) {
                return this._option(E, e)
            },
            max: function(e) {
                return this._option(A, e)
            },
            value: function(e) {
                var n = this;
                return e === t ? n._value : (n._old = n._update(e),
                null === n._old && n.element.val(""),
                n._oldText = n.element.val(),
                t)
            },
            _toggleHover: function(t) {
                e(t.currentTarget).toggleClass(T, "mouseenter" === t.type)
            },
            _blur: function() {
                var e = this
                  , t = e.element.val();
                e.close(),
                t !== e._oldText && e._change(t),
                e._inputWrapper.removeClass(y)
            },
            _click: function() {
                var e = this
                  , t = e.element;
                e.dateView.toggle(),
                o.support.touch || t[0] === c() || t.focus()
            },
            _change: function(e) {
                var t, n, i, r = this, a = r.element.val();
                e = r._update(e),
                t = !o.calendar.isEqualDate(r._old, e),
                n = t && !r._typing,
                i = a !== r.element.val(),
                (n || i) && r.element.trigger(_),
                t && (r._old = e,
                r._oldText = r.element.val(),
                r.trigger(_)),
                r._typing = !1
            },
            _keydown: function(e) {
                var t = this
                  , n = t.dateView
                  , i = t.element.val()
                  , r = !1;
                n.popup.visible() || e.keyCode != d.ENTER || i === t._oldText ? (r = n.move(e),
                t._updateARIA(n._current),
                r || (t._typing = !0)) : t._change(i)
            },
            _icon: function() {
                var t, n = this, i = n.element;
                t = i.next("span.k-select"),
                t[0] || (t = e('<span unselectable="on" class="k-select" aria-label="select"><span class="k-icon k-i-calendar"></span></span>').insertAfter(i)),
                n._dateIcon = t.attr({
                    role: "button",
                    "aria-controls": n.dateView._dateViewID
                })
            },
            _option: function(e, n) {
                var i = this
                  , r = i.options;
                return n === t ? r[e] : (n = l(n, r.parseFormats, r.culture),
                n && (r[e] = new V((+n)),
                i.dateView[e](n)),
                t)
            },
            _update: function(e) {
                var t, n = this, i = n.options, r = i.min, a = i.max, s = n._value, d = l(e, i.parseFormats, i.culture), u = null === d && null === s || d instanceof Date && s instanceof Date;
                return i.disableDates(d) && (d = null,
                n._old || n.element.val() || (e = null)),
                +d === +s && u ? (t = o.toString(d, i.format, i.culture),
                t !== e && n.element.val(null === d ? e : t),
                d) : (null !== d && P(d, r) ? d = B(d, r, a) : N(d, r, a) || (d = null),
                n._value = d,
                n.dateView.value(d),
                n.element.val(o.toString(d || e, i.format, i.culture)),
                n._updateARIA(d),
                d)
            },
            _wrapper: function() {
                var t, n = this, i = n.element;
                t = i.parents(".k-datepicker"),
                t[0] || (t = i.wrap(p).parent().addClass("k-picker-wrap k-state-default"),
                t = t.wrap(p).parent()),
                t[0].style.cssText = i[0].style.cssText,
                i.css({
                    width: "100%",
                    height: i[0].style.height
                }),
                n.wrapper = t.addClass("k-widget k-datepicker k-header").addClass(i[0].className),
                n._inputWrapper = e(t[0].firstChild)
            },
            _reset: function() {
                var t = this
                  , n = t.element
                  , i = n.attr("form")
                  , r = i ? e("#" + i) : n.closest("form");
                r[0] && (t._resetHandler = function() {
                    t.value(n[0].defaultValue),
                    t.max(t._initialOptions.max),
                    t.min(t._initialOptions.min)
                }
                ,
                t._form = r.on("reset", t._resetHandler))
            },
            _template: function() {
                this._ariaTemplate = u(this.options.ARIATemplate)
            },
            _updateARIA: function(e) {
                var t, n = this, i = n.dateView.calendar;
                n.element.removeAttr("aria-activedescendant"),
                i && (t = i._cell,
                t.attr("aria-label", n._ariaTemplate({
                    current: e || i.current()
                })),
                n.element.attr("aria-activedescendant", t.attr("id")))
            }
        }),
        a.plugin(r)
    }(window.kendo.jQuery),
    window.kendo
}, "function" == typeof define && define.amd ? define : function(e, t, n) {
    (n || t)()
}
),
function(e, define) {
    define("kendo.editable.min", ["kendo.datepicker.min", "kendo.numerictextbox.min", "kendo.validator.min", "kendo.binder.min"], e)
}(function() {
    return function(e, t) {
        function n(t) {
            return t = null != t ? t : "",
            t.type || e.type(t) || "string"
        }
        function i(t) {
            t.find(":input:not(:button, [" + s.attr("role") + "=upload], [" + s.attr("skip") + "], [type=file]), select").each(function() {
                var t = s.attr("bind")
                  , n = this.getAttribute(t) || ""
                  , i = "checkbox" === this.type || "radio" === this.type ? "checked:" : "value:"
                  , r = this.name;
                n.indexOf(i) === -1 && r && (n += (n.length ? "," : "") + i + r,
                e(this).attr(t, n))
            })
        }
        function r(e) {
            var t, i, r = (e.model.fields || e.model)[e.field], o = n(r), a = r ? r.validation : {}, l = s.attr("type"), d = s.attr("bind"), u = {
                name: e.field
            };
            for (t in a)
                i = a[t],
                f(t, _) >= 0 ? u[l] = t : h(i) || (u[t] = p(i) ? i.value || t : i),
                u[s.attr(t + "-msg")] = i.message;
            return f(o, _) >= 0 && (u[l] = o),
            u[d] = ("boolean" === o ? "checked:" : "value:") + e.field,
            u
        }
        function o(e) {
            var t, n, i, r, o, a;
            if (e && e.length)
                for (a = [],
                t = 0,
                n = e.length; t < n; t++)
                    i = e[t],
                    o = i.text || i.value || i,
                    r = null == i.value ? i.text || i : i.value,
                    a[t] = {
                        text: o,
                        value: r
                    };
            return a
        }
        function a(e, t) {
            var n, i, r = e ? e.validation || {} : {};
            for (n in r)
                i = r[n],
                p(i) && i.value && (i = i.value),
                h(i) && (t[n] = i)
        }
        var s = window.kendo
          , l = s.ui
          , d = l.Widget
          , u = e.extend
          , c = s.support.browser.msie && s.support.browser.version < 9
          , h = s.isFunction
          , p = e.isPlainObject
          , f = e.inArray
          , m = /("|\%|'|\[|\]|\$|\.|\,|\:|\;|\+|\*|\&|\!|\#|\(|\)|<|>|\=|\?|\@|\^|\{|\}|\~|\/|\||`)/g
          , g = '<div class="k-widget k-tooltip k-tooltip-validation" style="margin:0.5em"><span class="k-icon k-i-warning"> </span>#=message#<div class="k-callout k-callout-n"></div></div>'
          , v = "change"
          , _ = ["url", "email", "number", "date", "boolean"]
          , b = {
              number: function(t, n) {
                  var i = r(n);
                  e('<input type="text"/>').attr(i).appendTo(t).kendoNumericTextBox({
                      format: n.format
                  }),
                  e("<span " + s.attr("for") + '="' + n.field + '" class="k-invalid-msg"/>').hide().appendTo(t)
              },
              date: function(t, n) {
                  var i = r(n)
                    , o = n.format;
                  o && (o = s._extractFormat(o)),
                  i[s.attr("format")] = o,
                  e('<input type="text"/>').attr(i).appendTo(t).kendoDatePicker({
                      format: n.format
                  }),
                  e("<span " + s.attr("for") + '="' + n.field + '" class="k-invalid-msg"/>').hide().appendTo(t)
              },
              string: function(t, n) {
                  var i = r(n);
                  e('<input type="text" class="k-input k-textbox"/>').attr(i).appendTo(t)
              },
              "boolean": function(t, n) {
                  var i = r(n);
                  e('<input type="checkbox" />').attr(i).appendTo(t)
              },
              values: function(t, n) {
                  var i = r(n)
                    , a = s.stringify(o(n.values));
                  e("<select " + s.attr("text-field") + '="text"' + s.attr("value-field") + '="value"' + s.attr("source") + "='" + (a ? a.replace(/\'/g, "&apos;") : a) + "'" + s.attr("role") + '="dropdownlist"/>').attr(i).appendTo(t),
                  e("<span " + s.attr("for") + '="' + n.field + '" class="k-invalid-msg"/>').hide().appendTo(t)
              }
          }
          , k = d.extend({
              init: function(t, n) {
                  var i = this;
                  n.target && (n.$angular = n.target.options.$angular),
                  d.fn.init.call(i, t, n),
                  i._validateProxy = e.proxy(i._validate, i),
                  i.refresh()
              },
              events: [v],
              options: {
                  name: "Editable",
                  editors: b,
                  clearContainer: !0,
                  errorTemplate: g
              },
              editor: function(e, t) {
                  var i = this
                    , r = i.options.editors
                    , o = p(e)
                    , a = o ? e.field : e
                    , l = i.options.model || {}
                    , d = o && e.values
                    , c = d ? "values" : n(t)
                    , h = o && e.editor
                    , f = h ? e.editor : r[c]
                    , g = i.element.find("[" + s.attr("container-for") + "=" + a.replace(m, "\\$1") + "]");
                  f = f ? f : r.string,
                  h && "string" == typeof e.editor && (f = function(t) {
                      t.append(e.editor)
                  }
                  ),
                  g = g.length ? g : i.element,
                  f(g, u(!0, {}, o ? e : {
                      field: a
                  }, {
                      model: l
                  }))
              },
              _validate: function(t) {
                  var n, i = this, r = t.value, o = i._validationEventInProgress, a = {}, l = s.attr("bind"), d = t.field.replace(m, "\\$1"), u = RegExp("(value|checked)\\s*:\\s*" + d + "\\s*(,|$)");
                  a[t.field] = t.value,
                  n = e(":input[" + l + '*="' + d + '"]', i.element).filter("[" + s.attr("validate") + "!='false']").filter(function() {
                      return u.test(e(this).attr(l))
                  }),
                  n.length > 1 && (n = n.filter(function() {
                      var t = e(this);
                      return !t.is(":radio") || t.val() == r
                  }));
                  try {
                      i._validationEventInProgress = !0,
                      (!i.validatable.validateInput(n) || !o && i.trigger(v, {
                          values: a
                      })) && t.preventDefault()
                  } finally {
                      i._validationEventInProgress = !1
                  }
              },
              end: function() {
                  return this.validatable.validate()
              },
              destroy: function() {
                  var e = this;
                  e.angular("cleanup", function() {
                      return {
                          elements: e.element
                      }
                  }),
                  d.fn.destroy.call(e),
                  e.options.model.unbind("set", e._validateProxy),
                  s.unbind(e.element),
                  e.validatable && e.validatable.destroy(),
                  s.destroy(e.element),
                  e.element.removeData("kendoValidator"),
                  e.element.is("[" + s.attr("role") + "=editable]") && e.element.removeAttr(s.attr("role"))
              },
              refresh: function() {
                  var n, r, o, l, d, u, h, f, m = this, g = m.options.fields || [], v = m.options.clearContainer ? m.element.empty() : m.element, _ = m.options.model || {}, b = {};
                  for (e.isArray(g) || (g = [g]),
                  n = 0,
                  r = g.length; n < r; n++)
                      o = g[n],
                      l = p(o),
                      d = l ? o.field : o,
                      u = (_.fields || _)[d],
                      a(u, b),
                      m.editor(o, u);
                  if (m.options.target && m.angular("compile", function() {
                      return {
                      elements: v,
                      data: v.map(function() {
                              return {
                      dataItem: _
                  }
                  })
                  }
                  }),
                  !r) {
                      h = _.fields || _;
                      for (d in h)
                          a(h[d], b)
                  }
                  i(v),
                  m.validatable && m.validatable.destroy(),
                  s.bind(v, m.options.model),
                  m.options.model.unbind("set", m._validateProxy),
                  m.options.model.bind("set", m._validateProxy),
                  m.validatable = new s.ui.Validator(v,{
                      validateOnBlur: !1,
                      errorTemplate: m.options.errorTemplate || t,
                      rules: b
                  }),
                  f = v.find(":kendoFocusable").eq(0).focus(),
                  c && f.focus()
              }
          });
        l.plugin(k)
    }(window.kendo.jQuery),
    window.kendo
}, "function" == typeof define && define.amd ? define : function(e, t, n) {
    (n || t)()
}
),
function(e, define) {
    define("kendo.scheduler.recurrence.min", ["kendo.dropdownlist.min", "kendo.datepicker.min", "kendo.numerictextbox.min"], e)
}(function() {
    return function(e, t) {
        function n(e, t) {
            var n;
            return 0 !== e && e < t ? n = t - e : (n = e % t,
            n && (n = t - n)),
            n
        }
        function i(e) {
            var t = e.getMonth()
              , n = g(e) ? te[t] : ne[t];
            return n + e.getDate()
        }
        function r(e, n) {
            var i, r;
            return e = new Date(e.getFullYear(),e.getMonth(),e.getDate()),
            J(e, 0),
            i = e.getFullYear(),
            n !== t ? (X(e, n, -1),
            e.setDate(e.getDate() + 4)) : e.setDate(e.getDate() + (4 - (e.getDay() || 7))),
            J(e, 0),
            r = Math.floor((e.getTime() - new Date(i,0,1,(-6))) / 864e5),
            1 + Math.floor(r / 7)
        }
        function o(e, t) {
            var n = Z(e).getDay()
              , i = 7 - (n + 7 - (t || 7)) || 7;
            return i < 0 && (i += 7),
            Math.ceil((e.getDate() - i) / 7) + 1
        }
        function a(e, t) {
            return e + (e < t ? 7 : 0)
        }
        function s(e, t, n) {
            var i, r, s, l, d, u = t.offset;
            return u ? (i = new Date(e.getFullYear(),e.getMonth() + 1,0),
            r = o(i, n),
            s = a(t.day, n),
            l = s < a(new Date(e.getFullYear(),e.getMonth(),1).getDay(), n),
            d = s > a(i.getDay(), n),
            u < 0 ? u = r + (u + 1 - (d ? 1 : 0)) : l && (u += 1),
            r -= d ? 1 : 0,
            u < (l ? 1 : 0) || u > r ? null : u) : o(e, n)
        }
        function l(e, t) {
            return o(new Date(e.getFullYear(),e.getMonth() + 1,0), t)
        }
        function d(e, t, n) {
            return o(e, n) === s(e, t, n)
        }
        function u(e, t, n) {
            for (var i, r, l, d, u = a(t.getDay(), n), c = e.length, h = [], p = 0; p < c; p++)
                if (r = e[p],
                d = o(t, n),
                i = s(t, r, n),
                null !== i)
                    if (d < i)
                        h.push(r);
                    else if (d === i)
                        if (l = a(r.day, n),
                        u < l)
                            h.push(r);
                        else if (u === l)
                            return null;
            return h
        }
        function c(e, t, n) {
            for (var i, r = 0, o = e.length, a = []; r < o; r++) {
                if (i = e[r],
                n && (i = n(i)),
                t === i)
                    return null;
                t < i && a.push(i)
            }
            return a
        }
        function h(e, t) {
            for (var n, i = 0, r = e.length; i < r; i++) {
                if (n = parseInt(e[i], 10),
                isNaN(n) || n < t.start || n > t.end || 0 === n && t.start < 0)
                    return null;
                e[i] = n
            }
            return e.sort(v)
        }
        function p(e) {
            for (var n, i, r, o = 0, a = e.length; o < a; o++) {
                if (n = e[o],
                i = n.length,
                r = n.substring(i - 2).toUpperCase(),
                r = oe[r],
                r === t)
                    return null;
                e[o] = {
                    offset: parseInt(n.substring(0, i - 2), 10) || 0,
                    day: r
                }
            }
            return e
        }
        function f(e) {
            for (var t, n, i = 0, r = e.length, o = []; i < r; i++)
                t = e[i],
                "string" == typeof t ? n = t : (n = "" + re[t.day],
                t.offset && (n = t.offset + n)),
                o.push(n);
            return "" + o
        }
        function m(e) {
            var t = e.getMonth();
            return 1 === t ? 1 === new Date(e.getFullYear(),1,29).getMonth() ? 29 : 28 : ie[t]
        }
        function g(e) {
            return e = e.getFullYear(),
            e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        }
        function v(e, t) {
            return e - t
        }
        function _(e, t) {
            var n, i, r = 0, o = [];
            if (e)
                for (e = e.split(e.indexOf(";") !== -1 ? ";" : ","),
                n = e.length; r < n; r++)
                    i = S(e[r], t),
                    i && o.push(i);
            return o
        }
        function b(t, n, i) {
            for (var r = e.isArray(t) ? t : _(t, i), o = n.getTime() - n.getMilliseconds(), a = 0, s = r.length; a < s; a++)
                if (r[a].getTime() === o)
                    return !0;
            return !1
        }
        function k(e, t) {
            var n, i, r = 0, o = [].concat(e);
            for (n = o.length; r < n; r++)
                i = o[r],
                i = U.timezone.convert(i, t || i.getTimezoneOffset(), "Etc/UTC"),
                o[r] = U.toString(i, de);
            return o.join(",")
        }
        function w(e, t) {
            var n = new Date(e);
            switch (t.freq) {
                case "yearly":
                    n.setFullYear(n.getFullYear(), 0, 1);
                    break;
                case "monthly":
                    n.setFullYear(n.getFullYear(), n.getMonth(), 1);
                    break;
                case "weekly":
                    X(n, t.weekStart, -1)
            }
            return t.hours && n.setHours(0),
            t.minutes && n.setMinutes(0),
            t.seconds && n.setSeconds(0),
            n
        }
        function y(e, t) {
            var n = new Date(e);
            switch (t.freq) {
                case "yearly":
                    n.setFullYear(n.getFullYear(), 11, 31);
                    break;
                case "monthly":
                    n.setFullYear(n.getFullYear(), n.getMonth() + 1, 0);
                    break;
                case "weekly":
                    X(n, t.weekStart, -1),
                    n.setDate(n.getDate() + 6)
            }
            return t.hours && n.setHours(23),
            t.minutes && n.setMinutes(59),
            t.seconds && n.setSeconds(59),
            n
        }
        function x(e, t, n) {
            var i, r, o, a, s = e.length, l = [];
            for (o = 0,
            a = n.length; o < a; o++)
                i = n[o],
                i < 0 ? i = s + i : i -= 1,
                r = e[i],
                r && r.start >= t && l.push(r);
            return l
        }
        function C(e, t, n) {
            var i, r, o = [];
            for (r = 0; r < e.length; r++)
                i = e[r],
                b(t, i.start, n) || o.push(i);
            return o
        }
        function T(e, n, i, r) {
            var o, a, s, l, d, u, c, h, p, f, m, g, v, T, S, D, E, A, R, I, M, z, H, N = F(e.recurrenceRule, r), B = [];
            if (!N)
                return [e];
            for (I = N.positions,
            M = I ? 0 : 1,
            f = N.start,
            m = N.end,
            (f || m) && (e = e.clone({
                start: f ? new Date(f.value[0]) : t,
                end: m ? new Date(m.value[0]) : t
            })),
            E = e.start,
            D = E.getTime(),
            S = ee(E),
            T = _(e.recurrenceException, r),
            !T[0] && N.exdates && (T = N.exdates.value,
            e.set("recurrenceException", k(T, r))),
            h = n = new Date(n),
            i = new Date(i),
            v = N.freq,
            R = ve[v],
            A = N.count,
            N.until && N.until < i && (i = new Date(N.until)),
            g = "yearly" === v || "monthly" === v || "weekly" === v,
            n < D || A || N.interval > 1 || g ? n = new Date(D) : (l = n.getHours(),
            d = n.getMinutes(),
            u = n.getSeconds(),
            N.hours || (l = E.getHours()),
            N.minutes || (d = E.getMinutes()),
            N.seconds || (u = E.getSeconds()),
            n.setHours(l, d, u, E.getMilliseconds())),
            N._startPeriod = new Date(n),
            I && (n = w(n, N),
            i = y(i, N),
            H = ee(i) - ee(n),
            H < 0 && (l = n.getHours(),
            i.setHours(l, n.getMinutes(), n.getSeconds(), n.getMilliseconds()),
            K.adjustDST(i, l)),
            N._startPeriod = new Date(n),
            N._endPeriod = y(n, N)),
            c = e.duration(),
            N._startTime = o = K.toInvariantTime(n),
            R.setup && R.setup(N, E, n),
            R.limit(n, i, N); n <= i; )
                if (s = new Date(n),
                Q(s, c),
                p = n >= h || s > h,
                (p && !b(T, n, r) || I) && (o = K.toUtcTime(K.getDate(n)) + ee(N._startTime),
                a = o + c,
                D !== n.getTime() || S !== ee(N._startTime) ? B.push(e.toOccurrence({
                    start: new Date(n),
                    end: s,
                    _startTime: o,
                    _endTime: a
                })) : (e._startTime = o,
                e._endTime = a,
                B.push(e))),
                I) {
                    if (R.next(n, N),
                    R.limit(n, i, N),
                    n > N._endPeriod && (z = x(B.slice(M), E, I),
                    z = C(z, T, r),
                    B = B.slice(0, M).concat(z),
                    N._endPeriod = y(n, N),
                    M = B.length),
                    A && A === M)
                        break
                } else {
                    if (A && A === M)
                        break;
                    M += 1,
                    R.next(n, N),
                    R.limit(n, i, N)
                }
            return B
        }
        function S(e, t) {
            return e = U.parseDate(e, ae),
            e && t && (e = q.convert(e, e.getTimezoneOffset(), t)),
            e
        }
        function D(e, t) {
            var n, i, r, o, a, s, l, d, u = e.split(";");
            for (l = 0,
            d = u.length; l < d; l++)
                if (n = u[l].split(":"),
                i = n[0],
                r = n[1],
                i.indexOf("TZID") !== -1 && (o = i.substring(i.indexOf("TZID")).split("=")[1]),
                r)
                    for (r = r.split(","),
                    a = 0,
                    s = r.length; a < s; a++)
                        r[a] = S(r[a], o || t);
            if (r)
                return {
                    value: r,
                    tzid: o
                }
        }
        function F(n, i) {
            var r, o, a, s, l, d, u, c, f, m = {}, g = 0, v = !1, _ = function(e, t) {
                var n = e.day
                  , i = t.day;
                return n < c && (n += 7),
                i < c && (i += 7),
                n - i
            };
            if (!n)
                return null;
            for (d = n.split("\n"),
            d[1] || n.indexOf("DTSTART") === -1 && n.indexOf("DTEND") === -1 && n.indexOf("EXDATE") === -1 || (d = n.split(" ")),
            g = 0,
            a = d.length; g < a; g++)
                l = e.trim(d[g]),
                l.indexOf("DTSTART") !== -1 ? m.start = D(l, i) : l.indexOf("DTEND") !== -1 ? m.end = D(l, i) : l.indexOf("EXDATE") !== -1 ? m.exdates = D(l, i) : l.indexOf("RRULE") !== -1 ? s = l.substring(6) : e.trim(l) && (s = l);
            for (s = s.split(";"),
            g = 0,
            a = s.length; g < a; g++)
                switch (u = s[g],
                r = u.split("="),
                o = e.trim(r[1]).split(","),
                e.trim(r[0]).toUpperCase()) {
                    case "FREQ":
                        m.freq = o[0].toLowerCase();
                        break;
                    case "UNTIL":
                        m.until = S(o[0], i);
                        break;
                    case "COUNT":
                        m.count = parseInt(o[0], 10);
                        break;
                    case "INTERVAL":
                        m.interval = parseInt(o[0], 10);
                        break;
                    case "BYSECOND":
                        m.seconds = h(o, {
                            start: 0,
                            end: 60
                        }),
                        v = !0;
                        break;
                    case "BYMINUTE":
                        m.minutes = h(o, {
                            start: 0,
                            end: 59
                        }),
                        v = !0;
                        break;
                    case "BYHOUR":
                        m.hours = h(o, {
                            start: 0,
                            end: 23
                        }),
                        v = !0;
                        break;
                    case "BYMONTHDAY":
                        m.monthDays = h(o, {
                            start: -31,
                            end: 31
                        }),
                        v = !0;
                        break;
                    case "BYYEARDAY":
                        m.yearDays = h(o, {
                            start: -366,
                            end: 366
                        }),
                        v = !0;
                        break;
                    case "BYMONTH":
                        m.months = h(o, {
                            start: 1,
                            end: 12
                        }),
                        v = !0;
                        break;
                    case "BYDAY":
                        m.weekDays = f = p(o),
                        v = !0;
                        break;
                    case "BYWEEKNO":
                        m.weeks = h(o, {
                            start: -53,
                            end: 53
                        }),
                        v = !0;
                        break;
                    case "BYSETPOS":
                        m.positions = h(o, {
                            start: -366,
                            end: 366
                        });
                        break;
                    case "WKST":
                        m.weekStart = c = oe[o[0]]
                }
            return m.freq === t || m.count !== t && m.until ? null : (m.interval || (m.interval = 1),
            c === t && (m.weekStart = c = U.culture().calendar.firstDay),
            f && (m.weekDays = f.sort(_)),
            m.positions && !v && (m.positions = null),
            m._hasRuleValue = v,
            m)
        }
        function E(e, t) {
            for (var n, i = e.value, r = e.tzid || "", o = i.length, a = 0; a < o; a++)
                n = i[a],
                n = q.convert(n, r || t || n.getTimezoneOffset(), "Etc/UTC"),
                i[a] = U.toString(n, "yyyyMMddTHHmmssZ");
            return r && (r = ";TZID=" + r),
            r + ":" + i.join(",") + " "
        }
        function A(e, n) {
            var i = e.weekStart
              , r = "FREQ=" + e.freq.toUpperCase()
              , o = e.exdates || ""
              , a = e.start || ""
              , s = e.end || ""
              , l = e.until;
            return e.interval > 1 && (r += ";INTERVAL=" + e.interval),
            e.count && (r += ";COUNT=" + e.count),
            l && (l = q.convert(l, n || l.getTimezoneOffset(), "Etc/UTC"),
            r += ";UNTIL=" + U.toString(l, "yyyyMMddTHHmmssZ")),
            e.months && (r += ";BYMONTH=" + e.months),
            e.weeks && (r += ";BYWEEKNO=" + e.weeks),
            e.yearDays && (r += ";BYYEARDAY=" + e.yearDays),
            e.monthDays && (r += ";BYMONTHDAY=" + e.monthDays),
            e.weekDays && (r += ";BYDAY=" + f(e.weekDays)),
            e.hours && (r += ";BYHOUR=" + e.hours),
            e.minutes && (r += ";BYMINUTE=" + e.minutes),
            e.seconds && (r += ";BYSECOND=" + e.seconds),
            e.positions && (r += ";BYSETPOS=" + e.positions),
            i !== t && (r += ";WKST=" + re[i]),
            a && (a = "DTSTART" + E(a, n)),
            s && (s = "DTEND" + E(s, n)),
            o && (o = "EXDATE" + E(o, n)),
            (a || s || o) && (r = a + s + o + "RRULE:" + r),
            r
        }
        var R, I, M, z, H, N, B, P, L, O, V, W, U = window.kendo, q = U.timezone, j = U.Class, $ = U.ui, G = $.Widget, Y = $.DropDownList, K = U.date, Q = K.setTime, X = K.setDayOfWeek, J = K.adjustDST, Z = K.firstDayOfMonth, ee = K.getMilliseconds, te = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366], ne = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365], ie = [31, 28, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31], re = {
            0: "SU",
            1: "MO",
            2: "TU",
            3: "WE",
            4: "TH",
            5: "FR",
            6: "SA"
        }, oe = {
            SU: 0,
            MO: 1,
            TU: 2,
            WE: 3,
            TH: 4,
            FR: 5,
            SA: 6
        }, ae = ["yyyy-MM-ddTHH:mm:ss.fffzzz", "yyyy-MM-ddTHH:mm:sszzz", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mm", "yyyy-MM-ddTHH", "yyyy-MM-dd", "yyyyMMddTHHmmssfffzzz", "yyyyMMddTHHmmsszzz", "yyyyMMddTHHmmss", "yyyyMMddTHHmm", "yyyyMMddTHH", "yyyyMMdd"], se = ["months", "weeks", "yearDays", "monthDays", "weekDays", "hours", "minutes", "seconds"], le = se.length, de = "yyyyMMddTHHmmssZ", ue = {
            months: function(e, t, n) {
                var i = n.months
                  , r = c(i, e.getMonth() + 1)
                  , o = !1;
                return null !== r && (r.length ? e.setMonth(r[0] - 1, 1) : e.setFullYear(e.getFullYear() + 1, i[0] - 1, 1),
                o = !0),
                o
            },
            monthDays: function(e, t, n) {
                for (var i, r, o, a = !1, s = e.getHours(), l = function(e) {
                    return e < 0 && (e = i + e),
                    e
                }; e <= t; ) {
                    if (r = e.getMonth(),
                    i = m(e),
                    o = c(n.monthDays, e.getDate(), l),
                    null === o)
                        return a;
                    if (a = !0,
                    o.length) {
                        if (e.setMonth(r, o.sort(v)[0]),
                        J(e, s),
                        r === e.getMonth())
                            break
                    } else
                        e.setMonth(r + 1, 1)
                }
                return a
            },
            yearDays: function(e, t, n) {
                for (var r, o, a = !1, s = e.getHours(), l = function(e) {
                    return e < 0 && (e = r + e),
                    e
                }; e < t; ) {
                    if (r = g(e) ? 366 : 365,
                    o = c(n.yearDays, i(e), l),
                    null === o)
                        return a;
                    if (a = !0,
                    r = e.getFullYear(),
                    o.length) {
                        e.setFullYear(r, 0, o.sort(v)[0]),
                        J(e, s);
                        break
                    }
                    e.setFullYear(r + 1, 0, 1)
                }
                return a
            },
            weeks: function(e, t, n) {
                for (var i, o, a, s = n.weekStart, l = !1, d = e.getHours(), u = function(e) {
                    return e < 0 && (e = 53 + e),
                    e
                }; e < t; ) {
                    if (o = c(n.weeks, r(e, s), u),
                    null === o)
                        return l;
                    if (l = !0,
                    i = e.getFullYear(),
                    o.length) {
                        a = 7 * o.sort(v)[0] - 1,
                        e.setFullYear(i, 0, a),
                        X(e, s, -1),
                        J(e, d);
                        break
                    }
                    e.setFullYear(i + 1, 0, 1)
                }
                return l
            },
            weekDays: function(e, t, n) {
                var i, r, a = n.weekDays, s = n.weekStart, c = u(a, e, s), h = e.getHours();
                if (null === c)
                    return !1;
                if (i = c[0],
                i || (i = a[0],
                X(e, s)),
                r = i.day,
                i.offset)
                    for (; e <= t && !d(e, i, s); )
                        o(e, s) === l(e, s) ? (e.setMonth(e.getMonth() + 1, 1),
                        J(e, h)) : (e.setDate(e.getDate() + 7),
                        J(e, h),
                        X(e, s, -1));
                return e.getDay() !== r && X(e, r),
                !0
            },
            hours: function(e, t, n) {
                var i = n.hours
                  , r = n._startTime
                  , o = r.getHours()
                  , a = c(i, o)
                  , s = !1;
                return null !== a && (s = !0,
                e.setHours(o),
                J(e, o),
                a.length ? (a = a[0],
                e.setHours(a)) : (a = e.getHours(),
                e.setDate(e.getDate() + 1),
                J(e, a),
                a = i[0],
                e.setHours(a),
                J(e, a)),
                n.minutes && e.setMinutes(0),
                r.setHours(a, e.getMinutes())),
                s
            },
            minutes: function(e, t, n) {
                var i = n.minutes
                  , r = e.getMinutes()
                  , o = c(i, r)
                  , a = n._startTime.getHours()
                  , s = !1;
                return null !== o && (s = !0,
                o.length ? o = o[0] : (a += 1,
                o = i[0]),
                n.seconds && e.setSeconds(0),
                e.setHours(a, o),
                a %= 24,
                J(e, a),
                n._startTime.setHours(a, o, e.getSeconds())),
                s
            },
            seconds: function(e, t, n) {
                var i = n.seconds
                  , r = n._startTime.getHours()
                  , o = c(i, e.getSeconds())
                  , a = e.getMinutes()
                  , s = !1;
                return null !== o && (s = !0,
                o.length ? e.setSeconds(o[0]) : (a += 1,
                e.setMinutes(a, i[0]),
                a > 59 && (a %= 60,
                r = (r + 1) % 24)),
                n._startTime.setHours(r, a, e.getSeconds())),
                s
            }
        }, ce = j.extend({
            next: function(e, t) {
                var n, i, r = t._startTime, o = r.getDate();
                if (t.seconds)
                    i = e.getSeconds() + 1,
                    e.setSeconds(i),
                    r.setSeconds(i),
                    r.setDate(o);
                else {
                    if (!t.minutes)
                        return !1;
                    n = e.getMinutes() + 1,
                    e.setMinutes(n),
                    r.setMinutes(n),
                    r.setDate(o)
                }
                return !0
            },
            normalize: function(e) {
                var t = e.rule;
                4 === e.idx && t.hours && (t._startTime.setHours(0),
                this._hour(e.date, t))
            },
            limit: function(e, n, i) {
                for (var r, o, a, s, l, d = i.interval; e <= n; ) {
                    for (a = o = t,
                    l = e.getDate(),
                    s = 0; s < le; s++) {
                        if (r = se[s],
                        i[r]) {
                            if (a = ue[r](e, n, i),
                            o !== t && a)
                                break;
                            o = a
                        }
                        a && this.normalize({
                            date: e,
                            rule: i,
                            day: l,
                            idx: s
                        })
                    }
                    if ((1 === d || !this.interval(i, e)) && s === le)
                        break
                }
            },
            interval: function(e, t) {
                var i, r, o, s, l = new Date(e._startPeriod), d = new Date(t), u = t.getHours(), c = e.weekStart, h = e.interval, p = e.freq, f = !1, m = 0, g = 0, v = 1;
                return "hourly" === p ? (i = d.getTimezoneOffset() - l.getTimezoneOffset(),
                r = e._startTime.getHours(),
                d = d.getTime(),
                u !== r && (d += (r - u) * K.MS_PER_HOUR),
                d -= l,
                i && (d -= i * K.MS_PER_MINUTE),
                i = Math.floor(d / K.MS_PER_HOUR),
                m = n(i, h),
                0 !== m && (this._hour(t, e, m),
                f = !0)) : "daily" === p ? (K.setTime(d, -l, !0),
                i = Math.ceil(d / K.MS_PER_DAY),
                m = n(i, h),
                0 !== m && (this._date(t, e, m),
                f = !0)) : "weekly" === p ? (m = this._getNumberOfWeeksBetweenDates(l, t),
                o = a(t.getDay(), c),
                s = a(l.getDay(), c),
                o < s && (m += 1),
                m = n(m, h),
                0 !== m && (K.setDayOfWeek(t, e.weekStart, -1),
                t.setDate(t.getDate() + 7 * m),
                J(t, u),
                f = !0)) : "monthly" === p ? (i = t.getFullYear() - l.getFullYear(),
                i = t.getMonth() - l.getMonth() + 12 * i,
                m = n(i, h),
                0 !== m && (v = e._hasRuleValue ? 1 : t.getDate(),
                t.setFullYear(t.getFullYear(), t.getMonth() + m, v),
                J(t, u),
                f = !0)) : "yearly" === p && (i = t.getFullYear() - l.getFullYear(),
                m = n(i, h),
                e.months || (g = t.getMonth()),
                e.yearDays || e.monthDays || e.weekDays || (v = t.getDate()),
                0 !== m && (t.setFullYear(t.getFullYear() + m, g, v),
                J(t, u),
                f = !0)),
                f
            },
            _getNumberOfWeeksBetweenDates: function(e, t) {
                var n = (t - e) / 6048e5
                  , i = Math.floor(n);
                return n - i > .99 && (i = Math.round(n)),
                i
            },
            _hour: function(e, t, n) {
                var i = t._startTime
                  , r = i.getHours();
                n && (r += n),
                e.setHours(r),
                r %= 24,
                i.setHours(r),
                J(e, r)
            },
            _date: function(e, t, n) {
                var i = e.getHours();
                e.setDate(e.getDate() + n),
                J(e, i) || this._hour(e, t)
            }
        }), he = ce.extend({
            next: function(e, t) {
                ce.fn.next(e, t) || this._hour(e, t, 1)
            },
            normalize: function(e) {
                var t = e.rule;
                4 === e.idx && (t._startTime.setHours(0),
                this._hour(e.date, t))
            }
        }), pe = ce.extend({
            next: function(e, t) {
                ce.fn.next(e, t) || this[t.hours ? "_hour" : "_date"](e, t, 1)
            }
        }), fe = pe.extend({
            setup: function(e, t) {
                e.weekDays || (e.weekDays = [{
                    day: t.getDay(),
                    offset: 0
                }])
            }
        }), me = ce.extend({
            next: function(e, t) {
                var n, i;
                if (!ce.fn.next(e, t))
                    if (t.hours)
                        this._hour(e, t, 1);
                    else if (t.monthDays || t.weekDays || t.yearDays || t.weeks)
                        this._date(e, t, 1);
                    else {
                        for (n = e.getDate(),
                        i = e.getHours(),
                        e.setMonth(e.getMonth() + 1),
                        J(e, i); e.getDate() !== n; )
                            e.setDate(n),
                            J(e, i);
                        this._hour(e, t)
                    }
            },
            normalize: function(e) {
                var t = e.rule
                  , n = e.date
                  , i = n.getHours();
                0 !== e.idx || t.monthDays || t.weekDays ? ce.fn.normalize(e) : (n.setDate(e.day),
                J(n, i))
            },
            setup: function(e, t, n) {
                e.monthDays || e.weekDays || n.setDate(t.getDate())
            }
        }), ge = me.extend({
            next: function(e, t) {
                var n, i = e.getHours();
                if (!ce.fn.next(e, t))
                    if (t.hours)
                        this._hour(e, t, 1);
                    else if (t.monthDays || t.weekDays || t.yearDays || t.weeks)
                        this._date(e, t, 1);
                    else if (t.months) {
                        for (n = e.getDate(),
                        e.setMonth(e.getMonth() + 1),
                        J(e, i); e.getDate() !== n; )
                            e.setDate(n),
                            J(e, i);
                        this._hour(e, t)
                    } else
                        e.setFullYear(e.getFullYear() + 1),
                        J(e, i),
                        this._hour(e, t)
            },
            setup: function() {}
        }), ve = {
            hourly: new he,
            daily: new pe,
            weekly: new fe,
            monthly: new me,
            yearly: new ge
        }, _e = "click";
        U.recurrence = {
            rule: {
                parse: F,
                serialize: A
            },
            expand: T,
            dayInYear: i,
            weekInYear: r,
            weekInMonth: o,
            numberOfWeeks: l,
            isException: b,
            toExceptionString: k
        },
        R = function(e) {
            for (var t = U.culture().calendar.days.namesShort, n = t.length, i = "", r = 0, o = []; r < n; r++)
                o.push(r);
            for (t = t.slice(e).concat(t.slice(0, e)),
            o = o.slice(e).concat(o.slice(0, e)),
            r = 0; r < n; r++)
                i += '<label class="k-check"><input class="k-recur-weekday-checkbox" type="checkbox" value="' + o[r] + '" /> ' + t[r] + "</label>";
            return i
        }
        ,
        I = U.template('# if (frequency !== "never") { #<div class="k-edit-label"><label>#:messages.repeatEvery#</label></div><div class="k-edit-field"><input class="k-recur-interval"/>#:messages.interval#</div># } ## if (frequency === "weekly") { #<div class="k-edit-label"><label>#:messages.repeatOn#</label></div><div class="k-edit-field">#=weekDayCheckBoxes(firstWeekDay)#</div># } else if (frequency === "monthly") { #<div class="k-edit-label"><label>#:messages.repeatOn#</label></div><div class="k-edit-field"><ul class="k-reset"><li><label><input class="k-recur-month-radio" type="radio" name="month" value="monthday" />#:messages.day#</label><input class="k-recur-monthday" /></li><li><input class="k-recur-month-radio" type="radio" name="month" value="weekday" /><input class="k-recur-weekday-offset" /><input class="k-recur-weekday" /></li></ul></div># } else if (frequency === "yearly") { #<div class="k-edit-label"><label>#:messages.repeatOn#</label></div><div class="k-edit-field"><ul class="k-reset"><li><input class="k-recur-year-radio" type="radio" name="year" value="monthday" /><input class="k-recur-month" /><input class="k-recur-monthday" /></li><li><input class="k-recur-year-radio" type="radio" name="year" value="weekday" /><input class="k-recur-weekday-offset" /><input class="k-recur-weekday" />#:messages.of#<input class="k-recur-month" /></li></ul></div># } ## if (frequency !== "never") { #<div class="k-edit-label"><label>#:end.label#</label></div><div class="k-edit-field"><ul class="k-reset"><li><label><input class="k-recur-end-never" type="radio" name="end" value="never" />#:end.never#</label></li><li><label><input class="k-recur-end-count" type="radio" name="end" value="count" />#:end.after#</label><input class="k-recur-count" />#:end.occurrence#</li><li><label><input class="k-recur-end-until" type="radio" name="end" value="until" />#:end.on#</label><input class="k-recur-until" /></li></ul></div># } #'),
        M = [{
            day: 0,
            offset: 0
        }, {
            day: 1,
            offset: 0
        }, {
            day: 2,
            offset: 0
        }, {
            day: 3,
            offset: 0
        }, {
            day: 4,
            offset: 0
        }, {
            day: 5,
            offset: 0
        }, {
            day: 6,
            offset: 0
        }],
        z = [{
            day: 1,
            offset: 0
        }, {
            day: 2,
            offset: 0
        }, {
            day: 3,
            offset: 0
        }, {
            day: 4,
            offset: 0
        }, {
            day: 5,
            offset: 0
        }],
        H = [{
            day: 0,
            offset: 0
        }, {
            day: 6,
            offset: 0
        }],
        N = G.extend({
            init: function(e, t) {
                var n, i = this, r = t && t.frequencies;
                G.fn.init.call(i, e, t),
                i.wrapper = i.element,
                t = i.options,
                t.start = n = t.start || K.today(),
                r && (t.frequencies = r),
                "string" == typeof n && (t.start = U.parseDate(n, "yyyyMMddTHHmmss")),
                null === t.firstWeekDay && (t.firstWeekDay = U.culture().calendar.firstDay),
                i._namespace = "." + t.name
            },
            options: {
                value: "",
                start: "",
                timezone: "",
                spinners: !0,
                firstWeekDay: null,
                frequencies: ["never", "daily", "weekly", "monthly", "yearly"],
                mobile: !1,
                messages: {
                    frequencies: {
                        never: "Never",
                        hourly: "Hourly",
                        daily: "Daily",
                        weekly: "Weekly",
                        monthly: "Monthly",
                        yearly: "Yearly"
                    },
                    hourly: {
                        repeatEvery: "Repeat every: ",
                        interval: " hour(s)"
                    },
                    daily: {
                        repeatEvery: "Repeat every: ",
                        interval: " day(s)"
                    },
                    weekly: {
                        interval: " week(s)",
                        repeatEvery: "Repeat every: ",
                        repeatOn: "Repeat on: "
                    },
                    monthly: {
                        repeatEvery: "Repeat every: ",
                        repeatOn: "Repeat on: ",
                        interval: " month(s)",
                        day: "Day "
                    },
                    yearly: {
                        repeatEvery: "Repeat every: ",
                        repeatOn: "Repeat on: ",
                        interval: " year(s)",
                        of: " of "
                    },
                    end: {
                        label: "End:",
                        mobileLabel: "Ends",
                        never: "Never",
                        after: "After ",
                        occurrence: " occurrence(s)",
                        on: "On "
                    },
                    offsetPositions: {
                        first: "first",
                        second: "second",
                        third: "third",
                        fourth: "fourth",
                        last: "last"
                    },
                    weekdays: {
                        day: "day",
                        weekday: "weekday",
                        weekend: "weekend day"
                    }
                }
            },
            events: ["change"],
            _initInterval: function() {
                var e = this
                  , t = e._value;
                e._container.find(".k-recur-interval").kendoNumericTextBox({
                    spinners: e.options.spinners,
                    value: t.interval || 1,
                    decimals: 0,
                    format: "#",
                    min: 1,
                    change: function() {
                        t.interval = this.value(),
                        e._trigger()
                    }
                })
            },
            _weekDayRule: function(e) {
                var t = this
                  , n = (t._weekDay.element || t._weekDay).val()
                  , i = +(t._weekDayOffset.element || t._weekDayOffset).val()
                  , r = null
                  , o = null;
                e || ("day" === n ? (r = M,
                o = i) : "weekday" === n ? (r = z,
                o = i) : "weekend" === n ? (r = H,
                o = i) : r = [{
                    offset: i,
                    day: +n
                }]),
                t._value.weekDays = r,
                t._value.positions = o
            },
            _weekDayView: function() {
                var e, t, n, i, r = this, o = r._value.weekDays, a = r._value.positions, s = r._weekDayOffset;
                o && (n = o.length,
                a && (7 === n ? (t = "day",
                e = a) : 5 === n ? (t = "weekday",
                e = a) : 2 === n && (t = "weekend",
                e = a)),
                t || (o = o[0],
                t = o.day,
                e = o.offset || ""),
                i = s.value ? "value" : "val",
                s[i](e),
                r._weekDay[i](t))
            },
            _initWeekDay: function() {
                var t, n = this, i = n.options.messages.weekdays, r = n.options.messages.offsetPositions, o = n._container.find(".k-recur-weekday"), a = function() {
                    n._weekDayRule(),
                    n._trigger()
                };
                o[0] && (n._weekDayOffset = new Y(n._container.find(".k-recur-weekday-offset"),{
                    change: a,
                    dataTextField: "text",
                    dataValueField: "value",
                    dataSource: [{
                        text: r.first,
                        value: "1"
                    }, {
                        text: r.second,
                        value: "2"
                    }, {
                        text: r.third,
                        value: "3"
                    }, {
                        text: r.fourth,
                        value: "4"
                    }, {
                        text: r.last,
                        value: "-1"
                    }]
                }),
                t = [{
                    text: i.day,
                    value: "day"
                }, {
                    text: i.weekday,
                    value: "weekday"
                }, {
                    text: i.weekend,
                    value: "weekend"
                }],
                n._weekDay = new Y(o,{
                    value: n.options.start.getDay(),
                    change: a,
                    dataTextField: "text",
                    dataValueField: "value",
                    dataSource: t.concat(e.map(U.culture().calendar.days.names, function(e, t) {
                        return {
                            text: e,
                            value: t
                        }
                    }))
                }),
                n._weekDayView())
            },
            _initWeekDays: function() {
                var t, n, i, r, o, a = this, s = a._value, l = a._container.find(".k-recur-weekday-checkbox");
                if (l[0] && (l.on(_e + a._namespace, function() {
                    s.weekDays = e.map(l.filter(":checked"), function(e) {
                        return {
                    day: +e.value,
                    offset: 0
                }
                }),
                    a.options.mobile || a._trigger()
                }),
                s.weekDays))
                    for (i = 0,
                    r = l.length,
                    o = s.weekDays.length; i < r; i++)
                        for (n = l[i],
                        t = 0; t < o; t++)
                            n.value == s.weekDays[t].day && (n.checked = !0)
            },
            _initMonthDay: function() {
                var e = this
                  , t = e._value
                  , n = e._container.find(".k-recur-monthday");
                n[0] && (e._monthDay = new U.ui.NumericTextBox(n,{
                    spinners: e.options.spinners,
                    min: 1,
                    max: 31,
                    decimals: 0,
                    format: "#",
                    value: t.monthDays ? t.monthDays[0] : e.options.start.getDate(),
                    change: function() {
                        var n = this.value();
                        t.monthDays = n ? [n] : n,
                        e._trigger()
                    }
                }))
            },
            _initCount: function() {
                var e = this
                  , t = e._container.find(".k-recur-count")
                  , n = e._value;
                e._count = t.kendoNumericTextBox({
                    spinners: e.options.spinners,
                    value: n.count || 1,
                    decimals: 0,
                    format: "#",
                    min: 1,
                    change: function() {
                        n.count = this.value(),
                        e._trigger()
                    }
                }).data("kendoNumericTextBox")
            },
            _initUntil: function() {
                var e = this
                  , t = e._container.find(".k-recur-until")
                  , n = e.options.start
                  , i = e._value
                  , r = i.until;
                e._until = t.kendoDatePicker({
                    min: r && r < n ? r : n,
                    value: r || new Date(n.getFullYear(),n.getMonth(),n.getDate(),23,59,59),
                    change: function() {
                        var t = this.value();
                        i.until = new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59),
                        e._trigger()
                    }
                }).data("kendoDatePicker")
            },
            _trigger: function() {
                this.options.mobile || this.trigger("change")
            }
        }),
        B = N.extend({
            init: function(e, t) {
                var n = this;
                N.fn.init.call(n, e, t),
                n._initFrequency(),
                n._initContainer(),
                n.value(n.options.value)
            },
            options: {
                name: "RecurrenceEditor"
            },
            events: ["change"],
            destroy: function() {
                var e = this;
                e._frequency.destroy(),
                e._container.find("input[type=radio],input[type=checkbox]").off(_e + e._namespace),
                U.destroy(e._container),
                N.fn.destroy.call(e)
            },
            value: function(e) {
                var n, i = this, r = i.options.timezone;
                return e === t ? i._value.freq ? A(i._value, r) : "" : (i._value = F(e, r) || {},
                n = i._value.freq,
                n ? i._frequency.value(n) : i._frequency.select(0),
                i._initView(i._frequency.value()),
                t)
            },
            _initContainer: function() {
                var t = this.element
                  , n = e('<div class="k-recur-view" />')
                  , i = t.parent(".k-edit-field");
                i[0] ? n.insertAfter(i) : t.append(n),
                this._container = n
            },
            _initFrequency: function() {
                var t, n = this, i = n.options, r = i.frequencies, o = i.messages.frequencies, a = e("<input />");
                r = e.map(r, function(e) {
                    return {
                        text: o[e],
                        value: e
                    }
                }),
                t = r[0],
                t && "never" === t.value && (t.value = ""),
                n.element.append(a),
                n._frequency = new Y(a,{
                    dataTextField: "text",
                    dataValueField: "value",
                    dataSource: r,
                    change: function() {
                        n._value = {},
                        n._initView(n._frequency.value()),
                        n.trigger("change")
                    }
                })
            },
            _initView: function(e) {
                var n = this
                  , i = n._value
                  , r = n.options
                  , o = {
                      frequency: e || "never",
                      weekDayCheckBoxes: R,
                      firstWeekDay: r.firstWeekDay,
                      messages: r.messages[e],
                      end: r.messages.end
                  };
                return U.destroy(n._container),
                n._container.html(I(o)),
                e ? (i.freq = e,
                "weekly" !== e || i.weekDays || (i.weekDays = [{
                    day: r.start.getDay(),
                    offset: 0
                }]),
                n._initInterval(),
                n._initWeekDays(),
                n._initMonthDay(),
                n._initWeekDay(),
                n._initMonth(),
                n._initCount(),
                n._initUntil(),
                n._period(),
                n._end(),
                t) : (n._value = {},
                t)
            },
            _initMonth: function() {
                var t, n = this, i = n._value, r = i.months || [n.options.start.getMonth() + 1], o = n._container.find(".k-recur-month");
                o[0] && (t = {
                    change: function() {
                        i.months = [+this.value()],
                        n.trigger("change")
                    },
                    dataTextField: "text",
                    dataValueField: "value",
                    dataSource: e.map(U.culture().calendar.months.names, function(e, t) {
                        return {
                            text: e,
                            value: t + 1
                        }
                    })
                },
                n._month1 = new Y(o[0],t),
                n._month2 = new Y(o[1],t),
                r && (r = r[0],
                n._month1.value(r),
                n._month2.value(r)))
            },
            _end: function() {
                var e, t = this, n = t._value, i = t._container, r = t._namespace, o = function(e) {
                    t._toggleEnd(e.currentTarget.value),
                    t.trigger("change")
                };
                t._buttonNever = i.find(".k-recur-end-never").on(_e + r, o),
                t._buttonCount = i.find(".k-recur-end-count").on(_e + r, o),
                t._buttonUntil = i.find(".k-recur-end-until").on(_e + r, o),
                n.count ? e = "count" : n.until && (e = "until"),
                t._toggleEnd(e)
            },
            _period: function() {
                var e = this
                  , t = e._value
                  , n = "monthly" === t.freq
                  , i = n ? e._toggleMonthDay : e._toggleYear
                  , r = ".k-recur-" + (n ? "month" : "year") + "-radio"
                  , o = e._container.find(r);
                (n || "yearly" === t.freq) && (o.on(_e + e._namespace, function(t) {
                    i.call(e, t.currentTarget.value),
                    e.trigger("change")
                }),
                e._buttonMonthDay = o.eq(0),
                e._buttonWeekDay = o.eq(1),
                i.call(e, t.weekDays ? "weekday" : "monthday"))
            },
            _toggleEnd: function(e) {
                var t, n, i, r, o = this;
                "count" === e ? (o._buttonCount.prop("checked", !0),
                i = !0,
                r = !1,
                t = o._count.value(),
                n = null) : "until" === e ? (o._buttonUntil.prop("checked", !0),
                i = !1,
                r = !0,
                t = null,
                n = o._until.value()) : (o._buttonNever.prop("checked", !0),
                i = r = !1,
                t = n = null),
                o._count.enable(i),
                o._until.enable(r),
                o._value.count = t,
                o._value.until = n
            },
            _toggleMonthDay: function(e) {
                var t, n = this, i = !1, r = !0, o = !1;
                "monthday" === e ? (n._buttonMonthDay.prop("checked", !0),
                t = [n._monthDay.value()],
                i = !0,
                r = !1,
                o = !0) : (n._buttonWeekDay.prop("checked", !0),
                t = null),
                n._weekDay.enable(r),
                n._weekDayOffset.enable(r),
                n._monthDay.enable(i),
                n._value.monthDays = t,
                n._weekDayRule(o)
            },
            _toggleYear: function(e) {
                var t, n = this, i = !1, r = !0;
                "monthday" === e ? (i = !0,
                r = !1,
                t = n._month1.value()) : t = n._month2.value(),
                n._month1.enable(i),
                n._month2.enable(r),
                n._value.months = [t],
                n._toggleMonthDay(e)
            }
        }),
        $.plugin(B),
        P = U.template('<div class="k-edit-label"><label>#:headerTitle#</label></div><div class="k-edit-field k-recur-pattern k-scheduler-toolbar"></div><div class="k-recur-view"></div>'),
        L = U.template('# if (frequency !== "never") { #<div class="k-edit-label"><label>#:messages.repeatEvery#</label></div><div class="k-edit-field"><input class="k-recur-interval" pattern="\\\\d*"/>#:messages.interval#</div># } ## if (frequency === "weekly") { #<div class="k-edit-label"><label>#:messages.repeatOn#</label></div><div class="k-edit-field">#=weekDayCheckBoxes(firstWeekDay)#</div># } else if (frequency === "monthly") { #<div class="k-edit-label"><label>#:messages.repeatBy#</label></div><div class="k-edit-field k-scheduler-toolbar k-repeat-rule"></div><div class="k-monthday-view" style="display:none"><div class="k-edit-label"><label>#:messages.day#</label></div><div class="k-edit-field"><input class="k-recur-monthday" pattern="\\\\d*"/></div></div><div class="k-weekday-view" style="display:none"><div class="k-edit-label"><label>#:messages.every#</label></div><div class="k-edit-field"><select class="k-recur-weekday-offset"></select></div><div class="k-edit-label"><label>#:messages.day#</label></div><div class="k-edit-field"><select class="k-recur-weekday"></select></div></div># } else if (frequency === "yearly") { #<div class="k-edit-label"><label>#:messages.repeatBy#</label></div><div class="k-edit-field k-scheduler-toolbar k-repeat-rule"></div><div class="k-monthday-view" style="display:none"><div class="k-edit-label"><label>#:messages.day#</label></div><div class="k-edit-field"><input class="k-recur-monthday" pattern="\\\\d*"/></div></div><div class="k-weekday-view" style="display:none"><div class="k-edit-label"><label>#:messages.every#</label></div><div class="k-edit-field"><select class="k-recur-weekday-offset"></select></div><div class="k-edit-label"><label>#:messages.day#</label></div><div class="k-edit-field"><select class="k-recur-weekday"></select></div></div><div class="k-edit-label"><label>#:messages.month#</label></div><div class="k-edit-field"><select class="k-recur-month"></select></div># } #'),
        O = U.template('# if (endPattern === "count") { #<div class="k-edit-label"><label>#:messages.after#</label></div><div class="k-edit-field"><input class="k-recur-count" pattern="\\\\d*" /></div># } else if (endPattern === "until") { #<div class="k-edit-label"><label>#:messages.on#</label></div><div class="k-edit-field"><input type="date" class="k-recur-until" /></div># } #'),
        V = U.template('<ul class="k-reset k-header k-scheduler-navigation">#for (var i = 0, length = dataSource.length; i < length; i++) {#<li class="k-state-default #= value === dataSource[i].value ? "k-state-selected" : "" #"><a role="button" href="\\#" class="k-link" data-#=ns#value="#=dataSource[i].value#">#:dataSource[i].text#</a></li>#}#</ul>'),
        W = N.extend({
            init: function(e, t) {
                var n = this;
                N.fn.init.call(n, e, t),
                t = n.options,
                n._optionTemplate = U.template('<option value="#:value#">#:text#</option>'),
                n.value(t.value),
                n._pane = t.pane,
                n._initRepeatButton(),
                n._initRepeatEnd(),
                n._defaultValue = n._value
            },
            options: {
                name: "MobileRecurrenceEditor",
                animations: {
                    left: "slide",
                    right: "slide:right"
                },
                mobile: !0,
                messages: {
                    cancel: "Cancel",
                    update: "Save",
                    endTitle: "Repeat ends",
                    repeatTitle: "Repeat pattern",
                    headerTitle: "Repeat event",
                    end: {
                        patterns: {
                            never: "Never",
                            after: "After...",
                            on: "On..."
                        },
                        never: "Never",
                        after: "End repeat after",
                        on: "End repeat on"
                    },
                    daily: {
                        interval: ""
                    },
                    hourly: {
                        interval: ""
                    },
                    weekly: {
                        interval: ""
                    },
                    monthly: {
                        interval: "",
                        repeatBy: "Repeat by: ",
                        dayOfMonth: "Day of the month",
                        dayOfWeek: "Day of the week",
                        repeatEvery: "Repeat every",
                        every: "Every",
                        day: "Day "
                    },
                    yearly: {
                        interval: "",
                        repeatBy: "Repeat by: ",
                        dayOfMonth: "Day of the month",
                        dayOfWeek: "Day of the week",
                        repeatEvery: "Repeat every: ",
                        every: "Every",
                        month: "Month",
                        day: "Day"
                    }
                }
            },
            events: ["change"],
            value: function(e) {
                var n = this
                  , i = n.options.timezone;
                return e === t ? n._value.freq ? A(n._value, i) : "" : (n._value = F(e, i) || {},
                t)
            },
            destroy: function() {
                this._destroyView(),
                U.destroy(this._endFields),
                this._repeatButton.off(_e + this._namespace),
                N.fn.destroy.call(this)
            },
            _initRepeatButton: function() {
                var t = this
                  , n = t.options.messages.frequencies[this._value.freq || "never"];
                t._repeatButton = e('<a href="#" class="k-button k-scheduler-recur">' + n + "</a>").on(_e + t._namespace, function(e) {
                    e.preventDefault(),
                    t._createView("repeat"),
                    t._pane.navigate("recurrence", t.options.animations.left)
                }),
                t.element.append(t._repeatButton)
            },
            _initRepeatEnd: function() {
                var t = this
                  , n = e('<div class="k-edit-label"><label>' + t.options.messages.end.mobileLabel + "</label></div>").insertAfter(t.element.parent(".k-edit-field"))
                  , i = e('<div class="k-edit-field"><a href="#" class="k-button k-scheduler-recur-end"></a></div>').on(_e + t._namespace, function(e) {
                      e.preventDefault(),
                      t._value.freq && (t._createView("end"),
                      t._pane.navigate("recurrence", t.options.animations.left))
                  }).insertAfter(n);
                t._endFields = n.add(i).toggleClass("k-state-disabled", !t._value.freq),
                t._endButton = i.find(".k-scheduler-recur-end").text(t._endText())
            },
            _endText: function() {
                var e = this._value
                  , t = this.options.messages.end
                  , n = t.never;
                return e.count ? n = U.format("{0} {1}", t.after, e.count) : e.until && (n = U.format("{0} {1:d}", t.on, e.until)),
                n
            },
            _initFrequency: function() {
                var t = this
                  , n = t.options.messages.frequencies
                  , i = V({
                      dataSource: e.map(this.options.frequencies, function(e) {
                          return {
                              text: n[e],
                              value: "never" !== e ? e : ""
                          }
                      }),
                      value: t._value.freq || "",
                      ns: U.ns
                  });
                t._view.element.find(".k-recur-pattern").append(i).on(_e + t._namespace, ".k-scheduler-navigation li", function(n) {
                    var i = e(this);
                    n.preventDefault(),
                    i.addClass("k-state-selected").siblings().removeClass("k-state-selected"),
                    t._value = {
                        freq: i.children("a").attr(U.attr("value"))
                    },
                    t._initRepeatView()
                })
            },
            _initEndNavigation: function() {
                var t, n = this, i = n.options.messages.end.patterns, r = n._value, o = "";
                r.count ? o = "count" : r.until && (o = "until"),
                t = V({
                    dataSource: [{
                        text: i.never,
                        value: ""
                    }, {
                        text: i.after,
                        value: "count"
                    }, {
                        text: i.on,
                        value: "until"
                    }],
                    value: o,
                    ns: U.ns
                }),
                n._view.element.find(".k-recur-pattern").append(t).on(_e + n._namespace, ".k-scheduler-navigation li", function(t) {
                    var i = e(this)
                      , o = null
                      , a = null;
                    t.preventDefault(),
                    i.addClass("k-state-selected").siblings().removeClass("k-state-selected"),
                    n._initEndView(i.children("a").attr(U.attr("value"))),
                    n._count ? (o = n._count.value(),
                    a = null) : n._until && (o = null,
                    a = n._until.val ? U.parseDate(n._until.val(), "yyyy-MM-dd") : n._until.value()),
                    r.count = o,
                    r.until = a
                })
            },
            _createView: function(t) {
                var n = this
                  , i = n.options
                  , r = i.messages
                  , o = r["repeat" === t ? "repeatTitle" : "endTitle"]
                  , a = '<div data-role="view" class="k-popup-edit-form k-scheduler-edit-form k-mobile-list" id="recurrence"><div data-role="header" class="k-header"><a href="#" class="k-button k-scheduler-cancel">' + r.cancel + "</a>" + r.headerTitle + '<a href="#" class="k-button k-scheduler-update">' + r.update + "</a></div>"
                  , s = n._pane.view().id;
                n._view = n._pane.append(a + P({
                    headerTitle: o
                })),
                n._view.element.on(_e + n._namespace, "a.k-scheduler-cancel, a.k-scheduler-update", function(t) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    e(this).hasClass("k-scheduler-update") ? (n.trigger("change"),
                    n._defaultValue = e.extend({}, n._value)) : n._value = n._defaultValue;
                    var i = n._value.freq;
                    n._endButton.text(n._endText()),
                    n._endFields.toggleClass("k-state-disabled", !i),
                    n._repeatButton.text(r.frequencies[i || "never"]),
                    n._pane.one("viewShow", function() {
                        n._destroyView()
                    }),
                    n._pane.navigate(s, n.options.animations.right)
                }),
                n._container = n._view.element.find(".k-recur-view"),
                "repeat" === t ? (n._initFrequency(),
                n._initRepeatView()) : (n._initEndNavigation(),
                n._initEndView())
            },
            _destroyView: function() {
                this._view && (this._view.destroy(),
                this._view.element.remove()),
                this._view = null
            },
            _initRepeatView: function() {
                var e = this
                  , n = e._value.freq || "never"
                  , i = {
                      frequency: n,
                      weekDayCheckBoxes: R,
                      firstWeekDay: e.options.firstWeekDay,
                      messages: e.options.messages[n]
                  }
                  , r = L(i)
                  , o = e._container
                  , a = e._value;
                return U.destroy(o),
                o.html(r),
                r ? ("weekly" !== n || a.weekDays || (a.weekDays = [{
                    day: e.options.start.getDay(),
                    offset: 0
                }]),
                e._initInterval(),
                e._initMonthDay(),
                e._initWeekDays(),
                e._initWeekDay(),
                e._initMonth(),
                e._period(),
                t) : (e._value = {},
                t)
            },
            _initEndView: function(e) {
                var n, i = this, r = i._value;
                e === t && (r.count ? e = "count" : r.until && (e = "until")),
                n = {
                    endPattern: e,
                    messages: i.options.messages.end
                },
                U.destroy(i._container),
                i._container.html(O(n)),
                i._initCount(),
                i._initUntil()
            },
            _initWeekDay: function() {
                var t, n = this, i = n.options.messages.weekdays, r = n.options.messages.offsetPositions, o = n._container.find(".k-recur-weekday"), a = function() {
                    n._weekDayRule(),
                    n.trigger("change")
                };
                o[0] && (n._weekDayOffset = n._container.find(".k-recur-weekday-offset").html(n._options([{
                    text: r.first,
                    value: "1"
                }, {
                    text: r.second,
                    value: "2"
                }, {
                    text: r.third,
                    value: "3"
                }, {
                    text: r.fourth,
                    value: "4"
                }, {
                    text: r.last,
                    value: "-1"
                }])).change(a),
                t = [{
                    text: i.day,
                    value: "day"
                }, {
                    text: i.weekday,
                    value: "weekday"
                }, {
                    text: i.weekend,
                    value: "weekend"
                }],
                t = t.concat(e.map(U.culture().calendar.days.names, function(e, t) {
                    return {
                        text: e,
                        value: t
                    }
                })),
                n._weekDay = o.html(n._options(t)).change(a).val(n.options.start.getDay()),
                n._weekDayView())
            },
            _initMonth: function() {
                var t, n = this, i = n._value, r = n.options.start, o = i.months || [r.getMonth() + 1], a = n._container.find(".k-recur-month"), s = U.culture().calendar.months.names;
                a[0] && (t = e.map(s, function(e, t) {
                    return {
                        text: e,
                        value: t + 1
                    }
                }),
                a.html(n._options(t)).change(function() {
                    i.months = [+this.value]
                }),
                n._monthSelect = a,
                o && a.val(o[0]))
            },
            _period: function() {
                var t, n, i, r = this, o = r._value, a = r._container, s = r.options.messages[o.freq], l = a.find(".k-repeat-rule"), d = a.find(".k-weekday-view"), u = a.find(".k-monthday-view");
                l[0] && (t = o.weekDays ? "weekday" : "monthday",
                n = V({
                    value: t,
                    dataSource: [{
                        text: s.dayOfMonth,
                        value: "monthday"
                    }, {
                        text: s.dayOfWeek,
                        value: "weekday"
                    }],
                    ns: U.ns
                }),
                i = function(e) {
                    var t = r._weekDay.val()
                      , n = r._weekDayOffset.val()
                      , i = r._monthDay.value()
                      , a = r._monthSelect ? r._monthSelect.val() : null;
                    "monthday" === e ? (o.weekDays = null,
                    o.monthDays = i ? [i] : i,
                    o.months = a ? [+a] : a,
                    d.hide(),
                    u.show()) : (o.monthDays = null,
                    o.months = a ? [+a] : a,
                    o.weekDays = [{
                        offset: +n,
                        day: +t
                    }],
                    d.show(),
                    u.hide())
                }
                ,
                l.append(n).on(_e + r._namespace, ".k-scheduler-navigation li", function(t) {
                    var n, r = e(this).addClass("k-state-selected");
                    t.preventDefault(),
                    r.siblings().removeClass("k-state-selected"),
                    n = r.children("a").attr(U.attr("value")),
                    i(n)
                }),
                i(t))
            },
            _initUntil: function() {
                var e = this
                  , t = e._container.find(".k-recur-until")
                  , n = e.options.start
                  , i = e._value
                  , r = i.until
                  , o = r && r < n ? r : n;
                e._until = U.support.input.date ? t.attr("min", U.toString(o, "yyyy-MM-dd")).val(U.toString(r || n, "yyyy-MM-dd")).on("change", function() {
                    i.until = U.parseDate(this.value, "yyyy-MM-dd")
                }) : t.kendoDatePicker({
                    min: o,
                    value: r || n,
                    change: function() {
                        i.until = this.value()
                    }
                }).data("kendoDatePicker")
            },
            _options: function(e, t) {
                var n = 0
                  , i = ""
                  , r = e.length
                  , o = this._optionTemplate;
                for (t && (i += o({
                    value: "",
                    text: t
                })); n < r; n++)
                    i += o(e[n]);
                return i
            }
        }),
        $.plugin(W)
    }(window.kendo.jQuery),
    window.kendo
}, "function" == typeof define && define.amd ? define : function(e, t, n) {
    (n || t)()
}
)






