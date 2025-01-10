import { j as e } from './jsx-runtime-WdPq8kIh.js';
import { d as l } from './styled-components.browser.esm-DUzjfXJ_.js';
import './index-BpYrhlGc.js';
const m = l.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin-bottom: 16px;
`,
    b = l.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  color: #333;
  box-sizing: border-box;

  &:focus {
    border-color: blue;
    outline: none;
  }
`,
    f = l.label`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;
l.span`
  color: #aaa;
  font-size: 14px;
`;
const a = ({ label: r, placeholder: u, required: x }) =>
    e.jsxs('div', {
        children: [
            e.jsxs(f, {
                children: [
                    r,
                    ' ',
                    x &&
                        e.jsx('span', {
                            style: { color: 'red' },
                            children: '*',
                        }),
                ],
            }),
            e.jsx(m, { children: e.jsx(b, { placeholder: u }) }),
        ],
    });
a.__docgenInfo = {
    description: '',
    methods: [],
    displayName: 'TextField',
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
const q = {
        title: 'INPUTS/TextField',
        component: a,
        argTypes: {
            label: { control: 'text', defaultValue: 'TextField Label' },
            placeholder: { control: 'text', defaultValue: 'Enter text here' },
            required: { control: 'boolean', defaultValue: !1 },
        },
    },
    t = {
        render: (r) => e.jsx(a, { ...r }),
        args: {
            label: 'TextField Label',
            placeholder: 'Enter text here',
            required: !1,
        },
    },
    o = {
        render: (r) => e.jsx(a, { ...r }),
        args: {
            label: 'Required TextField',
            placeholder: 'Please enter a value',
            required: !0,
        },
    };
var s, d, n;
t.parameters = {
    ...t.parameters,
    docs: {
        ...((s = t.parameters) == null ? void 0 : s.docs),
        source: {
            originalSource: `{
  render: args => <TextField {...args} />,
  args: {
    label: 'TextField Label',
    placeholder: 'Enter text here',
    required: false
  }
}`,
            ...((n = (d = t.parameters) == null ? void 0 : d.docs) == null
                ? void 0
                : n.source),
        },
    },
};
var i, c, p;
o.parameters = {
    ...o.parameters,
    docs: {
        ...((i = o.parameters) == null ? void 0 : i.docs),
        source: {
            originalSource: `{
  render: args => <TextField {...args} />,
  args: {
    label: 'Required TextField',
    placeholder: 'Please enter a value',
    required: true
  }
}`,
            ...((p = (c = o.parameters) == null ? void 0 : c.docs) == null
                ? void 0
                : p.source),
        },
    },
};
const F = ['Default', 'Required'];
export { t as Default, o as Required, F as __namedExportsOrder, q as default };
