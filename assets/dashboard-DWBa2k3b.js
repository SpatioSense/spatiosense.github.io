var hu=Object.defineProperty;var fu=(r,e,t)=>e in r?hu(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var fe=(r,e,t)=>fu(r,typeof e!="symbol"?e+"":e,t);import{r as J,j as a,d as Zc,R as pu,P as bl}from"./index-vsK8gW_B.js";import{M as mu,i as gu,u as Jc,P as xu,a as yu,b as vu,L as bu,c as De,m as V,H as ws,N as Su,d as Di,C as Nn,A as ed,E as Es,U as Pi,e as Vi,f as Au,D as _u,g as wu,h as Mi,j as Dr,k as td,S as Cu}from"./SiteWalkthroughScreen-Db7sQ7xQ.js";import{m as Mu}from"./mockUser-Bww-yTA0.js";function Sl(r,e){if(typeof r=="function")return r(e);r!=null&&(r.current=e)}function Eu(...r){return e=>{let t=!1;const n=r.map(s=>{const i=Sl(s,e);return!t&&typeof i=="function"&&(t=!0),i});if(t)return()=>{for(let s=0;s<n.length;s++){const i=n[s];typeof i=="function"?i():Sl(r[s],null)}}}}function Tu(...r){return J.useCallback(Eu(...r),r)}class Ru extends J.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const n=t.offsetParent,s=gu(n)&&n.offsetWidth||0,i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft,i.right=s-i.width-i.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Nu({children:r,isPresent:e,anchorX:t,root:n}){const s=J.useId(),i=J.useRef(null),o=J.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=J.useContext(mu),c=Tu(i,r==null?void 0:r.ref);return J.useInsertionEffect(()=>{const{width:d,height:u,top:h,left:p,right:f}=o.current;if(e||!i.current||!d||!u)return;const g=t==="left"?`left: ${p}`:`right: ${f}`;i.current.dataset.motionPopId=s;const y=document.createElement("style");l&&(y.nonce=l);const x=n??document.head;return x.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${u}px !important;
            ${g}px !important;
            top: ${h}px !important;
          }
        `),()=>{x.contains(y)&&x.removeChild(y)}},[e]),a.jsx(Ru,{isPresent:e,childRef:i,sizeRef:o,children:J.cloneElement(r,{ref:c})})}const Iu=({children:r,initial:e,isPresent:t,onExitComplete:n,custom:s,presenceAffectsLayout:i,mode:o,anchorX:l,root:c})=>{const d=Jc(Du),u=J.useId();let h=!0,p=J.useMemo(()=>(h=!1,{id:u,initial:e,isPresent:t,custom:s,onExitComplete:f=>{d.set(f,!0);for(const g of d.values())if(!g)return;n&&n()},register:f=>(d.set(f,!1),()=>d.delete(f))}),[t,d,n]);return i&&h&&(p={...p}),J.useMemo(()=>{d.forEach((f,g)=>d.set(g,!1))},[t]),J.useEffect(()=>{!t&&!d.size&&n&&n()},[t]),o==="popLayout"&&(r=a.jsx(Nu,{isPresent:t,anchorX:l,root:c,children:r})),a.jsx(xu.Provider,{value:p,children:r})};function Du(){return new Map}const $i=r=>r.key||"";function Al(r){const e=[];return J.Children.forEach(r,t=>{J.isValidElement(t)&&e.push(t)}),e}const Vt=({children:r,custom:e,initial:t=!0,onExitComplete:n,presenceAffectsLayout:s=!0,mode:i="sync",propagate:o=!1,anchorX:l="left",root:c})=>{const[d,u]=yu(o),h=J.useMemo(()=>Al(r),[r]),p=o&&!d?[]:h.map($i),f=J.useRef(!0),g=J.useRef(h),y=Jc(()=>new Map),[x,m]=J.useState(h),[v,S]=J.useState(h);vu(()=>{f.current=!1,g.current=h;for(let M=0;M<v.length;M++){const w=$i(v[M]);p.includes(w)?y.delete(w):y.get(w)!==!0&&y.set(w,!1)}},[v,p.length,p.join("-")]);const b=[];if(h!==x){let M=[...h];for(let w=0;w<v.length;w++){const T=v[w],C=$i(T);p.includes(C)||(M.splice(w,0,T),b.push(T))}return i==="wait"&&b.length&&(M=b),S(Al(M)),m(h),null}const{forceRender:_}=J.useContext(bu);return a.jsx(a.Fragment,{children:v.map(M=>{const w=$i(M),T=o&&!d?!1:h===v||p.includes(w),C=()=>{if(y.has(w))y.set(w,!0);else return;let A=!0;y.forEach(R=>{R||(A=!1)}),A&&(_==null||_(),S(g.current),o&&(u==null||u()),n&&n())};return a.jsx(Iu,{isPresent:T,initial:!f.current||t?void 0:!1,custom:e,presenceAffectsLayout:s,mode:i,root:c,onExitComplete:T?void 0:C,anchorX:l,children:M},w)})})};/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Xa=De("activity",Pu);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],ku=De("archive",Fu);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Lu=De("award",Bu);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Vo=De("bell",Uu);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Cs=De("bot",Ou);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],_l=De("box",ju);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],wl=De("brain",zu);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Gi=De("calendar",Hu);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],nd=De("camera",Vu);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Ei=De("chart-column",Gu);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],sd=De("chevron-down",Wu);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],qu=De("chevron-left",Xu);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],id=De("chevron-right",Qu);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ku=De("chevron-up",Yu);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Zu=De("circle-alert",$u);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],eh=De("circle-check",Ju);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Sn=De("cpu",th);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Go=De("database",nh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],ih=De("dollar-sign",sh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],ah=De("ellipsis",rh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],lh=De("file-text",oh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],dh=De("funnel",ch);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],hh=De("grid-3x3",uh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],ph=De("house",fh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],gh=De("image",mh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Cl=De("info",xh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],vh=De("list",yh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Pr=De("loader-circle",bh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],Ah=De("log-out",Sh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],wh=De("mail",_h);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Xr=De("map-pin",Ch);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],Eh=De("maximize-2",Mh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Rh=De("maximize",Th);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],Ih=De("menu",Nh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],Ph=De("message-circle",Dh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],kh=De("mic-off",Fh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],rd=De("mic",Bh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],Uh=De("minimize-2",Lh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["path",{d:"M5 12h14",key:"1ays0h"}]],ad=De("minus",Oh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],od=De("moon",jh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],Hh=De("move",zh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]],Gh=De("paperclip",Vh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Xh=De("phone",Wh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],qr=De("plus",qh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],qa=De("refresh-cw",Qh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Qr=De("rotate-ccw",Yh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],ld=De("save",Kh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Fr=De("search",$h);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],cd=De("send",Zh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Ts=De("shield",Jh);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],tf=De("sparkles",ef);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Ml=De("square-pen",nf);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],dd=De("sun",sf);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],ud=De("trash-2",rf);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]],hd=De("trending-down",af);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Wi=De("trending-up",of);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],fn=De("triangle-alert",lf);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],df=De("truck",cf);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],hf=De("user-plus",uf);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Xi=De("user",ff);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],fd=De("volume-2",pf);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],pd=De("wrench",mf);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Rs=De("x",gf);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],qi=De("zap",xf);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Wo=De("zoom-in",yf);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],md=De("zoom-out",vf),bf=[{id:"defect-1",type:"door",severity:"low",title:"Door Scratch Repair",description:"Scratch to door to be repaired",location:{x:20,y:45,z:0},image:"/assets/defect_media/images/IMG_2730_masked.jpg",audioDescription:"/assets/defect_media/audio/IMG_2730_Scratch to door to be repaired.mp3",status:"open",createdAt:"2024-01-15T10:30:00Z",updatedAt:"2024-01-15T10:30:00Z",detectedBy:"manual",procoreSyncStatus:"synced",procoreEntryId:"PC-001-2024",dueDate:"2024-02-15T00:00:00Z",ballInCourt:"Mateo Lopez",procoreLocation:"Site A > Main Entrance > Corner Steps",trade:"Concrete",scheduleImpact:"No",costImpact:"TBD",assignees:["Mateo Lopez"],costCode:"02-750-02-750"},{id:"defect-2",type:"wall",severity:"medium",title:"Plasterboard Patch",description:"Plasterboard patch around grill",location:{x:18,y:60,z:0},image:"/assets/defect_media/images/IMG_2731_masked.jpg",audioDescription:"/assets/defect_media/audio/IMG_2731_Plasterboard patch around grill.mp3",status:"open",createdAt:"2024-01-16T09:00:00Z",updatedAt:"2024-01-16T09:00:00Z",detectedBy:"manual",procoreSyncStatus:"not-synced",ballInCourt:"Becca Lawson"},{id:"defect-3",type:"sprinkler",severity:"medium",title:"Sprinkler Head Adjustment",description:"Sprinkler head to be adjusted to cover the hole in ceiling",location:{x:37,y:28,z:0},image:"/assets/defect_media/images/IMG_2738_masked.jpg",audioDescription:"/assets/defect_media/audio/IMG_2738_Sprinkler head to be adjusted to cover the hole in ceiling.mp3",status:"open",createdAt:"2024-01-15T11:15:00Z",updatedAt:"2024-01-15T11:15:00Z",detectedBy:"ai",procoreSyncStatus:"syncing",ballInCourt:"Becca Lawson"},{id:"defect-4",type:"door",severity:"low",title:"Plasterboard Cleaning",description:"Plasterboard setting to be cleaned from shadow line on door",location:{x:40,y:55,z:0},image:"/assets/defect_media/images/IMG_2739_masked.jpg",audioDescription:"/assets/defect_media/audio/IMG_2739_plasterboard setting to be cleaned from shadow line on door.mp3",status:"in-progress",createdAt:"2024-01-15T12:00:00Z",updatedAt:"2024-01-15T12:00:00Z",detectedBy:"manual",procoreSyncStatus:"not-synced",ballInCourt:"Dylan Noble"},{id:"defect-5",type:"electrical",severity:"low",title:"Trim Lighting Support Cable",description:"Lighting support cable to be trimmed",location:{x:69,y:32,z:0},image:"/assets/defect_media/images/IMG_2743_masked.jpg",audioDescription:"/assets/defect_media/audio/IMG_2743_Lighting support cable to be trimmed.mp3",status:"open",createdAt:"2024-01-17T14:00:00Z",updatedAt:"2024-01-17T14:00:00Z",detectedBy:"ai",procoreSyncStatus:"synced",procoreEntryId:"PC-005-2024",ballInCourt:"Mateo Lopez"},{id:"defect-6",type:"wall",severity:"low",title:"Joinery Infill Required",description:"Joinery infill required in Shadowline",location:{x:40,y:45,z:0},image:"/assets/defect_media/images/IMG_2744_masked.jpg",audioDescription:"/assets/defect_media/audio/IMG_2744_Joinery infill required in Shadowline.mp3",status:"resolved",createdAt:"2024-01-18T10:00:00Z",updatedAt:"2024-01-19T10:00:00Z",detectedBy:"manual",procoreSyncStatus:"not-synced",ballInCourt:"Becca Lawson"},{id:"defect-7",type:"ceiling",severity:"low",title:"Adjust Toilet Exhaust Grill",description:"Toilet exhaust grill to be adjusted flat to the ceiling",location:{x:52,y:30,z:0},image:"/assets/defect_media/images/IMG_2747_masked.jpg",audioDescription:"/assets/defect_media/audio/IMG_2747_Toilet exhaust grill to be adjusted flat to the ceiling.mp3",status:"open",createdAt:"2024-01-20T11:00:00Z",updatedAt:"2024-01-20T11:00:00Z",detectedBy:"ai",procoreSyncStatus:"not-synced",ballInCourt:"Becca Lawson"},{id:"defect-8",type:"ceiling",severity:"medium",title:"Patch Ceiling",description:"Patch the ceiling required around access panel",location:{x:25,y:30,z:0},image:"/assets/defect_media/images/IMG_2748_masked.jpg",audioDescription:"/assets/defect_media/audio/IMG_2748_Patch the ceiling required around access panel.mp3",status:"in-progress",createdAt:"2024-01-21T15:00:00Z",updatedAt:"2024-01-21T15:00:00Z",detectedBy:"manual",procoreSyncStatus:"not-synced",ballInCourt:"Dylan Noble"},{id:"defect-9",type:"door",severity:"low",title:"Paint Door Frame",description:"Painting to door frame required",location:{x:30,y:55,z:0},image:"/assets/defect_media/images/IMG_2749_masked.jpg",audioDescription:"/assets/defect_media/audio/IMG_2749_Painting to door frame required.mp3",status:"open",createdAt:"2024-01-22T09:30:00Z",updatedAt:"2024-01-22T09:30:00Z",detectedBy:"ai",procoreSyncStatus:"not-synced",ballInCourt:"Mateo Lopez"},{id:"defect-10",type:"ceiling",severity:"medium",title:"Patch Plasterboard Ceiling",description:"Patch hole to plasterboard ceiling required",location:{x:68,y:65,z:0},image:"/assets/defect_media/images/IMG_2750_masked.jpg",audioDescription:"/assets/defect_media/audio/IMG_2750_Patch hole to plasterboard ceiling required.mp3",status:"open",createdAt:"2024-01-23T13:00:00Z",updatedAt:"2024-01-23T13:00:00Z",detectedBy:"manual",procoreSyncStatus:"not-synced",ballInCourt:"Becca Lawson"},{id:"defect-11",type:"wall",severity:"medium",title:"Install Skirting",description:"Skirting to be installed",location:{x:10,y:24,z:0},image:"/assets/defect_media/images/IMG_2752_masked.jpg",audioDescription:"/assets/defect_media/audio/IMG_2752_Skirting to be installed.mp3",status:"resolved",createdAt:"2024-01-24T16:00:00Z",updatedAt:"2024-01-25T16:00:00Z",detectedBy:"manual",procoreSyncStatus:"not-synced",ballInCourt:"Becca Lawson"},{id:"defect-12",type:"wall",severity:"medium",title:"Install Infill Paver",description:"Infill paver to be installed",location:{x:80,y:48,z:0},image:"/assets/defect_media/images/IMG_2757_masked.jpg",audioDescription:"/assets/defect_media/audio/IMG_2757_Infill paver to be installed.mp3",status:"open",createdAt:"2024-01-26T11:00:00Z",updatedAt:"2024-01-26T11:00:00Z",detectedBy:"ai",procoreSyncStatus:"not-synced",ballInCourt:"Dylan Noble"},{id:"defect-13",type:"wall",severity:"low",title:"Facade Scratch",description:"Scratch to the facade",location:{x:90,y:65,z:0},image:"/assets/defect_media/images/IMG_2758_masked.jpg",audioDescription:"/assets/defect_media/audio/IMG_2758_Scratch to the facade.mp3",status:"in-progress",createdAt:"2024-01-27T12:00:00Z",updatedAt:"2024-01-27T12:00:00Z",detectedBy:"manual",procoreSyncStatus:"not-synced",ballInCourt:"Mateo Lopez"},{id:"defect-14",type:"electrical",severity:"medium",title:"Install Light Flush to Ceiling",description:"Light to be installed flush to ceiling",location:{x:50,y:65,z:0},image:"/assets/defect_media/images/IMG_2764_masked.jpg",audioDescription:"/assets/defect_media/audio/IMG_2764_Light to be installed flush to ceiling.mp3",status:"open",createdAt:"2024-01-28T14:00:00Z",updatedAt:"2024-01-28T14:00:00Z",detectedBy:"ai",procoreSyncStatus:"not-synced",ballInCourt:"Becca Lawson"},{id:"defect-15",type:"electrical",severity:"high",title:"Install Skirting Duct Cover",description:"Skirting duct cover to be installed",location:{x:10,y:70,z:0},image:"/assets/defect_media/images/IMG_2766_masked.jpg",audioDescription:"/assets/defect_media/audio/IMG_2766_Skirting duct cover to be installed.mp3",status:"open",createdAt:"2024-01-29T09:00:00Z",updatedAt:"2024-01-29T09:00:00Z",detectedBy:"manual",procoreSyncStatus:"not-synced",ballInCourt:"Becca Lawson"},{id:"defect-16",type:"ceiling",severity:"high",title:"Install Cap to Ductwork",description:"cap to ductwork to be installed",location:{x:65,y:45,z:0},image:"/assets/defect_media/images/IMG_2771_masked.jpg",audioDescription:"/assets/defect_media/audio/IMG_2771_cap to ductwork to be installed.mp3",status:"resolved",createdAt:"2024-01-30T10:30:00Z",updatedAt:"2024-01-31T10:30:00Z",detectedBy:"ai",procoreSyncStatus:"not-synced",ballInCourt:"Dylan Noble"},{id:"defect-17",type:"ceiling",severity:"medium",title:"Patch Ceiling Required",description:"Patch to ceiling required",location:{x:42,y:72,z:0},image:"/assets/defect_media/images/IMG_2772_masked.jpg",audioDescription:"/assets/defect_media/audio/IMG_2772_Patch to ceiling required.mp3",status:"open",createdAt:"2024-02-01T11:45:00Z",updatedAt:"2024-02-01T11:45:00Z",detectedBy:"manual",procoreSyncStatus:"not-synced",ballInCourt:"Mateo Lopez"}],Sf=[{id:"1",icon:fn,title:"New Critical Defect Reported",description:"Defect #1023: Structural crack in foundation wall has been reported in Zone A.",timestamp:"15m ago",read:!1,category:"Defect"},{id:"2",icon:fn,title:"Defect Status Updated",description:'Defect #985: Electrical conduit misalignment has been marked as "In Progress".',timestamp:"1h ago",read:!1,category:"Defect"},{id:"3",icon:fn,title:"Defect Assigned to You",description:"You have been assigned to resolve Defect #1011: Minor paint chipping.",timestamp:"3h ago",read:!0,category:"Defect"}],El=({selectedProject:r,variant:e="desktop",onNavigate:t})=>{const{theme:n,toggleTheme:s}=Zc(),[i,o]=J.useState(new Set),[l,c]=J.useState("dashboard");J.useEffect(()=>{const g=()=>window.location.hash.replace("#","")||"dashboard";c(g());const y=()=>{c(g())};return window.addEventListener("hashchange",y),()=>window.removeEventListener("hashchange",y)},[]);const d=g=>{o(y=>{const x=new Set(y);return x.has(g)?x.delete(g):x.add(g),x})},u=g=>({"downtown-office":"Downtown Office Complex","residential-tower":"Residential Tower A","shopping-center":"Shopping Center Renovation","bridge-construction":"Bridge Construction"})[g||""]||"No Project Selected",h=g=>{if(g==="logout"){localStorage.removeItem("user"),localStorage.removeItem("selectedProject"),window.location.href="/login";return}window.location.hash=g,t&&t()},p=[{title:"Overview",items:[{id:"dashboard",label:"Dashboard",icon:ph},{id:"projects",label:"Projects",icon:ws},{id:"analytics",label:"Analytics",icon:Ei}]},{title:"Operations",items:[{id:"defect-management",label:"Defect Management",icon:fn},{id:"site-walkthrough",label:"On-Site Tools",icon:Su},{id:"schedule",label:"Schedule",icon:Gi}]},{title:"System",items:[{id:"ai-assistant",label:"AI Assistant",icon:Sn},{id:"notifications",label:"Notifications",icon:Vo},{id:"settings",label:"Settings",icon:Di}]}],f=e==="desktop"?"hidden md:flex w-56 bg-white dark:bg-slate-900/50 backdrop-blur-xl border-r border-gray-200 dark:border-slate-700/50 h-screen flex-col overflow-hidden":"flex w-56 bg-white dark:bg-slate-900/50 backdrop-blur-xl border-r border-gray-200 dark:border-slate-700/50 h-screen flex-col overflow-hidden";return a.jsxs(V.div,{initial:{x:-224},animate:{x:0},transition:{duration:.5,ease:"easeOut"},className:f,children:[a.jsx(V.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"p-4 border-b border-gray-200 dark:border-slate-700/50",children:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs("div",{className:"relative",children:[a.jsx(V.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.3,delay:.4},className:"w-7 h-7 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/25",children:a.jsx("img",{src:"/embodx-icon.svg",alt:"EmbodX Logo",className:"w-7 h-7"})}),a.jsx(V.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.3,delay:.6},className:"absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"})]}),a.jsxs("div",{children:[a.jsx(V.h1,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.5},className:"text-base font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",children:"EmbodX"}),a.jsxs(V.p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.6},className:"text-xs text-gray-500 dark:text-slate-400",children:["Construction AI",a.jsx("br",{}),a.jsxs("a",{href:"https://spatiosense.ai",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/60 px-2 py-0.5 text-[9px] italic text-slate-600 shadow-sm hover:border-slate-300 hover:bg-white transition",children:[a.jsx("span",{className:"opacity-60",children:"by"}),a.jsx("span",{className:"font-[9px] italic",children:"SpatioSense"})]})]})]})]})}),a.jsx(Vt,{children:r&&a.jsx(V.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"p-3 border-b border-gray-200 dark:border-slate-700/50",children:a.jsxs("div",{className:"bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 rounded-lg p-3",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[a.jsx(ws,{className:"w-3 h-3 text-blue-500 dark:text-blue-400"}),a.jsx("span",{className:"text-xs font-medium text-blue-700 dark:text-blue-300",children:"Current Project"})]}),a.jsx("p",{className:"text-xs text-blue-600 dark:text-blue-400 font-medium leading-tight",children:u(r)})]})})}),a.jsx("nav",{className:"flex-1 min-h-0 p-3 space-y-4 overflow-y-auto custom-scrollbar smooth-scroll",children:p.map((g,y)=>{const x=i.has(g.title);return a.jsxs(V.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:.7+y*.1},className:"space-y-2",children:[a.jsxs(V.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>d(g.title),className:"w-full px-2 py-1 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors duration-200 group",children:[a.jsx("h3",{className:"text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider",children:g.title}),a.jsx(V.div,{animate:{rotate:x?0:90},transition:{duration:.2},className:"text-gray-400 dark:text-slate-500 group-hover:text-gray-600 dark:group-hover:text-slate-300 transition-colors",children:a.jsx(id,{className:"w-3 h-3"})})]}),a.jsx(Vt,{children:!x&&a.jsx(V.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"space-y-1",children:g.items.map((m,v)=>{const S=m.icon,b=l===m.id;return a.jsxs(V.button,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{duration:.2,delay:v*.05},whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>h(m.id),className:`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-left transition-all duration-300 group relative text-sm ${b?"bg-blue-50 dark:bg-gradient-to-r dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 shadow-sm dark:shadow-lg dark:shadow-blue-500/10":"text-gray-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800/50 hover:text-gray-900 dark:hover:text-white border border-transparent"}`,children:[a.jsx(V.div,{whileHover:{scale:1.1},className:`p-1 rounded-md ${b?"bg-blue-100 dark:bg-gradient-to-br dark:from-blue-500/20 dark:to-purple-500/20":"group-hover:bg-gray-100 dark:group-hover:bg-slate-700/50"}`,children:a.jsx(S,{className:"w-3.5 h-3.5"})}),a.jsx("span",{className:"font-medium",children:m.label}),b&&a.jsx(V.div,{initial:{scale:0},animate:{scale:1},className:"ml-auto w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"})]},m.id)})})})]},y)})}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:1},className:"p-3 border-t border-gray-200 dark:border-slate-700/50 space-y-1",children:[a.jsxs("div",{className:"md:hidden space-y-1",children:[a.jsxs(V.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>h("settings"),className:"w-full flex items-center gap-2 px-2 py-2 rounded-lg text-gray-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800/50 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group border border-transparent text-sm",children:[a.jsx(V.div,{whileHover:{scale:1.1},className:"p-1 rounded-md group-hover:bg-gray-100 dark:group-hover:bg-slate-700/50",children:a.jsx(Xi,{className:"w-3.5 h-3.5"})}),a.jsx("span",{className:"font-medium",children:"Profile"})]}),a.jsxs(V.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>h("settings"),className:"w-full flex items-center gap-2 px-2 py-2 rounded-lg text-gray-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800/50 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group border border-transparent text-sm",children:[a.jsx(V.div,{whileHover:{scale:1.1},className:"p-1 rounded-md group-hover:bg-gray-100 dark:group-hover:bg-slate-700/50",children:a.jsx(Di,{className:"w-3.5 h-3.5"})}),a.jsx("span",{className:"font-medium",children:"Settings"})]})]}),a.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,delay:1.1},className:"px-2 py-1.5 rounded-lg bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50",children:a.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-gray-500 dark:text-slate-400",children:[a.jsx(V.div,{animate:{scale:[1,1.2,1]},transition:{duration:2,repeat:1/0},className:"w-1.5 h-1.5 bg-emerald-400 rounded-full"}),a.jsx("span",{children:"System Online"}),a.jsx(qi,{className:"w-2.5 h-2.5 ml-auto"})]})}),a.jsxs(V.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:s,className:"w-full flex items-center gap-2 px-2 py-2 rounded-lg text-gray-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800/50 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group border border-transparent text-sm",children:[a.jsx(V.div,{whileHover:{scale:1.1},className:"p-1 rounded-md group-hover:bg-gray-100 dark:group-hover:bg-slate-700/50",children:n==="light"?a.jsx(od,{className:"w-3.5 h-3.5"}):a.jsx(dd,{className:"w-3.5 h-3.5"})}),a.jsx("span",{className:"font-medium",children:n==="light"?"Dark Mode":"Light Mode"})]}),a.jsxs(V.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>h("logout"),className:"w-full flex items-center gap-2 px-2 py-2 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-700 dark:hover:text-red-300 transition-all duration-300 group border border-transparent text-sm",children:[a.jsx(V.div,{whileHover:{scale:1.1},className:"p-1 rounded-md group-hover:bg-red-100 dark:group-hover:bg-red-500/20",children:a.jsx(Ah,{className:"w-3.5 h-3.5"})}),a.jsx("span",{className:"font-medium",children:"Logout"})]})]})]})},Af=({userName:r="Mike Thompson",userRole:e="Project Manager",notifications:t=3,onProfileClick:n,onNotificationsClick:s,onSettingsClick:i,onMenuClick:o})=>{const{theme:l,toggleTheme:c}=Zc();return a.jsxs(V.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"h-16 bg-white dark:bg-slate-800/50 backdrop-blur-xl border-b border-gray-200 dark:border-slate-700/50 flex items-center justify-between px-6 shadow-sm",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx(V.button,{whileTap:{scale:.95},onClick:o,className:"md:hidden p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200",children:a.jsx(Ih,{className:"w-5 h-5 text-gray-700 dark:text-slate-300"})}),a.jsxs("div",{className:"relative",children:[a.jsx(Fr,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-slate-500"}),a.jsx("input",{type:"text",placeholder:"Search projects, tasks, or people...",className:"pl-10 pr-4 py-2 w-32 sm:w-40 md:w-56 lg:w-80 bg-gray-100 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"})]})]}),a.jsxs("div",{className:"flex items-center space-x-4",children:[a.jsx(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:c,className:"p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200",children:l==="light"?a.jsx(od,{className:"w-4 h-4 text-gray-600 dark:text-slate-300"}):a.jsx(dd,{className:"w-4 h-4 text-gray-600 dark:text-slate-300"})}),a.jsxs(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:s,className:"relative p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200",children:[a.jsx(Vo,{className:"w-4 h-4 text-gray-600 dark:text-slate-300"}),t>0&&a.jsx(V.div,{initial:{scale:0},animate:{scale:1},className:"absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium",children:t})]}),a.jsx(V.button,{className:"hidden md:inline-flex p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:i,children:a.jsx(Di,{className:"w-4 h-4 text-gray-600 dark:text-slate-300"})}),a.jsxs(V.div,{className:"hidden md:flex items-center space-x-3 p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200 cursor-pointer",whileHover:{scale:1.02},onClick:n,children:[a.jsxs("div",{className:"relative",children:[a.jsx("img",{src:"/assets/profile-pic.jpg",alt:"Profile",className:"w-8 h-8 rounded-full object-cover border-2 border-blue-500 dark:border-blue-400"}),a.jsx("div",{className:"absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white dark:border-slate-800"})]}),a.jsxs("div",{className:"hidden md:block",children:[a.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:r}),a.jsx("p",{className:"text-xs text-gray-500 dark:text-slate-400",children:e})]}),a.jsx(sd,{className:"w-4 h-4 text-gray-500 dark:text-slate-400"})]})]})]})},gd=({title:r,value:e,change:t,trend:n,icon:s,color:i="blue",delay:o=0})=>{const l={blue:"from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400",green:"from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-400",orange:"from-orange-500/20 to-orange-600/20 border-orange-500/30 text-orange-400",red:"from-red-500/20 to-red-600/20 border-red-500/30 text-red-400",purple:"from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400",cyan:"from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-400",emerald:"from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-400"},c=()=>{switch(n){case"up":return a.jsx(Wi,{className:"w-3 h-3"});case"down":return a.jsx(hd,{className:"w-3 h-3"});default:return a.jsx(ad,{className:"w-3 h-3"})}},d=()=>{switch(n){case"up":return"text-emerald-400";case"down":return"text-red-400";default:return"text-gray-400"}};return a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:o},className:"bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("div",{className:`w-8 h-8 bg-gradient-to-br ${l[i]} rounded-lg flex items-center justify-center`,children:s}),t&&a.jsxs("div",{className:`flex items-center gap-1 text-xs ${d()}`,children:[c(),a.jsx("span",{children:t})]})]}),a.jsxs("div",{className:"space-y-1",children:[a.jsx("p",{className:"text-sm text-gray-600 dark:text-slate-400",children:r}),a.jsx("p",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:e})]})]})},_f=({id:r,type:e,title:t,message:n,timestamp:s,severity:i,delay:o=0})=>{const l=()=>{switch(e){case"safety":return a.jsx(fn,{className:"w-4 h-4 text-red-400"});case"weather":return a.jsx(Cl,{className:"w-4 h-4 text-blue-400"});case"equipment":return a.jsx(fn,{className:"w-4 h-4 text-orange-400"});case"schedule":return a.jsx(Nn,{className:"w-4 h-4 text-yellow-400"});case"defect":return a.jsx(fn,{className:"w-4 h-4 text-red-400"});default:return a.jsx(Cl,{className:"w-4 h-4 text-gray-400"})}},c=()=>{switch(i){case"critical":return"border-red-500/50 bg-red-500/10";case"high":return"border-orange-500/50 bg-orange-500/10";case"medium":return"border-yellow-500/50 bg-yellow-500/10";case"low":return"border-blue-500/50 bg-blue-500/10";default:return"border-gray-500/50 bg-gray-500/10"}};return a.jsx(V.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:o},className:`bg-white dark:bg-slate-800/50 backdrop-blur-xl border ${c()} rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300`,children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx("div",{className:"flex-shrink-0 mt-0.5",children:l()}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("h4",{className:"text-sm font-semibold text-gray-900 dark:text-white mb-1",children:t}),a.jsx("p",{className:"text-xs text-gray-600 dark:text-slate-400 mb-2",children:n}),a.jsxs("div",{className:"flex items-center gap-1 text-xs text-gray-500 dark:text-slate-400",children:[a.jsx(Nn,{className:"w-3 h-3"}),a.jsx("span",{children:s})]})]})]})})},wf=({id:r,title:e,description:t,location:n,status:s,progress:i,teamSize:o,delay:l=0})=>{const c=()=>{switch(s){case"on track":return"text-emerald-400 bg-emerald-500/10 border-emerald-500/30";case"delayed":return"text-yellow-400 bg-yellow-500/10 border-yellow-500/30";case"at risk":return"text-red-400 bg-red-500/10 border-red-500/30";case"completed":return"text-blue-400 bg-blue-500/10 border-blue-500/30";default:return"text-gray-400 bg-gray-500/10 border-gray-500/30"}};return a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:l},whileHover:{y:-2},className:"bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300",children:[a.jsxs("div",{className:"flex items-start justify-between mb-3",children:[a.jsxs("div",{className:"flex-1",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-1",children:e}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-slate-400 mb-2",children:t}),a.jsxs("div",{className:"flex items-center gap-1 text-xs text-gray-500 dark:text-slate-400 mb-2",children:[a.jsx(Xr,{className:"w-3 h-3"}),a.jsx("span",{children:n})]})]}),a.jsx("div",{className:`px-2 py-1 rounded-full text-xs font-medium border ${c()}`,children:s})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-600 dark:text-slate-400 mb-1",children:[a.jsx("span",{children:"Progress"}),a.jsxs("span",{children:[i,"%"]})]}),a.jsx("div",{className:"w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2",children:a.jsx(V.div,{initial:{width:0},animate:{width:`${i}%`},transition:{duration:.8,delay:l+.2},className:"bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"})})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-1 text-xs text-gray-500 dark:text-slate-400",children:[a.jsx(Xi,{className:"w-3 h-3"}),a.jsxs("span",{children:[o," members"]})]}),a.jsxs(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-xs font-medium",children:[a.jsx("span",{children:"View Details"}),a.jsx(ed,{className:"w-3 h-3"})]})]})]})]})},Tl=()=>{const r=[{title:"Active Projects",value:12,change:"+2 this week",trend:"up",icon:a.jsx(ws,{className:"w-6 h-6"}),color:"blue"},{title:"Total Budget",value:"$2.4M",change:"+5.2%",trend:"up",icon:a.jsx(ih,{className:"w-6 h-6"}),color:"green"},{title:"Safety Score",value:"98.5%",change:"+0.3%",trend:"up",icon:a.jsx(Ts,{className:"w-6 h-6"}),color:"green"},{title:"Equipment Status",value:"87%",change:"-2.1%",trend:"down",icon:a.jsx(pd,{className:"w-6 h-6"}),color:"orange"},{title:"Workers On Site",value:156,change:"+12 today",trend:"up",icon:a.jsx(Pi,{className:"w-6 h-6"}),color:"purple"},{title:"Deliveries Today",value:8,change:"2 pending",trend:"neutral",icon:a.jsx(df,{className:"w-6 h-6"}),color:"cyan"},{title:"Defects Identified",value:47,change:"12 auto-detected",trend:"up",icon:a.jsx(Fr,{className:"w-6 h-6"}),color:"red"},{title:"Time Saved (AI)",value:"24.5h",change:"+8.2h this week",trend:"up",icon:a.jsx(Nn,{className:"w-6 h-6"}),color:"emerald"},{title:"Auto-ID Accuracy",value:"94.2%",change:"+1.8%",trend:"up",icon:a.jsx(wl,{className:"w-6 h-6"}),color:"purple"}],e=[{id:"1",title:"Downtown Office Complex",description:"Modern office building construction",location:"123 Main St, Downtown",status:"on track",progress:78,teamSize:24},{id:"2",title:"Residential Tower A",description:"High-rise residential development",location:"456 Oak Ave, Midtown",status:"delayed",progress:45,teamSize:18},{id:"3",title:"Shopping Center Renovation",description:"Retail space modernization",location:"789 Pine Rd, Suburbs",status:"on track",progress:92,teamSize:12},{id:"4",title:"Bridge Construction",description:"Infrastructure bridge project",location:"321 River St, Waterfront",status:"at risk",progress:23,teamSize:32}],t=[{id:"1",type:"safety",title:"Safety Inspection Required",message:"Safety inspection required for Crane #3",timestamp:"2 hours ago",severity:"high"},{id:"2",type:"defect",title:"AI Detected Structural Crack",message:"Auto-identified crack in foundation wall - Zone A",timestamp:"1 hour ago",severity:"high"},{id:"3",type:"defect",title:"Electrical Conduit Misalignment",message:"Manual inspection found conduit issue - Zone B",timestamp:"3 hours ago",severity:"medium"},{id:"4",type:"weather",title:"Weather Alert",message:"Heavy rain forecast for tomorrow",timestamp:"4 hours ago",severity:"medium"},{id:"5",type:"equipment",title:"Equipment Maintenance",message:"Excavator #2 needs maintenance",timestamp:"6 hours ago",severity:"medium"},{id:"6",type:"defect",title:"Paint Chipping Detected",message:"AI identified minor paint issues - Zone C",timestamp:"7 hours ago",severity:"low"}];return a.jsx("div",{className:"p-3 sm:p-4 bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen",children:a.jsxs("div",{className:"max-w-6xl mx-auto space-y-3 sm:space-y-4",children:[a.jsxs(V.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6",children:[a.jsxs("div",{className:"flex-1",children:[a.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2",children:"Task Command Center"}),a.jsx("p",{className:"text-gray-600 dark:text-slate-400 text-sm sm:text-base",children:"AI-enhanced project management & task coordination"})]}),a.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto",children:[a.jsxs(V.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.3,delay:.2},className:"flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-2 rounded-lg backdrop-blur-sm",children:[a.jsx(Sn,{className:"w-4 h-4"}),a.jsx("span",{className:"text-sm font-medium",children:"AI Enhanced"})]}),a.jsxs(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-200 shadow-lg flex items-center justify-center gap-2",children:[a.jsx(Xa,{className:"w-4 h-4"}),a.jsx("span",{className:"font-medium",children:"Add Task"})]})]})]}),a.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.3},className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3",children:r.map((n,s)=>a.jsx(gd,{...n,delay:s*.1},s))}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},className:"relative group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-lg blur-sm opacity-20 group-hover:opacity-30 transition-opacity"}),a.jsxs("div",{className:"relative bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50 rounded-lg p-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/25",children:a.jsx(Fr,{className:"w-5 h-5 text-white"})}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-lg font-bold text-gray-900 dark:text-white",children:"Defect Identification Summary"}),a.jsx("p",{className:"text-gray-600 dark:text-slate-400 text-sm",children:"AI-powered defect detection and time savings"})]})]}),a.jsxs("div",{className:"flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-lg backdrop-blur-sm",children:[a.jsx(wl,{className:"w-3 h-3"}),a.jsx("span",{className:"text-xs font-medium",children:"AI Enhanced"})]})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[a.jsxs("div",{className:"text-center p-3 bg-red-50 dark:bg-red-500/10 rounded-lg border border-red-200 dark:border-red-500/20",children:[a.jsx("div",{className:"text-2xl font-bold text-red-600 dark:text-red-400 mb-1",children:"47"}),a.jsx("div",{className:"text-sm text-red-600 dark:text-red-400 font-medium",children:"Total Defects"}),a.jsx("div",{className:"text-xs text-gray-500 dark:text-slate-400 mt-1",children:"12 auto-detected"})]}),a.jsxs("div",{className:"text-center p-3 bg-blue-50 dark:bg-blue-500/10 rounded-lg border border-blue-200 dark:border-blue-500/20",children:[a.jsx("div",{className:"text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1",children:"35"}),a.jsx("div",{className:"text-sm text-blue-600 dark:text-blue-400 font-medium",children:"Manual Found"}),a.jsx("div",{className:"text-xs text-gray-500 dark:text-slate-400 mt-1",children:"Traditional inspection"})]}),a.jsxs("div",{className:"text-center p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg border border-emerald-200 dark:border-emerald-500/20",children:[a.jsx("div",{className:"text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1",children:"24.5h"}),a.jsx("div",{className:"text-sm text-emerald-600 dark:text-emerald-400 font-medium",children:"Time Saved"}),a.jsx("div",{className:"text-xs text-gray-500 dark:text-slate-400 mt-1",children:"This week"})]}),a.jsxs("div",{className:"text-center p-3 bg-purple-50 dark:bg-purple-500/10 rounded-lg border border-purple-200 dark:border-purple-500/20",children:[a.jsx("div",{className:"text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1",children:"94.2%"}),a.jsx("div",{className:"text-sm text-purple-600 dark:text-purple-400 font-medium",children:"AI Accuracy"}),a.jsx("div",{className:"text-xs text-gray-500 dark:text-slate-400 mt-1",children:"Detection rate"})]})]})]})]}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},className:"bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 p-6",children:[a.jsxs("div",{className:"flex items-start justify-between mb-4",children:[a.jsxs("div",{className:"flex-1",children:[a.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white mb-2",children:"Community Center Project"}),a.jsx("p",{className:"text-gray-600 dark:text-slate-400 text-sm mb-4",children:"Advanced construction monitoring with AI-powered analytics"}),a.jsx("div",{className:"flex items-center gap-4",children:a.jsxs("div",{className:"flex items-center gap-2 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-lg",children:[a.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),a.jsx("span",{className:"text-sm font-medium",children:"33% Complete"})]})})]}),a.jsxs("div",{className:"flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 px-3 py-1.5 rounded-lg",children:[a.jsx(Sn,{className:"w-4 h-4"}),a.jsx("span",{className:"text-sm font-medium",children:"AI Enhanced"})]})]}),a.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-200 dark:border-slate-700",children:[a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"6"}),a.jsx("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:"Total Tasks"})]}),a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"2"}),a.jsx("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:"To-do"})]}),a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-2xl font-bold text-orange-500",children:"2"}),a.jsx("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:"In Progress"})]}),a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"2"}),a.jsx("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:"Finished"})]})]})]}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.5},className:"bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 p-6",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-4",children:"Project Phases"}),a.jsx("div",{className:"grid grid-cols-7 gap-2",children:["Initiation","Planning","Pre-construction","Execution","Finishing","Inspection","Handover"].map((n,s)=>a.jsxs(V.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.3,delay:.5+s*.1},className:"text-center",children:[a.jsx("div",{className:`w-2.5 h-2.5 rounded-full mx-auto mb-1 ${s<4?"bg-gradient-to-r from-blue-500 to-purple-500":"bg-gray-300 dark:bg-slate-600"}`}),a.jsx("span",{className:"text-xs text-gray-500 dark:text-slate-400 font-medium",children:n})]},n))})]}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.6},className:"grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4",children:[a.jsxs("div",{className:"lg:col-span-2 space-y-3",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("h2",{className:"text-lg font-bold text-gray-900 dark:text-white",children:"Active Projects"}),a.jsxs(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-medium transition-colors flex items-center gap-1 text-sm",children:[a.jsx(Es,{className:"w-3 h-3"}),"View All Projects"]})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:e.map((n,s)=>a.jsx(wf,{...n,delay:s*.1},n.id))})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("h2",{className:"text-lg font-bold text-gray-900 dark:text-white",children:"System Alerts"}),a.jsxs(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-medium transition-colors flex items-center gap-1 text-sm",children:[a.jsx(Go,{className:"w-3 h-3"}),"View All"]})]}),a.jsx("div",{className:"space-y-2",children:t.map((n,s)=>a.jsx(_f,{...n,delay:s*.1},n.id))}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.8},className:"relative group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg blur-sm opacity-20 group-hover:opacity-30 transition-opacity"}),a.jsxs("div",{className:"relative bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50 rounded-lg p-3",children:[a.jsx("h3",{className:"font-bold text-gray-900 dark:text-white mb-3 text-sm",children:"Quick Actions"}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(V.button,{whileHover:{scale:1.02},whileTap:{scale:.98},className:"w-full text-left p-2.5 rounded-lg border border-gray-200 dark:border-slate-700/50 hover:border-gray-300 dark:hover:border-slate-600/50 hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-all duration-300 group",children:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"p-1 rounded-md bg-gradient-to-br from-blue-500/20 to-blue-600/20",children:a.jsx(Ei,{className:"w-3 h-3 text-blue-500 dark:text-blue-400"})}),a.jsx("span",{className:"font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors text-sm",children:"Generate Report"})]})}),a.jsx(V.button,{whileHover:{scale:1.02},whileTap:{scale:.98},className:"w-full text-left p-2.5 rounded-lg border border-gray-200 dark:border-slate-700/50 hover:border-gray-300 dark:hover:border-slate-600/50 hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-all duration-300 group",children:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"p-1 rounded-md bg-gradient-to-br from-emerald-500/20 to-emerald-600/20",children:a.jsx(Gi,{className:"w-3 h-3 text-emerald-500 dark:text-emerald-400"})}),a.jsx("span",{className:"font-medium text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors text-sm",children:"Schedule Meeting"})]})}),a.jsx(V.button,{whileHover:{scale:1.02},whileTap:{scale:.98},className:"w-full text-left p-2.5 rounded-lg border border-gray-200 dark:border-slate-700/50 hover:border-gray-300 dark:hover:border-slate-600/50 hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-all duration-300 group",children:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"p-1 rounded-md bg-gradient-to-br from-orange-500/20 to-orange-600/20",children:a.jsx(fn,{className:"w-3 h-3 text-orange-500 dark:text-orange-400"})}),a.jsx("span",{className:"font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-300 transition-colors text-sm",children:"Create Alert"})]})})]})]})]})]})]})]})})},Cf=({id:r,title:e,description:t,priority:n,dueDate:s,assignee:i,status:o,delay:l=0})=>{const c=()=>{switch(n){case"high":return"border-red-500/50 bg-red-500/10";case"medium":return"border-yellow-500/50 bg-yellow-500/10";case"low":return"border-blue-500/50 bg-blue-500/10";default:return"border-gray-500/50 bg-gray-500/10"}},d=()=>{switch(o){case"finished":return a.jsx(Vi,{className:"w-4 h-4 text-emerald-400"});case"in-progress":return a.jsx(Nn,{className:"w-4 h-4 text-yellow-400"});default:return a.jsx(fn,{className:"w-4 h-4 text-gray-400"})}},u=()=>{switch(o){case"finished":return"text-emerald-400";case"in-progress":return"text-yellow-400";default:return"text-gray-400"}};return a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:l},whileHover:{y:-2},className:`bg-white dark:bg-slate-800/50 backdrop-blur-xl border ${c()} rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300`,children:[a.jsxs("div",{className:"flex items-start justify-between mb-3",children:[a.jsxs("div",{className:"flex-1",children:[a.jsx("h3",{className:"text-sm font-semibold text-gray-900 dark:text-white mb-1",children:e}),a.jsx("p",{className:"text-xs text-gray-600 dark:text-slate-400",children:t})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[d(),a.jsx("span",{className:`text-xs font-medium ${u()}`,children:o.replace("-"," ")})]})]}),a.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-500 dark:text-slate-400",children:[a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx(Xi,{className:"w-3 h-3"}),a.jsx("span",{children:i})]}),a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx(Nn,{className:"w-3 h-3"}),a.jsx("span",{children:s})]})]})]})},Mf=()=>{const[r,e]=J.useState([{id:"1",title:"Dismantling concrete formwork",description:"Remove concrete forms from foundation",priority:"high",dueDate:"24/02/2025",assignee:"Mike Thompson",status:"todo"},{id:"2",title:"Prepare for the concrete pouring on the first floor",description:"Site preparation for concrete work",priority:"medium",dueDate:"28/02/2025",assignee:"Sarah Johnson",status:"todo"},{id:"3",title:"Removing the concrete forms",description:"Clean up concrete forms after curing",priority:"high",dueDate:"24/02/2025",assignee:"John Davis",status:"in-progress"},{id:"4",title:"Arrange everything for the cement pouring at ground level",description:"Prepare equipment and materials",priority:"medium",dueDate:"28/02/2025",assignee:"Lisa Chen",status:"in-progress"},{id:"5",title:"Excavation and Trenching for Utility Installations",description:"Dig trenches for utilities and foundation support",priority:"high",dueDate:"24/02/2025",assignee:"Mike Thompson",status:"finished"},{id:"6",title:"Steel Reinforcement Placement",description:"Install steel reinforcement for concrete structures",priority:"medium",dueDate:"28/02/2025",assignee:"Sarah Johnson",status:"finished"}]),t=o=>r.filter(l=>l.status===o),s=(()=>{const o=r.length,l=t("todo").length,c=t("in-progress").length,d=t("finished").length;return{total:o,todo:l,inProgress:c,finished:d,completionRate:Math.round(d/o*100)}})(),i=[{id:"todo",title:"To-do",color:"from-gray-500/20 to-gray-600/20 border-gray-500/30",tasks:t("todo")},{id:"in-progress",title:"In Progress",color:"from-yellow-500/20 to-yellow-600/20 border-yellow-500/30",tasks:t("in-progress")},{id:"finished",title:"Finished",color:"from-emerald-500/20 to-emerald-600/20 border-emerald-500/30",tasks:t("finished")}];return a.jsx("div",{className:"p-6 bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen",children:a.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[a.jsxs(V.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent",children:"Task Command Center"}),a.jsx("p",{className:"text-gray-600 dark:text-slate-400 mt-1",children:"AI-enhanced project management & task coordination"})]}),a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsxs("div",{className:"flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 px-3 py-1.5 rounded-lg",children:[a.jsx(Sn,{className:"w-4 h-4"}),a.jsx("span",{className:"text-sm font-medium",children:"AI Enhanced"})]}),a.jsxs(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md shadow-blue-500/25",children:[a.jsx(qr,{className:"w-4 h-4 inline mr-2"}),"Add Task"]})]})]}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"relative group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity"}),a.jsxs("div",{className:"relative bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50 rounded-xl p-6",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white mb-1",children:"Community Center Project"}),a.jsx("p",{className:"text-gray-600 dark:text-slate-400",children:"Advanced construction monitoring with AI-powered analytics"})]}),a.jsxs("div",{className:"flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 px-3 py-1.5 rounded-lg",children:[a.jsx(Wi,{className:"w-4 h-4"}),a.jsxs("span",{className:"text-sm font-medium",children:[s.completionRate,"% Complete"]})]})]}),a.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-1",children:s.total}),a.jsx("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:"Total Tasks"})]}),a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-2xl font-bold text-gray-500 dark:text-slate-300 mb-1",children:s.todo}),a.jsx("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:"To-do"})]}),a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-2xl font-bold text-yellow-500 dark:text-yellow-400 mb-1",children:s.inProgress}),a.jsx("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:"In Progress"})]}),a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-2xl font-bold text-emerald-500 dark:text-emerald-400 mb-1",children:s.finished}),a.jsx("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:"Finished"})]})]})]})]}),a.jsx(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:i.map((o,l)=>a.jsx(V.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.5+l*.1},className:"space-y-4",children:a.jsxs("div",{className:`bg-white dark:bg-slate-800/50 backdrop-blur-xl border ${o.color} rounded-xl p-4`,children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:o.title}),a.jsx("span",{className:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-400 px-2 py-1 rounded-full text-sm font-medium",children:o.tasks.length})]}),a.jsx("div",{className:"space-y-3",children:a.jsx(Vt,{children:o.tasks.map((c,d)=>a.jsx(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3,delay:d*.1},layout:!0,children:a.jsx(Cf,{...c,delay:d*.05})},c.id))})})]})},o.id))})]})})},Ef=()=>{const r=[{title:"Project Completion Rate",value:"87%",change:"+5.2%",trend:"up",icon:a.jsx(Ei,{className:"w-6 h-6"}),color:"green"},{title:"Budget Utilization",value:"92%",change:"+2.1%",trend:"up",icon:a.jsx(Xa,{className:"w-6 h-6"}),color:"blue"},{title:"Safety Incidents",value:"3",change:"-1",trend:"down",icon:a.jsx(qi,{className:"w-6 h-6"}),color:"red"},{title:"Equipment Efficiency",value:"94%",change:"+1.8%",trend:"up",icon:a.jsx(Xa,{className:"w-6 h-6"}),color:"purple"},{title:"Team Productivity",value:"89%",change:"+3.4%",trend:"up",icon:a.jsx(Ei,{className:"w-6 h-6"}),color:"cyan"},{title:"Schedule Adherence",value:"76%",change:"-2.3%",trend:"down",icon:a.jsx(hd,{className:"w-6 h-6"}),color:"orange"}];return a.jsx("div",{className:"p-6 bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen",children:a.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[a.jsxs(V.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent",children:"Analytics Dashboard"}),a.jsx("p",{className:"text-gray-600 dark:text-slate-400 mt-1",children:"AI-powered performance insights and predictive analytics"})]}),a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsxs("div",{className:"flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 px-3 py-1.5 rounded-lg",children:[a.jsx(Sn,{className:"w-4 h-4"}),a.jsx("span",{className:"text-sm font-medium",children:"AI Enhanced"})]}),a.jsxs(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md shadow-blue-500/25",children:[a.jsx(Ei,{className:"w-4 h-4 inline mr-2"}),"Generate Report"]})]})]}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"relative group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity"}),a.jsxs("div",{className:"relative bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50 rounded-xl p-6",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white mb-1",children:"Performance Overview"}),a.jsx("p",{className:"text-gray-600 dark:text-slate-400",children:"Real-time analytics with AI-powered insights"})]}),a.jsxs("div",{className:"flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 px-3 py-1.5 rounded-lg",children:[a.jsx(Wi,{className:"w-4 h-4"}),a.jsx("span",{className:"text-sm font-medium",children:"+12% Overall"})]})]}),a.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-3xl font-bold text-emerald-500 dark:text-emerald-400 mb-1",children:"87%"}),a.jsx("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:"Completion Rate"}),a.jsx("div",{className:"text-xs text-emerald-500 dark:text-emerald-400 mt-1",children:"+5.2% this month"})]}),a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-3xl font-bold text-blue-500 dark:text-blue-400 mb-1",children:"92%"}),a.jsx("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:"Budget Utilization"}),a.jsx("div",{className:"text-xs text-blue-500 dark:text-blue-400 mt-1",children:"+2.1% this month"})]}),a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-3xl font-bold text-purple-500 dark:text-purple-400 mb-1",children:"94%"}),a.jsx("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:"Equipment Efficiency"}),a.jsx("div",{className:"text-xs text-purple-500 dark:text-purple-400 mt-1",children:"+1.8% this month"})]})]})]})]}),a.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.4},className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:r.map((e,t)=>a.jsx(gd,{...e,delay:t*.1},t))}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[a.jsxs(V.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.6},className:"relative group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity"}),a.jsxs("div",{className:"relative bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50 rounded-xl p-6",children:[a.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-white mb-4",children:"Trend Analysis"}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-sm text-gray-600 dark:text-slate-400",children:"Project Completion"}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-16 h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden",children:a.jsx(V.div,{initial:{width:0},animate:{width:"87%"},transition:{duration:1,delay:.8},className:"h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"})}),a.jsx("span",{className:"text-sm font-medium text-emerald-500 dark:text-emerald-400",children:"87%"})]})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-sm text-gray-600 dark:text-slate-400",children:"Budget Utilization"}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-16 h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden",children:a.jsx(V.div,{initial:{width:0},animate:{width:"92%"},transition:{duration:1,delay:.9},className:"h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"})}),a.jsx("span",{className:"text-sm font-medium text-blue-500 dark:text-blue-400",children:"92%"})]})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-sm text-gray-600 dark:text-slate-400",children:"Equipment Efficiency"}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-16 h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden",children:a.jsx(V.div,{initial:{width:0},animate:{width:"94%"},transition:{duration:1,delay:1},className:"h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"})}),a.jsx("span",{className:"text-sm font-medium text-purple-500 dark:text-purple-400",children:"94%"})]})]})]})]})]}),a.jsxs(V.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.7},className:"relative group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity"}),a.jsxs("div",{className:"relative bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50 rounded-xl p-6",children:[a.jsxs("h3",{className:"text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2",children:[a.jsx(Sn,{className:"w-5 h-5 text-purple-500 dark:text-purple-400"}),"AI Insights"]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("div",{className:"p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg",children:a.jsx("p",{className:"text-sm text-emerald-700 dark:text-emerald-300 font-medium",children:"Project completion rate is 12% above industry average"})}),a.jsx("div",{className:"p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg",children:a.jsx("p",{className:"text-sm text-blue-700 dark:text-blue-300 font-medium",children:"Budget utilization trending positively with 2.1% improvement"})}),a.jsx("div",{className:"p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg",children:a.jsx("p",{className:"text-sm text-orange-700 dark:text-orange-300 font-medium",children:"Schedule adherence needs attention - consider resource reallocation"})})]})]})]})]})]})})},Tf=()=>{const r=[{id:1,name:"John Smith",role:"Project Manager",department:"Management",location:"Downtown Office",status:"active",phone:"+1 (555) 123-4567",email:"john.smith@embodx.com"},{id:2,name:"Sarah Johnson",role:"Site Supervisor",department:"Operations",location:"Main Site",status:"active",phone:"+1 (555) 234-5678",email:"sarah.johnson@embodx.com"},{id:3,name:"Mike Chen",role:"Safety Officer",department:"Safety",location:"All Sites",status:"active",phone:"+1 (555) 345-6789",email:"mike.chen@embodx.com"},{id:4,name:"Lisa Rodriguez",role:"Equipment Manager",department:"Equipment",location:"Equipment Yard",status:"on-leave",phone:"+1 (555) 456-7890",email:"lisa.rodriguez@embodx.com"}],e=t=>{switch(t){case"active":return"bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";case"on-leave":return"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";case"inactive":return"bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";default:return"bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"}};return a.jsx("div",{className:"p-6 bg-gray-50 dark:bg-gray-900 min-h-screen",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs(V.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"flex items-center justify-between mb-8",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Team Management"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-1",children:"Manage your construction team"})]}),a.jsxs(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors",children:[a.jsx(hf,{className:"w-4 h-4 inline mr-2"}),"Add Member"]})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8",children:[a.jsx(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},whileHover:{y:-2},className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Total Members"}),a.jsx("p",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"156"})]}),a.jsx(Pi,{className:"w-8 h-8 text-blue-600"})]})}),a.jsx(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},whileHover:{y:-2},className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Active Today"}),a.jsx("p",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"142"})]}),a.jsx(Ts,{className:"w-8 h-8 text-green-600"})]})}),a.jsx(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},whileHover:{y:-2},className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"On Leave"}),a.jsx("p",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"8"})]}),a.jsx(Gi,{className:"w-8 h-8 text-yellow-600"})]})}),a.jsx(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},whileHover:{y:-2},className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Certified"}),a.jsx("p",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"134"})]}),a.jsx(Lu,{className:"w-8 h-8 text-purple-600"})]})})]}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.5},className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden",children:[a.jsx("div",{className:"px-6 py-4 border-b border-gray-200 dark:border-gray-700",children:a.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Team Members"})}),a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full",children:[a.jsx("thead",{className:"bg-gray-50 dark:bg-gray-700",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",children:"Member"}),a.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",children:"Role"}),a.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",children:"Department"}),a.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",children:"Location"}),a.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",children:"Status"}),a.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",children:"Contact"})]})}),a.jsx("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:r.map((t,n)=>a.jsxs(V.tr,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:.6+n*.1},whileHover:{backgroundColor:"rgba(249, 250, 251, 0.5)"},className:"hover:bg-gray-50 dark:hover:bg-gray-700",children:[a.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:a.jsx("div",{className:"text-sm font-medium text-gray-900 dark:text-white",children:t.name})}),a.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white",children:t.role}),a.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white",children:t.department}),a.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 flex items-center",children:[a.jsx(Xr,{className:"w-4 h-4 mr-1"}),t.location]}),a.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:a.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${e(t.status)}`,children:t.status})}),a.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:a.jsxs("div",{className:"flex space-x-2",children:[a.jsx(V.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300",children:a.jsx(wh,{className:"w-4 h-4"})}),a.jsx(V.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300",children:a.jsx(Xh,{className:"w-4 h-4"})})]})})]},t.id))})]})})]})]})})},Rf=()=>a.jsx("div",{className:"p-6 bg-gray-50 dark:bg-gray-900 min-h-screen",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsx(V.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"flex items-center justify-between mb-8",children:a.jsxs("div",{children:[a.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Equipment Management"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-1",children:"Track and manage construction equipment"})]})}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},whileHover:{y:-2},className:"bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm text-center",children:[a.jsx(V.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.5,delay:.4},children:a.jsx(pd,{className:"w-16 h-16 text-gray-400 mx-auto mb-4"})}),a.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:"Equipment Dashboard"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Equipment management features coming soon..."})]})]})}),Nf=()=>a.jsx("div",{className:"p-6 bg-gray-50 dark:bg-gray-900 min-h-screen",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsx(V.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"flex items-center justify-between mb-8",children:a.jsxs("div",{children:[a.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Safety Management"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-1",children:"Monitor safety compliance and incidents"})]})}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},whileHover:{y:-2},className:"bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm text-center",children:[a.jsx(V.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.5,delay:.4},children:a.jsx(Ts,{className:"w-16 h-16 text-gray-400 mx-auto mb-4"})}),a.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:"Safety Dashboard"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Safety management features coming soon..."})]})]})}),If=()=>a.jsx("div",{className:"p-6 bg-gray-50 dark:bg-gray-900 min-h-screen",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsx(V.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"flex items-center justify-between mb-8",children:a.jsxs("div",{children:[a.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Schedule Management"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-1",children:"Plan and track project schedules"})]})}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},whileHover:{y:-2},className:"bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm text-center",children:[a.jsx(V.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.5,delay:.4},children:a.jsx(Gi,{className:"w-16 h-16 text-gray-400 mx-auto mb-4"})}),a.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:"Schedule Dashboard"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Schedule management features coming soon..."})]})]})}),Df=()=>{const[r]=J.useState([{id:1,whatChange:"Change the color of the bedroom area",location:"1st Floor",description:"Change the color of the bedroom area",reason:"Change the color of the bedroom area",status:"pending",createdAt:"24/02/2025",updatedAt:"24/02/2025"},{id:2,whatChange:"Modify kitchen layout",location:"Ground Floor",description:"Update kitchen island position and add additional storage",reason:"Client requested more storage space and better workflow",status:"estimation",createdAt:"22/02/2025",updatedAt:"23/02/2025"},{id:3,whatChange:"Add electrical outlets",location:"2nd Floor",description:"Install additional electrical outlets in office spaces",reason:"Increased power requirements for modern office equipment",status:"quotation",createdAt:"20/02/2025",updatedAt:"21/02/2025"}]),e=n=>{switch(n){case"pending":return"from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 text-yellow-400";case"received":return"from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400";case"estimation":return"from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400";case"quotation":return"from-orange-500/20 to-orange-600/20 border-orange-500/30 text-orange-400";case"approval":return"from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-400"}},t=n=>{switch(n){case"pending":return a.jsx(Nn,{className:"h-4 w-4"});case"received":return a.jsx(Es,{className:"h-4 w-4"});case"estimation":return a.jsx(lh,{className:"h-4 w-4"});case"quotation":return a.jsx(Ml,{className:"h-4 w-4"});case"approval":return a.jsx(Vi,{className:"h-4 w-4"})}};return a.jsx("div",{className:"p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen",children:a.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[a.jsxs(V.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent",children:"Change Order Management"}),a.jsx("p",{className:"text-slate-400 mt-2 text-lg",children:"AI-powered change request tracking & approval workflow"})]}),a.jsxs(V.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.2},className:"flex items-center space-x-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 px-4 py-2 rounded-xl backdrop-blur-sm",children:[a.jsx(Sn,{className:"w-4 h-4"}),a.jsx("span",{className:"text-sm font-medium",children:"AI Enhanced"})]})]}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},className:"relative group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"}),a.jsxs("div",{className:"relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8",children:[a.jsxs("div",{className:"flex items-center justify-between mb-6",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Community Center Project"}),a.jsx("p",{className:"text-slate-400 text-lg",children:"Advanced construction monitoring with AI-powered analytics"})]}),a.jsxs(V.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.5},className:"flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-xl",children:[a.jsx(qi,{className:"w-4 h-4"}),a.jsx("span",{className:"text-sm font-medium",children:"Live Updates"})]})]}),a.jsx("div",{className:"grid grid-cols-7 gap-4",children:["Initiation","Planning","Pre-construction","Execution","Finishing","Inspection","Handover"].map((n,s)=>a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.6+s*.1},className:"text-center",children:[a.jsx("div",{className:`w-4 h-4 rounded-full mx-auto mb-2 ${s<4?"bg-gradient-to-r from-blue-500 to-purple-500":"bg-slate-600"}`}),a.jsx("span",{className:"text-xs text-slate-400 font-medium",children:n})]},n))})]})]}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},className:"relative group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-500/10 to-slate-600/10 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"}),a.jsxs("div",{className:"relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden",children:[a.jsxs("div",{className:"px-6 py-4 border-b border-slate-700/50 flex items-center justify-between",children:[a.jsx("h2",{className:"text-xl font-bold text-white",children:"Change Orders"}),a.jsxs(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/25",children:[a.jsx(qr,{className:"w-4 h-4 inline mr-2"}),"Create Change Order"]})]}),a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full",children:[a.jsx("thead",{className:"bg-slate-700/50",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider",children:"What change"}),a.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider",children:"Location of change"}),a.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider",children:"Description"}),a.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider",children:"Reason of change"}),a.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider",children:"Status"}),a.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider",children:"Actions"})]})}),a.jsx("tbody",{className:"bg-slate-800/50 divide-y divide-slate-700/50",children:r.map((n,s)=>a.jsxs(V.tr,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:.5+s*.1},whileHover:{backgroundColor:"rgba(51, 65, 85, 0.3)"},className:"hover:bg-slate-700/30 transition-colors",children:[a.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:a.jsx("div",{className:"text-sm font-medium text-white",children:n.whatChange})}),a.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-slate-300",children:n.location}),a.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-slate-300",children:n.description}),a.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-slate-300",children:n.reason}),a.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:a.jsxs("span",{className:`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${e(n.status)} backdrop-blur-sm`,children:[t(n.status),a.jsx("span",{className:"ml-1 capitalize",children:n.status})]})}),a.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:[a.jsx(V.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"text-blue-400 hover:text-blue-300 mr-3 transition-colors",children:a.jsx(Ml,{className:"w-5 h-5"})}),a.jsx(V.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"text-red-400 hover:text-red-300 transition-colors",children:a.jsx(ud,{className:"w-5 h-5"})})]})]},n.id))})]})})]})]}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.6},className:"relative group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"}),a.jsxs("div",{className:"relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6",children:[a.jsx("h3",{className:"text-xl font-bold text-white mb-6",children:"Change Order Workflow"}),a.jsx("div",{className:"flex justify-between items-center text-sm text-slate-400",children:[{label:"Pending",color:"from-yellow-500 to-yellow-600"},{label:"Received",color:"from-blue-500 to-blue-600"},{label:"Estimation",color:"from-purple-500 to-purple-600"},{label:"Quotation",color:"from-orange-500 to-orange-600"},{label:"Approval",color:"from-emerald-500 to-emerald-600"}].map((n,s)=>a.jsxs(V.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.3,delay:.7+s*.1},className:"flex flex-col items-center",children:[a.jsx("div",{className:`w-4 h-4 rounded-full bg-gradient-to-r ${n.color} mb-2`}),a.jsx("span",{className:"font-medium",children:n.label})]},n.label))})]})]}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.8},className:"relative group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"}),a.jsxs("div",{className:"relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6",children:[a.jsxs("div",{className:"flex items-center justify-between mb-6",children:[a.jsx("h3",{className:"text-xl font-bold text-white",children:"Change Order Analytics"}),a.jsx(Go,{className:"w-5 h-5 text-cyan-400"})]}),a.jsx("div",{className:"grid grid-cols-5 gap-6",children:[{status:"pending",color:"text-yellow-400",count:r.filter(n=>n.status==="pending").length},{status:"received",color:"text-blue-400",count:r.filter(n=>n.status==="received").length},{status:"estimation",color:"text-purple-400",count:r.filter(n=>n.status==="estimation").length},{status:"quotation",color:"text-orange-400",count:r.filter(n=>n.status==="quotation").length},{status:"approval",color:"text-emerald-400",count:r.filter(n=>n.status==="approval").length}].map((n,s)=>a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.9+s*.1},className:"text-center",children:[a.jsx("div",{className:`text-3xl font-bold ${n.color} mb-1`,children:n.count}),a.jsx("div",{className:"text-sm text-slate-400 capitalize",children:n.status})]},n.status))})]})]})]})})},Pf=()=>{const[r,e]=J.useState(!0),[t,n]=J.useState(!1),s=[{id:1,type:"Paint Issue",location:"Main Entrance",severity:"Medium",description:"Paint peeling and discoloration",coordinates:{x:45,y:30}},{id:2,type:"Crack",location:"Foundation Wall",severity:"High",description:"Structural crack in foundation",coordinates:{x:20,y:80}},{id:3,type:"Electrical",location:"Office Space",severity:"Low",description:"Loose outlet cover",coordinates:{x:70,y:60}}],i=o=>{switch(o){case"High":return"from-red-500 to-red-600";case"Medium":return"from-yellow-500 to-yellow-600";case"Low":return"from-emerald-500 to-emerald-600";default:return"from-slate-500 to-slate-600"}};return a.jsx("div",{className:"p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen",children:a.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[a.jsxs(V.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent",children:"3D Visualization Hub"}),a.jsx("p",{className:"text-slate-400 mt-2 text-lg",children:"AI-powered spatial analysis & defect detection"})]}),a.jsxs(V.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.2},className:"flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-xl backdrop-blur-sm",children:[a.jsx(Sn,{className:"w-4 h-4"}),a.jsx("span",{className:"text-sm font-medium",children:"AI Enhanced"})]})]}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},className:"relative group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"}),a.jsxs("div",{className:"relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8",children:[a.jsxs("div",{className:"flex items-center justify-between mb-6",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Community Center Project"}),a.jsx("p",{className:"text-slate-400 text-lg",children:"Advanced construction monitoring with AI-powered analytics"})]}),a.jsxs(V.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.5},className:"flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-xl",children:[a.jsx(qi,{className:"w-4 h-4"}),a.jsx("span",{className:"text-sm font-medium",children:"Live Updates"})]})]}),a.jsx("div",{className:"grid grid-cols-7 gap-4",children:["Initiation","Planning","Pre-construction","Execution","Finishing","Inspection","Handover"].map((o,l)=>a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.6+l*.1},className:"text-center",children:[a.jsx("div",{className:`w-4 h-4 rounded-full mx-auto mb-2 ${l<4?"bg-gradient-to-r from-blue-500 to-purple-500":"bg-slate-600"}`}),a.jsx("span",{className:"text-xs text-slate-400 font-medium",children:o})]},o))})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[a.jsx("div",{className:"lg:col-span-3",children:a.jsxs("div",{className:"relative group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-500/10 to-slate-600/10 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"}),a.jsxs("div",{className:"relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6",children:[a.jsxs("div",{className:"flex items-center justify-between mb-6",children:[a.jsx("h2",{className:"text-xl font-bold text-white",children:"3D Model Viewport"}),a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("button",{onClick:()=>e(!r),className:`p-2 rounded-xl transition-all duration-300 ${r?"bg-blue-500/20 text-blue-400 border border-blue-500/30":"bg-slate-700/50 text-slate-400 border border-slate-600/30"}`,children:r?a.jsx(Es,{className:"h-4 w-4"}):a.jsx(Au,{className:"h-4 w-4"})}),a.jsx("button",{className:"p-2 bg-slate-700/50 text-slate-400 rounded-xl hover:bg-slate-600/50 hover:text-white transition-all duration-300 border border-slate-600/30",children:a.jsx(nd,{className:"h-4 w-4"})}),a.jsx("button",{className:"p-2 bg-slate-700/50 text-slate-400 rounded-xl hover:bg-slate-600/50 hover:text-white transition-all duration-300 border border-slate-600/30",children:a.jsx(_u,{className:"h-4 w-4"})}),a.jsx("button",{className:"p-2 bg-slate-700/50 text-slate-400 rounded-xl hover:bg-slate-600/50 hover:text-white transition-all duration-300 border border-slate-600/30",children:a.jsx(wu,{className:"h-4 w-4"})})]})]}),a.jsxs("div",{className:"relative bg-slate-900/50 rounded-xl border border-slate-700/50 h-96 overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:a.jsxs("div",{className:"text-center text-slate-400",children:[a.jsx("div",{className:"w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mx-auto mb-4 flex items-center justify-center border border-slate-600/50",children:a.jsx("span",{className:"text-slate-500 text-sm font-mono",children:"3D Model"})}),a.jsx("p",{className:"text-slate-500",children:"Integrate your 3D model viewer here"})]})}),r&&s.map(o=>a.jsxs("div",{className:"absolute cursor-pointer group",style:{left:`${o.coordinates.x}%`,top:`${o.coordinates.y}%`,transform:"translate(-50%, -50%)"},children:[a.jsx("div",{className:`w-4 h-4 rounded-full bg-gradient-to-r ${i(o.severity)} border-2 border-white shadow-lg animate-pulse`}),a.jsx("div",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity",children:a.jsxs("div",{className:"bg-slate-900 text-white text-xs rounded-xl px-3 py-2 whitespace-nowrap border border-slate-700/50 backdrop-blur-xl",children:[a.jsx("div",{className:"font-semibold",children:o.type}),a.jsx("div",{className:"text-slate-300",children:o.location}),a.jsx("div",{className:"text-slate-400",children:o.description})]})})]},o.id)),a.jsxs("div",{className:"absolute bottom-4 right-4 flex space-x-2",children:[a.jsx("button",{className:"p-2 bg-slate-800/80 backdrop-blur-xl rounded-xl shadow-lg hover:bg-slate-700/80 transition-all duration-300 border border-slate-600/50",children:a.jsx(Wo,{className:"h-4 w-4 text-slate-400"})}),a.jsx("button",{className:"p-2 bg-slate-800/80 backdrop-blur-xl rounded-xl shadow-lg hover:bg-slate-700/80 transition-all duration-300 border border-slate-600/50",children:a.jsx(md,{className:"h-4 w-4 text-slate-400"})}),a.jsx("button",{className:"p-2 bg-slate-800/80 backdrop-blur-xl rounded-xl shadow-lg hover:bg-slate-700/80 transition-all duration-300 border border-slate-600/50",children:a.jsx(Qr,{className:"h-4 w-4 text-slate-400"})}),a.jsx("button",{onClick:()=>n(!t),className:"p-2 bg-slate-800/80 backdrop-blur-xl rounded-xl shadow-lg hover:bg-slate-700/80 transition-all duration-300 border border-slate-600/50",children:a.jsx(Rh,{className:"h-4 w-4 text-slate-400"})})]})]})]})]})}),a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"relative group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"}),a.jsxs("div",{className:"relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6",children:[a.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:"Defect Analysis"}),a.jsx("div",{className:"space-y-3",children:s.map(o=>a.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:`w-3 h-3 rounded-full bg-gradient-to-r ${i(o.severity)}`}),a.jsxs("div",{children:[a.jsx("div",{className:"font-medium text-white",children:o.type}),a.jsx("div",{className:"text-sm text-slate-400",children:o.location})]})]}),a.jsxs("div",{className:"text-right",children:[a.jsx("div",{className:"text-sm font-medium text-white",children:o.severity}),a.jsx("div",{className:"text-xs text-slate-500",children:o.description})]})]},o.id))})]})]}),a.jsxs("div",{className:"relative group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"}),a.jsxs("div",{className:"relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6",children:[a.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:"AI Assistant"}),a.jsxs("div",{className:"bg-slate-700/30 rounded-xl p-4 border border-slate-600/30",children:[a.jsx("p",{className:"text-slate-400 mb-4",children:"Use AI-powered chat to streamline your workflow and get instant insights about the 3D model."}),a.jsxs("button",{className:"bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/25",children:[a.jsx(Sn,{className:"w-4 h-4 inline mr-2"}),"Open AI Chat"]})]})]})]}),a.jsxs("div",{className:"relative group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"}),a.jsxs("div",{className:"relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("h3",{className:"text-lg font-bold text-white",children:"Model Analytics"}),a.jsx(Go,{className:"w-5 h-5 text-cyan-400"})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-2xl font-bold text-red-400 mb-1",children:s.filter(o=>o.severity==="High").length}),a.jsx("div",{className:"text-sm text-slate-400",children:"High Priority"})]}),a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-2xl font-bold text-yellow-400 mb-1",children:s.filter(o=>o.severity==="Medium").length}),a.jsx("div",{className:"text-sm text-slate-400",children:"Medium Priority"})]}),a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-2xl font-bold text-emerald-400 mb-1",children:s.filter(o=>o.severity==="Low").length}),a.jsx("div",{className:"text-sm text-slate-400",children:"Low Priority"})]})]})]})]})]})]})]})})},Ff=()=>{const[r,e]=J.useState(Sf),[t,n]=J.useState("All"),s=d=>{e(r.map(u=>u.id===d?{...u,read:!0}:u))},i=d=>{e(r.filter(u=>u.id!==d))},o=()=>{e([])},l=r.filter(d=>t==="Unread"?!d.read:!0),c=d=>{switch(d){case"Defect":return"bg-red-500/10 text-red-400 border-red-500/20";case"System":return"bg-blue-500/10 text-blue-400 border-blue-500/20";case"Team":return"bg-green-500/10 text-green-400 border-green-500/20";default:return"bg-slate-500/10 text-slate-400 border-slate-500/20"}};return a.jsx("div",{className:"p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen",children:a.jsxs("div",{className:"max-w-4xl mx-auto",children:[a.jsxs(V.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"flex items-center justify-between mb-8",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent",children:"Notifications"}),a.jsx("p",{className:"text-slate-400 mt-2 text-lg",children:"Stay updated with project events and alerts"})]}),a.jsxs(V.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.2},className:"flex items-center space-x-3",children:[a.jsxs("button",{onClick:o,className:"flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors",children:[a.jsx(ku,{className:"w-4 h-4"}),"Clear All"]}),a.jsx("button",{className:"p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-300",children:a.jsx(Di,{className:"w-5 h-5"})})]})]}),a.jsxs("div",{className:"flex items-center border-b border-slate-700/50 mb-6",children:[a.jsx(Rl,{label:"All",count:r.length,isActive:t==="All",onClick:()=>n("All")}),a.jsx(Rl,{label:"Unread",count:r.filter(d=>!d.read).length,isActive:t==="Unread",onClick:()=>n("Unread")})]}),a.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.3},className:"space-y-4",children:l.length>0?l.map((d,u)=>a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:u*.1},className:`relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-5 flex items-start gap-4 overflow-hidden transition-all duration-300 hover:border-slate-600/80 ${d.read?"":"border-blue-500/30"}`,children:[!d.read&&a.jsx("div",{className:"absolute top-3 right-3 w-2 h-2 bg-blue-400 rounded-full animate-pulse"}),a.jsx("div",{className:`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center ${c(d.category)}`,children:a.jsx(d.icon,{className:"w-5 h-5"})}),a.jsxs("div",{className:"flex-1",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("h3",{className:"font-bold text-white",children:d.title}),a.jsx("span",{className:"text-xs text-slate-500",children:d.timestamp})]}),a.jsx("p",{className:"text-sm text-slate-400 mt-1",children:d.description}),a.jsxs("div",{className:"flex items-center gap-3 mt-3",children:[!d.read&&a.jsxs("button",{onClick:()=>s(d.id),className:"flex items-center gap-1.5 text-xs text-green-400 hover:text-white transition-colors",children:[a.jsx(Vi,{className:"w-3.5 h-3.5"}),"Mark as Read"]}),a.jsxs("button",{onClick:()=>i(d.id),className:"flex items-center gap-1.5 text-xs text-red-400 hover:text-white transition-colors",children:[a.jsx(Rs,{className:"w-3.5 h-3.5"}),"Delete"]})]})]})]},d.id)):a.jsxs("div",{className:"text-center py-16 bg-slate-800/30 rounded-xl border border-dashed border-slate-700/50",children:[a.jsx(Vo,{className:"w-12 h-12 text-slate-600 mx-auto mb-4"}),a.jsx("h3",{className:"text-lg font-semibold text-white",children:"All caught up!"}),a.jsx("p",{className:"text-slate-500",children:"You have no new notifications."})]})})]})})},Rl=({label:r,count:e,isActive:t,onClick:n})=>a.jsxs("button",{onClick:n,className:`relative px-4 py-3 text-sm font-medium transition-colors ${t?"text-white":"text-slate-400 hover:text-white"}`,children:[r,a.jsx("span",{className:`ml-2 px-2 py-0.5 rounded-full text-xs ${t?"bg-blue-500 text-white":"bg-slate-700 text-slate-300"}`,children:e}),t&&a.jsx(V.div,{layoutId:"active-tab-indicator",className:"absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"})]}),kf=()=>a.jsx("div",{className:"p-6 bg-gray-50 dark:bg-gray-900 min-h-screen",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsx(V.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"flex items-center justify-between mb-8",children:a.jsxs("div",{children:[a.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Settings"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-1",children:"Configure your application preferences"})]})}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},whileHover:{y:-2},className:"bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm text-center",children:[a.jsx(V.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.5,delay:.4},children:a.jsx(Di,{className:"w-16 h-16 text-gray-400 mx-auto mb-4"})}),a.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:"Settings Dashboard"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Settings management features coming soon..."})]})]})}),Bf=(r={})=>{const{threshold:e=10,debounceMs:t=100}=r,[n,s]=J.useState(!0),[i,o]=J.useState(!1),[l,c]=J.useState(!1),[d,u]=J.useState(!1),h=J.useRef(null);return J.useEffect(()=>{const g=h.current;if(!g)return;const y=()=>{const{scrollTop:v,scrollHeight:S,clientHeight:b}=g,_=v<=e,M=v+b>=S-e,w=v>e,T=v+b<S-e;s(_),o(M),c(w),u(T)};y();let x;const m=()=>{clearTimeout(x),x=setTimeout(y,t)};return g.addEventListener("scroll",m,{passive:!0}),window.addEventListener("resize",m,{passive:!0}),()=>{g.removeEventListener("scroll",m),window.removeEventListener("resize",m),clearTimeout(x)}},[e,t]),{elementRef:h,isAtTop:n,isAtBottom:i,canScrollUp:l,canScrollDown:d,scrollToTop:()=>{var g;(g=h.current)==null||g.scrollTo({top:0,behavior:"smooth"})},scrollToBottom:()=>{h.current&&h.current.scrollTo({top:h.current.scrollHeight,behavior:"smooth"})}}},Lf=({children:r,className:e="",showButtons:t=!0,showFade:n=!0,threshold:s=10})=>{const{elementRef:i,isAtTop:o,isAtBottom:l,canScrollUp:c,canScrollDown:d,scrollToTop:u,scrollToBottom:h}=Bf({threshold:s}),p=["relative","custom-scrollbar","smooth-scroll",n?"scroll-indicator":"",e].filter(Boolean).join(" ");return a.jsxs("div",{className:"relative",children:[a.jsx("div",{ref:i,className:p,children:r}),a.jsx(Vt,{children:t&&a.jsxs(a.Fragment,{children:[c&&a.jsx(V.button,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},onClick:u,className:"absolute top-4 right-4 z-20 w-8 h-8 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200","aria-label":"Scroll to top",children:a.jsx(Ku,{className:"w-4 h-4 text-gray-600 dark:text-slate-400"})}),d&&a.jsx(V.button,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},onClick:h,className:"absolute bottom-4 right-4 z-20 w-8 h-8 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200","aria-label":"Scroll to bottom",children:a.jsx(sd,{className:"w-4 h-4 text-gray-600 dark:text-slate-400"})})]})}),a.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden",children:a.jsx(V.div,{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full",initial:{width:"0%"},animate:{width:o?"0%":l?"100%":"50%"},transition:{duration:.3}})})]})},Uf=()=>{const[r,e]=J.useState(!1),[t,n]=J.useState(!1),[s,i]=J.useState(!1),[o,l]=J.useState([{id:"1",text:"Hello! I'm your AI construction assistant. How can I help you today?",sender:"bot",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),[c,d]=J.useState(""),[u,h]=J.useState(!1),p=()=>{if(c.trim()){const x={id:String(o.length+1),text:c,sender:"user",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};l([...o,x]),d(""),h(!0),setTimeout(()=>{const m={id:String(o.length+2),text:"I understand you're looking for help with your construction project. Let me assist you with that. What specific aspect would you like to know more about?",sender:"bot",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};l(v=>[...v,m]),h(!1)},1500)}},f=x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),p())},g=["Show project status","Find safety issues","Schedule inspection","Generate report"],y=x=>{d(x),p()};return a.jsxs(a.Fragment,{children:[a.jsx(Vt,{children:!r&&a.jsxs(V.button,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},exit:{scale:0,opacity:0},transition:{type:"spring",stiffness:300,damping:20},onClick:()=>e(!0),onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),className:"fixed bottom-6 right-6 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-110 z-50 group",children:[a.jsxs("div",{className:"relative flex items-center justify-center",children:[a.jsx(Ph,{className:"w-5 h-5 sm:w-6 sm:h-6"}),a.jsx("div",{className:"absolute -top-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-400 rounded-full animate-pulse"})]}),a.jsx("div",{className:"absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap",children:"AI Assistant"})]})}),a.jsx(Vt,{children:r&&a.jsxs(V.div,{initial:{scale:.8,opacity:0,y:20},animate:{scale:1,opacity:1,y:0,width:t&&!s?"280px":"320px",height:t&&!s?"64px":"480px"},exit:{scale:.8,opacity:0,y:20},transition:{type:"spring",stiffness:300,damping:25,width:{duration:.3},height:{duration:.3}},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),className:"fixed bottom-6 right-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-2xl z-50 overflow-hidden",style:{width:t&&!s?"280px":"320px",height:t&&!s?"64px":"480px"},children:[a.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-gray-200 dark:border-slate-700 bg-gradient-to-r from-blue-500/10 to-purple-500/10",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center",children:a.jsx(Cs,{className:"w-3 h-3 text-white"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white text-sm",children:"AI Assistant"}),a.jsx("p",{className:"text-xs text-gray-500 dark:text-slate-400",children:"Construction Expert"})]})]}),a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx(V.button,{whileHover:{scale:1.1},whileTap:{scale:.95},onClick:()=>n(!t),className:"p-1 text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-white transition-colors",children:t?a.jsx(Eh,{className:"w-3 h-3"}):a.jsx(Uh,{className:"w-3 h-3"})}),a.jsx(V.button,{whileHover:{scale:1.1},whileTap:{scale:.95},onClick:()=>e(!1),className:"p-1 text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-white transition-colors",children:a.jsx(Rs,{className:"w-3 h-3"})})]})]}),a.jsx(Vt,{children:(!t||s)&&a.jsxs(V.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"flex flex-col",children:[a.jsxs(Lf,{className:"flex-1 p-3 space-y-2 overflow-y-auto h-[300px]",showButtons:!1,showFade:!0,children:[o.map(x=>a.jsx(V.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3},className:`flex ${x.sender==="user"?"justify-end":"justify-start"}`,children:a.jsxs("div",{className:`flex items-start gap-1 max-w-[85%] ${x.sender==="user"?"flex-row-reverse":""}`,children:[a.jsx("div",{className:`w-5 h-5 rounded-full flex items-center justify-center text-white text-xs ${x.sender==="user"?"bg-gradient-to-br from-green-500 to-teal-500":"bg-gradient-to-br from-blue-500 to-purple-500"}`,children:x.sender==="user"?a.jsx(Xi,{className:"w-2.5 h-2.5"}):a.jsx(Cs,{className:"w-2.5 h-2.5"})}),a.jsxs("div",{className:`px-2 py-1.5 rounded-lg text-xs ${x.sender==="user"?"bg-blue-500 text-white rounded-br-sm":"bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white rounded-bl-sm"}`,children:[a.jsx("p",{children:x.text}),a.jsx("p",{className:`text-xs mt-0.5 ${x.sender==="user"?"text-blue-100":"text-gray-500 dark:text-slate-400"}`,children:x.timestamp})]})]})},x.id)),u&&a.jsx(V.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"flex justify-start",children:a.jsxs("div",{className:"flex items-start gap-1",children:[a.jsx("div",{className:"w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center",children:a.jsx(Cs,{className:"w-2.5 h-2.5 text-white"})}),a.jsx("div",{className:"bg-gray-100 dark:bg-slate-700 px-2 py-1.5 rounded-lg rounded-bl-sm",children:a.jsxs("div",{className:"flex space-x-1",children:[a.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"}),a.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),a.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]})})]})})]}),a.jsxs("div",{className:"p-2 border-t border-gray-200 dark:border-slate-700",children:[a.jsx("p",{className:"text-xs text-gray-500 dark:text-slate-400 mb-1 font-medium",children:"Quick Actions:"}),a.jsx("div",{className:"flex flex-wrap gap-1",children:g.map((x,m)=>a.jsx(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>y(x),className:"px-1.5 py-0.5 text-xs bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 rounded-full hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors",children:x},m))})]}),a.jsxs("div",{className:"p-3 border-t border-gray-200 dark:border-slate-700",children:[a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx("input",{type:"text",value:c,onChange:x=>d(x.target.value),onKeyPress:f,placeholder:"Ask me anything about your project...",className:"flex-1 px-2 py-1.5 text-xs border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),a.jsx(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:p,disabled:!c.trim(),className:"p-1.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200",children:a.jsx(cd,{className:"w-3 h-3"})})]}),a.jsxs("div",{className:"flex items-center justify-between mt-1",children:[a.jsxs("div",{className:"flex items-center gap-1 text-xs text-gray-500 dark:text-slate-400",children:[a.jsx(tf,{className:"w-2.5 h-2.5"}),a.jsx("span",{children:"Powered by EmbodX AI"}),a.jsx("span",{className:"text-[10px] text-gray-400 dark:text-slate-500",children:"by SpatioSense"})]}),a.jsxs("div",{className:"flex items-center gap-1 text-xs text-emerald-500",children:[a.jsx("div",{className:"w-1 h-1 bg-emerald-500 rounded-full animate-pulse"}),a.jsx("span",{children:"Online"})]})]})]})]})})]})})]})},Of=({onProjectSelect:r})=>{const[e,t]=J.useState(null),[n,s]=J.useState(null),i=[{id:"downtown-office",name:"Downtown Office Complex",description:"Modern 25-story office building with sustainable design features and smart building technology",location:"123 Main St, Downtown",teamSize:24,startDate:"2024-01-15",estimatedCompletion:"2025-06-30",progress:78,status:"active",priority:"high",bannerImage:"https://c.animaapp.com/01GpoJj1/img/frame-8.png",safetyScore:98,budget:"$45.2M",manager:"Sarah Johnson"},{id:"residential-tower",name:"Residential Tower A",description:"Luxury residential tower with panoramic city views and premium amenities",location:"456 Oak Ave, Midtown",teamSize:18,startDate:"2024-03-01",estimatedCompletion:"2025-09-15",progress:45,status:"active",priority:"medium",bannerImage:"https://c.animaapp.com/01GpoJj1/img/frame-9.png",safetyScore:96,budget:"$32.8M",manager:"Mike Chen"},{id:"shopping-center",name:"Shopping Center Renovation",description:"Complete renovation of existing shopping center with modern retail spaces",location:"789 Pine Rd, Suburbs",teamSize:12,startDate:"2024-02-10",estimatedCompletion:"2024-12-20",progress:92,status:"active",priority:"low",bannerImage:"https://c.animaapp.com/01GpoJj1/img/frame-10.png",safetyScore:99,budget:"$18.5M",manager:"Lisa Rodriguez"},{id:"bridge-construction",name:"Bridge Construction",description:"New pedestrian bridge connecting downtown to waterfront district",location:"321 River St, Waterfront",teamSize:32,startDate:"2024-04-01",estimatedCompletion:"2025-03-15",progress:23,status:"active",priority:"high",bannerImage:"/assets/frame-12.svg",safetyScore:97,budget:"$28.7M",manager:"David Kim"}],o=d=>{switch(d){case"active":return"from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-400";case"planning":return"from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400";case"on-hold":return"from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 text-yellow-400";case"completed":return"from-gray-500/20 to-gray-600/20 border-gray-500/30 text-gray-400";default:return"from-gray-500/20 to-gray-600/20 border-gray-500/30 text-gray-400"}},l=d=>{switch(d){case"high":return"from-red-500/20 to-red-600/20 border-red-500/30 text-red-400";case"medium":return"from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 text-yellow-400";case"low":return"from-green-500/20 to-green-600/20 border-green-500/30 text-green-400";default:return"from-gray-500/20 to-gray-600/20 border-gray-500/30 text-gray-400"}},c=d=>{t(d),setTimeout(()=>{r(d)},500)};return a.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-3 sm:p-4 md:p-6",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs(V.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-center mb-8",children:[a.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[a.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25",children:a.jsx(V.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.3,delay:.4},className:"w-7 h-7 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/25",children:a.jsx("img",{src:"/embodx-icon.svg",alt:"EmbodX Logo",className:"w-7 h-7"})})}),a.jsx("h1",{className:"text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent",children:"EmbodX Construction"}),a.jsx("p",{className:"text-xs text-gray-500 dark:text-slate-400",children:"by SpatioSense"})]}),a.jsx("h2",{className:"text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2",children:"Select Your Project"}),a.jsx("p",{className:"text-sm sm:text-base text-gray-600 dark:text-slate-400 max-w-2xl mx-auto",children:"Choose the project you want to work on. Each project has different requirements, team members, and safety protocols."})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8",children:i.map((d,u)=>a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:u*.1},className:`relative group cursor-pointer ${e===d.id?"ring-2 ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-900":""}`,"data-tour":d.id==="downtown-office"?"project-card-downtown-office":void 0,onClick:()=>c(d.id),onMouseEnter:()=>s(d.id),onMouseLeave:()=>s(null),children:[a.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${o(d.status)} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity`}),a.jsxs("div",{className:"relative bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50 rounded-2xl overflow-hidden hover:border-gray-300 dark:hover:border-slate-600/50 transition-all duration-300",children:[a.jsxs("div",{className:"relative h-48 overflow-hidden",children:[a.jsx("img",{src:d.bannerImage,alt:d.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"}),a.jsx("div",{className:"absolute top-4 right-4",children:a.jsx("div",{className:`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${o(d.status)} backdrop-blur-sm`,children:d.status.replace("-"," ")})}),a.jsx("div",{className:"absolute top-4 left-4",children:a.jsxs("div",{className:`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${l(d.priority)} backdrop-blur-sm`,children:[d.priority," priority"]})}),a.jsx(Vt,{children:e===d.id&&a.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute inset-0 bg-blue-500/20 backdrop-blur-sm flex items-center justify-center",children:a.jsxs("div",{className:"bg-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2",children:[a.jsx(Vi,{className:"w-4 h-4"}),a.jsx("span",{className:"font-medium",children:"Selected"})]})})})]}),a.jsxs("div",{className:"p-6",children:[a.jsx("div",{className:"flex items-start justify-between mb-4",children:a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-2",children:d.name}),a.jsx("p",{className:"text-gray-600 dark:text-slate-400 text-sm mb-3",children:d.description})]})}),a.jsxs("div",{className:"space-y-3 mb-4",children:[a.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600 dark:text-slate-400",children:[a.jsx(Xr,{className:"w-4 h-4"}),a.jsx("span",{children:d.location})]}),a.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600 dark:text-slate-400",children:[a.jsx(Pi,{className:"w-4 h-4"}),a.jsxs("span",{children:[d.teamSize," team members"]})]}),a.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600 dark:text-slate-400",children:[a.jsx(Gi,{className:"w-4 h-4"}),a.jsxs("span",{children:["Started"," ",new Date(d.startDate).toLocaleDateString()]})]}),a.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600 dark:text-slate-400",children:[a.jsx(Ts,{className:"w-4 h-4"}),a.jsxs("span",{children:["Safety Score: ",d.safetyScore,"%"]})]})]}),a.jsxs("div",{className:"mb-4",children:[a.jsxs("div",{className:"flex justify-between text-sm text-gray-600 dark:text-slate-400 mb-1",children:[a.jsx("span",{children:"Progress"}),a.jsxs("span",{className:"font-mono",children:[d.progress,"%"]})]}),a.jsx("div",{className:"w-full bg-gray-200 dark:bg-slate-700/50 rounded-full h-2 overflow-hidden",children:a.jsx(V.div,{initial:{width:0},animate:{width:`${d.progress}%`},transition:{duration:1,delay:u*.1},className:"bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"})})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:[a.jsx("div",{className:"font-medium",children:"Project Manager"}),a.jsx("div",{children:d.manager})]}),a.jsxs("div",{className:"text-right text-sm text-gray-600 dark:text-slate-400",children:[a.jsx("div",{className:"font-medium",children:"Budget"}),a.jsx("div",{className:"font-mono",children:d.budget})]})]})]}),a.jsx(Vt,{children:n===d.id&&e!==d.id&&a.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm flex items-center justify-center",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg",children:[a.jsx(ed,{className:"w-4 h-4"}),a.jsx("span",{className:"font-medium",children:"Click to Select"})]})})})]})]},d.id))}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4",children:[a.jsxs("div",{className:"bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50 rounded-xl p-4 text-center",children:[a.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-2",children:a.jsx(ws,{className:"w-4 h-4 text-blue-400"})}),a.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:i.length}),a.jsx("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:"Active Projects"})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50 rounded-xl p-4 text-center",children:[a.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-lg flex items-center justify-center mx-auto mb-2",children:a.jsx(Pi,{className:"w-4 h-4 text-emerald-400"})}),a.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:i.reduce((d,u)=>d+u.teamSize,0)}),a.jsx("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:"Total Workers"})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50 rounded-xl p-4 text-center",children:[a.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-2",children:a.jsx(Ts,{className:"w-4 h-4 text-purple-400"})}),a.jsxs("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:[Math.round(i.reduce((d,u)=>d+u.safetyScore,0)/i.length),"%"]}),a.jsx("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:"Avg Safety Score"})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50 rounded-xl p-4 text-center",children:[a.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center mx-auto mb-2",children:a.jsx(Wi,{className:"w-4 h-4 text-orange-400"})}),a.jsxs("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:[Math.round(i.reduce((d,u)=>d+u.progress,0)/i.length),"%"]}),a.jsx("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:"Avg Progress"})]})]})]})})},jf=()=>{const[r,e]=J.useState("Task board"),[t,n]=J.useState(!1),[s,i]=J.useState(!1),[o,l]=J.useState(null),c=[{label:"Initiation",gradient:"linear-gradient(90deg, rgba(0,39,77,1) 0%, rgba(0,76,153,1) 100%)",isActive:!0},{label:"Planning",gradient:"linear-gradient(90deg, rgba(0,76,153,1) 0%, rgba(0,116,228,1) 100%)",isActive:!0},{label:"Pre-construction",gradient:"linear-gradient(90deg, rgba(0,116,228,1) 0%, rgba(0,153,204,1) 100%)",isActive:!0},{label:"Execution & monitoring",gradient:"linear-gradient(90deg, rgba(0,153,204,1) 0%, rgba(0,179,179,1) 100%)",isActive:!0},{label:"Finishing",isActive:!1},{label:"Inspection",isActive:!1},{label:"Handover & Closing",isActive:!1}],d=[{label:"Task board",isActive:!0},{label:"Construction Drawing",isActive:!1},{label:"Preview 3D Model",isActive:!1},{label:"Documents",isActive:!1},{label:"Monitor Site",isActive:!1},{label:"Pending change order",isActive:!1,count:20},{label:"Comments",isActive:!1}],u=[{label:"Points",value:"39,616,512",icon:Xr},{label:"Active Workers",value:"24",icon:Pi},{label:"Safety Score",value:"98%",icon:Ts},{label:"Progress",value:"78%",icon:Wi},{label:"Defects Found",value:"12",icon:fn},{label:"AI Detected",value:"8",icon:qi},{label:"Time Saved",value:"4.2h",icon:Nn}],h=async()=>{i(!0);try{await new Promise(f=>setTimeout(f,2e3)),l(Mu),n(!0)}catch(f){console.error("Failed to connect to site:",f)}finally{i(!1)}},p=()=>{n(!1),l(null)};return a.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-6",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs(V.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},className:"mb-6",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[a.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25",children:a.jsx(ws,{className:"w-5 h-5 text-white"})}),a.jsx("h1",{className:"text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent",children:"Community Center"})]}),a.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:c.map((f,g)=>a.jsx(V.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6,delay:g*.1},className:`flex w-[175px] items-center justify-center gap-2.5 px-3 py-1 rounded-xl overflow-hidden ${f.isActive?"":"border border-solid border-gray-300 dark:border-slate-600"}`,style:f.isActive&&f.gradient?{background:f.gradient}:void 0,children:a.jsx("div",{className:`relative w-fit font-bold text-sm tracking-[0] leading-[normal] ${f.isActive?"text-white":"text-gray-500 dark:text-slate-400"} ${f.label==="Execution & monitoring"?"ml-[-4.00px] mr-[-4.00px]":""}`,children:f.label})},g))}),a.jsx("p",{className:"text-gray-600 dark:text-slate-400 text-base max-w-4xl",children:"The Community Center rebuilding project. We're transforming the old structure into a modern, eco-friendly community center with open spaces, large windows for natural light, and a beautiful garden."})]}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"flex items-center justify-between mb-6 border-b border-gray-200 dark:border-slate-700",children:[a.jsx("nav",{className:"flex h-14 items-center relative flex-1",children:d.map((f,g)=>a.jsx(V.button,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3,delay:g*.05},onClick:()=>e(f.label),className:`flex items-center gap-3 p-3 relative ${f.label===r?"border-b-2 border-blue-500 text-blue-500 dark:text-blue-400":"text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white"} transition-colors duration-200`,"aria-current":f.label===r?"page":void 0,children:a.jsxs("span",{className:"font-medium text-sm whitespace-nowrap",children:[f.label,f.count&&a.jsx("span",{className:"ml-2 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full",children:f.count})]})},g))}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:t?p:h,disabled:s,className:`flex items-center gap-3 px-4 py-2 rounded-xl transition-colors duration-200 ${t?"bg-red-600 hover:bg-red-700 text-white":s?"bg-gray-400 text-white cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 text-white"}`,children:s?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),a.jsx("span",{className:"font-medium text-sm",children:"Connecting..."})]}):t?a.jsxs(a.Fragment,{children:[a.jsx(Rs,{className:"w-4 h-4"}),a.jsx("span",{className:"font-medium text-sm",children:"Disconnect"})]}):a.jsxs(a.Fragment,{children:[a.jsx(_l,{className:"w-4 h-4"}),a.jsx("span",{className:"font-medium text-sm",children:"Connect to Site"})]})}),a.jsxs(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"flex items-center gap-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200",children:[a.jsx(qr,{className:"w-4 h-4"}),a.jsx("span",{className:"font-medium text-sm",children:"Change Order"})]})]})]}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"relative",children:[a.jsxs("div",{className:"absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[a.jsx(ws,{className:"w-4 h-4"}),a.jsx("h3",{className:"font-semibold text-sm",children:"Construction Site"}),t&&a.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("span",{className:"text-gray-300",children:"Points:"}),a.jsx("span",{className:"font-mono font-bold",children:t&&o?o.points.toLocaleString():"39,616,512"})]}),a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("span",{className:"text-gray-300",children:"Active Workers:"}),a.jsx("span",{className:"font-bold",children:t&&o?o.activeWorkers:"24"})]}),a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("span",{className:"text-gray-300",children:"Safety Score:"}),a.jsx("span",{className:"font-bold text-green-400",children:t&&o?`${o.safetyScore}%`:"98%"})]}),a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("span",{className:"text-gray-300",children:"Progress:"}),a.jsx("span",{className:"font-bold text-blue-400",children:t&&o?`${o.progress}%`:"78%"})]}),a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("span",{className:"text-gray-300",children:"Defects Found:"}),a.jsx("span",{className:"font-bold text-red-400",children:t&&o?o.defectsFound:"12"})]}),a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("span",{className:"text-gray-300",children:"AI Detected:"}),a.jsx("span",{className:"font-bold text-purple-400",children:t&&o?o.aiDetected:"8"})]}),a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("span",{className:"text-gray-300",children:"Time Saved:"}),a.jsx("span",{className:"font-bold text-emerald-400",children:t&&o?`${o.timeSaved}h`:"4.2h"})]})]}),a.jsxs(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"mt-3 w-full flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200",children:[a.jsx(dh,{className:"w-3 h-3"}),a.jsx("span",{className:"text-xs font-medium",children:"Filter"})]})]}),a.jsxs("div",{className:"absolute top-4 right-4 z-10 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white",children:[a.jsx("h3",{className:"font-semibold text-sm mb-3",children:"Version History"}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[a.jsx("div",{className:"w-2 h-2 bg-purple-500 rounded-full"}),a.jsx("span",{children:"construction-si..."})]}),a.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[a.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full"}),a.jsx("span",{children:"Unnamed Model"})]})]}),a.jsxs("div",{className:"mt-3 flex items-center gap-2",children:[a.jsx("button",{className:"p-1 hover:bg-white/20 rounded",children:a.jsx(qu,{className:"w-3 h-3"})}),a.jsx("div",{className:"flex-1 bg-gray-600 rounded-full h-1",children:a.jsx("div",{className:"w-1/3 bg-purple-500 h-1 rounded-full"})}),a.jsx("button",{className:"p-1 hover:bg-white/20 rounded",children:a.jsx(id,{className:"w-3 h-3"})}),a.jsx("button",{className:"p-1 hover:bg-white/20 rounded",children:a.jsx(Mi,{className:"w-3 h-3"})})]}),a.jsx("div",{className:"mt-2 text-xs text-gray-400",children:"2015-07"})]}),a.jsxs("div",{className:"relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-2xl",children:[a.jsx("div",{className:"aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center",children:s?a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"}),a.jsx("h3",{className:"text-xl font-semibold text-gray-600 dark:text-slate-400 mb-2",children:"Connecting to Construction Site..."}),a.jsx("p",{className:"text-gray-500 dark:text-slate-500 max-w-md",children:"Establishing secure connection to site monitoring systems and loading real-time data."})]}):t&&o?a.jsx("div",{className:"w-full h-full relative",children:a.jsxs("div",{className:"absolute inset-0",children:[a.jsx("img",{src:"/assets/site_view.webp",alt:"Construction Site Aerial View",className:"w-full h-full object-cover"}),a.jsx("div",{className:"absolute inset-0 bg-black/20"}),a.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,backgroundSize:"20px 20px"}}),o.equipment.map((f,g)=>a.jsx(V.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{duration:.5,delay:g*.2},className:`absolute w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg ${f.status==="active"?"bg-green-500":"bg-yellow-500"}`,style:{left:`${20+g*25}%`,top:`${30+g*15}%`},children:f.name.charAt(0)},f.id)),o.workers.map((f,g)=>a.jsx(V.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{duration:.5,delay:(g+3)*.2},className:"absolute w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg",style:{left:`${15+g*20}%`,top:`${60+g*10}%`},children:f.name.charAt(0)},f.id)),a.jsxs("div",{className:"absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2",children:[a.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-pulse"}),"Live Connection"]}),a.jsxs("div",{className:"absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-xs",children:["Last Update:"," ",new Date(o.lastUpdate).toLocaleTimeString()]})]})}):a.jsxs("div",{className:"text-center",children:[a.jsx(ws,{className:"w-16 h-16 text-gray-400 dark:text-slate-600 mx-auto mb-4"}),a.jsx("h3",{className:"text-xl font-semibold text-gray-600 dark:text-slate-400 mb-2",children:"Construction Site Aerial View"}),a.jsx("p",{className:"text-gray-500 dark:text-slate-500 max-w-md mb-4",children:'Click "Connect to Site" to establish a live connection and view real-time construction site data, equipment tracking, and progress monitoring.'}),a.jsxs("div",{className:"mt-4 flex items-center justify-center gap-2",children:[a.jsx("div",{className:"w-3 h-3 bg-yellow-400 rounded-full"}),a.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded-full"}),a.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),a.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full"})]})]})}),a.jsx("div",{className:"absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsxs(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"flex items-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200",children:[a.jsx(Dr,{className:"w-4 h-4"}),a.jsx("span",{className:"text-sm font-medium",children:"Upload"})]}),a.jsxs(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"flex items-center gap-2 px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200",children:[a.jsx(Wo,{className:"w-4 h-4"}),a.jsx("span",{className:"text-sm font-medium",children:"Zoom Extents"})]}),a.jsxs(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"flex items-center gap-2 px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200",children:[a.jsx(_l,{className:"w-4 h-4"}),a.jsx("span",{className:"text-sm font-medium",children:"Projection"})]}),a.jsxs(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"flex items-center gap-2 px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200",children:[a.jsx(hh,{className:"w-4 h-4"}),a.jsx("span",{className:"text-sm font-medium",children:"Grid"})]}),a.jsxs(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"flex items-center gap-2 px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200",children:[a.jsx(Qr,{className:"w-4 h-4"}),a.jsx("span",{className:"text-sm font-medium",children:"Refresh"})]})]}),a.jsxs(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"flex items-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200",children:[a.jsx(Rs,{className:"w-4 h-4"}),a.jsx("span",{className:"text-sm font-medium",children:"Close"})]})]})})]})]}),a.jsx(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-6",children:u.map((f,g)=>{const y=f.icon,x=()=>{if(t&&o)switch(f.label){case"Points":return o.points.toLocaleString();case"Active Workers":return o.activeWorkers.toString();case"Safety Score":return`${o.safetyScore}%`;case"Progress":return`${o.progress}%`;case"Defects Found":return o.defectsFound.toString();case"AI Detected":return o.aiDetected.toString();case"Time Saved":return`${o.timeSaved}h`;default:return f.value}return f.value};return a.jsxs(V.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.3,delay:g*.1},className:`bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50 rounded-xl p-4 text-center transition-all duration-300 ${t?"ring-2 ring-green-500/20 shadow-lg shadow-green-500/10":""}`,children:[a.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-2",children:a.jsx(y,{className:"w-4 h-4 text-blue-400"})}),a.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-1",children:x()}),a.jsx("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:f.label}),t&&a.jsxs("div",{className:"mt-2 flex items-center justify-center gap-1",children:[a.jsx("div",{className:"w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"}),a.jsx("span",{className:"text-xs text-green-500 font-medium",children:"Live"})]})]},g)})})]})})},zf=(r,e,t,n,s)=>{const i=r.getChannelData(0),o=t/(n+s),l=Math.floor(i.length/o),c=e/2;let d=[],u=0;for(let h=0;h<o;h++){const p=[];let f=0;const g=[];let y=0;for(let v=0;v<l&&h*l+v<r.length;v++){const S=i[h*l+v];S<=0&&(p.push(S),f++),S>0&&(g.push(S),y++)}const x=p.reduce((v,S)=>v+S,0)/f,m={max:g.reduce((v,S)=>v+S,0)/y,min:x};m.max>u&&(u=m.max),Math.abs(m.min)>u&&(u=Math.abs(m.min)),d.push(m)}if(c*.8>u*c){const h=c*.8/u;d=d.map(p=>({max:p.max*h,min:p.min*h}))}return d},aa=(r,e,t,n,s,i,o,l=0,c=1)=>{const d=e.height/2,u=e.getContext("2d");if(!u)return;u.clearRect(0,0,e.width,e.height),s!=="transparent"&&(u.fillStyle=s,u.fillRect(0,0,e.width,e.height));const h=(l||0)/c;r.forEach((p,f)=>{const g=f/r.length,y=h>g;u.fillStyle=y&&o?o:i;const x=f*(t+n),m=d+p.min,v=t,S=d+p.max-m;u.beginPath(),u.roundRect?(u.roundRect(x,m,v,S,50),u.fill()):u.fillRect(x,m,v,S)})},xd=J.forwardRef(({blob:r,width:e,height:t,barWidth:n=2,gap:s=1,currentTime:i,style:o,backgroundColor:l="transparent",barColor:c="rgb(184, 184, 184)",barPlayedColor:d="rgb(160, 198, 255)"},u)=>{const h=J.useRef(null),[p,f]=J.useState([]),[g,y]=J.useState(0);return J.useImperativeHandle(u,()=>h.current,[]),J.useEffect(()=>{(async()=>{if(!h.current)return;if(!r){const m=Array.from({length:100},()=>({max:0,min:0}));aa(m,h.current,n,s,l,c,d);return}const x=await r.arrayBuffer();await new AudioContext().decodeAudioData(x,m=>{if(!h.current)return;y(m.duration);const v=zf(m,t,e,n,s);f(v),aa(v,h.current,n,s,l,c,d)})})()},[r,h.current]),J.useEffect(()=>{h.current&&aa(p,h.current,n,s,l,c,d,i,g)},[i,g]),a.jsx("canvas",{ref:h,width:e,height:t,style:{...o}})});xd.displayName="AudioVisualizer";const Hf=({isOpen:r,onClose:e,defect:t,onSync:n,mode:s})=>{const i=["Team Member 1","Team Member 2","Team Member 3","Team Member 4"],o=["Site A","Site B","Site C","Site D"],l=["02-750-02-750","03-300-03-300","05-500-05-500","08-100-08-100"];if(!t)return null;const c=()=>{n(t),e()};return a.jsx(Vt,{children:r&&a.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto",onClick:e,children:a.jsxs(V.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-2xl w-full min-h-[50vh] max-h-[95vh] sm:max-h-[90vh] flex flex-col my-4",onClick:d=>d.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-slate-700 flex-shrink-0",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg",children:a.jsx("img",{src:"https://companieslogo.com/img/orig/PCOR-33258035.png?t=1720244493",alt:"Procore",className:"w-6 h-6 object-contain"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:s==="sync"?"Sync to Procore":"View/Edit Procore Entry"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-slate-400",children:s==="sync"?"Create defect entry in Procore":`Procore ID: ${t.procoreEntryId||"N/A"}`})]})]}),a.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200",children:a.jsx(Rs,{className:"w-5 h-5 text-gray-500 dark:text-slate-400"})})]}),a.jsxs("div",{className:"flex-1 min-h-0 overflow-y-auto custom-scrollbar smooth-scroll p-4 sm:p-6 space-y-4 sm:space-y-6",style:{scrollbarWidth:"thin"},children:[t.image&&a.jsx("div",{className:"rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700",children:a.jsx("img",{src:t.image,alt:t.title,className:"w-full h-48 object-cover"})}),a.jsxs("div",{className:"bg-gray-50 dark:bg-slate-700 rounded-lg p-4",children:[a.jsx("h4",{className:"font-medium text-gray-900 dark:text-white mb-2",children:"Defect Summary"}),a.jsxs("div",{className:"space-y-2 text-sm",children:[a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{className:"text-gray-600 dark:text-slate-400",children:"Title:"}),a.jsx("span",{className:"text-gray-900 dark:text-white font-medium",children:t.title})]}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{className:"text-gray-600 dark:text-slate-400",children:"Type:"}),a.jsx("span",{className:"text-gray-900 dark:text-white",children:t.type})]}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{className:"text-gray-600 dark:text-slate-400",children:"Severity:"}),a.jsx("span",{className:"text-gray-900 dark:text-white capitalize",children:t.severity})]}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{className:"text-gray-600 dark:text-slate-400",children:"Status:"}),a.jsx("span",{className:"text-gray-900 dark:text-white capitalize",children:t.status})]})]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"font-medium text-gray-900 dark:text-white",children:"Procore Information"}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1",children:"Due Date"}),a.jsx("input",{type:"date",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white",defaultValue:t.dueDate||new Date(Date.now()+10080*60*1e3).toISOString().split("T")[0]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1",children:"Ball in Court"}),a.jsx("select",{className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white",defaultValue:t.ballInCourt,children:i.map(d=>a.jsx("option",{value:d,children:d},d))})]}),a.jsxs("div",{className:"sm:col-span-2",children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1",children:"Location"}),a.jsx("select",{className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white",defaultValue:t.procoreLocation,children:o.map(d=>a.jsx("option",{value:d,children:d},d))})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1",children:"Trade"}),a.jsxs("select",{className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white",defaultValue:t.trade,children:[a.jsx("option",{children:"General"}),a.jsx("option",{children:"Electrical"}),a.jsx("option",{children:"Plumbing"}),a.jsx("option",{children:"HVAC"}),a.jsx("option",{children:"Concrete"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1",children:"Priority"}),a.jsxs("select",{className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white",defaultValue:t.severity,children:[a.jsx("option",{value:"low",children:"Low"}),a.jsx("option",{value:"medium",children:"Medium"}),a.jsx("option",{value:"high",children:"High"}),a.jsx("option",{value:"critical",children:"Critical"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1",children:"Schedule Impact"}),a.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white",defaultValue:t.scheduleImpact})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1",children:"Cost Impact"}),a.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white",defaultValue:t.costImpact})]}),a.jsxs("div",{className:"sm:col-span-2",children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1",children:"Cost Code"}),a.jsx("select",{className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white",defaultValue:t.costCode,children:l.map(d=>a.jsx("option",{value:d,children:d},d))})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1",children:"Description"}),a.jsx("textarea",{className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white",rows:3,defaultValue:t.description})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1",children:"Assignees"}),a.jsx("select",{multiple:!0,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white",defaultValue:t.assignees,children:i.map(d=>a.jsx("option",{value:d,children:d},d))})]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"font-medium text-gray-900 dark:text-white",children:"Sync Options"}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("label",{className:"flex items-center gap-3",children:[a.jsx("input",{type:"checkbox",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",defaultChecked:!0}),a.jsx("span",{className:"text-sm text-gray-700 dark:text-slate-300",children:"Include defect images and audio descriptions"})]}),a.jsxs("label",{className:"flex items-center gap-3",children:[a.jsx("input",{type:"checkbox",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),a.jsx("span",{className:"text-sm text-gray-700 dark:text-slate-300",children:"Schedule inspection for next site visit"})]})]})]})]}),a.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 p-4 sm:p-6 border-t border-gray-200 dark:border-slate-700 flex-shrink-0",children:[a.jsx("button",{onClick:e,className:"px-4 py-2 text-sm font-medium text-gray-700 dark:text-slate-300 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200",children:"Cancel"}),a.jsxs("button",{onClick:c,className:"px-4 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2",children:[s==="sync"?a.jsx(qa,{className:"w-4 h-4"}):a.jsx(ld,{className:"w-4 h-4"}),s==="sync"?"Sync to Procore":"Update Entry"]})]})]})})})},Vf=({isOpen:r,onClose:e,onSave:t})=>{const[n,s]=J.useState("camera"),[i,o]=J.useState(null),[l,c]=J.useState(!1),[d,u]=J.useState(null),[h,p]=J.useState(null),[f,g]=J.useState(!1),[y,x]=J.useState({type:"door",severity:"low",title:"",description:"",location:{x:50,y:50,z:0},assignedTo:"",dueDate:"",ballInCourt:"",procoreLocation:"",trade:"",scheduleImpact:"",costImpact:"",costCode:""}),m=J.useRef(null),v=J.useRef(null),S=J.useRef(null),b=J.useRef(null),_=J.useRef(null),M=[{value:"door",label:"Door",icon:"🚪"},{value:"ceiling",label:"Ceiling",icon:"🏠"},{value:"wall",label:"Wall",icon:"🧱"},{value:"sprinkler",label:"Sprinkler",icon:"🚿"},{value:"electrical",label:"Electrical",icon:"⚡"}],w=[{value:"low",label:"Low",color:"bg-blue-500"},{value:"medium",label:"Medium",color:"bg-yellow-500"},{value:"high",label:"High",color:"bg-orange-500"},{value:"critical",label:"Critical",color:"bg-red-500"}],T=["Concrete","Electrical","Plumbing","HVAC","Painting","Flooring","Drywall","Roofing","Other"],C=["Mateo Lopez","Becca Lawson","Dylan Noble","Sarah Johnson","Mike Chen"];J.useEffect(()=>(r&&n==="camera"?A():R(),()=>{R()}),[r,n]);const A=async()=>{try{const q=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});_.current=q,m.current&&(m.current.srcObject=q)}catch(q){console.error("Error accessing camera:",q),alert("Unable to access camera. Please check permissions.")}},R=()=>{_.current&&(_.current.getTracks().forEach(q=>q.stop()),_.current=null)},D=()=>{if(m.current&&v.current){const q=v.current,pe=m.current,Te=q.getContext("2d");if(q.width=pe.videoWidth,q.height=pe.videoHeight,Te){Te.drawImage(pe,0,0);const Se=q.toDataURL("image/jpeg",.8);o(Se),s("details")}}},I=async()=>{try{const q=await navigator.mediaDevices.getUserMedia({audio:!0}),pe=new MediaRecorder(q);S.current=pe;const Te=[];pe.ondataavailable=Se=>{Te.push(Se.data)},pe.onstop=()=>{const Se=new Blob(Te,{type:"audio/webm"});u(Se);const Fe=URL.createObjectURL(Se);p(Fe),q.getTracks().forEach(K=>K.stop())},pe.start(),c(!0)}catch(q){console.error("Error accessing microphone:",q),alert("Unable to access microphone. Please check permissions.")}},U=()=>{S.current&&l&&(S.current.stop(),c(!1))},j=()=>{h&&b.current&&(f?(b.current.pause(),g(!1)):(b.current.play(),g(!0)))},P=(q,pe)=>{x(Te=>({...Te,[q]:pe}))},X=q=>{const pe=q.currentTarget.getBoundingClientRect(),Te=(q.clientX-pe.left)/pe.width*100,Se=(q.clientY-pe.top)/pe.height*100;P("location",{x:Te,y:Se,z:0})},z=()=>{const q={...y,image:i||void 0,audioDescription:h||void 0,status:"open",detectedBy:"manual",procoreSyncStatus:"not-synced"};t(q),e(),Q()},Q=()=>{s("camera"),o(null),u(null),p(null),g(!1),x({type:"door",severity:"low",title:"",description:"",location:{x:50,y:50,z:0},assignedTo:"",dueDate:"",ballInCourt:"",procoreLocation:"",trade:"",scheduleImpact:"",costImpact:"",costCode:""})},ie=()=>{R(),e(),Q()};return a.jsx(Vt,{children:r&&a.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:ie,children:a.jsxs(V.div,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},className:"bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden",onClick:q=>q.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center",children:a.jsx(fn,{className:"w-5 h-5 text-white"})}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Add New Defect"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-slate-400",children:n==="camera"?"Capture defect image":"Enter defect details"})]})]}),a.jsx("button",{onClick:ie,className:"p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200",children:a.jsx(Rs,{className:"w-5 h-5 text-gray-500 dark:text-slate-400"})})]}),a.jsx("div",{className:"p-6 overflow-y-auto max-h-[calc(90vh-140px)] custom-scrollbar smooth-scroll scroll-indicator",children:n==="camera"?a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"relative bg-gray-100 dark:bg-slate-700 rounded-xl overflow-hidden aspect-video",children:[a.jsx("video",{ref:m,autoPlay:!0,playsInline:!0,className:"w-full h-full object-cover"}),a.jsx("canvas",{ref:v,className:"hidden"}),a.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4",children:a.jsx("button",{onClick:D,className:"w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-200",children:a.jsx(nd,{className:"w-8 h-8 text-gray-700"})})}),a.jsx("div",{className:"absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg text-sm",children:"Position the defect in frame and tap the camera button"})]}),a.jsxs("div",{className:"bg-gray-50 dark:bg-slate-700 rounded-xl p-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(fd,{className:"w-5 h-5 text-blue-500"}),a.jsx("span",{className:"font-medium text-gray-900 dark:text-white",children:"Audio Description"})]}),h&&a.jsxs("button",{onClick:j,className:"flex items-center gap-1 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition-colors duration-200",children:[f?a.jsx(td,{className:"w-4 h-4"}):a.jsx(Mi,{className:"w-4 h-4"}),f?"Pause":"Play"]})]}),a.jsxs("div",{className:"flex items-center gap-3",children:[l?a.jsxs("button",{onClick:U,className:"flex items-center gap-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200",children:[a.jsx(kh,{className:"w-4 h-4"}),"Stop Recording"]}):a.jsxs("button",{onClick:I,className:"flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200",children:[a.jsx(rd,{className:"w-4 h-4"}),"Start Recording"]}),h&&a.jsx("span",{className:"text-sm text-green-600 dark:text-green-400",children:"✓ Audio recorded"})]})]}),a.jsx("div",{className:"flex justify-end",children:a.jsx("button",{onClick:()=>s("details"),className:"px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200",children:"Continue to Details"})})]}):a.jsxs("div",{className:"space-y-6",children:[i&&a.jsxs("div",{className:"bg-gray-50 dark:bg-slate-700 rounded-xl p-4",children:[a.jsx("h3",{className:"font-medium text-gray-900 dark:text-white mb-3",children:"Captured Image"}),a.jsxs("div",{className:"relative",children:[a.jsx("img",{src:i,alt:"Captured defect",className:"w-full max-w-md h-48 object-cover rounded-lg"}),a.jsx("button",{onClick:()=>s("camera"),className:"absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200",children:a.jsx(Qr,{className:"w-4 h-4 text-gray-600"})})]})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"Basic Information"}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2",children:"Defect Type"}),a.jsx("div",{className:"grid grid-cols-2 gap-2",children:M.map(q=>a.jsxs("button",{onClick:()=>P("type",q.value),className:`p-3 rounded-lg border-2 transition-all duration-200 ${y.type===q.value?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500"}`,children:[a.jsx("div",{className:"text-2xl mb-1",children:q.icon}),a.jsx("div",{className:"text-sm font-medium text-gray-900 dark:text-white",children:q.label})]},q.value))})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2",children:"Severity Level"}),a.jsx("div",{className:"grid grid-cols-2 gap-2",children:w.map(q=>a.jsx("button",{onClick:()=>P("severity",q.value),className:`p-3 rounded-lg border-2 transition-all duration-200 ${y.severity===q.value?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500"}`,children:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:`w-3 h-3 rounded-full ${q.color}`}),a.jsx("span",{className:"text-sm font-medium text-gray-900 dark:text-white",children:q.label})]})},q.value))})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2",children:"Title *"}),a.jsx("input",{type:"text",value:y.title,onChange:q=>P("title",q.target.value),placeholder:"Enter defect title",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2",children:"Description *"}),a.jsx("textarea",{value:y.description,onChange:q=>P("description",q.target.value),placeholder:"Describe the defect in detail",rows:3,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"Location & Assignment"}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2",children:"Location on Floor Plan"}),a.jsxs("div",{className:"relative w-full h-48 bg-gray-100 dark:bg-slate-700 rounded-lg cursor-crosshair overflow-hidden",onClick:X,children:[a.jsx("img",{src:"/assets/defect_media/floorplans/floorplan_example.jpg",alt:"Floor plan",className:"w-full h-full object-contain"}),a.jsx("div",{className:"absolute w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg transform -translate-x-2 -translate-y-2",style:{left:`${y.location.x}%`,top:`${y.location.y}%`}}),a.jsx("div",{className:"absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs",children:"Click to set location"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2",children:"Assigned To"}),a.jsxs("select",{value:y.assignedTo,onChange:q=>P("assignedTo",q.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500",children:[a.jsx("option",{value:"",children:"Select assignee"}),C.map(q=>a.jsx("option",{value:q,children:q},q))]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2",children:"Ball in Court"}),a.jsxs("select",{value:y.ballInCourt,onChange:q=>P("ballInCourt",q.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500",children:[a.jsx("option",{value:"",children:"Select responsible party"}),C.map(q=>a.jsx("option",{value:q,children:q},q))]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2",children:"Trade"}),a.jsxs("select",{value:y.trade,onChange:q=>P("trade",q.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500",children:[a.jsx("option",{value:"",children:"Select trade"}),T.map(q=>a.jsx("option",{value:q,children:q},q))]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2",children:"Due Date"}),a.jsx("input",{type:"date",value:y.dueDate,onChange:q=>P("dueDate",q.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"Additional Details"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2",children:"Procore Location"}),a.jsx("input",{type:"text",value:y.procoreLocation,onChange:q=>P("procoreLocation",q.target.value),placeholder:"e.g., Site A > Main Entrance",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2",children:"Schedule Impact"}),a.jsxs("select",{value:y.scheduleImpact,onChange:q=>P("scheduleImpact",q.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500",children:[a.jsx("option",{value:"",children:"Select impact"}),a.jsx("option",{value:"No",children:"No Impact"}),a.jsx("option",{value:"Minor",children:"Minor Delay"}),a.jsx("option",{value:"Major",children:"Major Delay"}),a.jsx("option",{value:"Critical",children:"Critical Delay"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2",children:"Cost Impact"}),a.jsxs("select",{value:y.costImpact,onChange:q=>P("costImpact",q.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500",children:[a.jsx("option",{value:"",children:"Select impact"}),a.jsx("option",{value:"TBD",children:"To Be Determined"}),a.jsx("option",{value:"Low",children:"Low Cost"}),a.jsx("option",{value:"Medium",children:"Medium Cost"}),a.jsx("option",{value:"High",children:"High Cost"})]})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2",children:"Cost Code"}),a.jsx("input",{type:"text",value:y.costCode,onChange:q=>P("costCode",q.target.value),placeholder:"e.g., 02-750-02-750",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]}),a.jsxs("div",{className:"flex justify-between pt-6 border-t border-gray-200 dark:border-slate-700",children:[a.jsx("button",{onClick:()=>s("camera"),className:"px-6 py-3 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200",children:"Back to Camera"}),a.jsxs("button",{onClick:z,disabled:!y.title||!y.description,className:"px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2",children:[a.jsx(ld,{className:"w-4 h-4"}),"Save Defect"]})]})]})}),h&&a.jsx("audio",{ref:b,src:h,onEnded:()=>g(!1),onPause:()=>g(!1),onPlay:()=>g(!0)})]})})})},Gf=({isOpen:r,onClose:e,onUpload:t,isUploading:n})=>{const[s,i]=J.useState(!1),[o,l]=J.useState([]),[c,d]=J.useState([]),u=J.useRef(null),h=J.useCallback(S=>{S.preventDefault(),S.stopPropagation(),S.type==="dragenter"||S.type==="dragover"?i(!0):S.type==="dragleave"&&i(!1)},[]),p=J.useCallback(S=>{if(S.preventDefault(),S.stopPropagation(),i(!1),S.dataTransfer.files&&S.dataTransfer.files[0]){const b=Array.from(S.dataTransfer.files).filter(_=>_.type.startsWith("video/"));f(b)}},[]),f=S=>{const b=S.filter(M=>M.type.startsWith("video/"));l(M=>[...M,...b]);const _=b.map(M=>URL.createObjectURL(M));d(M=>[...M,..._])},g=S=>{if(S.target.files){const b=Array.from(S.target.files);f(b)}},y=S=>{l(b=>b.filter((_,M)=>M!==S)),d(b=>(URL.revokeObjectURL(b[S]),b.filter((_,M)=>M!==S)))},x=async()=>{o.length!==0&&(await t(o),m())},m=()=>{l([]),c.forEach(S=>URL.revokeObjectURL(S)),d([]),i(!1)},v=()=>{m(),e()};return a.jsx(Vt,{children:r&&a.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:v,children:a.jsxs(V.div,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},className:"bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden",onClick:S=>S.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center",children:a.jsx(Dr,{className:"w-5 h-5 text-white"})}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Upload Video for AI Analysis"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-slate-400",children:"Upload video files to automatically identify defects and build a 3D model"})]})]}),a.jsx("button",{onClick:v,disabled:n,className:"p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200 disabled:opacity-50",children:a.jsx(Rs,{className:"w-5 h-5 text-gray-500 dark:text-slate-400"})})]}),a.jsxs("div",{className:"p-6 overflow-y-auto max-h-[calc(90vh-140px)] custom-scrollbar smooth-scroll scroll-indicator",children:[a.jsx("div",{className:"mb-6",children:a.jsx("div",{className:"bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700/30 rounded-lg p-4",children:a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center",children:a.jsx(Cs,{className:"w-4 h-4 text-white"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("h4",{className:"font-semibold text-purple-900 dark:text-purple-100 mb-1",children:"AI-Powered Analysis"}),a.jsx("p",{className:"text-sm text-purple-700 dark:text-purple-300",children:"Our AI will analyze your video to automatically detect defects, assess severity levels, and generate a detailed 3D model of the space. The process typically takes 2-5 minutes."})]})]})})}),a.jsxs("div",{className:`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${s?"border-purple-500 bg-purple-50 dark:bg-purple-900/20":"border-gray-300 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-500"}`,onDragEnter:h,onDragLeave:h,onDragOver:h,onDrop:p,children:[a.jsx("input",{ref:u,type:"file",accept:"video/*",multiple:!0,onChange:g,className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer",disabled:n}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:"w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full flex items-center justify-center mx-auto",children:a.jsx(gh,{className:"w-8 h-8 text-purple-500"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:s?"Drop video here":"Upload Video"}),a.jsx("p",{className:"text-gray-600 dark:text-slate-400 mb-4",children:"Drag and drop your video files here, or click to browse"}),a.jsx("p",{className:"text-sm text-gray-500 dark:text-slate-500",children:"Supports MP4, MOV, AVI formats • Video recommended for comprehensive analysis"})]}),a.jsx("button",{onClick:()=>{var S;return(S=u.current)==null?void 0:S.click()},disabled:n,className:"px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-purple-400 disabled:to-pink-400 text-white rounded-lg font-medium transition-all duration-200 disabled:cursor-not-allowed",children:"Choose Video"})]})]}),o.length>0&&a.jsxs("div",{className:"mt-6",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:["Selected Videos (",o.length,")"]}),a.jsx("button",{onClick:()=>{c.forEach(S=>URL.revokeObjectURL(S)),l([]),d([])},disabled:n,className:"text-sm text-red-500 hover:text-red-600 disabled:opacity-50",children:"Clear All"})]}),a.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:o.map((S,b)=>a.jsxs("div",{className:"relative group bg-gray-50 dark:bg-slate-700 rounded-lg overflow-hidden",children:[a.jsx("video",{src:c[b],className:"w-full h-32 object-cover",muted:!0}),a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center",children:a.jsxs("div",{className:"opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2",children:[a.jsx("button",{onClick:()=>{const _=URL.createObjectURL(S);window.open(_,"_blank")},className:"p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200",children:a.jsx(Es,{className:"w-4 h-4"})}),a.jsx("button",{onClick:()=>y(b),disabled:n,className:"p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 disabled:opacity-50",children:a.jsx(ud,{className:"w-4 h-4"})})]})}),a.jsxs("div",{className:"p-2",children:[a.jsx("p",{className:"text-xs text-gray-600 dark:text-slate-400 truncate",children:S.name}),a.jsxs("p",{className:"text-xs text-gray-500 dark:text-slate-500",children:[(S.size/1024/1024).toFixed(2)," MB"]})]})]},b))})]}),n&&a.jsx("div",{className:"mt-6",children:a.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/30 rounded-lg p-4",children:a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(Pr,{className:"w-5 h-5 text-blue-500 animate-spin"}),a.jsxs("div",{className:"flex-1",children:[a.jsx("h4",{className:"font-semibold text-blue-900 dark:text-blue-100",children:"Processing Video"}),a.jsx("p",{className:"text-sm text-blue-700 dark:text-blue-300",children:"AI is analyzing your video for defects and building a 3D model. This may take a few minutes..."})]})]})})})]}),a.jsxs("div",{className:"flex justify-between items-center p-6 border-t border-gray-200 dark:border-slate-700",children:[a.jsx("div",{className:"text-sm text-gray-500 dark:text-slate-400",children:o.length>0&&a.jsxs("span",{children:[o.length," video",o.length!==1?"s":""," selected"]})}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:v,disabled:n,className:"px-6 py-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200 disabled:opacity-50",children:"Cancel"}),a.jsx("button",{onClick:x,disabled:o.length===0||n,className:"px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-purple-400 disabled:to-pink-400 text-white rounded-lg font-medium transition-all duration-200 disabled:cursor-not-allowed flex items-center gap-2",children:n?a.jsxs(a.Fragment,{children:[a.jsx(Pr,{className:"w-4 h-4 animate-spin"}),"Processing..."]}):a.jsxs(a.Fragment,{children:[a.jsx(Dr,{className:"w-4 h-4"}),"Upload & Analyze"]})})]})]})]})})})},Wf=({defects:r,onDefectClick:e,onEmptySpaceClick:t,getSeverityColor:n,getTypeIcon:s,highlightedDefects:i=[],hoveredDefect:o,onDefectHover:l})=>{const c=J.useRef(null),[d,u]=J.useState({x:0,y:0,scale:1}),[h,p]=J.useState(!1),[f,g]=J.useState({x:0,y:0}),[y,x]=J.useState({width:0,height:0}),[m,v]=J.useState(!1),S=J.useCallback(()=>{const Q=Math.min(y.width/800,1),ie=Math.min(d.scale,2),q=Math.max(16,Math.min(48,32*Q*ie));return Math.round(q)},[y.width,d.scale]);J.useEffect(()=>{const P=()=>{if(c.current){const X=c.current.getBoundingClientRect();x({width:X.width,height:X.height})}};return P(),window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[]);const b=J.useCallback(P=>{P.preventDefault();const X=P.deltaY>0?.9:1.1;u(z=>{var q;const Q=Math.max(.5,Math.min(3,z.scale*X)),ie=(q=c.current)==null?void 0:q.getBoundingClientRect();if(ie){const pe=P.clientX-ie.left,Te=P.clientY-ie.top,Se=pe-(pe-z.x)*(Q/z.scale),Fe=Te-(Te-z.y)*(Q/z.scale);return{x:Se,y:Fe,scale:Q}}return z})},[]);J.useEffect(()=>{const P=c.current;if(P)return P.addEventListener("wheel",b,{passive:!1}),()=>{P.removeEventListener("wheel",b)}},[b]);const _=J.useCallback(P=>{(m||P.button===1)&&(P.preventDefault(),p(!0),g({x:P.clientX-d.x,y:P.clientY-d.y}))},[m,d.x,d.y]),M=J.useCallback(P=>{h&&u(X=>({...X,x:P.clientX-f.x,y:P.clientY-f.y}))},[h,f]),w=J.useCallback(()=>{p(!1)},[]),T=J.useCallback(P=>{m&&P.touches.length===1&&(P.preventDefault(),p(!0),g({x:P.touches[0].clientX-d.x,y:P.touches[0].clientY-d.y}))},[m,d.x,d.y]),C=J.useCallback(P=>{h&&P.touches.length===1&&(P.preventDefault(),u(X=>({...X,x:P.touches[0].clientX-f.x,y:P.touches[0].clientY-f.y})))},[h,f]),A=J.useCallback(()=>{p(!1)},[]),R=J.useCallback(P=>{var z;if(h)return;const X=(z=c.current)==null?void 0:z.getBoundingClientRect();if(X){const Q=(P.clientX-X.left-d.x)/d.scale/X.width*100,ie=(P.clientY-X.top-d.y)/d.scale/X.height*100,q=r.find(pe=>{const Te=pe.location.x,Se=pe.location.y,K=S()/2/X.width*100;return Math.abs(Q-Te)<K&&Math.abs(ie-Se)<K});q?e(q):t({x:Q,y:ie})}},[h,d,r,e,t,S]),D=J.useCallback(()=>{u({x:0,y:0,scale:1})},[]),I=J.useCallback(()=>{u(P=>({...P,scale:Math.min(3,P.scale*1.2)}))},[]),U=J.useCallback(()=>{u(P=>({...P,scale:Math.max(.5,P.scale*.8)}))},[]),j=S();return a.jsxs("div",{className:"relative bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-800 rounded-xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px] md:h-[600px]",children:[a.jsxs("div",{className:"absolute top-4 right-4 z-20 flex flex-col gap-2",children:[a.jsxs("div",{className:"flex gap-1",children:[a.jsx(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:I,className:"p-2 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200",title:"Zoom In",children:a.jsx(Wo,{className:"w-4 h-4 text-gray-600 dark:text-slate-400"})}),a.jsx(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:U,className:"p-2 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200",title:"Zoom Out",children:a.jsx(md,{className:"w-4 h-4 text-gray-600 dark:text-slate-400"})}),a.jsx(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:D,className:"p-2 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200",title:"Reset View",children:a.jsx(Qr,{className:"w-4 h-4 text-gray-600 dark:text-slate-400"})})]}),a.jsx(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>v(!m),className:`p-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ${m?"bg-blue-500 text-white":"bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-400"}`,title:m?"Exit Pan Mode":"Pan Mode",children:a.jsx(Hh,{className:"w-4 h-4"})})]}),a.jsx("div",{ref:c,className:"relative w-full h-full bg-white rounded-xl overflow-hidden cursor-crosshair",onMouseDown:_,onMouseMove:M,onMouseUp:w,onMouseLeave:w,onClick:R,onTouchStart:T,onTouchMove:C,onTouchEnd:A,style:{cursor:m?"grab":"crosshair",touchAction:m?"none":"auto"},children:a.jsx("div",{className:"absolute inset-0 w-full h-full flex items-center justify-center",style:{transform:`translate(${d.x}px, ${d.y}px) scale(${d.scale})`,transformOrigin:"0 0",transition:h?"none":"transform 0.1s ease-out"},children:a.jsxs("div",{className:"relative w-full h-auto aspect-[2/1]",children:[a.jsx("img",{src:"/assets/defect_media/floorplans/floorplan_example.jpg",alt:"Floorplan",className:"absolute inset-0 w-full h-full object-contain",draggable:!1}),r.map((P,X)=>a.jsx(V.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{duration:.5,delay:X*.1},className:`absolute rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg cursor-pointer transition-all duration-300 ${i.includes(P.id)?"ring-4 ring-yellow-400 ring-opacity-75 scale-125":n(P.severity)}`,style:{left:`${P.location.x}%`,top:`${P.location.y}%`,width:`${j}px`,height:`${j}px`,transform:"translate(-50%, -50%)",zIndex:1e3},onMouseEnter:()=>l==null?void 0:l(P),onMouseLeave:()=>l==null?void 0:l(null),onClick:z=>{z.stopPropagation(),e(P)},children:s(P.type)},P.id))]})})}),a.jsxs("div",{className:"absolute bottom-4 right-4 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg max-w-xs z-10",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[a.jsx(Es,{className:"w-4 h-4 text-blue-500"}),a.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-slate-300",children:"Interaction Guide"})]}),a.jsxs("div",{className:"space-y-1 text-xs text-gray-600 dark:text-slate-400",children:[a.jsx("p",{children:"• Click on an icon to view defects"}),a.jsx("p",{children:"• Click on empty space to add defects"}),a.jsx("p",{children:"• Use mouse wheel to zoom"}),a.jsx("p",{children:"• Toggle pan mode to drag around"}),a.jsx("p",{children:"• Icons scale with canvas size"})]})]}),a.jsx(Vt,{children:o&&a.jsxs(V.div,{initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.95},className:"absolute bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg max-w-sm z-20 pointer-events-none",style:{left:`${o.location.x}%`,top:`${o.location.y}%`,transform:"translate(20px, -50%)"},children:[a.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[a.jsx("div",{className:`w-3 h-3 rounded-full ${n(o.severity)}`}),a.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-white",children:o.type})]}),a.jsx("p",{className:"text-xs text-gray-600 dark:text-slate-400",children:o.description||"No description available"})]})})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xo="180",Ds={ROTATE:0,DOLLY:1,PAN:2},Ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xf=0,Nl=1,qf=2,yd=1,Qf=2,jn=3,In=0,Yt=1,un=2,ns=0,ss=1,Il=2,Dl=3,Pl=4,vd=5,xs=100,Yf=101,Kf=102,$f=103,Zf=104,Jf=200,ep=201,tp=202,np=203,Fi=204,ki=205,sp=206,ip=207,rp=208,ap=209,op=210,lp=211,cp=212,dp=213,up=214,Qa=0,Ya=1,Ka=2,ii=3,$a=4,Za=5,Ja=6,eo=7,bd=0,hp=1,fp=2,is=0,pp=1,mp=2,gp=3,xp=4,yp=5,vp=6,bp=7,Sd=300,ri=301,ai=302,to=303,no=304,Yr=306,so=1e3,Ss=1001,io=1002,tn=1003,Sp=1004,Zi=1005,Mn=1006,oa=1007,As=1008,Dn=1009,Ad=1010,_d=1011,Bi=1012,qo=1013,hn=1014,bn=1015,fi=1016,Qo=1017,Yo=1018,Li=1020,wd=35902,Cd=35899,Md=1021,Ed=1022,Ht=1023,oi=1026,Ui=1027,Td=1028,Kr=1029,Rd=1030,Ko=1031,Js=1033,Cr=33776,Mr=33777,Er=33778,Tr=33779,ro=35840,ao=35841,oo=35842,lo=35843,co=36196,uo=37492,ho=37496,fo=37808,po=37809,mo=37810,go=37811,xo=37812,yo=37813,vo=37814,bo=37815,So=37816,Ao=37817,_o=37818,wo=37819,Co=37820,Mo=37821,Eo=36492,To=36494,Ro=36495,No=36283,Io=36284,Do=36285,Po=36286,Ap=3200,_p=3201,wp=0,Cp=1,es="",cn="srgb",li="srgb-linear",kr="linear",ut="srgb",Fs=7680,Fl=519,Mp=512,Ep=513,Tp=514,Nd=515,Rp=516,Np=517,Ip=518,Dp=519,kl=35044,Pp=35048,Bl="300 es",En=2e3,Br=2001;class Ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let i=0,o=s.length;i<o;i++)s[i].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rr=Math.PI/180,Fo=180/Math.PI;function Qi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[r&255]+Bt[r>>8&255]+Bt[r>>16&255]+Bt[r>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function et(r,e,t){return Math.max(e,Math.min(t,r))}function Fp(r,e){return(r%e+e)%e}function la(r,e,t){return(1-t)*r+t*e}function yi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Xt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Id={DEG2RAD:Rr};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),i=this.x-e.x,o=this.y-e.y;return this.x=i*n-o*s+e.x,this.y=i*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,i,o,l){let c=n[s+0],d=n[s+1],u=n[s+2],h=n[s+3];const p=i[o+0],f=i[o+1],g=i[o+2],y=i[o+3];if(l===0){e[t+0]=c,e[t+1]=d,e[t+2]=u,e[t+3]=h;return}if(l===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(h!==y||c!==p||d!==f||u!==g){let x=1-l;const m=c*p+d*f+u*g+h*y,v=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const _=Math.sqrt(S),M=Math.atan2(_,m*v);x=Math.sin(x*M)/_,l=Math.sin(l*M)/_}const b=l*v;if(c=c*x+p*b,d=d*x+f*b,u=u*x+g*b,h=h*x+y*b,x===1-l){const _=1/Math.sqrt(c*c+d*d+u*u+h*h);c*=_,d*=_,u*=_,h*=_}}e[t]=c,e[t+1]=d,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,i,o){const l=n[s],c=n[s+1],d=n[s+2],u=n[s+3],h=i[o],p=i[o+1],f=i[o+2],g=i[o+3];return e[t]=l*g+u*h+c*f-d*p,e[t+1]=c*g+u*p+d*h-l*f,e[t+2]=d*g+u*f+l*p-c*h,e[t+3]=u*g-l*h-c*p-d*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,i=e._z,o=e._order,l=Math.cos,c=Math.sin,d=l(n/2),u=l(s/2),h=l(i/2),p=c(n/2),f=c(s/2),g=c(i/2);switch(o){case"XYZ":this._x=p*u*h+d*f*g,this._y=d*f*h-p*u*g,this._z=d*u*g+p*f*h,this._w=d*u*h-p*f*g;break;case"YXZ":this._x=p*u*h+d*f*g,this._y=d*f*h-p*u*g,this._z=d*u*g-p*f*h,this._w=d*u*h+p*f*g;break;case"ZXY":this._x=p*u*h-d*f*g,this._y=d*f*h+p*u*g,this._z=d*u*g+p*f*h,this._w=d*u*h-p*f*g;break;case"ZYX":this._x=p*u*h-d*f*g,this._y=d*f*h+p*u*g,this._z=d*u*g-p*f*h,this._w=d*u*h+p*f*g;break;case"YZX":this._x=p*u*h+d*f*g,this._y=d*f*h+p*u*g,this._z=d*u*g-p*f*h,this._w=d*u*h-p*f*g;break;case"XZY":this._x=p*u*h-d*f*g,this._y=d*f*h-p*u*g,this._z=d*u*g+p*f*h,this._w=d*u*h+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],i=t[8],o=t[1],l=t[5],c=t[9],d=t[2],u=t[6],h=t[10],p=n+l+h;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-c)*f,this._y=(i-d)*f,this._z=(o-s)*f}else if(n>l&&n>h){const f=2*Math.sqrt(1+n-l-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(i+d)/f}else if(l>h){const f=2*Math.sqrt(1+l-n-h);this._w=(i-d)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-l);this._w=(o-s)/f,this._x=(i+d)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,i=e._z,o=e._w,l=t._x,c=t._y,d=t._z,u=t._w;return this._x=n*u+o*l+s*d-i*c,this._y=s*u+o*c+i*l-n*d,this._z=i*u+o*d+n*c-s*l,this._w=o*u-n*l-s*c-i*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,i=this._z,o=this._w;let l=o*e._w+n*e._x+s*e._y+i*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=s,this._z=i,this;const c=1-l*l;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*i+t*this._z,this.normalize(),this}const d=Math.sqrt(c),u=Math.atan2(d,l),h=Math.sin((1-t)*u)/d,p=Math.sin(t*u)/d;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=s*h+this._y*p,this._z=i*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ll.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*s,this.y=i[1]*t+i[4]*n+i[7]*s,this.z=i[2]*t+i[5]*n+i[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,i=e.elements,o=1/(i[3]*t+i[7]*n+i[11]*s+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*s+i[12])*o,this.y=(i[1]*t+i[5]*n+i[9]*s+i[13])*o,this.z=(i[2]*t+i[6]*n+i[10]*s+i[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,i=e.x,o=e.y,l=e.z,c=e.w,d=2*(o*s-l*n),u=2*(l*t-i*s),h=2*(i*n-o*t);return this.x=t+c*d+o*h-l*u,this.y=n+c*u+l*d-i*h,this.z=s+c*h+i*u-o*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*s,this.y=i[1]*t+i[5]*n+i[9]*s,this.z=i[2]*t+i[6]*n+i[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,i=e.z,o=t.x,l=t.y,c=t.z;return this.x=s*c-i*l,this.y=i*o-n*c,this.z=n*l-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ca.copy(this).projectOnVector(e),this.sub(ca)}reflect(e){return this.sub(ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new k,Ll=new vt;class Qe{constructor(e,t,n,s,i,o,l,c,d){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,i,o,l,c,d)}set(e,t,n,s,i,o,l,c,d){const u=this.elements;return u[0]=e,u[1]=s,u[2]=l,u[3]=t,u[4]=i,u[5]=c,u[6]=n,u[7]=o,u[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,i=this.elements,o=n[0],l=n[3],c=n[6],d=n[1],u=n[4],h=n[7],p=n[2],f=n[5],g=n[8],y=s[0],x=s[3],m=s[6],v=s[1],S=s[4],b=s[7],_=s[2],M=s[5],w=s[8];return i[0]=o*y+l*v+c*_,i[3]=o*x+l*S+c*M,i[6]=o*m+l*b+c*w,i[1]=d*y+u*v+h*_,i[4]=d*x+u*S+h*M,i[7]=d*m+u*b+h*w,i[2]=p*y+f*v+g*_,i[5]=p*x+f*S+g*M,i[8]=p*m+f*b+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],o=e[4],l=e[5],c=e[6],d=e[7],u=e[8];return t*o*u-t*l*d-n*i*u+n*l*c+s*i*d-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],o=e[4],l=e[5],c=e[6],d=e[7],u=e[8],h=u*o-l*d,p=l*c-u*i,f=d*i-o*c,g=t*h+n*p+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(s*d-u*n)*y,e[2]=(l*n-s*o)*y,e[3]=p*y,e[4]=(u*t-s*c)*y,e[5]=(s*i-l*t)*y,e[6]=f*y,e[7]=(n*c-d*t)*y,e[8]=(o*t-n*i)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,i,o,l){const c=Math.cos(i),d=Math.sin(i);return this.set(n*c,n*d,-n*(c*o+d*l)+o+e,-s*d,s*c,-s*(-d*o+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(da.makeScale(e,t)),this}rotate(e){return this.premultiply(da.makeRotation(-e)),this}translate(e,t){return this.premultiply(da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const da=new Qe;function Dd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Lr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kp(){const r=Lr("canvas");return r.style.display="block",r}const Ul={};function Oi(r){r in Ul||(Ul[r]=!0,console.warn(r))}function Bp(r,e,t){return new Promise(function(n,s){function i(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:n()}}setTimeout(i,t)})}const Ol=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jl=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lp(){const r={enabled:!0,workingColorSpace:li,spaces:{},convert:function(s,i,o){return this.enabled===!1||i===o||!i||!o||(this.spaces[i].transfer===ut&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[i].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[i].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b))),s},workingToColorSpace:function(s,i){return this.convert(s,this.workingColorSpace,i)},colorSpaceToWorking:function(s,i){return this.convert(s,i,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,i=this.workingColorSpace){return s.fromArray(this.spaces[i].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,i,o){return s.copy(this.spaces[i].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,i){return Oi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,i)},toWorkingColorSpace:function(s,i){return Oi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,i)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[li]:{primaries:e,whitePoint:n,transfer:kr,toXYZ:Ol,fromXYZ:jl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Ol,fromXYZ:jl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),r}const it=Lp();function Hn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ei(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ks;class Up{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ks===void 0&&(ks=Lr("canvas")),ks.width=e.width,ks.height=e.height;const s=ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ks}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Lr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),i=s.data;for(let o=0;o<i.length;o++)i[o]=Hn(i[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Op=0;class $o{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let i;if(Array.isArray(s)){i=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?i.push(ua(s[o].image)):i.push(ua(s[o]))}else i=ua(s);n.url=i}return t||(e.images[this.uuid]=n),n}}function ua(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Up.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jp=0;const ha=new k;class Gt extends Ns{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=Ss,s=Ss,i=Mn,o=As,l=Ht,c=Dn,d=Gt.DEFAULT_ANISOTROPY,u=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Qi(),this.name="",this.source=new $o(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=i,this.minFilter=o,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ha).x}get height(){return this.source.getSize(ha).y}get depth(){return this.source.getSize(ha).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case so:e.x=e.x-Math.floor(e.x);break;case Ss:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case so:e.y=e.y-Math.floor(e.y);break;case Ss:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Sd;Gt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,s=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,i=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*i,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*i,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*i,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,i;const c=e.elements,d=c[0],u=c[4],h=c[8],p=c[1],f=c[5],g=c[9],y=c[2],x=c[6],m=c[10];if(Math.abs(u-p)<.01&&Math.abs(h-y)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+y)<.1&&Math.abs(g+x)<.1&&Math.abs(d+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(d+1)/2,b=(f+1)/2,_=(m+1)/2,M=(u+p)/4,w=(h+y)/4,T=(g+x)/4;return S>b&&S>_?S<.01?(n=0,s=.707106781,i=.707106781):(n=Math.sqrt(S),s=M/n,i=w/n):b>_?b<.01?(n=.707106781,s=0,i=.707106781):(s=Math.sqrt(b),n=M/s,i=T/s):_<.01?(n=.707106781,s=.707106781,i=0):(i=Math.sqrt(_),n=w/i,s=T/i),this.set(n,s,i,t),this}let v=Math.sqrt((x-g)*(x-g)+(h-y)*(h-y)+(p-u)*(p-u));return Math.abs(v)<.001&&(v=1),this.x=(x-g)/v,this.y=(h-y)/v,this.z=(p-u)/v,this.w=Math.acos((d+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zp extends Ns{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const s={width:e,height:t,depth:n.depth},i=new Gt(s);this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=i.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,i=this.textures.length;s<i;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new $o(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends zp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pd extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hp extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const i=n.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=i.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(i,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ji.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(e.matrixWorld),this.union(Ji)}const s=e.children;for(let i=0,o=s.length;i<o;i++)this.expandByObject(s[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vi),er.subVectors(this.max,vi),Bs.subVectors(e.a,vi),Ls.subVectors(e.b,vi),Us.subVectors(e.c,vi),Wn.subVectors(Ls,Bs),Xn.subVectors(Us,Ls),cs.subVectors(Bs,Us);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-cs.z,cs.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,cs.z,0,-cs.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-cs.y,cs.x,0];return!fa(t,Bs,Ls,Us,er)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,Bs,Ls,Us,er))?!1:(tr.crossVectors(Wn,Xn),t=[tr.x,tr.y,tr.z],fa(t,Bs,Ls,Us,er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fn=[new k,new k,new k,new k,new k,new k,new k,new k],gn=new k,Ji=new Tn,Bs=new k,Ls=new k,Us=new k,Wn=new k,Xn=new k,cs=new k,vi=new k,er=new k,tr=new k,ds=new k;function fa(r,e,t,n,s){for(let i=0,o=r.length-3;i<=o;i+=3){ds.fromArray(r,i);const l=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),c=e.dot(ds),d=t.dot(ds),u=n.dot(ds);if(Math.max(-Math.max(c,d,u),Math.min(c,d,u))>l)return!1}return!0}const Vp=new Tn,bi=new k,pa=new k;class Zo{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vp.setFromPoints(e).getCenter(n);let s=0;for(let i=0,o=e.length;i<o;i++)s=Math.max(s,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bi.subVectors(e,this.center);const t=bi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(bi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bi.copy(e.center).add(pa)),this.expandByPoint(bi.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const kn=new k,ma=new k,nr=new k,qn=new k,ga=new k,sr=new k,xa=new k;let Fd=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ma.copy(e).add(t).multiplyScalar(.5),nr.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(ma);const i=e.distanceTo(t)*.5,o=-this.direction.dot(nr),l=qn.dot(this.direction),c=-qn.dot(nr),d=qn.lengthSq(),u=Math.abs(1-o*o);let h,p,f,g;if(u>0)if(h=o*c-l,p=o*l-c,g=i*u,h>=0)if(p>=-g)if(p<=g){const y=1/u;h*=y,p*=y,f=h*(h+o*p+2*l)+p*(o*h+p+2*c)+d}else p=i,h=Math.max(0,-(o*p+l)),f=-h*h+p*(p+2*c)+d;else p=-i,h=Math.max(0,-(o*p+l)),f=-h*h+p*(p+2*c)+d;else p<=-g?(h=Math.max(0,-(-o*i+l)),p=h>0?-i:Math.min(Math.max(-i,-c),i),f=-h*h+p*(p+2*c)+d):p<=g?(h=0,p=Math.min(Math.max(-i,-c),i),f=p*(p+2*c)+d):(h=Math.max(0,-(o*i+l)),p=h>0?i:Math.min(Math.max(-i,-c),i),f=-h*h+p*(p+2*c)+d);else p=o>0?-i:i,h=Math.max(0,-(o*p+l)),f=-h*h+p*(p+2*c)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ma).addScaledVector(nr,p),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),s=kn.dot(kn)-n*n,i=e.radius*e.radius;if(s>i)return null;const o=Math.sqrt(i-s),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,i,o,l,c;const d=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return d>=0?(n=(e.min.x-p.x)*d,s=(e.max.x-p.x)*d):(n=(e.max.x-p.x)*d,s=(e.min.x-p.x)*d),u>=0?(i=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(i=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),n>o||i>s||((i>n||isNaN(n))&&(n=i),(o<s||isNaN(s))&&(s=o),h>=0?(l=(e.min.z-p.z)*h,c=(e.max.z-p.z)*h):(l=(e.max.z-p.z)*h,c=(e.min.z-p.z)*h),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,s,i){ga.subVectors(t,e),sr.subVectors(n,e),xa.crossVectors(ga,sr);let o=this.direction.dot(xa),l;if(o>0){if(s)return null;l=1}else if(o<0)l=-1,o=-o;else return null;qn.subVectors(this.origin,e);const c=l*this.direction.dot(sr.crossVectors(qn,sr));if(c<0)return null;const d=l*this.direction.dot(ga.cross(qn));if(d<0||c+d>o)return null;const u=-l*qn.dot(xa);return u<0?null:this.at(u/o,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ke{constructor(e,t,n,s,i,o,l,c,d,u,h,p,f,g,y,x){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,i,o,l,c,d,u,h,p,f,g,y,x)}set(e,t,n,s,i,o,l,c,d,u,h,p,f,g,y,x){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=i,m[5]=o,m[9]=l,m[13]=c,m[2]=d,m[6]=u,m[10]=h,m[14]=p,m[3]=f,m[7]=g,m[11]=y,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Os.setFromMatrixColumn(e,0).length(),i=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,i=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(s),d=Math.sin(s),u=Math.cos(i),h=Math.sin(i);if(e.order==="XYZ"){const p=o*u,f=o*h,g=l*u,y=l*h;t[0]=c*u,t[4]=-c*h,t[8]=d,t[1]=f+g*d,t[5]=p-y*d,t[9]=-l*c,t[2]=y-p*d,t[6]=g+f*d,t[10]=o*c}else if(e.order==="YXZ"){const p=c*u,f=c*h,g=d*u,y=d*h;t[0]=p+y*l,t[4]=g*l-f,t[8]=o*d,t[1]=o*h,t[5]=o*u,t[9]=-l,t[2]=f*l-g,t[6]=y+p*l,t[10]=o*c}else if(e.order==="ZXY"){const p=c*u,f=c*h,g=d*u,y=d*h;t[0]=p-y*l,t[4]=-o*h,t[8]=g+f*l,t[1]=f+g*l,t[5]=o*u,t[9]=y-p*l,t[2]=-o*d,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){const p=o*u,f=o*h,g=l*u,y=l*h;t[0]=c*u,t[4]=g*d-f,t[8]=p*d+y,t[1]=c*h,t[5]=y*d+p,t[9]=f*d-g,t[2]=-d,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,f=o*d,g=l*c,y=l*d;t[0]=c*u,t[4]=y-p*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-l*u,t[2]=-d*u,t[6]=f*h+g,t[10]=p-y*h}else if(e.order==="XZY"){const p=o*c,f=o*d,g=l*c,y=l*d;t[0]=c*u,t[4]=-h,t[8]=d*u,t[1]=p*h+y,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=l*u,t[10]=y*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gp,e,Wp)}lookAt(e,t,n){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Qn.crossVectors(n,Zt),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Qn.crossVectors(n,Zt)),Qn.normalize(),ir.crossVectors(Zt,Qn),s[0]=Qn.x,s[4]=ir.x,s[8]=Zt.x,s[1]=Qn.y,s[5]=ir.y,s[9]=Zt.y,s[2]=Qn.z,s[6]=ir.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,i=this.elements,o=n[0],l=n[4],c=n[8],d=n[12],u=n[1],h=n[5],p=n[9],f=n[13],g=n[2],y=n[6],x=n[10],m=n[14],v=n[3],S=n[7],b=n[11],_=n[15],M=s[0],w=s[4],T=s[8],C=s[12],A=s[1],R=s[5],D=s[9],I=s[13],U=s[2],j=s[6],P=s[10],X=s[14],z=s[3],Q=s[7],ie=s[11],q=s[15];return i[0]=o*M+l*A+c*U+d*z,i[4]=o*w+l*R+c*j+d*Q,i[8]=o*T+l*D+c*P+d*ie,i[12]=o*C+l*I+c*X+d*q,i[1]=u*M+h*A+p*U+f*z,i[5]=u*w+h*R+p*j+f*Q,i[9]=u*T+h*D+p*P+f*ie,i[13]=u*C+h*I+p*X+f*q,i[2]=g*M+y*A+x*U+m*z,i[6]=g*w+y*R+x*j+m*Q,i[10]=g*T+y*D+x*P+m*ie,i[14]=g*C+y*I+x*X+m*q,i[3]=v*M+S*A+b*U+_*z,i[7]=v*w+S*R+b*j+_*Q,i[11]=v*T+S*D+b*P+_*ie,i[15]=v*C+S*I+b*X+_*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],i=e[12],o=e[1],l=e[5],c=e[9],d=e[13],u=e[2],h=e[6],p=e[10],f=e[14],g=e[3],y=e[7],x=e[11],m=e[15];return g*(+i*c*h-s*d*h-i*l*p+n*d*p+s*l*f-n*c*f)+y*(+t*c*f-t*d*p+i*o*p-s*o*f+s*d*u-i*c*u)+x*(+t*d*h-t*l*f-i*o*h+n*o*f+i*l*u-n*d*u)+m*(-s*l*u-t*c*h+t*l*p+s*o*h-n*o*p+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],o=e[4],l=e[5],c=e[6],d=e[7],u=e[8],h=e[9],p=e[10],f=e[11],g=e[12],y=e[13],x=e[14],m=e[15],v=h*x*d-y*p*d+y*c*f-l*x*f-h*c*m+l*p*m,S=g*p*d-u*x*d-g*c*f+o*x*f+u*c*m-o*p*m,b=u*y*d-g*h*d+g*l*f-o*y*f-u*l*m+o*h*m,_=g*h*c-u*y*c-g*l*p+o*y*p+u*l*x-o*h*x,M=t*v+n*S+s*b+i*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=v*w,e[1]=(y*p*i-h*x*i-y*s*f+n*x*f+h*s*m-n*p*m)*w,e[2]=(l*x*i-y*c*i+y*s*d-n*x*d-l*s*m+n*c*m)*w,e[3]=(h*c*i-l*p*i-h*s*d+n*p*d+l*s*f-n*c*f)*w,e[4]=S*w,e[5]=(u*x*i-g*p*i+g*s*f-t*x*f-u*s*m+t*p*m)*w,e[6]=(g*c*i-o*x*i-g*s*d+t*x*d+o*s*m-t*c*m)*w,e[7]=(o*p*i-u*c*i+u*s*d-t*p*d-o*s*f+t*c*f)*w,e[8]=b*w,e[9]=(g*h*i-u*y*i-g*n*f+t*y*f+u*n*m-t*h*m)*w,e[10]=(o*y*i-g*l*i+g*n*d-t*y*d-o*n*m+t*l*m)*w,e[11]=(u*l*i-o*h*i-u*n*d+t*h*d+o*n*f-t*l*f)*w,e[12]=_*w,e[13]=(u*y*s-g*h*s+g*n*p-t*y*p-u*n*x+t*h*x)*w,e[14]=(g*l*s-o*y*s-g*n*c+t*y*c+o*n*x-t*l*x)*w,e[15]=(o*h*s-u*l*s+u*n*c-t*h*c-o*n*p+t*l*p)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,i=e.z;return t[0]*=n,t[4]*=s,t[8]*=i,t[1]*=n,t[5]*=s,t[9]*=i,t[2]*=n,t[6]*=s,t[10]*=i,t[3]*=n,t[7]*=s,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),i=1-n,o=e.x,l=e.y,c=e.z,d=i*o,u=i*l;return this.set(d*o+n,d*l-s*c,d*c+s*l,0,d*l+s*c,u*l+n,u*c-s*o,0,d*c-s*l,u*c+s*o,i*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,i,o){return this.set(1,n,i,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,i=t._x,o=t._y,l=t._z,c=t._w,d=i+i,u=o+o,h=l+l,p=i*d,f=i*u,g=i*h,y=o*u,x=o*h,m=l*h,v=c*d,S=c*u,b=c*h,_=n.x,M=n.y,w=n.z;return s[0]=(1-(y+m))*_,s[1]=(f+b)*_,s[2]=(g-S)*_,s[3]=0,s[4]=(f-b)*M,s[5]=(1-(p+m))*M,s[6]=(x+v)*M,s[7]=0,s[8]=(g+S)*w,s[9]=(x-v)*w,s[10]=(1-(p+y))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let i=Os.set(s[0],s[1],s[2]).length();const o=Os.set(s[4],s[5],s[6]).length(),l=Os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(i=-i),e.x=s[12],e.y=s[13],e.z=s[14],xn.copy(this);const d=1/i,u=1/o,h=1/l;return xn.elements[0]*=d,xn.elements[1]*=d,xn.elements[2]*=d,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,t.setFromRotationMatrix(xn),n.x=i,n.y=o,n.z=l,this}makePerspective(e,t,n,s,i,o,l=En,c=!1){const d=this.elements,u=2*i/(t-e),h=2*i/(n-s),p=(t+e)/(t-e),f=(n+s)/(n-s);let g,y;if(c)g=i/(o-i),y=o*i/(o-i);else if(l===En)g=-(o+i)/(o-i),y=-2*o*i/(o-i);else if(l===Br)g=-o/(o-i),y=-o*i/(o-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return d[0]=u,d[4]=0,d[8]=p,d[12]=0,d[1]=0,d[5]=h,d[9]=f,d[13]=0,d[2]=0,d[6]=0,d[10]=g,d[14]=y,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,i,o,l=En,c=!1){const d=this.elements,u=2/(t-e),h=2/(n-s),p=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,y;if(c)g=1/(o-i),y=o/(o-i);else if(l===En)g=-2/(o-i),y=-(o+i)/(o-i);else if(l===Br)g=-1/(o-i),y=-i/(o-i);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return d[0]=u,d[4]=0,d[8]=0,d[12]=p,d[1]=0,d[5]=h,d[9]=0,d[13]=f,d[2]=0,d[6]=0,d[10]=g,d[14]=y,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Os=new k,xn=new Ke,Gp=new k(0,0,0),Wp=new k(1,1,1),Qn=new k,ir=new k,Zt=new k,zl=new Ke,Hl=new vt;class Gn{constructor(e=0,t=0,n=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,i=s[0],o=s[4],l=s[8],c=s[1],d=s[5],u=s[9],h=s[2],p=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,i)):(this._x=Math.atan2(p,d),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-h,i),this._z=0);break;case"ZXY":this._x=Math.asin(et(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(c,i));break;case"ZYX":this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,i)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-h,i)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,d),this._y=Math.atan2(l,i)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class kd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xp=0;const Vl=new k,js=new vt,Bn=new Ke,rr=new k,Si=new k,qp=new k,Qp=new vt,Gl=new k(1,0,0),Wl=new k(0,1,0),Xl=new k(0,0,1),ql={type:"added"},Yp={type:"removed"},zs={type:"childadded",child:null},ya={type:"childremoved",child:null};class It extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new k,t=new Gn,n=new vt,s=new k(1,1,1);function i(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(i),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Qe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Gl,e)}rotateY(e){return this.rotateOnAxis(Wl,e)}rotateZ(e){return this.rotateOnAxis(Xl,e)}translateOnAxis(e,t){return Vl.copy(e).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gl,e)}translateY(e){return this.translateOnAxis(Wl,e)}translateZ(e){return this.translateOnAxis(Xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rr.copy(e):rr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Si,rr,this.up):Bn.lookAt(rr,Si,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),js.setFromRotationMatrix(Bn),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ql),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yp),ya.child=e,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ql),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let i=0,o=s.length;i<o;i++)s[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,e,qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,Qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let i=0,o=s.length;i<o;i++)s[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function i(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=i(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let d=0,u=c.length;d<u;d++){const h=c[d];i(e.shapes,h)}else i(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,d=this.material.length;c<d;c++)l.push(i(e.materials,this.material[c]));s.material=l}else s.material=i(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];s.animations.push(i(e.animations,c))}}if(t){const l=o(e.geometries),c=o(e.materials),d=o(e.textures),u=o(e.images),h=o(e.shapes),p=o(e.skeletons),f=o(e.animations),g=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),d.length>0&&(n.textures=d),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(l){const c=[];for(const d in l){const u=l[d];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}It.DEFAULT_UP=new k(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new k,Ln=new k,va=new k,Un=new k,Hs=new k,Vs=new k,Ql=new k,ba=new k,Sa=new k,Aa=new k,_a=new bt,wa=new bt,Ca=new bt;class vn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),yn.subVectors(e,t),s.cross(yn);const i=s.lengthSq();return i>0?s.multiplyScalar(1/Math.sqrt(i)):s.set(0,0,0)}static getBarycoord(e,t,n,s,i){yn.subVectors(s,t),Ln.subVectors(n,t),va.subVectors(e,t);const o=yn.dot(yn),l=yn.dot(Ln),c=yn.dot(va),d=Ln.dot(Ln),u=Ln.dot(va),h=o*d-l*l;if(h===0)return i.set(0,0,0),null;const p=1/h,f=(d*c-l*u)*p,g=(o*u-l*c)*p;return i.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,s,i,o,l,c){return this.getBarycoord(e,t,n,s,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(i,Un.x),c.addScaledVector(o,Un.y),c.addScaledVector(l,Un.z),c)}static getInterpolatedAttribute(e,t,n,s,i,o){return _a.setScalar(0),wa.setScalar(0),Ca.setScalar(0),_a.fromBufferAttribute(e,t),wa.fromBufferAttribute(e,n),Ca.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(_a,i.x),o.addScaledVector(wa,i.y),o.addScaledVector(Ca,i.z),o}static isFrontFacing(e,t,n,s){return yn.subVectors(n,t),Ln.subVectors(e,t),yn.cross(Ln).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),yn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,i){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,s,i)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,i=this.c;let o,l;Hs.subVectors(s,n),Vs.subVectors(i,n),ba.subVectors(e,n);const c=Hs.dot(ba),d=Vs.dot(ba);if(c<=0&&d<=0)return t.copy(n);Sa.subVectors(e,s);const u=Hs.dot(Sa),h=Vs.dot(Sa);if(u>=0&&h<=u)return t.copy(s);const p=c*h-u*d;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Hs,o);Aa.subVectors(e,i);const f=Hs.dot(Aa),g=Vs.dot(Aa);if(g>=0&&f<=g)return t.copy(i);const y=f*d-c*g;if(y<=0&&d>=0&&g<=0)return l=d/(d-g),t.copy(n).addScaledVector(Vs,l);const x=u*g-f*h;if(x<=0&&h-u>=0&&f-g>=0)return Ql.subVectors(i,s),l=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Ql,l);const m=1/(x+y+p);return o=y*m,l=p*m,t.copy(n).addScaledVector(Hs,o).addScaledVector(Vs,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},ar={h:0,s:0,l:0};function Ma(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=Fp(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,o=2*n-i;this.r=Ma(o,i,e+1/3),this.g=Ma(o,i,e),this.b=Ma(o,i,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=cn){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=s[1],o=i.length;if(o===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const n=Bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return it.workingToColorSpace(Lt.copy(this),e),Math.round(et(Lt.r*255,0,255))*65536+Math.round(et(Lt.g*255,0,255))*256+Math.round(et(Lt.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Lt.copy(this),t);const n=Lt.r,s=Lt.g,i=Lt.b,o=Math.max(n,s,i),l=Math.min(n,s,i);let c,d;const u=(l+o)/2;if(l===o)c=0,d=0;else{const h=o-l;switch(d=u<=.5?h/(o+l):h/(2-o-l),o){case n:c=(s-i)/h+(s<i?6:0);break;case s:c=(i-n)/h+2;break;case i:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=d,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=cn){it.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,s=Lt.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(ar);const n=la(Yn.h,ar.h,t),s=la(Yn.s,ar.s,t),i=la(Yn.l,ar.l,t);return this.setHSL(n,s,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*s,this.g=i[1]*t+i[4]*n+i[7]*s,this.b=i[2]*t+i[5]*n+i[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new rt;rt.NAMES=Bd;let Kp=0;class $r extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=ss,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fi,this.blendDst=ki,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fi&&(n.blendSrc=this.blendSrc),this.blendDst!==ki&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(i){const o=[];for(const l in i){const c=i[l];delete c.metadata,o.push(c)}return o}if(t){const i=s(e.textures),o=s(e.images);i.length>0&&(n.textures=i),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let i=0;i!==s;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class as extends $r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zn=$p();function $p(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const d=c-127;d<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):d<-14?(n[c]=1024>>-d-14,n[c|256]=1024>>-d-14|32768,s[c]=-d-1,s[c|256]=-d-1):d<=15?(n[c]=d+15<<10,n[c|256]=d+15<<10|32768,s[c]=13,s[c|256]=13):d<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}const i=new Uint32Array(2048),o=new Uint32Array(64),l=new Uint32Array(64);for(let c=1;c<1024;++c){let d=c<<13,u=0;for(;(d&8388608)===0;)d<<=1,u-=8388608;d&=-8388609,u+=947912704,i[c]=d|u}for(let c=1024;c<2048;++c)i[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(l[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:i,exponentTable:o,offsetTable:l}}function Zp(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=et(r,-65504,65504),zn.floatView[0]=r;const e=zn.uint32View[0],t=e>>23&511;return zn.baseTable[t]+((e&8388607)>>zn.shiftTable[t])}function Jp(r){const e=r>>10;return zn.uint32View[0]=zn.mantissaTable[zn.offsetTable[e]+(r&1023)]+zn.exponentTable[e],zn.floatView[0]}class ji{static toHalfFloat(e){return Zp(e)}static fromHalfFloat(e){return Jp(e)}}const Rt=new k,or=new Be;let em=0;class pn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:em++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kl,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,i=this.itemSize;s<i;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kl&&(e.usage=this.usage),e}}class Ld extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ud extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nn extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let tm=0;const on=new Ke,Ea=new It,Gs=new k,Jt=new Tn,Ai=new Tn,Ft=new k;class mn extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dd(e)?Ud:Ld)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new Qe().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return Ea.lookAt(e),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,i=e.length;s<i;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nn(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const i=e[s];t.setXYZ(s,i.x,i.y,i.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const i=t[n];Jt.setFromBufferAttribute(i),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const l=t[i];Ai.setFromBufferAttribute(l),this.morphTargetsRelative?(Ft.addVectors(Jt.min,Ai.min),Jt.expandByPoint(Ft),Ft.addVectors(Jt.max,Ai.max),Jt.expandByPoint(Ft)):(Jt.expandByPoint(Ai.min),Jt.expandByPoint(Ai.max))}Jt.getCenter(n);let s=0;for(let i=0,o=e.count;i<o;i++)Ft.fromBufferAttribute(e,i),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let i=0,o=t.length;i<o;i++){const l=t[i],c=this.morphTargetsRelative;for(let d=0,u=l.count;d<u;d++)Ft.fromBufferAttribute(l,d),c&&(Gs.fromBufferAttribute(e,d),Ft.add(Gs)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],c=[];for(let T=0;T<n.count;T++)l[T]=new k,c[T]=new k;const d=new k,u=new k,h=new k,p=new Be,f=new Be,g=new Be,y=new k,x=new k;function m(T,C,A){d.fromBufferAttribute(n,T),u.fromBufferAttribute(n,C),h.fromBufferAttribute(n,A),p.fromBufferAttribute(i,T),f.fromBufferAttribute(i,C),g.fromBufferAttribute(i,A),u.sub(d),h.sub(d),f.sub(p),g.sub(p);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),x.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),l[T].add(y),l[C].add(y),l[A].add(y),c[T].add(x),c[C].add(x),c[A].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let T=0,C=v.length;T<C;++T){const A=v[T],R=A.start,D=A.count;for(let I=R,U=R+D;I<U;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const S=new k,b=new k,_=new k,M=new k;function w(T){_.fromBufferAttribute(s,T),M.copy(_);const C=l[T];S.copy(C),S.sub(_.multiplyScalar(_.dot(C))).normalize(),b.crossVectors(M,C);const R=b.dot(c[T])<0?-1:1;o.setXYZW(T,S.x,S.y,S.z,R)}for(let T=0,C=v.length;T<C;++T){const A=v[T],R=A.start,D=A.count;for(let I=R,U=R+D;I<U;I+=3)w(e.getX(I+0)),w(e.getX(I+1)),w(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const s=new k,i=new k,o=new k,l=new k,c=new k,d=new k,u=new k,h=new k;if(e)for(let p=0,f=e.count;p<f;p+=3){const g=e.getX(p+0),y=e.getX(p+1),x=e.getX(p+2);s.fromBufferAttribute(t,g),i.fromBufferAttribute(t,y),o.fromBufferAttribute(t,x),u.subVectors(o,i),h.subVectors(s,i),u.cross(h),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),d.fromBufferAttribute(n,x),l.add(u),c.add(u),d.add(u),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(x,d.x,d.y,d.z)}else for(let p=0,f=t.count;p<f;p+=3)s.fromBufferAttribute(t,p+0),i.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,i),h.subVectors(s,i),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(l,c){const d=l.array,u=l.itemSize,h=l.normalized,p=new d.constructor(c.length*u);let f=0,g=0;for(let y=0,x=c.length;y<x;y++){l.isInterleavedBufferAttribute?f=c[y]*l.data.stride+l.offset:f=c[y]*u;for(let m=0;m<u;m++)p[g++]=d[f++]}return new pn(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,n=this.index.array,s=this.attributes;for(const l in s){const c=s[l],d=e(c,n);t.setAttribute(l,d)}const i=this.morphAttributes;for(const l in i){const c=[],d=i[l];for(let u=0,h=d.length;u<h;u++){const p=d[u],f=e(p,n);c.push(f)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const d=o[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const d=n[c];e.data.attributes[c]=d.toJSON(e.data)}const s={};let i=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],u=[];for(let h=0,p=d.length;h<p;h++){const f=d[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,i=!0)}i&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const d in s){const u=s[d];this.setAttribute(d,u.clone(t))}const i=e.morphAttributes;for(const d in i){const u=[],h=i[d];for(let p=0,f=h.length;p<f;p++)u.push(h[p].clone(t));this.morphAttributes[d]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let d=0,u=o.length;d<u;d++){const h=o[d];this.addGroup(h.start,h.count,h.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yl=new Ke,us=new Fd,lr=new Zo,Kl=new k,cr=new k,dr=new k,ur=new k,Ta=new k,hr=new k,$l=new k,fr=new k;class Mt extends It{constructor(e=new mn,t=new as){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=s.length;i<o;i++){const l=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,i=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(i&&l){hr.set(0,0,0);for(let c=0,d=i.length;c<d;c++){const u=l[c],h=i[c];u!==0&&(Ta.fromBufferAttribute(h,e),o?hr.addScaledVector(Ta,u):hr.addScaledVector(Ta.sub(t),u))}t.add(hr)}return t}raycast(e,t){const n=this.geometry,s=this.material,i=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(i),us.copy(e.ray).recast(e.near),!(lr.containsPoint(us.origin)===!1&&(us.intersectSphere(lr,Kl)===null||us.origin.distanceToSquared(Kl)>(e.far-e.near)**2))&&(Yl.copy(i).invert(),us.copy(e.ray).applyMatrix4(Yl),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,n){let s;const i=this.geometry,o=this.material,l=i.index,c=i.attributes.position,d=i.attributes.uv,u=i.attributes.uv1,h=i.attributes.normal,p=i.groups,f=i.drawRange;if(l!==null)if(Array.isArray(o))for(let g=0,y=p.length;g<y;g++){const x=p[g],m=o[x.materialIndex],v=Math.max(x.start,f.start),S=Math.min(l.count,Math.min(x.start+x.count,f.start+f.count));for(let b=v,_=S;b<_;b+=3){const M=l.getX(b),w=l.getX(b+1),T=l.getX(b+2);s=pr(this,m,e,n,d,u,h,M,w,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let x=g,m=y;x<m;x+=3){const v=l.getX(x),S=l.getX(x+1),b=l.getX(x+2);s=pr(this,o,e,n,d,u,h,v,S,b),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=p.length;g<y;g++){const x=p[g],m=o[x.materialIndex],v=Math.max(x.start,f.start),S=Math.min(c.count,Math.min(x.start+x.count,f.start+f.count));for(let b=v,_=S;b<_;b+=3){const M=b,w=b+1,T=b+2;s=pr(this,m,e,n,d,u,h,M,w,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let x=g,m=y;x<m;x+=3){const v=x,S=x+1,b=x+2;s=pr(this,o,e,n,d,u,h,v,S,b),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function nm(r,e,t,n,s,i,o,l){let c;if(e.side===Yt?c=n.intersectTriangle(o,i,s,!0,l):c=n.intersectTriangle(s,i,o,e.side===In,l),c===null)return null;fr.copy(l),fr.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(fr);return d<t.near||d>t.far?null:{distance:d,point:fr.clone(),object:r}}function pr(r,e,t,n,s,i,o,l,c,d){r.getVertexPosition(l,cr),r.getVertexPosition(c,dr),r.getVertexPosition(d,ur);const u=nm(r,e,t,n,cr,dr,ur,$l);if(u){const h=new k;vn.getBarycoord($l,cr,dr,ur,h),s&&(u.uv=vn.getInterpolatedAttribute(s,l,c,d,h,new Be)),i&&(u.uv1=vn.getInterpolatedAttribute(i,l,c,d,h,new Be)),o&&(u.normal=vn.getInterpolatedAttribute(o,l,c,d,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:l,b:c,c:d,normal:new k,materialIndex:0};vn.getNormal(cr,dr,ur,p.normal),u.face=p,u.barycoord=h}return u}class pi extends mn{constructor(e=1,t=1,n=1,s=1,i=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:i,depthSegments:o};const l=this;s=Math.floor(s),i=Math.floor(i),o=Math.floor(o);const c=[],d=[],u=[],h=[];let p=0,f=0;g("z","y","x",-1,-1,n,t,e,o,i,0),g("z","y","x",1,-1,n,t,-e,o,i,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,i,4),g("x","y","z",-1,-1,e,t,-n,s,i,5),this.setIndex(c),this.setAttribute("position",new nn(d,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(h,2));function g(y,x,m,v,S,b,_,M,w,T,C){const A=b/w,R=_/T,D=b/2,I=_/2,U=M/2,j=w+1,P=T+1;let X=0,z=0;const Q=new k;for(let ie=0;ie<P;ie++){const q=ie*R-I;for(let pe=0;pe<j;pe++){const Te=pe*A-D;Q[y]=Te*v,Q[x]=q*S,Q[m]=U,d.push(Q.x,Q.y,Q.z),Q[y]=0,Q[x]=0,Q[m]=M>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(pe/w),h.push(1-ie/T),X+=1}}for(let ie=0;ie<T;ie++)for(let q=0;q<w;q++){const pe=p+q+j*ie,Te=p+q+j*(ie+1),Se=p+(q+1)+j*(ie+1),Fe=p+(q+1)+j*ie;c.push(pe,Te,Fe),c.push(Te,Se,Fe),z+=6}l.addGroup(f,z,C),f+=z,p+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ci(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ot(r){const e={};for(let t=0;t<r.length;t++){const n=ci(r[t]);for(const s in n)e[s]=n[s]}return e}function sm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Od(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const im={clone:ci,merge:Ot};var rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends $r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rm,this.fragmentShader=am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ci(e.uniforms),this.uniformsGroups=sm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jd extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new k,Zl=new Be,Jl=new Be;class dn extends jd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,Zl,Jl),t.subVectors(Jl,Zl)}setViewOffset(e,t,n,s,i,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,i=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,d=o.fullHeight;i+=o.offsetX*s/c,t-=o.offsetY*n/d,s*=o.width/c,n*=o.height/d}const l=this.filmOffset;l!==0&&(i+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ws=-90,Xs=1;class om extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Ws,Xs,e,t);s.layers=this.layers,this.add(s);const i=new dn(Ws,Xs,e,t);i.layers=this.layers,this.add(i);const o=new dn(Ws,Xs,e,t);o.layers=this.layers,this.add(o);const l=new dn(Ws,Xs,e,t);l.layers=this.layers,this.add(l);const c=new dn(Ws,Xs,e,t);c.layers=this.layers,this.add(c);const d=new dn(Ws,Xs,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,i,o,l,c]=t;for(const d of t)this.remove(d);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,o,l,c,d,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,i),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,l),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,d),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,p,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zd extends Gt{constructor(e=[],t=ri,n,s,i,o,l,c,d,u){super(e,t,n,s,i,o,l,c,d,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lm extends rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new zd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new pi(5,5,5),i=new sn({name:"CubemapFromEquirect",uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:ns});i.uniforms.tEquirect.value=t;const o=new Mt(s,i),l=t.minFilter;return t.minFilter===As&&(t.minFilter=Mn),new om(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const i=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(i)}}class _i extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cm={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,i=null,o=null;const l=this._targetRay,c=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){o=!0;for(const y of e.hand.values()){const x=t.getJointPose(y,n),m=this._getHandJoint(d,y);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}const u=d.joints["index-finger-tip"],h=d.joints["thumb-tip"],p=u.position.distanceTo(h.position),f=.02,g=.005;d.inputState.pinching&&p>f+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&p<=f-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&i!==null&&(s=i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(cm)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=i!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class dm extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class $n extends Gt{constructor(e=null,t=1,n=1,s,i,o,l,c,d=tn,u=tn,h,p){super(null,o,l,c,d,u,s,i,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class um extends pn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Na=new k,hm=new k,fm=new Qe;class Jn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Na.subVectors(n,t).cross(hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/s;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fm.getNormalMatrix(e),s=this.coplanarPoint(Na).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Zo,pm=new Be(.5,.5),mr=new k;class Hd{constructor(e=new Jn,t=new Jn,n=new Jn,s=new Jn,i=new Jn,o=new Jn){this.planes=[e,t,n,s,i,o]}set(e,t,n,s,i,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(i),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){const s=this.planes,i=e.elements,o=i[0],l=i[1],c=i[2],d=i[3],u=i[4],h=i[5],p=i[6],f=i[7],g=i[8],y=i[9],x=i[10],m=i[11],v=i[12],S=i[13],b=i[14],_=i[15];if(s[0].setComponents(d-o,f-u,m-g,_-v).normalize(),s[1].setComponents(d+o,f+u,m+g,_+v).normalize(),s[2].setComponents(d+l,f+h,m+y,_+S).normalize(),s[3].setComponents(d-l,f-h,m-y,_-S).normalize(),n)s[4].setComponents(c,p,x,b).normalize(),s[5].setComponents(d-c,f-p,m-x,_-b).normalize();else if(s[4].setComponents(d-c,f-p,m-x,_-b).normalize(),t===En)s[5].setComponents(d+c,f+p,m+x,_+b).normalize();else if(t===Br)s[5].setComponents(c,p,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const t=pm.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(mr.x=s.normal.x>0?e.max.x:e.min.x,mr.y=s.normal.y>0?e.max.y:e.min.y,mr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jo extends Gt{constructor(e,t,n=hn,s,i,o,l=tn,c=tn,d,u=oi,h=1){if(u!==oi&&u!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:h};super(p,s,i,o,l,c,u,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $o(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vd extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zi extends mn{constructor(e=1,t=1,n=1,s=32,i=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:i,openEnded:o,thetaStart:l,thetaLength:c};const d=this;s=Math.floor(s),i=Math.floor(i);const u=[],h=[],p=[],f=[];let g=0;const y=[],x=n/2;let m=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new nn(h,3)),this.setAttribute("normal",new nn(p,3)),this.setAttribute("uv",new nn(f,2));function v(){const b=new k,_=new k;let M=0;const w=(t-e)/n;for(let T=0;T<=i;T++){const C=[],A=T/i,R=A*(t-e)+e;for(let D=0;D<=s;D++){const I=D/s,U=I*c+l,j=Math.sin(U),P=Math.cos(U);_.x=R*j,_.y=-A*n+x,_.z=R*P,h.push(_.x,_.y,_.z),b.set(j,w,P).normalize(),p.push(b.x,b.y,b.z),f.push(I,1-A),C.push(g++)}y.push(C)}for(let T=0;T<s;T++)for(let C=0;C<i;C++){const A=y[C][T],R=y[C+1][T],D=y[C+1][T+1],I=y[C][T+1];(e>0||C!==0)&&(u.push(A,R,I),M+=3),(t>0||C!==i-1)&&(u.push(R,D,I),M+=3)}d.addGroup(m,M,0),m+=M}function S(b){const _=g,M=new Be,w=new k;let T=0;const C=b===!0?e:t,A=b===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,x*A,0),p.push(0,A,0),f.push(.5,.5),g++;const R=g;for(let D=0;D<=s;D++){const U=D/s*c+l,j=Math.cos(U),P=Math.sin(U);w.x=C*P,w.y=x*A,w.z=C*j,h.push(w.x,w.y,w.z),p.push(0,A,0),M.x=j*.5+.5,M.y=P*.5*A+.5,f.push(M.x,M.y),g++}for(let D=0;D<s;D++){const I=_+D,U=R+D;b===!0?u.push(U,U+1,I):u.push(U+1,U,I),T+=3}d.addGroup(m,T,b===!0?1:2),m+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class el extends zi{constructor(e=1,t=1,n=32,s=1,i=!1,o=0,l=Math.PI*2){super(0,e,t,n,s,i,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:i,thetaStart:o,thetaLength:l}}static fromJSON(e){return new el(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class di extends mn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const i=e/2,o=t/2,l=Math.floor(n),c=Math.floor(s),d=l+1,u=c+1,h=e/l,p=t/c,f=[],g=[],y=[],x=[];for(let m=0;m<u;m++){const v=m*p-o;for(let S=0;S<d;S++){const b=S*h-i;g.push(b,-v,0),y.push(0,0,1),x.push(S/l),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<l;v++){const S=v+d*m,b=v+d*(m+1),_=v+1+d*(m+1),M=v+1+d*m;f.push(S,b,M),f.push(b,_,M)}this.setIndex(f),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(y,3)),this.setAttribute("uv",new nn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hi extends mn{constructor(e=1,t=32,n=16,s=0,i=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:i,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+l,Math.PI);let d=0;const u=[],h=new k,p=new k,f=[],g=[],y=[],x=[];for(let m=0;m<=n;m++){const v=[],S=m/n;let b=0;m===0&&o===0?b=.5/t:m===n&&c===Math.PI&&(b=-.5/t);for(let _=0;_<=t;_++){const M=_/t;h.x=-e*Math.cos(s+M*i)*Math.sin(o+S*l),h.y=e*Math.cos(o+S*l),h.z=e*Math.sin(s+M*i)*Math.sin(o+S*l),g.push(h.x,h.y,h.z),p.copy(h).normalize(),y.push(p.x,p.y,p.z),x.push(M+b,1-S),v.push(d++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const S=u[m][v+1],b=u[m][v],_=u[m+1][v],M=u[m+1][v+1];(m!==0||o>0)&&f.push(S,b,M),(m!==n-1||c<Math.PI)&&f.push(b,_,M)}this.setIndex(f),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(y,3)),this.setAttribute("uv",new nn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mm extends $r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gm extends $r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tl extends jd{constructor(e=-1,t=1,n=1,s=-1,i=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=i,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,i,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let i=n-e,o=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=d*this.view.offsetX,o=i+d*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(i,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xm extends mn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class ym extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ec{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function tc(r,e,t,n){const s=vm(n);switch(t){case Md:return r*e;case Td:return r*e/s.components*s.byteLength;case Kr:return r*e/s.components*s.byteLength;case Rd:return r*e*2/s.components*s.byteLength;case Ko:return r*e*2/s.components*s.byteLength;case Ed:return r*e*3/s.components*s.byteLength;case Ht:return r*e*4/s.components*s.byteLength;case Js:return r*e*4/s.components*s.byteLength;case Cr:case Mr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Er:case Tr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ao:case lo:return Math.max(r,16)*Math.max(e,8)/4;case ro:case oo:return Math.max(r,8)*Math.max(e,8)/2;case co:case uo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ho:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case mo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case go:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case yo:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case vo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case bo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case So:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case _o:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case wo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Co:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Eo:case To:case Ro:return Math.ceil(r/4)*Math.ceil(e/4)*16;case No:case Io:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Do:case Po:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vm(r){switch(r){case Dn:case Ad:return{byteLength:1,components:1};case Bi:case _d:case fi:return{byteLength:2,components:1};case Qo:case Yo:return{byteLength:2,components:4};case hn:case qo:case bn:return{byteLength:4,components:1};case wd:case Cd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gd(){let r=null,e=!1,t=null,n=null;function s(i,o){t(i,o),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){r=i}}}function bm(r){const e=new WeakMap;function t(l,c){const d=l.array,u=l.usage,h=d.byteLength,p=r.createBuffer();r.bindBuffer(c,p),r.bufferData(c,d,u),l.onUploadCallback();let f;if(d instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)f=r.HALF_FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)f=r.SHORT;else if(d instanceof Uint32Array)f=r.UNSIGNED_INT;else if(d instanceof Int32Array)f=r.INT;else if(d instanceof Int8Array)f=r.BYTE;else if(d instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:f,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:h}}function n(l,c,d){const u=c.array,h=c.updateRanges;if(r.bindBuffer(d,l),h.length===0)r.bufferSubData(d,0,u);else{h.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<h.length;f++){const g=h[p],y=h[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++p,h[p]=y)}h.length=p+1;for(let f=0,g=h.length;f<g;f++){const y=h[f];r.bufferSubData(d,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function i(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(r.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const u=e.get(l);(!u||u.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,t(l,c));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,l,c),d.version=l.version}}return{get:s,remove:i,update:o}}var Sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Am=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Em=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,km=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Gm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$m="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,i0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,c0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,f0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,p0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,v0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,b0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,S0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,A0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,N0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,L0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,O0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,G0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,K0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,og=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Eg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Og=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$g=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Sm,alphahash_pars_fragment:Am,alphamap_fragment:_m,alphamap_pars_fragment:wm,alphatest_fragment:Cm,alphatest_pars_fragment:Mm,aomap_fragment:Em,aomap_pars_fragment:Tm,batching_pars_vertex:Rm,batching_vertex:Nm,begin_vertex:Im,beginnormal_vertex:Dm,bsdfs:Pm,iridescence_fragment:Fm,bumpmap_pars_fragment:km,clipping_planes_fragment:Bm,clipping_planes_pars_fragment:Lm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Om,color_fragment:jm,color_pars_fragment:zm,color_pars_vertex:Hm,color_vertex:Vm,common:Gm,cube_uv_reflection_fragment:Wm,defaultnormal_vertex:Xm,displacementmap_pars_vertex:qm,displacementmap_vertex:Qm,emissivemap_fragment:Ym,emissivemap_pars_fragment:Km,colorspace_fragment:$m,colorspace_pars_fragment:Zm,envmap_fragment:Jm,envmap_common_pars_fragment:e0,envmap_pars_fragment:t0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:f0,envmap_vertex:s0,fog_vertex:i0,fog_pars_vertex:r0,fog_fragment:a0,fog_pars_fragment:o0,gradientmap_pars_fragment:l0,lightmap_pars_fragment:c0,lights_lambert_fragment:d0,lights_lambert_pars_fragment:u0,lights_pars_begin:h0,lights_toon_fragment:p0,lights_toon_pars_fragment:m0,lights_phong_fragment:g0,lights_phong_pars_fragment:x0,lights_physical_fragment:y0,lights_physical_pars_fragment:v0,lights_fragment_begin:b0,lights_fragment_maps:S0,lights_fragment_end:A0,logdepthbuf_fragment:_0,logdepthbuf_pars_fragment:w0,logdepthbuf_pars_vertex:C0,logdepthbuf_vertex:M0,map_fragment:E0,map_pars_fragment:T0,map_particle_fragment:R0,map_particle_pars_fragment:N0,metalnessmap_fragment:I0,metalnessmap_pars_fragment:D0,morphinstance_vertex:P0,morphcolor_vertex:F0,morphnormal_vertex:k0,morphtarget_pars_vertex:B0,morphtarget_vertex:L0,normal_fragment_begin:U0,normal_fragment_maps:O0,normal_pars_fragment:j0,normal_pars_vertex:z0,normal_vertex:H0,normalmap_pars_fragment:V0,clearcoat_normal_fragment_begin:G0,clearcoat_normal_fragment_maps:W0,clearcoat_pars_fragment:X0,iridescence_pars_fragment:q0,opaque_fragment:Q0,packing:Y0,premultiplied_alpha_fragment:K0,project_vertex:$0,dithering_fragment:Z0,dithering_pars_fragment:J0,roughnessmap_fragment:eg,roughnessmap_pars_fragment:tg,shadowmap_pars_fragment:ng,shadowmap_pars_vertex:sg,shadowmap_vertex:ig,shadowmask_pars_fragment:rg,skinbase_vertex:ag,skinning_pars_vertex:og,skinning_vertex:lg,skinnormal_vertex:cg,specularmap_fragment:dg,specularmap_pars_fragment:ug,tonemapping_fragment:hg,tonemapping_pars_fragment:fg,transmission_fragment:pg,transmission_pars_fragment:mg,uv_pars_fragment:gg,uv_pars_vertex:xg,uv_vertex:yg,worldpos_vertex:vg,background_vert:bg,background_frag:Sg,backgroundCube_vert:Ag,backgroundCube_frag:_g,cube_vert:wg,cube_frag:Cg,depth_vert:Mg,depth_frag:Eg,distanceRGBA_vert:Tg,distanceRGBA_frag:Rg,equirect_vert:Ng,equirect_frag:Ig,linedashed_vert:Dg,linedashed_frag:Pg,meshbasic_vert:Fg,meshbasic_frag:kg,meshlambert_vert:Bg,meshlambert_frag:Lg,meshmatcap_vert:Ug,meshmatcap_frag:Og,meshnormal_vert:jg,meshnormal_frag:zg,meshphong_vert:Hg,meshphong_frag:Vg,meshphysical_vert:Gg,meshphysical_frag:Wg,meshtoon_vert:Xg,meshtoon_frag:qg,points_vert:Qg,points_frag:Yg,shadow_vert:Kg,shadow_frag:$g,sprite_vert:Zg,sprite_frag:Jg},_e={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},_n={basic:{uniforms:Ot([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Ot([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new rt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Ot([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Ot([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Ot([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new rt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Ot([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Ot([_e.points,_e.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Ot([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Ot([_e.common,_e.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Ot([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Ot([_e.sprite,_e.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Ot([_e.common,_e.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Ot([_e.lights,_e.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};_n.physical={uniforms:Ot([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const gr={r:0,b:0,g:0},fs=new Gn,ex=new Ke;function tx(r,e,t,n,s,i,o){const l=new rt(0);let c=i===!0?0:1,d,u,h=null,p=0,f=null;function g(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?t:e).get(b)),b}function y(S){let b=!1;const _=g(S);_===null?m(l,c):_&&_.isColor&&(m(_,1),b=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(S,b){const _=g(b);_&&(_.isCubeTexture||_.mapping===Yr)?(u===void 0&&(u=new Mt(new pi(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:ci(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),fs.copy(b.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ex.makeRotationFromEuler(fs)),u.material.toneMapped=it.getTransfer(_.colorSpace)!==ut,(h!==_||p!==_.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=_,p=_.version,f=r.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(d===void 0&&(d=new Mt(new di(2,2),new sn({name:"BackgroundMaterial",uniforms:ci(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=_,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=it.getTransfer(_.colorSpace)!==ut,_.matrixAutoUpdate===!0&&_.updateMatrix(),d.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||p!==_.version||f!==r.toneMapping)&&(d.material.needsUpdate=!0,h=_,p=_.version,f=r.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null))}function m(S,b){S.getRGB(gr,Od(r)),n.buffers.color.setClear(gr.r,gr.g,gr.b,b,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return l},setClearColor:function(S,b=1){l.set(S),c=b,m(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,m(l,c)},render:y,addToRenderList:x,dispose:v}}function nx(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=p(null);let i=s,o=!1;function l(A,R,D,I,U){let j=!1;const P=h(I,D,R);i!==P&&(i=P,d(i.object)),j=f(A,I,D,U),j&&g(A,I,D,U),U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,b(A,R,D,I),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return r.createVertexArray()}function d(A){return r.bindVertexArray(A)}function u(A){return r.deleteVertexArray(A)}function h(A,R,D){const I=D.wireframe===!0;let U=n[A.id];U===void 0&&(U={},n[A.id]=U);let j=U[R.id];j===void 0&&(j={},U[R.id]=j);let P=j[I];return P===void 0&&(P=p(c()),j[I]=P),P}function p(A){const R=[],D=[],I=[];for(let U=0;U<t;U++)R[U]=0,D[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:I,object:A,attributes:{},index:null}}function f(A,R,D,I){const U=i.attributes,j=R.attributes;let P=0;const X=D.getAttributes();for(const z in X)if(X[z].location>=0){const ie=U[z];let q=j[z];if(q===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(q=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(q=A.instanceColor)),ie===void 0||ie.attribute!==q||q&&ie.data!==q.data)return!0;P++}return i.attributesNum!==P||i.index!==I}function g(A,R,D,I){const U={},j=R.attributes;let P=0;const X=D.getAttributes();for(const z in X)if(X[z].location>=0){let ie=j[z];ie===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(ie=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(ie=A.instanceColor));const q={};q.attribute=ie,ie&&ie.data&&(q.data=ie.data),U[z]=q,P++}i.attributes=U,i.attributesNum=P,i.index=I}function y(){const A=i.newAttributes;for(let R=0,D=A.length;R<D;R++)A[R]=0}function x(A){m(A,0)}function m(A,R){const D=i.newAttributes,I=i.enabledAttributes,U=i.attributeDivisors;D[A]=1,I[A]===0&&(r.enableVertexAttribArray(A),I[A]=1),U[A]!==R&&(r.vertexAttribDivisor(A,R),U[A]=R)}function v(){const A=i.newAttributes,R=i.enabledAttributes;for(let D=0,I=R.length;D<I;D++)R[D]!==A[D]&&(r.disableVertexAttribArray(D),R[D]=0)}function S(A,R,D,I,U,j,P){P===!0?r.vertexAttribIPointer(A,R,D,U,j):r.vertexAttribPointer(A,R,D,I,U,j)}function b(A,R,D,I){y();const U=I.attributes,j=D.getAttributes(),P=R.defaultAttributeValues;for(const X in j){const z=j[X];if(z.location>=0){let Q=U[X];if(Q===void 0&&(X==="instanceMatrix"&&A.instanceMatrix&&(Q=A.instanceMatrix),X==="instanceColor"&&A.instanceColor&&(Q=A.instanceColor)),Q!==void 0){const ie=Q.normalized,q=Q.itemSize,pe=e.get(Q);if(pe===void 0)continue;const Te=pe.buffer,Se=pe.type,Fe=pe.bytesPerElement,K=Se===r.INT||Se===r.UNSIGNED_INT||Q.gpuType===qo;if(Q.isInterleavedBufferAttribute){const te=Q.data,me=te.stride,we=Q.offset;if(te.isInstancedInterleavedBuffer){for(let xe=0;xe<z.locationSize;xe++)m(z.location+xe,te.meshPerAttribute);A.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let xe=0;xe<z.locationSize;xe++)x(z.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let xe=0;xe<z.locationSize;xe++)S(z.location+xe,q/z.locationSize,Se,ie,me*Fe,(we+q/z.locationSize*xe)*Fe,K)}else{if(Q.isInstancedBufferAttribute){for(let te=0;te<z.locationSize;te++)m(z.location+te,Q.meshPerAttribute);A.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let te=0;te<z.locationSize;te++)x(z.location+te);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let te=0;te<z.locationSize;te++)S(z.location+te,q/z.locationSize,Se,ie,q*Fe,q/z.locationSize*te*Fe,K)}}else if(P!==void 0){const ie=P[X];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(z.location,ie);break;case 3:r.vertexAttrib3fv(z.location,ie);break;case 4:r.vertexAttrib4fv(z.location,ie);break;default:r.vertexAttrib1fv(z.location,ie)}}}}v()}function _(){T();for(const A in n){const R=n[A];for(const D in R){const I=R[D];for(const U in I)u(I[U].object),delete I[U];delete R[D]}delete n[A]}}function M(A){if(n[A.id]===void 0)return;const R=n[A.id];for(const D in R){const I=R[D];for(const U in I)u(I[U].object),delete I[U];delete R[D]}delete n[A.id]}function w(A){for(const R in n){const D=n[R];if(D[A.id]===void 0)continue;const I=D[A.id];for(const U in I)u(I[U].object),delete I[U];delete D[A.id]}}function T(){C(),o=!0,i!==s&&(i=s,d(i.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:T,resetDefaultState:C,dispose:_,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:x,disableUnusedAttributes:v}}function sx(r,e,t){let n;function s(d){n=d}function i(d,u){r.drawArrays(n,d,u),t.update(u,n,1)}function o(d,u,h){h!==0&&(r.drawArraysInstanced(n,d,u,h),t.update(u,n,h))}function l(d,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(d,u,h,p){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d.length;g++)o(d[g],u[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,d,0,u,0,p,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y]*p[y];t.update(g,n,1)}}this.setMode=s,this.render=i,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function ix(r,e,t,n){let s;function i(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Ht&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const T=w===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Dn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==bn&&!T)}function c(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const u=c(d);u!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",u,"instead."),d=u);const h=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=g>0,M=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:_,maxSamples:M}}function rx(r){const e=this;let t=null,n=0,s=!1,i=!1;const o=new Jn,l=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const f=h.length!==0||p||n!==0||s;return s=p,n=h.length,f},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,f){const g=h.clippingPlanes,y=h.clipIntersection,x=h.clipShadows,m=r.get(h);if(!s||g===null||g.length===0||i&&!x)i?u(null):d();else{const v=i?0:n,S=v*4;let b=m.clippingState||null;c.value=b,b=u(g,p,S,f);for(let _=0;_!==S;++_)b[_]=t[_];m.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function d(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,f,g){const y=h!==null?h.length:0;let x=null;if(y!==0){if(x=c.value,g!==!0||x===null){const m=f+y*4,v=p.matrixWorldInverse;l.getNormalMatrix(v),(x===null||x.length<m)&&(x=new Float32Array(m));for(let S=0,b=f;S!==y;++S,b+=4)o.copy(h[S]).applyMatrix4(v,l),o.normal.toArray(x,b),x[b+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}function ax(r){let e=new WeakMap;function t(o,l){return l===to?o.mapping=ri:l===no&&(o.mapping=ai),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===to||l===no)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const d=new lm(c.height);return d.fromEquirectangularTexture(r,o),e.set(o,d),o.addEventListener("dispose",s),t(d.texture,o.mapping)}else return null}}return o}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function i(){e=new WeakMap}return{get:n,dispose:i}}const $s=4,nc=[.125,.215,.35,.446,.526,.582],ys=20,Ia=new tl,sc=new rt;let Da=null,Pa=0,Fa=0,ka=!1;const ms=(1+Math.sqrt(5))/2,qs=1/ms,ic=[new k(-ms,qs,0),new k(ms,qs,0),new k(-qs,0,ms),new k(qs,0,ms),new k(0,ms,-qs),new k(0,ms,qs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],ox=new k;class rc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,i={}){const{size:o=256,position:l=ox}=i;Da=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da,Pa,Fa),this._renderer.xr.enabled=ka,e.scissorTest=!1,xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:fi,format:Ht,colorSpace:li,depthBuffer:!1},s=ac(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ac(e,t,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lx(i)),this._blurMaterial=cx(i,e,t)}return s}_compileMaterial(e){const t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,n,s,i){const c=new dn(90,1,t,n),d=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(sc),h.toneMapping=is,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const y=new as({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),x=new Mt(new pi,y);let m=!1;const v=e.background;v?v.isColor&&(y.color.copy(v),e.background=null,m=!0):(y.color.copy(sc),m=!0);for(let S=0;S<6;S++){const b=S%3;b===0?(c.up.set(0,d[S],0),c.position.set(i.x,i.y,i.z),c.lookAt(i.x+u[S],i.y,i.z)):b===1?(c.up.set(0,0,d[S]),c.position.set(i.x,i.y,i.z),c.lookAt(i.x,i.y+u[S],i.z)):(c.up.set(0,d[S],0),c.position.set(i.x,i.y,i.z),c.lookAt(i.x,i.y,i.z+u[S]));const _=this._cubeSize;xr(s,b*_,S>2?_:0,_,_),h.setRenderTarget(s),m&&h.render(x,c),h.render(e,c)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ri||e.mapping===ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oc());const i=s?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],i),l=i.uniforms;l.envMap.value=e;const c=this._cubeSize;xr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ia)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let i=1;i<s;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),l=ic[(s-i-1)%ic.length];this._blur(e,i-1,i,o,l)}t.autoClear=n}_blur(e,t,n,s,i){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",i),this._halfBlur(o,e,n,n,s,"longitudinal",i)}_halfBlur(e,t,n,s,i,o,l){const c=this._renderer,d=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mt(this._lodPlanes[s],d),p=d.uniforms,f=this._sizeLods[n]-1,g=isFinite(i)?Math.PI/(2*f):2*Math.PI/(2*ys-1),y=i/g,x=isFinite(i)?1+Math.floor(u*y):ys;x>ys&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ys}`);const m=[];let v=0;for(let w=0;w<ys;++w){const T=w/y,C=Math.exp(-T*T/2);m.push(C),w===0?v+=C:w<x&&(v+=2*C)}for(let w=0;w<m.length;w++)m[w]=m[w]/v;p.envMap.value=e.texture,p.samples.value=x,p.weights.value=m,p.latitudinal.value=o==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:S}=this;p.dTheta.value=g,p.mipInt.value=S-n;const b=this._sizeLods[s],_=3*b*(s>S-$s?s-S+$s:0),M=4*(this._cubeSize-b);xr(t,_,M,3*b,2*b),c.setRenderTarget(t),c.render(h,Ia)}}function lx(r){const e=[],t=[],n=[];let s=r;const i=r-$s+1+nc.length;for(let o=0;o<i;o++){const l=Math.pow(2,s);t.push(l);let c=1/l;o>r-$s?c=nc[o-r+$s-1]:o===0&&(c=0),n.push(c);const d=1/(l-2),u=-d,h=1+d,p=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,y=3,x=2,m=1,v=new Float32Array(y*g*f),S=new Float32Array(x*g*f),b=new Float32Array(m*g*f);for(let M=0;M<f;M++){const w=M%3*2/3-1,T=M>2?0:-1,C=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];v.set(C,y*g*M),S.set(p,x*g*M);const A=[M,M,M,M,M,M];b.set(A,m*g*M)}const _=new mn;_.setAttribute("position",new pn(v,y)),_.setAttribute("uv",new pn(S,x)),_.setAttribute("faceIndex",new pn(b,m)),e.push(_),s>$s&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ac(r,e,t){const n=new rs(r,e,t);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function cx(r,e,t){const n=new Float32Array(ys),s=new k(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function oc(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function lc(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function nl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dx(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,d=c===to||c===no,u=c===ri||c===ai;if(d||u){let h=e.get(l);const p=h!==void 0?h.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return t===null&&(t=new rc(r)),h=d?t.fromEquirectangular(l,h):t.fromCubemap(l,h),h.texture.pmremVersion=l.pmremVersion,e.set(l,h),h.texture;if(h!==void 0)return h.texture;{const f=l.image;return d&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new rc(r)),h=d?t.fromEquirectangular(l):t.fromCubemap(l),h.texture.pmremVersion=l.pmremVersion,e.set(l,h),l.addEventListener("dispose",i),h.texture):null}}}return l}function s(l){let c=0;const d=6;for(let u=0;u<d;u++)l[u]!==void 0&&c++;return c===d}function i(l){const c=l.target;c.removeEventListener("dispose",i);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ux(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Oi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hx(r,e,t,n){const s={},i=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];const f=i.get(p);f&&(e.remove(f),i.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(h,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function c(h){const p=h.attributes;for(const f in p)e.update(p[f],r.ARRAY_BUFFER)}function d(h){const p=[],f=h.index,g=h.attributes.position;let y=0;if(f!==null){const v=f.array;y=f.version;for(let S=0,b=v.length;S<b;S+=3){const _=v[S+0],M=v[S+1],w=v[S+2];p.push(_,M,M,w,w,_)}}else if(g!==void 0){const v=g.array;y=g.version;for(let S=0,b=v.length/3-1;S<b;S+=3){const _=S+0,M=S+1,w=S+2;p.push(_,M,M,w,w,_)}}else return;const x=new(Dd(p)?Ud:Ld)(p,1);x.version=y;const m=i.get(h);m&&e.remove(m),i.set(h,x)}function u(h){const p=i.get(h);if(p){const f=h.index;f!==null&&p.version<f.version&&d(h)}else d(h);return i.get(h)}return{get:l,update:c,getWireframeAttribute:u}}function fx(r,e,t){let n;function s(p){n=p}let i,o;function l(p){i=p.type,o=p.bytesPerElement}function c(p,f){r.drawElements(n,f,i,p*o),t.update(f,n,1)}function d(p,f,g){g!==0&&(r.drawElementsInstanced(n,f,i,p*o,g),t.update(f,n,g))}function u(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,i,p,0,g);let x=0;for(let m=0;m<g;m++)x+=f[m];t.update(x,n,1)}function h(p,f,g,y){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<p.length;m++)d(p[m]/o,f[m],y[m]);else{x.multiDrawElementsInstancedWEBGL(n,f,0,i,p,0,y,0,g);let m=0;for(let v=0;v<g;v++)m+=f[v]*y[v];t.update(m,n,1)}}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function px(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,o,l){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=l*(i/3);break;case r.LINES:t.lines+=l*(i/2);break;case r.LINE_STRIP:t.lines+=l*(i-1);break;case r.LINE_LOOP:t.lines+=l*i;break;case r.POINTS:t.points+=l*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function mx(r,e,t){const n=new WeakMap,s=new bt;function i(o,l,c){const d=o.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=u!==void 0?u.length:0;let p=n.get(l);if(p===void 0||p.count!==h){let C=function(){w.dispose(),n.delete(l),l.removeEventListener("dispose",C)};p!==void 0&&p.texture.dispose();const f=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],v=l.morphAttributes.color||[];let S=0;f===!0&&(S=1),g===!0&&(S=2),y===!0&&(S=3);let b=l.attributes.position.count*S,_=1;b>e.maxTextureSize&&(_=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const M=new Float32Array(b*_*4*h),w=new Pd(M,b,_,h);w.type=bn,w.needsUpdate=!0;const T=S*4;for(let A=0;A<h;A++){const R=x[A],D=m[A],I=v[A],U=b*_*4*A;for(let j=0;j<R.count;j++){const P=j*T;f===!0&&(s.fromBufferAttribute(R,j),M[U+P+0]=s.x,M[U+P+1]=s.y,M[U+P+2]=s.z,M[U+P+3]=0),g===!0&&(s.fromBufferAttribute(D,j),M[U+P+4]=s.x,M[U+P+5]=s.y,M[U+P+6]=s.z,M[U+P+7]=0),y===!0&&(s.fromBufferAttribute(I,j),M[U+P+8]=s.x,M[U+P+9]=s.y,M[U+P+10]=s.z,M[U+P+11]=I.itemSize===4?s.w:1)}}p={count:h,texture:w,size:new Be(b,_)},n.set(l,p),l.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<d.length;y++)f+=d[y];const g=l.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",d)}c.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}return{update:i}}function gx(r,e,t,n){let s=new WeakMap;function i(c){const d=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==d&&(e.update(h),s.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return h}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:i,dispose:o}}const Wd=new Gt,cc=new Jo(1,1),Xd=new Pd,qd=new Hp,Qd=new zd,dc=[],uc=[],hc=new Float32Array(16),fc=new Float32Array(9),pc=new Float32Array(4);function mi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let i=dc[s];if(i===void 0&&(i=new Float32Array(s),dc[s]=i),e!==0){n.toArray(i,0);for(let o=1,l=0;o!==e;++o)l+=t,r[o].toArray(i,l)}return i}function Dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Pt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Zr(r,e){let t=uc[e];t===void 0&&(t=new Int32Array(e),uc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function xx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function yx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2fv(this.addr,e),Pt(t,e)}}function vx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;r.uniform3fv(this.addr,e),Pt(t,e)}}function bx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4fv(this.addr,e),Pt(t,e)}}function Sx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Dt(t,n))return;pc.set(n),r.uniformMatrix2fv(this.addr,!1,pc),Pt(t,n)}}function Ax(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Dt(t,n))return;fc.set(n),r.uniformMatrix3fv(this.addr,!1,fc),Pt(t,n)}}function _x(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Dt(t,n))return;hc.set(n),r.uniformMatrix4fv(this.addr,!1,hc),Pt(t,n)}}function wx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Cx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2iv(this.addr,e),Pt(t,e)}}function Mx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;r.uniform3iv(this.addr,e),Pt(t,e)}}function Ex(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4iv(this.addr,e),Pt(t,e)}}function Tx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2uiv(this.addr,e),Pt(t,e)}}function Nx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;r.uniform3uiv(this.addr,e),Pt(t,e)}}function Ix(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4uiv(this.addr,e),Pt(t,e)}}function Dx(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let i;this.type===r.SAMPLER_2D_SHADOW?(cc.compareFunction=Nd,i=cc):i=Wd,t.setTexture2D(e||i,s)}function Px(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qd,s)}function Fx(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Qd,s)}function kx(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Xd,s)}function Bx(r){switch(r){case 5126:return xx;case 35664:return yx;case 35665:return vx;case 35666:return bx;case 35674:return Sx;case 35675:return Ax;case 35676:return _x;case 5124:case 35670:return wx;case 35667:case 35671:return Cx;case 35668:case 35672:return Mx;case 35669:case 35673:return Ex;case 5125:return Tx;case 36294:return Rx;case 36295:return Nx;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return kx}}function Lx(r,e){r.uniform1fv(this.addr,e)}function Ux(r,e){const t=mi(e,this.size,2);r.uniform2fv(this.addr,t)}function Ox(r,e){const t=mi(e,this.size,3);r.uniform3fv(this.addr,t)}function jx(r,e){const t=mi(e,this.size,4);r.uniform4fv(this.addr,t)}function zx(r,e){const t=mi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Hx(r,e){const t=mi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Vx(r,e){const t=mi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Gx(r,e){r.uniform1iv(this.addr,e)}function Wx(r,e){r.uniform2iv(this.addr,e)}function Xx(r,e){r.uniform3iv(this.addr,e)}function qx(r,e){r.uniform4iv(this.addr,e)}function Qx(r,e){r.uniform1uiv(this.addr,e)}function Yx(r,e){r.uniform2uiv(this.addr,e)}function Kx(r,e){r.uniform3uiv(this.addr,e)}function $x(r,e){r.uniform4uiv(this.addr,e)}function Zx(r,e,t){const n=this.cache,s=e.length,i=Zr(t,s);Dt(n,i)||(r.uniform1iv(this.addr,i),Pt(n,i));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Wd,i[o])}function Jx(r,e,t){const n=this.cache,s=e.length,i=Zr(t,s);Dt(n,i)||(r.uniform1iv(this.addr,i),Pt(n,i));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||qd,i[o])}function ey(r,e,t){const n=this.cache,s=e.length,i=Zr(t,s);Dt(n,i)||(r.uniform1iv(this.addr,i),Pt(n,i));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Qd,i[o])}function ty(r,e,t){const n=this.cache,s=e.length,i=Zr(t,s);Dt(n,i)||(r.uniform1iv(this.addr,i),Pt(n,i));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Xd,i[o])}function ny(r){switch(r){case 5126:return Lx;case 35664:return Ux;case 35665:return Ox;case 35666:return jx;case 35674:return zx;case 35675:return Hx;case 35676:return Vx;case 5124:case 35670:return Gx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return qx;case 5125:return Qx;case 36294:return Yx;case 36295:return Kx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ty}}class sy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bx(t.type)}}class iy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ny(t.type)}}class ry{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let i=0,o=s.length;i!==o;++i){const l=s[i];l.setValue(e,t[l.id],n)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function mc(r,e){r.seq.push(e),r.map[e.id]=e}function ay(r,e,t){const n=r.name,s=n.length;for(Ba.lastIndex=0;;){const i=Ba.exec(n),o=Ba.lastIndex;let l=i[1];const c=i[2]==="]",d=i[3];if(c&&(l=l|0),d===void 0||d==="["&&o+2===s){mc(t,d===void 0?new sy(l,r,e):new iy(l,r,e));break}else{let h=t.map[l];h===void 0&&(h=new ry(l),mc(t,h)),t=h}}}class Nr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const i=e.getActiveUniform(t,s),o=e.getUniformLocation(t,i.name);ay(i,o,this)}}setValue(e,t,n,s){const i=this.map[t];i!==void 0&&i.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let i=0,o=t.length;i!==o;++i){const l=t[i],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,i=e.length;s!==i;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function gc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const oy=37297;let ly=0;function cy(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let o=s;o<i;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const xc=new Qe;function dy(r){it._getMatrix(xc,it.workingColorSpace,r);const e=`mat3( ${xc.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(r)){case kr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function yc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=(r.getShaderInfoLog(e)||"").trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+i+`

`+cy(r.getShaderSource(e),l)}else return i}function uy(r,e){const t=dy(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function hy(r,e){let t;switch(e){case pp:t="Linear";break;case mp:t="Reinhard";break;case gp:t="Cineon";break;case xp:t="ACESFilmic";break;case vp:t="AgX";break;case bp:t="Neutral";break;case yp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yr=new k;function fy(){it.getLuminanceCoefficients(yr);const r=yr.x.toFixed(4),e=yr.y.toFixed(4),t=yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function py(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wi).join(`
`)}function my(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gy(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const i=r.getActiveAttrib(e,s),o=i.name;let l=1;i.type===r.FLOAT_MAT2&&(l=2),i.type===r.FLOAT_MAT3&&(l=3),i.type===r.FLOAT_MAT4&&(l=4),t[o]={type:i.type,location:r.getAttribLocation(e,o),locationSize:l}}return t}function wi(r){return r!==""}function vc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(r){return r.replace(xy,vy)}const yy=new Map;function vy(r,e){let t=Je[e];if(t===void 0){const n=yy.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ko(t)}const by=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sc(r){return r.replace(by,Sy)}function Sy(r,e,t,n){let s="";for(let i=parseInt(e);i<parseInt(t);i++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return s}function Ac(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ay(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Qf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function _y(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ri:case ai:e="ENVMAP_TYPE_CUBE";break;case Yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wy(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ai:e="ENVMAP_MODE_REFRACTION";break}return e}function Cy(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case bd:e="ENVMAP_BLENDING_MULTIPLY";break;case hp:e="ENVMAP_BLENDING_MIX";break;case fp:e="ENVMAP_BLENDING_ADD";break}return e}function My(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ey(r,e,t,n){const s=r.getContext(),i=t.defines;let o=t.vertexShader,l=t.fragmentShader;const c=Ay(t),d=_y(t),u=wy(t),h=Cy(t),p=My(t),f=py(t),g=my(i),y=s.createProgram();let x,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wi).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wi).join(`
`),m.length>0&&(m+=`
`)):(x=[Ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),m=[Ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==is?"#define TONE_MAPPING":"",t.toneMapping!==is?Je.tonemapping_pars_fragment:"",t.toneMapping!==is?hy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,uy("linearToOutputTexel",t.outputColorSpace),fy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),o=ko(o),o=vc(o,t),o=bc(o,t),l=ko(l),l=vc(l,t),l=bc(l,t),o=Sc(o),l=Sc(l),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=v+x+o,b=v+m+l,_=gc(s,s.VERTEX_SHADER,S),M=gc(s,s.FRAGMENT_SHADER,b);s.attachShader(y,_),s.attachShader(y,M),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function w(R){if(r.debug.checkShaderErrors){const D=s.getProgramInfoLog(y)||"",I=s.getShaderInfoLog(_)||"",U=s.getShaderInfoLog(M)||"",j=D.trim(),P=I.trim(),X=U.trim();let z=!0,Q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,y,_,M);else{const ie=yc(s,_,"vertex"),q=yc(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+j+`
`+ie+`
`+q)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(P===""||X==="")&&(Q=!1);Q&&(R.diagnostics={runnable:z,programLog:j,vertexShader:{log:P,prefix:x},fragmentShader:{log:X,prefix:m}})}s.deleteShader(_),s.deleteShader(M),T=new Nr(s,y),C=gy(s,y)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let C;this.getAttributes=function(){return C===void 0&&w(this),C};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(y,oy)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ly++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=_,this.fragmentShader=M,this}let Ty=0;class Ry{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),i=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ny(e),t.set(e,n)),n}}class Ny{constructor(e){this.id=Ty++,this.code=e,this.usedTimes=0}}function Iy(r,e,t,n,s,i,o){const l=new kd,c=new Ry,d=new Set,u=[],h=s.logarithmicDepthBuffer,p=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(C){return d.add(C),C===0?"uv":`uv${C}`}function x(C,A,R,D,I){const U=D.fog,j=I.geometry,P=C.isMeshStandardMaterial?D.environment:null,X=(C.isMeshStandardMaterial?t:e).get(C.envMap||P),z=X&&X.mapping===Yr?X.image.height:null,Q=g[C.type];C.precision!==null&&(f=s.getMaxPrecision(C.precision),f!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",f,"instead."));const ie=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,q=ie!==void 0?ie.length:0;let pe=0;j.morphAttributes.position!==void 0&&(pe=1),j.morphAttributes.normal!==void 0&&(pe=2),j.morphAttributes.color!==void 0&&(pe=3);let Te,Se,Fe,K;if(Q){const at=_n[Q];Te=at.vertexShader,Se=at.fragmentShader}else Te=C.vertexShader,Se=C.fragmentShader,c.update(C),Fe=c.getVertexShaderID(C),K=c.getFragmentShaderID(C);const te=r.getRenderTarget(),me=r.state.buffers.depth.getReversed(),we=I.isInstancedMesh===!0,xe=I.isBatchedMesh===!0,je=!!C.map,Ze=!!C.matcap,L=!!X,He=!!C.aoMap,Re=!!C.lightMap,Le=!!C.bumpMap,Me=!!C.normalMap,$e=!!C.displacementMap,be=!!C.emissiveMap,Ve=!!C.metalnessMap,St=!!C.roughnessMap,ft=C.anisotropy>0,F=C.clearcoat>0,E=C.dispersion>0,Y=C.iridescence>0,re=C.sheen>0,oe=C.transmission>0,ne=ft&&!!C.anisotropyMap,Oe=F&&!!C.clearcoatMap,he=F&&!!C.clearcoatNormalMap,ke=F&&!!C.clearcoatRoughnessMap,O=Y&&!!C.iridescenceMap,B=Y&&!!C.iridescenceThicknessMap,se=re&&!!C.sheenColorMap,ge=re&&!!C.sheenRoughnessMap,Ae=!!C.specularMap,ye=!!C.specularColorMap,We=!!C.specularIntensityMap,H=oe&&!!C.transmissionMap,ce=oe&&!!C.thicknessMap,ue=!!C.gradientMap,Ce=!!C.alphaMap,le=C.alphaTest>0,ae=!!C.alphaHash,Ne=!!C.extensions;let qe=is;C.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(qe=r.toneMapping);const pt={shaderID:Q,shaderType:C.type,shaderName:C.name,vertexShader:Te,fragmentShader:Se,defines:C.defines,customVertexShaderID:Fe,customFragmentShaderID:K,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:f,batching:xe,batchingColor:xe&&I._colorsTexture!==null,instancing:we,instancingColor:we&&I.instanceColor!==null,instancingMorph:we&&I.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:li,alphaToCoverage:!!C.alphaToCoverage,map:je,matcap:Ze,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:z,aoMap:He,lightMap:Re,bumpMap:Le,normalMap:Me,displacementMap:p&&$e,emissiveMap:be,normalMapObjectSpace:Me&&C.normalMapType===Cp,normalMapTangentSpace:Me&&C.normalMapType===wp,metalnessMap:Ve,roughnessMap:St,anisotropy:ft,anisotropyMap:ne,clearcoat:F,clearcoatMap:Oe,clearcoatNormalMap:he,clearcoatRoughnessMap:ke,dispersion:E,iridescence:Y,iridescenceMap:O,iridescenceThicknessMap:B,sheen:re,sheenColorMap:se,sheenRoughnessMap:ge,specularMap:Ae,specularColorMap:ye,specularIntensityMap:We,transmission:oe,transmissionMap:H,thicknessMap:ce,gradientMap:ue,opaque:C.transparent===!1&&C.blending===ss&&C.alphaToCoverage===!1,alphaMap:Ce,alphaTest:le,alphaHash:ae,combine:C.combine,mapUv:je&&y(C.map.channel),aoMapUv:He&&y(C.aoMap.channel),lightMapUv:Re&&y(C.lightMap.channel),bumpMapUv:Le&&y(C.bumpMap.channel),normalMapUv:Me&&y(C.normalMap.channel),displacementMapUv:$e&&y(C.displacementMap.channel),emissiveMapUv:be&&y(C.emissiveMap.channel),metalnessMapUv:Ve&&y(C.metalnessMap.channel),roughnessMapUv:St&&y(C.roughnessMap.channel),anisotropyMapUv:ne&&y(C.anisotropyMap.channel),clearcoatMapUv:Oe&&y(C.clearcoatMap.channel),clearcoatNormalMapUv:he&&y(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&y(C.clearcoatRoughnessMap.channel),iridescenceMapUv:O&&y(C.iridescenceMap.channel),iridescenceThicknessMapUv:B&&y(C.iridescenceThicknessMap.channel),sheenColorMapUv:se&&y(C.sheenColorMap.channel),sheenRoughnessMapUv:ge&&y(C.sheenRoughnessMap.channel),specularMapUv:Ae&&y(C.specularMap.channel),specularColorMapUv:ye&&y(C.specularColorMap.channel),specularIntensityMapUv:We&&y(C.specularIntensityMap.channel),transmissionMapUv:H&&y(C.transmissionMap.channel),thicknessMapUv:ce&&y(C.thicknessMap.channel),alphaMapUv:Ce&&y(C.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Me||ft),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!j.attributes.uv&&(je||Ce),fog:!!U,useFog:C.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:I.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:pe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:qe,decodeVideoTexture:je&&C.map.isVideoTexture===!0&&it.getTransfer(C.map.colorSpace)===ut,decodeVideoTextureEmissive:be&&C.emissiveMap.isVideoTexture===!0&&it.getTransfer(C.emissiveMap.colorSpace)===ut,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===un,flipSided:C.side===Yt,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ne&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&C.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return pt.vertexUv1s=d.has(1),pt.vertexUv2s=d.has(2),pt.vertexUv3s=d.has(3),d.clear(),pt}function m(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const R in C.defines)A.push(R),A.push(C.defines[R]);return C.isRawShaderMaterial===!1&&(v(A,C),S(A,C),A.push(r.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function v(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function S(C,A){l.disableAll(),A.supportsVertexTextures&&l.enable(0),A.instancing&&l.enable(1),A.instancingColor&&l.enable(2),A.instancingMorph&&l.enable(3),A.matcap&&l.enable(4),A.envMap&&l.enable(5),A.normalMapObjectSpace&&l.enable(6),A.normalMapTangentSpace&&l.enable(7),A.clearcoat&&l.enable(8),A.iridescence&&l.enable(9),A.alphaTest&&l.enable(10),A.vertexColors&&l.enable(11),A.vertexAlphas&&l.enable(12),A.vertexUv1s&&l.enable(13),A.vertexUv2s&&l.enable(14),A.vertexUv3s&&l.enable(15),A.vertexTangents&&l.enable(16),A.anisotropy&&l.enable(17),A.alphaHash&&l.enable(18),A.batching&&l.enable(19),A.dispersion&&l.enable(20),A.batchingColor&&l.enable(21),A.gradientMap&&l.enable(22),C.push(l.mask),l.disableAll(),A.fog&&l.enable(0),A.useFog&&l.enable(1),A.flatShading&&l.enable(2),A.logarithmicDepthBuffer&&l.enable(3),A.reversedDepthBuffer&&l.enable(4),A.skinning&&l.enable(5),A.morphTargets&&l.enable(6),A.morphNormals&&l.enable(7),A.morphColors&&l.enable(8),A.premultipliedAlpha&&l.enable(9),A.shadowMapEnabled&&l.enable(10),A.doubleSided&&l.enable(11),A.flipSided&&l.enable(12),A.useDepthPacking&&l.enable(13),A.dithering&&l.enable(14),A.transmission&&l.enable(15),A.sheen&&l.enable(16),A.opaque&&l.enable(17),A.pointsUvs&&l.enable(18),A.decodeVideoTexture&&l.enable(19),A.decodeVideoTextureEmissive&&l.enable(20),A.alphaToCoverage&&l.enable(21),C.push(l.mask)}function b(C){const A=g[C.type];let R;if(A){const D=_n[A];R=im.clone(D.uniforms)}else R=C.uniforms;return R}function _(C,A){let R;for(let D=0,I=u.length;D<I;D++){const U=u[D];if(U.cacheKey===A){R=U,++R.usedTimes;break}}return R===void 0&&(R=new Ey(r,A,C,i),u.push(R)),R}function M(C){if(--C.usedTimes===0){const A=u.indexOf(C);u[A]=u[u.length-1],u.pop(),C.destroy()}}function w(C){c.remove(C)}function T(){c.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:_,releaseProgram:M,releaseShaderCache:w,programs:u,dispose:T}}function Dy(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let l=r.get(o);return l===void 0&&(l={},r.set(o,l)),l}function n(o){r.delete(o)}function s(o,l,c){r.get(o)[l]=c}function i(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:i}}function Py(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function _c(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wc(){const r=[];let e=0;const t=[],n=[],s=[];function i(){e=0,t.length=0,n.length=0,s.length=0}function o(h,p,f,g,y,x){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:p,material:f,groupOrder:g,renderOrder:h.renderOrder,z:y,group:x},r[e]=m):(m.id=h.id,m.object=h,m.geometry=p,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=y,m.group=x),e++,m}function l(h,p,f,g,y,x){const m=o(h,p,f,g,y,x);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function c(h,p,f,g,y,x){const m=o(h,p,f,g,y,x);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function d(h,p){t.length>1&&t.sort(h||Py),n.length>1&&n.sort(p||_c),s.length>1&&s.sort(p||_c)}function u(){for(let h=e,p=r.length;h<p;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:i,push:l,unshift:c,finish:u,sort:d}}function Fy(){let r=new WeakMap;function e(n,s){const i=r.get(n);let o;return i===void 0?(o=new wc,r.set(n,[o])):s>=i.length?(o=new wc,i.push(o)):o=i[s],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ky(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new rt};break;case"SpotLight":t={position:new k,direction:new k,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new k,halfWidth:new k,halfHeight:new k};break}return r[e.id]=t,t}}}function By(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ly=0;function Uy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Oy(r){const e=new ky,t=By(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new k);const s=new k,i=new Ke,o=new Ke;function l(d){let u=0,h=0,p=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,g=0,y=0,x=0,m=0,v=0,S=0,b=0,_=0,M=0,w=0;d.sort(Uy);for(let C=0,A=d.length;C<A;C++){const R=d[C],D=R.color,I=R.intensity,U=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=D.r*I,h+=D.g*I,p+=D.b*I;else if(R.isLightProbe){for(let P=0;P<9;P++)n.probe[P].addScaledVector(R.sh.coefficients[P],I);w++}else if(R.isDirectionalLight){const P=e.get(R);if(P.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const X=R.shadow,z=t.get(R);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=R.shadow.matrix,v++}n.directional[f]=P,f++}else if(R.isSpotLight){const P=e.get(R);P.position.setFromMatrixPosition(R.matrixWorld),P.color.copy(D).multiplyScalar(I),P.distance=U,P.coneCos=Math.cos(R.angle),P.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),P.decay=R.decay,n.spot[y]=P;const X=R.shadow;if(R.map&&(n.spotLightMap[_]=R.map,_++,X.updateMatrices(R),R.castShadow&&M++),n.spotLightMatrix[y]=X.matrix,R.castShadow){const z=t.get(R);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.spotShadow[y]=z,n.spotShadowMap[y]=j,b++}y++}else if(R.isRectAreaLight){const P=e.get(R);P.color.copy(D).multiplyScalar(I),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),n.rectArea[x]=P,x++}else if(R.isPointLight){const P=e.get(R);if(P.color.copy(R.color).multiplyScalar(R.intensity),P.distance=R.distance,P.decay=R.decay,R.castShadow){const X=R.shadow,z=t.get(R);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,z.shadowCameraNear=X.camera.near,z.shadowCameraFar=X.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=P,g++}else if(R.isHemisphereLight){const P=e.get(R);P.skyColor.copy(R.color).multiplyScalar(I),P.groundColor.copy(R.groundColor).multiplyScalar(I),n.hemi[m]=P,m++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;const T=n.hash;(T.directionalLength!==f||T.pointLength!==g||T.spotLength!==y||T.rectAreaLength!==x||T.hemiLength!==m||T.numDirectionalShadows!==v||T.numPointShadows!==S||T.numSpotShadows!==b||T.numSpotMaps!==_||T.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=x,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+_-M,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,T.directionalLength=f,T.pointLength=g,T.spotLength=y,T.rectAreaLength=x,T.hemiLength=m,T.numDirectionalShadows=v,T.numPointShadows=S,T.numSpotShadows=b,T.numSpotMaps=_,T.numLightProbes=w,n.version=Ly++)}function c(d,u){let h=0,p=0,f=0,g=0,y=0;const x=u.matrixWorldInverse;for(let m=0,v=d.length;m<v;m++){const S=d[m];if(S.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),h++}else if(S.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),f++}else if(S.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(x),o.identity(),i.copy(S.matrixWorld),i.premultiply(x),o.extractRotation(i),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const b=n.point[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(x),p++}else if(S.isHemisphereLight){const b=n.hemi[y];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(x),y++}}}return{setup:l,setupView:c,state:n}}function Cc(r){const e=new Oy(r),t=[],n=[];function s(u){d.camera=u,t.length=0,n.length=0}function i(u){t.push(u)}function o(u){n.push(u)}function l(){e.setup(t)}function c(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:l,setupLightsView:c,pushLight:i,pushShadow:o}}function jy(r){let e=new WeakMap;function t(s,i=0){const o=e.get(s);let l;return o===void 0?(l=new Cc(r),e.set(s,[l])):i>=o.length?(l=new Cc(r),o.push(l)):l=o[i],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vy(r,e,t){let n=new Hd;const s=new Be,i=new Be,o=new bt,l=new mm({depthPacking:_p}),c=new gm,d={},u=t.maxTextureSize,h={[In]:Yt,[Yt]:In,[un]:un},p=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:zy,fragmentShader:Hy}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Mt(g,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yd;let m=this.type;this.render=function(M,w,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||M.length===0)return;const C=r.getRenderTarget(),A=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),D=r.state;D.setBlending(ns),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=m!==jn&&this.type===jn,U=m===jn&&this.type!==jn;for(let j=0,P=M.length;j<P;j++){const X=M[j],z=X.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const Q=z.getFrameExtents();if(s.multiply(Q),i.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(i.x=Math.floor(u/Q.x),s.x=i.x*Q.x,z.mapSize.x=i.x),s.y>u&&(i.y=Math.floor(u/Q.y),s.y=i.y*Q.y,z.mapSize.y=i.y)),z.map===null||I===!0||U===!0){const q=this.type!==jn?{minFilter:tn,magFilter:tn}:{};z.map!==null&&z.map.dispose(),z.map=new rs(s.x,s.y,q),z.map.texture.name=X.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const ie=z.getViewportCount();for(let q=0;q<ie;q++){const pe=z.getViewport(q);o.set(i.x*pe.x,i.y*pe.y,i.x*pe.z,i.y*pe.w),D.viewport(o),z.updateMatrices(X,q),n=z.getFrustum(),b(w,T,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===jn&&v(z,T),z.needsUpdate=!1}m=this.type,x.needsUpdate=!1,r.setRenderTarget(C,A,R)};function v(M,w){const T=e.update(y);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new rs(s.x,s.y)),p.uniforms.shadow_pass.value=M.map.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(w,null,T,p,y,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(w,null,T,f,y,null)}function S(M,w,T,C){let A=null;const R=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)A=R;else if(A=T.isPointLight===!0?c:l,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=A.uuid,I=w.uuid;let U=d[D];U===void 0&&(U={},d[D]=U);let j=U[I];j===void 0&&(j=A.clone(),U[I]=j,w.addEventListener("dispose",_)),A=j}if(A.visible=w.visible,A.wireframe=w.wireframe,C===jn?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:h[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,T.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const D=r.properties.get(A);D.light=T}return A}function b(M,w,T,C,A){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&A===jn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const I=e.update(M),U=M.material;if(Array.isArray(U)){const j=I.groups;for(let P=0,X=j.length;P<X;P++){const z=j[P],Q=U[z.materialIndex];if(Q&&Q.visible){const ie=S(M,Q,C,A);M.onBeforeShadow(r,M,w,T,I,ie,z),r.renderBufferDirect(T,null,I,ie,M,z),M.onAfterShadow(r,M,w,T,I,ie,z)}}}else if(U.visible){const j=S(M,U,C,A);M.onBeforeShadow(r,M,w,T,I,j,null),r.renderBufferDirect(T,null,I,j,M,null),M.onAfterShadow(r,M,w,T,I,j,null)}}const D=M.children;for(let I=0,U=D.length;I<U;I++)b(D[I],w,T,C,A)}function _(M){M.target.removeEventListener("dispose",_);for(const T in d){const C=d[T],A=M.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const Gy={[Qa]:Ya,[Ka]:Ja,[$a]:eo,[ii]:Za,[Ya]:Qa,[Ja]:Ka,[eo]:$a,[Za]:ii};function Wy(r,e){function t(){let H=!1;const ce=new bt;let ue=null;const Ce=new bt(0,0,0,0);return{setMask:function(le){ue!==le&&!H&&(r.colorMask(le,le,le,le),ue=le)},setLocked:function(le){H=le},setClear:function(le,ae,Ne,qe,pt){pt===!0&&(le*=qe,ae*=qe,Ne*=qe),ce.set(le,ae,Ne,qe),Ce.equals(ce)===!1&&(r.clearColor(le,ae,Ne,qe),Ce.copy(ce))},reset:function(){H=!1,ue=null,Ce.set(-1,0,0,0)}}}function n(){let H=!1,ce=!1,ue=null,Ce=null,le=null;return{setReversed:function(ae){if(ce!==ae){const Ne=e.get("EXT_clip_control");ae?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ce=ae;const qe=le;le=null,this.setClear(qe)}},getReversed:function(){return ce},setTest:function(ae){ae?te(r.DEPTH_TEST):me(r.DEPTH_TEST)},setMask:function(ae){ue!==ae&&!H&&(r.depthMask(ae),ue=ae)},setFunc:function(ae){if(ce&&(ae=Gy[ae]),Ce!==ae){switch(ae){case Qa:r.depthFunc(r.NEVER);break;case Ya:r.depthFunc(r.ALWAYS);break;case Ka:r.depthFunc(r.LESS);break;case ii:r.depthFunc(r.LEQUAL);break;case $a:r.depthFunc(r.EQUAL);break;case Za:r.depthFunc(r.GEQUAL);break;case Ja:r.depthFunc(r.GREATER);break;case eo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ce=ae}},setLocked:function(ae){H=ae},setClear:function(ae){le!==ae&&(ce&&(ae=1-ae),r.clearDepth(ae),le=ae)},reset:function(){H=!1,ue=null,Ce=null,le=null,ce=!1}}}function s(){let H=!1,ce=null,ue=null,Ce=null,le=null,ae=null,Ne=null,qe=null,pt=null;return{setTest:function(at){H||(at?te(r.STENCIL_TEST):me(r.STENCIL_TEST))},setMask:function(at){ce!==at&&!H&&(r.stencilMask(at),ce=at)},setFunc:function(at,Pn,An){(ue!==at||Ce!==Pn||le!==An)&&(r.stencilFunc(at,Pn,An),ue=at,Ce=Pn,le=An)},setOp:function(at,Pn,An){(ae!==at||Ne!==Pn||qe!==An)&&(r.stencilOp(at,Pn,An),ae=at,Ne=Pn,qe=An)},setLocked:function(at){H=at},setClear:function(at){pt!==at&&(r.clearStencil(at),pt=at)},reset:function(){H=!1,ce=null,ue=null,Ce=null,le=null,ae=null,Ne=null,qe=null,pt=null}}}const i=new t,o=new n,l=new s,c=new WeakMap,d=new WeakMap;let u={},h={},p=new WeakMap,f=[],g=null,y=!1,x=null,m=null,v=null,S=null,b=null,_=null,M=null,w=new rt(0,0,0),T=0,C=!1,A=null,R=null,D=null,I=null,U=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,X=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),P=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),P=X>=2);let Q=null,ie={};const q=r.getParameter(r.SCISSOR_BOX),pe=r.getParameter(r.VIEWPORT),Te=new bt().fromArray(q),Se=new bt().fromArray(pe);function Fe(H,ce,ue,Ce){const le=new Uint8Array(4),ae=r.createTexture();r.bindTexture(H,ae),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ne=0;Ne<ue;Ne++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,Ce,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(ce+Ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return ae}const K={};K[r.TEXTURE_2D]=Fe(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),o.setClear(1),l.setClear(0),te(r.DEPTH_TEST),o.setFunc(ii),Le(!1),Me(Nl),te(r.CULL_FACE),He(ns);function te(H){u[H]!==!0&&(r.enable(H),u[H]=!0)}function me(H){u[H]!==!1&&(r.disable(H),u[H]=!1)}function we(H,ce){return h[H]!==ce?(r.bindFramebuffer(H,ce),h[H]=ce,H===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ce),H===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function xe(H,ce){let ue=f,Ce=!1;if(H){ue=p.get(ce),ue===void 0&&(ue=[],p.set(ce,ue));const le=H.textures;if(ue.length!==le.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let ae=0,Ne=le.length;ae<Ne;ae++)ue[ae]=r.COLOR_ATTACHMENT0+ae;ue.length=le.length,Ce=!0}}else ue[0]!==r.BACK&&(ue[0]=r.BACK,Ce=!0);Ce&&r.drawBuffers(ue)}function je(H){return g!==H?(r.useProgram(H),g=H,!0):!1}const Ze={[xs]:r.FUNC_ADD,[Yf]:r.FUNC_SUBTRACT,[Kf]:r.FUNC_REVERSE_SUBTRACT};Ze[$f]=r.MIN,Ze[Zf]=r.MAX;const L={[Jf]:r.ZERO,[ep]:r.ONE,[tp]:r.SRC_COLOR,[Fi]:r.SRC_ALPHA,[op]:r.SRC_ALPHA_SATURATE,[rp]:r.DST_COLOR,[sp]:r.DST_ALPHA,[np]:r.ONE_MINUS_SRC_COLOR,[ki]:r.ONE_MINUS_SRC_ALPHA,[ap]:r.ONE_MINUS_DST_COLOR,[ip]:r.ONE_MINUS_DST_ALPHA,[lp]:r.CONSTANT_COLOR,[cp]:r.ONE_MINUS_CONSTANT_COLOR,[dp]:r.CONSTANT_ALPHA,[up]:r.ONE_MINUS_CONSTANT_ALPHA};function He(H,ce,ue,Ce,le,ae,Ne,qe,pt,at){if(H===ns){y===!0&&(me(r.BLEND),y=!1);return}if(y===!1&&(te(r.BLEND),y=!0),H!==vd){if(H!==x||at!==C){if((m!==xs||b!==xs)&&(r.blendEquation(r.FUNC_ADD),m=xs,b=xs),at)switch(H){case ss:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Il:r.blendFunc(r.ONE,r.ONE);break;case Dl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ss:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Il:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Dl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}v=null,S=null,_=null,M=null,w.set(0,0,0),T=0,x=H,C=at}return}le=le||ce,ae=ae||ue,Ne=Ne||Ce,(ce!==m||le!==b)&&(r.blendEquationSeparate(Ze[ce],Ze[le]),m=ce,b=le),(ue!==v||Ce!==S||ae!==_||Ne!==M)&&(r.blendFuncSeparate(L[ue],L[Ce],L[ae],L[Ne]),v=ue,S=Ce,_=ae,M=Ne),(qe.equals(w)===!1||pt!==T)&&(r.blendColor(qe.r,qe.g,qe.b,pt),w.copy(qe),T=pt),x=H,C=!1}function Re(H,ce){H.side===un?me(r.CULL_FACE):te(r.CULL_FACE);let ue=H.side===Yt;ce&&(ue=!ue),Le(ue),H.blending===ss&&H.transparent===!1?He(ns):He(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),i.setMask(H.colorWrite);const Ce=H.stencilWrite;l.setTest(Ce),Ce&&(l.setMask(H.stencilWriteMask),l.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),l.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),be(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):me(r.SAMPLE_ALPHA_TO_COVERAGE)}function Le(H){A!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),A=H)}function Me(H){H!==Xf?(te(r.CULL_FACE),H!==R&&(H===Nl?r.cullFace(r.BACK):H===qf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):me(r.CULL_FACE),R=H}function $e(H){H!==D&&(P&&r.lineWidth(H),D=H)}function be(H,ce,ue){H?(te(r.POLYGON_OFFSET_FILL),(I!==ce||U!==ue)&&(r.polygonOffset(ce,ue),I=ce,U=ue)):me(r.POLYGON_OFFSET_FILL)}function Ve(H){H?te(r.SCISSOR_TEST):me(r.SCISSOR_TEST)}function St(H){H===void 0&&(H=r.TEXTURE0+j-1),Q!==H&&(r.activeTexture(H),Q=H)}function ft(H,ce,ue){ue===void 0&&(Q===null?ue=r.TEXTURE0+j-1:ue=Q);let Ce=ie[ue];Ce===void 0&&(Ce={type:void 0,texture:void 0},ie[ue]=Ce),(Ce.type!==H||Ce.texture!==ce)&&(Q!==ue&&(r.activeTexture(ue),Q=ue),r.bindTexture(H,ce||K[H]),Ce.type=H,Ce.texture=ce)}function F(){const H=ie[Q];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Y(){try{r.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function re(){try{r.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function oe(){try{r.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ne(){try{r.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{r.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{r.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{r.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function O(){try{r.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function B(){try{r.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(H){Te.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),Te.copy(H))}function ge(H){Se.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Se.copy(H))}function Ae(H,ce){let ue=d.get(ce);ue===void 0&&(ue=new WeakMap,d.set(ce,ue));let Ce=ue.get(H);Ce===void 0&&(Ce=r.getUniformBlockIndex(ce,H.name),ue.set(H,Ce))}function ye(H,ce){const Ce=d.get(ce).get(H);c.get(ce)!==Ce&&(r.uniformBlockBinding(ce,Ce,H.__bindingPointIndex),c.set(ce,Ce))}function We(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,ie={},h={},p=new WeakMap,f=[],g=null,y=!1,x=null,m=null,v=null,S=null,b=null,_=null,M=null,w=new rt(0,0,0),T=0,C=!1,A=null,R=null,D=null,I=null,U=null,Te.set(0,0,r.canvas.width,r.canvas.height),Se.set(0,0,r.canvas.width,r.canvas.height),i.reset(),o.reset(),l.reset()}return{buffers:{color:i,depth:o,stencil:l},enable:te,disable:me,bindFramebuffer:we,drawBuffers:xe,useProgram:je,setBlending:He,setMaterial:Re,setFlipSided:Le,setCullFace:Me,setLineWidth:$e,setPolygonOffset:be,setScissorTest:Ve,activeTexture:St,bindTexture:ft,unbindTexture:F,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:O,texImage3D:B,updateUBOMapping:Ae,uniformBlockBinding:ye,texStorage2D:he,texStorage3D:ke,texSubImage2D:re,texSubImage3D:oe,compressedTexSubImage2D:ne,compressedTexSubImage3D:Oe,scissor:se,viewport:ge,reset:We}}function Xy(r,e,t,n,s,i,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Be,u=new WeakMap;let h;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(F,E){return f?new OffscreenCanvas(F,E):Lr("canvas")}function y(F,E,Y){let re=1;const oe=ft(F);if((oe.width>Y||oe.height>Y)&&(re=Y/Math.max(oe.width,oe.height)),re<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ne=Math.floor(re*oe.width),Oe=Math.floor(re*oe.height);h===void 0&&(h=g(ne,Oe));const he=E?g(ne,Oe):h;return he.width=ne,he.height=Oe,he.getContext("2d").drawImage(F,0,0,ne,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ne+"x"+Oe+")."),he}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),F;return F}function x(F){return F.generateMipmaps}function m(F){r.generateMipmap(F)}function v(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(F,E,Y,re,oe=!1){if(F!==null){if(r[F]!==void 0)return r[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ne=E;if(E===r.RED&&(Y===r.FLOAT&&(ne=r.R32F),Y===r.HALF_FLOAT&&(ne=r.R16F),Y===r.UNSIGNED_BYTE&&(ne=r.R8)),E===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ne=r.R8UI),Y===r.UNSIGNED_SHORT&&(ne=r.R16UI),Y===r.UNSIGNED_INT&&(ne=r.R32UI),Y===r.BYTE&&(ne=r.R8I),Y===r.SHORT&&(ne=r.R16I),Y===r.INT&&(ne=r.R32I)),E===r.RG&&(Y===r.FLOAT&&(ne=r.RG32F),Y===r.HALF_FLOAT&&(ne=r.RG16F),Y===r.UNSIGNED_BYTE&&(ne=r.RG8)),E===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ne=r.RG8UI),Y===r.UNSIGNED_SHORT&&(ne=r.RG16UI),Y===r.UNSIGNED_INT&&(ne=r.RG32UI),Y===r.BYTE&&(ne=r.RG8I),Y===r.SHORT&&(ne=r.RG16I),Y===r.INT&&(ne=r.RG32I)),E===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ne=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(ne=r.RGB16UI),Y===r.UNSIGNED_INT&&(ne=r.RGB32UI),Y===r.BYTE&&(ne=r.RGB8I),Y===r.SHORT&&(ne=r.RGB16I),Y===r.INT&&(ne=r.RGB32I)),E===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ne=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(ne=r.RGBA16UI),Y===r.UNSIGNED_INT&&(ne=r.RGBA32UI),Y===r.BYTE&&(ne=r.RGBA8I),Y===r.SHORT&&(ne=r.RGBA16I),Y===r.INT&&(ne=r.RGBA32I)),E===r.RGB&&(Y===r.UNSIGNED_INT_5_9_9_9_REV&&(ne=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&(ne=r.R11F_G11F_B10F)),E===r.RGBA){const Oe=oe?kr:it.getTransfer(re);Y===r.FLOAT&&(ne=r.RGBA32F),Y===r.HALF_FLOAT&&(ne=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(ne=Oe===ut?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function b(F,E){let Y;return F?E===null||E===hn||E===Li?Y=r.DEPTH24_STENCIL8:E===bn?Y=r.DEPTH32F_STENCIL8:E===Bi&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===hn||E===Li?Y=r.DEPTH_COMPONENT24:E===bn?Y=r.DEPTH_COMPONENT32F:E===Bi&&(Y=r.DEPTH_COMPONENT16),Y}function _(F,E){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==tn&&F.minFilter!==Mn?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function M(F){const E=F.target;E.removeEventListener("dispose",M),T(E),E.isVideoTexture&&u.delete(E)}function w(F){const E=F.target;E.removeEventListener("dispose",w),A(E)}function T(F){const E=n.get(F);if(E.__webglInit===void 0)return;const Y=F.source,re=p.get(Y);if(re){const oe=re[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&C(F),Object.keys(re).length===0&&p.delete(Y)}n.remove(F)}function C(F){const E=n.get(F);r.deleteTexture(E.__webglTexture);const Y=F.source,re=p.get(Y);delete re[E.__cacheKey],o.memory.textures--}function A(F){const E=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let oe=0;oe<E.__webglFramebuffer[re].length;oe++)r.deleteFramebuffer(E.__webglFramebuffer[re][oe]);else r.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)r.deleteFramebuffer(E.__webglFramebuffer[re]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=F.textures;for(let re=0,oe=Y.length;re<oe;re++){const ne=n.get(Y[re]);ne.__webglTexture&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(Y[re])}n.remove(F)}let R=0;function D(){R=0}function I(){const F=R;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),R+=1,F}function U(F){const E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function j(F,E){const Y=n.get(F);if(F.isVideoTexture&&Ve(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Y.__version!==F.version){const re=F.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Y,F,E);return}}else F.isExternalTexture&&(Y.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+E)}function P(F,E){const Y=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){K(Y,F,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+E)}function X(F,E){const Y=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){K(Y,F,E);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+E)}function z(F,E){const Y=n.get(F);if(F.version>0&&Y.__version!==F.version){te(Y,F,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+E)}const Q={[so]:r.REPEAT,[Ss]:r.CLAMP_TO_EDGE,[io]:r.MIRRORED_REPEAT},ie={[tn]:r.NEAREST,[Sp]:r.NEAREST_MIPMAP_NEAREST,[Zi]:r.NEAREST_MIPMAP_LINEAR,[Mn]:r.LINEAR,[oa]:r.LINEAR_MIPMAP_NEAREST,[As]:r.LINEAR_MIPMAP_LINEAR},q={[Mp]:r.NEVER,[Dp]:r.ALWAYS,[Ep]:r.LESS,[Nd]:r.LEQUAL,[Tp]:r.EQUAL,[Ip]:r.GEQUAL,[Rp]:r.GREATER,[Np]:r.NOTEQUAL};function pe(F,E){if(E.type===bn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Mn||E.magFilter===oa||E.magFilter===Zi||E.magFilter===As||E.minFilter===Mn||E.minFilter===oa||E.minFilter===Zi||E.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,Q[E.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,Q[E.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,Q[E.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,ie[E.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,ie[E.minFilter]),E.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,q[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===tn||E.minFilter!==Zi&&E.minFilter!==As||E.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Te(F,E){let Y=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",M));const re=E.source;let oe=p.get(re);oe===void 0&&(oe={},p.set(re,oe));const ne=U(E);if(ne!==F.__cacheKey){oe[ne]===void 0&&(oe[ne]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),oe[ne].usedTimes++;const Oe=oe[F.__cacheKey];Oe!==void 0&&(oe[F.__cacheKey].usedTimes--,Oe.usedTimes===0&&C(E)),F.__cacheKey=ne,F.__webglTexture=oe[ne].texture}return Y}function Se(F,E,Y){return Math.floor(Math.floor(F/Y)/E)}function Fe(F,E,Y,re){const ne=F.updateRanges;if(ne.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Y,re,E.data);else{ne.sort((B,se)=>B.start-se.start);let Oe=0;for(let B=1;B<ne.length;B++){const se=ne[Oe],ge=ne[B],Ae=se.start+se.count,ye=Se(ge.start,E.width,4),We=Se(se.start,E.width,4);ge.start<=Ae+1&&ye===We&&Se(ge.start+ge.count-1,E.width,4)===ye?se.count=Math.max(se.count,ge.start+ge.count-se.start):(++Oe,ne[Oe]=ge)}ne.length=Oe+1;const he=r.getParameter(r.UNPACK_ROW_LENGTH),ke=r.getParameter(r.UNPACK_SKIP_PIXELS),O=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let B=0,se=ne.length;B<se;B++){const ge=ne[B],Ae=Math.floor(ge.start/4),ye=Math.ceil(ge.count/4),We=Ae%E.width,H=Math.floor(Ae/E.width),ce=ye,ue=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,We),r.pixelStorei(r.UNPACK_SKIP_ROWS,H),t.texSubImage2D(r.TEXTURE_2D,0,We,H,ce,ue,Y,re,E.data)}F.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,he),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,O)}}function K(F,E,Y){let re=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=r.TEXTURE_3D);const oe=Te(F,E),ne=E.source;t.bindTexture(re,F.__webglTexture,r.TEXTURE0+Y);const Oe=n.get(ne);if(ne.version!==Oe.__version||oe===!0){t.activeTexture(r.TEXTURE0+Y);const he=it.getPrimaries(it.workingColorSpace),ke=E.colorSpace===es?null:it.getPrimaries(E.colorSpace),O=E.colorSpace===es||he===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);let B=y(E.image,!1,s.maxTextureSize);B=St(E,B);const se=i.convert(E.format,E.colorSpace),ge=i.convert(E.type);let Ae=S(E.internalFormat,se,ge,E.colorSpace,E.isVideoTexture);pe(re,E);let ye;const We=E.mipmaps,H=E.isVideoTexture!==!0,ce=Oe.__version===void 0||oe===!0,ue=ne.dataReady,Ce=_(E,B);if(E.isDepthTexture)Ae=b(E.format===Ui,E.type),ce&&(H?t.texStorage2D(r.TEXTURE_2D,1,Ae,B.width,B.height):t.texImage2D(r.TEXTURE_2D,0,Ae,B.width,B.height,0,se,ge,null));else if(E.isDataTexture)if(We.length>0){H&&ce&&t.texStorage2D(r.TEXTURE_2D,Ce,Ae,We[0].width,We[0].height);for(let le=0,ae=We.length;le<ae;le++)ye=We[le],H?ue&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,ye.width,ye.height,se,ge,ye.data):t.texImage2D(r.TEXTURE_2D,le,Ae,ye.width,ye.height,0,se,ge,ye.data);E.generateMipmaps=!1}else H?(ce&&t.texStorage2D(r.TEXTURE_2D,Ce,Ae,B.width,B.height),ue&&Fe(E,B,se,ge)):t.texImage2D(r.TEXTURE_2D,0,Ae,B.width,B.height,0,se,ge,B.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Ae,We[0].width,We[0].height,B.depth);for(let le=0,ae=We.length;le<ae;le++)if(ye=We[le],E.format!==Ht)if(se!==null)if(H){if(ue)if(E.layerUpdates.size>0){const Ne=tc(ye.width,ye.height,E.format,E.type);for(const qe of E.layerUpdates){const pt=ye.data.subarray(qe*Ne/ye.data.BYTES_PER_ELEMENT,(qe+1)*Ne/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,qe,ye.width,ye.height,1,se,pt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,ye.width,ye.height,B.depth,se,ye.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,le,Ae,ye.width,ye.height,B.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?ue&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,ye.width,ye.height,B.depth,se,ge,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,le,Ae,ye.width,ye.height,B.depth,0,se,ge,ye.data)}else{H&&ce&&t.texStorage2D(r.TEXTURE_2D,Ce,Ae,We[0].width,We[0].height);for(let le=0,ae=We.length;le<ae;le++)ye=We[le],E.format!==Ht?se!==null?H?ue&&t.compressedTexSubImage2D(r.TEXTURE_2D,le,0,0,ye.width,ye.height,se,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,le,Ae,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?ue&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,ye.width,ye.height,se,ge,ye.data):t.texImage2D(r.TEXTURE_2D,le,Ae,ye.width,ye.height,0,se,ge,ye.data)}else if(E.isDataArrayTexture)if(H){if(ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Ae,B.width,B.height,B.depth),ue)if(E.layerUpdates.size>0){const le=tc(B.width,B.height,E.format,E.type);for(const ae of E.layerUpdates){const Ne=B.data.subarray(ae*le/B.data.BYTES_PER_ELEMENT,(ae+1)*le/B.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ae,B.width,B.height,1,se,ge,Ne)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,se,ge,B.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,B.width,B.height,B.depth,0,se,ge,B.data);else if(E.isData3DTexture)H?(ce&&t.texStorage3D(r.TEXTURE_3D,Ce,Ae,B.width,B.height,B.depth),ue&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,se,ge,B.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,B.width,B.height,B.depth,0,se,ge,B.data);else if(E.isFramebufferTexture){if(ce)if(H)t.texStorage2D(r.TEXTURE_2D,Ce,Ae,B.width,B.height);else{let le=B.width,ae=B.height;for(let Ne=0;Ne<Ce;Ne++)t.texImage2D(r.TEXTURE_2D,Ne,Ae,le,ae,0,se,ge,null),le>>=1,ae>>=1}}else if(We.length>0){if(H&&ce){const le=ft(We[0]);t.texStorage2D(r.TEXTURE_2D,Ce,Ae,le.width,le.height)}for(let le=0,ae=We.length;le<ae;le++)ye=We[le],H?ue&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,se,ge,ye):t.texImage2D(r.TEXTURE_2D,le,Ae,se,ge,ye);E.generateMipmaps=!1}else if(H){if(ce){const le=ft(B);t.texStorage2D(r.TEXTURE_2D,Ce,Ae,le.width,le.height)}ue&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se,ge,B)}else t.texImage2D(r.TEXTURE_2D,0,Ae,se,ge,B);x(E)&&m(re),Oe.__version=ne.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function te(F,E,Y){if(E.image.length!==6)return;const re=Te(F,E),oe=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+Y);const ne=n.get(oe);if(oe.version!==ne.__version||re===!0){t.activeTexture(r.TEXTURE0+Y);const Oe=it.getPrimaries(it.workingColorSpace),he=E.colorSpace===es?null:it.getPrimaries(E.colorSpace),ke=E.colorSpace===es||Oe===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const O=E.isCompressedTexture||E.image[0].isCompressedTexture,B=E.image[0]&&E.image[0].isDataTexture,se=[];for(let ae=0;ae<6;ae++)!O&&!B?se[ae]=y(E.image[ae],!0,s.maxCubemapSize):se[ae]=B?E.image[ae].image:E.image[ae],se[ae]=St(E,se[ae]);const ge=se[0],Ae=i.convert(E.format,E.colorSpace),ye=i.convert(E.type),We=S(E.internalFormat,Ae,ye,E.colorSpace),H=E.isVideoTexture!==!0,ce=ne.__version===void 0||re===!0,ue=oe.dataReady;let Ce=_(E,ge);pe(r.TEXTURE_CUBE_MAP,E);let le;if(O){H&&ce&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,We,ge.width,ge.height);for(let ae=0;ae<6;ae++){le=se[ae].mipmaps;for(let Ne=0;Ne<le.length;Ne++){const qe=le[Ne];E.format!==Ht?Ae!==null?H?ue&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,0,0,qe.width,qe.height,Ae,qe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,We,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,0,0,qe.width,qe.height,Ae,ye,qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,We,qe.width,qe.height,0,Ae,ye,qe.data)}}}else{if(le=E.mipmaps,H&&ce){le.length>0&&Ce++;const ae=ft(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,We,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(B){H?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,se[ae].width,se[ae].height,Ae,ye,se[ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,se[ae].width,se[ae].height,0,Ae,ye,se[ae].data);for(let Ne=0;Ne<le.length;Ne++){const pt=le[Ne].image[ae].image;H?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,0,0,pt.width,pt.height,Ae,ye,pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,We,pt.width,pt.height,0,Ae,ye,pt.data)}}else{H?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ae,ye,se[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,Ae,ye,se[ae]);for(let Ne=0;Ne<le.length;Ne++){const qe=le[Ne];H?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,0,0,Ae,ye,qe.image[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,We,Ae,ye,qe.image[ae])}}}x(E)&&m(r.TEXTURE_CUBE_MAP),ne.__version=oe.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function me(F,E,Y,re,oe,ne){const Oe=i.convert(Y.format,Y.colorSpace),he=i.convert(Y.type),ke=S(Y.internalFormat,Oe,he,Y.colorSpace),O=n.get(E),B=n.get(Y);if(B.__renderTarget=E,!O.__hasExternalTextures){const se=Math.max(1,E.width>>ne),ge=Math.max(1,E.height>>ne);oe===r.TEXTURE_3D||oe===r.TEXTURE_2D_ARRAY?t.texImage3D(oe,ne,ke,se,ge,E.depth,0,Oe,he,null):t.texImage2D(oe,ne,ke,se,ge,0,Oe,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,F),be(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,oe,B.__webglTexture,0,$e(E)):(oe===r.TEXTURE_2D||oe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,oe,B.__webglTexture,ne),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(F,E,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,F),E.depthBuffer){const re=E.depthTexture,oe=re&&re.isDepthTexture?re.type:null,ne=b(E.stencilBuffer,oe),Oe=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=$e(E);be(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,ne,E.width,E.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,he,ne,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ne,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,F)}else{const re=E.textures;for(let oe=0;oe<re.length;oe++){const ne=re[oe],Oe=i.convert(ne.format,ne.colorSpace),he=i.convert(ne.type),ke=S(ne.internalFormat,Oe,he,ne.colorSpace),O=$e(E);Y&&be(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,O,ke,E.width,E.height):be(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O,ke,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ke,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xe(F,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(E.depthTexture);re.__renderTarget=E,(!re.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);const oe=re.__webglTexture,ne=$e(E);if(E.depthTexture.format===oi)be(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0);else if(E.depthTexture.format===Ui)be(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function je(F){const E=n.get(F),Y=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){const re=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){const oe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",oe)};re.addEventListener("dispose",oe),E.__depthDisposeCallback=oe}E.__boundDepthTexture=re}if(F.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const re=F.texture.mipmaps;re&&re.length>0?xe(E.__webglFramebuffer[0],F):xe(E.__webglFramebuffer,F)}else if(Y){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=r.createRenderbuffer(),we(E.__webglDepthbuffer[re],F,!1);else{const oe=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=E.__webglDepthbuffer[re];r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,ne)}}else{const re=F.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),we(E.__webglDepthbuffer,F,!1);else{const oe=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,ne)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(F,E,Y){const re=n.get(F);E!==void 0&&me(re.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&je(F)}function L(F){const E=F.texture,Y=n.get(F),re=n.get(E);F.addEventListener("dispose",w);const oe=F.textures,ne=F.isWebGLCubeRenderTarget===!0,Oe=oe.length>1;if(Oe||(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=E.version,o.memory.textures++),ne){Y.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[he]=[];for(let ke=0;ke<E.mipmaps.length;ke++)Y.__webglFramebuffer[he][ke]=r.createFramebuffer()}else Y.__webglFramebuffer[he]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)Y.__webglFramebuffer[he]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let he=0,ke=oe.length;he<ke;he++){const O=n.get(oe[he]);O.__webglTexture===void 0&&(O.__webglTexture=r.createTexture(),o.memory.textures++)}if(F.samples>0&&be(F)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let he=0;he<oe.length;he++){const ke=oe[he];Y.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[he]);const O=i.convert(ke.format,ke.colorSpace),B=i.convert(ke.type),se=S(ke.internalFormat,O,B,ke.colorSpace,F.isXRRenderTarget===!0),ge=$e(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,se,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,Y.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),we(Y.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ne){t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),pe(r.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let ke=0;ke<E.mipmaps.length;ke++)me(Y.__webglFramebuffer[he][ke],F,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke);else me(Y.__webglFramebuffer[he],F,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);x(E)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let he=0,ke=oe.length;he<ke;he++){const O=oe[he],B=n.get(O);let se=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(se=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,B.__webglTexture),pe(se,O),me(Y.__webglFramebuffer,F,O,r.COLOR_ATTACHMENT0+he,se,0),x(O)&&m(se)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(he=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,re.__webglTexture),pe(he,E),E.mipmaps&&E.mipmaps.length>0)for(let ke=0;ke<E.mipmaps.length;ke++)me(Y.__webglFramebuffer[ke],F,E,r.COLOR_ATTACHMENT0,he,ke);else me(Y.__webglFramebuffer,F,E,r.COLOR_ATTACHMENT0,he,0);x(E)&&m(he),t.unbindTexture()}F.depthBuffer&&je(F)}function He(F){const E=F.textures;for(let Y=0,re=E.length;Y<re;Y++){const oe=E[Y];if(x(oe)){const ne=v(F),Oe=n.get(oe).__webglTexture;t.bindTexture(ne,Oe),m(ne),t.unbindTexture()}}}const Re=[],Le=[];function Me(F){if(F.samples>0){if(be(F)===!1){const E=F.textures,Y=F.width,re=F.height;let oe=r.COLOR_BUFFER_BIT;const ne=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=n.get(F),he=E.length>1;if(he)for(let O=0;O<E.length;O++)t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const ke=F.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let O=0;O<E.length;O++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(oe|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(oe|=r.STENCIL_BUFFER_BIT)),he){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[O]);const B=n.get(E[O]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,B,0)}r.blitFramebuffer(0,0,Y,re,0,0,Y,re,oe,r.NEAREST),c===!0&&(Re.length=0,Le.length=0,Re.push(r.COLOR_ATTACHMENT0+O),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Re.push(ne),Le.push(ne),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Le)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Re))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let O=0;O<E.length;O++){t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[O]);const B=n.get(E[O]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,B,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&c){const E=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function $e(F){return Math.min(s.maxSamples,F.samples)}function be(F){const E=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ve(F){const E=o.render.frame;u.get(F)!==E&&(u.set(F,E),F.update())}function St(F,E){const Y=F.colorSpace,re=F.format,oe=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Y!==li&&Y!==es&&(it.getTransfer(Y)===ut?(re!==Ht||oe!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}function ft(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=j,this.setTexture2DArray=P,this.setTexture3D=X,this.setTextureCube=z,this.rebindTextures=Ze,this.setupRenderTarget=L,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=me,this.useMultisampledRTT=be}function Yd(r,e){function t(n,s=es){let i;const o=it.getTransfer(s);if(n===Dn)return r.UNSIGNED_BYTE;if(n===Qo)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Yo)return r.UNSIGNED_SHORT_5_5_5_1;if(n===wd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Cd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ad)return r.BYTE;if(n===_d)return r.SHORT;if(n===Bi)return r.UNSIGNED_SHORT;if(n===qo)return r.INT;if(n===hn)return r.UNSIGNED_INT;if(n===bn)return r.FLOAT;if(n===fi)return r.HALF_FLOAT;if(n===Md)return r.ALPHA;if(n===Ed)return r.RGB;if(n===Ht)return r.RGBA;if(n===oi)return r.DEPTH_COMPONENT;if(n===Ui)return r.DEPTH_STENCIL;if(n===Td)return r.RED;if(n===Kr)return r.RED_INTEGER;if(n===Rd)return r.RG;if(n===Ko)return r.RG_INTEGER;if(n===Js)return r.RGBA_INTEGER;if(n===Cr||n===Mr||n===Er||n===Tr)if(o===ut)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(n===Cr)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Er)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(n===Cr)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Er)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ro||n===ao||n===oo||n===lo)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(n===ro)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ao)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oo)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lo)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===co||n===uo||n===ho)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(n===co||n===uo)return o===ut?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===ho)return o===ut?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fo||n===po||n===mo||n===go||n===xo||n===yo||n===vo||n===bo||n===So||n===Ao||n===_o||n===wo||n===Co||n===Mo)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(n===fo)return o===ut?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===po)return o===ut?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mo)return o===ut?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===go)return o===ut?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xo)return o===ut?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return o===ut?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vo)return o===ut?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bo)return o===ut?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===So)return o===ut?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return o===ut?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_o)return o===ut?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wo)return o===ut?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return o===ut?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mo)return o===ut?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eo||n===To||n===Ro)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(n===Eo)return o===ut?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ro)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===No||n===Io||n===Do||n===Po)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(n===No)return i.COMPRESSED_RED_RGTC1_EXT;if(n===Io)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Po)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const qy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Vd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new sn({vertexShader:qy,fragmentShader:Qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ky extends Ns{constructor(e,t){super();const n=this;let s=null,i=1,o=null,l="local-floor",c=1,d=null,u=null,h=null,p=null,f=null,g=null;const y=typeof XRWebGLBinding<"u",x=new Yy,m={},v=t.getContextAttributes();let S=null,b=null;const _=[],M=[],w=new Be;let T=null;const C=new dn;C.viewport=new bt;const A=new dn;A.viewport=new bt;const R=[C,A],D=new ym;let I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=_[K];return te===void 0&&(te=new Ra,_[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=_[K];return te===void 0&&(te=new Ra,_[K]=te),te.getGripSpace()},this.getHand=function(K){let te=_[K];return te===void 0&&(te=new Ra,_[K]=te),te.getHandSpace()};function j(K){const te=M.indexOf(K.inputSource);if(te===-1)return;const me=_[te];me!==void 0&&(me.update(K.inputSource,K.frame,d||o),me.dispatchEvent({type:K.type,data:K.inputSource}))}function P(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",X);for(let K=0;K<_.length;K++){const te=M[K];te!==null&&(M[K]=null,_[K].disconnect(te))}I=null,U=null,x.reset();for(const K in m)delete m[K];e.setRenderTarget(S),f=null,p=null,h=null,s=null,b=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){i=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){l=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(K){d=K},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",P),s.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,we=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=v.stencil?Ui:oi,we=v.stencil?Li:hn);const je={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:i};h=this.getBinding(),p=h.createProjectionLayer(je),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new rs(p.textureWidth,p.textureHeight,{format:Ht,type:Dn,depthTexture:new Jo(p.textureWidth,p.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new rs(f.framebufferWidth,f.framebufferHeight,{format:Ht,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),d=null,o=await s.requestReferenceSpace(l),Fe.setContext(s),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(K){for(let te=0;te<K.removed.length;te++){const me=K.removed[te],we=M.indexOf(me);we>=0&&(M[we]=null,_[we].disconnect(me))}for(let te=0;te<K.added.length;te++){const me=K.added[te];let we=M.indexOf(me);if(we===-1){for(let je=0;je<_.length;je++)if(je>=M.length){M.push(me),we=je;break}else if(M[je]===null){M[je]=me,we=je;break}if(we===-1)break}const xe=_[we];xe&&xe.connect(me)}}const z=new k,Q=new k;function ie(K,te,me){z.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(me.matrixWorld);const we=z.distanceTo(Q),xe=te.projectionMatrix.elements,je=me.projectionMatrix.elements,Ze=xe[14]/(xe[10]-1),L=xe[14]/(xe[10]+1),He=(xe[9]+1)/xe[5],Re=(xe[9]-1)/xe[5],Le=(xe[8]-1)/xe[0],Me=(je[8]+1)/je[0],$e=Ze*Le,be=Ze*Me,Ve=we/(-Le+Me),St=Ve*-Le;if(te.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(St),K.translateZ(Ve),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xe[10]===-1)K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const ft=Ze+Ve,F=L+Ve,E=$e-St,Y=be+(we-St),re=He*L/F*ft,oe=Re*L/F*ft;K.projectionMatrix.makePerspective(E,Y,re,oe,ft,F),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function q(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let te=K.near,me=K.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(me=x.depthFar)),D.near=A.near=C.near=te,D.far=A.far=C.far=me,(I!==D.near||U!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),I=D.near,U=D.far),D.layers.mask=K.layers.mask|6,C.layers.mask=D.layers.mask&3,A.layers.mask=D.layers.mask&5;const we=K.parent,xe=D.cameras;q(D,we);for(let je=0;je<xe.length;je++)q(xe[je],we);xe.length===2?ie(D,C,A):D.projectionMatrix.copy(C.projectionMatrix),pe(K,D,we)};function pe(K,te,me){me===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(me.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Fo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(K){c=K,p!==null&&(p.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(D)},this.getCameraTexture=function(K){return m[K]};let Te=null;function Se(K,te){if(u=te.getViewerPose(d||o),g=te,u!==null){const me=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let we=!1;me.length!==D.cameras.length&&(D.cameras.length=0,we=!0);for(let L=0;L<me.length;L++){const He=me[L];let Re=null;if(f!==null)Re=f.getViewport(He);else{const Me=h.getViewSubImage(p,He);Re=Me.viewport,L===0&&(e.setRenderTargetTextures(b,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(b))}let Le=R[L];Le===void 0&&(Le=new dn,Le.layers.enable(L),Le.viewport=new bt,R[L]=Le),Le.matrix.fromArray(He.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(He.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Re.x,Re.y,Re.width,Re.height),L===0&&(D.matrix.copy(Le.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),we===!0&&D.cameras.push(Le)}const xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();const L=h.getDepthInformation(me[0]);L&&L.isValid&&L.texture&&x.init(L,s.renderState)}if(xe&&xe.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let L=0;L<me.length;L++){const He=me[L].camera;if(He){let Re=m[He];Re||(Re=new Vd,m[He]=Re);const Le=h.getCameraImage(He);Re.sourceTexture=Le}}}}for(let me=0;me<_.length;me++){const we=M[me],xe=_[me];we!==null&&xe!==void 0&&xe.update(we,te,d||o)}Te&&Te(K,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Fe=new Gd;Fe.setAnimationLoop(Se),this.setAnimationLoop=function(K){Te=K},this.dispose=function(){}}}const ps=new Gn,$y=new Ke;function Zy(r,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,Od(r)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,v,S,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(x,m):m.isMeshToonMaterial?(i(x,m),h(x,m)):m.isMeshPhongMaterial?(i(x,m),u(x,m)):m.isMeshStandardMaterial?(i(x,m),p(x,m),m.isMeshPhysicalMaterial&&f(x,m,b)):m.isMeshMatcapMaterial?(i(x,m),g(x,m)):m.isMeshDepthMaterial?i(x,m):m.isMeshDistanceMaterial?(i(x,m),y(x,m)):m.isMeshNormalMaterial?i(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&l(x,m)):m.isPointsMaterial?c(x,m,v,S):m.isSpriteMaterial?d(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===Yt&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===Yt&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);const v=e.get(m),S=v.envMap,b=v.envMapRotation;S&&(x.envMap.value=S,ps.copy(b),ps.x*=-1,ps.y*=-1,ps.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),x.envMapRotation.value.setFromMatrix4($y.makeRotationFromEuler(ps)),x.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function l(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function c(x,m,v,S){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*v,x.scale.value=S*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function d(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function u(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function h(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function p(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function f(x,m,v){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Yt&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,m){m.matcap&&(x.matcap.value=m.matcap)}function y(x,m){const v=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jy(r,e,t,n){let s={},i={},o=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){const b=S.program;n.uniformBlockBinding(v,b)}function d(v,S){let b=s[v.id];b===void 0&&(g(v),b=u(v),s[v.id]=b,v.addEventListener("dispose",x));const _=S.program;n.updateUBOMapping(v,_);const M=e.render.frame;i[v.id]!==M&&(p(v),i[v.id]=M)}function u(v){const S=h();v.__bindingPointIndex=S;const b=r.createBuffer(),_=v.__size,M=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,_,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,b),b}function h(){for(let v=0;v<l;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const S=s[v.id],b=v.uniforms,_=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let M=0,w=b.length;M<w;M++){const T=Array.isArray(b[M])?b[M]:[b[M]];for(let C=0,A=T.length;C<A;C++){const R=T[C];if(f(R,M,C,_)===!0){const D=R.__offset,I=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let j=0;j<I.length;j++){const P=I[j],X=y(P);typeof P=="number"||typeof P=="boolean"?(R.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,D+U,R.__data)):P.isMatrix3?(R.__data[0]=P.elements[0],R.__data[1]=P.elements[1],R.__data[2]=P.elements[2],R.__data[3]=0,R.__data[4]=P.elements[3],R.__data[5]=P.elements[4],R.__data[6]=P.elements[5],R.__data[7]=0,R.__data[8]=P.elements[6],R.__data[9]=P.elements[7],R.__data[10]=P.elements[8],R.__data[11]=0):(P.toArray(R.__data,U),U+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,S,b,_){const M=v.value,w=S+"_"+b;if(_[w]===void 0)return typeof M=="number"||typeof M=="boolean"?_[w]=M:_[w]=M.clone(),!0;{const T=_[w];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return _[w]=M,!0}else if(T.equals(M)===!1)return T.copy(M),!0}return!1}function g(v){const S=v.uniforms;let b=0;const _=16;for(let w=0,T=S.length;w<T;w++){const C=Array.isArray(S[w])?S[w]:[S[w]];for(let A=0,R=C.length;A<R;A++){const D=C[A],I=Array.isArray(D.value)?D.value:[D.value];for(let U=0,j=I.length;U<j;U++){const P=I[U],X=y(P),z=b%_,Q=z%X.boundary,ie=z+Q;b+=Q,ie!==0&&_-ie<X.storage&&(b+=_-ie),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=X.storage}}}const M=b%_;return M>0&&(b+=_-M),v.__size=b,v.__cache={},this}function y(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),S}function x(v){const S=v.target;S.removeEventListener("dispose",x);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(s[S.id]),delete s[S.id],delete i[S.id]}function m(){for(const v in s)r.deleteBuffer(s[v]);o=[],s={},i={}}return{bind:c,update:d,dispose:m}}class ev{constructor(e={}){const{canvas:t=kp(),context:n=null,depth:s=!0,stencil:i=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),y=new Int32Array(4);let x=null,m=null;const v=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=is,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let _=!1;this._outputColorSpace=cn;let M=0,w=0,T=null,C=-1,A=null;const R=new bt,D=new bt;let I=null;const U=new rt(0);let j=0,P=t.width,X=t.height,z=1,Q=null,ie=null;const q=new bt(0,0,P,X),pe=new bt(0,0,P,X);let Te=!1;const Se=new Hd;let Fe=!1,K=!1;const te=new Ke,me=new k,we=new bt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function Ze(){return T===null?z:1}let L=n;function He(N,G){return t.getContext(N,G)}try{const N={alpha:!0,depth:s,stencil:i,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xo}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",le,!1),L===null){const G="webgl2";if(L=He(G,N),L===null)throw He(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Re,Le,Me,$e,be,Ve,St,ft,F,E,Y,re,oe,ne,Oe,he,ke,O,B,se,ge,Ae,ye,We;function H(){Re=new ux(L),Re.init(),Ae=new Yd(L,Re),Le=new ix(L,Re,e,Ae),Me=new Wy(L,Re),Le.reversedDepthBuffer&&p&&Me.buffers.depth.setReversed(!0),$e=new px(L),be=new Dy,Ve=new Xy(L,Re,Me,be,Le,Ae,$e),St=new ax(b),ft=new dx(b),F=new bm(L),ye=new nx(L,F),E=new hx(L,F,$e,ye),Y=new gx(L,E,F,$e),B=new mx(L,Le,Ve),he=new rx(be),re=new Iy(b,St,ft,Re,Le,ye,he),oe=new Zy(b,be),ne=new Fy,Oe=new jy(Re),O=new tx(b,St,ft,Me,Y,f,c),ke=new Vy(b,Y,Le),We=new Jy(L,$e,Le,Me),se=new sx(L,Re,$e),ge=new fx(L,Re,$e),$e.programs=re.programs,b.capabilities=Le,b.extensions=Re,b.properties=be,b.renderLists=ne,b.shadowMap=ke,b.state=Me,b.info=$e}H();const ce=new Ky(b,L);this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const N=Re.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Re.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(N){N!==void 0&&(z=N,this.setSize(P,X,!1))},this.getSize=function(N){return N.set(P,X)},this.setSize=function(N,G,$=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=N,X=G,t.width=Math.floor(N*z),t.height=Math.floor(G*z),$===!0&&(t.style.width=N+"px",t.style.height=G+"px"),this.setViewport(0,0,N,G)},this.getDrawingBufferSize=function(N){return N.set(P*z,X*z).floor()},this.setDrawingBufferSize=function(N,G,$){P=N,X=G,z=$,t.width=Math.floor(N*$),t.height=Math.floor(G*$),this.setViewport(0,0,N,G)},this.getCurrentViewport=function(N){return N.copy(R)},this.getViewport=function(N){return N.copy(q)},this.setViewport=function(N,G,$,Z){N.isVector4?q.set(N.x,N.y,N.z,N.w):q.set(N,G,$,Z),Me.viewport(R.copy(q).multiplyScalar(z).round())},this.getScissor=function(N){return N.copy(pe)},this.setScissor=function(N,G,$,Z){N.isVector4?pe.set(N.x,N.y,N.z,N.w):pe.set(N,G,$,Z),Me.scissor(D.copy(pe).multiplyScalar(z).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(N){Me.setScissorTest(Te=N)},this.setOpaqueSort=function(N){Q=N},this.setTransparentSort=function(N){ie=N},this.getClearColor=function(N){return N.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(N=!0,G=!0,$=!0){let Z=0;if(N){let W=!1;if(T!==null){const de=T.texture.format;W=de===Js||de===Ko||de===Kr}if(W){const de=T.texture.type,Ee=de===Dn||de===hn||de===Bi||de===Li||de===Qo||de===Yo,Ue=O.getClearColor(),Pe=O.getClearAlpha(),Xe=Ue.r,Ye=Ue.g,ze=Ue.b;Ee?(g[0]=Xe,g[1]=Ye,g[2]=ze,g[3]=Pe,L.clearBufferuiv(L.COLOR,0,g)):(y[0]=Xe,y[1]=Ye,y[2]=ze,y[3]=Pe,L.clearBufferiv(L.COLOR,0,y))}else Z|=L.COLOR_BUFFER_BIT}G&&(Z|=L.DEPTH_BUFFER_BIT),$&&(Z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",le,!1),O.dispose(),ne.dispose(),Oe.dispose(),be.dispose(),St.dispose(),ft.dispose(),Y.dispose(),ye.dispose(),We.dispose(),re.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",An),ce.removeEventListener("sessionend",pl),os.stop()};function ue(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const N=$e.autoReset,G=ke.enabled,$=ke.autoUpdate,Z=ke.needsUpdate,W=ke.type;H(),$e.autoReset=N,ke.enabled=G,ke.autoUpdate=$,ke.needsUpdate=Z,ke.type=W}function le(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ae(N){const G=N.target;G.removeEventListener("dispose",ae),Ne(G)}function Ne(N){qe(N),be.remove(N)}function qe(N){const G=be.get(N).programs;G!==void 0&&(G.forEach(function($){re.releaseProgram($)}),N.isShaderMaterial&&re.releaseShaderCache(N))}this.renderBufferDirect=function(N,G,$,Z,W,de){G===null&&(G=xe);const Ee=W.isMesh&&W.matrixWorld.determinant()<0,Ue=au(N,G,$,Z,W);Me.setMaterial(Z,Ee);let Pe=$.index,Xe=1;if(Z.wireframe===!0){if(Pe=E.getWireframeAttribute($),Pe===void 0)return;Xe=2}const Ye=$.drawRange,ze=$.attributes.position;let tt=Ye.start*Xe,ct=(Ye.start+Ye.count)*Xe;de!==null&&(tt=Math.max(tt,de.start*Xe),ct=Math.min(ct,(de.start+de.count)*Xe)),Pe!==null?(tt=Math.max(tt,0),ct=Math.min(ct,Pe.count)):ze!=null&&(tt=Math.max(tt,0),ct=Math.min(ct,ze.count));const Ct=ct-tt;if(Ct<0||Ct===1/0)return;ye.setup(W,Z,Ue,$,Pe);let mt,ht=se;if(Pe!==null&&(mt=F.get(Pe),ht=ge,ht.setIndex(mt)),W.isMesh)Z.wireframe===!0?(Me.setLineWidth(Z.wireframeLinewidth*Ze()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(W.isLine){let Ge=Z.linewidth;Ge===void 0&&(Ge=1),Me.setLineWidth(Ge*Ze()),W.isLineSegments?ht.setMode(L.LINES):W.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else W.isPoints?ht.setMode(L.POINTS):W.isSprite&&ht.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Oi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))ht.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ge=W._multiDrawStarts,At=W._multiDrawCounts,st=W._multiDrawCount,Kt=Pe?F.get(Pe).bytesPerElement:1,Is=be.get(Z).currentProgram.getUniforms();for(let $t=0;$t<st;$t++)Is.setValue(L,"_gl_DrawID",$t),ht.render(Ge[$t]/Kt,At[$t])}else if(W.isInstancedMesh)ht.renderInstances(tt,Ct,W.count);else if($.isInstancedBufferGeometry){const Ge=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,At=Math.min($.instanceCount,Ge);ht.renderInstances(tt,Ct,At)}else ht.render(tt,Ct)};function pt(N,G,$){N.transparent===!0&&N.side===un&&N.forceSinglePass===!1?(N.side=Yt,N.needsUpdate=!0,Ki(N,G,$),N.side=In,N.needsUpdate=!0,Ki(N,G,$),N.side=un):Ki(N,G,$)}this.compile=function(N,G,$=null){$===null&&($=N),m=Oe.get($),m.init(G),S.push(m),$.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),N!==$&&N.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const Z=new Set;return N.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const de=W.material;if(de)if(Array.isArray(de))for(let Ee=0;Ee<de.length;Ee++){const Ue=de[Ee];pt(Ue,$,W),Z.add(Ue)}else pt(de,$,W),Z.add(de)}),m=S.pop(),Z},this.compileAsync=function(N,G,$=null){const Z=this.compile(N,G,$);return new Promise(W=>{function de(){if(Z.forEach(function(Ee){be.get(Ee).currentProgram.isReady()&&Z.delete(Ee)}),Z.size===0){W(N);return}setTimeout(de,10)}Re.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let at=null;function Pn(N){at&&at(N)}function An(){os.stop()}function pl(){os.start()}const os=new Gd;os.setAnimationLoop(Pn),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(N){at=N,ce.setAnimationLoop(N),N===null?os.stop():os.start()},ce.addEventListener("sessionstart",An),ce.addEventListener("sessionend",pl),this.render=function(N,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(G),G=ce.getCamera()),N.isScene===!0&&N.onBeforeRender(b,N,G,T),m=Oe.get(N,S.length),m.init(G),S.push(m),te.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Se.setFromProjectionMatrix(te,En,G.reversedDepth),K=this.localClippingEnabled,Fe=he.init(this.clippingPlanes,K),x=ne.get(N,v.length),x.init(),v.push(x),ce.enabled===!0&&ce.isPresenting===!0){const de=b.xr.getDepthSensingMesh();de!==null&&ia(de,G,-1/0,b.sortObjects)}ia(N,G,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(Q,ie),je=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,je&&O.addToRenderList(x,N),this.info.render.frame++,Fe===!0&&he.beginShadows();const $=m.state.shadowsArray;ke.render($,N,G),Fe===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=x.opaque,W=x.transmissive;if(m.setupLights(),G.isArrayCamera){const de=G.cameras;if(W.length>0)for(let Ee=0,Ue=de.length;Ee<Ue;Ee++){const Pe=de[Ee];gl(Z,W,N,Pe)}je&&O.render(N);for(let Ee=0,Ue=de.length;Ee<Ue;Ee++){const Pe=de[Ee];ml(x,N,Pe,Pe.viewport)}}else W.length>0&&gl(Z,W,N,G),je&&O.render(N),ml(x,N,G);T!==null&&w===0&&(Ve.updateMultisampleRenderTarget(T),Ve.updateRenderTargetMipmap(T)),N.isScene===!0&&N.onAfterRender(b,N,G),ye.resetDefaultState(),C=-1,A=null,S.pop(),S.length>0?(m=S[S.length-1],Fe===!0&&he.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?x=v[v.length-1]:x=null};function ia(N,G,$,Z){if(N.visible===!1)return;if(N.layers.test(G.layers)){if(N.isGroup)$=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(G);else if(N.isLight)m.pushLight(N),N.castShadow&&m.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Se.intersectsSprite(N)){Z&&we.setFromMatrixPosition(N.matrixWorld).applyMatrix4(te);const Ee=Y.update(N),Ue=N.material;Ue.visible&&x.push(N,Ee,Ue,$,we.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Se.intersectsObject(N))){const Ee=Y.update(N),Ue=N.material;if(Z&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),we.copy(N.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),we.copy(Ee.boundingSphere.center)),we.applyMatrix4(N.matrixWorld).applyMatrix4(te)),Array.isArray(Ue)){const Pe=Ee.groups;for(let Xe=0,Ye=Pe.length;Xe<Ye;Xe++){const ze=Pe[Xe],tt=Ue[ze.materialIndex];tt&&tt.visible&&x.push(N,Ee,tt,$,we.z,ze)}}else Ue.visible&&x.push(N,Ee,Ue,$,we.z,null)}}const de=N.children;for(let Ee=0,Ue=de.length;Ee<Ue;Ee++)ia(de[Ee],G,$,Z)}function ml(N,G,$,Z){const W=N.opaque,de=N.transmissive,Ee=N.transparent;m.setupLightsView($),Fe===!0&&he.setGlobalState(b.clippingPlanes,$),Z&&Me.viewport(R.copy(Z)),W.length>0&&Yi(W,G,$),de.length>0&&Yi(de,G,$),Ee.length>0&&Yi(Ee,G,$),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function gl(N,G,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new rs(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float")?fi:Dn,minFilter:As,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const de=m.state.transmissionRenderTarget[Z.id],Ee=Z.viewport||R;de.setSize(Ee.z*b.transmissionResolutionScale,Ee.w*b.transmissionResolutionScale);const Ue=b.getRenderTarget(),Pe=b.getActiveCubeFace(),Xe=b.getActiveMipmapLevel();b.setRenderTarget(de),b.getClearColor(U),j=b.getClearAlpha(),j<1&&b.setClearColor(16777215,.5),b.clear(),je&&O.render($);const Ye=b.toneMapping;b.toneMapping=is;const ze=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),Fe===!0&&he.setGlobalState(b.clippingPlanes,Z),Yi(N,$,Z),Ve.updateMultisampleRenderTarget(de),Ve.updateRenderTargetMipmap(de),Re.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ct=0,Ct=G.length;ct<Ct;ct++){const mt=G[ct],ht=mt.object,Ge=mt.geometry,At=mt.material,st=mt.group;if(At.side===un&&ht.layers.test(Z.layers)){const Kt=At.side;At.side=Yt,At.needsUpdate=!0,xl(ht,$,Z,Ge,At,st),At.side=Kt,At.needsUpdate=!0,tt=!0}}tt===!0&&(Ve.updateMultisampleRenderTarget(de),Ve.updateRenderTargetMipmap(de))}b.setRenderTarget(Ue,Pe,Xe),b.setClearColor(U,j),ze!==void 0&&(Z.viewport=ze),b.toneMapping=Ye}function Yi(N,G,$){const Z=G.isScene===!0?G.overrideMaterial:null;for(let W=0,de=N.length;W<de;W++){const Ee=N[W],Ue=Ee.object,Pe=Ee.geometry,Xe=Ee.group;let Ye=Ee.material;Ye.allowOverride===!0&&Z!==null&&(Ye=Z),Ue.layers.test($.layers)&&xl(Ue,G,$,Pe,Ye,Xe)}}function xl(N,G,$,Z,W,de){N.onBeforeRender(b,G,$,Z,W,de),N.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),W.onBeforeRender(b,G,$,Z,N,de),W.transparent===!0&&W.side===un&&W.forceSinglePass===!1?(W.side=Yt,W.needsUpdate=!0,b.renderBufferDirect($,G,Z,W,N,de),W.side=In,W.needsUpdate=!0,b.renderBufferDirect($,G,Z,W,N,de),W.side=un):b.renderBufferDirect($,G,Z,W,N,de),N.onAfterRender(b,G,$,Z,W,de)}function Ki(N,G,$){G.isScene!==!0&&(G=xe);const Z=be.get(N),W=m.state.lights,de=m.state.shadowsArray,Ee=W.state.version,Ue=re.getParameters(N,W.state,de,G,$),Pe=re.getProgramCacheKey(Ue);let Xe=Z.programs;Z.environment=N.isMeshStandardMaterial?G.environment:null,Z.fog=G.fog,Z.envMap=(N.isMeshStandardMaterial?ft:St).get(N.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&N.envMap===null?G.environmentRotation:N.envMapRotation,Xe===void 0&&(N.addEventListener("dispose",ae),Xe=new Map,Z.programs=Xe);let Ye=Xe.get(Pe);if(Ye!==void 0){if(Z.currentProgram===Ye&&Z.lightsStateVersion===Ee)return vl(N,Ue),Ye}else Ue.uniforms=re.getUniforms(N),N.onBeforeCompile(Ue,b),Ye=re.acquireProgram(Ue,Pe),Xe.set(Pe,Ye),Z.uniforms=Ue.uniforms;const ze=Z.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(ze.clippingPlanes=he.uniform),vl(N,Ue),Z.needsLights=lu(N),Z.lightsStateVersion=Ee,Z.needsLights&&(ze.ambientLightColor.value=W.state.ambient,ze.lightProbe.value=W.state.probe,ze.directionalLights.value=W.state.directional,ze.directionalLightShadows.value=W.state.directionalShadow,ze.spotLights.value=W.state.spot,ze.spotLightShadows.value=W.state.spotShadow,ze.rectAreaLights.value=W.state.rectArea,ze.ltc_1.value=W.state.rectAreaLTC1,ze.ltc_2.value=W.state.rectAreaLTC2,ze.pointLights.value=W.state.point,ze.pointLightShadows.value=W.state.pointShadow,ze.hemisphereLights.value=W.state.hemi,ze.directionalShadowMap.value=W.state.directionalShadowMap,ze.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ze.spotShadowMap.value=W.state.spotShadowMap,ze.spotLightMatrix.value=W.state.spotLightMatrix,ze.spotLightMap.value=W.state.spotLightMap,ze.pointShadowMap.value=W.state.pointShadowMap,ze.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=Ye,Z.uniformsList=null,Ye}function yl(N){if(N.uniformsList===null){const G=N.currentProgram.getUniforms();N.uniformsList=Nr.seqWithValue(G.seq,N.uniforms)}return N.uniformsList}function vl(N,G){const $=be.get(N);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function au(N,G,$,Z,W){G.isScene!==!0&&(G=xe),Ve.resetTextureUnits();const de=G.fog,Ee=Z.isMeshStandardMaterial?G.environment:null,Ue=T===null?b.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:li,Pe=(Z.isMeshStandardMaterial?ft:St).get(Z.envMap||Ee),Xe=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ye=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ze=!!$.morphAttributes.position,tt=!!$.morphAttributes.normal,ct=!!$.morphAttributes.color;let Ct=is;Z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ct=b.toneMapping);const mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ht=mt!==void 0?mt.length:0,Ge=be.get(Z),At=m.state.lights;if(Fe===!0&&(K===!0||N!==A)){const Ut=N===A&&Z.id===C;he.setState(Z,N,Ut)}let st=!1;Z.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==At.state.version||Ge.outputColorSpace!==Ue||W.isBatchedMesh&&Ge.batching===!1||!W.isBatchedMesh&&Ge.batching===!0||W.isBatchedMesh&&Ge.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ge.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ge.instancing===!1||!W.isInstancedMesh&&Ge.instancing===!0||W.isSkinnedMesh&&Ge.skinning===!1||!W.isSkinnedMesh&&Ge.skinning===!0||W.isInstancedMesh&&Ge.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ge.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ge.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ge.instancingMorph===!1&&W.morphTexture!==null||Ge.envMap!==Pe||Z.fog===!0&&Ge.fog!==de||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==he.numPlanes||Ge.numIntersection!==he.numIntersection)||Ge.vertexAlphas!==Xe||Ge.vertexTangents!==Ye||Ge.morphTargets!==ze||Ge.morphNormals!==tt||Ge.morphColors!==ct||Ge.toneMapping!==Ct||Ge.morphTargetsCount!==ht)&&(st=!0):(st=!0,Ge.__version=Z.version);let Kt=Ge.currentProgram;st===!0&&(Kt=Ki(Z,G,W));let Is=!1,$t=!1,xi=!1;const _t=Kt.getUniforms(),rn=Ge.uniforms;if(Me.useProgram(Kt.program)&&(Is=!0,$t=!0,xi=!0),Z.id!==C&&(C=Z.id,$t=!0),Is||A!==N){Me.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),_t.setValue(L,"projectionMatrix",N.projectionMatrix),_t.setValue(L,"viewMatrix",N.matrixWorldInverse);const Wt=_t.map.cameraPosition;Wt!==void 0&&Wt.setValue(L,me.setFromMatrixPosition(N.matrixWorld)),Le.logarithmicDepthBuffer&&_t.setValue(L,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&_t.setValue(L,"isOrthographic",N.isOrthographicCamera===!0),A!==N&&(A=N,$t=!0,xi=!0)}if(W.isSkinnedMesh){_t.setOptional(L,W,"bindMatrix"),_t.setOptional(L,W,"bindMatrixInverse");const Ut=W.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),_t.setValue(L,"boneTexture",Ut.boneTexture,Ve))}W.isBatchedMesh&&(_t.setOptional(L,W,"batchingTexture"),_t.setValue(L,"batchingTexture",W._matricesTexture,Ve),_t.setOptional(L,W,"batchingIdTexture"),_t.setValue(L,"batchingIdTexture",W._indirectTexture,Ve),_t.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&_t.setValue(L,"batchingColorTexture",W._colorsTexture,Ve));const an=$.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&B.update(W,$,Kt),($t||Ge.receiveShadow!==W.receiveShadow)&&(Ge.receiveShadow=W.receiveShadow,_t.setValue(L,"receiveShadow",W.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(rn.envMap.value=Pe,rn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&G.environment!==null&&(rn.envMapIntensity.value=G.environmentIntensity),$t&&(_t.setValue(L,"toneMappingExposure",b.toneMappingExposure),Ge.needsLights&&ou(rn,xi),de&&Z.fog===!0&&oe.refreshFogUniforms(rn,de),oe.refreshMaterialUniforms(rn,Z,z,X,m.state.transmissionRenderTarget[N.id]),Nr.upload(L,yl(Ge),rn,Ve)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Nr.upload(L,yl(Ge),rn,Ve),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&_t.setValue(L,"center",W.center),_t.setValue(L,"modelViewMatrix",W.modelViewMatrix),_t.setValue(L,"normalMatrix",W.normalMatrix),_t.setValue(L,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Ut=Z.uniformsGroups;for(let Wt=0,ra=Ut.length;Wt<ra;Wt++){const ls=Ut[Wt];We.update(ls,Kt),We.bind(ls,Kt)}}return Kt}function ou(N,G){N.ambientLightColor.needsUpdate=G,N.lightProbe.needsUpdate=G,N.directionalLights.needsUpdate=G,N.directionalLightShadows.needsUpdate=G,N.pointLights.needsUpdate=G,N.pointLightShadows.needsUpdate=G,N.spotLights.needsUpdate=G,N.spotLightShadows.needsUpdate=G,N.rectAreaLights.needsUpdate=G,N.hemisphereLights.needsUpdate=G}function lu(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(N,G,$){const Z=be.get(N);Z.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),be.get(N.texture).__webglTexture=G,be.get(N.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:$,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,G){const $=be.get(N);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0};const cu=L.createFramebuffer();this.setRenderTarget=function(N,G=0,$=0){T=N,M=G,w=$;let Z=!0,W=null,de=!1,Ee=!1;if(N){const Pe=be.get(N);if(Pe.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(L.FRAMEBUFFER,null),Z=!1;else if(Pe.__webglFramebuffer===void 0)Ve.setupRenderTarget(N);else if(Pe.__hasExternalTextures)Ve.rebindTextures(N,be.get(N.texture).__webglTexture,be.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const ze=N.depthTexture;if(Pe.__boundDepthTexture!==ze){if(ze!==null&&be.has(ze)&&(N.width!==ze.image.width||N.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(N)}}const Xe=N.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ee=!0);const Ye=be.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Ye[G])?W=Ye[G][$]:W=Ye[G],de=!0):N.samples>0&&Ve.useMultisampledRTT(N)===!1?W=be.get(N).__webglMultisampledFramebuffer:Array.isArray(Ye)?W=Ye[$]:W=Ye,R.copy(N.viewport),D.copy(N.scissor),I=N.scissorTest}else R.copy(q).multiplyScalar(z).floor(),D.copy(pe).multiplyScalar(z).floor(),I=Te;if($!==0&&(W=cu),Me.bindFramebuffer(L.FRAMEBUFFER,W)&&Z&&Me.drawBuffers(N,W),Me.viewport(R),Me.scissor(D),Me.setScissorTest(I),de){const Pe=be.get(N.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+G,Pe.__webglTexture,$)}else if(Ee){const Pe=G;for(let Xe=0;Xe<N.textures.length;Xe++){const Ye=be.get(N.textures[Xe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Xe,Ye.__webglTexture,$,Pe)}}else if(N!==null&&$!==0){const Pe=be.get(N.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pe.__webglTexture,$)}C=-1},this.readRenderTargetPixels=function(N,G,$,Z,W,de,Ee,Ue=0){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=be.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe){Me.bindFramebuffer(L.FRAMEBUFFER,Pe);try{const Xe=N.textures[Ue],Ye=Xe.format,ze=Xe.type;if(!Le.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=N.width-Z&&$>=0&&$<=N.height-W&&(N.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ue),L.readPixels(G,$,Z,W,Ae.convert(Ye),Ae.convert(ze),de))}finally{const Xe=T!==null?be.get(T).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(N,G,$,Z,W,de,Ee,Ue=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=be.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe)if(G>=0&&G<=N.width-Z&&$>=0&&$<=N.height-W){Me.bindFramebuffer(L.FRAMEBUFFER,Pe);const Xe=N.textures[Ue],Ye=Xe.format,ze=Xe.type;if(!Le.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,tt),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),N.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ue),L.readPixels(G,$,Z,W,Ae.convert(Ye),Ae.convert(ze),0);const ct=T!==null?be.get(T).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,ct);const Ct=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Bp(L,Ct,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.deleteBuffer(tt),L.deleteSync(Ct),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,G=null,$=0){const Z=Math.pow(2,-$),W=Math.floor(N.image.width*Z),de=Math.floor(N.image.height*Z),Ee=G!==null?G.x:0,Ue=G!==null?G.y:0;Ve.setTexture2D(N,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,Ee,Ue,W,de),Me.unbindTexture()};const du=L.createFramebuffer(),uu=L.createFramebuffer();this.copyTextureToTexture=function(N,G,$=null,Z=null,W=0,de=null){de===null&&(W!==0?(Oi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=W,W=0):de=0);let Ee,Ue,Pe,Xe,Ye,ze,tt,ct,Ct;const mt=N.isCompressedTexture?N.mipmaps[de]:N.image;if($!==null)Ee=$.max.x-$.min.x,Ue=$.max.y-$.min.y,Pe=$.isBox3?$.max.z-$.min.z:1,Xe=$.min.x,Ye=$.min.y,ze=$.isBox3?$.min.z:0;else{const an=Math.pow(2,-W);Ee=Math.floor(mt.width*an),Ue=Math.floor(mt.height*an),N.isDataArrayTexture?Pe=mt.depth:N.isData3DTexture?Pe=Math.floor(mt.depth*an):Pe=1,Xe=0,Ye=0,ze=0}Z!==null?(tt=Z.x,ct=Z.y,Ct=Z.z):(tt=0,ct=0,Ct=0);const ht=Ae.convert(G.format),Ge=Ae.convert(G.type);let At;G.isData3DTexture?(Ve.setTexture3D(G,0),At=L.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Ve.setTexture2DArray(G,0),At=L.TEXTURE_2D_ARRAY):(Ve.setTexture2D(G,0),At=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment);const st=L.getParameter(L.UNPACK_ROW_LENGTH),Kt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Is=L.getParameter(L.UNPACK_SKIP_PIXELS),$t=L.getParameter(L.UNPACK_SKIP_ROWS),xi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ze);const _t=N.isDataArrayTexture||N.isData3DTexture,rn=G.isDataArrayTexture||G.isData3DTexture;if(N.isDepthTexture){const an=be.get(N),Ut=be.get(G),Wt=be.get(an.__renderTarget),ra=be.get(Ut.__renderTarget);Me.bindFramebuffer(L.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,ra.__webglFramebuffer);for(let ls=0;ls<Pe;ls++)_t&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.get(N).__webglTexture,W,ze+ls),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.get(G).__webglTexture,de,Ct+ls)),L.blitFramebuffer(Xe,Ye,Ee,Ue,tt,ct,Ee,Ue,L.DEPTH_BUFFER_BIT,L.NEAREST);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||N.isRenderTargetTexture||be.has(N)){const an=be.get(N),Ut=be.get(G);Me.bindFramebuffer(L.READ_FRAMEBUFFER,du),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,uu);for(let Wt=0;Wt<Pe;Wt++)_t?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,an.__webglTexture,W,ze+Wt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,an.__webglTexture,W),rn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ut.__webglTexture,de,Ct+Wt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ut.__webglTexture,de),W!==0?L.blitFramebuffer(Xe,Ye,Ee,Ue,tt,ct,Ee,Ue,L.COLOR_BUFFER_BIT,L.NEAREST):rn?L.copyTexSubImage3D(At,de,tt,ct,Ct+Wt,Xe,Ye,Ee,Ue):L.copyTexSubImage2D(At,de,tt,ct,Xe,Ye,Ee,Ue);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else rn?N.isDataTexture||N.isData3DTexture?L.texSubImage3D(At,de,tt,ct,Ct,Ee,Ue,Pe,ht,Ge,mt.data):G.isCompressedArrayTexture?L.compressedTexSubImage3D(At,de,tt,ct,Ct,Ee,Ue,Pe,ht,mt.data):L.texSubImage3D(At,de,tt,ct,Ct,Ee,Ue,Pe,ht,Ge,mt):N.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,de,tt,ct,Ee,Ue,ht,Ge,mt.data):N.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,de,tt,ct,mt.width,mt.height,ht,mt.data):L.texSubImage2D(L.TEXTURE_2D,de,tt,ct,Ee,Ue,ht,Ge,mt);L.pixelStorei(L.UNPACK_ROW_LENGTH,st),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Kt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Is),L.pixelStorei(L.UNPACK_SKIP_ROWS,$t),L.pixelStorei(L.UNPACK_SKIP_IMAGES,xi),de===0&&G.generateMipmaps&&L.generateMipmap(At),Me.unbindTexture()},this.initRenderTarget=function(N){be.get(N).__webglFramebuffer===void 0&&Ve.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Ve.setTextureCube(N,0):N.isData3DTexture?Ve.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Ve.setTexture2DArray(N,0):Ve.setTexture2D(N,0),Me.unbindTexture()},this.resetState=function(){M=0,w=0,T=null,Me.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const vs=class vs{constructor(e,t){let n,s;this.promise=new Promise((d,u)=>{n=d,s=u});const i=n.bind(this),o=s.bind(this),l=(...d)=>{i(...d)},c=d=>{o(d)};e(l.bind(this),c.bind(this)),this.abortHandler=t,this.id=vs.idGen++}then(e){return new vs((t,n)=>{this.promise=this.promise.then((...s)=>{const i=e(...s);i instanceof Promise||i instanceof vs?i.then((...o)=>{t(...o)}):t(i)}).catch(s=>{n(s)})},this.abortHandler)}catch(e){return new vs(t=>{this.promise=this.promise.then((...n)=>{t(...n)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}};fe(vs,"idGen",0);let ui=vs;class Kd extends Error{constructor(e){super(e)}}(function(){const r=new Float32Array(1),e=new Int32Array(r.buffer);return function(t){r[0]=t;const n=e[0];let s=n>>16&32768,i=n>>12&2047;const o=n>>23&255;return o<103?s:o>142?(s|=31744,s|=(o==255?0:1)&&n&8388607,s):o<113?(i|=2048,s|=(i>>114-o)+(i>>113-o&1),s):(s|=o-112<<10|i>>1,s+=i&1,s)}})();const La=(function(){const r=new Float32Array(1),e=new Int32Array(r.buffer);return function(t){return r[0]=t,e[0]}})(),tv=function(r,e){return r[e]+(r[e+1]<<8)+(r[e+2]<<16)+(r[e+3]<<24)},Jr=function(r,e,t=!0,n){const s=new AbortController,i=s.signal;let o=!1;const l=u=>{s.abort(u),o=!0};let c=!1;const d=(u,h,p,f)=>{e&&!c&&(e(u,h,p,f),u===100&&(c=!0))};return new ui((u,h)=>{const p={signal:i};n&&(p.headers=n),fetch(r,p).then(async f=>{if(!f.ok){const S=await f.text();h(new Error(`Fetch failed: ${f.status} ${f.statusText} ${S}`));return}const g=f.body.getReader();let y=0,x=f.headers.get("Content-Length"),m=x?parseInt(x):void 0;const v=[];for(;!o;)try{const{value:S,done:b}=await g.read();if(b){if(d(100,"100%",S,m),t){const w=new Blob(v).arrayBuffer();u(w)}else u();break}y+=S.length;let _,M;m!==void 0&&(_=y/m*100,M=`${_.toFixed(2)}%`),t&&v.push(S),d(_,M,S,m)}catch(S){h(S);return}}).catch(f=>{h(new Kd(f))})},l)},yt=function(r,e,t){return Math.max(Math.min(r,t),e)},Qs=function(){return performance.now()/1e3},Ks=r=>{if(r.geometry&&(r.geometry.dispose(),r.geometry=null),r.material&&(r.material.dispose(),r.material=null),r.children)for(let e of r.children)Ks(e)},en=(r,e)=>new Promise(t=>{window.setTimeout(()=>{t(r?r():void 0)},e?1:50)}),ti=(r=0)=>{let e=0;if(r===1)e=9;else if(r===2)e=24;else if(r===3)e=45;else if(r>3)throw new Error("getSphericalHarmonicsComponentCountForDegree() -> Invalid spherical harmonics degree");return e},sl=()=>{let r,e;return{promise:new Promise((n,s)=>{r=n,e=s}),resolve:r,reject:e}},Ua=r=>{let e,t;return r||(r=()=>{}),{promise:new ui((s,i)=>{e=s,t=i},r),resolve:e,reject:t}};class nv{constructor(e,t,n){this.major=e,this.minor=t,this.patch=n}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function il(){const r=navigator.userAgent;return r.indexOf("iPhone")>0||r.indexOf("iPad")>0}function $d(){if(il()){const r=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new nv(parseInt(r[1]||0,10),parseInt(r[2]||0,10),parseInt(r[3]||0,10))}else return null}const sv=14,Ii=class Ii{constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=ti(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+sv,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){const t=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let n=ti(e);for(let s=0;s<n;s++)t.push(0);return t}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){const e=Ii.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,t,n,s,i,o,l,c,d,u,h,p,f,g,...y){const x=[e,t,n,s,i,o,l,c,d,u,h,p,f,g,...this.defaultSphericalHarmonics];for(let m=0;m<y.length&&m<this.sphericalHarmonicsCount;m++)x[m]=y[m];return this.addSplat(x),x}addSplatFromArray(e,t){const n=e.splats[t],s=Ii.createSplat(this.sphericalHarmonicsDegree);for(let i=0;i<this.componentCount&&i<n.length;i++)s[i]=n[i];this.addSplat(s)}};fe(Ii,"OFFSET",{X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37});let ve=Ii;class nt{}fe(nt,"DefaultSplatSortDistanceMapPrecision",16),fe(nt,"MemoryPageSize",65536),fe(nt,"BytesPerFloat",4),fe(nt,"BytesPerInt",4),fe(nt,"MaxScenes",32),fe(nt,"ProgressiveLoadSectionSize",262144),fe(nt,"ProgressiveLoadSectionDelayDuration",15),fe(nt,"SphericalHarmonics8BitCompressionRange",3);const iv=nt.SphericalHarmonics8BitCompressionRange,Zn=iv/2,Nt=ji.toHalfFloat.bind(ji),rl=ji.fromHalfFloat.bind(ji),xt=(r,e,t=!1,n,s)=>{if(e===0)return r;if(e===1||e===2&&!t)return ji.fromHalfFloat(r);if(e===2)return al(r,n,s)},Ti=(r,e,t)=>{r=yt(r,e,t);const n=t-e;return yt(Math.floor((r-e)/n*255),0,255)},al=(r,e,t)=>{const n=t-e;return r/255*n+e},Zd=(r,e,t)=>Ti(rl(r,e,t)),rv=(r,e,t)=>Nt(al(r,e,t)),ot=(r,e,t,n=!1)=>t===0?r.getFloat32(e*4,!0):t===1||t===2&&!n?r.getUint16(e*2,!0):r.getUint8(e,!0),av=(function(){const r=e=>e;return function(e,t,n,s=!1){if(t===n)return e;let i=r;return t===2&&s?n===1?i=rv:n==0&&(i=al):t===2||t===1?n===0?i=rl:n==2&&(s?i=Zd:i=r):t===0&&(n===1?i=Nt:n==2&&(s?i=Ti:i=Nt)),i(e)}})(),Ys=(r,e,t,n,s=0)=>{const i=new Uint8Array(r,e),o=new Uint8Array(t,n);for(let l=0;l<s;l++)o[l]=i[l]},ee=class ee{constructor(e,t=!0){fe(this,"getSplatScaleAndRotation",(function(){const e=new Ke,t=new Ke,n=new Ke,s=new k,i=new k,o=new vt;return function(l,c,d,u,h){const p=this.globalSplatIndexToSectionMap[l],f=this.sections[p],g=l-f.splatCountOffset,y=f.bytesPerSplat*g+ee.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,x=new DataView(this.bufferData,f.dataBase+y);i.set(xt(ot(x,0,this.compressionLevel),this.compressionLevel),xt(ot(x,1,this.compressionLevel),this.compressionLevel),xt(ot(x,2,this.compressionLevel),this.compressionLevel)),h&&(h.x!==void 0&&(i.x=h.x),h.y!==void 0&&(i.y=h.y),h.z!==void 0&&(i.z=h.z)),o.set(xt(ot(x,4,this.compressionLevel),this.compressionLevel),xt(ot(x,5,this.compressionLevel),this.compressionLevel),xt(ot(x,6,this.compressionLevel),this.compressionLevel),xt(ot(x,3,this.compressionLevel),this.compressionLevel)),u?(e.makeScale(i.x,i.y,i.z),t.makeRotationFromQuaternion(o),n.copy(e).multiply(t).multiply(u),n.decompose(s,d,c)):(c.copy(i),d.copy(o))}})());fe(this,"fillSplatScaleRotationArray",(function(){const e=new Ke,t=new Ke,n=new Ke,s=new k,i=new vt,o=new k,l=c=>{const d=c.w<0?-1:1;c.x*=d,c.y*=d,c.z*=d,c.w*=d};return function(c,d,u,h,p,f,g,y){const x=this.splatCount;h=h||0,p=p||x-1,f===void 0&&(f=h);const m=(v,S)=>av(v,S,g);for(let v=h;v<=p;v++){const S=this.globalSplatIndexToSectionMap[v],b=this.sections[S],_=v-b.splatCountOffset,M=b.bytesPerSplat*_+ee.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,w=(v-h+f)*ee.ScaleComponentCount,T=(v-h+f)*ee.RotationComponentCount,C=new DataView(this.bufferData,b.dataBase+M),A=y&&y.x!==void 0?y.x:ot(C,0,this.compressionLevel),R=y&&y.y!==void 0?y.y:ot(C,1,this.compressionLevel),D=y&&y.z!==void 0?y.z:ot(C,2,this.compressionLevel),I=ot(C,3,this.compressionLevel),U=ot(C,4,this.compressionLevel),j=ot(C,5,this.compressionLevel),P=ot(C,6,this.compressionLevel);s.set(xt(A,this.compressionLevel),xt(R,this.compressionLevel),xt(D,this.compressionLevel)),i.set(xt(U,this.compressionLevel),xt(j,this.compressionLevel),xt(P,this.compressionLevel),xt(I,this.compressionLevel)).normalize(),u&&(o.set(0,0,0),e.makeScale(s.x,s.y,s.z),t.makeRotationFromQuaternion(i),n.identity().premultiply(e).premultiply(t),n.premultiply(u),n.decompose(o,i,s),i.normalize()),l(i),c&&(c[w]=m(s.x,0),c[w+1]=m(s.y,0),c[w+2]=m(s.z,0)),d&&(d[T]=m(i.x,0),d[T+1]=m(i.y,0),d[T+2]=m(i.z,0),d[T+3]=m(i.w,0))}}})());fe(this,"fillSphericalHarmonicsArray",(function(){for(let U=0;U<15;U++)new k;const e=new Qe,t=new Ke,n=new k,s=new k,i=new vt,o=[],l=[],c=[],d=[],u=[],h=[],p=[],f=[],g=[],y=[],x=[],m=[],v=[],S=[],b=[],_=[],M=[],w=[],T=U=>U,C=(U,j,P,X)=>{U[0]=j,U[1]=P,U[2]=X},A=(U,j,P,X,z)=>{U[0]=ot(j,X,z,!0),U[1]=ot(j,X+P,z,!0),U[2]=ot(j,X+P+P,z,!0)},R=(U,j)=>{j[0]=U[0],j[1]=U[1],j[2]=U[2]},D=(U,j,P,X)=>{j[P]=X(U[0]),j[P+1]=X(U[1]),j[P+2]=X(U[2])},I=(U,j,P,X,z)=>(j[0]=xt(U[0],P,!0,X,z),j[1]=xt(U[1],P,!0,X,z),j[2]=xt(U[2],P,!0,X,z),j);return function(U,j,P,X,z,Q,ie){const q=this.splatCount;X=X||0,z=z||q-1,Q===void 0&&(Q=X),P&&j>=1&&(t.copy(P),t.decompose(n,i,s),i.normalize(),t.makeRotationFromQuaternion(i),e.setFromMatrix4(t),C(o,e.elements[4],-e.elements[7],e.elements[1]),C(l,-e.elements[5],e.elements[8],-e.elements[2]),C(c,e.elements[3],-e.elements[6],e.elements[0]));const pe=Se=>Zd(Se,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),Te=Se=>Ti(Se,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let Se=X;Se<=z;Se++){const Fe=this.globalSplatIndexToSectionMap[Se],K=this.sections[Fe];j=Math.min(j,K.sphericalHarmonicsDegree);const te=ti(j),me=Se-K.splatCountOffset,we=K.bytesPerSplat*me+ee.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,xe=new DataView(this.bufferData,K.dataBase+we),je=(Se-X+Q)*te;let Ze=P?0:this.compressionLevel,L=T;Ze!==ie&&(Ze===1?ie===0?L=rl:ie==2&&(L=pe):Ze===0&&(ie===1?L=Nt:ie==2&&(L=Te)));const He=this.minSphericalHarmonicsCoeff,Re=this.maxSphericalHarmonicsCoeff;j>=1&&(A(g,xe,3,0,this.compressionLevel),A(y,xe,3,1,this.compressionLevel),A(x,xe,3,2,this.compressionLevel),P?(I(g,g,this.compressionLevel,He,Re),I(y,y,this.compressionLevel,He,Re),I(x,x,this.compressionLevel,He,Re),ee.rotateSphericalHarmonics3(g,y,x,o,l,c,S,b,_)):(R(g,S),R(y,b),R(x,_)),D(S,U,je,L),D(b,U,je+3,L),D(_,U,je+6,L),j>=2&&(A(g,xe,5,9,this.compressionLevel),A(y,xe,5,10,this.compressionLevel),A(x,xe,5,11,this.compressionLevel),A(m,xe,5,12,this.compressionLevel),A(v,xe,5,13,this.compressionLevel),P?(I(g,g,this.compressionLevel,He,Re),I(y,y,this.compressionLevel,He,Re),I(x,x,this.compressionLevel,He,Re),I(m,m,this.compressionLevel,He,Re),I(v,v,this.compressionLevel,He,Re),ee.rotateSphericalHarmonics5(g,y,x,m,v,o,l,c,d,u,h,p,f,S,b,_,M,w)):(R(g,S),R(y,b),R(x,_),R(m,M),R(v,w)),D(S,U,je+9,L),D(b,U,je+12,L),D(_,U,je+15,L),D(M,U,je+18,L),D(w,U,je+21,L)))}}})());this.constructFromBuffer(e,t)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let t=0;t<this.sections.length;t++){const n=this.sections[t];(t===0||n.sphericalHarmonicsDegree<e)&&(e=n.sphericalHarmonicsDegree)}return e}getBucketIndex(e,t){let n;const s=e.fullBucketCount*e.bucketSize;if(t<s)n=Math.floor(t/e.bucketSize);else{let i=s;n=e.fullBucketCount;let o=0;for(;i<e.splatCount;){let l=e.partiallyFilledBucketLengths[o];if(t>=i&&t<i+l)break;i+=l,n++,o++}}return n}getSplatCenter(e,t,n){const s=this.globalSplatIndexToSectionMap[e],i=this.sections[s],o=e-i.splatCountOffset,l=i.bytesPerSplat*o,c=new DataView(this.bufferData,i.dataBase+l),d=ot(c,0,this.compressionLevel),u=ot(c,1,this.compressionLevel),h=ot(c,2,this.compressionLevel);if(this.compressionLevel>=1){const f=this.getBucketIndex(i,o)*ee.BucketStorageSizeFloats,g=i.compressionScaleFactor,y=i.compressionScaleRange;t.x=(d-y)*g+i.bucketArray[f],t.y=(u-y)*g+i.bucketArray[f+1],t.z=(h-y)*g+i.bucketArray[f+2]}else t.x=d,t.y=u,t.z=h;n&&t.applyMatrix4(n)}getSplatColor(e,t){const n=this.globalSplatIndexToSectionMap[e],s=this.sections[n],i=e-s.splatCountOffset,o=s.bytesPerSplat*i+ee.CompressionLevels[this.compressionLevel].ColorOffsetBytes,l=new Uint8Array(this.bufferData,s.dataBase+o,4);t.set(l[0],l[1],l[2],l[3])}fillSplatCenterArray(e,t,n,s,i){const o=this.splatCount;n=n||0,s=s||o-1,i===void 0&&(i=n);const l=new k;for(let c=n;c<=s;c++){const d=this.globalSplatIndexToSectionMap[c],u=this.sections[d],h=c-u.splatCountOffset,p=(c-n+i)*ee.CenterComponentCount,f=u.bytesPerSplat*h,g=new DataView(this.bufferData,u.dataBase+f),y=ot(g,0,this.compressionLevel),x=ot(g,1,this.compressionLevel),m=ot(g,2,this.compressionLevel);if(this.compressionLevel>=1){const S=this.getBucketIndex(u,h)*ee.BucketStorageSizeFloats,b=u.compressionScaleFactor,_=u.compressionScaleRange;l.x=(y-_)*b+u.bucketArray[S],l.y=(x-_)*b+u.bucketArray[S+1],l.z=(m-_)*b+u.bucketArray[S+2]}else l.x=y,l.y=x,l.z=m;t&&l.applyMatrix4(t),e[p]=l.x,e[p+1]=l.y,e[p+2]=l.z}}fillSplatCovarianceArray(e,t,n,s,i,o){const l=this.splatCount,c=new k,d=new vt;n=n||0,s=s||l-1,i===void 0&&(i=n);for(let u=n;u<=s;u++){const h=this.globalSplatIndexToSectionMap[u],p=this.sections[h],f=u-p.splatCountOffset,g=(u-n+i)*ee.CovarianceComponentCount,y=p.bytesPerSplat*f+ee.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,x=new DataView(this.bufferData,p.dataBase+y);c.set(xt(ot(x,0,this.compressionLevel),this.compressionLevel),xt(ot(x,1,this.compressionLevel),this.compressionLevel),xt(ot(x,2,this.compressionLevel),this.compressionLevel)),d.set(xt(ot(x,4,this.compressionLevel),this.compressionLevel),xt(ot(x,5,this.compressionLevel),this.compressionLevel),xt(ot(x,6,this.compressionLevel),this.compressionLevel),xt(ot(x,3,this.compressionLevel),this.compressionLevel)),ee.computeCovariance(c,d,t,e,g,o)}}fillSplatColorArray(e,t,n,s,i){const o=this.splatCount;n=n||0,s=s||o-1,i===void 0&&(i=n);for(let l=n;l<=s;l++){const c=this.globalSplatIndexToSectionMap[l],d=this.sections[c],u=l-d.splatCountOffset,h=(l-n+i)*ee.ColorComponentCount,p=d.bytesPerSplat*u+ee.CompressionLevels[this.compressionLevel].ColorOffsetBytes,f=new Uint8Array(this.bufferData,d.dataBase+p);let g=f[3];g=g>=t?g:0,e[h]=f[0],e[h+1]=f[1],e[h+2]=f[2],e[h+3]=g}}static parseHeader(e){const t=new Uint8Array(e,0,ee.HeaderSizeBytes),n=new Uint16Array(e,0,ee.HeaderSizeBytes/2),s=new Uint32Array(e,0,ee.HeaderSizeBytes/4),i=new Float32Array(e,0,ee.HeaderSizeBytes/4),o=t[0],l=t[1],c=s[1],d=s[2],u=s[3],h=s[4],p=n[10],f=new k(i[6],i[7],i[8]),g=i[9]||-Zn,y=i[10]||Zn;return{versionMajor:o,versionMinor:l,maxSectionCount:c,sectionCount:d,maxSplatCount:u,splatCount:h,compressionLevel:p,sceneCenter:f,minSphericalHarmonicsCoeff:g,maxSphericalHarmonicsCoeff:y}}static writeHeaderCountsToBuffer(e,t,n){const s=new Uint32Array(n,0,ee.HeaderSizeBytes/4);s[2]=e,s[4]=t}static writeHeaderToBuffer(e,t){const n=new Uint8Array(t,0,ee.HeaderSizeBytes),s=new Uint16Array(t,0,ee.HeaderSizeBytes/2),i=new Uint32Array(t,0,ee.HeaderSizeBytes/4),o=new Float32Array(t,0,ee.HeaderSizeBytes/4);n[0]=e.versionMajor,n[1]=e.versionMinor,n[2]=0,n[3]=0,i[1]=e.maxSectionCount,i[2]=e.sectionCount,i[3]=e.maxSplatCount,i[4]=e.splatCount,s[10]=e.compressionLevel,o[6]=e.sceneCenter.x,o[7]=e.sceneCenter.y,o[8]=e.sceneCenter.z,o[9]=e.minSphericalHarmonicsCoeff||-Zn,o[10]=e.maxSphericalHarmonicsCoeff||Zn}static parseSectionHeaders(e,t,n=0,s){const i=e.compressionLevel,o=e.maxSectionCount,l=new Uint16Array(t,n,o*ee.SectionHeaderSizeBytes/2),c=new Uint32Array(t,n,o*ee.SectionHeaderSizeBytes/4),d=new Float32Array(t,n,o*ee.SectionHeaderSizeBytes/4),u=[];let h=0,p=h/2,f=h/4,g=ee.HeaderSizeBytes+e.maxSectionCount*ee.SectionHeaderSizeBytes,y=0;for(let x=0;x<o;x++){const m=c[f+1],v=c[f+2],S=c[f+3],b=d[f+4],_=b/2,M=l[p+10],w=c[f+6]||ee.CompressionLevels[i].ScaleRange,T=c[f+8],C=c[f+9],A=C*4,R=M*S+A,D=l[p+20],{bytesPerSplat:I}=ee.calculateComponentStorage(i,D),U=I*m,j=U+R,P={bytesPerSplat:I,splatCountOffset:y,splatCount:s?m:0,maxSplatCount:m,bucketSize:v,bucketCount:S,bucketBlockSize:b,halfBucketBlockSize:_,bucketStorageSizeBytes:M,bucketsStorageSizeBytes:R,splatDataStorageSizeBytes:U,storageSizeBytes:j,compressionScaleRange:w,compressionScaleFactor:_/w,base:g,bucketsBase:g+A,dataBase:g+R,fullBucketCount:T,partiallyFilledBucketCount:C,sphericalHarmonicsDegree:D};u[x]=P,g+=j,h+=ee.SectionHeaderSizeBytes,p=h/2,f=h/4,y+=m}return u}static writeSectionHeaderToBuffer(e,t,n,s=0){const i=new Uint16Array(n,s,ee.SectionHeaderSizeBytes/2),o=new Uint32Array(n,s,ee.SectionHeaderSizeBytes/4),l=new Float32Array(n,s,ee.SectionHeaderSizeBytes/4);o[0]=e.splatCount,o[1]=e.maxSplatCount,o[2]=t>=1?e.bucketSize:0,o[3]=t>=1?e.bucketCount:0,l[4]=t>=1?e.bucketBlockSize:0,i[10]=t>=1?ee.BucketStorageSizeBytes:0,o[6]=t>=1?e.compressionScaleRange:0,o[7]=e.storageSizeBytes,o[8]=t>=1?e.fullBucketCount:0,o[9]=t>=1?e.partiallyFilledBucketCount:0,i[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,t,n=0){const s=new Uint32Array(t,n,ee.SectionHeaderSizeBytes/4);s[0]=e}constructFromBuffer(e,t){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];const n=ee.parseHeader(this.bufferData);this.versionMajor=n.versionMajor,this.versionMinor=n.versionMinor,this.maxSectionCount=n.maxSectionCount,this.sectionCount=t?n.maxSectionCount:0,this.maxSplatCount=n.maxSplatCount,this.splatCount=t?n.maxSplatCount:0,this.compressionLevel=n.compressionLevel,this.sceneCenter=new k().copy(n.sceneCenter),this.minSphericalHarmonicsCoeff=n.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=n.maxSphericalHarmonicsCoeff,this.sections=ee.parseSectionHeaders(n,this.bufferData,ee.HeaderSizeBytes,t),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,t){const n=ee.CompressionLevels[e].BytesPerCenter,s=ee.CompressionLevels[e].BytesPerScale,i=ee.CompressionLevels[e].BytesPerRotation,o=ee.CompressionLevels[e].BytesPerColor,l=ti(t),c=ee.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*l,d=n+s+i+o+c;return{bytesPerCenter:n,bytesPerScale:s,bytesPerRotation:i,bytesPerColor:o,sphericalHarmonicsComponentsPerSplat:l,sphericalHarmonicsBytesPerSplat:c,bytesPerSplat:d}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){const t=this.sections[e];t.bucketArray=new Float32Array(this.bufferData,t.bucketsBase,t.bucketCount*ee.BucketStorageSizeFloats),t.partiallyFilledBucketCount>0&&(t.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,t.base,t.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let t=0;t<this.maxSectionCount;t++){const n=this.sections[t];for(let s=0;s<n.maxSplatCount;s++){const i=e+s;this.globalSplatIndexToLocalSplatIndexMap[i]=s,this.globalSplatIndexToSectionMap[i]=t}e+=n.maxSplatCount}}updateLoadedCounts(e,t){ee.writeHeaderCountsToBuffer(e,t,this.bufferData),this.sectionCount=e,this.splatCount=t}updateSectionLoadedCounts(e,t){const n=ee.HeaderSizeBytes+ee.SectionHeaderSizeBytes*e;ee.writeSectionHeaderSplatCountToBuffer(t,this.bufferData,n),this.sections[e].splatCount=t}static generateFromUncompressedSplatArrays(e,t,n,s,i,o,l=[]){let c=0;for(let _=0;_<e.length;_++){const M=e[_];c=Math.max(M.sphericalHarmonicsDegree,c)}let d,u;for(let _=0;_<e.length;_++){const M=e[_];for(let w=0;w<M.splats.length;w++){const T=M.splats[w];for(let C=ve.OFFSET.FRC0;C<ve.OFFSET.FRC23&&C<T.length;C++)(!d||T[C]<d)&&(d=T[C]),(!u||T[C]>u)&&(u=T[C])}}d=d||-Zn,u=u||Zn;const{bytesPerSplat:h}=ee.calculateComponentStorage(n,c),p=ee.CompressionLevels[n].ScaleRange,f=[],g=[];let y=0;for(let _=0;_<e.length;_++){const M=e[_],w=new ve(c);for(let Fe=0;Fe<M.splatCount;Fe++){const K=M.splats[Fe];(K[ve.OFFSET.OPACITY]||0)>=t&&w.addSplat(K)}const T=l[_]||{},C=(T.blockSizeFactor||1)*(i||ee.BucketBlockSize),A=Math.ceil((T.bucketSizeFactor||1)*(o||ee.BucketSize)),R=ee.computeBucketsForUncompressedSplatArray(w,C,A),D=R.fullBuckets.length,I=R.partiallyFullBuckets.map(Fe=>Fe.splats.length),U=I.length,j=[...R.fullBuckets,...R.partiallyFullBuckets],P=w.splats.length*h,X=U*4,z=n>=1?j.length*ee.BucketStorageSizeBytes+X:0,Q=P+z,ie=new ArrayBuffer(Q),q=p/(C*.5),pe=new k;let Te=0;for(let Fe=0;Fe<j.length;Fe++){const K=j[Fe];pe.fromArray(K.center);for(let te=0;te<K.splats.length;te++){let me=K.splats[te];const we=w.splats[me],xe=z+Te*h;ee.writeSplatDataToSectionBuffer(we,ie,xe,n,c,pe,q,p,d,u),Te++}}if(y+=Te,n>=1){const Fe=new Uint32Array(ie,0,I.length*4);for(let te=0;te<I.length;te++)Fe[te]=I[te];const K=new Float32Array(ie,X,j.length*ee.BucketStorageSizeFloats);for(let te=0;te<j.length;te++){const me=j[te],we=te*3;K[we]=me.center[0],K[we+1]=me.center[1],K[we+2]=me.center[2]}}f.push(ie);const Se=new ArrayBuffer(ee.SectionHeaderSizeBytes);ee.writeSectionHeaderToBuffer({maxSplatCount:Te,splatCount:Te,bucketSize:A,bucketCount:j.length,bucketBlockSize:C,compressionScaleRange:p,storageSizeBytes:Q,fullBucketCount:D,partiallyFilledBucketCount:U,sphericalHarmonicsDegree:c},n,Se,0),g.push(Se)}let x=0;for(let _ of f)x+=_.byteLength;const m=ee.HeaderSizeBytes+ee.SectionHeaderSizeBytes*f.length+x,v=new ArrayBuffer(m);ee.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:f.length,sectionCount:f.length,maxSplatCount:y,splatCount:y,compressionLevel:n,sceneCenter:s,minSphericalHarmonicsCoeff:d,maxSphericalHarmonicsCoeff:u},v);let S=ee.HeaderSizeBytes;for(let _ of g)new Uint8Array(v,S,ee.SectionHeaderSizeBytes).set(new Uint8Array(_)),S+=ee.SectionHeaderSizeBytes;for(let _ of f)new Uint8Array(v,S,_.byteLength).set(new Uint8Array(_)),S+=_.byteLength;return new ee(v)}static computeBucketsForUncompressedSplatArray(e,t,n){let s=e.splatCount;const i=t/2,o=new k,l=new k;for(let y=0;y<s;y++){const x=e.splats[y],m=[x[ve.OFFSET.X],x[ve.OFFSET.Y],x[ve.OFFSET.Z]];(y===0||m[0]<o.x)&&(o.x=m[0]),(y===0||m[0]>l.x)&&(l.x=m[0]),(y===0||m[1]<o.y)&&(o.y=m[1]),(y===0||m[1]>l.y)&&(l.y=m[1]),(y===0||m[2]<o.z)&&(o.z=m[2]),(y===0||m[2]>l.z)&&(l.z=m[2])}const c=new k().copy(l).sub(o),d=Math.ceil(c.y/t),u=Math.ceil(c.z/t),h=new k,p=[],f={};for(let y=0;y<s;y++){const x=e.splats[y],m=[x[ve.OFFSET.X],x[ve.OFFSET.Y],x[ve.OFFSET.Z]],v=Math.floor((m[0]-o.x)/t),S=Math.floor((m[1]-o.y)/t),b=Math.floor((m[2]-o.z)/t);h.x=v*t+o.x+i,h.y=S*t+o.y+i,h.z=b*t+o.z+i;const _=v*(d*u)+S*u+b;let M=f[_];M||(f[_]=M={splats:[],center:h.toArray()}),M.splats.push(y),M.splats.length>=n&&(p.push(M),f[_]=null)}const g=[];for(let y in f)if(f.hasOwnProperty(y)){const x=f[y];x&&g.push(x)}return{fullBuckets:p,partiallyFullBuckets:g}}static preallocateUncompressed(e,t){const n=ee.CompressionLevels[0].SphericalHarmonicsDegrees[t],s=ee.HeaderSizeBytes+ee.SectionHeaderSizeBytes,i=s+n.BytesPerSplat*e,o=new ArrayBuffer(i);return ee.writeHeaderToBuffer({versionMajor:ee.CurrentMajorVersion,versionMinor:ee.CurrentMinorVersion,maxSectionCount:1,sectionCount:1,maxSplatCount:e,splatCount:e,compressionLevel:0,sceneCenter:new k},o),ee.writeSectionHeaderToBuffer({maxSplatCount:e,splatCount:e,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:t},0,o,ee.HeaderSizeBytes),{splatBuffer:new ee(o,!0),splatBufferDataOffsetBytes:s}}};fe(ee,"CurrentMajorVersion",0),fe(ee,"CurrentMinorVersion",1),fe(ee,"CenterComponentCount",3),fe(ee,"ScaleComponentCount",3),fe(ee,"RotationComponentCount",4),fe(ee,"ColorComponentCount",4),fe(ee,"CovarianceComponentCount",6),fe(ee,"SplatScaleOffsetFloat",3),fe(ee,"SplatRotationOffsetFloat",6),fe(ee,"CompressionLevels",{0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}}),fe(ee,"CovarianceSizeFloats",6),fe(ee,"HeaderSizeBytes",4096),fe(ee,"SectionHeaderSizeBytes",1024),fe(ee,"BucketStorageSizeBytes",12),fe(ee,"BucketStorageSizeFloats",3),fe(ee,"BucketBlockSize",5),fe(ee,"BucketSize",256),fe(ee,"computeCovariance",(function(){const e=new Ke,t=new Qe,n=new Qe,s=new Qe,i=new Qe,o=new Qe,l=new Qe;return function(c,d,u,h,p=0,f){e.makeScale(c.x,c.y,c.z),t.setFromMatrix4(e),e.makeRotationFromQuaternion(d),n.setFromMatrix4(e),s.copy(n).multiply(t),i.copy(s).transpose().premultiply(s),u&&(o.setFromMatrix4(u),l.copy(o).transpose(),i.multiply(l),i.premultiply(o)),f>=1?(h[p]=Nt(i.elements[0]),h[p+1]=Nt(i.elements[3]),h[p+2]=Nt(i.elements[6]),h[p+3]=Nt(i.elements[4]),h[p+4]=Nt(i.elements[7]),h[p+5]=Nt(i.elements[8])):(h[p]=i.elements[0],h[p+1]=i.elements[3],h[p+2]=i.elements[6],h[p+3]=i.elements[4],h[p+4]=i.elements[7],h[p+5]=i.elements[8])}})()),fe(ee,"dot3",(e,t,n,s,i)=>{i[0]=i[1]=i[2]=0;const o=s[0],l=s[1],c=s[2];ee.addInto3(e[0]*o,e[1]*o,e[2]*o,i),ee.addInto3(t[0]*l,t[1]*l,t[2]*l,i),ee.addInto3(n[0]*c,n[1]*c,n[2]*c,i)}),fe(ee,"addInto3",(e,t,n,s)=>{s[0]=s[0]+e,s[1]=s[1]+t,s[2]=s[2]+n}),fe(ee,"dot5",(e,t,n,s,i,o,l)=>{l[0]=l[1]=l[2]=0;const c=o[0],d=o[1],u=o[2],h=o[3],p=o[4];ee.addInto3(e[0]*c,e[1]*c,e[2]*c,l),ee.addInto3(t[0]*d,t[1]*d,t[2]*d,l),ee.addInto3(n[0]*u,n[1]*u,n[2]*u,l),ee.addInto3(s[0]*h,s[1]*h,s[2]*h,l),ee.addInto3(i[0]*p,i[1]*p,i[2]*p,l)}),fe(ee,"rotateSphericalHarmonics3",(e,t,n,s,i,o,l,c,d)=>{ee.dot3(e,t,n,s,l),ee.dot3(e,t,n,i,c),ee.dot3(e,t,n,o,d)}),fe(ee,"rotateSphericalHarmonics5",(e,t,n,s,i,o,l,c,d,u,h,p,f,g,y,x,m,v)=>{const S=Math.sqrt(.25),b=Math.sqrt(3/4),_=Math.sqrt(1/3),M=Math.sqrt(4/3),w=Math.sqrt(1/12);d[0]=S*(c[2]*o[0]+c[0]*o[2]+(o[2]*c[0]+o[0]*c[2])),d[1]=c[1]*o[0]+o[1]*c[0],d[2]=b*(c[1]*o[1]+o[1]*c[1]),d[3]=c[1]*o[2]+o[1]*c[2],d[4]=S*(c[2]*o[2]-c[0]*o[0]+(o[2]*c[2]-o[0]*c[0])),ee.dot5(e,t,n,s,i,d,g),u[0]=S*(l[2]*o[0]+l[0]*o[2]+(o[2]*l[0]+o[0]*l[2])),u[1]=l[1]*o[0]+o[1]*l[0],u[2]=b*(l[1]*o[1]+o[1]*l[1]),u[3]=l[1]*o[2]+o[1]*l[2],u[4]=S*(l[2]*o[2]-l[0]*o[0]+(o[2]*l[2]-o[0]*l[0])),ee.dot5(e,t,n,s,i,u,y),h[0]=_*(l[2]*l[0]+l[0]*l[2])+-w*(c[2]*c[0]+c[0]*c[2]+(o[2]*o[0]+o[0]*o[2])),h[1]=M*l[1]*l[0]+-_*(c[1]*c[0]+o[1]*o[0]),h[2]=l[1]*l[1]+-S*(c[1]*c[1]+o[1]*o[1]),h[3]=M*l[1]*l[2]+-_*(c[1]*c[2]+o[1]*o[2]),h[4]=_*(l[2]*l[2]-l[0]*l[0])+-w*(c[2]*c[2]-c[0]*c[0]+(o[2]*o[2]-o[0]*o[0])),ee.dot5(e,t,n,s,i,h,x),p[0]=S*(l[2]*c[0]+l[0]*c[2]+(c[2]*l[0]+c[0]*l[2])),p[1]=l[1]*c[0]+c[1]*l[0],p[2]=b*(l[1]*c[1]+c[1]*l[1]),p[3]=l[1]*c[2]+c[1]*l[2],p[4]=S*(l[2]*c[2]-l[0]*c[0]+(c[2]*l[2]-c[0]*l[0])),ee.dot5(e,t,n,s,i,p,m),f[0]=S*(c[2]*c[0]+c[0]*c[2]-(o[2]*o[0]+o[0]*o[2])),f[1]=c[1]*c[0]-o[1]*o[0],f[2]=b*(c[1]*c[1]-o[1]*o[1]),f[3]=c[1]*c[2]-o[1]*o[2],f[4]=S*(c[2]*c[2]-c[0]*c[0]-(o[2]*o[2]-o[0]*o[0])),ee.dot5(e,t,n,s,i,f,v)}),fe(ee,"writeSplatDataToSectionBuffer",(function(){const e=new ArrayBuffer(12),t=new ArrayBuffer(12),n=new ArrayBuffer(16),s=new ArrayBuffer(4),i=new ArrayBuffer(256),o=new vt,l=new k,c=new k,{X:d,Y:u,Z:h,SCALE0:p,SCALE1:f,SCALE2:g,ROTATION0:y,ROTATION1:x,ROTATION2:m,ROTATION3:v,FDC0:S,FDC1:b,FDC2:_,OPACITY:M,FRC0:w,FRC9:T}=ve.OFFSET,C=(A,R,D)=>{const I=D*2+1;return A=Math.round(A*R)+D,yt(A,0,I)};return function(A,R,D,I,U,j,P,X,z=-Zn,Q=Zn){const ie=ti(U),q=ee.CompressionLevels[I].BytesPerCenter,pe=ee.CompressionLevels[I].BytesPerScale,Te=ee.CompressionLevels[I].BytesPerRotation,Se=ee.CompressionLevels[I].BytesPerColor,Fe=D,K=Fe+q,te=K+pe,me=te+Te,we=me+Se;if(A[y]!==void 0?(o.set(A[y],A[x],A[m],A[v]),o.normalize()):o.set(1,0,0,0),A[p]!==void 0?l.set(A[p]||0,A[f]||0,A[g]||0):l.set(0,0,0),I===0){const je=new Float32Array(R,Fe,ee.CenterComponentCount),Ze=new Float32Array(R,te,ee.RotationComponentCount),L=new Float32Array(R,K,ee.ScaleComponentCount);if(Ze.set([o.x,o.y,o.z,o.w]),L.set([l.x,l.y,l.z]),je.set([A[d],A[u],A[h]]),U>0){const He=new Float32Array(R,we,ie);if(U>=1){for(let Re=0;Re<9;Re++)He[Re]=A[w+Re]||0;if(U>=2)for(let Re=0;Re<15;Re++)He[Re+9]=A[T+Re]||0}}}else{const je=new Uint16Array(e,0,ee.CenterComponentCount),Ze=new Uint16Array(n,0,ee.RotationComponentCount),L=new Uint16Array(t,0,ee.ScaleComponentCount);if(Ze.set([Nt(o.x),Nt(o.y),Nt(o.z),Nt(o.w)]),L.set([Nt(l.x),Nt(l.y),Nt(l.z)]),c.set(A[d],A[u],A[h]).sub(j),c.x=C(c.x,P,X),c.y=C(c.y,P,X),c.z=C(c.z,P,X),je.set([c.x,c.y,c.z]),U>0){const He=I===1?Uint16Array:Uint8Array,Re=I===1?2:1,Le=new He(i,0,ie);if(U>=1){for(let $e=0;$e<9;$e++){const be=A[w+$e]||0;Le[$e]=I===1?Nt(be):Ti(be,z,Q)}const Me=9*Re;if(Ys(Le.buffer,0,R,we,Me),U>=2){for(let $e=0;$e<15;$e++){const be=A[T+$e]||0;Le[$e+9]=I===1?Nt(be):Ti(be,z,Q)}Ys(Le.buffer,Me,R,we+Me,15*Re)}}}Ys(je.buffer,0,R,Fe,6),Ys(L.buffer,0,R,K,6),Ys(Ze.buffer,0,R,te,8)}const xe=new Uint8ClampedArray(s,0,4);xe.set([A[S]||0,A[b]||0,A[_]||0]),xe[3]=A[M]||0,Ys(xe.buffer,0,R,me,4)}})());let Ie=ee;const Mc=new Uint8Array([112,108,121,10]),Ec=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),Oa="end_header",ja=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),Rn=(r,e)=>{const t=(1<<e)-1;return(r&t)/t},Tc=(r,e)=>{r.x=Rn(e>>>21,11),r.y=Rn(e>>>11,10),r.z=Rn(e,11)},ov=(r,e)=>{r.x=Rn(e>>>24,8),r.y=Rn(e>>>16,8),r.z=Rn(e>>>8,8),r.w=Rn(e,8)},lv=(r,e)=>{const t=1/(Math.sqrt(2)*.5),n=(Rn(e>>>20,10)-.5)*t,s=(Rn(e>>>10,10)-.5)*t,i=(Rn(e,10)-.5)*t,o=Math.sqrt(1-(n*n+s*s+i*i));switch(e>>>30){case 0:r.set(o,n,s,i);break;case 1:r.set(n,o,s,i);break;case 2:r.set(n,s,o,i);break;case 3:r.set(n,s,i,o);break}},On=(r,e,t)=>r*(1-t)+e*t,wt=(r,e)=>{var t;return(t=r.properties.find(n=>n.name===e&&n.storage))==null?void 0:t.storage},dt=class dt{static decodeHeaderText(e){let t,n,s,i;const o=e.split(`
`).filter(h=>!h.startsWith("comment "));let l=0,c=!1;for(let h=1;h<o.length;++h){const p=o[h].split(" ");switch(p[0]){case"format":if(p[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":t={name:p[1],count:parseInt(p[2],10),properties:[],storageSizeBytes:0},t.name==="chunk"?n=t:t.name==="vertex"?s=t:t.name==="sh"&&(i=t);break;case"property":{if(!ja.has(p[1]))throw new Error(`Unrecognized property data type '${p[1]}' in ply header`);const f=ja.get(p[1]),g=f.BYTES_PER_ELEMENT*t.count;t.name==="vertex"&&(l+=f.BYTES_PER_ELEMENT),t.properties.push({type:p[1],name:p[2],storage:null,byteSize:f.BYTES_PER_ELEMENT,storageSizeByes:g}),t.storageSizeBytes+=g;break}case Oa:c=!0;break;default:throw new Error(`Unrecognized header value '${p[0]}' in ply header`)}if(c)break}let d=0,u=0;return i&&(u=i.properties.length,i.properties.length>=45?d=3:i.properties.length>=24?d=2:i.properties.length>=9&&(d=1)),{chunkElement:n,vertexElement:s,shElement:i,bytesPerSplat:l,headerSizeBytes:e.indexOf(Oa)+Oa.length+1,sphericalHarmonicsDegree:d,sphericalHarmonicsPerSplat:u}}static decodeHeader(e){const t=(f,g)=>{const y=f.length-g.length;let x,m;for(x=0;x<=y;++x){for(m=0;m<g.length&&f[x+m]===g[m];++m);if(m===g.length)return x}return-1},n=(f,g)=>{if(f.length<g.length)return!1;for(let y=0;y<g.length;++y)if(f[y]!==g[y])return!1;return!0};let s=new Uint8Array(e),i;if(s.length>=Mc.length&&!n(s,Mc))throw new Error("Invalid PLY header");if(i=t(s,Ec),i===-1)throw new Error("End of PLY header not found");const o=new TextDecoder("ascii").decode(s.slice(0,i)),{chunkElement:l,vertexElement:c,shElement:d,sphericalHarmonicsDegree:u,sphericalHarmonicsPerSplat:h,bytesPerSplat:p}=dt.decodeHeaderText(o);return{headerSizeBytes:i+Ec.length,bytesPerSplat:p,chunkElement:l,vertexElement:c,shElement:d,sphericalHarmonicsDegree:u,sphericalHarmonicsPerSplat:h}}static readElementData(e,t,n,s,i,o=null){let l=t instanceof DataView?t:new DataView(t);s=s||0,i=i||e.count-1;for(let c=s;c<=i;++c)for(let d=0;d<e.properties.length;++d){const u=e.properties[d],h=ja.get(u.type),p=h.BYTES_PER_ELEMENT*e.count;if((!u.storage||u.storage.byteLength<p)&&(!o||o(u.name))&&(u.storage=new h(e.count)),u.storage)switch(u.type){case"char":u.storage[c]=l.getInt8(n);break;case"uchar":u.storage[c]=l.getUint8(n);break;case"short":u.storage[c]=l.getInt16(n,!0);break;case"ushort":u.storage[c]=l.getUint16(n,!0);break;case"int":u.storage[c]=l.getInt32(n,!0);break;case"uint":u.storage[c]=l.getUint32(n,!0);break;case"float":u.storage[c]=l.getFloat32(n,!0);break;case"double":u.storage[c]=l.getFloat64(n,!0);break}n+=u.byteSize}return n}static readPly(e,t=null){const n=dt.decodeHeader(e);let s=dt.readElementData(n.chunkElement,e,n.headerSizeBytes,null,null,t);return s=dt.readElementData(n.vertexElement,e,s,null,null,t),dt.readElementData(n.shElement,e,s,null,null,t),{chunkElement:n.chunkElement,vertexElement:n.vertexElement,shElement:n.shElement,sphericalHarmonicsDegree:n.sphericalHarmonicsDegree,sphericalHarmonicsPerSplat:n.sphericalHarmonicsPerSplat}}static getElementStorageArrays(e,t,n){const s={};if(t){const i=wt(e,"min_r"),o=wt(e,"min_g"),l=wt(e,"min_b"),c=wt(e,"max_r"),d=wt(e,"max_g"),u=wt(e,"max_b"),h=wt(e,"min_x"),p=wt(e,"min_y"),f=wt(e,"min_z"),g=wt(e,"max_x"),y=wt(e,"max_y"),x=wt(e,"max_z"),m=wt(e,"min_scale_x"),v=wt(e,"min_scale_y"),S=wt(e,"min_scale_z"),b=wt(e,"max_scale_x"),_=wt(e,"max_scale_y"),M=wt(e,"max_scale_z"),w=wt(t,"packed_position"),T=wt(t,"packed_rotation"),C=wt(t,"packed_scale"),A=wt(t,"packed_color");s.colorExtremes={minR:i,maxR:c,minG:o,maxG:d,minB:l,maxB:u},s.positionExtremes={minX:h,maxX:g,minY:p,maxY:y,minZ:f,maxZ:x},s.scaleExtremes={minScaleX:m,maxScaleX:b,minScaleY:v,maxScaleY:_,minScaleZ:S,maxScaleZ:M},s.position=w,s.rotation=T,s.scale=C,s.color=A}if(n){const i={};for(let o=0;o<45;o++){const l=`f_rest_${o}`,c=wt(n,l);if(c)i[l]=c;else break}s.sh=i}return s}static parseToUncompressedSplatBufferSection(e,t,n,s,i,o,l,c,d=null){dt.readElementData(t,o,0,n,s,d);const u=Ie.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:h,scaleExtremes:p,colorExtremes:f,position:g,rotation:y,scale:x,color:m}=dt.getElementStorageArrays(e,t),v=ve.createSplat();for(let S=n;S<=s;++S){dt.decompressBaseSplat(S,i,g,h,x,p,y,f,m,v);const b=S*u+c;Ie.writeSplatDataToSectionBuffer(v,l,b,0,0)}}static parseToUncompressedSplatArraySection(e,t,n,s,i,o,l,c=null){dt.readElementData(t,o,0,n,s,c);const{positionExtremes:d,scaleExtremes:u,colorExtremes:h,position:p,rotation:f,scale:g,color:y}=dt.getElementStorageArrays(e,t);for(let x=n;x<=s;++x){const m=ve.createSplat();dt.decompressBaseSplat(x,i,p,d,g,u,f,h,y,m),l.addSplat(m)}}static parseSphericalHarmonicsToUncompressedSplatArraySection(e,t,n,s,i,o,l,c,d,u=null){dt.readElementData(t,i,o,n,s,u);const{sh:h}=dt.getElementStorageArrays(e,void 0,t),p=Object.values(h);for(let f=n;f<=s;++f)dt.decompressSphericalHarmonics(f,p,l,c,d.splats[f])}static parseToUncompressedSplatArray(e,t){const{chunkElement:n,vertexElement:s,shElement:i,sphericalHarmonicsDegree:o}=dt.readPly(e);t=Math.min(t,o);const l=new ve(t),{positionExtremes:c,scaleExtremes:d,colorExtremes:u,position:h,rotation:p,scale:f,color:g}=dt.getElementStorageArrays(n,s);let y;if(t>0){const{sh:x}=dt.getElementStorageArrays(n,void 0,i);y=Object.values(x)}for(let x=0;x<s.count;++x){l.addDefaultSplat();const m=l.getSplat(l.splatCount-1);dt.decompressBaseSplat(x,0,h,c,f,d,p,u,g,m),t>0&&dt.decompressSphericalHarmonics(x,y,t,o,m)}return l}static parseToUncompressedSplatBuffer(e,t){const{chunkElement:n,vertexElement:s,shElement:i,sphericalHarmonicsDegree:o}=dt.readPly(e);t=Math.min(t,o);const{splatBuffer:l,splatBufferDataOffsetBytes:c}=Ie.preallocateUncompressed(s.count,t),{positionExtremes:d,scaleExtremes:u,colorExtremes:h,position:p,rotation:f,scale:g,color:y}=dt.getElementStorageArrays(n,s);let x;if(t>0){const{sh:S}=dt.getElementStorageArrays(n,void 0,i);x=Object.values(S)}const m=Ie.CompressionLevels[0].SphericalHarmonicsDegrees[t].BytesPerSplat,v=ve.createSplat(t);for(let S=0;S<s.count;++S){dt.decompressBaseSplat(S,0,p,d,g,u,f,h,y,v),t>0&&dt.decompressSphericalHarmonics(S,x,t,o,v);const b=S*m+c;Ie.writeSplatDataToSectionBuffer(v,l.bufferData,b,0,t)}return l}};fe(dt,"decompressBaseSplat",(function(){const e=new k,t=new vt,n=new k,s=new bt,i=ve.OFFSET;return function(o,l,c,d,u,h,p,f,g,y){y=y||ve.createSplat();const x=Math.floor((l+o)/256);return Tc(e,c[o]),lv(t,p[o]),Tc(n,u[o]),ov(s,g[o]),y[i.X]=On(d.minX[x],d.maxX[x],e.x),y[i.Y]=On(d.minY[x],d.maxY[x],e.y),y[i.Z]=On(d.minZ[x],d.maxZ[x],e.z),y[i.ROTATION0]=t.x,y[i.ROTATION1]=t.y,y[i.ROTATION2]=t.z,y[i.ROTATION3]=t.w,y[i.SCALE0]=Math.exp(On(h.minScaleX[x],h.maxScaleX[x],n.x)),y[i.SCALE1]=Math.exp(On(h.minScaleY[x],h.maxScaleY[x],n.y)),y[i.SCALE2]=Math.exp(On(h.minScaleZ[x],h.maxScaleZ[x],n.z)),f.minR&&f.maxR?y[i.FDC0]=yt(Math.round(On(f.minR[x],f.maxR[x],s.x)*255),0,255):y[i.FDC0]=yt(Math.floor(s.x*255),0,255),f.minG&&f.maxG?y[i.FDC1]=yt(Math.round(On(f.minG[x],f.maxG[x],s.y)*255),0,255):y[i.FDC1]=yt(Math.floor(s.y*255),0,255),f.minB&&f.maxB?y[i.FDC2]=yt(Math.round(On(f.minB[x],f.maxB[x],s.z)*255),0,255):y[i.FDC2]=yt(Math.floor(s.z*255),0,255),y[i.OPACITY]=yt(Math.floor(s.w*255),0,255),y}})()),fe(dt,"decompressSphericalHarmonics",(function(){const e=[0,3,8,15],t=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(n,s,i,o,l){l=l||ve.createSplat();let c=e[i],d=e[o];for(let u=0;u<3;++u)for(let h=0;h<15;++h){const p=t[u*15+h];h<c&&h<d&&(l[ve.OFFSET.FRC0+p]=s[u*d+h][n]*(8/255)-4)}return l}})());let Cn=dt;const zt={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[Jd,ol,ll,cl,dl,ul,hl]=[0,1,2,3,4,5,6],Rc={double:Jd,int:ol,uint:ll,float:cl,short:dl,ushort:ul,uchar:hl},cv={[Jd]:8,[ol]:4,[ll]:4,[cl]:4,[dl]:2,[ul]:2,[hl]:1},qt=class qt{static decodeSectionHeader(e,t,n=0){const s=[];let i=!1,o=-1,l=0,c=!1,d=null;const u=[],h=[],p=[],f={};for(let m=n;m<e.length;m++){const v=e[m].trim();if(v.startsWith("element"))if(i){o--;break}else{i=!0,n=m,o=m;const S=v.split(" ");let b=0;for(let _ of S){const M=_.trim();M.length>0&&(b++,b===2?d=M:b===3&&(l=parseInt(M)))}}else if(v.startsWith("property")){const S=v.match(/(\w+)\s+(\w+)\s+(\w+)/);if(S){const b=S[2],_=S[3];p.push(_);const M=t[_];f[_]=b;const w=Rc[b];M!==void 0&&(u.push(M),h[M]=w)}}if(v===qt.HeaderEndToken){c=!0;break}i&&(s.push(v),o++)}const g=[];let y=0;for(let m of p){const v=f[m];if(f.hasOwnProperty(m)){const S=t[m];S!==void 0&&(g[S]=y)}y+=cv[Rc[v]]}const x=qt.decodeSphericalHarmonicsFromSectionHeader(p,t);return{headerLines:s,headerStartLine:n,headerEndLine:o,fieldTypes:h,fieldIds:u,fieldOffsets:g,bytesPerVertex:y,vertexCount:l,dataSizeBytes:y*l,endOfHeader:c,sectionName:d,sphericalHarmonicsDegree:x.degree,sphericalHarmonicsCoefficientsPerChannel:x.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:x.degree1Fields,sphericalHarmonicsDegree2Fields:x.degree2Fields}}static decodeSphericalHarmonicsFromSectionHeader(e,t){let n=0,s=0;for(let c of e)c.startsWith("f_rest")&&n++;s=n/3;let i=0;s>=3&&(i=1),s>=8&&(i=2);let o=[],l=[];for(let c=0;c<3;c++){if(i>=1)for(let d=0;d<3;d++)o.push(t["f_rest_"+(d+s*c)]);if(i>=2)for(let d=0;d<5;d++)l.push(t["f_rest_"+(d+s*c+3)])}return{degree:i,coefficientsPerChannel:s,degree1Fields:o,degree2Fields:l}}static getHeaderSectionNames(e){const t=[];for(let n of e)if(n.startsWith("element")){const s=n.split(" ");let i=0;for(let o of s){const l=o.trim();l.length>0&&(i++,i===2&&t.push(l))}}return t}static checkTextForEndHeader(e){return!!e.includes(qt.HeaderEndToken)}static checkBufferForEndHeader(e,t,n,s){const i=new Uint8Array(e,Math.max(0,t-n),n),o=s.decode(i);return qt.checkTextForEndHeader(o)}static extractHeaderFromBufferToText(e){const t=new TextDecoder;let n=0,s="";const i=100;for(;;){if(n+i>=e.byteLength)throw new Error("End of file reached while searching for end of header");const o=new Uint8Array(e,n,i);if(s+=t.decode(o),n+=i,qt.checkBufferForEndHeader(e,n,i*2,t))break}return s}static readHeaderFromBuffer(e){const t=new TextDecoder;let n=0,s="";const i=100;for(;;){if(n+i>=e.byteLength)throw new Error("End of file reached while searching for end of header");const o=new Uint8Array(e,n,i);if(s+=t.decode(o),n+=i,qt.checkBufferForEndHeader(e,n,i*2,t))break}return s}static convertHeaderTextToLines(e){const t=e.split(`
`),n=[];for(let s=0;s<t.length;s++){const i=t[s].trim();if(n.push(i),i===qt.HeaderEndToken)break}return n}static determineHeaderFormatFromHeaderText(e){const t=qt.convertHeaderTextToLines(e);let n=zt.INRIAV1;for(let s=0;s<t.length;s++){const i=t[s].trim();if(i.startsWith("element chunk")||i.match(/[A-Za-z]*packed_[A-Za-z]*/))n=zt.PlayCanvasCompressed;else if(i.startsWith("element codebook_centers"))n=zt.INRIAV2;else if(i===qt.HeaderEndToken)break}return n}static determineHeaderFormatFromPlyBuffer(e){const t=qt.extractHeaderFromBufferToText(e);return qt.determineHeaderFormatFromHeaderText(t)}static readVertex(e,t,n,s,i,o,l=!0){const c=n*t.bytesPerVertex+s,d=t.fieldOffsets,u=t.fieldTypes;for(let h of i){const p=u[h];p===cl?o[h]=e.getFloat32(c+d[h],!0):p===dl?o[h]=e.getInt16(c+d[h],!0):p===ul?o[h]=e.getUint16(c+d[h],!0):p===ol?o[h]=e.getInt32(c+d[h],!0):p===ll?o[h]=e.getUint32(c+d[h],!0):p===hl&&(l?o[h]=e.getUint8(c+d[h])/255:o[h]=e.getUint8(c+d[h]))}}};fe(qt,"HeaderEndToken","end_header");let Et=qt;const eu=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],dv=eu.map((r,e)=>e),[Nc,uv,hv,fv,pv,mv,gv,xv,yv,vv,Ic,bv,Sv,Dc,Pc,Av,_v,wv]=dv,ln=class ln{static decodeHeaderLines(e){let t=0;e.forEach(u=>{u.includes("f_rest_")&&t++});let n=0;t>=45?n=45:t>=24?n=24:t>=9&&(n=9);let i=Array.from(Array(Math.max(n-1,0))).map((u,h)=>`f_rest_${h+1}`);const o=[...eu,...i],l=o.map((u,h)=>h),c=l.reduce((u,h)=>(u[o[h]]=h,u),{}),d=Et.decodeSectionHeader(e,c,0);return d.splatCount=d.vertexCount,d.bytesPerSplat=d.bytesPerVertex,d.fieldsToReadIndexes=l,d}static decodeHeaderText(e){const t=Et.convertHeaderTextToLines(e),n=ln.decodeHeaderLines(t);return n.headerText=e,n.headerSizeBytes=e.indexOf(Et.HeaderEndToken)+Et.HeaderEndToken.length+1,n}static decodeHeaderFromBuffer(e){const t=Et.readHeaderFromBuffer(e);return ln.decodeHeaderText(t)}static findSplatData(e,t){return new DataView(e,t.headerSizeBytes)}static parseToUncompressedSplatBufferSection(e,t,n,s,i,o,l,c=0){c=Math.min(c,e.sphericalHarmonicsDegree);const d=Ie.CompressionLevels[0].SphericalHarmonicsDegrees[c].BytesPerSplat;for(let u=t;u<=n;u++){const h=ln.parseToUncompressedSplat(s,u,e,i,c),p=u*d+l;Ie.writeSplatDataToSectionBuffer(h,o,p,0,c)}}static parseToUncompressedSplatArraySection(e,t,n,s,i,o,l=0){l=Math.min(l,e.sphericalHarmonicsDegree);for(let c=t;c<=n;c++){const d=ln.parseToUncompressedSplat(s,c,e,i,l);o.addSplat(d)}}static decodeSectionSplatData(e,t,n,s,i=!0){if(s=Math.min(s,n.sphericalHarmonicsDegree),i){const o=new ve(s);for(let l=0;l<t;l++){const c=ln.parseToUncompressedSplat(e,l,n,0,s);o.addSplat(c)}return o}else{const{splatBuffer:o,splatBufferDataOffsetBytes:l}=Ie.preallocateUncompressed(t,s);return ln.parseToUncompressedSplatBufferSection(n,0,t-1,e,0,o.bufferData,l,s),o}}static readSplat(e,t,n,s,i){return Et.readVertex(e,t,n,s,t.fieldsToReadIndexes,i,!0)}static parseToUncompressedSplatArray(e,t=0){const{header:n,splatCount:s,splatData:i}=Fc(e);return ln.decodeSectionSplatData(i,s,n,t,!0)}static parseToUncompressedSplatBuffer(e,t=0){const{header:n,splatCount:s,splatData:i}=Fc(e);return ln.decodeSectionSplatData(i,s,n,t,!1)}};fe(ln,"parseToUncompressedSplat",(function(){let e=[];const t=new vt,n=ve.OFFSET.X,s=ve.OFFSET.Y,i=ve.OFFSET.Z,o=ve.OFFSET.SCALE0,l=ve.OFFSET.SCALE1,c=ve.OFFSET.SCALE2,d=ve.OFFSET.ROTATION0,u=ve.OFFSET.ROTATION1,h=ve.OFFSET.ROTATION2,p=ve.OFFSET.ROTATION3,f=ve.OFFSET.FDC0,g=ve.OFFSET.FDC1,y=ve.OFFSET.FDC2,x=ve.OFFSET.OPACITY,m=[];for(let v=0;v<45;v++)m[v]=ve.OFFSET.FRC0+v;return function(v,S,b,_=0,M=0){M=Math.min(M,b.sphericalHarmonicsDegree),ln.readSplat(v,b,S,_,e);const w=ve.createSplat(M);if(e[Nc]!==void 0?(w[o]=Math.exp(e[Nc]),w[l]=Math.exp(e[uv]),w[c]=Math.exp(e[hv])):(w[o]=.01,w[l]=.01,w[c]=.01),e[Ic]!==void 0){const T=.28209479177387814;w[f]=(.5+T*e[Ic])*255,w[g]=(.5+T*e[bv])*255,w[y]=(.5+T*e[Sv])*255}else e[Pc]!==void 0?(w[f]=e[Pc]*255,w[g]=e[Av]*255,w[y]=e[_v]*255):(w[f]=0,w[g]=0,w[y]=0);if(e[Dc]!==void 0&&(w[x]=1/(1+Math.exp(-e[Dc]))*255),w[f]=yt(Math.floor(w[f]),0,255),w[g]=yt(Math.floor(w[g]),0,255),w[y]=yt(Math.floor(w[y]),0,255),w[x]=yt(Math.floor(w[x]),0,255),M>=1&&e[wv]!==void 0){for(let T=0;T<9;T++)w[m[T]]=e[b.sphericalHarmonicsDegree1Fields[T]];if(M>=2)for(let T=0;T<15;T++)w[m[9+T]]=e[b.sphericalHarmonicsDegree2Fields[T]]}return t.set(e[fv],e[pv],e[mv],e[gv]),t.normalize(),w[d]=t.x,w[u]=t.y,w[h]=t.z,w[p]=t.w,w[n]=e[xv],w[s]=e[yv],w[i]=e[vv],w}})());let Vn=ln;function Fc(r){const e=Vn.decodeHeaderFromBuffer(r),t=e.splatCount,n=Vn.findSplatData(r,e);return{header:e,splatCount:t,splatData:n}}const tu=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],vr=tu.map((r,e)=>e),[br,Cv,Mv,kc,Sr,Ev,za]=[0,1,4,16,17,18,19],nu=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],Bo=nu.map((r,e)=>e),[Bc,Tv,Rv,Nv,Iv,Dv,Pv,Fv,kv,Bv,Lo,su,iu,Lc]=Bo,Uc=Lo,Lv=su,Uv=iu,Ar=r=>{const e=(31744&r)>>10,t=1023&r;return(r>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):t/1024*6103515625e-14)},Qt=class Qt{static decodeSectionHeadersFromHeaderLines(e){const t=Bo.reduce((u,h)=>(u[nu[h]]=h,u),{}),n=vr.reduce((u,h)=>(u[tu[h]]=h,u),{}),s=Et.getHeaderSectionNames(e);let i;for(let u=0;u<s.length;u++)s[u]==="codebook_centers"&&(i=u);let o=0,l=!1;const c=[];let d=0;for(;!l;){let u;d===i?u=Et.decodeSectionHeader(e,n,o):u=Et.decodeSectionHeader(e,t,o),l=u.endOfHeader,o=u.headerEndLine+1,l||(u.splatCount=u.vertexCount,u.bytesPerSplat=u.bytesPerVertex),c.push(u),d++}return c}static decodeSectionHeadersFromHeaderText(e){const t=Et.convertHeaderTextToLines(e);return Qt.decodeSectionHeadersFromHeaderLines(t)}static getSplatCountFromSectionHeaders(e){let t=0;for(let n of e)n.sectionName!=="codebook_centers"&&(t+=n.vertexCount);return t}static decodeHeaderFromHeaderText(e){const t=e.indexOf(Et.HeaderEndToken)+Et.HeaderEndToken.length+1,n=Qt.decodeSectionHeadersFromHeaderText(e),s=Qt.getSplatCountFromSectionHeaders(n);return{headerSizeBytes:t,sectionHeaders:n,splatCount:s}}static decodeHeaderFromBuffer(e){const t=Et.readHeaderFromBuffer(e);return Qt.decodeHeaderFromHeaderText(t)}static findVertexData(e,t,n){let s=t.headerSizeBytes;for(let i=0;i<n&&i<t.sectionHeaders.length;i++){const o=t.sectionHeaders[i];s+=o.dataSizeBytes}return new DataView(e,s,t.sectionHeaders[n].dataSizeBytes)}static decodeCodeBook(e,t){const n=[],s=[];for(let i=0;i<t.vertexCount;i++){Et.readVertex(e,t,i,0,vr,n);for(let o of vr){const l=vr[o];let c=s[l];c||(s[l]=c=[]),c.push(n[o])}}for(let i=0;i<s.length;i++){const o=s[i],l=.28209479177387814;for(let c=0;c<o.length;c++){const d=Ar(o[c]);i===kc?o[c]=Math.round(1/(1+Math.exp(-d))*255):i===br?o[c]=Math.round((.5+l*d)*255):i===Sr?o[c]=Math.exp(d):o[c]=d}}return s}static decodeSectionSplatData(e,t,n,s,i){i=Math.min(i,n.sphericalHarmonicsDegree);const o=new ve(i);for(let l=0;l<t;l++){const c=Qt.parseToUncompressedSplat(e,l,n,s,0,i);o.addSplat(c)}return o}static readSplat(e,t,n,s,i){return Et.readVertex(e,t,n,s,Bo,i,!1)}static parseToUncompressedSplatArray(e,t=0){const n=[],s=Qt.decodeHeaderFromBuffer(e,t);let i;for(let l=0;l<s.sectionHeaders.length;l++){const c=s.sectionHeaders[l];if(c.sectionName==="codebook_centers"){const d=Qt.findVertexData(e,s,l);i=Qt.decodeCodeBook(d,c)}}for(let l=0;l<s.sectionHeaders.length;l++){const c=s.sectionHeaders[l];if(c.sectionName!=="codebook_centers"){const d=c.vertexCount,u=Qt.findVertexData(e,s,l),h=Qt.decodeSectionSplatData(u,d,c,i,t);n.push(h)}}const o=new ve(t);for(let l of n)for(let c of l.splats)o.addSplat(c);return o}};fe(Qt,"parseToUncompressedSplat",(function(){let e=[];const t=new vt,n=ve.OFFSET.X,s=ve.OFFSET.Y,i=ve.OFFSET.Z,o=ve.OFFSET.SCALE0,l=ve.OFFSET.SCALE1,c=ve.OFFSET.SCALE2,d=ve.OFFSET.ROTATION0,u=ve.OFFSET.ROTATION1,h=ve.OFFSET.ROTATION2,p=ve.OFFSET.ROTATION3,f=ve.OFFSET.FDC0,g=ve.OFFSET.FDC1,y=ve.OFFSET.FDC2,x=ve.OFFSET.OPACITY,m=[];for(let v=0;v<45;v++)m[v]=ve.OFFSET.FRC0+v;return function(v,S,b,_,M=0,w=0){w=Math.min(w,b.sphericalHarmonicsDegree),Qt.readSplat(v,b,S,M,e);const T=ve.createSplat(w);if(e[Bc]!==void 0?(T[o]=_[Sr][e[Bc]],T[l]=_[Sr][e[Tv]],T[c]=_[Sr][e[Rv]]):(T[o]=.01,T[l]=.01,T[c]=.01),e[Lo]!==void 0?(T[f]=_[br][e[Lo]],T[g]=_[br][e[su]],T[y]=_[br][e[iu]]):e[Uc]!==void 0?(T[f]=e[Uc]*255,T[g]=e[Lv]*255,T[y]=e[Uv]*255):(T[f]=0,T[g]=0,T[y]=0),e[Lc]!==void 0&&(T[x]=_[kc][e[Lc]]),T[f]=yt(Math.floor(T[f]),0,255),T[g]=yt(Math.floor(T[g]),0,255),T[y]=yt(Math.floor(T[y]),0,255),T[x]=yt(Math.floor(T[x]),0,255),w>=1&&b.sphericalHarmonicsDegree>=1){for(let I=0;I<9;I++){const U=_[Cv+I%3];T[m[I]]=U[e[b.sphericalHarmonicsDegree1Fields[I]]]}if(w>=2&&b.sphericalHarmonicsDegree>=2)for(let I=0;I<15;I++){const U=_[Mv+I%5];T[m[9+I]]=U[e[b.sphericalHarmonicsDegree2Fields[I]]]}}const C=_[Ev][e[Nv]],A=_[za][e[Iv]],R=_[za][e[Dv]],D=_[za][e[Pv]];return t.set(C,A,R,D),t.normalize(),T[d]=t.x,T[u]=t.y,T[h]=t.z,T[p]=t.w,T[n]=Ar(e[Fv]),T[s]=Ar(e[kv]),T[i]=Ar(e[Bv]),T}})());let Uo=Qt;class Oo{static parseToUncompressedSplatArray(e,t=0){const n=Et.determineHeaderFormatFromPlyBuffer(e);if(n===zt.PlayCanvasCompressed)return Cn.parseToUncompressedSplatArray(e,t);if(n===zt.INRIAV1)return Vn.parseToUncompressedSplatArray(e,t);if(n===zt.INRIAV2)return Uo.parseToUncompressedSplatArray(e,t)}static parseToUncompressedSplatBuffer(e,t=0){const n=Et.determineHeaderFormatFromPlyBuffer(e);if(n===zt.PlayCanvasCompressed)return Cn.parseToUncompressedSplatBuffer(e,t);if(n===zt.INRIAV1)return Vn.parseToUncompressedSplatBuffer(e,t);if(n===zt.INRIAV2)throw new Error("parseToUncompressedSplatBuffer() is not implemented for INRIA V2 PLY files")}}class ea{constructor(e,t,n,s){this.sectionCount=e,this.sectionFilters=t,this.groupingParameters=n,this.partitionGenerator=s}partitionUncompressedSplatArray(e){let t,n,s;if(this.partitionGenerator){const o=this.partitionGenerator(e);t=o.groupingParameters,n=o.sectionCount,s=o.sectionFilters}else t=this.groupingParameters,n=this.sectionCount,s=this.sectionFilters;const i=[];for(let o=0;o<n;o++){const l=new ve(e.sphericalHarmonicsDegree),c=s[o];for(let d=0;d<e.splatCount;d++)c(d)&&l.addSplat(e.splats[d]);i.push(l)}return{splatArrays:i,parameters:t}}static getStandardPartitioner(e=0,t=new k,n=Ie.BucketBlockSize,s=Ie.BucketSize){const i=o=>{const l=ve.OFFSET.X,c=ve.OFFSET.Y,d=ve.OFFSET.Z;e<=0&&(e=o.splatCount);const u=new k,h=.5,p=m=>{m.x=Math.floor(m.x/h)*h,m.y=Math.floor(m.y/h)*h,m.z=Math.floor(m.z/h)*h};o.splats.forEach(m=>{u.set(m[l],m[c],m[d]).sub(t),p(u),m.centerDist=u.lengthSq()}),o.splats.sort((m,v)=>{let S=m.centerDist,b=v.centerDist;return S>b?1:-1});const f=[],g=[];e=Math.min(o.splatCount,e);const y=Math.ceil(o.splatCount/e);let x=0;for(let m=0;m<y;m++){let v=x;f.push(S=>S>=v&&S<v+e),g.push({blocksSize:n,bucketSize:s}),x+=e}return{sectionCount:f.length,sectionFilters:f,groupingParameters:g}};return new ea(void 0,void 0,void 0,i)}}class gi{constructor(e,t,n,s,i,o,l){this.splatPartitioner=e,this.alphaRemovalThreshold=t,this.compressionLevel=n,this.sectionSize=s,this.sceneCenter=i?new k().copy(i):void 0,this.blockSize=o,this.bucketSize=l}generateFromUncompressedSplatArray(e){const t=this.splatPartitioner.partitionUncompressedSplatArray(e);return Ie.generateFromUncompressedSplatArrays(t.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,t.parameters)}static getStandardGenerator(e=1,t=1,n=0,s=new k,i=Ie.BucketBlockSize,o=Ie.BucketSize){const l=ea.getStandardPartitioner(n,s,i,o);return new gi(l,e,t,n,s,i,o)}}const Tt={Downloading:0,Processing:1,Done:2};class Ur extends Error{constructor(e){super(e)}}const gt={ProgressiveToSplatBuffer:0,ProgressiveToSplatArray:1,DownloadBeforeProcessing:2};function Oc(r,e){let t=0;for(let s of r)t+=s.sizeBytes;(!e||e.byteLength<t)&&(e=new ArrayBuffer(t));let n=0;for(let s of r)new Uint8Array(e,n,s.sizeBytes).set(s.data),n+=s.sizeBytes;return e}function jc(r,e,t,n,s,i,o,l){return e?gi.getStandardGenerator(t,n,s,i,o,l).generateFromUncompressedSplatArray(r):Ie.generateFromUncompressedSplatArrays([r],t,0,new k)}class ta{static loadFromURL(e,t,n,s,i,o,l=!0,c=0,d,u,h,p,f){let g;!n&&!l?g=gt.DownloadBeforeProcessing:l?g=gt.ProgressiveToSplatArray:g=gt.ProgressiveToSplatBuffer;const y=nt.ProgressiveLoadSectionSize,x=Ie.HeaderSizeBytes+Ie.SectionHeaderSizeBytes,m=1;let v,S,b,_,M,w=0,T=0,C=0,A=!1,R=!1,D=!1;const I=sl();let U=0,j=0,P=0,X=0,z="",Q=null,ie=[],q;const pe=new TextDecoder,Te=(Se,Fe,K)=>{const te=Se>=100;if(K&&(ie.push({data:K,sizeBytes:K.byteLength,startBytes:P,endBytes:P+K.byteLength}),P+=K.byteLength),g===gt.DownloadBeforeProcessing)te&&I.resolve(ie);else{if(A){if(v===zt.PlayCanvasCompressed&&!R){const me=Q.headerSizeBytes+Q.chunkElement.storageSizeBytes;M=Oc(ie,M),M.byteLength>=me&&(Cn.readElementData(Q.chunkElement,M,Q.headerSizeBytes),U=me,j=me,R=!0)}}else if(z+=pe.decode(K),Et.checkTextForEndHeader(z)){if(v=Et.determineHeaderFormatFromHeaderText(z),v===zt.INRIAV1)Q=Vn.decodeHeaderText(z),c=Math.min(c,Q.sphericalHarmonicsDegree),w=Q.splatCount,R=!0,X=Q.headerSizeBytes+Q.bytesPerSplat*w;else if(v===zt.PlayCanvasCompressed){if(Q=Cn.decodeHeaderText(z),c=Math.min(c,Q.sphericalHarmonicsDegree),g===gt.ProgressiveToSplatBuffer&&c>0)throw new Ur("PlyLoader.loadFromURL() -> Selected PLY format has spherical harmonics data that cannot be progressively loaded.");w=Q.vertexElement.count,X=Q.headerSizeBytes+Q.bytesPerSplat*w+Q.chunkElement.storageSizeBytes}else{if(g===gt.ProgressiveToSplatBuffer)throw new Ur("PlyLoader.loadFromURL() -> Selected PLY format cannot be progressively loaded.");g=gt.DownloadBeforeProcessing;return}if(g===gt.ProgressiveToSplatBuffer){const me=Ie.CompressionLevels[0].SphericalHarmonicsDegrees[c],we=x+me.BytesPerSplat*w;b=new ArrayBuffer(we),Ie.writeHeaderToBuffer({versionMajor:Ie.CurrentMajorVersion,versionMinor:Ie.CurrentMinorVersion,maxSectionCount:m,sectionCount:m,maxSplatCount:w,splatCount:0,compressionLevel:0,sceneCenter:new k},b)}else q=new ve(c);U=Q.headerSizeBytes,j=Q.headerSizeBytes,A=!0}if(A&&R&&ie.length>0&&(S=Oc(ie,S),P-U>y||P>=X&&!D||te)){const we=D?Q.sphericalHarmonicsPerSplat:Q.bytesPerSplat,je=(D?P:Math.min(X,P))-j,Ze=Math.floor(je/we),L=Ze*we,He=P-j-L,Re=j-ie[0].startBytes,Le=new DataView(S,Re,L);if(D)v===zt.PlayCanvasCompressed&&g===gt.ProgressiveToSplatArray&&(Cn.parseSphericalHarmonicsToUncompressedSplatArraySection(Q.chunkElement,Q.shElement,C,C+Ze-1,Le,0,c,Q.sphericalHarmonicsDegree,q),C+=Ze);else{if(g===gt.ProgressiveToSplatBuffer){const Me=Ie.CompressionLevels[0].SphericalHarmonicsDegrees[c],$e=T*Me.BytesPerSplat+x;v===zt.PlayCanvasCompressed?Cn.parseToUncompressedSplatBufferSection(Q.chunkElement,Q.vertexElement,0,Ze-1,T,Le,b,$e):Vn.parseToUncompressedSplatBufferSection(Q,0,Ze-1,Le,0,b,$e,c)}else v===zt.PlayCanvasCompressed?Cn.parseToUncompressedSplatArraySection(Q.chunkElement,Q.vertexElement,0,Ze-1,T,Le,q):Vn.parseToUncompressedSplatArraySection(Q,0,Ze-1,Le,0,q,c);T+=Ze,g===gt.ProgressiveToSplatBuffer&&(_||(Ie.writeSectionHeaderToBuffer({maxSplatCount:w,splatCount:T,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:c},0,b,Ie.HeaderSizeBytes),_=new Ie(b,!1)),_.updateLoadedCounts(1,T)),P>=X&&(D=!0)}if(He===0)ie=[];else{let Me=[],$e=0;for(let be=ie.length-1;be>=0;be--){const Ve=ie[be];if($e+=Ve.sizeBytes,Me.unshift(Ve),$e>=He)break}ie=Me}U+=y,j+=L}s&&_&&s(_,te),te&&(g===gt.ProgressiveToSplatBuffer?I.resolve(_):I.resolve(q))}t&&t(Se,Fe,Tt.Downloading)};return t&&t(0,"0%",Tt.Downloading),Jr(e,Te,!1,d).then(()=>(t&&t(0,"0%",Tt.Processing),I.promise.then(Se=>{if(t&&t(100,"100%",Tt.Done),g===gt.DownloadBeforeProcessing){const Fe=ie.map(K=>K.data);return new Blob(Fe).arrayBuffer().then(K=>ta.loadFromFileData(K,i,o,l,c,u,h,p,f))}else return g===gt.ProgressiveToSplatBuffer?Se:en(()=>jc(Se,l,i,o,u,h,p,f))})))}static loadFromFileData(e,t,n,s,i=0,o,l,c,d){return s?en(()=>Oo.parseToUncompressedSplatArray(e,i)).then(u=>jc(u,s,t,n,o,l,c,d)):en(()=>Oo.parseToUncompressedSplatBuffer(e,i))}}const Ov=r=>new ReadableStream({async start(e){e.enqueue(r),e.close()}});async function jv(r){try{const e=Ov(r);if(!e)throw new Error("Failed to create stream from data");return await zv(e)}catch(e){throw console.error("Error decompressing gzipped data:",e),e}}async function zv(r){const e=r.pipeThrough(new DecompressionStream("gzip")),n=await new Response(e).arrayBuffer();return new Uint8Array(n)}const Hv=1347635022,Vv=1,Gv=.15;function Wv(r){const e=r>>15&1,t=r>>10&31,n=r&1023,s=e===1?-1:1;return t===0?s*Math.pow(2,-14)*n/1024:t===31?n!==0?NaN:s*(1/0):s*Math.pow(2,t-15)*(1+n/1024)}function Xv(r){return(r-128)/128}function _s(r){switch(r){case 0:return 0;case 1:return 3;case 2:return 8;case 3:return 15;default:return console.error(`[SPZ: ERROR] Unsupported SH degree: ${r}`),0}}const qv=(function(){let r=[];const e=new vt,t=ve.OFFSET.X,n=ve.OFFSET.Y,s=ve.OFFSET.Z,i=ve.OFFSET.SCALE0,o=ve.OFFSET.SCALE1,l=ve.OFFSET.SCALE2,c=ve.OFFSET.ROTATION0,d=ve.OFFSET.ROTATION1,u=ve.OFFSET.ROTATION2,h=ve.OFFSET.ROTATION3,p=ve.OFFSET.FDC0,f=ve.OFFSET.FDC1,g=ve.OFFSET.FDC2,y=ve.OFFSET.OPACITY,x=[_s(0),_s(1),_s(2),_s(3)],m=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(v,S,b){b=Math.min(S,b);const _=ve.createSplat(b);v.scale[0]!==void 0?(_[i]=v.scale[0],_[o]=v.scale[1],_[l]=v.scale[2]):(_[i]=.01,_[o]=.01,_[l]=.01),v.color[0]!==void 0?(_[p]=v.color[0],_[f]=v.color[1],_[g]=v.color[2]):r[RED]!==void 0?(_[p]=r[RED]*255,_[f]=r[GREEN]*255,_[g]=r[BLUE]*255):(_[p]=0,_[f]=0,_[g]=0),v.alpha!==void 0&&(_[y]=v.alpha),_[p]=yt(Math.floor(_[p]),0,255),_[f]=yt(Math.floor(_[f]),0,255),_[g]=yt(Math.floor(_[g]),0,255),_[y]=yt(Math.floor(_[y]),0,255);let M=x[b],w=x[S];for(let T=0;T<3;++T)for(let C=0;C<15;++C){const A=m[T*15+C];C<M&&C<w&&(_[ve.OFFSET.FRC0+A]=v.sh[T*w+C])}return e.set(v.rotation[3],v.rotation[0],v.rotation[1],v.rotation[2]),e.normalize(),_[c]=e.x,_[d]=e.y,_[u]=e.z,_[h]=e.w,_[t]=v.position[0],_[n]=v.position[1],_[s]=v.position[2],_}})();function Qv(r,e,t,n){return!(r.positions.length!==e*3*(n?2:3)||r.scales.length!==e*3||r.rotations.length!==e*3||r.alphas.length!==e||r.colors.length!==e*3||r.sh.length!==e*t*3)}function zc(r,e,t,n,s){e=Math.min(e,r.shDegree);const i=r.numPoints,o=_s(r.shDegree),l=r.positions.length===i*3*2;if(!Qv(r,i,o,l))return null;const c={position:[],scale:[],rotation:[],alpha:void 0,color:[],sh:[]};let d;l&&(d=new Uint16Array(r.positions.buffer,r.positions.byteOffset,i*3));const u=1/(1<<r.fractionalBits),h=_s(r.shDegree),p=.28209479177387814;for(let f=0;f<i;f++){if(l)for(let v=0;v<3;v++)c.position[v]=Wv(d[f*3+v]);else for(let v=0;v<3;v++){const S=f*9+v*3;let b=r.positions[S];b|=r.positions[S+1]<<8,b|=r.positions[S+2]<<16,b|=b&8388608?4278190080:0,c.position[v]=b*u}for(let v=0;v<3;v++)c.scale[v]=Math.exp(r.scales[f*3+v]/16-10);const g=r.rotations.subarray(f*3,f*3+3),y=[g[0]/127.5-1,g[1]/127.5-1,g[2]/127.5-1];c.rotation[0]=y[0],c.rotation[1]=y[1],c.rotation[2]=y[2];const x=y[0]*y[0]+y[1]*y[1]+y[2]*y[2];c.rotation[3]=Math.sqrt(Math.max(0,1-x)),c.alpha=Math.floor(r.alphas[f]);for(let v=0;v<3;v++)c.color[v]=Math.floor(((r.colors[f*3+v]/255-.5)/Gv*p+.5)*255);for(let v=0;v<3;v++)for(let S=0;S<h;S++)c.sh[v*h+S]=Xv(r.sh[h*3*f+S*3+v]);const m=qv(c,r.shDegree,e);if(t){const v=Ie.CompressionLevels[0].SphericalHarmonicsDegrees[e].BytesPerSplat,S=f*v+s;Ie.writeSplatDataToSectionBuffer(m,n,S,0,e)}else n.addSplat(m)}}const Yv=16,Kv=1e7;function $v(r){const e=new DataView(r);let t=0;const n={magic:e.getUint32(t,!0),version:e.getUint32(t+4,!0),numPoints:e.getUint32(t+8,!0),shDegree:e.getUint8(t+12),fractionalBits:e.getUint8(t+13),flags:e.getUint8(t+14),reserved:e.getUint8(t+15)};if(t+=Yv,n.magic!==Hv)return console.error("[SPZ ERROR] deserializePackedGaussians: header not found"),null;if(n.version<1||n.version>2)return console.error(`[SPZ ERROR] deserializePackedGaussians: version not supported: ${n.version}`),null;if(n.numPoints>Kv)return console.error(`[SPZ ERROR] deserializePackedGaussians: Too many points: ${n.numPoints}`),null;if(n.shDegree>3)return console.error(`[SPZ ERROR] deserializePackedGaussians: Unsupported SH degree: ${n.shDegree}`),null;const s=n.numPoints,i=_s(n.shDegree),o=n.version===1,l={numPoints:s,shDegree:n.shDegree,fractionalBits:n.fractionalBits,antialiased:(n.flags&Vv)!==0,positions:new Uint8Array(s*3*(o?2:3)),scales:new Uint8Array(s*3),rotations:new Uint8Array(s*3),alphas:new Uint8Array(s),colors:new Uint8Array(s*3),sh:new Uint8Array(s*i*3)};try{const c=new Uint8Array(r);let d=l.positions.length,u=t;if(l.positions.set(c.slice(u,u+d)),u+=d,l.alphas.set(c.slice(u,u+l.alphas.length)),u+=l.alphas.length,l.colors.set(c.slice(u,u+l.colors.length)),u+=l.colors.length,l.scales.set(c.slice(u,u+l.scales.length)),u+=l.scales.length,l.rotations.set(c.slice(u,u+l.rotations.length)),u+=l.rotations.length,l.sh.set(c.slice(u,u+l.sh.length)),u+l.sh.length!==r.byteLength)return console.error("[SPZ ERROR] deserializePackedGaussians: incorrect buffer size"),null}catch(c){return console.error("[SPZ ERROR] deserializePackedGaussians: read error",c),null}return l}async function Zv(r){try{const e=await jv(r);return $v(e.buffer)}catch(e){return console.error("[SPZ ERROR] loadSpzPacked: decompression error",e),null}}class na{static loadFromURL(e,t,n,s,i=!0,o=0,l,c,d,u,h){return t&&t(0,"0%",Tt.Downloading),Jr(e,t,!0,l).then(p=>(t&&t(0,"0%",Tt.Processing),na.loadFromFileData(p,n,s,i,o,c,d,u,h)))}static async loadFromFileData(e,t,n,s,i=0,o,l,c,d){await en();const u=await Zv(e);i=Math.min(u.shDegree,i);const h=new ve(i);if(s)return zc(u,i,!1,h,0),gi.getStandardGenerator(t,n,o,l,c,d).generateFromUncompressedSplatArray(h);{const{splatBuffer:p,splatBufferDataOffsetBytes:f}=Ie.preallocateUncompressed(u.numPoints,i);return zc(u,i,!0,p.bufferData,f),p}}}const lt=class lt{static parseToUncompressedSplatBufferSection(e,t,n,s,i,o){const l=Ie.CompressionLevels[0].BytesPerCenter,c=Ie.CompressionLevels[0].BytesPerScale,d=Ie.CompressionLevels[0].BytesPerRotation,u=Ie.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let h=e;h<=t;h++){const p=h*lt.RowSizeBytes+s,f=new Float32Array(n,p,3),g=new Float32Array(n,p+lt.CenterSizeBytes,3),y=new Uint8Array(n,p+lt.CenterSizeBytes+lt.ScaleSizeBytes,4),x=new Uint8Array(n,p+lt.CenterSizeBytes+lt.ScaleSizeBytes+lt.RotationSizeBytes,4),m=new vt((x[1]-128)/128,(x[2]-128)/128,(x[3]-128)/128,(x[0]-128)/128);m.normalize();const v=h*u+o,S=new Float32Array(i,v,3),b=new Float32Array(i,v+l,3),_=new Float32Array(i,v+l+c,4),M=new Uint8Array(i,v+l+c+d,4);S[0]=f[0],S[1]=f[1],S[2]=f[2],b[0]=g[0],b[1]=g[1],b[2]=g[2],_[0]=m.w,_[1]=m.x,_[2]=m.y,_[3]=m.z,M[0]=y[0],M[1]=y[1],M[2]=y[2],M[3]=y[3]}}static parseToUncompressedSplatArraySection(e,t,n,s,i){for(let o=e;o<=t;o++){const l=o*lt.RowSizeBytes+s,c=new Float32Array(n,l,3),d=new Float32Array(n,l+lt.CenterSizeBytes,3),u=new Uint8Array(n,l+lt.CenterSizeBytes+lt.ScaleSizeBytes,4),h=new Uint8Array(n,l+lt.CenterSizeBytes+lt.ScaleSizeBytes+lt.RotationSizeBytes,4),p=new vt((h[1]-128)/128,(h[2]-128)/128,(h[3]-128)/128,(h[0]-128)/128);p.normalize(),i.addSplatFromComonents(c[0],c[1],c[2],d[0],d[1],d[2],p.w,p.x,p.y,p.z,u[0],u[1],u[2],u[3])}}static parseStandardSplatToUncompressedSplatArray(e){const t=e.byteLength/lt.RowSizeBytes,n=new ve;for(let s=0;s<t;s++){const i=s*lt.RowSizeBytes,o=new Float32Array(e,i,3),l=new Float32Array(e,i+lt.CenterSizeBytes,3),c=new Uint8Array(e,i+lt.CenterSizeBytes+lt.ScaleSizeBytes,4),d=new Uint8Array(e,i+lt.CenterSizeBytes+lt.ScaleSizeBytes+lt.ColorSizeBytes,4),u=new vt((d[1]-128)/128,(d[2]-128)/128,(d[3]-128)/128,(d[0]-128)/128);u.normalize(),n.addSplatFromComonents(o[0],o[1],o[2],l[0],l[1],l[2],u.w,u.x,u.y,u.z,c[0],c[1],c[2],c[3])}return n}};fe(lt,"RowSizeBytes",32),fe(lt,"CenterSizeBytes",12),fe(lt,"ScaleSizeBytes",12),fe(lt,"RotationSizeBytes",4),fe(lt,"ColorSizeBytes",4);let ts=lt;function Hc(r,e,t,n,s,i,o,l){return e?gi.getStandardGenerator(t,n,s,i,o,l).generateFromUncompressedSplatArray(r):Ie.generateFromUncompressedSplatArrays([r],t,0,new k)}class sa{static loadFromURL(e,t,n,s,i,o,l=!0,c,d,u,h,p){let f=n?gt.ProgressiveToSplatBuffer:gt.ProgressiveToSplatArray;l&&(f=gt.ProgressiveToSplatArray);const g=Ie.HeaderSizeBytes+Ie.SectionHeaderSizeBytes,y=nt.ProgressiveLoadSectionSize,x=1;let m,v,S,b=0,_=0,M;const w=sl();let T=0,C=0,A=[];const R=(D,I,U,j)=>{const P=D>=100;if(U&&A.push(U),f===gt.DownloadBeforeProcessing){P&&w.resolve(A);return}if(!j){if(n)throw new Ur("Cannon directly load .splat because no file size info is available.");f=gt.DownloadBeforeProcessing;return}if(!m){b=j/ts.RowSizeBytes,m=new ArrayBuffer(j);const X=Ie.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,z=g+X*b;f===gt.ProgressiveToSplatBuffer?(v=new ArrayBuffer(z),Ie.writeHeaderToBuffer({versionMajor:Ie.CurrentMajorVersion,versionMinor:Ie.CurrentMinorVersion,maxSectionCount:x,sectionCount:x,maxSplatCount:b,splatCount:_,compressionLevel:0,sceneCenter:new k},v)):M=new ve(0)}if(U){new Uint8Array(m,C,U.byteLength).set(new Uint8Array(U)),C+=U.byteLength;const X=C-T;if(X>y||P){const Q=(P?X:y)/ts.RowSizeBytes,ie=_+Q;f===gt.ProgressiveToSplatBuffer?ts.parseToUncompressedSplatBufferSection(_,ie-1,m,0,v,g):ts.parseToUncompressedSplatArraySection(_,ie-1,m,0,M),_=ie,f===gt.ProgressiveToSplatBuffer&&(S||(Ie.writeSectionHeaderToBuffer({maxSplatCount:b,splatCount:_,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,v,Ie.HeaderSizeBytes),S=new Ie(v,!1)),S.updateLoadedCounts(1,_),s&&s(S,P)),T+=y}}P&&(f===gt.ProgressiveToSplatBuffer?w.resolve(S):w.resolve(M)),t&&t(D,I,Tt.Downloading)};return t&&t(0,"0%",Tt.Downloading),Jr(e,R,!1,c).then(()=>(t&&t(0,"0%",Tt.Processing),w.promise.then(D=>(t&&t(100,"100%",Tt.Done),f===gt.DownloadBeforeProcessing?new Blob(A).arrayBuffer().then(I=>sa.loadFromFileData(I,i,o,l,d,u,h,p)):f===gt.ProgressiveToSplatBuffer?D:en(()=>Hc(D,l,i,o,d,u,h,p))))))}static loadFromFileData(e,t,n,s,i,o,l,c){return en(()=>{const d=ts.parseStandardSplatToUncompressedSplatArray(e);return Hc(d,s,t,n,i,o,l,c)})}}const Zs=class Zs{static checkVersion(e){const t=Ie.CurrentMajorVersion,n=Ie.CurrentMinorVersion,s=Ie.parseHeader(e);if(s.versionMajor===t&&s.versionMinor>=n||s.versionMajor>t)return!0;throw new Error(`KSplat version not supported: v${s.versionMajor}.${s.versionMinor}. Minimum required: v${t}.${n}`)}static loadFromURL(e,t,n,s,i){let o,l,c,d,u=!1,h=!1,p,f=[],g=!1,y=!1,x=0,m=0,v=0,S=!1,b=!1,_=!1,M=[];const w=sl(),T=()=>{!u&&!h&&x>=Ie.HeaderSizeBytes&&(h=!0,new Blob(M).arrayBuffer().then(j=>{c=new ArrayBuffer(Ie.HeaderSizeBytes),new Uint8Array(c).set(new Uint8Array(j,0,Ie.HeaderSizeBytes)),Zs.checkVersion(c),h=!1,u=!0,d=Ie.parseHeader(c),window.setTimeout(()=>{R()},1)}))};let C=0;const A=()=>{C===0&&(C++,window.setTimeout(()=>{C--,D()},1))},R=()=>{const U=()=>{y=!0,new Blob(M).arrayBuffer().then(P=>{y=!1,g=!0,p=new ArrayBuffer(d.maxSectionCount*Ie.SectionHeaderSizeBytes),new Uint8Array(p).set(new Uint8Array(P,Ie.HeaderSizeBytes,d.maxSectionCount*Ie.SectionHeaderSizeBytes)),f=Ie.parseSectionHeaders(d,p,0,!1);let X=0;for(let Q=0;Q<d.maxSectionCount;Q++)X+=f[Q].storageSizeBytes;const z=Ie.HeaderSizeBytes+d.maxSectionCount*Ie.SectionHeaderSizeBytes+X;if(!o){o=new ArrayBuffer(z);let Q=0;for(let ie=0;ie<M.length;ie++){const q=M[ie];new Uint8Array(o,Q,q.byteLength).set(new Uint8Array(q)),Q+=q.byteLength}}v=Ie.HeaderSizeBytes+Ie.SectionHeaderSizeBytes*d.maxSectionCount;for(let Q=0;Q<=f.length&&Q<d.maxSectionCount;Q++)v+=f[Q].storageSizeBytes;A()})};!y&&!g&&u&&x>=Ie.HeaderSizeBytes+Ie.SectionHeaderSizeBytes*d.maxSectionCount&&U()},D=()=>{if(_)return;_=!0;const U=()=>{if(_=!1,g){if(b)return;if(S=x>=v,x-m>nt.ProgressiveLoadSectionSize||S){m+=nt.ProgressiveLoadSectionSize,b=m>=v,l||(l=new Ie(o,!1));const P=Ie.HeaderSizeBytes+Ie.SectionHeaderSizeBytes*d.maxSectionCount;let X=0,z=0,Q=0;for(let pe=0;pe<d.maxSectionCount;pe++){const Te=f[pe],Se=X+Te.partiallyFilledBucketCount*4+Te.bucketStorageSizeBytes*Te.bucketCount,Fe=P+Se;if(m>=Fe){z++;const K=m-Fe,we=Ie.CompressionLevels[d.compressionLevel].SphericalHarmonicsDegrees[Te.sphericalHarmonicsDegree].BytesPerSplat;let xe=Math.floor(K/we);xe=Math.min(xe,Te.maxSplatCount),Q+=xe,l.updateLoadedCounts(z,Q),l.updateSectionLoadedCounts(pe,xe)}else break;X+=Te.storageSizeBytes}s(l,b);const ie=m/v*100,q=ie.toFixed(2)+"%";t&&t(ie,q,Tt.Downloading),b?w.resolve(l):D()}}};window.setTimeout(U,nt.ProgressiveLoadSectionDelayDuration)};return Jr(e,(U,j,P)=>{P&&(M.push(P),o&&new Uint8Array(o,x,P.byteLength).set(new Uint8Array(P)),x+=P.byteLength),n?(T(),R(),D()):t&&t(U,j,Tt.Downloading)},!n,i).then(U=>(t&&t(0,"0%",Tt.Processing),(n?w.promise:Zs.loadFromFileData(U)).then(P=>(t&&t(100,"100%",Tt.Done),P))))}static loadFromFileData(e){return en(()=>(Zs.checkVersion(e),new Ie(e)))}};fe(Zs,"downloadFile",(function(){let e;return function(t,n){const s=new Blob([t.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=n,e.href=URL.createObjectURL(s),e.click()}})());let Or=Zs;const jt={Splat:0,KSplat:1,Ply:2,Spz:3},jo=r=>r.endsWith(".ply")?jt.Ply:r.endsWith(".splat")?jt.Splat:r.endsWith(".ksplat")?jt.KSplat:r.endsWith(".spz")?jt.Spz:null;var Jv=Object.freeze({__proto__:null,sceneFormatFromPath:jo});const Vc={type:"change"},Ha={type:"start"},Gc={type:"end"},_r=new Fd,Wc=new Jn,eb=Math.cos(70*Id.DEG2RAD);class Ci extends Ns{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!1,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:Ps.ROTATE,TWO:Ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",E),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,this.clearDampedRotation(),this.clearDampedPan(),n.object.updateProjectionMatrix(),n.dispatchEvent(Vc),n.update(),i=s.NONE},this.clearDampedRotation=function(){c.theta=0,c.phi=0},this.clearDampedPan=function(){u.set(0,0,0)},this.update=(function(){const O=new k,B=new vt().setFromUnitVectors(e.up,new k(0,1,0)),se=B.clone().invert(),ge=new k,Ae=new vt,ye=new k,We=2*Math.PI;return function(){B.setFromUnitVectors(e.up,new k(0,1,0)),se.copy(B).invert();const ce=n.object.position;O.copy(ce).sub(n.target),O.applyQuaternion(B),l.setFromVector3(O),n.autoRotate&&i===s.NONE&&R(C()),n.enableDamping?(l.theta+=c.theta*n.dampingFactor,l.phi+=c.phi*n.dampingFactor):(l.theta+=c.theta,l.phi+=c.phi);let ue=n.minAzimuthAngle,Ce=n.maxAzimuthAngle;isFinite(ue)&&isFinite(Ce)&&(ue<-Math.PI?ue+=We:ue>Math.PI&&(ue-=We),Ce<-Math.PI?Ce+=We:Ce>Math.PI&&(Ce-=We),ue<=Ce?l.theta=Math.max(ue,Math.min(Ce,l.theta)):l.theta=l.theta>(ue+Ce)/2?Math.max(ue,l.theta):Math.min(Ce,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&M||n.object.isOrthographicCamera?l.radius=Q(l.radius):l.radius=Q(l.radius*d),O.setFromSpherical(l),O.applyQuaternion(se),ce.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let le=!1;if(n.zoomToCursor&&M){let ae=null;if(n.object.isPerspectiveCamera){const Ne=O.length();ae=Q(Ne*d);const qe=Ne-ae;n.object.position.addScaledVector(b,qe),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ne=new k(_.x,_.y,0);Ne.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),le=!0;const qe=new k(_.x,_.y,0);qe.unproject(n.object),n.object.position.sub(qe).add(Ne),n.object.updateMatrixWorld(),ae=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ae!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ae).add(n.object.position):(_r.origin.copy(n.object.position),_r.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(_r.direction))<eb?e.lookAt(n.target):(Wc.setFromNormalAndCoplanarPoint(n.object.up,n.target),_r.intersectPlane(Wc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),le=!0);return d=1,M=!1,le||ge.distanceToSquared(n.object.position)>o||8*(1-Ae.dot(n.object.quaternion))>o||ye.distanceToSquared(n.target)>0?(n.dispatchEvent(Vc),ge.copy(n.object.position),Ae.copy(n.object.quaternion),ye.copy(n.target),le=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",oe),n.domElement.removeEventListener("pointerdown",$e),n.domElement.removeEventListener("pointercancel",Ve),n.domElement.removeEventListener("wheel",F),n.domElement.removeEventListener("pointermove",be),n.domElement.removeEventListener("pointerup",Ve),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",E),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let i=s.NONE;const o=1e-6,l=new ec,c=new ec;let d=1;const u=new k,h=new Be,p=new Be,f=new Be,g=new Be,y=new Be,x=new Be,m=new Be,v=new Be,S=new Be,b=new k,_=new Be;let M=!1;const w=[],T={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function R(O){c.theta-=O}function D(O){c.phi-=O}const I=(function(){const O=new k;return function(se,ge){O.setFromMatrixColumn(ge,0),O.multiplyScalar(-se),u.add(O)}})(),U=(function(){const O=new k;return function(se,ge){n.screenSpacePanning===!0?O.setFromMatrixColumn(ge,1):(O.setFromMatrixColumn(ge,0),O.crossVectors(n.object.up,O)),O.multiplyScalar(se),u.add(O)}})(),j=(function(){const O=new k;return function(se,ge){const Ae=n.domElement;if(n.object.isPerspectiveCamera){const ye=n.object.position;O.copy(ye).sub(n.target);let We=O.length();We*=Math.tan(n.object.fov/2*Math.PI/180),I(2*se*We/Ae.clientHeight,n.object.matrix),U(2*ge*We/Ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(se*(n.object.right-n.object.left)/n.object.zoom/Ae.clientWidth,n.object.matrix),U(ge*(n.object.top-n.object.bottom)/n.object.zoom/Ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function P(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(O){if(!n.zoomToCursor)return;M=!0;const B=n.domElement.getBoundingClientRect(),se=O.clientX-B.left,ge=O.clientY-B.top,Ae=B.width,ye=B.height;_.x=se/Ae*2-1,_.y=-(ge/ye)*2+1,b.set(_.x,_.y,1).unproject(e).sub(e.position).normalize()}function Q(O){return Math.max(n.minDistance,Math.min(n.maxDistance,O))}function ie(O){h.set(O.clientX,O.clientY)}function q(O){z(O),m.set(O.clientX,O.clientY)}function pe(O){g.set(O.clientX,O.clientY)}function Te(O){p.set(O.clientX,O.clientY),f.subVectors(p,h).multiplyScalar(n.rotateSpeed);const B=n.domElement;R(2*Math.PI*f.x/B.clientHeight),D(2*Math.PI*f.y/B.clientHeight),h.copy(p),n.update()}function Se(O){v.set(O.clientX,O.clientY),S.subVectors(v,m),S.y>0?P(A()):S.y<0&&X(A()),m.copy(v),n.update()}function Fe(O){y.set(O.clientX,O.clientY),x.subVectors(y,g).multiplyScalar(n.panSpeed),j(x.x,x.y),g.copy(y),n.update()}function K(O){z(O),O.deltaY<0?X(A()):O.deltaY>0&&P(A()),n.update()}function te(O){let B=!1;switch(O.code){case n.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(0,n.keyPanSpeed),B=!0;break;case n.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(0,-n.keyPanSpeed),B=!0;break;case n.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(n.keyPanSpeed,0),B=!0;break;case n.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(-n.keyPanSpeed,0),B=!0;break}B&&(O.preventDefault(),n.update())}function me(){if(w.length===1)h.set(w[0].pageX,w[0].pageY);else{const O=.5*(w[0].pageX+w[1].pageX),B=.5*(w[0].pageY+w[1].pageY);h.set(O,B)}}function we(){if(w.length===1)g.set(w[0].pageX,w[0].pageY);else{const O=.5*(w[0].pageX+w[1].pageX),B=.5*(w[0].pageY+w[1].pageY);g.set(O,B)}}function xe(){const O=w[0].pageX-w[1].pageX,B=w[0].pageY-w[1].pageY,se=Math.sqrt(O*O+B*B);m.set(0,se)}function je(){n.enableZoom&&xe(),n.enablePan&&we()}function Ze(){n.enableZoom&&xe(),n.enableRotate&&me()}function L(O){if(w.length==1)p.set(O.pageX,O.pageY);else{const se=ke(O),ge=.5*(O.pageX+se.x),Ae=.5*(O.pageY+se.y);p.set(ge,Ae)}f.subVectors(p,h).multiplyScalar(n.rotateSpeed);const B=n.domElement;R(2*Math.PI*f.x/B.clientHeight),D(2*Math.PI*f.y/B.clientHeight),h.copy(p)}function He(O){if(w.length===1)y.set(O.pageX,O.pageY);else{const B=ke(O),se=.5*(O.pageX+B.x),ge=.5*(O.pageY+B.y);y.set(se,ge)}x.subVectors(y,g).multiplyScalar(n.panSpeed),j(x.x,x.y),g.copy(y)}function Re(O){const B=ke(O),se=O.pageX-B.x,ge=O.pageY-B.y,Ae=Math.sqrt(se*se+ge*ge);v.set(0,Ae),S.set(0,Math.pow(v.y/m.y,n.zoomSpeed)),P(S.y),m.copy(v)}function Le(O){n.enableZoom&&Re(O),n.enablePan&&He(O)}function Me(O){n.enableZoom&&Re(O),n.enableRotate&&L(O)}function $e(O){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",be),n.domElement.addEventListener("pointerup",Ve)),ne(O),O.pointerType==="touch"?Y(O):St(O))}function be(O){n.enabled!==!1&&(O.pointerType==="touch"?re(O):ft(O))}function Ve(O){Oe(O),w.length===0&&(n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",be),n.domElement.removeEventListener("pointerup",Ve)),n.dispatchEvent(Gc),i=s.NONE}function St(O){let B;switch(O.button){case 0:B=n.mouseButtons.LEFT;break;case 1:B=n.mouseButtons.MIDDLE;break;case 2:B=n.mouseButtons.RIGHT;break;default:B=-1}switch(B){case Ds.DOLLY:if(n.enableZoom===!1)return;q(O),i=s.DOLLY;break;case Ds.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;pe(O),i=s.PAN}else{if(n.enableRotate===!1)return;ie(O),i=s.ROTATE}break;case Ds.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;ie(O),i=s.ROTATE}else{if(n.enablePan===!1)return;pe(O),i=s.PAN}break;default:i=s.NONE}i!==s.NONE&&n.dispatchEvent(Ha)}function ft(O){switch(i){case s.ROTATE:if(n.enableRotate===!1)return;Te(O);break;case s.DOLLY:if(n.enableZoom===!1)return;Se(O);break;case s.PAN:if(n.enablePan===!1)return;Fe(O);break}}function F(O){n.enabled===!1||n.enableZoom===!1||i!==s.NONE||(O.preventDefault(),n.dispatchEvent(Ha),K(O),n.dispatchEvent(Gc))}function E(O){n.enabled===!1||n.enablePan===!1||te(O)}function Y(O){switch(he(O),w.length){case 1:switch(n.touches.ONE){case Ps.ROTATE:if(n.enableRotate===!1)return;me(),i=s.TOUCH_ROTATE;break;case Ps.PAN:if(n.enablePan===!1)return;we(),i=s.TOUCH_PAN;break;default:i=s.NONE}break;case 2:switch(n.touches.TWO){case Ps.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;je(),i=s.TOUCH_DOLLY_PAN;break;case Ps.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ze(),i=s.TOUCH_DOLLY_ROTATE;break;default:i=s.NONE}break;default:i=s.NONE}i!==s.NONE&&n.dispatchEvent(Ha)}function re(O){switch(he(O),i){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;L(O),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;He(O),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Le(O),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Me(O),n.update();break;default:i=s.NONE}}function oe(O){n.enabled!==!1&&O.preventDefault()}function ne(O){w.push(O)}function Oe(O){delete T[O.pointerId];for(let B=0;B<w.length;B++)if(w[B].pointerId==O.pointerId){w.splice(B,1);return}}function he(O){let B=T[O.pointerId];B===void 0&&(B=new Be,T[O.pointerId]=B),B.set(O.pageX,O.pageY)}function ke(O){const B=O.pointerId===w[0].pointerId?w[1]:w[0];return T[B.pointerId]}n.domElement.addEventListener("contextmenu",oe),n.domElement.addEventListener("pointerdown",$e),n.domElement.addEventListener("pointercancel",Ve),n.domElement.addEventListener("wheel",F,{passive:!1}),this.update()}}const tb=(r,e,t,n,s)=>{const i=performance.now();let o=r.style.display==="none"?0:parseFloat(r.style.opacity);isNaN(o)&&(o=1);const l=window.setInterval(()=>{const d=performance.now()-i;let u=Math.min(d/n,1);u>.999&&(u=1);let h;e?(h=(1-u)*o,h<1e-4&&(h=0)):h=(1-o)*u+o,h>0?(r.style.display=t,r.style.opacity=h):r.style.display="none",u>=1&&(s&&s(),window.clearInterval(l))},16);return l},nb=500,Gr=class Gr{constructor(e,t){this.taskIDGen=0,this.elementID=Gr.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=t||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);const n=document.createElement("style");n.innerHTML=`

            .spinnerOuterContainer${this.elementID} {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .messageContainer${this.elementID} {
                height: 20px;
                font-family: arial;
                font-size: 12pt;
                color: #ffffff;
                text-align: center;
                vertical-align: middle;
            }

            .spinner${this.elementID} {
                padding: 15px;
                background: #07e8d6;
                z-index:99999;
            
                aspect-ratio: 1;
                border-radius: 50%;
                --_m: 
                    conic-gradient(#0000,#000),
                    linear-gradient(#000 0 0) content-box;
                -webkit-mask: var(--_m);
                    mask: var(--_m);
                -webkit-mask-composite: source-out;
                    mask-composite: subtract;
                box-sizing: border-box;
                animation: load 1s linear infinite;
            }

            .spinnerContainerPrimary${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 10px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-80px, -80px);
                width: 180px;
                pointer-events: auto;
            }

            .spinnerPrimary${this.elementID} {
                width: 120px;
                margin-left: 30px;
            }

            .messageContainerPrimary${this.elementID} {
                padding-top: 15px;
            }

            .spinnerContainerMin${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                display: flex;
                flex-direction: left;
                pointer-events: auto;
                min-width: 250px;
            }

            .messageContainerMin${this.elementID} {
                margin-right: 15px;
            }

            .spinnerMin${this.elementID} {
                width: 50px;
                height: 50px;
                margin-left: 15px;
                margin-right: 25px;
            }

            .messageContainerMin${this.elementID} {
                padding-top: 15px;
            }
            
            @keyframes load {
                to{transform: rotate(1turn)}
            }

        `,this.spinnerContainerOuter.appendChild(n),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){const t={message:e,id:this.taskIDGen++};return this.tasks.push(t),this.update(),t.id}removeTask(e){let t=0;for(let n of this.tasks){if(n.id===e){this.tasks.splice(t,1);break}t++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,t){for(let n of this.tasks)if(n.id===e){n.message=t;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,t){const n=(s,i,o,l,c)=>{o?s.style.display=i?l:"none":this.fadeTransitions[c]=tb(s,!i,l,nb,()=>{this.fadeTransitions[c]=null})};n(this.spinnerContainerPrimary,!e,t,"block",0),n(this.spinnerContainerMin,e,t,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}};fe(Gr,"elementIDGen",0);let zo=Gr;class sb{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);const t=document.createElement("style");t.innerHTML=`

            .progressBarOuterContainer {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .progressBarBox {
                z-index:99999;
                padding: 7px 9px 5px 7px;
                background-color: rgba(190, 190, 190, 0.75);
                border: #555555 1px solid;
                border-radius: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 180px;
                height: 30px;
                pointer-events: auto;
            }

            .progressBarBackground {
                width: 100%;
                height: 25px;
                border-radius:10px;
                background-color: rgba(128, 128, 128, 0.75);
                border: #444444 1px solid;
                box-shadow: inset 0 0 10px #333333;
            }

            .progressBar {
                height: 25px;
                width: 0px;
                border-radius:10px;
                background-color: rgba(0, 200, 0, 0.75);
                box-shadow: inset 0 0 10px #003300;
            }

        `,this.progressBarContainerOuter.appendChild(t),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}}class ib{constructor(e){fe(this,"update",function(e,t,n,s,i,o,l,c,d,u,h,p,f,g){const y=`${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==y&&(this.infoCells.cameraPosition.innerHTML=y),n){const m=n,v=`${m.x.toFixed(5)}, ${m.y.toFixed(5)}, ${m.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==v&&(this.infoCells.cameraLookAt.innerHTML=v)}const x=`${s.x.toFixed(5)}, ${s.y.toFixed(5)}, ${s.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==x&&(this.infoCells.cameraUp.innerHTML=x),this.infoCells.orthographicCamera.innerHTML=i?"Orthographic":"Perspective",o){const m=o,v=`${m.x.toFixed(5)}, ${m.y.toFixed(5)}, ${m.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=v}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=l,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${d} splats out of ${c} (${u.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${h.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${p.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${f.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${g}`});this.container=e||document.body,this.infoCells={};const t=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const n=document.createElement("style");n.innerHTML=`

            .infoPanel {
                width: 430px;
                padding: 10px;
                background-color: rgba(50, 50, 50, 0.85);
                border: #555555 2px solid;
                color: #dddddd;
                border-radius: 10px;
                z-index: 9999;
                font-family: arial;
                font-size: 11pt;
                text-align: left;
                margin: 0;
                top: 10px;
                left:10px;
                position: absolute;
                pointer-events: auto;
            }

            .info-panel-cell {
                margin-bottom: 5px;
                padding-bottom: 2px;
            }

            .label-cell {
                font-weight: bold;
                font-size: 12pt;
                width: 140px;
            }

        `,this.infoPanelContainer.append(n),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";const s=document.createElement("div");s.style.display="table";for(let i of t){const o=document.createElement("div");o.style.display="table-row",o.className="info-panel-row";const l=document.createElement("div");l.style.display="table-cell",l.innerHTML=`${i[0]}: `,l.classList.add("info-panel-cell","label-cell");const c=document.createElement("div");c.style.display="table-cell",c.style.width="10px",c.innerHTML=" ",c.className="info-panel-cell";const d=document.createElement("div");d.style.display="table-cell",d.innerHTML="",d.className="info-panel-cell",this.infoCells[i[1]]=d,o.appendChild(l),o.appendChild(c),o.appendChild(d),s.appendChild(o)}this.infoPanel.appendChild(s),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}}const Xc=new k;class rb extends It{constructor(e=new k(0,0,1),t=new k(0,0,0),n=1,s=.1,i=16776960,o=n*.2,l=o*.2){super(),this.type="ArrowHelper";const c=new zi(s,s,n,32);c.translate(0,n/2,0);const d=new zi(0,l,o,32);d.translate(0,n,0),this.position.copy(t),this.line=new Mt(c,new as({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Mt(d,new as({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Xc.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Xc,t)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Ri{constructor(e){fe(this,"updateFocusMarker",(function(){const e=new k,t=new Ke,n=new k;return function(s,i,o){t.copy(i.matrixWorld).invert(),e.copy(s).applyMatrix4(t),e.normalize().multiplyScalar(10),e.applyMatrix4(i.matrixWorld),n.copy(i.position).sub(s);const l=n.length();this.focusMarker.position.copy(s),this.focusMarker.scale.set(l,l,l),this.focusMarker.material.uniforms.realFocusPosition.value.copy(s),this.focusMarker.material.uniforms.viewport.value.copy(o),this.focusMarker.material.uniformsNeedUpdate=!0}})());fe(this,"positionAndOrientControlPlane",(function(){const e=new vt,t=new k(0,1,0);return function(n,s){e.setFromUnitVectors(t,s),this.controlPlane.position.copy(n),this.controlPlane.quaternion.copy(e)}})());this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,t){this.destroySplatRendertarget(),this.splatRenderTarget=new rs(e,t,{format:Ht,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new Jo(e,t),this.splatRenderTarget.depthTexture.format=oi,this.splatRenderTarget.depthTexture.type=hn}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){const e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},t=new sn({vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4( position.xy, 0.0, 1.0 );    
                }
            `,fragmentShader:`
                #include <common>
                #include <packing>
                varying vec2 vUv;
                uniform sampler2D sourceColorTexture;
                uniform sampler2D sourceDepthTexture;
                void main() {
                    vec4 color = texture2D(sourceColorTexture, vUv);
                    float fragDepth = texture2D(sourceDepthTexture, vUv).x;
                    gl_FragDepth = fragDepth;
                    gl_FragColor = vec4(color.rgb, color.a * 2.0);
              }
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:vd,blendSrc:Fi,blendSrcAlpha:Fi,blendDst:ki,blendDstAlpha:ki});t.extensions.fragDepth=!0,this.renderTargetCopyQuad=new Mt(new di(2,2),t),this.renderTargetCopyCamera=new tl(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(Ks(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){const e=new el(.5,1.5,32),t=new as({color:16777215}),n=new Mt(e,t);n.rotation.set(0,0,Math.PI),n.position.set(0,1,0);const s=new Mt(e,t);s.position.set(0,-1,0);const i=new Mt(e,t);i.rotation.set(0,0,Math.PI/2),i.position.set(1,0,0);const o=new Mt(e,t);o.rotation.set(0,0,-Math.PI/2),o.position.set(-1,0,0),this.meshCursor=new It,this.meshCursor.add(n),this.meshCursor.add(s),this.meshCursor.add(i),this.meshCursor.add(o),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(Ks(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,t){this.meshCursor.position.copy(e),this.meshCursor.up.copy(t.up),this.meshCursor.lookAt(t.position)}setupFocusMarker(){if(!this.focusMarker){const e=new Hi(.5,32,32),t=Ri.buildFocusMarkerMaterial();t.depthTest=!1,t.depthWrite=!1,t.transparent=!0,this.focusMarker=new Mt(e,t)}}destroyFocusMarker(){this.focusMarker&&(Ks(this.focusMarker),this.focusMarker=null)}setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const e=new di(1,1);e.rotateX(-Math.PI/2);const t=new as({color:16777215});t.transparent=!0,t.opacity=.6,t.depthTest=!1,t.depthWrite=!1,t.side=un;const n=new Mt(e,t),s=new k(0,1,0);s.normalize();const i=new k(0,0,0),o=.5,l=.01,c=56576,d=new rb(s,i,o,l,c,.1,.03);this.controlPlane=new It,this.controlPlane.add(n),this.controlPlane.add(d)}}destroyControlPlane(){this.controlPlane&&(Ks(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(Ks(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){const t=new Hi(1,32,32),n=new It,s=(i,o)=>{let l=new Mt(t,Ri.buildDebugMaterial(i));l.renderOrder=e,n.add(l),l.position.fromArray(o)};return s(16711680,[-50,0,0]),s(16711680,[50,0,0]),s(65280,[0,0,-50]),s(65280,[0,0,50]),s(16755200,[5,0,5]),n}createSecondaryDebugMeshes(e){const t=new pi(3,3,3),n=new It;let s=12303291;const i=l=>{let c=new Mt(t,Ri.buildDebugMaterial(s));c.renderOrder=e,n.add(c),c.position.fromArray(l)};let o=10;return i([-o,0,-o]),i([-o,0,o]),i([o,0,-o]),i([o,0,o]),n}static buildDebugMaterial(e){const t=`
            #include <common>
            varying float ndcDepth;

            void main() {
                gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.xyz, 1.0);
                ndcDepth = gl_Position.z / gl_Position.w;
                gl_Position.x = gl_Position.x / gl_Position.w;
                gl_Position.y = gl_Position.y / gl_Position.w;
                gl_Position.z = 0.0;
                gl_Position.w = 1.0;
    
            }
        `,n=`
            #include <common>
            uniform vec3 color;
            varying float ndcDepth;
            void main() {
                gl_FragDepth = (ndcDepth + 1.0) / 2.0;
                gl_FragColor = vec4(color.rgb, 0.0);
            }
        `,s={color:{type:"v3",value:new rt(e)}},i=new sn({uniforms:s,vertexShader:t,fragmentShader:n,transparent:!1,depthTest:!0,depthWrite:!0,side:In});return i.extensions.fragDepth=!0,i}static buildFocusMarkerMaterial(e){const t=`
            #include <common>

            uniform vec2 viewport;
            uniform vec3 realFocusPosition;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                float radius = 0.01;

                vec4 viewPosition = modelViewMatrix * vec4(position.xyz, 1.0);
                vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);

                vec4 viewFocusPosition = modelViewMatrix * vec4(realFocusPosition, 1.0);

                ndcPosition = projectionMatrix * viewPosition;
                ndcPosition = ndcPosition * vec4(1.0 / ndcPosition.w);
                ndcCenter = projectionMatrix * viewCenter;
                ndcCenter = ndcCenter * vec4(1.0 / ndcCenter.w);

                ndcFocusPosition = projectionMatrix * viewFocusPosition;
                ndcFocusPosition = ndcFocusPosition * vec4(1.0 / ndcFocusPosition.w);

                gl_Position = projectionMatrix * viewPosition;

            }
        `,n=`
            #include <common>
            uniform vec3 color;
            uniform vec2 viewport;
            uniform float opacity;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                vec2 screenPosition = vec2(ndcPosition) * viewport;
                vec2 screenCenter = vec2(ndcCenter) * viewport;

                vec2 screenVec = screenPosition - screenCenter;

                float projectedRadius = length(screenVec);

                float lineWidth = 0.0005 * viewport.y;
                float aaRange = 0.0025 * viewport.y;
                float radius = 0.06 * viewport.y;
                float radDiff = abs(projectedRadius - radius) - lineWidth;
                float alpha = 1.0 - clamp(radDiff / 5.0, 0.0, 1.0); 

                gl_FragColor = vec4(color.rgb, alpha * opacity);
            }
        `,s={color:{type:"v3",value:new rt(e)},realFocusPosition:{type:"v3",value:new k},viewport:{type:"v2",value:new Be},opacity:{value:0}};return new sn({uniforms:s,vertexShader:t,fragmentShader:n,transparent:!0,depthTest:!1,depthWrite:!1,side:In})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}}const ab=new k(1,0,0),ob=new k(0,1,0),lb=new k(0,0,1);class Va{constructor(e=new k,t=new k){fe(this,"intersectBox",(function(){const e=new k,t=[],n=[],s=[];return function(i,o){if(n[0]=this.origin.x,n[1]=this.origin.y,n[2]=this.origin.z,s[0]=this.direction.x,s[1]=this.direction.y,s[2]=this.direction.z,this.boxContainsPoint(i,this.origin,1e-4))return o&&(o.origin.copy(this.origin),o.normal.set(0,0,0),o.distance=-1),!0;for(let l=0;l<3;l++){if(s[l]==0)continue;const c=l==0?ab:l==1?ob:lb,d=s[l]<0?i.max:i.min;let u=-Math.sign(s[l]);t[0]=l==0?d.x:l==1?d.y:d.z;let h=t[0]-n[l];if(h*u<0){const p=(l+1)%3,f=(l+2)%3;if(t[2]=s[p]/s[l]*h+n[p],t[1]=s[f]/s[l]*h+n[f],e.set(t[l],t[f],t[p]),this.boxContainsPoint(i,e,1e-4))return o&&(o.origin.copy(e),o.normal.copy(c).multiplyScalar(u),o.distance=e.sub(this.origin).length()),!0}}return!1}})());fe(this,"intersectSphere",(function(){const e=new k;return function(t,n,s){e.copy(t).sub(this.origin);const i=e.dot(this.direction),o=i*i,c=e.dot(e)-o,d=n*n;if(c>d)return!1;const u=Math.sqrt(d-c),h=i-u,p=i+u;if(p<0)return!1;let f=h<0?p:h;return s&&(s.origin.copy(this.origin).addScaledVector(this.direction,f),s.normal.copy(s.origin).sub(t).normalize(),s.distance=f),!0}})());this.origin=new k,this.direction=new k,this.setParameters(e,t)}setParameters(e,t){this.origin.copy(e),this.direction.copy(t).normalize()}boxContainsPoint(e,t,n){return!(t.x<e.min.x-n||t.x>e.max.x+n||t.y<e.min.y-n||t.y>e.max.y+n||t.z<e.min.z-n||t.z>e.max.z+n)}}class fl{constructor(){this.origin=new k,this.normal=new k,this.distance=0,this.splatIndex=0}set(e,t,n,s){this.origin.copy(e),this.normal.copy(t),this.distance=n,this.splatIndex=s}clone(){const e=new fl;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}}const wn={ThreeD:0,TwoD:1};class cb{constructor(e,t,n=!1){fe(this,"setFromCameraAndScreenPosition",(function(){const e=new Be;return function(t,n,s){if(e.x=n.x/s.x*2-1,e.y=(s.y-n.y)/s.y*2-1,t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}})());fe(this,"intersectSplatMesh",(function(){const e=new Ke,t=new Ke,n=new Ke,s=new Va,i=new k;return function(o,l=[]){const c=o.getSplatTree();if(c){for(let d=0;d<c.subTrees.length;d++){const u=c.subTrees[d];t.copy(o.matrixWorld),o.dynamicMode&&(o.getSceneTransform(d,n),t.multiply(n)),e.copy(t).invert(),s.origin.copy(this.ray.origin).applyMatrix4(e),s.direction.copy(this.ray.origin).add(this.ray.direction),s.direction.applyMatrix4(e).sub(s.origin).normalize();const h=[];u.rootNode&&this.castRayAtSplatTreeNode(s,c,u.rootNode,h),h.forEach(p=>{p.origin.applyMatrix4(t),p.normal.applyMatrix4(t).normalize(),p.distance=i.copy(p.origin).sub(this.ray.origin).length()}),l.push(...h)}return l.sort((d,u)=>d.distance>u.distance?1:-1),l}}})());fe(this,"castRayAtSplatTreeNode",(function(){const e=new bt,t=new k,n=new k,s=new vt,i=new fl,o=1e-7,l=new k(0,0,0),c=new Ke,d=new Ke,u=new Ke,h=new Ke,p=new Ke,f=new Va;return function(g,y,x,m=[]){if(g.intersectBox(x.boundingBox)){if(x.data&&x.data.indexes&&x.data.indexes.length>0)for(let v=0;v<x.data.indexes.length;v++){const S=x.data.indexes[v],b=y.splatMesh.getSceneIndexForSplat(S);if(y.splatMesh.getScene(b).visible&&(y.splatMesh.getSplatColor(S,e),y.splatMesh.getSplatCenter(S,t),y.splatMesh.getSplatScaleAndRotation(S,n,s),!(n.x<=o||n.y<=o||y.splatMesh.splatRenderMode===wn.ThreeD&&n.z<=o)))if(this.raycastAgainstTrueSplatEllipsoid){d.makeScale(n.x,n.y,n.z),u.makeRotationFromQuaternion(s);const M=Math.log10(e.w)*2;if(c.makeScale(M,M,M),p.copy(c).multiply(u).multiply(d),h.copy(p).invert(),f.origin.copy(g.origin).sub(t).applyMatrix4(h),f.direction.copy(g.origin).add(g.direction).sub(t),f.direction.applyMatrix4(h).sub(f.origin).normalize(),f.intersectSphere(l,1,i)){const w=i.clone();w.splatIndex=S,w.origin.applyMatrix4(p).add(t),m.push(w)}}else{let M=n.x+n.y,w=2;if(y.splatMesh.splatRenderMode===wn.ThreeD&&(M+=n.z,w=3),M=M/w,g.intersectSphere(t,M,i)){const T=i.clone();T.splatIndex=S,m.push(T)}}}if(x.children&&x.children.length>0)for(let v of x.children)this.castRayAtSplatTreeNode(g,y,v,m);return m}}})());this.ray=new Va(e,t),this.raycastAgainstTrueSplatEllipsoid=n}}class ni{static buildVertexShaderBase(e=!1,t=!1,n=0,s=""){let i=`
        precision highp float;
        #include <common>

        attribute uint splatIndex;
        uniform highp usampler2D centersColorsTexture;
        uniform highp sampler2D sphericalHarmonicsTexture;
        uniform highp sampler2D sphericalHarmonicsTextureR;
        uniform highp sampler2D sphericalHarmonicsTextureG;
        uniform highp sampler2D sphericalHarmonicsTextureB;

        uniform highp usampler2D sceneIndexesTexture;
        uniform vec2 sceneIndexesTextureSize;
        uniform int sceneCount;
    `;return t&&(i+=`
            uniform float sceneOpacity[${nt.MaxScenes}];
            uniform int sceneVisibility[${nt.MaxScenes}];
        `),e&&(i+=`
            uniform highp mat4 transforms[${nt.MaxScenes}];
        `),i+=`
        ${s}
        uniform vec2 focal;
        uniform float orthoZoom;
        uniform int orthographicMode;
        uniform int pointCloudModeEnabled;
        uniform float inverseFocalAdjustment;
        uniform vec2 viewport;
        uniform vec2 basisViewport;
        uniform vec2 centersColorsTextureSize;
        uniform int sphericalHarmonicsDegree;
        uniform vec2 sphericalHarmonicsTextureSize;
        uniform int sphericalHarmonics8BitMode;
        uniform int sphericalHarmonicsMultiTextureMode;
        uniform float visibleRegionRadius;
        uniform float visibleRegionFadeStartRadius;
        uniform float firstRenderTime;
        uniform float currentTime;
        uniform int fadeInComplete;
        uniform vec3 sceneCenter;
        uniform float splatScale;
        uniform float sphericalHarmonics8BitCompressionRangeMin[${nt.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${nt.MaxScenes}];

        varying vec4 vColor;
        varying vec2 vUv;
        varying vec2 vPosition;

        mat3 quaternionToRotationMatrix(float x, float y, float z, float w) {
            float s = 1.0 / sqrt(w * w + x * x + y * y + z * z);
        
            return mat3(
                1. - 2. * (y * y + z * z),
                2. * (x * y + w * z),
                2. * (x * z - w * y),
                2. * (x * y - w * z),
                1. - 2. * (x * x + z * z),
                2. * (y * z + w * x),
                2. * (x * z + w * y),
                2. * (y * z - w * x),
                1. - 2. * (x * x + y * y)
            );
        }

        const float sqrt8 = sqrt(8.0);
        const float minAlpha = 1.0 / 255.0;

        const vec4 encodeNorm4 = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
        const uvec4 mask4 = uvec4(uint(0x000000FF), uint(0x0000FF00), uint(0x00FF0000), uint(0xFF000000));
        const uvec4 shift4 = uvec4(0, 8, 16, 24);
        vec4 uintToRGBAVec (uint u) {
           uvec4 urgba = mask4 & u;
           urgba = urgba >> shift4;
           vec4 rgba = vec4(urgba) * encodeNorm4;
           return rgba;
        }

        vec2 getDataUV(in int stride, in int offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(splatIndex * uint(stride) + uint(offset)) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        vec2 getDataUVF(in uint sIndex, in float stride, in uint offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(uint(float(sIndex) * stride) + offset) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        const float SH_C1 = 0.4886025119029199f;
        const float[5] SH_C2 = float[](1.0925484, -1.0925484, 0.3153916, -1.0925484, 0.5462742);

        void main () {

            uint oddOffset = splatIndex & uint(0x00000001);
            uint doubleOddOffset = oddOffset * uint(2);
            bool isEven = oddOffset == uint(0);
            uint nearestEvenIndex = splatIndex - oddOffset;
            float fOddOffset = float(oddOffset);

            uvec4 sampledCenterColor = texture(centersColorsTexture, getDataUV(1, 0, centersColorsTextureSize));
            vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));

            uint sceneIndex = uint(0);
            if (sceneCount > 1) {
                sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
            }
            `,t&&(i+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `),e?i+=`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = viewMatrix * transform;
            `:i+="mat4 transformModelViewMatrix = modelViewMatrix;",i+=`
            float sh8BitCompressionRangeMinForScene = sphericalHarmonics8BitCompressionRangeMin[sceneIndex];
            float sh8BitCompressionRangeMaxForScene = sphericalHarmonics8BitCompressionRangeMax[sceneIndex];
            float sh8BitCompressionRangeForScene = sh8BitCompressionRangeMaxForScene - sh8BitCompressionRangeMinForScene;
            float sh8BitCompressionHalfRangeForScene = sh8BitCompressionRangeForScene / 2.0;
            vec3 vec8BitSHShift = vec3(sh8BitCompressionRangeMinForScene);

            vec4 viewCenter = transformModelViewMatrix * vec4(splatCenter, 1.0);

            vec4 clipCenter = projectionMatrix * viewCenter;

            float clip = 1.2 * clipCenter.w;
            if (clipCenter.z < -clip || clipCenter.x < -clip || clipCenter.x > clip || clipCenter.y < -clip || clipCenter.y > clip) {
                gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                return;
            }

            vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

            vPosition = position.xy;
            vColor = uintToRGBAVec(sampledCenterColor.r);
        `,n>=1&&(i+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `,e?i+=`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `:i+=`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `,i+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `,n>=2&&(i+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `),n===1?i+=`
                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        vec2 shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset, sphericalHarmonicsTextureSize);
                        vec4 sampledSH0123 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(1), sphericalHarmonicsTextureSize);
                        vec4 sampledSH4567 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(2), sphericalHarmonicsTextureSize);
                        vec4 sampledSH891011 = texture(sphericalHarmonicsTexture, shUV);
                        sh1 = vec3(sampledSH0123.rgb) * (1.0 - fOddOffset) + vec3(sampledSH0123.ba, sampledSH4567.r) * fOddOffset;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg) * (1.0 - fOddOffset) + vec3(sampledSH4567.gba) * fOddOffset;
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r) * (1.0 - fOddOffset) + vec3(sampledSH891011.rgb) * fOddOffset;
                    } else {
                        vec2 sampledSH01R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        sh1 = vec3(sampledSH01R.rg, sampledSH23R.r);
                        sh2 = vec3(sampledSH01G.rg, sampledSH23G.r);
                        sh3 = vec3(sampledSH01B.rg, sampledSH23B.r);
                    }
                `:n===2&&(i+=`
                    vec4 sampledSH0123;
                    vec4 sampledSH4567;
                    vec4 sampledSH891011;

                    vec4 sampledSH0123R;
                    vec4 sampledSH0123G;
                    vec4 sampledSH0123B;

                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        sampledSH0123 = texture(sphericalHarmonicsTexture, getDataUV(6, 0, sphericalHarmonicsTextureSize));
                        sampledSH4567 = texture(sphericalHarmonicsTexture, getDataUV(6, 1, sphericalHarmonicsTextureSize));
                        sampledSH891011 = texture(sphericalHarmonicsTexture, getDataUV(6, 2, sphericalHarmonicsTextureSize));
                        sh1 = sampledSH0123.rgb;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg);
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r);
                    } else {
                        sampledSH0123R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sh1 = vec3(sampledSH0123R.rgb);
                        sh2 = vec3(sampledSH0123G.rgb);
                        sh3 = vec3(sampledSH0123B.rgb);
                    }
                `),i+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `,n>=2&&(i+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `,n===2&&(i+=`
                        if (sphericalHarmonicsMultiTextureMode == 0) {
                            vec4 sampledSH12131415 = texture(sphericalHarmonicsTexture, getDataUV(6, 3, sphericalHarmonicsTextureSize));
                            vec4 sampledSH16171819 = texture(sphericalHarmonicsTexture, getDataUV(6, 4, sphericalHarmonicsTextureSize));
                            vec4 sampledSH20212223 = texture(sphericalHarmonicsTexture, getDataUV(6, 5, sphericalHarmonicsTextureSize));
                            sh4 = sampledSH891011.gba;
                            sh5 = sampledSH12131415.rgb;
                            sh6 = vec3(sampledSH12131415.a, sampledSH16171819.rg);
                            sh7 = vec3(sampledSH16171819.ba, sampledSH20212223.r);
                            sh8 = sampledSH20212223.gba;
                        } else {
                            vec4 sampledSH4567R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            sh4 = vec3(sampledSH0123R.a, sampledSH4567R.rg);
                            sh5 = vec3(sampledSH4567R.ba, sampledSH0123G.a);
                            sh6 = vec3(sampledSH4567G.rgb);
                            sh7 = vec3(sampledSH4567G.a, sampledSH0123B.a, sampledSH4567B.r);
                            sh8 = vec3(sampledSH4567B.gba);
                        }
                    `),i+=`
                        if (sphericalHarmonics8BitMode == 1) {
                            sh4 = sh4 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh5 = sh5 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh6 = sh6 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh7 = sh7 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh8 = sh8 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        }

                        vColor.rgb +=
                            (SH_C2[0] * xy) * sh4 +
                            (SH_C2[1] * yz) * sh5 +
                            (SH_C2[2] * (2.0 * zz - xx - yy)) * sh6 +
                            (SH_C2[3] * xz) * sh7 +
                            (SH_C2[4] * (xx - yy)) * sh8;
                    }
                `),i+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `),i}static getVertexShaderFadeIn(){return`
            if (fadeInComplete == 0) {
                float opacityAdjust = 1.0;
                float centerDist = length(splatCenter - sceneCenter);
                float renderTime = max(currentTime - firstRenderTime, 0.0);

                float fadeDistance = 0.75;
                float distanceLoadFadeInFactor = step(visibleRegionFadeStartRadius, centerDist);
                distanceLoadFadeInFactor = (1.0 - distanceLoadFadeInFactor) +
                                        (1.0 - clamp((centerDist - visibleRegionFadeStartRadius) / fadeDistance, 0.0, 1.0)) *
                                        distanceLoadFadeInFactor;
                opacityAdjust *= distanceLoadFadeInFactor;
                vColor.a *= opacityAdjust;
            }
        `}static getUniforms(e=!1,t=!1,n=0,s=1,i=!1){const o={sceneCenter:{type:"v3",value:new k},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new Be},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new Be},basisViewport:{type:"v2",value:new Be},debugColor:{type:"v3",value:new rt},centersColorsTextureSize:{type:"v2",value:new Be(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:n},sphericalHarmonicsTextureSize:{type:"v2",value:new Be(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:s},pointCloudModeEnabled:{type:"i",value:i?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new Be(1024,1024)},sceneCount:{type:"i",value:1}};for(let l=0;l<nt.MaxScenes;l++)o.sphericalHarmonics8BitCompressionRangeMin.value.push(-3/2),o.sphericalHarmonics8BitCompressionRangeMax.value.push(nt.SphericalHarmonics8BitCompressionRange/2);if(t){const l=[];for(let d=0;d<nt.MaxScenes;d++)l.push(1);o.sceneOpacity={type:"f",value:l};const c=[];for(let d=0;d<nt.MaxScenes;d++)c.push(1);o.sceneVisibility={type:"i",value:c}}if(e){const l=[];for(let c=0;c<nt.MaxScenes;c++)l.push(new Ke);o.transforms={type:"mat4",value:l}}return o}}class jr{static build(e=!1,t=!1,n=!1,s=2048,i=1,o=!1,l=0,c=.3){let u=ni.buildVertexShaderBase(e,t,l,`
            uniform vec2 covariancesTextureSize;
            uniform highp sampler2D covariancesTexture;
            uniform highp usampler2D covariancesTextureHalfFloat;
            uniform int covariancesAreHalfFloat;

            void fromCovarianceHalfFloatV4(uvec4 val, out vec4 first, out vec4 second) {
                vec2 r = unpackHalf2x16(val.r);
                vec2 g = unpackHalf2x16(val.g);
                vec2 b = unpackHalf2x16(val.b);

                first = vec4(r.x, r.y, g.x, g.y);
                second = vec4(b.x, b.y, 0.0, 0.0);
            }
        `);u+=jr.buildVertexShaderProjection(n,t,s,c);const h=jr.buildFragmentShader(),p=ni.getUniforms(e,t,l,i,o);return p.covariancesTextureSize={type:"v2",value:new Be(1024,1024)},p.covariancesTexture={type:"t",value:null},p.covariancesTextureHalfFloat={type:"t",value:null},p.covariancesAreHalfFloat={type:"i",value:0},new sn({uniforms:p,vertexShader:u,fragmentShader:h,transparent:!0,alphaTest:1,blending:ss,depthTest:!0,depthWrite:!1,side:un})}static buildVertexShaderProjection(e,t,n,s){let i=`

            vec4 sampledCovarianceA;
            vec4 sampledCovarianceB;
            vec3 cov3D_M11_M12_M13;
            vec3 cov3D_M22_M23_M33;
            if (covariancesAreHalfFloat == 0) {
                sampledCovarianceA = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset,
                                                                            covariancesTextureSize));
                sampledCovarianceB = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset + uint(1),
                                                                            covariancesTextureSize));

                cov3D_M11_M12_M13 = vec3(sampledCovarianceA.rgb) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceA.ba, sampledCovarianceB.r) * fOddOffset;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceB.gba) * fOddOffset;
            } else {
                uvec4 sampledCovarianceU = texture(covariancesTextureHalfFloat, getDataUV(1, 0, covariancesTextureSize));
                fromCovarianceHalfFloatV4(sampledCovarianceU, sampledCovarianceA, sampledCovarianceB);
                cov3D_M11_M12_M13 = sampledCovarianceA.rgb;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg);
            }
        
            // Construct the 3D covariance matrix
            mat3 Vrk = mat3(
                cov3D_M11_M12_M13.x, cov3D_M11_M12_M13.y, cov3D_M11_M12_M13.z,
                cov3D_M11_M12_M13.y, cov3D_M22_M23_M33.x, cov3D_M22_M23_M33.y,
                cov3D_M11_M12_M13.z, cov3D_M22_M23_M33.y, cov3D_M22_M23_M33.z
            );

            mat3 J;
            if (orthographicMode == 1) {
                // Since the projection is linear, we don't need an approximation
                J = transpose(mat3(orthoZoom, 0.0, 0.0,
                                0.0, orthoZoom, 0.0,
                                0.0, 0.0, 0.0));
            } else {
                // Construct the Jacobian of the affine approximation of the projection matrix. It will be used to transform the
                // 3D covariance matrix instead of using the actual projection matrix because that transformation would
                // require a non-linear component (perspective division) which would yield a non-gaussian result.
                float s = 1.0 / (viewCenter.z * viewCenter.z);
                J = mat3(
                    focal.x / viewCenter.z, 0., -(focal.x * viewCenter.x) * s,
                    0., focal.y / viewCenter.z, -(focal.y * viewCenter.y) * s,
                    0., 0., 0.
                );
            }

            // Concatenate the projection approximation with the model-view transformation
            mat3 W = transpose(mat3(transformModelViewMatrix));
            mat3 T = W * J;

            // Transform the 3D covariance matrix (Vrk) to compute the 2D covariance matrix
            mat3 cov2Dm = transpose(T) * Vrk * T;
            `;return e?i+=`
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += ${s};
                cov2Dm[1][1] += ${s};
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            `:i+=`
                cov2Dm[0][0] += ${s};
                cov2Dm[1][1] += ${s};
            `,i+=`

            // We are interested in the upper-left 2x2 portion of the projected 3D covariance matrix because
            // we only care about the X and Y values. We want the X-diagonal, cov2Dm[0][0],
            // the Y-diagonal, cov2Dm[1][1], and the correlation between the two cov2Dm[0][1]. We don't
            // need cov2Dm[1][0] because it is a symetric matrix.
            vec3 cov2Dv = vec3(cov2Dm[0][0], cov2Dm[0][1], cov2Dm[1][1]);

            // We now need to solve for the eigen-values and eigen vectors of the 2D covariance matrix
            // so that we can determine the 2D basis for the splat. This is done using the method described
            // here: https://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
            // After calculating the eigen-values and eigen-vectors, we calculate the basis for rendering the splat
            // by normalizing the eigen-vectors and then multiplying them by (sqrt(8) * sqrt(eigen-value)), which is
            // equal to scaling them by sqrt(8) standard deviations.
            //
            // This is a different approach than in the original work at INRIA. In that work they compute the
            // max extents of the projected splat in screen space to form a screen-space aligned bounding rectangle
            // which forms the geometry that is actually rasterized. The dimensions of that bounding box are 3.0
            // times the square root of the maximum eigen-value, or 3 standard deviations. They then use the inverse
            // 2D covariance matrix (called 'conic') in the CUDA rendering thread to determine fragment opacity by
            // calculating the full gaussian: exp(-0.5 * (X - mean) * conic * (X - mean)) * splat opacity
            float a = cov2Dv.x;
            float d = cov2Dv.z;
            float b = cov2Dv.y;
            float D = a * d - b * b;
            float trace = a + d;
            float traceOver2 = 0.5 * trace;
            float term2 = sqrt(max(0.1f, traceOver2 * traceOver2 - D));
            float eigenValue1 = traceOver2 + term2;
            float eigenValue2 = traceOver2 - term2;

            if (pointCloudModeEnabled == 1) {
                eigenValue1 = eigenValue2 = 0.2;
            }

            if (eigenValue2 <= 0.0) return;

            vec2 eigenVector1 = normalize(vec2(b, eigenValue1 - a));
            // since the eigen vectors are orthogonal, we derive the second one from the first
            vec2 eigenVector2 = vec2(eigenVector1.y, -eigenVector1.x);

            // We use sqrt(8) standard deviations instead of 3 to eliminate more of the splat with a very low opacity.
            vec2 basisVector1 = eigenVector1 * splatScale * min(sqrt8 * sqrt(eigenValue1), ${parseInt(n)}.0);
            vec2 basisVector2 = eigenVector2 * splatScale * min(sqrt8 * sqrt(eigenValue2), ${parseInt(n)}.0);
            `,t&&(i+=`
                vColor.a *= splatOpacityFromScene;
            `),i+=`
            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *
                             basisViewport * 2.0 * inverseFocalAdjustment;

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            // Scale the position data we send to the fragment shader
            vPosition *= sqrt8;
        `,i+=ni.getVertexShaderFadeIn(),i+="}",i}static buildFragmentShader(){let e=`
            precision highp float;
            #include <common>
 
            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
        `;return e+=`
            void main () {
                // Compute the positional squared distance from the center of the splat to the current fragment.
                float A = dot(vPosition, vPosition);
                // Since the positional data in vPosition has been scaled by sqrt(8), the squared result will be
                // scaled by a factor of 8. If the squared result is larger than 8, it means it is outside the ellipse
                // defined by the rectangle formed by vPosition. It also means it's farther
                // away than sqrt(8) standard deviations from the mean.
                if (A > 8.0) discard;
                vec3 color = vColor.rgb;

                // Since the rendered splat is scaled by sqrt(8), the inverse covariance matrix that is part of
                // the gaussian formula becomes the identity matrix. We're then left with (X - mean) * (X - mean),
                // and since 'mean' is zero, we have X * X, which is the same as A:
                float opacity = exp(-0.5 * A) * vColor.a;

                gl_FragColor = vec4(color.rgb, opacity);
            }
        `,e}}class zr{static build(e=!1,t=!1,n=1,s=!1,i=0){let l=ni.buildVertexShaderBase(e,t,i,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);l+=zr.buildVertexShaderProjection();const c=zr.buildFragmentShader(),d=ni.getUniforms(e,t,i,n,s);return d.scaleRotationsTexture={type:"t",value:null},d.scaleRotationsTextureSize={type:"v2",value:new Be(1024,1024)},new sn({uniforms:d,vertexShader:l,fragmentShader:c,transparent:!0,alphaTest:1,blending:ss,depthTest:!0,depthWrite:!1,side:un})}static buildVertexShaderProjection(){let e=`

            vec4 scaleRotationA = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset, scaleRotationsTextureSize));
            vec4 scaleRotationB = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset + uint(1), scaleRotationsTextureSize));

            vec3 scaleRotation123 = vec3(scaleRotationA.rgb) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationA.ba, scaleRotationB.r) * fOddOffset;
            vec3 scaleRotation456 = vec3(scaleRotationA.a, scaleRotationB.rg) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationB.gba) * fOddOffset;

            float missingW = sqrt(1.0 - scaleRotation456.x * scaleRotation456.x - scaleRotation456.y *
                                    scaleRotation456.y - scaleRotation456.z * scaleRotation456.z);
            mat3 R = quaternionToRotationMatrix(scaleRotation456.r, scaleRotation456.g, scaleRotation456.b, missingW);
            mat3 S = mat3(scaleRotation123.r, 0.0, 0.0,
                            0.0, scaleRotation123.g, 0.0,
                            0.0, 0.0, scaleRotation123.b);
            
            mat3 L = R * S;

            mat3x4 splat2World = mat3x4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

            mat4 world2ndc = transpose(projectionMatrix * transformModelViewMatrix);

            mat3x4 ndc2pix = mat3x4(vec4(viewport.x / 2.0, 0.0, 0.0, (viewport.x - 1.0) / 2.0),
                                    vec4(0.0, viewport.y / 2.0, 0.0, (viewport.y - 1.0) / 2.0),
                                    vec4(0.0, 0.0, 0.0, 1.0));

            mat3 T = transpose(splat2World) * world2ndc * ndc2pix;
            vec3 normal = vec3(viewMatrix * vec4(L[0][2], L[1][2], L[2][2], 0.0));
        `;return e+=`

                mat4 splat2World4 = mat4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(L[2], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

                mat4 Tt = transpose(transpose(splat2World4) * world2ndc);

                vec4 tempPoint1 = Tt * vec4(1.0, 0.0, 0.0, 1.0);
                tempPoint1 /= tempPoint1.w;

                vec4 tempPoint2 = Tt * vec4(0.0, 1.0, 0.0, 1.0);
                tempPoint2 /= tempPoint2.w;

                vec4 center = Tt * vec4(0.0, 0.0, 0.0, 1.0);
                center /= center.w;

                vec2 basisVector1 = tempPoint1.xy - center.xy;
                vec2 basisVector2 = tempPoint2.xy - center.xy;

                vec2 basisVector1Screen = basisVector1 * 0.5 * viewport;
                vec2 basisVector2Screen = basisVector2 * 0.5 * viewport;

                const float minPix = 1.;
                if (length(basisVector1Screen) < minPix || length(basisVector2Screen) < minPix) {
                    
            vec3 T0 = vec3(T[0][0], T[0][1], T[0][2]);
            vec3 T1 = vec3(T[1][0], T[1][1], T[1][2]);
            vec3 T3 = vec3(T[2][0], T[2][1], T[2][2]);

            vec3 tempPoint = vec3(1.0, 1.0, -1.0);
            float distance = (T3.x * T3.x * tempPoint.x) + (T3.y * T3.y * tempPoint.y) + (T3.z * T3.z * tempPoint.z);
            vec3 f = (1.0 / distance) * tempPoint;
            if (abs(distance) < 0.00001) return;

            float pointImageX = (T0.x * T3.x * f.x) + (T0.y * T3.y * f.y) + (T0.z * T3.z * f.z);
            float pointImageY = (T1.x * T3.x * f.x) + (T1.y * T3.y * f.y) + (T1.z * T3.z * f.z);
            vec2 pointImage = vec2(pointImageX, pointImageY);

            float tempX = (T0.x * T0.x * f.x) + (T0.y * T0.y * f.y) + (T0.z * T0.z * f.z);
            float tempY = (T1.x * T1.x * f.x) + (T1.y * T1.y * f.y) + (T1.z * T1.z * f.z);
            vec2 temp = vec2(tempX, tempY);

            vec2 halfExtend = pointImage * pointImage - temp;
            vec2 extent = sqrt(max(vec2(0.0001), halfExtend));
            float radius = max(extent.x, extent.y);

            vec2 ndcOffset = ((position.xy * radius * 3.0) * basisViewport * 2.0);

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            vT = T;
            vQuadCenter = pointImage;
            vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
        
                } else {
                    vec2 ndcOffset = vec2(position.x * basisVector1 + position.y * basisVector2) * 3.0 * inverseFocalAdjustment;
                    vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
                    gl_Position = quadPos;

                    vT = T;
                    vQuadCenter = center.xy;
                    vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
                }
            `,e+=ni.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
            precision highp float;
            #include <common>

            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;

            void main () {

                const float FilterInvSquare = 2.0;
                const float near_n = 0.2;
                const float T = 1.0;

                vec2 xy = vQuadCenter;
                vec3 Tu = vT[0];
                vec3 Tv = vT[1];
                vec3 Tw = vT[2];
                vec3 k = vFragCoord.x * Tw - Tu;
                vec3 l = vFragCoord.y * Tw - Tv;
                vec3 p = cross(k, l);
                if (p.z == 0.0) discard;
                vec2 s = vec2(p.x / p.z, p.y / p.z);
                float rho3d = (s.x * s.x + s.y * s.y); 
                vec2 d = vec2(xy.x - vFragCoord.x, xy.y - vFragCoord.y);
                float rho2d = FilterInvSquare * (d.x * d.x + d.y * d.y); 

                // compute intersection and depth
                float rho = min(rho3d, rho2d);
                float depth = (rho3d <= rho2d) ? (s.x * Tw.x + s.y * Tw.y) + Tw.z : Tw.z; 
                if (depth < near_n) discard;
                //  vec4 nor_o = collected_normal_opacity[j];
                //  float normal[3] = {nor_o.x, nor_o.y, nor_o.z};
                float opa = vColor.a;

                float power = -0.5f * rho;
                if (power > 0.0f) discard;

                // Eq. (2) from 3D Gaussian splatting paper.
                // Obtain alpha by multiplying with Gaussian opacity
                // and its exponential falloff from mean.
                // Avoid numerical instabilities (see paper appendix). 
                float alpha = min(0.99f, opa * exp(power));
                if (alpha < 1.0f / 255.0f) discard;
                float test_T = T * (1.0 - alpha);
                if (test_T < 0.0001)discard;

                float w = alpha * T;
                gl_FragColor = vec4(vColor.rgb, w);
            }
        `}}class db{static build(e){const t=new mn;t.setIndex([0,1,2,0,2,3]);const n=new Float32Array(12),s=new pn(n,3);t.setAttribute("position",s),s.setXYZ(0,-1,-1,0),s.setXYZ(1,-1,1,0),s.setXYZ(2,1,1,0),s.setXYZ(3,1,-1,0),s.needsUpdate=!0;const i=new xm().copy(t),o=new Uint32Array(e),l=new um(o,1,!1);return l.setUsage(Pp),i.setAttribute("splatIndex",l),i.instanceCount=0,i}}class ub extends It{constructor(e,t=new k,n=new vt,s=new k(1,1,1),i=1,o=1,l=!0){super(),this.splatBuffer=e,this.position.copy(t),this.quaternion.copy(n),this.scale.copy(s),this.transform=new Ke,this.minimumAlpha=i,this.opacity=o,this.visible=l}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}}const Wr=class Wr{constructor(e,t,n,s){this.min=new k().copy(e),this.max=new k().copy(t),this.boundingBox=new Tn(this.min,this.max),this.center=new k().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=n,this.children=[],this.data=null,this.id=s||Wr.idGen++}};fe(Wr,"idGen",0);let Ho=Wr;class Ni{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.sceneDimensions=new k,this.sceneMin=new k,this.sceneMax=new k,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){const t=new k().fromArray(e.min),n=new k().fromArray(e.max),s=new Ho(t,n,e.depth,e.id);if(e.data.indexes){s.data={indexes:[]};for(let i of e.data.indexes)s.data.indexes.push(i)}if(e.children)for(let i of e.children)s.children.push(Ni.convertWorkerSubTreeNode(i));return s}static convertWorkerSubTree(e,t){const n=new Ni(e.maxDepth,e.maxCentersPerNode);n.sceneMin=new k().fromArray(e.sceneMin),n.sceneMax=new k().fromArray(e.sceneMax),n.splatMesh=t,n.rootNode=Ni.convertWorkerSubTreeNode(e.rootNode);const s=(i,o)=>{i.children.length===0&&o(i);for(let l of i.children)s(l,o)};return n.nodesWithIndexes=[],s(n.rootNode,i=>{i.data&&i.data.indexes&&i.data.indexes.length>0&&n.nodesWithIndexes.push(i)}),n}}function hb(r){let e=0;class t{constructor(c,d){this.min=[c[0],c[1],c[2]],this.max=[d[0],d[1],d[2]]}containsPoint(c){return c[0]>=this.min[0]&&c[0]<=this.max[0]&&c[1]>=this.min[1]&&c[1]<=this.max[1]&&c[2]>=this.min[2]&&c[2]<=this.max[2]}}class n{constructor(c,d){this.maxDepth=c,this.maxCentersPerNode=d,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class s{constructor(c,d,u,h){this.min=[c[0],c[1],c[2]],this.max=[d[0],d[1],d[2]],this.center=[(d[0]-c[0])*.5+c[0],(d[1]-c[1])*.5+c[1],(d[2]-c[2])*.5+c[2]],this.depth=u,this.children=[],this.data=null,this.id=h||e++}}processSplatTreeNode=function(l,c,d,u){const h=c.data.indexes.length;if(h<l.maxCentersPerNode||c.depth>l.maxDepth){const v=[];for(let S=0;S<c.data.indexes.length;S++)l.addedIndexes[c.data.indexes[S]]||(v.push(c.data.indexes[S]),l.addedIndexes[c.data.indexes[S]]=!0);c.data.indexes=v,c.data.indexes.sort((S,b)=>S>b?1:-1),l.nodesWithIndexes.push(c);return}const p=[c.max[0]-c.min[0],c.max[1]-c.min[1],c.max[2]-c.min[2]],f=[p[0]*.5,p[1]*.5,p[2]*.5],g=[c.min[0]+f[0],c.min[1]+f[1],c.min[2]+f[2]],y=[new t([g[0]-f[0],g[1],g[2]-f[2]],[g[0],g[1]+f[1],g[2]]),new t([g[0],g[1],g[2]-f[2]],[g[0]+f[0],g[1]+f[1],g[2]]),new t([g[0],g[1],g[2]],[g[0]+f[0],g[1]+f[1],g[2]+f[2]]),new t([g[0]-f[0],g[1],g[2]],[g[0],g[1]+f[1],g[2]+f[2]]),new t([g[0]-f[0],g[1]-f[1],g[2]-f[2]],[g[0],g[1],g[2]]),new t([g[0],g[1]-f[1],g[2]-f[2]],[g[0]+f[0],g[1],g[2]]),new t([g[0],g[1]-f[1],g[2]],[g[0]+f[0],g[1],g[2]+f[2]]),new t([g[0]-f[0],g[1]-f[1],g[2]],[g[0],g[1],g[2]+f[2]])],x=[];for(let v=0;v<y.length;v++)x[v]=[];const m=[0,0,0];for(let v=0;v<h;v++){const S=c.data.indexes[v],b=d[S];m[0]=u[b],m[1]=u[b+1],m[2]=u[b+2];for(let _=0;_<y.length;_++)y[_].containsPoint(m)&&x[_].push(S)}for(let v=0;v<y.length;v++){const S=new s(y[v].min,y[v].max,c.depth+1);S.data={indexes:x[v]},c.children.push(S)}c.data={};for(let v of c.children)processSplatTreeNode(l,v,d,u)};const i=(l,c,d)=>{const u=[0,0,0],h=[0,0,0],p=[],f=Math.floor(l.length/4);for(let y=0;y<f;y++){const x=y*4,m=l[x],v=l[x+1],S=l[x+2],b=Math.round(l[x+3]);(y===0||m<u[0])&&(u[0]=m),(y===0||m>h[0])&&(h[0]=m),(y===0||v<u[1])&&(u[1]=v),(y===0||v>h[1])&&(h[1]=v),(y===0||S<u[2])&&(u[2]=S),(y===0||S>h[2])&&(h[2]=S),p.push(b)}const g=new n(c,d);return g.sceneMin=u,g.sceneMax=h,g.rootNode=new s(g.sceneMin,g.sceneMax,0),g.rootNode.data={indexes:p},g};function o(l,c,d){const u=[];for(let p of l){const f=Math.floor(p.length/4);for(let g=0;g<f;g++){const y=g*4,x=Math.round(p[y+3]);u[x]=y}}const h=[];for(let p of l){const f=i(p,c,d);h.push(f),processSplatTreeNode(f,f.rootNode,u,p)}r.postMessage({subTrees:h})}r.onmessage=l=>{l.data.process&&o(l.data.process.centers,l.data.process.maxDepth,l.data.process.maxCentersPerNode)}}function fb(r,e,t,n,s){r.postMessage({process:{centers:e,maxDepth:n,maxCentersPerNode:s}},t)}function pb(){return new Worker(URL.createObjectURL(new Blob(["(",hb.toString(),")(self)"],{type:"application/javascript"})))}class mb{constructor(e,t){fe(this,"processSplatMesh",function(e,t=()=>!0,n,s){this.splatTreeWorker||(this.splatTreeWorker=pb()),this.splatMesh=e,this.subTrees=[];const i=new k,o=(l,c)=>{const d=new Float32Array(c*4);let u=0;for(let h=0;h<c;h++){const p=h+l;if(t(p)){e.getSplatCenter(p,i);const f=u*4;d[f]=i.x,d[f+1]=i.y,d[f+2]=i.z,d[f+3]=p,u++}}return d};return new Promise(l=>{const c=()=>this.disposed?(this.diposeSplatTreeWorker(),l(),!0):!1;n&&n(!1),en(()=>{if(c())return;const d=[];if(e.dynamicMode){let u=0;for(let h=0;h<e.scenes.length;h++){const f=e.getScene(h).splatBuffer.getSplatCount(),g=o(u,f);d.push(g),u+=f}}else{const u=o(0,e.getSplatCount());d.push(u)}this.splatTreeWorker.onmessage=u=>{c()||u.data.subTrees&&(s&&s(!1),en(()=>{if(!c()){for(let h of u.data.subTrees){const p=Ni.convertWorkerSubTree(h,e);this.subTrees.push(p)}this.diposeSplatTreeWorker(),s&&s(!0),en(()=>{l()})}}))},en(()=>{if(c())return;n&&n(!0);const u=d.map(h=>h.buffer);fb(this.splatTreeWorker,d,u,this.maxDepth,this.maxCentersPerNode)})})})});this.maxDepth=e,this.maxCentersPerNode=t,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){const t=(n,s)=>{n.children.length===0&&s(n);for(let i of n.children)t(i,s)};for(let n of this.subTrees)t(n.rootNode,e)}}function gb(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xb(r,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function i(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const c=i(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const d=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,b=o||e.has("OES_texture_float"),_=S&&b,M=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:d,getMaxAnisotropy:s,getMaxPrecision:i,precision:l,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:x,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:S,floatFragmentTextures:b,floatVertexTextures:_,maxSamples:M}}const si={Default:0,Gradual:1,Instant:2},Ms={None:0,Error:1,Warning:2,Info:3,Debug:4},qc=new mn,yb=new as,wr=6,vb=4,bb=4,Sb=4,Ab=6,_b=8,Ga=4,Wa=4,Qc=1,wb=.012,Cb=.003,Yc=1,Kc=16777216;class kt extends Mt{constructor(t=wn.ThreeD,n=!1,s=!1,i=!1,o=1,l=!0,c=!1,d=!1,u=1024,h=Ms.None,p=0,f=1,g=.3){super(qc,yb);fe(this,"buildSplatTree",function(t=[],n,s){return new Promise(i=>{this.disposeSplatTree(),this.baseSplatTree=new mb(8,1e3);const o=performance.now(),l=new bt;this.baseSplatTree.processSplatMesh(this,c=>{this.getSplatColor(c,l);const d=this.getSceneIndexForSplat(c),u=t[d]||1;return l.w>=u},n,s).then(()=>{const c=performance.now()-o;if(this.logLevel>=Ms.Info&&console.log("SplatTree build: "+c+" ms"),this.disposed)i();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let d=0,u=0,h=0;this.splatTree.visitLeaves(p=>{const f=p.data.indexes.length;f>0&&(u+=f,h++,d++)}),this.logLevel>=Ms.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${d}`),u=u/h,console.log(`Avg splat count per node: ${u}`),console.log(`Total splat count: ${this.getSplatCount()}`)),i()}})})});fe(this,"updateUniforms",(function(){const t=new Be;return function(n,s,i,o,l,c){if(this.getSplatCount()>0){if(t.set(n.x*this.devicePixelRatio,n.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(t),this.material.uniforms.basisViewport.value.set(1/t.x,1/t.y),this.material.uniforms.focal.value.set(s,i),this.material.uniforms.orthographicMode.value=o?1:0,this.material.uniforms.orthoZoom.value=l,this.material.uniforms.inverseFocalAdjustment.value=c,this.dynamicMode)for(let u=0;u<this.scenes.length;u++)this.material.uniforms.transforms.value[u].copy(this.getScene(u).transform);if(this.enableOptionalEffects)for(let u=0;u<this.scenes.length;u++)this.material.uniforms.sceneOpacity.value[u]=yt(this.getScene(u).opacity,0,1),this.material.uniforms.sceneVisibility.value[u]=this.getScene(u).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}})());fe(this,"setupDistancesComputationTransformFeedback",(function(){let t;return function(){const n=this.getMaxSplatCount();if(!this.renderer)return;const s=this.lastRenderer!==this.renderer,i=t!==n;if(!s&&!i)return;s?this.disposeDistancesComputationGPUResources():i&&this.disposeDistancesComputationGPUBufferResources();const o=this.renderer.getContext(),l=(f,g,y)=>{const x=f.createShader(g);if(!x)return console.error("Fatal error: gl could not create a shader object."),null;if(f.shaderSource(x,y),f.compileShader(x),!f.getShaderParameter(x,f.COMPILE_STATUS)){let v="unknown";g===f.VERTEX_SHADER?v="vertex shader":g===f.FRAGMENT_SHADER&&(v="fragement shader");const S=f.getShaderInfoLog(x);return console.error("Failed to compile "+v+" with these errors:"+S),f.deleteShader(x),null}return x};let c;this.integerBasedDistancesComputation?(c=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?c+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${nt.MaxScenes}];
                        void main(void) {
                            ivec4 transform = transforms[sceneIndex];
                            distance = center.x * transform.x + center.y * transform.y + center.z * transform.z + transform.w * center.w;
                        }
                    `:c+=`
                        uniform ivec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `):(c=`#version 300 es
                in vec4 center;
                flat out float distance;`,this.dynamicMode?c+=`
                        in uint sceneIndex;
                        uniform mat4 transforms[${nt.MaxScenes}];
                        void main(void) {
                            vec4 transformedCenter = transforms[sceneIndex] * vec4(center.xyz, 1.0);
                            distance = transformedCenter.z;
                        }
                    `:c+=`
                        uniform vec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `);const d=`#version 300 es
                precision lowp float;
                out vec4 fragColor;
                void main(){}
            `,u=o.getParameter(o.VERTEX_ARRAY_BINDING),h=o.getParameter(o.CURRENT_PROGRAM),p=h?o.getProgramParameter(h,o.DELETE_STATUS):!1;if(s&&(this.distancesTransformFeedback.vao=o.createVertexArray()),o.bindVertexArray(this.distancesTransformFeedback.vao),s){const f=o.createProgram(),g=l(o,o.VERTEX_SHADER,c),y=l(o,o.FRAGMENT_SHADER,d);if(!g||!y)throw new Error("Could not compile shaders for distances computation on GPU.");if(o.attachShader(f,g),o.attachShader(f,y),o.transformFeedbackVaryings(f,["distance"],o.SEPARATE_ATTRIBS),o.linkProgram(f),!o.getProgramParameter(f,o.LINK_STATUS)){const m=o.getProgramInfoLog(f);throw console.error("Fatal error: Failed to link program: "+m),o.deleteProgram(f),o.deleteShader(y),o.deleteShader(g),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=f,this.distancesTransformFeedback.vertexShader=g,this.distancesTransformFeedback.vertexShader=y}if(o.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=o.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=o.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let f=0;f<this.scenes.length;f++)this.distancesTransformFeedback.transformsLocs[f]=o.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${f}]`)}else this.distancesTransformFeedback.modelViewProjLoc=o.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(s||i)&&(this.distancesTransformFeedback.centersBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?o.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,o.INT,0,0):o.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,o.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),o.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,o.UNSIGNED_INT,0,0))),(s||i)&&(this.distancesTransformFeedback.outDistancesBuffer=o.createBuffer()),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),o.bufferData(o.ARRAY_BUFFER,n*4,o.STATIC_READ),s&&(this.distancesTransformFeedback.id=o.createTransformFeedback()),o.bindTransformFeedback(o.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),o.bindBufferBase(o.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),h&&p!==!0&&o.useProgram(h),u&&o.bindVertexArray(u),this.lastRenderer=this.renderer,t=n}})());fe(this,"fillTransformsArray",(function(){const t=[];return function(n){t.length!==n.length&&(t.length=n.length);for(let s=0;s<this.scenes.length;s++){const o=this.getScene(s).transform.elements;for(let l=0;l<16;l++)t[s*16+l]=o[l]}n.set(t)}})());fe(this,"computeDistancesOnGPU",(function(){const t=new Ke;return function(n,s){if(!this.renderer)return;const i=this.renderer.getContext(),o=i.getParameter(i.VERTEX_ARRAY_BINDING),l=i.getParameter(i.CURRENT_PROGRAM),c=l?i.getProgramParameter(l,i.DELETE_STATUS):!1;if(i.bindVertexArray(this.distancesTransformFeedback.vao),i.useProgram(this.distancesTransformFeedback.program),i.enable(i.RASTERIZER_DISCARD),this.dynamicMode)for(let h=0;h<this.scenes.length;h++)if(t.copy(this.getScene(h).transform),t.premultiply(n),this.integerBasedDistancesComputation){const p=kt.getIntegerMatrixArray(t),f=[p[2],p[6],p[10],p[14]];i.uniform4i(this.distancesTransformFeedback.transformsLocs[h],f[0],f[1],f[2],f[3])}else i.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[h],!1,t.elements);else if(this.integerBasedDistancesComputation){const h=kt.getIntegerMatrixArray(n),p=[h[2],h[6],h[10]];i.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,p[0],p[1],p[2])}else{const h=[n.elements[2],n.elements[6],n.elements[10]];i.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,h[0],h[1],h[2])}i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),i.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?i.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,i.INT,0,0):i.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,i.FLOAT,!1,0,0),this.dynamicMode&&(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),i.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),i.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,i.UNSIGNED_INT,0,0)),i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),i.beginTransformFeedback(i.POINTS),i.drawArrays(i.POINTS,0,this.getSplatCount()),i.endTransformFeedback(),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,null),i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,null),i.disable(i.RASTERIZER_DISCARD);const d=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);i.flush();const u=new Promise(h=>{const p=()=>{if(this.disposed)h();else switch(i.clientWaitSync(d,0,0)){case i.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(p),this.computeDistancesOnGPUSyncTimeout;case i.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,i.deleteSync(d);const x=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao),i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),i.getBufferSubData(i.ARRAY_BUFFER,0,s),i.bindBuffer(i.ARRAY_BUFFER,null),x&&i.bindVertexArray(x),h()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(p)});return l&&c!==!0&&i.useProgram(l),o&&i.bindVertexArray(o),u}})());fe(this,"getSplatCenter",(function(){const t={};return function(n,s,i){this.getLocalSplatParameters(n,t,i),t.splatBuffer.getSplatCenter(t.localIndex,s,t.sceneTransform)}})());fe(this,"getSplatScaleAndRotation",(function(){const t={},n=new k;return function(s,i,o,l){this.getLocalSplatParameters(s,t,l),n.x=void 0,n.y=void 0,n.z=void 0,this.splatRenderMode===wn.TwoD&&(n.z=0),t.splatBuffer.getSplatScaleAndRotation(t.localIndex,i,o,t.sceneTransform,n)}})());fe(this,"getSplatColor",(function(){const t={};return function(n,s){this.getLocalSplatParameters(n,t),t.splatBuffer.getSplatColor(t.localIndex,s)}})());this.renderer=void 0,this.splatRenderMode=t,this.dynamicMode=n,this.enableOptionalEffects=s,this.halfPrecisionCovariancesOnGPU=i,this.devicePixelRatio=o,this.enableDistancesComputationOnGPU=l,this.integerBasedDistancesComputation=c,this.antialiased=d,this.kernel2DSize=g,this.maxScreenSpaceSplatSize=u,this.logLevel=h,this.sphericalHarmonicsDegree=p,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=f,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new Tn,this.calculatedSceneCenter=new k,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(t,n,s){const i=[];i.length=n.length;for(let o=0;o<n.length;o++){const l=n[o],c=s[o]||{};let d=c.position||[0,0,0],u=c.rotation||[0,0,0,1],h=c.scale||[1,1,1];const p=new k().fromArray(d),f=new vt().fromArray(u),g=new k().fromArray(h),y=kt.createScene(l,p,f,g,c.splatAlphaRemovalThreshold||1,c.opacity,c.visible);t.add(y),i[o]=y}return i}static createScene(t,n,s,i,o,l=1,c=!0){return new ub(t,n,s,i,o,l,c)}static buildSplatIndexMaps(t){const n=[],s=[];let i=0;for(let o=0;o<t.length;o++){const c=t[o].getMaxSplatCount();for(let d=0;d<c;d++)n[i]=d,s[i]=o,i++}return{localSplatIndexMap:n,sceneIndexMap:s}}build(t,n,s=!0,i=!1,o,l,c=!0){this.sceneOptions=n,this.finalBuild=i;const d=kt.getTotalMaxSplatCountForSplatBuffers(t),u=kt.buildScenes(this,t,n);if(s)for(let x=0;x<this.scenes.length&&x<u.length;x++){const m=u[x],v=this.getScene(x);m.copyTransformData(v)}this.scenes=u;let h=3;for(let x of t){const m=x.getMinSphericalHarmonicsDegree();m<h&&(h=m)}this.minSphericalHarmonicsDegree=Math.min(h,this.sphericalHarmonicsDegree);let p=!1;if(t.length!==this.lastBuildScenes.length)p=!0;else for(let x=0;x<t.length;x++)if(t[x]!==this.lastBuildScenes[x].splatBuffer){p=!0;break}let f=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==d||p)&&(f=!1),!f){this.boundingBox=new Tn,c||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=db.build(d),this.splatRenderMode===wn.ThreeD?this.material=jr.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree,this.kernel2DSize):this.material=zr.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);const x=kt.buildSplatIndexMaps(t);this.globalSplatIndexToLocalSplatIndexMap=x.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=x.sceneIndexMap}const g=this.getSplatCount(!0);this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();const y=this.refreshGPUDataFromSplatBuffers(f);for(let x=0;x<this.scenes.length;x++)this.lastBuildScenes[x]=this.scenes[x];return this.lastBuildSplatCount=g,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,i&&this.scenes.length>0&&this.buildSplatTree(n.map(x=>x.splatAlphaRemovalThreshold||1),o,l).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,y}freeIntermediateSplatData(){const t=n=>{delete n.source.data,delete n.image,n.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{t(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{t(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{t(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(n=>{n.needsUpdate=!0,n.onUpdate=()=>{t(n)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{t(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new Tn,this.calculatedSceneCenter=new k,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==qc&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let t in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(t)){const n=this.splatDataTextures[t];n.texture&&(n.texture.dispose(),n.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(t){this.onSplatTreeReadyCallback=t}getDataForDistancesComputation(t,n){const s=this.integerBasedDistancesComputation?this.getIntegerCenters(t,n,!0):this.getFloatCenters(t,n,!0),i=this.getSceneIndexes(t,n);return{centers:s,sceneIndexes:i}}refreshGPUDataFromSplatBuffers(t){const n=this.getSplatCount(!0);this.refreshDataTexturesFromSplatBuffers(t);const s=t?this.lastBuildSplatCount:0,{centers:i,sceneIndexes:o}=this.getDataForDistancesComputation(s,n-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(i,o,t),{from:s,to:n-1,count:n-s,centers:i,sceneIndexes:o}}refreshGPUBuffersForDistancesComputation(t,n,s=!1){const i=s?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(s,t,i),this.updateGPUTransformIndexesBufferForDistancesComputation(s,n,i)}refreshDataTexturesFromSplatBuffers(t){const n=this.getSplatCount(!0),s=this.lastBuildSplatCount,i=n-1;t?this.updateBaseDataFromSplatBuffers(s,i):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(s,i),this.updateVisibleRegion(t)}setupDataTextures(){const t=this.getMaxSplatCount(),n=this.getSplatCount(!0);this.disposeTextures();const s=(T,C)=>{const A=new Be(4096,1024);for(;A.x*A.y*T<t*C;)A.y*=2;return A},i=T=>T>=1?Ab:bb,o=T=>{const C=i(T),A=s(C,6);return{elementsPerTexelStored:C,texSize:A}};let l=this.getTargetCovarianceCompressionLevel();const c=0,d=this.getTargetSphericalHarmonicsCompressionLevel();let u,h,p;if(this.splatRenderMode===wn.ThreeD){const T=o(l);T.texSize.x*T.texSize.y>Kc&&l===0&&(l=1),u=new Float32Array(t*wr)}else h=new Float32Array(t*3),p=new Float32Array(t*4);const f=new Float32Array(t*3),g=new Uint8Array(t*4);let y=Float32Array;d===1?y=Uint16Array:d===2&&(y=Uint8Array);const x=ti(this.minSphericalHarmonicsDegree),m=this.minSphericalHarmonicsDegree?new y(t*x):void 0,v=s(Wa,4),S=new Uint32Array(v.x*v.y*Wa);kt.updateCenterColorsPaddedData(0,n-1,f,g,S);const b=new $n(S,v.x,v.y,Js,hn);if(b.internalFormat="RGBA32UI",b.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=b,this.material.uniforms.centersColorsTextureSize.value.copy(v),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:u,scales:h,rotations:p,centers:f,colors:g,sphericalHarmonics:m},centerColors:{data:S,texture:b,size:v}},this.splatRenderMode===wn.ThreeD){const T=o(l),C=T.elementsPerTexelStored,A=T.texSize;let R=l>=1?Uint32Array:Float32Array;const D=l>=1?_b:Sb,I=new R(A.x*A.y*D);l===0?I.set(u):kt.updatePaddedCompressedCovariancesTextureData(u,I,0,0,u.length);let U;if(l>=1)U=new $n(I,A.x,A.y,Js,hn),U.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=U;else{U=new $n(I,A.x,A.y,Ht,bn),this.material.uniforms.covariancesTexture.value=U;const j=new $n(new Uint32Array(32),2,2,Js,hn);j.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=j,j.needsUpdate=!0}U.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=l>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(A),this.splatDataTextures.covariances={data:I,texture:U,size:A,compressionLevel:l,elementsPerTexelStored:C,elementsPerTexelAllocated:D}}else{const C=s(Ga,6);let A=Float32Array,R=bn;const D=new A(C.x*C.y*Ga);kt.updateScaleRotationsPaddedData(0,n-1,h,p,D);const I=new $n(D,C.x,C.y,Ht,R);I.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=I,this.material.uniforms.scaleRotationsTextureSize.value.copy(C),this.splatDataTextures.scaleRotations={data:D,texture:I,size:C,compressionLevel:c}}if(m){const T=d===2?Dn:fi;let C=x;C%2!==0&&C++;const A=4,R=Ht;let D=s(A,C);if(D.x*D.y<=Kc){const I=D.x*D.y*A,U=new y(I);for(let P=0;P<n;P++){const X=x*P,z=C*P;for(let Q=0;Q<x;Q++)U[z+Q]=m[X+Q]}const j=new $n(U,D.x,D.y,R,T);j.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=j,this.splatDataTextures.sphericalHarmonics={componentCount:x,paddedComponentCount:C,data:U,textureCount:1,texture:j,size:D,compressionLevel:d,elementsPerTexel:A}}else{const I=x/3;C=I,C%2!==0&&C++,D=s(A,C);const U=D.x*D.y*A,j=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],P=[],X=[];for(let z=0;z<3;z++){const Q=new y(U);P.push(Q);for(let q=0;q<n;q++){const pe=x*q,Te=C*q;if(I>=3){for(let Se=0;Se<3;Se++)Q[Te+Se]=m[pe+z*3+Se];if(I>=8)for(let Se=0;Se<5;Se++)Q[Te+3+Se]=m[pe+9+z*5+Se]}}const ie=new $n(Q,D.x,D.y,R,T);X.push(ie),ie.needsUpdate=!0,j[z].value=ie}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:x,componentCountPerChannel:I,paddedComponentCount:C,data:P,textureCount:3,textures:X,size:D,compressionLevel:d,elementsPerTexel:A}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(D),this.material.uniforms.sphericalHarmonics8BitMode.value=d===2?1:0;for(let I=0;I<this.scenes.length;I++){const U=this.scenes[I].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[I]=U.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[I]=U.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}const _=s(Qc,4),M=new Uint32Array(_.x*_.y*Qc);for(let T=0;T<n;T++)M[T]=this.globalSplatIndexToSceneIndexMap[T];const w=new $n(M,_.x,_.y,Kr,hn);w.internalFormat="R32UI",w.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=w,this.material.uniforms.sceneIndexesTextureSize.value.copy(_),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:M,texture:w,size:_},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(t,n){const s=this.splatDataTextures.covariances,i=s?s.compressionLevel:void 0,o=this.splatDataTextures.scaleRotations,l=o?o.compressionLevel:void 0,c=this.splatDataTextures.sphericalHarmonics,d=c?c.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,i,l,d,t,n,t)}updateDataTexturesFromBaseData(t,n){const s=this.splatDataTextures.covariances,i=s?s.compressionLevel:void 0,o=this.splatDataTextures.scaleRotations,l=o?o.compressionLevel:void 0,c=this.splatDataTextures.sphericalHarmonics,d=c?c.compressionLevel:0,u=this.splatDataTextures.centerColors,h=u.data,p=u.texture;kt.updateCenterColorsPaddedData(t,n,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,h);const f=this.renderer?this.renderer.properties.get(p):null;if(!f||!f.__webglTexture?p.needsUpdate=!0:this.updateDataTexture(h,u.texture,u.size,f,Wa,vb,4,t,n),s){const S=s.texture,b=t*wr,_=n*wr;if(i===0)for(let w=b;w<=_;w++){const T=this.splatDataTextures.baseData.covariances[w];s.data[w]=T}else kt.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,s.data,t*s.elementsPerTexelAllocated,b,_);const M=this.renderer?this.renderer.properties.get(S):null;!M||!M.__webglTexture?S.needsUpdate=!0:i===0?this.updateDataTexture(s.data,s.texture,s.size,M,s.elementsPerTexelStored,wr,4,t,n):this.updateDataTexture(s.data,s.texture,s.size,M,s.elementsPerTexelAllocated,s.elementsPerTexelAllocated,2,t,n)}if(o){const S=o.data,b=o.texture,_=6,M=l===0?4:2;kt.updateScaleRotationsPaddedData(t,n,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,S);const w=this.renderer?this.renderer.properties.get(b):null;!w||!w.__webglTexture?b.needsUpdate=!0:this.updateDataTexture(S,o.texture,o.size,w,Ga,_,M,t,n)}const g=this.splatDataTextures.baseData.sphericalHarmonics;if(g){let S=4;d===1?S=2:d===2&&(S=1);const b=(w,T,C,A,R)=>{const D=this.renderer?this.renderer.properties.get(w):null;!D||!D.__webglTexture?w.needsUpdate=!0:this.updateDataTexture(A,w,T,D,C,R,S,t,n)},_=c.componentCount,M=c.paddedComponentCount;if(c.textureCount===1){const w=c.data;for(let T=t;T<=n;T++){const C=_*T,A=M*T;for(let R=0;R<_;R++)w[A+R]=g[C+R]}b(c.texture,c.size,c.elementsPerTexel,w,M)}else{const w=c.componentCountPerChannel;for(let T=0;T<3;T++){const C=c.data[T];for(let A=t;A<=n;A++){const R=_*A,D=M*A;if(w>=3){for(let I=0;I<3;I++)C[D+I]=g[R+T*3+I];if(w>=8)for(let I=0;I<5;I++)C[D+3+I]=g[R+9+T*5+I]}}b(c.textures[T],c.size,c.elementsPerTexel,C,M)}}}const y=this.splatDataTextures.sceneIndexes,x=y.data;for(let S=this.lastBuildSplatCount;S<=n;S++)x[S]=this.globalSplatIndexToSceneIndexMap[S];const m=y.texture,v=this.renderer?this.renderer.properties.get(m):null;!v||!v.__webglTexture?m.needsUpdate=!0:this.updateDataTexture(x,y.texture,y.size,v,1,1,1,this.lastBuildSplatCount,n)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const i=this.getScene(n).splatBuffer;(n===0||i.compressionLevel>t)&&(t=i.compressionLevel)}return t}getMinimumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const i=this.getScene(n).splatBuffer;(n===0||i.compressionLevel<t)&&(t=i.compressionLevel)}return t}static computeTextureUpdateRegion(t,n,s,i,o){const l=o/i,c=t*l,d=Math.floor(c/s),u=d*s*i,h=n*l,p=Math.floor(h/s),f=p*s*i+s*i;return{dataStart:u,dataEnd:f,startRow:d,endRow:p}}updateDataTexture(t,n,s,i,o,l,c,d,u){const h=this.renderer.getContext(),p=kt.computeTextureUpdateRegion(d,u,s.x,o,l),f=p.dataEnd-p.dataStart,g=new t.constructor(t.buffer,p.dataStart*c,f),y=p.endRow-p.startRow+1,x=this.webGLUtils.convert(n.type),m=this.webGLUtils.convert(n.format,n.colorSpace),v=h.getParameter(h.TEXTURE_BINDING_2D);h.bindTexture(h.TEXTURE_2D,i.__webglTexture),h.texSubImage2D(h.TEXTURE_2D,0,0,p.startRow,s.x,y,m,x,g),h.bindTexture(h.TEXTURE_2D,v)}static updatePaddedCompressedCovariancesTextureData(t,n,s,i,o){let l=new DataView(n.buffer),c=s,d=0;for(let u=i;u<=o;u+=2)l.setUint16(c*2,t[u],!0),l.setUint16(c*2+2,t[u+1],!0),c+=2,d++,d>=3&&(c+=2,d=0)}static updateCenterColorsPaddedData(t,n,s,i,o){for(let l=t;l<=n;l++){const c=l*4,d=l*3,u=l*4;o[u]=tv(i,c),o[u+1]=La(s[d]),o[u+2]=La(s[d+1]),o[u+3]=La(s[d+2])}}static updateScaleRotationsPaddedData(t,n,s,i,o){for(let c=t;c<=n;c++){const d=c*3,u=c*4,h=c*6;o[h]=s[d],o[h+1]=s[d+1],o[h+2]=s[d+2],o[h+3]=i[u],o[h+4]=i[u+1],o[h+5]=i[u+2]}}updateVisibleRegion(t){const n=this.getSplatCount(!0),s=new k;if(!t){const o=new k;this.scenes.forEach(l=>{o.add(l.splatBuffer.sceneCenter)}),o.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(o),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}const i=t?this.lastBuildSplatCount:0;for(let o=i;o<n;o++){this.getSplatCenter(o,s,!0);const l=s.sub(this.calculatedSceneCenter).length();l>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=l)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>Yc&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-Yc,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(t=si.Default){const n=wb*this.sceneFadeInRateMultiplier,s=Cb*this.sceneFadeInRateMultiplier,i=this.finalBuild?n:s,o=t===si.Default?i:s;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*o+this.visibleRegionFadeStartRadius;const c=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,d=c||t===si.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=d,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!c}updateRenderIndexes(t,n){const s=this.geometry;s.attributes.splatIndex.set(t),s.attributes.splatIndex.needsUpdate=!0,n>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),s.instanceCount=n,s.setDrawRange(0,n)}updateTransforms(){for(let t=0;t<this.scenes.length;t++)this.getScene(t).updateTransform(this.dynamicMode)}setSplatScale(t=1){this.splatScale=t,this.material.uniforms.splatScale.value=t,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(t){this.pointCloudModeEnabled=t,this.material.uniforms.pointCloudModeEnabled.value=t?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(t=!1){return t?kt.getTotalSplatCountForScenes(this.scenes):this.lastBuildSplatCount}static getTotalSplatCountForScenes(t){let n=0;for(let s of t)s&&s.splatBuffer&&(n+=s.splatBuffer.getSplatCount());return n}static getTotalSplatCountForSplatBuffers(t){let n=0;for(let s of t)n+=s.getSplatCount();return n}getMaxSplatCount(){return kt.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(t){let n=0;for(let s of t)s&&s.splatBuffer&&(n+=s.splatBuffer.getMaxSplatCount());return n}static getTotalMaxSplatCountForSplatBuffers(t){let n=0;for(let s of t)n+=s.getMaxSplatCount();return n}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.vao&&(t.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(t.deleteProgram(this.distancesTransformFeedback.program),t.deleteShader(this.distancesTransformFeedback.vertexShader),t.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(t.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,t.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(t.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(t){if(t!==this.renderer){this.renderer=t;const n=this.renderer.getContext(),s=new gb(n),i=new xb(n,s,{});if(s.init(i),this.webGLUtils=new Yd(n,s),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:o,sceneIndexes:l}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(o,l)}}}updateGPUCentersBufferForDistancesComputation(t,n,s){if(!this.renderer)return;const i=this.renderer.getContext(),o=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao);const l=this.integerBasedDistancesComputation?Uint32Array:Float32Array,c=16,d=s*c;if(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),t)i.bufferSubData(i.ARRAY_BUFFER,d,n);else{const u=new l(this.getMaxSplatCount()*c);u.set(n),i.bufferData(i.ARRAY_BUFFER,u,i.STATIC_DRAW)}i.bindBuffer(i.ARRAY_BUFFER,null),o&&i.bindVertexArray(o)}updateGPUTransformIndexesBufferForDistancesComputation(t,n,s){if(!this.renderer||!this.dynamicMode)return;const i=this.renderer.getContext(),o=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao);const l=s*4;if(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),t)i.bufferSubData(i.ARRAY_BUFFER,l,n);else{const c=new Uint32Array(this.getMaxSplatCount()*4);c.set(n),i.bufferData(i.ARRAY_BUFFER,c,i.STATIC_DRAW)}i.bindBuffer(i.ARRAY_BUFFER,null),o&&i.bindVertexArray(o)}getSceneIndexes(t,n){let s;const i=n-t+1;s=new Uint32Array(i);for(let o=t;o<=n;o++)s[o]=this.globalSplatIndexToSceneIndexMap[o];return s}getLocalSplatParameters(t,n,s){s==null&&(s=!this.dynamicMode),n.splatBuffer=this.getSplatBufferForSplat(t),n.localIndex=this.getSplatLocalIndex(t),n.sceneTransform=s?this.getSceneTransformForSplat(t):null}fillSplatDataArrays(t,n,s,i,o,l,c,d=0,u=0,h=1,p,f,g=0,y){const x=new k;x.x=void 0,x.y=void 0,this.splatRenderMode===wn.ThreeD?x.z=void 0:x.z=1;const m=new Ke;let v=0,S=this.scenes.length-1;y!=null&&y>=0&&y<=this.scenes.length&&(v=y,S=y);for(let b=v;b<=S;b++){c==null&&(c=!this.dynamicMode);const _=this.getScene(b),M=_.splatBuffer;let w;if(c&&(this.getSceneTransform(b,m),w=m),t&&M.fillSplatCovarianceArray(t,w,p,f,g,d),n||s){if(!n||!s)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');M.fillSplatScaleRotationArray(n,s,w,p,f,g,u,x)}i&&M.fillSplatCenterArray(i,w,p,f,g),o&&M.fillSplatColorArray(o,_.minimumAlpha,p,f,g),l&&M.fillSphericalHarmonicsArray(l,this.minSphericalHarmonicsDegree,w,p,f,g,h),g+=M.getSplatCount()}}getIntegerCenters(t,n,s=!1){const i=n-t+1,o=new Float32Array(i*3);this.fillSplatDataArrays(null,null,null,o,null,null,void 0,void 0,void 0,void 0,t);let l,c=s?4:3;l=new Int32Array(i*c);for(let d=0;d<i;d++){for(let u=0;u<3;u++)l[d*c+u]=Math.round(o[d*3+u]*1e3);s&&(l[d*c+3]=1e3)}return l}getFloatCenters(t,n,s=!1){const i=n-t+1,o=new Float32Array(i*3);if(this.fillSplatDataArrays(null,null,null,o,null,null,void 0,void 0,void 0,void 0,t),!s)return o;let l=new Float32Array(i*4);for(let c=0;c<i;c++){for(let d=0;d<3;d++)l[c*4+d]=o[c*3+d];l[c*4+3]=1}return l}getSceneTransform(t,n){const s=this.getScene(t);s.updateTransform(this.dynamicMode),n.copy(s.transform)}getScene(t){if(t<0||t>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[t]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).splatBuffer}getSceneIndexForSplat(t){return this.globalSplatIndexToSceneIndexMap[t]}getSceneTransformForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).transform}getSplatLocalIndex(t){return this.globalSplatIndexToLocalSplatIndexMap[t]}static getIntegerMatrixArray(t){const n=t.elements,s=[];for(let i=0;i<16;i++)s[i]=Math.round(n[i]*1e3);return s}computeBoundingBox(t=!1,n){let s=this.getSplatCount();if(n!=null){if(n<0||n>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");s=this.scenes[n].splatBuffer.getSplatCount()}const i=new Float32Array(s*3);this.fillSplatDataArrays(null,null,null,i,null,null,t,void 0,void 0,void 0,void 0,n);const o=new k,l=new k;for(let c=0;c<s;c++){const d=c*3,u=i[d],h=i[d+1],p=i[d+2];(c===0||u<o.x)&&(o.x=u),(c===0||h<o.y)&&(o.y=h),(c===0||p<o.z)&&(o.z=p),(c===0||u>l.x)&&(l.x=u),(c===0||h>l.y)&&(l.y=h),(c===0||p>l.z)&&(l.z=p)}return new Tn(o,l)}}var Mb="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",$c="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",Eb="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",Tb="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function Rb(r){let e,t,n,s,i,o,l,c,d,u,h,p,f,g,y,x,m,v,S,b;function _(M,w,T,C,A,R,D){const I=performance.now();if(!n&&(new Uint32Array(t,l,A.byteLength/b.BytesPerInt).set(A),new Float32Array(t,u,D.byteLength/b.BytesPerFloat).set(D),C)){let z;s?z=new Int32Array(t,h,R.byteLength/b.BytesPerInt):z=new Float32Array(t,h,R.byteLength/b.BytesPerFloat),z.set(R)}x||(x=new Uint32Array(v)),new Float32Array(t,y,16).set(T),new Uint32Array(t,f,v).set(x),e.exports.sortIndexes(l,g,h,p,f,y,c,d,u,v,M,w,o,C,s,i);const U={sortDone:!0,splatSortCount:M,splatRenderCount:w,sortTime:0};if(!n){const P=new Uint32Array(t,c,w);(!m||m.length<w)&&(m=new Uint32Array(w)),m.set(P),U.sortedIndexes=m}const j=performance.now();U.sortTime=j-I,r.postMessage(U)}r.onmessage=M=>{if(M.data.centers)centers=M.data.centers,sceneIndexes=M.data.sceneIndexes,s?new Int32Array(t,g+M.data.range.from*b.BytesPerInt*4,M.data.range.count*4).set(new Int32Array(centers)):new Float32Array(t,g+M.data.range.from*b.BytesPerFloat*4,M.data.range.count*4).set(new Float32Array(centers)),i&&new Uint32Array(t,d+M.data.range.from*4,M.data.range.count).set(new Uint32Array(sceneIndexes)),S=M.data.range.from+M.data.range.count;else if(M.data.sort){const w=Math.min(M.data.sort.splatRenderCount||0,S),T=Math.min(M.data.sort.splatSortCount||0,S),C=M.data.sort.usePrecomputedDistances;let A,R,D;n||(A=M.data.sort.indexesToSort,D=M.data.sort.transforms,C&&(R=M.data.sort.precomputedDistances)),_(T,w,M.data.sort.modelViewProj,C,A,R,D)}else if(M.data.init){b=M.data.init.Constants,o=M.data.init.splatCount,n=M.data.init.useSharedMemory,s=M.data.init.integerBasedSort,i=M.data.init.dynamicMode,v=M.data.init.distanceMapRange,S=0;const w=s?b.BytesPerInt*4:b.BytesPerFloat*4,T=new Uint8Array(M.data.init.sorterWasmBytes),C=16*b.BytesPerFloat,A=o*b.BytesPerInt,R=o*w,D=C,I=s?o*b.BytesPerInt:o*b.BytesPerFloat,U=o*b.BytesPerInt,j=o*b.BytesPerInt,P=s?v*b.BytesPerInt*2:v*b.BytesPerFloat*2,X=i?o*b.BytesPerInt:0,z=i?b.MaxScenes*C:0,Q=b.MemoryPageSize*32,ie=A+R+D+I+U+P+j+X+z+Q,q=Math.floor(ie/b.MemoryPageSize)+1,pe={module:{},env:{memory:new WebAssembly.Memory({initial:q,maximum:q,shared:!0})}};WebAssembly.compile(T).then(Te=>WebAssembly.instantiate(Te,pe)).then(Te=>{e=Te,l=0,g=l+A,y=g+R,h=y+D,p=h+I,f=p+U,c=f+P,d=c+j,u=d+X,t=pe.env.memory.buffer,n?r.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:t,indexesToSortOffset:l,sortedIndexesBuffer:t,sortedIndexesOffset:c,precomputedDistancesBuffer:t,precomputedDistancesOffset:h,transformsBuffer:t,transformsOffset:u}):r.postMessage({sortSetupPhase1Complete:!0})})}}}function Nb(r,e,t,n,s,i=nt.DefaultSplatSortDistanceMapPrecision){const o=new Worker(URL.createObjectURL(new Blob(["(",Rb.toString(),")(self)"],{type:"application/javascript"})));let l=Mb;const c=il()?$d():null;!t&&!e?(l=$c,c&&c.major<=16&&c.minor<4&&(l=Tb)):t?e||c&&c.major<=16&&c.minor<4&&(l=Eb):l=$c;const d=atob(l),u=new Uint8Array(d.length);for(let h=0;h<d.length;h++)u[h]=d.charCodeAt(h);return o.postMessage({init:{sorterWasmBytes:u.buffer,splatCount:r,useSharedMemory:e,integerBasedSort:n,dynamicMode:s,distanceMapRange:1<<i,Constants:{BytesPerFloat:nt.BytesPerFloat,BytesPerInt:nt.BytesPerInt,MemoryPageSize:nt.MemoryPageSize,MaxScenes:nt.MaxScenes}}}),o}const gs={None:0,VR:1,AR:2};class hi{static createButton(e,t={}){const n=document.createElement("button");function s(){let d=null;async function u(f){f.addEventListener("end",h),await e.xr.setSession(f),n.textContent="EXIT VR",d=f}function h(){d.removeEventListener("end",h),n.textContent="ENTER VR",d=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const p={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){d===null?navigator.xr.requestSession("immersive-vr",p).then(u):(d.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",p).then(u).catch(f=>{console.warn(f)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",p).then(u).catch(f=>{console.warn(f)})}function i(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){i(),n.textContent="VR NOT SUPPORTED"}function l(d){i(),console.warn("Exception when trying to call xr.isSessionSupported",d),n.textContent="VR NOT ALLOWED"}function c(d){d.style.position="absolute",d.style.bottom="20px",d.style.padding="12px 6px",d.style.border="1px solid #fff",d.style.borderRadius="4px",d.style.background="rgba(0,0,0,0.1)",d.style.color="#fff",d.style.font="normal 13px sans-serif",d.style.textAlign="center",d.style.opacity="0.5",d.style.outline="none",d.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",c(n),navigator.xr.isSessionSupported("immersive-vr").then(function(d){d?s():o(),d&&hi.xrSessionIsGranted&&n.click()}).catch(l),n;{const d=document.createElement("a");return window.isSecureContext===!1?(d.href=document.location.href.replace(/^http:/,"https:"),d.innerHTML="WEBXR NEEDS HTTPS"):(d.href="https://immersiveweb.dev/",d.innerHTML="WEBXR NOT AVAILABLE"),d.style.left="calc(50% - 90px)",d.style.width="180px",d.style.textDecoration="none",c(d),d}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{hi.xrSessionIsGranted=!0})}}}hi.xrSessionIsGranted=!1;hi.registerSessionGrantedListener();class Ib{static createButton(e,t={}){const n=document.createElement("button");function s(){if(t.domOverlay===void 0){const p=document.createElement("div");p.style.display="none",document.body.appendChild(p);const f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("width",38),f.setAttribute("height",38),f.style.position="absolute",f.style.right="20px",f.style.top="20px",f.addEventListener("click",function(){d.end()}),p.appendChild(f);const g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),g.setAttribute("stroke","#fff"),g.setAttribute("stroke-width",2),f.appendChild(g),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:p}}let d=null;async function u(p){p.addEventListener("end",h),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(p),n.textContent="STOP AR",t.domOverlay.root.style.display="",d=p}function h(){d.removeEventListener("end",h),n.textContent="START AR",t.domOverlay.root.style.display="none",d=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){d===null?navigator.xr.requestSession("immersive-ar",t).then(u):(d.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(p=>{console.warn(p)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(p=>{console.warn(p)})}function i(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){i(),n.textContent="AR NOT SUPPORTED"}function l(d){i(),console.warn("Exception when trying to call xr.isSessionSupported",d),n.textContent="AR NOT ALLOWED"}function c(d){d.style.position="absolute",d.style.bottom="20px",d.style.padding="12px 6px",d.style.border="1px solid #fff",d.style.borderRadius="4px",d.style.background="rgba(0,0,0,0.1)",d.style.color="#fff",d.style.font="normal 13px sans-serif",d.style.textAlign="center",d.style.opacity="0.5",d.style.outline="none",d.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",c(n),navigator.xr.isSessionSupported("immersive-ar").then(function(d){d?s():o()}).catch(l),n;{const d=document.createElement("a");return window.isSecureContext===!1?(d.href=document.location.href.replace(/^http:/,"https:"),d.innerHTML="WEBXR NEEDS HTTPS"):(d.href="https://immersiveweb.dev/",d.innerHTML="WEBXR NOT AVAILABLE"),d.style.left="calc(50% - 90px)",d.style.width="180px",d.style.textDecoration="none",c(d),d}}}const Ir={Always:0,OnChange:1,Never:2},Db=50,Pb=.75,Fb=15e5,kb=10,Bb=2.5,Lb=60,bs=class bs{constructor(e={}){fe(this,"onKeyDown",(function(){return new k,new Ke,new Ke,function(e){}})());fe(this,"onMouseUp",(function(){const e=new Be;return function(t){e.copy(this.mousePosition).sub(this.mouseDownPosition),Qs()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(t)}})());fe(this,"checkForFocalPointChange",(function(){const e=new Be,t=new k,n=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),n.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,n),n.length>0)){const i=n[0].origin;t.copy(i).sub(this.camera.position),t.length()>Pb&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(i),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=Qs())}}})());fe(this,"updateSplatMesh",(function(){const e=new Be;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);const n=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,s=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,i=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,o=this.focalAdjustment*i,l=1/o;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,n*o,s*o,this.camera.isOrthographicCamera,this.camera.zoom||1,l)}}})());fe(this,"addSplatBuffers",(function(){return function(e,t=[],n=!0,s=!0,i=!0,o=!1,l=!1,c=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let d=null;const u=()=>{d!==null&&(this.loadingSpinner.removeTask(d),d=null)};return this.splatRenderReady=!1,new Promise(h=>{s&&(d=this.loadingSpinner.addTask("Processing splats...")),en(()=>{if(this.isDisposingOrDisposed())h();else{const p=this.addSplatBuffersToMesh(e,t,n,i,o,c),f=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==f&&this.disposeSortWorker(),this.gpuAcceleratedSort||this.preSortMessages.push({centers:p.centers.buffer,sceneIndexes:p.sceneIndexes.buffer,range:{from:p.from,to:p.to,count:p.count}}),(!this.sortWorker&&f>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||this.runSplatSort(!0,!0).then(y=>{!this.sortWorker||!y?(this.splatRenderReady=!0,u(),h()):(l?this.splatRenderReady=!0:this.runAfterNextSort.push(()=>{this.splatRenderReady=!0}),this.runAfterNextSort.push(()=>{u(),h()}))})})}},!0)})}})());fe(this,"addSplatBuffersToMesh",(function(){let e;return function(t,n,s=!0,i=!1,o=!1,l=!0){if(this.isDisposingOrDisposed())return;let c=[],d=[];o||(c=this.splatMesh.scenes.map(f=>f.splatBuffer)||[],d=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(f=>f):[]),c.push(...t),d.push(...n),this.renderer&&this.splatMesh.setRenderer(this.renderer);const u=f=>{if(this.isDisposingOrDisposed())return;const g=this.splatMesh.getSplatCount();i&&g>=Fb&&!f&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},h=f=>{this.isDisposingOrDisposed()||f&&e&&(this.loadingSpinner.removeTask(e),e=null)},p=this.splatMesh.build(c,d,!0,s,u,h,l);return s&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),p}})());fe(this,"shouldRender",(function(){let e=0;const t=new k,n=new vt,s=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let i=!1,o=!1;if(this.camera){const l=this.camera.position,c=this.camera.quaternion;o=Math.abs(l.x-t.x)>s||Math.abs(l.y-t.y)>s||Math.abs(l.z-t.z)>s||Math.abs(c.x-n.x)>s||Math.abs(c.y-n.y)>s||Math.abs(c.z-n.z)>s||Math.abs(c.w-n.w)>s}return i=this.renderMode!==Ir.Never&&(e===0||this.splatMesh.visibleRegionChanging||o||this.renderMode===Ir.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(t.copy(this.camera.position),n.copy(this.camera.quaternion)),e++,i}})());fe(this,"render",(function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const e=n=>{for(let s of n.children)if(s.visible)return!0;return!1},t=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=t}})());fe(this,"updateFPS",(function(){let e=Qs(),t=0;return function(){if(this.consecutiveRenderFrames>Lb){const n=Qs();n-e>=1?(this.currentFPS=t,t=0,e=n):t++}else this.currentFPS=null}})());fe(this,"updateForRendererSizeChanges",(function(){const e=new Be,t=new Be;let n;return function(){this.usingExternalCamera||(this.renderer.getSize(t),(n===void 0||n!==this.camera.isOrthographicCamera||t.x!==e.x||t.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-t.x/2,this.camera.right=t.x/2,this.camera.top=t.y/2,this.camera.bottom=-t.y/2):this.camera.aspect=t.x/t.y,this.camera.updateProjectionMatrix(),e.copy(t),n=this.camera.isOrthographicCamera))}})());fe(this,"timingSensitiveUpdates",(function(){let e;return function(){const t=Qs();e||(e=t);const n=t-e;this.updateCameraTransition(t),this.updateFocusMarker(n),e=t}})());fe(this,"updateCameraTransition",(function(){let e=new k,t=new k,n=new k;return function(s){if(this.transitioningCameraTarget){t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),n.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const i=Math.acos(t.dot(n)),l=(i/(Math.PI/3)*.65+.3)/i*(s-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,l),this.camera.lookAt(e),this.controls.target.copy(e),l>=1&&(this.transitioningCameraTarget=!1)}}})());fe(this,"updateFocusMarker",(function(){const e=new Be;let t=!1;return function(n){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);const s=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let i=Math.min(s+kb*n,1);this.sceneHelper.setFocusMarkerOpacity(i),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),t=!0,this.forceRenderNextFrame()}else{let s;if(t?s=1:s=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),s>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let i=Math.max(s-Bb*n,0);this.sceneHelper.setFocusMarkerOpacity(i),i===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}s>0&&this.forceRenderNextFrame(),t=!1}}})());fe(this,"updateMeshCursor",(function(){const e=[],t=new Be;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(t),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,t),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}})());fe(this,"updateInfoPanel",(function(){const e=new Be;return function(){if(!this.showInfo)return;const t=this.splatMesh.getSplatCount();this.getRenderDimensions(e);const n=this.controls?this.controls.target:null,s=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,i=t>0?this.splatRenderCount/t*100:0;this.infoPanel.update(e,this.camera.position,n,this.camera.up,this.camera.isOrthographicCamera,s,this.currentFPS||"N/A",t,this.splatRenderCount,i,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}})());fe(this,"runSplatSort",(function(){const e=new Ke,t=[],n=new k(0,0,-1),s=new k(0,0,-1),i=new k,o=new k,l=[],c=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(d=!1,u=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let h=0,p=0,f=!1,g=!1;if(s.set(0,0,-1).applyQuaternion(this.camera.quaternion),h=s.dot(n),p=o.copy(this.camera.position).sub(i).length(),!d&&!this.splatMesh.dynamicMode&&l.length===0&&(h<=.99&&(f=!0),p>=1&&(g=!0),!f&&!g))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:y,shouldSortAll:x}=this.gatherSceneNodesForSort();x=x||u,this.splatRenderCount=y,e.copy(this.camera.matrixWorld).invert();const m=this.perspectiveCamera||this.camera;e.premultiply(m.projectionMatrix),this.splatMesh.dynamicMode||e.multiply(this.splatMesh.matrixWorld);let v=Promise.resolve(!0);return this.gpuAcceleratedSort&&(l.length<=1||l.length%2===0)&&(v=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),v.then(()=>{if(l.length===0)if(this.splatMesh.dynamicMode||x)l.push(this.splatRenderCount);else{for(let _ of c)if(h<_.angleThreshold){for(let M of _.sortFractions)l.push(Math.floor(this.splatRenderCount*M));break}l.push(this.splatRenderCount)}let S=Math.min(l.shift(),this.splatRenderCount);this.splatSortCount=S,t[0]=this.camera.position.x,t[1]=this.camera.position.y,t[2]=this.camera.position.z;const b={modelViewProj:e.elements,cameraPosition:t,splatRenderCount:this.splatRenderCount,splatSortCount:S,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(b.indexesToSort=this.sortWorkerIndexesToSort,b.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(b.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(_=>{this.sortPromiseResolver=_}),this.preSortMessages.length>0&&(this.preSortMessages.forEach(_=>{this.sortWorker.postMessage(_)}),this.preSortMessages=[]),this.sortWorker.postMessage({sort:b}),l.length===0&&(i.copy(this.camera.position),n.copy(s)),!0}),v}})());fe(this,"gatherSceneNodesForSort",(function(){const e=[];let t=null;const n=new k,s=new k,i=new k,o=new Ke,l=new Ke,c=new Ke,d=new k,u=new k(0,0,-1),h=new k,p=f=>h.copy(f.max).sub(f.min).length();return function(f=!1){this.getRenderDimensions(d);const g=d.y/2/Math.tan(this.camera.fov/2*Id.DEG2RAD),y=Math.atan(d.x/2/g),x=Math.atan(d.y/2/g),m=Math.cos(y),v=Math.cos(x),S=this.splatMesh.getSplatTree();if(S){l.copy(this.camera.matrixWorld).invert(),this.splatMesh.dynamicMode||l.multiply(this.splatMesh.matrixWorld);let b=0,_=0;for(let w=0;w<S.subTrees.length;w++){const T=S.subTrees[w];o.copy(l),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(w,c),o.multiply(c));const C=T.nodesWithIndexes.length;for(let A=0;A<C;A++){const R=T.nodesWithIndexes[A];if(!R.data||!R.data.indexes||R.data.indexes.length===0)continue;i.copy(R.center).applyMatrix4(o);const D=i.length();i.normalize(),n.copy(i).setX(0).normalize(),s.copy(i).setY(0).normalize();const I=u.dot(s),U=u.dot(n),j=p(R),P=U<v-.6,X=I<m-.6;!f&&(X||P)&&D>j||(_+=R.data.indexes.length,e[b]=R,R.data.distanceToNode=D,b++)}}e.length=b,e.sort((w,T)=>w.data.distanceToNode<T.data.distanceToNode?-1:1);let M=_*nt.BytesPerInt;for(let w=0;w<b;w++){const T=e[w],C=T.data.indexes.length,A=C*nt.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,M-A,C).set(T.data.indexes),M-=A}return{splatRenderCount:_,shouldSortAll:!1}}else{const b=this.splatMesh.getSplatCount();if(!t||t.length!==b){t=new Uint32Array(b);for(let _=0;_<b;_++)t[_]=_}return this.sortWorkerIndexesToSort.set(t),{splatRenderCount:b,shouldSortAll:!0}}}})());if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new k().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new k().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new k().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio||1,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.kernel2DSize=e.kernel2DSize===void 0?.3:e.kernel2DSize,this.webXRMode=e.webXRMode||gs.None,this.webXRMode!==gs.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||Ir.Always,this.sceneRevealMode=e.sceneRevealMode||si.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||Ms.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,il()){const n=$d();n.major<17&&(this.enableSIMDInSort=!1),n.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=wn.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||nt.DefaultSplatSortDistanceMapPrecision;const t=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=yt(this.splatSortDistanceMapPrecision,10,t),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortMessages=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new cb,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new k,this.nextCameraTarget=new k,this.mousePosition=new Be,this.mouseDownPosition=new Be,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new zo(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new sb(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new ib(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new kt(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier,this.kernel2DSize),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new dm,this.sceneHelper=new Ri(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){const e=new Be;this.getRenderDimensions(e),this.perspectiveCamera=new dn(Db,e.x/e.y,.1,1e3),this.orthographicCamera=new tl(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const e=new Be;this.getRenderDimensions(e),this.renderer=new ev({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new rt(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===gs.VR?this.rootElement.appendChild(hi.createButton(this.renderer,e)):this.webXRMode===gs.AR&&this.rootElement.appendChild(Ib.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",t=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",t=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===gs.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new Ci(this.camera,this.renderer.domElement):this.perspectiveControls=new Ci(this.camera,this.renderer.domElement):(this.perspectiveControls=new Ci(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new Ci(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===gs.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=Qs()}onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY)}getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;const t=this.camera,n=e?this.orthographicCamera:this.perspectiveCamera;if(n.position.copy(t.position),n.up.copy(t.up),n.rotation.copy(t.rotation),n.quaternion.copy(t.quaternion),n.matrix.copy(t.matrix),this.camera=n,this.controls){const s=l=>{l.saveState(),l.reset()},i=this.controls,o=e?this.orthographicControls:this.perspectiveControls;s(o),s(i),o.target.copy(i.target),e?bs.setCameraZoomFromPosition(n,t,i):bs.setCameraPositionFromZoom(n,t,o),this.controls=o,this.camera.lookAt(this.controls.target)}}adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){const n=this.renderer.xr.getCamera().projectionMatrix.elements[0],s=this.camera.projectionMatrix.elements[0];e.x*=s/n}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,t={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");t.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),t.progressiveLoad=!1);const n=t.format!==void 0&&t.format!==null?t.format:jo(e),s=bs.isProgressivelyLoadable(n)&&t.progressiveLoad,i=t.showLoadingUI!==void 0&&t.showLoadingUI!==null?t.showLoadingUI:!0;let o=null;i&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));const l=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},c=(y,x,m)=>{if(i)if(m===Tt.Downloading)if(y==100)this.loadingSpinner.setMessageForTask(o,"Download complete!");else if(s)this.loadingSpinner.setMessageForTask(o,"Downloading splats...");else{const v=x?`: ${x}`:"...";this.loadingSpinner.setMessageForTask(o,`Downloading${v}`)}else m===Tt.Processing&&this.loadingSpinner.setMessageForTask(o,"Processing splats...")};let d=!1,u=0;const h=(y,x)=>{i&&((y&&s||x&&!s)&&(this.loadingSpinner.removeTask(o),!x&&!d&&this.loadingProgressBar.show()),s&&(x?(d=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(u)))},p=(y,x,m)=>{u=y,c(y,x,m),t.onProgress&&t.onProgress(y,x,m)},f=(y,x,m)=>{!s&&t.onProgress&&t.onProgress(0,"0%",Tt.Processing);const v={rotation:t.rotation||t.orientation,position:t.position,scale:t.scale,splatAlphaRemovalThreshold:t.splatAlphaRemovalThreshold};return this.addSplatBuffers([y],[v],m,x&&i,i,s,s).then(()=>{!s&&t.onProgress&&t.onProgress(100,"100%",Tt.Processing),h(x,m)})};return(s?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,n,t.splatAlphaRemovalThreshold,f.bind(this),p,l.bind(this),t.headers)}downloadAndBuildSingleSplatSceneStandardLoad(e,t,n,s,i,o,l){const c=this.downloadSplatSceneToSplatBuffer(e,n,i,!1,void 0,t,l),d=Ua(c.abortHandler);return c.then(u=>(this.removeSplatSceneDownloadPromise(c),s(u,!0,!0).then(()=>{d.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(u=>{o&&o(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(c),d.reject(this.updateError(u,`Viewer::addSplatScene -> Could not load file ${e}`))}),this.addSplatSceneDownloadPromise(c),this.setSplatSceneDownloadAndBuildPromise(d.promise),d.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,t,n,s,i,o,l){let c=0,d=!1;const u=[],h=()=>{if(u.length>0&&!d&&!this.isDisposingOrDisposed()){d=!0;const x=u.shift();s(x.splatBuffer,x.firstBuild,x.finalBuild).then(()=>{d=!1,x.firstBuild?g.resolve():x.finalBuild&&(y.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),u.length>0&&en(()=>h())})}},p=(x,m)=>{this.isDisposingOrDisposed()||(m||u.length===0||x.getSplatCount()>u[0].splatBuffer.getSplatCount())&&(u.push({splatBuffer:x,firstBuild:c===0,finalBuild:m}),c++,h())},f=this.downloadSplatSceneToSplatBuffer(e,n,i,!0,p,t,l),g=Ua(f.abortHandler),y=Ua();return this.addSplatSceneDownloadPromise(f),this.setSplatSceneDownloadAndBuildPromise(y.promise),f.then(()=>{this.removeSplatSceneDownloadPromise(f)}).catch(x=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(f);const m=this.updateError(x,"Viewer::addSplatScene -> Could not load one or more scenes");g.reject(m),o&&o(m)}),g.promise}addSplatScenes(e,t=!0,n=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");const s=e.length,i=[];let o;t&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));const l=(h,p,f,g)=>{i[h]=p;let y=0;for(let x=0;x<s;x++)y+=i[x]||0;y=y/s,f=`${y.toFixed(2)}%`,t&&g===Tt.Downloading&&this.loadingSpinner.setMessageForTask(o,y==100?"Download complete!":`Downloading: ${f}`),n&&n(y,f,g)},c=[],d=[];for(let h=0;h<e.length;h++){const p=e[h],f=p.format!==void 0&&p.format!==null?p.format:jo(p.path),g=this.downloadSplatSceneToSplatBuffer(p.path,p.splatAlphaRemovalThreshold,l.bind(this,h),!1,void 0,f,p.headers);c.push(g),d.push(g.promise)}const u=new ui((h,p)=>{Promise.all(d).then(f=>{t&&this.loadingSpinner.removeTask(o),n&&n(0,"0%",Tt.Processing),this.addSplatBuffers(f,e,!0,t,t,!1,!1).then(()=>{n&&n(100,"100%",Tt.Processing),this.clearSplatSceneDownloadAndBuildPromise(),h()})}).catch(f=>{t&&this.loadingSpinner.removeTask(o),this.clearSplatSceneDownloadAndBuildPromise(),p(this.updateError(f,"Viewer::addSplatScenes -> Could not load one or more splat scenes."))}).finally(()=>{this.removeSplatSceneDownloadPromise(u)})},h=>{for(let p of c)p.abort(h)});return this.addSplatSceneDownloadPromise(u),this.setSplatSceneDownloadAndBuildPromise(u),u}downloadSplatSceneToSplatBuffer(e,t=1,n=void 0,s=!1,i=void 0,o,l){try{if(o===jt.Splat||o===jt.KSplat||o===jt.Ply){const c=s?!1:this.optimizeSplatData;if(o===jt.Splat)return sa.loadFromURL(e,n,s,i,t,this.inMemoryCompressionLevel,c,l);if(o===jt.KSplat)return Or.loadFromURL(e,n,s,i,l);if(o===jt.Ply)return ta.loadFromURL(e,n,s,i,t,this.inMemoryCompressionLevel,c,this.sphericalHarmonicsDegree,l)}else if(o===jt.Spz)return na.loadFromURL(e,n,t,this.inMemoryCompressionLevel,this.optimizeSplatData,this.sphericalHarmonicsDegree,l)}catch(c){throw this.updateError(c,null)}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===jt.Splat||e===jt.KSplat||e===jt.Ply}setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(t=>{const n=this.integerBasedSort?Int32Array:Float32Array,s=e.getSplatCount(),i=e.getMaxSplatCount();this.sortWorker=Nb(i,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=o=>{if(o.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,o.data.splatRenderCount);else{const l=new Uint32Array(o.data.sortedIndexes.buffer,0,o.data.splatRenderCount);this.splatMesh.updateRenderIndexes(l,o.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=o.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(l=>{l()}),this.runAfterNextSort.length=0)}else if(o.data.sortCanceled)this.sortRunning=!1;else if(o.data.sortSetupPhase1Complete){this.logLevel>=Ms.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(o.data.sortedIndexesBuffer,o.data.sortedIndexesOffset,i),this.sortWorkerIndexesToSort=new Uint32Array(o.data.indexesToSortBuffer,o.data.indexesToSortOffset,i),this.sortWorkerPrecomputedDistances=new n(o.data.precomputedDistancesBuffer,o.data.precomputedDistancesOffset,i),this.sortWorkerTransforms=new Float32Array(o.data.transformsBuffer,o.data.transformsOffset,nt.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(i),this.sortWorkerPrecomputedDistances=new n(i),this.sortWorkerTransforms=new Float32Array(nt.MaxScenes*16));for(let l=0;l<s;l++)this.sortWorkerIndexesToSort[l]=l;if(this.sortWorker.maxSplatCount=i,this.logLevel>=Ms.Info){console.log("Sorting web worker ready.");const l=this.splatMesh.getSplatDataTextures(),c=l.covariances.size,d=l.centerColors.size;console.log("Covariances texture size: "+c.x+" x "+c.y),console.log("Centers/colors texture size: "+d.x+" x "+d.y)}t()}}})}updateError(e,t){return e instanceof Kd?e:e instanceof Ur?new Error("File type or server does not support progressive loading."):t?new Error(t):e}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.preSortMessages=[],this.sortRunning=!1}removeSplatScene(e,t=!0){return this.removeSplatScenes([e],t)}removeSplatScenes(e,t=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let n;return this.splatSceneRemovalPromise=new Promise((s,i)=>{let o;t&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),o=this.loadingSpinner.addTask("Removing splat scene..."));const l=()=>{t&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(o))},c=u=>{l(),this.splatSceneRemovalPromise=null,u?i(u):s()},d=()=>this.isDisposingOrDisposed()?(c(),!0):!1;n=this.sortPromise||Promise.resolve(),n.then(()=>{if(d())return;const u=[],h=[],p=[];for(let f=0;f<this.splatMesh.scenes.length;f++){let g=!1;for(let y of e)if(y===f){g=!0;break}if(!g){const y=this.splatMesh.scenes[f];u.push(y.splatBuffer),h.push(this.splatMesh.sceneOptions[f]),p.push({position:y.position.clone(),quaternion:y.quaternion.clone(),scale:y.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=si.Instant,this.createSplatMesh(),this.addSplatBuffers(u,h,!0,!1,!0).then(()=>{d()||(l(),this.splatMesh.scenes.forEach((f,g)=>{f.position.copy(p[g].position),f.quaternion.copy(p[g].quaternion),f.scale.copy(p[g].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(d()){this.splatRenderReady=!0;return}n=this.sortPromise||Promise.resolve(),n.then(()=>{this.splatRenderReady=!0,c()})}))}).catch(f=>{c(f)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],t=[];for(let n in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(n)){const s=this.splatSceneDownloadPromises[n];t.push(s),e.push(s.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),t.forEach(n=>{n.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}update(e,t){this.dropInMode&&this.updateForDropInMode(e,t),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&this.controls.update(),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,t){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=t,this.controls&&(this.controls.object=t),this.init()}updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}};fe(bs,"setCameraPositionFromZoom",(function(){})()),fe(bs,"setCameraZoomFromPosition",(function(){})());let Hr=bs;class Vr extends _i{constructor(e={}){super(),e.selfDrivenMode=!1,e.useBuiltInControls=!1,e.rootElement=null,e.dropInMode=!0,e.camera=void 0,e.renderer=void 0,this.viewer=new Hr(e),this.splatMesh=null,this.updateSplatMesh(),this.callbackMesh=Vr.createCallbackMesh(),this.add(this.callbackMesh),this.callbackMesh.onBeforeRender=Vr.onBeforeRender.bind(this,this.viewer),this.viewer.onSplatMeshChanged(()=>{this.updateSplatMesh()})}updateSplatMesh(){this.splatMesh!==this.viewer.splatMesh&&(this.splatMesh&&this.remove(this.splatMesh),this.splatMesh=this.viewer.splatMesh,this.add(this.viewer.splatMesh))}addSplatScene(e,t={}){return t.showLoadingUI!==!1&&(t.showLoadingUI=!0),this.viewer.addSplatScene(e,t)}addSplatScenes(e,t){return t!==!1&&(t=!0),this.viewer.addSplatScenes(e,t)}getSplatScene(e){return this.viewer.getSplatScene(e)}removeSplatScene(e,t=!0){return this.viewer.removeSplatScene(e,t)}removeSplatScenes(e,t=!0){return this.viewer.removeSplatScenes(e,t)}getSceneCount(){return this.viewer.getSceneCount()}setActiveSphericalHarmonicsDegrees(e){this.viewer.setActiveSphericalHarmonicsDegrees(e)}async dispose(){return await this.viewer.dispose()}static onBeforeRender(e,t,n,s){e.update(t,s)}static createCallbackMesh(){const e=new Hi(1,8,8),t=new as;t.colorWrite=!1,t.depthWrite=!1;const n=new Mt(e,t);return n.frustumCulled=!1,n}}const Ub=Object.freeze(Object.defineProperty({__proto__:null,AbortablePromise:ui,DropInViewer:Vr,KSplatLoader:Or,LoaderUtils:Jv,LogLevel:Ms,OrbitControls:Ci,PlayCanvasCompressedPlyParser:Cn,PlyLoader:ta,PlyParser:Oo,RenderMode:Ir,SceneFormat:jt,SceneRevealMode:si,SplatBuffer:Ie,SplatBufferGenerator:gi,SplatLoader:sa,SplatParser:ts,SplatPartitioner:ea,SplatRenderMode:wn,SpzLoader:na,Viewer:Hr,WebXRMode:gs},Symbol.toStringTag,{value:"Module"})),Ob=Ub,ru=J.forwardRef(({splatPath:r,sceneSettings:e={},viewerSettings:t={},className:n,style:s,onReady:i,onError:o,showLoading:l=!0,loadingComponent:c,width:d="100%",height:u="100%",fullScreen:h=!1},p)=>{const f=J.useRef(null),g=J.useRef(null),[y,x]=J.useState(!0),[m,v]=J.useState(null),[S,b]=J.useState(null),_={position:[0,0,0],scale:[-1,-1,1],progressiveLoad:!0,...e},M={initialCameraPosition:[2.77115,1.82021,1.46102],initialCameraLookAt:[1.18836,1.65911,1.26514],...t};J.useImperativeHandle(p,()=>({getViewer:()=>g.current,start:()=>{g.current&&g.current.start()},stop:()=>{g.current&&g.current.stop()},dispose:()=>{g.current&&(g.current.dispose(),g.current=null)},setControlsEnabled:A=>{g.current&&g.current.controls&&(g.current.controls.enabled=A)},setZoomEnabled:A=>{g.current&&g.current.controls&&(g.current.controls.enableZoom=A)},setRotateEnabled:A=>{g.current&&g.current.controls&&(g.current.controls.enableRotate=A)},setPanEnabled:A=>{g.current&&g.current.controls&&(g.current.controls.enablePan=A)},setDampingEnabled:A=>{g.current&&g.current.controls&&(g.current.controls.enableDamping=A)},setDampingFactor:A=>{g.current&&g.current.controls&&(g.current.controls.dampingFactor=A)},setRotateSpeed:A=>{g.current&&g.current.controls&&(g.current.controls.rotateSpeed=A)},setPanSpeed:A=>{g.current&&g.current.controls&&(g.current.controls.panSpeed=A)},setZoomSpeed:A=>{g.current&&g.current.controls&&(g.current.controls.zoomSpeed=A)},setDistanceLimits:(A,R)=>{g.current&&g.current.controls&&(g.current.controls.minDistance=A,g.current.controls.maxDistance=R)},setZoomLimits:(A,R)=>{g.current&&g.current.controls&&(g.current.controls.minZoom=A,g.current.controls.maxZoom=R)},setPolarAngleLimits:(A,R)=>{g.current&&g.current.controls&&(g.current.controls.minPolarAngle=A,g.current.controls.maxPolarAngle=R)},setAzimuthAngleLimits:(A,R)=>{g.current&&g.current.controls&&(g.current.controls.minAzimuthAngle=A,g.current.controls.maxAzimuthAngle=R)},setAutoRotate:(A,R)=>{g.current&&g.current.controls&&(g.current.controls.autoRotate=A,R!==void 0&&(g.current.controls.autoRotateSpeed=R))},resetControls:()=>{g.current&&g.current.controls&&g.current.controls.reset()},setHotkeysEnabled:A=>{g.current&&(g.current.hotkeysEnabled=A)},setHotkeyEnabled:(A,R)=>{if(g.current&&S){const D={...S};D.hotkeys&&(D.hotkeys[A]=R,b(D))}},toggleInfo:()=>{var A,R;g.current&&(g.current.showInfo=!g.current.showInfo,g.current.showInfo?(A=g.current.infoPanel)==null||A.show():(R=g.current.infoPanel)==null||R.hide())},toggleMeshCursor:()=>{g.current&&(g.current.showMeshCursor=!g.current.showMeshCursor)},toggleControlPlane:()=>{g.current&&(g.current.showControlPlane=!g.current.showControlPlane)},toggleOrthographic:()=>{g.current&&!g.current.usingExternalCamera&&g.current.setOrthographicMode(!g.current.camera.isOrthographicCamera)},togglePointCloud:()=>{var A,R;g.current&&!g.current.usingExternalCamera&&((R=g.current.splatMesh)==null||R.setPointCloudModeEnabled(!((A=g.current.splatMesh)!=null&&A.getPointCloudModeEnabled())))},adjustFocal:A=>{var R,D;g.current&&(g.current.focalAdjustment+=A,(D=(R=g.current).forceRenderNextFrame)==null||D.call(R))},adjustSplatScale:A=>{var R,D;if(g.current&&!g.current.usingExternalCamera){const I=((R=g.current.splatMesh)==null?void 0:R.getSplatScale())||1,U=Math.max(I+A,0);(D=g.current.splatMesh)==null||D.setSplatScale(U)}},setClickToFocusEnabled:A=>{g.current&&(g.current.enableClickToFocus=A)}})),J.useEffect(()=>f.current?((async()=>{try{x(!0),v(null);const R={...M,rootElement:f.current},D=new Ob.Viewer(R);if(g.current=D,R.controls&&D.controls){const I=R.controls;I.enabled!==void 0&&(D.controls.enabled=I.enabled),I.enableZoom!==void 0&&(D.controls.enableZoom=I.enableZoom),I.enableRotate!==void 0&&(D.controls.enableRotate=I.enableRotate),I.enablePan!==void 0&&(D.controls.enablePan=I.enablePan),I.enableDamping!==void 0&&(D.controls.enableDamping=I.enableDamping),I.dampingFactor!==void 0&&(D.controls.dampingFactor=I.dampingFactor),I.rotateSpeed!==void 0&&(D.controls.rotateSpeed=I.rotateSpeed),I.panSpeed!==void 0&&(D.controls.panSpeed=I.panSpeed),I.zoomSpeed!==void 0&&(D.controls.zoomSpeed=I.zoomSpeed),I.minDistance!==void 0&&(D.controls.minDistance=I.minDistance),I.maxDistance!==void 0&&(D.controls.maxDistance=I.maxDistance),I.minZoom!==void 0&&(D.controls.minZoom=I.minZoom),I.maxZoom!==void 0&&(D.controls.maxZoom=I.maxZoom),I.minPolarAngle!==void 0&&(D.controls.minPolarAngle=I.minPolarAngle),I.maxPolarAngle!==void 0&&(D.controls.maxPolarAngle=I.maxPolarAngle),I.minAzimuthAngle!==void 0&&(D.controls.minAzimuthAngle=I.minAzimuthAngle),I.maxAzimuthAngle!==void 0&&(D.controls.maxAzimuthAngle=I.maxAzimuthAngle),I.autoRotate!==void 0&&(D.controls.autoRotate=I.autoRotate),I.autoRotateSpeed!==void 0&&(D.controls.autoRotateSpeed=I.autoRotateSpeed),I.enableClickToFocus!==void 0?D.enableClickToFocus=I.enableClickToFocus:D.enableClickToFocus=!0,I.hotkeys&&(b(I.hotkeys),D.hotkeysEnabled=I.hotkeys.enabled!==!1)}await D.addSplatScene(r,_),D.start(),x(!1),i==null||i()}catch(R){const D=R instanceof Error?R.message:"Failed to load Gaussian Splats viewer";v(D),x(!1),o==null||o(R instanceof Error?R:new Error(D))}})(),()=>{g.current&&(g.current.dispose(),g.current=null)}):void 0,[r,JSON.stringify(_),JSON.stringify(M)]);const w={width:h?"100%":d,height:h?"100%":u,backgroundColor:"#000000",position:"relative",...s},T={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",fontSize:"16px",zIndex:10},C={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"red",fontSize:"16px",textAlign:"center",zIndex:10};return a.jsxs("div",{ref:f,className:n,style:w,children:[y&&l&&a.jsx("div",{style:T,children:c||"Loading 3D Scene..."}),m&&a.jsxs("div",{style:C,children:["Error: ",m]})]})});ru.displayName="GaussianSplatsViewer";const jb=({onNavigate:r})=>{const[e,t]=J.useState("overview"),[n,s]=J.useState("Task board"),[i,o]=J.useState(null),[l,c]=J.useState(null),[d,u]=J.useState([{id:1,type:"bot",message:"Hello Mike",timestamp:new Date},{id:2,type:"bot",message:"How may I help you today?",timestamp:new Date}]),[h,p]=J.useState(""),[f,g]=J.useState([]),[y,x]=J.useState(null),[m,v]=J.useState(null),[S,b]=J.useState(0),[_,M]=J.useState(0),[w,T]=J.useState({}),[C,A]=J.useState(!1),[R,D]=J.useState(!1),[I,U]=J.useState(null),j=pu.useRef(null),P={position:[0,0,0],scale:[-1,-1,1],progressiveLoad:!0},X={initialCameraPosition:[2.77115,1.82021,1.46102],initialCameraLookAt:[1.18836,1.65911,1.26514]},z=()=>{U("/assets/room.ksplat"),D(!0)},Q=()=>{A(!0),D(!1),console.log("Scene loaded successfully!")},ie=B=>{console.error("Error loading scene:",B),alert("Error loading scene: "+B.message),D(!1)};J.useEffect(()=>()=>{if(j.current)try{j.current.dispose()}catch(B){console.warn("Error disposing viewer:",B)}},[]),J.useEffect(()=>{const B=se=>{const ge=se.detail;ge.screen==="defect-management"&&(ge.activeTab&&s(ge.activeTab),ge.activeView&&t(ge.activeView),ge.loadScene&&!I&&!R&&z())};return window.addEventListener(bl,B),()=>{window.removeEventListener(bl,B)}},[R,I]);const[q,pe]=J.useState(!1),[Te,Se]=J.useState("sync"),[Fe,K]=J.useState(null),[te,me]=J.useState(!1),[we,xe]=J.useState(!1),[je,Ze]=J.useState(!1),L=async B=>{if(y&&m===B)y.pause(),v(null),b(0);else{y&&y.pause();const se=new Audio(B);if(se.addEventListener("loadedmetadata",()=>{M(se.duration)}),se.addEventListener("timeupdate",()=>{b(se.currentTime)}),se.addEventListener("ended",()=>{v(null),b(0)}),!w[B])try{const Ae=await(await fetch(B)).blob();T(ye=>({...ye,[B]:Ae}))}catch(ge){console.warn("Could not fetch audio blob:",ge)}se.play(),x(se),v(B)}},[He,Re]=J.useState(bf),Le=B=>{const se={...B,id:`defect-${Date.now()}`,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};Re(ge=>[se,...ge]),console.log("New defect added:",se)},Me=[{label:"Initiation",gradient:"linear-gradient(90deg, rgba(0,39,77,1) 0%, rgba(0,76,153,1) 100%)",isActive:!0},{label:"Planning",gradient:"linear-gradient(90deg, rgba(0,76,153,1) 0%, rgba(0,116,228,1) 100%)",isActive:!0},{label:"Pre-construction",gradient:"linear-gradient(90deg, rgba(0,116,228,1) 0%, rgba(0,153,204,1) 100%)",isActive:!0},{label:"Execution & monitoring",gradient:"linear-gradient(90deg, rgba(0,153,204,1) 0%, rgba(0,179,179,1) 100%)",isActive:!0},{label:"Finishing",isActive:!1},{label:"Inspection",isActive:!1},{label:"Handover & Closing",isActive:!1}],$e=[{label:"Task board",isActive:!0,disabled:!1},{label:"Preview 3D Model",isActive:!1,disabled:!1},{label:"Construction Drawing",isActive:!1,disabled:!0},{label:"Documents",isActive:!1,disabled:!0},{label:"Comments",isActive:!1,disabled:!0}],be=B=>{switch(B){case"critical":return"bg-red-500";case"high":return"bg-orange-500";case"medium":return"bg-yellow-500";case"low":return"bg-blue-500";default:return"bg-gray-500"}},Ve=B=>{switch(B){case"door":return"🚪";case"ceiling":return"🏠";case"wall":return"🧱";case"sprinkler":return"🚿";case"electrical":return"⚡";default:return"⚠️"}},St=B=>{switch(B){case"synced":return a.jsx(eh,{className:"w-4 h-4 text-green-500"});case"syncing":return a.jsx(Pr,{className:"w-4 h-4 text-blue-500 animate-spin"});case"error":return a.jsx(Zu,{className:"w-4 h-4 text-red-500"});case"not-synced":default:return a.jsx(qa,{className:"w-4 h-4 text-gray-400"})}},ft=B=>{switch(B){case"synced":return"Synced with Procore";case"syncing":return"Syncing...";case"error":return"Sync failed";case"not-synced":default:return"Not synced"}},F=async B=>{K(B),Se("sync"),pe(!0)},E=B=>{K(B),Se("view"),pe(!0)},Y=B=>{console.log("Syncing defect to Procore:",B.id)},re=async B=>{if(!(!B||B.length===0)){xe(!0);try{console.log("Uploading videos for AI analysis:",B),await new Promise(se=>setTimeout(se,3e3)),alert("Videos uploaded successfully! AI is analyzing for defectsList and building 3D model. This may take a few minutes."),Ze(!1)}catch(se){console.error("Error uploading videos:",se),alert("Error uploading videos. Please try again.")}finally{xe(!1)}}},oe=B=>a.jsx(ru,{ref:j,splatPath:B,sceneSettings:P,viewerSettings:{sharedMemoryForWorkers:!1,...X},className:"absolute inset-0 w-full h-full",onReady:Q,onError:ie,showLoading:!1,loadingComponent:a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg p-6 text-center",children:[a.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"}),a.jsx("p",{className:"text-gray-700 dark:text-slate-300",children:"Loading 3D Scene..."})]})})}),ne=()=>a.jsx("div",{className:"relative","data-tour":"defect-overview-floorplan",children:a.jsx(Wf,{defects:He,onDefectClick:B=>{B.procoreSyncStatus==="synced"?E(B):F(B)},onEmptySpaceClick:B=>{console.log("Add defect at position:",B)},getSeverityColor:be,getTypeIcon:Ve,highlightedDefects:f,hoveredDefect:l,onDefectHover:B=>c(B)})}),Oe=()=>a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Individual Defect Review"}),a.jsxs("div",{className:"flex items-center gap-2 w-full sm:w-auto",children:[a.jsx(Fr,{className:"w-4 h-4 text-gray-400"}),a.jsx("input",{type:"text",placeholder:"Search defects...",className:"flex-1 sm:w-64 px-3 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white"})]})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4","data-tour":"defect-list-grid",children:He.map((B,se)=>a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:se*.1},className:"bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300","data-tour":se===0?"defect-primary-card":void 0,children:[a.jsxs("div",{className:"relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-600 dark:to-slate-700",children:[B.image&&!B.image.includes("placeholder")?a.jsx("img",{src:B.image,alt:B.title,className:"w-full h-full object-cover"}):a.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-4xl mb-2",children:Ve(B.type)}),a.jsx("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:"Defect Image"})]})}),a.jsx("div",{className:`absolute inset-0 border-2 border-dashed ${B.severity==="critical"?"border-red-500":B.severity==="high"?"border-orange-500":B.severity==="medium"?"border-yellow-500":"border-blue-500"} opacity-50`})]}),a.jsxs("div",{className:"p-4",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[a.jsx("div",{className:`w-2 h-2 rounded-full ${be(B.severity)}`}),a.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-slate-400 uppercase",children:B.severity}),a.jsx("span",{className:"text-xs text-gray-400 dark:text-slate-500 ml-auto",children:B.type})]}),a.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white mb-2",children:B.title}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-slate-400 mb-3",children:B.description}),a.jsxs("div",{className:"flex items-center justify-between mb-3 p-3 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-700/30 rounded-lg",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("img",{src:"/assets/PCOR-icon.png",alt:"Procore",className:"w-4 h-4 object-contain"}),St(B.procoreSyncStatus)]}),a.jsx("span",{className:"text-xs font-medium text-gray-700 dark:text-slate-300",children:ft(B.procoreSyncStatus)})]}),a.jsx("div",{className:"flex items-center gap-1",children:B.procoreSyncStatus==="synced"&&B.procoreEntryId?a.jsxs("button",{onClick:()=>E(B),className:"flex items-center gap-1 px-3 py-1.5 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200 shadow-sm",children:[a.jsx(Es,{className:"w-3 h-3"}),"View / Edit"]}):a.jsxs("button",{onClick:()=>F(B),className:"flex items-center gap-1 px-3 py-1.5 text-xs bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors duration-200 shadow-sm",children:[a.jsx(qa,{className:"w-3 h-3"}),"Sync to Procore"]})})]}),B.audioDescription&&a.jsxs("div",{className:"space-y-2","data-tour":se===0?"defect-primary-audio-panel":void 0,children:[a.jsxs("div",{className:"flex items-center gap-2 p-2 bg-gray-50 dark:bg-slate-700 rounded-lg",children:[a.jsx(fd,{className:"w-4 h-4 text-blue-500"}),a.jsx("span",{className:"text-xs text-gray-600 dark:text-slate-400",children:"Audio description available"}),m===B.audioDescription?a.jsx("button",{type:"button","data-tour":se===0?"defect-primary-audio-button":void 0,onClick:()=>L(B.audioDescription),className:"ml-auto text-blue-500 hover:text-blue-600 transition-colors","aria-label":`Pause audio for ${B.title}`,children:a.jsx(td,{className:"w-3 h-3"})}):a.jsx("button",{type:"button","data-tour":se===0?"defect-primary-audio-button":void 0,onClick:()=>L(B.audioDescription),className:"ml-auto text-blue-500 hover:text-blue-600 transition-colors","aria-label":`Play audio for ${B.title}`,children:a.jsx(Mi,{className:"w-3 h-3"})})]}),m===B.audioDescription&&w[B.audioDescription]&&a.jsx("div",{className:"p-3 bg-gray-50 dark:bg-slate-700 rounded-lg space-y-2","data-tour":se===0?"defect-primary-audio-visualizer":void 0,children:a.jsx("div",{className:"w-full overflow-hidden",children:a.jsx(xd,{blob:w[B.audioDescription],width:250,height:50,barWidth:2,gap:1,barColor:"rgb(184, 184, 184)",barPlayedColor:"rgb(59, 130, 246)",currentTime:S})})})]})]})]},B.id))})]}),he=()=>a.jsx("div",{className:"flex flex-col lg:flex-row gap-6 h-[500px] sm:h-[600px]",children:a.jsxs("div",{className:"flex-1 relative bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-800 rounded-xl overflow-hidden shadow-2xl",children:[I&&oe(I),R&&a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg p-6 text-center",children:[a.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"}),a.jsx("p",{className:"text-gray-700 dark:text-slate-300",children:"Loading 3D Scene..."})]})}),!I&&!R&&a.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-10",children:a.jsxs(V.button,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},whileHover:{scale:1.05},whileTap:{scale:.95},onClick:z,className:"bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3",children:[a.jsx(Mi,{className:"w-6 h-6"}),"Load 3D Scene"]})}),f.map((B,se)=>{const ge=He.find(Ae=>Ae.id===B);return ge?a.jsxs(V.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{duration:.3,delay:se*.1},className:"absolute bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold shadow-lg",style:{left:`${ge.location.x+5}%`,top:`${ge.location.y-10}%`},children:["Defect ",se+1]},B):null})]})}),ke=()=>a.jsxs("div",{className:"relative",children:[a.jsxs("div",{className:"relative bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-800 rounded-xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px] md:h-[600px]",children:[a.jsx("div",{"data-tour":"defect-preview-viewport",className:"absolute inset-0"}),I&&oe(I),R&&a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg p-6 text-center",children:[a.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"}),a.jsx("p",{className:"text-gray-700 dark:text-slate-300",children:"Loading 3D Scene..."})]})}),!I&&!R&&a.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-10",children:a.jsxs(V.button,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},whileHover:{scale:1.05},whileTap:{scale:.95},onClick:z,"data-tour":"defect-preview-load-scene",className:"bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3",children:[a.jsx(Mi,{className:"w-6 h-6"}),"Load 3D Scene"]})})]}),a.jsx(Vt,{children:l&&a.jsxs(V.div,{initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.95},className:"absolute bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg max-w-sm z-20 pointer-events-none",style:{left:`${l.location.x}%`,top:`${l.location.y}%`,transform:"translate(20px, -50%)"},children:[a.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[a.jsx("div",{className:`w-3 h-3 rounded-full ${be(l.severity)}`}),a.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-slate-300",children:l.severity.toUpperCase()})]}),a.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white mb-1",children:l.title}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-slate-400 mb-2",children:l.description}),a.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-500 dark:text-slate-500 mb-2",children:[a.jsx(Nn,{className:"w-3 h-3"}),a.jsx("span",{children:new Date(l.createdAt).toLocaleDateString()})]}),a.jsxs("div",{className:"flex items-center gap-2 text-xs p-2 bg-orange-50 dark:bg-orange-900/20 rounded border border-orange-200 dark:border-orange-700/30",children:[a.jsx("img",{src:"/assets/PCOR-icon.png",alt:"Procore",className:"w-3 h-3 object-contain"}),St(l.procoreSyncStatus),a.jsx("span",{className:"text-gray-600 dark:text-slate-400 font-medium",children:ft(l.procoreSyncStatus)})]})]})})]}),O=B=>a.jsx("div",{className:"flex items-center justify-center h-[400px] sm:h-[500px] md:h-[600px] bg-white dark:bg-slate-800 rounded-xl shadow-lg",children:a.jsxs("div",{className:"text-center",children:[a.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-2",children:B}),a.jsx("p",{className:"text-gray-500 dark:text-slate-400",children:"Content for this section is under construction."})]})});return a.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-3 sm:p-4 md:p-6",children:[a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs(V.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"flex flex-col items-start gap-4 mb-6",children:[a.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent",children:"Defect Management System"}),a.jsx("div",{className:"flex flex-wrap items-center gap-2",children:Me.map((B,se)=>a.jsx("div",{className:`flex min-w-[120px] sm:w-[140px] md:w-[175px] items-center justify-center px-3 py-2 relative rounded-xl overflow-hidden transition-all duration-200 ${B.isActive?"shadow-md":"border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800"}`,style:B.isActive&&B.gradient?{background:B.gradient}:void 0,children:a.jsx("div",{className:`relative w-fit text-xs sm:text-sm font-bold tracking-[0] leading-[normal] ${B.isActive?"text-white":"text-gray-600 dark:text-gray-400"}`,children:B.label})},se))}),a.jsx("p",{className:"text-base text-gray-600 dark:text-slate-400 max-w-3xl",children:"Advanced defect detection and management system with AI-powered analysis and 3D visualization."})]}),a.jsx(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"mb-6",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50 rounded-xl p-6",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/25",children:a.jsx(Nn,{className:"w-5 h-5 text-white"})}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-lg font-bold text-gray-900 dark:text-white",children:"AI Time Savings Summary"}),a.jsx("p",{className:"text-gray-600 dark:text-slate-400 text-sm",children:"Automated defect detection efficiency metrics"})]})]}),a.jsxs("div",{className:"flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-lg backdrop-blur-sm",children:[a.jsx(Cs,{className:"w-3 h-3"}),a.jsx("span",{className:"text-xs font-medium",children:"AI Powered"})]})]}),a.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4",children:[a.jsxs("div",{className:"text-center p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg border border-emerald-200 dark:border-emerald-500/20",children:[a.jsx("div",{className:"text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2",children:"24.5h"}),a.jsx("div",{className:"text-sm text-emerald-600 dark:text-emerald-400 font-medium",children:"Total Time Saved"}),a.jsx("div",{className:"text-xs text-gray-500 dark:text-slate-400 mt-1",children:"This week"})]}),a.jsxs("div",{className:"text-center p-4 bg-blue-50 dark:bg-blue-500/10 rounded-lg border border-blue-200 dark:border-blue-500/20",children:[a.jsx("div",{className:"text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2",children:"47"}),a.jsx("div",{className:"text-sm text-blue-600 dark:text-blue-400 font-medium",children:"AI Detected"}),a.jsx("div",{className:"text-xs text-gray-500 dark:text-slate-400 mt-1",children:"Auto-identified defectsList"})]}),a.jsxs("div",{className:"text-center p-4 bg-purple-50 dark:bg-purple-500/10 rounded-lg border border-purple-200 dark:border-purple-500/20",children:[a.jsx("div",{className:"text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2",children:"94.2%"}),a.jsx("div",{className:"text-sm text-purple-600 dark:text-purple-400 font-medium",children:"Detection Accuracy"}),a.jsx("div",{className:"text-xs text-gray-500 dark:text-slate-400 mt-1",children:"AI confidence score"})]}),a.jsxs("div",{className:"text-center p-4 bg-orange-50 dark:bg-orange-500/10 rounded-lg border border-orange-200 dark:border-orange-500/20",children:[a.jsx("div",{className:"text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2",children:"$2,450"}),a.jsx("div",{className:"text-sm text-orange-600 dark:text-orange-400 font-medium",children:"Cost Savings"}),a.jsx("div",{className:"text-xs text-gray-500 dark:text-slate-400 mt-1",children:"Labor cost reduction"})]})]})]})}),a.jsxs(V.header,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-gray-200 dark:border-slate-700 pb-2 mb-6 gap-4",children:[a.jsx("nav",{className:"flex items-center flex-1 overflow-x-auto w-full custom-scrollbar-horizontal smooth-scroll",children:$e.map((B,se)=>a.jsx(V.button,{whileHover:{y:-2},whileTap:{y:0},onClick:()=>s(B.label),"data-tour":B.label==="Preview 3D Model"?"defect-preview-tab":void 0,className:`relative flex items-center gap-2 px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${n===B.label?"text-blue-500 dark:text-blue-400 border-b-2 border-blue-500 dark:border-blue-400":"text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white"}
                ${B.disabled&&"opacity-50 cursor-not-allowed"}
                `,children:B.label},se))}),a.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto",children:[a.jsx(V.button,{whileHover:{scale:we?1:1.05},whileTap:{scale:we?1:.95},onClick:()=>Ze(!0),disabled:we,className:`flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl transition-all duration-200 font-medium text-xs sm:text-sm ${we?"bg-gradient-to-r from-purple-400 to-pink-400 text-white cursor-not-allowed":"bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl"}`,children:we?a.jsxs(a.Fragment,{children:[a.jsx(Pr,{className:"w-3 h-3 sm:w-4 sm:h-4 animate-spin"}),a.jsx("span",{children:"Processing..."})]}):a.jsxs(a.Fragment,{children:[a.jsx(Dr,{className:"w-3 h-3 sm:w-4 sm:h-4"}),a.jsx("span",{className:"hidden sm:inline",children:"Upload Video"}),a.jsx("span",{className:"sm:hidden",children:"Upload"})]})}),a.jsxs(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>me(!0),className:"flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200",children:[a.jsx(qr,{className:"w-3 h-3 sm:w-4 sm:h-4"}),a.jsx("span",{className:"font-medium text-xs sm:text-sm",children:"Add Defect"})]})]})]}),n==="Task board"?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-6",children:[a.jsxs("button",{onClick:()=>t("overview"),className:`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 ${e==="overview"?"bg-blue-500 text-white":"bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-slate-600"}`,children:[a.jsx(Es,{className:"w-4 h-4"}),a.jsx("span",{className:"text-sm font-medium",children:"Overview"})]}),a.jsxs("button",{onClick:()=>t("list"),"data-tour":"defect-list-toggle",className:`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 ${e==="list"?"bg-blue-500 text-white":"bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-slate-600"}`,children:[a.jsx(vh,{className:"w-4 h-4"}),a.jsx("span",{className:"text-sm font-medium",children:"List View"})]})]}),a.jsx(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"relative",children:a.jsxs(Vt,{mode:"wait",children:[e==="overview"&&a.jsx(V.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.3},children:ne()},"overview"),e==="list"&&a.jsx(V.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.3},children:Oe()},"list"),e==="chatbot"&&a.jsx(V.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.3},children:he()},"chatbot")]})})]}):n==="Preview 3D Model"?a.jsx(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:ke()},"preview-3d"):a.jsx(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:O(n)},n),a.jsx(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},className:"grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6",children:[{label:"Total Defects",value:He.length.toString(),icon:fn,color:"text-red-500"},{label:"Critical",value:He.filter(B=>B.severity==="critical").length.toString(),icon:Ts,color:"text-red-600"},{label:"In Progress",value:He.filter(B=>B.status==="in-progress").length.toString(),icon:Nn,color:"text-yellow-500"},{label:"Resolved",value:He.filter(B=>B.status==="resolved").length.toString(),icon:Vi,color:"text-green-500"}].map((B,se)=>{const ge=B.icon;return a.jsxs(V.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.3,delay:se*.1},className:"bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50 rounded-xl p-4 text-center transition-all duration-300",children:[a.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-2",children:a.jsx(ge,{className:`w-4 h-4 ${B.color}`})}),a.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-1",children:B.value}),a.jsx("div",{className:"text-sm text-gray-600 dark:text-slate-400",children:B.label})]},se)})})]}),a.jsx(Hf,{isOpen:q,onClose:()=>pe(!1),defect:Fe,onSync:Y,mode:Te}),a.jsx(Gf,{isOpen:je,onClose:()=>Ze(!1),onUpload:re,isUploading:we}),a.jsx(Vf,{isOpen:te,onClose:()=>me(!1),onSave:Le})]})},zb=()=>{const[r,e]=J.useState([{id:"1",text:"Hello Mike",sender:"bot",timestamp:"02:10 PM"},{id:"2",text:"How may I help you today?",sender:"bot",timestamp:"02:10 PM"},{id:"3",text:"Show me all the doors that need to be painted",sender:"user",timestamp:"02:12 PM"},{id:"4",text:"No problem. I will now display the full interior view, and highlight all doors that need to be painted.",sender:"bot",timestamp:"02:10 PM"}]),[t,n]=J.useState(""),s=()=>{if(t.trim()){const o={id:String(r.length+1),text:t,sender:"user",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};e([...r,o]),n(""),setTimeout(()=>{const l={id:String(r.length+2),text:"I understand you're looking for doors that need painting. Let me analyze the current project status and provide you with detailed information.",sender:"bot",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};e(c=>[...c,l])},1e3)}},i=o=>{o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),s())};return a.jsx("div",{className:"p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex flex-col",children:a.jsxs("div",{className:"max-w-4xl w-full mx-auto flex-1 flex flex-col",children:[a.jsxs(V.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"flex items-center justify-between mb-8",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent",children:"AI Assistant Hub"}),a.jsx("p",{className:"text-slate-400 mt-2 text-lg",children:"Intelligent construction management & workflow automation"})]}),a.jsxs(V.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.2},className:"flex items-center space-x-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 px-4 py-2 rounded-xl backdrop-blur-sm",children:[a.jsx(Sn,{className:"w-4 h-4"}),a.jsx("span",{className:"text-sm font-medium",children:"AI Enhanced"})]})]}),a.jsxs(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},className:"relative group flex-1 flex flex-col",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-500/10 to-slate-600/10 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"}),a.jsxs("div",{className:"relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full",children:[a.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-slate-700/50",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs(V.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.5,delay:.4},className:"relative",children:[a.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25",children:a.jsx(Cs,{className:"w-6 h-6 text-white"})}),a.jsx("div",{className:"absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"})]}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-white",children:"Project #531 Chatbot"}),a.jsx("p",{className:"text-sm text-slate-400",children:"Retrieval AI agent"})]})]}),a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx(V.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-300",children:a.jsx(ah,{className:"h-4 w-4"})}),a.jsx(V.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-300",children:a.jsx(ad,{className:"h-4 w-4"})})]})]}),a.jsx("div",{className:"flex-1 p-6 space-y-6 overflow-y-auto custom-scrollbar smooth-scroll scroll-indicator",children:r.map((o,l)=>a.jsx(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.5+l*.1},className:`flex ${o.sender==="user"?"justify-end":"justify-start"}`,children:a.jsxs("div",{className:`flex items-start space-x-3 max-w-xs lg:max-w-md ${o.sender==="user"?"flex-row-reverse space-x-reverse":""}`,children:[a.jsx("div",{className:`w-8 h-8 rounded-xl flex items-center justify-center ${o.sender==="user"?"bg-gradient-to-br from-blue-500 to-purple-600":"bg-gradient-to-br from-slate-600 to-slate-700"}`,children:o.sender==="user"?a.jsx(Xi,{className:"h-4 w-4 text-white"}):a.jsx(Cs,{className:"h-4 w-4 text-white"})}),a.jsxs("div",{className:`px-4 py-3 rounded-xl backdrop-blur-xl ${o.sender==="user"?"bg-gradient-to-r from-blue-500 to-purple-600 text-white":"bg-slate-700/50 text-white border border-slate-600/50"}`,children:[a.jsx("p",{className:"text-sm",children:o.text}),a.jsx("p",{className:`text-xs mt-2 ${o.sender==="user"?"text-blue-100":"text-slate-400"}`,children:o.timestamp})]})]})},o.id))}),a.jsx("div",{className:"p-6 border-t border-slate-700/50",children:a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("input",{type:"text","data-tour":"ai-assistant-input",className:"flex-1 p-4 rounded-xl border border-slate-600/50 bg-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-xl transition-all duration-300",placeholder:"Ask me anything about your construction project...",value:t,onChange:o=>n(o.target.value),onKeyPress:i}),a.jsx(V.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-3 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-xl transition-all duration-300 border border-slate-600/30",children:a.jsx(rd,{className:"w-5 h-5"})}),a.jsx(V.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-3 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-xl transition-all duration-300 border border-slate-600/30",children:a.jsx(Gh,{className:"w-5 h-5"})}),a.jsx(V.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/25",onClick:s,children:a.jsx(cd,{className:"w-5 h-5"})})]})})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8",children:[a.jsxs("div",{className:"relative group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"}),a.jsxs("div",{className:"relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6",children:[a.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:"Project Context"}),a.jsxs("div",{className:"bg-slate-700/30 rounded-xl p-4 border border-slate-600/30",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("span",{className:"text-sm font-medium text-white",children:"Project #531"}),a.jsx("span",{className:"text-xs text-slate-400",children:"Community Center"})]}),a.jsx("p",{className:"text-sm text-slate-400",children:"The AI assistant has access to your project data, 3D models, task boards, and change orders. You can ask questions about project progress, defects, materials, or request specific actions."})]})]})]}),a.jsxs("div",{className:"relative group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"}),a.jsxs("div",{className:"relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6",children:[a.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:"Quick Actions"}),a.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[a.jsxs("button",{onClick:()=>n("Show me all the doors that need to be painted"),className:"p-4 bg-slate-700/30 rounded-xl hover:bg-slate-600/30 transition-all duration-300 text-left border border-slate-600/30 hover:border-slate-500/50",children:[a.jsx("div",{className:"font-medium text-white mb-1",children:"Paint Issues"}),a.jsx("div",{className:"text-sm text-slate-400",children:"Find all doors needing paint"})]}),a.jsxs("button",{onClick:()=>n("What's the current project status?"),className:"p-4 bg-slate-700/30 rounded-xl hover:bg-slate-600/30 transition-all duration-300 text-left border border-slate-600/30 hover:border-slate-500/50",children:[a.jsx("div",{className:"font-medium text-white mb-1",children:"Project Status"}),a.jsx("div",{className:"text-sm text-slate-400",children:"Get current progress update"})]}),a.jsxs("button",{onClick:()=>n("Show me the 3D model with defects"),className:"p-4 bg-slate-700/30 rounded-xl hover:bg-slate-600/30 transition-all duration-300 text-left border border-slate-600/30 hover:border-slate-500/50",children:[a.jsx("div",{className:"font-medium text-white mb-1",children:"3D Visualization"}),a.jsx("div",{className:"text-sm text-slate-400",children:"View model with defects"})]})]})]})]})]}),a.jsx("div",{className:"text-center text-sm text-slate-500 mt-8",children:a.jsxs("div",{className:"flex items-center justify-center gap-2",children:[a.jsx(Sn,{className:"w-4 h-4"}),a.jsx("span",{children:"Powered by EmbodX AI"}),a.jsx("span",{className:"text-[11px] text-slate-500",children:"by SpatioSense"})]})})]})})},Hb=()=>{const[r,e]=J.useState(null),[t,n]=J.useState(!0),[s,i]=J.useState(!1),[o,l]=J.useState("dashboard");J.useEffect(()=>{e(null),n(!0)},[]),J.useEffect(()=>{const u=()=>window.location.hash.replace("#","")||"dashboard";l(u());const h=()=>{l(u())};return window.addEventListener("hashchange",h),()=>window.removeEventListener("hashchange",h)},[]);const c=u=>{e(u),n(!1),window.location.hash="dashboard"};if(t)return a.jsx("div",{className:"h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900",children:a.jsx(Of,{onProjectSelect:c})});const d=()=>{switch(o){case"dashboard":return a.jsx(Tl,{});case"projects":return a.jsx(Mf,{});case"analytics":return a.jsx(Ef,{});case"team":return a.jsx(Tf,{});case"equipment":return a.jsx(Rf,{});case"safety":return a.jsx(Nf,{});case"schedule":return a.jsx(If,{});case"reports":return a.jsx(Df,{});case"locations":return a.jsx(Pf,{});case"site-progress":return a.jsx(jf,{});case"defect-management":return a.jsx(jb,{});case"site-walkthrough":return a.jsx(Cu,{});case"notifications":return a.jsx(Ff,{});case"ai-assistant":return a.jsx(zb,{});case"settings":return a.jsx(kf,{});default:return a.jsx(Tl,{})}};return a.jsxs("div",{className:"flex h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900",children:[a.jsx(El,{selectedProject:r}),a.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[a.jsx(Af,{userName:"Mike Thompson",userRole:"Project Manager",notifications:3,onProfileClick:()=>console.log("Profile clicked"),onNotificationsClick:()=>window.location.hash="notifications",onSettingsClick:()=>window.location.hash="settings",onMenuClick:()=>i(!0)}),a.jsx("main",{className:"flex-1 overflow-auto custom-scrollbar smooth-scroll",children:d()})]}),a.jsx(Uf,{}),s&&a.jsxs("div",{className:"md:hidden fixed inset-0 z-50 flex",children:[a.jsx("div",{className:"w-56 bg-white dark:bg-slate-900/50 h-full border-r border-gray-200 dark:border-slate-700/50 shadow-2xl",children:a.jsx(El,{variant:"mobile",selectedProject:r,onNavigate:()=>i(!1)})}),a.jsx("div",{className:"flex-1 bg-black/40",onClick:()=>i(!1)})]})]})};function Qb(){return J.useEffect(()=>{window.location.hash||(window.location.hash="dashboard")},[]),a.jsx(Hb,{})}export{Qb as component};
