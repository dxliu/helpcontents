/* ReSpec 3.2.30 - Robin Berjon, http://berjon.com/ (@robinberjon) */
/* Documentation: http://w3.org/respec/. */
/* See original source for licenses: https://github.com/darobin/respec. */
respecVersion = '3.2.30';
var requirejs, require, define;
! function(Z) {
    function H(e) {
        return "[object Function]" === L.call(e)
    }

    function I(e) {
        return "[object Array]" === L.call(e)
    }

    function y(e, t) {
        if (e) {
            var n;
            for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
        }
    }

    function M(e, t) {
        if (e) {
            var n;
            for (n = e.length - 1; n > -1 && (!e[n] || !t(e[n], n, e)); n -= 1);
        }
    }

    function s(e, t) {
        return ga.call(e, t)
    }

    function l(e, t) {
        return s(e, t) && e[t]
    }

    function F(e, t) {
        for (var n in e)
            if (s(e, n) && t(e[n], n)) break
    }

    function Q(e, t, n, r) {
        return t && F(t, function(t, i) {
            (n || !s(e, i)) && (r && "string" != typeof t ? (e[i] || (e[i] = {}), Q(e[i], t, n, r)) : e[i] = t)
        }), e
    }

    function u(e, t) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function aa(e) {
        throw e
    }

    function ba(e) {
        if (!e) return e;
        var t = Z;
        return y(e.split("."), function(e) {
            t = t[e]
        }), t
    }

    function A(e, t, n, r) {
        return t = Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e), t.requireType = e, t.requireModules = r, n && (t.originalError = n), t
    }

    function ha(e) {
        function t(e, t, n) {
            var r, i, a, s, o, c, u, p = t && t.split("/");
            r = p;
            var d = T.map,
                f = d && d["*"];
            if (e && "." === e.charAt(0))
                if (t) {
                    for (r = l(T.pkgs, t) ? p = [t] : p.slice(0, p.length - 1), t = e = r.concat(e.split("/")), r = 0; t[r]; r += 1)
                        if (i = t[r], "." === i) t.splice(r, 1), r -= 1;
                        else if (".." === i) {
                        if (1 === r && (".." === t[2] || ".." === t[0])) break;
                        r > 0 && (t.splice(r - 1, 2), r -= 2)
                    }
                    r = l(T.pkgs, t = e[0]), e = e.join("/"), r && e === t + "/" + r.main && (e = t)
                } else 0 === e.indexOf("./") && (e = e.substring(2));
            if (n && d && (p || f)) {
                for (t = e.split("/"), r = t.length; r > 0; r -= 1) {
                    if (a = t.slice(0, r).join("/"), p)
                        for (i = p.length; i > 0; i -= 1)
                            if ((n = l(d, p.slice(0, i).join("/"))) && (n = l(n, a))) {
                                s = n, o = r;
                                break
                            }
                    if (s) break;
                    !c && f && l(f, a) && (c = l(f, a), u = r)
                }!s && c && (s = c, o = u), s && (t.splice(0, o, s), e = t.join("/"))
            }
            return e
        }

        function n(e) {
            z && y(document.getElementsByTagName("script"), function(t) {
                return t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === C.contextName ? (t.parentNode.removeChild(t), !0) : void 0
            })
        }

        function r(e) {
            var t = l(T.paths, e);
            return t && I(t) && 1 < t.length ? (n(e), t.shift(), C.require.undef(e), C.require([e]), !0) : void 0
        }

        function i(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function a(e, n, r, a) {
            var s, o, c = null,
                u = n ? n.name : null,
                p = e,
                d = !0,
                f = "";
            return e || (d = !1, e = "_@r" + (_ += 1)), e = i(e), c = e[0], e = e[1], c && (c = t(c, u, a), o = l($, c)), e && (c ? f = o && o.normalize ? o.normalize(e, function(e) {
                return t(e, u, a)
            }) : t(e, u, a) : (f = t(e, u, a), e = i(f), c = e[0], f = e[1], r = !0, s = C.nameToUrl(f))), r = !c || o || r ? "" : "_unnormalized" + (q += 1), {
                prefix: c,
                name: f,
                parentMap: n,
                unnormalized: !!r,
                url: s,
                originalName: p,
                isDefine: d,
                id: (c ? c + "!" + f : f) + r
            }
        }

        function o(e) {
            var t = e.id,
                n = l(E, t);
            return n || (n = E[t] = new C.Module(e)), n
        }

        function c(e, t, n) {
            var r = e.id,
                i = l(E, r);
            !s($, r) || i && !i.defineEmitComplete ? (i = o(e), i.error && "error" === t ? n(i.error) : i.on(t, n)) : "defined" === t && n($[r])
        }

        function p(e, t) {
            var n = e.requireModules,
                r = !1;
            t ? t(e) : (y(n, function(t) {
                (t = l(E, t)) && (t.error = e, t.events.error && (r = !0, t.emit("error", e)))
            }), r || j.onError(e))
        }

        function d() {
            R.length && (ia.apply(L, [L.length - 1, 0].concat(R)), R = [])
        }

        function f(e) {
            delete E[e], delete D[e]
        }

        function h(e, t, n) {
            var r = e.map.id;
            e.error ? e.emit("error", e.error) : (t[r] = !0, y(e.depMaps, function(r, i) {
                var a = r.id,
                    s = l(E, a);
                s && !e.depMatched[i] && !n[a] && (l(t, a) ? (e.defineDep(i, $[a]), e.check()) : h(s, t, n))
            }), n[r] = !0)
        }

        function m() {
            var e, t, i, a, s = (i = 1e3 * T.waitSeconds) && C.startTime + i < (new Date).getTime(),
                o = [],
                l = [],
                c = !1,
                u = !0;
            if (!x) {
                if (x = !0, F(D, function(i) {
                        if (e = i.map, t = e.id, i.enabled && (e.isDefine || l.push(i), !i.error))
                            if (!i.inited && s) r(t) ? c = a = !0 : (o.push(t), n(t));
                            else if (!i.inited && i.fetched && e.isDefine && (c = !0, !e.prefix)) return u = !1
                    }), s && o.length) return i = A("timeout", "Load timeout for modules: " + o, null, o), i.contextName = C.contextName, p(i);
                u && y(l, function(e) {
                    h(e, {}, {})
                }), s && !a || !c || !z && !da || S || (S = setTimeout(function() {
                    S = 0, m()
                }, 50)), x = !1
            }
        }

        function g(e) {
            s($, e[0]) || o(a(e[0], null, !0)).init(e[1], e[2])
        }

        function b(e) {
            var e = e.currentTarget || e.srcElement,
                t = C.onScriptLoad;
            return e.detachEvent && !W ? e.detachEvent("onreadystatechange", t) : e.removeEventListener("load", t, !1), t = C.onScriptError, (!e.detachEvent || W) && e.removeEventListener("error", t, !1), {
                node: e,
                id: e && e.getAttribute("data-requiremodule")
            }
        }

        function v() {
            var e;
            for (d(); L.length;) {
                if (e = L.shift(), null === e[0]) return p(A("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                g(e)
            }
        }
        var x, w, C, k, S, T = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            E = {},
            D = {},
            N = {},
            L = [],
            $ = {},
            M = {},
            _ = 1,
            q = 1;
        return k = {
            require: function(e) {
                return e.require ? e.require : e.require = C.makeRequire(e.map)
            },
            exports: function(e) {
                return e.usingExports = !0, e.map.isDefine ? e.exports ? e.exports : e.exports = $[e.map.id] = {} : void 0
            },
            module: function(e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function() {
                        var t = l(T.pkgs, e.map.id);
                        return (t ? l(T.config, e.map.id + "/" + t.main) : l(T.config, e.map.id)) || {}
                    },
                    exports: $[e.map.id]
                }
            }
        }, w = function(e) {
            this.events = l(N, e.id) || {}, this.map = e, this.shim = l(T.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, w.prototype = {
            init: function(e, t, n, r) {
                r = r || {}, this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = u(this, function(e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function(e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0, C.startTime = (new Date).getTime();
                    var e = this.map;
                    if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
                    C.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], u(this, function() {
                        return e.prefix ? this.callPlugin() : this.load()
                    }))
                }
            },
            load: function() {
                var e = this.map.url;
                M[e] || (M[e] = !0, C.load(this.map.id, e))
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var e, t, n = this.map.id;
                    t = this.depExports;
                    var r = this.exports,
                        i = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, 1 > this.depCount && !this.defined) {
                                if (H(i)) {
                                    if (this.events.error && this.map.isDefine || j.onError !== aa) try {
                                        r = C.execCb(n, i, t, r)
                                    } catch (a) {
                                        e = a
                                    } else r = C.execCb(n, i, t, r);
                                    if (this.map.isDefine && ((t = this.module) && void 0 !== t.exports && t.exports !== this.exports ? r = t.exports : void 0 === r && this.usingExports && (r = this.exports)), e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", p(this.error = e)
                                } else r = i;
                                this.exports = r, this.map.isDefine && !this.ignore && ($[n] = r, j.onResourceLoad) && j.onResourceLoad(C, this.map, this.depMaps), f(n), this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            },
            callPlugin: function() {
                var e = this.map,
                    n = e.id,
                    r = a(e.prefix);
                this.depMaps.push(r), c(r, "defined", u(this, function(r) {
                    var i, d;
                    d = this.map.name;
                    var h = this.map.parentMap ? this.map.parentMap.name : null,
                        m = C.makeRequire(e.parentMap, {
                            enableBuildCallback: !0
                        });
                    this.map.unnormalized ? (r.normalize && (d = r.normalize(d, function(e) {
                        return t(e, h, !0)
                    }) || ""), r = a(e.prefix + "!" + d, this.map.parentMap), c(r, "defined", u(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })), (d = l(E, r.id)) && (this.depMaps.push(r), this.events.error && d.on("error", u(this, function(e) {
                        this.emit("error", e)
                    })), d.enable())) : (i = u(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0
                        })
                    }), i.error = u(this, function(e) {
                        this.inited = !0, this.error = e, e.requireModules = [n], F(E, function(e) {
                            0 === e.map.id.indexOf(n + "_unnormalized") && f(e.map.id)
                        }), p(e)
                    }), i.fromText = u(this, function(t, r) {
                        var l = e.name,
                            c = a(l),
                            u = O;
                        r && (t = r), u && (O = !1), o(c), s(T.config, n) && (T.config[l] = T.config[n]);
                        try {
                            j.exec(t)
                        } catch (d) {
                            return p(A("fromtexteval", "fromText eval for " + n + " failed: " + d, d, [n]))
                        }
                        u && (O = !0), this.depMaps.push(c), C.completeLoad(l), m([l], i)
                    }), r.load(e.name, m, i, T))
                })), C.enable(r, this), this.pluginMaps[r.id] = r
            },
            enable: function() {
                D[this.map.id] = this, this.enabling = this.enabled = !0, y(this.depMaps, u(this, function(e, t) {
                    var n, r;
                    if ("string" == typeof e) {
                        if (e = a(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, n = l(k, e.id)) return this.depExports[t] = n(this), void 0;
                        this.depCount += 1, c(e, "defined", u(this, function(e) {
                            this.defineDep(t, e), this.check()
                        })), this.errback && c(e, "error", u(this, this.errback))
                    }
                    n = e.id, r = E[n], !s(k, n) && r && !r.enabled && C.enable(e, this)
                })), F(this.pluginMaps, u(this, function(e) {
                    var t = l(E, e.id);
                    t && !t.enabled && C.enable(e, this)
                })), this.enabling = !1, this.check()
            },
            on: function(e, t) {
                var n = this.events[e];
                n || (n = this.events[e] = []), n.push(t)
            },
            emit: function(e, t) {
                y(this.events[e], function(e) {
                    e(t)
                }), "error" === e && delete this.events[e]
            }
        }, C = {
            config: T,
            contextName: e,
            registry: E,
            defined: $,
            urlFetched: M,
            defQueue: L,
            Module: w,
            makeModuleMap: a,
            nextTick: j.nextTick,
            onError: p,
            configure: function(e) {
                e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                var t = T.pkgs,
                    n = T.shim,
                    r = {
                        paths: !0,
                        config: !0,
                        map: !0
                    };
                F(e, function(e, t) {
                    r[t] ? "map" === t ? (T.map || (T.map = {}), Q(T[t], e, !0, !0)) : Q(T[t], e, !0) : T[t] = e
                }), e.shim && (F(e.shim, function(e, t) {
                    I(e) && (e = {
                        deps: e
                    }), !e.exports && !e.init || e.exportsFn || (e.exportsFn = C.makeShimExports(e)), n[t] = e
                }), T.shim = n), e.packages && (y(e.packages, function(e) {
                    e = "string" == typeof e ? {
                        name: e
                    } : e, t[e.name] = {
                        name: e.name,
                        location: e.location || e.name,
                        main: (e.main || "main").replace(ja, "").replace(ea, "")
                    }
                }), T.pkgs = t), F(E, function(e, t) {
                    !e.inited && !e.map.unnormalized && (e.map = a(t))
                }), (e.deps || e.callback) && C.require(e.deps || [], e.callback)
            },
            makeShimExports: function(e) {
                return function() {
                    var t;
                    return e.init && (t = e.init.apply(Z, arguments)), t || e.exports && ba(e.exports)
                }
            },
            makeRequire: function(n, r) {
                function i(t, l, c) {
                    var u, d;
                    return r.enableBuildCallback && l && H(l) && (l.__requireJsBuild = !0), "string" == typeof t ? H(l) ? p(A("requireargs", "Invalid require call"), c) : n && s(k, t) ? k[t](E[n.id]) : j.get ? j.get(C, t, n, i) : (u = a(t, n, !1, !0), u = u.id, s($, u) ? $[u] : p(A("notloaded", 'Module name "' + u + '" has not been loaded yet for context: ' + e + (n ? "" : ". Use require([])")))) : (v(), C.nextTick(function() {
                        v(), d = o(a(null, n)), d.skipMap = r.skipMap, d.init(t, l, c, {
                            enabled: !0
                        }), m()
                    }), i)
                }
                return r = r || {}, Q(i, {
                    isBrowser: z,
                    toUrl: function(e) {
                        var r, i = e.lastIndexOf("."),
                            a = e.split("/")[0];
                        return -1 !== i && ("." !== a && ".." !== a || i > 1) && (r = e.substring(i, e.length), e = e.substring(0, i)), C.nameToUrl(t(e, n && n.id, !0), r, !0)
                    },
                    defined: function(e) {
                        return s($, a(e, n, !1, !0).id)
                    },
                    specified: function(e) {
                        return e = a(e, n, !1, !0).id, s($, e) || s(E, e)
                    }
                }), n || (i.undef = function(e) {
                    d();
                    var t = a(e, n, !0),
                        r = l(E, e);
                    delete $[e], delete M[t.url], delete N[e], r && (r.events.defined && (N[e] = r.events), f(e))
                }), i
            },
            enable: function(e) {
                l(E, e.id) && o(e).enable()
            },
            completeLoad: function(e) {
                var t, n, i = l(T.shim, e) || {},
                    a = i.exports;
                for (d(); L.length;) {
                    if (n = L.shift(), null === n[0]) {
                        if (n[0] = e, t) break;
                        t = !0
                    } else n[0] === e && (t = !0);
                    g(n)
                }
                if (n = l(E, e), !t && !s($, e) && n && !n.inited) {
                    if (T.enforceDefine && (!a || !ba(a))) return r(e) ? void 0 : p(A("nodefine", "No define call for " + e, null, [e]));
                    g([e, i.deps || [], i.exportsFn])
                }
                m()
            },
            nameToUrl: function(e, t, n) {
                var r, i, a, s, o, c;
                if (j.jsExtRegExp.test(e)) s = e + (t || "");
                else {
                    for (r = T.paths, i = T.pkgs, s = e.split("/"), o = s.length; o > 0; o -= 1) {
                        if (c = s.slice(0, o).join("/"), a = l(i, c), c = l(r, c)) {
                            I(c) && (c = c[0]), s.splice(0, o, c);
                            break
                        }
                        if (a) {
                            e = e === a.name ? a.location + "/" + a.main : a.location, s.splice(0, o, e);
                            break
                        }
                    }
                    s = s.join("/"), s += t || (/\?/.test(s) || n ? "" : ".js"), s = ("/" === s.charAt(0) || s.match(/^[\w\+\.\-]+:/) ? "" : T.baseUrl) + s
                }
                return T.urlArgs ? s + ((-1 === s.indexOf("?") ? "?" : "&") + T.urlArgs) : s
            },
            load: function(e, t) {
                j.load(C, e, t)
            },
            execCb: function(e, t, n, r) {
                return t.apply(r, n)
            },
            onScriptLoad: function(e) {
                ("load" === e.type || ka.test((e.currentTarget || e.srcElement).readyState)) && (P = null, e = b(e), C.completeLoad(e.id))
            },
            onScriptError: function(e) {
                var t = b(e);
                return r(t.id) ? void 0 : p(A("scripterror", "Script error for: " + t.id, e, [t.id]))
            }
        }, C.require = C.makeRequire(), C
    }
    var j, w, x, C, J, D, P, K, q, fa, la = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
        ma = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        ea = /\.js$/,
        ja = /^\.\//;
    w = Object.prototype;
    var L = w.toString,
        ga = w.hasOwnProperty,
        ia = Array.prototype.splice,
        z = !("undefined" == typeof window || !navigator || !window.document),
        da = !z && "undefined" != typeof importScripts,
        ka = z && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        W = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        E = {},
        t = {},
        R = [],
        O = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (H(requirejs)) return;
            t = requirejs, requirejs = void 0
        }
        "undefined" != typeof require && !H(require) && (t = require, require = void 0), j = requirejs = function(e, t, n, r) {
            var i, a = "_";
            return !I(e) && "string" != typeof e && (i = e, I(t) ? (e = t, t = n, n = r) : e = []), i && i.context && (a = i.context), (r = l(E, a)) || (r = E[a] = j.s.newContext(a)), i && r.configure(i), r.require(e, t, n)
        }, j.config = function(e) {
            return j(e)
        }, j.nextTick = "undefined" != typeof setTimeout ? function(e) {
            setTimeout(e, 4)
        } : function(e) {
            e()
        }, require || (require = j), j.version = "2.1.8", j.jsExtRegExp = /^\/|:|\?|\.js$/, j.isBrowser = z, w = j.s = {
            contexts: E,
            newContext: ha
        }, j({}), y(["toUrl", "undef", "defined", "specified"], function(e) {
            j[e] = function() {
                var t = E._;
                return t.require[e].apply(t, arguments)
            }
        }), z && (x = w.head = document.getElementsByTagName("head")[0], C = document.getElementsByTagName("base")[0]) && (x = w.head = C.parentNode), j.onError = aa, j.createNode = function(e) {
            var t = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return t.type = e.scriptType || "text/javascript", t.charset = "utf-8", t.async = !0, t
        }, j.load = function(e, t, n) {
            var r = e && e.config || {};
            if (z) return r = j.createNode(r, t, n), r.setAttribute("data-requirecontext", e.contextName), r.setAttribute("data-requiremodule", t), !r.attachEvent || r.attachEvent.toString && 0 > r.attachEvent.toString().indexOf("[native code") || W ? (r.addEventListener("load", e.onScriptLoad, !1), r.addEventListener("error", e.onScriptError, !1)) : (O = !0, r.attachEvent("onreadystatechange", e.onScriptLoad)), r.src = n, K = r, C ? x.insertBefore(r, C) : x.appendChild(r), K = null, r;
            if (da) try {
                importScripts(n), e.completeLoad(t)
            } catch (i) {
                e.onError(A("importscripts", "importScripts failed for " + t + " at " + n, i, [t]))
            }
        }, z && M(document.getElementsByTagName("script"), function(e) {
            return x || (x = e.parentNode), (J = e.getAttribute("data-main")) ? (q = J, t.baseUrl || (D = q.split("/"), q = D.pop(), fa = D.length ? D.join("/") + "/" : "./", t.baseUrl = fa), q = q.replace(ea, ""), j.jsExtRegExp.test(q) && (q = J), t.deps = t.deps ? t.deps.concat(q) : [q], !0) : void 0
        }), define = function(e, t, n) {
            var r, i;
            "string" != typeof e && (n = t, t = e, e = null), I(t) || (n = t, t = null), !t && H(n) && (t = [], n.length && (n.toString().replace(la, "").replace(ma, function(e, n) {
                t.push(n)
            }), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))), O && ((r = K) || (P && "interactive" === P.readyState || M(document.getElementsByTagName("script"), function(e) {
                return "interactive" === e.readyState ? P = e : void 0
            }), r = P), r && (e || (e = r.getAttribute("data-requiremodule")), i = E[r.getAttribute("data-requirecontext")])), (i ? i.defQueue : R).push([e, t, n])
        }, define.amd = {
            jQuery: !0
        }, j.exec = function(b) {
            return eval(b)
        }, j(t)
    }
}(this), define("requireLib", function() {}), define("domReady", [], function() {
        function e(e) {
            var t;
            for (t = 0; t < e.length; t += 1) e[t](c)
        }

        function t() {
            var t = u;
            l && t.length && (u = [], e(t))
        }

        function n() {
            l || (l = !0, s && clearInterval(s), t())
        }

        function r(e) {
            return l ? e(c) : u.push(e), r
        }
        var i, a, s, o = "undefined" != typeof window && window.document,
            l = !o,
            c = o ? document : null,
            u = [];
        if (o) {
            if (document.addEventListener) document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1);
            else if (window.attachEvent) {
                window.attachEvent("onload", n), a = document.createElement("div");
                try {
                    i = null === window.frameElement
                } catch (p) {}
                a.doScroll && i && window.external && (s = setInterval(function() {
                    try {
                        a.doScroll(), n()
                    } catch (e) {}
                }, 30))
            }
            "complete" === document.readyState && n()
        }
        return r.version = "2.0.1", r.load = function(e, t, n, i) {
            i.isBuild ? n(null) : r(n)
        }, r
    }),
    function(e, t) {
        function n(e) {
            var t = e.length,
                n = at.type(e);
            return at.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function r(e) {
            var t = ht[e] = {};
            return at.each(e.match(ot) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function i() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = at.expando + Math.random()
        }

        function a(e, n, r) {
            var i;
            if (r === t && 1 === e.nodeType)
                if (i = "data-" + n.replace(vt, "-$1").toLowerCase(), r = e.getAttribute(i), "string" == typeof r) {
                    try {
                        r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : bt.test(r) ? JSON.parse(r) : r
                    } catch (a) {}
                    mt.set(e, n, r)
                } else r = t;
            return r
        }

        function s() {
            return !0
        }

        function o() {
            return !1
        }

        function l() {
            try {
                return U.activeElement
            } catch (e) {}
        }

        function c(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function u(e, t, n) {
            if (at.isFunction(t)) return at.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
            if (t.nodeType) return at.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (Nt.test(t)) return at.filter(t, e, n);
                t = at.filter(t, e)
            }
            return at.grep(e, function(e) {
                return tt.call(t, e) >= 0 !== n
            })
        }

        function p(e, t) {
            return at.nodeName(e, "table") && at.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function d(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function f(e) {
            var t = Ft.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function h(e, t) {
            for (var n = e.length, r = 0; n > r; r++) gt.set(e[r], "globalEval", !t || gt.get(t[r], "globalEval"))
        }

        function m(e, t) {
            var n, r, i, a, s, o, l, c;
            if (1 === t.nodeType) {
                if (gt.hasData(e) && (a = gt.access(e), s = gt.set(t, a), c = a.events)) {
                    delete s.handle, s.events = {};
                    for (i in c)
                        for (n = 0, r = c[i].length; r > n; n++) at.event.add(t, i, c[i][n])
                }
                mt.hasData(e) && (o = mt.access(e), l = at.extend({}, o), mt.set(t, l))
            }
        }

        function g(e, n) {
            var r = e.getElementsByTagName ? e.getElementsByTagName(n || "*") : e.querySelectorAll ? e.querySelectorAll(n || "*") : [];
            return n === t || n && at.nodeName(e, n) ? at.merge([e], r) : r
        }

        function b(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ht.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }

        function v(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Jt.length; i--;)
                if (t = Jt[i] + n, t in e) return t;
            return r
        }

        function y(e, t) {
            return e = t || e, "none" === at.css(e, "display") || !at.contains(e.ownerDocument, e)
        }

        function x(t) {
            return e.getComputedStyle(t, null)
        }

        function w(e, t) {
            for (var n, r, i, a = [], s = 0, o = e.length; o > s; s++) r = e[s], r.style && (a[s] = gt.get(r, "olddisplay"), n = r.style.display, t ? (a[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && y(r) && (a[s] = gt.access(r, "olddisplay", T(r.nodeName)))) : a[s] || (i = y(r), (n && "none" !== n || !i) && gt.set(r, "olddisplay", i ? n : at.css(r, "display"))));
            for (s = 0; o > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? a[s] || "" : "none"));
            return e
        }

        function C(e, t, n) {
            var r = Gt.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function k(e, t, n, r, i) {
            for (var a = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > a; a += 2) "margin" === n && (s += at.css(e, n + Zt[a], !0, i)), r ? ("content" === n && (s -= at.css(e, "padding" + Zt[a], !0, i)), "margin" !== n && (s -= at.css(e, "border" + Zt[a] + "Width", !0, i))) : (s += at.css(e, "padding" + Zt[a], !0, i), "padding" !== n && (s += at.css(e, "border" + Zt[a] + "Width", !0, i)));
            return s
        }

        function S(e, t, n) {
            var r = !0,
                i = "width" === t ? e.offsetWidth : e.offsetHeight,
                a = x(e),
                s = at.support.boxSizing && "border-box" === at.css(e, "boxSizing", !1, a);
            if (0 >= i || null == i) {
                if (i = Wt(e, t, a), (0 > i || null == i) && (i = e.style[t]), Vt.test(i)) return i;
                r = s && (at.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + k(e, t, n || (s ? "border" : "content"), r, a) + "px"
        }

        function T(e) {
            var t = U,
                n = Yt[e];
            return n || (n = E(e, t), "none" !== n && n || (Bt = (Bt || at("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Bt[0].contentWindow || Bt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = E(e, t), Bt.detach()), Yt[e] = n), n
        }

        function E(e, t) {
            var n = at(t.createElement(e)).appendTo(t.body),
                r = at.css(n[0], "display");
            return n.remove(), r
        }

        function D(e, t, n, r) {
            var i;
            if (at.isArray(t)) at.each(t, function(t, i) {
                n || tn.test(e) ? r(e, i) : D(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
            else if (n || "object" !== at.type(t)) r(e, t);
            else
                for (i in t) D(e + "[" + i + "]", t[i], n, r)
        }

        function N(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    a = t.toLowerCase().match(ot) || [];
                if (at.isFunction(n))
                    for (; r = a[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function A(e, n, r, i) {
            function a(l) {
                var c;
                return s[l] = !0, at.each(e[l] || [], function(e, l) {
                    var u = l(n, r, i);
                    return "string" != typeof u || o || s[u] ? o ? !(c = u) : t : (n.dataTypes.unshift(u), a(u), !1)
                }), c
            }
            var s = {},
                o = e === yn;
            return a(n.dataTypes[0]) || !s["*"] && a("*")
        }

        function R(e, n) {
            var r, i, a = at.ajaxSettings.flatOptions || {};
            for (r in n) n[r] !== t && ((a[r] ? e : i || (i = {}))[r] = n[r]);
            return i && at.extend(!0, e, i), e
        }

        function P(e, n, r) {
            for (var i, a, s, o, l = e.contents, c = e.dataTypes;
                "*" === c[0];) c.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
            if (i)
                for (a in l)
                    if (l[a] && l[a].test(i)) {
                        c.unshift(a);
                        break
                    }
            if (c[0] in r) s = c[0];
            else {
                for (a in r) {
                    if (!c[0] || e.converters[a + " " + c[0]]) {
                        s = a;
                        break
                    }
                    o || (o = a)
                }
                s = s || o
            }
            return s ? (s !== c[0] && c.unshift(s), r[s]) : t
        }

        function L(e, t, n, r) {
            var i, a, s, o, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
            for (a = u.shift(); a;)
                if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift())
                    if ("*" === a) a = l;
                    else if ("*" !== l && l !== a) {
                if (s = c[l + " " + a] || c["* " + a], !s)
                    for (i in c)
                        if (o = i.split(" "), o[1] === a && (s = c[l + " " + o[0]] || c["* " + o[0]])) {
                            s === !0 ? s = c[i] : c[i] !== !0 && (a = o[0], u.unshift(o[1]));
                            break
                        }
                if (s !== !0)
                    if (s && e["throws"]) t = s(t);
                    else try {
                        t = s(t)
                    } catch (p) {
                        return {
                            state: "parsererror",
                            error: s ? p : "No conversion from " + l + " to " + a
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function j() {
            return setTimeout(function() {
                Nn = t
            }), Nn = at.now()
        }

        function I(e, t, n) {
            for (var r, i = (In[t] || []).concat(In["*"]), a = 0, s = i.length; s > a; a++)
                if (r = i[a].call(n, t, e)) return r
        }

        function $(e, t, n) {
            var r, i, a = 0,
                s = jn.length,
                o = at.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (i) return !1;
                    for (var t = Nn || j(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, a = 1 - r, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(a);
                    return o.notifyWith(e, [c, a, n]), 1 > a && l ? n : (o.resolveWith(e, [c]), !1)
                },
                c = o.promise({
                    elem: e,
                    props: at.extend({}, t),
                    opts: at.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Nn || j(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = at.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? c.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; r > n; n++) c.tweens[n].run(1);
                        return t ? o.resolveWith(e, [c, t]) : o.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (H(u, c.opts.specialEasing); s > a; a++)
                if (r = jn[a].call(c, e, u, c.opts)) return r;
            return at.map(u, I, c), at.isFunction(c.opts.start) && c.opts.start.call(e, c), at.fx.timer(at.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function H(e, t) {
            var n, r, i, a, s;
            for (n in e)
                if (r = at.camelCase(n), i = t[r], a = e[n], at.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), s = at.cssHooks[r], s && "expand" in s) {
                    a = s.expand(a), delete e[r];
                    for (n in a) n in e || (e[n] = a[n], t[n] = i)
                } else t[r] = i
        }

        function M(e, n, r) {
            var i, a, s, o, l, c, u = this,
                p = {},
                d = e.style,
                f = e.nodeType && y(e),
                h = gt.get(e, "fxshow");
            r.queue || (l = at._queueHooks(e, "fx"), null == l.unqueued && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
                l.unqueued || c()
            }), l.unqueued++, u.always(function() {
                u.always(function() {
                    l.unqueued--, at.queue(e, "fx").length || l.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in n || "width" in n) && (r.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === at.css(e, "display") && "none" === at.css(e, "float") && (d.display = "inline-block")), r.overflow && (d.overflow = "hidden", u.always(function() {
                d.overflow = r.overflow[0], d.overflowX = r.overflow[1], d.overflowY = r.overflow[2]
            }));
            for (i in n)
                if (a = n[i], Rn.exec(a)) {
                    if (delete n[i], s = s || "toggle" === a, a === (f ? "hide" : "show")) {
                        if ("show" !== a || !h || h[i] === t) continue;
                        f = !0
                    }
                    p[i] = h && h[i] || at.style(e, i)
                }
            if (!at.isEmptyObject(p)) {
                h ? "hidden" in h && (f = h.hidden) : h = gt.access(e, "fxshow", {}), s && (h.hidden = !f), f ? at(e).show() : u.done(function() {
                    at(e).hide()
                }), u.done(function() {
                    var t;
                    gt.remove(e, "fxshow");
                    for (t in p) at.style(e, t, p[t])
                });
                for (i in p) o = I(f ? h[i] : 0, i, u), i in h || (h[i] = o.start, f && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function O(e, t, n, r, i) {
            return new O.prototype.init(e, t, n, r, i)
        }

        function F(e, t) {
            var n, r = {
                    height: e
                },
                i = 0;
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function _(e) {
            return at.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var q, W, B = typeof t,
            z = e.location,
            U = e.document,
            G = U.documentElement,
            V = e.jQuery,
            X = e.$,
            Y = {},
            K = [],
            Q = "2.0.3",
            Z = K.concat,
            J = K.push,
            et = K.slice,
            tt = K.indexOf,
            nt = Y.toString,
            rt = Y.hasOwnProperty,
            it = Q.trim,
            at = function(e, t) {
                return new at.fn.init(e, t, q)
            },
            st = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ot = /\S+/g,
            lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ct = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ut = /^-ms-/,
            pt = /-([\da-z])/gi,
            dt = function(e, t) {
                return t.toUpperCase()
            },
            ft = function() {
                U.removeEventListener("DOMContentLoaded", ft, !1), e.removeEventListener("load", ft, !1), at.ready()
            };
        at.fn = at.prototype = {
                jquery: Q,
                constructor: at,
                init: function(e, n, r) {
                    var i, a;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : lt.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                        if (i[1]) {
                            if (n = n instanceof at ? n[0] : n, at.merge(this, at.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : U, !0)), ct.test(i[1]) && at.isPlainObject(n))
                                for (i in n) at.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                            return this
                        }
                        return a = U.getElementById(i[2]), a && a.parentNode && (this.length = 1, this[0] = a), this.context = U, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : at.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), at.makeArray(e, this))
                },
                selector: "",
                length: 0,
                toArray: function() {
                    return et.call(this)
                },
                get: function(e) {
                    return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                },
                pushStack: function(e) {
                    var t = at.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e, t) {
                    return at.each(this, e, t)
                },
                ready: function(e) {
                    return at.ready.promise().done(e), this
                },
                slice: function() {
                    return this.pushStack(et.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                map: function(e) {
                    return this.pushStack(at.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: J,
                sort: [].sort,
                splice: [].splice
            }, at.fn.init.prototype = at.fn, at.extend = at.fn.extend = function() {
                var e, n, r, i, a, s, o = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof o && (u = o, o = arguments[1] || {}, l = 2), "object" == typeof o || at.isFunction(o) || (o = {}), c === l && (o = this, --l); c > l; l++)
                    if (null != (e = arguments[l]))
                        for (n in e) r = o[n], i = e[n], o !== i && (u && i && (at.isPlainObject(i) || (a = at.isArray(i))) ? (a ? (a = !1, s = r && at.isArray(r) ? r : []) : s = r && at.isPlainObject(r) ? r : {}, o[n] = at.extend(u, s, i)) : i !== t && (o[n] = i));
                return o
            }, at.extend({
                expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
                noConflict: function(t) {
                    return e.$ === at && (e.$ = X), t && e.jQuery === at && (e.jQuery = V), at
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? at.readyWait++ : at.ready(!0)
                },
                ready: function(e) {
                    (e === !0 ? --at.readyWait : at.isReady) || (at.isReady = !0, e !== !0 && --at.readyWait > 0 || (W.resolveWith(U, [at]), at.fn.trigger && at(U).trigger("ready").off("ready")))
                },
                isFunction: function(e) {
                    return "function" === at.type(e)
                },
                isArray: Array.isArray,
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Y[nt.call(e)] || "object" : typeof e
                },
                isPlainObject: function(e) {
                    if ("object" !== at.type(e) || e.nodeType || at.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !rt.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (t) {
                        return !1
                    }
                    return !0
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                error: function(e) {
                    throw Error(e)
                },
                parseHTML: function(e, t, n) {
                    if (!e || "string" != typeof e) return null;
                    "boolean" == typeof t && (n = t, t = !1), t = t || U;
                    var r = ct.exec(e),
                        i = !n && [];
                    return r ? [t.createElement(r[1])] : (r = at.buildFragment([e], t, i), i && at(i).remove(), at.merge([], r.childNodes))
                },
                parseJSON: JSON.parse,
                parseXML: function(e) {
                    var n, r;
                    if (!e || "string" != typeof e) return null;
                    try {
                        r = new DOMParser, n = r.parseFromString(e, "text/xml")
                    } catch (i) {
                        n = t
                    }
                    return (!n || n.getElementsByTagName("parsererror").length) && at.error("Invalid XML: " + e), n
                },
                noop: function() {},
                globalEval: function(e) {
                    var t, n = eval;
                    e = at.trim(e), e && (1 === e.indexOf("use strict") ? (t = U.createElement("script"), t.text = e, U.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                },
                camelCase: function(e) {
                    return e.replace(ut, "ms-").replace(pt, dt)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, r) {
                    var i, a = 0,
                        s = e.length,
                        o = n(e);
                    if (r) {
                        if (o)
                            for (; s > a && (i = t.apply(e[a], r), i !== !1); a++);
                        else
                            for (a in e)
                                if (i = t.apply(e[a], r), i === !1) break
                    } else if (o)
                        for (; s > a && (i = t.call(e[a], a, e[a]), i !== !1); a++);
                    else
                        for (a in e)
                            if (i = t.call(e[a], a, e[a]), i === !1) break; return e
                },
                trim: function(e) {
                    return null == e ? "" : it.call(e)
                },
                makeArray: function(e, t) {
                    var r = t || [];
                    return null != e && (n(Object(e)) ? at.merge(r, "string" == typeof e ? [e] : e) : J.call(r, e)), r
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : tt.call(t, e, n)
                },
                merge: function(e, n) {
                    var r = n.length,
                        i = e.length,
                        a = 0;
                    if ("number" == typeof r)
                        for (; r > a; a++) e[i++] = n[a];
                    else
                        for (; n[a] !== t;) e[i++] = n[a++];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    var r, i = [],
                        a = 0,
                        s = e.length;
                    for (n = !!n; s > a; a++) r = !!t(e[a], a), n !== r && i.push(e[a]);
                    return i
                },
                map: function(e, t, r) {
                    var i, a = 0,
                        s = e.length,
                        o = n(e),
                        l = [];
                    if (o)
                        for (; s > a; a++) i = t(e[a], a, r), null != i && (l[l.length] = i);
                    else
                        for (a in e) i = t(e[a], a, r), null != i && (l[l.length] = i);
                    return Z.apply([], l)
                },
                guid: 1,
                proxy: function(e, n) {
                    var r, i, a;
                    return "string" == typeof n && (r = e[n], n = e, e = r), at.isFunction(e) ? (i = et.call(arguments, 2), a = function() {
                        return e.apply(n || this, i.concat(et.call(arguments)))
                    }, a.guid = e.guid = e.guid || at.guid++, a) : t
                },
                access: function(e, n, r, i, a, s, o) {
                    var l = 0,
                        c = e.length,
                        u = null == r;
                    if ("object" === at.type(r)) {
                        a = !0;
                        for (l in r) at.access(e, n, l, r[l], !0, s, o)
                    } else if (i !== t && (a = !0, at.isFunction(i) || (o = !0), u && (o ? (n.call(e, i), n = null) : (u = n, n = function(e, t, n) {
                            return u.call(at(e), n)
                        })), n))
                        for (; c > l; l++) n(e[l], r, o ? i : i.call(e[l], l, n(e[l], r)));
                    return a ? e : u ? n.call(e) : c ? n(e[0], r) : s
                },
                now: Date.now,
                swap: function(e, t, n, r) {
                    var i, a, s = {};
                    for (a in t) s[a] = e.style[a], e.style[a] = t[a];
                    i = n.apply(e, r || []);
                    for (a in t) e.style[a] = s[a];
                    return i
                }
            }), at.ready.promise = function(t) {
                return W || (W = at.Deferred(), "complete" === U.readyState ? setTimeout(at.ready) : (U.addEventListener("DOMContentLoaded", ft, !1), e.addEventListener("load", ft, !1))), W.promise(t)
            }, at.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                Y["[object " + t + "]"] = t.toLowerCase()
            }), q = at(U),
            function(e, t) {
                function n(e, t, n, r) {
                    var i, a, s, o, l, c, u, p, h, m;
                    if ((t ? t.ownerDocument || t : _) !== L && P(t), t = t || L, n = n || [], !e || "string" != typeof e) return n;
                    if (1 !== (o = t.nodeType) && 9 !== o) return [];
                    if (I && !r) {
                        if (i = yt.exec(e))
                            if (s = i[1]) {
                                if (9 === o) {
                                    if (a = t.getElementById(s), !a || !a.parentNode) return n;
                                    if (a.id === s) return n.push(a), n
                                } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && O(t, a) && a.id === s) return n.push(a), n
                            } else {
                                if (i[2]) return et.apply(n, t.getElementsByTagName(e)), n;
                                if ((s = i[3]) && k.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(s)), n
                            }
                        if (k.qsa && (!$ || !$.test(e))) {
                            if (p = u = F, h = t, m = 9 === o && e, 1 === o && "object" !== t.nodeName.toLowerCase()) {
                                for (c = d(e), (u = t.getAttribute("id")) ? p = u.replace(Ct, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + f(c[l]);
                                h = ft.test(e) && t.parentNode || t, m = c.join(",")
                            }
                            if (m) try {
                                return et.apply(n, h.querySelectorAll(m)), n
                            } catch (g) {} finally {
                                u || t.removeAttribute("id")
                            }
                        }
                    }
                    return w(e.replace(ut, "$1"), t, n, r)
                }

                function r() {
                    function e(n, r) {
                        return t.push(n += " ") > T.cacheLength && delete e[t.shift()], e[n] = r
                    }
                    var t = [];
                    return e
                }

                function i(e) {
                    return e[F] = !0, e
                }

                function a(e) {
                    var t = L.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function s(e, t) {
                    for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
                }

                function o(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function l(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function c(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function u(e) {
                    return i(function(t) {
                        return t = +t, i(function(n, r) {
                            for (var i, a = e([], n.length, t), s = a.length; s--;) n[i = a[s]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function p() {}

                function d(e, t) {
                    var r, i, a, s, o, l, c, u = z[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (o = e, l = [], c = T.preFilter; o;) {
                        (!r || (i = pt.exec(o))) && (i && (o = o.slice(i[0].length) || o), l.push(a = [])), r = !1, (i = dt.exec(o)) && (r = i.shift(), a.push({
                            value: r,
                            type: i[0].replace(ut, " ")
                        }), o = o.slice(r.length));
                        for (s in T.filter) !(i = bt[s].exec(o)) || c[s] && !(i = c[s](i)) || (r = i.shift(), a.push({
                            value: r,
                            type: s,
                            matches: i
                        }), o = o.slice(r.length));
                        if (!r) break
                    }
                    return t ? o.length : o ? n.error(e) : z(e, l).slice(0)
                }

                function f(e) {
                    for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                    return r
                }

                function h(e, t, n) {
                    var r = t.dir,
                        i = n && "parentNode" === r,
                        a = W++;
                    return t.first ? function(t, n, a) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || i) return e(t, n, a)
                    } : function(t, n, s) {
                        var o, l, c, u = q + " " + a;
                        if (s) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || i)
                                    if (c = t[F] || (t[F] = {}), (l = c[r]) && l[0] === u) {
                                        if ((o = l[1]) === !0 || o === S) return o === !0
                                    } else if (l = c[r] = [u], l[1] = e(t, n, s) || S, l[1] === !0) return !0
                    }
                }

                function m(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function g(e, t, n, r, i) {
                    for (var a, s = [], o = 0, l = e.length, c = null != t; l > o; o++)(a = e[o]) && (!n || n(a, r, i)) && (s.push(a), c && t.push(o));
                    return s
                }

                function b(e, t, n, r, a, s) {
                    return r && !r[F] && (r = b(r)), a && !a[F] && (a = b(a, s)), i(function(i, s, o, l) {
                        var c, u, p, d = [],
                            f = [],
                            h = s.length,
                            m = i || x(t || "*", o.nodeType ? [o] : o, []),
                            b = !e || !i && t ? m : g(m, d, e, o, l),
                            v = n ? a || (i ? e : h || r) ? [] : s : b;
                        if (n && n(b, v, o, l), r)
                            for (c = g(v, f), r(c, [], o, l), u = c.length; u--;)(p = c[u]) && (v[f[u]] = !(b[f[u]] = p));
                        if (i) {
                            if (a || e) {
                                if (a) {
                                    for (c = [], u = v.length; u--;)(p = v[u]) && c.push(b[u] = p);
                                    a(null, v = [], c, l)
                                }
                                for (u = v.length; u--;)(p = v[u]) && (c = a ? nt.call(i, p) : d[u]) > -1 && (i[c] = !(s[c] = p))
                            }
                        } else v = g(v === s ? v.splice(h, v.length) : v), a ? a(null, s, v, l) : et.apply(s, v)
                    })
                }

                function v(e) {
                    for (var t, n, r, i = e.length, a = T.relative[e[0].type], s = a || T.relative[" "], o = a ? 1 : 0, l = h(function(e) {
                            return e === t
                        }, s, !0), c = h(function(e) {
                            return nt.call(t, e) > -1
                        }, s, !0), u = [function(e, n, r) {
                            return !a && (r || n !== A) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                        }]; i > o; o++)
                        if (n = T.relative[e[o].type]) u = [h(m(u), n)];
                        else {
                            if (n = T.filter[e[o].type].apply(null, e[o].matches), n[F]) {
                                for (r = ++o; i > r && !T.relative[e[r].type]; r++);
                                return b(o > 1 && m(u), o > 1 && f(e.slice(0, o - 1).concat({
                                    value: " " === e[o - 2].type ? "*" : ""
                                })).replace(ut, "$1"), n, r > o && v(e.slice(o, r)), i > r && v(e = e.slice(r)), i > r && f(e))
                            }
                            u.push(n)
                        }
                    return m(u)
                }

                function y(e, t) {
                    var r = 0,
                        a = t.length > 0,
                        s = e.length > 0,
                        o = function(i, o, l, c, u) {
                            var p, d, f, h = [],
                                m = 0,
                                b = "0",
                                v = i && [],
                                y = null != u,
                                x = A,
                                w = i || s && T.find.TAG("*", u && o.parentNode || o),
                                C = q += null == x ? 1 : Math.random() || .1;
                            for (y && (A = o !== L && o, S = r); null != (p = w[b]); b++) {
                                if (s && p) {
                                    for (d = 0; f = e[d++];)
                                        if (f(p, o, l)) {
                                            c.push(p);
                                            break
                                        }
                                    y && (q = C, S = ++r)
                                }
                                a && ((p = !f && p) && m--, i && v.push(p))
                            }
                            if (m += b, a && b !== m) {
                                for (d = 0; f = t[d++];) f(v, h, o, l);
                                if (i) {
                                    if (m > 0)
                                        for (; b--;) v[b] || h[b] || (h[b] = Z.call(c));
                                    h = g(h)
                                }
                                et.apply(c, h), y && !i && h.length > 0 && m + t.length > 1 && n.uniqueSort(c)
                            }
                            return y && (q = C, A = x), v
                        };
                    return a ? i(o) : o
                }

                function x(e, t, r) {
                    for (var i = 0, a = t.length; a > i; i++) n(e, t[i], r);
                    return r
                }

                function w(e, t, n, r) {
                    var i, a, s, o, l, c = d(e);
                    if (!r && 1 === c.length) {
                        if (a = c[0] = c[0].slice(0), a.length > 2 && "ID" === (s = a[0]).type && k.getById && 9 === t.nodeType && I && T.relative[a[1].type]) {
                            if (t = (T.find.ID(s.matches[0].replace(kt, St), t) || [])[0], !t) return n;
                            e = e.slice(a.shift().value.length)
                        }
                        for (i = bt.needsContext.test(e) ? 0 : a.length; i-- && (s = a[i], !T.relative[o = s.type]);)
                            if ((l = T.find[o]) && (r = l(s.matches[0].replace(kt, St), ft.test(a[0].type) && t.parentNode || t))) {
                                if (a.splice(i, 1), e = r.length && f(a), !e) return et.apply(n, r), n;
                                break
                            }
                    }
                    return N(e, c)(r, t, !I, n, ft.test(e)), n
                }
                var C, k, S, T, E, D, N, A, R, P, L, j, I, $, H, M, O, F = "sizzle" + -new Date,
                    _ = e.document,
                    q = 0,
                    W = 0,
                    B = r(),
                    z = r(),
                    U = r(),
                    G = !1,
                    V = function(e, t) {
                        return e === t ? (G = !0, 0) : 0
                    },
                    X = typeof t,
                    Y = 1 << 31,
                    K = {}.hasOwnProperty,
                    Q = [],
                    Z = Q.pop,
                    J = Q.push,
                    et = Q.push,
                    tt = Q.slice,
                    nt = Q.indexOf || function(e) {
                        for (var t = 0, n = this.length; n > t; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    rt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    it = "[\\x20\\t\\r\\n\\f]",
                    st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ot = st.replace("w", "w#"),
                    lt = "\\[" + it + "*(" + st + ")" + it + "*(?:([*^$|!~]?=)" + it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ot + ")|)|)" + it + "*\\]",
                    ct = ":(" + st + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + lt.replace(3, 8) + ")*)|.*)\\)|)",
                    ut = RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                    pt = RegExp("^" + it + "*," + it + "*"),
                    dt = RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                    ft = RegExp(it + "*[+~]"),
                    ht = RegExp("=" + it + "*([^\\]'\"]*)" + it + "*\\]", "g"),
                    mt = RegExp(ct),
                    gt = RegExp("^" + ot + "$"),
                    bt = {
                        ID: RegExp("^#(" + st + ")"),
                        CLASS: RegExp("^\\.(" + st + ")"),
                        TAG: RegExp("^(" + st.replace("w", "w*") + ")"),
                        ATTR: RegExp("^" + lt),
                        PSEUDO: RegExp("^" + ct),
                        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                        bool: RegExp("^(?:" + rt + ")$", "i"),
                        needsContext: RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                    },
                    vt = /^[^{]+\{\s*\[native \w/,
                    yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    xt = /^(?:input|select|textarea|button)$/i,
                    wt = /^h\d$/i,
                    Ct = /'|\\/g,
                    kt = RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                    St = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                    };
                try {
                    et.apply(Q = tt.call(_.childNodes), _.childNodes), Q[_.childNodes.length].nodeType
                } catch (Tt) {
                    et = {
                        apply: Q.length ? function(e, t) {
                            J.apply(e, tt.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }
                D = n.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, k = n.support = {}, P = n.setDocument = function(e) {
                    var n = e ? e.ownerDocument || e : _,
                        r = n.defaultView;
                    return n !== L && 9 === n.nodeType && n.documentElement ? (L = n, j = n.documentElement, I = !D(n), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function() {
                        P()
                    }), k.attributes = a(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), k.getElementsByTagName = a(function(e) {
                        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                    }), k.getElementsByClassName = a(function(e) {
                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                    }), k.getById = a(function(e) {
                        return j.appendChild(e).id = F, !n.getElementsByName || !n.getElementsByName(F).length
                    }), k.getById ? (T.find.ID = function(e, t) {
                        if (typeof t.getElementById !== X && I) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, T.filter.ID = function(e) {
                        var t = e.replace(kt, St);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete T.find.ID, T.filter.ID = function(e) {
                        var t = e.replace(kt, St);
                        return function(e) {
                            var n = typeof e.getAttributeNode !== X && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), T.find.TAG = k.getElementsByTagName ? function(e, n) {
                        return typeof n.getElementsByTagName !== X ? n.getElementsByTagName(e) : t
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            a = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = a[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return a
                    }, T.find.CLASS = k.getElementsByClassName && function(e, n) {
                        return typeof n.getElementsByClassName !== X && I ? n.getElementsByClassName(e) : t
                    }, H = [], $ = [], (k.qsa = vt.test(n.querySelectorAll)) && (a(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || $.push("\\[" + it + "*(?:value|" + rt + ")"), e.querySelectorAll(":checked").length || $.push(":checked")
                    }), a(function(e) {
                        var t = n.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && $.push("[*^$]=" + it + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || $.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), $.push(",.*:")
                    })), (k.matchesSelector = vt.test(M = j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && a(function(e) {
                        k.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), H.push("!=", ct)
                    }), $ = $.length && RegExp($.join("|")), H = H.length && RegExp(H.join("|")), O = vt.test(j.contains) || j.compareDocumentPosition ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, V = j.compareDocumentPosition ? function(e, t) {
                        if (e === t) return G = !0, 0;
                        var r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                        return r ? 1 & r || !k.sortDetached && t.compareDocumentPosition(e) === r ? e === n || O(_, e) ? -1 : t === n || O(_, t) ? 1 : R ? nt.call(R, e) - nt.call(R, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                    } : function(e, t) {
                        var r, i = 0,
                            a = e.parentNode,
                            s = t.parentNode,
                            l = [e],
                            c = [t];
                        if (e === t) return G = !0, 0;
                        if (!a || !s) return e === n ? -1 : t === n ? 1 : a ? -1 : s ? 1 : R ? nt.call(R, e) - nt.call(R, t) : 0;
                        if (a === s) return o(e, t);
                        for (r = e; r = r.parentNode;) l.unshift(r);
                        for (r = t; r = r.parentNode;) c.unshift(r);
                        for (; l[i] === c[i];) i++;
                        return i ? o(l[i], c[i]) : l[i] === _ ? -1 : c[i] === _ ? 1 : 0
                    }, n) : L
                }, n.matches = function(e, t) {
                    return n(e, null, null, t)
                }, n.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== L && P(e), t = t.replace(ht, "='$1']"), !(!k.matchesSelector || !I || H && H.test(t) || $ && $.test(t))) try {
                        var r = M.call(e, t);
                        if (r || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (i) {}
                    return n(t, L, null, [e]).length > 0
                }, n.contains = function(e, t) {
                    return (e.ownerDocument || e) !== L && P(e), O(e, t)
                }, n.attr = function(e, n) {
                    (e.ownerDocument || e) !== L && P(e);
                    var r = T.attrHandle[n.toLowerCase()],
                        i = r && K.call(T.attrHandle, n.toLowerCase()) ? r(e, n, !I) : t;
                    return i === t ? k.attributes || !I ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
                }, n.error = function(e) {
                    throw Error("Syntax error, unrecognized expression: " + e)
                }, n.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        i = 0;
                    if (G = !k.detectDuplicates, R = !k.sortStable && e.slice(0), e.sort(V), G) {
                        for (; t = e[i++];) t === e[i] && (r = n.push(i));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return e
                }, E = n.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        for (; t = e[r]; r++) n += E(t);
                    return n
                }, T = n.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: bt,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(kt, St), e[3] = (e[4] || e[5] || "").replace(kt, St), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var n, r = !e[5] && e[2];
                            return bt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && mt.test(r) && (n = d(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(kt, St).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = B[e + " "];
                            return t || (t = RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && B(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== X && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, r) {
                            return function(i) {
                                var a = n.attr(i, e);
                                return null == a ? "!=" === t : t ? (a += "", "=" === t ? a === r : "!=" === t ? a !== r : "^=" === t ? r && 0 === a.indexOf(r) : "*=" === t ? r && a.indexOf(r) > -1 : "$=" === t ? r && a.slice(-r.length) === r : "~=" === t ? (" " + a + " ").indexOf(r) > -1 : "|=" === t ? a === r || a.slice(0, r.length + 1) === r + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var a = "nth" !== e.slice(0, 3),
                                s = "last" !== e.slice(-4),
                                o = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, l) {
                                var c, u, p, d, f, h, m = a !== s ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    b = o && t.nodeName.toLowerCase(),
                                    v = !l && !o;
                                if (g) {
                                    if (a) {
                                        for (; m;) {
                                            for (p = t; p = p[m];)
                                                if (o ? p.nodeName.toLowerCase() === b : 1 === p.nodeType) return !1;
                                            h = m = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [s ? g.firstChild : g.lastChild], s && v) {
                                        for (u = g[F] || (g[F] = {}), c = u[e] || [], f = c[0] === q && c[1], d = c[0] === q && c[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (d = f = 0) || h.pop();)
                                            if (1 === p.nodeType && ++d && p === t) {
                                                u[e] = [q, f, d];
                                                break
                                            }
                                    } else if (v && (c = (t[F] || (t[F] = {}))[e]) && c[0] === q) d = c[1];
                                    else
                                        for (;
                                            (p = ++f && p && p[m] || (d = f = 0) || h.pop()) && ((o ? p.nodeName.toLowerCase() !== b : 1 !== p.nodeType) || !++d || (v && ((p[F] || (p[F] = {}))[e] = [q, d]), p !== t)););
                                    return d -= i, d === r || 0 === d % r && d / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var r, a = T.pseudos[e] || T.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                            return a[F] ? a(t) : a.length > 1 ? (r = [e, e, "", t], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                                for (var r, i = a(e, t), s = i.length; s--;) r = nt.call(e, i[s]), e[r] = !(n[r] = i[s])
                            }) : function(e) {
                                return a(e, 0, r)
                            }) : a
                        }
                    },
                    pseudos: {
                        not: i(function(e) {
                            var t = [],
                                n = [],
                                r = N(e.replace(ut, "$1"));
                            return r[F] ? i(function(e, t, n, i) {
                                for (var a, s = r(e, null, i, []), o = e.length; o--;)(a = s[o]) && (e[o] = !(t[o] = a))
                            }) : function(e, i, a) {
                                return t[0] = e, r(t, null, a, n), !n.pop()
                            }
                        }),
                        has: i(function(e) {
                            return function(t) {
                                return n(e, t).length > 0
                            }
                        }),
                        contains: i(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                            }
                        }),
                        lang: i(function(e) {
                            return gt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(kt, St).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === j
                        },
                        focus: function(e) {
                            return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !T.pseudos.empty(e)
                        },
                        header: function(e) {
                            return wt.test(e.nodeName)
                        },
                        input: function(e) {
                            return xt.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                        },
                        first: u(function() {
                            return [0]
                        }),
                        last: u(function(e, t) {
                            return [t - 1]
                        }),
                        eq: u(function(e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: u(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: u(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: u(function(e, t, n) {
                            for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: u(function(e, t, n) {
                            for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
                            return e
                        })
                    }
                }, T.pseudos.nth = T.pseudos.eq;
                for (C in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) T.pseudos[C] = l(C);
                for (C in {
                        submit: !0,
                        reset: !0
                    }) T.pseudos[C] = c(C);
                p.prototype = T.filters = T.pseudos, T.setFilters = new p, N = n.compile = function(e, t) {
                    var n, r = [],
                        i = [],
                        a = U[e + " "];
                    if (!a) {
                        for (t || (t = d(e)), n = t.length; n--;) a = v(t[n]), a[F] ? r.push(a) : i.push(a);
                        a = U(e, y(i, r))
                    }
                    return a
                }, k.sortStable = F.split("").sort(V).join("") === F, k.detectDuplicates = G, P(), k.sortDetached = a(function(e) {
                    return 1 & e.compareDocumentPosition(L.createElement("div"))
                }), a(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || s("type|href|height|width", function(e, n, r) {
                    return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
                }), k.attributes && a(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || s("value", function(e, n, r) {
                    return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
                }), a(function(e) {
                    return null == e.getAttribute("disabled")
                }) || s(rt, function(e, n, r) {
                    var i;
                    return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
                }), at.find = n, at.expr = n.selectors, at.expr[":"] = at.expr.pseudos, at.unique = n.uniqueSort, at.text = n.getText, at.isXMLDoc = n.isXML, at.contains = n.contains
            }(e);
        var ht = {};
        at.Callbacks = function(e) {
            e = "string" == typeof e ? ht[e] || r(e) : at.extend({}, e);
            var n, i, a, s, o, l, c = [],
                u = !e.once && [],
                p = function(t) {
                    for (n = e.memory && t, i = !0, l = s || 0, s = 0, o = c.length, a = !0; c && o > l; l++)
                        if (c[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    a = !1, c && (u ? u.length && p(u.shift()) : n ? c = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (c) {
                            var t = c.length;
                            ! function r(t) {
                                at.each(t, function(t, n) {
                                    var i = at.type(n);
                                    "function" === i ? e.unique && d.has(n) || c.push(n) : n && n.length && "string" !== i && r(n)
                                })
                            }(arguments), a ? o = c.length : n && (s = t, p(n))
                        }
                        return this
                    },
                    remove: function() {
                        return c && at.each(arguments, function(e, t) {
                            for (var n;
                                (n = at.inArray(t, c, n)) > -1;) c.splice(n, 1), a && (o >= n && o--, l >= n && l--)
                        }), this
                    },
                    has: function(e) {
                        return e ? at.inArray(e, c) > -1 : !(!c || !c.length)
                    },
                    empty: function() {
                        return c = [], o = 0, this
                    },
                    disable: function() {
                        return c = u = n = t, this
                    },
                    disabled: function() {
                        return !c
                    },
                    lock: function() {
                        return u = t, n || d.disable(), this
                    },
                    locked: function() {
                        return !u
                    },
                    fireWith: function(e, t) {
                        return !c || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], a ? u.push(t) : p(t)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return d
        }, at.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", at.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", at.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", at.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return at.Deferred(function(n) {
                                at.each(t, function(t, a) {
                                    var s = a[0],
                                        o = at.isFunction(e[t]) && e[t];
                                    i[a[1]](function() {
                                        var e = o && o.apply(this, arguments);
                                        e && at.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? at.extend(e, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then, at.each(t, function(e, a) {
                    var s = a[2],
                        o = a[3];
                    r[a[1]] = s.add, o && s.add(function() {
                        n = o
                    }, t[1 ^ e][2].disable, t[2][2].lock), i[a[0]] = function() {
                        return i[a[0] + "With"](this === i ? r : this, arguments), this
                    }, i[a[0] + "With"] = s.fireWith
                }), r.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t, n, r, i = 0,
                    a = et.call(arguments),
                    s = a.length,
                    o = 1 !== s || e && at.isFunction(e.promise) ? s : 0,
                    l = 1 === o ? e : at.Deferred(),
                    c = function(e, n, r) {
                        return function(i) {
                            n[e] = this, r[e] = arguments.length > 1 ? et.call(arguments) : i, r === t ? l.notifyWith(n, r) : --o || l.resolveWith(n, r)
                        }
                    };
                if (s > 1)
                    for (t = Array(s), n = Array(s), r = Array(s); s > i; i++) a[i] && at.isFunction(a[i].promise) ? a[i].promise().done(c(i, r, a)).fail(l.reject).progress(c(i, n, t)) : --o;
                return o || l.resolveWith(r, a), l.promise()
            }
        }), at.support = function(t) {
            var n = U.createElement("input"),
                r = U.createDocumentFragment(),
                i = U.createElement("div"),
                a = U.createElement("select"),
                s = a.appendChild(U.createElement("option"));
            return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = s.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, a.disabled = !0, t.optDisabled = !s.disabled, n = U.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in e, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === i.style.backgroundClip, at(function() {
                var n, r, a = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                    s = U.getElementsByTagName("body")[0];
                s && (n = U.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(i), i.innerHTML = "", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", at.swap(s, null != s.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    t.boxSizing = 4 === i.offsetWidth
                }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
                    width: "4px"
                }).width, r = i.appendChild(U.createElement("div")), r.style.cssText = i.style.cssText = a, r.style.marginRight = r.style.width = "0", i.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), s.removeChild(n))
            }), t) : t
        }({});
        var mt, gt, bt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            vt = /([A-Z])/g;
        i.uid = 1, i.accepts = function(e) {
            return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0
        }, i.prototype = {
            key: function(e) {
                if (!i.accepts(e)) return 0;
                var t = {},
                    n = e[this.expando];
                if (!n) {
                    n = i.uid++;
                    try {
                        t[this.expando] = {
                            value: n
                        }, Object.defineProperties(e, t)
                    } catch (r) {
                        t[this.expando] = n, at.extend(e, t)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            },
            set: function(e, t, n) {
                var r, i = this.key(e),
                    a = this.cache[i];
                if ("string" == typeof t) a[t] = n;
                else if (at.isEmptyObject(a)) at.extend(this.cache[i], t);
                else
                    for (r in t) a[r] = t[r];
                return a
            },
            get: function(e, n) {
                var r = this.cache[this.key(e)];
                return n === t ? r : r[n]
            },
            access: function(e, n, r) {
                var i;
                return n === t || n && "string" == typeof n && r === t ? (i = this.get(e, n), i !== t ? i : this.get(e, at.camelCase(n))) : (this.set(e, n, r), r !== t ? r : n)
            },
            remove: function(e, n) {
                var r, i, a, s = this.key(e),
                    o = this.cache[s];
                if (n === t) this.cache[s] = {};
                else {
                    at.isArray(n) ? i = n.concat(n.map(at.camelCase)) : (a = at.camelCase(n), n in o ? i = [n, a] : (i = a, i = i in o ? [i] : i.match(ot) || [])), r = i.length;
                    for (; r--;) delete o[i[r]]
                }
            },
            hasData: function(e) {
                return !at.isEmptyObject(this.cache[e[this.expando]] || {})
            },
            discard: function(e) {
                e[this.expando] && delete this.cache[e[this.expando]]
            }
        }, mt = new i, gt = new i, at.extend({
            acceptData: i.accepts,
            hasData: function(e) {
                return mt.hasData(e) || gt.hasData(e)
            },
            data: function(e, t, n) {
                return mt.access(e, t, n)
            },
            removeData: function(e, t) {
                mt.remove(e, t)
            },
            _data: function(e, t, n) {
                return gt.access(e, t, n)
            },
            _removeData: function(e, t) {
                gt.remove(e, t)
            }
        }), at.fn.extend({
            data: function(e, n) {
                var r, i, s = this[0],
                    o = 0,
                    l = null;
                if (e === t) {
                    if (this.length && (l = mt.get(s), 1 === s.nodeType && !gt.get(s, "hasDataAttrs"))) {
                        for (r = s.attributes; r.length > o; o++) i = r[o].name, 0 === i.indexOf("data-") && (i = at.camelCase(i.slice(5)), a(s, i, l[i]));
                        gt.set(s, "hasDataAttrs", !0)
                    }
                    return l
                }
                return "object" == typeof e ? this.each(function() {
                    mt.set(this, e)
                }) : at.access(this, function(n) {
                    var r, i = at.camelCase(e);
                    if (s && n === t) {
                        if (r = mt.get(s, e), r !== t) return r;
                        if (r = mt.get(s, i), r !== t) return r;
                        if (r = a(s, i, t), r !== t) return r
                    } else this.each(function() {
                        var r = mt.get(this, i);
                        mt.set(this, i, n), -1 !== e.indexOf("-") && r !== t && mt.set(this, e, n)
                    })
                }, null, n, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    mt.remove(this, e)
                })
            }
        }), at.extend({
            queue: function(e, n, r) {
                var i;
                return e ? (n = (n || "fx") + "queue", i = gt.get(e, n), r && (!i || at.isArray(r) ? i = gt.access(e, n, at.makeArray(r)) : i.push(r)), i || []) : t
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = at.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    a = at._queueHooks(e, t),
                    s = function() {
                        at.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, s, a)), !r && a && a.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return gt.get(e, n) || gt.access(e, n, {
                    empty: at.Callbacks("once memory").add(function() {
                        gt.remove(e, [t + "queue", n])
                    })
                })
            }
        }), at.fn.extend({
            queue: function(e, n) {
                var r = 2;
                return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? at.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = at.queue(this, e, n);
                    at._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && at.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    at.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = at.fx ? at.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var r, i = 1,
                    a = at.Deferred(),
                    s = this,
                    o = this.length,
                    l = function() {
                        --i || a.resolveWith(s, [s])
                    };
                for ("string" != typeof e && (n = e, e = t), e = e || "fx"; o--;) r = gt.get(s[o], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
                return l(), a.promise(n)
            }
        });
        var yt, xt, wt = /[\t\r\n\f]/g,
            Ct = /\r/g,
            kt = /^(?:input|select|textarea|button)$/i;
        at.fn.extend({
            attr: function(e, t) {
                return at.access(this, at.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    at.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return at.access(this, at.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[at.propFix[e] || e]
                })
            },
            addClass: function(e) {
                var t, n, r, i, a, s = 0,
                    o = this.length,
                    l = "string" == typeof e && e;
                if (at.isFunction(e)) return this.each(function(t) {
                    at(this).addClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(ot) || []; o > s; s++)
                        if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : " ")) {
                            for (a = 0; i = t[a++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                            n.className = at.trim(r)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, a, s = 0,
                    o = this.length,
                    l = 0 === arguments.length || "string" == typeof e && e;
                if (at.isFunction(e)) return this.each(function(t) {
                    at(this).removeClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(ot) || []; o > s; s++)
                        if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : "")) {
                            for (a = 0; i = t[a++];)
                                for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                            n.className = e ? at.trim(r) : ""
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : at.isFunction(e) ? this.each(function(n) {
                    at(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var t, r = 0, i = at(this), a = e.match(ot) || []; t = a[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else(n === B || "boolean" === n) && (this.className && gt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : gt.get(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(wt, " ").indexOf(t) >= 0) return !0;
                return !1
            },
            val: function(e) {
                var n, r, i, a = this[0];
                return arguments.length ? (i = at.isFunction(e), this.each(function(r) {
                    var a;
                    1 === this.nodeType && (a = i ? e.call(this, r, at(this).val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : at.isArray(a) && (a = at.map(a, function(e) {
                        return null == e ? "" : e + ""
                    })), n = at.valHooks[this.type] || at.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, a, "value") !== t || (this.value = a))
                })) : a ? (n = at.valHooks[a.type] || at.valHooks[a.nodeName.toLowerCase()], n && "get" in n && (r = n.get(a, "value")) !== t ? r : (r = a.value, "string" == typeof r ? r.replace(Ct, "") : null == r ? "" : r)) : void 0
            }
        }), at.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, a = "select-one" === e.type || 0 > i, s = a ? null : [], o = a ? i + 1 : r.length, l = 0 > i ? o : a ? i : 0; o > l; l++)
                            if (n = r[l], !(!n.selected && l !== i || (at.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && at.nodeName(n.parentNode, "optgroup"))) {
                                if (t = at(n).val(), a) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, a = at.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = at.inArray(at(r).val(), a) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), a
                    }
                }
            },
            attr: function(e, n, r) {
                var i, a, s = e.nodeType;
                return e && 3 !== s && 8 !== s && 2 !== s ? typeof e.getAttribute === B ? at.prop(e, n, r) : (1 === s && at.isXMLDoc(e) || (n = n.toLowerCase(), i = at.attrHooks[n] || (at.expr.match.bool.test(n) ? xt : yt)), r === t ? i && "get" in i && null !== (a = i.get(e, n)) ? a : (a = at.find.attr(e, n), null == a ? t : a) : null !== r ? i && "set" in i && (a = i.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (at.removeAttr(e, n), t)) : void 0
            },
            removeAttr: function(e, t) {
                var n, r, i = 0,
                    a = t && t.match(ot);
                if (a && 1 === e.nodeType)
                    for (; n = a[i++];) r = at.propFix[n] || n, at.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!at.support.radioValue && "radio" === t && at.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, n, r) {
                var i, a, s, o = e.nodeType;
                return e && 3 !== o && 8 !== o && 2 !== o ? (s = 1 !== o || !at.isXMLDoc(e), s && (n = at.propFix[n] || n, a = at.propHooks[n]), r !== t ? a && "set" in a && (i = a.set(e, r, n)) !== t ? i : e[n] = r : a && "get" in a && null !== (i = a.get(e, n)) ? i : e[n]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        return e.hasAttribute("tabindex") || kt.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
                }
            }
        }), xt = {
            set: function(e, t, n) {
                return t === !1 ? at.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, at.each(at.expr.match.bool.source.match(/\w+/g), function(e, n) {
            var r = at.expr.attrHandle[n] || at.find.attr;
            at.expr.attrHandle[n] = function(e, n, i) {
                var a = at.expr.attrHandle[n],
                    s = i ? t : (at.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
                return at.expr.attrHandle[n] = a, s
            }
        }), at.support.optSelected || (at.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), at.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            at.propFix[this.toLowerCase()] = this
        }), at.each(["radio", "checkbox"], function() {
            at.valHooks[this] = {
                set: function(e, n) {
                    return at.isArray(n) ? e.checked = at.inArray(at(e).val(), n) >= 0 : t
                }
            }, at.support.checkOn || (at.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var St = /^key/,
            Tt = /^(?:mouse|contextmenu)|click/,
            Et = /^(?:focusinfocus|focusoutblur)$/,
            Dt = /^([^.]*)(?:\.(.+)|)$/;
        at.event = {
            global: {},
            add: function(e, n, r, i, a) {
                var s, o, l, c, u, p, d, f, h, m, g, b = gt.get(e);
                if (b) {
                    for (r.handler && (s = r, r = s.handler, a = s.selector), r.guid || (r.guid = at.guid++), (c = b.events) || (c = b.events = {}), (o = b.handle) || (o = b.handle = function(e) {
                            return typeof at === B || e && at.event.triggered === e.type ? t : at.event.dispatch.apply(o.elem, arguments)
                        }, o.elem = e), n = (n || "").match(ot) || [""], u = n.length; u--;) l = Dt.exec(n[u]) || [], h = g = l[1], m = (l[2] || "").split(".").sort(), h && (d = at.event.special[h] || {}, h = (a ? d.delegateType : d.bindType) || h, d = at.event.special[h] || {}, p = at.extend({
                        type: h,
                        origType: g,
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: a,
                        needsContext: a && at.expr.match.needsContext.test(a),
                        namespace: m.join(".")
                    }, s), (f = c[h]) || (f = c[h] = [], f.delegateCount = 0, d.setup && d.setup.call(e, i, m, o) !== !1 || e.addEventListener && e.addEventListener(h, o, !1)), d.add && (d.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), a ? f.splice(f.delegateCount++, 0, p) : f.push(p), at.event.global[h] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, r, i) {
                var a, s, o, l, c, u, p, d, f, h, m, g = gt.hasData(e) && gt.get(e);
                if (g && (l = g.events)) {
                    for (t = (t || "").match(ot) || [""], c = t.length; c--;)
                        if (o = Dt.exec(t[c]) || [], f = m = o[1], h = (o[2] || "").split(".").sort(), f) {
                            for (p = at.event.special[f] || {}, f = (r ? p.delegateType : p.bindType) || f, d = l[f] || [], o = o[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = d.length; a--;) u = d[a], !i && m !== u.origType || n && n.guid !== u.guid || o && !o.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (d.splice(a, 1), u.selector && d.delegateCount--, p.remove && p.remove.call(e, u));
                            s && !d.length && (p.teardown && p.teardown.call(e, h, g.handle) !== !1 || at.removeEvent(e, f, g.handle), delete l[f])
                        } else
                            for (f in l) at.event.remove(e, f + t[c], n, r, !0);
                    at.isEmptyObject(l) && (delete g.handle, gt.remove(e, "events"))
                }
            },
            trigger: function(n, r, i, a) {
                var s, o, l, c, u, p, d, f = [i || U],
                    h = rt.call(n, "type") ? n.type : n,
                    m = rt.call(n, "namespace") ? n.namespace.split(".") : [];
                if (o = l = i = i || U, 3 !== i.nodeType && 8 !== i.nodeType && !Et.test(h + at.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), u = 0 > h.indexOf(":") && "on" + h, n = n[at.expando] ? n : new at.Event(h, "object" == typeof n && n), n.isTrigger = a ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : at.makeArray(r, [n]), d = at.event.special[h] || {}, a || !d.trigger || d.trigger.apply(i, r) !== !1)) {
                    if (!a && !d.noBubble && !at.isWindow(i)) {
                        for (c = d.delegateType || h, Et.test(c + h) || (o = o.parentNode); o; o = o.parentNode) f.push(o), l = o;
                        l === (i.ownerDocument || U) && f.push(l.defaultView || l.parentWindow || e)
                    }
                    for (s = 0;
                        (o = f[s++]) && !n.isPropagationStopped();) n.type = s > 1 ? c : d.bindType || h, p = (gt.get(o, "events") || {})[n.type] && gt.get(o, "handle"), p && p.apply(o, r), p = u && o[u], p && at.acceptData(o) && p.apply && p.apply(o, r) === !1 && n.preventDefault();
                    return n.type = h, a || n.isDefaultPrevented() || d._default && d._default.apply(f.pop(), r) !== !1 || !at.acceptData(i) || u && at.isFunction(i[h]) && !at.isWindow(i) && (l = i[u], l && (i[u] = null), at.event.triggered = h, i[h](), at.event.triggered = t, l && (i[u] = l)), n.result
                }
            },
            dispatch: function(e) {
                e = at.event.fix(e);
                var n, r, i, a, s, o = [],
                    l = et.call(arguments),
                    c = (gt.get(this, "events") || {})[e.type] || [],
                    u = at.event.special[e.type] || {};
                if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (o = at.event.handlers.call(this, e, c), n = 0;
                        (a = o[n++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = a.elem, r = 0;
                            (s = a.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(s.namespace)) && (e.handleObj = s, e.data = s.data, i = ((at.event.special[s.origType] || {}).handle || s.handler).apply(a.elem, l), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, n) {
                var r, i, a, s, o = [],
                    l = n.delegateCount,
                    c = e.target;
                if (l && c.nodeType && (!e.button || "click" !== e.type))
                    for (; c !== this; c = c.parentNode || this)
                        if (c.disabled !== !0 || "click" !== e.type) {
                            for (i = [], r = 0; l > r; r++) s = n[r], a = s.selector + " ", i[a] === t && (i[a] = s.needsContext ? at(a, this).index(c) >= 0 : at.find(a, this, null, [c]).length), i[a] && i.push(s);
                            i.length && o.push({
                                elem: c,
                                handlers: i
                            })
                        }
                return n.length > l && o.push({
                    elem: this,
                    handlers: n.slice(l)
                }), o
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, a, s = n.button;
                    return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || U, i = r.documentElement, a = r.body, e.pageX = n.clientX + (i && i.scrollLeft || a && a.scrollLeft || 0) - (i && i.clientLeft || a && a.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || a && a.scrollTop || 0) - (i && i.clientTop || a && a.clientTop || 0)), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[at.expando]) return e;
                var t, n, r, i = e.type,
                    a = e,
                    s = this.fixHooks[i];
                for (s || (this.fixHooks[i] = s = Tt.test(i) ? this.mouseHooks : St.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new at.Event(a), t = r.length; t--;) n = r[t], e[n] = a[n];
                return e.target || (e.target = U), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, a) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== l() && this.focus ? (this.focus(), !1) : t
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === l() && this.blur ? (this.blur(), !1) : t
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && at.nodeName(this, "input") ? (this.click(), !1) : t
                    },
                    _default: function(e) {
                        return at.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = at.extend(new at.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? at.event.trigger(i, null, t) : at.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, at.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }, at.Event = function(e, n) {
            return this instanceof at.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? s : o) : this.type = e, n && at.extend(this, n), this.timeStamp = e && e.timeStamp || at.now(), this[at.expando] = !0, t) : new at.Event(e, n)
        }, at.Event.prototype = {
            isDefaultPrevented: o,
            isPropagationStopped: o,
            isImmediatePropagationStopped: o,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = s, e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = s, e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = s, this.stopPropagation()
            }
        }, at.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            at.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        a = e.handleObj;
                    return (!i || i !== r && !at.contains(r, i)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), at.support.focusinBubbles || at.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                r = function(e) {
                    at.event.simulate(t, e.target, at.event.fix(e), !0)
                };
            at.event.special[t] = {
                setup: function() {
                    0 === n++ && U.addEventListener(e, r, !0)
                },
                teardown: function() {
                    0 === --n && U.removeEventListener(e, r, !0)
                }
            }
        }), at.fn.extend({
            on: function(e, n, r, i, a) {
                var s, l;
                if ("object" == typeof e) {
                    "string" != typeof n && (r = r || n, n = t);
                    for (l in e) this.on(l, n, r, e[l], a);
                    return this
                }
                if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = o;
                else if (!i) return this;
                return 1 === a && (s = i, i = function(e) {
                    return at().off(e), s.apply(this, arguments)
                }, i.guid = s.guid || (s.guid = at.guid++)), this.each(function() {
                    at.event.add(this, e, i, r, n)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, a;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, at(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (a in e) this.off(a, n, e[a]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = o), this.each(function() {
                    at.event.remove(this, e, r, n)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    at.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, n) {
                var r = this[0];
                return r ? at.event.trigger(e, n, r, !0) : t
            }
        });
        var Nt = /^.[^:#\[\.,]*$/,
            At = /^(?:parents|prev(?:Until|All))/,
            Rt = at.expr.match.needsContext,
            Pt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        at.fn.extend({
            find: function(e) {
                var t, n = [],
                    r = this,
                    i = r.length;
                if ("string" != typeof e) return this.pushStack(at(e).filter(function() {
                    for (t = 0; i > t; t++)
                        if (at.contains(r[t], this)) return !0
                }));
                for (t = 0; i > t; t++) at.find(e, r[t], n);
                return n = this.pushStack(i > 1 ? at.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            has: function(e) {
                var t = at(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; n > e; e++)
                        if (at.contains(this, t[e])) return !0
                })
            },
            not: function(e) {
                return this.pushStack(u(this, e || [], !0))
            },
            filter: function(e) {
                return this.pushStack(u(this, e || [], !1))
            },
            is: function(e) {
                return !!u(this, "string" == typeof e && Rt.test(e) ? at(e) : e || [], !1).length
            },
            closest: function(e, t) {
                for (var n, r = 0, i = this.length, a = [], s = Rt.test(e) || "string" != typeof e ? at(e, t || this.context) : 0; i > r; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && at.find.matchesSelector(n, e))) {
                            n = a.push(n);
                            break
                        }
                return this.pushStack(a.length > 1 ? at.unique(a) : a)
            },
            index: function(e) {
                return e ? "string" == typeof e ? tt.call(at(e), this[0]) : tt.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? at(e, t) : at.makeArray(e && e.nodeType ? [e] : e),
                    r = at.merge(this.get(), n);
                return this.pushStack(at.unique(r))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), at.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return at.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return at.dir(e, "parentNode", n)
            },
            next: function(e) {
                return c(e, "nextSibling")
            },
            prev: function(e) {
                return c(e, "previousSibling")
            },
            nextAll: function(e) {
                return at.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return at.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return at.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return at.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return at.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return at.sibling(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || at.merge([], e.childNodes)
            }
        }, function(e, t) {
            at.fn[e] = function(n, r) {
                var i = at.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = at.filter(r, i)), this.length > 1 && (Pt[e] || at.unique(i), At.test(e) && i.reverse()), this.pushStack(i)
            }
        }), at.extend({
            filter: function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? at.find.matchesSelector(r, e) ? [r] : [] : at.find.matches(e, at.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            },
            dir: function(e, n, r) {
                for (var i = [], a = r !== t;
                    (e = e[n]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (a && at(e).is(r)) break;
                        i.push(e)
                    }
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var Lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            jt = /<([\w:]+)/,
            It = /<|&#?\w+;/,
            $t = /<(?:script|style|link)/i,
            Ht = /^(?:checkbox|radio)$/i,
            Mt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ot = /^$|\/(?:java|ecma)script/i,
            Ft = /^true\/(.*)/,
            _t = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            qt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        qt.optgroup = qt.option, qt.tbody = qt.tfoot = qt.colgroup = qt.caption = qt.thead, qt.th = qt.td, at.fn.extend({
            text: function(e) {
                return at.access(this, function(e) {
                    return e === t ? at.text(this) : this.empty().append((this[0] && this[0].ownerDocument || U).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = p(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = p(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, r = e ? at.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || at.cleanData(g(n)), n.parentNode && (t && at.contains(n.ownerDocument, n) && h(g(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (at.cleanData(g(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return at.clone(this, e, t)
                })
            },
            html: function(e) {
                return at.access(this, function(e) {
                    var n = this[0] || {},
                        r = 0,
                        i = this.length;
                    if (e === t && 1 === n.nodeType) return n.innerHTML;
                    if ("string" == typeof e && !$t.test(e) && !qt[(jt.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Lt, "<$1></$2>");
                        try {
                            for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (at.cleanData(g(n, !1)), n.innerHTML = e);
                            n = 0
                        } catch (a) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = at.map(this, function(e) {
                        return [e.nextSibling, e.parentNode]
                    }),
                    t = 0;
                return this.domManip(arguments, function(n) {
                    var r = e[t++],
                        i = e[t++];
                    i && (r && r.parentNode !== i && (r = this.nextSibling), at(this).remove(), i.insertBefore(n, r))
                }, !0), t ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t, n) {
                e = Z.apply([], e);
                var r, i, a, s, o, l, c = 0,
                    u = this.length,
                    p = this,
                    h = u - 1,
                    m = e[0],
                    b = at.isFunction(m);
                if (b || !(1 >= u || "string" != typeof m || at.support.checkClone) && Mt.test(m)) return this.each(function(r) {
                    var i = p.eq(r);
                    b && (e[0] = m.call(this, r, i.html())), i.domManip(e, t, n)
                });
                if (u && (r = at.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
                    for (a = at.map(g(r, "script"), d), s = a.length; u > c; c++) o = r, c !== h && (o = at.clone(o, !0, !0), s && at.merge(a, g(o, "script"))), t.call(this[c], o, c);
                    if (s)
                        for (l = a[a.length - 1].ownerDocument, at.map(a, f), c = 0; s > c; c++) o = a[c], Ot.test(o.type || "") && !gt.access(o, "globalEval") && at.contains(l, o) && (o.src ? at._evalUrl(o.src) : at.globalEval(o.textContent.replace(_t, "")))
                }
                return this
            }
        }), at.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            at.fn[e] = function(e) {
                for (var n, r = [], i = at(e), a = i.length - 1, s = 0; a >= s; s++) n = s === a ? this : this.clone(!0), at(i[s])[t](n), J.apply(r, n.get());
                return this.pushStack(r)
            }
        }), at.extend({
            clone: function(e, t, n) {
                var r, i, a, s, o = e.cloneNode(!0),
                    l = at.contains(e.ownerDocument, e);
                if (!(at.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || at.isXMLDoc(e)))
                    for (s = g(o), a = g(e), r = 0, i = a.length; i > r; r++) b(a[r], s[r]);
                if (t)
                    if (n)
                        for (a = a || g(e), s = s || g(o), r = 0, i = a.length; i > r; r++) m(a[r], s[r]);
                    else m(e, o);
                return s = g(o, "script"), s.length > 0 && h(s, !l && g(e, "script")), o
            },
            buildFragment: function(e, t, n, r) {
                for (var i, a, s, o, l, c, u = 0, p = e.length, d = t.createDocumentFragment(), f = []; p > u; u++)
                    if (i = e[u], i || 0 === i)
                        if ("object" === at.type(i)) at.merge(f, i.nodeType ? [i] : i);
                        else if (It.test(i)) {
                    for (a = a || d.appendChild(t.createElement("div")), s = (jt.exec(i) || ["", ""])[1].toLowerCase(), o = qt[s] || qt._default, a.innerHTML = o[1] + i.replace(Lt, "<$1></$2>") + o[2], c = o[0]; c--;) a = a.lastChild;
                    at.merge(f, a.childNodes), a = d.firstChild, a.textContent = ""
                } else f.push(t.createTextNode(i));
                for (d.textContent = "", u = 0; i = f[u++];)
                    if ((!r || -1 === at.inArray(i, r)) && (l = at.contains(i.ownerDocument, i), a = g(d.appendChild(i), "script"), l && h(a), n))
                        for (c = 0; i = a[c++];) Ot.test(i.type || "") && n.push(i);
                return d
            },
            cleanData: function(e) {
                for (var n, r, a, s, o, l, c = at.event.special, u = 0;
                    (r = e[u]) !== t; u++) {
                    if (i.accepts(r) && (o = r[gt.expando], o && (n = gt.cache[o]))) {
                        if (a = Object.keys(n.events || {}), a.length)
                            for (l = 0;
                                (s = a[l]) !== t; l++) c[s] ? at.event.remove(r, s) : at.removeEvent(r, s, n.handle);
                        gt.cache[o] && delete gt.cache[o]
                    }
                    delete mt.cache[r[mt.expando]]
                }
            },
            _evalUrl: function(e) {
                return at.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
        }), at.fn.extend({
            wrapAll: function(e) {
                var t;
                return at.isFunction(e) ? this.each(function(t) {
                    at(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = at(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(e) {
                return at.isFunction(e) ? this.each(function(t) {
                    at(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = at(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = at.isFunction(e);
                return this.each(function(n) {
                    at(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    at.nodeName(this, "body") || at(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var Wt, Bt, zt = /^(none|table(?!-c[ea]).+)/,
            Ut = /^margin/,
            Gt = RegExp("^(" + st + ")(.*)$", "i"),
            Vt = RegExp("^(" + st + ")(?!px)[a-z%]+$", "i"),
            Xt = RegExp("^([+-])=(" + st + ")", "i"),
            Yt = {
                BODY: "block"
            },
            Kt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Qt = {
                letterSpacing: 0,
                fontWeight: 400
            },
            Zt = ["Top", "Right", "Bottom", "Left"],
            Jt = ["Webkit", "O", "Moz", "ms"];
        at.fn.extend({
            css: function(e, n) {
                return at.access(this, function(e, n, r) {
                    var i, a, s = {},
                        o = 0;
                    if (at.isArray(n)) {
                        for (i = x(e), a = n.length; a > o; o++) s[n[o]] = at.css(e, n[o], !1, i);
                        return s
                    }
                    return r !== t ? at.style(e, n, r) : at.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return w(this, !0)
            },
            hide: function() {
                return w(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    y(this) ? at(this).show() : at(this).hide()
                })
            }
        }), at.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Wt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(e, n, r, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var a, s, o, l = at.camelCase(n),
                        c = e.style;
                    return n = at.cssProps[l] || (at.cssProps[l] = v(c, l)), o = at.cssHooks[n] || at.cssHooks[l], r === t ? o && "get" in o && (a = o.get(e, !1, i)) !== t ? a : c[n] : (s = typeof r, "string" === s && (a = Xt.exec(r)) && (r = (a[1] + 1) * a[2] + parseFloat(at.css(e, n)), s = "number"), null == r || "number" === s && isNaN(r) || ("number" !== s || at.cssNumber[l] || (r += "px"), at.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (c[n] = "inherit"), o && "set" in o && (r = o.set(e, r, i)) === t || (c[n] = r)), t)
                }
            },
            css: function(e, n, r, i) {
                var a, s, o, l = at.camelCase(n);
                return n = at.cssProps[l] || (at.cssProps[l] = v(e.style, l)), o = at.cssHooks[n] || at.cssHooks[l], o && "get" in o && (a = o.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Qt && (a = Qt[n]), "" === r || r ? (s = parseFloat(a), r === !0 || at.isNumeric(s) ? s || 0 : a) : a
            }
        }), Wt = function(e, n, r) {
            var i, a, s, o = r || x(e),
                l = o ? o.getPropertyValue(n) || o[n] : t,
                c = e.style;
            return o && ("" !== l || at.contains(e.ownerDocument, e) || (l = at.style(e, n)), Vt.test(l) && Ut.test(n) && (i = c.width, a = c.minWidth, s = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = o.width, c.width = i, c.minWidth = a, c.maxWidth = s)), l
        }, at.each(["height", "width"], function(e, n) {
            at.cssHooks[n] = {
                get: function(e, r, i) {
                    return r ? 0 === e.offsetWidth && zt.test(at.css(e, "display")) ? at.swap(e, Kt, function() {
                        return S(e, n, i)
                    }) : S(e, n, i) : t
                },
                set: function(e, t, r) {
                    var i = r && x(e);
                    return C(e, t, r ? k(e, n, r, at.support.boxSizing && "border-box" === at.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }), at(function() {
            at.support.reliableMarginRight || (at.cssHooks.marginRight = {
                get: function(e, n) {
                    return n ? at.swap(e, {
                        display: "inline-block"
                    }, Wt, [e, "marginRight"]) : t
                }
            }), !at.support.pixelPosition && at.fn.position && at.each(["top", "left"], function(e, n) {
                at.cssHooks[n] = {
                    get: function(e, r) {
                        return r ? (r = Wt(e, n), Vt.test(r) ? at(e).position()[n] + "px" : r) : t
                    }
                }
            })
        }), at.expr && at.expr.filters && (at.expr.filters.hidden = function(e) {
            return 0 >= e.offsetWidth && 0 >= e.offsetHeight
        }, at.expr.filters.visible = function(e) {
            return !at.expr.filters.hidden(e)
        }), at.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            at.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Zt[r] + t] = a[r] || a[r - 2] || a[0];
                    return i
                }
            }, Ut.test(e) || (at.cssHooks[e + t].set = C)
        });
        var en = /%20/g,
            tn = /\[\]$/,
            nn = /\r?\n/g,
            rn = /^(?:submit|button|image|reset|file)$/i,
            an = /^(?:input|select|textarea|keygen)/i;
        at.fn.extend({
            serialize: function() {
                return at.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = at.prop(this, "elements");
                    return e ? at.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !at(this).is(":disabled") && an.test(this.nodeName) && !rn.test(e) && (this.checked || !Ht.test(e))
                }).map(function(e, t) {
                    var n = at(this).val();
                    return null == n ? null : at.isArray(n) ? at.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(nn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(nn, "\r\n")
                    }
                }).get()
            }
        }), at.param = function(e, n) {
            var r, i = [],
                a = function(e, t) {
                    t = at.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = at.ajaxSettings && at.ajaxSettings.traditional), at.isArray(e) || e.jquery && !at.isPlainObject(e)) at.each(e, function() {
                a(this.name, this.value)
            });
            else
                for (r in e) D(r, e[r], n, a);
            return i.join("&").replace(en, "+")
        }, at.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            at.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), at.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var sn, on, ln = at.now(),
            cn = /\?/,
            un = /#.*$/,
            pn = /([?&])_=[^&]*/,
            dn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            fn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            hn = /^(?:GET|HEAD)$/,
            mn = /^\/\//,
            gn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            bn = at.fn.load,
            vn = {},
            yn = {},
            xn = "*/".concat("*");
        try {
            on = z.href
        } catch (wn) {
            on = U.createElement("a"), on.href = "", on = on.href
        }
        sn = gn.exec(on.toLowerCase()) || [], at.fn.load = function(e, n, r) {
            if ("string" != typeof e && bn) return bn.apply(this, arguments);
            var i, a, s, o = this,
                l = e.indexOf(" ");
            return l >= 0 && (i = e.slice(l), e = e.slice(0, l)), at.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), o.length > 0 && at.ajax({
                url: e,
                type: a,
                dataType: "html",
                data: n
            }).done(function(e) {
                s = arguments, o.html(i ? at("<div>").append(at.parseHTML(e)).find(i) : e)
            }).complete(r && function(e, t) {
                o.each(r, s || [e.responseText, t, e])
            }), this
        }, at.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            at.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), at.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: on,
                type: "GET",
                isLocal: fn.test(sn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": xn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": at.parseJSON,
                    "text xml": at.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? R(R(e, at.ajaxSettings), t) : R(at.ajaxSettings, e)
            },
            ajaxPrefilter: N(vn),
            ajaxTransport: N(yn),
            ajax: function(e, n) {
                function r(e, n, r, o) {
                    var c, p, v, y, w, k = n;
                    2 !== x && (x = 2, l && clearTimeout(l), i = t, s = o || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (y = P(d, C, r)), y = L(d, y, C, c), c ? (d.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (at.lastModified[a] = w), w = C.getResponseHeader("etag"), w && (at.etag[a] = w)), 204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, p = y.data, v = y.error, c = !v)) : (v = k, (e || !k) && (k = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || k) + "", c ? m.resolveWith(f, [p, k, C]) : m.rejectWith(f, [C, k, v]), C.statusCode(b), b = t, u && h.trigger(c ? "ajaxSuccess" : "ajaxError", [C, d, c ? p : v]), g.fireWith(f, [C, k]), u && (h.trigger("ajaxComplete", [C, d]), --at.active || at.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = t), n = n || {};
                var i, a, s, o, l, c, u, p, d = at.ajaxSetup({}, n),
                    f = d.context || d,
                    h = d.context && (f.nodeType || f.jquery) ? at(f) : at.event,
                    m = at.Deferred(),
                    g = at.Callbacks("once memory"),
                    b = d.statusCode || {},
                    v = {},
                    y = {},
                    x = 0,
                    w = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === x) {
                                if (!o)
                                    for (o = {}; t = dn.exec(s);) o[t[1].toLowerCase()] = t[2];
                                t = o[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return x || (e = y[n] = y[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return x || (d.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > x)
                                    for (t in e) b[t] = [b[t], e[t]];
                                else C.always(e[C.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return i && i.abort(t), r(0, t), this
                        }
                    };
                if (m.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, d.url = ((e || d.url || on) + "").replace(un, "").replace(mn, sn[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = at.trim(d.dataType || "*").toLowerCase().match(ot) || [""], null == d.crossDomain && (c = gn.exec(d.url.toLowerCase()), d.crossDomain = !(!c || c[1] === sn[1] && c[2] === sn[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (sn[3] || ("http:" === sn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = at.param(d.data, d.traditional)), A(vn, d, n, C), 2 === x) return C;
                u = d.global, u && 0 === at.active++ && at.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !hn.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (cn.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = pn.test(a) ? a.replace(pn, "$1_=" + ln++) : a + (cn.test(a) ? "&" : "?") + "_=" + ln++)), d.ifModified && (at.lastModified[a] && C.setRequestHeader("If-Modified-Since", at.lastModified[a]), at.etag[a] && C.setRequestHeader("If-None-Match", at.etag[a])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", d.contentType), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + xn + "; q=0.01" : "") : d.accepts["*"]);
                for (p in d.headers) C.setRequestHeader(p, d.headers[p]);
                if (d.beforeSend && (d.beforeSend.call(f, C, d) === !1 || 2 === x)) return C.abort();
                w = "abort";
                for (p in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) C[p](d[p]);
                if (i = A(yn, d, n, C)) {
                    C.readyState = 1, u && h.trigger("ajaxSend", [C, d]), d.async && d.timeout > 0 && (l = setTimeout(function() {
                        C.abort("timeout")
                    }, d.timeout));
                    try {
                        x = 1, i.send(v, r)
                    } catch (k) {
                        if (!(2 > x)) throw k;
                        r(-1, k)
                    }
                } else r(-1, "No Transport");
                return C
            },
            getJSON: function(e, t, n) {
                return at.get(e, t, n, "json")
            },
            getScript: function(e, n) {
                return at.get(e, t, n, "script")
            }
        }), at.each(["get", "post"], function(e, n) {
            at[n] = function(e, r, i, a) {
                return at.isFunction(r) && (a = a || i, i = r, r = t), at.ajax({
                    url: e,
                    type: n,
                    dataType: a,
                    data: r,
                    success: i
                })
            }
        }), at.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return at.globalEval(e), e
                }
            }
        }), at.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), at.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(r, i) {
                        t = at("<script>").prop({
                            async: !0,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                        }), U.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Cn = [],
            kn = /(=)\?(?=&|$)|\?\?/;
        at.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Cn.pop() || at.expando + "_" + ln++;
                return this[e] = !0, e
            }
        }), at.ajaxPrefilter("json jsonp", function(n, r, i) {
            var a, s, o, l = n.jsonp !== !1 && (kn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && kn.test(n.data) && "data");
            return l || "jsonp" === n.dataTypes[0] ? (a = n.jsonpCallback = at.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(kn, "$1" + a) : n.jsonp !== !1 && (n.url += (cn.test(n.url) ? "&" : "?") + n.jsonp + "=" + a), n.converters["script json"] = function() {
                return o || at.error(a + " was not called"), o[0]
            }, n.dataTypes[0] = "json", s = e[a], e[a] = function() {
                o = arguments
            }, i.always(function() {
                e[a] = s, n[a] && (n.jsonpCallback = r.jsonpCallback, Cn.push(a)), o && at.isFunction(s) && s(o[0]), o = s = t
            }), "script") : t
        }), at.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (e) {}
        };
        var Sn = at.ajaxSettings.xhr(),
            Tn = {
                0: 200,
                1223: 204
            },
            En = 0,
            Dn = {};
        e.ActiveXObject && at(e).on("unload", function() {
            for (var e in Dn) Dn[e]();
            Dn = t
        }), at.support.cors = !!Sn && "withCredentials" in Sn, at.support.ajax = Sn = !!Sn, at.ajaxTransport(function(e) {
            var n;
            return at.support.cors || Sn && !e.crossDomain ? {
                send: function(r, i) {
                    var a, s, o = e.xhr();
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) o[a] = e.xhrFields[a];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (a in r) o.setRequestHeader(a, r[a]);
                    n = function(e) {
                        return function() {
                            n && (delete Dn[s], n = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? i(o.status || 404, o.statusText) : i(Tn[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                text: o.responseText
                            } : t, o.getAllResponseHeaders()))
                        }
                    }, o.onload = n(), o.onerror = n("error"), n = Dn[s = En++] = n("abort"), o.send(e.hasContent && e.data || null)
                },
                abort: function() {
                    n && n()
                }
            } : t
        });
        var Nn, An, Rn = /^(?:toggle|show|hide)$/,
            Pn = RegExp("^(?:([+-])=|)(" + st + ")([a-z%]*)$", "i"),
            Ln = /queueHooks$/,
            jn = [M],
            In = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = Pn.exec(t),
                        a = i && i[3] || (at.cssNumber[e] ? "" : "px"),
                        s = (at.cssNumber[e] || "px" !== a && +r) && Pn.exec(at.css(n.elem, e)),
                        o = 1,
                        l = 20;
                    if (s && s[3] !== a) {
                        a = a || s[3], i = i || [], s = +r || 1;
                        do o = o || ".5", s /= o, at.style(n.elem, e, s + a); while (o !== (o = n.cur() / r) && 1 !== o && --l)
                    }
                    return i && (s = n.start = +s || +r || 0, n.unit = a, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
                }]
            };
        at.Animation = at.extend($, {
            tweener: function(e, t) {
                at.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], In[n] = In[n] || [], In[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? jn.unshift(e) : jn.push(e)
            }
        }), at.Tween = O, O.prototype = {
            constructor: O,
            init: function(e, t, n, r, i, a) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (at.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = O.propHooks[this.prop];
                return e && e.get ? e.get(this) : O.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = O.propHooks[this.prop];
                return this.pos = t = this.options.duration ? at.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
            }
        }, O.prototype.init.prototype = O.prototype, O.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = at.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    at.fx.step[e.prop] ? at.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[at.cssProps[e.prop]] || at.cssHooks[e.prop]) ? at.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, at.each(["toggle", "show", "hide"], function(e, t) {
            var n = at.fn[t];
            at.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, r, i)
            }
        }), at.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(y).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = at.isEmptyObject(e),
                    a = at.speed(t, n, r),
                    s = function() {
                        var t = $(this, at.extend({}, e), a);
                        (i || gt.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, i || a.queue === !1 ? this.each(s) : this.queue(a.queue, s)
            },
            stop: function(e, n, r) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(r)
                };
                return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        a = at.timers,
                        s = gt.get(this);
                    if (n) s[n] && s[n].stop && i(s[n]);
                    else
                        for (n in s) s[n] && s[n].stop && Ln.test(n) && i(s[n]);
                    for (n = a.length; n--;) a[n].elem !== this || null != e && a[n].queue !== e || (a[n].anim.stop(r), t = !1, a.splice(n, 1));
                    (t || !r) && at.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = gt.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        a = at.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, at.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                    for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), at.each({
            slideDown: F("show"),
            slideUp: F("hide"),
            slideToggle: F("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            at.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), at.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? at.extend({}, e) : {
                complete: n || !n && t || at.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !at.isFunction(t) && t
            };
            return r.duration = at.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in at.fx.speeds ? at.fx.speeds[r.duration] : at.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                at.isFunction(r.old) && r.old.call(this), r.queue && at.dequeue(this, r.queue)
            }, r
        }, at.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, at.timers = [], at.fx = O.prototype.init, at.fx.tick = function() {
            var e, n = at.timers,
                r = 0;
            for (Nn = at.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
            n.length || at.fx.stop(), Nn = t
        }, at.fx.timer = function(e) {
            e() && at.timers.push(e) && at.fx.start()
        }, at.fx.interval = 13, at.fx.start = function() {
            An || (An = setInterval(at.fx.tick, at.fx.interval))
        }, at.fx.stop = function() {
            clearInterval(An), An = null
        }, at.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, at.fx.step = {}, at.expr && at.expr.filters && (at.expr.filters.animated = function(e) {
            return at.grep(at.timers, function(t) {
                return e === t.elem
            }).length
        }), at.fn.offset = function(e) {
            if (arguments.length) return e === t ? this : this.each(function(t) {
                at.offset.setOffset(this, e, t)
            });
            var n, r, i = this[0],
                a = {
                    top: 0,
                    left: 0
                },
                s = i && i.ownerDocument;
            return s ? (n = s.documentElement, at.contains(n, i) ? (typeof i.getBoundingClientRect !== B && (a = i.getBoundingClientRect()), r = _(s), {
                top: a.top + r.pageYOffset - n.clientTop,
                left: a.left + r.pageXOffset - n.clientLeft
            }) : a) : void 0
        }, at.offset = {
            setOffset: function(e, t, n) {
                var r, i, a, s, o, l, c, u = at.css(e, "position"),
                    p = at(e),
                    d = {};
                "static" === u && (e.style.position = "relative"), o = p.offset(), a = at.css(e, "top"), l = at.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (a + l).indexOf("auto") > -1, c ? (r = p.position(), s = r.top, i = r.left) : (s = parseFloat(a) || 0, i = parseFloat(l) || 0), at.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (d.top = t.top - o.top + s), null != t.left && (d.left = t.left - o.left + i), "using" in t ? t.using.call(e, d) : p.css(d)
            }
        }, at.fn.extend({
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        r = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === at.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), at.nodeName(e[0], "html") || (r = e.offset()), r.top += at.css(e[0], "borderTopWidth", !0), r.left += at.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - r.top - at.css(n, "marginTop", !0),
                        left: t.left - r.left - at.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || G; e && !at.nodeName(e, "html") && "static" === at.css(e, "position");) e = e.offsetParent;
                    return e || G
                })
            }
        }), at.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(n, r) {
            var i = "pageYOffset" === r;
            at.fn[n] = function(a) {
                return at.access(this, function(n, a, s) {
                    var o = _(n);
                    return s === t ? o ? o[r] : n[a] : (o ? o.scrollTo(i ? e.pageXOffset : s, i ? s : e.pageYOffset) : n[a] = s, t)
                }, n, a, arguments.length, null)
            }
        }), at.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            at.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(r, i) {
                at.fn[i] = function(i, a) {
                    var s = arguments.length && (r || "boolean" != typeof i),
                        o = r || (i === !0 || a === !0 ? "margin" : "border");
                    return at.access(this, function(n, r, i) {
                        var a;
                        return at.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (a = n.documentElement, Math.max(n.body["scroll" + e], a["scroll" + e], n.body["offset" + e], a["offset" + e], a["client" + e])) : i === t ? at.css(n, r, o) : at.style(n, r, i, o)
                    }, n, s ? i : t, s, null)
                }
            })
        }), at.fn.size = function() {
            return this.length
        }, at.fn.andSelf = at.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = at : "function" == typeof define && define.amd && define("jquery", [], function() {
            return at
        }), "object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = at)
    }(window),
    function(e) {
        var t = {},
            n = top !== self;
        "respecConfig" in window || (window.respecConfig = {}), e.respecEvents = {
            pub: function(r) {
                var i = Array.prototype.slice.call(arguments);
                i.shift(), n && window.postMessage && parent.postMessage({
                    topic: r,
                    args: i
                }, "*"), $.each(t[r] || [], function() {
                    this.apply(e, i)
                })
            },
            sub: function(e, n) {
                return t[e] || (t[e] = []), t[e].push(n), [e, n]
            },
            unsub: function(e) {
                var n = e[0];
                t[n] && $.each(t[n] || [], function(r) {
                    this == e[1] && t[n].splice(r, 1)
                })
            }
        }
    }(this), window.console && (respecEvents.sub("warn", function(e) {
        console.log("WARN: " + e)
    }), respecEvents.sub("error", function(e) {
        console.log("ERROR: " + e)
    }), respecEvents.sub("start", function(e) {
        respecConfig && respecConfig.trace && console.log(">>> began: " + e)
    }), respecEvents.sub("end", function(e) {
        respecConfig && respecConfig.trace && console.log("<<< finished: " + e)
    }), respecEvents.sub("start-all", function() {
        console.log("RESPEC PROCESSING STARTED"), "respecVersion" in window && respecVersion && console.log("RESPEC Version: " + respecVersion)
    }), respecEvents.sub("end-all", function() {
        console.log("RESPEC DONE!")
    })), define("core/base-runner", ["jquery"], function() {
        return {
            runAll: function(e) {
                var t = 0;
                respecEvents.pub("start-all"), respecEvents.sub("start", function() {
                    t++
                }), respecEvents.sub("end", function() {
                    t--, t || (respecEvents.pub("end-all"), document.respecDone = !0)
                }), respecEvents.pub("start", "core/base-runner"), e.shift();
                var n;
                if (n = function() {
                        if (!e.length) {
                            if (respecConfig.postProcess)
                                for (var t = 0; t < respecConfig.postProcess.length; t++) try {
                                    respecConfig.postProcess[t].apply(this)
                                } catch (r) {
                                    respecEvents.pub("error", r)
                                }
                            if (respecConfig.afterEnd) try {
                                respecConfig.afterEnd.apply(window, Array.prototype.slice.call(arguments))
                            } catch (r) {
                                respecEvents.pub("error", r)
                            }
                            return respecEvents.pub("end", "core/base-runner"), void 0
                        }
                        var i = e.shift();
                        if (i.run) try {
                            i.run.call(i, respecConfig, document, n, respecEvents)
                        } catch (r) {
                            respecEvents.pub("error", r), respecEvents.pub("end", "unknown/with-error"), n()
                        } else n()
                    }, respecConfig.preProcess)
                    for (var r = 0; r < respecConfig.preProcess.length; r++) try {
                        respecConfig.preProcess[r].apply(this)
                    } catch (i) {
                        respecEvents.pub("error", i)
                    }
                n()
            }
        }
    }), shortcut = {
        all_shortcuts: {},
        add: function(e, t, n) {
            var r = {
                type: "keydown",
                propagate: !1,
                disable_in_input: !1,
                target: document,
                keycode: !1
            };
            if (n)
                for (var i in r) "undefined" == typeof n[i] && (n[i] = r[i]);
            else n = r;
            var a = n.target;
            "string" == typeof n.target && (a = document.getElementById(n.target)), e = e.toLowerCase();
            var s = function(r) {
                if (r = r || window.event, n.disable_in_input) {
                    var i;
                    if (r.target ? i = r.target : r.srcElement && (i = r.srcElement), 3 == i.nodeType && (i = i.parentNode), "INPUT" == i.tagName || "TEXTAREA" == i.tagName) return
                }
                r.keyCode ? code = r.keyCode : r.which && (code = r.which);
                var a = String.fromCharCode(code).toLowerCase();
                188 == code && (a = ","), 190 == code && (a = ".");
                var s = e.split("+"),
                    o = 0,
                    l = {
                        "`": "~",
                        1: "!",
                        2: "@",
                        3: "#",
                        4: "$",
                        5: "%",
                        6: "^",
                        7: "&",
                        8: "*",
                        9: "(",
                        0: ")",
                        "-": "_",
                        "=": "+",
                        ";": ":",
                        "'": '"',
                        ",": "<",
                        ".": ">",
                        "/": "?",
                        "\\": "|"
                    },
                    c = {
                        esc: 27,
                        escape: 27,
                        tab: 9,
                        space: 32,
                        "return": 13,
                        enter: 13,
                        backspace: 8,
                        scrolllock: 145,
                        scroll_lock: 145,
                        scroll: 145,
                        capslock: 20,
                        caps_lock: 20,
                        caps: 20,
                        numlock: 144,
                        num_lock: 144,
                        num: 144,
                        pause: 19,
                        "break": 19,
                        insert: 45,
                        home: 36,
                        "delete": 46,
                        end: 35,
                        pageup: 33,
                        page_up: 33,
                        pu: 33,
                        pagedown: 34,
                        page_down: 34,
                        pd: 34,
                        left: 37,
                        up: 38,
                        right: 39,
                        down: 40,
                        f1: 112,
                        f2: 113,
                        f3: 114,
                        f4: 115,
                        f5: 116,
                        f6: 117,
                        f7: 118,
                        f8: 119,
                        f9: 120,
                        f10: 121,
                        f11: 122,
                        f12: 123
                    },
                    u = {
                        shift: {
                            wanted: !1,
                            pressed: !1
                        },
                        ctrl: {
                            wanted: !1,
                            pressed: !1
                        },
                        alt: {
                            wanted: !1,
                            pressed: !1
                        },
                        meta: {
                            wanted: !1,
                            pressed: !1
                        }
                    };
                r.ctrlKey && (u.ctrl.pressed = !0), r.shiftKey && (u.shift.pressed = !0), r.altKey && (u.alt.pressed = !0), r.metaKey && (u.meta.pressed = !0);
                for (var p = 0; k = s[p], p < s.length; p++) "ctrl" == k || "control" == k ? (o++, u.ctrl.wanted = !0) : "shift" == k ? (o++, u.shift.wanted = !0) : "alt" == k ? (o++, u.alt.wanted = !0) : "meta" == k ? (o++, u.meta.wanted = !0) : k.length > 1 ? c[k] == code && o++ : n.keycode ? n.keycode == code && o++ : a == k ? o++ : l[a] && r.shiftKey && (a = l[a], a == k && o++);
                return o != s.length || u.ctrl.pressed != u.ctrl.wanted || u.shift.pressed != u.shift.wanted || u.alt.pressed != u.alt.wanted || u.meta.pressed != u.meta.wanted || (t(r), n.propagate) ? void 0 : (r.cancelBubble = !0, r.returnValue = !1, r.stopPropagation && (r.stopPropagation(), r.preventDefault()), !1)
            };
            this.all_shortcuts[e] = {
                callback: s,
                target: a,
                event: n.type
            }, a.addEventListener ? a.addEventListener(n.type, s, !1) : a.attachEvent ? a.attachEvent("on" + n.type, s) : a["on" + n.type] = s
        }
    }, define("shortcut", function(e) {
        return function() {
            var t;
            return t || e.shortcut
        }
    }(this)), define("core/ui", ["jquery", "shortcut"], function(e, t) {
        var n, r, i, a, s, o, l = e("<div></div>").css({
                background: "#fff",
                border: "1px solid #000",
                width: "200px",
                display: "none",
                textAlign: "left",
                marginTop: "5px",
                marginRight: "5px"
            }),
            c = [],
            u = [],
            p = {},
            d = function(t, n, r, a, s) {
                n.push(t), p[r] || (p[r] = e("<button></button>").css({
                    background: a,
                    color: "#fff",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "5px",
                    marginLeft: "5px"
                }).insertAfter(i).click(function() {
                    for (var t = e("<ol></ol>"), r = 0, i = n.length; i > r; r++) {
                        var a = n[r];
                        a instanceof Error ? e("<li><span></span> <a>âŠž</a><pre></pre></li>").appendTo(t).find("span").text("[" + a.name + "] " + a.message).end().find("a").css({
                            fontSize: "1.1em",
                            color: "#999",
                            cursor: "pointer"
                        }).click(function() {
                            var t = e(this),
                                n = t.text(),
                                r = t.parent().find("pre");
                            "âŠž" === n ? (t.text("âŠŸ"), r.show()) : (t.text("âŠž"), r.hide())
                        }).end().find("pre").text(a.stack).css({
                            marginLeft: "0",
                            maxWidth: "100%",
                            overflowY: "hidden",
                            overflowX: "scroll"
                        }).hide().end() : e("<li></li>").text(a).appendTo(t)
                    }
                    f.freshModal(s, t)
                })), p[r].text(n.length)
            },
            f = {
                run: function(n, r, c, u) {
                    a = n, s = r, o = u, o.pub("start", "core/ui");
                    var d = e("<div id='respec-ui' class='removeOnSave'></div>", s).css({
                        position: "fixed",
                        top: "20px",
                        right: "20px",
                        width: "202px",
                        textAlign: "right"
                    }).appendTo(e("body", s));
                    i = e("<button>ReSpec</button>").css({
                        background: "#fff",
                        fontWeight: "bold",
                        border: "1px solid #ccc",
                        borderRadius: "5px"
                    }).click(function() {
                        l.toggle()
                    }).appendTo(d), l.appendTo(d), t.add("Esc", function() {
                        f.closeModal()
                    }), t.add("Ctrl+Alt+Shift+E", function() {
                        p.error && p.error.click()
                    }), t.add("Ctrl+Alt+Shift+W", function() {
                        p.warning && p.warning.click()
                    }), o.pub("end", "core/ui"), c()
                },
                addCommand: function(n, r, i) {
                    var c = function() {
                        l.hide(), require([r], function(e) {
                            e.show(f, a, s, o)
                        })
                    };
                    e("<button></button>").css({
                        background: "#fff",
                        border: "none",
                        borderBottom: "1px solid #ccc",
                        width: "100%",
                        textAlign: "left",
                        fontSize: "inherit"
                    }).text(n).click(c).appendTo(l), i && t.add(i, c)
                },
                error: function(e) {
                    d(e, c, "error", "#c00", "Errors")
                },
                warning: function(e) {
                    d(e, u, "warning", "#f60", "Warnings")
                },
                closeModal: function() {
                    r && r.fadeOut(200, function() {
                        r.remove(), r = null
                    }), n && (n.remove(), n = null)
                },
                freshModal: function(t, i) {
                    n && n.remove(), r && r.remove();
                    var a = 500;
                    r = e("<div id='respec-overlay' class='removeOnSave'></div>").hide(), n = e("<div id='respec-modal' class='removeOnSave'><h3></h3><div class='inside'></div></div>").hide(), n.find("h3").text(t), n.find(".inside").append(i), e("body").append(r).append(n), r.click(this.closeModal).css({
                        display: "block",
                        opacity: 0,
                        position: "fixed",
                        zIndex: 1e4,
                        top: "0px",
                        left: "0px",
                        height: "100%",
                        width: "100%",
                        background: "#000"
                    }).fadeTo(200, .5), n.css({
                        display: "block",
                        position: "fixed",
                        opacity: 0,
                        zIndex: 11e3,
                        left: "50%",
                        marginLeft: -(a / 2) + "px",
                        top: "100px",
                        background: "#fff",
                        border: "5px solid #666",
                        borderRadius: "5px",
                        width: a + "px",
                        padding: "0 20px 20px 20px",
                        maxHeight: e(window).height() - 150 + "px",
                        overflowY: "auto"
                    }).fadeTo(200, 1)
                }
            };
        return window.respecEvents && respecEvents.sub("error", function(e) {
            f.error(e)
        }), window.respecEvents && respecEvents.sub("warn", function(e) {
            f.warning(e)
        }), f
    }), define("core/override-configuration", [], function() {
        return {
            run: function(e, t, n, r) {
                if (r.pub("start", "core/override-configuration"), location.search)
                    for (var i = location.search.replace(/^\?/, "").split(";"), a = 0, s = i.length; s > a; a++) {
                        var o = i[a].split("=", 2),
                            l = decodeURI(o[0]),
                            c = decodeURI(o[1]).replace(/%3D/g, "=");
                        "true" === c ? c = !0 : "false" === c ? c = !1 : "null" === c ? c = null : /\[\]$/.test(l) && (l = l.replace(/\[\]/, ""), c = $.parseJSON(c)), e[l] = c
                    }
                r.pub("end", "core/override-configuration"), n()
            }
        }
    }), define("core/default-root-attr", [], function() {
        return {
            run: function(e, t, n, r) {
                r.pub("start", "core/default-root-attr");
                var i = $(t.documentElement);
                i.attr("lang") || (i.attr("lang", "en"), i.attr("dir") || i.attr("dir", "ltr")), r.pub("end", "core/default-root-attr"), n()
            }
        }
    }),
    function() {
        function e(e, t) {
            return "!" !== e[0][0] ? '<a href="' + a(t.href) + '"' + (t.title ? ' title="' + a(t.title) + '"' : "") + ">" + f.lexer(e[1]) + "</a>" : '<img src="' + a(t.href) + '" alt="' + a(e[1]) + '"' + (t.title ? ' title="' + a(t.title) + '"' : "") + ">"
        }

        function t() {
            return m = h.pop()
        }

        function n() {
            switch (m.type) {
                case "space":
                    return "";
                case "hr":
                    return "<hr>\n";
                case "heading":
                    return "<h" + m.depth + ">" + f.lexer(m.text) + "</h" + m.depth + ">\n";
                case "code":
                    return g.highlight && (m.code = g.highlight(m.text, m.lang), null != m.code && m.code !== m.text && (m.escaped = !0, m.text = m.code)), m.escaped || (m.text = a(m.text, !0)), "<pre><code" + (m.lang ? ' class="lang-' + m.lang + '"' : "") + ">" + m.text + "</code></pre>\n";
                case "blockquote_start":
                    for (var e = "";
                        "blockquote_end" !== t().type;) e += n();
                    return "<blockquote>\n" + e + "</blockquote>\n";
                case "list_start":
                    for (var i = m.ordered ? "ol" : "ul", e = "";
                        "list_end" !== t().type;) e += n();
                    return "<" + i + ">\n" + e + "</" + i + ">\n";
                case "list_item_start":
                    for (var e = "";
                        "list_item_end" !== t().type;) e += "text" === m.type ? r() : n();
                    return "<li>" + e + "</li>\n";
                case "loose_item_start":
                    for (var e = "";
                        "list_item_end" !== t().type;) e += n();
                    return "<li>" + e + "</li>\n";
                case "html":
                    return m.pre || g.pedantic ? m.text : f.lexer(m.text);
                case "paragraph":
                    return "<p>" + f.lexer(m.text) + "</p>\n";
                case "text":
                    return "<p>" + r() + "</p>\n"
            }
        }

        function r() {
            for (var e, n = m.text;
                (e = h[h.length - 1]) && "text" === e.type;) n += "\n" + t().text;
            return f.lexer(n)
        }

        function i(e) {
            h = e.reverse();
            for (var r = ""; t();) r += n();
            return h = null, m = null, r
        }

        function a(e, t) {
            return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        }

        function s(e) {
            for (var t, n = "", r = e.length, i = 0; r > i; i++) t = e.charCodeAt(i), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
            return n
        }

        function o() {
            var e = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b";
            return e
        }

        function l(e, t) {
            return e = e.source, t = t || "",
                function n(r, i) {
                    return r ? (i = i.source || i, i = i.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(r, i), n) : new RegExp(e, t)
                }
        }

        function c() {}

        function u(e, t) {
            return p(t), i(d.lexer(e))
        }

        function p(e) {
            e || (e = b), g !== e && (g = e, g.gfm ? (d.fences = d.gfm.fences, d.paragraph = d.gfm.paragraph, f.text = f.gfm.text, f.url = f.gfm.url) : (d.fences = d.normal.fences, d.paragraph = d.normal.paragraph, f.text = f.normal.text, f.url = f.normal.url), g.pedantic ? (f.em = f.pedantic.em, f.strong = f.pedantic.strong) : (f.em = f.normal.em, f.strong = f.normal.strong))
        }
        var d = {
            newline: /^\n+/,
            code: /^( {4}[^\n]+\n*)+/,
            fences: c,
            hr: /^( *[-*_]){3,} *(?:\n+|$)/,
            heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
            lheading: /^([^\n]+)\n *(=|-){3,} *\n*/,
            blockquote: /^( *>[^\n]+(\n[^\n]+)*\n*)+/,
            list: /^( *)(bull) [^\0]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
            html: /^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,
            def: /^ *\[([^\]]+)\]: *([^\s]+)(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
            paragraph: /^([^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+\n*/,
            text: /^[^\n]+/
        };
        d.bullet = /(?:[*+-]|\d+\.)/, d.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, d.item = l(d.item, "gm")(/bull/g, d.bullet)(), d.list = l(d.list)(/bull/g, d.bullet)("hr", /\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)(), d.html = l(d.html)("comment", /<!--[^\0]*?-->/)("closed", /<(tag)[^\0]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, o())(), d.paragraph = l(d.paragraph)("hr", d.hr)("heading", d.heading)("lheading", d.lheading)("blockquote", d.blockquote)("tag", "<" + o())("def", d.def)(), d.normal = {
            fences: d.fences,
            paragraph: d.paragraph
        }, d.gfm = {
            fences: /^ *(```|~~~) *(\w+)? *\n([^\0]+?)\s*\1 *(?:\n+|$)/,
            paragraph: /^/
        }, d.gfm.paragraph = l(d.paragraph)("(?!", "(?!" + d.gfm.fences.source.replace("\\1", "\\2") + "|")(), d.lexer = function(e) {
            var t = [];
            return t.links = {}, e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), d.token(e, t, !0)
        }, d.token = function(e, t, n) {
            for (var r, i, a, s, o, l, c, e = e.replace(/^ +$/gm, ""); e;)
                if ((a = d.newline.exec(e)) && (e = e.substring(a[0].length), a[0].length > 1 && t.push({
                        type: "space"
                    })), a = d.code.exec(e)) e = e.substring(a[0].length), a = a[0].replace(/^ {4}/gm, ""), t.push({
                    type: "code",
                    text: g.pedantic ? a : a.replace(/\n+$/, "")
                });
                else if (a = d.fences.exec(e)) e = e.substring(a[0].length), t.push({
                type: "code",
                lang: a[2],
                text: a[3]
            });
            else if (a = d.heading.exec(e)) e = e.substring(a[0].length), t.push({
                type: "heading",
                depth: a[1].length,
                text: a[2]
            });
            else if (a = d.lheading.exec(e)) e = e.substring(a[0].length), t.push({
                type: "heading",
                depth: "=" === a[2] ? 1 : 2,
                text: a[1]
            });
            else if (a = d.hr.exec(e)) e = e.substring(a[0].length), t.push({
                type: "hr"
            });
            else if (a = d.blockquote.exec(e)) e = e.substring(a[0].length), t.push({
                type: "blockquote_start"
            }), a = a[0].replace(/^ *> ?/gm, ""), d.token(a, t, n), t.push({
                type: "blockquote_end"
            });
            else if (a = d.list.exec(e)) {
                for (e = e.substring(a[0].length), t.push({
                        type: "list_start",
                        ordered: isFinite(a[2])
                    }), a = a[0].match(d.item), r = !1, c = a.length, l = 0; c > l; l++) s = a[l], o = s.length, s = s.replace(/^ *([*+-]|\d+\.) +/, ""), ~s.indexOf("\n ") && (o -= s.length, s = g.pedantic ? s.replace(/^ {1,4}/gm, "") : s.replace(new RegExp("^ {1," + o + "}", "gm"), "")), i = r || /\n\n(?!\s*$)/.test(s), l !== c - 1 && (r = "\n" === s[s.length - 1], i || (i = r)), t.push({
                    type: i ? "loose_item_start" : "list_item_start"
                }), d.token(s, t), t.push({
                    type: "list_item_end"
                });
                t.push({
                    type: "list_end"
                })
            } else(a = d.html.exec(e)) ? (e = e.substring(a[0].length), t.push({
                type: g.sanitize ? "paragraph" : "html",
                pre: "pre" === a[1],
                text: a[0]
            })) : n && (a = d.def.exec(e)) ? (e = e.substring(a[0].length), t.links[a[1].toLowerCase()] = {
                href: a[2],
                title: a[3]
            }) : n && (a = d.paragraph.exec(e)) ? (e = e.substring(a[0].length), t.push({
                type: "paragraph",
                text: a[0]
            })) : (a = d.text.exec(e)) && (e = e.substring(a[0].length), t.push({
                type: "text",
                text: a[0]
            }));
            return t
        };
        var f = {
            escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
            autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
            url: c,
            tag: /^<!--[^\0]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
            link: /^!?\[(inside)\]\(href\)/,
            reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
            nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
            strong: /^__([^\0]+?)__(?!_)|^\*\*([^\0]+?)\*\*(?!\*)/,
            em: /^\b_((?:__|[^\0])+?)_\b|^\*((?:\*\*|[^\0])+?)\*(?!\*)/,
            code: /^(`+)([^\0]*?[^`])\1(?!`)/,
            br: /^ {2,}\n(?!\s*$)/,
            text: /^[^\0]+?(?=[\\<!\[_*`]| {2,}\n|$)/
        };
        f._linkInside = /(?:\[[^\]]*\]|[^\]]|\](?=[^\[]*\]))*/, f._linkHref = /\s*<?([^\s]*?)>?(?:\s+['"]([^\0]*?)['"])?\s*/, f.link = l(f.link)("inside", f._linkInside)("href", f._linkHref)(), f.reflink = l(f.reflink)("inside", f._linkInside)(), f.normal = {
            url: f.url,
            strong: f.strong,
            em: f.em,
            text: f.text
        }, f.pedantic = {
            strong: /^__(?=\S)([^\0]*?\S)__(?!_)|^\*\*(?=\S)([^\0]*?\S)\*\*(?!\*)/,
            em: /^_(?=\S)([^\0]*?\S)_(?!_)|^\*(?=\S)([^\0]*?\S)\*(?!\*)/
        }, f.gfm = {
            url: /^(https?:\/\/[^\s]+[^.,:;"')\]\s])/,
            text: /^[^\0]+?(?=[\\<!\[_*`]|https?:\/\/| {2,}\n|$)/
        }, f.lexer = function(t) {
            for (var n, r, i, o, l = "", c = h.links; t;)
                if (o = f.escape.exec(t)) t = t.substring(o[0].length), l += o[1];
                else if (o = f.autolink.exec(t)) t = t.substring(o[0].length), "@" === o[2] ? (r = ":" === o[1][6] ? s(o[1].substring(7)) : s(o[1]), i = s("mailto:") + r) : (r = a(o[1]), i = r), l += '<a href="' + i + '">' + r + "</a>";
            else if (o = f.url.exec(t)) t = t.substring(o[0].length), r = a(o[1]), i = r, l += '<a href="' + i + '">' + r + "</a>";
            else if (o = f.tag.exec(t)) t = t.substring(o[0].length), l += g.sanitize ? a(o[0]) : o[0];
            else if (o = f.link.exec(t)) t = t.substring(o[0].length), l += e(o, {
                href: o[2],
                title: o[3]
            });
            else if ((o = f.reflink.exec(t)) || (o = f.nolink.exec(t))) {
                if (t = t.substring(o[0].length), n = (o[2] || o[1]).replace(/\s+/g, " "), n = c[n.toLowerCase()], !n || !n.href) {
                    l += o[0][0], t = o[0].substring(1) + t;
                    continue
                }
                l += e(o, n)
            } else(o = f.strong.exec(t)) ? (t = t.substring(o[0].length), l += "<strong>" + f.lexer(o[2] || o[1]) + "</strong>") : (o = f.em.exec(t)) ? (t = t.substring(o[0].length), l += "<em>" + f.lexer(o[2] || o[1]) + "</em>") : (o = f.code.exec(t)) ? (t = t.substring(o[0].length), l += "<code>" + a(o[2], !0) + "</code>") : (o = f.br.exec(t)) ? (t = t.substring(o[0].length), l += "<br>") : (o = f.text.exec(t)) && (t = t.substring(o[0].length), l += a(o[0]));
            return l
        };
        var h, m;
        c.exec = c;
        var g, b;
        u.options = u.setOptions = function(e) {
            return b = e, p(e), u
        }, u.setOptions({
            gfm: !0,
            pedantic: !1,
            sanitize: !1,
            highlight: null
        }), u.parser = function(e, t) {
            return p(t), i(e)
        }, u.lexer = function(e, t) {
            return p(t), d.lexer(e)
        }, u.parse = u, "undefined" != typeof module ? module.exports = u : this.marked = u
    }.call(function() {
        return this || ("undefined" != typeof window ? window : global)
    }()), define("core/marked", function() {}), define("core/markdown", ["core/marked"], function() {
        function e(e) {
            function t(e) {
                return parseInt(e.tagName.charAt(1), 10)
            }

            function n(e) {
                for (var t; e > 0;)
                    if (e--, t = c[e]) return t
            }

            function r(e) {
                for (e = e.firstChild; e;) {
                    if (p.test(e.tagName)) return e;
                    e = e.nextSibling
                }
                return null
            }

            function i(r) {
                var i = e.createElement("section"),
                    a = t(r);
                i.appendChild(r), n(a).appendChild(i), c[a] = i, c.length = a + 1, u = i
            }

            function a(e, i) {
                var a = r(e),
                    s = a ? t(a) : 1,
                    o = n(s);
                a && e.removeChild(a), e.appendChild(i(e)), a && e.insertBefore(a, e.firstChild), o.appendChild(e), u = o
            }

            function s(e) {
                u.appendChild(e)
            }

            function o() {
                return l
            }
            var l = e.createDocumentFragment(),
                c = [l],
                u = l,
                p = /H[1-6]/;
            return {
                addHeader: i,
                addSection: a,
                addElement: s,
                getRoot: o
            }
        }
        return marked.setOptions({
            gfm: !1,
            pedantic: !1,
            sanitize: !1
        }), {
            toHTML: function(e) {
                return e = e.replace(/&gt;/g, ">"), e = this.removeLeftPadding(e), marked(e)
            },
            removeLeftPadding: function(e) {
                var t, n, r = e.match(/\n[ ]+\S/g);
                if (r) {
                    n = r[0].length - 2;
                    for (var i = 0, a = r.length; a > i; i++) t = r[i].length - 2, ("undefined" == typeof n || n > t) && (n = t);
                    var s = new RegExp("\n[ ]{0," + n + "}", "g");
                    e = e.replace(s, "\n")
                }
                return e
            },
            processBody: function(e) {
                var t, n = e.createDocumentFragment(),
                    r = e.createElement("div");
                for (r.innerHTML = this.toHTML(e.body.innerHTML); t = r.firstChild;) n.appendChild(t);
                return n
            },
            processSections: function(e) {
                var t = this;
                $("section", e).each(function() {
                    this.innerHTML = t.toHTML(this.innerHTML)
                })
            },
            processIssuesNotesAndReqs: function(e) {
                var t = e.createElement("div"),
                    n = this;
                $(".issue, .note, .req", e).each(function() {
                    t.innerHTML = n.toHTML(this.innerHTML), this.innerHTML = "";
                    for (var e = t.firstChild; e.firstChild;) this.appendChild(e.firstChild)
                })
            },
            structure: function(t, n) {
                function r(t) {
                    for (var i, a, s = e(n); i = t.firstChild;)
                        if (1 === i.nodeType) switch (a = i.tagName.toLowerCase()) {
                            case "h1":
                            case "h2":
                            case "h3":
                            case "h4":
                            case "h5":
                            case "h6":
                                s.addHeader(i);
                                break;
                            case "section":
                                s.addSection(i, r);
                                break;
                            default:
                                s.addElement(i)
                        } else t.removeChild(i);
                    return s.getRoot()
                }
                return r(t)
            },
            run: function(e, t, n, r) {
                if (r.pub("start", "core/markdown"), "markdown" === e.format) {
                    this.processSections(t);
                    var i = $("#respec-ui"),
                        a = this.structure(this.processBody(t), t);
                    t.body.innerHTML = "", t.body.appendChild(a), i.length && $("#respec-ui").replaceWith(i)
                }
                r.pub("end", "core/markdown"), n()
            }
        }
    }),
    function() {
        var e = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
            t = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
            n = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
            r = "undefined" != typeof location && location.href,
            i = r && location.protocol && location.protocol.replace(/\:/, ""),
            a = r && location.hostname,
            s = r && (location.port || void 0),
            o = [];
        define("text", [], function() {
            var l, c;
            return l = {
                version: "1.0.8",
                strip: function(e) {
                    if (e) {
                        var e = e.replace(t, ""),
                            r = e.match(n);
                        r && (e = r[1])
                    } else e = "";
                    return e
                },
                jsEscape: function(e) {
                    return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r")
                },
                createXhr: function() {
                    var t, n, r;
                    if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
                    if ("undefined" != typeof ActiveXObject)
                        for (n = 0; 3 > n; n++) {
                            r = e[n];
                            try {
                                t = new ActiveXObject(r)
                            } catch (i) {}
                            if (t) {
                                e = [r];
                                break
                            }
                        }
                    return t
                },
                parseName: function(e) {
                    var t = !1,
                        n = e.indexOf("."),
                        r = e.substring(0, n),
                        e = e.substring(n + 1, e.length),
                        n = e.indexOf("!");
                    return -1 !== n && (t = e.substring(n + 1, e.length), t = "strip" === t, e = e.substring(0, n)), {
                        moduleName: r,
                        ext: e,
                        strip: t
                    }
                },
                xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
                useXhr: function(e, t, n, r) {
                    var i, a = l.xdRegExp.exec(e);
                    return a ? (e = a[2], a = a[3], a = a.split(":"), i = a[1], a = a[0], !(e && e !== t || a && a !== n || (i || a) && i !== r)) : !0
                },
                finishLoad: function(e, t, n, r, i) {
                    n = t ? l.strip(n) : n, i.isBuild && (o[e] = n), r(n)
                },
                load: function(e, t, n, o) {
                    if (o.isBuild && !o.inlineText) n();
                    else {
                        var c = l.parseName(e),
                            u = c.moduleName + "." + c.ext,
                            p = t.toUrl(u),
                            d = o && o.text && o.text.useXhr || l.useXhr;
                        !r || d(p, i, a, s) ? l.get(p, function(t) {
                            l.finishLoad(e, c.strip, t, n, o)
                        }) : t([u], function(e) {
                            l.finishLoad(c.moduleName + "." + c.ext, c.strip, e, n, o)
                        })
                    }
                },
                write: function(e, t, n) {
                    if (o.hasOwnProperty(t)) {
                        var r = l.jsEscape(o[t]);
                        n.asModule(e + "!" + t, "define(function () { return '" + r + "';});\n")
                    }
                },
                writeFile: function(e, t, n, r, i) {
                    var t = l.parseName(t),
                        a = t.moduleName + "." + t.ext,
                        s = n.toUrl(t.moduleName + "." + t.ext) + ".js";
                    l.load(a, n, function() {
                        var t = function(e) {
                            return r(s, e)
                        };
                        t.asModule = function(e, t) {
                            return r.asModule(e, s, t)
                        }, l.write(e, a, t, i)
                    }, i)
                }
            }, l.createXhr() ? l.get = function(e, t) {
                var n = l.createXhr();
                n.open("GET", e, !0), n.onreadystatechange = function() {
                    4 === n.readyState && t(n.responseText)
                }, n.send(null)
            } : "undefined" != typeof process && process.versions && process.versions.node ? (c = require.nodeRequire("fs"), l.get = function(e, t) {
                var n = c.readFileSync(e, "utf8");
                0 === n.indexOf("ï»¿") && (n = n.substring(1)), t(n)
            }) : "undefined" != typeof Packages && (l.get = function(e, t) {
                var n, r, i = new java.io.File(e),
                    a = java.lang.System.getProperty("line.separator"),
                    i = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(i), "utf-8")),
                    s = "";
                try {
                    for (n = new java.lang.StringBuffer, (r = i.readLine()) && r.length() && 65279 === r.charAt(0) && (r = r.substring(1)), n.append(r); null !== (r = i.readLine());) n.append(a), n.append(r);
                    s = String(n.toString())
                } finally {
                    i.close()
                }
                t(s)
            }), l
        })
    }(), define("text!core/css/respec2.css", [], function() {
        return '/*****************************************************************\n * ReSpec 3 CSS\n * Robin Berjon - http://berjon.com/\n *****************************************************************/\n\n/* --- INLINES --- */\nem.rfc2119 { \n    text-transform:     lowercase;\n    font-variant:       small-caps;\n    font-style:         normal;\n    color:              #900;\n}\n\nh1 acronym, h2 acronym, h3 acronym, h4 acronym, h5 acronym, h6 acronym, a acronym,\nh1 abbr, h2 abbr, h3 abbr, h4 abbr, h5 abbr, h6 abbr, a abbr {\n    border: none;\n}\n\ndfn {\n    font-weight:    bold;\n}\n\na.internalDFN {\n    color:  inherit;\n    border-bottom:  1px solid #99c;\n    text-decoration:    none;\n}\n\na.externalDFN {\n    color:  inherit;\n    border-bottom:  1px dotted #ccc;\n    text-decoration:    none;\n}\n\na.bibref {\n    text-decoration:    none;\n}\n\ncite .bibref {\n    font-style: normal;\n}\n\ncode {\n    color:  #C83500;\n}\n\n/* --- TOC --- */\n.toc a, .tof a {\n    text-decoration:    none;\n}\n\na .secno, a .figno {\n    color:  #000;\n}\n\nul.tof, ol.tof {\n    list-style: none outside none;\n}\n\n.caption {\n    margin-top: 0.5em;\n    font-style:   italic;\n}\n\n/* --- TABLE --- */\ntable.simple {\n    border-spacing: 0;\n    border-collapse:    collapse;\n    border-bottom:  3px solid #005a9c;\n}\n\n.simple th {\n    background: #005a9c;\n    color:  #fff;\n    padding:    3px 5px;\n    text-align: left;\n}\n\n.simple th[scope="row"] {\n    background: inherit;\n    color:  inherit;\n    border-top: 1px solid #ddd;\n}\n\n.simple td {\n    padding:    3px 10px;\n    border-top: 1px solid #ddd;\n}\n\n.simple tr:nth-child(even) {\n    background: #f0f6ff;\n}\n\n/* --- DL --- */\n.section dd > p:first-child {\n    margin-top: 0;\n}\n\n.section dd > p:last-child {\n    margin-bottom: 0;\n}\n\n.section dd {\n    margin-bottom:  1em;\n}\n\n.section dl.attrs dd, .section dl.eldef dd {\n    margin-bottom:  0;\n}\n\n@media print {\n    .removeOnSave {\n        display: none;\n    }\n}\n'
    }), define("core/style", ["text!core/css/respec2.css"], function(e) {
        return {
            run: function(t, n, r, i) {
                i.pub("start", "core/style"), t.extraCSS && i.pub("warn", "The 'extraCSS' configuration property is now deprecated."), t.noReSpecCSS || $("<style/>").appendTo($("head", $(n))).text(e), i.pub("end", "core/style"), r()
            }
        }
    }), define("core/utils", ["jquery"], function(e) {
        e.fn.renameElement = function(t) {
            var n = [];
            return this.each(function() {
                for (var r = e(this.ownerDocument.createElement(t)), i = 0, a = this.attributes.length; a > i; i++) {
                    var s = this.attributes[i];
                    r[0].setAttributeNS(s.namespaceURI, s.name, s.value)
                }
                e(this).contents().appendTo(r), e(this).replaceWith(r), n.push(r[0])
            }), e(n)
        }, e.fn.dfnTitle = function() {
            var e;
            return e = this.attr("title") ? this.attr("title") : 1 == this.contents().length && 1 == this.children("abbr, acronym").length && this.find(":first-child").attr("title") ? this.find(":first-child").attr("title") : this.text(), e.toLowerCase().replace(/^\s+/, "").replace(/\s+$/, "").split(/\s+/).join(" ")
        }, e.fn.makeID = function(t, n, r) {
            if (this.attr("id")) return this.attr("id");
            n || (n = this.attr("title") ? this.attr("title") : this.text()), n = n.replace(/^\s+/, "").replace(/\s+$/, "");
            var i = r ? n : n.toLowerCase();
            i = i.split(/[^\-.0-9a-z_]+/i).join("-").replace(/^-+/, "").replace(/-+$/, ""), /\.$/.test(i) && (i += "x"), i.length > 0 && /^[^a-z]/i.test(i) && (i = "x" + i), 0 === i.length && (i = "generatedID"), t && (i = t + "-" + i);
            var a = 1,
                s = this[0].ownerDocument;
            if (e("#" + i, s).length) {
                for (; e("#" + i + "-" + a, s).length;) a++;
                i += "-" + a
            }
            return this.attr("id", i), i
        }, e.fn.allTextNodes = function(e) {
            function t(e) {
                if (1 !== e.nodeType || !r[e.localName.toLowerCase()])
                    if (3 === e.nodeType) n.push(e);
                    else
                        for (var i = 0, a = e.childNodes.length; a > i; ++i) t(e.childNodes[i])
            }
            for (var n = [], r = {}, i = 0, a = e.length; a > i; i++) r[e[i]] = !0;
            return t(this[0]), n
        };
        var t = {
            run: function(e, t, n, r) {
                r.pub("start", "core/utils"), r.pub("end", "core/utils"), n()
            },
            removeReSpec: function(t) {
                e(".remove, script[data-requiremodule]", t).remove()
            },
            joinAnd: function(e, t) {
                if (!e || !e.length) return "";
                t = t || function(e) {
                    return e
                };
                var n = "";
                if (1 === e.length) return t(e[0], 0);
                for (var r = 0, i = e.length; i > r; r++) r > 0 && (n += 2 === i ? " " : ", ", r == i - 1 && (n += "and ")), n += t(e[r], r);
                return n
            },
            xmlEscape: function(e) {
                return e.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/</g, "&lt;")
            },
            norm: function(e) {
                return e.replace(/^\s+/, "").replace(/\s+$/, "").split(/\s+/).join(" ")
            },
            concatDate: function(e, t) {
                return t || (t = ""), "" + e.getFullYear() + t + this.lead0(e.getMonth() + 1) + t + this.lead0(e.getDate())
            },
            lead0: function(e) {
                return e = "" + e, 1 == e.length ? "0" + e : e
            },
            parseSimpleDate: function(e) {
                return new Date(e.substr(0, 4), e.substr(5, 2) - 1, e.substr(8, 2))
            },
            parseLastModified: function(e) {
                return e ? new Date(Date.parse(e)) : new Date
            },
            humanMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            humanDate: function(e) {
                return e instanceof Date || (e = this.parseSimpleDate(e)), this.lead0(e.getDate()) + " " + this.humanMonths[e.getMonth()] + " " + e.getFullYear()
            },
            isoDate: function(e) {
                return e instanceof Date || (e = this.parseSimpleDate(e)), e.toISOString()
            },
            linkCSS: function(t, n) {
                e.isArray(n) || (n = [n]), e.each(n, function(n, r) {
                    e("head", t).append(e("<link/>").attr({
                        rel: "stylesheet",
                        href: r
                    }))
                })
            },
            runTransforms: function(e, t) {
                var n = [this, e],
                    r = Array.prototype.slice.call(arguments);
                if (r.shift(), r.shift(), n = n.concat(r), t)
                    for (var i = t.split(/\s+/), a = 0; a < i.length; a++) {
                        var s = i[a];
                        if (window[s]) try {
                            e = window[s].apply(this, n)
                        } catch (o) {
                            respecEvents.pub("warn", "call to " + s + "() failed with " + o)
                        }
                    }
                return e
            }
        };
        return t
    }), define("w3c/style", ["core/utils"], function(e) {
        return {
            run: function(t, n, r, i) {
                i.pub("start", "w3c/style"), t.specStatus || i.pub("error", "Configuration 'specStatus' is not set, required for w3c/style");
                var a = t.specStatus;
                ("FPWD" === a || "LC" === a || "WD-NOTE" === a || "LC-NOTE" === a) && (a = "WD"), "FPWD-NOTE" === a && (a = "WG-NOTE"), ("finding" === a || "draft-finding" === a) && (a = "base");
                var s = "https://";
                s += "unofficial" === a ? "www.w3.org/StyleSheets/TR/w3c-unofficial" : "base" === a ? "www.w3.org/StyleSheets/TR/base" : "CG-DRAFT" === a || "CG-FINAL" === a || "BG-DRAFT" === a || "BG-FINAL" === a ? "www.w3.org/community/src/css/spec/" + a.toLowerCase() + ".css" : "www.w3.org/StyleSheets/TR/W3C-" + a, e.linkCSS(n, s), i.pub("end", "w3c/style"), r()
            }
        }
    });
var Handlebars = {};
Handlebars.VERSION = "1.0.beta.6", Handlebars.helpers = {}, Handlebars.partials = {}, Handlebars.registerHelper = function(e, t, n) {
    n && (t.not = n), this.helpers[e] = t
}, Handlebars.registerPartial = function(e, t) {
    this.partials[e] = t
}, Handlebars.registerHelper("helperMissing", function(e) {
    if (2 === arguments.length) return void 0;
    throw new Error("Could not find property '" + e + "'")
});
var toString = Object.prototype.toString,
    functionType = "[object Function]";
Handlebars.registerHelper("blockHelperMissing", function(e, t) {
    var n = t.inverse || function() {},
        r = t.fn,
        i = "",
        a = toString.call(e);
    if (a === functionType && (e = e.call(this)), e === !0) return r(this);
    if (e === !1 || null == e) return n(this);
    if ("[object Array]" === a) {
        if (e.length > 0)
            for (var s = 0, o = e.length; o > s; s++) i += r(e[s]);
        else i = n(this);
        return i
    }
    return r(e)
}), Handlebars.registerHelper("each", function(e, t) {
    var n = t.fn,
        r = t.inverse,
        i = "";
    if (e && e.length > 0)
        for (var a = 0, s = e.length; s > a; a++) i += n(e[a]);
    else i = r(this);
    return i
}), Handlebars.registerHelper("if", function(e, t) {
    var n = toString.call(e);
    return n === functionType && (e = e.call(this)), !e || Handlebars.Utils.isEmpty(e) ? t.inverse(this) : t.fn(this)
}), Handlebars.registerHelper("unless", function(e, t) {
    var n = t.fn,
        r = t.inverse;
    return t.fn = r, t.inverse = n, Handlebars.helpers["if"].call(this, e, t)
}), Handlebars.registerHelper("with", function(e, t) {
    return t.fn(e)
}), Handlebars.registerHelper("log", function(e) {
    Handlebars.log(e)
});
var handlebars = function() {
    var e = {
            trace: function() {},
            yy: {},
            symbols_: {
                error: 2,
                root: 3,
                program: 4,
                EOF: 5,
                statements: 6,
                simpleInverse: 7,
                statement: 8,
                openInverse: 9,
                closeBlock: 10,
                openBlock: 11,
                mustache: 12,
                partial: 13,
                CONTENT: 14,
                COMMENT: 15,
                OPEN_BLOCK: 16,
                inMustache: 17,
                CLOSE: 18,
                OPEN_INVERSE: 19,
                OPEN_ENDBLOCK: 20,
                path: 21,
                OPEN: 22,
                OPEN_UNESCAPED: 23,
                OPEN_PARTIAL: 24,
                params: 25,
                hash: 26,
                param: 27,
                STRING: 28,
                INTEGER: 29,
                BOOLEAN: 30,
                hashSegments: 31,
                hashSegment: 32,
                ID: 33,
                EQUALS: 34,
                pathSegments: 35,
                SEP: 36,
                $accept: 0,
                $end: 1
            },
            terminals_: {
                2: "error",
                5: "EOF",
                14: "CONTENT",
                15: "COMMENT",
                16: "OPEN_BLOCK",
                18: "CLOSE",
                19: "OPEN_INVERSE",
                20: "OPEN_ENDBLOCK",
                22: "OPEN",
                23: "OPEN_UNESCAPED",
                24: "OPEN_PARTIAL",
                28: "STRING",
                29: "INTEGER",
                30: "BOOLEAN",
                33: "ID",
                34: "EQUALS",
                36: "SEP"
            },
            productions_: [0, [3, 2],
                [4, 3],
                [4, 1],
                [4, 0],
                [6, 1],
                [6, 2],
                [8, 3],
                [8, 3],
                [8, 1],
                [8, 1],
                [8, 1],
                [8, 1],
                [11, 3],
                [9, 3],
                [10, 3],
                [12, 3],
                [12, 3],
                [13, 3],
                [13, 4],
                [7, 2],
                [17, 3],
                [17, 2],
                [17, 2],
                [17, 1],
                [25, 2],
                [25, 1],
                [27, 1],
                [27, 1],
                [27, 1],
                [27, 1],
                [26, 1],
                [31, 2],
                [31, 1],
                [32, 3],
                [32, 3],
                [32, 3],
                [32, 3],
                [21, 1],
                [35, 3],
                [35, 1]
            ],
            performAction: function(e, t, n, r, i, a) {
                var s = a.length - 1;
                switch (i) {
                    case 1:
                        return a[s - 1];
                    case 2:
                        this.$ = new r.ProgramNode(a[s - 2], a[s]);
                        break;
                    case 3:
                        this.$ = new r.ProgramNode(a[s]);
                        break;
                    case 4:
                        this.$ = new r.ProgramNode([]);
                        break;
                    case 5:
                        this.$ = [a[s]];
                        break;
                    case 6:
                        a[s - 1].push(a[s]), this.$ = a[s - 1];
                        break;
                    case 7:
                        this.$ = new r.InverseNode(a[s - 2], a[s - 1], a[s]);
                        break;
                    case 8:
                        this.$ = new r.BlockNode(a[s - 2], a[s - 1], a[s]);
                        break;
                    case 9:
                        this.$ = a[s];
                        break;
                    case 10:
                        this.$ = a[s];
                        break;
                    case 11:
                        this.$ = new r.ContentNode(a[s]);
                        break;
                    case 12:
                        this.$ = new r.CommentNode(a[s]);
                        break;
                    case 13:
                        this.$ = new r.MustacheNode(a[s - 1][0], a[s - 1][1]);
                        break;
                    case 14:
                        this.$ = new r.MustacheNode(a[s - 1][0], a[s - 1][1]);
                        break;
                    case 15:
                        this.$ = a[s - 1];
                        break;
                    case 16:
                        this.$ = new r.MustacheNode(a[s - 1][0], a[s - 1][1]);
                        break;
                    case 17:
                        this.$ = new r.MustacheNode(a[s - 1][0], a[s - 1][1], !0);
                        break;
                    case 18:
                        this.$ = new r.PartialNode(a[s - 1]);
                        break;
                    case 19:
                        this.$ = new r.PartialNode(a[s - 2], a[s - 1]);
                        break;
                    case 20:
                        break;
                    case 21:
                        this.$ = [
                            [a[s - 2]].concat(a[s - 1]), a[s]
                        ];
                        break;
                    case 22:
                        this.$ = [
                            [a[s - 1]].concat(a[s]), null
                        ];
                        break;
                    case 23:
                        this.$ = [
                            [a[s - 1]], a[s]
                        ];
                        break;
                    case 24:
                        this.$ = [
                            [a[s]], null
                        ];
                        break;
                    case 25:
                        a[s - 1].push(a[s]), this.$ = a[s - 1];
                        break;
                    case 26:
                        this.$ = [a[s]];
                        break;
                    case 27:
                        this.$ = a[s];
                        break;
                    case 28:
                        this.$ = new r.StringNode(a[s]);
                        break;
                    case 29:
                        this.$ = new r.IntegerNode(a[s]);
                        break;
                    case 30:
                        this.$ = new r.BooleanNode(a[s]);
                        break;
                    case 31:
                        this.$ = new r.HashNode(a[s]);
                        break;
                    case 32:
                        a[s - 1].push(a[s]), this.$ = a[s - 1];
                        break;
                    case 33:
                        this.$ = [a[s]];
                        break;
                    case 34:
                        this.$ = [a[s - 2], a[s]];
                        break;
                    case 35:
                        this.$ = [a[s - 2], new r.StringNode(a[s])];
                        break;
                    case 36:
                        this.$ = [a[s - 2], new r.IntegerNode(a[s])];
                        break;
                    case 37:
                        this.$ = [a[s - 2], new r.BooleanNode(a[s])];
                        break;
                    case 38:
                        this.$ = new r.IdNode(a[s]);
                        break;
                    case 39:
                        a[s - 2].push(a[s]), this.$ = a[s - 2];
                        break;
                    case 40:
                        this.$ = [a[s]]
                }
            },
            table: [{
                3: 1,
                4: 2,
                5: [2, 4],
                6: 3,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                1: [3]
            }, {
                5: [1, 16]
            }, {
                5: [2, 3],
                7: 17,
                8: 18,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 19],
                20: [2, 3],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                5: [2, 5],
                14: [2, 5],
                15: [2, 5],
                16: [2, 5],
                19: [2, 5],
                20: [2, 5],
                22: [2, 5],
                23: [2, 5],
                24: [2, 5]
            }, {
                4: 20,
                6: 3,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 4],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                4: 21,
                6: 3,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 4],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                5: [2, 9],
                14: [2, 9],
                15: [2, 9],
                16: [2, 9],
                19: [2, 9],
                20: [2, 9],
                22: [2, 9],
                23: [2, 9],
                24: [2, 9]
            }, {
                5: [2, 10],
                14: [2, 10],
                15: [2, 10],
                16: [2, 10],
                19: [2, 10],
                20: [2, 10],
                22: [2, 10],
                23: [2, 10],
                24: [2, 10]
            }, {
                5: [2, 11],
                14: [2, 11],
                15: [2, 11],
                16: [2, 11],
                19: [2, 11],
                20: [2, 11],
                22: [2, 11],
                23: [2, 11],
                24: [2, 11]
            }, {
                5: [2, 12],
                14: [2, 12],
                15: [2, 12],
                16: [2, 12],
                19: [2, 12],
                20: [2, 12],
                22: [2, 12],
                23: [2, 12],
                24: [2, 12]
            }, {
                17: 22,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                17: 26,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                17: 27,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                17: 28,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                21: 29,
                33: [1, 25],
                35: 24
            }, {
                1: [2, 1]
            }, {
                6: 30,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                5: [2, 6],
                14: [2, 6],
                15: [2, 6],
                16: [2, 6],
                19: [2, 6],
                20: [2, 6],
                22: [2, 6],
                23: [2, 6],
                24: [2, 6]
            }, {
                17: 22,
                18: [1, 31],
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                10: 32,
                20: [1, 33]
            }, {
                10: 34,
                20: [1, 33]
            }, {
                18: [1, 35]
            }, {
                18: [2, 24],
                21: 40,
                25: 36,
                26: 37,
                27: 38,
                28: [1, 41],
                29: [1, 42],
                30: [1, 43],
                31: 39,
                32: 44,
                33: [1, 45],
                35: 24
            }, {
                18: [2, 38],
                28: [2, 38],
                29: [2, 38],
                30: [2, 38],
                33: [2, 38],
                36: [1, 46]
            }, {
                18: [2, 40],
                28: [2, 40],
                29: [2, 40],
                30: [2, 40],
                33: [2, 40],
                36: [2, 40]
            }, {
                18: [1, 47]
            }, {
                18: [1, 48]
            }, {
                18: [1, 49]
            }, {
                18: [1, 50],
                21: 51,
                33: [1, 25],
                35: 24
            }, {
                5: [2, 2],
                8: 18,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 2],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                14: [2, 20],
                15: [2, 20],
                16: [2, 20],
                19: [2, 20],
                22: [2, 20],
                23: [2, 20],
                24: [2, 20]
            }, {
                5: [2, 7],
                14: [2, 7],
                15: [2, 7],
                16: [2, 7],
                19: [2, 7],
                20: [2, 7],
                22: [2, 7],
                23: [2, 7],
                24: [2, 7]
            }, {
                21: 52,
                33: [1, 25],
                35: 24
            }, {
                5: [2, 8],
                14: [2, 8],
                15: [2, 8],
                16: [2, 8],
                19: [2, 8],
                20: [2, 8],
                22: [2, 8],
                23: [2, 8],
                24: [2, 8]
            }, {
                14: [2, 14],
                15: [2, 14],
                16: [2, 14],
                19: [2, 14],
                20: [2, 14],
                22: [2, 14],
                23: [2, 14],
                24: [2, 14]
            }, {
                18: [2, 22],
                21: 40,
                26: 53,
                27: 54,
                28: [1, 41],
                29: [1, 42],
                30: [1, 43],
                31: 39,
                32: 44,
                33: [1, 45],
                35: 24
            }, {
                18: [2, 23]
            }, {
                18: [2, 26],
                28: [2, 26],
                29: [2, 26],
                30: [2, 26],
                33: [2, 26]
            }, {
                18: [2, 31],
                32: 55,
                33: [1, 56]
            }, {
                18: [2, 27],
                28: [2, 27],
                29: [2, 27],
                30: [2, 27],
                33: [2, 27]
            }, {
                18: [2, 28],
                28: [2, 28],
                29: [2, 28],
                30: [2, 28],
                33: [2, 28]
            }, {
                18: [2, 29],
                28: [2, 29],
                29: [2, 29],
                30: [2, 29],
                33: [2, 29]
            }, {
                18: [2, 30],
                28: [2, 30],
                29: [2, 30],
                30: [2, 30],
                33: [2, 30]
            }, {
                18: [2, 33],
                33: [2, 33]
            }, {
                18: [2, 40],
                28: [2, 40],
                29: [2, 40],
                30: [2, 40],
                33: [2, 40],
                34: [1, 57],
                36: [2, 40]
            }, {
                33: [1, 58]
            }, {
                14: [2, 13],
                15: [2, 13],
                16: [2, 13],
                19: [2, 13],
                20: [2, 13],
                22: [2, 13],
                23: [2, 13],
                24: [2, 13]
            }, {
                5: [2, 16],
                14: [2, 16],
                15: [2, 16],
                16: [2, 16],
                19: [2, 16],
                20: [2, 16],
                22: [2, 16],
                23: [2, 16],
                24: [2, 16]
            }, {
                5: [2, 17],
                14: [2, 17],
                15: [2, 17],
                16: [2, 17],
                19: [2, 17],
                20: [2, 17],
                22: [2, 17],
                23: [2, 17],
                24: [2, 17]
            }, {
                5: [2, 18],
                14: [2, 18],
                15: [2, 18],
                16: [2, 18],
                19: [2, 18],
                20: [2, 18],
                22: [2, 18],
                23: [2, 18],
                24: [2, 18]
            }, {
                18: [1, 59]
            }, {
                18: [1, 60]
            }, {
                18: [2, 21]
            }, {
                18: [2, 25],
                28: [2, 25],
                29: [2, 25],
                30: [2, 25],
                33: [2, 25]
            }, {
                18: [2, 32],
                33: [2, 32]
            }, {
                34: [1, 57]
            }, {
                21: 61,
                28: [1, 62],
                29: [1, 63],
                30: [1, 64],
                33: [1, 25],
                35: 24
            }, {
                18: [2, 39],
                28: [2, 39],
                29: [2, 39],
                30: [2, 39],
                33: [2, 39],
                36: [2, 39]
            }, {
                5: [2, 19],
                14: [2, 19],
                15: [2, 19],
                16: [2, 19],
                19: [2, 19],
                20: [2, 19],
                22: [2, 19],
                23: [2, 19],
                24: [2, 19]
            }, {
                5: [2, 15],
                14: [2, 15],
                15: [2, 15],
                16: [2, 15],
                19: [2, 15],
                20: [2, 15],
                22: [2, 15],
                23: [2, 15],
                24: [2, 15]
            }, {
                18: [2, 34],
                33: [2, 34]
            }, {
                18: [2, 35],
                33: [2, 35]
            }, {
                18: [2, 36],
                33: [2, 36]
            }, {
                18: [2, 37],
                33: [2, 37]
            }],
            defaultActions: {
                16: [2, 1],
                37: [2, 23],
                53: [2, 21]
            },
            parseError: function(e) {
                throw new Error(e)
            },
            parse: function(e) {
                function t() {
                    var e;
                    return e = n.lexer.lex() || 1, "number" != typeof e && (e = n.symbols_[e] || e), e
                }
                var n = this,
                    r = [0],
                    i = [null],
                    a = [],
                    s = this.table,
                    o = "",
                    l = 0,
                    c = 0,
                    u = 0;
                this.lexer.setInput(e), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                var p = this.lexer.yylloc;
                a.push(p), "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                for (var d, f, h, m, g, b, v, y, x, w = {};;) {
                    if (h = r[r.length - 1], this.defaultActions[h] ? m = this.defaultActions[h] : (null == d && (d = t()), m = s[h] && s[h][d]), !("undefined" != typeof m && m.length && m[0] || u)) {
                        x = [];
                        for (b in s[h]) this.terminals_[b] && b > 2 && x.push("'" + this.terminals_[b] + "'");
                        var C = "";
                        C = this.lexer.showPosition ? "Parse error on line " + (l + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + x.join(", ") + ", got '" + this.terminals_[d] + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (1 == d ? "end of input" : "'" + (this.terminals_[d] || d) + "'"), this.parseError(C, {
                            text: this.lexer.match,
                            token: this.terminals_[d] || d,
                            line: this.lexer.yylineno,
                            loc: p,
                            expected: x
                        })
                    }
                    if (m[0] instanceof Array && m.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + h + ", token: " + d);
                    switch (m[0]) {
                        case 1:
                            r.push(d), i.push(this.lexer.yytext), a.push(this.lexer.yylloc), r.push(m[1]), d = null, f ? (d = f, f = null) : (c = this.lexer.yyleng, o = this.lexer.yytext, l = this.lexer.yylineno, p = this.lexer.yylloc, u > 0 && u--);
                            break;
                        case 2:
                            if (v = this.productions_[m[1]][1], w.$ = i[i.length - v], w._$ = {
                                    first_line: a[a.length - (v || 1)].first_line,
                                    last_line: a[a.length - 1].last_line,
                                    first_column: a[a.length - (v || 1)].first_column,
                                    last_column: a[a.length - 1].last_column
                                }, g = this.performAction.call(w, o, c, l, this.yy, m[1], i, a), "undefined" != typeof g) return g;
                            v && (r = r.slice(0, 2 * -1 * v), i = i.slice(0, -1 * v), a = a.slice(0, -1 * v)), r.push(this.productions_[m[1]][0]), i.push(w.$), a.push(w._$), y = s[r[r.length - 2]][r[r.length - 1]], r.push(y);
                            break;
                        case 3:
                            return !0
                    }
                }
                return !0
            }
        },
        t = function() {
            var e = {
                EOF: 1,
                parseError: function(e, t) {
                    if (!this.yy.parseError) throw new Error(e);
                    this.yy.parseError(e, t)
                },
                setInput: function(e) {
                    return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0
                    }, this
                },
                input: function() {
                    var e = this._input[0];
                    this.yytext += e, this.yyleng++, this.match += e, this.matched += e;
                    var t = e.match(/\n/);
                    return t && this.yylineno++, this._input = this._input.slice(1), e
                },
                unput: function(e) {
                    return this._input = e + this._input, this
                },
                more: function() {
                    return this._more = !0, this
                },
                pastInput: function() {
                    var e = this.matched.substr(0, this.matched.length - this.match.length);
                    return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
                },
                upcomingInput: function() {
                    var e = this.match;
                    return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
                },
                showPosition: function() {
                    var e = this.pastInput(),
                        t = new Array(e.length + 1).join("-");
                    return e + this.upcomingInput() + "\n" + t + "^"
                },
                next: function() {
                    if (this.done) return this.EOF;
                    this._input || (this.done = !0);
                    var e, t, n;
                    this._more || (this.yytext = "", this.match = "");
                    for (var r = this._currentRules(), i = 0; i < r.length; i++)
                        if (t = this._input.match(this.rules[r[i]])) return n = t[0].match(/\n.*/g), n && (this.yylineno += n.length), this.yylloc = {
                            first_line: this.yylloc.last_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.last_column,
                            last_column: n ? n[n.length - 1].length - 1 : this.yylloc.last_column + t[0].length
                        }, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, r[i], this.conditionStack[this.conditionStack.length - 1]), e ? e : void 0;
                    return "" === this._input ? this.EOF : (this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    }), void 0)
                },
                lex: function() {
                    var e = this.next();
                    return "undefined" != typeof e ? e : this.lex()
                },
                begin: function(e) {
                    this.conditionStack.push(e)
                },
                popState: function() {
                    return this.conditionStack.pop()
                },
                _currentRules: function() {
                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                },
                topState: function() {
                    return this.conditionStack[this.conditionStack.length - 2]
                },
                pushState: function(e) {
                    this.begin(e)
                }
            };
            return e.performAction = function(e, t, n, r) {
                switch (n) {
                    case 0:
                        if ("\\" !== t.yytext.slice(-1) && this.begin("mu"), "\\" === t.yytext.slice(-1) && (t.yytext = t.yytext.substr(0, t.yyleng - 1), this.begin("emu")), t.yytext) return 14;
                        break;
                    case 1:
                        return 14;
                    case 2:
                        return this.popState(), 14;
                    case 3:
                        return 24;
                    case 4:
                        return 16;
                    case 5:
                        return 20;
                    case 6:
                        return 19;
                    case 7:
                        return 19;
                    case 8:
                        return 23;
                    case 9:
                        return 23;
                    case 10:
                        return t.yytext = t.yytext.substr(3, t.yyleng - 5), this.popState(), 15;
                    case 11:
                        return 22;
                    case 12:
                        return 34;
                    case 13:
                        return 33;
                    case 14:
                        return 33;
                    case 15:
                        return 36;
                    case 16:
                        break;
                    case 17:
                        return this.popState(), 18;
                    case 18:
                        return this.popState(), 18;
                    case 19:
                        return t.yytext = t.yytext.substr(1, t.yyleng - 2).replace(/\\"/g, '"'), 28;
                    case 20:
                        return 30;
                    case 21:
                        return 30;
                    case 22:
                        return 29;
                    case 23:
                        return 33;
                    case 24:
                        return t.yytext = t.yytext.substr(1, t.yyleng - 2), 33;
                    case 25:
                        return "INVALID";
                    case 26:
                        return 5
                }
            }, e.rules = [/^[^\x00]*?(?=(\{\{))/, /^[^\x00]+/, /^[^\x00]{2,}?(?=(\{\{))/, /^\{\{>/, /^\{\{#/, /^\{\{\//, /^\{\{\^/, /^\{\{\s*else\b/, /^\{\{\{/, /^\{\{&/, /^\{\{![\s\S]*?\}\}/, /^\{\{/, /^=/, /^\.(?=[} ])/, /^\.\./, /^[\/.]/, /^\s+/, /^\}\}\}/, /^\}\}/, /^"(\\["]|[^"])*"/, /^true(?=[}\s])/, /^false(?=[}\s])/, /^[0-9]+(?=[}\s])/, /^[a-zA-Z0-9_$-]+(?=[=}\s\/.])/, /^\[[^\]]*\]/, /^./, /^$/], e.conditions = {
                mu: {
                    rules: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                    inclusive: !1
                },
                emu: {
                    rules: [2],
                    inclusive: !1
                },
                INITIAL: {
                    rules: [0, 1, 26],
                    inclusive: !0
                }
            }, e
        }();
    return e.lexer = t, e
}();
"undefined" != typeof require && "undefined" != typeof exports && (exports.parser = handlebars, exports.parse = function() {
        return handlebars.parse.apply(handlebars, arguments)
    }, exports.main = function(e) {
        if (!e[1]) throw new Error("Usage: " + e[0] + " FILE");
        if ("undefined" != typeof process) var t = require("fs").readFileSync(require("path").join(process.cwd(), e[1]), "utf8");
        else var n = require("file").path(require("file").cwd()),
            t = n.join(e[1]).read({
                charset: "utf-8"
            });
        return exports.parser.parse(t)
    }, "undefined" != typeof module && require.main === module && exports.main("undefined" != typeof process ? process.argv.slice(1) : require("system").args)), Handlebars.Parser = handlebars, Handlebars.parse = function(e) {
        return Handlebars.Parser.yy = Handlebars.AST, Handlebars.Parser.parse(e)
    }, Handlebars.print = function(e) {
        return (new Handlebars.PrintVisitor).accept(e)
    }, Handlebars.logger = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 3,
        log: function() {}
    }, Handlebars.log = function(e, t) {
        Handlebars.logger.log(e, t)
    },
    function() {
        Handlebars.AST = {}, Handlebars.AST.ProgramNode = function(e, t) {
            this.type = "program", this.statements = e, t && (this.inverse = new Handlebars.AST.ProgramNode(t))
        }, Handlebars.AST.MustacheNode = function(e, t, n) {
            this.type = "mustache", this.id = e[0], this.params = e.slice(1), this.hash = t, this.escaped = !n
        }, Handlebars.AST.PartialNode = function(e, t) {
            this.type = "partial", this.id = e, this.context = t
        };
        var e = function(e, t) {
            if (e.original !== t.original) throw new Handlebars.Exception(e.original + " doesn't match " + t.original)
        };
        Handlebars.AST.BlockNode = function(t, n, r) {
            e(t.id, r), this.type = "block", this.mustache = t, this.program = n
        }, Handlebars.AST.InverseNode = function(t, n, r) {
            e(t.id, r), this.type = "inverse", this.mustache = t, this.program = n
        }, Handlebars.AST.ContentNode = function(e) {
            this.type = "content", this.string = e
        }, Handlebars.AST.HashNode = function(e) {
            this.type = "hash", this.pairs = e
        }, Handlebars.AST.IdNode = function(e) {
            this.type = "ID", this.original = e.join(".");
            for (var t = [], n = 0, r = 0, i = e.length; i > r; r++) {
                var a = e[r];
                ".." === a ? n++ : "." === a || "this" === a ? this.isScoped = !0 : t.push(a)
            }
            this.parts = t, this.string = t.join("."), this.depth = n, this.isSimple = 1 === t.length && 0 === n
        }, Handlebars.AST.StringNode = function(e) {
            this.type = "STRING", this.string = e
        }, Handlebars.AST.IntegerNode = function(e) {
            this.type = "INTEGER", this.integer = e
        }, Handlebars.AST.BooleanNode = function(e) {
            this.type = "BOOLEAN", this.bool = e
        }, Handlebars.AST.CommentNode = function(e) {
            this.type = "comment", this.comment = e
        }
    }(), Handlebars.Exception = function() {
        var e = Error.prototype.constructor.apply(this, arguments);
        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
        this.message = e.message
    }, Handlebars.Exception.prototype = new Error, Handlebars.SafeString = function(e) {
        this.string = e
    }, Handlebars.SafeString.prototype.toString = function() {
        return this.string.toString()
    },
    function() {
        var e = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            t = /&(?!\w+;)|[<>"'`]/g,
            n = /[&<>"'`]/,
            r = function(t) {
                return e[t] || "&amp;"
            };
        Handlebars.Utils = {
            escapeExpression: function(e) {
                return e instanceof Handlebars.SafeString ? e.toString() : null == e || e === !1 ? "" : n.test(e) ? e.replace(t, r) : e
            },
            isEmpty: function(e) {
                return "undefined" == typeof e ? !0 : null === e ? !0 : e === !1 ? !0 : "[object Array]" === Object.prototype.toString.call(e) && 0 === e.length ? !0 : !1
            }
        }
    }(), Handlebars.Compiler = function() {}, Handlebars.JavaScriptCompiler = function() {},
    function(e, t) {
        e.OPCODE_MAP = {
            appendContent: 1,
            getContext: 2,
            lookupWithHelpers: 3,
            lookup: 4,
            append: 5,
            invokeMustache: 6,
            appendEscaped: 7,
            pushString: 8,
            truthyOrFallback: 9,
            functionOrFallback: 10,
            invokeProgram: 11,
            invokePartial: 12,
            push: 13,
            assignToHash: 15,
            pushStringParam: 16
        }, e.MULTI_PARAM_OPCODES = {
            appendContent: 1,
            getContext: 1,
            lookupWithHelpers: 2,
            lookup: 1,
            invokeMustache: 3,
            pushString: 1,
            truthyOrFallback: 1,
            functionOrFallback: 1,
            invokeProgram: 3,
            invokePartial: 1,
            push: 1,
            assignToHash: 1,
            pushStringParam: 1
        }, e.DISASSEMBLE_MAP = {};
        for (var n in e.OPCODE_MAP) {
            var r = e.OPCODE_MAP[n];
            e.DISASSEMBLE_MAP[r] = n
        }
        e.multiParamSize = function(t) {
            return e.MULTI_PARAM_OPCODES[e.DISASSEMBLE_MAP[t]]
        }, e.prototype = {
            compiler: e,
            disassemble: function() {
                for (var t, n, r, i, a, s = this.opcodes, o = [], l = 0, c = s.length; c > l; l++)
                    if (t = s[l], "DECLARE" === t) i = s[++l], a = s[++l], o.push("DECLARE " + i + " = " + a);
                    else {
                        r = e.DISASSEMBLE_MAP[t];
                        for (var u = e.multiParamSize(t), p = [], d = 0; u > d; d++) n = s[++l], "string" == typeof n && (n = '"' + n.replace("\n", "\\n") + '"'), p.push(n);
                        r = r + " " + p.join(" "), o.push(r)
                    }
                return o.join("\n")
            },
            guid: 0,
            compile: function(e, t) {
                this.children = [], this.depths = {
                    list: []
                }, this.options = t;
                var n = this.options.knownHelpers;
                if (this.options.knownHelpers = {
                        helperMissing: !0,
                        blockHelperMissing: !0,
                        each: !0,
                        "if": !0,
                        unless: !0,
                        "with": !0,
                        log: !0
                    }, n)
                    for (var r in n) this.options.knownHelpers[r] = n[r];
                return this.program(e)
            },
            accept: function(e) {
                return this[e.type](e)
            },
            program: function(e) {
                var t, n = e.statements;
                this.opcodes = [];
                for (var r = 0, i = n.length; i > r; r++) t = n[r], this[t.type](t);
                return this.isSimple = 1 === i, this.depths.list = this.depths.list.sort(function(e, t) {
                    return e - t
                }), this
            },
            compileProgram: function(e) {
                var t = (new this.compiler).compile(e, this.options),
                    n = this.guid++;
                this.usePartial = this.usePartial || t.usePartial, this.children[n] = t;
                for (var r = 0, i = t.depths.list.length; i > r; r++) depth = t.depths.list[r], 2 > depth || this.addDepth(depth - 1);
                return n
            },
            block: function(e) {
                var t, n = e.mustache,
                    r = this.setupStackForMustache(n),
                    i = this.compileProgram(e.program);
                e.program.inverse && (t = this.compileProgram(e.program.inverse), this.declare("inverse", t)), this.opcode("invokeProgram", i, r.length, !!n.hash), this.declare("inverse", null), this.opcode("append")
            },
            inverse: function(e) {
                var t = this.setupStackForMustache(e.mustache),
                    n = this.compileProgram(e.program);
                this.declare("inverse", n), this.opcode("invokeProgram", null, t.length, !!e.mustache.hash), this.declare("inverse", null), this.opcode("append")
            },
            hash: function(e) {
                var t, n, r = e.pairs;
                this.opcode("push", "{}");
                for (var i = 0, a = r.length; a > i; i++) t = r[i], n = t[1], this.accept(n), this.opcode("assignToHash", t[0])
            },
            partial: function(e) {
                var t = e.id;
                this.usePartial = !0, e.context ? this.ID(e.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", t.original), this.opcode("append")
            },
            content: function(e) {
                this.opcode("appendContent", e.string)
            },
            mustache: function(e) {
                var t = this.setupStackForMustache(e);
                this.opcode("invokeMustache", t.length, e.id.original, !!e.hash), e.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
            },
            ID: function(e) {
                this.addDepth(e.depth), this.opcode("getContext", e.depth), this.opcode("lookupWithHelpers", e.parts[0] || null, e.isScoped || !1);
                for (var t = 1, n = e.parts.length; n > t; t++) this.opcode("lookup", e.parts[t])
            },
            STRING: function(e) {
                this.opcode("pushString", e.string)
            },
            INTEGER: function(e) {
                this.opcode("push", e.integer)
            },
            BOOLEAN: function(e) {
                this.opcode("push", e.bool)
            },
            comment: function() {},
            pushParams: function(e) {
                for (var t, n = e.length; n--;) t = e[n], this.options.stringParams ? (t.depth && this.addDepth(t.depth), this.opcode("getContext", t.depth || 0), this.opcode("pushStringParam", t.string)) : this[t.type](t)
            },
            opcode: function(t, n, r, i) {
                this.opcodes.push(e.OPCODE_MAP[t]), void 0 !== n && this.opcodes.push(n), void 0 !== r && this.opcodes.push(r), void 0 !== i && this.opcodes.push(i)
            },
            declare: function(e, t) {
                this.opcodes.push("DECLARE"), this.opcodes.push(e), this.opcodes.push(t)
            },
            addDepth: function(e) {
                0 !== e && (this.depths[e] || (this.depths[e] = !0, this.depths.list.push(e)))
            },
            setupStackForMustache: function(e) {
                var t = e.params;
                return this.pushParams(t), e.hash && this.hash(e.hash), this.ID(e.id), t
            }
        }, t.prototype = {
            nameLookup: function(e, n) {
                return /^[0-9]+$/.test(n) ? e + "[" + n + "]" : t.isValidJavaScriptVariableName(n) ? e + "." + n : e + "['" + n + "']"
            },
            appendToBuffer: function(e) {
                return this.environment.isSimple ? "return " + e + ";" : "buffer += " + e + ";"
            },
            initializeBuffer: function() {
                return this.quotedString("")
            },
            namespace: "Handlebars",
            compile: function(e, t, n, r) {
                this.environment = e, this.options = t || {}, this.name = this.environment.name, this.isChild = !!n, this.context = n || {
                    programs: [],
                    aliases: {
                        self: "this"
                    },
                    registers: {
                        list: []
                    }
                }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.compileChildren(e, t);
                var i, a = e.opcodes;
                for (this.i = 0, o = a.length; this.i < o; this.i++) i = this.nextOpcode(0), "DECLARE" === i[0] ? (this.i = this.i + 2, this[i[1]] = i[2]) : (this.i = this.i + i[1].length, this[i[0]].apply(this, i[1]));
                return this.createFunctionContext(r)
            },
            nextOpcode: function(t) {
                var n, r, i, a, s = this.environment.opcodes,
                    o = s[this.i + t];
                if ("DECLARE" === o) return n = s[this.i + 1], r = s[this.i + 2], ["DECLARE", n, r];
                n = e.DISASSEMBLE_MAP[o], i = e.multiParamSize(o), a = [];
                for (var l = 0; i > l; l++) a.push(s[this.i + l + 1 + t]);
                return [n, a]
            },
            eat: function(e) {
                this.i = this.i + e.length
            },
            preamble: function() {
                var e = [];
                if (this.useRegister("foundHelper"), this.isChild) e.push("");
                else {
                    var t = this.namespace,
                        n = "helpers = helpers || " + t + ".helpers;";
                    this.environment.usePartial && (n = n + " partials = partials || " + t + ".partials;"), e.push(n)
                }
                this.environment.isSimple ? e.push("") : e.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = e
            },
            createFunctionContext: function(e) {
                var t = this.stackVars;
                if (this.isChild || (t = t.concat(this.context.registers.list)), t.length > 0 && (this.source[1] = this.source[1] + ", " + t.join(", ")), !this.isChild)
                    for (var n in this.context.aliases) this.source[1] = this.source[1] + ", " + n + "=" + this.context.aliases[n];
                this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.source.push("return buffer;");
                for (var r = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], i = 0, a = this.environment.depths.list.length; a > i; i++) r.push("depth" + this.environment.depths.list[i]);
                if (e) return r.push(this.source.join("\n  ")), Function.apply(this, r);
                var s = "function " + (this.name || "") + "(" + r.join(",") + ") {\n  " + this.source.join("\n  ") + "}";
                return Handlebars.log(Handlebars.logger.DEBUG, s + "\n\n"), s
            },
            appendContent: function(e) {
                this.source.push(this.appendToBuffer(this.quotedString(e)))
            },
            append: function() {
                var e = this.popStack();
                this.source.push("if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }"), this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }")
            },
            appendEscaped: function() {
                var e = this.nextOpcode(1),
                    t = "";
                this.context.aliases.escapeExpression = "this.escapeExpression", "appendContent" === e[0] && (t = " + " + this.quotedString(e[1][0]), this.eat(e)), this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")" + t))
            },
            getContext: function(e) {
                this.lastContext !== e && (this.lastContext = e)
            },
            lookupWithHelpers: function(e, t) {
                if (e) {
                    var n = this.nextStack();
                    this.usingKnownHelper = !1;
                    var r;
                    !t && this.options.knownHelpers[e] ? (r = n + " = " + this.nameLookup("helpers", e, "helper"), this.usingKnownHelper = !0) : t || this.options.knownHelpersOnly ? r = n + " = " + this.nameLookup("depth" + this.lastContext, e, "context") : (this.register("foundHelper", this.nameLookup("helpers", e, "helper")), r = n + " = foundHelper || " + this.nameLookup("depth" + this.lastContext, e, "context")), r += ";", this.source.push(r)
                } else this.pushStack("depth" + this.lastContext)
            },
            lookup: function(e) {
                var t = this.topStack();
                this.source.push(t + " = (" + t + " === null || " + t + " === undefined || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context") + ");")
            },
            pushStringParam: function(e) {
                this.pushStack("depth" + this.lastContext), this.pushString(e)
            },
            pushString: function(e) {
                this.pushStack(this.quotedString(e))
            },
            push: function(e) {
                this.pushStack(e)
            },
            invokeMustache: function(e, t, n) {
                this.populateParams(e, this.quotedString(t), "{}", null, n, function(e, t, n) {
                    this.usingKnownHelper || (this.context.aliases.helperMissing = "helpers.helperMissing", this.context.aliases.undef = "void 0", this.source.push("else if(" + n + "=== undef) { " + e + " = helperMissing.call(" + t + "); }"), e !== n && this.source.push("else { " + e + " = " + n + "; }"))
                })
            },
            invokeProgram: function(e, t, n) {
                var r = this.programExpression(this.inverse),
                    i = this.programExpression(e);
                this.populateParams(t, null, i, r, n, function(e, t) {
                    this.usingKnownHelper || (this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing", this.source.push("else { " + e + " = blockHelperMissing.call(" + t + "); }"))
                })
            },
            populateParams: function(e, t, n, r, i, a) {
                var s, o, l = i || this.options.stringParams || r || this.options.data,
                    c = this.popStack(),
                    u = [];
                if (l ? (this.register("tmp1", n), o = "tmp1") : o = "{ hash: {} }", l) {
                    var p = i ? this.popStack() : "{}";
                    this.source.push("tmp1.hash = " + p + ";")
                }
                this.options.stringParams && this.source.push("tmp1.contexts = [];");
                for (var d = 0; e > d; d++) s = this.popStack(), u.push(s), this.options.stringParams && this.source.push("tmp1.contexts.push(" + this.popStack() + ");");
                r && (this.source.push("tmp1.fn = tmp1;"), this.source.push("tmp1.inverse = " + r + ";")), this.options.data && this.source.push("tmp1.data = data;"), u.push(o), this.populateCall(u, c, t || c, a, "{}" !== n)
            },
            populateCall: function(e, t, n, r, i) {
                var a = ["depth0"].concat(e).join(", "),
                    s = ["depth0"].concat(n).concat(e).join(", "),
                    o = this.nextStack();
                if (this.usingKnownHelper) this.source.push(o + " = " + t + ".call(" + a + ");");
                else {
                    this.context.aliases.functionType = '"function"';
                    var l = i ? "foundHelper && " : "";
                    this.source.push("if(" + l + "typeof " + t + " === functionType) { " + o + " = " + t + ".call(" + a + "); }")
                }
                r.call(this, o, s, t), this.usingKnownHelper = !1
            },
            invokePartial: function(e) {
                params = [this.nameLookup("partials", e, "partial"), "'" + e + "'", this.popStack(), "helpers", "partials"], this.options.data && params.push("data"), this.pushStack("self.invokePartial(" + params.join(", ") + ");")
            },
            assignToHash: function(e) {
                var t = this.popStack(),
                    n = this.topStack();
                this.source.push(n + "['" + e + "'] = " + t + ";")
            },
            compiler: t,
            compileChildren: function(e, t) {
                for (var n, r, i = e.children, a = 0, s = i.length; s > a; a++) {
                    n = i[a], r = new this.compiler, this.context.programs.push("");
                    var o = this.context.programs.length;
                    n.index = o, n.name = "program" + o, this.context.programs[o] = r.compile(n, t, this.context)
                }
            },
            programExpression: function(e) {
                if (null == e) return "self.noop";
                for (var t = this.environment.children[e], n = t.depths.list, r = [t.index, t.name, "data"], i = 0, a = n.length; a > i; i++) depth = n[i], 1 === depth ? r.push("depth0") : r.push("depth" + (depth - 1));
                return 0 === n.length ? "self.program(" + r.join(", ") + ")" : (r.shift(), "self.programWithDepth(" + r.join(", ") + ")")
            },
            register: function(e, t) {
                this.useRegister(e), this.source.push(e + " = " + t + ";")
            },
            useRegister: function(e) {
                this.context.registers[e] || (this.context.registers[e] = !0, this.context.registers.list.push(e))
            },
            pushStack: function(e) {
                return this.source.push(this.nextStack() + " = " + e + ";"), "stack" + this.stackSlot
            },
            nextStack: function() {
                return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), "stack" + this.stackSlot
            },
            popStack: function() {
                return "stack" + this.stackSlot--
            },
            topStack: function() {
                return "stack" + this.stackSlot
            },
            quotedString: function(e) {
                return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"'
            }
        };
        for (var i = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), a = t.RESERVED_WORDS = {}, s = 0, o = i.length; o > s; s++) a[i[s]] = !0;
        t.isValidJavaScriptVariableName = function(e) {
            return !t.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e) ? !0 : !1
        }
    }(Handlebars.Compiler, Handlebars.JavaScriptCompiler), Handlebars.precompile = function(e, t) {
        t = t || {};
        var n = Handlebars.parse(e),
            r = (new Handlebars.Compiler).compile(n, t);
        return (new Handlebars.JavaScriptCompiler).compile(r, t)
    }, Handlebars.compile = function(e, t) {
        function n() {
            var n = Handlebars.parse(e),
                r = (new Handlebars.Compiler).compile(n, t),
                i = (new Handlebars.JavaScriptCompiler).compile(r, t, void 0, !0);
            return Handlebars.template(i)
        }
        t = t || {};
        var r;
        return function(e, t) {
            return r || (r = n()), r.call(this, e, t)
        }
    }, Handlebars.VM = {
        template: function(e) {
            var t = {
                escapeExpression: Handlebars.Utils.escapeExpression,
                invokePartial: Handlebars.VM.invokePartial,
                programs: [],
                program: function(e, t, n) {
                    var r = this.programs[e];
                    return n ? Handlebars.VM.program(t, n) : r ? r : r = this.programs[e] = Handlebars.VM.program(t)
                },
                programWithDepth: Handlebars.VM.programWithDepth,
                noop: Handlebars.VM.noop
            };
            return function(n, r) {
                return r = r || {}, e.call(t, Handlebars, n, r.helpers, r.partials, r.data)
            }
        },
        programWithDepth: function(e, t) {
            var n = Array.prototype.slice.call(arguments, 2);
            return function(r, i) {
                return i = i || {}, e.apply(this, [r, i.data || t].concat(n))
            }
        },
        program: function(e, t) {
            return function(n, r) {
                return r = r || {}, e(n, r.data || t)
            }
        },
        noop: function() {
            return ""
        },
        invokePartial: function(e, t, n, r, i, a) {
            if (options = {
                    helpers: r,
                    partials: i,
                    data: a
                }, void 0 === e) throw new Handlebars.Exception("The partial " + t + " could not be found");
            if (e instanceof Function) return e(n, options);
            if (Handlebars.compile) return i[t] = Handlebars.compile(e), i[t](n, options);
            throw new Handlebars.Exception("The partial " + t + " could not be compiled when running in runtime-only mode")
        }
    }, Handlebars.template = Handlebars.VM.template, define("handlebars", function() {}), define("tmpl", ["handlebars", "text"], function(e, t) {
        var n = {};
        return {
            load: function(e, r, i, a) {
                return t.load(e, r, function(t) {
                    a.isBuild && a.inlineText && (n[e] = t), i(a.isBuild ? t : Handlebars.compile(t))
                }, a)
            },
            write: function(e, r, i) {
                if (r in n) {
                    var a = t.jsEscape(n[r]);
                    i("define('" + e + "!" + r + "', ['handlebars'], function (hb) { return Handlebars.compile('" + a + "');});\n")
                }
            }
        }
    }), define("tmpl!w3c/templates/headers.html", ["handlebars"], function() {
        return Handlebars.compile("<div class='head'>\n  <p>\n      {{#if logos}}\n        {{showLogos logos}}\n      {{else}}\n        {{#if prependW3C}}\n            <a href='http://www.w3.org/'><img width='72' height='48' src='https://www.w3.org/Icons/w3c_home' alt='W3C'/></a>\n        {{/if}}\n      {{/if}}\n  </p>\n  <h1 class='title p-name' id='title'{{#if doRDFa}} property='dcterms:title'{{/if}}>{{title}}</h1>\n  {{#if subtitle}}\n    <h2 {{#if doRDFa}}property='bibo:subtitle' {{/if}}id='subtitle'>{{subtitle}}</h2>\n  {{/if}}\n  <h2 {{#if doRDFa}}property=\"dcterms:issued\" datatype=\"xsd:dateTime\" content=\"{{publishISODate}}\"{{/if}}>{{#if prependW3C}}W3C {{/if}}{{textStatus}} <time class='dt-published' datetime='{{dashDate}}'>{{publishHumanDate}}</time></h2>\n  <dl>\n    {{#unless isNoTrack}}\n      <dt>This version:</dt>\n      <dd><a class='u-url' href='{{thisVersion}}'>{{thisVersion}}</a></dd>\n      <dt>Latest published version:</dt>\n      <dd>{{#if latestVersion}}<a href='{{latestVersion}}'>{{latestVersion}}</a>{{else}}none{{/if}}</dd>\n    {{/unless}}\n    {{#if edDraftURI}}\n      <dt>Latest editor's draft:</dt>\n      <dd><a href='{{edDraftURI}}'>{{edDraftURI}}</a></dd>\n    {{/if}}\n    {{#if testSuiteURI}}\n      <dt>Test suite:</dt>\n      <dd><a href='{{testSuiteURI}}'>{{testSuiteURI}}</a></dd>\n    {{/if}}\n    {{#if implementationReportURI}}\n      <dt>Implementation report:</dt>\n      <dd><a href='{{implementationReportURI}}'>{{implementationReportURI}}</a></dd>\n    {{/if}}\n    {{#if bugTrackerHTML}}\n      <dt>Bug tracker:</dt>\n      <dd>{{{bugTrackerHTML}}}</dd>\n    {{/if}}\n    {{#if isED}}\n      {{#if prevED}}\n        <dt>Previous editor's draft:</dt>\n        <dd><a href='{{prevED}}'>{{prevED}}</a></dd>\n      {{/if}}\n    {{/if}}\n    {{#if showPreviousVersion}}\n      <dt>Previous version:</dt>\n      <dd><a {{#if doRDFa}}rel=\"dcterms:replaces\"{{/if}} href='{{prevVersion}}'>{{prevVersion}}</a></dd>\n    {{/if}}\n    {{#if prevRecURI}}\n      {{#if isRec}}\n          <dt>Previous Recommendation:</dt>\n          <dd><a {{#if doRDFa}}rel=\"dcterms:replaces\"{{/if}} href='{{prevRecURI}}'>{{prevRecURI}}</a></dd>\n      {{else}}\n          <dt>Latest Recommendation:</dt>\n          <dd><a href='{{prevRecURI}}'>{{prevRecURI}}</a></dd>\n      {{/if}}\n    {{/if}}\n    <dt>Editor{{#if multipleEditors}}s{{/if}}:</dt>\n    {{showPeople \"Editor\" editors}}\n    {{#if authors}}\n      <dt>Author{{#if multipleAuthors}}s{{/if}}:</dt>\n      {{showPeople \"Author\" authors}}\n    {{/if}}\n    {{#if otherLinks}}\n      {{#each otherLinks}}\n        {{#if key}}\n          <dt {{#if class}}class=\"{{class}}\"{{/if}}>{{key}}:</dt>\n          {{#if data}}\n             {{#each data}}\n                {{#if value}}\n                  <dd {{#if class}}class=\"{{class}}\"{{/if}}>\n                    {{#if href}}<a href=\"{{href}}\">{{/if}}\n                      {{value}}\n                    {{#if href}}</a>{{/if}}\n                  </dd>\n                {{else}}\n                  {{#if href}}\n                    <dd><a href=\"{{href}}\">{{href}}</a></dd>\n                  {{/if}}\n                {{/if}}\n             {{/each}}\n          {{else}}\n            {{#if value}}\n              <dd {{#if class}}class=\"{{class}}\"{{/if}}>\n                {{#if href}}<a href=\"{{href}}\">{{/if}}\n                  {{value}}\n                {{#if href}}</a>{{/if}}\n              </dd>\n            {{else}}\n              {{#if href}}\n                <dd {{#if class}}class=\"{{class}}\"{{/if}}>\n                  <a href=\"{{href}}\">{{href}}</a>\n                </dd>\n              {{/if}}\n            {{/if}}\n          {{/if}}\n        {{/if}}\n      {{/each}}\n    {{/if}}\n  </dl>\n  {{#if errata}}\n    <p>\n      Please check the <a href=\"{{errata}}\"><strong>errata</strong></a> for any errors or issues\n      reported since publication.\n    </p>\n  {{/if}}\n  {{#if alternateFormats}}\n    <p>\n      {{#if multipleAlternates}}\n        This document is also available in these non-normative formats:\n      {{else}}\n        This document is also available in this non-normative format:\n      {{/if}}\n      {{{alternatesHTML}}}\n    </p>\n  {{/if}}\n  {{#if isRec}}\n    <p>\n      The English version of this specification is the only normative version. Non-normative\n      <a href=\"http://www.w3.org/Consortium/Translation/\">translations</a> may also be available.\n    </p>\n  {{/if}}\n  {{#if isUnofficial}}\n    {{#if additionalCopyrightHolders}}\n      <p class='copyright'>{{{additionalCopyrightHolders}}}</p>\n    {{else}}\n      {{#if overrideCopyright}}\n        {{{overrideCopyright}}}\n      {{else}}\n        <p class='copyright'>\n          This document is licensed under a\n          <a class='subfoot' href='http://creativecommons.org/licenses/by/3.0/' rel='license'>Creative Commons\n          Attribution 3.0 License</a>.\n        </p>\n      {{/if}}\n    {{/if}}\n  {{else}}\n    {{#if overrideCopyright}}\n      {{{overrideCopyright}}}\n    {{else}}\n      <p class='copyright'>\n        <a href='http://www.w3.org/Consortium/Legal/ipr-notice#Copyright'>Copyright</a> &copy;\n        {{#if copyrightStart}}{{copyrightStart}}-{{/if}}{{publishYear}}\n        {{#if additionalCopyrightHolders}} {{{additionalCopyrightHolders}}} &amp;{{/if}}\n        <a href='http://www.w3.org/'><abbr title='World Wide Web Consortium'>W3C</abbr></a><sup>&reg;</sup>\n        (<a href='http://www.csail.mit.edu/'><abbr title='Massachusetts Institute of Technology'>MIT</abbr></a>,\n        <a href='http://www.ercim.eu/'><abbr title='European Research Consortium for Informatics and Mathematics'>ERCIM</abbr></a>,\n        <a href='http://www.keio.ac.jp/'>Keio</a>, <a href=\"http://ev.buaa.edu.cn/\">Beihang</a>), \n        {{#if isCCBY}}\n          Some Rights Reserved: this document is dual-licensed,\n          <a href=\"https://creativecommons.org/licenses/by/3.0/\">CC-BY</a> and \n          <a href=\"http://www.w3.org/Consortium/Legal/copyright-documents\">W3C Document License</a>.\n        {{else}}\n        All Rights Reserved.\n        {{/if}}\n        W3C <a href='http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer'>liability</a>,\n        <a href='http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks'>trademark</a> and\n        {{#if isCCBY}}\n          <a href='http://www.w3.org/Consortium/Legal/2013/copyright-documents-dual.html'>document use</a>\n        {{else}}\n          <a href='http://www.w3.org/Consortium/Legal/copyright-documents'>document use</a>\n        {{/if}}\n        rules apply.\n      </p>\n    {{/if}}\n  {{/if}}\n  <hr/>\n</div>\n")
    }), define("tmpl!w3c/templates/sotd.html", ["handlebars"], function() {
        return Handlebars.compile("<section id='sotd' class='introductory'><h2>Status of This Document</h2>\n  {{#if isUnofficial}}\n    <p>\n      This document is merely a public working draft of a potential specification. It has\n      no official standing of any kind and does not represent the support or consensus of any\n      standards organisation.\n    </p>\n    {{{sotdCustomParagraph}}}\n  {{else}}\n    {{#if isTagFinding}}\n      {{{sotdCustomParagraph}}}\n    {{else}}\n      {{#if isNoTrack}}\n        <p>\n          This document is merely a W3C-internal {{#if isMO}}member-confidential{{/if}} document. It\n          has no official standing of any kind and does not represent consensus of the W3C\n          Membership.\n        </p>\n        {{{sotdCustomParagraph}}}\n      {{else}}\n        <p>\n          <em>This section describes the status of this document at the time of its publication.\n          Other documents may supersede this document. A list of current W3C publications and the\n          latest revision of this technical report can be found in the <a\n          href='http://www.w3.org/TR/'>W3C technical reports index</a> at\n          http://www.w3.org/TR/.</em>\n        </p>\n        {{#unless sotdAfterWGinfo}}\n        {{{sotdCustomParagraph}}}\n        {{/unless}}\n        <p>\n          This document was published by the {{{wgHTML}}} as {{anOrA}} {{longStatus}}.\n          {{#if notYetRec}}\n            This document is intended to become a W3C Recommendation.\n          {{/if}}\n          {{#unless isPR}}\n            If you wish to make comments regarding this document, please send them to \n            <a href='mailto:{{wgPublicList}}@w3.org{{#if subjectPrefix}}?subject={{subjectPrefixEnc}}{{/if}}'>{{wgPublicList}}@w3.org</a> \n            (<a href='mailto:{{wgPublicList}}-request@w3.org?subject=subscribe'>subscribe</a>,\n            <a\n              href='http://lists.w3.org/Archives/Public/{{wgPublicList}}/'>archives</a>){{#if subjectPrefix}}\n              with <code>{{subjectPrefix}}</code> at the start of your email's subject{{/if}}.\n          {{/unless}}\n          {{#if isLC}}The Last Call period ends {{humanLCEnd}}.{{/if}}\n          {{#if isCR}}\n            W3C publishes a Candidate Recommendation to indicate that the document is believed to be\n            stable and to encourage implementation by the developer community. This Candidate\n            Recommendation is expected to advance to Proposed Recommendation no earlier than\n            {{humanCREnd}}.\n          {{/if}}\n          {{#if isPER}}\n              W3C Advisory Committee Members are invited to\n              send formal review comments on this Proposed\n              Edited Recommendation to the W3C Team until\n              {{humanPEREnd}}. \n              Members of the Advisory Committee will find the\n              appropriate review form for this document by\n              consulting their list of current\n              <a href='https://www.w3.org/2002/09/wbs/myQuestionnaires'>WBS questionnaires</a>. \n          {{/if}}\n          {{#if isPR}}\n              The W3C Membership and other interested parties are invited to review the document and\n              send comments to\n              <a rel='discussion' href='mailto:{{wgPublicList}}@w3.org'>{{wgPublicList}}@w3.org</a> \n              (<a href='mailto:{{wgPublicList}}-request@w3.org?subject=subscribe'>subscribe</a>,\n              <a href='http://lists.w3.org/Archives/Public/{{wgPublicList}}/'>archives</a>)\n              through {{humanPREnd}}. Advisory Committee Representatives should consult their\n              <a href='https://www.w3.org/2002/09/wbs/myQuestionnaires'>WBS questionnaires</a>. \n              Note that substantive technical comments were expected during the Last Call review\n              period that ended {{humanLCEnd}}.\n          {{else}}\n            {{#unless isPER}}\n            All comments are welcome.\n            {{/unless}}\n          {{/if}}\n        </p>\n        {{#if implementationReportURI}}\n          <p>\n            Please see the Working Group's  <a href='{{implementationReportURI}}'>implementation\n            report</a>.\n          </p>\n        {{/if}}\n        {{#if sotdAfterWGinfo}}\n        {{{sotdCustomParagraph}}\n        {{/if}}\n        {{#if notRec}}\n          <p>\n            Publication as {{anOrA}} {{textStatus}} does not imply endorsement by the W3C\n            Membership. This is a draft document and may be updated, replaced or obsoleted by other\n            documents at any time. It is inappropriate to cite this document as other than work in\n            progress.\n          </p>\n        {{/if}}\n        {{#if isRec}}\n          <p>\n            This document has been reviewed by W3C Members, by software developers, and by other W3C\n            groups and interested parties, and is endorsed by the Director as a W3C Recommendation.\n            It is a stable document and may be used as reference material or cited from another\n            document. W3C's role in making the Recommendation is to draw attention to the\n            specification and to promote its widespread deployment. This enhances the functionality\n            and interoperability of the Web.\n          </p>\n        {{/if}}\n        {{#if isLC}}\n          <p>\n            This is a Last Call Working Draft and thus the Working Group has determined that this\n            document has satisfied the relevant technical requirements and is sufficiently stable to\n            advance through the Technical Recommendation process.\n          </p>\n        {{/if}}\n        <p>\n          {{#unless isIGNote}}\n            This document was produced by a group operating under the \n            <a{{#if doRDFa}} id=\"sotd_patent\" about='' rel='w3p:patentRules'{{/if}}\n            href='http://www.w3.org/Consortium/Patent-Policy-20040205/'>5 February 2004 W3C Patent\n            Policy</a>.\n          {{/unless}}\n          {{#if recNotExpected}}\n            The group does not expect this document to become a W3C Recommendation.\n          {{/if}}\n          {{#unless isIGNote}}\n            {{#if multipleWGs}}\n              W3C maintains a public list of any patent disclosures ({{{wgPatentHTML}}})\n            {{else}}\n              W3C maintains a <a href='{{wgPatentURI}}' rel='disclosure'>public list of any patent\n              disclosures</a> \n            {{/if}}\n            made in connection with the deliverables of the group; that page also includes\n            instructions for disclosing a patent. An individual who has actual knowledge of a patent\n            which the individual believes contains\n            <a href='http://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential'>Essential\n            Claim(s)</a> must disclose the information in accordance with\n            <a href='http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure'>section\n            6 of the W3C Patent Policy</a>.\n          {{/unless}}\n          {{#if isIGNote}}\n            The disclosure obligations of the Participants of this group are described in the \n            <a href='{{charterDisclosureURI}}'>charter</a>. \n          {{/if}}\n        </p>\n        {{#if isNewProcess}}\n          <p>This document is governed by the <a id=\"w3c_process_revision\"\n            href=\"http://www.w3.org/2014/Process-20140801/\">1 August 2014 W3C Process Document</a>.\n          </p>\n        {{else}}\n          <p>\n            This document is governed by the  <a id=\"w3c_process_revision\"\n            href=\"http://www.w3.org/2005/10/Process-20051014/\">14 October 2005 W3C Process Document</a>.\n          </p>\n        {{/if}}\n        {{#if addPatentNote}}<p>{{{addPatentNote}}}</p>{{/if}}\n      {{/if}}\n    {{/if}}\n  {{/if}}\n</section>\n")
    }), define("tmpl!w3c/templates/cgbg-headers.html", ["handlebars"], function() {
        return Handlebars.compile("<div class='head'>\n  <p>\n    <a href='http://www.w3.org/'><img width='72' height='48' src='https://www.w3.org/Icons/w3c_home' alt='W3C'/></a>\n  </p>\n  <h1 class='title p-name' id='title'{{#if doRDFa}} property='dcterms:title'{{/if}}>{{title}}</h1>\n  {{#if subtitle}}\n    <h2 {{#if doRDFa}}property='bibo:subtitle' {{/if}}id='subtitle'>{{subtitle}}</h2>\n  {{/if}}\n  <h2 {{#if doRDFa}}property=\"dcterms:issued\" datatype=\"xsd:dateTime\" content=\"{{publishISODate}}\"{{/if}}>{{longStatus}} <time class='dt-published' datetime='{{dashDate}}'>{{publishHumanDate}}</time></h2>\n  <dl>\n    {{#if thisVersion}}\n      <dt>This version:</dt>\n      <dd><a class='u-url' href='{{thisVersion}}'>{{thisVersion}}</a></dd>\n    {{/if}}\n    {{#if latestVersion}}\n      <dt>Latest published version:</dt>\n      <dd><a href='{{latestVersion}}'>{{latestVersion}}</a></dd>\n    {{/if}}\n    {{#if edDraftURI}}\n      <dt>Latest editor's draft:</dt>\n      <dd><a href='{{edDraftURI}}'>{{edDraftURI}}</a></dd>\n    {{/if}}\n    {{#if testSuiteURI}}\n      <dt>Test suite:</dt>\n      <dd><a href='{{testSuiteURI}}'>{{testSuiteURI}}</a></dd>\n    {{/if}}\n    {{#if implementationReportURI}}\n      <dt>Implementation report:</dt>\n      <dd><a href='{{implementationReportURI}}'>{{implementationReportURI}}</a></dd>\n    {{/if}}\n    {{#if bugTrackerHTML}}\n      <dt>Bug tracker:</dt>\n      <dd>{{{bugTrackerHTML}}}</dd>\n    {{/if}}\n    {{#if prevVersion}}\n      <dt>Previous version:</dt>\n      <dd><a {{#if doRDFa}}rel=\"dcterms:replaces\"{{/if}} href='{{prevVersion}}'>{{prevVersion}}</a></dd>\n    {{/if}}\n    {{#unless isCGFinal}}\n      {{#if prevED}}\n        <dt>Previous editor's draft:</dt>\n        <dd><a href='{{prevED}}'>{{prevED}}</a></dd>\n      {{/if}}\n    {{/unless}}\n    <dt>Editor{{#if multipleEditors}}s{{/if}}:</dt>\n    {{showPeople \"Editor\" editors}}\n    {{#if authors}}\n      <dt>Author{{#if multipleAuthors}}s{{/if}}:</dt>\n      {{showPeople \"Author\" authors}}\n    {{/if}}\n    {{#if otherLinks}}\n      {{#each otherLinks}}\n        {{#if key}}\n          <dt {{#if class}}class=\"{{class}}\"{{/if}}>{{key}}:</dt>\n          {{#if data}}\n             {{#each data}}\n                {{#if value}}\n                  <dd {{#if class}}class=\"{{class}}\"{{/if}}>\n                    {{#if href}}<a href=\"{{href}}\">{{/if}}\n                      {{value}}\n                    {{#if href}}</a>{{/if}}\n                  </dd>\n                {{else}}\n                  {{#if href}}\n                    <dd><a href=\"{{href}}\">{{href}}</a></dd>\n                  {{/if}}\n                {{/if}}\n             {{/each}}\n          {{else}}\n            {{#if value}}\n              <dd {{#if class}}class=\"{{class}}\"{{/if}}>\n                {{#if href}}<a href=\"{{href}}\">{{/if}}\n                  {{value}}\n                {{#if href}}</a>{{/if}}\n              </dd>\n            {{else}}\n              {{#if href}}\n                <dd {{#if class}}class=\"{{class}}\"{{/if}}>\n                  <a href=\"{{href}}\">{{href}}</a>\n                </dd>\n              {{/if}}\n            {{/if}}\n          {{/if}}\n        {{/if}}\n      {{/each}}\n    {{/if}}\n  </dl>\n  {{#if alternateFormats}}\n    <p>\n      {{#if multipleAlternates}}\n        This document is also available in these non-normative formats: \n      {{else}}\n        This document is also available in this non-normative format: \n      {{/if}}\n      {{{alternatesHTML}}}\n    </p>\n  {{/if}}\n  <p class='copyright'>\n    <a href='http://www.w3.org/Consortium/Legal/ipr-notice#Copyright'>Copyright</a> &copy; \n    {{#if copyrightStart}}{{copyrightStart}}-{{/if}}{{publishYear}}\n    the Contributors to the {{title}} Specification, published by the\n    <a href='{{wgURI}}'>{{wg}}</a> under the\n    {{#if isCGFinal}}\n      <a href=\"https://www.w3.org/community/about/agreements/fsa/\">W3C Community Final Specification Agreement (FSA)</a>. \n      A human-readable <a href=\"http://www.w3.org/community/about/agreements/fsa-deed/\">summary</a> is available.\n    {{else}}\n      <a href=\"https://www.w3.org/community/about/agreements/cla/\">W3C Community Contributor License Agreement (CLA)</a>.\n      A human-readable <a href=\"http://www.w3.org/community/about/agreements/cla-deed/\">summary</a> is available.\n    {{/if}}\n  </p>\n  <hr/>\n</div>\n")
    }), define("tmpl!w3c/templates/cgbg-sotd.html", ["handlebars"], function() {
        return Handlebars.compile("<section id='sotd' class='introductory'><h2>Status of This Document</h2>\n  <p>\n    This specification was published by the <a href='{{wgURI}}'>{{wg}}</a>.\n    It is not a W3C Standard nor is it on the W3C Standards Track.\n    {{#if isCGFinal}}\n      Please note that under the \n      <a href=\"https://www.w3.org/community/about/agreements/final/\">W3C Community Final Specification Agreement (FSA)</a> \n      other conditions apply.\n    {{else}}\n      Please note that under the \n      <a href=\"https://www.w3.org/community/about/agreements/cla/\">W3C Community Contributor License Agreement (CLA)</a>\n      there is a limited opt-out and other conditions apply.\n    {{/if}}\n    Learn more about \n    <a href=\"http://www.w3.org/community/\">W3C Community and Business Groups</a>.\n  </p>\n  {{#unless sotdAfterWGinfo}}\n  {{{sotdCustomParagraph}}}\n  {{/unless}}\n    {{#if wgPublicList}}\n      <p>If you wish to make comments regarding this document, please send them to \n      <a href='mailto:{{wgPublicList}}@w3.org{{#if subjectPrefix}}?subject={{subjectPrefixEnc}}{{/if}}'>{{wgPublicList}}@w3.org</a> \n      (<a href='mailto:{{wgPublicList}}-request@w3.org?subject=subscribe'>subscribe</a>,\n      <a\n        href='http://lists.w3.org/Archives/Public/{{wgPublicList}}/'>archives</a>){{#if subjectPrefix}}\n      with <code>{{subjectPrefix}}</code> at the start of your\n      email's subject{{/if}}.</p>\n    {{/if}}\n  {{#if sotdAfterWGinfo}}\n  {{{sotdCustomParagraph}}}\n  {{/if}}\n</section>\n")
    }), define("w3c/headers", ["handlebars", "core/utils", "tmpl!w3c/templates/headers.html", "tmpl!w3c/templates/sotd.html", "tmpl!w3c/templates/cgbg-headers.html", "tmpl!w3c/templates/cgbg-sotd.html"], function(e, t, n, r, i, a) {
        return Handlebars.registerHelper("showPeople", function(e, t) {
            var n = "",
                r = "",
                i = "",
                a = "",
                s = "",
                o = "";
            this.doRDFa !== !1 && ("Editor" === e ? (n = " rel='bibo:editor'", "1.0" !== this.doRDFa && (n += " inlist=''")) : "Author" === e && (n = " rel='dcterms:contributor'"), a = " property='foaf:name'", i = " rel='foaf:mbox'", r = " typeof='foaf:Person'", s = " rel='foaf:workplaceHomepage'", o = " rel='foaf:homepage'");
            for (var l = "", c = 0, u = t.length; u > c; c++) {
                var p = t[c];
                l += this.doRDFa !== !1 ? "<dd class='p-author h-card vcard' " + n + "><span" + r + ">" : "<dd class='p-author h-card vcard'>", l += p.url ? this.doRDFa !== !1 ? "<a class='u-url url p-name fn' " + o + a + " content='" + p.name + "' href='" + p.url + "'>" + p.name + "</a>" : "<a class='u-url url p-name fn' href='" + p.url + "'>" + p.name + "</a>" : "<span" + a + " class='p-name fn'>" + p.name + "</span>", p.company && (l += ", ", l += p.companyURL ? "<a" + s + " class='p-org org h-org h-card' href='" + p.companyURL + "'>" + p.company + "</a>" : p.company), p.mailto && (l += ", <span class='ed_mailto'><a class='u-email email' " + i + " href='mailto:" + p.mailto + "'>" + p.mailto + "</a></span>"), p.note && (l += " (" + p.note + ")"), this.doRDFa !== !1 && (l += "</span>\n"), l += "</dd>\n"
            }
            return new Handlebars.SafeString(l)
        }), Handlebars.registerHelper("showLogos", function(e) {
            for (var t = "<p>", n = 0, r = e.length; r > n; n++) {
                var i = e[n];
                i.url && (t += "<a href='" + i.url + "'>"), i.id && (t += "<span id='" + i.id + "'>"), i.src ? (t += "<img src='" + i.src + "'", i.width && (t += " width='" + i.width + "'"), i.height && (t += " height='" + i.height + "'"), t += i.alt ? " alt='" + i.alt + "'" : 1 == e.length ? " alt='Logo'" : " alt='Logo " + (n + 1) + "'", t += "/>") : i.alt && (t += i.alt), i.url && (t += "</a>"), i.id && (t += "</span>")
            }
            return t += "</p>", new Handlebars.SafeString(t)
        }), {
            status2maturity: {
                FPWD: "WD",
                LC: "WD",
                FPLC: "WD",
                "FPWD-NOTE": "NOTE",
                "WD-NOTE": "WD",
                "LC-NOTE": "LC",
                "IG-NOTE": "NOTE",
                "WG-NOTE": "NOTE"
            },
            status2rdf: {
                NOTE: "w3p:NOTE",
                WD: "w3p:WD",
                LC: "w3p:LastCall",
                CR: "w3p:CR",
                PR: "w3p:PR",
                REC: "w3p:REC",
                PER: "w3p:PER",
                RSCND: "w3p:RSCND"
            },
            status2text: {
                NOTE: "Working Group Note",
                "WG-NOTE": "Working Group Note",
                "CG-NOTE": "Co-ordination Group Note",
                "IG-NOTE": "Interest Group Note",
                "Member-SUBM": "Member Submission",
                "Team-SUBM": "Team Submission",
                MO: "Member-Only Document",
                ED: "Editor's Draft",
                FPWD: "First Public Working Draft",
                WD: "Working Draft",
                "FPWD-NOTE": "Working Group Note",
                "WD-NOTE": "Working Draft",
                "LC-NOTE": "Working Draft",
                FPLC: "First Public and Last Call Working Draft",
                LC: "Last Call Working Draft",
                CR: "Candidate Recommendation",
                PR: "Proposed Recommendation",
                PER: "Proposed Edited Recommendation",
                REC: "Recommendation",
                RSCND: "Rescinded Recommendation",
                unofficial: "Unofficial Draft",
                base: "Document",
                finding: "TAG Finding",
                "draft-finding": "Draft TAG Finding",
                "CG-DRAFT": "Draft Community Group Report",
                "CG-FINAL": "Final Community Group Report",
                "BG-DRAFT": "Draft Business Group Report",
                "BG-FINAL": "Final Business Group Report"
            },
            status2long: {
                "FPWD-NOTE": "First Public Working Group Note",
                "LC-NOTE": "Last Call Working Draft"
            },
            recTrackStatus: ["FPWD", "WD", "FPLC", "LC", "CR", "PR", "PER", "REC"],
            noTrackStatus: ["MO", "unofficial", "base", "finding", "draft-finding", "CG-DRAFT", "CG-FINAL", "BG-DRAFT", "BG-FINAL"],
            cgbg: ["CG-DRAFT", "CG-FINAL", "BG-DRAFT", "BG-FINAL"],
            precededByAn: ["ED", "IG-NOTE"],
            run: function(e, s, o, l) {
                l.pub("start", "w3c/headers"), e.doRDFa !== !1 && void 0 === e.doRDFa && (e.doRDFa = "1.1"), e.license || (e.license = "w3c"), e.isCCBY = "cc-by" === e.license && "http://www.w3.org/2004/01/pp-impl/40318/status" === e.wgPatentURI, e.isCGBG = $.inArray(e.specStatus, this.cgbg) >= 0, e.isCGFinal = e.isCGBG && /G-FINAL$/.test(e.specStatus), e.isBasic = "base" === e.specStatus, e.specStatus || l.pub("error", "Missing required configuration: specStatus"), e.isCGBG || e.isBasic || e.shortName || l.pub("error", "Missing required configuration: shortName"), e.title = s.title || "No Title", e.subtitle || (e.subtitle = ""), e.publishDate ? e.publishDate instanceof Date || (e.publishDate = t.parseSimpleDate(e.publishDate)) : e.publishDate = t.parseLastModified(s.lastModified), e.publishYear = e.publishDate.getFullYear(), e.publishHumanDate = t.humanDate(e.publishDate), e.isNoTrack = $.inArray(e.specStatus, this.noTrackStatus) >= 0, e.isRecTrack = e.noRecTrack ? !1 : $.inArray(e.specStatus, this.recTrackStatus) >= 0, e.anOrA = $.inArray(e.specStatus, this.precededByAn) >= 0 ? "an" : "a", e.isTagFinding = "finding" === e.specStatus || "draft-finding" === e.specStatus, e.edDraftURI || (e.edDraftURI = "", "ED" === e.specStatus && l.pub("warn", "Editor's Drafts should set edDraftURI.")), e.maturity = this.status2maturity[e.specStatus] ? this.status2maturity[e.specStatus] : e.specStatus;
                var c = "TR";
                if ("Member-SUBM" === e.specStatus ? c = "Submission" : "Team-SUBM" === e.specStatus && (c = "TeamSubmission"), e.isCGBG || e.isBasic || (e.thisVersion = "http://www.w3.org/" + c + "/" + e.publishDate.getFullYear() + "/" + e.maturity + "-" + e.shortName + "-" + t.concatDate(e.publishDate) + "/"), "ED" === e.specStatus && (e.thisVersion = e.edDraftURI), e.isCGBG || e.isBasic || (e.latestVersion = "http://www.w3.org/" + c + "/" + e.shortName + "/"), e.isTagFinding && (e.latestVersion = "http://www.w3.org/2001/tag/doc/" + e.shortName, e.thisVersion = e.latestVersion + "-" + t.concatDate(e.publishDate, "-")), e.previousPublishDate) {
                    e.previousMaturity || e.isTagFinding || l.pub("error", "previousPublishDate is set, but not previousMaturity"), e.previousPublishDate instanceof Date || (e.previousPublishDate = t.parseSimpleDate(e.previousPublishDate));
                    var u = this.status2maturity[e.previousMaturity] ? this.status2maturity[e.previousMaturity] : e.previousMaturity;
                    e.prevVersion = e.isTagFinding ? e.latestVersion + "-" + t.concatDate(e.previousPublishDate, "-") : e.isCGBG ? e.prevVersion || "" : e.isBasic ? "" : "http://www.w3.org/TR/" + e.previousPublishDate.getFullYear() + "/" + u + "-" + e.shortName + "-" + t.concatDate(e.previousPublishDate) + "/"
                } else /NOTE$/.test(e.specStatus) || "FPWD" === e.specStatus || "FPLC" === e.specStatus || "ED" === e.specStatus || e.noRecTrack || e.isNoTrack || l.pub("error", "Document on track but no previous version."), e.prevVersion || (e.prevVersion = "");
                e.prevRecShortname && !e.prevRecURI && (e.prevRecURI = "http://www.w3.org/TR/" + e.prevRecShortname), e.editors && 0 !== e.editors.length || l.pub("error", "At least one editor is required");
                var p = function(e, t) {
                    t.name || l.pub("error", "All authors and editors must have a name.")
                };
                $.each(e.editors, p), $.each(e.authors || [], p), e.multipleEditors = e.editors.length > 1, e.multipleAuthors = e.authors && e.authors.length > 1, $.each(e.alternateFormats || [], function(e, t) {
                    t.uri && t.label || l.pub("error", "All alternate formats must have a uri and a label.")
                }), e.multipleAlternates = e.alternateFormats && e.alternateFormats.length > 1, e.alternatesHTML = t.joinAnd(e.alternateFormats, function(e) {
                    var t = e.hasOwnProperty("lang") && e.lang ? " hreflang='" + e.lang + "'" : "";
                    return t += e.hasOwnProperty("type") && e.type ? " type='" + e.type + "'" : "", "<a rel='alternate' href='" + e.uri + "'" + t + ">" + e.label + "</a>"
                }), e.bugTracker && (e.bugTracker["new"] && e.bugTracker.open ? e.bugTrackerHTML = "<a href='" + e.bugTracker["new"] + "'>file a bug</a>" + " (<a href='" + e.bugTracker.open + "'>open bugs</a>)" : e.bugTracker.open ? e.bugTrackerHTML = "<a href='" + e.bugTracker.open + "'>open bugs</a>" : e.bugTracker["new"] && (e.bugTrackerHTML = "<a href='" + e.bugTracker["new"] + "'>file a bug</a>")), e.copyrightStart && e.copyrightStart == e.publishYear && (e.copyrightStart = "");
                for (var d in this.status2text) this.status2long[d] || (this.status2long[d] = this.status2text[d]);
                if (e.longStatus = this.status2long[e.specStatus], e.textStatus = this.status2text[e.specStatus], this.status2rdf[e.specStatus] && (e.rdfStatus = this.status2rdf[e.specStatus]), e.showThisVersion = !e.isNoTrack || e.isTagFinding, e.showPreviousVersion = "FPWD" !== e.specStatus && "FPLC" !== e.specStatus && "ED" !== e.specStatus && !e.isNoTrack, /NOTE$/.test(e.specStatus) && !e.prevVersion && (e.showPreviousVersion = !1), e.isTagFinding && (e.showPreviousVersion = e.previousPublishDate ? !0 : !1), e.notYetRec = e.isRecTrack && "REC" !== e.specStatus, e.isRec = e.isRecTrack && "REC" === e.specStatus, e.isRec && !e.errata && l.pub("error", "Recommendations must have an errata link."), e.notRec = "REC" !== e.specStatus, e.isUnofficial = "unofficial" === e.specStatus, e.prependW3C = !e.isUnofficial, e.isED = "ED" === e.specStatus, e.isLC = "LC" === e.specStatus || "FPLC" === e.specStatus, e.isCR = "CR" === e.specStatus, e.isPR = "PR" === e.specStatus, e.isPER = "PER" === e.specStatus, e.isMO = "MO" === e.specStatus, e.isIGNote = "IG-NOTE" === e.specStatus, e.dashDate = t.concatDate(e.publishDate, "-"), e.publishISODate = t.isoDate(e.publishDate), e.processVersion = e.processVersion || "2014", e.isNewProcess = "2014" == e.processVersion, e.doRDFa) {
                    e.rdfStatus ? $("html").attr("typeof", "bibo:Document " + e.rdfStatus) : $("html").attr("typeof", "bibo:Document "), $("html").attr("about", ""), $("html").attr("property", "dcterms:language"), $("html").attr("content", "en");
                    var f = "bibo: http://purl.org/ontology/bibo/ w3p: http://www.w3.org/2001/02pd/rec54#";
                    "1.1" != e.doRDFa && ($("html").attr("version", "XHTML+RDFa 1.0"), f += " dcterms: http://purl.org/dc/terms/ foaf: http://xmlns.com/foaf/0.1/ xsd: http://www.w3.org/2001/XMLSchema#"), $("html").attr("prefix", f)
                }
                $("body", s).prepend($(e.isCGBG ? i(e) : n(e))).addClass("h-entry");
                var h = $("#sotd");
                if (!e.isCGBG && e.isNoTrack && !e.isTagFinding || h.length || l.pub("error", "A custom SotD paragraph is required for your type of document."), e.sotdCustomParagraph = h.html(), h.remove(), $.isArray(e.wg)) {
                    e.multipleWGs = e.wg.length > 1, e.wgHTML = t.joinAnd($.isArray(e.wg) ? e.wg : [e.wg], function(t, n) {
                        return "<a href='" + e.wgURI[n] + "'>" + t + "</a>"
                    });
                    for (var m = [], g = 0, b = e.wg.length; b > g; g++) m.push("<a href='" + e.wgPatentURI[g] + "' rel='disclosure'>" + e.wg[g] + "</a>");
                    e.wgPatentHTML = m.join(", ")
                } else e.multipleWGs = !1, e.wgHTML = "<a href='" + e.wgURI + "'>" + e.wg + "</a>";
                e.isLC && !e.lcEnd && l.pub("error", "Status is LC but no lcEnd is specified"), "PR" !== e.specStatus || e.lcEnd || l.pub("error", "Status is PR but no lcEnd is specified (needed to indicate end of previous LC)"), e.humanLCEnd = t.humanDate(e.lcEnd || ""), "CR" !== e.specStatus || e.crEnd || l.pub("error", "Status is CR but no crEnd is specified"), e.humanCREnd = t.humanDate(e.crEnd || ""), "PR" !== e.specStatus || e.prEnd || l.pub("error", "Status is PR but no prEnd is specified"), e.humanPREnd = t.humanDate(e.prEnd || ""), e.humanPEREnd = t.humanDate(e.perEnd || ""), "PER" !== e.specStatus || e.perEnd || l.pub("error", "Status is PER but no perEnd is specified"), e.recNotExpected = !e.isRecTrack && "WD" == e.maturity && "FPWD-NOTE" !== e.specStatus, e.isIGNote && !e.charterDisclosureURI && l.pub("error", "IG-NOTEs must link to charter's disclosure section using charterDisclosureURI"), "" !== e.subjectPrefix && (e.subjectPrefixEnc = encodeURIComponent(e.subjectPrefix)), $(e.isCGBG ? a(e) : r(e)).insertAfter($("#abstract")), !e.implementationReportURI && (e.isCR || e.isPR || e.isRec) && l.pub("error", "CR, PR, and REC documents need to have an implementationReportURI defined."), e.isTagFinding && !e.sotdCustomParagraph && l.pub("error", "ReSpec does not support automated SotD generation for TAG findings, please specify one using a <code><section></code> element with ID=sotd."), l.pub("end", "w3c/headers"), o()
            }
        }
    }), define("w3c/abstract", [], function() {
        return {
            run: function(e, t, n, r) {
                r.pub("start", "w3c/abstract");
                var i = $("#abstract");
                if (i.length) {
                    if (0 === i.find("p").length && i.contents().wrapAll($("<p></p>")), i.prepend("<h2>Abstract</h2>"), i.addClass("introductory"), e.doRDFa !== !1) {
                        var a = "dcterms:abstract",
                            s = i.attr("property");
                        s && (a = s + " " + a), i.attr({
                            property: a,
                            datatype: ""
                        })
                    }
                } else r.pub("error", "Document must have one element with ID 'abstract'");
                r.pub("end", "w3c/abstract"), n()
            }
        }
    }), define("tmpl!w3c/templates/conformance.html", ["handlebars"], function() {
        return Handlebars.compile("<h2>Conformance</h2>\n<p>\n  As well as sections marked as non-normative, all authoring guidelines, diagrams, examples,\n  and notes in this specification are non-normative. Everything else in this specification is\n  normative.\n</p>\n<p id='respecRFC2119'>\n  to be interpreted as described in [[!RFC2119]].\n</p>\n")
    }), define("w3c/conformance", ["tmpl!w3c/templates/conformance.html"], function(e) {
        return {
            run: function(t, n, r, i) {
                i.pub("start", "w3c/conformance");
                var a = $("#conformance");
                a.length && a.prepend(e(t)), i.pub("end", "w3c/conformance"), r()
            }
        }
    }), define("core/data-transform", ["core/utils"], function(e) {
        return {
            run: function(t, n, r, i) {
                i.pub("start", "w3c/data-transform"), $("[data-transform]", n).each(function(t, n) {
                    var r = $(n),
                        a = r.attr("data-transform");
                    r.removeAttr("data-transform");
                    var s;
                    try {
                        s = e.runTransforms(r.html(), a)
                    } catch (o) {
                        i.pub("error", o)
                    }
                    s && r.html(s)
                }), i.pub("end", "w3c/data-transform"), r()
            }
        }
    }), define("core/data-include", ["core/utils"], function(e) {
        return {
            run: function(t, n, r, i) {
                i.pub("start", "w3c/data-include");
                var a = $("[data-include]"),
                    s = a.length,
                    o = function(e) {
                        e.removeAttr("data-include"), e.removeAttr("data-oninclude"), e.removeAttr("data-include-format"), e.removeAttr("data-include-replace"), e.removeAttr("data-include-sync"), s--, 0 >= s && (i.pub("end", "w3c/data-include"), r())
                    };
                s || (i.pub("end", "w3c/data-include"), r()), a.each(function() {
                    var t = $(this),
                        r = t.attr("data-include"),
                        a = t.attr("data-include-format") || "html",
                        s = !!t.attr("data-include-replace"),
                        l = !!t.attr("data-include-sync");
                    $.ajax({
                        dataType: a,
                        url: r,
                        async: !l,
                        success: function(i) {
                            if (i) {
                                var l = t.attr("data-oninclude");
                                l && (i = e.runTransforms(i, l, r)), s ? t.replaceWith("text" === a ? n.createTextNode(i) : i) : "text" === a ? t.text(i) : t.html(i)
                            }
                            o(t)
                        },
                        error: function(e, n, a) {
                            i.pub("error", "Error including URI=" + r + ": " + n + " (" + a + ")"), o(t)
                        }
                    })
                })
            }
        }
    }), define("core/inlines", ["core/utils"], function() {
        return {
            run: function(e, t, n, r) {
                r.pub("start", "core/inlines"), t.normalize(), e.normativeReferences || (e.normativeReferences = {}), e.informativeReferences || (e.informativeReferences = {}), e.respecRFC2119 || (e.respecRFC2119 = {});
                var i = {},
                    a = {};
                $("abbr[title]", t).each(function() {
                    i[$(this).text()] = $(this).attr("title")
                }), $("acronym[title]", t).each(function() {
                    a[$(this).text()] = $(this).attr("title")
                });
                var s = [];
                for (var o in i) s.push(o);
                for (var o in a) s.push(o);
                s.sort(function(e, t) {
                    return t.length < e.length ? -1 : e.length < t.length ? 1 : 0
                });
                for (var l = s.length ? "(?:\\b" + s.join("\\b)|(?:\\b") + "\\b)" : null, c = $("body", t).allTextNodes(["pre"]), u = new RegExp("(\\bMUST(?:\\s+NOT)?\\b|\\bSHOULD(?:\\s+NOT)?\\b|\\bSHALL(?:\\s+NOT)?\\b|\\bMAY\\b|\\b(?:NOT\\s+)?REQUIRED\\b|\\b(?:NOT\\s+)?RECOMMENDED\\b|\\bOPTIONAL\\b|(?:\\[\\[(?:!|\\\\)?[A-Za-z0-9-]+\\]\\])" + (l ? "|" + l : "") + ")"), p = 0; p < c.length; p++) {
                    var d = c[p],
                        f = d.data.split(u);
                    if (1 !== f.length) {
                        for (var h = t.createDocumentFragment(); f.length;) {
                            var m = f.shift(),
                                g = null;
                            if (f.length && (g = f.shift()), h.appendChild(t.createTextNode(m)), g)
                                if (/MUST(?:\s+NOT)?|SHOULD(?:\s+NOT)?|SHALL(?:\s+NOT)?|MAY|(?:NOT\s+)?REQUIRED|(?:NOT\s+)?RECOMMENDED|OPTIONAL/.test(g)) g = g.split(/\s+/).join(" "), h.appendChild($("<em/>").attr({
                                    "class": "rfc2119",
                                    title: g
                                }).text(g)[0]), e.respecRFC2119[g] ? e.respecRFC2119[g] ++ : e.respecRFC2119[g] = 1;
                                else if (/^\[\[/.test(g)) {
                                var b = g;
                                if (b = b.replace(/^\[\[/, ""), b = b.replace(/\]\]$/, ""), 0 === b.indexOf("\\")) h.appendChild(t.createTextNode("[[" + b.replace(/^\\/, "") + "]]"));
                                else {
                                    var v = !1;
                                    0 === b.indexOf("!") && (v = !0, b = b.replace(/^!/, "")), v ? e.normativeReferences[b] = !0 : e.informativeReferences[b] = !0, h.appendChild(t.createTextNode("[")), h.appendChild($("<cite/>").wrapInner($("<a/>").attr({
                                        "class": "bibref",
                                        href: "#bib-" + b
                                    }).text(b))[0]), h.appendChild(t.createTextNode("]"))
                                }
                            } else i[g] ? $(d).parents("abbr").length ? h.appendChild(t.createTextNode(g)) : h.appendChild($("<abbr/>").attr({
                                title: i[g]
                            }).text(g)[0]) : a[g] ? $(d).parents("acronym").length ? h.appendChild(t.createTextNode(g)) : h.appendChild($("<acronym/>").attr({
                                title: a[g]
                            }).text(g)[0]) : r.pub("error", "Found token '" + g + "' but it does not correspond to anything")
                        }
                        d.parentNode.replaceChild(h, d)
                    }
                }
                r.pub("end", "core/inlines"), n()
            }
        }
    }), define("w3c/rfc2119", ["core/utils"], function(e) {
        return {
            run: function(t, n, r, i) {
                i.pub("start", "w3c/rfc2119");
                var a = $("#respecRFC2119");
                if (a.length) {
                    var s = Object.getOwnPropertyNames(t.respecRFC2119).sort();
                    if (s && s.length) {
                        var o = "The ",
                            l = function(e) {
                                var t = "<em class='rfc2119' title='" + e + "'>" + e + "</em>";
                                return t
                            };
                        o += s.length > 1 ? "key words " + e.joinAnd(s, l) + " are " : "key word " + e.joinAnd(s, l) + " is ", o += a[0].innerHTML, a[0].innerHTML = o
                    } else a.remove()
                }
                i.pub("end", "w3c/rfc2119"), r()
            }
        }
    }), define("text!core/css/examples.css", [], function() {
        return "/* --- EXAMPLES --- */\ndiv.example-title {\n    min-width: 7.5em;\n    color: #b9ab2d;\n}\ndiv.example-title span {\n    text-transform: uppercase;   \n}\naside.example, div.example, div.illegal-example {\n    padding: 0.5em;\n    margin: 1em 0;\n    position: relative;\n    clear: both;\n}\ndiv.illegal-example { color: red }\ndiv.illegal-example p { color: black }\naside.example, div.example {\n    padding: .5em;\n    border-left-width: .5em;\n    border-left-style: solid;\n    border-color: #e0cb52;\n    background: #fcfaee;    \n}\n\naside.example div.example {\n    border-left-width: .1em;\n    border-color: #999;\n    background: #fff;\n}\naside.example div.example div.example-title {\n    color: #999;\n}\n"
    }), define("core/examples", ["text!core/css/examples.css"], function(e) {
        var t = function(e, t, n) {
            var r = t > 0 ? " " + t : "",
                i = $("<div class='example-title'><span>Example" + r + "</span></div>");
            return n.title = e.attr("title"), n.title && (i.append(e[0].ownerDocument.createTextNode(": " + n.title)), e.removeAttr("title")), i
        };
        return {
            run: function(n, r, i, a) {
                a.pub("start", "core/examples");
                var s = $("pre.example, pre.illegal-example, aside.example"),
                    o = 0;
                s.length && ($(r).find("head link").first().before($("<style/>").text(e)), s.each(function(e, n) {
                    var r = $(n),
                        i = {
                            number: o,
                            illegal: r.hasClass("illegal-example")
                        };
                    if (r.is("aside")) {
                        o++;
                        var s = t(r, o, i);
                        r.prepend(s), a.pub("example", i)
                    } else {
                        var l = !!r.parents("aside").length;
                        l || o++;
                        for (var c = r.html().split("\n"); c.length && /^\s*$/.test(c[0]);) c.shift();
                        for (; c.length && /^\s*$/.test(c[c.length - 1]);) c.pop();
                        var u = /^(\s+)/.exec(c[0]);
                        if (u)
                            for (var p = new RegExp("^" + u[1]), d = 0; d < c.length; d++) c[d] = c[d].replace(p, "");
                        i.content = c.join("\n"), r.html(c.join("\n"));
                        var f = $("<div class='example'></div>"),
                            s = t(r, l ? 0 : o, i);
                        f.append(s), f.append(r.clone()), r.replaceWith(f), l || a.pub("example", i)
                    }
                })), a.pub("end", "core/examples"), i()
            }
        }
    }), define("text!core/css/issues-notes.css", [], function() {
        return "/* --- ISSUES/NOTES --- */\ndiv.issue-title, div.note-title {\n    padding-right:  1em;\n    min-width: 7.5em;\n    color: #b9ab2d;\n}\ndiv.issue-title { color: #e05252; }\ndiv.note-title { color: #2b2; }\ndiv.issue-title span, div.note-title span {\n    text-transform: uppercase;\n}\ndiv.note, div.issue {\n    margin-top: 1em;\n    margin-bottom: 1em;\n}\n.note > p:first-child, .issue > p:first-child { margin-top: 0 }\n.issue, .note {\n    padding: .5em;\n    border-left-width: .5em;\n    border-left-style: solid;\n}\ndiv.issue, div.note {\n    padding: 1em 1.2em 0.5em;\n    margin: 1em 0;\n    position: relative;\n    clear: both;\n}\nspan.note, span.issue { padding: .1em .5em .15em; }\n\n.issue {\n    border-color: #e05252;\n    background: #fbe9e9;\n}\n.note {\n    border-color: #52e052;\n    background: #e9fbe9;\n}\n\n\n"
    }), define("core/issues-notes", ["text!core/css/issues-notes.css"], function(e) {
        return {
            run: function(t, n, r, i) {
                i.pub("start", "core/issues-notes");
                var a = $(".issue, .note");
                if (a.length) {
                    $(n).find("head link").first().before($("<style/>").text(e));
                    var s = $(".issue[data-number]").length > 0,
                        o = 0;
                    a.each(function(e, r) {
                        var a = $(r),
                            l = a.hasClass("issue"),
                            c = a.hasClass("atrisk"),
                            u = "block" != a.css("display"),
                            p = a.attr("data-number"),
                            d = {
                                inline: u,
                                content: a.html()
                            };
                        if (d.type = l ? "issue" : "note", !l || u || s ? p && (d.number = p) : (o++, d.number = o), !u) {
                            var f = $("<div class='" + d.type + (c ? " atrisk" : "") + "'></div>"),
                                h = $("<div class='" + d.type + "-title'><span></span></div>"),
                                m = l ? c ? "Feature at Risk" : "Issue" : "Note";
                            l && (s ? p && (m += " " + p, !c && t.issueBase ? h.find("span").wrap($("<a href='" + t.issueBase + p + "'/>")) : c && t.atRiskBase && h.find("span").wrap($("<a href='" + t.atRiskBase + p + "'/>"))) : m += " " + o), h.find("span").text(m), d.title = a.attr("title"), d.title && (h.append(n.createTextNode(": " + d.title)), a.removeAttr("title")), f.append(h), f.append(a.clone().removeClass(d.type).removeAttr("data-number")), a.replaceWith(f)
                        }
                        i.pub(d.type, d)
                    })
                }
                i.pub("end", "core/issues-notes"), r()
            }
        }
    }), define("core/requirements", [], function() {
        return {
            run: function(e, t, n, r) {
                r.pub("start", "core/requirements"), $(".req").each(function(e) {
                    e++;
                    var t = $(this),
                        n = "Req. " + e;
                    r.pub("req", {
                        type: "req",
                        number: e,
                        content: t.html(),
                        title: n
                    }), t.prepend("<a href='#" + t.attr("id") + "'>" + n + "</a>: ")
                }), $("a.reqRef").each(function() {
                    var e, t, n, i = $(this),
                        a = i.attr("href");
                    a && (e = a.substring(1), t = $("#" + e), t.length ? n = t.find("> a").text() : (n = "Req. not found '" + e + "'", r.pub("error", "Requirement not found in a.reqRef: " + e)), i.text(n))
                }), r.pub("end", "core/requirements"), n()
            }
        }
    }), define("text!core/css/highlight.css", [], function() {
        return "/* HIGHLIGHTS */\ncode.prettyprint {\n    color:  inherit;\n}\n\n/* this from google-code-prettify */\n.pln{color:#000}@media screen{.str{color:#080}.kwd{color:#008}.com{color:#800}.typ{color:#606}.lit{color:#066}.pun,.opn,.clo{color:#660}.tag{color:#008}.atn{color:#606}.atv{color:#080}.dec,.var{color:#606}.fun{color:red}}@media print,projection{.str{color:#060}.kwd{color:#006;font-weight:bold}.com{color:#600;font-style:italic}.typ{color:#404;font-weight:bold}.lit{color:#044}.pun,.opn,.clo{color:#440}.tag{color:#006;font-weight:bold}.atn{color:#404}.atv{color:#060}}ol.linenums{margin-top:0;margin-bottom:0}li.L0,li.L1,li.L2,li.L3,li.L5,li.L6,li.L7,li.L8{list-style-type:none}li.L1,li.L3,li.L5,li.L7,li.L9{background:#eee}\n"
    });
var IN_GLOBAL_SCOPE = !0;
window.PR_SHOULD_USE_CONTINUATION = !0;
var prettyPrintOne, prettyPrint;
! function() {
    function e(e) {
        function t(e) {
            var t = e.charCodeAt(0);
            if (92 !== t) return t;
            var n = e.charAt(1);
            return t = p[n], t ? t : n >= "0" && "7" >= n ? parseInt(e.substring(1), 8) : "u" === n || "x" === n ? parseInt(e.substring(2), 16) : e.charCodeAt(1)
        }

        function n(e) {
            if (32 > e) return (16 > e ? "\\x0" : "\\x") + e.toString(16);
            var t = String.fromCharCode(e);
            return "\\" === t || "-" === t || "]" === t || "^" === t ? "\\" + t : t
        }

        function r(e) {
            var r = e.substring(1, e.length - 1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]", "g")),
                i = [],
                a = "^" === r[0],
                s = ["["];
            a && s.push("^");
            for (var o = a ? 1 : 0, l = r.length; l > o; ++o) {
                var c = r[o];
                if (/\\[bdsw]/i.test(c)) s.push(c);
                else {
                    var u, p = t(c);
                    l > o + 2 && "-" === r[o + 1] ? (u = t(r[o + 2]), o += 2) : u = p, i.push([p, u]), 65 > u || p > 122 || (65 > u || p > 90 || i.push([32 | Math.max(65, p), 32 | Math.min(u, 90)]), 97 > u || p > 122 || i.push([-33 & Math.max(97, p), -33 & Math.min(u, 122)]))
                }
            }
            i.sort(function(e, t) {
                return e[0] - t[0] || t[1] - e[1]
            });
            for (var d = [], f = [], o = 0; o < i.length; ++o) {
                var h = i[o];
                h[0] <= f[1] + 1 ? f[1] = Math.max(f[1], h[1]) : d.push(f = h)
            }
            for (var o = 0; o < d.length; ++o) {
                var h = d[o];
                s.push(n(h[0])), h[1] > h[0] && (h[1] + 1 > h[0] && s.push("-"), s.push(n(h[1])))
            }
            return s.push("]"), s.join("")
        }

        function i(e) {
            for (var t = e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)", "g")), i = t.length, o = [], l = 0, c = 0; i > l; ++l) {
                var u = t[l];
                if ("(" === u) ++c;
                else if ("\\" === u.charAt(0)) {
                    var p = +u.substring(1);
                    p && (c >= p ? o[p] = -1 : t[l] = n(p))
                }
            }
            for (var l = 1; l < o.length; ++l) - 1 === o[l] && (o[l] = ++a);
            for (var l = 0, c = 0; i > l; ++l) {
                var u = t[l];
                if ("(" === u) ++c, o[c] || (t[l] = "(?:");
                else if ("\\" === u.charAt(0)) {
                    var p = +u.substring(1);
                    p && c >= p && (t[l] = "\\" + o[p])
                }
            }
            for (var l = 0; i > l; ++l) "^" === t[l] && "^" !== t[l + 1] && (t[l] = "");
            if (e.ignoreCase && s)
                for (var l = 0; i > l; ++l) {
                    var u = t[l],
                        d = u.charAt(0);
                    u.length >= 2 && "[" === d ? t[l] = r(u) : "\\" !== d && (t[l] = u.replace(/[a-zA-Z]/g, function(e) {
                        var t = e.charCodeAt(0);
                        return "[" + String.fromCharCode(-33 & t, 32 | t) + "]"
                    }))
                }
            return t.join("")
        }
        for (var a = 0, s = !1, o = !1, l = 0, c = e.length; c > l; ++l) {
            var u = e[l];
            if (u.ignoreCase) o = !0;
            else if (/[a-z]/i.test(u.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ""))) {
                s = !0, o = !1;
                break
            }
        }
        for (var p = {
                b: 8,
                t: 9,
                n: 10,
                v: 11,
                f: 12,
                r: 13
            }, d = [], l = 0, c = e.length; c > l; ++l) {
            var u = e[l];
            if (u.global || u.multiline) throw new Error("" + u);
            d.push("(?:" + i(u) + ")")
        }
        return new RegExp(d.join("|"), o ? "gi" : "g")
    }

    function t(e, t) {
        function n(e) {
            var l = e.nodeType;
            if (1 == l) {
                if (r.test(e.className)) return;
                for (var c = e.firstChild; c; c = c.nextSibling) n(c);
                var u = e.nodeName.toLowerCase();
                ("br" === u || "li" === u) && (i[o] = "\n", s[o << 1] = a++, s[1 | o++ << 1] = e)
            } else if (3 == l || 4 == l) {
                var p = e.nodeValue;
                p.length && (p = t ? p.replace(/\r\n?/g, "\n") : p.replace(/[ \t\r\n]+/g, " "), i[o] = p, s[o << 1] = a, a += p.length, s[1 | o++ << 1] = e)
            }
        }
        var r = /(?:^|\s)nocode(?:\s|$)/,
            i = [],
            a = 0,
            s = [],
            o = 0;
        return n(e), {
            sourceCode: i.join("").replace(/\n$/, ""),
            spans: s
        }
    }

    function n(e, t, n, r) {
        if (t) {
            var i = {
                sourceCode: t,
                basePos: e
            };
            n(i), r.push.apply(r, i.decorations)
        }
    }

    function r(e) {
        for (var t = void 0, n = e.firstChild; n; n = n.nextSibling) {
            var r = n.nodeType;
            t = 1 === r ? t ? e : n : 3 === r ? B.test(n.nodeValue) ? e : t : t
        }
        return t === e ? void 0 : t
    }

    function i(t, r) {
        var i, a = {};
        ! function() {
            for (var n = t.concat(r), s = [], o = {}, l = 0, c = n.length; c > l; ++l) {
                var u = n[l],
                    p = u[3];
                if (p)
                    for (var d = p.length; --d >= 0;) a[p.charAt(d)] = u;
                var f = u[1],
                    h = "" + f;
                o.hasOwnProperty(h) || (s.push(f), o[h] = null)
            }
            s.push(/[\0-\uffff]/), i = e(s)
        }();
        var s = r.length,
            o = function(e) {
                for (var t = e.sourceCode, l = e.basePos, u = [l, $], p = 0, d = t.match(i) || [], f = {}, h = 0, m = d.length; m > h; ++h) {
                    var g, b = d[h],
                        v = f[b],
                        y = void 0;
                    if ("string" == typeof v) g = !1;
                    else {
                        var x = a[b.charAt(0)];
                        if (x) y = b.match(x[1]), v = x[0];
                        else {
                            for (var w = 0; s > w; ++w)
                                if (x = r[w], y = b.match(x[1])) {
                                    v = x[0];
                                    break
                                }
                            y || (v = $)
                        }
                        g = v.length >= 5 && "lang-" === v.substring(0, 5), !g || y && "string" == typeof y[1] || (g = !1, v = O), g || (f[b] = v)
                    }
                    var C = p;
                    if (p += b.length, g) {
                        var k = y[1],
                            S = b.indexOf(k),
                            T = S + k.length;
                        y[2] && (T = b.length - y[2].length, S = T - k.length);
                        var E = v.substring(5);
                        n(l + C, b.substring(0, S), o, u), n(l + C + S, k, c(E, k), u), n(l + C + T, b.substring(T), o, u)
                    } else u.push(l + C, v)
                }
                e.decorations = u
            };
        return o
    }

    function a(e) {
        var t = [],
            n = [];
        e.tripleQuotedStrings ? t.push([A, /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/, null, "'\""]) : e.multiLineStrings ? t.push([A, /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/, null, "'\"`"]) : t.push([A, /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, null, "\"'"]), e.verbatimStrings && n.push([A, /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null]);
        var r = e.hashComments;
        r && (e.cStyleComments ? (r > 1 ? t.push([P, /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, "#"]) : t.push([P, /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/, null, "#"]), n.push([A, /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, null])) : t.push([P, /^#[^\r\n]*/, null, "#"])), e.cStyleComments && (n.push([P, /^\/\/[^\r\n]*/, null]), n.push([P, /^\/\*[\s\S]*?(?:\*\/|$)/, null]));
        var a = e.regexLiterals;
        if (a) {
            var s = a > 1 ? "" : "\n\r",
                o = s ? "." : "[\\S\\s]",
                l = "/(?=[^/*" + s + "])" + "(?:[^/\\x5B\\x5C" + s + "]" + "|\\x5C" + o + "|\\x5B(?:[^\\x5C\\x5D" + s + "]" + "|\\x5C" + o + ")*(?:\\x5D|$))+" + "/";
            n.push(["lang-regex", RegExp("^" + W + "(" + l + ")")])
        }
        var c = e.types;
        c && n.push([L, c]);
        var u = ("" + e.keywords).replace(/^ | $/g, "");
        u.length && n.push([R, new RegExp("^(?:" + u.replace(/[\s,]+/g, "|") + ")\\b"), null]), t.push([$, /^\s+/, null, " \r\n	Â "]);
        var p = "^.[^\\s\\w.$@'\"`/\\\\]*";
        return e.regexLiterals && (p += "(?!s*/)"), n.push([j, /^@[a-z_$][a-z_$@0-9]*/i, null], [L, /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null], [$, /^[a-z_$][a-z_$@0-9]*/i, null], [j, new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"), null, "0123456789"], [$, /^\\[\s\S]?/, null], [I, new RegExp(p), null]), i(t, n)
    }

    function s(e, t, n) {
        function r(e) {
            var t = e.nodeType;
            if (1 != t || a.test(e.className)) {
                if ((3 == t || 4 == t) && n) {
                    var l = e.nodeValue,
                        c = l.match(s);
                    if (c) {
                        var u = l.substring(0, c.index);
                        e.nodeValue = u;
                        var p = l.substring(c.index + c[0].length);
                        if (p) {
                            var d = e.parentNode;
                            d.insertBefore(o.createTextNode(p), e.nextSibling)
                        }
                        i(e), u || e.parentNode.removeChild(e)
                    }
                }
            } else if ("br" === e.nodeName) i(e), e.parentNode && e.parentNode.removeChild(e);
            else
                for (var f = e.firstChild; f; f = f.nextSibling) r(f)
        }

        function i(e) {
            function t(e, n) {
                var r = n ? e.cloneNode(!1) : e,
                    i = e.parentNode;
                if (i) {
                    var a = t(i, 1),
                        s = e.nextSibling;
                    a.appendChild(r);
                    for (var o = s; o; o = s) s = o.nextSibling, a.appendChild(o)
                }
                return r
            }
            for (; !e.nextSibling;)
                if (e = e.parentNode, !e) return;
            for (var n, r = t(e.nextSibling, 0);
                (n = r.parentNode) && 1 === n.nodeType;) r = n;
            c.push(r)
        }
        for (var a = /(?:^|\s)nocode(?:\s|$)/, s = /\r\n?|\n/, o = e.ownerDocument, l = o.createElement("li"); e.firstChild;) l.appendChild(e.firstChild);
        for (var c = [l], u = 0; u < c.length; ++u) r(c[u]);
        t === (0 | t) && c[0].setAttribute("value", t);
        var p = o.createElement("ol");
        p.className = "linenums";
        for (var d = Math.max(0, 0 | t - 1) || 0, u = 0, f = c.length; f > u; ++u) l = c[u], l.className = "L" + (u + d) % 10, l.firstChild || l.appendChild(o.createTextNode("Â ")), p.appendChild(l);
        e.appendChild(p)
    }

    function o(e) {
        var t = /\bMSIE\s(\d+)/.exec(navigator.userAgent);
        t = t && +t[1] <= 8;
        var n = /\n/g,
            r = e.sourceCode,
            i = r.length,
            a = 0,
            s = e.spans,
            o = s.length,
            l = 0,
            c = e.decorations,
            u = c.length,
            p = 0;
        c[u] = i;
        var d, f;
        for (f = d = 0; u > f;) c[f] !== c[f + 2] ? (c[d++] = c[f++], c[d++] = c[f++]) : f += 2;
        for (u = d, f = d = 0; u > f;) {
            for (var h = c[f], m = c[f + 1], g = f + 2; u >= g + 2 && c[g + 1] === m;) g += 2;
            c[d++] = h, c[d++] = m, f = g
        }
        u = c.length = d;
        var b, v = e.sourceNode;
        v && (b = v.style.display, v.style.display = "none");
        try {
            for (; o > l;) {
                s[l];
                var y, x = s[l + 2] || i,
                    w = c[p + 2] || i,
                    g = Math.min(x, w),
                    C = s[l + 1];
                if (1 !== C.nodeType && (y = r.substring(a, g))) {
                    t && (y = y.replace(n, "\r")), C.nodeValue = y;
                    var k = C.ownerDocument,
                        S = k.createElement("span");
                    S.className = c[p + 1];
                    var T = C.parentNode;
                    T.replaceChild(S, C), S.appendChild(C), x > a && (s[l + 1] = C = k.createTextNode(r.substring(g, x)), T.insertBefore(C, S.nextSibling))
                }
                a = g, a >= x && (l += 2), a >= w && (p += 2)
            }
        } finally {
            v && (v.style.display = b)
        }
    }

    function l(e, t) {
        for (var n = t.length; --n >= 0;) {
            var r = t[n];
            U.hasOwnProperty(r) ? f.console && console.warn("cannot override language handler %s", r) : U[r] = e
        }
    }

    function c(e, t) {
        return e && U.hasOwnProperty(e) || (e = /^\s*</.test(t) ? "default-markup" : "default-code"), U[e]
    }

    function u(e) {
        var n = e.langExtension;
        try {
            var r = t(e.sourceNode, e.pre),
                i = r.sourceCode;
            e.sourceCode = i, e.spans = r.spans, e.basePos = 0, c(n, i)(e), o(e)
        } catch (a) {
            f.console && console.log(a && a.stack || a)
        }
    }

    function p(e, t, n) {
        var r = document.createElement("div");
        r.innerHTML = "<pre>" + e + "</pre>", r = r.firstChild, n && s(r, n, !0);
        var i = {
            langExtension: t,
            numberLines: n,
            sourceNode: r,
            pre: 1
        };
        return u(i), r.innerHTML
    }

    function d(e, t) {
        function n(e) {
            return a.getElementsByTagName(e)
        }

        function i() {
            for (var t = f.PR_SHOULD_USE_CONTINUATION ? m.now() + 250 : 1 / 0; b < c.length && m.now() < t; b++) {
                for (var n = c[b], a = S, l = n; l = l.previousSibling;) {
                    var p = l.nodeType,
                        d = (7 === p || 8 === p) && l.nodeValue;
                    if (d ? !/^\??prettify\b/.test(d) : 3 !== p || /\S/.test(l.nodeValue)) break;
                    if (d) {
                        a = {}, d.replace(/\b(\w+)=([\w:.%+-]+)/g, function(e, t, n) {
                            a[t] = n
                        });
                        break
                    }
                }
                var h = n.className;
                if ((a !== S || y.test(h)) && !x.test(h)) {
                    for (var T = !1, E = n.parentNode; E; E = E.parentNode) {
                        var D = E.tagName;
                        if (k.test(D) && E.className && y.test(E.className)) {
                            T = !0;
                            break
                        }
                    }
                    if (!T) {
                        n.className += " prettyprinted";
                        var N = a.lang;
                        if (!N) {
                            N = h.match(v);
                            var A;
                            !N && (A = r(n)) && C.test(A.tagName) && (N = A.className.match(v)), N && (N = N[1])
                        }
                        var R;
                        if (w.test(n.tagName)) R = 1;
                        else {
                            var P = n.currentStyle,
                                L = o.defaultView,
                                j = P ? P.whiteSpace : L && L.getComputedStyle ? L.getComputedStyle(n, null).getPropertyValue("white-space") : 0;
                            R = j && "pre" === j.substring(0, 3)
                        }
                        var I = a.linenums;
                        (I = "true" === I || +I) || (I = h.match(/\blinenums\b(?::(\d+))?/), I = I ? I[1] && I[1].length ? +I[1] : !0 : !1), I && s(n, I, R), g = {
                            langExtension: N,
                            sourceNode: n,
                            numberLines: I,
                            pre: R
                        }, u(g)
                    }
                }
            }
            b < c.length ? setTimeout(i, 250) : "function" == typeof e && e()
        }
        for (var a = t || document.body, o = a.ownerDocument || document, l = [n("pre"), n("code"), n("xmp")], c = [], p = 0; p < l.length; ++p)
            for (var d = 0, h = l[p].length; h > d; ++d) c.push(l[p][d]);
        l = null;
        var m = Date;
        m.now || (m = {
            now: function() {
                return +new Date
            }
        });
        var g, b = 0,
            v = /\blang(?:uage)?-([\w.]+)(?!\S)/,
            y = /\bprettyprint\b/,
            x = /\bprettyprinted\b/,
            w = /pre|xmp/i,
            C = /^code$/i,
            k = /^(?:pre|code|xmp)$/i,
            S = {};
        i()
    }
    var f = window,
        h = ["break,continue,do,else,for,if,return,while"],
        m = [h, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
        g = [m, "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],
        b = [g, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
        v = [g, "abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
        y = [g, "abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],
        x = "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",
        w = [g, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],
        C = "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
        k = [h, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
        S = [h, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
        T = [h, "as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],
        E = [h, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
        D = [b, y, w, C, k, S, E],
        N = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
        A = "str",
        R = "kwd",
        P = "com",
        L = "typ",
        j = "lit",
        I = "pun",
        $ = "pln",
        H = "tag",
        M = "dec",
        O = "src",
        F = "atn",
        _ = "atv",
        q = "nocode",
        W = "(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*",
        B = /\S/,
        z = a({
            keywords: D,
            hashComments: !0,
            cStyleComments: !0,
            multiLineStrings: !0,
            regexLiterals: !0
        }),
        U = {};
    l(z, ["default-code"]), l(i([], [
        [$, /^[^<?]+/],
        [M, /^<!\w[^>]*(?:>|$)/],
        [P, /^<\!--[\s\S]*?(?:-\->|$)/],
        ["lang-", /^<\?([\s\S]+?)(?:\?>|$)/],
        ["lang-", /^<%([\s\S]+?)(?:%>|$)/],
        [I, /^(?:<[%?]|[%?]>)/],
        ["lang-", /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],
        ["lang-js", /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],
        ["lang-css", /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],
        ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]
    ]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]), l(i([
        [$, /^[\s]+/, null, " 	\r\n"],
        [_, /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, "\"'"]
    ], [
        [H, /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],
        [F, /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
        ["lang-uq.val", /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
        [I, /^[=<>\/]+/],
        ["lang-js", /^on\w+\s*=\s*\"([^\"]+)\"/i],
        ["lang-js", /^on\w+\s*=\s*\'([^\']+)\'/i],
        ["lang-js", /^on\w+\s*=\s*([^\"\'>\s]+)/i],
        ["lang-css", /^style\s*=\s*\"([^\"]+)\"/i],
        ["lang-css", /^style\s*=\s*\'([^\']+)\'/i],
        ["lang-css", /^style\s*=\s*([^\"\'>\s]+)/i]
    ]), ["in.tag"]), l(i([], [
        [_, /^[\s\S]+/]
    ]), ["uq.val"]), l(a({
        keywords: b,
        hashComments: !0,
        cStyleComments: !0,
        types: N
    }), ["c", "cc", "cpp", "cxx", "cyc", "m"]), l(a({
        keywords: "null,true,false"
    }), ["json"]), l(a({
        keywords: y,
        hashComments: !0,
        cStyleComments: !0,
        verbatimStrings: !0,
        types: N
    }), ["cs"]), l(a({
        keywords: v,
        cStyleComments: !0
    }), ["java"]), l(a({
        keywords: E,
        hashComments: !0,
        multiLineStrings: !0
    }), ["bash", "bsh", "csh", "sh"]), l(a({
        keywords: k,
        hashComments: !0,
        multiLineStrings: !0,
        tripleQuotedStrings: !0
    }), ["cv", "py", "python"]), l(a({
        keywords: C,
        hashComments: !0,
        multiLineStrings: !0,
        regexLiterals: 2
    }), ["perl", "pl", "pm"]), l(a({
        keywords: S,
        hashComments: !0,
        multiLineStrings: !0,
        regexLiterals: !0
    }), ["rb", "ruby"]), l(a({
        keywords: w,
        cStyleComments: !0,
        regexLiterals: !0
    }), ["javascript", "js"]), l(a({
        keywords: x,
        hashComments: 3,
        cStyleComments: !0,
        multilineStrings: !0,
        tripleQuotedStrings: !0,
        regexLiterals: !0
    }), ["coffee"]), l(a({
        keywords: T,
        cStyleComments: !0,
        multilineStrings: !0
    }), ["rc", "rs", "rust"]), l(i([], [
        [A, /^[\s\S]+/]
    ]), ["regex"]);
    var G = f.PR = {
        createSimpleLexer: i,
        registerLangHandler: l,
        sourceDecorator: a,
        PR_ATTRIB_NAME: F,
        PR_ATTRIB_VALUE: _,
        PR_COMMENT: P,
        PR_DECLARATION: M,
        PR_KEYWORD: R,
        PR_LITERAL: j,
        PR_NOCODE: q,
        PR_PLAIN: $,
        PR_PUNCTUATION: I,
        PR_SOURCE: O,
        PR_STRING: A,
        PR_TAG: H,
        PR_TYPE: L,
        prettyPrintOne: IN_GLOBAL_SCOPE ? f.prettyPrintOne = p : prettyPrintOne = p,
        prettyPrint: prettyPrint = IN_GLOBAL_SCOPE ? f.prettyPrint = d : prettyPrint = d
    };
    "function" == typeof define && define.amd && define("google-code-prettify", [], function() {
        return G
    })
}(), define("core/highlight", ["text!core/css/highlight.css", "google-code-prettify"], function(e, t) {
    return {
        run: function(n, r, i, a) {
            a.pub("start", "core/highlight");
            for (var s = "sh_css sh_html sh_javascript sh_javascript_dom sh_xml".split(" "), o = 0, l = s.length; l > o; o++) {
                var c = s[o];
                $("." + c).each(function() {
                    $(this).removeClass(c).addClass("highlight"), a.pub("warn", "Old highlighting class '" + c + "', use 'highlight' instead.")
                })
            }
            var u = $("pre.highlight, code.highlight"),
                p = function() {
                    a.pub("end", "core/highlight"), i()
                };
            u.length ? (n.noHighlightCSS || $(r).find("head link").first().before($("<style/>").text(e)), u.addClass("prettyprint"), t.prettyPrint(p)) : p()
        }
    }
}), define("text!core/css/bp.css", [], function() {
    return "/* --- Best Practices --- */\ndiv.practice {\n    border: solid #bebebe 1px;\n    margin: 2em 1em 1em 2em;\n}\n\nspan.practicelab {\n    margin: 1.5em 0.5em 1em 1em;\n    font-weight: bold;\n    font-style: italic;\n    background: #dfffff;\n    position: relative;\n    padding: 0 0.5em;\n    top: -1.5em;\n}\n\np.practicedesc {\n    margin: 1.5em 0.5em 1em 1em;\n}\n\n@media screen {\n    p.practicedesc {\n        position: relative;\n        top: -2em;\n        padding: 0;\n        margin: 1.5em 0.5em -1em 1em;\n    }\n}\n"
}), define("core/best-practices", ["text!core/css/bp.css"], function(e) {
    return {
        run: function(t, n, r, i) {
            i.pub("start", "core/best-practices");
            var a = 0,
                s = $("span.practicelab", n),
                o = $("<div><h2>Best Practices Summary</h2><ul></ul></div>"),
                l = o.find("ul");
            s.each(function() {
                var e = $(this),
                    t = e.makeID("bp"),
                    r = $("<li><a></a></li>"),
                    i = r.find("a");
                a++, i.attr("href", "#" + t).text("Best Practice " + a), r.append(n.createTextNode(": " + e.text())), l.append(r), e.prepend(n.createTextNode("Best Practice " + a + ": "))
            }), s.length ? ($(n).find("head link").first().before($("<style/>").text(e)), $("#bp-summary") && $("#bp-summary").append(o.contents())) : $("#bp-summary").length && (i.pub("warn", "Using best practices summary (#bp-summary) but no best practices found."), $("#bp-summary").remove()), i.pub("end", "core/best-practices"), r()
        }
    }
}), define("core/figures", [], function() {
    return {
        run: function(e, t, n, r) {
            r.pub("start", "core/figures"), $(".figure", t).each(function(e, t) {
                var n = $(t),
                    i = n.attr("title") || n.find("[title]").attr("title") || n.attr("alt") || n.find("[alt]").attr("alt") || "",
                    a = $("<figcaption/>").text(i);
                n.is("div") ? (r.pub("warn", "You are using the deprecated div.figure syntax; please switch to <figure>."), n.append(a), n.renameElement("figure")) : (r.pub("warn", "You are using the deprecated img.figure syntax; please switch to <figure>."), n.wrap("<figure></figure>"), n.parent().append(a))
            });
            var i = {},
                a = [],
                s = 0;
            $("figure").each(function() {
                var e = $(this),
                    n = e.find("figcaption"),
                    o = n.text(),
                    l = e.makeID("fig", o);
                n.length || r.pub("warn", "A <figure> should contain a <figcaption>."), s++, n.wrapInner($("<span class='fig-title'/>")).prepend(t.createTextNode(" ")).prepend($("<span class='figno'>" + s + "</span>")).prepend(t.createTextNode("Fig. ")), i[l] = n.contents().clone();
                var c = n.clone();
                c.find("a").renameElement("span").removeAttr("href"), a.push($("<li class='tofline'><a class='tocxref' href='#" + l + "'></a></li>").find(".tocxref").append(c.contents()).end())
            }), $("a[href]", t).each(function() {
                var e = $(this),
                    t = e.attr("href");
                t && (t = t.substring(1), i[t] && (e.addClass("fig-ref"), "" === e.html() && e.append(i[t])))
            });
            var o = $("#tof", t);
            if (a.length && o.length) {
                o.hasClass("appendix") || o.hasClass("introductory") || o.parents("section").length || (o.prevAll("section.introductory").length == o.prevAll("section").length ? o.addClass("introductory") : o.prevAll("appendix").length && o.addClass("appendix")), o.append($("<h2>Table of Figures</h2>")), o.append($("<ul class='tof'/>"));
                for (var l = o.find("ul"); a.length;) l.append(a.shift())
            }
            r.pub("end", "core/figures"), n()
        }
    }
}), define("core/rdfa", [], function() {
    return {
        run: function(e, t, n, r) {
            r.pub("start", "core/rdfa"), e.doRDFa !== !1 && $("section").each(function() {
                var e = $(this),
                    t = "",
                    n = e.children("*").first(),
                    r = e.attr("id");
                r ? t = "#" + r : n.length && (r = n.attr("id"), r && (t = "#" + r)), "" !== t && e.attr({
                    "typeof": "bibo:Chapter",
                    resource: t,
                    rel: "bibo:Chapter"
                })
            }), r.pub("end", "core/rdfa"), n()
        }
    }
}), define("tmpl!core/css/webidl-oldschool.css", ["handlebars"], function() {
    return Handlebars.compile('/* --- WEB IDL --- */\npre.idl {\n    border-top: 1px solid #90b8de;\n    border-bottom: 1px solid #90b8de;\n    padding:    1em;\n    line-height:    120%;\n}\n\npre.idl::before {\n    content:    "WebIDL";\n    display:    block;\n    width:      150px;\n    background: #90b8de;\n    color:  #fff;\n    font-family:    initial;\n    padding:    3px;\n    font-weight:    bold;\n    margin: -1em 0 1em -1em;\n}\n\n.idlType {\n    color:  #ff4500;\n    font-weight:    bold;\n    text-decoration:    none;\n}\n\n/*.idlModule*/\n/*.idlModuleID*/\n/*.idlInterface*/\n.idlInterfaceID, .idlDictionaryID, .idlCallbackID, .idlEnumID {\n    font-weight:    bold;\n    color:  #005a9c;\n}\na.idlEnumItem {\n    color:  #000;\n    border-bottom:  1px dotted #ccc;\n    text-decoration: none;\n}\n\n.idlSuperclass {\n    font-style: italic;\n    color:  #005a9c;\n}\n\n/*.idlAttribute*/\n.idlAttrType, .idlFieldType, .idlMemberType {\n    color:  #005a9c;\n}\n.idlAttrName, .idlFieldName, .idlMemberName {\n    color:  #ff4500;\n}\n.idlAttrName a, .idlFieldName a, .idlMemberName a {\n    color:  #ff4500;\n    border-bottom:  1px dotted #ff4500;\n    text-decoration: none;\n}\n\n/*.idlMethod*/\n.idlMethType, .idlCallbackType {\n    color:  #005a9c;\n}\n.idlMethName {\n    color:  #ff4500;\n}\n.idlMethName a {\n    color:  #ff4500;\n    border-bottom:  1px dotted #ff4500;\n    text-decoration: none;\n}\n\n/*.idlCtor*/\n.idlCtorName {\n    color:  #ff4500;\n}\n.idlCtorName a {\n    color:  #ff4500;\n    border-bottom:  1px dotted #ff4500;\n    text-decoration: none;\n}\n\n/*.idlParam*/\n.idlParamType {\n    color:  #005a9c;\n}\n.idlParamName, .idlDefaultValue {\n    font-style: italic;\n}\n\n.extAttr {\n    color:  #666;\n}\n\n/*.idlSectionComment*/\n.idlSectionComment {\n    color: gray;\n}\n\n/*.idlConst*/\n.idlConstType {\n    color:  #005a9c;\n}\n.idlConstName {\n    color:  #ff4500;\n}\n.idlConstName a {\n    color:  #ff4500;\n    border-bottom:  1px dotted #ff4500;\n    text-decoration: none;\n}\n\n/*.idlException*/\n.idlExceptionID {\n    font-weight:    bold;\n    color:  #c00;\n}\n\n.idlTypedefID, .idlTypedefType {\n    color:  #005a9c;\n}\n\n.idlRaises, .idlRaises a.idlType, .idlRaises a.idlType code, .excName a, .excName a code {\n    color:  #c00;\n    font-weight:    normal;\n}\n\n.excName a {\n    font-family:    monospace;\n}\n\n.idlRaises a.idlType, .excName a.idlType {\n    border-bottom:  1px dotted #c00;\n}\n\n.excGetSetTrue, .excGetSetFalse, .prmNullTrue, .prmNullFalse, .prmOptTrue, .prmOptFalse {\n    width:  45px;\n    text-align: center;\n}\n.excGetSetTrue, .prmNullTrue, .prmOptTrue { color:  #0c0; }\n.excGetSetFalse, .prmNullFalse, .prmOptFalse { color:  #c00; }\n\n.idlImplements a {\n    font-weight:    bold;\n}\n\ndl.attributes, dl.methods, dl.constants, dl.constructors, dl.fields, dl.dictionary-members {\n    margin-left:    2em;\n}\n\n.attributes dt, .methods dt, .constants dt, .constructors dt, .fields dt, .dictionary-members dt {\n    font-weight:    normal;\n}\n\n.attributes dt code, .methods dt code, .constants dt code, .constructors dt code, .fields dt code, .dictionary-members dt code {\n    font-weight:    bold;\n    color:  #000;\n    font-family:    monospace;\n}\n\n.attributes dt code, .fields dt code, .dictionary-members dt code {\n    background:  #ffffd2;\n}\n\n.attributes dt .idlAttrType code, .fields dt .idlFieldType code, .dictionary-members dt .idlMemberType code {\n    color:  #005a9c;\n    background:  transparent;\n    font-family:    inherit;\n    font-weight:    normal;\n    font-style: italic;\n}\n\n.methods dt code {\n    background:  #d9e6f8;\n}\n\n.constants dt code {\n    background:  #ddffd2;\n}\n\n.constructors dt code {\n    background:  #cfc;\n}\n\n.attributes dd, .methods dd, .constants dd, .constructors dd, .fields dd, .dictionary-members dd {\n    margin-bottom:  1em;\n}\n\ntable.parameters, table.exceptions {\n    border-spacing: 0;\n    border-collapse:    collapse;\n    margin: 0.5em 0;\n    width:  100%;\n}\ntable.parameters { border-bottom:  1px solid #90b8de; }\ntable.exceptions { border-bottom:  1px solid #deb890; }\n\n.parameters th, .exceptions th {\n    color:  #fff;\n    padding:    3px 5px;\n    text-align: left;\n    font-family:    initial;\n    font-weight:    normal;\n    text-shadow:    #666 1px 1px 0;\n}\n.parameters th { background: #90b8de; }\n.exceptions th { background: #deb890; }\n\n.parameters td, .exceptions td {\n    padding:    3px 10px;\n    border-top: 1px solid #ddd;\n    vertical-align: top;\n}\n\n.parameters tr:first-child td, .exceptions tr:first-child td {\n    border-top: none;\n}\n\n.parameters td.prmName, .exceptions td.excName, .exceptions td.excCodeName {\n    width:  100px;\n}\n\n.parameters td.prmType {\n    width:  120px;\n}\n\ntable.exceptions table {\n    border-spacing: 0;\n    border-collapse:    collapse;\n    width:  100%;\n}\n')
}), define("tmpl!core/templates/webidl/module.html", ["handlebars"], function() {
    return Handlebars.compile("<span class='idlModule'>{{extAttr obj indent true }}{{idn indent}}module <span class='idlModuleID'>{{obj.id}}</span> {\n{{#each obj.children}}{{asWebIDL proc this indent}}{{/each}}\n{{idn indent}}};</span>\n")
}), define("tmpl!core/templates/webidl/typedef.html", ["handlebars"], function() {
    return Handlebars.compile("<span class='idlTypedef' id='idl-def-{{obj.refId}}'>typedef {{extAttr obj 0 false\n}}<span class='idlTypedefType'>{{datatype obj.datatype\n}}</span>{{arr}}{{nullable}} <span class='idlTypedefID'>{{obj.id}}</span>;</span>\n")
}), define("tmpl!core/templates/webidl/implements.html", ["handlebars"], function() {
    return Handlebars.compile("<span class='idlImplements'>{{extAttr obj indent true}}{{idn indent}}<a>{{obj.id}}</a> implements <a>{{obj.datatype}}</a>;</span>\n")
}), define("tmpl!core/templates/webidl/dict-member.html", ["handlebars"], function() {
    return Handlebars.compile("<span class='idlMember'>{{extAttr obj indent true\n}}{{idn indent}}<span class='idlMemberType'>{{datatype obj.datatype}}{{arr}}{{nullable}}</span> {{pads pad\n}}<span class='idlMemberName'><a href='#{{curLnk}}{{obj.refId}}'>{{obj.id}}</a></span>{{#if obj.defaultValue\n}} = <span class='idlMemberValue'>{{obj.defaultValue}}</span>{{/if}};</span>\n")
}), define("tmpl!core/templates/webidl/dictionary.html", ["handlebars"], function() {
    return Handlebars.compile("<span class='idlDictionary' id='idl-def-{{obj.refId}}'>{{extAttr obj indent true\n}}{{idn indent}}{{partial}}dictionary <span class='idlDictionaryID'>{{obj.id}}</span>{{superclasses obj}} {\n{{{children}}}};</span>\n")
}), define("tmpl!core/templates/webidl/enum-item.html", ["handlebars"], function() {
    return Handlebars.compile('{{idn indent}}"<a href="#idl-def-{{parentID}}.{{obj.refId}}" class="idlEnumItem">{{obj.id}}</a>"')
}), define("tmpl!core/templates/webidl/enum.html", ["handlebars"], function() {
    return Handlebars.compile("<span class='idlEnum' id='idl-def-{{obj.refId}}'>{{extAttr obj indent true\n}}{{idn indent}}enum <span class='idlEnumID'>{{obj.id}}</span> {\n{{{children}}}\n{{idn indent}}}};")
}), define("tmpl!core/templates/webidl/const.html", ["handlebars"], function() {
    return Handlebars.compile("<span class='idlConst'>{{extAttr obj indent true\n}}{{idn indent}}const <span class='idlConstType'><a>{{obj.datatype}}</a>{{nullable}}</span> {{pads pad\n}}<span class='idlConstName'><a href='#{{curLnk}}{{obj.refId}}'>{{obj.id\n}}</a></span> = <span class='idlConstValue'>{{obj.value}}</span>;</span>\n")
}), define("tmpl!core/templates/webidl/param.html", ["handlebars"], function() {
    return Handlebars.compile("<span class='idlParam'>{{extAttr obj 0 false\n}}{{optional}}<span class='idlParamType'>{{datatype obj.datatype}}{{arr}}{{nullable}}{{variadic\n}}</span> <span class='idlParamName'>{{obj.id}}</span>{{#if obj.defaultValue\n}} = <span class='idlDefaultValue'>{{obj.defaultValue}}</span>{{/if}}</span>")
}), define("tmpl!core/templates/webidl/callback.html", ["handlebars"], function() {
    return Handlebars.compile("<span class='idlCallback' id='idl-def-{{obj.refId}}'>{{extAttr obj indent true\n}}{{idn indent}}callback <span class='idlCallbackID'>{{obj.id\n}}</span> = <span class='idlCallbackType'>{{datatype obj.datatype}}{{arr}}{{nullable}}</span> ({{{children}}});</span>\n")
}), define("tmpl!core/templates/webidl/method.html", ["handlebars"], function() {
    return Handlebars.compile("<span class='idlMethod'>{{extAttr obj indent true\n}}{{idn indent}}{{static}}<span class='idlMethType'>{{datatype obj.datatype}}{{arr}}{{nullable}}</span> {{pads pad\n}}<span class='idlMethName'><a href='#{{id}}'>{{obj.id}}</a></span> ({{{children}}});</span>\n")
}), define("tmpl!core/templates/webidl/constructor.html", ["handlebars"], function() {
    return Handlebars.compile("<span class='idlCtor'>{{extAttr obj indent true\n}}{{idn indent}} <span class='idlCtorKeyword'>{{keyword}}</span><span class='idlCtorName'><a href='#{{id}}'>{{name}}</a></span>{{param obj children}}</span>")
}), define("tmpl!core/templates/webidl/attribute.html", ["handlebars"], function() {
    return Handlebars.compile("<span class='idlAttribute'>{{extAttr obj indent true\n}}{{idn indent}}{{declaration}} attribute <span class='idlAttrType'>{{datatype obj.datatype}}{{arr}}{{nullable}}</span> {{pads\npad}}<span class='idlAttrName'><a href='#{{href}}'>{{obj.id}}</a></span>;</span>\n")
}), define("tmpl!core/templates/webidl/serializer.html", ["handlebars"], function() {
    return Handlebars.compile("<span class='idlSerializer'>{{extAttr obj indent true\n}}{{idn indent}}serializer{{#if values}} = <span class='idlSerializerValues'>{{values}}</span>{{/if}};</span>\n")
}), define("tmpl!core/templates/webidl/comment.html", ["handlebars"], function() {
    return Handlebars.compile("<span class='idlSectionComment'>{{extAttr obj indent true\n}}{{idn indent}}// {{comment}}</span>\n")
}), define("tmpl!core/templates/webidl/field.html", ["handlebars"], function() {
    return Handlebars.compile("<span class='idlField'>{{extAttr obj indent true\n}}{{idn indent}}<span class='idlFieldType'>{{datatype obj.datatype}}{{arr}}{{nullable}}</span> {{pads\npad}}<span class='idlFieldName'><a href='#{{href}}'>{{obj.id}}</a></span>;</span>\n")
}), define("tmpl!core/templates/webidl/exception.html", ["handlebars"], function() {
    return Handlebars.compile("<span class='idlException' id='idl-def-{{obj.refId}}'>{{extAttr obj indent true\n}}{{idn indent}}exception <span class='idlExceptionID'>{{obj.id}}</span>{{superclasses obj}} {\n{{{children}}}{{idn indent}}}};</span>")
}), define("tmpl!core/templates/webidl/interface.html", ["handlebars"], function() {
    return Handlebars.compile("<span class='idlInterface' id='{{id}}'>{{extAttr obj indent true ctor\n}}{{idn indent}}{{partial}}{{callback}}interface <span class='idlInterfaceID'>{{obj.id}}</span>{{superclasses obj}} {\n{{{children}}}{{idn indent}}}};</span>")
});
var sn;
define("core/webidl-oldschool", ["handlebars", "tmpl!core/css/webidl-oldschool.css", "tmpl!core/templates/webidl/module.html", "tmpl!core/templates/webidl/typedef.html", "tmpl!core/templates/webidl/implements.html", "tmpl!core/templates/webidl/dict-member.html", "tmpl!core/templates/webidl/dictionary.html", "tmpl!core/templates/webidl/enum-item.html", "tmpl!core/templates/webidl/enum.html", "tmpl!core/templates/webidl/const.html", "tmpl!core/templates/webidl/param.html", "tmpl!core/templates/webidl/callback.html", "tmpl!core/templates/webidl/method.html", "tmpl!core/templates/webidl/constructor.html", "tmpl!core/templates/webidl/attribute.html", "tmpl!core/templates/webidl/serializer.html", "tmpl!core/templates/webidl/comment.html", "tmpl!core/templates/webidl/field.html", "tmpl!core/templates/webidl/exception.html", "tmpl!core/templates/webidl/interface.html"], function(e, t, n, r, i, a, s, o, l, c, u, p, d, f, h, m, g, b, v, y) {
    var x = function(e) {
            this.parent = {
                type: "module",
                id: "outermost",
                children: []
            }, e || (e = {});
            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
            Handlebars.registerHelper("extAttr", function(e, t, n, r) {
                var i = "";
                return e.extendedAttributes ? i += w(t) + "[<span class='extAttr'>" + e.extendedAttributes + "</span>" + ("string" == typeof r && r.length ? ",\n" + r : "") + "]" + (n ? "\n" : " ") : "string" == typeof r && r.length && (i += w(t) + "[" + r + "]" + (n ? "\n" : " ")), new Handlebars.SafeString(i)
            }), Handlebars.registerHelper("param", function(e, t) {
                var n = "";
                return t && (n += " (" + t + ")"), new Handlebars.SafeString(n)
            }), Handlebars.registerHelper("idn", function(e) {
                return new Handlebars.SafeString(w(e))
            }), Handlebars.registerHelper("asWebIDL", function(e, t, n) {
                return new Handlebars.SafeString(e.writeAsWebIDL(t, n))
            }), Handlebars.registerHelper("datatype", function(e) {
                return new Handlebars.SafeString(S(e))
            }), Handlebars.registerHelper("pads", function(e) {
                return new Handlebars.SafeString(T(e))
            }), Handlebars.registerHelper("superclasses", function(e) {
                if (!e.superclasses || !e.superclasses.length) return "";
                var t = " : " + e.superclasses.map(function(e) {
                    return "<span class='idlSuperclass'><a>" + e + "</a></span>"
                }).join(", ");
                return new Handlebars.SafeString(t)
            })
        },
        w = function(e) {
            for (var t = "", n = 0; e > n; n++) t += "    ";
            return t
        },
        C = function(e) {
            return e.replace(/^\s+/, "").replace(/\s+$/, "").split(/\s+/).join(" ")
        },
        k = function(e) {
            for (var t = "", n = 0, r = e.arrayCount; r > n; n++) t += "[]";
            return t
        },
        S = function(e) {
            if ($.isArray(e)) {
                for (var t = [], n = 0, r = e.length; r > n; n++) t.push(S(e[n]));
                return "(" + t.join(" or ") + ")"
            }
            var i = /^(sequence|Promise|CancelablePromise|EventStream)<(.+)>$/.exec(e);
            return i ? i[1] + "&lt;<a>" + S(i[2]) + "</a>&gt;" : "<a>" + e + "</a>"
        },
        T = function(e) {
            for (var t = "", n = 0; e > n; n++) t += " ";
            return t
        };
    return x.prototype = {
        setID: function(e, t) {
            e.id = t, e.refId = e.id.replace(/[^a-zA-Z_\-]/g, ""), e.unescapedId = "_" == e.id[0] ? e.id.slice(1) : e.id
        },
        nullable: function(e, t) {
            return e.nullable = !1, /\?$/.test(t) && (t = t.replace(/\?$/, ""), e.nullable = !0), t
        },
        array: function(e, t) {
            return e.array = !1, /\[\]$/.test(t) && (e.arrayCount = 0, t = t.replace(/(?:\[\])/g, function() {
                return e.arrayCount++, ""
            }), e.array = !0), t
        },
        params: function(e, t, n) {
            var r = {};
            e = this.parseExtendedAttributes(e, r);
            var i = /^\s*(?:in\s+)?([^,=]+)\s+\b([^,]+)\s*(?:,)?\s*/,
                a = i.exec(e);
            if (!a) return this.msg.pub("error", "Expected parameter list, got: " + e), !1;
            e = e.replace(i, "");
            var s = a[1],
                o = a[2],
                l = o.split(/\s*=\s*/),
                c = null;
            return 1 === l.length ? o = o.replace(/\s+/g, "") : (o = l[0], c = l[1]), this.parseDatatype(r, s), r.defaultValue = c, this.setID(r, o), t && (r.description = t.contents()), n.params.push(r), e
        },
        optional: function(e) {
            if (e.isUnionType) return e.optional = !1, !1;
            var t = e.datatype.split(/\s+/),
                n = t.indexOf("optional"),
                r = !1;
            return n > -1 && (r = !0, t.splice(n, 1), e.datatype = t.join(" ")), e.optional = r, r
        },
        definition: function(e) {
            var t = {
                    children: []
                },
                n = e.attr("title"),
                r = e.attr("id");
            if (n || this.msg.pub("error", "No IDL definition in element."), n = this.parseExtendedAttributes(n, t), 0 === n.indexOf("partial")) {
                var i = n.slice(8);
                0 === i.indexOf("interface") ? this.processInterface(t, n, e, {
                    partial: !0
                }) : 0 === i.indexOf("dictionary") ? this.dictionary(t, i, e, {
                    partial: !0
                }) : this.msg.pub("error", "Expected definition, got: " + n)
            } else 0 === n.indexOf("interface") || /^callback\s+interface\b/.test(n) ? this.processInterface(t, n, e) : 0 === n.indexOf("exception") ? this.exception(t, n, e) : 0 === n.indexOf("dictionary") ? this.dictionary(t, n, e) : 0 === n.indexOf("callback") ? this.callback(t, n, e) : 0 === n.indexOf("enum") ? this.processEnum(t, n, e) : 0 === n.indexOf("typedef") ? this.typedef(t, n, e) : /\bimplements\b/.test(n) ? this.processImplements(t, n, e) : this.msg.pub("error", "Expected definition, got: " + n);
            return this.parent.children.push(t), this.processMembers(t, e), r && (t.htmlID = r), t
        },
        processInterface: function(e, t, n, r) {
            r = r || {}, e.type = "interface", e.partial = r.partial || !1;
            var i = /^\s*(?:(partial|callback)\s+)?interface\s+([A-Za-z][A-Za-z0-9]*)(?:\s+:\s*([^{]+)\s*)?/.exec(t);
            return i ? (e.callback = !!i[1] && "callback" === i[1], this.setID(e, i[2]), n.attr("data-merge") && (e.merge = n.attr("data-merge").split(" ")), i[3] && (e.superclasses = i[3].split(/\s*,\s*/))) : this.msg.pub("error", "Expected interface, got: " + t), e
        },
        dictionary: function(e, t, n, r) {
            return r = r || {}, e.partial = r.partial || !1, this.excDic("dictionary", e, t, n)
        },
        exception: function(e, t, n) {
            return this.excDic("exception", e, t, n)
        },
        excDic: function(e, t, n) {
            t.type = e;
            var r = new RegExp("^\\s*" + e + "\\s+([A-Za-z][A-Za-z0-9]*)(?:\\s+:\\s*([^{]+)\\s*)?\\s*"),
                i = r.exec(n);
            return i ? (this.setID(t, i[1]), i[2] && (t.superclasses = i[2].split(/\s*,\s*/))) : this.msg.pub("error", "Expected " + e + ", got: " + n), t
        },
        callback: function(e, t) {
            e.type = "callback";
            var n = /^\s*callback\s+([A-Za-z][A-Za-z0-9]*)\s*=\s*\b(.*?)\s*$/.exec(t);
            if (n) {
                this.setID(e, n[1]);
                var r = n[2];
                this.parseDatatype(e, r)
            } else this.msg.pub("error", "Expected callback, got: " + t);
            return e
        },
        processEnum: function(e, t) {
            e.type = "enum";
            var n = /^\s*enum\s+([A-Za-z][A-Za-z0-9]*)\s*$/.exec(t);
            return n ? this.setID(e, n[1]) : this.msg.pub("error", "Expected enum, got: " + t), e
        },
        typedef: function(e, t, n) {
            e.type = "typedef", t = t.replace(/^\s*typedef\s+/, ""), t = this.parseExtendedAttributes(t, e);
            var r = /^(.+)\s+(\S+)\s*$/.exec(t);
            if (r) {
                var i = r[1];
                this.parseDatatype(e, i), this.setID(e, r[2]), e.description = n.contents()
            } else this.msg.pub("error", "Expected typedef, got: " + t);
            return e
        },
        processImplements: function(e, t, n) {
            e.type = "implements";
            var r = /^\s*(.+?)\s+implements\s+(.+)\s*$/.exec(t);
            return r ? (this.setID(e, r[1]), e.datatype = r[2], e.description = n.contents()) : this.msg.pub("error", "Expected implements, got: " + t), e
        },
        processMembers: function(e, t) {
            var n = this.parent,
                r = this;
            this.parent = e, t.find("> dt").each(function() {
                var t, n = $(this),
                    i = n.next(),
                    a = e.type;
                t = "exception" === a ? r.exceptionMember(n, i) : "dictionary" === a ? r.dictionaryMember(n, i) : "callback" === a ? r.callbackMember(n, i) : "enum" === a ? r.processEnumMember(n, i) : r.interfaceMember(n, i), e.children.push(t)
            }), this.parent = n
        },
        parseConst: function(e, t) {
            var n = /^\s*const\s+\b([^=]+\??)\s+([^=\s]+)\s*=\s*(.*)$/.exec(t);
            if (n) {
                e.type = "constant";
                var r = n[1];
                return this.parseDatatype(e, r), this.setID(e, n[2]), e.value = n[3], !0
            }
            return !1
        },
        exceptionMember: function(e, t) {
            var n = {
                    children: []
                },
                r = C(e.text());
            if (n.description = t.contents(), r = this.parseExtendedAttributes(r, n), this.parseConst(n, r)) return n;
            var i = /^\s*(.*?)\s+(\S+)\s*$/.exec(r);
            if (i) {
                n.type = "field";
                var a = i[1];
                return this.parseDatatype(n, a), this.setID(n, i[2]), n
            }
            this.msg.pub("error", "Expected exception member, got: " + r)
        },
        dictionaryMember: function(e, t) {
            var n = {
                    children: []
                },
                r = C(e.text());
            n.description = t.contents(), r = this.parseExtendedAttributes(r, n);
            var i = /^\s*([^=]+\??)\s+([^=\s]+)(?:\s*=\s*(.*))?$/.exec(r);
            if (i) {
                n.type = "member";
                var a = i[1];
                return n.defaultValue = i[3], this.setID(n, i[2]), this.parseDatatype(n, a), n
            }
            this.msg.pub("error", "Expected dictionary member, got: " + r)
        },
        callbackMember: function(e, t) {
            var n = {
                    children: []
                },
                r = C(e.text());
            n.description = t.contents(), r = this.parseExtendedAttributes(r, n);
            var i = /^\s*(.*?)\s+([A-Za-z][A-Za-z0-9]*)\s*$/.exec(r);
            if (i) {
                n.type = "member";
                var a = i[1];
                return this.setID(n, i[2]), n.defaultValue = i[3], this.parseDatatype(n, a), this.optional(n), n
            }
            this.msg.pub("error", "Expected callback member, got: " + r)
        },
        processEnumMember: function(e, t) {
            var n = {
                    children: []
                },
                r = C(e.text());
            return n.description = t.contents(), r = this.parseExtendedAttributes(r, n), n.type = "member", this.setID(n, r), n.refId = sn.sanitiseID(n.id), n
        },
        interfaceMember: function(e, t) {
            var n = {
                    children: []
                },
                r = C(e.text()),
                i = t.find("dl.parameters").first(),
                a = t.find(".getraises, .setraises"),
                s = t.find("dl.exception").first();
            n.description = t.contents().not("dl.parameters"), r = this.parseExtendedAttributes(r, n);
            var o;
            if (o = /^\s*(?:(readonly|inherit|stringifier)\s+)?attribute\s+(.*?)\s+(\S+)\s*$/.exec(r)) {
                n.type = "attribute", n.declaration = o[1] ? o[1] : "", n.declaration += new Array(12 - n.declaration.length).join(" ");
                var l = o[2];
                return this.parseDatatype(n, l), this.setID(n, o[3]), n.raises = [], a.each(function() {
                    var e = $(this),
                        t = {
                            id: e.attr("title"),
                            onSet: e.hasClass("setraises"),
                            onGet: e.hasClass("getraises")
                        };
                    e.is("dl") ? (t.type = "codelist", t.description = [], e.find("dt").each(function() {
                        var e = $(this),
                            n = e.next("dd");
                        t.description.push({
                            id: e.text(),
                            description: n.contents().clone()
                        })
                    })) : e.is("div") ? (t.type = "simple", t.description = e.contents().clone()) : this.msg.pub("error", "Do not know what to do with exceptions being raised defined outside of a div or dl."), e.remove(), n.raises.push(t)
                }), n
            }
            if (this.parseConst(n, r)) return n;
            if (o = /^\s*Constructor(?:\s*\(\s*(.*)\s*\))?\s*$/.exec(r)) {
                n.type = "constructor";
                var c = o[1] ? o[1] : [];
                return this.setID(n, this.parent.id), n.named = !1, n.datatype = "", this.methodMember(n, s, i, c)
            }
            if (o = /^\s*NamedConstructor\s*(?:=\s*)?\b([^(]+)(?:\s*\(\s*(.*)\s*\))?\s*$/.exec(r)) {
                n.type = "constructor";
                var c = o[2] ? o[2] : [];
                return this.setID(n, o[1]), n.named = !0, n.datatype = "", this.methodMember(n, s, i, c)
            }
            if (o = /^\s*(.*?)\s+\b(\S+?)\s*\(\s*(.*)\s*\)\s*$/.exec(r)) {
                n.type = "method";
                var l = o[1],
                    c = o[3];
                return l = this.parseStatic(n, l), this.parseDatatype(n, l), this.setID(n, o[2]), this.methodMember(n, s, i, c)
            }
            if (o = /^\s*serializer(\s*=\s*((\{\s*(\S+(\s*,\s*\S+)*)?\s*\})|(\[(\s*\S+(\s*,\s*\S+)*)?\s*\])|(\S+)))?\s*$/.exec(r)) {
                n.type = "serializer", n.values = [], this.setID(n, "serializer");
                var u, p = o[3],
                    d = o[6],
                    f = o[9];
                if (p ? (n.serializertype = "map", u = o[4]) : d ? (n.serializertype = "list", u = o[7]) : f ? (n.serializertype = "attribute", n.values.push(f)) : n.serializertype = "prose", u) {
                    var h = u.split(/\s*,\s*/);
                    n.getter = !1, n.inherit = !1, n.all = !1, "getter" == h[0] ? n.getter = !0 : ("map" == n.serializertype && ("inherit" == h[0] && (n.inherit = !0, h.shift()), "attribute" == h[0] && "map" == n.serializertype && (n.all = !0, h = [])), n.values = h)
                }
                return n
            }
            return (o = /^\s*\/\/\s*(.*)\s*$/.exec(r)) ? (n.type = "comment", n.id = o[1], n) : (this.msg.pub("error", "Expected interface member, got: " + r), void 0)
        },
        methodMember: function(e, t, n, r) {
            if (e.params = [], e.raises = [], t.each(function() {
                    var t = $(this),
                        n = {
                            id: t.attr("title")
                        };
                    t.is("dl") ? (n.type = "codelist", n.description = [], t.find("dt").each(function() {
                        var e = $(this),
                            t = e.next("dd");
                        n.description.push({
                            id: e.text(),
                            description: t.contents().clone()
                        })
                    })) : t.is("div") ? (n.type = "simple", n.description = t.contents().clone()) : this.msg.pub("error", "Do not know what to do with exceptions being raised defined outside of a div or dl."), t.remove(), e.raises.push(n)
                }), n.length) {
                n.remove();
                var i = this;
                n.find("> dt").each(function() {
                    return i.params($(this).text(), $(this).next(), e)
                })
            } else
                for (; r.length && (r = this.params(r, null, e), r !== !1););
            for (var a = !1, s = 0; s < e.params.length; s++) a ? (e.params[s].optional = !0, e.params[s].datatype = e.params[s].datatype.replace(/\boptional\s+/, "")) : a = this.optional(e.params[s]);
            return e
        },
        parseDatatype: function(e, t) {
            t = this.nullable(e, t), t = this.array(e, t), e.variadic = !1, /\.\.\./.test(t) && (t = t.replace(/\.\.\./, ""), e.variadic = !0), 0 === t.indexOf("(") ? (t = t.replace("(", "").replace(")", ""), e.datatype = t.split(/\s+or\s+/), e.isUnionType = !0) : e.datatype = t
        },
        parseStatic: function(e, t) {
            return /^static\s+/.test(t) ? (t = t.replace(/^static\s+/, ""), e.isStatic = !0) : e.isStatic = !1, t
        },
        parseExtendedAttributes: function(e, t) {
            return e ? e.replace(/^\s*\[([^\]]+)\]\s*/, function(e, n) {
                return t.extendedAttributes = n, ""
            }) : void 0
        },
        makeMarkup: function(e) {
            var t = $("<div></div>"),
                n = {
                    "class": "idl"
                };
            e && (n.id = e);
            var r = $("<pre></pre>").attr(n);
            return r.html(this.writeAsWebIDL(this.parent, -1)), t.append(r), this.conf.noLegacyStyle || t.append(this.writeAsHTML(this.parent)), this.mergeWebIDL(this.parent.children[0]), t.children()
        },
        parseParameterized: function(e) {
            var t = /^(sequence|Promise|CancelablePromise|EventStream)<(.+)>$/.exec(e);
            return t ? {
                type: t[1],
                parameter: t[2]
            } : null
        },
        writeAsHTML: function(e) {
            if ("module" == e.type) return "outermost" == e.id ? (e.children.length > 1 && this.msg.pub("error", "We currently only support one structural level per IDL fragment"), this.writeAsHTML(e.children[0])) : (this.msg.pub("warn", "No HTML can be generated for module definitions."), $("<span></span>"));
            if ("typedef" == e.type) {
                var t;
                if (e.description && e.description.text()) t = [e.description];
                else {
                    var n = sn.element("span", {
                        "class": "idlTypedefType"
                    }, null);
                    n.html(S(e.datatype)), t = [sn.text("Throughout this specification, the identifier "), sn.element("span", {
                        "class": "idlTypedefID"
                    }, null, e.unescapedId), sn.text(" is used to refer to the "), sn.text(e.array ? (e.arrayCount > 1 ? e.arrayCount + "-" : "") + "array of " : ""), n, sn.text(e.nullable ? " (nullable)" : ""), sn.text(" type.")]
                }
                return sn.element("div", {
                    "class": "idlTypedefDesc"
                }, null, t)
            }
            if ("implements" == e.type) {
                var t;
                return e.description && e.description.text() ? t = [e.description] : (t = [sn.text("All instances of the "), sn.element("code", {}, null, [sn.element("a", {}, null, e.unescapedId)]), sn.text(" type are defined to also implement the "), sn.element("a", {}, null, e.datatype), sn.text(" interface.")], t = [sn.element("p", {}, null, t)]), sn.element("div", {
                    "class": "idlImplementsDesc"
                }, null, t)
            }
            if ("exception" == e.type) {
                for (var r = sn.documentFragment(), i = "widl-" + e.refId + "-", a = ["field", "constant"], s = function(e) {
                        return e.type === c
                    }, o = function(e, t) {
                        return e.unescapedId < t.unescapedId ? -1 : e.unescapedId > t.unescapedId ? 1 : 0
                    }, l = 0; l < a.length; l++) {
                    var c = a[l],
                        u = e.children.filter(s);
                    if (0 !== u.length) {
                        this.noIDLSorting || u.sort(o);
                        var p = sn.element("section", {}, r),
                            d = c;
                        d = d.substr(0, 1).toUpperCase() + d.substr(1) + "s", this.conf.noIDLSectionTitle || sn.element("h2", {}, p, d);
                        for (var f = sn.element("dl", {
                                "class": c + "s"
                            }, p), h = 0; h < u.length; h++) {
                            var m = u[h],
                                g = sn.element("dt", {
                                    id: i + m.refId
                                }, f);
                            sn.element("code", {}, g, m.unescapedId);
                            var b = sn.element("dd", {}, f, [m.description]);
                            if ("field" == c) {
                                if (sn.text(" of type ", g), m.array)
                                    for (var v = 0, y = m.arrayCount; y > v; v++) sn.text("array of ", g);
                                var x = sn.element("span", {
                                        "class": "idlFieldType"
                                    }, g),
                                    w = this.parseParameterized(m.datatype);
                                w ? (sn.text(w.type + "<", x), sn.element("a", {}, x, w.parameter), sn.text(">", x)) : sn.element("a", {}, x, m.datatype), m.nullable && sn.text(", nullable", g)
                            } else "constant" == c && (sn.text(" of type ", g), sn.element("span", {
                                "class": "idlConstType"
                            }, g, [sn.element("a", {}, null, m.datatype)]), m.nullable && sn.text(", nullable", g))
                        }
                    }
                }
                return r
            }
            if ("dictionary" == e.type) {
                var t, r = sn.documentFragment(),
                    i = "widl-" + e.refId + "-",
                    u = e.children;
                if (0 === u.length) return r;
                this.noIDLSorting || u.sort(function(e, t) {
                    return e.id < t.id ? -1 : e.id > t.id ? 1 : 0
                });
                var p = sn.element("section", {}, r);
                t = [sn.text("Dictionary "), sn.element("a", {
                    "class": "idlType"
                }, null, e.unescapedId), sn.text(" Members")], this.conf.noIDLSectionTitle || sn.element("h2", {}, p, t);
                for (var f = sn.element("dl", {
                        "class": "dictionary-members"
                    }, p), h = 0; h < u.length; h++) {
                    var m = u[h],
                        g = sn.element("dt", {
                            id: i + m.refId
                        }, f);
                    sn.element("code", {}, g, m.unescapedId);
                    var b = sn.element("dd", {}, f, [m.description]);
                    if (sn.text(" of type ", g), m.array)
                        for (var l = 0, y = m.arrayCount; y > l; l++) sn.text("array of ", g);
                    var x = sn.element("span", {
                            "class": "idlMemberType"
                        }, g),
                        w = this.parseParameterized(m.datatype);
                    w ? (sn.text(w.type + "<", x), sn.element("a", {}, x, w.parameter), sn.text(">", x)) : sn.element("a", {}, x, m.isUnionType ? "(" + m.datatype.join(" or ") + ")" : m.datatype), m.nullable && sn.text(", nullable", g), m.defaultValue && (sn.text(", defaulting to ", g), sn.element("code", {}, g, [sn.text(m.defaultValue)]))
                }
                return r
            }
            if ("callback" == e.type) {
                var t, r = sn.documentFragment(),
                    i = "widl-" + e.refId + "-",
                    u = e.children;
                if (0 === u.length) return r;
                var p = sn.element("section", {}, r);
                t = [sn.text("Callback "), sn.element("a", {
                    "class": "idlType"
                }, null, e.unescapedId), sn.text(" Parameters")], this.conf.noIDLSectionTitle || sn.element("h2", {}, p, t);
                for (var f = sn.element("dl", {
                        "class": "callback-members"
                    }, p), h = 0; h < u.length; h++) {
                    var m = u[h],
                        g = sn.element("dt", {
                            id: i + m.refId
                        }, f);
                    sn.element("code", {}, g, m.unescapedId);
                    var b = sn.element("dd", {}, f, [m.description]);
                    if (sn.text(" of type ", g), m.array)
                        for (var l = 0, y = m.arrayCount; y > l; l++) sn.text("array of ", g);
                    var x = sn.element("span", {
                            "class": "idlMemberType"
                        }, g),
                        w = this.parseParameterized(m.datatype);
                    w ? (sn.text(w.type + "<", x), sn.element("a", {}, x, w.parameter), sn.text(">", x)) : sn.element("a", {}, x, m.isUnionType ? "(" + m.datatype.join(" or ") + ")" : m.datatype), m.nullable && sn.text(", nullable", g), m.defaultValue && (sn.text(", defaulting to ", g), sn.element("code", {}, g, [sn.text(m.defaultValue)]))
                }
                return r
            }
            if ("enum" == e.type) {
                var r = sn.documentFragment(),
                    u = e.children;
                if (0 === u.length) return r;
                var p = sn.element("table", {
                    "class": "simple"
                }, r);
                sn.element("tr", {}, p, [sn.element("th", {
                    colspan: 2
                }, null, [sn.text("Enumeration description")])]);
                for (var h = 0; h < u.length; h++) {
                    var m = u[h],
                        C = sn.element("tr", {}, p),
                        T = sn.element("td", {}, C);
                    sn.element("code", {
                        id: "idl-def-" + e.refId + "." + m.refId
                    }, T, m.unescapedId), sn.element("td", {}, C, [m.description])
                }
                return r
            }
            if ("interface" == e.type) {
                for (var r = sn.documentFragment(), i = "widl-" + e.refId + "-", a = ["constructor", "attribute", "method", "constant", "serializer"], s = function(e) {
                        return e.type == c
                    }, o = function(e, t) {
                        return e.unescapedId < t.unescapedId ? -1 : e.unescapedId > t.unescapedId ? 1 : 0
                    }, l = 0; l < a.length; l++) {
                    var c = a[l],
                        u = e.children.filter(s);
                    if (0 !== u.length) {
                        this.noIDLSorting || u.sort(o);
                        var p = sn.element("section", {}, r),
                            d = c;
                        if (d = d.substr(0, 1).toUpperCase() + d.substr(1) + ("serializer" != c ? "s" : ""), this.conf.noIDLSectionTitle || sn.element("h2", {}, p, d), "serializer" != c)
                            for (var f = sn.element("dl", {
                                    "class": c + "s"
                                }, p), h = 0; h < u.length; h++) {
                                var m = u[h],
                                    E = "method" == c ? this.makeMethodID(i, m) : "constructor" == c ? this.makeMethodID("widl-ctor-", m) : sn.idThatDoesNotExist(i + m.refId),
                                    g = sn.element("dt", {
                                        id: E
                                    }, f);
                                sn.element("code", {}, g, m.unescapedId), m.isStatic && g.append(this.doc.createTextNode(", static"));
                                var b = sn.element("dd", {}, f, [m.description]);
                                if ("method" == c || "constructor" == c) {
                                    if (m.params.length) {
                                        var D = sn.element("table", {
                                                "class": "parameters"
                                            }, b),
                                            C = sn.element("tr", {}, D);
                                        ["Parameter", "Type", "Nullable", "Optional", "Description"].forEach(function(e) {
                                            sn.element("th", {}, C, e)
                                        });
                                        for (var v = 0; v < m.params.length; v++) {
                                            var N = m.params[v],
                                                C = sn.element("tr", {}, D);
                                            sn.element("td", {
                                                "class": "prmName"
                                            }, C, N.id);
                                            var A = sn.element("td", {
                                                    "class": "prmType"
                                                }, C),
                                                R = sn.element("code", {}, A),
                                                P = S(N.datatype);
                                            N.array && (P += k(N)), N.defaultValue && (P += " = " + N.defaultValue), R.html(P), N.nullable ? sn.element("td", {
                                                "class": "prmNullTrue"
                                            }, C, $("<span role='img' aria-label='True'>âœ”</span>")) : sn.element("td", {
                                                "class": "prmNullFalse"
                                            }, C, $("<span role='img' aria-label='False'>âœ˜</span>")), N.optional ? sn.element("td", {
                                                "class": "prmOptTrue"
                                            }, C, $("<span role='img' aria-label='True'>âœ”</span>")) : sn.element("td", {
                                                "class": "prmOptFalse"
                                            }, C, $("<span role='img' aria-label='False'>âœ˜</span>"));
                                            var t = N.description ? [N.description] : "";
                                            sn.element("td", {
                                                "class": "prmDesc"
                                            }, C, t)
                                        }
                                    } else sn.element("div", {}, b, [sn.element("em", {}, null, "No parameters.")]);
                                    if (this.conf.idlOldStyleExceptions && m.raises.length) {
                                        var D = sn.element("table", {
                                                "class": "exceptions"
                                            }, b),
                                            C = sn.element("tr", {}, D);
                                        ["Exception", "Description"].forEach(function(e) {
                                            sn.element("th", {}, C, e)
                                        });
                                        for (var v = 0; v < m.raises.length; v++) {
                                            var L = m.raises[v],
                                                C = sn.element("tr", {}, D);
                                            sn.element("td", {
                                                "class": "excName"
                                            }, C, [sn.element("a", {}, null, L.id)]);
                                            var j = sn.element("td", {
                                                "class": "excDesc"
                                            }, C);
                                            if ("simple" == L.type) j.append(L.description);
                                            else
                                                for (var I = sn.element("table", {
                                                        "class": "exceptionCodes"
                                                    }, j), H = 0; H < L.description.length; H++) {
                                                    var M = L.description[H],
                                                        C = sn.element("tr", {}, I);
                                                    sn.element("td", {
                                                        "class": "excCodeName"
                                                    }, C, [sn.element("code", {}, null, M.id)]), sn.element("td", {
                                                        "class": "excCodeDesc"
                                                    }, C, [M.description])
                                                }
                                        }
                                    }
                                    if ("constructor" !== c) {
                                        var O = sn.element("div", {}, b);
                                        sn.element("em", {}, O, "Return type: ");
                                        var R = sn.element("code", {}, O),
                                            P = S(m.datatype);
                                        m.array && (P += k(m)), m.nullable && sn.text(", nullable", O), R.html(P)
                                    }
                                } else if ("attribute" == c) {
                                    if (sn.text(" of type ", g), m.array)
                                        for (var H = 0, y = m.arrayCount; y > H; H++) sn.text("array of ", g);
                                    var x = sn.element("span", {
                                            "class": "idlAttrType"
                                        }, g),
                                        w = this.parseParameterized(m.datatype);
                                    if (w ? (sn.text(w.type + "<", x), sn.element("a", {}, x, w.parameter), sn.text(">", x)) : sn.element("a", {}, x, m.isUnionType ? "(" + m.datatype.join(" or ") + ")" : m.datatype), m.declaration && sn.text(", " + m.declaration, g), m.nullable && sn.text(", nullable", g), this.conf.idlOldStyleExceptions && m.raises.length) {
                                        var D = sn.element("table", {
                                                "class": "exceptions"
                                            }, b),
                                            C = sn.element("tr", {}, D);
                                        ["Exception", "On Get", "On Set", "Description"].forEach(function(e) {
                                            sn.element("th", {}, C, e)
                                        });
                                        for (var v = 0; v < m.raises.length; v++) {
                                            var L = m.raises[v],
                                                C = sn.element("tr", {}, D);
                                            sn.element("td", {
                                                "class": "excName"
                                            }, C, [sn.element("a", {}, null, L.id)]), ["onGet", "onSet"].forEach(function(e) {
                                                L[e] ? sn.element("td", {
                                                    "class": "excGetSetTrue"
                                                }, C, $("<span role='img' aria-label='True'>âœ”</span>")) : sn.element("td", {
                                                    "class": "excGetSetFalse"
                                                }, C, $("<span role='img' aria-label='False'>âœ˜</span>"))
                                            });
                                            var j = sn.element("td", {
                                                "class": "excDesc"
                                            }, C);
                                            if ("simple" == L.type) j.append(L.description);
                                            else
                                                for (var I = sn.element("table", {
                                                        "class": "exceptionCodes"
                                                    }, j), H = 0; H < L.description.length; H++) {
                                                    var M = L.description[H],
                                                        C = sn.element("tr", {}, I);
                                                    sn.element("td", {
                                                        "class": "excCodeName"
                                                    }, C, [sn.element("code", {}, null, M.id)]), sn.element("td", {
                                                        "class": "excCodeDesc"
                                                    }, C, [M.description])
                                                }
                                        }
                                    }
                                } else "constant" == c && (sn.text(" of type ", g), sn.element("span", {
                                    "class": "idlConstType"
                                }, g, [sn.element("a", {}, null, m.datatype)]), m.nullable && sn.text(", nullable", g))
                            } else {
                                var F = sn.element("div", {}, p),
                                    m = u[0];
                                if ("prose" != m.serializertype) {
                                    var _ = "Instances of this interface are serialized as ";
                                    if ("map" == m.serializertype) {
                                        var q = "a map ";
                                        if (m.getter) q += "with entries corresponding to the named properties";
                                        else {
                                            var W = "";
                                            m.inherit && (q += "with entries from the closest inherited interface ", W = "and "), m.all ? q += W + "with entries for each of the serializable attributes" : m.values && m.values.length ? q += W + "with entries for the following attributes: " + m.values.join(", ") : q = "an empty map"
                                        }
                                        _ += q
                                    } else if ("list" == m.serializertype) {
                                        var B = "a list ";
                                        m.getter ? B += "with values corresponding to the indexed properties" : m.values && m.values.length ? B += "with the values of the following attributes: " + m.values.join(", ") : B = "an empty list", _ += B
                                    } else "attribute" == m.serializertype && (_ += "the value of the attribute " + m.values[0]);
                                    _ += ".", sn.element("p", {}, F, _)
                                }
                                sn.element("p", {}, F, [m.description])
                            }
                    }
                }
                return r
            }
        },
        makeMethodID: function(e, t) {
            for (var n = e + t.refId + "-" + t.datatype + "-", r = [], i = 0, a = t.params.length; a > i; i++) {
                var s = t.params[i];
                r.push(s.datatype + (s.array ? "Array" : "") + "-" + s.id)
            }
            return n += r.join("-"), sn.sanitiseID(n)
        },
        mergeWebIDL: function(e) {
            "undefined" != typeof e.merge && 0 !== e.merge.length && setTimeout(function() {
                for (var t = 0; t < e.merge.length; t++) {
                    var n = document.querySelector("#idl-def-" + e.refId),
                        r = document.querySelector("#idl-def-" + e.merge[t]);
                    n.insertBefore(document.createElement("br"), n.firstChild), n.insertBefore(document.createElement("br"), n.firstChild), r.parentNode.parentNode.removeChild(r.parentNode), n.insertBefore(r, n.firstChild)
                }
            }, 0)
        },
        writeAsWebIDL: function(e, t) {
            t++;
            var a = {
                indent: t,
                obj: e,
                proc: this
            };
            if ("module" === e.type) {
                if ("outermost" == e.id) {
                    for (var c = $("<div></div>"), d = 0; d < e.children.length; d++) c.append(this.writeAsWebIDL(e.children[d], t - 1));
                    return c.children()
                }
                return $(n(a))
            }
            if ("typedef" === e.type) return a.nullable = e.nullable ? "?" : "", a.arr = k(e), $(r(a));
            if ("implements" === e.type) return $(i(a));
            if ("interface" === e.type) {
                var f = this.doc.createElement("div"),
                    h = $(f).makeID("idl-def", e.refId, !0),
                    m = 0,
                    g = 0,
                    b = 0,
                    x = !1;
                e.children.forEach(function(e) {
                    var t = 0;
                    e.isUnionType ? t = e.datatype.join(" or ").length + 2 : e.datatype && (t = e.datatype.length), e.isStatic && (t += 7), e.nullable && (t += 1), e.array && (t += 2 * e.arrayCount), "attribute" == e.type ? m = t > m ? t : m : "method" == e.type ? g = t > g ? t : g : "constant" == e.type && (b = t > b ? t : b), "attribute" == e.type && e.declaration && (x = !0)
                });
                var w = "widl-" + e.refId + "-",
                    C = this,
                    S = [],
                    T = e.children.map(function(e) {
                        if ("attribute" == e.type) return C.writeAttribute(e, m, t + 1, w, x);
                        if ("method" == e.type) return C.writeMethod(e, g, t + 1, w);
                        if ("constant" == e.type) return C.writeConst(e, b, t + 1, w);
                        if ("serializer" == e.type) return C.writeSerializer(e, t + 1, w);
                        if ("constructor" == e.type) S.push(C.writeConstructor(e, t, "widl-ctor-"));
                        else if ("comment" == e.type) return C.writeComment(e, t + 1)
                    }).join("");
                return y({
                    obj: e,
                    indent: t,
                    id: h,
                    ctor: S.join(",\n"),
                    partial: e.partial ? "partial " : "",
                    callback: e.callback ? "callback " : "",
                    children: T
                })
            }
            if ("exception" === e.type) {
                var m = 0,
                    b = 0;
                e.children.forEach(function(e) {
                    var t = e.datatype.length;
                    e.nullable && (t += 1), e.array && (t += 2 * e.arrayCount), "field" === e.type ? m = t > m ? t : m : "constant" === e.type && (b = t > b ? t : b)
                });
                var w = "widl-" + e.refId + "-",
                    C = this,
                    T = e.children.map(function(e) {
                        return "field" === e.type ? C.writeField(e, m, t + 1, w) : "constant" === e.type ? C.writeConst(e, b, t + 1, w) : void 0
                    }).join("");
                return v({
                    obj: e,
                    indent: t,
                    children: T
                })
            }
            if ("dictionary" === e.type) {
                var E = 0;
                e.children.forEach(function(e) {
                    var t = 0;
                    e.isUnionType ? t = e.datatype.join(" or ").length + 2 : e.datatype && (t = e.datatype.length), e.nullable && (t += 1), e.array && (t += 2 * e.arrayCount), E = t > E ? t : E
                });
                var w = "widl-" + e.refId + "-",
                    C = this,
                    T = e.children.map(function(e) {
                        return C.writeMember(e, E, t + 1, w)
                    }).join("");
                return s({
                    obj: e,
                    indent: t,
                    children: T,
                    partial: e.partial ? "partial " : ""
                })
            }
            if ("callback" === e.type) {
                var D = e.children.map(function(e) {
                    return u({
                        obj: e,
                        optional: e.optional ? "optional " : "",
                        arr: k(e),
                        nullable: e.nullable ? "?" : "",
                        variadic: e.variadic ? "..." : ""
                    })
                }).join(", ");
                return p({
                    obj: e,
                    indent: t,
                    arr: k(e),
                    nullable: e.nullable ? "?" : "",
                    children: D
                })
            }
            if ("enum" === e.type) {
                var T = e.children.map(function(n) {
                    return o({
                        obj: n,
                        parentID: e.refId,
                        indent: t + 1
                    })
                }).join(",\n");
                return l({
                    obj: e,
                    indent: t,
                    children: T
                })
            }
        },
        writeField: function(e, t, n, r) {
            var i = t - e.datatype.length;
            return e.nullable && (i -= 1), e.array && (i -= 2 * e.arrayCount), b({
                obj: e,
                indent: n,
                arr: k(e),
                nullable: e.nullable ? "?" : "",
                pad: i,
                href: r + e.refId
            })
        },
        writeAttribute: function(e, t, n, r) {
            var i = 0;
            e.isUnionType ? i = e.datatype.join(" or ").length + 2 : e.datatype && (i = e.datatype.length);
            var a = t - i;
            return e.nullable && (a -= 1), e.array && (a -= 2 * e.arrayCount), h({
                obj: e,
                indent: n,
                declaration: e.declaration,
                pad: a,
                arr: k(e),
                nullable: e.nullable ? "?" : "",
                href: r + e.refId
            })
        },
        writeMethod: function(e, t, n, r) {
            var i = e.params.map(function(e) {
                    return u({
                        obj: e,
                        optional: e.optional ? "optional " : "",
                        arr: k(e),
                        nullable: e.nullable ? "?" : "",
                        variadic: e.variadic ? "..." : ""
                    })
                }).join(", "),
                a = 0;
            a = e.isUnionType ? e.datatype.join(" or ").length + 2 : e.datatype.length, e.isStatic && (a += 7);
            var s = t - a;
            return e.nullable && (s -= 1), e.array && (s -= 2 * e.arrayCount), d({
                obj: e,
                indent: n,
                arr: k(e),
                nullable: e.nullable ? "?" : "",
                "static": e.isStatic ? "static " : "",
                pad: s,
                id: this.makeMethodID(r, e),
                children: i
            })
        },
        writeConstructor: function(e, t, n) {
            var r = e.params.map(function(e) {
                return u({
                    obj: e,
                    optional: e.optional ? "optional " : "",
                    arr: k(e),
                    nullable: e.nullable ? "?" : "",
                    variadic: e.variadic ? "..." : ""
                })
            }).join(", ");
            return f({
                obj: e,
                indent: t,
                id: this.makeMethodID(n, e),
                name: e.named ? e.id : "Constructor",
                keyword: e.named ? "NamedConstructor=" : "",
                children: r
            })
        },
        writeConst: function(e, t, n) {
            var r = t - e.datatype.length;
            return e.nullable && r--, c({
                obj: e,
                indent: n,
                pad: r,
                nullable: e.nullable ? "?" : ""
            })
        },
        writeComment: function(e, t) {
            return g({
                obj: e,
                indent: t,
                comment: e.id
            })
        },
        writeSerializer: function(e, t) {
            var n = "";
            if ("map" == e.serializertype) {
                var r = [];
                e.getter ? r = ["getter"] : (e.inherit && r.push("inherit"), e.all ? r.push("attribute") : r = r.concat(e.values)), n = "{" + r.join(", ") + "}"
            } else if ("list" == e.serializertype) {
                var i = e.getter ? ["getter"] : e.values;
                n = "[" + i.join(", ") + "]"
            } else "attribute" == e.serializertype && (n = e.values[0]);
            return m({
                obj: e,
                indent: t,
                values: n
            })
        },
        writeMember: function(e, t, n, r) {
            var i = {
                obj: e,
                indent: n,
                curLnk: r,
                nullable: e.nullable ? "?" : "",
                arr: k(e)
            };
            return e.isUnionType ? i.pad = t - (e.datatype.join(" or ").length + 2) : e.datatype && (i.pad = t - e.datatype.length), e.nullable && (i.pad = i.pad - 1), e.array && (i.pad = i.pad - 2 * e.arrayCount), a(i)
        }
    }, {
        run: function(e, n, r, i) {
            i.pub("start", "core/webidl"), e.noIDLSorting || (e.noIDLSorting = !1), e.noIDLSectionTitle || (e.noIDLSectionTitle = !1), sn = new simpleNode(document);
            var a = $(".idl", n),
                s = function() {
                    i.pub("end", "core/webidl"), r()
                };
            if (!a.length) return s();
            $(n).find("head link").first().before($("<style/>").text(t));
            var o = [];
            a.each(function() {
                var t = new x({
                        noIDLSorting: e.noIDLSorting,
                        msg: i,
                        doc: n,
                        conf: e
                    }),
                    r = t.definition($(this)),
                    a = t.makeMarkup(r.htmlID);
                $(this).replaceWith(a), -1 !== $.inArray(r.type, "interface exception dictionary typedef callback enum".split(" ")) && o.push(r.id)
            }), n.normalize(), $("a:not([href])").each(function() {
                var e = $(this);
                if (!e.hasClass("externalDFN")) {
                    var t = e.text(); - 1 !== $.inArray(t, o) && e.attr("href", "#idl-def-" + t).addClass("idlType").html("<code>" + t + "</code>")
                }
            }), s()
        }
    }
}), window.simpleNode = function(e) {
    this.doc = e ? e : document
}, window.simpleNode.prototype = {
    element: function(e, t, n, r) {
        var i = $(this.doc.createElement(e));
        if (i.attr(t || {}), n && $(n).append(i), r)
            if (r instanceof jQuery) i.append(r);
            else if (r instanceof Array)
            for (var a = 0; a < r.length; a++) i.append(r[a]);
        else this.text(r, i);
        return i
    },
    text: function(e, t) {
        var n = this.doc.createTextNode(e);
        return t && $(t).append(n), n
    },
    documentFragment: function() {
        return this.doc.createDocumentFragment()
    },
    sanitiseID: function(e) {
        return e = e.split(/[^\-.0-9a-zA-Z_]/).join("-"), e = e.replace(/^-+/g, ""), e = e.replace(/-+$/, ""), e.length > 0 && /^[^a-z]/.test(e) && (e = "x" + e), 0 === e.length && (e = "generatedID"), e
    },
    idThatDoesNotExist: function(e) {
        var t = 1;
        if (this.doc.getElementById(e)) {
            for (; this.doc.getElementById(e + "-" + t);) t++;
            e = e + "-" + t
        }
        return e
    }
}, define("core/dfn", [], function() {
    return {
        run: function(e, t, n, r) {
            r.pub("start", "core/dfn"), t.normalize(), e.definitionMap || (e.definitionMap = {}), $("dfn").each(function() {
                var t = $(this).dfnTitle();
                e.definitionMap[t] && r.pub("error", "Duplicate definition of '" + t + "'"), e.definitionMap[t] = $(this).makeID("dfn", t)
            }), $("a:not([href])").each(function() {
                var t = $(this);
                if (!t.hasClass("externalDFN")) {
                    var n = t.dfnTitle();
                    !e.definitionMap[n] || e.definitionMap[n] instanceof Function ? (t.parents(".idl, dl.methods, dl.attributes, dl.constants, dl.constructors, dl.fields, dl.dictionary-members, span.idlMemberType, span.idlTypedefType, div.idlImplementsDesc").length || r.pub("warn", "Found linkless <a> element with text '" + n + "' but no matching <dfn>."), t.replaceWith(t.contents())) : t.attr("href", "#" + e.definitionMap[n]).addClass("internalDFN")
                }
            }), r.pub("end", "core/dfn"), n()
        }
    }
}), define("core/fix-headers", [], function() {
    return {
        run: function(e, t, n, r) {
            r.pub("start", "core/fix-headers");
            var i = $("section:not(.introductory)", t).find("h1:first, h2:first, h3:first, h4:first, h5:first, h6:first");
            i.each(function() {
                var e = $(this).parents("section").length + 1;
                e > 6 && (e = 6);
                var t = "h" + e;
                this.localName.toLowerCase() !== t && $(this).renameElement(t)
            }), r.pub("end", "core/fix-headers"), n()
        }
    }
}), define("core/structure", [], function() {
    var e = {
            en: {
                toc: "Table of Contents"
            },
            fr: {
                toc: "Sommaire"
            }
        },
        t = {},
        n = !1,
        r = 0,
        i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        a = function(e, s, o, l, c) {
            var u = e.children(c.tocIntroductory ? "section" : "section:not(.introductory)");
            if (0 === u.length) return null;
            for (var p = $("<ul class='toc'></ul>"), d = 0; d < u.length; d++) {
                var f = $(u[d], s),
                    h = f.hasClass("introductory");
                if (f.children().length) {
                    var m = f.children()[0],
                        g = m.localName.toLowerCase();
                    if ("h2" === g || "h3" === g || "h4" === g || "h5" === g || "h6" === g) {
                        var b = m.textContent,
                            v = $("<div></div>").append($(m).contents().clone());
                        v.find("a").renameElement("span").attr("class", "formerLink").removeAttr("href"), v.find("dfn").renameElement("span").removeAttr("id");
                        var y = f.makeID(null, b);
                        h || o[o.length - 1] ++;
                        var x = o.slice();
                        f.hasClass("appendix") && 1 === o.length && !n && (r = o[0], n = !0), n && (x[0] = i.charAt(o[0] - r));
                        var w = x.join("."),
                            C = 1 == x.length;
                        C && (w += ".", $(m).before(document.createComment("OddPage")));
                        var k = $("<span class='secno'></span>").text(w + " ");
                        h || $(m).prepend(k), t[y] = (h ? "" : "<span class='secno'>" + w + "</span> ") + "<span class='sec-title'>" + b + "</span>";
                        var S = $("<a/>").attr({
                                href: "#" + y,
                                "class": "tocxref"
                            }).append(h ? "" : k.clone()).append(v.contents()),
                            T = $("<li class='tocline'/>").append(S);
                        (0 == c.maxTocLevel || l <= c.maxTocLevel) && p.append(T), o.push(0);
                        var E = a(f, s, o, l + 1, c);
                        E && T.append(E), o.pop()
                    }
                }
            }
            return p
        };
    return {
        run: function(n, r, i, s) {
            s.pub("start", "core/structure"), n.tocIntroductory || (n.tocIntroductory = !1), n.maxTocLevel || (n.maxTocLevel = 0);
            var o = $("section:not(.introductory)", r).find("h1:first, h2:first, h3:first, h4:first, h5:first, h6:first"),
                l = function() {
                    s.pub("end", "core/structure"), i()
                };
            if (!o.length) return l();
            if (o.each(function() {
                    var e = $(this).parents("section").length + 1;
                    e > 6 && (e = 6);
                    var t = "h" + e;
                    this.localName.toLowerCase() != t && $(this).renameElement(t)
                }), !n.noTOC) {
                var c = a($("body", r), r, [0], 1, n);
                if (!c) return;
                var u = $("<section id='toc'/>").append("<h2 class='introductory'>" + e[n.lang || "en"].toc + "</h2>").append(c),
                    p = $("#toc", r),
                    d = !1;
                p.length && (d = !0), p.length || (p = $("#sotd", r)), p.length || (p = $("#abstract", r)), d ? p.replaceWith(u) : p.after(u)
            }
            $("a[href^='#']:not(.tocxref)", r).each(function() {
                var e = $(this);
                if ("" === e.html()) {
                    var n = e.attr("href").slice(1);
                    t[n] && (e.addClass("sec-ref"), e.html((e.hasClass("sectionRef") ? "section " : "") + t[n]))
                }
            }), l()
        }
    }
}), define("w3c/informative", [], function() {
    return {
        run: function(e, t, n, r) {
            r.pub("start", "core/informative"), $("section.informative").find("> h2:first, > h3:first, > h4:first, > h5:first, > h6:first").after("<p><em>This section is non-normative.</em></p>"), r.pub("end", "core/informative"), n()
        }
    }
}), define("tmpl!w3c/templates/permalinks.css", ["handlebars"], function() {
    return Handlebars.compile("/* --- PERMALINKS --- */\n{{#if permalinkHide}}\nsection > *:hover > span.permalink { visibility: visible; } \n{{/if}}\n\n.permalink {\n    width: 1px;\n    height: 1px;\n    overflow: visible;\n    font-size: 10pt;\n    font-style: normal;\n    vertical-align: middle;\n    margin-left: 4px;\n    {{#if permalinkEdge}}\n	float: right;\n    {{/if}}\n    {{#if permalinkHide}}\n    visibility: hidden;\n    {{/if}}\n}\n\n.permalink a, .permalink a:link, .permalink a:visited, .permalink a:hover, .permalink a:focus, .permalink a:active \n{\n	background:transparent !important;\n	text-decoration:none;\n    font-weight: bold;\n	color:#666 !important;\n}\n\n.permalink abbr {\n	border:0;\n}\n")
}), define("w3c/permalinks", ["tmpl!w3c/templates/permalinks.css", "core/utils"], function(e) {
    return {
        run: function(t, n, r, i) {
            if (i.pub("start", "w3c/permalinks"), t.includePermalinks) {
                var a = t.permalinkSymbol || "Â§",
                    s = "<style>" + e(t) + "</style>";
                $(n).find("head link").first().before(s);
                var o = $(n).find("h2, h3, h4, h5, h6");
                o.each(function(e, n) {
                    var r = $(n);
                    if (!r.hasClass("nolink")) {
                        var i = r.attr("id"),
                            s = r.parent();
                        if ((s.is("section") || s.is("div")) && (i = s.hasClass("introductory") || s.hasClass("nolink") ? null : s.attr("id")), null != i) {
                            var o = t.doRDFa ? "typeof='bookmark' " : "",
                                l = t.doRDFa ? "property='url' " : "",
                                c = t.doRDFa ? "property='title' " : "",
                                u = "<span " + o + "class='permalink'>";
                            t.permalinkEdge || (u += "&nbsp;"), u += "<a href='#" + i + "' " + l + "aria-label='Permalink for " + i + "' title='Permalink for " + i + "'>" + "<span " + c + "content='" + r.text() + "'>" + a + "</span></a></span>", r.append(u)
                        }
                    }
                })
            }
            i.pub("end", "w3c/permalinks"), r()
        }
    }
}), define("core/id-headers", [], function() {
    return {
        run: function(e, t, n, r) {
            r.pub("start", "core/id-headers"), $("h2, h3, h4, h5, h6").each(function() {
                var e = $(this);
                if (!e.attr("id")) {
                    if (e.parent("section").attr("id") && 0 === e.prev().length) return;
                    e.makeID()
                }
            }), r.pub("end", "core/id-headers"), n()
        }
    }
}), define("w3c/aria", ["core/utils"], function() {
    return {
        run: function(e, t, n, r) {
            r.pub("start", "w3c/aria");
            var i = $("section", t).find("h1:first, h2:first, h3:first, h4:first, h5:first, h6:first");
            if (i.each(function(e, t) {
                    var n = $(t),
                        r = n.parent("section[id]").attr("id");
                    n.attr("role", "heading"), n.attr("id") || n.attr("id", n.prop("tagName").toLowerCase() + "_" + r)
                }), $("body", t).attr("role", "document"), $("body", t).attr("id", "respecDocument"), $("div.head", t).attr("role", "contentinfo"), $("div.head", t).attr("id", "respecHeader"), !e.noTOC) {
                var a = $("section#toc", t).find("ul:first");
                a.attr("role", "directory"), a.attr("id") || a.attr("id", "respecContents")
            }
            var s = 0,
                o = 0;
            $(".note-title, .issue-title", t).each(function(e, t) {
                var n = $(t),
                    r = n.hasClass("issue-title"),
                    i = n.parents("section").length;
                n.attr("aria-level", i), n.attr("role", "heading"), r ? (o++, n.attr("id", "h_issue_" + o)) : (s++, n.attr("id", "h_note_" + s))
            }), r.pub("end", "w3c/aria"), n()
        }
    }
}), define("core/shiv", [], function() {
    return {
        run: function(e, t, n, r) {
            r.pub("start", "core/shiv");
            var i = t.createComment("[if lt IE 9]><script src='https://www.w3.org/2008/site/js/html5shiv.js'></script><![endif]");
            $("head").append(i), r.pub("end", "core/shiv"), n()
        }
    }
}), define("core/remove-respec", ["core/utils"], function(e) {
    return {
        run: function(t, n, r, i) {
            i.pub("start", "core/remove-respec"), e.removeReSpec(n), i.pub("end", "core/remove-respec"), r()
        }
    }
}), define("core/location-hash", [], function() {
    return {
        run: function(e, t, n, r) {
            r.pub("start", "core/location-hash");
            var i = window.location.hash,
                a = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            i && !a && (window.location.hash = "", window.location.hash = i), r.pub("end", "core/location-hash"), n()
        }
    }
});
var requireConfig = {
    shim: {
        shortcut: {
            exports: "shortcut"
        }
    }
};
"respecVersion" in window && respecVersion && (requireConfig.paths = {
    ui: "https://w3c.github.io/respec/js/ui"
}), require.config(requireConfig), define("profile-w3c-common", ["domReady", "core/base-runner", "core/ui", "core/override-configuration", "core/default-root-attr", "core/markdown", "core/style", "w3c/style", "w3c/headers", "w3c/abstract", "w3c/conformance", "core/data-transform", "core/data-include", "core/inlines", "w3c/rfc2119", "core/examples", "core/issues-notes", "core/requirements", "core/highlight", "core/best-practices", "core/figures",  "core/rdfa", "core/webidl-oldschool", "core/dfn", "core/fix-headers", "core/structure", "w3c/informative", "w3c/permalinks", "core/id-headers", "w3c/aria", "core/shiv", "core/remove-respec", "core/location-hash"], function(e, t, n) {
    var r = Array.prototype.slice.call(arguments);
    e(function() {
        n.addCommand("Save Snapshot", "ui/save-html", "Ctrl+Shift+Alt+S"), n.addCommand("About ReSpec", "ui/about-respec", "Ctrl+Shift+Alt+A"), n.addCommand("Search Specref DB", "ui/search-specref", "Ctrl+Shift+Alt+space"), t.runAll(r)
    })
});
require(['profile-w3c-common']);