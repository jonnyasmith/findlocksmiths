import{q as j,ai as S,aj as A,ak as F,F as k,al as z,ac as J,J as X,am as T,b as K,an as Q,h as f,L as H,i as P,O as g,s as L,g as u,k as w,ao as Z,ap as ee,aq as te,e as q,ar as I,H as O,as as re,j as ae,at as ne,au as oe,av as ie,aw as se,c as ue,p as le,a4 as ce,a as de}from"./R-QRupXs.js";function Te(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const fe=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Le(e){return fe.includes(e)}const _e={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ke(e){return e=e.toLowerCase(),_e[e]??e}const ve=["touchstart","touchmove"];function pe(e){return ve.includes(e)}const he=["textarea","script","style","title"];function Ne(e){return he.includes(e)}function Se(e,t){if(t){const r=document.body;e.autofocus=!0,j(()=>{document.activeElement===r&&e.focus()})}}let V=!1;function me(){V||(V=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function $(e){var t=F,r=k;S(null),A(null);try{return e()}finally{S(t),A(r)}}function Ae(e,t,r,o=r){e.addEventListener(t,()=>$(r));const n=e.__on_r;n?e.__on_r=()=>{n(),o(!0)}:e.__on_r=()=>o(!0),me()}const x=new Set,M=new Set;function ye(e,t,r,o={}){function n(a){if(o.capture||b.call(t,a),!a.cancelBubble)return $(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?j(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function Re(e,t,r,o,n){var a={capture:o,passive:n},i=ye(e,t,r,a);(t===document.body||t===window||t===document)&&z(()=>{t.removeEventListener(e,i,a)})}function Oe(e){for(var t=0;t<e.length;t++)x.add(e[t]);for(var r of M)r(e)}function b(e){var C;var t=this,r=t.ownerDocument,o=e.type,n=((C=e.composedPath)==null?void 0:C.call(e))||[],a=n[0]||e.target,i=0,_=e.__root;if(_){var c=n.indexOf(_);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var y=n.indexOf(t);if(y===-1)return;c<=y&&(i=c)}if(a=n[i]||e.target,a!==t){J(e,"currentTarget",{configurable:!0,get(){return a||r}});var R=F,v=k;S(null),A(null);try{for(var s,l=[];a!==null;){var h=a.assignedSlot||a.parentNode||a.host||null;try{var m=a["__"+o];if(m!=null&&(!a.disabled||e.target===a))if(X(m)){var[Y,...G]=m;Y.apply(a,[e,...G])}else m.call(a,e)}catch(N){s?l.push(N):s=N}if(e.cancelBubble||h===t||h===null)break;a=h}if(s){for(let N of l)queueMicrotask(()=>{throw N});throw s}}finally{e.__root=t,delete e.currentTarget,S(R),A(v)}}}let d;function Ee(){d=void 0}function Pe(e){let t=null,r=f;var o;if(f){for(t=u,d===void 0&&(d=w(document.head));d!==null&&(d.nodeType!==8||d.data!==H);)d=P(d);d===null?g(!1):d=L(P(d))}f||(o=document.head.appendChild(T()));try{K(()=>e(o),Q)}finally{r&&(g(!0),d=u,L(t))}}function B(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function p(e,t){var r=k;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Ie(e,t){var r=(t&ee)!==0,o=(t&te)!==0,n,a=!e.startsWith("<!>");return()=>{if(f)return p(u,null),u;n===void 0&&(n=B(a?e:"<!>"+e),r||(n=w(n)));var i=o||Z?document.importNode(n,!0):n.cloneNode(!0);if(r){var _=w(i),c=i.lastChild;p(_,c)}else p(i,i);return i}}function Me(e,t,r="svg"){var o=!e.startsWith("<!>"),n=`<${r}>${o?e:"<!>"+e}</${r}>`,a;return()=>{if(f)return p(u,null),u;if(!a){var i=B(n),_=w(i);a=w(_)}var c=a.cloneNode(!0);return p(c,c),c}}function De(e=""){if(!f){var t=T(e+"");return p(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=T()),L(r)),p(r,r),r}function Ce(){if(f)return p(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=T();return e.append(t,r),p(t,r),e}function Ve(e,t){if(f){k.nodes_end=u,q();return}e!==null&&e.before(t)}function We(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function ge(e,t){return U(e,t)}function je(e,t){I(),t.intro=t.intro??!1;const r=t.target,o=f,n=u;try{for(var a=w(r);a&&(a.nodeType!==8||a.data!==H);)a=P(a);if(!a)throw O;g(!0),L(a),q();const i=U(e,{...t,anchor:a});if(u===null||u.nodeType!==8||u.data!==re)throw ae(),O;return g(!1),i}catch(i){if(i===O)return t.recover===!1&&ne(),I(),oe(r),g(!1),ge(e,t);throw i}finally{g(o),L(n),Ee()}}const E=new Map;function U(e,{target:t,anchor:r,props:o={},events:n,context:a,intro:i=!0}){I();var _=new Set,c=v=>{for(var s=0;s<v.length;s++){var l=v[s];if(!_.has(l)){_.add(l);var h=pe(l);t.addEventListener(l,b,{passive:h});var m=E.get(l);m===void 0?(document.addEventListener(l,b,{passive:h}),E.set(l,1)):E.set(l,m+1)}}};c(ie(x)),M.add(c);var y=void 0,R=se(()=>{var v=r??t.appendChild(T());return ue(()=>{if(a){le({});var s=ce;s.c=a}n&&(o.$$events=n),f&&p(v,null),y=e(v,o)||{},f&&(k.nodes_end=u),a&&de()}),()=>{var h;for(var s of _){t.removeEventListener(s,b);var l=E.get(s);--l===0?(document.removeEventListener(s,b),E.delete(s)):E.set(s,l)}M.delete(c),v!==r&&((h=v.parentNode)==null||h.removeChild(v))}});return D.set(y,R),y}let D=new WeakMap;function Fe(e,t){const r=D.get(e);return r?(D.delete(e),r(t)):Promise.resolve()}const we="5";var W;typeof window<"u"&&((W=window.__svelte??(window.__svelte={})).v??(W.v=new Set)).add(we);export{Ve as a,p as b,Ce as c,B as d,je as e,De as f,Re as g,Pe as h,Ne as i,Te as j,ye as k,Ae as l,ge as m,Me as n,Oe as o,Se as p,ke as q,me as r,We as s,Ie as t,Fe as u,Le as v};
