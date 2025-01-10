import { j as t } from './jsx-runtime-WdPq8kIh.js';
import { r as c } from './index-BpYrhlGc.js';
import { d as p } from './styled-components.browser.esm-DUzjfXJ_.js';
const u = p.div`
  display: ${({ isOpen: e }) => (e ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`,
    g = p.div`
  margin: 10px 1px 0px 2px;
  position: fixed;
  top: ${({ position: e }) => (e === 'top' || e === 'bottom' ? '0' : 'auto')};
  bottom: ${({ position: e }) => (e === 'bottom' ? '0' : 'auto')};
  left: ${({ position: e }) => (e === 'left' ? '0' : 'auto')};
  right: ${({ position: e }) => (e === 'right' ? '0' : 'auto')};
  width: ${({ position: e }) => (e === 'left' || e === 'right' ? '350px' : '100%')};
  height: ${({ position: e }) => (e === 'top' || e === 'bottom' ? '350px' : '100%')};
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transform: ${({ isOpen: e, position: r }) => {
      switch (r) {
          case 'left':
              return e ? 'translateX(0)' : 'translateX(-100%)';
          case 'right':
              return e ? 'translateX(0)' : 'translateX(100%)';
          case 'top':
              return e ? 'translateY(0)' : 'translateY(-100%)';
          case 'bottom':
              return e ? 'translateY(0)' : 'translateY(100%)';
          default:
              return 'translateX(0)';
      }
  }};
  transition: transform 0.3s ease-in-out;
`,
    a = ({ isOpen: e, onClose: r, position: o = 'right', children: d }) =>
        t.jsxs('div', {
            children: [
                t.jsx(u, { isOpen: e, onClick: r }),
                t.jsx(g, { isOpen: e, position: o, children: d }),
            ],
        });
a.__docgenInfo = {
    description: '',
    methods: [],
    displayName: 'SlideDrawer',
    props: {
        isOpen: { required: !0, tsType: { name: 'boolean' }, description: '' },
        onClose: {
            required: !0,
            tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
            },
            description: '',
        },
        position: {
            required: !1,
            tsType: {
                name: 'union',
                raw: "'left' | 'right' | 'top' | 'bottom'",
                elements: [
                    { name: 'literal', value: "'left'" },
                    { name: 'literal', value: "'right'" },
                    { name: 'literal', value: "'top'" },
                    { name: 'literal', value: "'bottom'" },
                ],
            },
            description: '',
            defaultValue: { value: "'right'", computed: !1 },
        },
        children: {
            required: !0,
            tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
            description: '',
        },
    },
};
const b = {
        title: 'LAYOUT/SlideDrawer',
        component: a,
        argTypes: {
            isOpen: { control: 'boolean', defaultValue: !0 },
            position: {
                control: 'select',
                options: ['left', 'right', 'top', 'bottom'],
                defaultValue: 'left',
            },
        },
    },
    h = (e) => {
        const [r, o] = c.useState(e.isOpen);
        return t.jsxs(t.Fragment, {
            children: [
                t.jsx('button', {
                    style: {
                        padding: '10px',
                        background: 'gray',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '20px',
                        fontWeight: 'bold',
                    },
                    onClick: () => o(!r),
                    children: 'Toggle Drawer',
                }),
                t.jsx(a, {
                    ...e,
                    isOpen: r,
                    onClose: () => o(!1),
                    children: t.jsxs('div', {
                        style: {
                            padding: '6px',
                            background: 'lightGray',
                            width: 'auto',
                            height: 'auto',
                            fontSize: '20px',
                            fontWeight: 'bold',
                        },
                        children: [
                            t.jsx('span', {
                                style: {
                                    position: 'absolute',
                                    top: '5px',
                                    right: '15px',
                                    color: 'brown',
                                    border: 'none',
                                    cursor: 'pointer',
                                },
                                onClick: () => o(!1),
                                children: 'X',
                            }),
                            t.jsx('h1', { children: 'SlideDrawer' }),
                            t.jsx('p', {
                                children: 'The content inside the drawer.',
                            }),
                        ],
                    }),
                }),
            ],
        });
    },
    n = h.bind({});
n.args = { isOpen: !0, position: 'left' };
var s, i, l;
n.parameters = {
    ...n.parameters,
    docs: {
        ...((s = n.parameters) == null ? void 0 : s.docs),
        source: {
            originalSource: `args => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  return <>\r
      <button style={{
      padding: '10px',
      background: "gray",
      color: "white",
      border: 'none',
      cursor: 'pointer',
      fontSize: "20px",
      fontWeight: "bold"
    }} onClick={() => setIsOpen(!isOpen)}>Toggle Drawer</button>\r
      <SlideDrawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>\r
        <div style={{
        padding: '6px',
        background: "lightGray",
        width: "auto",
        height: "auto",
        fontSize: "20px",
        fontWeight: "bold"
      }}>\r
        <span style={{
          position: 'absolute',
          top: '5px',
          right: '15px',
          color: 'brown',
          border: 'none',
          cursor: 'pointer'
        }} onClick={() => setIsOpen(false)}>X</span>\r
          <h1>SlideDrawer</h1>\r
          <p>The content inside the drawer.</p>\r
        </div>\r
      </SlideDrawer>\r
    </>;
}`,
            ...((l = (i = n.parameters) == null ? void 0 : i.docs) == null
                ? void 0
                : l.source),
        },
    },
};
const w = ['Default'];
export { n as Default, w as __namedExportsOrder, b as default };
