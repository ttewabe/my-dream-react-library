import { f as z } from './index-Dj6nxAlZ.js';
import { j as k } from './jsx-runtime-WdPq8kIh.js';
import { d as T, l as r } from './styled-components.browser.esm-DUzjfXJ_.js';
import './index-BpYrhlGc.js';
const w = T.button`
  display: inline-block;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  line-height: 1;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  
  ${({ primary: e }) =>
      e
          ? r`
          background-color: #1ea7fd;
          color: white;
        `
          : r`
          background-color: transparent;
          color: #333;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        `}

  ${({ size: e }) => {
      switch (e) {
          case 'small':
              return r`
          padding: 10px 16px;
          font-size: 12px;
        `;
          case 'large':
              return r`
          padding: 12px 24px;
          font-size: 16px;
        `;
          case 'medium':
          default:
              return r`
          padding: 11px 20px;
          font-size: 14px;
        `;
      }
  }}

  ${({ backgroundColor: e }) =>
      e &&
      r`
      background-color: ${e};
    `}
`,
    y = ({
        primary: e = !1,
        size: B = 'medium',
        backgroundColor: S,
        label: v,
        ...h
    }) =>
        k.jsx(w, {
            primary: e,
            size: B,
            backgroundColor: S,
            ...h,
            children: v,
        });
y.__docgenInfo = {
    description: '',
    methods: [],
    displayName: 'Button',
    props: {
        primary: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
            defaultValue: { value: 'false', computed: !1 },
        },
        backgroundColor: {
            required: !1,
            tsType: { name: 'string' },
            description: '',
        },
        size: {
            required: !1,
            tsType: {
                name: 'union',
                raw: "'small' | 'medium' | 'large'",
                elements: [
                    { name: 'literal', value: "'small'" },
                    { name: 'literal', value: "'medium'" },
                    { name: 'literal', value: "'large'" },
                ],
            },
            description: '',
            defaultValue: { value: "'medium'", computed: !1 },
        },
        label: { required: !0, tsType: { name: 'string' }, description: '' },
        onClick: {
            required: !1,
            tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
            },
            description: '',
        },
    },
};
const j = {
        title: 'INPUTS/Button',
        component: y,
        parameters: { layout: 'centered' },
        tags: ['autodocs'],
        argTypes: { backgroundColor: { control: 'color' } },
        args: { onClick: z() },
    },
    a = { args: { primary: !0, label: 'Button' } },
    t = { args: { label: 'Button' } },
    s = { args: { size: 'large', label: 'Button' } },
    o = { args: { size: 'small', label: 'Button' } };
var n, l, i;
a.parameters = {
    ...a.parameters,
    docs: {
        ...((n = a.parameters) == null ? void 0 : n.docs),
        source: {
            originalSource: `{
  args: {
    primary: true,
    label: 'Button'
  }
}`,
            ...((i = (l = a.parameters) == null ? void 0 : l.docs) == null
                ? void 0
                : i.source),
        },
    },
};
var u, c, m;
t.parameters = {
    ...t.parameters,
    docs: {
        ...((u = t.parameters) == null ? void 0 : u.docs),
        source: {
            originalSource: `{
  args: {
    label: 'Button'
  }
}`,
            ...((m = (c = t.parameters) == null ? void 0 : c.docs) == null
                ? void 0
                : m.source),
        },
    },
};
var p, d, g;
s.parameters = {
    ...s.parameters,
    docs: {
        ...((p = s.parameters) == null ? void 0 : p.docs),
        source: {
            originalSource: `{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,
            ...((g = (d = s.parameters) == null ? void 0 : d.docs) == null
                ? void 0
                : g.source),
        },
    },
};
var f, b, x;
o.parameters = {
    ...o.parameters,
    docs: {
        ...((f = o.parameters) == null ? void 0 : f.docs),
        source: {
            originalSource: `{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,
            ...((x = (b = o.parameters) == null ? void 0 : b.docs) == null
                ? void 0
                : x.source),
        },
    },
};
const C = ['Primary', 'Secondary', 'Large', 'Small'];
export {
    s as Large,
    a as Primary,
    t as Secondary,
    o as Small,
    C as __namedExportsOrder,
    j as default,
};
