(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7869],{21278:function(e,t,n){"use strict";var r=n(64119);t.Z=void 0;var o=r(n(66830)),i=n(62559),a=(0,o.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=a},2857:function(e,t,n){"use strict";n.d(t,{Z:function(){return F}});var r=n(36222),o=n(1048),i=n(32793),a=n(50390),c=n(44977),l=function(e){var t=a.useRef({});return a.useEffect((function(){t.current=e})),t.current},u=n(43349),s=n(10594);function f(e){return(0,s.Z)("MuiBadge",e)}var d=(0,u.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopLeft","anchorOriginTopRight","anchorOriginBottomLeft","anchorOriginBottomRight","invisible"]),p=n(38331),g=n(23960),v=n(89705),m=n(50076),h=n(53135);var b=n(62559),y=["anchorOrigin","classes","badgeContent","component","children","className","components","componentsProps","invisible","max","showZero","variant"],w=a.forwardRef((function(e,t){var n=e.anchorOrigin,r=void 0===n?{vertical:"top",horizontal:"right"}:n,o=e.classes,i=e.component,a=e.children,u=e.className,s=e.components,d=void 0===s?{}:s,w=e.componentsProps,O=void 0===w?{}:w,Z=e.max,x=void 0===Z?99:Z,C=e.showZero,D=void 0!==C&&C,k=e.variant,S=void 0===k?"standard":k,j=(0,g.Z)(e,y),P=function(e){var t=e.anchorOrigin,n=void 0===t?{vertical:"top",horizontal:"right"}:t,r=e.badgeContent,o=e.invisible,i=e.max,a=void 0===i?99:i,c=e.showZero,u=void 0!==c&&c,s=e.variant,f=void 0===s?"standard":s,d=l({anchorOrigin:n,badgeContent:r,max:a,variant:f}),p=o;null==o&&(0===r&&!u||null==r&&"dot"!==f)&&(p=!0);var g=p?d:e,v=g.anchorOrigin,m=void 0===v?n:v,h=g.badgeContent,b=g.max,y=void 0===b?a:b,w=g.variant,O=void 0===w?f:w,Z="";return"dot"!==O&&(Z=h&&Number(h)>y?"".concat(y,"+"):h),{anchorOrigin:m,badgeContent:h,invisible:p,max:y,variant:O,displayValue:Z}}((0,p.Z)({},e,{anchorOrigin:r,max:x,variant:S})),R=P.anchorOrigin,F=P.badgeContent,A=P.max,E=P.variant,z=P.displayValue,T=P.invisible,I=(0,p.Z)({},e,{anchorOrigin:R,badgeContent:F,classes:o,invisible:T,max:A,variant:E,showZero:D}),B=function(e){var t=e.variant,n=e.anchorOrigin,r=e.invisible,o=e.classes,i={root:["root"],badge:["badge",t,"anchorOrigin".concat((0,v.Z)(n.vertical)).concat((0,v.Z)(n.horizontal)),r&&"invisible"]};return(0,m.Z)(i,f,o)}(I),M=i||d.Root||"span",L=(0,h.Z)(M,(0,p.Z)({},j,O.root),I),N=d.Badge||"span",_=(0,h.Z)(N,O.badge,I);return(0,b.jsxs)(M,(0,p.Z)({},L,{ref:t},j,{className:(0,c.Z)(B.root,L.className,u),children:[a,(0,b.jsx)(N,(0,p.Z)({},_,{className:(0,c.Z)(B.badge,_.className),children:z}))]}))})),O=w,Z=n(8208),x=n(15573),C=n(45193),D=function(e){return!e||!(0,C.Z)(e)},k=n(91442),S=["anchorOrigin","component","components","componentsProps","overlap","color","invisible","badgeContent","showZero","variant"],j=(0,i.Z)({},d,(0,u.Z)("MuiBadge",["colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])),P=(0,Z.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:function(e,t){return t.root}})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),R=(0,Z.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:function(e,t){var n=e.ownerState;return[t.badge,t[n.variant],t["anchorOrigin".concat((0,k.Z)(n.anchorOrigin.vertical)).concat((0,k.Z)(n.anchorOrigin.horizontal)).concat((0,k.Z)(n.overlap))],"default"!==n.color&&t["color".concat((0,k.Z)(n.color))],n.invisible&&t.invisible]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen})},"default"!==n.color&&{backgroundColor:t.palette[n.color].main,color:t.palette[n.color].contrastText},"dot"===n.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&(0,r.Z)({top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(j.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&(0,r.Z)({bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(j.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&(0,r.Z)({top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(j.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&(0,r.Z)({bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(j.invisible),{transform:"scale(0) translate(-50%, 50%)"}),"top"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&(0,r.Z)({top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(j.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&(0,r.Z)({bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(j.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&(0,r.Z)({top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(j.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&(0,r.Z)({bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(j.invisible),{transform:"scale(0) translate(-50%, 50%)"}),n.invisible&&{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})})})),F=a.forwardRef((function(e,t){var n,r,a=(0,x.Z)({props:e,name:"MuiBadge"}),u=a.anchorOrigin,s=void 0===u?{vertical:"top",horizontal:"right"}:u,d=a.component,p=void 0===d?"span":d,g=a.components,v=void 0===g?{}:g,m=a.componentsProps,h=void 0===m?{}:m,y=a.overlap,w=void 0===y?"rectangular":y,Z=a.color,C=void 0===Z?"default":Z,j=a.invisible,F=a.badgeContent,A=a.showZero,E=void 0!==A&&A,z=a.variant,T=void 0===z?"standard":z,I=(0,o.Z)(a,S),B=l({anchorOrigin:s,color:C,overlap:w}),M=j;null==j&&(0===F&&!E||null==F&&"dot"!==T)&&(M=!0);var L=M?B:a,N=L.color,_=void 0===N?C:N,V=L.overlap,G=void 0===V?w:V,K=L.anchorOrigin,W=void 0===K?s:K,q=function(e){var t=e.color,n=e.anchorOrigin,r=e.overlap,o=e.classes,a=void 0===o?{}:o;return(0,i.Z)({},a,{badge:(0,c.Z)(a.badge,f("anchorOrigin".concat((0,k.Z)(n.vertical)).concat((0,k.Z)(n.horizontal)).concat((0,k.Z)(r))),f("overlap".concat((0,k.Z)(r))),"default"!==t&&[f("color".concat((0,k.Z)(t))),a["color".concat((0,k.Z)(t))]])})}((0,i.Z)({},a,{anchorOrigin:W,invisible:M,color:_,overlap:G}));return(0,b.jsx)(O,(0,i.Z)({anchorOrigin:W,invisible:j,badgeContent:F,showZero:E,variant:T},I,{components:(0,i.Z)({Root:P,Badge:R},v),componentsProps:{root:(0,i.Z)({},h.root,D(v.Root)&&{as:p,ownerState:(0,i.Z)({},null==(n=h.root)?void 0:n.ownerState,{color:_,overlap:G})}),badge:(0,i.Z)({},h.badge,D(v.Badge)&&{ownerState:(0,i.Z)({},null==(r=h.badge)?void 0:r.ownerState,{color:_,overlap:G})})},classes:q,ref:t}))}))},4247:function(e,t,n){"use strict";n.d(t,{V:function(){return o}});var r=n(10594);function o(e){return(0,r.Z)("MuiDivider",e)}var i=(0,n(43349).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=i},31680:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var r=n(36222),o=n(1048),i=n(32793),a=n(50390),c=n(44977),l=n(50076),u=n(36128),s=n(8208),f=n(15573),d=n(57308),p=n(86875),g=n(40839),v=n(3299),m=n(4247),h=n(2198),b=n(23586),y=n(10594);function w(e){return(0,y.Z)("MuiMenuItem",e)}var O=(0,n(43349).Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Z=n(62559),x=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],C=(0,s.ZP)(p.Z,{shouldForwardProp:function(e){return(0,s.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,o=e.ownerState;return(0,i.Z)({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:"1px solid ".concat(n.palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,r.Z)(t,"&.".concat(O.selected),(0,r.Z)({backgroundColor:(0,u.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(O.focusVisible),{backgroundColor:(0,u.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,r.Z)(t,"&.".concat(O.selected,":hover"),{backgroundColor:(0,u.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,u.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,r.Z)(t,"&.".concat(O.focusVisible),{backgroundColor:n.palette.action.focus}),(0,r.Z)(t,"&.".concat(O.disabled),{opacity:n.palette.action.disabledOpacity}),(0,r.Z)(t,"& + .".concat(m.Z.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),(0,r.Z)(t,"& + .".concat(m.Z.inset),{marginLeft:52}),(0,r.Z)(t,"& .".concat(b.Z.root),{marginTop:0,marginBottom:0}),(0,r.Z)(t,"& .".concat(b.Z.inset),{paddingLeft:36}),(0,r.Z)(t,"& .".concat(h.Z.root),{minWidth:36}),t),!o.dense&&(0,r.Z)({},n.breakpoints.up("sm"),{minHeight:"auto"}),o.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,(0,r.Z)({},"& .".concat(h.Z.root," svg"),{fontSize:"1.25rem"})))})),D=a.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiMenuItem"}),r=n.autoFocus,u=void 0!==r&&r,s=n.component,p=void 0===s?"li":s,m=n.dense,h=void 0!==m&&m,b=n.divider,y=void 0!==b&&b,O=n.disableGutters,D=void 0!==O&&O,k=n.focusVisibleClassName,S=n.role,j=void 0===S?"menuitem":S,P=n.tabIndex,R=(0,o.Z)(n,x),F=a.useContext(d.Z),A={dense:h||F.dense||!1,disableGutters:D},E=a.useRef(null);(0,g.Z)((function(){u&&E.current&&E.current.focus()}),[u]);var z,T=(0,i.Z)({},n,{dense:A.dense,divider:y,disableGutters:D}),I=function(e){var t=e.disabled,n=e.dense,r=e.divider,o=e.disableGutters,a=e.selected,c=e.classes,u={root:["root",n&&"dense",t&&"disabled",!o&&"gutters",r&&"divider",a&&"selected"]},s=(0,l.Z)(u,w,c);return(0,i.Z)({},c,s)}(n),B=(0,v.Z)(E,t);return n.disabled||(z=void 0!==P?P:-1),(0,Z.jsx)(d.Z.Provider,{value:A,children:(0,Z.jsx)(C,(0,i.Z)({ref:B,role:j,tabIndex:z,component:p,focusVisibleClassName:(0,c.Z)(I.focusVisible,k)},R,{ownerState:T,classes:I}))})}))},49056:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(36222),o=n(1048),i=n(32793),a=n(50390),c=n(44977),l=n(50076),u=n(36128),s=n(91442),f=n(16756),d=n(15573),p=n(8208),g=n(10594);function v(e){return(0,g.Z)("MuiSwitch",e)}var m=(0,n(43349).Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),h=n(62559),b=["className","color","edge","size","sx"],y=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.edge&&t["edge".concat((0,s.Z)(n.edge))],t["size".concat((0,s.Z)(n.size))]]}})((function(e){var t,n=e.ownerState;return(0,i.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===n.edge&&{marginLeft:-8},"end"===n.edge&&{marginRight:-8},"small"===n.size&&(t={width:40,height:24,padding:7},(0,r.Z)(t,"& .".concat(m.thumb),{width:16,height:16}),(0,r.Z)(t,"& .".concat(m.switchBase),(0,r.Z)({padding:4},"&.".concat(m.checked),{transform:"translateX(16px)"})),t))})),w=(0,p.ZP)(f.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var n=e.ownerState;return[t.switchBase,(0,r.Z)({},"& .".concat(m.input),t.input),"default"!==n.color&&t["color".concat((0,s.Z)(n.color))]]}})((function(e){var t,n=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:"light"===n.palette.mode?n.palette.common.white:n.palette.grey[300],transition:n.transitions.create(["left","transform"],{duration:n.transitions.duration.shortest})},(0,r.Z)(t,"&.".concat(m.checked),{transform:"translateX(20px)"}),(0,r.Z)(t,"&.".concat(m.disabled),{color:"light"===n.palette.mode?n.palette.grey[100]:n.palette.grey[600]}),(0,r.Z)(t,"&.".concat(m.checked," + .").concat(m.track),{opacity:.5}),(0,r.Z)(t,"&.".concat(m.disabled," + .").concat(m.track),{opacity:"light"===n.palette.mode?.12:.2}),(0,r.Z)(t,"& .".concat(m.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,n=e.theme,o=e.ownerState;return(0,i.Z)({"&:hover":{backgroundColor:(0,u.Fq)(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(t={},(0,r.Z)(t,"&.".concat(m.checked),(0,r.Z)({color:n.palette[o.color].main,"&:hover":{backgroundColor:(0,u.Fq)(n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(m.disabled),{color:"light"===n.palette.mode?(0,u.$n)(n.palette[o.color].main,.62):(0,u._j)(n.palette[o.color].main,.55)})),(0,r.Z)(t,"&.".concat(m.checked," + .").concat(m.track),{backgroundColor:n.palette[o.color].main}),t))})),O=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:"light"===t.palette.mode?t.palette.common.black:t.palette.common.white,opacity:"light"===t.palette.mode?.38:.3}})),Z=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){return{boxShadow:e.theme.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),x=a.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiSwitch"}),r=n.className,a=n.color,u=void 0===a?"primary":a,f=n.edge,p=void 0!==f&&f,g=n.size,m=void 0===g?"medium":g,x=n.sx,C=(0,o.Z)(n,b),D=(0,i.Z)({},n,{color:u,edge:p,size:m}),k=function(e){var t=e.classes,n=e.edge,r=e.size,o=e.color,a=e.checked,c=e.disabled,u={root:["root",n&&"edge".concat((0,s.Z)(n)),"size".concat((0,s.Z)(r))],switchBase:["switchBase","color".concat((0,s.Z)(o)),a&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},f=(0,l.Z)(u,v,t);return(0,i.Z)({},t,f)}(D),S=(0,h.jsx)(Z,{className:k.thumb,ownerState:D});return(0,h.jsxs)(y,{className:(0,c.Z)(k.root,r),sx:x,ownerState:D,children:[(0,h.jsx)(w,(0,i.Z)({type:"checkbox",icon:S,checkedIcon:S,ref:t,ownerState:D},C,{classes:(0,i.Z)({},k,{root:k.switchBase})})),(0,h.jsx)(O,{className:k.track,ownerState:D})]})}))},31147:function(e,t){"use strict";t.Z=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}},20409:function(e,t,n){"use strict";var r=n(61498),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,a,c,l,u,s=!1;t||(t={}),n=t.debug||!1;try{if(a=r(),c=document.createRange(),l=document.getSelection(),(u=document.createElement("span")).textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=o[t.format]||o.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(u),c.selectNodeContents(u),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(f){n&&console.error("unable to copy using execCommand: ",f),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),u&&document.body.removeChild(u),a()}return s}},12900:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=i(n(50390)),o=i(n(20409));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?p(e):t}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){var e,n;u(this,t);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return v(p(n=f(this,(e=d(t)).call.apply(e,[this].concat(a)))),"onClick",(function(e){var t=n.props,i=t.text,a=t.onCopy,c=t.children,l=t.options,u=r.default.Children.only(c),s=(0,o.default)(i,l);a&&a(i,s),u&&u.props&&"function"===typeof u.props.onClick&&u.props.onClick(e)})),n}var n,i,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,i=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=l(e,["text","onCopy","options","children"]),o=r.default.Children.only(t);return r.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}],i&&s(n.prototype,i),a&&s(n,a),t}(r.default.PureComponent);t.CopyToClipboard=m,v(m,"defaultProps",{onCopy:void 0,options:void 0})},33034:function(e,t,n){"use strict";var r=n(12900).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},58471:function(e,t,n){"use strict";n.d(t,{uI:function(){return ie}});var r=n(50390),o=n(70188),i=n.n(o);function a(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(t){i(t)}}function c(e){try{l(r.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))}function c(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}Object.create;function l(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}Object.create;var u=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function s(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=u.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"===typeof t?t:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var f=[".DS_Store","Thumbs.db"];function d(e){return(null!==e.target&&e.target.files?v(e.target.files):[]).map((function(e){return s(e)}))}function p(e,t){return a(this,void 0,void 0,(function(){var n;return c(this,(function(r){switch(r.label){case 0:return e.items?(n=v(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(m))]):[3,2];case 1:return[2,g(h(r.sent()))];case 2:return[2,g(v(e.files).map((function(e){return s(e)})))]}}))}))}function g(e){return e.filter((function(e){return-1===f.indexOf(e.name)}))}function v(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function m(e){if("function"!==typeof e.webkitGetAsEntry)return b(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?w(t):b(e)}function h(e){return e.reduce((function(e,t){return function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(l(arguments[t]));return e}(e,Array.isArray(t)?h(t):[t])}),[])}function b(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var n=s(t);return Promise.resolve(n)}function y(e){return a(this,void 0,void 0,(function(){return c(this,(function(t){return[2,e.isDirectory?w(e):O(e)]}))}))}function w(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function o(){var i=this;t.readEntries((function(t){return a(i,void 0,void 0,(function(){var i,a,l;return c(this,(function(c){switch(c.label){case 0:if(t.length)return[3,5];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=c.sent(),e(i),[3,4];case 3:return a=c.sent(),n(a),[3,4];case 4:return[3,6];case 5:l=Promise.all(t.map(y)),r.push(l),o(),c.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function O(e){return a(this,void 0,void 0,(function(){return c(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=s(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var Z=n(31147);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D="file-invalid-type",k="file-too-large",S="file-too-small",j="too-many-files",P=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:D,message:"File type must be ".concat(t)}},R=function(e){return{code:k,message:"File is larger than ".concat(e," bytes")}},F=function(e){return{code:S,message:"File is smaller than ".concat(e," bytes")}},A={code:j,message:"Too many files"};function E(e,t){var n="application/x-moz-file"===e.type||(0,Z.Z)(e,t);return[n,n?null:P(t)]}function z(e,t,n){if(T(e.size))if(T(t)&&T(n)){if(e.size>n)return[!1,R(n)];if(e.size<t)return[!1,F(t)]}else{if(T(t)&&e.size<t)return[!1,F(t)];if(T(n)&&e.size>n)return[!1,R(n)]}return[!0,null]}function T(e){return void 0!==e&&null!==e}function I(e){var t=e.files,n=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=x(E(e,n),1)[0],i=x(z(e,r,o),1)[0];return t&&i}))}function B(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function M(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function L(e){e.preventDefault()}function N(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function _(e){return-1!==e.indexOf("Edge/")}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return N(e)||_(e)}function G(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some((function(t){return!B(e)&&t&&t.apply(void 0,[e].concat(r)),B(e)}))}}var K=["children"],W=["open"],q=["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],U=["refKey","onChange","onClick"];function H(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||X(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||X(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){if(e){if("string"===typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){ee(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function te(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ne=(0,r.forwardRef)((function(e,t){var n=e.children,o=ie(te(e,K)),i=o.open,a=te(o,W);return(0,r.useImperativeHandle)(t,(function(){return{open:i}}),[i]),r.createElement(r.Fragment,null,n(Y(Y({},a),{},{open:i})))}));ne.displayName="Dropzone";var re={disabled:!1,getFilesFromEvent:function(e){return a(this,void 0,void 0,(function(){return c(this,(function(t){return[2,(n=e,n.dataTransfer&&e.dataTransfer?p(e.dataTransfer,e.type):d(e))];var n}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null};ne.defaultProps=re,ne.propTypes={children:i().func,accept:i().oneOfType([i().string,i().arrayOf(i().string)]),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,validator:i().func};var oe={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Y(Y({},re),e),n=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,c=t.minSize,l=t.multiple,u=t.maxFiles,s=t.onDragEnter,f=t.onDragLeave,d=t.onDragOver,p=t.onDrop,g=t.onDropAccepted,v=t.onDropRejected,m=t.onFileDialogCancel,h=t.onFileDialogOpen,b=t.preventDropOnDocument,y=t.noClick,w=t.noKeyboard,O=t.noDrag,Z=t.noDragEventsBubbling,x=t.validator,C=(0,r.useRef)(null),D=(0,r.useRef)(null),k=(0,r.useReducer)(ae,oe),S=$(k,2),j=S[0],P=S[1],R=j.isFocused,F=j.isFileDialogActive,T=j.draggedFiles,N=(0,r.useCallback)((function(){D.current&&(P({type:"openDialog"}),"function"===typeof h&&h(),D.current.value=null,D.current.click())}),[P,h]),_=function(){F&&setTimeout((function(){D.current&&(D.current.files.length||(P({type:"closeDialog"}),"function"===typeof m&&m()))}),300)};(0,r.useEffect)((function(){return window.addEventListener("focus",_,!1),function(){window.removeEventListener("focus",_,!1)}}),[D,F,m]);var K=(0,r.useCallback)((function(e){C.current&&C.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),N()))}),[C,D,N]),W=(0,r.useCallback)((function(){P({type:"focus"})}),[]),X=(0,r.useCallback)((function(){P({type:"blur"})}),[]),J=(0,r.useCallback)((function(){y||(V()?setTimeout(N,0):N())}),[D,y,N]),Q=(0,r.useRef)([]),ne=function(e){C.current&&C.current.contains(e.target)||(e.preventDefault(),Q.current=[])};(0,r.useEffect)((function(){return b&&(document.addEventListener("dragover",L,!1),document.addEventListener("drop",ne,!1)),function(){b&&(document.removeEventListener("dragover",L),document.removeEventListener("drop",ne))}}),[C,b]);var ie=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),pe(e),Q.current=[].concat(H(Q.current),[e.target]),M(e)&&Promise.resolve(i(e)).then((function(t){B(e)&&!Z||(P({draggedFiles:t,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e))}))}),[i,s,Z]),ce=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),pe(e);var t=M(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(n){}return t&&d&&d(e),!1}),[d,Z]),le=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),pe(e);var t=Q.current.filter((function(e){return C.current&&C.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),Q.current=t,t.length>0||(P({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),M(e)&&f&&f(e))}),[C,f,Z]),ue=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),pe(e),Q.current=[],M(e)&&Promise.resolve(i(e)).then((function(t){if(!B(e)||Z){var r=[],o=[];t.forEach((function(e){var t=$(E(e,n),2),i=t[0],l=t[1],u=$(z(e,c,a),2),s=u[0],f=u[1],d=x?x(e):null;if(i&&s&&!d)r.push(e);else{var p=[l,f];d&&(p=p.concat(d)),o.push({file:e,errors:p.filter((function(e){return e}))})}})),(!l&&r.length>1||l&&u>=1&&r.length>u)&&(r.forEach((function(e){o.push({file:e,errors:[A]})})),r.splice(0)),P({acceptedFiles:r,fileRejections:o,type:"setFiles"}),p&&p(r,o,e),o.length>0&&v&&v(o,e),r.length>0&&g&&g(r,e)}})),P({type:"reset"})}),[l,n,c,a,u,i,p,g,v,Z,x]),se=function(e){return o?null:e},fe=function(e){return w?null:se(e)},de=function(e){return O?null:se(e)},pe=function(e){Z&&e.stopPropagation()},ge=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onKeyDown,i=e.onFocus,a=e.onBlur,c=e.onClick,l=e.onDragEnter,u=e.onDragOver,s=e.onDragLeave,f=e.onDrop,d=te(e,q);return Y(Y(ee({onKeyDown:fe(G(r,K)),onFocus:fe(G(i,W)),onBlur:fe(G(a,X)),onClick:se(G(c,J)),onDragEnter:de(G(l,ie)),onDragOver:de(G(u,ce)),onDragLeave:de(G(s,le)),onDrop:de(G(f,ue))},n,C),o||w?{}:{tabIndex:0}),d)}}),[C,K,W,X,J,ie,ce,le,ue,w,O,o]),ve=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),me=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,o=e.onChange,i=e.onClick,a=te(e,U),c=ee({accept:n,multiple:l,type:"file",style:{display:"none"},onChange:se(G(o,ue)),onClick:se(G(i,ve)),autoComplete:"off",tabIndex:-1},r,D);return Y(Y({},c),a)}}),[D,n,l,ue,o]),he=T.length,be=he>0&&I({files:T,accept:n,minSize:c,maxSize:a,multiple:l,maxFiles:u}),ye=he>0&&!be;return Y(Y({},j),{},{isDragAccept:be,isDragReject:ye,isFocused:R&&!o,getRootProps:ge,getInputProps:me,rootRef:C,inputRef:D,open:se(N)})}function ae(e,t){switch(t.type){case"focus":return Y(Y({},e),{},{isFocused:!0});case"blur":return Y(Y({},e),{},{isFocused:!1});case"openDialog":return Y(Y({},e),{},{isFileDialogActive:!0});case"closeDialog":return Y(Y({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var n=t.isDragActive,r=t.draggedFiles;return Y(Y({},e),{},{draggedFiles:r,isDragActive:n});case"setFiles":return Y(Y({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return Y({},oe);default:return e}}},61498:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},18207:function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},46633:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},33032:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var c=e[i](a),l=c.value}catch(u){return void n(u)}c.done?t(l):Promise.resolve(l).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function c(e){r(a,o,i,c,l,"next",e)}function l(e){r(a,o,i,c,l,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=7869.d312e0cb.chunk.js.map