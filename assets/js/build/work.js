(()=>{var Du=Object.defineProperty;var pl=(e,t)=>()=>(e&&(t=e(e=0)),t);var Nu=(e,t)=>{for(var i in t)Du(e,i,{get:t[i],enumerable:!0})};function Bd(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function zd(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ca(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Gd(){let e=Ca("canvas");return e.style.display="block",e}function eh(...e){let t="THREE."+e.shift();Qr?Qr("log",t,...e):console.log(t,...e)}function vc(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function ze(...e){e=vc(e);let t="THREE."+e.shift();if(Qr)Qr("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Ve(...e){e=vc(e);let t="THREE."+e.shift();if(Qr)Qr("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Wr(...e){let t=e.join(" ");t in Ql||(Ql[t]=!0,ze(...e))}function Vd(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}function gr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pt[e&255]+Pt[e>>8&255]+Pt[e>>16&255]+Pt[e>>24&255]+"-"+Pt[t&255]+Pt[t>>8&255]+"-"+Pt[t>>16&15|64]+Pt[t>>24&255]+"-"+Pt[i&63|128]+Pt[i>>8&255]+"-"+Pt[i>>16&255]+Pt[i>>24&255]+Pt[r&255]+Pt[r>>8&255]+Pt[r>>16&255]+Pt[r>>24&255]).toLowerCase()}function $e(e,t,i){return Math.max(t,Math.min(i,e))}function zo(e,t){return(e%t+t)%t}function Hd(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function Wd(e,t,i){return e!==t?(i-e)/(t-e):0}function Sa(e,t,i){return(1-i)*e+i*t}function Xd(e,t,i,r){return Sa(e,t,1-Math.exp(-i*r))}function jd(e,t=1){return t-Math.abs(zo(e,t*2)-t)}function qd(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function Yd(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function Zd(e,t){return e+Math.floor(Math.random()*(t-e+1))}function $d(e,t){return e+Math.random()*(t-e)}function Kd(e){return e*(.5-Math.random())}function Jd(e){e!==void 0&&(th=e);let t=th+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Qd(e){return e*Xr}function ep(e){return e*Pa}function tp(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function ip(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function rp(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function ap(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),h=n((t+r)/2),u=s((t+r)/2),d=n((t-r)/2),c=s((t-r)/2),p=n((r-t)/2),_=s((r-t)/2);switch(a){case"XYX":e.set(o*u,l*d,l*c,o*h);break;case"YZY":e.set(l*c,o*u,l*d,o*h);break;case"ZXZ":e.set(l*d,l*c,o*u,o*h);break;case"XZX":e.set(o*u,l*_,l*p,o*h);break;case"YXY":e.set(l*p,o*u,l*_,o*h);break;case"ZYZ":e.set(l*_,l*p,o*u,o*h);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function zr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ut(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function np(){let e={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===nt&&(a.r=Ri(a.r),a.g=Ri(a.g),a.b=Ri(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===nt&&(a.r=jr(a.r),a.g=jr(a.g),a.b=jr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Vi?Dn:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return Wr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return Wr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ln]:{primaries:t,whitePoint:r,transfer:Dn,toXYZ:rh,fromXYZ:ah,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:t,whitePoint:r,transfer:nt,toXYZ:rh,fromXYZ:ah,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),e}function Ri(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function jr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function os(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?sp.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}function us(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}function ys(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){rr.fromArray(e,n);let o=a.x*Math.abs(rr.x)+a.y*Math.abs(rr.y)+a.z*Math.abs(rr.z),l=t.dot(rr),h=i.dot(rr),u=r.dot(rr);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}function _p(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),r=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(r[l]=0,r[l|256]=32768,a[l]=24,a[l|256]=24):h<-14?(r[l]=1024>>-h-14,r[l|256]=1024>>-h-14|32768,a[l]=-h-1,a[l|256]=-h-1):h<=15?(r[l]=h+15<<10,r[l|256]=h+15<<10|32768,a[l]=13,a[l|256]=13):h<128?(r[l]=31744,r[l|256]=64512,a[l]=24,a[l|256]=24):(r[l]=31744,r[l|256]=64512,a[l]=13,a[l|256]=13)}let n=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,u=0;for(;(h&8388608)===0;)h<<=1,u-=8388608;h&=-8388609,u+=947912704,n[l]=h|u}for(let l=1024;l<2048;++l)n[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:r,shiftTable:a,mantissaTable:n,exponentTable:s,offsetTable:o}}function Ep(e,t,i,r,a,n,s,o){let l;if(t.side===Vt?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===Ci,o),l===null)return null;hn.copy(o),hn.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(hn);return h<i.near||h>i.far?null:{distance:h,point:hn.clone(),object:e}}function cn(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,nn),e.getVertexPosition(l,sn),e.getVertexPosition(h,on);let u=Ep(e,t,i,r,nn,sn,on,mh);if(u){let d=new C;Gr.getBarycoord(mh,nn,sn,on,d),a&&(u.uv=Gr.getInterpolatedAttribute(a,o,l,h,d,new oe)),n&&(u.uv1=Gr.getInterpolatedAttribute(n,o,l,h,d,new oe)),s&&(u.normal=Gr.getInterpolatedAttribute(s,o,l,h,d,new C),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let c={a:o,b:l,c:h,normal:new C,materialIndex:0};Gr.getNormal(nn,sn,on,c.normal),u.face=c,u.barycoord=d}return u}function Xo(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,u,d){let c=(s-n)/h-(o-n)/(h+u)+(o-s)/u,p=(o-s)/u-(l-s)/(u+d)+(l-o)/d;c*=u,p*=u,a(s,o,c,p)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}function yh(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function Bp(e,t){let i=1-e;return i*i*t}function zp(e,t){return 2*(1-e)*e*t}function Gp(e,t){return e*e*t}function Ta(e,t,i,r){return Bp(e,t)+zp(e,i)+Gp(e,r)}function Vp(e,t){let i=1-e;return i*i*i*t}function kp(e,t){let i=1-e;return 3*i*i*e*t}function Hp(e,t){return 3*(1-e)*e*e*t}function Wp(e,t){return e*e*e*t}function Ea(e,t,i,r,a){return Vp(e,t)+kp(e,i)+Hp(e,r)+Wp(e,a)}function Yp(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=Hc(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h;if(r&&(n=Qp(e,t,n,i)),e.length>80*i){o=e[0],l=e[1];let u=o,d=l;for(let c=i;c<a;c+=i){let p=e[c],_=e[c+1];p<o&&(o=p),_<l&&(l=_),p>u&&(u=p),_>d&&(d=_)}h=Math.max(u-o,d-l),h=h!==0?32767/h:0}return Da(n,s,i,o,l,h,0),s}function Hc(e,t,i,r,a){let n;if(a===uf(e,t,i,r)>0)for(let s=t;s<i;s+=r)n=Mh(s/r|0,e[s],e[s+1],n);else for(let s=i-r;s>=t;s-=r)n=Mh(s/r|0,e[s],e[s+1],n);return n&&ta(n,n.next)&&(Ua(n),n=n.next),n}function fr(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(ta(i,i.next)||mt(i.prev,i,i.next)===0)){if(Ua(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Da(e,t,i,r,a,n,s){if(!e)return;!s&&n&&nf(e,r,a,n);let o=e;for(;e.prev!==e.next;){let l=e.prev,h=e.next;if(n?$p(e,r,a,n):Zp(e)){t.push(l.i,e.i,h.i),Ua(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=Kp(fr(e),t),Da(e,t,i,r,a,n,2)):s===2&&Jp(e,t,i,r,a,n):Da(fr(e),t,i,r,a,n,1);break}}}function Zp(e){let t=e.prev,i=e,r=e.next;if(mt(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,h=r.y,u=Math.min(a,n,s),d=Math.min(o,l,h),c=Math.max(a,n,s),p=Math.max(o,l,h),_=r.next;for(;_!==t;){if(_.x>=u&&_.x<=c&&_.y>=d&&_.y<=p&&xa(a,o,n,l,s,h,_.x,_.y)&&mt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function $p(e,t,i,r){let a=e.prev,n=e,s=e.next;if(mt(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,u=a.y,d=n.y,c=s.y,p=Math.min(o,l,h),_=Math.min(u,d,c),y=Math.max(o,l,h),m=Math.max(u,d,c),f=To(p,_,t,i,r),S=To(y,m,t,i,r),E=e.prevZ,v=e.nextZ;for(;E&&E.z>=f&&v&&v.z<=S;){if(E.x>=p&&E.x<=y&&E.y>=_&&E.y<=m&&E!==a&&E!==s&&xa(o,u,l,d,h,c,E.x,E.y)&&mt(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=p&&v.x<=y&&v.y>=_&&v.y<=m&&v!==a&&v!==s&&xa(o,u,l,d,h,c,v.x,v.y)&&mt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=f;){if(E.x>=p&&E.x<=y&&E.y>=_&&E.y<=m&&E!==a&&E!==s&&xa(o,u,l,d,h,c,E.x,E.y)&&mt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=S;){if(v.x>=p&&v.x<=y&&v.y>=_&&v.y<=m&&v!==a&&v!==s&&xa(o,u,l,d,h,c,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Kp(e,t){let i=e;do{let r=i.prev,a=i.next.next;!ta(r,a)&&Xc(r,i,i.next,a)&&Na(r,a)&&Na(a,r)&&(t.push(r.i,i.i,a.i),Ua(i),Ua(i.next),i=e=a),i=i.next}while(i!==e);return fr(i)}function Jp(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&lf(s,o)){let l=jc(s,o);s=fr(s,s.next),l=fr(l,l.next),Da(s,t,i,r,a,n,0),Da(l,t,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function Qp(e,t,i,r){let a=[];for(let n=0,s=t.length;n<s;n++){let o=t[n]*r,l=n<s-1?t[n+1]*r:e.length,h=Hc(e,o,l,r,!1);h===h.next&&(h.steiner=!0),a.push(of(h))}a.sort(ef);for(let n=0;n<a.length;n++)i=tf(a[n],i);return i}function ef(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let r=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);i=r-a}return i}function tf(e,t){let i=rf(e,t);if(!i)return t;let r=jc(i,e);return fr(r,r.next),fr(i,i.next)}function rf(e,t){let i=t,r=e.x,a=e.y,n=-1/0,s;if(ta(e,i))return i;do{if(ta(e,i.next))return i.next;if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){let d=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=r&&d>n&&(n=d,s=i.x<i.next.x?i:i.next,d===r))return s}i=i.next}while(i!==t);if(!s)return null;let o=s,l=s.x,h=s.y,u=1/0;i=s;do{if(r>=i.x&&i.x>=l&&r!==i.x&&Wc(a<h?r:n,a,l,h,a<h?n:r,a,i.x,i.y)){let d=Math.abs(a-i.y)/(r-i.x);Na(i,e)&&(d<u||d===u&&(i.x>s.x||i.x===s.x&&af(s,i)))&&(s=i,u=d)}i=i.next}while(i!==o);return s}function af(e,t){return mt(e.prev,e,t.prev)<0&&mt(t.next,e,e.next)<0}function nf(e,t,i,r){let a=e;do a.z===0&&(a.z=To(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,sf(a)}function sf(e){let t,i=1;do{let r=e,a;e=null;let n=null;for(t=0;r;){t++;let s=r,o=0;for(let h=0;h<i&&(o++,s=s.nextZ,!!s);h++);let l=i;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(a=r,r=r.nextZ,o--):(a=s,s=s.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=s}n.nextZ=null,i*=2}while(t>1);return e}function To(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function of(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function Wc(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function xa(e,t,i,r,a,n,s,o){return!(e===s&&t===o)&&Wc(e,t,i,r,a,n,s,o)}function lf(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!hf(e,t)&&(Na(e,t)&&Na(t,e)&&cf(e,t)&&(mt(e.prev,e,t.prev)||mt(e,t.prev,t))||ta(e,t)&&mt(e.prev,e,e.next)>0&&mt(t.prev,t,t.next)>0)}function mt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function ta(e,t){return e.x===t.x&&e.y===t.y}function Xc(e,t,i,r){let a=gn(mt(e,t,i)),n=gn(mt(e,t,r)),s=gn(mt(i,r,e)),o=gn(mt(i,r,t));return!!(a!==n&&s!==o||a===0&&mn(e,i,t)||n===0&&mn(e,r,t)||s===0&&mn(i,e,r)||o===0&&mn(i,t,r))}function mn(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function gn(e){return e>0?1:e<0?-1:0}function hf(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Xc(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Na(e,t){return mt(e.prev,e,e.next)<0?mt(e,t,e.next)>=0&&mt(e,e.prev,t)>=0:mt(e,t,e.prev)<0||mt(e,e.next,t)<0}function cf(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function jc(e,t){let i=Eo(e.i,e.x,e.y),r=Eo(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function Mh(e,t,i,r){let a=Eo(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function Ua(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Eo(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function uf(e,t,i,r){let a=0;for(let n=t,s=i-r;n<i;n+=r)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}function bh(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Sh(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}function mf(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}function Mf(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}function Th(e,t,i){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(r)===!0||i.has(a)===!0?!1:(i.add(r),i.add(a),!0)}function ia(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(Eh(a))a.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(Eh(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Ot(e){let t={};for(let i=0;i<e.length;i++){let r=ia(e[i]);for(let a in r)t[a]=r[a]}return t}function Eh(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Rf(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function su(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:et.workingColorSpace}function Dr(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Cs(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function ou(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function zf(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function Gf(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=ou(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=zf(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}function wh(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}function Ah(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}function $f(){this._document.hidden===!1&&this.reset()}function Ih(e,t){return e.distance-t.distance}function wo(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)wo(n[s],t,i,!0)}}function Lh(e,t,i,r){let a=sm(r);switch(i){case fc:return e*t;case gc:return e*t/a.components*a.byteLength;case No:return e*t/a.components*a.byteLength;case pr:return e*t*2/a.components*a.byteLength;case Uo:return e*t*2/a.components*a.byteLength;case mc:return e*t*3/a.components*a.byteLength;case ei:return e*t*4/a.components*a.byteLength;case Oo:return e*t*4/a.components*a.byteLength;case bn:case Sn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Tn:case En:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case qs:case Zs:return Math.max(e,16)*Math.max(t,8)/4;case js:case Ys:return Math.max(e,8)*Math.max(t,8)/2;case $s:case Ks:case Qs:case eo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Js:case Cn:case to:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case io:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ao:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case no:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case so:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case oo:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case lo:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ho:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case co:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case uo:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case po:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case fo:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case mo:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case go:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case vo:case _o:case yo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case xo:case Mo:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Pn:case bo:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sm(e){switch(e){case Yt:case cc:return{byteLength:1,components:1};case Aa:case uc:case gi:return{byteLength:2,components:1};case Lo:case Do:return{byteLength:2,components:4};case mi:case Io:case di:return{byteLength:4,components:1};case dc:case pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}function cu(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function om(e){let t=new WeakMap;function i(o,l){let h=o.array,u=o.usage,d=h.byteLength,c=e.createBuffer();e.bindBuffer(l,c),e.bufferData(l,h,u),o.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=e.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,h){let u=l.array,d=l.updateRanges;if(e.bindBuffer(h,o),d.length===0)e.bufferSubData(h,0,u);else{d.sort((p,_)=>p.start-_.start);let c=0;for(let p=1;p<d.length;p++){let _=d[c],y=d[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++c,d[c]=y)}d.length=c+1;for(let p=0,_=d.length;p<_;p++){let y=d[p];e.bufferSubData(h,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}function H0(e,t,i,r,a,n){let s=new it(0),o=a===!0?0:1,l,h,u=null,d=0,c=null;function p(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){let v=S.backgroundBlurriness>0;E=t.get(E,v)}return E}function _(S){let E=!1,v=p(S);v===null?m(s,o):v&&v.isColor&&(m(v,1),E=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,n):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function y(S,E){let v=p(E);v&&(v.isCubeTexture||v.mapping===On)?(h===void 0&&(h=new kt(new Fa(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:ia(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(k0.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(uu),h.material.toneMapped=et.getTransfer(v.colorSpace)!==nt,(u!==v||d!==v.version||c!==e.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,c=e.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new kt(new za(2,2),new Zt({name:"BackgroundMaterial",uniforms:ia(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=et.getTransfer(v.colorSpace)!==nt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||c!==e.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,c=e.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,E){S.getRGB(yn,su(e)),i.buffers.color.setClear(yn.r,yn.g,yn.b,E,n)}function f(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(S,E=1){s.set(S),o=E,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(s,o)},render:_,addToRenderList:y,dispose:f}}function W0(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=c(null),n=a,s=!1;function o(P,I,H,N,z){let Z=!1,k=d(P,N,H,I);n!==k&&(n=k,h(n.object)),Z=p(P,N,H,z),Z&&_(P,N,H,z),z!==null&&t.update(z,e.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,v(P,I,H,N),z!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return e.createVertexArray()}function h(P){return e.bindVertexArray(P)}function u(P){return e.deleteVertexArray(P)}function d(P,I,H,N){let z=N.wireframe===!0,Z=r[I.id];Z===void 0&&(Z={},r[I.id]=Z);let k=P.isInstancedMesh===!0?P.id:0,le=Z[k];le===void 0&&(le={},Z[k]=le);let q=le[H.id];q===void 0&&(q={},le[H.id]=q);let Y=q[z];return Y===void 0&&(Y=c(l()),q[z]=Y),Y}function c(P){let I=[],H=[],N=[];for(let z=0;z<i;z++)I[z]=0,H[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:N,object:P,attributes:{},index:null}}function p(P,I,H,N){let z=n.attributes,Z=I.attributes,k=0,le=H.getAttributes();for(let q in le)if(le[q].location>=0){let Y=z[q],ee=Z[q];if(ee===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor)),Y===void 0||Y.attribute!==ee||ee&&Y.data!==ee.data)return!0;k++}return n.attributesNum!==k||n.index!==N}function _(P,I,H,N){let z={},Z=I.attributes,k=0,le=H.getAttributes();for(let q in le)if(le[q].location>=0){let Y=Z[q];Y===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor));let ee={};ee.attribute=Y,Y&&Y.data&&(ee.data=Y.data),z[q]=ee,k++}n.attributes=z,n.attributesNum=k,n.index=N}function y(){let P=n.newAttributes;for(let I=0,H=P.length;I<H;I++)P[I]=0}function m(P){f(P,0)}function f(P,I){let H=n.newAttributes,N=n.enabledAttributes,z=n.attributeDivisors;H[P]=1,N[P]===0&&(e.enableVertexAttribArray(P),N[P]=1),z[P]!==I&&(e.vertexAttribDivisor(P,I),z[P]=I)}function S(){let P=n.newAttributes,I=n.enabledAttributes;for(let H=0,N=I.length;H<N;H++)I[H]!==P[H]&&(e.disableVertexAttribArray(H),I[H]=0)}function E(P,I,H,N,z,Z,k){k===!0?e.vertexAttribIPointer(P,I,H,z,Z):e.vertexAttribPointer(P,I,H,N,z,Z)}function v(P,I,H,N){y();let z=N.attributes,Z=H.getAttributes(),k=I.defaultAttributeValues;for(let le in Z){let q=Z[le];if(q.location>=0){let Y=z[le];if(Y===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){let ee=Y.normalized,he=Y.itemSize,fe=t.get(Y);if(fe===void 0)continue;let je=fe.buffer,Ce=fe.type,j=fe.bytesPerElement,te=Ce===e.INT||Ce===e.UNSIGNED_INT||Y.gpuType===Io;if(Y.isInterleavedBufferAttribute){let re=Y.data,be=re.stride,we=Y.offset;if(re.isInstancedInterleavedBuffer){for(let ce=0;ce<q.locationSize;ce++)f(q.location+ce,re.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ce=0;ce<q.locationSize;ce++)m(q.location+ce);e.bindBuffer(e.ARRAY_BUFFER,je);for(let ce=0;ce<q.locationSize;ce++)E(q.location+ce,he/q.locationSize,Ce,ee,be*j,(we+he/q.locationSize*ce)*j,te)}else{if(Y.isInstancedBufferAttribute){for(let re=0;re<q.locationSize;re++)f(q.location+re,Y.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let re=0;re<q.locationSize;re++)m(q.location+re);e.bindBuffer(e.ARRAY_BUFFER,je);for(let re=0;re<q.locationSize;re++)E(q.location+re,he/q.locationSize,Ce,ee,he*j,he/q.locationSize*re*j,te)}}else if(k!==void 0){let ee=k[le];if(ee!==void 0)switch(ee.length){case 2:e.vertexAttrib2fv(q.location,ee);break;case 3:e.vertexAttrib3fv(q.location,ee);break;case 4:e.vertexAttrib4fv(q.location,ee);break;default:e.vertexAttrib1fv(q.location,ee)}}}}S()}function T(){M();for(let P in r){let I=r[P];for(let H in I){let N=I[H];for(let z in N){let Z=N[z];for(let k in Z)u(Z[k].object),delete Z[k];delete N[z]}}delete r[P]}}function A(P){if(r[P.id]===void 0)return;let I=r[P.id];for(let H in I){let N=I[H];for(let z in N){let Z=N[z];for(let k in Z)u(Z[k].object),delete Z[k];delete N[z]}}delete r[P.id]}function w(P){for(let I in r){let H=r[I];for(let N in H){let z=H[N];if(z[P.id]===void 0)continue;let Z=z[P.id];for(let k in Z)u(Z[k].object),delete Z[k];delete z[P.id]}}}function g(P){for(let I in r){let H=r[I],N=P.isInstancedMesh===!0?P.id:0,z=H[N];if(z!==void 0){for(let Z in z){let k=z[Z];for(let le in k)u(k[le].object),delete k[le];delete z[Z]}delete H[N],Object.keys(H).length===0&&delete r[I]}}}function M(){D(),s=!0,n!==a&&(n=a,h(n.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:M,resetDefaultState:D,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function X0(e,t,i){let r;function a(l){r=l}function n(l,h){e.drawArrays(r,l,h),i.update(h,r,1)}function s(l,h,u){u!==0&&(e.drawArraysInstanced(r,l,h,u),i.update(h,r,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,u);let d=0;for(let c=0;c<u;c++)d+=h[c];i.update(d,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function j0(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(w){return!(w!==ei&&r.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let g=w===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Yt&&w!==di&&!g&&r.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",u=l(h);u!==h&&(ze("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let d=i.logarithmicDepthBuffer===!0,c=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&c===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),S=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),E=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:c,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:v,maxSamples:T,samples:A}}function q0(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Gi,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){let p=d.length!==0||c||r!==0||a;return a=c,r=d.length,p},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,c){i=u(d,c,0)},this.setState=function(d,c,p){let _=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=e.get(d);if(!a||_===null||_.length===0||n&&!m)n?u(null):h();else{let S=n?0:r,E=S*4,v=f.clippingState||null;l.value=v,v=u(_,c,E,p);for(let T=0;T!==E;++T)v[T]=i[T];f.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(d,c,p,_){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,_!==!0||m===null){let f=p+y*4,S=c.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,v=p;E!==y;++E,v+=4)s.copy(d[E]).applyMatrix4(S,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function J0(e){let t=[],i=[],r=e,a=e-Hr+1+Y0;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let o=1/(s-2),l=-o,h=1+o,u=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,c=6,p=3,_=new Float32Array(p*c*d),y=new Float32Array(p*c*d);for(let f=0;f<d;f++){let S=f%3*2/3-1,E=f>2?0:-1,v=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];_.set(v,p*c*f);for(let T=0;T<c;T++){let A=u[T*2]*2-1,w=u[T*2+1]*2-1;f===0?sr.set(1,w,A):f===1?sr.set(-A,1,-w):f===2?sr.set(-A,w,1):f===3?sr.set(-1,w,-A):f===4?sr.set(-A,-1,w):sr.set(A,w,-1),sr.toArray(y,(f*c+T)*p)}}let m=new _t;m.setAttribute("position",new fi(_,p)),m.setAttribute("outputDirection",new fi(y,p)),i.push(new kt(m,null)),r>Hr&&r--}return{lodMeshes:i,sizeLods:t}}function Nh(e,t,i){let r=new ii(e,t,i);return r.texture.mapping=On,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Fr(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Q0(e,t,i){return new Zt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bn(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function ev(e,t,i){return new Zt({name:"SphericalGaussianBlur",defines:{SAMPLES:Z0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bn(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Uh(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bn(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Oh(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Bn(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function tv(e){let t=new WeakMap,i=new WeakMap,r=null;function a(c,p=!1){return c==null?null:p?s(c):n(c)}function n(c){if(c&&c.isTexture){let p=c.mapping;if(p===es||p===ts)if(t.has(c)){let _=t.get(c).texture;return o(_,c.mapping)}else{let _=c.image;if(_&&_.height>0){let y=new du(_.height);return y.fromEquirectangularTexture(e,c),t.set(c,y),c.addEventListener("dispose",h),o(y.texture,c.mapping)}else return null}}return c}function s(c){if(c&&c.isTexture){let p=c.mapping,_=p===es||p===ts,y=p===dr||p===Jr;if(_||y){let m=i.get(c),f=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return r===null&&(r=new Ao(e)),m=_?r.fromEquirectangular(c,m):r.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,i.set(c,m),m.texture;if(m!==void 0)return m.texture;{let S=c.image;return _&&S&&S.height>0||y&&S&&l(S)?(r===null&&(r=new Ao(e)),m=_?r.fromEquirectangular(c):r.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,i.set(c,m),c.addEventListener("dispose",u),m.texture):null}}}return c}function o(c,p){return p===es?c.mapping=dr:p===ts&&(c.mapping=Jr),c}function l(c){let p=0,_=6;for(let y=0;y<_;y++)c[y]!==void 0&&p++;return p===_}function h(c){let p=c.target;p.removeEventListener("dispose",h);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function u(c){let p=c.target;p.removeEventListener("dispose",u);let _=i.get(p);_!==void 0&&(i.delete(p),_.dispose())}function d(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:d}}function iv(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Wr("WebGLRenderer: "+r+" extension not supported."),a}}}function rv(e,t,i,r){let a={},n=new WeakMap;function s(d){let c=d.target;c.index!==null&&t.remove(c.index);for(let _ in c.attributes)t.remove(c.attributes[_]);c.removeEventListener("dispose",s),delete a[c.id];let p=n.get(c);p&&(t.remove(p),n.delete(c)),r.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,i.memory.geometries--}function o(d,c){return a[c.id]===!0||(c.addEventListener("dispose",s),a[c.id]=!0,i.memory.geometries++),c}function l(d){let c=d.attributes;for(let p in c)t.update(c[p],e.ARRAY_BUFFER)}function h(d){let c=[],p=d.index,_=d.attributes.position,y=0;if(_===void 0)return;if(p!==null){let S=p.array;y=p.version;for(let E=0,v=S.length;E<v;E+=3){let T=S[E+0],A=S[E+1],w=S[E+2];c.push(T,A,A,w,w,T)}}else{let S=_.array;y=_.version;for(let E=0,v=S.length/3-1;E<v;E+=3){let T=E+0,A=E+1,w=E+2;c.push(T,A,A,w,w,T)}}let m=new(_.count>=65535?Sc:bc)(c,1);m.version=y;let f=n.get(d);f&&t.remove(f),n.set(d,m)}function u(d){let c=n.get(d);if(c){let p=d.index;p!==null&&c.version<p.version&&h(d)}else h(d);return n.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function av(e,t,i){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,c){e.drawElements(r,c,n,d*s),i.update(c,r,1)}function h(d,c,p){p!==0&&(e.drawElementsInstanced(r,c,n,d*s,p),i.update(c,r,p))}function u(d,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,c,0,n,d,0,p);let _=0;for(let y=0;y<p;y++)_+=c[y];i.update(_,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u}function nv(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:Ve("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function sv(e,t,i){let r=new WeakMap,a=new ft;function n(s,o,l){let h=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,c=r.get(o);if(c===void 0||c.count!==d){let p=function(){g.dispose(),r.delete(o),o.removeEventListener("dispose",p)};c!==void 0&&c.texture.dispose();let _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],v=0;_===!0&&(v=1),y===!0&&(v=2),m===!0&&(v=3);let T=o.attributes.position.count*v,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let w=new Float32Array(T*A*4*d),g=new _c(w,T,A,d);g.type=di,g.needsUpdate=!0;let M=v*4;for(let D=0;D<d;D++){let P=f[D],I=S[D],H=E[D],N=T*A*4*D;for(let z=0;z<P.count;z++){let Z=z*M;_===!0&&(a.fromBufferAttribute(P,z),w[N+Z+0]=a.x,w[N+Z+1]=a.y,w[N+Z+2]=a.z,w[N+Z+3]=0),y===!0&&(a.fromBufferAttribute(I,z),w[N+Z+4]=a.x,w[N+Z+5]=a.y,w[N+Z+6]=a.z,w[N+Z+7]=0),m===!0&&(a.fromBufferAttribute(H,z),w[N+Z+8]=a.x,w[N+Z+9]=a.y,w[N+Z+10]=a.z,w[N+Z+11]=H.itemSize===4?a.w:1)}}c={count:d,texture:g,size:new oe(T,A)},r.set(o,c),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let p=0;for(let y=0;y<h.length;y++)p+=h[y];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",c.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",c.size)}return{update:n}}function ov(e,t,i,r,a){let n=new WeakMap;function s(h){let u=a.render.frame,d=h.geometry,c=t.get(h,d);if(n.get(c)!==u&&(t.update(c),n.set(c,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),n.get(h)!==u&&(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,e.ARRAY_BUFFER),n.set(h,u))),h.isSkinnedMesh){let p=h.skeleton;n.get(p)!==u&&(p.update(),n.set(p,u))}return c}function o(){n=new WeakMap}function l(h){let u=h.target;u.removeEventListener("dispose",l),r.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null&&i.remove(u.instanceColor)}return{update:s,dispose:o}}function hv(e,t,i,r,a,n){let s=new ii(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new _t;h.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new He([0,2,0,0,2,0],2));let u=new Lf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new kt(h,u),c=new hu(-1,1,1,-1,0,1),p=null,_=null,y=!1,m,f=null,S=[],E=!1;this.setSize=function(v,T){s.setSize(v,T),o!==null&&o.setSize(v,T),l!==null&&l.setSize(v,T);for(let A=0;A<S.length;A++){let w=S[A];w.setSize&&w.setSize(v,T)}},this.setEffects=function(v){S=v,E=S.length>0&&S[0].isRenderPass===!0;let T=s.width,A=s.height;S.length>0&&o===null&&(o=new ii(T,A,{type:gi,depthBuffer:!1,stencilBuffer:!1}),l=new ii(T,A,{type:gi,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<S.length;w++){let g=S[w];g.setSize&&g.setSize(T,A)}},this.begin=function(v,T){if(y||v.toneMapping===pi&&S.length===0)return!1;if(f=T,T!==null){let A=T.width,w=T.height;(s.width!==A||s.height!==w)&&this.setSize(A,w)}return E===!1&&v.setRenderTarget(s),m=v.toneMapping,v.toneMapping=pi,!0},this.hasRenderPass=function(){return E},this.end=function(v,T){v.toneMapping=m,y=!0;let A=s,w=o;for(let g=0;g<S.length;g++){let M=S[g];M.enabled!==!1&&(M.render(v,w,A,T),M.needsSwap!==!1&&(A=w,w=w===o?l:o))}if(p!==v.outputColorSpace||_!==v.toneMapping){p=v.outputColorSpace,_=v.toneMapping,u.defines={},et.getTransfer(p)===nt&&(u.defines.SRGB_TRANSFER="");let g=lv[_];g&&(u.defines[g]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(f),v.render(d,c),f=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}function ra(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=Fh[a];if(n===void 0&&(n=new Float32Array(a),Fh[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function wt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function At(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function zn(e,t){let i=Bh[t];i===void 0&&(i=new Int32Array(t),Bh[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function cv(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function uv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wt(i,t))return;e.uniform2fv(this.addr,t),At(i,t)}}function dv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(wt(i,t))return;e.uniform3fv(this.addr,t),At(i,t)}}function pv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wt(i,t))return;e.uniform4fv(this.addr,t),At(i,t)}}function fv(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(wt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),At(i,t)}else{if(wt(i,r))return;Vh.set(r),e.uniformMatrix2fv(this.addr,!1,Vh),At(i,r)}}function mv(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(wt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),At(i,t)}else{if(wt(i,r))return;Gh.set(r),e.uniformMatrix3fv(this.addr,!1,Gh),At(i,r)}}function gv(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(wt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),At(i,t)}else{if(wt(i,r))return;zh.set(r),e.uniformMatrix4fv(this.addr,!1,zh),At(i,r)}}function vv(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function _v(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wt(i,t))return;e.uniform2iv(this.addr,t),At(i,t)}}function yv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(wt(i,t))return;e.uniform3iv(this.addr,t),At(i,t)}}function xv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wt(i,t))return;e.uniform4iv(this.addr,t),At(i,t)}}function Mv(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function bv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wt(i,t))return;e.uniform2uiv(this.addr,t),At(i,t)}}function Sv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(wt(i,t))return;e.uniform3uiv(this.addr,t),At(i,t)}}function Tv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wt(i,t))return;e.uniform4uiv(this.addr,t),At(i,t)}}function Ev(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(Ro.compareFunction=i.isReversedDepthBuffer()?Bo:Fo,n=Ro):n=pu,i.setTexture2D(t||n,a)}function wv(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||mu,a)}function Av(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||gu,a)}function Rv(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||fu,a)}function Cv(e){switch(e){case 5126:return cv;case 35664:return uv;case 35665:return dv;case 35666:return pv;case 35674:return fv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return vv;case 35667:case 35671:return _v;case 35668:case 35672:return yv;case 35669:case 35673:return xv;case 5125:return Mv;case 36294:return bv;case 36295:return Sv;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Rv}}function Pv(e,t){e.uniform1fv(this.addr,t)}function Iv(e,t){let i=ra(t,this.size,2);e.uniform2fv(this.addr,i)}function Lv(e,t){let i=ra(t,this.size,3);e.uniform3fv(this.addr,i)}function Dv(e,t){let i=ra(t,this.size,4);e.uniform4fv(this.addr,i)}function Nv(e,t){let i=ra(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Uv(e,t){let i=ra(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Ov(e,t){let i=ra(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Fv(e,t){e.uniform1iv(this.addr,t)}function Bv(e,t){e.uniform2iv(this.addr,t)}function zv(e,t){e.uniform3iv(this.addr,t)}function Gv(e,t){e.uniform4iv(this.addr,t)}function Vv(e,t){e.uniform1uiv(this.addr,t)}function kv(e,t){e.uniform2uiv(this.addr,t)}function Hv(e,t){e.uniform3uiv(this.addr,t)}function Wv(e,t){e.uniform4uiv(this.addr,t)}function Xv(e,t,i){let r=this.cache,a=t.length,n=zn(i,a);wt(r,n)||(e.uniform1iv(this.addr,n),At(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=Ro:s=pu;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function jv(e,t,i){let r=this.cache,a=t.length,n=zn(i,a);wt(r,n)||(e.uniform1iv(this.addr,n),At(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||mu,n[s])}function qv(e,t,i){let r=this.cache,a=t.length,n=zn(i,a);wt(r,n)||(e.uniform1iv(this.addr,n),At(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||gu,n[s])}function Yv(e,t,i){let r=this.cache,a=t.length,n=zn(i,a);wt(r,n)||(e.uniform1iv(this.addr,n),At(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||fu,n[s])}function Zv(e){switch(e){case 5126:return Pv;case 35664:return Iv;case 35665:return Lv;case 35666:return Dv;case 35674:return Nv;case 35675:return Uv;case 35676:return Ov;case 5124:case 35670:return Fv;case 35667:case 35671:return Bv;case 35668:case 35672:return zv;case 35669:case 35673:return Gv;case 5125:return Vv;case 36294:return kv;case 36295:return Hv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return Yv}}function kh(e,t){e.seq.push(t),e.map[t.id]=t}function Qv(e,t,i){let r=e.name,a=r.length;for(Us.lastIndex=0;;){let n=Us.exec(r),s=Us.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){kh(i,h===void 0?new $v(o,e,t):new Kv(o,e,t));break}else{let u=i.map[o];u===void 0&&(u=new Jv(o),kh(i,u)),i=u}}}function Hh(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}function i_(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}function r_(e){et._getMatrix(Wh,et.workingColorSpace,e);let t=`mat3( ${Wh.elements.map(i=>i.toFixed(4))} )`;switch(et.getTransfer(e)){case Dn:return[t,"LinearTransferOETF"];case nt:return[t,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Xh(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+i_(e.getShaderSource(t),s)}else return a}function a_(e,t){let i=r_(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function s_(e,t){let i=n_[t];return i===void 0?(ze("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function o_(){et.getLuminanceCoefficients(xn);let e=xn.x.toFixed(4),t=xn.y.toFixed(4),i=xn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l_(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function h_(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function c_(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Ma(e){return e!==""}function jh(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Co(e){return e.replace(u_,p_)}function p_(e,t){let i=Ye[t];if(i===void 0){let r=d_.get(t);if(r!==void 0)i=Ye[r],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Co(i)}function Yh(e){return e.replace(f_,m_)}function m_(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Zh(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function v_(e){return g_[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function y_(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":__[e.envMapMode]||"ENVMAP_TYPE_CUBE"}function M_(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":x_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}function S_(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":b_[e.combine]||"ENVMAP_BLENDING_NONE"}function T_(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function E_(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=v_(i),h=y_(i),u=M_(i),d=S_(i),c=T_(i),p=l_(i),_=h_(n),y=a.createProgram(),m,f,S=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(Ma).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(Ma).join(`
`),f.length>0&&(f+=`
`)):(m=[Zh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),f=[Zh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",i.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==pi?"#define TONE_MAPPING":"",i.toneMapping!==pi?Ye.tonemapping_pars_fragment:"",i.toneMapping!==pi?s_("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,a_("linearToOutputTexel",i.outputColorSpace),o_(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ma).join(`
`)),s=Co(s),s=jh(s,i),s=qh(s,i),o=Co(o),o=jh(o,i),o=qh(o,i),s=Yh(s),o=Yh(o),i.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",i.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let E=S+m+s,v=S+f+o,T=Hh(a,a.VERTEX_SHADER,E),A=Hh(a,a.FRAGMENT_SHADER,v);a.attachShader(y,T),a.attachShader(y,A),i.index0AttributeName!==void 0?a.bindAttribLocation(y,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function w(P){if(e.debug.checkShaderErrors){let I=a.getProgramInfoLog(y)||"",H=a.getShaderInfoLog(T)||"",N=a.getShaderInfoLog(A)||"",z=I.trim(),Z=H.trim(),k=N.trim(),le=!0,q=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(le=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,y,T,A);else{let Y=Xh(a,T,"vertex"),ee=Xh(a,A,"fragment");Ve("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+Y+`
`+ee)}else z!==""?ze("WebGLProgram: Program Info Log:",z):(Z===""||k==="")&&(q=!1);q&&(P.diagnostics={runnable:le,programLog:z,vertexShader:{log:Z,prefix:m},fragmentShader:{log:k,prefix:f}})}a.deleteShader(T),a.deleteShader(A),g=new Rn(a,y),M=c_(a,y)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(y,e_)),D},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=t_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=A,this}function C_(e){return e===pr||e===Cn||e===Pn}function P_(e,t,i,r,a,n){let s=new Vo,o=new A_,l=new Set,h=[],u=new Map,d=r.logarithmicDepthBuffer,c=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return l.add(g),g===0?"uv":`uv${g}`}function y(g,M,D,P,I,H){let N=P.fog,z=I.geometry,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,k=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,le=t.get(g.envMap||Z,k),q=le&&le.mapping===On?le.image.height:null,Y=p[g.type];g.precision!==null&&(c=r.getMaxPrecision(g.precision),c!==g.precision&&ze("WebGLProgram.getParameters:",g.precision,"not supported, using",c,"instead."));let ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,he=ee!==void 0?ee.length:0,fe=0;z.morphAttributes.position!==void 0&&(fe=1),z.morphAttributes.normal!==void 0&&(fe=2),z.morphAttributes.color!==void 0&&(fe=3);let je,Ce,j,te;if(Y){let Tt=ui[Y];je=Tt.vertexShader,Ce=Tt.fragmentShader}else{je=g.vertexShader,Ce=g.fragmentShader;let Tt=o.getVertexShaderStage(g),at=o.getFragmentShaderStage(g);o.update(g,Tt,at),j=Tt.id,te=at.id}let re=e.getRenderTarget(),be=e.state.buffers.depth.getReversed(),we=I.isInstancedMesh===!0,ce=I.isBatchedMesh===!0,Xe=!!g.map,Q=!!g.matcap,J=!!le,ae=!!g.aoMap,_e=!!g.lightMap,xe=!!g.bumpMap&&g.wireframe===!1,Ae=!!g.normalMap,De=!!g.displacementMap,ke=!!g.emissiveMap,Fe=!!g.metalnessMap,L=!!g.roughnessMap,ct=g.anisotropy>0,Qe=g.clearcoat>0,Ke=g.dispersion>0,R=g.retroreflectivity>0,x=g.iridescence>0,U=g.sheen>0,W=g.transmission>0,K=ct&&!!g.anisotropyMap,pe=Qe&&!!g.clearcoatMap,me=Qe&&!!g.clearcoatNormalMap,B=Qe&&!!g.clearcoatRoughnessMap,ue=x&&!!g.iridescenceMap,ve=x&&!!g.iridescenceThicknessMap,Pe=U&&!!g.sheenColorMap,se=U&&!!g.sheenRoughnessMap,Ue=!!g.specularMap,Oe=!!g.specularColorMap,We=!!g.specularIntensityMap,rt=W&&!!g.transmissionMap,F=W&&!!g.thicknessMap,$=!!g.gradientMap,ie=!!g.alphaMap,Se=g.alphaTest>0,Ie=!!g.alphaHash,ne=!!g.extensions,Me=pi;g.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Ge={shaderID:Y,shaderType:g.type,shaderName:g.name,vertexShader:je,fragmentShader:Ce,defines:g.defines,customVertexShaderID:j,customFragmentShaderID:te,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:c,batching:ce,batchingColor:ce&&I._colorsTexture!==null,instancing:we,instancingColor:we&&I.instanceColor!==null,instancingMorph:we&&I.morphTexture!==null,outputColorSpace:re===null?e.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Xe,matcap:Q,envMap:J,envMapMode:J&&le.mapping,envMapCubeUVHeight:q,aoMap:ae,lightMap:_e,bumpMap:xe,normalMap:Ae,displacementMap:De,emissiveMap:ke,normalMapObjectSpace:Ae&&g.normalMapType===Cd,normalMapTangentSpace:Ae&&g.normalMapType===Kl,packedNormalMap:Ae&&g.normalMapType===Kl&&C_(g.normalMap.format),metalnessMap:Fe,roughnessMap:L,anisotropy:ct,anisotropyMap:K,clearcoat:Qe,clearcoatMap:pe,clearcoatNormalMap:me,clearcoatRoughnessMap:B,dispersion:Ke,retroreflection:R,iridescence:x,iridescenceMap:ue,iridescenceThicknessMap:ve,sheen:U,sheenColorMap:Pe,sheenRoughnessMap:se,specularMap:Ue,specularColorMap:Oe,specularIntensityMap:We,transmission:W,transmissionMap:rt,thicknessMap:F,gradientMap:$,opaque:g.transparent===!1&&g.blending===ba&&g.alphaToCoverage===!1,alphaMap:ie,alphaTest:Se,alphaHash:Ie,combine:g.combine,mapUv:Xe&&_(g.map.channel),aoMapUv:ae&&_(g.aoMap.channel),lightMapUv:_e&&_(g.lightMap.channel),bumpMapUv:xe&&_(g.bumpMap.channel),normalMapUv:Ae&&_(g.normalMap.channel),displacementMapUv:De&&_(g.displacementMap.channel),emissiveMapUv:ke&&_(g.emissiveMap.channel),metalnessMapUv:Fe&&_(g.metalnessMap.channel),roughnessMapUv:L&&_(g.roughnessMap.channel),anisotropyMapUv:K&&_(g.anisotropyMap.channel),clearcoatMapUv:pe&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:me&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:se&&_(g.sheenRoughnessMap.channel),specularMapUv:Ue&&_(g.specularMap.channel),specularColorMapUv:Oe&&_(g.specularColorMap.channel),specularIntensityMapUv:We&&_(g.specularIntensityMap.channel),transmissionMapUv:rt&&_(g.transmissionMap.channel),thicknessMapUv:F&&_(g.thicknessMap.channel),alphaMapUv:ie&&_(g.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ae||ct),vertexNormals:!!z.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(Xe||ie),fog:!!N,useFog:g.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||z.attributes.normal===void 0&&Ae===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:fe,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:Xe&&g.map.isVideoTexture===!0&&et.getTransfer(g.map.colorSpace)===nt,decodeVideoTextureEmissive:ke&&g.emissiveMap.isVideoTexture===!0&&et.getTransfer(g.emissiveMap.colorSpace)===nt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ei,flipSided:g.side===Vt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ne&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&g.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function m(g){let M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(let D in g.defines)M.push(D),M.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(f(M,g),S(M,g),M.push(e.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function f(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function S(g,M){s.disableAll(),M.instancing&&s.enable(0),M.instancingColor&&s.enable(1),M.instancingMorph&&s.enable(2),M.matcap&&s.enable(3),M.envMap&&s.enable(4),M.normalMapObjectSpace&&s.enable(5),M.normalMapTangentSpace&&s.enable(6),M.clearcoat&&s.enable(7),M.iridescence&&s.enable(8),M.alphaTest&&s.enable(9),M.vertexColors&&s.enable(10),M.vertexAlphas&&s.enable(11),M.vertexUv1s&&s.enable(12),M.vertexUv2s&&s.enable(13),M.vertexUv3s&&s.enable(14),M.vertexTangents&&s.enable(15),M.anisotropy&&s.enable(16),M.alphaHash&&s.enable(17),M.batching&&s.enable(18),M.dispersion&&s.enable(19),M.retroreflection&&s.enable(24),M.batchingColor&&s.enable(20),M.gradientMap&&s.enable(21),M.packedNormalMap&&s.enable(22),M.vertexNormals&&s.enable(23),g.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.reversedDepthBuffer&&s.enable(4),M.skinning&&s.enable(5),M.morphTargets&&s.enable(6),M.morphNormals&&s.enable(7),M.morphColors&&s.enable(8),M.premultipliedAlpha&&s.enable(9),M.shadowMapEnabled&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.transmission&&s.enable(15),M.sheen&&s.enable(16),M.opaque&&s.enable(17),M.pointsUvs&&s.enable(18),M.decodeVideoTexture&&s.enable(19),M.decodeVideoTextureEmissive&&s.enable(20),M.alphaToCoverage&&s.enable(21),M.numLightProbeGrids>0&&s.enable(22),M.hasPositionAttribute&&s.enable(23),g.push(s.mask)}function E(g){let M=p[g.type],D;if(M){let P=ui[M];D=Cf.clone(P.uniforms)}else D=g.uniforms;return D}function v(g,M){let D=u.get(M);return D!==void 0?++D.usedTimes:(D=new E_(e,M,g,a),h.push(D),u.set(M,D)),D}function T(g){if(--g.usedTimes===0){let M=h.indexOf(g);h[M]=h[h.length-1],h.pop(),u.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function w(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:E,acquireProgram:v,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:w}}function I_(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function L_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function $h(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Kh(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(c){let p=0;return c.isInstancedMesh&&(p+=2),c.isSkinnedMesh&&(p+=1),p}function o(c,p,_,y,m,f){let S=e[t];return S===void 0?(S={id:c.id,object:c,geometry:p,material:_,materialVariant:s(c),groupOrder:y,renderOrder:c.renderOrder,z:m,group:f},e[t]=S):(S.id=c.id,S.object=c,S.geometry=p,S.material=_,S.materialVariant=s(c),S.groupOrder=y,S.renderOrder=c.renderOrder,S.z=m,S.group=f),t++,S}function l(c,p,_,y,m,f,S){S.reversedDepth===!0&&(m=-m);let E=o(c,p,_,y,m,f);_.transmission>0?r.push(E):_.transparent===!0?a.push(E):i.push(E)}function h(c,p,_,y,m,f){let S=o(c,p,_,y,m,f);_.transmission>0?r.unshift(S):_.transparent===!0?a.unshift(S):i.unshift(S)}function u(c,p){i.length>1&&i.sort(c||L_),r.length>1&&r.sort(p||$h),a.length>1&&a.sort(p||$h)}function d(){for(let c=t,p=e.length;c<p;c++){let _=e[c];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:h,finish:d,sort:u}}function D_(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new Kh,e.set(r,[s])):a>=n.length?(s=new Kh,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function N_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new C,color:new it};break;case"SpotLight":i={position:new C,direction:new C,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new C,color:new it,distance:0,decay:0};break;case"HemisphereLight":i={direction:new C,skyColor:new it,groundColor:new it};break;case"RectAreaLight":i={color:new it,position:new C,halfWidth:new C,halfHeight:new C};break}return e[t.id]=i,i}}}function U_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}function F_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function B_(e){let t=new N_,i=U_(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new C);let a=new C,n=new Ze,s=new Ze;function o(h){let u=0,d=0,c=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let p=0,_=0,y=0,m=0,f=0,S=0,E=0,v=0,T=0,A=0,w=0,g=0,M=0,D=0;h.sort(F_);for(let I=0,H=h.length;I<H;I++){let N=h[I],z=N.color,Z=N.intensity,k=N.distance,le=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===pr?le=N.shadow.map.texture:le=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=z.r*Z,d+=z.g*Z,c+=z.b*Z;else if(N.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(N.sh.coefficients[q],Z);D++}else if(N.isSunLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Y=N.shadow,ee=i.get(N);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),r.sunShadow[_]=ee,r.sunShadowMap[_]=le;let he=Y.getViewportCount();for(let fe=0;fe<he;fe++)r.sunShadowMatrix[y+fe]=Y.getMatrix(fe),r.sunShadowCascade[y+fe]=Y._cascadeData[fe];y+=he,_++}r.sun[p]=q,p++}else if(N.isDirectionalLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Y=N.shadow,ee=i.get(N);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,r.directionalShadow[m]=ee,r.directionalShadowMap[m]=le,r.directionalShadowMatrix[m]=N.shadow.matrix,T++}r.directional[m]=q,m++}else if(N.isSpotLight){let q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(z).multiplyScalar(Z),q.distance=k,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,r.spot[S]=q;let Y=N.shadow;if(N.map&&(r.spotLightMap[g]=N.map,g++,Y.updateMatrices(N),N.castShadow&&M++),r.spotLightMatrix[S]=Y.matrix,N.castShadow){let ee=i.get(N);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,r.spotShadow[S]=ee,r.spotShadowMap[S]=le,w++}S++}else if(N.isRectAreaLight){let q=t.get(N);q.color.copy(z).multiplyScalar(Z),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),r.rectArea[E]=q,E++}else if(N.isPointLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let Y=N.shadow,ee=i.get(N);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,ee.shadowCameraNear=Y.camera.near,ee.shadowCameraFar=Y.camera.far,r.pointShadow[f]=ee,r.pointShadowMap[f]=le,r.pointShadowMatrix[f]=N.shadow.matrix,A++}r.point[f]=q,f++}else if(N.isHemisphereLight){let q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(Z),q.groundColor.copy(N.groundColor).multiplyScalar(Z),r.hemi[v]=q,v++}}E>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=c;let P=r.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==f||P.spotLength!==S||P.rectAreaLength!==E||P.hemiLength!==v||P.numSunShadows!==_||P.numDirectionalShadows!==T||P.numPointShadows!==A||P.numSpotShadows!==w||P.numSpotMaps!==g||P.numLightProbes!==D)&&(r.sun.length=p,r.directional.length=m,r.spot.length=S,r.rectArea.length=E,r.point.length=f,r.hemi.length=v,r.sunShadow.length=_,r.sunShadowMap.length=_,r.sunShadowMatrix.length=y,r.sunShadowCascade.length=y,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.directionalShadowMatrix.length=T,r.pointShadow.length=A,r.pointShadowMap.length=A,r.pointShadowMatrix.length=A,r.spotShadow.length=w,r.spotShadowMap.length=w,r.spotLightMatrix.length=w+g-M,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=M,r.numLightProbes=D,P.sunLength=p,P.directionalLength=m,P.pointLength=f,P.spotLength=S,P.rectAreaLength=E,P.hemiLength=v,P.numSunShadows=_,P.numDirectionalShadows=T,P.numPointShadows=A,P.numSpotShadows=w,P.numSpotMaps=g,P.numLightProbes=D,r.version=O_++)}function l(h,u){let d=0,c=0,p=0,_=0,y=0,m=0,f=u.matrixWorldInverse;for(let S=0,E=h.length;S<E;S++){let v=h[S];if(v.isSunLight){let T=r.sun[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),d++}else if(v.isDirectionalLight){let T=r.directional[c];T.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),c++}else if(v.isSpotLight){let T=r.spot[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),_++}else if(v.isRectAreaLight){let T=r.rectArea[y];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),s.identity(),n.copy(v.matrixWorld),n.premultiply(f),s.extractRotation(n),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),y++}else if(v.isPointLight){let T=r.point[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let T=r.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:r}}function Jh(e){let t=new B_(e),i=[],r=[],a=[];function n(c){d.camera=c,i.length=0,r.length=0,a.length=0}function s(c){i.push(c)}function o(c){r.push(c)}function l(c){a.push(c)}function h(){t.setup(i)}function u(c){t.setupView(i,c)}let d={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:d,setupLights:h,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function z_(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Jh(e),t.set(a,[o])):n>=s.length?(o=new Jh(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}function W_(e,t,i){let r=new Ia,a=new oe,n=new oe,s=new ft,o=new Df,l=new Nf,h={},u=i.maxTextureSize,d={[Ci]:Vt,[Vt]:Ci,[Ei]:Ei},c=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:G_,fragmentShader:V_}),p=c.clone();p.defines.HORIZONTAL_PASS=1;let _=new _t;_.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new kt(_,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mn;let f=this.type;this.render=function(A,w,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===sd&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mn);let M=e.getRenderTarget(),D=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),I=e.state;I.setBlending(Ai),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let H=f!==this.type;H&&w.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(z=>z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,z=A.length;N<z;N++){let Z=A[N],k=Z.shadow;if(k===void 0){ze("WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);let le=k.getFrameExtents();a.multiply(le),n.copy(k.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(n.x=Math.floor(u/le.x),a.x=n.x*le.x,k.mapSize.x=n.x),a.y>u&&(n.y=Math.floor(u/le.y),a.y=n.y*le.y,k.mapSize.y=n.y));let q=e.state.buffers.depth.getReversed();if(k.camera._reversedDepth=q,k.map===null||H===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ya){if(Z.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ii(a.x,a.y,{format:pr,type:gi,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),k.map.texture.name=Z.name+".shadowMap",k.map.depthTexture=new La(a.x,a.y,di),k.map.depthTexture.name=Z.name+".shadowMapDepth",k.map.depthTexture.format=Pi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ct,k.map.depthTexture.magFilter=Ct}else Z.isPointLight?(k.map=new du(a.x),k.map.depthTexture=new Pp(a.x,mi)):(k.map=new ii(a.x,a.y),k.map.depthTexture=new La(a.x,a.y,mi)),k.map.depthTexture.name=Z.name+".shadowMap",k.map.depthTexture.format=Pi,this.type===Mn?(k.map.depthTexture.compareFunction=q?Bo:Fo,k.map.depthTexture.minFilter=Dt,k.map.depthTexture.magFilter=Dt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ct,k.map.depthTexture.magFilter=Ct);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==a.x||k.map.height!==a.y)&&k.map.setSize(a.x,a.y);let Y=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Z.isPointLight!==!0&&k.updateMatrices(Z,g);for(let ee=0;ee<Y;ee++){let he=k.getCamera(ee);if(Z.isPointLight){let fe=k.camera,je=k.matrix,Ce=Z.distance||fe.far;Ce!==fe.far&&(fe.far=Ce,fe.updateProjectionMatrix()),_a.setFromMatrixPosition(Z.matrixWorld),fe.position.copy(_a),Os.copy(fe.position),Os.add(k_[ee]),fe.up.copy(H_[ee]),fe.lookAt(Os),fe.updateMatrixWorld(),je.makeTranslation(-_a.x,-_a.y,-_a.z),Qh.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Qh,fe.coordinateSystem,fe.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)e.setRenderTarget(k.map,ee),e.clear();else{ee===0&&(e.setRenderTarget(k.map),e.clear());let fe=k.getViewport(ee);s.set(n.x*fe.x,n.y*fe.y,n.x*fe.z,n.y*fe.w),I.viewport(s)}r=k.getFrustum(ee),v(w,g,he,Z,this.type)}k.isPointLightShadow!==!0&&this.type===ya&&S(k,g),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(M,D,P)};function S(A,w){let g=t.update(y);c.defines.VSM_SAMPLES!==A.blurSamples&&(c.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new ii(a.x,a.y,{format:pr,type:gi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),c.uniforms.shadow_pass.value=A.map.depthTexture,c.uniforms.resolution.value.set(A.map.width,A.map.height),c.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(w,null,g,c,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(w,null,g,p,y,null)}function E(A,w,g,M){let D=null,P=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)D=P;else if(D=g.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let I=D.uuid,H=w.uuid,N=h[I];N===void 0&&(N={},h[I]=N);let z=N[H];z===void 0&&(z=D.clone(),N[H]=z,w.addEventListener("dispose",T)),D=z}if(D.visible=w.visible,D.wireframe=w.wireframe,M===ya?D.side=w.shadowSide!==null?w.shadowSide:w.side:D.side=w.shadowSide!==null?w.shadowSide:d[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,g.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let I=e.properties.get(D);I.light=g}return D}function v(A,w,g,M,D){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===ya)&&(!A.frustumCulled||A.intersectsFrustum(r))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);let I=t.update(A),H=A.material;if(Array.isArray(H)){let N=I.groups;for(let z=0,Z=N.length;z<Z;z++){let k=N[z],le=H[k.materialIndex];if(le&&le.visible){let q=E(A,le,M,D);A.onBeforeShadow(e,A,w,g,I,q,k),e.renderBufferDirect(g,null,I,q,A,k),A.onAfterShadow(e,A,w,g,I,q,k)}}}else if(H.visible){let N=E(A,H,M,D);A.onBeforeShadow(e,A,w,g,I,N,null),e.renderBufferDirect(g,null,I,N,A,null),A.onAfterShadow(e,A,w,g,I,N,null)}}let P=A.children;for(let I=0,H=P.length;I<H;I++)v(P[I],w,g,M,D)}function T(A){A.target.removeEventListener("dispose",T);for(let w in h){let g=h[w],M=A.target.uuid;M in g&&(g[M].dispose(),delete g[M])}}}function X_(e,t){function i(){let F=!1,$=new ft,ie=null,Se=new ft(0,0,0,0);return{setMask:function(Ie){ie!==Ie&&!F&&(e.colorMask(Ie,Ie,Ie,Ie),ie=Ie)},setLocked:function(Ie){F=Ie},setClear:function(Ie,ne,Me,Ge,Tt){Tt===!0&&(Ie*=Ge,ne*=Ge,Me*=Ge),$.set(Ie,ne,Me,Ge),Se.equals($)===!1&&(e.clearColor(Ie,ne,Me,Ge),Se.copy($))},reset:function(){F=!1,ie=null,Se.set(-1,0,0,0)}}}function r(){let F=!1,$=!1,ie=null,Se=null,Ie=null;return{setReversed:function(ne){if($!==ne){let Me=t.get("EXT_clip_control");ne?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),$=ne;let Ge=Ie;Ie=null,this.setClear(Ge)}},getReversed:function(){return $},setTest:function(ne){ne?re(e.DEPTH_TEST):be(e.DEPTH_TEST)},setMask:function(ne){ie!==ne&&!F&&(e.depthMask(ne),ie=ne)},setFunc:function(ne){if($&&(ne=kd[ne]),Se!==ne){switch(ne){case Fs:e.depthFunc(e.NEVER);break;case Bs:e.depthFunc(e.ALWAYS);break;case zs:e.depthFunc(e.LESS);break;case wa:e.depthFunc(e.LEQUAL);break;case Gs:e.depthFunc(e.EQUAL);break;case Vs:e.depthFunc(e.GEQUAL);break;case ks:e.depthFunc(e.GREATER);break;case Hs:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Se=ne}},setLocked:function(ne){F=ne},setClear:function(ne){Ie!==ne&&(Ie=ne,$&&(ne=1-ne),e.clearDepth(ne))},reset:function(){F=!1,ie=null,Se=null,Ie=null,$=!1}}}function a(){let F=!1,$=null,ie=null,Se=null,Ie=null,ne=null,Me=null,Ge=null,Tt=null;return{setTest:function(at){F||(at?re(e.STENCIL_TEST):be(e.STENCIL_TEST))},setMask:function(at){$!==at&&!F&&(e.stencilMask(at),$=at)},setFunc:function(at,ni,yi){(ie!==at||Se!==ni||Ie!==yi)&&(e.stencilFunc(at,ni,yi),ie=at,Se=ni,Ie=yi)},setOp:function(at,ni,yi){(ne!==at||Me!==ni||Ge!==yi)&&(e.stencilOp(at,ni,yi),ne=at,Me=ni,Ge=yi)},setLocked:function(at){F=at},setClear:function(at){Tt!==at&&(e.clearStencil(at),Tt=at)},reset:function(){F=!1,$=null,ie=null,Se=null,Ie=null,ne=null,Me=null,Ge=null,Tt=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,h=new WeakMap,u={},d={},c={},p=new WeakMap,_=[],y=null,m=!1,f=null,S=null,E=null,v=null,T=null,A=null,w=null,g=new it(0,0,0),M=0,D=!1,P=null,I=null,H=null,N=null,z=null,Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,le=0,q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=le>=1):q.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=le>=2);let Y=null,ee={},he=e.getParameter(e.SCISSOR_BOX),fe=e.getParameter(e.VIEWPORT),je=new ft().fromArray(he),Ce=new ft().fromArray(fe);function j(F,$,ie,Se){let Ie=new Uint8Array(4),ne=e.createTexture();e.bindTexture(F,ne),e.texParameteri(F,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(F,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Me=0;Me<ie;Me++)F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY?e.texImage3D($,0,e.RGBA,1,1,Se,0,e.RGBA,e.UNSIGNED_BYTE,Ie):e.texImage2D($+Me,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Ie);return ne}let te={};te[e.TEXTURE_2D]=j(e.TEXTURE_2D,e.TEXTURE_2D,1),te[e.TEXTURE_CUBE_MAP]=j(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[e.TEXTURE_2D_ARRAY]=j(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),te[e.TEXTURE_3D]=j(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),re(e.DEPTH_TEST),s.setFunc(wa),xe(!1),Ae(Hl),re(e.CULL_FACE),ae(Ai);function re(F){u[F]!==!0&&(e.enable(F),u[F]=!0)}function be(F){u[F]!==!1&&(e.disable(F),u[F]=!1)}function we(F,$){return c[F]!==$?(e.bindFramebuffer(F,$),c[F]=$,F===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=$),F===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=$),!0):!1}function ce(F,$){let ie=_,Se=!1;if(F){ie=p.get($),ie===void 0&&(ie=[],p.set($,ie));let Ie=F.textures;if(ie.length!==Ie.length||ie[0]!==e.COLOR_ATTACHMENT0){for(let ne=0,Me=Ie.length;ne<Me;ne++)ie[ne]=e.COLOR_ATTACHMENT0+ne;ie.length=Ie.length,Se=!0}}else ie[0]!==e.BACK&&(ie[0]=e.BACK,Se=!0);Se&&e.drawBuffers(ie)}function Xe(F){return y!==F?(e.useProgram(F),y=F,!0):!1}let Q={[Br]:e.FUNC_ADD,[ld]:e.FUNC_SUBTRACT,[hd]:e.FUNC_REVERSE_SUBTRACT};Q[cd]=e.MIN,Q[ud]=e.MAX;let J={[dd]:e.ZERO,[pd]:e.ONE,[fd]:e.SRC_COLOR,[ec]:e.SRC_ALPHA,[xd]:e.SRC_ALPHA_SATURATE,[_d]:e.DST_COLOR,[gd]:e.DST_ALPHA,[md]:e.ONE_MINUS_SRC_COLOR,[tc]:e.ONE_MINUS_SRC_ALPHA,[yd]:e.ONE_MINUS_DST_COLOR,[vd]:e.ONE_MINUS_DST_ALPHA,[Md]:e.CONSTANT_COLOR,[bd]:e.ONE_MINUS_CONSTANT_COLOR,[Sd]:e.CONSTANT_ALPHA,[Td]:e.ONE_MINUS_CONSTANT_ALPHA};function ae(F,$,ie,Se,Ie,ne,Me,Ge,Tt,at){if(F===Ai){m===!0&&(be(e.BLEND),m=!1);return}if(m===!1&&(re(e.BLEND),m=!0),F!==od){if(F!==f||at!==D){if((S!==Br||T!==Br)&&(e.blendEquation(e.FUNC_ADD),S=Br,T=Br),at)switch(F){case ba:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Wl:e.blendFunc(e.ONE,e.ONE);break;case Xl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case jl:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ve("WebGLState: Invalid blending: ",F);break}else switch(F){case ba:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Wl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Xl:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jl:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",F);break}E=null,v=null,A=null,w=null,g.set(0,0,0),M=0,f=F,D=at}return}Ie=Ie||$,ne=ne||ie,Me=Me||Se,($!==S||Ie!==T)&&(e.blendEquationSeparate(Q[$],Q[Ie]),S=$,T=Ie),(ie!==E||Se!==v||ne!==A||Me!==w)&&(e.blendFuncSeparate(J[ie],J[Se],J[ne],J[Me]),E=ie,v=Se,A=ne,w=Me),(Ge.equals(g)===!1||Tt!==M)&&(e.blendColor(Ge.r,Ge.g,Ge.b,Tt),g.copy(Ge),M=Tt),f=F,D=!1}function _e(F,$){F.side===Ei?be(e.CULL_FACE):re(e.CULL_FACE);let ie=F.side===Vt;$&&(ie=!ie),xe(ie),F.blending===ba&&F.transparent===!1?ae(Ai):ae(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),n.setMask(F.colorWrite);let Se=F.stencilWrite;o.setTest(Se),Se&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ke(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?re(e.SAMPLE_ALPHA_TO_COVERAGE):be(e.SAMPLE_ALPHA_TO_COVERAGE)}function xe(F){P!==F&&(F?e.frontFace(e.CW):e.frontFace(e.CCW),P=F)}function Ae(F){F!==ad?(re(e.CULL_FACE),F!==I&&(F===Hl?e.cullFace(e.BACK):F===nd?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):be(e.CULL_FACE),I=F}function De(F){F!==H&&(k&&e.lineWidth(F),H=F)}function ke(F,$,ie){F?(re(e.POLYGON_OFFSET_FILL),(N!==$||z!==ie)&&(N=$,z=ie,s.getReversed()&&($=-$),e.polygonOffset($,ie))):be(e.POLYGON_OFFSET_FILL)}function Fe(F){F?re(e.SCISSOR_TEST):be(e.SCISSOR_TEST)}function L(F){F===void 0&&(F=e.TEXTURE0+Z-1),Y!==F&&(e.activeTexture(F),Y=F)}function ct(F,$,ie){ie===void 0&&(Y===null?ie=e.TEXTURE0+Z-1:ie=Y);let Se=ee[ie];Se===void 0&&(Se={type:void 0,texture:void 0},ee[ie]=Se),(Se.type!==F||Se.texture!==$)&&(Y!==ie&&(e.activeTexture(ie),Y=ie),e.bindTexture(F,$||te[F]),Se.type=F,Se.texture=$)}function Qe(){let F=ee[Y];F!==void 0&&F.type!==void 0&&(e.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ke(){try{e.compressedTexImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function R(){try{e.compressedTexImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function x(){try{e.texSubImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function U(){try{e.texSubImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function W(){try{e.compressedTexSubImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function K(){try{e.compressedTexSubImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function pe(){try{e.texStorage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function me(){try{e.texStorage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function B(){try{e.texImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function ue(){try{e.texImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function ve(F){return d[F]!==void 0?d[F]:e.getParameter(F)}function Pe(F,$){d[F]!==$&&(e.pixelStorei(F,$),d[F]=$)}function se(F){je.equals(F)===!1&&(e.scissor(F.x,F.y,F.z,F.w),je.copy(F))}function Ue(F){Ce.equals(F)===!1&&(e.viewport(F.x,F.y,F.z,F.w),Ce.copy(F))}function Oe(F,$){let ie=h.get($);ie===void 0&&(ie=new WeakMap,h.set($,ie));let Se=ie.get(F);Se===void 0&&(Se=e.getUniformBlockIndex($,F.name),ie.set(F,Se))}function We(F,$){let ie=h.get($).get(F);l.get($)!==ie&&(e.uniformBlockBinding($,ie,F.__bindingPointIndex),l.set($,ie))}function rt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},Y=null,ee={},c={},p=new WeakMap,_=[],y=null,m=!1,f=null,S=null,E=null,v=null,T=null,A=null,w=null,g=new it(0,0,0),M=0,D=!1,P=null,I=null,H=null,N=null,z=null,je.set(0,0,e.canvas.width,e.canvas.height),Ce.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:re,disable:be,bindFramebuffer:we,drawBuffers:ce,useProgram:Xe,setBlending:ae,setMaterial:_e,setFlipSided:xe,setCullFace:Ae,setLineWidth:De,setPolygonOffset:ke,setScissorTest:Fe,activeTexture:L,bindTexture:ct,unbindTexture:Qe,compressedTexImage2D:Ke,compressedTexImage3D:R,texImage2D:B,texImage3D:ue,pixelStorei:Pe,getParameter:ve,updateUBOMapping:Oe,uniformBlockBinding:We,texStorage2D:pe,texStorage3D:me,texSubImage2D:x,texSubImage3D:U,compressedTexSubImage2D:W,compressedTexSubImage3D:K,scissor:se,viewport:Ue,reset:rt}}function j_(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new oe,u=new WeakMap,d=new Set,c,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,x){return _?new OffscreenCanvas(R,x):Ca("canvas")}function m(R,x,U){let W=1,K=Ke(R);if((K.width>U||K.height>U)&&(W=U/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let pe=Math.floor(W*K.width),me=Math.floor(W*K.height);c===void 0&&(c=y(pe,me));let B=x?y(pe,me):c;return B.width=pe,B.height=me,B.getContext("2d").drawImage(R,0,0,pe,me),ze("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+pe+"x"+me+")."),B}else return"data"in R&&ze("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function f(R){return R.generateMipmaps}function S(R){e.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?e.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(R,x,U,W,K,pe=!1){if(R!==null){if(e[R]!==void 0)return e[R];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let me;W&&(me=t.get("EXT_texture_norm16"),me||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let B=x;if(x===e.RED&&(U===e.FLOAT&&(B=e.R32F),U===e.HALF_FLOAT&&(B=e.R16F),U===e.UNSIGNED_BYTE&&(B=e.R8),U===e.UNSIGNED_SHORT&&me&&(B=me.R16_EXT),U===e.SHORT&&me&&(B=me.R16_SNORM_EXT)),x===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.R8UI),U===e.UNSIGNED_SHORT&&(B=e.R16UI),U===e.UNSIGNED_INT&&(B=e.R32UI),U===e.BYTE&&(B=e.R8I),U===e.SHORT&&(B=e.R16I),U===e.INT&&(B=e.R32I)),x===e.RG&&(U===e.FLOAT&&(B=e.RG32F),U===e.HALF_FLOAT&&(B=e.RG16F),U===e.UNSIGNED_BYTE&&(B=e.RG8),U===e.UNSIGNED_SHORT&&me&&(B=me.RG16_EXT),U===e.SHORT&&me&&(B=me.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.RG8UI),U===e.UNSIGNED_SHORT&&(B=e.RG16UI),U===e.UNSIGNED_INT&&(B=e.RG32UI),U===e.BYTE&&(B=e.RG8I),U===e.SHORT&&(B=e.RG16I),U===e.INT&&(B=e.RG32I)),x===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.RGB8UI),U===e.UNSIGNED_SHORT&&(B=e.RGB16UI),U===e.UNSIGNED_INT&&(B=e.RGB32UI),U===e.BYTE&&(B=e.RGB8I),U===e.SHORT&&(B=e.RGB16I),U===e.INT&&(B=e.RGB32I)),x===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(B=e.RGBA16UI),U===e.UNSIGNED_INT&&(B=e.RGBA32UI),U===e.BYTE&&(B=e.RGBA8I),U===e.SHORT&&(B=e.RGBA16I),U===e.INT&&(B=e.RGBA32I)),x===e.RGB&&(U===e.UNSIGNED_SHORT&&me&&(B=me.RGB16_EXT),U===e.SHORT&&me&&(B=me.RGB16_SNORM_EXT),U===e.UNSIGNED_INT_5_9_9_9_REV&&(B=e.RGB9_E5),U===e.UNSIGNED_INT_10F_11F_11F_REV&&(B=e.R11F_G11F_B10F)),x===e.RGBA){let ue=pe?Dn:et.getTransfer(K);U===e.FLOAT&&(B=e.RGBA32F),U===e.HALF_FLOAT&&(B=e.RGBA16F),U===e.UNSIGNED_BYTE&&(B=ue===nt?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT&&me&&(B=me.RGBA16_EXT),U===e.SHORT&&me&&(B=me.RGBA16_SNORM_EXT),U===e.UNSIGNED_SHORT_4_4_4_4&&(B=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(B=e.RGB5_A1)}return(B===e.R16F||B===e.R32F||B===e.RG16F||B===e.RG32F||B===e.RGBA16F||B===e.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function T(R,x){let U;return R?x===null||x===mi||x===Ra?U=e.DEPTH24_STENCIL8:x===di?U=e.DEPTH32F_STENCIL8:x===Aa&&(U=e.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===mi||x===Ra?U=e.DEPTH_COMPONENT24:x===di?U=e.DEPTH_COMPONENT32F:x===Aa&&(U=e.DEPTH_COMPONENT16),U}function A(R,x){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ct&&R.minFilter!==Dt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function w(R){let x=R.target;x.removeEventListener("dispose",w),M(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function g(R){let x=R.target;x.removeEventListener("dispose",g),P(x)}function M(R){let x=r.get(R);if(x.__webglInit===void 0)return;let U=R.source,W=p.get(U);if(W){let K=W[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&D(R),Object.keys(W).length===0&&p.delete(U)}r.remove(R)}function D(R){let x=r.get(R);e.deleteTexture(x.__webglTexture);let U=R.source,W=p.get(U);delete W[x.__cacheKey],s.memory.textures--}function P(R){let x=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let K=0;K<x.__webglFramebuffer[W].length;K++)e.deleteFramebuffer(x.__webglFramebuffer[W][K]);else e.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)e.deleteFramebuffer(x.__webglFramebuffer[W]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let U=R.textures;for(let W=0,K=U.length;W<K;W++){let pe=r.get(U[W]);pe.__webglTexture&&(e.deleteTexture(pe.__webglTexture),s.memory.textures--),r.remove(U[W])}r.remove(R)}let I=0;function H(){I=0}function N(){return I}function z(R){I=R}function Z(){let R=I;return R>=a.maxTextures&&ze("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+a.maxTextures),I+=1,R}function k(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function le(R,x){let U=r.get(R);if(R.isVideoTexture&&ct(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){let W=R.image;if(W===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{be(U,R,x);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+x)}function q(R,x){let U=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){be(U,R,x);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+x)}function Y(R,x){let U=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){be(U,R,x);return}i.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+x)}function ee(R,x){let U=r.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){we(U,R,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+x)}let he={[Ws]:e.REPEAT,[wi]:e.CLAMP_TO_EDGE,[Xs]:e.MIRRORED_REPEAT},fe={[Ct]:e.NEAREST,[Ad]:e.NEAREST_MIPMAP_NEAREST,[qa]:e.NEAREST_MIPMAP_LINEAR,[Dt]:e.LINEAR,[is]:e.LINEAR_MIPMAP_NEAREST,[or]:e.LINEAR_MIPMAP_LINEAR},je={[Id]:e.NEVER,[Od]:e.ALWAYS,[Ld]:e.LESS,[Fo]:e.LEQUAL,[Dd]:e.EQUAL,[Bo]:e.GEQUAL,[Nd]:e.GREATER,[Ud]:e.NOTEQUAL};function Ce(R,x){if(x.type===di&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Dt||x.magFilter===is||x.magFilter===qa||x.magFilter===or||x.minFilter===Dt||x.minFilter===is||x.minFilter===qa||x.minFilter===or)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,he[x.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,he[x.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,he[x.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,fe[x.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,fe[x.minFilter]),x.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,je[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ct||x.minFilter!==qa&&x.minFilter!==or||x.type===di&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function j(R,x){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",w));let W=x.source,K=p.get(W);K===void 0&&(K={},p.set(W,K));let pe=k(x);if(pe!==R.__cacheKey){K[pe]===void 0&&(K[pe]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,U=!0),K[pe].usedTimes++;let me=K[R.__cacheKey];me!==void 0&&(K[R.__cacheKey].usedTimes--,me.usedTimes===0&&D(x)),R.__cacheKey=pe,R.__webglTexture=K[pe].texture}return U}function te(R,x,U){return Math.floor(Math.floor(R/U)/x)}function re(R,x,U,W){let K=R.updateRanges;if(K.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,U,W,x.data);else{K.sort((ve,Pe)=>ve.start-Pe.start);let pe=0;for(let ve=1;ve<K.length;ve++){let Pe=K[pe],se=K[ve],Ue=Pe.start+Pe.count,Oe=te(se.start,x.width,4),We=te(Pe.start,x.width,4);se.start<=Ue+1&&Oe===We&&te(se.start+se.count-1,x.width,4)===Oe?Pe.count=Math.max(Pe.count,se.start+se.count-Pe.start):(++pe,K[pe]=se)}K.length=pe+1;let me=i.getParameter(e.UNPACK_ROW_LENGTH),B=i.getParameter(e.UNPACK_SKIP_PIXELS),ue=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let ve=0,Pe=K.length;ve<Pe;ve++){let se=K[ve],Ue=Math.floor(se.start/4),Oe=Math.ceil(se.count/4),We=Ue%x.width,rt=Math.floor(Ue/x.width),F=Oe;i.pixelStorei(e.UNPACK_SKIP_PIXELS,We),i.pixelStorei(e.UNPACK_SKIP_ROWS,rt),i.texSubImage2D(e.TEXTURE_2D,0,We,rt,F,1,U,W,x.data)}R.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,me),i.pixelStorei(e.UNPACK_SKIP_PIXELS,B),i.pixelStorei(e.UNPACK_SKIP_ROWS,ue)}}function be(R,x,U){let W=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=e.TEXTURE_3D);let K=j(R,x),pe=x.source;i.bindTexture(W,R.__webglTexture,e.TEXTURE0+U);let me=r.get(pe);if(pe.version!==me.__version||K===!0){if(i.activeTexture(e.TEXTURE0+U),!(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)){let $=et.getPrimaries(et.workingColorSpace),ie=x.colorSpace===Vi?null:et.getPrimaries(x.colorSpace),Se=x.colorSpace===Vi||$===ie?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let B=m(x.image,!1,a.maxTextureSize);B=Qe(x,B);let ue=n.convert(x.format,x.colorSpace),ve=n.convert(x.type),Pe=v(x.internalFormat,ue,ve,x.normalized,x.colorSpace,x.isVideoTexture);Ce(W,x);let se,Ue=x.mipmaps,Oe=x.isVideoTexture!==!0,We=me.__version===void 0||K===!0,rt=pe.dataReady,F=A(x,B);if(x.isDepthTexture)Pe=T(x.format===lr,x.type),We&&(Oe?i.texStorage2D(e.TEXTURE_2D,1,Pe,B.width,B.height):i.texImage2D(e.TEXTURE_2D,0,Pe,B.width,B.height,0,ue,ve,null));else if(x.isDataTexture)if(Ue.length>0){Oe&&We&&i.texStorage2D(e.TEXTURE_2D,F,Pe,Ue[0].width,Ue[0].height);for(let $=0,ie=Ue.length;$<ie;$++)se=Ue[$],Oe?rt&&i.texSubImage2D(e.TEXTURE_2D,$,0,0,se.width,se.height,ue,ve,se.data):i.texImage2D(e.TEXTURE_2D,$,Pe,se.width,se.height,0,ue,ve,se.data);x.generateMipmaps=!1}else Oe?(We&&i.texStorage2D(e.TEXTURE_2D,F,Pe,B.width,B.height),rt&&re(x,B,ue,ve)):i.texImage2D(e.TEXTURE_2D,0,Pe,B.width,B.height,0,ue,ve,B.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Oe&&We&&i.texStorage3D(e.TEXTURE_2D_ARRAY,F,Pe,Ue[0].width,Ue[0].height,B.depth);for(let $=0,ie=Ue.length;$<ie;$++)if(se=Ue[$],x.format!==ei)if(ue!==null)if(Oe){if(rt)if(x.layerUpdates.size>0){let Se=Lh(se.width,se.height,x.format,x.type);for(let Ie of x.layerUpdates){let ne=se.data.subarray(Ie*Se/se.data.BYTES_PER_ELEMENT,(Ie+1)*Se/se.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,Ie,se.width,se.height,1,ue,ne)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,se.width,se.height,B.depth,ue,se.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,$,Pe,se.width,se.height,B.depth,0,se.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?rt&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,se.width,se.height,B.depth,ue,ve,se.data):i.texImage3D(e.TEXTURE_2D_ARRAY,$,Pe,se.width,se.height,B.depth,0,ue,ve,se.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Oe&&We&&i.texStorage2D(e.TEXTURE_2D,F,Pe,Ue[0].width,Ue[0].height);for(let $=0,ie=Ue.length;$<ie;$++)se=Ue[$],x.format!==ei?ue!==null?Oe?rt&&i.compressedTexSubImage2D(e.TEXTURE_2D,$,0,0,se.width,se.height,ue,se.data):i.compressedTexImage2D(e.TEXTURE_2D,$,Pe,se.width,se.height,0,se.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?rt&&i.texSubImage2D(e.TEXTURE_2D,$,0,0,se.width,se.height,ue,ve,se.data):i.texImage2D(e.TEXTURE_2D,$,Pe,se.width,se.height,0,ue,ve,se.data)}else if(x.isDataArrayTexture)if(Oe){if(We&&i.texStorage3D(e.TEXTURE_2D_ARRAY,F,Pe,B.width,B.height,B.depth),rt)if(x.layerUpdates.size>0){let $=Lh(B.width,B.height,x.format,x.type);for(let ie of x.layerUpdates){let Se=B.data.subarray(ie*$/B.data.BYTES_PER_ELEMENT,(ie+1)*$/B.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ie,B.width,B.height,1,ue,ve,Se)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,ue,ve,B.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Pe,B.width,B.height,B.depth,0,ue,ve,B.data);else if(x.isData3DTexture)Oe?(We&&i.texStorage3D(e.TEXTURE_3D,F,Pe,B.width,B.height,B.depth),rt&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,ue,ve,B.data)):i.texImage3D(e.TEXTURE_3D,0,Pe,B.width,B.height,B.depth,0,ue,ve,B.data);else if(x.isFramebufferTexture){if(We)if(Oe)i.texStorage2D(e.TEXTURE_2D,F,Pe,B.width,B.height);else{let $=B.width,ie=B.height;for(let Se=0;Se<F;Se++)i.texImage2D(e.TEXTURE_2D,Se,Pe,$,ie,0,ue,ve,null),$>>=1,ie>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){let $=e.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),B.parentNode!==$){$.appendChild(B),d.add(x),$.onpaint=ie=>{let Se=ie.changedElements;for(let Ie of d)Se.includes(Ie.image)&&(Ie.needsUpdate=!0)},$.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,B);else{let ie=e.RGBA,Se=e.RGBA,Ie=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ie,Se,Ie,B)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Oe&&We){let $=Ke(Ue[0]);i.texStorage2D(e.TEXTURE_2D,F,Pe,$.width,$.height)}for(let $=0,ie=Ue.length;$<ie;$++)se=Ue[$],Oe?rt&&i.texSubImage2D(e.TEXTURE_2D,$,0,0,ue,ve,se):i.texImage2D(e.TEXTURE_2D,$,Pe,ue,ve,se);x.generateMipmaps=!1}else if(Oe){if(We){let $=Ke(B);i.texStorage2D(e.TEXTURE_2D,F,Pe,$.width,$.height)}rt&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ue,ve,B)}else i.texImage2D(e.TEXTURE_2D,0,Pe,ue,ve,B);f(x)&&S(W),me.__version=pe.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function we(R,x,U){if(x.image.length!==6)return;let W=j(R,x),K=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+U);let pe=r.get(K);if(K.version!==pe.__version||W===!0){i.activeTexture(e.TEXTURE0+U);let me=et.getPrimaries(et.workingColorSpace),B=x.colorSpace===Vi?null:et.getPrimaries(x.colorSpace),ue=x.colorSpace===Vi||me===B?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let ve=x.isCompressedTexture||x.image[0].isCompressedTexture,Pe=x.image[0]&&x.image[0].isDataTexture,se=[];for(let ne=0;ne<6;ne++)!ve&&!Pe?se[ne]=m(x.image[ne],!0,a.maxCubemapSize):se[ne]=Pe?x.image[ne].image:x.image[ne],se[ne]=Qe(x,se[ne]);let Ue=se[0],Oe=n.convert(x.format,x.colorSpace),We=n.convert(x.type),rt=v(x.internalFormat,Oe,We,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,$=pe.__version===void 0||W===!0,ie=K.dataReady,Se=A(x,Ue);Ce(e.TEXTURE_CUBE_MAP,x);let Ie;if(ve){F&&$&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Se,rt,Ue.width,Ue.height);for(let ne=0;ne<6;ne++){Ie=se[ne].mipmaps;for(let Me=0;Me<Ie.length;Me++){let Ge=Ie[Me];x.format!==ei?Oe!==null?F?ie&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,Ge.width,Ge.height,Oe,Ge.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,rt,Ge.width,Ge.height,0,Ge.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,Ge.width,Ge.height,Oe,We,Ge.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,rt,Ge.width,Ge.height,0,Oe,We,Ge.data)}}}else{if(Ie=x.mipmaps,F&&$){Ie.length>0&&Se++;let ne=Ke(se[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Se,rt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Pe){F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,se[ne].width,se[ne].height,Oe,We,se[ne].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,rt,se[ne].width,se[ne].height,0,Oe,We,se[ne].data);for(let Me=0;Me<Ie.length;Me++){let Ge=Ie[Me].image[ne].image;F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,Ge.width,Ge.height,Oe,We,Ge.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,rt,Ge.width,Ge.height,0,Oe,We,Ge.data)}}else{F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Oe,We,se[ne]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,rt,Oe,We,se[ne]);for(let Me=0;Me<Ie.length;Me++){let Ge=Ie[Me];F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,Oe,We,Ge.image[ne]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,rt,Oe,We,Ge.image[ne])}}}f(x)&&S(e.TEXTURE_CUBE_MAP),pe.__version=K.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ce(R,x,U,W,K,pe){let me=n.convert(U.format,U.colorSpace),B=n.convert(U.type),ue=v(U.internalFormat,me,B,U.normalized,U.colorSpace),ve=r.get(x),Pe=r.get(U);if(Pe.__renderTarget=x,!ve.__hasExternalTextures){let se=Math.max(1,x.width>>pe),Ue=Math.max(1,x.height>>pe);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?i.texImage3D(K,pe,ue,se,Ue,x.depth,0,me,B,null):i.texImage2D(K,pe,ue,se,Ue,0,me,B,null)}i.bindFramebuffer(e.FRAMEBUFFER,R),L(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,W,K,Pe.__webglTexture,0,Fe(x)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,W,K,Pe.__webglTexture,pe),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Xe(R,x,U){if(e.bindRenderbuffer(e.RENDERBUFFER,R),x.depthBuffer){let W=x.depthTexture,K=W&&W.isDepthTexture?W.type:null,pe=T(x.stencilBuffer,K),me=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;L(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Fe(x),pe,x.width,x.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,Fe(x),pe,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,pe,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,me,e.RENDERBUFFER,R)}else{let W=x.textures;for(let K=0;K<W.length;K++){let pe=W[K],me=n.convert(pe.format,pe.colorSpace),B=n.convert(pe.type),ue=v(pe.internalFormat,me,B,pe.normalized,pe.colorSpace);L(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Fe(x),ue,x.width,x.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,Fe(x),ue,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,ue,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Q(R,x,U){let W=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=r.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),Ce(e.TEXTURE_CUBE_MAP,x.depthTexture);let ve=n.convert(x.depthTexture.format),Pe=n.convert(x.depthTexture.type),se;x.depthTexture.format===Pi?se=e.DEPTH_COMPONENT24:x.depthTexture.format===lr&&(se=e.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,se,x.width,x.height,0,ve,Pe,null)}}else le(x.depthTexture,0);let pe=K.__webglTexture,me=Fe(x),B=W?e.TEXTURE_CUBE_MAP_POSITIVE_X+U:e.TEXTURE_2D,ue=x.depthTexture.format===lr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===Pi)L(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ue,B,pe,0,me):e.framebufferTexture2D(e.FRAMEBUFFER,ue,B,pe,0);else if(x.depthTexture.format===lr)L(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ue,B,pe,0,me):e.framebufferTexture2D(e.FRAMEBUFFER,ue,B,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function J(R){let x=r.get(R),U=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=W}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let W=0;W<6;W++)Q(x.__webglFramebuffer[W],R,W);else{let W=R.texture.mipmaps;W&&W.length>0?Q(x.__webglFramebuffer[0],R,0):Q(x.__webglFramebuffer,R,0)}else if(U){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=e.createRenderbuffer(),Xe(x.__webglDepthbuffer[W],R,!1);else{let K=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=x.__webglDepthbuffer[W];e.bindRenderbuffer(e.RENDERBUFFER,pe),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,pe)}}else{let W=R.texture.mipmaps;if(W&&W.length>0?i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Xe(x.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,pe),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,pe)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function ae(R,x,U){let W=r.get(R);x!==void 0&&ce(W.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&J(R)}function _e(R){let x=R.texture,U=r.get(R),W=r.get(x);R.addEventListener("dispose",g);let K=R.textures,pe=R.isWebGLCubeRenderTarget===!0,me=K.length>1;if(me||(W.__webglTexture===void 0&&(W.__webglTexture=e.createTexture()),W.__version=x.version,s.memory.textures++),pe){U.__webglFramebuffer=[];for(let B=0;B<6;B++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[B]=[];for(let ue=0;ue<x.mipmaps.length;ue++)U.__webglFramebuffer[B][ue]=e.createFramebuffer()}else U.__webglFramebuffer[B]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let B=0;B<x.mipmaps.length;B++)U.__webglFramebuffer[B]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(me)for(let B=0,ue=K.length;B<ue;B++){let ve=r.get(K[B]);ve.__webglTexture===void 0&&(ve.__webglTexture=e.createTexture(),s.memory.textures++)}if(R.samples>0&&L(R)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let B=0;B<K.length;B++){let ue=K[B];U.__webglColorRenderbuffer[B]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[B]);let ve=n.convert(ue.format,ue.colorSpace),Pe=n.convert(ue.type),se=v(ue.internalFormat,ve,Pe,ue.normalized,ue.colorSpace,R.isXRRenderTarget===!0),Ue=Fe(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ue,se,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+B,e.RENDERBUFFER,U.__webglColorRenderbuffer[B])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),Xe(U.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(pe){i.bindTexture(e.TEXTURE_CUBE_MAP,W.__webglTexture),Ce(e.TEXTURE_CUBE_MAP,x);for(let B=0;B<6;B++)if(x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)ce(U.__webglFramebuffer[B][ue],R,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+B,ue);else ce(U.__webglFramebuffer[B],R,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);f(x)&&S(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(me){for(let B=0,ue=K.length;B<ue;B++){let ve=K[B],Pe=r.get(ve),se=e.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(se,Pe.__webglTexture),Ce(se,ve),ce(U.__webglFramebuffer,R,ve,e.COLOR_ATTACHMENT0+B,se,0),f(ve)&&S(se)}i.unbindTexture()}else{let B=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(B=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(B,W.__webglTexture),Ce(B,x),x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)ce(U.__webglFramebuffer[ue],R,x,e.COLOR_ATTACHMENT0,B,ue);else ce(U.__webglFramebuffer,R,x,e.COLOR_ATTACHMENT0,B,0);f(x)&&S(B),i.unbindTexture()}R.depthBuffer&&J(R)}function xe(R){let x=R.textures;for(let U=0,W=x.length;U<W;U++){let K=x[U];if(f(K)){let pe=E(R),me=r.get(K).__webglTexture;i.bindTexture(pe,me),S(pe),i.unbindTexture()}}}let Ae=[],De=[];function ke(R){if(R.samples>0){if(L(R)===!1){let x=R.textures,U=R.width,W=R.height,K=e.COLOR_BUFFER_BIT,pe=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,me=r.get(R),B=x.length>1;if(B)for(let ve=0;ve<x.length;ve++)i.bindFramebuffer(e.FRAMEBUFFER,me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let ue=R.texture.mipmaps;ue&&ue.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),B){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,me.__webglColorRenderbuffer[ve]);let Pe=r.get(x[ve]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Pe,0)}e.blitFramebuffer(0,0,U,W,0,0,U,W,K,e.NEAREST),l===!0&&(Ae.length=0,De.length=0,Ae.push(e.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Ae.push(pe),De.push(pe),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,De)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ae))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),B)for(let ve=0;ve<x.length;ve++){i.bindFramebuffer(e.FRAMEBUFFER,me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,me.__webglColorRenderbuffer[ve]);let Pe=r.get(x[ve]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,Pe,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let x=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function Fe(R){return Math.min(a.maxSamples,R.samples)}function L(R){let x=r.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ct(R){let x=s.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function Qe(R,x){let U=R.colorSpace,W=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Ln&&U!==Vi&&(et.getTransfer(U)===nt?(W!==ei||K!==Yt)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",U)),x}function Ke(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=H,this.getTextureUnits=N,this.setTextureUnits=z,this.setTexture2D=le,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=ee,this.rebindTextures=ae,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=L,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function q_(e,t){function i(r,a=Vi){let n,s=et.getTransfer(a);if(r===Yt)return e.UNSIGNED_BYTE;if(r===Lo)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Do)return e.UNSIGNED_SHORT_5_5_5_1;if(r===dc)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===pc)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===cc)return e.BYTE;if(r===uc)return e.SHORT;if(r===Aa)return e.UNSIGNED_SHORT;if(r===Io)return e.INT;if(r===mi)return e.UNSIGNED_INT;if(r===di)return e.FLOAT;if(r===gi)return e.HALF_FLOAT;if(r===fc)return e.ALPHA;if(r===mc)return e.RGB;if(r===ei)return e.RGBA;if(r===Pi)return e.DEPTH_COMPONENT;if(r===lr)return e.DEPTH_STENCIL;if(r===gc)return e.RED;if(r===No)return e.RED_INTEGER;if(r===pr)return e.RG;if(r===Uo)return e.RG_INTEGER;if(r===Oo)return e.RGBA_INTEGER;if(r===bn||r===Sn||r===Tn||r===En)if(s===nt)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===bn)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===En)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===bn)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sn)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tn)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===En)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===js||r===qs||r===Ys||r===Zs)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===js)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qs)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ys)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zs)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$s||r===Ks||r===Js||r===Qs||r===eo||r===Cn||r===to)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===$s||r===Ks)return s===nt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Js)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===Qs)return n.COMPRESSED_R11_EAC;if(r===eo)return n.COMPRESSED_SIGNED_R11_EAC;if(r===Cn)return n.COMPRESSED_RG11_EAC;if(r===to)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===io||r===ro||r===ao||r===no||r===so||r===oo||r===lo||r===ho||r===co||r===uo||r===po||r===fo||r===mo||r===go)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===io)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ro)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ao)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===no)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===so)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===oo)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lo)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ho)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===co)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uo)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===po)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fo)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mo)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===go)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vo||r===_o||r===yo)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===vo)return s===nt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_o)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yo)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xo||r===Mo||r===Pn||r===bo)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===xo)return n.COMPRESSED_RED_RGTC1_EXT;if(r===Mo)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bo)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ra?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}function Q_(e,t){function i(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,su(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,S,E,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?n(m,f):f.isMeshLambertMaterial?(n(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(n(m,f),d(m,f)):f.isMeshPhongMaterial?(n(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(n(m,f),c(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(n(m,f),_(m,f)):f.isMeshDepthMaterial?n(m,f):f.isMeshDistanceMaterial?(n(m,f),y(m,f)):f.isMeshNormalMaterial?n(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,E):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,i(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Vt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,i(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Vt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,i(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,i(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=t.get(f),E=S.envMap,v=S.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(J_.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(vu),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=E*.5,f.map&&(m.map.value=f.map,i(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function c(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function ey(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let A=T.program;r.uniformBlockBinding(v,A)}function h(v,T){let A=a[v.id];A===void 0&&(m(v),A=u(v),a[v.id]=A,v.addEventListener("dispose",S));let w=T.program;r.updateUBOMapping(v,w);let g=t.render.frame;n[v.id]!==g&&(c(v),n[v.id]=g)}function u(v){let T=d();v.__bindingPointIndex=T;let A=e.createBuffer(),w=v.__size,g=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,w,g),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,A),A}function d(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(v){let T=a[v.id],A=v.uniforms,w=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let g=0,M=A.length;g<M;g++){let D=A[g];if(Array.isArray(D))for(let P=0,I=D.length;P<I;P++)p(D[P],g,P,w);else p(D,g,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(v,T,A,w){if(y(v,T,A,w)===!0){let g=v.__offset,M=v.value;if(Array.isArray(M)){let D=0;for(let P=0;P<M.length;P++){let I=M[P],H=f(I);_(I,v.__data,D),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(D+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(M,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,g,v.__data)}}function _(v,T,A){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,A)}function y(v,T,A,w){let g=v.value,M=T+"_"+A;if(w[M]===void 0)return typeof g=="number"||typeof g=="boolean"?w[M]=g:ArrayBuffer.isView(g)?w[M]=g.slice():w[M]=g.clone(),!0;{let D=w[M];if(typeof g=="number"||typeof g=="boolean"){if(D!==g)return w[M]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(D.equals(g)===!1)return D.copy(g),!0}}return!1}function m(v){let T=v.uniforms,A=0,w=16;for(let M=0,D=T.length;M<D;M++){let P=Array.isArray(T[M])?T[M]:[T[M]];for(let I=0,H=P.length;I<H;I++){let N=P[I],z=Array.isArray(N.value)?N.value:[N.value];for(let Z=0,k=z.length;Z<k;Z++){let le=z[Z],q=f(le),Y=A%w,ee=Y%q.boundary,he=Y+ee;A+=ee,he!==0&&w-he<q.storage&&(A+=w-he),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=A,A+=q.storage}}}let g=A%w;return g>0&&(A+=w-g),v.__size=A,v.__cache={},this}function f(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",v),T}function S(v){let T=v.target;T.removeEventListener("dispose",S);let A=s.indexOf(T.__bindingPointIndex);s.splice(A,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete n[T.id]}function E(){for(let v in a)e.deleteBuffer(a[v]);s=[],a={},n={}}return{bind:l,update:h,dispose:E}}function iy(){return ci===null&&(ci=new wp(ty,16,16,pr,gi),ci.name="DFG_LUT",ci.minFilter=Dt,ci.magFilter=Dt,ci.wrapS=wi,ci.wrapT=wi,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}var ad,Hl,nd,Mn,sd,ya,Ci,Vt,Ei,Ai,ba,Wl,Xl,jl,od,Br,ld,hd,cd,ud,dd,pd,fd,md,ec,tc,gd,vd,_d,yd,xd,Md,bd,Sd,Td,Fs,Bs,zs,wa,Gs,Vs,ks,Hs,ic,Ed,wd,pi,rc,ac,nc,sc,oc,lc,Po,hc,dr,Jr,es,ts,On,Ws,wi,Xs,Ct,Ad,qa,Dt,is,or,Yt,cc,uc,Aa,Io,mi,di,gi,Lo,Do,Ra,dc,pc,fc,mc,ei,Pi,lr,gc,No,pr,Uo,Oo,bn,Sn,Tn,En,js,qs,Ys,Zs,$s,Ks,Js,Qs,eo,Cn,to,io,ro,ao,no,so,oo,lo,ho,co,uo,po,fo,mo,go,vo,_o,yo,xo,Mo,Pn,bo,In,So,rs,ql,Yl,Zl,$l,Rd,Kl,Cd,Vi,Lt,Ln,Dn,nt,as,Pd,Id,Ld,Dd,Fo,Nd,Ud,Bo,Od,Fd,Jl,ti,Nn,Ql,Qr,kd,mr,Pt,th,Xr,Pa,ki,qr,oe,ri,Yr,C,ns,ih,Zr,qe,ss,rh,ah,et,Sr,sp,op,Go,lp,ls,$t,$r,ft,hp,ii,_c,cp,ur,Ze,Tr,Kt,up,dp,Ui,Ya,Ht,nh,sh,ea,Vo,pp,oh,Er,xi,Za,pa,fp,mp,lh,hh,ch,uh,gp,wr,hs,Ii,hr,vp,cs,xc,Oi,$a,it,It,ko,Ho,Jt,Mi,ds,bi,Ar,Rr,dh,ps,fs,ms,gs,vs,_s,Gr,Hi,Si,Qt,Ka,Cr,Pr,Ir,Fi,Bi,ir,fa,Ja,Qa,rr,Ey,St,en,yp,fi,bc,Sc,He,xp,ma,xs,Wi,Mp,qt,Ms,Lr,Wt,ga,Rt,_t,wy,bs,bp,Sp,Gi,Tp,Fn,Ay,Ry,Cy,Py,Iy,Ly,Dy,Ny,Uy,Oy,Fy,By,zy,Gy,Ti,Ss,tn,rn,Oa,Ec,ph,ar,an,fh,nn,sn,on,Ts,ln,mh,hn,kt,Vy,ky,Hy,Wy,Xy,jy,qy,Yy,Zy,wp,$y,Ky,Jy,Qy,ex,tx,ix,rx,nr,Ap,un,Ia,gh,Rp,Cp,ax,nx,sx,ox,lx,hx,cx,ux,dx,px,fx,mx,gx,vx,_x,yx,xx,Mx,bx,Sx,Tx,Ex,wx,Ax,Ac,La,Pp,Rc,Fa,Ip,Lp,Lc,Dp,Ba,Np,dn,pn,Es,fn,Up,vi,Wo,Op,vh,_h,ws,As,Rs,Fp,Fc,Xp,Bc,jp,zc,Gc,Vc,Un,qp,xh,kc,df,cr,pf,ff,gf,vf,_f,za,yf,xf,bf,Sf,Tf,Ef,wf,Af,Rx,Cf,Pf,If,Zt,Lf,Df,Nf,Ga,Uf,Of,Ff,Bf,_i,Va,Vf,kf,Hf,lu,ka,Wf,Ps,Xf,jf,jo,Nr,qf,qo,Cx,Px,Ix,vn,_n,hi,Yo,zi,Rh,Ch,Gt,hu,Lx,Dx,Nx,Ur,Or,Yf,Zf,Zo,Ux,Ox,Fx,Bx,zx,Gx,Vx,kx,Hx,$o,Kf,Ko,Jf,Qf,em,tm,im,rm,am,nm,vt,Wx,Ph,Jo,Kr,Xx,jx,qx,Yx,Zx,$x,Kx,Jx,Qx,e1,t1,i1,r1,a1,n1,s1,o1,l1,h1,c1,u1,d1,p1,lm,hm,cm,um,dm,pm,fm,mm,gm,vm,_m,ym,xm,Mm,bm,Sm,Tm,Em,wm,Am,Rm,Cm,Pm,Im,Lm,Dm,Nm,Um,Om,Fm,Bm,zm,Gm,Vm,km,Hm,Wm,Xm,jm,qm,Ym,Zm,$m,Km,Jm,Qm,eg,tg,ig,rg,ag,ng,sg,og,lg,hg,cg,ug,dg,pg,fg,mg,gg,vg,_g,yg,xg,Mg,bg,Sg,Tg,Eg,wg,Ag,Rg,Cg,Pg,Ig,Lg,Dg,Ng,Ug,Og,Fg,Bg,zg,Gg,Vg,kg,Hg,Wg,Xg,jg,qg,Yg,Zg,$g,Kg,Jg,Qg,e0,t0,i0,r0,a0,n0,s0,o0,l0,h0,c0,u0,d0,p0,f0,m0,g0,v0,_0,y0,x0,M0,b0,S0,T0,E0,w0,A0,R0,C0,P0,I0,L0,D0,N0,U0,O0,F0,B0,z0,G0,V0,Ye,ge,ui,yn,k0,uu,Hr,Y0,Z0,$0,va,Dh,Is,Ls,Ds,Ns,K0,sr,Ao,du,lv,pu,Ro,fu,mu,gu,Fh,Bh,zh,Gh,Vh,$v,Kv,Jv,Us,Rn,e_,t_,Wh,n_,xn,u_,d_,f_,g_,__,x_,b_,w_,A_,R_,O_,G_,V_,k_,H_,Qh,_a,Os,Y_,Z_,$_,K_,J_,vu,ty,ci,Qo,f1,el=pl(()=>{ad=0,Hl=1,nd=2,Mn=1,sd=2,ya=3,Ci=0,Vt=1,Ei=2,Ai=0,ba=1,Wl=2,Xl=3,jl=4,od=5,Br=100,ld=101,hd=102,cd=103,ud=104,dd=200,pd=201,fd=202,md=203,ec=204,tc=205,gd=206,vd=207,_d=208,yd=209,xd=210,Md=211,bd=212,Sd=213,Td=214,Fs=0,Bs=1,zs=2,wa=3,Gs=4,Vs=5,ks=6,Hs=7,ic=0,Ed=1,wd=2,pi=0,rc=1,ac=2,nc=3,sc=4,oc=5,lc=6,Po=7,hc=300,dr=301,Jr=302,es=303,ts=304,On=306,Ws=1e3,wi=1001,Xs=1002,Ct=1003,Ad=1004,qa=1005,Dt=1006,is=1007,or=1008,Yt=1009,cc=1010,uc=1011,Aa=1012,Io=1013,mi=1014,di=1015,gi=1016,Lo=1017,Do=1018,Ra=1020,dc=35902,pc=35899,fc=1021,mc=1022,ei=1023,Pi=1026,lr=1027,gc=1028,No=1029,pr=1030,Uo=1031,Oo=1033,bn=33776,Sn=33777,Tn=33778,En=33779,js=35840,qs=35841,Ys=35842,Zs=35843,$s=36196,Ks=37492,Js=37496,Qs=37488,eo=37489,Cn=37490,to=37491,io=37808,ro=37809,ao=37810,no=37811,so=37812,oo=37813,lo=37814,ho=37815,co=37816,uo=37817,po=37818,fo=37819,mo=37820,go=37821,vo=36492,_o=36494,yo=36495,xo=36283,Mo=36284,Pn=36285,bo=36286,In=2300,So=2301,rs=2302,ql=2303,Yl=2400,Zl=2401,$l=2402,Rd=3200,Kl=0,Cd=1,Vi="",Lt="srgb",Ln="srgb-linear",Dn="linear",nt="srgb",as=7680,Pd=519,Id=512,Ld=513,Dd=514,Fo=515,Nd=516,Ud=517,Bo=518,Od=519,Fd=35044,Jl="300 es",ti=2e3,Nn=2001;Ql={},Qr=null;kd={[Fs]:Bs,[zs]:ks,[Gs]:Hs,[wa]:Vs,[Bs]:Fs,[ks]:zs,[Hs]:Gs,[Vs]:wa},mr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],th=1234567,Xr=Math.PI/180,Pa=180/Math.PI;ki={DEG2RAD:Xr,RAD2DEG:Pa,generateUUID:gr,clamp:$e,euclideanModulo:zo,mapLinear:Hd,inverseLerp:Wd,lerp:Sa,damp:Xd,pingpong:jd,smoothstep:qd,smootherstep:Yd,randInt:Zd,randFloat:$d,randFloatSpread:Kd,seededRandom:Jd,degToRad:Qd,radToDeg:ep,isPowerOfTwo:tp,ceilPowerOfTwo:ip,floorPowerOfTwo:rp,setQuaternionFromProperEuler:ap,normalize:Ut,denormalize:zr},oe=(qr=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=$e(this.x,t.x,i.x),this.y=$e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=$e(this.x,t,i),this.y=$e(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar($e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos($e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qr.prototype.isVector2=!0,qr),ri=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],d=a[n+0],c=a[n+1],p=a[n+2],_=a[n+3];if(u!==_||o!==d||l!==c||h!==p){let y=o*d+l*c+h*p+u*_;y<0&&(d=-d,c=-c,p=-p,_=-_,y=-y);let m=1-s;if(y<.9995){let f=Math.acos(y),S=Math.sin(f);m=Math.sin(m*f)/S,s=Math.sin(s*f)/S,o=o*m+d*s,l=l*m+c*s,h=h*m+p*s,u=u*m+_*s}else{o=o*m+d*s,l=l*m+c*s,h=h*m+p*s,u=u*m+_*s;let f=1/Math.sqrt(o*o+l*l+h*h+u*u);o*=f,l*=f,h*=f,u*=f}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],u=a[n],d=a[n+1],c=a[n+2],p=a[n+3];return e[t]=s*p+h*u+o*c-l*d,e[t+1]=o*p+h*d+l*u-s*c,e[t+2]=l*p+h*c+s*d-o*u,e[t+3]=h*p-s*u-o*d-l*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),u=s(a/2),d=o(i/2),c=o(r/2),p=o(a/2);switch(n){case"XYZ":this._x=d*h*u+l*c*p,this._y=l*c*u-d*h*p,this._z=l*h*p+d*c*u,this._w=l*h*u-d*c*p;break;case"YXZ":this._x=d*h*u+l*c*p,this._y=l*c*u-d*h*p,this._z=l*h*p-d*c*u,this._w=l*h*u+d*c*p;break;case"ZXY":this._x=d*h*u-l*c*p,this._y=l*c*u+d*h*p,this._z=l*h*p+d*c*u,this._w=l*h*u-d*c*p;break;case"ZYX":this._x=d*h*u-l*c*p,this._y=l*c*u+d*h*p,this._z=l*h*p-d*c*u,this._w=l*h*u+d*c*p;break;case"YZX":this._x=d*h*u+l*c*p,this._y=l*c*u+d*h*p,this._z=l*h*p-d*c*u,this._w=l*h*u-d*c*p;break;case"XZY":this._x=d*h*u-l*c*p,this._y=l*c*u-d*h*p,this._z=l*h*p+d*c*u,this._w=l*h*u+d*c*p;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],u=t[10],d=i+s+u;if(d>0){let c=.5/Math.sqrt(d+1);this._w=.25/c,this._x=(h-o)*c,this._y=(a-l)*c,this._z=(n-r)*c}else if(i>s&&i>u){let c=2*Math.sqrt(1+i-s-u);this._w=(h-o)/c,this._x=.25*c,this._y=(r+n)/c,this._z=(a+l)/c}else if(s>u){let c=2*Math.sqrt(1+s-i-u);this._w=(a-l)/c,this._x=(r+n)/c,this._y=.25*c,this._z=(o+h)/c}else{let c=2*Math.sqrt(1+u-i-s);this._w=(n-r)/c,this._x=(a+l)/c,this._y=(o+h)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),h=Math.sin(l);o=Math.sin(o*l)/h,t=Math.sin(t*l)/h,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=(Yr=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(ih.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(ih.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*r),u=2*(o*i-n*a),d=2*(n*r-s*i);return this.x=i+l*h+s*d-o*u,this.y=r+l*u+o*h-n*d,this.z=a+l*d+n*u-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=$e(this.x,t.x,i.x),this.y=$e(this.y,t.y,i.y),this.z=$e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=$e(this.x,t,i),this.y=$e(this.y,t,i),this.z=$e(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar($e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ns.copy(this).projectOnVector(t),this.sub(ns)}reflect(t){return this.sub(ns.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos($e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yr.prototype.isVector3=!0,Yr),ns=new C,ih=new ri,qe=(Zr=class{constructor(t,i,r,a,n,s,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h)}set(t,i,r,a,n,s,o,l,h){let u=this.elements;return u[0]=t,u[1]=a,u[2]=o,u[3]=i,u[4]=n,u[5]=l,u[6]=r,u[7]=s,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],u=r[4],d=r[7],c=r[2],p=r[5],_=r[8],y=a[0],m=a[3],f=a[6],S=a[1],E=a[4],v=a[7],T=a[2],A=a[5],w=a[8];return n[0]=s*y+o*S+l*T,n[3]=s*m+o*E+l*A,n[6]=s*f+o*v+l*w,n[1]=h*y+u*S+d*T,n[4]=h*m+u*E+d*A,n[7]=h*f+u*v+d*w,n[2]=c*y+p*S+_*T,n[5]=c*m+p*E+_*A,n[8]=c*f+p*v+_*w,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8];return i*s*u-i*o*h-r*n*u+r*o*l+a*n*h-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8],d=u*s-o*h,c=o*l-u*n,p=h*n-s*l,_=i*d+r*c+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=d*y,t[1]=(a*h-u*r)*y,t[2]=(o*r-a*s)*y,t[3]=c*y,t[4]=(u*i-a*l)*y,t[5]=(a*n-o*i)*y,t[6]=p*y,t[7]=(r*l-h*i)*y,t[8]=(s*i-r*n)*y,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(t,i){return Wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ss.makeScale(t,i)),this}rotate(t){return Wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ss.makeRotation(-t)),this}translate(t,i){return Wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ss.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Zr.prototype.isMatrix3=!0,Zr),ss=new qe,rh=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et=np();sp=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Sr===void 0&&(Sr=Ca("canvas")),Sr.width=e.width,Sr.height=e.height;let r=Sr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Sr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ca("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Ri(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},op=0,Go=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=gr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(os(r[n].image)):a.push(os(r[n]))}else a=os(r);i.url=a}return t||(e.images[this.uuid]=i),i}};lp=0,ls=new C,$t=class wn extends mr{constructor(t=wn.DEFAULT_IMAGE,i=wn.DEFAULT_MAPPING,r=wi,a=wi,n=Dt,s=or,o=ei,l=Yt,h=wn.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=gr(),this.name="",this.source=new Go(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ls).x}get height(){return this.source.getSize(ls).y}get depth(){return this.source.getSize(ls).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){ze(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){ze(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ws:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case Xs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ws:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case Xs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=hc;$t.DEFAULT_ANISOTROPY=1;ft=($r=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],u=s[1],d=s[5],c=s[9],p=s[2],_=s[6],y=s[10];if(Math.abs(l-u)<.01&&Math.abs(h-p)<.01&&Math.abs(c-_)<.01){if(Math.abs(l+u)<.1&&Math.abs(h+p)<.1&&Math.abs(c+_)<.1&&Math.abs(o+d+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(o+1)/2,S=(d+1)/2,E=(y+1)/2,v=(l+u)/4,T=(h+p)/4,A=(c+_)/4;return f>S&&f>E?f<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(f),a=v/r,n=T/r):S>E?S<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(S),r=v/a,n=A/a):E<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(E),r=T/n,a=A/n),this.set(r,a,n,i),this}let m=Math.sqrt((_-c)*(_-c)+(h-p)*(h-p)+(u-l)*(u-l));return Math.abs(m)<.001&&(m=1),this.x=(_-c)/m,this.y=(h-p)/m,this.z=(u-l)/m,this.w=Math.acos((o+d+y-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=$e(this.x,t.x,i.x),this.y=$e(this.y,t.y,i.y),this.z=$e(this.z,t.z,i.z),this.w=$e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=$e(this.x,t,i),this.y=$e(this.y,t,i),this.z=$e(this.z,t,i),this.w=$e(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar($e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$r.prototype.isVector4=!0,$r),hp=class extends mr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new $t(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Go(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends hp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},_c=class extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},cp=class extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ze=(ur=class{constructor(t,i,r,a,n,s,o,l,h,u,d,c,p,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h,u,d,c,p,_,y,m)}set(t,i,r,a,n,s,o,l,h,u,d,c,p,_,y,m){let f=this.elements;return f[0]=t,f[4]=i,f[8]=r,f[12]=a,f[1]=n,f[5]=s,f[9]=o,f[13]=l,f[2]=h,f[6]=u,f[10]=d,f[14]=c,f[3]=p,f[7]=_,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ur().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/Tr.setFromMatrixColumn(t,0).length(),n=1/Tr.setFromMatrixColumn(t,1).length(),s=1/Tr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),u=Math.cos(n),d=Math.sin(n);if(t.order==="XYZ"){let c=s*u,p=s*d,_=o*u,y=o*d;i[0]=l*u,i[4]=-l*d,i[8]=h,i[1]=p+_*h,i[5]=c-y*h,i[9]=-o*l,i[2]=y-c*h,i[6]=_+p*h,i[10]=s*l}else if(t.order==="YXZ"){let c=l*u,p=l*d,_=h*u,y=h*d;i[0]=c+y*o,i[4]=_*o-p,i[8]=s*h,i[1]=s*d,i[5]=s*u,i[9]=-o,i[2]=p*o-_,i[6]=y+c*o,i[10]=s*l}else if(t.order==="ZXY"){let c=l*u,p=l*d,_=h*u,y=h*d;i[0]=c-y*o,i[4]=-s*d,i[8]=_+p*o,i[1]=p+_*o,i[5]=s*u,i[9]=y-c*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let c=s*u,p=s*d,_=o*u,y=o*d;i[0]=l*u,i[4]=_*h-p,i[8]=c*h+y,i[1]=l*d,i[5]=y*h+c,i[9]=p*h-_,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let c=s*l,p=s*h,_=o*l,y=o*h;i[0]=l*u,i[4]=y-c*d,i[8]=_*d+p,i[1]=d,i[5]=s*u,i[9]=-o*u,i[2]=-h*u,i[6]=p*d+_,i[10]=c-y*d}else if(t.order==="XZY"){let c=s*l,p=s*h,_=o*l,y=o*h;i[0]=l*u,i[4]=-d,i[8]=h*u,i[1]=c*d+y,i[5]=s*u,i[9]=p*d-_,i[2]=_*d-p,i[6]=o*u,i[10]=y*d+c}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(up,t,dp)}lookAt(t,i,r){let a=this.elements;return Ht.subVectors(t,i),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Ui.crossVectors(r,Ht),Ui.lengthSq()===0&&(Math.abs(r.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Ui.crossVectors(r,Ht)),Ui.normalize(),Ya.crossVectors(Ht,Ui),a[0]=Ui.x,a[4]=Ya.x,a[8]=Ht.x,a[1]=Ui.y,a[5]=Ya.y,a[9]=Ht.y,a[2]=Ui.z,a[6]=Ya.z,a[10]=Ht.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],u=r[1],d=r[5],c=r[9],p=r[13],_=r[2],y=r[6],m=r[10],f=r[14],S=r[3],E=r[7],v=r[11],T=r[15],A=a[0],w=a[4],g=a[8],M=a[12],D=a[1],P=a[5],I=a[9],H=a[13],N=a[2],z=a[6],Z=a[10],k=a[14],le=a[3],q=a[7],Y=a[11],ee=a[15];return n[0]=s*A+o*D+l*N+h*le,n[4]=s*w+o*P+l*z+h*q,n[8]=s*g+o*I+l*Z+h*Y,n[12]=s*M+o*H+l*k+h*ee,n[1]=u*A+d*D+c*N+p*le,n[5]=u*w+d*P+c*z+p*q,n[9]=u*g+d*I+c*Z+p*Y,n[13]=u*M+d*H+c*k+p*ee,n[2]=_*A+y*D+m*N+f*le,n[6]=_*w+y*P+m*z+f*q,n[10]=_*g+y*I+m*Z+f*Y,n[14]=_*M+y*H+m*k+f*ee,n[3]=S*A+E*D+v*N+T*le,n[7]=S*w+E*P+v*z+T*q,n[11]=S*g+E*I+v*Z+T*Y,n[15]=S*M+E*H+v*k+T*ee,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],u=t[2],d=t[6],c=t[10],p=t[14],_=t[3],y=t[7],m=t[11],f=t[15],S=l*p-h*c,E=o*p-h*d,v=o*c-l*d,T=s*p-h*u,A=s*c-l*u,w=s*d-o*u;return i*(y*S-m*E+f*v)-r*(_*S-m*T+f*A)+a*(_*E-y*T+f*w)-n*(_*v-y*A+m*w)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],u=t[10];return i*(s*u-o*h)-r*(n*u-o*l)+a*(n*h-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8],d=t[9],c=t[10],p=t[11],_=t[12],y=t[13],m=t[14],f=t[15],S=i*o-r*s,E=i*l-a*s,v=i*h-n*s,T=r*l-a*o,A=r*h-n*o,w=a*h-n*l,g=u*y-d*_,M=u*m-c*_,D=u*f-p*_,P=d*m-c*y,I=d*f-p*y,H=c*f-p*m,N=S*H-E*I+v*P+T*D-A*M+w*g;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/N;return t[0]=(o*H-l*I+h*P)*z,t[1]=(a*I-r*H-n*P)*z,t[2]=(y*w-m*A+f*T)*z,t[3]=(c*A-d*w-p*T)*z,t[4]=(l*D-s*H-h*M)*z,t[5]=(i*H-a*D+n*M)*z,t[6]=(m*v-_*w-f*E)*z,t[7]=(u*w-c*v+p*E)*z,t[8]=(s*I-o*D+h*g)*z,t[9]=(r*D-i*I-n*g)*z,t[10]=(_*A-y*v+f*S)*z,t[11]=(d*v-u*A-p*S)*z,t[12]=(o*M-s*P-l*g)*z,t[13]=(i*P-r*M+a*g)*z,t[14]=(y*E-_*T-m*S)*z,t[15]=(u*T-d*E+c*S)*z,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,h=n*s,u=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,u*o+r,u*l-a*s,0,h*l-a*o,u*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,u=s+s,d=o+o,c=n*h,p=n*u,_=n*d,y=s*u,m=s*d,f=o*d,S=l*h,E=l*u,v=l*d,T=r.x,A=r.y,w=r.z;return a[0]=(1-(y+f))*T,a[1]=(p+v)*T,a[2]=(_-E)*T,a[3]=0,a[4]=(p-v)*A,a[5]=(1-(c+f))*A,a[6]=(m+S)*A,a[7]=0,a[8]=(_+E)*w,a[9]=(m-S)*w,a[10]=(1-(c+y))*w,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=Tr.set(a[0],a[1],a[2]).length(),o=Tr.set(a[4],a[5],a[6]).length(),l=Tr.set(a[8],a[9],a[10]).length();n<0&&(s=-s),Kt.copy(this);let h=1/s,u=1/o,d=1/l;return Kt.elements[0]*=h,Kt.elements[1]*=h,Kt.elements[2]*=h,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=d,Kt.elements[9]*=d,Kt.elements[10]*=d,i.setFromRotationMatrix(Kt),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=ti,l=!1){let h=this.elements,u=2*n/(i-t),d=2*n/(r-a),c=(i+t)/(i-t),p=(r+a)/(r-a),_,y;if(l)_=n/(s-n),y=s*n/(s-n);else if(o===ti)_=-(s+n)/(s-n),y=-2*s*n/(s-n);else if(o===Nn)_=-s/(s-n),y=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=c,h[12]=0,h[1]=0,h[5]=d,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=_,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=ti,l=!1){let h=this.elements,u=2/(i-t),d=2/(r-a),c=-(i+t)/(i-t),p=-(r+a)/(r-a),_,y;if(l)_=1/(s-n),y=s/(s-n);else if(o===ti)_=-2/(s-n),y=-(s+n)/(s-n);else if(o===Nn)_=-1/(s-n),y=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=c,h[1]=0,h[5]=d,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=_,h[14]=y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},ur.prototype.isMatrix4=!0,ur),Tr=new C,Kt=new Ze,up=new C(0,0,0),dp=new C(1,1,1),Ui=new C,Ya=new C,Ht=new C,nh=new Ze,sh=new ri,ea=class yc{constructor(t=0,i=0,r=0,a=yc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],u=a[9],d=a[2],c=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nh,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return sh.setFromEuler(this),this.setFromQuaternion(sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ea.DEFAULT_ORDER="XYZ";Vo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},pp=0,oh=new C,Er=new ri,xi=new Ze,Za=new C,pa=new C,fp=new C,mp=new ri,lh=new C(1,0,0),hh=new C(0,1,0),ch=new C(0,0,1),uh={type:"added"},gp={type:"removed"},wr={type:"childadded",child:null},hs={type:"childremoved",child:null},Ii=class An extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();let t=new C,i=new ea,r=new ri,a=new C(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ze},normalMatrix:{value:new qe}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Er.setFromAxisAngle(t,i),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,i){return Er.setFromAxisAngle(t,i),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(lh,t)}rotateY(t){return this.rotateOnAxis(hh,t)}rotateZ(t){return this.rotateOnAxis(ch,t)}translateOnAxis(t,i){return oh.copy(t).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(lh,t)}translateY(t){return this.translateOnAxis(hh,t)}translateZ(t){return this.translateOnAxis(ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Za.copy(t):Za.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(pa,Za,this.up):xi.lookAt(Za,pa,this.up),this.quaternion.setFromRotationMatrix(xi),a&&(xi.extractRotation(a.matrixWorld),Er.setFromRotationMatrix(xi),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ve("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uh),wr.child=t,this.dispatchEvent(wr),wr.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(gp),hs.child=t,this.dispatchEvent(hs),hs.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uh),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,t,fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let d=l[h];n(t.shapes,d)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),u=s(t.images),d=s(t.shapes),c=s(t.skeletons),p=s(t.animations),_=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),c.length>0&&(r.skeletons=c),p.length>0&&(r.animations=p),_.length>0&&(r.nodes=_)}return r.object=a,r;function s(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ii.DEFAULT_UP=new C(0,1,0);Ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;hr=class extends Ii{constructor(){super(),this.isGroup=!0,this.type="Group"}},vp={type:"move"},cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let _ of e.hand.values()){let y=t.getJointPose(_,i),m=this._getHandJoint(l,_);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),c=.02,p=.005;l.inputState.pinching&&d>c+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=c-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(vp)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new hr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},$a={h:0,s:0,l:0};it=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=zo(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=us(n,a,e+1/3),this.g=us(n,a,e),this.b=us(n,a,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=Lt){function i(a){a!==void 0&&parseFloat(a)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let i=xc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return et.workingToColorSpace(It.copy(this),e),Math.round($e(It.r*255,0,255))*65536+Math.round($e(It.g*255,0,255))*256+Math.round($e(It.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(It.copy(this),t);let i=It.r,r=It.g,a=It.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let u=n-s;switch(l=h<=.5?u/(n+s):u/(2-n-s),n){case i:o=(r-a)/u+(r<a?6:0);break;case r:o=(a-i)/u+2;break;case a:o=(i-r)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Lt){et.workingToColorSpace(It.copy(this),e);let t=It.r,i=It.g,r=It.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL($a);let i=Sa(Oi.h,$a.h,t),r=Sa(Oi.s,$a.s,t),a=Sa(Oi.l,$a.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},It=new it;it.NAMES=xc;ko=class Mc{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new it(t),this.near=i,this.far=r}clone(){return new Mc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ho=class extends Ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ea,this.environmentIntensity=1,this.environmentRotation=new ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Jt=new C,Mi=new C,ds=new C,bi=new C,Ar=new C,Rr=new C,dh=new C,ps=new C,fs=new C,ms=new C,gs=new ft,vs=new ft,_s=new ft,Gr=class Vr{constructor(t=new C,i=new C,r=new C){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),Jt.subVectors(t,i),a.cross(Jt);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){Jt.subVectors(a,i),Mi.subVectors(r,i),ds.subVectors(t,i);let s=Jt.dot(Jt),o=Jt.dot(Mi),l=Jt.dot(ds),h=Mi.dot(Mi),u=Mi.dot(ds),d=s*h-o*o;if(d===0)return n.set(0,0,0),null;let c=1/d,p=(h*l-o*u)*c,_=(s*u-o*l)*c;return n.set(1-p-_,_,p)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,bi.x),l.addScaledVector(s,bi.y),l.addScaledVector(o,bi.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return gs.setScalar(0),vs.setScalar(0),_s.setScalar(0),gs.fromBufferAttribute(t,i),vs.fromBufferAttribute(t,r),_s.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(gs,n.x),s.addScaledVector(vs,n.y),s.addScaledVector(_s,n.z),s}static isFrontFacing(t,i,r,a){return Jt.subVectors(r,i),Mi.subVectors(t,i),Jt.cross(Mi).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jt.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Jt.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Vr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Vr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Vr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;Ar.subVectors(a,r),Rr.subVectors(n,r),ps.subVectors(t,r);let l=Ar.dot(ps),h=Rr.dot(ps);if(l<=0&&h<=0)return i.copy(r);fs.subVectors(t,a);let u=Ar.dot(fs),d=Rr.dot(fs);if(u>=0&&d<=u)return i.copy(a);let c=l*d-u*h;if(c<=0&&l>=0&&u<=0)return s=l/(l-u),i.copy(r).addScaledVector(Ar,s);ms.subVectors(t,n);let p=Ar.dot(ms),_=Rr.dot(ms);if(_>=0&&p<=_)return i.copy(n);let y=p*h-l*_;if(y<=0&&h>=0&&_<=0)return o=h/(h-_),i.copy(r).addScaledVector(Rr,o);let m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return dh.subVectors(n,a),o=(d-u)/(d-u+(p-_)),i.copy(a).addScaledVector(dh,o);let f=1/(m+y+c);return s=y*f,o=c*f,i.copy(r).addScaledVector(Ar,s).addScaledVector(Rr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hi=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,Qt):Qt.fromBufferAttribute(a,n),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ka.copy(i.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),Ja.subVectors(this.max,fa),Cr.subVectors(e.a,fa),Pr.subVectors(e.b,fa),Ir.subVectors(e.c,fa),Fi.subVectors(Pr,Cr),Bi.subVectors(Ir,Pr),ir.subVectors(Cr,Ir);let t=[0,-Fi.z,Fi.y,0,-Bi.z,Bi.y,0,-ir.z,ir.y,Fi.z,0,-Fi.x,Bi.z,0,-Bi.x,ir.z,0,-ir.x,-Fi.y,Fi.x,0,-Bi.y,Bi.x,0,-ir.y,ir.x,0];return!ys(t,Cr,Pr,Ir,Ja)||(t=[1,0,0,0,1,0,0,0,1],!ys(t,Cr,Pr,Ir,Ja))?!1:(Qa.crossVectors(Fi,Bi),t=[Qa.x,Qa.y,Qa.z],ys(t,Cr,Pr,Ir,Ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Si=[new C,new C,new C,new C,new C,new C,new C,new C],Qt=new C,Ka=new Hi,Cr=new C,Pr=new C,Ir=new C,Fi=new C,Bi=new C,ir=new C,fa=new C,Ja=new C,Qa=new C,rr=new C;Ey=_p();St=new C,en=new oe,yp=0,fi=class extends mr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fd,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXY(t,en.x,en.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array),a=Ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},bc=class extends fi{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Sc=class extends fi{constructor(e,t,i){super(new Uint32Array(e),t,i)}},He=class extends fi{constructor(e,t,i){super(new Float32Array(e),t,i)}},xp=new Hi,ma=new C,xs=new C,Wi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):xp.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);let t=ma.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(xs)),this.expandByPoint(ma.copy(e.center).sub(xs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mp=0,qt=new Ze,Ms=new Ii,Lr=new C,Wt=new Hi,ga=new Hi,Rt=new C,_t=class Tc extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bd(t)?Sc:bc)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new qe().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qt.makeRotationFromQuaternion(t),this.applyMatrix4(qt),this}rotateX(t){return qt.makeRotationX(t),this.applyMatrix4(qt),this}rotateY(t){return qt.makeRotationY(t),this.applyMatrix4(qt),this}rotateZ(t){return qt.makeRotationZ(t),this.applyMatrix4(qt),this}translate(t,i,r){return qt.makeTranslation(t,i,r),this.applyMatrix4(qt),this}scale(t,i,r){return qt.makeScale(t,i,r),this.applyMatrix4(qt),this}lookAt(t){return Ms.lookAt(t),Ms.updateMatrix(),this.applyMatrix4(Ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new He(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Wt.setFromBufferAttribute(n),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let r=this.boundingSphere.center;if(Wt.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];ga.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(Wt.min,ga.min),Wt.expandByPoint(Rt),Rt.addVectors(Wt.max,ga.max),Wt.expandByPoint(Rt)):(Wt.expandByPoint(ga.min),Wt.expandByPoint(ga.max))}Wt.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Rt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Rt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Rt.fromBufferAttribute(o,h),l&&(Lr.fromBufferAttribute(t,h),Rt.add(Lr)),a=Math.max(a,r.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new fi(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let g=0;g<r.count;g++)o[g]=new C,l[g]=new C;let h=new C,u=new C,d=new C,c=new oe,p=new oe,_=new oe,y=new C,m=new C;function f(g,M,D){h.fromBufferAttribute(r,g),u.fromBufferAttribute(r,M),d.fromBufferAttribute(r,D),c.fromBufferAttribute(n,g),p.fromBufferAttribute(n,M),_.fromBufferAttribute(n,D),u.sub(h),d.sub(h),p.sub(c),_.sub(c);let P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),o[g].add(y),o[M].add(y),o[D].add(y),l[g].add(m),l[M].add(m),l[D].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let g=0,M=S.length;g<M;++g){let D=S[g],P=D.start,I=D.count;for(let H=P,N=P+I;H<N;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let E=new C,v=new C,T=new C,A=new C;function w(g){T.fromBufferAttribute(a,g),A.copy(T);let M=o[g];E.copy(M),E.sub(T.multiplyScalar(T.dot(M))).normalize(),v.crossVectors(A,M);let D=v.dot(l[g])<0?-1:1;s.setXYZW(g,E.x,E.y,E.z,D)}for(let g=0,M=S.length;g<M;++g){let D=S[g],P=D.start,I=D.count;for(let H=P,N=P+I;H<N;H+=3)w(t.getX(H+0)),w(t.getX(H+1)),w(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new fi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let c=0,p=r.count;c<p;c++)r.setXYZ(c,0,0,0);let a=new C,n=new C,s=new C,o=new C,l=new C,h=new C,u=new C,d=new C;if(t)for(let c=0,p=t.count;c<p;c+=3){let _=t.getX(c+0),y=t.getX(c+1),m=t.getX(c+2);a.fromBufferAttribute(i,_),n.fromBufferAttribute(i,y),s.fromBufferAttribute(i,m),u.subVectors(s,n),d.subVectors(a,n),u.cross(d),o.fromBufferAttribute(r,_),l.fromBufferAttribute(r,y),h.fromBufferAttribute(r,m),o.add(u),l.add(u),h.add(u),r.setXYZ(_,o.x,o.y,o.z),r.setXYZ(y,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let c=0,p=i.count;c<p;c+=3)a.fromBufferAttribute(i,c+0),n.fromBufferAttribute(i,c+1),s.fromBufferAttribute(i,c+2),u.subVectors(s,n),d.subVectors(a,n),u.cross(d),r.setXYZ(c+0,u.x,u.y,u.z),r.setXYZ(c+1,u.x,u.y,u.z),r.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Rt.fromBufferAttribute(t,i),Rt.normalize(),t.setXYZ(i,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function t(o,l){let h=o.array,u=o.itemSize,d=o.normalized,c=new h.constructor(l.length*u),p=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let f=0;f<u;f++)c[_++]=h[p++]}return new fi(c,u,d)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Tc,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let u=0,d=h.length;u<d;u++){let c=h[u],p=t(c,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let d=0,c=h.length;d<c;d++){let p=h[d];u.push(p.toJSON(t.data))}u.length>0&&(a[l]=u,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let h in a){let u=a[h];this.setAttribute(h,u.clone(i))}let n=t.morphAttributes;for(let h in n){let u=[],d=n[h];for(let c=0,p=d.length;c<p;c++)u.push(d[c].clone(i));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,u=s.length;h<u;h++){let d=s[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},wy=new C,bs=new C,bp=new C,Sp=new qe,Gi=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=bs.subVectors(i,t).cross(bp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(bs),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Sp.getNormalMatrix(e),r=this.coplanarPoint(bs).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Tp=0,Fn=class extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=ba,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=tc,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Gi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new oe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ay=new C,Ry=new C,Cy=new C,Py=new oe,Iy=new oe,Ly=new Ze,Dy=new C,Ny=new C,Uy=new C,Oy=new oe,Fy=new oe,By=new oe,zy=new C,Gy=new C,Ti=new C,Ss=new C,tn=new C,rn=new C,Oa=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ss.copy(e).add(t).multiplyScalar(.5),tn.copy(t).sub(e).normalize(),rn.copy(this.origin).sub(Ss);let a=e.distanceTo(t)*.5,n=-this.direction.dot(tn),s=rn.dot(this.direction),o=-rn.dot(tn),l=rn.lengthSq(),h=Math.abs(1-n*n),u,d,c,p;if(h>0)if(u=n*o-s,d=n*s-o,p=a*h,u>=0)if(d>=-p)if(d<=p){let _=1/h;u*=_,d*=_,c=u*(u+n*d+2*s)+d*(n*u+d+2*o)+l}else d=a,u=Math.max(0,-(n*d+s)),c=-u*u+d*(d+2*o)+l;else d=-a,u=Math.max(0,-(n*d+s)),c=-u*u+d*(d+2*o)+l;else d<=-p?(u=Math.max(0,-(-n*a+s)),d=u>0?-a:Math.min(Math.max(-a,-o),a),c=-u*u+d*(d+2*o)+l):d<=p?(u=0,d=Math.min(Math.max(-a,-o),a),c=d*(d+2*o)+l):(u=Math.max(0,-(n*a+s)),d=u>0?a:Math.min(Math.max(-a,-o),a),c=-u*u+d*(d+2*o)+l);else d=n>0?-a:a,u=Math.max(0,-(n*d+s)),c=-u*u+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ss).addScaledVector(tn,d),c}intersectSphere(e,t){if(e.radius<0)return null;Ti.subVectors(e.center,this.origin);let i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,n=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,n=(e.min.y-d.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),u>=0?(s=(e.min.z-d.z)*u,o=(e.max.z-d.z)*u):(s=(e.max.z-d.z)*u,o=(e.min.z-d.z)*u),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,h=s.z,u=e.x-n.x,d=e.y-n.y,c=e.z-n.z,p=t.x-n.x,_=t.y-n.y,y=t.z-n.z,m=i.x-n.x,f=i.y-n.y,S=i.z-n.z,E=Math.abs(o),v=Math.abs(l),T=Math.abs(h),A,w,g,M,D,P,I,H,N,z,Z,k;if(E>=v&&E>=T?(g=o,P=u,N=p,k=m,o>=0?(A=l,w=h,M=d,D=c,I=_,H=y,z=f,Z=S):(A=h,w=l,M=c,D=d,I=y,H=_,z=S,Z=f)):v>=T?(g=l,P=d,N=_,k=f,l>=0?(A=h,w=o,M=c,D=u,I=y,H=p,z=S,Z=m):(A=o,w=h,M=u,D=c,I=p,H=y,z=m,Z=S)):(g=h,P=c,N=y,k=S,h>=0?(A=o,w=l,M=u,D=d,I=p,H=_,z=m,Z=f):(A=l,w=o,M=d,D=u,I=_,H=p,z=f,Z=m)),g===0)return null;let le=A/g,q=w/g,Y=1/g,ee=M-le*P,he=D-q*P,fe=I-le*N,je=H-q*N,Ce=z-le*k,j=Z-q*k,te=Ce*je-j*fe,re=ee*j-he*Ce,be=fe*he-je*ee;if(r){if(te<0||re<0||be<0)return null}else if((te<0||re<0||be<0)&&(te>0||re>0||be>0))return null;let we=te+re+be;if(we===0)return null;let ce=Y*(te*P+re*N+be*k);return(we>0?ce<0:ce>0)?null:this.at(ce/we,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ec=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ph=new Ze,ar=new Oa,an=new Wi,fh=new C,nn=new C,sn=new C,on=new C,Ts=new C,ln=new C,mh=new C,hn=new C,kt=class extends Ii{constructor(e=new _t,t=new Ec){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){ln.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],u=a[o];h!==0&&(Ts.fromBufferAttribute(u,e),n?ln.addScaledVector(Ts,h):ln.addScaledVector(Ts.sub(t),h))}t.add(ln)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),an.copy(i.boundingSphere),an.applyMatrix4(a),ar.copy(e.ray).recast(e.near),!(an.containsPoint(ar.origin)===!1&&(ar.intersectSphere(an,fh)===null||ar.origin.distanceToSquared(fh)>(e.far-e.near)**2))&&(ph.copy(a).invert(),ar.copy(e.ray).applyMatrix4(ph),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ar)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,c=a.drawRange;if(s!==null)if(Array.isArray(n))for(let p=0,_=d.length;p<_;p++){let y=d[p],m=n[y.materialIndex],f=Math.max(y.start,c.start),S=Math.min(s.count,Math.min(y.start+y.count,c.start+c.count));for(let E=f,v=S;E<v;E+=3){let T=s.getX(E),A=s.getX(E+1),w=s.getX(E+2);r=cn(this,m,e,i,l,h,u,T,A,w),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let p=Math.max(0,c.start),_=Math.min(s.count,c.start+c.count);for(let y=p,m=_;y<m;y+=3){let f=s.getX(y),S=s.getX(y+1),E=s.getX(y+2);r=cn(this,n,e,i,l,h,u,f,S,E),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let p=0,_=d.length;p<_;p++){let y=d[p],m=n[y.materialIndex],f=Math.max(y.start,c.start),S=Math.min(o.count,Math.min(y.start+y.count,c.start+c.count));for(let E=f,v=S;E<v;E+=3){let T=E,A=E+1,w=E+2;r=cn(this,m,e,i,l,h,u,T,A,w),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let p=Math.max(0,c.start),_=Math.min(o.count,c.start+c.count);for(let y=p,m=_;y<m;y+=3){let f=y,S=y+1,E=y+2;r=cn(this,n,e,i,l,h,u,f,S,E),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}};Vy=new ft,ky=new ft,Hy=new ft,Wy=new ft,Xy=new Ze,jy=new C,qy=new Wi,Yy=new Ze,Zy=new Oa,wp=class extends $t{constructor(e=null,t=1,i=1,r,a,n,s,o,l=Ct,h=Ct,u,d){super(null,n,s,o,l,h,r,a,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$y=new Ze,Ky=new Ze,Jy=new Ze,Qy=new Ze,ex=new Hi,tx=new Ze,ix=new kt,rx=new Wi,nr=new Wi,Ap=new oe(.5,.5),un=new C,Ia=class{constructor(e=new Gi,t=new Gi,i=new Gi,r=new Gi,a=new Gi,n=new Gi){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ti,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],h=a[4],u=a[5],d=a[6],c=a[7],p=a[8],_=a[9],y=a[10],m=a[11],f=a[12],S=a[13],E=a[14],v=a[15];if(r[0].setComponents(l-n,c-h,m-p,v-f).normalize(),r[1].setComponents(l+n,c+h,m+p,v+f).normalize(),r[2].setComponents(l+s,c+u,m+_,v+S).normalize(),r[3].setComponents(l-s,c-u,m-_,v-S).normalize(),i)r[4].setComponents(o,d,y,E).normalize(),r[5].setComponents(l-o,c-d,m-y,v-E).normalize();else if(r[4].setComponents(l-o,c-d,m-y,v-E).normalize(),t===ti)r[5].setComponents(l+o,c+d,m+y,v+E).normalize();else if(t===Nn)r[5].setComponents(o,d,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){nr.center.set(0,0,0);let t=Ap.distanceTo(e.center);return nr.radius=.7071067811865476+t,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(un.x=r.normal.x>0?e.max.x:e.min.x,un.y=r.normal.y>0?e.max.y:e.min.y,un.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(un)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},gh=new Ze,Rp=class wc{constructor(){this.coordinateSystem=ti,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new Ia),r[a].setFromProjectionMatrix(gh,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new Ia),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new wc().copy(this)}},Cp=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let a=this.pool,n=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let s=a[this.index];n.push(s),this.index++,s.start=e,s.count=t,s.z=i,s.index=r}reset(){this.list.length=0,this.index=0}},ax=new Ze,nx=new it(1,1,1),sx=new Ia,ox=new Rp,lx=new Hi,hx=new Wi,cx=new C,ux=new C,dx=new C,px=new Cp,fx=new kt,mx=new C,gx=new C,vx=new Ze,_x=new Oa,yx=new Wi,xx=new C,Mx=new C,bx=new C,Sx=new C,Tx=new Ze,Ex=new Oa,wx=new Wi,Ax=new C,Ac=class extends $t{constructor(e=[],t=dr,i,r,a,n,s,o,l,h){super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},La=class extends $t{constructor(e,t,i=mi,r,a,n,s=Ct,o=Ct,l,h=Pi,u=1){if(h!==Pi&&h!==lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Go(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Pp=class extends La{constructor(e,t=mi,i=dr,r,a,n=Ct,s=Ct,o,l=Pi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,a,n,s,o,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Rc=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fa=class Cc extends _t{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],u=[],d=[],c=0,p=0;_("z","y","x",-1,-1,r,i,t,s,n,0),_("z","y","x",1,-1,r,i,-t,s,n,1),_("x","z","y",1,1,t,r,i,a,s,2),_("x","z","y",1,-1,t,r,-i,a,s,3),_("x","y","z",1,-1,t,i,r,a,n,4),_("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new He(h,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(d,2));function _(y,m,f,S,E,v,T,A,w,g,M){let D=v/w,P=T/g,I=v/2,H=T/2,N=A/2,z=w+1,Z=g+1,k=0,le=0,q=new C;for(let Y=0;Y<Z;Y++){let ee=Y*P-H;for(let he=0;he<z;he++){let fe=he*D-I;q[y]=fe*S,q[m]=ee*E,q[f]=N,h.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[f]=A>0?1:-1,u.push(q.x,q.y,q.z),d.push(he/w),d.push(1-Y/g),k+=1}}for(let Y=0;Y<g;Y++)for(let ee=0;ee<w;ee++){let he=c+ee+z*Y,fe=c+ee+z*(Y+1),je=c+(ee+1)+z*(Y+1),Ce=c+(ee+1)+z*Y;l.push(he,fe,Ce),l.push(fe,je,Ce),le+=6}o.addGroup(p,le,M),p+=le,c+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ip=class Pc extends _t{constructor(t=1,i=1,r=4,a=8,n=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:r,radialSegments:a,heightSegments:n},i=Math.max(0,i),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),n=Math.max(1,Math.floor(n));let s=[],o=[],l=[],h=[],u=i/2,d=Math.PI/2*t,c=i,p=2*d+c,_=r*2+n,y=a+1,m=new C,f=new C;for(let S=0;S<=_;S++){let E=0,v=0,T=0,A=0;if(S<=r){let M=S/r,D=M*Math.PI/2;v=-u-t*Math.cos(D),T=t*Math.sin(D),A=-t*Math.cos(D),E=M*d}else if(S<=r+n){let M=(S-r)/n;v=-u+M*i,T=t,A=0,E=d+M*c}else{let M=(S-r-n)/r,D=M*Math.PI/2;v=u+t*Math.sin(D),T=t*Math.cos(D),A=t*Math.sin(D),E=d+c+M*d}let w=Math.max(0,Math.min(1,E/p)),g=0;S===0?g=.5/a:S===_&&(g=-.5/a);for(let M=0;M<=a;M++){let D=M/a,P=D*Math.PI*2,I=Math.sin(P),H=Math.cos(P);f.x=-T*H,f.y=v,f.z=T*I,o.push(f.x,f.y,f.z),m.set(-T*H,A,T*I),m.normalize(),l.push(m.x,m.y,m.z),h.push(D+g,w)}if(S>0){let M=(S-1)*y;for(let D=0;D<a;D++){let P=M+D,I=M+D+1,H=S*y+D,N=S*y+D+1;s.push(P,I,H),s.push(I,N,H)}}}this.setIndex(s),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(l,3)),this.setAttribute("uv",new He(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pc(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Lp=class Ic extends _t{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],h=new C,u=new oe;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,c=3;d<=i;d++,c+=3){let p=r+d/i*a;h.x=t*Math.cos(p),h.y=t*Math.sin(p),s.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(s[c]/t+1)/2,u.y=(s[c+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=i;d++)n.push(d,d+1,0);this.setIndex(n),this.setAttribute("position",new He(s,3)),this.setAttribute("normal",new He(o,3)),this.setAttribute("uv",new He(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ic(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Lc=class Dc extends _t{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let u=[],d=[],c=[],p=[],_=0,y=[],m=r/2,f=0;S(),s===!1&&(t>0&&E(!0),i>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new He(d,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(p,2));function S(){let v=new C,T=new C,A=0,w=(i-t)/r;for(let g=0;g<=n;g++){let M=[],D=g/n,P=D*(i-t)+t;for(let I=0;I<=a;I++){let H=I/a,N=H*l+o,z=Math.sin(N),Z=Math.cos(N);T.x=P*z,T.y=-D*r+m,T.z=P*Z,d.push(T.x,T.y,T.z),v.set(z,w,Z).normalize(),c.push(v.x,v.y,v.z),p.push(H,1-D),M.push(_++)}y.push(M)}for(let g=0;g<a;g++)for(let M=0;M<n;M++){let D=y[M][g],P=y[M+1][g],I=y[M+1][g+1],H=y[M][g+1];(t>0||M!==0)&&(u.push(D,P,H),A+=3),(i>0||M!==n-1)&&(u.push(P,I,H),A+=3)}h.addGroup(f,A,0),f+=A}function E(v){let T=_,A=new oe,w=new C,g=0,M=v===!0?t:i,D=v===!0?1:-1;for(let I=1;I<=a;I++)d.push(0,m*D,0),c.push(0,D,0),p.push(.5,.5),_++;let P=_;for(let I=0;I<=a;I++){let H=I/a*l+o,N=Math.cos(H),z=Math.sin(H);w.x=M*z,w.y=m*D,w.z=M*N,d.push(w.x,w.y,w.z),c.push(0,D,0),A.x=N*.5+.5,A.y=z*.5*D+.5,p.push(A.x,A.y),_++}for(let I=0;I<a;I++){let H=T+I,N=P+I;v===!0?u.push(N,N+1,H):u.push(N+1,N,H),g+=3}h.addGroup(f,g,v===!0?1:2),f+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dp=class Nc extends Lc{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new Nc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ba=class Uc extends _t{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let n=[],s=[];o(a),h(r),u(),this.setAttribute("position",new He(n,3)),this.setAttribute("normal",new He(n.slice(),3)),this.setAttribute("uv",new He(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let E=new C,v=new C,T=new C;for(let A=0;A<i.length;A+=3)p(i[A+0],E),p(i[A+1],v),p(i[A+2],T),l(E,v,T,S)}function l(S,E,v,T){let A=T+1,w=[];for(let g=0;g<=A;g++){w[g]=[];let M=S.clone().lerp(v,g/A),D=E.clone().lerp(v,g/A),P=A-g;for(let I=0;I<=P;I++)I===0&&g===A?w[g][I]=M:w[g][I]=M.clone().lerp(D,I/P)}for(let g=0;g<A;g++)for(let M=0;M<2*(A-g)-1;M++){let D=Math.floor(M/2);M%2===0?(c(w[g][D+1]),c(w[g+1][D]),c(w[g][D])):(c(w[g][D+1]),c(w[g+1][D+1]),c(w[g+1][D]))}}function h(S){let E=new C;for(let v=0;v<n.length;v+=3)E.x=n[v+0],E.y=n[v+1],E.z=n[v+2],E.normalize().multiplyScalar(S),n[v+0]=E.x,n[v+1]=E.y,n[v+2]=E.z}function u(){let S=new C;for(let E=0;E<n.length;E+=3){S.x=n[E+0],S.y=n[E+1],S.z=n[E+2];let v=m(S)/2/Math.PI+.5,T=f(S)/Math.PI+.5;s.push(v,1-T)}_(),d()}function d(){for(let S=0;S<s.length;S+=6){let E=s[S+0],v=s[S+2],T=s[S+4],A=Math.max(E,v,T),w=Math.min(E,v,T);A>.9&&w<.1&&(E<.2&&(s[S+0]+=1),v<.2&&(s[S+2]+=1),T<.2&&(s[S+4]+=1))}}function c(S){n.push(S.x,S.y,S.z)}function p(S,E){let v=S*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function _(){let S=new C,E=new C,v=new C,T=new C,A=new oe,w=new oe,g=new oe;for(let M=0,D=0;M<n.length;M+=9,D+=6){S.set(n[M+0],n[M+1],n[M+2]),E.set(n[M+3],n[M+4],n[M+5]),v.set(n[M+6],n[M+7],n[M+8]),A.set(s[D+0],s[D+1]),w.set(s[D+2],s[D+3]),g.set(s[D+4],s[D+5]),T.copy(S).add(E).add(v).divideScalar(3);let P=m(T);y(A,D+0,S,P),y(w,D+2,E,P),y(g,D+4,v,P)}}function y(S,E,v,T){T<0&&S.x===1&&(s[E]=S.x-1),v.x===0&&v.z===0&&(s[E]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uc(t.vertices,t.indices,t.radius,t.detail)}},Np=class Oc extends Ba{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=1/r,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,s,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Oc(t.radius,t.detail)}},dn=new C,pn=new C,Es=new C,fn=new Gr,Up=class extends _t{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(Xr*t),a=e.getIndex(),n=e.getAttribute("position"),s=a?a.count:n.count,o=[0,0,0],l=["a","b","c"],h=new Array(3),u={},d=[];for(let c=0;c<s;c+=3){a?(o[0]=a.getX(c),o[1]=a.getX(c+1),o[2]=a.getX(c+2)):(o[0]=c,o[1]=c+1,o[2]=c+2);let{a:p,b:_,c:y}=fn;if(p.fromBufferAttribute(n,o[0]),_.fromBufferAttribute(n,o[1]),y.fromBufferAttribute(n,o[2]),fn.getNormal(Es),h[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[1]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){let f=(m+1)%3,S=h[m],E=h[f],v=fn[l[m]],T=fn[l[f]],A=`${S}_${E}`,w=`${E}_${S}`;w in u&&u[w]?(Es.dot(u[w].normal)<=r&&(d.push(v.x,v.y,v.z),d.push(T.x,T.y,T.z)),u[w]=null):A in u||(u[A]={index0:o[m],index1:o[f],normal:Es.clone()})}}for(let c in u)if(u[c]){let{index0:p,index1:_}=u[c];dn.fromBufferAttribute(n,p),pn.fromBufferAttribute(n,_),d.push(dn.x,dn.y,dn.z),d.push(pn.x,pn.y,pn.z)}this.setAttribute("position",new He(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let h=i[r],u=i[r+1]-h,d=(n-h)/u;return(r+d)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new oe:new C);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,r=[],a=[],n=[],s=new C,o=new Ze;for(let c=0;c<=e;c++){let p=c/e;r[c]=this.getTangentAt(p,new C)}a[0]=new C,n[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let c=1;c<=e;c++){if(a[c]=a[c-1].clone(),n[c]=n[c-1].clone(),s.crossVectors(r[c-1],r[c]),s.length()>Number.EPSILON){s.normalize();let p=Math.acos($e(r[c-1].dot(r[c]),-1,1));a[c].applyMatrix4(o.makeRotationAxis(s,p))}n[c].crossVectors(r[c],a[c])}if(t===!0){let c=Math.acos($e(a[0].dot(a[e]),-1,1));c/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(c=-c);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],c*p)),n[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Wo=class extends vi{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new oe){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=o-this.aX,c=l-this.aY;o=d*h-c*u+this.aX,l=d*u+c*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Op=class extends Wo{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};vh=new C,_h=new C,ws=new Xo,As=new Xo,Rs=new Xo,Fp=class extends vi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=r[(s-1)%a]:(_h.subVectors(r[0],r[1]).add(r[0]),l=_h);let u=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?h=r[(s+2)%a]:(vh.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=vh),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),c),_=Math.pow(u.distanceToSquared(d),c),y=Math.pow(d.distanceToSquared(h),c);_<1e-4&&(_=1),p<1e-4&&(p=_),y<1e-4&&(y=_),ws.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,_,y),As.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,_,y),Rs.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,_,y)}else this.curveType==="catmullrom"&&(ws.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),As.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Rs.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(ws.calc(o),As.calc(o),Rs.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Fc=class extends vi{constructor(e=new oe,t=new oe,i=new oe,r=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new oe){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Ea(e,r.x,a.x,n.x,s.x),Ea(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xp=class extends vi{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Ea(e,r.x,a.x,n.x,s.x),Ea(e,r.y,a.y,n.y,s.y),Ea(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bc=class extends vi{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jp=class extends vi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zc=class extends vi{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Ta(e,r.x,a.x,n.x),Ta(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gc=class extends vi{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Ta(e,r.x,a.x,n.x),Ta(e,r.y,a.y,n.y),Ta(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vc=class extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],u=r[n>r.length-3?r.length-1:n+2];return i.set(yh(s,o.x,l.x,h.x,u.x),yh(s,o.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new oe().fromArray(r))}return this}},Un=Object.freeze({__proto__:null,ArcCurve:Op,CatmullRomCurve3:Fp,CubicBezierCurve:Fc,CubicBezierCurve3:Xp,EllipseCurve:Wo,LineCurve:Bc,LineCurve3:jp,QuadraticBezierCurve:zc,QuadraticBezierCurve3:Gc,SplineCurve:Vc}),qp=class extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Un[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Un[r.type]().fromJSON(r))}return this}},xh=class extends qp{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Bc(this.currentPoint.clone(),new oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new zc(this.currentPoint.clone(),new oe(e,t),new oe(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new Fc(this.currentPoint.clone(),new oe(e,t),new oe(i,r),new oe(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Vc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new Wo(e,t,i,r,a,n,s,o);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},kc=class extends xh{constructor(e){super(e),this.uuid=gr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new xh().fromJSON(r))}return this}};df=class{static triangulate(e,t,i=2){return Yp(e,t,i)}},cr=class qc{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return qc.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];bh(t),Sh(r,t);let s=t.length;i.forEach(bh);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,Sh(r,i[l]);let o=df.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};pf=class Yc extends _t{constructor(t=new kc([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new He(a,3)),this.setAttribute("uv",new He(n,2)),this.computeVertexNormals();function s(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,u=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,c=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,_=i.bevelSize!==void 0?i.bevelSize:p-.1,y=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,f=i.extrudePath,S=i.UVGenerator!==void 0?i.UVGenerator:ff,E,v=!1,T,A,w,g;if(f){E=f.getSpacedPoints(u),v=!0,c=!1;let Q=f.isCatmullRomCurve3?f.closed:!1;T=f.computeFrenetFrames(u,Q),A=new C,w=new C,g=new C}c||(m=0,p=0,_=0,y=0);let M=o.extractPoints(h),D=M.shape,P=M.holes;if(!cr.isClockWise(D)){D=D.reverse();for(let Q=0,J=P.length;Q<J;Q++){let ae=P[Q];cr.isClockWise(ae)&&(P[Q]=ae.reverse())}}function I(Q){let J=10000000000000001e-36,ae=Q[0];for(let _e=1;_e<=Q.length;_e++){let xe=_e%Q.length,Ae=Q[xe],De=Ae.x-ae.x,ke=Ae.y-ae.y,Fe=De*De+ke*ke,L=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(ae.x),Math.abs(ae.y)),ct=J*L*L;if(Fe<=ct){Q.splice(xe,1),_e--;continue}ae=Ae}}I(D),P.forEach(I);let H=P.length,N=D;for(let Q=0;Q<H;Q++){let J=P[Q];D=D.concat(J)}function z(Q,J,ae){return J||Ve("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(J,ae)}let Z=D.length;function k(Q,J,ae){let _e,xe,Ae,De=Q.x-J.x,ke=Q.y-J.y,Fe=ae.x-Q.x,L=ae.y-Q.y,ct=De*De+ke*ke,Qe=De*L-ke*Fe;if(Math.abs(Qe)>Number.EPSILON){let Ke=Math.sqrt(ct),R=Math.sqrt(Fe*Fe+L*L),x=J.x-ke/Ke,U=J.y+De/Ke,W=ae.x-L/R,K=ae.y+Fe/R,pe=((W-x)*L-(K-U)*Fe)/(De*L-ke*Fe);_e=x+De*pe-Q.x,xe=U+ke*pe-Q.y;let me=_e*_e+xe*xe;if(me<=2)return new oe(_e,xe);Ae=Math.sqrt(me/2)}else{let Ke=!1;De>Number.EPSILON?Fe>Number.EPSILON&&(Ke=!0):De<-Number.EPSILON?Fe<-Number.EPSILON&&(Ke=!0):Math.sign(ke)===Math.sign(L)&&(Ke=!0),Ke?(_e=-ke,xe=De,Ae=Math.sqrt(ct)):(_e=De,xe=ke,Ae=Math.sqrt(ct/2))}return new oe(_e/Ae,xe/Ae)}let le=[];for(let Q=0,J=N.length,ae=J-1,_e=Q+1;Q<J;Q++,ae++,_e++)ae===J&&(ae=0),_e===J&&(_e=0),le[Q]=k(N[Q],N[ae],N[_e]);let q=[],Y,ee=le.concat();for(let Q=0,J=H;Q<J;Q++){let ae=P[Q];Y=[];for(let _e=0,xe=ae.length,Ae=xe-1,De=_e+1;_e<xe;_e++,Ae++,De++)Ae===xe&&(Ae=0),De===xe&&(De=0),Y[_e]=k(ae[_e],ae[Ae],ae[De]);q.push(Y),ee=ee.concat(Y)}let he;if(m===0)he=cr.triangulateShape(N,P);else{let Q=[],J=[];for(let ae=0;ae<m;ae++){let _e=ae/m,xe=p*Math.cos(_e*Math.PI/2),Ae=_*Math.sin(_e*Math.PI/2)+y;for(let De=0,ke=N.length;De<ke;De++){let Fe=z(N[De],le[De],Ae);re(Fe.x,Fe.y,-xe),_e===0&&Q.push(Fe)}for(let De=0,ke=H;De<ke;De++){let Fe=P[De];Y=q[De];let L=[];for(let ct=0,Qe=Fe.length;ct<Qe;ct++){let Ke=z(Fe[ct],Y[ct],Ae);re(Ke.x,Ke.y,-xe),_e===0&&L.push(Ke)}_e===0&&J.push(L)}}he=cr.triangulateShape(Q,J)}let fe=he.length,je=_+y;for(let Q=0;Q<Z;Q++){let J=c?z(D[Q],ee[Q],je):D[Q];v?(w.copy(T.normals[0]).multiplyScalar(J.x),A.copy(T.binormals[0]).multiplyScalar(J.y),g.copy(E[0]).add(w).add(A),re(g.x,g.y,g.z)):re(J.x,J.y,0)}for(let Q=1;Q<=u;Q++)for(let J=0;J<Z;J++){let ae=c?z(D[J],ee[J],je):D[J];v?(w.copy(T.normals[Q]).multiplyScalar(ae.x),A.copy(T.binormals[Q]).multiplyScalar(ae.y),g.copy(E[Q]).add(w).add(A),re(g.x,g.y,g.z)):re(ae.x,ae.y,d/u*Q)}for(let Q=m-1;Q>=0;Q--){let J=Q/m,ae=p*Math.cos(J*Math.PI/2),_e=_*Math.sin(J*Math.PI/2)+y;for(let xe=0,Ae=N.length;xe<Ae;xe++){let De=z(N[xe],le[xe],_e);re(De.x,De.y,d+ae)}for(let xe=0,Ae=P.length;xe<Ae;xe++){let De=P[xe];Y=q[xe];for(let ke=0,Fe=De.length;ke<Fe;ke++){let L=z(De[ke],Y[ke],_e);v?re(L.x,L.y+E[u-1].y,E[u-1].x+ae):re(L.x,L.y,d+ae)}}}Ce(),j();function Ce(){let Q=a.length/3;if(c){let J=0,ae=Z*J;for(let _e=0;_e<fe;_e++){let xe=he[_e];be(xe[2]+ae,xe[1]+ae,xe[0]+ae)}J=u+m*2,ae=Z*J;for(let _e=0;_e<fe;_e++){let xe=he[_e];be(xe[0]+ae,xe[1]+ae,xe[2]+ae)}}else{for(let J=0;J<fe;J++){let ae=he[J];be(ae[2],ae[1],ae[0])}for(let J=0;J<fe;J++){let ae=he[J];be(ae[0]+Z*u,ae[1]+Z*u,ae[2]+Z*u)}}r.addGroup(Q,a.length/3-Q,0)}function j(){let Q=a.length/3,J=0;te(N,J),J+=N.length;for(let ae=0,_e=P.length;ae<_e;ae++){let xe=P[ae];te(xe,J),J+=xe.length}r.addGroup(Q,a.length/3-Q,1)}function te(Q,J){let ae=Q.length;for(;--ae>=0;){let _e=ae,xe=ae-1;xe<0&&(xe=Q.length-1);for(let Ae=0,De=u+m*2;Ae<De;Ae++){let ke=Z*Ae,Fe=Z*(Ae+1),L=J+_e+ke,ct=J+xe+ke,Qe=J+xe+Fe,Ke=J+_e+Fe;we(L,ct,Qe,Ke)}}}function re(Q,J,ae){l.push(Q),l.push(J),l.push(ae)}function be(Q,J,ae){ce(Q),ce(J),ce(ae);let _e=a.length/3,xe=S.generateTopUV(r,a,_e-3,_e-2,_e-1);Xe(xe[0]),Xe(xe[1]),Xe(xe[2])}function we(Q,J,ae,_e){ce(Q),ce(J),ce(_e),ce(J),ce(ae),ce(_e);let xe=a.length/3,Ae=S.generateSideWallUV(r,a,xe-6,xe-3,xe-2,xe-1);Xe(Ae[0]),Xe(Ae[1]),Xe(Ae[3]),Xe(Ae[1]),Xe(Ae[2]),Xe(Ae[3])}function ce(Q){a.push(l[Q*3+0]),a.push(l[Q*3+1]),a.push(l[Q*3+2])}function Xe(Q){n.push(Q.x),n.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return mf(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new Un[a.type]().fromJSON(a)),new Yc(r,t.options)}},ff={generateTopUV:function(e,t,i,r,a){let n=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],u=t[a*3+1];return[new oe(n,s),new oe(o,l),new oe(h,u)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],u=t[r*3+1],d=t[r*3+2],c=t[a*3],p=t[a*3+1],_=t[a*3+2],y=t[n*3],m=t[n*3+1],f=t[n*3+2];return Math.abs(o-u)<Math.abs(s-h)?[new oe(s,1-l),new oe(h,1-d),new oe(c,1-_),new oe(y,1-f)]:[new oe(o,1-l),new oe(u,1-d),new oe(p,1-_),new oe(m,1-f)]}};gf=class Zc extends Ba{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,n,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Zc(t.radius,t.detail)}},vf=class $c extends _t{constructor(t=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=$e(a,0,Math.PI*2);let n=[],s=[],o=[],l=[],h=[],u=1/i,d=new C,c=new oe,p=new C,_=new C,y=new C,m=0,f=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,f=t[S+1].y-t[S].y,p.x=f*1,p.y=-m,p.z=f*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[S+1].x-t[S].x,f=t[S+1].y-t[S].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(_)}for(let S=0;S<=i;S++){let E=r+S*u*a,v=Math.sin(E),T=Math.cos(E);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*v,d.y=t[A].y,d.z=t[A].x*T,s.push(d.x,d.y,d.z),c.x=S/i,c.y=A/(t.length-1),o.push(c.x,c.y);let w=l[3*A+0]*v,g=l[3*A+1],M=l[3*A+0]*T;h.push(w,g,M)}}for(let S=0;S<i;S++)for(let E=0;E<t.length-1;E++){let v=E+S*t.length,T=v,A=v+t.length,w=v+t.length+1,g=v+1;n.push(T,A,g),n.push(w,g,A)}this.setIndex(n),this.setAttribute("position",new He(s,3)),this.setAttribute("uv",new He(o,2)),this.setAttribute("normal",new He(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.points,t.segments,t.phiStart,t.phiLength)}},_f=class Kc extends Ba{constructor(t=1,i=0){let r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Kc(t.radius,t.detail)}},za=class Jc extends _t{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,u=l+1,d=t/o,c=i/l,p=[],_=[],y=[],m=[];for(let f=0;f<u;f++){let S=f*c-s;for(let E=0;E<h;E++){let v=E*d-n;_.push(v,-S,0),y.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){let E=S+h*f,v=S+h*(f+1),T=S+1+h*(f+1),A=S+1+h*f;p.push(E,v,A),p.push(v,T,A)}this.setIndex(p),this.setAttribute("position",new He(_,3)),this.setAttribute("normal",new He(y,3)),this.setAttribute("uv",new He(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.width,t.height,t.widthSegments,t.heightSegments)}},yf=class Qc extends _t{constructor(t=.5,i=1,r=32,a=1,n=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:n,thetaLength:s},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],h=[],u=[],d=t,c=(i-t)/a,p=new C,_=new oe;for(let y=0;y<=a;y++){for(let m=0;m<=r;m++){let f=n+m/r*s;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),h.push(0,0,1),_.x=(p.x/i+1)/2,_.y=(p.y/i+1)/2,u.push(_.x,_.y)}d+=c}for(let y=0;y<a;y++){let m=y*(r+1);for(let f=0;f<r;f++){let S=f+m,E=S,v=S+r+1,T=S+r+2,A=S+1;o.push(E,v,A),o.push(v,T,A)}}this.setIndex(o),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},xf=class eu extends _t{constructor(t=new kc([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new He(a,3)),this.setAttribute("normal",new He(n,3)),this.setAttribute("uv",new He(s,2));function h(u){let d=a.length/3,c=u.extractPoints(i),p=c.shape,_=c.holes;cr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=_.length;m<f;m++){let S=_[m];cr.isClockWise(S)===!0&&(_[m]=S.reverse())}let y=cr.triangulateShape(p,_);for(let m=0,f=_.length;m<f;m++){let S=_[m];p=p.concat(S)}for(let m=0,f=p.length;m<f;m++){let S=p[m];a.push(S.x,S.y,0),n.push(0,0,1),s.push(S.x,S.y)}for(let m=0,f=y.length;m<f;m++){let S=y[m],E=S[0]+d,v=S[1]+d,T=S[2]+d;r.push(E,v,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return Mf(i,t)}static fromJSON(t,i){let r=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=i[t.shapes[a]];r.push(s)}return new eu(r,t.curveSegments)}};bf=class tu extends _t{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),h=0,u=[],d=new C,c=new C,p=[],_=[],y=[],m=[];for(let f=0;f<=r;f++){let S=[],E=f/r,v=s+E*o,T=t*Math.cos(v),A=Math.sqrt(t*t-T*T),w=0;f===0&&s===0?w=.5/i:f===r&&l===Math.PI&&(w=-.5/i);for(let g=0;g<=i;g++){let M=g/i,D=a+M*n;d.x=-A*Math.cos(D),d.y=T,d.z=A*Math.sin(D),_.push(d.x,d.y,d.z),c.copy(d).normalize(),y.push(c.x,c.y,c.z),m.push(M+w,1-E),S.push(h++)}u.push(S)}for(let f=0;f<r;f++)for(let S=0;S<i;S++){let E=u[f][S+1],v=u[f][S],T=u[f+1][S],A=u[f+1][S+1];(f!==0||s>0)&&p.push(E,v,A),(f!==r-1||l<Math.PI)&&p.push(v,T,A)}this.setIndex(p),this.setAttribute("position",new He(_,3)),this.setAttribute("normal",new He(y,3)),this.setAttribute("uv",new He(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Sf=class iu extends Ba{constructor(t=1,i=0){let r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,a,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new iu(t.radius,t.detail)}},Tf=class ru extends _t{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let l=[],h=[],u=[],d=[],c=new C,p=new C,_=new C;for(let y=0;y<=r;y++){let m=s+y/r*o;for(let f=0;f<=a;f++){let S=f/a*n;p.x=(t+i*Math.cos(m))*Math.cos(S),p.y=(t+i*Math.cos(m))*Math.sin(S),p.z=i*Math.sin(m),h.push(p.x,p.y,p.z),c.x=t*Math.cos(S),c.y=t*Math.sin(S),_.subVectors(p,c).normalize(),u.push(_.x,_.y,_.z),d.push(f/a),d.push(y/r)}}for(let y=1;y<=r;y++)for(let m=1;m<=a;m++){let f=(a+1)*y+m-1,S=(a+1)*(y-1)+m-1,E=(a+1)*(y-1)+m,v=(a+1)*y+m;l.push(f,S,v),l.push(S,E,v)}this.setIndex(l),this.setAttribute("position",new He(h,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Ef=class au extends _t{constructor(t=1,i=.4,r=64,a=8,n=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:r,radialSegments:a,p:n,q:s},r=Math.floor(r),a=Math.floor(a);let o=[],l=[],h=[],u=[],d=new C,c=new C,p=new C,_=new C,y=new C,m=new C,f=new C;for(let E=0;E<=r;++E){let v=E/r*n*Math.PI*2;S(v,n,s,t,p),S(v+.01,n,s,t,_),m.subVectors(_,p),f.addVectors(_,p),y.crossVectors(m,f),f.crossVectors(y,m),y.normalize(),f.normalize();for(let T=0;T<=a;++T){let A=T/a*Math.PI*2,w=-i*Math.cos(A),g=i*Math.sin(A);d.x=p.x+(w*f.x+g*y.x),d.y=p.y+(w*f.y+g*y.y),d.z=p.z+(w*f.z+g*y.z),l.push(d.x,d.y,d.z),c.subVectors(d,p).normalize(),h.push(c.x,c.y,c.z),u.push(E/r),u.push(T/a)}}for(let E=1;E<=r;E++)for(let v=1;v<=a;v++){let T=(a+1)*(E-1)+(v-1),A=(a+1)*E+(v-1),w=(a+1)*E+v,g=(a+1)*(E-1)+v;o.push(T,A,g),o.push(A,w,g)}this.setIndex(o),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(u,2));function S(E,v,T,A,w){let g=Math.cos(E),M=Math.sin(E),D=T/v*E,P=Math.cos(D);w.x=A*(2+P)*.5*g,w.y=A*(2+P)*M*.5,w.z=A*Math.sin(D)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new au(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},wf=class nu extends _t{constructor(t=new Gc(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new C,l=new C,h=new oe,u=new C,d=[],c=[],p=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new He(d,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(p,2));function y(){for(let E=0;E<i;E++)m(E);m(n===!1?i:0),S(),f()}function m(E){u=t.getPointAt(E/i,u);let v=s.normals[E],T=s.binormals[E];for(let A=0;A<=a;A++){let w=A/a*Math.PI*2,g=Math.sin(w),M=-Math.cos(w);l.x=M*v.x+g*T.x,l.y=M*v.y+g*T.y,l.z=M*v.z+g*T.z,l.normalize(),c.push(l.x,l.y,l.z),o.x=u.x+r*l.x,o.y=u.y+r*l.y,o.z=u.z+r*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let E=1;E<=i;E++)for(let v=1;v<=a;v++){let T=(a+1)*(E-1)+(v-1),A=(a+1)*E+(v-1),w=(a+1)*E+v,g=(a+1)*(E-1)+v;_.push(T,A,g),_.push(A,w,g)}}function S(){for(let E=0;E<=i;E++)for(let v=0;v<=a;v++)h.x=E/i,h.y=v/a,p.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new nu(new Un[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Af=class extends _t{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new C,a=new C;if(e.index!==null){let n=e.attributes.position,s=e.index,o=e.groups;o.length===0&&(o=[{start:0,count:s.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let u=o[l],d=u.start,c=u.count;for(let p=d,_=d+c;p<_;p+=3)for(let y=0;y<3;y++){let m=s.getX(p+y),f=s.getX(p+(y+1)%3);r.fromBufferAttribute(n,m),a.fromBufferAttribute(n,f),Th(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let n=e.attributes.position;for(let s=0,o=n.count/3;s<o;s++)for(let l=0;l<3;l++){let h=3*s+l,u=3*s+(l+1)%3;r.fromBufferAttribute(n,h),a.fromBufferAttribute(n,u),Th(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new He(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};Rx=Object.freeze({__proto__:null,BoxGeometry:Fa,CapsuleGeometry:Ip,CircleGeometry:Lp,ConeGeometry:Dp,CylinderGeometry:Lc,DodecahedronGeometry:Np,EdgesGeometry:Up,ExtrudeGeometry:pf,IcosahedronGeometry:gf,LatheGeometry:vf,OctahedronGeometry:_f,PlaneGeometry:za,PolyhedronGeometry:Ba,RingGeometry:yf,ShapeGeometry:xf,SphereGeometry:bf,TetrahedronGeometry:Sf,TorusGeometry:Tf,TorusKnotGeometry:Ef,TubeGeometry:wf,WireframeGeometry:Af});Cf={clone:ia,merge:Ot},Pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zt=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pf,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=Rf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new it().setHex(r.value);break;case"v2":this.uniforms[i].value=new oe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new C().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ft().fromArray(r.value);break;case"m3":this.uniforms[i].value=new qe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ze().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Lf=class extends Zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Df=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nf=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Ga=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Uf=class extends Ga{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yl,endingEnd:Yl}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case Zl:a=e,s=2*t-i;break;case $l:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Zl:n=e,o=2*i-t;break;case $l:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,c=this._weightNext,p=(i-t)/(r-t),_=p*p,y=_*p,m=-d*y+2*d*_-d*p,f=(1+d)*y+(-1.5-2*d)*_+(-.5+d)*p+1,S=(-1-c)*y+(1.5+c)*_+.5*p,E=c*y-c*_;for(let v=0;v!==s;++v)a[v]=m*n[h+v]+f*n[l+v]+S*n[o+v]+E*n[u+v];return a}},Of=class extends Ga{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==s;++d)a[d]=n[l+d]*u+n[o+d]*h;return a}},Ff=class extends Ga{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Bf=class extends Ga{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(r-t),_=1-p;for(let y=0;y!==s;++y)a[y]=n[l+y]*_+n[o+y]*p;return a}let d=s*2,c=e-1;for(let p=0;p!==s;++p){let _=n[l+p],y=n[o+p],m=c*d+p*2,f=u[m],S=u[m+1],E=e*d+p*2,v=h[E],T=h[E+1],A=Gf(i,t,f,v,r);a[p]=ou(A,_,S,T,y)}return a}};_i=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dr(t,this.TimeBufferType),this.values=Dr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Dr(e.times,Array),values:Dr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Cs(e.settings)&&(i.settings={inTangents:Dr(e.settings.inTangents,Array),outTangents:Dr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ff(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Of(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case In:t=this.InterpolantFactoryMethodDiscrete;break;case So:t=this.InterpolantFactoryMethodLinear;break;case rs:t=this.InterpolantFactoryMethodSmooth;break;case ql:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ze("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return In;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return rs;case this.InterpolantFactoryMethodBezier:return ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Cs(this.settings)&&(wh(this.settings.inTangents,e),wh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){Ve("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){Ve("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&zd(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){Ve("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===rs,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(r)o=!0;else{let u=s*i,d=u-i,c=u+i;for(let p=0;p!==i;++p){let _=t[u+p];if(_!==t[d+p]||_!==t[c+p]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let u=s*i,d=n*i;for(let c=0;c!==i;++c)t[d+c]=t[u+c]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Cs(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};_i.prototype.ValueTypeName="";_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=So;Va=class extends _i{constructor(e,t,i){super(e,t,i)}};Va.prototype.ValueTypeName="bool";Va.prototype.ValueBufferType=Array;Va.prototype.DefaultInterpolation=In;Va.prototype.InterpolantFactoryMethodLinear=void 0;Va.prototype.InterpolantFactoryMethodSmooth=void 0;Vf=class extends _i{constructor(e,t,i,r){super(e,t,i,r)}};Vf.prototype.ValueTypeName="color";kf=class extends _i{constructor(e,t,i,r){super(e,t,i,r)}};kf.prototype.ValueTypeName="number";Hf=class extends Ga{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let h=l+s;l!==h;l+=4)ri.slerpFlat(a,0,n,l-s,n,l,o);return a}},lu=class extends _i{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Hf(this.times,this.values,this.getValueSize(),e)}};lu.prototype.ValueTypeName="quaternion";lu.prototype.InterpolantFactoryMethodSmooth=void 0;ka=class extends _i{constructor(e,t,i){super(e,t,i)}};ka.prototype.ValueTypeName="string";ka.prototype.ValueBufferType=Array;ka.prototype.DefaultInterpolation=In;ka.prototype.InterpolantFactoryMethodLinear=void 0;ka.prototype.InterpolantFactoryMethodSmooth=void 0;Wf=class extends _i{constructor(e,t,i,r){super(e,t,i,r)}};Wf.prototype.ValueTypeName="vector";Ps={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Ah(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Ah(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};Xf=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){s++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let c=l[u],p=l[u+1];if(c.global&&(c.lastIndex=0),c.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jf=new Xf,jo=class{constructor(e){this.manager=e!==void 0?e:jf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};jo.DEFAULT_MATERIAL_NAME="__DEFAULT";Nr=new WeakMap,qf=class extends jo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=Ps.get(`image:${e}`);if(n!==void 0){if(n.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0);else{let u=Nr.get(n);u===void 0&&(u=[],Nr.set(n,u)),u.push({onLoad:t,onError:r})}return n}let s=Ca("img");function o(){h(),t&&t(this);let u=Nr.get(this)||[];for(let d=0;d<u.length;d++){let c=u[d];c.onLoad&&c.onLoad(this)}Nr.delete(this),a.manager.itemEnd(e)}function l(u){h(),r&&r(u),Ps.remove(`image:${e}`);let d=Nr.get(this)||[];for(let c=0;c<d.length;c++){let p=d[c];p.onError&&p.onError(u)}Nr.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){s.removeEventListener("load",o,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),Ps.add(`image:${e}`,s),a.manager.itemStart(e),s.src=e,s}},qo=class extends jo{constructor(e){super(e)}load(e,t,i,r){let a=new $t,n=new qf(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}},Cx=new Ze,Px=new C,Ix=new C,vn=new C,_n=new ri,hi=new C,Yo=class extends Ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vn,_n,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vn,_n,hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(vn,_n,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vn,_n,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new C,Rh=new oe,Ch=new oe,Gt=class extends Yo{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,Rh,Ch),t.subVectors(Ch,Rh)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hu=class extends Yo{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Lx=new Ze,Dx=new Ze,Nx=new Ze,Ur=-90,Or=1,Yf=class extends Ii{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Gt(Ur,Or,e,t);r.layers=this.layers,this.add(r);let a=new Gt(Ur,Or,e,t);a.layers=this.layers,this.add(a);let n=new Gt(Ur,Or,e,t);n.layers=this.layers,this.add(n);let s=new Gt(Ur,Or,e,t);s.layers=this.layers,this.add(s);let o=new Gt(Ur,Or,e,t);o.layers=this.layers,this.add(o);let l=new Gt(Ur,Or,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Nn)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,c),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Zf=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Zo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=$f.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};Ux=new C,Ox=new ri,Fx=new C,Bx=new C,zx=new C,Gx=new C,Vx=new ri,kx=new C,Hx=new C,$o="\\[\\]\\.:\\/",Kf=new RegExp("["+$o+"]","g"),Ko="[^"+$o+"]",Jf="[^"+$o.replace("\\.","")+"]",Qf=/((?:WC+[\/:])*)/.source.replace("WC",Ko),em=/(WCOD+)?/.source.replace("WCOD",Jf),tm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ko),im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ko),rm=new RegExp("^"+Qf+em+tm+im+"$"),am=["material","materials","bones","map"],nm=class{constructor(e,t,i){let r=i||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},vt=class kr{constructor(t,i,r){this.path=i,this.parsedPath=r||kr.parseTrackName(i),this.node=kr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new kr.Composite(t,i,r):new kr(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kf,"")}static parseTrackName(t){let i=rm.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);am.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=kr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=i.nodeName;Ve("PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=nm;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Wx=new Float32Array(1),Ph=new Ze,Jo=class{constructor(e,t,i=0,r=1/0){this.ray=new Oa(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ph.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ph),this}intersectObject(e,t=!0,i=[]){return wo(e,this,i,t),i.sort(Ih),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)wo(e[r],this,i,t);return i.sort(Ih),i}};Xx=(Kr=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},Kr.prototype.isMatrix2=!0,Kr),jx=new oe,qx=new C,Yx=new C,Zx=new C,$x=new C,Kx=new C,Jx=new C,Qx=new C,e1=new C,t1=new C,i1=new Ze,r1=new Ze,a1=new C,n1=new it,s1=new it,o1=new C,l1=new C,h1=new C,c1=new C,u1=new Yo,d1=new Hi,p1=new C;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hm=`#ifdef USE_ALPHAHASH
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
#endif`,cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fm=`#ifdef USE_AOMAP
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
#endif`,mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gm=`#ifdef USE_BATCHING
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
#endif`,vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mm=`#ifdef USE_IRIDESCENCE
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
#endif`,bm=`#ifdef USE_BUMPMAP
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
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Im=`#define PI 3.141592653589793
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
} // validated`,Lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dm=`vec3 transformedNormal = objectNormal;
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
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zm=`#ifdef USE_GRADIENTMAP
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
}`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ng=`PhysicalMaterial material;
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
#endif`,sg=`uniform sampler2D dfgLUT;
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
}`,og=`
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
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
#endif`,hg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_g=`#if defined( USE_POINTS_UV )
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
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`#ifdef USE_MORPHTARGETS
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
#endif`,Eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
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
#endif`,Lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qg=`float getShadowMask() {
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
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,Jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,r0=`#ifdef USE_TRANSMISSION
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,l0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h0=`uniform sampler2D t2D;
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
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
}`,m0=`#if DEPTH_PACKING == 3200
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
}`,g0=`#define DISTANCE
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
}`,v0=`#define DISTANCE
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`uniform float scale;
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
}`,M0=`uniform vec3 diffuse;
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
}`,b0=`#include <common>
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
}`,S0=`uniform vec3 diffuse;
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
}`,T0=`#define LAMBERT
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
}`,E0=`#define LAMBERT
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
}`,w0=`#define MATCAP
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
}`,A0=`#define MATCAP
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
}`,R0=`#define NORMAL
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
}`,C0=`#define NORMAL
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
}`,P0=`#define PHONG
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
}`,I0=`#define PHONG
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
}`,L0=`#define STANDARD
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
}`,D0=`#define STANDARD
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
}`,N0=`#define TOON
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
}`,U0=`#define TOON
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
}`,O0=`uniform float size;
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
}`,F0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,z0=`uniform vec3 color;
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
}`,G0=`uniform float rotation;
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
}`,V0=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:lm,alphahash_pars_fragment:hm,alphamap_fragment:cm,alphamap_pars_fragment:um,alphatest_fragment:dm,alphatest_pars_fragment:pm,aomap_fragment:fm,aomap_pars_fragment:mm,batching_pars_vertex:gm,batching_vertex:vm,begin_vertex:_m,beginnormal_vertex:ym,bsdfs:xm,iridescence_fragment:Mm,bumpmap_pars_fragment:bm,clipping_planes_fragment:Sm,clipping_planes_pars_fragment:Tm,clipping_planes_pars_vertex:Em,clipping_planes_vertex:wm,color_fragment:Am,color_pars_fragment:Rm,color_pars_vertex:Cm,color_vertex:Pm,common:Im,cube_uv_reflection_fragment:Lm,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Nm,displacementmap_vertex:Um,emissivemap_fragment:Om,emissivemap_pars_fragment:Fm,colorspace_fragment:Bm,colorspace_pars_fragment:zm,envmap_fragment:Gm,envmap_common_pars_fragment:Vm,envmap_pars_fragment:km,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:eg,envmap_vertex:Wm,fog_vertex:Xm,fog_pars_vertex:jm,fog_fragment:qm,fog_pars_fragment:Ym,gradientmap_pars_fragment:Zm,lightmap_pars_fragment:$m,lights_lambert_fragment:Km,lights_lambert_pars_fragment:Jm,lights_pars_begin:Qm,lights_toon_fragment:tg,lights_toon_pars_fragment:ig,lights_phong_fragment:rg,lights_phong_pars_fragment:ag,lights_physical_fragment:ng,lights_physical_pars_fragment:sg,lights_fragment_begin:og,lights_fragment_maps:lg,lights_fragment_end:hg,lightprobes_pars_fragment:cg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:pg,logdepthbuf_vertex:fg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:vg,map_particle_pars_fragment:_g,metalnessmap_fragment:yg,metalnessmap_pars_fragment:xg,morphinstance_vertex:Mg,morphcolor_vertex:bg,morphnormal_vertex:Sg,morphtarget_pars_vertex:Tg,morphtarget_vertex:Eg,normal_fragment_begin:wg,normal_fragment_maps:Ag,normal_pars_fragment:Rg,normal_pars_vertex:Cg,normal_vertex:Pg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:Ug,opaque_fragment:Og,packing:Fg,premultiplied_alpha_fragment:Bg,project_vertex:zg,dithering_fragment:Gg,dithering_pars_fragment:Vg,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Xg,shadowmap_vertex:jg,shadowmask_pars_fragment:qg,skinbase_vertex:Yg,skinning_pars_vertex:Zg,skinning_vertex:$g,skinnormal_vertex:Kg,specularmap_fragment:Jg,specularmap_pars_fragment:Qg,tonemapping_fragment:e0,tonemapping_pars_fragment:t0,transmission_fragment:i0,transmission_pars_fragment:r0,uv_pars_fragment:a0,uv_pars_vertex:n0,uv_vertex:s0,worldpos_vertex:o0,background_vert:l0,background_frag:h0,backgroundCube_vert:c0,backgroundCube_frag:u0,cube_vert:d0,cube_frag:p0,depth_vert:f0,depth_frag:m0,distance_vert:g0,distance_frag:v0,equirect_vert:_0,equirect_frag:y0,linedashed_vert:x0,linedashed_frag:M0,meshbasic_vert:b0,meshbasic_frag:S0,meshlambert_vert:T0,meshlambert_frag:E0,meshmatcap_vert:w0,meshmatcap_frag:A0,meshnormal_vert:R0,meshnormal_frag:C0,meshphong_vert:P0,meshphong_frag:I0,meshphysical_vert:L0,meshphysical_frag:D0,meshtoon_vert:N0,meshtoon_frag:U0,points_vert:O0,points_frag:F0,shadow_vert:B0,shadow_frag:z0,sprite_vert:G0,sprite_frag:V0},ge={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},ui={basic:{uniforms:Ot([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ot([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ot([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ot([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ot([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new it(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ot([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ot([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ot([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ot([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ot([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ot([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Ot([ge.common,ge.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Ot([ge.lights,ge.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ui.physical={uniforms:Ot([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};yn={r:0,b:0,g:0},k0=new Ze,uu=new qe;uu.set(-1,0,0,0,1,0,0,0,1);Hr=4,Y0=6,Z0=20,$0=256,va=new hu,Dh=new it,Is=null,Ls=0,Ds=0,Ns=!1,K0=new C,sr=new C,Ao=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=K0}=a;Is=this._renderer.getRenderTarget(),Ls=this._renderer.getActiveCubeFace(),Ds=this._renderer.getActiveMipmapLevel(),Ns=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Is,Ls,Ds),this._renderer.xr.enabled=Ns,e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Is=this._renderer.getRenderTarget(),Ls=this._renderer.getActiveCubeFace(),Ds=this._renderer.getActiveMipmapLevel(),Ns=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:gi,format:ei,colorSpace:Ln,depthBuffer:!1},r=Nh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nh(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=J0(a)),this._blurMaterial=ev(a,e,t),this._ggxMaterial=Q0(a,e,t)}return r}_compileMaterial(e){let t=new kt(new _t,e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,i,r,a){let n=new Gt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(Dh),l.toneMapping=pi,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kt(new Fa,new Ec({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,c=d.material,p=!1,_=e.background;_?_.isColor&&(c.color.copy(_),e.background=null,p=!0):(c.color.copy(Dh),p=!0);for(let y=0;y<6;y++){let m=y%3;m===0?(n.up.set(0,s[y],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[y],a.y,a.z)):m===1?(n.up.set(0,0,s[y]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[y],a.z)):(n.up.set(0,s[y],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[y]));let f=this._cubeSize;Fr(r,m*f,y>2?f:0,f,f),l.setRenderTarget(r),p&&l.render(d,n),l.render(e,n)}l.toneMapping=u,l.autoClear=h,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===dr||e.mapping===Jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Fr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,va)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,c=u*d,{_lodMax:p}=this,_=this._sizeLods[i],y=3*_*(i>p-Hr?i-p+Hr:0),m=4*(this._cubeSize-_);o.envMap.value=e.texture,o.roughness.value=c,o.mipInt.value=p-t,Fr(a,y,m,3*_,2*_),r.setRenderTarget(a),r.render(s,va),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=p-i,Fr(e,y,m,3*_,2*_),r.setRenderTarget(e),r.render(s,va)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let l=s.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-Hr?r-this._lodMax+Hr:0),d=4*(this._cubeSize-h);Fr(t,u,d,3*h,2*h),n.setRenderTarget(t),n.render(o,va)}};du=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ac(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fa(5,5,5),a=new Zt({name:"CubemapFromEquirect",uniforms:ia(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Ai});a.uniforms.tEquirect.value=t;let n=new kt(r,a),s=t.minFilter;return t.minFilter===or&&(t.minFilter=Dt),new Yf(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};lv={[rc]:"LINEAR_TONE_MAPPING",[ac]:"REINHARD_TONE_MAPPING",[nc]:"CINEON_TONE_MAPPING",[sc]:"ACES_FILMIC_TONE_MAPPING",[lc]:"AGX_TONE_MAPPING",[Po]:"NEUTRAL_TONE_MAPPING",[oc]:"CUSTOM_TONE_MAPPING"};pu=new $t,Ro=new La(1,1),fu=new _c,mu=new cp,gu=new Ac,Fh=[],Bh=[],zh=new Float32Array(16),Gh=new Float32Array(9),Vh=new Float32Array(4);$v=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Cv(t.type)}},Kv=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zv(t.type)}},Jv=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},Us=/(\w+)(\])?(\[|\.)?/g;Rn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);Qv(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};e_=37297,t_=0;Wh=new qe;n_={[rc]:"Linear",[ac]:"Reinhard",[nc]:"Cineon",[sc]:"ACESFilmic",[lc]:"AgX",[Po]:"Neutral",[oc]:"Custom"};xn=new C;u_=/^[ \t]*#include +<([\w\d./]+)>/gm;d_=new Map;f_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;g_={[Mn]:"SHADOWMAP_TYPE_PCF",[ya]:"SHADOWMAP_TYPE_VSM"};__={[dr]:"ENVMAP_TYPE_CUBE",[Jr]:"ENVMAP_TYPE_CUBE",[On]:"ENVMAP_TYPE_CUBE_UV"};x_={[Jr]:"ENVMAP_MODE_REFRACTION"};b_={[ic]:"ENVMAP_BLENDING_MULTIPLY",[Ed]:"ENVMAP_BLENDING_MIX",[wd]:"ENVMAP_BLENDING_ADD"};w_=0,A_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new R_(e),t.set(e,i)),i}},R_=class{constructor(e){this.id=w_++,this.code=e,this.usedTimes=0}};O_=0;G_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V_=`uniform sampler2D shadow_pass;
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
}`,k_=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],H_=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Qh=new Ze,_a=new C,Os=new C;Y_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z_=`
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

}`,$_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Rc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Zt({vertexShader:Y_,fragmentShader:Z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},K_=class extends mr{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,u=null,d=null,c=null,p=null,_=typeof XRWebGLBinding<"u",y=new $_,m={},f=t.getContextAttributes(),S=null,E=null,v=[],T=[],A=new oe,w=null,g=null,M=new Gt;M.viewport=new ft;let D=new Gt;D.viewport=new ft;let P=[M,D],I=new Zf,H=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=v[j];return te===void 0&&(te=new cs,v[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=v[j];return te===void 0&&(te=new cs,v[j]=te),te.getGripSpace()},this.getHand=function(j){let te=v[j];return te===void 0&&(te=new cs,v[j]=te),te.getHandSpace()};function z(j){let te=T.indexOf(j.inputSource);if(te===-1)return;let re=v[te];re!==void 0&&(re.update(j.inputSource,j.frame,l||n),re.dispatchEvent({type:j.type,data:j.inputSource}))}function Z(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",k);for(let j=0;j<v.length;j++){let te=T[j];te!==null&&(T[j]=null,v[j].disconnect(te))}H=null,N=null,y.reset();for(let j in m)delete m[j];if(e.setRenderTarget(S),c=null,d=null,u=null,r=null,E=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),g!==null){let j=g.camera;j.fov=g.fov,j.zoom=g.zoom,j.updateProjectionMatrix(),g=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){s=j,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:c},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",k),f.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,re=null,be=null;f.depth&&(be=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=f.stencil?lr:Pi,re=f.stencil?Ra:mi);let we={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:a};u=this.getBinding(),d=u.createProjectionLayer(we),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new ii(d.textureWidth,d.textureHeight,{format:ei,type:Yt,depthTexture:new La(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let te={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};c=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),E=new ii(c.framebufferWidth,c.framebufferHeight,{format:ei,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function k(j){for(let te=0;te<j.removed.length;te++){let re=j.removed[te],be=T.indexOf(re);be>=0&&(T[be]=null,v[be].disconnect(re))}for(let te=0;te<j.added.length;te++){let re=j.added[te],be=T.indexOf(re);if(be===-1){for(let ce=0;ce<v.length;ce++)if(ce>=T.length){T.push(re),be=ce;break}else if(T[ce]===null){T[ce]=re,be=ce;break}if(be===-1)break}let we=v[be];we&&we.connect(re)}}let le=new C,q=new C;function Y(j,te,re){le.setFromMatrixPosition(te.matrixWorld),q.setFromMatrixPosition(re.matrixWorld);let be=le.distanceTo(q),we=te.projectionMatrix.elements,ce=re.projectionMatrix.elements,Xe=we[14]/(we[10]-1),Q=we[14]/(we[10]+1),J=(we[9]+1)/we[5],ae=(we[9]-1)/we[5],_e=(we[8]-1)/we[0],xe=(ce[8]+1)/ce[0],Ae=Xe*_e,De=Xe*xe,ke=be/(-_e+xe),Fe=ke*-_e;if(te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Fe),j.translateZ(ke),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),we[10]===-1)j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let L=Xe+ke,ct=Q+ke,Qe=Ae-Fe,Ke=De+(be-Fe),R=J*Q/ct*L,x=ae*Q/ct*L;j.projectionMatrix.makePerspective(Qe,Ke,R,x,L,ct),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ee(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let te=j.near,re=j.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(re=y.depthFar)),I.near=D.near=M.near=te,I.far=D.far=M.far=re,(H!==I.near||N!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),H=I.near,N=I.far),I.layers.mask=j.layers.mask|6,M.layers.mask=I.layers.mask&-5,D.layers.mask=I.layers.mask&-3;let be=j.parent,we=I.cameras;ee(I,be);for(let ce=0;ce<we.length;ce++)ee(we[ce],be);we.length===2?Y(I,M,D):I.projectionMatrix.copy(M.projectionMatrix),g===null&&j.isPerspectiveCamera&&(g={camera:j,fov:j.fov,zoom:j.zoom}),he(j,I,be)};function he(j,te,re){re===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(re.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Pa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&c===null))return o},this.setFoveation=function(j){o=j,d!==null&&(d.fixedFoveation=j),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(I)},this.getCameraTexture=function(j){return m[j]};let fe=null;function je(j,te){if(h=te.getViewerPose(l||n),p=te,h!==null){let re=h.views;c!==null&&(e.setRenderTargetFramebuffer(E,c.framebuffer),e.setRenderTarget(E));let be=!1;re.length!==I.cameras.length&&(I.cameras.length=0,be=!0);for(let ce=0;ce<re.length;ce++){let Xe=re[ce],Q=null;if(c!==null)Q=c.getViewport(Xe);else{let ae=u.getViewSubImage(d,Xe);Q=ae.viewport,ce===0&&(e.setRenderTargetTextures(E,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(E))}let J=P[ce];J===void 0&&(J=new Gt,J.layers.enable(ce),J.viewport=new ft,P[ce]=J),J.matrix.fromArray(Xe.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Xe.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Q.x,Q.y,Q.width,Q.height),ce===0&&(I.matrix.copy(J.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),be===!0&&I.cameras.push(J)}let we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let ce=u.getDepthInformation(re[0]);ce&&ce.isValid&&ce.texture&&y.init(ce,r.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let ce=0;ce<re.length;ce++){let Xe=re[ce].camera;if(Xe){let Q=m[Xe];Q||(Q=new Rc,m[Xe]=Q);let J=u.getCameraImage(Xe);Q.sourceTexture=J}}}}for(let re=0;re<v.length;re++){let be=T[re],we=v[re];be!==null&&we!==void 0&&we.update(be,te,l||n)}fe&&fe(j,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),p=null}let Ce=new cu;Ce.setAnimationLoop(je),this.setAnimationLoop=function(j){fe=j},this.dispose=function(){}}},J_=new Ze,vu=new qe;vu.set(-1,0,0,0,1,0,0,0,1);ty=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ci=null;Qo=class{constructor(e={}){let{canvas:t=Gd(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:c=Yt}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=n;let _=c,y=new Set([Oo,Uo,No]),m=new Set([Yt,mi,Aa,Ra,Lo,Do]),f=new Uint32Array(4),S=new Int32Array(4),E=new C,v=null,T=null,A=[],w=[],g=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,D=!1,P=null,I=null,H=null,N=null;this._outputColorSpace=Lt;let z=0,Z=0,k=null,le=-1,q=null,Y=new ft,ee=new ft,he=null,fe=new it(0),je=0,Ce=t.width,j=t.height,te=1,re=null,be=null,we=new ft(0,0,Ce,j),ce=new ft(0,0,Ce,j),Xe=!1,Q=new Ia,J=!1,ae=!1,_e=new Ze,xe=new C,Ae=new ft,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Fe(){return k===null?te:1}let L=i;function ct(b,O){return t.getContext(b,O)}let Qe,Ke,R,x,U,W,K,pe,me,B,ue,ve,Pe,se,Ue,Oe,We,rt,F,$,ie,Se,Ie;try{let b={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",Tt,!1),t.addEventListener("webglcontextcreationerror",at,!1),L===null){let O="webgl2";if(L=ct(O,b),L===null)throw ct(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ne()}catch(b){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",at,!1),Ve("WebGLRenderer: "+b.message),b}function ne(){Qe=new iv(L),Qe.init(),ie=new q_(L,Qe),Ke=new j0(L,Qe,e,ie),R=new X_(L,Qe),Ke.reversedDepthBuffer&&d&&R.buffers.depth.setReversed(!0),I=L.createFramebuffer(),H=L.createFramebuffer(),N=L.createFramebuffer(),x=new nv(L),U=new I_,W=new j_(L,Qe,R,U,Ke,ie,x),K=new tv(M),pe=new om(L),Se=new W0(L,pe),me=new rv(L,pe,x,Se),B=new ov(L,me,pe,Se,x),rt=new sv(L,Ke,W),Ue=new q0(U),ue=new P_(M,K,Qe,Ke,Se,Ue),ve=new Q_(M,U),Pe=new D_,se=new z_(Qe),We=new H0(M,K,R,B,p,o),Oe=new W_(M,B,Ke),Ie=new ey(L,x,Ke,R),F=new X0(L,Qe,x),$=new av(L,Qe,x),x.programs=ue.programs,M.capabilities=Ke,M.extensions=Qe,M.properties=U,M.renderLists=Pe,M.shadowMap=Oe,M.state=R,M.info=x}_!==Yt&&(g=new hv(_,t.width,t.height,s,r,a));let Me=new K_(M,L);this.xr=Me,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=Qe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Qe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(b){b!==void 0&&(te=b,this.setSize(Ce,j,!1))},this.getSize=function(b){return b.set(Ce,j)},this.setSize=function(b,O,X=!0){if(Me.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=b,j=O,t.width=Math.floor(b*te),t.height=Math.floor(O*te),X===!0&&(t.style.width=b+"px",t.style.height=O+"px"),g!==null&&g.setSize(t.width,t.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(Ce*te,j*te).floor()},this.setDrawingBufferSize=function(b,O,X){Ce=b,j=O,te=X,t.width=Math.floor(b*X),t.height=Math.floor(O*X),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(_===Yt){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Y)},this.getViewport=function(b){return b.copy(we)},this.setViewport=function(b,O,X,V){b.isVector4?we.set(b.x,b.y,b.z,b.w):we.set(b,O,X,V),R.viewport(Y.copy(we).multiplyScalar(te).round())},this.getScissor=function(b){return b.copy(ce)},this.setScissor=function(b,O,X,V){b.isVector4?ce.set(b.x,b.y,b.z,b.w):ce.set(b,O,X,V),R.scissor(ee.copy(ce).multiplyScalar(te).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(b){R.setScissorTest(Xe=b)},this.setOpaqueSort=function(b){re=b},this.setTransparentSort=function(b){be=b},this.getClearColor=function(b){return b.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,X=!0){let V=0;if(b){let G=!1;if(k!==null){let de=k.texture.format;G=y.has(de)}if(G){let de=k.texture.type,ye=m.has(de),Ee=We.getClearColor(),Re=We.getClearAlpha(),Be=Ee.r,Je=Ee.g,tt=Ee.b;ye?(f[0]=Be,f[1]=Je,f[2]=tt,f[3]=Re,L.clearBufferuiv(L.COLOR,0,f)):(S[0]=Be,S[1]=Je,S[2]=tt,S[3]=Re,L.clearBufferiv(L.COLOR,0,S))}else V|=L.COLOR_BUFFER_BIT}O&&(V|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),P=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",at,!1),We.dispose(),Pe.dispose(),se.dispose(),U.dispose(),K.dispose(),B.dispose(),Se.dispose(),Ie.dispose(),ue.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",al),Me.removeEventListener("sessionend",nl),ji.stop()};function Ge(b){b.preventDefault(),eh("WebGLRenderer: Context Lost."),D=!0}function Tt(){eh("WebGLRenderer: Context Restored."),D=!1;let b=x.autoReset,O=Oe.enabled,X=Oe.autoUpdate,V=Oe.needsUpdate,G=Oe.type;ne(),x.autoReset=b,Oe.enabled=O,Oe.autoUpdate=X,Oe.needsUpdate=V,Oe.type=G}function at(b){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ni(b){let O=b.target;O.removeEventListener("dispose",ni),yi(O)}function yi(b){Au(b),U.remove(b)}function Au(b){let O=U.get(b).programs;O!==void 0&&(O.forEach(function(X){ue.releaseProgram(X)}),b.isShaderMaterial&&ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,X,V,G,de){O===null&&(O=De);let ye=G.isMesh&&G.matrixWorld.determinantAffine()<0,Ee=Pu(b,O,X,V,G);R.setMaterial(V,ye);let Re=X.index,Be=1;if(V.wireframe===!0){if(Re=me.getWireframeAttribute(X),Re===void 0)return;Be=2}let Je=X.drawRange,tt=X.attributes.position,Ne=Je.start*Be,st=(Je.start+Je.count)*Be;de!==null&&(Ne=Math.max(Ne,de.start*Be),st=Math.min(st,(de.start+de.count)*Be)),Re!==null?(Ne=Math.max(Ne,0),st=Math.min(st,Re.count)):tt!=null&&(Ne=Math.max(Ne,0),st=Math.min(st,tt.count));let xt=st-Ne;if(xt<0||xt===1/0)return;Se.setup(G,V,Ee,X,Re);let ut,dt=F;if(Re!==null&&(ut=pe.get(Re),dt=$,dt.setIndex(ut)),G.isMesh)V.wireframe===!0?(R.setLineWidth(V.wireframeLinewidth*Fe()),dt.setMode(L.LINES)):dt.setMode(L.TRIANGLES);else if(G.isLine){let gt=V.linewidth;gt===void 0&&(gt=1),R.setLineWidth(gt*Fe()),G.isLineSegments?dt.setMode(L.LINES):G.isLineLoop?dt.setMode(L.LINE_LOOP):dt.setMode(L.LINE_STRIP)}else G.isPoints?dt.setMode(L.POINTS):G.isSprite&&dt.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let gt=G._multiDrawStarts,Le=G._multiDrawCounts,Nt=G._multiDrawCount,qi=Re?pe.get(Re).bytesPerElement:1,Xt=U.get(V).currentProgram.getUniforms();for(let si=0;si<Nt;si++)Xt.setValue(L,"_gl_DrawID",si),dt.render(gt[si]/qi,Le[si])}else if(G.isInstancedMesh)dt.renderInstances(Ne,xt,G.count);else if(X.isInstancedBufferGeometry){let gt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Le=Math.min(X.instanceCount,gt);dt.renderInstances(Ne,xt,Le)}else dt.render(Ne,xt)};function rl(b,O,X,V){P!==null&&b.isNodeMaterial&&P.setObject(V,b),J===!0&&Ue.setState(b,X,!1),b.transparent===!0&&b.side===Ei&&b.forceSinglePass===!1?(b.side=Vt,b.needsUpdate=!0,Xa(b,O,V),b.side=Ci,b.needsUpdate=!0,Xa(b,O,V),b.side=Ei):Xa(b,O,V)}this.compile=function(b,O,X=null){X===null&&(X=b),P!==null&&P.renderStart(b,O,X),T=se.get(X),T.init(O),w.push(T),X.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),b!==X&&b.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),P!==null&&P.updateLights(T.state.lightsArray),ae=this.localClippingEnabled,J=Ue.init(this.clippingPlanes,ae),J===!0&&Ue.setGlobalState(this.clippingPlanes,O),P!==null&&Oe.render(T.state.shadowsArray,X,O);let V=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let de=G.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){let Ee=de[ye];rl(Ee,X,O,G),V.add(Ee)}else rl(de,X,O,G),V.add(de)}),T=w.pop(),P!==null&&P.renderEnd(),V},this.compileAsync=function(b,O,X=null){let V=this.compile(b,O,X);return new Promise(G=>{function de(){if(V.forEach(function(ye){let Ee=U.get(ye).currentProgram;(Ee===void 0||Ee.isReady())&&V.delete(ye)}),V.size===0){G(b);return}setTimeout(de,10)}Qe.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let kn=null;function Ru(b){kn&&kn(b)}function al(){ji.stop()}function nl(){ji.start()}let ji=new cu;ji.setAnimationLoop(Ru),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(b){kn=b,Me.setAnimationLoop(b),b===null?ji.stop():ji.start()},Me.addEventListener("sessionstart",al),Me.addEventListener("sessionend",nl),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;P!==null&&P.renderStart(b,O);let X=Me.enabled===!0&&Me.isPresenting===!0,V=g!==null&&(k===null||X)&&g.begin(M,k);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(g===null||g.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(O),O=Me.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,O,k),T=se.get(b,w.length),T.init(O),T.state.textureUnits=W.getTextureUnits(),w.push(T),_e.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(_e,ti,O.reversedDepth),ae=this.localClippingEnabled,J=Ue.init(this.clippingPlanes,ae),v=Pe.get(b,A.length),v.init(),A.push(v),Me.enabled===!0&&Me.isPresenting===!0){let de=M.xr.getDepthSensingMesh();de!==null&&Hn(de,O,-1/0,M.sortObjects)}Hn(b,O,0,M.sortObjects),v.finish(),P!==null&&P.updateLights(T.state.lightsArray),M.sortObjects===!0&&v.sort(re,be),ke=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ke&&We.addToRenderList(v,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),J===!0&&Ue.beginShadows();let G=T.state.shadowsArray;if(Oe.render(G,b,O),J===!0&&Ue.endShadows(),(V&&g.hasRenderPass())===!1){let de=v.opaque,ye=v.transmissive;if(T.setupLights(),O.isArrayCamera){let Ee=O.cameras;if(ye.length>0)for(let Re=0,Be=Ee.length;Re<Be;Re++){let Je=Ee[Re];ol(de,ye,b,Je)}ke&&We.render(b);for(let Re=0,Be=Ee.length;Re<Be;Re++){let Je=Ee[Re];sl(v,b,Je,Je.viewport)}}else ye.length>0&&ol(de,ye,b,O),ke&&We.render(b),sl(v,b,O)}k!==null&&Z===0&&(W.updateMultisampleRenderTarget(k),W.updateRenderTargetMipmap(k)),V&&g.end(M),b.isScene===!0&&b.onAfterRender(M,b,O),Se.resetDefaultState(),le=-1,q=null,w.pop(),w.length>0?(T=w[w.length-1],W.setTextureUnits(T.state.textureUnits),J===!0&&Ue.setGlobalState(M.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?v=A[A.length-1]:v=null,P!==null&&P.renderEnd()};function Hn(b,O,X,V){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Q)){V&&Ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_e);let de=B.update(b),ye=b.material;ye.visible&&v.push(b,de,ye,X,Ae.z,null,O)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Q))){let de=B.update(b),ye=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ae.copy(b.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ae.copy(de.boundingSphere.center)),Ae.applyMatrix4(b.matrixWorld).applyMatrix4(_e)),Array.isArray(ye)){let Ee=de.groups;for(let Re=0,Be=Ee.length;Re<Be;Re++){let Je=Ee[Re],tt=ye[Je.materialIndex];tt&&tt.visible&&v.push(b,de,tt,X,Ae.z,Je,O)}}else ye.visible&&v.push(b,de,ye,X,Ae.z,null,O)}}let G=b.children;for(let de=0,ye=G.length;de<ye;de++)Hn(G[de],O,X,V)}function sl(b,O,X,V){let{opaque:G,transmissive:de,transparent:ye}=b;T.setupLightsView(X),J===!0&&Ue.setGlobalState(M.clippingPlanes,X),V&&R.viewport(Y.copy(V)),G.length>0&&Wa(G,O,X),de.length>0&&Wa(de,O,X),ye.length>0&&Wa(ye,O,X),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function ol(b,O,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let tt=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new ii(1,1,{generateMipmaps:!0,type:tt?gi:Yt,minFilter:or,samples:Math.max(4,Ke.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}let G=T.state.transmissionRenderTarget[V.id],de=V.viewport||Y;G.setSize(de.z*M.transmissionResolutionScale,de.w*M.transmissionResolutionScale);let ye=M.getRenderTarget(),Ee=M.getActiveCubeFace(),Re=M.getActiveMipmapLevel();M.setRenderTarget(G),M.getClearColor(fe),je=M.getClearAlpha(),je<1&&M.setClearColor(16777215,.5),M.clear(),ke&&We.render(X);let Be=M.toneMapping;M.toneMapping=pi;let Je=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),J===!0&&Ue.setGlobalState(M.clippingPlanes,V),Wa(b,X,V),W.updateMultisampleRenderTarget(G),W.updateRenderTargetMipmap(G),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ne=0,st=O.length;Ne<st;Ne++){let xt=O[Ne],{object:ut,geometry:dt,material:gt,group:Le}=xt;if(gt.side===Ei&&ut.layers.test(V.layers)){let Nt=gt.side;gt.side=Vt,gt.needsUpdate=!0,ll(ut,X,V,dt,gt,Le),gt.side=Nt,gt.needsUpdate=!0,tt=!0}}tt===!0&&(W.updateMultisampleRenderTarget(G),W.updateRenderTargetMipmap(G))}M.setRenderTarget(ye,Ee,Re),M.setClearColor(fe,je),Je!==void 0&&(V.viewport=Je),M.toneMapping=Be}function Wa(b,O,X){let V=O.isScene===!0?O.overrideMaterial:null;for(let G=0,de=b.length;G<de;G++){let ye=b[G],{object:Ee,geometry:Re,group:Be}=ye,Je=ye.material;Je.allowOverride===!0&&V!==null&&(Je=V),Ee.layers.test(X.layers)&&ll(Ee,O,X,Re,Je,Be)}}function ll(b,O,X,V,G,de){P!==null&&G.isNodeMaterial&&P.setObject(b,G),b.onBeforeRender(M,O,X,V,G,de),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(M,O,X,V,b,de),G.transparent===!0&&G.side===Ei&&G.forceSinglePass===!1?(G.side=Vt,G.needsUpdate=!0,M.renderBufferDirect(X,O,V,G,b,de),G.side=Ci,G.needsUpdate=!0,M.renderBufferDirect(X,O,V,G,b,de),G.side=Ei):M.renderBufferDirect(X,O,V,G,b,de),b.onAfterRender(M,O,X,V,G,de)}function Xa(b,O,X){O.isScene!==!0&&(O=De);let V=U.get(b),G=T.state.lights,de=T.state.shadowsArray,ye=G.state.version,Ee=ue.getParameters(b,G.state,de,O,X,T.state.lightProbeGridArray),Re=ue.getProgramCacheKey(Ee),Be=V.programs;V.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;let Je=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;V.envMap=K.get(b.envMap||V.environment,Je),V.envMapRotation=V.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",ni),Be=new Map,V.programs=Be);let tt=Be.get(Re);if(tt!==void 0){if(V.currentProgram===tt&&V.lightsStateVersion===ye)return cl(b,Ee),tt}else Ee.uniforms=ue.getUniforms(b),P!==null&&b.isNodeMaterial&&P.build(b,X,Ee),b.onBeforeCompile(Ee,M),tt=ue.acquireProgram(Ee,Re),Be.set(Re,tt),V.uniforms=Ee.uniforms;let Ne=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=Ue.uniform),cl(b,Ee),V.needsLights=Lu(b),V.lightsStateVersion=ye,V.needsLights&&(Ne.ambientLightColor.value=G.state.ambient,Ne.lightProbe.value=G.state.probe,Ne.sunLights.value=G.state.sun,Ne.sunLightShadows.value=G.state.sunShadow,Ne.directionalLights.value=G.state.directional,Ne.directionalLightShadows.value=G.state.directionalShadow,Ne.spotLights.value=G.state.spot,Ne.spotLightShadows.value=G.state.spotShadow,Ne.rectAreaLights.value=G.state.rectArea,Ne.ltc_1.value=G.state.rectAreaLTC1,Ne.ltc_2.value=G.state.rectAreaLTC2,Ne.pointLights.value=G.state.point,Ne.pointLightShadows.value=G.state.pointShadow,Ne.hemisphereLights.value=G.state.hemi,Ne.sunShadowMatrix.value=G.state.sunShadowMatrix,Ne.sunShadowCascade.value=G.state.sunShadowCascade,Ne.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ne.spotLightMatrix.value=G.state.spotLightMatrix,Ne.spotLightMap.value=G.state.spotLightMap,Ne.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=tt,V.uniformsList=null,tt}function hl(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Rn.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function cl(b,O){let X=U.get(b);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Cu(b,O){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;E.setFromMatrixPosition(O.matrixWorld);for(let X=0,V=b.length;X<V;X++){let G=b[X];if(G.texture!==null&&G.boundingBox.containsPoint(E))return G}return null}function Pu(b,O,X,V,G){O.isScene!==!0&&(O=De),W.resetTextureUnits();let de=O.fog,ye=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,Ee=k===null?M.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:et.workingColorSpace,Re=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Be=K.get(V.envMap||ye,Re),Je=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,tt=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ne=!!X.morphAttributes.position,st=!!X.morphAttributes.normal,xt=!!X.morphAttributes.color,ut=pi;V.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ut=M.toneMapping);let dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,gt=dt!==void 0?dt.length:0,Le=U.get(V),Nt=T.state.lights;if(J===!0&&(ae===!0||b!==q)){let lt=b===q&&V.id===le;Ue.setState(V,b,lt)}let qi=!1;V.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Nt.state.version||Le.outputColorSpace!==Ee||G.isBatchedMesh&&Le.batching===!1||!G.isBatchedMesh&&Le.batching===!0||G.isBatchedMesh&&Le.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Le.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Le.instancing===!1||!G.isInstancedMesh&&Le.instancing===!0||G.isSkinnedMesh&&Le.skinning===!1||!G.isSkinnedMesh&&Le.skinning===!0||G.isInstancedMesh&&Le.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Le.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Le.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Le.instancingMorph===!1&&G.morphTexture!==null||Le.envMap!==Be||V.fog===!0&&Le.fog!==de||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Ue.numPlanes||Le.numIntersection!==Ue.numIntersection)||Le.vertexAlphas!==Je||Le.vertexTangents!==tt||Le.morphTargets!==Ne||Le.morphNormals!==st||Le.morphColors!==xt||Le.toneMapping!==ut||Le.morphTargetsCount!==gt||!!Le.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(qi=!0):(qi=!0,Le.__version=V.version);let Xt=Le.currentProgram;qi===!0&&(Xt=Xa(V,O,G),P&&V.isNodeMaterial&&P.onUpdateProgram(V,Xt,Le));let si=!1,Li=!1,vr=!1,ot=Xt.getUniforms(),yt=Le.uniforms;if(R.useProgram(Xt.program)&&(si=!0,Li=!0,vr=!0),V.id!==le&&(le=V.id,Li=!0),Le.needsLights){let lt=Cu(T.state.lightProbeGridArray,G);Le.lightProbeGrid!==lt&&(Le.lightProbeGrid=lt,Li=!0)}if(si||q!==b){R.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ot.setValue(L,"projectionMatrix",b.projectionMatrix),ot.setValue(L,"viewMatrix",b.matrixWorldInverse);let lt=ot.map.cameraPosition;lt!==void 0&&lt.setValue(L,xe.setFromMatrixPosition(b.matrixWorld)),Ke.logarithmicDepthBuffer&&ot.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ot.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),q!==b&&(q=b,Li=!0,vr=!0)}if(Le.needsLights&&(Nt.state.sunShadowMap.length>0&&ot.setValue(L,"sunShadowMap",Nt.state.sunShadowMap,W),Nt.state.directionalShadowMap.length>0&&ot.setValue(L,"directionalShadowMap",Nt.state.directionalShadowMap,W),Nt.state.spotShadowMap.length>0&&ot.setValue(L,"spotShadowMap",Nt.state.spotShadowMap,W),Nt.state.pointShadowMap.length>0&&ot.setValue(L,"pointShadowMap",Nt.state.pointShadowMap,W)),G.isSkinnedMesh){ot.setOptional(L,G,"bindMatrix"),ot.setOptional(L,G,"bindMatrixInverse");let lt=G.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),ot.setValue(L,"boneTexture",lt.boneTexture,W))}G.isBatchedMesh&&(ot.setOptional(L,G,"batchingTexture"),ot.setValue(L,"batchingTexture",G._matricesTexture,W),ot.setOptional(L,G,"batchingIdTexture"),ot.setValue(L,"batchingIdTexture",G._indirectTexture,W),ot.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&ot.setValue(L,"batchingColorTexture",G._colorsTexture,W));let Di=X.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&rt.update(G,X,Xt),(Li||Le.receiveShadow!==G.receiveShadow)&&(Le.receiveShadow=G.receiveShadow,ot.setValue(L,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(yt.envMapIntensity.value=O.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=iy()),Li){if(ot.setValue(L,"toneMappingExposure",M.toneMappingExposure),Le.needsLights&&Iu(yt,vr),de&&V.fog===!0&&ve.refreshFogUniforms(yt,de),ve.refreshMaterialUniforms(yt,V,te,j,T.state.transmissionRenderTarget[b.id]),Le.needsLights&&Le.lightProbeGrid){let lt=Le.lightProbeGrid;yt.probesSH.value=lt.texture,yt.probesMin.value.copy(lt.boundingBox.min),yt.probesMax.value.copy(lt.boundingBox.max),yt.probesResolution.value.copy(lt.resolution)}Rn.upload(L,hl(Le),yt,W)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Rn.upload(L,hl(Le),yt,W),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ot.setValue(L,"center",G.center),ot.setValue(L,"modelViewMatrix",G.modelViewMatrix),ot.setValue(L,"normalMatrix",G.normalMatrix),ot.setValue(L,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let lt=V.uniformsGroups;for(let sa=0,_r=lt.length;sa<_r;sa++){let dl=lt[sa];Ie.update(dl,Xt),Ie.bind(dl,Xt)}}return Xt}function Iu(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.sunLights.needsUpdate=O,b.sunLightShadows.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Lu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,O,X){let V=U.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),U.get(b.texture).__webglTexture=O,U.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let X=U.get(b);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,X=0){k=b,z=O,Z=X;let V=null,G=!1,de=!1;if(b){let ye=U.get(b);if(ye.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(L.FRAMEBUFFER,ye.__webglFramebuffer),Y.copy(b.viewport),ee.copy(b.scissor),he=b.scissorTest,R.viewport(Y),R.scissor(ee),R.setScissorTest(he),le=-1;return}else if(ye.__webglFramebuffer===void 0)W.setupRenderTarget(b);else if(ye.__hasExternalTextures)W.rebindTextures(b,U.get(b.texture).__webglTexture,U.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Be=b.depthTexture;if(ye.__boundDepthTexture!==Be){if(Be!==null&&U.has(Be)&&(b.width!==Be.image.width||b.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(b)}}let Ee=b.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(de=!0);let Re=U.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[O])?V=Re[O][X]:V=Re[O],G=!0):b.samples>0&&W.useMultisampledRTT(b)===!1?V=U.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?V=Re[X]:V=Re,Y.copy(b.viewport),ee.copy(b.scissor),he=b.scissorTest}else Y.copy(we).multiplyScalar(te).floor(),ee.copy(ce).multiplyScalar(te).floor(),he=Xe;if(X!==0&&(V=I),R.bindFramebuffer(L.FRAMEBUFFER,V)&&R.drawBuffers(b,V),R.viewport(Y),R.scissor(ee),R.setScissorTest(he),G){let ye=U.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,ye.__webglTexture,X)}else if(de){let ye=O;for(let Ee=0;Ee<b.textures.length;Ee++){let Re=U.get(b.textures[Ee]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ee,Re.__webglTexture,X,ye)}}else if(b!==null&&X!==0){let ye=U.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ye.__webglTexture,X)}le=-1};function ul(b){let O=U.get(b);return(O.__readFormat!==b.format||O.__readType!==b.type)&&(O.__readFormat=b.format,O.__readType=b.type,O.__formatReadable=Ke.textureFormatReadable(b.format),O.__typeReadable=Ke.textureTypeReadable(b.type)),O}this.readRenderTargetPixels=function(b,O,X,V,G,de,ye,Ee=0){if(!(b&&b.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=U.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){R.bindFramebuffer(L.FRAMEBUFFER,Re);try{let Be=b.textures[Ee],Je=Be.format,tt=Be.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ee);let Ne=ul(Be);if(Ne.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-V&&X>=0&&X<=b.height-G&&L.readPixels(O,X,V,G,ie.convert(Je),ie.convert(tt),de)}finally{let Be=k!==null?U.get(k).__webglFramebuffer:null;R.bindFramebuffer(L.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,O,X,V,G,de,ye,Ee=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=U.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re)if(O>=0&&O<=b.width-V&&X>=0&&X<=b.height-G){R.bindFramebuffer(L.FRAMEBUFFER,Re);let Be=b.textures[Ee],Je=Be.format,tt=Be.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ee);let Ne=ul(Be);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,st),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),L.readPixels(O,X,V,G,ie.convert(Je),ie.convert(tt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let xt=k!==null?U.get(k).__webglFramebuffer:null;R.bindFramebuffer(L.FRAMEBUFFER,xt);let ut=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Vd(L,ut,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,st),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(st),L.deleteSync(ut),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,X=0){let V=Math.pow(2,-X),G=Math.floor(b.image.width*V),de=Math.floor(b.image.height*V),ye=O!==null?O.x:0,Ee=O!==null?O.y:0;W.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,ye,Ee,G,de),R.unbindTexture()},this.copyTextureToTexture=function(b,O,X=null,V=null,G=0,de=0){let ye,Ee,Re,Be,Je,tt,Ne,st,xt,ut=b.isCompressedTexture?b.mipmaps[de]:b.image;if(X!==null)ye=X.max.x-X.min.x,Ee=X.max.y-X.min.y,Re=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,Je=X.min.y,tt=X.isBox3?X.min.z:0;else{let yt=Math.pow(2,-G);ye=Math.floor(ut.width*yt),Ee=Math.floor(ut.height*yt),b.isDataArrayTexture?Re=ut.depth:b.isData3DTexture?Re=Math.floor(ut.depth*yt):Re=1,Be=0,Je=0,tt=0}V!==null?(Ne=V.x,st=V.y,xt=V.z):(Ne=0,st=0,xt=0);let dt=ie.convert(O.format),gt=ie.convert(O.type),Le;O.isData3DTexture?(W.setTexture3D(O,0),Le=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(W.setTexture2DArray(O,0),Le=L.TEXTURE_2D_ARRAY):(W.setTexture2D(O,0),Le=L.TEXTURE_2D),R.activeTexture(L.TEXTURE0),R.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),R.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),R.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);let Nt=R.getParameter(L.UNPACK_ROW_LENGTH),qi=R.getParameter(L.UNPACK_IMAGE_HEIGHT),Xt=R.getParameter(L.UNPACK_SKIP_PIXELS),si=R.getParameter(L.UNPACK_SKIP_ROWS),Li=R.getParameter(L.UNPACK_SKIP_IMAGES);R.pixelStorei(L.UNPACK_ROW_LENGTH,ut.width),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut.height),R.pixelStorei(L.UNPACK_SKIP_PIXELS,Be),R.pixelStorei(L.UNPACK_SKIP_ROWS,Je),R.pixelStorei(L.UNPACK_SKIP_IMAGES,tt);let vr=b.isDataArrayTexture||b.isData3DTexture,ot=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let yt=U.get(b),Di=U.get(O),lt=U.get(yt.__renderTarget),sa=U.get(Di.__renderTarget);R.bindFramebuffer(L.READ_FRAMEBUFFER,lt.__webglFramebuffer),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,sa.__webglFramebuffer);for(let _r=0;_r<Re;_r++)vr&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,U.get(b).__webglTexture,G,tt+_r),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,U.get(O).__webglTexture,de,xt+_r)),L.blitFramebuffer(Be,Je,ye,Ee,Ne,st,ye,Ee,L.DEPTH_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||U.has(b)){let yt=U.get(b),Di=U.get(O);R.bindFramebuffer(L.READ_FRAMEBUFFER,H),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,N);for(let lt=0;lt<Re;lt++)vr?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yt.__webglTexture,G,tt+lt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,yt.__webglTexture,G),ot?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Di.__webglTexture,de,xt+lt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Di.__webglTexture,de),G!==0?L.blitFramebuffer(Be,Je,ye,Ee,Ne,st,ye,Ee,L.COLOR_BUFFER_BIT,L.NEAREST):ot?L.copyTexSubImage3D(Le,de,Ne,st,xt+lt,Be,Je,ye,Ee):L.copyTexSubImage2D(Le,de,Ne,st,Be,Je,ye,Ee);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ot?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Le,de,Ne,st,xt,ye,Ee,Re,dt,gt,ut.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Le,de,Ne,st,xt,ye,Ee,Re,dt,ut.data):L.texSubImage3D(Le,de,Ne,st,xt,ye,Ee,Re,dt,gt,ut):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,de,Ne,st,ye,Ee,dt,gt,ut.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,de,Ne,st,ut.width,ut.height,dt,ut.data):L.texSubImage2D(L.TEXTURE_2D,de,Ne,st,ye,Ee,dt,gt,ut);R.pixelStorei(L.UNPACK_ROW_LENGTH,Nt),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,qi),R.pixelStorei(L.UNPACK_SKIP_PIXELS,Xt),R.pixelStorei(L.UNPACK_SKIP_ROWS,si),R.pixelStorei(L.UNPACK_SKIP_IMAGES,Li),de===0&&O.generateMipmaps&&L.generateMipmap(Le),R.unbindTexture()},this.initRenderTarget=function(b){U.get(b).__webglFramebuffer===void 0&&W.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?W.setTextureCube(b,0):b.isData3DTexture?W.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?W.setTexture2DArray(b,0):W.setTexture2D(b,0),R.unbindTexture()},this.resetState=function(){z=0,Z=0,k=null,R.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}},f1=new C;});var xu={};Nu(xu,{createField:()=>ny});function ny(e,{onHover:t,onSelect:i}={}){let r=new Qo({antialias:!0,alpha:!1,powerPreference:"high-performance"});r.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),r.setClearColor(723984,1),r.outputColorSpace=Lt,e.prepend(r.domElement);let a=new Ho;a.fog=new ko(723984,10,34);let n=new Gt(52,1,.1,100);n.position.set(0,0,0);let s=new hr;a.add(s);let o=new qo,l=new Map,h=(he,fe)=>{if(l.has(he)){let Ce=l.get(he);Ce.image?(fe.uniforms.uMap.value=Ce,fe.uniforms.uLoaded.value=1):Ce.userData.waiting.push(fe);return}let je=o.load(he,Ce=>{Ce.userData.waiting.forEach(j=>{j.uniforms.uMap.value=Ce,j.uniforms.uLoaded.value=1})});je.colorSpace=Lt,je.userData.waiting=[fe],l.set(he,je)},u=new za(1,1,24,1),d=[],c=12,p=Math.PI*2;function _(he){d.forEach(we=>{s.remove(we.mesh),we.mesh.material.dispose()}),d=[];let fe=he.length,je=Math.max(1,Math.min(4,Math.ceil(fe/14))),Ce=je>=3?2.5:2.8,j=.35,te=Array.from({length:je},()=>[]);he.forEach((we,ce)=>te[ce%je].push(we));let re=te.map(we=>we.reduce((ce,Xe)=>ce+Ce*ki.clamp(Xe.ratio,.66,1.8)+j,0)),be=Math.max(...re);c=Math.max(12,be/(Math.PI*2)),p=be/c,te.forEach((we,ce)=>{let Xe=(ce-(je-1)/2)*(Ce+j),Q=0,J=be/re[ce];we.forEach(ae=>{let _e=Ce*ki.clamp(ae.ratio,.66,1.8),xe=(_e+j)*J/c,Ae=Q+xe/2;Q+=xe;let De=new Zt({vertexShader:ry,fragmentShader:ay,transparent:!0,side:Ci,uniforms:{uMap:{value:null},uBend:{value:0},uHover:{value:0},uShift:{value:0},uAlpha:{value:0},uLoaded:{value:0},uCover:{value:new oe(1,1)}}}),ke=_e/Ce;ae.ratio>ke?De.uniforms.uCover.value.set(ke/ae.ratio,1):De.uniforms.uCover.value.set(1,ae.ratio/ke),h(ae.src,De);let Fe=new kt(u,De);Fe.scale.set(_e,Ce,1),Fe.position.set(Math.sin(Ae)*c,Xe,-Math.cos(Ae)*c),Fe.lookAt(0,Xe,0),Fe.userData.tile={it:ae,mat:De,hover:0,delay:Math.random()*.5},s.add(Fe),d.push(Fe.userData.tile),Fe.userData.tile.mesh=Fe})}),v=0,p<Math.PI*2-.01&&(y=m=-p/2),Z()}let y=0,m=0,f=0,S=0,E=0,v=0,T=!1,A=0,w=0,g=0,M=0,D=new oe(9,9),P=new Jo,I=null,H=r.domElement;H.addEventListener("pointerdown",he=>{T=!0,g=0,M=performance.now(),A=he.clientX,w=he.clientY,H.setPointerCapture(he.pointerId)}),H.addEventListener("pointermove",he=>{let fe=H.getBoundingClientRect();if(D.set((he.clientX-fe.left)/fe.width*2-1,-((he.clientY-fe.top)/fe.height)*2+1),!T)return;let je=he.clientX-A,Ce=he.clientY-w;g+=Math.abs(je)+Math.abs(Ce),m+=je*.0032,E=ki.clamp(E+Ce*.01,-3,3),A=he.clientX,w=he.clientY});let N=he=>{T&&(T=!1,g<6&&performance.now()-M<500&&I&&(i==null||i(I.it)),he.pointerType!=="mouse"&&D.set(9,9))};H.addEventListener("pointerup",N),H.addEventListener("pointercancel",N),H.addEventListener("pointerleave",()=>{T||D.set(9,9)}),H.addEventListener("wheel",he=>{he.preventDefault(),m+=(he.deltaY+he.deltaX)*.0012},{passive:!1});let z=he=>{le&&(he.key==="ArrowRight"&&(m+=.25),he.key==="ArrowLeft"&&(m-=.25))};window.addEventListener("keydown",z);function Z(){let{clientWidth:he,clientHeight:fe}=e;r.setSize(he,fe,!1),n.aspect=he/fe,n.fov=n.aspect<.8?68:52,n.updateProjectionMatrix()}let k=new ResizeObserver(Z);k.observe(e);let le=!1,q=0,Y=new Zo;function ee(){if(q=requestAnimationFrame(ee),Y.update(),!le)return;let he=Math.min(Y.getDelta(),1/30),fe=Y.getElapsed();T||(m+=he*.025);let je=y;y+=(m-y)*Math.min(1,he*5),f+=((y-je)/Math.max(he,.001)-f)*.2,S+=(E-S)*Math.min(1,he*4),T||(E*=Math.pow(.2,he)),s.rotation.y=-y,n.position.y=S*.4,n.rotation.x=-S*.03,v=Math.min(1,v+he*.9),P.setFromCamera(D,n);let Ce=D.x<5?P.intersectObjects(s.children,!1)[0]:null,j=Ce?Ce.object.userData.tile:null;j!==I&&(I=j,H.style.cursor=I?"pointer":"",t==null||t(I?I.it:null));let te=ki.clamp(f*-.6,-1.2,1.2),re=ki.clamp(Math.abs(f)*.004,0,.012);for(let be of d){let we=be.mat.uniforms;be.hover+=((I===be?1:0)-be.hover)*Math.min(1,he*7),we.uHover.value=be.hover,we.uBend.value=te,we.uShift.value=re,we.uAlpha.value=ki.clamp((v-be.delay)*2.2,0,1)}r.render(a,n)}return ee(),{setItems:_,start(){le=!0,Z()},stop(){le=!1},destroy(){cancelAnimationFrame(q),k.disconnect(),window.removeEventListener("keydown",z),r.dispose()}}}var ry,ay,Mu=pl(()=>{el();ry=`
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
  }`,ay=`
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
  }`});var fl=[["001-dsc0189-9f9d69",2400,3600,"cityscape","Tower at Blue Hour","\u84DD\u8C03\u7D2B\u5CF0","Nanjing","blue"],["002-dsc0333-c8dd05",2400,1600,"cityscape","City Beneath Zijin Mountain","\u7D2B\u91D1\u5C71\u4E0B","Nanjing","blue"],["003-dsc0584-975344",2400,1022,"cityscape","Lights On","\u534E\u706F\u521D\u4E0A","","blue"],["004-dsc0682-fe1e91",2400,1022,"cityscape","Skyline After Rain","\u96E8\u540E\u5929\u9645\u7EBF","","blue"],["005-dsc1610-828084",2400,1600,"creativity","Mirror Tunnel","\u955C\u50CF\u96A7\u9053","","geometry"],["006-dsc1699-4e1633",2400,1600,"creativity","Spiral and Mural","\u87BA\u65CB\u4E0E\u58C1\u753B","","geometry"],["007-dsc1823-84f364",2400,3600,"cityscape","Vertical Eye","\u5782\u76F4\u4E4B\u773C","","geometry"],["008-dsc2092-12211c",2400,1600,"documentary","Corner Tower, Still Water","\u89D2\u697C\u5012\u5F71","Beijing","geometry"],["009-dsc2117-75451d",2400,1600,"documentary","Through the Red Gate","\u7EA2\u95E8\u4E4B\u5185","Beijing","geometry"],["010-dsc2606-4d8181",2400,1600,"documentary","Red Wall Walker","\u7EA2\u5899\u884C\u8005","Beijing","people"],["011-dsc2792-nr-7c974a",2400,3600,"cityscape","Golden Theatre","\u91D1\u8272\u5267\u573A","","gold"],["012-dsc2806-23c5cb",2400,1600,"ecological","Gulls","\u9E25\u7FA4","","green"],["013-dsc2829-d3b7a4",2400,1012,"cityscape","The Egg","\u6C34\u4E0A\u4E4B\u86CB","Beijing","geometry"],["014-dsc2985-fc9b11",2400,3600,"cityscape","Rush Hour Canyon","\u8F66\u6D41\u5CE1\u8C37","Beijing","blue"],["015-dsc4232-45aa06",2400,4032,"documentary","Kiosk and Tower","\u62A5\u4EAD\u4E0E\u9AD8\u5854","Beijing","blue"],["016-dsc5793-nr-ef6638",2400,1600,"ecological","Fireflies","\u8424\u706B","","night"],["017-dsc6297-hdr-e8f687",2400,1601,"cityscape","Golden Hour City","\u91D1\u8272\u65F6\u523B","","gold"],["018-dsc7374-17-42-09-c5963f",2400,1600,"landscape","Lightning","\u96F7\u66B4","","night"],["019-dsc7898-83b651",2400,1294,"documentary","Ribbon Dancers I","\u5F69\u7EF8 I","","people"],["020-dsc7986-e6efc1",2400,1600,"documentary","Ribbon Dancers II","\u5F69\u7EF8 II","","people"],["021-dsc8102-nr-e9e9f4",2400,3600,"cityscape","Pavilion Between Towers","\u697C\u5B87\u95F4\u7684\u9601","Nanjing","blue"],["022-dsc9219-nr-1950f1",2400,1600,"cityscape","Riverside Skyline","\u6C5F\u7554\u5929\u9645\u7EBF","Nanjing","blue"],["023-dsc9355-3c77c1",2400,1350,"cityscape","Cable Bridge","\u659C\u62C9\u6865","","blue"],["024-0ae511603acb75dc0e360125e5f0248e-172",2400,1773,"personal","Meili Peaks","\u6885\u91CC\u7FA4\u5CF0","Yunnan","vast"],["025-1-after-41de6a",2400,1600,"creativity","Green Spiral","\u7EFF\u8272\u87BA\u65CB","","geometry"],["026-1b7fe65878e346fd5ecd8451dcae3f05-479",2400,3600,"landscape","Cairn and Summit","\u739B\u5C3C\u5806\u4E0E\u96EA\u5C71","Yunnan","vast"],["027-1c5801269291c3da7f4a414e20c0bd57-f13",2400,1351,"landscape","Lanterns on the Lake","\u6E56\u4E0A\u706F\u4EAD","","gold"],["028-2-2623f0",2400,1600,"cityscape","Light Trails","\u57CE\u5E02\u5149\u8F68","","blue"],["029-2d8051fa03f692e2159f35006aad9522-6a1",2400,2052,"cityscape","Above the City","\u57CE\u5E02\u4E4B\u5DC5","Nanjing","blue"],["030-4c96c5ab95503badba48472345cd7ef6-a6e",2400,4265,"personal","Giant","\u5DE8\u50CF","Shanghai","people"],["031-5ff19237958c602e2af92a4615a911f6-65f",2400,1600,"personal","Arms Wide","\u5F20\u5F00\u53CC\u81C2","","vast"],["032-7a0a67d9dff6e4237b49828b8b7cb3c6-456",2400,4267,"ecological","Meerkat","\u72D0\u7374","","green"],["033-7be8fcc61cb30aaba60e15f2e0cb811d-45b",2400,4265,"personal","Rainbow Umbrella","\u5F69\u8679\u4F1E","Shanghai","people"],["034-7c2983837077aef3bea2f31aa0c38e33-f49",2400,1798,"cityscape","Above the Clouds","\u4E91\u4E0A\u9646\u5BB6\u5634","Shanghai","gold"],["035-8bc9e9036310dc77008427dc8eb390bb-2-a",2400,1352,"personal","Lone Watcher","\u72EC\u671B","Qinghai\u2013Gansu","vast"],["036-8dd14622ffea7d3968df1bdee01de02d-2ad",2400,1600,"cityscape","Dusk Over the City","\u57CE\u5E02\u66AE\u8272","Nanjing","gold"],["037-9aa932bb5e5425dcc5baff682c71f8fa-5c4",2400,1349,"landscape","Autumn Island","\u79CB\u5C9B","","green"],["038-9d566dc000ce36dd126b99410e5fe19e-6a7",2400,1351,"personal","Before Jade Dragon","\u7389\u9F99\u96EA\u5C71\u524D","Yunnan","vast"],["039-9f383a9ec71e15da21c3c6d6a72c3cd1-1b0",2400,1600,"landscape","Star Trails over Meili","\u6885\u91CC\u661F\u8F68","Yunnan","night"],["040-22-a4ee13",2400,1351,"creativity","Spiral Library","\u65CB\u8F6C\u4E66\u9601","","geometry"],["041-24fbb713a612d2f645cdd4c54f2bf16b-036",2400,1701,"documentary","Dragon Lantern Night","\u821E\u9F99\u4E4B\u591C","","people"],["042-30bb61957b841ca16282448f926bf032-1c2",2400,1565,"personal","Framed Summit","\u5CA9\u9699\u4E2D\u7684\u96EA\u5C71","Yunnan","vast"],["043-38e356943a827401e0547616f664f27f-85f",2400,1491,"creativity","Blossom and Machine","\u6A31\u82B1\u4E0E\u673A\u68B0","","green"],["044-38fb078455529e7b290cc129e279967b-07f",2400,3600,"landscape","Alpenglow over Rooftops","\u5C4B\u9876\u4E0A\u7684\u65E5\u7167\u91D1\u5C71","Yunnan","gold"],["045-58a6efe226c870dd99284a7ed16f2f55-17d",2400,1799,"landscape","Ginkgo Lane","\u94F6\u674F\u9053","","green"],["046-62f8e0d79cc509f62a585402ebb4d196-bb9",2400,1349,"personal","Green Field from Above","\u7EFF\u91CE\u4FEF\u77B0","","green"],["047-95d91734cfd86c8a0edcf99c136989d1-59f",2400,1798,"landscape","Road to the Horizon","\u65E0\u5C3D\u516C\u8DEF","Qinghai\u2013Gansu","vast"],["048-259ce06112abf7ea2e516c3a8be41ef9-042",2400,3742,"landscape","Island Spine","\u6E56\u4E2D\u5C9B","","vast"],["049-536c73e47ae9cb1f16a62ec3f1cdaf3b-636",2400,3600,"personal","Photographer at the Window","\u7A97\u8FB9\u7684\u6444\u5F71\u8005","","people"],["050-849ed928250a6e95cd9a80d13ca93594-69d",2400,1588,"cityscape","City Grid","\u57CE\u5E02\u7F51\u683C","","night"],["051-952e28a566f4922169f9ad7bf4df042c-692",2400,1350,"landscape","Red Panda","\u5C0F\u718A\u732B","","green"],["052-1695c8f89e80b1ba393967ded0af4050-dcc",2400,4267,"cityscape","Lantern Canal","\u706F\u7B3C\u6C34\u5DF7","Yunnan","blue"],["053-5101f04f4d3da8a81cd5abece63f54f6-57d",2400,3600,"documentary","Old Town Lane","\u53E4\u57CE\u5C0F\u5DF7","Yunnan","people"],["054-6659a9858b1d0e463ce8f65f04508c2e-dc8",2400,3600,"personal","Into the Snow","\u8D70\u8FDB\u96EA\u5C71","","vast"],["055-26997a435ba4312748f4e74c941b9ce3-5d4",2400,1379,"landscape","Songzanlin in Mist","\u677E\u8D5E\u6797\u5BFA","Yunnan","gold"],["056-a8c9ba24fe01bfd69a43065bceec57b2-cb7",2400,4267,"ecological","Flamingo Heart","\u706B\u70C8\u9E1F\u4E4B\u5FC3","","green"],["057-a8ec4be6c464b356c66f1d3c702f27c9-876",2400,3365,"documentary","Through the Windshield","\u8F66\u7A97\u4E4B\u5916","","people"],["058-a45c7dbff005a764e2bf5c2f7e99cf7f-201",2400,4267,"ecological","Koala","\u8003\u62C9","","green"],["059-a8922ea72d55bf51f3582c960f507c43-1f7",2400,3600,"cityscape","Tower over the Gate","\u57CE\u697C\u4E0E\u5854","Nanjing","blue"],["060-a564378148fd0e0a564881592b714823-5b0",2400,1387,"personal","Grey Dunes","\u7070\u8272\u6C99\u4E18","Qinghai\u2013Gansu","vast"],["061-aba8806e9361f741a58d828175abfe8a-113",2400,1351,"personal","Hay Bale Canyon","\u8349\u579B\u5CE1\u8C37","","vast"],["062-acfe4c813ba9fbf0eca34ccb46152469-9cc",2400,1601,"cityscape","Riverside City","\u6CB3\u7554\u57CE\u5E02","","blue"],["063-b4fed73b8ddfc32733f80fe81db11e70-e7f",2400,1603,"personal","Light Bearer","\u6301\u5149\u8005","Qinghai\u2013Gansu","night"],["064-b0004060-7a6a47",2400,3203,"creativity","Yardang","\u96C5\u4E39","Qinghai\u2013Gansu","vast"],["065-b0004079-3fr-a5327e",2400,1799,"landscape","Star Trails over Yardang","\u96C5\u4E39\u661F\u8F68","Qinghai\u2013Gansu","night"],["066-b0004115-0392f8",2400,1799,"personal","Red on the Ridge","\u5C71\u810A\u4E0A\u7684\u7EA2","Qinghai\u2013Gansu","vast"],["067-b0005171-952639",2400,3203,"cityscape","Zifeng at Dusk","\u7D2B\u5CF0\u66AE\u8272","Nanjing","blue"],["068-b0005974-d5785e",2400,1799,"cityscape","Blue Hour, CBD","\u84DD\u8C03 CBD","Beijing","blue"],["069-b0006009-d1136f",2400,2971,"creativity","Temple in Relief","\u6D6E\u96D5\u5929\u575B","","geometry"],["070-b0006029-3662a1",2400,3203,"cityscape","The Arch","\u592E\u89C6\u5927\u697C","Beijing","geometry"],["071-b0006388-17-38-00-08d8a4",2400,3203,"documentary","Corner Store","\u8857\u89D2\u5C0F\u5E97","","people"],["072-b0006481-3fr-415f28",2400,1799,"ecological","Cabin of Fireflies","\u8424\u706B\u5C0F\u5C4B","","night"],["073-b0006654-724b7d",2400,887,"cityscape","River Panorama","\u6C5F\u666F\u957F\u5377","","gold"],["074-b0006836-14700b",2400,1799,"cityscape","Evening Skyline","\u66AE\u8272\u5929\u9645\u7EBF","","blue"],["075-bd38867c9a7e3929d45f3faf875b3adc-caf",2400,3600,"cityscape","Neon Spiral","\u9713\u8679\u56DE\u65CB","","night"],["076-c2ddb1228fc9179a609c3ffe3e204f06-2-8",2400,1349,"cityscape","City in the Clouds","\u4E91\u4E2D\u57CE","","vast"],["077-c9fef66fd7337bb0026e2e5ac3cccb43-0ab",2400,3593,"personal","Milky Way Through Ruins","\u5E9F\u589F\u94F6\u6CB3","Qinghai\u2013Gansu","night"],["078-c56b1032af02d09b992b07b98c3125a2-7a6",2400,1600,"landscape","Looking Up","\u4EF0\u671B","","green"],["079-c2279d3facbf29a7c6faf1f32ce05bfc-5a5",2400,1600,"cityscape","Bridge Lights","\u6865\u4E0A\u706F\u706B","","blue"],["080-cb41042607433f6c8164e3e430546cae-35a",2400,1523,"documentary","Carousel","\u65CB\u8F6C\u6728\u9A6C","","people"],["081-cc287fc69d6681796c9a4e7f417f6e1c-c76",2400,3601,"landscape","Pavilion Reflection","\u4EAD\u5F71","","green"],["082-cd1d6a8e5c3568dc6b75dae1a2e2eb60-e0a",2400,4265,"personal","Alley Cyclist","\u5DF7\u53E3\u9A91\u884C","","people"],["083-ce730b764721ea8711d0656b25d0026d-0c0",2400,1883,"creativity","Window Cleaners","\u9AD8\u7A7A\u6E05\u6D01","","geometry"],["084-cf5cfc7e8e174b7af7f8f0c35573fcce-856",2400,3800,"ecological","Toucan","\u5DE8\u5634\u9E1F","","green"],["085-d4659493deb99ce15a0a69526d72cc81-55a",2400,1798,"cityscape","Floating Towers","\u60AC\u6D6E\u697C\u7FA4","","vast"],["086-dji-20250614070916-0120-d-ed4542",2400,1798,"cityscape","Tower in the Fog","\u96FE\u4E2D\u5B64\u697C","","vast"],["087-dji-20250821090926-0354-d-e4c4ee",2400,3202,"documentary","Solar Tower","\u5149\u70ED\u5854","Qinghai\u2013Gansu","geometry"],["088-dji-20250821091248-0360-d-8f645e",2400,1501,"creativity","Heliostats","\u5B9A\u65E5\u955C\u9635","Qinghai\u2013Gansu","geometry"],["089-dji-20250823171628-0147-d-e82359",2400,1349,"personal","Green Terraces","\u7EFF\u8272\u7EB9\u7406","","geometry"],["090-dji-20250823201223-0167-d-94b04e",2400,3600,"personal","On the Rock","\u5DE8\u77F3\u4E4B\u4E0A","Qinghai\u2013Gansu","vast"],["091-dji-20250825201510-0182-d-e6f5c0",2400,3600,"personal","Salt Lake Dusk","\u76D0\u6E56\u66AE\u8272","Qinghai\u2013Gansu","gold"],["092-dji-20250826194608-0246-d-4aeb42",2400,1800,"creativity","One Bush","\u6C99\u6D77\u4E00\u682A","Qinghai\u2013Gansu","geometry"],["093-dsc00442-faf4d6",2400,3600,"documentary","Rooftops and Jade Dragon","\u5C4B\u9876\u4E0E\u7389\u9F99","Yunnan","gold"],["094-dsc00719-bbfbaa",2400,3600,"documentary","Old Town Morning","\u53E4\u57CE\u6E05\u6668","Yunnan","people"],["095-dsc03649-724230",2400,1600,"cityscape","Burning Sky","\u706B\u70E7\u4E91\u9646\u5BB6\u5634","Shanghai","gold"],["096-dsc07591-139c76",2400,1351,"creativity","Spiral Stair","\u65CB\u68AF","","geometry"],["097-e5be2255192442d1923a5c0d3ba3d006-d9a",2400,3318,"documentary","Edge of a Roof","\u5C4B\u6A90\u4E00\u89D2","","geometry"],["098-eb059407d811190af44e726be97aebc7-1d5",2400,1367,"cityscape","Gallery Window","\u5C55\u5385\u4E4B\u7A97","","geometry"],["099-ec9355e3a2c039ca4b74235a58d0fbb2-937",2400,1799,"landscape","Violet Forest","\u7D2B\u8272\u68EE\u6797","","green"],["100-ee18bf6a0fee17ca64b2a008ab6f9204-6cc",2400,1350,"ecological","Marmoset","\u72E8\u7334","","green"],["101-efd6cedebd96732721d60eb7a00078fc-0f4",2400,3726,"creativity","Green Arch","\u7EFF\u8272\u62F1\u95E8","","geometry"],["102-f6ad4aff3c2132e15e05f725c129cf55-33f",2400,1725,"landscape","Xueda Lake Mirror","\u96EA\u8FBE\u6E56\u5012\u5F71","Yunnan","blue"],["103-fa3db5adaddb5eb492f65be625f6bcd9-033",2400,1216,"creativity","White Spiral","\u767D\u8272\u65CB\u68AF","","geometry"],["104-fdacd51eac32d9a56e704899c07985bd-300",2400,1124,"documentary","Wedding","\u5A5A\u793C","","people"],["105-fe33a6d5dc5258e930ba60efb9e5d285-695",2400,1725,"landscape","Xueda Lake, Sunrise","\u96EA\u8FBE\u6E56\u65E5\u51FA","Yunnan","gold"],["106-fe40671cfbe700975ed545e8776c8ed0-b9c",2400,1351,"personal","Snowline Viewpoint","\u96EA\u7EBF\u89C2\u666F","Yunnan","gold"],["107-img-1791-2a7131",2400,3200,"creativity","Blocks from Above","\u4FEF\u77B0\u8857\u533A","","geometry"],["108-img-3167-b0e166",2400,1799,"documentary","Fireworks","\u70DF\u706B","","night"],["109-img-3757-b5c78b",2400,1799,"landscape","Ginkgo Road","\u94F6\u674F\u8DEF","","green"],["110-img-3758-7c68ad",2400,1883,"creativity","Facade Rhythm","\u7ACB\u9762\u97F5\u5F8B","","geometry"],["111-img-3759-2-9cefeb",2400,1601,"cityscape","Dish and Star Trails","\u5929\u7EBF\u661F\u8F68","","night"],["112-img-3763-edf3f1",2400,1352,"personal","Standing Tall","\u8FDC\u773A","Qinghai\u2013Gansu","vast"],["113-img-3769-8b3f3a",2400,3596,"personal","Catching Snow","\u63A5\u96EA","","night"],["114-img-4295-b8c376",2400,1359,"landscape","Songzanlin Dawn","\u677E\u8D5E\u6797\u5BFA\u6668\u5149","Yunnan","vast"],["115-img-4424-a27561",2400,1350,"personal","Summit","\u96EA\u5CF0\u4E4B\u4E0A","Yunnan","vast"],["116-img-4429-7d5209",2400,1798,"landscape","Valley from Above","\u96EA\u8C37\u4FEF\u77B0","Yunnan","vast"],["117-img-4431-5457a0",2400,1349,"landscape","Lijiang at Blue Hour","\u4E3D\u6C5F\u84DD\u8C03","Yunnan","blue"],["118-img-4432-d152b5",2400,1351,"landscape","Black Dragon Pool","\u9ED1\u9F99\u6F6D","Yunnan","blue"],["119-img-4507-ac97ec",2400,737,"cityscape","Night Panorama","\u591C\u8272\u957F\u5377","Shanghai","night"],["120-img-4634-8ed884",2400,1799,"landscape","Pavilion and Star Trails","\u9601\u697C\u661F\u8F68","","night"],["121-img-8372-aa4ae6",2400,1799,"ecological","Firefly Forest","\u8424\u706B\u68EE\u6797","","night"],["122-sh-78182e",2400,1711,"cityscape","River Bend at Night","\u591C\u8272\u6C5F\u6E7E","Shanghai","night"],["123-slx06909-daf02f",2400,4055,"personal","Stairway to the Tower","\u901A\u5F80\u9AD8\u5854","Shanghai","geometry"],["124-1-40e905",2400,3601,"cityscape","Interchange","\u7ACB\u4EA4\u5149\u8F68","Beijing","blue"],["125-1-8e43bc",2400,1600,"creativity","X","X","","geometry"],["126-xyj5139-eg01",2400,1600,"landscape","Balloons over the West Bank","\u897F\u5CB8\u70ED\u6C14\u7403","Luxor","vast"],["127-xyj5172-eg02",1717,2576,"documentary","One Balloon, a Thousand Roofs","\u5343\u5C4B\u4E4B\u4E0A","Luxor","geometry"],["128-xyj5178-eg03",2400,1600,"landscape","Hatshepsut from Above","\u4FEF\u77B0\u54C8\u7279\u8C22\u666E\u82CF\u7279\u795E\u5E99","Luxor","gold"],["129-xyj5491-eg04",2400,1600,"landscape","Pyramid in the Fog","\u96FE\u4E2D\u91D1\u5B57\u5854","Giza","vast"],["130-xyj5530-eg05",2400,1600,"documentary","Khufu Through the Glass","\u73BB\u7483\u540E\u7684\u80E1\u592B","Giza","people"],["131-xyj5448-eg06",1718,2576,"cityscape","Minarets and Pyramids","\u5BA3\u793C\u5854\u4E0E\u91D1\u5B57\u5854","Cairo","gold"]];var ml=[{id:"cityscape",en:"Cityscape",zh:"\u57CE\u5E02"},{id:"landscape",en:"Landscape",zh:"\u98CE\u5149"},{id:"personal",en:"On the Road",zh:"\u5728\u8DEF\u4E0A"},{id:"documentary",en:"Documentary",zh:"\u4EBA\u6587\u7EAA\u5B9E"},{id:"creativity",en:"Creative",zh:"\u521B\u610F"},{id:"ecological",en:"Wildlife",zh:"\u751F\u7075"}],Wn=[{id:"blue",en:"Blue Hour",zh:"\u84DD\u8C03\u57CE\u5E02",cover:1,note:"Cities in the cool minutes after sunset, when the lights come on.",noteZh:"\u65E5\u843D\u540E\u7684\u84DD\u8C03\u65F6\u523B\uFF0C\u57CE\u5E02\u4E00\u76CF\u76CF\u4EAE\u8D77\u3002"},{id:"gold",en:"Golden Light",zh:"\u91D1\u8272\u65F6\u523B",cover:95,note:"Alpenglow, burning skies and the warm edges of the day.",noteZh:"\u65E5\u7167\u91D1\u5C71\u3001\u706B\u70E7\u4E91\uFF0C\u4E00\u5929\u4E2D\u6700\u6696\u7684\u8FB9\u7F18\u3002"},{id:"vast",en:"Wide Open",zh:"\u8FBD\u9614",cover:47,note:"Plateaus, peaks, fog seas \u2014 and one small figure for scale.",noteZh:"\u9AD8\u539F\u3001\u96EA\u5C71\u4E0E\u4E91\u6D77\uFF0C\u4EE5\u53CA\u753B\u9762\u91CC\u90A3\u4E2A\u5C0F\u5C0F\u7684\u4EBA\u3002"},{id:"night",en:"After Dark",zh:"\u591C\u4E0E\u661F",cover:39,note:"Star trails, fireflies, lightning and neon.",noteZh:"\u661F\u8F68\u3001\u8424\u706B\u3001\u95EA\u7535\u4E0E\u9713\u8679\u3002"},{id:"geometry",en:"Geometry",zh:"\u51E0\u4F55",cover:25,note:"Spirals, symmetry and patterns found in architecture and land.",noteZh:"\u5728\u5EFA\u7B51\u4E0E\u5927\u5730\u4E2D\u53D1\u73B0\u7684\u87BA\u65CB\u3001\u5BF9\u79F0\u4E0E\u79E9\u5E8F\u3002"},{id:"people",en:"Human Moments",zh:"\u4EBA\u95F4",cover:20,note:"Streets, festivals and the people inside the frame.",noteZh:"\u8857\u5934\u3001\u8282\u5E86\uFF0C\u4EE5\u53CA\u753B\u9762\u91CC\u7684\u4EBA\u3002"},{id:"green",en:"Living Green",zh:"\u751F\u7075\u8349\u6728",cover:51,note:"Animals, forests and the turning seasons.",noteZh:"\u52A8\u7269\u3001\u68EE\u6797\u4E0E\u5B63\u8282\u7684\u6D41\u8F6C\u3002"}],yr=e=>Wn.find(t=>t.id===e),Xn=new Set([3,4,23,31,38,43,45,46,49,53,57,58,62,67,73,74,83,93,98,100,101,104,112,113,116,117,119]),gl=fl.map(([e,t,i,r,a,n,s,o],l)=>({n:l+1,id:e,w:t,h:i,ratio:t/i,cat:r,style:o,title:a,zh:n,place:s,s:`media/s/${e}.webp`,m:`media/m/${e}.webp`,l:`media/l/${e}.webp`})),Yi=gl.filter(e=>!Xn.has(e.n)),jn=e=>gl[e-1],vl=e=>typeof window!="undefined"&&window.X1NG_TEX&&window.X1NG_TEX[e.id]||e.s;var _l=[{id:"yunnan",en:"Yunnan Journey",zh:"\u4E91\u5357\u4E4B\u65C5",region:"Lijiang \xB7 Shangri-La \xB7 Meili",year:"2024",tags:["Travel","Alpine","Guide"],cover:102,lede:"Six days between old towns and glaciers \u2014 chasing the first gold on Meili, the morning haze over Songzanlin and the blue hour mirror of Xueda Lake.",ledeZh:"\u4ECE\u53E4\u57CE\u4E3D\u6C5F\u5230\u6885\u91CC\u96EA\u5C71\uFF0C\u516D\u5929\u4E94\u665A\u8FFD\u9010\u65E5\u7167\u91D1\u5C71\u3001\u677E\u8D5E\u6797\u5BFA\u6668\u96FE\u4E0E\u96EA\u8FBE\u6E56\u7684\u84DD\u8C03\u5012\u5F71\u3002",frames:[102,39,44,55,114,24,42,105,106,115,38,116,118,117,93,94,52,53,26],guide:"yunnan",chapter:1,days:"6 days"},{id:"qinggan",en:"Qinghai\u2013Gansu Loop",zh:"\u9752\u7518\u5927\u73AF\u7EBF",region:"Qinghai \xB7 Gansu \xB7 Northwest China",year:"2024",tags:["Travel","Desert","Night sky"],cover:47,lede:"A long loop across the plateau: salt lakes that hold the sky, yardang ridges under turning stars, and roads that simply keep going.",ledeZh:"\u7A7F\u8D8A\u9752\u6D77\u4E0E\u7518\u8083\u7684\u9AD8\u539F\u4E0E\u6208\u58C1\uFF1A\u5012\u6620\u5929\u7A7A\u7684\u76D0\u6E56\u3001\u661F\u8F68\u4E0B\u7684\u96C5\u4E39\uFF0C\u4EE5\u53CA\u6CA1\u6709\u5C3D\u5934\u7684\u516C\u8DEF\u3002",frames:[47,65,91,63,77,64,60,35,112,92,88,87,90,66],guide:"qinggan",chapter:2,days:"Loop"},{id:"egypt",en:"Egypt, from the Air",zh:"\u57C3\u53CA \xB7 \u5149\u4E0E\u6C99",region:"Luxor \xB7 Hurghada \xB7 Giza \xB7 Cairo",year:"2026",tags:["Travel","Aerial","Journal"],cover:128,lede:"Dawn over the West Bank in a balloon basket, Hatshepsut cut into the cliff below, then the pyramids again and again \u2014 in fog, through glass, behind the minarets of Cairo.",ledeZh:"\u5728\u5362\u514B\u7D22\u897F\u5CB8\u7684\u70ED\u6C14\u7403\u4E0A\u7B49\u65E5\u51FA\uFF0C\u811A\u4E0B\u662F\u5D4C\u8FDB\u5C71\u5D16\u7684\u54C8\u7279\u8C22\u666E\u82CF\u7279\u795E\u5E99\uFF1B\u518D\u5230\u5409\u8428\uFF0C\u96FE\u91CC\u3001\u73BB\u7483\u540E\u3001\u5F00\u7F57\u5BA3\u793C\u5854\u80CC\u540E\uFF0C\u4E00\u6B21\u6B21\u9047\u89C1\u91D1\u5B57\u5854\u3002",frames:[128,126,129,127,130,131],journal:{href:"egypt/",en:"Egypt, in Motion",zh:"\u57C3\u53CA\u968F\u7B14",note:"Six days of essays and Live Photos \u2014 balloons, the Red Sea and a driver with a book of five-star reviews.",noteZh:"\u516D\u5929\u7684\u968F\u7B14\u4E0E\u5B9E\u51B5\u7167\u7247\u3002"},chapter:3,days:"6 days"}],yl=[{id:"cities",en:"Cities After Dusk",zh:"\u57CE\u5E02\u66AE\u8272",region:"Nanjing \xB7 Beijing \xB7 Shanghai",year:"2023\u2014",tags:["Cityscape","Blue hour","Night"],cover:95,lede:"Home is Nanjing, but the habit travels: wait for the blue hour, find the high ground, let the city switch itself on.",ledeZh:"\u5E38\u9A7B\u5357\u4EAC\uFF0C\u4E5F\u5728\u5317\u4EAC\u3001\u4E0A\u6D77\u7684\u9AD8\u5904\u7B49\u5F85\u84DD\u8C03\u65F6\u523B\uFF0C\u770B\u57CE\u5E02\u4E00\u76CF\u76CF\u4EAE\u8D77\u6765\u3002",frames:[95,21,1,29,22,67,36,59,2,8,13,14,68,70,124,33,34,119,123,17,74,79]},{id:"above",en:"From Above",zh:"\u9AD8\u7A7A",region:"Drone work",year:"2023\u2014",tags:["Aerial","Patterns","Fog"],cover:86,lede:"Four hundred metres changes everything. Fog becomes an ocean, streets become circuitry, and a single tower becomes an island.",ledeZh:"\u5347\u5230\u56DB\u767E\u7C73\u9AD8\u7A7A\uFF1A\u96FE\u53D8\u6210\u6D77\uFF0C\u8857\u9053\u53D8\u6210\u7535\u8DEF\uFF0C\u4E00\u680B\u697C\u4E5F\u80FD\u6210\u4E3A\u5B64\u5C9B\u3002",frames:[86,76,85,122,50,107,46,89,37,48,28]},{id:"geometry",en:"Geometry of Light",zh:"\u5149\u7684\u51E0\u4F55",region:"Architecture studies",year:"2023\u2014",tags:["Creative","Spirals","Symmetry"],cover:25,lede:"Spirals, tunnels, facades \u2014 buildings looked at until they stop being buildings and turn into drawings made of light.",ledeZh:"\u65CB\u68AF\u3001\u96A7\u9053\u4E0E\u7ACB\u9762\uFF1A\u4E00\u76F4\u770B\u7740\u5EFA\u7B51\uFF0C\u76F4\u5230\u5B83\u53D8\u6210\u4E00\u5F20\u7531\u5149\u6784\u6210\u7684\u56FE\u3002",frames:[25,5,96,7,103,40,6,101,83,11,69,97,125]},{id:"people",en:"Human Scale",zh:"\u4EBA\u95F4",region:"Street & documentary",year:"2023\u2014",tags:["Documentary","Street","Festivals"],cover:20,lede:"Close enough to notice the gesture, far enough to let it stay true \u2014 ribbon dancers at dawn, lantern nights, a quiet corner shop.",ledeZh:"\u8DB3\u591F\u8FD1\uFF0C\u80FD\u770B\u89C1\u52A8\u4F5C\uFF1B\u8DB3\u591F\u8FDC\uFF0C\u8BA9\u5B83\u4FDD\u6301\u771F\u5B9E\u2014\u2014\u6668\u7EC3\u7684\u5F69\u7EF8\u3001\u706F\u4F1A\u7684\u591C\u665A\u3001\u8857\u89D2\u7684\u5C0F\u5E97\u3002",frames:[20,19,41,80,10,9,57,71,82,104,108,15]},{id:"wild",en:"Living Things",zh:"\u751F\u7075",region:"Wildlife & night forests",year:"2023\u2014",tags:["Wildlife","Fireflies","Birds"],cover:16,lede:"Fireflies drifting through a summer forest, gulls over grey water, and the patient faces of animals that did not ask to be photographed.",ledeZh:"\u590F\u591C\u68EE\u6797\u91CC\u7684\u8424\u706B\u3001\u7070\u8272\u6C34\u9762\u4E0A\u7684\u9E25\u7FA4\uFF0C\u4EE5\u53CA\u90A3\u4E9B\u5B89\u9759\u770B\u7740\u955C\u5934\u7684\u52A8\u7269\u3002",frames:[16,72,121,12,84,51,56,32,58,100]}];[..._l,...yl].forEach(e=>{e.frames=e.frames.filter(t=>!Xn.has(t))});var xl=e=>yl.find(t=>t.frames.includes(e)),Ml=e=>_l.find(t=>t.frames.includes(e)),uy=[126,102,95,129,20,25,86,128,39,47,21,131,55,8,65,34,16,125,77,91,13,124,44,88,56,70,1,122,96,63].filter(e=>!Xn.has(e)),Uu=["https://pan.baidu.com/s/1fnFnoaW2alaQI63GItltfA?pwd=kstr","https://pan.baidu.com/s/1775m0DJv7OFWcWVAMIeXZw?pwd=pwf4","https://pan.baidu.com/s/1XXkvom-n1fwFqzEBoM4FJA?pwd=rs6p","https://pan.baidu.com/s/1IiiMzlhrWWz0hEg7ZYSeag?pwd=qdzm","https://pan.baidu.com/s/120DBmMflVaZCZHr6xdob6A?pwd=te1v","https://pan.baidu.com/s/1rHAFtN0DR6w_wzR7ujd7Aw?pwd=rpr1","https://pan.baidu.com/s/1_XIhdbo_7mT_Tn1f6XMD6Q?pwd=yei2","https://pan.baidu.com/s/1yGv2M1PoIASG2z58Cg55VQ?pwd=qgqb"],dy=[1,2,3,4,5,6,7,8].map(e=>({id:e,before:`media/raw/${e}_before.webp`,after:`media/raw/${e}_after.webp`,pan:Uu[e-1]||null})),Zi={email:"2193177455@qq.com",links:[{label:"Xiaohongshu \u5C0F\u7EA2\u4E66",short:"\u5C0F\u7EA2\u4E66",href:"https://www.xiaohongshu.com/user/profile/631b5c64000000002303dc06"},{label:"Douyin \u6296\u97F3",short:"Douyin",href:"https://v.douyin.com/pIs2kYdlksE/"},{label:"500px",short:"500px",href:"https://500px.com/p/xingyujieeeeee"}]};var Ft=window.gsap,Yn=window.matchMedia("(hover: hover) and (pointer: fine)").matches,$i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,El=(e,t,i)=>Math.min(i,Math.max(t,e)),bl=["1.4","2","2.8","4","5.6","8","11","16","22"];function wl(){let e=document.createElement("div");e.className="iris",e.setAttribute("aria-hidden","true"),e.innerHTML='<canvas></canvas><div class="iris__label"><span class="mono iris__stop">\u0192/1.4</span><span class="iris__to"></span></div>',document.body.append(e);let t=e.querySelector("canvas"),i=t.getContext("2d"),r=e.querySelector(".iris__stop"),a=e.querySelector(".iris__to"),n=7,s={open:1,cx:.5,cy:.5},o=0,l=0,h=1,u=()=>{h=Math.min(window.devicePixelRatio||1,1.5),o=innerWidth,l=innerHeight,t.width=Math.round(o*h),t.height=Math.round(l*h),d()};function d(){let c=s.open;if(i.setTransform(h,0,0,h,0,0),i.clearRect(0,0,o,l),e.classList.toggle("is-active",c<.999),c>=.999)return;let p=s.cx*o,_=s.cy*l,y=Math.hypot(Math.max(p,o-p),Math.max(_,l-_)),m=c*y*1.32,f=(1-c)*1.25+.3,S=y*3,E=[],v=[];for(let A=0;A<n;A++){let w=f+A/n*Math.PI*2;E.push([p+Math.cos(w)*m,_+Math.sin(w)*m]);let g=f+(A+.5)/n*Math.PI*2+Math.PI/2;v.push([Math.cos(g),Math.sin(g)])}i.beginPath(),i.rect(0,0,o,l),m>.5&&E.forEach((A,w)=>w?i.lineTo(A[0],A[1]):i.moveTo(A[0],A[1])),i.fillStyle="#0b0c10",i.fill("evenodd");for(let A=0;A<n;A++){let w=E[(A+1)%n],g=E[(A+2)%n],M=v[A],D=v[(A+1)%n];i.beginPath(),i.moveTo(w[0],w[1]),i.lineTo(w[0]+M[0]*S,w[1]+M[1]*S),i.lineTo(g[0]+D[0]*S,g[1]+D[1]*S),i.lineTo(g[0],g[1]),i.closePath();let P=i.createLinearGradient(w[0],w[1],w[0]+M[0]*y,w[1]+M[1]*y),I=A%2?0:6;P.addColorStop(0,`rgb(${22+I},${24+I},${33+I})`),P.addColorStop(.35,`rgb(${12+I},${13+I},${18+I})`),P.addColorStop(1,"#0b0c10"),i.fillStyle=P,i.fill(),i.beginPath(),i.moveTo(w[0],w[1]),i.lineTo(w[0]+M[0]*S,w[1]+M[1]*S),i.strokeStyle=`rgba(120,135,255,${.18+(1-c)*.22})`,i.lineWidth=1,i.stroke()}m>1&&(i.beginPath(),E.forEach((A,w)=>w?i.lineTo(A[0],A[1]):i.moveTo(A[0],A[1])),i.closePath(),i.strokeStyle="rgba(34,51,255,.9)",i.lineWidth=2,i.stroke());let T=bl[Math.round(El(1-c,0,1)*(bl.length-1))];r.textContent=`\u0192/${T}`}return window.addEventListener("resize",u),u(),{el:e,shut(c=""){Ft==null||Ft.killTweensOf(s),s.open=0,s.cx=.5,s.cy=.5,a.textContent=c,e.classList.add("show-label"),d()},close({x:c=.5,y:p=.5,label:_="",duration:y=.85}={}){return new Promise(m=>{if(s.cx=c,s.cy=p,a.textContent=_,$i||!Ft){s.open=0,d(),m();return}e.classList.add("show-label"),Ft.killTweensOf(s),Ft.to(s,{open:0,duration:y,ease:"expo.inOut",onUpdate:d,onComplete:m})})},open({duration:c=1.15,delay:p=.05}={}){return new Promise(_=>{if($i||!Ft){s.open=1,d(),_();return}Ft.killTweensOf(s),e.classList.remove("show-label"),Ft.to(s,{open:1,duration:c,delay:p,ease:"expo.inOut",onUpdate:d,onComplete:_})})}}}var oa=new Set,qn=!1;function Al(){if(!oa.size){qn=!1;return}let e=innerWidth,t=innerHeight,i=0;oa.forEach(r=>{if(!r.isConnected){oa.delete(r);return}let a=r.getBoundingClientRect();!a.width&&!a.height||a.top<t*.92&&a.bottom>0&&a.left<e&&a.right>0&&(r.style.setProperty("--rd",`${(+r.dataset.revealDelay||0)+Math.min(i,6)*.08}s`),r.classList.add("is-in"),setTimeout(()=>r.classList.add("is-done"),1800+i*80),oa.delete(r),i++)}),setTimeout(()=>requestAnimationFrame(Al),90)}function Rl(e=document){let t=[...e.querySelectorAll("[data-reveal]:not(.is-in)")];if(t.length){if($i){t.forEach(i=>i.classList.add("is-in","is-done"));return}t.forEach(i=>oa.add(i)),qn||(qn=!0,requestAnimationFrame(Al))}}function Cl(e=".pill, .menu-btn, .next__go, .icon-btn, .lb__close, [data-magnetic]"){!Yn||$i||!Ft||document.addEventListener("pointermove",t=>{var o,l;let i=(l=(o=t.target).closest)==null?void 0:l.call(o,e);if(!i)return;let r=i.getBoundingClientRect(),a=t.clientX-(r.left+r.width/2),n=t.clientY-(r.top+r.height/2),s=+(i.dataset.magnetic||.28);Ft.to(i,{x:a*s,y:n*s,duration:.5,ease:"power3.out",overwrite:"auto"}),i.__mag||(i.__mag=!0,i.addEventListener("pointerleave",()=>Ft.to(i,{x:0,y:0,duration:.9,ease:"elastic.out(1, .35)",overwrite:"auto"})))},{passive:!0})}function Pl(){if(!Yn||$i||!Ft)return;let e=document.createElement("div");e.className="lens",e.setAttribute("aria-hidden","true"),e.innerHTML="<i></i><i></i><i></i><i></i><b></b>",document.body.append(e),document.documentElement.classList.add("has-lens");let i=-100,r=-100,a=i,n=r,s=34,o=34,l=34,h=34,u=null;window.addEventListener("pointermove",d=>{i=d.clientX,r=d.clientY},{passive:!0}),document.addEventListener("pointerover",d=>{let c=d.target.closest('a, button, summary, [role="button"], input[type="range"], label');u=c&&!c.closest("[data-cursor], .vf, .field-view")?c:null,e.classList.toggle("is-lock",!!u)}),document.addEventListener("pointerdown",()=>e.classList.add("is-press")),document.addEventListener("pointerup",()=>e.classList.remove("is-press")),document.addEventListener("pointerleave",()=>e.classList.add("is-gone")),document.addEventListener("pointerenter",()=>e.classList.remove("is-gone")),Ft.ticker.add(()=>{let d=i,c=r;if(u&&u.isConnected){let p=u.getBoundingClientRect();d=p.left+p.width/2+(i-(p.left+p.width/2))*.12,c=p.top+p.height/2+(r-(p.top+p.height/2))*.12,l=Math.min(p.width+14,520),h=Math.min(p.height+14,220)}else l=34,h=34;a+=(d-a)*.22,n+=(c-n)*.22,s+=(l-s)*.2,o+=(h-o)*.2,e.style.transform=`translate3d(${a-s/2}px, ${n-o/2}px, 0)`,e.style.width=`${s}px`,e.style.height=`${o}px`,e.lastChild.style.transform=`translate3d(${i-a+s/2-2}px, ${r-n+o/2-2}px, 0)`,e.classList.toggle("is-quiet",!!document.querySelector(".cursor.is-active"))})}var Sl="#%&*+=<>/\\0123456789ABCDEFGHJKLMNPRSTUVXYZ";function Tl(e,{duration:t=.9}={}){if(!e||$i)return;let i=e.dataset.text||e.textContent;e.dataset.text=i;let r=[...i],a=performance.now();cancelAnimationFrame(e.__scr);let n=s=>{let o=El((s-a)/(t*1e3),0,1);e.textContent=r.map((l,h)=>{if(!/[A-Za-z0-9]/.test(l))return l;let u=h/r.length*.7+.3;return o>=u?l:Sl[Math.random()*Sl.length|0]}).join(""),o<1?e.__scr=requestAnimationFrame(n):e.textContent=i};e.__scr=requestAnimationFrame(n)}function Il(e=document){let t=[...e.querySelectorAll("[data-scramble]")];if(!t.length||$i||!("IntersectionObserver"in window))return;let i=new IntersectionObserver(r=>r.forEach(a=>{a.isIntersecting&&(Tl(a.target),i.unobserve(a.target))}),{threshold:.6});t.forEach(r=>i.observe(r)),Yn&&e.addEventListener("pointerover",r=>{var n,s;let a=(s=(n=r.target).closest)==null?void 0:s.call(n,"[data-scramble-host]");a&&!a.contains(r.relatedTarget)&&a.querySelectorAll("[data-scramble]").forEach(o=>Tl(o,{duration:.5}))})}var Ll=matchMedia("(prefers-reduced-motion: reduce)").matches,Ou=matchMedia("(hover: hover) and (pointer: fine)").matches,Fu="attribute vec2 p; varying vec2 v; void main(){ v = p * 0.5 + 0.5; gl_Position = vec4(p, 0.0, 1.0); }",Bu=`
precision highp float;
uniform sampler2D tex; uniform vec2 scale, off, px; uniform vec3 light; uniform float develop, hover, t;
varying vec2 v;
float lum(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
float hh(vec2 q){ return fract(sin(dot(q, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 q){ vec2 i = floor(q), f = fract(q); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hh(i), hh(i + vec2(1, 0)), f.x), mix(hh(i + vec2(0, 1)), hh(i + vec2(1, 1)), f.x), f.y); }
float H(vec2 u){
  // broad forms from a blurred copy, a little fine detail on top
  float b = lum(texture2D(tex, u, 3.5).rgb);
  float m = lum(texture2D(tex, u, 1.5).rgb);
  return b * 0.6 + m * 0.4 + (1.0 - u.y) * 0.06;
}
void main(){
  vec2 u = off + v * scale; u.y = 1.0 - u.y;
  vec3 col = texture2D(tex, u).rgb;
  vec2 e = px * 3.0;
  float hx = H(u + vec2(e.x, 0.0)) - H(u - vec2(e.x, 0.0));
  float hy = H(u - vec2(0.0, e.y)) - H(u + vec2(0.0, e.y));
  vec3 n = normalize(vec3(-hx * 11.0, -hy * 11.0, 1.0));
  float lam = max(dot(n, normalize(light)), 0.0);
  float spec = pow(max(dot(reflect(-normalize(light), n), vec3(0.0, 0.0, 1.0)), 0.0), 24.0);
  // plaster: warm white, lit by the raking light
  float cav = smoothstep(0.0, 0.5, H(u));                         // deeper hollows hold a little shadow
  vec3 plaster = vec3(0.91, 0.895, 0.86) * (0.26 + 0.86 * lam) * (0.82 + 0.18 * cav) + spec * 0.14;
  // the photograph, with a touch of the relief still in it while hovered
  vec3 photo = col * mix(1.0, 0.72 + 0.55 * lam, hover * 0.75) + spec * hover * 0.18;
  // developing: the colour floods in from the shadows up, with a little noise
  float n2 = vn(v * 7.0) * 0.65 + vn(v * 23.0) * 0.35;
  float th = (1.0 - lum(col)) * 0.45 + n2 * 0.4;                  // shadows develop first, in soft organic patches
  float k = smoothstep(th - 0.12, th + 0.06, develop * 1.3 - 0.12);
  gl_FragColor = vec4(mix(plaster, photo, k), 1.0);
}`,Te=null,oi=null,Ki=null,Ni={},$n=[],Zn=0,ha=-1,ca=-1;function zu(){if(oi=document.createElement("canvas"),Te=oi.getContext("webgl",{premultipliedAlpha:!1,antialias:!1,preserveDrawingBuffer:!0}),!Te)return!1;let e=(r,a)=>{let n=Te.createShader(r);if(Te.shaderSource(n,a),Te.compileShader(n),!Te.getShaderParameter(n,Te.COMPILE_STATUS))throw new Error(Te.getShaderInfoLog(n));return n};Ki=Te.createProgram(),Te.attachShader(Ki,e(Te.VERTEX_SHADER,Fu)),Te.attachShader(Ki,e(Te.FRAGMENT_SHADER,Bu)),Te.linkProgram(Ki),Te.useProgram(Ki);let t=Te.createBuffer();Te.bindBuffer(Te.ARRAY_BUFFER,t),Te.bufferData(Te.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),Te.STATIC_DRAW);let i=Te.getAttribLocation(Ki,"p");return Te.enableVertexAttribArray(i),Te.vertexAttribPointer(i,2,Te.FLOAT,!1,0,0),["tex","scale","off","px","light","develop","hover","t"].forEach(r=>{Ni[r]=Te.getUniformLocation(Ki,r)}),window.addEventListener("pointermove",r=>{ha=r.clientX,ca=r.clientY,la()},{passive:!0}),window.addEventListener("scroll",la,{passive:!0}),window.addEventListener("resize",()=>{$n.forEach(r=>{r.dirty=!0}),la()}),!0}function Gu(e){let i=document.createElement("canvas");i.width=1024,i.height=1024,i.getContext("2d").drawImage(e,0,0,1024,1024);let r=Te.createTexture();return Te.bindTexture(Te.TEXTURE_2D,r),Te.pixelStorei(Te.UNPACK_FLIP_Y_WEBGL,!1),Te.texImage2D(Te.TEXTURE_2D,0,Te.RGBA,Te.RGBA,Te.UNSIGNED_BYTE,i),Te.generateMipmap(Te.TEXTURE_2D),Te.texParameteri(Te.TEXTURE_2D,Te.TEXTURE_MIN_FILTER,Te.LINEAR_MIPMAP_LINEAR),Te.texParameteri(Te.TEXTURE_2D,Te.TEXTURE_MAG_FILTER,Te.LINEAR),Te.texParameteri(Te.TEXTURE_2D,Te.TEXTURE_WRAP_S,Te.CLAMP_TO_EDGE),Te.texParameteri(Te.TEXTURE_2D,Te.TEXTURE_WRAP_T,Te.CLAMP_TO_EDGE),r}function Vu(e){let t=e.canvas.getBoundingClientRect(),i=Math.min(window.devicePixelRatio||1,1.5),r=Math.max(2,Math.min(1400,Math.round(t.width*i))),a=Math.max(2,Math.min(1400,Math.round(t.height*i)));(e.canvas.width!==r||e.canvas.height!==a)&&(e.canvas.width=r,e.canvas.height=a),(oi.width<r||oi.height<a)&&(oi.width=Math.max(oi.width,r),oi.height=Math.max(oi.height,a)),Te.viewport(0,oi.height-a,r,a),Te.bindTexture(Te.TEXTURE_2D,e.tex);let n=t.width/t.height,s=e.ratio,o=n>s?1:n/s,l=n>s?s/n:1;Te.uniform2f(Ni.scale,o,l),Te.uniform2f(Ni.off,(1-o)/2,(1-l)/2),Te.uniform2f(Ni.px,1/Math.max(200,t.width),1/Math.max(200,t.height));let h=ha<0?-.6:(ha-(t.left+t.width/2))/(t.width/2),u=ca<0?.7:-(ca-(t.top+t.height/2))/(t.height/2);Te.uniform3f(Ni.light,Math.max(-1.5,Math.min(1.5,h)),Math.max(-1.5,Math.min(1.5,u)),.9),Te.uniform1f(Ni.develop,e.dev),Te.uniform1f(Ni.hover,e.hov),Te.uniform1i(Ni.tex,0),Te.drawArrays(Te.TRIANGLE_STRIP,0,4),e.ctx.clearRect(0,0,r,a),e.ctx.drawImage(oi,0,0,r,a,0,0,r,a)}function ku(){Zn=0;let e=innerHeight,t=!1;$n.forEach(i=>{if(!i.tex)return;let r=i.canvas.getBoundingClientRect();if(r.bottom<-40||r.top>e+40||!r.width)return;let a=Ll?1:Math.min(1,Math.max(0,(e*.98-(r.top+r.height*.35))/(e*.5)));i.devT=Math.max(i.devT,a);let n=Ou&&ha>=r.left&&ha<=r.right&&ca>=r.top&&ca<=r.bottom,s=n?1:0,o=i.dev,l=i.hov;i.dev+=(i.devT-i.dev)*.06,i.hov+=(s-i.hov)*.12,(Math.abs(i.devT-i.dev)>.002||Math.abs(s-i.hov)>.002)&&(t=!0),(i.dirty||n||Math.abs(o-i.dev)>5e-4||Math.abs(l-i.hov)>5e-4)&&(Vu(i),i.dirty=!1)}),t&&la()}function la(){Zn||(Zn=requestAnimationFrame(ku))}function Dl(e=document){let t=[...e.querySelectorAll("img[data-relief]:not([data-relief-done])")];t.length&&(!Te&&!zu()||t.forEach(i=>{i.dataset.reliefDone="1";let r=document.createElement("canvas");r.className=`${i.className} relief`,r.setAttribute("role","img"),r.setAttribute("aria-label",i.alt||""),i.dataset.parallax&&(r.dataset.parallax=i.dataset.parallax),delete i.dataset.parallax;let a={img:i,canvas:r,ctx:r.getContext("2d"),tex:null,ratio:1.5,dev:Ll?1:0,devT:0,hov:0,dirty:!0};i.replaceWith(r),r.append(i);let n=()=>{try{a.tex=Gu(i),a.ratio=i.naturalWidth/i.naturalHeight}catch{r.replaceWith(i),r.dataset.parallax&&(i.dataset.parallax=r.dataset.parallax);return}$n.push(a),la()};i.loading="eager",i.complete&&i.naturalWidth?n():(i.addEventListener("load",n,{once:!0}),i.addEventListener("error",()=>r.replaceWith(i),{once:!0}))}))}var Hu=matchMedia("(prefers-reduced-motion: reduce)").matches,Wu=matchMedia("(hover: hover) and (pointer: fine)").matches,Nl=.2;function Ul(e){return Promise.all(e.map(t=>new Promise(i=>{let r=new Image;r.decoding="async",r.onload=()=>{try{let a=document.createElement("canvas");a.width=12,a.height=8;let n=a.getContext("2d");n.drawImage(r,0,0,12,8);let s=n.getImageData(0,0,12,8).data,o=[];for(let l=0;l<s.length;l+=4){let h=s[l],u=s[l+1],d=s[l+2],c=Math.max(h,u,d),p=Math.min(h,u,d);o.push({c:[h,u,d],s:(c-p)/(c+1)+c/900})}o.sort((l,h)=>h.s-l.s),i([o[0].c,o[Math.floor(o.length/6)].c])}catch{i([])}},r.onerror=()=>i([]),r.src=t}))).then(t=>t.flat().filter(Boolean))}function Ol(e,t,{strength:i=1,after:r=null,z:a=-1}={}){if(!e||Hu)return;let n=document.createElement("canvas");n.className="ink",n.setAttribute("aria-hidden","true"),n.style.zIndex=a,r?r.after(n):e.prepend(n),e.classList.add("has-ink"),getComputedStyle(e).position==="static"&&(e.style.position="relative");let s=n.getContext("2d"),o=1,l=1,h=!1,u=0,d=[[34,51,255],[233,196,140]],c=[],p=[],_={x:-1e4,y:-1e4,px:0,py:0,in:!1};Promise.resolve(t).then(E=>{E&&E.length&&(d=E),c.length=0;for(let v=0;v<6;v++)c.push({c:d[v%d.length],ax:Math.random(),ay:Math.random(),r:.32+Math.random()*.25,ph:Math.random()*6.28,sp:.04+Math.random()*.06,ox:0,oy:0,vx:0,vy:0})});let y=()=>{let E=e.getBoundingClientRect();o=Math.max(2,Math.round(E.width*Nl)),l=Math.max(2,Math.round(Math.min(E.height,innerHeight*1.4)*Nl)),n.width=o,n.height=l};y(),addEventListener("resize",y),Wu&&(e.addEventListener("pointermove",E=>{let v=n.getBoundingClientRect(),T=(E.clientX-v.left)/v.width*o,A=(E.clientY-v.top)/v.height*l,w=T-_.x,g=A-_.y;_.in&&Math.hypot(w,g)>.6&&p.length<60&&p.push({x:T,y:A,vx:w*.6,vy:g*.6,r:10+Math.random()*18,life:1,c:d[Math.random()*d.length|0]}),_.x=T,_.y=A,_.in=!0,S()},{passive:!0}),e.addEventListener("pointerleave",()=>{_.in=!1,_.x=_.y=-1e4}));let m=performance.now(),f=E=>{if(u=0,!h)return;let v=Math.min(.05,(E-m)/1e3);m=E;let T=E/1e3;s.globalCompositeOperation="source-over",s.clearRect(0,0,o,l),s.globalCompositeOperation="lighter";let A=Math.max(o,l);c.forEach(w=>{let g=(w.ax+Math.sin(T*w.sp+w.ph)*.18)*o,M=(w.ay+Math.cos(T*w.sp*.8+w.ph)*.2)*l,D=g+w.ox-_.x,P=M+w.oy-_.y,I=Math.hypot(D,P)||1,H=A*.35;if(I<H){let Z=(1-I/H)*260*i;w.vx+=D/I*Z*v,w.vy+=P/I*Z*v}w.vx+=-w.ox*6*v,w.vy+=-w.oy*6*v,w.vx*=.92,w.vy*=.92,w.ox+=w.vx*v*10,w.oy+=w.vy*v*10;let N=w.r*A,z=s.createRadialGradient(g+w.ox,M+w.oy,0,g+w.ox,M+w.oy,N);z.addColorStop(0,`rgba(${w.c[0]},${w.c[1]},${w.c[2]},${.55*i})`),z.addColorStop(1,`rgba(${w.c[0]},${w.c[1]},${w.c[2]},0)`),s.fillStyle=z,s.fillRect(0,0,o,l)});for(let w=p.length-1;w>=0;w--){let g=p[w];if(g.x+=g.vx*v*8,g.y+=g.vy*v*8,g.vx*=.94,g.vy*=.94,g.r+=14*v,g.life-=v*.7,g.life<=0){p.splice(w,1);continue}let M=s.createRadialGradient(g.x,g.y,0,g.x,g.y,g.r);M.addColorStop(0,`rgba(${g.c[0]},${g.c[1]},${g.c[2]},${.5*g.life*i})`),M.addColorStop(1,`rgba(${g.c[0]},${g.c[1]},${g.c[2]},0)`),s.fillStyle=M,s.fillRect(g.x-g.r,g.y-g.r,g.r*2,g.r*2)}u=requestAnimationFrame(f)},S=()=>{h&&!u&&(m=performance.now(),u=requestAnimationFrame(f))};new IntersectionObserver(([E])=>{h=E.isIntersecting,h&&(y(),S())},{rootMargin:"80px"}).observe(e)}var Et=window.gsap,jt=window.ScrollTrigger;Et&&jt&&Et.registerPlugin(jt);var zt=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Bl=window.matchMedia("(hover: hover) and (pointer: fine)").matches,ht=(e,t=document)=>t.querySelector(e),Bt=(e,t=document)=>[...t.querySelectorAll(e)],li=e=>{let t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstElementChild},pt=(e="")=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),xr=(e,t=2)=>String(e).padStart(t,"0"),Jn=[{href:"index.html",en:"Home",zh:"\u9996\u9875",key:"home"},{href:"work.html",en:"Work",zh:"\u4F5C\u54C1",key:"work"},{href:"series.html",en:"Series",zh:"\u7CFB\u5217",key:"series"},{href:"travel.html",en:"Travel",zh:"\u6E38\u8BB0",key:"travel"},{href:"projects.html",en:"Projects",zh:"\u9879\u76EE \xB7 \u7B80\u5386",key:"projects"},{href:"about.html",en:"About",zh:"\u5173\u4E8E",key:"about"}],Qn=[{href:"corridor.html",en:"Corridor",zh:"\u8D70\u5ECA",key:"corridor"},{href:"raw.html",en:"RAW Lab",zh:"\u540E\u671F",key:"raw"},{href:"projects.html#cv",en:"CV",zh:"\u7B80\u5386",key:"cv"}],Mt=null,Mr=()=>Mt;function zl(e){if(!e||e.dataset.rolled)return e;let t=e.textContent;return e.dataset.rolled="1",e.setAttribute("aria-label",t.trim()),e.classList.add("roll"),e.innerHTML=[...t].map((i,r)=>`<span class="ch" aria-hidden="true" style="--i:${r}" data-ch="${pt(i)}">${pt(i)}</span>`).join(""),e}function Xu(e){if(!e||e.dataset.split==="done")return[];e.dataset.split="done";let t=i=>{[...i.childNodes].forEach(r=>{if(r.nodeType===3){let a=document.createDocumentFragment();r.textContent.split(/(\s+)/).forEach(n=>{if(!n)return;if(/^\s+$/.test(n)){a.appendChild(document.createTextNode(n));return}let s=document.createElement("span");s.className="word-mask";let o=document.createElement("span");o.textContent=n,s.appendChild(o),a.appendChild(s)}),r.replaceWith(a)}else r.nodeType===1&&!r.classList.contains("word-mask")&&r.tagName!=="BR"&&t(r)})};return t(e),Bt(".word-mask > span",e)}function ju(e,t){let i=li(`
    <header class="site-header">
      <div class="header-actions">
        <a class="pill header-cta roll-host" href="about.html#contact"><span class="dot"></span><span data-roll>Let's shoot</span></a>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu-panel" aria-label="Open menu"><i></i><i></i></button>
      </div>
    </header>`),r=li(`
    <div class="menu-panel" id="menu-panel" aria-hidden="true">
      <nav aria-label="Primary">
        ${Jn.map((h,u)=>`<a class="roll-host" data-scramble-host href="${h.href}" ${h.key===e?'aria-current="page"':""}><span data-roll>${h.en}</span><small data-scramble>${xr(u+1)} \xB7 ${h.zh}</small></a>`).join("")}
      </nav>
      <div class="menu-more mono">${Qn.map(h=>`<a href="${h.href}" ${h.key===e?'aria-current="page"':""}>${h.en} \xB7 ${h.zh}</a>`).join("")}</div>
      <div class="menu-foot">
        <p class="mono muted">Say hello \xB7 \u8054\u7CFB</p>
        <a class="h3" href="mailto:${Zi.email}" style="font-size:20px;letter-spacing:-.02em">${Zi.email}</a>
        <div class="links mono" style="margin-top:14px">${Zi.links.map(h=>`<a href="${h.href}" target="_blank" rel="noopener">${h.short}</a>`).join("")}</div>
      </div>
    </div>`),a=li('<a class="brand" href="index.html" aria-label="X1NG \u2014 home">X1NG <small>Photographic field</small></a>'),n=li('<div class="menu-scrim"></div>'),s=li('<div class="cursor" aria-hidden="true"><div class="cursor__pill"><span class="cursor__text">View</span></div></div>');document.body.prepend(li('<a class="skip-link" href="#main">Skip to content</a>')),document.body.append(i,a,n,r,s);let o=ht(".menu-btn",i),l=h=>{document.documentElement.classList.toggle("menu-open",h),o.setAttribute("aria-expanded",h),o.setAttribute("aria-label",h?"Close menu":"Open menu"),r.setAttribute("aria-hidden",!h),h?Mt==null||Mt.stop():Mt==null||Mt.start()};o.addEventListener("click",()=>l(!document.documentElement.classList.contains("menu-open"))),n.addEventListener("click",()=>l(!1)),document.addEventListener("keydown",h=>{h.key==="Escape"&&l(!1)}),t.footer!==!1&&document.querySelector("main").after(qu(t)),Bt("[data-roll]").forEach(zl)}function qu(e){let t=li(`
    <footer class="site-footer wrap">
      <div class="footer__grid">
        <div class="footer__col">
          <p class="mono">Based in</p>
          <span>Nanjing, China</span><span class="zh muted">\u5E38\u9A7B\u5357\u4EAC \xB7 \u968F\u65F6\u51FA\u53D1</span>
        </div>
        <div class="footer__col">
          <p class="mono">Explore</p>
          ${[...Jn.slice(1),...Qn.slice(0,2)].map(r=>`<a class="roll-host" href="${r.href}"><span data-roll>${r.en}</span></a>`).join("")}
        </div>
        <div class="footer__col">
          <p class="mono">Follow</p>
          ${Zi.links.map(r=>`<a class="roll-host" href="${r.href}" target="_blank" rel="noopener"><span data-roll>${r.short}</span></a>`).join("")}
        </div>
        <div class="footer__col">
          <p class="mono">Contact</p>
          <a href="mailto:${Zi.email}">${Zi.email}</a>
          <span class="muted">Commissions, prints, collaborations.</span>
        </div>
        <div class="footer__word" aria-hidden="true">X1NG</div>
      </div>
      <div class="footer__base mono">
        <span>\xA9 ${new Date().getFullYear()} Xing \xB7 \u661F\u5149</span>
        <span>All photographs \xA9 Xing. All rights reserved.</span>
        <a href="#main" data-top>Back to top \u2191</a>
      </div>
    </footer>`),i=document.createDocumentFragment();return i.append(t),e.next&&i.append(li(`
      <section class="next" data-next="${e.next.href}" aria-label="Next page">
        ${e.next.image?`<div class="next__bg"><img src="${e.next.image}" alt="" loading="lazy"></div>`:""}
        <div class="next__inner">
          <p class="mono">Next \xB7 \u4E0B\u4E00\u9875</p>
          <a class="next__title roll-host" href="${e.next.href}"><span data-roll>${pt(e.next.label)}</span></a>
          <a class="next__go" href="${e.next.href}" aria-label="Open ${pt(e.next.label)}"><svg class="next__ring" viewBox="0 0 88 88" aria-hidden="true"><circle class="track" cx="44" cy="44" r="40"/><circle class="fill" cx="44" cy="44" r="40" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/></svg><span class="next__arrow" aria-hidden="true">\u2192</span></a>
          <p class="mono muted">${pt(e.next.sub||"Next page")}</p>
        </div>
      </section>`)),i}function Yu(){zt||!window.Lenis||(Mt=new window.Lenis({duration:1.15,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),smoothWheel:!0}),Mt.on("scroll",jt.update),Et.ticker.add(e=>Mt.raf(e*1e3)),Et.ticker.lagSmoothing(0))}function Zu(){let e=ht(".footer__word");if(!e||zt||!Bl)return;let t=1,i=1,r=1,a=1,n=!1;window.addEventListener("pointermove",o=>{let l=e.getBoundingClientRect();l.bottom<0||l.top>innerHeight||(r=Math.max(-1.5,Math.min(1.5,(o.clientX-(l.left+l.width/2))/(l.width/2)*-1.5)),a=Math.max(-1.5,Math.min(1.5,(o.clientY-(l.top+l.height/2))/(innerHeight/2)*-1.5)),n||(n=!0,Et.ticker.add(s)))},{passive:!0});let s=()=>{t+=(r-t)*.08,i+=(a-i)*.08,e.style.setProperty("--lx",t.toFixed(3)),e.style.setProperty("--ly",i.toFixed(3)),Math.abs(r-t)<.002&&Math.abs(a-i)<.002&&(n=!1,Et.ticker.remove(s))}}function $u(){let e=ht(".site-header"),t=0,i=()=>{let r=window.scrollY,a=r>200&&r>t&&!document.documentElement.classList.contains("menu-open");e.classList.toggle("is-hidden",a),document.documentElement.classList.toggle("header-hidden",a),t=r};window.addEventListener("scroll",i,{passive:!0})}function Ku(e=document){Et&&(Dl(e),Bt("[data-split]",e).forEach(t=>{let i=Xu(t);zt||(Et.set(i,{yPercent:110}),jt.create({trigger:t,start:"top 88%",once:!0,onEnter:()=>Et.to(i,{yPercent:0,duration:1.1,ease:"expo.out",stagger:.028,delay:+t.dataset.delay||0})}))}),Bt("[data-fade]",e).forEach(t=>{if(zt){Et.set(t,{opacity:1,y:0});return}jt.create({trigger:t,start:"top 92%",once:!0,onEnter:()=>Et.to(t,{opacity:1,y:0,duration:1.1,ease:"expo.out",delay:+t.dataset.delay||0})})}),zt||Bt("[data-parallax]",e).forEach(t=>{let i=+t.dataset.parallax||10;Et.fromTo(t,{yPercent:-i},{yPercent:i,ease:"none",scrollTrigger:{trigger:t.parentElement,start:"top bottom",end:"bottom top",scrub:!0}})}),Bt("[data-roll]",e).forEach(zl),Rl(e),Il(e))}function Ju(){if(!Bl)return;let e=ht(".cursor"),t=ht(".cursor__text",e),i=innerWidth/2,r=innerHeight/2,a=i,n=r;window.addEventListener("pointermove",s=>{i=s.clientX,r=s.clientY},{passive:!0}),Et.ticker.add(()=>{a+=(i-a)*.2,n+=(r-n)*.2,e.style.transform=`translate3d(${a}px, ${n}px, 0)`}),document.addEventListener("pointerover",s=>{let o=s.target.closest("[data-cursor]");o&&(t.textContent=o.dataset.cursor,e.classList.add("is-active"))}),document.addEventListener("pointerout",s=>{let o=s.target.closest("[data-cursor]");o&&!o.contains(s.relatedTarget)&&e.classList.remove("is-active")})}var Kn="x1ng:transition",Fl="x1ng:transition-label",ua=null,Qu=e=>{let t=e.pathname.split("/").pop()||"index.html";if(/\/egypt\/?$/.test(e.pathname))return"Egypt \xB7 \u57C3\u53CA\u968F\u7B14";let i=[...Jn,...Qn].find(a=>a.href===t),r=e.searchParams.get("id");return r&&(t==="series.html"||t==="travel.html")?`${t==="travel.html"?"Travel":"Series"} \xB7 ${r.charAt(0).toUpperCase()}${r.slice(1)}`:i?`${i.en} \xB7 ${i.zh}`:""};function ed(){ua=wl();let e=!1;sessionStorage.getItem(Kn)==="1"&&!zt?(sessionStorage.removeItem(Kn),ua.shut(sessionStorage.getItem(Fl)||""),document.documentElement.classList.remove("is-arriving"),requestAnimationFrame(()=>ua.open({delay:.12}))):document.documentElement.classList.remove("is-arriving");let i=.5,r=.5;document.addEventListener("pointerdown",a=>{i=a.clientX/innerWidth,r=a.clientY/innerHeight},{passive:!0}),window.navigateTo=a=>{if(e)return;if(e=!0,zt){location.href=a;return}let n=Qu(new URL(a,location.href));sessionStorage.setItem(Kn,"1"),sessionStorage.setItem(Fl,n),Mt==null||Mt.stop(),ua.close({x:i,y:r,label:n}).then(()=>{location.href=a}),setTimeout(()=>{location.href=a},1800)},document.addEventListener("click",a=>{let n=a.target.closest("a[href]");if(!n||a.defaultPrevented||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||n.target==="_blank"||n.hasAttribute("download"))return;let s=new URL(n.href,location.href);if(s.origin===location.origin){if(s.pathname===location.pathname&&s.search===location.search&&s.hash){a.preventDefault();let o=s.hash==="#main"?0:document.querySelector(s.hash);Mt?Mt.scrollTo(o!=null?o:0,{duration:1.4}):o?o.scrollIntoView({behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"});return}/\.html$|\/$/.test(s.pathname)&&(a.preventDefault(),document.documentElement.classList.remove("menu-open"),window.navigateTo(s.href))}}),window.addEventListener("pageshow",a=>{a.persisted&&(e=!1,Mt==null||Mt.start(),ua.open({duration:.6,delay:0}))})}function td(){let e=ht(".next");if(!e||!jt)return;let t=ht(".next__bg img",e);t&&Ol(e,Ul([t.getAttribute("src")]),{after:ht(".next__bg",e),z:0,strength:.8});let i=ht(".next__ring .fill",e),r=ht(".next__inner",e),a=!1;jt.create({trigger:e,start:"top bottom",end:"bottom bottom",onUpdate:n=>{let s=n.progress;i.style.strokeDashoffset=String(1-Math.min(1,Math.max(0,(s-.35)/.63))),zt||(r.style.transform=`translateY(${(1-s)*-30}vh)`),e.classList.toggle("is-ready",s>.97)}})}function Gl({page:e,dark:t=!1,footer:i=!0,next:r=null}={}){return document.documentElement.classList.toggle("no-motion",zt),t&&document.body.classList.add("is-dark"),ju(e,{footer:i,next:r}),Yu(),$u(),Ju(),ed(),Cl(),Pl(),Zu(),Bt("[data-top]").forEach(a=>a.addEventListener("click",n=>{n.preventDefault(),Mt?Mt.scrollTo(0,{duration:1.6}):window.scrollTo({top:0,behavior:"smooth"})})),{ready(){Ku(),td(),jt==null||jt.refresh()}}}var bt,Ji,Qi=[],er=0,br=null,tr=null,id=e=>{var t;return((t=ml.find(i=>i.id===e))==null?void 0:t.en)||e};function rd(){bt=li(`
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
    </div>`),document.body.append(bt),Ji=ht("img",bt),ht(".lb__close",bt).addEventListener("click",ja),ht(".lb__nav--prev",bt).addEventListener("click",()=>da(-1)),ht(".lb__nav--next",bt).addEventListener("click",()=>da(1)),bt.addEventListener("click",r=>{(r.target===bt||r.target.classList.contains("lb__stage"))&&ja()}),document.addEventListener("keydown",r=>{bt.classList.contains("is-open")&&(r.key==="Escape"&&ja(),r.key==="ArrowRight"&&da(1),r.key==="ArrowLeft"&&da(-1))});let e=0,t=0,i=ht(".lb__stage",bt);i.addEventListener("touchstart",r=>{e=r.touches[0].clientX,t=r.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",r=>{let a=r.changedTouches[0].clientX-e,n=r.changedTouches[0].clientY-t;Math.abs(a)>50&&Math.abs(a)>Math.abs(n)?da(a<0?1:-1):n>90&&ja()})}function Vl(){var n;let e=Qi[er];Ji.classList.add("is-swapping");let t=new Image;t.src=e.l;let i=()=>{Ji.src=e.l,Ji.alt=`${e.title}${e.place?` \u2014 ${e.place}`:""}`,requestAnimationFrame(()=>Ji.classList.remove("is-swapping"))};t.complete?setTimeout(i,120):(Ji.src=e.s,Ji.classList.remove("is-swapping"),t.onload=i),[Qi[er+1],Qi[er-1]].forEach(s=>{if(s){let o=new Image;o.src=s.l}});let r=xl(e.n),a=Ml(e.n);ht("[data-lb-count]",bt).textContent=`${xr(er+1,3)} / ${xr(Qi.length,3)}`,ht("[data-lb-title]",bt).innerHTML=`${pt(e.title)}<span class="zh">${pt(e.zh)}</span>`,ht("[data-lb-meta]",bt).innerHTML=[e.place&&`<span>${pt(e.place)}</span>`,`<a href="work.html?style=${e.style}">${pt(((n=yr(e.style))==null?void 0:n.en)||id(e.cat))}</a>`,r&&`<a href="series.html?id=${r.id}">Series: ${pt(r.en)}</a>`,a&&`<a href="travel.html?id=${a.id}">Travel: ${pt(a.en)}</a>`,`<span>#${xr(e.n,3)}</span>`].filter(Boolean).join(""),tr==null||tr(e)}function da(e){er=(er+e+Qi.length)%Qi.length,Vl()}function kl(e,t=0,{onNavigate:i}={}){var r;bt||rd(),Qi=e,er=t,tr=i||null,br=document.activeElement,Vl(),bt.classList.add("is-open"),bt.setAttribute("aria-hidden","false"),(r=Mr())==null||r.stop(),document.documentElement.style.overflow="hidden",ht(".lb__close",bt).focus({preventScroll:!0})}function ja(){var e,t;bt&&(bt.classList.remove("is-open"),bt.setAttribute("aria-hidden","true"),(e=Mr())==null||e.start(),document.documentElement.style.overflow="",tr==null||tr(null),(t=br==null?void 0:br.focus)==null||t.call(br,{preventScroll:!0}))}el();var tb=new C,ib=new C,rb=new ri,ab=new Ze,nb=new C(0,1,0);function yu(){try{let e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl2")||e.getContext("webgl")))}catch{return!1}}var sy=Gl({page:"work",next:{href:"series.html",label:"The Series",sub:"Five ongoing studies \xB7 \u4E94\u4E2A\u7CFB\u5217",image:jn(102).m}}),Gn=new URLSearchParams(location.search),ai=yr(Gn.get("style"))?Gn.get("style"):"all",Ha=Gn.get("view")==="field"?"field":"grid",Vn=()=>ai==="all"?Yi:Yi.filter(e=>e.style===ai),bu=()=>[{id:"all",en:"All",count:Yi.length},...Wn.map(e=>({...e,count:Yi.filter(t=>t.style===e.id).length}))].map(e=>`<button type="button" class="chip" data-filter="${e.id}" aria-pressed="${e.id===ai}" title="${e.zh||""}">${e.en}<sup>${e.count}</sup></button>`).join("");ht("[data-chips]").innerHTML=bu();ht("[data-chips-field]").innerHTML=bu();var na=ht("[data-grid]");na.innerHTML=Yi.map(e=>`
  <a class="tile" href="work.html?p=${e.n}" data-n="${e.n}" data-style="${e.style}" data-cursor="View" data-reveal aria-label="${pt(e.title)} ${pt(e.zh)}">
    <img src="${e.s}" srcset="${e.s} 640w, ${e.m} 1280w" sizes="(max-width: 700px) 50vw, 25vw" width="${e.w}" height="${e.h}" alt="${pt(e.title)}${e.place?` \u2014 ${pt(e.place)}`:""}" loading="lazy" decoding="async">
    <span class="tile__cap"><b>${pt(e.title)}</b><span class="mono">${pt(e.place||yr(e.style).en)}</span></span>
  </a>`).join("");Bt(".tile img",na).forEach(e=>{e.complete?e.classList.add("is-loaded"):e.addEventListener("load",()=>e.classList.add("is-loaded"),{once:!0})});na.addEventListener("click",e=>{let t=e.target.closest(".tile");t&&(e.preventDefault(),il(+t.dataset.n))});function il(e){let t=Vn().some(i=>i.n===e)?Vn():Yi;kl(t,t.findIndex(i=>i.n===e),{onNavigate(i){let r=new URL(location.href);i?r.searchParams.set("p",i.n):r.searchParams.delete("p"),history.replaceState(null,"",r)}})}function Su(e,t=!0){ai=e,Bt("[data-filter]").forEach(n=>n.setAttribute("aria-pressed",n.dataset.filter===ai));let i=new URL(location.href);i.searchParams.delete("cat"),ai==="all"?i.searchParams.delete("style"):i.searchParams.set("style",ai),history.replaceState(null,"",i);let r=Bt(".tile",na),a=()=>{r.forEach(o=>o.classList.toggle("is-hidden",ai!=="all"&&o.dataset.style!==ai)),ht("[data-total]").textContent=Vn().length;let n=yr(ai),s=ht("[data-style-note]");s.innerHTML=n?`${pt(n.note)} <span class="zh muted">${pt(n.zh)} \xB7 ${pt(n.noteZh)}</span>`:'Every frame in the archive, curated into seven visual styles. Open any photograph, or step into the field. <span class="zh muted">\u5168\u90E8\u4F5C\u54C1 \xB7 \u6309\u98CE\u683C\u6D4F\u89C8 \xB7 3D \u6F2B\u6E38</span>',jt.refresh(),t&&!zt&&Et.fromTo(r.filter(o=>!o.classList.contains("is-hidden")).slice(0,16),{opacity:0,y:30},{opacity:1,y:0,duration:.8,ease:"expo.out",stagger:.03})};t&&!zt?Et.to(na,{opacity:0,duration:.2,onComplete:()=>{a(),Et.to(na,{opacity:1,duration:.3})}}):a(),Xi&&Xi.setItems(Eu())}document.addEventListener("click",e=>{let t=e.target.closest("[data-filter]");t&&Su(t.dataset.filter)});var aa=ht("[data-field]"),oy=ht("[data-field-title]"),Xi=null,Tu=yu(),Eu=()=>Vn().map(e=>({n:e.n,src:vl(e),ratio:e.ratio,title:e.title,zh:e.zh,place:e.place}));async function wu(e){var i;e==="field"&&!Tu&&(e="grid"),Ha=e,Bt("[data-view]").forEach(r=>r.setAttribute("aria-pressed",r.dataset.view===Ha));let t=new URL(location.href);if(Ha==="field"?t.searchParams.set("view","field"):t.searchParams.delete("view"),history.replaceState(null,"",t),Ha==="field"){if(!Xi){let{createField:r}=await Promise.resolve().then(()=>(Mu(),xu));Xi=r(aa,{onHover(a){oy.innerHTML=a?`${pt(a.title)}<span class="zh">${pt(a.zh)}</span>`:""},onSelect(a){il(a.n)}}),Xi.setItems(Eu())}aa.classList.add("is-on"),document.body.classList.add("field-mode"),(i=Mr())==null||i.stop(),Xi.start(),zt||Et.fromTo(aa,{clipPath:"inset(50% 0% 50% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1,ease:"expo.inOut"})}else if(Xi&&aa.classList.contains("is-on")){let r=()=>{var a;aa.classList.remove("is-on"),document.body.classList.remove("field-mode"),Xi.stop(),(a=Mr())==null||a.start()};zt?r():Et.to(aa,{clipPath:"inset(50% 0% 50% 0%)",duration:.8,ease:"expo.inOut",onComplete:r})}}Bt("[data-view]").forEach(e=>e.addEventListener("click",()=>wu(e.dataset.view)));Tu||Bt('[data-view="field"]').forEach(e=>{e.disabled=!0,e.title="3D view needs WebGL"});Su(ai,!1);sy.ready();Ha==="field"&&wu("field");var tl=+Gn.get("p");tl&&jn(tl)&&setTimeout(()=>il(tl),400);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
