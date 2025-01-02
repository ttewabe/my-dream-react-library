import{j as o}from"./jsx-runtime-WdPq8kIh.js";import{r as i}from"./index-BpYrhlGc.js";import{d as r}from"./styled-components.browser.esm-DUzjfXJ_.js";const m=r.div`
background-color: aqua;
  display: inline-block;
  align-content: center;
  position: relative;
  width: 400px;
  outline: none;
`,b=r.div`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: 3px solid #171010;
  border-radius: 10px;
  padding: 4px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #d1f7e8;
  color: black;
`,w=r.div`
  background-color: #e0e0e0;
  border-radius: 16px;
  padding: 4px 8px;
  margin-right: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,j=r.span`
  margin-left: auto;
  font-weight: bold;
`,v=r.div`
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
`,S=r.div`
  padding: 8px;
  cursor: pointer;

  &.selected {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`,l=()=>{const[n,u]=i.useState([]),[x,c]=i.useState(!1),g=["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape"],f=e=>{u(t=>t.includes(e)?t.filter(h=>h!==e):[...t,e])};return o.jsx("div",{className:"App",children:o.jsxs(m,{tabIndex:0,onFocus:()=>c(!0),onBlur:()=>c(!1),children:[o.jsxs(b,{children:[n.slice(0,3).map((e,t)=>o.jsx(w,{children:e},t)),n.length>3&&o.jsxs(j,{children:["+",n.length-3]})]}),x&&o.jsx(v,{children:g.map((e,t)=>o.jsx(S,{className:n.includes(e)?"selected":"",onClick:()=>f(e),children:e},t))})]})})};l.__docgenInfo={description:"",methods:[],displayName:"MultiSelect"};const M={title:"Components/MultiSelect",component:l},s={render:()=>o.jsx(l,{})};s.args={};var d,a,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <MultiSelect />
}`,...(p=(a=s.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const C=["Default"];export{s as Default,C as __namedExportsOrder,M as default};
