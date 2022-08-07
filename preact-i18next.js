/* eslint-disable array-callback-return */
/* eslint-disable no-void */
/* eslint-disable no-cond-assign */
/* eslint-disable prefer-template */
/* eslint-disable no-multi-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable eqeqeq */
/* eslint-disable quotes */
/* eslint-disable no-shadow */
/* eslint-disable vars-on-top */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable yoda */
/* eslint-disable one-var */
/* eslint-disable no-var */
/* eslint-disable no-return-assign */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('preact'))
    : // @ts-ignore
    typeof define === 'function' && define.amd
    ? define(['exports', 'preact'], factory)
    : // @ts-ignore
      ((global = global || self), factory((global.PreactI18next = {}), global.preact));
})(this, function (exports, preact) {
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          // @ts-ignore
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _typeof(obj) {
    '@babel/helpers - typeof';

    if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj &&
          typeof Symbol === 'function' &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true,
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
    return (
      _arrayWithHoles(arr) ||
      _iterableToArrayLimit(arr, i) ||
      _unsupportedIterableToArray(arr, i) ||
      _nonIterableRest()
    );
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr && ((typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator']);

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
        if (!_n && _i.return != null) _i.return();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === 'Object' && o.constructor) n = o.constructor.name;
    if (n === 'Map' || n === 'Set') return Array.from(o);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError(
      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }

  var t,
    u,
    r,
    o = 0,
    i = [],
    c = preact.options.__b,
    f = preact.options.__r,
    e = preact.options.diffed,
    a = preact.options.__c,
    v = preact.options.unmount;

  function m(t, r) {
    preact.options.__h && preact.options.__h(u, t, o || r), (o = 0);
    var i =
      u.__H ||
      (u.__H = {
        __: [],
        __h: [],
      });
    return t >= i.__.length && i.__.push({}), i.__[t];
  }

  function l(n) {
    return (o = 1), p(w, n);
  }

  function p(n, r, o) {
    var i = m(t++, 2);
    return (
      (i.t = n),
      i.__c ||
        ((i.__ = [
          o ? o(r) : w(void 0, r),
          function (n) {
            var t = i.t(i.__[0], n);
            i.__[0] !== t && ((i.__ = [t, i.__[1]]), i.__c.setState({}));
          },
        ]),
        (i.__c = u)),
      i.__
    );
  }

  function y(r, o) {
    var i = m(t++, 3);
    !preact.options.__s && k(i.__H, o) && ((i.__ = r), (i.__H = o), u.__H.__h.push(i));
  }

  function s(n) {
    return (
      (o = 5),
      d(function () {
        return {
          current: n,
        };
      }, [])
    );
  }

  function d(n, u) {
    var r = m(t++, 7);
    return k(r.__H, u) && ((r.__ = n()), (r.__H = u), (r.__h = n)), r.__;
  }

  function F(n) {
    var r = u.context[n.__c],
      o = m(t++, 9);
    return (o.__c = n), r ? (null == o.__ && ((o.__ = !0), r.sub(u)), r.props.value) : n.__;
  }

  function x() {
    i.forEach(function (t) {
      if (t.__P)
        try {
          t.__H.__h.forEach(g), t.__H.__h.forEach(j), (t.__H.__h = []);
        } catch (u) {
          (t.__H.__h = []), preact.options.__e(u, t.__v);
        }
    }),
      (i = []);
  }

  (preact.options.__b = function (n) {
    (u = null), c && c(n);
  }),
    (preact.options.__r = function (n) {
      f && f(n), (t = 0);
      var r = (u = n.__c).__H;
      r && (r.__h.forEach(g), r.__h.forEach(j), (r.__h = []));
    }),
    (preact.options.diffed = function (t) {
      e && e(t);
      var o = t.__c;
      o &&
        o.__H &&
        o.__H.__h.length &&
        ((1 !== i.push(o) && r === preact.options.requestAnimationFrame) ||
          (
            (r = preact.options.requestAnimationFrame) ||
            function (n) {
              var t,
                u = function u() {
                  clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(n);
                },
                r = setTimeout(u, 100);

              b && (t = requestAnimationFrame(u));
            }
          )(x)),
        (u = void 0);
    }),
    (preact.options.__c = function (t, u) {
      u.some(function (t) {
        try {
          t.__h.forEach(g),
            (t.__h = t.__h.filter(function (n) {
              return !n.__ || j(n);
            }));
        } catch (r) {
          u.some(function (n) {
            n.__h && (n.__h = []);
          }),
            (u = []),
            preact.options.__e(r, t.__v);
        }
      }),
        a && a(t, u);
    }),
    (preact.options.unmount = function (t) {
      v && v(t);
      var u = t.__c;
      if (u && u.__H)
        try {
          u.__H.__.forEach(g);
        } catch (t) {
          preact.options.__e(t, u.__v);
        }
    });
  var b = 'function' == typeof requestAnimationFrame;

  function g(n) {
    var t = u;
    'function' == typeof n.__c && n.__c(), (u = t);
  }

  function j(n) {
    var t = u;
    (n.__c = n.__()), (u = t);
  }

  function k(n, t) {
    return (
      !n ||
      n.length !== t.length ||
      t.some(function (t, u) {
        return t !== n[u];
      })
    );
  }

  function w(n, t) {
    return 'function' == typeof t ? t(n) : t;
  }

  function C(n, t) {
    for (var e in t) {
      n[e] = t[e];
    }

    return n;
  }

  function S(n, t) {
    for (var e in n) {
      if ('__source' !== e && !(e in t)) return !0;
    }

    for (var r in t) {
      if ('__source' !== r && n[r] !== t[r]) return !0;
    }

    return !1;
  }

  function E(n) {
    this.props = n;
  }

  ((E.prototype = new preact.Component()).isPureReactComponent = !0),
    (E.prototype.shouldComponentUpdate = function (n, t) {
      return S(this.props, n) || S(this.state, t);
    });
  var w$1 = preact.options.__b;

  preact.options.__b = function (n) {
    n.type && n.type.__f && n.ref && ((n.props.ref = n.ref), (n.ref = null)), w$1 && w$1(n);
  };

  var R = ('undefined' != typeof Symbol && Symbol.for && Symbol.for('react.forward_ref')) || 3911;

  function x$1(n) {
    function t(t, e) {
      var r = C({}, t);
      return (
        delete r.ref,
        n(r, (e = t.ref || e) && ('object' != _typeof(e) || 'current' in e) ? e : null)
      );
    }

    return (
      (t.$$typeof = R),
      (t.render = t),
      (t.prototype.isReactComponent = t.__f = !0),
      (t.displayName = 'ForwardRef(' + (n.displayName || n.name) + ')'),
      t
    );
  }

  var A = preact.options.__e;

  function O() {
    (this.__u = 0), (this.t = null), (this.__b = null);
  }

  function L(n) {
    var t = n.__.__c;
    return t && t.__e && t.__e(n);
  }

  function D() {
    (this.o = null), (this.u = null);
  }

  (preact.options.__e = function (n, t, e) {
    if (n.then)
      for (var r, o = t; (o = o.__); ) {
        if ((r = o.__c) && r.__c)
          return null == t.__e && ((t.__e = e.__e), (t.__k = e.__k)), r.__c(n, t);
      }
    A(n, t, e);
  }),
    ((O.prototype = new preact.Component()).__c = function (n, t) {
      var e = t.__c,
        r = this;
      null == r.t && (r.t = []), r.t.push(e);

      var o = L(r.__v),
        u = !1,
        i = function i() {
          u || ((u = !0), (e.componentWillUnmount = e.__c), o ? o(f) : f());
        };

      (e.__c = e.componentWillUnmount),
        (e.componentWillUnmount = function () {
          i(), e.__c && e.__c();
        });

      var f = function f() {
          if (!--r.__u) {
            if (r.state.__e) {
              var n = r.state.__e;

              r.__v.__k[0] = (function n(t, e, r) {
                return (
                  t &&
                    ((t.__v = null),
                    (t.__k =
                      t.__k &&
                      t.__k.map(function (t) {
                        return n(t, e, r);
                      })),
                    t.__c &&
                      t.__c.__P === e &&
                      (t.__e && r.insertBefore(t.__e, t.__d), (t.__c.__e = !0), (t.__c.__P = r))),
                  t
                );
              })(n, n.__c.__P, n.__c.__O);
            }

            var t;

            for (
              r.setState({
                __e: (r.__b = null),
              });
              (t = r.t.pop());

            ) {
              t.forceUpdate();
            }
          }
        },
        c = !0 === t.__h;

      r.__u++ ||
        c ||
        r.setState({
          __e: (r.__b = r.__v.__k[0]),
        }),
        n.then(i, i);
    }),
    (O.prototype.componentWillUnmount = function () {
      this.t = [];
    }),
    (O.prototype.render = function (n, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var e = document.createElement('div'),
            r = this.__v.__k[0].__c;

          this.__v.__k[0] = (function n(t, e, r) {
            return (
              t &&
                (t.__c &&
                  t.__c.__H &&
                  (t.__c.__H.__.forEach(function (n) {
                    'function' == typeof n.__c && n.__c();
                  }),
                  (t.__c.__H = null)),
                null != (t = C({}, t)).__c && (t.__c.__P === r && (t.__c.__P = e), (t.__c = null)),
                (t.__k =
                  t.__k &&
                  t.__k.map(function (t) {
                    return n(t, e, r);
                  }))),
              t
            );
          })(this.__b, e, (r.__O = r.__P));
        }

        this.__b = null;
      }

      var o = t.__e && preact.createElement(preact.Fragment, null, n.fallback);
      return (
        o && (o.__h = null),
        [preact.createElement(preact.Fragment, null, t.__e ? null : n.children), o]
      );
    });

  var F$1 = function F(n, t, e) {
    if (
      (++e[1] === e[0] && n.u.delete(t),
      n.props.revealOrder && ('t' !== n.props.revealOrder[0] || !n.u.size))
    )
      for (e = n.o; e; ) {
        for (; e.length > 3; ) {
          e.pop()();
        }

        if (e[1] < e[0]) break;
        n.o = e = e[2];
      }
  };

  ((D.prototype = new preact.Component()).__e = function (n) {
    var t = this,
      e = L(t.__v),
      r = t.u.get(n);
    return (
      r[0]++,
      function (o) {
        var u = function u() {
          t.props.revealOrder ? (r.push(o), F$1(t, n, r)) : o();
        };

        e ? e(u) : u();
      }
    );
  }),
    (D.prototype.render = function (n) {
      (this.o = null), (this.u = new Map());
      var t = preact.toChildArray(n.children);
      n.revealOrder && 'b' === n.revealOrder[0] && t.reverse();

      for (var e = t.length; e--; ) {
        this.u.set(t[e], (this.o = [1, 0, this.o]));
      }

      return n.children;
    }),
    (D.prototype.componentDidUpdate = D.prototype.componentDidMount = function () {
      var n = this;
      this.u.forEach(function (t, e) {
        F$1(n, e, t);
      });
    });

  var I = ('undefined' != typeof Symbol && Symbol.for && Symbol.for('react.element')) || 60103,
    W = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    P = function P(n) {
      return ('undefined' != typeof Symbol && 'symbol' == _typeof(Symbol())
        ? /fil|che|rad/i
        : /fil|che|ra/i
      ).test(n);
    };

  (preact.Component.prototype.isReactComponent = {}),
    ['componentWillMount', 'componentWillReceiveProps', 'componentWillUpdate'].forEach(function (
      n,
    ) {
      Object.defineProperty(preact.Component.prototype, n, {
        configurable: !0,
        get: function get() {
          return this['UNSAFE_' + n];
        },
        set: function set(t) {
          Object.defineProperty(this, n, {
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    });
  var V = preact.options.event;

  function H() {}

  function Z() {
    return this.cancelBubble;
  }

  function Y() {
    return this.defaultPrevented;
  }

  preact.options.event = function (n) {
    return (
      V && (n = V(n)),
      (n.persist = H),
      (n.isPropagationStopped = Z),
      (n.isDefaultPrevented = Y),
      (n.nativeEvent = n)
    );
  };

  var $,
    q = {
      configurable: !0,
      get: function get() {
        return this.class;
      },
    },
    G = preact.options.vnode;

  preact.options.vnode = function (n) {
    var t = n.type,
      e = n.props,
      r = e;

    if ('string' == typeof t) {
      for (var o in ((r = {}), e)) {
        var u = e[o];
        'defaultValue' === o && 'value' in e && null == e.value
          ? (o = 'value')
          : 'download' === o && !0 === u
          ? (u = '')
          : /ondoubleclick/i.test(o)
          ? (o = 'ondblclick')
          : /^onchange(textarea|input)/i.test(o + t) && !P(e.type)
          ? (o = 'oninput')
          : /^on(Ani|Tra|Tou|BeforeInp)/.test(o)
          ? (o = o.toLowerCase())
          : W.test(o)
          ? (o = o.replace(/[A-Z0-9]/, '-$&').toLowerCase())
          : null === u && (u = void 0),
          (r[o] = u);
      }

      'select' == t &&
        r.multiple &&
        Array.isArray(r.value) &&
        (r.value = preact.toChildArray(e.children).forEach(function (n) {
          n.props.selected = -1 != r.value.indexOf(n.props.value);
        })),
        'select' == t &&
          null != r.defaultValue &&
          (r.value = preact.toChildArray(e.children).forEach(function (n) {
            n.props.selected = r.multiple
              ? -1 != r.defaultValue.indexOf(n.props.value)
              : r.defaultValue == n.props.value;
          })),
        (n.props = r);
    }

    t &&
      e.class != e.className &&
      ((q.enumerable = 'className' in e),
      null != e.className && (r.class = e.className),
      Object.defineProperty(r, 'className', q)),
      (n.$$typeof = I),
      G && G(n);
  };

  var J = preact.options.__r;

  preact.options.__r = function (n) {
    J && J(n), ($ = n.__c);
  };

  var on =
    'object' == (typeof performance === 'undefined' ? 'undefined' : _typeof(performance)) &&
    'function' == typeof performance.now
      ? performance.now.bind(performance)
      : function () {
          return Date.now();
        };

  function cn(n) {
    return !!n && n.$$typeof === I;
  }

  function ln(n) {
    return cn(n) ? preact.cloneElement.apply(null, arguments) : n;
  }

  var voidElements = {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    menuitem: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true,
  };

  var attrRE = /([\w-]+)|=|(['"])([.\s\S]*?)\2/g;

  var parseTag = function (tag) {
    var i = 0;
    var key;
    var expectingValueAfterEquals = true;
    var res = {
      type: 'tag',
      name: '',
      voidElement: false,
      attrs: {},
      children: [],
    };
    tag.replace(attrRE, function (match) {
      if (match === '=') {
        expectingValueAfterEquals = true;
        i++;
        return;
      }

      if (!expectingValueAfterEquals) {
        if (key) {
          res.attrs[key] = key;
        }

        key = match;
      } else if (i === 0) {
        if (voidElements[match] || tag.charAt(tag.length - 2) === '/') {
          res.voidElement = true;
        }

        res.name = match;
      } else {
        res.attrs[key] = match.replace(/^['"]|['"]$/g, '');
        key = undefined;
      }

      i++;
      expectingValueAfterEquals = false;
    });
    return res;
  };

  var tagRE = /(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g;

  var empty = Object.create ? Object.create(null) : {};

  function pushTextNode(list, html, level, start, ignoreWhitespace) {
    var end = html.indexOf('<', start);
    var content = html.slice(start, end === -1 ? undefined : end);

    if (/^\s*$/.test(content)) {
      content = ' ';
    }

    if ((!ignoreWhitespace && end > -1 && level + list.length >= 0) || content !== ' ') {
      list.push({
        type: 'text',
        content,
      });
    }
  }

  var parse = function parse(html, options) {
    options || (options = {});
    options.components || (options.components = empty);
    var result = [];
    var current;
    var level = -1;
    var arr = [];
    var byTag = {};
    var inComponent = false;
    html.replace(tagRE, function (tag, index) {
      if (inComponent) {
        if (tag !== '</' + current.name + '>') {
          return;
        }
        inComponent = false;
      }

      var isOpen = tag.charAt(1) !== '/';
      var isComment = tag.indexOf('<!--') === 0;
      var start = index + tag.length;
      var nextChar = html.charAt(start);
      var parent;

      if (isOpen && !isComment) {
        level++;
        current = parseTag(tag);

        if (current.type === 'tag' && options.components[current.name]) {
          current.type = 'component';
          inComponent = true;
        }

        if (!current.voidElement && !inComponent && nextChar && nextChar !== '<') {
          pushTextNode(current.children, html, level, start, options.ignoreWhitespace);
        }

        byTag[current.tagName] = current;

        if (level === 0) {
          result.push(current);
        }

        parent = arr[level - 1];

        if (parent) {
          parent.children.push(current);
        }

        arr[level] = current;
      }

      if (isComment || !isOpen || current.voidElement) {
        if (!isComment) {
          level--;
        }

        if (!inComponent && nextChar !== '<' && nextChar) {
          parent = level === -1 ? result : arr[level].children;
          pushTextNode(parent, html, level, start, options.ignoreWhitespace);
        }
      }
    });

    if (!result.length && html.length) {
      pushTextNode(result, html, 0, 0, options.ignoreWhitespace);
    }

    return result;
  };

  function attrString(attrs) {
    var buff = [];

    for (var key in attrs) {
      buff.push(key + '="' + attrs[key] + '"');
    }

    if (!buff.length) {
      return '';
    }

    return ' ' + buff.join(' ');
  }

  function stringify(buff, doc) {
    switch (doc.type) {
      case 'text':
        return buff + doc.content;

      case 'tag':
        buff +=
          '<' +
          doc.name +
          (doc.attrs ? attrString(doc.attrs) : '') +
          (doc.voidElement ? '/>' : '>');

        if (doc.voidElement) {
          return buff;
        }

        return buff + doc.children.reduce(stringify, '') + '</' + doc.name + '>';
    }
  }

  var stringify_1 = function (doc) {
    return doc.reduce(function (token, rootEl) {
      return token + stringify('', rootEl);
    }, '');
  };

  var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
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
    unescape,
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
  var ReportNamespaces = (function () {
    function ReportNamespaces() {
      _classCallCheck(this, ReportNamespaces);

      this.usedNamespaces = {};
    }

    _createClass(ReportNamespaces, [
      {
        key: 'addUsedNamespaces',
        value: function addUsedNamespaces(namespaces) {
          var _this = this;

          namespaces.forEach(function (ns) {
            if (!_this.usedNamespaces[ns]) _this.usedNamespaces[ns] = true;
          });
        },
      },
      {
        key: 'getUsedNamespaces',
        value: function getUsedNamespaces() {
          return Object.keys(this.usedNamespaces);
        },
      },
    ]);

    return ReportNamespaces;
  })();
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
    },
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

      if (typeof args[0] === 'string') args[0] = 'react-i18next:: '.concat(args[0]);

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
      var loadState = i18n.services.backendConnector.state[''.concat(l, '|').concat(n)];
      return loadState === -1 || loadState === 2;
    };

    if (
      options.bindI18n &&
      options.bindI18n.indexOf('languageChanging') > -1 &&
      i18n.services.backendConnector.backend &&
      i18n.isLanguageChangingTo &&
      !loadNotPending(i18n.isLanguageChangingTo, ns)
    )
      return false;
    if (i18n.hasResourceBundle(lng, ns)) return true;
    if (
      !i18n.services.backendConnector.backend ||
      (i18n.options.resources && !i18n.options.partialBundledLanguages)
    )
      return true;
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
        if (
          options.bindI18n &&
          options.bindI18n.indexOf('languageChanging') > -1 &&
          i18nInstance.services.backendConnector.backend &&
          i18nInstance.isLanguageChangingTo &&
          !loadNotPending(i18nInstance.isLanguageChangingTo, ns)
        )
          return false;
      },
    });
  }
  function getDisplayName(Component) {
    return (
      Component.displayName ||
      Component.name ||
      (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown')
    );
  }

  var _excluded = ['format'],
    _excluded2 = [
      'children',
      'count',
      'parent',
      'i18nKey',
      'context',
      'tOptions',
      'values',
      'defaults',
      'components',
      'ns',
      'i18n',
      't',
      'shouldUnescape',
    ];

  function hasChildren(node, checkLength) {
    if (!node) return false;
    var base = node.props ? node.props.children : node.children;
    if (checkLength) return base.length > 0;
    return !!base;
  }

  function getChildren(node) {
    if (!node) return [];
    return node && node.children ? node.children : node.props && node.props.children;
  }

  function hasValidReactChildren(children) {
    if (Object.prototype.toString.call(children) !== '[object Array]') return false;
    return children.every(function (child) {
      return cn(child);
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
    var keepArray =
      i18nOptions.transSupportBasicHtmlNodes && i18nOptions.transKeepBasicHtmlNodesFor
        ? i18nOptions.transKeepBasicHtmlNodesFor
        : [];
    childrenArray.forEach(function (child, childIndex) {
      if (typeof child === 'string') {
        stringNode += ''.concat(child);
      } else if (cn(child)) {
        var childPropsCount = Object.keys(child.props).length;
        var shouldKeepChild = keepArray.indexOf(child.type) > -1;
        var childChildren = child.props.children;

        if (!childChildren && shouldKeepChild && childPropsCount === 0) {
          stringNode += '<'.concat(child.type, '/>');
        } else if (!childChildren && (!shouldKeepChild || childPropsCount !== 0)) {
          stringNode += '<'.concat(childIndex, '></').concat(childIndex, '>');
        } else if (child.props.i18nIsDynamicList) {
          stringNode += '<'.concat(childIndex, '></').concat(childIndex, '>');
        } else if (shouldKeepChild && childPropsCount === 1 && typeof childChildren === 'string') {
          stringNode += '<'
            .concat(child.type, '>')
            .concat(childChildren, '</')
            .concat(child.type, '>');
        } else {
          var content = nodesToString(childChildren, i18nOptions);
          stringNode += '<'.concat(childIndex, '>').concat(content, '</').concat(childIndex, '>');
        }
      } else if (child === null) {
        warn('Trans: the passed in value is invalid - seems you passed in a null child.');
      } else if (_typeof(child) === 'object') {
        var { format } = child,
          clone = _objectWithoutProperties(child, _excluded);

        var keys = Object.keys(clone);

        if (keys.length === 1) {
          var value = format ? ''.concat(keys[0], ', ').concat(format) : keys[0];
          stringNode += '{{'.concat(value, '}}');
        } else {
          warn(
            'react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.',
            child,
          );
        }
      } else {
        warn(
          'Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.',
          child,
        );
      }
    });
    return stringNode;
  }

  function renderNodes(children, targetString, i18n, i18nOptions, combinedTOpts, shouldUnescape) {
    if (targetString === '') return [];
    var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
    var emptyChildrenButNeedsHandling =
      targetString && new RegExp(keepArray.join('|')).test(targetString);
    if (!children && !emptyChildrenButNeedsHandling) return [targetString];
    var data = {};

    function getData(childs) {
      var childrenArray = getAsArray(childs);
      childrenArray.forEach(function (child) {
        if (typeof child === 'string') return;
        if (hasChildren(child)) getData(getChildren(child));
        else if (_typeof(child) === 'object' && !cn(child)) Object.assign(data, child);
      });
    }

    getData(children);
    var ast = c.parse('<0>'.concat(targetString, '</0>'));

    var opts = _objectSpread2(_objectSpread2({}, data), combinedTOpts);

    function renderInner(child, node, rootReactNode) {
      var childs = getChildren(child);
      var mappedChildren = mapAST(childs, node.children, rootReactNode);
      return hasValidReactChildren(childs) && mappedChildren.length === 0 ? childs : mappedChildren;
    }

    function pushTranslatedJSX(child, inner, mem, i, isVoid) {
      if (child.dummy) child.children = inner;
      mem.push(
        ln(
          child,
          _objectSpread2(
            _objectSpread2({}, child.props),
            {},
            {
              key: i,
            },
          ),
          isVoid ? undefined : inner,
        ),
      );
    }

    function mapAST(reactNode, astNode, rootReactNode) {
      var reactNodes = getAsArray(reactNode);
      var astNodes = getAsArray(astNode);
      return astNodes.reduce(function (mem, node, i) {
        var translationContent =
          node.children &&
          node.children[0] &&
          node.children[0].content &&
          i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);

        if (node.type === 'tag') {
          var tmp = reactNodes[parseInt(node.name, 10)];
          if (!tmp && rootReactNode.length === 1 && rootReactNode[0][node.name])
            tmp = rootReactNode[0][node.name];
          if (!tmp) tmp = {};
          var child =
            Object.keys(node.attrs).length !== 0
              ? mergeProps(
                  {
                    props: node.attrs,
                  },
                  tmp,
                )
              : tmp;
          var isElement = cn(child);
          var isValidTranslationWithChildren =
            isElement && hasChildren(node, true) && !node.voidElement;
          var isEmptyTransWithHTML =
            emptyChildrenButNeedsHandling &&
            _typeof(child) === 'object' &&
            child.dummy &&
            !isElement;
          var isKnownComponent =
            _typeof(children) === 'object' &&
            children !== null &&
            Object.hasOwnProperty.call(children, node.name);

          if (typeof child === 'string') {
            var value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
            mem.push(value);
          } else if (hasChildren(child) || isValidTranslationWithChildren) {
            var inner = renderInner(child, node, rootReactNode);
            pushTranslatedJSX(child, inner, mem, i);
          } else if (isEmptyTransWithHTML) {
            var _inner = mapAST(reactNodes, node.children, rootReactNode);

            mem.push(
              ln(
                child,
                _objectSpread2(
                  _objectSpread2({}, child.props),
                  {},
                  {
                    key: i,
                  },
                ),
                _inner,
              ),
            );
          } else if (Number.isNaN(parseFloat(node.name))) {
            if (isKnownComponent) {
              var _inner2 = renderInner(child, node, rootReactNode);

              pushTranslatedJSX(child, _inner2, mem, i, node.voidElement);
            } else if (
              i18nOptions.transSupportBasicHtmlNodes &&
              keepArray.indexOf(node.name) > -1
            ) {
              if (node.voidElement) {
                mem.push(
                  preact.createElement(node.name, {
                    key: ''.concat(node.name, '-').concat(i),
                  }),
                );
              } else {
                var _inner3 = mapAST(reactNodes, node.children, rootReactNode);

                mem.push(
                  preact.createElement(
                    node.name,
                    {
                      key: ''.concat(node.name, '-').concat(i),
                    },
                    _inner3,
                  ),
                );
              }
            } else if (node.voidElement) {
              mem.push('<'.concat(node.name, ' />'));
            } else {
              var _inner4 = mapAST(reactNodes, node.children, rootReactNode);

              mem.push('<'.concat(node.name, '>').concat(_inner4, '</').concat(node.name, '>'));
            }
          } else if (_typeof(child) === 'object' && !isElement) {
            var content = node.children[0] ? translationContent : null;
            if (content) mem.push(content);
          } else if (node.children.length === 1 && translationContent) {
            mem.push(
              ln(
                child,
                _objectSpread2(
                  _objectSpread2({}, child.props),
                  {},
                  {
                    key: i,
                  },
                ),
                translationContent,
              ),
            );
          } else {
            mem.push(
              ln(
                child,
                _objectSpread2(
                  _objectSpread2({}, child.props),
                  {},
                  {
                    key: i,
                  },
                ),
              ),
            );
          }
        } else if (node.type === 'text') {
          var wrapTextNodes = i18nOptions.transWrapTextNodes;

          var _content = shouldUnescape
            ? i18nOptions.unescape(
                i18n.services.interpolator.interpolate(node.content, opts, i18n.language),
              )
            : i18n.services.interpolator.interpolate(node.content, opts, i18n.language);

          if (wrapTextNodes) {
            mem.push(
              preact.createElement(
                wrapTextNodes,
                {
                  key: ''.concat(node.name, '-').concat(i),
                },
                _content,
              ),
            );
          } else {
            mem.push(_content);
          }
        }

        return mem;
      }, []);
    }

    var result = mapAST(
      [
        {
          dummy: true,
          children: children || [],
        },
      ],
      ast,
      getAsArray(children || []),
    );
    return getChildren(result[0]);
  }

  function Trans(_ref) {
    var { children } = _ref,
      { count } = _ref,
      { parent } = _ref,
      { i18nKey } = _ref,
      { context } = _ref,
      _ref$tOptions = _ref.tOptions,
      tOptions = _ref$tOptions === void 0 ? {} : _ref$tOptions,
      { values } = _ref,
      { defaults } = _ref,
      { components } = _ref,
      { ns } = _ref,
      i18nFromProps = _ref.i18n,
      tFromProps = _ref.t,
      { shouldUnescape } = _ref,
      additionalProps = _objectWithoutProperties(_ref, _excluded2);

    var _ref2 = F(I18nContext) || {},
      i18nFromContext = _ref2.i18n,
      defaultNSFromContext = _ref2.defaultNS;

    var i18n = i18nFromProps || i18nFromContext || getI18n();

    if (!i18n) {
      warnOnce('You will need to pass in an i18next instance by using i18nextReactModule');
      return children;
    }

    var t =
      tFromProps ||
      i18n.t.bind(i18n) ||
      function (k) {
        return k;
      };

    if (context) tOptions.context = context;

    var reactI18nextOptions = _objectSpread2(
      _objectSpread2({}, getDefaults()),
      i18n.options && i18n.options.react,
    );

    var namespaces = ns || t.ns || defaultNSFromContext || (i18n.options && i18n.options.defaultNS);
    namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
    var defaultValue =
      defaults ||
      nodesToString(children, reactI18nextOptions) ||
      reactI18nextOptions.transEmptyNodeValue ||
      i18nKey;
    var { hashTransKey } = reactI18nextOptions;
    var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
    var interpolationOverride = values
      ? tOptions.interpolation
      : {
          interpolation: _objectSpread2(
            _objectSpread2({}, tOptions.interpolation),
            {},
            {
              prefix: '#$?',
              suffix: '?$#',
            },
          ),
        };

    var combinedTOpts = _objectSpread2(
      _objectSpread2(
        _objectSpread2(
          _objectSpread2({}, tOptions),
          {},
          {
            count,
          },
          values,
        ),
        interpolationOverride,
      ),
      {},
      {
        defaultValue,
        ns: namespaces,
      },
    );

    var translation = key ? t(key, combinedTOpts) : defaultValue;
    var content = renderNodes(
      components || children,
      translation,
      i18n,
      reactI18nextOptions,
      combinedTOpts,
      shouldUnescape,
    );
    var useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent;
    return useAsParent ? preact.createElement(useAsParent, additionalProps, content) : content;
  }

  function useTranslation(ns) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var i18nFromProps = props.i18n;

    var _ref = F(I18nContext) || {},
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

    if (i18n.options.react && i18n.options.react.wait !== undefined)
      warnOnce(
        'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
      );

    var i18nOptions = _objectSpread2(
      _objectSpread2(_objectSpread2({}, getDefaults()), i18n.options.react),
      props,
    );

    var { useSuspense } = i18nOptions,
      { keyPrefix } = i18nOptions;
    var namespaces = ns || defaultNSFromContext || (i18n.options && i18n.options.defaultNS);
    namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
    if (i18n.reportNamespaces.addUsedNamespaces)
      i18n.reportNamespaces.addUsedNamespaces(namespaces);
    var ready =
      (i18n.isInitialized || i18n.initializedStoreOnce) &&
      namespaces.every(function (n) {
        return hasLoadedNamespace(n, i18n, i18nOptions);
      });

    function getT() {
      return i18n.getFixedT(
        null,
        i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0],
        keyPrefix,
      );
    }

    var _useState = l(getT()),
      _useState2 = _slicedToArray(_useState, 2),
      t = _useState2[0],
      setT = _useState2[1];

    var isMounted = s(true);
    y(
      function () {
        var { bindI18n } = i18nOptions,
          { bindI18nStore } = i18nOptions;
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
          if (bindI18n && i18n)
            bindI18n.split(' ').forEach(function (e) {
              return i18n.off(e, boundReset);
            });
          if (bindI18nStore && i18n)
            bindI18nStore.split(' ').forEach(function (e) {
              return i18n.store.off(e, boundReset);
            });
        };
      },
      [i18n, joinedNS],
    );
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

  var _excluded$1 = ['forwardedRef'];
  function withTranslation(ns) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function Extend(WrappedComponent) {
      function I18nextWithTranslation(_ref) {
        var { forwardedRef } = _ref,
          rest = _objectWithoutProperties(_ref, _excluded$1);

        var _useTranslation = useTranslation(
            ns,
            _objectSpread2(
              _objectSpread2({}, rest),
              {},
              {
                keyPrefix: options.keyPrefix,
              },
            ),
          ),
          _useTranslation2 = _slicedToArray(_useTranslation, 3),
          t = _useTranslation2[0],
          i18n = _useTranslation2[1],
          ready = _useTranslation2[2];

        var passDownProps = _objectSpread2(
          _objectSpread2({}, rest),
          {},
          {
            t,
            i18n,
            tReady: ready,
          },
        );

        if (options.withRef && forwardedRef) {
          passDownProps.ref = forwardedRef;
        } else if (!options.withRef && forwardedRef) {
          passDownProps.forwardedRef = forwardedRef;
        }

        return preact.createElement(WrappedComponent, passDownProps);
      }

      I18nextWithTranslation.displayName = 'withI18nextTranslation('.concat(
        getDisplayName(WrappedComponent),
        ')',
      );
      I18nextWithTranslation.WrappedComponent = WrappedComponent;

      var forwardRef = function forwardRef(props, ref) {
        return preact.createElement(I18nextWithTranslation, { ...props, forwardedRef: ref });
      };

      return options.withRef ? x$1(forwardRef) : I18nextWithTranslation;
    };
  }

  var _excluded$2 = ['ns', 'children'];
  function Translation(props) {
    var { ns } = props,
      { children } = props,
      options = _objectWithoutProperties(props, _excluded$2);

    var _useTranslation = useTranslation(ns, options),
      _useTranslation2 = _slicedToArray(_useTranslation, 3),
      t = _useTranslation2[0],
      i18n = _useTranslation2[1],
      ready = _useTranslation2[2];

    return children(
      t,
      {
        i18n,
        lng: i18n.language,
      },
      ready,
    );
  }

  function I18nextProvider(_ref) {
    var { i18n } = _ref,
      { defaultNS } = _ref,
      { children } = _ref;
    var value = d(
      function () {
        return {
          i18n,
          defaultNS,
        };
      },
      [i18n, defaultNS],
    );
    return preact.createElement(
      I18nContext.Provider,
      {
        value,
      },
      children,
    );
  }

  function useSSR(initialI18nStore, initialLanguage) {
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var i18nFromProps = props.i18n;

    var _ref = F(I18nContext) || {},
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

  var _excluded$3 = ['initialI18nStore', 'initialLanguage'];
  function withSSR() {
    return function Extend(WrappedComponent) {
      function I18nextWithSSR(_ref) {
        var { initialI18nStore } = _ref,
          { initialLanguage } = _ref,
          rest = _objectWithoutProperties(_ref, _excluded$3);

        useSSR(initialI18nStore, initialLanguage);
        return preact.createElement(WrappedComponent, _objectSpread2({}, rest));
      }

      I18nextWithSSR.getInitialProps = composeInitialProps(WrappedComponent);
      I18nextWithSSR.displayName = 'withI18nextSSR('.concat(getDisplayName(WrappedComponent), ')');
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
});
