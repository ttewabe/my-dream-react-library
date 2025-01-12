import { j as r } from './jsx-runtime-WdPq8kIh.js';
import { d as g } from './styled-components.browser.esm-hNWxsyDk.js';
import './index-BpYrhlGc.js';
const b = g.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
        font-size: 14px;
        font-weight: 500;
    }

    select {
        padding: 8px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #fff;
        cursor: pointer;

        &:disabled {
            background-color: #f0f0f0;
            cursor: not-allowed;
        }
    }
`,
    a = ({
        id: e,
        label: s,
        value: p,
        placeholder: c = 'Select an option',
        options: u,
        style: m,
        className: f,
        onChange: t,
    }) =>
        r.jsxs(b, {
            style: m,
            className: f,
            children: [
                s && r.jsx('label', { htmlFor: e, children: s }),
                r.jsxs('select', {
                    id: e,
                    value: p,
                    onChange: (o) => (t == null ? void 0 : t(o.target.value)),
                    children: [
                        r.jsx('option', {
                            value: '',
                            disabled: !0,
                            children: c,
                        }),
                        u.map((o) =>
                            r.jsx(
                                'option',
                                {
                                    value: o.id,
                                    disabled: o.disabled,
                                    children: o.name,
                                },
                                o.id
                            )
                        ),
                    ],
                }),
            ],
        });
a.__docgenInfo = {
    description: '',
    methods: [],
    displayName: 'Dropdown',
    props: {
        id: { required: !0, tsType: { name: 'string' }, description: '' },
        label: { required: !1, tsType: { name: 'string' }, description: '' },
        value: { required: !0, tsType: { name: 'string' }, description: '' },
        placeholder: {
            required: !1,
            tsType: { name: 'string' },
            description: '',
            defaultValue: { value: "'Select an option'", computed: !1 },
        },
        disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
        },
        style: {
            required: !1,
            tsType: { name: 'ReactCSSProperties', raw: 'React.CSSProperties' },
            description: '',
        },
        className: {
            required: !1,
            tsType: { name: 'string' },
            description: '',
        },
        required: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
        },
        options: {
            required: !0,
            tsType: {
                name: 'Array',
                elements: [{ name: 'DropdownOption' }],
                raw: 'DropdownOption[]',
            },
            description: '',
        },
        onChange: {
            required: !1,
            tsType: {
                name: 'signature',
                type: 'function',
                raw: '(value: string) => void',
                signature: {
                    arguments: [{ type: { name: 'string' }, name: 'value' }],
                    return: { name: 'void' },
                },
            },
            description: '',
        },
    },
};
const v = {
        title: 'OVERLAYS/Dropdown',
        component: a,
        argTypes: {
            label: { control: 'text', defaultValue: 'Dropdown Label' },
            placeholder: { control: 'text', defaultValue: 'Select an option' },
            disabled: { control: 'boolean', defaultValue: !1 },
        },
    },
    w = [
        { id: '1', name: 'Option 1' },
        { id: '2', name: 'Option 2' },
        { id: '3', name: 'Option 3 (disabled)', disabled: !0 },
        { id: '4', name: 'Option 4' },
        { id: '5', name: 'Option 5' },
    ],
    n = {
        render: (e) => r.jsx(a, { ...e }),
        args: {
            id: 'dropdown',
            label: 'Dropdown Label',
            options: w,
            value: '',
            placeholder: 'Select an option',
            style: { width: '200px' },
            onChange: (e) => console.log('Selected:', e),
        },
    };
var d, i, l;
n.parameters = {
    ...n.parameters,
    docs: {
        ...((d = n.parameters) == null ? void 0 : d.docs),
        source: {
            originalSource: `{
  render: args => <Dropdown {...args} />,
  args: {
    id: 'dropdown',
    label: 'Dropdown Label',
    options: dropdownOptions,
    value: '',
    placeholder: 'Select an option',
    style: {
      width: '200px'
    },
    onChange: value => console.log('Selected:', value)
  }
}`,
            ...((l = (i = n.parameters) == null ? void 0 : i.docs) == null
                ? void 0
                : l.source),
        },
    },
};
const S = ['Default'];
export { n as Default, S as __namedExportsOrder, v as default };
