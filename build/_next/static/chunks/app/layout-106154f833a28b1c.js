(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4324:function(e,t,r){Promise.resolve().then(r.t.bind(r,3963,23)),Promise.resolve().then(r.t.bind(r,3283,23)),Promise.resolve().then(r.bind(r,691))},691:function(e,t,r){"use strict";r.r(t),r.d(t,{ActiveThemeContext:function(){return p},ThemeRegistry:function(){return T},Themes:function(){return s}});var n,s,l=r(7437),o=r(2265),i=r(6335),a=r(4033),c=r(9987),u=r(2135),h=r(3857),d=r(342),f=r(6778);let m=(0,d.Z)((0,f.Z)({palette:{mode:"dark"}})),_=(0,d.Z)((0,f.Z)({palette:{mode:"light"}}));var k=r(6375);(n=s||(s={})).LIGHT="light",n.DARK="dark";let v=()=>{let e=(0,u.Z)("(prefers-color-scheme: dark)"),[t,r]=o.useState("dark");return o.useEffect(()=>{r(e?"dark":"light")},[e]),{activeTheme:t,setActiveTheme:r,switchTheme:()=>{r(e=>"dark"===e?"light":"dark")}}},p=o.createContext({activeTheme:"dark",setActiveTheme:()=>{},switchTheme:()=>{}});function T(e){let{options:t,children:r}=e,[{cache:n,flush:s}]=o.useState(()=>{let e=(0,i.Z)(t);e.compat=!0;let r=e.insert,n=[];return e.insert=function(){for(var t=arguments.length,s=Array(t),l=0;l<t;l++)s[l]=arguments[l];let o=s[1];return void 0===e.inserted[o.name]&&n.push(o.name),r(...s)},{cache:e,flush:()=>{let e=n;return n=[],e}}});(0,a.useServerInsertedHTML)(()=>{let e=s();if(0===e.length)return null;let t="";for(let r of e)t+=n.inserted[r];return(0,l.jsx)("style",{"data-emotion":"".concat(n.key," ").concat(e.join(" ")),dangerouslySetInnerHTML:{__html:t}},n.key)});let{activeTheme:u,...d}=v();return(0,l.jsx)(k.C,{value:n,children:(0,l.jsx)(p.Provider,{value:{activeTheme:u,...d},children:(0,l.jsxs)(c.Z,{theme:"dark"===u?m:_,children:[(0,l.jsx)(h.ZP,{}),r]})})})}},3283:function(){},3963:function(e){e.exports={style:{fontFamily:"'__Montserrat_cce811', '__Montserrat_Fallback_cce811'",fontStyle:"normal"},className:"__className_cce811"}},4033:function(e,t,r){e.exports=r(94)}},function(e){e.O(0,[306,971,472,744],function(){return e(e.s=4324)}),_N_E=e.O()}]);