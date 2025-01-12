import { j as e } from './jsx-runtime-WdPq8kIh.js';
import { r as p } from './index-BpYrhlGc.js';
import { d as o } from './styled-components.browser.esm-hNWxsyDk.js';
const k = o.div`
    display: inline-block;
    align-content: center;
    position: relative;
    width: 400px;
    outline: none;
`,
    v = o.div`
    border: ${({ isFocus: r }) => (r ? '2px solid blue' : '1px solid #ccc')};
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 4px;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    color: black;
`,
    I = o.label`
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: bold;
    color: #333;
`,
    q = o.span`
    color: #aaa;
    font-size: 14px;
`,
    T = o.div`
    background-color: #e0e0e0;
    border-radius: 16px;
    padding: 4px 8px;
    margin-right: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,
    D = o.span`
    margin: auto;
    font-weight: bold;
`,
    F = o.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #afbcf2;
    color: black;
    border: 1px solid #ccc;
    border-radius: 10px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 10;
`,
    R = o.div`
    padding: 8px;
    cursor: pointer;

    &.selected {
        background-color: #aaaaaa;
        font-weight: bold;
    }

    &:hover {
        background-color: #aac4eb;
    }
`,
    c = ({ label: r, placeholder: f, required: S }) => {
        const [s, j] = p.useState([]),
            [i, d] = p.useState(!1),
            w = [
                'Apple',
                'Banana',
                'Cherry',
                'Date',
                'Elderberry',
                'Fig',
                'Grape',
            ],
            y = (t) => {
                j((l) =>
                    l.includes(t) ? l.filter((M) => M !== t) : [...l, t]
                );
            };
        return e.jsxs('div', {
            className: 'App',
            children: [
                e.jsxs(I, {
                    children: [
                        r,
                        ' ',
                        S &&
                            e.jsx('span', {
                                style: { color: 'red' },
                                children: '*',
                            }),
                    ],
                }),
                e.jsxs(k, {
                    tabIndex: 0,
                    onFocus: () => d(!0),
                    onBlur: () => d(!1),
                    children: [
                        e.jsxs(v, {
                            isFocus: i,
                            children: [
                                s.length === 0
                                    ? e.jsx(q, { children: f })
                                    : s
                                          .slice(0, 3)
                                          .map((t, l) =>
                                              e.jsx(T, { children: t }, l)
                                          ),
                                s.length > 3 &&
                                    e.jsxs(D, {
                                        children: ['+', s.length - 3],
                                    }),
                            ],
                        }),
                        i &&
                            e.jsx(F, {
                                children: w.map((t, l) =>
                                    e.jsx(
                                        R,
                                        {
                                            className: s.includes(t)
                                                ? 'selected'
                                                : '',
                                            onClick: () => y(t),
                                            children: t,
                                        },
                                        l
                                    )
                                ),
                            }),
                    ],
                }),
            ],
        });
    };
c.__docgenInfo = {
    description: '',
    methods: [],
    displayName: 'MultiSelect',
    props: {
        label: { required: !0, tsType: { name: 'string' }, description: '' },
        placeholder: {
            required: !0,
            tsType: { name: 'string' },
            description: '',
        },
        required: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
        },
    },
};
const E = {
        title: 'INPUTS/MultiSelect',
        component: c,
        argTypes: {
            label: { control: 'text', defaultValue: 'MultiSelect Label' },
            placeholder: { control: 'text', defaultValue: 'Select an option' },
        },
    },
    a = {
        render: (r) => e.jsx(c, { ...r }),
        args: { label: 'MultiSelect Label', placeholder: 'Select an option' },
    },
    n = {
        render: (r) => e.jsx(c, { ...r }),
        args: {
            label: 'Required MultiSelect',
            placeholder: 'Please make a selection',
        },
    };
var u, x, g;
a.parameters = {
    ...a.parameters,
    docs: {
        ...((u = a.parameters) == null ? void 0 : u.docs),
        source: {
            originalSource: `{
  render: args => <MultiSelect {...args} />,
  args: {
    label: 'MultiSelect Label',
    placeholder: 'Select an option'
  }
}`,
            ...((g = (x = a.parameters) == null ? void 0 : x.docs) == null
                ? void 0
                : g.source),
        },
    },
};
var b, h, m;
n.parameters = {
    ...n.parameters,
    docs: {
        ...((b = n.parameters) == null ? void 0 : b.docs),
        source: {
            originalSource: `{
  render: args => <MultiSelect {...args} />,
  args: {
    label: 'Required MultiSelect',
    placeholder: 'Please make a selection'
  }
}`,
            ...((m = (h = n.parameters) == null ? void 0 : h.docs) == null
                ? void 0
                : m.source),
        },
    },
};
const L = ['Default', 'Required'];
export { a as Default, n as Required, L as __namedExportsOrder, E as default };
