!function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {i: r, l: !1, exports: {}};
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }

    var n = {};
    t.m = e, t.c = n, t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 21)
}([function (e, t, n) {
    "use strict";
    e.exports = n(24)
}, function (e, t, n) {
    "use strict";
    "function" == typeof Symbol && Symbol.iterator;
    e.exports = n(35)()
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), a = function () {
        function e() {
            r(this, e)
        }

        return o(e, null, [{
            key: "init", value: function (t) {
                e.dictionary = t
            }
        }, {
            key: "get", value: function (t, n) {
                var r = e.dictionary[t];
                if (void 0 === r) return "Key not found in dictionary: " + t;
                for (var o in n) n[o] && (r = r.replace(o, n[o]));
                return r
            }
        }]), e
    }();
    t.default = a
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), u = n(0), s = r(u), c = n(1), d = r(c), f = n(2), p = r(f);
    n(46);
    var h = function (e) {
        function t() {
            return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }

        return i(t, e), l(t, [{
            key: "createTroubleshootingURL", value: function (e) {
                return e ? "https://h5p.org/documentation/troubleshooting#" + e : void 0
            }
        }, {
            key: "render", value: function () {
                var e = this, t = "h5p-hub-message " + this.props.severity + (this.props.onClose ? " dismissible" : ""),
                    n = this.props.message;
                n && !Array.isArray(n) && (n = [n]);
                var r = n ? n.map(function (t, n) {
                    var r = t.message || t, o = e.createTroubleshootingURL(t.code);
                    return s.default.createElement("p", {
                        key: n,
                        className: "message-body"
                    }, s.default.createElement("span", {dangerouslySetInnerHTML: {__html: r}}), o && s.default.createElement("a", {
                        className: "get-help",
                        target: "_blank",
                        href: o
                    }, p.default.get("getHelp")))
                }) : null;
                return s.default.createElement("div", {
                    className: t,
                    role: "alert"
                }, this.props.onClose && s.default.createElement("button", {
                    className: "message-close",
                    tabIndex: "0",
                    "aria-label": p.default.get("Close"),
                    onClick: this.props.onClose
                }), s.default.createElement("div", {className: "message-content"}, s.default.createElement("h2", null, this.props.title), r), this.props.children)
            }
        }]), t
    }(s.default.Component);
    h.propTypes = {
        severity: d.default.oneOf(["info", "warning", "error"]).isRequired,
        title: d.default.string.isRequired,
        message: d.default.oneOfType([d.default.string, d.default.array]),
        onClose: d.default.func,
        children: d.default.oneOfType([d.default.object, d.default.array])
    }, t.default = h
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return function () {
            return e
        }
    }

    var o = function () {
    };
    o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function () {
        return this
    }, o.thatReturnsArgument = function (e) {
        return e
    }, e.exports = o
}, function (e, t, n) {
    "use strict";

    function r(e, t, n, r, a, i, l, u) {
        if (o(t), !e) {
            var s;
            if (void 0 === t) s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                var c = [n, r, a, i, l, u], d = 0;
                s = new Error(t.replace(/%s/g, function () {
                    return c[d++]
                })), s.name = "Invariant Violation"
            }
            throw s.framesToPop = 1, s
        }
    }

    var o = function (e) {
    };
    e.exports = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), n(7);
    var r = n(2), o = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(r), a = function (e, t) {
        return fetch(e, {method: void 0 === t ? "GET" : "POST", credentials: "include", body: t}).then(function (e) {
            return e.json().catch(function () {
                throw{
                    title: e.statusText + " (" + e.status + ")",
                    message: [o.default.get("unableToInterpretError"), o.default.get("unableToInterpretSolution")]
                }
            })
        }).then(function (e) {
            if (!1 === e.success) throw{title: e.message, message: e.details};
            return e
        })
    };
    t.default = a
}, function (e, t, n) {
    "use strict";
    (function (e) {
        !function (t) {
            function n(e) {
                if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                return e.toLowerCase()
            }

            function r(e) {
                return "string" != typeof e && (e = String(e)), e
            }

            function o(e) {
                var t = {
                    next: function () {
                        var t = e.shift();
                        return {done: void 0 === t, value: t}
                    }
                };
                return g.iterable && (t[Symbol.iterator] = function () {
                    return t
                }), t
            }

            function a(e) {
                this.map = {}, e instanceof a ? e.forEach(function (e, t) {
                    this.append(t, e)
                }, this) : Array.isArray(e) ? e.forEach(function (e) {
                    this.append(e[0], e[1])
                }, this) : e && Object.getOwnPropertyNames(e).forEach(function (t) {
                    this.append(t, e[t])
                }, this)
            }

            function i(t) {
                if (t.bodyUsed) return e.reject(new TypeError("Already read"));
                t.bodyUsed = !0
            }

            function l(t) {
                return new e(function (e, n) {
                    t.onload = function () {
                        e(t.result)
                    }, t.onerror = function () {
                        n(t.error)
                    }
                })
            }

            function u(e) {
                var t = new FileReader, n = l(t);
                return t.readAsArrayBuffer(e), n
            }

            function s(e) {
                var t = new FileReader, n = l(t);
                return t.readAsText(e), n
            }

            function c(e) {
                for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                return n.join("")
            }

            function d(e) {
                if (e.slice) return e.slice(0);
                var t = new Uint8Array(e.byteLength);
                return t.set(new Uint8Array(e)), t.buffer
            }

            function f() {
                return this.bodyUsed = !1, this._initBody = function (e) {
                    if (this._bodyInit = e, e) if ("string" == typeof e) this._bodyText = e; else if (g.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e; else if (g.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e; else if (g.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString(); else if (g.arrayBuffer && g.blob && C(e)) this._bodyArrayBuffer = d(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]); else {
                        if (!g.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !w(e)) throw new Error("unsupported BodyInit type");
                        this._bodyArrayBuffer = d(e)
                    } else this._bodyText = "";
                    this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : g.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, g.blob && (this.blob = function () {
                    var t = i(this);
                    if (t) return t;
                    if (this._bodyBlob) return e.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return e.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return e.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function () {
                    return this._bodyArrayBuffer ? i(this) || e.resolve(this._bodyArrayBuffer) : this.blob().then(u)
                }), this.text = function () {
                    var t = i(this);
                    if (t) return t;
                    if (this._bodyBlob) return s(this._bodyBlob);
                    if (this._bodyArrayBuffer) return e.resolve(c(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return e.resolve(this._bodyText)
                }, g.formData && (this.formData = function () {
                    return this.text().then(y)
                }), this.json = function () {
                    return this.text().then(JSON.parse)
                }, this
            }

            function p(e) {
                var t = e.toUpperCase();
                return E.indexOf(t) > -1 ? t : e
            }

            function h(e, t) {
                t = t || {};
                var n = t.body;
                if (e instanceof h) {
                    if (e.bodyUsed) throw new TypeError("Already read");
                    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new a(e.headers)), this.method = e.method, this.mode = e.mode, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
                } else this.url = String(e);
                if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new a(t.headers)), this.method = p(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(n)
            }

            function y(e) {
                var t = new FormData;
                return e.trim().split("&").forEach(function (e) {
                    if (e) {
                        var n = e.split("="), r = n.shift().replace(/\+/g, " "), o = n.join("=").replace(/\+/g, " ");
                        t.append(decodeURIComponent(r), decodeURIComponent(o))
                    }
                }), t
            }

            function m(e) {
                var t = new a;
                return e.replace(/\r?\n[\t ]+/, " ").split(/\r?\n/).forEach(function (e) {
                    var n = e.split(":"), r = n.shift().trim();
                    if (r) {
                        var o = n.join(":").trim();
                        t.append(r, o)
                    }
                }), t
            }

            function b(e, t) {
                t || (t = {}), this.type = "default", this.status = "status" in t ? t.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new a(t.headers), this.url = t.url || "", this._initBody(e)
            }

            if (!t.fetch) {
                var g = {
                    searchParams: "URLSearchParams" in t,
                    iterable: "Symbol" in t && "iterator" in Symbol,
                    blob: "FileReader" in t && "Blob" in t && function () {
                        try {
                            return new Blob, !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in t,
                    arrayBuffer: "ArrayBuffer" in t
                };
                if (g.arrayBuffer) var v = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    C = function (e) {
                        return e && DataView.prototype.isPrototypeOf(e)
                    }, w = ArrayBuffer.isView || function (e) {
                        return e && v.indexOf(Object.prototype.toString.call(e)) > -1
                    };
                a.prototype.append = function (e, t) {
                    e = n(e), t = r(t);
                    var o = this.map[e];
                    this.map[e] = o ? o + "," + t : t
                }, a.prototype.delete = function (e) {
                    delete this.map[n(e)]
                }, a.prototype.get = function (e) {
                    return e = n(e), this.has(e) ? this.map[e] : null
                }, a.prototype.has = function (e) {
                    return this.map.hasOwnProperty(n(e))
                }, a.prototype.set = function (e, t) {
                    this.map[n(e)] = r(t)
                }, a.prototype.forEach = function (e, t) {
                    for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
                }, a.prototype.keys = function () {
                    var e = [];
                    return this.forEach(function (t, n) {
                        e.push(n)
                    }), o(e)
                }, a.prototype.values = function () {
                    var e = [];
                    return this.forEach(function (t) {
                        e.push(t)
                    }), o(e)
                }, a.prototype.entries = function () {
                    var e = [];
                    return this.forEach(function (t, n) {
                        e.push([n, t])
                    }), o(e)
                }, g.iterable && (a.prototype[Symbol.iterator] = a.prototype.entries);
                var E = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                h.prototype.clone = function () {
                    return new h(this, {body: this._bodyInit})
                }, f.call(h.prototype), f.call(b.prototype), b.prototype.clone = function () {
                    return new b(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new a(this.headers),
                        url: this.url
                    })
                }, b.error = function () {
                    var e = new b(null, {status: 0, statusText: ""});
                    return e.type = "error", e
                };
                var T = [301, 302, 303, 307, 308];
                b.redirect = function (e, t) {
                    if (-1 === T.indexOf(t)) throw new RangeError("Invalid status code");
                    return new b(null, {status: t, headers: {location: e}})
                }, t.Headers = a, t.Request = h, t.Response = b, t.fetch = function (t, n) {
                    return new e(function (e, r) {
                        var o = new h(t, n), a = new XMLHttpRequest;
                        a.onload = function () {
                            var t = {
                                status: a.status,
                                statusText: a.statusText,
                                headers: m(a.getAllResponseHeaders() || "")
                            };
                            t.url = "responseURL" in a ? a.responseURL : t.headers.get("X-Request-URL");
                            var n = "response" in a ? a.response : a.responseText;
                            e(new b(n, t))
                        }, a.onerror = function () {
                            r(new TypeError("Network request failed"))
                        }, a.ontimeout = function () {
                            r(new TypeError("Network request failed"))
                        }, a.open(o.method, o.url, !0), "include" === o.credentials && (a.withCredentials = !0), "responseType" in a && g.blob && (a.responseType = "blob"), o.headers.forEach(function (e, t) {
                            a.setRequestHeader(t, e)
                        }), a.send(void 0 === o._bodyInit ? null : o._bodyInit)
                    })
                }, t.fetch.polyfill = !0
            }
        }("undefined" != typeof self ? self : void 0)
    }).call(t, n(37))
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), u = n(0), s = r(u), c = n(1), d = r(c), f = function (e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.cloneChild = function (e) {
                return e ? s.default.cloneElement(e, e.props.id ? {
                    className: (e.props.className ? e.props.className + " " : "") + (n.state.selected ? e.props.id === n.state.selected ? "hightlight" : "" : n.count ? "" : "highlight"),
                    tabIndex: n.state.focused ? e.props.id === n.state.focused ? 0 : -1 : n.count++ ? -1 : 0,
                    role: -1 !== ["a", "button"].indexOf(e.type) ? void 0 : e.props.role || "button",
                    onClick: function (t) {
                        return n.handleClick(t, e.props.id)
                    },
                    onKeyDown: function (t) {
                        return n.handleKeyDown(t, e.props.id)
                    },
                    ref: function (e) {
                        return e ? n.items.push(e) : void 0
                    }
                } : void 0, !e.props.id && e.props.children ? s.default.Children.map(e.props.children, n.cloneChild) : e.props.children) : null
            }, n.state = {selected: e.selected, focused: e.selected}, n
        }

        return i(t, e), l(t, [{
            key: "componentWillReceiveProps", value: function (e) {
                this.setState({
                    selected: e.selected,
                    focused: e.selected
                }), e.setFocus !== this.props.setFocus && this.setState({focusOnRender: !0})
            }
        }, {
            key: "select", value: function (e) {
                this.props.onChange(e), this.setState({selected: e})
            }
        }, {
            key: "focus", value: function (e, t) {
                e && (this.setState({focused: e, focusOnRender: !t}), this.props.onFocus && this.props.onFocus(e))
            }
        }, {
            key: "getSiblingIdFor", value: function (e, t) {
                for (var n = 0; n < this.items.length; n++) if (e === this.items[n].id) {
                    var r = this.items[n + t];
                    if (r) return r.id
                }
            }
        }, {
            key: "handleClick", value: function (e, t) {
                e.defaultPrevented || (this.select(t), "A" === e.target.tagName && e.preventDefault())
            }
        }, {
            key: "handleKeyDown", value: function (e, t) {
                if (!e.defaultPrevented) switch (e.which) {
                    case 37:
                    case 38:
                        this.focus(this.getSiblingIdFor(t, -1)), e.preventDefault();
                        break;
                    case 39:
                    case 40:
                        this.focus(this.getSiblingIdFor(t, 1)), e.preventDefault();
                        break;
                    case 32:
                    case 13:
                        this.select(t), e.preventDefault()
                }
            }
        }, {
            key: "componentDidUpdate", value: function () {
                if (this.state.focusOnRender) if (delete this.state.focusOnRender, this.state.focused) for (var e = 0; e < this.items.length; e++) this.state.focused === this.items[e].id && this.items[e].focus(); else this.items[0] && this.items[0].focus()
            }
        }, {
            key: "render", value: function () {
                return this.items = [], this.count = 0, s.default.Children.map(this.props.children, this.cloneChild)
            }
        }]), t
    }(s.default.Component);
    f.propTypes = {
        selected: d.default.string,
        setFocus: d.default.bool,
        onChange: d.default.func.isRequired,
        onFocus: d.default.func,
        onScrollIntoView: d.default.func
    }, t.default = f
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.nonEmptyString = function (e, t, n) {
        if (void 0 === e[t] || 0 === e[t].length) return new Error("Non empty string for prop " + t + " in " + n)
    }, t.stopPropagation = function (e) {
        return e.stopPropagation()
    }, t.onSpaceOrEnterEvent = function (e, t) {
        -1 !== [32, 13].indexOf(e.which) && (e.preventDefault(), t())
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
    var o = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, a = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
    e.exports = function () {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
                return t[e]
            }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(o({}, r)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function (e, t) {
        for (var n, o, u = r(e), s = 1; s < arguments.length; s++) {
            n = Object(arguments[s]);
            for (var c in n) i.call(n, c) && (u[c] = n[c]);
            if (a) {
                o = a(n);
                for (var d = 0; d < o.length; d++) l.call(n, o[d]) && (u[o[d]] = n[o[d]])
            }
        }
        return u
    }
}, function (e, t, n) {
    "use strict";
    var r = {};
    e.exports = r
}, function (e, t, n) {
    "use strict";

    function r() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
        } catch (e) {
            console.error(e)
        }
    }

    r(), e.exports = n(25)
}, function (e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjI1Ij4NCiAgPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xIHsNCiAgICAgIGZpbGw6IG5vbmU7DQogICAgICB9DQoNCiAgICAgIC5jbHMtMiB7DQogICAgICBmaWxsOiAjYzZjNmM3Ow0KICAgICAgfQ0KDQogICAgICAuY2xzLTMsIC5jbHMtNCB7DQogICAgICBmaWxsOiAjZmZmOw0KICAgICAgfQ0KDQogICAgICAuY2xzLTMgew0KICAgICAgb3BhY2l0eTogMC43Ow0KICAgICAgfQ0KICAgIDwvc3R5bGU+DQogIDwvZGVmcz4NCiAgPHRpdGxlPmNvbnRlbnQgdHlwZSBwbGFjZWhvbGRlcl8yPC90aXRsZT4NCiAgPGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+DQogICAgPGcgaWQ9ImNvbnRlbnRfdHlwZV9wbGFjZWhvbGRlci0xX2NvcHkiIGRhdGEtbmFtZT0iY29udGVudCB0eXBlIHBsYWNlaG9sZGVyLTEgY29weSI+DQogICAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSI0MDAiIGhlaWdodD0iMjI1Ii8+DQogICAgICA8cmVjdCBjbGFzcz0iY2xzLTIiIHg9IjExMi41MSIgeT0iNDMuNDEiIHdpZHRoPSIxNzYuOTYiIGhlaWdodD0iMTM1LjQ1IiByeD0iMTAiIHJ5PSIxMCIvPg0KICAgICAgPGNpcmNsZSBjbGFzcz0iY2xzLTMiIGN4PSIxMzYuNjYiIGN5PSI2MS45OCIgcj0iNC44MSIvPg0KICAgICAgPGNpcmNsZSBjbGFzcz0iY2xzLTMiIGN4PSIxNTEuNDkiIGN5PSI2MS45OCIgcj0iNC44MSIvPg0KICAgICAgPGNpcmNsZSBjbGFzcz0iY2xzLTMiIGN4PSIxNjYuMSIgY3k9IjYxLjk4IiByPSI0LjgxIi8+DQogICAgICA8ZyBpZD0iX0dyb3VwXyIgZGF0YS1uYW1lPSImbHQ7R3JvdXAmZ3Q7Ij4NCiAgICAgICAgPGcgaWQ9Il9Hcm91cF8yIiBkYXRhLW5hbWU9IiZsdDtHcm91cCZndDsiPg0KICAgICAgICAgIDxwYXRoIGlkPSJfQ29tcG91bmRfUGF0aF8iIGRhdGEtbmFtZT0iJmx0O0NvbXBvdW5kIFBhdGgmZ3Q7IiBjbGFzcz0iY2xzLTQiIGQ9Ik0yNjMuMjgsOTUuMjFDMjYwLDkyLjA3LDI1NSw5MS41LDI0OC40Myw5MS41SDIyN3Y4SDE5OS41bC0yLjE3LDEwLjI0YTI1Ljg0LDI1Ljg0LDAsMCwxLDExLjQ4LTEuNjMsMTkuOTMsMTkuOTMsMCwwLDEsMTQuMzksNS41NywxOC4yNiwxOC4yNiwwLDAsMSw1LjUyLDEzLjYsMjMuMTEsMjMuMTEsMCwwLDEtMi44NCwxMS4wNSwxOC42NSwxOC42NSwwLDAsMS04LjA2LDcuNzksOSw5LDAsMCwxLTQuMTIsMS4zN0gyMzZ2LTIxaDEwLjQyYzcuMzYsMCwxMi44My0xLjYxLDE2LjQyLTVzNS4zOC03LjQ4LDUuMzgtMTMuNDRDMjY4LjIyLDEwMi4yOSwyNjYuNTcsOTguMzUsMjYzLjI4LDk1LjIxWm0tMTUsMTdjLTEuNDIsMS4yMi0zLjksMS4yNS03LjQxLDEuMjVIMjM2di0xNGg1LjYyYTkuNTcsOS41NywwLDAsMSw3LDIuOTMsNy4wNSw3LjA1LDAsMCwxLDEuODUsNC45MkE2LjMzLDYuMzMsMCwwLDEsMjQ4LjMxLDExMi4yNVoiLz4NCiAgICAgICAgICA8cGF0aCBpZD0iX1BhdGhfIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgY2xhc3M9ImNscy00IiBkPSJNMjAyLjksMTE5LjExYTguMTIsOC4xMiwwLDAsMC03LjI4LDQuNTJsLTE2LTEuMjIsNy4yMi0zMC45MkgxNzR2MjJIMTUzdi0yMkgxMzZ2NTZoMTd2LTIxaDIxdjIxaDIwLjMxYy0yLjcyLDAtNS0xLjUzLTctM2ExOS4xOSwxOS4xOSwwLDAsMS00LjczLTQuODMsMjMuNTgsMjMuNTgsMCwwLDEtMy02LjZsMTYtMi4yNmE4LjExLDguMTEsMCwxLDAsNy4yNi0xMS43MloiLz4NCiAgICAgICAgPC9nPg0KICAgICAgPC9nPg0KICAgICAgPHJlY3QgY2xhc3M9ImNscy0zIiB4PSIxNzcuNjYiIHk9IjU3LjY2IiB3aWR0aD0iOTIuMjgiIGhlaWdodD0iOS4zOCIgcng9IjMuNSIgcnk9IjMuNSIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo="
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        var n = t.major > e.h5pMajorVersion || t.major === e.h5pMajorVersion && t.minor >= e.h5pMinorVersion;
        return !e.isUpToDate && e.installed && e.canInstall && n
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || "none" === e.style.display
    }

    function o(e) {
        for (var t = e; t && t !== document.body;) {
            if (r(t)) return !1;
            t = t.parentNode
        }
        return !0
    }

    function a(e, t) {
        var n = e.nodeName.toLowerCase();
        return (u.test(n) && !e.disabled || ("a" === n ? e.href || t : t)) && o(e)
    }

    function i(e) {
        var t = e.getAttribute("tabindex");
        null === t && (t = void 0);
        var n = isNaN(t);
        return (n || t >= 0) && a(e, !n)
    }

    function l(e) {
        return [].slice.call(e.querySelectorAll("*"), 0).filter(i)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = l;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
    var u = /input|select|textarea|button|object/;
    e.exports = t.default
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!e || !e.length) throw new Error("react-modal: No elements were found for selector " + t + ".")
    }

    function o(e) {
        var t = e;
        if ("string" == typeof t) {
            var n = document.querySelectorAll(t);
            r(n, t), t = "length" in n ? n[0] : n
        }
        return d = t || d
    }

    function a() {
        return !(!document || !document.body) && (o(document.body), !0)
    }

    function i(e) {
        if (!e && !d && !a()) throw new Error(["react-modal: Cannot fallback to `document.body`, because it is not", "ready or available. If you are doing server-side rendering, use this", "function to defined an element. `Modal.setAppElement(el)` to make", "this accessible"].join(" "))
    }

    function l(e) {
        i(e), (e || d).setAttribute("aria-hidden", "true")
    }

    function u(e) {
        i(e), (e || d).removeAttribute("aria-hidden")
    }

    function s() {
        d = null
    }

    function c() {
        d = document.body
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.assertNodeList = r, t.setElement = o, t.tryForceFallback = a, t.validateElement = i, t.hide = l, t.show = u, t.documentNotReadyOrSSRTesting = s, t.resetForTesting = c;
    var d = null
}, function (e, t, n) {
    "use strict";

    function r() {
        return l
    }

    function o(e) {
        return l[e] || (l[e] = 0), l[e] += 1, e
    }

    function a(e) {
        return l[e] && (l[e] -= 1), e
    }

    function i() {
        return Object.keys(l).reduce(function (e, t) {
            return e + l[t]
        }, 0)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.get = r, t.add = o, t.remove = a, t.totalCount = i;
    var l = {}
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.canUseDOM = void 0;
    var r = n(63), o = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(r), a = o.default, i = a.canUseDOM ? window.HTMLElement : {};
    t.canUseDOM = a.canUseDOM;
    t.default = i
}, function (e, t) {
    (function (t) {
        e.exports = t
    }).call(t, {})
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, u = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), s = n(0), c = r(s), d = n(1), f = r(d), p = n(9), h = function (e) {
        function t() {
            return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }

        return i(t, e), u(t, [{
            key: "render", value: function () {
                var e = this, t = this.props.type || "div";
                return c.default.createElement(t, l({}, this.props.buttonProps, {
                    role: "button",
                    tabIndex: "0",
                    onClick: function () {
                        return e.props.onButtonClick()
                    },
                    onKeyPress: function (t) {
                        return (0, p.onSpaceOrEnterEvent)(t, e.props.onButtonClick)
                    }
                }), this.props.children)
            }
        }]), t
    }(c.default.Component);
    h.propTypes = {onButtonClick: f.default.func, buttonProps: f.default.object, type: f.default.string}, t.default = h
}, function (e, t, n) {
    "use strict";
    n(22), H5P = H5P || {}, H5P.HubClient = n(23).default
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, i = n(0), l = r(i), u = n(12), s = r(u), c = n(34), d = r(c), f = n(2), p = r(f), h = n(85),
        y = function e(t, n) {
            o(this, e), a(this, (0, h.Eventful)());
            var r = this, i = document.createElement("div");
            p.default.init(n);
            var u = function () {
                s.default.render(l.default.createElement(d.default, {
                    title: t.title,
                    expanded: t.expanded,
                    canPaste: t.canPaste,
                    contentId: parseInt(t.contentId),
                    contentTypes: t.contentTypes,
                    selected: t.selected,
                    getAjaxUrl: t.getAjaxUrl,
                    onResize: r.trigger.bind(r, "resize"),
                    onUse: r.trigger.bind(r, "select"),
                    onUpload: r.trigger.bind(r, "upload"),
                    onUpdate: r.trigger.bind(r, "update"),
                    onPaste: r.trigger.bind(r, "paste"),
                    onRender: function (e, n) {
                        t.title = e, t.expanded = n
                    }
                }), i)
            };
            this.setPanelTitle = function (e, n) {
                t.title = e, t.expanded = n, u()
            }, this.setCanPaste = function (e) {
                t.canPaste = e, u()
            }, this.getElement = function () {
                return i
            }, u()
        };
    t.default = y
}, function (e, t, n) {
    "use strict";

    function r(e) {
        for (var t = arguments.length - 1, n = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        throw t = Error(n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."), t.name = "Invariant Violation", t.framesToPop = 1, t
    }

    function o(e, t, n) {
        this.props = e, this.context = t, this.refs = v, this.updater = n || w
    }

    function a(e, t, n) {
        this.props = e, this.context = t, this.refs = v, this.updater = n || w
    }

    function i() {
    }

    function l(e, t, n) {
        this.props = e, this.context = t, this.refs = v, this.updater = n || w
    }

    function u(e, t, n, r, o, a, i) {
        return {$$typeof: O, type: e, key: t, ref: n, props: i, _owner: a}
    }

    function s(e) {
        var t = {"=": "=0", ":": "=2"};
        return "$" + ("" + e).replace(/[=:]/g, function (e) {
            return t[e]
        })
    }

    function c(e, t, n, r) {
        if (M.length) {
            var o = M.pop();
            return o.result = e, o.keyPrefix = t, o.func = n, o.context = r, o.count = 0, o
        }
        return {result: e, keyPrefix: t, func: n, context: r, count: 0}
    }

    function d(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > M.length && M.push(e)
    }

    function f(e, t, n, o) {
        var a = void 0 === e ? "undefined" : b(e);
        if ("undefined" !== a && "boolean" !== a || (e = null), null === e || "string" === a || "number" === a || "object" === a && e.$$typeof === N) return n(o, e, "" === t ? "." + p(e, 0) : t), 1;
        var i = 0;
        if (t = "" === t ? "." : t + ":", Array.isArray(e)) for (var l = 0; l < e.length; l++) {
            a = e[l];
            var u = t + p(a, l);
            i += f(a, u, n, o)
        } else if ("function" == typeof (u = x && e[x] || e["@@iterator"])) for (e = u.call(e), l = 0; !(a = e.next()).done;) a = a.value, u = t + p(a, l++), i += f(a, u, n, o); else "object" === a && (n = "" + e, r("31", "[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n, ""));
        return i
    }

    function p(e, t) {
        return "object" === (void 0 === e ? "undefined" : b(e)) && null !== e && null != e.key ? s(e.key) : t.toString(36)
    }

    function h(e, t) {
        e.func.call(e.context, t, e.count++)
    }

    function y(e, t, n) {
        var r = e.result, o = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? m(e, r, n, C.thatReturnsArgument) : null != e && (u.isValidElement(e) && (e = u.cloneAndReplaceKey(e, o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(I, "$&/") + "/") + n)), r.push(e))
    }

    function m(e, t, n, r, o) {
        var a = "";
        null != n && (a = ("" + n).replace(I, "$&/") + "/"), t = c(t, a, r, o), null == e || f(e, "", y, t), d(t)
    }

    var b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, g = n(10), v = n(11);
    n(5);
    var C = n(4), w = {
        isMounted: function () {
            return !1
        }, enqueueForceUpdate: function () {
        }, enqueueReplaceState: function () {
        }, enqueueSetState: function () {
        }
    };
    o.prototype.isReactComponent = {}, o.prototype.setState = function (e, t) {
        "object" !== (void 0 === e ? "undefined" : b(e)) && "function" != typeof e && null != e && r("85"), this.updater.enqueueSetState(this, e, t, "setState")
    }, o.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, i.prototype = o.prototype;
    var E = a.prototype = new i;
    E.constructor = a, g(E, o.prototype), E.isPureReactComponent = !0;
    var T = l.prototype = new i;
    T.constructor = l, g(T, o.prototype), T.unstable_isAsyncReactComponent = !0, T.render = function () {
        return this.props.children
    };
    var _ = {Component: o, PureComponent: a, AsyncComponent: l}, P = {current: null},
        S = Object.prototype.hasOwnProperty,
        O = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
        k = {key: !0, ref: !0, __self: !0, __source: !0};
    u.createElement = function (e, t, n) {
        var r, o = {}, a = null, i = null, l = null, s = null;
        if (null != t) for (r in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (a = "" + t.key), l = void 0 === t.__self ? null : t.__self, s = void 0 === t.__source ? null : t.__source, t) S.call(t, r) && !k.hasOwnProperty(r) && (o[r] = t[r]);
        var c = arguments.length - 2;
        if (1 === c) o.children = n; else if (1 < c) {
            for (var d = Array(c), f = 0; f < c; f++) d[f] = arguments[f + 2];
            o.children = d
        }
        if (e && e.defaultProps) for (r in c = e.defaultProps) void 0 === o[r] && (o[r] = c[r]);
        return u(e, a, i, l, s, P.current, o)
    }, u.createFactory = function (e) {
        var t = u.createElement.bind(null, e);
        return t.type = e, t
    }, u.cloneAndReplaceKey = function (e, t) {
        return u(e.type, t, e.ref, e._self, e._source, e._owner, e.props)
    }, u.cloneElement = function (e, t, n) {
        var r = g({}, e.props), o = e.key, a = e.ref, i = e._self, l = e._source, s = e._owner;
        if (null != t) {
            if (void 0 !== t.ref && (a = t.ref, s = P.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
            for (d in t) S.call(t, d) && !k.hasOwnProperty(d) && (r[d] = void 0 === t[d] && void 0 !== c ? c[d] : t[d])
        }
        var d = arguments.length - 2;
        if (1 === d) r.children = n; else if (1 < d) {
            c = Array(d);
            for (var f = 0; f < d; f++) c[f] = arguments[f + 2];
            r.children = c
        }
        return u(e.type, o, a, i, l, s, r)
    }, u.isValidElement = function (e) {
        return "object" === (void 0 === e ? "undefined" : b(e)) && null !== e && e.$$typeof === O
    };
    var x = "function" == typeof Symbol && Symbol.iterator,
        N = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, I = /\/+/g, M = [], R = {
            forEach: function (e, t, n) {
                if (null == e) return e;
                t = c(null, null, t, n), null == e || f(e, "", h, t), d(t)
            }, map: function (e, t, n) {
                if (null == e) return e;
                var r = [];
                return m(e, r, null, t, n), r
            }, count: function (e) {
                return null == e ? 0 : f(e, "", C.thatReturnsNull, null)
            }, toArray: function (e) {
                var t = [];
                return m(e, t, null, C.thatReturnsArgument), t
            }
        };
    e.exports = {
        Children: {
            map: R.map, forEach: R.forEach, count: R.count, toArray: R.toArray, only: function (e) {
                return u.isValidElement(e) || r("143"), e
            }
        },
        Component: _.Component,
        PureComponent: _.PureComponent,
        unstable_AsyncComponent: _.AsyncComponent,
        createElement: u.createElement,
        cloneElement: u.cloneElement,
        isValidElement: u.isValidElement,
        createFactory: u.createFactory,
        version: "16.0.0",
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {ReactCurrentOwner: P, assign: g}
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        for (var t = arguments.length - 1, n = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        throw t = Error(n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."), t.name = "Invariant Violation", t.framesToPop = 1, t
    }

    function o(e) {
        switch (e) {
            case"svg":
                return "http://www.w3.org/2000/svg";
            case"math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function a() {
        if (xt) for (var e in Nt) {
            var t = Nt[e], n = xt.indexOf(e);
            if (-1 < n || r("96", e), !It.plugins[n]) {
                t.extractEvents || r("97", e), It.plugins[n] = t, n = t.eventTypes;
                for (var o in n) {
                    var a = void 0, l = n[o], u = t, s = o;
                    It.eventNameDispatchConfigs.hasOwnProperty(s) && r("99", s), It.eventNameDispatchConfigs[s] = l;
                    var c = l.phasedRegistrationNames;
                    if (c) {
                        for (a in c) c.hasOwnProperty(a) && i(c[a], u, s);
                        a = !0
                    } else l.registrationName ? (i(l.registrationName, u, s), a = !0) : a = !1;
                    a || r("98", o, e)
                }
            }
        }
    }

    function i(e, t, n) {
        It.registrationNameModules[e] && r("100", e), It.registrationNameModules[e] = t, It.registrationNameDependencies[e] = t.eventTypes[n].dependencies
    }

    function l(e, t) {
        return (e & t) === t
    }

    function u(e) {
        for (var t; t = e._renderedComponent;) e = t;
        return e
    }

    function s(e, t) {
        e = u(e), e._hostNode = t, t[Kt] = e
    }

    function c(e, t) {
        if (!(e._flags & zt.hasCachedChildNodes)) {
            var n = e._renderedChildren;
            t = t.firstChild;
            var o;
            e:for (o in n) if (n.hasOwnProperty(o)) {
                var a = n[o], i = u(a)._domID;
                if (0 !== i) {
                    for (; null !== t; t = t.nextSibling) {
                        var l = t, c = i;
                        if (l.nodeType === Bt && l.getAttribute(Vt) === "" + c || l.nodeType === Wt && l.nodeValue === " react-text: " + c + " " || l.nodeType === Wt && l.nodeValue === " react-empty: " + c + " ") {
                            s(a, t);
                            continue e
                        }
                    }
                    r("32", i)
                }
            }
            e._flags |= zt.hasCachedChildNodes
        }
    }

    function d(e) {
        if (e[Kt]) return e[Kt];
        for (var t = []; !e[Kt];) {
            if (t.push(e), !e.parentNode) return null;
            e = e.parentNode
        }
        var n = e[Kt];
        if (n.tag === Ut || n.tag === Ht) return n;
        for (; e && (n = e[Kt]); e = t.pop()) {
            var r = n;
            t.length && c(n, e)
        }
        return r
    }

    function f(e) {
        if ("function" == typeof e.getName) return e.getName();
        if ("number" == typeof e.tag) {
            if ("string" == typeof (e = e.type)) return e;
            if ("function" == typeof e) return e.displayName || e.name
        }
        return null
    }

    function p(e) {
        var t = e;
        if (e.alternate) for (; t.return;) t = t.return; else {
            if ((t.effectTag & rn) !== nn) return 1;
            for (; t.return;) if (t = t.return, (t.effectTag & rn) !== nn) return 1
        }
        return t.tag === Jt ? 2 : 3
    }

    function h(e) {
        2 !== p(e) && r("188")
    }

    function y(e) {
        var t = e.alternate;
        if (!t) return t = p(e), 3 === t && r("188"), 1 === t ? null : e;
        for (var n = e, o = t; ;) {
            var a = n.return, i = a ? a.alternate : null;
            if (!a || !i) break;
            if (a.child === i.child) {
                for (var l = a.child; l;) {
                    if (l === n) return h(a), e;
                    if (l === o) return h(a), t;
                    l = l.sibling
                }
                r("188")
            }
            if (n.return !== o.return) n = a, o = i; else {
                l = !1;
                for (var u = a.child; u;) {
                    if (u === n) {
                        l = !0, n = a, o = i;
                        break
                    }
                    if (u === o) {
                        l = !0, o = a, n = i;
                        break
                    }
                    u = u.sibling
                }
                if (!l) {
                    for (u = i.child; u;) {
                        if (u === n) {
                            l = !0, n = i, o = a;
                            break
                        }
                        if (u === o) {
                            l = !0, o = i, n = a;
                            break
                        }
                        u = u.sibling
                    }
                    l || r("189")
                }
            }
            n.alternate !== o && r("190")
        }
        return n.tag !== Jt && r("188"), n.stateNode.current === n ? e : t
    }

    function m(e, t, n, r, o, a, i, l, u) {
        an._hasCaughtError = !1, an._caughtError = null;
        var s = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, s)
        } catch (e) {
            an._caughtError = e, an._hasCaughtError = !0
        }
    }

    function b() {
        if (an._hasRethrowError) {
            var e = an._rethrowError;
            throw an._rethrowError = null, an._hasRethrowError = !1, e
        }
    }

    function g(e, t, n, r) {
        t = e.type || "unknown-event", e.currentTarget = un.getNodeFromInstance(r), ln.invokeGuardedCallbackAndCatchFirstError(t, n, void 0, e), e.currentTarget = null
    }

    function v(e) {
        if (e = sn.getInstanceFromNode(e)) if ("number" == typeof e.tag) {
            cn && "function" == typeof cn.restoreControlledState || r("194");
            var t = sn.getFiberCurrentPropsFromNode(e.stateNode);
            cn.restoreControlledState(e.stateNode, e.type, t)
        } else "function" != typeof e.restoreControlledState && r("195"), e.restoreControlledState()
    }

    function C(e, t, n, r, o, a) {
        return e(t, n, r, o, a)
    }

    function w(e, t) {
        return e(t)
    }

    function E(e, t) {
        return w(e, t)
    }

    function T(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === mn ? e.parentNode : e
    }

    function _(e) {
        var t = e.targetInst;
        do {
            if (!t) {
                e.ancestors.push(t);
                break
            }
            var n = t;
            if ("number" == typeof n.tag) {
                for (; n.return;) n = n.return;
                n = n.tag !== bn ? null : n.stateNode.containerInfo
            } else {
                for (; n._hostParent;) n = n._hostParent;
                n = Gt.getNodeFromInstance(n).parentNode
            }
            if (!n) break;
            e.ancestors.push(t), t = Gt.getClosestInstanceFromNode(n)
        } while (t);
        for (n = 0; n < e.ancestors.length; n++) t = e.ancestors[n], vn._handleTopLevel(e.topLevelType, t, e.nativeEvent, T(e.nativeEvent))
    }

    function P(e, t) {
        return null == t && r("30"), null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
    }

    function S(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
    }

    function O(e, t) {
        e && (sn.executeDispatchesInOrder(e, t), e.isPersistent() || e.constructor.release(e))
    }

    function k(e) {
        return O(e, !0)
    }

    function x(e) {
        return O(e, !1)
    }

    function N(e, t, n) {
        switch (e) {
            case"onClick":
            case"onClickCapture":
            case"onDoubleClick":
            case"onDoubleClickCapture":
            case"onMouseDown":
            case"onMouseDownCapture":
            case"onMouseMove":
            case"onMouseMoveCapture":
            case"onMouseUp":
            case"onMouseUpCapture":
                return !(!n.disabled || "button" !== t && "input" !== t && "select" !== t && "textarea" !== t);
            default:
                return !1
        }
    }

    function I(e, t) {
        if (!bt.canUseDOM || t && !("addEventListener" in document)) return !1;
        t = "on" + e;
        var n = t in document;
        return n || (n = document.createElement("div"), n.setAttribute(t, "return;"), n = "function" == typeof n[t]), !n && Ot && "wheel" === e && (n = document.implementation.hasFeature("Events.wheel", "3.0")), n
    }

    function M(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n["ms" + e] = "MS" + t, n["O" + e] = "o" + t.toLowerCase(), n
    }

    function R(e) {
        if (_n[e]) return _n[e];
        if (!Tn[e]) return e;
        var t, n = Tn[e];
        for (t in n) if (n.hasOwnProperty(t) && t in Pn) return _n[e] = n[t];
        return ""
    }

    function A(e) {
        return Object.prototype.hasOwnProperty.call(e, xn) || (e[xn] = kn++, On[e[xn]] = {}), On[e[xn]]
    }

    function j(e) {
        return !!Bn.hasOwnProperty(e) || !Hn.hasOwnProperty(e) && (Un.test(e) ? Bn[e] = !0 : (Hn[e] = !0, !1))
    }

    function D() {
        return null
    }

    function F(e) {
        var t = "";
        return mt.Children.forEach(e, function (e) {
            null == e || "string" != typeof e && "number" != typeof e || (t += e)
        }), t
    }

    function L(e, t, n) {
        if (e = e.options, t) {
            t = {};
            for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
            for (n = 0; n < e.length; n++) r = t.hasOwnProperty("$" + e[n].value), e[n].selected !== r && (e[n].selected = r)
        } else {
            for (n = "" + n, t = null, r = 0; r < e.length; r++) {
                if (e[r].value === n) return void (e[r].selected = !0);
                null !== t || e[r].disabled || (t = e[r])
            }
            null !== t && (t.selected = !0)
        }
    }

    function U(e, t) {
        t && (Jn[e] && (null != t.children || null != t.dangerouslySetInnerHTML) && r("137", e, ""), null != t.dangerouslySetInnerHTML && (null != t.children && r("60"), "object" === yt(t.dangerouslySetInnerHTML) && "__html" in t.dangerouslySetInnerHTML || r("61")), null != t.style && "object" !== yt(t.style) && r("62", ""))
    }

    function H(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }

    function B(e) {
        var t = H(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
        if (!e.hasOwnProperty(t) && "function" == typeof n.get && "function" == typeof n.set) return Object.defineProperty(e, t, {
            enumerable: n.enumerable,
            configurable: !0,
            get: function () {
                return n.get.call(this)
            },
            set: function (e) {
                r = "" + e, n.set.call(this, e)
            }
        }), {
            getValue: function () {
                return r
            }, setValue: function (e) {
                r = "" + e
            }, stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }

    function W(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
            case"annotation-xml":
            case"color-profile":
            case"font-face":
            case"font-face-src":
            case"font-face-uri":
            case"font-face-format":
            case"font-face-name":
            case"missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    function V(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === or) return void (n.nodeValue = t)
        }
        e.textContent = t
    }

    function z(e, t) {
        ur(t, e.nodeType === ir || e.nodeType === lr ? e : e.ownerDocument)
    }

    function q(e, t) {
        return e !== Rr && e !== Mr || t !== Rr && t !== Mr ? e === Ir && t !== Ir ? -255 : e !== Ir && t === Ir ? 255 : e - t : 0
    }

    function K() {
        return {first: null, last: null, hasForceUpdate: !1, callbackList: null}
    }

    function Y(e, t, n, r) {
        null !== n ? n.next = t : (t.next = e.first, e.first = t), null !== r ? t.next = r : e.last = t
    }

    function G(e, t) {
        t = t.priorityLevel;
        var n = null;
        if (null !== e.last && 0 >= q(e.last.priorityLevel, t)) n = e.last; else for (e = e.first; null !== e && 0 >= q(e.priorityLevel, t);) n = e, e = e.next;
        return n
    }

    function Q(e, t) {
        var n = e.alternate, r = e.updateQueue;
        null === r && (r = e.updateQueue = K()), null !== n ? null === (e = n.updateQueue) && (e = n.updateQueue = K()) : e = null, Dr = r, Fr = e !== r ? e : null;
        var o = Dr;
        n = Fr;
        var a = G(o, t), i = null !== a ? a.next : o.first;
        return null === n ? (Y(o, t, a, i), null) : (r = G(n, t), e = null !== r ? r.next : n.first, Y(o, t, a, i), i === e && null !== i || a === r && null !== a ? (null === r && (n.first = t), null === e && (n.last = null), null) : (t = {
            priorityLevel: t.priorityLevel,
            partialState: t.partialState,
            callback: t.callback,
            isReplace: t.isReplace,
            isForced: t.isForced,
            isTopLevelUnmount: t.isTopLevelUnmount,
            next: null
        }, Y(n, t, r, e), t))
    }

    function Z(e, t, n, r) {
        return e = e.partialState, "function" == typeof e ? e.call(t, n, r) : e
    }

    function $(e, t, n) {
        e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = n
    }

    function X(e) {
        return e.tag === Vr && null != e.type.childContextTypes
    }

    function J(e, t) {
        var n = e.stateNode, o = e.type.childContextTypes;
        if ("function" != typeof n.getChildContext) return t;
        n = n.getChildContext();
        for (var a in n) a in o || r("108", f(e) || "Unknown", a);
        return gt({}, t, n)
    }

    function ee(e, t, n) {
        this.tag = e, this.key = t, this.stateNode = this.type = null, this.sibling = this.child = this.return = null, this.index = 0, this.memoizedState = this.updateQueue = this.memoizedProps = this.pendingProps = this.ref = null, this.internalContextTag = n, this.effectTag = co, this.lastEffect = this.firstEffect = this.nextEffect = null, this.pendingWorkPriority = uo, this.alternate = null
    }

    function te(e, t, n) {
        var o = void 0;
        return "function" == typeof e ? (o = e.prototype && e.prototype.isReactComponent ? new ee(eo, t, n) : new ee(Jr, t, n), o.type = e) : "string" == typeof e ? (o = new ee(no, t, n), o.type = e) : "object" === (void 0 === e ? "undefined" : yt(e)) && null !== e && "number" == typeof e.tag ? o = e : r("130", null == e ? e : void 0 === e ? "undefined" : yt(e), ""), o
    }

    function ne(e) {
        return null === e || void 0 === e ? null : (e = Wo && e[Wo] || e["@@iterator"], "function" == typeof e ? e : null)
    }

    function re(e, t) {
        var n = t.ref;
        if (null !== n && "function" != typeof n) {
            if (t._owner) {
                t = t._owner;
                var o = void 0;
                t && ("number" == typeof t.tag ? (t.tag !== Ro && r("110"), o = t.stateNode) : o = t.getPublicInstance()), o || r("147", n);
                var a = "" + n;
                return null !== e && null !== e.ref && e.ref._stringRef === a ? e.ref : (e = function (e) {
                    var t = o.refs === wt ? o.refs = {} : o.refs;
                    null === e ? delete t[a] : t[a] = e
                }, e._stringRef = a, e)
            }
            "string" != typeof n && r("148"), t._owner || r("149", n)
        }
        return n
    }

    function oe(e, t) {
        "textarea" !== e.type && r("31", "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, "")
    }

    function ae(e, t) {
        function n(n, r) {
            if (t) {
                if (!e) {
                    if (null === r.alternate) return;
                    r = r.alternate
                }
                var o = n.lastEffect;
                null !== o ? (o.nextEffect = r, n.lastEffect = r) : n.firstEffect = n.lastEffect = r, r.nextEffect = null, r.effectTag = Bo
            }
        }

        function o(e, r) {
            if (!t) return null;
            for (; null !== r;) n(e, r), r = r.sibling;
            return null
        }

        function a(e, t) {
            for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
            return e
        }

        function i(t, n) {
            return e ? (t = _o(t, n), t.index = 0, t.sibling = null, t) : (t.pendingWorkPriority = n, t.effectTag = Uo, t.index = 0, t.sibling = null, t)
        }

        function l(e, n, r) {
            return e.index = r, t ? null !== (r = e.alternate) ? (r = r.index, r < n ? (e.effectTag = Ho, n) : r) : (e.effectTag = Ho, n) : n
        }

        function u(e) {
            return t && null === e.alternate && (e.effectTag = Ho), e
        }

        function s(e, t, n, r) {
            return null === t || t.tag !== Ao ? (n = Oo(n, e.internalContextTag, r), n.return = e, n) : (t = i(t, r), t.pendingProps = n, t.return = e, t)
        }

        function c(e, t, n, r) {
            return null === t || t.type !== n.type ? (r = Po(n, e.internalContextTag, r), r.ref = re(t, n), r.return = e, r) : (r = i(t, r), r.ref = re(t, n), r.pendingProps = n.props, r.return = e, r)
        }

        function d(e, t, n, r) {
            return null === t || t.tag !== Do ? (n = ko(n, e.internalContextTag, r), n.return = e, n) : (t = i(t, r), t.pendingProps = n, t.return = e, t)
        }

        function f(e, t, n, r) {
            return null === t || t.tag !== Fo ? (t = xo(n, e.internalContextTag, r), t.type = n.value, t.return = e, t) : (t = i(t, r), t.type = n.value, t.return = e, t)
        }

        function p(e, t, n, r) {
            return null === t || t.tag !== jo || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (n = No(n, e.internalContextTag, r), n.return = e, n) : (t = i(t, r), t.pendingProps = n.children || [], t.return = e, t)
        }

        function h(e, t, n, r) {
            return null === t || t.tag !== Lo ? (n = So(n, e.internalContextTag, r), n.return = e, n) : (t = i(t, r), t.pendingProps = n, t.return = e, t)
        }

        function y(e, t, n) {
            if ("string" == typeof t || "number" == typeof t) return t = Oo("" + t, e.internalContextTag, n), t.return = e, t;
            if ("object" === (void 0 === t ? "undefined" : yt(t)) && null !== t) {
                switch (t.$$typeof) {
                    case Vo:
                        return n = Po(t, e.internalContextTag, n), n.ref = re(null, t), n.return = e, n;
                    case wo:
                        return t = ko(t, e.internalContextTag, n), t.return = e, t;
                    case Eo:
                        return n = xo(t, e.internalContextTag, n), n.type = t.value, n.return = e, n;
                    case To:
                        return t = No(t, e.internalContextTag, n), t.return = e, t
                }
                if (Io(t) || ne(t)) return t = So(t, e.internalContextTag, n), t.return = e, t;
                oe(e, t)
            }
            return null
        }

        function m(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n) return null !== o ? null : s(e, t, "" + n, r);
            if ("object" === (void 0 === n ? "undefined" : yt(n)) && null !== n) {
                switch (n.$$typeof) {
                    case Vo:
                        return n.key === o ? c(e, t, n, r) : null;
                    case wo:
                        return n.key === o ? d(e, t, n, r) : null;
                    case Eo:
                        return null === o ? f(e, t, n, r) : null;
                    case To:
                        return n.key === o ? p(e, t, n, r) : null
                }
                if (Io(n) || ne(n)) return null !== o ? null : h(e, t, n, r);
                oe(e, n)
            }
            return null
        }

        function b(e, t, n, r, o) {
            if ("string" == typeof r || "number" == typeof r) return e = e.get(n) || null, s(t, e, "" + r, o);
            if ("object" === (void 0 === r ? "undefined" : yt(r)) && null !== r) {
                switch (r.$$typeof) {
                    case Vo:
                        return e = e.get(null === r.key ? n : r.key) || null, c(t, e, r, o);
                    case wo:
                        return e = e.get(null === r.key ? n : r.key) || null, d(t, e, r, o);
                    case Eo:
                        return e = e.get(n) || null, f(t, e, r, o);
                    case To:
                        return e = e.get(null === r.key ? n : r.key) || null, p(t, e, r, o)
                }
                if (Io(r) || ne(r)) return e = e.get(n) || null, h(t, e, r, o);
                oe(t, r)
            }
            return null
        }

        function g(e, r, i, u) {
            for (var s = null, c = null, d = r, f = r = 0, p = null; null !== d && f < i.length; f++) {
                d.index > f ? (p = d, d = null) : p = d.sibling;
                var h = m(e, d, i[f], u);
                if (null === h) {
                    null === d && (d = p);
                    break
                }
                t && d && null === h.alternate && n(e, d), r = l(h, r, f), null === c ? s = h : c.sibling = h, c = h, d = p
            }
            if (f === i.length) return o(e, d), s;
            if (null === d) {
                for (; f < i.length; f++) (d = y(e, i[f], u)) && (r = l(d, r, f), null === c ? s = d : c.sibling = d, c = d);
                return s
            }
            for (d = a(e, d); f < i.length; f++) (p = b(d, e, f, i[f], u)) && (t && null !== p.alternate && d.delete(null === p.key ? f : p.key), r = l(p, r, f), null === c ? s = p : c.sibling = p, c = p);
            return t && d.forEach(function (t) {
                return n(e, t)
            }), s
        }

        function v(e, i, u, s) {
            var c = ne(u);
            "function" != typeof c && r("150"), null == (u = c.call(u)) && r("151");
            for (var d = c = null, f = i, p = i = 0, h = null, g = u.next(); null !== f && !g.done; p++, g = u.next()) {
                f.index > p ? (h = f, f = null) : h = f.sibling;
                var v = m(e, f, g.value, s);
                if (null === v) {
                    f || (f = h);
                    break
                }
                t && f && null === v.alternate && n(e, f), i = l(v, i, p), null === d ? c = v : d.sibling = v, d = v, f = h
            }
            if (g.done) return o(e, f), c;
            if (null === f) {
                for (; !g.done; p++, g = u.next()) null !== (g = y(e, g.value, s)) && (i = l(g, i, p), null === d ? c = g : d.sibling = g, d = g);
                return c
            }
            for (f = a(e, f); !g.done; p++, g = u.next()) null !== (g = b(f, e, p, g.value, s)) && (t && null !== g.alternate && f.delete(null === g.key ? p : g.key), i = l(g, i, p), null === d ? c = g : d.sibling = g, d = g);
            return t && f.forEach(function (t) {
                return n(e, t)
            }), c
        }

        return function (e, t, a, l) {
            var s = "object" === (void 0 === a ? "undefined" : yt(a)) && null !== a;
            if (s) switch (a.$$typeof) {
                case Vo:
                    e:{
                        var c = a.key;
                        for (s = t; null !== s;) {
                            if (s.key === c) {
                                if (s.type === a.type) {
                                    o(e, s.sibling), t = i(s, l), t.ref = re(s, a), t.pendingProps = a.props, t.return = e, e = t;
                                    break e
                                }
                                o(e, s);
                                break
                            }
                            n(e, s), s = s.sibling
                        }
                        l = Po(a, e.internalContextTag, l), l.ref = re(t, a), l.return = e, e = l
                    }
                    return u(e);
                case wo:
                    e:{
                        for (s = a.key; null !== t;) {
                            if (t.key === s) {
                                if (t.tag === Do) {
                                    o(e, t.sibling), t = i(t, l), t.pendingProps = a, t.return = e, e = t;
                                    break e
                                }
                                o(e, t);
                                break
                            }
                            n(e, t), t = t.sibling
                        }
                        a = ko(a, e.internalContextTag, l), a.return = e, e = a
                    }
                    return u(e);
                case Eo:
                    e:{
                        if (null !== t) {
                            if (t.tag === Fo) {
                                o(e, t.sibling), t = i(t, l), t.type = a.value, t.return = e, e = t;
                                break e
                            }
                            o(e, t)
                        }
                        t = xo(a, e.internalContextTag, l), t.type = a.value, t.return = e, e = t
                    }
                    return u(e);
                case To:
                    e:{
                        for (s = a.key; null !== t;) {
                            if (t.key === s) {
                                if (t.tag === jo && t.stateNode.containerInfo === a.containerInfo && t.stateNode.implementation === a.implementation) {
                                    o(e, t.sibling), t = i(t, l), t.pendingProps = a.children || [], t.return = e, e = t;
                                    break e
                                }
                                o(e, t);
                                break
                            }
                            n(e, t), t = t.sibling
                        }
                        a = No(a, e.internalContextTag, l), a.return = e, e = a
                    }
                    return u(e)
            }
            if ("string" == typeof a || "number" == typeof a) return a = "" + a, null !== t && t.tag === Ao ? (o(e, t.sibling), t = i(t, l), t.pendingProps = a, t.return = e, e = t) : (o(e, t), a = Oo(a, e.internalContextTag, l), a.return = e, e = a), u(e);
            if (Io(a)) return g(e, t, a, l);
            if (ne(a)) return v(e, t, a, l);
            if (s && oe(e, a), void 0 === a) switch (e.tag) {
                case Ro:
                case Mo:
                    a = e.type, r("152", a.displayName || a.name || "Component")
            }
            return o(e, t)
        }
    }

    function ie(e, t, n, o) {
        function a(e, t) {
            t.updater = i, e.stateNode = t, Qt.set(t, e)
        }

        var i = {
            isMounted: aa, enqueueSetState: function (n, r, o) {
                n = Qt.get(n);
                var a = t(n, !1);
                ea(n, r, void 0 === o ? null : o, a), e(n, a)
            }, enqueueReplaceState: function (n, r, o) {
                n = Qt.get(n);
                var a = t(n, !1);
                ta(n, r, void 0 === o ? null : o, a), e(n, a)
            }, enqueueForceUpdate: function (n, r) {
                n = Qt.get(n);
                var o = t(n, !1);
                na(n, void 0 === r ? null : r, o), e(n, o)
            }
        };
        return {
            adoptClassInstance: a, constructClassInstance: function (e, t) {
                var n = e.type, r = Xo(e), o = Jo(e), i = o ? $o(e, r) : wt;
                return t = new n(t, i), a(e, t), o && Zo(e, r, i), t
            }, mountClassInstance: function (e, t) {
                var n = e.alternate, o = e.stateNode, a = o.state || null, l = e.pendingProps;
                l || r("158");
                var u = Xo(e);
                o.props = l, o.state = a, o.refs = wt, o.context = $o(e, u), kr.enableAsyncSubtreeAPI && null != e.type && null != e.type.prototype && !0 === e.type.prototype.unstable_isAsyncReactComponent && (e.internalContextTag |= Qo), "function" == typeof o.componentWillMount && (u = o.state, o.componentWillMount(), u !== o.state && i.enqueueReplaceState(o, o.state, null), null !== (u = e.updateQueue) && (o.state = ra(n, e, u, o, a, l, t))), "function" == typeof o.componentDidMount && (e.effectTag |= Go)
            }, updateClassInstance: function (e, t, a) {
                var l = t.stateNode;
                l.props = t.memoizedProps, l.state = t.memoizedState;
                var u = t.memoizedProps, s = t.pendingProps;
                s || null == (s = u) && r("159");
                var c = l.context, d = Xo(t);
                if (d = $o(t, d), "function" != typeof l.componentWillReceiveProps || u === s && c === d || (c = l.state, l.componentWillReceiveProps(s, d), l.state !== c && i.enqueueReplaceState(l, l.state, null)), c = t.memoizedState, a = null !== t.updateQueue ? ra(e, t, t.updateQueue, l, c, s, a) : c, !(u !== s || c !== a || oa() || null !== t.updateQueue && t.updateQueue.hasForceUpdate)) return "function" != typeof l.componentDidUpdate || u === e.memoizedProps && c === e.memoizedState || (t.effectTag |= Go), !1;
                var f = s;
                if (null === u || null !== t.updateQueue && t.updateQueue.hasForceUpdate) f = !0; else {
                    var p = t.stateNode, h = t.type;
                    f = "function" == typeof p.shouldComponentUpdate ? p.shouldComponentUpdate(f, a, d) : !h.prototype || !h.prototype.isPureReactComponent || (!Et(u, f) || !Et(c, a))
                }
                return f ? ("function" == typeof l.componentWillUpdate && l.componentWillUpdate(s, a, d), "function" == typeof l.componentDidUpdate && (t.effectTag |= Go)) : ("function" != typeof l.componentDidUpdate || u === e.memoizedProps && c === e.memoizedState || (t.effectTag |= Go), n(t, s), o(t, a)), l.props = s, l.state = a, l.context = d, f
            }
        }
    }

    function le(e, t, n, o, a) {
        function i(e, t, n) {
            l(e, t, n, t.pendingWorkPriority)
        }

        function l(e, t, n, r) {
            t.child = null === e ? ia(t, t.child, n, r) : e.child === t.child ? la(t, t.child, n, r) : ua(t, t.child, n, r)
        }

        function u(e, t) {
            var n = t.ref;
            null === n || e && e.ref === n || (t.effectTag |= Aa)
        }

        function s(e, t, n, r) {
            if (u(e, t), !n) return r && ma(t, !1), d(e, t);
            n = t.stateNode, ja.current = t;
            var o = n.render();
            return t.effectTag |= Na, i(e, t, o), t.memoizedState = n.state, t.memoizedProps = n.props, r && ma(t, !0), t.child
        }

        function c(e) {
            var t = e.stateNode;
            t.pendingContext ? ya(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ya(e, t.context, !1), b(e, t.containerInfo)
        }

        function d(e, t) {
            return sa(e, t), t.child
        }

        function f(e, t) {
            switch (t.tag) {
                case Ca:
                    c(t);
                    break;
                case va:
                    ha(t);
                    break;
                case Ta:
                    b(t, t.stateNode.containerInfo)
            }
            return null
        }

        var p = e.shouldSetTextContent, h = e.useSyncScheduling, y = e.shouldDeprioritizeSubtree, m = t.pushHostContext,
            b = t.pushHostContainer, g = n.enterHydrationState, v = n.resetHydrationState,
            C = n.tryToClaimNextHydratableInstance;
        e = ie(o, a, function (e, t) {
            e.memoizedProps = t
        }, function (e, t) {
            e.memoizedState = t
        });
        var w = e.adoptClassInstance, E = e.constructClassInstance, T = e.mountClassInstance, _ = e.updateClassInstance;
        return {
            beginWork: function (e, t, n) {
                if (t.pendingWorkPriority === ka || t.pendingWorkPriority > n) return f(e, t);
                switch (t.tag) {
                    case ba:
                        null !== e && r("155");
                        var o = t.type, a = t.pendingProps, l = fa(t);
                        return l = da(t, l), o = o(a, l), t.effectTag |= Na, "object" === (void 0 === o ? "undefined" : yt(o)) && null !== o && "function" == typeof o.render ? (t.tag = va, a = ha(t), w(t, o), T(t, n), t = s(e, t, !0, a)) : (t.tag = ga, i(e, t, o), t.memoizedProps = a, t = t.child), t;
                    case ga:
                        e:{
                            if (a = t.type, n = t.pendingProps, o = t.memoizedProps, pa()) null === n && (n = o); else if (null === n || o === n) {
                                t = d(e, t);
                                break e
                            }
                            o = fa(t), o = da(t, o), a = a(n, o), t.effectTag |= Na, i(e, t, a), t.memoizedProps = n, t = t.child
                        }
                        return t;
                    case va:
                        return a = ha(t), o = void 0, null === e ? t.stateNode ? r("153") : (E(t, t.pendingProps), T(t, n), o = !0) : o = _(e, t, n), s(e, t, o, a);
                    case Ca:
                        return c(t), o = t.updateQueue, null !== o ? (a = t.memoizedState, o = ca(e, t, o, null, a, null, n), a === o ? (v(), t = d(e, t)) : (a = o.element, null !== e && null !== e.child || !g(t) ? (v(), i(e, t, a)) : (t.effectTag |= Ia, t.child = ia(t, t.child, a, n)), t.memoizedState = o, t = t.child)) : (v(), t = d(e, t)), t;
                    case wa:
                        m(t), null === e && C(t), a = t.type;
                        var P = t.memoizedProps;
                        return o = t.pendingProps, null === o && null === (o = P) && r("154"), l = null !== e ? e.memoizedProps : null, pa() || null !== o && P !== o ? (P = o.children, p(a, o) ? P = null : l && p(a, l) && (t.effectTag |= Ma), u(e, t), n !== xa && !h && y(a, o) ? (t.pendingWorkPriority = xa, t = null) : (i(e, t, P), t.memoizedProps = o, t = t.child)) : t = d(e, t), t;
                    case Ea:
                        return null === e && C(t), e = t.pendingProps, null === e && (e = t.memoizedProps), t.memoizedProps = e, null;
                    case Pa:
                        t.tag = _a;
                    case _a:
                        return n = t.pendingProps, pa() ? null === n && null === (n = e && e.memoizedProps) && r("154") : null !== n && t.memoizedProps !== n || (n = t.memoizedProps), a = n.children, o = t.pendingWorkPriority, t.stateNode = null === e ? ia(t, t.stateNode, a, o) : e.child === t.child ? la(t, t.stateNode, a, o) : ua(t, t.stateNode, a, o), t.memoizedProps = n, t.stateNode;
                    case Sa:
                        return null;
                    case Ta:
                        e:{
                            if (b(t, t.stateNode.containerInfo), n = t.pendingWorkPriority, a = t.pendingProps, pa()) null === a && null == (a = e && e.memoizedProps) && r("154"); else if (null === a || t.memoizedProps === a) {
                                t = d(e, t);
                                break e
                            }
                            null === e ? t.child = ua(t, t.child, a, n) : i(e, t, a), t.memoizedProps = a, t = t.child
                        }
                        return t;
                    case Oa:
                        e:{
                            if (n = t.pendingProps, pa()) null === n && (n = t.memoizedProps); else if (null === n || t.memoizedProps === n) {
                                t = d(e, t);
                                break e
                            }
                            i(e, t, n), t.memoizedProps = n, t = t.child
                        }
                        return t;
                    default:
                        r("156")
                }
            }, beginFailedWork: function (e, t, n) {
                switch (t.tag) {
                    case va:
                        ha(t);
                        break;
                    case Ca:
                        c(t);
                        break;
                    default:
                        r("157")
                }
                return t.effectTag |= Ra, null === e ? t.child = null : t.child !== e.child && (t.child = e.child), t.pendingWorkPriority === ka || t.pendingWorkPriority > n ? f(e, t) : (t.firstEffect = null, t.lastEffect = null, l(e, t, null, n), t.tag === va && (e = t.stateNode, t.memoizedProps = e.props, t.memoizedState = e.state), t.child)
            }
        }
    }

    function ue(e, t, n) {
        var o = e.createInstance, a = e.createTextInstance, i = e.appendInitialChild, l = e.finalizeInitialChildren,
            u = e.prepareUpdate, s = t.getRootHostContainer, c = t.popHostContext, d = t.getHostContext,
            f = t.popHostContainer, p = n.prepareToHydrateHostInstance, h = n.prepareToHydrateHostTextInstance,
            y = n.popHydrationState;
        return {
            completeWork: function (e, t, n) {
                var m = t.pendingProps;
                switch (null === m ? m = t.memoizedProps : t.pendingWorkPriority === Ja && n !== Ja || (t.pendingProps = null), t.tag) {
                    case Ha:
                        return null;
                    case Ba:
                        return Fa(t), null;
                    case Wa:
                        return f(t), La(t), m = t.stateNode, m.pendingContext && (m.context = m.pendingContext, m.pendingContext = null), null !== e && null !== e.child || (y(t), t.effectTag &= ~Za), null;
                    case Va:
                        c(t), n = s();
                        var b = t.type;
                        if (null !== e && null != t.stateNode) {
                            var g = e.memoizedProps, v = t.stateNode, C = d();
                            m = u(v, b, g, m, n, C), (t.updateQueue = m) && (t.effectTag |= Xa), e.ref !== t.ref && (t.effectTag |= $a)
                        } else {
                            if (!m) return null === t.stateNode && r("166"), null;
                            if (e = d(), y(t)) p(t, n, e) && (t.effectTag |= Xa); else {
                                e = o(b, m, n, e, t);
                                e:for (g = t.child; null !== g;) {
                                    if (g.tag === Va || g.tag === za) i(e, g.stateNode); else if (g.tag !== qa && null !== g.child) {
                                        g = g.child;
                                        continue
                                    }
                                    if (g === t) break e;
                                    for (; null === g.sibling;) {
                                        if (null === g.return || g.return === t) break e;
                                        g = g.return
                                    }
                                    g = g.sibling
                                }
                                l(e, b, m, n) && (t.effectTag |= Xa), t.stateNode = e
                            }
                            null !== t.ref && (t.effectTag |= $a)
                        }
                        return null;
                    case za:
                        if (e && null != t.stateNode) e.memoizedProps !== m && (t.effectTag |= Xa); else {
                            if ("string" != typeof m) return null === t.stateNode && r("166"), null;
                            e = s(), n = d(), y(t) ? h(t) && (t.effectTag |= Xa) : t.stateNode = a(m, e, n, t)
                        }
                        return null;
                    case Ka:
                        (m = t.memoizedProps) || r("165"), t.tag = Ya, n = [];
                        e:for ((b = t.stateNode) && (b.return = t); null !== b;) {
                            if (b.tag === Va || b.tag === za || b.tag === qa) r("164"); else if (b.tag === Ga) n.push(b.type); else if (null !== b.child) {
                                b.child.return = b, b = b.child;
                                continue
                            }
                            for (; null === b.sibling;) {
                                if (null === b.return || b.return === t) break e;
                                b = b.return
                            }
                            b.sibling.return = b.return, b = b.sibling
                        }
                        return b = m.handler, m = b(m.props, n), t.child = Da(t, null !== e ? e.child : null, m, t.pendingWorkPriority), t.child;
                    case Ya:
                        return t.tag = Ka, null;
                    case Ga:
                    case Qa:
                        return null;
                    case qa:
                        return t.effectTag |= Xa, f(t), null;
                    case Ua:
                        r("167");
                    default:
                        r("156")
                }
            }
        }
    }

    function se(e) {
        return function (t) {
            try {
                return e(t)
            } catch (e) {
            }
        }
    }

    function ce(e, t) {
        function n(e) {
            var n = e.ref;
            if (null !== n) try {
                n(null)
            } catch (n) {
                t(e, n)
            }
        }

        function o(e) {
            return e.tag === ai || e.tag === oi || e.tag === li
        }

        function a(e) {
            for (var t = e; ;) if (l(t), null !== t.child && t.tag !== li) t.child.return = t, t = t.child; else {
                if (t === e) break;
                for (; null === t.sibling;) {
                    if (null === t.return || t.return === e) return;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }

        function i(e) {
            for (var t = e, n = !1, o = void 0, i = void 0; ;) {
                if (!n) {
                    n = t.return;
                    e:for (; ;) {
                        switch (null === n && r("160"), n.tag) {
                            case ai:
                                o = n.stateNode, i = !1;
                                break e;
                            case oi:
                            case li:
                                o = n.stateNode.containerInfo, i = !0;
                                break e
                        }
                        n = n.return
                    }
                    n = !0
                }
                if (t.tag === ai || t.tag === ii) a(t), i ? b(o, t.stateNode) : m(o, t.stateNode); else if (t.tag === li ? o = t.stateNode.containerInfo : l(t), null !== t.child) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === e) break;
                for (; null === t.sibling;) {
                    if (null === t.return || t.return === e) return;
                    t = t.return, t.tag === li && (n = !1)
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }

        function l(e) {
            switch ("function" == typeof ci && ci(e), e.tag) {
                case ri:
                    n(e);
                    var r = e.stateNode;
                    if ("function" == typeof r.componentWillUnmount) try {
                        r.props = e.memoizedProps, r.state = e.memoizedState, r.componentWillUnmount()
                    } catch (n) {
                        t(e, n)
                    }
                    break;
                case ai:
                    n(e);
                    break;
                case ui:
                    a(e.stateNode);
                    break;
                case li:
                    i(e)
            }
        }

        var u = e.commitMount, s = e.commitUpdate, c = e.resetTextContent, d = e.commitTextUpdate, f = e.appendChild,
            p = e.appendChildToContainer, h = e.insertBefore, y = e.insertInContainerBefore, m = e.removeChild,
            b = e.removeChildFromContainer, g = e.getPublicInstance;
        return {
            commitPlacement: function (e) {
                e:{
                    for (var t = e.return; null !== t;) {
                        if (o(t)) {
                            var n = t;
                            break e
                        }
                        t = t.return
                    }
                    r("160"), n = void 0
                }
                var a = t = void 0;
                switch (n.tag) {
                    case ai:
                        t = n.stateNode, a = !1;
                        break;
                    case oi:
                    case li:
                        t = n.stateNode.containerInfo, a = !0;
                        break;
                    default:
                        r("161")
                }
                n.effectTag & hi && (c(t), n.effectTag &= ~hi);
                e:t:for (n = e; ;) {
                    for (; null === n.sibling;) {
                        if (null === n.return || o(n.return)) {
                            n = null;
                            break e
                        }
                        n = n.return
                    }
                    for (n.sibling.return = n.return, n = n.sibling; n.tag !== ai && n.tag !== ii;) {
                        if (n.effectTag & di) continue t;
                        if (null === n.child || n.tag === li) continue t;
                        n.child.return = n, n = n.child
                    }
                    if (!(n.effectTag & di)) {
                        n = n.stateNode;
                        break e
                    }
                }
                for (var i = e; ;) {
                    if (i.tag === ai || i.tag === ii) n ? a ? y(t, i.stateNode, n) : h(t, i.stateNode, n) : a ? p(t, i.stateNode) : f(t, i.stateNode); else if (i.tag !== li && null !== i.child) {
                        i.child.return = i, i = i.child;
                        continue
                    }
                    if (i === e) break;
                    for (; null === i.sibling;) {
                        if (null === i.return || i.return === e) return;
                        i = i.return
                    }
                    i.sibling.return = i.return, i = i.sibling
                }
            }, commitDeletion: function (e) {
                i(e), e.return = null, e.child = null, e.alternate && (e.alternate.child = null, e.alternate.return = null)
            }, commitWork: function (e, t) {
                switch (t.tag) {
                    case ri:
                        break;
                    case ai:
                        var n = t.stateNode;
                        if (null != n) {
                            var o = t.memoizedProps;
                            e = null !== e ? e.memoizedProps : o;
                            var a = t.type, i = t.updateQueue;
                            t.updateQueue = null, null !== i && s(n, i, a, e, o, t)
                        }
                        break;
                    case ii:
                        null === t.stateNode && r("162"), n = t.memoizedProps, d(t.stateNode, null !== e ? e.memoizedProps : n, n);
                        break;
                    case oi:
                    case li:
                        break;
                    default:
                        r("163")
                }
            }, commitLifeCycles: function (e, t) {
                switch (t.tag) {
                    case ri:
                        var n = t.stateNode;
                        if (t.effectTag & fi) if (null === e) n.props = t.memoizedProps, n.state = t.memoizedState, n.componentDidMount(); else {
                            var o = e.memoizedProps;
                            e = e.memoizedState, n.props = t.memoizedProps, n.state = t.memoizedState, n.componentDidUpdate(o, e)
                        }
                        t.effectTag & pi && null !== t.updateQueue && si(t, t.updateQueue, n);
                        break;
                    case oi:
                        e = t.updateQueue, null !== e && si(t, e, t.child && t.child.stateNode);
                        break;
                    case ai:
                        n = t.stateNode, null === e && t.effectTag & fi && u(n, t.type, t.memoizedProps, t);
                        break;
                    case ii:
                    case li:
                        break;
                    default:
                        r("163")
                }
            }, commitAttachRef: function (e) {
                var t = e.ref;
                if (null !== t) {
                    var n = e.stateNode;
                    switch (e.tag) {
                        case ai:
                            t(g(n));
                            break;
                        default:
                            t(n)
                    }
                }
            }, commitDetachRef: function (e) {
                null !== (e = e.ref) && e(null)
            }
        }
    }

    function de(e) {
        function t(e) {
            return e === gi && r("174"), e
        }

        var n = e.getChildHostContext, o = e.getRootHostContext, a = yi(gi), i = yi(gi), l = yi(gi);
        return {
            getHostContext: function () {
                return t(a.current)
            }, getRootHostContainer: function () {
                return t(l.current)
            }, popHostContainer: function (e) {
                mi(a, e), mi(i, e), mi(l, e)
            }, popHostContext: function (e) {
                i.current === e && (mi(a, e), mi(i, e))
            }, pushHostContainer: function (e, t) {
                bi(l, t, e), t = o(t), bi(i, e, e), bi(a, t, e)
            }, pushHostContext: function (e) {
                var r = t(l.current), o = t(a.current);
                r = n(o, e.type, r), o !== r && (bi(i, e, e), bi(a, r, e))
            }, resetHostContainer: function () {
                a.current = gi, l.current = gi
            }
        }
    }

    function fe(e) {
        function t(e, t) {
            var n = _i();
            n.stateNode = t, n.return = e, n.effectTag = Ei, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
        }

        function n(e, t) {
            switch (e.tag) {
                case vi:
                    return i(t, e.type, e.pendingProps);
                case Ci:
                    return l(t, e.pendingProps);
                default:
                    return !1
            }
        }

        function o(e) {
            for (e = e.return; null !== e && e.tag !== vi && e.tag !== wi;) e = e.return;
            h = e
        }

        var a = e.shouldSetTextContent, i = e.canHydrateInstance, l = e.canHydrateTextInstance,
            u = e.getNextHydratableSibling, s = e.getFirstHydratableChild, c = e.hydrateInstance,
            d = e.hydrateTextInstance, f = e.didNotHydrateInstance, p = e.didNotFindHydratableInstance;
        if (e = e.didNotFindHydratableTextInstance, !(i && l && u && s && c && d && f && p && e)) return {
            enterHydrationState: function () {
                return !1
            }, resetHydrationState: function () {
            }, tryToClaimNextHydratableInstance: function () {
            }, prepareToHydrateHostInstance: function () {
                r("175")
            }, prepareToHydrateHostTextInstance: function () {
                r("176")
            }, popHydrationState: function () {
                return !1
            }
        };
        var h = null, y = null, m = !1;
        return {
            enterHydrationState: function (e) {
                return y = s(e.stateNode.containerInfo), h = e, m = !0
            }, resetHydrationState: function () {
                y = h = null, m = !1
            }, tryToClaimNextHydratableInstance: function (e) {
                if (m) {
                    var r = y;
                    if (r) {
                        if (!n(e, r)) {
                            if (!(r = u(r)) || !n(e, r)) return e.effectTag |= Ti, m = !1, void (h = e);
                            t(h, y)
                        }
                        e.stateNode = r, h = e, y = s(r)
                    } else e.effectTag |= Ti, m = !1, h = e
                }
            }, prepareToHydrateHostInstance: function (e, t, n) {
                return t = c(e.stateNode, e.type, e.memoizedProps, t, n, e), e.updateQueue = t, null !== t
            }, prepareToHydrateHostTextInstance: function (e) {
                return d(e.stateNode, e.memoizedProps, e)
            }, popHydrationState: function (e) {
                if (e !== h) return !1;
                if (!m) return o(e), m = !0, !1;
                var n = e.type;
                if (e.tag !== vi || "head" !== n && "body" !== n && !a(n, e.memoizedProps)) for (n = y; n;) t(e, n), n = u(n);
                return o(e), y = h ? u(e.stateNode) : null, !0
            }
        }
    }

    function pe(e) {
        function t() {
            for (; null !== K && K.current.pendingWorkPriority === Ii;) {
                K.isScheduled = !1;
                var e = K.nextScheduledRoot;
                if (K.nextScheduledRoot = null, K === Y) return Y = K = null, V = Ii, null;
                K = e
            }
            e = K;
            for (var t = null, n = Ii; null !== e;) e.current.pendingWorkPriority !== Ii && (n === Ii || n > e.current.pendingWorkPriority) && (n = e.current.pendingWorkPriority, t = e), e = e.nextScheduledRoot;
            null !== t ? (V = n, Si(), Xi(), E(), W = ki(t.current, n), t !== oe && (re = 0, oe = t)) : (V = Ii, oe = W = null)
        }

        function n(n) {
            ee = !0, q = null;
            var o = n.stateNode;
            if (o.current === n && r("177"), V !== Mi && V !== Ri || re++, Oi.current = null, n.effectTag > Li) if (null !== n.lastEffect) {
                n.lastEffect.nextEffect = n;
                var a = n.firstEffect
            } else a = n; else a = n.firstEffect;
            for (j(), z = a; null !== z;) {
                var i = !1, l = void 0;
                try {
                    for (; null !== z;) {
                        var u = z.effectTag;
                        if (u & Vi && e.resetTextContent(z.stateNode), u & Ki) {
                            var s = z.alternate;
                            null !== s && M(s)
                        }
                        switch (u & ~(zi | qi | Vi | Ki | Li)) {
                            case Ui:
                                O(z), z.effectTag &= ~Ui;
                                break;
                            case Bi:
                                O(z), z.effectTag &= ~Ui, x(z.alternate, z);
                                break;
                            case Hi:
                                x(z.alternate, z);
                                break;
                            case Wi:
                                te = !0, k(z), te = !1
                        }
                        z = z.nextEffect
                    }
                } catch (e) {
                    i = !0, l = e
                }
                i && (null === z && r("178"), d(z, l), null !== z && (z = z.nextEffect))
            }
            for (D(), o.current = n, z = a; null !== z;) {
                o = !1, a = void 0;
                try {
                    for (; null !== z;) {
                        var c = z.effectTag;
                        if (c & (Hi | zi) && N(z.alternate, z), c & Ki && I(z), c & qi) switch (i = z, l = void 0, null !== Q && (l = Q.get(i), Q.delete(i), null == l && null !== i.alternate && (i = i.alternate, l = Q.get(i), Q.delete(i))), null == l && r("184"), i.tag) {
                            case Zi:
                                i.stateNode.componentDidCatch(l.error, {componentStack: l.componentStack});
                                break;
                            case Yi:
                                null === X && (X = l.error);
                                break;
                            default:
                                r("157")
                        }
                        var f = z.nextEffect;
                        z.nextEffect = null, z = f
                    }
                } catch (e) {
                    o = !0, a = e
                }
                o && (null === z && r("178"), d(z, a), null !== z && (z = z.nextEffect))
            }
            ee = !1, "function" == typeof Ni && Ni(n.stateNode), $ && ($.forEach(b), $ = null), t()
        }

        function o(e) {
            for (; ;) {
                var t = S(e.alternate, e, V), n = e.return, r = e.sibling, o = e;
                if (!(o.pendingWorkPriority !== Ii && o.pendingWorkPriority > V)) {
                    for (var a = $i(o), i = o.child; null !== i;) a = xi(a, i.pendingWorkPriority), i = i.sibling;
                    o.pendingWorkPriority = a
                }
                if (null !== t) return t;
                if (null !== n && (null === n.firstEffect && (n.firstEffect = e.firstEffect), null !== e.lastEffect && (null !== n.lastEffect && (n.lastEffect.nextEffect = e.firstEffect), n.lastEffect = e.lastEffect), e.effectTag > Li && (null !== n.lastEffect ? n.lastEffect.nextEffect = e : n.firstEffect = e, n.lastEffect = e)), null !== r) return r;
                if (null === n) {
                    q = e;
                    break
                }
                e = n
            }
            return null
        }

        function a(e) {
            var t = _(e.alternate, e, V);
            return null === t && (t = o(e)), Oi.current = null, t
        }

        function i(e) {
            var t = P(e.alternate, e, V);
            return null === t && (t = o(e)), Oi.current = null, t
        }

        function l(e) {
            c(Di, e)
        }

        function u() {
            if (null !== Q && 0 < Q.size && V === Ri) for (; null !== W;) {
                var e = W;
                if (null === (W = null !== Q && (Q.has(e) || null !== e.alternate && Q.has(e.alternate)) ? i(W) : a(W)) && (null === q && r("179"), F = Ri, n(q), F = V, null === Q || 0 === Q.size || V !== Ri)) break
            }
        }

        function s(e, o) {
            if (null !== q ? (F = Ri, n(q), u()) : null === W && t(), !(V === Ii || V > e)) {
                F = V;
                e:for (; ;) {
                    if (V <= Ri) for (; null !== W && !(null === (W = a(W)) && (null === q && r("179"), F = Ri, n(q), F = V, u(), V === Ii || V > e || V > Ri));) ; else if (null !== o) for (; null !== W && !U;) if (1 < o.timeRemaining()) {
                        if (null === (W = a(W))) if (null === q && r("179"), 1 < o.timeRemaining()) {
                            if (F = Ri, n(q), F = V, u(), V === Ii || V > e || V < Ai) break
                        } else U = !0
                    } else U = !0;
                    switch (V) {
                        case Mi:
                        case Ri:
                            if (V <= e) continue e;
                            break e;
                        case Ai:
                        case ji:
                        case Di:
                            if (null === o) break e;
                            if (!U && V <= e) continue e;
                            break e;
                        case Ii:
                            break e;
                        default:
                            r("181")
                    }
                }
            }
        }

        function c(e, t) {
            L && r("182"), L = !0;
            var n = F, o = !1, a = null;
            try {
                s(e, t)
            } catch (e) {
                o = !0, a = e
            }
            for (; o;) {
                if (J) {
                    X = a;
                    break
                }
                var u = W;
                if (null === u) J = !0; else {
                    var c = d(u, a);
                    if (null === c && r("183"), !J) {
                        try {
                            o = c, a = e, c = t;
                            for (var f = o; null !== u;) {
                                switch (u.tag) {
                                    case Zi:
                                        Pi(u);
                                        break;
                                    case Gi:
                                        w(u);
                                        break;
                                    case Yi:
                                        C(u);
                                        break;
                                    case Qi:
                                        C(u)
                                }
                                if (u === f || u.alternate === f) break;
                                u = u.return
                            }
                            W = i(o), s(a, c)
                        } catch (e) {
                            o = !0, a = e;
                            continue
                        }
                        break
                    }
                }
            }
            if (F = n, null !== t && (G = !1), V > Ri && !G && (R(l), G = !0), e = X, J = U = L = !1, oe = Z = Q = X = null, re = 0, null !== e) throw e
        }

        function d(e, t) {
            var n = Oi.current = null, r = !1, o = !1, a = null;
            if (e.tag === Yi) n = e, p(e) && (J = !0); else for (var i = e.return; null !== i && null === n;) {
                if (i.tag === Zi ? "function" == typeof i.stateNode.componentDidCatch && (r = !0, a = f(i), n = i, o = !0) : i.tag === Yi && (n = i), p(i)) {
                    if (te || null !== $ && ($.has(i) || null !== i.alternate && $.has(i.alternate))) return null;
                    n = null, o = !1
                }
                i = i.return
            }
            if (null !== n) {
                null === Z && (Z = new Set), Z.add(n);
                var l = "";
                i = e;
                do {
                    e:switch (i.tag) {
                        case ho:
                        case yo:
                        case mo:
                        case bo:
                            var u = i._debugOwner, s = i._debugSource, c = f(i), d = null;
                            u && (d = f(u)), u = s, c = "\n    in " + (c || "Unknown") + (u ? " (at " + u.fileName.replace(/^.*[\\\/]/, "") + ":" + u.lineNumber + ")" : d ? " (created by " + d + ")" : "");
                            break e;
                        default:
                            c = ""
                    }
                    l += c, i = i.return
                } while (i);
                i = l, e = f(e), null === Q && (Q = new Map), t = {
                    componentName: e,
                    componentStack: i,
                    error: t,
                    errorBoundary: r ? n.stateNode : null,
                    errorBoundaryFound: r,
                    errorBoundaryName: a,
                    willRetry: o
                }, Q.set(n, t);
                try {
                    console.error(t.error)
                } catch (e) {
                    console.error(e)
                }
                return ee ? (null === $ && ($ = new Set), $.add(n)) : b(n), n
            }
            return null === X && (X = t), null
        }

        function p(e) {
            return null !== Z && (Z.has(e) || null !== e.alternate && Z.has(e.alternate))
        }

        function h(e, t) {
            return y(e, t, !1)
        }

        function y(e, t) {
            re > ne && (J = !0, r("185")), !L && t <= V && (W = null);
            for (var n = !0; null !== e && n;) {
                if (n = !1, (e.pendingWorkPriority === Ii || e.pendingWorkPriority > t) && (n = !0, e.pendingWorkPriority = t), null !== e.alternate && (e.alternate.pendingWorkPriority === Ii || e.alternate.pendingWorkPriority > t) && (n = !0, e.alternate.pendingWorkPriority = t), null === e.return) {
                    if (e.tag !== Yi) break;
                    var o = e.stateNode;
                    if (t === Ii || o.isScheduled || (o.isScheduled = !0, Y ? Y.nextScheduledRoot = o : K = o, Y = o), !L) switch (t) {
                        case Mi:
                            B ? c(Mi, null) : c(Ri, null);
                            break;
                        case Ri:
                            H || r("186");
                            break;
                        default:
                            G || (R(l), G = !0)
                    }
                }
                e = e.return
            }
        }

        function m(e, t) {
            var n = F;
            return n === Ii && (n = !A || e.internalContextTag & Fi || t ? ji : Mi), n === Mi && (L || H) ? Ri : n
        }

        function b(e) {
            y(e, Ri, !0)
        }

        var g = de(e), v = fe(e), C = g.popHostContainer, w = g.popHostContext, E = g.resetHostContainer,
            T = le(e, g, v, h, m), _ = T.beginWork, P = T.beginFailedWork, S = ue(e, g, v).completeWork;
        g = ce(e, d);
        var O = g.commitPlacement, k = g.commitDeletion, x = g.commitWork, N = g.commitLifeCycles,
            I = g.commitAttachRef, M = g.commitDetachRef, R = e.scheduleDeferredCallback, A = e.useSyncScheduling,
            j = e.prepareForCommit, D = e.resetAfterCommit, F = Ii, L = !1, U = !1, H = !1, B = !1, W = null, V = Ii,
            z = null, q = null, K = null, Y = null, G = !1, Q = null, Z = null, $ = null, X = null, J = !1, ee = !1,
            te = !1, ne = 1e3, re = 0, oe = null;
        return {
            scheduleUpdate: h, getPriorityContext: m, batchedUpdates: function (e, t) {
                var n = H;
                H = !0;
                try {
                    return e(t)
                } finally {
                    H = n, L || H || c(Ri, null)
                }
            }, unbatchedUpdates: function (e) {
                var t = B, n = H;
                B = H, H = !1;
                try {
                    return e()
                } finally {
                    H = n, B = t
                }
            }, flushSync: function (e) {
                var t = H, n = F;
                H = !0, F = Mi;
                try {
                    return e()
                } finally {
                    H = t, F = n, L && r("187"), c(Ri, null)
                }
            }, deferredUpdates: function (e) {
                var t = F;
                F = ji;
                try {
                    return e()
                } finally {
                    F = t
                }
            }
        }
    }

    function he() {
        r("196")
    }

    function ye(e) {
        return e ? (e = Qt.get(e), "number" == typeof e.tag ? he(e) : e._processChildContext(e._context)) : wt
    }

    function me(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function be(e, t) {
        var n = me(e);
        e = 0;
        for (var r; n;) {
            if (n.nodeType === il) {
                if (r = e + n.textContent.length, e <= t && r >= t) return {node: n, offset: t - e};
                e = r
            }
            e:{
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = me(n)
        }
    }

    function ge() {
        return !ll && bt.canUseDOM && (ll = "textContent" in document.documentElement ? "textContent" : "innerText"), ll
    }

    function ve() {
        r("211")
    }

    function Ce() {
        r("212")
    }

    function we(e) {
        if (null == e) return null;
        if (e.nodeType === fl) return e;
        var t = Qt.get(e);
        if (t) return "number" == typeof t.tag ? ve(t) : Ce(t);
        "function" == typeof e.render ? r("188") : r("213", Object.keys(e))
    }

    function Ee(e) {
        if (void 0 !== e._hostParent) return e._hostParent;
        if ("number" == typeof e.tag) {
            do {
                e = e.return
            } while (e && e.tag !== pl);
            if (e) return e
        }
        return null
    }

    function Te(e, t) {
        for (var n = 0, r = e; r; r = Ee(r)) n++;
        r = 0;
        for (var o = t; o; o = Ee(o)) r++;
        for (; 0 < n - r;) e = Ee(e), n--;
        for (; 0 < r - n;) t = Ee(t), r--;
        for (; n--;) {
            if (e === t || e === t.alternate) return e;
            e = Ee(e), t = Ee(t)
        }
        return null
    }

    function _e(e, t, n) {
        (t = yl(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = P(n._dispatchListeners, t), n._dispatchInstances = P(n._dispatchInstances, e))
    }

    function Pe(e) {
        e && e.dispatchConfig.phasedRegistrationNames && hl.traverseTwoPhase(e._targetInst, _e, e)
    }

    function Se(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            var t = e._targetInst;
            t = t ? hl.getParentInstance(t) : null, hl.traverseTwoPhase(t, _e, e)
        }
    }

    function Oe(e, t, n) {
        e && n && n.dispatchConfig.registrationName && (t = yl(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = P(n._dispatchListeners, t), n._dispatchInstances = P(n._dispatchInstances, e))
    }

    function ke(e) {
        e && e.dispatchConfig.registrationName && Oe(e._targetInst, null, e)
    }

    function xe(e, t, n, r) {
        this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface;
        for (var o in e) e.hasOwnProperty(o) && ((t = e[o]) ? this[o] = t(n) : "target" === o ? this.target = r : this[o] = n[o]);
        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? Ct.thatReturnsTrue : Ct.thatReturnsFalse, this.isPropagationStopped = Ct.thatReturnsFalse, this
    }

    function Ne(e, t, n, r) {
        if (this.eventPool.length) {
            var o = this.eventPool.pop();
            return this.call(o, e, t, n, r), o
        }
        return new this(e, t, n, r)
    }

    function Ie(e) {
        e instanceof this || r("223"), e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
    }

    function Me(e) {
        e.eventPool = [], e.getPooled = Ne, e.release = Ie
    }

    function Re(e, t, n, r) {
        return xe.call(this, e, t, n, r)
    }

    function Ae(e, t, n, r) {
        return xe.call(this, e, t, n, r)
    }

    function je(e, t) {
        switch (e) {
            case"topKeyUp":
                return -1 !== El.indexOf(t.keyCode);
            case"topKeyDown":
                return 229 !== t.keyCode;
            case"topKeyPress":
            case"topMouseDown":
            case"topBlur":
                return !0;
            default:
                return !1
        }
    }

    function De(e) {
        return e = e.detail, "object" === (void 0 === e ? "undefined" : yt(e)) && "data" in e ? e.data : null
    }

    function Fe(e, t) {
        switch (e) {
            case"topCompositionEnd":
                return De(t);
            case"topKeyPress":
                return 32 !== t.which ? null : (Il = !0, xl);
            case"topTextInput":
                return e = t.data, e === xl && Il ? null : e;
            default:
                return null
        }
    }

    function Le(e, t) {
        if (Ml) return "topCompositionEnd" === e || !Tl && je(e, t) ? (e = vl.getData(), vl.reset(), Ml = !1, e) : null;
        switch (e) {
            case"topPaste":
                return null;
            case"topKeyPress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case"topCompositionEnd":
                return kl ? null : t.data;
            default:
                return null
        }
    }

    function Ue(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Al[e.type] : "textarea" === t
    }

    function He(e, t, n) {
        return e = xe.getPooled(jl.change, e, t, n), e.type = "change", pn.enqueueStateRestore(n), ml.accumulateTwoPhaseDispatches(e), e
    }

    function Be(e) {
        En.enqueueEvents(e), En.processEventQueue(!1)
    }

    function We(e) {
        var t = Gt.getNodeFromInstance(e);
        if (er.updateValueIfChanged(t)) return e
    }

    function Ve(e, t) {
        if ("topChange" === e) return t
    }

    function ze() {
        Dl && (Dl.detachEvent("onpropertychange", qe), Fl = Dl = null)
    }

    function qe(e) {
        "value" === e.propertyName && We(Fl) && (e = He(Fl, e, T(e)), yn.batchedUpdates(Be, e))
    }

    function Ke(e, t, n) {
        "topFocus" === e ? (ze(), Dl = t, Fl = n, Dl.attachEvent("onpropertychange", qe)) : "topBlur" === e && ze()
    }

    function Ye(e) {
        if ("topSelectionChange" === e || "topKeyUp" === e || "topKeyDown" === e) return We(Fl)
    }

    function Ge(e, t) {
        if ("topClick" === e) return We(t)
    }

    function Qe(e, t) {
        if ("topInput" === e || "topChange" === e) return We(t)
    }

    function Ze(e, t, n, r) {
        return xe.call(this, e, t, n, r)
    }

    function $e(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = Hl[e]) && !!t[e]
    }

    function Xe() {
        return $e
    }

    function Je(e, t, n, r) {
        return xe.call(this, e, t, n, r)
    }

    function et(e, t) {
        if (Ql || null == Kl || Kl !== Pt()) return null;
        var n = Kl;
        return "selectionStart" in n && dl.hasSelectionCapabilities(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : window.getSelection ? (n = window.getSelection(), n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }) : n = void 0, Gl && Et(Gl, n) ? null : (Gl = n, e = xe.getPooled(ql.select, Yl, e, t), e.type = "select", e.target = Kl, ml.accumulateTwoPhaseDispatches(e), e)
    }

    function tt(e, t, n, r) {
        return xe.call(this, e, t, n, r)
    }

    function nt(e, t, n, r) {
        return xe.call(this, e, t, n, r)
    }

    function rt(e, t, n, r) {
        return xe.call(this, e, t, n, r)
    }

    function ot(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 32 <= e || 13 === e ? e : 0
    }

    function at(e, t, n, r) {
        return xe.call(this, e, t, n, r)
    }

    function it(e, t, n, r) {
        return xe.call(this, e, t, n, r)
    }

    function lt(e, t, n, r) {
        return xe.call(this, e, t, n, r)
    }

    function ut(e, t, n, r) {
        return xe.call(this, e, t, n, r)
    }

    function st(e, t, n, r) {
        return xe.call(this, e, t, n, r)
    }

    function ct(e) {
        return e[1].toUpperCase()
    }

    function dt(e) {
        return !(!e || e.nodeType !== hu && e.nodeType !== bu && e.nodeType !== gu && (e.nodeType !== mu || " react-mount-point-unstable " !== e.nodeValue))
    }

    function ft(e) {
        return !(!(e = e ? e.nodeType === bu ? e.documentElement : e.firstChild : null) || e.nodeType !== hu || !e.hasAttribute(vu))
    }

    function pt(e, t, n, o, a) {
        dt(n) || r("200");
        var i = n._reactRootContainer;
        if (i) Du.updateContainer(t, i, e, a); else {
            if (!o && !ft(n)) for (o = void 0; o = n.lastChild;) n.removeChild(o);
            var l = Du.createContainer(n);
            i = n._reactRootContainer = l, Du.unbatchedUpdates(function () {
                Du.updateContainer(t, l, e, a)
            })
        }
        return Du.getPublicRootInstance(i)
    }

    function ht(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        return dt(t) || r("200"), Co.createPortal(e, t, null, n)
    }

    var yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, mt = n(0);
    n(5);
    var bt = n(26), gt = n(10), vt = n(27), Ct = n(4), wt = n(11), Et = n(28), Tt = n(29), _t = n(32), Pt = n(33);
    mt || r("227");
    var St, Ot, kt = {
            Namespaces: {
                html: "http://www.w3.org/1999/xhtml",
                mathml: "http://www.w3.org/1998/Math/MathML",
                svg: "http://www.w3.org/2000/svg"
            }, getIntrinsicNamespace: o, getChildNamespace: function (e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? o(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }
        }, xt = null, Nt = {}, It = {
            plugins: [],
            eventNameDispatchConfigs: {},
            registrationNameModules: {},
            registrationNameDependencies: {},
            possibleRegistrationNames: null,
            injectEventPluginOrder: function (e) {
                xt && r("101"), xt = Array.prototype.slice.call(e), a()
            },
            injectEventPluginsByName: function (e) {
                var t, n = !1;
                for (t in e) if (e.hasOwnProperty(t)) {
                    var o = e[t];
                    Nt.hasOwnProperty(t) && Nt[t] === o || (Nt[t] && r("102", t), Nt[t] = o, n = !0)
                }
                n && a()
            }
        }, Mt = It, Rt = {
            children: !0,
            dangerouslySetInnerHTML: !0,
            autoFocus: !0,
            defaultValue: !0,
            defaultChecked: !0,
            innerHTML: !0,
            suppressContentEditableWarning: !0,
            style: !0
        }, At = {
            MUST_USE_PROPERTY: 1,
            HAS_BOOLEAN_VALUE: 4,
            HAS_NUMERIC_VALUE: 8,
            HAS_POSITIVE_NUMERIC_VALUE: 24,
            HAS_OVERLOADED_BOOLEAN_VALUE: 32,
            HAS_STRING_BOOLEAN_VALUE: 64,
            injectDOMPropertyConfig: function (e) {
                var t = At, n = e.Properties || {}, o = e.DOMAttributeNamespaces || {}, a = e.DOMAttributeNames || {};
                e = e.DOMMutationMethods || {};
                for (var i in n) {
                    jt.properties.hasOwnProperty(i) && r("48", i);
                    var u = i.toLowerCase(), s = n[i];
                    u = {
                        attributeName: u,
                        attributeNamespace: null,
                        propertyName: i,
                        mutationMethod: null,
                        mustUseProperty: l(s, t.MUST_USE_PROPERTY),
                        hasBooleanValue: l(s, t.HAS_BOOLEAN_VALUE),
                        hasNumericValue: l(s, t.HAS_NUMERIC_VALUE),
                        hasPositiveNumericValue: l(s, t.HAS_POSITIVE_NUMERIC_VALUE),
                        hasOverloadedBooleanValue: l(s, t.HAS_OVERLOADED_BOOLEAN_VALUE),
                        hasStringBooleanValue: l(s, t.HAS_STRING_BOOLEAN_VALUE)
                    }, 1 >= u.hasBooleanValue + u.hasNumericValue + u.hasOverloadedBooleanValue || r("50", i), a.hasOwnProperty(i) && (u.attributeName = a[i]), o.hasOwnProperty(i) && (u.attributeNamespace = o[i]), e.hasOwnProperty(i) && (u.mutationMethod = e[i]), jt.properties[i] = u
                }
            }
        }, jt = {
            ID_ATTRIBUTE_NAME: "data-reactid",
            ROOT_ATTRIBUTE_NAME: "data-reactroot",
            ATTRIBUTE_NAME_START_CHAR: ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
            ATTRIBUTE_NAME_CHAR: ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
            properties: {},
            shouldSetAttribute: function (e, t) {
                if (jt.isReservedProp(e) || !("o" !== e[0] && "O" !== e[0] || "n" !== e[1] && "N" !== e[1])) return !1;
                if (null === t) return !0;
                switch (void 0 === t ? "undefined" : yt(t)) {
                    case"boolean":
                        return jt.shouldAttributeAcceptBooleanValue(e);
                    case"undefined":
                    case"number":
                    case"string":
                    case"object":
                        return !0;
                    default:
                        return !1
                }
            },
            getPropertyInfo: function (e) {
                return jt.properties.hasOwnProperty(e) ? jt.properties[e] : null
            },
            shouldAttributeAcceptBooleanValue: function (e) {
                if (jt.isReservedProp(e)) return !0;
                var t = jt.getPropertyInfo(e);
                return t ? t.hasBooleanValue || t.hasStringBooleanValue || t.hasOverloadedBooleanValue : "data-" === (e = e.toLowerCase().slice(0, 5)) || "aria-" === e
            },
            isReservedProp: function (e) {
                return Rt.hasOwnProperty(e)
            },
            injection: At
        }, Dt = jt, Ft = {
            IndeterminateComponent: 0,
            FunctionalComponent: 1,
            ClassComponent: 2,
            HostRoot: 3,
            HostPortal: 4,
            HostComponent: 5,
            HostText: 6,
            CoroutineComponent: 7,
            CoroutineHandlerPhase: 8,
            YieldComponent: 9,
            Fragment: 10
        }, Lt = {ELEMENT_NODE: 1, TEXT_NODE: 3, COMMENT_NODE: 8, DOCUMENT_NODE: 9, DOCUMENT_FRAGMENT_NODE: 11},
        Ut = Ft.HostComponent, Ht = Ft.HostText, Bt = Lt.ELEMENT_NODE, Wt = Lt.COMMENT_NODE, Vt = Dt.ID_ATTRIBUTE_NAME,
        zt = {hasCachedChildNodes: 1}, qt = Math.random().toString(36).slice(2), Kt = "__reactInternalInstance$" + qt,
        Yt = "__reactEventHandlers$" + qt, Gt = {
            getClosestInstanceFromNode: d, getInstanceFromNode: function (e) {
                var t = e[Kt];
                return t ? t.tag === Ut || t.tag === Ht ? t : t._hostNode === e ? t : null : (t = d(e), null != t && t._hostNode === e ? t : null)
            }, getNodeFromInstance: function (e) {
                if (e.tag === Ut || e.tag === Ht) return e.stateNode;
                if (void 0 === e._hostNode && r("33"), e._hostNode) return e._hostNode;
                for (var t = []; !e._hostNode;) t.push(e), e._hostParent || r("34"), e = e._hostParent;
                for (; t.length; e = t.pop()) c(e, e._hostNode);
                return e._hostNode
            }, precacheChildNodes: c, precacheNode: s, uncacheNode: function (e) {
                var t = e._hostNode;
                t && (delete t[Kt], e._hostNode = null)
            }, precacheFiberNode: function (e, t) {
                t[Kt] = e
            }, getFiberCurrentPropsFromNode: function (e) {
                return e[Yt] || null
            }, updateFiberProps: function (e, t) {
                e[Yt] = t
            }
        }, Qt = {
            remove: function (e) {
                e._reactInternalFiber = void 0
            }, get: function (e) {
                return e._reactInternalFiber
            }, has: function (e) {
                return void 0 !== e._reactInternalFiber
            }, set: function (e, t) {
                e._reactInternalFiber = t
            }
        }, Zt = {ReactCurrentOwner: mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner}, $t = {
            NoEffect: 0,
            PerformedWork: 1,
            Placement: 2,
            Update: 4,
            PlacementAndUpdate: 6,
            Deletion: 8,
            ContentReset: 16,
            Callback: 32,
            Err: 64,
            Ref: 128
        }, Xt = Ft.HostComponent, Jt = Ft.HostRoot, en = Ft.HostPortal, tn = Ft.HostText, nn = $t.NoEffect,
        rn = $t.Placement, on = {
            isFiberMounted: function (e) {
                return 2 === p(e)
            }, isMounted: function (e) {
                return !!(e = Qt.get(e)) && 2 === p(e)
            }, findCurrentFiberUsingSlowPath: y, findCurrentHostFiber: function (e) {
                if (!(e = y(e))) return null;
                for (var t = e; ;) {
                    if (t.tag === Xt || t.tag === tn) return t;
                    if (t.child) t.child.return = t, t = t.child; else {
                        if (t === e) break;
                        for (; !t.sibling;) {
                            if (!t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                }
                return null
            }, findCurrentHostFiberWithNoPortals: function (e) {
                if (!(e = y(e))) return null;
                for (var t = e; ;) {
                    if (t.tag === Xt || t.tag === tn) return t;
                    if (t.child && t.tag !== en) t.child.return = t, t = t.child; else {
                        if (t === e) break;
                        for (; !t.sibling;) {
                            if (!t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                }
                return null
            }
        }, an = {
            _caughtError: null,
            _hasCaughtError: !1,
            _rethrowError: null,
            _hasRethrowError: !1,
            injection: {
                injectErrorUtils: function (e) {
                    "function" != typeof e.invokeGuardedCallback && r("197"), m = e.invokeGuardedCallback
                }
            },
            invokeGuardedCallback: function (e, t, n, r, o, a, i, l, u) {
                m.apply(an, arguments)
            },
            invokeGuardedCallbackAndCatchFirstError: function (e, t, n, r, o, a, i, l, u) {
                if (an.invokeGuardedCallback.apply(this, arguments), an.hasCaughtError()) {
                    var s = an.clearCaughtError();
                    an._hasRethrowError || (an._hasRethrowError = !0, an._rethrowError = s)
                }
            },
            rethrowCaughtError: function () {
                return b.apply(an, arguments)
            },
            hasCaughtError: function () {
                return an._hasCaughtError
            },
            clearCaughtError: function () {
                if (an._hasCaughtError) {
                    var e = an._caughtError;
                    return an._caughtError = null, an._hasCaughtError = !1, e
                }
                r("198")
            }
        }, ln = an, un = {
            isEndish: function (e) {
                return "topMouseUp" === e || "topTouchEnd" === e || "topTouchCancel" === e
            }, isMoveish: function (e) {
                return "topMouseMove" === e || "topTouchMove" === e
            }, isStartish: function (e) {
                return "topMouseDown" === e || "topTouchStart" === e
            }, executeDirectDispatch: function (e) {
                var t = e._dispatchListeners, n = e._dispatchInstances;
                return Array.isArray(t) && r("103"), e.currentTarget = t ? un.getNodeFromInstance(n) : null, t = t ? t(e) : null, e.currentTarget = null, e._dispatchListeners = null, e._dispatchInstances = null, t
            }, executeDispatchesInOrder: function (e, t) {
                var n = e._dispatchListeners, r = e._dispatchInstances;
                if (Array.isArray(n)) for (var o = 0; o < n.length && !e.isPropagationStopped(); o++) g(e, t, n[o], r[o]); else n && g(e, t, n, r);
                e._dispatchListeners = null, e._dispatchInstances = null
            }, executeDispatchesInOrderStopAtTrue: function (e) {
                e:{
                    var t = e._dispatchListeners, n = e._dispatchInstances;
                    if (Array.isArray(t)) {
                        for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) if (t[r](e, n[r])) {
                            t = n[r];
                            break e
                        }
                    } else if (t && t(e, n)) {
                        t = n;
                        break e
                    }
                    t = null
                }
                return e._dispatchInstances = null, e._dispatchListeners = null, t
            }, hasDispatches: function (e) {
                return !!e._dispatchListeners
            }, getFiberCurrentPropsFromNode: function (e) {
                return St.getFiberCurrentPropsFromNode(e)
            }, getInstanceFromNode: function (e) {
                return St.getInstanceFromNode(e)
            }, getNodeFromInstance: function (e) {
                return St.getNodeFromInstance(e)
            }, injection: {
                injectComponentTree: function (e) {
                    St = e
                }
            }
        }, sn = un, cn = null, dn = null, fn = null, pn = {
            injection: {
                injectFiberControlledHostComponent: function (e) {
                    cn = e
                }
            }, enqueueStateRestore: function (e) {
                dn ? fn ? fn.push(e) : fn = [e] : dn = e
            }, restoreStateIfNeeded: function () {
                if (dn) {
                    var e = dn, t = fn;
                    if (fn = dn = null, v(e), t) for (e = 0; e < t.length; e++) v(t[e])
                }
            }
        }, hn = !1, yn = {
            batchedUpdates: function (e, t) {
                if (hn) return C(E, e, t);
                hn = !0;
                try {
                    return C(E, e, t)
                } finally {
                    hn = !1, pn.restoreStateIfNeeded()
                }
            }, injection: {
                injectStackBatchedUpdates: function (e) {
                    C = e
                }, injectFiberBatchedUpdates: function (e) {
                    w = e
                }
            }
        }, mn = Lt.TEXT_NODE, bn = Ft.HostRoot, gn = [], vn = {
            _enabled: !0, _handleTopLevel: null, setHandleTopLevel: function (e) {
                vn._handleTopLevel = e
            }, setEnabled: function (e) {
                vn._enabled = !!e
            }, isEnabled: function () {
                return vn._enabled
            }, trapBubbledEvent: function (e, t, n) {
                return n ? vt.listen(n, t, vn.dispatchEvent.bind(null, e)) : null
            }, trapCapturedEvent: function (e, t, n) {
                return n ? vt.capture(n, t, vn.dispatchEvent.bind(null, e)) : null
            }, dispatchEvent: function (e, t) {
                if (vn._enabled) {
                    var n = T(t);
                    if (n = Gt.getClosestInstanceFromNode(n), null === n || "number" != typeof n.tag || on.isFiberMounted(n) || (n = null), gn.length) {
                        var r = gn.pop();
                        r.topLevelType = e, r.nativeEvent = t, r.targetInst = n, e = r
                    } else e = {topLevelType: e, nativeEvent: t, targetInst: n, ancestors: []};
                    try {
                        yn.batchedUpdates(_, e)
                    } finally {
                        e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > gn.length && gn.push(e)
                    }
                }
            }
        }, Cn = vn, wn = null, En = {
            injection: {
                injectEventPluginOrder: Mt.injectEventPluginOrder,
                injectEventPluginsByName: Mt.injectEventPluginsByName
            }, getListener: function (e, t) {
                if ("number" == typeof e.tag) {
                    var n = e.stateNode;
                    if (!n) return null;
                    var o = sn.getFiberCurrentPropsFromNode(n);
                    if (!o) return null;
                    if (n = o[t], N(t, e.type, o)) return null
                } else {
                    if ("string" == typeof (o = e._currentElement) || "number" == typeof o || !e._rootNodeID) return null;
                    if (e = o.props, n = e[t], N(t, o.type, e)) return null
                }
                return n && "function" != typeof n && r("231", t, void 0 === n ? "undefined" : yt(n)), n
            }, extractEvents: function (e, t, n, r) {
                for (var o, a = Mt.plugins, i = 0; i < a.length; i++) {
                    var l = a[i];
                    l && (l = l.extractEvents(e, t, n, r)) && (o = P(o, l))
                }
                return o
            }, enqueueEvents: function (e) {
                e && (wn = P(wn, e))
            }, processEventQueue: function (e) {
                var t = wn;
                wn = null, e ? S(t, k) : S(t, x), wn && r("95"), ln.rethrowCaughtError()
            }
        };
    bt.canUseDOM && (Ot = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", ""));
    var Tn = {
        animationend: M("Animation", "AnimationEnd"),
        animationiteration: M("Animation", "AnimationIteration"),
        animationstart: M("Animation", "AnimationStart"),
        transitionend: M("Transition", "TransitionEnd")
    }, _n = {}, Pn = {};
    bt.canUseDOM && (Pn = document.createElement("div").style, "AnimationEvent" in window || (delete Tn.animationend.animation, delete Tn.animationiteration.animation, delete Tn.animationstart.animation), "TransitionEvent" in window || delete Tn.transitionend.transition);
    var Sn = {
        topAbort: "abort",
        topAnimationEnd: R("animationend") || "animationend",
        topAnimationIteration: R("animationiteration") || "animationiteration",
        topAnimationStart: R("animationstart") || "animationstart",
        topBlur: "blur",
        topCancel: "cancel",
        topCanPlay: "canplay",
        topCanPlayThrough: "canplaythrough",
        topChange: "change",
        topClick: "click",
        topClose: "close",
        topCompositionEnd: "compositionend",
        topCompositionStart: "compositionstart",
        topCompositionUpdate: "compositionupdate",
        topContextMenu: "contextmenu",
        topCopy: "copy",
        topCut: "cut",
        topDoubleClick: "dblclick",
        topDrag: "drag",
        topDragEnd: "dragend",
        topDragEnter: "dragenter",
        topDragExit: "dragexit",
        topDragLeave: "dragleave",
        topDragOver: "dragover",
        topDragStart: "dragstart",
        topDrop: "drop",
        topDurationChange: "durationchange",
        topEmptied: "emptied",
        topEncrypted: "encrypted",
        topEnded: "ended",
        topError: "error",
        topFocus: "focus",
        topInput: "input",
        topKeyDown: "keydown",
        topKeyPress: "keypress",
        topKeyUp: "keyup",
        topLoadedData: "loadeddata",
        topLoad: "load",
        topLoadedMetadata: "loadedmetadata",
        topLoadStart: "loadstart",
        topMouseDown: "mousedown",
        topMouseMove: "mousemove",
        topMouseOut: "mouseout",
        topMouseOver: "mouseover",
        topMouseUp: "mouseup",
        topPaste: "paste",
        topPause: "pause",
        topPlay: "play",
        topPlaying: "playing",
        topProgress: "progress",
        topRateChange: "ratechange",
        topScroll: "scroll",
        topSeeked: "seeked",
        topSeeking: "seeking",
        topSelectionChange: "selectionchange",
        topStalled: "stalled",
        topSuspend: "suspend",
        topTextInput: "textInput",
        topTimeUpdate: "timeupdate",
        topToggle: "toggle",
        topTouchCancel: "touchcancel",
        topTouchEnd: "touchend",
        topTouchMove: "touchmove",
        topTouchStart: "touchstart",
        topTransitionEnd: R("transitionend") || "transitionend",
        topVolumeChange: "volumechange",
        topWaiting: "waiting",
        topWheel: "wheel"
    }, On = {}, kn = 0, xn = "_reactListenersID" + ("" + Math.random()).slice(2), Nn = gt({}, {
        handleTopLevel: function (e, t, n, r) {
            e = En.extractEvents(e, t, n, r), En.enqueueEvents(e), En.processEventQueue(!1)
        }
    }, {
        setEnabled: function (e) {
            Cn && Cn.setEnabled(e)
        }, isEnabled: function () {
            return !(!Cn || !Cn.isEnabled())
        }, listenTo: function (e, t) {
            var n = A(t);
            e = Mt.registrationNameDependencies[e];
            for (var r = 0; r < e.length; r++) {
                var o = e[r];
                n.hasOwnProperty(o) && n[o] || ("topWheel" === o ? I("wheel") ? Cn.trapBubbledEvent("topWheel", "wheel", t) : I("mousewheel") ? Cn.trapBubbledEvent("topWheel", "mousewheel", t) : Cn.trapBubbledEvent("topWheel", "DOMMouseScroll", t) : "topScroll" === o ? Cn.trapCapturedEvent("topScroll", "scroll", t) : "topFocus" === o || "topBlur" === o ? (Cn.trapCapturedEvent("topFocus", "focus", t), Cn.trapCapturedEvent("topBlur", "blur", t), n.topBlur = !0, n.topFocus = !0) : "topCancel" === o ? (I("cancel", !0) && Cn.trapCapturedEvent("topCancel", "cancel", t), n.topCancel = !0) : "topClose" === o ? (I("close", !0) && Cn.trapCapturedEvent("topClose", "close", t), n.topClose = !0) : Sn.hasOwnProperty(o) && Cn.trapBubbledEvent(o, Sn[o], t), n[o] = !0)
            }
        }, isListeningToAllDependencies: function (e, t) {
            t = A(t), e = Mt.registrationNameDependencies[e];
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (!t.hasOwnProperty(r) || !t[r]) return !1
            }
            return !0
        }, trapBubbledEvent: function (e, t, n) {
            return Cn.trapBubbledEvent(e, t, n)
        }, trapCapturedEvent: function (e, t, n) {
            return Cn.trapCapturedEvent(e, t, n)
        }
    }), In = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }, Mn = ["Webkit", "ms", "Moz", "O"];
    Object.keys(In).forEach(function (e) {
        Mn.forEach(function (t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), In[t] = In[e]
        })
    });
    var Rn = {
        isUnitlessNumber: In,
        shorthandPropertyExpansions: {
            background: {
                backgroundAttachment: !0,
                backgroundColor: !0,
                backgroundImage: !0,
                backgroundPositionX: !0,
                backgroundPositionY: !0,
                backgroundRepeat: !0
            },
            backgroundPosition: {backgroundPositionX: !0, backgroundPositionY: !0},
            border: {borderWidth: !0, borderStyle: !0, borderColor: !0},
            borderBottom: {borderBottomWidth: !0, borderBottomStyle: !0, borderBottomColor: !0},
            borderLeft: {borderLeftWidth: !0, borderLeftStyle: !0, borderLeftColor: !0},
            borderRight: {borderRightWidth: !0, borderRightStyle: !0, borderRightColor: !0},
            borderTop: {borderTopWidth: !0, borderTopStyle: !0, borderTopColor: !0},
            font: {fontStyle: !0, fontVariant: !0, fontWeight: !0, fontSize: !0, lineHeight: !0, fontFamily: !0},
            outline: {outlineWidth: !0, outlineStyle: !0, outlineColor: !0}
        }
    }, An = Rn.isUnitlessNumber, jn = !1;
    if (bt.canUseDOM) {
        var Dn = document.createElement("div").style;
        try {
            Dn.font = ""
        } catch (e) {
            jn = !0
        }
    }
    var Fn, Ln = {
            createDangerousStringForStyles: function () {
            }, setValueForStyles: function (e, t) {
                e = e.style;
                for (var n in t) if (t.hasOwnProperty(n)) {
                    var r = 0 === n.indexOf("--"), o = n, a = t[n];
                    if (o = null == a || "boolean" == typeof a || "" === a ? "" : r || "number" != typeof a || 0 === a || An.hasOwnProperty(o) && An[o] ? ("" + a).trim() : a + "px", "float" === n && (n = "cssFloat"), r) e.setProperty(n, o); else if (o) e[n] = o; else if (r = jn && Rn.shorthandPropertyExpansions[n]) for (var i in r) e[i] = ""; else e[n] = ""
                }
            }
        }, Un = new RegExp("^[" + Dt.ATTRIBUTE_NAME_START_CHAR + "][" + Dt.ATTRIBUTE_NAME_CHAR + "]*$"), Hn = {}, Bn = {},
        Wn = {
            setAttributeForID: function (e, t) {
                e.setAttribute(Dt.ID_ATTRIBUTE_NAME, t)
            }, setAttributeForRoot: function (e) {
                e.setAttribute(Dt.ROOT_ATTRIBUTE_NAME, "")
            }, getValueForProperty: function () {
            }, getValueForAttribute: function () {
            }, setValueForProperty: function (e, t, n) {
                var r = Dt.getPropertyInfo(t);
                if (r && Dt.shouldSetAttribute(t, n)) {
                    var o = r.mutationMethod;
                    o ? o(e, n) : null == n || r.hasBooleanValue && !n || r.hasNumericValue && isNaN(n) || r.hasPositiveNumericValue && 1 > n || r.hasOverloadedBooleanValue && !1 === n ? Wn.deleteValueForProperty(e, t) : r.mustUseProperty ? e[r.propertyName] = n : (t = r.attributeName, (o = r.attributeNamespace) ? e.setAttributeNS(o, t, "" + n) : r.hasBooleanValue || r.hasOverloadedBooleanValue && !0 === n ? e.setAttribute(t, "") : e.setAttribute(t, "" + n))
                } else Wn.setValueForAttribute(e, t, Dt.shouldSetAttribute(t, n) ? n : null)
            }, setValueForAttribute: function (e, t, n) {
                j(t) && (null == n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            }, deleteValueForAttribute: function (e, t) {
                e.removeAttribute(t)
            }, deleteValueForProperty: function (e, t) {
                var n = Dt.getPropertyInfo(t);
                n ? (t = n.mutationMethod) ? t(e, void 0) : n.mustUseProperty ? e[n.propertyName] = !n.hasBooleanValue && "" : e.removeAttribute(n.attributeName) : e.removeAttribute(t)
            }
        }, Vn = Wn, zn = Zt.ReactDebugCurrentFrame, qn = {
            current: null, phase: null, resetCurrentFiber: function () {
                zn.getCurrentStack = null, qn.current = null, qn.phase = null
            }, setCurrentFiber: function (e, t) {
                zn.getCurrentStack = D, qn.current = e, qn.phase = t
            }, getCurrentFiberOwnerName: function () {
                return null
            }, getCurrentFiberStackAddendum: D
        }, Kn = qn, Yn = {
            getHostProps: function (e, t) {
                var n = t.value, r = t.checked;
                return gt({type: void 0, step: void 0, min: void 0, max: void 0}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: null != n ? n : e._wrapperState.initialValue,
                    checked: null != r ? r : e._wrapperState.initialChecked
                })
            }, initWrapperState: function (e, t) {
                var n = t.defaultValue;
                e._wrapperState = {
                    initialChecked: null != t.checked ? t.checked : t.defaultChecked,
                    initialValue: null != t.value ? t.value : n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }, updateWrapper: function (e, t) {
                var n = t.checked;
                null != n && Vn.setValueForProperty(e, "checked", n || !1), n = t.value, null != n ? 0 === n && "" === e.value ? e.value = "0" : "number" === t.type ? (t = parseFloat(e.value) || 0, (n != t || n == t && e.value != n) && (e.value = "" + n)) : e.value !== "" + n && (e.value = "" + n) : (null == t.value && null != t.defaultValue && e.defaultValue !== "" + t.defaultValue && (e.defaultValue = "" + t.defaultValue), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked))
            }, postMountWrapper: function (e, t) {
                switch (t.type) {
                    case"submit":
                    case"reset":
                        break;
                    case"color":
                    case"date":
                    case"datetime":
                    case"datetime-local":
                    case"month":
                    case"time":
                    case"week":
                        e.value = "", e.value = e.defaultValue;
                        break;
                    default:
                        e.value = e.value
                }
                t = e.name, "" !== t && (e.name = ""), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !e.defaultChecked, "" !== t && (e.name = t)
            }, restoreControlledState: function (e, t) {
                Yn.updateWrapper(e, t);
                var n = t.name;
                if ("radio" === t.type && null != n) {
                    for (t = e; t.parentNode;) t = t.parentNode;
                    for (n = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var o = n[t];
                        if (o !== e && o.form === e.form) {
                            var a = Gt.getFiberCurrentPropsFromNode(o);
                            a || r("90"), Yn.updateWrapper(o, a)
                        }
                    }
                }
            }
        }, Gn = Yn, Qn = {
            validateProps: function () {
            }, postMountWrapper: function (e, t) {
                null != t.value && e.setAttribute("value", t.value)
            }, getHostProps: function (e, t) {
                return e = gt({children: void 0}, t), (t = F(t.children)) && (e.children = t), e
            }
        }, Zn = {
            getHostProps: function (e, t) {
                return gt({}, t, {value: void 0})
            }, initWrapperState: function (e, t) {
                var n = t.value;
                e._wrapperState = {initialValue: null != n ? n : t.defaultValue, wasMultiple: !!t.multiple}
            }, postMountWrapper: function (e, t) {
                e.multiple = !!t.multiple;
                var n = t.value;
                null != n ? L(e, !!t.multiple, n) : null != t.defaultValue && L(e, !!t.multiple, t.defaultValue)
            }, postUpdateWrapper: function (e, t) {
                e._wrapperState.initialValue = void 0;
                var n = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!t.multiple;
                var r = t.value;
                null != r ? L(e, !!t.multiple, r) : n !== !!t.multiple && (null != t.defaultValue ? L(e, !!t.multiple, t.defaultValue) : L(e, !!t.multiple, t.multiple ? [] : ""))
            }, restoreControlledState: function (e, t) {
                var n = t.value;
                null != n && L(e, !!t.multiple, n)
            }
        }, $n = {
            getHostProps: function (e, t) {
                return null != t.dangerouslySetInnerHTML && r("91"), gt({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }, initWrapperState: function (e, t) {
                var n = t.value, o = n;
                null == n && (n = t.defaultValue, t = t.children, null != t && (null != n && r("92"), Array.isArray(t) && (1 >= t.length || r("93"), t = t[0]), n = "" + t), null == n && (n = ""), o = n), e._wrapperState = {initialValue: "" + o}
            }, updateWrapper: function (e, t) {
                var n = t.value;
                null != n && (n = "" + n, n !== e.value && (e.value = n), null == t.defaultValue && (e.defaultValue = n)), null != t.defaultValue && (e.defaultValue = t.defaultValue)
            }, postMountWrapper: function (e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && (e.value = t)
            }, restoreControlledState: function (e, t) {
                $n.updateWrapper(e, t)
            }
        }, Xn = $n, Jn = gt({menuitem: !0}, {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        }), er = {
            _getTrackerFromNode: function (e) {
                return e._valueTracker
            }, track: function (e) {
                e._valueTracker || (e._valueTracker = B(e))
            }, updateValueIfChanged: function (e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(), r = "";
                return e && (r = H(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
            }, stopTracking: function (e) {
                (e = e._valueTracker) && e.stopTracking()
            }
        }, tr = kt.Namespaces, nr = function (e) {
            return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) {
                MSApp.execUnsafeLocalFunction(function () {
                    return e(t, n)
                })
            } : e
        }(function (e, t) {
            if (e.namespaceURI !== tr.svg || "innerHTML" in e) e.innerHTML = t; else for (Fn = Fn || document.createElement("div"), Fn.innerHTML = "<svg>" + t + "</svg>", t = Fn.firstChild; t.firstChild;) e.appendChild(t.firstChild)
        }), rr = /["'&<>]/, or = Lt.TEXT_NODE;
    bt.canUseDOM && ("textContent" in document.documentElement || (V = function (e, t) {
        if (e.nodeType === or) e.nodeValue = t; else {
            if ("boolean" == typeof t || "number" == typeof t) t = "" + t; else {
                t = "" + t;
                var n = rr.exec(t);
                if (n) {
                    var r, o = "", a = 0;
                    for (r = n.index; r < t.length; r++) {
                        switch (t.charCodeAt(r)) {
                            case 34:
                                n = "&quot;";
                                break;
                            case 38:
                                n = "&amp;";
                                break;
                            case 39:
                                n = "&#x27;";
                                break;
                            case 60:
                                n = "&lt;";
                                break;
                            case 62:
                                n = "&gt;";
                                break;
                            default:
                                continue
                        }
                        a !== r && (o += t.substring(a, r)), a = r + 1, o += n
                    }
                    t = a !== r ? o + t.substring(a, r) : o
                }
            }
            nr(e, t)
        }
    }));
    var ar = V, ir = (Kn.getCurrentFiberOwnerName, Lt.DOCUMENT_NODE), lr = Lt.DOCUMENT_FRAGMENT_NODE, ur = Nn.listenTo,
        sr = Mt.registrationNameModules, cr = kt.Namespaces.html, dr = kt.getIntrinsicNamespace, fr = {
            topAbort: "abort",
            topCanPlay: "canplay",
            topCanPlayThrough: "canplaythrough",
            topDurationChange: "durationchange",
            topEmptied: "emptied",
            topEncrypted: "encrypted",
            topEnded: "ended",
            topError: "error",
            topLoadedData: "loadeddata",
            topLoadedMetadata: "loadedmetadata",
            topLoadStart: "loadstart",
            topPause: "pause",
            topPlay: "play",
            topPlaying: "playing",
            topProgress: "progress",
            topRateChange: "ratechange",
            topSeeked: "seeked",
            topSeeking: "seeking",
            topStalled: "stalled",
            topSuspend: "suspend",
            topTimeUpdate: "timeupdate",
            topVolumeChange: "volumechange",
            topWaiting: "waiting"
        }, pr = {
            createElement: function (e, t, n, r) {
                return n = n.nodeType === ir ? n : n.ownerDocument, r === cr && (r = dr(e)), r === cr ? "script" === e ? (e = n.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : e = "string" == typeof t.is ? n.createElement(e, {is: t.is}) : n.createElement(e) : e = n.createElementNS(r, e), e
            }, createTextNode: function (e, t) {
                return (t.nodeType === ir ? t : t.ownerDocument).createTextNode(e)
            }, setInitialProperties: function (e, t, n, r) {
                var o = W(t, n);
                switch (t) {
                    case"iframe":
                    case"object":
                        Nn.trapBubbledEvent("topLoad", "load", e);
                        var a = n;
                        break;
                    case"video":
                    case"audio":
                        for (a in fr) fr.hasOwnProperty(a) && Nn.trapBubbledEvent(a, fr[a], e);
                        a = n;
                        break;
                    case"source":
                        Nn.trapBubbledEvent("topError", "error", e), a = n;
                        break;
                    case"img":
                    case"image":
                        Nn.trapBubbledEvent("topError", "error", e), Nn.trapBubbledEvent("topLoad", "load", e), a = n;
                        break;
                    case"form":
                        Nn.trapBubbledEvent("topReset", "reset", e), Nn.trapBubbledEvent("topSubmit", "submit", e), a = n;
                        break;
                    case"details":
                        Nn.trapBubbledEvent("topToggle", "toggle", e), a = n;
                        break;
                    case"input":
                        Gn.initWrapperState(e, n), a = Gn.getHostProps(e, n), Nn.trapBubbledEvent("topInvalid", "invalid", e), z(r, "onChange");
                        break;
                    case"option":
                        Qn.validateProps(e, n), a = Qn.getHostProps(e, n);
                        break;
                    case"select":
                        Zn.initWrapperState(e, n), a = Zn.getHostProps(e, n), Nn.trapBubbledEvent("topInvalid", "invalid", e), z(r, "onChange");
                        break;
                    case"textarea":
                        Xn.initWrapperState(e, n), a = Xn.getHostProps(e, n), Nn.trapBubbledEvent("topInvalid", "invalid", e), z(r, "onChange");
                        break;
                    default:
                        a = n
                }
                U(t, a);
                var i, l = a;
                for (i in l) if (l.hasOwnProperty(i)) {
                    var u = l[i];
                    "style" === i ? Ln.setValueForStyles(e, u) : "dangerouslySetInnerHTML" === i ? null != (u = u ? u.__html : void 0) && nr(e, u) : "children" === i ? "string" == typeof u ? ar(e, u) : "number" == typeof u && ar(e, "" + u) : "suppressContentEditableWarning" !== i && (sr.hasOwnProperty(i) ? null != u && z(r, i) : o ? Vn.setValueForAttribute(e, i, u) : null != u && Vn.setValueForProperty(e, i, u))
                }
                switch (t) {
                    case"input":
                        er.track(e), Gn.postMountWrapper(e, n);
                        break;
                    case"textarea":
                        er.track(e), Xn.postMountWrapper(e, n);
                        break;
                    case"option":
                        Qn.postMountWrapper(e, n);
                        break;
                    case"select":
                        Zn.postMountWrapper(e, n);
                        break;
                    default:
                        "function" == typeof a.onClick && (e.onclick = Ct)
                }
            }, diffProperties: function (e, t, n, r, o) {
                var a = null;
                switch (t) {
                    case"input":
                        n = Gn.getHostProps(e, n), r = Gn.getHostProps(e, r), a = [];
                        break;
                    case"option":
                        n = Qn.getHostProps(e, n), r = Qn.getHostProps(e, r), a = [];
                        break;
                    case"select":
                        n = Zn.getHostProps(e, n), r = Zn.getHostProps(e, r), a = [];
                        break;
                    case"textarea":
                        n = Xn.getHostProps(e, n), r = Xn.getHostProps(e, r), a = [];
                        break;
                    default:
                        "function" != typeof n.onClick && "function" == typeof r.onClick && (e.onclick = Ct)
                }
                U(t, r);
                var i, l;
                e = null;
                for (i in n) if (!r.hasOwnProperty(i) && n.hasOwnProperty(i) && null != n[i]) if ("style" === i) for (l in t = n[i]) t.hasOwnProperty(l) && (e || (e = {}), e[l] = ""); else "dangerouslySetInnerHTML" !== i && "children" !== i && "suppressContentEditableWarning" !== i && (sr.hasOwnProperty(i) ? a || (a = []) : (a = a || []).push(i, null));
                for (i in r) {
                    var u = r[i];
                    if (t = null != n ? n[i] : void 0, r.hasOwnProperty(i) && u !== t && (null != u || null != t)) if ("style" === i) if (t) {
                        for (l in t) !t.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (e || (e = {}), e[l] = "");
                        for (l in u) u.hasOwnProperty(l) && t[l] !== u[l] && (e || (e = {}), e[l] = u[l])
                    } else e || (a || (a = []), a.push(i, e)), e = u; else "dangerouslySetInnerHTML" === i ? (u = u ? u.__html : void 0, t = t ? t.__html : void 0, null != u && t !== u && (a = a || []).push(i, "" + u)) : "children" === i ? t === u || "string" != typeof u && "number" != typeof u || (a = a || []).push(i, "" + u) : "suppressContentEditableWarning" !== i && (sr.hasOwnProperty(i) ? (null != u && z(o, i), a || t === u || (a = [])) : (a = a || []).push(i, u))
                }
                return e && (a = a || []).push("style", e), a
            }, updateProperties: function (e, t, n, r, o) {
                W(n, r), r = W(n, o);
                for (var a = 0; a < t.length; a += 2) {
                    var i = t[a], l = t[a + 1];
                    "style" === i ? Ln.setValueForStyles(e, l) : "dangerouslySetInnerHTML" === i ? nr(e, l) : "children" === i ? ar(e, l) : r ? null != l ? Vn.setValueForAttribute(e, i, l) : Vn.deleteValueForAttribute(e, i) : null != l ? Vn.setValueForProperty(e, i, l) : Vn.deleteValueForProperty(e, i)
                }
                switch (n) {
                    case"input":
                        Gn.updateWrapper(e, o), er.updateValueIfChanged(e);
                        break;
                    case"textarea":
                        Xn.updateWrapper(e, o);
                        break;
                    case"select":
                        Zn.postUpdateWrapper(e, o)
                }
            }, diffHydratedProperties: function (e, t, n, r, o) {
                switch (t) {
                    case"iframe":
                    case"object":
                        Nn.trapBubbledEvent("topLoad", "load", e);
                        break;
                    case"video":
                    case"audio":
                        for (var a in fr) fr.hasOwnProperty(a) && Nn.trapBubbledEvent(a, fr[a], e);
                        break;
                    case"source":
                        Nn.trapBubbledEvent("topError", "error", e);
                        break;
                    case"img":
                    case"image":
                        Nn.trapBubbledEvent("topError", "error", e), Nn.trapBubbledEvent("topLoad", "load", e);
                        break;
                    case"form":
                        Nn.trapBubbledEvent("topReset", "reset", e), Nn.trapBubbledEvent("topSubmit", "submit", e);
                        break;
                    case"details":
                        Nn.trapBubbledEvent("topToggle", "toggle", e);
                        break;
                    case"input":
                        Gn.initWrapperState(e, n), Nn.trapBubbledEvent("topInvalid", "invalid", e), z(o, "onChange");
                        break;
                    case"option":
                        Qn.validateProps(e, n);
                        break;
                    case"select":
                        Zn.initWrapperState(e, n), Nn.trapBubbledEvent("topInvalid", "invalid", e), z(o, "onChange");
                        break;
                    case"textarea":
                        Xn.initWrapperState(e, n), Nn.trapBubbledEvent("topInvalid", "invalid", e), z(o, "onChange")
                }
                U(t, n), r = null;
                for (var i in n) n.hasOwnProperty(i) && (a = n[i], "children" === i ? "string" == typeof a ? e.textContent !== a && (r = ["children", a]) : "number" == typeof a && e.textContent !== "" + a && (r = ["children", "" + a]) : sr.hasOwnProperty(i) && null != a && z(o, i));
                switch (t) {
                    case"input":
                        er.track(e), Gn.postMountWrapper(e, n);
                        break;
                    case"textarea":
                        er.track(e), Xn.postMountWrapper(e, n);
                        break;
                    case"select":
                    case"option":
                        break;
                    default:
                        "function" == typeof n.onClick && (e.onclick = Ct)
                }
                return r
            }, diffHydratedText: function (e, t) {
                return e.nodeValue !== t
            }, warnForDeletedHydratableElement: function () {
            }, warnForDeletedHydratableText: function () {
            }, warnForInsertedHydratedElement: function () {
            }, warnForInsertedHydratedText: function () {
            }, restoreControlledState: function (e, t, n) {
                switch (t) {
                    case"input":
                        Gn.restoreControlledState(e, n);
                        break;
                    case"textarea":
                        Xn.restoreControlledState(e, n);
                        break;
                    case"select":
                        Zn.restoreControlledState(e, n)
                }
            }
        }, hr = void 0;
    if (bt.canUseDOM) if ("function" != typeof requestIdleCallback) {
        var yr = null, mr = null, br = !1, gr = !1, vr = 0, Cr = 33, wr = 33, Er = {
            timeRemaining: "object" === ("undefined" == typeof performance ? "undefined" : yt(performance)) && "function" == typeof performance.now ? function () {
                return vr - performance.now()
            } : function () {
                return vr - Date.now()
            }
        }, Tr = "__reactIdleCallback$" + Math.random().toString(36).slice(2);
        window.addEventListener("message", function (e) {
            e.source === window && e.data === Tr && (br = !1, e = mr, mr = null, null !== e && e(Er))
        }, !1);
        var _r = function (e) {
            gr = !1;
            var t = e - vr + wr;
            t < wr && Cr < wr ? (8 > t && (t = 8), wr = t < Cr ? Cr : t) : Cr = t, vr = e + wr, br || (br = !0, window.postMessage(Tr, "*")), t = yr, yr = null, null !== t && t(e)
        };
        hr = function (e) {
            return mr = e, gr || (gr = !0, requestAnimationFrame(_r)), 0
        }
    } else hr = requestIdleCallback; else hr = function (e) {
        return setTimeout(function () {
            e({
                timeRemaining: function () {
                    return 1 / 0
                }
            })
        }), 0
    };
    var Pr, Sr, Or = {rIC: hr}, kr = {enableAsyncSubtreeAPI: !0}, xr = {
            NoWork: 0,
            SynchronousPriority: 1,
            TaskPriority: 2,
            HighPriority: 3,
            LowPriority: 4,
            OffscreenPriority: 5
        }, Nr = $t.Callback, Ir = xr.NoWork, Mr = xr.SynchronousPriority, Rr = xr.TaskPriority, Ar = Ft.ClassComponent,
        jr = Ft.HostRoot, Dr = void 0, Fr = void 0, Lr = {
            addUpdate: function (e, t, n, r) {
                Q(e, {
                    priorityLevel: r,
                    partialState: t,
                    callback: n,
                    isReplace: !1,
                    isForced: !1,
                    isTopLevelUnmount: !1,
                    next: null
                })
            }, addReplaceUpdate: function (e, t, n, r) {
                Q(e, {
                    priorityLevel: r,
                    partialState: t,
                    callback: n,
                    isReplace: !0,
                    isForced: !1,
                    isTopLevelUnmount: !1,
                    next: null
                })
            }, addForceUpdate: function (e, t, n) {
                Q(e, {
                    priorityLevel: n,
                    partialState: null,
                    callback: t,
                    isReplace: !1,
                    isForced: !0,
                    isTopLevelUnmount: !1,
                    next: null
                })
            }, getUpdatePriority: function (e) {
                var t = e.updateQueue;
                return null === t || e.tag !== Ar && e.tag !== jr ? Ir : null !== t.first ? t.first.priorityLevel : Ir
            }, addTopLevelUpdate: function (e, t, n, r) {
                var o = null === t.element;
                t = {
                    priorityLevel: r,
                    partialState: t,
                    callback: n,
                    isReplace: !1,
                    isForced: !1,
                    isTopLevelUnmount: o,
                    next: null
                }, e = Q(e, t), o && (o = Dr, n = Fr, null !== o && null !== t.next && (t.next = null, o.last = t), null !== n && null !== e && null !== e.next && (e.next = null, n.last = t))
            }, beginUpdateQueue: function (e, t, n, r, o, a, i) {
                null !== e && e.updateQueue === n && (n = t.updateQueue = {
                    first: n.first,
                    last: n.last,
                    callbackList: null,
                    hasForceUpdate: !1
                }), e = n.callbackList;
                for (var l = n.hasForceUpdate, u = !0, s = n.first; null !== s && 0 >= q(s.priorityLevel, i);) {
                    n.first = s.next, null === n.first && (n.last = null);
                    var c;
                    s.isReplace ? (o = Z(s, r, o, a), u = !0) : (c = Z(s, r, o, a)) && (o = u ? gt({}, o, c) : gt(o, c), u = !1), s.isForced && (l = !0), null === s.callback || s.isTopLevelUnmount && null !== s.next || (e = null !== e ? e : [], e.push(s.callback), t.effectTag |= Nr), s = s.next
                }
                return n.callbackList = e, n.hasForceUpdate = l, null !== n.first || null !== e || l || (t.updateQueue = null), o
            }, commitCallbacks: function (e, t, n) {
                if (null !== (e = t.callbackList)) for (t.callbackList = null, t = 0; t < e.length; t++) {
                    var o = e[t];
                    "function" != typeof o && r("191", o), o.call(n)
                }
            }
        }, Ur = [], Hr = -1, Br = {
            createCursor: function (e) {
                return {current: e}
            }, isEmpty: function () {
                return -1 === Hr
            }, pop: function (e) {
                0 > Hr || (e.current = Ur[Hr], Ur[Hr] = null, Hr--)
            }, push: function (e, t) {
                Hr++, Ur[Hr] = e.current, e.current = t
            }, reset: function () {
                for (; -1 < Hr;) Ur[Hr] = null, Hr--
            }
        }, Wr = on.isFiberMounted, Vr = Ft.ClassComponent, zr = Ft.HostRoot, qr = Br.createCursor, Kr = Br.pop,
        Yr = Br.push, Gr = qr(wt), Qr = qr(!1), Zr = wt, $r = {
            getUnmaskedContext: function (e) {
                return X(e) ? Zr : Gr.current
            }, cacheContext: $, getMaskedContext: function (e, t) {
                var n = e.type.contextTypes;
                if (!n) return wt;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                var o, a = {};
                for (o in n) a[o] = t[o];
                return r && $(e, t, a), a
            }, hasContextChanged: function () {
                return Qr.current
            }, isContextConsumer: function (e) {
                return e.tag === Vr && null != e.type.contextTypes
            }, isContextProvider: X, popContextProvider: function (e) {
                X(e) && (Kr(Qr, e), Kr(Gr, e))
            }, popTopLevelContextObject: function (e) {
                Kr(Qr, e), Kr(Gr, e)
            }, pushTopLevelContextObject: function (e, t, n) {
                null != Gr.cursor && r("168"), Yr(Gr, t, e), Yr(Qr, n, e)
            }, processChildContext: J, pushContextProvider: function (e) {
                if (!X(e)) return !1;
                var t = e.stateNode;
                return t = t && t.__reactInternalMemoizedMergedChildContext || wt, Zr = Gr.current, Yr(Gr, t, e), Yr(Qr, Qr.current, e), !0
            }, invalidateContextProvider: function (e, t) {
                var n = e.stateNode;
                if (n || r("169"), t) {
                    var o = J(e, Zr);
                    n.__reactInternalMemoizedMergedChildContext = o, Kr(Qr, e), Kr(Gr, e), Yr(Gr, o, e)
                } else Kr(Qr, e);
                Yr(Qr, t, e)
            }, resetContext: function () {
                Zr = wt, Gr.current = wt, Qr.current = !1
            }, findCurrentUnmaskedContext: function (e) {
                for (Wr(e) && e.tag === Vr ? void 0 : r("170"); e.tag !== zr;) {
                    if (X(e)) return e.stateNode.__reactInternalMemoizedMergedChildContext;
                    (e = e.return) || r("171")
                }
                return e.stateNode.context
            }
        }, Xr = {NoContext: 0, AsyncUpdates: 1}, Jr = Ft.IndeterminateComponent, eo = Ft.ClassComponent, to = Ft.HostRoot,
        no = Ft.HostComponent, ro = Ft.HostText, oo = Ft.HostPortal, ao = Ft.CoroutineComponent, io = Ft.YieldComponent,
        lo = Ft.Fragment, uo = xr.NoWork, so = Xr.NoContext, co = $t.NoEffect, fo = {
            createWorkInProgress: function (e, t) {
                var n = e.alternate;
                return null === n ? (n = new ee(e.tag, e.key, e.internalContextTag), n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.effectTag = co, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.pendingWorkPriority = t, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
            }, createHostRootFiber: function () {
                return new ee(to, null, so)
            }, createFiberFromElement: function (e, t, n) {
                return t = te(e.type, e.key, t), t.pendingProps = e.props, t.pendingWorkPriority = n, t
            }, createFiberFromFragment: function (e, t, n) {
                return t = new ee(lo, null, t), t.pendingProps = e, t.pendingWorkPriority = n, t
            }, createFiberFromText: function (e, t, n) {
                return t = new ee(ro, null, t), t.pendingProps = e, t.pendingWorkPriority = n, t
            }, createFiberFromElementType: te, createFiberFromHostInstanceForDeletion: function () {
                var e = new ee(no, null, so);
                return e.type = "DELETED", e
            }, createFiberFromCoroutine: function (e, t, n) {
                return t = new ee(ao, e.key, t), t.type = e.handler, t.pendingProps = e, t.pendingWorkPriority = n, t
            }, createFiberFromYield: function (e, t) {
                return new ee(io, null, t)
            }, createFiberFromPortal: function (e, t, n) {
                return t = new ee(oo, e.key, t), t.pendingProps = e.children || [], t.pendingWorkPriority = n, t.stateNode = {
                    containerInfo: e.containerInfo,
                    implementation: e.implementation
                }, t
            }, largerPriority: function (e, t) {
                return e !== uo && (t === uo || t > e) ? e : t
            }
        }, po = fo.createHostRootFiber, ho = Ft.IndeterminateComponent, yo = Ft.FunctionalComponent, mo = Ft.ClassComponent,
        bo = Ft.HostComponent;
    "function" == typeof Symbol && Symbol.for ? (Pr = Symbol.for("react.coroutine"), Sr = Symbol.for("react.yield")) : (Pr = 60104, Sr = 60105);
    var go = {
            createCoroutine: function (e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {$$typeof: Pr, key: null == r ? null : "" + r, children: e, handler: t, props: n}
            }, createYield: function (e) {
                return {$$typeof: Sr, value: e}
            }, isCoroutine: function (e) {
                return "object" === (void 0 === e ? "undefined" : yt(e)) && null !== e && e.$$typeof === Pr
            }, isYield: function (e) {
                return "object" === (void 0 === e ? "undefined" : yt(e)) && null !== e && e.$$typeof === Sr
            }, REACT_YIELD_TYPE: Sr, REACT_COROUTINE_TYPE: Pr
        }, vo = "function" == typeof Symbol && Symbol.for && Symbol.for("react.portal") || 60106, Co = {
            createPortal: function (e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {$$typeof: vo, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n}
            }, isPortal: function (e) {
                return "object" === (void 0 === e ? "undefined" : yt(e)) && null !== e && e.$$typeof === vo
            }, REACT_PORTAL_TYPE: vo
        }, wo = go.REACT_COROUTINE_TYPE, Eo = go.REACT_YIELD_TYPE, To = Co.REACT_PORTAL_TYPE, _o = fo.createWorkInProgress,
        Po = fo.createFiberFromElement, So = fo.createFiberFromFragment, Oo = fo.createFiberFromText,
        ko = fo.createFiberFromCoroutine, xo = fo.createFiberFromYield, No = fo.createFiberFromPortal,
        Io = Array.isArray, Mo = Ft.FunctionalComponent, Ro = Ft.ClassComponent, Ao = Ft.HostText, jo = Ft.HostPortal,
        Do = Ft.CoroutineComponent, Fo = Ft.YieldComponent, Lo = Ft.Fragment, Uo = $t.NoEffect, Ho = $t.Placement,
        Bo = $t.Deletion, Wo = "function" == typeof Symbol && Symbol.iterator,
        Vo = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, zo = ae(!0, !0),
        qo = ae(!1, !0), Ko = ae(!1, !1), Yo = {
            reconcileChildFibers: zo,
            reconcileChildFibersInPlace: qo,
            mountChildFibersInPlace: Ko,
            cloneChildFibers: function (e, t) {
                if (null !== e && t.child !== e.child && r("153"), null !== t.child) {
                    e = t.child;
                    var n = _o(e, e.pendingWorkPriority);
                    for (n.pendingProps = e.pendingProps, t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, n = n.sibling = _o(e, e.pendingWorkPriority), n.pendingProps = e.pendingProps, n.return = t;
                    n.sibling = null
                }
            }
        }, Go = $t.Update, Qo = Xr.AsyncUpdates, Zo = $r.cacheContext, $o = $r.getMaskedContext, Xo = $r.getUnmaskedContext,
        Jo = $r.isContextConsumer, ea = Lr.addUpdate, ta = Lr.addReplaceUpdate, na = Lr.addForceUpdate,
        ra = Lr.beginUpdateQueue, oa = $r.hasContextChanged, aa = on.isMounted, ia = Yo.mountChildFibersInPlace,
        la = Yo.reconcileChildFibers, ua = Yo.reconcileChildFibersInPlace, sa = Yo.cloneChildFibers,
        ca = Lr.beginUpdateQueue, da = $r.getMaskedContext, fa = $r.getUnmaskedContext, pa = $r.hasContextChanged,
        ha = $r.pushContextProvider, ya = $r.pushTopLevelContextObject, ma = $r.invalidateContextProvider,
        ba = Ft.IndeterminateComponent, ga = Ft.FunctionalComponent, va = Ft.ClassComponent, Ca = Ft.HostRoot,
        wa = Ft.HostComponent, Ea = Ft.HostText, Ta = Ft.HostPortal, _a = Ft.CoroutineComponent,
        Pa = Ft.CoroutineHandlerPhase, Sa = Ft.YieldComponent, Oa = Ft.Fragment, ka = xr.NoWork,
        xa = xr.OffscreenPriority, Na = $t.PerformedWork, Ia = $t.Placement, Ma = $t.ContentReset, Ra = $t.Err,
        Aa = $t.Ref, ja = Zt.ReactCurrentOwner, Da = Yo.reconcileChildFibers, Fa = $r.popContextProvider,
        La = $r.popTopLevelContextObject, Ua = Ft.IndeterminateComponent, Ha = Ft.FunctionalComponent,
        Ba = Ft.ClassComponent, Wa = Ft.HostRoot, Va = Ft.HostComponent, za = Ft.HostText, qa = Ft.HostPortal,
        Ka = Ft.CoroutineComponent, Ya = Ft.CoroutineHandlerPhase, Ga = Ft.YieldComponent, Qa = Ft.Fragment,
        Za = $t.Placement, $a = $t.Ref, Xa = $t.Update, Ja = xr.OffscreenPriority, ei = null, ti = null, ni = {
            injectInternals: function (e) {
                if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
                var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!t.supportsFiber) return !0;
                try {
                    var n = t.inject(e);
                    ei = se(function (e) {
                        return t.onCommitFiberRoot(n, e)
                    }), ti = se(function (e) {
                        return t.onCommitFiberUnmount(n, e)
                    })
                } catch (e) {
                }
                return !0
            }, onCommitRoot: function (e) {
                "function" == typeof ei && ei(e)
            }, onCommitUnmount: function (e) {
                "function" == typeof ti && ti(e)
            }
        }, ri = Ft.ClassComponent, oi = Ft.HostRoot, ai = Ft.HostComponent, ii = Ft.HostText, li = Ft.HostPortal,
        ui = Ft.CoroutineComponent, si = Lr.commitCallbacks, ci = ni.onCommitUnmount, di = $t.Placement, fi = $t.Update,
        pi = $t.Callback, hi = $t.ContentReset, yi = Br.createCursor, mi = Br.pop, bi = Br.push, gi = {},
        vi = Ft.HostComponent, Ci = Ft.HostText, wi = Ft.HostRoot, Ei = $t.Deletion, Ti = $t.Placement,
        _i = fo.createFiberFromHostInstanceForDeletion, Pi = $r.popContextProvider, Si = Br.reset,
        Oi = Zt.ReactCurrentOwner, ki = fo.createWorkInProgress, xi = fo.largerPriority, Ni = ni.onCommitRoot,
        Ii = xr.NoWork, Mi = xr.SynchronousPriority, Ri = xr.TaskPriority, Ai = xr.HighPriority, ji = xr.LowPriority,
        Di = xr.OffscreenPriority, Fi = Xr.AsyncUpdates, Li = $t.PerformedWork, Ui = $t.Placement, Hi = $t.Update,
        Bi = $t.PlacementAndUpdate, Wi = $t.Deletion, Vi = $t.ContentReset, zi = $t.Callback, qi = $t.Err, Ki = $t.Ref,
        Yi = Ft.HostRoot, Gi = Ft.HostComponent, Qi = Ft.HostPortal, Zi = Ft.ClassComponent, $i = Lr.getUpdatePriority,
        Xi = $r.resetContext;
    ye._injectFiber = function (e) {
        he = e
    };
    var Ji = Lr.addTopLevelUpdate, el = $r.findCurrentUnmaskedContext, tl = $r.isContextProvider,
        nl = $r.processChildContext, rl = Ft.HostComponent, ol = on.findCurrentHostFiber,
        al = on.findCurrentHostFiberWithNoPortals;
    ye._injectFiber(function (e) {
        var t = el(e);
        return tl(e) ? nl(e, t, !1) : t
    });
    var il = Lt.TEXT_NODE, ll = null, ul = {
        getOffsets: function (e) {
            var t = window.getSelection && window.getSelection();
            if (!t || 0 === t.rangeCount) return null;
            var n = t.anchorNode, r = t.anchorOffset, o = t.focusNode, a = t.focusOffset, i = t.getRangeAt(0);
            try {
                i.startContainer.nodeType, i.endContainer.nodeType
            } catch (e) {
                return null
            }
            t = t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset ? 0 : i.toString().length;
            var l = i.cloneRange();
            return l.selectNodeContents(e), l.setEnd(i.startContainer, i.startOffset), e = l.startContainer === l.endContainer && l.startOffset === l.endOffset ? 0 : l.toString().length, i = e + t, t = document.createRange(), t.setStart(n, r), t.setEnd(o, a), n = t.collapsed, {
                start: n ? i : e,
                end: n ? e : i
            }
        }, setOffsets: function (e, t) {
            if (window.getSelection) {
                var n = window.getSelection(), r = e[ge()].length, o = Math.min(t.start, r);
                if (t = void 0 === t.end ? o : Math.min(t.end, r), !n.extend && o > t && (r = t, t = o, o = r), r = be(e, o), e = be(e, t), r && e) {
                    var a = document.createRange();
                    a.setStart(r.node, r.offset), n.removeAllRanges(), o > t ? (n.addRange(a), n.extend(e.node, e.offset)) : (a.setEnd(e.node, e.offset), n.addRange(a))
                }
            }
        }
    }, sl = Lt.ELEMENT_NODE, cl = {
        hasSelectionCapabilities: function (e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && ("input" === t && "text" === e.type || "textarea" === t || "true" === e.contentEditable)
        }, getSelectionInformation: function () {
            var e = Pt();
            return {focusedElem: e, selectionRange: cl.hasSelectionCapabilities(e) ? cl.getSelection(e) : null}
        }, restoreSelection: function (e) {
            var t = Pt(), n = e.focusedElem;
            if (e = e.selectionRange, t !== n && Tt(document.documentElement, n)) {
                for (cl.hasSelectionCapabilities(n) && cl.setSelection(n, e), t = [], e = n; e = e.parentNode;) e.nodeType === sl && t.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
                for (_t(n), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
            }
        }, getSelection: function (e) {
            return ("selectionStart" in e ? {
                start: e.selectionStart,
                end: e.selectionEnd
            } : ul.getOffsets(e)) || {start: 0, end: 0}
        }, setSelection: function (e, t) {
            var n = t.start, r = t.end;
            void 0 === r && (r = n), "selectionStart" in e ? (e.selectionStart = n, e.selectionEnd = Math.min(r, e.value.length)) : ul.setOffsets(e, t)
        }
    }, dl = cl, fl = Lt.ELEMENT_NODE;
    we._injectFiber = function (e) {
        ve = e
    }, we._injectStack = function (e) {
        Ce = e
    };
    var pl = Ft.HostComponent, hl = {
            isAncestor: function (e, t) {
                for (; t;) {
                    if (e === t || e === t.alternate) return !0;
                    t = Ee(t)
                }
                return !1
            }, getLowestCommonAncestor: Te, getParentInstance: function (e) {
                return Ee(e)
            }, traverseTwoPhase: function (e, t, n) {
                for (var r = []; e;) r.push(e), e = Ee(e);
                for (e = r.length; 0 < e--;) t(r[e], "captured", n);
                for (e = 0; e < r.length; e++) t(r[e], "bubbled", n)
            }, traverseEnterLeave: function (e, t, n, r, o) {
                for (var a = e && t ? Te(e, t) : null, i = []; e && e !== a;) i.push(e), e = Ee(e);
                for (e = []; t && t !== a;) e.push(t), t = Ee(t);
                for (t = 0; t < i.length; t++) n(i[t], "bubbled", r);
                for (t = e.length; 0 < t--;) n(e[t], "captured", o)
            }
        }, yl = En.getListener, ml = {
            accumulateTwoPhaseDispatches: function (e) {
                S(e, Pe)
            }, accumulateTwoPhaseDispatchesSkipTarget: function (e) {
                S(e, Se)
            }, accumulateDirectDispatches: function (e) {
                S(e, ke)
            }, accumulateEnterLeaveDispatches: function (e, t, n, r) {
                hl.traverseEnterLeave(n, r, Oe, e, t)
            }
        }, bl = {_root: null, _startText: null, _fallbackText: null}, gl = {
            initialize: function (e) {
                return bl._root = e, bl._startText = gl.getText(), !0
            }, reset: function () {
                bl._root = null, bl._startText = null, bl._fallbackText = null
            }, getData: function () {
                if (bl._fallbackText) return bl._fallbackText;
                var e, t, n = bl._startText, r = n.length, o = gl.getText(), a = o.length;
                for (e = 0; e < r && n[e] === o[e]; e++) ;
                var i = r - e;
                for (t = 1; t <= i && n[r - t] === o[a - t]; t++) ;
                return bl._fallbackText = o.slice(e, 1 < t ? 1 - t : void 0), bl._fallbackText
            }, getText: function () {
                return "value" in bl._root ? bl._root.value : bl._root[ge()]
            }
        }, vl = gl,
        Cl = "dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),
        wl = {
            type: null,
            target: null,
            currentTarget: Ct.thatReturnsNull,
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function (e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: null,
            isTrusted: null
        };
    gt(xe.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Ct.thatReturnsTrue)
        }, stopPropagation: function () {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Ct.thatReturnsTrue)
        }, persist: function () {
            this.isPersistent = Ct.thatReturnsTrue
        }, isPersistent: Ct.thatReturnsFalse, destructor: function () {
            var e, t = this.constructor.Interface;
            for (e in t) this[e] = null;
            for (t = 0; t < Cl.length; t++) this[Cl[t]] = null
        }
    }), xe.Interface = wl, xe.augmentClass = function (e, t) {
        function n() {
        }

        n.prototype = this.prototype;
        var r = new n;
        gt(r, e.prototype), e.prototype = r, e.prototype.constructor = e, e.Interface = gt({}, this.Interface, t), e.augmentClass = this.augmentClass, Me(e)
    }, Me(xe), xe.augmentClass(Re, {data: null}), xe.augmentClass(Ae, {data: null});
    var El = [9, 13, 27, 32], Tl = bt.canUseDOM && "CompositionEvent" in window, _l = null;
    bt.canUseDOM && "documentMode" in document && (_l = document.documentMode);
    var Pl;
    if (Pl = bt.canUseDOM && "TextEvent" in window && !_l) {
        var Sl = window.opera;
        Pl = !("object" === (void 0 === Sl ? "undefined" : yt(Sl)) && "function" == typeof Sl.version && 12 >= parseInt(Sl.version(), 10))
    }
    var Ol = Pl, kl = bt.canUseDOM && (!Tl || _l && 8 < _l && 11 >= _l), xl = String.fromCharCode(32), Nl = {
        beforeInput: {
            phasedRegistrationNames: {bubbled: "onBeforeInput", captured: "onBeforeInputCapture"},
            dependencies: ["topCompositionEnd", "topKeyPress", "topTextInput", "topPaste"]
        },
        compositionEnd: {
            phasedRegistrationNames: {bubbled: "onCompositionEnd", captured: "onCompositionEndCapture"},
            dependencies: "topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")
        },
        compositionStart: {
            phasedRegistrationNames: {
                bubbled: "onCompositionStart",
                captured: "onCompositionStartCapture"
            }, dependencies: "topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")
        },
        compositionUpdate: {
            phasedRegistrationNames: {
                bubbled: "onCompositionUpdate",
                captured: "onCompositionUpdateCapture"
            }, dependencies: "topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")
        }
    }, Il = !1, Ml = !1, Rl = {
        eventTypes: Nl, extractEvents: function (e, t, n, r) {
            var o;
            if (Tl) e:{
                switch (e) {
                    case"topCompositionStart":
                        var a = Nl.compositionStart;
                        break e;
                    case"topCompositionEnd":
                        a = Nl.compositionEnd;
                        break e;
                    case"topCompositionUpdate":
                        a = Nl.compositionUpdate;
                        break e
                }
                a = void 0
            } else Ml ? je(e, n) && (a = Nl.compositionEnd) : "topKeyDown" === e && 229 === n.keyCode && (a = Nl.compositionStart);
            return a ? (kl && (Ml || a !== Nl.compositionStart ? a === Nl.compositionEnd && Ml && (o = vl.getData()) : Ml = vl.initialize(r)), a = Re.getPooled(a, t, n, r), o ? a.data = o : null !== (o = De(n)) && (a.data = o), ml.accumulateTwoPhaseDispatches(a), o = a) : o = null, (e = Ol ? Fe(e, n) : Le(e, n)) ? (t = Ae.getPooled(Nl.beforeInput, t, n, r), t.data = e, ml.accumulateTwoPhaseDispatches(t)) : t = null, [o, t]
        }
    }, Al = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    }, jl = {
        change: {
            phasedRegistrationNames: {bubbled: "onChange", captured: "onChangeCapture"},
            dependencies: "topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange".split(" ")
        }
    }, Dl = null, Fl = null, Ll = !1;
    bt.canUseDOM && (Ll = I("input") && (!document.documentMode || 9 < document.documentMode));
    var Ul = {
        eventTypes: jl, _isInputEventSupported: Ll, extractEvents: function (e, t, n, r) {
            var o = t ? Gt.getNodeFromInstance(t) : window, a = o.nodeName && o.nodeName.toLowerCase();
            if ("select" === a || "input" === a && "file" === o.type) var i = Ve; else if (Ue(o)) if (Ll) i = Qe; else {
                i = Ye;
                var l = Ke
            } else !(a = o.nodeName) || "input" !== a.toLowerCase() || "checkbox" !== o.type && "radio" !== o.type || (i = Ge);
            if (i && (i = i(e, t))) return He(i, n, r);
            l && l(e, o, t), "topBlur" === e && null != t && (e = t._wrapperState || o._wrapperState) && e.controlled && "number" === o.type && (e = "" + o.value, o.getAttribute("value") !== e && o.setAttribute("value", e))
        }
    };
    xe.augmentClass(Ze, {
        view: function (e) {
            return e.view ? e.view : (e = T(e), e.window === e ? e : (e = e.ownerDocument) ? e.defaultView || e.parentWindow : window)
        }, detail: function (e) {
            return e.detail || 0
        }
    });
    var Hl = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};
    Ze.augmentClass(Je, {
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: Xe,
        button: null,
        buttons: null,
        relatedTarget: function (e) {
            return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
        }
    });
    var Bl = {
        mouseEnter: {registrationName: "onMouseEnter", dependencies: ["topMouseOut", "topMouseOver"]},
        mouseLeave: {registrationName: "onMouseLeave", dependencies: ["topMouseOut", "topMouseOver"]}
    }, Wl = {
        eventTypes: Bl, extractEvents: function (e, t, n, r) {
            if ("topMouseOver" === e && (n.relatedTarget || n.fromElement) || "topMouseOut" !== e && "topMouseOver" !== e) return null;
            var o = r.window === r ? r : (o = r.ownerDocument) ? o.defaultView || o.parentWindow : window;
            if ("topMouseOut" === e ? (e = t, t = (t = n.relatedTarget || n.toElement) ? Gt.getClosestInstanceFromNode(t) : null) : e = null, e === t) return null;
            var a = null == e ? o : Gt.getNodeFromInstance(e);
            o = null == t ? o : Gt.getNodeFromInstance(t);
            var i = Je.getPooled(Bl.mouseLeave, e, n, r);
            return i.type = "mouseleave", i.target = a, i.relatedTarget = o, n = Je.getPooled(Bl.mouseEnter, t, n, r), n.type = "mouseenter", n.target = o, n.relatedTarget = a, ml.accumulateEnterLeaveDispatches(i, n, e, t), [i, n]
        }
    }, Vl = Lt.DOCUMENT_NODE, zl = bt.canUseDOM && "documentMode" in document && 11 >= document.documentMode, ql = {
        select: {
            phasedRegistrationNames: {bubbled: "onSelect", captured: "onSelectCapture"},
            dependencies: "topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange".split(" ")
        }
    }, Kl = null, Yl = null, Gl = null, Ql = !1, Zl = Nn.isListeningToAllDependencies, $l = {
        eventTypes: ql, extractEvents: function (e, t, n, r) {
            var o = r.window === r ? r.document : r.nodeType === Vl ? r : r.ownerDocument;
            if (!o || !Zl("onSelect", o)) return null;
            switch (o = t ? Gt.getNodeFromInstance(t) : window, e) {
                case"topFocus":
                    (Ue(o) || "true" === o.contentEditable) && (Kl = o, Yl = t, Gl = null);
                    break;
                case"topBlur":
                    Gl = Yl = Kl = null;
                    break;
                case"topMouseDown":
                    Ql = !0;
                    break;
                case"topContextMenu":
                case"topMouseUp":
                    return Ql = !1, et(n, r);
                case"topSelectionChange":
                    if (zl) break;
                case"topKeyDown":
                case"topKeyUp":
                    return et(n, r)
            }
            return null
        }
    };
    xe.augmentClass(tt, {
        animationName: null,
        elapsedTime: null,
        pseudoElement: null
    }), xe.augmentClass(nt, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), Ze.augmentClass(rt, {relatedTarget: null});
    var Xl = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Jl = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    };
    Ze.augmentClass(at, {
        key: function (e) {
            if (e.key) {
                var t = Xl[e.key] || e.key;
                if ("Unidentified" !== t) return t
            }
            return "keypress" === e.type ? (e = ot(e), 13 === e ? "Enter" : String.fromCharCode(e)) : "keydown" === e.type || "keyup" === e.type ? Jl[e.keyCode] || "Unidentified" : ""
        },
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: Xe,
        charCode: function (e) {
            return "keypress" === e.type ? ot(e) : 0
        },
        keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        },
        which: function (e) {
            return "keypress" === e.type ? ot(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        }
    }), Je.augmentClass(it, {dataTransfer: null}), Ze.augmentClass(lt, {
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: Xe
    }), xe.augmentClass(ut, {
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null
    }), Je.augmentClass(st, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        }, deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        }, deltaZ: null, deltaMode: null
    });
    var eu = {}, tu = {};
    "abort animationEnd animationIteration animationStart blur cancel canPlay canPlayThrough click close contextMenu copy cut doubleClick drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error focus input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing progress rateChange reset scroll seeked seeking stalled submit suspend timeUpdate toggle touchCancel touchEnd touchMove touchStart transitionEnd volumeChange waiting wheel".split(" ").forEach(function (e) {
        var t = e[0].toUpperCase() + e.slice(1), n = "on" + t;
        t = "top" + t, n = {
            phasedRegistrationNames: {bubbled: n, captured: n + "Capture"},
            dependencies: [t]
        }, eu[e] = n, tu[t] = n
    });
    var nu = {
        eventTypes: eu, extractEvents: function (e, t, n, o) {
            var a = tu[e];
            if (!a) return null;
            switch (e) {
                case"topAbort":
                case"topCancel":
                case"topCanPlay":
                case"topCanPlayThrough":
                case"topClose":
                case"topDurationChange":
                case"topEmptied":
                case"topEncrypted":
                case"topEnded":
                case"topError":
                case"topInput":
                case"topInvalid":
                case"topLoad":
                case"topLoadedData":
                case"topLoadedMetadata":
                case"topLoadStart":
                case"topPause":
                case"topPlay":
                case"topPlaying":
                case"topProgress":
                case"topRateChange":
                case"topReset":
                case"topSeeked":
                case"topSeeking":
                case"topStalled":
                case"topSubmit":
                case"topSuspend":
                case"topTimeUpdate":
                case"topToggle":
                case"topVolumeChange":
                case"topWaiting":
                    var i = xe;
                    break;
                case"topKeyPress":
                    if (0 === ot(n)) return null;
                case"topKeyDown":
                case"topKeyUp":
                    i = at;
                    break;
                case"topBlur":
                case"topFocus":
                    i = rt;
                    break;
                case"topClick":
                    if (2 === n.button) return null;
                case"topDoubleClick":
                case"topMouseDown":
                case"topMouseMove":
                case"topMouseUp":
                case"topMouseOut":
                case"topMouseOver":
                case"topContextMenu":
                    i = Je;
                    break;
                case"topDrag":
                case"topDragEnd":
                case"topDragEnter":
                case"topDragExit":
                case"topDragLeave":
                case"topDragOver":
                case"topDragStart":
                case"topDrop":
                    i = it;
                    break;
                case"topTouchCancel":
                case"topTouchEnd":
                case"topTouchMove":
                case"topTouchStart":
                    i = lt;
                    break;
                case"topAnimationEnd":
                case"topAnimationIteration":
                case"topAnimationStart":
                    i = tt;
                    break;
                case"topTransitionEnd":
                    i = ut;
                    break;
                case"topScroll":
                    i = Ze;
                    break;
                case"topWheel":
                    i = st;
                    break;
                case"topCopy":
                case"topCut":
                case"topPaste":
                    i = nt
            }
            return i || r("86", e), e = i.getPooled(a, t, n, o), ml.accumulateTwoPhaseDispatches(e), e
        }
    };
    Cn.setHandleTopLevel(Nn.handleTopLevel), En.injection.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), sn.injection.injectComponentTree(Gt), En.injection.injectEventPluginsByName({
        SimpleEventPlugin: nu,
        EnterLeaveEventPlugin: Wl,
        ChangeEventPlugin: Ul,
        SelectEventPlugin: $l,
        BeforeInputEventPlugin: Rl
    });
    var ru = Dt.injection.MUST_USE_PROPERTY, ou = Dt.injection.HAS_BOOLEAN_VALUE, au = Dt.injection.HAS_NUMERIC_VALUE,
        iu = Dt.injection.HAS_POSITIVE_NUMERIC_VALUE, lu = Dt.injection.HAS_STRING_BOOLEAN_VALUE, uu = {
            Properties: {
                allowFullScreen: ou,
                allowTransparency: lu,
                async: ou,
                autoPlay: ou,
                capture: ou,
                checked: ru | ou,
                cols: iu,
                contentEditable: lu,
                controls: ou,
                default: ou,
                defer: ou,
                disabled: ou,
                download: Dt.injection.HAS_OVERLOADED_BOOLEAN_VALUE,
                draggable: lu,
                formNoValidate: ou,
                hidden: ou,
                loop: ou,
                multiple: ru | ou,
                muted: ru | ou,
                noValidate: ou,
                open: ou,
                playsInline: ou,
                readOnly: ou,
                required: ou,
                reversed: ou,
                rows: iu,
                rowSpan: au,
                scoped: ou,
                seamless: ou,
                selected: ru | ou,
                size: iu,
                start: au,
                span: iu,
                spellCheck: lu,
                style: 0,
                itemScope: ou,
                acceptCharset: 0,
                className: 0,
                htmlFor: 0,
                httpEquiv: 0,
                value: lu
            },
            DOMAttributeNames: {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv"
            },
            DOMMutationMethods: {
                value: function (e, t) {
                    if (null == t) return e.removeAttribute("value");
                    "number" !== e.type || !1 === e.hasAttribute("value") ? e.setAttribute("value", "" + t) : e.validity && !e.validity.badInput && e.ownerDocument.activeElement !== e && e.setAttribute("value", "" + t)
                }
            }
        }, su = Dt.injection.HAS_STRING_BOOLEAN_VALUE,
        cu = {xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace"}, du = {
            Properties: {autoReverse: su, externalResourcesRequired: su, preserveAlpha: su},
            DOMAttributeNames: {
                autoReverse: "autoReverse",
                externalResourcesRequired: "externalResourcesRequired",
                preserveAlpha: "preserveAlpha"
            },
            DOMAttributeNamespaces: {
                xlinkActuate: cu.xlink,
                xlinkArcrole: cu.xlink,
                xlinkHref: cu.xlink,
                xlinkRole: cu.xlink,
                xlinkShow: cu.xlink,
                xlinkTitle: cu.xlink,
                xlinkType: cu.xlink,
                xmlBase: cu.xml,
                xmlLang: cu.xml,
                xmlSpace: cu.xml
            }
        }, fu = /[\-\:]([a-z])/g;
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function (e) {
        var t = e.replace(fu, ct);
        du.Properties[t] = 0, du.DOMAttributeNames[t] = e
    }), Dt.injection.injectDOMPropertyConfig(uu), Dt.injection.injectDOMPropertyConfig(du);
    var pu = ni.injectInternals, hu = Lt.ELEMENT_NODE, yu = Lt.TEXT_NODE, mu = Lt.COMMENT_NODE, bu = Lt.DOCUMENT_NODE,
        gu = Lt.DOCUMENT_FRAGMENT_NODE, vu = Dt.ROOT_ATTRIBUTE_NAME, Cu = kt.getChildNamespace, wu = pr.createElement,
        Eu = pr.createTextNode, Tu = pr.setInitialProperties, _u = pr.diffProperties, Pu = pr.updateProperties,
        Su = pr.diffHydratedProperties, Ou = pr.diffHydratedText, ku = pr.warnForDeletedHydratableElement,
        xu = pr.warnForDeletedHydratableText, Nu = pr.warnForInsertedHydratedElement,
        Iu = pr.warnForInsertedHydratedText, Mu = Gt.precacheFiberNode, Ru = Gt.updateFiberProps;
    pn.injection.injectFiberControlledHostComponent(pr), we._injectFiber(function (e) {
        return Du.findHostInstance(e)
    });
    var Au = null, ju = null, Du = function (e) {
        var t = e.getPublicInstance;
        e = pe(e);
        var n = e.scheduleUpdate, r = e.getPriorityContext;
        return {
            createContainer: function (e) {
                var t = po();
                return e = {
                    current: t,
                    containerInfo: e,
                    isScheduled: !1,
                    nextScheduledRoot: null,
                    context: null,
                    pendingContext: null
                }, t.stateNode = e
            },
            updateContainer: function (e, t, o, a) {
                var i = t.current;
                o = ye(o), null === t.context ? t.context = o : t.pendingContext = o, t = a, a = r(i, kr.enableAsyncSubtreeAPI && null != e && null != e.type && null != e.type.prototype && !0 === e.type.prototype.unstable_isAsyncReactComponent), e = {element: e}, Ji(i, e, void 0 === t ? null : t, a), n(i, a)
            },
            batchedUpdates: e.batchedUpdates,
            unbatchedUpdates: e.unbatchedUpdates,
            deferredUpdates: e.deferredUpdates,
            flushSync: e.flushSync,
            getPublicRootInstance: function (e) {
                if (e = e.current, !e.child) return null;
                switch (e.child.tag) {
                    case rl:
                        return t(e.child.stateNode);
                    default:
                        return e.child.stateNode
                }
            },
            findHostInstance: function (e) {
                return e = ol(e), null === e ? null : e.stateNode
            },
            findHostInstanceWithNoPortals: function (e) {
                return e = al(e), null === e ? null : e.stateNode
            }
        }
    }({
        getRootHostContext: function (e) {
            if (e.nodeType === bu) e = (e = e.documentElement) ? e.namespaceURI : Cu(null, ""); else {
                var t = e.nodeType === mu ? e.parentNode : e;
                e = t.namespaceURI || null, t = t.tagName, e = Cu(e, t)
            }
            return e
        }, getChildHostContext: function (e, t) {
            return Cu(e, t)
        }, getPublicInstance: function (e) {
            return e
        }, prepareForCommit: function () {
            Au = Nn.isEnabled(), ju = dl.getSelectionInformation(), Nn.setEnabled(!1)
        }, resetAfterCommit: function () {
            dl.restoreSelection(ju), ju = null, Nn.setEnabled(Au), Au = null
        }, createInstance: function (e, t, n, r, o) {
            return e = wu(e, t, n, r), Mu(o, e), Ru(e, t), e
        }, appendInitialChild: function (e, t) {
            e.appendChild(t)
        }, finalizeInitialChildren: function (e, t, n, r) {
            Tu(e, t, n, r);
            e:{
                switch (t) {
                    case"button":
                    case"input":
                    case"select":
                    case"textarea":
                        e = !!n.autoFocus;
                        break e
                }
                e = !1
            }
            return e
        }, prepareUpdate: function (e, t, n, r, o) {
            return _u(e, t, n, r, o)
        }, commitMount: function (e) {
            e.focus()
        }, commitUpdate: function (e, t, n, r, o) {
            Ru(e, o), Pu(e, t, n, r, o)
        }, shouldSetTextContent: function (e, t) {
            return "textarea" === e || "string" == typeof t.children || "number" == typeof t.children || "object" === yt(t.dangerouslySetInnerHTML) && null !== t.dangerouslySetInnerHTML && "string" == typeof t.dangerouslySetInnerHTML.__html
        }, resetTextContent: function (e) {
            e.textContent = ""
        }, shouldDeprioritizeSubtree: function (e, t) {
            return !!t.hidden
        }, createTextInstance: function (e, t, n, r) {
            return e = Eu(e, t), Mu(r, e), e
        }, commitTextUpdate: function (e, t, n) {
            e.nodeValue = n
        }, appendChild: function (e, t) {
            e.appendChild(t)
        }, appendChildToContainer: function (e, t) {
            e.nodeType === mu ? e.parentNode.insertBefore(t, e) : e.appendChild(t)
        }, insertBefore: function (e, t, n) {
            e.insertBefore(t, n)
        }, insertInContainerBefore: function (e, t, n) {
            e.nodeType === mu ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n)
        }, removeChild: function (e, t) {
            e.removeChild(t)
        }, removeChildFromContainer: function (e, t) {
            e.nodeType === mu ? e.parentNode.removeChild(t) : e.removeChild(t)
        }, canHydrateInstance: function (e, t) {
            return e.nodeType === hu && t === e.nodeName.toLowerCase()
        }, canHydrateTextInstance: function (e, t) {
            return "" !== t && e.nodeType === yu
        }, getNextHydratableSibling: function (e) {
            for (e = e.nextSibling; e && e.nodeType !== hu && e.nodeType !== yu;) e = e.nextSibling;
            return e
        }, getFirstHydratableChild: function (e) {
            for (e = e.firstChild; e && e.nodeType !== hu && e.nodeType !== yu;) e = e.nextSibling;
            return e
        }, hydrateInstance: function (e, t, n, r, o, a) {
            return Mu(a, e), Ru(e, n), Su(e, t, n, o, r)
        }, hydrateTextInstance: function (e, t, n) {
            return Mu(n, e), Ou(e, t)
        }, didNotHydrateInstance: function (e, t) {
            1 === t.nodeType ? ku(e, t) : xu(e, t)
        }, didNotFindHydratableInstance: function (e, t, n) {
            Nu(e, t, n)
        }, didNotFindHydratableTextInstance: function (e, t) {
            Iu(e, t)
        }, scheduleDeferredCallback: Or.rIC, useSyncScheduling: !0
    });
    yn.injection.injectFiberBatchedUpdates(Du.batchedUpdates);
    var Fu = {
        createPortal: ht,
        hydrate: function (e, t, n) {
            return pt(null, e, t, !0, n)
        },
        render: function (e, t, n) {
            return pt(null, e, t, !1, n)
        },
        unstable_renderSubtreeIntoContainer: function (e, t, n, o) {
            return null != e && Qt.has(e) || r("38"), pt(e, t, n, !1, o)
        },
        unmountComponentAtNode: function (e) {
            return dt(e) || r("40"), !!e._reactRootContainer && (Du.unbatchedUpdates(function () {
                pt(null, null, e, !1, function () {
                    e._reactRootContainer = null
                })
            }), !0)
        },
        findDOMNode: we,
        unstable_createPortal: ht,
        unstable_batchedUpdates: yn.batchedUpdates,
        unstable_deferredUpdates: Du.deferredUpdates,
        flushSync: Du.flushSync,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            EventPluginHub: En,
            EventPluginRegistry: Mt,
            EventPropagators: ml,
            ReactControlledComponent: pn,
            ReactDOMComponentTree: Gt,
            ReactDOMEventListener: Cn
        }
    };
    pu({
        findFiberByHostInstance: Gt.getClosestInstanceFromNode,
        findHostInstanceByFiber: Du.findHostInstance,
        bundleType: 0,
        version: "16.0.0",
        rendererPackageName: "react-dom"
    }), e.exports = Fu
}, function (e, t, n) {
    "use strict";
    var r = !("undefined" == typeof window || !window.document || !window.document.createElement), o = {
        canUseDOM: r,
        canUseWorkers: "undefined" != typeof Worker,
        canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent),
        canUseViewport: r && !!window.screen,
        isInWorker: !r
    };
    e.exports = o
}, function (e, t, n) {
    "use strict";
    var r = n(4), o = {
        listen: function (e, t, n) {
            return e.addEventListener ? (e.addEventListener(t, n, !1), {
                remove: function () {
                    e.removeEventListener(t, n, !1)
                }
            }) : e.attachEvent ? (e.attachEvent("on" + t, n), {
                remove: function () {
                    e.detachEvent("on" + t, n)
                }
            }) : void 0
        }, capture: function (e, t, n) {
            return e.addEventListener ? (e.addEventListener(t, n, !0), {
                remove: function () {
                    e.removeEventListener(t, n, !0)
                }
            }) : {remove: r}
        }, registerDefault: function () {
        }
    };
    e.exports = o
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e !== e && t !== t
    }

    function o(e, t) {
        if (r(e, t)) return !0;
        if ("object" !== (void 0 === e ? "undefined" : a(e)) || null === e || "object" !== (void 0 === t ? "undefined" : a(t)) || null === t) return !1;
        var n = Object.keys(e), o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (var l = 0; l < n.length; l++) if (!i.call(t, n[l]) || !r(e[n[l]], t[n[l]])) return !1;
        return !0
    }

    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, i = Object.prototype.hasOwnProperty;
    e.exports = o
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        return !(!e || !t) && (e === t || !o(e) && (o(t) ? r(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
    }

    var o = n(30);
    e.exports = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return o(e) && 3 == e.nodeType
    }

    var o = n(31);
    e.exports = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = e ? e.ownerDocument || e : document, n = t.defaultView || window;
        return !(!e || !("function" == typeof n.Node ? e instanceof n.Node : "object" === (void 0 === e ? "undefined" : o(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName))
    }

    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    e.exports = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        try {
            e.focus()
        } catch (e) {
        }
    }

    e.exports = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }

    e.exports = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, u = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), s = n(0), c = r(s), d = n(1), f = r(d), p = n(2), h = r(p), y = n(6), m = r(y), b = n(41), g = r(b), v = n(43),
        C = r(v), w = n(45), E = r(w), T = n(80), _ = r(T), P = n(3), S = r(P);
    n(84);
    var O = function (e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.handleUse = function (e) {
                n.setState({expanded: !1, title: e.title || e.machineName, infoMessage: null}), n.props.onUse(e)
            }, n.handleUpload = function (e) {
                var t = e.h5p.mainLibrary;
                e.contentTypes.libraries.forEach(function (n) {
                    n.machineName === e.h5p.mainLibrary && (t = n.title)
                }), n.setState({
                    expanded: !1,
                    title: t,
                    contentTypes: e.contentTypes,
                    infoMessage: {
                        title: h.default.get("uploadSuccess").replace(":title", t),
                        message: e.contentTypes.details
                    }
                }), n.props.onUpload(e)
            }, n.handleUpdate = function (e) {
                n.props.onUpdate(e), n.setState({contentTypes: e})
            }, n.handleReload = function () {
                (0, m.default)(n.props.getAjaxUrl("content-type-cache")).then(function (e) {
                    return n.handleUpdate(e)
                }).catch(function (e) {
                    return n.setState({error: e})
                })
            }, n.handleInfoDismiss = function () {
                n.setState({infoMessage: null})
            }, n.handleTabPanelSelect = function (e) {
                n.setState({section: e})
            }, n.handleRender = function (e, t) {
                n.props.onRender(e, t)
            }, n.state = {
                expanded: e.expanded,
                section: "content-types",
                selected: e.selected,
                title: e.title,
                contentTypes: e.contentTypes
            }, n
        }

        return i(t, e), u(t, [{
            key: "componentWillReceiveProps", value: function (e) {
                e.title !== this.state.title && (this.state.title = e.title), e.expanded !== this.state.expanded && (this.state.expanded = e.expanded)
            }
        }, {
            key: "componentDidUpdate", value: function () {
                this.props.onResize()
            }
        }, {
            key: "render", value: function () {
                var e = this;
                return this.handleRender(this.state.title, this.state.expanded), c.default.createElement("section", {className: "h5p-hub"}, c.default.createElement("div", {className: "panel h5p-section-" + this.state.section + (this.state.expanded ? " open" : "")}, c.default.createElement(g.default, {
                    title: this.state.title || h.default.get("hubPanelLabel"),
                    sectionId: this.state.section,
                    isExpanded: this.state.expanded,
                    togglePanel: function () {
                        return e.setState({expanded: !e.state.expanded})
                    }
                }), c.default.createElement("div", {
                    id: "panel-body-" + this.state.section,
                    role: "region",
                    className: this.state.expanded ? "" : "hidden"
                }, c.default.createElement(C.default, {
                    selected: this.state.section,
                    onSelect: this.handleTabPanelSelect,
                    canPaste: this.props.canPaste,
                    onPaste: this.props.onPaste
                }, c.default.createElement(E.default, {
                    id: "content-types",
                    title: h.default.get("createContentTabLabel"),
                    contentTypes: this.state.contentTypes,
                    setFocus: this.state.expanded && "content-types" === this.state.section,
                    getAjaxUrl: this.props.getAjaxUrl,
                    error: this.state.error,
                    onUse: this.handleUse,
                    onInstall: this.handleUpdate,
                    onReload: this.handleReload
                }), c.default.createElement(_.default, {
                    id: "upload",
                    title: h.default.get("uploadTabLabel"),
                    getAjaxUrl: this.props.getAjaxUrl,
                    contentId: this.props.contentId,
                    setFocus: this.state.expanded && "upload" === this.state.section,
                    onUpload: this.handleUpload
                })))), !!this.state.infoMessage && c.default.createElement(S.default, l({}, this.state.infoMessage, {
                    severity: "info",
                    onClose: this.handleInfoDismiss
                })))
            }
        }]), t
    }(c.default.Component);
    O.propTypes = {
        title: f.default.string,
        contentId: f.default.number,
        contentTypes: f.default.object.isRequired,
        selected: f.default.string,
        getAjaxUrl: f.default.func.isRequired,
        onResize: f.default.func.isRequired,
        onUse: f.default.func.isRequired,
        onUpload: f.default.func.isRequired
    }, t.default = O
}, function (e, t, n) {
    "use strict";
    var r = n(4), o = n(5), a = n(36);
    e.exports = function () {
        function e(e, t, n, r, i, l) {
            l !== a && o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
        }

        function t() {
            return e
        }

        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t
        };
        return n.checkPropTypes = r, n.PropTypes = n, n
    }
}, function (e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function (e, t, n) {
    "use strict";
    (function (r, o) {
        var a, i, l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */
        !function (r, o) {
            "object" === l(t) && void 0 !== e ? e.exports = o() : (a = o, void 0 !== (i = "function" == typeof a ? a.call(t, n, t, e) : a) && (e.exports = i))
        }(0, function () {
            function e(e) {
                var t = void 0 === e ? "undefined" : l(e);
                return null !== e && ("object" === t || "function" === t)
            }

            function t(e) {
                return "function" == typeof e
            }

            function a(e) {
                K = e
            }

            function i(e) {
                Y = e
            }

            function u() {
                return void 0 !== q ? function () {
                    q(c)
                } : s()
            }

            function s() {
                var e = setTimeout;
                return function () {
                    return e(c, 1)
                }
            }

            function c() {
                for (var e = 0; e < z; e += 2) {
                    (0, J[e])(J[e + 1]), J[e] = void 0, J[e + 1] = void 0
                }
                z = 0
            }

            function d(e, t) {
                var n = arguments, r = this, o = new this.constructor(p);
                void 0 === o[te] && M(o);
                var a = r._state;
                return a ? function () {
                    var e = n[a - 1];
                    Y(function () {
                        return x(a, o, e, r._result)
                    })
                }() : P(r, o, e, t), o
            }

            function f(e) {
                var t = this;
                if (e && "object" === (void 0 === e ? "undefined" : l(e)) && e.constructor === t) return e;
                var n = new t(p);
                return w(n, e), n
            }

            function p() {
            }

            function h() {
                return new TypeError("You cannot resolve a promise with itself")
            }

            function y() {
                return new TypeError("A promises callback cannot return that same promise.")
            }

            function m(e) {
                try {
                    return e.then
                } catch (e) {
                    return ae.error = e, ae
                }
            }

            function b(e, t, n, r) {
                try {
                    e.call(t, n, r)
                } catch (e) {
                    return e
                }
            }

            function g(e, t, n) {
                Y(function (e) {
                    var r = !1, o = b(n, t, function (n) {
                        r || (r = !0, t !== n ? w(e, n) : T(e, n))
                    }, function (t) {
                        r || (r = !0, _(e, t))
                    }, "Settle: " + (e._label || " unknown promise"));
                    !r && o && (r = !0, _(e, o))
                }, e)
            }

            function v(e, t) {
                t._state === re ? T(e, t._result) : t._state === oe ? _(e, t._result) : P(t, void 0, function (t) {
                    return w(e, t)
                }, function (t) {
                    return _(e, t)
                })
            }

            function C(e, n, r) {
                n.constructor === e.constructor && r === d && n.constructor.resolve === f ? v(e, n) : r === ae ? (_(e, ae.error), ae.error = null) : void 0 === r ? T(e, n) : t(r) ? g(e, n, r) : T(e, n)
            }

            function w(t, n) {
                t === n ? _(t, h()) : e(n) ? C(t, n, m(n)) : T(t, n)
            }

            function E(e) {
                e._onerror && e._onerror(e._result), S(e)
            }

            function T(e, t) {
                e._state === ne && (e._result = t, e._state = re, 0 !== e._subscribers.length && Y(S, e))
            }

            function _(e, t) {
                e._state === ne && (e._state = oe, e._result = t, Y(E, e))
            }

            function P(e, t, n, r) {
                var o = e._subscribers, a = o.length;
                e._onerror = null, o[a] = t, o[a + re] = n, o[a + oe] = r, 0 === a && e._state && Y(S, e)
            }

            function S(e) {
                var t = e._subscribers, n = e._state;
                if (0 !== t.length) {
                    for (var r = void 0, o = void 0, a = e._result, i = 0; i < t.length; i += 3) r = t[i], o = t[i + n], r ? x(n, r, o, a) : o(a);
                    e._subscribers.length = 0
                }
            }

            function O() {
                this.error = null
            }

            function k(e, t) {
                try {
                    return e(t)
                } catch (e) {
                    return ie.error = e, ie
                }
            }

            function x(e, n, r, o) {
                var a = t(r), i = void 0, l = void 0, u = void 0, s = void 0;
                if (a) {
                    if (i = k(r, o), i === ie ? (s = !0, l = i.error, i.error = null) : u = !0, n === i) return void _(n, y())
                } else i = o, u = !0;
                n._state !== ne || (a && u ? w(n, i) : s ? _(n, l) : e === re ? T(n, i) : e === oe && _(n, i))
            }

            function N(e, t) {
                try {
                    t(function (t) {
                        w(e, t)
                    }, function (t) {
                        _(e, t)
                    })
                } catch (t) {
                    _(e, t)
                }
            }

            function I() {
                return le++
            }

            function M(e) {
                e[te] = le++, e._state = void 0, e._result = void 0, e._subscribers = []
            }

            function R(e, t) {
                this._instanceConstructor = e, this.promise = new e(p), this.promise[te] || M(this.promise), V(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? T(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && T(this.promise, this._result))) : _(this.promise, A())
            }

            function A() {
                return new Error("Array Methods must be provided an Array")
            }

            function j(e) {
                return new R(this, e).promise
            }

            function D(e) {
                var t = this;
                return new t(V(e) ? function (n, r) {
                    for (var o = e.length, a = 0; a < o; a++) t.resolve(e[a]).then(n, r)
                } : function (e, t) {
                    return t(new TypeError("You must pass an array to race."))
                })
            }

            function F(e) {
                var t = this, n = new t(p);
                return _(n, e), n
            }

            function L() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }

            function U() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }

            function H(e) {
                this[te] = I(), this._result = this._state = void 0, this._subscribers = [], p !== e && ("function" != typeof e && L(), this instanceof H ? N(this, e) : U())
            }

            function B() {
                var e = void 0;
                if (void 0 !== o) e = o; else if ("undefined" != typeof self) e = self; else try {
                    e = Function("return this")()
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                if (t) {
                    var n = null;
                    try {
                        n = Object.prototype.toString.call(t.resolve())
                    } catch (e) {
                    }
                    if ("[object Promise]" === n && !t.cast) return
                }
                e.Promise = H
            }

            var W = void 0;
            W = Array.isArray ? Array.isArray : function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
            var V = W, z = 0, q = void 0, K = void 0, Y = function (e, t) {
                    J[z] = e, J[z + 1] = t, 2 === (z += 2) && (K ? K(c) : ee())
                }, G = "undefined" != typeof window ? window : void 0, Q = G || {},
                Z = Q.MutationObserver || Q.WebKitMutationObserver,
                $ = "undefined" == typeof self && void 0 !== r && "[object process]" === {}.toString.call(r),
                X = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                J = new Array(1e3), ee = void 0;
            ee = $ ? function () {
                return function () {
                    return r.nextTick(c)
                }
            }() : Z ? function () {
                var e = 0, t = new Z(c), n = document.createTextNode("");
                return t.observe(n, {characterData: !0}), function () {
                    n.data = e = ++e % 2
                }
            }() : X ? function () {
                var e = new MessageChannel;
                return e.port1.onmessage = c, function () {
                    return e.port2.postMessage(0)
                }
            }() : void 0 === G ? function () {
                try {
                    var e = n(40);
                    return q = e.runOnLoop || e.runOnContext, u()
                } catch (e) {
                    return s()
                }
            }() : s();
            var te = Math.random().toString(36).substring(16), ne = void 0, re = 1, oe = 2, ae = new O, ie = new O,
                le = 0;
            return R.prototype._enumerate = function (e) {
                for (var t = 0; this._state === ne && t < e.length; t++) this._eachEntry(e[t], t)
            }, R.prototype._eachEntry = function (e, t) {
                var n = this._instanceConstructor, r = n.resolve;
                if (r === f) {
                    var o = m(e);
                    if (o === d && e._state !== ne) this._settledAt(e._state, t, e._result); else if ("function" != typeof o) this._remaining--, this._result[t] = e; else if (n === H) {
                        var a = new n(p);
                        C(a, e, o), this._willSettleAt(a, t)
                    } else this._willSettleAt(new n(function (t) {
                        return t(e)
                    }), t)
                } else this._willSettleAt(r(e), t)
            }, R.prototype._settledAt = function (e, t, n) {
                var r = this.promise;
                r._state === ne && (this._remaining--, e === oe ? _(r, n) : this._result[t] = n), 0 === this._remaining && T(r, this._result)
            }, R.prototype._willSettleAt = function (e, t) {
                var n = this;
                P(e, void 0, function (e) {
                    return n._settledAt(re, t, e)
                }, function (e) {
                    return n._settledAt(oe, t, e)
                })
            }, H.all = j, H.race = D, H.resolve = f, H.reject = F, H._setScheduler = a, H._setAsap = i, H._asap = Y, H.prototype = {
                constructor: H,
                then: d,
                catch: function (e) {
                    return this.then(null, e)
                }
            }, H.polyfill = B, H.Promise = H, H
        })
    }).call(t, n(38), n(39))
}, function (e, t, n) {
    "use strict";

    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function o() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
        if (d === setTimeout) return setTimeout(e, 0);
        if ((d === r || !d) && setTimeout) return d = setTimeout, setTimeout(e, 0);
        try {
            return d(e, 0)
        } catch (t) {
            try {
                return d.call(null, e, 0)
            } catch (t) {
                return d.call(this, e, 0)
            }
        }
    }

    function i(e) {
        if (f === clearTimeout) return clearTimeout(e);
        if ((f === o || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
        try {
            return f(e)
        } catch (t) {
            try {
                return f.call(null, e)
            } catch (t) {
                return f.call(this, e)
            }
        }
    }

    function l() {
        m && h && (m = !1, h.length ? y = h.concat(y) : b = -1, y.length && u())
    }

    function u() {
        if (!m) {
            var e = a(l);
            m = !0;
            for (var t = y.length; t;) {
                for (h = y, y = []; ++b < t;) h && h[b].run();
                b = -1, t = y.length
            }
            h = null, m = !1, i(e)
        }
    }

    function s(e, t) {
        this.fun = e, this.array = t
    }

    function c() {
    }

    var d, f, p = e.exports = {};
    !function () {
        try {
            d = "function" == typeof setTimeout ? setTimeout : r
        } catch (e) {
            d = r
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
            f = o
        }
    }();
    var h, y = [], m = !1, b = -1;
    p.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        y.push(new s(e, t)), 1 !== y.length || m || a(u)
    }, s.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = c, p.addListener = c, p.once = c, p.off = c, p.removeListener = c, p.removeAllListeners = c, p.emit = c, p.prependListener = c, p.prependOnceListener = c, p.listeners = function (e) {
        return []
    }, p.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, p.cwd = function () {
        return "/"
    }, p.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, p.umask = function () {
        return 0
    }
}, function (e, t, n) {
    "use strict";
    var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    r = function () {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (r = window)
    }
    e.exports = r
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(0), a = r(o), i = n(1), l = r(i);
    n(42);
    var u = function (e) {
        var t = e.togglePanel, n = e.isExpanded, r = e.sectionId, o = e.title, i = function (e) {
            13 !== e.which && 32 !== e.which || t()
        };
        return a.default.createElement("div", {
            className: "h5p-hub-client-drop-down",
            "aria-level": "1",
            role: "heading"
        }, a.default.createElement("div", {
            className: "icon-hub-icon",
            role: "button",
            onClick: t,
            onKeyUp: i,
            "aria-expanded": n.toString(),
            "aria-controls": "panel-body-" + r,
            tabIndex: "0"
        }, a.default.createElement("span", {className: "h5p-hub-description"}, "H5P Hub."), a.default.createElement("span", {className: "h5p-hub-selected"}, o)))
    };
    u.propTypes = {
        togglePanel: l.default.func.isRequired,
        isExpanded: l.default.bool.isRequired,
        sectionId: l.default.string.isRequired,
        title: l.default.string.isRequired
    }, t.default = u
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), u = n(0), s = r(u), c = n(1), d = r(c);
    n(44);
    var f = n(8), p = r(f), h = n(2), y = r(h), m = function (e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.handleSelect = function (e) {
                n.setState({selected: e}), n.props.onSelect(e)
            }, n.state = {selected: e.selected}, n
        }

        return i(t, e), l(t, [{
            key: "render", value: function () {
                var e = this, t = s.default.Children.map(this.props.children, function (t) {
                    return s.default.createElement("li", {
                        className: "tab-button",
                        "aria-selected": e.state.selected === t.props.id,
                        "aria-controls": "tab-panel-" + t.props.id,
                        role: "tab",
                        key: t.props.id
                    }, s.default.createElement("a", {id: t.props.id, href: "#"}, t.props.title))
                }), n = s.default.Children.map(this.props.children, function (t) {
                    return s.default.createElement("div", {
                        className: "tabpanel" + (e.state.selected === t.props.id ? "" : " hidden"),
                        id: "tab-panel-" + t.props.id,
                        "aria-labelledby": t.props.id,
                        role: "tabpanel"
                    }, t)
                });
                return s.default.createElement("div", {className: "tab-panel"}, s.default.createElement("nav", null, !!window.localStorage && s.default.createElement("div", {className: "h5peditor-copypaste-wrap"}, s.default.createElement("button", {
                    id: "h5peditor-hub-paste-button",
                    className: "h5peditor-paste-button " + (this.props.canPaste ? "" : "disabled"),
                    title: y.default.get("pasteFromClipboard"),
                    onClick: this.props.onPaste
                }, y.default.get("pasteButton"))), s.default.createElement("ul", {role: "tablist"}, s.default.createElement(p.default, {
                    selected: this.props.children[0].props.id,
                    onChange: this.handleSelect
                }, t))), n)
            }
        }]), t
    }(s.default.Component);
    m.propTypes = {selected: d.default.string.isRequired, onSelect: d.default.func.isRequired}, t.default = m
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), u = n(0), s = r(u), c = n(1), d = r(c), f = n(3), p = r(f), h = n(47), y = r(h), m = n(49), b = r(m),
        g = n(51), v = r(g), C = n(55), w = r(C), E = n(78), T = r(E), _ = n(79), P = r(_), S = n(2), O = r(S),
        k = function (e) {
            function t(e) {
                o(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                n.handleDetailClose = function () {
                    n.setState(function (e) {
                        return {detailViewActive: !1, setFocus: !e.setFocus}
                    })
                }, n.handleDetailUse = function (e) {
                    n.handleDetailClose(), n.props.onUse(e)
                }, n.handleListSelect = function (e) {
                    n.setState({library: e, detailViewActive: !0})
                }, n.handleFilterOn = function (e) {
                    n.setState({
                        contentTypes: (0, P.default)(n.props.contentTypes, e, n.state.orderBy),
                        filterOn: e,
                        focused: null,
                        detailViewActive: !1
                    })
                }, n.handleOrderBy = function (e) {
                    n.setState({
                        contentTypes: (0, P.default)(n.props.contentTypes, null, e),
                        orderBy: e,
                        filterOn: "",
                        focused: null
                    })
                }, n.handleFocus = function (e) {
                    n.setState({focused: e})
                }, n.handleFocusMove = function (e) {
                    for (var t = n.state.focused || n.state.contentTypes[0], r = 0; r < n.state.contentTypes.length; r++) if (t === n.state.contentTypes[r]) return void (n.state.contentTypes[r + e] && n.setState({focused: n.state.contentTypes[r + e]}))
                }, n.handleSearchSelect = function () {
                    var e = n.state.focused || n.state.contentTypes[0];
                    e && (e.installed ? n.props.onUse(e) : n.handleListSelect(e))
                }, n.handleWarningClose = function () {
                    n.setState({warnOutdated: !1})
                }, n.handleRetry = function () {
                    n.setState({retrying: !0}), n.props.onReload()
                };
                return n.state = {
                    orderBy: "recently",
                    contentTypes: (0, P.default)(e.contentTypes, null, "recently"),
                    detailViewActive: !1,
                    warnOutdated: n.props.contentTypes.outdated
                }, n
            }

            return i(t, e), l(t, [{
                key: "componentWillReceiveProps", value: function (e) {
                    this.setState(function (t) {
                        var n = void 0;
                        if (t.library) for (var r = 0; r < e.contentTypes.libraries.length; r++) {
                            var o = e.contentTypes.libraries[r];
                            o.machineName === t.library.machineName && (n = o)
                        }
                        return {
                            contentTypes: (0, P.default)(e.contentTypes, t.filterOn, t.orderBy),
                            retrying: void 0,
                            library: n
                        }
                    })
                }
            }, {
                key: "render", value: function () {
                    return this.props.contentTypes.libraries && this.props.contentTypes.libraries.length ? s.default.createElement("div", {className: "content-type-section-view loaded"}, s.default.createElement(y.default, {
                        value: this.state.filterOn,
                        auto: !this.state.detailViewActive,
                        setFocus: this.props.setFocus,
                        onFilter: this.handleFilterOn,
                        onNavigate: this.handleFocusMove,
                        onSelect: this.handleSearchSelect
                    }), !!this.state.warnOutdated && s.default.createElement(p.default, {
                        severity: "warning",
                        title: O.default.get("contentTypeCacheOutdated"),
                        message: O.default.get("contentTypeCacheOutdatedDesc"),
                        onClose: this.handleWarningClose
                    }), s.default.createElement("div", {className: "content-type-section" + (this.state.warnOutdated ? " height-limit" : "") + (this.state.filterOn ? " filtering" : "")}, s.default.createElement(b.default, {
                        hits: this.state.contentTypes.length,
                        selected: this.state.orderBy,
                        onChange: this.handleOrderBy,
                        hasRecentlyUsed: !(!this.props.contentTypes.recentlyUsed || !this.props.contentTypes.recentlyUsed.length),
                        searching: !!this.state.filterOn,
                        visible: !this.state.detailViewActive
                    }), s.default.createElement(v.default, {
                        contentTypes: this.state.contentTypes,
                        apiVersion: this.props.contentTypes.apiVersion,
                        focused: this.state.focused,
                        setFocus: !this.state.setFocus,
                        visible: !this.state.detailViewActive,
                        onUse: this.props.onUse,
                        onSelect: this.handleListSelect,
                        onFocus: this.handleFocus
                    }), s.default.createElement(w.default, {
                        library: this.state.library,
                        apiVersion: this.props.contentTypes.apiVersion,
                        visible: this.state.detailViewActive,
                        onUse: this.handleDetailUse,
                        onClose: this.handleDetailClose,
                        getAjaxUrl: this.props.getAjaxUrl,
                        onInstall: this.props.onInstall
                    }))) : s.default.createElement(T.default, {
                        throbbing: this.state.retrying,
                        details: this.props.error,
                        onRetry: this.handleRetry
                    })
                }
            }]), t
        }(s.default.Component);
    k.propTypes = {
        contentTypes: d.default.object.isRequired,
        setFocus: d.default.bool,
        getAjaxUrl: d.default.func.isRequired,
        onUse: d.default.func.isRequired,
        onInstall: d.default.func.isRequired
    }, t.default = k
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), u = n(0), s = r(u), c = n(1), d = r(c), f = n(2), p = r(f);
    n(48);
    var h = function (e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.handleInput = function (e) {
                var t = e.target;
                t.value !== n.state.value && (n.setState({value: t.value}), n.props.auto && !n.searchTimer && (n.searchTimer = setTimeout(function () {
                    n.props.onFilter(t.value), n.searchTimer = null
                }, 40)))
            }, n.handleKeyDown = function (e) {
                switch (e.which) {
                    case 38:
                        n.props.onNavigate(-1), e.preventDefault();
                        break;
                    case 40:
                        n.props.onNavigate(1), e.preventDefault();
                        break;
                    case 13:
                        n.props.auto ? n.props.onSelect() : n.props.onFilter(e.target.value), e.preventDefault()
                }
            }, n.state = {value: ""}, n
        }

        return i(t, e), l(t, [{
            key: "componentWillReceiveProps", value: function (e) {
                e.value !== this.state.value && this.setState({value: e.value}), e.setFocus !== this.props.setFocus && this.setState({focusOnRender: e.setFocus})
            }
        }, {
            key: "componentDidUpdate", value: function () {
                this.state.focusOnRender && (delete this.state.focusOnRender, this.input.focus())
            }
        }, {
            key: "render", value: function () {
                var e = this, t = p.default.get("contentTypeSearchFieldPlaceholder");
                return s.default.createElement("div", {
                    className: "search-wrapper",
                    role: "search"
                }, s.default.createElement("div", {className: "border-wrap"}, s.default.createElement("input", {
                    id: "hub-search-bar",
                    type: "text",
                    value: this.state.value || "",
                    "aria-label": t,
                    placeholder: t,
                    onInput: this.handleInput,
                    onKeyDown: function (t) {
                        return e.handleKeyDown(t)
                    },
                    ref: function (t) {
                        return e.input = t
                    }
                }), s.default.createElement("div", {className: "icon-search"})))
            }
        }]), t
    }(s.default.Component);
    h.propTypes = {
        value: d.default.string,
        auto: d.default.bool.isRequired,
        onFilter: d.default.func.isRequired,
        onNavigate: d.default.func.isRequired,
        onSelect: d.default.func.isRequired
    }, t.default = h
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(0), a = r(o), i = n(1), l = r(i), u = n(8), s = r(u), c = n(2), d = r(c);
    n(50);
    var f = function (e) {
        var t = e.hits, n = e.selected, r = e.onChange, o = e.hasRecentlyUsed, i = e.searching, l = e.visible;
        return a.default.createElement("div", {className: "navbar" + (l ? "" : " hidden")}, a.default.createElement("div", {className: "result-header"}, i ? d.default.get("searchResults") : d.default.get("contentTypeSectionAll"), a.default.createElement("span", {className: "result-hits"}, "(", d.default.get("numResults").replace(":num", t), ")")), !i && a.default.createElement("div", {
            id: "sort-by",
            className: "sort-by-header"
        }, d.default.get("show"), ":"), !i && a.default.createElement("ul", {
            className: "sort-by-list",
            "aria-labelledby": "sort-by"
        }, a.default.createElement(s.default, {
            selected: n,
            onChange: r
        }, a.default.createElement("li", null, a.default.createElement("a", {
            href: "#",
            id: "recently"
        }, d.default.get(o ? "recentlyUsedFirst" : "popularFirst"))), a.default.createElement("li", null, a.default.createElement("a", {
            href: "#",
            id: "newest"
        }, d.default.get("newestFirst"))), a.default.createElement("li", null, a.default.createElement("a", {
            href: "#",
            id: "a-to-z"
        }, d.default.get("aToZ"))))))
    };
    f.propTypes = {
        hits: l.default.number.isRequired,
        selected: l.default.string.isRequired,
        onChange: l.default.func.isRequired,
        hasRecentlyUsed: l.default.bool.isRequired,
        searching: l.default.bool.isRequired,
        visible: l.default.bool.isRequired
    }, t.default = f
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), u = n(0), s = r(u), c = n(1), d = r(c), f = n(52), p = r(f), h = n(8), y = r(h), m = n(2), b = r(m);
    n(54);
    var g = function (e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.getLibrary = function (e) {
                for (var t = 0; t < n.props.contentTypes.length; t++) {
                    var r = n.props.contentTypes[t];
                    if (r.machineName.toLocaleLowerCase().replace(".", "-") === e) return r
                }
            }, n.handleFocus = function (e) {
                n.props.onFocus(n.getLibrary(e))
            }, n.handleSelect = function (e) {
                var t = n.getLibrary(e);
                t.installed ? n.props.onUse(t) : (n.props.onSelect(t), n.props.onFocus(t))
            }, n.scrollIntoView = function (e) {
                var t = n.choose.items[0].offsetTop;
                if (e.offsetTop - t < n.list.scrollTop) return void (n.list.scrollTop = e.offsetTop - t);
                var r = e.offsetTop - t + e.clientHeight;
                if (r > n.list.scrollTop + n.list.clientHeight) {
                    var o = window.getComputedStyle(n.listElement);
                    n.list.scrollTop = r - n.list.clientHeight + parseFloat(o.marginTop) + parseFloat(o.marginBottom)
                }
            }, n
        }

        return i(t, e), l(t, [{
            key: "componentWillReceiveProps", value: function (e) {
                e.contentTypes !== this.props.contentTypes && this.setState({resetScroll: !0})
            }
        }, {
            key: "componentDidUpdate", value: function () {
                if (this.state && this.state.resetScroll) delete this.state.resetScroll, this.list.scrollTop = 0; else if (this.props.focused && this.choose && this.choose.items) for (var e = this.props.focused.machineName.toLocaleLowerCase().replace(".", "-"), t = 0; t < this.choose.items.length; t++) if (e === this.choose.items[t].id) {
                    this.scrollIntoView(this.choose.items[t]);
                    break
                }
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.props.contentTypes.map(function (t, n) {
                    return s.default.createElement("li", {
                        key: n,
                        id: t.machineName.toLocaleLowerCase().replace(".", "-"),
                        className: "media"
                    }, s.default.createElement(p.default, {
                        contentType: t,
                        apiVersion: e.props.apiVersion,
                        tabindex: e.props.focused ? e.props.focused === t ? 0 : -1 : 0 === n ? 0 : -1,
                        onSelect: e.props.onSelect
                    }))
                });
                return s.default.createElement("div", {
                    className: "content-type-list",
                    "aria-hidden": !this.props.visible,
                    ref: function (t) {
                        return e.list = t
                    }
                }, this.props.contentTypes.length ? s.default.createElement("ol", {
                    ref: function (t) {
                        return e.listElement = t
                    }
                }, s.default.createElement(y.default, {
                    selected: this.props.focused ? this.props.focused.machineName.toLocaleLowerCase().replace(".", "-") : null,
                    setFocus: this.props.setFocus,
                    onChange: this.handleSelect,
                    onFocus: this.handleFocus,
                    ref: function (t) {
                        return e.choose = t
                    }
                }, t)) : s.default.createElement("div", {className: "no-results"}, s.default.createElement("div", {className: "no-results-title"}, b.default.get("noResultsFound")), s.default.createElement("div", {className: "no-results-desc"}, b.default.get("noResultsFoundDesc"))))
            }
        }]), t
    }(s.default.Component);
    g.propTypes = {
        contentTypes: d.default.array.isRequired,
        apiVersion: d.default.object.isRequired,
        focused: d.default.object,
        visible: d.default.bool,
        setFocus: d.default.bool,
        onUse: d.default.func.isRequired,
        onSelect: d.default.func.isRequired,
        onFocus: d.default.func.isRequired
    }, t.default = g
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(0), a = r(o), i = n(1), l = r(i), u = n(13), s = r(u), c = n(2), d = r(c), f = n(14), p = r(f);
    n(53);
    var h = function (e) {
        var t = e.contentType, n = e.apiVersion, r = e.tabindex, o = e.onSelect, i = t.title || t.machineName,
            l = (0, p.default)(t, n), u = function (e) {
                o(t), e.preventDefault()
            }, c = function (e) {
                13 !== e.which && 32 !== e.which || u(e)
            };
        return a.default.createElement("div", null, a.default.createElement("div", {className: "media-left"}, a.default.createElement("img", {
            className: "media-object",
            src: t.icon || s.default,
            alt: i + " " + d.default.get("contentTypeIconAltText")
        })), a.default.createElement("div", {className: "media-body"}, a.default.createElement("div", {className: "h4 media-heading"}, i), t.installed ? a.default.createElement("button", {
            type: "button",
            className: "button button-primary",
            tabIndex: r,
            onClick: u,
            onKeyDown: c
        }, d.default.get("contentTypeDetailButtonLabel")) : a.default.createElement("button", {
            type: "button",
            className: "button button-inverse-primary button-install",
            tabIndex: r
        }, d.default.get("contentTypeGetButtonLabel")), a.default.createElement("div", {className: "content-type-update-info" + (l ? "" : " hidden")}, d.default.get("contentTypeUpdateAvailable")), a.default.createElement("div", {className: "description"}, t.summary || "")))
    };
    h.propTypes = {
        contentType: l.default.object.isRequired,
        apiVersion: l.default.object.isRequired,
        tabindex: l.default.number.isRequired,
        onSelect: l.default.func.isRequired
    }, t.default = h
}, function (e, t) {
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, u = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), s = n(0), c = r(s), d = n(1), f = r(d), p = n(2), h = r(p), y = n(14), m = r(y), b = n(9);
    n(7);
    var g = n(6), v = r(g), C = n(13), w = r(C), E = n(3), T = r(E), _ = n(56), P = r(_), S = n(65), O = r(S),
        k = n(71), x = r(k), N = n(73), I = r(N), M = n(75), R = r(M);
    n(77);
    var A = {}, j = function (e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.onTransitionEnd = function () {
                !n.state.visible && n.state.showImageSlider ? n.setState({showImageSlider: !1}) : n.state.visible && n.setState({focusUseButton: n.state.visible})
            }, n.onImageSelect = function (e) {
                n.setState({modalType: "screenshots", selectedScreenshot: e})
            }, n.onModalClose = function () {
                n.setState({modalType: void 0, licenseDetails: void 0})
            }, n.handleInstall = function () {
                n.setState({
                    installing: !0,
                    errorMessage: null,
                    infoMessage: null
                }), (0, v.default)(n.props.getAjaxUrl("library-install", {id: n.props.library.machineName}), "").then(function (e) {
                    n.props.onInstall(e.data);
                    var t = n.props.installed ? "contentTypeUpdateSuccess" : "contentTypeInstallSuccess",
                        r = n.props.library.title || n.props.library.machineName;
                    n.setState({
                        installed: !0,
                        installing: !1,
                        infoMessage: {title: h.default.get(t, {":contentType": r}), message: e.data.details}
                    })
                }).catch(function (e) {
                    n.setState({updating: !1, installing: !1, errorMessage: e})
                })
            }, n.handleClose = function (e) {
                e.preventDefault(), n.props.onClose()
            }, n.handleUse = function () {
                n.props.onUse(n.props.library)
            }, n.handleShowLicenseDetails = function () {
                var e = n.props.library.license.id, t = A[e];
                t ? n.setState({licenseDetails: t}) : fetch("https://api.h5p.org/v1/licenses/" + n.props.library.license.id).then(function (e) {
                    return e.json()
                }).then(function (r) {
                    t = !1 === r.success ? h.default.get("licenseFetchDetailsFailed") : A[e] = r.description.replace(":owner", n.props.library.owner).replace(":year", (new Date).getFullYear()), n.setState({licenseDetails: t})
                }).catch(function () {
                    n.setState({licenseDetails: h.default.get("licenseFetchDetailsFailed")})
                }), n.setState({modalType: "license"})
            }, n.handleErrorDismiss = function () {
                n.setState({errorMessage: null})
            }, n.handleInfoDismiss = function () {
                n.setState({infoMessage: null})
            }, n.handleBackKeyPress = function (e) {
                32 === e.which && n.handleClose(e)
            }, n.openExampleUrl = function () {
                window.open(n.props.library.example, "_blank")
            }, n.state = {
                visible: !1,
                selectedScreenshot: 0,
                modalType: void 0,
                installed: !1,
                canInstall: !1,
                updatable: !1,
                installing: !1,
                showImageSlider: !0,
                message: void 0,
                opened: !1
            }, n
        }

        return i(t, e), u(t, [{
            key: "componentWillReceiveProps", value: function (e) {
                e.library && (this.props.library !== e.library && this.setState({
                    errorMessage: null,
                    infoMessage: null
                }), !this.props.visible && e.visible ? this.setState({opened: !0}) : this.setState({opened: !1}), this.setState({
                    installed: e.library.installed,
                    canInstall: e.library.canInstall,
                    updatable: (0, m.default)(e.library, e.apiVersion),
                    installing: !1,
                    visible: e.visible,
                    showImageSlider: !0
                }))
            }
        }, {
            key: "render", value: function () {
                var e = this, t = "content-type-detail" + (this.state.visible ? " show" : ""),
                    n = "content-type-detail-view-title";
                if (!this.props.library) return c.default.createElement("div", {
                    className: t,
                    id: "content-type-detail"
                });
                var r = function () {
                    return "screenshots" === e.state.modalType ? c.default.createElement(x.default, {
                        images: e.props.library.screenshots,
                        imagesToShow: 1,
                        showProgress: !0,
                        selected: e.state.selectedScreenshot
                    }) : "license" === e.state.modalType ? c.default.createElement("div", null, c.default.createElement("div", {className: "modal-header"}, h.default.get("licenseModalTitle")), c.default.createElement("div", {className: "modal-content"}, c.default.createElement("h5", {
                        id: "license-details-id",
                        className: "modal-title"
                    }, e.props.library.license.id), c.default.createElement("div", {
                        id: "license-details-description",
                        className: e.state.licenseDetails ? void 0 : "loading",
                        dangerouslySetInnerHTML: {__html: e.state.licenseDetails}
                    }))) : null
                }, o = {};
                return "screenshots" === this.state.modalType && (o.label = h.default.get("imageLightboxTitle")), "license" === this.state.modalType && this.state.licenseDetails && (o.labelledby = "license-details-id", o.describedby = "license-details-description"), c.default.createElement("div", {
                    className: t,
                    id: "content-type-detail",
                    role: "region",
                    tabIndex: "-1",
                    "aria-labelledby": n,
                    onTransitionEnd: this.onTransitionEnd
                }, c.default.createElement("a", {
                    href: "#",
                    className: "back-button icon-arrow-thick",
                    "aria-label": h.default.get("contentTypeBackButtonLabel"),
                    onClick: this.handleClose,
                    onKeyPress: this.handleBackKeyPress
                }), c.default.createElement("div", {className: "container"}, c.default.createElement("div", {className: "image-wrapper"}, c.default.createElement("img", {
                    className: "img-responsive content-type-image",
                    src: this.props.library.icon || w.default
                })), c.default.createElement("div", {className: "text-details"}, c.default.createElement("h2", {
                    id: n,
                    className: "title",
                    tabIndex: "-1"
                }, this.props.library.title || this.props.library.machineName), c.default.createElement("div", {className: "owner"}, this.props.library.owner), c.default.createElement(R.default, {
                    text: this.props.library.description,
                    maxLength: 285
                }), this.props.library.example && c.default.createElement("a", {
                    className: "button demo-button",
                    target: "_blank",
                    href: this.props.library.example || "#",
                    onKeyPress: function (t) {
                        return (0, b.onSpaceOrEnterEvent)(t, e.openExampleUrl)
                    }
                }, h.default.get("contentTypeDemoButtonLabel")))), this.state.showImageSlider && this.props.library.screenshots && c.default.createElement(x.default, {
                    images: this.props.library.screenshots,
                    onImageSelect: this.onImageSelect,
                    showProgress: !1,
                    selected: this.state.selectedScreenshot
                }), c.default.createElement("hr", null), !!this.state.errorMessage && c.default.createElement(T.default, l({}, this.state.errorMessage, {
                    severity: "error",
                    onClose: this.handleErrorDismiss
                })), !!this.state.infoMessage && c.default.createElement(T.default, l({}, this.state.infoMessage, {
                    severity: "info",
                    onClose: this.handleInfoDismiss
                })), c.default.createElement(I.default, {
                    installed: this.state.installed,
                    canInstall: this.state.canInstall,
                    updatable: this.state.updatable,
                    installing: this.state.installing,
                    onInstall: this.handleInstall,
                    onUse: this.handleUse,
                    opened: this.state.opened
                }), c.default.createElement(O.default, {
                    id: this.props.library.license ? this.props.library.license.id : "Unspecified",
                    attributes: this.props.library.license ? this.props.library.license.attributes : void 0,
                    onShowLicenseDetails: this.handleShowLicenseDetails
                }), c.default.createElement(P.default, {
                    visible: void 0 !== this.state.modalType,
                    onClose: this.onModalClose,
                    className: this.state.modalType || "",
                    aria: o
                }, c.default.createElement(r, null)))
            }
        }]), t
    }(c.default.Component);
    j.propTypes = {
        visible: f.default.bool.isRequired,
        onInstall: f.default.func.isRequired,
        onUse: f.default.func.isRequired,
        onClose: f.default.func.isRequired,
        getAjaxUrl: f.default.func.isRequired,
        library: f.default.shape({
            installed: f.default.bool.isRequired,
            canInstall: f.default.bool.isRequired,
            isUpToDate: f.default.bool.isRequired,
            example: f.default.string,
            title: f.default.string,
            description: f.default.string.isRequired,
            machineName: f.default.string.isRequired,
            screenshots: f.default.arrayOf(f.default.shape({url: b.nonEmptyString, alt: b.nonEmptyString})),
            owner: f.default.string.isRequired,
            icon: f.default.string,
            license: f.default.shape({
                id: f.default.string.isRequired,
                attributes: f.default.shape({
                    canHoldLiable: f.default.bool.isRequired,
                    useCommercially: f.default.bool,
                    modifiable: f.default.bool,
                    distributable: f.default.bool,
                    sublicensable: f.default.bool,
                    mustIncludeCopyright: f.default.bool,
                    mustIncludeLicense: f.default.bool
                })
            })
        })
    }, t.default = j
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), u = n(0), s = r(u), c = n(57), d = r(c), f = n(1), p = r(f), h = n(20), y = r(h), m = n(2), b = r(m);
    n(64);
    var g = function (e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.closeModal = function () {
                document.querySelector(".h5p-section-content-types").removeAttribute("aria-hidden"), n.props.onClose()
            }, n.getParent = function () {
                return document.querySelector(".h5p-hub")
            }, d.default.setAppElement(".h5p-section-content-types"), n.state = {modalIsOpen: !1}, n
        }

        return i(t, e), l(t, [{
            key: "componentWillReceiveProps", value: function (e) {
                this.setState({modalIsOpen: e.visible})
            }
        }, {
            key: "render", value: function () {
                var e = {className: "lightbox-close", "aria-label": b.default.get("close")};
                return s.default.createElement(d.default, {
                    isOpen: this.state.modalIsOpen,
                    onRequestClose: this.closeModal,
                    contentLabel: this.props.label,
                    parentSelector: this.getParent,
                    className: "lightbox-inner " + this.props.className,
                    overlayClassName: "lightbox",
                    aria: this.props.aria
                }, s.default.createElement(y.default, {
                    buttonProps: e,
                    onButtonClick: this.closeModal
                }), this.props.children)
            }
        }]), t
    }(s.default.Component);
    g.propTypes = {
        onClose: p.default.func.isRequired,
        aria: p.default.shape({label: p.default.string, labelledby: p.default.string, describedby: p.default.string}),
        className: p.default.string.isRequired
    }, t.default = g
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(58), o = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(r);
    t.default = o.default, e.exports = t.default
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== (void 0 === t ? "undefined" : u(t)) && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : u(t)));
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function l(e) {
        return e()
    }

    var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.bodyOpenClassName = t.portalClassName = void 0;
    var s = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, c = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), d = n(0), f = r(d), p = n(12), h = r(p), y = n(1), m = r(y), b = n(59), g = r(b), v = n(16), C = function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }(v), w = n(18), E = r(w), T = t.portalClassName = "ReactModalPortal",
        _ = t.bodyOpenClassName = "ReactModal__Body--open", P = void 0 !== h.default.createPortal,
        S = P ? h.default.createPortal : h.default.unstable_renderSubtreeIntoContainer, O = function (e) {
            function t() {
                var e, n, r, i;
                o(this, t);
                for (var u = arguments.length, c = Array(u), d = 0; d < u; d++) c[d] = arguments[d];
                return n = r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))), r.removePortal = function () {
                    !P && h.default.unmountComponentAtNode(r.node), l(r.props.parentSelector).removeChild(r.node)
                }, r.portalRef = function (e) {
                    r.portal = e
                }, r.renderPortal = function (e) {
                    var n = S(r, f.default.createElement(g.default, s({defaultStyles: t.defaultStyles}, e)), r.node);
                    r.portalRef(n)
                }, i = n, a(r, i)
            }

            return i(t, e), c(t, [{
                key: "componentDidMount", value: function () {
                    if (w.canUseDOM) {
                        P || (this.node = document.createElement("div")), this.node.className = this.props.portalClassName;
                        l(this.props.parentSelector).appendChild(this.node), !P && this.renderPortal(this.props)
                    }
                }
            }, {
                key: "componentWillReceiveProps", value: function (e) {
                    if (w.canUseDOM) {
                        var t = e.isOpen;
                        if (this.props.isOpen || t) {
                            var n = l(this.props.parentSelector), r = l(e.parentSelector);
                            r !== n && (n.removeChild(this.node), r.appendChild(this.node)), !P && this.renderPortal(e)
                        }
                    }
                }
            }, {
                key: "componentWillUpdate", value: function (e) {
                    w.canUseDOM && e.portalClassName !== this.props.portalClassName && (this.node.className = e.portalClassName)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    if (w.canUseDOM && this.node && this.portal) {
                        var e = this.portal.state, t = Date.now(),
                            n = e.isOpen && this.props.closeTimeoutMS && (e.closesAt || t + this.props.closeTimeoutMS);
                        n ? (e.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, n - t)) : this.removePortal()
                    }
                }
            }, {
                key: "render", value: function () {
                    return w.canUseDOM && P ? (!this.node && P && (this.node = document.createElement("div")), S(f.default.createElement(g.default, s({
                        ref: this.portalRef,
                        defaultStyles: t.defaultStyles
                    }, this.props)), this.node)) : null
                }
            }], [{
                key: "setAppElement", value: function (e) {
                    C.setElement(e)
                }
            }]), t
        }(d.Component);
    O.propTypes = {
        isOpen: m.default.bool.isRequired,
        style: m.default.shape({content: m.default.object, overlay: m.default.object}),
        portalClassName: m.default.string,
        bodyOpenClassName: m.default.string,
        className: m.default.oneOfType([m.default.string, m.default.shape({
            base: m.default.string.isRequired,
            afterOpen: m.default.string.isRequired,
            beforeClose: m.default.string.isRequired
        })]),
        overlayClassName: m.default.oneOfType([m.default.string, m.default.shape({
            base: m.default.string.isRequired,
            afterOpen: m.default.string.isRequired,
            beforeClose: m.default.string.isRequired
        })]),
        appElement: m.default.instanceOf(E.default),
        onAfterOpen: m.default.func,
        onRequestClose: m.default.func,
        closeTimeoutMS: m.default.number,
        ariaHideApp: m.default.bool,
        shouldFocusAfterRender: m.default.bool,
        shouldCloseOnOverlayClick: m.default.bool,
        shouldReturnFocusAfterClose: m.default.bool,
        parentSelector: m.default.func,
        aria: m.default.object,
        role: m.default.string,
        contentLabel: m.default.string,
        shouldCloseOnEsc: m.default.bool
    }, O.defaultProps = {
        isOpen: !1,
        portalClassName: T,
        bodyOpenClassName: _,
        ariaHideApp: !0,
        closeTimeoutMS: 0,
        shouldFocusAfterRender: !0,
        shouldCloseOnEsc: !0,
        shouldCloseOnOverlayClick: !0,
        shouldReturnFocusAfterClose: !0,
        parentSelector: function () {
            return document.body
        }
    }, O.defaultStyles = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)"
        },
        content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px"
        }
    }, t.default = O
}, function (e, t, n) {
    "use strict";

    function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function o(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== (void 0 === t ? "undefined" : u(t)) && "function" != typeof t ? e : t
    }

    function l(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : u(t)));
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    var s = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, c = "function" == typeof Symbol && "symbol" === u(Symbol.iterator) ? function (e) {
            return void 0 === e ? "undefined" : u(e)
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : u(e)
        }, d = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), f = n(0), p = o(f), h = n(1), y = o(h), m = n(60), b = r(m), g = n(61), v = o(g), C = n(16), w = r(C),
        E = n(17), T = r(E), _ = n(62), P = r(_), S = n(18), O = o(S),
        k = {overlay: "ReactModal__Overlay", content: "ReactModal__Content"}, x = 9, N = 27, I = function (e) {
            function t(e) {
                a(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.setFocusAfterRender = function (e) {
                    n.focusAfterRender = n.props.shouldFocusAfterRender && e
                }, n.setOverlayRef = function (e) {
                    n.overlay = e
                }, n.setContentRef = function (e) {
                    n.content = e
                }, n.afterClose = function () {
                    P.remove(n.props.bodyOpenClassName), n.props.shouldFocusAfterRender && (n.props.shouldReturnFocusAfterClose ? (b.returnFocus(), b.teardownScopedFocus()) : b.popWithoutFocus())
                }, n.open = function () {
                    n.beforeOpen(), n.state.afterOpen && n.state.beforeClose ? (clearTimeout(n.closeTimer), n.setState({beforeClose: !1})) : (n.props.shouldFocusAfterRender && (b.setupScopedFocus(n.node), b.markForFocusLater()), n.setState({isOpen: !0}, function () {
                        n.setState({afterOpen: !0}), n.props.isOpen && n.props.onAfterOpen && n.props.onAfterOpen()
                    }))
                }, n.close = function () {
                    n.beforeClose(), n.props.closeTimeoutMS > 0 ? n.closeWithTimeout() : n.closeWithoutTimeout()
                }, n.focusContent = function () {
                    return n.content && !n.contentHasFocus() && n.content.focus()
                }, n.closeWithTimeout = function () {
                    var e = Date.now() + n.props.closeTimeoutMS;
                    n.setState({beforeClose: !0, closesAt: e}, function () {
                        n.closeTimer = setTimeout(n.closeWithoutTimeout, n.state.closesAt - Date.now())
                    })
                }, n.closeWithoutTimeout = function () {
                    n.setState({beforeClose: !1, isOpen: !1, afterOpen: !1, closesAt: null}, n.afterClose)
                }, n.handleKeyDown = function (e) {
                    e.keyCode === x && (0, v.default)(n.content, e), n.props.shouldCloseOnEsc && e.keyCode === N && (e.preventDefault(), n.requestClose(e))
                }, n.handleOverlayOnClick = function (e) {
                    null === n.shouldClose && (n.shouldClose = !0), n.shouldClose && n.props.shouldCloseOnOverlayClick && (n.ownerHandlesClose() ? n.requestClose(e) : n.focusContent()), n.shouldClose = null, n.moveFromContentToOverlay = null
                }, n.handleOverlayOnMouseUp = function () {
                    null === n.moveFromContentToOverlay && (n.shouldClose = !1)
                }, n.handleContentOnMouseUp = function () {
                    n.shouldClose = !1
                }, n.handleOverlayOnMouseDown = function () {
                    n.moveFromContentToOverlay = !1
                }, n.handleContentOnClick = function () {
                    n.shouldClose = !1
                }, n.handleContentOnMouseDown = function () {
                    n.shouldClose = !1, n.moveFromContentToOverlay = !1
                }, n.requestClose = function (e) {
                    return n.ownerHandlesClose() && n.props.onRequestClose(e)
                }, n.ownerHandlesClose = function () {
                    return n.props.onRequestClose
                }, n.shouldBeClosed = function () {
                    return !n.state.isOpen && !n.state.beforeClose
                }, n.contentHasFocus = function () {
                    return document.activeElement === n.content || n.content.contains(document.activeElement)
                }, n.buildClassName = function (e, t) {
                    var r = "object" === (void 0 === t ? "undefined" : c(t)) ? t : {
                        base: k[e],
                        afterOpen: k[e] + "--after-open",
                        beforeClose: k[e] + "--before-close"
                    }, o = r.base;
                    return n.state.afterOpen && (o = o + " " + r.afterOpen), n.state.beforeClose && (o = o + " " + r.beforeClose), "string" == typeof t && t ? o + " " + t : o
                }, n.ariaAttributes = function (e) {
                    return Object.keys(e).reduce(function (t, n) {
                        return t["aria-" + n] = e[n], t
                    }, {})
                }, n.state = {afterOpen: !1, beforeClose: !1}, n.shouldClose = null, n.moveFromContentToOverlay = null, n
            }

            return l(t, e), d(t, [{
                key: "componentDidMount", value: function () {
                    this.props.isOpen && (this.setFocusAfterRender(!0), this.open())
                }
            }, {
                key: "componentWillReceiveProps", value: function (e) {
                    !this.props.isOpen && e.isOpen ? (this.setFocusAfterRender(!0), this.open()) : this.props.isOpen && !e.isOpen && this.close()
                }
            }, {
                key: "componentDidUpdate", value: function () {
                    this.focusAfterRender && (this.focusContent(), this.setFocusAfterRender(!1))
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    P.remove(this.props.bodyOpenClassName), this.beforeClose(), clearTimeout(this.closeTimer)
                }
            }, {
                key: "beforeOpen", value: function () {
                    var e = this.props, t = e.appElement, n = e.ariaHideApp, r = e.bodyOpenClassName;
                    P.add(r), n && w.hide(t)
                }
            }, {
                key: "beforeClose", value: function () {
                    var e = this.props, t = e.appElement;
                    e.ariaHideApp && T.totalCount() < 1 && w.show(t)
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, t = e.className, n = e.overlayClassName, r = e.defaultStyles,
                        o = t ? {} : r.content, a = n ? {} : r.overlay;
                    return this.shouldBeClosed() ? null : p.default.createElement("div", {
                        ref: this.setOverlayRef,
                        className: this.buildClassName("overlay", n),
                        style: s({}, a, this.props.style.overlay),
                        onClick: this.handleOverlayOnClick,
                        onMouseDown: this.handleOverlayOnMouseDown,
                        onMouseUp: this.handleOverlayOnMouseUp
                    }, p.default.createElement("div", s({
                        ref: this.setContentRef,
                        style: s({}, o, this.props.style.content),
                        className: this.buildClassName("content", t),
                        tabIndex: "-1",
                        onKeyDown: this.handleKeyDown,
                        onMouseDown: this.handleContentOnMouseDown,
                        onMouseUp: this.handleContentOnMouseUp,
                        onClick: this.handleContentOnClick,
                        role: this.props.role,
                        "aria-label": this.props.contentLabel
                    }, this.ariaAttributes(this.props.aria || {})), this.props.children))
                }
            }]), t
        }(f.Component);
    I.defaultProps = {style: {overlay: {}, content: {}}}, I.propTypes = {
        isOpen: y.default.bool.isRequired,
        defaultStyles: y.default.shape({content: y.default.object, overlay: y.default.object}),
        style: y.default.shape({content: y.default.object, overlay: y.default.object}),
        className: y.default.oneOfType([y.default.string, y.default.object]),
        overlayClassName: y.default.oneOfType([y.default.string, y.default.object]),
        bodyOpenClassName: y.default.string,
        ariaHideApp: y.default.bool,
        appElement: y.default.instanceOf(O.default),
        onAfterOpen: y.default.func,
        onRequestClose: y.default.func,
        closeTimeoutMS: y.default.number,
        shouldFocusAfterRender: y.default.bool,
        shouldCloseOnOverlayClick: y.default.bool,
        shouldReturnFocusAfterClose: y.default.bool,
        role: y.default.string,
        contentLabel: y.default.string,
        aria: y.default.object,
        children: y.default.node,
        shouldCloseOnEsc: y.default.bool
    }, t.default = I, e.exports = t.default
}, function (e, t, n) {
    "use strict";

    function r() {
        h = !0
    }

    function o() {
        if (h) {
            if (h = !1, !p) return;
            setTimeout(function () {
                if (!p.contains(document.activeElement)) {
                    ((0, d.default)(p)[0] || p).focus()
                }
            }, 0)
        }
    }

    function a() {
        f.push(document.activeElement)
    }

    function i() {
        var e = null;
        try {
            return e = f.pop(), void e.focus()
        } catch (t) {
            console.warn(["You tried to return focus to", e, "but it is not in the DOM anymore"].join(" "))
        }
    }

    function l() {
        f.length > 0 && f.pop()
    }

    function u(e) {
        p = e, window.addEventListener ? (window.addEventListener("blur", r, !1), document.addEventListener("focus", o, !0)) : (window.attachEvent("onBlur", r), document.attachEvent("onFocus", o))
    }

    function s() {
        p = null, window.addEventListener ? (window.removeEventListener("blur", r), document.removeEventListener("focus", o)) : (window.detachEvent("onBlur", r), document.detachEvent("onFocus", o))
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.handleBlur = r, t.handleFocus = o, t.markForFocusLater = a, t.returnFocus = i, t.popWithoutFocus = l, t.setupScopedFocus = u, t.teardownScopedFocus = s;
    var c = n(15), d = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(c), f = [], p = null, h = !1
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        var n = (0, a.default)(e);
        if (!n.length) return void t.preventDefault();
        var r = t.shiftKey, o = n[0], i = n[n.length - 1];
        if (e !== document.activeElement) {
            var l;
            if (i !== document.activeElement || r || (l = o), o === document.activeElement && r && (l = i), l) return t.preventDefault(), void l.focus();
            var u = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
            if (null != u && "Chrome" != u[1] && null == /\biPod\b|\biPad\b/g.exec(navigator.userAgent)) {
                var s = n.indexOf(document.activeElement);
                s > -1 && (s += r ? -1 : 1), t.preventDefault(), n[s].focus()
            }
        }
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r;
    var o = n(15), a = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(o);
    e.exports = t.default
}, function (e, t, n) {
    "use strict";

    function r(e) {
        e.split(" ").map(i.add).forEach(function (e) {
            return document.body.classList.add(e)
        })
    }

    function o(e) {
        var t = i.get();
        e.split(" ").map(i.remove).filter(function (e) {
            return 0 === t[e]
        }).forEach(function (e) {
            return document.body.classList.remove(e)
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.add = r, t.remove = o;
    var a = n(17), i = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }(a)
}, function (e, t, n) {
    "use strict";
    var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
    !function () {
        var a = !("undefined" == typeof window || !window.document || !window.document.createElement), i = {
            canUseDOM: a,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners: a && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: a && !!window.screen
        };
        "object" === o(n(19)) && n(19) ? void 0 !== (r = function () {
            return i
        }.call(t, n, t, e)) && (e.exports = r) : void 0 !== e && e.exports ? e.exports = i : window.ExecutionEnvironment = i
    }()
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(0), a = r(o), i = n(1), l = r(i), u = n(2), s = r(u), c = n(66), d = r(c), f = n(68), p = r(f);
    n(70);
    var h = function (e) {
        var t = e.id, n = e.attributes, r = e.onShowLicenseDetails;
        return a.default.createElement(d.default, null, a.default.createElement(p.default, {
            header: s.default.get("contentTypeLicensePanelTitle"),
            id: t,
            attributes: n,
            onShowLicenseDetails: r
        }))
    };
    h.propTypes = {
        id: l.default.string,
        onShowLicenseDetails: l.default.func,
        attributes: l.default.shape({
            canHoldLiable: l.default.bool,
            useCommercially: l.default.bool,
            modifiable: l.default.bool,
            distributable: l.default.bool,
            sublicensable: l.default.bool,
            mustIncludeCopyright: l.default.bool,
            mustIncludeLicense: l.default.bool
        })
    }, t.default = h
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), u = n(0), s = r(u), c = n(20), d = r(c);
    n(67);
    var f = function (e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {expanded: e.expanded}, n
        }

        return i(t, e), l(t, [{
            key: "handleToggle", value: function (e) {
                this.setState({expanded: this.state.expanded === e.props.id ? void 0 : e.props.id})
            }
        }, {
            key: "render", value: function () {
                var e = this, t = s.default.Children.map(this.props.children, function (t) {
                    var n = {className: "h5p-hub-accordion-toggler", "aria-expanded": e.state.expanded === t.props.id};
                    return s.default.createElement("div", null, s.default.createElement("dt", {
                        "aria-level": "2",
                        role: "heading",
                        className: "h5p-hub-accordion-heading"
                    }, s.default.createElement(d.default, {
                        buttonProps: n, onButtonClick: function () {
                            return e.handleToggle(t)
                        }
                    }, s.default.createElement("span", {className: "icon-accordion-arrow"}), s.default.createElement("span", null, t.props.header))), s.default.createElement("dl", {
                        role: "region",
                        className: "h5p-hub-accordion-region" + (e.state.expanded == t.props.id ? "" : " hidden")
                    }, s.default.createElement("div", {className: "panel-body"}, t)))
                });
                return s.default.createElement("dl", {className: "h5p-hub-accordion"}, t)
            }
        }]), t
    }(s.default.Component);
    t.default = f
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), u = n(0), s = r(u), c = n(1), d = r(c), f = n(2), p = r(f);
    n(69);
    var h = function (e) {
        function t() {
            return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }

        return i(t, e), l(t, [{
            key: "renderSection", value: function (e) {
                return e ? s.default.createElement("div", {className: "short-license-info"}, s.default.createElement("h3", null, this.props.id), s.default.createElement("button", {
                    type: "button",
                    className: "short-license-read-more",
                    "aria-label": p.default.get("readMore"),
                    onClick: this.props.onShowLicenseDetails
                }), s.default.createElement("p", null, p.default.get("licenseDescription")), s.default.createElement("ul", {className: "ul small"}, s.default.createElement("li", null, p.default.get(this.props.attributes.canHoldLiable ? "licenseCanHoldLiable" : "licenseCannotHoldLiable")), this.props.attributes.useCommercially && s.default.createElement("li", null, p.default.get("licenseCanUseCommercially")), this.props.attributes.modifiable && s.default.createElement("li", null, p.default.get("licenseCanModify")), this.props.attributes.distributable && s.default.createElement("li", null, p.default.get("licenseCanDistribute")), this.props.attributes.sublicensable && s.default.createElement("li", null, p.default.get("licenseCanSublicense")), this.props.attributes.mustIncludeCopyright && s.default.createElement("li", null, p.default.get("licenseMustIncludeCopyright")), this.props.attributes.mustIncludeLicense && s.default.createElement("li", null, p.default.get("licenseMustIncludeLicense")))) : s.default.createElement("div", {className: "short-license-info"}, s.default.createElement("p", null, p.default.get("licenseUnspecified")))
            }
        }, {
            key: "render", value: function () {
                return this.renderSection("Unspecified" !== this.props.id)
            }
        }]), t
    }(s.default.Component);
    h.propTypes = {
        id: d.default.string,
        onShowLicenseDetails: d.default.func,
        attributes: d.default.shape({
            canHoldLiable: d.default.bool,
            useCommercially: d.default.bool,
            modifiable: d.default.bool,
            distributable: d.default.bool,
            sublicensable: d.default.bool,
            mustIncludeCopyright: d.default.bool,
            mustIncludeLicense: d.default.bool
        })
    }, t.default = h
}, function (e, t) {
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), u = n(0), s = r(u), c = n(1), d = r(c), f = n(2), p = r(f), h = n(9);
    n(72);
    var y = function (e) {
            function t(e) {
                o(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return m.call(n), n.state = {
                    imagesToShow: n.props.imagesToShow || 5,
                    offset: n.props.selected || 0,
                    selected: n.props.selected || 0,
                    modalIsOpen: !1,
                    focusOnRender: !1
                }, n
            }

            return i(t, e), l(t, [{
                key: "componentDidMount", value: function () {
                    this.props.imagesToShow || window.addEventListener("resize", this.onWindowResized)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    this.props.imagesToShow || window.removeEventListener("resize", this.onWindowResized)
                }
            }, {
                key: "shouldComponentUpdate", value: function (e, t) {
                    return !(this.state.focusOnRender && !t.focusOnRender)
                }
            }, {
                key: "moveFocus", value: function (e) {
                    var t = this;
                    this.setState(function (n) {
                        var r = n.selected + e;
                        if (r >= 0 && r < t.props.images.length) {
                            var o = n.offset;
                            return r < n.offset ? o = n.offset - 1 : r >= n.offset + n.imagesToShow && (o = n.offset + 1), {
                                selected: r,
                                focusOnRender: !0,
                                offset: o
                            }
                        }
                    })
                }
            }, {
                key: "componentWillReceiveProps", value: function (e) {
                    this.setState({selected: e.selected || 0, offset: 0})
                }
            }, {
                key: "componentDidUpdate", value: function () {
                    this.state.focusOnRender && (this.items[this.state.selected].focus(), this.scroller.scrollLeft = 0, this.setState({focusOnRender: !1}))
                }
            }, {
                key: "handleKeyDown", value: function (e, t) {
                    if (!e.defaultPrevented) {
                        var n = !1;
                        switch (e.which) {
                            case 37:
                            case 38:
                                this.moveFocus(-1), n = !0;
                                break;
                            case 39:
                            case 40:
                                this.moveFocus(1), n = !0;
                                break;
                            case 32:
                            case 13:
                                this.handleImageSelected(t), n = !0
                        }
                        n && (e.stopPropagation(), e.preventDefault())
                    }
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.props.images;
                    if (!t || !t.length) return null;
                    var n = this.state.imagesToShow, r = t.length, o = {width: 100 / r + "%"}, a = 100 * r / n,
                        i = {width: a + "%", marginLeft: "-" + this.state.offset * (a / r) + "%"};
                    this.items = [];
                    var l = t.map(function (t, n) {
                            return s.default.createElement("li", {
                                key: n,
                                style: o,
                                tabIndex: n === e.state.selected ? 0 : -1,
                                onKeyDown: function (t) {
                                    return e.handleKeyDown(t, n)
                                },
                                onClick: function () {
                                    return e.handleImageSelected(n)
                                },
                                ref: function (t) {
                                    return t ? e.items.push(t) : void 0
                                }
                            }, s.default.createElement("img", {
                                src: t.url,
                                alt: t.alt,
                                className: e.props.onImageSelect ? "selectable" : ""
                            }))
                        }), u = 0 === this.state.offset, c = this.state.imagesToShow + this.state.offset >= r,
                        d = r > this.state.imagesToShow;
                    return s.default.createElement("div", {
                        className: "carousel",
                        role: "region",
                        "aria-label": p.default.get("screenshots"),
                        ref: function (t) {
                            return e.carousel = t
                        },
                        onKeyDown: this.handleGlobalKeyDown
                    }, d && s.default.createElement(g, {
                        type: "prev",
                        label: p.default.get("previousImage"),
                        onClick: this.previousSlide,
                        disabled: u
                    }), s.default.createElement("nav", {
                        className: "scroller", ref: function (t) {
                            return e.scroller = t
                        }
                    }, s.default.createElement("ul", {
                        style: i,
                        onTransitionEnd: h.stopPropagation
                    }, l)), d && s.default.createElement(g, {
                        type: "next",
                        label: p.default.get("nextImage"),
                        onClick: this.nextSlide,
                        disabled: c
                    }), this.props.showProgress && s.default.createElement("div", {
                        className: "progress",
                        role: "alert"
                    }, p.default.get("imageLightBoxProgress").replace(":num", this.state.offset + 1).replace(":total", r)))
                }
            }]), t
        }(s.default.Component), m = function () {
            var e = this;
            this.onWindowResized = function () {
                if (e.carousel) {
                    for (var t = e.carousel.offsetWidth, n = 5, r = 0; r < b.length; r++) if (t < b[r].breakpoint) {
                        n = b[r].imagesToShow;
                        break
                    }
                    e.state.imagesToShow != n && e.setState({imagesToShow: n, offset: 0, selected: 0})
                }
            }, this.handleImageSelected = function (t) {
                e.props.onImageSelect && e.props.onImageSelect(t)
            }, this.previousSlide = function () {
                e.setState(function (e) {
                    var t = e.offset - 1;
                    if (t >= 0) return {offset: t, selected: t}
                })
            }, this.nextSlide = function () {
                e.setState(function (e, t) {
                    var n = e.offset + 1;
                    if (n < t.images.length) return {offset: n, selected: n}
                })
            }, this.handleGlobalKeyDown = function (t) {
                39 === t.which ? e.nextSlide() : 37 === t.which && e.previousSlide()
            }
        }, b = [{breakpoint: 576, imagesToShow: 2}, {breakpoint: 768, imagesToShow: 3}, {breakpoint: 992, imagesToShow: 4}],
        g = function (e) {
            var t = e.onClick, n = e.type, r = e.disabled, o = e.label;
            return s.default.createElement("button", {
                className: "navigation " + n,
                "aria-disabled": r,
                "aria-label": o,
                disabled: r,
                onClick: t
            })
        };
    y.propTypes = {
        onImageSelect: d.default.func,
        imagesToShow: d.default.number,
        showProgress: d.default.bool.isRequired,
        selected: d.default.number,
        images: d.default.arrayOf(d.default.shape({url: h.nonEmptyString, alt: h.nonEmptyString})).isRequired
    }, t.default = y
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), u = n(0), s = r(u), c = n(1), d = r(c), f = n(2), p = r(f);
    n(74);
    var h = function (e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {focusOnRender: !0}, n
        }

        return i(t, e), l(t, [{
            key: "componentWillReceiveProps", value: function (e) {
                e.opened !== this.props.opened && this.setState({focusOnRender: !0})
            }
        }, {
            key: "shouldComponentUpdate", value: function (e, t) {
                return this.state === t
            }
        }, {
            key: "componentDidUpdate", value: function () {
                this.state.focusOnRender && (this.useButton ? this.useButton.focus() : this.installButton.focus()), delete this.state.focusOnRender
            }
        }, {
            key: "render", value: function () {
                var e = this, t = void 0, n = !1, r = this.props.installed && !this.props.installing;
                return this.props.installed && this.props.updatable ? (t = this.props.installing ? "Updating" : "Update", n = this.props.installing) : this.props.installed || (t = this.props.installing ? "Installing" : "Install", n = this.props.installing), s.default.createElement("div", {className: "h5p-hub-content-type-detail-button-bar"}, t && s.default.createElement("button", {
                    type: "button",
                    className: "button button-inverse-primary button-" + t.toLowerCase(),
                    disabled: n,
                    onClick: this.props.installing ? void 0 : this.props.onInstall,
                    ref: function (t) {
                        return e.installButton = t
                    }
                }, p.default.get("contentType" + t + "ButtonLabel")), r && s.default.createElement("button", {
                    type: "button",
                    className: "button button-primary button-use",
                    onClick: this.props.onUse,
                    ref: function (t) {
                        return e.useButton = t
                    }
                }, p.default.get("contentTypeUseButtonLabel")))
            }
        }]), t
    }(s.default.Component);
    h.propTypes = {
        canInstall: d.default.bool.isRequired,
        installed: d.default.bool.isRequired,
        installing: d.default.bool.isRequired,
        updatable: d.default.bool.isRequired,
        onInstall: d.default.func.isRequired,
        onUse: d.default.func.isRequired,
        opened: d.default.bool.isRequired
    }, t.default = h
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), u = n(0), s = r(u), c = n(2), d = r(c);
    n(76);
    var f = function (e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.handleToggle = function (e) {
                e.preventDefault(), n.setState({expanded: !n.state.expanded})
            }, n.handleKeyPress = function (e) {
                32 === e.which && n.handleToggle(e)
            }, n.state = {expanded: !1}, n
        }

        return i(t, e), l(t, [{
            key: "render", value: function () {
                var e = this.props.text;
                if (void 0 === e || 0 === e.length) return null;
                var t = e.length > this.props.maxLength, n = t ? e.substr(0, this.props.maxLength) : e,
                    r = t ? e.substr(this.props.maxLength) : "";
                return t && !this.state.expanded && (n += "…"), s.default.createElement("p", {className: "small"}, s.default.createElement("span", {tabIndex: "-1"}, n), t && [s.default.createElement("span", {
                    key: "part-two",
                    tabIndex: "-1",
                    className: this.state.expanded ? "" : "hidden"
                }, r), s.default.createElement("a", {
                    href: "#",
                    key: "button",
                    className: "link " + (this.state.expanded ? "read-less" : "read-more"),
                    onClick: this.handleToggle,
                    onKeyPress: this.handleKeyPress
                }, d.default.get(this.state.expanded ? "readLess" : "readMore"))])
            }
        }]), t
    }(s.default.Component);
    t.default = f
}, function (e, t) {
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(0), a = r(o), i = n(1), l = r(i), u = n(3), s = r(u), c = n(2), d = r(c), f = function (e) {
        var t = e.throbbing, n = e.details, r = e.onRetry, o = [d.default.get("noContentTypesAvailableDesc")];
        return n && n.title && (o.push(n.title), n.details && (o = o.concat(n.details))), a.default.createElement(s.default, {
            severity: "error",
            title: d.default.get("noContentTypesAvailable"),
            message: o
        }, a.default.createElement("button", {
            type: "button",
            className: "button button-primary retry-button",
            tabIndex: "0",
            onClick: r,
            disabled: t
        }, d.default.get("tryAgain")))
    };
    f.propTypes = {
        throbbing: l.default.bool,
        details: l.default.object,
        onRetry: l.default.func.isRequired
    }, f.defaultProps = {throbbing: !1}, t.default = f
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        if (t) {
            var r = e.libraries.map(function (e) {
                return {contentType: e, score: u(t, e)}
            }).filter(function (t) {
                return t.score > 0 && !l(t.contentType, e.apiVersion)
            });
            return d(r)
        }
        var o = [a[n]];
        if ("recently" === n) if (e.recentlyUsed && e.recentlyUsed.length) {
            for (var i = 0; i < e.recentlyUsed.length; i++) for (var s = e.recentlyUsed[i], c = 0; c < e.libraries.length; c++) {
                var f = e.libraries[c];
                f.machineName === s && (f.recently = i + 1)
            }
            o.push("popularity")
        } else o = ["popularity"]; else "newest" === n && o.splice(0, 0, "installed");
        return d(e.libraries.filter(function (t) {
            return !l(t, e.apiVersion)
        }), o)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r;
    var o = [{name: "title", max: 1e3, min: 100}, {name: "summary", max: 50, min: 25}, {
            name: "description",
            max: 50,
            min: 25
        }, {name: "keywords", max: 50, min: 25}, {name: "machineName", max: 1, min: .5}],
        a = {recently: "recently", newest: "createdAt", "a-to-z": "title"}, i = ["createdAt", "updatedAt"],
        l = function (e, t) {
            var n = !(t.major > e.h5pMajorVersion || t.major === e.h5pMajorVersion && t.minor >= e.h5pMinorVersion);
            return e.restricted || !e.installed && n
        }, u = function (e, t) {
            var n = e.split(" ").filter(function (e) {
                return "" !== e
            }), r = n.map(function (e) {
                return s(e, t)
            });
            return r.indexOf(0) > -1 ? 0 : r.reduce(function (e, t) {
                return e + t
            }, 0)
        }, s = function (e, t) {
            e = e.trim();
            for (var n = 0; n < o.length; n++) {
                var r = o[n], a = c(e, t[r.name], r.max, r.min);
                if (-1 !== a) return a
            }
            return 0
        }, c = function e(t, n, r, o) {
            if (!n) return -1;
            if (n instanceof Array) {
                for (var a = 0; a < n.length; a++) {
                    var i = e(t, n[a], r, o);
                    if (-1 !== i) return i
                }
                return -1
            }
            var l = n.toLowerCase().indexOf(t.toLowerCase());
            return -1 === l ? -1 : (r - o) * ((n.length - l) / n.length) + o
        }, d = t.multiSort = function (e, t) {
            return e.map(function (e) {
                return e.hasOwnProperty("score") && e.hasOwnProperty("contentType") ? e : {contentType: e, score: .1}
            }).sort(function (e, n) {
                return t ? f(e, n, t[0], t.slice(1)) : p(e, n)
            }).map(function (e) {
                return e.contentType
            })
        }, f = function e(t, n, r, o) {
            if (!t.contentType.hasOwnProperty(r)) return 1;
            if (!n.contentType.hasOwnProperty(r)) return -1;
            var a = -1 === i.indexOf(r) ? 1 : -1;
            return t.contentType[r] > n.contentType[r] ? 1 * a : t.contentType[r] < n.contentType[r] ? -1 * a : o.length ? e(t, n, o[0], o.slice(1)) : 0
        }, p = function (e, t) {
            return t.score !== e.score ? t.score - e.score : t.contentType.popularity - e.contentType.popularity
        }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, u = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), s = n(0), c = r(s), d = n(1), f = r(d);
    n(81);
    var p = n(6), h = r(p), y = n(2), m = r(y), b = n(3), g = r(b), v = n(82), C = r(v), w = function (e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.handleErrorDismiss = function () {
                n.setState({error: null})
            }, n.state = {
                fileSelected: !1,
                filePath: "",
                fileUploading: !1,
                error: void 0,
                uploadData: {}
            }, n.handleValidation = n.handleValidation.bind(n), n.handleUpload = n.handleUpload.bind(n), n
        }

        return i(t, e), u(t, [{
            key: "handleValidation", value: function (e) {
                if (this.setState({error: void 0}), 0 !== e.target.files.length) {
                    var t = e.target.files[0].name;
                    "h5p" !== this.getFileExtension(t) ? this.setState({
                        fileSelected: !1,
                        filePath: "",
                        error: {
                            title: m.default.get("h5pFileWrongExtensionTitle"),
                            message: m.default.get("h5pFileWrongExtensionContent")
                        }
                    }) : (this.setState({
                        fileSelected: !0,
                        filePath: t,
                        fileUploading: !1,
                        uploadData: e.target.files[0]
                    }), e.stopPropagation())
                }
            }
        }, {
            key: "handleUpload", value: function () {
                var e = this;
                this.setState({fileSelected: !0, fileUploading: !0});
                var t = new FormData;
                t.append("h5p", this.state.uploadData), t.append("contentId", this.props.contentId), (0, h.default)(this.props.getAjaxUrl("library-upload"), t).then(function (t) {
                    e.props.onUpload(t.data), e.setState({
                        fileSelected: !1,
                        fileUploading: !1,
                        filePath: "",
                        uploadData: {}
                    })
                }).catch(function (t) {
                    e.setState({fileSelected: !1, fileUploading: !1, error: t, filePath: "", uploadData: {}})
                })
            }
        }, {
            key: "getFileExtension", value: function (e) {
                return e.replace(/^.*\./, "")
            }
        }, {
            key: "render", value: function () {
                return c.default.createElement("div", {className: "upload-wrapper"}, !!this.state.error && c.default.createElement(g.default, l({}, this.state.error, {
                    severity: "error",
                    onClose: this.handleErrorDismiss
                })), c.default.createElement("div", {
                    className: "upload-throbber" + (this.state.fileUploading ? "" : " hidden"),
                    "aria-label": m.default.get("uploadingThrobber")
                }), c.default.createElement("h1", {className: "upload-instruction-header"}, m.default.get("uploadInstructionsTitle")), c.default.createElement(C.default, {
                    fileSelected: this.state.fileSelected,
                    fileUploading: this.state.fileUploading,
                    filePath: this.state.filePath,
                    setFocus: this.props.setFocus,
                    onValidate: this.handleValidation,
                    onUpload: this.handleUpload
                }), c.default.createElement("p", {
                    className: "upload-instruction-description",
                    dangerouslySetInnerHTML: {__html: m.default.get("uploadInstructionsContent")}
                }))
            }
        }]), t
    }(c.default.Component);
    w.propTypes = {
        contentId: f.default.number.isRequired,
        onUpload: f.default.func.isRequired,
        getAjaxUrl: f.default.func.isRequired,
        setFocus: f.default.bool.isRequired
    }, t.default = w
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), u = n(0), s = r(u), c = n(1), d = r(c);
    n(83), n(7);
    var f = n(2), p = r(f), h = function (e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.clickFileField = n.clickFileField.bind(n), n.componentDidUpdate = n.componentDidUpdate.bind(n), n
        }

        return i(t, e), l(t, [{
            key: "componentDidUpdate", value: function () {
                this.props.fileSelected ? this.useButton.focus() : this.fileField.value = "", this.props.setFocus && this.uploadButton.focus()
            }
        }, {
            key: "clickFileField", value: function () {
                this.fileField.click()
            }
        }, {
            key: "render", value: function () {
                var e = this;
                return s.default.createElement("div", {className: "upload-form"}, s.default.createElement("input", {
                    className: "upload-path",
                    placeholder: this.props.fileSelected || this.props.fileUploading ? this.props.filePath : p.default.get("uploadPlaceholder"),
                    onClick: this.clickFileField,
                    tabIndex: "-1",
                    disabled: this.props.fileUploading,
                    readOnly: !0
                }), s.default.createElement("button", {
                    type: "button",
                    ref: function (t) {
                        e.useButton = t
                    },
                    className: "button use-button",
                    "aria-hidden": this.props.fileSelected ? "" : "true",
                    disabled: this.props.fileUploading,
                    onClick: this.props.onUpload
                }, p.default.get("contentTypeUseButtonLabel")), s.default.createElement("div", {className: "input-wrapper"}, s.default.createElement("input", {
                    type: "file",
                    accept: ".h5p",
                    "aria-hidden": "true",
                    ref: function (t) {
                        e.fileField = t
                    },
                    onChange: this.props.onValidate
                }), s.default.createElement("button", {
                    type: "button",
                    ref: function (t) {
                        return e.uploadButton = t
                    },
                    className: "button upload-button",
                    onClick: this.clickFileField,
                    disabled: this.props.fileUploading,
                    tabIndex: "0"
                }, this.props.fileSelected ? p.default.get("uploadFileButtonChangeLabel") : p.default.get("uploadFileButtonLabel"))))
            }
        }]), t
    }(s.default.Component);
    h.propTypes = {
        fileSelected: d.default.bool.isRequired,
        fileUploading: d.default.bool.isRequired,
        filePath: d.default.string.isRequired,
        setFocus: d.default.bool.isRequired,
        onValidate: d.default.func.isRequired,
        onUpload: d.default.func.isRequired
    }, t.default = h
}, function (e, t) {
}, function (e, t) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.Eventful = function () {
        return {
            listeners: {}, on: function (e, t, n) {
                var r = {listener: t, scope: n};
                return this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(r), this
            }, trigger: function (e, t) {
                return (this.listeners[e] || []).every(function (e) {
                    return !1 !== e.listener.call(e.scope || this, t)
                })
            }, propagate: function (e, t, n) {
                var r = this;
                e.forEach(function (e) {
                    return t.on(e, function (t) {
                        return r.trigger(n || e, t)
                    })
                })
            }
        }
    }
}]);
