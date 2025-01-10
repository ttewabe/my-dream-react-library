import {
    _ as Cu,
    a as ft,
    b as he,
    c as Eu,
    d as zn,
} from './chunk-XP5HYGXS-BGCqD1aY.js';
import {
    n as gu,
    c as Fu,
    y as yu,
    l as De,
    g as Gn,
    z as xu,
    o as Bu,
    j as $n,
    Y as Yn,
    a as _t,
    B as vu,
} from './index-CHGET4sZ.js';
import { R as yt, r as tt } from './index-BpYrhlGc.js';
const { logger: kt } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
    {
        defaultDecorateStory: _u,
        addons: Su,
        useEffect: bu,
    } = __STORYBOOK_MODULE_PREVIEW_API__;
var wu = he({
        '../../node_modules/react-is/cjs/react-is.development.js'(e) {
            (function () {
                var t = typeof Symbol == 'function' && Symbol.for,
                    n = t ? Symbol.for('react.element') : 60103,
                    r = t ? Symbol.for('react.portal') : 60106,
                    i = t ? Symbol.for('react.fragment') : 60107,
                    o = t ? Symbol.for('react.strict_mode') : 60108,
                    s = t ? Symbol.for('react.profiler') : 60114,
                    l = t ? Symbol.for('react.provider') : 60109,
                    p = t ? Symbol.for('react.context') : 60110,
                    d = t ? Symbol.for('react.async_mode') : 60111,
                    D = t ? Symbol.for('react.concurrent_mode') : 60111,
                    y = t ? Symbol.for('react.forward_ref') : 60112,
                    C = t ? Symbol.for('react.suspense') : 60113,
                    E = t ? Symbol.for('react.suspense_list') : 60120,
                    m = t ? Symbol.for('react.memo') : 60115,
                    g = t ? Symbol.for('react.lazy') : 60116,
                    T = t ? Symbol.for('react.block') : 60121,
                    k = t ? Symbol.for('react.fundamental') : 60117,
                    v = t ? Symbol.for('react.responder') : 60118,
                    R = t ? Symbol.for('react.scope') : 60119;
                function _(N) {
                    return (
                        typeof N == 'string' ||
                        typeof N == 'function' ||
                        N === i ||
                        N === D ||
                        N === s ||
                        N === o ||
                        N === C ||
                        N === E ||
                        (typeof N == 'object' &&
                            N !== null &&
                            (N.$$typeof === g ||
                                N.$$typeof === m ||
                                N.$$typeof === l ||
                                N.$$typeof === p ||
                                N.$$typeof === y ||
                                N.$$typeof === k ||
                                N.$$typeof === v ||
                                N.$$typeof === R ||
                                N.$$typeof === T))
                    );
                }
                function x(N) {
                    if (typeof N == 'object' && N !== null) {
                        var se = N.$$typeof;
                        switch (se) {
                            case n:
                                var W = N.type;
                                switch (W) {
                                    case d:
                                    case D:
                                    case i:
                                    case s:
                                    case o:
                                    case C:
                                        return W;
                                    default:
                                        var Ne = W && W.$$typeof;
                                        switch (Ne) {
                                            case p:
                                            case y:
                                            case g:
                                            case m:
                                            case l:
                                                return Ne;
                                            default:
                                                return se;
                                        }
                                }
                            case r:
                                return se;
                        }
                    }
                }
                var F = d,
                    B = D,
                    b = p,
                    I = l,
                    q = n,
                    U = y,
                    z = i,
                    G = g,
                    ee = m,
                    de = r,
                    pe = s,
                    Ae = o,
                    te = C,
                    Ee = !1;
                function Re(N) {
                    return (
                        Ee ||
                            ((Ee = !0),
                            console.warn(
                                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
                            )),
                        be(N) || x(N) === d
                    );
                }
                function be(N) {
                    return x(N) === D;
                }
                function S(N) {
                    return x(N) === p;
                }
                function j(N) {
                    return x(N) === l;
                }
                function J(N) {
                    return (
                        typeof N == 'object' && N !== null && N.$$typeof === n
                    );
                }
                function H(N) {
                    return x(N) === y;
                }
                function M(N) {
                    return x(N) === i;
                }
                function X(N) {
                    return x(N) === g;
                }
                function Q(N) {
                    return x(N) === m;
                }
                function ne(N) {
                    return x(N) === r;
                }
                function ie(N) {
                    return x(N) === s;
                }
                function le(N) {
                    return x(N) === o;
                }
                function Z(N) {
                    return x(N) === C;
                }
                (e.AsyncMode = F),
                    (e.ConcurrentMode = B),
                    (e.ContextConsumer = b),
                    (e.ContextProvider = I),
                    (e.Element = q),
                    (e.ForwardRef = U),
                    (e.Fragment = z),
                    (e.Lazy = G),
                    (e.Memo = ee),
                    (e.Portal = de),
                    (e.Profiler = pe),
                    (e.StrictMode = Ae),
                    (e.Suspense = te),
                    (e.isAsyncMode = Re),
                    (e.isConcurrentMode = be),
                    (e.isContextConsumer = S),
                    (e.isContextProvider = j),
                    (e.isElement = J),
                    (e.isForwardRef = H),
                    (e.isFragment = M),
                    (e.isLazy = X),
                    (e.isMemo = Q),
                    (e.isPortal = ne),
                    (e.isProfiler = ie),
                    (e.isStrictMode = le),
                    (e.isSuspense = Z),
                    (e.isValidElementType = _),
                    (e.typeOf = x);
            })();
        },
    }),
    vr = he({
        '../../node_modules/react-is/index.js'(e, t) {
            t.exports = wu();
        },
    }),
    Tu = he({
        '../../node_modules/object-assign/index.js'(e, t) {
            var n = Object.getOwnPropertySymbols,
                r = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable;
            function o(l) {
                if (l == null)
                    throw new TypeError(
                        'Object.assign cannot be called with null or undefined'
                    );
                return Object(l);
            }
            function s() {
                try {
                    if (!Object.assign) return !1;
                    var l = new String('abc');
                    if (
                        ((l[5] = 'de'),
                        Object.getOwnPropertyNames(l)[0] === '5')
                    )
                        return !1;
                    for (var p = {}, d = 0; d < 10; d++)
                        p['_' + String.fromCharCode(d)] = d;
                    var D = Object.getOwnPropertyNames(p).map(function (C) {
                        return p[C];
                    });
                    if (D.join('') !== '0123456789') return !1;
                    var y = {};
                    return (
                        'abcdefghijklmnopqrst'.split('').forEach(function (C) {
                            y[C] = C;
                        }),
                        Object.keys(Object.assign({}, y)).join('') ===
                            'abcdefghijklmnopqrst'
                    );
                } catch {
                    return !1;
                }
            }
            t.exports = s()
                ? Object.assign
                : function (l, p) {
                      for (
                          var d, D = o(l), y, C = 1;
                          C < arguments.length;
                          C++
                      ) {
                          d = Object(arguments[C]);
                          for (var E in d) r.call(d, E) && (D[E] = d[E]);
                          if (n) {
                              y = n(d);
                              for (var m = 0; m < y.length; m++)
                                  i.call(d, y[m]) && (D[y[m]] = d[y[m]]);
                          }
                      }
                      return D;
                  };
        },
    }),
    _r = he({
        '../../node_modules/prop-types/lib/ReactPropTypesSecret.js'(e, t) {
            var n = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
            t.exports = n;
        },
    }),
    Sr = he({
        '../../node_modules/prop-types/lib/has.js'(e, t) {
            t.exports = Function.call.bind(Object.prototype.hasOwnProperty);
        },
    }),
    ku = he({
        '../../node_modules/prop-types/checkPropTypes.js'(e, t) {
            var n = function () {};
            (r = _r()),
                (i = {}),
                (o = Sr()),
                (n = function (l) {
                    var p = 'Warning: ' + l;
                    typeof console < 'u' && console.error(p);
                    try {
                        throw new Error(p);
                    } catch {}
                });
            var r, i, o;
            function s(l, p, d, D, y) {
                for (var C in l)
                    if (o(l, C)) {
                        var E;
                        try {
                            if (typeof l[C] != 'function') {
                                var m = Error(
                                    (D || 'React class') +
                                        ': ' +
                                        d +
                                        ' type `' +
                                        C +
                                        '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                                        typeof l[C] +
                                        '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                                );
                                throw ((m.name = 'Invariant Violation'), m);
                            }
                            E = l[C](p, C, D, d, null, r);
                        } catch (T) {
                            E = T;
                        }
                        if (
                            (E &&
                                !(E instanceof Error) &&
                                n(
                                    (D || 'React class') +
                                        ': type specification of ' +
                                        d +
                                        ' `' +
                                        C +
                                        '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                                        typeof E +
                                        '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
                                ),
                            E instanceof Error && !(E.message in i))
                        ) {
                            i[E.message] = !0;
                            var g = y ? y() : '';
                            n(
                                'Failed ' +
                                    d +
                                    ' type: ' +
                                    E.message +
                                    (g ?? '')
                            );
                        }
                    }
            }
            (s.resetWarningCache = function () {
                i = {};
            }),
                (t.exports = s);
        },
    }),
    Pu = he({
        '../../node_modules/prop-types/factoryWithTypeCheckers.js'(e, t) {
            var n = vr(),
                r = Tu(),
                i = _r(),
                o = Sr(),
                s = ku(),
                l = function () {};
            l = function (d) {
                var D = 'Warning: ' + d;
                typeof console < 'u' && console.error(D);
                try {
                    throw new Error(D);
                } catch {}
            };
            function p() {
                return null;
            }
            t.exports = function (d, D) {
                var y = typeof Symbol == 'function' && Symbol.iterator,
                    C = '@@iterator';
                function E(S) {
                    var j = S && ((y && S[y]) || S[C]);
                    if (typeof j == 'function') return j;
                }
                var m = '<<anonymous>>',
                    g = {
                        array: R('array'),
                        bigint: R('bigint'),
                        bool: R('boolean'),
                        func: R('function'),
                        number: R('number'),
                        object: R('object'),
                        string: R('string'),
                        symbol: R('symbol'),
                        any: _(),
                        arrayOf: x,
                        element: F(),
                        elementType: B(),
                        instanceOf: b,
                        node: z(),
                        objectOf: q,
                        oneOf: I,
                        oneOfType: U,
                        shape: ee,
                        exact: de,
                    };
                function T(S, j) {
                    return S === j
                        ? S !== 0 || 1 / S === 1 / j
                        : S !== S && j !== j;
                }
                function k(S, j) {
                    (this.message = S),
                        (this.data = j && typeof j == 'object' ? j : {}),
                        (this.stack = '');
                }
                k.prototype = Error.prototype;
                function v(S) {
                    var j = {},
                        J = 0;
                    function H(X, Q, ne, ie, le, Z, N) {
                        if (((ie = ie || m), (Z = Z || ne), N !== i)) {
                            if (D) {
                                var se = new Error(
                                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
                                );
                                throw ((se.name = 'Invariant Violation'), se);
                            } else if (typeof console < 'u') {
                                var W = ie + ':' + ne;
                                !j[W] &&
                                    J < 3 &&
                                    (l(
                                        'You are manually calling a React.PropTypes validation function for the `' +
                                            Z +
                                            '` prop on `' +
                                            ie +
                                            '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.'
                                    ),
                                    (j[W] = !0),
                                    J++);
                            }
                        }
                        return Q[ne] == null
                            ? X
                                ? Q[ne] === null
                                    ? new k(
                                          'The ' +
                                              le +
                                              ' `' +
                                              Z +
                                              '` is marked as required ' +
                                              ('in `' +
                                                  ie +
                                                  '`, but its value is `null`.')
                                      )
                                    : new k(
                                          'The ' +
                                              le +
                                              ' `' +
                                              Z +
                                              '` is marked as required in ' +
                                              ('`' +
                                                  ie +
                                                  '`, but its value is `undefined`.')
                                      )
                                : null
                            : S(Q, ne, ie, le, Z);
                    }
                    var M = H.bind(null, !1);
                    return (M.isRequired = H.bind(null, !0)), M;
                }
                function R(S) {
                    function j(J, H, M, X, Q, ne) {
                        var ie = J[H],
                            le = te(ie);
                        if (le !== S) {
                            var Z = Ee(ie);
                            return new k(
                                'Invalid ' +
                                    X +
                                    ' `' +
                                    Q +
                                    '` of type ' +
                                    ('`' +
                                        Z +
                                        '` supplied to `' +
                                        M +
                                        '`, expected ') +
                                    ('`' + S + '`.'),
                                { expectedType: S }
                            );
                        }
                        return null;
                    }
                    return v(j);
                }
                function _() {
                    return v(p);
                }
                function x(S) {
                    function j(J, H, M, X, Q) {
                        if (typeof S != 'function')
                            return new k(
                                'Property `' +
                                    Q +
                                    '` of component `' +
                                    M +
                                    '` has invalid PropType notation inside arrayOf.'
                            );
                        var ne = J[H];
                        if (!Array.isArray(ne)) {
                            var ie = te(ne);
                            return new k(
                                'Invalid ' +
                                    X +
                                    ' `' +
                                    Q +
                                    '` of type ' +
                                    ('`' +
                                        ie +
                                        '` supplied to `' +
                                        M +
                                        '`, expected an array.')
                            );
                        }
                        for (var le = 0; le < ne.length; le++) {
                            var Z = S(ne, le, M, X, Q + '[' + le + ']', i);
                            if (Z instanceof Error) return Z;
                        }
                        return null;
                    }
                    return v(j);
                }
                function F() {
                    function S(j, J, H, M, X) {
                        var Q = j[J];
                        if (!d(Q)) {
                            var ne = te(Q);
                            return new k(
                                'Invalid ' +
                                    M +
                                    ' `' +
                                    X +
                                    '` of type ' +
                                    ('`' +
                                        ne +
                                        '` supplied to `' +
                                        H +
                                        '`, expected a single ReactElement.')
                            );
                        }
                        return null;
                    }
                    return v(S);
                }
                function B() {
                    function S(j, J, H, M, X) {
                        var Q = j[J];
                        if (!n.isValidElementType(Q)) {
                            var ne = te(Q);
                            return new k(
                                'Invalid ' +
                                    M +
                                    ' `' +
                                    X +
                                    '` of type ' +
                                    ('`' +
                                        ne +
                                        '` supplied to `' +
                                        H +
                                        '`, expected a single ReactElement type.')
                            );
                        }
                        return null;
                    }
                    return v(S);
                }
                function b(S) {
                    function j(J, H, M, X, Q) {
                        if (!(J[H] instanceof S)) {
                            var ne = S.name || m,
                                ie = be(J[H]);
                            return new k(
                                'Invalid ' +
                                    X +
                                    ' `' +
                                    Q +
                                    '` of type ' +
                                    ('`' +
                                        ie +
                                        '` supplied to `' +
                                        M +
                                        '`, expected ') +
                                    ('instance of `' + ne + '`.')
                            );
                        }
                        return null;
                    }
                    return v(j);
                }
                function I(S) {
                    if (!Array.isArray(S))
                        return (
                            arguments.length > 1
                                ? l(
                                      'Invalid arguments supplied to oneOf, expected an array, got ' +
                                          arguments.length +
                                          ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                                  )
                                : l(
                                      'Invalid argument supplied to oneOf, expected an array.'
                                  ),
                            p
                        );
                    function j(J, H, M, X, Q) {
                        for (var ne = J[H], ie = 0; ie < S.length; ie++)
                            if (T(ne, S[ie])) return null;
                        var le = JSON.stringify(S, function (Z, N) {
                            var se = Ee(N);
                            return se === 'symbol' ? String(N) : N;
                        });
                        return new k(
                            'Invalid ' +
                                X +
                                ' `' +
                                Q +
                                '` of value `' +
                                String(ne) +
                                '` ' +
                                ('supplied to `' +
                                    M +
                                    '`, expected one of ' +
                                    le +
                                    '.')
                        );
                    }
                    return v(j);
                }
                function q(S) {
                    function j(J, H, M, X, Q) {
                        if (typeof S != 'function')
                            return new k(
                                'Property `' +
                                    Q +
                                    '` of component `' +
                                    M +
                                    '` has invalid PropType notation inside objectOf.'
                            );
                        var ne = J[H],
                            ie = te(ne);
                        if (ie !== 'object')
                            return new k(
                                'Invalid ' +
                                    X +
                                    ' `' +
                                    Q +
                                    '` of type ' +
                                    ('`' +
                                        ie +
                                        '` supplied to `' +
                                        M +
                                        '`, expected an object.')
                            );
                        for (var le in ne)
                            if (o(ne, le)) {
                                var Z = S(ne, le, M, X, Q + '.' + le, i);
                                if (Z instanceof Error) return Z;
                            }
                        return null;
                    }
                    return v(j);
                }
                function U(S) {
                    if (!Array.isArray(S))
                        return (
                            l(
                                'Invalid argument supplied to oneOfType, expected an instance of array.'
                            ),
                            p
                        );
                    for (var j = 0; j < S.length; j++) {
                        var J = S[j];
                        if (typeof J != 'function')
                            return (
                                l(
                                    'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                                        Re(J) +
                                        ' at index ' +
                                        j +
                                        '.'
                                ),
                                p
                            );
                    }
                    function H(M, X, Q, ne, ie) {
                        for (var le = [], Z = 0; Z < S.length; Z++) {
                            var N = S[Z],
                                se = N(M, X, Q, ne, ie, i);
                            if (se == null) return null;
                            se.data &&
                                o(se.data, 'expectedType') &&
                                le.push(se.data.expectedType);
                        }
                        var W =
                            le.length > 0
                                ? ', expected one of type [' +
                                  le.join(', ') +
                                  ']'
                                : '';
                        return new k(
                            'Invalid ' +
                                ne +
                                ' `' +
                                ie +
                                '` supplied to ' +
                                ('`' + Q + '`' + W + '.')
                        );
                    }
                    return v(H);
                }
                function z() {
                    function S(j, J, H, M, X) {
                        return pe(j[J])
                            ? null
                            : new k(
                                  'Invalid ' +
                                      M +
                                      ' `' +
                                      X +
                                      '` supplied to ' +
                                      ('`' + H + '`, expected a ReactNode.')
                              );
                    }
                    return v(S);
                }
                function G(S, j, J, H, M) {
                    return new k(
                        (S || 'React class') +
                            ': ' +
                            j +
                            ' type `' +
                            J +
                            '.' +
                            H +
                            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                            M +
                            '`.'
                    );
                }
                function ee(S) {
                    function j(J, H, M, X, Q) {
                        var ne = J[H],
                            ie = te(ne);
                        if (ie !== 'object')
                            return new k(
                                'Invalid ' +
                                    X +
                                    ' `' +
                                    Q +
                                    '` of type `' +
                                    ie +
                                    '` ' +
                                    ('supplied to `' +
                                        M +
                                        '`, expected `object`.')
                            );
                        for (var le in S) {
                            var Z = S[le];
                            if (typeof Z != 'function')
                                return G(M, X, Q, le, Ee(Z));
                            var N = Z(ne, le, M, X, Q + '.' + le, i);
                            if (N) return N;
                        }
                        return null;
                    }
                    return v(j);
                }
                function de(S) {
                    function j(J, H, M, X, Q) {
                        var ne = J[H],
                            ie = te(ne);
                        if (ie !== 'object')
                            return new k(
                                'Invalid ' +
                                    X +
                                    ' `' +
                                    Q +
                                    '` of type `' +
                                    ie +
                                    '` ' +
                                    ('supplied to `' +
                                        M +
                                        '`, expected `object`.')
                            );
                        var le = r({}, J[H], S);
                        for (var Z in le) {
                            var N = S[Z];
                            if (o(S, Z) && typeof N != 'function')
                                return G(M, X, Q, Z, Ee(N));
                            if (!N)
                                return new k(
                                    'Invalid ' +
                                        X +
                                        ' `' +
                                        Q +
                                        '` key `' +
                                        Z +
                                        '` supplied to `' +
                                        M +
                                        '`.\nBad object: ' +
                                        JSON.stringify(J[H], null, '  ') +
                                        `
Valid keys: ` +
                                        JSON.stringify(
                                            Object.keys(S),
                                            null,
                                            '  '
                                        )
                                );
                            var se = N(ne, Z, M, X, Q + '.' + Z, i);
                            if (se) return se;
                        }
                        return null;
                    }
                    return v(j);
                }
                function pe(S) {
                    switch (typeof S) {
                        case 'number':
                        case 'string':
                        case 'undefined':
                            return !0;
                        case 'boolean':
                            return !S;
                        case 'object':
                            if (Array.isArray(S)) return S.every(pe);
                            if (S === null || d(S)) return !0;
                            var j = E(S);
                            if (j) {
                                var J = j.call(S),
                                    H;
                                if (j !== S.entries) {
                                    for (; !(H = J.next()).done; )
                                        if (!pe(H.value)) return !1;
                                } else
                                    for (; !(H = J.next()).done; ) {
                                        var M = H.value;
                                        if (M && !pe(M[1])) return !1;
                                    }
                            } else return !1;
                            return !0;
                        default:
                            return !1;
                    }
                }
                function Ae(S, j) {
                    return S === 'symbol'
                        ? !0
                        : j
                          ? j['@@toStringTag'] === 'Symbol' ||
                            (typeof Symbol == 'function' && j instanceof Symbol)
                          : !1;
                }
                function te(S) {
                    var j = typeof S;
                    return Array.isArray(S)
                        ? 'array'
                        : S instanceof RegExp
                          ? 'object'
                          : Ae(j, S)
                            ? 'symbol'
                            : j;
                }
                function Ee(S) {
                    if (typeof S > 'u' || S === null) return '' + S;
                    var j = te(S);
                    if (j === 'object') {
                        if (S instanceof Date) return 'date';
                        if (S instanceof RegExp) return 'regexp';
                    }
                    return j;
                }
                function Re(S) {
                    var j = Ee(S);
                    switch (j) {
                        case 'array':
                        case 'object':
                            return 'an ' + j;
                        case 'boolean':
                        case 'date':
                        case 'regexp':
                            return 'a ' + j;
                        default:
                            return j;
                    }
                }
                function be(S) {
                    return !S.constructor || !S.constructor.name
                        ? m
                        : S.constructor.name;
                }
                return (
                    (g.checkPropTypes = s),
                    (g.resetWarningCache = s.resetWarningCache),
                    (g.PropTypes = g),
                    g
                );
            };
        },
    }),
    Iu = he({
        '../../node_modules/prop-types/index.js'(e, t) {
            (n = vr()), (r = !0), (t.exports = Pu()(n.isElement, r));
            var n, r;
        },
    }),
    Ou = he({
        '../../node_modules/html-tags/html-tags.json'(e, t) {
            t.exports = [
                'a',
                'abbr',
                'address',
                'area',
                'article',
                'aside',
                'audio',
                'b',
                'base',
                'bdi',
                'bdo',
                'blockquote',
                'body',
                'br',
                'button',
                'canvas',
                'caption',
                'cite',
                'code',
                'col',
                'colgroup',
                'data',
                'datalist',
                'dd',
                'del',
                'details',
                'dfn',
                'dialog',
                'div',
                'dl',
                'dt',
                'em',
                'embed',
                'fieldset',
                'figcaption',
                'figure',
                'footer',
                'form',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'head',
                'header',
                'hgroup',
                'hr',
                'html',
                'i',
                'iframe',
                'img',
                'input',
                'ins',
                'kbd',
                'label',
                'legend',
                'li',
                'link',
                'main',
                'map',
                'mark',
                'math',
                'menu',
                'menuitem',
                'meta',
                'meter',
                'nav',
                'noscript',
                'object',
                'ol',
                'optgroup',
                'option',
                'output',
                'p',
                'param',
                'picture',
                'pre',
                'progress',
                'q',
                'rb',
                'rp',
                'rt',
                'rtc',
                'ruby',
                's',
                'samp',
                'script',
                'search',
                'section',
                'select',
                'slot',
                'small',
                'source',
                'span',
                'strong',
                'style',
                'sub',
                'summary',
                'sup',
                'svg',
                'table',
                'tbody',
                'td',
                'template',
                'textarea',
                'tfoot',
                'th',
                'thead',
                'time',
                'title',
                'tr',
                'track',
                'u',
                'ul',
                'var',
                'video',
                'wbr',
            ];
        },
    }),
    Ru = he({
        '../../node_modules/html-tags/index.js'(e, t) {
            t.exports = Ou();
        },
    }),
    Lu = he({
        '../../node_modules/estraverse/estraverse.js'(e) {
            (function t(n) {
                var r, i, o, s, l, p;
                function d(x) {
                    var F = {},
                        B,
                        b;
                    for (B in x)
                        x.hasOwnProperty(B) &&
                            ((b = x[B]),
                            typeof b == 'object' && b !== null
                                ? (F[B] = d(b))
                                : (F[B] = b));
                    return F;
                }
                function D(x, F) {
                    var B, b, I, q;
                    for (b = x.length, I = 0; b; )
                        (B = b >>> 1),
                            (q = I + B),
                            F(x[q]) ? (b = B) : ((I = q + 1), (b -= B + 1));
                    return I;
                }
                (r = {
                    AssignmentExpression: 'AssignmentExpression',
                    AssignmentPattern: 'AssignmentPattern',
                    ArrayExpression: 'ArrayExpression',
                    ArrayPattern: 'ArrayPattern',
                    ArrowFunctionExpression: 'ArrowFunctionExpression',
                    AwaitExpression: 'AwaitExpression',
                    BlockStatement: 'BlockStatement',
                    BinaryExpression: 'BinaryExpression',
                    BreakStatement: 'BreakStatement',
                    CallExpression: 'CallExpression',
                    CatchClause: 'CatchClause',
                    ChainExpression: 'ChainExpression',
                    ClassBody: 'ClassBody',
                    ClassDeclaration: 'ClassDeclaration',
                    ClassExpression: 'ClassExpression',
                    ComprehensionBlock: 'ComprehensionBlock',
                    ComprehensionExpression: 'ComprehensionExpression',
                    ConditionalExpression: 'ConditionalExpression',
                    ContinueStatement: 'ContinueStatement',
                    DebuggerStatement: 'DebuggerStatement',
                    DirectiveStatement: 'DirectiveStatement',
                    DoWhileStatement: 'DoWhileStatement',
                    EmptyStatement: 'EmptyStatement',
                    ExportAllDeclaration: 'ExportAllDeclaration',
                    ExportDefaultDeclaration: 'ExportDefaultDeclaration',
                    ExportNamedDeclaration: 'ExportNamedDeclaration',
                    ExportSpecifier: 'ExportSpecifier',
                    ExpressionStatement: 'ExpressionStatement',
                    ForStatement: 'ForStatement',
                    ForInStatement: 'ForInStatement',
                    ForOfStatement: 'ForOfStatement',
                    FunctionDeclaration: 'FunctionDeclaration',
                    FunctionExpression: 'FunctionExpression',
                    GeneratorExpression: 'GeneratorExpression',
                    Identifier: 'Identifier',
                    IfStatement: 'IfStatement',
                    ImportExpression: 'ImportExpression',
                    ImportDeclaration: 'ImportDeclaration',
                    ImportDefaultSpecifier: 'ImportDefaultSpecifier',
                    ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
                    ImportSpecifier: 'ImportSpecifier',
                    Literal: 'Literal',
                    LabeledStatement: 'LabeledStatement',
                    LogicalExpression: 'LogicalExpression',
                    MemberExpression: 'MemberExpression',
                    MetaProperty: 'MetaProperty',
                    MethodDefinition: 'MethodDefinition',
                    ModuleSpecifier: 'ModuleSpecifier',
                    NewExpression: 'NewExpression',
                    ObjectExpression: 'ObjectExpression',
                    ObjectPattern: 'ObjectPattern',
                    PrivateIdentifier: 'PrivateIdentifier',
                    Program: 'Program',
                    Property: 'Property',
                    PropertyDefinition: 'PropertyDefinition',
                    RestElement: 'RestElement',
                    ReturnStatement: 'ReturnStatement',
                    SequenceExpression: 'SequenceExpression',
                    SpreadElement: 'SpreadElement',
                    Super: 'Super',
                    SwitchStatement: 'SwitchStatement',
                    SwitchCase: 'SwitchCase',
                    TaggedTemplateExpression: 'TaggedTemplateExpression',
                    TemplateElement: 'TemplateElement',
                    TemplateLiteral: 'TemplateLiteral',
                    ThisExpression: 'ThisExpression',
                    ThrowStatement: 'ThrowStatement',
                    TryStatement: 'TryStatement',
                    UnaryExpression: 'UnaryExpression',
                    UpdateExpression: 'UpdateExpression',
                    VariableDeclaration: 'VariableDeclaration',
                    VariableDeclarator: 'VariableDeclarator',
                    WhileStatement: 'WhileStatement',
                    WithStatement: 'WithStatement',
                    YieldExpression: 'YieldExpression',
                }),
                    (o = {
                        AssignmentExpression: ['left', 'right'],
                        AssignmentPattern: ['left', 'right'],
                        ArrayExpression: ['elements'],
                        ArrayPattern: ['elements'],
                        ArrowFunctionExpression: ['params', 'body'],
                        AwaitExpression: ['argument'],
                        BlockStatement: ['body'],
                        BinaryExpression: ['left', 'right'],
                        BreakStatement: ['label'],
                        CallExpression: ['callee', 'arguments'],
                        CatchClause: ['param', 'body'],
                        ChainExpression: ['expression'],
                        ClassBody: ['body'],
                        ClassDeclaration: ['id', 'superClass', 'body'],
                        ClassExpression: ['id', 'superClass', 'body'],
                        ComprehensionBlock: ['left', 'right'],
                        ComprehensionExpression: ['blocks', 'filter', 'body'],
                        ConditionalExpression: [
                            'test',
                            'consequent',
                            'alternate',
                        ],
                        ContinueStatement: ['label'],
                        DebuggerStatement: [],
                        DirectiveStatement: [],
                        DoWhileStatement: ['body', 'test'],
                        EmptyStatement: [],
                        ExportAllDeclaration: ['source'],
                        ExportDefaultDeclaration: ['declaration'],
                        ExportNamedDeclaration: [
                            'declaration',
                            'specifiers',
                            'source',
                        ],
                        ExportSpecifier: ['exported', 'local'],
                        ExpressionStatement: ['expression'],
                        ForStatement: ['init', 'test', 'update', 'body'],
                        ForInStatement: ['left', 'right', 'body'],
                        ForOfStatement: ['left', 'right', 'body'],
                        FunctionDeclaration: ['id', 'params', 'body'],
                        FunctionExpression: ['id', 'params', 'body'],
                        GeneratorExpression: ['blocks', 'filter', 'body'],
                        Identifier: [],
                        IfStatement: ['test', 'consequent', 'alternate'],
                        ImportExpression: ['source'],
                        ImportDeclaration: ['specifiers', 'source'],
                        ImportDefaultSpecifier: ['local'],
                        ImportNamespaceSpecifier: ['local'],
                        ImportSpecifier: ['imported', 'local'],
                        Literal: [],
                        LabeledStatement: ['label', 'body'],
                        LogicalExpression: ['left', 'right'],
                        MemberExpression: ['object', 'property'],
                        MetaProperty: ['meta', 'property'],
                        MethodDefinition: ['key', 'value'],
                        ModuleSpecifier: [],
                        NewExpression: ['callee', 'arguments'],
                        ObjectExpression: ['properties'],
                        ObjectPattern: ['properties'],
                        PrivateIdentifier: [],
                        Program: ['body'],
                        Property: ['key', 'value'],
                        PropertyDefinition: ['key', 'value'],
                        RestElement: ['argument'],
                        ReturnStatement: ['argument'],
                        SequenceExpression: ['expressions'],
                        SpreadElement: ['argument'],
                        Super: [],
                        SwitchStatement: ['discriminant', 'cases'],
                        SwitchCase: ['test', 'consequent'],
                        TaggedTemplateExpression: ['tag', 'quasi'],
                        TemplateElement: [],
                        TemplateLiteral: ['quasis', 'expressions'],
                        ThisExpression: [],
                        ThrowStatement: ['argument'],
                        TryStatement: ['block', 'handler', 'finalizer'],
                        UnaryExpression: ['argument'],
                        UpdateExpression: ['argument'],
                        VariableDeclaration: ['declarations'],
                        VariableDeclarator: ['id', 'init'],
                        WhileStatement: ['test', 'body'],
                        WithStatement: ['object', 'body'],
                        YieldExpression: ['argument'],
                    }),
                    (s = {}),
                    (l = {}),
                    (p = {}),
                    (i = { Break: s, Skip: l, Remove: p });
                function y(x, F) {
                    (this.parent = x), (this.key = F);
                }
                (y.prototype.replace = function (x) {
                    this.parent[this.key] = x;
                }),
                    (y.prototype.remove = function () {
                        return Array.isArray(this.parent)
                            ? (this.parent.splice(this.key, 1), !0)
                            : (this.replace(null), !1);
                    });
                function C(x, F, B, b) {
                    (this.node = x),
                        (this.path = F),
                        (this.wrap = B),
                        (this.ref = b);
                }
                function E() {}
                (E.prototype.path = function () {
                    var x, F, B, b, I, q;
                    function U(z, G) {
                        if (Array.isArray(G))
                            for (B = 0, b = G.length; B < b; ++B) z.push(G[B]);
                        else z.push(G);
                    }
                    if (!this.__current.path) return null;
                    for (I = [], x = 2, F = this.__leavelist.length; x < F; ++x)
                        (q = this.__leavelist[x]), U(I, q.path);
                    return U(I, this.__current.path), I;
                }),
                    (E.prototype.type = function () {
                        var x = this.current();
                        return x.type || this.__current.wrap;
                    }),
                    (E.prototype.parents = function () {
                        var x, F, B;
                        for (
                            B = [], x = 1, F = this.__leavelist.length;
                            x < F;
                            ++x
                        )
                            B.push(this.__leavelist[x].node);
                        return B;
                    }),
                    (E.prototype.current = function () {
                        return this.__current.node;
                    }),
                    (E.prototype.__execute = function (x, F) {
                        var B, b;
                        return (
                            (b = void 0),
                            (B = this.__current),
                            (this.__current = F),
                            (this.__state = null),
                            x &&
                                (b = x.call(
                                    this,
                                    F.node,
                                    this.__leavelist[
                                        this.__leavelist.length - 1
                                    ].node
                                )),
                            (this.__current = B),
                            b
                        );
                    }),
                    (E.prototype.notify = function (x) {
                        this.__state = x;
                    }),
                    (E.prototype.skip = function () {
                        this.notify(l);
                    }),
                    (E.prototype.break = function () {
                        this.notify(s);
                    }),
                    (E.prototype.remove = function () {
                        this.notify(p);
                    }),
                    (E.prototype.__initialize = function (x, F) {
                        (this.visitor = F),
                            (this.root = x),
                            (this.__worklist = []),
                            (this.__leavelist = []),
                            (this.__current = null),
                            (this.__state = null),
                            (this.__fallback = null),
                            F.fallback === 'iteration'
                                ? (this.__fallback = Object.keys)
                                : typeof F.fallback == 'function' &&
                                  (this.__fallback = F.fallback),
                            (this.__keys = o),
                            F.keys &&
                                (this.__keys = Object.assign(
                                    Object.create(this.__keys),
                                    F.keys
                                ));
                    });
                function m(x) {
                    return x == null
                        ? !1
                        : typeof x == 'object' && typeof x.type == 'string';
                }
                function g(x, F) {
                    return (
                        (x === r.ObjectExpression || x === r.ObjectPattern) &&
                        F === 'properties'
                    );
                }
                function T(x, F) {
                    for (var B = x.length - 1; B >= 0; --B)
                        if (x[B].node === F) return !0;
                    return !1;
                }
                (E.prototype.traverse = function (x, F) {
                    var B, b, I, q, U, z, G, ee, de, pe, Ae, te;
                    for (
                        this.__initialize(x, F),
                            te = {},
                            B = this.__worklist,
                            b = this.__leavelist,
                            B.push(new C(x, null, null, null)),
                            b.push(new C(null, null, null, null));
                        B.length;

                    ) {
                        if (((I = B.pop()), I === te)) {
                            if (
                                ((I = b.pop()),
                                (z = this.__execute(F.leave, I)),
                                this.__state === s || z === s)
                            )
                                return;
                            continue;
                        }
                        if (I.node) {
                            if (
                                ((z = this.__execute(F.enter, I)),
                                this.__state === s || z === s)
                            )
                                return;
                            if (
                                (B.push(te),
                                b.push(I),
                                this.__state === l || z === l)
                            )
                                continue;
                            if (
                                ((q = I.node),
                                (U = q.type || I.wrap),
                                (pe = this.__keys[U]),
                                !pe)
                            )
                                if (this.__fallback) pe = this.__fallback(q);
                                else
                                    throw new Error(
                                        'Unknown node type ' + U + '.'
                                    );
                            for (ee = pe.length; (ee -= 1) >= 0; )
                                if (((G = pe[ee]), (Ae = q[G]), !!Ae)) {
                                    if (Array.isArray(Ae)) {
                                        for (de = Ae.length; (de -= 1) >= 0; )
                                            if (Ae[de] && !T(b, Ae[de])) {
                                                if (g(U, pe[ee]))
                                                    I = new C(
                                                        Ae[de],
                                                        [G, de],
                                                        'Property',
                                                        null
                                                    );
                                                else if (m(Ae[de]))
                                                    I = new C(
                                                        Ae[de],
                                                        [G, de],
                                                        null,
                                                        null
                                                    );
                                                else continue;
                                                B.push(I);
                                            }
                                    } else if (m(Ae)) {
                                        if (T(b, Ae)) continue;
                                        B.push(new C(Ae, G, null, null));
                                    }
                                }
                        }
                    }
                }),
                    (E.prototype.replace = function (x, F) {
                        var B, b, I, q, U, z, G, ee, de, pe, Ae, te, Ee;
                        function Re(be) {
                            var S, j, J, H;
                            if (be.ref.remove()) {
                                for (
                                    j = be.ref.key,
                                        H = be.ref.parent,
                                        S = B.length;
                                    S--;

                                )
                                    if (
                                        ((J = B[S]),
                                        J.ref && J.ref.parent === H)
                                    ) {
                                        if (J.ref.key < j) break;
                                        --J.ref.key;
                                    }
                            }
                        }
                        for (
                            this.__initialize(x, F),
                                Ae = {},
                                B = this.__worklist,
                                b = this.__leavelist,
                                te = { root: x },
                                z = new C(x, null, null, new y(te, 'root')),
                                B.push(z),
                                b.push(z);
                            B.length;

                        ) {
                            if (((z = B.pop()), z === Ae)) {
                                if (
                                    ((z = b.pop()),
                                    (U = this.__execute(F.leave, z)),
                                    U !== void 0 &&
                                        U !== s &&
                                        U !== l &&
                                        U !== p &&
                                        z.ref.replace(U),
                                    (this.__state === p || U === p) && Re(z),
                                    this.__state === s || U === s)
                                )
                                    return te.root;
                                continue;
                            }
                            if (
                                ((U = this.__execute(F.enter, z)),
                                U !== void 0 &&
                                    U !== s &&
                                    U !== l &&
                                    U !== p &&
                                    (z.ref.replace(U), (z.node = U)),
                                (this.__state === p || U === p) &&
                                    (Re(z), (z.node = null)),
                                this.__state === s || U === s)
                            )
                                return te.root;
                            if (
                                ((I = z.node),
                                !!I &&
                                    (B.push(Ae),
                                    b.push(z),
                                    !(this.__state === l || U === l)))
                            ) {
                                if (
                                    ((q = I.type || z.wrap),
                                    (de = this.__keys[q]),
                                    !de)
                                )
                                    if (this.__fallback)
                                        de = this.__fallback(I);
                                    else
                                        throw new Error(
                                            'Unknown node type ' + q + '.'
                                        );
                                for (G = de.length; (G -= 1) >= 0; )
                                    if (((Ee = de[G]), (pe = I[Ee]), !!pe))
                                        if (Array.isArray(pe)) {
                                            for (
                                                ee = pe.length;
                                                (ee -= 1) >= 0;

                                            )
                                                if (pe[ee]) {
                                                    if (g(q, de[G]))
                                                        z = new C(
                                                            pe[ee],
                                                            [Ee, ee],
                                                            'Property',
                                                            new y(pe, ee)
                                                        );
                                                    else if (m(pe[ee]))
                                                        z = new C(
                                                            pe[ee],
                                                            [Ee, ee],
                                                            null,
                                                            new y(pe, ee)
                                                        );
                                                    else continue;
                                                    B.push(z);
                                                }
                                        } else
                                            m(pe) &&
                                                B.push(
                                                    new C(
                                                        pe,
                                                        Ee,
                                                        null,
                                                        new y(I, Ee)
                                                    )
                                                );
                            }
                        }
                        return te.root;
                    });
                function k(x, F) {
                    var B = new E();
                    return B.traverse(x, F);
                }
                function v(x, F) {
                    var B = new E();
                    return B.replace(x, F);
                }
                function R(x, F) {
                    var B;
                    return (
                        (B = D(F, function (b) {
                            return b.range[0] > x.range[0];
                        })),
                        (x.extendedRange = [x.range[0], x.range[1]]),
                        B !== F.length && (x.extendedRange[1] = F[B].range[0]),
                        (B -= 1),
                        B >= 0 && (x.extendedRange[0] = F[B].range[1]),
                        x
                    );
                }
                function _(x, F, B) {
                    var b = [],
                        I,
                        q,
                        U,
                        z;
                    if (!x.range)
                        throw new Error(
                            'attachComments needs range information'
                        );
                    if (!B.length) {
                        if (F.length) {
                            for (U = 0, q = F.length; U < q; U += 1)
                                (I = d(F[U])),
                                    (I.extendedRange = [0, x.range[0]]),
                                    b.push(I);
                            x.leadingComments = b;
                        }
                        return x;
                    }
                    for (U = 0, q = F.length; U < q; U += 1)
                        b.push(R(d(F[U]), B));
                    return (
                        (z = 0),
                        k(x, {
                            enter: function (G) {
                                for (
                                    var ee;
                                    z < b.length &&
                                    ((ee = b[z]),
                                    !(ee.extendedRange[1] > G.range[0]));

                                )
                                    ee.extendedRange[1] === G.range[0]
                                        ? (G.leadingComments ||
                                              (G.leadingComments = []),
                                          G.leadingComments.push(ee),
                                          b.splice(z, 1))
                                        : (z += 1);
                                if (z === b.length) return i.Break;
                                if (b[z].extendedRange[0] > G.range[1])
                                    return i.Skip;
                            },
                        }),
                        (z = 0),
                        k(x, {
                            leave: function (G) {
                                for (
                                    var ee;
                                    z < b.length &&
                                    ((ee = b[z]),
                                    !(G.range[1] < ee.extendedRange[0]));

                                )
                                    G.range[1] === ee.extendedRange[0]
                                        ? (G.trailingComments ||
                                              (G.trailingComments = []),
                                          G.trailingComments.push(ee),
                                          b.splice(z, 1))
                                        : (z += 1);
                                if (z === b.length) return i.Break;
                                if (b[z].extendedRange[0] > G.range[1])
                                    return i.Skip;
                            },
                        }),
                        x
                    );
                }
                return (
                    (n.Syntax = r),
                    (n.traverse = k),
                    (n.replace = v),
                    (n.attachComments = _),
                    (n.VisitorKeys = o),
                    (n.VisitorOption = i),
                    (n.Controller = E),
                    (n.cloneEnvironment = function () {
                        return t({});
                    }),
                    n
                );
            })(e);
        },
    }),
    Nu = he({
        '../../node_modules/esutils/lib/ast.js'(e, t) {
            (function () {
                function n(p) {
                    if (p == null) return !1;
                    switch (p.type) {
                        case 'ArrayExpression':
                        case 'AssignmentExpression':
                        case 'BinaryExpression':
                        case 'CallExpression':
                        case 'ConditionalExpression':
                        case 'FunctionExpression':
                        case 'Identifier':
                        case 'Literal':
                        case 'LogicalExpression':
                        case 'MemberExpression':
                        case 'NewExpression':
                        case 'ObjectExpression':
                        case 'SequenceExpression':
                        case 'ThisExpression':
                        case 'UnaryExpression':
                        case 'UpdateExpression':
                            return !0;
                    }
                    return !1;
                }
                function r(p) {
                    if (p == null) return !1;
                    switch (p.type) {
                        case 'DoWhileStatement':
                        case 'ForInStatement':
                        case 'ForStatement':
                        case 'WhileStatement':
                            return !0;
                    }
                    return !1;
                }
                function i(p) {
                    if (p == null) return !1;
                    switch (p.type) {
                        case 'BlockStatement':
                        case 'BreakStatement':
                        case 'ContinueStatement':
                        case 'DebuggerStatement':
                        case 'DoWhileStatement':
                        case 'EmptyStatement':
                        case 'ExpressionStatement':
                        case 'ForInStatement':
                        case 'ForStatement':
                        case 'IfStatement':
                        case 'LabeledStatement':
                        case 'ReturnStatement':
                        case 'SwitchStatement':
                        case 'ThrowStatement':
                        case 'TryStatement':
                        case 'VariableDeclaration':
                        case 'WhileStatement':
                        case 'WithStatement':
                            return !0;
                    }
                    return !1;
                }
                function o(p) {
                    return (
                        i(p) || (p != null && p.type === 'FunctionDeclaration')
                    );
                }
                function s(p) {
                    switch (p.type) {
                        case 'IfStatement':
                            return p.alternate != null
                                ? p.alternate
                                : p.consequent;
                        case 'LabeledStatement':
                        case 'ForStatement':
                        case 'ForInStatement':
                        case 'WhileStatement':
                        case 'WithStatement':
                            return p.body;
                    }
                    return null;
                }
                function l(p) {
                    var d;
                    if (p.type !== 'IfStatement' || p.alternate == null)
                        return !1;
                    d = p.consequent;
                    do {
                        if (d.type === 'IfStatement' && d.alternate == null)
                            return !0;
                        d = s(d);
                    } while (d);
                    return !1;
                }
                t.exports = {
                    isExpression: n,
                    isStatement: i,
                    isIterationStatement: r,
                    isSourceElement: o,
                    isProblematicIfStatement: l,
                    trailingStatement: s,
                };
            })();
        },
    }),
    br = he({
        '../../node_modules/esutils/lib/code.js'(e, t) {
            (function () {
                var n, r, i, o, s, l;
                (r = {
                    NonAsciiIdentifierStart:
                        /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
                    NonAsciiIdentifierPart:
                        /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
                }),
                    (n = {
                        NonAsciiIdentifierStart:
                            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
                        NonAsciiIdentifierPart:
                            /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
                    });
                function p(v) {
                    return 48 <= v && v <= 57;
                }
                function d(v) {
                    return (
                        (48 <= v && v <= 57) ||
                        (97 <= v && v <= 102) ||
                        (65 <= v && v <= 70)
                    );
                }
                function D(v) {
                    return v >= 48 && v <= 55;
                }
                i = [
                    5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200,
                    8201, 8202, 8239, 8287, 12288, 65279,
                ];
                function y(v) {
                    return (
                        v === 32 ||
                        v === 9 ||
                        v === 11 ||
                        v === 12 ||
                        v === 160 ||
                        (v >= 5760 && i.indexOf(v) >= 0)
                    );
                }
                function C(v) {
                    return v === 10 || v === 13 || v === 8232 || v === 8233;
                }
                function E(v) {
                    if (v <= 65535) return String.fromCharCode(v);
                    var R = String.fromCharCode(
                            Math.floor((v - 65536) / 1024) + 55296
                        ),
                        _ = String.fromCharCode(((v - 65536) % 1024) + 56320);
                    return R + _;
                }
                for (o = new Array(128), l = 0; l < 128; ++l)
                    o[l] =
                        (l >= 97 && l <= 122) ||
                        (l >= 65 && l <= 90) ||
                        l === 36 ||
                        l === 95;
                for (s = new Array(128), l = 0; l < 128; ++l)
                    s[l] =
                        (l >= 97 && l <= 122) ||
                        (l >= 65 && l <= 90) ||
                        (l >= 48 && l <= 57) ||
                        l === 36 ||
                        l === 95;
                function m(v) {
                    return v < 128
                        ? o[v]
                        : r.NonAsciiIdentifierStart.test(E(v));
                }
                function g(v) {
                    return v < 128 ? s[v] : r.NonAsciiIdentifierPart.test(E(v));
                }
                function T(v) {
                    return v < 128
                        ? o[v]
                        : n.NonAsciiIdentifierStart.test(E(v));
                }
                function k(v) {
                    return v < 128 ? s[v] : n.NonAsciiIdentifierPart.test(E(v));
                }
                t.exports = {
                    isDecimalDigit: p,
                    isHexDigit: d,
                    isOctalDigit: D,
                    isWhiteSpace: y,
                    isLineTerminator: C,
                    isIdentifierStartES5: m,
                    isIdentifierPartES5: g,
                    isIdentifierStartES6: T,
                    isIdentifierPartES6: k,
                };
            })();
        },
    }),
    ju = he({
        '../../node_modules/esutils/lib/keyword.js'(e, t) {
            (function () {
                var n = br();
                function r(m) {
                    switch (m) {
                        case 'implements':
                        case 'interface':
                        case 'package':
                        case 'private':
                        case 'protected':
                        case 'public':
                        case 'static':
                        case 'let':
                            return !0;
                        default:
                            return !1;
                    }
                }
                function i(m, g) {
                    return !g && m === 'yield' ? !1 : o(m, g);
                }
                function o(m, g) {
                    if (g && r(m)) return !0;
                    switch (m.length) {
                        case 2:
                            return m === 'if' || m === 'in' || m === 'do';
                        case 3:
                            return (
                                m === 'var' ||
                                m === 'for' ||
                                m === 'new' ||
                                m === 'try'
                            );
                        case 4:
                            return (
                                m === 'this' ||
                                m === 'else' ||
                                m === 'case' ||
                                m === 'void' ||
                                m === 'with' ||
                                m === 'enum'
                            );
                        case 5:
                            return (
                                m === 'while' ||
                                m === 'break' ||
                                m === 'catch' ||
                                m === 'throw' ||
                                m === 'const' ||
                                m === 'yield' ||
                                m === 'class' ||
                                m === 'super'
                            );
                        case 6:
                            return (
                                m === 'return' ||
                                m === 'typeof' ||
                                m === 'delete' ||
                                m === 'switch' ||
                                m === 'export' ||
                                m === 'import'
                            );
                        case 7:
                            return (
                                m === 'default' ||
                                m === 'finally' ||
                                m === 'extends'
                            );
                        case 8:
                            return (
                                m === 'function' ||
                                m === 'continue' ||
                                m === 'debugger'
                            );
                        case 10:
                            return m === 'instanceof';
                        default:
                            return !1;
                    }
                }
                function s(m, g) {
                    return (
                        m === 'null' || m === 'true' || m === 'false' || i(m, g)
                    );
                }
                function l(m, g) {
                    return (
                        m === 'null' || m === 'true' || m === 'false' || o(m, g)
                    );
                }
                function p(m) {
                    return m === 'eval' || m === 'arguments';
                }
                function d(m) {
                    var g, T, k;
                    if (
                        m.length === 0 ||
                        ((k = m.charCodeAt(0)), !n.isIdentifierStartES5(k))
                    )
                        return !1;
                    for (g = 1, T = m.length; g < T; ++g)
                        if (((k = m.charCodeAt(g)), !n.isIdentifierPartES5(k)))
                            return !1;
                    return !0;
                }
                function D(m, g) {
                    return (m - 55296) * 1024 + (g - 56320) + 65536;
                }
                function y(m) {
                    var g, T, k, v, R;
                    if (m.length === 0) return !1;
                    for (
                        R = n.isIdentifierStartES6, g = 0, T = m.length;
                        g < T;
                        ++g
                    ) {
                        if (((k = m.charCodeAt(g)), 55296 <= k && k <= 56319)) {
                            if (
                                (++g,
                                g >= T ||
                                    ((v = m.charCodeAt(g)),
                                    !(56320 <= v && v <= 57343)))
                            )
                                return !1;
                            k = D(k, v);
                        }
                        if (!R(k)) return !1;
                        R = n.isIdentifierPartES6;
                    }
                    return !0;
                }
                function C(m, g) {
                    return d(m) && !s(m, g);
                }
                function E(m, g) {
                    return y(m) && !l(m, g);
                }
                t.exports = {
                    isKeywordES5: i,
                    isKeywordES6: o,
                    isReservedWordES5: s,
                    isReservedWordES6: l,
                    isRestrictedWord: p,
                    isIdentifierNameES5: d,
                    isIdentifierNameES6: y,
                    isIdentifierES5: C,
                    isIdentifierES6: E,
                };
            })();
        },
    }),
    Mu = he({
        '../../node_modules/esutils/lib/utils.js'(e) {
            (function () {
                (e.ast = Nu()), (e.code = br()), (e.keyword = ju());
            })();
        },
    }),
    Vu = he({
        '../../node_modules/escodegen/node_modules/source-map/lib/base64.js'(
            e
        ) {
            var t =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split(
                    ''
                );
            (e.encode = function (n) {
                if (0 <= n && n < t.length) return t[n];
                throw new TypeError('Must be between 0 and 63: ' + n);
            }),
                (e.decode = function (n) {
                    var r = 65,
                        i = 90,
                        o = 97,
                        s = 122,
                        l = 48,
                        p = 57,
                        d = 43,
                        D = 47,
                        y = 26,
                        C = 52;
                    return r <= n && n <= i
                        ? n - r
                        : o <= n && n <= s
                          ? n - o + y
                          : l <= n && n <= p
                            ? n - l + C
                            : n == d
                              ? 62
                              : n == D
                                ? 63
                                : -1;
                });
        },
    }),
    wr = he({
        '../../node_modules/escodegen/node_modules/source-map/lib/base64-vlq.js'(
            e
        ) {
            var t = Vu(),
                n = 5,
                r = 1 << n,
                i = r - 1,
                o = r;
            function s(p) {
                return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
            }
            function l(p) {
                var d = (p & 1) === 1,
                    D = p >> 1;
                return d ? -D : D;
            }
            (e.encode = function (p) {
                var d = '',
                    D,
                    y = s(p);
                do
                    (D = y & i),
                        (y >>>= n),
                        y > 0 && (D |= o),
                        (d += t.encode(D));
                while (y > 0);
                return d;
            }),
                (e.decode = function (p, d, D) {
                    var y = p.length,
                        C = 0,
                        E = 0,
                        m,
                        g;
                    do {
                        if (d >= y)
                            throw new Error(
                                'Expected more digits in base 64 VLQ value.'
                            );
                        if (((g = t.decode(p.charCodeAt(d++))), g === -1))
                            throw new Error(
                                'Invalid base64 digit: ' + p.charAt(d - 1)
                            );
                        (m = !!(g & o)), (g &= i), (C = C + (g << E)), (E += n);
                    } while (m);
                    (D.value = l(C)), (D.rest = d);
                });
        },
    }),
    St = he({
        '../../node_modules/escodegen/node_modules/source-map/lib/util.js'(e) {
            function t(_, x, F) {
                if (x in _) return _[x];
                if (arguments.length === 3) return F;
                throw new Error('"' + x + '" is a required argument.');
            }
            e.getArg = t;
            var n =
                    /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
                r = /^data:.+\,.+$/;
            function i(_) {
                var x = _.match(n);
                return x
                    ? {
                          scheme: x[1],
                          auth: x[2],
                          host: x[3],
                          port: x[4],
                          path: x[5],
                      }
                    : null;
            }
            e.urlParse = i;
            function o(_) {
                var x = '';
                return (
                    _.scheme && (x += _.scheme + ':'),
                    (x += '//'),
                    _.auth && (x += _.auth + '@'),
                    _.host && (x += _.host),
                    _.port && (x += ':' + _.port),
                    _.path && (x += _.path),
                    x
                );
            }
            e.urlGenerate = o;
            function s(_) {
                var x = _,
                    F = i(_);
                if (F) {
                    if (!F.path) return _;
                    x = F.path;
                }
                for (
                    var B = e.isAbsolute(x),
                        b = x.split(/\/+/),
                        I,
                        q = 0,
                        U = b.length - 1;
                    U >= 0;
                    U--
                )
                    (I = b[U]),
                        I === '.'
                            ? b.splice(U, 1)
                            : I === '..'
                              ? q++
                              : q > 0 &&
                                (I === ''
                                    ? (b.splice(U + 1, q), (q = 0))
                                    : (b.splice(U, 2), q--));
                return (
                    (x = b.join('/')),
                    x === '' && (x = B ? '/' : '.'),
                    F ? ((F.path = x), o(F)) : x
                );
            }
            e.normalize = s;
            function l(_, x) {
                _ === '' && (_ = '.'), x === '' && (x = '.');
                var F = i(x),
                    B = i(_);
                if ((B && (_ = B.path || '/'), F && !F.scheme))
                    return B && (F.scheme = B.scheme), o(F);
                if (F || x.match(r)) return x;
                if (B && !B.host && !B.path) return (B.host = x), o(B);
                var b =
                    x.charAt(0) === '/'
                        ? x
                        : s(_.replace(/\/+$/, '') + '/' + x);
                return B ? ((B.path = b), o(B)) : b;
            }
            (e.join = l),
                (e.isAbsolute = function (_) {
                    return _.charAt(0) === '/' || n.test(_);
                });
            function p(_, x) {
                _ === '' && (_ = '.'), (_ = _.replace(/\/$/, ''));
                for (var F = 0; x.indexOf(_ + '/') !== 0; ) {
                    var B = _.lastIndexOf('/');
                    if (
                        B < 0 ||
                        ((_ = _.slice(0, B)), _.match(/^([^\/]+:\/)?\/*$/))
                    )
                        return x;
                    ++F;
                }
                return Array(F + 1).join('../') + x.substr(_.length + 1);
            }
            e.relative = p;
            var d = (function () {
                var _ = Object.create(null);
                return !('__proto__' in _);
            })();
            function D(_) {
                return _;
            }
            function y(_) {
                return E(_) ? '$' + _ : _;
            }
            e.toSetString = d ? D : y;
            function C(_) {
                return E(_) ? _.slice(1) : _;
            }
            e.fromSetString = d ? D : C;
            function E(_) {
                if (!_) return !1;
                var x = _.length;
                if (
                    x < 9 ||
                    _.charCodeAt(x - 1) !== 95 ||
                    _.charCodeAt(x - 2) !== 95 ||
                    _.charCodeAt(x - 3) !== 111 ||
                    _.charCodeAt(x - 4) !== 116 ||
                    _.charCodeAt(x - 5) !== 111 ||
                    _.charCodeAt(x - 6) !== 114 ||
                    _.charCodeAt(x - 7) !== 112 ||
                    _.charCodeAt(x - 8) !== 95 ||
                    _.charCodeAt(x - 9) !== 95
                )
                    return !1;
                for (var F = x - 10; F >= 0; F--)
                    if (_.charCodeAt(F) !== 36) return !1;
                return !0;
            }
            function m(_, x, F) {
                var B = T(_.source, x.source);
                return B !== 0 ||
                    ((B = _.originalLine - x.originalLine), B !== 0) ||
                    ((B = _.originalColumn - x.originalColumn), B !== 0 || F) ||
                    ((B = _.generatedColumn - x.generatedColumn), B !== 0) ||
                    ((B = _.generatedLine - x.generatedLine), B !== 0)
                    ? B
                    : T(_.name, x.name);
            }
            e.compareByOriginalPositions = m;
            function g(_, x, F) {
                var B = _.generatedLine - x.generatedLine;
                return B !== 0 ||
                    ((B = _.generatedColumn - x.generatedColumn),
                    B !== 0 || F) ||
                    ((B = T(_.source, x.source)), B !== 0) ||
                    ((B = _.originalLine - x.originalLine), B !== 0) ||
                    ((B = _.originalColumn - x.originalColumn), B !== 0)
                    ? B
                    : T(_.name, x.name);
            }
            e.compareByGeneratedPositionsDeflated = g;
            function T(_, x) {
                return _ === x
                    ? 0
                    : _ === null
                      ? 1
                      : x === null
                        ? -1
                        : _ > x
                          ? 1
                          : -1;
            }
            function k(_, x) {
                var F = _.generatedLine - x.generatedLine;
                return F !== 0 ||
                    ((F = _.generatedColumn - x.generatedColumn), F !== 0) ||
                    ((F = T(_.source, x.source)), F !== 0) ||
                    ((F = _.originalLine - x.originalLine), F !== 0) ||
                    ((F = _.originalColumn - x.originalColumn), F !== 0)
                    ? F
                    : T(_.name, x.name);
            }
            e.compareByGeneratedPositionsInflated = k;
            function v(_) {
                return JSON.parse(_.replace(/^\)]}'[^\n]*\n/, ''));
            }
            e.parseSourceMapInput = v;
            function R(_, x, F) {
                if (
                    ((x = x || ''),
                    _ &&
                        (_[_.length - 1] !== '/' && x[0] !== '/' && (_ += '/'),
                        (x = _ + x)),
                    F)
                ) {
                    var B = i(F);
                    if (!B) throw new Error('sourceMapURL could not be parsed');
                    if (B.path) {
                        var b = B.path.lastIndexOf('/');
                        b >= 0 && (B.path = B.path.substring(0, b + 1));
                    }
                    x = l(o(B), x);
                }
                return s(x);
            }
            e.computeSourceURL = R;
        },
    }),
    Tr = he({
        '../../node_modules/escodegen/node_modules/source-map/lib/array-set.js'(
            e
        ) {
            var t = St(),
                n = Object.prototype.hasOwnProperty,
                r = typeof Map < 'u';
            function i() {
                (this._array = []),
                    (this._set = r ? new Map() : Object.create(null));
            }
            (i.fromArray = function (o, s) {
                for (var l = new i(), p = 0, d = o.length; p < d; p++)
                    l.add(o[p], s);
                return l;
            }),
                (i.prototype.size = function () {
                    return r
                        ? this._set.size
                        : Object.getOwnPropertyNames(this._set).length;
                }),
                (i.prototype.add = function (o, s) {
                    var l = r ? o : t.toSetString(o),
                        p = r ? this.has(o) : n.call(this._set, l),
                        d = this._array.length;
                    (!p || s) && this._array.push(o),
                        p || (r ? this._set.set(o, d) : (this._set[l] = d));
                }),
                (i.prototype.has = function (o) {
                    if (r) return this._set.has(o);
                    var s = t.toSetString(o);
                    return n.call(this._set, s);
                }),
                (i.prototype.indexOf = function (o) {
                    if (r) {
                        var s = this._set.get(o);
                        if (s >= 0) return s;
                    } else {
                        var l = t.toSetString(o);
                        if (n.call(this._set, l)) return this._set[l];
                    }
                    throw new Error('"' + o + '" is not in the set.');
                }),
                (i.prototype.at = function (o) {
                    if (o >= 0 && o < this._array.length) return this._array[o];
                    throw new Error('No element indexed by ' + o);
                }),
                (i.prototype.toArray = function () {
                    return this._array.slice();
                }),
                (e.ArraySet = i);
        },
    }),
    qu = he({
        '../../node_modules/escodegen/node_modules/source-map/lib/mapping-list.js'(
            e
        ) {
            var t = St();
            function n(i, o) {
                var s = i.generatedLine,
                    l = o.generatedLine,
                    p = i.generatedColumn,
                    d = o.generatedColumn;
                return (
                    l > s ||
                    (l == s && d >= p) ||
                    t.compareByGeneratedPositionsInflated(i, o) <= 0
                );
            }
            function r() {
                (this._array = []),
                    (this._sorted = !0),
                    (this._last = { generatedLine: -1, generatedColumn: 0 });
            }
            (r.prototype.unsortedForEach = function (i, o) {
                this._array.forEach(i, o);
            }),
                (r.prototype.add = function (i) {
                    n(this._last, i)
                        ? ((this._last = i), this._array.push(i))
                        : ((this._sorted = !1), this._array.push(i));
                }),
                (r.prototype.toArray = function () {
                    return (
                        this._sorted ||
                            (this._array.sort(
                                t.compareByGeneratedPositionsInflated
                            ),
                            (this._sorted = !0)),
                        this._array
                    );
                }),
                (e.MappingList = r);
        },
    }),
    kr = he({
        '../../node_modules/escodegen/node_modules/source-map/lib/source-map-generator.js'(
            e
        ) {
            var t = wr(),
                n = St(),
                r = Tr().ArraySet,
                i = qu().MappingList;
            function o(s) {
                s || (s = {}),
                    (this._file = n.getArg(s, 'file', null)),
                    (this._sourceRoot = n.getArg(s, 'sourceRoot', null)),
                    (this._skipValidation = n.getArg(s, 'skipValidation', !1)),
                    (this._sources = new r()),
                    (this._names = new r()),
                    (this._mappings = new i()),
                    (this._sourcesContents = null);
            }
            (o.prototype._version = 3),
                (o.fromSourceMap = function (s) {
                    var l = s.sourceRoot,
                        p = new o({ file: s.file, sourceRoot: l });
                    return (
                        s.eachMapping(function (d) {
                            var D = {
                                generated: {
                                    line: d.generatedLine,
                                    column: d.generatedColumn,
                                },
                            };
                            d.source != null &&
                                ((D.source = d.source),
                                l != null &&
                                    (D.source = n.relative(l, D.source)),
                                (D.original = {
                                    line: d.originalLine,
                                    column: d.originalColumn,
                                }),
                                d.name != null && (D.name = d.name)),
                                p.addMapping(D);
                        }),
                        s.sources.forEach(function (d) {
                            var D = d;
                            l !== null && (D = n.relative(l, d)),
                                p._sources.has(D) || p._sources.add(D);
                            var y = s.sourceContentFor(d);
                            y != null && p.setSourceContent(d, y);
                        }),
                        p
                    );
                }),
                (o.prototype.addMapping = function (s) {
                    var l = n.getArg(s, 'generated'),
                        p = n.getArg(s, 'original', null),
                        d = n.getArg(s, 'source', null),
                        D = n.getArg(s, 'name', null);
                    this._skipValidation || this._validateMapping(l, p, d, D),
                        d != null &&
                            ((d = String(d)),
                            this._sources.has(d) || this._sources.add(d)),
                        D != null &&
                            ((D = String(D)),
                            this._names.has(D) || this._names.add(D)),
                        this._mappings.add({
                            generatedLine: l.line,
                            generatedColumn: l.column,
                            originalLine: p != null && p.line,
                            originalColumn: p != null && p.column,
                            source: d,
                            name: D,
                        });
                }),
                (o.prototype.setSourceContent = function (s, l) {
                    var p = s;
                    this._sourceRoot != null &&
                        (p = n.relative(this._sourceRoot, p)),
                        l != null
                            ? (this._sourcesContents ||
                                  (this._sourcesContents = Object.create(null)),
                              (this._sourcesContents[n.toSetString(p)] = l))
                            : this._sourcesContents &&
                              (delete this._sourcesContents[n.toSetString(p)],
                              Object.keys(this._sourcesContents).length === 0 &&
                                  (this._sourcesContents = null));
                }),
                (o.prototype.applySourceMap = function (s, l, p) {
                    var d = l;
                    if (l == null) {
                        if (s.file == null)
                            throw new Error(
                                `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
                            );
                        d = s.file;
                    }
                    var D = this._sourceRoot;
                    D != null && (d = n.relative(D, d));
                    var y = new r(),
                        C = new r();
                    this._mappings.unsortedForEach(function (E) {
                        if (E.source === d && E.originalLine != null) {
                            var m = s.originalPositionFor({
                                line: E.originalLine,
                                column: E.originalColumn,
                            });
                            m.source != null &&
                                ((E.source = m.source),
                                p != null && (E.source = n.join(p, E.source)),
                                D != null &&
                                    (E.source = n.relative(D, E.source)),
                                (E.originalLine = m.line),
                                (E.originalColumn = m.column),
                                m.name != null && (E.name = m.name));
                        }
                        var g = E.source;
                        g != null && !y.has(g) && y.add(g);
                        var T = E.name;
                        T != null && !C.has(T) && C.add(T);
                    }, this),
                        (this._sources = y),
                        (this._names = C),
                        s.sources.forEach(function (E) {
                            var m = s.sourceContentFor(E);
                            m != null &&
                                (p != null && (E = n.join(p, E)),
                                D != null && (E = n.relative(D, E)),
                                this.setSourceContent(E, m));
                        }, this);
                }),
                (o.prototype._validateMapping = function (s, l, p, d) {
                    if (
                        l &&
                        typeof l.line != 'number' &&
                        typeof l.column != 'number'
                    )
                        throw new Error(
                            'original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.'
                        );
                    if (
                        !(
                            s &&
                            'line' in s &&
                            'column' in s &&
                            s.line > 0 &&
                            s.column >= 0 &&
                            !l &&
                            !p &&
                            !d
                        )
                    ) {
                        if (
                            s &&
                            'line' in s &&
                            'column' in s &&
                            l &&
                            'line' in l &&
                            'column' in l &&
                            s.line > 0 &&
                            s.column >= 0 &&
                            l.line > 0 &&
                            l.column >= 0 &&
                            p
                        )
                            return;
                        throw new Error(
                            'Invalid mapping: ' +
                                JSON.stringify({
                                    generated: s,
                                    source: p,
                                    original: l,
                                    name: d,
                                })
                        );
                    }
                }),
                (o.prototype._serializeMappings = function () {
                    for (
                        var s = 0,
                            l = 1,
                            p = 0,
                            d = 0,
                            D = 0,
                            y = 0,
                            C = '',
                            E,
                            m,
                            g,
                            T,
                            k = this._mappings.toArray(),
                            v = 0,
                            R = k.length;
                        v < R;
                        v++
                    ) {
                        if (((m = k[v]), (E = ''), m.generatedLine !== l))
                            for (s = 0; m.generatedLine !== l; )
                                (E += ';'), l++;
                        else if (v > 0) {
                            if (
                                !n.compareByGeneratedPositionsInflated(
                                    m,
                                    k[v - 1]
                                )
                            )
                                continue;
                            E += ',';
                        }
                        (E += t.encode(m.generatedColumn - s)),
                            (s = m.generatedColumn),
                            m.source != null &&
                                ((T = this._sources.indexOf(m.source)),
                                (E += t.encode(T - y)),
                                (y = T),
                                (E += t.encode(m.originalLine - 1 - d)),
                                (d = m.originalLine - 1),
                                (E += t.encode(m.originalColumn - p)),
                                (p = m.originalColumn),
                                m.name != null &&
                                    ((g = this._names.indexOf(m.name)),
                                    (E += t.encode(g - D)),
                                    (D = g))),
                            (C += E);
                    }
                    return C;
                }),
                (o.prototype._generateSourcesContent = function (s, l) {
                    return s.map(function (p) {
                        if (!this._sourcesContents) return null;
                        l != null && (p = n.relative(l, p));
                        var d = n.toSetString(p);
                        return Object.prototype.hasOwnProperty.call(
                            this._sourcesContents,
                            d
                        )
                            ? this._sourcesContents[d]
                            : null;
                    }, this);
                }),
                (o.prototype.toJSON = function () {
                    var s = {
                        version: this._version,
                        sources: this._sources.toArray(),
                        names: this._names.toArray(),
                        mappings: this._serializeMappings(),
                    };
                    return (
                        this._file != null && (s.file = this._file),
                        this._sourceRoot != null &&
                            (s.sourceRoot = this._sourceRoot),
                        this._sourcesContents &&
                            (s.sourcesContent = this._generateSourcesContent(
                                s.sources,
                                s.sourceRoot
                            )),
                        s
                    );
                }),
                (o.prototype.toString = function () {
                    return JSON.stringify(this.toJSON());
                }),
                (e.SourceMapGenerator = o);
        },
    }),
    Uu = he({
        '../../node_modules/escodegen/node_modules/source-map/lib/binary-search.js'(
            e
        ) {
            (e.GREATEST_LOWER_BOUND = 1), (e.LEAST_UPPER_BOUND = 2);
            function t(n, r, i, o, s, l) {
                var p = Math.floor((r - n) / 2) + n,
                    d = s(i, o[p], !0);
                return d === 0
                    ? p
                    : d > 0
                      ? r - p > 1
                          ? t(p, r, i, o, s, l)
                          : l == e.LEAST_UPPER_BOUND
                            ? r < o.length
                                ? r
                                : -1
                            : p
                      : p - n > 1
                        ? t(n, p, i, o, s, l)
                        : l == e.LEAST_UPPER_BOUND
                          ? p
                          : n < 0
                            ? -1
                            : n;
            }
            e.search = function (n, r, i, o) {
                if (r.length === 0) return -1;
                var s = t(-1, r.length, n, r, i, o || e.GREATEST_LOWER_BOUND);
                if (s < 0) return -1;
                for (; s - 1 >= 0 && i(r[s], r[s - 1], !0) === 0; ) --s;
                return s;
            };
        },
    }),
    Wu = he({
        '../../node_modules/escodegen/node_modules/source-map/lib/quick-sort.js'(
            e
        ) {
            function t(i, o, s) {
                var l = i[o];
                (i[o] = i[s]), (i[s] = l);
            }
            function n(i, o) {
                return Math.round(i + Math.random() * (o - i));
            }
            function r(i, o, s, l) {
                if (s < l) {
                    var p = n(s, l),
                        d = s - 1;
                    t(i, p, l);
                    for (var D = i[l], y = s; y < l; y++)
                        o(i[y], D) <= 0 && ((d += 1), t(i, d, y));
                    t(i, d + 1, y);
                    var C = d + 1;
                    r(i, o, s, C - 1), r(i, o, C + 1, l);
                }
            }
            e.quickSort = function (i, o) {
                r(i, o, 0, i.length - 1);
            };
        },
    }),
    zu = he({
        '../../node_modules/escodegen/node_modules/source-map/lib/source-map-consumer.js'(
            e
        ) {
            var t = St(),
                n = Uu(),
                r = Tr().ArraySet,
                i = wr(),
                o = Wu().quickSort;
            function s(D, y) {
                var C = D;
                return (
                    typeof D == 'string' && (C = t.parseSourceMapInput(D)),
                    C.sections != null ? new d(C, y) : new l(C, y)
                );
            }
            (s.fromSourceMap = function (D, y) {
                return l.fromSourceMap(D, y);
            }),
                (s.prototype._version = 3),
                (s.prototype.__generatedMappings = null),
                Object.defineProperty(s.prototype, '_generatedMappings', {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return (
                            this.__generatedMappings ||
                                this._parseMappings(
                                    this._mappings,
                                    this.sourceRoot
                                ),
                            this.__generatedMappings
                        );
                    },
                }),
                (s.prototype.__originalMappings = null),
                Object.defineProperty(s.prototype, '_originalMappings', {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return (
                            this.__originalMappings ||
                                this._parseMappings(
                                    this._mappings,
                                    this.sourceRoot
                                ),
                            this.__originalMappings
                        );
                    },
                }),
                (s.prototype._charIsMappingSeparator = function (D, y) {
                    var C = D.charAt(y);
                    return C === ';' || C === ',';
                }),
                (s.prototype._parseMappings = function (D, y) {
                    throw new Error('Subclasses must implement _parseMappings');
                }),
                (s.GENERATED_ORDER = 1),
                (s.ORIGINAL_ORDER = 2),
                (s.GREATEST_LOWER_BOUND = 1),
                (s.LEAST_UPPER_BOUND = 2),
                (s.prototype.eachMapping = function (D, y, C) {
                    var E = y || null,
                        m = C || s.GENERATED_ORDER,
                        g;
                    switch (m) {
                        case s.GENERATED_ORDER:
                            g = this._generatedMappings;
                            break;
                        case s.ORIGINAL_ORDER:
                            g = this._originalMappings;
                            break;
                        default:
                            throw new Error('Unknown order of iteration.');
                    }
                    var T = this.sourceRoot;
                    g.map(function (k) {
                        var v =
                            k.source === null
                                ? null
                                : this._sources.at(k.source);
                        return (
                            (v = t.computeSourceURL(T, v, this._sourceMapURL)),
                            {
                                source: v,
                                generatedLine: k.generatedLine,
                                generatedColumn: k.generatedColumn,
                                originalLine: k.originalLine,
                                originalColumn: k.originalColumn,
                                name:
                                    k.name === null
                                        ? null
                                        : this._names.at(k.name),
                            }
                        );
                    }, this).forEach(D, E);
                }),
                (s.prototype.allGeneratedPositionsFor = function (D) {
                    var y = t.getArg(D, 'line'),
                        C = {
                            source: t.getArg(D, 'source'),
                            originalLine: y,
                            originalColumn: t.getArg(D, 'column', 0),
                        };
                    if (
                        ((C.source = this._findSourceIndex(C.source)),
                        C.source < 0)
                    )
                        return [];
                    var E = [],
                        m = this._findMapping(
                            C,
                            this._originalMappings,
                            'originalLine',
                            'originalColumn',
                            t.compareByOriginalPositions,
                            n.LEAST_UPPER_BOUND
                        );
                    if (m >= 0) {
                        var g = this._originalMappings[m];
                        if (D.column === void 0)
                            for (
                                var T = g.originalLine;
                                g && g.originalLine === T;

                            )
                                E.push({
                                    line: t.getArg(g, 'generatedLine', null),
                                    column: t.getArg(
                                        g,
                                        'generatedColumn',
                                        null
                                    ),
                                    lastColumn: t.getArg(
                                        g,
                                        'lastGeneratedColumn',
                                        null
                                    ),
                                }),
                                    (g = this._originalMappings[++m]);
                        else
                            for (
                                var k = g.originalColumn;
                                g &&
                                g.originalLine === y &&
                                g.originalColumn == k;

                            )
                                E.push({
                                    line: t.getArg(g, 'generatedLine', null),
                                    column: t.getArg(
                                        g,
                                        'generatedColumn',
                                        null
                                    ),
                                    lastColumn: t.getArg(
                                        g,
                                        'lastGeneratedColumn',
                                        null
                                    ),
                                }),
                                    (g = this._originalMappings[++m]);
                    }
                    return E;
                }),
                (e.SourceMapConsumer = s);
            function l(D, y) {
                var C = D;
                typeof D == 'string' && (C = t.parseSourceMapInput(D));
                var E = t.getArg(C, 'version'),
                    m = t.getArg(C, 'sources'),
                    g = t.getArg(C, 'names', []),
                    T = t.getArg(C, 'sourceRoot', null),
                    k = t.getArg(C, 'sourcesContent', null),
                    v = t.getArg(C, 'mappings'),
                    R = t.getArg(C, 'file', null);
                if (E != this._version)
                    throw new Error('Unsupported version: ' + E);
                T && (T = t.normalize(T)),
                    (m = m
                        .map(String)
                        .map(t.normalize)
                        .map(function (_) {
                            return T && t.isAbsolute(T) && t.isAbsolute(_)
                                ? t.relative(T, _)
                                : _;
                        })),
                    (this._names = r.fromArray(g.map(String), !0)),
                    (this._sources = r.fromArray(m, !0)),
                    (this._absoluteSources = this._sources
                        .toArray()
                        .map(function (_) {
                            return t.computeSourceURL(T, _, y);
                        })),
                    (this.sourceRoot = T),
                    (this.sourcesContent = k),
                    (this._mappings = v),
                    (this._sourceMapURL = y),
                    (this.file = R);
            }
            (l.prototype = Object.create(s.prototype)),
                (l.prototype.consumer = s),
                (l.prototype._findSourceIndex = function (D) {
                    var y = D;
                    if (
                        (this.sourceRoot != null &&
                            (y = t.relative(this.sourceRoot, y)),
                        this._sources.has(y))
                    )
                        return this._sources.indexOf(y);
                    var C;
                    for (C = 0; C < this._absoluteSources.length; ++C)
                        if (this._absoluteSources[C] == D) return C;
                    return -1;
                }),
                (l.fromSourceMap = function (D, y) {
                    var C = Object.create(l.prototype),
                        E = (C._names = r.fromArray(D._names.toArray(), !0)),
                        m = (C._sources = r.fromArray(
                            D._sources.toArray(),
                            !0
                        ));
                    (C.sourceRoot = D._sourceRoot),
                        (C.sourcesContent = D._generateSourcesContent(
                            C._sources.toArray(),
                            C.sourceRoot
                        )),
                        (C.file = D._file),
                        (C._sourceMapURL = y),
                        (C._absoluteSources = C._sources
                            .toArray()
                            .map(function (F) {
                                return t.computeSourceURL(C.sourceRoot, F, y);
                            }));
                    for (
                        var g = D._mappings.toArray().slice(),
                            T = (C.__generatedMappings = []),
                            k = (C.__originalMappings = []),
                            v = 0,
                            R = g.length;
                        v < R;
                        v++
                    ) {
                        var _ = g[v],
                            x = new p();
                        (x.generatedLine = _.generatedLine),
                            (x.generatedColumn = _.generatedColumn),
                            _.source &&
                                ((x.source = m.indexOf(_.source)),
                                (x.originalLine = _.originalLine),
                                (x.originalColumn = _.originalColumn),
                                _.name && (x.name = E.indexOf(_.name)),
                                k.push(x)),
                            T.push(x);
                    }
                    return (
                        o(C.__originalMappings, t.compareByOriginalPositions), C
                    );
                }),
                (l.prototype._version = 3),
                Object.defineProperty(l.prototype, 'sources', {
                    get: function () {
                        return this._absoluteSources.slice();
                    },
                });
            function p() {
                (this.generatedLine = 0),
                    (this.generatedColumn = 0),
                    (this.source = null),
                    (this.originalLine = null),
                    (this.originalColumn = null),
                    (this.name = null);
            }
            (l.prototype._parseMappings = function (D, y) {
                for (
                    var C = 1,
                        E = 0,
                        m = 0,
                        g = 0,
                        T = 0,
                        k = 0,
                        v = D.length,
                        R = 0,
                        _ = {},
                        x = {},
                        F = [],
                        B = [],
                        b,
                        I,
                        q,
                        U,
                        z;
                    R < v;

                )
                    if (D.charAt(R) === ';') C++, R++, (E = 0);
                    else if (D.charAt(R) === ',') R++;
                    else {
                        for (
                            b = new p(), b.generatedLine = C, U = R;
                            U < v && !this._charIsMappingSeparator(D, U);
                            U++
                        );
                        if (((I = D.slice(R, U)), (q = _[I]), q)) R += I.length;
                        else {
                            for (q = []; R < U; )
                                i.decode(D, R, x),
                                    (z = x.value),
                                    (R = x.rest),
                                    q.push(z);
                            if (q.length === 2)
                                throw new Error(
                                    'Found a source, but no line and column'
                                );
                            if (q.length === 3)
                                throw new Error(
                                    'Found a source and line, but no column'
                                );
                            _[I] = q;
                        }
                        (b.generatedColumn = E + q[0]),
                            (E = b.generatedColumn),
                            q.length > 1 &&
                                ((b.source = T + q[1]),
                                (T += q[1]),
                                (b.originalLine = m + q[2]),
                                (m = b.originalLine),
                                (b.originalLine += 1),
                                (b.originalColumn = g + q[3]),
                                (g = b.originalColumn),
                                q.length > 4 &&
                                    ((b.name = k + q[4]), (k += q[4]))),
                            B.push(b),
                            typeof b.originalLine == 'number' && F.push(b);
                    }
                o(B, t.compareByGeneratedPositionsDeflated),
                    (this.__generatedMappings = B),
                    o(F, t.compareByOriginalPositions),
                    (this.__originalMappings = F);
            }),
                (l.prototype._findMapping = function (D, y, C, E, m, g) {
                    if (D[C] <= 0)
                        throw new TypeError(
                            'Line must be greater than or equal to 1, got ' +
                                D[C]
                        );
                    if (D[E] < 0)
                        throw new TypeError(
                            'Column must be greater than or equal to 0, got ' +
                                D[E]
                        );
                    return n.search(D, y, m, g);
                }),
                (l.prototype.computeColumnSpans = function () {
                    for (var D = 0; D < this._generatedMappings.length; ++D) {
                        var y = this._generatedMappings[D];
                        if (D + 1 < this._generatedMappings.length) {
                            var C = this._generatedMappings[D + 1];
                            if (y.generatedLine === C.generatedLine) {
                                y.lastGeneratedColumn = C.generatedColumn - 1;
                                continue;
                            }
                        }
                        y.lastGeneratedColumn = 1 / 0;
                    }
                }),
                (l.prototype.originalPositionFor = function (D) {
                    var y = {
                            generatedLine: t.getArg(D, 'line'),
                            generatedColumn: t.getArg(D, 'column'),
                        },
                        C = this._findMapping(
                            y,
                            this._generatedMappings,
                            'generatedLine',
                            'generatedColumn',
                            t.compareByGeneratedPositionsDeflated,
                            t.getArg(D, 'bias', s.GREATEST_LOWER_BOUND)
                        );
                    if (C >= 0) {
                        var E = this._generatedMappings[C];
                        if (E.generatedLine === y.generatedLine) {
                            var m = t.getArg(E, 'source', null);
                            m !== null &&
                                ((m = this._sources.at(m)),
                                (m = t.computeSourceURL(
                                    this.sourceRoot,
                                    m,
                                    this._sourceMapURL
                                )));
                            var g = t.getArg(E, 'name', null);
                            return (
                                g !== null && (g = this._names.at(g)),
                                {
                                    source: m,
                                    line: t.getArg(E, 'originalLine', null),
                                    column: t.getArg(E, 'originalColumn', null),
                                    name: g,
                                }
                            );
                        }
                    }
                    return {
                        source: null,
                        line: null,
                        column: null,
                        name: null,
                    };
                }),
                (l.prototype.hasContentsOfAllSources = function () {
                    return this.sourcesContent
                        ? this.sourcesContent.length >= this._sources.size() &&
                              !this.sourcesContent.some(function (D) {
                                  return D == null;
                              })
                        : !1;
                }),
                (l.prototype.sourceContentFor = function (D, y) {
                    if (!this.sourcesContent) return null;
                    var C = this._findSourceIndex(D);
                    if (C >= 0) return this.sourcesContent[C];
                    var E = D;
                    this.sourceRoot != null &&
                        (E = t.relative(this.sourceRoot, E));
                    var m;
                    if (
                        this.sourceRoot != null &&
                        (m = t.urlParse(this.sourceRoot))
                    ) {
                        var g = E.replace(/^file:\/\//, '');
                        if (m.scheme == 'file' && this._sources.has(g))
                            return this.sourcesContent[
                                this._sources.indexOf(g)
                            ];
                        if (
                            (!m.path || m.path == '/') &&
                            this._sources.has('/' + E)
                        )
                            return this.sourcesContent[
                                this._sources.indexOf('/' + E)
                            ];
                    }
                    if (y) return null;
                    throw new Error('"' + E + '" is not in the SourceMap.');
                }),
                (l.prototype.generatedPositionFor = function (D) {
                    var y = t.getArg(D, 'source');
                    if (((y = this._findSourceIndex(y)), y < 0))
                        return { line: null, column: null, lastColumn: null };
                    var C = {
                            source: y,
                            originalLine: t.getArg(D, 'line'),
                            originalColumn: t.getArg(D, 'column'),
                        },
                        E = this._findMapping(
                            C,
                            this._originalMappings,
                            'originalLine',
                            'originalColumn',
                            t.compareByOriginalPositions,
                            t.getArg(D, 'bias', s.GREATEST_LOWER_BOUND)
                        );
                    if (E >= 0) {
                        var m = this._originalMappings[E];
                        if (m.source === C.source)
                            return {
                                line: t.getArg(m, 'generatedLine', null),
                                column: t.getArg(m, 'generatedColumn', null),
                                lastColumn: t.getArg(
                                    m,
                                    'lastGeneratedColumn',
                                    null
                                ),
                            };
                    }
                    return { line: null, column: null, lastColumn: null };
                }),
                (e.BasicSourceMapConsumer = l);
            function d(D, y) {
                var C = D;
                typeof D == 'string' && (C = t.parseSourceMapInput(D));
                var E = t.getArg(C, 'version'),
                    m = t.getArg(C, 'sections');
                if (E != this._version)
                    throw new Error('Unsupported version: ' + E);
                (this._sources = new r()), (this._names = new r());
                var g = { line: -1, column: 0 };
                this._sections = m.map(function (T) {
                    if (T.url)
                        throw new Error(
                            'Support for url field in sections not implemented.'
                        );
                    var k = t.getArg(T, 'offset'),
                        v = t.getArg(k, 'line'),
                        R = t.getArg(k, 'column');
                    if (v < g.line || (v === g.line && R < g.column))
                        throw new Error(
                            'Section offsets must be ordered and non-overlapping.'
                        );
                    return (
                        (g = k),
                        {
                            generatedOffset: {
                                generatedLine: v + 1,
                                generatedColumn: R + 1,
                            },
                            consumer: new s(t.getArg(T, 'map'), y),
                        }
                    );
                });
            }
            (d.prototype = Object.create(s.prototype)),
                (d.prototype.constructor = s),
                (d.prototype._version = 3),
                Object.defineProperty(d.prototype, 'sources', {
                    get: function () {
                        for (var D = [], y = 0; y < this._sections.length; y++)
                            for (
                                var C = 0;
                                C < this._sections[y].consumer.sources.length;
                                C++
                            )
                                D.push(this._sections[y].consumer.sources[C]);
                        return D;
                    },
                }),
                (d.prototype.originalPositionFor = function (D) {
                    var y = {
                            generatedLine: t.getArg(D, 'line'),
                            generatedColumn: t.getArg(D, 'column'),
                        },
                        C = n.search(y, this._sections, function (m, g) {
                            var T =
                                m.generatedLine -
                                g.generatedOffset.generatedLine;
                            return (
                                T ||
                                m.generatedColumn -
                                    g.generatedOffset.generatedColumn
                            );
                        }),
                        E = this._sections[C];
                    return E
                        ? E.consumer.originalPositionFor({
                              line:
                                  y.generatedLine -
                                  (E.generatedOffset.generatedLine - 1),
                              column:
                                  y.generatedColumn -
                                  (E.generatedOffset.generatedLine ===
                                  y.generatedLine
                                      ? E.generatedOffset.generatedColumn - 1
                                      : 0),
                              bias: D.bias,
                          })
                        : {
                              source: null,
                              line: null,
                              column: null,
                              name: null,
                          };
                }),
                (d.prototype.hasContentsOfAllSources = function () {
                    return this._sections.every(function (D) {
                        return D.consumer.hasContentsOfAllSources();
                    });
                }),
                (d.prototype.sourceContentFor = function (D, y) {
                    for (var C = 0; C < this._sections.length; C++) {
                        var E = this._sections[C],
                            m = E.consumer.sourceContentFor(D, !0);
                        if (m) return m;
                    }
                    if (y) return null;
                    throw new Error('"' + D + '" is not in the SourceMap.');
                }),
                (d.prototype.generatedPositionFor = function (D) {
                    for (var y = 0; y < this._sections.length; y++) {
                        var C = this._sections[y];
                        if (
                            C.consumer._findSourceIndex(
                                t.getArg(D, 'source')
                            ) !== -1
                        ) {
                            var E = C.consumer.generatedPositionFor(D);
                            if (E) {
                                var m = {
                                    line:
                                        E.line +
                                        (C.generatedOffset.generatedLine - 1),
                                    column:
                                        E.column +
                                        (C.generatedOffset.generatedLine ===
                                        E.line
                                            ? C.generatedOffset
                                                  .generatedColumn - 1
                                            : 0),
                                };
                                return m;
                            }
                        }
                    }
                    return { line: null, column: null };
                }),
                (d.prototype._parseMappings = function (D, y) {
                    (this.__generatedMappings = []),
                        (this.__originalMappings = []);
                    for (var C = 0; C < this._sections.length; C++)
                        for (
                            var E = this._sections[C],
                                m = E.consumer._generatedMappings,
                                g = 0;
                            g < m.length;
                            g++
                        ) {
                            var T = m[g],
                                k = E.consumer._sources.at(T.source);
                            (k = t.computeSourceURL(
                                E.consumer.sourceRoot,
                                k,
                                this._sourceMapURL
                            )),
                                this._sources.add(k),
                                (k = this._sources.indexOf(k));
                            var v = null;
                            T.name &&
                                ((v = E.consumer._names.at(T.name)),
                                this._names.add(v),
                                (v = this._names.indexOf(v)));
                            var R = {
                                source: k,
                                generatedLine:
                                    T.generatedLine +
                                    (E.generatedOffset.generatedLine - 1),
                                generatedColumn:
                                    T.generatedColumn +
                                    (E.generatedOffset.generatedLine ===
                                    T.generatedLine
                                        ? E.generatedOffset.generatedColumn - 1
                                        : 0),
                                originalLine: T.originalLine,
                                originalColumn: T.originalColumn,
                                name: v,
                            };
                            this.__generatedMappings.push(R),
                                typeof R.originalLine == 'number' &&
                                    this.__originalMappings.push(R);
                        }
                    o(
                        this.__generatedMappings,
                        t.compareByGeneratedPositionsDeflated
                    ),
                        o(
                            this.__originalMappings,
                            t.compareByOriginalPositions
                        );
                }),
                (e.IndexedSourceMapConsumer = d);
        },
    }),
    Gu = he({
        '../../node_modules/escodegen/node_modules/source-map/lib/source-node.js'(
            e
        ) {
            var t = kr().SourceMapGenerator,
                n = St(),
                r = /(\r?\n)/,
                i = 10,
                o = '$$$isSourceNode$$$';
            function s(l, p, d, D, y) {
                (this.children = []),
                    (this.sourceContents = {}),
                    (this.line = l ?? null),
                    (this.column = p ?? null),
                    (this.source = d ?? null),
                    (this.name = y ?? null),
                    (this[o] = !0),
                    D != null && this.add(D);
            }
            (s.fromStringWithSourceMap = function (l, p, d) {
                var D = new s(),
                    y = l.split(r),
                    C = 0,
                    E = function () {
                        var v = _(),
                            R = _() || '';
                        return v + R;
                        function _() {
                            return C < y.length ? y[C++] : void 0;
                        }
                    },
                    m = 1,
                    g = 0,
                    T = null;
                return (
                    p.eachMapping(function (v) {
                        if (T !== null)
                            if (m < v.generatedLine) k(T, E()), m++, (g = 0);
                            else {
                                var R = y[C] || '',
                                    _ = R.substr(0, v.generatedColumn - g);
                                (y[C] = R.substr(v.generatedColumn - g)),
                                    (g = v.generatedColumn),
                                    k(T, _),
                                    (T = v);
                                return;
                            }
                        for (; m < v.generatedLine; ) D.add(E()), m++;
                        if (g < v.generatedColumn) {
                            var R = y[C] || '';
                            D.add(R.substr(0, v.generatedColumn)),
                                (y[C] = R.substr(v.generatedColumn)),
                                (g = v.generatedColumn);
                        }
                        T = v;
                    }, this),
                    C < y.length &&
                        (T && k(T, E()), D.add(y.splice(C).join(''))),
                    p.sources.forEach(function (v) {
                        var R = p.sourceContentFor(v);
                        R != null &&
                            (d != null && (v = n.join(d, v)),
                            D.setSourceContent(v, R));
                    }),
                    D
                );
                function k(v, R) {
                    if (v === null || v.source === void 0) D.add(R);
                    else {
                        var _ = d ? n.join(d, v.source) : v.source;
                        D.add(
                            new s(
                                v.originalLine,
                                v.originalColumn,
                                _,
                                R,
                                v.name
                            )
                        );
                    }
                }
            }),
                (s.prototype.add = function (l) {
                    if (Array.isArray(l))
                        l.forEach(function (p) {
                            this.add(p);
                        }, this);
                    else if (l[o] || typeof l == 'string')
                        l && this.children.push(l);
                    else
                        throw new TypeError(
                            'Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' +
                                l
                        );
                    return this;
                }),
                (s.prototype.prepend = function (l) {
                    if (Array.isArray(l))
                        for (var p = l.length - 1; p >= 0; p--)
                            this.prepend(l[p]);
                    else if (l[o] || typeof l == 'string')
                        this.children.unshift(l);
                    else
                        throw new TypeError(
                            'Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' +
                                l
                        );
                    return this;
                }),
                (s.prototype.walk = function (l) {
                    for (var p, d = 0, D = this.children.length; d < D; d++)
                        (p = this.children[d]),
                            p[o]
                                ? p.walk(l)
                                : p !== '' &&
                                  l(p, {
                                      source: this.source,
                                      line: this.line,
                                      column: this.column,
                                      name: this.name,
                                  });
                }),
                (s.prototype.join = function (l) {
                    var p,
                        d,
                        D = this.children.length;
                    if (D > 0) {
                        for (p = [], d = 0; d < D - 1; d++)
                            p.push(this.children[d]), p.push(l);
                        p.push(this.children[d]), (this.children = p);
                    }
                    return this;
                }),
                (s.prototype.replaceRight = function (l, p) {
                    var d = this.children[this.children.length - 1];
                    return (
                        d[o]
                            ? d.replaceRight(l, p)
                            : typeof d == 'string'
                              ? (this.children[this.children.length - 1] =
                                    d.replace(l, p))
                              : this.children.push(''.replace(l, p)),
                        this
                    );
                }),
                (s.prototype.setSourceContent = function (l, p) {
                    this.sourceContents[n.toSetString(l)] = p;
                }),
                (s.prototype.walkSourceContents = function (l) {
                    for (var p = 0, d = this.children.length; p < d; p++)
                        this.children[p][o] &&
                            this.children[p].walkSourceContents(l);
                    for (
                        var D = Object.keys(this.sourceContents),
                            p = 0,
                            d = D.length;
                        p < d;
                        p++
                    )
                        l(n.fromSetString(D[p]), this.sourceContents[D[p]]);
                }),
                (s.prototype.toString = function () {
                    var l = '';
                    return (
                        this.walk(function (p) {
                            l += p;
                        }),
                        l
                    );
                }),
                (s.prototype.toStringWithSourceMap = function (l) {
                    var p = { code: '', line: 1, column: 0 },
                        d = new t(l),
                        D = !1,
                        y = null,
                        C = null,
                        E = null,
                        m = null;
                    return (
                        this.walk(function (g, T) {
                            (p.code += g),
                                T.source !== null &&
                                T.line !== null &&
                                T.column !== null
                                    ? ((y !== T.source ||
                                          C !== T.line ||
                                          E !== T.column ||
                                          m !== T.name) &&
                                          d.addMapping({
                                              source: T.source,
                                              original: {
                                                  line: T.line,
                                                  column: T.column,
                                              },
                                              generated: {
                                                  line: p.line,
                                                  column: p.column,
                                              },
                                              name: T.name,
                                          }),
                                      (y = T.source),
                                      (C = T.line),
                                      (E = T.column),
                                      (m = T.name),
                                      (D = !0))
                                    : D &&
                                      (d.addMapping({
                                          generated: {
                                              line: p.line,
                                              column: p.column,
                                          },
                                      }),
                                      (y = null),
                                      (D = !1));
                            for (var k = 0, v = g.length; k < v; k++)
                                g.charCodeAt(k) === i
                                    ? (p.line++,
                                      (p.column = 0),
                                      k + 1 === v
                                          ? ((y = null), (D = !1))
                                          : D &&
                                            d.addMapping({
                                                source: T.source,
                                                original: {
                                                    line: T.line,
                                                    column: T.column,
                                                },
                                                generated: {
                                                    line: p.line,
                                                    column: p.column,
                                                },
                                                name: T.name,
                                            }))
                                    : p.column++;
                        }),
                        this.walkSourceContents(function (g, T) {
                            d.setSourceContent(g, T);
                        }),
                        { code: p.code, map: d }
                    );
                }),
                (e.SourceNode = s);
        },
    }),
    $u = he({
        '../../node_modules/escodegen/node_modules/source-map/source-map.js'(
            e
        ) {
            (e.SourceMapGenerator = kr().SourceMapGenerator),
                (e.SourceMapConsumer = zu().SourceMapConsumer),
                (e.SourceNode = Gu().SourceNode);
        },
    }),
    Yu = he({
        '../../node_modules/escodegen/package.json'(e, t) {
            t.exports = {
                name: 'escodegen',
                description: 'ECMAScript code generator',
                homepage: 'http://github.com/estools/escodegen',
                main: 'escodegen.js',
                bin: {
                    esgenerate: './bin/esgenerate.js',
                    escodegen: './bin/escodegen.js',
                },
                files: [
                    'LICENSE.BSD',
                    'README.md',
                    'bin',
                    'escodegen.js',
                    'package.json',
                ],
                version: '2.1.0',
                engines: { node: '>=6.0' },
                maintainers: [
                    {
                        name: 'Yusuke Suzuki',
                        email: 'utatane.tea@gmail.com',
                        web: 'http://github.com/Constellation',
                    },
                ],
                repository: {
                    type: 'git',
                    url: 'http://github.com/estools/escodegen.git',
                },
                dependencies: {
                    estraverse: '^5.2.0',
                    esutils: '^2.0.2',
                    esprima: '^4.0.1',
                },
                optionalDependencies: { 'source-map': '~0.6.1' },
                devDependencies: {
                    acorn: '^8.0.4',
                    bluebird: '^3.4.7',
                    'bower-registry-client': '^1.0.0',
                    chai: '^4.2.0',
                    'chai-exclude': '^2.0.2',
                    'commonjs-everywhere': '^0.9.7',
                    gulp: '^4.0.2',
                    'gulp-eslint': '^6.0.0',
                    'gulp-mocha': '^7.0.2',
                    minimist: '^1.2.5',
                    optionator: '^0.9.1',
                    semver: '^7.3.4',
                },
                license: 'BSD-2-Clause',
                scripts: {
                    test: 'gulp travis',
                    'unit-test': 'gulp test',
                    lint: 'gulp lint',
                    release: 'node tools/release.js',
                    'build-min':
                        './node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js',
                    build: './node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js',
                },
            };
        },
    }),
    Ju = he({
        '../../node_modules/escodegen/escodegen.js'(e) {
            (function () {
                var t,
                    n,
                    r,
                    i,
                    o,
                    s,
                    l,
                    p,
                    d,
                    D,
                    y,
                    C,
                    E,
                    m,
                    g,
                    T,
                    k,
                    v,
                    R,
                    _,
                    x,
                    F,
                    B,
                    b,
                    I,
                    q;
                (o = Lu()), (s = Mu()), (t = o.Syntax);
                function U(u) {
                    return Fe.Expression.hasOwnProperty(u.type);
                }
                function z(u) {
                    return Fe.Statement.hasOwnProperty(u.type);
                }
                (n = {
                    Sequence: 0,
                    Yield: 1,
                    Assignment: 1,
                    Conditional: 2,
                    ArrowFunction: 2,
                    Coalesce: 3,
                    LogicalOR: 4,
                    LogicalAND: 5,
                    BitwiseOR: 6,
                    BitwiseXOR: 7,
                    BitwiseAND: 8,
                    Equality: 9,
                    Relational: 10,
                    BitwiseSHIFT: 11,
                    Additive: 12,
                    Multiplicative: 13,
                    Exponentiation: 14,
                    Await: 15,
                    Unary: 15,
                    Postfix: 16,
                    OptionalChaining: 17,
                    Call: 18,
                    New: 19,
                    TaggedTemplate: 20,
                    Member: 21,
                    Primary: 22,
                }),
                    (r = {
                        '??': n.Coalesce,
                        '||': n.LogicalOR,
                        '&&': n.LogicalAND,
                        '|': n.BitwiseOR,
                        '^': n.BitwiseXOR,
                        '&': n.BitwiseAND,
                        '==': n.Equality,
                        '!=': n.Equality,
                        '===': n.Equality,
                        '!==': n.Equality,
                        is: n.Equality,
                        isnt: n.Equality,
                        '<': n.Relational,
                        '>': n.Relational,
                        '<=': n.Relational,
                        '>=': n.Relational,
                        in: n.Relational,
                        instanceof: n.Relational,
                        '<<': n.BitwiseSHIFT,
                        '>>': n.BitwiseSHIFT,
                        '>>>': n.BitwiseSHIFT,
                        '+': n.Additive,
                        '-': n.Additive,
                        '*': n.Multiplicative,
                        '%': n.Multiplicative,
                        '/': n.Multiplicative,
                        '**': n.Exponentiation,
                    });
                var G = 1,
                    ee = 2,
                    de = 4,
                    pe = 8,
                    Ae = 16,
                    te = 32,
                    Ee = 64,
                    Re = ee | de,
                    be = G | ee,
                    S = G | ee | de,
                    j = G,
                    J = de,
                    H = G | de,
                    M = G,
                    X = G | te,
                    Q = 0,
                    ne = G | Ae,
                    ie = G | pe;
                function le() {
                    return {
                        indent: null,
                        base: null,
                        parse: null,
                        comment: !1,
                        format: {
                            indent: {
                                style: '    ',
                                base: 0,
                                adjustMultilineComment: !1,
                            },
                            newline: `
`,
                            space: ' ',
                            json: !1,
                            renumber: !1,
                            hexadecimal: !1,
                            quotes: 'single',
                            escapeless: !1,
                            compact: !1,
                            parentheses: !0,
                            semicolons: !0,
                            safeConcatenation: !1,
                            preserveBlankLines: !1,
                        },
                        moz: {
                            comprehensionExpressionStartsWithAssignment: !1,
                            starlessGenerator: !1,
                        },
                        sourceMap: null,
                        sourceMapRoot: null,
                        sourceMapWithCode: !1,
                        directive: !1,
                        raw: !0,
                        verbatim: null,
                        sourceCode: null,
                    };
                }
                function Z(u, c) {
                    var a = '';
                    for (c |= 0; c > 0; c >>>= 1, u += u) c & 1 && (a += u);
                    return a;
                }
                function N(u) {
                    return /[\r\n]/g.test(u);
                }
                function se(u) {
                    var c = u.length;
                    return c && s.code.isLineTerminator(u.charCodeAt(c - 1));
                }
                function W(u, c) {
                    var a;
                    for (a in c) c.hasOwnProperty(a) && (u[a] = c[a]);
                    return u;
                }
                function Ne(u, c) {
                    var a, h;
                    function A(w) {
                        return (
                            typeof w == 'object' &&
                            w instanceof Object &&
                            !(w instanceof RegExp)
                        );
                    }
                    for (a in c)
                        c.hasOwnProperty(a) &&
                            ((h = c[a]),
                            A(h)
                                ? A(u[a])
                                    ? Ne(u[a], h)
                                    : (u[a] = Ne({}, h))
                                : (u[a] = h));
                    return u;
                }
                function rt(u) {
                    var c, a, h, A, w;
                    if (u !== u)
                        throw new Error('Numeric literal whose value is NaN');
                    if (u < 0 || (u === 0 && 1 / u < 0))
                        throw new Error(
                            'Numeric literal whose value is negative'
                        );
                    if (u === 1 / 0) return d ? 'null' : D ? '1e400' : '1e+400';
                    if (((c = '' + u), !D || c.length < 3)) return c;
                    for (
                        a = c.indexOf('.'),
                            !d &&
                                c.charCodeAt(0) === 48 &&
                                a === 1 &&
                                ((a = 0), (c = c.slice(1))),
                            h = c,
                            c = c.replace('e+', 'e'),
                            A = 0,
                            (w = h.indexOf('e')) > 0 &&
                                ((A = +h.slice(w + 1)), (h = h.slice(0, w))),
                            a >= 0 &&
                                ((A -= h.length - a - 1),
                                (h = +(h.slice(0, a) + h.slice(a + 1)) + '')),
                            w = 0;
                        h.charCodeAt(h.length + w - 1) === 48;

                    )
                        --w;
                    return (
                        w !== 0 && ((A -= w), (h = h.slice(0, w))),
                        A !== 0 && (h += 'e' + A),
                        (h.length < c.length ||
                            (y &&
                                u > 1e12 &&
                                Math.floor(u) === u &&
                                (h = '0x' + u.toString(16)).length <
                                    c.length)) &&
                            +h === u &&
                            (c = h),
                        c
                    );
                }
                function At(u, c) {
                    return (u & -2) === 8232
                        ? (c ? 'u' : '\\u') + (u === 8232 ? '2028' : '2029')
                        : u === 10 || u === 13
                          ? (c ? '' : '\\') + (u === 10 ? 'n' : 'r')
                          : String.fromCharCode(u);
                }
                function ou(u) {
                    var c, a, h, A, w, P, O, V;
                    if (((a = u.toString()), u.source)) {
                        if (((c = a.match(/\/([^/]*)$/)), !c)) return a;
                        for (
                            h = c[1],
                                a = '',
                                O = !1,
                                V = !1,
                                A = 0,
                                w = u.source.length;
                            A < w;
                            ++A
                        )
                            (P = u.source.charCodeAt(A)),
                                V
                                    ? ((a += At(P, V)), (V = !1))
                                    : (O
                                          ? P === 93 && (O = !1)
                                          : P === 47
                                            ? (a += '\\')
                                            : P === 91 && (O = !0),
                                      (a += At(P, V)),
                                      (V = P === 92));
                        return '/' + a + '/' + h;
                    }
                    return a;
                }
                function lu(u, c) {
                    var a;
                    return u === 8
                        ? '\\b'
                        : u === 12
                          ? '\\f'
                          : u === 9
                            ? '\\t'
                            : ((a = u.toString(16).toUpperCase()),
                              d || u > 255
                                  ? '\\u' + '0000'.slice(a.length) + a
                                  : u === 0 && !s.code.isDecimalDigit(c)
                                    ? '\\0'
                                    : u === 11
                                      ? '\\x0B'
                                      : '\\x' + '00'.slice(a.length) + a);
                }
                function cu(u) {
                    if (u === 92) return '\\\\';
                    if (u === 10) return '\\n';
                    if (u === 13) return '\\r';
                    if (u === 8232) return '\\u2028';
                    if (u === 8233) return '\\u2029';
                    throw new Error('Incorrectly classified character');
                }
                function hu(u) {
                    var c, a, h, A;
                    for (
                        A = C === 'double' ? '"' : "'", c = 0, a = u.length;
                        c < a;
                        ++c
                    )
                        if (((h = u.charCodeAt(c)), h === 39)) {
                            A = '"';
                            break;
                        } else if (h === 34) {
                            A = "'";
                            break;
                        } else h === 92 && ++c;
                    return A + u + A;
                }
                function pu(u) {
                    var c = '',
                        a,
                        h,
                        A,
                        w = 0,
                        P = 0,
                        O,
                        V;
                    for (a = 0, h = u.length; a < h; ++a) {
                        if (((A = u.charCodeAt(a)), A === 39)) ++w;
                        else if (A === 34) ++P;
                        else if (A === 47 && d) c += '\\';
                        else if (s.code.isLineTerminator(A) || A === 92) {
                            c += cu(A);
                            continue;
                        } else if (
                            !s.code.isIdentifierPartES5(A) &&
                            ((d && A < 32) || (!d && !E && (A < 32 || A > 126)))
                        ) {
                            c += lu(A, u.charCodeAt(a + 1));
                            continue;
                        }
                        c += String.fromCharCode(A);
                    }
                    if (
                        ((O = !(C === 'double' || (C === 'auto' && P < w))),
                        (V = O ? "'" : '"'),
                        !(O ? w : P))
                    )
                        return V + c + V;
                    for (u = c, c = V, a = 0, h = u.length; a < h; ++a)
                        (A = u.charCodeAt(a)),
                            ((A === 39 && O) || (A === 34 && !O)) &&
                                (c += '\\'),
                            (c += String.fromCharCode(A));
                    return c + V;
                }
                function jn(u) {
                    var c,
                        a,
                        h,
                        A = '';
                    for (c = 0, a = u.length; c < a; ++c)
                        (h = u[c]), (A += Array.isArray(h) ? jn(h) : h);
                    return A;
                }
                function fe(u, c) {
                    if (!F) return Array.isArray(u) ? jn(u) : u;
                    if (c == null) {
                        if (u instanceof i) return u;
                        c = {};
                    }
                    return c.loc == null
                        ? new i(null, null, F, u, c.name || null)
                        : new i(
                              c.loc.start.line,
                              c.loc.start.column,
                              F === !0 ? c.loc.source || null : F,
                              u,
                              c.name || null
                          );
                }
                function Be() {
                    return g || ' ';
                }
                function Y(u, c) {
                    var a, h, A, w;
                    return (
                        (a = fe(u).toString()),
                        a.length === 0
                            ? [c]
                            : ((h = fe(c).toString()),
                              h.length === 0
                                  ? [u]
                                  : ((A = a.charCodeAt(a.length - 1)),
                                    (w = h.charCodeAt(0)),
                                    ((A === 43 || A === 45) && A === w) ||
                                    (s.code.isIdentifierPartES5(A) &&
                                        s.code.isIdentifierPartES5(w)) ||
                                    (A === 47 && w === 105)
                                        ? [u, Be(), c]
                                        : s.code.isWhiteSpace(A) ||
                                            s.code.isLineTerminator(A) ||
                                            s.code.isWhiteSpace(w) ||
                                            s.code.isLineTerminator(w)
                                          ? [u, c]
                                          : [u, g, c]))
                    );
                }
                function ve(u) {
                    return [l, u];
                }
                function ge(u) {
                    var c;
                    (c = l), (l += p), u(l), (l = c);
                }
                function fu(u) {
                    var c;
                    for (
                        c = u.length - 1;
                        c >= 0 && !s.code.isLineTerminator(u.charCodeAt(c));
                        --c
                    );
                    return u.length - 1 - c;
                }
                function du(u, c) {
                    var a, h, A, w, P, O, V, ae;
                    for (
                        a = u.split(/\r\n|[\r\n]/),
                            O = Number.MAX_VALUE,
                            h = 1,
                            A = a.length;
                        h < A;
                        ++h
                    ) {
                        for (
                            w = a[h], P = 0;
                            P < w.length &&
                            s.code.isWhiteSpace(w.charCodeAt(P));

                        )
                            ++P;
                        O > P && (O = P);
                    }
                    for (
                        typeof c < 'u'
                            ? ((V = l), a[1][O] === '*' && (c += ' '), (l = c))
                            : (O & 1 && --O, (V = l)),
                            h = 1,
                            A = a.length;
                        h < A;
                        ++h
                    )
                        (ae = fe(ve(a[h].slice(O)))),
                            (a[h] = F ? ae.join('') : ae);
                    return (
                        (l = V),
                        a.join(`
`)
                    );
                }
                function We(u, c) {
                    if (u.type === 'Line') {
                        if (se(u.value)) return '//' + u.value;
                        var a = '//' + u.value;
                        return (
                            b ||
                                (a += `
`),
                            a
                        );
                    }
                    return _.format.indent.adjustMultilineComment &&
                        /[\n\r]/.test(u.value)
                        ? du('/*' + u.value + '*/', c)
                        : '/*' + u.value + '*/';
                }
                function Mn(u, c) {
                    var a, h, A, w, P, O, V, ae, xe, He, it, Un, Wn, je;
                    if (u.leadingComments && u.leadingComments.length > 0) {
                        if (((w = c), b)) {
                            for (
                                A = u.leadingComments[0],
                                    c = [],
                                    ae = A.extendedRange,
                                    xe = A.range,
                                    it = B.substring(ae[0], xe[0]),
                                    je = (it.match(/\n/g) || []).length,
                                    je > 0
                                        ? (c.push(
                                              Z(
                                                  `
`,
                                                  je
                                              )
                                          ),
                                          c.push(ve(We(A))))
                                        : (c.push(it), c.push(We(A))),
                                    He = xe,
                                    a = 1,
                                    h = u.leadingComments.length;
                                a < h;
                                a++
                            )
                                (A = u.leadingComments[a]),
                                    (xe = A.range),
                                    (Un = B.substring(He[1], xe[0])),
                                    (je = (Un.match(/\n/g) || []).length),
                                    c.push(
                                        Z(
                                            `
`,
                                            je
                                        )
                                    ),
                                    c.push(ve(We(A))),
                                    (He = xe);
                            (Wn = B.substring(xe[1], ae[1])),
                                (je = (Wn.match(/\n/g) || []).length),
                                c.push(
                                    Z(
                                        `
`,
                                        je
                                    )
                                );
                        } else
                            for (
                                A = u.leadingComments[0],
                                    c = [],
                                    v &&
                                        u.type === t.Program &&
                                        u.body.length === 0 &&
                                        c.push(`
`),
                                    c.push(We(A)),
                                    se(fe(c).toString()) ||
                                        c.push(`
`),
                                    a = 1,
                                    h = u.leadingComments.length;
                                a < h;
                                ++a
                            )
                                (A = u.leadingComments[a]),
                                    (V = [We(A)]),
                                    se(fe(V).toString()) ||
                                        V.push(`
`),
                                    c.push(ve(V));
                        c.push(ve(w));
                    }
                    if (u.trailingComments)
                        if (b)
                            (A = u.trailingComments[0]),
                                (ae = A.extendedRange),
                                (xe = A.range),
                                (it = B.substring(ae[0], xe[0])),
                                (je = (it.match(/\n/g) || []).length),
                                je > 0
                                    ? (c.push(
                                          Z(
                                              `
`,
                                              je
                                          )
                                      ),
                                      c.push(ve(We(A))))
                                    : (c.push(it), c.push(We(A)));
                        else
                            for (
                                P = !se(fe(c).toString()),
                                    O = Z(' ', fu(fe([l, c, p]).toString())),
                                    a = 0,
                                    h = u.trailingComments.length;
                                a < h;
                                ++a
                            )
                                (A = u.trailingComments[a]),
                                    P
                                        ? (a === 0
                                              ? (c = [c, p])
                                              : (c = [c, O]),
                                          c.push(We(A, O)))
                                        : (c = [c, ve(We(A))]),
                                    a !== h - 1 &&
                                        !se(fe(c).toString()) &&
                                        (c = [
                                            c,
                                            `
`,
                                        ]);
                    return c;
                }
                function ut(u, c, a) {
                    var h,
                        A = 0;
                    for (h = u; h < c; h++)
                        B[h] ===
                            `
` && A++;
                    for (h = 1; h < A; h++) a.push(m);
                }
                function ye(u, c, a) {
                    return c < a ? ['(', u, ')'] : u;
                }
                function Vn(u) {
                    var c, a, h;
                    for (
                        h = u.split(/\r\n|\n/), c = 1, a = h.length;
                        c < a;
                        c++
                    )
                        h[c] = m + l + h[c];
                    return h;
                }
                function Au(u, c) {
                    var a, h, A;
                    return (
                        (a = u[_.verbatim]),
                        typeof a == 'string'
                            ? (h = ye(Vn(a), n.Sequence, c))
                            : ((h = Vn(a.content)),
                              (A =
                                  a.precedence != null
                                      ? a.precedence
                                      : n.Sequence),
                              (h = ye(h, A, c))),
                        fe(h, u)
                    );
                }
                function Fe() {}
                (Fe.prototype.maybeBlock = function (u, c) {
                    var a,
                        h,
                        A = this;
                    return (
                        (h = !_.comment || !u.leadingComments),
                        u.type === t.BlockStatement && h
                            ? [g, this.generateStatement(u, c)]
                            : u.type === t.EmptyStatement && h
                              ? ';'
                              : (ge(function () {
                                    a = [m, ve(A.generateStatement(u, c))];
                                }),
                                a)
                    );
                }),
                    (Fe.prototype.maybeBlockSuffix = function (u, c) {
                        var a = se(fe(c).toString());
                        return u.type === t.BlockStatement &&
                            (!_.comment || !u.leadingComments) &&
                            !a
                            ? [c, g]
                            : a
                              ? [c, l]
                              : [c, m, l];
                    });
                function ke(u) {
                    return fe(u.name, u);
                }
                function Dt(u, c) {
                    return u.async ? 'async' + (c ? Be() : g) : '';
                }
                function Tt(u) {
                    var c = u.generator && !_.moz.starlessGenerator;
                    return c ? '*' + g : '';
                }
                function qn(u) {
                    var c = u.value,
                        a = '';
                    return (
                        c.async && (a += Dt(c, !u.computed)),
                        c.generator && (a += Tt(c) ? '*' : ''),
                        a
                    );
                }
                (Fe.prototype.generatePattern = function (u, c, a) {
                    return u.type === t.Identifier
                        ? ke(u)
                        : this.generateExpression(u, c, a);
                }),
                    (Fe.prototype.generateFunctionParams = function (u) {
                        var c, a, h, A;
                        if (
                            ((A = !1),
                            u.type === t.ArrowFunctionExpression &&
                                !u.rest &&
                                (!u.defaults || u.defaults.length === 0) &&
                                u.params.length === 1 &&
                                u.params[0].type === t.Identifier)
                        )
                            h = [Dt(u, !0), ke(u.params[0])];
                        else {
                            for (
                                h =
                                    u.type === t.ArrowFunctionExpression
                                        ? [Dt(u, !1)]
                                        : [],
                                    h.push('('),
                                    u.defaults && (A = !0),
                                    c = 0,
                                    a = u.params.length;
                                c < a;
                                ++c
                            )
                                A && u.defaults[c]
                                    ? h.push(
                                          this.generateAssignment(
                                              u.params[c],
                                              u.defaults[c],
                                              '=',
                                              n.Assignment,
                                              S
                                          )
                                      )
                                    : h.push(
                                          this.generatePattern(
                                              u.params[c],
                                              n.Assignment,
                                              S
                                          )
                                      ),
                                    c + 1 < a && h.push(',' + g);
                            u.rest &&
                                (u.params.length && h.push(',' + g),
                                h.push('...'),
                                h.push(ke(u.rest))),
                                h.push(')');
                        }
                        return h;
                    }),
                    (Fe.prototype.generateFunctionBody = function (u) {
                        var c, a;
                        return (
                            (c = this.generateFunctionParams(u)),
                            u.type === t.ArrowFunctionExpression &&
                                (c.push(g), c.push('=>')),
                            u.expression
                                ? (c.push(g),
                                  (a = this.generateExpression(
                                      u.body,
                                      n.Assignment,
                                      S
                                  )),
                                  a.toString().charAt(0) === '{' &&
                                      (a = ['(', a, ')']),
                                  c.push(a))
                                : c.push(this.maybeBlock(u.body, ie)),
                            c
                        );
                    }),
                    (Fe.prototype.generateIterationForStatement = function (
                        u,
                        c,
                        a
                    ) {
                        var h = [
                                'for' +
                                    (c.await ? Be() + 'await' : '') +
                                    g +
                                    '(',
                            ],
                            A = this;
                        return (
                            ge(function () {
                                c.left.type === t.VariableDeclaration
                                    ? ge(function () {
                                          h.push(c.left.kind + Be()),
                                              h.push(
                                                  A.generateStatement(
                                                      c.left.declarations[0],
                                                      Q
                                                  )
                                              );
                                      })
                                    : h.push(
                                          A.generateExpression(
                                              c.left,
                                              n.Call,
                                              S
                                          )
                                      ),
                                    (h = Y(h, u)),
                                    (h = [
                                        Y(
                                            h,
                                            A.generateExpression(
                                                c.right,
                                                n.Assignment,
                                                S
                                            )
                                        ),
                                        ')',
                                    ]);
                            }),
                            h.push(this.maybeBlock(c.body, a)),
                            h
                        );
                    }),
                    (Fe.prototype.generatePropertyKey = function (u, c) {
                        var a = [];
                        return (
                            c && a.push('['),
                            a.push(this.generateExpression(u, n.Assignment, S)),
                            c && a.push(']'),
                            a
                        );
                    }),
                    (Fe.prototype.generateAssignment = function (
                        u,
                        c,
                        a,
                        h,
                        A
                    ) {
                        return (
                            n.Assignment < h && (A |= G),
                            ye(
                                [
                                    this.generateExpression(u, n.Call, A),
                                    g + a + g,
                                    this.generateExpression(c, n.Assignment, A),
                                ],
                                n.Assignment,
                                h
                            )
                        );
                    }),
                    (Fe.prototype.semicolon = function (u) {
                        return !k && u & te ? '' : ';';
                    }),
                    (Fe.Statement = {
                        BlockStatement: function (u, c) {
                            var a,
                                h,
                                A = ['{', m],
                                w = this;
                            return (
                                ge(function () {
                                    u.body.length === 0 &&
                                        b &&
                                        ((a = u.range),
                                        a[1] - a[0] > 2 &&
                                            ((h = B.substring(
                                                a[0] + 1,
                                                a[1] - 1
                                            )),
                                            h[0] ===
                                                `
` && (A = ['{']),
                                            A.push(h)));
                                    var P, O, V, ae;
                                    for (
                                        ae = M,
                                            c & pe && (ae |= Ae),
                                            P = 0,
                                            O = u.body.length;
                                        P < O;
                                        ++P
                                    )
                                        b &&
                                            (P === 0 &&
                                                (u.body[0].leadingComments &&
                                                    ((a =
                                                        u.body[0]
                                                            .leadingComments[0]
                                                            .extendedRange),
                                                    (h = B.substring(
                                                        a[0],
                                                        a[1]
                                                    )),
                                                    h[0] ===
                                                        `
` && (A = ['{'])),
                                                u.body[0].leadingComments ||
                                                    ut(
                                                        u.range[0],
                                                        u.body[0].range[0],
                                                        A
                                                    )),
                                            P > 0 &&
                                                !u.body[P - 1]
                                                    .trailingComments &&
                                                !u.body[P].leadingComments &&
                                                ut(
                                                    u.body[P - 1].range[1],
                                                    u.body[P].range[0],
                                                    A
                                                )),
                                            P === O - 1 && (ae |= te),
                                            u.body[P].leadingComments && b
                                                ? (V = w.generateStatement(
                                                      u.body[P],
                                                      ae
                                                  ))
                                                : (V = ve(
                                                      w.generateStatement(
                                                          u.body[P],
                                                          ae
                                                      )
                                                  )),
                                            A.push(V),
                                            se(fe(V).toString()) ||
                                                (b &&
                                                    P < O - 1 &&
                                                    u.body[P + 1]
                                                        .leadingComments) ||
                                                A.push(m),
                                            b &&
                                                P === O - 1 &&
                                                (u.body[P].trailingComments ||
                                                    ut(
                                                        u.body[P].range[1],
                                                        u.range[1],
                                                        A
                                                    ));
                                }),
                                A.push(ve('}')),
                                A
                            );
                        },
                        BreakStatement: function (u, c) {
                            return u.label
                                ? 'break ' + u.label.name + this.semicolon(c)
                                : 'break' + this.semicolon(c);
                        },
                        ContinueStatement: function (u, c) {
                            return u.label
                                ? 'continue ' + u.label.name + this.semicolon(c)
                                : 'continue' + this.semicolon(c);
                        },
                        ClassBody: function (u, c) {
                            var a = ['{', m],
                                h = this;
                            return (
                                ge(function (A) {
                                    var w, P;
                                    for (w = 0, P = u.body.length; w < P; ++w)
                                        a.push(A),
                                            a.push(
                                                h.generateExpression(
                                                    u.body[w],
                                                    n.Sequence,
                                                    S
                                                )
                                            ),
                                            w + 1 < P && a.push(m);
                                }),
                                se(fe(a).toString()) || a.push(m),
                                a.push(l),
                                a.push('}'),
                                a
                            );
                        },
                        ClassDeclaration: function (u, c) {
                            var a, h;
                            return (
                                (a = ['class']),
                                u.id &&
                                    (a = Y(
                                        a,
                                        this.generateExpression(
                                            u.id,
                                            n.Sequence,
                                            S
                                        )
                                    )),
                                u.superClass &&
                                    ((h = Y(
                                        'extends',
                                        this.generateExpression(
                                            u.superClass,
                                            n.Unary,
                                            S
                                        )
                                    )),
                                    (a = Y(a, h))),
                                a.push(g),
                                a.push(this.generateStatement(u.body, X)),
                                a
                            );
                        },
                        DirectiveStatement: function (u, c) {
                            return _.raw && u.raw
                                ? u.raw + this.semicolon(c)
                                : hu(u.directive) + this.semicolon(c);
                        },
                        DoWhileStatement: function (u, c) {
                            var a = Y('do', this.maybeBlock(u.body, M));
                            return (
                                (a = this.maybeBlockSuffix(u.body, a)),
                                Y(a, [
                                    'while' + g + '(',
                                    this.generateExpression(
                                        u.test,
                                        n.Sequence,
                                        S
                                    ),
                                    ')' + this.semicolon(c),
                                ])
                            );
                        },
                        CatchClause: function (u, c) {
                            var a,
                                h = this;
                            return (
                                ge(function () {
                                    var A;
                                    u.param
                                        ? ((a = [
                                              'catch' + g + '(',
                                              h.generateExpression(
                                                  u.param,
                                                  n.Sequence,
                                                  S
                                              ),
                                              ')',
                                          ]),
                                          u.guard &&
                                              ((A = h.generateExpression(
                                                  u.guard,
                                                  n.Sequence,
                                                  S
                                              )),
                                              a.splice(2, 0, ' if ', A)))
                                        : (a = ['catch']);
                                }),
                                a.push(this.maybeBlock(u.body, M)),
                                a
                            );
                        },
                        DebuggerStatement: function (u, c) {
                            return 'debugger' + this.semicolon(c);
                        },
                        EmptyStatement: function (u, c) {
                            return ';';
                        },
                        ExportDefaultDeclaration: function (u, c) {
                            var a = ['export'],
                                h;
                            return (
                                (h = c & te ? X : M),
                                (a = Y(a, 'default')),
                                z(u.declaration)
                                    ? (a = Y(
                                          a,
                                          this.generateStatement(
                                              u.declaration,
                                              h
                                          )
                                      ))
                                    : (a = Y(
                                          a,
                                          this.generateExpression(
                                              u.declaration,
                                              n.Assignment,
                                              S
                                          ) + this.semicolon(c)
                                      )),
                                a
                            );
                        },
                        ExportNamedDeclaration: function (u, c) {
                            var a = ['export'],
                                h,
                                A = this;
                            return (
                                (h = c & te ? X : M),
                                u.declaration
                                    ? Y(
                                          a,
                                          this.generateStatement(
                                              u.declaration,
                                              h
                                          )
                                      )
                                    : (u.specifiers &&
                                          (u.specifiers.length === 0
                                              ? (a = Y(a, '{' + g + '}'))
                                              : u.specifiers[0].type ===
                                                  t.ExportBatchSpecifier
                                                ? (a = Y(
                                                      a,
                                                      this.generateExpression(
                                                          u.specifiers[0],
                                                          n.Sequence,
                                                          S
                                                      )
                                                  ))
                                                : ((a = Y(a, '{')),
                                                  ge(function (w) {
                                                      var P, O;
                                                      for (
                                                          a.push(m),
                                                              P = 0,
                                                              O =
                                                                  u.specifiers
                                                                      .length;
                                                          P < O;
                                                          ++P
                                                      )
                                                          a.push(w),
                                                              a.push(
                                                                  A.generateExpression(
                                                                      u
                                                                          .specifiers[
                                                                          P
                                                                      ],
                                                                      n.Sequence,
                                                                      S
                                                                  )
                                                              ),
                                                              P + 1 < O &&
                                                                  a.push(
                                                                      ',' + m
                                                                  );
                                                  }),
                                                  se(fe(a).toString()) ||
                                                      a.push(m),
                                                  a.push(l + '}')),
                                          u.source
                                              ? (a = Y(a, [
                                                    'from' + g,
                                                    this.generateExpression(
                                                        u.source,
                                                        n.Sequence,
                                                        S
                                                    ),
                                                    this.semicolon(c),
                                                ]))
                                              : a.push(this.semicolon(c))),
                                      a)
                            );
                        },
                        ExportAllDeclaration: function (u, c) {
                            return [
                                'export' + g,
                                '*' + g,
                                'from' + g,
                                this.generateExpression(
                                    u.source,
                                    n.Sequence,
                                    S
                                ),
                                this.semicolon(c),
                            ];
                        },
                        ExpressionStatement: function (u, c) {
                            var a, h;
                            function A(O) {
                                var V;
                                return O.slice(0, 5) !== 'class'
                                    ? !1
                                    : ((V = O.charCodeAt(5)),
                                      V === 123 ||
                                          s.code.isWhiteSpace(V) ||
                                          s.code.isLineTerminator(V));
                            }
                            function w(O) {
                                var V;
                                return O.slice(0, 8) !== 'function'
                                    ? !1
                                    : ((V = O.charCodeAt(8)),
                                      V === 40 ||
                                          s.code.isWhiteSpace(V) ||
                                          V === 42 ||
                                          s.code.isLineTerminator(V));
                            }
                            function P(O) {
                                var V, ae, xe;
                                if (
                                    O.slice(0, 5) !== 'async' ||
                                    !s.code.isWhiteSpace(O.charCodeAt(5))
                                )
                                    return !1;
                                for (
                                    ae = 6, xe = O.length;
                                    ae < xe &&
                                    s.code.isWhiteSpace(O.charCodeAt(ae));
                                    ++ae
                                );
                                return ae === xe ||
                                    O.slice(ae, ae + 8) !== 'function'
                                    ? !1
                                    : ((V = O.charCodeAt(ae + 8)),
                                      V === 40 ||
                                          s.code.isWhiteSpace(V) ||
                                          V === 42 ||
                                          s.code.isLineTerminator(V));
                            }
                            return (
                                (a = [
                                    this.generateExpression(
                                        u.expression,
                                        n.Sequence,
                                        S
                                    ),
                                ]),
                                (h = fe(a).toString()),
                                h.charCodeAt(0) === 123 ||
                                A(h) ||
                                w(h) ||
                                P(h) ||
                                (R &&
                                    c & Ae &&
                                    u.expression.type === t.Literal &&
                                    typeof u.expression.value == 'string')
                                    ? (a = ['(', a, ')' + this.semicolon(c)])
                                    : a.push(this.semicolon(c)),
                                a
                            );
                        },
                        ImportDeclaration: function (u, c) {
                            var a,
                                h,
                                A = this;
                            return u.specifiers.length === 0
                                ? [
                                      'import',
                                      g,
                                      this.generateExpression(
                                          u.source,
                                          n.Sequence,
                                          S
                                      ),
                                      this.semicolon(c),
                                  ]
                                : ((a = ['import']),
                                  (h = 0),
                                  u.specifiers[h].type ===
                                      t.ImportDefaultSpecifier &&
                                      ((a = Y(a, [
                                          this.generateExpression(
                                              u.specifiers[h],
                                              n.Sequence,
                                              S
                                          ),
                                      ])),
                                      ++h),
                                  u.specifiers[h] &&
                                      (h !== 0 && a.push(','),
                                      u.specifiers[h].type ===
                                      t.ImportNamespaceSpecifier
                                          ? (a = Y(a, [
                                                g,
                                                this.generateExpression(
                                                    u.specifiers[h],
                                                    n.Sequence,
                                                    S
                                                ),
                                            ]))
                                          : (a.push(g + '{'),
                                            u.specifiers.length - h === 1
                                                ? (a.push(g),
                                                  a.push(
                                                      this.generateExpression(
                                                          u.specifiers[h],
                                                          n.Sequence,
                                                          S
                                                      )
                                                  ),
                                                  a.push(g + '}' + g))
                                                : (ge(function (w) {
                                                      var P, O;
                                                      for (
                                                          a.push(m),
                                                              P = h,
                                                              O =
                                                                  u.specifiers
                                                                      .length;
                                                          P < O;
                                                          ++P
                                                      )
                                                          a.push(w),
                                                              a.push(
                                                                  A.generateExpression(
                                                                      u
                                                                          .specifiers[
                                                                          P
                                                                      ],
                                                                      n.Sequence,
                                                                      S
                                                                  )
                                                              ),
                                                              P + 1 < O &&
                                                                  a.push(
                                                                      ',' + m
                                                                  );
                                                  }),
                                                  se(fe(a).toString()) ||
                                                      a.push(m),
                                                  a.push(l + '}' + g)))),
                                  (a = Y(a, [
                                      'from' + g,
                                      this.generateExpression(
                                          u.source,
                                          n.Sequence,
                                          S
                                      ),
                                      this.semicolon(c),
                                  ])),
                                  a);
                        },
                        VariableDeclarator: function (u, c) {
                            var a = c & G ? S : Re;
                            return u.init
                                ? [
                                      this.generateExpression(
                                          u.id,
                                          n.Assignment,
                                          a
                                      ),
                                      g,
                                      '=',
                                      g,
                                      this.generateExpression(
                                          u.init,
                                          n.Assignment,
                                          a
                                      ),
                                  ]
                                : this.generatePattern(u.id, n.Assignment, a);
                        },
                        VariableDeclaration: function (u, c) {
                            var a,
                                h,
                                A,
                                w,
                                P,
                                O = this;
                            (a = [u.kind]), (P = c & G ? M : Q);
                            function V() {
                                for (
                                    w = u.declarations[0],
                                        _.comment && w.leadingComments
                                            ? (a.push(`
`),
                                              a.push(
                                                  ve(O.generateStatement(w, P))
                                              ))
                                            : (a.push(Be()),
                                              a.push(
                                                  O.generateStatement(w, P)
                                              )),
                                        h = 1,
                                        A = u.declarations.length;
                                    h < A;
                                    ++h
                                )
                                    (w = u.declarations[h]),
                                        _.comment && w.leadingComments
                                            ? (a.push(',' + m),
                                              a.push(
                                                  ve(O.generateStatement(w, P))
                                              ))
                                            : (a.push(',' + g),
                                              a.push(
                                                  O.generateStatement(w, P)
                                              ));
                            }
                            return (
                                u.declarations.length > 1 ? ge(V) : V(),
                                a.push(this.semicolon(c)),
                                a
                            );
                        },
                        ThrowStatement: function (u, c) {
                            return [
                                Y(
                                    'throw',
                                    this.generateExpression(
                                        u.argument,
                                        n.Sequence,
                                        S
                                    )
                                ),
                                this.semicolon(c),
                            ];
                        },
                        TryStatement: function (u, c) {
                            var a, h, A, w;
                            if (
                                ((a = ['try', this.maybeBlock(u.block, M)]),
                                (a = this.maybeBlockSuffix(u.block, a)),
                                u.handlers)
                            )
                                for (h = 0, A = u.handlers.length; h < A; ++h)
                                    (a = Y(
                                        a,
                                        this.generateStatement(u.handlers[h], M)
                                    )),
                                        (u.finalizer || h + 1 !== A) &&
                                            (a = this.maybeBlockSuffix(
                                                u.handlers[h].body,
                                                a
                                            ));
                            else {
                                for (
                                    w = u.guardedHandlers || [],
                                        h = 0,
                                        A = w.length;
                                    h < A;
                                    ++h
                                )
                                    (a = Y(a, this.generateStatement(w[h], M))),
                                        (u.finalizer || h + 1 !== A) &&
                                            (a = this.maybeBlockSuffix(
                                                w[h].body,
                                                a
                                            ));
                                if (u.handler)
                                    if (Array.isArray(u.handler))
                                        for (
                                            h = 0, A = u.handler.length;
                                            h < A;
                                            ++h
                                        )
                                            (a = Y(
                                                a,
                                                this.generateStatement(
                                                    u.handler[h],
                                                    M
                                                )
                                            )),
                                                (u.finalizer || h + 1 !== A) &&
                                                    (a = this.maybeBlockSuffix(
                                                        u.handler[h].body,
                                                        a
                                                    ));
                                    else
                                        (a = Y(
                                            a,
                                            this.generateStatement(u.handler, M)
                                        )),
                                            u.finalizer &&
                                                (a = this.maybeBlockSuffix(
                                                    u.handler.body,
                                                    a
                                                ));
                            }
                            return (
                                u.finalizer &&
                                    (a = Y(a, [
                                        'finally',
                                        this.maybeBlock(u.finalizer, M),
                                    ])),
                                a
                            );
                        },
                        SwitchStatement: function (u, c) {
                            var a,
                                h,
                                A,
                                w,
                                P,
                                O = this;
                            if (
                                (ge(function () {
                                    a = [
                                        'switch' + g + '(',
                                        O.generateExpression(
                                            u.discriminant,
                                            n.Sequence,
                                            S
                                        ),
                                        ')' + g + '{' + m,
                                    ];
                                }),
                                u.cases)
                            )
                                for (
                                    P = M, A = 0, w = u.cases.length;
                                    A < w;
                                    ++A
                                )
                                    A === w - 1 && (P |= te),
                                        (h = ve(
                                            this.generateStatement(
                                                u.cases[A],
                                                P
                                            )
                                        )),
                                        a.push(h),
                                        se(fe(h).toString()) || a.push(m);
                            return a.push(ve('}')), a;
                        },
                        SwitchCase: function (u, c) {
                            var a,
                                h,
                                A,
                                w,
                                P,
                                O = this;
                            return (
                                ge(function () {
                                    for (
                                        u.test
                                            ? (a = [
                                                  Y(
                                                      'case',
                                                      O.generateExpression(
                                                          u.test,
                                                          n.Sequence,
                                                          S
                                                      )
                                                  ),
                                                  ':',
                                              ])
                                            : (a = ['default:']),
                                            A = 0,
                                            w = u.consequent.length,
                                            w &&
                                                u.consequent[0].type ===
                                                    t.BlockStatement &&
                                                ((h = O.maybeBlock(
                                                    u.consequent[0],
                                                    M
                                                )),
                                                a.push(h),
                                                (A = 1)),
                                            A !== w &&
                                                !se(fe(a).toString()) &&
                                                a.push(m),
                                            P = M;
                                        A < w;
                                        ++A
                                    )
                                        A === w - 1 && c & te && (P |= te),
                                            (h = ve(
                                                O.generateStatement(
                                                    u.consequent[A],
                                                    P
                                                )
                                            )),
                                            a.push(h),
                                            A + 1 !== w &&
                                                !se(fe(h).toString()) &&
                                                a.push(m);
                                }),
                                a
                            );
                        },
                        IfStatement: function (u, c) {
                            var a,
                                h,
                                A,
                                w = this;
                            return (
                                ge(function () {
                                    a = [
                                        'if' + g + '(',
                                        w.generateExpression(
                                            u.test,
                                            n.Sequence,
                                            S
                                        ),
                                        ')',
                                    ];
                                }),
                                (A = c & te),
                                (h = M),
                                A && (h |= te),
                                u.alternate
                                    ? (a.push(this.maybeBlock(u.consequent, M)),
                                      (a = this.maybeBlockSuffix(
                                          u.consequent,
                                          a
                                      )),
                                      u.alternate.type === t.IfStatement
                                          ? (a = Y(a, [
                                                'else ',
                                                this.generateStatement(
                                                    u.alternate,
                                                    h
                                                ),
                                            ]))
                                          : (a = Y(
                                                a,
                                                Y(
                                                    'else',
                                                    this.maybeBlock(
                                                        u.alternate,
                                                        h
                                                    )
                                                )
                                            )))
                                    : a.push(this.maybeBlock(u.consequent, h)),
                                a
                            );
                        },
                        ForStatement: function (u, c) {
                            var a,
                                h = this;
                            return (
                                ge(function () {
                                    (a = ['for' + g + '(']),
                                        u.init
                                            ? u.init.type ===
                                              t.VariableDeclaration
                                                ? a.push(
                                                      h.generateStatement(
                                                          u.init,
                                                          Q
                                                      )
                                                  )
                                                : (a.push(
                                                      h.generateExpression(
                                                          u.init,
                                                          n.Sequence,
                                                          Re
                                                      )
                                                  ),
                                                  a.push(';'))
                                            : a.push(';'),
                                        u.test &&
                                            (a.push(g),
                                            a.push(
                                                h.generateExpression(
                                                    u.test,
                                                    n.Sequence,
                                                    S
                                                )
                                            )),
                                        a.push(';'),
                                        u.update &&
                                            (a.push(g),
                                            a.push(
                                                h.generateExpression(
                                                    u.update,
                                                    n.Sequence,
                                                    S
                                                )
                                            )),
                                        a.push(')');
                                }),
                                a.push(this.maybeBlock(u.body, c & te ? X : M)),
                                a
                            );
                        },
                        ForInStatement: function (u, c) {
                            return this.generateIterationForStatement(
                                'in',
                                u,
                                c & te ? X : M
                            );
                        },
                        ForOfStatement: function (u, c) {
                            return this.generateIterationForStatement(
                                'of',
                                u,
                                c & te ? X : M
                            );
                        },
                        LabeledStatement: function (u, c) {
                            return [
                                u.label.name + ':',
                                this.maybeBlock(u.body, c & te ? X : M),
                            ];
                        },
                        Program: function (u, c) {
                            var a, h, A, w, P;
                            for (
                                w = u.body.length,
                                    a = [
                                        v && w > 0
                                            ? `
`
                                            : '',
                                    ],
                                    P = ne,
                                    A = 0;
                                A < w;
                                ++A
                            )
                                !v && A === w - 1 && (P |= te),
                                    b &&
                                        (A === 0 &&
                                            (u.body[0].leadingComments ||
                                                ut(
                                                    u.range[0],
                                                    u.body[A].range[0],
                                                    a
                                                )),
                                        A > 0 &&
                                            !u.body[A - 1].trailingComments &&
                                            !u.body[A].leadingComments &&
                                            ut(
                                                u.body[A - 1].range[1],
                                                u.body[A].range[0],
                                                a
                                            )),
                                    (h = ve(
                                        this.generateStatement(u.body[A], P)
                                    )),
                                    a.push(h),
                                    A + 1 < w &&
                                        !se(fe(h).toString()) &&
                                        ((b && u.body[A + 1].leadingComments) ||
                                            a.push(m)),
                                    b &&
                                        A === w - 1 &&
                                        (u.body[A].trailingComments ||
                                            ut(
                                                u.body[A].range[1],
                                                u.range[1],
                                                a
                                            ));
                            return a;
                        },
                        FunctionDeclaration: function (u, c) {
                            return [
                                Dt(u, !0),
                                'function',
                                Tt(u) || Be(),
                                u.id ? ke(u.id) : '',
                                this.generateFunctionBody(u),
                            ];
                        },
                        ReturnStatement: function (u, c) {
                            return u.argument
                                ? [
                                      Y(
                                          'return',
                                          this.generateExpression(
                                              u.argument,
                                              n.Sequence,
                                              S
                                          )
                                      ),
                                      this.semicolon(c),
                                  ]
                                : ['return' + this.semicolon(c)];
                        },
                        WhileStatement: function (u, c) {
                            var a,
                                h = this;
                            return (
                                ge(function () {
                                    a = [
                                        'while' + g + '(',
                                        h.generateExpression(
                                            u.test,
                                            n.Sequence,
                                            S
                                        ),
                                        ')',
                                    ];
                                }),
                                a.push(this.maybeBlock(u.body, c & te ? X : M)),
                                a
                            );
                        },
                        WithStatement: function (u, c) {
                            var a,
                                h = this;
                            return (
                                ge(function () {
                                    a = [
                                        'with' + g + '(',
                                        h.generateExpression(
                                            u.object,
                                            n.Sequence,
                                            S
                                        ),
                                        ')',
                                    ];
                                }),
                                a.push(this.maybeBlock(u.body, c & te ? X : M)),
                                a
                            );
                        },
                    }),
                    W(Fe.prototype, Fe.Statement),
                    (Fe.Expression = {
                        SequenceExpression: function (u, c, a) {
                            var h, A, w;
                            for (
                                n.Sequence < c && (a |= G),
                                    h = [],
                                    A = 0,
                                    w = u.expressions.length;
                                A < w;
                                ++A
                            )
                                h.push(
                                    this.generateExpression(
                                        u.expressions[A],
                                        n.Assignment,
                                        a
                                    )
                                ),
                                    A + 1 < w && h.push(',' + g);
                            return ye(h, n.Sequence, c);
                        },
                        AssignmentExpression: function (u, c, a) {
                            return this.generateAssignment(
                                u.left,
                                u.right,
                                u.operator,
                                c,
                                a
                            );
                        },
                        ArrowFunctionExpression: function (u, c, a) {
                            return ye(
                                this.generateFunctionBody(u),
                                n.ArrowFunction,
                                c
                            );
                        },
                        ConditionalExpression: function (u, c, a) {
                            return (
                                n.Conditional < c && (a |= G),
                                ye(
                                    [
                                        this.generateExpression(
                                            u.test,
                                            n.Coalesce,
                                            a
                                        ),
                                        g + '?' + g,
                                        this.generateExpression(
                                            u.consequent,
                                            n.Assignment,
                                            a
                                        ),
                                        g + ':' + g,
                                        this.generateExpression(
                                            u.alternate,
                                            n.Assignment,
                                            a
                                        ),
                                    ],
                                    n.Conditional,
                                    c
                                )
                            );
                        },
                        LogicalExpression: function (u, c, a) {
                            return (
                                u.operator === '??' && (a |= Ee),
                                this.BinaryExpression(u, c, a)
                            );
                        },
                        BinaryExpression: function (u, c, a) {
                            var h, A, w, P, O, V;
                            return (
                                (P = r[u.operator]),
                                (A = u.operator === '**' ? n.Postfix : P),
                                (w = u.operator === '**' ? P : P + 1),
                                P < c && (a |= G),
                                (O = this.generateExpression(u.left, A, a)),
                                (V = O.toString()),
                                V.charCodeAt(V.length - 1) === 47 &&
                                s.code.isIdentifierPartES5(
                                    u.operator.charCodeAt(0)
                                )
                                    ? (h = [O, Be(), u.operator])
                                    : (h = Y(O, u.operator)),
                                (O = this.generateExpression(u.right, w, a)),
                                (u.operator === '/' &&
                                    O.toString().charAt(0) === '/') ||
                                (u.operator.slice(-1) === '<' &&
                                    O.toString().slice(0, 3) === '!--')
                                    ? (h.push(Be()), h.push(O))
                                    : (h = Y(h, O)),
                                u.operator === 'in' && !(a & G)
                                    ? ['(', h, ')']
                                    : (u.operator === '||' ||
                                            u.operator === '&&') &&
                                        a & Ee
                                      ? ['(', h, ')']
                                      : ye(h, P, c)
                            );
                        },
                        CallExpression: function (u, c, a) {
                            var h, A, w;
                            for (
                                h = [
                                    this.generateExpression(
                                        u.callee,
                                        n.Call,
                                        be
                                    ),
                                ],
                                    u.optional && h.push('?.'),
                                    h.push('('),
                                    A = 0,
                                    w = u.arguments.length;
                                A < w;
                                ++A
                            )
                                h.push(
                                    this.generateExpression(
                                        u.arguments[A],
                                        n.Assignment,
                                        S
                                    )
                                ),
                                    A + 1 < w && h.push(',' + g);
                            return (
                                h.push(')'),
                                a & ee ? ye(h, n.Call, c) : ['(', h, ')']
                            );
                        },
                        ChainExpression: function (u, c, a) {
                            n.OptionalChaining < c && (a |= ee);
                            var h = this.generateExpression(
                                u.expression,
                                n.OptionalChaining,
                                a
                            );
                            return ye(h, n.OptionalChaining, c);
                        },
                        NewExpression: function (u, c, a) {
                            var h, A, w, P, O;
                            if (
                                ((A = u.arguments.length),
                                (O = a & de && !T && A === 0 ? H : j),
                                (h = Y(
                                    'new',
                                    this.generateExpression(u.callee, n.New, O)
                                )),
                                !(a & de) || T || A > 0)
                            ) {
                                for (h.push('('), w = 0, P = A; w < P; ++w)
                                    h.push(
                                        this.generateExpression(
                                            u.arguments[w],
                                            n.Assignment,
                                            S
                                        )
                                    ),
                                        w + 1 < P && h.push(',' + g);
                                h.push(')');
                            }
                            return ye(h, n.New, c);
                        },
                        MemberExpression: function (u, c, a) {
                            var h, A;
                            return (
                                (h = [
                                    this.generateExpression(
                                        u.object,
                                        n.Call,
                                        a & ee ? be : j
                                    ),
                                ]),
                                u.computed
                                    ? (u.optional && h.push('?.'),
                                      h.push('['),
                                      h.push(
                                          this.generateExpression(
                                              u.property,
                                              n.Sequence,
                                              a & ee ? S : H
                                          )
                                      ),
                                      h.push(']'))
                                    : (!u.optional &&
                                          u.object.type === t.Literal &&
                                          typeof u.object.value == 'number' &&
                                          ((A = fe(h).toString()),
                                          A.indexOf('.') < 0 &&
                                              !/[eExX]/.test(A) &&
                                              s.code.isDecimalDigit(
                                                  A.charCodeAt(A.length - 1)
                                              ) &&
                                              !(
                                                  A.length >= 2 &&
                                                  A.charCodeAt(0) === 48
                                              ) &&
                                              h.push(' ')),
                                      h.push(u.optional ? '?.' : '.'),
                                      h.push(ke(u.property))),
                                ye(h, n.Member, c)
                            );
                        },
                        MetaProperty: function (u, c, a) {
                            var h;
                            return (
                                (h = []),
                                h.push(
                                    typeof u.meta == 'string'
                                        ? u.meta
                                        : ke(u.meta)
                                ),
                                h.push('.'),
                                h.push(
                                    typeof u.property == 'string'
                                        ? u.property
                                        : ke(u.property)
                                ),
                                ye(h, n.Member, c)
                            );
                        },
                        UnaryExpression: function (u, c, a) {
                            var h, A, w, P, O;
                            return (
                                (A = this.generateExpression(
                                    u.argument,
                                    n.Unary,
                                    S
                                )),
                                g === ''
                                    ? (h = Y(u.operator, A))
                                    : ((h = [u.operator]),
                                      u.operator.length > 2
                                          ? (h = Y(h, A))
                                          : ((P = fe(h).toString()),
                                            (O = P.charCodeAt(P.length - 1)),
                                            (w = A.toString().charCodeAt(0)),
                                            (((O === 43 || O === 45) &&
                                                O === w) ||
                                                (s.code.isIdentifierPartES5(
                                                    O
                                                ) &&
                                                    s.code.isIdentifierPartES5(
                                                        w
                                                    ))) &&
                                                h.push(Be()),
                                            h.push(A))),
                                ye(h, n.Unary, c)
                            );
                        },
                        YieldExpression: function (u, c, a) {
                            var h;
                            return (
                                u.delegate ? (h = 'yield*') : (h = 'yield'),
                                u.argument &&
                                    (h = Y(
                                        h,
                                        this.generateExpression(
                                            u.argument,
                                            n.Yield,
                                            S
                                        )
                                    )),
                                ye(h, n.Yield, c)
                            );
                        },
                        AwaitExpression: function (u, c, a) {
                            var h = Y(
                                u.all ? 'await*' : 'await',
                                this.generateExpression(u.argument, n.Await, S)
                            );
                            return ye(h, n.Await, c);
                        },
                        UpdateExpression: function (u, c, a) {
                            return u.prefix
                                ? ye(
                                      [
                                          u.operator,
                                          this.generateExpression(
                                              u.argument,
                                              n.Unary,
                                              S
                                          ),
                                      ],
                                      n.Unary,
                                      c
                                  )
                                : ye(
                                      [
                                          this.generateExpression(
                                              u.argument,
                                              n.Postfix,
                                              S
                                          ),
                                          u.operator,
                                      ],
                                      n.Postfix,
                                      c
                                  );
                        },
                        FunctionExpression: function (u, c, a) {
                            var h = [Dt(u, !0), 'function'];
                            return (
                                u.id
                                    ? (h.push(Tt(u) || Be()), h.push(ke(u.id)))
                                    : h.push(Tt(u) || g),
                                h.push(this.generateFunctionBody(u)),
                                h
                            );
                        },
                        ArrayPattern: function (u, c, a) {
                            return this.ArrayExpression(u, c, a, !0);
                        },
                        ArrayExpression: function (u, c, a, h) {
                            var A,
                                w,
                                P = this;
                            return u.elements.length
                                ? ((w = h ? !1 : u.elements.length > 1),
                                  (A = ['[', w ? m : '']),
                                  ge(function (O) {
                                      var V, ae;
                                      for (
                                          V = 0, ae = u.elements.length;
                                          V < ae;
                                          ++V
                                      )
                                          u.elements[V]
                                              ? (A.push(w ? O : ''),
                                                A.push(
                                                    P.generateExpression(
                                                        u.elements[V],
                                                        n.Assignment,
                                                        S
                                                    )
                                                ))
                                              : (w && A.push(O),
                                                V + 1 === ae && A.push(',')),
                                              V + 1 < ae &&
                                                  A.push(',' + (w ? m : g));
                                  }),
                                  w && !se(fe(A).toString()) && A.push(m),
                                  A.push(w ? l : ''),
                                  A.push(']'),
                                  A)
                                : '[]';
                        },
                        RestElement: function (u, c, a) {
                            return '...' + this.generatePattern(u.argument);
                        },
                        ClassExpression: function (u, c, a) {
                            var h, A;
                            return (
                                (h = ['class']),
                                u.id &&
                                    (h = Y(
                                        h,
                                        this.generateExpression(
                                            u.id,
                                            n.Sequence,
                                            S
                                        )
                                    )),
                                u.superClass &&
                                    ((A = Y(
                                        'extends',
                                        this.generateExpression(
                                            u.superClass,
                                            n.Unary,
                                            S
                                        )
                                    )),
                                    (h = Y(h, A))),
                                h.push(g),
                                h.push(this.generateStatement(u.body, X)),
                                h
                            );
                        },
                        MethodDefinition: function (u, c, a) {
                            var h, A;
                            return (
                                u.static ? (h = ['static' + g]) : (h = []),
                                u.kind === 'get' || u.kind === 'set'
                                    ? (A = [
                                          Y(
                                              u.kind,
                                              this.generatePropertyKey(
                                                  u.key,
                                                  u.computed
                                              )
                                          ),
                                          this.generateFunctionBody(u.value),
                                      ])
                                    : (A = [
                                          qn(u),
                                          this.generatePropertyKey(
                                              u.key,
                                              u.computed
                                          ),
                                          this.generateFunctionBody(u.value),
                                      ]),
                                Y(h, A)
                            );
                        },
                        Property: function (u, c, a) {
                            return u.kind === 'get' || u.kind === 'set'
                                ? [
                                      u.kind,
                                      Be(),
                                      this.generatePropertyKey(
                                          u.key,
                                          u.computed
                                      ),
                                      this.generateFunctionBody(u.value),
                                  ]
                                : u.shorthand
                                  ? u.value.type === 'AssignmentPattern'
                                      ? this.AssignmentPattern(
                                            u.value,
                                            n.Sequence,
                                            S
                                        )
                                      : this.generatePropertyKey(
                                            u.key,
                                            u.computed
                                        )
                                  : u.method
                                    ? [
                                          qn(u),
                                          this.generatePropertyKey(
                                              u.key,
                                              u.computed
                                          ),
                                          this.generateFunctionBody(u.value),
                                      ]
                                    : [
                                          this.generatePropertyKey(
                                              u.key,
                                              u.computed
                                          ),
                                          ':' + g,
                                          this.generateExpression(
                                              u.value,
                                              n.Assignment,
                                              S
                                          ),
                                      ];
                        },
                        ObjectExpression: function (u, c, a) {
                            var h,
                                A,
                                w,
                                P = this;
                            return u.properties.length
                                ? ((h = u.properties.length > 1),
                                  ge(function () {
                                      w = P.generateExpression(
                                          u.properties[0],
                                          n.Sequence,
                                          S
                                      );
                                  }),
                                  !h && !N(fe(w).toString())
                                      ? ['{', g, w, g, '}']
                                      : (ge(function (O) {
                                            var V, ae;
                                            if (((A = ['{', m, O, w]), h))
                                                for (
                                                    A.push(',' + m),
                                                        V = 1,
                                                        ae =
                                                            u.properties.length;
                                                    V < ae;
                                                    ++V
                                                )
                                                    A.push(O),
                                                        A.push(
                                                            P.generateExpression(
                                                                u.properties[V],
                                                                n.Sequence,
                                                                S
                                                            )
                                                        ),
                                                        V + 1 < ae &&
                                                            A.push(',' + m);
                                        }),
                                        se(fe(A).toString()) || A.push(m),
                                        A.push(l),
                                        A.push('}'),
                                        A))
                                : '{}';
                        },
                        AssignmentPattern: function (u, c, a) {
                            return this.generateAssignment(
                                u.left,
                                u.right,
                                '=',
                                c,
                                a
                            );
                        },
                        ObjectPattern: function (u, c, a) {
                            var h,
                                A,
                                w,
                                P,
                                O,
                                V = this;
                            if (!u.properties.length) return '{}';
                            if (((P = !1), u.properties.length === 1))
                                (O = u.properties[0]),
                                    O.type === t.Property &&
                                        O.value.type !== t.Identifier &&
                                        (P = !0);
                            else
                                for (A = 0, w = u.properties.length; A < w; ++A)
                                    if (
                                        ((O = u.properties[A]),
                                        O.type === t.Property && !O.shorthand)
                                    ) {
                                        P = !0;
                                        break;
                                    }
                            return (
                                (h = ['{', P ? m : '']),
                                ge(function (ae) {
                                    var xe, He;
                                    for (
                                        xe = 0, He = u.properties.length;
                                        xe < He;
                                        ++xe
                                    )
                                        h.push(P ? ae : ''),
                                            h.push(
                                                V.generateExpression(
                                                    u.properties[xe],
                                                    n.Sequence,
                                                    S
                                                )
                                            ),
                                            xe + 1 < He &&
                                                h.push(',' + (P ? m : g));
                                }),
                                P && !se(fe(h).toString()) && h.push(m),
                                h.push(P ? l : ''),
                                h.push('}'),
                                h
                            );
                        },
                        ThisExpression: function (u, c, a) {
                            return 'this';
                        },
                        Super: function (u, c, a) {
                            return 'super';
                        },
                        Identifier: function (u, c, a) {
                            return ke(u);
                        },
                        ImportDefaultSpecifier: function (u, c, a) {
                            return ke(u.id || u.local);
                        },
                        ImportNamespaceSpecifier: function (u, c, a) {
                            var h = ['*'],
                                A = u.id || u.local;
                            return A && h.push(g + 'as' + Be() + ke(A)), h;
                        },
                        ImportSpecifier: function (u, c, a) {
                            var h = u.imported,
                                A = [h.name],
                                w = u.local;
                            return (
                                w &&
                                    w.name !== h.name &&
                                    A.push(Be() + 'as' + Be() + ke(w)),
                                A
                            );
                        },
                        ExportSpecifier: function (u, c, a) {
                            var h = u.local,
                                A = [h.name],
                                w = u.exported;
                            return (
                                w &&
                                    w.name !== h.name &&
                                    A.push(Be() + 'as' + Be() + ke(w)),
                                A
                            );
                        },
                        Literal: function (u, c, a) {
                            var h;
                            if (u.hasOwnProperty('raw') && x && _.raw)
                                try {
                                    if (
                                        ((h = x(u.raw).body[0].expression),
                                        h.type === t.Literal &&
                                            h.value === u.value)
                                    )
                                        return u.raw;
                                } catch {}
                            return u.regex
                                ? '/' + u.regex.pattern + '/' + u.regex.flags
                                : typeof u.value == 'bigint'
                                  ? u.value.toString() + 'n'
                                  : u.bigint
                                    ? u.bigint + 'n'
                                    : u.value === null
                                      ? 'null'
                                      : typeof u.value == 'string'
                                        ? pu(u.value)
                                        : typeof u.value == 'number'
                                          ? rt(u.value)
                                          : typeof u.value == 'boolean'
                                            ? u.value
                                                ? 'true'
                                                : 'false'
                                            : ou(u.value);
                        },
                        GeneratorExpression: function (u, c, a) {
                            return this.ComprehensionExpression(u, c, a);
                        },
                        ComprehensionExpression: function (u, c, a) {
                            var h,
                                A,
                                w,
                                P,
                                O = this;
                            return (
                                (h =
                                    u.type === t.GeneratorExpression
                                        ? ['(']
                                        : ['[']),
                                _.moz
                                    .comprehensionExpressionStartsWithAssignment &&
                                    ((P = this.generateExpression(
                                        u.body,
                                        n.Assignment,
                                        S
                                    )),
                                    h.push(P)),
                                u.blocks &&
                                    ge(function () {
                                        for (
                                            A = 0, w = u.blocks.length;
                                            A < w;
                                            ++A
                                        )
                                            (P = O.generateExpression(
                                                u.blocks[A],
                                                n.Sequence,
                                                S
                                            )),
                                                A > 0 ||
                                                _.moz
                                                    .comprehensionExpressionStartsWithAssignment
                                                    ? (h = Y(h, P))
                                                    : h.push(P);
                                    }),
                                u.filter &&
                                    ((h = Y(h, 'if' + g)),
                                    (P = this.generateExpression(
                                        u.filter,
                                        n.Sequence,
                                        S
                                    )),
                                    (h = Y(h, ['(', P, ')']))),
                                _.moz
                                    .comprehensionExpressionStartsWithAssignment ||
                                    ((P = this.generateExpression(
                                        u.body,
                                        n.Assignment,
                                        S
                                    )),
                                    (h = Y(h, P))),
                                h.push(
                                    u.type === t.GeneratorExpression ? ')' : ']'
                                ),
                                h
                            );
                        },
                        ComprehensionBlock: function (u, c, a) {
                            var h;
                            return (
                                u.left.type === t.VariableDeclaration
                                    ? (h = [
                                          u.left.kind,
                                          Be(),
                                          this.generateStatement(
                                              u.left.declarations[0],
                                              Q
                                          ),
                                      ])
                                    : (h = this.generateExpression(
                                          u.left,
                                          n.Call,
                                          S
                                      )),
                                (h = Y(h, u.of ? 'of' : 'in')),
                                (h = Y(
                                    h,
                                    this.generateExpression(
                                        u.right,
                                        n.Sequence,
                                        S
                                    )
                                )),
                                ['for' + g + '(', h, ')']
                            );
                        },
                        SpreadElement: function (u, c, a) {
                            return [
                                '...',
                                this.generateExpression(
                                    u.argument,
                                    n.Assignment,
                                    S
                                ),
                            ];
                        },
                        TaggedTemplateExpression: function (u, c, a) {
                            var h = be;
                            a & ee || (h = j);
                            var A = [
                                this.generateExpression(u.tag, n.Call, h),
                                this.generateExpression(u.quasi, n.Primary, J),
                            ];
                            return ye(A, n.TaggedTemplate, c);
                        },
                        TemplateElement: function (u, c, a) {
                            return u.value.raw;
                        },
                        TemplateLiteral: function (u, c, a) {
                            var h, A, w;
                            for (
                                h = ['`'], A = 0, w = u.quasis.length;
                                A < w;
                                ++A
                            )
                                h.push(
                                    this.generateExpression(
                                        u.quasis[A],
                                        n.Primary,
                                        S
                                    )
                                ),
                                    A + 1 < w &&
                                        (h.push('${' + g),
                                        h.push(
                                            this.generateExpression(
                                                u.expressions[A],
                                                n.Sequence,
                                                S
                                            )
                                        ),
                                        h.push(g + '}'));
                            return h.push('`'), h;
                        },
                        ModuleSpecifier: function (u, c, a) {
                            return this.Literal(u, c, a);
                        },
                        ImportExpression: function (u, c, a) {
                            return ye(
                                [
                                    'import(',
                                    this.generateExpression(
                                        u.source,
                                        n.Assignment,
                                        S
                                    ),
                                    ')',
                                ],
                                n.Call,
                                c
                            );
                        },
                    }),
                    W(Fe.prototype, Fe.Expression),
                    (Fe.prototype.generateExpression = function (u, c, a) {
                        var h, A;
                        return (
                            (A = u.type || t.Property),
                            _.verbatim && u.hasOwnProperty(_.verbatim)
                                ? Au(u, c)
                                : ((h = this[A](u, c, a)),
                                  _.comment && (h = Mn(u, h)),
                                  fe(h, u))
                        );
                    }),
                    (Fe.prototype.generateStatement = function (u, c) {
                        var a, h;
                        return (
                            (a = this[u.type](u, c)),
                            _.comment && (a = Mn(u, a)),
                            (h = fe(a).toString()),
                            u.type === t.Program &&
                                !v &&
                                m === '' &&
                                h.charAt(h.length - 1) ===
                                    `
` &&
                                (a = F
                                    ? fe(a).replaceRight(/\s+$/, '')
                                    : h.replace(/\s+$/, '')),
                            fe(a, u)
                        );
                    });
                function Du(u) {
                    var c;
                    if (((c = new Fe()), z(u)))
                        return c.generateStatement(u, M);
                    if (U(u)) return c.generateExpression(u, n.Sequence, S);
                    throw new Error('Unknown node type: ' + u.type);
                }
                function mu(u, c) {
                    var a = le(),
                        h,
                        A;
                    return (
                        c != null
                            ? (typeof c.indent == 'string' &&
                                  (a.format.indent.style = c.indent),
                              typeof c.base == 'number' &&
                                  (a.format.indent.base = c.base),
                              (c = Ne(a, c)),
                              (p = c.format.indent.style),
                              typeof c.base == 'string'
                                  ? (l = c.base)
                                  : (l = Z(p, c.format.indent.base)))
                            : ((c = a),
                              (p = c.format.indent.style),
                              (l = Z(p, c.format.indent.base))),
                        (d = c.format.json),
                        (D = c.format.renumber),
                        (y = d ? !1 : c.format.hexadecimal),
                        (C = d ? 'double' : c.format.quotes),
                        (E = c.format.escapeless),
                        (m = c.format.newline),
                        (g = c.format.space),
                        c.format.compact && (m = g = p = l = ''),
                        (T = c.format.parentheses),
                        (k = c.format.semicolons),
                        (v = c.format.safeConcatenation),
                        (R = c.directive),
                        (x = d ? null : c.parse),
                        (F = c.sourceMap),
                        (B = c.sourceCode),
                        (b = c.format.preserveBlankLines && B !== null),
                        (_ = c),
                        F &&
                            (e.browser
                                ? (i = global.sourceMap.SourceNode)
                                : (i = $u().SourceNode)),
                        (h = Du(u)),
                        F
                            ? ((A = h.toStringWithSourceMap({
                                  file: c.file,
                                  sourceRoot: c.sourceMapRoot,
                              })),
                              c.sourceContent &&
                                  A.map.setSourceContent(
                                      c.sourceMap,
                                      c.sourceContent
                                  ),
                              c.sourceMapWithCode ? A : A.map.toString())
                            : ((A = { code: h.toString(), map: null }),
                              c.sourceMapWithCode ? A : A.code)
                    );
                }
                (I = {
                    indent: { style: '', base: 0 },
                    renumber: !0,
                    hexadecimal: !0,
                    quotes: 'auto',
                    escapeless: !0,
                    compact: !0,
                    parentheses: !1,
                    semicolons: !1,
                }),
                    (q = le().format),
                    (e.version = Yu().version),
                    (e.generate = mu),
                    (e.attachComments = o.attachComments),
                    (e.Precedence = Ne({}, n)),
                    (e.browser = !1),
                    (e.FORMAT_MINIFY = I),
                    (e.FORMAT_DEFAULTS = q);
            })();
        },
    }),
    An = {};
Cu(An, {
    Node: () => gt,
    Parser: () => me,
    Position: () => Ke,
    SourceLocation: () => ct,
    TokContext: () => Oe,
    Token: () => Ft,
    TokenType: () => ce,
    defaultOptions: () => Bt,
    getLineInfo: () => mn,
    isIdentifierChar: () => Qe,
    isIdentifierStart: () => Ge,
    isNewLine: () => ot,
    keywordTypes: () => xt,
    lineBreak: () => Te,
    lineBreakG: () => et,
    nonASCIIwhitespace: () => Wt,
    parse: () => ri,
    parseExpressionAt: () => ui,
    tokContexts: () => Ce,
    tokTypes: () => f,
    tokenizer: () => ii,
    version: () => xn,
});
function Dn(e, t) {
    for (var n = 65536, r = 0; r < t.length; r += 2) {
        if (((n += t[r]), n > e)) return !1;
        if (((n += t[r + 1]), n >= e)) return !0;
    }
}
function Ge(e, t) {
    return e < 65
        ? e === 36
        : e < 91
          ? !0
          : e < 97
            ? e === 95
            : e < 123
              ? !0
              : e <= 65535
                ? e >= 170 && Or.test(String.fromCharCode(e))
                : t === !1
                  ? !1
                  : Dn(e, kn);
}
function Qe(e, t) {
    return e < 48
        ? e === 36
        : e < 58
          ? !0
          : e < 65
            ? !1
            : e < 91
              ? !0
              : e < 97
                ? e === 95
                : e < 123
                  ? !0
                  : e <= 65535
                    ? e >= 170 && Rr.test(String.fromCharCode(e))
                    : t === !1
                      ? !1
                      : Dn(e, kn) || Dn(e, Lr);
}
function Le(e, t) {
    return new ce(e, { beforeExpr: !0, binop: t });
}
function oe(e, t) {
    return t === void 0 && (t = {}), (t.keyword = e), (xt[e] = new ce(e, t));
}
function ot(e, t) {
    return e === 10 || e === 13 || (!t && (e === 8232 || e === 8233));
}
function qt(e, t) {
    return Nr.call(e, t);
}
function Ze(e) {
    return new RegExp('^(?:' + e.replace(/ /g, '|') + ')$');
}
function mn(e, t) {
    for (var n = 1, r = 0; ; ) {
        et.lastIndex = r;
        var i = et.exec(e);
        if (i && i.index < t) ++n, (r = i.index + i[0].length);
        else return new Ke(n, t - r);
    }
}
function Xu(e) {
    var t = {};
    for (var n in Bt) t[n] = e && qt(e, n) ? e[n] : Bt[n];
    if (
        (t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009),
        t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5),
        Cn(t.onToken))
    ) {
        var r = t.onToken;
        t.onToken = function (i) {
            return r.push(i);
        };
    }
    return Cn(t.onComment) && (t.onComment = Hu(t, t.onComment)), t;
}
function Hu(e, t) {
    return function (n, r, i, o, s, l) {
        var p = { type: n ? 'Block' : 'Line', value: r, start: i, end: o };
        e.locations && (p.loc = new ct(this, s, l)),
            e.ranges && (p.range = [i, o]),
            t.push(p);
    };
}
function Yt(e, t) {
    return lt | (e ? En : 0) | (t ? gn : 0);
}
function Pt() {
    this.shorthandAssign =
        this.trailingComma =
        this.parenthesizedAssign =
        this.parenthesizedBind =
        this.doubleProto =
            -1;
}
function Jn(e, t, n, r) {
    return (
        (e.type = t),
        (e.end = n),
        this.options.locations && (e.loc.end = r),
        this.options.ranges && (e.range[1] = n),
        e
    );
}
function Jt(e) {
    var t = (yn[e] = {
        binary: Ze(jr[e] + ' ' + Fn),
        nonBinary: { General_Category: Ze(Fn), Script: Ze(Mr[e]) },
    });
    (t.nonBinary.Script_Extensions = t.nonBinary.Script),
        (t.nonBinary.gc = t.nonBinary.General_Category),
        (t.nonBinary.sc = t.nonBinary.Script),
        (t.nonBinary.scx = t.nonBinary.Script_Extensions);
}
function It(e) {
    return e <= 65535
        ? String.fromCharCode(e)
        : ((e -= 65536),
          String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
function Xn(e) {
    return (
        e === 36 ||
        (e >= 40 && e <= 43) ||
        e === 46 ||
        e === 63 ||
        (e >= 91 && e <= 94) ||
        (e >= 123 && e <= 125)
    );
}
function Qu(e) {
    return Ge(e, !0) || e === 36 || e === 95;
}
function Ku(e) {
    return Qe(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
function Pr(e) {
    return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
function Zu(e) {
    return e >= 0 && e <= 1114111;
}
function ei(e) {
    return (
        e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87
    );
}
function Ir(e) {
    return Pr(e) || e === 95;
}
function ti(e) {
    return Ir(e) || Ut(e);
}
function Ut(e) {
    return e >= 48 && e <= 57;
}
function Hn(e) {
    return (
        (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102)
    );
}
function Qn(e) {
    return e >= 65 && e <= 70
        ? 10 + (e - 65)
        : e >= 97 && e <= 102
          ? 10 + (e - 97)
          : e - 48;
}
function Kn(e) {
    return e >= 48 && e <= 55;
}
function ni(e, t) {
    return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ''));
}
function Zn(e) {
    return typeof BigInt != 'function' ? null : BigInt(e.replace(/_/g, ''));
}
function Xt(e) {
    return e <= 65535
        ? String.fromCharCode(e)
        : ((e -= 65536),
          String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
function ri(e, t) {
    return me.parse(e, t);
}
function ui(e, t, n) {
    return me.parseExpressionAt(e, t, n);
}
function ii(e, t) {
    return me.tokenizer(e, t);
}
var Ot,
    Rt,
    er,
    tr,
    Lt,
    Ht,
    Or,
    Rr,
    kn,
    Lr,
    ce,
    Pe,
    we,
    xt,
    f,
    Te,
    et,
    Wt,
    Ie,
    Qt,
    Nr,
    nr,
    Cn,
    Ke,
    ct,
    Bt,
    st,
    lt,
    Nt,
    En,
    gn,
    Kt,
    Zt,
    en,
    tn,
    nn,
    jt,
    Me,
    rn,
    un,
    sn,
    me,
    Ye,
    _e,
    rr,
    K,
    Mt,
    ur,
    ir,
    at,
    Vt,
    an,
    Ve,
    re,
    sr,
    mt,
    ze,
    ar,
    gt,
    Ct,
    Oe,
    Ce,
    Et,
    on,
    ln,
    or,
    jr,
    Fn,
    cn,
    hn,
    lr,
    Mr,
    yn,
    $,
    qe,
    Ft,
    ue,
    pn,
    xn,
    Bn = Eu({
        '../../node_modules/acorn/dist/acorn.mjs'() {
            (Ot = {
                3: 'abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile',
                5: 'class enum extends super const export import',
                6: 'enum',
                strict: 'implements interface let package private protected public static yield',
                strictBind: 'eval arguments',
            }),
                (Rt =
                    'break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this'),
                (er = {
                    5: Rt,
                    '5module': Rt + ' export import',
                    6: Rt + ' const class extends export import super',
                }),
                (tr = /^in(stanceof)?$/),
                (Lt =
                    'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ'),
                (Ht =
                    '‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿'),
                (Or = new RegExp('[' + Lt + ']')),
                (Rr = new RegExp('[' + Lt + Ht + ']')),
                (Lt = Ht = null),
                (kn = [
                    0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52,
                    268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7,
                    2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10,
                    21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22,
                    10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0,
                    16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11,
                    21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349,
                    41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76,
                    44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3,
                    22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9,
                    8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0,
                    13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46,
                    42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117,
                    63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3,
                    38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0,
                    35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37,
                    22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921,
                    103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30,
                    114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6,
                    0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286,
                    50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991,
                    84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64,
                    2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3,
                    24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30,
                    2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60,
                    67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2,
                    0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2,
                    0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2,
                    0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148,
                    12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938,
                ]),
                (Lr = [
                    509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2,
                    5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14,
                    32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45,
                    0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9,
                    7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4,
                    193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1,
                    83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9,
                    71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0,
                    29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17,
                    9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49,
                    4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9,
                    1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5,
                    9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0,
                    15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262,
                    6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719,
                    239,
                ]),
                (ce = function (e, t) {
                    t === void 0 && (t = {}),
                        (this.label = e),
                        (this.keyword = t.keyword),
                        (this.beforeExpr = !!t.beforeExpr),
                        (this.startsExpr = !!t.startsExpr),
                        (this.isLoop = !!t.isLoop),
                        (this.isAssign = !!t.isAssign),
                        (this.prefix = !!t.prefix),
                        (this.postfix = !!t.postfix),
                        (this.binop = t.binop || null),
                        (this.updateContext = null);
                }),
                (Pe = { beforeExpr: !0 }),
                (we = { startsExpr: !0 }),
                (xt = {}),
                (f = {
                    num: new ce('num', we),
                    regexp: new ce('regexp', we),
                    string: new ce('string', we),
                    name: new ce('name', we),
                    eof: new ce('eof'),
                    bracketL: new ce('[', { beforeExpr: !0, startsExpr: !0 }),
                    bracketR: new ce(']'),
                    braceL: new ce('{', { beforeExpr: !0, startsExpr: !0 }),
                    braceR: new ce('}'),
                    parenL: new ce('(', { beforeExpr: !0, startsExpr: !0 }),
                    parenR: new ce(')'),
                    comma: new ce(',', Pe),
                    semi: new ce(';', Pe),
                    colon: new ce(':', Pe),
                    dot: new ce('.'),
                    question: new ce('?', Pe),
                    questionDot: new ce('?.'),
                    arrow: new ce('=>', Pe),
                    template: new ce('template'),
                    invalidTemplate: new ce('invalidTemplate'),
                    ellipsis: new ce('...', Pe),
                    backQuote: new ce('`', we),
                    dollarBraceL: new ce('${', {
                        beforeExpr: !0,
                        startsExpr: !0,
                    }),
                    eq: new ce('=', { beforeExpr: !0, isAssign: !0 }),
                    assign: new ce('_=', { beforeExpr: !0, isAssign: !0 }),
                    incDec: new ce('++/--', {
                        prefix: !0,
                        postfix: !0,
                        startsExpr: !0,
                    }),
                    prefix: new ce('!/~', {
                        beforeExpr: !0,
                        prefix: !0,
                        startsExpr: !0,
                    }),
                    logicalOR: Le('||', 1),
                    logicalAND: Le('&&', 2),
                    bitwiseOR: Le('|', 3),
                    bitwiseXOR: Le('^', 4),
                    bitwiseAND: Le('&', 5),
                    equality: Le('==/!=/===/!==', 6),
                    relational: Le('</>/<=/>=', 7),
                    bitShift: Le('<</>>/>>>', 8),
                    plusMin: new ce('+/-', {
                        beforeExpr: !0,
                        binop: 9,
                        prefix: !0,
                        startsExpr: !0,
                    }),
                    modulo: Le('%', 10),
                    star: Le('*', 10),
                    slash: Le('/', 10),
                    starstar: new ce('**', { beforeExpr: !0 }),
                    coalesce: Le('??', 1),
                    _break: oe('break'),
                    _case: oe('case', Pe),
                    _catch: oe('catch'),
                    _continue: oe('continue'),
                    _debugger: oe('debugger'),
                    _default: oe('default', Pe),
                    _do: oe('do', { isLoop: !0, beforeExpr: !0 }),
                    _else: oe('else', Pe),
                    _finally: oe('finally'),
                    _for: oe('for', { isLoop: !0 }),
                    _function: oe('function', we),
                    _if: oe('if'),
                    _return: oe('return', Pe),
                    _switch: oe('switch'),
                    _throw: oe('throw', Pe),
                    _try: oe('try'),
                    _var: oe('var'),
                    _const: oe('const'),
                    _while: oe('while', { isLoop: !0 }),
                    _with: oe('with'),
                    _new: oe('new', { beforeExpr: !0, startsExpr: !0 }),
                    _this: oe('this', we),
                    _super: oe('super', we),
                    _class: oe('class', we),
                    _extends: oe('extends', Pe),
                    _export: oe('export'),
                    _import: oe('import', we),
                    _null: oe('null', we),
                    _true: oe('true', we),
                    _false: oe('false', we),
                    _in: oe('in', { beforeExpr: !0, binop: 7 }),
                    _instanceof: oe('instanceof', { beforeExpr: !0, binop: 7 }),
                    _typeof: oe('typeof', {
                        beforeExpr: !0,
                        prefix: !0,
                        startsExpr: !0,
                    }),
                    _void: oe('void', {
                        beforeExpr: !0,
                        prefix: !0,
                        startsExpr: !0,
                    }),
                    _delete: oe('delete', {
                        beforeExpr: !0,
                        prefix: !0,
                        startsExpr: !0,
                    }),
                }),
                (Te = /\r\n?|\n|\u2028|\u2029/),
                (et = new RegExp(Te.source, 'g')),
                (Wt = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/),
                (Ie = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g),
                (Qt = Object.prototype),
                (Nr = Qt.hasOwnProperty),
                (nr = Qt.toString),
                (Cn =
                    Array.isArray ||
                    function (e) {
                        return nr.call(e) === '[object Array]';
                    }),
                (Ke = function (e, t) {
                    (this.line = e), (this.column = t);
                }),
                (Ke.prototype.offset = function (e) {
                    return new Ke(this.line, this.column + e);
                }),
                (ct = function (e, t, n) {
                    (this.start = t),
                        (this.end = n),
                        e.sourceFile !== null && (this.source = e.sourceFile);
                }),
                (Bt = {
                    ecmaVersion: 10,
                    sourceType: 'script',
                    onInsertedSemicolon: null,
                    onTrailingComma: null,
                    allowReserved: null,
                    allowReturnOutsideFunction: !1,
                    allowImportExportEverywhere: !1,
                    allowAwaitOutsideFunction: !1,
                    allowHashBang: !1,
                    locations: !1,
                    onToken: null,
                    onComment: null,
                    ranges: !1,
                    program: null,
                    sourceFile: null,
                    directSourceFile: null,
                    preserveParens: !1,
                }),
                (st = 1),
                (lt = 2),
                (Nt = st | lt),
                (En = 4),
                (gn = 8),
                (Kt = 16),
                (Zt = 32),
                (en = 64),
                (tn = 128),
                (nn = 0),
                (jt = 1),
                (Me = 2),
                (rn = 3),
                (un = 4),
                (sn = 5),
                (me = function (e, t, n) {
                    (this.options = e = Xu(e)),
                        (this.sourceFile = e.sourceFile),
                        (this.keywords = Ze(
                            er[
                                e.ecmaVersion >= 6
                                    ? 6
                                    : e.sourceType === 'module'
                                      ? '5module'
                                      : 5
                            ]
                        ));
                    var r = '';
                    if (e.allowReserved !== !0) {
                        for (var i = e.ecmaVersion; !(r = Ot[i]); i--);
                        e.sourceType === 'module' && (r += ' await');
                    }
                    this.reservedWords = Ze(r);
                    var o = (r ? r + ' ' : '') + Ot.strict;
                    (this.reservedWordsStrict = Ze(o)),
                        (this.reservedWordsStrictBind = Ze(
                            o + ' ' + Ot.strictBind
                        )),
                        (this.input = String(t)),
                        (this.containsEsc = !1),
                        n
                            ? ((this.pos = n),
                              (this.lineStart =
                                  this.input.lastIndexOf(
                                      `
`,
                                      n - 1
                                  ) + 1),
                              (this.curLine = this.input
                                  .slice(0, this.lineStart)
                                  .split(Te).length))
                            : ((this.pos = this.lineStart = 0),
                              (this.curLine = 1)),
                        (this.type = f.eof),
                        (this.value = null),
                        (this.start = this.end = this.pos),
                        (this.startLoc = this.endLoc = this.curPosition()),
                        (this.lastTokEndLoc = this.lastTokStartLoc = null),
                        (this.lastTokStart = this.lastTokEnd = this.pos),
                        (this.context = this.initialContext()),
                        (this.exprAllowed = !0),
                        (this.inModule = e.sourceType === 'module'),
                        (this.strict =
                            this.inModule || this.strictDirective(this.pos)),
                        (this.potentialArrowAt = -1),
                        (this.yieldPos =
                            this.awaitPos =
                            this.awaitIdentPos =
                                0),
                        (this.labels = []),
                        (this.undefinedExports = {}),
                        this.pos === 0 &&
                            e.allowHashBang &&
                            this.input.slice(0, 2) === '#!' &&
                            this.skipLineComment(2),
                        (this.scopeStack = []),
                        this.enterScope(st),
                        (this.regexpState = null);
                }),
                (Ye = {
                    inFunction: { configurable: !0 },
                    inGenerator: { configurable: !0 },
                    inAsync: { configurable: !0 },
                    allowSuper: { configurable: !0 },
                    allowDirectSuper: { configurable: !0 },
                    treatFunctionsAsVar: { configurable: !0 },
                }),
                (me.prototype.parse = function () {
                    var e = this.options.program || this.startNode();
                    return this.nextToken(), this.parseTopLevel(e);
                }),
                (Ye.inFunction.get = function () {
                    return (this.currentVarScope().flags & lt) > 0;
                }),
                (Ye.inGenerator.get = function () {
                    return (this.currentVarScope().flags & gn) > 0;
                }),
                (Ye.inAsync.get = function () {
                    return (this.currentVarScope().flags & En) > 0;
                }),
                (Ye.allowSuper.get = function () {
                    return (this.currentThisScope().flags & en) > 0;
                }),
                (Ye.allowDirectSuper.get = function () {
                    return (this.currentThisScope().flags & tn) > 0;
                }),
                (Ye.treatFunctionsAsVar.get = function () {
                    return this.treatFunctionsAsVarInScope(this.currentScope());
                }),
                (me.prototype.inNonArrowFunction = function () {
                    return (this.currentThisScope().flags & lt) > 0;
                }),
                (me.extend = function () {
                    for (var e = [], t = arguments.length; t--; )
                        e[t] = arguments[t];
                    for (var n = this, r = 0; r < e.length; r++) n = e[r](n);
                    return n;
                }),
                (me.parse = function (e, t) {
                    return new this(t, e).parse();
                }),
                (me.parseExpressionAt = function (e, t, n) {
                    var r = new this(n, e, t);
                    return r.nextToken(), r.parseExpression();
                }),
                (me.tokenizer = function (e, t) {
                    return new this(t, e);
                }),
                Object.defineProperties(me.prototype, Ye),
                (_e = me.prototype),
                (rr = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/),
                (_e.strictDirective = function (e) {
                    for (;;) {
                        (Ie.lastIndex = e),
                            (e += Ie.exec(this.input)[0].length);
                        var t = rr.exec(this.input.slice(e));
                        if (!t) return !1;
                        if ((t[1] || t[2]) === 'use strict') {
                            Ie.lastIndex = e + t[0].length;
                            var n = Ie.exec(this.input),
                                r = n.index + n[0].length,
                                i = this.input.charAt(r);
                            return (
                                i === ';' ||
                                i === '}' ||
                                (Te.test(n[0]) &&
                                    !(
                                        /[(`.[+\-/*%<>=,?^&]/.test(i) ||
                                        (i === '!' &&
                                            this.input.charAt(r + 1) === '=')
                                    ))
                            );
                        }
                        (e += t[0].length),
                            (Ie.lastIndex = e),
                            (e += Ie.exec(this.input)[0].length),
                            this.input[e] === ';' && e++;
                    }
                }),
                (_e.eat = function (e) {
                    return this.type === e ? (this.next(), !0) : !1;
                }),
                (_e.isContextual = function (e) {
                    return (
                        this.type === f.name &&
                        this.value === e &&
                        !this.containsEsc
                    );
                }),
                (_e.eatContextual = function (e) {
                    return this.isContextual(e) ? (this.next(), !0) : !1;
                }),
                (_e.expectContextual = function (e) {
                    this.eatContextual(e) || this.unexpected();
                }),
                (_e.canInsertSemicolon = function () {
                    return (
                        this.type === f.eof ||
                        this.type === f.braceR ||
                        Te.test(this.input.slice(this.lastTokEnd, this.start))
                    );
                }),
                (_e.insertSemicolon = function () {
                    if (this.canInsertSemicolon())
                        return (
                            this.options.onInsertedSemicolon &&
                                this.options.onInsertedSemicolon(
                                    this.lastTokEnd,
                                    this.lastTokEndLoc
                                ),
                            !0
                        );
                }),
                (_e.semicolon = function () {
                    !this.eat(f.semi) &&
                        !this.insertSemicolon() &&
                        this.unexpected();
                }),
                (_e.afterTrailingComma = function (e, t) {
                    if (this.type === e)
                        return (
                            this.options.onTrailingComma &&
                                this.options.onTrailingComma(
                                    this.lastTokStart,
                                    this.lastTokStartLoc
                                ),
                            t || this.next(),
                            !0
                        );
                }),
                (_e.expect = function (e) {
                    this.eat(e) || this.unexpected();
                }),
                (_e.unexpected = function (e) {
                    this.raise(e ?? this.start, 'Unexpected token');
                }),
                (_e.checkPatternErrors = function (e, t) {
                    if (e) {
                        e.trailingComma > -1 &&
                            this.raiseRecoverable(
                                e.trailingComma,
                                'Comma is not permitted after the rest element'
                            );
                        var n = t ? e.parenthesizedAssign : e.parenthesizedBind;
                        n > -1 &&
                            this.raiseRecoverable(n, 'Parenthesized pattern');
                    }
                }),
                (_e.checkExpressionErrors = function (e, t) {
                    if (!e) return !1;
                    var n = e.shorthandAssign,
                        r = e.doubleProto;
                    if (!t) return n >= 0 || r >= 0;
                    n >= 0 &&
                        this.raise(
                            n,
                            'Shorthand property assignments are valid only in destructuring patterns'
                        ),
                        r >= 0 &&
                            this.raiseRecoverable(
                                r,
                                'Redefinition of __proto__ property'
                            );
                }),
                (_e.checkYieldAwaitInDefaultParams = function () {
                    this.yieldPos &&
                        (!this.awaitPos || this.yieldPos < this.awaitPos) &&
                        this.raise(
                            this.yieldPos,
                            'Yield expression cannot be a default value'
                        ),
                        this.awaitPos &&
                            this.raise(
                                this.awaitPos,
                                'Await expression cannot be a default value'
                            );
                }),
                (_e.isSimpleAssignTarget = function (e) {
                    return e.type === 'ParenthesizedExpression'
                        ? this.isSimpleAssignTarget(e.expression)
                        : e.type === 'Identifier' ||
                              e.type === 'MemberExpression';
                }),
                (K = me.prototype),
                (K.parseTopLevel = function (e) {
                    var t = {};
                    for (e.body || (e.body = []); this.type !== f.eof; ) {
                        var n = this.parseStatement(null, !0, t);
                        e.body.push(n);
                    }
                    if (this.inModule)
                        for (
                            var r = 0, i = Object.keys(this.undefinedExports);
                            r < i.length;
                            r += 1
                        ) {
                            var o = i[r];
                            this.raiseRecoverable(
                                this.undefinedExports[o].start,
                                "Export '" + o + "' is not defined"
                            );
                        }
                    return (
                        this.adaptDirectivePrologue(e.body),
                        this.next(),
                        (e.sourceType = this.options.sourceType),
                        this.finishNode(e, 'Program')
                    );
                }),
                (Mt = { kind: 'loop' }),
                (ur = { kind: 'switch' }),
                (K.isLet = function (e) {
                    if (
                        this.options.ecmaVersion < 6 ||
                        !this.isContextual('let')
                    )
                        return !1;
                    Ie.lastIndex = this.pos;
                    var t = Ie.exec(this.input),
                        n = this.pos + t[0].length,
                        r = this.input.charCodeAt(n);
                    if (r === 91) return !0;
                    if (e) return !1;
                    if (r === 123) return !0;
                    if (Ge(r, !0)) {
                        for (var i = n + 1; Qe(this.input.charCodeAt(i), !0); )
                            ++i;
                        var o = this.input.slice(n, i);
                        if (!tr.test(o)) return !0;
                    }
                    return !1;
                }),
                (K.isAsyncFunction = function () {
                    if (
                        this.options.ecmaVersion < 8 ||
                        !this.isContextual('async')
                    )
                        return !1;
                    Ie.lastIndex = this.pos;
                    var e = Ie.exec(this.input),
                        t = this.pos + e[0].length;
                    return (
                        !Te.test(this.input.slice(this.pos, t)) &&
                        this.input.slice(t, t + 8) === 'function' &&
                        (t + 8 === this.input.length ||
                            !Qe(this.input.charAt(t + 8)))
                    );
                }),
                (K.parseStatement = function (e, t, n) {
                    var r = this.type,
                        i = this.startNode(),
                        o;
                    switch ((this.isLet(e) && ((r = f._var), (o = 'let')), r)) {
                        case f._break:
                        case f._continue:
                            return this.parseBreakContinueStatement(
                                i,
                                r.keyword
                            );
                        case f._debugger:
                            return this.parseDebuggerStatement(i);
                        case f._do:
                            return this.parseDoStatement(i);
                        case f._for:
                            return this.parseForStatement(i);
                        case f._function:
                            return (
                                e &&
                                    (this.strict ||
                                        (e !== 'if' && e !== 'label')) &&
                                    this.options.ecmaVersion >= 6 &&
                                    this.unexpected(),
                                this.parseFunctionStatement(i, !1, !e)
                            );
                        case f._class:
                            return (
                                e && this.unexpected(), this.parseClass(i, !0)
                            );
                        case f._if:
                            return this.parseIfStatement(i);
                        case f._return:
                            return this.parseReturnStatement(i);
                        case f._switch:
                            return this.parseSwitchStatement(i);
                        case f._throw:
                            return this.parseThrowStatement(i);
                        case f._try:
                            return this.parseTryStatement(i);
                        case f._const:
                        case f._var:
                            return (
                                (o = o || this.value),
                                e && o !== 'var' && this.unexpected(),
                                this.parseVarStatement(i, o)
                            );
                        case f._while:
                            return this.parseWhileStatement(i);
                        case f._with:
                            return this.parseWithStatement(i);
                        case f.braceL:
                            return this.parseBlock(!0, i);
                        case f.semi:
                            return this.parseEmptyStatement(i);
                        case f._export:
                        case f._import:
                            if (
                                this.options.ecmaVersion > 10 &&
                                r === f._import
                            ) {
                                Ie.lastIndex = this.pos;
                                var s = Ie.exec(this.input),
                                    l = this.pos + s[0].length,
                                    p = this.input.charCodeAt(l);
                                if (p === 40 || p === 46)
                                    return this.parseExpressionStatement(
                                        i,
                                        this.parseExpression()
                                    );
                            }
                            return (
                                this.options.allowImportExportEverywhere ||
                                    (t ||
                                        this.raise(
                                            this.start,
                                            "'import' and 'export' may only appear at the top level"
                                        ),
                                    this.inModule ||
                                        this.raise(
                                            this.start,
                                            "'import' and 'export' may appear only with 'sourceType: module'"
                                        )),
                                r === f._import
                                    ? this.parseImport(i)
                                    : this.parseExport(i, n)
                            );
                        default:
                            if (this.isAsyncFunction())
                                return (
                                    e && this.unexpected(),
                                    this.next(),
                                    this.parseFunctionStatement(i, !0, !e)
                                );
                            var d = this.value,
                                D = this.parseExpression();
                            return r === f.name &&
                                D.type === 'Identifier' &&
                                this.eat(f.colon)
                                ? this.parseLabeledStatement(i, d, D, e)
                                : this.parseExpressionStatement(i, D);
                    }
                }),
                (K.parseBreakContinueStatement = function (e, t) {
                    var n = t === 'break';
                    this.next(),
                        this.eat(f.semi) || this.insertSemicolon()
                            ? (e.label = null)
                            : this.type !== f.name
                              ? this.unexpected()
                              : ((e.label = this.parseIdent()),
                                this.semicolon());
                    for (var r = 0; r < this.labels.length; ++r) {
                        var i = this.labels[r];
                        if (
                            (e.label == null || i.name === e.label.name) &&
                            ((i.kind != null && (n || i.kind === 'loop')) ||
                                (e.label && n))
                        )
                            break;
                    }
                    return (
                        r === this.labels.length &&
                            this.raise(e.start, 'Unsyntactic ' + t),
                        this.finishNode(
                            e,
                            n ? 'BreakStatement' : 'ContinueStatement'
                        )
                    );
                }),
                (K.parseDebuggerStatement = function (e) {
                    return (
                        this.next(),
                        this.semicolon(),
                        this.finishNode(e, 'DebuggerStatement')
                    );
                }),
                (K.parseDoStatement = function (e) {
                    return (
                        this.next(),
                        this.labels.push(Mt),
                        (e.body = this.parseStatement('do')),
                        this.labels.pop(),
                        this.expect(f._while),
                        (e.test = this.parseParenExpression()),
                        this.options.ecmaVersion >= 6
                            ? this.eat(f.semi)
                            : this.semicolon(),
                        this.finishNode(e, 'DoWhileStatement')
                    );
                }),
                (K.parseForStatement = function (e) {
                    this.next();
                    var t =
                        this.options.ecmaVersion >= 9 &&
                        (this.inAsync ||
                            (!this.inFunction &&
                                this.options.allowAwaitOutsideFunction)) &&
                        this.eatContextual('await')
                            ? this.lastTokStart
                            : -1;
                    if (
                        (this.labels.push(Mt),
                        this.enterScope(0),
                        this.expect(f.parenL),
                        this.type === f.semi)
                    )
                        return (
                            t > -1 && this.unexpected(t), this.parseFor(e, null)
                        );
                    var n = this.isLet();
                    if (this.type === f._var || this.type === f._const || n) {
                        var r = this.startNode(),
                            i = n ? 'let' : this.value;
                        return (
                            this.next(),
                            this.parseVar(r, !0, i),
                            this.finishNode(r, 'VariableDeclaration'),
                            (this.type === f._in ||
                                (this.options.ecmaVersion >= 6 &&
                                    this.isContextual('of'))) &&
                            r.declarations.length === 1
                                ? (this.options.ecmaVersion >= 9 &&
                                      (this.type === f._in
                                          ? t > -1 && this.unexpected(t)
                                          : (e.await = t > -1)),
                                  this.parseForIn(e, r))
                                : (t > -1 && this.unexpected(t),
                                  this.parseFor(e, r))
                        );
                    }
                    var o = new Pt(),
                        s = this.parseExpression(!0, o);
                    return this.type === f._in ||
                        (this.options.ecmaVersion >= 6 &&
                            this.isContextual('of'))
                        ? (this.options.ecmaVersion >= 9 &&
                              (this.type === f._in
                                  ? t > -1 && this.unexpected(t)
                                  : (e.await = t > -1)),
                          this.toAssignable(s, !1, o),
                          this.checkLVal(s),
                          this.parseForIn(e, s))
                        : (this.checkExpressionErrors(o, !0),
                          t > -1 && this.unexpected(t),
                          this.parseFor(e, s));
                }),
                (K.parseFunctionStatement = function (e, t, n) {
                    return (
                        this.next(),
                        this.parseFunction(e, at | (n ? 0 : Vt), !1, t)
                    );
                }),
                (K.parseIfStatement = function (e) {
                    return (
                        this.next(),
                        (e.test = this.parseParenExpression()),
                        (e.consequent = this.parseStatement('if')),
                        (e.alternate = this.eat(f._else)
                            ? this.parseStatement('if')
                            : null),
                        this.finishNode(e, 'IfStatement')
                    );
                }),
                (K.parseReturnStatement = function (e) {
                    return (
                        !this.inFunction &&
                            !this.options.allowReturnOutsideFunction &&
                            this.raise(
                                this.start,
                                "'return' outside of function"
                            ),
                        this.next(),
                        this.eat(f.semi) || this.insertSemicolon()
                            ? (e.argument = null)
                            : ((e.argument = this.parseExpression()),
                              this.semicolon()),
                        this.finishNode(e, 'ReturnStatement')
                    );
                }),
                (K.parseSwitchStatement = function (e) {
                    this.next(),
                        (e.discriminant = this.parseParenExpression()),
                        (e.cases = []),
                        this.expect(f.braceL),
                        this.labels.push(ur),
                        this.enterScope(0);
                    for (var t, n = !1; this.type !== f.braceR; )
                        if (this.type === f._case || this.type === f._default) {
                            var r = this.type === f._case;
                            t && this.finishNode(t, 'SwitchCase'),
                                e.cases.push((t = this.startNode())),
                                (t.consequent = []),
                                this.next(),
                                r
                                    ? (t.test = this.parseExpression())
                                    : (n &&
                                          this.raiseRecoverable(
                                              this.lastTokStart,
                                              'Multiple default clauses'
                                          ),
                                      (n = !0),
                                      (t.test = null)),
                                this.expect(f.colon);
                        } else
                            t || this.unexpected(),
                                t.consequent.push(this.parseStatement(null));
                    return (
                        this.exitScope(),
                        t && this.finishNode(t, 'SwitchCase'),
                        this.next(),
                        this.labels.pop(),
                        this.finishNode(e, 'SwitchStatement')
                    );
                }),
                (K.parseThrowStatement = function (e) {
                    return (
                        this.next(),
                        Te.test(
                            this.input.slice(this.lastTokEnd, this.start)
                        ) &&
                            this.raise(
                                this.lastTokEnd,
                                'Illegal newline after throw'
                            ),
                        (e.argument = this.parseExpression()),
                        this.semicolon(),
                        this.finishNode(e, 'ThrowStatement')
                    );
                }),
                (ir = []),
                (K.parseTryStatement = function (e) {
                    if (
                        (this.next(),
                        (e.block = this.parseBlock()),
                        (e.handler = null),
                        this.type === f._catch)
                    ) {
                        var t = this.startNode();
                        if ((this.next(), this.eat(f.parenL))) {
                            t.param = this.parseBindingAtom();
                            var n = t.param.type === 'Identifier';
                            this.enterScope(n ? Zt : 0),
                                this.checkLVal(t.param, n ? un : Me),
                                this.expect(f.parenR);
                        } else
                            this.options.ecmaVersion < 10 && this.unexpected(),
                                (t.param = null),
                                this.enterScope(0);
                        (t.body = this.parseBlock(!1)),
                            this.exitScope(),
                            (e.handler = this.finishNode(t, 'CatchClause'));
                    }
                    return (
                        (e.finalizer = this.eat(f._finally)
                            ? this.parseBlock()
                            : null),
                        !e.handler &&
                            !e.finalizer &&
                            this.raise(
                                e.start,
                                'Missing catch or finally clause'
                            ),
                        this.finishNode(e, 'TryStatement')
                    );
                }),
                (K.parseVarStatement = function (e, t) {
                    return (
                        this.next(),
                        this.parseVar(e, !1, t),
                        this.semicolon(),
                        this.finishNode(e, 'VariableDeclaration')
                    );
                }),
                (K.parseWhileStatement = function (e) {
                    return (
                        this.next(),
                        (e.test = this.parseParenExpression()),
                        this.labels.push(Mt),
                        (e.body = this.parseStatement('while')),
                        this.labels.pop(),
                        this.finishNode(e, 'WhileStatement')
                    );
                }),
                (K.parseWithStatement = function (e) {
                    return (
                        this.strict &&
                            this.raise(this.start, "'with' in strict mode"),
                        this.next(),
                        (e.object = this.parseParenExpression()),
                        (e.body = this.parseStatement('with')),
                        this.finishNode(e, 'WithStatement')
                    );
                }),
                (K.parseEmptyStatement = function (e) {
                    return this.next(), this.finishNode(e, 'EmptyStatement');
                }),
                (K.parseLabeledStatement = function (e, t, n, r) {
                    for (var i = 0, o = this.labels; i < o.length; i += 1) {
                        var s = o[i];
                        s.name === t &&
                            this.raise(
                                n.start,
                                "Label '" + t + "' is already declared"
                            );
                    }
                    for (
                        var l = this.type.isLoop
                                ? 'loop'
                                : this.type === f._switch
                                  ? 'switch'
                                  : null,
                            p = this.labels.length - 1;
                        p >= 0;
                        p--
                    ) {
                        var d = this.labels[p];
                        if (d.statementStart === e.start)
                            (d.statementStart = this.start), (d.kind = l);
                        else break;
                    }
                    return (
                        this.labels.push({
                            name: t,
                            kind: l,
                            statementStart: this.start,
                        }),
                        (e.body = this.parseStatement(
                            r
                                ? r.indexOf('label') === -1
                                    ? r + 'label'
                                    : r
                                : 'label'
                        )),
                        this.labels.pop(),
                        (e.label = n),
                        this.finishNode(e, 'LabeledStatement')
                    );
                }),
                (K.parseExpressionStatement = function (e, t) {
                    return (
                        (e.expression = t),
                        this.semicolon(),
                        this.finishNode(e, 'ExpressionStatement')
                    );
                }),
                (K.parseBlock = function (e, t, n) {
                    for (
                        e === void 0 && (e = !0),
                            t === void 0 && (t = this.startNode()),
                            t.body = [],
                            this.expect(f.braceL),
                            e && this.enterScope(0);
                        this.type !== f.braceR;

                    ) {
                        var r = this.parseStatement(null);
                        t.body.push(r);
                    }
                    return (
                        n && (this.strict = !1),
                        this.next(),
                        e && this.exitScope(),
                        this.finishNode(t, 'BlockStatement')
                    );
                }),
                (K.parseFor = function (e, t) {
                    return (
                        (e.init = t),
                        this.expect(f.semi),
                        (e.test =
                            this.type === f.semi
                                ? null
                                : this.parseExpression()),
                        this.expect(f.semi),
                        (e.update =
                            this.type === f.parenR
                                ? null
                                : this.parseExpression()),
                        this.expect(f.parenR),
                        (e.body = this.parseStatement('for')),
                        this.exitScope(),
                        this.labels.pop(),
                        this.finishNode(e, 'ForStatement')
                    );
                }),
                (K.parseForIn = function (e, t) {
                    var n = this.type === f._in;
                    return (
                        this.next(),
                        t.type === 'VariableDeclaration' &&
                        t.declarations[0].init != null &&
                        (!n ||
                            this.options.ecmaVersion < 8 ||
                            this.strict ||
                            t.kind !== 'var' ||
                            t.declarations[0].id.type !== 'Identifier')
                            ? this.raise(
                                  t.start,
                                  (n ? 'for-in' : 'for-of') +
                                      ' loop variable declaration may not have an initializer'
                              )
                            : t.type === 'AssignmentPattern' &&
                              this.raise(
                                  t.start,
                                  'Invalid left-hand side in for-loop'
                              ),
                        (e.left = t),
                        (e.right = n
                            ? this.parseExpression()
                            : this.parseMaybeAssign()),
                        this.expect(f.parenR),
                        (e.body = this.parseStatement('for')),
                        this.exitScope(),
                        this.labels.pop(),
                        this.finishNode(
                            e,
                            n ? 'ForInStatement' : 'ForOfStatement'
                        )
                    );
                }),
                (K.parseVar = function (e, t, n) {
                    for (e.declarations = [], e.kind = n; ; ) {
                        var r = this.startNode();
                        if (
                            (this.parseVarId(r, n),
                            this.eat(f.eq)
                                ? (r.init = this.parseMaybeAssign(t))
                                : n === 'const' &&
                                    !(
                                        this.type === f._in ||
                                        (this.options.ecmaVersion >= 6 &&
                                            this.isContextual('of'))
                                    )
                                  ? this.unexpected()
                                  : r.id.type !== 'Identifier' &&
                                      !(
                                          t &&
                                          (this.type === f._in ||
                                              this.isContextual('of'))
                                      )
                                    ? this.raise(
                                          this.lastTokEnd,
                                          'Complex binding patterns require an initialization value'
                                      )
                                    : (r.init = null),
                            e.declarations.push(
                                this.finishNode(r, 'VariableDeclarator')
                            ),
                            !this.eat(f.comma))
                        )
                            break;
                    }
                    return e;
                }),
                (K.parseVarId = function (e, t) {
                    (e.id = this.parseBindingAtom()),
                        this.checkLVal(e.id, t === 'var' ? jt : Me, !1);
                }),
                (at = 1),
                (Vt = 2),
                (an = 4),
                (K.parseFunction = function (e, t, n, r) {
                    this.initFunction(e),
                        (this.options.ecmaVersion >= 9 ||
                            (this.options.ecmaVersion >= 6 && !r)) &&
                            (this.type === f.star &&
                                t & Vt &&
                                this.unexpected(),
                            (e.generator = this.eat(f.star))),
                        this.options.ecmaVersion >= 8 && (e.async = !!r),
                        t & at &&
                            ((e.id =
                                t & an && this.type !== f.name
                                    ? null
                                    : this.parseIdent()),
                            e.id &&
                                !(t & Vt) &&
                                this.checkLVal(
                                    e.id,
                                    this.strict || e.generator || e.async
                                        ? this.treatFunctionsAsVar
                                            ? jt
                                            : Me
                                        : rn
                                ));
                    var i = this.yieldPos,
                        o = this.awaitPos,
                        s = this.awaitIdentPos;
                    return (
                        (this.yieldPos = 0),
                        (this.awaitPos = 0),
                        (this.awaitIdentPos = 0),
                        this.enterScope(Yt(e.async, e.generator)),
                        t & at ||
                            (e.id =
                                this.type === f.name
                                    ? this.parseIdent()
                                    : null),
                        this.parseFunctionParams(e),
                        this.parseFunctionBody(e, n, !1),
                        (this.yieldPos = i),
                        (this.awaitPos = o),
                        (this.awaitIdentPos = s),
                        this.finishNode(
                            e,
                            t & at
                                ? 'FunctionDeclaration'
                                : 'FunctionExpression'
                        )
                    );
                }),
                (K.parseFunctionParams = function (e) {
                    this.expect(f.parenL),
                        (e.params = this.parseBindingList(
                            f.parenR,
                            !1,
                            this.options.ecmaVersion >= 8
                        )),
                        this.checkYieldAwaitInDefaultParams();
                }),
                (K.parseClass = function (e, t) {
                    this.next();
                    var n = this.strict;
                    (this.strict = !0),
                        this.parseClassId(e, t),
                        this.parseClassSuper(e);
                    var r = this.startNode(),
                        i = !1;
                    for (
                        r.body = [], this.expect(f.braceL);
                        this.type !== f.braceR;

                    ) {
                        var o = this.parseClassElement(e.superClass !== null);
                        o &&
                            (r.body.push(o),
                            o.type === 'MethodDefinition' &&
                                o.kind === 'constructor' &&
                                (i &&
                                    this.raise(
                                        o.start,
                                        'Duplicate constructor in the same class'
                                    ),
                                (i = !0)));
                    }
                    return (
                        (this.strict = n),
                        this.next(),
                        (e.body = this.finishNode(r, 'ClassBody')),
                        this.finishNode(
                            e,
                            t ? 'ClassDeclaration' : 'ClassExpression'
                        )
                    );
                }),
                (K.parseClassElement = function (e) {
                    var t = this;
                    if (this.eat(f.semi)) return null;
                    var n = this.startNode(),
                        r = function (p, d) {
                            d === void 0 && (d = !1);
                            var D = t.start,
                                y = t.startLoc;
                            return t.eatContextual(p)
                                ? t.type !== f.parenL &&
                                  (!d || !t.canInsertSemicolon())
                                    ? !0
                                    : (n.key && t.unexpected(),
                                      (n.computed = !1),
                                      (n.key = t.startNodeAt(D, y)),
                                      (n.key.name = p),
                                      t.finishNode(n.key, 'Identifier'),
                                      !1)
                                : !1;
                        };
                    (n.kind = 'method'), (n.static = r('static'));
                    var i = this.eat(f.star),
                        o = !1;
                    i ||
                        (this.options.ecmaVersion >= 8 && r('async', !0)
                            ? ((o = !0),
                              (i =
                                  this.options.ecmaVersion >= 9 &&
                                  this.eat(f.star)))
                            : r('get')
                              ? (n.kind = 'get')
                              : r('set') && (n.kind = 'set')),
                        n.key || this.parsePropertyName(n);
                    var s = n.key,
                        l = !1;
                    return (
                        !n.computed &&
                        !n.static &&
                        ((s.type === 'Identifier' &&
                            s.name === 'constructor') ||
                            (s.type === 'Literal' && s.value === 'constructor'))
                            ? (n.kind !== 'method' &&
                                  this.raise(
                                      s.start,
                                      "Constructor can't have get/set modifier"
                                  ),
                              i &&
                                  this.raise(
                                      s.start,
                                      "Constructor can't be a generator"
                                  ),
                              o &&
                                  this.raise(
                                      s.start,
                                      "Constructor can't be an async method"
                                  ),
                              (n.kind = 'constructor'),
                              (l = e))
                            : n.static &&
                              s.type === 'Identifier' &&
                              s.name === 'prototype' &&
                              this.raise(
                                  s.start,
                                  'Classes may not have a static property named prototype'
                              ),
                        this.parseClassMethod(n, i, o, l),
                        n.kind === 'get' &&
                            n.value.params.length !== 0 &&
                            this.raiseRecoverable(
                                n.value.start,
                                'getter should have no params'
                            ),
                        n.kind === 'set' &&
                            n.value.params.length !== 1 &&
                            this.raiseRecoverable(
                                n.value.start,
                                'setter should have exactly one param'
                            ),
                        n.kind === 'set' &&
                            n.value.params[0].type === 'RestElement' &&
                            this.raiseRecoverable(
                                n.value.params[0].start,
                                'Setter cannot use rest params'
                            ),
                        n
                    );
                }),
                (K.parseClassMethod = function (e, t, n, r) {
                    return (
                        (e.value = this.parseMethod(t, n, r)),
                        this.finishNode(e, 'MethodDefinition')
                    );
                }),
                (K.parseClassId = function (e, t) {
                    this.type === f.name
                        ? ((e.id = this.parseIdent()),
                          t && this.checkLVal(e.id, Me, !1))
                        : (t === !0 && this.unexpected(), (e.id = null));
                }),
                (K.parseClassSuper = function (e) {
                    e.superClass = this.eat(f._extends)
                        ? this.parseExprSubscripts()
                        : null;
                }),
                (K.parseExport = function (e, t) {
                    if ((this.next(), this.eat(f.star)))
                        return (
                            this.options.ecmaVersion >= 11 &&
                                (this.eatContextual('as')
                                    ? ((e.exported = this.parseIdent(!0)),
                                      this.checkExport(
                                          t,
                                          e.exported.name,
                                          this.lastTokStart
                                      ))
                                    : (e.exported = null)),
                            this.expectContextual('from'),
                            this.type !== f.string && this.unexpected(),
                            (e.source = this.parseExprAtom()),
                            this.semicolon(),
                            this.finishNode(e, 'ExportAllDeclaration')
                        );
                    if (this.eat(f._default)) {
                        this.checkExport(t, 'default', this.lastTokStart);
                        var n;
                        if (
                            this.type === f._function ||
                            (n = this.isAsyncFunction())
                        ) {
                            var r = this.startNode();
                            this.next(),
                                n && this.next(),
                                (e.declaration = this.parseFunction(
                                    r,
                                    at | an,
                                    !1,
                                    n
                                ));
                        } else if (this.type === f._class) {
                            var i = this.startNode();
                            e.declaration = this.parseClass(i, 'nullableID');
                        } else
                            (e.declaration = this.parseMaybeAssign()),
                                this.semicolon();
                        return this.finishNode(e, 'ExportDefaultDeclaration');
                    }
                    if (this.shouldParseExportStatement())
                        (e.declaration = this.parseStatement(null)),
                            e.declaration.type === 'VariableDeclaration'
                                ? this.checkVariableExport(
                                      t,
                                      e.declaration.declarations
                                  )
                                : this.checkExport(
                                      t,
                                      e.declaration.id.name,
                                      e.declaration.id.start
                                  ),
                            (e.specifiers = []),
                            (e.source = null);
                    else {
                        if (
                            ((e.declaration = null),
                            (e.specifiers = this.parseExportSpecifiers(t)),
                            this.eatContextual('from'))
                        )
                            this.type !== f.string && this.unexpected(),
                                (e.source = this.parseExprAtom());
                        else {
                            for (
                                var o = 0, s = e.specifiers;
                                o < s.length;
                                o += 1
                            ) {
                                var l = s[o];
                                this.checkUnreserved(l.local),
                                    this.checkLocalExport(l.local);
                            }
                            e.source = null;
                        }
                        this.semicolon();
                    }
                    return this.finishNode(e, 'ExportNamedDeclaration');
                }),
                (K.checkExport = function (e, t, n) {
                    e &&
                        (qt(e, t) &&
                            this.raiseRecoverable(
                                n,
                                "Duplicate export '" + t + "'"
                            ),
                        (e[t] = !0));
                }),
                (K.checkPatternExport = function (e, t) {
                    var n = t.type;
                    if (n === 'Identifier')
                        this.checkExport(e, t.name, t.start);
                    else if (n === 'ObjectPattern')
                        for (
                            var r = 0, i = t.properties;
                            r < i.length;
                            r += 1
                        ) {
                            var o = i[r];
                            this.checkPatternExport(e, o);
                        }
                    else if (n === 'ArrayPattern')
                        for (var s = 0, l = t.elements; s < l.length; s += 1) {
                            var p = l[s];
                            p && this.checkPatternExport(e, p);
                        }
                    else
                        n === 'Property'
                            ? this.checkPatternExport(e, t.value)
                            : n === 'AssignmentPattern'
                              ? this.checkPatternExport(e, t.left)
                              : n === 'RestElement'
                                ? this.checkPatternExport(e, t.argument)
                                : n === 'ParenthesizedExpression' &&
                                  this.checkPatternExport(e, t.expression);
                }),
                (K.checkVariableExport = function (e, t) {
                    if (e)
                        for (var n = 0, r = t; n < r.length; n += 1) {
                            var i = r[n];
                            this.checkPatternExport(e, i.id);
                        }
                }),
                (K.shouldParseExportStatement = function () {
                    return (
                        this.type.keyword === 'var' ||
                        this.type.keyword === 'const' ||
                        this.type.keyword === 'class' ||
                        this.type.keyword === 'function' ||
                        this.isLet() ||
                        this.isAsyncFunction()
                    );
                }),
                (K.parseExportSpecifiers = function (e) {
                    var t = [],
                        n = !0;
                    for (this.expect(f.braceL); !this.eat(f.braceR); ) {
                        if (n) n = !1;
                        else if (
                            (this.expect(f.comma),
                            this.afterTrailingComma(f.braceR))
                        )
                            break;
                        var r = this.startNode();
                        (r.local = this.parseIdent(!0)),
                            (r.exported = this.eatContextual('as')
                                ? this.parseIdent(!0)
                                : r.local),
                            this.checkExport(
                                e,
                                r.exported.name,
                                r.exported.start
                            ),
                            t.push(this.finishNode(r, 'ExportSpecifier'));
                    }
                    return t;
                }),
                (K.parseImport = function (e) {
                    return (
                        this.next(),
                        this.type === f.string
                            ? ((e.specifiers = ir),
                              (e.source = this.parseExprAtom()))
                            : ((e.specifiers = this.parseImportSpecifiers()),
                              this.expectContextual('from'),
                              (e.source =
                                  this.type === f.string
                                      ? this.parseExprAtom()
                                      : this.unexpected())),
                        this.semicolon(),
                        this.finishNode(e, 'ImportDeclaration')
                    );
                }),
                (K.parseImportSpecifiers = function () {
                    var e = [],
                        t = !0;
                    if (this.type === f.name) {
                        var n = this.startNode();
                        if (
                            ((n.local = this.parseIdent()),
                            this.checkLVal(n.local, Me),
                            e.push(
                                this.finishNode(n, 'ImportDefaultSpecifier')
                            ),
                            !this.eat(f.comma))
                        )
                            return e;
                    }
                    if (this.type === f.star) {
                        var r = this.startNode();
                        return (
                            this.next(),
                            this.expectContextual('as'),
                            (r.local = this.parseIdent()),
                            this.checkLVal(r.local, Me),
                            e.push(
                                this.finishNode(r, 'ImportNamespaceSpecifier')
                            ),
                            e
                        );
                    }
                    for (this.expect(f.braceL); !this.eat(f.braceR); ) {
                        if (t) t = !1;
                        else if (
                            (this.expect(f.comma),
                            this.afterTrailingComma(f.braceR))
                        )
                            break;
                        var i = this.startNode();
                        (i.imported = this.parseIdent(!0)),
                            this.eatContextual('as')
                                ? (i.local = this.parseIdent())
                                : (this.checkUnreserved(i.imported),
                                  (i.local = i.imported)),
                            this.checkLVal(i.local, Me),
                            e.push(this.finishNode(i, 'ImportSpecifier'));
                    }
                    return e;
                }),
                (K.adaptDirectivePrologue = function (e) {
                    for (
                        var t = 0;
                        t < e.length && this.isDirectiveCandidate(e[t]);
                        ++t
                    )
                        e[t].directive = e[t].expression.raw.slice(1, -1);
                }),
                (K.isDirectiveCandidate = function (e) {
                    return (
                        e.type === 'ExpressionStatement' &&
                        e.expression.type === 'Literal' &&
                        typeof e.expression.value == 'string' &&
                        (this.input[e.start] === '"' ||
                            this.input[e.start] === "'")
                    );
                }),
                (Ve = me.prototype),
                (Ve.toAssignable = function (e, t, n) {
                    if (this.options.ecmaVersion >= 6 && e)
                        switch (e.type) {
                            case 'Identifier':
                                this.inAsync &&
                                    e.name === 'await' &&
                                    this.raise(
                                        e.start,
                                        "Cannot use 'await' as identifier inside an async function"
                                    );
                                break;
                            case 'ObjectPattern':
                            case 'ArrayPattern':
                            case 'RestElement':
                                break;
                            case 'ObjectExpression':
                                (e.type = 'ObjectPattern'),
                                    n && this.checkPatternErrors(n, !0);
                                for (
                                    var r = 0, i = e.properties;
                                    r < i.length;
                                    r += 1
                                ) {
                                    var o = i[r];
                                    this.toAssignable(o, t),
                                        o.type === 'RestElement' &&
                                            (o.argument.type ===
                                                'ArrayPattern' ||
                                                o.argument.type ===
                                                    'ObjectPattern') &&
                                            this.raise(
                                                o.argument.start,
                                                'Unexpected token'
                                            );
                                }
                                break;
                            case 'Property':
                                e.kind !== 'init' &&
                                    this.raise(
                                        e.key.start,
                                        "Object pattern can't contain getter or setter"
                                    ),
                                    this.toAssignable(e.value, t);
                                break;
                            case 'ArrayExpression':
                                (e.type = 'ArrayPattern'),
                                    n && this.checkPatternErrors(n, !0),
                                    this.toAssignableList(e.elements, t);
                                break;
                            case 'SpreadElement':
                                (e.type = 'RestElement'),
                                    this.toAssignable(e.argument, t),
                                    e.argument.type === 'AssignmentPattern' &&
                                        this.raise(
                                            e.argument.start,
                                            'Rest elements cannot have a default value'
                                        );
                                break;
                            case 'AssignmentExpression':
                                e.operator !== '=' &&
                                    this.raise(
                                        e.left.end,
                                        "Only '=' operator can be used for specifying default value."
                                    ),
                                    (e.type = 'AssignmentPattern'),
                                    delete e.operator,
                                    this.toAssignable(e.left, t);
                            case 'AssignmentPattern':
                                break;
                            case 'ParenthesizedExpression':
                                this.toAssignable(e.expression, t, n);
                                break;
                            case 'ChainExpression':
                                this.raiseRecoverable(
                                    e.start,
                                    'Optional chaining cannot appear in left-hand side'
                                );
                                break;
                            case 'MemberExpression':
                                if (!t) break;
                            default:
                                this.raise(e.start, 'Assigning to rvalue');
                        }
                    else n && this.checkPatternErrors(n, !0);
                    return e;
                }),
                (Ve.toAssignableList = function (e, t) {
                    for (var n = e.length, r = 0; r < n; r++) {
                        var i = e[r];
                        i && this.toAssignable(i, t);
                    }
                    if (n) {
                        var o = e[n - 1];
                        this.options.ecmaVersion === 6 &&
                            t &&
                            o &&
                            o.type === 'RestElement' &&
                            o.argument.type !== 'Identifier' &&
                            this.unexpected(o.argument.start);
                    }
                    return e;
                }),
                (Ve.parseSpread = function (e) {
                    var t = this.startNode();
                    return (
                        this.next(),
                        (t.argument = this.parseMaybeAssign(!1, e)),
                        this.finishNode(t, 'SpreadElement')
                    );
                }),
                (Ve.parseRestBinding = function () {
                    var e = this.startNode();
                    return (
                        this.next(),
                        this.options.ecmaVersion === 6 &&
                            this.type !== f.name &&
                            this.unexpected(),
                        (e.argument = this.parseBindingAtom()),
                        this.finishNode(e, 'RestElement')
                    );
                }),
                (Ve.parseBindingAtom = function () {
                    if (this.options.ecmaVersion >= 6)
                        switch (this.type) {
                            case f.bracketL:
                                var e = this.startNode();
                                return (
                                    this.next(),
                                    (e.elements = this.parseBindingList(
                                        f.bracketR,
                                        !0,
                                        !0
                                    )),
                                    this.finishNode(e, 'ArrayPattern')
                                );
                            case f.braceL:
                                return this.parseObj(!0);
                        }
                    return this.parseIdent();
                }),
                (Ve.parseBindingList = function (e, t, n) {
                    for (var r = [], i = !0; !this.eat(e); )
                        if (
                            (i ? (i = !1) : this.expect(f.comma),
                            t && this.type === f.comma)
                        )
                            r.push(null);
                        else {
                            if (n && this.afterTrailingComma(e)) break;
                            if (this.type === f.ellipsis) {
                                var o = this.parseRestBinding();
                                this.parseBindingListItem(o),
                                    r.push(o),
                                    this.type === f.comma &&
                                        this.raise(
                                            this.start,
                                            'Comma is not permitted after the rest element'
                                        ),
                                    this.expect(e);
                                break;
                            } else {
                                var s = this.parseMaybeDefault(
                                    this.start,
                                    this.startLoc
                                );
                                this.parseBindingListItem(s), r.push(s);
                            }
                        }
                    return r;
                }),
                (Ve.parseBindingListItem = function (e) {
                    return e;
                }),
                (Ve.parseMaybeDefault = function (e, t, n) {
                    if (
                        ((n = n || this.parseBindingAtom()),
                        this.options.ecmaVersion < 6 || !this.eat(f.eq))
                    )
                        return n;
                    var r = this.startNodeAt(e, t);
                    return (
                        (r.left = n),
                        (r.right = this.parseMaybeAssign()),
                        this.finishNode(r, 'AssignmentPattern')
                    );
                }),
                (Ve.checkLVal = function (e, t, n) {
                    switch ((t === void 0 && (t = nn), e.type)) {
                        case 'Identifier':
                            t === Me &&
                                e.name === 'let' &&
                                this.raiseRecoverable(
                                    e.start,
                                    'let is disallowed as a lexically bound name'
                                ),
                                this.strict &&
                                    this.reservedWordsStrictBind.test(e.name) &&
                                    this.raiseRecoverable(
                                        e.start,
                                        (t ? 'Binding ' : 'Assigning to ') +
                                            e.name +
                                            ' in strict mode'
                                    ),
                                n &&
                                    (qt(n, e.name) &&
                                        this.raiseRecoverable(
                                            e.start,
                                            'Argument name clash'
                                        ),
                                    (n[e.name] = !0)),
                                t !== nn &&
                                    t !== sn &&
                                    this.declareName(e.name, t, e.start);
                            break;
                        case 'ChainExpression':
                            this.raiseRecoverable(
                                e.start,
                                'Optional chaining cannot appear in left-hand side'
                            );
                            break;
                        case 'MemberExpression':
                            t &&
                                this.raiseRecoverable(
                                    e.start,
                                    'Binding member expression'
                                );
                            break;
                        case 'ObjectPattern':
                            for (
                                var r = 0, i = e.properties;
                                r < i.length;
                                r += 1
                            ) {
                                var o = i[r];
                                this.checkLVal(o, t, n);
                            }
                            break;
                        case 'Property':
                            this.checkLVal(e.value, t, n);
                            break;
                        case 'ArrayPattern':
                            for (
                                var s = 0, l = e.elements;
                                s < l.length;
                                s += 1
                            ) {
                                var p = l[s];
                                p && this.checkLVal(p, t, n);
                            }
                            break;
                        case 'AssignmentPattern':
                            this.checkLVal(e.left, t, n);
                            break;
                        case 'RestElement':
                            this.checkLVal(e.argument, t, n);
                            break;
                        case 'ParenthesizedExpression':
                            this.checkLVal(e.expression, t, n);
                            break;
                        default:
                            this.raise(
                                e.start,
                                (t ? 'Binding' : 'Assigning to') + ' rvalue'
                            );
                    }
                }),
                (re = me.prototype),
                (re.checkPropClash = function (e, t, n) {
                    if (
                        !(
                            this.options.ecmaVersion >= 9 &&
                            e.type === 'SpreadElement'
                        ) &&
                        !(
                            this.options.ecmaVersion >= 6 &&
                            (e.computed || e.method || e.shorthand)
                        )
                    ) {
                        var r = e.key,
                            i;
                        switch (r.type) {
                            case 'Identifier':
                                i = r.name;
                                break;
                            case 'Literal':
                                i = String(r.value);
                                break;
                            default:
                                return;
                        }
                        var o = e.kind;
                        if (this.options.ecmaVersion >= 6) {
                            i === '__proto__' &&
                                o === 'init' &&
                                (t.proto &&
                                    (n
                                        ? n.doubleProto < 0 &&
                                          (n.doubleProto = r.start)
                                        : this.raiseRecoverable(
                                              r.start,
                                              'Redefinition of __proto__ property'
                                          )),
                                (t.proto = !0));
                            return;
                        }
                        i = '$' + i;
                        var s = t[i];
                        if (s) {
                            var l;
                            o === 'init'
                                ? (l =
                                      (this.strict && s.init) || s.get || s.set)
                                : (l = s.init || s[o]),
                                l &&
                                    this.raiseRecoverable(
                                        r.start,
                                        'Redefinition of property'
                                    );
                        } else s = t[i] = { init: !1, get: !1, set: !1 };
                        s[o] = !0;
                    }
                }),
                (re.parseExpression = function (e, t) {
                    var n = this.start,
                        r = this.startLoc,
                        i = this.parseMaybeAssign(e, t);
                    if (this.type === f.comma) {
                        var o = this.startNodeAt(n, r);
                        for (o.expressions = [i]; this.eat(f.comma); )
                            o.expressions.push(this.parseMaybeAssign(e, t));
                        return this.finishNode(o, 'SequenceExpression');
                    }
                    return i;
                }),
                (re.parseMaybeAssign = function (e, t, n) {
                    if (this.isContextual('yield')) {
                        if (this.inGenerator) return this.parseYield(e);
                        this.exprAllowed = !1;
                    }
                    var r = !1,
                        i = -1,
                        o = -1;
                    t
                        ? ((i = t.parenthesizedAssign),
                          (o = t.trailingComma),
                          (t.parenthesizedAssign = t.trailingComma = -1))
                        : ((t = new Pt()), (r = !0));
                    var s = this.start,
                        l = this.startLoc;
                    (this.type === f.parenL || this.type === f.name) &&
                        (this.potentialArrowAt = this.start);
                    var p = this.parseMaybeConditional(e, t);
                    if (
                        (n && (p = n.call(this, p, s, l)), this.type.isAssign)
                    ) {
                        var d = this.startNodeAt(s, l);
                        return (
                            (d.operator = this.value),
                            (d.left =
                                this.type === f.eq
                                    ? this.toAssignable(p, !1, t)
                                    : p),
                            r ||
                                (t.parenthesizedAssign =
                                    t.trailingComma =
                                    t.doubleProto =
                                        -1),
                            t.shorthandAssign >= d.left.start &&
                                (t.shorthandAssign = -1),
                            this.checkLVal(p),
                            this.next(),
                            (d.right = this.parseMaybeAssign(e)),
                            this.finishNode(d, 'AssignmentExpression')
                        );
                    } else r && this.checkExpressionErrors(t, !0);
                    return (
                        i > -1 && (t.parenthesizedAssign = i),
                        o > -1 && (t.trailingComma = o),
                        p
                    );
                }),
                (re.parseMaybeConditional = function (e, t) {
                    var n = this.start,
                        r = this.startLoc,
                        i = this.parseExprOps(e, t);
                    if (this.checkExpressionErrors(t)) return i;
                    if (this.eat(f.question)) {
                        var o = this.startNodeAt(n, r);
                        return (
                            (o.test = i),
                            (o.consequent = this.parseMaybeAssign()),
                            this.expect(f.colon),
                            (o.alternate = this.parseMaybeAssign(e)),
                            this.finishNode(o, 'ConditionalExpression')
                        );
                    }
                    return i;
                }),
                (re.parseExprOps = function (e, t) {
                    var n = this.start,
                        r = this.startLoc,
                        i = this.parseMaybeUnary(t, !1);
                    return this.checkExpressionErrors(t) ||
                        (i.start === n && i.type === 'ArrowFunctionExpression')
                        ? i
                        : this.parseExprOp(i, n, r, -1, e);
                }),
                (re.parseExprOp = function (e, t, n, r, i) {
                    var o = this.type.binop;
                    if (o != null && (!i || this.type !== f._in) && o > r) {
                        var s =
                                this.type === f.logicalOR ||
                                this.type === f.logicalAND,
                            l = this.type === f.coalesce;
                        l && (o = f.logicalAND.binop);
                        var p = this.value;
                        this.next();
                        var d = this.start,
                            D = this.startLoc,
                            y = this.parseExprOp(
                                this.parseMaybeUnary(null, !1),
                                d,
                                D,
                                o,
                                i
                            ),
                            C = this.buildBinary(t, n, e, y, p, s || l);
                        return (
                            ((s && this.type === f.coalesce) ||
                                (l &&
                                    (this.type === f.logicalOR ||
                                        this.type === f.logicalAND))) &&
                                this.raiseRecoverable(
                                    this.start,
                                    'Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses'
                                ),
                            this.parseExprOp(C, t, n, r, i)
                        );
                    }
                    return e;
                }),
                (re.buildBinary = function (e, t, n, r, i, o) {
                    var s = this.startNodeAt(e, t);
                    return (
                        (s.left = n),
                        (s.operator = i),
                        (s.right = r),
                        this.finishNode(
                            s,
                            o ? 'LogicalExpression' : 'BinaryExpression'
                        )
                    );
                }),
                (re.parseMaybeUnary = function (e, t) {
                    var n = this.start,
                        r = this.startLoc,
                        i;
                    if (
                        this.isContextual('await') &&
                        (this.inAsync ||
                            (!this.inFunction &&
                                this.options.allowAwaitOutsideFunction))
                    )
                        (i = this.parseAwait()), (t = !0);
                    else if (this.type.prefix) {
                        var o = this.startNode(),
                            s = this.type === f.incDec;
                        (o.operator = this.value),
                            (o.prefix = !0),
                            this.next(),
                            (o.argument = this.parseMaybeUnary(null, !0)),
                            this.checkExpressionErrors(e, !0),
                            s
                                ? this.checkLVal(o.argument)
                                : this.strict &&
                                    o.operator === 'delete' &&
                                    o.argument.type === 'Identifier'
                                  ? this.raiseRecoverable(
                                        o.start,
                                        'Deleting local variable in strict mode'
                                    )
                                  : (t = !0),
                            (i = this.finishNode(
                                o,
                                s ? 'UpdateExpression' : 'UnaryExpression'
                            ));
                    } else {
                        if (
                            ((i = this.parseExprSubscripts(e)),
                            this.checkExpressionErrors(e))
                        )
                            return i;
                        for (
                            ;
                            this.type.postfix && !this.canInsertSemicolon();

                        ) {
                            var l = this.startNodeAt(n, r);
                            (l.operator = this.value),
                                (l.prefix = !1),
                                (l.argument = i),
                                this.checkLVal(i),
                                this.next(),
                                (i = this.finishNode(l, 'UpdateExpression'));
                        }
                    }
                    return !t && this.eat(f.starstar)
                        ? this.buildBinary(
                              n,
                              r,
                              i,
                              this.parseMaybeUnary(null, !1),
                              '**',
                              !1
                          )
                        : i;
                }),
                (re.parseExprSubscripts = function (e) {
                    var t = this.start,
                        n = this.startLoc,
                        r = this.parseExprAtom(e);
                    if (
                        r.type === 'ArrowFunctionExpression' &&
                        this.input.slice(this.lastTokStart, this.lastTokEnd) !==
                            ')'
                    )
                        return r;
                    var i = this.parseSubscripts(r, t, n);
                    return (
                        e &&
                            i.type === 'MemberExpression' &&
                            (e.parenthesizedAssign >= i.start &&
                                (e.parenthesizedAssign = -1),
                            e.parenthesizedBind >= i.start &&
                                (e.parenthesizedBind = -1)),
                        i
                    );
                }),
                (re.parseSubscripts = function (e, t, n, r) {
                    for (
                        var i =
                                this.options.ecmaVersion >= 8 &&
                                e.type === 'Identifier' &&
                                e.name === 'async' &&
                                this.lastTokEnd === e.end &&
                                !this.canInsertSemicolon() &&
                                e.end - e.start === 5 &&
                                this.potentialArrowAt === e.start,
                            o = !1;
                        ;

                    ) {
                        var s = this.parseSubscript(e, t, n, r, i, o);
                        if (
                            (s.optional && (o = !0),
                            s === e || s.type === 'ArrowFunctionExpression')
                        ) {
                            if (o) {
                                var l = this.startNodeAt(t, n);
                                (l.expression = s),
                                    (s = this.finishNode(l, 'ChainExpression'));
                            }
                            return s;
                        }
                        e = s;
                    }
                }),
                (re.parseSubscript = function (e, t, n, r, i, o) {
                    var s = this.options.ecmaVersion >= 11,
                        l = s && this.eat(f.questionDot);
                    r &&
                        l &&
                        this.raise(
                            this.lastTokStart,
                            'Optional chaining cannot appear in the callee of new expressions'
                        );
                    var p = this.eat(f.bracketL);
                    if (
                        p ||
                        (l &&
                            this.type !== f.parenL &&
                            this.type !== f.backQuote) ||
                        this.eat(f.dot)
                    ) {
                        var d = this.startNodeAt(t, n);
                        (d.object = e),
                            (d.property = p
                                ? this.parseExpression()
                                : this.parseIdent(
                                      this.options.allowReserved !== 'never'
                                  )),
                            (d.computed = !!p),
                            p && this.expect(f.bracketR),
                            s && (d.optional = l),
                            (e = this.finishNode(d, 'MemberExpression'));
                    } else if (!r && this.eat(f.parenL)) {
                        var D = new Pt(),
                            y = this.yieldPos,
                            C = this.awaitPos,
                            E = this.awaitIdentPos;
                        (this.yieldPos = 0),
                            (this.awaitPos = 0),
                            (this.awaitIdentPos = 0);
                        var m = this.parseExprList(
                            f.parenR,
                            this.options.ecmaVersion >= 8,
                            !1,
                            D
                        );
                        if (
                            i &&
                            !l &&
                            !this.canInsertSemicolon() &&
                            this.eat(f.arrow)
                        )
                            return (
                                this.checkPatternErrors(D, !1),
                                this.checkYieldAwaitInDefaultParams(),
                                this.awaitIdentPos > 0 &&
                                    this.raise(
                                        this.awaitIdentPos,
                                        "Cannot use 'await' as identifier inside an async function"
                                    ),
                                (this.yieldPos = y),
                                (this.awaitPos = C),
                                (this.awaitIdentPos = E),
                                this.parseArrowExpression(
                                    this.startNodeAt(t, n),
                                    m,
                                    !0
                                )
                            );
                        this.checkExpressionErrors(D, !0),
                            (this.yieldPos = y || this.yieldPos),
                            (this.awaitPos = C || this.awaitPos),
                            (this.awaitIdentPos = E || this.awaitIdentPos);
                        var g = this.startNodeAt(t, n);
                        (g.callee = e),
                            (g.arguments = m),
                            s && (g.optional = l),
                            (e = this.finishNode(g, 'CallExpression'));
                    } else if (this.type === f.backQuote) {
                        (l || o) &&
                            this.raise(
                                this.start,
                                'Optional chaining cannot appear in the tag of tagged template expressions'
                            );
                        var T = this.startNodeAt(t, n);
                        (T.tag = e),
                            (T.quasi = this.parseTemplate({ isTagged: !0 })),
                            (e = this.finishNode(
                                T,
                                'TaggedTemplateExpression'
                            ));
                    }
                    return e;
                }),
                (re.parseExprAtom = function (e) {
                    this.type === f.slash && this.readRegexp();
                    var t,
                        n = this.potentialArrowAt === this.start;
                    switch (this.type) {
                        case f._super:
                            return (
                                this.allowSuper ||
                                    this.raise(
                                        this.start,
                                        "'super' keyword outside a method"
                                    ),
                                (t = this.startNode()),
                                this.next(),
                                this.type === f.parenL &&
                                    !this.allowDirectSuper &&
                                    this.raise(
                                        t.start,
                                        'super() call outside constructor of a subclass'
                                    ),
                                this.type !== f.dot &&
                                    this.type !== f.bracketL &&
                                    this.type !== f.parenL &&
                                    this.unexpected(),
                                this.finishNode(t, 'Super')
                            );
                        case f._this:
                            return (
                                (t = this.startNode()),
                                this.next(),
                                this.finishNode(t, 'ThisExpression')
                            );
                        case f.name:
                            var r = this.start,
                                i = this.startLoc,
                                o = this.containsEsc,
                                s = this.parseIdent(!1);
                            if (
                                this.options.ecmaVersion >= 8 &&
                                !o &&
                                s.name === 'async' &&
                                !this.canInsertSemicolon() &&
                                this.eat(f._function)
                            )
                                return this.parseFunction(
                                    this.startNodeAt(r, i),
                                    0,
                                    !1,
                                    !0
                                );
                            if (n && !this.canInsertSemicolon()) {
                                if (this.eat(f.arrow))
                                    return this.parseArrowExpression(
                                        this.startNodeAt(r, i),
                                        [s],
                                        !1
                                    );
                                if (
                                    this.options.ecmaVersion >= 8 &&
                                    s.name === 'async' &&
                                    this.type === f.name &&
                                    !o
                                )
                                    return (
                                        (s = this.parseIdent(!1)),
                                        (this.canInsertSemicolon() ||
                                            !this.eat(f.arrow)) &&
                                            this.unexpected(),
                                        this.parseArrowExpression(
                                            this.startNodeAt(r, i),
                                            [s],
                                            !0
                                        )
                                    );
                            }
                            return s;
                        case f.regexp:
                            var l = this.value;
                            return (
                                (t = this.parseLiteral(l.value)),
                                (t.regex = {
                                    pattern: l.pattern,
                                    flags: l.flags,
                                }),
                                t
                            );
                        case f.num:
                        case f.string:
                            return this.parseLiteral(this.value);
                        case f._null:
                        case f._true:
                        case f._false:
                            return (
                                (t = this.startNode()),
                                (t.value =
                                    this.type === f._null
                                        ? null
                                        : this.type === f._true),
                                (t.raw = this.type.keyword),
                                this.next(),
                                this.finishNode(t, 'Literal')
                            );
                        case f.parenL:
                            var p = this.start,
                                d = this.parseParenAndDistinguishExpression(n);
                            return (
                                e &&
                                    (e.parenthesizedAssign < 0 &&
                                        !this.isSimpleAssignTarget(d) &&
                                        (e.parenthesizedAssign = p),
                                    e.parenthesizedBind < 0 &&
                                        (e.parenthesizedBind = p)),
                                d
                            );
                        case f.bracketL:
                            return (
                                (t = this.startNode()),
                                this.next(),
                                (t.elements = this.parseExprList(
                                    f.bracketR,
                                    !0,
                                    !0,
                                    e
                                )),
                                this.finishNode(t, 'ArrayExpression')
                            );
                        case f.braceL:
                            return this.parseObj(!1, e);
                        case f._function:
                            return (
                                (t = this.startNode()),
                                this.next(),
                                this.parseFunction(t, 0)
                            );
                        case f._class:
                            return this.parseClass(this.startNode(), !1);
                        case f._new:
                            return this.parseNew();
                        case f.backQuote:
                            return this.parseTemplate();
                        case f._import:
                            return this.options.ecmaVersion >= 11
                                ? this.parseExprImport()
                                : this.unexpected();
                        default:
                            this.unexpected();
                    }
                }),
                (re.parseExprImport = function () {
                    var e = this.startNode();
                    this.containsEsc &&
                        this.raiseRecoverable(
                            this.start,
                            'Escape sequence in keyword import'
                        );
                    var t = this.parseIdent(!0);
                    switch (this.type) {
                        case f.parenL:
                            return this.parseDynamicImport(e);
                        case f.dot:
                            return (e.meta = t), this.parseImportMeta(e);
                        default:
                            this.unexpected();
                    }
                }),
                (re.parseDynamicImport = function (e) {
                    if (
                        (this.next(),
                        (e.source = this.parseMaybeAssign()),
                        !this.eat(f.parenR))
                    ) {
                        var t = this.start;
                        this.eat(f.comma) && this.eat(f.parenR)
                            ? this.raiseRecoverable(
                                  t,
                                  'Trailing comma is not allowed in import()'
                              )
                            : this.unexpected(t);
                    }
                    return this.finishNode(e, 'ImportExpression');
                }),
                (re.parseImportMeta = function (e) {
                    this.next();
                    var t = this.containsEsc;
                    return (
                        (e.property = this.parseIdent(!0)),
                        e.property.name !== 'meta' &&
                            this.raiseRecoverable(
                                e.property.start,
                                "The only valid meta property for import is 'import.meta'"
                            ),
                        t &&
                            this.raiseRecoverable(
                                e.start,
                                "'import.meta' must not contain escaped characters"
                            ),
                        this.options.sourceType !== 'module' &&
                            this.raiseRecoverable(
                                e.start,
                                "Cannot use 'import.meta' outside a module"
                            ),
                        this.finishNode(e, 'MetaProperty')
                    );
                }),
                (re.parseLiteral = function (e) {
                    var t = this.startNode();
                    return (
                        (t.value = e),
                        (t.raw = this.input.slice(this.start, this.end)),
                        t.raw.charCodeAt(t.raw.length - 1) === 110 &&
                            (t.bigint = t.raw.slice(0, -1).replace(/_/g, '')),
                        this.next(),
                        this.finishNode(t, 'Literal')
                    );
                }),
                (re.parseParenExpression = function () {
                    this.expect(f.parenL);
                    var e = this.parseExpression();
                    return this.expect(f.parenR), e;
                }),
                (re.parseParenAndDistinguishExpression = function (e) {
                    var t = this.start,
                        n = this.startLoc,
                        r,
                        i = this.options.ecmaVersion >= 8;
                    if (this.options.ecmaVersion >= 6) {
                        this.next();
                        var o = this.start,
                            s = this.startLoc,
                            l = [],
                            p = !0,
                            d = !1,
                            D = new Pt(),
                            y = this.yieldPos,
                            C = this.awaitPos,
                            E;
                        for (
                            this.yieldPos = 0, this.awaitPos = 0;
                            this.type !== f.parenR;

                        )
                            if (
                                (p ? (p = !1) : this.expect(f.comma),
                                i && this.afterTrailingComma(f.parenR, !0))
                            ) {
                                d = !0;
                                break;
                            } else if (this.type === f.ellipsis) {
                                (E = this.start),
                                    l.push(
                                        this.parseParenItem(
                                            this.parseRestBinding()
                                        )
                                    ),
                                    this.type === f.comma &&
                                        this.raise(
                                            this.start,
                                            'Comma is not permitted after the rest element'
                                        );
                                break;
                            } else
                                l.push(
                                    this.parseMaybeAssign(
                                        !1,
                                        D,
                                        this.parseParenItem
                                    )
                                );
                        var m = this.start,
                            g = this.startLoc;
                        if (
                            (this.expect(f.parenR),
                            e &&
                                !this.canInsertSemicolon() &&
                                this.eat(f.arrow))
                        )
                            return (
                                this.checkPatternErrors(D, !1),
                                this.checkYieldAwaitInDefaultParams(),
                                (this.yieldPos = y),
                                (this.awaitPos = C),
                                this.parseParenArrowList(t, n, l)
                            );
                        (!l.length || d) && this.unexpected(this.lastTokStart),
                            E && this.unexpected(E),
                            this.checkExpressionErrors(D, !0),
                            (this.yieldPos = y || this.yieldPos),
                            (this.awaitPos = C || this.awaitPos),
                            l.length > 1
                                ? ((r = this.startNodeAt(o, s)),
                                  (r.expressions = l),
                                  this.finishNodeAt(
                                      r,
                                      'SequenceExpression',
                                      m,
                                      g
                                  ))
                                : (r = l[0]);
                    } else r = this.parseParenExpression();
                    if (this.options.preserveParens) {
                        var T = this.startNodeAt(t, n);
                        return (
                            (T.expression = r),
                            this.finishNode(T, 'ParenthesizedExpression')
                        );
                    } else return r;
                }),
                (re.parseParenItem = function (e) {
                    return e;
                }),
                (re.parseParenArrowList = function (e, t, n) {
                    return this.parseArrowExpression(this.startNodeAt(e, t), n);
                }),
                (sr = []),
                (re.parseNew = function () {
                    this.containsEsc &&
                        this.raiseRecoverable(
                            this.start,
                            'Escape sequence in keyword new'
                        );
                    var e = this.startNode(),
                        t = this.parseIdent(!0);
                    if (this.options.ecmaVersion >= 6 && this.eat(f.dot)) {
                        e.meta = t;
                        var n = this.containsEsc;
                        return (
                            (e.property = this.parseIdent(!0)),
                            e.property.name !== 'target' &&
                                this.raiseRecoverable(
                                    e.property.start,
                                    "The only valid meta property for new is 'new.target'"
                                ),
                            n &&
                                this.raiseRecoverable(
                                    e.start,
                                    "'new.target' must not contain escaped characters"
                                ),
                            this.inNonArrowFunction() ||
                                this.raiseRecoverable(
                                    e.start,
                                    "'new.target' can only be used in functions"
                                ),
                            this.finishNode(e, 'MetaProperty')
                        );
                    }
                    var r = this.start,
                        i = this.startLoc,
                        o = this.type === f._import;
                    return (
                        (e.callee = this.parseSubscripts(
                            this.parseExprAtom(),
                            r,
                            i,
                            !0
                        )),
                        o &&
                            e.callee.type === 'ImportExpression' &&
                            this.raise(r, 'Cannot use new with import()'),
                        this.eat(f.parenL)
                            ? (e.arguments = this.parseExprList(
                                  f.parenR,
                                  this.options.ecmaVersion >= 8,
                                  !1
                              ))
                            : (e.arguments = sr),
                        this.finishNode(e, 'NewExpression')
                    );
                }),
                (re.parseTemplateElement = function (e) {
                    var t = e.isTagged,
                        n = this.startNode();
                    return (
                        this.type === f.invalidTemplate
                            ? (t ||
                                  this.raiseRecoverable(
                                      this.start,
                                      'Bad escape sequence in untagged template literal'
                                  ),
                              (n.value = { raw: this.value, cooked: null }))
                            : (n.value = {
                                  raw: this.input
                                      .slice(this.start, this.end)
                                      .replace(
                                          /\r\n?/g,
                                          `
`
                                      ),
                                  cooked: this.value,
                              }),
                        this.next(),
                        (n.tail = this.type === f.backQuote),
                        this.finishNode(n, 'TemplateElement')
                    );
                }),
                (re.parseTemplate = function (e) {
                    e === void 0 && (e = {});
                    var t = e.isTagged;
                    t === void 0 && (t = !1);
                    var n = this.startNode();
                    this.next(), (n.expressions = []);
                    var r = this.parseTemplateElement({ isTagged: t });
                    for (n.quasis = [r]; !r.tail; )
                        this.type === f.eof &&
                            this.raise(
                                this.pos,
                                'Unterminated template literal'
                            ),
                            this.expect(f.dollarBraceL),
                            n.expressions.push(this.parseExpression()),
                            this.expect(f.braceR),
                            n.quasis.push(
                                (r = this.parseTemplateElement({ isTagged: t }))
                            );
                    return this.next(), this.finishNode(n, 'TemplateLiteral');
                }),
                (re.isAsyncProp = function (e) {
                    return (
                        !e.computed &&
                        e.key.type === 'Identifier' &&
                        e.key.name === 'async' &&
                        (this.type === f.name ||
                            this.type === f.num ||
                            this.type === f.string ||
                            this.type === f.bracketL ||
                            this.type.keyword ||
                            (this.options.ecmaVersion >= 9 &&
                                this.type === f.star)) &&
                        !Te.test(this.input.slice(this.lastTokEnd, this.start))
                    );
                }),
                (re.parseObj = function (e, t) {
                    var n = this.startNode(),
                        r = !0,
                        i = {};
                    for (
                        n.properties = [], this.next();
                        !this.eat(f.braceR);

                    ) {
                        if (r) r = !1;
                        else if (
                            (this.expect(f.comma),
                            this.options.ecmaVersion >= 5 &&
                                this.afterTrailingComma(f.braceR))
                        )
                            break;
                        var o = this.parseProperty(e, t);
                        e || this.checkPropClash(o, i, t), n.properties.push(o);
                    }
                    return this.finishNode(
                        n,
                        e ? 'ObjectPattern' : 'ObjectExpression'
                    );
                }),
                (re.parseProperty = function (e, t) {
                    var n = this.startNode(),
                        r,
                        i,
                        o,
                        s;
                    if (this.options.ecmaVersion >= 9 && this.eat(f.ellipsis))
                        return e
                            ? ((n.argument = this.parseIdent(!1)),
                              this.type === f.comma &&
                                  this.raise(
                                      this.start,
                                      'Comma is not permitted after the rest element'
                                  ),
                              this.finishNode(n, 'RestElement'))
                            : (this.type === f.parenL &&
                                  t &&
                                  (t.parenthesizedAssign < 0 &&
                                      (t.parenthesizedAssign = this.start),
                                  t.parenthesizedBind < 0 &&
                                      (t.parenthesizedBind = this.start)),
                              (n.argument = this.parseMaybeAssign(!1, t)),
                              this.type === f.comma &&
                                  t &&
                                  t.trailingComma < 0 &&
                                  (t.trailingComma = this.start),
                              this.finishNode(n, 'SpreadElement'));
                    this.options.ecmaVersion >= 6 &&
                        ((n.method = !1),
                        (n.shorthand = !1),
                        (e || t) && ((o = this.start), (s = this.startLoc)),
                        e || (r = this.eat(f.star)));
                    var l = this.containsEsc;
                    return (
                        this.parsePropertyName(n),
                        !e &&
                        !l &&
                        this.options.ecmaVersion >= 8 &&
                        !r &&
                        this.isAsyncProp(n)
                            ? ((i = !0),
                              (r =
                                  this.options.ecmaVersion >= 9 &&
                                  this.eat(f.star)),
                              this.parsePropertyName(n, t))
                            : (i = !1),
                        this.parsePropertyValue(n, e, r, i, o, s, t, l),
                        this.finishNode(n, 'Property')
                    );
                }),
                (re.parsePropertyValue = function (e, t, n, r, i, o, s, l) {
                    if (
                        ((n || r) && this.type === f.colon && this.unexpected(),
                        this.eat(f.colon))
                    )
                        (e.value = t
                            ? this.parseMaybeDefault(this.start, this.startLoc)
                            : this.parseMaybeAssign(!1, s)),
                            (e.kind = 'init');
                    else if (
                        this.options.ecmaVersion >= 6 &&
                        this.type === f.parenL
                    )
                        t && this.unexpected(),
                            (e.kind = 'init'),
                            (e.method = !0),
                            (e.value = this.parseMethod(n, r));
                    else if (
                        !t &&
                        !l &&
                        this.options.ecmaVersion >= 5 &&
                        !e.computed &&
                        e.key.type === 'Identifier' &&
                        (e.key.name === 'get' || e.key.name === 'set') &&
                        this.type !== f.comma &&
                        this.type !== f.braceR &&
                        this.type !== f.eq
                    ) {
                        (n || r) && this.unexpected(),
                            (e.kind = e.key.name),
                            this.parsePropertyName(e),
                            (e.value = this.parseMethod(!1));
                        var p = e.kind === 'get' ? 0 : 1;
                        if (e.value.params.length !== p) {
                            var d = e.value.start;
                            e.kind === 'get'
                                ? this.raiseRecoverable(
                                      d,
                                      'getter should have no params'
                                  )
                                : this.raiseRecoverable(
                                      d,
                                      'setter should have exactly one param'
                                  );
                        } else
                            e.kind === 'set' &&
                                e.value.params[0].type === 'RestElement' &&
                                this.raiseRecoverable(
                                    e.value.params[0].start,
                                    'Setter cannot use rest params'
                                );
                    } else
                        this.options.ecmaVersion >= 6 &&
                        !e.computed &&
                        e.key.type === 'Identifier'
                            ? ((n || r) && this.unexpected(),
                              this.checkUnreserved(e.key),
                              e.key.name === 'await' &&
                                  !this.awaitIdentPos &&
                                  (this.awaitIdentPos = i),
                              (e.kind = 'init'),
                              t
                                  ? (e.value = this.parseMaybeDefault(
                                        i,
                                        o,
                                        e.key
                                    ))
                                  : this.type === f.eq && s
                                    ? (s.shorthandAssign < 0 &&
                                          (s.shorthandAssign = this.start),
                                      (e.value = this.parseMaybeDefault(
                                          i,
                                          o,
                                          e.key
                                      )))
                                    : (e.value = e.key),
                              (e.shorthand = !0))
                            : this.unexpected();
                }),
                (re.parsePropertyName = function (e) {
                    if (this.options.ecmaVersion >= 6) {
                        if (this.eat(f.bracketL))
                            return (
                                (e.computed = !0),
                                (e.key = this.parseMaybeAssign()),
                                this.expect(f.bracketR),
                                e.key
                            );
                        e.computed = !1;
                    }
                    return (e.key =
                        this.type === f.num || this.type === f.string
                            ? this.parseExprAtom()
                            : this.parseIdent(
                                  this.options.allowReserved !== 'never'
                              ));
                }),
                (re.initFunction = function (e) {
                    (e.id = null),
                        this.options.ecmaVersion >= 6 &&
                            (e.generator = e.expression = !1),
                        this.options.ecmaVersion >= 8 && (e.async = !1);
                }),
                (re.parseMethod = function (e, t, n) {
                    var r = this.startNode(),
                        i = this.yieldPos,
                        o = this.awaitPos,
                        s = this.awaitIdentPos;
                    return (
                        this.initFunction(r),
                        this.options.ecmaVersion >= 6 && (r.generator = e),
                        this.options.ecmaVersion >= 8 && (r.async = !!t),
                        (this.yieldPos = 0),
                        (this.awaitPos = 0),
                        (this.awaitIdentPos = 0),
                        this.enterScope(Yt(t, r.generator) | en | (n ? tn : 0)),
                        this.expect(f.parenL),
                        (r.params = this.parseBindingList(
                            f.parenR,
                            !1,
                            this.options.ecmaVersion >= 8
                        )),
                        this.checkYieldAwaitInDefaultParams(),
                        this.parseFunctionBody(r, !1, !0),
                        (this.yieldPos = i),
                        (this.awaitPos = o),
                        (this.awaitIdentPos = s),
                        this.finishNode(r, 'FunctionExpression')
                    );
                }),
                (re.parseArrowExpression = function (e, t, n) {
                    var r = this.yieldPos,
                        i = this.awaitPos,
                        o = this.awaitIdentPos;
                    return (
                        this.enterScope(Yt(n, !1) | Kt),
                        this.initFunction(e),
                        this.options.ecmaVersion >= 8 && (e.async = !!n),
                        (this.yieldPos = 0),
                        (this.awaitPos = 0),
                        (this.awaitIdentPos = 0),
                        (e.params = this.toAssignableList(t, !0)),
                        this.parseFunctionBody(e, !0, !1),
                        (this.yieldPos = r),
                        (this.awaitPos = i),
                        (this.awaitIdentPos = o),
                        this.finishNode(e, 'ArrowFunctionExpression')
                    );
                }),
                (re.parseFunctionBody = function (e, t, n) {
                    var r = t && this.type !== f.braceL,
                        i = this.strict,
                        o = !1;
                    if (r)
                        (e.body = this.parseMaybeAssign()),
                            (e.expression = !0),
                            this.checkParams(e, !1);
                    else {
                        var s =
                            this.options.ecmaVersion >= 7 &&
                            !this.isSimpleParamList(e.params);
                        (!i || s) &&
                            ((o = this.strictDirective(this.end)),
                            o &&
                                s &&
                                this.raiseRecoverable(
                                    e.start,
                                    "Illegal 'use strict' directive in function with non-simple parameter list"
                                ));
                        var l = this.labels;
                        (this.labels = []),
                            o && (this.strict = !0),
                            this.checkParams(
                                e,
                                !i &&
                                    !o &&
                                    !t &&
                                    !n &&
                                    this.isSimpleParamList(e.params)
                            ),
                            this.strict && e.id && this.checkLVal(e.id, sn),
                            (e.body = this.parseBlock(!1, void 0, o && !i)),
                            (e.expression = !1),
                            this.adaptDirectivePrologue(e.body.body),
                            (this.labels = l);
                    }
                    this.exitScope();
                }),
                (re.isSimpleParamList = function (e) {
                    for (var t = 0, n = e; t < n.length; t += 1) {
                        var r = n[t];
                        if (r.type !== 'Identifier') return !1;
                    }
                    return !0;
                }),
                (re.checkParams = function (e, t) {
                    for (
                        var n = {}, r = 0, i = e.params;
                        r < i.length;
                        r += 1
                    ) {
                        var o = i[r];
                        this.checkLVal(o, jt, t ? null : n);
                    }
                }),
                (re.parseExprList = function (e, t, n, r) {
                    for (var i = [], o = !0; !this.eat(e); ) {
                        if (o) o = !1;
                        else if (
                            (this.expect(f.comma),
                            t && this.afterTrailingComma(e))
                        )
                            break;
                        var s = void 0;
                        n && this.type === f.comma
                            ? (s = null)
                            : this.type === f.ellipsis
                              ? ((s = this.parseSpread(r)),
                                r &&
                                    this.type === f.comma &&
                                    r.trailingComma < 0 &&
                                    (r.trailingComma = this.start))
                              : (s = this.parseMaybeAssign(!1, r)),
                            i.push(s);
                    }
                    return i;
                }),
                (re.checkUnreserved = function (e) {
                    var t = e.start,
                        n = e.end,
                        r = e.name;
                    if (
                        (this.inGenerator &&
                            r === 'yield' &&
                            this.raiseRecoverable(
                                t,
                                "Cannot use 'yield' as identifier inside a generator"
                            ),
                        this.inAsync &&
                            r === 'await' &&
                            this.raiseRecoverable(
                                t,
                                "Cannot use 'await' as identifier inside an async function"
                            ),
                        this.keywords.test(r) &&
                            this.raise(t, "Unexpected keyword '" + r + "'"),
                        !(
                            this.options.ecmaVersion < 6 &&
                            this.input.slice(t, n).indexOf('\\') !== -1
                        ))
                    ) {
                        var i = this.strict
                            ? this.reservedWordsStrict
                            : this.reservedWords;
                        i.test(r) &&
                            (!this.inAsync &&
                                r === 'await' &&
                                this.raiseRecoverable(
                                    t,
                                    "Cannot use keyword 'await' outside an async function"
                                ),
                            this.raiseRecoverable(
                                t,
                                "The keyword '" + r + "' is reserved"
                            ));
                    }
                }),
                (re.parseIdent = function (e, t) {
                    var n = this.startNode();
                    return (
                        this.type === f.name
                            ? (n.name = this.value)
                            : this.type.keyword
                              ? ((n.name = this.type.keyword),
                                (n.name === 'class' || n.name === 'function') &&
                                    (this.lastTokEnd !==
                                        this.lastTokStart + 1 ||
                                        this.input.charCodeAt(
                                            this.lastTokStart
                                        ) !== 46) &&
                                    this.context.pop())
                              : this.unexpected(),
                        this.next(!!e),
                        this.finishNode(n, 'Identifier'),
                        e ||
                            (this.checkUnreserved(n),
                            n.name === 'await' &&
                                !this.awaitIdentPos &&
                                (this.awaitIdentPos = n.start)),
                        n
                    );
                }),
                (re.parseYield = function (e) {
                    this.yieldPos || (this.yieldPos = this.start);
                    var t = this.startNode();
                    return (
                        this.next(),
                        this.type === f.semi ||
                        this.canInsertSemicolon() ||
                        (this.type !== f.star && !this.type.startsExpr)
                            ? ((t.delegate = !1), (t.argument = null))
                            : ((t.delegate = this.eat(f.star)),
                              (t.argument = this.parseMaybeAssign(e))),
                        this.finishNode(t, 'YieldExpression')
                    );
                }),
                (re.parseAwait = function () {
                    this.awaitPos || (this.awaitPos = this.start);
                    var e = this.startNode();
                    return (
                        this.next(),
                        (e.argument = this.parseMaybeUnary(null, !1)),
                        this.finishNode(e, 'AwaitExpression')
                    );
                }),
                (mt = me.prototype),
                (mt.raise = function (e, t) {
                    var n = mn(this.input, e);
                    t += ' (' + n.line + ':' + n.column + ')';
                    var r = new SyntaxError(t);
                    throw (
                        ((r.pos = e), (r.loc = n), (r.raisedAt = this.pos), r)
                    );
                }),
                (mt.raiseRecoverable = mt.raise),
                (mt.curPosition = function () {
                    if (this.options.locations)
                        return new Ke(this.curLine, this.pos - this.lineStart);
                }),
                (ze = me.prototype),
                (ar = function (e) {
                    (this.flags = e),
                        (this.var = []),
                        (this.lexical = []),
                        (this.functions = []);
                }),
                (ze.enterScope = function (e) {
                    this.scopeStack.push(new ar(e));
                }),
                (ze.exitScope = function () {
                    this.scopeStack.pop();
                }),
                (ze.treatFunctionsAsVarInScope = function (e) {
                    return e.flags & lt || (!this.inModule && e.flags & st);
                }),
                (ze.declareName = function (e, t, n) {
                    var r = !1;
                    if (t === Me) {
                        var i = this.currentScope();
                        (r =
                            i.lexical.indexOf(e) > -1 ||
                            i.functions.indexOf(e) > -1 ||
                            i.var.indexOf(e) > -1),
                            i.lexical.push(e),
                            this.inModule &&
                                i.flags & st &&
                                delete this.undefinedExports[e];
                    } else if (t === un) {
                        var o = this.currentScope();
                        o.lexical.push(e);
                    } else if (t === rn) {
                        var s = this.currentScope();
                        this.treatFunctionsAsVar
                            ? (r = s.lexical.indexOf(e) > -1)
                            : (r =
                                  s.lexical.indexOf(e) > -1 ||
                                  s.var.indexOf(e) > -1),
                            s.functions.push(e);
                    } else
                        for (var l = this.scopeStack.length - 1; l >= 0; --l) {
                            var p = this.scopeStack[l];
                            if (
                                (p.lexical.indexOf(e) > -1 &&
                                    !(p.flags & Zt && p.lexical[0] === e)) ||
                                (!this.treatFunctionsAsVarInScope(p) &&
                                    p.functions.indexOf(e) > -1)
                            ) {
                                r = !0;
                                break;
                            }
                            if (
                                (p.var.push(e),
                                this.inModule &&
                                    p.flags & st &&
                                    delete this.undefinedExports[e],
                                p.flags & Nt)
                            )
                                break;
                        }
                    r &&
                        this.raiseRecoverable(
                            n,
                            "Identifier '" + e + "' has already been declared"
                        );
                }),
                (ze.checkLocalExport = function (e) {
                    this.scopeStack[0].lexical.indexOf(e.name) === -1 &&
                        this.scopeStack[0].var.indexOf(e.name) === -1 &&
                        (this.undefinedExports[e.name] = e);
                }),
                (ze.currentScope = function () {
                    return this.scopeStack[this.scopeStack.length - 1];
                }),
                (ze.currentVarScope = function () {
                    for (var e = this.scopeStack.length - 1; ; e--) {
                        var t = this.scopeStack[e];
                        if (t.flags & Nt) return t;
                    }
                }),
                (ze.currentThisScope = function () {
                    for (var e = this.scopeStack.length - 1; ; e--) {
                        var t = this.scopeStack[e];
                        if (t.flags & Nt && !(t.flags & Kt)) return t;
                    }
                }),
                (gt = function (e, t, n) {
                    (this.type = ''),
                        (this.start = t),
                        (this.end = 0),
                        e.options.locations && (this.loc = new ct(e, n)),
                        e.options.directSourceFile &&
                            (this.sourceFile = e.options.directSourceFile),
                        e.options.ranges && (this.range = [t, 0]);
                }),
                (Ct = me.prototype),
                (Ct.startNode = function () {
                    return new gt(this, this.start, this.startLoc);
                }),
                (Ct.startNodeAt = function (e, t) {
                    return new gt(this, e, t);
                }),
                (Ct.finishNode = function (e, t) {
                    return Jn.call(
                        this,
                        e,
                        t,
                        this.lastTokEnd,
                        this.lastTokEndLoc
                    );
                }),
                (Ct.finishNodeAt = function (e, t, n, r) {
                    return Jn.call(this, e, t, n, r);
                }),
                (Oe = function (e, t, n, r, i) {
                    (this.token = e),
                        (this.isExpr = !!t),
                        (this.preserveSpace = !!n),
                        (this.override = r),
                        (this.generator = !!i);
                }),
                (Ce = {
                    b_stat: new Oe('{', !1),
                    b_expr: new Oe('{', !0),
                    b_tmpl: new Oe('${', !1),
                    p_stat: new Oe('(', !1),
                    p_expr: new Oe('(', !0),
                    q_tmpl: new Oe('`', !0, !0, function (e) {
                        return e.tryReadTemplateToken();
                    }),
                    f_stat: new Oe('function', !1),
                    f_expr: new Oe('function', !0),
                    f_expr_gen: new Oe('function', !0, !1, null, !0),
                    f_gen: new Oe('function', !1, !1, null, !0),
                }),
                (Et = me.prototype),
                (Et.initialContext = function () {
                    return [Ce.b_stat];
                }),
                (Et.braceIsBlock = function (e) {
                    var t = this.curContext();
                    return t === Ce.f_expr || t === Ce.f_stat
                        ? !0
                        : e === f.colon && (t === Ce.b_stat || t === Ce.b_expr)
                          ? !t.isExpr
                          : e === f._return ||
                              (e === f.name && this.exprAllowed)
                            ? Te.test(
                                  this.input.slice(this.lastTokEnd, this.start)
                              )
                            : e === f._else ||
                                e === f.semi ||
                                e === f.eof ||
                                e === f.parenR ||
                                e === f.arrow
                              ? !0
                              : e === f.braceL
                                ? t === Ce.b_stat
                                : e === f._var || e === f._const || e === f.name
                                  ? !1
                                  : !this.exprAllowed;
                }),
                (Et.inGeneratorContext = function () {
                    for (var e = this.context.length - 1; e >= 1; e--) {
                        var t = this.context[e];
                        if (t.token === 'function') return t.generator;
                    }
                    return !1;
                }),
                (Et.updateContext = function (e) {
                    var t,
                        n = this.type;
                    n.keyword && e === f.dot
                        ? (this.exprAllowed = !1)
                        : (t = n.updateContext)
                          ? t.call(this, e)
                          : (this.exprAllowed = n.beforeExpr);
                }),
                (f.parenR.updateContext = f.braceR.updateContext =
                    function () {
                        if (this.context.length === 1) {
                            this.exprAllowed = !0;
                            return;
                        }
                        var e = this.context.pop();
                        e === Ce.b_stat &&
                            this.curContext().token === 'function' &&
                            (e = this.context.pop()),
                            (this.exprAllowed = !e.isExpr);
                    }),
                (f.braceL.updateContext = function (e) {
                    this.context.push(
                        this.braceIsBlock(e) ? Ce.b_stat : Ce.b_expr
                    ),
                        (this.exprAllowed = !0);
                }),
                (f.dollarBraceL.updateContext = function () {
                    this.context.push(Ce.b_tmpl), (this.exprAllowed = !0);
                }),
                (f.parenL.updateContext = function (e) {
                    var t =
                        e === f._if ||
                        e === f._for ||
                        e === f._with ||
                        e === f._while;
                    this.context.push(t ? Ce.p_stat : Ce.p_expr),
                        (this.exprAllowed = !0);
                }),
                (f.incDec.updateContext = function () {}),
                (f._function.updateContext = f._class.updateContext =
                    function (e) {
                        e.beforeExpr &&
                        e !== f.semi &&
                        e !== f._else &&
                        !(
                            e === f._return &&
                            Te.test(
                                this.input.slice(this.lastTokEnd, this.start)
                            )
                        ) &&
                        !(
                            (e === f.colon || e === f.braceL) &&
                            this.curContext() === Ce.b_stat
                        )
                            ? this.context.push(Ce.f_expr)
                            : this.context.push(Ce.f_stat),
                            (this.exprAllowed = !1);
                    }),
                (f.backQuote.updateContext = function () {
                    this.curContext() === Ce.q_tmpl
                        ? this.context.pop()
                        : this.context.push(Ce.q_tmpl),
                        (this.exprAllowed = !1);
                }),
                (f.star.updateContext = function (e) {
                    if (e === f._function) {
                        var t = this.context.length - 1;
                        this.context[t] === Ce.f_expr
                            ? (this.context[t] = Ce.f_expr_gen)
                            : (this.context[t] = Ce.f_gen);
                    }
                    this.exprAllowed = !0;
                }),
                (f.name.updateContext = function (e) {
                    var t = !1;
                    this.options.ecmaVersion >= 6 &&
                        e !== f.dot &&
                        ((this.value === 'of' && !this.exprAllowed) ||
                            (this.value === 'yield' &&
                                this.inGeneratorContext())) &&
                        (t = !0),
                        (this.exprAllowed = t);
                }),
                (on =
                    'ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS'),
                (ln = on + ' Extended_Pictographic'),
                (or = ln),
                (jr = { 9: on, 10: ln, 11: or }),
                (Fn =
                    'Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu'),
                (cn =
                    'Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb'),
                (hn =
                    cn +
                    ' Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd'),
                (lr =
                    hn +
                    ' Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho'),
                (Mr = { 9: cn, 10: hn, 11: lr }),
                (yn = {}),
                Jt(9),
                Jt(10),
                Jt(11),
                ($ = me.prototype),
                (qe = function (e) {
                    (this.parser = e),
                        (this.validFlags =
                            'gim' +
                            (e.options.ecmaVersion >= 6 ? 'uy' : '') +
                            (e.options.ecmaVersion >= 9 ? 's' : '')),
                        (this.unicodeProperties =
                            yn[
                                e.options.ecmaVersion >= 11
                                    ? 11
                                    : e.options.ecmaVersion
                            ]),
                        (this.source = ''),
                        (this.flags = ''),
                        (this.start = 0),
                        (this.switchU = !1),
                        (this.switchN = !1),
                        (this.pos = 0),
                        (this.lastIntValue = 0),
                        (this.lastStringValue = ''),
                        (this.lastAssertionIsQuantifiable = !1),
                        (this.numCapturingParens = 0),
                        (this.maxBackReference = 0),
                        (this.groupNames = []),
                        (this.backReferenceNames = []);
                }),
                (qe.prototype.reset = function (e, t, n) {
                    var r = n.indexOf('u') !== -1;
                    (this.start = e | 0),
                        (this.source = t + ''),
                        (this.flags = n),
                        (this.switchU =
                            r && this.parser.options.ecmaVersion >= 6),
                        (this.switchN =
                            r && this.parser.options.ecmaVersion >= 9);
                }),
                (qe.prototype.raise = function (e) {
                    this.parser.raiseRecoverable(
                        this.start,
                        'Invalid regular expression: /' +
                            this.source +
                            '/: ' +
                            e
                    );
                }),
                (qe.prototype.at = function (e, t) {
                    t === void 0 && (t = !1);
                    var n = this.source,
                        r = n.length;
                    if (e >= r) return -1;
                    var i = n.charCodeAt(e);
                    if (
                        !(t || this.switchU) ||
                        i <= 55295 ||
                        i >= 57344 ||
                        e + 1 >= r
                    )
                        return i;
                    var o = n.charCodeAt(e + 1);
                    return o >= 56320 && o <= 57343
                        ? (i << 10) + o - 56613888
                        : i;
                }),
                (qe.prototype.nextIndex = function (e, t) {
                    t === void 0 && (t = !1);
                    var n = this.source,
                        r = n.length;
                    if (e >= r) return r;
                    var i = n.charCodeAt(e),
                        o;
                    return !(t || this.switchU) ||
                        i <= 55295 ||
                        i >= 57344 ||
                        e + 1 >= r ||
                        (o = n.charCodeAt(e + 1)) < 56320 ||
                        o > 57343
                        ? e + 1
                        : e + 2;
                }),
                (qe.prototype.current = function (e) {
                    return e === void 0 && (e = !1), this.at(this.pos, e);
                }),
                (qe.prototype.lookahead = function (e) {
                    return (
                        e === void 0 && (e = !1),
                        this.at(this.nextIndex(this.pos, e), e)
                    );
                }),
                (qe.prototype.advance = function (e) {
                    e === void 0 && (e = !1),
                        (this.pos = this.nextIndex(this.pos, e));
                }),
                (qe.prototype.eat = function (e, t) {
                    return (
                        t === void 0 && (t = !1),
                        this.current(t) === e ? (this.advance(t), !0) : !1
                    );
                }),
                ($.validateRegExpFlags = function (e) {
                    for (
                        var t = e.validFlags, n = e.flags, r = 0;
                        r < n.length;
                        r++
                    ) {
                        var i = n.charAt(r);
                        t.indexOf(i) === -1 &&
                            this.raise(
                                e.start,
                                'Invalid regular expression flag'
                            ),
                            n.indexOf(i, r + 1) > -1 &&
                                this.raise(
                                    e.start,
                                    'Duplicate regular expression flag'
                                );
                    }
                }),
                ($.validateRegExpPattern = function (e) {
                    this.regexp_pattern(e),
                        !e.switchN &&
                            this.options.ecmaVersion >= 9 &&
                            e.groupNames.length > 0 &&
                            ((e.switchN = !0), this.regexp_pattern(e));
                }),
                ($.regexp_pattern = function (e) {
                    (e.pos = 0),
                        (e.lastIntValue = 0),
                        (e.lastStringValue = ''),
                        (e.lastAssertionIsQuantifiable = !1),
                        (e.numCapturingParens = 0),
                        (e.maxBackReference = 0),
                        (e.groupNames.length = 0),
                        (e.backReferenceNames.length = 0),
                        this.regexp_disjunction(e),
                        e.pos !== e.source.length &&
                            (e.eat(41) && e.raise("Unmatched ')'"),
                            (e.eat(93) || e.eat(125)) &&
                                e.raise('Lone quantifier brackets')),
                        e.maxBackReference > e.numCapturingParens &&
                            e.raise('Invalid escape');
                    for (
                        var t = 0, n = e.backReferenceNames;
                        t < n.length;
                        t += 1
                    ) {
                        var r = n[t];
                        e.groupNames.indexOf(r) === -1 &&
                            e.raise('Invalid named capture referenced');
                    }
                }),
                ($.regexp_disjunction = function (e) {
                    for (this.regexp_alternative(e); e.eat(124); )
                        this.regexp_alternative(e);
                    this.regexp_eatQuantifier(e, !0) &&
                        e.raise('Nothing to repeat'),
                        e.eat(123) && e.raise('Lone quantifier brackets');
                }),
                ($.regexp_alternative = function (e) {
                    for (; e.pos < e.source.length && this.regexp_eatTerm(e); );
                }),
                ($.regexp_eatTerm = function (e) {
                    return this.regexp_eatAssertion(e)
                        ? (e.lastAssertionIsQuantifiable &&
                              this.regexp_eatQuantifier(e) &&
                              e.switchU &&
                              e.raise('Invalid quantifier'),
                          !0)
                        : (
                                e.switchU
                                    ? this.regexp_eatAtom(e)
                                    : this.regexp_eatExtendedAtom(e)
                            )
                          ? (this.regexp_eatQuantifier(e), !0)
                          : !1;
                }),
                ($.regexp_eatAssertion = function (e) {
                    var t = e.pos;
                    if (
                        ((e.lastAssertionIsQuantifiable = !1),
                        e.eat(94) || e.eat(36))
                    )
                        return !0;
                    if (e.eat(92)) {
                        if (e.eat(66) || e.eat(98)) return !0;
                        e.pos = t;
                    }
                    if (e.eat(40) && e.eat(63)) {
                        var n = !1;
                        if (
                            (this.options.ecmaVersion >= 9 && (n = e.eat(60)),
                            e.eat(61) || e.eat(33))
                        )
                            return (
                                this.regexp_disjunction(e),
                                e.eat(41) || e.raise('Unterminated group'),
                                (e.lastAssertionIsQuantifiable = !n),
                                !0
                            );
                    }
                    return (e.pos = t), !1;
                }),
                ($.regexp_eatQuantifier = function (e, t) {
                    return (
                        t === void 0 && (t = !1),
                        this.regexp_eatQuantifierPrefix(e, t)
                            ? (e.eat(63), !0)
                            : !1
                    );
                }),
                ($.regexp_eatQuantifierPrefix = function (e, t) {
                    return (
                        e.eat(42) ||
                        e.eat(43) ||
                        e.eat(63) ||
                        this.regexp_eatBracedQuantifier(e, t)
                    );
                }),
                ($.regexp_eatBracedQuantifier = function (e, t) {
                    var n = e.pos;
                    if (e.eat(123)) {
                        var r = 0,
                            i = -1;
                        if (
                            this.regexp_eatDecimalDigits(e) &&
                            ((r = e.lastIntValue),
                            e.eat(44) &&
                                this.regexp_eatDecimalDigits(e) &&
                                (i = e.lastIntValue),
                            e.eat(125))
                        )
                            return (
                                i !== -1 &&
                                    i < r &&
                                    !t &&
                                    e.raise(
                                        'numbers out of order in {} quantifier'
                                    ),
                                !0
                            );
                        e.switchU && !t && e.raise('Incomplete quantifier'),
                            (e.pos = n);
                    }
                    return !1;
                }),
                ($.regexp_eatAtom = function (e) {
                    return (
                        this.regexp_eatPatternCharacters(e) ||
                        e.eat(46) ||
                        this.regexp_eatReverseSolidusAtomEscape(e) ||
                        this.regexp_eatCharacterClass(e) ||
                        this.regexp_eatUncapturingGroup(e) ||
                        this.regexp_eatCapturingGroup(e)
                    );
                }),
                ($.regexp_eatReverseSolidusAtomEscape = function (e) {
                    var t = e.pos;
                    if (e.eat(92)) {
                        if (this.regexp_eatAtomEscape(e)) return !0;
                        e.pos = t;
                    }
                    return !1;
                }),
                ($.regexp_eatUncapturingGroup = function (e) {
                    var t = e.pos;
                    if (e.eat(40)) {
                        if (e.eat(63) && e.eat(58)) {
                            if ((this.regexp_disjunction(e), e.eat(41)))
                                return !0;
                            e.raise('Unterminated group');
                        }
                        e.pos = t;
                    }
                    return !1;
                }),
                ($.regexp_eatCapturingGroup = function (e) {
                    if (e.eat(40)) {
                        if (
                            (this.options.ecmaVersion >= 9
                                ? this.regexp_groupSpecifier(e)
                                : e.current() === 63 &&
                                  e.raise('Invalid group'),
                            this.regexp_disjunction(e),
                            e.eat(41))
                        )
                            return (e.numCapturingParens += 1), !0;
                        e.raise('Unterminated group');
                    }
                    return !1;
                }),
                ($.regexp_eatExtendedAtom = function (e) {
                    return (
                        e.eat(46) ||
                        this.regexp_eatReverseSolidusAtomEscape(e) ||
                        this.regexp_eatCharacterClass(e) ||
                        this.regexp_eatUncapturingGroup(e) ||
                        this.regexp_eatCapturingGroup(e) ||
                        this.regexp_eatInvalidBracedQuantifier(e) ||
                        this.regexp_eatExtendedPatternCharacter(e)
                    );
                }),
                ($.regexp_eatInvalidBracedQuantifier = function (e) {
                    return (
                        this.regexp_eatBracedQuantifier(e, !0) &&
                            e.raise('Nothing to repeat'),
                        !1
                    );
                }),
                ($.regexp_eatSyntaxCharacter = function (e) {
                    var t = e.current();
                    return Xn(t) ? ((e.lastIntValue = t), e.advance(), !0) : !1;
                }),
                ($.regexp_eatPatternCharacters = function (e) {
                    for (
                        var t = e.pos, n = 0;
                        (n = e.current()) !== -1 && !Xn(n);

                    )
                        e.advance();
                    return e.pos !== t;
                }),
                ($.regexp_eatExtendedPatternCharacter = function (e) {
                    var t = e.current();
                    return t !== -1 &&
                        t !== 36 &&
                        !(t >= 40 && t <= 43) &&
                        t !== 46 &&
                        t !== 63 &&
                        t !== 91 &&
                        t !== 94 &&
                        t !== 124
                        ? (e.advance(), !0)
                        : !1;
                }),
                ($.regexp_groupSpecifier = function (e) {
                    if (e.eat(63)) {
                        if (this.regexp_eatGroupName(e)) {
                            e.groupNames.indexOf(e.lastStringValue) !== -1 &&
                                e.raise('Duplicate capture group name'),
                                e.groupNames.push(e.lastStringValue);
                            return;
                        }
                        e.raise('Invalid group');
                    }
                }),
                ($.regexp_eatGroupName = function (e) {
                    if (((e.lastStringValue = ''), e.eat(60))) {
                        if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62))
                            return !0;
                        e.raise('Invalid capture group name');
                    }
                    return !1;
                }),
                ($.regexp_eatRegExpIdentifierName = function (e) {
                    if (
                        ((e.lastStringValue = ''),
                        this.regexp_eatRegExpIdentifierStart(e))
                    ) {
                        for (
                            e.lastStringValue += It(e.lastIntValue);
                            this.regexp_eatRegExpIdentifierPart(e);

                        )
                            e.lastStringValue += It(e.lastIntValue);
                        return !0;
                    }
                    return !1;
                }),
                ($.regexp_eatRegExpIdentifierStart = function (e) {
                    var t = e.pos,
                        n = this.options.ecmaVersion >= 11,
                        r = e.current(n);
                    return (
                        e.advance(n),
                        r === 92 &&
                            this.regexp_eatRegExpUnicodeEscapeSequence(e, n) &&
                            (r = e.lastIntValue),
                        Qu(r) ? ((e.lastIntValue = r), !0) : ((e.pos = t), !1)
                    );
                }),
                ($.regexp_eatRegExpIdentifierPart = function (e) {
                    var t = e.pos,
                        n = this.options.ecmaVersion >= 11,
                        r = e.current(n);
                    return (
                        e.advance(n),
                        r === 92 &&
                            this.regexp_eatRegExpUnicodeEscapeSequence(e, n) &&
                            (r = e.lastIntValue),
                        Ku(r) ? ((e.lastIntValue = r), !0) : ((e.pos = t), !1)
                    );
                }),
                ($.regexp_eatAtomEscape = function (e) {
                    return this.regexp_eatBackReference(e) ||
                        this.regexp_eatCharacterClassEscape(e) ||
                        this.regexp_eatCharacterEscape(e) ||
                        (e.switchN && this.regexp_eatKGroupName(e))
                        ? !0
                        : (e.switchU &&
                              (e.current() === 99 &&
                                  e.raise('Invalid unicode escape'),
                              e.raise('Invalid escape')),
                          !1);
                }),
                ($.regexp_eatBackReference = function (e) {
                    var t = e.pos;
                    if (this.regexp_eatDecimalEscape(e)) {
                        var n = e.lastIntValue;
                        if (e.switchU)
                            return (
                                n > e.maxBackReference &&
                                    (e.maxBackReference = n),
                                !0
                            );
                        if (n <= e.numCapturingParens) return !0;
                        e.pos = t;
                    }
                    return !1;
                }),
                ($.regexp_eatKGroupName = function (e) {
                    if (e.eat(107)) {
                        if (this.regexp_eatGroupName(e))
                            return (
                                e.backReferenceNames.push(e.lastStringValue), !0
                            );
                        e.raise('Invalid named reference');
                    }
                    return !1;
                }),
                ($.regexp_eatCharacterEscape = function (e) {
                    return (
                        this.regexp_eatControlEscape(e) ||
                        this.regexp_eatCControlLetter(e) ||
                        this.regexp_eatZero(e) ||
                        this.regexp_eatHexEscapeSequence(e) ||
                        this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) ||
                        (!e.switchU &&
                            this.regexp_eatLegacyOctalEscapeSequence(e)) ||
                        this.regexp_eatIdentityEscape(e)
                    );
                }),
                ($.regexp_eatCControlLetter = function (e) {
                    var t = e.pos;
                    if (e.eat(99)) {
                        if (this.regexp_eatControlLetter(e)) return !0;
                        e.pos = t;
                    }
                    return !1;
                }),
                ($.regexp_eatZero = function (e) {
                    return e.current() === 48 && !Ut(e.lookahead())
                        ? ((e.lastIntValue = 0), e.advance(), !0)
                        : !1;
                }),
                ($.regexp_eatControlEscape = function (e) {
                    var t = e.current();
                    return t === 116
                        ? ((e.lastIntValue = 9), e.advance(), !0)
                        : t === 110
                          ? ((e.lastIntValue = 10), e.advance(), !0)
                          : t === 118
                            ? ((e.lastIntValue = 11), e.advance(), !0)
                            : t === 102
                              ? ((e.lastIntValue = 12), e.advance(), !0)
                              : t === 114
                                ? ((e.lastIntValue = 13), e.advance(), !0)
                                : !1;
                }),
                ($.regexp_eatControlLetter = function (e) {
                    var t = e.current();
                    return Pr(t)
                        ? ((e.lastIntValue = t % 32), e.advance(), !0)
                        : !1;
                }),
                ($.regexp_eatRegExpUnicodeEscapeSequence = function (e, t) {
                    t === void 0 && (t = !1);
                    var n = e.pos,
                        r = t || e.switchU;
                    if (e.eat(117)) {
                        if (this.regexp_eatFixedHexDigits(e, 4)) {
                            var i = e.lastIntValue;
                            if (r && i >= 55296 && i <= 56319) {
                                var o = e.pos;
                                if (
                                    e.eat(92) &&
                                    e.eat(117) &&
                                    this.regexp_eatFixedHexDigits(e, 4)
                                ) {
                                    var s = e.lastIntValue;
                                    if (s >= 56320 && s <= 57343)
                                        return (
                                            (e.lastIntValue =
                                                (i - 55296) * 1024 +
                                                (s - 56320) +
                                                65536),
                                            !0
                                        );
                                }
                                (e.pos = o), (e.lastIntValue = i);
                            }
                            return !0;
                        }
                        if (
                            r &&
                            e.eat(123) &&
                            this.regexp_eatHexDigits(e) &&
                            e.eat(125) &&
                            Zu(e.lastIntValue)
                        )
                            return !0;
                        r && e.raise('Invalid unicode escape'), (e.pos = n);
                    }
                    return !1;
                }),
                ($.regexp_eatIdentityEscape = function (e) {
                    if (e.switchU)
                        return this.regexp_eatSyntaxCharacter(e)
                            ? !0
                            : e.eat(47)
                              ? ((e.lastIntValue = 47), !0)
                              : !1;
                    var t = e.current();
                    return t !== 99 && (!e.switchN || t !== 107)
                        ? ((e.lastIntValue = t), e.advance(), !0)
                        : !1;
                }),
                ($.regexp_eatDecimalEscape = function (e) {
                    e.lastIntValue = 0;
                    var t = e.current();
                    if (t >= 49 && t <= 57) {
                        do
                            (e.lastIntValue = 10 * e.lastIntValue + (t - 48)),
                                e.advance();
                        while ((t = e.current()) >= 48 && t <= 57);
                        return !0;
                    }
                    return !1;
                }),
                ($.regexp_eatCharacterClassEscape = function (e) {
                    var t = e.current();
                    if (ei(t)) return (e.lastIntValue = -1), e.advance(), !0;
                    if (
                        e.switchU &&
                        this.options.ecmaVersion >= 9 &&
                        (t === 80 || t === 112)
                    ) {
                        if (
                            ((e.lastIntValue = -1),
                            e.advance(),
                            e.eat(123) &&
                                this.regexp_eatUnicodePropertyValueExpression(
                                    e
                                ) &&
                                e.eat(125))
                        )
                            return !0;
                        e.raise('Invalid property name');
                    }
                    return !1;
                }),
                ($.regexp_eatUnicodePropertyValueExpression = function (e) {
                    var t = e.pos;
                    if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
                        var n = e.lastStringValue;
                        if (this.regexp_eatUnicodePropertyValue(e)) {
                            var r = e.lastStringValue;
                            return (
                                this.regexp_validateUnicodePropertyNameAndValue(
                                    e,
                                    n,
                                    r
                                ),
                                !0
                            );
                        }
                    }
                    if (
                        ((e.pos = t),
                        this.regexp_eatLoneUnicodePropertyNameOrValue(e))
                    ) {
                        var i = e.lastStringValue;
                        return (
                            this.regexp_validateUnicodePropertyNameOrValue(
                                e,
                                i
                            ),
                            !0
                        );
                    }
                    return !1;
                }),
                ($.regexp_validateUnicodePropertyNameAndValue = function (
                    e,
                    t,
                    n
                ) {
                    qt(e.unicodeProperties.nonBinary, t) ||
                        e.raise('Invalid property name'),
                        e.unicodeProperties.nonBinary[t].test(n) ||
                            e.raise('Invalid property value');
                }),
                ($.regexp_validateUnicodePropertyNameOrValue = function (e, t) {
                    e.unicodeProperties.binary.test(t) ||
                        e.raise('Invalid property name');
                }),
                ($.regexp_eatUnicodePropertyName = function (e) {
                    var t = 0;
                    for (e.lastStringValue = ''; Ir((t = e.current())); )
                        (e.lastStringValue += It(t)), e.advance();
                    return e.lastStringValue !== '';
                }),
                ($.regexp_eatUnicodePropertyValue = function (e) {
                    var t = 0;
                    for (e.lastStringValue = ''; ti((t = e.current())); )
                        (e.lastStringValue += It(t)), e.advance();
                    return e.lastStringValue !== '';
                }),
                ($.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
                    return this.regexp_eatUnicodePropertyValue(e);
                }),
                ($.regexp_eatCharacterClass = function (e) {
                    if (e.eat(91)) {
                        if ((e.eat(94), this.regexp_classRanges(e), e.eat(93)))
                            return !0;
                        e.raise('Unterminated character class');
                    }
                    return !1;
                }),
                ($.regexp_classRanges = function (e) {
                    for (; this.regexp_eatClassAtom(e); ) {
                        var t = e.lastIntValue;
                        if (e.eat(45) && this.regexp_eatClassAtom(e)) {
                            var n = e.lastIntValue;
                            e.switchU &&
                                (t === -1 || n === -1) &&
                                e.raise('Invalid character class'),
                                t !== -1 &&
                                    n !== -1 &&
                                    t > n &&
                                    e.raise(
                                        'Range out of order in character class'
                                    );
                        }
                    }
                }),
                ($.regexp_eatClassAtom = function (e) {
                    var t = e.pos;
                    if (e.eat(92)) {
                        if (this.regexp_eatClassEscape(e)) return !0;
                        if (e.switchU) {
                            var n = e.current();
                            (n === 99 || Kn(n)) &&
                                e.raise('Invalid class escape'),
                                e.raise('Invalid escape');
                        }
                        e.pos = t;
                    }
                    var r = e.current();
                    return r !== 93
                        ? ((e.lastIntValue = r), e.advance(), !0)
                        : !1;
                }),
                ($.regexp_eatClassEscape = function (e) {
                    var t = e.pos;
                    if (e.eat(98)) return (e.lastIntValue = 8), !0;
                    if (e.switchU && e.eat(45))
                        return (e.lastIntValue = 45), !0;
                    if (!e.switchU && e.eat(99)) {
                        if (this.regexp_eatClassControlLetter(e)) return !0;
                        e.pos = t;
                    }
                    return (
                        this.regexp_eatCharacterClassEscape(e) ||
                        this.regexp_eatCharacterEscape(e)
                    );
                }),
                ($.regexp_eatClassControlLetter = function (e) {
                    var t = e.current();
                    return Ut(t) || t === 95
                        ? ((e.lastIntValue = t % 32), e.advance(), !0)
                        : !1;
                }),
                ($.regexp_eatHexEscapeSequence = function (e) {
                    var t = e.pos;
                    if (e.eat(120)) {
                        if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
                        e.switchU && e.raise('Invalid escape'), (e.pos = t);
                    }
                    return !1;
                }),
                ($.regexp_eatDecimalDigits = function (e) {
                    var t = e.pos,
                        n = 0;
                    for (e.lastIntValue = 0; Ut((n = e.current())); )
                        (e.lastIntValue = 10 * e.lastIntValue + (n - 48)),
                            e.advance();
                    return e.pos !== t;
                }),
                ($.regexp_eatHexDigits = function (e) {
                    var t = e.pos,
                        n = 0;
                    for (e.lastIntValue = 0; Hn((n = e.current())); )
                        (e.lastIntValue = 16 * e.lastIntValue + Qn(n)),
                            e.advance();
                    return e.pos !== t;
                }),
                ($.regexp_eatLegacyOctalEscapeSequence = function (e) {
                    if (this.regexp_eatOctalDigit(e)) {
                        var t = e.lastIntValue;
                        if (this.regexp_eatOctalDigit(e)) {
                            var n = e.lastIntValue;
                            t <= 3 && this.regexp_eatOctalDigit(e)
                                ? (e.lastIntValue =
                                      t * 64 + n * 8 + e.lastIntValue)
                                : (e.lastIntValue = t * 8 + n);
                        } else e.lastIntValue = t;
                        return !0;
                    }
                    return !1;
                }),
                ($.regexp_eatOctalDigit = function (e) {
                    var t = e.current();
                    return Kn(t)
                        ? ((e.lastIntValue = t - 48), e.advance(), !0)
                        : ((e.lastIntValue = 0), !1);
                }),
                ($.regexp_eatFixedHexDigits = function (e, t) {
                    var n = e.pos;
                    e.lastIntValue = 0;
                    for (var r = 0; r < t; ++r) {
                        var i = e.current();
                        if (!Hn(i)) return (e.pos = n), !1;
                        (e.lastIntValue = 16 * e.lastIntValue + Qn(i)),
                            e.advance();
                    }
                    return !0;
                }),
                (Ft = function (e) {
                    (this.type = e.type),
                        (this.value = e.value),
                        (this.start = e.start),
                        (this.end = e.end),
                        e.options.locations &&
                            (this.loc = new ct(e, e.startLoc, e.endLoc)),
                        e.options.ranges && (this.range = [e.start, e.end]);
                }),
                (ue = me.prototype),
                (ue.next = function (e) {
                    !e &&
                        this.type.keyword &&
                        this.containsEsc &&
                        this.raiseRecoverable(
                            this.start,
                            'Escape sequence in keyword ' + this.type.keyword
                        ),
                        this.options.onToken &&
                            this.options.onToken(new Ft(this)),
                        (this.lastTokEnd = this.end),
                        (this.lastTokStart = this.start),
                        (this.lastTokEndLoc = this.endLoc),
                        (this.lastTokStartLoc = this.startLoc),
                        this.nextToken();
                }),
                (ue.getToken = function () {
                    return this.next(), new Ft(this);
                }),
                typeof Symbol < 'u' &&
                    (ue[Symbol.iterator] = function () {
                        var e = this;
                        return {
                            next: function () {
                                var t = e.getToken();
                                return { done: t.type === f.eof, value: t };
                            },
                        };
                    }),
                (ue.curContext = function () {
                    return this.context[this.context.length - 1];
                }),
                (ue.nextToken = function () {
                    var e = this.curContext();
                    if (
                        ((!e || !e.preserveSpace) && this.skipSpace(),
                        (this.start = this.pos),
                        this.options.locations &&
                            (this.startLoc = this.curPosition()),
                        this.pos >= this.input.length)
                    )
                        return this.finishToken(f.eof);
                    if (e.override) return e.override(this);
                    this.readToken(this.fullCharCodeAtPos());
                }),
                (ue.readToken = function (e) {
                    return Ge(e, this.options.ecmaVersion >= 6) || e === 92
                        ? this.readWord()
                        : this.getTokenFromCode(e);
                }),
                (ue.fullCharCodeAtPos = function () {
                    var e = this.input.charCodeAt(this.pos);
                    if (e <= 55295 || e >= 57344) return e;
                    var t = this.input.charCodeAt(this.pos + 1);
                    return (e << 10) + t - 56613888;
                }),
                (ue.skipBlockComment = function () {
                    var e = this.options.onComment && this.curPosition(),
                        t = this.pos,
                        n = this.input.indexOf('*/', (this.pos += 2));
                    if (
                        (n === -1 &&
                            this.raise(this.pos - 2, 'Unterminated comment'),
                        (this.pos = n + 2),
                        this.options.locations)
                    ) {
                        et.lastIndex = t;
                        for (
                            var r;
                            (r = et.exec(this.input)) && r.index < this.pos;

                        )
                            ++this.curLine,
                                (this.lineStart = r.index + r[0].length);
                    }
                    this.options.onComment &&
                        this.options.onComment(
                            !0,
                            this.input.slice(t + 2, n),
                            t,
                            this.pos,
                            e,
                            this.curPosition()
                        );
                }),
                (ue.skipLineComment = function (e) {
                    for (
                        var t = this.pos,
                            n = this.options.onComment && this.curPosition(),
                            r = this.input.charCodeAt((this.pos += e));
                        this.pos < this.input.length && !ot(r);

                    )
                        r = this.input.charCodeAt(++this.pos);
                    this.options.onComment &&
                        this.options.onComment(
                            !1,
                            this.input.slice(t + e, this.pos),
                            t,
                            this.pos,
                            n,
                            this.curPosition()
                        );
                }),
                (ue.skipSpace = function () {
                    e: for (; this.pos < this.input.length; ) {
                        var e = this.input.charCodeAt(this.pos);
                        switch (e) {
                            case 32:
                            case 160:
                                ++this.pos;
                                break;
                            case 13:
                                this.input.charCodeAt(this.pos + 1) === 10 &&
                                    ++this.pos;
                            case 10:
                            case 8232:
                            case 8233:
                                ++this.pos,
                                    this.options.locations &&
                                        (++this.curLine,
                                        (this.lineStart = this.pos));
                                break;
                            case 47:
                                switch (this.input.charCodeAt(this.pos + 1)) {
                                    case 42:
                                        this.skipBlockComment();
                                        break;
                                    case 47:
                                        this.skipLineComment(2);
                                        break;
                                    default:
                                        break e;
                                }
                                break;
                            default:
                                if (
                                    (e > 8 && e < 14) ||
                                    (e >= 5760 &&
                                        Wt.test(String.fromCharCode(e)))
                                )
                                    ++this.pos;
                                else break e;
                        }
                    }
                }),
                (ue.finishToken = function (e, t) {
                    (this.end = this.pos),
                        this.options.locations &&
                            (this.endLoc = this.curPosition());
                    var n = this.type;
                    (this.type = e), (this.value = t), this.updateContext(n);
                }),
                (ue.readToken_dot = function () {
                    var e = this.input.charCodeAt(this.pos + 1);
                    if (e >= 48 && e <= 57) return this.readNumber(!0);
                    var t = this.input.charCodeAt(this.pos + 2);
                    return this.options.ecmaVersion >= 6 && e === 46 && t === 46
                        ? ((this.pos += 3), this.finishToken(f.ellipsis))
                        : (++this.pos, this.finishToken(f.dot));
                }),
                (ue.readToken_slash = function () {
                    var e = this.input.charCodeAt(this.pos + 1);
                    return this.exprAllowed
                        ? (++this.pos, this.readRegexp())
                        : e === 61
                          ? this.finishOp(f.assign, 2)
                          : this.finishOp(f.slash, 1);
                }),
                (ue.readToken_mult_modulo_exp = function (e) {
                    var t = this.input.charCodeAt(this.pos + 1),
                        n = 1,
                        r = e === 42 ? f.star : f.modulo;
                    return (
                        this.options.ecmaVersion >= 7 &&
                            e === 42 &&
                            t === 42 &&
                            (++n,
                            (r = f.starstar),
                            (t = this.input.charCodeAt(this.pos + 2))),
                        t === 61
                            ? this.finishOp(f.assign, n + 1)
                            : this.finishOp(r, n)
                    );
                }),
                (ue.readToken_pipe_amp = function (e) {
                    var t = this.input.charCodeAt(this.pos + 1);
                    if (t === e) {
                        if (this.options.ecmaVersion >= 12) {
                            var n = this.input.charCodeAt(this.pos + 2);
                            if (n === 61) return this.finishOp(f.assign, 3);
                        }
                        return this.finishOp(
                            e === 124 ? f.logicalOR : f.logicalAND,
                            2
                        );
                    }
                    return t === 61
                        ? this.finishOp(f.assign, 2)
                        : this.finishOp(
                              e === 124 ? f.bitwiseOR : f.bitwiseAND,
                              1
                          );
                }),
                (ue.readToken_caret = function () {
                    var e = this.input.charCodeAt(this.pos + 1);
                    return e === 61
                        ? this.finishOp(f.assign, 2)
                        : this.finishOp(f.bitwiseXOR, 1);
                }),
                (ue.readToken_plus_min = function (e) {
                    var t = this.input.charCodeAt(this.pos + 1);
                    return t === e
                        ? t === 45 &&
                          !this.inModule &&
                          this.input.charCodeAt(this.pos + 2) === 62 &&
                          (this.lastTokEnd === 0 ||
                              Te.test(
                                  this.input.slice(this.lastTokEnd, this.pos)
                              ))
                            ? (this.skipLineComment(3),
                              this.skipSpace(),
                              this.nextToken())
                            : this.finishOp(f.incDec, 2)
                        : t === 61
                          ? this.finishOp(f.assign, 2)
                          : this.finishOp(f.plusMin, 1);
                }),
                (ue.readToken_lt_gt = function (e) {
                    var t = this.input.charCodeAt(this.pos + 1),
                        n = 1;
                    return t === e
                        ? ((n =
                              e === 62 &&
                              this.input.charCodeAt(this.pos + 2) === 62
                                  ? 3
                                  : 2),
                          this.input.charCodeAt(this.pos + n) === 61
                              ? this.finishOp(f.assign, n + 1)
                              : this.finishOp(f.bitShift, n))
                        : t === 33 &&
                            e === 60 &&
                            !this.inModule &&
                            this.input.charCodeAt(this.pos + 2) === 45 &&
                            this.input.charCodeAt(this.pos + 3) === 45
                          ? (this.skipLineComment(4),
                            this.skipSpace(),
                            this.nextToken())
                          : (t === 61 && (n = 2),
                            this.finishOp(f.relational, n));
                }),
                (ue.readToken_eq_excl = function (e) {
                    var t = this.input.charCodeAt(this.pos + 1);
                    return t === 61
                        ? this.finishOp(
                              f.equality,
                              this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2
                          )
                        : e === 61 && t === 62 && this.options.ecmaVersion >= 6
                          ? ((this.pos += 2), this.finishToken(f.arrow))
                          : this.finishOp(e === 61 ? f.eq : f.prefix, 1);
                }),
                (ue.readToken_question = function () {
                    var e = this.options.ecmaVersion;
                    if (e >= 11) {
                        var t = this.input.charCodeAt(this.pos + 1);
                        if (t === 46) {
                            var n = this.input.charCodeAt(this.pos + 2);
                            if (n < 48 || n > 57)
                                return this.finishOp(f.questionDot, 2);
                        }
                        if (t === 63) {
                            if (e >= 12) {
                                var r = this.input.charCodeAt(this.pos + 2);
                                if (r === 61) return this.finishOp(f.assign, 3);
                            }
                            return this.finishOp(f.coalesce, 2);
                        }
                    }
                    return this.finishOp(f.question, 1);
                }),
                (ue.getTokenFromCode = function (e) {
                    switch (e) {
                        case 46:
                            return this.readToken_dot();
                        case 40:
                            return ++this.pos, this.finishToken(f.parenL);
                        case 41:
                            return ++this.pos, this.finishToken(f.parenR);
                        case 59:
                            return ++this.pos, this.finishToken(f.semi);
                        case 44:
                            return ++this.pos, this.finishToken(f.comma);
                        case 91:
                            return ++this.pos, this.finishToken(f.bracketL);
                        case 93:
                            return ++this.pos, this.finishToken(f.bracketR);
                        case 123:
                            return ++this.pos, this.finishToken(f.braceL);
                        case 125:
                            return ++this.pos, this.finishToken(f.braceR);
                        case 58:
                            return ++this.pos, this.finishToken(f.colon);
                        case 96:
                            if (this.options.ecmaVersion < 6) break;
                            return ++this.pos, this.finishToken(f.backQuote);
                        case 48:
                            var t = this.input.charCodeAt(this.pos + 1);
                            if (t === 120 || t === 88)
                                return this.readRadixNumber(16);
                            if (this.options.ecmaVersion >= 6) {
                                if (t === 111 || t === 79)
                                    return this.readRadixNumber(8);
                                if (t === 98 || t === 66)
                                    return this.readRadixNumber(2);
                            }
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 55:
                        case 56:
                        case 57:
                            return this.readNumber(!1);
                        case 34:
                        case 39:
                            return this.readString(e);
                        case 47:
                            return this.readToken_slash();
                        case 37:
                        case 42:
                            return this.readToken_mult_modulo_exp(e);
                        case 124:
                        case 38:
                            return this.readToken_pipe_amp(e);
                        case 94:
                            return this.readToken_caret();
                        case 43:
                        case 45:
                            return this.readToken_plus_min(e);
                        case 60:
                        case 62:
                            return this.readToken_lt_gt(e);
                        case 61:
                        case 33:
                            return this.readToken_eq_excl(e);
                        case 63:
                            return this.readToken_question();
                        case 126:
                            return this.finishOp(f.prefix, 1);
                    }
                    this.raise(
                        this.pos,
                        "Unexpected character '" + Xt(e) + "'"
                    );
                }),
                (ue.finishOp = function (e, t) {
                    var n = this.input.slice(this.pos, this.pos + t);
                    return (this.pos += t), this.finishToken(e, n);
                }),
                (ue.readRegexp = function () {
                    for (var e, t, n = this.pos; ; ) {
                        this.pos >= this.input.length &&
                            this.raise(n, 'Unterminated regular expression');
                        var r = this.input.charAt(this.pos);
                        if (
                            (Te.test(r) &&
                                this.raise(
                                    n,
                                    'Unterminated regular expression'
                                ),
                            e)
                        )
                            e = !1;
                        else {
                            if (r === '[') t = !0;
                            else if (r === ']' && t) t = !1;
                            else if (r === '/' && !t) break;
                            e = r === '\\';
                        }
                        ++this.pos;
                    }
                    var i = this.input.slice(n, this.pos);
                    ++this.pos;
                    var o = this.pos,
                        s = this.readWord1();
                    this.containsEsc && this.unexpected(o);
                    var l =
                        this.regexpState || (this.regexpState = new qe(this));
                    l.reset(n, i, s),
                        this.validateRegExpFlags(l),
                        this.validateRegExpPattern(l);
                    var p = null;
                    try {
                        p = new RegExp(i, s);
                    } catch {}
                    return this.finishToken(f.regexp, {
                        pattern: i,
                        flags: s,
                        value: p,
                    });
                }),
                (ue.readInt = function (e, t, n) {
                    for (
                        var r = this.options.ecmaVersion >= 12 && t === void 0,
                            i = n && this.input.charCodeAt(this.pos) === 48,
                            o = this.pos,
                            s = 0,
                            l = 0,
                            p = 0,
                            d = t ?? 1 / 0;
                        p < d;
                        ++p, ++this.pos
                    ) {
                        var D = this.input.charCodeAt(this.pos),
                            y = void 0;
                        if (r && D === 95) {
                            i &&
                                this.raiseRecoverable(
                                    this.pos,
                                    'Numeric separator is not allowed in legacy octal numeric literals'
                                ),
                                l === 95 &&
                                    this.raiseRecoverable(
                                        this.pos,
                                        'Numeric separator must be exactly one underscore'
                                    ),
                                p === 0 &&
                                    this.raiseRecoverable(
                                        this.pos,
                                        'Numeric separator is not allowed at the first of digits'
                                    ),
                                (l = D);
                            continue;
                        }
                        if (
                            (D >= 97
                                ? (y = D - 97 + 10)
                                : D >= 65
                                  ? (y = D - 65 + 10)
                                  : D >= 48 && D <= 57
                                    ? (y = D - 48)
                                    : (y = 1 / 0),
                            y >= e)
                        )
                            break;
                        (l = D), (s = s * e + y);
                    }
                    return (
                        r &&
                            l === 95 &&
                            this.raiseRecoverable(
                                this.pos - 1,
                                'Numeric separator is not allowed at the last of digits'
                            ),
                        this.pos === o || (t != null && this.pos - o !== t)
                            ? null
                            : s
                    );
                }),
                (ue.readRadixNumber = function (e) {
                    var t = this.pos;
                    this.pos += 2;
                    var n = this.readInt(e);
                    return (
                        n == null &&
                            this.raise(
                                this.start + 2,
                                'Expected number in radix ' + e
                            ),
                        this.options.ecmaVersion >= 11 &&
                        this.input.charCodeAt(this.pos) === 110
                            ? ((n = Zn(this.input.slice(t, this.pos))),
                              ++this.pos)
                            : Ge(this.fullCharCodeAtPos()) &&
                              this.raise(
                                  this.pos,
                                  'Identifier directly after number'
                              ),
                        this.finishToken(f.num, n)
                    );
                }),
                (ue.readNumber = function (e) {
                    var t = this.pos;
                    !e &&
                        this.readInt(10, void 0, !0) === null &&
                        this.raise(t, 'Invalid number');
                    var n =
                        this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
                    n && this.strict && this.raise(t, 'Invalid number');
                    var r = this.input.charCodeAt(this.pos);
                    if (
                        !n &&
                        !e &&
                        this.options.ecmaVersion >= 11 &&
                        r === 110
                    ) {
                        var i = Zn(this.input.slice(t, this.pos));
                        return (
                            ++this.pos,
                            Ge(this.fullCharCodeAtPos()) &&
                                this.raise(
                                    this.pos,
                                    'Identifier directly after number'
                                ),
                            this.finishToken(f.num, i)
                        );
                    }
                    n && /[89]/.test(this.input.slice(t, this.pos)) && (n = !1),
                        r === 46 &&
                            !n &&
                            (++this.pos,
                            this.readInt(10),
                            (r = this.input.charCodeAt(this.pos))),
                        (r === 69 || r === 101) &&
                            !n &&
                            ((r = this.input.charCodeAt(++this.pos)),
                            (r === 43 || r === 45) && ++this.pos,
                            this.readInt(10) === null &&
                                this.raise(t, 'Invalid number')),
                        Ge(this.fullCharCodeAtPos()) &&
                            this.raise(
                                this.pos,
                                'Identifier directly after number'
                            );
                    var o = ni(this.input.slice(t, this.pos), n);
                    return this.finishToken(f.num, o);
                }),
                (ue.readCodePoint = function () {
                    var e = this.input.charCodeAt(this.pos),
                        t;
                    if (e === 123) {
                        this.options.ecmaVersion < 6 && this.unexpected();
                        var n = ++this.pos;
                        (t = this.readHexChar(
                            this.input.indexOf('}', this.pos) - this.pos
                        )),
                            ++this.pos,
                            t > 1114111 &&
                                this.invalidStringToken(
                                    n,
                                    'Code point out of bounds'
                                );
                    } else t = this.readHexChar(4);
                    return t;
                }),
                (ue.readString = function (e) {
                    for (var t = '', n = ++this.pos; ; ) {
                        this.pos >= this.input.length &&
                            this.raise(
                                this.start,
                                'Unterminated string constant'
                            );
                        var r = this.input.charCodeAt(this.pos);
                        if (r === e) break;
                        r === 92
                            ? ((t += this.input.slice(n, this.pos)),
                              (t += this.readEscapedChar(!1)),
                              (n = this.pos))
                            : (ot(r, this.options.ecmaVersion >= 10) &&
                                  this.raise(
                                      this.start,
                                      'Unterminated string constant'
                                  ),
                              ++this.pos);
                    }
                    return (
                        (t += this.input.slice(n, this.pos++)),
                        this.finishToken(f.string, t)
                    );
                }),
                (pn = {}),
                (ue.tryReadTemplateToken = function () {
                    this.inTemplateElement = !0;
                    try {
                        this.readTmplToken();
                    } catch (e) {
                        if (e === pn) this.readInvalidTemplateToken();
                        else throw e;
                    }
                    this.inTemplateElement = !1;
                }),
                (ue.invalidStringToken = function (e, t) {
                    if (this.inTemplateElement && this.options.ecmaVersion >= 9)
                        throw pn;
                    this.raise(e, t);
                }),
                (ue.readTmplToken = function () {
                    for (var e = '', t = this.pos; ; ) {
                        this.pos >= this.input.length &&
                            this.raise(this.start, 'Unterminated template');
                        var n = this.input.charCodeAt(this.pos);
                        if (
                            n === 96 ||
                            (n === 36 &&
                                this.input.charCodeAt(this.pos + 1) === 123)
                        )
                            return this.pos === this.start &&
                                (this.type === f.template ||
                                    this.type === f.invalidTemplate)
                                ? n === 36
                                    ? ((this.pos += 2),
                                      this.finishToken(f.dollarBraceL))
                                    : (++this.pos,
                                      this.finishToken(f.backQuote))
                                : ((e += this.input.slice(t, this.pos)),
                                  this.finishToken(f.template, e));
                        if (n === 92)
                            (e += this.input.slice(t, this.pos)),
                                (e += this.readEscapedChar(!0)),
                                (t = this.pos);
                        else if (ot(n)) {
                            switch (
                                ((e += this.input.slice(t, this.pos)),
                                ++this.pos,
                                n)
                            ) {
                                case 13:
                                    this.input.charCodeAt(this.pos) === 10 &&
                                        ++this.pos;
                                case 10:
                                    e += `
`;
                                    break;
                                default:
                                    e += String.fromCharCode(n);
                                    break;
                            }
                            this.options.locations &&
                                (++this.curLine, (this.lineStart = this.pos)),
                                (t = this.pos);
                        } else ++this.pos;
                    }
                }),
                (ue.readInvalidTemplateToken = function () {
                    for (; this.pos < this.input.length; this.pos++)
                        switch (this.input[this.pos]) {
                            case '\\':
                                ++this.pos;
                                break;
                            case '$':
                                if (this.input[this.pos + 1] !== '{') break;
                            case '`':
                                return this.finishToken(
                                    f.invalidTemplate,
                                    this.input.slice(this.start, this.pos)
                                );
                        }
                    this.raise(this.start, 'Unterminated template');
                }),
                (ue.readEscapedChar = function (e) {
                    var t = this.input.charCodeAt(++this.pos);
                    switch ((++this.pos, t)) {
                        case 110:
                            return `
`;
                        case 114:
                            return '\r';
                        case 120:
                            return String.fromCharCode(this.readHexChar(2));
                        case 117:
                            return Xt(this.readCodePoint());
                        case 116:
                            return '	';
                        case 98:
                            return '\b';
                        case 118:
                            return '\v';
                        case 102:
                            return '\f';
                        case 13:
                            this.input.charCodeAt(this.pos) === 10 &&
                                ++this.pos;
                        case 10:
                            return (
                                this.options.locations &&
                                    ((this.lineStart = this.pos),
                                    ++this.curLine),
                                ''
                            );
                        case 56:
                        case 57:
                            if (e) {
                                var n = this.pos - 1;
                                return (
                                    this.invalidStringToken(
                                        n,
                                        'Invalid escape sequence in template string'
                                    ),
                                    null
                                );
                            }
                        default:
                            if (t >= 48 && t <= 55) {
                                var r = this.input
                                        .substr(this.pos - 1, 3)
                                        .match(/^[0-7]+/)[0],
                                    i = parseInt(r, 8);
                                return (
                                    i > 255 &&
                                        ((r = r.slice(0, -1)),
                                        (i = parseInt(r, 8))),
                                    (this.pos += r.length - 1),
                                    (t = this.input.charCodeAt(this.pos)),
                                    (r !== '0' || t === 56 || t === 57) &&
                                        (this.strict || e) &&
                                        this.invalidStringToken(
                                            this.pos - 1 - r.length,
                                            e
                                                ? 'Octal literal in template string'
                                                : 'Octal literal in strict mode'
                                        ),
                                    String.fromCharCode(i)
                                );
                            }
                            return ot(t) ? '' : String.fromCharCode(t);
                    }
                }),
                (ue.readHexChar = function (e) {
                    var t = this.pos,
                        n = this.readInt(16, e);
                    return (
                        n === null &&
                            this.invalidStringToken(
                                t,
                                'Bad character escape sequence'
                            ),
                        n
                    );
                }),
                (ue.readWord1 = function () {
                    this.containsEsc = !1;
                    for (
                        var e = '',
                            t = !0,
                            n = this.pos,
                            r = this.options.ecmaVersion >= 6;
                        this.pos < this.input.length;

                    ) {
                        var i = this.fullCharCodeAtPos();
                        if (Qe(i, r)) this.pos += i <= 65535 ? 1 : 2;
                        else if (i === 92) {
                            (this.containsEsc = !0),
                                (e += this.input.slice(n, this.pos));
                            var o = this.pos;
                            this.input.charCodeAt(++this.pos) !== 117 &&
                                this.invalidStringToken(
                                    this.pos,
                                    'Expecting Unicode escape sequence \\uXXXX'
                                ),
                                ++this.pos;
                            var s = this.readCodePoint();
                            (t ? Ge : Qe)(s, r) ||
                                this.invalidStringToken(
                                    o,
                                    'Invalid Unicode escape'
                                ),
                                (e += Xt(s)),
                                (n = this.pos);
                        } else break;
                        t = !1;
                    }
                    return e + this.input.slice(n, this.pos);
                }),
                (ue.readWord = function () {
                    var e = this.readWord1(),
                        t = f.name;
                    return (
                        this.keywords.test(e) && (t = xt[e]),
                        this.finishToken(t, e)
                    );
                }),
                (xn = '7.4.1'),
                (me.acorn = {
                    Parser: me,
                    version: xn,
                    defaultOptions: Bt,
                    Position: Ke,
                    SourceLocation: ct,
                    getLineInfo: mn,
                    Node: gt,
                    TokenType: ce,
                    tokTypes: f,
                    keywordTypes: xt,
                    TokContext: Oe,
                    tokContexts: Ce,
                    isIdentifierChar: Qe,
                    isIdentifierStart: Ge,
                    Token: Ft,
                    isNewLine: ot,
                    lineBreak: Te,
                    lineBreakG: et,
                    nonASCIIwhitespace: Wt,
                });
        },
    }),
    si = he({
        '../../node_modules/acorn-jsx/xhtml.js'(e, t) {
            t.exports = {
                quot: '"',
                amp: '&',
                apos: "'",
                lt: '<',
                gt: '>',
                nbsp: ' ',
                iexcl: '¡',
                cent: '¢',
                pound: '£',
                curren: '¤',
                yen: '¥',
                brvbar: '¦',
                sect: '§',
                uml: '¨',
                copy: '©',
                ordf: 'ª',
                laquo: '«',
                not: '¬',
                shy: '­',
                reg: '®',
                macr: '¯',
                deg: '°',
                plusmn: '±',
                sup2: '²',
                sup3: '³',
                acute: '´',
                micro: 'µ',
                para: '¶',
                middot: '·',
                cedil: '¸',
                sup1: '¹',
                ordm: 'º',
                raquo: '»',
                frac14: '¼',
                frac12: '½',
                frac34: '¾',
                iquest: '¿',
                Agrave: 'À',
                Aacute: 'Á',
                Acirc: 'Â',
                Atilde: 'Ã',
                Auml: 'Ä',
                Aring: 'Å',
                AElig: 'Æ',
                Ccedil: 'Ç',
                Egrave: 'È',
                Eacute: 'É',
                Ecirc: 'Ê',
                Euml: 'Ë',
                Igrave: 'Ì',
                Iacute: 'Í',
                Icirc: 'Î',
                Iuml: 'Ï',
                ETH: 'Ð',
                Ntilde: 'Ñ',
                Ograve: 'Ò',
                Oacute: 'Ó',
                Ocirc: 'Ô',
                Otilde: 'Õ',
                Ouml: 'Ö',
                times: '×',
                Oslash: 'Ø',
                Ugrave: 'Ù',
                Uacute: 'Ú',
                Ucirc: 'Û',
                Uuml: 'Ü',
                Yacute: 'Ý',
                THORN: 'Þ',
                szlig: 'ß',
                agrave: 'à',
                aacute: 'á',
                acirc: 'â',
                atilde: 'ã',
                auml: 'ä',
                aring: 'å',
                aelig: 'æ',
                ccedil: 'ç',
                egrave: 'è',
                eacute: 'é',
                ecirc: 'ê',
                euml: 'ë',
                igrave: 'ì',
                iacute: 'í',
                icirc: 'î',
                iuml: 'ï',
                eth: 'ð',
                ntilde: 'ñ',
                ograve: 'ò',
                oacute: 'ó',
                ocirc: 'ô',
                otilde: 'õ',
                ouml: 'ö',
                divide: '÷',
                oslash: 'ø',
                ugrave: 'ù',
                uacute: 'ú',
                ucirc: 'û',
                uuml: 'ü',
                yacute: 'ý',
                thorn: 'þ',
                yuml: 'ÿ',
                OElig: 'Œ',
                oelig: 'œ',
                Scaron: 'Š',
                scaron: 'š',
                Yuml: 'Ÿ',
                fnof: 'ƒ',
                circ: 'ˆ',
                tilde: '˜',
                Alpha: 'Α',
                Beta: 'Β',
                Gamma: 'Γ',
                Delta: 'Δ',
                Epsilon: 'Ε',
                Zeta: 'Ζ',
                Eta: 'Η',
                Theta: 'Θ',
                Iota: 'Ι',
                Kappa: 'Κ',
                Lambda: 'Λ',
                Mu: 'Μ',
                Nu: 'Ν',
                Xi: 'Ξ',
                Omicron: 'Ο',
                Pi: 'Π',
                Rho: 'Ρ',
                Sigma: 'Σ',
                Tau: 'Τ',
                Upsilon: 'Υ',
                Phi: 'Φ',
                Chi: 'Χ',
                Psi: 'Ψ',
                Omega: 'Ω',
                alpha: 'α',
                beta: 'β',
                gamma: 'γ',
                delta: 'δ',
                epsilon: 'ε',
                zeta: 'ζ',
                eta: 'η',
                theta: 'θ',
                iota: 'ι',
                kappa: 'κ',
                lambda: 'λ',
                mu: 'μ',
                nu: 'ν',
                xi: 'ξ',
                omicron: 'ο',
                pi: 'π',
                rho: 'ρ',
                sigmaf: 'ς',
                sigma: 'σ',
                tau: 'τ',
                upsilon: 'υ',
                phi: 'φ',
                chi: 'χ',
                psi: 'ψ',
                omega: 'ω',
                thetasym: 'ϑ',
                upsih: 'ϒ',
                piv: 'ϖ',
                ensp: ' ',
                emsp: ' ',
                thinsp: ' ',
                zwnj: '‌',
                zwj: '‍',
                lrm: '‎',
                rlm: '‏',
                ndash: '–',
                mdash: '—',
                lsquo: '‘',
                rsquo: '’',
                sbquo: '‚',
                ldquo: '“',
                rdquo: '”',
                bdquo: '„',
                dagger: '†',
                Dagger: '‡',
                bull: '•',
                hellip: '…',
                permil: '‰',
                prime: '′',
                Prime: '″',
                lsaquo: '‹',
                rsaquo: '›',
                oline: '‾',
                frasl: '⁄',
                euro: '€',
                image: 'ℑ',
                weierp: '℘',
                real: 'ℜ',
                trade: '™',
                alefsym: 'ℵ',
                larr: '←',
                uarr: '↑',
                rarr: '→',
                darr: '↓',
                harr: '↔',
                crarr: '↵',
                lArr: '⇐',
                uArr: '⇑',
                rArr: '⇒',
                dArr: '⇓',
                hArr: '⇔',
                forall: '∀',
                part: '∂',
                exist: '∃',
                empty: '∅',
                nabla: '∇',
                isin: '∈',
                notin: '∉',
                ni: '∋',
                prod: '∏',
                sum: '∑',
                minus: '−',
                lowast: '∗',
                radic: '√',
                prop: '∝',
                infin: '∞',
                ang: '∠',
                and: '∧',
                or: '∨',
                cap: '∩',
                cup: '∪',
                int: '∫',
                there4: '∴',
                sim: '∼',
                cong: '≅',
                asymp: '≈',
                ne: '≠',
                equiv: '≡',
                le: '≤',
                ge: '≥',
                sub: '⊂',
                sup: '⊃',
                nsub: '⊄',
                sube: '⊆',
                supe: '⊇',
                oplus: '⊕',
                otimes: '⊗',
                perp: '⊥',
                sdot: '⋅',
                lceil: '⌈',
                rceil: '⌉',
                lfloor: '⌊',
                rfloor: '⌋',
                lang: '〈',
                rang: '〉',
                loz: '◊',
                spades: '♠',
                clubs: '♣',
                hearts: '♥',
                diams: '♦',
            };
        },
    }),
    ai = he({
        '../../node_modules/acorn-jsx/index.js'(e, t) {
            var n = si(),
                r = /^[\da-fA-F]+$/,
                i = /^\d+$/,
                o = new WeakMap();
            function s(d) {
                d = d.Parser.acorn || d;
                let D = o.get(d);
                if (!D) {
                    let y = d.tokTypes,
                        C = d.TokContext,
                        E = d.TokenType,
                        m = new C('<tag', !1),
                        g = new C('</tag', !1),
                        T = new C('<tag>...</tag>', !0, !0),
                        k = { tc_oTag: m, tc_cTag: g, tc_expr: T },
                        v = {
                            jsxName: new E('jsxName'),
                            jsxText: new E('jsxText', { beforeExpr: !0 }),
                            jsxTagStart: new E('jsxTagStart', {
                                startsExpr: !0,
                            }),
                            jsxTagEnd: new E('jsxTagEnd'),
                        };
                    (v.jsxTagStart.updateContext = function () {
                        this.context.push(T),
                            this.context.push(m),
                            (this.exprAllowed = !1);
                    }),
                        (v.jsxTagEnd.updateContext = function (R) {
                            let _ = this.context.pop();
                            (_ === m && R === y.slash) || _ === g
                                ? (this.context.pop(),
                                  (this.exprAllowed = this.curContext() === T))
                                : (this.exprAllowed = !0);
                        }),
                        (D = { tokContexts: k, tokTypes: v }),
                        o.set(d, D);
                }
                return D;
            }
            function l(d) {
                if (!d) return d;
                if (d.type === 'JSXIdentifier') return d.name;
                if (d.type === 'JSXNamespacedName')
                    return d.namespace.name + ':' + d.name.name;
                if (d.type === 'JSXMemberExpression')
                    return l(d.object) + '.' + l(d.property);
            }
            (t.exports = function (d) {
                return (
                    (d = d || {}),
                    function (D) {
                        return p(
                            {
                                allowNamespaces: d.allowNamespaces !== !1,
                                allowNamespacedObjects:
                                    !!d.allowNamespacedObjects,
                            },
                            D
                        );
                    }
                );
            }),
                Object.defineProperty(t.exports, 'tokTypes', {
                    get: function () {
                        return s((Bn(), zn(An))).tokTypes;
                    },
                    configurable: !0,
                    enumerable: !0,
                });
            function p(d, D) {
                let y = D.acorn || (Bn(), zn(An)),
                    C = s(y),
                    E = y.tokTypes,
                    m = C.tokTypes,
                    g = y.tokContexts,
                    T = C.tokContexts.tc_oTag,
                    k = C.tokContexts.tc_cTag,
                    v = C.tokContexts.tc_expr,
                    R = y.isNewLine,
                    _ = y.isIdentifierStart,
                    x = y.isIdentifierChar;
                return class extends D {
                    static get acornJsx() {
                        return C;
                    }
                    jsx_readToken() {
                        let F = '',
                            B = this.pos;
                        for (;;) {
                            this.pos >= this.input.length &&
                                this.raise(
                                    this.start,
                                    'Unterminated JSX contents'
                                );
                            let b = this.input.charCodeAt(this.pos);
                            switch (b) {
                                case 60:
                                case 123:
                                    return this.pos === this.start
                                        ? b === 60 && this.exprAllowed
                                            ? (++this.pos,
                                              this.finishToken(m.jsxTagStart))
                                            : this.getTokenFromCode(b)
                                        : ((F += this.input.slice(B, this.pos)),
                                          this.finishToken(m.jsxText, F));
                                case 38:
                                    (F += this.input.slice(B, this.pos)),
                                        (F += this.jsx_readEntity()),
                                        (B = this.pos);
                                    break;
                                case 62:
                                case 125:
                                    this.raise(
                                        this.pos,
                                        'Unexpected token `' +
                                            this.input[this.pos] +
                                            '`. Did you mean `' +
                                            (b === 62 ? '&gt;' : '&rbrace;') +
                                            '` or `{"' +
                                            this.input[this.pos] +
                                            '"}`?'
                                    );
                                default:
                                    R(b)
                                        ? ((F += this.input.slice(B, this.pos)),
                                          (F += this.jsx_readNewLine(!0)),
                                          (B = this.pos))
                                        : ++this.pos;
                            }
                        }
                    }
                    jsx_readNewLine(F) {
                        let B = this.input.charCodeAt(this.pos),
                            b;
                        return (
                            ++this.pos,
                            B === 13 && this.input.charCodeAt(this.pos) === 10
                                ? (++this.pos,
                                  (b = F
                                      ? `
`
                                      : `\r
`))
                                : (b = String.fromCharCode(B)),
                            this.options.locations &&
                                (++this.curLine, (this.lineStart = this.pos)),
                            b
                        );
                    }
                    jsx_readString(F) {
                        let B = '',
                            b = ++this.pos;
                        for (;;) {
                            this.pos >= this.input.length &&
                                this.raise(
                                    this.start,
                                    'Unterminated string constant'
                                );
                            let I = this.input.charCodeAt(this.pos);
                            if (I === F) break;
                            I === 38
                                ? ((B += this.input.slice(b, this.pos)),
                                  (B += this.jsx_readEntity()),
                                  (b = this.pos))
                                : R(I)
                                  ? ((B += this.input.slice(b, this.pos)),
                                    (B += this.jsx_readNewLine(!1)),
                                    (b = this.pos))
                                  : ++this.pos;
                        }
                        return (
                            (B += this.input.slice(b, this.pos++)),
                            this.finishToken(E.string, B)
                        );
                    }
                    jsx_readEntity() {
                        let F = '',
                            B = 0,
                            b,
                            I = this.input[this.pos];
                        I !== '&' &&
                            this.raise(
                                this.pos,
                                'Entity must start with an ampersand'
                            );
                        let q = ++this.pos;
                        for (; this.pos < this.input.length && B++ < 10; ) {
                            if (((I = this.input[this.pos++]), I === ';')) {
                                F[0] === '#'
                                    ? F[1] === 'x'
                                        ? ((F = F.substr(2)),
                                          r.test(F) &&
                                              (b = String.fromCharCode(
                                                  parseInt(F, 16)
                                              )))
                                        : ((F = F.substr(1)),
                                          i.test(F) &&
                                              (b = String.fromCharCode(
                                                  parseInt(F, 10)
                                              )))
                                    : (b = n[F]);
                                break;
                            }
                            F += I;
                        }
                        return b || ((this.pos = q), '&');
                    }
                    jsx_readWord() {
                        let F,
                            B = this.pos;
                        do F = this.input.charCodeAt(++this.pos);
                        while (x(F) || F === 45);
                        return this.finishToken(
                            m.jsxName,
                            this.input.slice(B, this.pos)
                        );
                    }
                    jsx_parseIdentifier() {
                        let F = this.startNode();
                        return (
                            this.type === m.jsxName
                                ? (F.name = this.value)
                                : this.type.keyword
                                  ? (F.name = this.type.keyword)
                                  : this.unexpected(),
                            this.next(),
                            this.finishNode(F, 'JSXIdentifier')
                        );
                    }
                    jsx_parseNamespacedName() {
                        let F = this.start,
                            B = this.startLoc,
                            b = this.jsx_parseIdentifier();
                        if (!d.allowNamespaces || !this.eat(E.colon)) return b;
                        var I = this.startNodeAt(F, B);
                        return (
                            (I.namespace = b),
                            (I.name = this.jsx_parseIdentifier()),
                            this.finishNode(I, 'JSXNamespacedName')
                        );
                    }
                    jsx_parseElementName() {
                        if (this.type === m.jsxTagEnd) return '';
                        let F = this.start,
                            B = this.startLoc,
                            b = this.jsx_parseNamespacedName();
                        for (
                            this.type === E.dot &&
                            b.type === 'JSXNamespacedName' &&
                            !d.allowNamespacedObjects &&
                            this.unexpected();
                            this.eat(E.dot);

                        ) {
                            let I = this.startNodeAt(F, B);
                            (I.object = b),
                                (I.property = this.jsx_parseIdentifier()),
                                (b = this.finishNode(I, 'JSXMemberExpression'));
                        }
                        return b;
                    }
                    jsx_parseAttributeValue() {
                        switch (this.type) {
                            case E.braceL:
                                let F = this.jsx_parseExpressionContainer();
                                return (
                                    F.expression.type ===
                                        'JSXEmptyExpression' &&
                                        this.raise(
                                            F.start,
                                            'JSX attributes must only be assigned a non-empty expression'
                                        ),
                                    F
                                );
                            case m.jsxTagStart:
                            case E.string:
                                return this.parseExprAtom();
                            default:
                                this.raise(
                                    this.start,
                                    'JSX value should be either an expression or a quoted JSX text'
                                );
                        }
                    }
                    jsx_parseEmptyExpression() {
                        let F = this.startNodeAt(
                            this.lastTokEnd,
                            this.lastTokEndLoc
                        );
                        return this.finishNodeAt(
                            F,
                            'JSXEmptyExpression',
                            this.start,
                            this.startLoc
                        );
                    }
                    jsx_parseExpressionContainer() {
                        let F = this.startNode();
                        return (
                            this.next(),
                            (F.expression =
                                this.type === E.braceR
                                    ? this.jsx_parseEmptyExpression()
                                    : this.parseExpression()),
                            this.expect(E.braceR),
                            this.finishNode(F, 'JSXExpressionContainer')
                        );
                    }
                    jsx_parseAttribute() {
                        let F = this.startNode();
                        return this.eat(E.braceL)
                            ? (this.expect(E.ellipsis),
                              (F.argument = this.parseMaybeAssign()),
                              this.expect(E.braceR),
                              this.finishNode(F, 'JSXSpreadAttribute'))
                            : ((F.name = this.jsx_parseNamespacedName()),
                              (F.value = this.eat(E.eq)
                                  ? this.jsx_parseAttributeValue()
                                  : null),
                              this.finishNode(F, 'JSXAttribute'));
                    }
                    jsx_parseOpeningElementAt(F, B) {
                        let b = this.startNodeAt(F, B);
                        b.attributes = [];
                        let I = this.jsx_parseElementName();
                        for (
                            I && (b.name = I);
                            this.type !== E.slash && this.type !== m.jsxTagEnd;

                        )
                            b.attributes.push(this.jsx_parseAttribute());
                        return (
                            (b.selfClosing = this.eat(E.slash)),
                            this.expect(m.jsxTagEnd),
                            this.finishNode(
                                b,
                                I ? 'JSXOpeningElement' : 'JSXOpeningFragment'
                            )
                        );
                    }
                    jsx_parseClosingElementAt(F, B) {
                        let b = this.startNodeAt(F, B),
                            I = this.jsx_parseElementName();
                        return (
                            I && (b.name = I),
                            this.expect(m.jsxTagEnd),
                            this.finishNode(
                                b,
                                I ? 'JSXClosingElement' : 'JSXClosingFragment'
                            )
                        );
                    }
                    jsx_parseElementAt(F, B) {
                        let b = this.startNodeAt(F, B),
                            I = [],
                            q = this.jsx_parseOpeningElementAt(F, B),
                            U = null;
                        if (!q.selfClosing) {
                            e: for (;;)
                                switch (this.type) {
                                    case m.jsxTagStart:
                                        if (
                                            ((F = this.start),
                                            (B = this.startLoc),
                                            this.next(),
                                            this.eat(E.slash))
                                        ) {
                                            U = this.jsx_parseClosingElementAt(
                                                F,
                                                B
                                            );
                                            break e;
                                        }
                                        I.push(this.jsx_parseElementAt(F, B));
                                        break;
                                    case m.jsxText:
                                        I.push(this.parseExprAtom());
                                        break;
                                    case E.braceL:
                                        I.push(
                                            this.jsx_parseExpressionContainer()
                                        );
                                        break;
                                    default:
                                        this.unexpected();
                                }
                            l(U.name) !== l(q.name) &&
                                this.raise(
                                    U.start,
                                    'Expected corresponding JSX closing tag for <' +
                                        l(q.name) +
                                        '>'
                                );
                        }
                        let z = q.name ? 'Element' : 'Fragment';
                        return (
                            (b['opening' + z] = q),
                            (b['closing' + z] = U),
                            (b.children = I),
                            this.type === E.relational &&
                                this.value === '<' &&
                                this.raise(
                                    this.start,
                                    'Adjacent JSX elements must be wrapped in an enclosing tag'
                                ),
                            this.finishNode(b, 'JSX' + z)
                        );
                    }
                    jsx_parseText() {
                        let F = this.parseLiteral(this.value);
                        return (F.type = 'JSXText'), F;
                    }
                    jsx_parseElement() {
                        let F = this.start,
                            B = this.startLoc;
                        return this.next(), this.jsx_parseElementAt(F, B);
                    }
                    parseExprAtom(F) {
                        return this.type === m.jsxText
                            ? this.jsx_parseText()
                            : this.type === m.jsxTagStart
                              ? this.jsx_parseElement()
                              : super.parseExprAtom(F);
                    }
                    readToken(F) {
                        let B = this.curContext();
                        if (B === v) return this.jsx_readToken();
                        if (B === T || B === k) {
                            if (_(F)) return this.jsx_readWord();
                            if (F == 62)
                                return (
                                    ++this.pos, this.finishToken(m.jsxTagEnd)
                                );
                            if ((F === 34 || F === 39) && B == T)
                                return this.jsx_readString(F);
                        }
                        return F === 60 &&
                            this.exprAllowed &&
                            this.input.charCodeAt(this.pos + 1) !== 33
                            ? (++this.pos, this.finishToken(m.jsxTagStart))
                            : super.readToken(F);
                    }
                    updateContext(F) {
                        if (this.type == E.braceL) {
                            var B = this.curContext();
                            B == T
                                ? this.context.push(g.b_expr)
                                : B == v
                                  ? this.context.push(g.b_tmpl)
                                  : super.updateContext(F),
                                (this.exprAllowed = !0);
                        } else if (this.type === E.slash && F === m.jsxTagStart)
                            (this.context.length -= 2),
                                this.context.push(k),
                                (this.exprAllowed = !1);
                        else return super.updateContext(F);
                    }
                };
            }
        },
    }),
    oi = he({
        '../../node_modules/@base2/pretty-print-object/dist/index.js'(e) {
            var t =
                    (e && e.__assign) ||
                    function () {
                        return (
                            (t =
                                Object.assign ||
                                function (p) {
                                    for (
                                        var d, D = 1, y = arguments.length;
                                        D < y;
                                        D++
                                    ) {
                                        d = arguments[D];
                                        for (var C in d)
                                            Object.prototype.hasOwnProperty.call(
                                                d,
                                                C
                                            ) && (p[C] = d[C]);
                                    }
                                    return p;
                                }),
                            t.apply(this, arguments)
                        );
                    },
                n =
                    (e && e.__spreadArrays) ||
                    function () {
                        for (var p = 0, d = 0, D = arguments.length; d < D; d++)
                            p += arguments[d].length;
                        for (var y = Array(p), C = 0, d = 0; d < D; d++)
                            for (
                                var E = arguments[d], m = 0, g = E.length;
                                m < g;
                                m++, C++
                            )
                                y[C] = E[m];
                        return y;
                    };
            Object.defineProperty(e, '__esModule', { value: !0 });
            var r = [];
            function i(p) {
                var d = typeof p;
                return p !== null && (d === 'object' || d === 'function');
            }
            function o(p) {
                return Object.prototype.toString.call(p) === '[object RegExp]';
            }
            function s(p) {
                return Object.getOwnPropertySymbols(p).filter(function (d) {
                    return Object.prototype.propertyIsEnumerable.call(p, d);
                });
            }
            function l(p, d, D) {
                D === void 0 && (D = '');
                var y = { indent: '	', singleQuotes: !0 },
                    C = t(t({}, y), d),
                    E;
                C.inlineCharacterLimit === void 0
                    ? (E = {
                          newLine: `
`,
                          newLineOrSpace: `
`,
                          pad: D,
                          indent: D + C.indent,
                      })
                    : (E = {
                          newLine: '@@__PRETTY_PRINT_NEW_LINE__@@',
                          newLineOrSpace:
                              '@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@',
                          pad: '@@__PRETTY_PRINT_PAD__@@',
                          indent: '@@__PRETTY_PRINT_INDENT__@@',
                      });
                var m = function (k) {
                    if (C.inlineCharacterLimit === void 0) return k;
                    var v = k
                        .replace(new RegExp(E.newLine, 'g'), '')
                        .replace(new RegExp(E.newLineOrSpace, 'g'), ' ')
                        .replace(new RegExp(E.pad + '|' + E.indent, 'g'), '');
                    return v.length <= C.inlineCharacterLimit
                        ? v
                        : k
                              .replace(
                                  new RegExp(
                                      E.newLine + '|' + E.newLineOrSpace,
                                      'g'
                                  ),
                                  `
`
                              )
                              .replace(new RegExp(E.pad, 'g'), D)
                              .replace(new RegExp(E.indent, 'g'), D + C.indent);
                };
                if (r.indexOf(p) !== -1) return '"[Circular]"';
                if (
                    p == null ||
                    typeof p == 'number' ||
                    typeof p == 'boolean' ||
                    typeof p == 'function' ||
                    typeof p == 'symbol' ||
                    o(p)
                )
                    return String(p);
                if (p instanceof Date)
                    return "new Date('" + p.toISOString() + "')";
                if (Array.isArray(p)) {
                    if (p.length === 0) return '[]';
                    r.push(p);
                    var g =
                        '[' +
                        E.newLine +
                        p
                            .map(function (k, v) {
                                var R =
                                        p.length - 1 === v
                                            ? E.newLine
                                            : ',' + E.newLineOrSpace,
                                    _ = l(k, C, D + C.indent);
                                return (
                                    C.transform && (_ = C.transform(p, v, _)),
                                    E.indent + _ + R
                                );
                            })
                            .join('') +
                        E.pad +
                        ']';
                    return r.pop(), m(g);
                }
                if (i(p)) {
                    var T = n(Object.keys(p), s(p));
                    if (
                        (C.filter &&
                            (T = T.filter(function (v) {
                                return C.filter && C.filter(p, v);
                            })),
                        T.length === 0)
                    )
                        return '{}';
                    r.push(p);
                    var g =
                        '{' +
                        E.newLine +
                        T.map(function (v, R) {
                            var _ =
                                    T.length - 1 === R
                                        ? E.newLine
                                        : ',' + E.newLineOrSpace,
                                x = typeof v == 'symbol',
                                F =
                                    !x &&
                                    /^[a-z$_][a-z$_0-9]*$/i.test(v.toString()),
                                B = x || F ? v : l(v, C),
                                b = l(p[v], C, D + C.indent);
                            return (
                                C.transform && (b = C.transform(p, v, b)),
                                E.indent + String(B) + ': ' + b + _
                            );
                        }).join('') +
                        E.pad +
                        '}';
                    return r.pop(), m(g);
                }
                return (
                    (p = String(p).replace(/[\r\n]/g, function (k) {
                        return k ===
                            `
`
                            ? '\\n'
                            : '\\r';
                    })),
                    C.singleQuotes
                        ? ((p = p.replace(/\\?'/g, "\\'")), "'" + p + "'")
                        : ((p = p.replace(/"/g, '\\"')), '"' + p + '"')
                );
            }
            e.prettyPrint = l;
        },
    }),
    li = he({
        '../../node_modules/react-element-to-jsx-string/node_modules/react-is/cjs/react-is.development.js'(
            e
        ) {
            (function () {
                var t = !1,
                    n = !1,
                    r = !1,
                    i = !1,
                    o = !1,
                    s = Symbol.for('react.element'),
                    l = Symbol.for('react.portal'),
                    p = Symbol.for('react.fragment'),
                    d = Symbol.for('react.strict_mode'),
                    D = Symbol.for('react.profiler'),
                    y = Symbol.for('react.provider'),
                    C = Symbol.for('react.context'),
                    E = Symbol.for('react.server_context'),
                    m = Symbol.for('react.forward_ref'),
                    g = Symbol.for('react.suspense'),
                    T = Symbol.for('react.suspense_list'),
                    k = Symbol.for('react.memo'),
                    v = Symbol.for('react.lazy'),
                    R = Symbol.for('react.offscreen'),
                    _;
                _ = Symbol.for('react.module.reference');
                function x(W) {
                    return !!(
                        typeof W == 'string' ||
                        typeof W == 'function' ||
                        W === p ||
                        W === D ||
                        o ||
                        W === d ||
                        W === g ||
                        W === T ||
                        i ||
                        W === R ||
                        t ||
                        n ||
                        r ||
                        (typeof W == 'object' &&
                            W !== null &&
                            (W.$$typeof === v ||
                                W.$$typeof === k ||
                                W.$$typeof === y ||
                                W.$$typeof === C ||
                                W.$$typeof === m ||
                                W.$$typeof === _ ||
                                W.getModuleId !== void 0))
                    );
                }
                function F(W) {
                    if (typeof W == 'object' && W !== null) {
                        var Ne = W.$$typeof;
                        switch (Ne) {
                            case s:
                                var rt = W.type;
                                switch (rt) {
                                    case p:
                                    case D:
                                    case d:
                                    case g:
                                    case T:
                                        return rt;
                                    default:
                                        var At = rt && rt.$$typeof;
                                        switch (At) {
                                            case E:
                                            case C:
                                            case m:
                                            case v:
                                            case k:
                                            case y:
                                                return At;
                                            default:
                                                return Ne;
                                        }
                                }
                            case l:
                                return Ne;
                        }
                    }
                }
                var B = C,
                    b = y,
                    I = s,
                    q = m,
                    U = p,
                    z = v,
                    G = k,
                    ee = l,
                    de = D,
                    pe = d,
                    Ae = g,
                    te = T,
                    Ee = !1,
                    Re = !1;
                function be(W) {
                    return (
                        Ee ||
                            ((Ee = !0),
                            console.warn(
                                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.'
                            )),
                        !1
                    );
                }
                function S(W) {
                    return (
                        Re ||
                            ((Re = !0),
                            console.warn(
                                'The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.'
                            )),
                        !1
                    );
                }
                function j(W) {
                    return F(W) === C;
                }
                function J(W) {
                    return F(W) === y;
                }
                function H(W) {
                    return (
                        typeof W == 'object' && W !== null && W.$$typeof === s
                    );
                }
                function M(W) {
                    return F(W) === m;
                }
                function X(W) {
                    return F(W) === p;
                }
                function Q(W) {
                    return F(W) === v;
                }
                function ne(W) {
                    return F(W) === k;
                }
                function ie(W) {
                    return F(W) === l;
                }
                function le(W) {
                    return F(W) === D;
                }
                function Z(W) {
                    return F(W) === d;
                }
                function N(W) {
                    return F(W) === g;
                }
                function se(W) {
                    return F(W) === T;
                }
                (e.ContextConsumer = B),
                    (e.ContextProvider = b),
                    (e.Element = I),
                    (e.ForwardRef = q),
                    (e.Fragment = U),
                    (e.Lazy = z),
                    (e.Memo = G),
                    (e.Portal = ee),
                    (e.Profiler = de),
                    (e.StrictMode = pe),
                    (e.Suspense = Ae),
                    (e.SuspenseList = te),
                    (e.isAsyncMode = be),
                    (e.isConcurrentMode = S),
                    (e.isContextConsumer = j),
                    (e.isContextProvider = J),
                    (e.isElement = H),
                    (e.isForwardRef = M),
                    (e.isFragment = X),
                    (e.isLazy = Q),
                    (e.isMemo = ne),
                    (e.isPortal = ie),
                    (e.isProfiler = le),
                    (e.isStrictMode = Z),
                    (e.isSuspense = N),
                    (e.isSuspenseList = se),
                    (e.isValidElementType = x),
                    (e.typeOf = F);
            })();
        },
    }),
    ci = he({
        '../../node_modules/react-element-to-jsx-string/node_modules/react-is/index.js'(
            e,
            t
        ) {
            t.exports = li();
        },
    }),
    cr = ft(Iu()),
    vn = 'custom',
    bt = 'object',
    Pn = 'array',
    hi = 'class',
    ht = 'func',
    dt = 'element',
    pi = ft(Ru());
function In(e) {
    return pi.default.includes(e.toLowerCase());
}
var fi = ft(Ju());
function di(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    var r = Array.from(typeof e == 'string' ? [e] : e);
    r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, '');
    var i = r.reduce(function (l, p) {
        var d = p.match(/\n([\t ]+|(?!\s).)/g);
        return d
            ? l.concat(
                  d.map(function (D) {
                      var y, C;
                      return (C =
                          (y = D.match(/[\t ]/g)) === null || y === void 0
                              ? void 0
                              : y.length) !== null && C !== void 0
                          ? C
                          : 0;
                  })
              )
            : l;
    }, []);
    if (i.length) {
        var o = new RegExp(
            `
[	 ]{` +
                Math.min.apply(Math, i) +
                '}',
            'g'
        );
        r = r.map(function (l) {
            return l.replace(
                o,
                `
`
            );
        });
    }
    r[0] = r[0].replace(/^\r?\n/, '');
    var s = r[0];
    return (
        t.forEach(function (l, p) {
            var d = s.match(/(?:^|\n)( *)$/),
                D = d ? d[1] : '',
                y = l;
            typeof l == 'string' &&
                l.includes(`
`) &&
                (y = String(l)
                    .split(
                        `
`
                    )
                    .map(function (C, E) {
                        return E === 0 ? C : '' + D + C;
                    }).join(`
`)),
                (s += y + r[p + 1]);
        }),
        s
    );
}
var Vr = { format: { indent: { style: '  ' }, semicolons: !1 } },
    Ai = { ...Vr, format: { newline: '' } },
    Di = { ...Vr };
function Je(e, t = !1) {
    return (0, fi.generate)(e, t ? Ai : Di);
}
function _n(e, t = !1) {
    return t ? mi(e) : Je(e);
}
function mi(e) {
    let t = Je(e, !0);
    return t.endsWith(' }') || (t = `${t.slice(0, -1)} }`), t;
}
function hr(e, t = !1) {
    return t ? Ei(e) : Ci(e);
}
function Ci(e) {
    let t = Je(e);
    return t.endsWith('  }]') && (t = di(t)), t;
}
function Ei(e) {
    let t = Je(e, !0);
    return t.startsWith('[    ') && (t = t.replace('[    ', '[')), t;
}
var qr = (e) => e.$$typeof === Symbol.for('react.memo'),
    gi = (e) => e.$$typeof === Symbol.for('react.forward_ref');
Bn();
var Fi = ft(ai());
function Ur(e, t, n, r, i) {
    (function o(s, l, p) {
        var d = p || s.type,
            D = t[d];
        n[d](s, l, o), D && D(s, l);
    })(e, r, i);
}
function yi(e, t, n, r, i) {
    var o = [];
    (function s(l, p, d) {
        var D = d || l.type,
            y = t[D],
            C = l !== o[o.length - 1];
        C && o.push(l), n[D](l, p, s), y && y(l, p || o, o), C && o.pop();
    })(e, r, i);
}
function On(e, t, n) {
    n(e, t);
}
function nt(e, t, n) {}
var L = {};
L.Program = L.BlockStatement = function (e, t, n) {
    for (var r = 0, i = e.body; r < i.length; r += 1) {
        var o = i[r];
        n(o, t, 'Statement');
    }
};
L.Statement = On;
L.EmptyStatement = nt;
L.ExpressionStatement =
    L.ParenthesizedExpression =
    L.ChainExpression =
        function (e, t, n) {
            return n(e.expression, t, 'Expression');
        };
L.IfStatement = function (e, t, n) {
    n(e.test, t, 'Expression'),
        n(e.consequent, t, 'Statement'),
        e.alternate && n(e.alternate, t, 'Statement');
};
L.LabeledStatement = function (e, t, n) {
    return n(e.body, t, 'Statement');
};
L.BreakStatement = L.ContinueStatement = nt;
L.WithStatement = function (e, t, n) {
    n(e.object, t, 'Expression'), n(e.body, t, 'Statement');
};
L.SwitchStatement = function (e, t, n) {
    n(e.discriminant, t, 'Expression');
    for (var r = 0, i = e.cases; r < i.length; r += 1) {
        var o = i[r];
        o.test && n(o.test, t, 'Expression');
        for (var s = 0, l = o.consequent; s < l.length; s += 1) {
            var p = l[s];
            n(p, t, 'Statement');
        }
    }
};
L.SwitchCase = function (e, t, n) {
    e.test && n(e.test, t, 'Expression');
    for (var r = 0, i = e.consequent; r < i.length; r += 1) {
        var o = i[r];
        n(o, t, 'Statement');
    }
};
L.ReturnStatement =
    L.YieldExpression =
    L.AwaitExpression =
        function (e, t, n) {
            e.argument && n(e.argument, t, 'Expression');
        };
L.ThrowStatement = L.SpreadElement = function (e, t, n) {
    return n(e.argument, t, 'Expression');
};
L.TryStatement = function (e, t, n) {
    n(e.block, t, 'Statement'),
        e.handler && n(e.handler, t),
        e.finalizer && n(e.finalizer, t, 'Statement');
};
L.CatchClause = function (e, t, n) {
    e.param && n(e.param, t, 'Pattern'), n(e.body, t, 'Statement');
};
L.WhileStatement = L.DoWhileStatement = function (e, t, n) {
    n(e.test, t, 'Expression'), n(e.body, t, 'Statement');
};
L.ForStatement = function (e, t, n) {
    e.init && n(e.init, t, 'ForInit'),
        e.test && n(e.test, t, 'Expression'),
        e.update && n(e.update, t, 'Expression'),
        n(e.body, t, 'Statement');
};
L.ForInStatement = L.ForOfStatement = function (e, t, n) {
    n(e.left, t, 'ForInit'),
        n(e.right, t, 'Expression'),
        n(e.body, t, 'Statement');
};
L.ForInit = function (e, t, n) {
    e.type === 'VariableDeclaration' ? n(e, t) : n(e, t, 'Expression');
};
L.DebuggerStatement = nt;
L.FunctionDeclaration = function (e, t, n) {
    return n(e, t, 'Function');
};
L.VariableDeclaration = function (e, t, n) {
    for (var r = 0, i = e.declarations; r < i.length; r += 1) {
        var o = i[r];
        n(o, t);
    }
};
L.VariableDeclarator = function (e, t, n) {
    n(e.id, t, 'Pattern'), e.init && n(e.init, t, 'Expression');
};
L.Function = function (e, t, n) {
    e.id && n(e.id, t, 'Pattern');
    for (var r = 0, i = e.params; r < i.length; r += 1) {
        var o = i[r];
        n(o, t, 'Pattern');
    }
    n(e.body, t, e.expression ? 'Expression' : 'Statement');
};
L.Pattern = function (e, t, n) {
    e.type === 'Identifier'
        ? n(e, t, 'VariablePattern')
        : e.type === 'MemberExpression'
          ? n(e, t, 'MemberPattern')
          : n(e, t);
};
L.VariablePattern = nt;
L.MemberPattern = On;
L.RestElement = function (e, t, n) {
    return n(e.argument, t, 'Pattern');
};
L.ArrayPattern = function (e, t, n) {
    for (var r = 0, i = e.elements; r < i.length; r += 1) {
        var o = i[r];
        o && n(o, t, 'Pattern');
    }
};
L.ObjectPattern = function (e, t, n) {
    for (var r = 0, i = e.properties; r < i.length; r += 1) {
        var o = i[r];
        o.type === 'Property'
            ? (o.computed && n(o.key, t, 'Expression'),
              n(o.value, t, 'Pattern'))
            : o.type === 'RestElement' && n(o.argument, t, 'Pattern');
    }
};
L.Expression = On;
L.ThisExpression = L.Super = L.MetaProperty = nt;
L.ArrayExpression = function (e, t, n) {
    for (var r = 0, i = e.elements; r < i.length; r += 1) {
        var o = i[r];
        o && n(o, t, 'Expression');
    }
};
L.ObjectExpression = function (e, t, n) {
    for (var r = 0, i = e.properties; r < i.length; r += 1) {
        var o = i[r];
        n(o, t);
    }
};
L.FunctionExpression = L.ArrowFunctionExpression = L.FunctionDeclaration;
L.SequenceExpression = function (e, t, n) {
    for (var r = 0, i = e.expressions; r < i.length; r += 1) {
        var o = i[r];
        n(o, t, 'Expression');
    }
};
L.TemplateLiteral = function (e, t, n) {
    for (var r = 0, i = e.quasis; r < i.length; r += 1) {
        var o = i[r];
        n(o, t);
    }
    for (var s = 0, l = e.expressions; s < l.length; s += 1) {
        var p = l[s];
        n(p, t, 'Expression');
    }
};
L.TemplateElement = nt;
L.UnaryExpression = L.UpdateExpression = function (e, t, n) {
    n(e.argument, t, 'Expression');
};
L.BinaryExpression = L.LogicalExpression = function (e, t, n) {
    n(e.left, t, 'Expression'), n(e.right, t, 'Expression');
};
L.AssignmentExpression = L.AssignmentPattern = function (e, t, n) {
    n(e.left, t, 'Pattern'), n(e.right, t, 'Expression');
};
L.ConditionalExpression = function (e, t, n) {
    n(e.test, t, 'Expression'),
        n(e.consequent, t, 'Expression'),
        n(e.alternate, t, 'Expression');
};
L.NewExpression = L.CallExpression = function (e, t, n) {
    if ((n(e.callee, t, 'Expression'), e.arguments))
        for (var r = 0, i = e.arguments; r < i.length; r += 1) {
            var o = i[r];
            n(o, t, 'Expression');
        }
};
L.MemberExpression = function (e, t, n) {
    n(e.object, t, 'Expression'), e.computed && n(e.property, t, 'Expression');
};
L.ExportNamedDeclaration = L.ExportDefaultDeclaration = function (e, t, n) {
    e.declaration &&
        n(
            e.declaration,
            t,
            e.type === 'ExportNamedDeclaration' || e.declaration.id
                ? 'Statement'
                : 'Expression'
        ),
        e.source && n(e.source, t, 'Expression');
};
L.ExportAllDeclaration = function (e, t, n) {
    e.exported && n(e.exported, t), n(e.source, t, 'Expression');
};
L.ImportDeclaration = function (e, t, n) {
    for (var r = 0, i = e.specifiers; r < i.length; r += 1) {
        var o = i[r];
        n(o, t);
    }
    n(e.source, t, 'Expression');
};
L.ImportExpression = function (e, t, n) {
    n(e.source, t, 'Expression');
};
L.ImportSpecifier =
    L.ImportDefaultSpecifier =
    L.ImportNamespaceSpecifier =
    L.Identifier =
    L.Literal =
        nt;
L.TaggedTemplateExpression = function (e, t, n) {
    n(e.tag, t, 'Expression'), n(e.quasi, t, 'Expression');
};
L.ClassDeclaration = L.ClassExpression = function (e, t, n) {
    return n(e, t, 'Class');
};
L.Class = function (e, t, n) {
    e.id && n(e.id, t, 'Pattern'),
        e.superClass && n(e.superClass, t, 'Expression'),
        n(e.body, t);
};
L.ClassBody = function (e, t, n) {
    for (var r = 0, i = e.body; r < i.length; r += 1) {
        var o = i[r];
        n(o, t);
    }
};
L.MethodDefinition = L.Property = function (e, t, n) {
    e.computed && n(e.key, t, 'Expression'), n(e.value, t, 'Expression');
};
var Rn = { ...L, JSXElement: () => {} },
    xi = me.extend((0, Fi.default)());
function wt(e) {
    return e != null ? e.name : null;
}
function pr(e) {
    return e.filter(
        (t) => t.type === 'ObjectExpression' || t.type === 'ArrayExpression'
    );
}
function Wr(e) {
    let t = [];
    return (
        yi(
            e,
            {
                ObjectExpression(n, r) {
                    t.push(pr(r).length);
                },
                ArrayExpression(n, r) {
                    t.push(pr(r).length);
                },
            },
            Rn
        ),
        Math.max(...t)
    );
}
function Bi(e) {
    return { inferredType: { type: 'Identifier', identifier: wt(e) }, ast: e };
}
function vi(e) {
    return { inferredType: { type: 'Literal' }, ast: e };
}
function _i(e) {
    let t;
    Ur(
        e.body,
        {
            JSXElement(i) {
                t = i;
            },
        },
        Rn
    );
    let n = {
            type: t != null ? 'Element' : 'Function',
            params: e.params,
            hasParams: e.params.length !== 0,
        },
        r = wt(e.id);
    return r != null && (n.identifier = r), { inferredType: n, ast: e };
}
function Si(e) {
    let t;
    return (
        Ur(
            e.body,
            {
                JSXElement(n) {
                    t = n;
                },
            },
            Rn
        ),
        {
            inferredType: {
                type: t != null ? 'Element' : 'Class',
                identifier: wt(e.id),
            },
            ast: e,
        }
    );
}
function bi(e) {
    let t = { type: 'Element' },
        n = wt(e.openingElement.name);
    return n != null && (t.identifier = n), { inferredType: t, ast: e };
}
function wi(e) {
    let t = e.callee.type === 'MemberExpression' ? e.callee.property : e.callee;
    return wt(t) === 'shape' ? zr(e.arguments[0]) : null;
}
function zr(e) {
    return { inferredType: { type: 'Object', depth: Wr(e) }, ast: e };
}
function Ti(e) {
    return { inferredType: { type: 'Array', depth: Wr(e) }, ast: e };
}
function ki(e) {
    switch (e.type) {
        case 'Identifier':
            return Bi(e);
        case 'Literal':
            return vi(e);
        case 'FunctionExpression':
        case 'ArrowFunctionExpression':
            return _i(e);
        case 'ClassExpression':
            return Si(e);
        case 'JSXElement':
            return bi(e);
        case 'CallExpression':
            return wi(e);
        case 'ObjectExpression':
            return zr(e);
        case 'ArrayExpression':
            return Ti(e);
        default:
            return null;
    }
}
function Pi(e) {
    let t = xi.parse(`(${e})`, { ecmaVersion: 2020 }),
        n = { inferredType: { type: 'Unknown' }, ast: t };
    if (t.body[0] != null) {
        let r = t.body[0];
        switch (r.type) {
            case 'ExpressionStatement': {
                let i = ki(r.expression);
                i != null && (n = i);
                break;
            }
        }
    }
    return n;
}
function Xe(e) {
    try {
        return { ...Pi(e) };
    } catch {}
    return { inferredType: { type: 'Unknown' } };
}
function Gr({ inferredType: e, ast: t }) {
    let { depth: n } = e;
    if (n <= 2) {
        let r = hr(t, !0);
        if (!_t(r)) return De(r);
    }
    return De(Pn, hr(t));
}
function $r({ inferredType: e, ast: t }) {
    let { depth: n } = e;
    if (n === 1) {
        let r = _n(t, !0);
        if (!_t(r)) return De(r);
    }
    return De(bt, _n(t));
}
function Ln(e, t) {
    return t ? `${e}( ... )` : `${e}()`;
}
function Gt(e) {
    return `<${e} />`;
}
function Yr(e) {
    let { type: t, identifier: n } = e;
    switch (t) {
        case 'Function':
            return Ln(n, e.hasParams);
        case 'Element':
            return Gt(n);
        default:
            return n;
    }
}
function Ii({ inferredType: e, ast: t }) {
    let { identifier: n } = e;
    if (n != null) return De(Yr(e), Je(t));
    let r = Je(t, !0);
    return _t(r) ? De(ht, Je(t)) : De(r);
}
function Oi(e, t) {
    let { inferredType: n } = t,
        { identifier: r } = n;
    if (r != null && !In(r)) {
        let i = Yr(n);
        return De(i, e);
    }
    return _t(e) ? De(dt, e) : De(e);
}
function Jr(e) {
    try {
        let t = Xe(e);
        switch (t.inferredType.type) {
            case 'Object':
                return $r(t);
            case 'Function':
                return Ii(t);
            case 'Element':
                return Oi(e, t);
            case 'Array':
                return Gr(t);
            default:
                return null;
        }
    } catch (t) {
        console.error(t);
    }
    return null;
}
function fr(e) {
    return typeof e == 'function';
}
function Ri(e) {
    return typeof e == 'string' || e instanceof String;
}
function Li(e) {
    var n;
    if (typeof e != 'object' || e == null) return !1;
    if (Object.getPrototypeOf(e) === null) return !0;
    if (Object.prototype.toString.call(e) !== '[object Object]') {
        let r = e[Symbol.toStringTag];
        return r == null ||
            !(
                (n = Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)) !=
                    null && n.writable
            )
            ? !1
            : e.toString() === `[object ${r}]`;
    }
    let t = e;
    for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
}
function dr(e) {
    return Object.prototype.toString.call(e) === '[object Object]';
}
function Ni(e) {
    var t, n;
    return dr(e) === !1
        ? !1
        : ((t = e.constructor),
          t === void 0
              ? !0
              : ((n = t.prototype),
                !(dr(n) === !1 || n.hasOwnProperty('isPrototypeOf') === !1)));
}
var ji = ft(oi()),
    Ue = ft(ci()),
    $e = function (e, t) {
        return e === 0 ? '' : new Array(e * t).fill(' ').join('');
    };
function vt(e) {
    '@babel/helpers - typeof';
    return (
        (vt =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        vt(e)
    );
}
function Mi(e) {
    return Vi(e) || qi(e) || Ui(e) || Wi();
}
function Vi(e) {
    if (Array.isArray(e)) return Sn(e);
}
function qi(e) {
    if (
        (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
    )
        return Array.from(e);
}
function Ui(e, t) {
    if (e) {
        if (typeof e == 'string') return Sn(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (n === 'Object' && e.constructor && (n = e.constructor.name),
            n === 'Map' || n === 'Set')
        )
            return Array.from(e);
        if (
            n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
            return Sn(e, t);
    }
}
function Sn(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function Wi() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bn(e, t) {
    return e === null ||
        vt(e) !== 'object' ||
        e instanceof Date ||
        e instanceof RegExp ||
        tt.isValidElement(e)
        ? e
        : (t.add(e),
          Array.isArray(e)
              ? e.map(function (n) {
                    return bn(n, t);
                })
              : Object.keys(e)
                    .sort()
                    .reduce(function (n, r) {
                        return (
                            r === '_owner' ||
                                (r === 'current' || t.has(e[r])
                                    ? (n[r] = '[Circular]')
                                    : (n[r] = bn(e[r], t))),
                            n
                        );
                    }, {}));
}
function zi(e) {
    return bn(e, new WeakSet());
}
var Xr = function (e) {
        return { type: 'string', value: e };
    },
    Gi = function (e) {
        return { type: 'number', value: e };
    },
    $i = function (e, t, n, r) {
        return {
            type: 'ReactElement',
            displayName: e,
            props: t,
            defaultProps: n,
            childrens: r,
        };
    },
    Yi = function (e, t) {
        return { type: 'ReactFragment', key: e, childrens: t };
    },
    Ji = !!tt.Fragment,
    Hr = function (e) {
        return !e.name || e.name === '_default' ? 'No Display Name' : e.name;
    },
    Xi = function e(t) {
        switch (!0) {
            case !!t.displayName:
                return t.displayName;
            case t.$$typeof === Ue.Memo:
                return e(t.type);
            case t.$$typeof === Ue.ForwardRef:
                return e(t.render);
            default:
                return Hr(t);
        }
    },
    Hi = function (e) {
        switch (!0) {
            case typeof e.type == 'string':
                return e.type;
            case typeof e.type == 'function':
                return e.type.displayName ? e.type.displayName : Hr(e.type);
            case (0, Ue.isForwardRef)(e):
            case (0, Ue.isMemo)(e):
                return Xi(e.type);
            case (0, Ue.isContextConsumer)(e):
                return ''.concat(
                    e.type._context.displayName || 'Context',
                    '.Consumer'
                );
            case (0, Ue.isContextProvider)(e):
                return ''.concat(
                    e.type._context.displayName || 'Context',
                    '.Provider'
                );
            case (0, Ue.isLazy)(e):
                return 'Lazy';
            case (0, Ue.isProfiler)(e):
                return 'Profiler';
            case (0, Ue.isStrictMode)(e):
                return 'StrictMode';
            case (0, Ue.isSuspense)(e):
                return 'Suspense';
            default:
                return 'UnknownElementType';
        }
    },
    Ar = function (e, t) {
        return t !== 'children';
    },
    Qi = function (e) {
        return e !== !0 && e !== !1 && e !== null && e !== '';
    },
    Dr = function (e, t) {
        var n = {};
        return (
            Object.keys(e)
                .filter(function (r) {
                    return t(e[r], r);
                })
                .forEach(function (r) {
                    return (n[r] = e[r]);
                }),
            n
        );
    },
    Nn = function e(t, n) {
        var r = n.displayName,
            i = r === void 0 ? Hi : r;
        if (typeof t == 'string') return Xr(t);
        if (typeof t == 'number') return Gi(t);
        if (!yt.isValidElement(t))
            throw new Error(
                'react-element-to-jsx-string: Expected a React.Element, got `'.concat(
                    vt(t),
                    '`'
                )
            );
        var o = i(t),
            s = Dr(t.props, Ar);
        t.ref !== null && (s.ref = t.ref);
        var l = t.key;
        typeof l == 'string' && l.search(/^\./) && (s.key = l);
        var p = Dr(t.type.defaultProps || {}, Ar),
            d = yt.Children.toArray(t.props.children)
                .filter(Qi)
                .map(function (D) {
                    return e(D, n);
                });
        return Ji && t.type === tt.Fragment ? Yi(l, d) : $i(o, s, p, d);
    };
function Ki() {}
var Zi = function (e) {
        return e
            .toString()
            .split(
                `
`
            )
            .map(function (t) {
                return t.trim();
            })
            .join('');
    },
    mr = Zi,
    Qr = function (e, t) {
        var n = t.functionValue,
            r = n === void 0 ? mr : n,
            i = t.showFunctions;
        return r(!i && r === mr ? Ki : e);
    },
    es = function (e, t, n, r) {
        var i = zi(e),
            o = (0, ji.prettyPrint)(i, {
                transform: function (s, l, p) {
                    var d = s[l];
                    return d && tt.isValidElement(d)
                        ? $t(Nn(d, r), !0, n, r)
                        : typeof d == 'function'
                          ? Qr(d, r)
                          : p;
                },
            });
        return t
            ? o
                  .replace(/\s+/g, ' ')
                  .replace(/{ /g, '{')
                  .replace(/ }/g, '}')
                  .replace(/\[ /g, '[')
                  .replace(/ ]/g, ']')
            : o.replace(/\t/g, $e(1, r.tabStop)).replace(
                  /\n([^$])/g,
                  `
`.concat($e(n + 1, r.tabStop), '$1')
              );
    },
    ts = function (e) {
        return e.replace(/"/g, '&quot;');
    },
    ns = function (e, t, n, r) {
        if (typeof e == 'number') return '{'.concat(String(e), '}');
        if (typeof e == 'string') return '"'.concat(ts(e), '"');
        if (vt(e) === 'symbol') {
            var i = e
                .valueOf()
                .toString()
                .replace(/Symbol\((.*)\)/, '$1');
            return i ? "{Symbol('".concat(i, "')}") : '{Symbol()}';
        }
        return typeof e == 'function'
            ? '{'.concat(Qr(e, r), '}')
            : tt.isValidElement(e)
              ? '{'.concat($t(Nn(e, r), !0, n, r), '}')
              : e instanceof Date
                ? isNaN(e.valueOf())
                    ? '{new Date(NaN)}'
                    : '{new Date("'.concat(e.toISOString(), '")}')
                : Ni(e) || Array.isArray(e)
                  ? '{'.concat(es(e, t, n, r), '}')
                  : '{'.concat(String(e), '}');
    },
    rs = function (e, t, n, r, i, o, s, l) {
        if (!t && !r)
            throw new Error(
                'The prop "'.concat(
                    e,
                    '" has no value and no default: could not be formatted'
                )
            );
        var p = t ? n : i,
            d = l.useBooleanShorthandSyntax,
            D = l.tabStop,
            y = ns(p, o, s, l),
            C = ' ',
            E = `
`.concat($e(s + 1, D)),
            m = y.includes(`
`);
        return (
            d && y === '{false}' && !r
                ? ((C = ''), (E = ''))
                : d && y === '{true}'
                  ? ((C += ''.concat(e)), (E += ''.concat(e)))
                  : ((C += ''.concat(e, '=').concat(y)),
                    (E += ''.concat(e, '=').concat(y))),
            {
                attributeFormattedInline: C,
                attributeFormattedMultiline: E,
                isMultilineAttribute: m,
            }
        );
    },
    us = function (e, t) {
        var n = e.slice(0, e.length > 0 ? e.length - 1 : 0),
            r = e[e.length - 1];
        return (
            r &&
            (t.type === 'string' || t.type === 'number') &&
            (r.type === 'string' || r.type === 'number')
                ? n.push(Xr(String(r.value) + String(t.value)))
                : (r && n.push(r), n.push(t)),
            n
        );
    },
    is = function (e) {
        return ['key', 'ref'].includes(e);
    },
    ss = function (e) {
        return function (t) {
            var n = t.includes('key'),
                r = t.includes('ref'),
                i = t.filter(function (s) {
                    return !is(s);
                }),
                o = Mi(e ? i.sort() : i);
            return r && o.unshift('ref'), n && o.unshift('key'), o;
        };
    };
function as(e, t) {
    return Array.isArray(t)
        ? function (n) {
              return t.indexOf(n) === -1;
          }
        : function (n) {
              return t(e[n], n);
          };
}
var os = function (e, t, n, r, i) {
        var o = i.tabStop;
        return e.type === 'string'
            ? t
                  .split(
                      `
`
                  )
                  .map(function (s, l) {
                      return l === 0 ? s : ''.concat($e(r, o)).concat(s);
                  }).join(`
`)
            : t;
    },
    ls = function (e, t, n) {
        return function (r) {
            return os(r, $t(r, e, t, n), e, t, n);
        };
    },
    cs = function (e, t) {
        return function (n) {
            var r = Object.keys(e).includes(n);
            return !r || (r && e[n] !== t[n]);
        };
    },
    Kr = function (e, t, n, r, i) {
        return i ? $e(n, r).length + t.length > i : e.length > 1;
    },
    hs = function (e, t, n, r, i, o, s) {
        return (Kr(e, t, i, o, s) || n) && !r;
    },
    Zr = function (e, t, n, r) {
        var i = e.type,
            o = e.displayName,
            s = o === void 0 ? '' : o,
            l = e.childrens,
            p = e.props,
            d = p === void 0 ? {} : p,
            D = e.defaultProps,
            y = D === void 0 ? {} : D;
        if (i !== 'ReactElement')
            throw new Error(
                'The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(
                    i
                )
            );
        var C = r.filterProps,
            E = r.maxInlineAttributesLineLength,
            m = r.showDefaultProps,
            g = r.sortProps,
            T = r.tabStop,
            k = '<'.concat(s),
            v = k,
            R = k,
            _ = !1,
            x = [],
            F = as(d, C);
        Object.keys(d)
            .filter(F)
            .filter(cs(y, d))
            .forEach(function (I) {
                return x.push(I);
            }),
            Object.keys(y)
                .filter(F)
                .filter(function () {
                    return m;
                })
                .filter(function (I) {
                    return !x.includes(I);
                })
                .forEach(function (I) {
                    return x.push(I);
                });
        var B = ss(g)(x);
        if (
            (B.forEach(function (I) {
                var q = rs(
                        I,
                        Object.keys(d).includes(I),
                        d[I],
                        Object.keys(y).includes(I),
                        y[I],
                        t,
                        n,
                        r
                    ),
                    U = q.attributeFormattedInline,
                    z = q.attributeFormattedMultiline,
                    G = q.isMultilineAttribute;
                G && (_ = !0), (v += U), (R += z);
            }),
            (R += `
`.concat($e(n, T))),
            hs(B, v, _, t, n, T, E) ? (k = R) : (k = v),
            l && l.length > 0)
        ) {
            var b = n + 1;
            (k += '>'),
                t ||
                    ((k += `
`),
                    (k += $e(b, T))),
                (k += l
                    .reduce(us, [])
                    .map(ls(t, b, r))
                    .join(
                        t
                            ? ''
                            : `
`.concat($e(b, T))
                    )),
                t ||
                    ((k += `
`),
                    (k += $e(b - 1, T))),
                (k += '</'.concat(s, '>'));
        } else Kr(B, v, n, T, E) || (k += ' '), (k += '/>');
        return k;
    },
    ps = '',
    Cr = 'React.Fragment',
    fs = function (e, t, n) {
        var r = {};
        return (
            t && (r = { key: t }),
            {
                type: 'ReactElement',
                displayName: e,
                props: r,
                defaultProps: {},
                childrens: n,
            }
        );
    },
    ds = function (e) {
        var t = e.key;
        return !!t;
    },
    As = function (e) {
        var t = e.childrens;
        return t.length === 0;
    },
    Ds = function (e, t, n, r) {
        var i = e.type,
            o = e.key,
            s = e.childrens;
        if (i !== 'ReactFragment')
            throw new Error(
                'The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(
                    i
                )
            );
        var l = r.useFragmentShortSyntax,
            p;
        return (
            l ? (As(e) || ds(e) ? (p = Cr) : (p = ps)) : (p = Cr),
            Zr(fs(p, o, s), t, n, r)
        );
    },
    ms = ['<', '>', '{', '}'],
    Cs = function (e) {
        return ms.some(function (t) {
            return e.includes(t);
        });
    },
    Es = function (e) {
        return Cs(e) ? '{`'.concat(e, '`}') : e;
    },
    gs = function (e) {
        var t = e;
        return (
            t.endsWith(' ') && (t = t.replace(/^(.*?)(\s+)$/, "$1{'$2'}")),
            t.startsWith(' ') && (t = t.replace(/^(\s+)(.*)$/, "{'$1'}$2")),
            t
        );
    },
    $t = function (e, t, n, r) {
        if (e.type === 'number') return String(e.value);
        if (e.type === 'string')
            return e.value ? ''.concat(gs(Es(String(e.value)))) : '';
        if (e.type === 'ReactElement') return Zr(e, t, n, r);
        if (e.type === 'ReactFragment') return Ds(e, t, n, r);
        throw new TypeError('Unknow format type "'.concat(e.type, '"'));
    },
    Fs = function (e, t) {
        return $t(e, !1, 0, t);
    },
    eu = function (e) {
        var t =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
            n = t.filterProps,
            r = n === void 0 ? [] : n,
            i = t.showDefaultProps,
            o = i === void 0 ? !0 : i,
            s = t.showFunctions,
            l = s === void 0 ? !1 : s,
            p = t.functionValue,
            d = t.tabStop,
            D = d === void 0 ? 2 : d,
            y = t.useBooleanShorthandSyntax,
            C = y === void 0 ? !0 : y,
            E = t.useFragmentShortSyntax,
            m = E === void 0 ? !0 : E,
            g = t.sortProps,
            T = g === void 0 ? !0 : g,
            k = t.maxInlineAttributesLineLength,
            v = t.displayName;
        if (!e)
            throw new Error(
                'react-element-to-jsx-string: Expected a ReactElement'
            );
        var R = {
            filterProps: r,
            showDefaultProps: o,
            showFunctions: l,
            functionValue: p,
            tabStop: D,
            useBooleanShorthandSyntax: C,
            useFragmentShortSyntax: m,
            sortProps: T,
            maxInlineAttributesLineLength: k,
            displayName: v,
        };
        return Fs(Nn(e, R), R);
    },
    Er = eu;
function tu(e) {
    return e.$$typeof != null;
}
function nu(e, t) {
    let { name: n } = e;
    return n !== '' && n !== 'anonymous' && n !== t ? n : null;
}
var ys = (e) => De(JSON.stringify(e));
function xs(e) {
    let { type: t } = e,
        { displayName: n } = t,
        r = Er(e, {});
    if (n != null) {
        let i = Gt(n);
        return De(i, r);
    }
    if (Ri(t) && In(t)) {
        let i = Er(e, { tabStop: 0 }).replace(/\r?\n|\r/g, '');
        if (!_t(i)) return De(i);
    }
    return De(dt, r);
}
var Bs = (e) => {
        if (tu(e) && e.type != null) return xs(e);
        if (Li(e)) {
            let t = Xe(JSON.stringify(e));
            return $r(t);
        }
        if (Array.isArray(e)) {
            let t = Xe(JSON.stringify(e));
            return Gr(t);
        }
        return De(bt);
    },
    vs = (e, t) => {
        let n = !1,
            r;
        if (fr(e.render)) n = !0;
        else if (e.prototype != null && fr(e.prototype.render)) n = !0;
        else {
            let o;
            try {
                r = Xe(e.toString());
                let { hasParams: s, params: l } = r.inferredType;
                s
                    ? l.length === 1 &&
                      l[0].type === 'ObjectPattern' &&
                      (o = e({}))
                    : (o = e()),
                    o != null && tu(o) && (n = !0);
            } catch {}
        }
        let i = nu(e, t.name);
        if (i != null) {
            if (n) return De(Gt(i));
            r != null && (r = Xe(e.toString()));
            let { hasParams: o } = r.inferredType;
            return De(Ln(i, o));
        }
        return De(n ? dt : ht);
    },
    _s = (e) => De(e.toString()),
    ru = { string: ys, object: Bs, function: vs, default: _s };
function Ss(e = {}) {
    return { ...ru, ...e };
}
function bs(e, t, n = ru) {
    try {
        switch (typeof e) {
            case 'string':
                return n.string(e, t);
            case 'object':
                return n.object(e, t);
            case 'function':
                return n.function(e, t);
            default:
                return n.default(e, t);
        }
    } catch (r) {
        console.error(r);
    }
    return null;
}
function ws(e, t) {
    let n = e != null,
        r = t != null;
    if (!n && !r) return '';
    let i = [];
    if (n) {
        let o = e.map((s) => {
            let l = s.getPrettyName(),
                p = s.getTypeName();
            return p != null ? `${l}: ${p}` : l;
        });
        i.push(`(${o.join(', ')})`);
    } else i.push('()');
    return r && i.push(`=> ${t.getTypeName()}`), i.join(' ');
}
function Ts(e, t) {
    let n = e != null,
        r = t != null;
    if (!n && !r) return '';
    let i = [];
    return (
        n ? i.push('( ... )') : i.push('()'),
        r && i.push(`=> ${t.getTypeName()}`),
        i.join(' ')
    );
}
function ks(e) {
    return e.replace(
        /,/g,
        `,\r
`
    );
}
var Ps = 150;
function Se({ name: e, short: t, compact: n, full: r, inferredType: i }) {
    return { name: e, short: t, compact: n, full: r ?? t, inferredType: i };
}
function uu(e) {
    return e.replace(/PropTypes./g, '').replace(/.isRequired/g, '');
}
function gr(e) {
    return e.split(/\r?\n/);
}
function zt(e, t = !1) {
    return uu(_n(e, t));
}
function Fr(e, t = !1) {
    return uu(Je(e, t));
}
function Is(e) {
    switch (e) {
        case 'Object':
            return bt;
        case 'Array':
            return Pn;
        case 'Class':
            return hi;
        case 'Function':
            return ht;
        case 'Element':
            return dt;
        default:
            return vn;
    }
}
function iu(e, t) {
    let { inferredType: n, ast: r } = Xe(e),
        { type: i } = n,
        o,
        s,
        l;
    switch (i) {
        case 'Identifier':
        case 'Literal':
            (o = e), (s = e);
            break;
        case 'Object': {
            let { depth: p } = n;
            (o = bt), (s = p === 1 ? zt(r, !0) : null), (l = zt(r));
            break;
        }
        case 'Element': {
            let { identifier: p } = n;
            (o = p != null && !In(p) ? p : dt),
                (s = gr(e).length === 1 ? e : null),
                (l = e);
            break;
        }
        case 'Array': {
            let { depth: p } = n;
            (o = Pn), (s = p <= 2 ? Fr(r, !0) : null), (l = Fr(r));
            break;
        }
        default:
            (o = Is(i)), (s = gr(e).length === 1 ? e : null), (l = e);
            break;
    }
    return Se({ name: t, short: o, compact: s, full: l, inferredType: i });
}
function Os({ raw: e }) {
    return e != null
        ? iu(e, 'custom')
        : Se({ name: 'custom', short: vn, compact: vn });
}
function Rs(e) {
    let { jsDocTags: t } = e;
    return t != null && (t.params != null || t.returns != null)
        ? Se({
              name: 'func',
              short: Ts(t.params, t.returns),
              compact: null,
              full: ws(t.params, t.returns),
          })
        : Se({ name: 'func', short: ht, compact: ht });
}
function Ls(e, t) {
    let n = Object.keys(e.value)
            .map((s) => `${s}: ${pt(e.value[s], t).full}`)
            .join(', '),
        { inferredType: r, ast: i } = Xe(`{ ${n} }`),
        { depth: o } = r;
    return Se({
        name: 'shape',
        short: bt,
        compact: o === 1 && i ? zt(i, !0) : null,
        full: i ? zt(i) : null,
    });
}
function fn(e) {
    return `objectOf(${e})`;
}
function Ns(e, t) {
    let { short: n, compact: r, full: i } = pt(e.value, t);
    return Se({
        name: 'objectOf',
        short: fn(n),
        compact: r != null ? fn(r) : null,
        full: i && fn(i),
    });
}
function js(e, t) {
    if (Array.isArray(e.value)) {
        let n = e.value.reduce(
            (r, i) => {
                let { short: o, compact: s, full: l } = pt(i, t);
                return r.short.push(o), r.compact.push(s), r.full.push(l), r;
            },
            { short: [], compact: [], full: [] }
        );
        return Se({
            name: 'union',
            short: n.short.join(' | '),
            compact: n.compact.every((r) => r != null)
                ? n.compact.join(' | ')
                : null,
            full: n.full.join(' | '),
        });
    }
    return Se({ name: 'union', short: e.value, compact: null });
}
function Ms({ value: e, computed: t }) {
    return t
        ? iu(e, 'enumvalue')
        : Se({ name: 'enumvalue', short: e, compact: e });
}
function Vs(e) {
    if (Array.isArray(e.value)) {
        let t = e.value.reduce(
            (n, r) => {
                let { short: i, compact: o, full: s } = Ms(r);
                return n.short.push(i), n.compact.push(o), n.full.push(s), n;
            },
            { short: [], compact: [], full: [] }
        );
        return Se({
            name: 'enum',
            short: t.short.join(' | '),
            compact: t.compact.every((n) => n != null)
                ? t.compact.join(' | ')
                : null,
            full: t.full.join(' | '),
        });
    }
    return Se({ name: 'enum', short: e.value, compact: e.value });
}
function wn(e) {
    return `${e}[]`;
}
function yr(e) {
    return `[${e}]`;
}
function xr(e, t, n) {
    return Se({
        name: 'arrayOf',
        short: wn(e),
        compact: t != null ? yr(t) : null,
        full: n && yr(n),
    });
}
function qs(e, t) {
    let {
        name: n,
        short: r,
        compact: i,
        full: o,
        inferredType: s,
    } = pt(e.value, t);
    if (n === 'custom') {
        if (s === 'Object') return xr(r, i, o);
    } else if (n === 'shape') return xr(r, i, o);
    return Se({ name: 'arrayOf', short: wn(r), compact: wn(r) });
}
function pt(e, t) {
    try {
        switch (e.name) {
            case 'custom':
                return Os(e);
            case 'func':
                return Rs(t);
            case 'shape':
                return Ls(e, t);
            case 'instanceOf':
                return Se({
                    name: 'instanceOf',
                    short: e.value,
                    compact: e.value,
                });
            case 'objectOf':
                return Ns(e, t);
            case 'union':
                return js(e, t);
            case 'enum':
                return Vs(e);
            case 'arrayOf':
                return qs(e, t);
            default:
                return Se({ name: e.name, short: e.name, compact: e.name });
        }
    } catch (n) {
        console.error(n);
    }
    return Se({ name: 'unknown', short: 'unknown', compact: 'unknown' });
}
function Us(e) {
    let { type: t } = e.docgenInfo;
    if (t == null) return null;
    try {
        switch (t.name) {
            case 'custom':
            case 'shape':
            case 'instanceOf':
            case 'objectOf':
            case 'union':
            case 'enum':
            case 'arrayOf': {
                let { short: n, compact: r, full: i } = pt(t, e);
                return r != null && !vu(r) ? De(r) : i ? De(n, i) : De(n);
            }
            case 'func': {
                let { short: n, full: r } = pt(t, e),
                    i = n,
                    o;
                return (
                    r && r.length < Ps ? (i = r) : r && (o = ks(r)), De(i, o)
                );
            }
            default:
                return null;
        }
    } catch (n) {
        console.error(n);
    }
    return null;
}
var Ws = (e, { name: t, type: n }) => {
        let r =
                (n == null ? void 0 : n.summary) === 'element' ||
                (n == null ? void 0 : n.summary) === 'elementType',
            i = nu(e, t);
        if (i != null) {
            if (r) return De(Gt(i));
            let { hasParams: o } = Xe(e.toString()).inferredType;
            return De(Ln(i, o));
        }
        return De(r ? dt : ht);
    },
    zs = Ss({ function: Ws });
function Gs(e, t) {
    let { propTypes: n } = t;
    return n != null
        ? Object.keys(n)
              .map((r) => e.find((i) => i.name === r))
              .filter(Boolean)
        : e;
}
function $s(e, t) {
    let { propDef: n } = e,
        r = Us(e);
    r != null && (n.type = r);
    let { defaultValue: i } = e.docgenInfo;
    if (i != null && i.value != null) {
        let o = Jr(i.value);
        o != null && (n.defaultValue = o);
    } else if (t != null) {
        let o = bs(t, n, zs);
        o != null && (n.defaultValue = o);
    }
    return n;
}
function Ys(e, t) {
    let n = t.defaultProps != null ? t.defaultProps : {},
        r = e.map((i) => $s(i, n[i.propDef.name]));
    return Gs(r, t);
}
function Js(e, t) {
    let { propDef: n } = e,
        { defaultValue: r } = e.docgenInfo;
    if (r != null && r.value != null) {
        let i = Jr(r.value);
        i != null && (n.defaultValue = i);
    }
    return n;
}
function Xs(e) {
    return e.map((t) => Js(t));
}
var Br = new Map();
Object.keys(cr.default).forEach((e) => {
    let t = cr.default[e];
    Br.set(t, e), Br.set(t.isRequired, e);
});
function Hs(e, t) {
    let n = e;
    !xu(e) && !e.propTypes && qr(e) && (n = e.type);
    let r = Bu(n, t);
    if (r.length === 0) return [];
    switch (r[0].typeSystem) {
        case $n.JAVASCRIPT:
            return Ys(r, e);
        case $n.TYPESCRIPT:
            return Xs(r);
        default:
            return r.map((i) => i.propDef);
    }
}
var Qs = (e) => ({ rows: Hs(e, 'props') }),
    Ks = (e) => {
        if (e) {
            let { rows: t } = Qs(e);
            if (t)
                return t.reduce((n, r) => {
                    let {
                        name: i,
                        description: o,
                        type: s,
                        sbType: l,
                        defaultValue: p,
                        jsDocTags: d,
                        required: D,
                    } = r;
                    return (
                        (n[i] = {
                            name: i,
                            description: o,
                            type: { required: D, ...l },
                            table: {
                                type: s ?? void 0,
                                jsDocTags: d,
                                defaultValue: p ?? void 0,
                            },
                        }),
                        n
                    );
                }, {});
        }
        return null;
    },
    dn = eu,
    Zs = (e) => e.charAt(0).toUpperCase() + e.slice(1),
    ea = (e) =>
        (e.$$typeof || e)
            .toString()
            .replace(/^Symbol\((.*)\)$/, '$1')
            .split('.')
            .map((t) => t.split('_').map(Zs).join(''))
            .join('.');
function Tn(e) {
    if (tt.isValidElement(e)) {
        let t = Object.keys(e.props).reduce(
            (n, r) => ((n[r] = Tn(e.props[r])), n),
            {}
        );
        return { ...e, props: t, _owner: null };
    }
    return Array.isArray(e) ? e.map(Tn) : e;
}
var ta = (e, t) => {
        if (typeof e > 'u')
            return kt.warn('Too many skip or undefined component'), null;
        let n = e,
            r = n.type;
        for (let s = 0; s < (t == null ? void 0 : t.skip); s += 1) {
            if (typeof n > 'u')
                return kt.warn('Cannot skip undefined element'), null;
            if (yt.Children.count(n) > 1)
                return kt.warn('Trying to skip an array of elements'), null;
            typeof n.props.children > 'u'
                ? (kt.warn('Not enough children to skip elements.'),
                  typeof n.type == 'function' &&
                      n.type.name === '' &&
                      (n = yt.createElement(r, { ...n.props })))
                : typeof n.props.children == 'function'
                  ? (n = n.props.children())
                  : (n = n.props.children);
        }
        let i;
        typeof (t == null ? void 0 : t.displayName) == 'string'
            ? (i = { showFunctions: !0, displayName: () => t.displayName })
            : (i = {
                  displayName: (s) => {
                      var l;
                      return s.type.displayName
                          ? s.type.displayName
                          : Yn(s.type, 'displayName')
                            ? Yn(s.type, 'displayName')
                            : (l = s.type.render) != null && l.displayName
                              ? s.type.render.displayName
                              : typeof s.type == 'symbol' ||
                                  (s.type.$$typeof &&
                                      typeof s.type.$$typeof == 'symbol')
                                ? ea(s.type)
                                : s.type.name && s.type.name !== '_default'
                                  ? s.type.name
                                  : typeof s.type == 'function'
                                    ? 'No Display Name'
                                    : gi(s.type)
                                      ? s.type.render.name
                                      : qr(s.type)
                                        ? s.type.type.name
                                        : s.type;
                  },
              });
        let o = { ...i, filterProps: (s, l) => s !== void 0, ...t };
        return yt.Children.map(e, (s) => {
            let l = typeof s == 'number' ? s.toString() : s,
                p = (typeof dn == 'function' ? dn : dn.default)(Tn(l), o);
            if (p.indexOf('&quot;') > -1) {
                let d = p.match(/\S+=\\"([^"]*)\\"/g);
                d &&
                    d.forEach((D) => {
                        p = p.replace(D, D.replace(/&quot;/g, "'"));
                    });
            }
            return p;
        })
            .join(
                `
`
            )
            .replace(/function\s+noRefCheck\(\)\s*\{\}/g, '() => {}');
    },
    na = {
        skip: 0,
        showFunctions: !1,
        enableBeautify: !0,
        showDefaultProps: !1,
    },
    ra = (e) => {
        var r;
        let t =
                (r = e == null ? void 0 : e.parameters.docs) == null
                    ? void 0
                    : r.source,
            n = e == null ? void 0 : e.parameters.__isArgsStory;
        return (t == null ? void 0 : t.type) === Gn.DYNAMIC
            ? !1
            : !n ||
                  (t == null ? void 0 : t.code) ||
                  (t == null ? void 0 : t.type) === Gn.CODE;
    },
    ua = (e) => {
        var t, n;
        return (
            ((t = e.type) == null ? void 0 : t.displayName) ===
                'MDXCreateElement' && !!((n = e.props) != null && n.mdxType)
        );
    },
    su = (e) => {
        if (!ua(e)) return e;
        let { mdxType: t, originalType: n, children: r, ...i } = e.props,
            o = [];
        return (
            r && (o = (Array.isArray(r) ? r : [r]).map(su)),
            tt.createElement(n, i, ...o)
        );
    },
    au = (e, t) => {
        var D, y;
        let n = Su.getChannel(),
            r = ra(t),
            i = '';
        bu(() => {
            if (!r) {
                let { id: C, unmappedArgs: E } = t;
                n.emit(yu, { id: C, source: i, args: E });
            }
        });
        let o = e();
        if (r) return o;
        let s = { ...na, ...((t == null ? void 0 : t.parameters.jsx) || {}) },
            l =
                (y =
                    (D = t == null ? void 0 : t.parameters.docs) == null
                        ? void 0
                        : D.source) != null && y.excludeDecorators
                    ? t.originalStoryFn(t.args, t)
                    : o,
            p = su(l),
            d = ta(p, s);
        return d && (i = d), o;
    },
    oa = (e, t) => {
        let n = t.findIndex((i) => i.originalFn === au),
            r = n === -1 ? t : [...t.splice(n, 1), ...t];
        return _u(e, r);
    },
    la = {
        docs: {
            story: { inline: !0 },
            extractArgTypes: Ks,
            extractComponentDescription: gu,
        },
    },
    ca = [au],
    ha = [Fu];
export {
    oa as applyDecorators,
    ha as argTypesEnhancers,
    ca as decorators,
    la as parameters,
};
