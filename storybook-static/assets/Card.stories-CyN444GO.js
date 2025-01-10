import { j as e } from './jsx-runtime-WdPq8kIh.js';
import { d as C } from './styled-components.browser.esm-DUzjfXJ_.js';
import './index-BpYrhlGc.js';
const f = C.div`
background-color: #ddefef;
  padding:0px 10px;
  border: 2px solid lightgray;
  border-radius:15px;
  width: 400px;
  margin: 10px;
  box-shadow: 5px 5px 5px lightgray;
  transition: all 0.9s ease;
  `,
    a = ({ header: r, headerLabel: g, children: x }) =>
        e.jsxs(f, {
            children: [
                e.jsxs('div', {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    },
                    children: [
                        e.jsx('h1', { children: r }),
                        e.jsx('span', { children: g }),
                    ],
                }),
                x,
            ],
        });
a.__docgenInfo = {
    description: '',
    methods: [],
    displayName: 'Card',
    props: {
        header: {
            required: !0,
            tsType: { name: 'ReactNode' },
            description: '',
        },
        headerLabel: {
            required: !0,
            tsType: { name: 'ReactNode' },
            description: '',
        },
        children: {
            required: !0,
            tsType: {
                name: 'union',
                raw: 'ReactNode | undefined',
                elements: [{ name: 'ReactNode' }, { name: 'undefined' }],
            },
            description: '',
        },
    },
};
const y = { title: 'LAYOUT/Card', component: a },
    n = {
        render: (r) => e.jsx(a, { ...r }),
        args: {
            header: 'Card Header',
            headerLabel: 'L',
            children: e.jsx('p', {
                children: 'This is the content of the card.',
            }),
        },
    },
    d = {
        render: (r) => e.jsx(a, { ...r }),
        args: {
            header: 'Card Header',
            headerLabel: 'L',
            children: e.jsxs('div', {
                children: [
                    e.jsx('p', {
                        children:
                            'This is some longer content inside the card.',
                    }),
                    e.jsx('p', {
                        children:
                            'You can use this to test how the card handles larger amounts of content.',
                    }),
                ],
            }),
        },
    },
    s = {
        render: (r) => e.jsx(a, { ...r }),
        args: { header: 'Card Header', headerLabel: 'Label', children: void 0 },
    };
var t, o, i;
n.parameters = {
    ...n.parameters,
    docs: {
        ...((t = n.parameters) == null ? void 0 : t.docs),
        source: {
            originalSource: `{
  render: args => <Card {...args} />,
  args: {
    header: "Card Header",
    headerLabel: "L",
    children: <p>This is the content of the card.</p>
  }
}`,
            ...((i = (o = n.parameters) == null ? void 0 : o.docs) == null
                ? void 0
                : i.source),
        },
    },
};
var c, h, l;
d.parameters = {
    ...d.parameters,
    docs: {
        ...((c = d.parameters) == null ? void 0 : c.docs),
        source: {
            originalSource: `{
  render: args => <Card {...args} />,
  args: {
    header: "Card Header",
    headerLabel: "L",
    children: <div>\r
      <p>This is some longer content inside the card.</p>\r
      <p>You can use this to test how the card handles larger amounts of content.</p>\r
    </div>
  }
}`,
            ...((l = (h = d.parameters) == null ? void 0 : h.docs) == null
                ? void 0
                : l.source),
        },
    },
};
var p, u, m;
s.parameters = {
    ...s.parameters,
    docs: {
        ...((p = s.parameters) == null ? void 0 : p.docs),
        source: {
            originalSource: `{
  render: args => <Card {...args} />,
  args: {
    header: "Card Header",
    headerLabel: "Label",
    children: undefined
  }
}`,
            ...((m = (u = s.parameters) == null ? void 0 : u.docs) == null
                ? void 0
                : m.source),
        },
    },
};
const T = ['Default', 'WithLongContent', 'WithoutChildren'];
export {
    n as Default,
    d as WithLongContent,
    s as WithoutChildren,
    T as __namedExportsOrder,
    y as default,
};
