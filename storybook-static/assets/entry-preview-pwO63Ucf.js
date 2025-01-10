const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            './react-18-D38Bl2r8.js',
            './index-BpYrhlGc.js',
            './index-CbU3SNpG.js',
        ])
) => i.map((i) => d[i]);
import { _ as sr } from './iframe-BcF8IA3g.js';
import { _ as nr, a as ar, b as S } from './chunk-XP5HYGXS-BGCqD1aY.js';
import { a as ir, R as pe, r as J } from './index-BpYrhlGc.js';
import { r as or } from './index-CbU3SNpG.js';
import '../sb-preview/runtime.js';
var $e = { exports: {} },
    V = {};
/**
 * @license React
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fe;
function lr() {
    if (Fe) return V;
    Fe = 1;
    var E = ir(),
        c = or();
    function a(e) {
        var d = e,
            h = e;
        if (e.alternate) for (; d.return; ) d = d.return;
        else {
            e = d;
            do (d = e), d.flags & 4098 && (h = d.return), (e = d.return);
            while (e);
        }
        return d.tag === 3 ? h : null;
    }
    function l(e) {
        if (a(e) !== e)
            throw Error('Unable to find node on an unmounted component.');
    }
    function o(e) {
        var d = e.alternate;
        if (!d) {
            if (((d = a(e)), d === null))
                throw Error('Unable to find node on an unmounted component.');
            return d !== e ? null : e;
        }
        for (var h = e, N = d; ; ) {
            var U = h.return;
            if (U === null) break;
            var k = U.alternate;
            if (k === null) {
                if (((N = U.return), N !== null)) {
                    h = N;
                    continue;
                }
                break;
            }
            if (U.child === k.child) {
                for (k = U.child; k; ) {
                    if (k === h) return l(U), e;
                    if (k === N) return l(U), d;
                    k = k.sibling;
                }
                throw Error('Unable to find node on an unmounted component.');
            }
            if (h.return !== N.return) (h = U), (N = k);
            else {
                for (var P = !1, G = U.child; G; ) {
                    if (G === h) {
                        (P = !0), (h = U), (N = k);
                        break;
                    }
                    if (G === N) {
                        (P = !0), (N = U), (h = k);
                        break;
                    }
                    G = G.sibling;
                }
                if (!P) {
                    for (G = k.child; G; ) {
                        if (G === h) {
                            (P = !0), (h = k), (N = U);
                            break;
                        }
                        if (G === N) {
                            (P = !0), (N = k), (h = U);
                            break;
                        }
                        G = G.sibling;
                    }
                    if (!P)
                        throw Error(
                            'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.'
                        );
                }
            }
            if (h.alternate !== N)
                throw Error(
                    "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
                );
        }
        if (h.tag !== 3)
            throw Error('Unable to find node on an unmounted component.');
        return h.stateNode.current === h ? e : d;
    }
    var s = Object.assign;
    function u(e) {
        var d = e.keyCode;
        return (
            'charCode' in e
                ? ((e = e.charCode), e === 0 && d === 13 && (e = 13))
                : (e = d),
            e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
        );
    }
    function v() {
        return !0;
    }
    function r() {
        return !1;
    }
    function t(e) {
        function d(h, N, U, k, P) {
            (this._reactName = h),
                (this._targetInst = U),
                (this.type = N),
                (this.nativeEvent = k),
                (this.target = P),
                (this.currentTarget = null);
            for (var G in e)
                e.hasOwnProperty(G) &&
                    ((h = e[G]), (this[G] = h ? h(k) : k[G]));
            return (
                (this.isDefaultPrevented = (
                    k.defaultPrevented != null
                        ? k.defaultPrevented
                        : k.returnValue === !1
                )
                    ? v
                    : r),
                (this.isPropagationStopped = r),
                this
            );
        }
        return (
            s(d.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var h = this.nativeEvent;
                    h &&
                        (h.preventDefault
                            ? h.preventDefault()
                            : typeof h.returnValue != 'unknown' &&
                              (h.returnValue = !1),
                        (this.isDefaultPrevented = v));
                },
                stopPropagation: function () {
                    var h = this.nativeEvent;
                    h &&
                        (h.stopPropagation
                            ? h.stopPropagation()
                            : typeof h.cancelBubble != 'unknown' &&
                              (h.cancelBubble = !0),
                        (this.isPropagationStopped = v));
                },
                persist: function () {},
                isPersistent: v,
            }),
            d
        );
    }
    var L = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        n = t(L),
        p = s({}, L, { view: 0, detail: 0 });
    t(p);
    var m,
        i,
        R,
        y = s({}, p, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: O,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0
                    ? e.fromElement === e.srcElement
                        ? e.toElement
                        : e.fromElement
                    : e.relatedTarget;
            },
            movementX: function (e) {
                return 'movementX' in e
                    ? e.movementX
                    : (e !== R &&
                          (R && e.type === 'mousemove'
                              ? ((m = e.screenX - R.screenX),
                                (i = e.screenY - R.screenY))
                              : (i = m = 0),
                          (R = e)),
                      m);
            },
            movementY: function (e) {
                return 'movementY' in e ? e.movementY : i;
            },
        });
    t(y);
    var C = s({}, y, { dataTransfer: 0 });
    t(C);
    var x = s({}, p, { relatedTarget: 0 });
    t(x);
    var F = s({}, L, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
    t(F);
    var H = s({}, L, {
        clipboardData: function (e) {
            return 'clipboardData' in e
                ? e.clipboardData
                : window.clipboardData;
        },
    });
    t(H);
    var q = s({}, L, { data: 0 });
    t(q);
    var B = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
        },
        Y = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
        },
        M = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
        };
    function X(e) {
        var d = this.nativeEvent;
        return d.getModifierState
            ? d.getModifierState(e)
            : (e = M[e])
              ? !!d[e]
              : !1;
    }
    function O() {
        return X;
    }
    var re = s({}, p, {
        key: function (e) {
            if (e.key) {
                var d = B[e.key] || e.key;
                if (d !== 'Unidentified') return d;
            }
            return e.type === 'keypress'
                ? ((e = u(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                : e.type === 'keydown' || e.type === 'keyup'
                  ? Y[e.keyCode] || 'Unidentified'
                  : '';
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: O,
        charCode: function (e) {
            return e.type === 'keypress' ? u(e) : 0;
        },
        keyCode: function (e) {
            return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === 'keypress'
                ? u(e)
                : e.type === 'keydown' || e.type === 'keyup'
                  ? e.keyCode
                  : 0;
        },
    });
    t(re);
    var ae = s({}, y, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    });
    t(ae);
    var ie = s({}, p, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: O,
    });
    t(ie);
    var oe = s({}, L, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
    t(oe);
    var le = s({}, y, {
        deltaX: function (e) {
            return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                  ? -e.wheelDeltaX
                  : 0;
        },
        deltaY: function (e) {
            return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                  ? -e.wheelDeltaY
                  : 'wheelDelta' in e
                    ? -e.wheelDelta
                    : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    });
    t(le);
    function g(e, d, h, N, U, k, P, G, ue) {
        var ee = Array.prototype.slice.call(arguments, 3);
        try {
            d.apply(h, ee);
        } catch (tr) {
            this.onError(tr);
        }
    }
    var f = !1,
        $ = null,
        I = !1,
        T = null,
        _ = {
            onError: function (e) {
                (f = !0), ($ = e);
            },
        };
    function w(e, d, h, N, U, k, P, G, ue) {
        (f = !1), ($ = null), g.apply(_, arguments);
    }
    function D(e, d, h, N, U, k, P, G, ue) {
        if ((w.apply(this, arguments), f)) {
            if (f) {
                var ee = $;
                (f = !1), ($ = null);
            } else
                throw Error(
                    'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.'
                );
            I || ((I = !0), (T = ee));
        }
    }
    var A = Array.isArray,
        j = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,
        b = j[0],
        Q = j[1],
        te = j[2],
        He = j[3],
        Be = j[4],
        Ke = E.unstable_act;
    function ze() {}
    function Ze(e, d) {
        if (!e) return [];
        if (((e = o(e)), !e)) return [];
        for (var h = e, N = []; ; ) {
            if (h.tag === 5 || h.tag === 6 || h.tag === 1 || h.tag === 0) {
                var U = h.stateNode;
                d(U) && N.push(U);
            }
            if (h.child) (h.child.return = h), (h = h.child);
            else {
                if (h === e) return N;
                for (; !h.sibling; ) {
                    if (!h.return || h.return === e) return N;
                    h = h.return;
                }
                (h.sibling.return = h.return), (h = h.sibling);
            }
        }
    }
    function se(e, d) {
        if (e && !e._reactInternals) {
            var h = String(e);
            throw (
                ((e = A(e)
                    ? 'an array'
                    : e && e.nodeType === 1 && e.tagName
                      ? 'a DOM node'
                      : h === '[object Object]'
                        ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                        : h),
                Error(
                    d +
                        '(...): the first argument must be a React class instance. Instead received: ' +
                        (e + '.')
                ))
            );
        }
    }
    function me(e) {
        return !(!e || e.nodeType !== 1 || !e.tagName);
    }
    function Ie(e) {
        return me(e)
            ? !1
            : e != null &&
                  typeof e.render == 'function' &&
                  typeof e.setState == 'function';
    }
    function Ce(e, d) {
        return Ie(e) ? e._reactInternals.type === d : !1;
    }
    function he(e, d) {
        return (
            se(e, 'findAllInRenderedTree'), e ? Ze(e._reactInternals, d) : []
        );
    }
    function xe(e, d) {
        return (
            se(e, 'scryRenderedDOMComponentsWithClass'),
            he(e, function (h) {
                if (me(h)) {
                    var N = h.className;
                    typeof N != 'string' && (N = h.getAttribute('class') || '');
                    var U = N.split(/\s+/);
                    if (!A(d)) {
                        if (d === void 0)
                            throw Error(
                                'TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.'
                            );
                        d = d.split(/\s+/);
                    }
                    return d.every(function (k) {
                        return U.indexOf(k) !== -1;
                    });
                }
                return !1;
            })
        );
    }
    function De(e, d) {
        return (
            se(e, 'scryRenderedDOMComponentsWithTag'),
            he(e, function (h) {
                return me(h) && h.tagName.toUpperCase() === d.toUpperCase();
            })
        );
    }
    function Pe(e, d) {
        return (
            se(e, 'scryRenderedComponentsWithType'),
            he(e, function (h) {
                return Ce(h, d);
            })
        );
    }
    function je(e, d, h) {
        var N = e.type || 'unknown-event';
        (e.currentTarget = Q(h)), D(N, d, void 0, e), (e.currentTarget = null);
    }
    function be(e, d, h) {
        for (var N = []; e; ) {
            N.push(e);
            do e = e.return;
            while (e && e.tag !== 5);
            e = e || null;
        }
        for (e = N.length; 0 < e--; ) d(N[e], 'captured', h);
        for (e = 0; e < N.length; e++) d(N[e], 'bubbled', h);
    }
    function Ue(e, d) {
        var h = e.stateNode;
        if (!h) return null;
        var N = te(h);
        if (!N) return null;
        h = N[d];
        e: switch (d) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
                (N = !N.disabled) ||
                    ((e = e.type),
                    (N = !(
                        e === 'button' ||
                        e === 'input' ||
                        e === 'select' ||
                        e === 'textarea'
                    ))),
                    (e = !N);
                break e;
            default:
                e = !1;
        }
        if (e) return null;
        if (h && typeof h != 'function')
            throw Error(
                'Expected `' +
                    d +
                    '` listener to be a function, instead got a value of `' +
                    typeof h +
                    '` type.'
            );
        return h;
    }
    function Je(e, d, h) {
        e &&
            h &&
            h._reactName &&
            (d = Ue(e, h._reactName)) &&
            (h._dispatchListeners == null && (h._dispatchListeners = []),
            h._dispatchInstances == null && (h._dispatchInstances = []),
            h._dispatchListeners.push(d),
            h._dispatchInstances.push(e));
    }
    function Qe(e, d, h) {
        var N = h._reactName;
        d === 'captured' && (N += 'Capture'),
            (d = Ue(e, N)) &&
                (h._dispatchListeners == null && (h._dispatchListeners = []),
                h._dispatchInstances == null && (h._dispatchInstances = []),
                h._dispatchListeners.push(d),
                h._dispatchInstances.push(e));
    }
    var ke = {},
        er = new Set([
            'mouseEnter',
            'mouseLeave',
            'pointerEnter',
            'pointerLeave',
        ]);
    function rr(e) {
        return function (d, h) {
            if (E.isValidElement(d))
                throw Error(
                    'TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.'
                );
            if (Ie(d))
                throw Error(
                    'TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.'
                );
            var N = 'on' + e[0].toUpperCase() + e.slice(1),
                U = new ze();
            (U.target = d), (U.type = e.toLowerCase());
            var k = b(d),
                P = new n(N, U.type, k, U, d);
            P.persist(),
                s(P, h),
                er.has(e)
                    ? P && P._reactName && Je(P._targetInst, null, P)
                    : P && P._reactName && be(P._targetInst, Qe, P),
                c.unstable_batchedUpdates(function () {
                    if ((He(d), P)) {
                        var G = P._dispatchListeners,
                            ue = P._dispatchInstances;
                        if (A(G))
                            for (
                                var ee = 0;
                                ee < G.length && !P.isPropagationStopped();
                                ee++
                            )
                                je(P, G[ee], ue[ee]);
                        else G && je(P, G, ue);
                        (P._dispatchListeners = null),
                            (P._dispatchInstances = null),
                            P.isPersistent() || P.constructor.release(P);
                    }
                    if (I) throw ((G = T), (I = !1), (T = null), G);
                }),
                Be();
        };
    }
    return (
        'blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate'
            .split(' ')
            .forEach(function (e) {
                ke[e] = rr(e);
            }),
        (V.Simulate = ke),
        (V.act = Ke),
        (V.findAllInRenderedTree = he),
        (V.findRenderedComponentWithType = function (e, d) {
            if (
                (se(e, 'findRenderedComponentWithType'),
                (e = Pe(e, d)),
                e.length !== 1)
            )
                throw Error(
                    'Did not find exactly one match (found: ' +
                        e.length +
                        ') for componentType:' +
                        d
                );
            return e[0];
        }),
        (V.findRenderedDOMComponentWithClass = function (e, d) {
            if (
                (se(e, 'findRenderedDOMComponentWithClass'),
                (e = xe(e, d)),
                e.length !== 1)
            )
                throw Error(
                    'Did not find exactly one match (found: ' +
                        e.length +
                        ') for class:' +
                        d
                );
            return e[0];
        }),
        (V.findRenderedDOMComponentWithTag = function (e, d) {
            if (
                (se(e, 'findRenderedDOMComponentWithTag'),
                (e = De(e, d)),
                e.length !== 1)
            )
                throw Error(
                    'Did not find exactly one match (found: ' +
                        e.length +
                        ') for tag:' +
                        d
                );
            return e[0];
        }),
        (V.isCompositeComponent = Ie),
        (V.isCompositeComponentWithType = Ce),
        (V.isDOMComponent = me),
        (V.isDOMComponentElement = function (e) {
            return !!(e && E.isValidElement(e) && e.tagName);
        }),
        (V.isElement = function (e) {
            return E.isValidElement(e);
        }),
        (V.isElementOfType = function (e, d) {
            return E.isValidElement(e) && e.type === d;
        }),
        (V.mockComponent = function (e, d) {
            return (
                (d = d || e.mockTagName || 'div'),
                e.prototype.render.mockImplementation(function () {
                    return E.createElement(d, null, this.props.children);
                }),
                this
            );
        }),
        (V.nativeTouchData = function (e, d) {
            return { touches: [{ pageX: e, pageY: d }] };
        }),
        (V.renderIntoDocument = function (e) {
            var d = document.createElement('div');
            return c.render(e, d);
        }),
        (V.scryRenderedComponentsWithType = Pe),
        (V.scryRenderedDOMComponentsWithClass = xe),
        (V.scryRenderedDOMComponentsWithTag = De),
        (V.traverseTwoPhase = be),
        V
    );
}
var qe;
function ur() {
    return qe || ((qe = 1), ($e.exports = lr())), $e.exports;
}
ur();
var _e = {};
const { global: pr } = __STORYBOOK_MODULE_GLOBAL__;
var fe = S({
        '../../node_modules/semver/internal/constants.js'(E, c) {
            var a = '2.0.0',
                l = Number.MAX_SAFE_INTEGER || 9007199254740991,
                o = 16,
                s = 250,
                u = [
                    'major',
                    'premajor',
                    'minor',
                    'preminor',
                    'patch',
                    'prepatch',
                    'prerelease',
                ];
            c.exports = {
                MAX_LENGTH: 256,
                MAX_SAFE_COMPONENT_LENGTH: o,
                MAX_SAFE_BUILD_LENGTH: s,
                MAX_SAFE_INTEGER: l,
                RELEASE_TYPES: u,
                SEMVER_SPEC_VERSION: a,
                FLAG_INCLUDE_PRERELEASE: 1,
                FLAG_LOOSE: 2,
            };
        },
    }),
    Ee = S({
        '../../node_modules/semver/internal/debug.js'(E, c) {
            var a =
                typeof process == 'object' &&
                _e &&
                _e.NODE_DEBUG &&
                /\bsemver\b/i.test(_e.NODE_DEBUG)
                    ? (...l) => console.error('SEMVER', ...l)
                    : () => {};
            c.exports = a;
        },
    }),
    ce = S({
        '../../node_modules/semver/internal/re.js'(E, c) {
            var {
                    MAX_SAFE_COMPONENT_LENGTH: a,
                    MAX_SAFE_BUILD_LENGTH: l,
                    MAX_LENGTH: o,
                } = fe(),
                s = Ee();
            E = c.exports = {};
            var u = (E.re = []),
                v = (E.safeRe = []),
                r = (E.src = []),
                t = (E.t = {}),
                L = 0,
                n = '[a-zA-Z0-9-]',
                p = [
                    ['\\s', 1],
                    ['\\d', o],
                    [n, l],
                ],
                m = (R) => {
                    for (let [y, C] of p)
                        R = R.split(`${y}*`)
                            .join(`${y}{0,${C}}`)
                            .split(`${y}+`)
                            .join(`${y}{1,${C}}`);
                    return R;
                },
                i = (R, y, C) => {
                    let x = m(y),
                        F = L++;
                    s(R, F, y),
                        (t[R] = F),
                        (r[F] = y),
                        (u[F] = new RegExp(y, C ? 'g' : void 0)),
                        (v[F] = new RegExp(x, C ? 'g' : void 0));
                };
            i('NUMERICIDENTIFIER', '0|[1-9]\\d*'),
                i('NUMERICIDENTIFIERLOOSE', '\\d+'),
                i('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${n}*`),
                i(
                    'MAINVERSION',
                    `(${r[t.NUMERICIDENTIFIER]})\\.(${r[t.NUMERICIDENTIFIER]})\\.(${r[t.NUMERICIDENTIFIER]})`
                ),
                i(
                    'MAINVERSIONLOOSE',
                    `(${r[t.NUMERICIDENTIFIERLOOSE]})\\.(${r[t.NUMERICIDENTIFIERLOOSE]})\\.(${r[t.NUMERICIDENTIFIERLOOSE]})`
                ),
                i(
                    'PRERELEASEIDENTIFIER',
                    `(?:${r[t.NUMERICIDENTIFIER]}|${r[t.NONNUMERICIDENTIFIER]})`
                ),
                i(
                    'PRERELEASEIDENTIFIERLOOSE',
                    `(?:${r[t.NUMERICIDENTIFIERLOOSE]}|${r[t.NONNUMERICIDENTIFIER]})`
                ),
                i(
                    'PRERELEASE',
                    `(?:-(${r[t.PRERELEASEIDENTIFIER]}(?:\\.${r[t.PRERELEASEIDENTIFIER]})*))`
                ),
                i(
                    'PRERELEASELOOSE',
                    `(?:-?(${r[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${r[t.PRERELEASEIDENTIFIERLOOSE]})*))`
                ),
                i('BUILDIDENTIFIER', `${n}+`),
                i(
                    'BUILD',
                    `(?:\\+(${r[t.BUILDIDENTIFIER]}(?:\\.${r[t.BUILDIDENTIFIER]})*))`
                ),
                i(
                    'FULLPLAIN',
                    `v?${r[t.MAINVERSION]}${r[t.PRERELEASE]}?${r[t.BUILD]}?`
                ),
                i('FULL', `^${r[t.FULLPLAIN]}$`),
                i(
                    'LOOSEPLAIN',
                    `[v=\\s]*${r[t.MAINVERSIONLOOSE]}${r[t.PRERELEASELOOSE]}?${r[t.BUILD]}?`
                ),
                i('LOOSE', `^${r[t.LOOSEPLAIN]}$`),
                i('GTLT', '((?:<|>)?=?)'),
                i(
                    'XRANGEIDENTIFIERLOOSE',
                    `${r[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`
                ),
                i('XRANGEIDENTIFIER', `${r[t.NUMERICIDENTIFIER]}|x|X|\\*`),
                i(
                    'XRANGEPLAIN',
                    `[v=\\s]*(${r[t.XRANGEIDENTIFIER]})(?:\\.(${r[t.XRANGEIDENTIFIER]})(?:\\.(${r[t.XRANGEIDENTIFIER]})(?:${r[t.PRERELEASE]})?${r[t.BUILD]}?)?)?`
                ),
                i(
                    'XRANGEPLAINLOOSE',
                    `[v=\\s]*(${r[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${r[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${r[t.XRANGEIDENTIFIERLOOSE]})(?:${r[t.PRERELEASELOOSE]})?${r[t.BUILD]}?)?)?`
                ),
                i('XRANGE', `^${r[t.GTLT]}\\s*${r[t.XRANGEPLAIN]}$`),
                i('XRANGELOOSE', `^${r[t.GTLT]}\\s*${r[t.XRANGEPLAINLOOSE]}$`),
                i(
                    'COERCEPLAIN',
                    `(^|[^\\d])(\\d{1,${a}})(?:\\.(\\d{1,${a}}))?(?:\\.(\\d{1,${a}}))?`
                ),
                i('COERCE', `${r[t.COERCEPLAIN]}(?:$|[^\\d])`),
                i(
                    'COERCEFULL',
                    r[t.COERCEPLAIN] +
                        `(?:${r[t.PRERELEASE]})?(?:${r[t.BUILD]})?(?:$|[^\\d])`
                ),
                i('COERCERTL', r[t.COERCE], !0),
                i('COERCERTLFULL', r[t.COERCEFULL], !0),
                i('LONETILDE', '(?:~>?)'),
                i('TILDETRIM', `(\\s*)${r[t.LONETILDE]}\\s+`, !0),
                (E.tildeTrimReplace = '$1~'),
                i('TILDE', `^${r[t.LONETILDE]}${r[t.XRANGEPLAIN]}$`),
                i('TILDELOOSE', `^${r[t.LONETILDE]}${r[t.XRANGEPLAINLOOSE]}$`),
                i('LONECARET', '(?:\\^)'),
                i('CARETTRIM', `(\\s*)${r[t.LONECARET]}\\s+`, !0),
                (E.caretTrimReplace = '$1^'),
                i('CARET', `^${r[t.LONECARET]}${r[t.XRANGEPLAIN]}$`),
                i('CARETLOOSE', `^${r[t.LONECARET]}${r[t.XRANGEPLAINLOOSE]}$`),
                i(
                    'COMPARATORLOOSE',
                    `^${r[t.GTLT]}\\s*(${r[t.LOOSEPLAIN]})$|^$`
                ),
                i('COMPARATOR', `^${r[t.GTLT]}\\s*(${r[t.FULLPLAIN]})$|^$`),
                i(
                    'COMPARATORTRIM',
                    `(\\s*)${r[t.GTLT]}\\s*(${r[t.LOOSEPLAIN]}|${r[t.XRANGEPLAIN]})`,
                    !0
                ),
                (E.comparatorTrimReplace = '$1$2$3'),
                i(
                    'HYPHENRANGE',
                    `^\\s*(${r[t.XRANGEPLAIN]})\\s+-\\s+(${r[t.XRANGEPLAIN]})\\s*$`
                ),
                i(
                    'HYPHENRANGELOOSE',
                    `^\\s*(${r[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${r[t.XRANGEPLAINLOOSE]})\\s*$`
                ),
                i('STAR', '(<|>)?=?\\s*\\*'),
                i('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$'),
                i('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
        },
    }),
    we = S({
        '../../node_modules/semver/internal/parse-options.js'(E, c) {
            var a = Object.freeze({ loose: !0 }),
                l = Object.freeze({}),
                o = (s) => (s ? (typeof s != 'object' ? a : s) : l);
            c.exports = o;
        },
    }),
    Xe = S({
        '../../node_modules/semver/internal/identifiers.js'(E, c) {
            var a = /^[0-9]+$/,
                l = (s, u) => {
                    let v = a.test(s),
                        r = a.test(u);
                    return (
                        v && r && ((s = +s), (u = +u)),
                        s === u
                            ? 0
                            : v && !r
                              ? -1
                              : r && !v
                                ? 1
                                : s < u
                                  ? -1
                                  : 1
                    );
                },
                o = (s, u) => l(u, s);
            c.exports = { compareIdentifiers: l, rcompareIdentifiers: o };
        },
    }),
    W = S({
        '../../node_modules/semver/classes/semver.js'(E, c) {
            var a = Ee(),
                { MAX_LENGTH: l, MAX_SAFE_INTEGER: o } = fe(),
                { safeRe: s, t: u } = ce(),
                v = we(),
                { compareIdentifiers: r } = Xe(),
                t = class Z {
                    constructor(n, p) {
                        if (((p = v(p)), n instanceof Z)) {
                            if (
                                n.loose === !!p.loose &&
                                n.includePrerelease === !!p.includePrerelease
                            )
                                return n;
                            n = n.version;
                        } else if (typeof n != 'string')
                            throw new TypeError(
                                `Invalid version. Must be a string. Got type "${typeof n}".`
                            );
                        if (n.length > l)
                            throw new TypeError(
                                `version is longer than ${l} characters`
                            );
                        a('SemVer', n, p),
                            (this.options = p),
                            (this.loose = !!p.loose),
                            (this.includePrerelease = !!p.includePrerelease);
                        let m = n
                            .trim()
                            .match(p.loose ? s[u.LOOSE] : s[u.FULL]);
                        if (!m) throw new TypeError(`Invalid Version: ${n}`);
                        if (
                            ((this.raw = n),
                            (this.major = +m[1]),
                            (this.minor = +m[2]),
                            (this.patch = +m[3]),
                            this.major > o || this.major < 0)
                        )
                            throw new TypeError('Invalid major version');
                        if (this.minor > o || this.minor < 0)
                            throw new TypeError('Invalid minor version');
                        if (this.patch > o || this.patch < 0)
                            throw new TypeError('Invalid patch version');
                        m[4]
                            ? (this.prerelease = m[4].split('.').map((i) => {
                                  if (/^[0-9]+$/.test(i)) {
                                      let R = +i;
                                      if (R >= 0 && R < o) return R;
                                  }
                                  return i;
                              }))
                            : (this.prerelease = []),
                            (this.build = m[5] ? m[5].split('.') : []),
                            this.format();
                    }
                    format() {
                        return (
                            (this.version = `${this.major}.${this.minor}.${this.patch}`),
                            this.prerelease.length &&
                                (this.version += `-${this.prerelease.join('.')}`),
                            this.version
                        );
                    }
                    toString() {
                        return this.version;
                    }
                    compare(n) {
                        if (
                            (a('SemVer.compare', this.version, this.options, n),
                            !(n instanceof Z))
                        ) {
                            if (typeof n == 'string' && n === this.version)
                                return 0;
                            n = new Z(n, this.options);
                        }
                        return n.version === this.version
                            ? 0
                            : this.compareMain(n) || this.comparePre(n);
                    }
                    compareMain(n) {
                        return (
                            n instanceof Z || (n = new Z(n, this.options)),
                            r(this.major, n.major) ||
                                r(this.minor, n.minor) ||
                                r(this.patch, n.patch)
                        );
                    }
                    comparePre(n) {
                        if (
                            (n instanceof Z || (n = new Z(n, this.options)),
                            this.prerelease.length && !n.prerelease.length)
                        )
                            return -1;
                        if (!this.prerelease.length && n.prerelease.length)
                            return 1;
                        if (!this.prerelease.length && !n.prerelease.length)
                            return 0;
                        let p = 0;
                        do {
                            let m = this.prerelease[p],
                                i = n.prerelease[p];
                            if (
                                (a('prerelease compare', p, m, i),
                                m === void 0 && i === void 0)
                            )
                                return 0;
                            if (i === void 0) return 1;
                            if (m === void 0) return -1;
                            if (m !== i) return r(m, i);
                        } while (++p);
                    }
                    compareBuild(n) {
                        n instanceof Z || (n = new Z(n, this.options));
                        let p = 0;
                        do {
                            let m = this.build[p],
                                i = n.build[p];
                            if (
                                (a('build compare', p, m, i),
                                m === void 0 && i === void 0)
                            )
                                return 0;
                            if (i === void 0) return 1;
                            if (m === void 0) return -1;
                            if (m !== i) return r(m, i);
                        } while (++p);
                    }
                    inc(n, p, m) {
                        switch (n) {
                            case 'premajor':
                                (this.prerelease.length = 0),
                                    (this.patch = 0),
                                    (this.minor = 0),
                                    this.major++,
                                    this.inc('pre', p, m);
                                break;
                            case 'preminor':
                                (this.prerelease.length = 0),
                                    (this.patch = 0),
                                    this.minor++,
                                    this.inc('pre', p, m);
                                break;
                            case 'prepatch':
                                (this.prerelease.length = 0),
                                    this.inc('patch', p, m),
                                    this.inc('pre', p, m);
                                break;
                            case 'prerelease':
                                this.prerelease.length === 0 &&
                                    this.inc('patch', p, m),
                                    this.inc('pre', p, m);
                                break;
                            case 'major':
                                (this.minor !== 0 ||
                                    this.patch !== 0 ||
                                    this.prerelease.length === 0) &&
                                    this.major++,
                                    (this.minor = 0),
                                    (this.patch = 0),
                                    (this.prerelease = []);
                                break;
                            case 'minor':
                                (this.patch !== 0 ||
                                    this.prerelease.length === 0) &&
                                    this.minor++,
                                    (this.patch = 0),
                                    (this.prerelease = []);
                                break;
                            case 'patch':
                                this.prerelease.length === 0 && this.patch++,
                                    (this.prerelease = []);
                                break;
                            case 'pre': {
                                let i = Number(m) ? 1 : 0;
                                if (!p && m === !1)
                                    throw new Error(
                                        'invalid increment argument: identifier is empty'
                                    );
                                if (this.prerelease.length === 0)
                                    this.prerelease = [i];
                                else {
                                    let R = this.prerelease.length;
                                    for (; --R >= 0; )
                                        typeof this.prerelease[R] == 'number' &&
                                            (this.prerelease[R]++, (R = -2));
                                    if (R === -1) {
                                        if (
                                            p === this.prerelease.join('.') &&
                                            m === !1
                                        )
                                            throw new Error(
                                                'invalid increment argument: identifier already exists'
                                            );
                                        this.prerelease.push(i);
                                    }
                                }
                                if (p) {
                                    let R = [p, i];
                                    m === !1 && (R = [p]),
                                        r(this.prerelease[0], p) === 0
                                            ? isNaN(this.prerelease[1]) &&
                                              (this.prerelease = R)
                                            : (this.prerelease = R);
                                }
                                break;
                            }
                            default:
                                throw new Error(
                                    `invalid increment argument: ${n}`
                                );
                        }
                        return (
                            (this.raw = this.format()),
                            this.build.length &&
                                (this.raw += `+${this.build.join('.')}`),
                            this
                        );
                    }
                };
            c.exports = t;
        },
    }),
    ne = S({
        '../../node_modules/semver/functions/parse.js'(E, c) {
            var a = W(),
                l = (o, s, u = !1) => {
                    if (o instanceof a) return o;
                    try {
                        return new a(o, s);
                    } catch (v) {
                        if (!u) return null;
                        throw v;
                    }
                };
            c.exports = l;
        },
    }),
    cr = S({
        '../../node_modules/semver/functions/valid.js'(E, c) {
            var a = ne(),
                l = (o, s) => {
                    let u = a(o, s);
                    return u ? u.version : null;
                };
            c.exports = l;
        },
    }),
    mr = S({
        '../../node_modules/semver/functions/clean.js'(E, c) {
            var a = ne(),
                l = (o, s) => {
                    let u = a(o.trim().replace(/^[=v]+/, ''), s);
                    return u ? u.version : null;
                };
            c.exports = l;
        },
    }),
    hr = S({
        '../../node_modules/semver/functions/inc.js'(E, c) {
            var a = W(),
                l = (o, s, u, v, r) => {
                    typeof u == 'string' && ((r = v), (v = u), (u = void 0));
                    try {
                        return new a(o instanceof a ? o.version : o, u).inc(
                            s,
                            v,
                            r
                        ).version;
                    } catch {
                        return null;
                    }
                };
            c.exports = l;
        },
    }),
    dr = S({
        '../../node_modules/semver/functions/diff.js'(E, c) {
            var a = ne(),
                l = (o, s) => {
                    let u = a(o, null, !0),
                        v = a(s, null, !0),
                        r = u.compare(v);
                    if (r === 0) return null;
                    let t = r > 0,
                        L = t ? u : v,
                        n = t ? v : u,
                        p = !!L.prerelease.length;
                    if (n.prerelease.length && !p)
                        return !n.patch && !n.minor
                            ? 'major'
                            : L.patch
                              ? 'patch'
                              : L.minor
                                ? 'minor'
                                : 'major';
                    let m = p ? 'pre' : '';
                    return u.major !== v.major
                        ? m + 'major'
                        : u.minor !== v.minor
                          ? m + 'minor'
                          : u.patch !== v.patch
                            ? m + 'patch'
                            : 'prerelease';
                };
            c.exports = l;
        },
    }),
    fr = S({
        '../../node_modules/semver/functions/major.js'(E, c) {
            var a = W(),
                l = (o, s) => new a(o, s).major;
            c.exports = l;
        },
    }),
    Er = S({
        '../../node_modules/semver/functions/minor.js'(E, c) {
            var a = W(),
                l = (o, s) => new a(o, s).minor;
            c.exports = l;
        },
    }),
    vr = S({
        '../../node_modules/semver/functions/patch.js'(E, c) {
            var a = W(),
                l = (o, s) => new a(o, s).patch;
            c.exports = l;
        },
    }),
    Rr = S({
        '../../node_modules/semver/functions/prerelease.js'(E, c) {
            var a = ne(),
                l = (o, s) => {
                    let u = a(o, s);
                    return u && u.prerelease.length ? u.prerelease : null;
                };
            c.exports = l;
        },
    }),
    K = S({
        '../../node_modules/semver/functions/compare.js'(E, c) {
            var a = W(),
                l = (o, s, u) => new a(o, u).compare(new a(s, u));
            c.exports = l;
        },
    }),
    gr = S({
        '../../node_modules/semver/functions/rcompare.js'(E, c) {
            var a = K(),
                l = (o, s, u) => a(s, o, u);
            c.exports = l;
        },
    }),
    Ir = S({
        '../../node_modules/semver/functions/compare-loose.js'(E, c) {
            var a = K(),
                l = (o, s) => a(o, s, !0);
            c.exports = l;
        },
    }),
    Ne = S({
        '../../node_modules/semver/functions/compare-build.js'(E, c) {
            var a = W(),
                l = (o, s, u) => {
                    let v = new a(o, u),
                        r = new a(s, u);
                    return v.compare(r) || v.compareBuild(r);
                };
            c.exports = l;
        },
    }),
    $r = S({
        '../../node_modules/semver/functions/sort.js'(E, c) {
            var a = Ne(),
                l = (o, s) => o.sort((u, v) => a(u, v, s));
            c.exports = l;
        },
    }),
    _r = S({
        '../../node_modules/semver/functions/rsort.js'(E, c) {
            var a = Ne(),
                l = (o, s) => o.sort((u, v) => a(v, u, s));
            c.exports = l;
        },
    }),
    ve = S({
        '../../node_modules/semver/functions/gt.js'(E, c) {
            var a = K(),
                l = (o, s, u) => a(o, s, u) > 0;
            c.exports = l;
        },
    }),
    Oe = S({
        '../../node_modules/semver/functions/lt.js'(E, c) {
            var a = K(),
                l = (o, s, u) => a(o, s, u) < 0;
            c.exports = l;
        },
    }),
    Ve = S({
        '../../node_modules/semver/functions/eq.js'(E, c) {
            var a = K(),
                l = (o, s, u) => a(o, s, u) === 0;
            c.exports = l;
        },
    }),
    Ye = S({
        '../../node_modules/semver/functions/neq.js'(E, c) {
            var a = K(),
                l = (o, s, u) => a(o, s, u) !== 0;
            c.exports = l;
        },
    }),
    Se = S({
        '../../node_modules/semver/functions/gte.js'(E, c) {
            var a = K(),
                l = (o, s, u) => a(o, s, u) >= 0;
            c.exports = l;
        },
    }),
    ye = S({
        '../../node_modules/semver/functions/lte.js'(E, c) {
            var a = K(),
                l = (o, s, u) => a(o, s, u) <= 0;
            c.exports = l;
        },
    }),
    We = S({
        '../../node_modules/semver/functions/cmp.js'(E, c) {
            var a = Ve(),
                l = Ye(),
                o = ve(),
                s = Se(),
                u = Oe(),
                v = ye(),
                r = (t, L, n, p) => {
                    switch (L) {
                        case '===':
                            return (
                                typeof t == 'object' && (t = t.version),
                                typeof n == 'object' && (n = n.version),
                                t === n
                            );
                        case '!==':
                            return (
                                typeof t == 'object' && (t = t.version),
                                typeof n == 'object' && (n = n.version),
                                t !== n
                            );
                        case '':
                        case '=':
                        case '==':
                            return a(t, n, p);
                        case '!=':
                            return l(t, n, p);
                        case '>':
                            return o(t, n, p);
                        case '>=':
                            return s(t, n, p);
                        case '<':
                            return u(t, n, p);
                        case '<=':
                            return v(t, n, p);
                        default:
                            throw new TypeError(`Invalid operator: ${L}`);
                    }
                };
            c.exports = r;
        },
    }),
    Lr = S({
        '../../node_modules/semver/functions/coerce.js'(E, c) {
            var a = W(),
                l = ne(),
                { safeRe: o, t: s } = ce(),
                u = (v, r) => {
                    if (v instanceof a) return v;
                    if (
                        (typeof v == 'number' && (v = String(v)),
                        typeof v != 'string')
                    )
                        return null;
                    r = r || {};
                    let t = null;
                    if (!r.rtl)
                        t = v.match(
                            r.includePrerelease ? o[s.COERCEFULL] : o[s.COERCE]
                        );
                    else {
                        let R = r.includePrerelease
                                ? o[s.COERCERTLFULL]
                                : o[s.COERCERTL],
                            y;
                        for (
                            ;
                            (y = R.exec(v)) &&
                            (!t || t.index + t[0].length !== v.length);

                        )
                            (!t ||
                                y.index + y[0].length !==
                                    t.index + t[0].length) &&
                                (t = y),
                                (R.lastIndex =
                                    y.index + y[1].length + y[2].length);
                        R.lastIndex = -1;
                    }
                    if (t === null) return null;
                    let L = t[2],
                        n = t[3] || '0',
                        p = t[4] || '0',
                        m = r.includePrerelease && t[5] ? `-${t[5]}` : '',
                        i = r.includePrerelease && t[6] ? `+${t[6]}` : '';
                    return l(`${L}.${n}.${p}${m}${i}`, r);
                };
            c.exports = u;
        },
    }),
    Tr = S({
        '../../node_modules/semver/internal/lrucache.js'(E, c) {
            var a = class {
                constructor() {
                    (this.max = 1e3), (this.map = new Map());
                }
                get(l) {
                    let o = this.map.get(l);
                    if (o !== void 0)
                        return this.map.delete(l), this.map.set(l, o), o;
                }
                delete(l) {
                    return this.map.delete(l);
                }
                set(l, o) {
                    if (!this.delete(l) && o !== void 0) {
                        if (this.map.size >= this.max) {
                            let s = this.map.keys().next().value;
                            this.delete(s);
                        }
                        this.map.set(l, o);
                    }
                    return this;
                }
            };
            c.exports = a;
        },
    }),
    z = S({
        '../../node_modules/semver/classes/range.js'(E, c) {
            var a = /\s+/g,
                l = class de {
                    constructor(f, $) {
                        if ((($ = u($)), f instanceof de))
                            return f.loose === !!$.loose &&
                                f.includePrerelease === !!$.includePrerelease
                                ? f
                                : new de(f.raw, $);
                        if (f instanceof v)
                            return (
                                (this.raw = f.value),
                                (this.set = [[f]]),
                                (this.formatted = void 0),
                                this
                            );
                        if (
                            ((this.options = $),
                            (this.loose = !!$.loose),
                            (this.includePrerelease = !!$.includePrerelease),
                            (this.raw = f.trim().replace(a, ' ')),
                            (this.set = this.raw
                                .split('||')
                                .map((I) => this.parseRange(I.trim()))
                                .filter((I) => I.length)),
                            !this.set.length)
                        )
                            throw new TypeError(
                                `Invalid SemVer Range: ${this.raw}`
                            );
                        if (this.set.length > 1) {
                            let I = this.set[0];
                            if (
                                ((this.set = this.set.filter((T) => !C(T[0]))),
                                this.set.length === 0)
                            )
                                this.set = [I];
                            else if (this.set.length > 1) {
                                for (let T of this.set)
                                    if (T.length === 1 && x(T[0])) {
                                        this.set = [T];
                                        break;
                                    }
                            }
                        }
                        this.formatted = void 0;
                    }
                    get range() {
                        if (this.formatted === void 0) {
                            this.formatted = '';
                            for (let f = 0; f < this.set.length; f++) {
                                f > 0 && (this.formatted += '||');
                                let $ = this.set[f];
                                for (let I = 0; I < $.length; I++)
                                    I > 0 && (this.formatted += ' '),
                                        (this.formatted +=
                                            $[I].toString().trim());
                            }
                        }
                        return this.formatted;
                    }
                    format() {
                        return this.range;
                    }
                    toString() {
                        return this.range;
                    }
                    parseRange(f) {
                        let $ =
                                ((this.options.includePrerelease && R) |
                                    (this.options.loose && y)) +
                                ':' +
                                f,
                            I = s.get($);
                        if (I) return I;
                        let T = this.options.loose,
                            _ = T ? L[n.HYPHENRANGELOOSE] : L[n.HYPHENRANGE];
                        (f = f.replace(_, oe(this.options.includePrerelease))),
                            r('hyphen replace', f),
                            (f = f.replace(L[n.COMPARATORTRIM], p)),
                            r('comparator trim', f),
                            (f = f.replace(L[n.TILDETRIM], m)),
                            r('tilde trim', f),
                            (f = f.replace(L[n.CARETTRIM], i)),
                            r('caret trim', f);
                        let w = f
                            .split(' ')
                            .map((b) => H(b, this.options))
                            .join(' ')
                            .split(/\s+/)
                            .map((b) => ie(b, this.options));
                        T &&
                            (w = w.filter(
                                (b) => (
                                    r('loose invalid filter', b, this.options),
                                    !!b.match(L[n.COMPARATORLOOSE])
                                )
                            )),
                            r('range list', w);
                        let D = new Map(),
                            A = w.map((b) => new v(b, this.options));
                        for (let b of A) {
                            if (C(b)) return [b];
                            D.set(b.value, b);
                        }
                        D.size > 1 && D.has('') && D.delete('');
                        let j = [...D.values()];
                        return s.set($, j), j;
                    }
                    intersects(f, $) {
                        if (!(f instanceof de))
                            throw new TypeError('a Range is required');
                        return this.set.some(
                            (I) =>
                                F(I, $) &&
                                f.set.some(
                                    (T) =>
                                        F(T, $) &&
                                        I.every((_) =>
                                            T.every((w) => _.intersects(w, $))
                                        )
                                )
                        );
                    }
                    test(f) {
                        if (!f) return !1;
                        if (typeof f == 'string')
                            try {
                                f = new t(f, this.options);
                            } catch {
                                return !1;
                            }
                        for (let $ = 0; $ < this.set.length; $++)
                            if (le(this.set[$], f, this.options)) return !0;
                        return !1;
                    }
                };
            c.exports = l;
            var o = Tr(),
                s = new o(),
                u = we(),
                v = Re(),
                r = Ee(),
                t = W(),
                {
                    safeRe: L,
                    t: n,
                    comparatorTrimReplace: p,
                    tildeTrimReplace: m,
                    caretTrimReplace: i,
                } = ce(),
                { FLAG_INCLUDE_PRERELEASE: R, FLAG_LOOSE: y } = fe(),
                C = (g) => g.value === '<0.0.0-0',
                x = (g) => g.value === '',
                F = (g, f) => {
                    let $ = !0,
                        I = g.slice(),
                        T = I.pop();
                    for (; $ && I.length; )
                        ($ = I.every((_) => T.intersects(_, f))), (T = I.pop());
                    return $;
                },
                H = (g, f) => (
                    r('comp', g, f),
                    (g = M(g, f)),
                    r('caret', g),
                    (g = B(g, f)),
                    r('tildes', g),
                    (g = O(g, f)),
                    r('xrange', g),
                    (g = ae(g, f)),
                    r('stars', g),
                    g
                ),
                q = (g) => !g || g.toLowerCase() === 'x' || g === '*',
                B = (g, f) =>
                    g
                        .trim()
                        .split(/\s+/)
                        .map(($) => Y($, f))
                        .join(' '),
                Y = (g, f) => {
                    let $ = f.loose ? L[n.TILDELOOSE] : L[n.TILDE];
                    return g.replace($, (I, T, _, w, D) => {
                        r('tilde', g, I, T, _, w, D);
                        let A;
                        return (
                            q(T)
                                ? (A = '')
                                : q(_)
                                  ? (A = `>=${T}.0.0 <${+T + 1}.0.0-0`)
                                  : q(w)
                                    ? (A = `>=${T}.${_}.0 <${T}.${+_ + 1}.0-0`)
                                    : D
                                      ? (r('replaceTilde pr', D),
                                        (A = `>=${T}.${_}.${w}-${D} <${T}.${+_ + 1}.0-0`))
                                      : (A = `>=${T}.${_}.${w} <${T}.${+_ + 1}.0-0`),
                            r('tilde return', A),
                            A
                        );
                    });
                },
                M = (g, f) =>
                    g
                        .trim()
                        .split(/\s+/)
                        .map(($) => X($, f))
                        .join(' '),
                X = (g, f) => {
                    r('caret', g, f);
                    let $ = f.loose ? L[n.CARETLOOSE] : L[n.CARET],
                        I = f.includePrerelease ? '-0' : '';
                    return g.replace($, (T, _, w, D, A) => {
                        r('caret', g, T, _, w, D, A);
                        let j;
                        return (
                            q(_)
                                ? (j = '')
                                : q(w)
                                  ? (j = `>=${_}.0.0${I} <${+_ + 1}.0.0-0`)
                                  : q(D)
                                    ? _ === '0'
                                        ? (j = `>=${_}.${w}.0${I} <${_}.${+w + 1}.0-0`)
                                        : (j = `>=${_}.${w}.0${I} <${+_ + 1}.0.0-0`)
                                    : A
                                      ? (r('replaceCaret pr', A),
                                        _ === '0'
                                            ? w === '0'
                                                ? (j = `>=${_}.${w}.${D}-${A} <${_}.${w}.${+D + 1}-0`)
                                                : (j = `>=${_}.${w}.${D}-${A} <${_}.${+w + 1}.0-0`)
                                            : (j = `>=${_}.${w}.${D}-${A} <${+_ + 1}.0.0-0`))
                                      : (r('no pr'),
                                        _ === '0'
                                            ? w === '0'
                                                ? (j = `>=${_}.${w}.${D}${I} <${_}.${w}.${+D + 1}-0`)
                                                : (j = `>=${_}.${w}.${D}${I} <${_}.${+w + 1}.0-0`)
                                            : (j = `>=${_}.${w}.${D} <${+_ + 1}.0.0-0`)),
                            r('caret return', j),
                            j
                        );
                    });
                },
                O = (g, f) => (
                    r('replaceXRanges', g, f),
                    g
                        .split(/\s+/)
                        .map(($) => re($, f))
                        .join(' ')
                ),
                re = (g, f) => {
                    g = g.trim();
                    let $ = f.loose ? L[n.XRANGELOOSE] : L[n.XRANGE];
                    return g.replace($, (I, T, _, w, D, A) => {
                        r('xRange', g, I, T, _, w, D, A);
                        let j = q(_),
                            b = j || q(w),
                            Q = b || q(D),
                            te = Q;
                        return (
                            T === '=' && te && (T = ''),
                            (A = f.includePrerelease ? '-0' : ''),
                            j
                                ? T === '>' || T === '<'
                                    ? (I = '<0.0.0-0')
                                    : (I = '*')
                                : T && te
                                  ? (b && (w = 0),
                                    (D = 0),
                                    T === '>'
                                        ? ((T = '>='),
                                          b
                                              ? ((_ = +_ + 1), (w = 0), (D = 0))
                                              : ((w = +w + 1), (D = 0)))
                                        : T === '<=' &&
                                          ((T = '<'),
                                          b ? (_ = +_ + 1) : (w = +w + 1)),
                                    T === '<' && (A = '-0'),
                                    (I = `${T + _}.${w}.${D}${A}`))
                                  : b
                                    ? (I = `>=${_}.0.0${A} <${+_ + 1}.0.0-0`)
                                    : Q &&
                                      (I = `>=${_}.${w}.0${A} <${_}.${+w + 1}.0-0`),
                            r('xRange return', I),
                            I
                        );
                    });
                },
                ae = (g, f) => (
                    r('replaceStars', g, f), g.trim().replace(L[n.STAR], '')
                ),
                ie = (g, f) => (
                    r('replaceGTE0', g, f),
                    g
                        .trim()
                        .replace(
                            L[f.includePrerelease ? n.GTE0PRE : n.GTE0],
                            ''
                        )
                ),
                oe = (g) => (f, $, I, T, _, w, D, A, j, b, Q, te) => (
                    q(I)
                        ? ($ = '')
                        : q(T)
                          ? ($ = `>=${I}.0.0${g ? '-0' : ''}`)
                          : q(_)
                            ? ($ = `>=${I}.${T}.0${g ? '-0' : ''}`)
                            : w
                              ? ($ = `>=${$}`)
                              : ($ = `>=${$}${g ? '-0' : ''}`),
                    q(j)
                        ? (A = '')
                        : q(b)
                          ? (A = `<${+j + 1}.0.0-0`)
                          : q(Q)
                            ? (A = `<${j}.${+b + 1}.0-0`)
                            : te
                              ? (A = `<=${j}.${b}.${Q}-${te}`)
                              : g
                                ? (A = `<${j}.${b}.${+Q + 1}-0`)
                                : (A = `<=${A}`),
                    `${$} ${A}`.trim()
                ),
                le = (g, f, $) => {
                    for (let I = 0; I < g.length; I++)
                        if (!g[I].test(f)) return !1;
                    if (f.prerelease.length && !$.includePrerelease) {
                        for (let I = 0; I < g.length; I++)
                            if (
                                (r(g[I].semver),
                                g[I].semver !== v.ANY &&
                                    g[I].semver.prerelease.length > 0)
                            ) {
                                let T = g[I].semver;
                                if (
                                    T.major === f.major &&
                                    T.minor === f.minor &&
                                    T.patch === f.patch
                                )
                                    return !0;
                            }
                        return !1;
                    }
                    return !0;
                };
        },
    }),
    Re = S({
        '../../node_modules/semver/classes/comparator.js'(E, c) {
            var a = Symbol('SemVer ANY'),
                l = class Te {
                    static get ANY() {
                        return a;
                    }
                    constructor(p, m) {
                        if (((m = o(m)), p instanceof Te)) {
                            if (p.loose === !!m.loose) return p;
                            p = p.value;
                        }
                        (p = p.trim().split(/\s+/).join(' ')),
                            r('comparator', p, m),
                            (this.options = m),
                            (this.loose = !!m.loose),
                            this.parse(p),
                            this.semver === a
                                ? (this.value = '')
                                : (this.value =
                                      this.operator + this.semver.version),
                            r('comp', this);
                    }
                    parse(p) {
                        let m = this.options.loose
                                ? s[u.COMPARATORLOOSE]
                                : s[u.COMPARATOR],
                            i = p.match(m);
                        if (!i) throw new TypeError(`Invalid comparator: ${p}`);
                        (this.operator = i[1] !== void 0 ? i[1] : ''),
                            this.operator === '=' && (this.operator = ''),
                            i[2]
                                ? (this.semver = new t(
                                      i[2],
                                      this.options.loose
                                  ))
                                : (this.semver = a);
                    }
                    toString() {
                        return this.value;
                    }
                    test(p) {
                        if (
                            (r('Comparator.test', p, this.options.loose),
                            this.semver === a || p === a)
                        )
                            return !0;
                        if (typeof p == 'string')
                            try {
                                p = new t(p, this.options);
                            } catch {
                                return !1;
                            }
                        return v(p, this.operator, this.semver, this.options);
                    }
                    intersects(p, m) {
                        if (!(p instanceof Te))
                            throw new TypeError('a Comparator is required');
                        return this.operator === ''
                            ? this.value === ''
                                ? !0
                                : new L(p.value, m).test(this.value)
                            : p.operator === ''
                              ? p.value === ''
                                  ? !0
                                  : new L(this.value, m).test(p.semver)
                              : ((m = o(m)),
                                (m.includePrerelease &&
                                    (this.value === '<0.0.0-0' ||
                                        p.value === '<0.0.0-0')) ||
                                (!m.includePrerelease &&
                                    (this.value.startsWith('<0.0.0') ||
                                        p.value.startsWith('<0.0.0')))
                                    ? !1
                                    : !!(
                                          (this.operator.startsWith('>') &&
                                              p.operator.startsWith('>')) ||
                                          (this.operator.startsWith('<') &&
                                              p.operator.startsWith('<')) ||
                                          (this.semver.version ===
                                              p.semver.version &&
                                              this.operator.includes('=') &&
                                              p.operator.includes('=')) ||
                                          (v(this.semver, '<', p.semver, m) &&
                                              this.operator.startsWith('>') &&
                                              p.operator.startsWith('<')) ||
                                          (v(this.semver, '>', p.semver, m) &&
                                              this.operator.startsWith('<') &&
                                              p.operator.startsWith('>'))
                                      ));
                    }
                };
            c.exports = l;
            var o = we(),
                { safeRe: s, t: u } = ce(),
                v = We(),
                r = Ee(),
                t = W(),
                L = z();
        },
    }),
    ge = S({
        '../../node_modules/semver/functions/satisfies.js'(E, c) {
            var a = z(),
                l = (o, s, u) => {
                    try {
                        s = new a(s, u);
                    } catch {
                        return !1;
                    }
                    return s.test(o);
                };
            c.exports = l;
        },
    }),
    wr = S({
        '../../node_modules/semver/ranges/to-comparators.js'(E, c) {
            var a = z(),
                l = (o, s) =>
                    new a(o, s).set.map((u) =>
                        u
                            .map((v) => v.value)
                            .join(' ')
                            .trim()
                            .split(' ')
                    );
            c.exports = l;
        },
    }),
    Nr = S({
        '../../node_modules/semver/ranges/max-satisfying.js'(E, c) {
            var a = W(),
                l = z(),
                o = (s, u, v) => {
                    let r = null,
                        t = null,
                        L = null;
                    try {
                        L = new l(u, v);
                    } catch {
                        return null;
                    }
                    return (
                        s.forEach((n) => {
                            L.test(n) &&
                                (!r || t.compare(n) === -1) &&
                                ((r = n), (t = new a(r, v)));
                        }),
                        r
                    );
                };
            c.exports = o;
        },
    }),
    Or = S({
        '../../node_modules/semver/ranges/min-satisfying.js'(E, c) {
            var a = W(),
                l = z(),
                o = (s, u, v) => {
                    let r = null,
                        t = null,
                        L = null;
                    try {
                        L = new l(u, v);
                    } catch {
                        return null;
                    }
                    return (
                        s.forEach((n) => {
                            L.test(n) &&
                                (!r || t.compare(n) === 1) &&
                                ((r = n), (t = new a(r, v)));
                        }),
                        r
                    );
                };
            c.exports = o;
        },
    }),
    Sr = S({
        '../../node_modules/semver/ranges/min-version.js'(E, c) {
            var a = W(),
                l = z(),
                o = ve(),
                s = (u, v) => {
                    u = new l(u, v);
                    let r = new a('0.0.0');
                    if (u.test(r) || ((r = new a('0.0.0-0')), u.test(r)))
                        return r;
                    r = null;
                    for (let t = 0; t < u.set.length; ++t) {
                        let L = u.set[t],
                            n = null;
                        L.forEach((p) => {
                            let m = new a(p.semver.version);
                            switch (p.operator) {
                                case '>':
                                    m.prerelease.length === 0
                                        ? m.patch++
                                        : m.prerelease.push(0),
                                        (m.raw = m.format());
                                case '':
                                case '>=':
                                    (!n || o(m, n)) && (n = m);
                                    break;
                                case '<':
                                case '<=':
                                    break;
                                default:
                                    throw new Error(
                                        `Unexpected operation: ${p.operator}`
                                    );
                            }
                        }),
                            n && (!r || o(r, n)) && (r = n);
                    }
                    return r && u.test(r) ? r : null;
                };
            c.exports = s;
        },
    }),
    yr = S({
        '../../node_modules/semver/ranges/valid.js'(E, c) {
            var a = z(),
                l = (o, s) => {
                    try {
                        return new a(o, s).range || '*';
                    } catch {
                        return null;
                    }
                };
            c.exports = l;
        },
    }),
    Ae = S({
        '../../node_modules/semver/ranges/outside.js'(E, c) {
            var a = W(),
                l = Re(),
                { ANY: o } = l,
                s = z(),
                u = ge(),
                v = ve(),
                r = Oe(),
                t = ye(),
                L = Se(),
                n = (p, m, i, R) => {
                    (p = new a(p, R)), (m = new s(m, R));
                    let y, C, x, F, H;
                    switch (i) {
                        case '>':
                            (y = v), (C = t), (x = r), (F = '>'), (H = '>=');
                            break;
                        case '<':
                            (y = r), (C = L), (x = v), (F = '<'), (H = '<=');
                            break;
                        default:
                            throw new TypeError(
                                'Must provide a hilo val of "<" or ">"'
                            );
                    }
                    if (u(p, m, R)) return !1;
                    for (let q = 0; q < m.set.length; ++q) {
                        let B = m.set[q],
                            Y = null,
                            M = null;
                        if (
                            (B.forEach((X) => {
                                X.semver === o && (X = new l('>=0.0.0')),
                                    (Y = Y || X),
                                    (M = M || X),
                                    y(X.semver, Y.semver, R)
                                        ? (Y = X)
                                        : x(X.semver, M.semver, R) && (M = X);
                            }),
                            Y.operator === F ||
                                Y.operator === H ||
                                ((!M.operator || M.operator === F) &&
                                    C(p, M.semver)) ||
                                (M.operator === H && x(p, M.semver)))
                        )
                            return !1;
                    }
                    return !0;
                };
            c.exports = n;
        },
    }),
    Ar = S({
        '../../node_modules/semver/ranges/gtr.js'(E, c) {
            var a = Ae(),
                l = (o, s, u) => a(o, s, '>', u);
            c.exports = l;
        },
    }),
    Cr = S({
        '../../node_modules/semver/ranges/ltr.js'(E, c) {
            var a = Ae(),
                l = (o, s, u) => a(o, s, '<', u);
            c.exports = l;
        },
    }),
    xr = S({
        '../../node_modules/semver/ranges/intersects.js'(E, c) {
            var a = z(),
                l = (o, s, u) => (
                    (o = new a(o, u)), (s = new a(s, u)), o.intersects(s, u)
                );
            c.exports = l;
        },
    }),
    Dr = S({
        '../../node_modules/semver/ranges/simplify.js'(E, c) {
            var a = ge(),
                l = K();
            c.exports = (o, s, u) => {
                let v = [],
                    r = null,
                    t = null,
                    L = o.sort((i, R) => l(i, R, u));
                for (let i of L)
                    a(i, s, u)
                        ? ((t = i), r || (r = i))
                        : (t && v.push([r, t]), (t = null), (r = null));
                r && v.push([r, null]);
                let n = [];
                for (let [i, R] of v)
                    i === R
                        ? n.push(i)
                        : !R && i === L[0]
                          ? n.push('*')
                          : R
                            ? i === L[0]
                                ? n.push(`<=${R}`)
                                : n.push(`${i} - ${R}`)
                            : n.push(`>=${i}`);
                let p = n.join(' || '),
                    m = typeof s.raw == 'string' ? s.raw : String(s);
                return p.length < m.length ? p : s;
            };
        },
    }),
    Pr = S({
        '../../node_modules/semver/ranges/subset.js'(E, c) {
            var a = z(),
                l = Re(),
                { ANY: o } = l,
                s = ge(),
                u = K(),
                v = (m, i, R = {}) => {
                    if (m === i) return !0;
                    (m = new a(m, R)), (i = new a(i, R));
                    let y = !1;
                    e: for (let C of m.set) {
                        for (let x of i.set) {
                            let F = L(C, x, R);
                            if (((y = y || F !== null), F)) continue e;
                        }
                        if (y) return !1;
                    }
                    return !0;
                },
                r = [new l('>=0.0.0-0')],
                t = [new l('>=0.0.0')],
                L = (m, i, R) => {
                    if (m === i) return !0;
                    if (m.length === 1 && m[0].semver === o) {
                        if (i.length === 1 && i[0].semver === o) return !0;
                        R.includePrerelease ? (m = r) : (m = t);
                    }
                    if (i.length === 1 && i[0].semver === o) {
                        if (R.includePrerelease) return !0;
                        i = t;
                    }
                    let y = new Set(),
                        C,
                        x;
                    for (let O of m)
                        O.operator === '>' || O.operator === '>='
                            ? (C = n(C, O, R))
                            : O.operator === '<' || O.operator === '<='
                              ? (x = p(x, O, R))
                              : y.add(O.semver);
                    if (y.size > 1) return null;
                    let F;
                    if (
                        C &&
                        x &&
                        ((F = u(C.semver, x.semver, R)),
                        F > 0 ||
                            (F === 0 &&
                                (C.operator !== '>=' || x.operator !== '<=')))
                    )
                        return null;
                    for (let O of y) {
                        if (
                            (C && !s(O, String(C), R)) ||
                            (x && !s(O, String(x), R))
                        )
                            return null;
                        for (let re of i) if (!s(O, String(re), R)) return !1;
                        return !0;
                    }
                    let H,
                        q,
                        B,
                        Y,
                        M =
                            x &&
                            !R.includePrerelease &&
                            x.semver.prerelease.length
                                ? x.semver
                                : !1,
                        X =
                            C &&
                            !R.includePrerelease &&
                            C.semver.prerelease.length
                                ? C.semver
                                : !1;
                    M &&
                        M.prerelease.length === 1 &&
                        x.operator === '<' &&
                        M.prerelease[0] === 0 &&
                        (M = !1);
                    for (let O of i) {
                        if (
                            ((Y =
                                Y || O.operator === '>' || O.operator === '>='),
                            (B =
                                B || O.operator === '<' || O.operator === '<='),
                            C)
                        ) {
                            if (
                                (X &&
                                    O.semver.prerelease &&
                                    O.semver.prerelease.length &&
                                    O.semver.major === X.major &&
                                    O.semver.minor === X.minor &&
                                    O.semver.patch === X.patch &&
                                    (X = !1),
                                O.operator === '>' || O.operator === '>=')
                            ) {
                                if (((H = n(C, O, R)), H === O && H !== C))
                                    return !1;
                            } else if (
                                C.operator === '>=' &&
                                !s(C.semver, String(O), R)
                            )
                                return !1;
                        }
                        if (x) {
                            if (
                                (M &&
                                    O.semver.prerelease &&
                                    O.semver.prerelease.length &&
                                    O.semver.major === M.major &&
                                    O.semver.minor === M.minor &&
                                    O.semver.patch === M.patch &&
                                    (M = !1),
                                O.operator === '<' || O.operator === '<=')
                            ) {
                                if (((q = p(x, O, R)), q === O && q !== x))
                                    return !1;
                            } else if (
                                x.operator === '<=' &&
                                !s(x.semver, String(O), R)
                            )
                                return !1;
                        }
                        if (!O.operator && (x || C) && F !== 0) return !1;
                    }
                    return !(
                        (C && B && !x && F !== 0) ||
                        (x && Y && !C && F !== 0) ||
                        X ||
                        M
                    );
                },
                n = (m, i, R) => {
                    if (!m) return i;
                    let y = u(m.semver, i.semver, R);
                    return y > 0
                        ? m
                        : y < 0 || (i.operator === '>' && m.operator === '>=')
                          ? i
                          : m;
                },
                p = (m, i, R) => {
                    if (!m) return i;
                    let y = u(m.semver, i.semver, R);
                    return y < 0
                        ? m
                        : y > 0 || (i.operator === '<' && m.operator === '<=')
                          ? i
                          : m;
                };
            c.exports = v;
        },
    }),
    jr = S({
        '../../node_modules/semver/index.js'(E, c) {
            var a = ce(),
                l = fe(),
                o = W(),
                s = Xe(),
                u = ne(),
                v = cr(),
                r = mr(),
                t = hr(),
                L = dr(),
                n = fr(),
                p = Er(),
                m = vr(),
                i = Rr(),
                R = K(),
                y = gr(),
                C = Ir(),
                x = Ne(),
                F = $r(),
                H = _r(),
                q = ve(),
                B = Oe(),
                Y = Ve(),
                M = Ye(),
                X = Se(),
                O = ye(),
                re = We(),
                ae = Lr(),
                ie = Re(),
                oe = z(),
                le = ge(),
                g = wr(),
                f = Nr(),
                $ = Or(),
                I = Sr(),
                T = yr(),
                _ = Ae(),
                w = Ar(),
                D = Cr(),
                A = xr(),
                j = Dr(),
                b = Pr();
            c.exports = {
                parse: u,
                valid: v,
                clean: r,
                inc: t,
                diff: L,
                major: n,
                minor: p,
                patch: m,
                prerelease: i,
                compare: R,
                rcompare: y,
                compareLoose: C,
                compareBuild: x,
                sort: F,
                rsort: H,
                gt: q,
                lt: B,
                eq: Y,
                neq: M,
                gte: X,
                lte: O,
                cmp: re,
                coerce: ae,
                Comparator: ie,
                Range: oe,
                satisfies: le,
                toComparators: g,
                maxSatisfying: f,
                minSatisfying: $,
                minVersion: I,
                validRange: T,
                outside: _,
                gtr: w,
                ltr: D,
                intersects: A,
                simplifyRange: j,
                subset: b,
                SemVer: o,
                re: a.re,
                src: a.src,
                tokens: a.t,
                SEMVER_SPEC_VERSION: l.SEMVER_SPEC_VERSION,
                RELEASE_TYPES: l.RELEASE_TYPES,
                compareIdentifiers: s.compareIdentifiers,
                rcompareIdentifiers: s.rcompareIdentifiers,
            };
        },
    }),
    br = {};
nr(br, {
    decorators: () => Xr,
    mount: () => Gr,
    parameters: () => Mr,
    render: () => Ur,
    renderToCanvas: () => qr,
});
var Ge = ar(jr()),
    Ur = (E, c) => {
        let { id: a, component: l } = c;
        if (!l)
            throw new Error(
                `Unable to render story ${a} as the component annotation is missing from the default export`
            );
        return pe.createElement(l, { ...E });
    };
function kr() {
    return globalThis.IS_REACT_ACT_ENVIRONMENT;
}
var { FRAMEWORK_OPTIONS: Le } = pr,
    Fr = class extends J.Component {
        constructor() {
            super(...arguments), (this.state = { hasError: !1 });
        }
        static getDerivedStateFromError() {
            return { hasError: !0 };
        }
        componentDidMount() {
            let { hasError: E } = this.state,
                { showMain: c } = this.props;
            E || c();
        }
        componentDidCatch(E) {
            let { showException: c } = this.props;
            c(E);
        }
        render() {
            let { hasError: E } = this.state,
                { children: c } = this.props;
            return E ? null : c;
        }
    },
    Me = Le != null && Le.strictMode ? J.StrictMode : J.Fragment;
async function qr(
    {
        storyContext: E,
        unboundStoryFn: c,
        showMain: a,
        showException: l,
        forceRemount: o,
    },
    s
) {
    var n, p;
    let { renderElement: u, unmountElement: v } = await sr(
            async () => {
                const { renderElement: m, unmountElement: i } = await import(
                    './react-18-D38Bl2r8.js'
                );
                return { renderElement: m, unmountElement: i };
            },
            __vite__mapDeps([0, 1, 2]),
            import.meta.url
        ),
        r = c,
        t = kr()
            ? pe.createElement(r, { ...E })
            : pe.createElement(
                  Fr,
                  { showMain: a, showException: l },
                  pe.createElement(r, { ...E })
              ),
        L = Me ? pe.createElement(Me, null, t) : t;
    return (
        o && v(s),
        await u(
            L,
            s,
            (p =
                (n = E == null ? void 0 : E.parameters) == null
                    ? void 0
                    : n.react) == null
                ? void 0
                : p.rootOptions
        ),
        () => v(s)
    );
}
var Gr = (E) => async (c) => (
        c != null && (E.originalStoryFn = () => c),
        await E.renderToCanvas(),
        E.canvas
    ),
    Mr = { renderer: 'react' },
    Xr = [
        (E, c) => {
            var o, s;
            if (
                !(
                    (s = (o = c.parameters) == null ? void 0 : o.react) !=
                        null && s.rsc
                )
            )
                return J.createElement(E, null);
            let a = Ge.default.major(J.version),
                l = Ge.default.minor(J.version);
            if (a < 18 || (a === 18 && l < 3))
                throw new Error(
                    'React Server Components require React >= 18.3'
                );
            return J.createElement(J.Suspense, null, J.createElement(E, null));
        },
    ];
export {
    Xr as decorators,
    Gr as mount,
    Mr as parameters,
    Ur as render,
    qr as renderToCanvas,
};
