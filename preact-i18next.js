(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('preact')) :
  typeof define === 'function' && define.amd ? define(['exports', 'preact'], factory) :
  (global = global || self, factory(global.PreactI18next = {}, global.preact));
}(this, function (exports, preact) { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var t,
      u,
      r,
      o,
      i = 0,
      c = [],
      f = [],
      e = preact.options.__b,
      a = preact.options.__r,
      v = preact.options.diffed,
      l = preact.options.__c,
      m = preact.options.unmount;

  function d(t, r) {
    preact.options.__h && preact.options.__h(u, t, i || r), i = 0;
    var o = u.__H || (u.__H = {
      __: [],
      __h: []
    });
    return t >= o.__.length && o.__.push({
      __V: f
    }), o.__[t];
  }

  function p(n) {
    return i = 1, y(z, n);
  }

  function y(n, r, o) {
    var i = d(t++, 2);

    if (i.t = n, !i.__c && (i.__ = [o ? o(r) : z(void 0, r), function (n) {
      var t = i.__N ? i.__N[0] : i.__[0],
          u = i.t(t, n);
      t !== u && (i.__N = [u, i.__[1]], i.__c.setState({}));
    }], i.__c = u, !i.__c.u)) {
      i.__c.__H.u = !0;
      var c = i.__c.shouldComponentUpdate;

      i.__c.shouldComponentUpdate = function (n, t, u) {
        var r = i.__c.__H.__.filter(function (n) {
          return n.__c;
        });

        return r.every(function (n) {
          return !n.__N;
        }) ? !c || c(n, t, u) : !r.every(function (n) {
          if (!n.__N) return !0;
          var t = n.__[0];
          return n.__ = n.__N, n.__N = void 0, t === n.__[0];
        }) && (!c || c(n, t, u));
      };
    }

    return i.__N || i.__;
  }

  function _(r, o) {
    var i = d(t++, 3);
    !preact.options.__s && w(i.__H, o) && (i.__ = r, i.o = o, u.__H.__h.push(i));
  }

  function s(n) {
    return i = 5, F(function () {
      return {
        current: n
      };
    }, []);
  }

  function F(n, u) {
    var r = d(t++, 7);
    return w(r.__H, u) ? (r.__V = n(), r.o = u, r.__h = n, r.__V) : r.__;
  }

  function q(n) {
    var r = u.context[n.__c],
        o = d(t++, 9);
    return o.c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__;
  }

  function b() {
    for (var t; t = c.shift();) {
      if (t.__P && t.__H) try {
        t.__H.__h.forEach(j), t.__H.__h.forEach(k), t.__H.__h = [];
      } catch (u) {
        t.__H.__h = [], preact.options.__e(u, t.__v);
      }
    }
  }

  preact.options.__b = function (n) {
    u = null, e && e(n);
  }, preact.options.__r = function (n) {
    a && a(n), t = 0;
    var o = (u = n.__c).__H;
    o && (r === u ? (o.__h = [], u.__h = [], o.__.forEach(function (n) {
      n.__N && (n.__ = n.__N), n.__V = f, n.__N = n.o = void 0;
    })) : (o.__h.forEach(j), o.__h.forEach(k), o.__h = [])), r = u;
  }, preact.options.diffed = function (t) {
    v && v(t);
    var i = t.__c;
    i && i.__H && (i.__H.__h.length && (1 !== c.push(i) && o === preact.options.requestAnimationFrame || ((o = preact.options.requestAnimationFrame) || function (n) {
      var t,
          u = function u() {
        clearTimeout(r), g && cancelAnimationFrame(t), setTimeout(n);
      },
          r = setTimeout(u, 100);

      g && (t = requestAnimationFrame(u));
    })(b)), i.__H.__.forEach(function (n) {
      n.o && (n.__H = n.o), n.__V !== f && (n.__ = n.__V), n.o = void 0, n.__V = f;
    })), r = u = null;
  }, preact.options.__c = function (t, u) {
    u.some(function (t) {
      try {
        t.__h.forEach(j), t.__h = t.__h.filter(function (n) {
          return !n.__ || k(n);
        });
      } catch (r) {
        u.some(function (n) {
          n.__h && (n.__h = []);
        }), u = [], preact.options.__e(r, t.__v);
      }
    }), l && l(t, u);
  }, preact.options.unmount = function (t) {
    m && m(t);
    var u,
        r = t.__c;
    r && r.__H && (r.__H.__.forEach(function (n) {
      try {
        j(n);
      } catch (n) {
        u = n;
      }
    }), u && preact.options.__e(u, r.__v));
  };
  var g = "function" == typeof requestAnimationFrame;

  function j(n) {
    var t = u,
        r = n.__c;
    "function" == typeof r && (n.__c = void 0, r()), u = t;
  }

  function k(n) {
    var t = u;
    n.__c = n.__(), u = t;
  }

  function w(n, t) {
    return !n || n.length !== t.length || t.some(function (t, u) {
      return t !== n[u];
    });
  }

  function z(n, t) {
    return "function" == typeof t ? t(n) : t;
  }

  function S(n, t) {
    for (var e in t) {
      n[e] = t[e];
    }

    return n;
  }

  function g$1(n, t) {
    for (var e in n) {
      if ("__source" !== e && !(e in t)) return !0;
    }

    for (var r in t) {
      if ("__source" !== r && n[r] !== t[r]) return !0;
    }

    return !1;
  }

  function C(n) {
    this.props = n;
  }

  (C.prototype = new preact.Component()).isPureReactComponent = !0, C.prototype.shouldComponentUpdate = function (n, t) {
    return g$1(this.props, n) || g$1(this.state, t);
  };
  var w$1 = preact.options.__b;

  preact.options.__b = function (n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), w$1 && w$1(n);
  };

  var A = preact.options.__e;

  preact.options.__e = function (n, t, e, r) {
    if (n.then) for (var u, o = t; o = o.__;) {
      if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
    }
    A(n, t, e, r);
  };

  var O = preact.options.unmount;

  function T() {
    this.__u = 0, this.t = null, this.__b = null;
  }

  function L(n) {
    var t = n.__.__c;
    return t && t.__a && t.__a(n);
  }

  function D() {
    this.u = null, this.o = null;
  }

  preact.options.unmount = function (n) {
    var t = n.__c;
    t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), O && O(n);
  }, (T.prototype = new preact.Component()).__c = function (n, t) {
    var e = t.__c,
        r = this;
    null == r.t && (r.t = []), r.t.push(e);

    var u = L(r.__v),
        o = !1,
        i = function i() {
      o || (o = !0, e.__R = null, u ? u(l) : l());
    };

    e.__R = i;

    var l = function l() {
      if (! --r.__u) {
        if (r.state.__a) {
          var n = r.state.__a;

          r.__v.__k[0] = function n(t, e, r) {
            return t && (t.__v = null, t.__k = t.__k && t.__k.map(function (t) {
              return n(t, e, r);
            }), t.__c && t.__c.__P === e && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t;
          }(n, n.__c.__P, n.__c.__O);
        }

        var t;

        for (r.setState({
          __a: r.__b = null
        }); t = r.t.pop();) {
          t.forceUpdate();
        }
      }
    },
        f = !0 === t.__h;

    r.__u++ || f || r.setState({
      __a: r.__b = r.__v.__k[0]
    }), n.then(i, i);
  }, T.prototype.componentWillUnmount = function () {
    this.t = [];
  }, T.prototype.render = function (n, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var e = document.createElement("div"),
            r = this.__v.__k[0].__c;

        this.__v.__k[0] = function n(t, e, r) {
          return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function (n) {
            "function" == typeof n.__c && n.__c();
          }), t.__c.__H = null), null != (t = S({}, t)).__c && (t.__c.__P === r && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function (t) {
            return n(t, e, r);
          })), t;
        }(this.__b, e, r.__O = r.__P);
      }

      this.__b = null;
    }

    var u = t.__a && preact.createElement(preact.Fragment, null, n.fallback);
    return u && (u.__h = null), [preact.createElement(preact.Fragment, null, t.__a ? null : n.children), u];
  };

  var F$1 = function F(n, t, e) {
    if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
      for (; e.length > 3;) {
        e.pop()();
      }

      if (e[1] < e[0]) break;
      n.u = e = e[2];
    }
  };

  (D.prototype = new preact.Component()).__a = function (n) {
    var t = this,
        e = L(t.__v),
        r = t.o.get(n);
    return r[0]++, function (u) {
      var o = function o() {
        t.props.revealOrder ? (r.push(u), F$1(t, n, r)) : u();
      };

      e ? e(o) : o();
    };
  }, D.prototype.render = function (n) {
    this.u = null, this.o = new Map();
    var t = preact.toChildArray(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t.reverse();

    for (var e = t.length; e--;) {
      this.o.set(t[e], this.u = [1, 0, this.u]);
    }

    return n.children;
  }, D.prototype.componentDidUpdate = D.prototype.componentDidMount = function () {
    var n = this;
    this.o.forEach(function (t, e) {
      F$1(n, e, t);
    });
  };

  var W = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
      P = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
      $ = "undefined" != typeof document,
      j$1 = function j(n) {
    return ("undefined" != typeof Symbol && "symbol" == _typeof(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(n);
  };

  preact.Component.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (n) {
    Object.defineProperty(preact.Component.prototype, n, {
      configurable: !0,
      get: function get() {
        return this["UNSAFE_" + n];
      },
      set: function set(t) {
        Object.defineProperty(this, n, {
          configurable: !0,
          writable: !0,
          value: t
        });
      }
    });
  });
  var H = preact.options.event;

  function Z() {}

  function Y() {
    return this.cancelBubble;
  }

  function q$1() {
    return this.defaultPrevented;
  }

  preact.options.event = function (n) {
    return H && (n = H(n)), n.persist = Z, n.isPropagationStopped = Y, n.isDefaultPrevented = q$1, n.nativeEvent = n;
  };

  var G,
      J = {
    configurable: !0,
    get: function get() {
      return this.class;
    }
  },
      K = preact.options.vnode;

  preact.options.vnode = function (n) {
    var t = n.type,
        e = n.props,
        r = e;

    if ("string" == typeof t) {
      var u = -1 === t.indexOf("-");

      for (var o in r = {}, e) {
        var i = e[o];
        $ && "children" === o && "noscript" === t || "value" === o && "defaultValue" in e && null == i || ("defaultValue" === o && "value" in e && null == e.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !j$1(e.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : u && P.test(o) ? o = o.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === i && (i = void 0), /^oninput$/i.test(o) && (o = o.toLowerCase(), r[o] && (o = "oninputCapture")), r[o] = i);
      }

      "select" == t && r.multiple && Array.isArray(r.value) && (r.value = preact.toChildArray(e.children).forEach(function (n) {
        n.props.selected = -1 != r.value.indexOf(n.props.value);
      })), "select" == t && null != r.defaultValue && (r.value = preact.toChildArray(e.children).forEach(function (n) {
        n.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(n.props.value) : r.defaultValue == n.props.value;
      })), n.props = r, e.class != e.className && (J.enumerable = "className" in e, null != e.className && (r.class = e.className), Object.defineProperty(r, "className", J));
    }

    n.$$typeof = W, K && K(n);
  };

  var Q = preact.options.__r;

  preact.options.__r = function (n) {
    Q && Q(n), G = n.__c;
  };

  function en(n) {
    return !!n && n.$$typeof === W;
  }

  function rn(n) {
    return en(n) ? preact.cloneElement.apply(null, arguments) : n;
  }

  var voidElements = {
    "area": true,
    "base": true,
    "br": true,
    "col": true,
    "embed": true,
    "hr": true,
    "img": true,
    "input": true,
    "link": true,
    "meta": true,
    "param": true,
    "source": true,
    "track": true,
    "wbr": true
  };

  var t$1 = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;

  function n(n) {
    var r = {
      type: "tag",
      name: "",
      voidElement: !1,
      attrs: {},
      children: []
    },
        i = n.match(/<\/?([^\s]+?)[/\s>]/);

    if (i && (r.name = i[1], (voidElements[i[1]] || "/" === n.charAt(n.length - 2)) && (r.voidElement = !0), r.name.startsWith("!--"))) {
      var s = n.indexOf("--\x3e");
      return {
        type: "comment",
        comment: -1 !== s ? n.slice(4, s) : ""
      };
    }

    for (var a = new RegExp(t$1), c = null; null !== (c = a.exec(n));) {
      if (c[0].trim()) if (c[1]) {
        var o = c[1].trim(),
            l = [o, ""];
        o.indexOf("=") > -1 && (l = o.split("=")), r.attrs[l[0]] = l[1], a.lastIndex--;
      } else c[2] && (r.attrs[c[2]] = c[3].trim().substring(1, c[3].length - 1));
    }

    return r;
  }

  var r$1 = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
      i$1 = /^\s*$/,
      s$1 = Object.create(null);

  function a$1(e, t) {
    switch (t.type) {
      case "text":
        return e + t.content;

      case "tag":
        return e += "<" + t.name + (t.attrs ? function (e) {
          var t = [];

          for (var n in e) {
            t.push(n + '="' + e[n] + '"');
          }

          return t.length ? " " + t.join(" ") : "";
        }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(a$1, "") + "</" + t.name + ">";

      case "comment":
        return e + "\x3c!--" + t.comment + "--\x3e";
    }
  }

  var c$1 = {
    parse: function parse(e, t) {
      t || (t = {}), t.components || (t.components = s$1);
      var a,
          c = [],
          o = [],
          l = -1,
          m = !1;

      if (0 !== e.indexOf("<")) {
        var u = e.indexOf("<");
        c.push({
          type: "text",
          content: -1 === u ? e : e.substring(0, u)
        });
      }

      return e.replace(r$1, function (r, s) {
        if (m) {
          if (r !== "</" + a.name + ">") return;
          m = !1;
        }

        var u,
            f = "/" !== r.charAt(1),
            h = r.startsWith("\x3c!--"),
            p = s + r.length,
            d = e.charAt(p);

        if (h) {
          var v = n(r);
          return l < 0 ? (c.push(v), c) : ((u = o[l]).children.push(v), c);
        }

        if (f && (l++, "tag" === (a = n(r)).type && t.components[a.name] && (a.type = "component", m = !0), a.voidElement || m || !d || "<" === d || a.children.push({
          type: "text",
          content: e.slice(p, e.indexOf("<", p))
        }), 0 === l && c.push(a), (u = o[l - 1]) && u.children.push(a), o[l] = a), (!f || a.voidElement) && (l > -1 && (a.voidElement || a.name === r.slice(2, -1)) && (l--, a = -1 === l ? c : o[l]), !m && "<" !== d && d)) {
          u = -1 === l ? c : o[l].children;
          var x = e.indexOf("<", p),
              g = e.slice(p, -1 === x ? void 0 : x);
          i$1.test(g) && (g = " "), (x > -1 && l + u.length >= 0 || " " !== g) && u.push({
            type: "text",
            content: g
          });
        }
      }), c;
    },
    stringify: function stringify(e) {
      return e.reduce(function (e, t) {
        return e + a$1("", t);
      }, "");
    }
  };

  var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230);/g;
  var htmlEntities = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…'
  };

  var unescapeHtmlEntity = function unescapeHtmlEntity(m) {
    return htmlEntities[m];
  };

  var unescape = function unescape(text) {
    return text.replace(matchHtmlEntity, unescapeHtmlEntity);
  };

  var defaultOptions = {
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transWrapTextNodes: '',
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
    useSuspense: true,
    unescape: unescape
  };
  var i18nInstance;
  var I18nContext = preact.createContext();
  function setDefaults() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    defaultOptions = _objectSpread2(_objectSpread2({}, defaultOptions), options);
  }
  function getDefaults() {
    return defaultOptions;
  }
  var ReportNamespaces = function () {
    function ReportNamespaces() {
      _classCallCheck(this, ReportNamespaces);

      this.usedNamespaces = {};
    }

    _createClass(ReportNamespaces, [{
      key: "addUsedNamespaces",
      value: function addUsedNamespaces(namespaces) {
        var _this = this;

        namespaces.forEach(function (ns) {
          if (!_this.usedNamespaces[ns]) _this.usedNamespaces[ns] = true;
        });
      }
    }, {
      key: "getUsedNamespaces",
      value: function getUsedNamespaces() {
        return Object.keys(this.usedNamespaces);
      }
    }]);

    return ReportNamespaces;
  }();
  function setI18n(instance) {
    i18nInstance = instance;
  }
  function getI18n() {
    return i18nInstance;
  }
  var initReactI18next = {
    type: '3rdParty',
    init: function init(instance) {
      setDefaults(instance.options.react);
      setI18n(instance);
    }
  };
  function composeInitialProps(ForComponent) {
    return function (ctx) {
      return new Promise(function (resolve) {
        var i18nInitialProps = getInitialProps();

        if (ForComponent.getInitialProps) {
          ForComponent.getInitialProps(ctx).then(function (componentsInitialProps) {
            resolve(_objectSpread2(_objectSpread2({}, componentsInitialProps), i18nInitialProps));
          });
        } else {
          resolve(i18nInitialProps);
        }
      });
    };
  }
  function getInitialProps() {
    var i18n = getI18n();
    var namespaces = i18n.reportNamespaces ? i18n.reportNamespaces.getUsedNamespaces() : [];
    var ret = {};
    var initialI18nStore = {};
    i18n.languages.forEach(function (l) {
      initialI18nStore[l] = {};
      namespaces.forEach(function (ns) {
        initialI18nStore[l][ns] = i18n.getResourceBundle(l, ns) || {};
      });
    });
    ret.initialI18nStore = initialI18nStore;
    ret.initialLanguage = i18n.language;
    return ret;
  }

  function warn() {
    if (console && console.warn) {
      var _console;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (typeof args[0] === 'string') args[0] = "react-i18next:: ".concat(args[0]);

      (_console = console).warn.apply(_console, args);
    }
  }
  var alreadyWarned = {};
  function warnOnce() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
    if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
    warn.apply(void 0, args);
  }
  function loadNamespaces(i18n, ns, cb) {
    i18n.loadNamespaces(ns, function () {
      if (i18n.isInitialized) {
        cb();
      } else {
        var initialized = function initialized() {
          setTimeout(function () {
            i18n.off('initialized', initialized);
          }, 0);
          cb();
        };

        i18n.on('initialized', initialized);
      }
    });
  }

  function oldI18nextHasLoadedNamespace(ns, i18n) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var lng = i18n.languages[0];
    var fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
    var lastLng = i18n.languages[i18n.languages.length - 1];
    if (lng.toLowerCase() === 'cimode') return true;

    var loadNotPending = function loadNotPending(l, n) {
      var loadState = i18n.services.backendConnector.state["".concat(l, "|").concat(n)];
      return loadState === -1 || loadState === 2;
    };

    if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns)) return false;
    if (i18n.hasResourceBundle(lng, ns)) return true;
    if (!i18n.services.backendConnector.backend || i18n.options.resources && !i18n.options.partialBundledLanguages) return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
    return false;
  }

  function hasLoadedNamespace(ns, i18n) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!i18n.languages || !i18n.languages.length) {
      warnOnce('i18n.languages were undefined or empty', i18n.languages);
      return true;
    }

    var isNewerI18next = i18n.options.ignoreJSONStructure !== undefined;

    if (!isNewerI18next) {
      return oldI18nextHasLoadedNamespace(ns, i18n, options);
    }

    return i18n.hasLoadedNamespace(ns, {
      precheck: function precheck(i18nInstance, loadNotPending) {
        if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
      }
    });
  }
  function getDisplayName(Component) {
    return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
  }

  var _excluded = ["format"],
      _excluded2 = ["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"];

  function hasChildren(node, checkLength) {
    if (!node) return false;
    var base = node.props ? node.props.children : node.children;
    if (checkLength) return base.length > 0;
    return !!base;
  }

  function getChildren(node) {
    if (!node) return [];
    return node.props ? node.props.children : node.children;
  }

  function hasValidReactChildren(children) {
    if (Object.prototype.toString.call(children) !== '[object Array]') return false;
    return children.every(function (child) {
      return en(child);
    });
  }

  function getAsArray(data) {
    return Array.isArray(data) ? data : [data];
  }

  function mergeProps(source, target) {
    var newTarget = _objectSpread2({}, target);

    newTarget.props = Object.assign(source.props, target.props);
    return newTarget;
  }

  function nodesToString(children, i18nOptions) {
    if (!children) return '';
    var stringNode = '';
    var childrenArray = getAsArray(children);
    var keepArray = i18nOptions.transSupportBasicHtmlNodes && i18nOptions.transKeepBasicHtmlNodesFor ? i18nOptions.transKeepBasicHtmlNodesFor : [];
    childrenArray.forEach(function (child, childIndex) {
      if (typeof child === 'string') {
        stringNode += "".concat(child);
      } else if (en(child)) {
        var childPropsCount = Object.keys(child.props).length;
        var shouldKeepChild = keepArray.indexOf(child.type) > -1;
        var childChildren = child.props.children;

        if (!childChildren && shouldKeepChild && childPropsCount === 0) {
          stringNode += "<".concat(child.type, "/>");
        } else if (!childChildren && (!shouldKeepChild || childPropsCount !== 0)) {
          stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
        } else if (child.props.i18nIsDynamicList) {
          stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
        } else if (shouldKeepChild && childPropsCount === 1 && typeof childChildren === 'string') {
          stringNode += "<".concat(child.type, ">").concat(childChildren, "</").concat(child.type, ">");
        } else {
          var content = nodesToString(childChildren, i18nOptions);
          stringNode += "<".concat(childIndex, ">").concat(content, "</").concat(childIndex, ">");
        }
      } else if (child === null) {
        warn("Trans: the passed in value is invalid - seems you passed in a null child.");
      } else if (_typeof(child) === 'object') {
        var format = child.format,
            clone = _objectWithoutProperties(child, _excluded);

        var keys = Object.keys(clone);

        if (keys.length === 1) {
          var value = format ? "".concat(keys[0], ", ").concat(format) : keys[0];
          stringNode += "{{".concat(value, "}}");
        } else {
          warn("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", child);
        }
      } else {
        warn("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", child);
      }
    });
    return stringNode;
  }

  function renderNodes(children, targetString, i18n, i18nOptions, combinedTOpts, shouldUnescape) {
    if (targetString === '') return [];
    var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
    var emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.join('|')).test(targetString);
    if (!children && !emptyChildrenButNeedsHandling) return [targetString];
    var data = {};

    function getData(childs) {
      var childrenArray = getAsArray(childs);
      childrenArray.forEach(function (child) {
        if (typeof child === 'string') return;
        if (hasChildren(child)) getData(getChildren(child));else if (_typeof(child) === 'object' && !en(child)) Object.assign(data, child);
      });
    }

    getData(children);
    var ast = c$1.parse("<0>".concat(targetString, "</0>"));

    var opts = _objectSpread2(_objectSpread2({}, data), combinedTOpts);

    function renderInner(child, node, rootReactNode) {
      var childs = getChildren(child);
      var mappedChildren = mapAST(childs, node.children, rootReactNode);
      return hasValidReactChildren(childs) && mappedChildren.length === 0 ? childs : mappedChildren;
    }

    function pushTranslatedJSX(child, inner, mem, i, isVoid) {
      if (child.dummy) child.children = inner;
      mem.push(rn(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
        key: i
      }), isVoid ? undefined : inner));
    }

    function mapAST(reactNode, astNode, rootReactNode) {
      var reactNodes = getAsArray(reactNode);
      var astNodes = getAsArray(astNode);
      return astNodes.reduce(function (mem, node, i) {
        var translationContent = node.children && node.children[0] && node.children[0].content && i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);

        if (node.type === 'tag') {
          var tmp = reactNodes[parseInt(node.name, 10)];
          if (!tmp && rootReactNode.length === 1 && rootReactNode[0][node.name]) tmp = rootReactNode[0][node.name];
          if (!tmp) tmp = {};
          var child = Object.keys(node.attrs).length !== 0 ? mergeProps({
            props: node.attrs
          }, tmp) : tmp;
          var isElement = en(child);
          var isValidTranslationWithChildren = isElement && hasChildren(node, true) && !node.voidElement;
          var isEmptyTransWithHTML = emptyChildrenButNeedsHandling && _typeof(child) === 'object' && child.dummy && !isElement;
          var isKnownComponent = _typeof(children) === 'object' && children !== null && Object.hasOwnProperty.call(children, node.name);

          if (typeof child === 'string') {
            var value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
            mem.push(value);
          } else if (hasChildren(child) || isValidTranslationWithChildren) {
            var inner = renderInner(child, node, rootReactNode);
            pushTranslatedJSX(child, inner, mem, i);
          } else if (isEmptyTransWithHTML) {
            var _inner = mapAST(reactNodes, node.children, rootReactNode);

            mem.push(rn(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
              key: i
            }), _inner));
          } else if (Number.isNaN(parseFloat(node.name))) {
            if (isKnownComponent) {
              var _inner2 = renderInner(child, node, rootReactNode);

              pushTranslatedJSX(child, _inner2, mem, i, node.voidElement);
            } else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
              if (node.voidElement) {
                mem.push(preact.createElement(node.name, {
                  key: "".concat(node.name, "-").concat(i)
                }));
              } else {
                var _inner3 = mapAST(reactNodes, node.children, rootReactNode);

                mem.push(preact.createElement(node.name, {
                  key: "".concat(node.name, "-").concat(i)
                }, _inner3));
              }
            } else if (node.voidElement) {
              mem.push("<".concat(node.name, " />"));
            } else {
              var _inner4 = mapAST(reactNodes, node.children, rootReactNode);

              mem.push("<".concat(node.name, ">").concat(_inner4, "</").concat(node.name, ">"));
            }
          } else if (_typeof(child) === 'object' && !isElement) {
            var content = node.children[0] ? translationContent : null;
            if (content) mem.push(content);
          } else if (node.children.length === 1 && translationContent) {
            mem.push(rn(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
              key: i
            }), translationContent));
          } else {
            mem.push(rn(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
              key: i
            })));
          }
        } else if (node.type === 'text') {
          var wrapTextNodes = i18nOptions.transWrapTextNodes;

          var _content = shouldUnescape ? i18nOptions.unescape(i18n.services.interpolator.interpolate(node.content, opts, i18n.language)) : i18n.services.interpolator.interpolate(node.content, opts, i18n.language);

          if (wrapTextNodes) {
            mem.push(preact.createElement(wrapTextNodes, {
              key: "".concat(node.name, "-").concat(i)
            }, _content));
          } else {
            mem.push(_content);
          }
        }

        return mem;
      }, []);
    }

    var result = mapAST([{
      dummy: true,
      children: children || []
    }], ast, getAsArray(children || []));
    return getChildren(result[0]);
  }

  function Trans(_ref) {
    var children = _ref.children,
        count = _ref.count,
        parent = _ref.parent,
        i18nKey = _ref.i18nKey,
        context = _ref.context,
        _ref$tOptions = _ref.tOptions,
        tOptions = _ref$tOptions === void 0 ? {} : _ref$tOptions,
        values = _ref.values,
        defaults = _ref.defaults,
        components = _ref.components,
        ns = _ref.ns,
        i18nFromProps = _ref.i18n,
        tFromProps = _ref.t,
        shouldUnescape = _ref.shouldUnescape,
        additionalProps = _objectWithoutProperties(_ref, _excluded2);

    var _ref2 = q(I18nContext) || {},
        i18nFromContext = _ref2.i18n,
        defaultNSFromContext = _ref2.defaultNS;

    var i18n = i18nFromProps || i18nFromContext || getI18n();

    if (!i18n) {
      warnOnce('You will need to pass in an i18next instance by using i18nextReactModule');
      return children;
    }

    var t = tFromProps || i18n.t.bind(i18n) || function (k) {
      return k;
    };

    if (context) tOptions.context = context;

    var reactI18nextOptions = _objectSpread2(_objectSpread2({}, getDefaults()), i18n.options && i18n.options.react);

    var namespaces = ns || t.ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
    namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
    var defaultValue = defaults || nodesToString(children, reactI18nextOptions) || reactI18nextOptions.transEmptyNodeValue || i18nKey;
    var hashTransKey = reactI18nextOptions.hashTransKey;
    var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
    var interpolationOverride = values ? tOptions.interpolation : {
      interpolation: _objectSpread2(_objectSpread2({}, tOptions.interpolation), {}, {
        prefix: '#$?',
        suffix: '?$#'
      })
    };

    var combinedTOpts = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, tOptions), {}, {
      count: count
    }, values), interpolationOverride), {}, {
      defaultValue: defaultValue,
      ns: namespaces
    });

    var translation = key ? t(key, combinedTOpts) : defaultValue;
    var content = renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts, shouldUnescape);
    var useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent;
    return useAsParent ? preact.createElement(useAsParent, additionalProps, content) : content;
  }

  var usePrevious = function usePrevious(value, ignore) {
    var ref = s();
    _(function () {
      ref.current = ignore ? ref.current : value;
    }, [value, ignore]);
    return ref.current;
  };

  function useTranslation(ns) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var i18nFromProps = props.i18n;

    var _ref = q(I18nContext) || {},
        i18nFromContext = _ref.i18n,
        defaultNSFromContext = _ref.defaultNS;

    var i18n = i18nFromProps || i18nFromContext || getI18n();
    if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();

    if (!i18n) {
      warnOnce('You will need to pass in an i18next instance by using initReactI18next');

      var notReadyT = function notReadyT(k) {
        return Array.isArray(k) ? k[k.length - 1] : k;
      };

      var retNotReady = [notReadyT, {}, false];
      retNotReady.t = notReadyT;
      retNotReady.i18n = {};
      retNotReady.ready = false;
      return retNotReady;
    }

    if (i18n.options.react && i18n.options.react.wait !== undefined) warnOnce('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');

    var i18nOptions = _objectSpread2(_objectSpread2(_objectSpread2({}, getDefaults()), i18n.options.react), props);

    var useSuspense = i18nOptions.useSuspense,
        keyPrefix = i18nOptions.keyPrefix;
    var namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
    namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
    if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces);
    var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function (n) {
      return hasLoadedNamespace(n, i18n, i18nOptions);
    });

    function getT() {
      return i18n.getFixedT(null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
    }

    var _useState = p(getT),
        _useState2 = _slicedToArray(_useState, 2),
        t = _useState2[0],
        setT = _useState2[1];

    var joinedNS = namespaces.join();
    var previousJoinedNS = usePrevious(joinedNS);
    var isMounted = s(true);
    _(function () {
      var bindI18n = i18nOptions.bindI18n,
          bindI18nStore = i18nOptions.bindI18nStore;
      isMounted.current = true;

      if (!ready && !useSuspense) {
        loadNamespaces(i18n, namespaces, function () {
          if (isMounted.current) setT(getT);
        });
      }

      if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
        setT(getT);
      }

      function boundReset() {
        if (isMounted.current) setT(getT);
      }

      if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
      if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset);
      return function () {
        isMounted.current = false;
        if (bindI18n && i18n) bindI18n.split(' ').forEach(function (e) {
          return i18n.off(e, boundReset);
        });
        if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(function (e) {
          return i18n.store.off(e, boundReset);
        });
      };
    }, [i18n, joinedNS]);
    var isInitial = s(true);
    _(function () {
      if (isMounted.current && !isInitial.current) {
        setT(getT);
      }

      isInitial.current = false;
    }, [i18n]);
    var ret = [t, i18n, ready];
    ret.t = t;
    ret.i18n = i18n;
    ret.ready = ready;
    if (ready) return ret;
    if (!ready && !useSuspense) return ret;
    throw new Promise(function (resolve) {
      loadNamespaces(i18n, namespaces, function () {
        resolve();
      });
    });
  }

  var _excluded$1 = ["forwardedRef"];
  function withTranslation(ns) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function Extend(WrappedComponent) {
      function I18nextWithTranslation(_ref) {
        var forwardedRef = _ref.forwardedRef,
            rest = _objectWithoutProperties(_ref, _excluded$1);

        var _useTranslation = useTranslation(ns, _objectSpread2(_objectSpread2({}, rest), {}, {
          keyPrefix: options.keyPrefix
        })),
            _useTranslation2 = _slicedToArray(_useTranslation, 3),
            t = _useTranslation2[0],
            i18n = _useTranslation2[1],
            ready = _useTranslation2[2];

        var passDownProps = _objectSpread2(_objectSpread2({}, rest), {}, {
          t: t,
          i18n: i18n,
          tReady: ready
        });

        if (options.withRef && forwardedRef) {
          passDownProps.ref = forwardedRef;
        } else if (!options.withRef && forwardedRef) {
          passDownProps.forwardedRef = forwardedRef;
        }

        return preact.createElement(WrappedComponent, passDownProps);
      }

      I18nextWithTranslation.displayName = "withI18nextTranslation(".concat(getDisplayName(WrappedComponent), ")");
      I18nextWithTranslation.WrappedComponent = WrappedComponent;

      var forwardRef = function forwardRef(props, ref) {
        return preact.createElement(I18nextWithTranslation, Object.assign({}, props, {
          forwardedRef: ref
        }));
      };

      return options.withRef ? forwardRefReact(forwardRef) : I18nextWithTranslation;
    };
  }

  var _excluded$2 = ["ns", "children"];
  function Translation(props) {
    var ns = props.ns,
        children = props.children,
        options = _objectWithoutProperties(props, _excluded$2);

    var _useTranslation = useTranslation(ns, options),
        _useTranslation2 = _slicedToArray(_useTranslation, 3),
        t = _useTranslation2[0],
        i18n = _useTranslation2[1],
        ready = _useTranslation2[2];

    return children(t, {
      i18n: i18n,
      lng: i18n.language
    }, ready);
  }

  function I18nextProvider(_ref) {
    var i18n = _ref.i18n,
        defaultNS = _ref.defaultNS,
        children = _ref.children;
    var value = F(function () {
      return {
        i18n: i18n,
        defaultNS: defaultNS
      };
    }, [i18n, defaultNS]);
    return preact.createElement(I18nContext.Provider, {
      value: value
    }, children);
  }

  function useSSR(initialI18nStore, initialLanguage) {
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var i18nFromProps = props.i18n;

    var _ref = q(I18nContext) || {},
        i18nFromContext = _ref.i18n;

    var i18n = i18nFromProps || i18nFromContext || getI18n();
    if (i18n.options && i18n.options.isClone) return;

    if (initialI18nStore && !i18n.initializedStoreOnce) {
      i18n.services.resourceStore.data = initialI18nStore;
      i18n.options.ns = Object.values(initialI18nStore).reduce(function (mem, lngResources) {
        Object.keys(lngResources).forEach(function (ns) {
          if (mem.indexOf(ns) < 0) mem.push(ns);
        });
        return mem;
      }, i18n.options.ns);
      i18n.initializedStoreOnce = true;
      i18n.isInitialized = true;
    }

    if (initialLanguage && !i18n.initializedLanguageOnce) {
      i18n.changeLanguage(initialLanguage);
      i18n.initializedLanguageOnce = true;
    }
  }

  var _excluded$3 = ["initialI18nStore", "initialLanguage"];
  function withSSR() {
    return function Extend(WrappedComponent) {
      function I18nextWithSSR(_ref) {
        var initialI18nStore = _ref.initialI18nStore,
            initialLanguage = _ref.initialLanguage,
            rest = _objectWithoutProperties(_ref, _excluded$3);

        useSSR(initialI18nStore, initialLanguage);
        return preact.createElement(WrappedComponent, _objectSpread2({}, rest));
      }

      I18nextWithSSR.getInitialProps = composeInitialProps(WrappedComponent);
      I18nextWithSSR.displayName = "withI18nextSSR(".concat(getDisplayName(WrappedComponent), ")");
      I18nextWithSSR.WrappedComponent = WrappedComponent;
      return I18nextWithSSR;
    };
  }

  var date = function date() {
    return '';
  };
  var time = function time() {
    return '';
  };
  var number = function number() {
    return '';
  };
  var select = function select() {
    return '';
  };
  var plural = function plural() {
    return '';
  };
  var selectOrdinal = function selectOrdinal() {
    return '';
  };

  exports.I18nContext = I18nContext;
  exports.I18nextProvider = I18nextProvider;
  exports.Trans = Trans;
  exports.Translation = Translation;
  exports.composeInitialProps = composeInitialProps;
  exports.date = date;
  exports.getDefaults = getDefaults;
  exports.getI18n = getI18n;
  exports.getInitialProps = getInitialProps;
  exports.initReactI18next = initReactI18next;
  exports.number = number;
  exports.plural = plural;
  exports.select = select;
  exports.selectOrdinal = selectOrdinal;
  exports.setDefaults = setDefaults;
  exports.setI18n = setI18n;
  exports.time = time;
  exports.useSSR = useSSR;
  exports.useTranslation = useTranslation;
  exports.withSSR = withSSR;
  exports.withTranslation = withTranslation;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
