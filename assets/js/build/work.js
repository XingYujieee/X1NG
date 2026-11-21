(()=>{var Xu=Object.defineProperty;var as=(e,t)=>()=>(e&&(t=e(e=0)),t);var El=(e,t)=>{for(var i in t)Xu(e,i,{get:t[i],enumerable:!0})};function tp(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ip(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Da(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function rp(){let e=Da("canvas");return e.style.display="block",e}function ph(...e){let t="THREE."+e.shift();sa?sa("log",t,...e):console.log(t,...e)}function Pc(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Be(...e){e=Pc(e);let t="THREE."+e.shift();if(sa)sa("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Ge(...e){e=Pc(e);let t="THREE."+e.shift();if(sa)sa("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Kr(...e){let t=e.join(" ");t in dh||(dh[t]=!0,Be(...e))}function ap(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}function _r(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dt[e&255]+Dt[e>>8&255]+Dt[e>>16&255]+Dt[e>>24&255]+"-"+Dt[t&255]+Dt[t>>8&255]+"-"+Dt[t>>16&15|64]+Dt[t>>24&255]+"-"+Dt[i&63|128]+Dt[i>>8&255]+"-"+Dt[i>>16&255]+Dt[i>>24&255]+Dt[r&255]+Dt[r>>8&255]+Dt[r>>16&255]+Dt[r>>24&255]).toLowerCase()}function Ze(e,t,i){return Math.max(t,Math.min(i,e))}function tl(e,t){return(e%t+t)%t}function sp(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function op(e,t,i){return e!==t?(i-e)/(t-e):0}function Aa(e,t,i){return(1-i)*e+i*t}function lp(e,t,i,r){return Aa(e,t,1-Math.exp(-i*r))}function hp(e,t=1){return t-Math.abs(tl(e,t*2)-t)}function cp(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function up(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function dp(e,t){return e+Math.floor(Math.random()*(t-e+1))}function pp(e,t){return e+Math.random()*(t-e)}function fp(e){return e*(.5-Math.random())}function mp(e){e!==void 0&&(fh=e);let t=fh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gp(e){return e*Jr}function vp(e){return e*Na}function _p(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function yp(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function xp(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Mp(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),h=n((t+r)/2),c=s((t+r)/2),p=n((t-r)/2),u=s((t-r)/2),f=n((r-t)/2),_=s((r-t)/2);switch(a){case"XYX":e.set(o*c,l*p,l*u,o*h);break;case"YZY":e.set(l*u,o*c,l*p,o*h);break;case"ZXZ":e.set(l*p,l*u,o*c,o*h);break;case"XZX":e.set(o*c,l*_,l*f,o*h);break;case"YXY":e.set(l*f,o*c,l*_,o*h);break;case"ZYZ":e.set(l*_,l*f,o*c,o*h);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function jr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bp(){let e={enabled:!0,workingColorSpace:Wn,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===nt&&(a.r=Li(a.r),a.g=Li(a.g),a.b=Li(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===nt&&(a.r=Qr(a.r),a.g=Qr(a.g),a.b=Qr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Vi?Xn:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return Kr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return Kr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Wn]:{primaries:t,whitePoint:r,transfer:Xn,toXYZ:gh,fromXYZ:vh,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:t,whitePoint:r,transfer:nt,toXYZ:gh,fromXYZ:vh,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),e}function Li(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Qr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function Ss(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Sp.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}function As(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}function Us(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){nr.fromArray(e,n);let o=a.x*Math.abs(nr.x)+a.y*Math.abs(nr.y)+a.z*Math.abs(nr.z),l=t.dot(nr),h=i.dot(nr),c=r.dot(nr);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}function Up(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),r=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(r[l]=0,r[l|256]=32768,a[l]=24,a[l|256]=24):h<-14?(r[l]=1024>>-h-14,r[l|256]=1024>>-h-14|32768,a[l]=-h-1,a[l|256]=-h-1):h<=15?(r[l]=h+15<<10,r[l|256]=h+15<<10|32768,a[l]=13,a[l|256]=13):h<128?(r[l]=31744,r[l|256]=64512,a[l]=24,a[l|256]=24):(r[l]=31744,r[l|256]=64512,a[l]=13,a[l|256]=13)}let n=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;(h&8388608)===0;)h<<=1,c-=8388608;h&=-8388609,c+=947912704,n[l]=h|c}for(let l=1024;l<2048;++l)n[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:r,shiftTable:a,mantissaTable:n,exponentTable:s,offsetTable:o}}function Vp(e,t,i,r,a,n,s,o){let l;if(t.side===Vt?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===pr,o),l===null)return null;Mn.copy(o),Mn.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(Mn);return h<i.near||h>i.far?null:{distance:h,point:Mn.clone(),object:e}}function bn(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,vn),e.getVertexPosition(l,_n),e.getVertexPosition(h,yn);let c=Vp(e,t,i,r,vn,_n,yn,Rh);if(c){let p=new C;qr.getBarycoord(Rh,vn,_n,yn,p),a&&(c.uv=qr.getInterpolatedAttribute(a,o,l,h,p,new ne)),n&&(c.uv1=qr.getInterpolatedAttribute(n,o,l,h,p,new ne)),s&&(c.normal=qr.getInterpolatedAttribute(s,o,l,h,p,new C),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new C,materialIndex:0};qr.getNormal(vn,_n,yn,u.normal),c.face=u,c.barycoord=p}return c}function nl(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,c,p){let u=(s-n)/h-(o-n)/(h+c)+(o-s)/c,f=(o-s)/c-(l-s)/(c+p)+(l-o)/p;u*=c,f*=c,a(s,o,u,f)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}function Ih(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function tf(e,t){let i=1-e;return i*i*t}function rf(e,t){return 2*(1-e)*e*t}function af(e,t){return e*e*t}function Ra(e,t,i,r){return tf(e,t)+rf(e,i)+af(e,r)}function nf(e,t){let i=1-e;return i*i*i*t}function sf(e,t){let i=1-e;return 3*i*i*e*t}function of(e,t){return 3*(1-e)*e*e*t}function lf(e,t){return e*e*e*t}function Ca(e,t,i,r,a){return nf(e,t)+sf(e,i)+of(e,r)+lf(e,a)}function df(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=tu(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h;if(r&&(n=vf(e,t,n,i)),e.length>80*i){o=e[0],l=e[1];let c=o,p=l;for(let u=i;u<a;u+=i){let f=e[u],_=e[u+1];f<o&&(o=f),_<l&&(l=_),f>c&&(c=f),_>p&&(p=_)}h=Math.max(c-o,p-l),h=h!==0?32767/h:0}return Fa(n,s,i,o,l,h,0),s}function tu(e,t,i,r,a){let n;if(a===Rf(e,t,i,r)>0)for(let s=t;s<i;s+=r)n=Nh(s/r|0,e[s],e[s+1],n);else for(let s=i-r;s>=t;s-=r)n=Nh(s/r|0,e[s],e[s+1],n);return n&&la(n,n.next)&&(za(n),n=n.next),n}function gr(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(la(i,i.next)||gt(i.prev,i,i.next)===0)){if(za(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Fa(e,t,i,r,a,n,s){if(!e)return;!s&&n&&bf(e,r,a,n);let o=e;for(;e.prev!==e.next;){let l=e.prev,h=e.next;if(n?ff(e,r,a,n):pf(e)){t.push(l.i,e.i,h.i),za(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=mf(gr(e),t),Fa(e,t,i,r,a,n,2)):s===2&&gf(e,t,i,r,a,n):Fa(gr(e),t,i,r,a,n,1);break}}}function pf(e){let t=e.prev,i=e,r=e.next;if(gt(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,h=r.y,c=Math.min(a,n,s),p=Math.min(o,l,h),u=Math.max(a,n,s),f=Math.max(o,l,h),_=r.next;for(;_!==t;){if(_.x>=c&&_.x<=u&&_.y>=p&&_.y<=f&&Ta(a,o,n,l,s,h,_.x,_.y)&&gt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function ff(e,t,i,r){let a=e.prev,n=e,s=e.next;if(gt(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,c=a.y,p=n.y,u=s.y,f=Math.min(o,l,h),_=Math.min(c,p,u),y=Math.max(o,l,h),m=Math.max(c,p,u),d=Go(f,_,t,i,r),M=Go(y,m,t,i,r),T=e.prevZ,v=e.nextZ;for(;T&&T.z>=d&&v&&v.z<=M;){if(T.x>=f&&T.x<=y&&T.y>=_&&T.y<=m&&T!==a&&T!==s&&Ta(o,c,l,p,h,u,T.x,T.y)&&gt(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=f&&v.x<=y&&v.y>=_&&v.y<=m&&v!==a&&v!==s&&Ta(o,c,l,p,h,u,v.x,v.y)&&gt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=d;){if(T.x>=f&&T.x<=y&&T.y>=_&&T.y<=m&&T!==a&&T!==s&&Ta(o,c,l,p,h,u,T.x,T.y)&&gt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=y&&v.y>=_&&v.y<=m&&v!==a&&v!==s&&Ta(o,c,l,p,h,u,v.x,v.y)&&gt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function mf(e,t){let i=e;do{let r=i.prev,a=i.next.next;!la(r,a)&&ru(r,i,i.next,a)&&Ba(r,a)&&Ba(a,r)&&(t.push(r.i,i.i,a.i),za(i),za(i.next),i=e=a),i=i.next}while(i!==e);return gr(i)}function gf(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Ef(s,o)){let l=au(s,o);s=gr(s,s.next),l=gr(l,l.next),Fa(s,t,i,r,a,n,0),Fa(l,t,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function vf(e,t,i,r){let a=[];for(let n=0,s=t.length;n<s;n++){let o=t[n]*r,l=n<s-1?t[n+1]*r:e.length,h=tu(e,o,l,r,!1);h===h.next&&(h.steiner=!0),a.push(Tf(h))}a.sort(_f);for(let n=0;n<a.length;n++)i=yf(a[n],i);return i}function _f(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let r=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);i=r-a}return i}function yf(e,t){let i=xf(e,t);if(!i)return t;let r=au(i,e);return gr(r,r.next),gr(i,i.next)}function xf(e,t){let i=t,r=e.x,a=e.y,n=-1/0,s;if(la(e,i))return i;do{if(la(e,i.next))return i.next;if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){let p=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(p<=r&&p>n&&(n=p,s=i.x<i.next.x?i:i.next,p===r))return s}i=i.next}while(i!==t);if(!s)return null;let o=s,l=s.x,h=s.y,c=1/0;i=s;do{if(r>=i.x&&i.x>=l&&r!==i.x&&iu(a<h?r:n,a,l,h,a<h?n:r,a,i.x,i.y)){let p=Math.abs(a-i.y)/(r-i.x);Ba(i,e)&&(p<c||p===c&&(i.x>s.x||i.x===s.x&&Mf(s,i)))&&(s=i,c=p)}i=i.next}while(i!==o);return s}function Mf(e,t){return gt(e.prev,e,t.prev)<0&&gt(t.next,e,e.next)<0}function bf(e,t,i,r){let a=e;do a.z===0&&(a.z=Go(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,Sf(a)}function Sf(e){let t,i=1;do{let r=e,a;e=null;let n=null;for(t=0;r;){t++;let s=r,o=0;for(let h=0;h<i&&(o++,s=s.nextZ,!!s);h++);let l=i;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(a=r,r=r.nextZ,o--):(a=s,s=s.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=s}n.nextZ=null,i*=2}while(t>1);return e}function Go(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Tf(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function iu(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function Ta(e,t,i,r,a,n,s,o){return!(e===s&&t===o)&&iu(e,t,i,r,a,n,s,o)}function Ef(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!wf(e,t)&&(Ba(e,t)&&Ba(t,e)&&Af(e,t)&&(gt(e.prev,e,t.prev)||gt(e,t.prev,t))||la(e,t)&&gt(e.prev,e,e.next)>0&&gt(t.prev,t,t.next)>0)}function gt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function la(e,t){return e.x===t.x&&e.y===t.y}function ru(e,t,i,r){let a=Rn(gt(e,t,i)),n=Rn(gt(e,t,r)),s=Rn(gt(i,r,e)),o=Rn(gt(i,r,t));return!!(a!==n&&s!==o||a===0&&An(e,i,t)||n===0&&An(e,r,t)||s===0&&An(i,e,r)||o===0&&An(i,t,r))}function An(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Rn(e){return e>0?1:e<0?-1:0}function wf(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&ru(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Ba(e,t){return gt(e.prev,e,e.next)<0?gt(e,t,e.next)>=0&&gt(e,e.prev,t)>=0:gt(e,t,e.prev)<0||gt(e,e.next,t)<0}function Af(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function au(e,t){let i=ko(e.i,e.x,e.y),r=ko(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function Nh(e,t,i,r){let a=ko(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function za(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function ko(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rf(e,t,i,r){let a=0;for(let n=t,s=i-r;n<i;n+=r)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}function Uh(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Oh(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}function If(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}function Bf(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}function Fh(e,t,i){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(r)===!0||i.has(a)===!0?!1:(i.add(r),i.add(a),!0)}function ha(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(Bh(a))a.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(Bh(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Bt(e){let t={};for(let i=0;i<e.length;i++){let r=ha(e[i]);for(let a in r)t[a]=r[a]}return t}function Bh(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Xf(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function _u(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qe.workingColorSpace}function Gr(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Xs(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function yu(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function im(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function rm(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=yu(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=im(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}function zh(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}function Gh(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}function pm(){this._document.hidden===!1&&this.reset()}function Wh(e,t){return e.distance-t.distance}function Vo(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)Vo(n[s],t,i,!0)}}function Xh(e,t,i,r){let a=Sm(r);switch(i){case Ac:return e*t;case Cc:return e*t/a.components*a.byteLength;case $o:return e*t/a.components*a.byteLength;case mr:return e*t*2/a.components*a.byteLength;case Ko:return e*t*2/a.components*a.byteLength;case Rc:return e*t*3/a.components*a.byteLength;case ti:return e*t*4/a.components*a.byteLength;case Jo:return e*t*4/a.components*a.byteLength;case Nn:case Un:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case On:case Fn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ho:case uo:return Math.max(e,16)*Math.max(t,8)/4;case lo:case co:return Math.max(e,8)*Math.max(t,8)/2;case po:case fo:case go:case vo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case mo:case kn:case _o:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case bo:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case So:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case To:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case wo:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ao:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Co:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Po:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Lo:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Io:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Do:case No:case Uo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Oo:case Fo:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Vn:case Bo:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Sm(e){switch(e){case $t:case Sc:return{byteLength:1,components:1};case La:case Tc:case _i:return{byteLength:2,components:1};case Yo:case Zo:return{byteLength:2,components:4};case vi:case qo:case fi:return{byteLength:4,components:1};case Ec:case wc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}function Mu(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Tm(e){let t=new WeakMap;function i(o,l){let h=o.array,c=o.usage,p=h.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,h,c),o.onUploadCallback();let f;if(h instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=e.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=e.SHORT;else if(h instanceof Uint32Array)f=e.UNSIGNED_INT;else if(h instanceof Int32Array)f=e.INT;else if(h instanceof Int8Array)f=e.BYTE;else if(h instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:p}}function r(o,l,h){let c=l.array,p=l.updateRanges;if(e.bindBuffer(h,o),p.length===0)e.bufferSubData(h,0,c);else{p.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<p.length;f++){let _=p[u],y=p[f];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,p[u]=y)}p.length=u+1;for(let f=0,_=p.length;f<_;f++){let y=p[f];e.bufferSubData(h,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}function sv(e,t,i,r,a,n){let s=new tt(0),o=a===!0?0:1,l,h,c=null,p=0,u=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let v=M.backgroundBlurriness>0;T=t.get(T,v)}return T}function _(M){let T=!1,v=f(M);v===null?m(s,o):v&&v.isColor&&(m(v,1),T=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,n):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function y(M,T){let v=f(T);v&&(v.isCubeTexture||v.mapping===Yn)?(h===void 0&&(h=new Ut(new Va(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:ha(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(nv.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(bu),h.material.toneMapped=Qe.getTransfer(v.colorSpace)!==nt,(c!==v||p!==v.version||u!==e.toneMapping)&&(h.material.needsUpdate=!0,c=v,p=v.version,u=e.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ut(new yr(2,2),new Ht({name:"BackgroundMaterial",uniforms:ha(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(v.colorSpace)!==nt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||p!==v.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,c=v,p=v.version,u=e.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,T){M.getRGB(Ln,_u(e)),i.buffers.color.setClear(Ln.r,Ln.g,Ln.b,T,n)}function d(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(M,T=1){s.set(M),o=T,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(s,o)},render:_,addToRenderList:y,dispose:d}}function ov(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=u(null),n=a,s=!1;function o(P,D,j,N,z){let $=!1,H=p(P,N,j,D);n!==H&&(n=H,h(n.object)),$=f(P,N,j,z),$&&_(P,N,j,z),z!==null&&t.update(z,e.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,v(P,D,j,N),z!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return e.createVertexArray()}function h(P){return e.bindVertexArray(P)}function c(P){return e.deleteVertexArray(P)}function p(P,D,j,N){let z=N.wireframe===!0,$=r[D.id];$===void 0&&($={},r[D.id]=$);let H=P.isInstancedMesh===!0?P.id:0,he=$[H];he===void 0&&(he={},$[H]=he);let q=he[j.id];q===void 0&&(q={},he[j.id]=q);let Z=q[z];return Z===void 0&&(Z=u(l()),q[z]=Z),Z}function u(P){let D=[],j=[],N=[];for(let z=0;z<i;z++)D[z]=0,j[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:j,attributeDivisors:N,object:P,attributes:{},index:null}}function f(P,D,j,N){let z=n.attributes,$=D.attributes,H=0,he=j.getAttributes();for(let q in he)if(he[q].location>=0){let Z=z[q],te=$[q];if(te===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),Z===void 0||Z.attribute!==te||te&&Z.data!==te.data)return!0;H++}return n.attributesNum!==H||n.index!==N}function _(P,D,j,N){let z={},$=D.attributes,H=0,he=j.getAttributes();for(let q in he)if(he[q].location>=0){let Z=$[q];Z===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));let te={};te.attribute=Z,Z&&Z.data&&(te.data=Z.data),z[q]=te,H++}n.attributes=z,n.attributesNum=H,n.index=N}function y(){let P=n.newAttributes;for(let D=0,j=P.length;D<j;D++)P[D]=0}function m(P){d(P,0)}function d(P,D){let j=n.newAttributes,N=n.enabledAttributes,z=n.attributeDivisors;j[P]=1,N[P]===0&&(e.enableVertexAttribArray(P),N[P]=1),z[P]!==D&&(e.vertexAttribDivisor(P,D),z[P]=D)}function M(){let P=n.newAttributes,D=n.enabledAttributes;for(let j=0,N=D.length;j<N;j++)D[j]!==P[j]&&(e.disableVertexAttribArray(j),D[j]=0)}function T(P,D,j,N,z,$,H){H===!0?e.vertexAttribIPointer(P,D,j,z,$):e.vertexAttribPointer(P,D,j,N,z,$)}function v(P,D,j,N){y();let z=N.attributes,$=j.getAttributes(),H=D.defaultAttributeValues;for(let he in $){let q=$[he];if(q.location>=0){let Z=z[he];if(Z===void 0&&(he==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),he==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){let te=Z.normalized,Oe=Z.itemSize,Ae=t.get(Z);if(Ae===void 0)continue;let it=Ae.buffer,re=Ae.type,k=Ae.bytesPerElement,ie=re===e.INT||re===e.UNSIGNED_INT||Z.gpuType===qo;if(Z.isInterleavedBufferAttribute){let K=Z.data,be=K.stride,Le=Z.offset;if(K.isInstancedInterleavedBuffer){for(let ce=0;ce<q.locationSize;ce++)d(q.location+ce,K.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ce=0;ce<q.locationSize;ce++)m(q.location+ce);e.bindBuffer(e.ARRAY_BUFFER,it);for(let ce=0;ce<q.locationSize;ce++)T(q.location+ce,Oe/q.locationSize,re,te,be*k,(Le+Oe/q.locationSize*ce)*k,ie)}else{if(Z.isInstancedBufferAttribute){for(let K=0;K<q.locationSize;K++)d(q.location+K,Z.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let K=0;K<q.locationSize;K++)m(q.location+K);e.bindBuffer(e.ARRAY_BUFFER,it);for(let K=0;K<q.locationSize;K++)T(q.location+K,Oe/q.locationSize,re,te,Oe*k,Oe/q.locationSize*K*k,ie)}}else if(H!==void 0){let te=H[he];if(te!==void 0)switch(te.length){case 2:e.vertexAttrib2fv(q.location,te);break;case 3:e.vertexAttrib3fv(q.location,te);break;case 4:e.vertexAttrib4fv(q.location,te);break;default:e.vertexAttrib1fv(q.location,te)}}}}M()}function E(){b();for(let P in r){let D=r[P];for(let j in D){let N=D[j];for(let z in N){let $=N[z];for(let H in $)c($[H].object),delete $[H];delete N[z]}}delete r[P]}}function w(P){if(r[P.id]===void 0)return;let D=r[P.id];for(let j in D){let N=D[j];for(let z in N){let $=N[z];for(let H in $)c($[H].object),delete $[H];delete N[z]}}delete r[P.id]}function A(P){for(let D in r){let j=r[D];for(let N in j){let z=j[N];if(z[P.id]===void 0)continue;let $=z[P.id];for(let H in $)c($[H].object),delete $[H];delete z[P.id]}}}function g(P){for(let D in r){let j=r[D],N=P.isInstancedMesh===!0?P.id:0,z=j[N];if(z!==void 0){for(let $ in z){let H=z[$];for(let he in H)c(H[he].object),delete H[he];delete z[$]}delete j[N],Object.keys(j).length===0&&delete r[D]}}}function b(){L(),s=!0,n!==a&&(n=a,h(n.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:b,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:g,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function lv(e,t,i){let r;function a(l){r=l}function n(l,h){e.drawArrays(r,l,h),i.update(h,r,1)}function s(l,h,c){c!==0&&(e.drawArraysInstanced(r,l,h,c),i.update(h,r,c))}function o(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,c);let p=0;for(let u=0;u<c;u++)p+=h[u];i.update(p,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function hv(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==ti&&r.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let g=A===_i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==$t&&A!==fi&&!g&&r.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(Be("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let p=i.logarithmicDepthBuffer===!0,u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&u===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),M=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:v,maxSamples:E,samples:w}}function cv(e){let t=this,i=null,r=0,a=!1,n=!1,s=new ki,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||r!==0||a;return a=u,r=p.length,f},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(p,u){i=c(p,u,0)},this.setState=function(p,u,f){let _=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,d=e.get(p);if(!a||_===null||_.length===0||n&&!m)n?c(null):h();else{let M=n?0:r,T=M*4,v=d.clippingState||null;l.value=v,v=c(_,u,T,f);for(let E=0;E!==T;++E)v[E]=i[E];d.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(p,u,f,_){let y=p!==null?p.length:0,m=null;if(y!==0){if(m=l.value,_!==!0||m===null){let d=f+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,v=f;T!==y;++T,v+=4)s.copy(p[T]).applyMatrix4(M,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function mv(e){let t=[],i=[],r=e,a=e-$r+1+uv;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let o=1/(s-2),l=-o,h=1+o,c=[l,l,h,l,h,h,l,l,h,h,l,h],p=6,u=6,f=3,_=new Float32Array(f*u*p),y=new Float32Array(f*u*p);for(let d=0;d<p;d++){let M=d%3*2/3-1,T=d>2?0:-1,v=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];_.set(v,f*u*d);for(let E=0;E<u;E++){let w=c[E*2]*2-1,A=c[E*2+1]*2-1;d===0?lr.set(1,A,w):d===1?lr.set(-w,1,-A):d===2?lr.set(-w,A,1):d===3?lr.set(-1,A,-w):d===4?lr.set(-w,-1,A):lr.set(w,A,-1),lr.toArray(y,(d*u+E)*f)}}let m=new yt;m.setAttribute("position",new gi(_,f)),m.setAttribute("outputDirection",new gi(y,f)),i.push(new Ut(m,null)),r>$r&&r--}return{lodMeshes:i,sizeLods:t}}function qh(e,t,i){let r=new ri(e,t,i);return r.texture.mapping=Yn,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Wr(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function gv(e,t,i){return new Ht({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kn(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function vv(e,t,i){return new Ht({name:"SphericalGaussianBlur",defines:{SAMPLES:dv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Kn(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Yh(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kn(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Zh(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Kn(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function _v(e){let t=new WeakMap,i=new WeakMap,r=null;function a(u,f=!1){return u==null?null:f?s(u):n(u)}function n(u){if(u&&u.isTexture){let f=u.mapping;if(f===gs||f===vs)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let y=new Su(_.height);return y.fromEquirectangularTexture(e,u),t.set(u,y),u.addEventListener("dispose",h),o(y.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let f=u.mapping,_=f===gs||f===vs,y=f===fr||f===na;if(_||y){let m=i.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return r===null&&(r=new Ho(e)),m=_?r.fromEquirectangular(u,m):r.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return _&&M&&M.height>0||y&&M&&l(M)?(r===null&&(r=new Ho(e)),m=_?r.fromEquirectangular(u):r.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",c),m.texture):null}}}return u}function o(u,f){return f===gs?u.mapping=fr:f===vs&&(u.mapping=na),u}function l(u){let f=0,_=6;for(let y=0;y<_;y++)u[y]!==void 0&&f++;return f===_}function h(u){let f=u.target;f.removeEventListener("dispose",h);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function c(u){let f=u.target;f.removeEventListener("dispose",c);let _=i.get(f);_!==void 0&&(i.delete(f),_.dispose())}function p(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:p}}function yv(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Kr("WebGLRenderer: "+r+" extension not supported."),a}}}function xv(e,t,i,r){let a={},n=new WeakMap;function s(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",s),delete a[u.id];let f=n.get(u);f&&(t.remove(f),n.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,i.memory.geometries++),u}function l(p){let u=p.attributes;for(let f in u)t.update(u[f],e.ARRAY_BUFFER)}function h(p){let u=[],f=p.index,_=p.attributes.position,y=0;if(_===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let T=0,v=M.length;T<v;T+=3){let E=M[T+0],w=M[T+1],A=M[T+2];u.push(E,w,w,A,A,E)}}else{let M=_.array;y=_.version;for(let T=0,v=M.length/3-1;T<v;T+=3){let E=T+0,w=T+1,A=T+2;u.push(E,w,w,A,A,E)}}let m=new(_.count>=65535?Uc:Nc)(u,1);m.version=y;let d=n.get(p);d&&t.remove(d),n.set(p,m)}function c(p){let u=n.get(p);if(u){let f=p.index;f!==null&&u.version<f.version&&h(p)}else h(p);return n.get(p)}return{get:o,update:l,getWireframeAttribute:c}}function Mv(e,t,i){let r;function a(p){r=p}let n,s;function o(p){n=p.type,s=p.bytesPerElement}function l(p,u){e.drawElements(r,u,n,p*s),i.update(u,r,1)}function h(p,u,f){f!==0&&(e.drawElementsInstanced(r,u,n,p*s,f),i.update(u,r,f))}function c(p,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,n,p,0,f);let _=0;for(let y=0;y<f;y++)_+=u[y];i.update(_,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function bv(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:Ge("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Sv(e,t,i){let r=new WeakMap,a=new pt;function n(s,o,l){let h=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=c!==void 0?c.length:0,u=r.get(o);if(u===void 0||u.count!==p){let f=function(){g.dispose(),r.delete(o),o.removeEventListener("dispose",f)};u!==void 0&&u.texture.dispose();let _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],v=0;_===!0&&(v=1),y===!0&&(v=2),m===!0&&(v=3);let E=o.attributes.position.count*v,w=1;E>t.maxTextureSize&&(w=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let A=new Float32Array(E*w*4*p),g=new Lc(A,E,w,p);g.type=fi,g.needsUpdate=!0;let b=v*4;for(let L=0;L<p;L++){let P=d[L],D=M[L],j=T[L],N=E*w*4*L;for(let z=0;z<P.count;z++){let $=z*b;_===!0&&(a.fromBufferAttribute(P,z),A[N+$+0]=a.x,A[N+$+1]=a.y,A[N+$+2]=a.z,A[N+$+3]=0),y===!0&&(a.fromBufferAttribute(D,z),A[N+$+4]=a.x,A[N+$+5]=a.y,A[N+$+6]=a.z,A[N+$+7]=0),m===!0&&(a.fromBufferAttribute(j,z),A[N+$+8]=a.x,A[N+$+9]=a.y,A[N+$+10]=a.z,A[N+$+11]=j.itemSize===4?a.w:1)}}u={count:p,texture:g,size:new ne(E,w)},r.set(o,u),o.addEventListener("dispose",f)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let f=0;for(let y=0;y<h.length;y++)f+=h[y];let _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:n}}function Tv(e,t,i,r,a){let n=new WeakMap;function s(h){let c=a.render.frame,p=h.geometry,u=t.get(h,p);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),n.get(h)!==c&&(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,e.ARRAY_BUFFER),n.set(h,c))),h.isSkinnedMesh){let f=h.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function o(){n=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),r.releaseStatesOfObject(c),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:s,dispose:o}}function wv(e,t,i,r,a,n){let s=new ri(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new yt;h.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ke([0,2,0,0,2,0],2));let c=new Zf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ut(h,c),u=new $n(-1,1,1,-1,0,1),f=null,_=null,y=!1,m,d=null,M=[],T=!1;this.setSize=function(v,E){s.setSize(v,E),o!==null&&o.setSize(v,E),l!==null&&l.setSize(v,E);for(let w=0;w<M.length;w++){let A=M[w];A.setSize&&A.setSize(v,E)}},this.setEffects=function(v){M=v,T=M.length>0&&M[0].isRenderPass===!0;let E=s.width,w=s.height;M.length>0&&o===null&&(o=new ri(E,w,{type:_i,depthBuffer:!1,stencilBuffer:!1}),l=new ri(E,w,{type:_i,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let g=M[A];g.setSize&&g.setSize(E,w)}},this.begin=function(v,E){if(y||v.toneMapping===mi&&M.length===0)return!1;if(d=E,E!==null){let w=E.width,A=E.height;(s.width!==w||s.height!==A)&&this.setSize(w,A)}return T===!1&&v.setRenderTarget(s),m=v.toneMapping,v.toneMapping=mi,!0},this.hasRenderPass=function(){return T},this.end=function(v,E){v.toneMapping=m,y=!0;let w=s,A=o;for(let g=0;g<M.length;g++){let b=M[g];b.enabled!==!1&&(b.render(v,A,w,E),b.needsSwap!==!1&&(w=A,A=A===o?l:o))}if(f!==v.outputColorSpace||_!==v.toneMapping){f=v.outputColorSpace,_=v.toneMapping,c.defines={},Qe.getTransfer(f)===nt&&(c.defines.SRGB_TRANSFER="");let g=Ev[_];g&&(c.defines[g]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(d),v.render(p,u),d=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),c.dispose()}}function ca(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=$h[a];if(n===void 0&&(n=new Float32Array(a),$h[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function Rt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Ct(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Jn(e,t){let i=Kh[t];i===void 0&&(i=new Int32Array(t),Kh[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Av(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Rv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rt(i,t))return;e.uniform2fv(this.addr,t),Ct(i,t)}}function Cv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Rt(i,t))return;e.uniform3fv(this.addr,t),Ct(i,t)}}function Pv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rt(i,t))return;e.uniform4fv(this.addr,t),Ct(i,t)}}function Lv(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Rt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ct(i,t)}else{if(Rt(i,r))return;ec.set(r),e.uniformMatrix2fv(this.addr,!1,ec),Ct(i,r)}}function Iv(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Rt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ct(i,t)}else{if(Rt(i,r))return;Qh.set(r),e.uniformMatrix3fv(this.addr,!1,Qh),Ct(i,r)}}function Dv(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Rt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ct(i,t)}else{if(Rt(i,r))return;Jh.set(r),e.uniformMatrix4fv(this.addr,!1,Jh),Ct(i,r)}}function Nv(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Uv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rt(i,t))return;e.uniform2iv(this.addr,t),Ct(i,t)}}function Ov(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rt(i,t))return;e.uniform3iv(this.addr,t),Ct(i,t)}}function Fv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rt(i,t))return;e.uniform4iv(this.addr,t),Ct(i,t)}}function Bv(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function zv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rt(i,t))return;e.uniform2uiv(this.addr,t),Ct(i,t)}}function Gv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rt(i,t))return;e.uniform3uiv(this.addr,t),Ct(i,t)}}function kv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rt(i,t))return;e.uniform4uiv(this.addr,t),Ct(i,t)}}function Vv(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(Wo.compareFunction=i.isReversedDepthBuffer()?el:Qo,n=Wo):n=Tu,i.setTexture2D(t||n,a)}function Hv(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||wu,a)}function Wv(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||Au,a)}function Xv(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Eu,a)}function jv(e){switch(e){case 5126:return Av;case 35664:return Rv;case 35665:return Cv;case 35666:return Pv;case 35674:return Lv;case 35675:return Iv;case 35676:return Dv;case 5124:case 35670:return Nv;case 35667:case 35671:return Uv;case 35668:case 35672:return Ov;case 35669:case 35673:return Fv;case 5125:return Bv;case 36294:return zv;case 36295:return Gv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return Xv}}function qv(e,t){e.uniform1fv(this.addr,t)}function Yv(e,t){let i=ca(t,this.size,2);e.uniform2fv(this.addr,i)}function Zv(e,t){let i=ca(t,this.size,3);e.uniform3fv(this.addr,i)}function $v(e,t){let i=ca(t,this.size,4);e.uniform4fv(this.addr,i)}function Kv(e,t){let i=ca(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Jv(e,t){let i=ca(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Qv(e,t){let i=ca(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function e_(e,t){e.uniform1iv(this.addr,t)}function t_(e,t){e.uniform2iv(this.addr,t)}function i_(e,t){e.uniform3iv(this.addr,t)}function r_(e,t){e.uniform4iv(this.addr,t)}function a_(e,t){e.uniform1uiv(this.addr,t)}function n_(e,t){e.uniform2uiv(this.addr,t)}function s_(e,t){e.uniform3uiv(this.addr,t)}function o_(e,t){e.uniform4uiv(this.addr,t)}function l_(e,t,i){let r=this.cache,a=t.length,n=Jn(i,a);Rt(r,n)||(e.uniform1iv(this.addr,n),Ct(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=Wo:s=Tu;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function h_(e,t,i){let r=this.cache,a=t.length,n=Jn(i,a);Rt(r,n)||(e.uniform1iv(this.addr,n),Ct(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||wu,n[s])}function c_(e,t,i){let r=this.cache,a=t.length,n=Jn(i,a);Rt(r,n)||(e.uniform1iv(this.addr,n),Ct(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||Au,n[s])}function u_(e,t,i){let r=this.cache,a=t.length,n=Jn(i,a);Rt(r,n)||(e.uniform1iv(this.addr,n),Ct(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||Eu,n[s])}function d_(e){switch(e){case 5126:return qv;case 35664:return Yv;case 35665:return Zv;case 35666:return $v;case 35674:return Kv;case 35675:return Jv;case 35676:return Qv;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return i_;case 35669:case 35673:return r_;case 5125:return a_;case 36294:return n_;case 36295:return s_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return u_}}function tc(e,t){e.seq.push(t),e.map[t.id]=t}function g_(e,t,i){let r=e.name,a=r.length;for(Ks.lastIndex=0;;){let n=Ks.exec(r),s=Ks.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){tc(i,h===void 0?new p_(o,e,t):new f_(o,e,t));break}else{let c=i.map[o];c===void 0&&(c=new m_(o),tc(i,c)),i=c}}}function ic(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}function y_(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}function x_(e){Qe._getMatrix(rc,Qe.workingColorSpace,e);let t=`mat3( ${rc.elements.map(i=>i.toFixed(4))} )`;switch(Qe.getTransfer(e)){case Xn:return[t,"LinearTransferOETF"];case nt:return[t,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function ac(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+y_(e.getShaderSource(t),s)}else return a}function M_(e,t){let i=x_(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function S_(e,t){let i=b_[t];return i===void 0?(Be("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function T_(){Qe.getLuminanceCoefficients(In);let e=In.x.toFixed(4),t=In.y.toFixed(4),i=In.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E_(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function w_(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function A_(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Ea(e){return e!==""}function nc(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Xo(e){return e.replace(R_,P_)}function P_(e,t){let i=qe[t];if(i===void 0){let r=C_.get(t);if(r!==void 0)i=qe[r],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xo(i)}function oc(e){return e.replace(L_,I_)}function I_(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function lc(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function N_(e){return D_[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function O_(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":U_[e.envMapMode]||"ENVMAP_TYPE_CUBE"}function B_(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":F_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}function G_(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":z_[e.combine]||"ENVMAP_BLENDING_NONE"}function k_(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function V_(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=N_(i),h=O_(i),c=B_(i),p=G_(i),u=k_(i),f=E_(i),_=w_(n),y=a.createProgram(),m,d,M=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(Ea).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(Ea).join(`
`),d.length>0&&(d+=`
`)):(m=[lc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),d=[lc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==mi?"#define TONE_MAPPING":"",i.toneMapping!==mi?qe.tonemapping_pars_fragment:"",i.toneMapping!==mi?S_("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,M_("linearToOutputTexel",i.outputColorSpace),T_(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ea).join(`
`)),s=Xo(s),s=nc(s,i),s=sc(s,i),o=Xo(o),o=nc(o,i),o=sc(o,i),s=oc(s),o=oc(o),i.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",i.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let T=M+m+s,v=M+d+o,E=ic(a,a.VERTEX_SHADER,T),w=ic(a,a.FRAGMENT_SHADER,v);a.attachShader(y,E),a.attachShader(y,w),i.index0AttributeName!==void 0?a.bindAttribLocation(y,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function A(P){if(e.debug.checkShaderErrors){let D=a.getProgramInfoLog(y)||"",j=a.getShaderInfoLog(E)||"",N=a.getShaderInfoLog(w)||"",z=D.trim(),$=j.trim(),H=N.trim(),he=!0,q=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(he=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,y,E,w);else{let Z=ac(a,E,"vertex"),te=ac(a,w,"fragment");Ge("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+Z+`
`+te)}else z!==""?Be("WebGLProgram: Program Info Log:",z):($===""||H==="")&&(q=!1);q&&(P.diagnostics={runnable:he,programLog:z,vertexShader:{log:$,prefix:m},fragmentShader:{log:H,prefix:d}})}a.deleteShader(E),a.deleteShader(w),g=new Gn(a,y),b=A_(a,y)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(y,v_)),L},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=__++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=w,this}function j_(e){return e===mr||e===kn||e===Vn}function q_(e,t,i,r,a,n){let s=new rl,o=new W_,l=new Set,h=[],c=new Map,p=r.logarithmicDepthBuffer,u=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return l.add(g),g===0?"uv":`uv${g}`}function y(g,b,L,P,D,j){let N=P.fog,z=D.geometry,$=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,he=t.get(g.envMap||$,H),q=he&&he.mapping===Yn?he.image.height:null,Z=f[g.type];g.precision!==null&&(u=r.getMaxPrecision(g.precision),u!==g.precision&&Be("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));let te=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Oe=te!==void 0?te.length:0,Ae=0;z.morphAttributes.position!==void 0&&(Ae=1),z.morphAttributes.normal!==void 0&&(Ae=2),z.morphAttributes.color!==void 0&&(Ae=3);let it,re,k,ie;if(Z){let Et=pi[Z];it=Et.vertexShader,re=Et.fragmentShader}else{it=g.vertexShader,re=g.fragmentShader;let Et=o.getVertexShaderStage(g),at=o.getFragmentShaderStage(g);o.update(g,Et,at),k=Et.id,ie=at.id}let K=e.getRenderTarget(),be=e.state.buffers.depth.getReversed(),Le=D.isInstancedMesh===!0,ce=D.isBatchedMesh===!0,Ve=!!g.map,J=!!g.matcap,Y=!!he,se=!!g.aoMap,ve=!!g.lightMap,ye=!!g.bumpMap&&g.wireframe===!1,Te=!!g.normalMap,De=!!g.displacementMap,We=!!g.emissiveMap,Xe=!!g.metalnessMap,I=!!g.roughnessMap,ct=g.anisotropy>0,Je=g.clearcoat>0,$e=g.dispersion>0,R=g.retroreflectivity>0,x=g.iridescence>0,U=g.sheen>0,W=g.transmission>0,ee=ct&&!!g.anisotropyMap,fe=Je&&!!g.clearcoatMap,me=Je&&!!g.clearcoatNormalMap,B=Je&&!!g.clearcoatRoughnessMap,ue=x&&!!g.iridescenceMap,_e=x&&!!g.iridescenceThicknessMap,Re=U&&!!g.sheenColorMap,le=U&&!!g.sheenRoughnessMap,Ne=!!g.specularMap,Ue=!!g.specularColorMap,He=!!g.specularIntensityMap,rt=W&&!!g.transmissionMap,F=W&&!!g.thicknessMap,Q=!!g.gradientMap,ae=!!g.alphaMap,Se=g.alphaTest>0,Ce=!!g.alphaHash,oe=!!g.extensions,Me=mi;g.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Me=e.toneMapping);let ze={shaderID:Z,shaderType:g.type,shaderName:g.name,vertexShader:it,fragmentShader:re,defines:g.defines,customVertexShaderID:k,customFragmentShaderID:ie,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:ce,batchingColor:ce&&D._colorsTexture!==null,instancing:Le,instancingColor:Le&&D.instanceColor!==null,instancingMorph:Le&&D.morphTexture!==null,outputColorSpace:K===null?e.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ve,matcap:J,envMap:Y,envMapMode:Y&&he.mapping,envMapCubeUVHeight:q,aoMap:se,lightMap:ve,bumpMap:ye,normalMap:Te,displacementMap:De,emissiveMap:We,normalMapObjectSpace:Te&&g.normalMapType===jd,normalMapTangentSpace:Te&&g.normalMapType===ch,packedNormalMap:Te&&g.normalMapType===ch&&j_(g.normalMap.format),metalnessMap:Xe,roughnessMap:I,anisotropy:ct,anisotropyMap:ee,clearcoat:Je,clearcoatMap:fe,clearcoatNormalMap:me,clearcoatRoughnessMap:B,dispersion:$e,retroreflection:R,iridescence:x,iridescenceMap:ue,iridescenceThicknessMap:_e,sheen:U,sheenColorMap:Re,sheenRoughnessMap:le,specularMap:Ne,specularColorMap:Ue,specularIntensityMap:He,transmission:W,transmissionMap:rt,thicknessMap:F,gradientMap:Q,opaque:g.transparent===!1&&g.blending===wa&&g.alphaToCoverage===!1,alphaMap:ae,alphaTest:Se,alphaHash:Ce,combine:g.combine,mapUv:Ve&&_(g.map.channel),aoMapUv:se&&_(g.aoMap.channel),lightMapUv:ve&&_(g.lightMap.channel),bumpMapUv:ye&&_(g.bumpMap.channel),normalMapUv:Te&&_(g.normalMap.channel),displacementMapUv:De&&_(g.displacementMap.channel),emissiveMapUv:We&&_(g.emissiveMap.channel),metalnessMapUv:Xe&&_(g.metalnessMap.channel),roughnessMapUv:I&&_(g.roughnessMap.channel),anisotropyMapUv:ee&&_(g.anisotropyMap.channel),clearcoatMapUv:fe&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:me&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:le&&_(g.sheenRoughnessMap.channel),specularMapUv:Ne&&_(g.specularMap.channel),specularColorMapUv:Ue&&_(g.specularColorMap.channel),specularIntensityMapUv:He&&_(g.specularIntensityMap.channel),transmissionMapUv:rt&&_(g.transmissionMap.channel),thicknessMapUv:F&&_(g.thicknessMap.channel),alphaMapUv:ae&&_(g.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Te||ct),vertexNormals:!!z.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Ve||ae),fog:!!N,useFog:g.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||z.attributes.normal===void 0&&Te===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:be,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Ae,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:Ve&&g.map.isVideoTexture===!0&&Qe.getTransfer(g.map.colorSpace)===nt,decodeVideoTextureEmissive:We&&g.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(g.emissiveMap.colorSpace)===nt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ri,flipSided:g.side===Vt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:oe&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&g.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function m(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let L in g.defines)b.push(L),b.push(g.defines[L]);return g.isRawShaderMaterial===!1&&(d(b,g),M(b,g),b.push(e.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function d(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function M(g,b){s.disableAll(),b.instancing&&s.enable(0),b.instancingColor&&s.enable(1),b.instancingMorph&&s.enable(2),b.matcap&&s.enable(3),b.envMap&&s.enable(4),b.normalMapObjectSpace&&s.enable(5),b.normalMapTangentSpace&&s.enable(6),b.clearcoat&&s.enable(7),b.iridescence&&s.enable(8),b.alphaTest&&s.enable(9),b.vertexColors&&s.enable(10),b.vertexAlphas&&s.enable(11),b.vertexUv1s&&s.enable(12),b.vertexUv2s&&s.enable(13),b.vertexUv3s&&s.enable(14),b.vertexTangents&&s.enable(15),b.anisotropy&&s.enable(16),b.alphaHash&&s.enable(17),b.batching&&s.enable(18),b.dispersion&&s.enable(19),b.retroreflection&&s.enable(24),b.batchingColor&&s.enable(20),b.gradientMap&&s.enable(21),b.packedNormalMap&&s.enable(22),b.vertexNormals&&s.enable(23),g.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.reversedDepthBuffer&&s.enable(4),b.skinning&&s.enable(5),b.morphTargets&&s.enable(6),b.morphNormals&&s.enable(7),b.morphColors&&s.enable(8),b.premultipliedAlpha&&s.enable(9),b.shadowMapEnabled&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.decodeVideoTextureEmissive&&s.enable(20),b.alphaToCoverage&&s.enable(21),b.numLightProbeGrids>0&&s.enable(22),b.hasPositionAttribute&&s.enable(23),g.push(s.mask)}function T(g){let b=f[g.type],L;if(b){let P=pi[b];L=jf.clone(P.uniforms)}else L=g.uniforms;return L}function v(g,b){let L=c.get(b);return L!==void 0?++L.usedTimes:(L=new V_(e,b,g,a),h.push(L),c.set(b,L)),L}function E(g){if(--g.usedTimes===0){let b=h.indexOf(g);h[b]=h[h.length-1],h.pop(),c.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function A(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:T,acquireProgram:v,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:A}}function Y_(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function Z_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function hc(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function cc(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,_,y,m,d){let M=e[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:_,materialVariant:s(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:d},e[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=_,M.materialVariant=s(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=m,M.group=d),t++,M}function l(u,f,_,y,m,d,M){M.reversedDepth===!0&&(m=-m);let T=o(u,f,_,y,m,d);_.transmission>0?r.push(T):_.transparent===!0?a.push(T):i.push(T)}function h(u,f,_,y,m,d){let M=o(u,f,_,y,m,d);_.transmission>0?r.unshift(M):_.transparent===!0?a.unshift(M):i.unshift(M)}function c(u,f){i.length>1&&i.sort(u||Z_),r.length>1&&r.sort(f||hc),a.length>1&&a.sort(f||hc)}function p(){for(let u=t,f=e.length;u<f;u++){let _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:h,finish:p,sort:c}}function $_(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new cc,e.set(r,[s])):a>=n.length?(s=new cc,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function K_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new C,color:new tt};break;case"SpotLight":i={position:new C,direction:new C,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new C,color:new tt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new C,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":i={color:new tt,position:new C,halfWidth:new C,halfHeight:new C};break}return e[t.id]=i,i}}}function J_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}function ey(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function ty(e){let t=new K_,i=J_(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new C);let a=new C,n=new Ye,s=new Ye;function o(h){let c=0,p=0,u=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let f=0,_=0,y=0,m=0,d=0,M=0,T=0,v=0,E=0,w=0,A=0,g=0,b=0,L=0;h.sort(ey);for(let D=0,j=h.length;D<j;D++){let N=h[D],z=N.color,$=N.intensity,H=N.distance,he=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===mr?he=N.shadow.map.texture:he=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)c+=z.r*$,p+=z.g*$,u+=z.b*$;else if(N.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(N.sh.coefficients[q],$);L++}else if(N.isSunLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Z=N.shadow,te=i.get(N);te.shadowIntensity=Z.intensity,te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),r.sunShadow[_]=te,r.sunShadowMap[_]=he;let Oe=Z.getViewportCount();for(let Ae=0;Ae<Oe;Ae++)r.sunShadowMatrix[y+Ae]=Z.getMatrix(Ae),r.sunShadowCascade[y+Ae]=Z._cascadeData[Ae];y+=Oe,_++}r.sun[f]=q,f++}else if(N.isDirectionalLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Z=N.shadow,te=i.get(N);te.shadowIntensity=Z.intensity,te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,r.directionalShadow[m]=te,r.directionalShadowMap[m]=he,r.directionalShadowMatrix[m]=N.shadow.matrix,E++}r.directional[m]=q,m++}else if(N.isSpotLight){let q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(z).multiplyScalar($),q.distance=H,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,r.spot[M]=q;let Z=N.shadow;if(N.map&&(r.spotLightMap[g]=N.map,g++,Z.updateMatrices(N),N.castShadow&&b++),r.spotLightMatrix[M]=Z.matrix,N.castShadow){let te=i.get(N);te.shadowIntensity=Z.intensity,te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,r.spotShadow[M]=te,r.spotShadowMap[M]=he,A++}M++}else if(N.isRectAreaLight){let q=t.get(N);q.color.copy(z).multiplyScalar($),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),r.rectArea[T]=q,T++}else if(N.isPointLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let Z=N.shadow,te=i.get(N);te.shadowIntensity=Z.intensity,te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,te.shadowCameraNear=Z.camera.near,te.shadowCameraFar=Z.camera.far,r.pointShadow[d]=te,r.pointShadowMap[d]=he,r.pointShadowMatrix[d]=N.shadow.matrix,w++}r.point[d]=q,d++}else if(N.isHemisphereLight){let q=t.get(N);q.skyColor.copy(N.color).multiplyScalar($),q.groundColor.copy(N.groundColor).multiplyScalar($),r.hemi[v]=q,v++}}T>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=p,r.ambient[2]=u;let P=r.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==d||P.spotLength!==M||P.rectAreaLength!==T||P.hemiLength!==v||P.numSunShadows!==_||P.numDirectionalShadows!==E||P.numPointShadows!==w||P.numSpotShadows!==A||P.numSpotMaps!==g||P.numLightProbes!==L)&&(r.sun.length=f,r.directional.length=m,r.spot.length=M,r.rectArea.length=T,r.point.length=d,r.hemi.length=v,r.sunShadow.length=_,r.sunShadowMap.length=_,r.sunShadowMatrix.length=y,r.sunShadowCascade.length=y,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.directionalShadowMatrix.length=E,r.pointShadow.length=w,r.pointShadowMap.length=w,r.pointShadowMatrix.length=w,r.spotShadow.length=A,r.spotShadowMap.length=A,r.spotLightMatrix.length=A+g-b,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=L,P.sunLength=f,P.directionalLength=m,P.pointLength=d,P.spotLength=M,P.rectAreaLength=T,P.hemiLength=v,P.numSunShadows=_,P.numDirectionalShadows=E,P.numPointShadows=w,P.numSpotShadows=A,P.numSpotMaps=g,P.numLightProbes=L,r.version=Q_++)}function l(h,c){let p=0,u=0,f=0,_=0,y=0,m=0,d=c.matrixWorldInverse;for(let M=0,T=h.length;M<T;M++){let v=h[M];if(v.isSunLight){let E=r.sun[p];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(d),p++}else if(v.isDirectionalLight){let E=r.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(d),u++}else if(v.isSpotLight){let E=r.spot[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(d),_++}else if(v.isRectAreaLight){let E=r.rectArea[y];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(d),s.identity(),n.copy(v.matrixWorld),n.premultiply(d),s.extractRotation(n),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),y++}else if(v.isPointLight){let E=r.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(d),f++}else if(v.isHemisphereLight){let E=r.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:r}}function uc(e){let t=new ty(e),i=[],r=[],a=[];function n(u){p.camera=u,i.length=0,r.length=0,a.length=0}function s(u){i.push(u)}function o(u){r.push(u)}function l(u){a.push(u)}function h(){t.setup(i)}function c(u){t.setupView(i,u)}let p={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:p,setupLights:h,setupLightsView:c,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function iy(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new uc(e),t.set(a,[o])):n>=s.length?(o=new uc(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}function oy(e,t,i){let r=new Ua,a=new ne,n=new ne,s=new pt,o=new $f,l=new Kf,h={},c=i.maxTextureSize,p={[pr]:Vt,[Vt]:pr,[Ri]:Ri},u=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:ry,fragmentShader:ay}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new yt;_.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ut(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dn;let d=this.type;this.render=function(w,A,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Sd&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Dn);let b=e.getRenderTarget(),L=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),D=e.state;D.setBlending(Pi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let j=d!==this.type;j&&A.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(z=>z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,z=w.length;N<z;N++){let $=w[N],H=$.shadow;if(H===void 0){Be("WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);let he=H.getFrameExtents();a.multiply(he),n.copy(H.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/he.x),a.x=n.x*he.x,H.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/he.y),a.y=n.y*he.y,H.mapSize.y=n.y));let q=e.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||j===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ba){if($.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ri(a.x,a.y,{format:mr,type:_i,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),H.map.texture.name=$.name+".shadowMap",H.map.depthTexture=new Oa(a.x,a.y,fi),H.map.depthTexture.name=$.name+".shadowMapDepth",H.map.depthTexture.format=Ii,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=It,H.map.depthTexture.magFilter=It}else $.isPointLight?(H.map=new Su(a.x),H.map.depthTexture=new qp(a.x,vi)):(H.map=new ri(a.x,a.y),H.map.depthTexture=new Oa(a.x,a.y,vi)),H.map.depthTexture.name=$.name+".shadowMap",H.map.depthTexture.format=Ii,this.type===Dn?(H.map.depthTexture.compareFunction=q?el:Qo,H.map.depthTexture.minFilter=Lt,H.map.depthTexture.magFilter=Lt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=It,H.map.depthTexture.magFilter=It);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==a.x||H.map.height!==a.y)&&H.map.setSize(a.x,a.y);let Z=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();$.isPointLight!==!0&&H.updateMatrices($,g);for(let te=0;te<Z;te++){let Oe=H.getCamera(te);if($.isPointLight){let Ae=H.camera,it=H.matrix,re=$.distance||Ae.far;re!==Ae.far&&(Ae.far=re,Ae.updateProjectionMatrix()),Ma.setFromMatrixPosition($.matrixWorld),Ae.position.copy(Ma),Js.copy(Ae.position),Js.add(ny[te]),Ae.up.copy(sy[te]),Ae.lookAt(Js),Ae.updateMatrixWorld(),it.makeTranslation(-Ma.x,-Ma.y,-Ma.z),dc.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),H._frustum.setFromProjectionMatrix(dc,Ae.coordinateSystem,Ae.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)e.setRenderTarget(H.map,te),e.clear();else{te===0&&(e.setRenderTarget(H.map),e.clear());let Ae=H.getViewport(te);s.set(n.x*Ae.x,n.y*Ae.y,n.x*Ae.z,n.y*Ae.w),D.viewport(s)}r=H.getFrustum(te),v(A,g,Oe,$,this.type)}H.isPointLightShadow!==!0&&this.type===ba&&M(H,g),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,e.setRenderTarget(b,L,P)};function M(w,A){let g=t.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new ri(a.x,a.y,{format:mr,type:_i}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(A,null,g,u,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(A,null,g,f,y,null)}function T(w,A,g,b){let L=null,P=g.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)L=P;else if(L=g.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=L.uuid,j=A.uuid,N=h[D];N===void 0&&(N={},h[D]=N);let z=N[j];z===void 0&&(z=L.clone(),N[j]=z,A.addEventListener("dispose",E)),L=z}if(L.visible=A.visible,L.wireframe=A.wireframe,b===ba?L.side=A.shadowSide!==null?A.shadowSide:A.side:L.side=A.shadowSide!==null?A.shadowSide:p[A.side],L.alphaMap=A.alphaMap,L.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,L.map=A.map,L.clipShadows=A.clipShadows,L.clippingPlanes=A.clippingPlanes,L.clipIntersection=A.clipIntersection,L.displacementMap=A.displacementMap,L.displacementScale=A.displacementScale,L.displacementBias=A.displacementBias,L.wireframeLinewidth=A.wireframeLinewidth,L.linewidth=A.linewidth,g.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let D=e.properties.get(L);D.light=g}return L}function v(w,A,g,b,L){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===ba)&&(!w.frustumCulled||w.intersectsFrustum(r))){w.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,w.matrixWorld);let D=t.update(w),j=w.material;if(Array.isArray(j)){let N=D.groups;for(let z=0,$=N.length;z<$;z++){let H=N[z],he=j[H.materialIndex];if(he&&he.visible){let q=T(w,he,b,L);w.onBeforeShadow(e,w,A,g,D,q,H),e.renderBufferDirect(g,null,D,q,w,H),w.onAfterShadow(e,w,A,g,D,q,H)}}}else if(j.visible){let N=T(w,j,b,L);w.onBeforeShadow(e,w,A,g,D,N,null),e.renderBufferDirect(g,null,D,N,w,null),w.onAfterShadow(e,w,A,g,D,N,null)}}let P=w.children;for(let D=0,j=P.length;D<j;D++)v(P[D],A,g,b,L)}function E(w){w.target.removeEventListener("dispose",E);for(let A in h){let g=h[A],b=w.target.uuid;b in g&&(g[b].dispose(),delete g[b])}}}function ly(e,t){function i(){let F=!1,Q=new pt,ae=null,Se=new pt(0,0,0,0);return{setMask:function(Ce){ae!==Ce&&!F&&(e.colorMask(Ce,Ce,Ce,Ce),ae=Ce)},setLocked:function(Ce){F=Ce},setClear:function(Ce,oe,Me,ze,Et){Et===!0&&(Ce*=ze,oe*=ze,Me*=ze),Q.set(Ce,oe,Me,ze),Se.equals(Q)===!1&&(e.clearColor(Ce,oe,Me,ze),Se.copy(Q))},reset:function(){F=!1,ae=null,Se.set(-1,0,0,0)}}}function r(){let F=!1,Q=!1,ae=null,Se=null,Ce=null;return{setReversed:function(oe){if(Q!==oe){let Me=t.get("EXT_clip_control");oe?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),Q=oe;let ze=Ce;Ce=null,this.setClear(ze)}},getReversed:function(){return Q},setTest:function(oe){oe?K(e.DEPTH_TEST):be(e.DEPTH_TEST)},setMask:function(oe){ae!==oe&&!F&&(e.depthMask(oe),ae=oe)},setFunc:function(oe){if(Q&&(oe=np[oe]),Se!==oe){switch(oe){case Qs:e.depthFunc(e.NEVER);break;case eo:e.depthFunc(e.ALWAYS);break;case to:e.depthFunc(e.LESS);break;case Pa:e.depthFunc(e.LEQUAL);break;case io:e.depthFunc(e.EQUAL);break;case ro:e.depthFunc(e.GEQUAL);break;case ao:e.depthFunc(e.GREATER);break;case no:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Se=oe}},setLocked:function(oe){F=oe},setClear:function(oe){Ce!==oe&&(Ce=oe,Q&&(oe=1-oe),e.clearDepth(oe))},reset:function(){F=!1,ae=null,Se=null,Ce=null,Q=!1}}}function a(){let F=!1,Q=null,ae=null,Se=null,Ce=null,oe=null,Me=null,ze=null,Et=null;return{setTest:function(at){F||(at?K(e.STENCIL_TEST):be(e.STENCIL_TEST))},setMask:function(at){Q!==at&&!F&&(e.stencilMask(at),Q=at)},setFunc:function(at,si,Mi){(ae!==at||Se!==si||Ce!==Mi)&&(e.stencilFunc(at,si,Mi),ae=at,Se=si,Ce=Mi)},setOp:function(at,si,Mi){(oe!==at||Me!==si||ze!==Mi)&&(e.stencilOp(at,si,Mi),oe=at,Me=si,ze=Mi)},setLocked:function(at){F=at},setClear:function(at){Et!==at&&(e.clearStencil(at),Et=at)},reset:function(){F=!1,Q=null,ae=null,Se=null,Ce=null,oe=null,Me=null,ze=null,Et=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,h=new WeakMap,c={},p={},u={},f=new WeakMap,_=[],y=null,m=!1,d=null,M=null,T=null,v=null,E=null,w=null,A=null,g=new tt(0,0,0),b=0,L=!1,P=null,D=null,j=null,N=null,z=null,$=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,he=0,q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=he>=1):q.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=he>=2);let Z=null,te={},Oe=e.getParameter(e.SCISSOR_BOX),Ae=e.getParameter(e.VIEWPORT),it=new pt().fromArray(Oe),re=new pt().fromArray(Ae);function k(F,Q,ae,Se){let Ce=new Uint8Array(4),oe=e.createTexture();e.bindTexture(F,oe),e.texParameteri(F,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(F,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Me=0;Me<ae;Me++)F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY?e.texImage3D(Q,0,e.RGBA,1,1,Se,0,e.RGBA,e.UNSIGNED_BYTE,Ce):e.texImage2D(Q+Me,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Ce);return oe}let ie={};ie[e.TEXTURE_2D]=k(e.TEXTURE_2D,e.TEXTURE_2D,1),ie[e.TEXTURE_CUBE_MAP]=k(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[e.TEXTURE_2D_ARRAY]=k(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ie[e.TEXTURE_3D]=k(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),K(e.DEPTH_TEST),s.setFunc(Pa),ye(!1),Te(ih),K(e.CULL_FACE),se(Pi);function K(F){c[F]!==!0&&(e.enable(F),c[F]=!0)}function be(F){c[F]!==!1&&(e.disable(F),c[F]=!1)}function Le(F,Q){return u[F]!==Q?(e.bindFramebuffer(F,Q),u[F]=Q,F===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=Q),F===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=Q),!0):!1}function ce(F,Q){let ae=_,Se=!1;if(F){ae=f.get(Q),ae===void 0&&(ae=[],f.set(Q,ae));let Ce=F.textures;if(ae.length!==Ce.length||ae[0]!==e.COLOR_ATTACHMENT0){for(let oe=0,Me=Ce.length;oe<Me;oe++)ae[oe]=e.COLOR_ATTACHMENT0+oe;ae.length=Ce.length,Se=!0}}else ae[0]!==e.BACK&&(ae[0]=e.BACK,Se=!0);Se&&e.drawBuffers(ae)}function Ve(F){return y!==F?(e.useProgram(F),y=F,!0):!1}let J={[Xr]:e.FUNC_ADD,[Ed]:e.FUNC_SUBTRACT,[wd]:e.FUNC_REVERSE_SUBTRACT};J[Ad]=e.MIN,J[Rd]=e.MAX;let Y={[Cd]:e.ZERO,[Pd]:e.ONE,[Ld]:e.SRC_COLOR,[pc]:e.SRC_ALPHA,[Fd]:e.SRC_ALPHA_SATURATE,[Ud]:e.DST_COLOR,[Dd]:e.DST_ALPHA,[Id]:e.ONE_MINUS_SRC_COLOR,[fc]:e.ONE_MINUS_SRC_ALPHA,[Od]:e.ONE_MINUS_DST_COLOR,[Nd]:e.ONE_MINUS_DST_ALPHA,[Bd]:e.CONSTANT_COLOR,[zd]:e.ONE_MINUS_CONSTANT_COLOR,[Gd]:e.CONSTANT_ALPHA,[kd]:e.ONE_MINUS_CONSTANT_ALPHA};function se(F,Q,ae,Se,Ce,oe,Me,ze,Et,at){if(F===Pi){m===!0&&(be(e.BLEND),m=!1);return}if(m===!1&&(K(e.BLEND),m=!0),F!==Td){if(F!==d||at!==L){if((M!==Xr||E!==Xr)&&(e.blendEquation(e.FUNC_ADD),M=Xr,E=Xr),at)switch(F){case wa:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case rh:e.blendFunc(e.ONE,e.ONE);break;case ah:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case nh:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ge("WebGLState: Invalid blending: ",F);break}else switch(F){case wa:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case rh:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case ah:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nh:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",F);break}T=null,v=null,w=null,A=null,g.set(0,0,0),b=0,d=F,L=at}return}Ce=Ce||Q,oe=oe||ae,Me=Me||Se,(Q!==M||Ce!==E)&&(e.blendEquationSeparate(J[Q],J[Ce]),M=Q,E=Ce),(ae!==T||Se!==v||oe!==w||Me!==A)&&(e.blendFuncSeparate(Y[ae],Y[Se],Y[oe],Y[Me]),T=ae,v=Se,w=oe,A=Me),(ze.equals(g)===!1||Et!==b)&&(e.blendColor(ze.r,ze.g,ze.b,Et),g.copy(ze),b=Et),d=F,L=!1}function ve(F,Q){F.side===Ri?be(e.CULL_FACE):K(e.CULL_FACE);let ae=F.side===Vt;Q&&(ae=!ae),ye(ae),F.blending===wa&&F.transparent===!1?se(Pi):se(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),n.setMask(F.colorWrite);let Se=F.stencilWrite;o.setTest(Se),Se&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),We(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?K(e.SAMPLE_ALPHA_TO_COVERAGE):be(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(F){P!==F&&(F?e.frontFace(e.CW):e.frontFace(e.CCW),P=F)}function Te(F){F!==Md?(K(e.CULL_FACE),F!==D&&(F===ih?e.cullFace(e.BACK):F===bd?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):be(e.CULL_FACE),D=F}function De(F){F!==j&&(H&&e.lineWidth(F),j=F)}function We(F,Q,ae){F?(K(e.POLYGON_OFFSET_FILL),(N!==Q||z!==ae)&&(N=Q,z=ae,s.getReversed()&&(Q=-Q),e.polygonOffset(Q,ae))):be(e.POLYGON_OFFSET_FILL)}function Xe(F){F?K(e.SCISSOR_TEST):be(e.SCISSOR_TEST)}function I(F){F===void 0&&(F=e.TEXTURE0+$-1),Z!==F&&(e.activeTexture(F),Z=F)}function ct(F,Q,ae){ae===void 0&&(Z===null?ae=e.TEXTURE0+$-1:ae=Z);let Se=te[ae];Se===void 0&&(Se={type:void 0,texture:void 0},te[ae]=Se),(Se.type!==F||Se.texture!==Q)&&(Z!==ae&&(e.activeTexture(ae),Z=ae),e.bindTexture(F,Q||ie[F]),Se.type=F,Se.texture=Q)}function Je(){let F=te[Z];F!==void 0&&F.type!==void 0&&(e.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function $e(){try{e.compressedTexImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function R(){try{e.compressedTexImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function x(){try{e.texSubImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function U(){try{e.texSubImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function W(){try{e.compressedTexSubImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function ee(){try{e.compressedTexSubImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function fe(){try{e.texStorage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function me(){try{e.texStorage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function B(){try{e.texImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function ue(){try{e.texImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function _e(F){return p[F]!==void 0?p[F]:e.getParameter(F)}function Re(F,Q){p[F]!==Q&&(e.pixelStorei(F,Q),p[F]=Q)}function le(F){it.equals(F)===!1&&(e.scissor(F.x,F.y,F.z,F.w),it.copy(F))}function Ne(F){re.equals(F)===!1&&(e.viewport(F.x,F.y,F.z,F.w),re.copy(F))}function Ue(F,Q){let ae=h.get(Q);ae===void 0&&(ae=new WeakMap,h.set(Q,ae));let Se=ae.get(F);Se===void 0&&(Se=e.getUniformBlockIndex(Q,F.name),ae.set(F,Se))}function He(F,Q){let ae=h.get(Q).get(F);l.get(Q)!==ae&&(e.uniformBlockBinding(Q,ae,F.__bindingPointIndex),l.set(Q,ae))}function rt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),c={},p={},Z=null,te={},u={},f=new WeakMap,_=[],y=null,m=!1,d=null,M=null,T=null,v=null,E=null,w=null,A=null,g=new tt(0,0,0),b=0,L=!1,P=null,D=null,j=null,N=null,z=null,it.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:K,disable:be,bindFramebuffer:Le,drawBuffers:ce,useProgram:Ve,setBlending:se,setMaterial:ve,setFlipSided:ye,setCullFace:Te,setLineWidth:De,setPolygonOffset:We,setScissorTest:Xe,activeTexture:I,bindTexture:ct,unbindTexture:Je,compressedTexImage2D:$e,compressedTexImage3D:R,texImage2D:B,texImage3D:ue,pixelStorei:Re,getParameter:_e,updateUBOMapping:Ue,uniformBlockBinding:He,texStorage2D:fe,texStorage3D:me,texSubImage2D:x,texSubImage3D:U,compressedTexSubImage2D:W,compressedTexSubImage3D:ee,scissor:le,viewport:Ne,reset:rt}}function hy(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ne,c=new WeakMap,p=new Set,u,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,x){return _?new OffscreenCanvas(R,x):Da("canvas")}function m(R,x,U){let W=1,ee=$e(R);if((ee.width>U||ee.height>U)&&(W=U/Math.max(ee.width,ee.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let fe=Math.floor(W*ee.width),me=Math.floor(W*ee.height);u===void 0&&(u=y(fe,me));let B=x?y(fe,me):u;return B.width=fe,B.height=me,B.getContext("2d").drawImage(R,0,0,fe,me),Be("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+fe+"x"+me+")."),B}else return"data"in R&&Be("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function d(R){return R.generateMipmaps}function M(R){e.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?e.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(R,x,U,W,ee,fe=!1){if(R!==null){if(e[R]!==void 0)return e[R];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let me;W&&(me=t.get("EXT_texture_norm16"),me||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let B=x;if(x===e.RED&&(U===e.FLOAT&&(B=e.R32F),U===e.HALF_FLOAT&&(B=e.R16F),U===e.UNSIGNED_BYTE&&(B=e.R8),U===e.UNSIGNED_SHORT&&me&&(B=me.R16_EXT),U===e.SHORT&&me&&(B=me.R16_SNORM_EXT)),x===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.R8UI),U===e.UNSIGNED_SHORT&&(B=e.R16UI),U===e.UNSIGNED_INT&&(B=e.R32UI),U===e.BYTE&&(B=e.R8I),U===e.SHORT&&(B=e.R16I),U===e.INT&&(B=e.R32I)),x===e.RG&&(U===e.FLOAT&&(B=e.RG32F),U===e.HALF_FLOAT&&(B=e.RG16F),U===e.UNSIGNED_BYTE&&(B=e.RG8),U===e.UNSIGNED_SHORT&&me&&(B=me.RG16_EXT),U===e.SHORT&&me&&(B=me.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.RG8UI),U===e.UNSIGNED_SHORT&&(B=e.RG16UI),U===e.UNSIGNED_INT&&(B=e.RG32UI),U===e.BYTE&&(B=e.RG8I),U===e.SHORT&&(B=e.RG16I),U===e.INT&&(B=e.RG32I)),x===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.RGB8UI),U===e.UNSIGNED_SHORT&&(B=e.RGB16UI),U===e.UNSIGNED_INT&&(B=e.RGB32UI),U===e.BYTE&&(B=e.RGB8I),U===e.SHORT&&(B=e.RGB16I),U===e.INT&&(B=e.RGB32I)),x===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(B=e.RGBA16UI),U===e.UNSIGNED_INT&&(B=e.RGBA32UI),U===e.BYTE&&(B=e.RGBA8I),U===e.SHORT&&(B=e.RGBA16I),U===e.INT&&(B=e.RGBA32I)),x===e.RGB&&(U===e.UNSIGNED_SHORT&&me&&(B=me.RGB16_EXT),U===e.SHORT&&me&&(B=me.RGB16_SNORM_EXT),U===e.UNSIGNED_INT_5_9_9_9_REV&&(B=e.RGB9_E5),U===e.UNSIGNED_INT_10F_11F_11F_REV&&(B=e.R11F_G11F_B10F)),x===e.RGBA){let ue=fe?Xn:Qe.getTransfer(ee);U===e.FLOAT&&(B=e.RGBA32F),U===e.HALF_FLOAT&&(B=e.RGBA16F),U===e.UNSIGNED_BYTE&&(B=ue===nt?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT&&me&&(B=me.RGBA16_EXT),U===e.SHORT&&me&&(B=me.RGBA16_SNORM_EXT),U===e.UNSIGNED_SHORT_4_4_4_4&&(B=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(B=e.RGB5_A1)}return(B===e.R16F||B===e.R32F||B===e.RG16F||B===e.RG32F||B===e.RGBA16F||B===e.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function E(R,x){let U;return R?x===null||x===vi||x===Ia?U=e.DEPTH24_STENCIL8:x===fi?U=e.DEPTH32F_STENCIL8:x===La&&(U=e.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===vi||x===Ia?U=e.DEPTH_COMPONENT24:x===fi?U=e.DEPTH_COMPONENT32F:x===La&&(U=e.DEPTH_COMPONENT16),U}function w(R,x){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==It&&R.minFilter!==Lt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function A(R){let x=R.target;x.removeEventListener("dispose",A),b(x),x.isVideoTexture&&c.delete(x),x.isHTMLTexture&&p.delete(x)}function g(R){let x=R.target;x.removeEventListener("dispose",g),P(x)}function b(R){let x=r.get(R);if(x.__webglInit===void 0)return;let U=R.source,W=f.get(U);if(W){let ee=W[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&L(R),Object.keys(W).length===0&&f.delete(U)}r.remove(R)}function L(R){let x=r.get(R);e.deleteTexture(x.__webglTexture);let U=R.source,W=f.get(U);delete W[x.__cacheKey],s.memory.textures--}function P(R){let x=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let ee=0;ee<x.__webglFramebuffer[W].length;ee++)e.deleteFramebuffer(x.__webglFramebuffer[W][ee]);else e.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)e.deleteFramebuffer(x.__webglFramebuffer[W]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let U=R.textures;for(let W=0,ee=U.length;W<ee;W++){let fe=r.get(U[W]);fe.__webglTexture&&(e.deleteTexture(fe.__webglTexture),s.memory.textures--),r.remove(U[W])}r.remove(R)}let D=0;function j(){D=0}function N(){return D}function z(R){D=R}function $(){let R=D;return R>=a.maxTextures&&Be("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+a.maxTextures),D+=1,R}function H(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function he(R,x){let U=r.get(R);if(R.isVideoTexture&&ct(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){let W=R.image;if(W===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{be(U,R,x);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+x)}function q(R,x){let U=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){be(U,R,x);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+x)}function Z(R,x){let U=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){be(U,R,x);return}i.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+x)}function te(R,x){let U=r.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){Le(U,R,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+x)}let Oe={[so]:e.REPEAT,[Ci]:e.CLAMP_TO_EDGE,[oo]:e.MIRRORED_REPEAT},Ae={[It]:e.NEAREST,[Wd]:e.NEAREST_MIPMAP_NEAREST,[sn]:e.NEAREST_MIPMAP_LINEAR,[Lt]:e.LINEAR,[_s]:e.LINEAR_MIPMAP_NEAREST,[hr]:e.LINEAR_MIPMAP_LINEAR},it={[Yd]:e.NEVER,[Qd]:e.ALWAYS,[Zd]:e.LESS,[Qo]:e.LEQUAL,[$d]:e.EQUAL,[el]:e.GEQUAL,[Kd]:e.GREATER,[Jd]:e.NOTEQUAL};function re(R,x){if(x.type===fi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Lt||x.magFilter===_s||x.magFilter===sn||x.magFilter===hr||x.minFilter===Lt||x.minFilter===_s||x.minFilter===sn||x.minFilter===hr)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,Oe[x.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,Oe[x.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,Oe[x.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,Ae[x.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,Ae[x.minFilter]),x.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,it[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===It||x.minFilter!==sn&&x.minFilter!==hr||x.type===fi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function k(R,x){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",A));let W=x.source,ee=f.get(W);ee===void 0&&(ee={},f.set(W,ee));let fe=H(x);if(fe!==R.__cacheKey){ee[fe]===void 0&&(ee[fe]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,U=!0),ee[fe].usedTimes++;let me=ee[R.__cacheKey];me!==void 0&&(ee[R.__cacheKey].usedTimes--,me.usedTimes===0&&L(x)),R.__cacheKey=fe,R.__webglTexture=ee[fe].texture}return U}function ie(R,x,U){return Math.floor(Math.floor(R/U)/x)}function K(R,x,U,W){let ee=R.updateRanges;if(ee.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,U,W,x.data);else{ee.sort((_e,Re)=>_e.start-Re.start);let fe=0;for(let _e=1;_e<ee.length;_e++){let Re=ee[fe],le=ee[_e],Ne=Re.start+Re.count,Ue=ie(le.start,x.width,4),He=ie(Re.start,x.width,4);le.start<=Ne+1&&Ue===He&&ie(le.start+le.count-1,x.width,4)===Ue?Re.count=Math.max(Re.count,le.start+le.count-Re.start):(++fe,ee[fe]=le)}ee.length=fe+1;let me=i.getParameter(e.UNPACK_ROW_LENGTH),B=i.getParameter(e.UNPACK_SKIP_PIXELS),ue=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let _e=0,Re=ee.length;_e<Re;_e++){let le=ee[_e],Ne=Math.floor(le.start/4),Ue=Math.ceil(le.count/4),He=Ne%x.width,rt=Math.floor(Ne/x.width),F=Ue;i.pixelStorei(e.UNPACK_SKIP_PIXELS,He),i.pixelStorei(e.UNPACK_SKIP_ROWS,rt),i.texSubImage2D(e.TEXTURE_2D,0,He,rt,F,1,U,W,x.data)}R.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,me),i.pixelStorei(e.UNPACK_SKIP_PIXELS,B),i.pixelStorei(e.UNPACK_SKIP_ROWS,ue)}}function be(R,x,U){let W=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=e.TEXTURE_3D);let ee=k(R,x),fe=x.source;i.bindTexture(W,R.__webglTexture,e.TEXTURE0+U);let me=r.get(fe);if(fe.version!==me.__version||ee===!0){if(i.activeTexture(e.TEXTURE0+U),!(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)){let Q=Qe.getPrimaries(Qe.workingColorSpace),ae=x.colorSpace===Vi?null:Qe.getPrimaries(x.colorSpace),Se=x.colorSpace===Vi||Q===ae?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let B=m(x.image,!1,a.maxTextureSize);B=Je(x,B);let ue=n.convert(x.format,x.colorSpace),_e=n.convert(x.type),Re=v(x.internalFormat,ue,_e,x.normalized,x.colorSpace,x.isVideoTexture);re(W,x);let le,Ne=x.mipmaps,Ue=x.isVideoTexture!==!0,He=me.__version===void 0||ee===!0,rt=fe.dataReady,F=w(x,B);if(x.isDepthTexture)Re=E(x.format===cr,x.type),He&&(Ue?i.texStorage2D(e.TEXTURE_2D,1,Re,B.width,B.height):i.texImage2D(e.TEXTURE_2D,0,Re,B.width,B.height,0,ue,_e,null));else if(x.isDataTexture)if(Ne.length>0){Ue&&He&&i.texStorage2D(e.TEXTURE_2D,F,Re,Ne[0].width,Ne[0].height);for(let Q=0,ae=Ne.length;Q<ae;Q++)le=Ne[Q],Ue?rt&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,le.width,le.height,ue,_e,le.data):i.texImage2D(e.TEXTURE_2D,Q,Re,le.width,le.height,0,ue,_e,le.data);x.generateMipmaps=!1}else Ue?(He&&i.texStorage2D(e.TEXTURE_2D,F,Re,B.width,B.height),rt&&K(x,B,ue,_e)):i.texImage2D(e.TEXTURE_2D,0,Re,B.width,B.height,0,ue,_e,B.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ue&&He&&i.texStorage3D(e.TEXTURE_2D_ARRAY,F,Re,Ne[0].width,Ne[0].height,B.depth);for(let Q=0,ae=Ne.length;Q<ae;Q++)if(le=Ne[Q],x.format!==ti)if(ue!==null)if(Ue){if(rt)if(x.layerUpdates.size>0){let Se=Xh(le.width,le.height,x.format,x.type);for(let Ce of x.layerUpdates){let oe=le.data.subarray(Ce*Se/le.data.BYTES_PER_ELEMENT,(Ce+1)*Se/le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,Ce,le.width,le.height,1,ue,oe)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,B.depth,ue,le.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Q,Re,le.width,le.height,B.depth,0,le.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?rt&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,B.depth,ue,_e,le.data):i.texImage3D(e.TEXTURE_2D_ARRAY,Q,Re,le.width,le.height,B.depth,0,ue,_e,le.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ue&&He&&i.texStorage2D(e.TEXTURE_2D,F,Re,Ne[0].width,Ne[0].height);for(let Q=0,ae=Ne.length;Q<ae;Q++)le=Ne[Q],x.format!==ti?ue!==null?Ue?rt&&i.compressedTexSubImage2D(e.TEXTURE_2D,Q,0,0,le.width,le.height,ue,le.data):i.compressedTexImage2D(e.TEXTURE_2D,Q,Re,le.width,le.height,0,le.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?rt&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,le.width,le.height,ue,_e,le.data):i.texImage2D(e.TEXTURE_2D,Q,Re,le.width,le.height,0,ue,_e,le.data)}else if(x.isDataArrayTexture)if(Ue){if(He&&i.texStorage3D(e.TEXTURE_2D_ARRAY,F,Re,B.width,B.height,B.depth),rt)if(x.layerUpdates.size>0){let Q=Xh(B.width,B.height,x.format,x.type);for(let ae of x.layerUpdates){let Se=B.data.subarray(ae*Q/B.data.BYTES_PER_ELEMENT,(ae+1)*Q/B.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ae,B.width,B.height,1,ue,_e,Se)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,ue,_e,B.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Re,B.width,B.height,B.depth,0,ue,_e,B.data);else if(x.isData3DTexture)Ue?(He&&i.texStorage3D(e.TEXTURE_3D,F,Re,B.width,B.height,B.depth),rt&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,ue,_e,B.data)):i.texImage3D(e.TEXTURE_3D,0,Re,B.width,B.height,B.depth,0,ue,_e,B.data);else if(x.isFramebufferTexture){if(He)if(Ue)i.texStorage2D(e.TEXTURE_2D,F,Re,B.width,B.height);else{let Q=B.width,ae=B.height;for(let Se=0;Se<F;Se++)i.texImage2D(e.TEXTURE_2D,Se,Re,Q,ae,0,ue,_e,null),Q>>=1,ae>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){let Q=e.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),B.parentNode!==Q){Q.appendChild(B),p.add(x),Q.onpaint=ae=>{let Se=ae.changedElements;for(let Ce of p)Se.includes(Ce.image)&&(Ce.needsUpdate=!0)},Q.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,B);else{let ae=e.RGBA,Se=e.RGBA,Ce=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ae,Se,Ce,B)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Ue&&He){let Q=$e(Ne[0]);i.texStorage2D(e.TEXTURE_2D,F,Re,Q.width,Q.height)}for(let Q=0,ae=Ne.length;Q<ae;Q++)le=Ne[Q],Ue?rt&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,ue,_e,le):i.texImage2D(e.TEXTURE_2D,Q,Re,ue,_e,le);x.generateMipmaps=!1}else if(Ue){if(He){let Q=$e(B);i.texStorage2D(e.TEXTURE_2D,F,Re,Q.width,Q.height)}rt&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ue,_e,B)}else i.texImage2D(e.TEXTURE_2D,0,Re,ue,_e,B);d(x)&&M(W),me.__version=fe.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Le(R,x,U){if(x.image.length!==6)return;let W=k(R,x),ee=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+U);let fe=r.get(ee);if(ee.version!==fe.__version||W===!0){i.activeTexture(e.TEXTURE0+U);let me=Qe.getPrimaries(Qe.workingColorSpace),B=x.colorSpace===Vi?null:Qe.getPrimaries(x.colorSpace),ue=x.colorSpace===Vi||me===B?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let _e=x.isCompressedTexture||x.image[0].isCompressedTexture,Re=x.image[0]&&x.image[0].isDataTexture,le=[];for(let oe=0;oe<6;oe++)!_e&&!Re?le[oe]=m(x.image[oe],!0,a.maxCubemapSize):le[oe]=Re?x.image[oe].image:x.image[oe],le[oe]=Je(x,le[oe]);let Ne=le[0],Ue=n.convert(x.format,x.colorSpace),He=n.convert(x.type),rt=v(x.internalFormat,Ue,He,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,Q=fe.__version===void 0||W===!0,ae=ee.dataReady,Se=w(x,Ne);re(e.TEXTURE_CUBE_MAP,x);let Ce;if(_e){F&&Q&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Se,rt,Ne.width,Ne.height);for(let oe=0;oe<6;oe++){Ce=le[oe].mipmaps;for(let Me=0;Me<Ce.length;Me++){let ze=Ce[Me];x.format!==ti?Ue!==null?F?ae&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,0,0,ze.width,ze.height,Ue,ze.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,rt,ze.width,ze.height,0,ze.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ae&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,0,0,ze.width,ze.height,Ue,He,ze.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,rt,ze.width,ze.height,0,Ue,He,ze.data)}}}else{if(Ce=x.mipmaps,F&&Q){Ce.length>0&&Se++;let oe=$e(le[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Se,rt,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Re){F?ae&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,le[oe].width,le[oe].height,Ue,He,le[oe].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,rt,le[oe].width,le[oe].height,0,Ue,He,le[oe].data);for(let Me=0;Me<Ce.length;Me++){let ze=Ce[Me].image[oe].image;F?ae&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,0,0,ze.width,ze.height,Ue,He,ze.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,rt,ze.width,ze.height,0,Ue,He,ze.data)}}else{F?ae&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ue,He,le[oe]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,rt,Ue,He,le[oe]);for(let Me=0;Me<Ce.length;Me++){let ze=Ce[Me];F?ae&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,0,0,Ue,He,ze.image[oe]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,rt,Ue,He,ze.image[oe])}}}d(x)&&M(e.TEXTURE_CUBE_MAP),fe.__version=ee.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ce(R,x,U,W,ee,fe){let me=n.convert(U.format,U.colorSpace),B=n.convert(U.type),ue=v(U.internalFormat,me,B,U.normalized,U.colorSpace),_e=r.get(x),Re=r.get(U);if(Re.__renderTarget=x,!_e.__hasExternalTextures){let le=Math.max(1,x.width>>fe),Ne=Math.max(1,x.height>>fe);ee===e.TEXTURE_3D||ee===e.TEXTURE_2D_ARRAY?i.texImage3D(ee,fe,ue,le,Ne,x.depth,0,me,B,null):i.texImage2D(ee,fe,ue,le,Ne,0,me,B,null)}i.bindFramebuffer(e.FRAMEBUFFER,R),I(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,W,ee,Re.__webglTexture,0,Xe(x)):(ee===e.TEXTURE_2D||ee>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,W,ee,Re.__webglTexture,fe),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ve(R,x,U){if(e.bindRenderbuffer(e.RENDERBUFFER,R),x.depthBuffer){let W=x.depthTexture,ee=W&&W.isDepthTexture?W.type:null,fe=E(x.stencilBuffer,ee),me=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;I(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Xe(x),fe,x.width,x.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,Xe(x),fe,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,fe,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,me,e.RENDERBUFFER,R)}else{let W=x.textures;for(let ee=0;ee<W.length;ee++){let fe=W[ee],me=n.convert(fe.format,fe.colorSpace),B=n.convert(fe.type),ue=v(fe.internalFormat,me,B,fe.normalized,fe.colorSpace);I(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Xe(x),ue,x.width,x.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,Xe(x),ue,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,ue,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function J(R,x,U){let W=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=r.get(x.depthTexture);if(ee.__renderTarget=x,(!ee.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),ee.__webglTexture===void 0){ee.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,ee.__webglTexture),re(e.TEXTURE_CUBE_MAP,x.depthTexture);let _e=n.convert(x.depthTexture.format),Re=n.convert(x.depthTexture.type),le;x.depthTexture.format===Ii?le=e.DEPTH_COMPONENT24:x.depthTexture.format===cr&&(le=e.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,le,x.width,x.height,0,_e,Re,null)}}else he(x.depthTexture,0);let fe=ee.__webglTexture,me=Xe(x),B=W?e.TEXTURE_CUBE_MAP_POSITIVE_X+U:e.TEXTURE_2D,ue=x.depthTexture.format===cr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ii)I(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ue,B,fe,0,me):e.framebufferTexture2D(e.FRAMEBUFFER,ue,B,fe,0);else if(x.depthTexture.format===cr)I(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ue,B,fe,0,me):e.framebufferTexture2D(e.FRAMEBUFFER,ue,B,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Y(R){let x=r.get(R),U=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){let ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",ee)};W.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=W}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let W=0;W<6;W++)J(x.__webglFramebuffer[W],R,W);else{let W=R.texture.mipmaps;W&&W.length>0?J(x.__webglFramebuffer[0],R,0):J(x.__webglFramebuffer,R,0)}else if(U){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=e.createRenderbuffer(),Ve(x.__webglDepthbuffer[W],R,!1);else{let ee=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,fe=x.__webglDepthbuffer[W];e.bindRenderbuffer(e.RENDERBUFFER,fe),e.framebufferRenderbuffer(e.FRAMEBUFFER,ee,e.RENDERBUFFER,fe)}}else{let W=R.texture.mipmaps;if(W&&W.length>0?i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Ve(x.__webglDepthbuffer,R,!1);else{let ee=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,fe=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,fe),e.framebufferRenderbuffer(e.FRAMEBUFFER,ee,e.RENDERBUFFER,fe)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function se(R,x,U){let W=r.get(R);x!==void 0&&ce(W.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&Y(R)}function ve(R){let x=R.texture,U=r.get(R),W=r.get(x);R.addEventListener("dispose",g);let ee=R.textures,fe=R.isWebGLCubeRenderTarget===!0,me=ee.length>1;if(me||(W.__webglTexture===void 0&&(W.__webglTexture=e.createTexture()),W.__version=x.version,s.memory.textures++),fe){U.__webglFramebuffer=[];for(let B=0;B<6;B++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[B]=[];for(let ue=0;ue<x.mipmaps.length;ue++)U.__webglFramebuffer[B][ue]=e.createFramebuffer()}else U.__webglFramebuffer[B]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let B=0;B<x.mipmaps.length;B++)U.__webglFramebuffer[B]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(me)for(let B=0,ue=ee.length;B<ue;B++){let _e=r.get(ee[B]);_e.__webglTexture===void 0&&(_e.__webglTexture=e.createTexture(),s.memory.textures++)}if(R.samples>0&&I(R)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let B=0;B<ee.length;B++){let ue=ee[B];U.__webglColorRenderbuffer[B]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[B]);let _e=n.convert(ue.format,ue.colorSpace),Re=n.convert(ue.type),le=v(ue.internalFormat,_e,Re,ue.normalized,ue.colorSpace,R.isXRRenderTarget===!0),Ne=Xe(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne,le,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+B,e.RENDERBUFFER,U.__webglColorRenderbuffer[B])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),Ve(U.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(fe){i.bindTexture(e.TEXTURE_CUBE_MAP,W.__webglTexture),re(e.TEXTURE_CUBE_MAP,x);for(let B=0;B<6;B++)if(x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)ce(U.__webglFramebuffer[B][ue],R,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+B,ue);else ce(U.__webglFramebuffer[B],R,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);d(x)&&M(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(me){for(let B=0,ue=ee.length;B<ue;B++){let _e=ee[B],Re=r.get(_e),le=e.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(le,Re.__webglTexture),re(le,_e),ce(U.__webglFramebuffer,R,_e,e.COLOR_ATTACHMENT0+B,le,0),d(_e)&&M(le)}i.unbindTexture()}else{let B=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(B=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(B,W.__webglTexture),re(B,x),x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)ce(U.__webglFramebuffer[ue],R,x,e.COLOR_ATTACHMENT0,B,ue);else ce(U.__webglFramebuffer,R,x,e.COLOR_ATTACHMENT0,B,0);d(x)&&M(B),i.unbindTexture()}R.depthBuffer&&Y(R)}function ye(R){let x=R.textures;for(let U=0,W=x.length;U<W;U++){let ee=x[U];if(d(ee)){let fe=T(R),me=r.get(ee).__webglTexture;i.bindTexture(fe,me),M(fe),i.unbindTexture()}}}let Te=[],De=[];function We(R){if(R.samples>0){if(I(R)===!1){let x=R.textures,U=R.width,W=R.height,ee=e.COLOR_BUFFER_BIT,fe=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,me=r.get(R),B=x.length>1;if(B)for(let _e=0;_e<x.length;_e++)i.bindFramebuffer(e.FRAMEBUFFER,me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let ue=R.texture.mipmaps;ue&&ue.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let _e=0;_e<x.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=e.STENCIL_BUFFER_BIT)),B){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);let Re=r.get(x[_e]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Re,0)}e.blitFramebuffer(0,0,U,W,0,0,U,W,ee,e.NEAREST),l===!0&&(Te.length=0,De.length=0,Te.push(e.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Te.push(fe),De.push(fe),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,De)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Te))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),B)for(let _e=0;_e<x.length;_e++){i.bindFramebuffer(e.FRAMEBUFFER,me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);let Re=r.get(x[_e]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,Re,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let x=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function Xe(R){return Math.min(a.maxSamples,R.samples)}function I(R){let x=r.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ct(R){let x=s.render.frame;c.get(R)!==x&&(c.set(R,x),R.update())}function Je(R,x){let U=R.colorSpace,W=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Wn&&U!==Vi&&(Qe.getTransfer(U)===nt?(W!==ti||ee!==$t)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",U)),x}function $e(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=j,this.getTextureUnits=N,this.setTextureUnits=z,this.setTexture2D=he,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=te,this.rebindTextures=se,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=I,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function cy(e,t){function i(r,a=Vi){let n,s=Qe.getTransfer(a);if(r===$t)return e.UNSIGNED_BYTE;if(r===Yo)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Zo)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Ec)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===wc)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Sc)return e.BYTE;if(r===Tc)return e.SHORT;if(r===La)return e.UNSIGNED_SHORT;if(r===qo)return e.INT;if(r===vi)return e.UNSIGNED_INT;if(r===fi)return e.FLOAT;if(r===_i)return e.HALF_FLOAT;if(r===Ac)return e.ALPHA;if(r===Rc)return e.RGB;if(r===ti)return e.RGBA;if(r===Ii)return e.DEPTH_COMPONENT;if(r===cr)return e.DEPTH_STENCIL;if(r===Cc)return e.RED;if(r===$o)return e.RED_INTEGER;if(r===mr)return e.RG;if(r===Ko)return e.RG_INTEGER;if(r===Jo)return e.RGBA_INTEGER;if(r===Nn||r===Un||r===On||r===Fn)if(s===nt)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Nn)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Un)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===On)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Nn)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Un)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===On)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fn)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lo||r===ho||r===co||r===uo)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===lo)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ho)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===co)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===uo)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===po||r===fo||r===mo||r===go||r===vo||r===kn||r===_o)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===po||r===fo)return s===nt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===mo)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===go)return n.COMPRESSED_R11_EAC;if(r===vo)return n.COMPRESSED_SIGNED_R11_EAC;if(r===kn)return n.COMPRESSED_RG11_EAC;if(r===_o)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===yo||r===xo||r===Mo||r===bo||r===So||r===To||r===Eo||r===wo||r===Ao||r===Ro||r===Co||r===Po||r===Lo||r===Io)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===yo)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xo)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Mo)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bo)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===So)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===To)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Eo)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wo)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ao)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ro)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Co)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Po)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lo)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Io)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Do||r===No||r===Uo)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===Do)return s===nt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===No)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Uo)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Oo||r===Fo||r===Vn||r===Bo)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===Oo)return n.COMPRESSED_RED_RGTC1_EXT;if(r===Fo)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bo)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ia?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}function gy(e,t){function i(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function r(m,d){d.color.getRGB(m.fogColor.value,_u(e)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function a(m,d,M,T,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?n(m,d):d.isMeshLambertMaterial?(n(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(n(m,d),p(m,d)):d.isMeshPhongMaterial?(n(m,d),c(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(n(m,d),u(m,d),d.isMeshPhysicalMaterial&&f(m,d,v)):d.isMeshMatcapMaterial?(n(m,d),_(m,d)):d.isMeshDepthMaterial?n(m,d):d.isMeshDistanceMaterial?(n(m,d),y(m,d)):d.isMeshNormalMaterial?n(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,M,T):d.isSpriteMaterial?h(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function n(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,i(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,i(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Vt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,i(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Vt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,i(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,i(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,i(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M=t.get(d),T=M.envMap,v=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(my.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ru),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,i(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,i(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,i(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=T*.5,d.map&&(m.map.value=d.map,i(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,i(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,i(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,i(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,i(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,i(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,i(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,i(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,i(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Vt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,i(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,i(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,i(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,i(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,i(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,i(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,i(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function vy(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let w=E.program;r.uniformBlockBinding(v,w)}function h(v,E){let w=a[v.id];w===void 0&&(m(v),w=c(v),a[v.id]=w,v.addEventListener("dispose",M));let A=E.program;r.updateUBOMapping(v,A);let g=t.render.frame;n[v.id]!==g&&(u(v),n[v.id]=g)}function c(v){let E=p();v.__bindingPointIndex=E;let w=e.createBuffer(),A=v.__size,g=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,A,g),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,w),w}function p(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let E=a[v.id],w=v.uniforms,A=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let g=0,b=w.length;g<b;g++){let L=w[g];if(Array.isArray(L))for(let P=0,D=L.length;P<D;P++)f(L[P],g,P,A);else f(L,g,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(v,E,w,A){if(y(v,E,w,A)===!0){let g=v.__offset,b=v.value;if(Array.isArray(b)){let L=0;for(let P=0;P<b.length;P++){let D=b[P],j=d(D);_(D,v.__data,L),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(b,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,g,v.__data)}}function _(v,E,w){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,w)}function y(v,E,w,A){let g=v.value,b=E+"_"+w;if(A[b]===void 0)return typeof g=="number"||typeof g=="boolean"?A[b]=g:ArrayBuffer.isView(g)?A[b]=g.slice():A[b]=g.clone(),!0;{let L=A[b];if(typeof g=="number"||typeof g=="boolean"){if(L!==g)return A[b]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(L.equals(g)===!1)return L.copy(g),!0}}return!1}function m(v){let E=v.uniforms,w=0,A=16;for(let b=0,L=E.length;b<L;b++){let P=Array.isArray(E[b])?E[b]:[E[b]];for(let D=0,j=P.length;D<j;D++){let N=P[D],z=Array.isArray(N.value)?N.value:[N.value];for(let $=0,H=z.length;$<H;$++){let he=z[$],q=d(he),Z=w%A,te=Z%q.boundary,Oe=Z+te;w+=te,Oe!==0&&A-Oe<q.storage&&(w+=A-Oe),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=q.storage}}}let g=w%A;return g>0&&(w+=A-g),v.__size=w,v.__cache={},this}function d(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",v),E}function M(v){let E=v.target;E.removeEventListener("dispose",M);let w=s.indexOf(E.__bindingPointIndex);s.splice(w,1),e.deleteBuffer(a[E.id]),delete a[E.id],delete n[E.id]}function T(){for(let v in a)e.deleteBuffer(a[v]);s=[],a={},n={}}return{bind:l,update:h,dispose:T}}function yy(){return di===null&&(di=new Hp(_y,16,16,mr,_i),di.name="DFG_LUT",di.minFilter=Lt,di.magFilter=Lt,di.wrapS=Ci,di.wrapT=Ci,di.generateMipmaps=!1,di.needsUpdate=!0),di}var Md,ih,bd,Dn,Sd,ba,pr,Vt,Ri,Pi,wa,rh,ah,nh,Td,Xr,Ed,wd,Ad,Rd,Cd,Pd,Ld,Id,pc,fc,Dd,Nd,Ud,Od,Fd,Bd,zd,Gd,kd,Qs,eo,to,Pa,io,ro,ao,no,mc,Vd,Hd,mi,gc,vc,_c,yc,xc,Mc,jo,bc,fr,na,gs,vs,Yn,so,Ci,oo,It,Wd,sn,Lt,_s,hr,$t,Sc,Tc,La,qo,vi,fi,_i,Yo,Zo,Ia,Ec,wc,Ac,Rc,ti,Ii,cr,Cc,$o,mr,Ko,Jo,Nn,Un,On,Fn,lo,ho,co,uo,po,fo,mo,go,vo,kn,_o,yo,xo,Mo,bo,So,To,Eo,wo,Ao,Ro,Co,Po,Lo,Io,Do,No,Uo,Oo,Fo,Vn,Bo,Hn,zo,ys,sh,oh,lh,hh,Xd,ch,jd,Vi,At,Wn,Xn,nt,xs,qd,Yd,Zd,$d,Qo,Kd,Jd,el,Qd,ep,uh,ii,jn,dh,sa,np,vr,Dt,fh,Jr,Na,Hi,ea,ne,ai,ta,C,Ms,mh,ia,je,bs,gh,vh,Qe,Pr,Sp,Tp,il,Ep,Ts,Kt,ra,pt,wp,ri,Lc,Ap,dr,Ye,Lr,Jt,Rp,Cp,Oi,on,Xt,_h,yh,oa,rl,Pp,xh,Ir,Si,ln,ga,Lp,Ip,Mh,bh,Sh,Th,Dp,Dr,Es,Di,Sa,Np,ws,Dc,Fi,hn,tt,Nt,Ga,Qt,Ti,Rs,Ei,Nr,Ur,Eh,Cs,Ps,Ls,Is,Ds,Ns,qr,Wi,wi,ei,cn,Or,Fr,Br,Bi,zi,ar,va,un,dn,nr,qy,Tt,pn,Op,gi,Nc,Uc,ke,Fp,_a,Os,Xi,Bp,Zt,Fs,zr,jt,ya,Pt,yt,Yy,Bs,zp,Gp,ki,kp,Zn,Zy,$y,Ky,Jy,Qy,ex,tx,ix,rx,ax,nx,sx,ox,lx,Ai,zs,fn,mn,ka,Fc,wh,sr,gn,Ah,vn,_n,yn,Gs,xn,Rh,Mn,Ut,hx,cx,ux,dx,px,fx,mx,gx,vx,Hp,_x,yx,xx,Mx,bx,Sx,Tx,Ex,or,Wp,Sn,Ua,Ch,Xp,jp,wx,Ax,Rx,Cx,Px,Lx,Ix,Dx,Nx,Ux,Ox,Fx,Bx,zx,Gx,kx,Vx,Hx,Wx,Xx,jx,qx,Yx,Zx,zc,Oa,qp,Gc,Va,Yp,Zp,Wc,$p,Ha,Kp,Tn,En,ks,wn,Jp,yi,al,Qp,Ph,Lh,Vs,Hs,Ws,ef,Zc,hf,$c,cf,Kc,Jc,Qc,qn,uf,Dh,eu,Cf,ur,Pf,Lf,Df,Nf,Uf,yr,Of,Ff,zf,Gf,kf,Vf,Hf,Wf,$x,jf,qf,Yf,Ht,Zf,$f,Kf,Wa,Jf,Qf,em,tm,xi,Xa,am,nm,sm,xu,ja,om,js,lm,hm,sl,kr,cm,qa,Kx,Jx,Qx,Cn,Pn,ui,ol,Gi,kh,Vh,kt,$n,e1,t1,i1,Vr,Hr,um,dm,ll,r1,a1,n1,s1,o1,l1,h1,c1,u1,hl,fm,cl,mm,gm,vm,_m,ym,xm,Mm,bm,_t,d1,Hh,ul,aa,p1,f1,m1,g1,v1,_1,y1,x1,M1,b1,S1,T1,E1,w1,A1,R1,C1,P1,L1,I1,D1,N1,U1,Em,wm,Am,Rm,Cm,Pm,Lm,Im,Dm,Nm,Um,Om,Fm,Bm,zm,Gm,km,Vm,Hm,Wm,Xm,jm,qm,Ym,Zm,$m,Km,Jm,Qm,eg,tg,ig,rg,ag,ng,sg,og,lg,hg,cg,ug,dg,pg,fg,mg,gg,vg,_g,yg,xg,Mg,bg,Sg,Tg,Eg,wg,Ag,Rg,Cg,Pg,Lg,Ig,Dg,Ng,Ug,Og,Fg,Bg,zg,Gg,kg,Vg,Hg,Wg,Xg,jg,qg,Yg,Zg,$g,Kg,Jg,Qg,e0,t0,i0,r0,a0,n0,s0,o0,l0,h0,c0,u0,d0,p0,f0,m0,g0,v0,_0,y0,x0,M0,b0,S0,T0,E0,w0,A0,R0,C0,P0,L0,I0,D0,N0,U0,O0,F0,B0,z0,G0,k0,V0,H0,W0,X0,j0,q0,Y0,Z0,$0,K0,J0,Q0,ev,tv,iv,rv,av,qe,ge,pi,Ln,nv,bu,$r,uv,dv,pv,xa,jh,qs,Ys,Zs,$s,fv,lr,Ho,Su,Ev,Tu,Wo,Eu,wu,Au,$h,Kh,Jh,Qh,ec,p_,f_,m_,Ks,Gn,v_,__,rc,b_,In,R_,C_,L_,D_,U_,F_,z_,H_,W_,X_,Q_,ry,ay,ny,sy,dc,Ma,Js,uy,dy,py,fy,my,Ru,_y,di,Ya,O1,Qn=as(()=>{Md=0,ih=1,bd=2,Dn=1,Sd=2,ba=3,pr=0,Vt=1,Ri=2,Pi=0,wa=1,rh=2,ah=3,nh=4,Td=5,Xr=100,Ed=101,wd=102,Ad=103,Rd=104,Cd=200,Pd=201,Ld=202,Id=203,pc=204,fc=205,Dd=206,Nd=207,Ud=208,Od=209,Fd=210,Bd=211,zd=212,Gd=213,kd=214,Qs=0,eo=1,to=2,Pa=3,io=4,ro=5,ao=6,no=7,mc=0,Vd=1,Hd=2,mi=0,gc=1,vc=2,_c=3,yc=4,xc=5,Mc=6,jo=7,bc=300,fr=301,na=302,gs=303,vs=304,Yn=306,so=1e3,Ci=1001,oo=1002,It=1003,Wd=1004,sn=1005,Lt=1006,_s=1007,hr=1008,$t=1009,Sc=1010,Tc=1011,La=1012,qo=1013,vi=1014,fi=1015,_i=1016,Yo=1017,Zo=1018,Ia=1020,Ec=35902,wc=35899,Ac=1021,Rc=1022,ti=1023,Ii=1026,cr=1027,Cc=1028,$o=1029,mr=1030,Ko=1031,Jo=1033,Nn=33776,Un=33777,On=33778,Fn=33779,lo=35840,ho=35841,co=35842,uo=35843,po=36196,fo=37492,mo=37496,go=37488,vo=37489,kn=37490,_o=37491,yo=37808,xo=37809,Mo=37810,bo=37811,So=37812,To=37813,Eo=37814,wo=37815,Ao=37816,Ro=37817,Co=37818,Po=37819,Lo=37820,Io=37821,Do=36492,No=36494,Uo=36495,Oo=36283,Fo=36284,Vn=36285,Bo=36286,Hn=2300,zo=2301,ys=2302,sh=2303,oh=2400,lh=2401,hh=2402,Xd=3200,ch=0,jd=1,Vi="",At="srgb",Wn="srgb-linear",Xn="linear",nt="srgb",xs=7680,qd=519,Yd=512,Zd=513,$d=514,Qo=515,Kd=516,Jd=517,el=518,Qd=519,ep=35044,uh="300 es",ii=2e3,jn=2001;dh={},sa=null;np={[Qs]:eo,[to]:ao,[io]:no,[Pa]:ro,[eo]:Qs,[ao]:to,[no]:io,[ro]:Pa},vr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fh=1234567,Jr=Math.PI/180,Na=180/Math.PI;Hi={DEG2RAD:Jr,RAD2DEG:Na,generateUUID:_r,clamp:Ze,euclideanModulo:tl,mapLinear:sp,inverseLerp:op,lerp:Aa,damp:lp,pingpong:hp,smoothstep:cp,smootherstep:up,randInt:dp,randFloat:pp,randFloatSpread:fp,seededRandom:mp,degToRad:gp,radToDeg:vp,isPowerOfTwo:_p,ceilPowerOfTwo:yp,floorPowerOfTwo:xp,setQuaternionFromProperEuler:Mp,normalize:Ft,denormalize:jr},ne=(ea=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ze(this.x,t.x,i.x),this.y=Ze(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ze(this.x,t,i),this.y=Ze(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Ze(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ea.prototype.isVector2=!0,ea),ai=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],p=a[n+0],u=a[n+1],f=a[n+2],_=a[n+3];if(c!==_||o!==p||l!==u||h!==f){let y=o*p+l*u+h*f+c*_;y<0&&(p=-p,u=-u,f=-f,_=-_,y=-y);let m=1-s;if(y<.9995){let d=Math.acos(y),M=Math.sin(d);m=Math.sin(m*d)/M,s=Math.sin(s*d)/M,o=o*m+p*s,l=l*m+u*s,h=h*m+f*s,c=c*m+_*s}else{o=o*m+p*s,l=l*m+u*s,h=h*m+f*s,c=c*m+_*s;let d=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=d,l*=d,h*=d,c*=d}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[n],p=a[n+1],u=a[n+2],f=a[n+3];return e[t]=s*f+h*c+o*u-l*p,e[t+1]=o*f+h*p+l*c-s*u,e[t+2]=l*f+h*u+s*p-o*c,e[t+3]=h*f-s*c-o*p-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),c=s(a/2),p=o(i/2),u=o(r/2),f=o(a/2);switch(n){case"XYZ":this._x=p*h*c+l*u*f,this._y=l*u*c-p*h*f,this._z=l*h*f+p*u*c,this._w=l*h*c-p*u*f;break;case"YXZ":this._x=p*h*c+l*u*f,this._y=l*u*c-p*h*f,this._z=l*h*f-p*u*c,this._w=l*h*c+p*u*f;break;case"ZXY":this._x=p*h*c-l*u*f,this._y=l*u*c+p*h*f,this._z=l*h*f+p*u*c,this._w=l*h*c-p*u*f;break;case"ZYX":this._x=p*h*c-l*u*f,this._y=l*u*c+p*h*f,this._z=l*h*f-p*u*c,this._w=l*h*c+p*u*f;break;case"YZX":this._x=p*h*c+l*u*f,this._y=l*u*c+p*h*f,this._z=l*h*f-p*u*c,this._w=l*h*c-p*u*f;break;case"XZY":this._x=p*h*c-l*u*f,this._y=l*u*c-p*h*f,this._z=l*h*f+p*u*c,this._w=l*h*c+p*u*f;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10],p=i+s+c;if(p>0){let u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(h-o)*u,this._y=(a-l)*u,this._z=(n-r)*u}else if(i>s&&i>c){let u=2*Math.sqrt(1+i-s-c);this._w=(h-o)/u,this._x=.25*u,this._y=(r+n)/u,this._z=(a+l)/u}else if(s>c){let u=2*Math.sqrt(1+s-i-c);this._w=(a-l)/u,this._x=(r+n)/u,this._y=.25*u,this._z=(o+h)/u}else{let u=2*Math.sqrt(1+c-i-s);this._w=(n-r)/u,this._x=(a+l)/u,this._y=(o+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),h=Math.sin(l);o=Math.sin(o*l)/h,t=Math.sin(t*l)/h,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=(ta=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(mh.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(mh.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*r),c=2*(o*i-n*a),p=2*(n*r-s*i);return this.x=i+l*h+s*p-o*c,this.y=r+l*c+o*h-n*p,this.z=a+l*p+n*c-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ze(this.x,t.x,i.x),this.y=Ze(this.y,t.y,i.y),this.z=Ze(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ze(this.x,t,i),this.y=Ze(this.y,t,i),this.z=Ze(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Ms.copy(this).projectOnVector(t),this.sub(Ms)}reflect(t){return this.sub(Ms.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Ze(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ta.prototype.isVector3=!0,ta),Ms=new C,mh=new ai,je=(ia=class{constructor(t,i,r,a,n,s,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h)}set(t,i,r,a,n,s,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=i,c[4]=n,c[5]=l,c[6]=r,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],c=r[4],p=r[7],u=r[2],f=r[5],_=r[8],y=a[0],m=a[3],d=a[6],M=a[1],T=a[4],v=a[7],E=a[2],w=a[5],A=a[8];return n[0]=s*y+o*M+l*E,n[3]=s*m+o*T+l*w,n[6]=s*d+o*v+l*A,n[1]=h*y+c*M+p*E,n[4]=h*m+c*T+p*w,n[7]=h*d+c*v+p*A,n[2]=u*y+f*M+_*E,n[5]=u*m+f*T+_*w,n[8]=u*d+f*v+_*A,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return i*s*c-i*o*h-r*n*c+r*o*l+a*n*h-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],p=c*s-o*h,u=o*l-c*n,f=h*n-s*l,_=i*p+r*u+a*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=p*y,t[1]=(a*h-c*r)*y,t[2]=(o*r-a*s)*y,t[3]=u*y,t[4]=(c*i-a*l)*y,t[5]=(a*n-o*i)*y,t[6]=f*y,t[7]=(r*l-h*i)*y,t[8]=(s*i-r*n)*y,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(t,i){return Kr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bs.makeScale(t,i)),this}rotate(t){return Kr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bs.makeRotation(-t)),this}translate(t,i){return Kr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bs.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ia.prototype.isMatrix3=!0,ia),bs=new je,gh=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vh=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe=bp();Sp=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Pr===void 0&&(Pr=Da("canvas")),Pr.width=e.width,Pr.height=e.height;let r=Pr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Pr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Da("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Li(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Li(t[i]/255)*255):t[i]=Li(t[i]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Tp=0,il=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=_r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(Ss(r[n].image)):a.push(Ss(r[n]))}else a=Ss(r);i.url=a}return t||(e.images[this.uuid]=i),i}};Ep=0,Ts=new C,Kt=class Bn extends vr{constructor(t=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=Ci,a=Ci,n=Lt,s=hr,o=ti,l=$t,h=Bn.DEFAULT_ANISOTROPY,c=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=_r(),this.name="",this.source=new il(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ts).x}get height(){return this.source.getSize(Ts).y}get depth(){return this.source.getSize(Ts).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Be(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Be(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case so:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case so:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=bc;Kt.DEFAULT_ANISOTROPY=1;pt=(ra=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],c=s[1],p=s[5],u=s[9],f=s[2],_=s[6],y=s[10];if(Math.abs(l-c)<.01&&Math.abs(h-f)<.01&&Math.abs(u-_)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(o+p+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let d=(o+1)/2,M=(p+1)/2,T=(y+1)/2,v=(l+c)/4,E=(h+f)/4,w=(u+_)/4;return d>M&&d>T?d<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(d),a=v/r,n=E/r):M>T?M<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(M),r=v/a,n=w/a):T<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(T),r=E/n,a=w/n),this.set(r,a,n,i),this}let m=Math.sqrt((_-u)*(_-u)+(h-f)*(h-f)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(_-u)/m,this.y=(h-f)/m,this.z=(c-l)/m,this.w=Math.acos((o+p+y-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ze(this.x,t.x,i.x),this.y=Ze(this.y,t.y,i.y),this.z=Ze(this.z,t.z,i.z),this.w=Ze(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ze(this.x,t,i),this.y=Ze(this.y,t,i),this.z=Ze(this.z,t,i),this.w=Ze(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ra.prototype.isVector4=!0,ra),wp=class extends vr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new Kt(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new il(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends wp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Lc=class extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ap=class extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ye=(dr=class{constructor(t,i,r,a,n,s,o,l,h,c,p,u,f,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h,c,p,u,f,_,y,m)}set(t,i,r,a,n,s,o,l,h,c,p,u,f,_,y,m){let d=this.elements;return d[0]=t,d[4]=i,d[8]=r,d[12]=a,d[1]=n,d[5]=s,d[9]=o,d[13]=l,d[2]=h,d[6]=c,d[10]=p,d[14]=u,d[3]=f,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dr().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/Lr.setFromMatrixColumn(t,0).length(),n=1/Lr.setFromMatrixColumn(t,1).length(),s=1/Lr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(n),p=Math.sin(n);if(t.order==="XYZ"){let u=s*c,f=s*p,_=o*c,y=o*p;i[0]=l*c,i[4]=-l*p,i[8]=h,i[1]=f+_*h,i[5]=u-y*h,i[9]=-o*l,i[2]=y-u*h,i[6]=_+f*h,i[10]=s*l}else if(t.order==="YXZ"){let u=l*c,f=l*p,_=h*c,y=h*p;i[0]=u+y*o,i[4]=_*o-f,i[8]=s*h,i[1]=s*p,i[5]=s*c,i[9]=-o,i[2]=f*o-_,i[6]=y+u*o,i[10]=s*l}else if(t.order==="ZXY"){let u=l*c,f=l*p,_=h*c,y=h*p;i[0]=u-y*o,i[4]=-s*p,i[8]=_+f*o,i[1]=f+_*o,i[5]=s*c,i[9]=y-u*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let u=s*c,f=s*p,_=o*c,y=o*p;i[0]=l*c,i[4]=_*h-f,i[8]=u*h+y,i[1]=l*p,i[5]=y*h+u,i[9]=f*h-_,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let u=s*l,f=s*h,_=o*l,y=o*h;i[0]=l*c,i[4]=y-u*p,i[8]=_*p+f,i[1]=p,i[5]=s*c,i[9]=-o*c,i[2]=-h*c,i[6]=f*p+_,i[10]=u-y*p}else if(t.order==="XZY"){let u=s*l,f=s*h,_=o*l,y=o*h;i[0]=l*c,i[4]=-p,i[8]=h*c,i[1]=u*p+y,i[5]=s*c,i[9]=f*p-_,i[2]=_*p-f,i[6]=o*c,i[10]=y*p+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rp,t,Cp)}lookAt(t,i,r){let a=this.elements;return Xt.subVectors(t,i),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Oi.crossVectors(r,Xt),Oi.lengthSq()===0&&(Math.abs(r.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Oi.crossVectors(r,Xt)),Oi.normalize(),on.crossVectors(Xt,Oi),a[0]=Oi.x,a[4]=on.x,a[8]=Xt.x,a[1]=Oi.y,a[5]=on.y,a[9]=Xt.y,a[2]=Oi.z,a[6]=on.z,a[10]=Xt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],c=r[1],p=r[5],u=r[9],f=r[13],_=r[2],y=r[6],m=r[10],d=r[14],M=r[3],T=r[7],v=r[11],E=r[15],w=a[0],A=a[4],g=a[8],b=a[12],L=a[1],P=a[5],D=a[9],j=a[13],N=a[2],z=a[6],$=a[10],H=a[14],he=a[3],q=a[7],Z=a[11],te=a[15];return n[0]=s*w+o*L+l*N+h*he,n[4]=s*A+o*P+l*z+h*q,n[8]=s*g+o*D+l*$+h*Z,n[12]=s*b+o*j+l*H+h*te,n[1]=c*w+p*L+u*N+f*he,n[5]=c*A+p*P+u*z+f*q,n[9]=c*g+p*D+u*$+f*Z,n[13]=c*b+p*j+u*H+f*te,n[2]=_*w+y*L+m*N+d*he,n[6]=_*A+y*P+m*z+d*q,n[10]=_*g+y*D+m*$+d*Z,n[14]=_*b+y*j+m*H+d*te,n[3]=M*w+T*L+v*N+E*he,n[7]=M*A+T*P+v*z+E*q,n[11]=M*g+T*D+v*$+E*Z,n[15]=M*b+T*j+v*H+E*te,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],c=t[2],p=t[6],u=t[10],f=t[14],_=t[3],y=t[7],m=t[11],d=t[15],M=l*f-h*u,T=o*f-h*p,v=o*u-l*p,E=s*f-h*c,w=s*u-l*c,A=s*p-o*c;return i*(y*M-m*T+d*v)-r*(_*M-m*E+d*w)+a*(_*T-y*E+d*A)-n*(_*v-y*w+m*A)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10];return i*(s*c-o*h)-r*(n*c-o*l)+a*(n*h-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],p=t[9],u=t[10],f=t[11],_=t[12],y=t[13],m=t[14],d=t[15],M=i*o-r*s,T=i*l-a*s,v=i*h-n*s,E=r*l-a*o,w=r*h-n*o,A=a*h-n*l,g=c*y-p*_,b=c*m-u*_,L=c*d-f*_,P=p*m-u*y,D=p*d-f*y,j=u*d-f*m,N=M*j-T*D+v*P+E*L-w*b+A*g;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/N;return t[0]=(o*j-l*D+h*P)*z,t[1]=(a*D-r*j-n*P)*z,t[2]=(y*A-m*w+d*E)*z,t[3]=(u*w-p*A-f*E)*z,t[4]=(l*L-s*j-h*b)*z,t[5]=(i*j-a*L+n*b)*z,t[6]=(m*v-_*A-d*T)*z,t[7]=(c*A-u*v+f*T)*z,t[8]=(s*D-o*L+h*g)*z,t[9]=(r*L-i*D-n*g)*z,t[10]=(_*w-y*v+d*M)*z,t[11]=(p*v-c*w-f*M)*z,t[12]=(o*b-s*P-l*g)*z,t[13]=(i*P-r*b+a*g)*z,t[14]=(y*T-_*E-m*M)*z,t[15]=(c*E-p*T+u*M)*z,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,h=n*s,c=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+r,c*l-a*s,0,h*l-a*o,c*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,c=s+s,p=o+o,u=n*h,f=n*c,_=n*p,y=s*c,m=s*p,d=o*p,M=l*h,T=l*c,v=l*p,E=r.x,w=r.y,A=r.z;return a[0]=(1-(y+d))*E,a[1]=(f+v)*E,a[2]=(_-T)*E,a[3]=0,a[4]=(f-v)*w,a[5]=(1-(u+d))*w,a[6]=(m+M)*w,a[7]=0,a[8]=(_+T)*A,a[9]=(m-M)*A,a[10]=(1-(u+y))*A,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=Lr.set(a[0],a[1],a[2]).length(),o=Lr.set(a[4],a[5],a[6]).length(),l=Lr.set(a[8],a[9],a[10]).length();n<0&&(s=-s),Jt.copy(this);let h=1/s,c=1/o,p=1/l;return Jt.elements[0]*=h,Jt.elements[1]*=h,Jt.elements[2]*=h,Jt.elements[4]*=c,Jt.elements[5]*=c,Jt.elements[6]*=c,Jt.elements[8]*=p,Jt.elements[9]*=p,Jt.elements[10]*=p,i.setFromRotationMatrix(Jt),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=ii,l=!1){let h=this.elements,c=2*n/(i-t),p=2*n/(r-a),u=(i+t)/(i-t),f=(r+a)/(r-a),_,y;if(l)_=n/(s-n),y=s*n/(s-n);else if(o===ii)_=-(s+n)/(s-n),y=-2*s*n/(s-n);else if(o===jn)_=-s/(s-n),y=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=p,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=_,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=ii,l=!1){let h=this.elements,c=2/(i-t),p=2/(r-a),u=-(i+t)/(i-t),f=-(r+a)/(r-a),_,y;if(l)_=1/(s-n),y=s/(s-n);else if(o===ii)_=-2/(s-n),y=-(s+n)/(s-n);else if(o===jn)_=-1/(s-n),y=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=p,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=_,h[14]=y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},dr.prototype.isMatrix4=!0,dr),Lr=new C,Jt=new Ye,Rp=new C(0,0,0),Cp=new C(1,1,1),Oi=new C,on=new C,Xt=new C,_h=new Ye,yh=new ai,oa=class Ic{constructor(t=0,i=0,r=0,a=Ic.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],c=a[9],p=a[2],u=a[6],f=a[10];switch(i){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,n),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Ze(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-p,n)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return _h.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_h,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return yh.setFromEuler(this),this.setFromQuaternion(yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oa.DEFAULT_ORDER="XYZ";rl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pp=0,xh=new C,Ir=new ai,Si=new Ye,ln=new C,ga=new C,Lp=new C,Ip=new ai,Mh=new C(1,0,0),bh=new C(0,1,0),Sh=new C(0,0,1),Th={type:"added"},Dp={type:"removed"},Dr={type:"childadded",child:null},Es={type:"childremoved",child:null},Di=class zn extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();let t=new C,i=new oa,r=new ai,a=new C(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ye},normalMatrix:{value:new je}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ir.setFromAxisAngle(t,i),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(t,i){return Ir.setFromAxisAngle(t,i),this.quaternion.premultiply(Ir),this}rotateX(t){return this.rotateOnAxis(Mh,t)}rotateY(t){return this.rotateOnAxis(bh,t)}rotateZ(t){return this.rotateOnAxis(Sh,t)}translateOnAxis(t,i){return xh.copy(t).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Mh,t)}translateY(t){return this.translateOnAxis(bh,t)}translateZ(t){return this.translateOnAxis(Sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?ln.copy(t):ln.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(ga,ln,this.up):Si.lookAt(ln,ga,this.up),this.quaternion.setFromRotationMatrix(Si),a&&(Si.extractRotation(a.matrixWorld),Ir.setFromRotationMatrix(Si),this.quaternion.premultiply(Ir.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Th),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Dp),Es.child=t,this.dispatchEvent(Es),Es.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Th),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,t,Lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,Ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let p=l[h];n(t.shapes,p)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),c=s(t.images),p=s(t.shapes),u=s(t.skeletons),f=s(t.animations),_=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),p.length>0&&(r.shapes=p),u.length>0&&(r.skeletons=u),f.length>0&&(r.animations=f),_.length>0&&(r.nodes=_)}return r.object=a,r;function s(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Di.DEFAULT_UP=new C(0,1,0);Di.DEFAULT_MATRIX_AUTO_UPDATE=!0;Di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Sa=class extends Di{constructor(){super(),this.isGroup=!0,this.type="Group"}},Np={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let _ of e.hand.values()){let y=t.getJointPose(_,i),m=this._getHandJoint(l,_);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],p=h.position.distanceTo(c.position),u=.02,f=.005;l.inputState.pinching&&p>u+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=u-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Np)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Sa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},hn={h:0,s:0,l:0};tt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=tl(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=As(n,a,e+1/3),this.g=As(n,a,e),this.b=As(n,a,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=At){function i(a){a!==void 0&&parseFloat(a)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let i=Dc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Qe.workingToColorSpace(Nt.copy(this),e),Math.round(Ze(Nt.r*255,0,255))*65536+Math.round(Ze(Nt.g*255,0,255))*256+Math.round(Ze(Nt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Nt.copy(this),t);let i=Nt.r,r=Nt.g,a=Nt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=h<=.5?c/(n+s):c/(2-n-s),n){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=At){Qe.workingToColorSpace(Nt.copy(this),e);let t=Nt.r,i=Nt.g,r=Nt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(hn);let i=Aa(Fi.h,hn.h,t),r=Aa(Fi.s,hn.s,t),a=Aa(Fi.l,hn.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nt=new tt;tt.NAMES=Dc;Ga=class extends Di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qt=new C,Ti=new C,Rs=new C,Ei=new C,Nr=new C,Ur=new C,Eh=new C,Cs=new C,Ps=new C,Ls=new C,Is=new pt,Ds=new pt,Ns=new pt,qr=class Yr{constructor(t=new C,i=new C,r=new C){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),Qt.subVectors(t,i),a.cross(Qt);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){Qt.subVectors(a,i),Ti.subVectors(r,i),Rs.subVectors(t,i);let s=Qt.dot(Qt),o=Qt.dot(Ti),l=Qt.dot(Rs),h=Ti.dot(Ti),c=Ti.dot(Rs),p=s*h-o*o;if(p===0)return n.set(0,0,0),null;let u=1/p,f=(h*l-o*c)*u,_=(s*c-o*l)*u;return n.set(1-f-_,_,f)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Ei.x),l.addScaledVector(s,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return Is.setScalar(0),Ds.setScalar(0),Ns.setScalar(0),Is.fromBufferAttribute(t,i),Ds.fromBufferAttribute(t,r),Ns.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Is,n.x),s.addScaledVector(Ds,n.y),s.addScaledVector(Ns,n.z),s}static isFrontFacing(t,i,r,a){return Qt.subVectors(r,i),Ti.subVectors(t,i),Qt.cross(Ti).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qt.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Qt.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Yr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Yr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Yr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;Nr.subVectors(a,r),Ur.subVectors(n,r),Cs.subVectors(t,r);let l=Nr.dot(Cs),h=Ur.dot(Cs);if(l<=0&&h<=0)return i.copy(r);Ps.subVectors(t,a);let c=Nr.dot(Ps),p=Ur.dot(Ps);if(c>=0&&p<=c)return i.copy(a);let u=l*p-c*h;if(u<=0&&l>=0&&c<=0)return s=l/(l-c),i.copy(r).addScaledVector(Nr,s);Ls.subVectors(t,n);let f=Nr.dot(Ls),_=Ur.dot(Ls);if(_>=0&&f<=_)return i.copy(n);let y=f*h-l*_;if(y<=0&&h>=0&&_<=0)return o=h/(h-_),i.copy(r).addScaledVector(Ur,o);let m=c*_-f*p;if(m<=0&&p-c>=0&&f-_>=0)return Eh.subVectors(n,a),o=(p-c)/(p-c+(f-_)),i.copy(a).addScaledVector(Eh,o);let d=1/(m+y+u);return s=y*d,o=u*d,i.copy(r).addScaledVector(Nr,s).addScaledVector(Ur,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wi=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,ei):ei.fromBufferAttribute(a,n),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cn.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cn.copy(i.boundingBox)),cn.applyMatrix4(e.matrixWorld),this.union(cn)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),un.subVectors(this.max,va),Or.subVectors(e.a,va),Fr.subVectors(e.b,va),Br.subVectors(e.c,va),Bi.subVectors(Fr,Or),zi.subVectors(Br,Fr),ar.subVectors(Or,Br);let t=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-ar.z,ar.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,ar.z,0,-ar.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-ar.y,ar.x,0];return!Us(t,Or,Fr,Br,un)||(t=[1,0,0,0,1,0,0,0,1],!Us(t,Or,Fr,Br,un))?!1:(dn.crossVectors(Bi,zi),t=[dn.x,dn.y,dn.z],Us(t,Or,Fr,Br,un))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wi=[new C,new C,new C,new C,new C,new C,new C,new C],ei=new C,cn=new Wi,Or=new C,Fr=new C,Br=new C,Bi=new C,zi=new C,ar=new C,va=new C,un=new C,dn=new C,nr=new C;qy=Up();Tt=new C,pn=new ne,Op=0,gi=class extends vr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Op++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ep,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXY(t,pn.x,pn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=jr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),a=Ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Nc=class extends gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Uc=class extends gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ke=class extends gi{constructor(e,t,i){super(new Float32Array(e),t,i)}},Fp=new Wi,_a=new C,Os=new C,Xi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Fp.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);let t=_a.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_a,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Os.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Os)),this.expandByPoint(_a.copy(e.center).sub(Os))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Bp=0,Zt=new Ye,Fs=new Di,zr=new C,jt=new Wi,ya=new Wi,Pt=new C,yt=class Oc extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tp(t)?Uc:Nc)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new je().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Zt.makeRotationFromQuaternion(t),this.applyMatrix4(Zt),this}rotateX(t){return Zt.makeRotationX(t),this.applyMatrix4(Zt),this}rotateY(t){return Zt.makeRotationY(t),this.applyMatrix4(Zt),this}rotateZ(t){return Zt.makeRotationZ(t),this.applyMatrix4(Zt),this}translate(t,i,r){return Zt.makeTranslation(t,i,r),this.applyMatrix4(Zt),this}scale(t,i,r){return Zt.makeScale(t,i,r),this.applyMatrix4(Zt),this}lookAt(t){return Fs.lookAt(t),Fs.updateMatrix(),this.applyMatrix4(Fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ke(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];jt.setFromBufferAttribute(n),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let r=this.boundingSphere.center;if(jt.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];ya.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(jt.min,ya.min),jt.expandByPoint(Pt),Pt.addVectors(jt.max,ya.max),jt.expandByPoint(Pt)):(jt.expandByPoint(ya.min),jt.expandByPoint(ya.max))}jt.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Pt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Pt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Pt.fromBufferAttribute(o,h),l&&(zr.fromBufferAttribute(t,h),Pt.add(zr)),a=Math.max(a,r.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new gi(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let g=0;g<r.count;g++)o[g]=new C,l[g]=new C;let h=new C,c=new C,p=new C,u=new ne,f=new ne,_=new ne,y=new C,m=new C;function d(g,b,L){h.fromBufferAttribute(r,g),c.fromBufferAttribute(r,b),p.fromBufferAttribute(r,L),u.fromBufferAttribute(n,g),f.fromBufferAttribute(n,b),_.fromBufferAttribute(n,L),c.sub(h),p.sub(h),f.sub(u),_.sub(u);let P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(y.copy(c).multiplyScalar(_.y).addScaledVector(p,-f.y).multiplyScalar(P),m.copy(p).multiplyScalar(f.x).addScaledVector(c,-_.x).multiplyScalar(P),o[g].add(y),o[b].add(y),o[L].add(y),l[g].add(m),l[b].add(m),l[L].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let g=0,b=M.length;g<b;++g){let L=M[g],P=L.start,D=L.count;for(let j=P,N=P+D;j<N;j+=3)d(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let T=new C,v=new C,E=new C,w=new C;function A(g){E.fromBufferAttribute(a,g),w.copy(E);let b=o[g];T.copy(b),T.sub(E.multiplyScalar(E.dot(b))).normalize(),v.crossVectors(w,b);let L=v.dot(l[g])<0?-1:1;s.setXYZW(g,T.x,T.y,T.z,L)}for(let g=0,b=M.length;g<b;++g){let L=M[g],P=L.start,D=L.count;for(let j=P,N=P+D;j<N;j+=3)A(t.getX(j+0)),A(t.getX(j+1)),A(t.getX(j+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new gi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,f=r.count;u<f;u++)r.setXYZ(u,0,0,0);let a=new C,n=new C,s=new C,o=new C,l=new C,h=new C,c=new C,p=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){let _=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);a.fromBufferAttribute(i,_),n.fromBufferAttribute(i,y),s.fromBufferAttribute(i,m),c.subVectors(s,n),p.subVectors(a,n),c.cross(p),o.fromBufferAttribute(r,_),l.fromBufferAttribute(r,y),h.fromBufferAttribute(r,m),o.add(c),l.add(c),h.add(c),r.setXYZ(_,o.x,o.y,o.z),r.setXYZ(y,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,f=i.count;u<f;u+=3)a.fromBufferAttribute(i,u+0),n.fromBufferAttribute(i,u+1),s.fromBufferAttribute(i,u+2),c.subVectors(s,n),p.subVectors(a,n),c.cross(p),r.setXYZ(u+0,c.x,c.y,c.z),r.setXYZ(u+1,c.x,c.y,c.z),r.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Pt.fromBufferAttribute(t,i),Pt.normalize(),t.setXYZ(i,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,p=o.normalized,u=new h.constructor(l.length*c),f=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*c;for(let d=0;d<c;d++)u[_++]=h[f++]}return new gi(u,c,p)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Oc,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let c=0,p=h.length;c<p;c++){let u=h[c],f=t(u,r);l.push(f)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let p=0,u=h.length;p<u;p++){let f=h[p];c.push(f.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let n=t.morphAttributes;for(let h in n){let c=[],p=n[h];for(let u=0,f=p.length;u<f;u++)c.push(p[u].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,c=s.length;h<c;h++){let p=s[h];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yy=new C,Bs=new C,zp=new C,Gp=new je,ki=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Bs.subVectors(i,t).cross(zp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Bs),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Gp.getNormalMatrix(e),r=this.coplanarPoint(Bs).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},kp=0,Zn=class extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=wa,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=fc,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ki().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ne().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zy=new C,$y=new C,Ky=new C,Jy=new ne,Qy=new ne,ex=new Ye,tx=new C,ix=new C,rx=new C,ax=new ne,nx=new ne,sx=new ne,ox=new C,lx=new C,Ai=new C,zs=new C,fn=new C,mn=new C,ka=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){zs.copy(e).add(t).multiplyScalar(.5),fn.copy(t).sub(e).normalize(),mn.copy(this.origin).sub(zs);let a=e.distanceTo(t)*.5,n=-this.direction.dot(fn),s=mn.dot(this.direction),o=-mn.dot(fn),l=mn.lengthSq(),h=Math.abs(1-n*n),c,p,u,f;if(h>0)if(c=n*o-s,p=n*s-o,f=a*h,c>=0)if(p>=-f)if(p<=f){let _=1/h;c*=_,p*=_,u=c*(c+n*p+2*s)+p*(n*c+p+2*o)+l}else p=a,c=Math.max(0,-(n*p+s)),u=-c*c+p*(p+2*o)+l;else p=-a,c=Math.max(0,-(n*p+s)),u=-c*c+p*(p+2*o)+l;else p<=-f?(c=Math.max(0,-(-n*a+s)),p=c>0?-a:Math.min(Math.max(-a,-o),a),u=-c*c+p*(p+2*o)+l):p<=f?(c=0,p=Math.min(Math.max(-a,-o),a),u=p*(p+2*o)+l):(c=Math.max(0,-(n*a+s)),p=c>0?a:Math.min(Math.max(-a,-o),a),u=-c*c+p*(p+2*o)+l);else p=n>0?-a:a,c=Math.max(0,-(n*p+s)),u=-c*c+p*(p+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(zs).addScaledVector(fn,p),u}intersectSphere(e,t){if(e.radius<0)return null;Ai.subVectors(e.center,this.origin);let i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),h>=0?(a=(e.min.y-p.y)*h,n=(e.max.y-p.y)*h):(a=(e.max.y-p.y)*h,n=(e.min.y-p.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),c>=0?(s=(e.min.z-p.z)*c,o=(e.max.z-p.z)*c):(s=(e.max.z-p.z)*c,o=(e.min.z-p.z)*c),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,h=s.z,c=e.x-n.x,p=e.y-n.y,u=e.z-n.z,f=t.x-n.x,_=t.y-n.y,y=t.z-n.z,m=i.x-n.x,d=i.y-n.y,M=i.z-n.z,T=Math.abs(o),v=Math.abs(l),E=Math.abs(h),w,A,g,b,L,P,D,j,N,z,$,H;if(T>=v&&T>=E?(g=o,P=c,N=f,H=m,o>=0?(w=l,A=h,b=p,L=u,D=_,j=y,z=d,$=M):(w=h,A=l,b=u,L=p,D=y,j=_,z=M,$=d)):v>=E?(g=l,P=p,N=_,H=d,l>=0?(w=h,A=o,b=u,L=c,D=y,j=f,z=M,$=m):(w=o,A=h,b=c,L=u,D=f,j=y,z=m,$=M)):(g=h,P=u,N=y,H=M,h>=0?(w=o,A=l,b=c,L=p,D=f,j=_,z=m,$=d):(w=l,A=o,b=p,L=c,D=_,j=f,z=d,$=m)),g===0)return null;let he=w/g,q=A/g,Z=1/g,te=b-he*P,Oe=L-q*P,Ae=D-he*N,it=j-q*N,re=z-he*H,k=$-q*H,ie=re*it-k*Ae,K=te*k-Oe*re,be=Ae*Oe-it*te;if(r){if(ie<0||K<0||be<0)return null}else if((ie<0||K<0||be<0)&&(ie>0||K>0||be>0))return null;let Le=ie+K+be;if(Le===0)return null;let ce=Z*(ie*P+K*N+be*H);return(Le>0?ce<0:ce>0)?null:this.at(ce/Le,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fc=class extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wh=new Ye,sr=new ka,gn=new Xi,Ah=new C,vn=new C,_n=new C,yn=new C,Gs=new C,xn=new C,Rh=new C,Mn=new C,Ut=class extends Di{constructor(e=new yt,t=new Fc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){xn.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],c=a[o];h!==0&&(Gs.fromBufferAttribute(c,e),n?xn.addScaledVector(Gs,h):xn.addScaledVector(Gs.sub(t),h))}t.add(xn)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gn.copy(i.boundingSphere),gn.applyMatrix4(a),sr.copy(e.ray).recast(e.near),!(gn.containsPoint(sr.origin)===!1&&(sr.intersectSphere(gn,Ah)===null||sr.origin.distanceToSquared(Ah)>(e.far-e.near)**2))&&(wh.copy(a).invert(),sr.copy(e.ray).applyMatrix4(wh),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,p=a.groups,u=a.drawRange;if(s!==null)if(Array.isArray(n))for(let f=0,_=p.length;f<_;f++){let y=p[f],m=n[y.materialIndex],d=Math.max(y.start,u.start),M=Math.min(s.count,Math.min(y.start+y.count,u.start+u.count));for(let T=d,v=M;T<v;T+=3){let E=s.getX(T),w=s.getX(T+1),A=s.getX(T+2);r=bn(this,m,e,i,l,h,c,E,w,A),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let f=Math.max(0,u.start),_=Math.min(s.count,u.start+u.count);for(let y=f,m=_;y<m;y+=3){let d=s.getX(y),M=s.getX(y+1),T=s.getX(y+2);r=bn(this,n,e,i,l,h,c,d,M,T),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let f=0,_=p.length;f<_;f++){let y=p[f],m=n[y.materialIndex],d=Math.max(y.start,u.start),M=Math.min(o.count,Math.min(y.start+y.count,u.start+u.count));for(let T=d,v=M;T<v;T+=3){let E=T,w=T+1,A=T+2;r=bn(this,m,e,i,l,h,c,E,w,A),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let f=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let y=f,m=_;y<m;y+=3){let d=y,M=y+1,T=y+2;r=bn(this,n,e,i,l,h,c,d,M,T),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}};hx=new pt,cx=new pt,ux=new pt,dx=new pt,px=new Ye,fx=new C,mx=new Xi,gx=new Ye,vx=new ka,Hp=class extends Kt{constructor(e=null,t=1,i=1,r,a,n,s,o,l=It,h=It,c,p){super(null,n,s,o,l,h,r,a,c,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_x=new Ye,yx=new Ye,xx=new Ye,Mx=new Ye,bx=new Wi,Sx=new Ye,Tx=new Ut,Ex=new Xi,or=new Xi,Wp=new ne(.5,.5),Sn=new C,Ua=class{constructor(e=new ki,t=new ki,i=new ki,r=new ki,a=new ki,n=new ki){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],h=a[4],c=a[5],p=a[6],u=a[7],f=a[8],_=a[9],y=a[10],m=a[11],d=a[12],M=a[13],T=a[14],v=a[15];if(r[0].setComponents(l-n,u-h,m-f,v-d).normalize(),r[1].setComponents(l+n,u+h,m+f,v+d).normalize(),r[2].setComponents(l+s,u+c,m+_,v+M).normalize(),r[3].setComponents(l-s,u-c,m-_,v-M).normalize(),i)r[4].setComponents(o,p,y,T).normalize(),r[5].setComponents(l-o,u-p,m-y,v-T).normalize();else if(r[4].setComponents(l-o,u-p,m-y,v-T).normalize(),t===ii)r[5].setComponents(l+o,u+p,m+y,v+T).normalize();else if(t===jn)r[5].setComponents(o,p,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){or.center.set(0,0,0);let t=Wp.distanceTo(e.center);return or.radius=.7071067811865476+t,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Sn.x=r.normal.x>0?e.max.x:e.min.x,Sn.y=r.normal.y>0?e.max.y:e.min.y,Sn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sn)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ch=new Ye,Xp=class Bc{constructor(){this.coordinateSystem=ii,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];Ch.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new Ua),r[a].setFromProjectionMatrix(Ch,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new Ua),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new Bc().copy(this)}},jp=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let a=this.pool,n=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let s=a[this.index];n.push(s),this.index++,s.start=e,s.count=t,s.z=i,s.index=r}reset(){this.list.length=0,this.index=0}},wx=new Ye,Ax=new tt(1,1,1),Rx=new Ua,Cx=new Xp,Px=new Wi,Lx=new Xi,Ix=new C,Dx=new C,Nx=new C,Ux=new jp,Ox=new Ut,Fx=new C,Bx=new C,zx=new Ye,Gx=new ka,kx=new Xi,Vx=new C,Hx=new C,Wx=new C,Xx=new C,jx=new Ye,qx=new ka,Yx=new Xi,Zx=new C,zc=class extends Kt{constructor(e=[],t=fr,i,r,a,n,s,o,l,h){super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Oa=class extends Kt{constructor(e,t,i=vi,r,a,n,s=It,o=It,l,h=Ii,c=1){if(h!==Ii&&h!==cr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:c};super(p,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new il(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},qp=class extends Oa{constructor(e,t=vi,i=fr,r,a,n=It,s=It,o,l=Ii){let h={width:e,height:e,depth:1},c=[h,h,h,h,h,h];super(e,e,t,i,r,a,n,s,o,l),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Gc=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Va=class kc extends yt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],p=[],u=0,f=0;_("z","y","x",-1,-1,r,i,t,s,n,0),_("z","y","x",1,-1,r,i,-t,s,n,1),_("x","z","y",1,1,t,r,i,a,s,2),_("x","z","y",1,-1,t,r,-i,a,s,3),_("x","y","z",1,-1,t,i,r,a,n,4),_("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(p,2));function _(y,m,d,M,T,v,E,w,A,g,b){let L=v/A,P=E/g,D=v/2,j=E/2,N=w/2,z=A+1,$=g+1,H=0,he=0,q=new C;for(let Z=0;Z<$;Z++){let te=Z*P-j;for(let Oe=0;Oe<z;Oe++){let Ae=Oe*L-D;q[y]=Ae*M,q[m]=te*T,q[d]=N,h.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[d]=w>0?1:-1,c.push(q.x,q.y,q.z),p.push(Oe/A),p.push(1-Z/g),H+=1}}for(let Z=0;Z<g;Z++)for(let te=0;te<A;te++){let Oe=u+te+z*Z,Ae=u+te+z*(Z+1),it=u+(te+1)+z*(Z+1),re=u+(te+1)+z*Z;l.push(Oe,Ae,re),l.push(Ae,it,re),he+=6}o.addGroup(f,he,b),f+=he,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Yp=class Vc extends yt{constructor(t=1,i=1,r=4,a=8,n=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:r,radialSegments:a,heightSegments:n},i=Math.max(0,i),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),n=Math.max(1,Math.floor(n));let s=[],o=[],l=[],h=[],c=i/2,p=Math.PI/2*t,u=i,f=2*p+u,_=r*2+n,y=a+1,m=new C,d=new C;for(let M=0;M<=_;M++){let T=0,v=0,E=0,w=0;if(M<=r){let b=M/r,L=b*Math.PI/2;v=-c-t*Math.cos(L),E=t*Math.sin(L),w=-t*Math.cos(L),T=b*p}else if(M<=r+n){let b=(M-r)/n;v=-c+b*i,E=t,w=0,T=p+b*u}else{let b=(M-r-n)/r,L=b*Math.PI/2;v=c+t*Math.sin(L),E=t*Math.cos(L),w=t*Math.sin(L),T=p+u+b*p}let A=Math.max(0,Math.min(1,T/f)),g=0;M===0?g=.5/a:M===_&&(g=-.5/a);for(let b=0;b<=a;b++){let L=b/a,P=L*Math.PI*2,D=Math.sin(P),j=Math.cos(P);d.x=-E*j,d.y=v,d.z=E*D,o.push(d.x,d.y,d.z),m.set(-E*j,w,E*D),m.normalize(),l.push(m.x,m.y,m.z),h.push(L+g,A)}if(M>0){let b=(M-1)*y;for(let L=0;L<a;L++){let P=b+L,D=b+L+1,j=M*y+L,N=M*y+L+1;s.push(P,D,j),s.push(D,N,j)}}}this.setIndex(s),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vc(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Zp=class Hc extends yt{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],h=new C,c=new ne;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,u=3;p<=i;p++,u+=3){let f=r+p/i*a;h.x=t*Math.cos(f),h.y=t*Math.sin(f),s.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(s[u]/t+1)/2,c.y=(s[u+1]/t+1)/2,l.push(c.x,c.y)}for(let p=1;p<=i;p++)n.push(p,p+1,0);this.setIndex(n),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(o,3)),this.setAttribute("uv",new ke(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Wc=class Xc extends yt{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let c=[],p=[],u=[],f=[],_=0,y=[],m=r/2,d=0;M(),s===!1&&(t>0&&T(!0),i>0&&T(!1)),this.setIndex(c),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(f,2));function M(){let v=new C,E=new C,w=0,A=(i-t)/r;for(let g=0;g<=n;g++){let b=[],L=g/n,P=L*(i-t)+t;for(let D=0;D<=a;D++){let j=D/a,N=j*l+o,z=Math.sin(N),$=Math.cos(N);E.x=P*z,E.y=-L*r+m,E.z=P*$,p.push(E.x,E.y,E.z),v.set(z,A,$).normalize(),u.push(v.x,v.y,v.z),f.push(j,1-L),b.push(_++)}y.push(b)}for(let g=0;g<a;g++)for(let b=0;b<n;b++){let L=y[b][g],P=y[b+1][g],D=y[b+1][g+1],j=y[b][g+1];(t>0||b!==0)&&(c.push(L,P,j),w+=3),(i>0||b!==n-1)&&(c.push(P,D,j),w+=3)}h.addGroup(d,w,0),d+=w}function T(v){let E=_,w=new ne,A=new C,g=0,b=v===!0?t:i,L=v===!0?1:-1;for(let D=1;D<=a;D++)p.push(0,m*L,0),u.push(0,L,0),f.push(.5,.5),_++;let P=_;for(let D=0;D<=a;D++){let j=D/a*l+o,N=Math.cos(j),z=Math.sin(j);A.x=b*z,A.y=m*L,A.z=b*N,p.push(A.x,A.y,A.z),u.push(0,L,0),w.x=N*.5+.5,w.y=z*.5*L+.5,f.push(w.x,w.y),_++}for(let D=0;D<a;D++){let j=E+D,N=P+D;v===!0?c.push(N,N+1,j):c.push(N+1,N,j),g+=3}h.addGroup(d,g,v===!0?1:2),d+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$p=class jc extends Wc{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new jc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ha=class qc extends yt{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let n=[],s=[];o(a),h(r),c(),this.setAttribute("position",new ke(n,3)),this.setAttribute("normal",new ke(n.slice(),3)),this.setAttribute("uv",new ke(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let T=new C,v=new C,E=new C;for(let w=0;w<i.length;w+=3)f(i[w+0],T),f(i[w+1],v),f(i[w+2],E),l(T,v,E,M)}function l(M,T,v,E){let w=E+1,A=[];for(let g=0;g<=w;g++){A[g]=[];let b=M.clone().lerp(v,g/w),L=T.clone().lerp(v,g/w),P=w-g;for(let D=0;D<=P;D++)D===0&&g===w?A[g][D]=b:A[g][D]=b.clone().lerp(L,D/P)}for(let g=0;g<w;g++)for(let b=0;b<2*(w-g)-1;b++){let L=Math.floor(b/2);b%2===0?(u(A[g][L+1]),u(A[g+1][L]),u(A[g][L])):(u(A[g][L+1]),u(A[g+1][L+1]),u(A[g+1][L]))}}function h(M){let T=new C;for(let v=0;v<n.length;v+=3)T.x=n[v+0],T.y=n[v+1],T.z=n[v+2],T.normalize().multiplyScalar(M),n[v+0]=T.x,n[v+1]=T.y,n[v+2]=T.z}function c(){let M=new C;for(let T=0;T<n.length;T+=3){M.x=n[T+0],M.y=n[T+1],M.z=n[T+2];let v=m(M)/2/Math.PI+.5,E=d(M)/Math.PI+.5;s.push(v,1-E)}_(),p()}function p(){for(let M=0;M<s.length;M+=6){let T=s[M+0],v=s[M+2],E=s[M+4],w=Math.max(T,v,E),A=Math.min(T,v,E);w>.9&&A<.1&&(T<.2&&(s[M+0]+=1),v<.2&&(s[M+2]+=1),E<.2&&(s[M+4]+=1))}}function u(M){n.push(M.x,M.y,M.z)}function f(M,T){let v=M*3;T.x=t[v+0],T.y=t[v+1],T.z=t[v+2]}function _(){let M=new C,T=new C,v=new C,E=new C,w=new ne,A=new ne,g=new ne;for(let b=0,L=0;b<n.length;b+=9,L+=6){M.set(n[b+0],n[b+1],n[b+2]),T.set(n[b+3],n[b+4],n[b+5]),v.set(n[b+6],n[b+7],n[b+8]),w.set(s[L+0],s[L+1]),A.set(s[L+2],s[L+3]),g.set(s[L+4],s[L+5]),E.copy(M).add(T).add(v).divideScalar(3);let P=m(E);y(w,L+0,M,P),y(A,L+2,T,P),y(g,L+4,v,P)}}function y(M,T,v,E){E<0&&M.x===1&&(s[T]=M.x-1),v.x===0&&v.z===0&&(s[T]=E/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qc(t.vertices,t.indices,t.radius,t.detail)}},Kp=class Yc extends Ha{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=1/r,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,s,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Yc(t.radius,t.detail)}},Tn=new C,En=new C,ks=new C,wn=new qr,Jp=class extends yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(Jr*t),a=e.getIndex(),n=e.getAttribute("position"),s=a?a.count:n.count,o=[0,0,0],l=["a","b","c"],h=new Array(3),c={},p=[];for(let u=0;u<s;u+=3){a?(o[0]=a.getX(u),o[1]=a.getX(u+1),o[2]=a.getX(u+2)):(o[0]=u,o[1]=u+1,o[2]=u+2);let{a:f,b:_,c:y}=wn;if(f.fromBufferAttribute(n,o[0]),_.fromBufferAttribute(n,o[1]),y.fromBufferAttribute(n,o[2]),wn.getNormal(ks),h[0]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,h[1]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){let d=(m+1)%3,M=h[m],T=h[d],v=wn[l[m]],E=wn[l[d]],w=`${M}_${T}`,A=`${T}_${M}`;A in c&&c[A]?(ks.dot(c[A].normal)<=r&&(p.push(v.x,v.y,v.z),p.push(E.x,E.y,E.z)),c[A]=null):w in c||(c[w]={index0:o[m],index1:o[d],normal:ks.clone()})}}for(let u in c)if(c[u]){let{index0:f,index1:_}=c[u];Tn.fromBufferAttribute(n,f),En.fromBufferAttribute(n,_),p.push(Tn.x,Tn.y,Tn.z),p.push(En.x,En.y,En.z)}this.setAttribute("position",new ke(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},yi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let h=i[r],c=i[r+1]-h,p=(n-h)/c;return(r+p)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new ne:new C);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,r=[],a=[],n=[],s=new C,o=new Ye;for(let u=0;u<=e;u++){let f=u/e;r[u]=this.getTangentAt(f,new C)}a[0]=new C,n[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),p=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),p<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let u=1;u<=e;u++){if(a[u]=a[u-1].clone(),n[u]=n[u-1].clone(),s.crossVectors(r[u-1],r[u]),s.length()>Number.EPSILON){s.normalize();let f=Math.acos(Ze(r[u-1].dot(r[u]),-1,1));a[u].applyMatrix4(o.makeRotationAxis(s,f))}n[u].crossVectors(r[u],a[u])}if(t===!0){let u=Math.acos(Ze(a[0].dot(a[e]),-1,1));u/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(u=-u);for(let f=1;f<=e;f++)a[f].applyMatrix4(o.makeRotationAxis(r[f],u*f)),n[f].crossVectors(r[f],a[f])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},al=class extends yi{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new ne){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),p=o-this.aX,u=l-this.aY;o=p*h-u*c+this.aX,l=p*c+u*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qp=class extends al{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};Ph=new C,Lh=new C,Vs=new nl,Hs=new nl,Ws=new nl,ef=class extends yi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=r[(s-1)%a]:(Lh.subVectors(r[0],r[1]).add(r[0]),l=Lh);let c=r[s%a],p=r[(s+1)%a];if(this.closed||s+2<a?h=r[(s+2)%a]:(Ph.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=Ph),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(c),u),_=Math.pow(c.distanceToSquared(p),u),y=Math.pow(p.distanceToSquared(h),u);_<1e-4&&(_=1),f<1e-4&&(f=_),y<1e-4&&(y=_),Vs.initNonuniformCatmullRom(l.x,c.x,p.x,h.x,f,_,y),Hs.initNonuniformCatmullRom(l.y,c.y,p.y,h.y,f,_,y),Ws.initNonuniformCatmullRom(l.z,c.z,p.z,h.z,f,_,y)}else this.curveType==="catmullrom"&&(Vs.initCatmullRom(l.x,c.x,p.x,h.x,this.tension),Hs.initCatmullRom(l.y,c.y,p.y,h.y,this.tension),Ws.initCatmullRom(l.z,c.z,p.z,h.z,this.tension));return i.set(Vs.calc(o),Hs.calc(o),Ws.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Zc=class extends yi{constructor(e=new ne,t=new ne,i=new ne,r=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ne){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Ca(e,r.x,a.x,n.x,s.x),Ca(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hf=class extends yi{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Ca(e,r.x,a.x,n.x,s.x),Ca(e,r.y,a.y,n.y,s.y),Ca(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$c=class extends yi{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cf=class extends yi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kc=class extends yi{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Ra(e,r.x,a.x,n.x),Ra(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jc=class extends yi{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Ra(e,r.x,a.x,n.x),Ra(e,r.y,a.y,n.y),Ra(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qc=class extends yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],c=r[n>r.length-3?r.length-1:n+2];return i.set(Ih(s,o.x,l.x,h.x,c.x),Ih(s,o.y,l.y,h.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ne().fromArray(r))}return this}},qn=Object.freeze({__proto__:null,ArcCurve:Qp,CatmullRomCurve3:ef,CubicBezierCurve:Zc,CubicBezierCurve3:hf,EllipseCurve:al,LineCurve:$c,LineCurve3:cf,QuadraticBezierCurve:Kc,QuadraticBezierCurve3:Jc,SplineCurve:Qc}),uf=class extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qn[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new qn[r.type]().fromJSON(r))}return this}},Dh=class extends uf{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new $c(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new Kc(this.currentPoint.clone(),new ne(e,t),new ne(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new Zc(this.currentPoint.clone(),new ne(e,t),new ne(i,r),new ne(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Qc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new al(e,t,i,r,a,n,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},eu=class extends Dh{constructor(e){super(e),this.uuid=_r(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Dh().fromJSON(r))}return this}};Cf=class{static triangulate(e,t,i=2){return df(e,t,i)}},ur=class nu{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return nu.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];Uh(t),Oh(r,t);let s=t.length;i.forEach(Uh);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,Oh(r,i[l]);let o=Cf.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};Pf=class su extends yt{constructor(t=new eu([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new ke(a,3)),this.setAttribute("uv",new ke(n,2)),this.computeVertexNormals();function s(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,p=i.depth!==void 0?i.depth:1,u=i.bevelEnabled!==void 0?i.bevelEnabled:!0,f=i.bevelThickness!==void 0?i.bevelThickness:.2,_=i.bevelSize!==void 0?i.bevelSize:f-.1,y=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,d=i.extrudePath,M=i.UVGenerator!==void 0?i.UVGenerator:Lf,T,v=!1,E,w,A,g;if(d){T=d.getSpacedPoints(c),v=!0,u=!1;let J=d.isCatmullRomCurve3?d.closed:!1;E=d.computeFrenetFrames(c,J),w=new C,A=new C,g=new C}u||(m=0,f=0,_=0,y=0);let b=o.extractPoints(h),L=b.shape,P=b.holes;if(!ur.isClockWise(L)){L=L.reverse();for(let J=0,Y=P.length;J<Y;J++){let se=P[J];ur.isClockWise(se)&&(P[J]=se.reverse())}}function D(J){let Y=10000000000000001e-36,se=J[0];for(let ve=1;ve<=J.length;ve++){let ye=ve%J.length,Te=J[ye],De=Te.x-se.x,We=Te.y-se.y,Xe=De*De+We*We,I=Math.max(Math.abs(Te.x),Math.abs(Te.y),Math.abs(se.x),Math.abs(se.y)),ct=Y*I*I;if(Xe<=ct){J.splice(ye,1),ve--;continue}se=Te}}D(L),P.forEach(D);let j=P.length,N=L;for(let J=0;J<j;J++){let Y=P[J];L=L.concat(Y)}function z(J,Y,se){return Y||Ge("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(Y,se)}let $=L.length;function H(J,Y,se){let ve,ye,Te,De=J.x-Y.x,We=J.y-Y.y,Xe=se.x-J.x,I=se.y-J.y,ct=De*De+We*We,Je=De*I-We*Xe;if(Math.abs(Je)>Number.EPSILON){let $e=Math.sqrt(ct),R=Math.sqrt(Xe*Xe+I*I),x=Y.x-We/$e,U=Y.y+De/$e,W=se.x-I/R,ee=se.y+Xe/R,fe=((W-x)*I-(ee-U)*Xe)/(De*I-We*Xe);ve=x+De*fe-J.x,ye=U+We*fe-J.y;let me=ve*ve+ye*ye;if(me<=2)return new ne(ve,ye);Te=Math.sqrt(me/2)}else{let $e=!1;De>Number.EPSILON?Xe>Number.EPSILON&&($e=!0):De<-Number.EPSILON?Xe<-Number.EPSILON&&($e=!0):Math.sign(We)===Math.sign(I)&&($e=!0),$e?(ve=-We,ye=De,Te=Math.sqrt(ct)):(ve=De,ye=We,Te=Math.sqrt(ct/2))}return new ne(ve/Te,ye/Te)}let he=[];for(let J=0,Y=N.length,se=Y-1,ve=J+1;J<Y;J++,se++,ve++)se===Y&&(se=0),ve===Y&&(ve=0),he[J]=H(N[J],N[se],N[ve]);let q=[],Z,te=he.concat();for(let J=0,Y=j;J<Y;J++){let se=P[J];Z=[];for(let ve=0,ye=se.length,Te=ye-1,De=ve+1;ve<ye;ve++,Te++,De++)Te===ye&&(Te=0),De===ye&&(De=0),Z[ve]=H(se[ve],se[Te],se[De]);q.push(Z),te=te.concat(Z)}let Oe;if(m===0)Oe=ur.triangulateShape(N,P);else{let J=[],Y=[];for(let se=0;se<m;se++){let ve=se/m,ye=f*Math.cos(ve*Math.PI/2),Te=_*Math.sin(ve*Math.PI/2)+y;for(let De=0,We=N.length;De<We;De++){let Xe=z(N[De],he[De],Te);K(Xe.x,Xe.y,-ye),ve===0&&J.push(Xe)}for(let De=0,We=j;De<We;De++){let Xe=P[De];Z=q[De];let I=[];for(let ct=0,Je=Xe.length;ct<Je;ct++){let $e=z(Xe[ct],Z[ct],Te);K($e.x,$e.y,-ye),ve===0&&I.push($e)}ve===0&&Y.push(I)}}Oe=ur.triangulateShape(J,Y)}let Ae=Oe.length,it=_+y;for(let J=0;J<$;J++){let Y=u?z(L[J],te[J],it):L[J];v?(A.copy(E.normals[0]).multiplyScalar(Y.x),w.copy(E.binormals[0]).multiplyScalar(Y.y),g.copy(T[0]).add(A).add(w),K(g.x,g.y,g.z)):K(Y.x,Y.y,0)}for(let J=1;J<=c;J++)for(let Y=0;Y<$;Y++){let se=u?z(L[Y],te[Y],it):L[Y];v?(A.copy(E.normals[J]).multiplyScalar(se.x),w.copy(E.binormals[J]).multiplyScalar(se.y),g.copy(T[J]).add(A).add(w),K(g.x,g.y,g.z)):K(se.x,se.y,p/c*J)}for(let J=m-1;J>=0;J--){let Y=J/m,se=f*Math.cos(Y*Math.PI/2),ve=_*Math.sin(Y*Math.PI/2)+y;for(let ye=0,Te=N.length;ye<Te;ye++){let De=z(N[ye],he[ye],ve);K(De.x,De.y,p+se)}for(let ye=0,Te=P.length;ye<Te;ye++){let De=P[ye];Z=q[ye];for(let We=0,Xe=De.length;We<Xe;We++){let I=z(De[We],Z[We],ve);v?K(I.x,I.y+T[c-1].y,T[c-1].x+se):K(I.x,I.y,p+se)}}}re(),k();function re(){let J=a.length/3;if(u){let Y=0,se=$*Y;for(let ve=0;ve<Ae;ve++){let ye=Oe[ve];be(ye[2]+se,ye[1]+se,ye[0]+se)}Y=c+m*2,se=$*Y;for(let ve=0;ve<Ae;ve++){let ye=Oe[ve];be(ye[0]+se,ye[1]+se,ye[2]+se)}}else{for(let Y=0;Y<Ae;Y++){let se=Oe[Y];be(se[2],se[1],se[0])}for(let Y=0;Y<Ae;Y++){let se=Oe[Y];be(se[0]+$*c,se[1]+$*c,se[2]+$*c)}}r.addGroup(J,a.length/3-J,0)}function k(){let J=a.length/3,Y=0;ie(N,Y),Y+=N.length;for(let se=0,ve=P.length;se<ve;se++){let ye=P[se];ie(ye,Y),Y+=ye.length}r.addGroup(J,a.length/3-J,1)}function ie(J,Y){let se=J.length;for(;--se>=0;){let ve=se,ye=se-1;ye<0&&(ye=J.length-1);for(let Te=0,De=c+m*2;Te<De;Te++){let We=$*Te,Xe=$*(Te+1),I=Y+ve+We,ct=Y+ye+We,Je=Y+ye+Xe,$e=Y+ve+Xe;Le(I,ct,Je,$e)}}}function K(J,Y,se){l.push(J),l.push(Y),l.push(se)}function be(J,Y,se){ce(J),ce(Y),ce(se);let ve=a.length/3,ye=M.generateTopUV(r,a,ve-3,ve-2,ve-1);Ve(ye[0]),Ve(ye[1]),Ve(ye[2])}function Le(J,Y,se,ve){ce(J),ce(Y),ce(ve),ce(Y),ce(se),ce(ve);let ye=a.length/3,Te=M.generateSideWallUV(r,a,ye-6,ye-3,ye-2,ye-1);Ve(Te[0]),Ve(Te[1]),Ve(Te[3]),Ve(Te[1]),Ve(Te[2]),Ve(Te[3])}function ce(J){a.push(l[J*3+0]),a.push(l[J*3+1]),a.push(l[J*3+2])}function Ve(J){n.push(J.x),n.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return If(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new qn[a.type]().fromJSON(a)),new su(r,t.options)}},Lf={generateTopUV:function(e,t,i,r,a){let n=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],c=t[a*3+1];return[new ne(n,s),new ne(o,l),new ne(h,c)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],c=t[r*3+1],p=t[r*3+2],u=t[a*3],f=t[a*3+1],_=t[a*3+2],y=t[n*3],m=t[n*3+1],d=t[n*3+2];return Math.abs(o-c)<Math.abs(s-h)?[new ne(s,1-l),new ne(h,1-p),new ne(u,1-_),new ne(y,1-d)]:[new ne(o,1-l),new ne(c,1-p),new ne(f,1-_),new ne(m,1-d)]}};Df=class ou extends Ha{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,n,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new ou(t.radius,t.detail)}},Nf=class lu extends yt{constructor(t=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=Ze(a,0,Math.PI*2);let n=[],s=[],o=[],l=[],h=[],c=1/i,p=new C,u=new ne,f=new C,_=new C,y=new C,m=0,d=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,d=t[M+1].y-t[M].y,f.x=d*1,f.y=-m,f.z=d*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[M+1].x-t[M].x,d=t[M+1].y-t[M].y,f.x=d*1,f.y=-m,f.z=d*0,_.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(_)}for(let M=0;M<=i;M++){let T=r+M*c*a,v=Math.sin(T),E=Math.cos(T);for(let w=0;w<=t.length-1;w++){p.x=t[w].x*v,p.y=t[w].y,p.z=t[w].x*E,s.push(p.x,p.y,p.z),u.x=M/i,u.y=w/(t.length-1),o.push(u.x,u.y);let A=l[3*w+0]*v,g=l[3*w+1],b=l[3*w+0]*E;h.push(A,g,b)}}for(let M=0;M<i;M++)for(let T=0;T<t.length-1;T++){let v=T+M*t.length,E=v,w=v+t.length,A=v+t.length+1,g=v+1;n.push(E,w,g),n.push(A,g,w)}this.setIndex(n),this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(o,2)),this.setAttribute("normal",new ke(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lu(t.points,t.segments,t.phiStart,t.phiLength)}},Uf=class hu extends Ha{constructor(t=1,i=0){let r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new hu(t.radius,t.detail)}},yr=class cu extends yt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,c=l+1,p=t/o,u=i/l,f=[],_=[],y=[],m=[];for(let d=0;d<c;d++){let M=d*u-s;for(let T=0;T<h;T++){let v=T*p-n;_.push(v,-M,0),y.push(0,0,1),m.push(T/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){let T=M+h*d,v=M+h*(d+1),E=M+1+h*(d+1),w=M+1+h*d;f.push(T,v,w),f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new ke(_,3)),this.setAttribute("normal",new ke(y,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cu(t.width,t.height,t.widthSegments,t.heightSegments)}},Of=class uu extends yt{constructor(t=.5,i=1,r=32,a=1,n=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:n,thetaLength:s},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],h=[],c=[],p=t,u=(i-t)/a,f=new C,_=new ne;for(let y=0;y<=a;y++){for(let m=0;m<=r;m++){let d=n+m/r*s;f.x=p*Math.cos(d),f.y=p*Math.sin(d),l.push(f.x,f.y,f.z),h.push(0,0,1),_.x=(f.x/i+1)/2,_.y=(f.y/i+1)/2,c.push(_.x,_.y)}p+=u}for(let y=0;y<a;y++){let m=y*(r+1);for(let d=0;d<r;d++){let M=d+m,T=M,v=M+r+1,E=M+r+2,w=M+1;o.push(T,v,w),o.push(v,E,w)}}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ff=class du extends yt{constructor(t=new eu([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(n,3)),this.setAttribute("uv",new ke(s,2));function h(c){let p=a.length/3,u=c.extractPoints(i),f=u.shape,_=u.holes;ur.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,d=_.length;m<d;m++){let M=_[m];ur.isClockWise(M)===!0&&(_[m]=M.reverse())}let y=ur.triangulateShape(f,_);for(let m=0,d=_.length;m<d;m++){let M=_[m];f=f.concat(M)}for(let m=0,d=f.length;m<d;m++){let M=f[m];a.push(M.x,M.y,0),n.push(0,0,1),s.push(M.x,M.y)}for(let m=0,d=y.length;m<d;m++){let M=y[m],T=M[0]+p,v=M[1]+p,E=M[2]+p;r.push(T,v,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return Bf(i,t)}static fromJSON(t,i){let r=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=i[t.shapes[a]];r.push(s)}return new du(r,t.curveSegments)}};zf=class pu extends yt{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),h=0,c=[],p=new C,u=new C,f=[],_=[],y=[],m=[];for(let d=0;d<=r;d++){let M=[],T=d/r,v=s+T*o,E=t*Math.cos(v),w=Math.sqrt(t*t-E*E),A=0;d===0&&s===0?A=.5/i:d===r&&l===Math.PI&&(A=-.5/i);for(let g=0;g<=i;g++){let b=g/i,L=a+b*n;p.x=-w*Math.cos(L),p.y=E,p.z=w*Math.sin(L),_.push(p.x,p.y,p.z),u.copy(p).normalize(),y.push(u.x,u.y,u.z),m.push(b+A,1-T),M.push(h++)}c.push(M)}for(let d=0;d<r;d++)for(let M=0;M<i;M++){let T=c[d][M+1],v=c[d][M],E=c[d+1][M],w=c[d+1][M+1];(d!==0||s>0)&&f.push(T,v,w),(d!==r-1||l<Math.PI)&&f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new ke(_,3)),this.setAttribute("normal",new ke(y,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Gf=class fu extends Ha{constructor(t=1,i=0){let r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,a,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new fu(t.radius,t.detail)}},kf=class mu extends yt{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],p=[],u=new C,f=new C,_=new C;for(let y=0;y<=r;y++){let m=s+y/r*o;for(let d=0;d<=a;d++){let M=d/a*n;f.x=(t+i*Math.cos(m))*Math.cos(M),f.y=(t+i*Math.cos(m))*Math.sin(M),f.z=i*Math.sin(m),h.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),_.subVectors(f,u).normalize(),c.push(_.x,_.y,_.z),p.push(d/a),p.push(y/r)}}for(let y=1;y<=r;y++)for(let m=1;m<=a;m++){let d=(a+1)*y+m-1,M=(a+1)*(y-1)+m-1,T=(a+1)*(y-1)+m,v=(a+1)*y+m;l.push(d,M,v),l.push(M,T,v)}this.setIndex(l),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Vf=class gu extends yt{constructor(t=1,i=.4,r=64,a=8,n=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:r,radialSegments:a,p:n,q:s},r=Math.floor(r),a=Math.floor(a);let o=[],l=[],h=[],c=[],p=new C,u=new C,f=new C,_=new C,y=new C,m=new C,d=new C;for(let T=0;T<=r;++T){let v=T/r*n*Math.PI*2;M(v,n,s,t,f),M(v+.01,n,s,t,_),m.subVectors(_,f),d.addVectors(_,f),y.crossVectors(m,d),d.crossVectors(y,m),y.normalize(),d.normalize();for(let E=0;E<=a;++E){let w=E/a*Math.PI*2,A=-i*Math.cos(w),g=i*Math.sin(w);p.x=f.x+(A*d.x+g*y.x),p.y=f.y+(A*d.y+g*y.y),p.z=f.z+(A*d.z+g*y.z),l.push(p.x,p.y,p.z),u.subVectors(p,f).normalize(),h.push(u.x,u.y,u.z),c.push(T/r),c.push(E/a)}}for(let T=1;T<=r;T++)for(let v=1;v<=a;v++){let E=(a+1)*(T-1)+(v-1),w=(a+1)*T+(v-1),A=(a+1)*T+v,g=(a+1)*(T-1)+v;o.push(E,w,g),o.push(w,A,g)}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(c,2));function M(T,v,E,w,A){let g=Math.cos(T),b=Math.sin(T),L=E/v*T,P=Math.cos(L);A.x=w*(2+P)*.5*g,A.y=w*(2+P)*b*.5,A.z=w*Math.sin(L)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gu(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Hf=class vu extends yt{constructor(t=new Jc(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new C,l=new C,h=new ne,c=new C,p=[],u=[],f=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(f,2));function y(){for(let T=0;T<i;T++)m(T);m(n===!1?i:0),M(),d()}function m(T){c=t.getPointAt(T/i,c);let v=s.normals[T],E=s.binormals[T];for(let w=0;w<=a;w++){let A=w/a*Math.PI*2,g=Math.sin(A),b=-Math.cos(A);l.x=b*v.x+g*E.x,l.y=b*v.y+g*E.y,l.z=b*v.z+g*E.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=c.x+r*l.x,o.y=c.y+r*l.y,o.z=c.z+r*l.z,p.push(o.x,o.y,o.z)}}function d(){for(let T=1;T<=i;T++)for(let v=1;v<=a;v++){let E=(a+1)*(T-1)+(v-1),w=(a+1)*T+(v-1),A=(a+1)*T+v,g=(a+1)*(T-1)+v;_.push(E,w,g),_.push(w,A,g)}}function M(){for(let T=0;T<=i;T++)for(let v=0;v<=a;v++)h.x=T/i,h.y=v/a,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new vu(new qn[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Wf=class extends yt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new C,a=new C;if(e.index!==null){let n=e.attributes.position,s=e.index,o=e.groups;o.length===0&&(o=[{start:0,count:s.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let c=o[l],p=c.start,u=c.count;for(let f=p,_=p+u;f<_;f+=3)for(let y=0;y<3;y++){let m=s.getX(f+y),d=s.getX(f+(y+1)%3);r.fromBufferAttribute(n,m),a.fromBufferAttribute(n,d),Fh(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let n=e.attributes.position;for(let s=0,o=n.count/3;s<o;s++)for(let l=0;l<3;l++){let h=3*s+l,c=3*s+(l+1)%3;r.fromBufferAttribute(n,h),a.fromBufferAttribute(n,c),Fh(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new ke(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};$x=Object.freeze({__proto__:null,BoxGeometry:Va,CapsuleGeometry:Yp,CircleGeometry:Zp,ConeGeometry:$p,CylinderGeometry:Wc,DodecahedronGeometry:Kp,EdgesGeometry:Jp,ExtrudeGeometry:Pf,IcosahedronGeometry:Df,LatheGeometry:Nf,OctahedronGeometry:Uf,PlaneGeometry:yr,PolyhedronGeometry:Ha,RingGeometry:Of,ShapeGeometry:Ff,SphereGeometry:zf,TetrahedronGeometry:Gf,TorusGeometry:kf,TorusKnotGeometry:Vf,TubeGeometry:Hf,WireframeGeometry:Wf});jf={clone:ha,merge:Bt},qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ht=class extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=Xf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(r.value);break;case"v2":this.uniforms[i].value=new ne().fromArray(r.value);break;case"v3":this.uniforms[i].value=new C().fromArray(r.value);break;case"v4":this.uniforms[i].value=new pt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new je().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ye().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Zf=class extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$f=class extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Kf=class extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Wa=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Jf=class extends Wa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oh,endingEnd:oh}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case lh:a=e,s=2*t-i;break;case hh:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case lh:n=e,o=2*i-t;break;case hh:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,p=this._weightPrev,u=this._weightNext,f=(i-t)/(r-t),_=f*f,y=_*f,m=-p*y+2*p*_-p*f,d=(1+p)*y+(-1.5-2*p)*_+(-.5+p)*f+1,M=(-1-u)*y+(1.5+u)*_+.5*f,T=u*y-u*_;for(let v=0;v!==s;++v)a[v]=m*n[h+v]+d*n[l+v]+M*n[o+v]+T*n[c+v];return a}},Qf=class extends Wa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),c=1-h;for(let p=0;p!==s;++p)a[p]=n[l+p]*c+n[o+p]*h;return a}},em=class extends Wa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},tm=class extends Wa{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this.inTangents,c=this.outTangents;if(!h||!c){let f=(i-t)/(r-t),_=1-f;for(let y=0;y!==s;++y)a[y]=n[l+y]*_+n[o+y]*f;return a}let p=s*2,u=e-1;for(let f=0;f!==s;++f){let _=n[l+f],y=n[o+f],m=u*p+f*2,d=c[m],M=c[m+1],T=e*p+f*2,v=h[T],E=h[T+1],w=rm(i,t,d,v,r);a[f]=yu(w,_,M,E,y)}return a}};xi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gr(t,this.TimeBufferType),this.values=Gr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Gr(e.times,Array),values:Gr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Xs(e.settings)&&(i.settings={inTangents:Gr(e.settings.inTangents,Array),outTangents:Gr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new em(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new tm(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Hn:t=this.InterpolantFactoryMethodDiscrete;break;case zo:t=this.InterpolantFactoryMethodLinear;break;case ys:t=this.InterpolantFactoryMethodSmooth;break;case sh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Be("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hn;case this.InterpolantFactoryMethodLinear:return zo;case this.InterpolantFactoryMethodSmooth:return ys;case this.InterpolantFactoryMethodBezier:return sh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Xs(this.settings)&&(zh(this.settings.inTangents,e),zh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){Ge("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){Ge("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&ip(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){Ge("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ys,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(r)o=!0;else{let c=s*i,p=c-i,u=c+i;for(let f=0;f!==i;++f){let _=t[c+f];if(_!==t[p+f]||_!==t[u+f]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*i,p=n*i;for(let u=0;u!==i;++u)t[p+u]=t[c+u]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Xs(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=zo;Xa=class extends xi{constructor(e,t,i){super(e,t,i)}};Xa.prototype.ValueTypeName="bool";Xa.prototype.ValueBufferType=Array;Xa.prototype.DefaultInterpolation=Hn;Xa.prototype.InterpolantFactoryMethodLinear=void 0;Xa.prototype.InterpolantFactoryMethodSmooth=void 0;am=class extends xi{constructor(e,t,i,r){super(e,t,i,r)}};am.prototype.ValueTypeName="color";nm=class extends xi{constructor(e,t,i,r){super(e,t,i,r)}};nm.prototype.ValueTypeName="number";sm=class extends Wa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let h=l+s;l!==h;l+=4)ai.slerpFlat(a,0,n,l-s,n,l,o);return a}},xu=class extends xi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new sm(this.times,this.values,this.getValueSize(),e)}};xu.prototype.ValueTypeName="quaternion";xu.prototype.InterpolantFactoryMethodSmooth=void 0;ja=class extends xi{constructor(e,t,i){super(e,t,i)}};ja.prototype.ValueTypeName="string";ja.prototype.ValueBufferType=Array;ja.prototype.DefaultInterpolation=Hn;ja.prototype.InterpolantFactoryMethodLinear=void 0;ja.prototype.InterpolantFactoryMethodSmooth=void 0;om=class extends xi{constructor(e,t,i,r){super(e,t,i,r)}};om.prototype.ValueTypeName="vector";js={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Gh(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Gh(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};lm=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){s++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,p=l.length;c<p;c+=2){let u=l[c],f=l[c+1];if(u.global&&(u.lastIndex=0),u.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hm=new lm,sl=class{constructor(e){this.manager=e!==void 0?e:hm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};sl.DEFAULT_MATERIAL_NAME="__DEFAULT";kr=new WeakMap,cm=class extends sl{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=js.get(`image:${e}`);if(n!==void 0){if(n.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0);else{let c=kr.get(n);c===void 0&&(c=[],kr.set(n,c)),c.push({onLoad:t,onError:r})}return n}let s=Da("img");function o(){h(),t&&t(this);let c=kr.get(this)||[];for(let p=0;p<c.length;p++){let u=c[p];u.onLoad&&u.onLoad(this)}kr.delete(this),a.manager.itemEnd(e)}function l(c){h(),r&&r(c),js.remove(`image:${e}`);let p=kr.get(this)||[];for(let u=0;u<p.length;u++){let f=p[u];f.onError&&f.onError(c)}kr.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){s.removeEventListener("load",o,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),js.add(`image:${e}`,s),a.manager.itemStart(e),s.src=e,s}},qa=class extends sl{constructor(e){super(e)}load(e,t,i,r){let a=new Kt,n=new cm(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}},Kx=new Ye,Jx=new C,Qx=new C,Cn=new C,Pn=new ai,ui=new C,ol=class extends Di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cn,Pn,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cn,Pn,ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Cn,Pn,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cn,Pn,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new C,kh=new ne,Vh=new ne,kt=class extends ol{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Na*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,kh,Vh),t.subVectors(Vh,kh)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Jr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$n=class extends ol{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},e1=new Ye,t1=new Ye,i1=new Ye,Vr=-90,Hr=1,um=class extends Di{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new kt(Vr,Hr,e,t);r.layers=this.layers,this.add(r);let a=new kt(Vr,Hr,e,t);a.layers=this.layers,this.add(a);let n=new kt(Vr,Hr,e,t);n.layers=this.layers,this.add(n);let s=new kt(Vr,Hr,e,t);s.layers=this.layers,this.add(s);let o=new kt(Vr,Hr,e,t);o.layers=this.layers,this.add(o);let l=new kt(Vr,Hr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===jn)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,c=e.getRenderTarget(),p=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(c,p,u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},dm=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ll=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=pm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};r1=new C,a1=new ai,n1=new C,s1=new C,o1=new C,l1=new C,h1=new ai,c1=new C,u1=new C,hl="\\[\\]\\.:\\/",fm=new RegExp("["+hl+"]","g"),cl="[^"+hl+"]",mm="[^"+hl.replace("\\.","")+"]",gm=/((?:WC+[\/:])*)/.source.replace("WC",cl),vm=/(WCOD+)?/.source.replace("WCOD",mm),_m=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),ym=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),xm=new RegExp("^"+gm+vm+_m+ym+"$"),Mm=["material","materials","bones","map"],bm=class{constructor(e,t,i){let r=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},_t=class Zr{constructor(t,i,r){this.path=i,this.parsedPath=r||Zr.parseTrackName(i),this.node=Zr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new Zr.Composite(t,i,r):new Zr(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fm,"")}static parseTrackName(t){let i=xm.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);Mm.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=Zr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=i.nodeName;Ge("PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=bm;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];d1=new Float32Array(1),Hh=new Ye,ul=class{constructor(e,t,i=0,r=1/0){this.ray=new ka(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new rl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hh),this}intersectObject(e,t=!0,i=[]){return Vo(e,this,i,t),i.sort(Wh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Vo(e[r],this,i,t);return i.sort(Wh),i}};p1=(aa=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},aa.prototype.isMatrix2=!0,aa),f1=new ne,m1=new C,g1=new C,v1=new C,_1=new C,y1=new C,x1=new C,M1=new C,b1=new C,S1=new C,T1=new Ye,E1=new Ye,w1=new C,A1=new tt,R1=new tt,C1=new C,P1=new C,L1=new C,I1=new C,D1=new ol,N1=new Wi,U1=new C;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");Em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wm=`#ifdef USE_ALPHAHASH
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
#endif`,Am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lm=`#ifdef USE_AOMAP
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
#endif`,Im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
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
#endif`,Nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bm=`#ifdef USE_IRIDESCENCE
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
#endif`,zm=`#ifdef USE_BUMPMAP
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
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ym=`#define PI 3.141592653589793
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
} // validated`,Zm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$m=`vec3 transformedNormal = objectNormal;
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
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ig=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rg=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ng=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dg=`#ifdef USE_GRADIENTMAP
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
}`,pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vg=`#ifdef USE_ENVMAP
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
#endif`,_g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bg=`PhysicalMaterial material;
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
#endif`,Sg=`uniform sampler2D dfgLUT;
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
}`,Tg=`
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
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
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
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ag=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ug=`#if defined( USE_POINTS_UV )
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
#endif`,Og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kg=`#ifdef USE_MORPHTARGETS
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
#endif`,Vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yg=`#ifdef USE_NORMALMAP
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
#endif`,Zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c0=`float getShadowMask() {
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
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,p0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w0=`uniform sampler2D t2D;
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
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
}`,I0=`#if DEPTH_PACKING == 3200
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
}`,D0=`#define DISTANCE
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
}`,N0=`#define DISTANCE
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`uniform float scale;
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
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#include <common>
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
}`,G0=`uniform vec3 diffuse;
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
}`,k0=`#define LAMBERT
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
}`,V0=`#define LAMBERT
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
}`,H0=`#define MATCAP
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
}`,W0=`#define MATCAP
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
}`,X0=`#define NORMAL
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
}`,j0=`#define NORMAL
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
}`,q0=`#define PHONG
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
}`,Y0=`#define PHONG
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
}`,Z0=`#define STANDARD
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
}`,$0=`#define STANDARD
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
}`,K0=`#define TOON
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
}`,J0=`#define TOON
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
}`,Q0=`uniform float size;
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
}`,ev=`uniform vec3 diffuse;
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
}`,tv=`#include <common>
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
}`,iv=`uniform vec3 color;
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
}`,rv=`uniform float rotation;
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
}`,av=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Em,alphahash_pars_fragment:wm,alphamap_fragment:Am,alphamap_pars_fragment:Rm,alphatest_fragment:Cm,alphatest_pars_fragment:Pm,aomap_fragment:Lm,aomap_pars_fragment:Im,batching_pars_vertex:Dm,batching_vertex:Nm,begin_vertex:Um,beginnormal_vertex:Om,bsdfs:Fm,iridescence_fragment:Bm,bumpmap_pars_fragment:zm,clipping_planes_fragment:Gm,clipping_planes_pars_fragment:km,clipping_planes_pars_vertex:Vm,clipping_planes_vertex:Hm,color_fragment:Wm,color_pars_fragment:Xm,color_pars_vertex:jm,color_vertex:qm,common:Ym,cube_uv_reflection_fragment:Zm,defaultnormal_vertex:$m,displacementmap_pars_vertex:Km,displacementmap_vertex:Jm,emissivemap_fragment:Qm,emissivemap_pars_fragment:eg,colorspace_fragment:tg,colorspace_pars_fragment:ig,envmap_fragment:rg,envmap_common_pars_fragment:ag,envmap_pars_fragment:ng,envmap_pars_vertex:sg,envmap_physical_pars_fragment:vg,envmap_vertex:og,fog_vertex:lg,fog_pars_vertex:hg,fog_fragment:cg,fog_pars_fragment:ug,gradientmap_pars_fragment:dg,lightmap_pars_fragment:pg,lights_lambert_fragment:fg,lights_lambert_pars_fragment:mg,lights_pars_begin:gg,lights_toon_fragment:_g,lights_toon_pars_fragment:yg,lights_phong_fragment:xg,lights_phong_pars_fragment:Mg,lights_physical_fragment:bg,lights_physical_pars_fragment:Sg,lights_fragment_begin:Tg,lights_fragment_maps:Eg,lights_fragment_end:wg,lightprobes_pars_fragment:Ag,logdepthbuf_fragment:Rg,logdepthbuf_pars_fragment:Cg,logdepthbuf_pars_vertex:Pg,logdepthbuf_vertex:Lg,map_fragment:Ig,map_pars_fragment:Dg,map_particle_fragment:Ng,map_particle_pars_fragment:Ug,metalnessmap_fragment:Og,metalnessmap_pars_fragment:Fg,morphinstance_vertex:Bg,morphcolor_vertex:zg,morphnormal_vertex:Gg,morphtarget_pars_vertex:kg,morphtarget_vertex:Vg,normal_fragment_begin:Hg,normal_fragment_maps:Wg,normal_pars_fragment:Xg,normal_pars_vertex:jg,normal_vertex:qg,normalmap_pars_fragment:Yg,clearcoat_normal_fragment_begin:Zg,clearcoat_normal_fragment_maps:$g,clearcoat_pars_fragment:Kg,iridescence_pars_fragment:Jg,opaque_fragment:Qg,packing:e0,premultiplied_alpha_fragment:t0,project_vertex:i0,dithering_fragment:r0,dithering_pars_fragment:a0,roughnessmap_fragment:n0,roughnessmap_pars_fragment:s0,shadowmap_pars_fragment:o0,shadowmap_pars_vertex:l0,shadowmap_vertex:h0,shadowmask_pars_fragment:c0,skinbase_vertex:u0,skinning_pars_vertex:d0,skinning_vertex:p0,skinnormal_vertex:f0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:v0,tonemapping_pars_fragment:_0,transmission_fragment:y0,transmission_pars_fragment:x0,uv_pars_fragment:M0,uv_pars_vertex:b0,uv_vertex:S0,worldpos_vertex:T0,background_vert:E0,background_frag:w0,backgroundCube_vert:A0,backgroundCube_frag:R0,cube_vert:C0,cube_frag:P0,depth_vert:L0,depth_frag:I0,distance_vert:D0,distance_frag:N0,equirect_vert:U0,equirect_frag:O0,linedashed_vert:F0,linedashed_frag:B0,meshbasic_vert:z0,meshbasic_frag:G0,meshlambert_vert:k0,meshlambert_frag:V0,meshmatcap_vert:H0,meshmatcap_frag:W0,meshnormal_vert:X0,meshnormal_frag:j0,meshphong_vert:q0,meshphong_frag:Y0,meshphysical_vert:Z0,meshphysical_frag:$0,meshtoon_vert:K0,meshtoon_frag:J0,points_vert:Q0,points_frag:ev,shadow_vert:tv,shadow_frag:iv,sprite_vert:rv,sprite_frag:av},ge={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},pi={basic:{uniforms:Bt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Bt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Bt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Bt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Bt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new tt(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Bt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Bt([ge.points,ge.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Bt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Bt([ge.common,ge.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Bt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Bt([ge.sprite,ge.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Bt([ge.common,ge.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Bt([ge.lights,ge.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};pi.physical={uniforms:Bt([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};Ln={r:0,b:0,g:0},nv=new Ye,bu=new je;bu.set(-1,0,0,0,1,0,0,0,1);$r=4,uv=6,dv=20,pv=256,xa=new $n,jh=new tt,qs=null,Ys=0,Zs=0,$s=!1,fv=new C,lr=new C,Ho=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=fv}=a;qs=this._renderer.getRenderTarget(),Ys=this._renderer.getActiveCubeFace(),Zs=this._renderer.getActiveMipmapLevel(),$s=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qs,Ys,Zs),this._renderer.xr.enabled=$s,e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qs=this._renderer.getRenderTarget(),Ys=this._renderer.getActiveCubeFace(),Zs=this._renderer.getActiveMipmapLevel(),$s=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:_i,format:ti,colorSpace:Wn,depthBuffer:!1},r=qh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qh(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mv(a)),this._blurMaterial=vv(a,e,t),this._ggxMaterial=gv(a,e,t)}return r}_compileMaterial(e){let t=new Ut(new yt,e);this._renderer.compile(t,xa)}_sceneToCubeUV(e,t,i,r,a){let n=new kt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(jh),l.toneMapping=mi,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new Va,new Fc({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));let p=this._backgroundBox,u=p.material,f=!1,_=e.background;_?_.isColor&&(u.color.copy(_),e.background=null,f=!0):(u.color.copy(jh),f=!0);for(let y=0;y<6;y++){let m=y%3;m===0?(n.up.set(0,s[y],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[y],a.y,a.z)):m===1?(n.up.set(0,0,s[y]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[y],a.z)):(n.up.set(0,s[y],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[y]));let d=this._cubeSize;Wr(r,m*d,y>2?d:0,d,d),l.setRenderTarget(r),f&&l.render(p,n),l.render(e,n)}l.toneMapping=c,l.autoClear=h,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===fr||e.mapping===na;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yh());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Wr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,xa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),c=Math.sqrt(l*l-h*h),p=l*1.25,u=c*p,{_lodMax:f}=this,_=this._sizeLods[i],y=3*_*(i>f-$r?i-f+$r:0),m=4*(this._cubeSize-_);o.envMap.value=e.texture,o.roughness.value=u,o.mipInt.value=f-t,Wr(a,y,m,3*_,2*_),r.setRenderTarget(a),r.render(s,xa),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=f-i,Wr(e,y,m,3*_,2*_),r.setRenderTarget(e),r.render(s,xa)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let l=s.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[r],c=3*h*(r>this._lodMax-$r?r-this._lodMax+$r:0),p=4*(this._cubeSize-h);Wr(t,c,p,3*h,2*h),n.setRenderTarget(t),n.render(o,xa)}};Su=class extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Va(5,5,5),a=new Ht({name:"CubemapFromEquirect",uniforms:ha(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Pi});a.uniforms.tEquirect.value=t;let n=new Ut(r,a),s=t.minFilter;return t.minFilter===hr&&(t.minFilter=Lt),new um(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};Ev={[gc]:"LINEAR_TONE_MAPPING",[vc]:"REINHARD_TONE_MAPPING",[_c]:"CINEON_TONE_MAPPING",[yc]:"ACES_FILMIC_TONE_MAPPING",[Mc]:"AGX_TONE_MAPPING",[jo]:"NEUTRAL_TONE_MAPPING",[xc]:"CUSTOM_TONE_MAPPING"};Tu=new Kt,Wo=new Oa(1,1),Eu=new Lc,wu=new Ap,Au=new zc,$h=[],Kh=[],Jh=new Float32Array(16),Qh=new Float32Array(9),ec=new Float32Array(4);p_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jv(t.type)}},f_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d_(t.type)}},m_=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},Ks=/(\w+)(\])?(\[|\.)?/g;Gn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);g_(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};v_=37297,__=0;rc=new je;b_={[gc]:"Linear",[vc]:"Reinhard",[_c]:"Cineon",[yc]:"ACESFilmic",[Mc]:"AgX",[jo]:"Neutral",[xc]:"Custom"};In=new C;R_=/^[ \t]*#include +<([\w\d./]+)>/gm;C_=new Map;L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;D_={[Dn]:"SHADOWMAP_TYPE_PCF",[ba]:"SHADOWMAP_TYPE_VSM"};U_={[fr]:"ENVMAP_TYPE_CUBE",[na]:"ENVMAP_TYPE_CUBE",[Yn]:"ENVMAP_TYPE_CUBE_UV"};F_={[na]:"ENVMAP_MODE_REFRACTION"};z_={[mc]:"ENVMAP_BLENDING_MULTIPLY",[Vd]:"ENVMAP_BLENDING_MIX",[Hd]:"ENVMAP_BLENDING_ADD"};H_=0,W_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new X_(e),t.set(e,i)),i}},X_=class{constructor(e){this.id=H_++,this.code=e,this.usedTimes=0}};Q_=0;ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ay=`uniform sampler2D shadow_pass;
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
}`,ny=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],sy=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],dc=new Ye,Ma=new C,Js=new C;uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dy=`
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

}`,py=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Gc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ht({vertexShader:uy,fragmentShader:dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new yr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fy=class extends vr{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,c=null,p=null,u=null,f=null,_=typeof XRWebGLBinding<"u",y=new py,m={},d=t.getContextAttributes(),M=null,T=null,v=[],E=[],w=new ne,A=null,g=null,b=new kt;b.viewport=new pt;let L=new kt;L.viewport=new pt;let P=[b,L],D=new dm,j=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ie=v[k];return ie===void 0&&(ie=new ws,v[k]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(k){let ie=v[k];return ie===void 0&&(ie=new ws,v[k]=ie),ie.getGripSpace()},this.getHand=function(k){let ie=v[k];return ie===void 0&&(ie=new ws,v[k]=ie),ie.getHandSpace()};function z(k){let ie=E.indexOf(k.inputSource);if(ie===-1)return;let K=v[ie];K!==void 0&&(K.update(k.inputSource,k.frame,l||n),K.dispatchEvent({type:k.type,data:k.inputSource}))}function $(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",H);for(let k=0;k<v.length;k++){let ie=E[k];ie!==null&&(E[k]=null,v[k].disconnect(ie))}j=null,N=null,y.reset();for(let k in m)delete m[k];if(e.setRenderTarget(M),u=null,p=null,c=null,r=null,T=null,re.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),g!==null){let k=g.camera;k.fov=g.fov,k.zoom=g.zoom,k.updateProjectionMatrix(),g=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){a=k,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){s=k,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return c===null&&_&&(c=new XRWebGLBinding(r,t)),c},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",$),r.addEventListener("inputsourceschange",H),d.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,K=null,be=null;d.depth&&(be=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=d.stencil?cr:Ii,K=d.stencil?Ia:vi);let Le={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:a};c=this.getBinding(),p=c.createProjectionLayer(Le),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),T=new ri(p.textureWidth,p.textureHeight,{format:ti,type:$t,depthTexture:new Oa(p.textureWidth,p.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let ie={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),T=new ri(u.framebufferWidth,u.framebufferHeight,{format:ti,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(k){for(let ie=0;ie<k.removed.length;ie++){let K=k.removed[ie],be=E.indexOf(K);be>=0&&(E[be]=null,v[be].disconnect(K))}for(let ie=0;ie<k.added.length;ie++){let K=k.added[ie],be=E.indexOf(K);if(be===-1){for(let ce=0;ce<v.length;ce++)if(ce>=E.length){E.push(K),be=ce;break}else if(E[ce]===null){E[ce]=K,be=ce;break}if(be===-1)break}let Le=v[be];Le&&Le.connect(K)}}let he=new C,q=new C;function Z(k,ie,K){he.setFromMatrixPosition(ie.matrixWorld),q.setFromMatrixPosition(K.matrixWorld);let be=he.distanceTo(q),Le=ie.projectionMatrix.elements,ce=K.projectionMatrix.elements,Ve=Le[14]/(Le[10]-1),J=Le[14]/(Le[10]+1),Y=(Le[9]+1)/Le[5],se=(Le[9]-1)/Le[5],ve=(Le[8]-1)/Le[0],ye=(ce[8]+1)/ce[0],Te=Ve*ve,De=Ve*ye,We=be/(-ve+ye),Xe=We*-ve;if(ie.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Xe),k.translateZ(We),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Le[10]===-1)k.projectionMatrix.copy(ie.projectionMatrix),k.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let I=Ve+We,ct=J+We,Je=Te-Xe,$e=De+(be-Xe),R=Y*J/ct*I,x=se*J/ct*I;k.projectionMatrix.makePerspective(Je,$e,R,x,I,ct),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function te(k,ie){ie===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ie.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let ie=k.near,K=k.far;y.texture!==null&&(y.depthNear>0&&(ie=y.depthNear),y.depthFar>0&&(K=y.depthFar)),D.near=L.near=b.near=ie,D.far=L.far=b.far=K,(j!==D.near||N!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),j=D.near,N=D.far),D.layers.mask=k.layers.mask|6,b.layers.mask=D.layers.mask&-5,L.layers.mask=D.layers.mask&-3;let be=k.parent,Le=D.cameras;te(D,be);for(let ce=0;ce<Le.length;ce++)te(Le[ce],be);Le.length===2?Z(D,b,L):D.projectionMatrix.copy(b.projectionMatrix),g===null&&k.isPerspectiveCamera&&(g={camera:k,fov:k.fov,zoom:k.zoom}),Oe(k,D,be)};function Oe(k,ie,K){K===null?k.matrix.copy(ie.matrixWorld):(k.matrix.copy(K.matrixWorld),k.matrix.invert(),k.matrix.multiply(ie.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ie.projectionMatrix),k.projectionMatrixInverse.copy(ie.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Na*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(p===null&&u===null))return o},this.setFoveation=function(k){o=k,p!==null&&(p.fixedFoveation=k),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=k)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(D)},this.getCameraTexture=function(k){return m[k]};let Ae=null;function it(k,ie){if(h=ie.getViewerPose(l||n),f=ie,h!==null){let K=h.views;u!==null&&(e.setRenderTargetFramebuffer(T,u.framebuffer),e.setRenderTarget(T));let be=!1;K.length!==D.cameras.length&&(D.cameras.length=0,be=!0);for(let ce=0;ce<K.length;ce++){let Ve=K[ce],J=null;if(u!==null)J=u.getViewport(Ve);else{let se=c.getViewSubImage(p,Ve);J=se.viewport,ce===0&&(e.setRenderTargetTextures(T,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(T))}let Y=P[ce];Y===void 0&&(Y=new kt,Y.layers.enable(ce),Y.viewport=new pt,P[ce]=Y),Y.matrix.fromArray(Ve.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(Ve.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(J.x,J.y,J.width,J.height),ce===0&&(D.matrix.copy(Y.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),be===!0&&D.cameras.push(Y)}let Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){c=i.getBinding();let ce=c.getDepthInformation(K[0]);ce&&ce.isValid&&ce.texture&&y.init(ce,r.renderState)}if(Le&&Le.includes("camera-access")&&_){e.state.unbindTexture(),c=i.getBinding();for(let ce=0;ce<K.length;ce++){let Ve=K[ce].camera;if(Ve){let J=m[Ve];J||(J=new Gc,m[Ve]=J);let Y=c.getCameraImage(Ve);J.sourceTexture=Y}}}}for(let K=0;K<v.length;K++){let be=E[K],Le=v[K];be!==null&&Le!==void 0&&Le.update(be,ie,l||n)}Ae&&Ae(k,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),f=null}let re=new Mu;re.setAnimationLoop(it),this.setAnimationLoop=function(k){Ae=k},this.dispose=function(){}}},my=new Ye,Ru=new je;Ru.set(-1,0,0,0,1,0,0,0,1);_y=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),di=null;Ya=class{constructor(e={}){let{canvas:t=rp(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:p=!1,outputBufferType:u=$t}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=n;let _=u,y=new Set([Jo,Ko,$o]),m=new Set([$t,vi,La,Ia,Yo,Zo]),d=new Uint32Array(4),M=new Int32Array(4),T=new C,v=null,E=null,w=[],A=[],g=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,L=!1,P=null,D=null,j=null,N=null;this._outputColorSpace=At;let z=0,$=0,H=null,he=-1,q=null,Z=new pt,te=new pt,Oe=null,Ae=new tt(0),it=0,re=t.width,k=t.height,ie=1,K=null,be=null,Le=new pt(0,0,re,k),ce=new pt(0,0,re,k),Ve=!1,J=new Ua,Y=!1,se=!1,ve=new Ye,ye=new C,Te=new pt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Xe(){return H===null?ie:1}let I=i;function ct(S,O){return t.getContext(S,O)}let Je,$e,R,x,U,W,ee,fe,me,B,ue,_e,Re,le,Ne,Ue,He,rt,F,Q,ae,Se,Ce;try{let S={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",Et,!1),t.addEventListener("webglcontextcreationerror",at,!1),I===null){let O="webgl2";if(I=ct(O,S),I===null)throw ct(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(S){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",at,!1),Ge("WebGLRenderer: "+S.message),S}function oe(){Je=new yv(I),Je.init(),ae=new cy(I,Je),$e=new hv(I,Je,e,ae),R=new ly(I,Je),$e.reversedDepthBuffer&&p&&R.buffers.depth.setReversed(!0),D=I.createFramebuffer(),j=I.createFramebuffer(),N=I.createFramebuffer(),x=new bv(I),U=new Y_,W=new hy(I,Je,R,U,$e,ae,x),ee=new _v(b),fe=new Tm(I),Se=new ov(I,fe),me=new xv(I,fe,x,Se),B=new Tv(I,me,fe,Se,x),rt=new Sv(I,$e,W),Ne=new cv(U),ue=new q_(b,ee,Je,$e,Se,Ne),_e=new gy(b,U),Re=new $_,le=new iy(Je),He=new sv(b,ee,R,B,f,o),Ue=new oy(b,B,$e),Ce=new vy(I,x,$e,R),F=new lv(I,Je,x),Q=new Mv(I,Je,x),x.programs=ue.programs,b.capabilities=$e,b.extensions=Je,b.properties=U,b.renderLists=Re,b.shadowMap=Ue,b.state=R,b.info=x}_!==$t&&(g=new wv(_,t.width,t.height,s,r,a));let Me=new fy(b,I);this.xr=Me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=Je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(S){S!==void 0&&(ie=S,this.setSize(re,k,!1))},this.getSize=function(S){return S.set(re,k)},this.setSize=function(S,O,X=!0){if(Me.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}re=S,k=O,t.width=Math.floor(S*ie),t.height=Math.floor(O*ie),X===!0&&(t.style.width=S+"px",t.style.height=O+"px"),g!==null&&g.setSize(t.width,t.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(re*ie,k*ie).floor()},this.setDrawingBufferSize=function(S,O,X){re=S,k=O,ie=X,t.width=Math.floor(S*X),t.height=Math.floor(O*X),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(_===$t){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(Z)},this.getViewport=function(S){return S.copy(Le)},this.setViewport=function(S,O,X,V){S.isVector4?Le.set(S.x,S.y,S.z,S.w):Le.set(S,O,X,V),R.viewport(Z.copy(Le).multiplyScalar(ie).round())},this.getScissor=function(S){return S.copy(ce)},this.setScissor=function(S,O,X,V){S.isVector4?ce.set(S.x,S.y,S.z,S.w):ce.set(S,O,X,V),R.scissor(te.copy(ce).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(S){R.setScissorTest(Ve=S)},this.setOpaqueSort=function(S){K=S},this.setTransparentSort=function(S){be=S},this.getClearColor=function(S){return S.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,X=!0){let V=0;if(S){let G=!1;if(H!==null){let de=H.texture.format;G=y.has(de)}if(G){let de=H.texture.type,xe=m.has(de),Ee=He.getClearColor(),we=He.getClearAlpha(),Fe=Ee.r,Ke=Ee.g,et=Ee.b;xe?(d[0]=Fe,d[1]=Ke,d[2]=et,d[3]=we,I.clearBufferuiv(I.COLOR,0,d)):(M[0]=Fe,M[1]=Ke,M[2]=et,M[3]=we,I.clearBufferiv(I.COLOR,0,M))}else V|=I.COLOR_BUFFER_BIT}O&&(V|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),P=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",at,!1),He.dispose(),Re.dispose(),le.dispose(),U.dispose(),ee.dispose(),B.dispose(),Se.dispose(),Ce.dispose(),ue.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",gl),Me.removeEventListener("sessionend",vl),qi.stop()};function ze(S){S.preventDefault(),ph("WebGLRenderer: Context Lost."),L=!0}function Et(){ph("WebGLRenderer: Context Restored."),L=!1;let S=x.autoReset,O=Ue.enabled,X=Ue.autoUpdate,V=Ue.needsUpdate,G=Ue.type;oe(),x.autoReset=S,Ue.enabled=O,Ue.autoUpdate=X,Ue.needsUpdate=V,Ue.type=G}function at(S){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function si(S){let O=S.target;O.removeEventListener("dispose",si),Mi(O)}function Mi(S){zu(S),U.remove(S)}function zu(S){let O=U.get(S).programs;O!==void 0&&(O.forEach(function(X){ue.releaseProgram(X)}),S.isShaderMaterial&&ue.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,X,V,G,de){O===null&&(O=De);let xe=G.isMesh&&G.matrixWorld.determinantAffine()<0,Ee=Vu(S,O,X,V,G);R.setMaterial(V,xe);let we=X.index,Fe=1;if(V.wireframe===!0){if(we=me.getWireframeAttribute(X),we===void 0)return;Fe=2}let Ke=X.drawRange,et=X.attributes.position,Ie=Ke.start*Fe,st=(Ke.start+Ke.count)*Fe;de!==null&&(Ie=Math.max(Ie,de.start*Fe),st=Math.min(st,(de.start+de.count)*Fe)),we!==null?(Ie=Math.max(Ie,0),st=Math.min(st,we.count)):et!=null&&(Ie=Math.max(Ie,0),st=Math.min(st,et.count));let Mt=st-Ie;if(Mt<0||Mt===1/0)return;Se.setup(G,V,Ee,X,we);let ut,dt=F;if(we!==null&&(ut=fe.get(we),dt=Q,dt.setIndex(ut)),G.isMesh)V.wireframe===!0?(R.setLineWidth(V.wireframeLinewidth*Xe()),dt.setMode(I.LINES)):dt.setMode(I.TRIANGLES);else if(G.isLine){let vt=V.linewidth;vt===void 0&&(vt=1),R.setLineWidth(vt*Xe()),G.isLineSegments?dt.setMode(I.LINES):G.isLineLoop?dt.setMode(I.LINE_LOOP):dt.setMode(I.LINE_STRIP)}else G.isPoints?dt.setMode(I.POINTS):G.isSprite&&dt.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let vt=G._multiDrawStarts,Pe=G._multiDrawCounts,Ot=G._multiDrawCount,Yi=we?fe.get(we).bytesPerElement:1,qt=U.get(V).currentProgram.getUniforms();for(let oi=0;oi<Ot;oi++)qt.setValue(I,"_gl_DrawID",oi),dt.render(vt[oi]/Yi,Pe[oi])}else if(G.isInstancedMesh)dt.renderInstances(Ie,Mt,G.count);else if(X.isInstancedBufferGeometry){let vt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Pe=Math.min(X.instanceCount,vt);dt.renderInstances(Ie,Mt,Pe)}else dt.render(Ie,Mt)};function ml(S,O,X,V){P!==null&&S.isNodeMaterial&&P.setObject(V,S),Y===!0&&Ne.setState(S,X,!1),S.transparent===!0&&S.side===Ri&&S.forceSinglePass===!1?(S.side=Vt,S.needsUpdate=!0,Ka(S,O,V),S.side=pr,S.needsUpdate=!0,Ka(S,O,V),S.side=Ri):Ka(S,O,V)}this.compile=function(S,O,X=null){X===null&&(X=S),P!==null&&P.renderStart(S,O,X),E=le.get(X),E.init(O),A.push(E),X.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),S!==X&&S.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),P!==null&&P.updateLights(E.state.lightsArray),se=this.localClippingEnabled,Y=Ne.init(this.clippingPlanes,se),Y===!0&&Ne.setGlobalState(this.clippingPlanes,O),P!==null&&Ue.render(E.state.shadowsArray,X,O);let V=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let de=G.material;if(de)if(Array.isArray(de))for(let xe=0;xe<de.length;xe++){let Ee=de[xe];ml(Ee,X,O,G),V.add(Ee)}else ml(de,X,O,G),V.add(de)}),E=A.pop(),P!==null&&P.renderEnd(),V},this.compileAsync=function(S,O,X=null){let V=this.compile(S,O,X);return new Promise(G=>{function de(){if(V.forEach(function(xe){let Ee=U.get(xe).currentProgram;(Ee===void 0||Ee.isReady())&&V.delete(xe)}),V.size===0){G(S);return}setTimeout(de,10)}Je.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let is=null;function Gu(S){is&&is(S)}function gl(){qi.stop()}function vl(){qi.start()}let qi=new Mu;qi.setAnimationLoop(Gu),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(S){is=S,Me.setAnimationLoop(S),S===null?qi.stop():qi.start()},Me.addEventListener("sessionstart",gl),Me.addEventListener("sessionend",vl),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;P!==null&&P.renderStart(S,O);let X=Me.enabled===!0&&Me.isPresenting===!0,V=g!==null&&(H===null||X)&&g.begin(b,H);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(g===null||g.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(O),O=Me.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,O,H),E=le.get(S,A.length),E.init(O),E.state.textureUnits=W.getTextureUnits(),A.push(E),ve.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),J.setFromProjectionMatrix(ve,ii,O.reversedDepth),se=this.localClippingEnabled,Y=Ne.init(this.clippingPlanes,se),v=Re.get(S,w.length),v.init(),w.push(v),Me.enabled===!0&&Me.isPresenting===!0){let de=b.xr.getDepthSensingMesh();de!==null&&rs(de,O,-1/0,b.sortObjects)}rs(S,O,0,b.sortObjects),v.finish(),P!==null&&P.updateLights(E.state.lightsArray),b.sortObjects===!0&&v.sort(K,be),We=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,We&&He.addToRenderList(v,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Y===!0&&Ne.beginShadows();let G=E.state.shadowsArray;if(Ue.render(G,S,O),Y===!0&&Ne.endShadows(),(V&&g.hasRenderPass())===!1){let de=v.opaque,xe=v.transmissive;if(E.setupLights(),O.isArrayCamera){let Ee=O.cameras;if(xe.length>0)for(let we=0,Fe=Ee.length;we<Fe;we++){let Ke=Ee[we];yl(de,xe,S,Ke)}We&&He.render(S);for(let we=0,Fe=Ee.length;we<Fe;we++){let Ke=Ee[we];_l(v,S,Ke,Ke.viewport)}}else xe.length>0&&yl(de,xe,S,O),We&&He.render(S),_l(v,S,O)}H!==null&&$===0&&(W.updateMultisampleRenderTarget(H),W.updateRenderTargetMipmap(H)),V&&g.end(b),S.isScene===!0&&S.onAfterRender(b,S,O),Se.resetDefaultState(),he=-1,q=null,A.pop(),A.length>0?(E=A[A.length-1],W.setTextureUnits(E.state.textureUnits),Y===!0&&Ne.setGlobalState(b.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?v=w[w.length-1]:v=null,P!==null&&P.renderEnd()};function rs(S,O,X,V){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(J)){V&&Te.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);let de=B.update(S),xe=S.material;xe.visible&&v.push(S,de,xe,X,Te.z,null,O)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(J))){let de=B.update(S),xe=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Te.copy(S.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Te.copy(de.boundingSphere.center)),Te.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(xe)){let Ee=de.groups;for(let we=0,Fe=Ee.length;we<Fe;we++){let Ke=Ee[we],et=xe[Ke.materialIndex];et&&et.visible&&v.push(S,de,et,X,Te.z,Ke,O)}}else xe.visible&&v.push(S,de,xe,X,Te.z,null,O)}}let G=S.children;for(let de=0,xe=G.length;de<xe;de++)rs(G[de],O,X,V)}function _l(S,O,X,V){let{opaque:G,transmissive:de,transparent:xe}=S;E.setupLightsView(X),Y===!0&&Ne.setGlobalState(b.clippingPlanes,X),V&&R.viewport(Z.copy(V)),G.length>0&&$a(G,O,X),de.length>0&&$a(de,O,X),xe.length>0&&$a(xe,O,X),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function yl(S,O,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let et=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new ri(1,1,{generateMipmaps:!0,type:et?_i:$t,minFilter:hr,samples:Math.max(4,$e.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}let G=E.state.transmissionRenderTarget[V.id],de=V.viewport||Z;G.setSize(de.z*b.transmissionResolutionScale,de.w*b.transmissionResolutionScale);let xe=b.getRenderTarget(),Ee=b.getActiveCubeFace(),we=b.getActiveMipmapLevel();b.setRenderTarget(G),b.getClearColor(Ae),it=b.getClearAlpha(),it<1&&b.setClearColor(16777215,.5),b.clear(),We&&He.render(X);let Fe=b.toneMapping;b.toneMapping=mi;let Ke=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),Y===!0&&Ne.setGlobalState(b.clippingPlanes,V),$a(S,X,V),W.updateMultisampleRenderTarget(G),W.updateRenderTargetMipmap(G),Je.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ie=0,st=O.length;Ie<st;Ie++){let Mt=O[Ie],{object:ut,geometry:dt,material:vt,group:Pe}=Mt;if(vt.side===Ri&&ut.layers.test(V.layers)){let Ot=vt.side;vt.side=Vt,vt.needsUpdate=!0,xl(ut,X,V,dt,vt,Pe),vt.side=Ot,vt.needsUpdate=!0,et=!0}}et===!0&&(W.updateMultisampleRenderTarget(G),W.updateRenderTargetMipmap(G))}b.setRenderTarget(xe,Ee,we),b.setClearColor(Ae,it),Ke!==void 0&&(V.viewport=Ke),b.toneMapping=Fe}function $a(S,O,X){let V=O.isScene===!0?O.overrideMaterial:null;for(let G=0,de=S.length;G<de;G++){let xe=S[G],{object:Ee,geometry:we,group:Fe}=xe,Ke=xe.material;Ke.allowOverride===!0&&V!==null&&(Ke=V),Ee.layers.test(X.layers)&&xl(Ee,O,X,we,Ke,Fe)}}function xl(S,O,X,V,G,de){P!==null&&G.isNodeMaterial&&P.setObject(S,G),S.onBeforeRender(b,O,X,V,G,de),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(b,O,X,V,S,de),G.transparent===!0&&G.side===Ri&&G.forceSinglePass===!1?(G.side=Vt,G.needsUpdate=!0,b.renderBufferDirect(X,O,V,G,S,de),G.side=pr,G.needsUpdate=!0,b.renderBufferDirect(X,O,V,G,S,de),G.side=Ri):b.renderBufferDirect(X,O,V,G,S,de),S.onAfterRender(b,O,X,V,G,de)}function Ka(S,O,X){O.isScene!==!0&&(O=De);let V=U.get(S),G=E.state.lights,de=E.state.shadowsArray,xe=G.state.version,Ee=ue.getParameters(S,G.state,de,O,X,E.state.lightProbeGridArray),we=ue.getProgramCacheKey(Ee),Fe=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;let Ke=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=ee.get(S.envMap||V.environment,Ke),V.envMapRotation=V.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Fe===void 0&&(S.addEventListener("dispose",si),Fe=new Map,V.programs=Fe);let et=Fe.get(we);if(et!==void 0){if(V.currentProgram===et&&V.lightsStateVersion===xe)return bl(S,Ee),et}else Ee.uniforms=ue.getUniforms(S),P!==null&&S.isNodeMaterial&&P.build(S,X,Ee),S.onBeforeCompile(Ee,b),et=ue.acquireProgram(Ee,we),Fe.set(we,et),V.uniforms=Ee.uniforms;let Ie=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ie.clippingPlanes=Ne.uniform),bl(S,Ee),V.needsLights=Wu(S),V.lightsStateVersion=xe,V.needsLights&&(Ie.ambientLightColor.value=G.state.ambient,Ie.lightProbe.value=G.state.probe,Ie.sunLights.value=G.state.sun,Ie.sunLightShadows.value=G.state.sunShadow,Ie.directionalLights.value=G.state.directional,Ie.directionalLightShadows.value=G.state.directionalShadow,Ie.spotLights.value=G.state.spot,Ie.spotLightShadows.value=G.state.spotShadow,Ie.rectAreaLights.value=G.state.rectArea,Ie.ltc_1.value=G.state.rectAreaLTC1,Ie.ltc_2.value=G.state.rectAreaLTC2,Ie.pointLights.value=G.state.point,Ie.pointLightShadows.value=G.state.pointShadow,Ie.hemisphereLights.value=G.state.hemi,Ie.sunShadowMatrix.value=G.state.sunShadowMatrix,Ie.sunShadowCascade.value=G.state.sunShadowCascade,Ie.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ie.spotLightMatrix.value=G.state.spotLightMatrix,Ie.spotLightMap.value=G.state.spotLightMap,Ie.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=et,V.uniformsList=null,et}function Ml(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=Gn.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function bl(S,O){let X=U.get(S);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function ku(S,O){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;T.setFromMatrixPosition(O.matrixWorld);for(let X=0,V=S.length;X<V;X++){let G=S[X];if(G.texture!==null&&G.boundingBox.containsPoint(T))return G}return null}function Vu(S,O,X,V,G){O.isScene!==!0&&(O=De),W.resetTextureUnits();let de=O.fog,xe=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,Ee=H===null?b.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Qe.workingColorSpace,we=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Fe=ee.get(V.envMap||xe,we),Ke=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,et=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ie=!!X.morphAttributes.position,st=!!X.morphAttributes.normal,Mt=!!X.morphAttributes.color,ut=mi;V.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(ut=b.toneMapping);let dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,vt=dt!==void 0?dt.length:0,Pe=U.get(V),Ot=E.state.lights;if(Y===!0&&(se===!0||S!==q)){let lt=S===q&&V.id===he;Ne.setState(V,S,lt)}let Yi=!1;V.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Ot.state.version||Pe.outputColorSpace!==Ee||G.isBatchedMesh&&Pe.batching===!1||!G.isBatchedMesh&&Pe.batching===!0||G.isBatchedMesh&&Pe.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Pe.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Pe.instancing===!1||!G.isInstancedMesh&&Pe.instancing===!0||G.isSkinnedMesh&&Pe.skinning===!1||!G.isSkinnedMesh&&Pe.skinning===!0||G.isInstancedMesh&&Pe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Pe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Pe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Pe.instancingMorph===!1&&G.morphTexture!==null||Pe.envMap!==Fe||V.fog===!0&&Pe.fog!==de||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Ne.numPlanes||Pe.numIntersection!==Ne.numIntersection)||Pe.vertexAlphas!==Ke||Pe.vertexTangents!==et||Pe.morphTargets!==Ie||Pe.morphNormals!==st||Pe.morphColors!==Mt||Pe.toneMapping!==ut||Pe.morphTargetsCount!==vt||!!Pe.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Yi=!0):(Yi=!0,Pe.__version=V.version);let qt=Pe.currentProgram;Yi===!0&&(qt=Ka(V,O,G),P&&V.isNodeMaterial&&P.onUpdateProgram(V,qt,Pe));let oi=!1,Ni=!1,Mr=!1,ot=qt.getUniforms(),xt=Pe.uniforms;if(R.useProgram(qt.program)&&(oi=!0,Ni=!0,Mr=!0),V.id!==he&&(he=V.id,Ni=!0),Pe.needsLights){let lt=ku(E.state.lightProbeGridArray,G);Pe.lightProbeGrid!==lt&&(Pe.lightProbeGrid=lt,Ni=!0)}if(oi||q!==S){R.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ot.setValue(I,"projectionMatrix",S.projectionMatrix),ot.setValue(I,"viewMatrix",S.matrixWorldInverse);let lt=ot.map.cameraPosition;lt!==void 0&&lt.setValue(I,ye.setFromMatrixPosition(S.matrixWorld)),$e.logarithmicDepthBuffer&&ot.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ot.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),q!==S&&(q=S,Ni=!0,Mr=!0)}if(Pe.needsLights&&(Ot.state.sunShadowMap.length>0&&ot.setValue(I,"sunShadowMap",Ot.state.sunShadowMap,W),Ot.state.directionalShadowMap.length>0&&ot.setValue(I,"directionalShadowMap",Ot.state.directionalShadowMap,W),Ot.state.spotShadowMap.length>0&&ot.setValue(I,"spotShadowMap",Ot.state.spotShadowMap,W),Ot.state.pointShadowMap.length>0&&ot.setValue(I,"pointShadowMap",Ot.state.pointShadowMap,W)),G.isSkinnedMesh){ot.setOptional(I,G,"bindMatrix"),ot.setOptional(I,G,"bindMatrixInverse");let lt=G.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),ot.setValue(I,"boneTexture",lt.boneTexture,W))}G.isBatchedMesh&&(ot.setOptional(I,G,"batchingTexture"),ot.setValue(I,"batchingTexture",G._matricesTexture,W),ot.setOptional(I,G,"batchingIdTexture"),ot.setValue(I,"batchingIdTexture",G._indirectTexture,W),ot.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&ot.setValue(I,"batchingColorTexture",G._colorsTexture,W));let Ui=X.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&rt.update(G,X,qt),(Ni||Pe.receiveShadow!==G.receiveShadow)&&(Pe.receiveShadow=G.receiveShadow,ot.setValue(I,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(xt.envMapIntensity.value=O.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=yy()),Ni){if(ot.setValue(I,"toneMappingExposure",b.toneMappingExposure),Pe.needsLights&&Hu(xt,Mr),de&&V.fog===!0&&_e.refreshFogUniforms(xt,de),_e.refreshMaterialUniforms(xt,V,ie,k,E.state.transmissionRenderTarget[S.id]),Pe.needsLights&&Pe.lightProbeGrid){let lt=Pe.lightProbeGrid;xt.probesSH.value=lt.texture,xt.probesMin.value.copy(lt.boundingBox.min),xt.probesMax.value.copy(lt.boundingBox.max),xt.probesResolution.value.copy(lt.resolution)}Gn.upload(I,Ml(Pe),xt,W)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Gn.upload(I,Ml(Pe),xt,W),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ot.setValue(I,"center",G.center),ot.setValue(I,"modelViewMatrix",G.modelViewMatrix),ot.setValue(I,"normalMatrix",G.normalMatrix),ot.setValue(I,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let lt=V.uniformsGroups;for(let da=0,br=lt.length;da<br;da++){let Tl=lt[da];Ce.update(Tl,qt),Ce.bind(Tl,qt)}}return qt}function Hu(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.sunLights.needsUpdate=O,S.sunLightShadows.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Wu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(S,O,X){let V=U.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),U.get(S.texture).__webglTexture=O,U.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){let X=U.get(S);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,X=0){H=S,z=O,$=X;let V=null,G=!1,de=!1;if(S){let xe=U.get(S);if(xe.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(I.FRAMEBUFFER,xe.__webglFramebuffer),Z.copy(S.viewport),te.copy(S.scissor),Oe=S.scissorTest,R.viewport(Z),R.scissor(te),R.setScissorTest(Oe),he=-1;return}else if(xe.__webglFramebuffer===void 0)W.setupRenderTarget(S);else if(xe.__hasExternalTextures)W.rebindTextures(S,U.get(S.texture).__webglTexture,U.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Fe=S.depthTexture;if(xe.__boundDepthTexture!==Fe){if(Fe!==null&&U.has(Fe)&&(S.width!==Fe.image.width||S.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(S)}}let Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(de=!0);let we=U.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(we[O])?V=we[O][X]:V=we[O],G=!0):S.samples>0&&W.useMultisampledRTT(S)===!1?V=U.get(S).__webglMultisampledFramebuffer:Array.isArray(we)?V=we[X]:V=we,Z.copy(S.viewport),te.copy(S.scissor),Oe=S.scissorTest}else Z.copy(Le).multiplyScalar(ie).floor(),te.copy(ce).multiplyScalar(ie).floor(),Oe=Ve;if(X!==0&&(V=D),R.bindFramebuffer(I.FRAMEBUFFER,V)&&R.drawBuffers(S,V),R.viewport(Z),R.scissor(te),R.setScissorTest(Oe),G){let xe=U.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe.__webglTexture,X)}else if(de){let xe=O;for(let Ee=0;Ee<S.textures.length;Ee++){let we=U.get(S.textures[Ee]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ee,we.__webglTexture,X,xe)}}else if(S!==null&&X!==0){let xe=U.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xe.__webglTexture,X)}he=-1};function Sl(S){let O=U.get(S);return(O.__readFormat!==S.format||O.__readType!==S.type)&&(O.__readFormat=S.format,O.__readType=S.type,O.__formatReadable=$e.textureFormatReadable(S.format),O.__typeReadable=$e.textureTypeReadable(S.type)),O}this.readRenderTargetPixels=function(S,O,X,V,G,de,xe,Ee=0){if(!(S&&S.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=U.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){R.bindFramebuffer(I.FRAMEBUFFER,we);try{let Fe=S.textures[Ee],Ke=Fe.format,et=Fe.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ee);let Ie=Sl(Fe);if(Ie.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-V&&X>=0&&X<=S.height-G&&I.readPixels(O,X,V,G,ae.convert(Ke),ae.convert(et),de)}finally{let Fe=H!==null?U.get(H).__webglFramebuffer:null;R.bindFramebuffer(I.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(S,O,X,V,G,de,xe,Ee=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=U.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we)if(O>=0&&O<=S.width-V&&X>=0&&X<=S.height-G){R.bindFramebuffer(I.FRAMEBUFFER,we);let Fe=S.textures[Ee],Ke=Fe.format,et=Fe.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ee);let Ie=Sl(Fe);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,st),I.bufferData(I.PIXEL_PACK_BUFFER,de.byteLength,I.STREAM_READ),I.readPixels(O,X,V,G,ae.convert(Ke),ae.convert(et),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Mt=H!==null?U.get(H).__webglFramebuffer:null;R.bindFramebuffer(I.FRAMEBUFFER,Mt);let ut=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ap(I,ut,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,st),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,de),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(st),I.deleteSync(ut),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,X=0){let V=Math.pow(2,-X),G=Math.floor(S.image.width*V),de=Math.floor(S.image.height*V),xe=O!==null?O.x:0,Ee=O!==null?O.y:0;W.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,xe,Ee,G,de),R.unbindTexture()},this.copyTextureToTexture=function(S,O,X=null,V=null,G=0,de=0){let xe,Ee,we,Fe,Ke,et,Ie,st,Mt,ut=S.isCompressedTexture?S.mipmaps[de]:S.image;if(X!==null)xe=X.max.x-X.min.x,Ee=X.max.y-X.min.y,we=X.isBox3?X.max.z-X.min.z:1,Fe=X.min.x,Ke=X.min.y,et=X.isBox3?X.min.z:0;else{let xt=Math.pow(2,-G);xe=Math.floor(ut.width*xt),Ee=Math.floor(ut.height*xt),S.isDataArrayTexture?we=ut.depth:S.isData3DTexture?we=Math.floor(ut.depth*xt):we=1,Fe=0,Ke=0,et=0}V!==null?(Ie=V.x,st=V.y,Mt=V.z):(Ie=0,st=0,Mt=0);let dt=ae.convert(O.format),vt=ae.convert(O.type),Pe;O.isData3DTexture?(W.setTexture3D(O,0),Pe=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(W.setTexture2DArray(O,0),Pe=I.TEXTURE_2D_ARRAY):(W.setTexture2D(O,0),Pe=I.TEXTURE_2D),R.activeTexture(I.TEXTURE0),R.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),R.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),R.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);let Ot=R.getParameter(I.UNPACK_ROW_LENGTH),Yi=R.getParameter(I.UNPACK_IMAGE_HEIGHT),qt=R.getParameter(I.UNPACK_SKIP_PIXELS),oi=R.getParameter(I.UNPACK_SKIP_ROWS),Ni=R.getParameter(I.UNPACK_SKIP_IMAGES);R.pixelStorei(I.UNPACK_ROW_LENGTH,ut.width),R.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ut.height),R.pixelStorei(I.UNPACK_SKIP_PIXELS,Fe),R.pixelStorei(I.UNPACK_SKIP_ROWS,Ke),R.pixelStorei(I.UNPACK_SKIP_IMAGES,et);let Mr=S.isDataArrayTexture||S.isData3DTexture,ot=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){let xt=U.get(S),Ui=U.get(O),lt=U.get(xt.__renderTarget),da=U.get(Ui.__renderTarget);R.bindFramebuffer(I.READ_FRAMEBUFFER,lt.__webglFramebuffer),R.bindFramebuffer(I.DRAW_FRAMEBUFFER,da.__webglFramebuffer);for(let br=0;br<we;br++)Mr&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,U.get(S).__webglTexture,G,et+br),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,U.get(O).__webglTexture,de,Mt+br)),I.blitFramebuffer(Fe,Ke,xe,Ee,Ie,st,xe,Ee,I.DEPTH_BUFFER_BIT,I.NEAREST);R.bindFramebuffer(I.READ_FRAMEBUFFER,null),R.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||U.has(S)){let xt=U.get(S),Ui=U.get(O);R.bindFramebuffer(I.READ_FRAMEBUFFER,j),R.bindFramebuffer(I.DRAW_FRAMEBUFFER,N);for(let lt=0;lt<we;lt++)Mr?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xt.__webglTexture,G,et+lt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xt.__webglTexture,G),ot?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ui.__webglTexture,de,Mt+lt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ui.__webglTexture,de),G!==0?I.blitFramebuffer(Fe,Ke,xe,Ee,Ie,st,xe,Ee,I.COLOR_BUFFER_BIT,I.NEAREST):ot?I.copyTexSubImage3D(Pe,de,Ie,st,Mt+lt,Fe,Ke,xe,Ee):I.copyTexSubImage2D(Pe,de,Ie,st,Fe,Ke,xe,Ee);R.bindFramebuffer(I.READ_FRAMEBUFFER,null),R.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ot?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Pe,de,Ie,st,Mt,xe,Ee,we,dt,vt,ut.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Pe,de,Ie,st,Mt,xe,Ee,we,dt,ut.data):I.texSubImage3D(Pe,de,Ie,st,Mt,xe,Ee,we,dt,vt,ut):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,de,Ie,st,xe,Ee,dt,vt,ut.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,de,Ie,st,ut.width,ut.height,dt,ut.data):I.texSubImage2D(I.TEXTURE_2D,de,Ie,st,xe,Ee,dt,vt,ut);R.pixelStorei(I.UNPACK_ROW_LENGTH,Ot),R.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Yi),R.pixelStorei(I.UNPACK_SKIP_PIXELS,qt),R.pixelStorei(I.UNPACK_SKIP_ROWS,oi),R.pixelStorei(I.UNPACK_SKIP_IMAGES,Ni),de===0&&O.generateMipmaps&&I.generateMipmap(Pe),R.unbindTexture()},this.initRenderTarget=function(S){U.get(S).__webglFramebuffer===void 0&&W.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?W.setTextureCube(S,0):S.isData3DTexture?W.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?W.setTexture2DArray(S,0):W.setTexture2D(S,0),R.unbindTexture()},this.resetState=function(){z=0,$=0,H=null,R.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}},O1=new C;});var Pu={};El(Pu,{mountBend:()=>by});function by(e){if(!e||matchMedia("(prefers-reduced-motion: reduce)").matches)return null;let t;try{t=new Ya({antialias:!0,alpha:!0})}catch{return null}t.setPixelRatio(Math.min(devicePixelRatio,1.75)),t.outputColorSpace=At;let i=t.domElement;i.className="bend-canvas",document.body.append(i),document.documentElement.classList.add("has-bend");let r=new Ga,a=new $n(-1,1,1,-1,0,1),n=new yr(1,1,1,40),s=new qa,o=[];[...e.querySelectorAll(".tile")].forEach(M=>{let T=M.querySelector("img"),v=new Ht({vertexShader:xy,fragmentShader:My,transparent:!0,depthTest:!1,uniforms:{uRect:{value:new pt},uView:{value:new ne},uVel:{value:0},uCurlT:{value:0},uCurlB:{value:0},uRad:{value:120},uReveal:{value:0},uMap:{value:null},uCover:{value:new ne(1,1)},uLoaded:{value:0},uHover:{value:0},uAlpha:{value:1}}}),E=new Ut(n,v);E.frustumCulled=!1,E.visible=!1,r.add(E);let w={tile:M,img:T,mat:v,mesh:E,loading:!1,hover:0,rev:0,ratio:T.width/Math.max(1,T.height)||1.5};M.addEventListener("pointerenter",()=>{w.hoverT=1}),M.addEventListener("pointerleave",()=>{w.hoverT=0}),o.push(w)});let h=innerWidth,c=innerHeight,p=()=>{h=innerWidth,c=innerHeight,t.setSize(h,c,!1),i.style.width=`${h}px`,i.style.height=`${c}px`};p(),addEventListener("resize",p);let u=scrollY,f=0,_=0,y=!0,m=M=>{M.loading=!0,s.load(M.img.currentSrc||M.img.src,T=>{T.colorSpace=At,T.minFilter=Lt,T.generateMipmaps=!1,M.mat.uniforms.uMap.value=T,M.mat.uniforms.uLoaded.value=1,M.ratio=T.image.width/T.image.height})};function d(){if(!y)return;_=requestAnimationFrame(d);let M=scrollY,T=M-u;u=M,f+=(T*60-f)*.15;let v=Math.max(110,c*.16),E=c-Math.max(70,c*.1);for(let w of o){let A=w.tile.getBoundingClientRect(),g=A.width>0&&A.bottom>-200&&A.top<c+200;if(w.mesh.visible=g,!g)continue;w.loading||m(w);let b=w.mat.uniforms;b.uRect.value.set(A.left,A.top,A.width,A.height),b.uView.value.set(h,c),b.uVel.value=f,b.uCurlT.value=v,b.uCurlB.value=E,b.uRad.value=Math.min(160,c*.14);let L=A.width/A.height;L>w.ratio?b.uCover.value.set(1,w.ratio/L):b.uCover.value.set(L/w.ratio,1),w.hover+=((w.hoverT||0)-w.hover)*.12,b.uHover.value=w.hover;let P=w.tile.classList.contains("is-in")&&b.uLoaded.value?1:0;w.rev+=(P-w.rev)*.045,b.uReveal.value=w.rev}t.render(r,a)}return d(),{destroy(){y=!1,cancelAnimationFrame(_),t.dispose(),i.remove(),document.documentElement.classList.remove("has-bend")}}}var xy,My,Lu=as(()=>{Qn();xy=`
  uniform vec4 uRect;      // x, y (from top), w, h \u2014 CSS px
  uniform vec2 uView;      // viewport w, h
  uniform float uVel, uCurlT, uCurlB, uRad, uReveal;
  varying vec2 vUv; varying float vShade; varying float vEdge;
  const float PI = 3.14159265;
  void main() {
    vUv = uv;
    vec2 p = uRect.xy + vec2(uv.x, 1.0 - uv.y) * uRect.zw;   // pixel position, y down
    p.y += uVel * 0.06 * (uv.y - 0.5) * uRect.w / 300.0;      // stretch with scroll speed
    float z = 0.0, shade = 0.0;
    // curl over a cylinder at the top edge \u2026
    float dt = uCurlT - p.y;
    if (dt > 0.0) { float a = min(dt / uRad, PI); p.y = uCurlT - sin(a) * uRad; z = (1.0 - cos(a)) * uRad; shade = a / PI; }
    // \u2026 and at the bottom edge
    float db = p.y - uCurlB;
    if (db > 0.0) { float a = min(db / uRad, PI); p.y = uCurlB + sin(a) * uRad; z = (1.0 - cos(a)) * uRad; shade = a / PI; }
    // the print rises out of the page as it develops
    z += (1.0 - uReveal) * 260.0;
    // perspective about the screen centre
    float f = 1400.0, s = f / (f + z);
    vec2 c = uView * 0.5;
    p = c + (p - c) * s;
    vShade = shade;
    vEdge = abs(p.x / uView.x - 0.5) * 2.0;
    gl_Position = vec4(p.x / uView.x * 2.0 - 1.0, 1.0 - p.y / uView.y * 2.0, 0.0, 1.0);
  }`,My=`
  uniform sampler2D uMap; uniform vec2 uCover; uniform float uLoaded, uVel, uHover, uReveal, uAlpha;
  varying vec2 vUv; varying float vShade; varying float vEdge;
  void main() {
    vec2 uv = (vUv - 0.5) * uCover * (1.0 - uHover * 0.045) + 0.5;
    float k = clamp(abs(uVel) * 0.00006, 0.0, 0.012) + smoothstep(0.55, 1.0, vEdge) * 0.004;   // lens fringe at screen edges
    vec3 c = vec3(texture2D(uMap, uv + vec2(0.0, k)).r, texture2D(uMap, uv).g, texture2D(uMap, uv - vec2(0.0, k)).b);
    float l = dot(c, vec3(0.299, 0.587, 0.114));
    c = mix(vec3(l) * 1.15, c, smoothstep(0.35, 1.0, uReveal));                                  // develops into colour
    c = mix(vec3(0.89, 0.9, 0.93), c, uLoaded);
    c *= 1.0 - vShade * 0.55;                                                                       // the underside of the curl is darker
    // rounded corners
    vec2 q = abs(vUv - 0.5) * 2.0; float r = 0.035;
    float d = length(max(q - (1.0 - r), 0.0)) / r;
    float mask = 1.0 - smoothstep(0.8, 1.0, d);
    gl_FragColor = vec4(c, mask * uAlpha * smoothstep(0.0, 0.25, uReveal));
    #include <colorspace_fragment>
  }`});var Iu={};El(Iu,{createField:()=>Ey});function Ey(e,{onHover:t,onSelect:i}={}){let r=new Ya({antialias:!0,alpha:!1,powerPreference:"high-performance"});r.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),r.setClearColor(723984,1),r.outputColorSpace=At,e.prepend(r.domElement);let a=new Ga,n=new kt(46,1,.1,200),s=15;n.position.set(0,0,s);let o=new qa,l=new Map,h=(re,k)=>{if(l.has(re)){let K=l.get(re);K.image&&K.image.complete?(k.uniforms.uMap.value=K,k.uniforms.uLoaded.value=1):K.userData.waiting.push(k);return}let ie=o.load(re,K=>{K.userData.waiting.forEach(be=>{be.uniforms.uMap.value=K,be.uniforms.uLoaded.value=1})});ie.colorSpace=At,ie.userData.waiting=[k],l.set(re,ie)},c=new yr(1,1,12,12),p=3.1,u=.32,f=[],_=[],y=1;function m(re){if(f.forEach(K=>{a.remove(K.mesh),K.mat.dispose()}),f=[],_=[],!re.length)return;let k=re.slice();for(;k.length<72;)k=k.concat(re);let ie=Math.max(8,Math.round(Math.sqrt(k.length*1.3)));y=ie*(p+u);for(let K=0;K<ie;K++)_.push({h:0,speed:1+Math.sin(K*1.7)*.18,items:[]});k.forEach((K,be)=>{let Le=_.reduce((ye,Te)=>Te.h<ye.h?Te:ye),ce=Hi.clamp(K.ratio,.62,1.9),Ve=p/ce,J=new Ht({vertexShader:Sy,fragmentShader:Ty,transparent:!0,uniforms:{uMap:{value:null},uVel:{value:new ne},uCurve:{value:.012},uHover:{value:0},uShift:{value:0},uLoaded:{value:0},uRise:{value:0},uCover:{value:new ne(1,1)}}});K.ratio>ce?J.uniforms.uCover.value.set(ce/K.ratio,1):J.uniforms.uCover.value.set(1,K.ratio/ce),h(K.src,J);let Y=new Ut(c,J);Y.scale.set(p,Ve,1),Y.frustumCulled=!1;let se=_.indexOf(Le),ve={it:K,mat:J,mesh:Y,ci:se,x0:se*(p+u),y0:-(Le.h+Ve/2),h:Ve,hover:0,delay:be%40*.03+Math.random()*.2};Le.h+=Ve+u,Y.userData.tile=ve,a.add(Y),f.push(ve)}),A=0,H()}let d={x:0,y:0,tx:0,ty:0,vx:0,vy:0},M=!1,T=0,v=0,E=0,w=0,A=0,g=new ne(9,9),b=new ul,L=null,P=null,D=r.domElement,j=()=>2*s*Math.tan(Hi.degToRad(n.fov/2))/D.clientHeight;D.addEventListener("pointerdown",re=>{P||(M=!0,E=0,w=performance.now(),T=re.clientX,v=re.clientY,D.setPointerCapture(re.pointerId),D.style.cursor="grabbing")}),D.addEventListener("pointermove",re=>{let k=D.getBoundingClientRect();if(g.set((re.clientX-k.left)/k.width*2-1,-((re.clientY-k.top)/k.height)*2+1),!M)return;let ie=re.clientX-T,K=re.clientY-v,be=j()*1.15;E+=Math.abs(ie)+Math.abs(K),d.tx+=ie*be,d.ty-=K*be,T=re.clientX,v=re.clientY});let N=re=>{M&&(M=!1,D.style.cursor="",E<6&&performance.now()-w<500&&L&&$(L),re.pointerType!=="mouse"&&g.set(9,9))};D.addEventListener("pointerup",N),D.addEventListener("pointercancel",N),D.addEventListener("pointerleave",()=>{M||g.set(9,9)}),D.addEventListener("wheel",re=>{re.preventDefault(),!P&&(d.tx-=re.deltaX*.012,d.ty+=re.deltaY*.012)},{passive:!1});let z=re=>{if(!Z||P)return;let k=2.5;re.key==="ArrowRight"&&(d.tx-=k),re.key==="ArrowLeft"&&(d.tx+=k),re.key==="ArrowDown"&&(d.ty+=k),re.key==="ArrowUp"&&(d.ty-=k)};window.addEventListener("keydown",z);function $(re){let k=re.mesh.position;P={t:0,from:n.position.clone(),to:new C(k.x,k.y,Math.max(2.2,re.h*1.05)),tile:re,back:!1}}function H(){let{clientWidth:re,clientHeight:k}=e;r.setSize(re,k,!1),n.aspect=re/k,n.fov=n.aspect<.8?62:46,n.updateProjectionMatrix()}let he=new ResizeObserver(H);he.observe(e);let q=(re,k)=>(re%k+k*1.5)%k-k/2,Z=!1,te=0,Oe=new ll,Ae=re=>re<.5?4*re*re*re:1-Math.pow(-2*re+2,3)/2;function it(){if(te=requestAnimationFrame(it),Oe.update(),!Z)return;let re=Math.min(Oe.getDelta(),1/30);!M&&!P&&(d.ty+=re*.18);let k=d.x,ie=d.y;if(d.x+=(d.tx-d.x)*Math.min(1,re*6),d.y+=(d.ty-d.y)*Math.min(1,re*6),d.vx+=((d.x-k)/Math.max(re,.001)-d.vx)*.25,d.vy+=((d.y-ie)/Math.max(re,.001)-d.vy)*.25,P){P.t=Math.min(1,P.t+re/(P.back?.9:1.1));let Y=Ae(P.t);n.position.lerpVectors(P.from,P.to,Y),P.t>=1&&(P.back?P=null:(i==null||i(P.tile.it),P={t:0,from:n.position.clone(),to:new C(0,0,s),back:!0},P.wait=.5))}else{let Y=g.x<5?g.x*.6:0,se=g.x<5?g.y*.4:0;n.position.x+=(Y-n.position.x)*Math.min(1,re*2),n.position.y+=(se-n.position.y)*Math.min(1,re*2)}let K=P?1:.85;n.lookAt(n.position.x*K,n.position.y*K,0),A=Math.min(1.6,A+re*.8),b.setFromCamera(g,n);let be=g.x<5&&!P?b.intersectObjects(f.map(Y=>Y.mesh),!1)[0]:null,Le=be?be.object.userData.tile:null;Le!==L&&(L=Le,M||(D.style.cursor=L?"pointer":""),t==null||t(L?L.it:null));let ce=Math.hypot(d.vx,d.vy),Ve=Hi.clamp(ce*9e-4,0,.012),J=new ne(Hi.clamp(d.vx,-40,40),Hi.clamp(d.vy,-40,40));for(let Y of f){let se=_[Y.ci],ve=Math.max(se.h,1),ye=q(Y.x0+d.x,y),Te=q(Y.y0+d.y*se.speed+ve/2,ve);Y.mesh.position.set(ye,Te,0);let De=Y.mat.uniforms;Y.hover+=((L===Y?1:0)-Y.hover)*Math.min(1,re*7),De.uHover.value=Y.hover,De.uShift.value=Ve,De.uVel.value.copy(J),De.uRise.value=Hi.smoothstep(A-Y.delay,0,.8)}r.render(a,n)}return it(),{setItems:m,start(){Z=!0,H()},stop(){Z=!1},destroy(){cancelAnimationFrame(te),he.disconnect(),window.removeEventListener("keydown",z),r.dispose()}}}var Sy,Ty,Du=as(()=>{Qn();Sy=`
  uniform vec2 uVel;        // world units per second of the pan
  uniform float uCurve, uHover, uRise;
  varying vec2 vUv; varying float vFog;
  void main() {
    vUv = uv;
    vec4 w = modelMatrix * vec4(position, 1.0);
    // stretch along the direction of travel
    w.xy -= uVel * 0.012 * (uv.y - 0.5) * vec2(0.0, 1.0) + uVel * 0.012 * (uv.x - 0.5) * vec2(1.0, 0.0);
    // the wall bends away from the viewer (relative to the camera's x/y)
    vec2 rel = w.xy - cameraPosition.xy;
    w.z -= dot(rel, rel) * uCurve;
    w.z += uHover * 0.6 - (1.0 - uRise) * 6.0;
    vFog = smoothstep(0.0, 18.0, length(rel));
    gl_Position = projectionMatrix * viewMatrix * w;
  }`,Ty=`
  uniform sampler2D uMap; uniform float uShift, uHover, uLoaded, uRise; uniform vec2 uCover;
  varying vec2 vUv; varying float vFog;
  void main() {
    vec2 uv = (vUv - 0.5) * uCover * (1.0 - uHover * 0.05) + 0.5;
    vec3 c = vec3(texture2D(uMap, uv + vec2(uShift, 0.0)).r, texture2D(uMap, uv).g, texture2D(uMap, uv - vec2(uShift, 0.0)).b);
    c = mix(vec3(0.09, 0.1, 0.13), c, uLoaded);
    c = mix(c, vec3(0.043, 0.047, 0.063), vFog * 0.85);
    vec2 q = abs(vUv - 0.5) * 2.0; float r = 0.05;
    float d = length(max(q - (1.0 - r), 0.0)) / r;
    float mask = 1.0 - smoothstep(0.85, 1.0, d);
    gl_FragColor = vec4(c, mask * uRise);
    #include <colorspace_fragment>
  }`});var wl=[["001-dsc0189-9f9d69",2400,3600,"cityscape","Tower at Blue Hour","\u84DD\u8C03\u7D2B\u5CF0","Nanjing","blue"],["002-dsc0333-c8dd05",2400,1600,"cityscape","City Beneath Zijin Mountain","\u7D2B\u91D1\u5C71\u4E0B","Nanjing","blue"],["003-dsc0584-975344",2400,1022,"cityscape","Lights On","\u534E\u706F\u521D\u4E0A","","blue"],["004-dsc0682-fe1e91",2400,1022,"cityscape","Skyline After Rain","\u96E8\u540E\u5929\u9645\u7EBF","","blue"],["005-dsc1610-828084",2400,1600,"creativity","Mirror Tunnel","\u955C\u50CF\u96A7\u9053","","geometry"],["006-dsc1699-4e1633",2400,1600,"creativity","Spiral and Mural","\u87BA\u65CB\u4E0E\u58C1\u753B","","geometry"],["007-dsc1823-84f364",2400,3600,"cityscape","Vertical Eye","\u5782\u76F4\u4E4B\u773C","","geometry"],["008-dsc2092-12211c",2400,1600,"documentary","Corner Tower, Still Water","\u89D2\u697C\u5012\u5F71","Beijing","geometry"],["009-dsc2117-75451d",2400,1600,"documentary","Through the Red Gate","\u7EA2\u95E8\u4E4B\u5185","Beijing","geometry"],["010-dsc2606-4d8181",2400,1600,"documentary","Red Wall Walker","\u7EA2\u5899\u884C\u8005","Beijing","people"],["011-dsc2792-nr-7c974a",2400,3600,"cityscape","Golden Theatre","\u91D1\u8272\u5267\u573A","","gold"],["012-dsc2806-23c5cb",2400,1600,"ecological","Gulls","\u9E25\u7FA4","","green"],["013-dsc2829-d3b7a4",2400,1012,"cityscape","The Egg","\u6C34\u4E0A\u4E4B\u86CB","Beijing","geometry"],["014-dsc2985-fc9b11",2400,3600,"cityscape","Rush Hour Canyon","\u8F66\u6D41\u5CE1\u8C37","Beijing","blue"],["015-dsc4232-45aa06",2400,4032,"documentary","Kiosk and Tower","\u62A5\u4EAD\u4E0E\u9AD8\u5854","Beijing","blue"],["016-dsc5793-nr-ef6638",2400,1600,"ecological","Fireflies","\u8424\u706B","","night"],["017-dsc6297-hdr-e8f687",2400,1601,"cityscape","Golden Hour City","\u91D1\u8272\u65F6\u523B","","gold"],["018-dsc7374-17-42-09-c5963f",2400,1600,"landscape","Lightning","\u96F7\u66B4","","night"],["019-dsc7898-83b651",2400,1294,"documentary","Ribbon Dancers I","\u5F69\u7EF8 I","","people"],["020-dsc7986-e6efc1",2400,1600,"documentary","Ribbon Dancers II","\u5F69\u7EF8 II","","people"],["021-dsc8102-nr-e9e9f4",2400,3600,"cityscape","Pavilion Between Towers","\u697C\u5B87\u95F4\u7684\u9601","Nanjing","blue"],["022-dsc9219-nr-1950f1",2400,1600,"cityscape","Riverside Skyline","\u6C5F\u7554\u5929\u9645\u7EBF","Nanjing","blue"],["023-dsc9355-3c77c1",2400,1350,"cityscape","Cable Bridge","\u659C\u62C9\u6865","","blue"],["024-0ae511603acb75dc0e360125e5f0248e-172",2400,1773,"personal","Meili Peaks","\u6885\u91CC\u7FA4\u5CF0","Yunnan","vast"],["025-1-after-41de6a",2400,1600,"creativity","Green Spiral","\u7EFF\u8272\u87BA\u65CB","","geometry"],["026-1b7fe65878e346fd5ecd8451dcae3f05-479",2400,3600,"landscape","Cairn and Summit","\u739B\u5C3C\u5806\u4E0E\u96EA\u5C71","Yunnan","vast"],["027-1c5801269291c3da7f4a414e20c0bd57-f13",2400,1351,"landscape","Lanterns on the Lake","\u6E56\u4E0A\u706F\u4EAD","","gold"],["028-2-2623f0",2400,1600,"cityscape","Light Trails","\u57CE\u5E02\u5149\u8F68","","blue"],["029-2d8051fa03f692e2159f35006aad9522-6a1",2400,2052,"cityscape","Above the City","\u57CE\u5E02\u4E4B\u5DC5","Nanjing","blue"],["030-4c96c5ab95503badba48472345cd7ef6-a6e",2400,4265,"personal","Giant","\u5DE8\u50CF","Shanghai","people"],["031-5ff19237958c602e2af92a4615a911f6-65f",2400,1600,"personal","Arms Wide","\u5F20\u5F00\u53CC\u81C2","","vast"],["032-7a0a67d9dff6e4237b49828b8b7cb3c6-456",2400,4267,"ecological","Meerkat","\u72D0\u7374","","green"],["033-7be8fcc61cb30aaba60e15f2e0cb811d-45b",2400,4265,"personal","Rainbow Umbrella","\u5F69\u8679\u4F1E","Shanghai","people"],["034-7c2983837077aef3bea2f31aa0c38e33-f49",2400,1798,"cityscape","Above the Clouds","\u4E91\u4E0A\u9646\u5BB6\u5634","Shanghai","gold"],["035-8bc9e9036310dc77008427dc8eb390bb-2-a",2400,1352,"personal","Lone Watcher","\u72EC\u671B","Qinghai\u2013Gansu","vast"],["036-8dd14622ffea7d3968df1bdee01de02d-2ad",2400,1600,"cityscape","Dusk Over the City","\u57CE\u5E02\u66AE\u8272","Nanjing","gold"],["037-9aa932bb5e5425dcc5baff682c71f8fa-5c4",2400,1349,"landscape","Autumn Island","\u79CB\u5C9B","","green"],["038-9d566dc000ce36dd126b99410e5fe19e-6a7",2400,1351,"personal","Before Jade Dragon","\u7389\u9F99\u96EA\u5C71\u524D","Yunnan","vast"],["039-9f383a9ec71e15da21c3c6d6a72c3cd1-1b0",2400,1600,"landscape","Star Trails over Meili","\u6885\u91CC\u661F\u8F68","Yunnan","night"],["040-22-a4ee13",2400,1351,"creativity","Spiral Library","\u65CB\u8F6C\u4E66\u9601","","geometry"],["041-24fbb713a612d2f645cdd4c54f2bf16b-036",2400,1701,"documentary","Dragon Lantern Night","\u821E\u9F99\u4E4B\u591C","","people"],["042-30bb61957b841ca16282448f926bf032-1c2",2400,1565,"personal","Framed Summit","\u5CA9\u9699\u4E2D\u7684\u96EA\u5C71","Yunnan","vast"],["043-38e356943a827401e0547616f664f27f-85f",2400,1491,"creativity","Blossom and Machine","\u6A31\u82B1\u4E0E\u673A\u68B0","","green"],["044-38fb078455529e7b290cc129e279967b-07f",2400,3600,"landscape","Alpenglow over Rooftops","\u5C4B\u9876\u4E0A\u7684\u65E5\u7167\u91D1\u5C71","Yunnan","gold"],["045-58a6efe226c870dd99284a7ed16f2f55-17d",2400,1799,"landscape","Ginkgo Lane","\u94F6\u674F\u9053","","green"],["046-62f8e0d79cc509f62a585402ebb4d196-bb9",2400,1349,"personal","Green Field from Above","\u7EFF\u91CE\u4FEF\u77B0","","green"],["047-95d91734cfd86c8a0edcf99c136989d1-59f",2400,1798,"landscape","Road to the Horizon","\u65E0\u5C3D\u516C\u8DEF","Qinghai\u2013Gansu","vast"],["048-259ce06112abf7ea2e516c3a8be41ef9-042",2400,3742,"landscape","Island Spine","\u6E56\u4E2D\u5C9B","","vast"],["049-536c73e47ae9cb1f16a62ec3f1cdaf3b-636",2400,3600,"personal","Photographer at the Window","\u7A97\u8FB9\u7684\u6444\u5F71\u8005","","people"],["050-849ed928250a6e95cd9a80d13ca93594-69d",2400,1588,"cityscape","City Grid","\u57CE\u5E02\u7F51\u683C","","night"],["051-952e28a566f4922169f9ad7bf4df042c-692",2400,1350,"landscape","Red Panda","\u5C0F\u718A\u732B","","green"],["052-1695c8f89e80b1ba393967ded0af4050-dcc",2400,4267,"cityscape","Lantern Canal","\u706F\u7B3C\u6C34\u5DF7","Yunnan","blue"],["053-5101f04f4d3da8a81cd5abece63f54f6-57d",2400,3600,"documentary","Old Town Lane","\u53E4\u57CE\u5C0F\u5DF7","Yunnan","people"],["054-6659a9858b1d0e463ce8f65f04508c2e-dc8",2400,3600,"personal","Into the Snow","\u8D70\u8FDB\u96EA\u5C71","","vast"],["055-26997a435ba4312748f4e74c941b9ce3-5d4",2400,1379,"landscape","Songzanlin in Mist","\u677E\u8D5E\u6797\u5BFA","Yunnan","gold"],["056-a8c9ba24fe01bfd69a43065bceec57b2-cb7",2400,4267,"ecological","Flamingo Heart","\u706B\u70C8\u9E1F\u4E4B\u5FC3","","green"],["057-a8ec4be6c464b356c66f1d3c702f27c9-876",2400,3365,"documentary","Through the Windshield","\u8F66\u7A97\u4E4B\u5916","","people"],["058-a45c7dbff005a764e2bf5c2f7e99cf7f-201",2400,4267,"ecological","Koala","\u8003\u62C9","","green"],["059-a8922ea72d55bf51f3582c960f507c43-1f7",2400,3600,"cityscape","Tower over the Gate","\u57CE\u697C\u4E0E\u5854","Nanjing","blue"],["060-a564378148fd0e0a564881592b714823-5b0",2400,1387,"personal","Grey Dunes","\u7070\u8272\u6C99\u4E18","Qinghai\u2013Gansu","vast"],["061-aba8806e9361f741a58d828175abfe8a-113",2400,1351,"personal","Hay Bale Canyon","\u8349\u579B\u5CE1\u8C37","","vast"],["062-acfe4c813ba9fbf0eca34ccb46152469-9cc",2400,1601,"cityscape","Riverside City","\u6CB3\u7554\u57CE\u5E02","","blue"],["063-b4fed73b8ddfc32733f80fe81db11e70-e7f",2400,1603,"personal","Light Bearer","\u6301\u5149\u8005","Qinghai\u2013Gansu","night"],["064-b0004060-7a6a47",2400,3203,"creativity","Yardang","\u96C5\u4E39","Qinghai\u2013Gansu","vast"],["065-b0004079-3fr-a5327e",2400,1799,"landscape","Star Trails over Yardang","\u96C5\u4E39\u661F\u8F68","Qinghai\u2013Gansu","night"],["066-b0004115-0392f8",2400,1799,"personal","Red on the Ridge","\u5C71\u810A\u4E0A\u7684\u7EA2","Qinghai\u2013Gansu","vast"],["067-b0005171-952639",2400,3203,"cityscape","Zifeng at Dusk","\u7D2B\u5CF0\u66AE\u8272","Nanjing","blue"],["068-b0005974-d5785e",2400,1799,"cityscape","Blue Hour, CBD","\u84DD\u8C03 CBD","Beijing","blue"],["069-b0006009-d1136f",2400,2971,"creativity","Temple in Relief","\u6D6E\u96D5\u5929\u575B","","geometry"],["070-b0006029-3662a1",2400,3203,"cityscape","The Arch","\u592E\u89C6\u5927\u697C","Beijing","geometry"],["071-b0006388-17-38-00-08d8a4",2400,3203,"documentary","Corner Store","\u8857\u89D2\u5C0F\u5E97","","people"],["072-b0006481-3fr-415f28",2400,1799,"ecological","Cabin of Fireflies","\u8424\u706B\u5C0F\u5C4B","","night"],["073-b0006654-724b7d",2400,887,"cityscape","River Panorama","\u6C5F\u666F\u957F\u5377","","gold"],["074-b0006836-14700b",2400,1799,"cityscape","Evening Skyline","\u66AE\u8272\u5929\u9645\u7EBF","","blue"],["075-bd38867c9a7e3929d45f3faf875b3adc-caf",2400,3600,"cityscape","Neon Spiral","\u9713\u8679\u56DE\u65CB","","night"],["076-c2ddb1228fc9179a609c3ffe3e204f06-2-8",2400,1349,"cityscape","City in the Clouds","\u4E91\u4E2D\u57CE","","vast"],["077-c9fef66fd7337bb0026e2e5ac3cccb43-0ab",2400,3593,"personal","Milky Way Through Ruins","\u5E9F\u589F\u94F6\u6CB3","Qinghai\u2013Gansu","night"],["078-c56b1032af02d09b992b07b98c3125a2-7a6",2400,1600,"landscape","Looking Up","\u4EF0\u671B","","green"],["079-c2279d3facbf29a7c6faf1f32ce05bfc-5a5",2400,1600,"cityscape","Bridge Lights","\u6865\u4E0A\u706F\u706B","","blue"],["080-cb41042607433f6c8164e3e430546cae-35a",2400,1523,"documentary","Carousel","\u65CB\u8F6C\u6728\u9A6C","","people"],["081-cc287fc69d6681796c9a4e7f417f6e1c-c76",2400,3601,"landscape","Pavilion Reflection","\u4EAD\u5F71","","green"],["082-cd1d6a8e5c3568dc6b75dae1a2e2eb60-e0a",2400,4265,"personal","Alley Cyclist","\u5DF7\u53E3\u9A91\u884C","","people"],["083-ce730b764721ea8711d0656b25d0026d-0c0",2400,1883,"creativity","Window Cleaners","\u9AD8\u7A7A\u6E05\u6D01","","geometry"],["084-cf5cfc7e8e174b7af7f8f0c35573fcce-856",2400,3800,"ecological","Toucan","\u5DE8\u5634\u9E1F","","green"],["085-d4659493deb99ce15a0a69526d72cc81-55a",2400,1798,"cityscape","Floating Towers","\u60AC\u6D6E\u697C\u7FA4","","vast"],["086-dji-20250614070916-0120-d-ed4542",2400,1798,"cityscape","Tower in the Fog","\u96FE\u4E2D\u5B64\u697C","","vast"],["087-dji-20250821090926-0354-d-e4c4ee",2400,3202,"documentary","Solar Tower","\u5149\u70ED\u5854","Qinghai\u2013Gansu","geometry"],["088-dji-20250821091248-0360-d-8f645e",2400,1501,"creativity","Heliostats","\u5B9A\u65E5\u955C\u9635","Qinghai\u2013Gansu","geometry"],["089-dji-20250823171628-0147-d-e82359",2400,1349,"personal","Green Terraces","\u7EFF\u8272\u7EB9\u7406","","geometry"],["090-dji-20250823201223-0167-d-94b04e",2400,3600,"personal","On the Rock","\u5DE8\u77F3\u4E4B\u4E0A","Qinghai\u2013Gansu","vast"],["091-dji-20250825201510-0182-d-e6f5c0",2400,3600,"personal","Salt Lake Dusk","\u76D0\u6E56\u66AE\u8272","Qinghai\u2013Gansu","gold"],["092-dji-20250826194608-0246-d-4aeb42",2400,1800,"creativity","One Bush","\u6C99\u6D77\u4E00\u682A","Qinghai\u2013Gansu","geometry"],["093-dsc00442-faf4d6",2400,3600,"documentary","Rooftops and Jade Dragon","\u5C4B\u9876\u4E0E\u7389\u9F99","Yunnan","gold"],["094-dsc00719-bbfbaa",2400,3600,"documentary","Old Town Morning","\u53E4\u57CE\u6E05\u6668","Yunnan","people"],["095-dsc03649-724230",2400,1600,"cityscape","Burning Sky","\u706B\u70E7\u4E91\u9646\u5BB6\u5634","Shanghai","gold"],["096-dsc07591-139c76",2400,1351,"creativity","Spiral Stair","\u65CB\u68AF","","geometry"],["097-e5be2255192442d1923a5c0d3ba3d006-d9a",2400,3318,"documentary","Edge of a Roof","\u5C4B\u6A90\u4E00\u89D2","","geometry"],["098-eb059407d811190af44e726be97aebc7-1d5",2400,1367,"cityscape","Gallery Window","\u5C55\u5385\u4E4B\u7A97","","geometry"],["099-ec9355e3a2c039ca4b74235a58d0fbb2-937",2400,1799,"landscape","Violet Forest","\u7D2B\u8272\u68EE\u6797","","green"],["100-ee18bf6a0fee17ca64b2a008ab6f9204-6cc",2400,1350,"ecological","Marmoset","\u72E8\u7334","","green"],["101-efd6cedebd96732721d60eb7a00078fc-0f4",2400,3726,"creativity","Green Arch","\u7EFF\u8272\u62F1\u95E8","","geometry"],["102-f6ad4aff3c2132e15e05f725c129cf55-33f",2400,1725,"landscape","Xueda Lake Mirror","\u96EA\u8FBE\u6E56\u5012\u5F71","Yunnan","blue"],["103-fa3db5adaddb5eb492f65be625f6bcd9-033",2400,1216,"creativity","White Spiral","\u767D\u8272\u65CB\u68AF","","geometry"],["104-fdacd51eac32d9a56e704899c07985bd-300",2400,1124,"documentary","Wedding","\u5A5A\u793C","","people"],["105-fe33a6d5dc5258e930ba60efb9e5d285-695",2400,1725,"landscape","Xueda Lake, Sunrise","\u96EA\u8FBE\u6E56\u65E5\u51FA","Yunnan","gold"],["106-fe40671cfbe700975ed545e8776c8ed0-b9c",2400,1351,"personal","Snowline Viewpoint","\u96EA\u7EBF\u89C2\u666F","Yunnan","gold"],["107-img-1791-2a7131",2400,3200,"creativity","Blocks from Above","\u4FEF\u77B0\u8857\u533A","","geometry"],["108-img-3167-b0e166",2400,1799,"documentary","Fireworks","\u70DF\u706B","","night"],["109-img-3757-b5c78b",2400,1799,"landscape","Ginkgo Road","\u94F6\u674F\u8DEF","","green"],["110-img-3758-7c68ad",2400,1883,"creativity","Facade Rhythm","\u7ACB\u9762\u97F5\u5F8B","","geometry"],["111-img-3759-2-9cefeb",2400,1601,"cityscape","Dish and Star Trails","\u5929\u7EBF\u661F\u8F68","","night"],["112-img-3763-edf3f1",2400,1352,"personal","Standing Tall","\u8FDC\u773A","Qinghai\u2013Gansu","vast"],["113-img-3769-8b3f3a",2400,3596,"personal","Catching Snow","\u63A5\u96EA","","night"],["114-img-4295-b8c376",2400,1359,"landscape","Songzanlin Dawn","\u677E\u8D5E\u6797\u5BFA\u6668\u5149","Yunnan","vast"],["115-img-4424-a27561",2400,1350,"personal","Summit","\u96EA\u5CF0\u4E4B\u4E0A","Yunnan","vast"],["116-img-4429-7d5209",2400,1798,"landscape","Valley from Above","\u96EA\u8C37\u4FEF\u77B0","Yunnan","vast"],["117-img-4431-5457a0",2400,1349,"landscape","Lijiang at Blue Hour","\u4E3D\u6C5F\u84DD\u8C03","Yunnan","blue"],["118-img-4432-d152b5",2400,1351,"landscape","Black Dragon Pool","\u9ED1\u9F99\u6F6D","Yunnan","blue"],["119-img-4507-ac97ec",2400,737,"cityscape","Night Panorama","\u591C\u8272\u957F\u5377","Shanghai","night"],["120-img-4634-8ed884",2400,1799,"landscape","Pavilion and Star Trails","\u9601\u697C\u661F\u8F68","","night"],["121-img-8372-aa4ae6",2400,1799,"ecological","Firefly Forest","\u8424\u706B\u68EE\u6797","","night"],["122-sh-78182e",2400,1711,"cityscape","River Bend at Night","\u591C\u8272\u6C5F\u6E7E","Shanghai","night"],["123-slx06909-daf02f",2400,4055,"personal","Stairway to the Tower","\u901A\u5F80\u9AD8\u5854","Shanghai","geometry"],["124-1-40e905",2400,3601,"cityscape","Interchange","\u7ACB\u4EA4\u5149\u8F68","Beijing","blue"],["125-1-8e43bc",2400,1600,"creativity","X","X","","geometry"],["126-xyj5139-eg01",2400,1600,"landscape","Balloons over the West Bank","\u897F\u5CB8\u70ED\u6C14\u7403","Luxor","vast"],["127-xyj5172-eg02",1717,2576,"documentary","One Balloon, a Thousand Roofs","\u5343\u5C4B\u4E4B\u4E0A","Luxor","geometry"],["128-xyj5178-eg03",2400,1600,"landscape","Hatshepsut from Above","\u4FEF\u77B0\u54C8\u7279\u8C22\u666E\u82CF\u7279\u795E\u5E99","Luxor","gold"],["129-xyj5491-eg04",2400,1600,"landscape","Pyramid in the Fog","\u96FE\u4E2D\u91D1\u5B57\u5854","Giza","vast"],["130-xyj5530-eg05",2400,1600,"documentary","Khufu Through the Glass","\u73BB\u7483\u540E\u7684\u80E1\u592B","Giza","people"],["131-xyj5448-eg06",1718,2576,"cityscape","Minarets and Pyramids","\u5BA3\u793C\u5854\u4E0E\u91D1\u5B57\u5854","Cairo","gold"]];var Al=[{id:"cityscape",en:"Cityscape",zh:"\u57CE\u5E02"},{id:"landscape",en:"Landscape",zh:"\u98CE\u5149"},{id:"personal",en:"On the Road",zh:"\u5728\u8DEF\u4E0A"},{id:"documentary",en:"Documentary",zh:"\u4EBA\u6587\u7EAA\u5B9E"},{id:"creativity",en:"Creative",zh:"\u521B\u610F"},{id:"ecological",en:"Wildlife",zh:"\u751F\u7075"}],ns=[{id:"blue",en:"Blue Hour",zh:"\u84DD\u8C03\u57CE\u5E02",cover:1,note:"Cities in the cool minutes after sunset, when the lights come on.",noteZh:"\u65E5\u843D\u540E\u7684\u84DD\u8C03\u65F6\u523B\uFF0C\u57CE\u5E02\u4E00\u76CF\u76CF\u4EAE\u8D77\u3002"},{id:"gold",en:"Golden Light",zh:"\u91D1\u8272\u65F6\u523B",cover:95,note:"Alpenglow, burning skies and the warm edges of the day.",noteZh:"\u65E5\u7167\u91D1\u5C71\u3001\u706B\u70E7\u4E91\uFF0C\u4E00\u5929\u4E2D\u6700\u6696\u7684\u8FB9\u7F18\u3002"},{id:"vast",en:"Wide Open",zh:"\u8FBD\u9614",cover:47,note:"Plateaus, peaks, fog seas \u2014 and one small figure for scale.",noteZh:"\u9AD8\u539F\u3001\u96EA\u5C71\u4E0E\u4E91\u6D77\uFF0C\u4EE5\u53CA\u753B\u9762\u91CC\u90A3\u4E2A\u5C0F\u5C0F\u7684\u4EBA\u3002"},{id:"night",en:"After Dark",zh:"\u591C\u4E0E\u661F",cover:39,note:"Star trails, fireflies, lightning and neon.",noteZh:"\u661F\u8F68\u3001\u8424\u706B\u3001\u95EA\u7535\u4E0E\u9713\u8679\u3002"},{id:"geometry",en:"Geometry",zh:"\u51E0\u4F55",cover:25,note:"Spirals, symmetry and patterns found in architecture and land.",noteZh:"\u5728\u5EFA\u7B51\u4E0E\u5927\u5730\u4E2D\u53D1\u73B0\u7684\u87BA\u65CB\u3001\u5BF9\u79F0\u4E0E\u79E9\u5E8F\u3002"},{id:"people",en:"Human Moments",zh:"\u4EBA\u95F4",cover:20,note:"Streets, festivals and the people inside the frame.",noteZh:"\u8857\u5934\u3001\u8282\u5E86\uFF0C\u4EE5\u53CA\u753B\u9762\u91CC\u7684\u4EBA\u3002"},{id:"green",en:"Living Green",zh:"\u751F\u7075\u8349\u6728",cover:51,note:"Animals, forests and the turning seasons.",noteZh:"\u52A8\u7269\u3001\u68EE\u6797\u4E0E\u5B63\u8282\u7684\u6D41\u8F6C\u3002"}],Sr=e=>ns.find(t=>t.id===e),ss=new Set([3,4,23,31,38,43,45,46,49,53,57,58,62,67,73,74,83,93,98,100,101,104,112,113,116,117,119]),Rl=wl.map(([e,t,i,r,a,n,s,o],l)=>({n:l+1,id:e,w:t,h:i,ratio:t/i,cat:r,style:o,title:a,zh:n,place:s,s:`media/s/${e}.webp`,m:`media/m/${e}.webp`,l:`media/l/${e}.webp`})),Zi=Rl.filter(e=>!ss.has(e.n)),os=e=>Rl[e-1],Cl=e=>typeof window!="undefined"&&window.X1NG_TEX&&window.X1NG_TEX[e.id]||e.s;var Pl=[{id:"yunnan",en:"Yunnan Journey",zh:"\u4E91\u5357\u4E4B\u65C5",region:"Lijiang \xB7 Shangri-La \xB7 Meili",year:"2024",tags:["Travel","Alpine","Guide"],cover:102,lede:"Six days between old towns and glaciers \u2014 chasing the first gold on Meili, the morning haze over Songzanlin and the blue hour mirror of Xueda Lake.",ledeZh:"\u4ECE\u53E4\u57CE\u4E3D\u6C5F\u5230\u6885\u91CC\u96EA\u5C71\uFF0C\u516D\u5929\u4E94\u665A\u8FFD\u9010\u65E5\u7167\u91D1\u5C71\u3001\u677E\u8D5E\u6797\u5BFA\u6668\u96FE\u4E0E\u96EA\u8FBE\u6E56\u7684\u84DD\u8C03\u5012\u5F71\u3002",frames:[102,39,44,55,114,24,42,105,106,115,38,116,118,117,93,94,52,53,26],guide:"yunnan",chapter:1,days:"6 days"},{id:"qinggan",en:"Qinghai\u2013Gansu Loop",zh:"\u9752\u7518\u5927\u73AF\u7EBF",region:"Qinghai \xB7 Gansu \xB7 Northwest China",year:"2024",tags:["Travel","Desert","Night sky"],cover:47,lede:"A long loop across the plateau: salt lakes that hold the sky, yardang ridges under turning stars, and roads that simply keep going.",ledeZh:"\u7A7F\u8D8A\u9752\u6D77\u4E0E\u7518\u8083\u7684\u9AD8\u539F\u4E0E\u6208\u58C1\uFF1A\u5012\u6620\u5929\u7A7A\u7684\u76D0\u6E56\u3001\u661F\u8F68\u4E0B\u7684\u96C5\u4E39\uFF0C\u4EE5\u53CA\u6CA1\u6709\u5C3D\u5934\u7684\u516C\u8DEF\u3002",frames:[47,65,91,63,77,64,60,35,112,92,88,87,90,66],guide:"qinggan",chapter:2,days:"Loop"},{id:"egypt",en:"Egypt, from the Air",zh:"\u57C3\u53CA \xB7 \u5149\u4E0E\u6C99",region:"Luxor \xB7 Hurghada \xB7 Giza \xB7 Cairo",year:"2026",tags:["Travel","Aerial","Journal"],cover:128,lede:"Dawn over the West Bank in a balloon basket, Hatshepsut cut into the cliff below, then the pyramids again and again \u2014 in fog, through glass, behind the minarets of Cairo.",ledeZh:"\u5728\u5362\u514B\u7D22\u897F\u5CB8\u7684\u70ED\u6C14\u7403\u4E0A\u7B49\u65E5\u51FA\uFF0C\u811A\u4E0B\u662F\u5D4C\u8FDB\u5C71\u5D16\u7684\u54C8\u7279\u8C22\u666E\u82CF\u7279\u795E\u5E99\uFF1B\u518D\u5230\u5409\u8428\uFF0C\u96FE\u91CC\u3001\u73BB\u7483\u540E\u3001\u5F00\u7F57\u5BA3\u793C\u5854\u80CC\u540E\uFF0C\u4E00\u6B21\u6B21\u9047\u89C1\u91D1\u5B57\u5854\u3002",frames:[128,126,129,127,130,131],journal:{href:"egypt/",en:"Egypt, in Motion",zh:"\u57C3\u53CA\u968F\u7B14",note:"Six days of essays and Live Photos \u2014 balloons, the Red Sea and a driver with a book of five-star reviews.",noteZh:"\u516D\u5929\u7684\u968F\u7B14\u4E0E\u5B9E\u51B5\u7167\u7247\u3002"},chapter:3,days:"6 days"}],Ll=[{id:"cities",en:"Cities After Dusk",zh:"\u57CE\u5E02\u66AE\u8272",region:"Nanjing \xB7 Beijing \xB7 Shanghai",year:"2023\u2014",tags:["Cityscape","Blue hour","Night"],cover:95,lede:"Home is Nanjing, but the habit travels: wait for the blue hour, find the high ground, let the city switch itself on.",ledeZh:"\u5E38\u9A7B\u5357\u4EAC\uFF0C\u4E5F\u5728\u5317\u4EAC\u3001\u4E0A\u6D77\u7684\u9AD8\u5904\u7B49\u5F85\u84DD\u8C03\u65F6\u523B\uFF0C\u770B\u57CE\u5E02\u4E00\u76CF\u76CF\u4EAE\u8D77\u6765\u3002",frames:[95,21,1,29,22,67,36,59,2,8,13,14,68,70,124,33,34,119,123,17,74,79]},{id:"above",en:"From Above",zh:"\u9AD8\u7A7A",region:"Drone work",year:"2023\u2014",tags:["Aerial","Patterns","Fog"],cover:86,lede:"Four hundred metres changes everything. Fog becomes an ocean, streets become circuitry, and a single tower becomes an island.",ledeZh:"\u5347\u5230\u56DB\u767E\u7C73\u9AD8\u7A7A\uFF1A\u96FE\u53D8\u6210\u6D77\uFF0C\u8857\u9053\u53D8\u6210\u7535\u8DEF\uFF0C\u4E00\u680B\u697C\u4E5F\u80FD\u6210\u4E3A\u5B64\u5C9B\u3002",frames:[86,76,85,122,50,107,46,89,37,48,28]},{id:"geometry",en:"Geometry of Light",zh:"\u5149\u7684\u51E0\u4F55",region:"Architecture studies",year:"2023\u2014",tags:["Creative","Spirals","Symmetry"],cover:25,lede:"Spirals, tunnels, facades \u2014 buildings looked at until they stop being buildings and turn into drawings made of light.",ledeZh:"\u65CB\u68AF\u3001\u96A7\u9053\u4E0E\u7ACB\u9762\uFF1A\u4E00\u76F4\u770B\u7740\u5EFA\u7B51\uFF0C\u76F4\u5230\u5B83\u53D8\u6210\u4E00\u5F20\u7531\u5149\u6784\u6210\u7684\u56FE\u3002",frames:[25,5,96,7,103,40,6,101,83,11,69,97,125]},{id:"people",en:"Human Scale",zh:"\u4EBA\u95F4",region:"Street & documentary",year:"2023\u2014",tags:["Documentary","Street","Festivals"],cover:20,lede:"Close enough to notice the gesture, far enough to let it stay true \u2014 ribbon dancers at dawn, lantern nights, a quiet corner shop.",ledeZh:"\u8DB3\u591F\u8FD1\uFF0C\u80FD\u770B\u89C1\u52A8\u4F5C\uFF1B\u8DB3\u591F\u8FDC\uFF0C\u8BA9\u5B83\u4FDD\u6301\u771F\u5B9E\u2014\u2014\u6668\u7EC3\u7684\u5F69\u7EF8\u3001\u706F\u4F1A\u7684\u591C\u665A\u3001\u8857\u89D2\u7684\u5C0F\u5E97\u3002",frames:[20,19,41,80,10,9,57,71,82,104,108,15]},{id:"wild",en:"Living Things",zh:"\u751F\u7075",region:"Wildlife & night forests",year:"2023\u2014",tags:["Wildlife","Fireflies","Birds"],cover:16,lede:"Fireflies drifting through a summer forest, gulls over grey water, and the patient faces of animals that did not ask to be photographed.",ledeZh:"\u590F\u591C\u68EE\u6797\u91CC\u7684\u8424\u706B\u3001\u7070\u8272\u6C34\u9762\u4E0A\u7684\u9E25\u7FA4\uFF0C\u4EE5\u53CA\u90A3\u4E9B\u5B89\u9759\u770B\u7740\u955C\u5934\u7684\u52A8\u7269\u3002",frames:[16,72,121,12,84,51,56,32,58,100]}];[...Pl,...Ll].forEach(e=>{e.frames=e.frames.filter(t=>!ss.has(t))});var Il=e=>Ll.find(t=>t.frames.includes(e)),Dl=e=>Pl.find(t=>t.frames.includes(e)),Ly=[126,102,95,129,20,25,86,128,39,47,21,131,55,8,65,34,16,125,77,91,13,124,44,88,56,70,1,122,96,63].filter(e=>!ss.has(e)),ju=["https://pan.baidu.com/s/1fnFnoaW2alaQI63GItltfA?pwd=kstr","https://pan.baidu.com/s/1775m0DJv7OFWcWVAMIeXZw?pwd=pwf4","https://pan.baidu.com/s/1XXkvom-n1fwFqzEBoM4FJA?pwd=rs6p","https://pan.baidu.com/s/1IiiMzlhrWWz0hEg7ZYSeag?pwd=qdzm","https://pan.baidu.com/s/120DBmMflVaZCZHr6xdob6A?pwd=te1v","https://pan.baidu.com/s/1rHAFtN0DR6w_wzR7ujd7Aw?pwd=rpr1","https://pan.baidu.com/s/1_XIhdbo_7mT_Tn1f6XMD6Q?pwd=yei2","https://pan.baidu.com/s/1yGv2M1PoIASG2z58Cg55VQ?pwd=qgqb"],Iy=[1,2,3,4,5,6,7,8].map(e=>({id:e,before:`media/raw/${e}_before.webp`,after:`media/raw/${e}_after.webp`,pan:ju[e-1]||null})),$i={email:"2193177455@qq.com",links:[{label:"Xiaohongshu \u5C0F\u7EA2\u4E66",short:"\u5C0F\u7EA2\u4E66",href:"https://www.xiaohongshu.com/user/profile/631b5c64000000002303dc06"},{label:"Douyin \u6296\u97F3",short:"Douyin",href:"https://v.douyin.com/pIs2kYdlksE/"},{label:"500px",short:"500px",href:"https://500px.com/p/xingyujieeeeee"}]};var mt=window.gsap,hs=window.matchMedia("(hover: hover) and (pointer: fine)").matches,Ki=window.matchMedia("(prefers-reduced-motion: reduce)").matches,qu=(e,t,i)=>Math.min(i,Math.max(t,e));function Ol(){let e=document.createElement("div");e.className="curtain",e.setAttribute("aria-hidden","true"),e.innerHTML=`<svg class="curtain__svg" preserveAspectRatio="none"><path/></svg>
    <div class="curtain__label"><span class="mono curtain__kicker">X1NG</span><span class="curtain__to"><span class="curtain__line"><span class="curtain__en"></span></span><span class="curtain__line"><span class="curtain__zh"></span></span></span></div>
    <i class="curtain__bar"></i>`,document.body.append(e);let t=e.querySelector("svg"),i=e.querySelector("path"),r=e.querySelectorAll(".curtain__line > span"),a=e.querySelector(".curtain__en"),n=e.querySelector(".curtain__zh"),s=e.querySelector(".curtain__kicker"),o=e.querySelector(".curtain__bar"),l={p:0,mode:"up"},h=innerWidth,c=innerHeight,p=()=>{h=innerWidth,c=innerHeight,t.setAttribute("viewBox",`0 0 ${h} ${c}`),u()};function u(){let y=l.p,m=Math.sin(Math.PI*Math.min(1,Math.max(0,y)))*c*.22;if(e.classList.toggle("is-active",y>.001),l.mode==="up"){let d=c*(1-y);i.setAttribute("d",`M0 ${c} L0 ${d} Q${h/2} ${d-m} ${h} ${d} L${h} ${c} Z`)}else{let d=c*y;i.setAttribute("d",`M0 0 L${h} 0 L${h} ${d} Q${h/2} ${d+m} 0 ${d} Z`)}}let f=(y="")=>{let[m,d]=y.split(" \xB7 ");a.textContent=m||"",n.textContent=d||"",s.textContent=m?"X1NG \u2014 Next":"X1NG"};addEventListener("resize",p),p();let _=()=>document.getElementById("main");return{el:e,shut(y=""){mt==null||mt.killTweensOf(l),l.mode="down",l.p=1,f(y),e.classList.add("show-label"),mt==null||mt.set(r,{yPercent:0}),u()},close({label:y="",duration:m=.95}={}){return new Promise(d=>{if(f(y),Ki||!mt){l.p=1,l.mode="up",u(),d();return}l.mode="up",l.p=0,e.classList.add("show-label"),mt.killTweensOf(l);let M=_();M&&mt.to(M,{y:-innerHeight*.08,opacity:.6,duration:m,ease:"power3.inOut"}),mt.set(r,{yPercent:110}),mt.set(o,{scaleX:0}),mt.timeline({onComplete:d}).to(l,{p:1,duration:m,ease:"power3.inOut",onUpdate:u}).to(r,{yPercent:0,duration:.7,ease:"expo.out",stagger:.07},m*.55).to(o,{scaleX:.7,duration:.8,ease:"power2.out"},m*.5)})},open({duration:y=1.05,delay:m=.1}={}){return new Promise(d=>{if(Ki||!mt){l.p=0,u(),d();return}mt.killTweensOf(l),l.mode="down",l.p=1;let M=_();M&&mt.fromTo(M,{y:innerHeight*.1},{y:0,duration:y+.2,delay:m+.15,ease:"expo.out",clearProps:"transform"}),mt.to(o,{scaleX:1,duration:.3,ease:"power2.out",delay:m}),mt.to(r,{yPercent:-110,duration:.55,ease:"power3.in",stagger:.05,delay:m}),mt.to(l,{p:0,duration:y,delay:m+.3,ease:"power3.inOut",onUpdate:u,onComplete:()=>{e.classList.remove("show-label"),d()}})})}}}var pa=new Set,ls=!1;function Fl(){if(!pa.size){ls=!1;return}let e=innerWidth,t=innerHeight,i=0;pa.forEach(r=>{if(!r.isConnected){pa.delete(r);return}let a=r.getBoundingClientRect();!a.width&&!a.height||a.top<t*.92&&a.bottom>0&&a.left<e&&a.right>0&&(r.style.setProperty("--rd",`${(+r.dataset.revealDelay||0)+Math.min(i,6)*.08}s`),r.classList.add("is-in"),setTimeout(()=>r.classList.add("is-done"),1800+i*80),pa.delete(r),i++)}),setTimeout(()=>requestAnimationFrame(Fl),90)}function Bl(e=document){let t=[...e.querySelectorAll("[data-reveal]:not(.is-in)")];if(t.length){if(Ki){t.forEach(i=>i.classList.add("is-in","is-done"));return}t.forEach(i=>pa.add(i)),ls||(ls=!0,requestAnimationFrame(Fl))}}function zl(e=".pill, .menu-btn, .next__go, .icon-btn, .lb__close, [data-magnetic]"){!hs||Ki||!mt||document.addEventListener("pointermove",t=>{var o,l;let i=(l=(o=t.target).closest)==null?void 0:l.call(o,e);if(!i)return;let r=i.getBoundingClientRect(),a=t.clientX-(r.left+r.width/2),n=t.clientY-(r.top+r.height/2),s=+(i.dataset.magnetic||.28);mt.to(i,{x:a*s,y:n*s,duration:.5,ease:"power3.out",overwrite:"auto"}),i.__mag||(i.__mag=!0,i.addEventListener("pointerleave",()=>mt.to(i,{x:0,y:0,duration:.9,ease:"elastic.out(1, .35)",overwrite:"auto"})))},{passive:!0})}function Gl(){if(!hs||Ki||!mt)return;let e=document.createElement("div");e.className="lens",e.setAttribute("aria-hidden","true"),e.innerHTML="<i></i><i></i><i></i><i></i><b></b>",document.body.append(e),document.documentElement.classList.add("has-lens");let i=-100,r=-100,a=i,n=r,s=34,o=34,l=34,h=34,c=null;window.addEventListener("pointermove",p=>{i=p.clientX,r=p.clientY},{passive:!0}),document.addEventListener("pointerover",p=>{let u=p.target.closest('a, button, summary, [role="button"], input[type="range"], label');c=u&&!u.closest("[data-cursor], .vf, .field-view")?u:null,e.classList.toggle("is-lock",!!c)}),document.addEventListener("pointerdown",()=>e.classList.add("is-press")),document.addEventListener("pointerup",()=>e.classList.remove("is-press")),document.addEventListener("pointerleave",()=>e.classList.add("is-gone")),document.addEventListener("pointerenter",()=>e.classList.remove("is-gone")),mt.ticker.add(()=>{let p=i,u=r;if(c&&c.isConnected){let f=c.getBoundingClientRect();p=f.left+f.width/2+(i-(f.left+f.width/2))*.12,u=f.top+f.height/2+(r-(f.top+f.height/2))*.12,l=Math.min(f.width+14,520),h=Math.min(f.height+14,220)}else l=34,h=34;a+=(p-a)*.22,n+=(u-n)*.22,s+=(l-s)*.2,o+=(h-o)*.2,e.style.transform=`translate3d(${a-s/2}px, ${n-o/2}px, 0)`,e.style.width=`${s}px`,e.style.height=`${o}px`,e.lastChild.style.transform=`translate3d(${i-a+s/2-2}px, ${r-n+o/2-2}px, 0)`,e.classList.toggle("is-quiet",!!document.querySelector(".cursor.is-active"))})}var Nl="#%&*+=<>/\\0123456789ABCDEFGHJKLMNPRSTUVXYZ";function Ul(e,{duration:t=.9}={}){if(!e||Ki)return;let i=e.dataset.text||e.textContent;e.dataset.text=i;let r=[...i],a=performance.now();cancelAnimationFrame(e.__scr);let n=s=>{let o=qu((s-a)/(t*1e3),0,1);e.textContent=r.map((l,h)=>{if(!/[A-Za-z0-9]/.test(l))return l;let c=h/r.length*.7+.3;return o>=c?l:Nl[Math.random()*Nl.length|0]}).join(""),o<1?e.__scr=requestAnimationFrame(n):e.textContent=i};e.__scr=requestAnimationFrame(n)}function kl(e=document){let t=[...e.querySelectorAll("[data-scramble]")];if(!t.length||Ki||!("IntersectionObserver"in window))return;let i=new IntersectionObserver(r=>r.forEach(a=>{a.isIntersecting&&(Ul(a.target),i.unobserve(a.target))}),{threshold:.6});t.forEach(r=>i.observe(r)),hs&&e.addEventListener("pointerover",r=>{var n,s;let a=(s=(n=r.target).closest)==null?void 0:s.call(n,"[data-scramble-host]");a&&!a.contains(r.relatedTarget)&&a.querySelectorAll("[data-scramble]").forEach(o=>Ul(o,{duration:.5}))})}var Yu=matchMedia("(prefers-reduced-motion: reduce)").matches,us=matchMedia("(hover: hover) and (pointer: fine)").matches,Hl=.5,Zu="attribute vec2 p; varying vec2 v; void main(){ v = p * 0.5 + 0.5; gl_Position = vec4(p, 0.0, 1.0); }",$u=`
precision highp float;
uniform sampler2D tex, mask; uniform vec2 scale, off, px; uniform vec3 light; uniform float glow, develop, t;
varying vec2 v;
float lum(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
float hh(vec2 q){ return fract(sin(dot(q, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 q){ vec2 i = floor(q), f = fract(q); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hh(i), hh(i + vec2(1, 0)), f.x), mix(hh(i + vec2(0, 1)), hh(i + vec2(1, 1)), f.x), f.y); }
float H(vec2 u){ return lum(texture2D(tex, u, 4.0).rgb) * 0.45 + lum(texture2D(tex, u, 2.2).rgb) * 0.35 + lum(texture2D(tex, u, 0.8).rgb) * 0.2; }
void main(){
  vec2 u = off + v * scale; u.y = 1.0 - u.y;
  float m = texture2D(mask, vec2(v.x, 1.0 - v.y)).r;                 // how much has been brushed here
  m = smoothstep(0.0, 1.0, m);
  vec2 e = px * 4.0;
  float hx = H(u + vec2(e.x, 0.0)) - H(u - vec2(e.x, 0.0));
  float hy = H(u - vec2(0.0, e.y)) - H(u + vec2(0.0, e.y));
  vec3 n = normalize(vec3(-hx * 34.0 * m, -hy * 34.0 * m, 1.0));   // flat where untouched, carved where brushed
  vec3 L = normalize(light);
  float lam = max(dot(n, L), 0.0);
  float flat0 = max(L.z, 0.0);
  float spec = pow(max(dot(reflect(-L, n), vec3(0.0, 0.0, 1.0)), 0.0), 28.0) * m;
  float grain = (vn(v * vec2(420.0, 300.0)) - 0.5) * 0.025;
  // white plaster: an even sheet, the relief only where the hand has been
  vec3 plaster = vec3(0.95, 0.94, 0.915) * (0.5 + 0.62 * mix(flat0, lam, m)) + spec * 0.16 + grain;
  plaster *= 1.0 - 0.22 * m * (1.0 - smoothstep(0.05, 0.75, H(u)));   // hollows hold shadow, raised parts stay white
  // the glow: the sheet lights up from within before the photograph comes through
  plaster = mix(plaster, vec3(1.0, 0.985, 0.95), glow * 0.55) + glow * 0.12 * (0.5 + 0.5 * m);
  vec3 photo = texture2D(tex, u).rgb;
  // colour comes up from the most-brushed places first, in soft patches
  float th = (1.0 - m) * 0.5 + vn(v * 6.0 + t * 0.05) * 0.35 + vn(v * 19.0) * 0.15;
  float k = smoothstep(th - 0.1, th + 0.1, develop * 1.25 - 0.05);
  gl_FragColor = vec4(mix(plaster, photo, k), 1.0);
}`,pe=null,hi=null,Ji=null,li={},ds=[],cs=0;function Ku(){if(hi=document.createElement("canvas"),pe=hi.getContext("webgl",{premultipliedAlpha:!1,antialias:!1,preserveDrawingBuffer:!0}),!pe)return!1;let e=(r,a)=>{let n=pe.createShader(r);if(pe.shaderSource(n,a),pe.compileShader(n),!pe.getShaderParameter(n,pe.COMPILE_STATUS))throw new Error(pe.getShaderInfoLog(n));return n};Ji=pe.createProgram(),pe.attachShader(Ji,e(pe.VERTEX_SHADER,Zu)),pe.attachShader(Ji,e(pe.FRAGMENT_SHADER,$u)),pe.linkProgram(Ji),pe.useProgram(Ji);let t=pe.createBuffer();pe.bindBuffer(pe.ARRAY_BUFFER,t),pe.bufferData(pe.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),pe.STATIC_DRAW);let i=pe.getAttribLocation(Ji,"p");return pe.enableVertexAttribArray(i),pe.vertexAttribPointer(i,2,pe.FLOAT,!1,0,0),["tex","mask","scale","off","px","light","glow","develop","t"].forEach(r=>{li[r]=pe.getUniformLocation(Ji,r)}),addEventListener("resize",()=>{ds.forEach(r=>{r.dirty=!0}),Qi()}),addEventListener("scroll",Qi,{passive:!0}),!0}function Vl(e,t){let i=pe.createTexture();pe.bindTexture(pe.TEXTURE_2D,i),pe.pixelStorei(pe.UNPACK_FLIP_Y_WEBGL,!1);let r=e;if(t){let a=document.createElement("canvas");a.width=a.height=1024,a.getContext("2d").drawImage(e,0,0,1024,1024),r=a}return pe.texImage2D(pe.TEXTURE_2D,0,pe.RGBA,pe.RGBA,pe.UNSIGNED_BYTE,r),t?(pe.generateMipmap(pe.TEXTURE_2D),pe.texParameteri(pe.TEXTURE_2D,pe.TEXTURE_MIN_FILTER,pe.LINEAR_MIPMAP_LINEAR)):pe.texParameteri(pe.TEXTURE_2D,pe.TEXTURE_MIN_FILTER,pe.LINEAR),pe.texParameteri(pe.TEXTURE_2D,pe.TEXTURE_MAG_FILTER,pe.LINEAR),pe.texParameteri(pe.TEXTURE_2D,pe.TEXTURE_WRAP_S,pe.CLAMP_TO_EDGE),pe.texParameteri(pe.TEXTURE_2D,pe.TEXTURE_WRAP_T,pe.CLAMP_TO_EDGE),i}function Ju(e,t){let i=e.canvas.getBoundingClientRect(),r=Math.min(devicePixelRatio||1,1.5),a=Math.max(2,Math.min(1600,Math.round(i.width*r))),n=Math.max(2,Math.min(1600,Math.round(i.height*r)));(e.canvas.width!==a||e.canvas.height!==n)&&(e.canvas.width=a,e.canvas.height=n),(hi.width<a||hi.height<n)&&(hi.width=Math.max(hi.width,a),hi.height=Math.max(hi.height,n)),pe.viewport(0,hi.height-n,a,n),pe.activeTexture(pe.TEXTURE0),pe.bindTexture(pe.TEXTURE_2D,e.tex),pe.uniform1i(li.tex,0),pe.activeTexture(pe.TEXTURE1),pe.bindTexture(pe.TEXTURE_2D,e.maskTex),e.maskDirty&&(pe.texImage2D(pe.TEXTURE_2D,0,pe.RGBA,pe.RGBA,pe.UNSIGNED_BYTE,e.mask),e.maskDirty=!1),pe.uniform1i(li.mask,1);let s=i.width/i.height,o=e.ratio,l=s>o?1:s/o,h=s>o?o/s:1;pe.uniform2f(li.scale,l,h),pe.uniform2f(li.off,(1-l)/2,(1-h)/2),pe.uniform2f(li.px,1/Math.max(240,i.width),1/Math.max(240,i.height)),pe.uniform3f(li.light,e.lx,e.ly,.55),pe.uniform1f(li.glow,e.glow),pe.uniform1f(li.develop,e.dev),pe.uniform1f(li.t,t/1e3),pe.drawArrays(pe.TRIANGLE_STRIP,0,4),e.ctx.clearRect(0,0,a,n),e.ctx.drawImage(hi,0,0,a,n,0,0,a,n)}function Qu(e,t,i){let r=e.mask,a=e.mctx,n=r.width*.075,s=a.createRadialGradient(t*r.width,i*r.height,0,t*r.width,i*r.height,n);s.addColorStop(0,"rgba(255,255,255,.1)"),s.addColorStop(.6,"rgba(255,255,255,.05)"),s.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=s,a.fillRect(t*r.width-n,i*r.height-n,n*2,n*2),e.maskDirty=!0,e.dirty=!0}function Wl(e,t,i){e.px==null&&(e.px=t,e.py=i);let r=Math.hypot(t-e.px,i-e.py),a=Math.max(1,Math.ceil(r/.018));for(let n=1;n<=a;n++)Qu(e,e.px+(t-e.px)*n/a,e.py+(i-e.py)*n/a);e.px=t,e.py=i}function ed(e){let t=e.sample,i=e.sctx;i.clearRect(0,0,t.width,t.height),i.drawImage(e.mask,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height).data,a=0;for(let n=0;n<r.length;n+=4)r[n]>150&&a++;return a/(r.length/4)}function td(e){cs=0;let t=!1;ds.forEach(i=>{var s,o;if(!i.tex)return;let r=i.canvas.getBoundingClientRect();if(r.bottom<-40||r.top>innerHeight+40||!r.width)return;if(!us&&i.state==="plaster"&&r.top>-10&&r.bottom<innerHeight+10){i.auto=(i.auto||0)+1/60;let l=i.auto*3.2,h=.05+i.auto*.05;Wl(i,.5+Math.cos(l)*h*(r.height/r.width)*1.4,.5+Math.sin(l)*h),t=!0}let a=i.over?(i.cx-.5)*2.4:Math.sin(e/2400)*.9,n=i.over?(.5-i.cy)*2.4:.7;if(i.lx+=(a-i.lx)*.1,i.ly+=(n-i.ly)*.1,i.state==="plaster"&&e-i.lastCov>180&&(i.lastCov=e,i.cov=ed(i),(s=i.onProgress)==null||s.call(i,i.cov),i.cov>=Hl&&(i.state="glow",i.t0=e)),i.state==="glow"){let l=(e-i.t0)/650;i.glow=Math.min(1,l),l>=1&&(i.state="develop",i.t0=e),t=!0,i.dirty=!0}else if(i.state==="develop"){let l=Math.min(1,(e-i.t0)/1600);i.dev=1-Math.pow(1-l,2),i.glow=Math.max(0,1-l*1.4),l>=1&&(i.state="done",(o=i.onDone)==null||o.call(i)),t=!0,i.dirty=!0}i.over&&i.state==="plaster"&&(t=!0),i.dirty&&(Ju(i,e),i.dirty=!1)}),t&&Qi()}function Qi(){cs||(cs=requestAnimationFrame(td))}function id(e){let t=e.canvas.parentElement;getComputedStyle(t).position==="static"&&(t.style.position="relative");let i=document.createElement("div");i.className="relief-ui",i.innerHTML=`<span class="relief-ui__hint mono">${us?"Brush to develop \xB7 \u7528\u5149\u6807\u64E6\u51FA\u7167\u7247":"Developing \xB7 \u663E\u5F71\u4E2D"}</span>
    <span class="relief-ui__meter mono"><i></i><b>00%</b></span>
    <button type="button" class="relief-ui__reset mono" hidden>Re-plaster \xB7 \u91CD\u6765</button>`,t.append(i);let r=i.querySelector("i"),a=i.querySelector("b"),n=i.querySelector("button");e.onProgress=s=>{let o=Math.min(1,s/Hl);r.style.setProperty("--p",o.toFixed(3)),a.textContent=`${String(Math.round(o*100)).padStart(2,"0")}%`,i.classList.toggle("is-going",s>.01)},e.onDone=()=>{i.classList.add("is-done"),n.hidden=!1},n.addEventListener("click",s=>{s.preventDefault(),s.stopPropagation(),e.mctx.globalCompositeOperation="source-over",e.mctx.fillStyle="#000",e.mctx.fillRect(0,0,e.mask.width,e.mask.height),e.mctx.globalCompositeOperation="lighter",Object.assign(e,{state:"plaster",glow:0,dev:0,cov:0,auto:0,px:null,maskDirty:!0,dirty:!0}),i.classList.remove("is-done","is-going"),n.hidden=!0,e.onProgress(0),Qi()})}function Xl(e=document){let t=[...e.querySelectorAll("img[data-relief]:not([data-relief-done])")];!t.length||Yu||!pe&&!Ku()||t.forEach(i=>{i.dataset.reliefDone="1";let r=document.createElement("canvas");r.className=`${i.className} relief`,r.setAttribute("role","img"),r.setAttribute("aria-label",i.alt||""),i.dataset.parallax&&(r.dataset.parallax=i.dataset.parallax),delete i.dataset.parallax;let a=document.createElement("canvas");a.width=384,a.height=256;let n=a.getContext("2d"),s=document.createElement("canvas");s.width=36,s.height=24;let o={img:i,canvas:r,ctx:r.getContext("2d"),tex:null,maskTex:null,mask:a,mctx:n,sample:s,sctx:s.getContext("2d",{willReadFrequently:!0}),ratio:1.5,state:"plaster",glow:0,dev:0,cov:0,lastCov:0,lx:.3,ly:.7,cx:.5,cy:.5,over:!1,dirty:!0,maskDirty:!0};i.replaceWith(r),r.append(i);let l=()=>{let h=r.getBoundingClientRect();h.width&&h.height&&(a.height=Math.max(64,Math.round(384*h.height/h.width)),s.height=Math.max(8,Math.round(36*h.height/h.width))),n.fillStyle="#000",n.fillRect(0,0,a.width,a.height),n.globalCompositeOperation="lighter";try{o.tex=Vl(i,!0),o.maskTex=Vl(a,!1),o.ratio=i.naturalWidth/i.naturalHeight}catch{r.replaceWith(i),r.dataset.parallax&&(i.dataset.parallax=r.dataset.parallax);return}ds.push(o),id(o),Qi()};us&&(r.addEventListener("pointermove",h=>{let c=r.getBoundingClientRect();o.cx=(h.clientX-c.left)/c.width,o.cy=(h.clientY-c.top)/c.height,o.over=!0,o.state==="plaster"&&Wl(o,o.cx,o.cy),Qi()}),r.addEventListener("pointerleave",()=>{o.over=!1,o.px=null,o.dirty=!0,Qi()})),i.loading="eager",i.complete&&i.naturalWidth?l():(i.addEventListener("load",l,{once:!0}),i.addEventListener("error",()=>r.replaceWith(i),{once:!0}))})}var rd=matchMedia("(hover: hover) and (pointer: fine)").matches,ad=matchMedia("(prefers-reduced-motion: reduce)").matches,bi=null,Tr=null,Qa=0,en=0,Er=0,wr=0,Wt=0,tn=0,rn=0;function nd(){bi||(bi=document.createElement("div"),bi.className="lens-ring",bi.setAttribute("aria-hidden","true"),document.body.append(bi))}function jl(){rn=0,Er+=(Qa-Er)*.2,wr+=(en-wr)*.2,Wt+=(tn-Wt)*.16,bi.style.transform=`translate3d(${Er-Wt}px, ${wr-Wt}px, 0)`,bi.style.width=bi.style.height=`${(Wt*2).toFixed(1)}px`,bi.style.opacity=Math.min(1,Wt/30).toFixed(3),document.documentElement.classList.toggle("lens-on",Wt>4),document.querySelectorAll("[data-lens].is-lensing").forEach(e=>{let t=e.getBoundingClientRect();e.style.setProperty("--lx",`${(Er-t.left).toFixed(1)}px`),e.style.setProperty("--ly",`${(wr-t.top).toFixed(1)}px`),e.style.setProperty("--lr",`${Wt.toFixed(1)}px`),e!==Tr&&Wt<1&&e.classList.remove("is-lensing")}),(Math.abs(Qa-Er)>.3||Math.abs(en-wr)>.3||Math.abs(tn-Wt)>.3)&&(rn=requestAnimationFrame(jl))}var Ja=()=>{rn||(rn=requestAnimationFrame(jl))};function an(e=document){!rd||ad||(e.querySelectorAll("[data-lens]:not([data-lens-ready])").forEach(t=>{t.dataset.lensReady="1";let i=document.createElement("span");for(i.className="lens-src";t.firstChild;)i.append(t.firstChild);t.append(i),t.addEventListener("pointerenter",r=>{nd(),Tr=t,t.classList.add("is-lensing");let a=parseFloat(getComputedStyle(t).fontSize)||60;tn=Math.max(56,Math.min(130,a*.95)),Wt<1&&(Er=Qa=r.clientX,wr=en=r.clientY),Ja()}),t.addEventListener("pointerleave",()=>{Tr===t&&(Tr=null,tn=0,Ja())})}),an.bound||(an.bound=!0,addEventListener("pointermove",t=>{Qa=t.clientX,en=t.clientY,(Tr||Wt>.5)&&Ja()},{passive:!0}),addEventListener("scroll",()=>{(Tr||Wt>.5)&&Ja()},{passive:!0})))}var sd=matchMedia("(prefers-reduced-motion: reduce)").matches,od=matchMedia("(hover: hover) and (pointer: fine)").matches,ql=.2;function Yl(e){return Promise.all(e.map(t=>new Promise(i=>{let r=new Image;r.decoding="async",r.onload=()=>{try{let a=document.createElement("canvas");a.width=12,a.height=8;let n=a.getContext("2d");n.drawImage(r,0,0,12,8);let s=n.getImageData(0,0,12,8).data,o=[];for(let l=0;l<s.length;l+=4){let h=s[l],c=s[l+1],p=s[l+2],u=Math.max(h,c,p),f=Math.min(h,c,p);o.push({c:[h,c,p],s:(u-f)/(u+1)+u/900})}o.sort((l,h)=>h.s-l.s),i([o[0].c,o[Math.floor(o.length/6)].c])}catch{i([])}},r.onerror=()=>i([]),r.src=t}))).then(t=>t.flat().filter(Boolean))}function Zl(e,t,{strength:i=1,after:r=null,z:a=-1}={}){if(!e||sd)return;let n=document.createElement("canvas");n.className="ink",n.setAttribute("aria-hidden","true"),n.style.zIndex=a,r?r.after(n):e.prepend(n),e.classList.add("has-ink"),getComputedStyle(e).position==="static"&&(e.style.position="relative");let s=n.getContext("2d"),o=1,l=1,h=!1,c=0,p=[[34,51,255],[233,196,140]],u=[],f=[],_={x:-1e4,y:-1e4,px:0,py:0,in:!1};Promise.resolve(t).then(T=>{T&&T.length&&(p=T),u.length=0;for(let v=0;v<6;v++)u.push({c:p[v%p.length],ax:Math.random(),ay:Math.random(),r:.32+Math.random()*.25,ph:Math.random()*6.28,sp:.04+Math.random()*.06,ox:0,oy:0,vx:0,vy:0})});let y=()=>{let T=e.getBoundingClientRect();o=Math.max(2,Math.round(T.width*ql)),l=Math.max(2,Math.round(Math.min(T.height,innerHeight*1.4)*ql)),n.width=o,n.height=l};y(),addEventListener("resize",y),od&&(e.addEventListener("pointermove",T=>{let v=n.getBoundingClientRect(),E=(T.clientX-v.left)/v.width*o,w=(T.clientY-v.top)/v.height*l,A=E-_.x,g=w-_.y;_.in&&Math.hypot(A,g)>.6&&f.length<60&&f.push({x:E,y:w,vx:A*.6,vy:g*.6,r:10+Math.random()*18,life:1,c:p[Math.random()*p.length|0]}),_.x=E,_.y=w,_.in=!0,M()},{passive:!0}),e.addEventListener("pointerleave",()=>{_.in=!1,_.x=_.y=-1e4}));let m=performance.now(),d=T=>{if(c=0,!h)return;let v=Math.min(.05,(T-m)/1e3);m=T;let E=T/1e3;s.globalCompositeOperation="source-over",s.clearRect(0,0,o,l),s.globalCompositeOperation="lighter";let w=Math.max(o,l);u.forEach(A=>{let g=(A.ax+Math.sin(E*A.sp+A.ph)*.18)*o,b=(A.ay+Math.cos(E*A.sp*.8+A.ph)*.2)*l,L=g+A.ox-_.x,P=b+A.oy-_.y,D=Math.hypot(L,P)||1,j=w*.35;if(D<j){let $=(1-D/j)*260*i;A.vx+=L/D*$*v,A.vy+=P/D*$*v}A.vx+=-A.ox*6*v,A.vy+=-A.oy*6*v,A.vx*=.92,A.vy*=.92,A.ox+=A.vx*v*10,A.oy+=A.vy*v*10;let N=A.r*w,z=s.createRadialGradient(g+A.ox,b+A.oy,0,g+A.ox,b+A.oy,N);z.addColorStop(0,`rgba(${A.c[0]},${A.c[1]},${A.c[2]},${.55*i})`),z.addColorStop(1,`rgba(${A.c[0]},${A.c[1]},${A.c[2]},0)`),s.fillStyle=z,s.fillRect(0,0,o,l)});for(let A=f.length-1;A>=0;A--){let g=f[A];if(g.x+=g.vx*v*8,g.y+=g.vy*v*8,g.vx*=.94,g.vy*=.94,g.r+=14*v,g.life-=v*.7,g.life<=0){f.splice(A,1);continue}let b=s.createRadialGradient(g.x,g.y,0,g.x,g.y,g.r);b.addColorStop(0,`rgba(${g.c[0]},${g.c[1]},${g.c[2]},${.5*g.life*i})`),b.addColorStop(1,`rgba(${g.c[0]},${g.c[1]},${g.c[2]},0)`),s.fillStyle=b,s.fillRect(g.x-g.r,g.y-g.r,g.r*2,g.r*2)}c=requestAnimationFrame(d)},M=()=>{h&&!c&&(m=performance.now(),c=requestAnimationFrame(d))};new IntersectionObserver(([T])=>{h=T.isIntersecting,h&&(y(),M())},{rootMargin:"80px"}).observe(e)}var wt=window.gsap,Yt=window.ScrollTrigger;wt&&Yt&&wt.registerPlugin(Yt);var Gt=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Kl=window.matchMedia("(hover: hover) and (pointer: fine)").matches,ht=(e,t=document)=>t.querySelector(e),zt=(e,t=document)=>[...t.querySelectorAll(e)],ci=e=>{let t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstElementChild},ft=(e="")=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Ar=(e,t=2)=>String(e).padStart(t,"0"),fs=[{href:"index.html",en:"Home",zh:"\u9996\u9875",key:"home"},{href:"work.html",en:"Work",zh:"\u4F5C\u54C1",key:"work"},{href:"series.html",en:"Series",zh:"\u7CFB\u5217",key:"series"},{href:"travel.html",en:"Travel",zh:"\u6E38\u8BB0",key:"travel"},{href:"projects.html",en:"Projects",zh:"\u9879\u76EE \xB7 \u7B80\u5386",key:"projects"},{href:"about.html",en:"About",zh:"\u5173\u4E8E",key:"about"}],ms=[{href:"corridor.html",en:"Corridor",zh:"\u8D70\u5ECA",key:"corridor"},{href:"raw.html",en:"RAW Lab",zh:"\u540E\u671F",key:"raw"},{href:"projects.html#cv",en:"CV",zh:"\u7B80\u5386",key:"cv"},{href:"travel.html?drive",en:"Drive",zh:"\u5F00\u8F66\u901B\u6E38\u8BB0",key:"drive"}],bt=null,Rr=()=>bt;function Jl(e){if(!e||e.dataset.rolled)return e;let t=e.textContent;return e.dataset.rolled="1",e.setAttribute("aria-label",t.trim()),e.classList.add("roll"),e.innerHTML=[...t].map((i,r)=>`<span class="ch" aria-hidden="true" style="--i:${r}" data-ch="${ft(i)}">${ft(i)}</span>`).join(""),e}function ld(e){if(!e||e.dataset.split==="done")return[];e.dataset.split="done";let t=i=>{[...i.childNodes].forEach(r=>{if(r.nodeType===3){let a=document.createDocumentFragment();r.textContent.split(/(\s+)/).forEach(n=>{if(!n)return;if(/^\s+$/.test(n)){a.appendChild(document.createTextNode(n));return}let s=document.createElement("span");s.className="word-mask";let o=document.createElement("span");o.textContent=n,s.appendChild(o),a.appendChild(s)}),r.replaceWith(a)}else r.nodeType===1&&!r.classList.contains("word-mask")&&r.tagName!=="BR"&&t(r)})};return t(e),zt(".word-mask > span",e)}function hd(e,t){let i=ci(`
    <header class="site-header">
      <div class="header-actions">
        <a class="pill header-cta roll-host" href="about.html#contact"><span class="dot"></span><span data-roll>Let's shoot</span></a>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu-panel" aria-label="Open menu"><i></i><i></i></button>
      </div>
    </header>`),r=ci(`
    <div class="menu-panel" id="menu-panel" aria-hidden="true">
      <nav aria-label="Primary">
        ${fs.map((h,c)=>`<a class="roll-host" data-scramble-host href="${h.href}" ${h.key===e?'aria-current="page"':""}><span data-roll>${h.en}</span><small data-scramble>${Ar(c+1)} \xB7 ${h.zh}</small></a>`).join("")}
      </nav>
      <div class="menu-more mono">${ms.map(h=>`<a href="${h.href}" ${h.key===e?'aria-current="page"':""}>${h.en} \xB7 ${h.zh}</a>`).join("")}</div>
      <div class="menu-foot">
        <p class="mono muted">Say hello \xB7 \u8054\u7CFB</p>
        <a class="h3" href="mailto:${$i.email}" style="font-size:20px;letter-spacing:-.02em">${$i.email}</a>
        <div class="links mono" style="margin-top:14px">${$i.links.map(h=>`<a href="${h.href}" target="_blank" rel="noopener">${h.short}</a>`).join("")}</div>
      </div>
    </div>`),a=ci('<a class="brand" href="index.html" aria-label="X1NG \u2014 home">X1NG <small>Photographic field</small></a>'),n=ci('<div class="menu-scrim"></div>'),s=ci('<div class="cursor" aria-hidden="true"><div class="cursor__pill"><span class="cursor__text">View</span></div></div>');document.body.prepend(ci('<a class="skip-link" href="#main">Skip to content</a>')),document.body.append(i,a,n,r,s);let o=ht(".menu-btn",i),l=h=>{document.documentElement.classList.toggle("menu-open",h),o.setAttribute("aria-expanded",h),o.setAttribute("aria-label",h?"Close menu":"Open menu"),r.setAttribute("aria-hidden",!h),h?bt==null||bt.stop():bt==null||bt.start()};o.addEventListener("click",()=>l(!document.documentElement.classList.contains("menu-open"))),n.addEventListener("click",()=>l(!1)),document.addEventListener("keydown",h=>{h.key==="Escape"&&l(!1)}),t.footer!==!1&&document.querySelector("main").after(cd(t)),zt("[data-roll]").forEach(Jl)}function cd(e){let t=ci(`
    <footer class="site-footer wrap">
      <div class="footer__grid">
        <div class="footer__col">
          <p class="mono">Based in</p>
          <span>Nanjing, China</span><span class="zh muted">\u5E38\u9A7B\u5357\u4EAC \xB7 \u968F\u65F6\u51FA\u53D1</span>
        </div>
        <div class="footer__col">
          <p class="mono">Explore</p>
          ${[...fs.slice(1),...ms.slice(0,2)].map(r=>`<a class="roll-host" href="${r.href}"><span data-roll>${r.en}</span></a>`).join("")}
        </div>
        <div class="footer__col">
          <p class="mono">Follow</p>
          ${$i.links.map(r=>`<a class="roll-host" href="${r.href}" target="_blank" rel="noopener"><span data-roll>${r.short}</span></a>`).join("")}
        </div>
        <div class="footer__col">
          <p class="mono">Contact</p>
          <a href="mailto:${$i.email}">${$i.email}</a>
          <span class="muted">Commissions, prints, collaborations.</span>
        </div>
        <div class="footer__word" aria-hidden="true">X1NG</div>
      </div>
      <div class="footer__base mono">
        <span>\xA9 ${new Date().getFullYear()} Xing \xB7 \u661F\u5149</span>
        <span>All photographs \xA9 Xing. All rights reserved.</span>
        <a href="#main" data-top>Back to top \u2191</a>
      </div>
    </footer>`),i=document.createDocumentFragment();return i.append(t),e.next&&i.append(ci(`
      <section class="next" data-next="${e.next.href}" aria-label="Next page">
        ${e.next.image?`<div class="next__bg"><img src="${e.next.image}" alt="" loading="lazy"></div>`:""}
        <div class="next__inner">
          <p class="mono">Next \xB7 \u4E0B\u4E00\u9875</p>
          <a class="next__title roll-host" href="${e.next.href}"><span data-roll>${ft(e.next.label)}</span></a>
          <a class="next__go" href="${e.next.href}" aria-label="Open ${ft(e.next.label)}"><svg class="next__ring" viewBox="0 0 88 88" aria-hidden="true"><circle class="track" cx="44" cy="44" r="40"/><circle class="fill" cx="44" cy="44" r="40" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/></svg><span class="next__arrow" aria-hidden="true">\u2192</span></a>
          <p class="mono muted">${ft(e.next.sub||"Next page")}</p>
        </div>
      </section>`)),i}function ud(){Gt||!window.Lenis||(bt=new window.Lenis({duration:1.15,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),smoothWheel:!0}),bt.on("scroll",Yt.update),wt.ticker.add(e=>bt.raf(e*1e3)),wt.ticker.lagSmoothing(0))}function dd(){let e=ht(".footer__word");if(!e||Gt||!Kl)return;let t=1,i=1,r=1,a=1,n=!1;window.addEventListener("pointermove",o=>{let l=e.getBoundingClientRect();l.bottom<0||l.top>innerHeight||(r=Math.max(-1.5,Math.min(1.5,(o.clientX-(l.left+l.width/2))/(l.width/2)*-1.5)),a=Math.max(-1.5,Math.min(1.5,(o.clientY-(l.top+l.height/2))/(innerHeight/2)*-1.5)),n||(n=!0,wt.ticker.add(s)))},{passive:!0});let s=()=>{t+=(r-t)*.08,i+=(a-i)*.08,e.style.setProperty("--lx",t.toFixed(3)),e.style.setProperty("--ly",i.toFixed(3)),Math.abs(r-t)<.002&&Math.abs(a-i)<.002&&(n=!1,wt.ticker.remove(s))}}function pd(){let e=ht(".site-header"),t=0,i=()=>{let r=window.scrollY,a=r>200&&r>t&&!document.documentElement.classList.contains("menu-open");e.classList.toggle("is-hidden",a),document.documentElement.classList.toggle("header-hidden",a),t=r};window.addEventListener("scroll",i,{passive:!0})}function fd(e=document){wt&&(Xl(e),zt("[data-split]",e).forEach(t=>{let i=ld(t);Gt||(wt.set(i,{yPercent:110}),Yt.create({trigger:t,start:"top 88%",once:!0,onEnter:()=>wt.to(i,{yPercent:0,duration:1.1,ease:"expo.out",stagger:.028,delay:+t.dataset.delay||0})}))}),zt("[data-fade]",e).forEach(t=>{if(Gt){wt.set(t,{opacity:1,y:0});return}Yt.create({trigger:t,start:"top 92%",once:!0,onEnter:()=>wt.to(t,{opacity:1,y:0,duration:1.1,ease:"expo.out",delay:+t.dataset.delay||0})})}),Gt||zt("[data-parallax]",e).forEach(t=>{let i=+t.dataset.parallax||10;wt.fromTo(t,{yPercent:-i},{yPercent:i,ease:"none",scrollTrigger:{trigger:t.parentElement,start:"top bottom",end:"bottom top",scrub:!0}})}),zt("[data-roll]",e).forEach(Jl),Bl(e),kl(e),an(e))}function md(){if(!Kl)return;let e=ht(".cursor"),t=ht(".cursor__text",e),i=innerWidth/2,r=innerHeight/2,a=i,n=r;window.addEventListener("pointermove",s=>{i=s.clientX,r=s.clientY},{passive:!0}),wt.ticker.add(()=>{a+=(i-a)*.2,n+=(r-n)*.2,e.style.transform=`translate3d(${a}px, ${n}px, 0)`}),document.addEventListener("pointerover",s=>{let o=s.target.closest("[data-cursor]");o&&(t.textContent=o.dataset.cursor,e.classList.add("is-active"))}),document.addEventListener("pointerout",s=>{let o=s.target.closest("[data-cursor]");o&&!o.contains(s.relatedTarget)&&e.classList.remove("is-active")})}var ps="x1ng:transition",$l="x1ng:transition-label",fa=null,gd=e=>{let t=e.pathname.split("/").pop()||"index.html";if(/\/egypt\/?$/.test(e.pathname))return"Egypt \xB7 \u57C3\u53CA\u968F\u7B14";let i=[...fs,...ms].find(a=>a.href===t),r=e.searchParams.get("id");return r&&(t==="series.html"||t==="travel.html")?`${t==="travel.html"?"Travel":"Series"} \xB7 ${r.charAt(0).toUpperCase()}${r.slice(1)}`:i?`${i.en} \xB7 ${i.zh}`:""};function vd(){fa=Ol();let e=!1;sessionStorage.getItem(ps)==="1"&&!Gt?(sessionStorage.removeItem(ps),fa.shut(sessionStorage.getItem($l)||""),document.documentElement.classList.remove("is-arriving"),requestAnimationFrame(()=>fa.open({delay:.12}))):document.documentElement.classList.remove("is-arriving");let i=.5,r=.5;document.addEventListener("pointerdown",a=>{i=a.clientX/innerWidth,r=a.clientY/innerHeight},{passive:!0}),window.navigateTo=a=>{if(e)return;if(e=!0,Gt){location.href=a;return}let n=gd(new URL(a,location.href));sessionStorage.setItem(ps,"1"),sessionStorage.setItem($l,n),bt==null||bt.stop(),fa.close({x:i,y:r,label:n}).then(()=>{location.href=a}),setTimeout(()=>{location.href=a},1800)},document.addEventListener("click",a=>{let n=a.target.closest("a[href]");if(!n||a.defaultPrevented||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||n.target==="_blank"||n.hasAttribute("download"))return;let s=new URL(n.href,location.href);if(s.origin===location.origin){if(s.pathname===location.pathname&&s.search===location.search&&s.hash){a.preventDefault();let o=s.hash==="#main"?0:document.querySelector(s.hash);bt?bt.scrollTo(o!=null?o:0,{duration:1.4}):o?o.scrollIntoView({behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"});return}/\.html$|\/$/.test(s.pathname)&&(a.preventDefault(),document.documentElement.classList.remove("menu-open"),window.navigateTo(s.href))}}),window.addEventListener("pageshow",a=>{a.persisted&&(e=!1,bt==null||bt.start(),fa.open({duration:.6,delay:0}))})}function _d(){let e=ht(".next");if(!e||!Yt)return;let t=ht(".next__bg img",e);t&&Zl(e,Yl([t.getAttribute("src")]),{after:ht(".next__bg",e),z:0,strength:.8});let i=ht(".next__ring .fill",e),r=ht(".next__inner",e),a=!1;Yt.create({trigger:e,start:"top bottom",end:"bottom bottom",onUpdate:n=>{let s=n.progress;i.style.strokeDashoffset=String(1-Math.min(1,Math.max(0,(s-.35)/.63))),Gt||(r.style.transform=`translateY(${(1-s)*-30}vh)`),e.classList.toggle("is-ready",s>.97)}})}function Ql({page:e,dark:t=!1,footer:i=!0,next:r=null}={}){return document.documentElement.classList.toggle("no-motion",Gt),t&&document.body.classList.add("is-dark"),hd(e,{footer:i,next:r}),ud(),pd(),md(),vd(),zl(),Gl(),dd(),zt("[data-top]").forEach(a=>a.addEventListener("click",n=>{n.preventDefault(),bt?bt.scrollTo(0,{duration:1.6}):window.scrollTo({top:0,behavior:"smooth"})})),{ready(){fd(),_d(),Yt==null||Yt.refresh()}}}var St,er,tr=[],ir=0,Cr=null,rr=null,yd=e=>{var t;return((t=Al.find(i=>i.id===e))==null?void 0:t.en)||e};function xd(){St=ci(`
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
    </div>`),document.body.append(St),er=ht("img",St),ht(".lb__close",St).addEventListener("click",nn),ht(".lb__nav--prev",St).addEventListener("click",()=>ma(-1)),ht(".lb__nav--next",St).addEventListener("click",()=>ma(1)),St.addEventListener("click",r=>{(r.target===St||r.target.classList.contains("lb__stage"))&&nn()}),document.addEventListener("keydown",r=>{St.classList.contains("is-open")&&(r.key==="Escape"&&nn(),r.key==="ArrowRight"&&ma(1),r.key==="ArrowLeft"&&ma(-1))});let e=0,t=0,i=ht(".lb__stage",St);i.addEventListener("touchstart",r=>{e=r.touches[0].clientX,t=r.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",r=>{let a=r.changedTouches[0].clientX-e,n=r.changedTouches[0].clientY-t;Math.abs(a)>50&&Math.abs(a)>Math.abs(n)?ma(a<0?1:-1):n>90&&nn()})}function eh(){var n;let e=tr[ir];er.classList.add("is-swapping");let t=new Image;t.src=e.l;let i=()=>{er.src=e.l,er.alt=`${e.title}${e.place?` \u2014 ${e.place}`:""}`,requestAnimationFrame(()=>er.classList.remove("is-swapping"))};t.complete?setTimeout(i,120):(er.src=e.s,er.classList.remove("is-swapping"),t.onload=i),[tr[ir+1],tr[ir-1]].forEach(s=>{if(s){let o=new Image;o.src=s.l}});let r=Il(e.n),a=Dl(e.n);ht("[data-lb-count]",St).textContent=`${Ar(ir+1,3)} / ${Ar(tr.length,3)}`,ht("[data-lb-title]",St).innerHTML=`${ft(e.title)}<span class="zh">${ft(e.zh)}</span>`,ht("[data-lb-meta]",St).innerHTML=[e.place&&`<span>${ft(e.place)}</span>`,`<a href="work.html?style=${e.style}">${ft(((n=Sr(e.style))==null?void 0:n.en)||yd(e.cat))}</a>`,r&&`<a href="series.html?id=${r.id}">Series: ${ft(r.en)}</a>`,a&&`<a href="travel.html?id=${a.id}">Travel: ${ft(a.en)}</a>`,`<span>#${Ar(e.n,3)}</span>`].filter(Boolean).join(""),rr==null||rr(e)}function ma(e){ir=(ir+e+tr.length)%tr.length,eh()}function th(e,t=0,{onNavigate:i}={}){var r;St||xd(),tr=e,ir=t,rr=i||null,Cr=document.activeElement,eh(),St.classList.add("is-open"),St.setAttribute("aria-hidden","false"),(r=Rr())==null||r.stop(),document.documentElement.style.overflow="hidden",ht(".lb__close",St).focus({preventScroll:!0})}function nn(){var e,t;St&&(St.classList.remove("is-open"),St.setAttribute("aria-hidden","true"),(e=Rr())==null||e.start(),document.documentElement.style.overflow="",rr==null||rr(null),(t=Cr==null?void 0:Cr.focus)==null||t.call(Cr,{preventScroll:!0}))}Qn();var Tb=new C,Eb=new C,wb=new ai,Ab=new Ye,Rb=new C(0,1,0);function Cu(){try{let e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl2")||e.getContext("webgl")))}catch{return!1}}var wy=Ql({page:"work",next:{href:"series.html",label:"The Series",sub:"Five ongoing studies \xB7 \u4E94\u4E2A\u7CFB\u5217",image:os(102).m}}),es=new URLSearchParams(location.search),ni=Sr(es.get("style"))?es.get("style"):"all",Za=es.get("view")==="field"?"field":"grid",ts=()=>ni==="all"?Zi:Zi.filter(e=>e.style===ni),Nu=()=>[{id:"all",en:"All",count:Zi.length},...ns.map(e=>({...e,count:Zi.filter(t=>t.style===e.id).length}))].map(e=>`<button type="button" class="chip" data-filter="${e.id}" aria-pressed="${e.id===ni}" title="${e.zh||""}">${e.en}<sup>${e.count}</sup></button>`).join("");ht("[data-chips]").innerHTML=Nu();ht("[data-chips-field]").innerHTML=Nu();var xr=ht("[data-grid]");xr.innerHTML=Zi.map(e=>`
  <a class="tile" href="work.html?p=${e.n}" data-n="${e.n}" data-style="${e.style}" data-cursor="View" data-reveal aria-label="${ft(e.title)} ${ft(e.zh)}">
    <img src="${e.s}" srcset="${e.s} 640w, ${e.m} 1280w" sizes="(max-width: 700px) 50vw, 25vw" width="${e.w}" height="${e.h}" alt="${ft(e.title)}${e.place?` \u2014 ${ft(e.place)}`:""}" loading="lazy" decoding="async">
    <span class="tile__cap"><b>${ft(e.title)}</b><span class="mono">${ft(e.place||Sr(e.style).en)}</span></span>
  </a>`).join("");window.matchMedia("(min-width: 761px) and (hover: hover)").matches&&Promise.resolve().then(()=>(Lu(),Pu)).then(({mountBend:e})=>e(xr));zt(".tile img",xr).forEach(e=>{e.complete?e.classList.add("is-loaded"):e.addEventListener("load",()=>e.classList.add("is-loaded"),{once:!0})});xr.addEventListener("click",e=>{let t=e.target.closest(".tile");t&&(e.preventDefault(),fl(+t.dataset.n))});function fl(e){let t=ts().some(i=>i.n===e)?ts():Zi;th(t,t.findIndex(i=>i.n===e),{onNavigate(i){let r=new URL(location.href);i?r.searchParams.set("p",i.n):r.searchParams.delete("p"),history.replaceState(null,"",r)}})}function Uu(e,t=!0){ni=e,zt("[data-filter]").forEach(n=>n.setAttribute("aria-pressed",n.dataset.filter===ni));let i=new URL(location.href);i.searchParams.delete("cat"),ni==="all"?i.searchParams.delete("style"):i.searchParams.set("style",ni),history.replaceState(null,"",i);let r=zt(".tile",xr),a=()=>{r.forEach(o=>o.classList.toggle("is-hidden",ni!=="all"&&o.dataset.style!==ni)),ht("[data-total]").textContent=ts().length;let n=Sr(ni),s=ht("[data-style-note]");s.innerHTML=n?`${ft(n.note)} <span class="zh muted">${ft(n.zh)} \xB7 ${ft(n.noteZh)}</span>`:'Every frame in the archive, curated into seven visual styles. Open any photograph, or step into the field. <span class="zh muted">\u5168\u90E8\u4F5C\u54C1 \xB7 \u6309\u98CE\u683C\u6D4F\u89C8 \xB7 3D \u6F2B\u6E38</span>',Yt.refresh(),t&&!Gt&&wt.fromTo(r.filter(o=>!o.classList.contains("is-hidden")).slice(0,16),{opacity:0,y:30},{opacity:1,y:0,duration:.8,ease:"expo.out",stagger:.03})};t&&!Gt?wt.to(xr,{opacity:0,duration:.2,onComplete:()=>{a(),wt.to(xr,{opacity:1,duration:.3})}}):a(),ji&&ji.setItems(Fu())}document.addEventListener("click",e=>{let t=e.target.closest("[data-filter]");t&&Uu(t.dataset.filter)});var ua=ht("[data-field]"),Ay=ht("[data-field-title]"),ji=null,Ou=Cu(),Fu=()=>ts().map(e=>({n:e.n,src:Cl(e),ratio:e.ratio,title:e.title,zh:e.zh,place:e.place}));async function Bu(e){var i;e==="field"&&!Ou&&(e="grid"),Za=e,zt("[data-view]").forEach(r=>r.setAttribute("aria-pressed",r.dataset.view===Za));let t=new URL(location.href);if(Za==="field"?t.searchParams.set("view","field"):t.searchParams.delete("view"),history.replaceState(null,"",t),Za==="field"){if(!ji){let{createField:r}=await Promise.resolve().then(()=>(Du(),Iu));ji=r(ua,{onHover(a){Ay.innerHTML=a?`${ft(a.title)}<span class="zh">${ft(a.zh)}</span>`:""},onSelect(a){fl(a.n)}}),ji.setItems(Fu())}ua.classList.add("is-on"),document.body.classList.add("field-mode"),(i=Rr())==null||i.stop(),ji.start(),Gt||wt.fromTo(ua,{clipPath:"inset(50% 0% 50% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1,ease:"expo.inOut"})}else if(ji&&ua.classList.contains("is-on")){let r=()=>{var a;ua.classList.remove("is-on"),document.body.classList.remove("field-mode"),ji.stop(),(a=Rr())==null||a.start()};Gt?r():wt.to(ua,{clipPath:"inset(50% 0% 50% 0%)",duration:.8,ease:"expo.inOut",onComplete:r})}}zt("[data-view]").forEach(e=>e.addEventListener("click",()=>Bu(e.dataset.view)));Ou||zt('[data-view="field"]').forEach(e=>{e.disabled=!0,e.title="3D view needs WebGL"});Uu(ni,!1);wy.ready();Za==="field"&&Bu("field");var pl=+es.get("p");pl&&os(pl)&&setTimeout(()=>fl(pl),400);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
