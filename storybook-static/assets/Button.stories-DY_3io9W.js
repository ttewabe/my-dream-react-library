import{f as v}from"./index-Dj6nxAlZ.js";import{j as z}from"./jsx-runtime-WdPq8kIh.js";import{d as w,l as r}from"./styled-components.browser.esm-DUzjfXJ_.js";import"./index-BpYrhlGc.js";const T=w.button`
  display: inline-block;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  line-height: 1;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  
  ${({primary:e})=>e?r`
          background-color: #1ea7fd;
          color: white;
        `:r`
          background-color: transparent;
          color: #333;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        `}

  ${({size:e})=>{switch(e){case"small":return r`
          padding: 10px 16px;
          font-size: 12px;
        `;case"large":return r`
          padding: 12px 24px;
          font-size: 16px;
        `;case"medium":default:return r`
          padding: 11px 20px;
          font-size: 14px;
        `}}}

  ${({backgroundColor:e})=>e&&r`
      background-color: ${e};
    `}
`,y=({primary:e=!1,size:h="medium",backgroundColor:B,label:S,...k})=>z.jsx(T,{primary:e,size:h,backgroundColor:B,...k,children:S});y.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const P={title:"INPUTS/Button",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:v()}},a={args:{primary:!0,label:"Button"}},t={args:{label:"Button"}},o={args:{size:"large",label:"Button"}},s={args:{size:"small",label:"Button"}};var n,l,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,u,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,d,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,b,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const _=["Primary","Secondary","Large","Small"];export{o as Large,a as Primary,t as Secondary,s as Small,_ as __namedExportsOrder,P as default};
