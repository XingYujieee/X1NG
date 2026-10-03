(()=>{var Zc=Object.defineProperty;var Zo=(e,t,i)=>()=>{if(i)throw i[0];try{return e&&(t=e(e=0)),t}catch(r){throw i=[r],r}};var $c=(e,t)=>{for(var i in t)Zc(e,i,{get:t[i],enumerable:!0})};function Xu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ju(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function va(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function qu(){let e=va("canvas");return e.style.display="block",e}function gl(...e){let t="THREE."+e.shift();Yr?Yr("log",t,...e):console.log(t,...e)}function Dh(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Be(...e){e=Dh(e);let t="THREE."+e.shift();if(Yr)Yr("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Ge(...e){e=Dh(e);let t="THREE."+e.shift();if(Yr)Yr("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function zr(...e){let t=e.join(" ");t in ml||(ml[t]=!0,Be(...e))}function Yu(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}function cr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rt[e&255]+Rt[e>>8&255]+Rt[e>>16&255]+Rt[e>>24&255]+"-"+Rt[t&255]+Rt[t>>8&255]+"-"+Rt[t>>16&15|64]+Rt[t>>24&255]+"-"+Rt[i&63|128]+Rt[i>>8&255]+"-"+Rt[i>>16&255]+Rt[i>>24&255]+Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]).toLowerCase()}function Ze(e,t,i){return Math.max(t,Math.min(i,e))}function Mo(e,t){return(e%t+t)%t}function $u(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function Ju(e,t,i){return e!==t?(i-e)/(t-e):0}function da(e,t,i){return(1-i)*e+i*t}function Ku(e,t,i,r){return da(e,t,1-Math.exp(-i*r))}function Qu(e,t=1){return t-Math.abs(Mo(e,t*2)-t)}function ed(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function td(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function id(e,t){return e+Math.floor(Math.random()*(t-e+1))}function rd(e,t){return e+Math.random()*(t-e)}function ad(e){return e*(.5-Math.random())}function nd(e){e!==void 0&&(_l=e);let t=_l+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sd(e){return e*Gr}function od(e){return e*ya}function ld(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function hd(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function cd(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function ud(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),h=n((t+r)/2),c=s((t+r)/2),d=n((t-r)/2),u=s((t-r)/2),f=n((r-t)/2),v=s((r-t)/2);switch(a){case"XYX":e.set(o*c,l*d,l*u,o*h);break;case"YZY":e.set(l*u,o*c,l*d,o*h);break;case"ZXZ":e.set(l*d,l*u,o*c,o*h);break;case"XZX":e.set(o*c,l*v,l*f,o*h);break;case"YXY":e.set(l*f,o*c,l*v,o*h);break;case"ZYZ":e.set(l*v,l*f,o*c,o*h);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Nr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dd(){let e={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===at&&(a.r=Ei(a.r),a.g=Ei(a.g),a.b=Ei(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===at&&(a.r=Vr(a.r),a.g=Vr(a.g),a.b=Vr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Bi?bn:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return zr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return zr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Mn]:{primaries:t,whitePoint:r,transfer:bn,toXYZ:yl,fromXYZ:xl,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:t,whitePoint:r,transfer:at,toXYZ:yl,fromXYZ:xl,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),e}function Ei(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Vr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function Hn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?pd.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}function qn(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}function ts(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){Ji.fromArray(e,n);let o=a.x*Math.abs(Ji.x)+a.y*Math.abs(Ji.y)+a.z*Math.abs(Ji.z),l=t.dot(Ji),h=i.dot(Ji),c=r.dot(Ji);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}function Ed(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),r=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(r[l]=0,r[l|256]=32768,a[l]=24,a[l|256]=24):h<-14?(r[l]=1024>>-h-14,r[l|256]=1024>>-h-14|32768,a[l]=-h-1,a[l|256]=-h-1):h<=15?(r[l]=h+15<<10,r[l|256]=h+15<<10|32768,a[l]=13,a[l|256]=13):h<128?(r[l]=31744,r[l|256]=64512,a[l]=24,a[l|256]=24):(r[l]=31744,r[l|256]=64512,a[l]=13,a[l|256]=13)}let n=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;(h&8388608)===0;)h<<=1,c-=8388608;h&=-8388609,c+=947912704,n[l]=h|c}for(let l=1024;l<2048;++l)n[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:r,shiftTable:a,mantissaTable:n,exponentTable:s,offsetTable:o}}function Ld(e,t,i,r,a,n,s,o){let l;if(t.side===zt?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===wi,o),l===null)return null;Ja.copy(o),Ja.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(Ja);return h<i.near||h>i.far?null:{distance:h,point:Ja.clone(),object:e}}function Ka(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,qa),e.getVertexPosition(l,Ya),e.getVertexPosition(h,Za);let c=Ld(e,t,i,r,qa,Ya,Za,Il);if(c){let d=new R;Ur.getBarycoord(Il,qa,Ya,Za,d),a&&(c.uv=Ur.getInterpolatedAttribute(a,o,l,h,d,new oe)),n&&(c.uv1=Ur.getInterpolatedAttribute(n,o,l,h,d,new oe)),s&&(c.normal=Ur.getInterpolatedAttribute(s,o,l,h,d,new R),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new R,materialIndex:0};Ur.getNormal(qa,Ya,Za,u.normal),c.face=u,c.barycoord=d}return c}function Ao(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,c,d){let u=(s-n)/h-(o-n)/(h+c)+(o-s)/c,f=(o-s)/c-(l-s)/(c+d)+(l-o)/d;u*=c,f*=c,a(s,o,u,f)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}function Ul(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function Xd(e,t){let i=1-e;return i*i*t}function jd(e,t){return 2*(1-e)*e*t}function qd(e,t){return e*e*t}function pa(e,t,i,r){return Xd(e,t)+jd(e,i)+qd(e,r)}function Yd(e,t){let i=1-e;return i*i*i*t}function Zd(e,t){let i=1-e;return 3*i*i*e*t}function $d(e,t){return 3*(1-e)*e*e*t}function Jd(e,t){return e*e*e*t}function fa(e,t,i,r,a){return Yd(e,t)+Zd(e,i)+$d(e,r)+Jd(e,a)}function tp(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=nc(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h;if(r&&(n=sp(e,t,n,i)),e.length>80*i){o=e[0],l=e[1];let c=o,d=l;for(let u=i;u<a;u+=i){let f=e[u],v=e[u+1];f<o&&(o=f),v<l&&(l=v),f>c&&(c=f),v>d&&(d=v)}h=Math.max(c-o,d-l),h=h!==0?32767/h:0}return ba(n,s,i,o,l,h,0),s}function nc(e,t,i,r,a){let n;if(a===_p(e,t,i,r)>0)for(let s=t;s<i;s+=r)n=Fl(s/r|0,e[s],e[s+1],n);else for(let s=i-r;s>=t;s-=r)n=Fl(s/r|0,e[s],e[s+1],n);return n&&$r(n,n.next)&&(Ta(n),n=n.next),n}function lr(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&($r(i,i.next)||mt(i.prev,i,i.next)===0)){if(Ta(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function ba(e,t,i,r,a,n,s){if(!e)return;!s&&n&&up(e,r,a,n);let o=e;for(;e.prev!==e.next;){let l=e.prev,h=e.next;if(n?rp(e,r,a,n):ip(e)){t.push(l.i,e.i,h.i),Ta(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=ap(lr(e),t),ba(e,t,i,r,a,n,2)):s===2&&np(e,t,i,r,a,n):ba(lr(e),t,i,r,a,n,1);break}}}function ip(e){let t=e.prev,i=e,r=e.next;if(mt(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,h=r.y,c=Math.min(a,n,s),d=Math.min(o,l,h),u=Math.max(a,n,s),f=Math.max(o,l,h),v=r.next;for(;v!==t;){if(v.x>=c&&v.x<=u&&v.y>=d&&v.y<=f&&ha(a,o,n,l,s,h,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function rp(e,t,i,r){let a=e.prev,n=e,s=e.next;if(mt(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,c=a.y,d=n.y,u=s.y,f=Math.min(o,l,h),v=Math.min(c,d,u),y=Math.max(o,l,h),m=Math.max(c,d,u),p=no(f,v,t,i,r),S=no(y,m,t,i,r),E=e.prevZ,_=e.nextZ;for(;E&&E.z>=p&&_&&_.z<=S;){if(E.x>=f&&E.x<=y&&E.y>=v&&E.y<=m&&E!==a&&E!==s&&ha(o,c,l,d,h,u,E.x,E.y)&&mt(E.prev,E,E.next)>=0||(E=E.prevZ,_.x>=f&&_.x<=y&&_.y>=v&&_.y<=m&&_!==a&&_!==s&&ha(o,c,l,d,h,u,_.x,_.y)&&mt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=y&&E.y>=v&&E.y<=m&&E!==a&&E!==s&&ha(o,c,l,d,h,u,E.x,E.y)&&mt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;_&&_.z<=S;){if(_.x>=f&&_.x<=y&&_.y>=v&&_.y<=m&&_!==a&&_!==s&&ha(o,c,l,d,h,u,_.x,_.y)&&mt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ap(e,t){let i=e;do{let r=i.prev,a=i.next.next;!$r(r,a)&&oc(r,i,i.next,a)&&Sa(r,a)&&Sa(a,r)&&(t.push(r.i,i.i,a.i),Ta(i),Ta(i.next),i=e=a),i=i.next}while(i!==e);return lr(i)}function np(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&fp(s,o)){let l=lc(s,o);s=lr(s,s.next),l=lr(l,l.next),ba(s,t,i,r,a,n,0),ba(l,t,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function sp(e,t,i,r){let a=[];for(let n=0,s=t.length;n<s;n++){let o=t[n]*r,l=n<s-1?t[n+1]*r:e.length,h=nc(e,o,l,r,!1);h===h.next&&(h.steiner=!0),a.push(pp(h))}a.sort(op);for(let n=0;n<a.length;n++)i=lp(a[n],i);return i}function op(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let r=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);i=r-a}return i}function lp(e,t){let i=hp(e,t);if(!i)return t;let r=lc(i,e);return lr(r,r.next),lr(i,i.next)}function hp(e,t){let i=t,r=e.x,a=e.y,n=-1/0,s;if($r(e,i))return i;do{if($r(e,i.next))return i.next;if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){let d=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=r&&d>n&&(n=d,s=i.x<i.next.x?i:i.next,d===r))return s}i=i.next}while(i!==t);if(!s)return null;let o=s,l=s.x,h=s.y,c=1/0;i=s;do{if(r>=i.x&&i.x>=l&&r!==i.x&&sc(a<h?r:n,a,l,h,a<h?n:r,a,i.x,i.y)){let d=Math.abs(a-i.y)/(r-i.x);Sa(i,e)&&(d<c||d===c&&(i.x>s.x||i.x===s.x&&cp(s,i)))&&(s=i,c=d)}i=i.next}while(i!==o);return s}function cp(e,t){return mt(e.prev,e,t.prev)<0&&mt(t.next,e,e.next)<0}function up(e,t,i,r){let a=e;do a.z===0&&(a.z=no(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,dp(a)}function dp(e){let t,i=1;do{let r=e,a;e=null;let n=null;for(t=0;r;){t++;let s=r,o=0;for(let h=0;h<i&&(o++,s=s.nextZ,!!s);h++);let l=i;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(a=r,r=r.nextZ,o--):(a=s,s=s.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=s}n.nextZ=null,i*=2}while(t>1);return e}function no(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function pp(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function sc(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function ha(e,t,i,r,a,n,s,o){return!(e===s&&t===o)&&sc(e,t,i,r,a,n,s,o)}function fp(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!mp(e,t)&&(Sa(e,t)&&Sa(t,e)&&gp(e,t)&&(mt(e.prev,e,t.prev)||mt(e,t.prev,t))||$r(e,t)&&mt(e.prev,e,e.next)>0&&mt(t.prev,t,t.next)>0)}function mt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function $r(e,t){return e.x===t.x&&e.y===t.y}function oc(e,t,i,r){let a=nn(mt(e,t,i)),n=nn(mt(e,t,r)),s=nn(mt(i,r,e)),o=nn(mt(i,r,t));return!!(a!==n&&s!==o||a===0&&an(e,i,t)||n===0&&an(e,r,t)||s===0&&an(i,e,r)||o===0&&an(i,t,r))}function an(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function nn(e){return e>0?1:e<0?-1:0}function mp(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&oc(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Sa(e,t){return mt(e.prev,e,e.next)<0?mt(e,t,e.next)>=0&&mt(e,e.prev,t)>=0:mt(e,t,e.prev)<0||mt(e,e.next,t)<0}function gp(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function lc(e,t){let i=so(e.i,e.x,e.y),r=so(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function Fl(e,t,i,r){let a=so(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function Ta(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function so(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _p(e,t,i,r){let a=0;for(let n=t,s=i-r;n<i;n+=r)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}function Bl(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function zl(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}function Mp(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}function Ap(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}function Gl(e,t,i){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(r)===!0||i.has(a)===!0?!1:(i.add(r),i.add(a),!0)}function Jr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(Vl(a))a.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(Vl(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Ut(e){let t={};for(let i=0;i<e.length;i++){let r=Jr(e[i]);for(let a in r)t[a]=r[a]}return t}function Vl(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Np(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function bc(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qe.workingColorSpace}function Cr(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function us(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function Sc(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function Xp(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function jp(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=Sc(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=Xp(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}function kl(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}function Hl(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}function rf(){this._document.hidden===!1&&this.reset()}function ql(e,t){return e.distance-t.distance}function oo(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)oo(n[s],t,i,!0)}}function Yl(e,t,i,r){let a=pf(r);switch(i){case Ph:return e*t;case Lh:return e*t/a.components*a.byteLength;case go:return e*t/a.components*a.byteLength;case or:return e*t*2/a.components*a.byteLength;case _o:return e*t*2/a.components*a.byteLength;case Ih:return e*t*3/a.components*a.byteLength;case Qt:return e*t*4/a.components*a.byteLength;case vo:return e*t*4/a.components*a.byteLength;case un:case dn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pn:case fn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rs:case Is:return Math.max(e,16)*Math.max(t,8)/4;case Cs:case Ps:return Math.max(e,8)*Math.max(t,8)/2;case Ls:case Ds:case Us:case Os:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ns:case vn:case Fs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Bs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case zs:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Gs:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Vs:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ks:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Hs:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ws:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Xs:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case js:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case qs:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ys:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Zs:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case $s:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Js:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ks:case Qs:case eo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case to:case io:return Math.ceil(e/4)*Math.ceil(t/4)*8;case yn:case ro:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function pf(e){switch(e){case jt:case wh:return{byteLength:1,components:1};case ga:case Ah:case pi:return{byteLength:2,components:1};case fo:case mo:return{byteLength:2,components:4};case di:case po:case hi:return{byteLength:4,components:1};case Ch:case Rh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}function wc(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function ff(e){let t=new WeakMap;function i(o,l){let h=o.array,c=o.usage,d=h.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,h,c),o.onUploadCallback();let f;if(h instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=e.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=e.SHORT;else if(h instanceof Uint32Array)f=e.UNSIGNED_INT;else if(h instanceof Int32Array)f=e.INT;else if(h instanceof Int8Array)f=e.BYTE;else if(h instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,h){let c=l.array,d=l.updateRanges;if(e.bindBuffer(h,o),d.length===0)e.bufferSubData(h,0,c);else{d.sort((f,v)=>f.start-v.start);let u=0;for(let f=1;f<d.length;f++){let v=d[u],y=d[f];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,v=d.length;f<v;f++){let y=d[f];e.bufferSubData(h,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}function $g(e,t,i,r,a,n){let s=new tt(0),o=a===!0?0:1,l,h,c=null,d=0,u=null;function f(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){let _=S.backgroundBlurriness>0;E=t.get(E,_)}return E}function v(S){let E=!1,_=f(S);_===null?m(s,o):_&&_.isColor&&(m(_,1),E=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,n):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function y(S,E){let _=f(E);_&&(_.isCubeTexture||_.mapping===En)?(h===void 0&&(h=new Gt(new wa(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:Jr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Ac),h.material.toneMapped=Qe.getTransfer(_.colorSpace)!==at,(c!==_||d!==_.version||u!==e.toneMapping)&&(h.material.needsUpdate=!0,c=_,d=_.version,u=e.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Gt(new Ca(2,2),new qt({name:"BackgroundMaterial",uniforms:Jr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(_.colorSpace)!==at,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||d!==_.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,c=_,d=_.version,u=e.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,E){S.getRGB(ln,bc(e)),i.buffers.color.setClear(ln.r,ln.g,ln.b,E,n)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(S,E=1){s.set(S),o=E,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(s,o)},render:v,addToRenderList:y,dispose:p}}function Jg(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=u(null),n=a,s=!1;function o(P,N,W,L,z){let Z=!1,k=d(P,L,W,N);n!==k&&(n=k,h(n.object)),Z=f(P,L,W,z),Z&&v(P,L,W,z),z!==null&&t.update(z,e.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,_(P,N,W,L),z!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return e.createVertexArray()}function h(P){return e.bindVertexArray(P)}function c(P){return e.deleteVertexArray(P)}function d(P,N,W,L){let z=L.wireframe===!0,Z=r[N.id];Z===void 0&&(Z={},r[N.id]=Z);let k=P.isInstancedMesh===!0?P.id:0,le=Z[k];le===void 0&&(le={},Z[k]=le);let q=le[W.id];q===void 0&&(q={},le[W.id]=q);let Y=q[z];return Y===void 0&&(Y=u(l()),q[z]=Y),Y}function u(P){let N=[],W=[],L=[];for(let z=0;z<i;z++)N[z]=0,W[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:L,object:P,attributes:{},index:null}}function f(P,N,W,L){let z=n.attributes,Z=N.attributes,k=0,le=W.getAttributes();for(let q in le)if(le[q].location>=0){let Y=z[q],ee=Z[q];if(ee===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor)),Y===void 0||Y.attribute!==ee||ee&&Y.data!==ee.data)return!0;k++}return n.attributesNum!==k||n.index!==L}function v(P,N,W,L){let z={},Z=N.attributes,k=0,le=W.getAttributes();for(let q in le)if(le[q].location>=0){let Y=Z[q];Y===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor));let ee={};ee.attribute=Y,Y&&Y.data&&(ee.data=Y.data),z[q]=ee,k++}n.attributes=z,n.attributesNum=k,n.index=L}function y(){let P=n.newAttributes;for(let N=0,W=P.length;N<W;N++)P[N]=0}function m(P){p(P,0)}function p(P,N){let W=n.newAttributes,L=n.enabledAttributes,z=n.attributeDivisors;W[P]=1,L[P]===0&&(e.enableVertexAttribArray(P),L[P]=1),z[P]!==N&&(e.vertexAttribDivisor(P,N),z[P]=N)}function S(){let P=n.newAttributes,N=n.enabledAttributes;for(let W=0,L=N.length;W<L;W++)N[W]!==P[W]&&(e.disableVertexAttribArray(W),N[W]=0)}function E(P,N,W,L,z,Z,k){k===!0?e.vertexAttribIPointer(P,N,W,z,Z):e.vertexAttribPointer(P,N,W,L,z,Z)}function _(P,N,W,L){y();let z=L.attributes,Z=W.getAttributes(),k=N.defaultAttributeValues;for(let le in Z){let q=Z[le];if(q.location>=0){let Y=z[le];if(Y===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){let ee=Y.normalized,he=Y.itemSize,fe=t.get(Y);if(fe===void 0)continue;let Xe=fe.buffer,Ce=fe.type,j=fe.bytesPerElement,te=Ce===e.INT||Ce===e.UNSIGNED_INT||Y.gpuType===po;if(Y.isInterleavedBufferAttribute){let re=Y.data,be=re.stride,Ee=Y.offset;if(re.isInstancedInterleavedBuffer){for(let ce=0;ce<q.locationSize;ce++)p(q.location+ce,re.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ce=0;ce<q.locationSize;ce++)m(q.location+ce);e.bindBuffer(e.ARRAY_BUFFER,Xe);for(let ce=0;ce<q.locationSize;ce++)E(q.location+ce,he/q.locationSize,Ce,ee,be*j,(Ee+he/q.locationSize*ce)*j,te)}else{if(Y.isInstancedBufferAttribute){for(let re=0;re<q.locationSize;re++)p(q.location+re,Y.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let re=0;re<q.locationSize;re++)m(q.location+re);e.bindBuffer(e.ARRAY_BUFFER,Xe);for(let re=0;re<q.locationSize;re++)E(q.location+re,he/q.locationSize,Ce,ee,he*j,he/q.locationSize*re*j,te)}}else if(k!==void 0){let ee=k[le];if(ee!==void 0)switch(ee.length){case 2:e.vertexAttrib2fv(q.location,ee);break;case 3:e.vertexAttrib3fv(q.location,ee);break;case 4:e.vertexAttrib4fv(q.location,ee);break;default:e.vertexAttrib1fv(q.location,ee)}}}}S()}function T(){b();for(let P in r){let N=r[P];for(let W in N){let L=N[W];for(let z in L){let Z=L[z];for(let k in Z)c(Z[k].object),delete Z[k];delete L[z]}}delete r[P]}}function A(P){if(r[P.id]===void 0)return;let N=r[P.id];for(let W in N){let L=N[W];for(let z in L){let Z=L[z];for(let k in Z)c(Z[k].object),delete Z[k];delete L[z]}}delete r[P.id]}function C(P){for(let N in r){let W=r[N];for(let L in W){let z=W[L];if(z[P.id]===void 0)continue;let Z=z[P.id];for(let k in Z)c(Z[k].object),delete Z[k];delete z[P.id]}}}function g(P){for(let N in r){let W=r[N],L=P.isInstancedMesh===!0?P.id:0,z=W[L];if(z!==void 0){for(let Z in z){let k=z[Z];for(let le in k)c(k[le].object),delete k[le];delete z[Z]}delete W[L],Object.keys(W).length===0&&delete r[N]}}}function b(){D(),s=!0,n!==a&&(n=a,h(n.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:b,resetDefaultState:D,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function Kg(e,t,i){let r;function a(l){r=l}function n(l,h){e.drawArrays(r,l,h),i.update(h,r,1)}function s(l,h,c){c!==0&&(e.drawArraysInstanced(r,l,h,c),i.update(h,r,c))}function o(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,c);let d=0;for(let u=0;u<c;u++)d+=h[u];i.update(d,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function Qg(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(C){return!(C!==Qt&&r.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let g=C===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==jt&&C!==hi&&!g&&r.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(Be("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=i.logarithmicDepthBuffer===!0,u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&u===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),S=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),E=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:_,maxSamples:T,samples:A}}function e0(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Fi,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||r!==0||a;return a=u,r=d.length,f},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,u){i=c(d,u,0)},this.setState=function(d,u,f){let v=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=e.get(d);if(!a||v===null||v.length===0||n&&!m)n?c(null):h();else{let S=n?0:r,E=S*4,_=p.clippingState||null;l.value=_,_=c(v,u,E,f);for(let T=0;T!==E;++T)_[T]=i[T];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(d,u,f,v){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,v!==!0||m===null){let p=f+y*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,_=f;E!==y;++E,_+=4)s.copy(d[E]).applyMatrix4(S,o),s.normal.toArray(m,_),m[_+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function n0(e){let t=[],i=[],r=e,a=e-Br+1+t0;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let o=1/(s-2),l=-o,h=1+o,c=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,u=6,f=3,v=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,E=p>2?0:-1,_=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];v.set(_,f*u*p);for(let T=0;T<u;T++){let A=c[T*2]*2-1,C=c[T*2+1]*2-1;p===0?er.set(1,C,A):p===1?er.set(-A,1,-C):p===2?er.set(-A,C,1):p===3?er.set(-1,C,-A):p===4?er.set(-A,-1,C):er.set(A,C,-1),er.toArray(y,(p*u+T)*f)}}let m=new vt;m.setAttribute("position",new ui(v,f)),m.setAttribute("outputDirection",new ui(y,f)),i.push(new Gt(m,null)),r>Br&&r--}return{lodMeshes:i,sizeLods:t}}function $l(e,t,i){let r=new ti(e,t,i);return r.texture.mapping=En,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Lr(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function s0(e,t,i){return new qt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:r0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:An(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function o0(e,t,i){return new qt({name:"SphericalGaussianBlur",defines:{SAMPLES:i0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:An(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Jl(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:An(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Kl(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:An(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function An(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function l0(e){let t=new WeakMap,i=new WeakMap,r=null;function a(u,f=!1){return u==null?null:f?s(u):n(u)}function n(u){if(u&&u.isTexture){let f=u.mapping;if(f===On||f===Fn)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let y=new Cc(v.height);return y.fromEquirectangularTexture(e,u),t.set(u,y),u.addEventListener("dispose",h),o(y.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let f=u.mapping,v=f===On||f===Fn,y=f===sr||f===qr;if(v||y){let m=i.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return r===null&&(r=new lo(e)),m=v?r.fromEquirectangular(u,m):r.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return v&&S&&S.height>0||y&&S&&l(S)?(r===null&&(r=new lo(e)),m=v?r.fromEquirectangular(u):r.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",c),m.texture):null}}}return u}function o(u,f){return f===On?u.mapping=sr:f===Fn&&(u.mapping=qr),u}function l(u){let f=0,v=6;for(let y=0;y<v;y++)u[y]!==void 0&&f++;return f===v}function h(u){let f=u.target;f.removeEventListener("dispose",h);let v=t.get(f);v!==void 0&&(t.delete(f),v.dispose())}function c(u){let f=u.target;f.removeEventListener("dispose",c);let v=i.get(f);v!==void 0&&(i.delete(f),v.dispose())}function d(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:d}}function h0(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&zr("WebGLRenderer: "+r+" extension not supported."),a}}}function c0(e,t,i,r){let a={},n=new WeakMap;function s(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",s),delete a[u.id];let f=n.get(u);f&&(t.remove(f),n.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function o(d,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,i.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],e.ARRAY_BUFFER)}function h(d){let u=[],f=d.index,v=d.attributes.position,y=0;if(v===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let E=0,_=S.length;E<_;E+=3){let T=S[E+0],A=S[E+1],C=S[E+2];u.push(T,A,A,C,C,T)}}else{let S=v.array;y=v.version;for(let E=0,_=S.length/3-1;E<_;E+=3){let T=E+0,A=E+1,C=E+2;u.push(T,A,A,C,C,T)}}let m=new(v.count>=65535?zh:Bh)(u,1);m.version=y;let p=n.get(d);p&&t.remove(p),n.set(d,m)}function c(d){let u=n.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return n.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function u0(e,t,i){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,u){e.drawElements(r,u,n,d*s),i.update(u,r,1)}function h(d,u,f){f!==0&&(e.drawElementsInstanced(r,u,n,d*s,f),i.update(u,r,f))}function c(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,n,d,0,f);let v=0;for(let y=0;y<f;y++)v+=u[y];i.update(v,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function d0(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:Ge("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function p0(e,t,i){let r=new WeakMap,a=new dt;function n(s,o,l){let h=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0,u=r.get(o);if(u===void 0||u.count!==d){let f=function(){g.dispose(),r.delete(o),o.removeEventListener("dispose",f)};u!==void 0&&u.texture.dispose();let v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],_=0;v===!0&&(_=1),y===!0&&(_=2),m===!0&&(_=3);let T=o.attributes.position.count*_,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let C=new Float32Array(T*A*4*d),g=new Nh(C,T,A,d);g.type=hi,g.needsUpdate=!0;let b=_*4;for(let D=0;D<d;D++){let P=p[D],N=S[D],W=E[D],L=T*A*4*D;for(let z=0;z<P.count;z++){let Z=z*b;v===!0&&(a.fromBufferAttribute(P,z),C[L+Z+0]=a.x,C[L+Z+1]=a.y,C[L+Z+2]=a.z,C[L+Z+3]=0),y===!0&&(a.fromBufferAttribute(N,z),C[L+Z+4]=a.x,C[L+Z+5]=a.y,C[L+Z+6]=a.z,C[L+Z+7]=0),m===!0&&(a.fromBufferAttribute(W,z),C[L+Z+8]=a.x,C[L+Z+9]=a.y,C[L+Z+10]=a.z,C[L+Z+11]=W.itemSize===4?a.w:1)}}u={count:d,texture:g,size:new oe(T,A)},r.set(o,u),o.addEventListener("dispose",f)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let f=0;for(let y=0;y<h.length;y++)f+=h[y];let v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:n}}function f0(e,t,i,r,a){let n=new WeakMap;function s(h){let c=a.render.frame,d=h.geometry,u=t.get(h,d);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),n.get(h)!==c&&(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,e.ARRAY_BUFFER),n.set(h,c))),h.isSkinnedMesh){let f=h.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function o(){n=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),r.releaseStatesOfObject(c),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:s,dispose:o}}function g0(e,t,i,r,a,n){let s=new ti(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new vt;h.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ke([0,2,0,0,2,0],2));let c=new Bp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Gt(h,c),u=new Ec(-1,1,1,-1,0,1),f=null,v=null,y=!1,m,p=null,S=[],E=!1;this.setSize=function(_,T){s.setSize(_,T),o!==null&&o.setSize(_,T),l!==null&&l.setSize(_,T);for(let A=0;A<S.length;A++){let C=S[A];C.setSize&&C.setSize(_,T)}},this.setEffects=function(_){S=_,E=S.length>0&&S[0].isRenderPass===!0;let T=s.width,A=s.height;S.length>0&&o===null&&(o=new ti(T,A,{type:pi,depthBuffer:!1,stencilBuffer:!1}),l=new ti(T,A,{type:pi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){let g=S[C];g.setSize&&g.setSize(T,A)}},this.begin=function(_,T){if(y||_.toneMapping===ci&&S.length===0)return!1;if(p=T,T!==null){let A=T.width,C=T.height;(s.width!==A||s.height!==C)&&this.setSize(A,C)}return E===!1&&_.setRenderTarget(s),m=_.toneMapping,_.toneMapping=ci,!0},this.hasRenderPass=function(){return E},this.end=function(_,T){_.toneMapping=m,y=!0;let A=s,C=o;for(let g=0;g<S.length;g++){let b=S[g];b.enabled!==!1&&(b.render(_,C,A,T),b.needsSwap!==!1&&(A=C,C=C===o?l:o))}if(f!==_.outputColorSpace||v!==_.toneMapping){f=_.outputColorSpace,v=_.toneMapping,c.defines={},Qe.getTransfer(f)===at&&(c.defines.SRGB_TRANSFER="");let g=m0[v];g&&(c.defines[g]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,_.setRenderTarget(p),_.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),c.dispose()}}function Kr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=Ql[a];if(n===void 0&&(n=new Float32Array(a),Ql[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function Tt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Et(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Cn(e,t){let i=eh[t];i===void 0&&(i=new Int32Array(t),eh[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function _0(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function v0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tt(i,t))return;e.uniform2fv(this.addr,t),Et(i,t)}}function y0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Tt(i,t))return;e.uniform3fv(this.addr,t),Et(i,t)}}function x0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tt(i,t))return;e.uniform4fv(this.addr,t),Et(i,t)}}function M0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Tt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Et(i,t)}else{if(Tt(i,r))return;rh.set(r),e.uniformMatrix2fv(this.addr,!1,rh),Et(i,r)}}function b0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Tt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Et(i,t)}else{if(Tt(i,r))return;ih.set(r),e.uniformMatrix3fv(this.addr,!1,ih),Et(i,r)}}function S0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Tt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Et(i,t)}else{if(Tt(i,r))return;th.set(r),e.uniformMatrix4fv(this.addr,!1,th),Et(i,r)}}function T0(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function E0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tt(i,t))return;e.uniform2iv(this.addr,t),Et(i,t)}}function w0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tt(i,t))return;e.uniform3iv(this.addr,t),Et(i,t)}}function A0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tt(i,t))return;e.uniform4iv(this.addr,t),Et(i,t)}}function C0(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function R0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tt(i,t))return;e.uniform2uiv(this.addr,t),Et(i,t)}}function P0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tt(i,t))return;e.uniform3uiv(this.addr,t),Et(i,t)}}function I0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tt(i,t))return;e.uniform4uiv(this.addr,t),Et(i,t)}}function L0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(ho.compareFunction=i.isReversedDepthBuffer()?xo:yo,n=ho):n=Rc,i.setTexture2D(t||n,a)}function D0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Ic,a)}function N0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||Lc,a)}function U0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Pc,a)}function O0(e){switch(e){case 5126:return _0;case 35664:return v0;case 35665:return y0;case 35666:return x0;case 35674:return M0;case 35675:return b0;case 35676:return S0;case 5124:case 35670:return T0;case 35667:case 35671:return E0;case 35668:case 35672:return w0;case 35669:case 35673:return A0;case 5125:return C0;case 36294:return R0;case 36295:return P0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return U0}}function F0(e,t){e.uniform1fv(this.addr,t)}function B0(e,t){let i=Kr(t,this.size,2);e.uniform2fv(this.addr,i)}function z0(e,t){let i=Kr(t,this.size,3);e.uniform3fv(this.addr,i)}function G0(e,t){let i=Kr(t,this.size,4);e.uniform4fv(this.addr,i)}function V0(e,t){let i=Kr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function k0(e,t){let i=Kr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function H0(e,t){let i=Kr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function W0(e,t){e.uniform1iv(this.addr,t)}function X0(e,t){e.uniform2iv(this.addr,t)}function j0(e,t){e.uniform3iv(this.addr,t)}function q0(e,t){e.uniform4iv(this.addr,t)}function Y0(e,t){e.uniform1uiv(this.addr,t)}function Z0(e,t){e.uniform2uiv(this.addr,t)}function $0(e,t){e.uniform3uiv(this.addr,t)}function J0(e,t){e.uniform4uiv(this.addr,t)}function K0(e,t,i){let r=this.cache,a=t.length,n=Cn(i,a);Tt(r,n)||(e.uniform1iv(this.addr,n),Et(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=ho:s=Rc;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function Q0(e,t,i){let r=this.cache,a=t.length,n=Cn(i,a);Tt(r,n)||(e.uniform1iv(this.addr,n),Et(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||Ic,n[s])}function e_(e,t,i){let r=this.cache,a=t.length,n=Cn(i,a);Tt(r,n)||(e.uniform1iv(this.addr,n),Et(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||Lc,n[s])}function t_(e,t,i){let r=this.cache,a=t.length,n=Cn(i,a);Tt(r,n)||(e.uniform1iv(this.addr,n),Et(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||Pc,n[s])}function i_(e){switch(e){case 5126:return F0;case 35664:return B0;case 35665:return z0;case 35666:return G0;case 35674:return V0;case 35675:return k0;case 35676:return H0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return j0;case 35669:case 35673:return q0;case 5125:return Y0;case 36294:return Z0;case 36295:return $0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return t_}}function ah(e,t){e.seq.push(t),e.map[t.id]=t}function s_(e,t,i){let r=e.name,a=r.length;for(_s.lastIndex=0;;){let n=_s.exec(r),s=_s.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){ah(i,h===void 0?new r_(o,e,t):new a_(o,e,t));break}else{let c=i.map[o];c===void 0&&(c=new n_(o),ah(i,c)),i=c}}}function nh(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}function h_(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}function c_(e){Qe._getMatrix(sh,Qe.workingColorSpace,e);let t=`mat3( ${sh.elements.map(i=>i.toFixed(4))} )`;switch(Qe.getTransfer(e)){case bn:return[t,"LinearTransferOETF"];case at:return[t,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function oh(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+h_(e.getShaderSource(t),s)}else return a}function u_(e,t){let i=c_(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function p_(e,t){let i=d_[t];return i===void 0?(Be("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function f_(){Qe.getLuminanceCoefficients(hn);let e=hn.x.toFixed(4),t=hn.y.toFixed(4),i=hn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m_(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function g_(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function __(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function ca(e){return e!==""}function lh(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function co(e){return e.replace(v_,x_)}function x_(e,t){let i=qe[t];if(i===void 0){let r=y_.get(t);if(r!==void 0)i=qe[r],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return co(i)}function ch(e){return e.replace(M_,b_)}function b_(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function uh(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function T_(e){return S_[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function w_(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":E_[e.envMapMode]||"ENVMAP_TYPE_CUBE"}function C_(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":A_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}function P_(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":R_[e.combine]||"ENVMAP_BLENDING_NONE"}function I_(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function L_(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=T_(i),h=w_(i),c=C_(i),d=P_(i),u=I_(i),f=m_(i),v=g_(n),y=a.createProgram(),m,p,S=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v].filter(ca).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v].filter(ca).join(`
`),p.length>0&&(p+=`
`)):(m=[uh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),p=[uh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ci?"#define TONE_MAPPING":"",i.toneMapping!==ci?qe.tonemapping_pars_fragment:"",i.toneMapping!==ci?p_("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,u_("linearToOutputTexel",i.outputColorSpace),f_(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ca).join(`
`)),s=co(s),s=lh(s,i),s=hh(s,i),o=co(o),o=lh(o,i),o=hh(o,i),s=ch(s),o=ch(o),i.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",i.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=S+m+s,_=S+p+o,T=nh(a,a.VERTEX_SHADER,E),A=nh(a,a.FRAGMENT_SHADER,_);a.attachShader(y,T),a.attachShader(y,A),i.index0AttributeName!==void 0?a.bindAttribLocation(y,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function C(P){if(e.debug.checkShaderErrors){let N=a.getProgramInfoLog(y)||"",W=a.getShaderInfoLog(T)||"",L=a.getShaderInfoLog(A)||"",z=N.trim(),Z=W.trim(),k=L.trim(),le=!0,q=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(le=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,y,T,A);else{let Y=oh(a,T,"vertex"),ee=oh(a,A,"fragment");Ge("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+Y+`
`+ee)}else z!==""?Be("WebGLProgram: Program Info Log:",z):(Z===""||k==="")&&(q=!1);q&&(P.diagnostics={runnable:le,programLog:z,vertexShader:{log:Z,prefix:m},fragmentShader:{log:k,prefix:p}})}a.deleteShader(T),a.deleteShader(A),g=new _n(a,y),b=__(a,y)}let g;this.getUniforms=function(){return g===void 0&&C(this),g};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(y,o_)),D},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=l_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=A,this}function O_(e){return e===or||e===vn||e===yn}function F_(e,t,i,r,a,n){let s=new So,o=new N_,l=new Set,h=[],c=new Map,d=r.logarithmicDepthBuffer,u=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(g){return l.add(g),g===0?"uv":`uv${g}`}function y(g,b,D,P,N,W){let L=P.fog,z=N.geometry,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,k=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,le=t.get(g.envMap||Z,k),q=le&&le.mapping===En?le.image.height:null,Y=f[g.type];g.precision!==null&&(u=r.getMaxPrecision(g.precision),u!==g.precision&&Be("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));let ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,he=ee!==void 0?ee.length:0,fe=0;z.morphAttributes.position!==void 0&&(fe=1),z.morphAttributes.normal!==void 0&&(fe=2),z.morphAttributes.color!==void 0&&(fe=3);let Xe,Ce,j,te;if(Y){let St=li[Y];Xe=St.vertexShader,Ce=St.fragmentShader}else{Xe=g.vertexShader,Ce=g.fragmentShader;let St=o.getVertexShaderStage(g),rt=o.getFragmentShaderStage(g);o.update(g,St,rt),j=St.id,te=rt.id}let re=e.getRenderTarget(),be=e.state.buffers.depth.getReversed(),Ee=N.isInstancedMesh===!0,ce=N.isBatchedMesh===!0,We=!!g.map,Q=!!g.matcap,K=!!le,ae=!!g.aoMap,ve=!!g.lightMap,xe=!!g.bumpMap&&g.wireframe===!1,we=!!g.normalMap,Le=!!g.displacementMap,Ve=!!g.emissiveMap,Oe=!!g.metalnessMap,I=!!g.roughnessMap,lt=g.anisotropy>0,Ke=g.clearcoat>0,$e=g.dispersion>0,w=g.retroreflectivity>0,x=g.iridescence>0,U=g.sheen>0,H=g.transmission>0,J=lt&&!!g.anisotropyMap,pe=Ke&&!!g.clearcoatMap,me=Ke&&!!g.clearcoatNormalMap,B=Ke&&!!g.clearcoatRoughnessMap,ue=x&&!!g.iridescenceMap,_e=x&&!!g.iridescenceThicknessMap,Re=U&&!!g.sheenColorMap,se=U&&!!g.sheenRoughnessMap,Ne=!!g.specularMap,Ue=!!g.specularColorMap,He=!!g.specularIntensityMap,it=H&&!!g.transmissionMap,F=H&&!!g.thicknessMap,$=!!g.gradientMap,ie=!!g.alphaMap,Se=g.alphaTest>0,Pe=!!g.alphaHash,ne=!!g.extensions,Me=ci;g.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Me=e.toneMapping);let ze={shaderID:Y,shaderType:g.type,shaderName:g.name,vertexShader:Xe,fragmentShader:Ce,defines:g.defines,customVertexShaderID:j,customFragmentShaderID:te,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:ce,batchingColor:ce&&N._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&N.instanceColor!==null,instancingMorph:Ee&&N.morphTexture!==null,outputColorSpace:re===null?e.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:We,matcap:Q,envMap:K,envMapMode:K&&le.mapping,envMapCubeUVHeight:q,aoMap:ae,lightMap:ve,bumpMap:xe,normalMap:we,displacementMap:Le,emissiveMap:Ve,normalMapObjectSpace:we&&g.normalMapType===Ou,normalMapTangentSpace:we&&g.normalMapType===pl,packedNormalMap:we&&g.normalMapType===pl&&O_(g.normalMap.format),metalnessMap:Oe,roughnessMap:I,anisotropy:lt,anisotropyMap:J,clearcoat:Ke,clearcoatMap:pe,clearcoatNormalMap:me,clearcoatRoughnessMap:B,dispersion:$e,retroreflection:w,iridescence:x,iridescenceMap:ue,iridescenceThicknessMap:_e,sheen:U,sheenColorMap:Re,sheenRoughnessMap:se,specularMap:Ne,specularColorMap:Ue,specularIntensityMap:He,transmission:H,transmissionMap:it,thicknessMap:F,gradientMap:$,opaque:g.transparent===!1&&g.blending===ua&&g.alphaToCoverage===!1,alphaMap:ie,alphaTest:Se,alphaHash:Pe,combine:g.combine,mapUv:We&&v(g.map.channel),aoMapUv:ae&&v(g.aoMap.channel),lightMapUv:ve&&v(g.lightMap.channel),bumpMapUv:xe&&v(g.bumpMap.channel),normalMapUv:we&&v(g.normalMap.channel),displacementMapUv:Le&&v(g.displacementMap.channel),emissiveMapUv:Ve&&v(g.emissiveMap.channel),metalnessMapUv:Oe&&v(g.metalnessMap.channel),roughnessMapUv:I&&v(g.roughnessMap.channel),anisotropyMapUv:J&&v(g.anisotropyMap.channel),clearcoatMapUv:pe&&v(g.clearcoatMap.channel),clearcoatNormalMapUv:me&&v(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&v(g.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&v(g.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&v(g.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&v(g.sheenColorMap.channel),sheenRoughnessMapUv:se&&v(g.sheenRoughnessMap.channel),specularMapUv:Ne&&v(g.specularMap.channel),specularColorMapUv:Ue&&v(g.specularColorMap.channel),specularIntensityMapUv:He&&v(g.specularIntensityMap.channel),transmissionMapUv:it&&v(g.transmissionMap.channel),thicknessMapUv:F&&v(g.thicknessMap.channel),alphaMapUv:ie&&v(g.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(we||lt),vertexNormals:!!z.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(We||ie),fog:!!L,useFog:g.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||z.attributes.normal===void 0&&we===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:fe,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:We&&g.map.isVideoTexture===!0&&Qe.getTransfer(g.map.colorSpace)===at,decodeVideoTextureEmissive:Ve&&g.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(g.emissiveMap.colorSpace)===at,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===bi,flipSided:g.side===zt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ne&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&g.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function m(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let D in g.defines)b.push(D),b.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(p(b,g),S(b,g),b.push(e.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function p(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function S(g,b){s.disableAll(),b.instancing&&s.enable(0),b.instancingColor&&s.enable(1),b.instancingMorph&&s.enable(2),b.matcap&&s.enable(3),b.envMap&&s.enable(4),b.normalMapObjectSpace&&s.enable(5),b.normalMapTangentSpace&&s.enable(6),b.clearcoat&&s.enable(7),b.iridescence&&s.enable(8),b.alphaTest&&s.enable(9),b.vertexColors&&s.enable(10),b.vertexAlphas&&s.enable(11),b.vertexUv1s&&s.enable(12),b.vertexUv2s&&s.enable(13),b.vertexUv3s&&s.enable(14),b.vertexTangents&&s.enable(15),b.anisotropy&&s.enable(16),b.alphaHash&&s.enable(17),b.batching&&s.enable(18),b.dispersion&&s.enable(19),b.retroreflection&&s.enable(24),b.batchingColor&&s.enable(20),b.gradientMap&&s.enable(21),b.packedNormalMap&&s.enable(22),b.vertexNormals&&s.enable(23),g.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.reversedDepthBuffer&&s.enable(4),b.skinning&&s.enable(5),b.morphTargets&&s.enable(6),b.morphNormals&&s.enable(7),b.morphColors&&s.enable(8),b.premultipliedAlpha&&s.enable(9),b.shadowMapEnabled&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.decodeVideoTextureEmissive&&s.enable(20),b.alphaToCoverage&&s.enable(21),b.numLightProbeGrids>0&&s.enable(22),b.hasPositionAttribute&&s.enable(23),g.push(s.mask)}function E(g){let b=f[g.type],D;if(b){let P=li[b];D=Up.clone(P.uniforms)}else D=g.uniforms;return D}function _(g,b){let D=c.get(b);return D!==void 0?++D.usedTimes:(D=new L_(e,b,g,a),h.push(D),c.set(b,D)),D}function T(g){if(--g.usedTimes===0){let b=h.indexOf(g);h[b]=h[h.length-1],h.pop(),c.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:E,acquireProgram:_,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:C}}function B_(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function z_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function dh(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function ph(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,v,y,m,p){let S=e[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:v,materialVariant:s(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},e[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=v,S.materialVariant=s(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=m,S.group=p),t++,S}function l(u,f,v,y,m,p,S){S.reversedDepth===!0&&(m=-m);let E=o(u,f,v,y,m,p);v.transmission>0?r.push(E):v.transparent===!0?a.push(E):i.push(E)}function h(u,f,v,y,m,p){let S=o(u,f,v,y,m,p);v.transmission>0?r.unshift(S):v.transparent===!0?a.unshift(S):i.unshift(S)}function c(u,f){i.length>1&&i.sort(u||z_),r.length>1&&r.sort(f||dh),a.length>1&&a.sort(f||dh)}function d(){for(let u=t,f=e.length;u<f;u++){let v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:h,finish:d,sort:c}}function G_(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new ph,e.set(r,[s])):a>=n.length?(s=new ph,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function V_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new R,color:new tt};break;case"SpotLight":i={position:new R,direction:new R,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new R,color:new tt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new R,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":i={color:new tt,position:new R,halfWidth:new R,halfHeight:new R};break}return e[t.id]=i,i}}}function k_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}function W_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function X_(e){let t=new V_,i=k_(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new R);let a=new R,n=new Ye,s=new Ye;function o(h){let c=0,d=0,u=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let f=0,v=0,y=0,m=0,p=0,S=0,E=0,_=0,T=0,A=0,C=0,g=0,b=0,D=0;h.sort(W_);for(let N=0,W=h.length;N<W;N++){let L=h[N],z=L.color,Z=L.intensity,k=L.distance,le=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===or?le=L.shadow.map.texture:le=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=z.r*Z,d+=z.g*Z,u+=z.b*Z;else if(L.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(L.sh.coefficients[q],Z);D++}else if(L.isSunLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,ee=i.get(L);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),r.sunShadow[v]=ee,r.sunShadowMap[v]=le;let he=Y.getViewportCount();for(let fe=0;fe<he;fe++)r.sunShadowMatrix[y+fe]=Y.getMatrix(fe),r.sunShadowCascade[y+fe]=Y._cascadeData[fe];y+=he,v++}r.sun[f]=q,f++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,ee=i.get(L);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,r.directionalShadow[m]=ee,r.directionalShadowMap[m]=le,r.directionalShadowMatrix[m]=L.shadow.matrix,T++}r.directional[m]=q,m++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(z).multiplyScalar(Z),q.distance=k,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,r.spot[S]=q;let Y=L.shadow;if(L.map&&(r.spotLightMap[g]=L.map,g++,Y.updateMatrices(L),L.castShadow&&b++),r.spotLightMatrix[S]=Y.matrix,L.castShadow){let ee=i.get(L);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,r.spotShadow[S]=ee,r.spotShadowMap[S]=le,C++}S++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(z).multiplyScalar(Z),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),r.rectArea[E]=q,E++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let Y=L.shadow,ee=i.get(L);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,ee.shadowCameraNear=Y.camera.near,ee.shadowCameraFar=Y.camera.far,r.pointShadow[p]=ee,r.pointShadowMap[p]=le,r.pointShadowMatrix[p]=L.shadow.matrix,A++}r.point[p]=q,p++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(Z),q.groundColor.copy(L.groundColor).multiplyScalar(Z),r.hemi[_]=q,_++}}E>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=d,r.ambient[2]=u;let P=r.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==p||P.spotLength!==S||P.rectAreaLength!==E||P.hemiLength!==_||P.numSunShadows!==v||P.numDirectionalShadows!==T||P.numPointShadows!==A||P.numSpotShadows!==C||P.numSpotMaps!==g||P.numLightProbes!==D)&&(r.sun.length=f,r.directional.length=m,r.spot.length=S,r.rectArea.length=E,r.point.length=p,r.hemi.length=_,r.sunShadow.length=v,r.sunShadowMap.length=v,r.sunShadowMatrix.length=y,r.sunShadowCascade.length=y,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.directionalShadowMatrix.length=T,r.pointShadow.length=A,r.pointShadowMap.length=A,r.pointShadowMatrix.length=A,r.spotShadow.length=C,r.spotShadowMap.length=C,r.spotLightMatrix.length=C+g-b,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=D,P.sunLength=f,P.directionalLength=m,P.pointLength=p,P.spotLength=S,P.rectAreaLength=E,P.hemiLength=_,P.numSunShadows=v,P.numDirectionalShadows=T,P.numPointShadows=A,P.numSpotShadows=C,P.numSpotMaps=g,P.numLightProbes=D,r.version=H_++)}function l(h,c){let d=0,u=0,f=0,v=0,y=0,m=0,p=c.matrixWorldInverse;for(let S=0,E=h.length;S<E;S++){let _=h[S];if(_.isSunLight){let T=r.sun[d];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let T=r.directional[u];T.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(p),u++}else if(_.isSpotLight){let T=r.spot[v];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(p),v++}else if(_.isRectAreaLight){let T=r.rectArea[y];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(p),s.identity(),n.copy(_.matrixWorld),n.premultiply(p),s.extractRotation(n),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),y++}else if(_.isPointLight){let T=r.point[f];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let T=r.hemi[m];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:r}}function fh(e){let t=new X_(e),i=[],r=[],a=[];function n(u){d.camera=u,i.length=0,r.length=0,a.length=0}function s(u){i.push(u)}function o(u){r.push(u)}function l(u){a.push(u)}function h(){t.setup(i)}function c(u){t.setupView(i,u)}let d={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:d,setupLights:h,setupLightsView:c,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function j_(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new fh(e),t.set(a,[o])):n>=s.length?(o=new fh(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}function J_(e,t,i){let r=new xa,a=new oe,n=new oe,s=new dt,o=new zp,l=new Gp,h={},c=i.maxTextureSize,d={[wi]:zt,[zt]:wi,[bi]:bi},u=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:q_,fragmentShader:Y_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let v=new vt;v.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Gt(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cn;let p=this.type;this.render=function(A,C,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===pu&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cn);let b=e.getRenderTarget(),D=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),N=e.state;N.setBlending(Ti),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let W=p!==this.type;W&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=A.length;L<z;L++){let Z=A[L],k=Z.shadow;if(k===void 0){Be("WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);let le=k.getFrameExtents();a.multiply(le),n.copy(k.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/le.x),a.x=n.x*le.x,k.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/le.y),a.y=n.y*le.y,k.mapSize.y=n.y));let q=e.state.buffers.depth.getReversed();if(k.camera._reversedDepth=q,k.map===null||W===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===la){if(Z.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ti(a.x,a.y,{format:or,type:pi,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),k.map.texture.name=Z.name+".shadowMap",k.map.depthTexture=new Ma(a.x,a.y,hi),k.map.depthTexture.name=Z.name+".shadowMapDepth",k.map.depthTexture.format=Ai,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=At,k.map.depthTexture.magFilter=At}else Z.isPointLight?(k.map=new Cc(a.x),k.map.depthTexture=new Fd(a.x,di)):(k.map=new ti(a.x,a.y),k.map.depthTexture=new Ma(a.x,a.y,di)),k.map.depthTexture.name=Z.name+".shadowMap",k.map.depthTexture.format=Ai,this.type===cn?(k.map.depthTexture.compareFunction=q?xo:yo,k.map.depthTexture.minFilter=Lt,k.map.depthTexture.magFilter=Lt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=At,k.map.depthTexture.magFilter=At);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==a.x||k.map.height!==a.y)&&k.map.setSize(a.x,a.y);let Y=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Z.isPointLight!==!0&&k.updateMatrices(Z,g);for(let ee=0;ee<Y;ee++){let he=k.getCamera(ee);if(Z.isPointLight){let fe=k.camera,Xe=k.matrix,Ce=Z.distance||fe.far;Ce!==fe.far&&(fe.far=Ce,fe.updateProjectionMatrix()),oa.setFromMatrixPosition(Z.matrixWorld),fe.position.copy(oa),vs.copy(fe.position),vs.add(Z_[ee]),fe.up.copy($_[ee]),fe.lookAt(vs),fe.updateMatrixWorld(),Xe.makeTranslation(-oa.x,-oa.y,-oa.z),mh.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(mh,fe.coordinateSystem,fe.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)e.setRenderTarget(k.map,ee),e.clear();else{ee===0&&(e.setRenderTarget(k.map),e.clear());let fe=k.getViewport(ee);s.set(n.x*fe.x,n.y*fe.y,n.x*fe.z,n.y*fe.w),N.viewport(s)}r=k.getFrustum(ee),_(C,g,he,Z,this.type)}k.isPointLightShadow!==!0&&this.type===la&&S(k,g),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(b,D,P)};function S(A,C){let g=t.update(y);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new ti(a.x,a.y,{format:or,type:pi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(C,null,g,u,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(C,null,g,f,y,null)}function E(A,C,g,b){let D=null,P=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)D=P;else if(D=g.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let N=D.uuid,W=C.uuid,L=h[N];L===void 0&&(L={},h[N]=L);let z=L[W];z===void 0&&(z=D.clone(),L[W]=z,C.addEventListener("dispose",T)),D=z}if(D.visible=C.visible,D.wireframe=C.wireframe,b===la?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:d[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,g.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let N=e.properties.get(D);N.light=g}return D}function _(A,C,g,b,D){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===la)&&(!A.frustumCulled||A.intersectsFrustum(r))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);let N=t.update(A),W=A.material;if(Array.isArray(W)){let L=N.groups;for(let z=0,Z=L.length;z<Z;z++){let k=L[z],le=W[k.materialIndex];if(le&&le.visible){let q=E(A,le,b,D);A.onBeforeShadow(e,A,C,g,N,q,k),e.renderBufferDirect(g,null,N,q,A,k),A.onAfterShadow(e,A,C,g,N,q,k)}}}else if(W.visible){let L=E(A,W,b,D);A.onBeforeShadow(e,A,C,g,N,L,null),e.renderBufferDirect(g,null,N,L,A,null),A.onAfterShadow(e,A,C,g,N,L,null)}}let P=A.children;for(let N=0,W=P.length;N<W;N++)_(P[N],C,g,b,D)}function T(A){A.target.removeEventListener("dispose",T);for(let C in h){let g=h[C],b=A.target.uuid;b in g&&(g[b].dispose(),delete g[b])}}}function K_(e,t){function i(){let F=!1,$=new dt,ie=null,Se=new dt(0,0,0,0);return{setMask:function(Pe){ie!==Pe&&!F&&(e.colorMask(Pe,Pe,Pe,Pe),ie=Pe)},setLocked:function(Pe){F=Pe},setClear:function(Pe,ne,Me,ze,St){St===!0&&(Pe*=ze,ne*=ze,Me*=ze),$.set(Pe,ne,Me,ze),Se.equals($)===!1&&(e.clearColor(Pe,ne,Me,ze),Se.copy($))},reset:function(){F=!1,ie=null,Se.set(-1,0,0,0)}}}function r(){let F=!1,$=!1,ie=null,Se=null,Pe=null;return{setReversed:function(ne){if($!==ne){let Me=t.get("EXT_clip_control");ne?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),$=ne;let ze=Pe;Pe=null,this.setClear(ze)}},getReversed:function(){return $},setTest:function(ne){ne?re(e.DEPTH_TEST):be(e.DEPTH_TEST)},setMask:function(ne){ie!==ne&&!F&&(e.depthMask(ne),ie=ne)},setFunc:function(ne){if($&&(ne=Zu[ne]),Se!==ne){switch(ne){case ys:e.depthFunc(e.NEVER);break;case xs:e.depthFunc(e.ALWAYS);break;case Ms:e.depthFunc(e.LESS);break;case ma:e.depthFunc(e.LEQUAL);break;case bs:e.depthFunc(e.EQUAL);break;case Ss:e.depthFunc(e.GEQUAL);break;case Ts:e.depthFunc(e.GREATER);break;case Es:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Se=ne}},setLocked:function(ne){F=ne},setClear:function(ne){Pe!==ne&&(Pe=ne,$&&(ne=1-ne),e.clearDepth(ne))},reset:function(){F=!1,ie=null,Se=null,Pe=null,$=!1}}}function a(){let F=!1,$=null,ie=null,Se=null,Pe=null,ne=null,Me=null,ze=null,St=null;return{setTest:function(rt){F||(rt?re(e.STENCIL_TEST):be(e.STENCIL_TEST))},setMask:function(rt){$!==rt&&!F&&(e.stencilMask(rt),$=rt)},setFunc:function(rt,ai,gi){(ie!==rt||Se!==ai||Pe!==gi)&&(e.stencilFunc(rt,ai,gi),ie=rt,Se=ai,Pe=gi)},setOp:function(rt,ai,gi){(ne!==rt||Me!==ai||ze!==gi)&&(e.stencilOp(rt,ai,gi),ne=rt,Me=ai,ze=gi)},setLocked:function(rt){F=rt},setClear:function(rt){St!==rt&&(e.clearStencil(rt),St=rt)},reset:function(){F=!1,$=null,ie=null,Se=null,Pe=null,ne=null,Me=null,ze=null,St=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,h=new WeakMap,c={},d={},u={},f=new WeakMap,v=[],y=null,m=!1,p=null,S=null,E=null,_=null,T=null,A=null,C=null,g=new tt(0,0,0),b=0,D=!1,P=null,N=null,W=null,L=null,z=null,Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,le=0,q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=le>=1):q.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=le>=2);let Y=null,ee={},he=e.getParameter(e.SCISSOR_BOX),fe=e.getParameter(e.VIEWPORT),Xe=new dt().fromArray(he),Ce=new dt().fromArray(fe);function j(F,$,ie,Se){let Pe=new Uint8Array(4),ne=e.createTexture();e.bindTexture(F,ne),e.texParameteri(F,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(F,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Me=0;Me<ie;Me++)F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY?e.texImage3D($,0,e.RGBA,1,1,Se,0,e.RGBA,e.UNSIGNED_BYTE,Pe):e.texImage2D($+Me,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Pe);return ne}let te={};te[e.TEXTURE_2D]=j(e.TEXTURE_2D,e.TEXTURE_2D,1),te[e.TEXTURE_CUBE_MAP]=j(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[e.TEXTURE_2D_ARRAY]=j(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),te[e.TEXTURE_3D]=j(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),re(e.DEPTH_TEST),s.setFunc(ma),xe(!1),we(nl),re(e.CULL_FACE),ae(Ti);function re(F){c[F]!==!0&&(e.enable(F),c[F]=!0)}function be(F){c[F]!==!1&&(e.disable(F),c[F]=!1)}function Ee(F,$){return u[F]!==$?(e.bindFramebuffer(F,$),u[F]=$,F===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=$),F===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=$),!0):!1}function ce(F,$){let ie=v,Se=!1;if(F){ie=f.get($),ie===void 0&&(ie=[],f.set($,ie));let Pe=F.textures;if(ie.length!==Pe.length||ie[0]!==e.COLOR_ATTACHMENT0){for(let ne=0,Me=Pe.length;ne<Me;ne++)ie[ne]=e.COLOR_ATTACHMENT0+ne;ie.length=Pe.length,Se=!0}}else ie[0]!==e.BACK&&(ie[0]=e.BACK,Se=!0);Se&&e.drawBuffers(ie)}function We(F){return y!==F?(e.useProgram(F),y=F,!0):!1}let Q={[Dr]:e.FUNC_ADD,[mu]:e.FUNC_SUBTRACT,[gu]:e.FUNC_REVERSE_SUBTRACT};Q[_u]=e.MIN,Q[vu]=e.MAX;let K={[yu]:e.ZERO,[xu]:e.ONE,[Mu]:e.SRC_COLOR,[gh]:e.SRC_ALPHA,[Au]:e.SRC_ALPHA_SATURATE,[Eu]:e.DST_COLOR,[Su]:e.DST_ALPHA,[bu]:e.ONE_MINUS_SRC_COLOR,[_h]:e.ONE_MINUS_SRC_ALPHA,[wu]:e.ONE_MINUS_DST_COLOR,[Tu]:e.ONE_MINUS_DST_ALPHA,[Cu]:e.CONSTANT_COLOR,[Ru]:e.ONE_MINUS_CONSTANT_COLOR,[Pu]:e.CONSTANT_ALPHA,[Iu]:e.ONE_MINUS_CONSTANT_ALPHA};function ae(F,$,ie,Se,Pe,ne,Me,ze,St,rt){if(F===Ti){m===!0&&(be(e.BLEND),m=!1);return}if(m===!1&&(re(e.BLEND),m=!0),F!==fu){if(F!==p||rt!==D){if((S!==Dr||T!==Dr)&&(e.blendEquation(e.FUNC_ADD),S=Dr,T=Dr),rt)switch(F){case ua:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case sl:e.blendFunc(e.ONE,e.ONE);break;case ol:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ll:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ge("WebGLState: Invalid blending: ",F);break}else switch(F){case ua:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case sl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case ol:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ll:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",F);break}E=null,_=null,A=null,C=null,g.set(0,0,0),b=0,p=F,D=rt}return}Pe=Pe||$,ne=ne||ie,Me=Me||Se,($!==S||Pe!==T)&&(e.blendEquationSeparate(Q[$],Q[Pe]),S=$,T=Pe),(ie!==E||Se!==_||ne!==A||Me!==C)&&(e.blendFuncSeparate(K[ie],K[Se],K[ne],K[Me]),E=ie,_=Se,A=ne,C=Me),(ze.equals(g)===!1||St!==b)&&(e.blendColor(ze.r,ze.g,ze.b,St),g.copy(ze),b=St),p=F,D=!1}function ve(F,$){F.side===bi?be(e.CULL_FACE):re(e.CULL_FACE);let ie=F.side===zt;$&&(ie=!ie),xe(ie),F.blending===ua&&F.transparent===!1?ae(Ti):ae(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),n.setMask(F.colorWrite);let Se=F.stencilWrite;o.setTest(Se),Se&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ve(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?re(e.SAMPLE_ALPHA_TO_COVERAGE):be(e.SAMPLE_ALPHA_TO_COVERAGE)}function xe(F){P!==F&&(F?e.frontFace(e.CW):e.frontFace(e.CCW),P=F)}function we(F){F!==uu?(re(e.CULL_FACE),F!==N&&(F===nl?e.cullFace(e.BACK):F===du?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):be(e.CULL_FACE),N=F}function Le(F){F!==W&&(k&&e.lineWidth(F),W=F)}function Ve(F,$,ie){F?(re(e.POLYGON_OFFSET_FILL),(L!==$||z!==ie)&&(L=$,z=ie,s.getReversed()&&($=-$),e.polygonOffset($,ie))):be(e.POLYGON_OFFSET_FILL)}function Oe(F){F?re(e.SCISSOR_TEST):be(e.SCISSOR_TEST)}function I(F){F===void 0&&(F=e.TEXTURE0+Z-1),Y!==F&&(e.activeTexture(F),Y=F)}function lt(F,$,ie){ie===void 0&&(Y===null?ie=e.TEXTURE0+Z-1:ie=Y);let Se=ee[ie];Se===void 0&&(Se={type:void 0,texture:void 0},ee[ie]=Se),(Se.type!==F||Se.texture!==$)&&(Y!==ie&&(e.activeTexture(ie),Y=ie),e.bindTexture(F,$||te[F]),Se.type=F,Se.texture=$)}function Ke(){let F=ee[Y];F!==void 0&&F.type!==void 0&&(e.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function $e(){try{e.compressedTexImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function w(){try{e.compressedTexImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function x(){try{e.texSubImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function U(){try{e.texSubImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function J(){try{e.compressedTexSubImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function pe(){try{e.texStorage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function me(){try{e.texStorage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function B(){try{e.texImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function ue(){try{e.texImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function _e(F){return d[F]!==void 0?d[F]:e.getParameter(F)}function Re(F,$){d[F]!==$&&(e.pixelStorei(F,$),d[F]=$)}function se(F){Xe.equals(F)===!1&&(e.scissor(F.x,F.y,F.z,F.w),Xe.copy(F))}function Ne(F){Ce.equals(F)===!1&&(e.viewport(F.x,F.y,F.z,F.w),Ce.copy(F))}function Ue(F,$){let ie=h.get($);ie===void 0&&(ie=new WeakMap,h.set($,ie));let Se=ie.get(F);Se===void 0&&(Se=e.getUniformBlockIndex($,F.name),ie.set(F,Se))}function He(F,$){let ie=h.get($).get(F);l.get($)!==ie&&(e.uniformBlockBinding($,ie,F.__bindingPointIndex),l.set($,ie))}function it(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),c={},d={},Y=null,ee={},u={},f=new WeakMap,v=[],y=null,m=!1,p=null,S=null,E=null,_=null,T=null,A=null,C=null,g=new tt(0,0,0),b=0,D=!1,P=null,N=null,W=null,L=null,z=null,Xe.set(0,0,e.canvas.width,e.canvas.height),Ce.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:re,disable:be,bindFramebuffer:Ee,drawBuffers:ce,useProgram:We,setBlending:ae,setMaterial:ve,setFlipSided:xe,setCullFace:we,setLineWidth:Le,setPolygonOffset:Ve,setScissorTest:Oe,activeTexture:I,bindTexture:lt,unbindTexture:Ke,compressedTexImage2D:$e,compressedTexImage3D:w,texImage2D:B,texImage3D:ue,pixelStorei:Re,getParameter:_e,updateUBOMapping:Ue,uniformBlockBinding:He,texStorage2D:pe,texStorage3D:me,texSubImage2D:x,texSubImage3D:U,compressedTexSubImage2D:H,compressedTexSubImage3D:J,scissor:se,viewport:Ne,reset:it}}function Q_(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new oe,c=new WeakMap,d=new Set,u,f=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,x){return v?new OffscreenCanvas(w,x):va("canvas")}function m(w,x,U){let H=1,J=$e(w);if((J.width>U||J.height>U)&&(H=U/Math.max(J.width,J.height)),H<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let pe=Math.floor(H*J.width),me=Math.floor(H*J.height);u===void 0&&(u=y(pe,me));let B=x?y(pe,me):u;return B.width=pe,B.height=me,B.getContext("2d").drawImage(w,0,0,pe,me),Be("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+pe+"x"+me+")."),B}else return"data"in w&&Be("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function p(w){return w.generateMipmaps}function S(w){e.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(w,x,U,H,J,pe=!1){if(w!==null){if(e[w]!==void 0)return e[w];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let me;H&&(me=t.get("EXT_texture_norm16"),me||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let B=x;if(x===e.RED&&(U===e.FLOAT&&(B=e.R32F),U===e.HALF_FLOAT&&(B=e.R16F),U===e.UNSIGNED_BYTE&&(B=e.R8),U===e.UNSIGNED_SHORT&&me&&(B=me.R16_EXT),U===e.SHORT&&me&&(B=me.R16_SNORM_EXT)),x===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.R8UI),U===e.UNSIGNED_SHORT&&(B=e.R16UI),U===e.UNSIGNED_INT&&(B=e.R32UI),U===e.BYTE&&(B=e.R8I),U===e.SHORT&&(B=e.R16I),U===e.INT&&(B=e.R32I)),x===e.RG&&(U===e.FLOAT&&(B=e.RG32F),U===e.HALF_FLOAT&&(B=e.RG16F),U===e.UNSIGNED_BYTE&&(B=e.RG8),U===e.UNSIGNED_SHORT&&me&&(B=me.RG16_EXT),U===e.SHORT&&me&&(B=me.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.RG8UI),U===e.UNSIGNED_SHORT&&(B=e.RG16UI),U===e.UNSIGNED_INT&&(B=e.RG32UI),U===e.BYTE&&(B=e.RG8I),U===e.SHORT&&(B=e.RG16I),U===e.INT&&(B=e.RG32I)),x===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.RGB8UI),U===e.UNSIGNED_SHORT&&(B=e.RGB16UI),U===e.UNSIGNED_INT&&(B=e.RGB32UI),U===e.BYTE&&(B=e.RGB8I),U===e.SHORT&&(B=e.RGB16I),U===e.INT&&(B=e.RGB32I)),x===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(B=e.RGBA16UI),U===e.UNSIGNED_INT&&(B=e.RGBA32UI),U===e.BYTE&&(B=e.RGBA8I),U===e.SHORT&&(B=e.RGBA16I),U===e.INT&&(B=e.RGBA32I)),x===e.RGB&&(U===e.UNSIGNED_SHORT&&me&&(B=me.RGB16_EXT),U===e.SHORT&&me&&(B=me.RGB16_SNORM_EXT),U===e.UNSIGNED_INT_5_9_9_9_REV&&(B=e.RGB9_E5),U===e.UNSIGNED_INT_10F_11F_11F_REV&&(B=e.R11F_G11F_B10F)),x===e.RGBA){let ue=pe?bn:Qe.getTransfer(J);U===e.FLOAT&&(B=e.RGBA32F),U===e.HALF_FLOAT&&(B=e.RGBA16F),U===e.UNSIGNED_BYTE&&(B=ue===at?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT&&me&&(B=me.RGBA16_EXT),U===e.SHORT&&me&&(B=me.RGBA16_SNORM_EXT),U===e.UNSIGNED_SHORT_4_4_4_4&&(B=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(B=e.RGB5_A1)}return(B===e.R16F||B===e.R32F||B===e.RG16F||B===e.RG32F||B===e.RGBA16F||B===e.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function T(w,x){let U;return w?x===null||x===di||x===_a?U=e.DEPTH24_STENCIL8:x===hi?U=e.DEPTH32F_STENCIL8:x===ga&&(U=e.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===di||x===_a?U=e.DEPTH_COMPONENT24:x===hi?U=e.DEPTH_COMPONENT32F:x===ga&&(U=e.DEPTH_COMPONENT16),U}function A(w,x){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==At&&w.minFilter!==Lt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function C(w){let x=w.target;x.removeEventListener("dispose",C),b(x),x.isVideoTexture&&c.delete(x),x.isHTMLTexture&&d.delete(x)}function g(w){let x=w.target;x.removeEventListener("dispose",g),P(x)}function b(w){let x=r.get(w);if(x.__webglInit===void 0)return;let U=w.source,H=f.get(U);if(H){let J=H[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&D(w),Object.keys(H).length===0&&f.delete(U)}r.remove(w)}function D(w){let x=r.get(w);e.deleteTexture(x.__webglTexture);let U=w.source,H=f.get(U);delete H[x.__cacheKey],s.memory.textures--}function P(w){let x=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let J=0;J<x.__webglFramebuffer[H].length;J++)e.deleteFramebuffer(x.__webglFramebuffer[H][J]);else e.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)e.deleteFramebuffer(x.__webglFramebuffer[H]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let U=w.textures;for(let H=0,J=U.length;H<J;H++){let pe=r.get(U[H]);pe.__webglTexture&&(e.deleteTexture(pe.__webglTexture),s.memory.textures--),r.remove(U[H])}r.remove(w)}let N=0;function W(){N=0}function L(){return N}function z(w){N=w}function Z(){let w=N;return w>=a.maxTextures&&Be("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+a.maxTextures),N+=1,w}function k(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function le(w,x){let U=r.get(w);if(w.isVideoTexture&&lt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&U.__version!==w.version){let H=w.image;if(H===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{be(U,w,x);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+x)}function q(w,x){let U=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){be(U,w,x);return}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+x)}function Y(w,x){let U=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){be(U,w,x);return}i.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+x)}function ee(w,x){let U=r.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&U.__version!==w.version){Ee(U,w,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+x)}let he={[ws]:e.REPEAT,[Si]:e.CLAMP_TO_EDGE,[As]:e.MIRRORED_REPEAT},fe={[At]:e.NEAREST,[Nu]:e.NEAREST_MIPMAP_NEAREST,[Oa]:e.NEAREST_MIPMAP_LINEAR,[Lt]:e.LINEAR,[Bn]:e.LINEAR_MIPMAP_NEAREST,[tr]:e.LINEAR_MIPMAP_LINEAR},Xe={[Bu]:e.NEVER,[Hu]:e.ALWAYS,[zu]:e.LESS,[yo]:e.LEQUAL,[Gu]:e.EQUAL,[xo]:e.GEQUAL,[Vu]:e.GREATER,[ku]:e.NOTEQUAL};function Ce(w,x){if(x.type===hi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Lt||x.magFilter===Bn||x.magFilter===Oa||x.magFilter===tr||x.minFilter===Lt||x.minFilter===Bn||x.minFilter===Oa||x.minFilter===tr)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,he[x.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,he[x.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,he[x.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,fe[x.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,fe[x.minFilter]),x.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,Xe[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===At||x.minFilter!==Oa&&x.minFilter!==tr||x.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function j(w,x){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",C));let H=x.source,J=f.get(H);J===void 0&&(J={},f.set(H,J));let pe=k(x);if(pe!==w.__cacheKey){J[pe]===void 0&&(J[pe]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,U=!0),J[pe].usedTimes++;let me=J[w.__cacheKey];me!==void 0&&(J[w.__cacheKey].usedTimes--,me.usedTimes===0&&D(x)),w.__cacheKey=pe,w.__webglTexture=J[pe].texture}return U}function te(w,x,U){return Math.floor(Math.floor(w/U)/x)}function re(w,x,U,H){let J=w.updateRanges;if(J.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,U,H,x.data);else{J.sort((_e,Re)=>_e.start-Re.start);let pe=0;for(let _e=1;_e<J.length;_e++){let Re=J[pe],se=J[_e],Ne=Re.start+Re.count,Ue=te(se.start,x.width,4),He=te(Re.start,x.width,4);se.start<=Ne+1&&Ue===He&&te(se.start+se.count-1,x.width,4)===Ue?Re.count=Math.max(Re.count,se.start+se.count-Re.start):(++pe,J[pe]=se)}J.length=pe+1;let me=i.getParameter(e.UNPACK_ROW_LENGTH),B=i.getParameter(e.UNPACK_SKIP_PIXELS),ue=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let _e=0,Re=J.length;_e<Re;_e++){let se=J[_e],Ne=Math.floor(se.start/4),Ue=Math.ceil(se.count/4),He=Ne%x.width,it=Math.floor(Ne/x.width),F=Ue;i.pixelStorei(e.UNPACK_SKIP_PIXELS,He),i.pixelStorei(e.UNPACK_SKIP_ROWS,it),i.texSubImage2D(e.TEXTURE_2D,0,He,it,F,1,U,H,x.data)}w.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,me),i.pixelStorei(e.UNPACK_SKIP_PIXELS,B),i.pixelStorei(e.UNPACK_SKIP_ROWS,ue)}}function be(w,x,U){let H=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=e.TEXTURE_3D);let J=j(w,x),pe=x.source;i.bindTexture(H,w.__webglTexture,e.TEXTURE0+U);let me=r.get(pe);if(pe.version!==me.__version||J===!0){if(i.activeTexture(e.TEXTURE0+U),!(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)){let $=Qe.getPrimaries(Qe.workingColorSpace),ie=x.colorSpace===Bi?null:Qe.getPrimaries(x.colorSpace),Se=x.colorSpace===Bi||$===ie?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let B=m(x.image,!1,a.maxTextureSize);B=Ke(x,B);let ue=n.convert(x.format,x.colorSpace),_e=n.convert(x.type),Re=_(x.internalFormat,ue,_e,x.normalized,x.colorSpace,x.isVideoTexture);Ce(H,x);let se,Ne=x.mipmaps,Ue=x.isVideoTexture!==!0,He=me.__version===void 0||J===!0,it=pe.dataReady,F=A(x,B);if(x.isDepthTexture)Re=T(x.format===ir,x.type),He&&(Ue?i.texStorage2D(e.TEXTURE_2D,1,Re,B.width,B.height):i.texImage2D(e.TEXTURE_2D,0,Re,B.width,B.height,0,ue,_e,null));else if(x.isDataTexture)if(Ne.length>0){Ue&&He&&i.texStorage2D(e.TEXTURE_2D,F,Re,Ne[0].width,Ne[0].height);for(let $=0,ie=Ne.length;$<ie;$++)se=Ne[$],Ue?it&&i.texSubImage2D(e.TEXTURE_2D,$,0,0,se.width,se.height,ue,_e,se.data):i.texImage2D(e.TEXTURE_2D,$,Re,se.width,se.height,0,ue,_e,se.data);x.generateMipmaps=!1}else Ue?(He&&i.texStorage2D(e.TEXTURE_2D,F,Re,B.width,B.height),it&&re(x,B,ue,_e)):i.texImage2D(e.TEXTURE_2D,0,Re,B.width,B.height,0,ue,_e,B.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ue&&He&&i.texStorage3D(e.TEXTURE_2D_ARRAY,F,Re,Ne[0].width,Ne[0].height,B.depth);for(let $=0,ie=Ne.length;$<ie;$++)if(se=Ne[$],x.format!==Qt)if(ue!==null)if(Ue){if(it)if(x.layerUpdates.size>0){let Se=Yl(se.width,se.height,x.format,x.type);for(let Pe of x.layerUpdates){let ne=se.data.subarray(Pe*Se/se.data.BYTES_PER_ELEMENT,(Pe+1)*Se/se.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,Pe,se.width,se.height,1,ue,ne)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,se.width,se.height,B.depth,ue,se.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,$,Re,se.width,se.height,B.depth,0,se.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?it&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,se.width,se.height,B.depth,ue,_e,se.data):i.texImage3D(e.TEXTURE_2D_ARRAY,$,Re,se.width,se.height,B.depth,0,ue,_e,se.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ue&&He&&i.texStorage2D(e.TEXTURE_2D,F,Re,Ne[0].width,Ne[0].height);for(let $=0,ie=Ne.length;$<ie;$++)se=Ne[$],x.format!==Qt?ue!==null?Ue?it&&i.compressedTexSubImage2D(e.TEXTURE_2D,$,0,0,se.width,se.height,ue,se.data):i.compressedTexImage2D(e.TEXTURE_2D,$,Re,se.width,se.height,0,se.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?it&&i.texSubImage2D(e.TEXTURE_2D,$,0,0,se.width,se.height,ue,_e,se.data):i.texImage2D(e.TEXTURE_2D,$,Re,se.width,se.height,0,ue,_e,se.data)}else if(x.isDataArrayTexture)if(Ue){if(He&&i.texStorage3D(e.TEXTURE_2D_ARRAY,F,Re,B.width,B.height,B.depth),it)if(x.layerUpdates.size>0){let $=Yl(B.width,B.height,x.format,x.type);for(let ie of x.layerUpdates){let Se=B.data.subarray(ie*$/B.data.BYTES_PER_ELEMENT,(ie+1)*$/B.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ie,B.width,B.height,1,ue,_e,Se)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,ue,_e,B.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Re,B.width,B.height,B.depth,0,ue,_e,B.data);else if(x.isData3DTexture)Ue?(He&&i.texStorage3D(e.TEXTURE_3D,F,Re,B.width,B.height,B.depth),it&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,ue,_e,B.data)):i.texImage3D(e.TEXTURE_3D,0,Re,B.width,B.height,B.depth,0,ue,_e,B.data);else if(x.isFramebufferTexture){if(He)if(Ue)i.texStorage2D(e.TEXTURE_2D,F,Re,B.width,B.height);else{let $=B.width,ie=B.height;for(let Se=0;Se<F;Se++)i.texImage2D(e.TEXTURE_2D,Se,Re,$,ie,0,ue,_e,null),$>>=1,ie>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){let $=e.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),B.parentNode!==$){$.appendChild(B),d.add(x),$.onpaint=ie=>{let Se=ie.changedElements;for(let Pe of d)Se.includes(Pe.image)&&(Pe.needsUpdate=!0)},$.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,B);else{let ie=e.RGBA,Se=e.RGBA,Pe=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ie,Se,Pe,B)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Ue&&He){let $=$e(Ne[0]);i.texStorage2D(e.TEXTURE_2D,F,Re,$.width,$.height)}for(let $=0,ie=Ne.length;$<ie;$++)se=Ne[$],Ue?it&&i.texSubImage2D(e.TEXTURE_2D,$,0,0,ue,_e,se):i.texImage2D(e.TEXTURE_2D,$,Re,ue,_e,se);x.generateMipmaps=!1}else if(Ue){if(He){let $=$e(B);i.texStorage2D(e.TEXTURE_2D,F,Re,$.width,$.height)}it&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ue,_e,B)}else i.texImage2D(e.TEXTURE_2D,0,Re,ue,_e,B);p(x)&&S(H),me.__version=pe.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Ee(w,x,U){if(x.image.length!==6)return;let H=j(w,x),J=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+U);let pe=r.get(J);if(J.version!==pe.__version||H===!0){i.activeTexture(e.TEXTURE0+U);let me=Qe.getPrimaries(Qe.workingColorSpace),B=x.colorSpace===Bi?null:Qe.getPrimaries(x.colorSpace),ue=x.colorSpace===Bi||me===B?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let _e=x.isCompressedTexture||x.image[0].isCompressedTexture,Re=x.image[0]&&x.image[0].isDataTexture,se=[];for(let ne=0;ne<6;ne++)!_e&&!Re?se[ne]=m(x.image[ne],!0,a.maxCubemapSize):se[ne]=Re?x.image[ne].image:x.image[ne],se[ne]=Ke(x,se[ne]);let Ne=se[0],Ue=n.convert(x.format,x.colorSpace),He=n.convert(x.type),it=_(x.internalFormat,Ue,He,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,$=pe.__version===void 0||H===!0,ie=J.dataReady,Se=A(x,Ne);Ce(e.TEXTURE_CUBE_MAP,x);let Pe;if(_e){F&&$&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Se,it,Ne.width,Ne.height);for(let ne=0;ne<6;ne++){Pe=se[ne].mipmaps;for(let Me=0;Me<Pe.length;Me++){let ze=Pe[Me];x.format!==Qt?Ue!==null?F?ie&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,ze.width,ze.height,Ue,ze.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,it,ze.width,ze.height,0,ze.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,ze.width,ze.height,Ue,He,ze.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,it,ze.width,ze.height,0,Ue,He,ze.data)}}}else{if(Pe=x.mipmaps,F&&$){Pe.length>0&&Se++;let ne=$e(se[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Se,it,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Re){F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,se[ne].width,se[ne].height,Ue,He,se[ne].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,it,se[ne].width,se[ne].height,0,Ue,He,se[ne].data);for(let Me=0;Me<Pe.length;Me++){let ze=Pe[Me].image[ne].image;F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,ze.width,ze.height,Ue,He,ze.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,it,ze.width,ze.height,0,Ue,He,ze.data)}}else{F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ue,He,se[ne]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,it,Ue,He,se[ne]);for(let Me=0;Me<Pe.length;Me++){let ze=Pe[Me];F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,Ue,He,ze.image[ne]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,it,Ue,He,ze.image[ne])}}}p(x)&&S(e.TEXTURE_CUBE_MAP),pe.__version=J.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ce(w,x,U,H,J,pe){let me=n.convert(U.format,U.colorSpace),B=n.convert(U.type),ue=_(U.internalFormat,me,B,U.normalized,U.colorSpace),_e=r.get(x),Re=r.get(U);if(Re.__renderTarget=x,!_e.__hasExternalTextures){let se=Math.max(1,x.width>>pe),Ne=Math.max(1,x.height>>pe);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?i.texImage3D(J,pe,ue,se,Ne,x.depth,0,me,B,null):i.texImage2D(J,pe,ue,se,Ne,0,me,B,null)}i.bindFramebuffer(e.FRAMEBUFFER,w),I(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,H,J,Re.__webglTexture,0,Oe(x)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,H,J,Re.__webglTexture,pe),i.bindFramebuffer(e.FRAMEBUFFER,null)}function We(w,x,U){if(e.bindRenderbuffer(e.RENDERBUFFER,w),x.depthBuffer){let H=x.depthTexture,J=H&&H.isDepthTexture?H.type:null,pe=T(x.stencilBuffer,J),me=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;I(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe(x),pe,x.width,x.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe(x),pe,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,pe,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,me,e.RENDERBUFFER,w)}else{let H=x.textures;for(let J=0;J<H.length;J++){let pe=H[J],me=n.convert(pe.format,pe.colorSpace),B=n.convert(pe.type),ue=_(pe.internalFormat,me,B,pe.normalized,pe.colorSpace);I(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe(x),ue,x.width,x.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe(x),ue,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,ue,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Q(w,x,U){let H=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=r.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),Ce(e.TEXTURE_CUBE_MAP,x.depthTexture);let _e=n.convert(x.depthTexture.format),Re=n.convert(x.depthTexture.type),se;x.depthTexture.format===Ai?se=e.DEPTH_COMPONENT24:x.depthTexture.format===ir&&(se=e.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,se,x.width,x.height,0,_e,Re,null)}}else le(x.depthTexture,0);let pe=J.__webglTexture,me=Oe(x),B=H?e.TEXTURE_CUBE_MAP_POSITIVE_X+U:e.TEXTURE_2D,ue=x.depthTexture.format===ir?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ai)I(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ue,B,pe,0,me):e.framebufferTexture2D(e.FRAMEBUFFER,ue,B,pe,0);else if(x.depthTexture.format===ir)I(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ue,B,pe,0,me):e.framebufferTexture2D(e.FRAMEBUFFER,ue,B,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function K(w){let x=r.get(w),U=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let H=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",J)};H.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=H}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let H=0;H<6;H++)Q(x.__webglFramebuffer[H],w,H);else{let H=w.texture.mipmaps;H&&H.length>0?Q(x.__webglFramebuffer[0],w,0):Q(x.__webglFramebuffer,w,0)}else if(U){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=e.createRenderbuffer(),We(x.__webglDepthbuffer[H],w,!1);else{let J=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=x.__webglDepthbuffer[H];e.bindRenderbuffer(e.RENDERBUFFER,pe),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,pe)}}else{let H=w.texture.mipmaps;if(H&&H.length>0?i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),We(x.__webglDepthbuffer,w,!1);else{let J=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,pe),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,pe)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function ae(w,x,U){let H=r.get(w);x!==void 0&&ce(H.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&K(w)}function ve(w){let x=w.texture,U=r.get(w),H=r.get(x);w.addEventListener("dispose",g);let J=w.textures,pe=w.isWebGLCubeRenderTarget===!0,me=J.length>1;if(me||(H.__webglTexture===void 0&&(H.__webglTexture=e.createTexture()),H.__version=x.version,s.memory.textures++),pe){U.__webglFramebuffer=[];for(let B=0;B<6;B++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[B]=[];for(let ue=0;ue<x.mipmaps.length;ue++)U.__webglFramebuffer[B][ue]=e.createFramebuffer()}else U.__webglFramebuffer[B]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let B=0;B<x.mipmaps.length;B++)U.__webglFramebuffer[B]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(me)for(let B=0,ue=J.length;B<ue;B++){let _e=r.get(J[B]);_e.__webglTexture===void 0&&(_e.__webglTexture=e.createTexture(),s.memory.textures++)}if(w.samples>0&&I(w)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let B=0;B<J.length;B++){let ue=J[B];U.__webglColorRenderbuffer[B]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[B]);let _e=n.convert(ue.format,ue.colorSpace),Re=n.convert(ue.type),se=_(ue.internalFormat,_e,Re,ue.normalized,ue.colorSpace,w.isXRRenderTarget===!0),Ne=Oe(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne,se,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+B,e.RENDERBUFFER,U.__webglColorRenderbuffer[B])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),We(U.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(pe){i.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture),Ce(e.TEXTURE_CUBE_MAP,x);for(let B=0;B<6;B++)if(x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)ce(U.__webglFramebuffer[B][ue],w,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+B,ue);else ce(U.__webglFramebuffer[B],w,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);p(x)&&S(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(me){for(let B=0,ue=J.length;B<ue;B++){let _e=J[B],Re=r.get(_e),se=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(se=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(se,Re.__webglTexture),Ce(se,_e),ce(U.__webglFramebuffer,w,_e,e.COLOR_ATTACHMENT0+B,se,0),p(_e)&&S(se)}i.unbindTexture()}else{let B=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(B=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(B,H.__webglTexture),Ce(B,x),x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)ce(U.__webglFramebuffer[ue],w,x,e.COLOR_ATTACHMENT0,B,ue);else ce(U.__webglFramebuffer,w,x,e.COLOR_ATTACHMENT0,B,0);p(x)&&S(B),i.unbindTexture()}w.depthBuffer&&K(w)}function xe(w){let x=w.textures;for(let U=0,H=x.length;U<H;U++){let J=x[U];if(p(J)){let pe=E(w),me=r.get(J).__webglTexture;i.bindTexture(pe,me),S(pe),i.unbindTexture()}}}let we=[],Le=[];function Ve(w){if(w.samples>0){if(I(w)===!1){let x=w.textures,U=w.width,H=w.height,J=e.COLOR_BUFFER_BIT,pe=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,me=r.get(w),B=x.length>1;if(B)for(let _e=0;_e<x.length;_e++)i.bindFramebuffer(e.FRAMEBUFFER,me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let ue=w.texture.mipmaps;ue&&ue.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let _e=0;_e<x.length;_e++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),B){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);let Re=r.get(x[_e]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Re,0)}e.blitFramebuffer(0,0,U,H,0,0,U,H,J,e.NEAREST),l===!0&&(we.length=0,Le.length=0,we.push(e.COLOR_ATTACHMENT0+_e),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(we.push(pe),Le.push(pe),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Le)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),B)for(let _e=0;_e<x.length;_e++){i.bindFramebuffer(e.FRAMEBUFFER,me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);let Re=r.get(x[_e]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,Re,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let x=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function Oe(w){return Math.min(a.maxSamples,w.samples)}function I(w){let x=r.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function lt(w){let x=s.render.frame;c.get(w)!==x&&(c.set(w,x),w.update())}function Ke(w,x){let U=w.colorSpace,H=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==Mn&&U!==Bi&&(Qe.getTransfer(U)===at?(H!==Qt||J!==jt)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",U)),x}function $e(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=W,this.getTextureUnits=L,this.setTextureUnits=z,this.setTexture2D=le,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=ee,this.rebindTextures=ae,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=I,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function ev(e,t){function i(r,a=Bi){let n,s=Qe.getTransfer(a);if(r===jt)return e.UNSIGNED_BYTE;if(r===fo)return e.UNSIGNED_SHORT_4_4_4_4;if(r===mo)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Ch)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Rh)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===wh)return e.BYTE;if(r===Ah)return e.SHORT;if(r===ga)return e.UNSIGNED_SHORT;if(r===po)return e.INT;if(r===di)return e.UNSIGNED_INT;if(r===hi)return e.FLOAT;if(r===pi)return e.HALF_FLOAT;if(r===Ph)return e.ALPHA;if(r===Ih)return e.RGB;if(r===Qt)return e.RGBA;if(r===Ai)return e.DEPTH_COMPONENT;if(r===ir)return e.DEPTH_STENCIL;if(r===Lh)return e.RED;if(r===go)return e.RED_INTEGER;if(r===or)return e.RG;if(r===_o)return e.RG_INTEGER;if(r===vo)return e.RGBA_INTEGER;if(r===un||r===dn||r===pn||r===fn)if(s===at)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===un)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===dn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===un)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===dn)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pn)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fn)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cs||r===Rs||r===Ps||r===Is)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Cs)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rs)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ps)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Is)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ls||r===Ds||r===Ns||r===Us||r===Os||r===vn||r===Fs)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===Ls||r===Ds)return s===at?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Ns)return s===at?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===Us)return n.COMPRESSED_R11_EAC;if(r===Os)return n.COMPRESSED_SIGNED_R11_EAC;if(r===vn)return n.COMPRESSED_RG11_EAC;if(r===Fs)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Bs||r===zs||r===Gs||r===Vs||r===ks||r===Hs||r===Ws||r===Xs||r===js||r===qs||r===Ys||r===Zs||r===$s||r===Js)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Bs)return s===at?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zs)return s===at?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gs)return s===at?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vs)return s===at?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ks)return s===at?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hs)return s===at?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ws)return s===at?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xs)return s===at?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===js)return s===at?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qs)return s===at?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ys)return s===at?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zs)return s===at?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$s)return s===at?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Js)return s===at?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ks||r===Qs||r===eo)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===Ks)return s===at?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qs)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===eo)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===to||r===io||r===yn||r===ro)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===to)return n.COMPRESSED_RED_RGTC1_EXT;if(r===io)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ro)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_a?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}function sv(e,t){function i(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function r(m,p){p.color.getRGB(m.fogColor.value,bc(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function a(m,p,S,E,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?n(m,p):p.isMeshLambertMaterial?(n(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(n(m,p),d(m,p)):p.isMeshPhongMaterial?(n(m,p),c(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(n(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(n(m,p),v(m,p)):p.isMeshDepthMaterial?n(m,p):p.isMeshDistanceMaterial?(n(m,p),y(m,p)):p.isMeshNormalMaterial?n(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,E):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,i(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,i(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,i(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,i(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,i(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),E=S.envMap,_=S.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(nv.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Dc),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,i(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,i(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,i(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function ov(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,T){let A=T.program;r.uniformBlockBinding(_,A)}function h(_,T){let A=a[_.id];A===void 0&&(m(_),A=c(_),a[_.id]=A,_.addEventListener("dispose",S));let C=T.program;r.updateUBOMapping(_,C);let g=t.render.frame;n[_.id]!==g&&(u(_),n[_.id]=g)}function c(_){let T=d();_.__bindingPointIndex=T;let A=e.createBuffer(),C=_.__size,g=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,C,g),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,A),A}function d(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let T=a[_.id],A=_.uniforms,C=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let g=0,b=A.length;g<b;g++){let D=A[g];if(Array.isArray(D))for(let P=0,N=D.length;P<N;P++)f(D[P],g,P,C);else f(D,g,0,C)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(_,T,A,C){if(y(_,T,A,C)===!0){let g=_.__offset,b=_.value;if(Array.isArray(b)){let D=0;for(let P=0;P<b.length;P++){let N=b[P],W=p(N);v(N,_.__data,D),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(D+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(b,_.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,g,_.__data)}}function v(_,T,A){typeof _=="number"||typeof _=="boolean"?T[0]=_:_.isMatrix3?(T[0]=_.elements[0],T[1]=_.elements[1],T[2]=_.elements[2],T[3]=0,T[4]=_.elements[3],T[5]=_.elements[4],T[6]=_.elements[5],T[7]=0,T[8]=_.elements[6],T[9]=_.elements[7],T[10]=_.elements[8],T[11]=0):ArrayBuffer.isView(_)?T.set(new _.constructor(_.buffer,_.byteOffset,T.length)):_.toArray(T,A)}function y(_,T,A,C){let g=_.value,b=T+"_"+A;if(C[b]===void 0)return typeof g=="number"||typeof g=="boolean"?C[b]=g:ArrayBuffer.isView(g)?C[b]=g.slice():C[b]=g.clone(),!0;{let D=C[b];if(typeof g=="number"||typeof g=="boolean"){if(D!==g)return C[b]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(D.equals(g)===!1)return D.copy(g),!0}}return!1}function m(_){let T=_.uniforms,A=0,C=16;for(let b=0,D=T.length;b<D;b++){let P=Array.isArray(T[b])?T[b]:[T[b]];for(let N=0,W=P.length;N<W;N++){let L=P[N],z=Array.isArray(L.value)?L.value:[L.value];for(let Z=0,k=z.length;Z<k;Z++){let le=z[Z],q=p(le),Y=A%C,ee=Y%q.boundary,he=Y+ee;A+=ee,he!==0&&C-he<q.storage&&(A+=C-he),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=A,A+=q.storage}}}let g=A%C;return g>0&&(A+=C-g),_.__size=A,_.__cache={},this}function p(_){let T={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(T.boundary=4,T.storage=4):_.isVector2?(T.boundary=8,T.storage=8):_.isVector3||_.isColor?(T.boundary=16,T.storage=12):_.isVector4?(T.boundary=16,T.storage=16):_.isMatrix3?(T.boundary=48,T.storage=48):_.isMatrix4?(T.boundary=64,T.storage=64):_.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(T.boundary=16,T.storage=_.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",_),T}function S(_){let T=_.target;T.removeEventListener("dispose",S);let A=s.indexOf(T.__bindingPointIndex);s.splice(A,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete n[T.id]}function E(){for(let _ in a)e.deleteBuffer(a[_]);s=[],a={},n={}}return{bind:l,update:h,dispose:E}}function hv(){return oi===null&&(oi=new Dd(lv,16,16,or,pi),oi.name="DFG_LUT",oi.minFilter=Lt,oi.magFilter=Lt,oi.wrapS=Si,oi.wrapT=Si,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}var uu,nl,du,cn,pu,la,wi,zt,bi,Ti,ua,sl,ol,ll,fu,Dr,mu,gu,_u,vu,yu,xu,Mu,bu,gh,_h,Su,Tu,Eu,wu,Au,Cu,Ru,Pu,Iu,ys,xs,Ms,ma,bs,Ss,Ts,Es,vh,Lu,Du,ci,yh,xh,Mh,bh,Sh,Th,uo,Eh,sr,qr,On,Fn,En,ws,Si,As,At,Nu,Oa,Lt,Bn,tr,jt,wh,Ah,ga,po,di,hi,pi,fo,mo,_a,Ch,Rh,Ph,Ih,Qt,Ai,ir,Lh,go,or,_o,vo,un,dn,pn,fn,Cs,Rs,Ps,Is,Ls,Ds,Ns,Us,Os,vn,Fs,Bs,zs,Gs,Vs,ks,Hs,Ws,Xs,js,qs,Ys,Zs,$s,Js,Ks,Qs,eo,to,io,yn,ro,xn,ao,zn,hl,cl,ul,dl,Uu,pl,Ou,Bi,It,Mn,bn,at,Gn,Fu,Bu,zu,Gu,yo,Vu,ku,xo,Hu,Wu,fl,ei,Sn,ml,Yr,Zu,hr,Rt,_l,Gr,ya,zi,kr,oe,ii,Hr,R,Vn,vl,Wr,je,kn,yl,xl,Qe,vr,pd,fd,bo,md,Wn,Yt,Xr,dt,gd,ti,Nh,_d,nr,Ye,yr,$t,vd,yd,Li,Fa,Vt,Ml,bl,Zr,So,xd,Sl,xr,_i,Ba,ia,Md,bd,Tl,El,wl,Al,Sd,Mr,Xn,Ci,rr,Td,jn,Oh,Di,za,tt,Pt,To,Eo,Jt,vi,Yn,yi,br,Sr,Cl,Zn,$n,Jn,Kn,Qn,es,Ur,Gi,xi,Kt,Ga,Tr,Er,wr,Ni,Ui,$i,ra,Va,ka,Ji,Ev,bt,Ha,wd,ui,Bh,zh,ke,Ad,aa,is,Vi,Cd,Xt,rs,Ar,kt,na,wt,vt,wv,as,Rd,Pd,Fi,Id,wn,Av,Cv,Rv,Pv,Iv,Lv,Dv,Nv,Uv,Ov,Fv,Bv,zv,Gv,Mi,ns,Wa,Xa,Ea,Vh,Rl,Ki,ja,Pl,qa,Ya,Za,ss,$a,Il,Ja,Gt,Vv,kv,Hv,Wv,Xv,jv,qv,Yv,Zv,Dd,$v,Jv,Kv,Qv,ey,ty,iy,ry,Qi,Nd,Qa,xa,Ll,Ud,Od,ay,ny,sy,oy,ly,hy,cy,uy,dy,py,fy,my,gy,_y,vy,yy,xy,My,by,Sy,Ty,Ey,wy,Ay,Hh,Ma,Fd,Wh,wa,Bd,zd,Yh,Gd,Aa,Vd,en,tn,os,rn,kd,fi,wo,Hd,Dl,Nl,ls,hs,cs,Wd,Qh,Kd,ec,Qd,tc,ic,rc,Tn,ep,Ol,ac,vp,ar,yp,xp,bp,Sp,Tp,Ca,Ep,wp,Cp,Rp,Pp,Ip,Lp,Dp,Cy,Up,Op,Fp,qt,Bp,zp,Gp,Ra,Vp,kp,Hp,Wp,mi,Pa,qp,Yp,Zp,Tc,Ia,$p,ds,Jp,Kp,Co,Rr,Qp,Ro,Ry,Py,Iy,sn,on,si,Po,Oi,Wl,Xl,Bt,Ec,Ly,Dy,Ny,Pr,Ir,ef,tf,Io,Uy,Oy,Fy,By,zy,Gy,Vy,ky,Hy,Lo,af,Do,nf,sf,of,lf,hf,cf,uf,df,_t,Wy,jl,No,jr,Xy,jy,qy,Yy,Zy,$y,Jy,Ky,Qy,ex,tx,ix,rx,ax,nx,sx,ox,lx,hx,cx,ux,dx,px,mf,gf,_f,vf,yf,xf,Mf,bf,Sf,Tf,Ef,wf,Af,Cf,Rf,Pf,If,Lf,Df,Nf,Uf,Of,Ff,Bf,zf,Gf,Vf,kf,Hf,Wf,Xf,jf,qf,Yf,Zf,$f,Jf,Kf,Qf,em,tm,im,rm,am,nm,sm,om,lm,hm,cm,um,dm,pm,fm,mm,gm,_m,vm,ym,xm,Mm,bm,Sm,Tm,Em,wm,Am,Cm,Rm,Pm,Im,Lm,Dm,Nm,Um,Om,Fm,Bm,zm,Gm,Vm,km,Hm,Wm,Xm,jm,qm,Ym,Zm,$m,Jm,Km,Qm,eg,tg,ig,rg,ag,ng,sg,og,lg,hg,cg,ug,dg,pg,fg,mg,gg,_g,vg,yg,xg,Mg,bg,Sg,Tg,Eg,wg,Ag,Cg,Rg,Pg,Ig,Lg,Dg,Ng,Ug,Og,Fg,Bg,zg,Gg,Vg,kg,Hg,Wg,Xg,jg,qg,Yg,qe,ge,li,ln,Zg,Ac,Br,t0,i0,r0,sa,Zl,ps,fs,ms,gs,a0,er,lo,Cc,m0,Rc,ho,Pc,Ic,Lc,Ql,eh,th,ih,rh,r_,a_,n_,_s,_n,o_,l_,sh,d_,hn,v_,y_,M_,S_,E_,A_,R_,D_,N_,U_,H_,q_,Y_,Z_,$_,mh,oa,vs,tv,iv,rv,av,nv,Dc,lv,oi,Uo,fx,Oo=Zo(()=>{uu=0,nl=1,du=2,cn=1,pu=2,la=3,wi=0,zt=1,bi=2,Ti=0,ua=1,sl=2,ol=3,ll=4,fu=5,Dr=100,mu=101,gu=102,_u=103,vu=104,yu=200,xu=201,Mu=202,bu=203,gh=204,_h=205,Su=206,Tu=207,Eu=208,wu=209,Au=210,Cu=211,Ru=212,Pu=213,Iu=214,ys=0,xs=1,Ms=2,ma=3,bs=4,Ss=5,Ts=6,Es=7,vh=0,Lu=1,Du=2,ci=0,yh=1,xh=2,Mh=3,bh=4,Sh=5,Th=6,uo=7,Eh=300,sr=301,qr=302,On=303,Fn=304,En=306,ws=1e3,Si=1001,As=1002,At=1003,Nu=1004,Oa=1005,Lt=1006,Bn=1007,tr=1008,jt=1009,wh=1010,Ah=1011,ga=1012,po=1013,di=1014,hi=1015,pi=1016,fo=1017,mo=1018,_a=1020,Ch=35902,Rh=35899,Ph=1021,Ih=1022,Qt=1023,Ai=1026,ir=1027,Lh=1028,go=1029,or=1030,_o=1031,vo=1033,un=33776,dn=33777,pn=33778,fn=33779,Cs=35840,Rs=35841,Ps=35842,Is=35843,Ls=36196,Ds=37492,Ns=37496,Us=37488,Os=37489,vn=37490,Fs=37491,Bs=37808,zs=37809,Gs=37810,Vs=37811,ks=37812,Hs=37813,Ws=37814,Xs=37815,js=37816,qs=37817,Ys=37818,Zs=37819,$s=37820,Js=37821,Ks=36492,Qs=36494,eo=36495,to=36283,io=36284,yn=36285,ro=36286,xn=2300,ao=2301,zn=2302,hl=2303,cl=2400,ul=2401,dl=2402,Uu=3200,pl=0,Ou=1,Bi="",It="srgb",Mn="srgb-linear",bn="linear",at="srgb",Gn=7680,Fu=519,Bu=512,zu=513,Gu=514,yo=515,Vu=516,ku=517,xo=518,Hu=519,Wu=35044,fl="300 es",ei=2e3,Sn=2001;ml={},Yr=null;Zu={[ys]:xs,[Ms]:Ts,[bs]:Es,[ma]:Ss,[xs]:ys,[Ts]:Ms,[Es]:bs,[Ss]:ma},hr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_l=1234567,Gr=Math.PI/180,ya=180/Math.PI;zi={DEG2RAD:Gr,RAD2DEG:ya,generateUUID:cr,clamp:Ze,euclideanModulo:Mo,mapLinear:$u,inverseLerp:Ju,lerp:da,damp:Ku,pingpong:Qu,smoothstep:ed,smootherstep:td,randInt:id,randFloat:rd,randFloatSpread:ad,seededRandom:nd,degToRad:sd,radToDeg:od,isPowerOfTwo:ld,ceilPowerOfTwo:hd,floorPowerOfTwo:cd,setQuaternionFromProperEuler:ud,normalize:Nt,denormalize:Nr},oe=(kr=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ze(this.x,t.x,i.x),this.y=Ze(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ze(this.x,t,i),this.y=Ze(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Ze(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kr.prototype.isVector2=!0,kr),ii=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],d=a[n+0],u=a[n+1],f=a[n+2],v=a[n+3];if(c!==v||o!==d||l!==u||h!==f){let y=o*d+l*u+h*f+c*v;y<0&&(d=-d,u=-u,f=-f,v=-v,y=-y);let m=1-s;if(y<.9995){let p=Math.acos(y),S=Math.sin(p);m=Math.sin(m*p)/S,s=Math.sin(s*p)/S,o=o*m+d*s,l=l*m+u*s,h=h*m+f*s,c=c*m+v*s}else{o=o*m+d*s,l=l*m+u*s,h=h*m+f*s,c=c*m+v*s;let p=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=p,l*=p,h*=p,c*=p}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[n],d=a[n+1],u=a[n+2],f=a[n+3];return e[t]=s*f+h*c+o*u-l*d,e[t+1]=o*f+h*d+l*c-s*u,e[t+2]=l*f+h*u+s*d-o*c,e[t+3]=h*f-s*c-o*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),c=s(a/2),d=o(i/2),u=o(r/2),f=o(a/2);switch(n){case"XYZ":this._x=d*h*c+l*u*f,this._y=l*u*c-d*h*f,this._z=l*h*f+d*u*c,this._w=l*h*c-d*u*f;break;case"YXZ":this._x=d*h*c+l*u*f,this._y=l*u*c-d*h*f,this._z=l*h*f-d*u*c,this._w=l*h*c+d*u*f;break;case"ZXY":this._x=d*h*c-l*u*f,this._y=l*u*c+d*h*f,this._z=l*h*f+d*u*c,this._w=l*h*c-d*u*f;break;case"ZYX":this._x=d*h*c-l*u*f,this._y=l*u*c+d*h*f,this._z=l*h*f-d*u*c,this._w=l*h*c+d*u*f;break;case"YZX":this._x=d*h*c+l*u*f,this._y=l*u*c+d*h*f,this._z=l*h*f-d*u*c,this._w=l*h*c-d*u*f;break;case"XZY":this._x=d*h*c-l*u*f,this._y=l*u*c-d*h*f,this._z=l*h*f+d*u*c,this._w=l*h*c+d*u*f;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10],d=i+s+c;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-o)*u,this._y=(a-l)*u,this._z=(n-r)*u}else if(i>s&&i>c){let u=2*Math.sqrt(1+i-s-c);this._w=(h-o)/u,this._x=.25*u,this._y=(r+n)/u,this._z=(a+l)/u}else if(s>c){let u=2*Math.sqrt(1+s-i-c);this._w=(a-l)/u,this._x=(r+n)/u,this._y=.25*u,this._z=(o+h)/u}else{let u=2*Math.sqrt(1+c-i-s);this._w=(n-r)/u,this._x=(a+l)/u,this._y=(o+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),h=Math.sin(l);o=Math.sin(o*l)/h,t=Math.sin(t*l)/h,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=(Hr=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(vl.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(vl.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*r),c=2*(o*i-n*a),d=2*(n*r-s*i);return this.x=i+l*h+s*d-o*c,this.y=r+l*c+o*h-n*d,this.z=a+l*d+n*c-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ze(this.x,t.x,i.x),this.y=Ze(this.y,t.y,i.y),this.z=Ze(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ze(this.x,t,i),this.y=Ze(this.y,t,i),this.z=Ze(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Vn.copy(this).projectOnVector(t),this.sub(Vn)}reflect(t){return this.sub(Vn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Ze(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hr.prototype.isVector3=!0,Hr),Vn=new R,vl=new ii,je=(Wr=class{constructor(t,i,r,a,n,s,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h)}set(t,i,r,a,n,s,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=i,c[4]=n,c[5]=l,c[6]=r,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],c=r[4],d=r[7],u=r[2],f=r[5],v=r[8],y=a[0],m=a[3],p=a[6],S=a[1],E=a[4],_=a[7],T=a[2],A=a[5],C=a[8];return n[0]=s*y+o*S+l*T,n[3]=s*m+o*E+l*A,n[6]=s*p+o*_+l*C,n[1]=h*y+c*S+d*T,n[4]=h*m+c*E+d*A,n[7]=h*p+c*_+d*C,n[2]=u*y+f*S+v*T,n[5]=u*m+f*E+v*A,n[8]=u*p+f*_+v*C,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return i*s*c-i*o*h-r*n*c+r*o*l+a*n*h-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=c*s-o*h,u=o*l-c*n,f=h*n-s*l,v=i*d+r*u+a*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/v;return t[0]=d*y,t[1]=(a*h-c*r)*y,t[2]=(o*r-a*s)*y,t[3]=u*y,t[4]=(c*i-a*l)*y,t[5]=(a*n-o*i)*y,t[6]=f*y,t[7]=(r*l-h*i)*y,t[8]=(s*i-r*n)*y,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(t,i){return zr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kn.makeScale(t,i)),this}rotate(t){return zr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kn.makeRotation(-t)),this}translate(t,i){return zr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kn.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wr.prototype.isMatrix3=!0,Wr),kn=new je,yl=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xl=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe=dd();pd=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vr===void 0&&(vr=va("canvas")),vr.width=e.width,vr.height=e.height;let r=vr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=vr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=va("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Ei(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ei(t[i]/255)*255):t[i]=Ei(t[i]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fd=0,bo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=cr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(Hn(r[n].image)):a.push(Hn(r[n]))}else a=Hn(r);i.url=a}return t||(e.images[this.uuid]=i),i}};md=0,Wn=new R,Yt=class mn extends hr{constructor(t=mn.DEFAULT_IMAGE,i=mn.DEFAULT_MAPPING,r=Si,a=Si,n=Lt,s=tr,o=Qt,l=jt,h=mn.DEFAULT_ANISOTROPY,c=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=cr(),this.name="",this.source=new bo(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wn).x}get height(){return this.source.getSize(Wn).y}get depth(){return this.source.getSize(Wn).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Be(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Be(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ws:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case As:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ws:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case As:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Eh;Yt.DEFAULT_ANISOTROPY=1;dt=(Xr=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],c=s[1],d=s[5],u=s[9],f=s[2],v=s[6],y=s[10];if(Math.abs(l-c)<.01&&Math.abs(h-f)<.01&&Math.abs(u-v)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(o+d+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let p=(o+1)/2,S=(d+1)/2,E=(y+1)/2,_=(l+c)/4,T=(h+f)/4,A=(u+v)/4;return p>S&&p>E?p<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(p),a=_/r,n=T/r):S>E?S<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(S),r=_/a,n=A/a):E<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(E),r=T/n,a=A/n),this.set(r,a,n,i),this}let m=Math.sqrt((v-u)*(v-u)+(h-f)*(h-f)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(v-u)/m,this.y=(h-f)/m,this.z=(c-l)/m,this.w=Math.acos((o+d+y-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ze(this.x,t.x,i.x),this.y=Ze(this.y,t.y,i.y),this.z=Ze(this.z,t.z,i.z),this.w=Ze(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ze(this.x,t,i),this.y=Ze(this.y,t,i),this.z=Ze(this.z,t,i),this.w=Ze(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xr.prototype.isVector4=!0,Xr),gd=class extends hr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new Yt(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new bo(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends gd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Nh=class extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},_d=class extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ye=(nr=class{constructor(t,i,r,a,n,s,o,l,h,c,d,u,f,v,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h,c,d,u,f,v,y,m)}set(t,i,r,a,n,s,o,l,h,c,d,u,f,v,y,m){let p=this.elements;return p[0]=t,p[4]=i,p[8]=r,p[12]=a,p[1]=n,p[5]=s,p[9]=o,p[13]=l,p[2]=h,p[6]=c,p[10]=d,p[14]=u,p[3]=f,p[7]=v,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nr().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/yr.setFromMatrixColumn(t,0).length(),n=1/yr.setFromMatrixColumn(t,1).length(),s=1/yr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(n),d=Math.sin(n);if(t.order==="XYZ"){let u=s*c,f=s*d,v=o*c,y=o*d;i[0]=l*c,i[4]=-l*d,i[8]=h,i[1]=f+v*h,i[5]=u-y*h,i[9]=-o*l,i[2]=y-u*h,i[6]=v+f*h,i[10]=s*l}else if(t.order==="YXZ"){let u=l*c,f=l*d,v=h*c,y=h*d;i[0]=u+y*o,i[4]=v*o-f,i[8]=s*h,i[1]=s*d,i[5]=s*c,i[9]=-o,i[2]=f*o-v,i[6]=y+u*o,i[10]=s*l}else if(t.order==="ZXY"){let u=l*c,f=l*d,v=h*c,y=h*d;i[0]=u-y*o,i[4]=-s*d,i[8]=v+f*o,i[1]=f+v*o,i[5]=s*c,i[9]=y-u*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let u=s*c,f=s*d,v=o*c,y=o*d;i[0]=l*c,i[4]=v*h-f,i[8]=u*h+y,i[1]=l*d,i[5]=y*h+u,i[9]=f*h-v,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let u=s*l,f=s*h,v=o*l,y=o*h;i[0]=l*c,i[4]=y-u*d,i[8]=v*d+f,i[1]=d,i[5]=s*c,i[9]=-o*c,i[2]=-h*c,i[6]=f*d+v,i[10]=u-y*d}else if(t.order==="XZY"){let u=s*l,f=s*h,v=o*l,y=o*h;i[0]=l*c,i[4]=-d,i[8]=h*c,i[1]=u*d+y,i[5]=s*c,i[9]=f*d-v,i[2]=v*d-f,i[6]=o*c,i[10]=y*d+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vd,t,yd)}lookAt(t,i,r){let a=this.elements;return Vt.subVectors(t,i),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Li.crossVectors(r,Vt),Li.lengthSq()===0&&(Math.abs(r.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Li.crossVectors(r,Vt)),Li.normalize(),Fa.crossVectors(Vt,Li),a[0]=Li.x,a[4]=Fa.x,a[8]=Vt.x,a[1]=Li.y,a[5]=Fa.y,a[9]=Vt.y,a[2]=Li.z,a[6]=Fa.z,a[10]=Vt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],c=r[1],d=r[5],u=r[9],f=r[13],v=r[2],y=r[6],m=r[10],p=r[14],S=r[3],E=r[7],_=r[11],T=r[15],A=a[0],C=a[4],g=a[8],b=a[12],D=a[1],P=a[5],N=a[9],W=a[13],L=a[2],z=a[6],Z=a[10],k=a[14],le=a[3],q=a[7],Y=a[11],ee=a[15];return n[0]=s*A+o*D+l*L+h*le,n[4]=s*C+o*P+l*z+h*q,n[8]=s*g+o*N+l*Z+h*Y,n[12]=s*b+o*W+l*k+h*ee,n[1]=c*A+d*D+u*L+f*le,n[5]=c*C+d*P+u*z+f*q,n[9]=c*g+d*N+u*Z+f*Y,n[13]=c*b+d*W+u*k+f*ee,n[2]=v*A+y*D+m*L+p*le,n[6]=v*C+y*P+m*z+p*q,n[10]=v*g+y*N+m*Z+p*Y,n[14]=v*b+y*W+m*k+p*ee,n[3]=S*A+E*D+_*L+T*le,n[7]=S*C+E*P+_*z+T*q,n[11]=S*g+E*N+_*Z+T*Y,n[15]=S*b+E*W+_*k+T*ee,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],f=t[14],v=t[3],y=t[7],m=t[11],p=t[15],S=l*f-h*u,E=o*f-h*d,_=o*u-l*d,T=s*f-h*c,A=s*u-l*c,C=s*d-o*c;return i*(y*S-m*E+p*_)-r*(v*S-m*T+p*A)+a*(v*E-y*T+p*C)-n*(v*_-y*A+m*C)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10];return i*(s*c-o*h)-r*(n*c-o*l)+a*(n*h-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],f=t[11],v=t[12],y=t[13],m=t[14],p=t[15],S=i*o-r*s,E=i*l-a*s,_=i*h-n*s,T=r*l-a*o,A=r*h-n*o,C=a*h-n*l,g=c*y-d*v,b=c*m-u*v,D=c*p-f*v,P=d*m-u*y,N=d*p-f*y,W=u*p-f*m,L=S*W-E*N+_*P+T*D-A*b+C*g;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/L;return t[0]=(o*W-l*N+h*P)*z,t[1]=(a*N-r*W-n*P)*z,t[2]=(y*C-m*A+p*T)*z,t[3]=(u*A-d*C-f*T)*z,t[4]=(l*D-s*W-h*b)*z,t[5]=(i*W-a*D+n*b)*z,t[6]=(m*_-v*C-p*E)*z,t[7]=(c*C-u*_+f*E)*z,t[8]=(s*N-o*D+h*g)*z,t[9]=(r*D-i*N-n*g)*z,t[10]=(v*A-y*_+p*S)*z,t[11]=(d*_-c*A-f*S)*z,t[12]=(o*b-s*P-l*g)*z,t[13]=(i*P-r*b+a*g)*z,t[14]=(y*E-v*T-m*S)*z,t[15]=(c*T-d*E+u*S)*z,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,h=n*s,c=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+r,c*l-a*s,0,h*l-a*o,c*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,c=s+s,d=o+o,u=n*h,f=n*c,v=n*d,y=s*c,m=s*d,p=o*d,S=l*h,E=l*c,_=l*d,T=r.x,A=r.y,C=r.z;return a[0]=(1-(y+p))*T,a[1]=(f+_)*T,a[2]=(v-E)*T,a[3]=0,a[4]=(f-_)*A,a[5]=(1-(u+p))*A,a[6]=(m+S)*A,a[7]=0,a[8]=(v+E)*C,a[9]=(m-S)*C,a[10]=(1-(u+y))*C,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=yr.set(a[0],a[1],a[2]).length(),o=yr.set(a[4],a[5],a[6]).length(),l=yr.set(a[8],a[9],a[10]).length();n<0&&(s=-s),$t.copy(this);let h=1/s,c=1/o,d=1/l;return $t.elements[0]*=h,$t.elements[1]*=h,$t.elements[2]*=h,$t.elements[4]*=c,$t.elements[5]*=c,$t.elements[6]*=c,$t.elements[8]*=d,$t.elements[9]*=d,$t.elements[10]*=d,i.setFromRotationMatrix($t),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=ei,l=!1){let h=this.elements,c=2*n/(i-t),d=2*n/(r-a),u=(i+t)/(i-t),f=(r+a)/(r-a),v,y;if(l)v=n/(s-n),y=s*n/(s-n);else if(o===ei)v=-(s+n)/(s-n),y=-2*s*n/(s-n);else if(o===Sn)v=-s/(s-n),y=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=ei,l=!1){let h=this.elements,c=2/(i-t),d=2/(r-a),u=-(i+t)/(i-t),f=-(r+a)/(r-a),v,y;if(l)v=1/(s-n),y=s/(s-n);else if(o===ei)v=-2/(s-n),y=-(s+n)/(s-n);else if(o===Sn)v=-1/(s-n),y=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=v,h[14]=y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},nr.prototype.isMatrix4=!0,nr),yr=new R,$t=new Ye,vd=new R(0,0,0),yd=new R(1,1,1),Li=new R,Fa=new R,Vt=new R,Ml=new Ye,bl=new ii,Zr=class Uh{constructor(t=0,i=0,r=0,a=Uh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],c=a[9],d=a[2],u=a[6],f=a[10];switch(i){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ml,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return bl.setFromEuler(this),this.setFromQuaternion(bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zr.DEFAULT_ORDER="XYZ";So=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xd=0,Sl=new R,xr=new ii,_i=new Ye,Ba=new R,ia=new R,Md=new R,bd=new ii,Tl=new R(1,0,0),El=new R(0,1,0),wl=new R(0,0,1),Al={type:"added"},Sd={type:"removed"},Mr={type:"childadded",child:null},Xn={type:"childremoved",child:null},Ci=class gn extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();let t=new R,i=new Zr,r=new ii,a=new R(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ye},normalMatrix:{value:new je}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return xr.setFromAxisAngle(t,i),this.quaternion.multiply(xr),this}rotateOnWorldAxis(t,i){return xr.setFromAxisAngle(t,i),this.quaternion.premultiply(xr),this}rotateX(t){return this.rotateOnAxis(Tl,t)}rotateY(t){return this.rotateOnAxis(El,t)}rotateZ(t){return this.rotateOnAxis(wl,t)}translateOnAxis(t,i){return Sl.copy(t).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Tl,t)}translateY(t){return this.translateOnAxis(El,t)}translateZ(t){return this.translateOnAxis(wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ba.copy(t):Ba.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(ia,Ba,this.up):_i.lookAt(Ba,ia,this.up),this.quaternion.setFromRotationMatrix(_i),a&&(_i.extractRotation(a.matrixWorld),xr.setFromRotationMatrix(_i),this.quaternion.premultiply(xr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Al),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Sd),Xn.child=t,this.dispatchEvent(Xn),Xn.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Al),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,t,Md),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];n(t.shapes,d)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),c=s(t.images),d=s(t.shapes),u=s(t.skeletons),f=s(t.animations),v=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),d.length>0&&(r.shapes=d),u.length>0&&(r.skeletons=u),f.length>0&&(r.animations=f),v.length>0&&(r.nodes=v)}return r.object=a,r;function s(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ci.DEFAULT_UP=new R(0,1,0);Ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;rr=class extends Ci{constructor(){super(),this.isGroup=!0,this.type="Group"}},Td={type:"move"},jn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let v of e.hand.values()){let y=t.getJointPose(v,i),m=this._getHandJoint(l,v);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],d=h.position.distanceTo(c.position),u=.02,f=.005;l.inputState.pinching&&d>u+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Td)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new rr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},za={h:0,s:0,l:0};tt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=Mo(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=qn(n,a,e+1/3),this.g=qn(n,a,e),this.b=qn(n,a,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=It){function i(a){a!==void 0&&parseFloat(a)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let i=Oh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Qe.workingToColorSpace(Pt.copy(this),e),Math.round(Ze(Pt.r*255,0,255))*65536+Math.round(Ze(Pt.g*255,0,255))*256+Math.round(Ze(Pt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Pt.copy(this),t);let i=Pt.r,r=Pt.g,a=Pt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=h<=.5?c/(n+s):c/(2-n-s),n){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=It){Qe.workingToColorSpace(Pt.copy(this),e);let t=Pt.r,i=Pt.g,r=Pt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(za);let i=da(Di.h,za.h,t),r=da(Di.s,za.s,t),a=da(Di.l,za.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pt=new tt;tt.NAMES=Oh;To=class Fh{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new tt(t),this.near=i,this.far=r}clone(){return new Fh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Eo=class extends Ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Jt=new R,vi=new R,Yn=new R,yi=new R,br=new R,Sr=new R,Cl=new R,Zn=new R,$n=new R,Jn=new R,Kn=new dt,Qn=new dt,es=new dt,Ur=class Or{constructor(t=new R,i=new R,r=new R){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),Jt.subVectors(t,i),a.cross(Jt);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){Jt.subVectors(a,i),vi.subVectors(r,i),Yn.subVectors(t,i);let s=Jt.dot(Jt),o=Jt.dot(vi),l=Jt.dot(Yn),h=vi.dot(vi),c=vi.dot(Yn),d=s*h-o*o;if(d===0)return n.set(0,0,0),null;let u=1/d,f=(h*l-o*c)*u,v=(s*c-o*l)*u;return n.set(1-f-v,v,f)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,yi.x),l.addScaledVector(s,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return Kn.setScalar(0),Qn.setScalar(0),es.setScalar(0),Kn.fromBufferAttribute(t,i),Qn.fromBufferAttribute(t,r),es.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Kn,n.x),s.addScaledVector(Qn,n.y),s.addScaledVector(es,n.z),s}static isFrontFacing(t,i,r,a){return Jt.subVectors(r,i),vi.subVectors(t,i),Jt.cross(vi).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jt.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Jt.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Or.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Or.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Or.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Or.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Or.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;br.subVectors(a,r),Sr.subVectors(n,r),Zn.subVectors(t,r);let l=br.dot(Zn),h=Sr.dot(Zn);if(l<=0&&h<=0)return i.copy(r);$n.subVectors(t,a);let c=br.dot($n),d=Sr.dot($n);if(c>=0&&d<=c)return i.copy(a);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return s=l/(l-c),i.copy(r).addScaledVector(br,s);Jn.subVectors(t,n);let f=br.dot(Jn),v=Sr.dot(Jn);if(v>=0&&f<=v)return i.copy(n);let y=f*h-l*v;if(y<=0&&h>=0&&v<=0)return o=h/(h-v),i.copy(r).addScaledVector(Sr,o);let m=c*v-f*d;if(m<=0&&d-c>=0&&f-v>=0)return Cl.subVectors(n,a),o=(d-c)/(d-c+(f-v)),i.copy(a).addScaledVector(Cl,o);let p=1/(m+y+u);return s=y*p,o=u*p,i.copy(r).addScaledVector(br,s).addScaledVector(Sr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gi=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,Kt):Kt.fromBufferAttribute(a,n),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ga.copy(i.boundingBox)),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Va.subVectors(this.max,ra),Tr.subVectors(e.a,ra),Er.subVectors(e.b,ra),wr.subVectors(e.c,ra),Ni.subVectors(Er,Tr),Ui.subVectors(wr,Er),$i.subVectors(Tr,wr);let t=[0,-Ni.z,Ni.y,0,-Ui.z,Ui.y,0,-$i.z,$i.y,Ni.z,0,-Ni.x,Ui.z,0,-Ui.x,$i.z,0,-$i.x,-Ni.y,Ni.x,0,-Ui.y,Ui.x,0,-$i.y,$i.x,0];return!ts(t,Tr,Er,wr,Va)||(t=[1,0,0,0,1,0,0,0,1],!ts(t,Tr,Er,wr,Va))?!1:(ka.crossVectors(Ni,Ui),t=[ka.x,ka.y,ka.z],ts(t,Tr,Er,wr,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xi=[new R,new R,new R,new R,new R,new R,new R,new R],Kt=new R,Ga=new Gi,Tr=new R,Er=new R,wr=new R,Ni=new R,Ui=new R,$i=new R,ra=new R,Va=new R,ka=new R,Ji=new R;Ev=Ed();bt=new R,Ha=new oe,wd=0,ui=class extends hr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wu,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ha.fromBufferAttribute(this,t),Ha.applyMatrix3(e),this.setXY(t,Ha.x,Ha.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Nr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array),a=Nt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Bh=class extends ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}},zh=class extends ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ke=class extends ui{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ad=new Gi,aa=new R,is=new R,Vi=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ad.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);let t=aa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(is.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(is)),this.expandByPoint(aa.copy(e.center).sub(is))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Cd=0,Xt=new Ye,rs=new Ci,Ar=new R,kt=new Gi,na=new Gi,wt=new R,vt=class Gh extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xu(t)?zh:Bh)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new je().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Xt.makeRotationFromQuaternion(t),this.applyMatrix4(Xt),this}rotateX(t){return Xt.makeRotationX(t),this.applyMatrix4(Xt),this}rotateY(t){return Xt.makeRotationY(t),this.applyMatrix4(Xt),this}rotateZ(t){return Xt.makeRotationZ(t),this.applyMatrix4(Xt),this}translate(t,i,r){return Xt.makeTranslation(t,i,r),this.applyMatrix4(Xt),this}scale(t,i,r){return Xt.makeScale(t,i,r),this.applyMatrix4(Xt),this}lookAt(t){return rs.lookAt(t),rs.updateMatrix(),this.applyMatrix4(rs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ke(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];kt.setFromBufferAttribute(n),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let r=this.boundingSphere.center;if(kt.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];na.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(kt.min,na.min),kt.expandByPoint(wt),wt.addVectors(kt.max,na.max),kt.expandByPoint(wt)):(kt.expandByPoint(na.min),kt.expandByPoint(na.max))}kt.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)wt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(wt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)wt.fromBufferAttribute(o,h),l&&(Ar.fromBufferAttribute(t,h),wt.add(Ar)),a=Math.max(a,r.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new ui(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let g=0;g<r.count;g++)o[g]=new R,l[g]=new R;let h=new R,c=new R,d=new R,u=new oe,f=new oe,v=new oe,y=new R,m=new R;function p(g,b,D){h.fromBufferAttribute(r,g),c.fromBufferAttribute(r,b),d.fromBufferAttribute(r,D),u.fromBufferAttribute(n,g),f.fromBufferAttribute(n,b),v.fromBufferAttribute(n,D),c.sub(h),d.sub(h),f.sub(u),v.sub(u);let P=1/(f.x*v.y-v.x*f.y);isFinite(P)&&(y.copy(c).multiplyScalar(v.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(c,-v.x).multiplyScalar(P),o[g].add(y),o[b].add(y),o[D].add(y),l[g].add(m),l[b].add(m),l[D].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let g=0,b=S.length;g<b;++g){let D=S[g],P=D.start,N=D.count;for(let W=P,L=P+N;W<L;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let E=new R,_=new R,T=new R,A=new R;function C(g){T.fromBufferAttribute(a,g),A.copy(T);let b=o[g];E.copy(b),E.sub(T.multiplyScalar(T.dot(b))).normalize(),_.crossVectors(A,b);let D=_.dot(l[g])<0?-1:1;s.setXYZW(g,E.x,E.y,E.z,D)}for(let g=0,b=S.length;g<b;++g){let D=S[g],P=D.start,N=D.count;for(let W=P,L=P+N;W<L;W+=3)C(t.getX(W+0)),C(t.getX(W+1)),C(t.getX(W+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,f=r.count;u<f;u++)r.setXYZ(u,0,0,0);let a=new R,n=new R,s=new R,o=new R,l=new R,h=new R,c=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){let v=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);a.fromBufferAttribute(i,v),n.fromBufferAttribute(i,y),s.fromBufferAttribute(i,m),c.subVectors(s,n),d.subVectors(a,n),c.cross(d),o.fromBufferAttribute(r,v),l.fromBufferAttribute(r,y),h.fromBufferAttribute(r,m),o.add(c),l.add(c),h.add(c),r.setXYZ(v,o.x,o.y,o.z),r.setXYZ(y,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,f=i.count;u<f;u+=3)a.fromBufferAttribute(i,u+0),n.fromBufferAttribute(i,u+1),s.fromBufferAttribute(i,u+2),c.subVectors(s,n),d.subVectors(a,n),c.cross(d),r.setXYZ(u+0,c.x,c.y,c.z),r.setXYZ(u+1,c.x,c.y,c.z),r.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)wt.fromBufferAttribute(t,i),wt.normalize(),t.setXYZ(i,wt.x,wt.y,wt.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c),f=0,v=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*c;for(let p=0;p<c;p++)u[v++]=h[f++]}return new ui(u,c,d)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Gh,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let c=0,d=h.length;c<d;c++){let u=h[c],f=t(u,r);l.push(f)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let f=h[d];c.push(f.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let n=t.morphAttributes;for(let h in n){let c=[],d=n[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,c=s.length;h<c;h++){let d=s[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},wv=new R,as=new R,Rd=new R,Pd=new je,Fi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=as.subVectors(i,t).cross(Rd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(as),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Pd.getNormalMatrix(e),r=this.coplanarPoint(as).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Id=0,wn=class extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=ua,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gn,this.stencilZFail=Gn,this.stencilZPass=Gn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Fi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new oe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Av=new R,Cv=new R,Rv=new R,Pv=new oe,Iv=new oe,Lv=new Ye,Dv=new R,Nv=new R,Uv=new R,Ov=new oe,Fv=new oe,Bv=new oe,zv=new R,Gv=new R,Mi=new R,ns=new R,Wa=new R,Xa=new R,Ea=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ns.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),Xa.copy(this.origin).sub(ns);let a=e.distanceTo(t)*.5,n=-this.direction.dot(Wa),s=Xa.dot(this.direction),o=-Xa.dot(Wa),l=Xa.lengthSq(),h=Math.abs(1-n*n),c,d,u,f;if(h>0)if(c=n*o-s,d=n*s-o,f=a*h,c>=0)if(d>=-f)if(d<=f){let v=1/h;c*=v,d*=v,u=c*(c+n*d+2*s)+d*(n*c+d+2*o)+l}else d=a,c=Math.max(0,-(n*d+s)),u=-c*c+d*(d+2*o)+l;else d=-a,c=Math.max(0,-(n*d+s)),u=-c*c+d*(d+2*o)+l;else d<=-f?(c=Math.max(0,-(-n*a+s)),d=c>0?-a:Math.min(Math.max(-a,-o),a),u=-c*c+d*(d+2*o)+l):d<=f?(c=0,d=Math.min(Math.max(-a,-o),a),u=d*(d+2*o)+l):(c=Math.max(0,-(n*a+s)),d=c>0?a:Math.min(Math.max(-a,-o),a),u=-c*c+d*(d+2*o)+l);else d=n>0?-a:a,c=Math.max(0,-(n*d+s)),u=-c*c+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(ns).addScaledVector(Wa,d),u}intersectSphere(e,t){if(e.radius<0)return null;Mi.subVectors(e.center,this.origin);let i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,n=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,n=(e.min.y-d.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),c>=0?(s=(e.min.z-d.z)*c,o=(e.max.z-d.z)*c):(s=(e.max.z-d.z)*c,o=(e.min.z-d.z)*c),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,h=s.z,c=e.x-n.x,d=e.y-n.y,u=e.z-n.z,f=t.x-n.x,v=t.y-n.y,y=t.z-n.z,m=i.x-n.x,p=i.y-n.y,S=i.z-n.z,E=Math.abs(o),_=Math.abs(l),T=Math.abs(h),A,C,g,b,D,P,N,W,L,z,Z,k;if(E>=_&&E>=T?(g=o,P=c,L=f,k=m,o>=0?(A=l,C=h,b=d,D=u,N=v,W=y,z=p,Z=S):(A=h,C=l,b=u,D=d,N=y,W=v,z=S,Z=p)):_>=T?(g=l,P=d,L=v,k=p,l>=0?(A=h,C=o,b=u,D=c,N=y,W=f,z=S,Z=m):(A=o,C=h,b=c,D=u,N=f,W=y,z=m,Z=S)):(g=h,P=u,L=y,k=S,h>=0?(A=o,C=l,b=c,D=d,N=f,W=v,z=m,Z=p):(A=l,C=o,b=d,D=c,N=v,W=f,z=p,Z=m)),g===0)return null;let le=A/g,q=C/g,Y=1/g,ee=b-le*P,he=D-q*P,fe=N-le*L,Xe=W-q*L,Ce=z-le*k,j=Z-q*k,te=Ce*Xe-j*fe,re=ee*j-he*Ce,be=fe*he-Xe*ee;if(r){if(te<0||re<0||be<0)return null}else if((te<0||re<0||be<0)&&(te>0||re>0||be>0))return null;let Ee=te+re+be;if(Ee===0)return null;let ce=Y*(te*P+re*L+be*k);return(Ee>0?ce<0:ce>0)?null:this.at(ce/Ee,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vh=class extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rl=new Ye,Ki=new Ea,ja=new Vi,Pl=new R,qa=new R,Ya=new R,Za=new R,ss=new R,$a=new R,Il=new R,Ja=new R,Gt=class extends Ci{constructor(e=new vt,t=new Vh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){$a.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],c=a[o];h!==0&&(ss.fromBufferAttribute(c,e),n?$a.addScaledVector(ss,h):$a.addScaledVector(ss.sub(t),h))}t.add($a)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(a),Ki.copy(e.ray).recast(e.near),!(ja.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(ja,Pl)===null||Ki.origin.distanceToSquared(Pl)>(e.far-e.near)**2))&&(Rl.copy(a).invert(),Ki.copy(e.ray).applyMatrix4(Rl),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,d=a.groups,u=a.drawRange;if(s!==null)if(Array.isArray(n))for(let f=0,v=d.length;f<v;f++){let y=d[f],m=n[y.materialIndex],p=Math.max(y.start,u.start),S=Math.min(s.count,Math.min(y.start+y.count,u.start+u.count));for(let E=p,_=S;E<_;E+=3){let T=s.getX(E),A=s.getX(E+1),C=s.getX(E+2);r=Ka(this,m,e,i,l,h,c,T,A,C),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let f=Math.max(0,u.start),v=Math.min(s.count,u.start+u.count);for(let y=f,m=v;y<m;y+=3){let p=s.getX(y),S=s.getX(y+1),E=s.getX(y+2);r=Ka(this,n,e,i,l,h,c,p,S,E),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let f=0,v=d.length;f<v;f++){let y=d[f],m=n[y.materialIndex],p=Math.max(y.start,u.start),S=Math.min(o.count,Math.min(y.start+y.count,u.start+u.count));for(let E=p,_=S;E<_;E+=3){let T=E,A=E+1,C=E+2;r=Ka(this,m,e,i,l,h,c,T,A,C),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let f=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let y=f,m=v;y<m;y+=3){let p=y,S=y+1,E=y+2;r=Ka(this,n,e,i,l,h,c,p,S,E),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}};Vv=new dt,kv=new dt,Hv=new dt,Wv=new dt,Xv=new Ye,jv=new R,qv=new Vi,Yv=new Ye,Zv=new Ea,Dd=class extends Yt{constructor(e=null,t=1,i=1,r,a,n,s,o,l=At,h=At,c,d){super(null,n,s,o,l,h,r,a,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$v=new Ye,Jv=new Ye,Kv=new Ye,Qv=new Ye,ey=new Gi,ty=new Ye,iy=new Gt,ry=new Vi,Qi=new Vi,Nd=new oe(.5,.5),Qa=new R,xa=class{constructor(e=new Fi,t=new Fi,i=new Fi,r=new Fi,a=new Fi,n=new Fi){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],h=a[4],c=a[5],d=a[6],u=a[7],f=a[8],v=a[9],y=a[10],m=a[11],p=a[12],S=a[13],E=a[14],_=a[15];if(r[0].setComponents(l-n,u-h,m-f,_-p).normalize(),r[1].setComponents(l+n,u+h,m+f,_+p).normalize(),r[2].setComponents(l+s,u+c,m+v,_+S).normalize(),r[3].setComponents(l-s,u-c,m-v,_-S).normalize(),i)r[4].setComponents(o,d,y,E).normalize(),r[5].setComponents(l-o,u-d,m-y,_-E).normalize();else if(r[4].setComponents(l-o,u-d,m-y,_-E).normalize(),t===ei)r[5].setComponents(l+o,u+d,m+y,_+E).normalize();else if(t===Sn)r[5].setComponents(o,d,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){Qi.center.set(0,0,0);let t=Nd.distanceTo(e.center);return Qi.radius=.7071067811865476+t,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Qa.x=r.normal.x>0?e.max.x:e.min.x,Qa.y=r.normal.y>0?e.max.y:e.min.y,Qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ll=new Ye,Ud=class kh{constructor(){this.coordinateSystem=ei,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];Ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new xa),r[a].setFromProjectionMatrix(Ll,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new xa),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new kh().copy(this)}},Od=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let a=this.pool,n=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let s=a[this.index];n.push(s),this.index++,s.start=e,s.count=t,s.z=i,s.index=r}reset(){this.list.length=0,this.index=0}},ay=new Ye,ny=new tt(1,1,1),sy=new xa,oy=new Ud,ly=new Gi,hy=new Vi,cy=new R,uy=new R,dy=new R,py=new Od,fy=new Gt,my=new R,gy=new R,_y=new Ye,vy=new Ea,yy=new Vi,xy=new R,My=new R,by=new R,Sy=new R,Ty=new Ye,Ey=new Ea,wy=new Vi,Ay=new R,Hh=class extends Yt{constructor(e=[],t=sr,i,r,a,n,s,o,l,h){super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ma=class extends Yt{constructor(e,t,i=di,r,a,n,s=At,o=At,l,h=Ai,c=1){if(h!==Ai&&h!==ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:c};super(d,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fd=class extends Ma{constructor(e,t=di,i=sr,r,a,n=At,s=At,o,l=Ai){let h={width:e,height:e,depth:1},c=[h,h,h,h,h,h];super(e,e,t,i,r,a,n,s,o,l),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wh=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},wa=class Xh extends vt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],d=[],u=0,f=0;v("z","y","x",-1,-1,r,i,t,s,n,0),v("z","y","x",1,-1,r,i,-t,s,n,1),v("x","z","y",1,1,t,r,i,a,s,2),v("x","z","y",1,-1,t,r,-i,a,s,3),v("x","y","z",1,-1,t,i,r,a,n,4),v("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(d,2));function v(y,m,p,S,E,_,T,A,C,g,b){let D=_/C,P=T/g,N=_/2,W=T/2,L=A/2,z=C+1,Z=g+1,k=0,le=0,q=new R;for(let Y=0;Y<Z;Y++){let ee=Y*P-W;for(let he=0;he<z;he++){let fe=he*D-N;q[y]=fe*S,q[m]=ee*E,q[p]=L,h.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[p]=A>0?1:-1,c.push(q.x,q.y,q.z),d.push(he/C),d.push(1-Y/g),k+=1}}for(let Y=0;Y<g;Y++)for(let ee=0;ee<C;ee++){let he=u+ee+z*Y,fe=u+ee+z*(Y+1),Xe=u+(ee+1)+z*(Y+1),Ce=u+(ee+1)+z*Y;l.push(he,fe,Ce),l.push(fe,Xe,Ce),le+=6}o.addGroup(f,le,b),f+=le,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xh(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Bd=class jh extends vt{constructor(t=1,i=1,r=4,a=8,n=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:r,radialSegments:a,heightSegments:n},i=Math.max(0,i),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),n=Math.max(1,Math.floor(n));let s=[],o=[],l=[],h=[],c=i/2,d=Math.PI/2*t,u=i,f=2*d+u,v=r*2+n,y=a+1,m=new R,p=new R;for(let S=0;S<=v;S++){let E=0,_=0,T=0,A=0;if(S<=r){let b=S/r,D=b*Math.PI/2;_=-c-t*Math.cos(D),T=t*Math.sin(D),A=-t*Math.cos(D),E=b*d}else if(S<=r+n){let b=(S-r)/n;_=-c+b*i,T=t,A=0,E=d+b*u}else{let b=(S-r-n)/r,D=b*Math.PI/2;_=c+t*Math.sin(D),T=t*Math.cos(D),A=t*Math.sin(D),E=d+u+b*d}let C=Math.max(0,Math.min(1,E/f)),g=0;S===0?g=.5/a:S===v&&(g=-.5/a);for(let b=0;b<=a;b++){let D=b/a,P=D*Math.PI*2,N=Math.sin(P),W=Math.cos(P);p.x=-T*W,p.y=_,p.z=T*N,o.push(p.x,p.y,p.z),m.set(-T*W,A,T*N),m.normalize(),l.push(m.x,m.y,m.z),h.push(D+g,C)}if(S>0){let b=(S-1)*y;for(let D=0;D<a;D++){let P=b+D,N=b+D+1,W=S*y+D,L=S*y+D+1;s.push(P,N,W),s.push(N,L,W)}}}this.setIndex(s),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jh(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},zd=class qh extends vt{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],h=new R,c=new oe;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=i;d++,u+=3){let f=r+d/i*a;h.x=t*Math.cos(f),h.y=t*Math.sin(f),s.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(s[u]/t+1)/2,c.y=(s[u+1]/t+1)/2,l.push(c.x,c.y)}for(let d=1;d<=i;d++)n.push(d,d+1,0);this.setIndex(n),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(o,3)),this.setAttribute("uv",new ke(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qh(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Yh=class Zh extends vt{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let c=[],d=[],u=[],f=[],v=0,y=[],m=r/2,p=0;S(),s===!1&&(t>0&&E(!0),i>0&&E(!1)),this.setIndex(c),this.setAttribute("position",new ke(d,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(f,2));function S(){let _=new R,T=new R,A=0,C=(i-t)/r;for(let g=0;g<=n;g++){let b=[],D=g/n,P=D*(i-t)+t;for(let N=0;N<=a;N++){let W=N/a,L=W*l+o,z=Math.sin(L),Z=Math.cos(L);T.x=P*z,T.y=-D*r+m,T.z=P*Z,d.push(T.x,T.y,T.z),_.set(z,C,Z).normalize(),u.push(_.x,_.y,_.z),f.push(W,1-D),b.push(v++)}y.push(b)}for(let g=0;g<a;g++)for(let b=0;b<n;b++){let D=y[b][g],P=y[b+1][g],N=y[b+1][g+1],W=y[b][g+1];(t>0||b!==0)&&(c.push(D,P,W),A+=3),(i>0||b!==n-1)&&(c.push(P,N,W),A+=3)}h.addGroup(p,A,0),p+=A}function E(_){let T=v,A=new oe,C=new R,g=0,b=_===!0?t:i,D=_===!0?1:-1;for(let N=1;N<=a;N++)d.push(0,m*D,0),u.push(0,D,0),f.push(.5,.5),v++;let P=v;for(let N=0;N<=a;N++){let W=N/a*l+o,L=Math.cos(W),z=Math.sin(W);C.x=b*z,C.y=m*D,C.z=b*L,d.push(C.x,C.y,C.z),u.push(0,D,0),A.x=L*.5+.5,A.y=z*.5*D+.5,f.push(A.x,A.y),v++}for(let N=0;N<a;N++){let W=T+N,L=P+N;_===!0?c.push(L,L+1,W):c.push(L+1,L,W),g+=3}h.addGroup(p,g,_===!0?1:2),p+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gd=class $h extends Yh{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new $h(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Aa=class Jh extends vt{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let n=[],s=[];o(a),h(r),c(),this.setAttribute("position",new ke(n,3)),this.setAttribute("normal",new ke(n.slice(),3)),this.setAttribute("uv",new ke(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let E=new R,_=new R,T=new R;for(let A=0;A<i.length;A+=3)f(i[A+0],E),f(i[A+1],_),f(i[A+2],T),l(E,_,T,S)}function l(S,E,_,T){let A=T+1,C=[];for(let g=0;g<=A;g++){C[g]=[];let b=S.clone().lerp(_,g/A),D=E.clone().lerp(_,g/A),P=A-g;for(let N=0;N<=P;N++)N===0&&g===A?C[g][N]=b:C[g][N]=b.clone().lerp(D,N/P)}for(let g=0;g<A;g++)for(let b=0;b<2*(A-g)-1;b++){let D=Math.floor(b/2);b%2===0?(u(C[g][D+1]),u(C[g+1][D]),u(C[g][D])):(u(C[g][D+1]),u(C[g+1][D+1]),u(C[g+1][D]))}}function h(S){let E=new R;for(let _=0;_<n.length;_+=3)E.x=n[_+0],E.y=n[_+1],E.z=n[_+2],E.normalize().multiplyScalar(S),n[_+0]=E.x,n[_+1]=E.y,n[_+2]=E.z}function c(){let S=new R;for(let E=0;E<n.length;E+=3){S.x=n[E+0],S.y=n[E+1],S.z=n[E+2];let _=m(S)/2/Math.PI+.5,T=p(S)/Math.PI+.5;s.push(_,1-T)}v(),d()}function d(){for(let S=0;S<s.length;S+=6){let E=s[S+0],_=s[S+2],T=s[S+4],A=Math.max(E,_,T),C=Math.min(E,_,T);A>.9&&C<.1&&(E<.2&&(s[S+0]+=1),_<.2&&(s[S+2]+=1),T<.2&&(s[S+4]+=1))}}function u(S){n.push(S.x,S.y,S.z)}function f(S,E){let _=S*3;E.x=t[_+0],E.y=t[_+1],E.z=t[_+2]}function v(){let S=new R,E=new R,_=new R,T=new R,A=new oe,C=new oe,g=new oe;for(let b=0,D=0;b<n.length;b+=9,D+=6){S.set(n[b+0],n[b+1],n[b+2]),E.set(n[b+3],n[b+4],n[b+5]),_.set(n[b+6],n[b+7],n[b+8]),A.set(s[D+0],s[D+1]),C.set(s[D+2],s[D+3]),g.set(s[D+4],s[D+5]),T.copy(S).add(E).add(_).divideScalar(3);let P=m(T);y(A,D+0,S,P),y(C,D+2,E,P),y(g,D+4,_,P)}}function y(S,E,_,T){T<0&&S.x===1&&(s[E]=S.x-1),_.x===0&&_.z===0&&(s[E]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jh(t.vertices,t.indices,t.radius,t.detail)}},Vd=class Kh extends Aa{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=1/r,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,s,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Kh(t.radius,t.detail)}},en=new R,tn=new R,os=new R,rn=new Ur,kd=class extends vt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(Gr*t),a=e.getIndex(),n=e.getAttribute("position"),s=a?a.count:n.count,o=[0,0,0],l=["a","b","c"],h=new Array(3),c={},d=[];for(let u=0;u<s;u+=3){a?(o[0]=a.getX(u),o[1]=a.getX(u+1),o[2]=a.getX(u+2)):(o[0]=u,o[1]=u+1,o[2]=u+2);let{a:f,b:v,c:y}=rn;if(f.fromBufferAttribute(n,o[0]),v.fromBufferAttribute(n,o[1]),y.fromBufferAttribute(n,o[2]),rn.getNormal(os),h[0]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,h[1]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){let p=(m+1)%3,S=h[m],E=h[p],_=rn[l[m]],T=rn[l[p]],A=`${S}_${E}`,C=`${E}_${S}`;C in c&&c[C]?(os.dot(c[C].normal)<=r&&(d.push(_.x,_.y,_.z),d.push(T.x,T.y,T.z)),c[C]=null):A in c||(c[A]={index0:o[m],index1:o[p],normal:os.clone()})}}for(let u in c)if(c[u]){let{index0:f,index1:v}=c[u];en.fromBufferAttribute(n,f),tn.fromBufferAttribute(n,v),d.push(en.x,en.y,en.z),d.push(tn.x,tn.y,tn.z)}this.setAttribute("position",new ke(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let h=i[r],c=i[r+1]-h,d=(n-h)/c;return(r+d)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new oe:new R);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,r=[],a=[],n=[],s=new R,o=new Ye;for(let u=0;u<=e;u++){let f=u/e;r[u]=this.getTangentAt(f,new R)}a[0]=new R,n[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),d<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let u=1;u<=e;u++){if(a[u]=a[u-1].clone(),n[u]=n[u-1].clone(),s.crossVectors(r[u-1],r[u]),s.length()>Number.EPSILON){s.normalize();let f=Math.acos(Ze(r[u-1].dot(r[u]),-1,1));a[u].applyMatrix4(o.makeRotationAxis(s,f))}n[u].crossVectors(r[u],a[u])}if(t===!0){let u=Math.acos(Ze(a[0].dot(a[e]),-1,1));u/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(u=-u);for(let f=1;f<=e;f++)a[f].applyMatrix4(o.makeRotationAxis(r[f],u*f)),n[f].crossVectors(r[f],a[f])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},wo=class extends fi{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new oe){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*h-u*c+this.aX,l=d*c+u*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Hd=class extends wo{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};Dl=new R,Nl=new R,ls=new Ao,hs=new Ao,cs=new Ao,Wd=class extends fi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new R){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=r[(s-1)%a]:(Nl.subVectors(r[0],r[1]).add(r[0]),l=Nl);let c=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?h=r[(s+2)%a]:(Dl.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=Dl),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(c),u),v=Math.pow(c.distanceToSquared(d),u),y=Math.pow(d.distanceToSquared(h),u);v<1e-4&&(v=1),f<1e-4&&(f=v),y<1e-4&&(y=v),ls.initNonuniformCatmullRom(l.x,c.x,d.x,h.x,f,v,y),hs.initNonuniformCatmullRom(l.y,c.y,d.y,h.y,f,v,y),cs.initNonuniformCatmullRom(l.z,c.z,d.z,h.z,f,v,y)}else this.curveType==="catmullrom"&&(ls.initCatmullRom(l.x,c.x,d.x,h.x,this.tension),hs.initCatmullRom(l.y,c.y,d.y,h.y,this.tension),cs.initCatmullRom(l.z,c.z,d.z,h.z,this.tension));return i.set(ls.calc(o),hs.calc(o),cs.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Qh=class extends fi{constructor(e=new oe,t=new oe,i=new oe,r=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new oe){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(fa(e,r.x,a.x,n.x,s.x),fa(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Kd=class extends fi{constructor(e=new R,t=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new R){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(fa(e,r.x,a.x,n.x,s.x),fa(e,r.y,a.y,n.y,s.y),fa(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ec=class extends fi{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qd=class extends fi{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends fi{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(pa(e,r.x,a.x,n.x),pa(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ic=class extends fi{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(pa(e,r.x,a.x,n.x),pa(e,r.y,a.y,n.y),pa(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rc=class extends fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],c=r[n>r.length-3?r.length-1:n+2];return i.set(Ul(s,o.x,l.x,h.x,c.x),Ul(s,o.y,l.y,h.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new oe().fromArray(r))}return this}},Tn=Object.freeze({__proto__:null,ArcCurve:Hd,CatmullRomCurve3:Wd,CubicBezierCurve:Qh,CubicBezierCurve3:Kd,EllipseCurve:wo,LineCurve:ec,LineCurve3:Qd,QuadraticBezierCurve:tc,QuadraticBezierCurve3:ic,SplineCurve:rc}),ep=class extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tn[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Tn[r.type]().fromJSON(r))}return this}},Ol=class extends ep{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ec(this.currentPoint.clone(),new oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new tc(this.currentPoint.clone(),new oe(e,t),new oe(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new Qh(this.currentPoint.clone(),new oe(e,t),new oe(i,r),new oe(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new rc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new wo(e,t,i,r,a,n,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ac=class extends Ol{constructor(e){super(e),this.uuid=cr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Ol().fromJSON(r))}return this}};vp=class{static triangulate(e,t,i=2){return tp(e,t,i)}},ar=class hc{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return hc.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];Bl(t),zl(r,t);let s=t.length;i.forEach(Bl);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,zl(r,i[l]);let o=vp.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};yp=class cc extends vt{constructor(t=new ac([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new ke(a,3)),this.setAttribute("uv",new ke(n,2)),this.computeVertexNormals();function s(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,u=i.bevelEnabled!==void 0?i.bevelEnabled:!0,f=i.bevelThickness!==void 0?i.bevelThickness:.2,v=i.bevelSize!==void 0?i.bevelSize:f-.1,y=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,p=i.extrudePath,S=i.UVGenerator!==void 0?i.UVGenerator:xp,E,_=!1,T,A,C,g;if(p){E=p.getSpacedPoints(c),_=!0,u=!1;let Q=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(c,Q),A=new R,C=new R,g=new R}u||(m=0,f=0,v=0,y=0);let b=o.extractPoints(h),D=b.shape,P=b.holes;if(!ar.isClockWise(D)){D=D.reverse();for(let Q=0,K=P.length;Q<K;Q++){let ae=P[Q];ar.isClockWise(ae)&&(P[Q]=ae.reverse())}}function N(Q){let K=10000000000000001e-36,ae=Q[0];for(let ve=1;ve<=Q.length;ve++){let xe=ve%Q.length,we=Q[xe],Le=we.x-ae.x,Ve=we.y-ae.y,Oe=Le*Le+Ve*Ve,I=Math.max(Math.abs(we.x),Math.abs(we.y),Math.abs(ae.x),Math.abs(ae.y)),lt=K*I*I;if(Oe<=lt){Q.splice(xe,1),ve--;continue}ae=we}}N(D),P.forEach(N);let W=P.length,L=D;for(let Q=0;Q<W;Q++){let K=P[Q];D=D.concat(K)}function z(Q,K,ae){return K||Ge("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(K,ae)}let Z=D.length;function k(Q,K,ae){let ve,xe,we,Le=Q.x-K.x,Ve=Q.y-K.y,Oe=ae.x-Q.x,I=ae.y-Q.y,lt=Le*Le+Ve*Ve,Ke=Le*I-Ve*Oe;if(Math.abs(Ke)>Number.EPSILON){let $e=Math.sqrt(lt),w=Math.sqrt(Oe*Oe+I*I),x=K.x-Ve/$e,U=K.y+Le/$e,H=ae.x-I/w,J=ae.y+Oe/w,pe=((H-x)*I-(J-U)*Oe)/(Le*I-Ve*Oe);ve=x+Le*pe-Q.x,xe=U+Ve*pe-Q.y;let me=ve*ve+xe*xe;if(me<=2)return new oe(ve,xe);we=Math.sqrt(me/2)}else{let $e=!1;Le>Number.EPSILON?Oe>Number.EPSILON&&($e=!0):Le<-Number.EPSILON?Oe<-Number.EPSILON&&($e=!0):Math.sign(Ve)===Math.sign(I)&&($e=!0),$e?(ve=-Ve,xe=Le,we=Math.sqrt(lt)):(ve=Le,xe=Ve,we=Math.sqrt(lt/2))}return new oe(ve/we,xe/we)}let le=[];for(let Q=0,K=L.length,ae=K-1,ve=Q+1;Q<K;Q++,ae++,ve++)ae===K&&(ae=0),ve===K&&(ve=0),le[Q]=k(L[Q],L[ae],L[ve]);let q=[],Y,ee=le.concat();for(let Q=0,K=W;Q<K;Q++){let ae=P[Q];Y=[];for(let ve=0,xe=ae.length,we=xe-1,Le=ve+1;ve<xe;ve++,we++,Le++)we===xe&&(we=0),Le===xe&&(Le=0),Y[ve]=k(ae[ve],ae[we],ae[Le]);q.push(Y),ee=ee.concat(Y)}let he;if(m===0)he=ar.triangulateShape(L,P);else{let Q=[],K=[];for(let ae=0;ae<m;ae++){let ve=ae/m,xe=f*Math.cos(ve*Math.PI/2),we=v*Math.sin(ve*Math.PI/2)+y;for(let Le=0,Ve=L.length;Le<Ve;Le++){let Oe=z(L[Le],le[Le],we);re(Oe.x,Oe.y,-xe),ve===0&&Q.push(Oe)}for(let Le=0,Ve=W;Le<Ve;Le++){let Oe=P[Le];Y=q[Le];let I=[];for(let lt=0,Ke=Oe.length;lt<Ke;lt++){let $e=z(Oe[lt],Y[lt],we);re($e.x,$e.y,-xe),ve===0&&I.push($e)}ve===0&&K.push(I)}}he=ar.triangulateShape(Q,K)}let fe=he.length,Xe=v+y;for(let Q=0;Q<Z;Q++){let K=u?z(D[Q],ee[Q],Xe):D[Q];_?(C.copy(T.normals[0]).multiplyScalar(K.x),A.copy(T.binormals[0]).multiplyScalar(K.y),g.copy(E[0]).add(C).add(A),re(g.x,g.y,g.z)):re(K.x,K.y,0)}for(let Q=1;Q<=c;Q++)for(let K=0;K<Z;K++){let ae=u?z(D[K],ee[K],Xe):D[K];_?(C.copy(T.normals[Q]).multiplyScalar(ae.x),A.copy(T.binormals[Q]).multiplyScalar(ae.y),g.copy(E[Q]).add(C).add(A),re(g.x,g.y,g.z)):re(ae.x,ae.y,d/c*Q)}for(let Q=m-1;Q>=0;Q--){let K=Q/m,ae=f*Math.cos(K*Math.PI/2),ve=v*Math.sin(K*Math.PI/2)+y;for(let xe=0,we=L.length;xe<we;xe++){let Le=z(L[xe],le[xe],ve);re(Le.x,Le.y,d+ae)}for(let xe=0,we=P.length;xe<we;xe++){let Le=P[xe];Y=q[xe];for(let Ve=0,Oe=Le.length;Ve<Oe;Ve++){let I=z(Le[Ve],Y[Ve],ve);_?re(I.x,I.y+E[c-1].y,E[c-1].x+ae):re(I.x,I.y,d+ae)}}}Ce(),j();function Ce(){let Q=a.length/3;if(u){let K=0,ae=Z*K;for(let ve=0;ve<fe;ve++){let xe=he[ve];be(xe[2]+ae,xe[1]+ae,xe[0]+ae)}K=c+m*2,ae=Z*K;for(let ve=0;ve<fe;ve++){let xe=he[ve];be(xe[0]+ae,xe[1]+ae,xe[2]+ae)}}else{for(let K=0;K<fe;K++){let ae=he[K];be(ae[2],ae[1],ae[0])}for(let K=0;K<fe;K++){let ae=he[K];be(ae[0]+Z*c,ae[1]+Z*c,ae[2]+Z*c)}}r.addGroup(Q,a.length/3-Q,0)}function j(){let Q=a.length/3,K=0;te(L,K),K+=L.length;for(let ae=0,ve=P.length;ae<ve;ae++){let xe=P[ae];te(xe,K),K+=xe.length}r.addGroup(Q,a.length/3-Q,1)}function te(Q,K){let ae=Q.length;for(;--ae>=0;){let ve=ae,xe=ae-1;xe<0&&(xe=Q.length-1);for(let we=0,Le=c+m*2;we<Le;we++){let Ve=Z*we,Oe=Z*(we+1),I=K+ve+Ve,lt=K+xe+Ve,Ke=K+xe+Oe,$e=K+ve+Oe;Ee(I,lt,Ke,$e)}}}function re(Q,K,ae){l.push(Q),l.push(K),l.push(ae)}function be(Q,K,ae){ce(Q),ce(K),ce(ae);let ve=a.length/3,xe=S.generateTopUV(r,a,ve-3,ve-2,ve-1);We(xe[0]),We(xe[1]),We(xe[2])}function Ee(Q,K,ae,ve){ce(Q),ce(K),ce(ve),ce(K),ce(ae),ce(ve);let xe=a.length/3,we=S.generateSideWallUV(r,a,xe-6,xe-3,xe-2,xe-1);We(we[0]),We(we[1]),We(we[3]),We(we[1]),We(we[2]),We(we[3])}function ce(Q){a.push(l[Q*3+0]),a.push(l[Q*3+1]),a.push(l[Q*3+2])}function We(Q){n.push(Q.x),n.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return Mp(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new Tn[a.type]().fromJSON(a)),new cc(r,t.options)}},xp={generateTopUV:function(e,t,i,r,a){let n=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],c=t[a*3+1];return[new oe(n,s),new oe(o,l),new oe(h,c)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],c=t[r*3+1],d=t[r*3+2],u=t[a*3],f=t[a*3+1],v=t[a*3+2],y=t[n*3],m=t[n*3+1],p=t[n*3+2];return Math.abs(o-c)<Math.abs(s-h)?[new oe(s,1-l),new oe(h,1-d),new oe(u,1-v),new oe(y,1-p)]:[new oe(o,1-l),new oe(c,1-d),new oe(f,1-v),new oe(m,1-p)]}};bp=class uc extends Aa{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,n,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new uc(t.radius,t.detail)}},Sp=class dc extends vt{constructor(t=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=Ze(a,0,Math.PI*2);let n=[],s=[],o=[],l=[],h=[],c=1/i,d=new R,u=new oe,f=new R,v=new R,y=new R,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(v)}for(let S=0;S<=i;S++){let E=r+S*c*a,_=Math.sin(E),T=Math.cos(E);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*_,d.y=t[A].y,d.z=t[A].x*T,s.push(d.x,d.y,d.z),u.x=S/i,u.y=A/(t.length-1),o.push(u.x,u.y);let C=l[3*A+0]*_,g=l[3*A+1],b=l[3*A+0]*T;h.push(C,g,b)}}for(let S=0;S<i;S++)for(let E=0;E<t.length-1;E++){let _=E+S*t.length,T=_,A=_+t.length,C=_+t.length+1,g=_+1;n.push(T,A,g),n.push(C,g,A)}this.setIndex(n),this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(o,2)),this.setAttribute("normal",new ke(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dc(t.points,t.segments,t.phiStart,t.phiLength)}},Tp=class pc extends Aa{constructor(t=1,i=0){let r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new pc(t.radius,t.detail)}},Ca=class fc extends vt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,c=l+1,d=t/o,u=i/l,f=[],v=[],y=[],m=[];for(let p=0;p<c;p++){let S=p*u-s;for(let E=0;E<h;E++){let _=E*d-n;v.push(_,-S,0),y.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let E=S+h*p,_=S+h*(p+1),T=S+1+h*(p+1),A=S+1+h*p;f.push(E,_,A),f.push(_,T,A)}this.setIndex(f),this.setAttribute("position",new ke(v,3)),this.setAttribute("normal",new ke(y,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fc(t.width,t.height,t.widthSegments,t.heightSegments)}},Ep=class mc extends vt{constructor(t=.5,i=1,r=32,a=1,n=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:n,thetaLength:s},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],h=[],c=[],d=t,u=(i-t)/a,f=new R,v=new oe;for(let y=0;y<=a;y++){for(let m=0;m<=r;m++){let p=n+m/r*s;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),h.push(0,0,1),v.x=(f.x/i+1)/2,v.y=(f.y/i+1)/2,c.push(v.x,v.y)}d+=u}for(let y=0;y<a;y++){let m=y*(r+1);for(let p=0;p<r;p++){let S=p+m,E=S,_=S+r+1,T=S+r+2,A=S+1;o.push(E,_,A),o.push(_,T,A)}}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},wp=class gc extends vt{constructor(t=new ac([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(n,3)),this.setAttribute("uv",new ke(s,2));function h(c){let d=a.length/3,u=c.extractPoints(i),f=u.shape,v=u.holes;ar.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=v.length;m<p;m++){let S=v[m];ar.isClockWise(S)===!0&&(v[m]=S.reverse())}let y=ar.triangulateShape(f,v);for(let m=0,p=v.length;m<p;m++){let S=v[m];f=f.concat(S)}for(let m=0,p=f.length;m<p;m++){let S=f[m];a.push(S.x,S.y,0),n.push(0,0,1),s.push(S.x,S.y)}for(let m=0,p=y.length;m<p;m++){let S=y[m],E=S[0]+d,_=S[1]+d,T=S[2]+d;r.push(E,_,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return Ap(i,t)}static fromJSON(t,i){let r=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=i[t.shapes[a]];r.push(s)}return new gc(r,t.curveSegments)}};Cp=class _c extends vt{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),h=0,c=[],d=new R,u=new R,f=[],v=[],y=[],m=[];for(let p=0;p<=r;p++){let S=[],E=p/r,_=s+E*o,T=t*Math.cos(_),A=Math.sqrt(t*t-T*T),C=0;p===0&&s===0?C=.5/i:p===r&&l===Math.PI&&(C=-.5/i);for(let g=0;g<=i;g++){let b=g/i,D=a+b*n;d.x=-A*Math.cos(D),d.y=T,d.z=A*Math.sin(D),v.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(b+C,1-E),S.push(h++)}c.push(S)}for(let p=0;p<r;p++)for(let S=0;S<i;S++){let E=c[p][S+1],_=c[p][S],T=c[p+1][S],A=c[p+1][S+1];(p!==0||s>0)&&f.push(E,_,A),(p!==r-1||l<Math.PI)&&f.push(_,T,A)}this.setIndex(f),this.setAttribute("position",new ke(v,3)),this.setAttribute("normal",new ke(y,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _c(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Rp=class vc extends Aa{constructor(t=1,i=0){let r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,a,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new vc(t.radius,t.detail)}},Pp=class yc extends vt{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],d=[],u=new R,f=new R,v=new R;for(let y=0;y<=r;y++){let m=s+y/r*o;for(let p=0;p<=a;p++){let S=p/a*n;f.x=(t+i*Math.cos(m))*Math.cos(S),f.y=(t+i*Math.cos(m))*Math.sin(S),f.z=i*Math.sin(m),h.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),v.subVectors(f,u).normalize(),c.push(v.x,v.y,v.z),d.push(p/a),d.push(y/r)}}for(let y=1;y<=r;y++)for(let m=1;m<=a;m++){let p=(a+1)*y+m-1,S=(a+1)*(y-1)+m-1,E=(a+1)*(y-1)+m,_=(a+1)*y+m;l.push(p,S,_),l.push(S,E,_)}this.setIndex(l),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Ip=class xc extends vt{constructor(t=1,i=.4,r=64,a=8,n=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:r,radialSegments:a,p:n,q:s},r=Math.floor(r),a=Math.floor(a);let o=[],l=[],h=[],c=[],d=new R,u=new R,f=new R,v=new R,y=new R,m=new R,p=new R;for(let E=0;E<=r;++E){let _=E/r*n*Math.PI*2;S(_,n,s,t,f),S(_+.01,n,s,t,v),m.subVectors(v,f),p.addVectors(v,f),y.crossVectors(m,p),p.crossVectors(y,m),y.normalize(),p.normalize();for(let T=0;T<=a;++T){let A=T/a*Math.PI*2,C=-i*Math.cos(A),g=i*Math.sin(A);d.x=f.x+(C*p.x+g*y.x),d.y=f.y+(C*p.y+g*y.y),d.z=f.z+(C*p.z+g*y.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),h.push(u.x,u.y,u.z),c.push(E/r),c.push(T/a)}}for(let E=1;E<=r;E++)for(let _=1;_<=a;_++){let T=(a+1)*(E-1)+(_-1),A=(a+1)*E+(_-1),C=(a+1)*E+_,g=(a+1)*(E-1)+_;o.push(T,A,g),o.push(A,C,g)}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(c,2));function S(E,_,T,A,C){let g=Math.cos(E),b=Math.sin(E),D=T/_*E,P=Math.cos(D);C.x=A*(2+P)*.5*g,C.y=A*(2+P)*b*.5,C.z=A*Math.sin(D)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xc(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Lp=class Mc extends vt{constructor(t=new ic(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new R,l=new R,h=new oe,c=new R,d=[],u=[],f=[],v=[];y(),this.setIndex(v),this.setAttribute("position",new ke(d,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(f,2));function y(){for(let E=0;E<i;E++)m(E);m(n===!1?i:0),S(),p()}function m(E){c=t.getPointAt(E/i,c);let _=s.normals[E],T=s.binormals[E];for(let A=0;A<=a;A++){let C=A/a*Math.PI*2,g=Math.sin(C),b=-Math.cos(C);l.x=b*_.x+g*T.x,l.y=b*_.y+g*T.y,l.z=b*_.z+g*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=c.x+r*l.x,o.y=c.y+r*l.y,o.z=c.z+r*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=i;E++)for(let _=1;_<=a;_++){let T=(a+1)*(E-1)+(_-1),A=(a+1)*E+(_-1),C=(a+1)*E+_,g=(a+1)*(E-1)+_;v.push(T,A,g),v.push(A,C,g)}}function S(){for(let E=0;E<=i;E++)for(let _=0;_<=a;_++)h.x=E/i,h.y=_/a,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Mc(new Tn[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Dp=class extends vt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new R,a=new R;if(e.index!==null){let n=e.attributes.position,s=e.index,o=e.groups;o.length===0&&(o=[{start:0,count:s.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let c=o[l],d=c.start,u=c.count;for(let f=d,v=d+u;f<v;f+=3)for(let y=0;y<3;y++){let m=s.getX(f+y),p=s.getX(f+(y+1)%3);r.fromBufferAttribute(n,m),a.fromBufferAttribute(n,p),Gl(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let n=e.attributes.position;for(let s=0,o=n.count/3;s<o;s++)for(let l=0;l<3;l++){let h=3*s+l,c=3*s+(l+1)%3;r.fromBufferAttribute(n,h),a.fromBufferAttribute(n,c),Gl(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new ke(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};Cy=Object.freeze({__proto__:null,BoxGeometry:wa,CapsuleGeometry:Bd,CircleGeometry:zd,ConeGeometry:Gd,CylinderGeometry:Yh,DodecahedronGeometry:Vd,EdgesGeometry:kd,ExtrudeGeometry:yp,IcosahedronGeometry:bp,LatheGeometry:Sp,OctahedronGeometry:Tp,PlaneGeometry:Ca,PolyhedronGeometry:Aa,RingGeometry:Ep,ShapeGeometry:wp,SphereGeometry:Cp,TetrahedronGeometry:Rp,TorusGeometry:Pp,TorusKnotGeometry:Ip,TubeGeometry:Lp,WireframeGeometry:Dp});Up={clone:Jr,merge:Ut},Op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qt=class extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Op,this.fragmentShader=Fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=Np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(r.value);break;case"v2":this.uniforms[i].value=new oe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new R().fromArray(r.value);break;case"v4":this.uniforms[i].value=new dt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new je().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ye().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Bp=class extends qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},zp=class extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gp=class extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Ra=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vp=class extends Ra{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cl,endingEnd:cl}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case ul:a=e,s=2*t-i;break;case dl:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case ul:n=e,o=2*i-t;break;case dl:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,u=this._weightNext,f=(i-t)/(r-t),v=f*f,y=v*f,m=-d*y+2*d*v-d*f,p=(1+d)*y+(-1.5-2*d)*v+(-.5+d)*f+1,S=(-1-u)*y+(1.5+u)*v+.5*f,E=u*y-u*v;for(let _=0;_!==s;++_)a[_]=m*n[h+_]+p*n[l+_]+S*n[o+_]+E*n[c+_];return a}},kp=class extends Ra{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),c=1-h;for(let d=0;d!==s;++d)a[d]=n[l+d]*c+n[o+d]*h;return a}},Hp=class extends Ra{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Wp=class extends Ra{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this.inTangents,c=this.outTangents;if(!h||!c){let f=(i-t)/(r-t),v=1-f;for(let y=0;y!==s;++y)a[y]=n[l+y]*v+n[o+y]*f;return a}let d=s*2,u=e-1;for(let f=0;f!==s;++f){let v=n[l+f],y=n[o+f],m=u*d+f*2,p=c[m],S=c[m+1],E=e*d+f*2,_=h[E],T=h[E+1],A=jp(i,t,p,_,r);a[f]=Sc(A,v,S,T,y)}return a}};mi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cr(t,this.TimeBufferType),this.values=Cr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Cr(e.times,Array),values:Cr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),us(e.settings)&&(i.settings={inTangents:Cr(e.settings.inTangents,Array),outTangents:Cr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Hp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wp(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case xn:t=this.InterpolantFactoryMethodDiscrete;break;case ao:t=this.InterpolantFactoryMethodLinear;break;case zn:t=this.InterpolantFactoryMethodSmooth;break;case hl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Be("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xn;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return zn;case this.InterpolantFactoryMethodBezier:return hl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;us(this.settings)&&(kl(this.settings.inTangents,e),kl(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){Ge("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){Ge("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&ju(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){Ge("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===zn,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(r)o=!0;else{let c=s*i,d=c-i,u=c+i;for(let f=0;f!==i;++f){let v=t[c+f];if(v!==t[d+f]||v!==t[u+f]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*i,d=n*i;for(let u=0;u!==i;++u)t[d+u]=t[c+u]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,us(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};mi.prototype.ValueTypeName="";mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=ao;Pa=class extends mi{constructor(e,t,i){super(e,t,i)}};Pa.prototype.ValueTypeName="bool";Pa.prototype.ValueBufferType=Array;Pa.prototype.DefaultInterpolation=xn;Pa.prototype.InterpolantFactoryMethodLinear=void 0;Pa.prototype.InterpolantFactoryMethodSmooth=void 0;qp=class extends mi{constructor(e,t,i,r){super(e,t,i,r)}};qp.prototype.ValueTypeName="color";Yp=class extends mi{constructor(e,t,i,r){super(e,t,i,r)}};Yp.prototype.ValueTypeName="number";Zp=class extends Ra{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let h=l+s;l!==h;l+=4)ii.slerpFlat(a,0,n,l-s,n,l,o);return a}},Tc=class extends mi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Zp(this.times,this.values,this.getValueSize(),e)}};Tc.prototype.ValueTypeName="quaternion";Tc.prototype.InterpolantFactoryMethodSmooth=void 0;Ia=class extends mi{constructor(e,t,i){super(e,t,i)}};Ia.prototype.ValueTypeName="string";Ia.prototype.ValueBufferType=Array;Ia.prototype.DefaultInterpolation=xn;Ia.prototype.InterpolantFactoryMethodLinear=void 0;Ia.prototype.InterpolantFactoryMethodSmooth=void 0;$p=class extends mi{constructor(e,t,i,r){super(e,t,i,r)}};$p.prototype.ValueTypeName="vector";ds={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Hl(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Hl(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};Jp=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){s++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=l.length;c<d;c+=2){let u=l[c],f=l[c+1];if(u.global&&(u.lastIndex=0),u.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kp=new Jp,Co=class{constructor(e){this.manager=e!==void 0?e:Kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Co.DEFAULT_MATERIAL_NAME="__DEFAULT";Rr=new WeakMap,Qp=class extends Co{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=ds.get(`image:${e}`);if(n!==void 0){if(n.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0);else{let c=Rr.get(n);c===void 0&&(c=[],Rr.set(n,c)),c.push({onLoad:t,onError:r})}return n}let s=va("img");function o(){h(),t&&t(this);let c=Rr.get(this)||[];for(let d=0;d<c.length;d++){let u=c[d];u.onLoad&&u.onLoad(this)}Rr.delete(this),a.manager.itemEnd(e)}function l(c){h(),r&&r(c),ds.remove(`image:${e}`);let d=Rr.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onError&&f.onError(c)}Rr.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){s.removeEventListener("load",o,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),ds.add(`image:${e}`,s),a.manager.itemStart(e),s.src=e,s}},Ro=class extends Co{constructor(e){super(e)}load(e,t,i,r){let a=new Yt,n=new Qp(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}},Ry=new Ye,Py=new R,Iy=new R,sn=new R,on=new ii,si=new R,Po=class extends Ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sn,on,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sn,on,si.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(sn,on,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sn,on,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new R,Wl=new oe,Xl=new oe,Bt=class extends Po{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,Wl,Xl),t.subVectors(Xl,Wl)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ec=class extends Po{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ly=new Ye,Dy=new Ye,Ny=new Ye,Pr=-90,Ir=1,ef=class extends Ci{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Bt(Pr,Ir,e,t);r.layers=this.layers,this.add(r);let a=new Bt(Pr,Ir,e,t);a.layers=this.layers,this.add(a);let n=new Bt(Pr,Ir,e,t);n.layers=this.layers,this.add(n);let s=new Bt(Pr,Ir,e,t);s.layers=this.layers,this.add(s);let o=new Bt(Pr,Ir,e,t);o.layers=this.layers,this.add(o);let l=new Bt(Pr,Ir,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Sn)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(c,d,u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},tf=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Io=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=rf.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};Uy=new R,Oy=new ii,Fy=new R,By=new R,zy=new R,Gy=new R,Vy=new ii,ky=new R,Hy=new R,Lo="\\[\\]\\.:\\/",af=new RegExp("["+Lo+"]","g"),Do="[^"+Lo+"]",nf="[^"+Lo.replace("\\.","")+"]",sf=/((?:WC+[\/:])*)/.source.replace("WC",Do),of=/(WCOD+)?/.source.replace("WCOD",nf),lf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Do),hf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Do),cf=new RegExp("^"+sf+of+lf+hf+"$"),uf=["material","materials","bones","map"],df=class{constructor(e,t,i){let r=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},_t=class Fr{constructor(t,i,r){this.path=i,this.parsedPath=r||Fr.parseTrackName(i),this.node=Fr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new Fr.Composite(t,i,r):new Fr(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(af,"")}static parseTrackName(t){let i=cf.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);uf.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=Fr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=i.nodeName;Ge("PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=df;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Wy=new Float32Array(1),jl=new Ye,No=class{constructor(e,t,i=0,r=1/0){this.ray=new Ea(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new So,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jl),this}intersectObject(e,t=!0,i=[]){return oo(e,this,i,t),i.sort(ql),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)oo(e[r],this,i,t);return i.sort(ql),i}};Xy=(jr=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},jr.prototype.isMatrix2=!0,jr),jy=new oe,qy=new R,Yy=new R,Zy=new R,$y=new R,Jy=new R,Ky=new R,Qy=new R,ex=new R,tx=new R,ix=new Ye,rx=new Ye,ax=new R,nx=new tt,sx=new tt,ox=new R,lx=new R,hx=new R,cx=new R,ux=new Po,dx=new Gi,px=new R;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gf=`#ifdef USE_ALPHAHASH
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
#endif`,_f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mf=`#ifdef USE_AOMAP
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
#endif`,bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cf=`#ifdef USE_IRIDESCENCE
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
#endif`,Rf=`#ifdef USE_BUMPMAP
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Bf=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,zf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gf=`vec3 transformedNormal = objectNormal;
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
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,im=`#ifdef USE_GRADIENTMAP
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
}`,rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,om=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,pm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fm=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_m=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Em=`#if defined( USE_POINTS_UV )
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
#endif`,wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
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
#endif`,Lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bm=`#ifdef USE_NORMALMAP
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
#endif`,zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$m=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,eg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hg=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gg=`uniform sampler2D t2D;
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`uniform samplerCube tCube;
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
}`,bg=`#if DEPTH_PACKING == 3200
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
}`,Sg=`#define DISTANCE
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
}`,Tg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`uniform float scale;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Ig=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Dg=`#define MATCAP
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
}`,Ng=`#define MATCAP
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
}`,Ug=`#define NORMAL
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
}`,Og=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fg=`#define PHONG
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
}`,Bg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,zg=`#define STANDARD
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
}`,Gg=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Vg=`#define TOON
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
}`,kg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Hg=`uniform float size;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Xg=`#include <common>
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
}`,jg=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,qg=`uniform float rotation;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:_f,alphamap_pars_fragment:vf,alphatest_fragment:yf,alphatest_pars_fragment:xf,aomap_fragment:Mf,aomap_pars_fragment:bf,batching_pars_vertex:Sf,batching_vertex:Tf,begin_vertex:Ef,beginnormal_vertex:wf,bsdfs:Af,iridescence_fragment:Cf,bumpmap_pars_fragment:Rf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:If,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:Df,color_fragment:Nf,color_pars_fragment:Uf,color_pars_vertex:Of,color_vertex:Ff,common:Bf,cube_uv_reflection_fragment:zf,defaultnormal_vertex:Gf,displacementmap_pars_vertex:Vf,displacementmap_vertex:kf,emissivemap_fragment:Hf,emissivemap_pars_fragment:Wf,colorspace_fragment:Xf,colorspace_pars_fragment:jf,envmap_fragment:qf,envmap_common_pars_fragment:Yf,envmap_pars_fragment:Zf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:om,envmap_vertex:Jf,fog_vertex:Kf,fog_pars_vertex:Qf,fog_fragment:em,fog_pars_fragment:tm,gradientmap_pars_fragment:im,lightmap_pars_fragment:rm,lights_lambert_fragment:am,lights_lambert_pars_fragment:nm,lights_pars_begin:sm,lights_toon_fragment:lm,lights_toon_pars_fragment:hm,lights_phong_fragment:cm,lights_phong_pars_fragment:um,lights_physical_fragment:dm,lights_physical_pars_fragment:pm,lights_fragment_begin:fm,lights_fragment_maps:mm,lights_fragment_end:gm,lightprobes_pars_fragment:_m,logdepthbuf_fragment:vm,logdepthbuf_pars_fragment:ym,logdepthbuf_pars_vertex:xm,logdepthbuf_vertex:Mm,map_fragment:bm,map_pars_fragment:Sm,map_particle_fragment:Tm,map_particle_pars_fragment:Em,metalnessmap_fragment:wm,metalnessmap_pars_fragment:Am,morphinstance_vertex:Cm,morphcolor_vertex:Rm,morphnormal_vertex:Pm,morphtarget_pars_vertex:Im,morphtarget_vertex:Lm,normal_fragment_begin:Dm,normal_fragment_maps:Nm,normal_pars_fragment:Um,normal_pars_vertex:Om,normal_vertex:Fm,normalmap_pars_fragment:Bm,clearcoat_normal_fragment_begin:zm,clearcoat_normal_fragment_maps:Gm,clearcoat_pars_fragment:Vm,iridescence_pars_fragment:km,opaque_fragment:Hm,packing:Wm,premultiplied_alpha_fragment:Xm,project_vertex:jm,dithering_fragment:qm,dithering_pars_fragment:Ym,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:$m,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:Km,shadowmap_vertex:Qm,shadowmask_pars_fragment:eg,skinbase_vertex:tg,skinning_pars_vertex:ig,skinning_vertex:rg,skinnormal_vertex:ag,specularmap_fragment:ng,specularmap_pars_fragment:sg,tonemapping_fragment:og,tonemapping_pars_fragment:lg,transmission_fragment:hg,transmission_pars_fragment:cg,uv_pars_fragment:ug,uv_pars_vertex:dg,uv_vertex:pg,worldpos_vertex:fg,background_vert:mg,background_frag:gg,backgroundCube_vert:_g,backgroundCube_frag:vg,cube_vert:yg,cube_frag:xg,depth_vert:Mg,depth_frag:bg,distance_vert:Sg,distance_frag:Tg,equirect_vert:Eg,equirect_frag:wg,linedashed_vert:Ag,linedashed_frag:Cg,meshbasic_vert:Rg,meshbasic_frag:Pg,meshlambert_vert:Ig,meshlambert_frag:Lg,meshmatcap_vert:Dg,meshmatcap_frag:Ng,meshnormal_vert:Ug,meshnormal_frag:Og,meshphong_vert:Fg,meshphong_frag:Bg,meshphysical_vert:zg,meshphysical_frag:Gg,meshtoon_vert:Vg,meshtoon_frag:kg,points_vert:Hg,points_frag:Wg,shadow_vert:Xg,shadow_frag:jg,sprite_vert:qg,sprite_frag:Yg},ge={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},li={basic:{uniforms:Ut([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ut([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ut([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ut([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ut([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new tt(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ut([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ut([ge.points,ge.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ut([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ut([ge.common,ge.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ut([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ut([ge.sprite,ge.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Ut([ge.common,ge.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Ut([ge.lights,ge.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};li.physical={uniforms:Ut([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};ln={r:0,b:0,g:0},Zg=new Ye,Ac=new je;Ac.set(-1,0,0,0,1,0,0,0,1);Br=4,t0=6,i0=20,r0=256,sa=new Ec,Zl=new tt,ps=null,fs=0,ms=0,gs=!1,a0=new R,er=new R,lo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=a0}=a;ps=this._renderer.getRenderTarget(),fs=this._renderer.getActiveCubeFace(),ms=this._renderer.getActiveMipmapLevel(),gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ps,fs,ms),this._renderer.xr.enabled=gs,e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ps=this._renderer.getRenderTarget(),fs=this._renderer.getActiveCubeFace(),ms=this._renderer.getActiveMipmapLevel(),gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:pi,format:Qt,colorSpace:Mn,depthBuffer:!1},r=$l(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$l(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=n0(a)),this._blurMaterial=o0(a,e,t),this._ggxMaterial=s0(a,e,t)}return r}_compileMaterial(e){let t=new Gt(new vt,e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,i,r,a){let n=new Bt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(Zl),l.toneMapping=ci,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gt(new wa,new Vh({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,u=d.material,f=!1,v=e.background;v?v.isColor&&(u.color.copy(v),e.background=null,f=!0):(u.color.copy(Zl),f=!0);for(let y=0;y<6;y++){let m=y%3;m===0?(n.up.set(0,s[y],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[y],a.y,a.z)):m===1?(n.up.set(0,0,s[y]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[y],a.z)):(n.up.set(0,s[y],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[y]));let p=this._cubeSize;Lr(r,m*p,y>2?p:0,p,p),l.setRenderTarget(r),f&&l.render(d,n),l.render(e,n)}l.toneMapping=c,l.autoClear=h,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===sr||e.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Lr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,sa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),c=Math.sqrt(l*l-h*h),d=l*1.25,u=c*d,{_lodMax:f}=this,v=this._sizeLods[i],y=3*v*(i>f-Br?i-f+Br:0),m=4*(this._cubeSize-v);o.envMap.value=e.texture,o.roughness.value=u,o.mipInt.value=f-t,Lr(a,y,m,3*v,2*v),r.setRenderTarget(a),r.render(s,sa),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=f-i,Lr(e,y,m,3*v,2*v),r.setRenderTarget(e),r.render(s,sa)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let l=s.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[r],c=3*h*(r>this._lodMax-Br?r-this._lodMax+Br:0),d=4*(this._cubeSize-h);Lr(t,c,d,3*h,2*h),n.setRenderTarget(t),n.render(o,sa)}};Cc=class extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wa(5,5,5),a=new qt({name:"CubemapFromEquirect",uniforms:Jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Ti});a.uniforms.tEquirect.value=t;let n=new Gt(r,a),s=t.minFilter;return t.minFilter===tr&&(t.minFilter=Lt),new ef(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};m0={[yh]:"LINEAR_TONE_MAPPING",[xh]:"REINHARD_TONE_MAPPING",[Mh]:"CINEON_TONE_MAPPING",[bh]:"ACES_FILMIC_TONE_MAPPING",[Th]:"AGX_TONE_MAPPING",[uo]:"NEUTRAL_TONE_MAPPING",[Sh]:"CUSTOM_TONE_MAPPING"};Rc=new Yt,ho=new Ma(1,1),Pc=new Nh,Ic=new _d,Lc=new Hh,Ql=[],eh=[],th=new Float32Array(16),ih=new Float32Array(9),rh=new Float32Array(4);r_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=O0(t.type)}},a_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i_(t.type)}},n_=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},_s=/(\w+)(\])?(\[|\.)?/g;_n=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);s_(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};o_=37297,l_=0;sh=new je;d_={[yh]:"Linear",[xh]:"Reinhard",[Mh]:"Cineon",[bh]:"ACESFilmic",[Th]:"AgX",[uo]:"Neutral",[Sh]:"Custom"};hn=new R;v_=/^[ \t]*#include +<([\w\d./]+)>/gm;y_=new Map;M_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;S_={[cn]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"};E_={[sr]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE",[En]:"ENVMAP_TYPE_CUBE_UV"};A_={[qr]:"ENVMAP_MODE_REFRACTION"};R_={[vh]:"ENVMAP_BLENDING_MULTIPLY",[Lu]:"ENVMAP_BLENDING_MIX",[Du]:"ENVMAP_BLENDING_ADD"};D_=0,N_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new U_(e),t.set(e,i)),i}},U_=class{constructor(e){this.id=D_++,this.code=e,this.usedTimes=0}};H_=0;q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Z_=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],$_=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],mh=new Ye,oa=new R,vs=new R;tv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iv=`
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

}`,rv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Wh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new qt({vertexShader:tv,fragmentShader:iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new Ca(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},av=class extends hr{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,c=null,d=null,u=null,f=null,v=typeof XRWebGLBinding<"u",y=new rv,m={},p=t.getContextAttributes(),S=null,E=null,_=[],T=[],A=new oe,C=null,g=null,b=new Bt;b.viewport=new dt;let D=new Bt;D.viewport=new dt;let P=[b,D],N=new tf,W=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=_[j];return te===void 0&&(te=new jn,_[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=_[j];return te===void 0&&(te=new jn,_[j]=te),te.getGripSpace()},this.getHand=function(j){let te=_[j];return te===void 0&&(te=new jn,_[j]=te),te.getHandSpace()};function z(j){let te=T.indexOf(j.inputSource);if(te===-1)return;let re=_[te];re!==void 0&&(re.update(j.inputSource,j.frame,l||n),re.dispatchEvent({type:j.type,data:j.inputSource}))}function Z(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",k);for(let j=0;j<_.length;j++){let te=T[j];te!==null&&(T[j]=null,_[j].disconnect(te))}W=null,L=null,y.reset();for(let j in m)delete m[j];if(e.setRenderTarget(S),u=null,d=null,c=null,r=null,E=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),g!==null){let j=g.camera;j.fov=g.fov,j.zoom=g.zoom,j.updateProjectionMatrix(),g=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){s=j,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return c===null&&v&&(c=new XRWebGLBinding(r,t)),c},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,re=null,be=null;p.depth&&(be=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?ir:Ai,re=p.stencil?_a:di);let Ee={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:a};c=this.getBinding(),d=c.createProjectionLayer(Ee),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new ti(d.textureWidth,d.textureHeight,{format:Qt,type:jt,depthTexture:new Ma(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),E=new ti(u.framebufferWidth,u.framebufferHeight,{format:Qt,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function k(j){for(let te=0;te<j.removed.length;te++){let re=j.removed[te],be=T.indexOf(re);be>=0&&(T[be]=null,_[be].disconnect(re))}for(let te=0;te<j.added.length;te++){let re=j.added[te],be=T.indexOf(re);if(be===-1){for(let ce=0;ce<_.length;ce++)if(ce>=T.length){T.push(re),be=ce;break}else if(T[ce]===null){T[ce]=re,be=ce;break}if(be===-1)break}let Ee=_[be];Ee&&Ee.connect(re)}}let le=new R,q=new R;function Y(j,te,re){le.setFromMatrixPosition(te.matrixWorld),q.setFromMatrixPosition(re.matrixWorld);let be=le.distanceTo(q),Ee=te.projectionMatrix.elements,ce=re.projectionMatrix.elements,We=Ee[14]/(Ee[10]-1),Q=Ee[14]/(Ee[10]+1),K=(Ee[9]+1)/Ee[5],ae=(Ee[9]-1)/Ee[5],ve=(Ee[8]-1)/Ee[0],xe=(ce[8]+1)/ce[0],we=We*ve,Le=We*xe,Ve=be/(-ve+xe),Oe=Ve*-ve;if(te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Oe),j.translateZ(Ve),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ee[10]===-1)j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let I=We+Ve,lt=Q+Ve,Ke=we-Oe,$e=Le+(be-Oe),w=K*Q/lt*I,x=ae*Q/lt*I;j.projectionMatrix.makePerspective(Ke,$e,w,x,I,lt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ee(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let te=j.near,re=j.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(re=y.depthFar)),N.near=D.near=b.near=te,N.far=D.far=b.far=re,(W!==N.near||L!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),W=N.near,L=N.far),N.layers.mask=j.layers.mask|6,b.layers.mask=N.layers.mask&-5,D.layers.mask=N.layers.mask&-3;let be=j.parent,Ee=N.cameras;ee(N,be);for(let ce=0;ce<Ee.length;ce++)ee(Ee[ce],be);Ee.length===2?Y(N,b,D):N.projectionMatrix.copy(b.projectionMatrix),g===null&&j.isPerspectiveCamera&&(g={camera:j,fov:j.fov,zoom:j.zoom}),he(j,N,be)};function he(j,te,re){re===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(re.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ya*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&u===null))return o},this.setFoveation=function(j){o=j,d!==null&&(d.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(N)},this.getCameraTexture=function(j){return m[j]};let fe=null;function Xe(j,te){if(h=te.getViewerPose(l||n),f=te,h!==null){let re=h.views;u!==null&&(e.setRenderTargetFramebuffer(E,u.framebuffer),e.setRenderTarget(E));let be=!1;re.length!==N.cameras.length&&(N.cameras.length=0,be=!0);for(let ce=0;ce<re.length;ce++){let We=re[ce],Q=null;if(u!==null)Q=u.getViewport(We);else{let ae=c.getViewSubImage(d,We);Q=ae.viewport,ce===0&&(e.setRenderTargetTextures(E,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(E))}let K=P[ce];K===void 0&&(K=new Bt,K.layers.enable(ce),K.viewport=new dt,P[ce]=K),K.matrix.fromArray(We.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(We.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Q.x,Q.y,Q.width,Q.height),ce===0&&(N.matrix.copy(K.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),be===!0&&N.cameras.push(K)}let Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){c=i.getBinding();let ce=c.getDepthInformation(re[0]);ce&&ce.isValid&&ce.texture&&y.init(ce,r.renderState)}if(Ee&&Ee.includes("camera-access")&&v){e.state.unbindTexture(),c=i.getBinding();for(let ce=0;ce<re.length;ce++){let We=re[ce].camera;if(We){let Q=m[We];Q||(Q=new Wh,m[We]=Q);let K=c.getCameraImage(We);Q.sourceTexture=K}}}}for(let re=0;re<_.length;re++){let be=T[re],Ee=_[re];be!==null&&Ee!==void 0&&Ee.update(be,te,l||n)}fe&&fe(j,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),f=null}let Ce=new wc;Ce.setAnimationLoop(Xe),this.setAnimationLoop=function(j){fe=j},this.dispose=function(){}}},nv=new Ye,Dc=new je;Dc.set(-1,0,0,0,1,0,0,0,1);lv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null;Uo=class{constructor(e={}){let{canvas:t=qu(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1,outputBufferType:u=jt}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=n;let v=u,y=new Set([vo,_o,go]),m=new Set([jt,di,ga,_a,fo,mo]),p=new Uint32Array(4),S=new Int32Array(4),E=new R,_=null,T=null,A=[],C=[],g=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,D=!1,P=null,N=null,W=null,L=null;this._outputColorSpace=It;let z=0,Z=0,k=null,le=-1,q=null,Y=new dt,ee=new dt,he=null,fe=new tt(0),Xe=0,Ce=t.width,j=t.height,te=1,re=null,be=null,Ee=new dt(0,0,Ce,j),ce=new dt(0,0,Ce,j),We=!1,Q=new xa,K=!1,ae=!1,ve=new Ye,xe=new R,we=new dt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function Oe(){return k===null?te:1}let I=i;function lt(M,O){return t.getContext(M,O)}let Ke,$e,w,x,U,H,J,pe,me,B,ue,_e,Re,se,Ne,Ue,He,it,F,$,ie,Se,Pe;try{let M={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",rt,!1),I===null){let O="webgl2";if(I=lt(O,M),I===null)throw lt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ne()}catch(M){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),Ge("WebGLRenderer: "+M.message),M}function ne(){Ke=new h0(I),Ke.init(),ie=new ev(I,Ke),$e=new Qg(I,Ke,e,ie),w=new K_(I,Ke),$e.reversedDepthBuffer&&d&&w.buffers.depth.setReversed(!0),N=I.createFramebuffer(),W=I.createFramebuffer(),L=I.createFramebuffer(),x=new d0(I),U=new B_,H=new Q_(I,Ke,w,U,$e,ie,x),J=new l0(b),pe=new ff(I),Se=new Jg(I,pe),me=new c0(I,pe,x,Se),B=new f0(I,me,pe,Se,x),it=new p0(I,$e,H),Ne=new e0(U),ue=new F_(b,J,Ke,$e,Se,Ne),_e=new sv(b,U),Re=new G_,se=new j_(Ke),He=new $g(b,J,w,B,f,o),Ue=new J_(b,B,$e),Pe=new ov(I,x,$e,w),F=new Kg(I,Ke,x),$=new u0(I,Ke,x),x.programs=ue.programs,b.capabilities=$e,b.extensions=Ke,b.properties=U,b.renderLists=Re,b.shadowMap=Ue,b.state=w,b.info=x}v!==jt&&(g=new g0(v,t.width,t.height,s,r,a));let Me=new av(b,I);this.xr=Me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let M=Ke.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ke.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize(Ce,j,!1))},this.getSize=function(M){return M.set(Ce,j)},this.setSize=function(M,O,X=!0){if(Me.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=M,j=O,t.width=Math.floor(M*te),t.height=Math.floor(O*te),X===!0&&(t.style.width=M+"px",t.style.height=O+"px"),g!==null&&g.setSize(t.width,t.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(Ce*te,j*te).floor()},this.setDrawingBufferSize=function(M,O,X){Ce=M,j=O,te=X,t.width=Math.floor(M*X),t.height=Math.floor(O*X),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(v===jt){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Y)},this.getViewport=function(M){return M.copy(Ee)},this.setViewport=function(M,O,X,V){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,O,X,V),w.viewport(Y.copy(Ee).multiplyScalar(te).round())},this.getScissor=function(M){return M.copy(ce)},this.setScissor=function(M,O,X,V){M.isVector4?ce.set(M.x,M.y,M.z,M.w):ce.set(M,O,X,V),w.scissor(ee.copy(ce).multiplyScalar(te).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(M){w.setScissorTest(We=M)},this.setOpaqueSort=function(M){re=M},this.setTransparentSort=function(M){be=M},this.getClearColor=function(M){return M.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,X=!0){let V=0;if(M){let G=!1;if(k!==null){let de=k.texture.format;G=y.has(de)}if(G){let de=k.texture.type,ye=m.has(de),Te=He.getClearColor(),Ae=He.getClearAlpha(),Fe=Te.r,Je=Te.g,et=Te.b;ye?(p[0]=Fe,p[1]=Je,p[2]=et,p[3]=Ae,I.clearBufferuiv(I.COLOR,0,p)):(S[0]=Fe,S[1]=Je,S[2]=et,S[3]=Ae,I.clearBufferiv(I.COLOR,0,S))}else V|=I.COLOR_BUFFER_BIT}O&&(V|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),P=M},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),He.dispose(),Re.dispose(),se.dispose(),U.dispose(),J.dispose(),B.dispose(),Se.dispose(),Pe.dispose(),ue.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Go),Me.removeEventListener("sessionend",Vo),Hi.stop()};function ze(M){M.preventDefault(),gl("WebGLRenderer: Context Lost."),D=!0}function St(){gl("WebGLRenderer: Context Restored."),D=!1;let M=x.autoReset,O=Ue.enabled,X=Ue.autoUpdate,V=Ue.needsUpdate,G=Ue.type;ne(),x.autoReset=M,Ue.enabled=O,Ue.autoUpdate=X,Ue.needsUpdate=V,Ue.type=G}function rt(M){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ai(M){let O=M.target;O.removeEventListener("dispose",ai),gi(O)}function gi(M){Hc(M),U.remove(M)}function Hc(M){let O=U.get(M).programs;O!==void 0&&(O.forEach(function(X){ue.releaseProgram(X)}),M.isShaderMaterial&&ue.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,X,V,G,de){O===null&&(O=Le);let ye=G.isMesh&&G.matrixWorld.determinantAffine()<0,Te=jc(M,O,X,V,G);w.setMaterial(V,ye);let Ae=X.index,Fe=1;if(V.wireframe===!0){if(Ae=me.getWireframeAttribute(X),Ae===void 0)return;Fe=2}let Je=X.drawRange,et=X.attributes.position,De=Je.start*Fe,nt=(Je.start+Je.count)*Fe;de!==null&&(De=Math.max(De,de.start*Fe),nt=Math.min(nt,(de.start+de.count)*Fe)),Ae!==null?(De=Math.max(De,0),nt=Math.min(nt,Ae.count)):et!=null&&(De=Math.max(De,0),nt=Math.min(nt,et.count));let xt=nt-De;if(xt<0||xt===1/0)return;Se.setup(G,V,Te,X,Ae);let ht,ct=F;if(Ae!==null&&(ht=pe.get(Ae),ct=$,ct.setIndex(ht)),G.isMesh)V.wireframe===!0?(w.setLineWidth(V.wireframeLinewidth*Oe()),ct.setMode(I.LINES)):ct.setMode(I.TRIANGLES);else if(G.isLine){let gt=V.linewidth;gt===void 0&&(gt=1),w.setLineWidth(gt*Oe()),G.isLineSegments?ct.setMode(I.LINES):G.isLineLoop?ct.setMode(I.LINE_LOOP):ct.setMode(I.LINE_STRIP)}else G.isPoints?ct.setMode(I.POINTS):G.isSprite&&ct.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))ct.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let gt=G._multiDrawStarts,Ie=G._multiDrawCounts,Dt=G._multiDrawCount,Wi=Ae?pe.get(Ae).bytesPerElement:1,Ht=U.get(V).currentProgram.getUniforms();for(let ni=0;ni<Dt;ni++)Ht.setValue(I,"_gl_DrawID",ni),ct.render(gt[ni]/Wi,Ie[ni])}else if(G.isInstancedMesh)ct.renderInstances(De,xt,G.count);else if(X.isInstancedBufferGeometry){let gt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ie=Math.min(X.instanceCount,gt);ct.renderInstances(De,xt,Ie)}else ct.render(De,xt)};function zo(M,O,X,V){P!==null&&M.isNodeMaterial&&P.setObject(V,M),K===!0&&Ne.setState(M,X,!1),M.transparent===!0&&M.side===bi&&M.forceSinglePass===!1?(M.side=zt,M.needsUpdate=!0,Na(M,O,V),M.side=wi,M.needsUpdate=!0,Na(M,O,V),M.side=bi):Na(M,O,V)}this.compile=function(M,O,X=null){X===null&&(X=M),P!==null&&P.renderStart(M,O,X),T=se.get(X),T.init(O),C.push(T),X.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),M!==X&&M.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),P!==null&&P.updateLights(T.state.lightsArray),ae=this.localClippingEnabled,K=Ne.init(this.clippingPlanes,ae),K===!0&&Ne.setGlobalState(this.clippingPlanes,O),P!==null&&Ue.render(T.state.shadowsArray,X,O);let V=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let de=G.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){let Te=de[ye];zo(Te,X,O,G),V.add(Te)}else zo(de,X,O,G),V.add(de)}),T=C.pop(),P!==null&&P.renderEnd(),V},this.compileAsync=function(M,O,X=null){let V=this.compile(M,O,X);return new Promise(G=>{function de(){if(V.forEach(function(ye){let Te=U.get(ye).currentProgram;(Te===void 0||Te.isReady())&&V.delete(ye)}),V.size===0){G(M);return}setTimeout(de,10)}Ke.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let In=null;function Wc(M){In&&In(M)}function Go(){Hi.stop()}function Vo(){Hi.start()}let Hi=new wc;Hi.setAnimationLoop(Wc),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(M){In=M,Me.setAnimationLoop(M),M===null?Hi.stop():Hi.start()},Me.addEventListener("sessionstart",Go),Me.addEventListener("sessionend",Vo),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;P!==null&&P.renderStart(M,O);let X=Me.enabled===!0&&Me.isPresenting===!0,V=g!==null&&(k===null||X)&&g.begin(b,k);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(g===null||g.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(O),O=Me.getCamera()),M.isScene===!0&&M.onBeforeRender(b,M,O,k),T=se.get(M,C.length),T.init(O),T.state.textureUnits=H.getTextureUnits(),C.push(T),ve.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(ve,ei,O.reversedDepth),ae=this.localClippingEnabled,K=Ne.init(this.clippingPlanes,ae),_=Re.get(M,A.length),_.init(),A.push(_),Me.enabled===!0&&Me.isPresenting===!0){let de=b.xr.getDepthSensingMesh();de!==null&&Ln(de,O,-1/0,b.sortObjects)}Ln(M,O,0,b.sortObjects),_.finish(),P!==null&&P.updateLights(T.state.lightsArray),b.sortObjects===!0&&_.sort(re,be),Ve=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,Ve&&He.addToRenderList(_,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),K===!0&&Ne.beginShadows();let G=T.state.shadowsArray;if(Ue.render(G,M,O),K===!0&&Ne.endShadows(),(V&&g.hasRenderPass())===!1){let de=_.opaque,ye=_.transmissive;if(T.setupLights(),O.isArrayCamera){let Te=O.cameras;if(ye.length>0)for(let Ae=0,Fe=Te.length;Ae<Fe;Ae++){let Je=Te[Ae];Ho(de,ye,M,Je)}Ve&&He.render(M);for(let Ae=0,Fe=Te.length;Ae<Fe;Ae++){let Je=Te[Ae];ko(_,M,Je,Je.viewport)}}else ye.length>0&&Ho(de,ye,M,O),Ve&&He.render(M),ko(_,M,O)}k!==null&&Z===0&&(H.updateMultisampleRenderTarget(k),H.updateRenderTargetMipmap(k)),V&&g.end(b),M.isScene===!0&&M.onAfterRender(b,M,O),Se.resetDefaultState(),le=-1,q=null,C.pop(),C.length>0?(T=C[C.length-1],H.setTextureUnits(T.state.textureUnits),K===!0&&Ne.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?_=A[A.length-1]:_=null,P!==null&&P.renderEnd()};function Ln(M,O,X,V){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Q)){V&&we.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ve);let de=B.update(M),ye=M.material;ye.visible&&_.push(M,de,ye,X,we.z,null,O)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Q))){let de=B.update(M),ye=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),we.copy(M.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),we.copy(de.boundingSphere.center)),we.applyMatrix4(M.matrixWorld).applyMatrix4(ve)),Array.isArray(ye)){let Te=de.groups;for(let Ae=0,Fe=Te.length;Ae<Fe;Ae++){let Je=Te[Ae],et=ye[Je.materialIndex];et&&et.visible&&_.push(M,de,et,X,we.z,Je,O)}}else ye.visible&&_.push(M,de,ye,X,we.z,null,O)}}let G=M.children;for(let de=0,ye=G.length;de<ye;de++)Ln(G[de],O,X,V)}function ko(M,O,X,V){let{opaque:G,transmissive:de,transparent:ye}=M;T.setupLightsView(X),K===!0&&Ne.setGlobalState(b.clippingPlanes,X),V&&w.viewport(Y.copy(V)),G.length>0&&Da(G,O,X),de.length>0&&Da(de,O,X),ye.length>0&&Da(ye,O,X),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Ho(M,O,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let et=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new ti(1,1,{generateMipmaps:!0,type:et?pi:jt,minFilter:tr,samples:Math.max(4,$e.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}let G=T.state.transmissionRenderTarget[V.id],de=V.viewport||Y;G.setSize(de.z*b.transmissionResolutionScale,de.w*b.transmissionResolutionScale);let ye=b.getRenderTarget(),Te=b.getActiveCubeFace(),Ae=b.getActiveMipmapLevel();b.setRenderTarget(G),b.getClearColor(fe),Xe=b.getClearAlpha(),Xe<1&&b.setClearColor(16777215,.5),b.clear(),Ve&&He.render(X);let Fe=b.toneMapping;b.toneMapping=ci;let Je=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),K===!0&&Ne.setGlobalState(b.clippingPlanes,V),Da(M,X,V),H.updateMultisampleRenderTarget(G),H.updateRenderTargetMipmap(G),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let De=0,nt=O.length;De<nt;De++){let xt=O[De],{object:ht,geometry:ct,material:gt,group:Ie}=xt;if(gt.side===bi&&ht.layers.test(V.layers)){let Dt=gt.side;gt.side=zt,gt.needsUpdate=!0,Wo(ht,X,V,ct,gt,Ie),gt.side=Dt,gt.needsUpdate=!0,et=!0}}et===!0&&(H.updateMultisampleRenderTarget(G),H.updateRenderTargetMipmap(G))}b.setRenderTarget(ye,Te,Ae),b.setClearColor(fe,Xe),Je!==void 0&&(V.viewport=Je),b.toneMapping=Fe}function Da(M,O,X){let V=O.isScene===!0?O.overrideMaterial:null;for(let G=0,de=M.length;G<de;G++){let ye=M[G],{object:Te,geometry:Ae,group:Fe}=ye,Je=ye.material;Je.allowOverride===!0&&V!==null&&(Je=V),Te.layers.test(X.layers)&&Wo(Te,O,X,Ae,Je,Fe)}}function Wo(M,O,X,V,G,de){P!==null&&G.isNodeMaterial&&P.setObject(M,G),M.onBeforeRender(b,O,X,V,G,de),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(b,O,X,V,M,de),G.transparent===!0&&G.side===bi&&G.forceSinglePass===!1?(G.side=zt,G.needsUpdate=!0,b.renderBufferDirect(X,O,V,G,M,de),G.side=wi,G.needsUpdate=!0,b.renderBufferDirect(X,O,V,G,M,de),G.side=bi):b.renderBufferDirect(X,O,V,G,M,de),M.onAfterRender(b,O,X,V,G,de)}function Na(M,O,X){O.isScene!==!0&&(O=Le);let V=U.get(M),G=T.state.lights,de=T.state.shadowsArray,ye=G.state.version,Te=ue.getParameters(M,G.state,de,O,X,T.state.lightProbeGridArray),Ae=ue.getProgramCacheKey(Te),Fe=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;let Je=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=J.get(M.envMap||V.environment,Je),V.envMapRotation=V.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Fe===void 0&&(M.addEventListener("dispose",ai),Fe=new Map,V.programs=Fe);let et=Fe.get(Ae);if(et!==void 0){if(V.currentProgram===et&&V.lightsStateVersion===ye)return jo(M,Te),et}else Te.uniforms=ue.getUniforms(M),P!==null&&M.isNodeMaterial&&P.build(M,X,Te),M.onBeforeCompile(Te,b),et=ue.acquireProgram(Te,Ae),Fe.set(Ae,et),V.uniforms=Te.uniforms;let De=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=Ne.uniform),jo(M,Te),V.needsLights=Yc(M),V.lightsStateVersion=ye,V.needsLights&&(De.ambientLightColor.value=G.state.ambient,De.lightProbe.value=G.state.probe,De.sunLights.value=G.state.sun,De.sunLightShadows.value=G.state.sunShadow,De.directionalLights.value=G.state.directional,De.directionalLightShadows.value=G.state.directionalShadow,De.spotLights.value=G.state.spot,De.spotLightShadows.value=G.state.spotShadow,De.rectAreaLights.value=G.state.rectArea,De.ltc_1.value=G.state.rectAreaLTC1,De.ltc_2.value=G.state.rectAreaLTC2,De.pointLights.value=G.state.point,De.pointLightShadows.value=G.state.pointShadow,De.hemisphereLights.value=G.state.hemi,De.sunShadowMatrix.value=G.state.sunShadowMatrix,De.sunShadowCascade.value=G.state.sunShadowCascade,De.directionalShadowMatrix.value=G.state.directionalShadowMatrix,De.spotLightMatrix.value=G.state.spotLightMatrix,De.spotLightMap.value=G.state.spotLightMap,De.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=et,V.uniformsList=null,et}function Xo(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=_n.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function jo(M,O){let X=U.get(M);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Xc(M,O){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;E.setFromMatrixPosition(O.matrixWorld);for(let X=0,V=M.length;X<V;X++){let G=M[X];if(G.texture!==null&&G.boundingBox.containsPoint(E))return G}return null}function jc(M,O,X,V,G){O.isScene!==!0&&(O=Le),H.resetTextureUnits();let de=O.fog,ye=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,Te=k===null?b.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Qe.workingColorSpace,Ae=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Fe=J.get(V.envMap||ye,Ae),Je=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,et=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),De=!!X.morphAttributes.position,nt=!!X.morphAttributes.normal,xt=!!X.morphAttributes.color,ht=ci;V.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ht=b.toneMapping);let ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,gt=ct!==void 0?ct.length:0,Ie=U.get(V),Dt=T.state.lights;if(K===!0&&(ae===!0||M!==q)){let ot=M===q&&V.id===le;Ne.setState(V,M,ot)}let Wi=!1;V.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Dt.state.version||Ie.outputColorSpace!==Te||G.isBatchedMesh&&Ie.batching===!1||!G.isBatchedMesh&&Ie.batching===!0||G.isBatchedMesh&&Ie.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ie.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ie.instancing===!1||!G.isInstancedMesh&&Ie.instancing===!0||G.isSkinnedMesh&&Ie.skinning===!1||!G.isSkinnedMesh&&Ie.skinning===!0||G.isInstancedMesh&&Ie.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ie.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ie.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ie.instancingMorph===!1&&G.morphTexture!==null||Ie.envMap!==Fe||V.fog===!0&&Ie.fog!==de||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Ne.numPlanes||Ie.numIntersection!==Ne.numIntersection)||Ie.vertexAlphas!==Je||Ie.vertexTangents!==et||Ie.morphTargets!==De||Ie.morphNormals!==nt||Ie.morphColors!==xt||Ie.toneMapping!==ht||Ie.morphTargetsCount!==gt||!!Ie.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Wi=!0):(Wi=!0,Ie.__version=V.version);let Ht=Ie.currentProgram;Wi===!0&&(Ht=Na(V,O,G),P&&V.isNodeMaterial&&P.onUpdateProgram(V,Ht,Ie));let ni=!1,Ri=!1,dr=!1,st=Ht.getUniforms(),yt=Ie.uniforms;if(w.useProgram(Ht.program)&&(ni=!0,Ri=!0,dr=!0),V.id!==le&&(le=V.id,Ri=!0),Ie.needsLights){let ot=Xc(T.state.lightProbeGridArray,G);Ie.lightProbeGrid!==ot&&(Ie.lightProbeGrid=ot,Ri=!0)}if(ni||q!==M){w.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),st.setValue(I,"projectionMatrix",M.projectionMatrix),st.setValue(I,"viewMatrix",M.matrixWorldInverse);let ot=st.map.cameraPosition;ot!==void 0&&ot.setValue(I,xe.setFromMatrixPosition(M.matrixWorld)),$e.logarithmicDepthBuffer&&st.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&st.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),q!==M&&(q=M,Ri=!0,dr=!0)}if(Ie.needsLights&&(Dt.state.sunShadowMap.length>0&&st.setValue(I,"sunShadowMap",Dt.state.sunShadowMap,H),Dt.state.directionalShadowMap.length>0&&st.setValue(I,"directionalShadowMap",Dt.state.directionalShadowMap,H),Dt.state.spotShadowMap.length>0&&st.setValue(I,"spotShadowMap",Dt.state.spotShadowMap,H),Dt.state.pointShadowMap.length>0&&st.setValue(I,"pointShadowMap",Dt.state.pointShadowMap,H)),G.isSkinnedMesh){st.setOptional(I,G,"bindMatrix"),st.setOptional(I,G,"bindMatrixInverse");let ot=G.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),st.setValue(I,"boneTexture",ot.boneTexture,H))}G.isBatchedMesh&&(st.setOptional(I,G,"batchingTexture"),st.setValue(I,"batchingTexture",G._matricesTexture,H),st.setOptional(I,G,"batchingIdTexture"),st.setValue(I,"batchingIdTexture",G._indirectTexture,H),st.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&st.setValue(I,"batchingColorTexture",G._colorsTexture,H));let Pi=X.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&it.update(G,X,Ht),(Ri||Ie.receiveShadow!==G.receiveShadow)&&(Ie.receiveShadow=G.receiveShadow,st.setValue(I,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(yt.envMapIntensity.value=O.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=hv()),Ri){if(st.setValue(I,"toneMappingExposure",b.toneMappingExposure),Ie.needsLights&&qc(yt,dr),de&&V.fog===!0&&_e.refreshFogUniforms(yt,de),_e.refreshMaterialUniforms(yt,V,te,j,T.state.transmissionRenderTarget[M.id]),Ie.needsLights&&Ie.lightProbeGrid){let ot=Ie.lightProbeGrid;yt.probesSH.value=ot.texture,yt.probesMin.value.copy(ot.boundingBox.min),yt.probesMax.value.copy(ot.boundingBox.max),yt.probesResolution.value.copy(ot.resolution)}_n.upload(I,Xo(Ie),yt,H)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(_n.upload(I,Xo(Ie),yt,H),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&st.setValue(I,"center",G.center),st.setValue(I,"modelViewMatrix",G.modelViewMatrix),st.setValue(I,"normalMatrix",G.normalMatrix),st.setValue(I,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let ot=V.uniformsGroups;for(let ea=0,pr=ot.length;ea<pr;ea++){let Yo=ot[ea];Pe.update(Yo,Ht),Pe.bind(Yo,Ht)}}return Ht}function qc(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.sunLights.needsUpdate=O,M.sunLightShadows.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function Yc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(M,O,X){let V=U.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),U.get(M.texture).__webglTexture=O,U.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let X=U.get(M);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,X=0){k=M,z=O,Z=X;let V=null,G=!1,de=!1;if(M){let ye=U.get(M);if(ye.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(I.FRAMEBUFFER,ye.__webglFramebuffer),Y.copy(M.viewport),ee.copy(M.scissor),he=M.scissorTest,w.viewport(Y),w.scissor(ee),w.setScissorTest(he),le=-1;return}else if(ye.__webglFramebuffer===void 0)H.setupRenderTarget(M);else if(ye.__hasExternalTextures)H.rebindTextures(M,U.get(M.texture).__webglTexture,U.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Fe=M.depthTexture;if(ye.__boundDepthTexture!==Fe){if(Fe!==null&&U.has(Fe)&&(M.width!==Fe.image.width||M.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(M)}}let Te=M.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(de=!0);let Ae=U.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ae[O])?V=Ae[O][X]:V=Ae[O],G=!0):M.samples>0&&H.useMultisampledRTT(M)===!1?V=U.get(M).__webglMultisampledFramebuffer:Array.isArray(Ae)?V=Ae[X]:V=Ae,Y.copy(M.viewport),ee.copy(M.scissor),he=M.scissorTest}else Y.copy(Ee).multiplyScalar(te).floor(),ee.copy(ce).multiplyScalar(te).floor(),he=We;if(X!==0&&(V=N),w.bindFramebuffer(I.FRAMEBUFFER,V)&&w.drawBuffers(M,V),w.viewport(Y),w.scissor(ee),w.setScissorTest(he),G){let ye=U.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,ye.__webglTexture,X)}else if(de){let ye=O;for(let Te=0;Te<M.textures.length;Te++){let Ae=U.get(M.textures[Te]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Te,Ae.__webglTexture,X,ye)}}else if(M!==null&&X!==0){let ye=U.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ye.__webglTexture,X)}le=-1};function qo(M){let O=U.get(M);return(O.__readFormat!==M.format||O.__readType!==M.type)&&(O.__readFormat=M.format,O.__readType=M.type,O.__formatReadable=$e.textureFormatReadable(M.format),O.__typeReadable=$e.textureTypeReadable(M.type)),O}this.readRenderTargetPixels=function(M,O,X,V,G,de,ye,Te=0){if(!(M&&M.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=U.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){w.bindFramebuffer(I.FRAMEBUFFER,Ae);try{let Fe=M.textures[Te],Je=Fe.format,et=Fe.type;M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Te);let De=qo(Fe);if(De.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-V&&X>=0&&X<=M.height-G&&I.readPixels(O,X,V,G,ie.convert(Je),ie.convert(et),de)}finally{let Fe=k!==null?U.get(k).__webglFramebuffer:null;w.bindFramebuffer(I.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(M,O,X,V,G,de,ye,Te=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=U.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae)if(O>=0&&O<=M.width-V&&X>=0&&X<=M.height-G){w.bindFramebuffer(I.FRAMEBUFFER,Ae);let Fe=M.textures[Te],Je=Fe.format,et=Fe.type;M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Te);let De=qo(Fe);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,nt),I.bufferData(I.PIXEL_PACK_BUFFER,de.byteLength,I.STREAM_READ),I.readPixels(O,X,V,G,ie.convert(Je),ie.convert(et),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let xt=k!==null?U.get(k).__webglFramebuffer:null;w.bindFramebuffer(I.FRAMEBUFFER,xt);let ht=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Yu(I,ht,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,nt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,de),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(nt),I.deleteSync(ht),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,X=0){let V=Math.pow(2,-X),G=Math.floor(M.image.width*V),de=Math.floor(M.image.height*V),ye=O!==null?O.x:0,Te=O!==null?O.y:0;H.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,ye,Te,G,de),w.unbindTexture()},this.copyTextureToTexture=function(M,O,X=null,V=null,G=0,de=0){let ye,Te,Ae,Fe,Je,et,De,nt,xt,ht=M.isCompressedTexture?M.mipmaps[de]:M.image;if(X!==null)ye=X.max.x-X.min.x,Te=X.max.y-X.min.y,Ae=X.isBox3?X.max.z-X.min.z:1,Fe=X.min.x,Je=X.min.y,et=X.isBox3?X.min.z:0;else{let yt=Math.pow(2,-G);ye=Math.floor(ht.width*yt),Te=Math.floor(ht.height*yt),M.isDataArrayTexture?Ae=ht.depth:M.isData3DTexture?Ae=Math.floor(ht.depth*yt):Ae=1,Fe=0,Je=0,et=0}V!==null?(De=V.x,nt=V.y,xt=V.z):(De=0,nt=0,xt=0);let ct=ie.convert(O.format),gt=ie.convert(O.type),Ie;O.isData3DTexture?(H.setTexture3D(O,0),Ie=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(H.setTexture2DArray(O,0),Ie=I.TEXTURE_2D_ARRAY):(H.setTexture2D(O,0),Ie=I.TEXTURE_2D),w.activeTexture(I.TEXTURE0),w.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),w.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),w.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);let Dt=w.getParameter(I.UNPACK_ROW_LENGTH),Wi=w.getParameter(I.UNPACK_IMAGE_HEIGHT),Ht=w.getParameter(I.UNPACK_SKIP_PIXELS),ni=w.getParameter(I.UNPACK_SKIP_ROWS),Ri=w.getParameter(I.UNPACK_SKIP_IMAGES);w.pixelStorei(I.UNPACK_ROW_LENGTH,ht.width),w.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht.height),w.pixelStorei(I.UNPACK_SKIP_PIXELS,Fe),w.pixelStorei(I.UNPACK_SKIP_ROWS,Je),w.pixelStorei(I.UNPACK_SKIP_IMAGES,et);let dr=M.isDataArrayTexture||M.isData3DTexture,st=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let yt=U.get(M),Pi=U.get(O),ot=U.get(yt.__renderTarget),ea=U.get(Pi.__renderTarget);w.bindFramebuffer(I.READ_FRAMEBUFFER,ot.__webglFramebuffer),w.bindFramebuffer(I.DRAW_FRAMEBUFFER,ea.__webglFramebuffer);for(let pr=0;pr<Ae;pr++)dr&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,U.get(M).__webglTexture,G,et+pr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,U.get(O).__webglTexture,de,xt+pr)),I.blitFramebuffer(Fe,Je,ye,Te,De,nt,ye,Te,I.DEPTH_BUFFER_BIT,I.NEAREST);w.bindFramebuffer(I.READ_FRAMEBUFFER,null),w.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||U.has(M)){let yt=U.get(M),Pi=U.get(O);w.bindFramebuffer(I.READ_FRAMEBUFFER,W),w.bindFramebuffer(I.DRAW_FRAMEBUFFER,L);for(let ot=0;ot<Ae;ot++)dr?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.__webglTexture,G,et+ot):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yt.__webglTexture,G),st?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pi.__webglTexture,de,xt+ot):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pi.__webglTexture,de),G!==0?I.blitFramebuffer(Fe,Je,ye,Te,De,nt,ye,Te,I.COLOR_BUFFER_BIT,I.NEAREST):st?I.copyTexSubImage3D(Ie,de,De,nt,xt+ot,Fe,Je,ye,Te):I.copyTexSubImage2D(Ie,de,De,nt,Fe,Je,ye,Te);w.bindFramebuffer(I.READ_FRAMEBUFFER,null),w.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else st?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(Ie,de,De,nt,xt,ye,Te,Ae,ct,gt,ht.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Ie,de,De,nt,xt,ye,Te,Ae,ct,ht.data):I.texSubImage3D(Ie,de,De,nt,xt,ye,Te,Ae,ct,gt,ht):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,de,De,nt,ye,Te,ct,gt,ht.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,de,De,nt,ht.width,ht.height,ct,ht.data):I.texSubImage2D(I.TEXTURE_2D,de,De,nt,ye,Te,ct,gt,ht);w.pixelStorei(I.UNPACK_ROW_LENGTH,Dt),w.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Wi),w.pixelStorei(I.UNPACK_SKIP_PIXELS,Ht),w.pixelStorei(I.UNPACK_SKIP_ROWS,ni),w.pixelStorei(I.UNPACK_SKIP_IMAGES,Ri),de===0&&O.generateMipmaps&&I.generateMipmap(Ie),w.unbindTexture()},this.initRenderTarget=function(M){U.get(M).__webglFramebuffer===void 0&&H.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?H.setTextureCube(M,0):M.isData3DTexture?H.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?H.setTexture2DArray(M,0):H.setTexture2D(M,0),w.unbindTexture()},this.resetState=function(){z=0,Z=0,k=null,w.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}},fx=new R;});var Oc={};$c(Oc,{createField:()=>dv});function dv(e,{onHover:t,onSelect:i}={}){let r=new Uo({antialias:!0,alpha:!1,powerPreference:"high-performance"});r.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),r.setClearColor(723984,1),r.outputColorSpace=It,e.prepend(r.domElement);let a=new Eo;a.fog=new To(723984,10,34);let n=new Bt(52,1,.1,100);n.position.set(0,0,0);let s=new rr;a.add(s);let o=new Ro,l=new Map,h=(he,fe)=>{if(l.has(he)){let Ce=l.get(he);Ce.image?(fe.uniforms.uMap.value=Ce,fe.uniforms.uLoaded.value=1):Ce.userData.waiting.push(fe);return}let Xe=o.load(he,Ce=>{Ce.userData.waiting.forEach(j=>{j.uniforms.uMap.value=Ce,j.uniforms.uLoaded.value=1})});Xe.colorSpace=It,Xe.userData.waiting=[fe],l.set(he,Xe)},c=new Ca(1,1,24,1),d=[],u=12,f=Math.PI*2;function v(he){d.forEach(Ee=>{s.remove(Ee.mesh),Ee.mesh.material.dispose()}),d=[];let fe=he.length,Xe=Math.max(1,Math.min(4,Math.ceil(fe/14))),Ce=Xe>=3?2.5:2.8,j=.35,te=Array.from({length:Xe},()=>[]);he.forEach((Ee,ce)=>te[ce%Xe].push(Ee));let re=te.map(Ee=>Ee.reduce((ce,We)=>ce+Ce*zi.clamp(We.ratio,.66,1.8)+j,0)),be=Math.max(...re);u=Math.max(12,be/(Math.PI*2)),f=be/u,te.forEach((Ee,ce)=>{let We=(ce-(Xe-1)/2)*(Ce+j),Q=0,K=be/re[ce];Ee.forEach(ae=>{let ve=Ce*zi.clamp(ae.ratio,.66,1.8),xe=(ve+j)*K/u,we=Q+xe/2;Q+=xe;let Le=new qt({vertexShader:cv,fragmentShader:uv,transparent:!0,side:wi,uniforms:{uMap:{value:null},uBend:{value:0},uHover:{value:0},uShift:{value:0},uAlpha:{value:0},uLoaded:{value:0},uCover:{value:new oe(1,1)}}}),Ve=ve/Ce;ae.ratio>Ve?Le.uniforms.uCover.value.set(Ve/ae.ratio,1):Le.uniforms.uCover.value.set(1,ae.ratio/Ve),h(ae.src,Le);let Oe=new Gt(c,Le);Oe.scale.set(ve,Ce,1),Oe.position.set(Math.sin(we)*u,We,-Math.cos(we)*u),Oe.lookAt(0,We,0),Oe.userData.tile={it:ae,mat:Le,hover:0,delay:Math.random()*.5},s.add(Oe),d.push(Oe.userData.tile),Oe.userData.tile.mesh=Oe})}),_=0,f<Math.PI*2-.01&&(y=m=-f/2),Z()}let y=0,m=0,p=0,S=0,E=0,_=0,T=!1,A=0,C=0,g=0,b=0,D=new oe(9,9),P=new No,N=null,W=r.domElement;W.addEventListener("pointerdown",he=>{T=!0,g=0,b=performance.now(),A=he.clientX,C=he.clientY,W.setPointerCapture(he.pointerId)}),W.addEventListener("pointermove",he=>{let fe=W.getBoundingClientRect();if(D.set((he.clientX-fe.left)/fe.width*2-1,-((he.clientY-fe.top)/fe.height)*2+1),!T)return;let Xe=he.clientX-A,Ce=he.clientY-C;g+=Math.abs(Xe)+Math.abs(Ce),m+=Xe*.0032,E=zi.clamp(E+Ce*.01,-3,3),A=he.clientX,C=he.clientY});let L=he=>{T&&(T=!1,g<6&&performance.now()-b<500&&N&&(i==null||i(N.it)),he.pointerType!=="mouse"&&D.set(9,9))};W.addEventListener("pointerup",L),W.addEventListener("pointercancel",L),W.addEventListener("pointerleave",()=>{T||D.set(9,9)}),W.addEventListener("wheel",he=>{he.preventDefault(),m+=(he.deltaY+he.deltaX)*.0012},{passive:!1});let z=he=>{le&&(he.key==="ArrowRight"&&(m+=.25),he.key==="ArrowLeft"&&(m-=.25))};window.addEventListener("keydown",z);function Z(){let{clientWidth:he,clientHeight:fe}=e;r.setSize(he,fe,!1),n.aspect=he/fe,n.fov=n.aspect<.8?68:52,n.updateProjectionMatrix()}let k=new ResizeObserver(Z);k.observe(e);let le=!1,q=0,Y=new Io;function ee(){if(q=requestAnimationFrame(ee),Y.update(),!le)return;let he=Math.min(Y.getDelta(),1/30),fe=Y.getElapsed();T||(m+=he*.025);let Xe=y;y+=(m-y)*Math.min(1,he*5),p+=((y-Xe)/Math.max(he,.001)-p)*.2,S+=(E-S)*Math.min(1,he*4),T||(E*=Math.pow(.2,he)),s.rotation.y=-y,n.position.y=S*.4,n.rotation.x=-S*.03,_=Math.min(1,_+he*.9),P.setFromCamera(D,n);let Ce=D.x<5?P.intersectObjects(s.children,!1)[0]:null,j=Ce?Ce.object.userData.tile:null;j!==N&&(N=j,W.style.cursor=N?"pointer":"",t==null||t(N?N.it:null));let te=zi.clamp(p*-.6,-1.2,1.2),re=zi.clamp(Math.abs(p)*.004,0,.012);for(let be of d){let Ee=be.mat.uniforms;be.hover+=((N===be?1:0)-be.hover)*Math.min(1,he*7),Ee.uHover.value=be.hover,Ee.uBend.value=te,Ee.uShift.value=re,Ee.uAlpha.value=zi.clamp((_-be.delay)*2.2,0,1)}r.render(a,n)}return ee(),{setItems:v,start(){le=!0,Z()},stop(){le=!1},destroy(){cancelAnimationFrame(q),k.disconnect(),window.removeEventListener("keydown",z),r.dispose()}}}var cv,uv,Fc=Zo(()=>{Oo();cv=`
  uniform float uBend;
  uniform float uHover;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    float x = uv.x - 0.5;
    p.z += (1.0 - 4.0 * x * x) * uBend;      // velocity bend
    p.z += uHover * 0.35;                    // lift toward viewer
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }`,uv=`
  uniform sampler2D uMap;
  uniform float uShift;
  uniform float uHover;
  uniform float uAlpha;
  uniform float uLoaded;
  uniform vec2 uCover;
  varying vec2 vUv;
  void main() {
    vec2 uv = (vUv - 0.5) * uCover + 0.5;
    uv = (uv - 0.5) * (1.0 - uHover * 0.06) + 0.5;
    vec4 c;
    c.r = texture2D(uMap, uv + vec2(uShift, 0.0)).r;
    c.g = texture2D(uMap, uv).g;
    c.b = texture2D(uMap, uv - vec2(uShift, 0.0)).b;
    c.a = 1.0;
    vec3 base = mix(vec3(0.09, 0.1, 0.13), c.rgb, uLoaded);
    // rounded corners
    vec2 q = abs(vUv - 0.5) * 2.0;
    float r = 0.06;
    float d = length(max(q - (1.0 - r), 0.0)) / r;
    float mask = 1.0 - smoothstep(0.9, 1.0, d);
    gl_FragColor = vec4(base, uAlpha * mask);
    #include <colorspace_fragment>
  }`});var $o=[["001-dsc0189-9f9d69",2400,3600,"cityscape","Tower at Blue Hour","\u84DD\u8C03\u7D2B\u5CF0","Nanjing","blue"],["002-dsc0333-c8dd05",2400,1600,"cityscape","City Beneath Zijin Mountain","\u7D2B\u91D1\u5C71\u4E0B","Nanjing","blue"],["003-dsc0584-975344",2400,1022,"cityscape","Lights On","\u534E\u706F\u521D\u4E0A","","blue"],["004-dsc0682-fe1e91",2400,1022,"cityscape","Skyline After Rain","\u96E8\u540E\u5929\u9645\u7EBF","","blue"],["005-dsc1610-828084",2400,1600,"creativity","Mirror Tunnel","\u955C\u50CF\u96A7\u9053","","geometry"],["006-dsc1699-4e1633",2400,1600,"creativity","Spiral and Mural","\u87BA\u65CB\u4E0E\u58C1\u753B","","geometry"],["007-dsc1823-84f364",2400,3600,"cityscape","Vertical Eye","\u5782\u76F4\u4E4B\u773C","","geometry"],["008-dsc2092-12211c",2400,1600,"documentary","Corner Tower, Still Water","\u89D2\u697C\u5012\u5F71","Beijing","geometry"],["009-dsc2117-75451d",2400,1600,"documentary","Through the Red Gate","\u7EA2\u95E8\u4E4B\u5185","Beijing","geometry"],["010-dsc2606-4d8181",2400,1600,"documentary","Red Wall Walker","\u7EA2\u5899\u884C\u8005","Beijing","people"],["011-dsc2792-nr-7c974a",2400,3600,"cityscape","Golden Theatre","\u91D1\u8272\u5267\u573A","","gold"],["012-dsc2806-23c5cb",2400,1600,"ecological","Gulls","\u9E25\u7FA4","","green"],["013-dsc2829-d3b7a4",2400,1012,"cityscape","The Egg","\u6C34\u4E0A\u4E4B\u86CB","Beijing","geometry"],["014-dsc2985-fc9b11",2400,3600,"cityscape","Rush Hour Canyon","\u8F66\u6D41\u5CE1\u8C37","Beijing","blue"],["015-dsc4232-45aa06",2400,4032,"documentary","Kiosk and Tower","\u62A5\u4EAD\u4E0E\u9AD8\u5854","Beijing","blue"],["016-dsc5793-nr-ef6638",2400,1600,"ecological","Fireflies","\u8424\u706B","","night"],["017-dsc6297-hdr-e8f687",2400,1601,"cityscape","Golden Hour City","\u91D1\u8272\u65F6\u523B","","gold"],["018-dsc7374-17-42-09-c5963f",2400,1600,"landscape","Lightning","\u96F7\u66B4","","night"],["019-dsc7898-83b651",2400,1294,"documentary","Ribbon Dancers I","\u5F69\u7EF8 I","","people"],["020-dsc7986-e6efc1",2400,1600,"documentary","Ribbon Dancers II","\u5F69\u7EF8 II","","people"],["021-dsc8102-nr-e9e9f4",2400,3600,"cityscape","Pavilion Between Towers","\u697C\u5B87\u95F4\u7684\u9601","Nanjing","blue"],["022-dsc9219-nr-1950f1",2400,1600,"cityscape","Riverside Skyline","\u6C5F\u7554\u5929\u9645\u7EBF","Nanjing","blue"],["023-dsc9355-3c77c1",2400,1350,"cityscape","Cable Bridge","\u659C\u62C9\u6865","","blue"],["024-0ae511603acb75dc0e360125e5f0248e-172",2400,1773,"personal","Meili Peaks","\u6885\u91CC\u7FA4\u5CF0","Yunnan","vast"],["025-1-after-41de6a",2400,1600,"creativity","Green Spiral","\u7EFF\u8272\u87BA\u65CB","","geometry"],["026-1b7fe65878e346fd5ecd8451dcae3f05-479",2400,3600,"landscape","Cairn and Summit","\u739B\u5C3C\u5806\u4E0E\u96EA\u5C71","Yunnan","vast"],["027-1c5801269291c3da7f4a414e20c0bd57-f13",2400,1351,"landscape","Lanterns on the Lake","\u6E56\u4E0A\u706F\u4EAD","","gold"],["028-2-2623f0",2400,1600,"cityscape","Light Trails","\u57CE\u5E02\u5149\u8F68","","blue"],["029-2d8051fa03f692e2159f35006aad9522-6a1",2400,2052,"cityscape","Above the City","\u57CE\u5E02\u4E4B\u5DC5","Nanjing","blue"],["030-4c96c5ab95503badba48472345cd7ef6-a6e",2400,4265,"personal","Giant","\u5DE8\u50CF","Shanghai","people"],["031-5ff19237958c602e2af92a4615a911f6-65f",2400,1600,"personal","Arms Wide","\u5F20\u5F00\u53CC\u81C2","","vast"],["032-7a0a67d9dff6e4237b49828b8b7cb3c6-456",2400,4267,"ecological","Meerkat","\u72D0\u7374","","green"],["033-7be8fcc61cb30aaba60e15f2e0cb811d-45b",2400,4265,"personal","Rainbow Umbrella","\u5F69\u8679\u4F1E","Shanghai","people"],["034-7c2983837077aef3bea2f31aa0c38e33-f49",2400,1798,"cityscape","Above the Clouds","\u4E91\u4E0A\u9646\u5BB6\u5634","Shanghai","gold"],["035-8bc9e9036310dc77008427dc8eb390bb-2-a",2400,1352,"personal","Lone Watcher","\u72EC\u671B","Qinghai\u2013Gansu","vast"],["036-8dd14622ffea7d3968df1bdee01de02d-2ad",2400,1600,"cityscape","Dusk Over the City","\u57CE\u5E02\u66AE\u8272","Nanjing","gold"],["037-9aa932bb5e5425dcc5baff682c71f8fa-5c4",2400,1349,"landscape","Autumn Island","\u79CB\u5C9B","","green"],["038-9d566dc000ce36dd126b99410e5fe19e-6a7",2400,1351,"personal","Before Jade Dragon","\u7389\u9F99\u96EA\u5C71\u524D","Yunnan","vast"],["039-9f383a9ec71e15da21c3c6d6a72c3cd1-1b0",2400,1600,"landscape","Star Trails over Meili","\u6885\u91CC\u661F\u8F68","Yunnan","night"],["040-22-a4ee13",2400,1351,"creativity","Spiral Library","\u65CB\u8F6C\u4E66\u9601","","geometry"],["041-24fbb713a612d2f645cdd4c54f2bf16b-036",2400,1701,"documentary","Dragon Lantern Night","\u821E\u9F99\u4E4B\u591C","","people"],["042-30bb61957b841ca16282448f926bf032-1c2",2400,1565,"personal","Framed Summit","\u5CA9\u9699\u4E2D\u7684\u96EA\u5C71","Yunnan","vast"],["043-38e356943a827401e0547616f664f27f-85f",2400,1491,"creativity","Blossom and Machine","\u6A31\u82B1\u4E0E\u673A\u68B0","","green"],["044-38fb078455529e7b290cc129e279967b-07f",2400,3600,"landscape","Alpenglow over Rooftops","\u5C4B\u9876\u4E0A\u7684\u65E5\u7167\u91D1\u5C71","Yunnan","gold"],["045-58a6efe226c870dd99284a7ed16f2f55-17d",2400,1799,"landscape","Ginkgo Lane","\u94F6\u674F\u9053","","green"],["046-62f8e0d79cc509f62a585402ebb4d196-bb9",2400,1349,"personal","Green Field from Above","\u7EFF\u91CE\u4FEF\u77B0","","green"],["047-95d91734cfd86c8a0edcf99c136989d1-59f",2400,1798,"landscape","Road to the Horizon","\u65E0\u5C3D\u516C\u8DEF","Qinghai\u2013Gansu","vast"],["048-259ce06112abf7ea2e516c3a8be41ef9-042",2400,3742,"landscape","Island Spine","\u6E56\u4E2D\u5C9B","","vast"],["049-536c73e47ae9cb1f16a62ec3f1cdaf3b-636",2400,3600,"personal","Photographer at the Window","\u7A97\u8FB9\u7684\u6444\u5F71\u8005","","people"],["050-849ed928250a6e95cd9a80d13ca93594-69d",2400,1588,"cityscape","City Grid","\u57CE\u5E02\u7F51\u683C","","night"],["051-952e28a566f4922169f9ad7bf4df042c-692",2400,1350,"landscape","Red Panda","\u5C0F\u718A\u732B","","green"],["052-1695c8f89e80b1ba393967ded0af4050-dcc",2400,4267,"cityscape","Lantern Canal","\u706F\u7B3C\u6C34\u5DF7","Yunnan","blue"],["053-5101f04f4d3da8a81cd5abece63f54f6-57d",2400,3600,"documentary","Old Town Lane","\u53E4\u57CE\u5C0F\u5DF7","Yunnan","people"],["054-6659a9858b1d0e463ce8f65f04508c2e-dc8",2400,3600,"personal","Into the Snow","\u8D70\u8FDB\u96EA\u5C71","","vast"],["055-26997a435ba4312748f4e74c941b9ce3-5d4",2400,1379,"landscape","Songzanlin in Mist","\u677E\u8D5E\u6797\u5BFA","Yunnan","gold"],["056-a8c9ba24fe01bfd69a43065bceec57b2-cb7",2400,4267,"ecological","Flamingo Heart","\u706B\u70C8\u9E1F\u4E4B\u5FC3","","green"],["057-a8ec4be6c464b356c66f1d3c702f27c9-876",2400,3365,"documentary","Through the Windshield","\u8F66\u7A97\u4E4B\u5916","","people"],["058-a45c7dbff005a764e2bf5c2f7e99cf7f-201",2400,4267,"ecological","Koala","\u8003\u62C9","","green"],["059-a8922ea72d55bf51f3582c960f507c43-1f7",2400,3600,"cityscape","Tower over the Gate","\u57CE\u697C\u4E0E\u5854","Nanjing","blue"],["060-a564378148fd0e0a564881592b714823-5b0",2400,1387,"personal","Grey Dunes","\u7070\u8272\u6C99\u4E18","Qinghai\u2013Gansu","vast"],["061-aba8806e9361f741a58d828175abfe8a-113",2400,1351,"personal","Hay Bale Canyon","\u8349\u579B\u5CE1\u8C37","","vast"],["062-acfe4c813ba9fbf0eca34ccb46152469-9cc",2400,1601,"cityscape","Riverside City","\u6CB3\u7554\u57CE\u5E02","","blue"],["063-b4fed73b8ddfc32733f80fe81db11e70-e7f",2400,1603,"personal","Light Bearer","\u6301\u5149\u8005","Qinghai\u2013Gansu","night"],["064-b0004060-7a6a47",2400,3203,"creativity","Yardang","\u96C5\u4E39","Qinghai\u2013Gansu","vast"],["065-b0004079-3fr-a5327e",2400,1799,"landscape","Star Trails over Yardang","\u96C5\u4E39\u661F\u8F68","Qinghai\u2013Gansu","night"],["066-b0004115-0392f8",2400,1799,"personal","Red on the Ridge","\u5C71\u810A\u4E0A\u7684\u7EA2","Qinghai\u2013Gansu","vast"],["067-b0005171-952639",2400,3203,"cityscape","Zifeng at Dusk","\u7D2B\u5CF0\u66AE\u8272","Nanjing","blue"],["068-b0005974-d5785e",2400,1799,"cityscape","Blue Hour, CBD","\u84DD\u8C03 CBD","Beijing","blue"],["069-b0006009-d1136f",2400,2971,"creativity","Temple in Relief","\u6D6E\u96D5\u5929\u575B","","geometry"],["070-b0006029-3662a1",2400,3203,"cityscape","The Arch","\u592E\u89C6\u5927\u697C","Beijing","geometry"],["071-b0006388-17-38-00-08d8a4",2400,3203,"documentary","Corner Store","\u8857\u89D2\u5C0F\u5E97","","people"],["072-b0006481-3fr-415f28",2400,1799,"ecological","Cabin of Fireflies","\u8424\u706B\u5C0F\u5C4B","","night"],["073-b0006654-724b7d",2400,887,"cityscape","River Panorama","\u6C5F\u666F\u957F\u5377","","gold"],["074-b0006836-14700b",2400,1799,"cityscape","Evening Skyline","\u66AE\u8272\u5929\u9645\u7EBF","","blue"],["075-bd38867c9a7e3929d45f3faf875b3adc-caf",2400,3600,"cityscape","Neon Spiral","\u9713\u8679\u56DE\u65CB","","night"],["076-c2ddb1228fc9179a609c3ffe3e204f06-2-8",2400,1349,"cityscape","City in the Clouds","\u4E91\u4E2D\u57CE","","vast"],["077-c9fef66fd7337bb0026e2e5ac3cccb43-0ab",2400,3593,"personal","Milky Way Through Ruins","\u5E9F\u589F\u94F6\u6CB3","Qinghai\u2013Gansu","night"],["078-c56b1032af02d09b992b07b98c3125a2-7a6",2400,1600,"landscape","Looking Up","\u4EF0\u671B","","green"],["079-c2279d3facbf29a7c6faf1f32ce05bfc-5a5",2400,1600,"cityscape","Bridge Lights","\u6865\u4E0A\u706F\u706B","","blue"],["080-cb41042607433f6c8164e3e430546cae-35a",2400,1523,"documentary","Carousel","\u65CB\u8F6C\u6728\u9A6C","","people"],["081-cc287fc69d6681796c9a4e7f417f6e1c-c76",2400,3601,"landscape","Pavilion Reflection","\u4EAD\u5F71","","green"],["082-cd1d6a8e5c3568dc6b75dae1a2e2eb60-e0a",2400,4265,"personal","Alley Cyclist","\u5DF7\u53E3\u9A91\u884C","","people"],["083-ce730b764721ea8711d0656b25d0026d-0c0",2400,1883,"creativity","Window Cleaners","\u9AD8\u7A7A\u6E05\u6D01","","geometry"],["084-cf5cfc7e8e174b7af7f8f0c35573fcce-856",2400,3800,"ecological","Toucan","\u5DE8\u5634\u9E1F","","green"],["085-d4659493deb99ce15a0a69526d72cc81-55a",2400,1798,"cityscape","Floating Towers","\u60AC\u6D6E\u697C\u7FA4","","vast"],["086-dji-20250614070916-0120-d-ed4542",2400,1798,"cityscape","Tower in the Fog","\u96FE\u4E2D\u5B64\u697C","","vast"],["087-dji-20250821090926-0354-d-e4c4ee",2400,3202,"documentary","Solar Tower","\u5149\u70ED\u5854","Qinghai\u2013Gansu","geometry"],["088-dji-20250821091248-0360-d-8f645e",2400,1501,"creativity","Heliostats","\u5B9A\u65E5\u955C\u9635","Qinghai\u2013Gansu","geometry"],["089-dji-20250823171628-0147-d-e82359",2400,1349,"personal","Green Terraces","\u7EFF\u8272\u7EB9\u7406","","geometry"],["090-dji-20250823201223-0167-d-94b04e",2400,3600,"personal","On the Rock","\u5DE8\u77F3\u4E4B\u4E0A","Qinghai\u2013Gansu","vast"],["091-dji-20250825201510-0182-d-e6f5c0",2400,3600,"personal","Salt Lake Dusk","\u76D0\u6E56\u66AE\u8272","Qinghai\u2013Gansu","gold"],["092-dji-20250826194608-0246-d-4aeb42",2400,1800,"creativity","One Bush","\u6C99\u6D77\u4E00\u682A","Qinghai\u2013Gansu","geometry"],["093-dsc00442-faf4d6",2400,3600,"documentary","Rooftops and Jade Dragon","\u5C4B\u9876\u4E0E\u7389\u9F99","Yunnan","gold"],["094-dsc00719-bbfbaa",2400,3600,"documentary","Old Town Morning","\u53E4\u57CE\u6E05\u6668","Yunnan","people"],["095-dsc03649-724230",2400,1600,"cityscape","Burning Sky","\u706B\u70E7\u4E91\u9646\u5BB6\u5634","Shanghai","gold"],["096-dsc07591-139c76",2400,1351,"creativity","Spiral Stair","\u65CB\u68AF","","geometry"],["097-e5be2255192442d1923a5c0d3ba3d006-d9a",2400,3318,"documentary","Edge of a Roof","\u5C4B\u6A90\u4E00\u89D2","","geometry"],["098-eb059407d811190af44e726be97aebc7-1d5",2400,1367,"cityscape","Gallery Window","\u5C55\u5385\u4E4B\u7A97","","geometry"],["099-ec9355e3a2c039ca4b74235a58d0fbb2-937",2400,1799,"landscape","Violet Forest","\u7D2B\u8272\u68EE\u6797","","green"],["100-ee18bf6a0fee17ca64b2a008ab6f9204-6cc",2400,1350,"ecological","Marmoset","\u72E8\u7334","","green"],["101-efd6cedebd96732721d60eb7a00078fc-0f4",2400,3726,"creativity","Green Arch","\u7EFF\u8272\u62F1\u95E8","","geometry"],["102-f6ad4aff3c2132e15e05f725c129cf55-33f",2400,1725,"landscape","Xueda Lake Mirror","\u96EA\u8FBE\u6E56\u5012\u5F71","Yunnan","blue"],["103-fa3db5adaddb5eb492f65be625f6bcd9-033",2400,1216,"creativity","White Spiral","\u767D\u8272\u65CB\u68AF","","geometry"],["104-fdacd51eac32d9a56e704899c07985bd-300",2400,1124,"documentary","Wedding","\u5A5A\u793C","","people"],["105-fe33a6d5dc5258e930ba60efb9e5d285-695",2400,1725,"landscape","Xueda Lake, Sunrise","\u96EA\u8FBE\u6E56\u65E5\u51FA","Yunnan","gold"],["106-fe40671cfbe700975ed545e8776c8ed0-b9c",2400,1351,"personal","Snowline Viewpoint","\u96EA\u7EBF\u89C2\u666F","Yunnan","gold"],["107-img-1791-2a7131",2400,3200,"creativity","Blocks from Above","\u4FEF\u77B0\u8857\u533A","","geometry"],["108-img-3167-b0e166",2400,1799,"documentary","Fireworks","\u70DF\u706B","","night"],["109-img-3757-b5c78b",2400,1799,"landscape","Ginkgo Road","\u94F6\u674F\u8DEF","","green"],["110-img-3758-7c68ad",2400,1883,"creativity","Facade Rhythm","\u7ACB\u9762\u97F5\u5F8B","","geometry"],["111-img-3759-2-9cefeb",2400,1601,"cityscape","Dish and Star Trails","\u5929\u7EBF\u661F\u8F68","","night"],["112-img-3763-edf3f1",2400,1352,"personal","Standing Tall","\u8FDC\u773A","Qinghai\u2013Gansu","vast"],["113-img-3769-8b3f3a",2400,3596,"personal","Catching Snow","\u63A5\u96EA","","night"],["114-img-4295-b8c376",2400,1359,"landscape","Songzanlin Dawn","\u677E\u8D5E\u6797\u5BFA\u6668\u5149","Yunnan","vast"],["115-img-4424-a27561",2400,1350,"personal","Summit","\u96EA\u5CF0\u4E4B\u4E0A","Yunnan","vast"],["116-img-4429-7d5209",2400,1798,"landscape","Valley from Above","\u96EA\u8C37\u4FEF\u77B0","Yunnan","vast"],["117-img-4431-5457a0",2400,1349,"landscape","Lijiang at Blue Hour","\u4E3D\u6C5F\u84DD\u8C03","Yunnan","blue"],["118-img-4432-d152b5",2400,1351,"landscape","Black Dragon Pool","\u9ED1\u9F99\u6F6D","Yunnan","blue"],["119-img-4507-ac97ec",2400,737,"cityscape","Night Panorama","\u591C\u8272\u957F\u5377","Shanghai","night"],["120-img-4634-8ed884",2400,1799,"landscape","Pavilion and Star Trails","\u9601\u697C\u661F\u8F68","","night"],["121-img-8372-aa4ae6",2400,1799,"ecological","Firefly Forest","\u8424\u706B\u68EE\u6797","","night"],["122-sh-78182e",2400,1711,"cityscape","River Bend at Night","\u591C\u8272\u6C5F\u6E7E","Shanghai","night"],["123-slx06909-daf02f",2400,4055,"personal","Stairway to the Tower","\u901A\u5F80\u9AD8\u5854","Shanghai","geometry"],["124-1-40e905",2400,3601,"cityscape","Interchange","\u7ACB\u4EA4\u5149\u8F68","Beijing","blue"],["125-1-8e43bc",2400,1600,"creativity","X","X","","geometry"]];var Jo=[{id:"cityscape",en:"Cityscape",zh:"\u57CE\u5E02"},{id:"landscape",en:"Landscape",zh:"\u98CE\u5149"},{id:"personal",en:"On the Road",zh:"\u5728\u8DEF\u4E0A"},{id:"documentary",en:"Documentary",zh:"\u4EBA\u6587\u7EAA\u5B9E"},{id:"creativity",en:"Creative",zh:"\u521B\u610F"},{id:"ecological",en:"Wildlife",zh:"\u751F\u7075"}],Dn=[{id:"blue",en:"Blue Hour",zh:"\u84DD\u8C03\u57CE\u5E02",cover:1,note:"Cities in the cool minutes after sunset, when the lights come on.",noteZh:"\u65E5\u843D\u540E\u7684\u84DD\u8C03\u65F6\u523B\uFF0C\u57CE\u5E02\u4E00\u76CF\u76CF\u4EAE\u8D77\u3002"},{id:"gold",en:"Golden Light",zh:"\u91D1\u8272\u65F6\u523B",cover:95,note:"Alpenglow, burning skies and the warm edges of the day.",noteZh:"\u65E5\u7167\u91D1\u5C71\u3001\u706B\u70E7\u4E91\uFF0C\u4E00\u5929\u4E2D\u6700\u6696\u7684\u8FB9\u7F18\u3002"},{id:"vast",en:"Wide Open",zh:"\u8FBD\u9614",cover:47,note:"Plateaus, peaks, fog seas \u2014 and one small figure for scale.",noteZh:"\u9AD8\u539F\u3001\u96EA\u5C71\u4E0E\u4E91\u6D77\uFF0C\u4EE5\u53CA\u753B\u9762\u91CC\u90A3\u4E2A\u5C0F\u5C0F\u7684\u4EBA\u3002"},{id:"night",en:"After Dark",zh:"\u591C\u4E0E\u661F",cover:39,note:"Star trails, fireflies, lightning and neon.",noteZh:"\u661F\u8F68\u3001\u8424\u706B\u3001\u95EA\u7535\u4E0E\u9713\u8679\u3002"},{id:"geometry",en:"Geometry",zh:"\u51E0\u4F55",cover:25,note:"Spirals, symmetry and patterns found in architecture and land.",noteZh:"\u5728\u5EFA\u7B51\u4E0E\u5927\u5730\u4E2D\u53D1\u73B0\u7684\u87BA\u65CB\u3001\u5BF9\u79F0\u4E0E\u79E9\u5E8F\u3002"},{id:"people",en:"Human Moments",zh:"\u4EBA\u95F4",cover:20,note:"Streets, festivals and the people inside the frame.",noteZh:"\u8857\u5934\u3001\u8282\u5E86\uFF0C\u4EE5\u53CA\u753B\u9762\u91CC\u7684\u4EBA\u3002"},{id:"green",en:"Living Green",zh:"\u751F\u7075\u8349\u6728",cover:51,note:"Animals, forests and the turning seasons.",noteZh:"\u52A8\u7269\u3001\u68EE\u6797\u4E0E\u5B63\u8282\u7684\u6D41\u8F6C\u3002"}],fr=e=>Dn.find(t=>t.id===e),Ii=$o.map(([e,t,i,r,a,n,s,o],l)=>({n:l+1,id:e,w:t,h:i,ratio:t/i,cat:r,style:o,title:a,zh:n,place:s,s:`media/s/${e}.webp`,m:`media/m/${e}.webp`,l:`media/l/${e}.webp`})),Nn=e=>Ii[e-1],Ko=e=>typeof window!="undefined"&&window.X1NG_TEX&&window.X1NG_TEX[e.id]||e.s;var Jc=[{id:"yunnan",en:"Yunnan Journey",zh:"\u4E91\u5357\u4E4B\u65C5",region:"Lijiang \xB7 Shangri-La \xB7 Meili",year:"2024",tags:["Travel","Alpine","Guide"],cover:102,lede:"Six days between old towns and glaciers \u2014 chasing the first gold on Meili, the morning haze over Songzanlin and the blue hour mirror of Xueda Lake.",ledeZh:"\u4ECE\u53E4\u57CE\u4E3D\u6C5F\u5230\u6885\u91CC\u96EA\u5C71\uFF0C\u516D\u5929\u4E94\u665A\u8FFD\u9010\u65E5\u7167\u91D1\u5C71\u3001\u677E\u8D5E\u6797\u5BFA\u6668\u96FE\u4E0E\u96EA\u8FBE\u6E56\u7684\u84DD\u8C03\u5012\u5F71\u3002",frames:[102,39,44,55,114,24,42,105,106,115,38,116,118,117,93,94,52,53,26],guide:"yunnan"},{id:"qinggan",en:"Qinghai\u2013Gansu Loop",zh:"\u9752\u7518\u5927\u73AF\u7EBF",region:"Qinghai \xB7 Gansu \xB7 Northwest China",year:"2024",tags:["Travel","Desert","Night sky"],cover:47,lede:"A long loop across the plateau: salt lakes that hold the sky, yardang ridges under turning stars, and roads that simply keep going.",ledeZh:"\u7A7F\u8D8A\u9752\u6D77\u4E0E\u7518\u8083\u7684\u9AD8\u539F\u4E0E\u6208\u58C1\uFF1A\u5012\u6620\u5929\u7A7A\u7684\u76D0\u6E56\u3001\u661F\u8F68\u4E0B\u7684\u96C5\u4E39\uFF0C\u4EE5\u53CA\u6CA1\u6709\u5C3D\u5934\u7684\u516C\u8DEF\u3002",frames:[47,65,91,63,77,64,60,35,112,92,88,87,90,66],guide:"qinggan"},{id:"cities",en:"Cities After Dusk",zh:"\u57CE\u5E02\u66AE\u8272",region:"Nanjing \xB7 Beijing \xB7 Shanghai",year:"2023\u2014",tags:["Cityscape","Blue hour","Night"],cover:95,lede:"Home is Nanjing, but the habit travels: wait for the blue hour, find the high ground, let the city switch itself on.",ledeZh:"\u5E38\u9A7B\u5357\u4EAC\uFF0C\u4E5F\u5728\u5317\u4EAC\u3001\u4E0A\u6D77\u7684\u9AD8\u5904\u7B49\u5F85\u84DD\u8C03\u65F6\u523B\uFF0C\u770B\u57CE\u5E02\u4E00\u76CF\u76CF\u4EAE\u8D77\u6765\u3002",frames:[95,21,1,29,22,67,36,59,2,8,13,14,68,70,124,33,34,119,123,17,74,79]},{id:"above",en:"From Above",zh:"\u9AD8\u7A7A",region:"Drone work",year:"2023\u2014",tags:["Aerial","Patterns","Fog"],cover:86,lede:"Four hundred metres changes everything. Fog becomes an ocean, streets become circuitry, and a single tower becomes an island.",ledeZh:"\u5347\u5230\u56DB\u767E\u7C73\u9AD8\u7A7A\uFF1A\u96FE\u53D8\u6210\u6D77\uFF0C\u8857\u9053\u53D8\u6210\u7535\u8DEF\uFF0C\u4E00\u680B\u697C\u4E5F\u80FD\u6210\u4E3A\u5B64\u5C9B\u3002",frames:[86,76,85,122,50,107,46,89,37,48,28]},{id:"geometry",en:"Geometry of Light",zh:"\u5149\u7684\u51E0\u4F55",region:"Architecture studies",year:"2023\u2014",tags:["Creative","Spirals","Symmetry"],cover:25,lede:"Spirals, tunnels, facades \u2014 buildings looked at until they stop being buildings and turn into drawings made of light.",ledeZh:"\u65CB\u68AF\u3001\u96A7\u9053\u4E0E\u7ACB\u9762\uFF1A\u4E00\u76F4\u770B\u7740\u5EFA\u7B51\uFF0C\u76F4\u5230\u5B83\u53D8\u6210\u4E00\u5F20\u7531\u5149\u6784\u6210\u7684\u56FE\u3002",frames:[25,5,96,7,103,40,6,101,83,11,69,97,125]},{id:"people",en:"Human Scale",zh:"\u4EBA\u95F4",region:"Street & documentary",year:"2023\u2014",tags:["Documentary","Street","Festivals"],cover:20,lede:"Close enough to notice the gesture, far enough to let it stay true \u2014 ribbon dancers at dawn, lantern nights, a quiet corner shop.",ledeZh:"\u8DB3\u591F\u8FD1\uFF0C\u80FD\u770B\u89C1\u52A8\u4F5C\uFF1B\u8DB3\u591F\u8FDC\uFF0C\u8BA9\u5B83\u4FDD\u6301\u771F\u5B9E\u2014\u2014\u6668\u7EC3\u7684\u5F69\u7EF8\u3001\u706F\u4F1A\u7684\u591C\u665A\u3001\u8857\u89D2\u7684\u5C0F\u5E97\u3002",frames:[20,19,41,80,10,9,57,71,82,104,108,15]},{id:"wild",en:"Living Things",zh:"\u751F\u7075",region:"Wildlife & night forests",year:"2023\u2014",tags:["Wildlife","Fireflies","Birds"],cover:16,lede:"Fireflies drifting through a summer forest, gulls over grey water, and the patient faces of animals that did not ask to be photographed.",ledeZh:"\u590F\u591C\u68EE\u6797\u91CC\u7684\u8424\u706B\u3001\u7070\u8272\u6C34\u9762\u4E0A\u7684\u9E25\u7FA4\uFF0C\u4EE5\u53CA\u90A3\u4E9B\u5B89\u9759\u770B\u7740\u955C\u5934\u7684\u52A8\u7269\u3002",frames:[16,72,121,12,84,51,56,32,58,100]}];var Qo=e=>Jc.find(t=>t.frames.includes(e));var Kc=["https://pan.baidu.com/s/1fnFnoaW2alaQI63GItltfA?pwd=kstr","https://pan.baidu.com/s/1775m0DJv7OFWcWVAMIeXZw?pwd=pwf4","https://pan.baidu.com/s/1XXkvom-n1fwFqzEBoM4FJA?pwd=rs6p","https://pan.baidu.com/s/1IiiMzlhrWWz0hEg7ZYSeag?pwd=qdzm","https://pan.baidu.com/s/120DBmMflVaZCZHr6xdob6A?pwd=te1v","https://pan.baidu.com/s/1rHAFtN0DR6w_wzR7ujd7Aw?pwd=rpr1","https://pan.baidu.com/s/1_XIhdbo_7mT_Tn1f6XMD6Q?pwd=yei2","https://pan.baidu.com/s/1yGv2M1PoIASG2z58Cg55VQ?pwd=qgqb"],vv=[1,2,3,4,5,6,7,8].map(e=>({id:e,before:`media/raw/${e}_before.webp`,after:`media/raw/${e}_after.webp`,pan:Kc[e-1]||null})),Xi={email:"2193177455@qq.com",links:[{label:"Xiaohongshu \u5C0F\u7EA2\u4E66",short:"\u5C0F\u7EA2\u4E66",href:"https://www.xiaohongshu.com/user/profile/631b5c64000000002303dc06"},{label:"Douyin \u6296\u97F3",short:"Douyin",href:"https://v.douyin.com/pIs2kYdlksE/"},{label:"500px",short:"500px",href:"https://500px.com/p/xingyujieeeeee"}]};var pt=window.gsap,Wt=window.ScrollTrigger;pt&&Wt&&pt.registerPlugin(Wt);var Ft=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Qc=window.matchMedia("(hover: hover) and (pointer: fine)").matches,ut=(e,t=document)=>t.querySelector(e),Ct=(e,t=document)=>[...t.querySelectorAll(e)],Zt=e=>{let t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstElementChild},ft=(e="")=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),mr=(e,t=2)=>String(e).padStart(t,"0"),el=[{href:"index.html",en:"Home",zh:"\u9996\u9875",key:"home"},{href:"corridor.html",en:"Corridor",zh:"\u8D70\u5ECA",key:"corridor"},{href:"work.html",en:"Work",zh:"\u4F5C\u54C1",key:"work"},{href:"series.html",en:"Series",zh:"\u7CFB\u5217",key:"series"},{href:"raw.html",en:"RAW Lab",zh:"\u540E\u671F",key:"raw"},{href:"about.html",en:"About",zh:"\u5173\u4E8E",key:"about"}],Ot=null,gr=()=>Ot;function tl(e){if(!e||e.dataset.rolled)return e;let t=e.textContent;return e.dataset.rolled="1",e.setAttribute("aria-label",t.trim()),e.classList.add("roll"),e.innerHTML=[...t].map((i,r)=>`<span class="ch" aria-hidden="true" style="--i:${r}" data-ch="${ft(i)}">${ft(i)}</span>`).join(""),e}function eu(e){if(!e||e.dataset.split==="done")return[];e.dataset.split="done";let t=i=>{[...i.childNodes].forEach(r=>{if(r.nodeType===3){let a=document.createDocumentFragment();r.textContent.split(/(\s+)/).forEach(n=>{if(!n)return;if(/^\s+$/.test(n)){a.appendChild(document.createTextNode(n));return}let s=document.createElement("span");s.className="word-mask";let o=document.createElement("span");o.textContent=n,s.appendChild(o),a.appendChild(s)}),r.replaceWith(a)}else r.nodeType===1&&!r.classList.contains("word-mask")&&r.tagName!=="BR"&&t(r)})};return t(e),Ct(".word-mask > span",e)}function tu(e,t){let i=Zt(`
    <header class="site-header">
      <div class="header-actions">
        <a class="pill header-cta roll-host" href="about.html#contact"><span class="dot"></span><span data-roll>Let's shoot</span></a>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu-panel" aria-label="Open menu"><i></i><i></i></button>
      </div>
    </header>`),r=Zt(`
    <div class="menu-panel" id="menu-panel" aria-hidden="true">
      <nav aria-label="Primary">
        ${el.map((c,d)=>`<a class="roll-host" href="${c.href}" ${c.key===e?'aria-current="page"':""}><span data-roll>${c.en}</span><small>${mr(d+1)} \xB7 ${c.zh}</small></a>`).join("")}
      </nav>
      <div class="menu-foot">
        <p class="mono muted">Say hello \xB7 \u8054\u7CFB</p>
        <a class="h3" href="mailto:${Xi.email}" style="font-size:20px;letter-spacing:-.02em">${Xi.email}</a>
        <div class="links mono" style="margin-top:14px">${Xi.links.map(c=>`<a href="${c.href}" target="_blank" rel="noopener">${c.short}</a>`).join("")}</div>
      </div>
    </div>`),a=Zt('<a class="brand" href="index.html" aria-label="X1NG \u2014 home">X1NG <small>Photographic field</small></a>'),n=Zt('<div class="menu-scrim"></div>'),s=Zt('<div class="cursor" aria-hidden="true"><div class="cursor__pill"><span class="cursor__text">View</span></div></div>'),o=Zt(`<div class="transition" aria-hidden="true">${"<i></i>".repeat(5)}</div>`);document.body.prepend(Zt('<a class="skip-link" href="#main">Skip to content</a>')),document.body.append(i,a,n,r,s,o);let l=ut(".menu-btn",i),h=c=>{document.documentElement.classList.toggle("menu-open",c),l.setAttribute("aria-expanded",c),l.setAttribute("aria-label",c?"Close menu":"Open menu"),r.setAttribute("aria-hidden",!c),c?Ot==null||Ot.stop():Ot==null||Ot.start()};l.addEventListener("click",()=>h(!document.documentElement.classList.contains("menu-open"))),n.addEventListener("click",()=>h(!1)),document.addEventListener("keydown",c=>{c.key==="Escape"&&h(!1)}),t.footer!==!1&&document.querySelector("main").after(iu(t)),Ct("[data-roll]").forEach(tl)}function iu(e){let t=Zt(`
    <footer class="site-footer wrap">
      <div class="footer__grid">
        <div class="footer__col">
          <p class="mono">Based in</p>
          <span>Nanjing, China</span><span class="zh muted">\u5E38\u9A7B\u5357\u4EAC \xB7 \u968F\u65F6\u51FA\u53D1</span>
        </div>
        <div class="footer__col">
          <p class="mono">Explore</p>
          ${el.slice(1).map(r=>`<a class="roll-host" href="${r.href}"><span data-roll>${r.en}</span></a>`).join("")}
        </div>
        <div class="footer__col">
          <p class="mono">Follow</p>
          ${Xi.links.map(r=>`<a class="roll-host" href="${r.href}" target="_blank" rel="noopener"><span data-roll>${r.short}</span></a>`).join("")}
        </div>
        <div class="footer__col">
          <p class="mono">Contact</p>
          <a href="mailto:${Xi.email}">${Xi.email}</a>
          <span class="muted">Commissions, prints, collaborations.</span>
        </div>
        <div class="footer__word" aria-hidden="true">X1NG</div>
      </div>
      <div class="footer__base mono">
        <span>\xA9 ${new Date().getFullYear()} Xing \xB7 \u661F\u5149</span>
        <span>All photographs \xA9 Xing. All rights reserved.</span>
        <a href="#main" data-top>Back to top \u2191</a>
      </div>
    </footer>`),i=document.createDocumentFragment();return i.append(t),e.next&&i.append(Zt(`
      <section class="next" data-next="${e.next.href}" aria-label="Next page">
        ${e.next.image?`<div class="next__bg"><img src="${e.next.image}" alt="" loading="lazy"></div>`:""}
        <div class="next__inner">
          <p class="mono">Next \xB7 \u4E0B\u4E00\u9875</p>
          <a class="next__title roll-host" href="${e.next.href}"><span data-roll>${ft(e.next.label)}</span></a>
          <a class="next__go" href="${e.next.href}" aria-label="Open ${ft(e.next.label)}"><svg class="next__ring" viewBox="0 0 88 88" aria-hidden="true"><circle class="track" cx="44" cy="44" r="40"/><circle class="fill" cx="44" cy="44" r="40" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/></svg><span class="next__arrow" aria-hidden="true">\u2192</span></a>
          <p class="mono muted">${ft(e.next.sub||"Next page")}</p>
        </div>
      </section>`)),i}function ru(){Ft||!window.Lenis||(Ot=new window.Lenis({duration:1.15,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),smoothWheel:!0}),Ot.on("scroll",Wt.update),pt.ticker.add(e=>Ot.raf(e*1e3)),pt.ticker.lagSmoothing(0))}function au(){let e=ut(".site-header"),t=0,i=()=>{let r=window.scrollY,a=r>200&&r>t&&!document.documentElement.classList.contains("menu-open");e.classList.toggle("is-hidden",a),document.documentElement.classList.toggle("header-hidden",a),t=r};window.addEventListener("scroll",i,{passive:!0})}function nu(e=document){pt&&(Ct("[data-split]",e).forEach(t=>{let i=eu(t);Ft||(pt.set(i,{yPercent:110}),Wt.create({trigger:t,start:"top 88%",once:!0,onEnter:()=>pt.to(i,{yPercent:0,duration:1.1,ease:"expo.out",stagger:.028,delay:+t.dataset.delay||0})}))}),Ct("[data-fade]",e).forEach(t=>{if(Ft){pt.set(t,{opacity:1,y:0});return}Wt.create({trigger:t,start:"top 92%",once:!0,onEnter:()=>pt.to(t,{opacity:1,y:0,duration:1.1,ease:"expo.out",delay:+t.dataset.delay||0})})}),Ft||Ct("[data-parallax]",e).forEach(t=>{let i=+t.dataset.parallax||10;pt.fromTo(t,{yPercent:-i},{yPercent:i,ease:"none",scrollTrigger:{trigger:t.parentElement,start:"top bottom",end:"bottom top",scrub:!0}})}),Ct("[data-roll]",e).forEach(tl))}function su(){if(!Qc)return;let e=ut(".cursor"),t=ut(".cursor__text",e),i=innerWidth/2,r=innerHeight/2,a=i,n=r;window.addEventListener("pointermove",s=>{i=s.clientX,r=s.clientY},{passive:!0}),pt.ticker.add(()=>{a+=(i-a)*.2,n+=(r-n)*.2,e.style.transform=`translate3d(${a}px, ${n}px, 0)`}),document.addEventListener("pointerover",s=>{let o=s.target.closest("[data-cursor]");o&&(t.textContent=o.dataset.cursor,e.classList.add("is-active"))}),document.addEventListener("pointerout",s=>{let o=s.target.closest("[data-cursor]");o&&!o.contains(s.relatedTarget)&&e.classList.remove("is-active")})}var Un="x1ng:transition";function ou(){let e=ut(".transition"),t=Ct("i",e),i=!1;sessionStorage.getItem(Un)!=="1"||Ft||(sessionStorage.removeItem(Un),pt.set(t,{scaleY:1,transformOrigin:"top"}),pt.to(t,{scaleY:0,duration:.9,ease:"expo.inOut",stagger:.05,delay:.05})),window.navigateTo=a=>{if(!i){if(i=!0,Ft){location.href=a;return}sessionStorage.setItem(Un,"1"),pt.set(t,{transformOrigin:"bottom"}),pt.to(t,{scaleY:1,duration:.75,ease:"expo.inOut",stagger:.05,onComplete:()=>{location.href=a}}),setTimeout(()=>{location.href=a},1600)}},document.addEventListener("click",a=>{let n=a.target.closest("a[href]");if(!n||a.defaultPrevented||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||n.target==="_blank"||n.hasAttribute("download"))return;let s=new URL(n.href,location.href);if(s.origin===location.origin){if(s.pathname===location.pathname&&s.search===location.search&&s.hash){a.preventDefault();let o=s.hash==="#main"?0:document.querySelector(s.hash);Ot?Ot.scrollTo(o!=null?o:0,{duration:1.4}):o?o.scrollIntoView({behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"});return}/\.html$|\/$/.test(s.pathname)&&(a.preventDefault(),document.documentElement.classList.remove("menu-open"),window.navigateTo(s.href))}}),window.addEventListener("pageshow",a=>{a.persisted&&(i=!1,pt.set(t,{scaleY:0}))})}function lu(){let e=ut(".next");if(!e||!Wt)return;let t=ut(".next__ring .fill",e),i=ut(".next__inner",e),r=!1;Wt.create({trigger:e,start:"top bottom",end:"bottom bottom",onUpdate:a=>{let n=a.progress;t.style.strokeDashoffset=String(1-Math.min(1,Math.max(0,(n-.35)/.63))),Ft||(i.style.transform=`translateY(${(1-n)*-30}vh)`),e.classList.toggle("is-ready",n>.97)}})}function il({page:e,dark:t=!1,footer:i=!0,next:r=null}={}){return document.documentElement.classList.toggle("no-motion",Ft),t&&document.body.classList.add("is-dark"),tu(e,{footer:i,next:r}),ru(),au(),su(),ou(),Ct("[data-top]").forEach(a=>a.addEventListener("click",n=>{n.preventDefault(),Ot?Ot.scrollTo(0,{duration:1.6}):window.scrollTo({top:0,behavior:"smooth"})})),{ready(){nu(),lu(),Wt==null||Wt.refresh()}}}var Mt,ji,qi=[],Yi=0,_r=null,Zi=null,hu=e=>{var t;return((t=Jo.find(i=>i.id===e))==null?void 0:t.en)||e};function cu(){Mt=Zt(`
    <div class="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" aria-hidden="true">
      <div class="lb__top">
        <span class="mono" data-lb-count>001 / 125</span>
        <button class="lb__close" type="button" aria-label="Close viewer (Esc)">\u2715</button>
      </div>
      <div class="lb__stage">
        <img alt="" draggable="false">
        <button class="lb__nav lb__nav--prev" type="button" aria-label="Previous photo">\u2190</button>
        <button class="lb__nav lb__nav--next" type="button" aria-label="Next photo">\u2192</button>
      </div>
      <div class="lb__bottom">
        <p class="lb__title" data-lb-title></p>
        <p class="lb__meta mono" data-lb-meta></p>
      </div>
    </div>`),document.body.append(Mt),ji=ut("img",Mt),ut(".lb__close",Mt).addEventListener("click",Ua),ut(".lb__nav--prev",Mt).addEventListener("click",()=>ta(-1)),ut(".lb__nav--next",Mt).addEventListener("click",()=>ta(1)),Mt.addEventListener("click",r=>{(r.target===Mt||r.target.classList.contains("lb__stage"))&&Ua()}),document.addEventListener("keydown",r=>{Mt.classList.contains("is-open")&&(r.key==="Escape"&&Ua(),r.key==="ArrowRight"&&ta(1),r.key==="ArrowLeft"&&ta(-1))});let e=0,t=0,i=ut(".lb__stage",Mt);i.addEventListener("touchstart",r=>{e=r.touches[0].clientX,t=r.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",r=>{let a=r.changedTouches[0].clientX-e,n=r.changedTouches[0].clientY-t;Math.abs(a)>50&&Math.abs(a)>Math.abs(n)?ta(a<0?1:-1):n>90&&Ua()})}function rl(){var a;let e=qi[Yi];ji.classList.add("is-swapping");let t=new Image;t.src=e.l;let i=()=>{ji.src=e.l,ji.alt=`${e.title}${e.place?` \u2014 ${e.place}`:""}`,requestAnimationFrame(()=>ji.classList.remove("is-swapping"))};t.complete?setTimeout(i,120):(ji.src=e.s,ji.classList.remove("is-swapping"),t.onload=i),[qi[Yi+1],qi[Yi-1]].forEach(n=>{if(n){let s=new Image;s.src=n.l}});let r=Qo(e.n);ut("[data-lb-count]",Mt).textContent=`${mr(Yi+1,3)} / ${mr(qi.length,3)}`,ut("[data-lb-title]",Mt).innerHTML=`${ft(e.title)}<span class="zh">${ft(e.zh)}</span>`,ut("[data-lb-meta]",Mt).innerHTML=[e.place&&`<span>${ft(e.place)}</span>`,`<a href="work.html?style=${e.style}">${ft(((a=fr(e.style))==null?void 0:a.en)||hu(e.cat))}</a>`,r&&`<a href="series.html?id=${r.id}">Series: ${ft(r.en)}</a>`,`<span>#${mr(e.n,3)}</span>`].filter(Boolean).join(""),Zi==null||Zi(e)}function ta(e){Yi=(Yi+e+qi.length)%qi.length,rl()}function al(e,t=0,{onNavigate:i}={}){var r;Mt||cu(),qi=e,Yi=t,Zi=i||null,_r=document.activeElement,rl(),Mt.classList.add("is-open"),Mt.setAttribute("aria-hidden","false"),(r=gr())==null||r.stop(),document.documentElement.style.overflow="hidden",ut(".lb__close",Mt).focus({preventScroll:!0})}function Ua(){var e,t;Mt&&(Mt.classList.remove("is-open"),Mt.setAttribute("aria-hidden","true"),(e=gr())==null||e.start(),document.documentElement.style.overflow="",Zi==null||Zi(null),(t=_r==null?void 0:_r.focus)==null||t.call(_r,{preventScroll:!0}))}Oo();var tM=new R,iM=new R,rM=new ii,aM=new Ye,nM=new R(0,1,0);function Uc(){try{let e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl2")||e.getContext("webgl")))}catch{return!1}}var pv=il({page:"work",next:{href:"series.html",label:"The Series",sub:"Seven curated stories \xB7 \u4E03\u4E2A\u7CFB\u5217",image:Nn(102).m}}),Rn=new URLSearchParams(location.search),ri=fr(Rn.get("style"))?Rn.get("style"):"all",La=Rn.get("view")==="field"?"field":"grid",Pn=()=>ri==="all"?Ii:Ii.filter(e=>e.style===ri),Bc=()=>[{id:"all",en:"All",count:Ii.length},...Dn.map(e=>({...e,count:Ii.filter(t=>t.style===e.id).length}))].map(e=>`<button type="button" class="chip" data-filter="${e.id}" aria-pressed="${e.id===ri}" title="${e.zh||""}">${e.en}<sup>${e.count}</sup></button>`).join("");ut("[data-chips]").innerHTML=Bc();ut("[data-chips-field]").innerHTML=Bc();var ur=ut("[data-grid]");ur.innerHTML=Ii.map(e=>`
  <a class="tile" href="work.html?p=${e.n}" data-n="${e.n}" data-style="${e.style}" data-cursor="View" aria-label="${ft(e.title)} ${ft(e.zh)}">
    <img src="${e.s}" srcset="${e.s} 640w, ${e.m} 1280w" sizes="(max-width: 700px) 50vw, 25vw" width="${e.w}" height="${e.h}" alt="${ft(e.title)}${e.place?` \u2014 ${ft(e.place)}`:""}" loading="lazy" decoding="async">
    <span class="tile__cap"><b>${ft(e.title)}</b><span class="mono">${ft(e.place||fr(e.style).en)}</span></span>
  </a>`).join("");Ct(".tile img",ur).forEach(e=>{e.complete?e.classList.add("is-loaded"):e.addEventListener("load",()=>e.classList.add("is-loaded"),{once:!0})});ur.addEventListener("click",e=>{let t=e.target.closest(".tile");t&&(e.preventDefault(),Bo(+t.dataset.n))});function Bo(e){let t=Pn().some(i=>i.n===e)?Pn():Ii;al(t,t.findIndex(i=>i.n===e),{onNavigate(i){let r=new URL(location.href);i?r.searchParams.set("p",i.n):r.searchParams.delete("p"),history.replaceState(null,"",r)}})}function zc(e,t=!0){ri=e,Ct("[data-filter]").forEach(n=>n.setAttribute("aria-pressed",n.dataset.filter===ri));let i=new URL(location.href);i.searchParams.delete("cat"),ri==="all"?i.searchParams.delete("style"):i.searchParams.set("style",ri),history.replaceState(null,"",i);let r=Ct(".tile",ur),a=()=>{r.forEach(o=>o.classList.toggle("is-hidden",ri!=="all"&&o.dataset.style!==ri)),ut("[data-total]").textContent=Pn().length;let n=fr(ri),s=ut("[data-style-note]");s.innerHTML=n?`${ft(n.note)} <span class="zh muted">${ft(n.zh)} \xB7 ${ft(n.noteZh)}</span>`:'Every frame in the archive, curated into seven visual styles. Open any photograph, or step into the field. <span class="zh muted">\u5168\u90E8\u4F5C\u54C1 \xB7 \u6309\u98CE\u683C\u6D4F\u89C8 \xB7 3D \u6F2B\u6E38</span>',Wt.refresh(),t&&!Ft&&pt.fromTo(r.filter(o=>!o.classList.contains("is-hidden")).slice(0,16),{opacity:0,y:30},{opacity:1,y:0,duration:.8,ease:"expo.out",stagger:.03})};t&&!Ft?pt.to(ur,{opacity:0,duration:.2,onComplete:()=>{a(),pt.to(ur,{opacity:1,duration:.3})}}):a(),ki&&ki.setItems(Vc())}document.addEventListener("click",e=>{let t=e.target.closest("[data-filter]");t&&zc(t.dataset.filter)});var Qr=ut("[data-field]"),fv=ut("[data-field-title]"),ki=null,Gc=Uc(),Vc=()=>Pn().map(e=>({n:e.n,src:Ko(e),ratio:e.ratio,title:e.title,zh:e.zh,place:e.place}));async function kc(e){var i;e==="field"&&!Gc&&(e="grid"),La=e,Ct("[data-view]").forEach(r=>r.setAttribute("aria-pressed",r.dataset.view===La));let t=new URL(location.href);if(La==="field"?t.searchParams.set("view","field"):t.searchParams.delete("view"),history.replaceState(null,"",t),La==="field"){if(!ki){let{createField:r}=await Promise.resolve().then(()=>(Fc(),Oc));ki=r(Qr,{onHover(a){fv.innerHTML=a?`${ft(a.title)}<span class="zh">${ft(a.zh)}</span>`:""},onSelect(a){Bo(a.n)}}),ki.setItems(Vc())}Qr.classList.add("is-on"),document.body.classList.add("field-mode"),(i=gr())==null||i.stop(),ki.start(),Ft||pt.fromTo(Qr,{clipPath:"inset(50% 0% 50% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1,ease:"expo.inOut"})}else if(ki&&Qr.classList.contains("is-on")){let r=()=>{var a;Qr.classList.remove("is-on"),document.body.classList.remove("field-mode"),ki.stop(),(a=gr())==null||a.start()};Ft?r():pt.to(Qr,{clipPath:"inset(50% 0% 50% 0%)",duration:.8,ease:"expo.inOut",onComplete:r})}}Ct("[data-view]").forEach(e=>e.addEventListener("click",()=>kc(e.dataset.view)));Gc||Ct('[data-view="field"]').forEach(e=>{e.disabled=!0,e.title="3D view needs WebGL"});zc(ri,!1);pv.ready();Ft||pt.from(Ct(".tile",ur).filter(e=>!e.classList.contains("is-hidden")).slice(0,12),{opacity:0,y:60,duration:1.2,ease:"expo.out",stagger:.05,delay:.3});La==="field"&&kc("field");var Fo=+Rn.get("p");Fo&&Nn(Fo)&&setTimeout(()=>Bo(Fo),400);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
