try {
    (() => {
        var so = Object.create;
        var Dt = Object.defineProperty;
        var lo = Object.getOwnPropertyDescriptor;
        var co = Object.getOwnPropertyNames;
        var uo = Object.getPrototypeOf,
            fo = Object.prototype.hasOwnProperty;
        var se = (e, t) => () => (e && (t = e((e = 0))), t);
        var po = (e, t) => () => (
                t || e((t = { exports: {} }).exports, t), t.exports
            ),
            ho = (e, t) => {
                for (var n in t) Dt(e, n, { get: t[n], enumerable: !0 });
            },
            yo = (e, t, n, r) => {
                if ((t && typeof t == 'object') || typeof t == 'function')
                    for (let o of co(t))
                        !fo.call(e, o) &&
                            o !== n &&
                            Dt(e, o, {
                                get: () => t[o],
                                enumerable: !(r = lo(t, o)) || r.enumerable,
                            });
                return e;
            };
        var mo = (e, t, n) => (
            (n = e != null ? so(uo(e)) : {}),
            yo(
                t || !e || !e.__esModule
                    ? Dt(n, 'default', { value: e, enumerable: !0 })
                    : n,
                e
            )
        );
        var Q = se(() => {});
        var X = se(() => {});
        var J = se(() => {});
        var y,
            Xs,
            Ne,
            Js,
            Zs,
            el,
            tl,
            pn,
            nl,
            rl,
            ol,
            q,
            il,
            al,
            dn,
            hn,
            yn,
            sl,
            ll,
            cl,
            ze,
            ul,
            fl,
            pl,
            fe,
            dl,
            hl,
            yl,
            ml,
            gl,
            bl,
            vl,
            pe,
            El,
            Ol,
            wl,
            qe = se(() => {
                Q();
                X();
                J();
                (y = __REACT__),
                    ({
                        Children: Xs,
                        Component: Ne,
                        Fragment: Js,
                        Profiler: Zs,
                        PureComponent: el,
                        StrictMode: tl,
                        Suspense: pn,
                        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: nl,
                        cloneElement: rl,
                        createContext: ol,
                        createElement: q,
                        createFactory: il,
                        createRef: al,
                        forwardRef: dn,
                        isValidElement: hn,
                        lazy: yn,
                        memo: sl,
                        startTransition: ll,
                        unstable_act: cl,
                        useCallback: ze,
                        useContext: ul,
                        useDebugValue: fl,
                        useDeferredValue: pl,
                        useEffect: fe,
                        useId: dl,
                        useImperativeHandle: hl,
                        useInsertionEffect: yl,
                        useLayoutEffect: ml,
                        useMemo: gl,
                        useReducer: bl,
                        useRef: vl,
                        useState: pe,
                        useSyncExternalStore: El,
                        useTransition: Ol,
                        version: wl,
                    } = __REACT__);
            });
        var ke,
            Cl,
            $e,
            Pl,
            Rl,
            _l,
            xl,
            Al,
            Nl,
            mn,
            kl,
            gn,
            Ml,
            dt = se(() => {
                Q();
                X();
                J();
                (ke = __REACT_DOM__),
                    ({
                        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Cl,
                        createPortal: $e,
                        createRoot: Pl,
                        findDOMNode: Rl,
                        flushSync: _l,
                        hydrate: xl,
                        hydrateRoot: Al,
                        render: Nl,
                        unmountComponentAtNode: mn,
                        unstable_batchedUpdates: kl,
                        unstable_renderSubtreeIntoContainer: gn,
                        version: Ml,
                    } = __REACT_DOM__);
            });
        var Fl,
            Bl,
            Wl,
            Ul,
            Hl,
            Gl,
            Yl,
            zl,
            ql,
            $l,
            Vl,
            Kl,
            Ql,
            Xl,
            Jl,
            Zl,
            ec,
            tc,
            nc,
            rc,
            oc,
            ic,
            ac,
            sc,
            lc,
            cc,
            bn,
            uc,
            fc,
            pc,
            dc,
            hc,
            yc,
            mc,
            gc,
            bc,
            vc,
            Ec,
            Oc,
            wc,
            Sc,
            Tc,
            Ic,
            Cc,
            Pc,
            Rc,
            _c,
            vn,
            xc,
            Ac,
            Nc,
            kc,
            Mc,
            Lc,
            jc,
            Dc,
            Fc,
            Bc,
            Wc,
            Uc,
            Hc,
            Gc,
            Yc,
            En = se(() => {
                Q();
                X();
                J();
                (Fl = __STORYBOOK_CORE_EVENTS__),
                    ({
                        ARGTYPES_INFO_REQUEST: Bl,
                        ARGTYPES_INFO_RESPONSE: Wl,
                        CHANNEL_CREATED: Ul,
                        CHANNEL_WS_DISCONNECT: Hl,
                        CONFIG_ERROR: Gl,
                        CREATE_NEW_STORYFILE_REQUEST: Yl,
                        CREATE_NEW_STORYFILE_RESPONSE: zl,
                        CURRENT_STORY_WAS_SET: ql,
                        DOCS_PREPARED: $l,
                        DOCS_RENDERED: Vl,
                        FILE_COMPONENT_SEARCH_REQUEST: Kl,
                        FILE_COMPONENT_SEARCH_RESPONSE: Ql,
                        FORCE_REMOUNT: Xl,
                        FORCE_RE_RENDER: Jl,
                        GLOBALS_UPDATED: Zl,
                        NAVIGATE_URL: ec,
                        PLAY_FUNCTION_THREW_EXCEPTION: tc,
                        PRELOAD_ENTRIES: nc,
                        PREVIEW_BUILDER_PROGRESS: rc,
                        PREVIEW_KEYDOWN: oc,
                        REGISTER_SUBSCRIPTION: ic,
                        REQUEST_WHATS_NEW_DATA: ac,
                        RESET_STORY_ARGS: sc,
                        RESULT_WHATS_NEW_DATA: lc,
                        SAVE_STORY_REQUEST: cc,
                        SAVE_STORY_RESPONSE: bn,
                        SELECT_STORY: uc,
                        SET_CONFIG: fc,
                        SET_CURRENT_STORY: pc,
                        SET_FILTER: dc,
                        SET_GLOBALS: hc,
                        SET_INDEX: yc,
                        SET_STORIES: mc,
                        SET_WHATS_NEW_CACHE: gc,
                        SHARED_STATE_CHANGED: bc,
                        SHARED_STATE_SET: vc,
                        STORIES_COLLAPSE_ALL: Ec,
                        STORIES_EXPAND_ALL: Oc,
                        STORY_ARGS_UPDATED: wc,
                        STORY_CHANGED: Sc,
                        STORY_ERRORED: Tc,
                        STORY_INDEX_INVALIDATED: Ic,
                        STORY_MISSING: Cc,
                        STORY_PREPARED: Pc,
                        STORY_RENDERED: Rc,
                        STORY_RENDER_PHASE_CHANGED: _c,
                        STORY_SPECIFIED: vn,
                        STORY_THREW_EXCEPTION: xc,
                        STORY_UNCHANGED: Ac,
                        TELEMETRY_ERROR: Nc,
                        TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: kc,
                        TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: Mc,
                        TESTING_MODULE_CRASH_REPORT: Lc,
                        TESTING_MODULE_PROGRESS_REPORT: jc,
                        TESTING_MODULE_RUN_ALL_REQUEST: Dc,
                        TESTING_MODULE_RUN_REQUEST: Fc,
                        TESTING_MODULE_WATCH_MODE_REQUEST: Bc,
                        TOGGLE_WHATS_NEW_NOTIFICATIONS: Wc,
                        UNHANDLED_ERRORS_WHILE_PLAYING: Uc,
                        UPDATE_GLOBALS: Hc,
                        UPDATE_QUERY_PARAMS: Gc,
                        UPDATE_STORY_ARGS: Yc,
                    } = __STORYBOOK_CORE_EVENTS__);
            });
        var Ft = se(() => {
            Q();
            X();
            J();
            En();
        });
        var ju,
            Du,
            Fu,
            Bu,
            Wu,
            Uu,
            Hu,
            Gu,
            Yu,
            zu,
            qu,
            $u,
            Vu,
            Ku,
            Qu,
            Xu,
            Ju,
            Zu,
            ef,
            tf,
            nf,
            rf,
            of,
            af,
            wn,
            sf,
            lf,
            cf,
            uf,
            ff,
            pf,
            df,
            hf,
            yf,
            mf,
            gf,
            bf,
            vf,
            Ef,
            Of,
            wf,
            Sf,
            Tf,
            If,
            Cf,
            Sn,
            Pf,
            Rf,
            _f,
            xf,
            Af,
            Nf,
            kf,
            Mf,
            Lf,
            jf,
            Df,
            Ff,
            Bf,
            Wf,
            Uf,
            Hf,
            Gf,
            Yf,
            zf,
            qf,
            $f,
            Vf,
            Kf,
            Tn = se(() => {
                Q();
                X();
                J();
                (ju = __STORYBOOK_COMPONENTS__),
                    ({
                        A: Du,
                        ActionBar: Fu,
                        AddonPanel: Bu,
                        Badge: Wu,
                        Bar: Uu,
                        Blockquote: Hu,
                        Button: Gu,
                        ClipboardCode: Yu,
                        Code: zu,
                        DL: qu,
                        Div: $u,
                        DocumentWrapper: Vu,
                        EmptyTabContent: Ku,
                        ErrorFormatter: Qu,
                        FlexBar: Xu,
                        Form: Ju,
                        H1: Zu,
                        H2: ef,
                        H3: tf,
                        H4: nf,
                        H5: rf,
                        H6: of,
                        HR: af,
                        IconButton: wn,
                        IconButtonSkeleton: sf,
                        Icons: lf,
                        Img: cf,
                        LI: uf,
                        Link: ff,
                        ListItem: pf,
                        Loader: df,
                        Modal: hf,
                        OL: yf,
                        P: mf,
                        Placeholder: gf,
                        Pre: bf,
                        ResetWrapper: vf,
                        ScrollArea: Ef,
                        Separator: Of,
                        Spaced: wf,
                        Span: Sf,
                        StorybookIcon: Tf,
                        StorybookLogo: If,
                        Symbols: Cf,
                        SyntaxHighlighter: Sn,
                        TT: Pf,
                        TabBar: Rf,
                        TabButton: _f,
                        TabWrapper: xf,
                        Table: Af,
                        Tabs: Nf,
                        TabsState: kf,
                        TooltipLinkList: Mf,
                        TooltipMessage: Lf,
                        TooltipNote: jf,
                        UL: Df,
                        WithTooltip: Ff,
                        WithTooltipPure: Bf,
                        Zoom: Wf,
                        codeCommon: Uf,
                        components: Hf,
                        createCopyToClipboardFunction: Gf,
                        getStoryHref: Yf,
                        icons: zf,
                        interleaveSeparators: qf,
                        nameSpaceClassNames: $f,
                        resetComponents: Vf,
                        withReset: Kf,
                    } = __STORYBOOK_COMPONENTS__);
            });
        var ep,
            tp,
            np,
            rp,
            Bt,
            op,
            ht,
            Wt,
            ip,
            ap,
            sp,
            lp,
            cp,
            up,
            fp,
            pp,
            dp,
            hp,
            Ve,
            yp,
            te,
            In,
            mp,
            Cn,
            gp,
            Pn = se(() => {
                Q();
                X();
                J();
                (ep = __STORYBOOK_THEMING__),
                    ({
                        CacheProvider: tp,
                        ClassNames: np,
                        Global: rp,
                        ThemeProvider: Bt,
                        background: op,
                        color: ht,
                        convert: Wt,
                        create: ip,
                        createCache: ap,
                        createGlobal: sp,
                        createReset: lp,
                        css: cp,
                        darken: up,
                        ensure: fp,
                        ignoreSsrWarning: pp,
                        isPropValid: dp,
                        jsx: hp,
                        keyframes: Ve,
                        lighten: yp,
                        styled: te,
                        themes: In,
                        typography: mp,
                        useTheme: Cn,
                        withTheme: gp,
                    } = __STORYBOOK_THEMING__);
            });
        var _n = po((wp, Rn) => {
            'use strict';
            Q();
            X();
            J();
            var yt = {
                linear: function (e, t, n, r) {
                    var o = n - t;
                    return (o * e) / r + t;
                },
                easeInQuad: function (e, t, n, r) {
                    var o = n - t;
                    return o * (e /= r) * e + t;
                },
                easeOutQuad: function (e, t, n, r) {
                    var o = n - t;
                    return -o * (e /= r) * (e - 2) + t;
                },
                easeInOutQuad: function (e, t, n, r) {
                    var o = n - t;
                    return (e /= r / 2) < 1
                        ? (o / 2) * e * e + t
                        : (-o / 2) * (--e * (e - 2) - 1) + t;
                },
                easeInCubic: function (e, t, n, r) {
                    var o = n - t;
                    return o * (e /= r) * e * e + t;
                },
                easeOutCubic: function (e, t, n, r) {
                    var o = n - t;
                    return o * ((e = e / r - 1) * e * e + 1) + t;
                },
                easeInOutCubic: function (e, t, n, r) {
                    var o = n - t;
                    return (e /= r / 2) < 1
                        ? (o / 2) * e * e * e + t
                        : (o / 2) * ((e -= 2) * e * e + 2) + t;
                },
                easeInQuart: function (e, t, n, r) {
                    var o = n - t;
                    return o * (e /= r) * e * e * e + t;
                },
                easeOutQuart: function (e, t, n, r) {
                    var o = n - t;
                    return -o * ((e = e / r - 1) * e * e * e - 1) + t;
                },
                easeInOutQuart: function (e, t, n, r) {
                    var o = n - t;
                    return (e /= r / 2) < 1
                        ? (o / 2) * e * e * e * e + t
                        : (-o / 2) * ((e -= 2) * e * e * e - 2) + t;
                },
                easeInQuint: function (e, t, n, r) {
                    var o = n - t;
                    return o * (e /= r) * e * e * e * e + t;
                },
                easeOutQuint: function (e, t, n, r) {
                    var o = n - t;
                    return o * ((e = e / r - 1) * e * e * e * e + 1) + t;
                },
                easeInOutQuint: function (e, t, n, r) {
                    var o = n - t;
                    return (e /= r / 2) < 1
                        ? (o / 2) * e * e * e * e * e + t
                        : (o / 2) * ((e -= 2) * e * e * e * e + 2) + t;
                },
                easeInSine: function (e, t, n, r) {
                    var o = n - t;
                    return -o * Math.cos((e / r) * (Math.PI / 2)) + o + t;
                },
                easeOutSine: function (e, t, n, r) {
                    var o = n - t;
                    return o * Math.sin((e / r) * (Math.PI / 2)) + t;
                },
                easeInOutSine: function (e, t, n, r) {
                    var o = n - t;
                    return (-o / 2) * (Math.cos((Math.PI * e) / r) - 1) + t;
                },
                easeInExpo: function (e, t, n, r) {
                    var o = n - t;
                    return e == 0 ? t : o * Math.pow(2, 10 * (e / r - 1)) + t;
                },
                easeOutExpo: function (e, t, n, r) {
                    var o = n - t;
                    return e == r
                        ? t + o
                        : o * (-Math.pow(2, (-10 * e) / r) + 1) + t;
                },
                easeInOutExpo: function (e, t, n, r) {
                    var o = n - t;
                    return e === 0
                        ? t
                        : e === r
                          ? t + o
                          : (e /= r / 2) < 1
                            ? (o / 2) * Math.pow(2, 10 * (e - 1)) + t
                            : (o / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
                },
                easeInCirc: function (e, t, n, r) {
                    var o = n - t;
                    return -o * (Math.sqrt(1 - (e /= r) * e) - 1) + t;
                },
                easeOutCirc: function (e, t, n, r) {
                    var o = n - t;
                    return o * Math.sqrt(1 - (e = e / r - 1) * e) + t;
                },
                easeInOutCirc: function (e, t, n, r) {
                    var o = n - t;
                    return (e /= r / 2) < 1
                        ? (-o / 2) * (Math.sqrt(1 - e * e) - 1) + t
                        : (o / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
                },
                easeInElastic: function (e, t, n, r) {
                    var o = n - t,
                        i,
                        a,
                        s;
                    return (
                        (s = 1.70158),
                        (a = 0),
                        (i = o),
                        e === 0
                            ? t
                            : (e /= r) === 1
                              ? t + o
                              : (a || (a = r * 0.3),
                                i < Math.abs(o)
                                    ? ((i = o), (s = a / 4))
                                    : (s =
                                          (a / (2 * Math.PI)) *
                                          Math.asin(o / i)),
                                -(
                                    i *
                                    Math.pow(2, 10 * (e -= 1)) *
                                    Math.sin(((e * r - s) * (2 * Math.PI)) / a)
                                ) + t)
                    );
                },
                easeOutElastic: function (e, t, n, r) {
                    var o = n - t,
                        i,
                        a,
                        s;
                    return (
                        (s = 1.70158),
                        (a = 0),
                        (i = o),
                        e === 0
                            ? t
                            : (e /= r) === 1
                              ? t + o
                              : (a || (a = r * 0.3),
                                i < Math.abs(o)
                                    ? ((i = o), (s = a / 4))
                                    : (s =
                                          (a / (2 * Math.PI)) *
                                          Math.asin(o / i)),
                                i *
                                    Math.pow(2, -10 * e) *
                                    Math.sin(
                                        ((e * r - s) * (2 * Math.PI)) / a
                                    ) +
                                    o +
                                    t)
                    );
                },
                easeInOutElastic: function (e, t, n, r) {
                    var o = n - t,
                        i,
                        a,
                        s;
                    return (
                        (s = 1.70158),
                        (a = 0),
                        (i = o),
                        e === 0
                            ? t
                            : (e /= r / 2) === 2
                              ? t + o
                              : (a || (a = r * 0.44999999999999996),
                                i < Math.abs(o)
                                    ? ((i = o), (s = a / 4))
                                    : (s =
                                          (a / (2 * Math.PI)) *
                                          Math.asin(o / i)),
                                e < 1
                                    ? -0.5 *
                                          (i *
                                              Math.pow(2, 10 * (e -= 1)) *
                                              Math.sin(
                                                  ((e * r - s) *
                                                      (2 * Math.PI)) /
                                                      a
                                              )) +
                                      t
                                    : i *
                                          Math.pow(2, -10 * (e -= 1)) *
                                          Math.sin(
                                              ((e * r - s) * (2 * Math.PI)) / a
                                          ) *
                                          0.5 +
                                      o +
                                      t)
                    );
                },
                easeInBack: function (e, t, n, r, o) {
                    var i = n - t;
                    return (
                        o === void 0 && (o = 1.70158),
                        i * (e /= r) * e * ((o + 1) * e - o) + t
                    );
                },
                easeOutBack: function (e, t, n, r, o) {
                    var i = n - t;
                    return (
                        o === void 0 && (o = 1.70158),
                        i * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + t
                    );
                },
                easeInOutBack: function (e, t, n, r, o) {
                    var i = n - t;
                    return (
                        o === void 0 && (o = 1.70158),
                        (e /= r / 2) < 1
                            ? (i / 2) * (e * e * (((o *= 1.525) + 1) * e - o)) +
                              t
                            : (i / 2) *
                                  ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) +
                                      2) +
                              t
                    );
                },
                easeInBounce: function (e, t, n, r) {
                    var o = n - t,
                        i;
                    return (i = yt.easeOutBounce(r - e, 0, o, r)), o - i + t;
                },
                easeOutBounce: function (e, t, n, r) {
                    var o = n - t;
                    return (e /= r) < 0.36363636363636365
                        ? o * (7.5625 * e * e) + t
                        : e < 0.7272727272727273
                          ? o *
                                (7.5625 * (e -= 0.5454545454545454) * e +
                                    0.75) +
                            t
                          : e < 0.9090909090909091
                            ? o *
                                  (7.5625 * (e -= 0.8181818181818182) * e +
                                      0.9375) +
                              t
                            : o *
                                  (7.5625 * (e -= 0.9545454545454546) * e +
                                      0.984375) +
                              t;
                },
                easeInOutBounce: function (e, t, n, r) {
                    var o = n - t,
                        i;
                    return e < r / 2
                        ? ((i = yt.easeInBounce(e * 2, 0, o, r)), i * 0.5 + t)
                        : ((i = yt.easeOutBounce(e * 2 - r, 0, o, r)),
                          i * 0.5 + o * 0.5 + t);
                },
            };
            Rn.exports = yt;
        });
        function Ht(e, t) {
            (t == null || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function vo(e) {
            if (Array.isArray(e)) return e;
        }
        function Eo(e) {
            if (Array.isArray(e)) return Ht(e);
        }
        function Oo(e) {
            if (e === void 0)
                throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                );
            return e;
        }
        function wo(e, t, n) {
            return (
                (t = gt(t)),
                _o(
                    e,
                    Nn()
                        ? Reflect.construct(t, n, gt(e).constructor)
                        : t.apply(e, n)
                )
            );
        }
        function bt(e, t) {
            if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
        }
        function So(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(e, kn(r.key), r);
            }
        }
        function vt(e, t, n) {
            return (
                t && So(e.prototype, t),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                e
            );
        }
        function k(e, t, n) {
            return (
                (t = kn(t)) in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        function mt() {
            return (
                (mt = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  ({}).hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                mt.apply(null, arguments)
            );
        }
        function gt(e) {
            return (
                (gt = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      }),
                gt(e)
            );
        }
        function To(e, t) {
            if (typeof t != 'function' && t !== null)
                throw new TypeError(
                    'Super expression must either be null or a function'
                );
            (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
            })),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                t && Gt(e, t);
        }
        function Nn() {
            try {
                var e = !Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                );
            } catch {}
            return (Nn = function () {
                return !!e;
            })();
        }
        function Io(e) {
            if (
                (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
                e['@@iterator'] != null
            )
                return Array.from(e);
        }
        function Co(e, t) {
            var n =
                e == null
                    ? null
                    : (typeof Symbol < 'u' && e[Symbol.iterator]) ||
                      e['@@iterator'];
            if (n != null) {
                var r,
                    o,
                    i,
                    a,
                    s = [],
                    c = !0,
                    l = !1;
                try {
                    if (((i = (n = n.call(e)).next), t !== 0))
                        for (
                            ;
                            !(c = (r = i.call(n)).done) &&
                            (s.push(r.value), s.length !== t);
                            c = !0
                        );
                } catch (f) {
                    (l = !0), (o = f);
                } finally {
                    try {
                        if (
                            !c &&
                            n.return != null &&
                            ((a = n.return()), Object(a) !== a)
                        )
                            return;
                    } finally {
                        if (l) throw o;
                    }
                }
                return s;
            }
        }
        function Po() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Ro() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function xn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function (o) {
                        return Object.getOwnPropertyDescriptor(e, o).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function Ke(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t] != null ? arguments[t] : {};
                t % 2
                    ? xn(Object(n), !0).forEach(function (r) {
                          k(e, r, n[r]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                        )
                      : xn(Object(n)).forEach(function (r) {
                            Object.defineProperty(
                                e,
                                r,
                                Object.getOwnPropertyDescriptor(n, r)
                            );
                        });
            }
            return e;
        }
        function _o(e, t) {
            if (t && (typeof t == 'object' || typeof t == 'function')) return t;
            if (t !== void 0)
                throw new TypeError(
                    'Derived constructors may only return object or undefined'
                );
            return Oo(e);
        }
        function Gt(e, t) {
            return (
                (Gt = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (n, r) {
                          return (n.__proto__ = r), n;
                      }),
                Gt(e, t)
            );
        }
        function xo(e, t) {
            return vo(e) || Co(e, t) || Mn(e, t) || Po();
        }
        function Ao(e) {
            return Eo(e) || Io(e) || Mn(e) || Ro();
        }
        function No(e, t) {
            if (typeof e != 'object' || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (n !== void 0) {
                var r = n.call(e, t || 'default');
                if (typeof r != 'object') return r;
                throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                );
            }
            return (t === 'string' ? String : Number)(e);
        }
        function kn(e) {
            var t = No(e, 'string');
            return typeof t == 'symbol' ? t : t + '';
        }
        function Mn(e, t) {
            if (e) {
                if (typeof e == 'string') return Ht(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                    n === 'Object' && e.constructor && (n = e.constructor.name),
                    n === 'Map' || n === 'Set'
                        ? Array.from(e)
                        : n === 'Arguments' ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? Ht(e, t)
                          : void 0
                );
            }
        }
        function ko(e) {
            return (e * Math.PI) / 180;
        }
        function ae(e, t) {
            return e + Math.random() * (t - e);
        }
        function Mo(e, t) {
            return Math.floor(e + Math.random() * (t - e + 1));
        }
        function Ut(e) {
            var t = {},
                n = {},
                r = {},
                o = [].concat(Ao(Object.keys(Yt)), [
                    'confettiSource',
                    'drawShape',
                    'onConfettiComplete',
                    'frameRate',
                ]),
                i = ['canvasRef'];
            for (var a in e) {
                var s = e[a];
                o.includes(a)
                    ? (t[a] = s)
                    : i.includes(a)
                      ? (i[a] = s)
                      : (r[a] = s);
            }
            return [t, r, n];
        }
        var An,
            Qe,
            Ce,
            Lo,
            jo,
            Yt,
            Do,
            Fo,
            zt,
            Ln,
            jn = se(() => {
                Q();
                X();
                J();
                qe();
                An = mo(_n());
                (function (e) {
                    (e[(e.Circle = 0)] = 'Circle'),
                        (e[(e.Square = 1)] = 'Square'),
                        (e[(e.Strip = 2)] = 'Strip');
                })(Qe || (Qe = {}));
                (function (e) {
                    (e[(e.Positive = 1)] = 'Positive'),
                        (e[(e.Negative = -1)] = 'Negative');
                })(Ce || (Ce = {}));
                (Lo = (function () {
                    function e(t, n, r, o) {
                        bt(this, e),
                            k(this, 'context', void 0),
                            k(this, 'radius', void 0),
                            k(this, 'x', void 0),
                            k(this, 'y', void 0),
                            k(this, 'w', void 0),
                            k(this, 'h', void 0),
                            k(this, 'vx', void 0),
                            k(this, 'vy', void 0),
                            k(this, 'shape', void 0),
                            k(this, 'angle', void 0),
                            k(this, 'angularSpin', void 0),
                            k(this, 'color', void 0),
                            k(this, 'rotateY', void 0),
                            k(this, 'rotationDirection', void 0),
                            k(this, 'getOptions', void 0),
                            (this.getOptions = n);
                        var i = this.getOptions(),
                            a = i.colors,
                            s = i.initialVelocityX,
                            c = i.initialVelocityY;
                        (this.context = t),
                            (this.x = r),
                            (this.y = o),
                            (this.w = ae(5, 20)),
                            (this.h = ae(5, 20)),
                            (this.radius = ae(5, 10)),
                            (this.vx =
                                typeof s == 'number'
                                    ? ae(-s, s)
                                    : ae(s.min, s.max)),
                            (this.vy =
                                typeof c == 'number'
                                    ? ae(-c, 0)
                                    : ae(c.min, c.max)),
                            (this.shape = Mo(0, 2)),
                            (this.angle = ko(ae(0, 360))),
                            (this.angularSpin = ae(-0.2, 0.2)),
                            (this.color =
                                a[Math.floor(Math.random() * a.length)]),
                            (this.rotateY = ae(0, 1)),
                            (this.rotationDirection = ae(0, 1)
                                ? Ce.Positive
                                : Ce.Negative);
                    }
                    return vt(e, [
                        {
                            key: 'update',
                            value: function () {
                                var n = this.getOptions(),
                                    r = n.gravity,
                                    o = n.wind,
                                    i = n.friction,
                                    a = n.opacity,
                                    s = n.drawShape;
                                (this.x += this.vx),
                                    (this.y += this.vy),
                                    (this.vy += r),
                                    (this.vx += o),
                                    (this.vx *= i),
                                    (this.vy *= i),
                                    this.rotateY >= 1 &&
                                    this.rotationDirection === Ce.Positive
                                        ? (this.rotationDirection = Ce.Negative)
                                        : this.rotateY <= -1 &&
                                          this.rotationDirection ===
                                              Ce.Negative &&
                                          (this.rotationDirection =
                                              Ce.Positive);
                                var c = 0.1 * this.rotationDirection;
                                if (
                                    ((this.rotateY += c),
                                    (this.angle += this.angularSpin),
                                    this.context.save(),
                                    this.context.translate(this.x, this.y),
                                    this.context.rotate(this.angle),
                                    this.context.scale(1, this.rotateY),
                                    this.context.rotate(this.angle),
                                    this.context.beginPath(),
                                    (this.context.fillStyle = this.color),
                                    (this.context.strokeStyle = this.color),
                                    (this.context.globalAlpha = a),
                                    (this.context.lineCap = 'round'),
                                    (this.context.lineWidth = 2),
                                    s && typeof s == 'function')
                                )
                                    s.call(this, this.context);
                                else
                                    switch (this.shape) {
                                        case Qe.Circle: {
                                            this.context.beginPath(),
                                                this.context.arc(
                                                    0,
                                                    0,
                                                    this.radius,
                                                    0,
                                                    2 * Math.PI
                                                ),
                                                this.context.fill();
                                            break;
                                        }
                                        case Qe.Square: {
                                            this.context.fillRect(
                                                -this.w / 2,
                                                -this.h / 2,
                                                this.w,
                                                this.h
                                            );
                                            break;
                                        }
                                        case Qe.Strip: {
                                            this.context.fillRect(
                                                -this.w / 6,
                                                -this.h / 2,
                                                this.w / 3,
                                                this.h
                                            );
                                            break;
                                        }
                                    }
                                this.context.closePath(),
                                    this.context.restore();
                            },
                        },
                    ]);
                })()),
                    (jo = vt(function e(t, n) {
                        var r = this;
                        bt(this, e),
                            k(this, 'canvas', void 0),
                            k(this, 'context', void 0),
                            k(this, 'getOptions', void 0),
                            k(this, 'x', 0),
                            k(this, 'y', 0),
                            k(this, 'w', 0),
                            k(this, 'h', 0),
                            k(this, 'lastNumberOfPieces', 0),
                            k(this, 'tweenInitTime', Date.now()),
                            k(this, 'particles', []),
                            k(this, 'particlesGenerated', 0),
                            k(this, 'removeParticleAt', function (i) {
                                r.particles.splice(i, 1);
                            }),
                            k(this, 'getParticle', function () {
                                var i = ae(r.x, r.w + r.x),
                                    a = ae(r.y, r.h + r.y);
                                return new Lo(r.context, r.getOptions, i, a);
                            }),
                            k(this, 'animate', function () {
                                var i = r.canvas,
                                    a = r.context,
                                    s = r.particlesGenerated,
                                    c = r.lastNumberOfPieces,
                                    l = r.getOptions(),
                                    f = l.run,
                                    u = l.recycle,
                                    p = l.numberOfPieces,
                                    d = l.debug,
                                    h = l.tweenFunction,
                                    g = l.tweenDuration;
                                if (!f) return !1;
                                var x = r.particles.length,
                                    b = u ? x : s,
                                    S = Date.now();
                                if (b < p) {
                                    c !== p &&
                                        ((r.tweenInitTime = S),
                                        (r.lastNumberOfPieces = p));
                                    for (
                                        var m = r.tweenInitTime,
                                            O =
                                                S - m > g
                                                    ? g
                                                    : Math.max(0, S - m),
                                            w = h(O, b, p, g),
                                            $ = Math.round(w - b),
                                            N = 0;
                                        N < $;
                                        N++
                                    )
                                        r.particles.push(r.getParticle());
                                    r.particlesGenerated += $;
                                }
                                return (
                                    d &&
                                        ((a.font = '12px sans-serif'),
                                        (a.fillStyle = '#333'),
                                        (a.textAlign = 'right'),
                                        a.fillText(
                                            'Particles: '.concat(x),
                                            i.width - 10,
                                            i.height - 20
                                        )),
                                    r.particles.forEach(function (ee, K) {
                                        ee.update(),
                                            (ee.y > i.height ||
                                                ee.y < -100 ||
                                                ee.x > i.width + 100 ||
                                                ee.x < -100) &&
                                                (u && b <= p
                                                    ? (r.particles[K] =
                                                          r.getParticle())
                                                    : r.removeParticleAt(K));
                                    }),
                                    x > 0 || b < p
                                );
                            }),
                            (this.canvas = t);
                        var o = this.canvas.getContext('2d');
                        if (!o) throw new Error('Could not get canvas context');
                        (this.context = o), (this.getOptions = n);
                    })),
                    (Yt = {
                        width: typeof window < 'u' ? window.innerWidth : 300,
                        height: typeof window < 'u' ? window.innerHeight : 200,
                        numberOfPieces: 200,
                        friction: 0.99,
                        wind: 0,
                        gravity: 0.1,
                        initialVelocityX: 4,
                        initialVelocityY: 10,
                        colors: [
                            '#f44336',
                            '#e91e63',
                            '#9c27b0',
                            '#673ab7',
                            '#3f51b5',
                            '#2196f3',
                            '#03a9f4',
                            '#00bcd4',
                            '#009688',
                            '#4CAF50',
                            '#8BC34A',
                            '#CDDC39',
                            '#FFEB3B',
                            '#FFC107',
                            '#FF9800',
                            '#FF5722',
                            '#795548',
                        ],
                        opacity: 1,
                        debug: !1,
                        tweenFunction: An.easeInOutQuad,
                        tweenDuration: 5e3,
                        recycle: !0,
                        run: !0,
                    }),
                    (Do = (function () {
                        function e(t, n) {
                            var r = this;
                            bt(this, e),
                                k(this, 'canvas', void 0),
                                k(this, 'context', void 0),
                                k(this, '_options', void 0),
                                k(this, 'generator', void 0),
                                k(this, 'rafId', void 0),
                                k(this, 'lastFrameTime', Date.now()),
                                k(this, 'setOptionsWithDefaults', function (i) {
                                    var a = {
                                        confettiSource: {
                                            x: 0,
                                            y: 0,
                                            w: r.canvas.width,
                                            h: 0,
                                        },
                                    };
                                    (r._options = Ke(Ke(Ke({}, a), Yt), i)),
                                        Object.assign(r, i.confettiSource);
                                }),
                                k(this, 'update', function () {
                                    var i = r.options,
                                        a = i.run,
                                        s = i.onConfettiComplete,
                                        c = i.frameRate,
                                        l = r.canvas,
                                        f = r.context;
                                    if (c) {
                                        var u = Date.now(),
                                            p = u - r.lastFrameTime;
                                        if (p < 1e3 / c) {
                                            r.rafId = requestAnimationFrame(
                                                r.update
                                            );
                                            return;
                                        }
                                        r.lastFrameTime = u - (p % c);
                                    }
                                    a &&
                                        ((f.fillStyle = 'white'),
                                        f.clearRect(0, 0, l.width, l.height)),
                                        r.generator.animate()
                                            ? (r.rafId = requestAnimationFrame(
                                                  r.update
                                              ))
                                            : (s &&
                                                  typeof s == 'function' &&
                                                  r.generator
                                                      .particlesGenerated > 0 &&
                                                  s.call(r, r),
                                              (r._options.run = !1));
                                }),
                                k(this, 'reset', function () {
                                    r.generator &&
                                        r.generator.particlesGenerated > 0 &&
                                        ((r.generator.particlesGenerated = 0),
                                        (r.generator.particles = []),
                                        (r.generator.lastNumberOfPieces = 0));
                                }),
                                k(this, 'stop', function () {
                                    (r.options = { run: !1 }),
                                        r.rafId &&
                                            (cancelAnimationFrame(r.rafId),
                                            (r.rafId = void 0));
                                }),
                                (this.canvas = t);
                            var o = this.canvas.getContext('2d');
                            if (!o)
                                throw new Error('Could not get canvas context');
                            (this.context = o),
                                (this.generator = new jo(
                                    this.canvas,
                                    function () {
                                        return r.options;
                                    }
                                )),
                                (this.options = n),
                                this.update();
                        }
                        return vt(e, [
                            {
                                key: 'options',
                                get: function () {
                                    return this._options;
                                },
                                set: function (n) {
                                    var r,
                                        o,
                                        i =
                                            (r = this._options) === null ||
                                            r === void 0
                                                ? void 0
                                                : r.run,
                                        a =
                                            (o = this._options) === null ||
                                            o === void 0
                                                ? void 0
                                                : o.recycle;
                                    this.setOptionsWithDefaults(n),
                                        this.generator &&
                                            (Object.assign(
                                                this.generator,
                                                this.options.confettiSource
                                            ),
                                            typeof n.recycle == 'boolean' &&
                                                n.recycle &&
                                                a === !1 &&
                                                (this.generator.lastNumberOfPieces =
                                                    this.generator.particles.length)),
                                        typeof n.run == 'boolean' &&
                                            n.run &&
                                            i === !1 &&
                                            this.update();
                                },
                            },
                        ]);
                    })()),
                    (Fo = y.createRef()),
                    (zt = (function (e) {
                        function t(n) {
                            var r;
                            return (
                                bt(this, t),
                                (r = wo(this, t, [n])),
                                k(r, 'canvas', y.createRef()),
                                k(r, 'confetti', void 0),
                                (r.canvas = n.canvasRef || Fo),
                                r
                            );
                        }
                        return (
                            To(t, e),
                            vt(t, [
                                {
                                    key: 'componentDidMount',
                                    value: function () {
                                        if (this.canvas.current) {
                                            var r = Ut(this.props)[0];
                                            this.confetti = new Do(
                                                this.canvas.current,
                                                r
                                            );
                                        }
                                    },
                                },
                                {
                                    key: 'componentDidUpdate',
                                    value: function () {
                                        var r = Ut(this.props)[0];
                                        this.confetti &&
                                            (this.confetti.options = r);
                                    },
                                },
                                {
                                    key: 'componentWillUnmount',
                                    value: function () {
                                        this.confetti && this.confetti.stop(),
                                            (this.confetti = void 0);
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function () {
                                        var r = Ut(this.props),
                                            o = xo(r, 2),
                                            i = o[0],
                                            a = o[1],
                                            s = Ke(
                                                {
                                                    zIndex: 2,
                                                    position: 'absolute',
                                                    pointerEvents: 'none',
                                                    top: 0,
                                                    left: 0,
                                                    bottom: 0,
                                                    right: 0,
                                                },
                                                a.style
                                            );
                                        return y.createElement(
                                            'canvas',
                                            mt(
                                                {
                                                    width: i.width,
                                                    height: i.height,
                                                    ref: this.canvas,
                                                },
                                                a,
                                                { style: s }
                                            )
                                        );
                                    },
                                },
                            ])
                        );
                    })(y.Component));
                k(zt, 'defaultProps', Ke({}, Yt));
                k(zt, 'displayName', 'ReactConfetti');
                Ln = y.forwardRef(function (e, t) {
                    return y.createElement(zt, mt({ canvasRef: t }, e));
                });
            });
        var Ap,
            Np,
            kp,
            Mp,
            Lp,
            jp,
            Dp,
            Fp,
            Bp,
            Wp,
            Up,
            Hp,
            Gp,
            Yp,
            Dn,
            zp,
            qp,
            $p,
            Vp,
            Kp,
            Qp,
            Xp,
            Jp,
            Zp,
            ed,
            td,
            nd,
            rd,
            od,
            id,
            ad,
            sd,
            ld,
            cd,
            ud,
            fd,
            pd,
            dd,
            hd,
            yd,
            md,
            gd,
            bd,
            vd,
            Ed,
            Od,
            wd,
            Sd,
            Td,
            Id,
            Cd,
            Pd,
            Rd,
            _d,
            xd,
            Ad,
            Nd,
            kd,
            Md,
            Ld,
            jd,
            Fn,
            Dd,
            Fd,
            Bd,
            Wd,
            Ud,
            Hd,
            Gd,
            Yd,
            zd,
            qd,
            $d,
            Vd,
            Kd,
            Qd,
            Xd,
            Jd,
            Zd,
            eh,
            th,
            nh,
            rh,
            oh,
            ih,
            ah,
            sh,
            lh,
            ch,
            uh,
            fh,
            ph,
            dh,
            hh,
            yh,
            mh,
            gh,
            bh,
            vh,
            Eh,
            Oh,
            wh,
            Sh,
            Th,
            Ih,
            Ch,
            Ph,
            Rh,
            _h,
            xh,
            Ah,
            Nh,
            kh,
            Mh,
            Lh,
            jh,
            Dh,
            Fh,
            Bh,
            Wh,
            Uh,
            Hh,
            Gh,
            Yh,
            zh,
            qh,
            $h,
            Vh,
            Kh,
            Qh,
            Xh,
            Jh,
            Zh,
            ey,
            ty,
            ny,
            ry,
            oy,
            iy,
            ay,
            sy,
            ly,
            cy,
            uy,
            fy,
            py,
            dy,
            hy,
            yy,
            my,
            gy,
            by,
            vy,
            Ey,
            Oy,
            wy,
            Sy,
            Ty,
            Iy,
            Cy,
            Py,
            Ry,
            _y,
            xy,
            Ay,
            Ny,
            ky,
            My,
            Ly,
            jy,
            Dy,
            Fy,
            By,
            Wy,
            Uy,
            Hy,
            Gy,
            Yy,
            zy,
            qy,
            $y,
            Vy,
            Ky,
            Qy,
            Xy,
            Jy,
            Zy,
            em,
            tm,
            nm,
            rm,
            om,
            im,
            am,
            sm,
            lm,
            cm,
            um,
            fm,
            pm,
            dm,
            hm,
            ym,
            mm,
            gm,
            bm,
            vm,
            Em,
            Om,
            wm,
            Sm,
            Tm,
            Im,
            Cm,
            Pm,
            Rm,
            _m,
            xm,
            Am,
            Nm,
            km,
            Mm,
            Lm,
            jm,
            Dm,
            Fm,
            Bm,
            Wm,
            Um,
            Hm,
            Gm,
            Ym,
            zm,
            qm,
            $m,
            Vm,
            Km,
            Qm,
            Xm,
            Jm,
            Zm,
            Bn = se(() => {
                Q();
                X();
                J();
                (Ap = __STORYBOOK_ICONS__),
                    ({
                        AccessibilityAltIcon: Np,
                        AccessibilityIcon: kp,
                        AddIcon: Mp,
                        AdminIcon: Lp,
                        AlertAltIcon: jp,
                        AlertIcon: Dp,
                        AlignLeftIcon: Fp,
                        AlignRightIcon: Bp,
                        AppleIcon: Wp,
                        ArrowBottomLeftIcon: Up,
                        ArrowBottomRightIcon: Hp,
                        ArrowDownIcon: Gp,
                        ArrowLeftIcon: Yp,
                        ArrowRightIcon: Dn,
                        ArrowSolidDownIcon: zp,
                        ArrowSolidLeftIcon: qp,
                        ArrowSolidRightIcon: $p,
                        ArrowSolidUpIcon: Vp,
                        ArrowTopLeftIcon: Kp,
                        ArrowTopRightIcon: Qp,
                        ArrowUpIcon: Xp,
                        AzureDevOpsIcon: Jp,
                        BackIcon: Zp,
                        BasketIcon: ed,
                        BatchAcceptIcon: td,
                        BatchDenyIcon: nd,
                        BeakerIcon: rd,
                        BellIcon: od,
                        BitbucketIcon: id,
                        BoldIcon: ad,
                        BookIcon: sd,
                        BookmarkHollowIcon: ld,
                        BookmarkIcon: cd,
                        BottomBarIcon: ud,
                        BottomBarToggleIcon: fd,
                        BoxIcon: pd,
                        BranchIcon: dd,
                        BrowserIcon: hd,
                        ButtonIcon: yd,
                        CPUIcon: md,
                        CalendarIcon: gd,
                        CameraIcon: bd,
                        CategoryIcon: vd,
                        CertificateIcon: Ed,
                        ChangedIcon: Od,
                        ChatIcon: wd,
                        CheckIcon: Sd,
                        ChevronDownIcon: Td,
                        ChevronLeftIcon: Id,
                        ChevronRightIcon: Cd,
                        ChevronSmallDownIcon: Pd,
                        ChevronSmallLeftIcon: Rd,
                        ChevronSmallRightIcon: _d,
                        ChevronSmallUpIcon: xd,
                        ChevronUpIcon: Ad,
                        ChromaticIcon: Nd,
                        ChromeIcon: kd,
                        CircleHollowIcon: Md,
                        CircleIcon: Ld,
                        ClearIcon: jd,
                        CloseAltIcon: Fn,
                        CloseIcon: Dd,
                        CloudHollowIcon: Fd,
                        CloudIcon: Bd,
                        CogIcon: Wd,
                        CollapseIcon: Ud,
                        CommandIcon: Hd,
                        CommentAddIcon: Gd,
                        CommentIcon: Yd,
                        CommentsIcon: zd,
                        CommitIcon: qd,
                        CompassIcon: $d,
                        ComponentDrivenIcon: Vd,
                        ComponentIcon: Kd,
                        ContrastIcon: Qd,
                        ControlsIcon: Xd,
                        CopyIcon: Jd,
                        CreditIcon: Zd,
                        CrossIcon: eh,
                        DashboardIcon: th,
                        DatabaseIcon: nh,
                        DeleteIcon: rh,
                        DiamondIcon: oh,
                        DirectionIcon: ih,
                        DiscordIcon: ah,
                        DocChartIcon: sh,
                        DocListIcon: lh,
                        DocumentIcon: ch,
                        DownloadIcon: uh,
                        DragIcon: fh,
                        EditIcon: ph,
                        EllipsisIcon: dh,
                        EmailIcon: hh,
                        ExpandAltIcon: yh,
                        ExpandIcon: mh,
                        EyeCloseIcon: gh,
                        EyeIcon: bh,
                        FaceHappyIcon: vh,
                        FaceNeutralIcon: Eh,
                        FaceSadIcon: Oh,
                        FacebookIcon: wh,
                        FailedIcon: Sh,
                        FastForwardIcon: Th,
                        FigmaIcon: Ih,
                        FilterIcon: Ch,
                        FlagIcon: Ph,
                        FolderIcon: Rh,
                        FormIcon: _h,
                        GDriveIcon: xh,
                        GithubIcon: Ah,
                        GitlabIcon: Nh,
                        GlobeIcon: kh,
                        GoogleIcon: Mh,
                        GraphBarIcon: Lh,
                        GraphLineIcon: jh,
                        GraphqlIcon: Dh,
                        GridAltIcon: Fh,
                        GridIcon: Bh,
                        GrowIcon: Wh,
                        HeartHollowIcon: Uh,
                        HeartIcon: Hh,
                        HomeIcon: Gh,
                        HourglassIcon: Yh,
                        InfoIcon: zh,
                        ItalicIcon: qh,
                        JumpToIcon: $h,
                        KeyIcon: Vh,
                        LightningIcon: Kh,
                        LightningOffIcon: Qh,
                        LinkBrokenIcon: Xh,
                        LinkIcon: Jh,
                        LinkedinIcon: Zh,
                        LinuxIcon: ey,
                        ListOrderedIcon: ty,
                        ListUnorderedIcon: ny,
                        LocationIcon: ry,
                        LockIcon: oy,
                        MarkdownIcon: iy,
                        MarkupIcon: ay,
                        MediumIcon: sy,
                        MemoryIcon: ly,
                        MenuIcon: cy,
                        MergeIcon: uy,
                        MirrorIcon: fy,
                        MobileIcon: py,
                        MoonIcon: dy,
                        NutIcon: hy,
                        OutboxIcon: yy,
                        OutlineIcon: my,
                        PaintBrushIcon: gy,
                        PaperClipIcon: by,
                        ParagraphIcon: vy,
                        PassedIcon: Ey,
                        PhoneIcon: Oy,
                        PhotoDragIcon: wy,
                        PhotoIcon: Sy,
                        PinAltIcon: Ty,
                        PinIcon: Iy,
                        PlayAllHollowIcon: Cy,
                        PlayBackIcon: Py,
                        PlayHollowIcon: Ry,
                        PlayIcon: _y,
                        PlayNextIcon: xy,
                        PlusIcon: Ay,
                        PointerDefaultIcon: Ny,
                        PointerHandIcon: ky,
                        PowerIcon: My,
                        PrintIcon: Ly,
                        ProceedIcon: jy,
                        ProfileIcon: Dy,
                        PullRequestIcon: Fy,
                        QuestionIcon: By,
                        RSSIcon: Wy,
                        RedirectIcon: Uy,
                        ReduxIcon: Hy,
                        RefreshIcon: Gy,
                        ReplyIcon: Yy,
                        RepoIcon: zy,
                        RequestChangeIcon: qy,
                        RewindIcon: $y,
                        RulerIcon: Vy,
                        SaveIcon: Ky,
                        SearchIcon: Qy,
                        ShareAltIcon: Xy,
                        ShareIcon: Jy,
                        ShieldIcon: Zy,
                        SideBySideIcon: em,
                        SidebarAltIcon: tm,
                        SidebarAltToggleIcon: nm,
                        SidebarIcon: rm,
                        SidebarToggleIcon: om,
                        SpeakerIcon: im,
                        StackedIcon: am,
                        StarHollowIcon: sm,
                        StarIcon: lm,
                        StatusFailIcon: cm,
                        StatusPassIcon: um,
                        StatusWarnIcon: fm,
                        StickerIcon: pm,
                        StopAltHollowIcon: dm,
                        StopAltIcon: hm,
                        StopIcon: ym,
                        StorybookIcon: mm,
                        StructureIcon: gm,
                        SubtractIcon: bm,
                        SunIcon: vm,
                        SupportIcon: Em,
                        SwitchAltIcon: Om,
                        SyncIcon: wm,
                        TabletIcon: Sm,
                        ThumbsUpIcon: Tm,
                        TimeIcon: Im,
                        TimerIcon: Cm,
                        TransferIcon: Pm,
                        TrashIcon: Rm,
                        TwitterIcon: _m,
                        TypeIcon: xm,
                        UbuntuIcon: Am,
                        UndoIcon: Nm,
                        UnfoldIcon: km,
                        UnlockIcon: Mm,
                        UnpinIcon: Lm,
                        UploadIcon: jm,
                        UserAddIcon: Dm,
                        UserAltIcon: Fm,
                        UserIcon: Bm,
                        UsersIcon: Wm,
                        VSCodeIcon: Um,
                        VerifiedIcon: Hm,
                        VideoIcon: Gm,
                        WandIcon: Ym,
                        WatchIcon: zm,
                        WindowsIcon: qm,
                        WrenchIcon: $m,
                        XIcon: Vm,
                        YoutubeIcon: Km,
                        ZoomIcon: Qm,
                        ZoomOutIcon: Xm,
                        ZoomResetIcon: Jm,
                        iconList: Zm,
                    } = __STORYBOOK_ICONS__);
            });
        var io = {};
        ho(io, { default: () => Hs });
        function Zo({
            top: e = 0,
            left: t = 0,
            width: n = window.innerWidth,
            height: r = window.innerHeight,
            colors: o = [
                '#CA90FF',
                '#FC521F',
                '#66BF3C',
                '#FF4785',
                '#FFAE00',
                '#1EA7FD',
            ],
            ...i
        }) {
            let [a] = pe(() => {
                let s = document.createElement('div');
                return (
                    s.setAttribute('id', 'confetti-container'),
                    s.setAttribute(
                        'style',
                        'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999;'
                    ),
                    s
                );
            });
            return (
                fe(
                    () => (
                        document.body.appendChild(a),
                        () => {
                            document.body.removeChild(a);
                        }
                    ),
                    []
                ),
                $e(
                    y.createElement(
                        Jo,
                        { top: e, left: t, width: n, height: r },
                        y.createElement(Ln, { colors: o, drawShape: ti, ...i })
                    ),
                    a
                )
            );
        }
        function ei(e, t) {
            return Math.floor(Math.random() * (t - e)) + e;
        }
        function ti(e) {
            switch (((this.shape = this.shape || ei(1, 6)), this.shape)) {
                case 2: {
                    let t = this.w / 2,
                        n = this.h / 2;
                    e.moveTo(-t + 2, -n),
                        e.lineTo(t - 2, -n),
                        e.arcTo(t, -n, t, -n + 2, 2),
                        e.lineTo(t, n - 2),
                        e.arcTo(t, n, t - 2, n, 2),
                        e.lineTo(-t + 2, n),
                        e.arcTo(-t, n, -t, n - 2, 2),
                        e.lineTo(-t, -n + 2),
                        e.arcTo(-t, -n, -t + 2, -n, 2);
                    break;
                }
                case 3: {
                    e.rect(-4, -4, 8, 16), e.rect(-12, -4, 24, 8);
                    break;
                }
                case 4: {
                    e.rect(-4, -4, 8, 16), e.rect(-4, -4, 24, 8);
                    break;
                }
                case 1: {
                    e.arc(0, 0, this.radius, 0, 2 * Math.PI);
                    break;
                }
                case 5: {
                    e.moveTo(16, 4), e.lineTo(4, 24), e.lineTo(24, 24);
                    break;
                }
                case 6: {
                    e.arc(4, -4, 4, -Math.PI / 2, 0), e.lineTo(4, 0);
                    break;
                }
            }
            e.closePath(), e.fill();
        }
        function Wn({ targetSelector: e, pulsating: t = !1 }) {
            return (
                fe(() => {
                    let n = document.querySelector(e);
                    if (n)
                        if (t) {
                            (n.style.animation = 'pulsate 3s infinite'),
                                (n.style.transformOrigin = 'center'),
                                (n.style.animationTimingFunction =
                                    'ease-in-out');
                            let r = `
        @keyframes pulsate {
          0% {
            box-shadow: rgba(2,156,253,1) 0 0 2px 1px, 0 0 0 0 rgba(2, 156, 253, 0.7), 0 0 0 0 rgba(2, 156, 253, 0.4);
          }
          50% {
            box-shadow: rgba(2,156,253,1) 0 0 2px 1px, 0 0 0 20px rgba(2, 156, 253, 0), 0 0 0 40px rgba(2, 156, 253, 0);
          }
          100% {
            box-shadow: rgba(2,156,253,1) 0 0 2px 1px, 0 0 0 0 rgba(2, 156, 253, 0), 0 0 0 0 rgba(2, 156, 253, 0);
          }
        }
      `,
                                o = document.createElement('style');
                            (o.id = 'sb-onboarding-pulsating-effect'),
                                (o.innerHTML = r),
                                document.head.appendChild(o);
                        } else
                            n.style.boxShadow = 'rgba(2,156,253,1) 0 0 2px 1px';
                    return () => {
                        let r = document.querySelector(
                            '#sb-onboarding-pulsating-effect'
                        );
                        r && r.remove(),
                            n &&
                                ((n.style.animation = ''),
                                (n.style.boxShadow = ''));
                    };
                }, [e, t]),
                null
            );
        }
        function Sr(e) {
            return (t) => typeof t === e;
        }
        function ii(e, t) {
            let { length: n } = e;
            if (n !== t.length) return !1;
            for (let r = n; r-- !== 0; ) if (!oe(e[r], t[r])) return !1;
            return !0;
        }
        function ai(e, t) {
            if (e.byteLength !== t.byteLength) return !1;
            let n = new DataView(e.buffer),
                r = new DataView(t.buffer),
                o = e.byteLength;
            for (; o--; ) if (n.getUint8(o) !== r.getUint8(o)) return !1;
            return !0;
        }
        function si(e, t) {
            if (e.size !== t.size) return !1;
            for (let n of e.entries()) if (!t.has(n[0])) return !1;
            for (let n of e.entries()) if (!oe(n[1], t.get(n[0]))) return !1;
            return !0;
        }
        function li(e, t) {
            if (e.size !== t.size) return !1;
            for (let n of e.entries()) if (!t.has(n[0])) return !1;
            return !0;
        }
        function oe(e, t) {
            if (e === t) return !0;
            if (e && Gn(e) && t && Gn(t)) {
                if (e.constructor !== t.constructor) return !1;
                if (Array.isArray(e) && Array.isArray(t)) return ii(e, t);
                if (e instanceof Map && t instanceof Map) return si(e, t);
                if (e instanceof Set && t instanceof Set) return li(e, t);
                if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t))
                    return ai(e, t);
                if (Hn(e) && Hn(t))
                    return e.source === t.source && e.flags === t.flags;
                if (e.valueOf !== Object.prototype.valueOf)
                    return e.valueOf() === t.valueOf();
                if (e.toString !== Object.prototype.toString)
                    return e.toString() === t.toString();
                let n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (let o = n.length; o-- !== 0; )
                    if (!Object.prototype.hasOwnProperty.call(t, n[o]))
                        return !1;
                for (let o = n.length; o-- !== 0; ) {
                    let i = n[o];
                    if (!(i === '_owner' && e.$$typeof) && !oe(e[i], t[i]))
                        return !1;
                }
                return !0;
            }
            return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
        }
        function Pt(e) {
            let t = Object.prototype.toString.call(e).slice(8, -1);
            if (/HTML\w+Element/.test(t)) return 'HTMLElement';
            if (fi(t)) return t;
        }
        function ge(e) {
            return (t) => Pt(t) === e;
        }
        function fi(e) {
            return ci.includes(e);
        }
        function He(e) {
            return (t) => typeof t === e;
        }
        function pi(e) {
            return ui.includes(e);
        }
        function I(e) {
            if (e === null) return 'null';
            switch (typeof e) {
                case 'bigint':
                    return 'bigint';
                case 'boolean':
                    return 'boolean';
                case 'number':
                    return 'number';
                case 'string':
                    return 'string';
                case 'symbol':
                    return 'symbol';
                case 'undefined':
                    return 'undefined';
            }
            return I.array(e)
                ? 'Array'
                : I.plainFunction(e)
                  ? 'Function'
                  : Pt(e) || 'Object';
        }
        function hi(...e) {
            return e.every(
                (t) => P.string(t) || P.array(t) || P.plainObject(t)
            );
        }
        function yi(e, t, n) {
            return Tr(e, t)
                ? [e, t].every(P.array)
                    ? !e.some(Vn(n)) && t.some(Vn(n))
                    : [e, t].every(P.plainObject)
                      ? !Object.entries(e).some($n(n)) &&
                        Object.entries(t).some($n(n))
                      : t === n
                : !1;
        }
        function Yn(e, t, n) {
            let { actual: r, key: o, previous: i, type: a } = n,
                s = Oe(e, o),
                c = Oe(t, o),
                l =
                    [s, c].every(P.number) &&
                    (a === 'increased' ? s < c : s > c);
            return (
                P.undefined(r) || (l = l && c === r),
                P.undefined(i) || (l = l && s === i),
                l
            );
        }
        function zn(e, t, n) {
            let { key: r, type: o, value: i } = n,
                a = Oe(e, r),
                s = Oe(t, r),
                c = o === 'added' ? a : s,
                l = o === 'added' ? s : a;
            if (!P.nullOrUndefined(i)) {
                if (P.defined(c)) {
                    if (P.array(c) || P.plainObject(c)) return yi(c, l, i);
                } else return oe(l, i);
                return !1;
            }
            return [a, s].every(P.array)
                ? !l.every(nn(c))
                : [a, s].every(P.plainObject)
                  ? mi(Object.keys(c), Object.keys(l))
                  : ![a, s].every((f) => P.primitive(f) && P.defined(f)) &&
                    (o === 'added'
                        ? !P.defined(a) && P.defined(s)
                        : P.defined(a) && !P.defined(s));
        }
        function qn(e, t, { key: n } = {}) {
            let r = Oe(e, n),
                o = Oe(t, n);
            if (!Tr(r, o)) throw new TypeError('Inputs have different types');
            if (!hi(r, o)) throw new TypeError("Inputs don't have length");
            return (
                [r, o].every(P.plainObject) &&
                    ((r = Object.keys(r)), (o = Object.keys(o))),
                [r, o]
            );
        }
        function $n(e) {
            return ([t, n]) =>
                P.array(e)
                    ? oe(e, n) ||
                      e.some((r) => oe(r, n) || (P.array(n) && nn(n)(r)))
                    : P.plainObject(e) && e[t]
                      ? !!e[t] && oe(e[t], n)
                      : oe(e, n);
        }
        function mi(e, t) {
            return t.some((n) => !e.includes(n));
        }
        function Vn(e) {
            return (t) =>
                P.array(e)
                    ? e.some((n) => oe(n, t) || (P.array(t) && nn(t)(n)))
                    : oe(e, t);
        }
        function Xe(e, t) {
            return P.array(e) ? e.some((n) => oe(n, t)) : oe(e, t);
        }
        function nn(e) {
            return (t) => e.some((n) => oe(n, t));
        }
        function Tr(...e) {
            return (
                e.every(P.array) ||
                e.every(P.number) ||
                e.every(P.plainObject) ||
                e.every(P.string)
            );
        }
        function Oe(e, t) {
            return P.plainObject(e) || P.array(e)
                ? P.string(t)
                    ? t.split('.').reduce((n, r) => n && n[r], e)
                    : P.number(t)
                      ? e[t]
                      : e
                : e;
        }
        function St(e, t) {
            if ([e, t].some(P.nullOrUndefined))
                throw new Error('Missing required parameters');
            if (![e, t].every((n) => P.plainObject(n) || P.array(n)))
                throw new Error('Expected plain objects or array');
            return {
                added: (n, r) => {
                    try {
                        return zn(e, t, { key: n, type: 'added', value: r });
                    } catch {
                        return !1;
                    }
                },
                changed: (n, r, o) => {
                    try {
                        let i = Oe(e, n),
                            a = Oe(t, n),
                            s = P.defined(r),
                            c = P.defined(o);
                        if (s || c) {
                            let l = c ? Xe(o, i) : !Xe(r, i),
                                f = Xe(r, a);
                            return l && f;
                        }
                        return [i, a].every(P.array) ||
                            [i, a].every(P.plainObject)
                            ? !oe(i, a)
                            : i !== a;
                    } catch {
                        return !1;
                    }
                },
                changedFrom: (n, r, o) => {
                    if (!P.defined(n)) return !1;
                    try {
                        let i = Oe(e, n),
                            a = Oe(t, n),
                            s = P.defined(o);
                        return Xe(r, i) && (s ? Xe(o, a) : !s);
                    } catch {
                        return !1;
                    }
                },
                decreased: (n, r, o) => {
                    if (!P.defined(n)) return !1;
                    try {
                        return Yn(e, t, {
                            key: n,
                            actual: r,
                            previous: o,
                            type: 'decreased',
                        });
                    } catch {
                        return !1;
                    }
                },
                emptied: (n) => {
                    try {
                        let [r, o] = qn(e, t, { key: n });
                        return !!r.length && !o.length;
                    } catch {
                        return !1;
                    }
                },
                filled: (n) => {
                    try {
                        let [r, o] = qn(e, t, { key: n });
                        return !r.length && !!o.length;
                    } catch {
                        return !1;
                    }
                },
                increased: (n, r, o) => {
                    if (!P.defined(n)) return !1;
                    try {
                        return Yn(e, t, {
                            key: n,
                            actual: r,
                            previous: o,
                            type: 'increased',
                        });
                    } catch {
                        return !1;
                    }
                },
                removed: (n, r) => {
                    try {
                        return zn(e, t, { key: n, type: 'removed', value: r });
                    } catch {
                        return !1;
                    }
                },
            };
        }
        function vi(e) {
            var t = !1;
            return function () {
                t ||
                    ((t = !0),
                    window.Promise.resolve().then(function () {
                        (t = !1), e();
                    }));
            };
        }
        function Ei(e) {
            var t = !1;
            return function () {
                t ||
                    ((t = !0),
                    setTimeout(function () {
                        (t = !1), e();
                    }, bi));
            };
        }
        function Cr(e) {
            var t = {};
            return e && t.toString.call(e) === '[object Function]';
        }
        function je(e, t) {
            if (e.nodeType !== 1) return [];
            var n = e.ownerDocument.defaultView,
                r = n.getComputedStyle(e, null);
            return t ? r[t] : r;
        }
        function rn(e) {
            return e.nodeName === 'HTML' ? e : e.parentNode || e.host;
        }
        function ot(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case 'HTML':
                case 'BODY':
                    return e.ownerDocument.body;
                case '#document':
                    return e.body;
            }
            var t = je(e),
                n = t.overflow,
                r = t.overflowX,
                o = t.overflowY;
            return /(auto|scroll|overlay)/.test(n + o + r) ? e : ot(rn(e));
        }
        function Pr(e) {
            return e && e.referenceNode ? e.referenceNode : e;
        }
        function Ge(e) {
            return e === 11 ? Kn : e === 10 ? Qn : Kn || Qn;
        }
        function Be(e) {
            if (!e) return document.documentElement;
            for (
                var t = Ge(10) ? document.body : null,
                    n = e.offsetParent || null;
                n === t && e.nextElementSibling;

            )
                n = (e = e.nextElementSibling).offsetParent;
            var r = n && n.nodeName;
            return !r || r === 'BODY' || r === 'HTML'
                ? e
                    ? e.ownerDocument.documentElement
                    : document.documentElement
                : ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) !== -1 &&
                    je(n, 'position') === 'static'
                  ? Be(n)
                  : n;
        }
        function Si(e) {
            var t = e.nodeName;
            return t === 'BODY'
                ? !1
                : t === 'HTML' || Be(e.firstElementChild) === e;
        }
        function Kt(e) {
            return e.parentNode !== null ? Kt(e.parentNode) : e;
        }
        function Tt(e, t) {
            if (!e || !e.nodeType || !t || !t.nodeType)
                return document.documentElement;
            var n =
                    e.compareDocumentPosition(t) &
                    Node.DOCUMENT_POSITION_FOLLOWING,
                r = n ? e : t,
                o = n ? t : e,
                i = document.createRange();
            i.setStart(r, 0), i.setEnd(o, 0);
            var a = i.commonAncestorContainer;
            if ((e !== a && t !== a) || r.contains(o)) return Si(a) ? a : Be(a);
            var s = Kt(e);
            return s.host ? Tt(s.host, t) : Tt(e, Kt(t).host);
        }
        function We(e) {
            var t =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : 'top',
                n = t === 'top' ? 'scrollTop' : 'scrollLeft',
                r = e.nodeName;
            if (r === 'BODY' || r === 'HTML') {
                var o = e.ownerDocument.documentElement,
                    i = e.ownerDocument.scrollingElement || o;
                return i[n];
            }
            return e[n];
        }
        function Ti(e, t) {
            var n =
                    arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : !1,
                r = We(t, 'top'),
                o = We(t, 'left'),
                i = n ? -1 : 1;
            return (
                (e.top += r * i),
                (e.bottom += r * i),
                (e.left += o * i),
                (e.right += o * i),
                e
            );
        }
        function Xn(e, t) {
            var n = t === 'x' ? 'Left' : 'Top',
                r = n === 'Left' ? 'Right' : 'Bottom';
            return (
                parseFloat(e['border' + n + 'Width']) +
                parseFloat(e['border' + r + 'Width'])
            );
        }
        function Jn(e, t, n, r) {
            return Math.max(
                t['offset' + e],
                t['scroll' + e],
                n['client' + e],
                n['offset' + e],
                n['scroll' + e],
                Ge(10)
                    ? parseInt(n['offset' + e]) +
                          parseInt(
                              r['margin' + (e === 'Height' ? 'Top' : 'Left')]
                          ) +
                          parseInt(
                              r[
                                  'margin' +
                                      (e === 'Height' ? 'Bottom' : 'Right')
                              ]
                          )
                    : 0
            );
        }
        function Rr(e) {
            var t = e.body,
                n = e.documentElement,
                r = Ge(10) && getComputedStyle(n);
            return {
                height: Jn('Height', t, n, r),
                width: Jn('Width', t, n, r),
            };
        }
        function xe(e) {
            return de({}, e, {
                right: e.left + e.width,
                bottom: e.top + e.height,
            });
        }
        function Qt(e) {
            var t = {};
            try {
                if (Ge(10)) {
                    t = e.getBoundingClientRect();
                    var n = We(e, 'top'),
                        r = We(e, 'left');
                    (t.top += n),
                        (t.left += r),
                        (t.bottom += n),
                        (t.right += r);
                } else t = e.getBoundingClientRect();
            } catch {}
            var o = {
                    left: t.left,
                    top: t.top,
                    width: t.right - t.left,
                    height: t.bottom - t.top,
                },
                i = e.nodeName === 'HTML' ? Rr(e.ownerDocument) : {},
                a = i.width || e.clientWidth || o.width,
                s = i.height || e.clientHeight || o.height,
                c = e.offsetWidth - a,
                l = e.offsetHeight - s;
            if (c || l) {
                var f = je(e);
                (c -= Xn(f, 'x')),
                    (l -= Xn(f, 'y')),
                    (o.width -= c),
                    (o.height -= l);
            }
            return xe(o);
        }
        function on(e, t) {
            var n =
                    arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : !1,
                r = Ge(10),
                o = t.nodeName === 'HTML',
                i = Qt(e),
                a = Qt(t),
                s = ot(e),
                c = je(t),
                l = parseFloat(c.borderTopWidth),
                f = parseFloat(c.borderLeftWidth);
            n &&
                o &&
                ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
            var u = xe({
                top: i.top - a.top - l,
                left: i.left - a.left - f,
                width: i.width,
                height: i.height,
            });
            if (((u.marginTop = 0), (u.marginLeft = 0), !r && o)) {
                var p = parseFloat(c.marginTop),
                    d = parseFloat(c.marginLeft);
                (u.top -= l - p),
                    (u.bottom -= l - p),
                    (u.left -= f - d),
                    (u.right -= f - d),
                    (u.marginTop = p),
                    (u.marginLeft = d);
            }
            return (
                (r && !n ? t.contains(s) : t === s && s.nodeName !== 'BODY') &&
                    (u = Ti(u, t)),
                u
            );
        }
        function Pi(e) {
            var t =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : !1,
                n = e.ownerDocument.documentElement,
                r = on(e, n),
                o = Math.max(n.clientWidth, window.innerWidth || 0),
                i = Math.max(n.clientHeight, window.innerHeight || 0),
                a = t ? 0 : We(n),
                s = t ? 0 : We(n, 'left'),
                c = {
                    top: a - r.top + r.marginTop,
                    left: s - r.left + r.marginLeft,
                    width: o,
                    height: i,
                };
            return xe(c);
        }
        function _r(e) {
            var t = e.nodeName;
            if (t === 'BODY' || t === 'HTML') return !1;
            if (je(e, 'position') === 'fixed') return !0;
            var n = rn(e);
            return n ? _r(n) : !1;
        }
        function xr(e) {
            if (!e || !e.parentElement || Ge()) return document.documentElement;
            for (var t = e.parentElement; t && je(t, 'transform') === 'none'; )
                t = t.parentElement;
            return t || document.documentElement;
        }
        function an(e, t, n, r) {
            var o =
                    arguments.length > 4 && arguments[4] !== void 0
                        ? arguments[4]
                        : !1,
                i = { top: 0, left: 0 },
                a = o ? xr(e) : Tt(e, Pr(t));
            if (r === 'viewport') i = Pi(a, o);
            else {
                var s = void 0;
                r === 'scrollParent'
                    ? ((s = ot(rn(t))),
                      s.nodeName === 'BODY' &&
                          (s = e.ownerDocument.documentElement))
                    : r === 'window'
                      ? (s = e.ownerDocument.documentElement)
                      : (s = r);
                var c = on(s, a, o);
                if (s.nodeName === 'HTML' && !_r(a)) {
                    var l = Rr(e.ownerDocument),
                        f = l.height,
                        u = l.width;
                    (i.top += c.top - c.marginTop),
                        (i.bottom = f + c.top),
                        (i.left += c.left - c.marginLeft),
                        (i.right = u + c.left);
                } else i = c;
            }
            n = n || 0;
            var p = typeof n == 'number';
            return (
                (i.left += p ? n : n.left || 0),
                (i.top += p ? n : n.top || 0),
                (i.right -= p ? n : n.right || 0),
                (i.bottom -= p ? n : n.bottom || 0),
                i
            );
        }
        function Ri(e) {
            var t = e.width,
                n = e.height;
            return t * n;
        }
        function Ar(e, t, n, r, o) {
            var i =
                arguments.length > 5 && arguments[5] !== void 0
                    ? arguments[5]
                    : 0;
            if (e.indexOf('auto') === -1) return e;
            var a = an(n, r, i, o),
                s = {
                    top: { width: a.width, height: t.top - a.top },
                    right: { width: a.right - t.right, height: a.height },
                    bottom: { width: a.width, height: a.bottom - t.bottom },
                    left: { width: t.left - a.left, height: a.height },
                },
                c = Object.keys(s)
                    .map(function (p) {
                        return de({ key: p }, s[p], { area: Ri(s[p]) });
                    })
                    .sort(function (p, d) {
                        return d.area - p.area;
                    }),
                l = c.filter(function (p) {
                    var d = p.width,
                        h = p.height;
                    return d >= n.clientWidth && h >= n.clientHeight;
                }),
                f = l.length > 0 ? l[0].key : c[0].key,
                u = e.split('-')[1];
            return f + (u ? '-' + u : '');
        }
        function Nr(e, t, n) {
            var r =
                    arguments.length > 3 && arguments[3] !== void 0
                        ? arguments[3]
                        : null,
                o = r ? xr(t) : Tt(t, Pr(n));
            return on(n, o, r);
        }
        function kr(e) {
            var t = e.ownerDocument.defaultView,
                n = t.getComputedStyle(e),
                r =
                    parseFloat(n.marginTop || 0) +
                    parseFloat(n.marginBottom || 0),
                o =
                    parseFloat(n.marginLeft || 0) +
                    parseFloat(n.marginRight || 0),
                i = { width: e.offsetWidth + o, height: e.offsetHeight + r };
            return i;
        }
        function It(e) {
            var t = {
                left: 'right',
                right: 'left',
                bottom: 'top',
                top: 'bottom',
            };
            return e.replace(/left|right|bottom|top/g, function (n) {
                return t[n];
            });
        }
        function Mr(e, t, n) {
            n = n.split('-')[0];
            var r = kr(e),
                o = { width: r.width, height: r.height },
                i = ['right', 'left'].indexOf(n) !== -1,
                a = i ? 'top' : 'left',
                s = i ? 'left' : 'top',
                c = i ? 'height' : 'width',
                l = i ? 'width' : 'height';
            return (
                (o[a] = t[a] + t[c] / 2 - r[c] / 2),
                n === s ? (o[s] = t[s] - r[l]) : (o[s] = t[It(s)]),
                o
            );
        }
        function it(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function _i(e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex(function (o) {
                    return o[t] === n;
                });
            var r = it(e, function (o) {
                return o[t] === n;
            });
            return e.indexOf(r);
        }
        function Lr(e, t, n) {
            var r = n === void 0 ? e : e.slice(0, _i(e, 'name', n));
            return (
                r.forEach(function (o) {
                    o.function &&
                        console.warn(
                            '`modifier.function` is deprecated, use `modifier.fn`!'
                        );
                    var i = o.function || o.fn;
                    o.enabled &&
                        Cr(i) &&
                        ((t.offsets.popper = xe(t.offsets.popper)),
                        (t.offsets.reference = xe(t.offsets.reference)),
                        (t = i(t, o)));
                }),
                t
            );
        }
        function xi() {
            if (!this.state.isDestroyed) {
                var e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {},
                };
                (e.offsets.reference = Nr(
                    this.state,
                    this.popper,
                    this.reference,
                    this.options.positionFixed
                )),
                    (e.placement = Ar(
                        this.options.placement,
                        e.offsets.reference,
                        this.popper,
                        this.reference,
                        this.options.modifiers.flip.boundariesElement,
                        this.options.modifiers.flip.padding
                    )),
                    (e.originalPlacement = e.placement),
                    (e.positionFixed = this.options.positionFixed),
                    (e.offsets.popper = Mr(
                        this.popper,
                        e.offsets.reference,
                        e.placement
                    )),
                    (e.offsets.popper.position = this.options.positionFixed
                        ? 'fixed'
                        : 'absolute'),
                    (e = Lr(this.modifiers, e)),
                    this.state.isCreated
                        ? this.options.onUpdate(e)
                        : ((this.state.isCreated = !0),
                          this.options.onCreate(e));
            }
        }
        function jr(e, t) {
            return e.some(function (n) {
                var r = n.name,
                    o = n.enabled;
                return o && r === t;
            });
        }
        function sn(e) {
            for (
                var t = [!1, 'ms', 'Webkit', 'Moz', 'O'],
                    n = e.charAt(0).toUpperCase() + e.slice(1),
                    r = 0;
                r < t.length;
                r++
            ) {
                var o = t[r],
                    i = o ? '' + o + n : e;
                if (typeof document.body.style[i] < 'u') return i;
            }
            return null;
        }
        function Ai() {
            return (
                (this.state.isDestroyed = !0),
                jr(this.modifiers, 'applyStyle') &&
                    (this.popper.removeAttribute('x-placement'),
                    (this.popper.style.position = ''),
                    (this.popper.style.top = ''),
                    (this.popper.style.left = ''),
                    (this.popper.style.right = ''),
                    (this.popper.style.bottom = ''),
                    (this.popper.style.willChange = ''),
                    (this.popper.style[sn('transform')] = '')),
                this.disableEventListeners(),
                this.options.removeOnDestroy &&
                    this.popper.parentNode.removeChild(this.popper),
                this
            );
        }
        function Dr(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window;
        }
        function Fr(e, t, n, r) {
            var o = e.nodeName === 'BODY',
                i = o ? e.ownerDocument.defaultView : e;
            i.addEventListener(t, n, { passive: !0 }),
                o || Fr(ot(i.parentNode), t, n, r),
                r.push(i);
        }
        function Ni(e, t, n, r) {
            (n.updateBound = r),
                Dr(e).addEventListener('resize', n.updateBound, {
                    passive: !0,
                });
            var o = ot(e);
            return (
                Fr(o, 'scroll', n.updateBound, n.scrollParents),
                (n.scrollElement = o),
                (n.eventsEnabled = !0),
                n
            );
        }
        function ki() {
            this.state.eventsEnabled ||
                (this.state = Ni(
                    this.reference,
                    this.options,
                    this.state,
                    this.scheduleUpdate
                ));
        }
        function Mi(e, t) {
            return (
                Dr(e).removeEventListener('resize', t.updateBound),
                t.scrollParents.forEach(function (n) {
                    n.removeEventListener('scroll', t.updateBound);
                }),
                (t.updateBound = null),
                (t.scrollParents = []),
                (t.scrollElement = null),
                (t.eventsEnabled = !1),
                t
            );
        }
        function Li() {
            this.state.eventsEnabled &&
                (cancelAnimationFrame(this.scheduleUpdate),
                (this.state = Mi(this.reference, this.state)));
        }
        function ln(e) {
            return e !== '' && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function Xt(e, t) {
            Object.keys(t).forEach(function (n) {
                var r = '';
                ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(
                    n
                ) !== -1 &&
                    ln(t[n]) &&
                    (r = 'px'),
                    (e.style[n] = t[n] + r);
            });
        }
        function ji(e, t) {
            Object.keys(t).forEach(function (n) {
                var r = t[n];
                r !== !1 ? e.setAttribute(n, t[n]) : e.removeAttribute(n);
            });
        }
        function Di(e) {
            return (
                Xt(e.instance.popper, e.styles),
                ji(e.instance.popper, e.attributes),
                e.arrowElement &&
                    Object.keys(e.arrowStyles).length &&
                    Xt(e.arrowElement, e.arrowStyles),
                e
            );
        }
        function Fi(e, t, n, r, o) {
            var i = Nr(o, t, e, n.positionFixed),
                a = Ar(
                    n.placement,
                    i,
                    t,
                    e,
                    n.modifiers.flip.boundariesElement,
                    n.modifiers.flip.padding
                );
            return (
                t.setAttribute('x-placement', a),
                Xt(t, { position: n.positionFixed ? 'fixed' : 'absolute' }),
                n
            );
        }
        function Bi(e, t) {
            var n = e.offsets,
                r = n.popper,
                o = n.reference,
                i = Math.round,
                a = Math.floor,
                s = function (x) {
                    return x;
                },
                c = i(o.width),
                l = i(r.width),
                f = ['left', 'right'].indexOf(e.placement) !== -1,
                u = e.placement.indexOf('-') !== -1,
                p = c % 2 === l % 2,
                d = c % 2 === 1 && l % 2 === 1,
                h = t ? (f || u || p ? i : a) : s,
                g = t ? i : s;
            return {
                left: h(d && !u && t ? r.left - 1 : r.left),
                top: g(r.top),
                bottom: g(r.bottom),
                right: h(r.right),
            };
        }
        function Ui(e, t) {
            var n = t.x,
                r = t.y,
                o = e.offsets.popper,
                i = it(e.instance.modifiers, function (m) {
                    return m.name === 'applyStyle';
                }).gpuAcceleration;
            i !== void 0 &&
                console.warn(
                    'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
                );
            var a = i !== void 0 ? i : t.gpuAcceleration,
                s = Be(e.instance.popper),
                c = Qt(s),
                l = { position: o.position },
                f = Bi(e, window.devicePixelRatio < 2 || !Wi),
                u = n === 'bottom' ? 'top' : 'bottom',
                p = r === 'right' ? 'left' : 'right',
                d = sn('transform'),
                h = void 0,
                g = void 0;
            if (
                (u === 'bottom'
                    ? s.nodeName === 'HTML'
                        ? (g = -s.clientHeight + f.bottom)
                        : (g = -c.height + f.bottom)
                    : (g = f.top),
                p === 'right'
                    ? s.nodeName === 'HTML'
                        ? (h = -s.clientWidth + f.right)
                        : (h = -c.width + f.right)
                    : (h = f.left),
                a && d)
            )
                (l[d] = 'translate3d(' + h + 'px, ' + g + 'px, 0)'),
                    (l[u] = 0),
                    (l[p] = 0),
                    (l.willChange = 'transform');
            else {
                var x = u === 'bottom' ? -1 : 1,
                    b = p === 'right' ? -1 : 1;
                (l[u] = g * x), (l[p] = h * b), (l.willChange = u + ', ' + p);
            }
            var S = { 'x-placement': e.placement };
            return (
                (e.attributes = de({}, S, e.attributes)),
                (e.styles = de({}, l, e.styles)),
                (e.arrowStyles = de({}, e.offsets.arrow, e.arrowStyles)),
                e
            );
        }
        function Br(e, t, n) {
            var r = it(e, function (s) {
                    var c = s.name;
                    return c === t;
                }),
                o =
                    !!r &&
                    e.some(function (s) {
                        return s.name === n && s.enabled && s.order < r.order;
                    });
            if (!o) {
                var i = '`' + t + '`',
                    a = '`' + n + '`';
                console.warn(
                    a +
                        ' modifier is required by ' +
                        i +
                        ' modifier in order to work, be sure to include it before ' +
                        i +
                        '!'
                );
            }
            return o;
        }
        function Hi(e, t) {
            var n;
            if (!Br(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
            var r = t.element;
            if (typeof r == 'string') {
                if (((r = e.instance.popper.querySelector(r)), !r)) return e;
            } else if (!e.instance.popper.contains(r))
                return (
                    console.warn(
                        'WARNING: `arrow.element` must be child of its popper element!'
                    ),
                    e
                );
            var o = e.placement.split('-')[0],
                i = e.offsets,
                a = i.popper,
                s = i.reference,
                c = ['left', 'right'].indexOf(o) !== -1,
                l = c ? 'height' : 'width',
                f = c ? 'Top' : 'Left',
                u = f.toLowerCase(),
                p = c ? 'left' : 'top',
                d = c ? 'bottom' : 'right',
                h = kr(r)[l];
            s[d] - h < a[u] && (e.offsets.popper[u] -= a[u] - (s[d] - h)),
                s[u] + h > a[d] && (e.offsets.popper[u] += s[u] + h - a[d]),
                (e.offsets.popper = xe(e.offsets.popper));
            var g = s[u] + s[l] / 2 - h / 2,
                x = je(e.instance.popper),
                b = parseFloat(x['margin' + f]),
                S = parseFloat(x['border' + f + 'Width']),
                m = g - e.offsets.popper[u] - b - S;
            return (
                (m = Math.max(Math.min(a[l] - h, m), 0)),
                (e.arrowElement = r),
                (e.offsets.arrow =
                    ((n = {}), Ue(n, u, Math.round(m)), Ue(n, p, ''), n)),
                e
            );
        }
        function Gi(e) {
            return e === 'end' ? 'start' : e === 'start' ? 'end' : e;
        }
        function Zn(e) {
            var t =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : !1,
                n = qt.indexOf(e),
                r = qt.slice(n + 1).concat(qt.slice(0, n));
            return t ? r.reverse() : r;
        }
        function Yi(e, t) {
            if (
                jr(e.instance.modifiers, 'inner') ||
                (e.flipped && e.placement === e.originalPlacement)
            )
                return e;
            var n = an(
                    e.instance.popper,
                    e.instance.reference,
                    t.padding,
                    t.boundariesElement,
                    e.positionFixed
                ),
                r = e.placement.split('-')[0],
                o = It(r),
                i = e.placement.split('-')[1] || '',
                a = [];
            switch (t.behavior) {
                case $t.FLIP:
                    a = [r, o];
                    break;
                case $t.CLOCKWISE:
                    a = Zn(r);
                    break;
                case $t.COUNTERCLOCKWISE:
                    a = Zn(r, !0);
                    break;
                default:
                    a = t.behavior;
            }
            return (
                a.forEach(function (s, c) {
                    if (r !== s || a.length === c + 1) return e;
                    (r = e.placement.split('-')[0]), (o = It(r));
                    var l = e.offsets.popper,
                        f = e.offsets.reference,
                        u = Math.floor,
                        p =
                            (r === 'left' && u(l.right) > u(f.left)) ||
                            (r === 'right' && u(l.left) < u(f.right)) ||
                            (r === 'top' && u(l.bottom) > u(f.top)) ||
                            (r === 'bottom' && u(l.top) < u(f.bottom)),
                        d = u(l.left) < u(n.left),
                        h = u(l.right) > u(n.right),
                        g = u(l.top) < u(n.top),
                        x = u(l.bottom) > u(n.bottom),
                        b =
                            (r === 'left' && d) ||
                            (r === 'right' && h) ||
                            (r === 'top' && g) ||
                            (r === 'bottom' && x),
                        S = ['top', 'bottom'].indexOf(r) !== -1,
                        m =
                            !!t.flipVariations &&
                            ((S && i === 'start' && d) ||
                                (S && i === 'end' && h) ||
                                (!S && i === 'start' && g) ||
                                (!S && i === 'end' && x)),
                        O =
                            !!t.flipVariationsByContent &&
                            ((S && i === 'start' && h) ||
                                (S && i === 'end' && d) ||
                                (!S && i === 'start' && x) ||
                                (!S && i === 'end' && g)),
                        w = m || O;
                    (p || b || w) &&
                        ((e.flipped = !0),
                        (p || b) && (r = a[c + 1]),
                        w && (i = Gi(i)),
                        (e.placement = r + (i ? '-' + i : '')),
                        (e.offsets.popper = de(
                            {},
                            e.offsets.popper,
                            Mr(
                                e.instance.popper,
                                e.offsets.reference,
                                e.placement
                            )
                        )),
                        (e = Lr(e.instance.modifiers, e, 'flip')));
                }),
                e
            );
        }
        function zi(e) {
            var t = e.offsets,
                n = t.popper,
                r = t.reference,
                o = e.placement.split('-')[0],
                i = Math.floor,
                a = ['top', 'bottom'].indexOf(o) !== -1,
                s = a ? 'right' : 'bottom',
                c = a ? 'left' : 'top',
                l = a ? 'width' : 'height';
            return (
                n[s] < i(r[c]) && (e.offsets.popper[c] = i(r[c]) - n[l]),
                n[c] > i(r[s]) && (e.offsets.popper[c] = i(r[s])),
                e
            );
        }
        function qi(e, t, n, r) {
            var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                i = +o[1],
                a = o[2];
            if (!i) return e;
            if (a.indexOf('%') === 0) {
                var s = void 0;
                switch (a) {
                    case '%p':
                        s = n;
                        break;
                    case '%':
                    case '%r':
                    default:
                        s = r;
                }
                var c = xe(s);
                return (c[t] / 100) * i;
            } else if (a === 'vh' || a === 'vw') {
                var l = void 0;
                return (
                    a === 'vh'
                        ? (l = Math.max(
                              document.documentElement.clientHeight,
                              window.innerHeight || 0
                          ))
                        : (l = Math.max(
                              document.documentElement.clientWidth,
                              window.innerWidth || 0
                          )),
                    (l / 100) * i
                );
            } else return i;
        }
        function $i(e, t, n, r) {
            var o = [0, 0],
                i = ['right', 'left'].indexOf(r) !== -1,
                a = e.split(/(\+|\-)/).map(function (f) {
                    return f.trim();
                }),
                s = a.indexOf(
                    it(a, function (f) {
                        return f.search(/,|\s/) !== -1;
                    })
                );
            a[s] &&
                a[s].indexOf(',') === -1 &&
                console.warn(
                    'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
                );
            var c = /\s*,\s*|\s+/,
                l =
                    s !== -1
                        ? [
                              a.slice(0, s).concat([a[s].split(c)[0]]),
                              [a[s].split(c)[1]].concat(a.slice(s + 1)),
                          ]
                        : [a];
            return (
                (l = l.map(function (f, u) {
                    var p = (u === 1 ? !i : i) ? 'height' : 'width',
                        d = !1;
                    return f
                        .reduce(function (h, g) {
                            return h[h.length - 1] === '' &&
                                ['+', '-'].indexOf(g) !== -1
                                ? ((h[h.length - 1] = g), (d = !0), h)
                                : d
                                  ? ((h[h.length - 1] += g), (d = !1), h)
                                  : h.concat(g);
                        }, [])
                        .map(function (h) {
                            return qi(h, p, t, n);
                        });
                })),
                l.forEach(function (f, u) {
                    f.forEach(function (p, d) {
                        ln(p) && (o[u] += p * (f[d - 1] === '-' ? -1 : 1));
                    });
                }),
                o
            );
        }
        function Vi(e, t) {
            var n = t.offset,
                r = e.placement,
                o = e.offsets,
                i = o.popper,
                a = o.reference,
                s = r.split('-')[0],
                c = void 0;
            return (
                ln(+n) ? (c = [+n, 0]) : (c = $i(n, i, a, s)),
                s === 'left'
                    ? ((i.top += c[0]), (i.left -= c[1]))
                    : s === 'right'
                      ? ((i.top += c[0]), (i.left += c[1]))
                      : s === 'top'
                        ? ((i.left += c[0]), (i.top -= c[1]))
                        : s === 'bottom' && ((i.left += c[0]), (i.top += c[1])),
                (e.popper = i),
                e
            );
        }
        function Ki(e, t) {
            var n = t.boundariesElement || Be(e.instance.popper);
            e.instance.reference === n && (n = Be(n));
            var r = sn('transform'),
                o = e.instance.popper.style,
                i = o.top,
                a = o.left,
                s = o[r];
            (o.top = ''), (o.left = ''), (o[r] = '');
            var c = an(
                e.instance.popper,
                e.instance.reference,
                t.padding,
                n,
                e.positionFixed
            );
            (o.top = i), (o.left = a), (o[r] = s), (t.boundaries = c);
            var l = t.priority,
                f = e.offsets.popper,
                u = {
                    primary: function (p) {
                        var d = f[p];
                        return (
                            f[p] < c[p] &&
                                !t.escapeWithReference &&
                                (d = Math.max(f[p], c[p])),
                            Ue({}, p, d)
                        );
                    },
                    secondary: function (p) {
                        var d = p === 'right' ? 'left' : 'top',
                            h = f[d];
                        return (
                            f[p] > c[p] &&
                                !t.escapeWithReference &&
                                (h = Math.min(
                                    f[d],
                                    c[p] - (p === 'right' ? f.width : f.height)
                                )),
                            Ue({}, d, h)
                        );
                    },
                };
            return (
                l.forEach(function (p) {
                    var d =
                        ['left', 'top'].indexOf(p) !== -1
                            ? 'primary'
                            : 'secondary';
                    f = de({}, f, u[d](p));
                }),
                (e.offsets.popper = f),
                e
            );
        }
        function Qi(e) {
            var t = e.placement,
                n = t.split('-')[0],
                r = t.split('-')[1];
            if (r) {
                var o = e.offsets,
                    i = o.reference,
                    a = o.popper,
                    s = ['bottom', 'top'].indexOf(n) !== -1,
                    c = s ? 'left' : 'top',
                    l = s ? 'width' : 'height',
                    f = {
                        start: Ue({}, c, i[c]),
                        end: Ue({}, c, i[c] + i[l] - a[l]),
                    };
                e.offsets.popper = de({}, a, f[r]);
            }
            return e;
        }
        function Xi(e) {
            if (!Br(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
            var t = e.offsets.reference,
                n = it(e.instance.modifiers, function (r) {
                    return r.name === 'preventOverflow';
                }).boundaries;
            if (
                t.bottom < n.top ||
                t.left > n.right ||
                t.top > n.bottom ||
                t.right < n.left
            ) {
                if (e.hide === !0) return e;
                (e.hide = !0), (e.attributes['x-out-of-boundaries'] = '');
            } else {
                if (e.hide === !1) return e;
                (e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1);
            }
            return e;
        }
        function Ji(e) {
            var t = e.placement,
                n = t.split('-')[0],
                r = e.offsets,
                o = r.popper,
                i = r.reference,
                a = ['left', 'right'].indexOf(n) !== -1,
                s = ['top', 'left'].indexOf(n) === -1;
            return (
                (o[a ? 'left' : 'top'] =
                    i[n] - (s ? o[a ? 'width' : 'height'] : 0)),
                (e.placement = It(t)),
                (e.offsets.popper = xe(o)),
                e
            );
        }
        function _t(e) {
            var t = Object.prototype.toString.call(e).slice(8, -1);
            if (/HTML\w+Element/.test(t)) return 'HTMLElement';
            if (oa(t)) return t;
        }
        function be(e) {
            return function (t) {
                return _t(t) === e;
            };
        }
        function oa(e) {
            return na.includes(e);
        }
        function Ye(e) {
            return function (t) {
                return typeof t === e;
            };
        }
        function ia(e) {
            return ra.includes(e);
        }
        function C(e) {
            if (e === null) return 'null';
            switch (typeof e) {
                case 'bigint':
                    return 'bigint';
                case 'boolean':
                    return 'boolean';
                case 'number':
                    return 'number';
                case 'string':
                    return 'string';
                case 'symbol':
                    return 'symbol';
                case 'undefined':
                    return 'undefined';
            }
            if (C.array(e)) return 'Array';
            if (C.plainFunction(e)) return 'Function';
            var t = _t(e);
            return t || 'Object';
        }
        function Ur(e) {
            return function (t) {
                return typeof t === e;
            };
        }
        function ca(e, t) {
            var n = e.length;
            if (n !== t.length) return !1;
            for (var r = n; r-- !== 0; ) if (!ie(e[r], t[r])) return !1;
            return !0;
        }
        function ua(e, t) {
            if (e.byteLength !== t.byteLength) return !1;
            for (
                var n = new DataView(e.buffer),
                    r = new DataView(t.buffer),
                    o = e.byteLength;
                o--;

            )
                if (n.getUint8(o) !== r.getUint8(o)) return !1;
            return !0;
        }
        function fa(e, t) {
            var n, r, o, i;
            if (e.size !== t.size) return !1;
            try {
                for (
                    var a = Zt(e.entries()), s = a.next();
                    !s.done;
                    s = a.next()
                ) {
                    var c = s.value;
                    if (!t.has(c[0])) return !1;
                }
            } catch (u) {
                n = { error: u };
            } finally {
                try {
                    s && !s.done && (r = a.return) && r.call(a);
                } finally {
                    if (n) throw n.error;
                }
            }
            try {
                for (
                    var l = Zt(e.entries()), f = l.next();
                    !f.done;
                    f = l.next()
                ) {
                    var c = f.value;
                    if (!ie(c[1], t.get(c[0]))) return !1;
                }
            } catch (u) {
                o = { error: u };
            } finally {
                try {
                    f && !f.done && (i = l.return) && i.call(l);
                } finally {
                    if (o) throw o.error;
                }
            }
            return !0;
        }
        function pa(e, t) {
            var n, r;
            if (e.size !== t.size) return !1;
            try {
                for (
                    var o = Zt(e.entries()), i = o.next();
                    !i.done;
                    i = o.next()
                ) {
                    var a = i.value;
                    if (!t.has(a[0])) return !1;
                }
            } catch (s) {
                n = { error: s };
            } finally {
                try {
                    i && !i.done && (r = o.return) && r.call(o);
                } finally {
                    if (n) throw n.error;
                }
            }
            return !0;
        }
        function ie(e, t) {
            if (e === t) return !0;
            if (e && nr(e) && t && nr(t)) {
                if (e.constructor !== t.constructor) return !1;
                if (Array.isArray(e) && Array.isArray(t)) return ca(e, t);
                if (e instanceof Map && t instanceof Map) return fa(e, t);
                if (e instanceof Set && t instanceof Set) return pa(e, t);
                if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t))
                    return ua(e, t);
                if (tr(e) && tr(t))
                    return e.source === t.source && e.flags === t.flags;
                if (e.valueOf !== Object.prototype.valueOf)
                    return e.valueOf() === t.valueOf();
                if (e.toString !== Object.prototype.toString)
                    return e.toString() === t.toString();
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (var o = n.length; o-- !== 0; )
                    if (!Object.prototype.hasOwnProperty.call(t, n[o]))
                        return !1;
                for (var o = n.length; o-- !== 0; ) {
                    var i = n[o];
                    if (!(i === '_owner' && e.$$typeof) && !ie(e[i], t[i]))
                        return !1;
                }
                return !0;
            }
            return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
        }
        function da() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return e.every(function (n) {
                return A.string(n) || A.array(n) || A.plainObject(n);
            });
        }
        function ha(e, t, n) {
            return Hr(e, t)
                ? [e, t].every(A.array)
                    ? !e.some(sr(n)) && t.some(sr(n))
                    : [e, t].every(A.plainObject)
                      ? !Object.entries(e).some(ar(n)) &&
                        Object.entries(t).some(ar(n))
                      : t === n
                : !1;
        }
        function rr(e, t, n) {
            var r = n.actual,
                o = n.key,
                i = n.previous,
                a = n.type,
                s = we(e, o),
                c = we(t, o),
                l =
                    [s, c].every(A.number) &&
                    (a === 'increased' ? s < c : s > c);
            return (
                A.undefined(r) || (l = l && c === r),
                A.undefined(i) || (l = l && s === i),
                l
            );
        }
        function or(e, t, n) {
            var r = n.key,
                o = n.type,
                i = n.value,
                a = we(e, r),
                s = we(t, r),
                c = o === 'added' ? a : s,
                l = o === 'added' ? s : a;
            if (!A.nullOrUndefined(i)) {
                if (A.defined(c)) {
                    if (A.array(c) || A.plainObject(c)) return ha(c, l, i);
                } else return ie(l, i);
                return !1;
            }
            return [a, s].every(A.array)
                ? !l.every(cn(c))
                : [a, s].every(A.plainObject)
                  ? ya(Object.keys(c), Object.keys(l))
                  : ![a, s].every(function (f) {
                        return A.primitive(f) && A.defined(f);
                    }) &&
                    (o === 'added'
                        ? !A.defined(a) && A.defined(s)
                        : A.defined(a) && !A.defined(s));
        }
        function ir(e, t, n) {
            var r = n === void 0 ? {} : n,
                o = r.key,
                i = we(e, o),
                a = we(t, o);
            if (!Hr(i, a)) throw new TypeError('Inputs have different types');
            if (!da(i, a)) throw new TypeError("Inputs don't have length");
            return (
                [i, a].every(A.plainObject) &&
                    ((i = Object.keys(i)), (a = Object.keys(a))),
                [i, a]
            );
        }
        function ar(e) {
            return function (t) {
                var n = t[0],
                    r = t[1];
                return A.array(e)
                    ? ie(e, r) ||
                          e.some(function (o) {
                              return ie(o, r) || (A.array(r) && cn(r)(o));
                          })
                    : A.plainObject(e) && e[n]
                      ? !!e[n] && ie(e[n], r)
                      : ie(e, r);
            };
        }
        function ya(e, t) {
            return t.some(function (n) {
                return !e.includes(n);
            });
        }
        function sr(e) {
            return function (t) {
                return A.array(e)
                    ? e.some(function (n) {
                          return ie(n, t) || (A.array(t) && cn(t)(n));
                      })
                    : ie(e, t);
            };
        }
        function Je(e, t) {
            return A.array(e)
                ? e.some(function (n) {
                      return ie(n, t);
                  })
                : ie(e, t);
        }
        function cn(e) {
            return function (t) {
                return e.some(function (n) {
                    return ie(n, t);
                });
            };
        }
        function Hr() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return (
                e.every(A.array) ||
                e.every(A.number) ||
                e.every(A.plainObject) ||
                e.every(A.string)
            );
        }
        function we(e, t) {
            if (A.plainObject(e) || A.array(e)) {
                if (A.string(t)) {
                    var n = t.split('.');
                    return n.reduce(function (r, o) {
                        return r && r[o];
                    }, e);
                }
                return A.number(t) ? e[t] : e;
            }
            return e;
        }
        function ma(e, t) {
            if ([e, t].some(A.nullOrUndefined))
                throw new Error('Missing required parameters');
            if (
                ![e, t].every(function (u) {
                    return A.plainObject(u) || A.array(u);
                })
            )
                throw new Error('Expected plain objects or array');
            var n = function (u, p) {
                    try {
                        return or(e, t, { key: u, type: 'added', value: p });
                    } catch {
                        return !1;
                    }
                },
                r = function (u, p, d) {
                    try {
                        var h = we(e, u),
                            g = we(t, u),
                            x = A.defined(p),
                            b = A.defined(d);
                        if (x || b) {
                            var S = b ? Je(d, h) : !Je(p, h),
                                m = Je(p, g);
                            return S && m;
                        }
                        return [h, g].every(A.array) ||
                            [h, g].every(A.plainObject)
                            ? !ie(h, g)
                            : h !== g;
                    } catch {
                        return !1;
                    }
                },
                o = function (u, p, d) {
                    if (!A.defined(u)) return !1;
                    try {
                        var h = we(e, u),
                            g = we(t, u),
                            x = A.defined(d);
                        return Je(p, h) && (x ? Je(d, g) : !x);
                    } catch {
                        return !1;
                    }
                },
                i = function (u, p) {
                    return A.defined(u)
                        ? (console.warn(
                              '`changedTo` is deprecated! Replace it with `change`'
                          ),
                          r(u, p))
                        : !1;
                },
                a = function (u, p, d) {
                    if (!A.defined(u)) return !1;
                    try {
                        return rr(e, t, {
                            key: u,
                            actual: p,
                            previous: d,
                            type: 'decreased',
                        });
                    } catch {
                        return !1;
                    }
                },
                s = function (u) {
                    try {
                        var p = ir(e, t, { key: u }),
                            d = p[0],
                            h = p[1];
                        return !!d.length && !h.length;
                    } catch {
                        return !1;
                    }
                },
                c = function (u) {
                    try {
                        var p = ir(e, t, { key: u }),
                            d = p[0],
                            h = p[1];
                        return !d.length && !!h.length;
                    } catch {
                        return !1;
                    }
                },
                l = function (u, p, d) {
                    if (!A.defined(u)) return !1;
                    try {
                        return rr(e, t, {
                            key: u,
                            actual: p,
                            previous: d,
                            type: 'increased',
                        });
                    } catch {
                        return !1;
                    }
                },
                f = function (u, p) {
                    try {
                        return or(e, t, { key: u, type: 'removed', value: p });
                    } catch {
                        return !1;
                    }
                };
            return {
                added: n,
                changed: r,
                changedFrom: o,
                changedTo: i,
                decreased: a,
                emptied: s,
                filled: c,
                increased: l,
                removed: f,
            };
        }
        function lr(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function (o) {
                        return Object.getOwnPropertyDescriptor(e, o).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function Z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t] != null ? arguments[t] : {};
                t % 2
                    ? lr(Object(n), !0).forEach(function (r) {
                          re(e, r, n[r]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                        )
                      : lr(Object(n)).forEach(function (r) {
                            Object.defineProperty(
                                e,
                                r,
                                Object.getOwnPropertyDescriptor(n, r)
                            );
                        });
            }
            return e;
        }
        function at(e, t) {
            if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
        }
        function cr(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(e, Yr(r.key), r);
            }
        }
        function st(e, t, n) {
            return (
                t && cr(e.prototype, t),
                n && cr(e, n),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                e
            );
        }
        function re(e, t, n) {
            return (
                (t = Yr(t)),
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        function lt(e, t) {
            if (typeof t != 'function' && t !== null)
                throw new TypeError(
                    'Super expression must either be null or a function'
                );
            (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
            })),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                t && en(e, t);
        }
        function Ct(e) {
            return (
                (Ct = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      }),
                Ct(e)
            );
        }
        function en(e, t) {
            return (
                (en = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (n, r) {
                          return (n.__proto__ = r), n;
                      }),
                en(e, t)
            );
        }
        function ga() {
            if (
                typeof Reflect > 'u' ||
                !Reflect.construct ||
                Reflect.construct.sham
            )
                return !1;
            if (typeof Proxy == 'function') return !0;
            try {
                return (
                    Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                );
            } catch {
                return !1;
            }
        }
        function ba(e, t) {
            if (e == null) return {};
            var n = {},
                r = Object.keys(e),
                o,
                i;
            for (i = 0; i < r.length; i++)
                (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
            return n;
        }
        function Gr(e, t) {
            if (e == null) return {};
            var n = ba(e, t),
                r,
                o;
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                    (r = i[o]),
                        !(t.indexOf(r) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(e, r) &&
                            (n[r] = e[r]);
            }
            return n;
        }
        function Te(e) {
            if (e === void 0)
                throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                );
            return e;
        }
        function va(e, t) {
            if (t && (typeof t == 'object' || typeof t == 'function')) return t;
            if (t !== void 0)
                throw new TypeError(
                    'Derived constructors may only return object or undefined'
                );
            return Te(e);
        }
        function ct(e) {
            var t = ga();
            return function () {
                var n = Ct(e),
                    r;
                if (t) {
                    var o = Ct(this).constructor;
                    r = Reflect.construct(n, arguments, o);
                } else r = n.apply(this, arguments);
                return va(this, r);
            };
        }
        function Ea(e, t) {
            if (typeof e != 'object' || e === null) return e;
            var n = e[Symbol.toPrimitive];
            if (n !== void 0) {
                var r = n.call(e, t || 'default');
                if (typeof r != 'object') return r;
                throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                );
            }
            return (t === 'string' ? String : Number)(e);
        }
        function Yr(e) {
            var t = Ea(e, 'string');
            return typeof t == 'symbol' ? t : String(t);
        }
        function Ta(e, t, n, r) {
            return typeof e == 'boolean'
                ? e
                : typeof e == 'function'
                  ? e(t, n, r)
                  : e
                    ? !!e
                    : !1;
        }
        function Ia(e, t) {
            return Object.hasOwnProperty.call(e, t);
        }
        function Ca(e, t, n, r) {
            return r
                ? new Error(r)
                : new Error(
                      'Required '
                          .concat(e[t], ' `')
                          .concat(t, '` was not specified in `')
                          .concat(n, '`.')
                  );
        }
        function Pa(e, t) {
            if (typeof e != 'function') throw new TypeError(wa);
            if (t && typeof t != 'string') throw new TypeError(Sa);
        }
        function ur(e, t, n) {
            return (
                Pa(e, n),
                function (r, o, i) {
                    for (
                        var a = arguments.length,
                            s = new Array(a > 3 ? a - 3 : 0),
                            c = 3;
                        c < a;
                        c++
                    )
                        s[c - 3] = arguments[c];
                    return Ta(t, r, o, i)
                        ? Ia(r, o)
                            ? e.apply(void 0, [r, o, i].concat(s))
                            : Ca(r, o, i, n)
                        : e.apply(void 0, [r, o, i].concat(s));
                }
            );
        }
        function Ee() {
            return !!(
                typeof window < 'u' &&
                window.document &&
                window.document.createElement
            );
        }
        function Vt() {
            return 'ontouchstart' in window && /Mobi/.test(navigator.userAgent);
        }
        function wt(e) {
            var t = e.title,
                n = e.data,
                r = e.warn,
                o = r === void 0 ? !1 : r,
                i = e.debug,
                a = i === void 0 ? !1 : i,
                s = o ? console.warn || console.error : console.log;
            a &&
                t &&
                n &&
                (console.groupCollapsed(
                    '%creact-floater: '.concat(t),
                    'color: #9b00ff; font-weight: bold; font-size: 12px;'
                ),
                Array.isArray(n)
                    ? n.forEach(function (c) {
                          A.plainObject(c) && c.key
                              ? s.apply(console, [c.key, c.value])
                              : s.apply(console, [c]);
                      })
                    : s.apply(console, [n]),
                console.groupEnd());
        }
        function Ra(e, t, n) {
            var r =
                arguments.length > 3 && arguments[3] !== void 0
                    ? arguments[3]
                    : !1;
            e.addEventListener(t, n, r);
        }
        function _a(e, t, n) {
            var r =
                arguments.length > 3 && arguments[3] !== void 0
                    ? arguments[3]
                    : !1;
            e.removeEventListener(t, n, r);
        }
        function xa(e, t, n) {
            var r =
                    arguments.length > 3 && arguments[3] !== void 0
                        ? arguments[3]
                        : !1,
                o;
            (o = function (i) {
                n(i), _a(e, t, o);
            }),
                Ra(e, t, o, r);
        }
        function fr() {}
        function $r(e) {
            var t = e.handleClick,
                n = e.styles,
                r = n.color,
                o = n.height,
                i = n.width,
                a = Gr(n, Aa);
            return y.createElement(
                'button',
                { 'aria-label': 'close', onClick: t, style: a, type: 'button' },
                y.createElement(
                    'svg',
                    {
                        width: ''.concat(i, 'px'),
                        height: ''.concat(o, 'px'),
                        viewBox: '0 0 18 18',
                        version: '1.1',
                        xmlns: 'http://www.w3.org/2000/svg',
                        preserveAspectRatio: 'xMidYMid',
                    },
                    y.createElement(
                        'g',
                        null,
                        y.createElement('path', {
                            d: 'M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z',
                            fill: r,
                        })
                    )
                )
            );
        }
        function Vr(e) {
            var t = e.content,
                n = e.footer,
                r = e.handleClick,
                o = e.open,
                i = e.positionWrapper,
                a = e.showCloseButton,
                s = e.title,
                c = e.styles,
                l = {
                    content: y.isValidElement(t)
                        ? t
                        : y.createElement(
                              'div',
                              {
                                  className: '__floater__content',
                                  style: c.content,
                              },
                              t
                          ),
                };
            return (
                s &&
                    (l.title = y.isValidElement(s)
                        ? s
                        : y.createElement(
                              'div',
                              { className: '__floater__title', style: c.title },
                              s
                          )),
                n &&
                    (l.footer = y.isValidElement(n)
                        ? n
                        : y.createElement(
                              'div',
                              {
                                  className: '__floater__footer',
                                  style: c.footer,
                              },
                              n
                          )),
                (a || i) &&
                    !A.boolean(o) &&
                    (l.close = y.createElement($r, {
                        styles: c.close,
                        handleClick: r,
                    })),
                y.createElement(
                    'div',
                    { className: '__floater__container', style: c.container },
                    l.close,
                    l.title,
                    l.content,
                    l.footer
                )
            );
        }
        function ka(e) {
            var t = (0, Jt.default)(Na, e.options || {});
            return {
                wrapper: {
                    cursor: 'help',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    zIndex: t.zIndex,
                },
                wrapperPosition: {
                    left: -1e3,
                    position: 'absolute',
                    top: -1e3,
                    visibility: 'hidden',
                },
                floater: {
                    display: 'inline-block',
                    filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))',
                    maxWidth: 300,
                    opacity: 0,
                    position: 'relative',
                    transition: 'opacity 0.3s',
                    visibility: 'hidden',
                    zIndex: t.zIndex,
                },
                floaterOpening: { opacity: 1, visibility: 'visible' },
                floaterWithAnimation: {
                    opacity: 1,
                    transition: 'opacity 0.3s, transform 0.2s',
                    visibility: 'visible',
                },
                floaterWithComponent: { maxWidth: '100%' },
                floaterClosing: { opacity: 0, visibility: 'visible' },
                floaterCentered: {
                    left: '50%',
                    position: 'fixed',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                },
                container: {
                    backgroundColor: '#fff',
                    color: '#666',
                    minHeight: 60,
                    minWidth: 200,
                    padding: 20,
                    position: 'relative',
                    zIndex: 10,
                },
                title: {
                    borderBottom: '1px solid #555',
                    color: '#555',
                    fontSize: 18,
                    marginBottom: 5,
                    paddingBottom: 6,
                    paddingRight: 18,
                },
                content: { fontSize: 15 },
                close: {
                    backgroundColor: 'transparent',
                    border: 0,
                    borderRadius: 0,
                    color: '#555',
                    fontSize: 0,
                    height: 15,
                    outline: 'none',
                    padding: 10,
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: 15,
                    WebkitAppearance: 'none',
                },
                footer: {
                    borderTop: '1px solid #ccc',
                    fontSize: 13,
                    marginTop: 10,
                    paddingTop: 5,
                },
                arrow: {
                    color: '#fff',
                    display: 'inline-flex',
                    length: 16,
                    margin: 8,
                    position: 'absolute',
                    spread: 32,
                },
                options: t,
            };
        }
        function Pe() {
            return !!(
                typeof window < 'u' &&
                window.document &&
                window.document.createElement
            );
        }
        function Xr(e) {
            return e ? e.getBoundingClientRect() : null;
        }
        function Ba(e = !0) {
            let { body: t, documentElement: n } = document;
            if (!t || !n) return 0;
            if (e) {
                let r = [
                        t.scrollHeight,
                        t.offsetHeight,
                        n.clientHeight,
                        n.scrollHeight,
                        n.offsetHeight,
                    ].sort((i, a) => i - a),
                    o = Math.floor(r.length / 2);
                return r.length % 2 === 0 ? (r[o - 1] + r[o]) / 2 : r[o];
            }
            return Math.max(
                t.scrollHeight,
                t.offsetHeight,
                n.clientHeight,
                n.scrollHeight,
                n.offsetHeight
            );
        }
        function _e(e) {
            return typeof e == 'string' ? document.querySelector(e) : e;
        }
        function Wa(e) {
            return !e || e.nodeType !== 1 ? null : getComputedStyle(e);
        }
        function xt(e, t, n) {
            if (!e) return Me();
            let r = (0, Ir.default)(e);
            if (r) {
                if (r.isSameNode(Me())) return n ? document : Me();
                if (!(r.scrollHeight > r.offsetHeight) && !t)
                    return (r.style.overflow = 'initial'), Me();
            }
            return r;
        }
        function ut(e, t) {
            if (!e) return !1;
            let n = xt(e, t);
            return n ? !n.isSameNode(Me()) : !1;
        }
        function Ua(e) {
            return e.offsetParent !== document.body;
        }
        function nt(e, t = 'fixed') {
            if (!e || !(e instanceof HTMLElement)) return !1;
            let { nodeName: n } = e,
                r = Wa(e);
            return n === 'BODY' || n === 'HTML'
                ? !1
                : r && r.position === t
                  ? !0
                  : e.parentNode
                    ? nt(e.parentNode, t)
                    : !1;
        }
        function Ha(e) {
            var t;
            if (!e) return !1;
            let n = e;
            for (; n && n !== document.body; ) {
                if (n instanceof HTMLElement) {
                    let { display: r, visibility: o } = getComputedStyle(n);
                    if (r === 'none' || o === 'hidden') return !1;
                }
                n = (t = n.parentElement) != null ? t : null;
            }
            return !0;
        }
        function Ga(e, t, n) {
            var r;
            let o = Xr(e),
                i = xt(e, n),
                a = ut(e, n),
                s = 0,
                c = (r = o?.top) != null ? r : 0;
            return (
                i instanceof HTMLElement &&
                    ((s = i.scrollTop),
                    !a && !nt(e) && (c += s),
                    i.isSameNode(Me()) || (c += Me().scrollTop)),
                Math.floor(c - t)
            );
        }
        function Ya(e, t, n) {
            var r;
            if (!e) return 0;
            let { offsetTop: o = 0, scrollTop: i = 0 } =
                    (r = (0, Ir.default)(e)) != null ? r : {},
                a = e.getBoundingClientRect().top + i;
            o && (ut(e, n) || Ua(e)) && (a -= o);
            let s = Math.floor(a - t);
            return s < 0 ? 0 : s;
        }
        function Me() {
            var e;
            return (e = document.scrollingElement) != null
                ? e
                : document.documentElement;
        }
        function za(e, t) {
            let { duration: n, element: r } = t;
            return new Promise((o, i) => {
                let { scrollTop: a } = r,
                    s = e > a ? e - a : a - e;
                gi.default.top(r, e, { duration: s < 100 ? 50 : n }, (c) =>
                    c &&
                    c.message !== 'Element already at target scroll position'
                        ? i(c)
                        : o()
                );
            });
        }
        function Jr(e = navigator.userAgent) {
            let t = e;
            return (
                typeof window > 'u'
                    ? (t = 'node')
                    : document.documentMode
                      ? (t = 'ie')
                      : /Edge/.test(e)
                        ? (t = 'edge')
                        : window.opera || e.includes(' OPR/')
                          ? (t = 'opera')
                          : typeof window.InstallTrigger < 'u'
                            ? (t = 'firefox')
                            : window.chrome
                              ? (t = 'chrome')
                              : /(Version\/([\d._]+).*Safari|CriOS|FxiOS| Mobile\/)/.test(
                                    e
                                ) && (t = 'safari'),
                t
            );
        }
        function Re(e) {
            let t = [],
                n = (r) => {
                    if (typeof r == 'string' || typeof r == 'number') t.push(r);
                    else if (Array.isArray(r)) r.forEach((o) => n(o));
                    else if (hn(r)) {
                        let { children: o } = r.props;
                        Array.isArray(o) ? o.forEach((i) => n(i)) : n(o);
                    }
                };
            return n(e), t.join(' ').trim();
        }
        function qa(e, t) {
            return !P.plainObject(e) || !P.array(t)
                ? !1
                : Object.keys(e).every((n) => t.includes(n));
        }
        function $a(e) {
            let t = /^#?([\da-f])([\da-f])([\da-f])$/i,
                n = e.replace(t, (o, i, a, s) => i + i + a + a + s + s),
                r = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(n);
            return r
                ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)]
                : [];
        }
        function pr(e) {
            return e.disableBeacon || e.placement === 'center';
        }
        function dr() {
            return !['chrome', 'safari', 'firefox', 'opera'].includes(Jr());
        }
        function Ae({ data: e, debug: t = !1, title: n, warn: r = !1 }) {
            let o = r ? console.warn || console.error : console.log;
            t &&
                (n && e
                    ? (console.groupCollapsed(
                          `%creact-joyride: ${n}`,
                          'color: #ff0044; font-weight: bold; font-size: 12px;'
                      ),
                      Array.isArray(e)
                          ? e.forEach((i) => {
                                P.plainObject(i) && i.key
                                    ? o.apply(console, [i.key, i.value])
                                    : o.apply(console, [i]);
                            })
                          : o.apply(console, [e]),
                      console.groupEnd())
                    : console.error('Missing title or data props'));
        }
        function Va(e) {
            return Object.keys(e);
        }
        function Zr(e, ...t) {
            if (!P.plainObject(e)) throw new TypeError('Expected an object');
            let n = {};
            for (let r in e)
                ({}).hasOwnProperty.call(e, r) &&
                    (t.includes(r) || (n[r] = e[r]));
            return n;
        }
        function Ka(e, ...t) {
            if (!P.plainObject(e)) throw new TypeError('Expected an object');
            if (!t.length) return e;
            let n = {};
            for (let r in e)
                ({}).hasOwnProperty.call(e, r) &&
                    t.includes(r) &&
                    (n[r] = e[r]);
            return n;
        }
        function Qa(e) {
            let {
                isFirstStep: t,
                lifecycle: n,
                previousLifecycle: r,
                scrollToFirstStep: o,
                step: i,
                target: a,
            } = e;
            return (
                !i.disableScrolling &&
                (!t || o || n === M.TOOLTIP) &&
                i.placement !== 'center' &&
                (!i.isFixed || !nt(a)) &&
                r !== n &&
                [M.BEACON, M.TOOLTIP].includes(n)
            );
        }
        function ts(e, t) {
            var n, r, o, i, a;
            let { floaterProps: s, styles: c } = e,
                l = (0, Ot.default)(
                    (n = t.floaterProps) != null ? n : {},
                    s ?? {}
                ),
                f = (0, Ot.default)(c ?? {}, (r = t.styles) != null ? r : {}),
                u = (0, Ot.default)(es, f.options || {}),
                p = t.placement === 'center' || t.disableBeacon,
                { width: d } = u;
            window.innerWidth > 480 && (d = 380),
                'width' in u &&
                    (d =
                        typeof u.width == 'number' &&
                        window.innerWidth < u.width
                            ? window.innerWidth - 30
                            : u.width);
            let h = {
                    bottom: 0,
                    left: 0,
                    overflow: 'hidden',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    zIndex: u.zIndex,
                },
                g = {
                    beacon: {
                        ...tt,
                        display: p ? 'none' : 'inline-block',
                        height: u.beaconSize,
                        position: 'relative',
                        width: u.beaconSize,
                        zIndex: u.zIndex,
                    },
                    beaconInner: {
                        animation:
                            'joyride-beacon-inner 1.2s infinite ease-in-out',
                        backgroundColor: u.primaryColor,
                        borderRadius: '50%',
                        display: 'block',
                        height: '50%',
                        left: '50%',
                        opacity: 0.7,
                        position: 'absolute',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '50%',
                    },
                    beaconOuter: {
                        animation:
                            'joyride-beacon-outer 1.2s infinite ease-in-out',
                        backgroundColor: `rgba(${$a(u.primaryColor).join(',')}, 0.2)`,
                        border: `2px solid ${u.primaryColor}`,
                        borderRadius: '50%',
                        boxSizing: 'border-box',
                        display: 'block',
                        height: '100%',
                        left: 0,
                        opacity: 0.9,
                        position: 'absolute',
                        top: 0,
                        transformOrigin: 'center',
                        width: '100%',
                    },
                    tooltip: {
                        backgroundColor: u.backgroundColor,
                        borderRadius: 5,
                        boxSizing: 'border-box',
                        color: u.textColor,
                        fontSize: 16,
                        maxWidth: '100%',
                        padding: 15,
                        position: 'relative',
                        width: d,
                    },
                    tooltipContainer: { lineHeight: 1.4, textAlign: 'center' },
                    tooltipTitle: { fontSize: 18, margin: 0 },
                    tooltipContent: { padding: '20px 10px' },
                    tooltipFooter: {
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginTop: 15,
                    },
                    tooltipFooterSpacer: { flex: 1 },
                    buttonNext: {
                        ...tt,
                        backgroundColor: u.primaryColor,
                        borderRadius: 4,
                        color: '#fff',
                    },
                    buttonBack: {
                        ...tt,
                        color: u.primaryColor,
                        marginLeft: 'auto',
                        marginRight: 5,
                    },
                    buttonClose: {
                        ...tt,
                        color: u.textColor,
                        height: 14,
                        padding: 15,
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        width: 14,
                    },
                    buttonSkip: { ...tt, color: u.textColor, fontSize: 14 },
                    overlay: {
                        ...h,
                        backgroundColor: u.overlayColor,
                        mixBlendMode: 'hard-light',
                    },
                    overlayLegacy: { ...h },
                    overlayLegacyCenter: {
                        ...h,
                        backgroundColor: u.overlayColor,
                    },
                    spotlight: { ...hr, backgroundColor: 'gray' },
                    spotlightLegacy: {
                        ...hr,
                        boxShadow: `0 0 0 9999px ${u.overlayColor}, ${u.spotlightShadow}`,
                    },
                    floaterStyles: {
                        arrow: {
                            color:
                                (a =
                                    (i =
                                        (o = l?.styles) == null
                                            ? void 0
                                            : o.arrow) == null
                                        ? void 0
                                        : i.color) != null
                                    ? a
                                    : u.arrowColor,
                        },
                        options: { zIndex: u.zIndex + 100 },
                    },
                    options: u,
                };
            return (0, Ot.default)(g, f);
        }
        function ns(e) {
            return Ka(
                e,
                'beaconComponent',
                'disableCloseOnEsc',
                'disableOverlay',
                'disableOverlayClose',
                'disableScrolling',
                'disableScrollParentFix',
                'floaterProps',
                'hideBackButton',
                'hideCloseButton',
                'locale',
                'showProgress',
                'showSkipButton',
                'spotlightClicks',
                'spotlightPadding',
                'styles',
                'tooltipComponent'
            );
        }
        function Fe(e, t) {
            var n, r, o, i, a, s;
            let c = t ?? {},
                l = Et.default.all([Ja, ns(e), c], {
                    isMergeableObject: P.plainObject,
                }),
                f = ts(e, l),
                u = ut(_e(l.target), l.disableScrollParentFix),
                p = Et.default.all([
                    Xa,
                    (n = e.floaterProps) != null ? n : {},
                    (r = l.floaterProps) != null ? r : {},
                ]);
            return (
                (p.offset = l.offset),
                (p.styles = (0, Et.default)(
                    (o = p.styles) != null ? o : {},
                    f.floaterStyles
                )),
                (p.offset +=
                    (a =
                        (i = e.spotlightPadding) != null
                            ? i
                            : l.spotlightPadding) != null
                        ? a
                        : 0),
                l.placementBeacon &&
                    p.wrapperOptions &&
                    (p.wrapperOptions.placement = l.placementBeacon),
                u &&
                    p.options.preventOverflow &&
                    (p.options.preventOverflow.boundariesElement = 'window'),
                {
                    ...l,
                    locale: Et.default.all([
                        eo,
                        (s = e.locale) != null ? s : {},
                        l.locale || {},
                    ]),
                    floaterProps: p,
                    styles: Zr(f, 'floaterStyles'),
                }
            );
        }
        function to(e, t = !1) {
            return P.plainObject(e)
                ? e.target
                    ? !0
                    : (Ae({
                          title: 'validateStep',
                          data: 'target is missing from the step',
                          warn: !0,
                          debug: t,
                      }),
                      !1)
                : (Ae({
                      title: 'validateStep',
                      data: 'step must be an object',
                      warn: !0,
                      debug: t,
                  }),
                  !1);
        }
        function yr(e, t = !1) {
            return P.array(e)
                ? e.every((n) => to(n, t))
                : (Ae({
                      title: 'validateSteps',
                      data: 'steps must be an array',
                      warn: !0,
                      debug: t,
                  }),
                  !1);
        }
        function os(e) {
            return new rs(e);
        }
        function is({ styles: e }) {
            return q('div', {
                key: 'JoyrideSpotlight',
                className: 'react-joyride__spotlight',
                'data-test-id': 'spotlight',
                style: e,
            });
        }
        function fs({ styles: e, ...t }) {
            let { color: n, height: r, width: o, ...i } = e;
            return y.createElement(
                'button',
                { style: i, type: 'button', ...t },
                y.createElement(
                    'svg',
                    {
                        height: typeof r == 'number' ? `${r}px` : r,
                        preserveAspectRatio: 'xMidYMid',
                        version: '1.1',
                        viewBox: '0 0 18 18',
                        width: typeof o == 'number' ? `${o}px` : o,
                        xmlns: 'http://www.w3.org/2000/svg',
                    },
                    y.createElement(
                        'g',
                        null,
                        y.createElement('path', {
                            d: 'M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z',
                            fill: n,
                        })
                    )
                )
            );
        }
        function ds(e) {
            let {
                    backProps: t,
                    closeProps: n,
                    continuous: r,
                    index: o,
                    isLastStep: i,
                    primaryProps: a,
                    size: s,
                    skipProps: c,
                    step: l,
                    tooltipProps: f,
                } = e,
                {
                    content: u,
                    hideBackButton: p,
                    hideCloseButton: d,
                    hideFooter: h,
                    locale: g,
                    showProgress: x,
                    showSkipButton: b,
                    styles: S,
                    title: m,
                } = l,
                { back: O, close: w, last: $, next: N, skip: ee } = g,
                K = { primary: w };
            return (
                r &&
                    ((K.primary = i ? $ : N),
                    x &&
                        (K.primary = q(
                            'span',
                            null,
                            K.primary,
                            ' (',
                            o + 1,
                            '/',
                            s,
                            ')'
                        ))),
                K.primary &&
                    (K.primary = q(
                        'button',
                        {
                            'data-test-id': 'button-primary',
                            style: S.buttonNext,
                            type: 'button',
                            ...a,
                        },
                        K.primary
                    )),
                b &&
                    !i &&
                    (K.skip = q(
                        'button',
                        {
                            'aria-live': 'off',
                            'data-test-id': 'button-skip',
                            style: S.buttonSkip,
                            type: 'button',
                            ...c,
                        },
                        ee
                    )),
                !p &&
                    o > 0 &&
                    (K.back = q(
                        'button',
                        {
                            'data-test-id': 'button-back',
                            style: S.buttonBack,
                            type: 'button',
                            ...t,
                        },
                        O
                    )),
                (K.close =
                    !d &&
                    q(ps, {
                        'data-test-id': 'button-close',
                        styles: S.buttonClose,
                        ...n,
                    })),
                q(
                    'div',
                    {
                        key: 'JoyrideTooltip',
                        'aria-label': Re(m) || Re(u),
                        className: 'react-joyride__tooltip',
                        style: S.tooltip,
                        ...f,
                    },
                    q(
                        'div',
                        { style: S.tooltipContainer },
                        m &&
                            q(
                                'h1',
                                { 'aria-label': Re(m), style: S.tooltipTitle },
                                m
                            ),
                        q('div', { style: S.tooltipContent }, u)
                    ),
                    !h &&
                        q(
                            'div',
                            { style: S.tooltipFooter },
                            q('div', { style: S.tooltipFooterSpacer }, K.skip),
                            K.back,
                            K.primary
                        ),
                    K.close
                )
            );
        }
        function Rs({ step: e, steps: t, onClose: n, onComplete: r }) {
            let [o, i] = pe(null),
                a = Cn();
            return (
                fe(() => {
                    let s;
                    return (
                        i((c) => {
                            let l = t.findIndex(({ key: f }) => f === e);
                            return l === -1
                                ? null
                                : l === c
                                  ? c
                                  : ((s = setTimeout(i, 500, l)), null);
                        }),
                        () => clearTimeout(s)
                    );
                }, [e, t]),
                o === null
                    ? null
                    : y.createElement(gs, {
                          continuous: !0,
                          steps: t,
                          stepIndex: o,
                          spotlightPadding: 0,
                          disableCloseOnEsc: !0,
                          disableOverlayClose: !0,
                          disableScrolling: !0,
                          callback: (s) => {
                              s.action === z.CLOSE && n(),
                                  s.action === z.NEXT &&
                                      s.index === s.size - 1 &&
                                      r();
                          },
                          floaterProps: {
                              disableAnimation: !0,
                              styles: {
                                  arrow: { length: 20, spread: 2 },
                                  floater: {
                                      filter:
                                          a.base === 'light'
                                              ? 'drop-shadow(0px 5px 5px rgba(0,0,0,0.05)) drop-shadow(0 1px 3px rgba(0,0,0,0.1))'
                                              : 'drop-shadow(#fff5 0px 0px 0.5px) drop-shadow(#fff5 0px 0px 0.5px)',
                                  },
                              },
                          },
                          tooltipComponent: Ps,
                          styles: {
                              overlay: {
                                  mixBlendMode: 'unset',
                                  backgroundColor:
                                      t[o]?.target === 'body'
                                          ? 'rgba(27, 28, 29, 0.2)'
                                          : 'none',
                              },
                              spotlight: {
                                  backgroundColor: 'none',
                                  border: `solid 2px ${a.color.secondary}`,
                                  boxShadow:
                                      '0px 0px 0px 9999px rgba(27, 28, 29, 0.2)',
                              },
                              tooltip: {
                                  width: 280,
                                  color: a.color.lightest,
                                  background: a.color.secondary,
                              },
                              options: {
                                  zIndex: 9998,
                                  primaryColor: a.color.secondary,
                                  arrowColor: a.color.secondary,
                              },
                          },
                      })
            );
        }
        function Hs({ api: e }) {
            let [t, n] = pe(!0),
                [r, o] = pe(!1),
                [i, a] = pe('1:Intro'),
                [s, c] = pe(),
                [l, f] = pe(),
                [u, p] = pe(),
                [d, h] = pe(),
                g = ze(
                    (N) => {
                        try {
                            let { id: ee, refId: K } =
                                e.getCurrentStoryData() || {};
                            (ee !== N || K !== void 0) && e.selectStory(N);
                        } catch {}
                    },
                    [e]
                ),
                x = ze(() => {
                    let N = new URL(window.location.href),
                        ee = decodeURIComponent(N.searchParams.get('path'));
                    (N.search = `?path=${ee}&onboarding=false`),
                        history.replaceState({}, '', N.href),
                        e.setQueryParams({ onboarding: 'false' }),
                        n(!1);
                }, [e, n]),
                b = ze(() => {
                    e.emit(Un, {
                        step: '6:FinishedOnboarding',
                        type: 'telemetry',
                    }),
                        g('configure-your-project--docs'),
                        x();
                }, [e, g, x]);
            if (
                (fe(() => {
                    e.setQueryParams({ onboarding: 'true' }),
                        g('example-button--primary'),
                        e.togglePanel(!0),
                        e.togglePanelPosition('bottom'),
                        e.setSelectedPanel('addon-controls');
                }, [e, g]),
                fe(() => {
                    let N = new MutationObserver(() => {
                        c(document.getElementById('control-primary')),
                            f(document.getElementById('save-from-controls')),
                            p(document.getElementById('create-new-story-form'));
                    });
                    return (
                        N.observe(document.body, {
                            childList: !0,
                            subtree: !0,
                        }),
                        () => N.disconnect()
                    );
                }, []),
                fe(() => {
                    a((N) =>
                        [
                            '1:Intro',
                            '5:StoryCreated',
                            '6:FinishedOnboarding',
                        ].includes(N)
                            ? N
                            : u
                              ? '4:CreateStory'
                              : l
                                ? '3:SaveFromControls'
                                : s
                                  ? '2:Controls'
                                  : '1:Intro'
                    );
                }, [u, s, l]),
                fe(
                    () =>
                        e.on(bn, ({ payload: N, success: ee }) => {
                            !ee ||
                                !N?.newStoryName ||
                                (h(N),
                                o(!0),
                                a('5:StoryCreated'),
                                setTimeout(() =>
                                    e.clearNotification('save-story-success')
                                ));
                        }),
                    [e]
                ),
                fe(() => e.emit(Un, { step: i, type: 'telemetry' }), [e, i]),
                !t)
            )
                return null;
            let S = d?.sourceFileContent,
                m = S?.lastIndexOf(`export const ${d?.newStoryExportName}`),
                O = S?.slice(m).trim(),
                w = S?.slice(0, m).split(`
`).length,
                $ = [
                    {
                        key: '2:Controls',
                        target: '#control-primary',
                        title: 'Interactive story playground',
                        content: y.createElement(
                            y.Fragment,
                            null,
                            'See how a story renders with different data and state without touching code. Try it out by toggling this button.',
                            y.createElement(Wn, {
                                targetSelector: '#control-primary',
                                pulsating: !0,
                            })
                        ),
                        offset: 20,
                        placement: 'right',
                        disableBeacon: !0,
                        disableOverlay: !0,
                        spotlightClicks: !0,
                        onNextButtonClick: () => {
                            document.querySelector('#control-primary').click();
                        },
                    },
                    {
                        key: '3:SaveFromControls',
                        target: 'button[aria-label="Create new story with these settings"]',
                        title: 'Save your changes as a new story',
                        content: y.createElement(
                            y.Fragment,
                            null,
                            'Great! Storybook stories represent the key states of each of your components. After modifying a story, you can save your changes from here or reset it.',
                            y.createElement(Wn, {
                                targetSelector:
                                    "button[aria-label='Create new story with these settings']",
                            })
                        ),
                        offset: 6,
                        placement: 'top',
                        disableBeacon: !0,
                        disableOverlay: !0,
                        spotlightClicks: !0,
                        onNextButtonClick: () => {
                            document
                                .querySelector(
                                    'button[aria-label="Create new story with these settings"]'
                                )
                                .click();
                        },
                        styles: { tooltip: { width: 400 } },
                    },
                    {
                        key: '5:StoryCreated',
                        target: '#storybook-explorer-tree [data-selected="true"]',
                        title: 'You just added your first story!',
                        content: y.createElement(
                            y.Fragment,
                            null,
                            'Well done! You just created your first story from the Storybook manager. This automatically added a few lines of code in',
                            ' ',
                            y.createElement(Bs, null, d?.sourceFileName),
                            '.',
                            O &&
                                y.createElement(
                                    Bt,
                                    { theme: Wt(In.dark) },
                                    y.createElement(
                                        Ws,
                                        null,
                                        y.createElement(
                                            Sn,
                                            {
                                                language: 'jsx',
                                                showLineNumbers: !0,
                                                startingLineNumber: w,
                                            },
                                            O
                                        )
                                    )
                                )
                        ),
                        offset: 12,
                        placement: 'right',
                        disableBeacon: !0,
                        disableOverlay: !0,
                        styles: { tooltip: { width: 400 } },
                    },
                ];
            return y.createElement(
                Bt,
                { theme: Us },
                r &&
                    y.createElement(Zo, {
                        numberOfPieces: 800,
                        recycle: !1,
                        tweenDuration: 2e4,
                        onConfettiComplete: (N) => {
                            N?.reset(), o(!1);
                        },
                    }),
                i === '1:Intro'
                    ? y.createElement(Fs, { onDismiss: () => a('2:Controls') })
                    : y.createElement(Rs, {
                          step: i,
                          steps: $,
                          onClose: x,
                          onComplete: b,
                      })
            );
        }
        var Bo,
            br,
            Wo,
            vr,
            Uo,
            Ho,
            he,
            Go,
            Le,
            Yo,
            zo,
            tn,
            qo,
            Er,
            $o,
            Or,
            wr,
            Vo,
            Ko,
            Qo,
            Xo,
            Jo,
            Un,
            ni,
            ri,
            Hn,
            Gn,
            oi,
            ci,
            ui,
            di,
            P,
            gi,
            Ir,
            Et,
            Ot,
            E,
            rt,
            bi,
            Oi,
            wi,
            Kn,
            Qn,
            Ii,
            Ci,
            Ue,
            de,
            Wi,
            Wr,
            qt,
            $t,
            Zi,
            ea,
            Rt,
            er,
            Jt,
            ta,
            na,
            ra,
            A,
            aa,
            sa,
            tr,
            nr,
            la,
            Zt,
            Oa,
            wa,
            Sa,
            U,
            Ze,
            zr,
            qr,
            Aa,
            Kr,
            Qr,
            Na,
            Ma,
            La,
            un,
            ja,
            Da,
            Fa,
            R,
            z,
            me,
            M,
            D,
            et,
            Xa,
            eo,
            Ja,
            Za,
            es,
            tt,
            hr,
            no,
            mr,
            rs,
            as,
            ss,
            ls,
            cs,
            us,
            ps,
            hs,
            ys,
            ms,
            ro,
            gs,
            bs,
            vs,
            Es,
            Os,
            ws,
            Ss,
            Ts,
            Is,
            Cs,
            Ps,
            _s,
            oo,
            xs,
            As,
            Ns,
            ks,
            Ms,
            Ls,
            js,
            Ds,
            gr,
            Fs,
            Bs,
            Ws,
            Us,
            ao = se(() => {
                Q();
                X();
                J();
                qe();
                qe();
                Tn();
                Ft();
                Pn();
                dt();
                dt();
                jn();
                Bn();
                (Bo = Object.create),
                    (br = Object.defineProperty),
                    (Wo = Object.getOwnPropertyDescriptor),
                    (vr = Object.getOwnPropertyNames),
                    (Uo = Object.getPrototypeOf),
                    (Ho = Object.prototype.hasOwnProperty),
                    (he = (e, t) =>
                        function () {
                            return (
                                t ||
                                    (0, e[vr(e)[0]])(
                                        (t = { exports: {} }).exports,
                                        t
                                    ),
                                t.exports
                            );
                        }),
                    (Go = (e, t, n, r) => {
                        if (
                            (t && typeof t == 'object') ||
                            typeof t == 'function'
                        )
                            for (let o of vr(t))
                                !Ho.call(e, o) &&
                                    o !== n &&
                                    br(e, o, {
                                        get: () => t[o],
                                        enumerable:
                                            !(r = Wo(t, o)) || r.enumerable,
                                    });
                        return e;
                    }),
                    (Le = (e, t, n) => (
                        (n = e != null ? Bo(Uo(e)) : {}),
                        Go(
                            t || !e || !e.__esModule
                                ? br(n, 'default', { value: e, enumerable: !0 })
                                : n,
                            e
                        )
                    )),
                    (Yo = he({
                        '../../node_modules/scroll/index.js'(e, t) {
                            var n = new Error(
                                    'Element already at target scroll position'
                                ),
                                r = new Error('Scroll cancelled'),
                                o = Math.min,
                                i = Date.now;
                            t.exports = {
                                left: a('scrollLeft'),
                                top: a('scrollTop'),
                            };
                            function a(l) {
                                return function (f, u, p, d) {
                                    (p = p || {}),
                                        typeof p == 'function' &&
                                            ((d = p), (p = {})),
                                        typeof d != 'function' && (d = c);
                                    var h = i(),
                                        g = f[l],
                                        x = p.ease || s,
                                        b = isNaN(p.duration)
                                            ? 350
                                            : +p.duration,
                                        S = !1;
                                    return (
                                        g === u
                                            ? d(n, f[l])
                                            : requestAnimationFrame(O),
                                        m
                                    );
                                    function m() {
                                        S = !0;
                                    }
                                    function O(w) {
                                        if (S) return d(r, f[l]);
                                        var $ = i(),
                                            N = o(1, ($ - h) / b),
                                            ee = x(N);
                                        (f[l] = ee * (u - g) + g),
                                            N < 1
                                                ? requestAnimationFrame(O)
                                                : requestAnimationFrame(
                                                      function () {
                                                          d(null, f[l]);
                                                      }
                                                  );
                                    }
                                };
                            }
                            function s(l) {
                                return 0.5 * (1 - Math.cos(Math.PI * l));
                            }
                            function c() {}
                        },
                    })),
                    (zo = he({
                        '../../node_modules/scrollparent/scrollparent.js'(
                            e,
                            t
                        ) {
                            (function (n, r) {
                                typeof define == 'function' && define.amd
                                    ? define([], r)
                                    : typeof t == 'object' && t.exports
                                      ? (t.exports = r())
                                      : (n.Scrollparent = r());
                            })(e, function () {
                                function n(o) {
                                    var i = getComputedStyle(
                                        o,
                                        null
                                    ).getPropertyValue('overflow');
                                    return (
                                        i.indexOf('scroll') > -1 ||
                                        i.indexOf('auto') > -1
                                    );
                                }
                                function r(o) {
                                    if (
                                        o instanceof HTMLElement ||
                                        o instanceof SVGElement
                                    ) {
                                        for (
                                            var i = o.parentNode;
                                            i.parentNode;

                                        ) {
                                            if (n(i)) return i;
                                            i = i.parentNode;
                                        }
                                        return (
                                            document.scrollingElement ||
                                            document.documentElement
                                        );
                                    }
                                }
                                return r;
                            });
                        },
                    })),
                    (tn = he({
                        '../../node_modules/deepmerge/dist/cjs.js'(e, t) {
                            var n = function (m) {
                                return r(m) && !o(m);
                            };
                            function r(m) {
                                return !!m && typeof m == 'object';
                            }
                            function o(m) {
                                var O = Object.prototype.toString.call(m);
                                return (
                                    O === '[object RegExp]' ||
                                    O === '[object Date]' ||
                                    s(m)
                                );
                            }
                            var i = typeof Symbol == 'function' && Symbol.for,
                                a = i ? Symbol.for('react.element') : 60103;
                            function s(m) {
                                return m.$$typeof === a;
                            }
                            function c(m) {
                                return Array.isArray(m) ? [] : {};
                            }
                            function l(m, O) {
                                return O.clone !== !1 && O.isMergeableObject(m)
                                    ? b(c(m), m, O)
                                    : m;
                            }
                            function f(m, O, w) {
                                return m.concat(O).map(function ($) {
                                    return l($, w);
                                });
                            }
                            function u(m, O) {
                                if (!O.customMerge) return b;
                                var w = O.customMerge(m);
                                return typeof w == 'function' ? w : b;
                            }
                            function p(m) {
                                return Object.getOwnPropertySymbols
                                    ? Object.getOwnPropertySymbols(m).filter(
                                          function (O) {
                                              return Object.propertyIsEnumerable.call(
                                                  m,
                                                  O
                                              );
                                          }
                                      )
                                    : [];
                            }
                            function d(m) {
                                return Object.keys(m).concat(p(m));
                            }
                            function h(m, O) {
                                try {
                                    return O in m;
                                } catch {
                                    return !1;
                                }
                            }
                            function g(m, O) {
                                return (
                                    h(m, O) &&
                                    !(
                                        Object.hasOwnProperty.call(m, O) &&
                                        Object.propertyIsEnumerable.call(m, O)
                                    )
                                );
                            }
                            function x(m, O, w) {
                                var $ = {};
                                return (
                                    w.isMergeableObject(m) &&
                                        d(m).forEach(function (N) {
                                            $[N] = l(m[N], w);
                                        }),
                                    d(O).forEach(function (N) {
                                        g(m, N) ||
                                            (h(m, N) &&
                                            w.isMergeableObject(O[N])
                                                ? ($[N] = u(N, w)(
                                                      m[N],
                                                      O[N],
                                                      w
                                                  ))
                                                : ($[N] = l(O[N], w)));
                                    }),
                                    $
                                );
                            }
                            function b(m, O, w) {
                                (w = w || {}),
                                    (w.arrayMerge = w.arrayMerge || f),
                                    (w.isMergeableObject =
                                        w.isMergeableObject || n),
                                    (w.cloneUnlessOtherwiseSpecified = l);
                                var $ = Array.isArray(O),
                                    N = Array.isArray(m),
                                    ee = $ === N;
                                return ee
                                    ? $
                                        ? w.arrayMerge(m, O, w)
                                        : x(m, O, w)
                                    : l(O, w);
                            }
                            b.all = function (m, O) {
                                if (!Array.isArray(m))
                                    throw new Error(
                                        'first argument should be an array'
                                    );
                                return m.reduce(function (w, $) {
                                    return b(w, $, O);
                                }, {});
                            };
                            var S = b;
                            t.exports = S;
                        },
                    })),
                    (qo = he({
                        '../../node_modules/react-is/cjs/react-is.development.js'(
                            e
                        ) {
                            (function () {
                                var t =
                                        typeof Symbol == 'function' &&
                                        Symbol.for,
                                    n = t ? Symbol.for('react.element') : 60103,
                                    r = t ? Symbol.for('react.portal') : 60106,
                                    o = t
                                        ? Symbol.for('react.fragment')
                                        : 60107,
                                    i = t
                                        ? Symbol.for('react.strict_mode')
                                        : 60108,
                                    a = t
                                        ? Symbol.for('react.profiler')
                                        : 60114,
                                    s = t
                                        ? Symbol.for('react.provider')
                                        : 60109,
                                    c = t ? Symbol.for('react.context') : 60110,
                                    l = t
                                        ? Symbol.for('react.async_mode')
                                        : 60111,
                                    f = t
                                        ? Symbol.for('react.concurrent_mode')
                                        : 60111,
                                    u = t
                                        ? Symbol.for('react.forward_ref')
                                        : 60112,
                                    p = t
                                        ? Symbol.for('react.suspense')
                                        : 60113,
                                    d = t
                                        ? Symbol.for('react.suspense_list')
                                        : 60120,
                                    h = t ? Symbol.for('react.memo') : 60115,
                                    g = t ? Symbol.for('react.lazy') : 60116,
                                    x = t ? Symbol.for('react.block') : 60121,
                                    b = t
                                        ? Symbol.for('react.fundamental')
                                        : 60117,
                                    S = t
                                        ? Symbol.for('react.responder')
                                        : 60118,
                                    m = t ? Symbol.for('react.scope') : 60119;
                                function O(T) {
                                    return (
                                        typeof T == 'string' ||
                                        typeof T == 'function' ||
                                        T === o ||
                                        T === f ||
                                        T === a ||
                                        T === i ||
                                        T === p ||
                                        T === d ||
                                        (typeof T == 'object' &&
                                            T !== null &&
                                            (T.$$typeof === g ||
                                                T.$$typeof === h ||
                                                T.$$typeof === s ||
                                                T.$$typeof === c ||
                                                T.$$typeof === u ||
                                                T.$$typeof === b ||
                                                T.$$typeof === S ||
                                                T.$$typeof === m ||
                                                T.$$typeof === x))
                                    );
                                }
                                function w(T) {
                                    if (typeof T == 'object' && T !== null) {
                                        var ne = T.$$typeof;
                                        switch (ne) {
                                            case n:
                                                var Se = T.type;
                                                switch (Se) {
                                                    case l:
                                                    case f:
                                                    case o:
                                                    case a:
                                                    case i:
                                                    case p:
                                                        return Se;
                                                    default:
                                                        var fn =
                                                            Se && Se.$$typeof;
                                                        switch (fn) {
                                                            case c:
                                                            case u:
                                                            case g:
                                                            case h:
                                                            case s:
                                                                return fn;
                                                            default:
                                                                return ne;
                                                        }
                                                }
                                            case r:
                                                return ne;
                                        }
                                    }
                                }
                                var $ = l,
                                    N = f,
                                    ee = c,
                                    K = s,
                                    ye = n,
                                    At = u,
                                    Nt = o,
                                    ft = g,
                                    kt = h,
                                    Mt = r,
                                    De = a,
                                    Lt = i,
                                    ve = p,
                                    Ie = !1;
                                function jt(T) {
                                    return (
                                        Ie ||
                                            ((Ie = !0),
                                            console.warn(
                                                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
                                            )),
                                        pt(T) || w(T) === l
                                    );
                                }
                                function pt(T) {
                                    return w(T) === f;
                                }
                                function v(T) {
                                    return w(T) === c;
                                }
                                function _(T) {
                                    return w(T) === s;
                                }
                                function W(T) {
                                    return (
                                        typeof T == 'object' &&
                                        T !== null &&
                                        T.$$typeof === n
                                    );
                                }
                                function F(T) {
                                    return w(T) === u;
                                }
                                function L(T) {
                                    return w(T) === o;
                                }
                                function H(T) {
                                    return w(T) === g;
                                }
                                function j(T) {
                                    return w(T) === h;
                                }
                                function B(T) {
                                    return w(T) === r;
                                }
                                function G(T) {
                                    return w(T) === a;
                                }
                                function V(T) {
                                    return w(T) === i;
                                }
                                function Y(T) {
                                    return w(T) === p;
                                }
                                (e.AsyncMode = $),
                                    (e.ConcurrentMode = N),
                                    (e.ContextConsumer = ee),
                                    (e.ContextProvider = K),
                                    (e.Element = ye),
                                    (e.ForwardRef = At),
                                    (e.Fragment = Nt),
                                    (e.Lazy = ft),
                                    (e.Memo = kt),
                                    (e.Portal = Mt),
                                    (e.Profiler = De),
                                    (e.StrictMode = Lt),
                                    (e.Suspense = ve),
                                    (e.isAsyncMode = jt),
                                    (e.isConcurrentMode = pt),
                                    (e.isContextConsumer = v),
                                    (e.isContextProvider = _),
                                    (e.isElement = W),
                                    (e.isForwardRef = F),
                                    (e.isFragment = L),
                                    (e.isLazy = H),
                                    (e.isMemo = j),
                                    (e.isPortal = B),
                                    (e.isProfiler = G),
                                    (e.isStrictMode = V),
                                    (e.isSuspense = Y),
                                    (e.isValidElementType = O),
                                    (e.typeOf = w);
                            })();
                        },
                    })),
                    (Er = he({
                        '../../node_modules/react-is/index.js'(e, t) {
                            t.exports = qo();
                        },
                    })),
                    ($o = he({
                        '../../node_modules/object-assign/index.js'(e, t) {
                            var n = Object.getOwnPropertySymbols,
                                r = Object.prototype.hasOwnProperty,
                                o = Object.prototype.propertyIsEnumerable;
                            function i(s) {
                                if (s == null)
                                    throw new TypeError(
                                        'Object.assign cannot be called with null or undefined'
                                    );
                                return Object(s);
                            }
                            function a() {
                                try {
                                    if (!Object.assign) return !1;
                                    var s = new String('abc');
                                    if (
                                        ((s[5] = 'de'),
                                        Object.getOwnPropertyNames(s)[0] ===
                                            '5')
                                    )
                                        return !1;
                                    for (var c = {}, l = 0; l < 10; l++)
                                        c['_' + String.fromCharCode(l)] = l;
                                    var f = Object.getOwnPropertyNames(c).map(
                                        function (p) {
                                            return c[p];
                                        }
                                    );
                                    if (f.join('') !== '0123456789') return !1;
                                    var u = {};
                                    return (
                                        'abcdefghijklmnopqrst'
                                            .split('')
                                            .forEach(function (p) {
                                                u[p] = p;
                                            }),
                                        Object.keys(Object.assign({}, u)).join(
                                            ''
                                        ) === 'abcdefghijklmnopqrst'
                                    );
                                } catch {
                                    return !1;
                                }
                            }
                            t.exports = a()
                                ? Object.assign
                                : function (s, c) {
                                      for (
                                          var l, f = i(s), u, p = 1;
                                          p < arguments.length;
                                          p++
                                      ) {
                                          l = Object(arguments[p]);
                                          for (var d in l)
                                              r.call(l, d) && (f[d] = l[d]);
                                          if (n) {
                                              u = n(l);
                                              for (var h = 0; h < u.length; h++)
                                                  o.call(l, u[h]) &&
                                                      (f[u[h]] = l[u[h]]);
                                          }
                                      }
                                      return f;
                                  };
                        },
                    })),
                    (Or = he({
                        '../../node_modules/prop-types/lib/ReactPropTypesSecret.js'(
                            e,
                            t
                        ) {
                            var n =
                                'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
                            t.exports = n;
                        },
                    })),
                    (wr = he({
                        '../../node_modules/prop-types/lib/has.js'(e, t) {
                            t.exports = Function.call.bind(
                                Object.prototype.hasOwnProperty
                            );
                        },
                    })),
                    (Vo = he({
                        '../../node_modules/prop-types/checkPropTypes.js'(
                            e,
                            t
                        ) {
                            var n = function () {};
                            (r = Or()),
                                (o = {}),
                                (i = wr()),
                                (n = function (s) {
                                    var c = 'Warning: ' + s;
                                    typeof console < 'u' && console.error(c);
                                    try {
                                        throw new Error(c);
                                    } catch {}
                                });
                            var r, o, i;
                            function a(s, c, l, f, u) {
                                for (var p in s)
                                    if (i(s, p)) {
                                        var d;
                                        try {
                                            if (typeof s[p] != 'function') {
                                                var h = Error(
                                                    (f || 'React class') +
                                                        ': ' +
                                                        l +
                                                        ' type `' +
                                                        p +
                                                        '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                                                        typeof s[p] +
                                                        '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                                                );
                                                throw (
                                                    ((h.name =
                                                        'Invariant Violation'),
                                                    h)
                                                );
                                            }
                                            d = s[p](c, p, f, l, null, r);
                                        } catch (x) {
                                            d = x;
                                        }
                                        if (
                                            (d &&
                                                !(d instanceof Error) &&
                                                n(
                                                    (f || 'React class') +
                                                        ': type specification of ' +
                                                        l +
                                                        ' `' +
                                                        p +
                                                        '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                                                        typeof d +
                                                        '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
                                                ),
                                            d instanceof Error &&
                                                !(d.message in o))
                                        ) {
                                            o[d.message] = !0;
                                            var g = u ? u() : '';
                                            n(
                                                'Failed ' +
                                                    l +
                                                    ' type: ' +
                                                    d.message +
                                                    (g ?? '')
                                            );
                                        }
                                    }
                            }
                            (a.resetWarningCache = function () {
                                o = {};
                            }),
                                (t.exports = a);
                        },
                    })),
                    (Ko = he({
                        '../../node_modules/prop-types/factoryWithTypeCheckers.js'(
                            e,
                            t
                        ) {
                            var n = Er(),
                                r = $o(),
                                o = Or(),
                                i = wr(),
                                a = Vo(),
                                s = function () {};
                            s = function (l) {
                                var f = 'Warning: ' + l;
                                typeof console < 'u' && console.error(f);
                                try {
                                    throw new Error(f);
                                } catch {}
                            };
                            function c() {
                                return null;
                            }
                            t.exports = function (l, f) {
                                var u =
                                        typeof Symbol == 'function' &&
                                        Symbol.iterator,
                                    p = '@@iterator';
                                function d(v) {
                                    var _ = v && ((u && v[u]) || v[p]);
                                    if (typeof _ == 'function') return _;
                                }
                                var h = '<<anonymous>>',
                                    g = {
                                        array: m('array'),
                                        bigint: m('bigint'),
                                        bool: m('boolean'),
                                        func: m('function'),
                                        number: m('number'),
                                        object: m('object'),
                                        string: m('string'),
                                        symbol: m('symbol'),
                                        any: O(),
                                        arrayOf: w,
                                        element: $(),
                                        elementType: N(),
                                        instanceOf: ee,
                                        node: Nt(),
                                        objectOf: ye,
                                        oneOf: K,
                                        oneOfType: At,
                                        shape: kt,
                                        exact: Mt,
                                    };
                                function x(v, _) {
                                    return v === _
                                        ? v !== 0 || 1 / v === 1 / _
                                        : v !== v && _ !== _;
                                }
                                function b(v, _) {
                                    (this.message = v),
                                        (this.data =
                                            _ && typeof _ == 'object' ? _ : {}),
                                        (this.stack = '');
                                }
                                b.prototype = Error.prototype;
                                function S(v) {
                                    var _ = {},
                                        W = 0;
                                    function F(H, j, B, G, V, Y, T) {
                                        if (
                                            ((G = G || h),
                                            (Y = Y || B),
                                            T !== o)
                                        ) {
                                            if (f) {
                                                var ne = new Error(
                                                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
                                                );
                                                throw (
                                                    ((ne.name =
                                                        'Invariant Violation'),
                                                    ne)
                                                );
                                            } else if (typeof console < 'u') {
                                                var Se = G + ':' + B;
                                                !_[Se] &&
                                                    W < 3 &&
                                                    (s(
                                                        'You are manually calling a React.PropTypes validation function for the `' +
                                                            Y +
                                                            '` prop on `' +
                                                            G +
                                                            '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.'
                                                    ),
                                                    (_[Se] = !0),
                                                    W++);
                                            }
                                        }
                                        return j[B] == null
                                            ? H
                                                ? j[B] === null
                                                    ? new b(
                                                          'The ' +
                                                              V +
                                                              ' `' +
                                                              Y +
                                                              '` is marked as required ' +
                                                              ('in `' +
                                                                  G +
                                                                  '`, but its value is `null`.')
                                                      )
                                                    : new b(
                                                          'The ' +
                                                              V +
                                                              ' `' +
                                                              Y +
                                                              '` is marked as required in ' +
                                                              ('`' +
                                                                  G +
                                                                  '`, but its value is `undefined`.')
                                                      )
                                                : null
                                            : v(j, B, G, V, Y);
                                    }
                                    var L = F.bind(null, !1);
                                    return (L.isRequired = F.bind(null, !0)), L;
                                }
                                function m(v) {
                                    function _(W, F, L, H, j, B) {
                                        var G = W[F],
                                            V = ve(G);
                                        if (V !== v) {
                                            var Y = Ie(G);
                                            return new b(
                                                'Invalid ' +
                                                    H +
                                                    ' `' +
                                                    j +
                                                    '` of type ' +
                                                    ('`' +
                                                        Y +
                                                        '` supplied to `' +
                                                        L +
                                                        '`, expected ') +
                                                    ('`' + v + '`.'),
                                                { expectedType: v }
                                            );
                                        }
                                        return null;
                                    }
                                    return S(_);
                                }
                                function O() {
                                    return S(c);
                                }
                                function w(v) {
                                    function _(W, F, L, H, j) {
                                        if (typeof v != 'function')
                                            return new b(
                                                'Property `' +
                                                    j +
                                                    '` of component `' +
                                                    L +
                                                    '` has invalid PropType notation inside arrayOf.'
                                            );
                                        var B = W[F];
                                        if (!Array.isArray(B)) {
                                            var G = ve(B);
                                            return new b(
                                                'Invalid ' +
                                                    H +
                                                    ' `' +
                                                    j +
                                                    '` of type ' +
                                                    ('`' +
                                                        G +
                                                        '` supplied to `' +
                                                        L +
                                                        '`, expected an array.')
                                            );
                                        }
                                        for (var V = 0; V < B.length; V++) {
                                            var Y = v(
                                                B,
                                                V,
                                                L,
                                                H,
                                                j + '[' + V + ']',
                                                o
                                            );
                                            if (Y instanceof Error) return Y;
                                        }
                                        return null;
                                    }
                                    return S(_);
                                }
                                function $() {
                                    function v(_, W, F, L, H) {
                                        var j = _[W];
                                        if (!l(j)) {
                                            var B = ve(j);
                                            return new b(
                                                'Invalid ' +
                                                    L +
                                                    ' `' +
                                                    H +
                                                    '` of type ' +
                                                    ('`' +
                                                        B +
                                                        '` supplied to `' +
                                                        F +
                                                        '`, expected a single ReactElement.')
                                            );
                                        }
                                        return null;
                                    }
                                    return S(v);
                                }
                                function N() {
                                    function v(_, W, F, L, H) {
                                        var j = _[W];
                                        if (!n.isValidElementType(j)) {
                                            var B = ve(j);
                                            return new b(
                                                'Invalid ' +
                                                    L +
                                                    ' `' +
                                                    H +
                                                    '` of type ' +
                                                    ('`' +
                                                        B +
                                                        '` supplied to `' +
                                                        F +
                                                        '`, expected a single ReactElement type.')
                                            );
                                        }
                                        return null;
                                    }
                                    return S(v);
                                }
                                function ee(v) {
                                    function _(W, F, L, H, j) {
                                        if (!(W[F] instanceof v)) {
                                            var B = v.name || h,
                                                G = pt(W[F]);
                                            return new b(
                                                'Invalid ' +
                                                    H +
                                                    ' `' +
                                                    j +
                                                    '` of type ' +
                                                    ('`' +
                                                        G +
                                                        '` supplied to `' +
                                                        L +
                                                        '`, expected ') +
                                                    ('instance of `' + B + '`.')
                                            );
                                        }
                                        return null;
                                    }
                                    return S(_);
                                }
                                function K(v) {
                                    if (!Array.isArray(v))
                                        return (
                                            arguments.length > 1
                                                ? s(
                                                      'Invalid arguments supplied to oneOf, expected an array, got ' +
                                                          arguments.length +
                                                          ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                                                  )
                                                : s(
                                                      'Invalid argument supplied to oneOf, expected an array.'
                                                  ),
                                            c
                                        );
                                    function _(W, F, L, H, j) {
                                        for (
                                            var B = W[F], G = 0;
                                            G < v.length;
                                            G++
                                        )
                                            if (x(B, v[G])) return null;
                                        var V = JSON.stringify(
                                            v,
                                            function (Y, T) {
                                                var ne = Ie(T);
                                                return ne === 'symbol'
                                                    ? String(T)
                                                    : T;
                                            }
                                        );
                                        return new b(
                                            'Invalid ' +
                                                H +
                                                ' `' +
                                                j +
                                                '` of value `' +
                                                String(B) +
                                                '` ' +
                                                ('supplied to `' +
                                                    L +
                                                    '`, expected one of ' +
                                                    V +
                                                    '.')
                                        );
                                    }
                                    return S(_);
                                }
                                function ye(v) {
                                    function _(W, F, L, H, j) {
                                        if (typeof v != 'function')
                                            return new b(
                                                'Property `' +
                                                    j +
                                                    '` of component `' +
                                                    L +
                                                    '` has invalid PropType notation inside objectOf.'
                                            );
                                        var B = W[F],
                                            G = ve(B);
                                        if (G !== 'object')
                                            return new b(
                                                'Invalid ' +
                                                    H +
                                                    ' `' +
                                                    j +
                                                    '` of type ' +
                                                    ('`' +
                                                        G +
                                                        '` supplied to `' +
                                                        L +
                                                        '`, expected an object.')
                                            );
                                        for (var V in B)
                                            if (i(B, V)) {
                                                var Y = v(
                                                    B,
                                                    V,
                                                    L,
                                                    H,
                                                    j + '.' + V,
                                                    o
                                                );
                                                if (Y instanceof Error)
                                                    return Y;
                                            }
                                        return null;
                                    }
                                    return S(_);
                                }
                                function At(v) {
                                    if (!Array.isArray(v))
                                        return (
                                            s(
                                                'Invalid argument supplied to oneOfType, expected an instance of array.'
                                            ),
                                            c
                                        );
                                    for (var _ = 0; _ < v.length; _++) {
                                        var W = v[_];
                                        if (typeof W != 'function')
                                            return (
                                                s(
                                                    'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                                                        jt(W) +
                                                        ' at index ' +
                                                        _ +
                                                        '.'
                                                ),
                                                c
                                            );
                                    }
                                    function F(L, H, j, B, G) {
                                        for (
                                            var V = [], Y = 0;
                                            Y < v.length;
                                            Y++
                                        ) {
                                            var T = v[Y],
                                                ne = T(L, H, j, B, G, o);
                                            if (ne == null) return null;
                                            ne.data &&
                                                i(ne.data, 'expectedType') &&
                                                V.push(ne.data.expectedType);
                                        }
                                        var Se =
                                            V.length > 0
                                                ? ', expected one of type [' +
                                                  V.join(', ') +
                                                  ']'
                                                : '';
                                        return new b(
                                            'Invalid ' +
                                                B +
                                                ' `' +
                                                G +
                                                '` supplied to ' +
                                                ('`' + j + '`' + Se + '.')
                                        );
                                    }
                                    return S(F);
                                }
                                function Nt() {
                                    function v(_, W, F, L, H) {
                                        return De(_[W])
                                            ? null
                                            : new b(
                                                  'Invalid ' +
                                                      L +
                                                      ' `' +
                                                      H +
                                                      '` supplied to ' +
                                                      ('`' +
                                                          F +
                                                          '`, expected a ReactNode.')
                                              );
                                    }
                                    return S(v);
                                }
                                function ft(v, _, W, F, L) {
                                    return new b(
                                        (v || 'React class') +
                                            ': ' +
                                            _ +
                                            ' type `' +
                                            W +
                                            '.' +
                                            F +
                                            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                                            L +
                                            '`.'
                                    );
                                }
                                function kt(v) {
                                    function _(W, F, L, H, j) {
                                        var B = W[F],
                                            G = ve(B);
                                        if (G !== 'object')
                                            return new b(
                                                'Invalid ' +
                                                    H +
                                                    ' `' +
                                                    j +
                                                    '` of type `' +
                                                    G +
                                                    '` ' +
                                                    ('supplied to `' +
                                                        L +
                                                        '`, expected `object`.')
                                            );
                                        for (var V in v) {
                                            var Y = v[V];
                                            if (typeof Y != 'function')
                                                return ft(L, H, j, V, Ie(Y));
                                            var T = Y(
                                                B,
                                                V,
                                                L,
                                                H,
                                                j + '.' + V,
                                                o
                                            );
                                            if (T) return T;
                                        }
                                        return null;
                                    }
                                    return S(_);
                                }
                                function Mt(v) {
                                    function _(W, F, L, H, j) {
                                        var B = W[F],
                                            G = ve(B);
                                        if (G !== 'object')
                                            return new b(
                                                'Invalid ' +
                                                    H +
                                                    ' `' +
                                                    j +
                                                    '` of type `' +
                                                    G +
                                                    '` ' +
                                                    ('supplied to `' +
                                                        L +
                                                        '`, expected `object`.')
                                            );
                                        var V = r({}, W[F], v);
                                        for (var Y in V) {
                                            var T = v[Y];
                                            if (
                                                i(v, Y) &&
                                                typeof T != 'function'
                                            )
                                                return ft(L, H, j, Y, Ie(T));
                                            if (!T)
                                                return new b(
                                                    'Invalid ' +
                                                        H +
                                                        ' `' +
                                                        j +
                                                        '` key `' +
                                                        Y +
                                                        '` supplied to `' +
                                                        L +
                                                        '`.\nBad object: ' +
                                                        JSON.stringify(
                                                            W[F],
                                                            null,
                                                            '  '
                                                        ) +
                                                        `
Valid keys: ` +
                                                        JSON.stringify(
                                                            Object.keys(v),
                                                            null,
                                                            '  '
                                                        )
                                                );
                                            var ne = T(
                                                B,
                                                Y,
                                                L,
                                                H,
                                                j + '.' + Y,
                                                o
                                            );
                                            if (ne) return ne;
                                        }
                                        return null;
                                    }
                                    return S(_);
                                }
                                function De(v) {
                                    switch (typeof v) {
                                        case 'number':
                                        case 'string':
                                        case 'undefined':
                                            return !0;
                                        case 'boolean':
                                            return !v;
                                        case 'object':
                                            if (Array.isArray(v))
                                                return v.every(De);
                                            if (v === null || l(v)) return !0;
                                            var _ = d(v);
                                            if (_) {
                                                var W = _.call(v),
                                                    F;
                                                if (_ !== v.entries) {
                                                    for (
                                                        ;
                                                        !(F = W.next()).done;

                                                    )
                                                        if (!De(F.value))
                                                            return !1;
                                                } else
                                                    for (
                                                        ;
                                                        !(F = W.next()).done;

                                                    ) {
                                                        var L = F.value;
                                                        if (L && !De(L[1]))
                                                            return !1;
                                                    }
                                            } else return !1;
                                            return !0;
                                        default:
                                            return !1;
                                    }
                                }
                                function Lt(v, _) {
                                    return v === 'symbol'
                                        ? !0
                                        : _
                                          ? _['@@toStringTag'] === 'Symbol' ||
                                            (typeof Symbol == 'function' &&
                                                _ instanceof Symbol)
                                          : !1;
                                }
                                function ve(v) {
                                    var _ = typeof v;
                                    return Array.isArray(v)
                                        ? 'array'
                                        : v instanceof RegExp
                                          ? 'object'
                                          : Lt(_, v)
                                            ? 'symbol'
                                            : _;
                                }
                                function Ie(v) {
                                    if (typeof v > 'u' || v === null)
                                        return '' + v;
                                    var _ = ve(v);
                                    if (_ === 'object') {
                                        if (v instanceof Date) return 'date';
                                        if (v instanceof RegExp)
                                            return 'regexp';
                                    }
                                    return _;
                                }
                                function jt(v) {
                                    var _ = Ie(v);
                                    switch (_) {
                                        case 'array':
                                        case 'object':
                                            return 'an ' + _;
                                        case 'boolean':
                                        case 'date':
                                        case 'regexp':
                                            return 'a ' + _;
                                        default:
                                            return _;
                                    }
                                }
                                function pt(v) {
                                    return !v.constructor || !v.constructor.name
                                        ? h
                                        : v.constructor.name;
                                }
                                return (
                                    (g.checkPropTypes = a),
                                    (g.resetWarningCache = a.resetWarningCache),
                                    (g.PropTypes = g),
                                    g
                                );
                            };
                        },
                    })),
                    (Qo = he({
                        '../../node_modules/prop-types/index.js'(e, t) {
                            (n = Er()),
                                (r = !0),
                                (t.exports = Ko()(n.isElement, r));
                            var n, r;
                        },
                    })),
                    (Xo = he({
                        '../../node_modules/react-innertext/index.js'(e, t) {
                            var n = function (i) {
                                    return Object.prototype.hasOwnProperty.call(
                                        i,
                                        'props'
                                    );
                                },
                                r = function (i, a) {
                                    return i + o(a);
                                },
                                o = function (i) {
                                    return i === null ||
                                        typeof i == 'boolean' ||
                                        typeof i > 'u'
                                        ? ''
                                        : typeof i == 'number'
                                          ? i.toString()
                                          : typeof i == 'string'
                                            ? i
                                            : Array.isArray(i)
                                              ? i.reduce(r, '')
                                              : n(i) &&
                                                  Object.prototype.hasOwnProperty.call(
                                                      i.props,
                                                      'children'
                                                  )
                                                ? o(i.props.children)
                                                : '';
                                };
                            (o.default = o), (t.exports = o);
                        },
                    })),
                    (Jo = te.div(
                        ({ width: e, height: t, left: n, top: r }) => ({
                            width: `${e}px`,
                            height: `${t}px`,
                            left: `${n}px`,
                            top: `${r}px`,
                            position: 'relative',
                            overflow: 'hidden',
                        })
                    ));
                Un = 'STORYBOOK_ADDON_ONBOARDING_CHANNEL';
                (ni = Sr('function')),
                    (ri = (e) => e === null),
                    (Hn = (e) =>
                        Object.prototype.toString.call(e).slice(8, -1) ===
                        'RegExp'),
                    (Gn = (e) =>
                        !oi(e) && !ri(e) && (ni(e) || typeof e == 'object')),
                    (oi = Sr('undefined'));
                (ci = [
                    'Array',
                    'ArrayBuffer',
                    'AsyncFunction',
                    'AsyncGenerator',
                    'AsyncGeneratorFunction',
                    'Date',
                    'Error',
                    'Function',
                    'Generator',
                    'GeneratorFunction',
                    'HTMLElement',
                    'Map',
                    'Object',
                    'Promise',
                    'RegExp',
                    'Set',
                    'WeakMap',
                    'WeakSet',
                ]),
                    (ui = [
                        'bigint',
                        'boolean',
                        'null',
                        'number',
                        'string',
                        'symbol',
                        'undefined',
                    ]);
                di = [
                    'innerHTML',
                    'ownerDocument',
                    'style',
                    'attributes',
                    'nodeValue',
                ];
                I.array = Array.isArray;
                I.arrayOf = (e, t) =>
                    !I.array(e) && !I.function(t) ? !1 : e.every((n) => t(n));
                I.asyncGeneratorFunction = (e) =>
                    Pt(e) === 'AsyncGeneratorFunction';
                I.asyncFunction = ge('AsyncFunction');
                I.bigint = He('bigint');
                I.boolean = (e) => e === !0 || e === !1;
                I.date = ge('Date');
                I.defined = (e) => !I.undefined(e);
                I.domElement = (e) =>
                    I.object(e) &&
                    !I.plainObject(e) &&
                    e.nodeType === 1 &&
                    I.string(e.nodeName) &&
                    di.every((t) => t in e);
                I.empty = (e) =>
                    (I.string(e) && e.length === 0) ||
                    (I.array(e) && e.length === 0) ||
                    (I.object(e) &&
                        !I.map(e) &&
                        !I.set(e) &&
                        Object.keys(e).length === 0) ||
                    (I.set(e) && e.size === 0) ||
                    (I.map(e) && e.size === 0);
                I.error = ge('Error');
                I.function = He('function');
                I.generator = (e) =>
                    I.iterable(e) && I.function(e.next) && I.function(e.throw);
                I.generatorFunction = ge('GeneratorFunction');
                I.instanceOf = (e, t) =>
                    !e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype;
                I.iterable = (e) =>
                    !I.nullOrUndefined(e) && I.function(e[Symbol.iterator]);
                I.map = ge('Map');
                I.nan = (e) => Number.isNaN(e);
                I.null = (e) => e === null;
                I.nullOrUndefined = (e) => I.null(e) || I.undefined(e);
                I.number = (e) => He('number')(e) && !I.nan(e);
                I.numericString = (e) =>
                    I.string(e) && e.length > 0 && !Number.isNaN(Number(e));
                I.object = (e) =>
                    !I.nullOrUndefined(e) &&
                    (I.function(e) || typeof e == 'object');
                I.oneOf = (e, t) => (I.array(e) ? e.indexOf(t) > -1 : !1);
                I.plainFunction = ge('Function');
                I.plainObject = (e) => {
                    if (Pt(e) !== 'Object') return !1;
                    let t = Object.getPrototypeOf(e);
                    return t === null || t === Object.getPrototypeOf({});
                };
                I.primitive = (e) => I.null(e) || pi(typeof e);
                I.promise = ge('Promise');
                I.propertyOf = (e, t, n) => {
                    if (!I.object(e) || !t) return !1;
                    let r = e[t];
                    return I.function(n) ? n(r) : I.defined(r);
                };
                I.regexp = ge('RegExp');
                I.set = ge('Set');
                I.string = He('string');
                I.symbol = He('symbol');
                I.undefined = He('undefined');
                I.weakMap = ge('WeakMap');
                I.weakSet = ge('WeakSet');
                P = I;
                (gi = Le(Yo(), 1)),
                    (Ir = Le(zo(), 1)),
                    (Et = Le(tn(), 1)),
                    (Ot = Le(tn(), 1)),
                    (E = Le(Qo())),
                    (rt =
                        typeof window < 'u' &&
                        typeof document < 'u' &&
                        typeof navigator < 'u'),
                    (bi = (function () {
                        for (
                            var e = ['Edge', 'Trident', 'Firefox'], t = 0;
                            t < e.length;
                            t += 1
                        )
                            if (rt && navigator.userAgent.indexOf(e[t]) >= 0)
                                return 1;
                        return 0;
                    })());
                (Oi = rt && window.Promise), (wi = Oi ? vi : Ei);
                (Kn =
                    rt &&
                    !!(window.MSInputMethodContext && document.documentMode)),
                    (Qn = rt && /MSIE 10/.test(navigator.userAgent));
                (Ii = function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError(
                            'Cannot call a class as a function'
                        );
                }),
                    (Ci = (function () {
                        function e(t, n) {
                            for (var r = 0; r < n.length; r++) {
                                var o = n[r];
                                (o.enumerable = o.enumerable || !1),
                                    (o.configurable = !0),
                                    'value' in o && (o.writable = !0),
                                    Object.defineProperty(t, o.key, o);
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t;
                        };
                    })()),
                    (Ue = function (e, t, n) {
                        return (
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n),
                            e
                        );
                    }),
                    (de =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        });
                Wi = rt && /Firefox/i.test(navigator.userAgent);
                (Wr = [
                    'auto-start',
                    'auto',
                    'auto-end',
                    'top-start',
                    'top',
                    'top-end',
                    'right-start',
                    'right',
                    'right-end',
                    'bottom-end',
                    'bottom',
                    'bottom-start',
                    'left-end',
                    'left',
                    'left-start',
                ]),
                    (qt = Wr.slice(3));
                $t = {
                    FLIP: 'flip',
                    CLOCKWISE: 'clockwise',
                    COUNTERCLOCKWISE: 'counterclockwise',
                };
                (Zi = {
                    shift: { order: 100, enabled: !0, fn: Qi },
                    offset: { order: 200, enabled: !0, fn: Vi, offset: 0 },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: Ki,
                        priority: ['left', 'right', 'top', 'bottom'],
                        padding: 5,
                        boundariesElement: 'scrollParent',
                    },
                    keepTogether: { order: 400, enabled: !0, fn: zi },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: Hi,
                        element: '[x-arrow]',
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: Yi,
                        behavior: 'flip',
                        padding: 5,
                        boundariesElement: 'viewport',
                        flipVariations: !1,
                        flipVariationsByContent: !1,
                    },
                    inner: { order: 700, enabled: !1, fn: Ji },
                    hide: { order: 800, enabled: !0, fn: Xi },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: Ui,
                        gpuAcceleration: !0,
                        x: 'bottom',
                        y: 'right',
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: Di,
                        onLoad: Fi,
                        gpuAcceleration: void 0,
                    },
                }),
                    (ea = {
                        placement: 'bottom',
                        positionFixed: !1,
                        eventsEnabled: !0,
                        removeOnDestroy: !1,
                        onCreate: function () {},
                        onUpdate: function () {},
                        modifiers: Zi,
                    }),
                    (Rt = (function () {
                        function e(t, n) {
                            var r = this,
                                o =
                                    arguments.length > 2 &&
                                    arguments[2] !== void 0
                                        ? arguments[2]
                                        : {};
                            Ii(this, e),
                                (this.scheduleUpdate = function () {
                                    return requestAnimationFrame(r.update);
                                }),
                                (this.update = wi(this.update.bind(this))),
                                (this.options = de({}, e.Defaults, o)),
                                (this.state = {
                                    isDestroyed: !1,
                                    isCreated: !1,
                                    scrollParents: [],
                                }),
                                (this.reference = t && t.jquery ? t[0] : t),
                                (this.popper = n && n.jquery ? n[0] : n),
                                (this.options.modifiers = {}),
                                Object.keys(
                                    de({}, e.Defaults.modifiers, o.modifiers)
                                ).forEach(function (a) {
                                    r.options.modifiers[a] = de(
                                        {},
                                        e.Defaults.modifiers[a] || {},
                                        o.modifiers ? o.modifiers[a] : {}
                                    );
                                }),
                                (this.modifiers = Object.keys(
                                    this.options.modifiers
                                )
                                    .map(function (a) {
                                        return de(
                                            { name: a },
                                            r.options.modifiers[a]
                                        );
                                    })
                                    .sort(function (a, s) {
                                        return a.order - s.order;
                                    })),
                                this.modifiers.forEach(function (a) {
                                    a.enabled &&
                                        Cr(a.onLoad) &&
                                        a.onLoad(
                                            r.reference,
                                            r.popper,
                                            r.options,
                                            a,
                                            r.state
                                        );
                                }),
                                this.update();
                            var i = this.options.eventsEnabled;
                            i && this.enableEventListeners(),
                                (this.state.eventsEnabled = i);
                        }
                        return (
                            Ci(e, [
                                {
                                    key: 'update',
                                    value: function () {
                                        return xi.call(this);
                                    },
                                },
                                {
                                    key: 'destroy',
                                    value: function () {
                                        return Ai.call(this);
                                    },
                                },
                                {
                                    key: 'enableEventListeners',
                                    value: function () {
                                        return ki.call(this);
                                    },
                                },
                                {
                                    key: 'disableEventListeners',
                                    value: function () {
                                        return Li.call(this);
                                    },
                                },
                            ]),
                            e
                        );
                    })());
                Rt.Utils = window.PopperUtils;
                Rt.placements = Wr;
                Rt.Defaults = ea;
                (er = Rt),
                    (Jt = Le(tn())),
                    (ta = [
                        'innerHTML',
                        'ownerDocument',
                        'style',
                        'attributes',
                        'nodeValue',
                    ]),
                    (na = [
                        'Array',
                        'ArrayBuffer',
                        'AsyncFunction',
                        'AsyncGenerator',
                        'AsyncGeneratorFunction',
                        'Date',
                        'Error',
                        'Function',
                        'Generator',
                        'GeneratorFunction',
                        'HTMLElement',
                        'Map',
                        'Object',
                        'Promise',
                        'RegExp',
                        'Set',
                        'WeakMap',
                        'WeakSet',
                    ]),
                    (ra = [
                        'bigint',
                        'boolean',
                        'null',
                        'number',
                        'string',
                        'symbol',
                        'undefined',
                    ]);
                C.array = Array.isArray;
                C.arrayOf = function (e, t) {
                    return !C.array(e) && !C.function(t)
                        ? !1
                        : e.every(function (n) {
                              return t(n);
                          });
                };
                C.asyncGeneratorFunction = function (e) {
                    return _t(e) === 'AsyncGeneratorFunction';
                };
                C.asyncFunction = be('AsyncFunction');
                C.bigint = Ye('bigint');
                C.boolean = function (e) {
                    return e === !0 || e === !1;
                };
                C.date = be('Date');
                C.defined = function (e) {
                    return !C.undefined(e);
                };
                C.domElement = function (e) {
                    return (
                        C.object(e) &&
                        !C.plainObject(e) &&
                        e.nodeType === 1 &&
                        C.string(e.nodeName) &&
                        ta.every(function (t) {
                            return t in e;
                        })
                    );
                };
                C.empty = function (e) {
                    return (
                        (C.string(e) && e.length === 0) ||
                        (C.array(e) && e.length === 0) ||
                        (C.object(e) &&
                            !C.map(e) &&
                            !C.set(e) &&
                            Object.keys(e).length === 0) ||
                        (C.set(e) && e.size === 0) ||
                        (C.map(e) && e.size === 0)
                    );
                };
                C.error = be('Error');
                C.function = Ye('function');
                C.generator = function (e) {
                    return (
                        C.iterable(e) &&
                        C.function(e.next) &&
                        C.function(e.throw)
                    );
                };
                C.generatorFunction = be('GeneratorFunction');
                C.instanceOf = function (e, t) {
                    return !e || !t
                        ? !1
                        : Object.getPrototypeOf(e) === t.prototype;
                };
                C.iterable = function (e) {
                    return (
                        !C.nullOrUndefined(e) && C.function(e[Symbol.iterator])
                    );
                };
                C.map = be('Map');
                C.nan = function (e) {
                    return Number.isNaN(e);
                };
                C.null = function (e) {
                    return e === null;
                };
                C.nullOrUndefined = function (e) {
                    return C.null(e) || C.undefined(e);
                };
                C.number = function (e) {
                    return Ye('number')(e) && !C.nan(e);
                };
                C.numericString = function (e) {
                    return (
                        C.string(e) && e.length > 0 && !Number.isNaN(Number(e))
                    );
                };
                C.object = function (e) {
                    return (
                        !C.nullOrUndefined(e) &&
                        (C.function(e) || typeof e == 'object')
                    );
                };
                C.oneOf = function (e, t) {
                    return C.array(e) ? e.indexOf(t) > -1 : !1;
                };
                C.plainFunction = be('Function');
                C.plainObject = function (e) {
                    if (_t(e) !== 'Object') return !1;
                    var t = Object.getPrototypeOf(e);
                    return t === null || t === Object.getPrototypeOf({});
                };
                C.primitive = function (e) {
                    return C.null(e) || ia(typeof e);
                };
                C.promise = be('Promise');
                C.propertyOf = function (e, t, n) {
                    if (!C.object(e) || !t) return !1;
                    var r = e[t];
                    return C.function(n) ? n(r) : C.defined(r);
                };
                C.regexp = be('RegExp');
                C.set = be('Set');
                C.string = Ye('string');
                C.symbol = Ye('symbol');
                C.undefined = Ye('undefined');
                C.weakMap = be('WeakMap');
                C.weakSet = be('WeakSet');
                A = C;
                (aa = Ur('function')),
                    (sa = function (e) {
                        return e === null;
                    }),
                    (tr = function (e) {
                        return (
                            Object.prototype.toString.call(e).slice(8, -1) ===
                            'RegExp'
                        );
                    }),
                    (nr = function (e) {
                        return (
                            !la(e) && !sa(e) && (aa(e) || typeof e == 'object')
                        );
                    }),
                    (la = Ur('undefined')),
                    (Zt = function (e) {
                        var t = typeof Symbol == 'function' && Symbol.iterator,
                            n = t && e[t],
                            r = 0;
                        if (n) return n.call(e);
                        if (e && typeof e.length == 'number')
                            return {
                                next: function () {
                                    return (
                                        e && r >= e.length && (e = void 0),
                                        { value: e && e[r++], done: !e }
                                    );
                                },
                            };
                        throw new TypeError(
                            t
                                ? 'Object is not iterable.'
                                : 'Symbol.iterator is not defined.'
                        );
                    });
                (Oa = {
                    flip: { padding: 20 },
                    preventOverflow: { padding: 10 },
                }),
                    (wa =
                        'The typeValidator argument must be a function with the signature function(props, propName, componentName).'),
                    (Sa =
                        'The error message is optional, but must be a string if provided.');
                (U = {
                    INIT: 'init',
                    IDLE: 'idle',
                    OPENING: 'opening',
                    OPEN: 'open',
                    CLOSING: 'closing',
                    ERROR: 'error',
                }),
                    (Ze = ke.createPortal !== void 0);
                zr = (function (e) {
                    lt(n, e);
                    var t = ct(n);
                    function n() {
                        return at(this, n), t.apply(this, arguments);
                    }
                    return (
                        st(n, [
                            {
                                key: 'componentDidMount',
                                value: function () {
                                    Ee() &&
                                        (this.node || this.appendNode(),
                                        Ze || this.renderPortal());
                                },
                            },
                            {
                                key: 'componentDidUpdate',
                                value: function () {
                                    Ee() && (Ze || this.renderPortal());
                                },
                            },
                            {
                                key: 'componentWillUnmount',
                                value: function () {
                                    !Ee() ||
                                        !this.node ||
                                        (Ze ||
                                            ke.unmountComponentAtNode(
                                                this.node
                                            ),
                                        this.node &&
                                            this.node.parentNode ===
                                                document.body &&
                                            (document.body.removeChild(
                                                this.node
                                            ),
                                            (this.node = void 0)));
                                },
                            },
                            {
                                key: 'appendNode',
                                value: function () {
                                    var r = this.props,
                                        o = r.id,
                                        i = r.zIndex;
                                    this.node ||
                                        ((this.node =
                                            document.createElement('div')),
                                        o && (this.node.id = o),
                                        i && (this.node.style.zIndex = i),
                                        document.body.appendChild(this.node));
                                },
                            },
                            {
                                key: 'renderPortal',
                                value: function () {
                                    if (!Ee()) return null;
                                    var r = this.props,
                                        o = r.children,
                                        i = r.setRef;
                                    if ((this.node || this.appendNode(), Ze))
                                        return ke.createPortal(o, this.node);
                                    var a =
                                        ke.unstable_renderSubtreeIntoContainer(
                                            this,
                                            o.length > 1
                                                ? y.createElement(
                                                      'div',
                                                      null,
                                                      o
                                                  )
                                                : o[0],
                                            this.node
                                        );
                                    return i(a), null;
                                },
                            },
                            {
                                key: 'renderReact16',
                                value: function () {
                                    var r = this.props,
                                        o = r.hasChildren,
                                        i = r.placement,
                                        a = r.target;
                                    return o
                                        ? this.renderPortal()
                                        : a || i === 'center'
                                          ? this.renderPortal()
                                          : null;
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    return Ze ? this.renderReact16() : null;
                                },
                            },
                        ]),
                        n
                    );
                })(y.Component);
                re(zr, 'propTypes', {
                    children: E.default.oneOfType([
                        E.default.element,
                        E.default.array,
                    ]),
                    hasChildren: E.default.bool,
                    id: E.default.oneOfType([
                        E.default.string,
                        E.default.number,
                    ]),
                    placement: E.default.string,
                    setRef: E.default.func.isRequired,
                    target: E.default.oneOfType([
                        E.default.object,
                        E.default.string,
                    ]),
                    zIndex: E.default.number,
                });
                qr = (function (e) {
                    lt(n, e);
                    var t = ct(n);
                    function n() {
                        return at(this, n), t.apply(this, arguments);
                    }
                    return (
                        st(n, [
                            {
                                key: 'parentStyle',
                                get: function () {
                                    var r = this.props,
                                        o = r.placement,
                                        i = r.styles,
                                        a = i.arrow.length,
                                        s = {
                                            pointerEvents: 'none',
                                            position: 'absolute',
                                            width: '100%',
                                        };
                                    return (
                                        o.startsWith('top')
                                            ? ((s.bottom = 0),
                                              (s.left = 0),
                                              (s.right = 0),
                                              (s.height = a))
                                            : o.startsWith('bottom')
                                              ? ((s.left = 0),
                                                (s.right = 0),
                                                (s.top = 0),
                                                (s.height = a))
                                              : o.startsWith('left')
                                                ? ((s.right = 0),
                                                  (s.top = 0),
                                                  (s.bottom = 0))
                                                : o.startsWith('right') &&
                                                  ((s.left = 0), (s.top = 0)),
                                        s
                                    );
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    var r = this.props,
                                        o = r.placement,
                                        i = r.setArrowRef,
                                        a = r.styles,
                                        s = a.arrow,
                                        c = s.color,
                                        l = s.display,
                                        f = s.length,
                                        u = s.margin,
                                        p = s.position,
                                        d = s.spread,
                                        h = { display: l, position: p },
                                        g,
                                        x = d,
                                        b = f;
                                    return (
                                        o.startsWith('top')
                                            ? ((g = '0,0 '
                                                  .concat(x / 2, ',')
                                                  .concat(b, ' ')
                                                  .concat(x, ',0')),
                                              (h.bottom = 0),
                                              (h.marginLeft = u),
                                              (h.marginRight = u))
                                            : o.startsWith('bottom')
                                              ? ((g = ''
                                                    .concat(x, ',')
                                                    .concat(b, ' ')
                                                    .concat(x / 2, ',0 0,')
                                                    .concat(b)),
                                                (h.top = 0),
                                                (h.marginLeft = u),
                                                (h.marginRight = u))
                                              : o.startsWith('left')
                                                ? ((b = d),
                                                  (x = f),
                                                  (g = '0,0 '
                                                      .concat(x, ',')
                                                      .concat(b / 2, ' 0,')
                                                      .concat(b)),
                                                  (h.right = 0),
                                                  (h.marginTop = u),
                                                  (h.marginBottom = u))
                                                : o.startsWith('right') &&
                                                  ((b = d),
                                                  (x = f),
                                                  (g = ''
                                                      .concat(x, ',')
                                                      .concat(b, ' ')
                                                      .concat(x, ',0 0,')
                                                      .concat(b / 2)),
                                                  (h.left = 0),
                                                  (h.marginTop = u),
                                                  (h.marginBottom = u)),
                                        y.createElement(
                                            'div',
                                            {
                                                className: '__floater__arrow',
                                                style: this.parentStyle,
                                            },
                                            y.createElement(
                                                'span',
                                                { ref: i, style: h },
                                                y.createElement(
                                                    'svg',
                                                    {
                                                        width: x,
                                                        height: b,
                                                        version: '1.1',
                                                        xmlns: 'http://www.w3.org/2000/svg',
                                                    },
                                                    y.createElement('polygon', {
                                                        points: g,
                                                        fill: c,
                                                    })
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(y.Component);
                re(qr, 'propTypes', {
                    placement: E.default.string.isRequired,
                    setArrowRef: E.default.func.isRequired,
                    styles: E.default.object.isRequired,
                });
                Aa = ['color', 'height', 'width'];
                $r.propTypes = {
                    handleClick: E.default.func.isRequired,
                    styles: E.default.object.isRequired,
                };
                Vr.propTypes = {
                    content: E.default.node.isRequired,
                    footer: E.default.node,
                    handleClick: E.default.func.isRequired,
                    open: E.default.bool,
                    positionWrapper: E.default.bool.isRequired,
                    showCloseButton: E.default.bool.isRequired,
                    styles: E.default.object.isRequired,
                    title: E.default.node,
                };
                Kr = (function (e) {
                    lt(n, e);
                    var t = ct(n);
                    function n() {
                        return at(this, n), t.apply(this, arguments);
                    }
                    return (
                        st(n, [
                            {
                                key: 'style',
                                get: function () {
                                    var r = this.props,
                                        o = r.disableAnimation,
                                        i = r.component,
                                        a = r.placement,
                                        s = r.hideArrow,
                                        c = r.status,
                                        l = r.styles,
                                        f = l.arrow.length,
                                        u = l.floater,
                                        p = l.floaterCentered,
                                        d = l.floaterClosing,
                                        h = l.floaterOpening,
                                        g = l.floaterWithAnimation,
                                        x = l.floaterWithComponent,
                                        b = {};
                                    return (
                                        s ||
                                            (a.startsWith('top')
                                                ? (b.padding = '0 0 '.concat(
                                                      f,
                                                      'px'
                                                  ))
                                                : a.startsWith('bottom')
                                                  ? (b.padding = ''.concat(
                                                        f,
                                                        'px 0 0'
                                                    ))
                                                  : a.startsWith('left')
                                                    ? (b.padding = '0 '.concat(
                                                          f,
                                                          'px 0 0'
                                                      ))
                                                    : a.startsWith('right') &&
                                                      (b.padding =
                                                          '0 0 0 '.concat(
                                                              f,
                                                              'px'
                                                          ))),
                                        [U.OPENING, U.OPEN].indexOf(c) !== -1 &&
                                            (b = Z(Z({}, b), h)),
                                        c === U.CLOSING && (b = Z(Z({}, b), d)),
                                        c === U.OPEN &&
                                            !o &&
                                            (b = Z(Z({}, b), g)),
                                        a === 'center' && (b = Z(Z({}, b), p)),
                                        i && (b = Z(Z({}, b), x)),
                                        Z(Z({}, u), b)
                                    );
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    var r = this.props,
                                        o = r.component,
                                        i = r.handleClick,
                                        a = r.hideArrow,
                                        s = r.setFloaterRef,
                                        c = r.status,
                                        l = {},
                                        f = ['__floater'];
                                    return (
                                        o
                                            ? y.isValidElement(o)
                                                ? (l.content = y.cloneElement(
                                                      o,
                                                      { closeFn: i }
                                                  ))
                                                : (l.content = o({
                                                      closeFn: i,
                                                  }))
                                            : (l.content = y.createElement(
                                                  Vr,
                                                  this.props
                                              )),
                                        c === U.OPEN &&
                                            f.push('__floater__open'),
                                        a ||
                                            (l.arrow = y.createElement(
                                                qr,
                                                this.props
                                            )),
                                        y.createElement(
                                            'div',
                                            {
                                                ref: s,
                                                className: f.join(' '),
                                                style: this.style,
                                            },
                                            y.createElement(
                                                'div',
                                                {
                                                    className:
                                                        '__floater__body',
                                                },
                                                l.content,
                                                l.arrow
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(y.Component);
                re(Kr, 'propTypes', {
                    component: E.default.oneOfType([
                        E.default.func,
                        E.default.element,
                    ]),
                    content: E.default.node,
                    disableAnimation: E.default.bool.isRequired,
                    footer: E.default.node,
                    handleClick: E.default.func.isRequired,
                    hideArrow: E.default.bool.isRequired,
                    open: E.default.bool,
                    placement: E.default.string.isRequired,
                    positionWrapper: E.default.bool.isRequired,
                    setArrowRef: E.default.func.isRequired,
                    setFloaterRef: E.default.func.isRequired,
                    showCloseButton: E.default.bool,
                    status: E.default.string.isRequired,
                    styles: E.default.object.isRequired,
                    title: E.default.node,
                });
                Qr = (function (e) {
                    lt(n, e);
                    var t = ct(n);
                    function n() {
                        return at(this, n), t.apply(this, arguments);
                    }
                    return (
                        st(n, [
                            {
                                key: 'render',
                                value: function () {
                                    var r = this.props,
                                        o = r.children,
                                        i = r.handleClick,
                                        a = r.handleMouseEnter,
                                        s = r.handleMouseLeave,
                                        c = r.setChildRef,
                                        l = r.setWrapperRef,
                                        f = r.style,
                                        u = r.styles,
                                        p;
                                    if (o)
                                        if (y.Children.count(o) === 1)
                                            if (!y.isValidElement(o))
                                                p = y.createElement(
                                                    'span',
                                                    null,
                                                    o
                                                );
                                            else {
                                                var d = A.function(o.type)
                                                    ? 'innerRef'
                                                    : 'ref';
                                                p = y.cloneElement(
                                                    y.Children.only(o),
                                                    re({}, d, c)
                                                );
                                            }
                                        else p = o;
                                    return p
                                        ? y.createElement(
                                              'span',
                                              {
                                                  ref: l,
                                                  style: Z(Z({}, u), f),
                                                  onClick: i,
                                                  onMouseEnter: a,
                                                  onMouseLeave: s,
                                              },
                                              p
                                          )
                                        : null;
                                },
                            },
                        ]),
                        n
                    );
                })(y.Component);
                re(Qr, 'propTypes', {
                    children: E.default.node,
                    handleClick: E.default.func.isRequired,
                    handleMouseEnter: E.default.func.isRequired,
                    handleMouseLeave: E.default.func.isRequired,
                    setChildRef: E.default.func.isRequired,
                    setWrapperRef: E.default.func.isRequired,
                    style: E.default.object,
                    styles: E.default.object.isRequired,
                });
                Na = { zIndex: 100 };
                (Ma = ['arrow', 'flip', 'offset']),
                    (La = ['position', 'top', 'right', 'bottom', 'left']),
                    (un = (function (e) {
                        lt(n, e);
                        var t = ct(n);
                        function n(r) {
                            var o;
                            return (
                                at(this, n),
                                (o = t.call(this, r)),
                                re(Te(o), 'setArrowRef', function (i) {
                                    o.arrowRef = i;
                                }),
                                re(Te(o), 'setChildRef', function (i) {
                                    o.childRef = i;
                                }),
                                re(Te(o), 'setFloaterRef', function (i) {
                                    o.floaterRef = i;
                                }),
                                re(Te(o), 'setWrapperRef', function (i) {
                                    o.wrapperRef = i;
                                }),
                                re(Te(o), 'handleTransitionEnd', function () {
                                    var i = o.state.status,
                                        a = o.props.callback;
                                    o.wrapperPopper &&
                                        o.wrapperPopper.instance.update(),
                                        o.setState(
                                            {
                                                status:
                                                    i === U.OPENING
                                                        ? U.OPEN
                                                        : U.IDLE,
                                            },
                                            function () {
                                                var s = o.state.status;
                                                a(
                                                    s === U.OPEN
                                                        ? 'open'
                                                        : 'close',
                                                    o.props
                                                );
                                            }
                                        );
                                }),
                                re(Te(o), 'handleClick', function () {
                                    var i = o.props,
                                        a = i.event,
                                        s = i.open;
                                    if (!A.boolean(s)) {
                                        var c = o.state,
                                            l = c.positionWrapper,
                                            f = c.status;
                                        (o.event === 'click' ||
                                            (o.event === 'hover' && l)) &&
                                            (wt({
                                                title: 'click',
                                                data: [
                                                    {
                                                        event: a,
                                                        status:
                                                            f === U.OPEN
                                                                ? 'closing'
                                                                : 'opening',
                                                    },
                                                ],
                                                debug: o.debug,
                                            }),
                                            o.toggle());
                                    }
                                }),
                                re(Te(o), 'handleMouseEnter', function () {
                                    var i = o.props,
                                        a = i.event,
                                        s = i.open;
                                    if (!(A.boolean(s) || Vt())) {
                                        var c = o.state.status;
                                        o.event === 'hover' &&
                                            c === U.IDLE &&
                                            (wt({
                                                title: 'mouseEnter',
                                                data: [
                                                    {
                                                        key: 'originalEvent',
                                                        value: a,
                                                    },
                                                ],
                                                debug: o.debug,
                                            }),
                                            clearTimeout(o.eventDelayTimeout),
                                            o.toggle());
                                    }
                                }),
                                re(Te(o), 'handleMouseLeave', function () {
                                    var i = o.props,
                                        a = i.event,
                                        s = i.eventDelay,
                                        c = i.open;
                                    if (!(A.boolean(c) || Vt())) {
                                        var l = o.state,
                                            f = l.status,
                                            u = l.positionWrapper;
                                        o.event === 'hover' &&
                                            (wt({
                                                title: 'mouseLeave',
                                                data: [
                                                    {
                                                        key: 'originalEvent',
                                                        value: a,
                                                    },
                                                ],
                                                debug: o.debug,
                                            }),
                                            s
                                                ? [U.OPENING, U.OPEN].indexOf(
                                                      f
                                                  ) !== -1 &&
                                                  !u &&
                                                  !o.eventDelayTimeout &&
                                                  (o.eventDelayTimeout =
                                                      setTimeout(function () {
                                                          delete o.eventDelayTimeout,
                                                              o.toggle();
                                                      }, s * 1e3))
                                                : o.toggle(U.IDLE));
                                    }
                                }),
                                (o.state = {
                                    currentPlacement: r.placement,
                                    needsUpdate: !1,
                                    positionWrapper:
                                        r.wrapperOptions.position && !!r.target,
                                    status: U.INIT,
                                    statusWrapper: U.INIT,
                                }),
                                (o._isMounted = !1),
                                (o.hasMounted = !1),
                                Ee() &&
                                    window.addEventListener(
                                        'load',
                                        function () {
                                            o.popper &&
                                                o.popper.instance.update(),
                                                o.wrapperPopper &&
                                                    o.wrapperPopper.instance.update();
                                        }
                                    ),
                                o
                            );
                        }
                        return (
                            st(n, [
                                {
                                    key: 'componentDidMount',
                                    value: function () {
                                        if (Ee()) {
                                            var r = this.state.positionWrapper,
                                                o = this.props,
                                                i = o.children,
                                                a = o.open,
                                                s = o.target;
                                            (this._isMounted = !0),
                                                wt({
                                                    title: 'init',
                                                    data: {
                                                        hasChildren: !!i,
                                                        hasTarget: !!s,
                                                        isControlled:
                                                            A.boolean(a),
                                                        positionWrapper: r,
                                                        target: this.target,
                                                        floater:
                                                            this.floaterRef,
                                                    },
                                                    debug: this.debug,
                                                }),
                                                this.hasMounted ||
                                                    (this.initPopper(),
                                                    (this.hasMounted = !0)),
                                                !i && s && A.boolean(a);
                                        }
                                    },
                                },
                                {
                                    key: 'componentDidUpdate',
                                    value: function (r, o) {
                                        if (Ee()) {
                                            var i = this.props,
                                                a = i.autoOpen,
                                                s = i.open,
                                                c = i.target,
                                                l = i.wrapperOptions,
                                                f = ma(o, this.state),
                                                u = f.changedFrom,
                                                p = f.changed;
                                            if (r.open !== s) {
                                                var d;
                                                A.boolean(s) &&
                                                    (d = s
                                                        ? U.OPENING
                                                        : U.CLOSING),
                                                    this.toggle(d);
                                            }
                                            (r.wrapperOptions.position !==
                                                l.position ||
                                                r.target !== c) &&
                                                this.changeWrapperPosition(
                                                    this.props
                                                ),
                                                p('status', U.IDLE) && s
                                                    ? this.toggle(U.OPEN)
                                                    : u(
                                                          'status',
                                                          U.INIT,
                                                          U.IDLE
                                                      ) &&
                                                      a &&
                                                      this.toggle(U.OPEN),
                                                this.popper &&
                                                    p('status', U.OPENING) &&
                                                    this.popper.instance.update(),
                                                this.floaterRef &&
                                                    (p('status', U.OPENING) ||
                                                        p(
                                                            'status',
                                                            U.CLOSING
                                                        )) &&
                                                    xa(
                                                        this.floaterRef,
                                                        'transitionend',
                                                        this.handleTransitionEnd
                                                    ),
                                                p('needsUpdate', !0) &&
                                                    this.rebuildPopper();
                                        }
                                    },
                                },
                                {
                                    key: 'componentWillUnmount',
                                    value: function () {
                                        Ee() &&
                                            ((this._isMounted = !1),
                                            this.popper &&
                                                this.popper.instance.destroy(),
                                            this.wrapperPopper &&
                                                this.wrapperPopper.instance.destroy());
                                    },
                                },
                                {
                                    key: 'initPopper',
                                    value: function () {
                                        var r = this,
                                            o =
                                                arguments.length > 0 &&
                                                arguments[0] !== void 0
                                                    ? arguments[0]
                                                    : this.target,
                                            i = this.state.positionWrapper,
                                            a = this.props,
                                            s = a.disableFlip,
                                            c = a.getPopper,
                                            l = a.hideArrow,
                                            f = a.offset,
                                            u = a.placement,
                                            p = a.wrapperOptions,
                                            d =
                                                u === 'top' || u === 'bottom'
                                                    ? 'flip'
                                                    : [
                                                          'right',
                                                          'bottom-end',
                                                          'top-end',
                                                          'left',
                                                          'top-start',
                                                          'bottom-start',
                                                      ];
                                        if (u === 'center')
                                            this.setState({ status: U.IDLE });
                                        else if (o && this.floaterRef) {
                                            var h = this.options,
                                                g = h.arrow,
                                                x = h.flip,
                                                b = h.offset,
                                                S = Gr(h, Ma);
                                            new er(o, this.floaterRef, {
                                                placement: u,
                                                modifiers: Z(
                                                    {
                                                        arrow: Z(
                                                            {
                                                                enabled: !l,
                                                                element:
                                                                    this
                                                                        .arrowRef,
                                                            },
                                                            g
                                                        ),
                                                        flip: Z(
                                                            {
                                                                enabled: !s,
                                                                behavior: d,
                                                            },
                                                            x
                                                        ),
                                                        offset: Z(
                                                            {
                                                                offset: '0, '.concat(
                                                                    f,
                                                                    'px'
                                                                ),
                                                            },
                                                            b
                                                        ),
                                                    },
                                                    S
                                                ),
                                                onCreate: function (O) {
                                                    var w;
                                                    if (
                                                        ((r.popper = O),
                                                        !(
                                                            (w =
                                                                r.floaterRef) !==
                                                                null &&
                                                            w !== void 0 &&
                                                            w.isConnected
                                                        ))
                                                    ) {
                                                        r.setState({
                                                            needsUpdate: !0,
                                                        });
                                                        return;
                                                    }
                                                    c(O, 'floater'),
                                                        r._isMounted &&
                                                            r.setState({
                                                                currentPlacement:
                                                                    O.placement,
                                                                status: U.IDLE,
                                                            }),
                                                        u !== O.placement &&
                                                            setTimeout(
                                                                function () {
                                                                    O.instance.update();
                                                                },
                                                                1
                                                            );
                                                },
                                                onUpdate: function (O) {
                                                    r.popper = O;
                                                    var w =
                                                        r.state
                                                            .currentPlacement;
                                                    r._isMounted &&
                                                        O.placement !== w &&
                                                        r.setState({
                                                            currentPlacement:
                                                                O.placement,
                                                        });
                                                },
                                            });
                                        }
                                        if (i) {
                                            var m = A.undefined(p.offset)
                                                ? 0
                                                : p.offset;
                                            new er(
                                                this.target,
                                                this.wrapperRef,
                                                {
                                                    placement: p.placement || u,
                                                    modifiers: {
                                                        arrow: { enabled: !1 },
                                                        offset: {
                                                            offset: '0, '.concat(
                                                                m,
                                                                'px'
                                                            ),
                                                        },
                                                        flip: { enabled: !1 },
                                                    },
                                                    onCreate: function (O) {
                                                        (r.wrapperPopper = O),
                                                            r._isMounted &&
                                                                r.setState({
                                                                    statusWrapper:
                                                                        U.IDLE,
                                                                }),
                                                            c(O, 'wrapper'),
                                                            u !== O.placement &&
                                                                setTimeout(
                                                                    function () {
                                                                        O.instance.update();
                                                                    },
                                                                    1
                                                                );
                                                    },
                                                }
                                            );
                                        }
                                    },
                                },
                                {
                                    key: 'rebuildPopper',
                                    value: function () {
                                        var r = this;
                                        this.floaterRefInterval = setInterval(
                                            function () {
                                                var o;
                                                (o = r.floaterRef) !== null &&
                                                    o !== void 0 &&
                                                    o.isConnected &&
                                                    (clearInterval(
                                                        r.floaterRefInterval
                                                    ),
                                                    r.setState({
                                                        needsUpdate: !1,
                                                    }),
                                                    r.initPopper());
                                            },
                                            50
                                        );
                                    },
                                },
                                {
                                    key: 'changeWrapperPosition',
                                    value: function (r) {
                                        var o = r.target,
                                            i = r.wrapperOptions;
                                        this.setState({
                                            positionWrapper: i.position && !!o,
                                        });
                                    },
                                },
                                {
                                    key: 'toggle',
                                    value: function (r) {
                                        var o = this.state.status,
                                            i =
                                                o === U.OPEN
                                                    ? U.CLOSING
                                                    : U.OPENING;
                                        A.undefined(r) || (i = r),
                                            this.setState({ status: i });
                                    },
                                },
                                {
                                    key: 'debug',
                                    get: function () {
                                        var r = this.props.debug;
                                        return (
                                            r ||
                                            (Ee() &&
                                                'ReactFloaterDebug' in window &&
                                                !!window.ReactFloaterDebug)
                                        );
                                    },
                                },
                                {
                                    key: 'event',
                                    get: function () {
                                        var r = this.props,
                                            o = r.disableHoverToClick,
                                            i = r.event;
                                        return i === 'hover' && Vt() && !o
                                            ? 'click'
                                            : i;
                                    },
                                },
                                {
                                    key: 'options',
                                    get: function () {
                                        var r = this.props.options;
                                        return (0, Jt.default)(Oa, r || {});
                                    },
                                },
                                {
                                    key: 'styles',
                                    get: function () {
                                        var r = this,
                                            o = this.state,
                                            i = o.status,
                                            a = o.positionWrapper,
                                            s = o.statusWrapper,
                                            c = this.props.styles,
                                            l = (0, Jt.default)(ka(c), c);
                                        if (a) {
                                            var f;
                                            [U.IDLE].indexOf(i) === -1 ||
                                            [U.IDLE].indexOf(s) === -1
                                                ? (f = l.wrapperPosition)
                                                : (f =
                                                      this.wrapperPopper
                                                          .styles),
                                                (l.wrapper = Z(
                                                    Z({}, l.wrapper),
                                                    f
                                                ));
                                        }
                                        if (this.target) {
                                            var u = window.getComputedStyle(
                                                this.target
                                            );
                                            this.wrapperStyles
                                                ? (l.wrapper = Z(
                                                      Z({}, l.wrapper),
                                                      this.wrapperStyles
                                                  ))
                                                : [
                                                      'relative',
                                                      'static',
                                                  ].indexOf(u.position) ===
                                                      -1 &&
                                                  ((this.wrapperStyles = {}),
                                                  a ||
                                                      (La.forEach(function (p) {
                                                          r.wrapperStyles[p] =
                                                              u[p];
                                                      }),
                                                      (l.wrapper = Z(
                                                          Z({}, l.wrapper),
                                                          this.wrapperStyles
                                                      )),
                                                      (this.target.style.position =
                                                          'relative'),
                                                      (this.target.style.top =
                                                          'auto'),
                                                      (this.target.style.right =
                                                          'auto'),
                                                      (this.target.style.bottom =
                                                          'auto'),
                                                      (this.target.style.left =
                                                          'auto')));
                                        }
                                        return l;
                                    },
                                },
                                {
                                    key: 'target',
                                    get: function () {
                                        if (!Ee()) return null;
                                        var r = this.props.target;
                                        return r
                                            ? A.domElement(r)
                                                ? r
                                                : document.querySelector(r)
                                            : this.childRef || this.wrapperRef;
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function () {
                                        var r = this.state,
                                            o = r.currentPlacement,
                                            i = r.positionWrapper,
                                            a = r.status,
                                            s = this.props,
                                            c = s.children,
                                            l = s.component,
                                            f = s.content,
                                            u = s.disableAnimation,
                                            p = s.footer,
                                            d = s.hideArrow,
                                            h = s.id,
                                            g = s.open,
                                            x = s.showCloseButton,
                                            b = s.style,
                                            S = s.target,
                                            m = s.title,
                                            O = y.createElement(
                                                Qr,
                                                {
                                                    handleClick:
                                                        this.handleClick,
                                                    handleMouseEnter:
                                                        this.handleMouseEnter,
                                                    handleMouseLeave:
                                                        this.handleMouseLeave,
                                                    setChildRef:
                                                        this.setChildRef,
                                                    setWrapperRef:
                                                        this.setWrapperRef,
                                                    style: b,
                                                    styles: this.styles.wrapper,
                                                },
                                                c
                                            ),
                                            w = {};
                                        return (
                                            i
                                                ? (w.wrapperInPortal = O)
                                                : (w.wrapperAsChildren = O),
                                            y.createElement(
                                                'span',
                                                null,
                                                y.createElement(
                                                    zr,
                                                    {
                                                        hasChildren: !!c,
                                                        id: h,
                                                        placement: o,
                                                        setRef: this
                                                            .setFloaterRef,
                                                        target: S,
                                                        zIndex: this.styles
                                                            .options.zIndex,
                                                    },
                                                    y.createElement(Kr, {
                                                        component: l,
                                                        content: f,
                                                        disableAnimation: u,
                                                        footer: p,
                                                        handleClick:
                                                            this.handleClick,
                                                        hideArrow:
                                                            d || o === 'center',
                                                        open: g,
                                                        placement: o,
                                                        positionWrapper: i,
                                                        setArrowRef:
                                                            this.setArrowRef,
                                                        setFloaterRef:
                                                            this.setFloaterRef,
                                                        showCloseButton: x,
                                                        status: a,
                                                        styles: this.styles,
                                                        title: m,
                                                    }),
                                                    w.wrapperInPortal
                                                ),
                                                w.wrapperAsChildren
                                            )
                                        );
                                    },
                                },
                            ]),
                            n
                        );
                    })(y.Component));
                re(un, 'propTypes', {
                    autoOpen: E.default.bool,
                    callback: E.default.func,
                    children: E.default.node,
                    component: ur(
                        E.default.oneOfType([
                            E.default.func,
                            E.default.element,
                        ]),
                        function (e) {
                            return !e.content;
                        }
                    ),
                    content: ur(E.default.node, function (e) {
                        return !e.component;
                    }),
                    debug: E.default.bool,
                    disableAnimation: E.default.bool,
                    disableFlip: E.default.bool,
                    disableHoverToClick: E.default.bool,
                    event: E.default.oneOf(['hover', 'click']),
                    eventDelay: E.default.number,
                    footer: E.default.node,
                    getPopper: E.default.func,
                    hideArrow: E.default.bool,
                    id: E.default.oneOfType([
                        E.default.string,
                        E.default.number,
                    ]),
                    offset: E.default.number,
                    open: E.default.bool,
                    options: E.default.object,
                    placement: E.default.oneOf([
                        'top',
                        'top-start',
                        'top-end',
                        'bottom',
                        'bottom-start',
                        'bottom-end',
                        'left',
                        'left-start',
                        'left-end',
                        'right',
                        'right-start',
                        'right-end',
                        'auto',
                        'center',
                    ]),
                    showCloseButton: E.default.bool,
                    style: E.default.object,
                    styles: E.default.object,
                    target: E.default.oneOfType([
                        E.default.object,
                        E.default.string,
                    ]),
                    title: E.default.node,
                    wrapperOptions: E.default.shape({
                        offset: E.default.number,
                        placement: E.default.oneOf([
                            'top',
                            'top-start',
                            'top-end',
                            'bottom',
                            'bottom-start',
                            'bottom-end',
                            'left',
                            'left-start',
                            'left-end',
                            'right',
                            'right-start',
                            'right-end',
                            'auto',
                        ]),
                        position: E.default.bool,
                    }),
                });
                re(un, 'defaultProps', {
                    autoOpen: !1,
                    callback: fr,
                    debug: !1,
                    disableAnimation: !1,
                    disableFlip: !1,
                    disableHoverToClick: !1,
                    event: 'click',
                    eventDelay: 0.4,
                    getPopper: fr,
                    hideArrow: !1,
                    offset: 15,
                    placement: 'bottom',
                    showCloseButton: !1,
                    styles: {},
                    target: null,
                    wrapperOptions: { position: !1 },
                });
                (ja = Le(Xo(), 1)),
                    (Da = Object.defineProperty),
                    (Fa = (e, t, n) =>
                        t in e
                            ? Da(e, t, {
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                  value: n,
                              })
                            : (e[t] = n)),
                    (R = (e, t, n) => (
                        Fa(e, typeof t != 'symbol' ? t + '' : t, n), n
                    )),
                    (z = {
                        INIT: 'init',
                        START: 'start',
                        STOP: 'stop',
                        RESET: 'reset',
                        PREV: 'prev',
                        NEXT: 'next',
                        GO: 'go',
                        CLOSE: 'close',
                        SKIP: 'skip',
                        UPDATE: 'update',
                    }),
                    (me = {
                        TOUR_START: 'tour:start',
                        STEP_BEFORE: 'step:before',
                        BEACON: 'beacon',
                        TOOLTIP: 'tooltip',
                        STEP_AFTER: 'step:after',
                        TOUR_END: 'tour:end',
                        TOUR_STATUS: 'tour:status',
                        TARGET_NOT_FOUND: 'error:target_not_found',
                        ERROR: 'error',
                    }),
                    (M = {
                        INIT: 'init',
                        READY: 'ready',
                        BEACON: 'beacon',
                        TOOLTIP: 'tooltip',
                        COMPLETE: 'complete',
                        ERROR: 'error',
                    }),
                    (D = {
                        IDLE: 'idle',
                        READY: 'ready',
                        WAITING: 'waiting',
                        RUNNING: 'running',
                        PAUSED: 'paused',
                        SKIPPED: 'skipped',
                        FINISHED: 'finished',
                        ERROR: 'error',
                    });
                et = $e !== void 0;
                (Xa = {
                    options: {
                        preventOverflow: { boundariesElement: 'scrollParent' },
                    },
                    wrapperOptions: { offset: -18, position: !0 },
                }),
                    (eo = {
                        back: 'Back',
                        close: 'Close',
                        last: 'Last',
                        next: 'Next',
                        open: 'Open the dialog',
                        skip: 'Skip',
                    }),
                    (Ja = {
                        event: 'click',
                        placement: 'bottom',
                        offset: 10,
                        disableBeacon: !1,
                        disableCloseOnEsc: !1,
                        disableOverlay: !1,
                        disableOverlayClose: !1,
                        disableScrollParentFix: !1,
                        disableScrolling: !1,
                        hideBackButton: !1,
                        hideCloseButton: !1,
                        hideFooter: !1,
                        isFixed: !1,
                        locale: eo,
                        showProgress: !1,
                        showSkipButton: !1,
                        spotlightClicks: !1,
                        spotlightPadding: 10,
                    }),
                    (Za = {
                        continuous: !1,
                        debug: !1,
                        disableCloseOnEsc: !1,
                        disableOverlay: !1,
                        disableOverlayClose: !1,
                        disableScrolling: !1,
                        disableScrollParentFix: !1,
                        getHelpers: void 0,
                        hideBackButton: !1,
                        run: !0,
                        scrollOffset: 20,
                        scrollDuration: 300,
                        scrollToFirstStep: !1,
                        showSkipButton: !1,
                        showProgress: !1,
                        spotlightClicks: !1,
                        spotlightPadding: 10,
                        steps: [],
                    }),
                    (es = {
                        arrowColor: '#fff',
                        backgroundColor: '#fff',
                        beaconSize: 36,
                        overlayColor: 'rgba(0, 0, 0, 0.5)',
                        primaryColor: '#f04',
                        spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
                        textColor: '#333',
                        width: 380,
                        zIndex: 100,
                    }),
                    (tt = {
                        backgroundColor: 'transparent',
                        border: 0,
                        borderRadius: 0,
                        color: '#555',
                        cursor: 'pointer',
                        fontSize: 16,
                        lineHeight: 1,
                        padding: 8,
                        WebkitAppearance: 'none',
                    }),
                    (hr = { borderRadius: 4, position: 'absolute' });
                (no = {
                    action: 'init',
                    controlled: !1,
                    index: 0,
                    lifecycle: M.INIT,
                    origin: null,
                    size: 0,
                    status: D.IDLE,
                }),
                    (mr = Va(Zr(no, 'controlled', 'size'))),
                    (rs = class {
                        constructor(e) {
                            R(this, 'beaconPopper'),
                                R(this, 'tooltipPopper'),
                                R(this, 'data', new Map()),
                                R(this, 'listener'),
                                R(this, 'store', new Map()),
                                R(this, 'addListener', (o) => {
                                    this.listener = o;
                                }),
                                R(this, 'setSteps', (o) => {
                                    let { size: i, status: a } =
                                            this.getState(),
                                        s = { size: o.length, status: a };
                                    this.data.set('steps', o),
                                        a === D.WAITING &&
                                            !i &&
                                            o.length &&
                                            (s.status = D.RUNNING),
                                        this.setState(s);
                                }),
                                R(this, 'getPopper', (o) =>
                                    o === 'beacon'
                                        ? this.beaconPopper
                                        : this.tooltipPopper
                                ),
                                R(this, 'setPopper', (o, i) => {
                                    o === 'beacon'
                                        ? (this.beaconPopper = i)
                                        : (this.tooltipPopper = i);
                                }),
                                R(this, 'cleanupPoppers', () => {
                                    (this.beaconPopper = null),
                                        (this.tooltipPopper = null);
                                }),
                                R(this, 'close', (o = null) => {
                                    let { index: i, status: a } =
                                        this.getState();
                                    a === D.RUNNING &&
                                        this.setState({
                                            ...this.getNextState({
                                                action: z.CLOSE,
                                                index: i + 1,
                                                origin: o,
                                            }),
                                        });
                                }),
                                R(this, 'go', (o) => {
                                    let { controlled: i, status: a } =
                                        this.getState();
                                    if (i || a !== D.RUNNING) return;
                                    let s = this.getSteps()[o];
                                    this.setState({
                                        ...this.getNextState({
                                            action: z.GO,
                                            index: o,
                                        }),
                                        status: s ? a : D.FINISHED,
                                    });
                                }),
                                R(this, 'info', () => this.getState()),
                                R(this, 'next', () => {
                                    let { index: o, status: i } =
                                        this.getState();
                                    i === D.RUNNING &&
                                        this.setState(
                                            this.getNextState({
                                                action: z.NEXT,
                                                index: o + 1,
                                            })
                                        );
                                }),
                                R(this, 'open', () => {
                                    let { status: o } = this.getState();
                                    o === D.RUNNING &&
                                        this.setState({
                                            ...this.getNextState({
                                                action: z.UPDATE,
                                                lifecycle: M.TOOLTIP,
                                            }),
                                        });
                                }),
                                R(this, 'prev', () => {
                                    let { index: o, status: i } =
                                        this.getState();
                                    i === D.RUNNING &&
                                        this.setState({
                                            ...this.getNextState({
                                                action: z.PREV,
                                                index: o - 1,
                                            }),
                                        });
                                }),
                                R(this, 'reset', (o = !1) => {
                                    let { controlled: i } = this.getState();
                                    i ||
                                        this.setState({
                                            ...this.getNextState({
                                                action: z.RESET,
                                                index: 0,
                                            }),
                                            status: o ? D.RUNNING : D.READY,
                                        });
                                }),
                                R(this, 'skip', () => {
                                    let { status: o } = this.getState();
                                    o === D.RUNNING &&
                                        this.setState({
                                            action: z.SKIP,
                                            lifecycle: M.INIT,
                                            status: D.SKIPPED,
                                        });
                                }),
                                R(this, 'start', (o) => {
                                    let { index: i, size: a } = this.getState();
                                    this.setState({
                                        ...this.getNextState(
                                            {
                                                action: z.START,
                                                index: P.number(o) ? o : i,
                                            },
                                            !0
                                        ),
                                        status: a ? D.RUNNING : D.WAITING,
                                    });
                                }),
                                R(this, 'stop', (o = !1) => {
                                    let { index: i, status: a } =
                                        this.getState();
                                    [D.FINISHED, D.SKIPPED].includes(a) ||
                                        this.setState({
                                            ...this.getNextState({
                                                action: z.STOP,
                                                index: i + (o ? 1 : 0),
                                            }),
                                            status: D.PAUSED,
                                        });
                                }),
                                R(this, 'update', (o) => {
                                    var i, a;
                                    if (!qa(o, mr))
                                        throw new Error(
                                            `State is not valid. Valid keys: ${mr.join(', ')}`
                                        );
                                    this.setState({
                                        ...this.getNextState(
                                            {
                                                ...this.getState(),
                                                ...o,
                                                action:
                                                    (i = o.action) != null
                                                        ? i
                                                        : z.UPDATE,
                                                origin:
                                                    (a = o.origin) != null
                                                        ? a
                                                        : null,
                                            },
                                            !0
                                        ),
                                    });
                                });
                            let {
                                continuous: t = !1,
                                stepIndex: n,
                                steps: r = [],
                            } = e ?? {};
                            this.setState(
                                {
                                    action: z.INIT,
                                    controlled: P.number(n),
                                    continuous: t,
                                    index: P.number(n) ? n : 0,
                                    lifecycle: M.INIT,
                                    origin: null,
                                    status: r.length ? D.READY : D.IDLE,
                                },
                                !0
                            ),
                                (this.beaconPopper = null),
                                (this.tooltipPopper = null),
                                (this.listener = null),
                                this.setSteps(r);
                        }
                        getState() {
                            return this.store.size
                                ? {
                                      action: this.store.get('action') || '',
                                      controlled:
                                          this.store.get('controlled') || !1,
                                      index: parseInt(
                                          this.store.get('index'),
                                          10
                                      ),
                                      lifecycle:
                                          this.store.get('lifecycle') || '',
                                      origin: this.store.get('origin') || null,
                                      size: this.store.get('size') || 0,
                                      status: this.store.get('status') || '',
                                  }
                                : { ...no };
                        }
                        getNextState(e, t = !1) {
                            var n, r, o, i, a;
                            let {
                                    action: s,
                                    controlled: c,
                                    index: l,
                                    size: f,
                                    status: u,
                                } = this.getState(),
                                p = P.number(e.index) ? e.index : l,
                                d = c && !t ? l : Math.min(Math.max(p, 0), f);
                            return {
                                action: (n = e.action) != null ? n : s,
                                controlled: c,
                                index: d,
                                lifecycle:
                                    (r = e.lifecycle) != null ? r : M.INIT,
                                origin: (o = e.origin) != null ? o : null,
                                size: (i = e.size) != null ? i : f,
                                status:
                                    d === f
                                        ? D.FINISHED
                                        : (a = e.status) != null
                                          ? a
                                          : u,
                            };
                        }
                        getSteps() {
                            let e = this.data.get('steps');
                            return Array.isArray(e) ? e : [];
                        }
                        hasUpdatedState(e) {
                            let t = JSON.stringify(e),
                                n = JSON.stringify(this.getState());
                            return t !== n;
                        }
                        setState(e, t = !1) {
                            let n = this.getState(),
                                {
                                    action: r,
                                    index: o,
                                    lifecycle: i,
                                    origin: a = null,
                                    size: s,
                                    status: c,
                                } = { ...n, ...e };
                            this.store.set('action', r),
                                this.store.set('index', o),
                                this.store.set('lifecycle', i),
                                this.store.set('origin', a),
                                this.store.set('size', s),
                                this.store.set('status', c),
                                t &&
                                    (this.store.set('controlled', e.controlled),
                                    this.store.set('continuous', e.continuous)),
                                this.listener &&
                                    this.hasUpdatedState(n) &&
                                    this.listener(this.getState());
                        }
                        getHelpers() {
                            return {
                                close: this.close,
                                go: this.go,
                                info: this.info,
                                next: this.next,
                                open: this.open,
                                prev: this.prev,
                                reset: this.reset,
                                skip: this.skip,
                            };
                        }
                    });
                (as = is),
                    (ss = class extends Ne {
                        constructor() {
                            super(...arguments),
                                R(this, 'isActive', !1),
                                R(this, 'resizeTimeout'),
                                R(this, 'scrollTimeout'),
                                R(this, 'scrollParent'),
                                R(this, 'state', {
                                    isScrolling: !1,
                                    mouseOverSpotlight: !1,
                                    showSpotlight: !0,
                                }),
                                R(this, 'hideSpotlight', () => {
                                    let {
                                            continuous: e,
                                            disableOverlay: t,
                                            lifecycle: n,
                                        } = this.props,
                                        r = [M.BEACON, M.COMPLETE, M.ERROR];
                                    return (
                                        t ||
                                        (e ? r.includes(n) : n !== M.TOOLTIP)
                                    );
                                }),
                                R(this, 'handleMouseMove', (e) => {
                                    let { mouseOverSpotlight: t } = this.state,
                                        {
                                            height: n,
                                            left: r,
                                            position: o,
                                            top: i,
                                            width: a,
                                        } = this.spotlightStyles,
                                        s = o === 'fixed' ? e.clientY : e.pageY,
                                        c = o === 'fixed' ? e.clientX : e.pageX,
                                        l = s >= i && s <= i + n,
                                        f = c >= r && c <= r + a && l;
                                    f !== t &&
                                        this.updateState({
                                            mouseOverSpotlight: f,
                                        });
                                }),
                                R(this, 'handleScroll', () => {
                                    let { target: e } = this.props,
                                        t = _e(e);
                                    if (this.scrollParent !== document) {
                                        let { isScrolling: n } = this.state;
                                        n ||
                                            this.updateState({
                                                isScrolling: !0,
                                                showSpotlight: !1,
                                            }),
                                            clearTimeout(this.scrollTimeout),
                                            (this.scrollTimeout =
                                                window.setTimeout(() => {
                                                    this.updateState({
                                                        isScrolling: !1,
                                                        showSpotlight: !0,
                                                    });
                                                }, 50));
                                    } else
                                        nt(t, 'sticky') && this.updateState({});
                                }),
                                R(this, 'handleResize', () => {
                                    clearTimeout(this.resizeTimeout),
                                        (this.resizeTimeout = window.setTimeout(
                                            () => {
                                                this.isActive &&
                                                    this.forceUpdate();
                                            },
                                            100
                                        ));
                                });
                        }
                        componentDidMount() {
                            let {
                                    debug: e,
                                    disableScrolling: t,
                                    disableScrollParentFix: n = !1,
                                    target: r,
                                } = this.props,
                                o = _e(r);
                            (this.scrollParent = xt(o ?? document.body, n, !0)),
                                (this.isActive = !0),
                                !t &&
                                    ut(o, !0) &&
                                    Ae({
                                        title: 'step has a custom scroll parent and can cause trouble with scrolling',
                                        data: [
                                            {
                                                key: 'parent',
                                                value: this.scrollParent,
                                            },
                                        ],
                                        debug: e,
                                    }),
                                window.addEventListener(
                                    'resize',
                                    this.handleResize
                                );
                        }
                        componentDidUpdate(e) {
                            var t;
                            let { lifecycle: n, spotlightClicks: r } =
                                    this.props,
                                { changed: o } = St(e, this.props);
                            o('lifecycle', M.TOOLTIP) &&
                                ((t = this.scrollParent) == null ||
                                    t.addEventListener(
                                        'scroll',
                                        this.handleScroll,
                                        { passive: !0 }
                                    ),
                                setTimeout(() => {
                                    let { isScrolling: i } = this.state;
                                    i ||
                                        this.updateState({ showSpotlight: !0 });
                                }, 100)),
                                (o('spotlightClicks') ||
                                    o('disableOverlay') ||
                                    o('lifecycle')) &&
                                    (r && n === M.TOOLTIP
                                        ? window.addEventListener(
                                              'mousemove',
                                              this.handleMouseMove,
                                              !1
                                          )
                                        : n !== M.TOOLTIP &&
                                          window.removeEventListener(
                                              'mousemove',
                                              this.handleMouseMove
                                          ));
                        }
                        componentWillUnmount() {
                            var e;
                            (this.isActive = !1),
                                window.removeEventListener(
                                    'mousemove',
                                    this.handleMouseMove
                                ),
                                window.removeEventListener(
                                    'resize',
                                    this.handleResize
                                ),
                                clearTimeout(this.resizeTimeout),
                                clearTimeout(this.scrollTimeout),
                                (e = this.scrollParent) == null ||
                                    e.removeEventListener(
                                        'scroll',
                                        this.handleScroll
                                    );
                        }
                        get overlayStyles() {
                            let { mouseOverSpotlight: e } = this.state,
                                {
                                    disableOverlayClose: t,
                                    placement: n,
                                    styles: r,
                                } = this.props,
                                o = r.overlay;
                            return (
                                dr() &&
                                    (o =
                                        n === 'center'
                                            ? r.overlayLegacyCenter
                                            : r.overlayLegacy),
                                {
                                    cursor: t ? 'default' : 'pointer',
                                    height: Ba(),
                                    pointerEvents: e ? 'none' : 'auto',
                                    ...o,
                                }
                            );
                        }
                        get spotlightStyles() {
                            var e, t, n;
                            let { showSpotlight: r } = this.state,
                                {
                                    disableScrollParentFix: o = !1,
                                    spotlightClicks: i,
                                    spotlightPadding: a = 0,
                                    styles: s,
                                    target: c,
                                } = this.props,
                                l = _e(c),
                                f = Xr(l),
                                u = nt(l),
                                p = Ga(l, a, o);
                            return {
                                ...(dr() ? s.spotlightLegacy : s.spotlight),
                                height: Math.round(
                                    ((e = f?.height) != null ? e : 0) + a * 2
                                ),
                                left: Math.round(
                                    ((t = f?.left) != null ? t : 0) - a
                                ),
                                opacity: r ? 1 : 0,
                                pointerEvents: i ? 'none' : 'auto',
                                position: u ? 'fixed' : 'absolute',
                                top: p,
                                transition: 'opacity 0.2s',
                                width: Math.round(
                                    ((n = f?.width) != null ? n : 0) + a * 2
                                ),
                            };
                        }
                        updateState(e) {
                            this.isActive &&
                                this.setState((t) => ({ ...t, ...e }));
                        }
                        render() {
                            let { showSpotlight: e } = this.state,
                                { onClickOverlay: t, placement: n } =
                                    this.props,
                                {
                                    hideSpotlight: r,
                                    overlayStyles: o,
                                    spotlightStyles: i,
                                } = this;
                            if (r()) return null;
                            let a = n !== 'center' && e && q(as, { styles: i });
                            if (Jr() === 'safari') {
                                let { mixBlendMode: s, zIndex: c, ...l } = o;
                                (a = q('div', { style: { ...l } }, a)),
                                    delete o.backgroundColor;
                            }
                            return q(
                                'div',
                                {
                                    className: 'react-joyride__overlay',
                                    'data-test-id': 'overlay',
                                    onClick: t,
                                    role: 'presentation',
                                    style: o,
                                },
                                a
                            );
                        }
                    }),
                    (ls = class extends Ne {
                        constructor() {
                            super(...arguments), R(this, 'node', null);
                        }
                        componentDidMount() {
                            let { id: e } = this.props;
                            Pe() &&
                                ((this.node = document.createElement('div')),
                                (this.node.id = e),
                                document.body.appendChild(this.node),
                                et || this.renderReact15());
                        }
                        componentDidUpdate() {
                            Pe() && (et || this.renderReact15());
                        }
                        componentWillUnmount() {
                            !Pe() ||
                                !this.node ||
                                (et || mn(this.node),
                                this.node.parentNode === document.body &&
                                    (document.body.removeChild(this.node),
                                    (this.node = null)));
                        }
                        renderReact15() {
                            if (!Pe()) return;
                            let { children: e } = this.props;
                            this.node && gn(this, e, this.node);
                        }
                        renderReact16() {
                            if (!Pe() || !et) return null;
                            let { children: e } = this.props;
                            return this.node ? $e(e, this.node) : null;
                        }
                        render() {
                            return et ? this.renderReact16() : null;
                        }
                    }),
                    (cs = class {
                        constructor(e, t) {
                            if (
                                (R(this, 'element'),
                                R(this, 'options'),
                                R(this, 'canBeTabbed', (n) => {
                                    let { tabIndex: r } = n;
                                    return r === null || r < 0
                                        ? !1
                                        : this.canHaveFocus(n);
                                }),
                                R(this, 'canHaveFocus', (n) => {
                                    let r =
                                            /input|select|textarea|button|object/,
                                        o = n.nodeName.toLowerCase();
                                    return (
                                        ((r.test(o) &&
                                            !n.getAttribute('disabled')) ||
                                            (o === 'a' &&
                                                !!n.getAttribute('href'))) &&
                                        this.isVisible(n)
                                    );
                                }),
                                R(this, 'findValidTabElements', () =>
                                    [].slice
                                        .call(
                                            this.element.querySelectorAll('*'),
                                            0
                                        )
                                        .filter(this.canBeTabbed)
                                ),
                                R(this, 'handleKeyDown', (n) => {
                                    let { code: r = 'Tab' } = this.options;
                                    n.code === r && this.interceptTab(n);
                                }),
                                R(this, 'interceptTab', (n) => {
                                    n.preventDefault();
                                    let r = this.findValidTabElements(),
                                        { shiftKey: o } = n;
                                    if (!r.length) return;
                                    let i = document.activeElement
                                        ? r.indexOf(document.activeElement)
                                        : 0;
                                    i === -1 || (!o && i + 1 === r.length)
                                        ? (i = 0)
                                        : o && i === 0
                                          ? (i = r.length - 1)
                                          : (i += o ? -1 : 1),
                                        r[i].focus();
                                }),
                                R(this, 'isHidden', (n) => {
                                    let r =
                                            n.offsetWidth <= 0 &&
                                            n.offsetHeight <= 0,
                                        o = window.getComputedStyle(n);
                                    return r && !n.innerHTML
                                        ? !0
                                        : (r &&
                                              o.getPropertyValue('overflow') !==
                                                  'visible') ||
                                              o.getPropertyValue('display') ===
                                                  'none';
                                }),
                                R(this, 'isVisible', (n) => {
                                    let r = n;
                                    for (; r; )
                                        if (r instanceof HTMLElement) {
                                            if (r === document.body) break;
                                            if (this.isHidden(r)) return !1;
                                            r = r.parentNode;
                                        }
                                    return !0;
                                }),
                                R(this, 'removeScope', () => {
                                    window.removeEventListener(
                                        'keydown',
                                        this.handleKeyDown
                                    );
                                }),
                                R(this, 'checkFocus', (n) => {
                                    document.activeElement !== n &&
                                        (n.focus(),
                                        window.requestAnimationFrame(() =>
                                            this.checkFocus(n)
                                        ));
                                }),
                                R(this, 'setFocus', () => {
                                    let { selector: n } = this.options;
                                    if (!n) return;
                                    let r = this.element.querySelector(n);
                                    r &&
                                        window.requestAnimationFrame(() =>
                                            this.checkFocus(r)
                                        );
                                }),
                                !(e instanceof HTMLElement))
                            )
                                throw new TypeError(
                                    'Invalid parameter: element must be an HTMLElement'
                                );
                            (this.element = e),
                                (this.options = t),
                                window.addEventListener(
                                    'keydown',
                                    this.handleKeyDown,
                                    !1
                                ),
                                this.setFocus();
                        }
                    }),
                    (us = class extends Ne {
                        constructor(e) {
                            if (
                                (super(e),
                                R(this, 'beacon', null),
                                R(this, 'setBeaconRef', (r) => {
                                    this.beacon = r;
                                }),
                                e.beaconComponent)
                            )
                                return;
                            let t =
                                    document.head ||
                                    document.getElementsByTagName('head')[0],
                                n = document.createElement('style');
                            (n.id = 'joyride-beacon-animation'),
                                e.nonce && n.setAttribute('nonce', e.nonce),
                                n.appendChild(
                                    document.createTextNode(`
        @keyframes joyride-beacon-inner {
          20% {
            opacity: 0.9;
          }
        
          90% {
            opacity: 0.7;
          }
        }
        
        @keyframes joyride-beacon-outer {
          0% {
            transform: scale(1);
          }
        
          45% {
            opacity: 0.7;
            transform: scale(0.75);
          }
        
          100% {
            opacity: 0.9;
            transform: scale(1);
          }
        }
      `)
                                ),
                                t.appendChild(n);
                        }
                        componentDidMount() {
                            let { shouldFocus: e } = this.props;
                            P.domElement(this.beacon) ||
                                console.warn(
                                    'beacon is not a valid DOM element'
                                ),
                                setTimeout(() => {
                                    P.domElement(this.beacon) &&
                                        e &&
                                        this.beacon.focus();
                                }, 0);
                        }
                        componentWillUnmount() {
                            let e = document.getElementById(
                                'joyride-beacon-animation'
                            );
                            e?.parentNode && e.parentNode.removeChild(e);
                        }
                        render() {
                            let {
                                    beaconComponent: e,
                                    continuous: t,
                                    index: n,
                                    isLastStep: r,
                                    locale: o,
                                    onClickOrHover: i,
                                    size: a,
                                    step: s,
                                    styles: c,
                                } = this.props,
                                l = P.string(o.open)
                                    ? o.open
                                    : (0, ja.default)(o.open),
                                f = {
                                    'aria-label': l,
                                    onClick: i,
                                    onMouseEnter: i,
                                    ref: this.setBeaconRef,
                                    title: l,
                                },
                                u;
                            return (
                                e
                                    ? (u = q(e, {
                                          continuous: t,
                                          index: n,
                                          isLastStep: r,
                                          size: a,
                                          step: s,
                                          ...f,
                                      }))
                                    : (u = q(
                                          'button',
                                          {
                                              key: 'JoyrideBeacon',
                                              className:
                                                  'react-joyride__beacon',
                                              'data-test-id': 'button-beacon',
                                              style: c.beacon,
                                              type: 'button',
                                              ...f,
                                          },
                                          q('span', { style: c.beaconInner }),
                                          q('span', { style: c.beaconOuter })
                                      )),
                                u
                            );
                        }
                    });
                ps = fs;
                (hs = ds),
                    (ys = class extends Ne {
                        constructor() {
                            super(...arguments),
                                R(this, 'handleClickBack', (e) => {
                                    e.preventDefault();
                                    let { helpers: t } = this.props;
                                    t.prev();
                                }),
                                R(this, 'handleClickClose', (e) => {
                                    e.preventDefault();
                                    let { helpers: t } = this.props;
                                    t.close('button_close');
                                }),
                                R(this, 'handleClickPrimary', (e) => {
                                    e.preventDefault();
                                    let { continuous: t, helpers: n } =
                                        this.props;
                                    if (!t) {
                                        n.close('button_primary');
                                        return;
                                    }
                                    n.next();
                                }),
                                R(this, 'handleClickSkip', (e) => {
                                    e.preventDefault();
                                    let { helpers: t } = this.props;
                                    t.skip();
                                }),
                                R(this, 'getElementsProps', () => {
                                    let {
                                            continuous: e,
                                            isLastStep: t,
                                            setTooltipRef: n,
                                            step: r,
                                        } = this.props,
                                        o = Re(r.locale.back),
                                        i = Re(r.locale.close),
                                        a = Re(r.locale.last),
                                        s = Re(r.locale.next),
                                        c = Re(r.locale.skip),
                                        l = e ? s : i;
                                    return (
                                        t && (l = a),
                                        {
                                            backProps: {
                                                'aria-label': o,
                                                'data-action': 'back',
                                                onClick: this.handleClickBack,
                                                role: 'button',
                                                title: o,
                                            },
                                            closeProps: {
                                                'aria-label': i,
                                                'data-action': 'close',
                                                onClick: this.handleClickClose,
                                                role: 'button',
                                                title: i,
                                            },
                                            primaryProps: {
                                                'aria-label': l,
                                                'data-action': 'primary',
                                                onClick:
                                                    this.handleClickPrimary,
                                                role: 'button',
                                                title: l,
                                            },
                                            skipProps: {
                                                'aria-label': c,
                                                'data-action': 'skip',
                                                onClick: this.handleClickSkip,
                                                role: 'button',
                                                title: c,
                                            },
                                            tooltipProps: {
                                                'aria-modal': !0,
                                                ref: n,
                                                role: 'alertdialog',
                                            },
                                        }
                                    );
                                });
                        }
                        render() {
                            let {
                                    continuous: e,
                                    index: t,
                                    isLastStep: n,
                                    setTooltipRef: r,
                                    size: o,
                                    step: i,
                                } = this.props,
                                {
                                    beaconComponent: a,
                                    tooltipComponent: s,
                                    ...c
                                } = i,
                                l;
                            if (s) {
                                let f = {
                                    ...this.getElementsProps(),
                                    continuous: e,
                                    index: t,
                                    isLastStep: n,
                                    size: o,
                                    step: c,
                                    setTooltipRef: r,
                                };
                                l = q(s, { ...f });
                            } else
                                l = q(hs, {
                                    ...this.getElementsProps(),
                                    continuous: e,
                                    index: t,
                                    isLastStep: n,
                                    size: o,
                                    step: i,
                                });
                            return l;
                        }
                    }),
                    (ms = class extends Ne {
                        constructor() {
                            super(...arguments),
                                R(this, 'scope', null),
                                R(this, 'tooltip', null),
                                R(this, 'handleClickHoverBeacon', (e) => {
                                    let { step: t, store: n } = this.props;
                                    (e.type === 'mouseenter' &&
                                        t.event !== 'hover') ||
                                        n.update({ lifecycle: M.TOOLTIP });
                                }),
                                R(this, 'setTooltipRef', (e) => {
                                    this.tooltip = e;
                                }),
                                R(this, 'setPopper', (e, t) => {
                                    var n;
                                    let {
                                        action: r,
                                        lifecycle: o,
                                        step: i,
                                        store: a,
                                    } = this.props;
                                    t === 'wrapper'
                                        ? a.setPopper('beacon', e)
                                        : a.setPopper('tooltip', e),
                                        a.getPopper('beacon') &&
                                            a.getPopper('tooltip') &&
                                            o === M.INIT &&
                                            a.update({
                                                action: r,
                                                lifecycle: M.READY,
                                            }),
                                        (n = i.floaterProps) != null &&
                                            n.getPopper &&
                                            i.floaterProps.getPopper(e, t);
                                }),
                                R(this, 'renderTooltip', (e) => {
                                    let {
                                        continuous: t,
                                        helpers: n,
                                        index: r,
                                        size: o,
                                        step: i,
                                    } = this.props;
                                    return q(ys, {
                                        continuous: t,
                                        helpers: n,
                                        index: r,
                                        isLastStep: r + 1 === o,
                                        setTooltipRef: this.setTooltipRef,
                                        size: o,
                                        step: i,
                                        ...e,
                                    });
                                });
                        }
                        componentDidMount() {
                            let { debug: e, index: t } = this.props;
                            Ae({
                                title: `step:${t}`,
                                data: [{ key: 'props', value: this.props }],
                                debug: e,
                            });
                        }
                        componentDidUpdate(e) {
                            var t;
                            let {
                                    action: n,
                                    callback: r,
                                    continuous: o,
                                    controlled: i,
                                    debug: a,
                                    helpers: s,
                                    index: c,
                                    lifecycle: l,
                                    status: f,
                                    step: u,
                                    store: p,
                                } = this.props,
                                { changed: d, changedFrom: h } = St(
                                    e,
                                    this.props
                                ),
                                g = s.info(),
                                x =
                                    o &&
                                    n !== z.CLOSE &&
                                    (c > 0 || n === z.PREV),
                                b =
                                    d('action') ||
                                    d('index') ||
                                    d('lifecycle') ||
                                    d('status'),
                                S = h('lifecycle', [M.TOOLTIP, M.INIT], M.INIT),
                                m = d('action', [
                                    z.NEXT,
                                    z.PREV,
                                    z.SKIP,
                                    z.CLOSE,
                                ]),
                                O = i && c === e.index;
                            if (
                                (m &&
                                    (S || O) &&
                                    r({
                                        ...g,
                                        index: e.index,
                                        lifecycle: M.COMPLETE,
                                        step: e.step,
                                        type: me.STEP_AFTER,
                                    }),
                                u.placement === 'center' &&
                                    f === D.RUNNING &&
                                    d('index') &&
                                    n !== z.START &&
                                    l === M.INIT &&
                                    p.update({ lifecycle: M.READY }),
                                b)
                            ) {
                                let w = _e(u.target),
                                    $ = !!w;
                                $ && Ha(w)
                                    ? (h('status', D.READY, D.RUNNING) ||
                                          h('lifecycle', M.INIT, M.READY)) &&
                                      r({ ...g, step: u, type: me.STEP_BEFORE })
                                    : (console.warn(
                                          $
                                              ? 'Target not visible'
                                              : 'Target not mounted',
                                          u
                                      ),
                                      r({
                                          ...g,
                                          type: me.TARGET_NOT_FOUND,
                                          step: u,
                                      }),
                                      i ||
                                          p.update({
                                              index:
                                                  c + (n === z.PREV ? -1 : 1),
                                          }));
                            }
                            h('lifecycle', M.INIT, M.READY) &&
                                p.update({
                                    lifecycle:
                                        pr(u) || x ? M.TOOLTIP : M.BEACON,
                                }),
                                d('index') &&
                                    Ae({
                                        title: `step:${l}`,
                                        data: [
                                            { key: 'props', value: this.props },
                                        ],
                                        debug: a,
                                    }),
                                d('lifecycle', M.BEACON) &&
                                    r({ ...g, step: u, type: me.BEACON }),
                                d('lifecycle', M.TOOLTIP) &&
                                    (r({ ...g, step: u, type: me.TOOLTIP }),
                                    this.tooltip &&
                                        ((this.scope = new cs(this.tooltip, {
                                            selector: '[data-action=primary]',
                                        })),
                                        this.scope.setFocus())),
                                h('lifecycle', [M.TOOLTIP, M.INIT], M.INIT) &&
                                    ((t = this.scope) == null ||
                                        t.removeScope(),
                                    p.cleanupPoppers());
                        }
                        componentWillUnmount() {
                            var e;
                            (e = this.scope) == null || e.removeScope();
                        }
                        get open() {
                            let { lifecycle: e, step: t } = this.props;
                            return pr(t) || e === M.TOOLTIP;
                        }
                        render() {
                            let {
                                    continuous: e,
                                    debug: t,
                                    index: n,
                                    nonce: r,
                                    shouldScroll: o,
                                    size: i,
                                    step: a,
                                } = this.props,
                                s = _e(a.target);
                            return !to(a) || !P.domElement(s)
                                ? null
                                : q(
                                      'div',
                                      {
                                          key: `JoyrideStep-${n}`,
                                          className: 'react-joyride__step',
                                      },
                                      q(
                                          un,
                                          {
                                              ...a.floaterProps,
                                              component: this.renderTooltip,
                                              debug: t,
                                              getPopper: this.setPopper,
                                              id: `react-joyride-step-${n}`,
                                              open: this.open,
                                              placement: a.placement,
                                              target: a.target,
                                          },
                                          q(us, {
                                              beaconComponent:
                                                  a.beaconComponent,
                                              continuous: e,
                                              index: n,
                                              isLastStep: n + 1 === i,
                                              locale: a.locale,
                                              nonce: r,
                                              onClickOrHover:
                                                  this.handleClickHoverBeacon,
                                              shouldFocus: o,
                                              size: i,
                                              step: a,
                                              styles: a.styles,
                                          })
                                      )
                                  );
                        }
                    }),
                    (ro = class extends Ne {
                        constructor(e) {
                            super(e),
                                R(this, 'helpers'),
                                R(this, 'store'),
                                R(this, 'callback', (a) => {
                                    let { callback: s } = this.props;
                                    P.function(s) && s(a);
                                }),
                                R(this, 'handleKeyboard', (a) => {
                                    let { index: s, lifecycle: c } = this.state,
                                        { steps: l } = this.props,
                                        f = l[s];
                                    c === M.TOOLTIP &&
                                        a.code === 'Escape' &&
                                        f &&
                                        !f.disableCloseOnEsc &&
                                        this.store.close('keyboard');
                                }),
                                R(this, 'handleClickOverlay', () => {
                                    let { index: a } = this.state,
                                        { steps: s } = this.props;
                                    Fe(this.props, s[a]).disableOverlayClose ||
                                        this.helpers.close('overlay');
                                }),
                                R(this, 'syncState', (a) => {
                                    this.setState(a);
                                });
                            let {
                                debug: t,
                                getHelpers: n,
                                run: r,
                                stepIndex: o,
                            } = e;
                            (this.store = os({
                                ...e,
                                controlled: r && P.number(o),
                            })),
                                (this.helpers = this.store.getHelpers());
                            let { addListener: i } = this.store;
                            Ae({
                                title: 'init',
                                data: [
                                    { key: 'props', value: this.props },
                                    { key: 'state', value: this.state },
                                ],
                                debug: t,
                            }),
                                i(this.syncState),
                                n && n(this.helpers),
                                (this.state = this.store.getState());
                        }
                        componentDidMount() {
                            if (!Pe()) return;
                            let {
                                    debug: e,
                                    disableCloseOnEsc: t,
                                    run: n,
                                    steps: r,
                                } = this.props,
                                { start: o } = this.store;
                            yr(r, e) && n && o(),
                                t ||
                                    document.body.addEventListener(
                                        'keydown',
                                        this.handleKeyboard,
                                        { passive: !0 }
                                    );
                        }
                        componentDidUpdate(e, t) {
                            if (!Pe()) return;
                            let {
                                    action: n,
                                    controlled: r,
                                    index: o,
                                    lifecycle: i,
                                    status: a,
                                } = this.state,
                                {
                                    debug: s,
                                    run: c,
                                    stepIndex: l,
                                    steps: f,
                                } = this.props,
                                { stepIndex: u, steps: p } = e,
                                {
                                    reset: d,
                                    setSteps: h,
                                    start: g,
                                    stop: x,
                                    update: b,
                                } = this.store,
                                { changed: S } = St(e, this.props),
                                { changed: m, changedFrom: O } = St(
                                    t,
                                    this.state
                                ),
                                w = Fe(this.props, f[o]),
                                $ = !oe(p, f),
                                N = P.number(l) && S('stepIndex'),
                                ee = _e(w.target);
                            if (
                                ($ &&
                                    (yr(f, s)
                                        ? h(f)
                                        : console.warn(
                                              'Steps are not valid',
                                              f
                                          )),
                                S('run') && (c ? g(l) : x()),
                                N)
                            ) {
                                let ye = P.number(u) && u < l ? z.NEXT : z.PREV;
                                n === z.STOP && (ye = z.START),
                                    [D.FINISHED, D.SKIPPED].includes(a) ||
                                        b({
                                            action:
                                                n === z.CLOSE ? z.CLOSE : ye,
                                            index: l,
                                            lifecycle: M.INIT,
                                        });
                            }
                            !r &&
                                a === D.RUNNING &&
                                o === 0 &&
                                !ee &&
                                (this.store.update({ index: o + 1 }),
                                this.callback({
                                    ...this.state,
                                    type: me.TARGET_NOT_FOUND,
                                    step: w,
                                }));
                            let K = { ...this.state, index: o, step: w };
                            if (
                                m('action', [
                                    z.NEXT,
                                    z.PREV,
                                    z.SKIP,
                                    z.CLOSE,
                                ]) &&
                                m('status', D.PAUSED)
                            ) {
                                let ye = Fe(this.props, f[t.index]);
                                this.callback({
                                    ...K,
                                    index: t.index,
                                    lifecycle: M.COMPLETE,
                                    step: ye,
                                    type: me.STEP_AFTER,
                                });
                            }
                            if (m('status', [D.FINISHED, D.SKIPPED])) {
                                let ye = Fe(this.props, f[t.index]);
                                r ||
                                    this.callback({
                                        ...K,
                                        index: t.index,
                                        lifecycle: M.COMPLETE,
                                        step: ye,
                                        type: me.STEP_AFTER,
                                    }),
                                    this.callback({
                                        ...K,
                                        type: me.TOUR_END,
                                        step: ye,
                                        index: t.index,
                                    }),
                                    d();
                            } else
                                O('status', [D.IDLE, D.READY], D.RUNNING)
                                    ? this.callback({
                                          ...K,
                                          type: me.TOUR_START,
                                      })
                                    : (m('status') || m('action', z.RESET)) &&
                                      this.callback({
                                          ...K,
                                          type: me.TOUR_STATUS,
                                      });
                            this.scrollToStep(t),
                                w.placement === 'center' &&
                                    a === D.RUNNING &&
                                    i === M.INIT &&
                                    this.store.update({ lifecycle: M.READY });
                        }
                        componentWillUnmount() {
                            let { disableCloseOnEsc: e } = this.props;
                            e ||
                                document.body.removeEventListener(
                                    'keydown',
                                    this.handleKeyboard
                                );
                        }
                        scrollToStep(e) {
                            let {
                                    index: t,
                                    lifecycle: n,
                                    status: r,
                                } = this.state,
                                {
                                    debug: o,
                                    disableScrollParentFix: i = !1,
                                    scrollDuration: a,
                                    scrollOffset: s = 20,
                                    scrollToFirstStep: c = !1,
                                    steps: l,
                                } = this.props,
                                f = Fe(this.props, l[t]),
                                u = _e(f.target),
                                p = Qa({
                                    isFirstStep: t === 0,
                                    lifecycle: n,
                                    previousLifecycle: e.lifecycle,
                                    scrollToFirstStep: c,
                                    step: f,
                                    target: u,
                                });
                            if (r === D.RUNNING && p) {
                                let d = ut(u, i),
                                    h = xt(u, i),
                                    g = Math.floor(Ya(u, s, i)) || 0;
                                Ae({
                                    title: 'scrollToStep',
                                    data: [
                                        { key: 'index', value: t },
                                        { key: 'lifecycle', value: n },
                                        { key: 'status', value: r },
                                    ],
                                    debug: o,
                                });
                                let x = this.store.getPopper('beacon'),
                                    b = this.store.getPopper('tooltip');
                                if (n === M.BEACON && x) {
                                    let { offsets: S, placement: m } = x;
                                    !['bottom'].includes(m) &&
                                        !d &&
                                        (g = Math.floor(S.popper.top - s));
                                } else if (n === M.TOOLTIP && b) {
                                    let {
                                        flipped: S,
                                        offsets: m,
                                        placement: O,
                                    } = b;
                                    ['top', 'right', 'left'].includes(O) &&
                                    !S &&
                                    !d
                                        ? (g = Math.floor(m.popper.top - s))
                                        : (g -= f.spotlightPadding);
                                }
                                (g = g >= 0 ? g : 0),
                                    r === D.RUNNING &&
                                        za(g, { element: h, duration: a }).then(
                                            () => {
                                                setTimeout(() => {
                                                    var S;
                                                    (S =
                                                        this.store.getPopper(
                                                            'tooltip'
                                                        )) == null ||
                                                        S.instance.update();
                                                }, 10);
                                            }
                                        );
                            }
                        }
                        render() {
                            if (!Pe()) return null;
                            let {
                                    index: e,
                                    lifecycle: t,
                                    status: n,
                                } = this.state,
                                {
                                    continuous: r = !1,
                                    debug: o = !1,
                                    nonce: i,
                                    scrollToFirstStep: a = !1,
                                    steps: s,
                                } = this.props,
                                c = n === D.RUNNING,
                                l = {};
                            if (c && s[e]) {
                                let f = Fe(this.props, s[e]);
                                (l.step = q(ms, {
                                    ...this.state,
                                    callback: this.callback,
                                    continuous: r,
                                    debug: o,
                                    helpers: this.helpers,
                                    nonce: i,
                                    shouldScroll:
                                        !f.disableScrolling && (e !== 0 || a),
                                    step: f,
                                    store: this.store,
                                })),
                                    (l.overlay = q(
                                        ls,
                                        { id: 'react-joyride-portal' },
                                        q(ss, {
                                            ...f,
                                            continuous: r,
                                            debug: o,
                                            lifecycle: t,
                                            onClickOverlay:
                                                this.handleClickOverlay,
                                        })
                                    ));
                            }
                            return q(
                                'div',
                                { className: 'react-joyride' },
                                l.step,
                                l.overlay
                            );
                        }
                    });
                R(ro, 'defaultProps', Za);
                (gs = ro),
                    (bs = te.button`
  all: unset;
  box-sizing: border-box;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  background: ${({ theme: e, variant: t }) => (t === 'primary' ? e.color.secondary : t === 'secondary' ? e.color.lighter : t === 'outline' ? 'transparent' : t === 'white' ? e.color.lightest : e.color.secondary)};
  color: ${({ theme: e, variant: t }) => (t === 'primary' ? e.color.lightest : t === 'secondary' || t === 'outline' ? e.darkest : t === 'white' ? e.color.secondary : e.color.lightest)};
  box-shadow: ${({ variant: e }) => (e === 'secondary' || e === 'outline' ? '#D9E8F2 0 0 0 1px inset' : 'none')};
  height: 32px;
  font-size: 0.8125rem;
  font-weight: 700;
  font-family: ${({ theme: e }) => e.typography.fonts.base};
  transition: background-color, box-shadow, color, opacity;
  transition-duration: 0.16s;
  transition-timing-function: ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme: e, variant: t }) => (t === 'primary' ? '#0b94eb' : t === 'secondary' ? '#eef4f9' : t === 'outline' ? 'transparent' : t === 'white' ? e.color.lightest : '#0b94eb')};
    color: ${({ theme: e, variant: t }) => (t === 'primary' ? e.color.lightest : t === 'secondary' || t === 'outline' ? e.darkest : t === 'white' ? e.color.darkest : e.color.lightest)};
  }

  &:focus {
    box-shadow: ${({ variant: e }) => (e === 'primary' ? 'inset 0 0 0 1px rgba(0, 0, 0, 0.2)' : e === 'secondary' || e === 'outline' ? 'inset 0 0 0 1px #0b94eb' : e === 'white' ? 'none' : 'inset 0 0 0 2px rgba(0, 0, 0, 0.1)')};
  }
`),
                    (vs = dn(function (
                        {
                            children: e,
                            onClick: t,
                            variant: n = 'primary',
                            ...r
                        },
                        o
                    ) {
                        return y.createElement(
                            bs,
                            { ref: o, onClick: t, variant: n, ...r },
                            e
                        );
                    })),
                    (Es = te.div`
  padding: 15px;
  border-radius: 5px;
`),
                    (Os = te.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`),
                    (ws = te.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  margin: -5px -5px 5px 0;
`),
                    (Ss = te.div`
  line-height: 18px;
  font-weight: 700;
  font-size: 14px;
  margin: 5px 5px 5px 0;
`),
                    (Ts = te.p`
  font-size: 14px;
  line-height: 18px;
  text-align: start;
  text-wrap: balance;
  margin: 0;
  margin-top: 5px;
`),
                    (Is = te.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`),
                    (Cs = te.span`
  font-size: 13px;
`),
                    (Ps = ({
                        index: e,
                        size: t,
                        step: n,
                        closeProps: r,
                        primaryProps: o,
                        tooltipProps: i,
                    }) => (
                        fe(() => {
                            let a = document.createElement('style');
                            return (
                                (a.id = '#sb-onboarding-arrow-style'),
                                (a.innerHTML = `
      .__floater__arrow { container-type: size; }
      .__floater__arrow span { background: ${ht.secondary}; }
      .__floater__arrow span::before, .__floater__arrow span::after {
        content: '';
        display: block;
        width: 2px;
        height: 2px;
        background: ${ht.secondary};
        box-shadow: 0 0 0 2px ${ht.secondary};
        border-radius: 3px;
        flex: 0 0 2px;
      }
      @container (min-height: 1px) {
        .__floater__arrow span { flex-direction: column; }
      }
    `),
                                document.head.appendChild(a),
                                () => {
                                    let s = document.querySelector(
                                        '#sb-onboarding-arrow-style'
                                    );
                                    s && s.remove();
                                }
                            );
                        }, []),
                        y.createElement(
                            Es,
                            { ...i, style: n.styles?.tooltip },
                            y.createElement(
                                Os,
                                null,
                                y.createElement(
                                    ws,
                                    null,
                                    n.title &&
                                        y.createElement(Ss, null, n.title),
                                    y.createElement(
                                        wn,
                                        {
                                            ...r,
                                            onClick: r.onClick,
                                            variant: 'solid',
                                        },
                                        y.createElement(Fn, null)
                                    )
                                ),
                                y.createElement(Ts, null, n.content)
                            ),
                            y.createElement(
                                Is,
                                { id: 'buttonNext' },
                                y.createElement(Cs, null, e + 1, ' of ', t),
                                !n.hideNextButton &&
                                    y.createElement(
                                        vs,
                                        {
                                            ...o,
                                            onClick:
                                                n.onNextButtonClick ||
                                                o.onClick,
                                            variant: 'white',
                                        },
                                        e + 1 === t ? 'Done' : 'Next'
                                    )
                            )
                        )
                    ));
                (_s = Ve({ from: { opacity: 0 }, to: { opacity: 1 } })),
                    (oo = Ve({
                        from: { transform: 'translate(0, 20px)', opacity: 0 },
                        to: { transform: 'translate(0, 0)', opacity: 1 },
                    })),
                    (xs = Ve({
                        from: { opacity: 0, transform: 'scale(0.8)' },
                        to: { opacity: 1, transform: 'scale(1)' },
                    })),
                    (As = Ve({
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(360deg)' },
                    })),
                    (Ns = te.div(({ visible: e }) => ({
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        opacity: e ? 1 : 0,
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1e3,
                        transition: 'opacity 1s 0.5s',
                    }))),
                    (ks = te.div({
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        animation: `${_s} 2s`,
                        background: `
    radial-gradient(90% 90%, #ff4785 0%, #db5698 30%, #1ea7fdcc 100%),
    radial-gradient(circle, #ff4785 0%, transparent 80%),
    radial-gradient(circle at 30% 40%, #fc521f99 0%, #fc521f66 20%, transparent 40%),
    radial-gradient(circle at 75% 75%, #fc521f99 0%, #fc521f77 18%, transparent 30%)`,
                        '&::before': {
                            opacity: 0.5,
                            background: `
      radial-gradient(circle at 30% 40%, #fc521f99 0%, #fc521f66 10%, transparent 20%),
      radial-gradient(circle at 75% 75%, #fc521f99 0%, #fc521f77 8%, transparent 20%)`,
                            content: '""',
                            position: 'absolute',
                            top: '-50vw',
                            left: '-50vh',
                            transform: 'translate(-50%, -50%)',
                            width: 'calc(100vw + 100vh)',
                            height: 'calc(100vw + 100vh)',
                            animation: `${As} 12s linear infinite`,
                        },
                    })),
                    (Ms = te.div(({ visible: e }) => ({
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        textAlign: 'center',
                        width: '90vw',
                        minWidth: 290,
                        maxWidth: 410,
                        opacity: e ? 1 : 0,
                        transition: 'opacity 0.5s',
                        h1: {
                            fontSize: 45,
                            fontWeight: 'bold',
                            animation: `${oo} 1.5s 1s backwards`,
                        },
                    }))),
                    (Ls = te.div({
                        display: 'flex',
                        marginTop: 40,
                        div: {
                            display: 'flex',
                            flexBasis: '33.33%',
                            flexDirection: 'column',
                            alignItems: 'center',
                            animation: `${oo} 1s backwards`,
                            '&:nth-child(1)': { animationDelay: '2s' },
                            '&:nth-child(2)': { animationDelay: '2.5s' },
                            '&:nth-child(3)': { animationDelay: '3s' },
                        },
                        svg: { marginBottom: 10 },
                    })),
                    (js = te.button({
                        display: 'inline-flex',
                        position: 'relative',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 40,
                        width: 48,
                        height: 48,
                        padding: 0,
                        borderRadius: '50%',
                        border: 0,
                        outline: 'none',
                        background: 'rgba(255, 255, 255, 0.3)',
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                        animation: `${xs} 1.5s 4s backwards`,
                        '&:hover, &:focus': {
                            background: 'rgba(255, 255, 255, 0.4)',
                        },
                    })),
                    (Ds = te(Dn)({ width: 30, color: 'white' })),
                    (gr = te.svg(({ progress: e }) => ({
                        position: 'absolute',
                        top: -1,
                        left: -1,
                        width: '50px!important',
                        height: '50px!important',
                        transform: 'rotate(-90deg)',
                        color: 'white',
                        circle: {
                            r: '24',
                            cx: '25',
                            cy: '25',
                            fill: 'transparent',
                            stroke: e ? 'currentColor' : 'transparent',
                            strokeWidth: '1',
                            strokeLinecap: 'round',
                            strokeDasharray: Math.PI * 48,
                        },
                    }))),
                    (Fs = ({ onDismiss: e, duration: t = 6e3 }) => {
                        let [n, r] = pe(-4e5 / t),
                            [o, i] = pe(!0),
                            a = n >= 100,
                            s = ze(() => {
                                i(!1);
                                let c = setTimeout(e, 1500);
                                return () => clearTimeout(c);
                            }, [e]);
                        return (
                            fe(() => {
                                if (!t) return;
                                let c = 1e3 / 50,
                                    l = 100 / (t / c),
                                    f = setInterval(() => r((u) => u + l), c);
                                return () => clearInterval(f);
                            }, [t]),
                            fe(() => {
                                a && s();
                            }, [a, s]),
                            y.createElement(
                                Ns,
                                { visible: o },
                                y.createElement(ks, null),
                                y.createElement(
                                    Ms,
                                    { visible: o },
                                    y.createElement(
                                        'h1',
                                        null,
                                        'Meet your new frontend workshop'
                                    ),
                                    y.createElement(
                                        Ls,
                                        null,
                                        y.createElement(
                                            'div',
                                            null,
                                            y.createElement(
                                                'svg',
                                                {
                                                    xmlns: 'http://www.w3.org/2000/svg',
                                                    width: '33',
                                                    height: '32',
                                                },
                                                y.createElement('path', {
                                                    d: 'M4.06 0H32.5v28.44h-3.56V32H.5V3.56h3.56V0Zm21.33 7.11H4.06v21.33h21.33V7.11Z',
                                                    fill: 'currentColor',
                                                })
                                            ),
                                            'Development'
                                        ),
                                        y.createElement(
                                            'div',
                                            null,
                                            y.createElement(
                                                'svg',
                                                {
                                                    xmlns: 'http://www.w3.org/2000/svg',
                                                    width: '32',
                                                    height: '32',
                                                },
                                                y.createElement('path', {
                                                    d: 'M15.95 32c-1.85 0-3.1-1.55-3.1-3.54 0-1.1.45-2.78 1.35-5.03.9-2.3 1.35-4.51 1.35-6.81a22.21 22.21 0 0 0-5.1 3.67c-2.5 2.47-4.95 4.9-7.55 4.9-1.6 0-2.9-1.1-2.9-2.43 0-1.46 1.35-2.91 4.3-3.62 1.45-.36 3.1-.75 4.95-1.06 1.8-.31 3.8-1.02 5.9-2.08a23.77 23.77 0 0 0-6.1-2.12C5.3 13.18 2.3 12.6 1 11.28.35 10.6 0 9.9 0 9.14 0 7.82 1.2 6.8 2.95 6.8c2.65 0 5.75 3.1 7.95 5.3 1.1 1.1 2.65 2.21 4.65 3.27v-.57c0-1.77-.15-3.23-.55-4.3-.8-2.11-2.05-5.43-2.05-6.97 0-2.04 1.3-3.54 3.1-3.54 1.75 0 3.1 1.41 3.1 3.54 0 1.06-.45 2.78-1.35 5.12-.9 2.35-1.35 4.6-1.35 6.72 2.85-1.59 2.5-1.41 4.95-3.5 2.35-2.29 4-3.7 4.9-4.23.95-.58 1.9-.84 2.9-.84 1.6 0 2.8.97 2.8 2.34 0 1.5-1.25 2.78-4.15 3.62-1.4.4-3.05.75-4.9 1.1-1.9.36-3.9 1.07-6.1 2.13a23.3 23.3 0 0 0 5.95 2.08c3.65.7 6.75 1.32 8.15 2.6.7.67 1.05 1.33 1.05 2.08 0 1.33-1.2 2.43-2.95 2.43-2.95 0-6.75-4.15-8.2-5.61-.7-.7-2.2-1.72-4.4-2.96v.57c0 1.9.45 4.03 1.3 6.32.85 2.3 1.3 3.94 1.3 4.95 0 2.08-1.35 3.54-3.1 3.54Z',
                                                    fill: 'currentColor',
                                                })
                                            ),
                                            'Testing'
                                        ),
                                        y.createElement(
                                            'div',
                                            null,
                                            y.createElement(
                                                'svg',
                                                {
                                                    xmlns: 'http://www.w3.org/2000/svg',
                                                    width: '33',
                                                    height: '32',
                                                },
                                                y.createElement('path', {
                                                    d: 'M.5 16a16 16 0 1 1 32 0 16 16 0 0 1-32 0Zm16 12.44A12.44 12.44 0 0 1 4.3 13.53a8 8 0 1 0 9.73-9.73 12.44 12.44 0 1 1 2.47 24.64ZM12.06 16a4.44 4.44 0 1 1 0-8.89 4.44 4.44 0 0 1 0 8.89Z',
                                                    fill: 'currentColor',
                                                    fillRule: 'evenodd',
                                                })
                                            ),
                                            'Documentation'
                                        )
                                    ),
                                    y.createElement(
                                        js,
                                        { onClick: s },
                                        y.createElement(Ds, null),
                                        y.createElement(
                                            gr,
                                            {
                                                xmlns: 'http://www.w3.org/2000/svg',
                                            },
                                            y.createElement('circle', null)
                                        ),
                                        y.createElement(
                                            gr,
                                            {
                                                xmlns: 'http://www.w3.org/2000/svg',
                                                progress: !0,
                                            },
                                            y.createElement('circle', {
                                                strokeDashoffset:
                                                    Math.PI *
                                                    48 *
                                                    (1 -
                                                        Math.max(
                                                            0,
                                                            Math.min(n, 100)
                                                        ) /
                                                            100),
                                            })
                                        )
                                    )
                                )
                            )
                        );
                    }),
                    (Bs = te.span(({ theme: e }) => ({
                        display: 'inline-flex',
                        borderRadius: 3,
                        padding: '0 5px',
                        marginBottom: -2,
                        opacity: 0.8,
                        fontFamily: e.typography.fonts.mono,
                        fontSize: 11,
                        border:
                            e.base === 'dark'
                                ? e.color.darkest
                                : e.color.lightest,
                        color:
                            e.base === 'dark'
                                ? e.color.lightest
                                : e.color.darkest,
                        backgroundColor:
                            e.base === 'dark' ? 'black' : e.color.light,
                        boxSizing: 'border-box',
                        lineHeight: '17px',
                    }))),
                    (Ws = te.div(({ theme: e }) => ({
                        background: e.background.content,
                        borderRadius: 3,
                        marginTop: 15,
                        padding: 10,
                        fontSize: e.typography.size.s1,
                        '.linenumber': { opacity: 0.5 },
                    }))),
                    (Us = Wt());
            });
        Q();
        X();
        J();
        Q();
        X();
        J();
        qe();
        dt();
        Ft();
        Q();
        X();
        J();
        var eu = __STORYBOOK_API__,
            {
                ActiveTabs: tu,
                Consumer: nu,
                ManagerContext: ru,
                Provider: ou,
                RequestResponseError: iu,
                addons: On,
                combineParameters: au,
                controlOrMetaKey: su,
                controlOrMetaSymbol: lu,
                eventMatchesShortcut: cu,
                eventToShortcut: uu,
                experimental_requestResponse: fu,
                isMacLike: pu,
                isShortcutTaken: du,
                keyToSymbol: hu,
                merge: yu,
                mockChannel: mu,
                optionOrAltSymbol: gu,
                shortcutMatchesShortcut: bu,
                shortcutToHumanString: vu,
                types: Eu,
                useAddonState: Ou,
                useArgTypes: wu,
                useArgs: Su,
                useChannel: Tu,
                useGlobalTypes: Iu,
                useGlobals: Cu,
                useParameter: Pu,
                useSharedState: Ru,
                useStoryPrepared: _u,
                useStorybookApi: xu,
                useStorybookState: Au,
            } = __STORYBOOK_API__;
        var Gs = yn(() => Promise.resolve().then(() => (ao(), io)));
        On.register('@storybook/addon-onboarding', async (e) => {
            let t = e.getUrlState(),
                n =
                    t.path === '/onboarding' ||
                    t.queryParams.onboarding === 'true';
            e.once(vn, () => {
                if (
                    !(
                        e.getData('example-button--primary') ||
                        document.getElementById('example-button--primary')
                    )
                ) {
                    console.warn(
                        '[@storybook/addon-onboarding] It seems like you have finished the onboarding experience in Storybook! Therefore this addon is not necessary anymore and will not be loaded. You are free to remove it from your project. More info: https://github.com/storybookjs/storybook/tree/next/code/addons/onboarding#uninstalling'
                    );
                    return;
                }
                if (!n || window.innerWidth < 730) return;
                e.togglePanel(!0),
                    e.togglePanelPosition('bottom'),
                    e.setSelectedPanel('addon-controls');
                let r = document.createElement('div');
                (r.id = 'storybook-addon-onboarding'),
                    document.body.appendChild(r),
                    ke.render(
                        y.createElement(
                            pn,
                            { fallback: y.createElement('div', null) },
                            y.createElement(Gs, { api: e })
                        ),
                        r
                    );
            });
        });
    })();
} catch (e) {
    console.error(
        '[Storybook] One of your manager-entries failed: ' + import.meta.url,
        e
    );
}
