(()=>{var Nm=0,Nu=1,Um=2;var mn=1,Om=2,os=3,ta=0,Li=1,Ri=2,gr=0,hs=1,ga=2,Uu=3,Ou=4,Fm=5;var cn=100,Bm=101,zm=102,Hm=103,km=104,Gm=200,Vm=201,Wm=202,Xm=203,ap=204,np=205,jm=206,qm=207,Ym=208,Zm=209,Km=210,$m=211,Jm=212,Qm=213,eg=214,oc=0,lc=1,cc=2,ms=3,hc=4,uc=5,gs=6,dc=7,sp=0,tg=1,ig=2,Dr=0,Oo=1,Fo=2,Bo=3,Ln=4,zo=5,Ho=6,ko=7,Fu="attached",rg="detached",op=300,Ia=301,Tn=302,Sl=303,Tl=304,Go=306,Pa=1e3,fr=1001,vs=1002,ci=1003,Zc=1004;var pn=1005;var Vt=1006,us=1007;var Lr=1008;var qi=1009,lp=1010,cp=1011,_s=1012,Kc=1013,Nr=1014,er=1015,ui=1016,$c=1017,Jc=1018,xs=1020,hp=35902,up=35899,dp=1021,pp=1022,tr=1023,ia=1026,wa=1027,ws=1028,Qc=1029,La=1030,eh=1031;var th=1033,Mo=33776,bo=33777,So=33778,To=33779,pc=35840,fc=35841,mc=35842,gc=35843,vc=36196,_c=37492,xc=37496,yc=37488,Mc=37489,Co=37490,bc=37491,Sc=37808,Tc=37809,Ec=37810,wc=37811,Ac=37812,Rc=37813,Cc=37814,Ic=37815,Pc=37816,Lc=37817,Dc=37818,Nc=37819,Uc=37820,Oc=37821,Fc=36492,Bc=36494,zc=36495,Hc=36283,kc=36284,Io=36285,Gc=36286;var En=2300,wn=2301,El=2302,Bu=2303,zu=2400,Hu=2401,ku=2402,ag=2500;var fp=0,Vo=1,As=2,ng=3200;var Vc=0,sg=1,ma="",Gt="srgb",Gi="srgb-linear",Po="linear",Pt="srgb";var Ra=7680,mp=7681;var gp=517;var ih=519,og=512,lg=513,cg=514,rh=515,hg=516,ug=517,ah=518,dg=519,vp=35044,ra=35048;var Gu="300 es",mr=2e3,ys=2001;function pg(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function fg(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ms(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function mg(){let e=Ms("canvas");return e.style.display="block",e}var Vu={},An=null;function Lo(...e){let t="THREE."+e.shift();An?An("log",t,...e):console.log(t,...e)}function _p(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ye(...e){e=_p(e);let t="THREE."+e.shift();if(An)An("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function ot(...e){e=_p(e);let t="THREE."+e.shift();if(An)An("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function gn(...e){let t=e.join(" ");t in Vu||(Vu[t]=!0,Ye(...e))}function gg(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var vg={[oc]:lc,[cc]:gs,[hc]:dc,[ms]:uc,[lc]:oc,[gs]:cc,[dc]:hc,[uc]:ms},Na=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wu=1234567,vn=Math.PI/180,Rn=180/Math.PI;function ir(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ii[e&255]+Ii[e>>8&255]+Ii[e>>16&255]+Ii[e>>24&255]+"-"+Ii[t&255]+Ii[t>>8&255]+"-"+Ii[t>>16&15|64]+Ii[t>>24&255]+"-"+Ii[i&63|128]+Ii[i>>8&255]+"-"+Ii[i>>16&255]+Ii[i>>24&255]+Ii[r&255]+Ii[r>>8&255]+Ii[r>>16&255]+Ii[r>>24&255]).toLowerCase()}function mt(e,t,i){return Math.max(t,Math.min(i,e))}function nh(e,t){return(e%t+t)%t}function _g(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function xg(e,t,i){return e!==t?(i-e)/(t-e):0}function ds(e,t,i){return(1-i)*e+i*t}function yg(e,t,i,r){return ds(e,t,1-Math.exp(-i*r))}function Mg(e,t=1){return t-Math.abs(nh(e,t*2)-t)}function bg(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function Sg(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function Tg(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Eg(e,t){return e+Math.random()*(t-e)}function wg(e){return e*(.5-Math.random())}function Ag(e){e!==void 0&&(Wu=e);let t=Wu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rg(e){return e*vn}function Cg(e){return e*Rn}function Ig(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Pg(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Lg(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Dg(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),c=n((t+r)/2),h=s((t+r)/2),d=n((t-r)/2),u=s((t-r)/2),p=n((r-t)/2),g=s((r-t)/2);switch(a){case"XYX":e.set(o*h,l*d,l*u,o*c);break;case"YZY":e.set(l*u,o*h,l*d,o*c);break;case"ZXZ":e.set(l*d,l*u,o*h,o*c);break;case"XZX":e.set(o*h,l*g,l*p,o*c);break;case"YXY":e.set(l*p,o*h,l*g,o*c);break;case"ZYZ":e.set(l*g,l*p,o*h,o*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function pr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ut(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var xp={DEG2RAD:vn,RAD2DEG:Rn,generateUUID:ir,clamp:mt,euclideanModulo:nh,mapLinear:_g,inverseLerp:xg,lerp:ds,damp:yg,pingpong:Mg,smoothstep:bg,smootherstep:Sg,randInt:Tg,randFloat:Eg,randFloatSpread:wg,seededRandom:Ag,degToRad:Rg,radToDeg:Cg,isPowerOfTwo:Ig,ceilPowerOfTwo:Pg,floorPowerOfTwo:Lg,setQuaternionFromProperEuler:Dg,normalize:Ut,denormalize:pr},xn,de=(xn=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=mt(this.x,t.x,i.x),this.y=mt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=mt(this.x,t,i),this.y=mt(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xn.prototype.isVector2=!0,xn),ii=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],c=i[r+2],h=i[r+3],d=a[n+0],u=a[n+1],p=a[n+2],g=a[n+3];if(h!==g||o!==d||l!==u||c!==p){let x=o*d+l*u+c*p+h*g;x<0&&(d=-d,u=-u,p=-p,g=-g,x=-x);let m=1-s;if(x<.9995){let f=Math.acos(x),M=Math.sin(f);m=Math.sin(m*f)/M,s=Math.sin(s*f)/M,o=o*m+d*s,l=l*m+u*s,c=c*m+p*s,h=h*m+g*s}else{o=o*m+d*s,l=l*m+u*s,c=c*m+p*s,h=h*m+g*s;let f=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=f,l*=f,c*=f,h*=f}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],c=i[r+3],h=a[n],d=a[n+1],u=a[n+2],p=a[n+3];return e[t]=s*p+c*h+o*u-l*d,e[t+1]=o*p+c*d+l*h-s*u,e[t+2]=l*p+c*u+s*d-o*h,e[t+3]=c*p-s*h-o*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),c=s(r/2),h=s(a/2),d=o(i/2),u=o(r/2),p=o(a/2);switch(n){case"XYZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"YXZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"ZXY":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"ZYX":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"YZX":this._x=d*c*h+l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h-d*u*p;break;case"XZY":this._x=d*c*h-l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h+d*u*p;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10],d=i+s+h;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(c-o)*u,this._y=(a-l)*u,this._z=(n-r)*u}else if(i>s&&i>h){let u=2*Math.sqrt(1+i-s-h);this._w=(c-o)/u,this._x=.25*u,this._y=(r+n)/u,this._z=(a+l)/u}else if(s>h){let u=2*Math.sqrt(1+s-i-h);this._w=(a-l)/u,this._x=(r+n)/u,this._y=.25*u,this._z=(o+c)/u}else{let u=2*Math.sqrt(1+h-i-s);this._w=(n-r)/u,this._x=(a+l)/u,this._y=(o+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,c=t._w;return this._x=i*c+n*s+r*l-a*o,this._y=r*c+n*o+a*s-i*l,this._z=a*c+n*l+i*o-r*s,this._w=n*c-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},yn,C=(yn=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Xu.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Xu.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*r),h=2*(o*i-n*a),d=2*(n*r-s*i);return this.x=i+l*c+s*d-o*h,this.y=r+l*h+o*c-n*d,this.z=a+l*d+n*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=mt(this.x,t.x,i.x),this.y=mt(this.y,t.y,i.y),this.z=mt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=mt(this.x,t,i),this.y=mt(this.y,t,i),this.z=mt(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return wl.copy(this).projectOnVector(t),this.sub(wl)}reflect(t){return this.sub(wl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yn.prototype.isVector3=!0,yn),wl=new C,Xu=new ii,Mn,dt=(Mn=class{constructor(t,i,r,a,n,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c)}set(t,i,r,a,n,s,o,l,c){let h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=i,h[4]=n,h[5]=l,h[6]=r,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],h=r[4],d=r[7],u=r[2],p=r[5],g=r[8],x=a[0],m=a[3],f=a[6],M=a[1],y=a[4],v=a[7],T=a[2],R=a[5],w=a[8];return n[0]=s*x+o*M+l*T,n[3]=s*m+o*y+l*R,n[6]=s*f+o*v+l*w,n[1]=c*x+h*M+d*T,n[4]=c*m+h*y+d*R,n[7]=c*f+h*v+d*w,n[2]=u*x+p*M+g*T,n[5]=u*m+p*y+g*R,n[8]=u*f+p*v+g*w,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return i*s*h-i*o*c-r*n*h+r*o*l+a*n*c-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*s-o*c,u=o*l-h*n,p=c*n-s*l,g=i*d+r*u+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(a*c-h*r)*x,t[2]=(o*r-a*s)*x,t[3]=u*x,t[4]=(h*i-a*l)*x,t[5]=(a*n-o*i)*x,t[6]=p*x,t[7]=(r*l-c*i)*x,t[8]=(s*i-r*n)*x,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),c=Math.sin(n);return this.set(r*l,r*c,-r*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+i,0,0,1),this}scale(t,i){return gn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Al.makeScale(t,i)),this}rotate(t){return gn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Al.makeRotation(-t)),this}translate(t,i){return gn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Al.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Mn.prototype.isMatrix3=!0,Mn),Al=new dt,ju=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qu=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ng(){let e={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===Pt&&(a.r=ea(a.r),a.g=ea(a.g),a.b=ea(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Pt&&(a.r=_n(a.r),a.g=_n(a.g),a.b=_n(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ma?Po:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return gn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return gn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Gi]:{primaries:t,whitePoint:r,transfer:Po,toXYZ:ju,fromXYZ:qu,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:t,whitePoint:r,transfer:Pt,toXYZ:ju,fromXYZ:qu,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),e}var _t=Ng();function ea(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function _n(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var qa,Ug=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qa===void 0&&(qa=Ms("canvas")),qa.width=e.width,qa.height=e.height;let r=qa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=qa}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ms("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=ea(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ea(t[i]/255)*255):t[i]=ea(t[i]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Og=0,sh=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(Rl(r[n].image)):a.push(Rl(r[n]))}else a=Rl(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Rl(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Ug.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var Fg=0,Cl=new C,Di=class Eo extends Na{constructor(t=Eo.DEFAULT_IMAGE,i=Eo.DEFAULT_MAPPING,r=fr,a=fr,n=Vt,s=Lr,o=tr,l=qi,c=Eo.DEFAULT_ANISOTROPY,h=ma){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=ir(),this.name="",this.source=new sh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cl).x}get height(){return this.source.getSize(Cl).y}get depth(){return this.source.getSize(Cl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Ye(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Ye(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==op)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pa:t.x=t.x-Math.floor(t.x);break;case fr:t.x=t.x<0?0:1;break;case vs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pa:t.y=t.y-Math.floor(t.y);break;case fr:t.y=t.y<0?0:1;break;case vs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Di.DEFAULT_IMAGE=null;Di.DEFAULT_MAPPING=op;Di.DEFAULT_ANISOTROPY=1;var bn,Dt=(bn=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],c=s[8],h=s[1],d=s[5],u=s[9],p=s[2],g=s[6],x=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-p)<.01&&Math.abs(u-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+p)<.1&&Math.abs(u+g)<.1&&Math.abs(o+d+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(o+1)/2,M=(d+1)/2,y=(x+1)/2,v=(l+h)/4,T=(c+p)/4,R=(u+g)/4;return f>M&&f>y?f<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(f),a=v/r,n=T/r):M>y?M<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(M),r=v/a,n=R/a):y<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(y),r=T/n,a=R/n),this.set(r,a,n,i),this}let m=Math.sqrt((g-u)*(g-u)+(c-p)*(c-p)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(g-u)/m,this.y=(c-p)/m,this.z=(h-l)/m,this.w=Math.acos((o+d+x-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=mt(this.x,t.x,i.x),this.y=mt(this.y,t.y,i.y),this.z=mt(this.z,t.z,i.z),this.w=mt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=mt(this.x,t,i),this.y=mt(this.y,t,i),this.z=mt(this.z,t,i),this.w=mt(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bn.prototype.isVector4=!0,bn),Bg=class extends Na{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new Di(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new sh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends Bg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},yp=class extends Di{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ci,this.minFilter=ci,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zg=class extends Di{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ci,this.minFilter=ci,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ca,Ze=(Ca=class{constructor(t,i,r,a,n,s,o,l,c,h,d,u,p,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c,h,d,u,p,g,x,m)}set(t,i,r,a,n,s,o,l,c,h,d,u,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=i,f[8]=r,f[12]=a,f[1]=n,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ca().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/Ya.setFromMatrixColumn(t,0).length(),n=1/Ya.setFromMatrixColumn(t,1).length(),s=1/Ya.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),c=Math.sin(a),h=Math.cos(n),d=Math.sin(n);if(t.order==="XYZ"){let u=s*h,p=s*d,g=o*h,x=o*d;i[0]=l*h,i[4]=-l*d,i[8]=c,i[1]=p+g*c,i[5]=u-x*c,i[9]=-o*l,i[2]=x-u*c,i[6]=g+p*c,i[10]=s*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,g=c*h,x=c*d;i[0]=u+x*o,i[4]=g*o-p,i[8]=s*c,i[1]=s*d,i[5]=s*h,i[9]=-o,i[2]=p*o-g,i[6]=x+u*o,i[10]=s*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,g=c*h,x=c*d;i[0]=u-x*o,i[4]=-s*d,i[8]=g+p*o,i[1]=p+g*o,i[5]=s*h,i[9]=x-u*o,i[2]=-s*c,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let u=s*h,p=s*d,g=o*h,x=o*d;i[0]=l*h,i[4]=g*c-p,i[8]=u*c+x,i[1]=l*d,i[5]=x*c+u,i[9]=p*c-g,i[2]=-c,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let u=s*l,p=s*c,g=o*l,x=o*c;i[0]=l*h,i[4]=x-u*d,i[8]=g*d+p,i[1]=d,i[5]=s*h,i[9]=-o*h,i[2]=-c*h,i[6]=p*d+g,i[10]=u-x*d}else if(t.order==="XZY"){let u=s*l,p=s*c,g=o*l,x=o*c;i[0]=l*h,i[4]=-d,i[8]=c*h,i[1]=u*d+x,i[5]=s*h,i[9]=p*d-g,i[2]=g*d-p,i[6]=o*h,i[10]=x*d+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hg,t,kg)}lookAt(t,i,r){let a=this.elements;return Xi.subVectors(t,i),Xi.lengthSq()===0&&(Xi.z=1),Xi.normalize(),la.crossVectors(r,Xi),la.lengthSq()===0&&(Math.abs(r.z)===1?Xi.x+=1e-4:Xi.z+=1e-4,Xi.normalize(),la.crossVectors(r,Xi)),la.normalize(),Gs.crossVectors(Xi,la),a[0]=la.x,a[4]=Gs.x,a[8]=Xi.x,a[1]=la.y,a[5]=Gs.y,a[9]=Xi.y,a[2]=la.z,a[6]=Gs.z,a[10]=Xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],h=r[1],d=r[5],u=r[9],p=r[13],g=r[2],x=r[6],m=r[10],f=r[14],M=r[3],y=r[7],v=r[11],T=r[15],R=a[0],w=a[4],_=a[8],b=a[12],N=a[1],D=a[5],O=a[9],q=a[13],U=a[2],L=a[6],G=a[10],F=a[14],Q=a[3],V=a[7],Z=a[11],te=a[15];return n[0]=s*R+o*N+l*U+c*Q,n[4]=s*w+o*D+l*L+c*V,n[8]=s*_+o*O+l*G+c*Z,n[12]=s*b+o*q+l*F+c*te,n[1]=h*R+d*N+u*U+p*Q,n[5]=h*w+d*D+u*L+p*V,n[9]=h*_+d*O+u*G+p*Z,n[13]=h*b+d*q+u*F+p*te,n[2]=g*R+x*N+m*U+f*Q,n[6]=g*w+x*D+m*L+f*V,n[10]=g*_+x*O+m*G+f*Z,n[14]=g*b+x*q+m*F+f*te,n[3]=M*R+y*N+v*U+T*Q,n[7]=M*w+y*D+v*L+T*V,n[11]=M*_+y*O+v*G+T*Z,n[15]=M*b+y*q+v*F+T*te,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15],M=l*p-c*u,y=o*p-c*d,v=o*u-l*d,T=s*p-c*h,R=s*u-l*h,w=s*d-o*h;return i*(x*M-m*y+f*v)-r*(g*M-m*T+f*R)+a*(g*y-x*T+f*w)-n*(g*v-x*R+m*w)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return i*(s*h-o*c)-r*(n*h-o*l)+a*(n*c-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],M=i*o-r*s,y=i*l-a*s,v=i*c-n*s,T=r*l-a*o,R=r*c-n*o,w=a*c-n*l,_=h*x-d*g,b=h*m-u*g,N=h*f-p*g,D=d*m-u*x,O=d*f-p*x,q=u*f-p*m,U=M*q-y*O+v*D+T*N-R*b+w*_;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/U;return t[0]=(o*q-l*O+c*D)*L,t[1]=(a*O-r*q-n*D)*L,t[2]=(x*w-m*R+f*T)*L,t[3]=(u*R-d*w-p*T)*L,t[4]=(l*N-s*q-c*b)*L,t[5]=(i*q-a*N+n*b)*L,t[6]=(m*v-g*w-f*y)*L,t[7]=(h*w-u*v+p*y)*L,t[8]=(s*O-o*N+c*_)*L,t[9]=(r*N-i*O-n*_)*L,t[10]=(g*R-x*v+f*M)*L,t[11]=(d*v-h*R-p*M)*L,t[12]=(o*b-s*D-l*_)*L,t[13]=(i*D-r*b+a*_)*L,t[14]=(x*y-g*T-m*M)*L,t[15]=(h*T-d*y+u*M)*L,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,c=n*s,h=n*o;return this.set(c*s+r,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+r,h*l-a*s,0,c*l-a*o,h*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,c=n+n,h=s+s,d=o+o,u=n*c,p=n*h,g=n*d,x=s*h,m=s*d,f=o*d,M=l*c,y=l*h,v=l*d,T=r.x,R=r.y,w=r.z;return a[0]=(1-(x+f))*T,a[1]=(p+v)*T,a[2]=(g-y)*T,a[3]=0,a[4]=(p-v)*R,a[5]=(1-(u+f))*R,a[6]=(m+M)*R,a[7]=0,a[8]=(g+y)*w,a[9]=(m-M)*w,a[10]=(1-(u+x))*w,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=Ya.set(a[0],a[1],a[2]).length(),o=Ya.set(a[4],a[5],a[6]).length(),l=Ya.set(a[8],a[9],a[10]).length();n<0&&(s=-s),hr.copy(this);let c=1/s,h=1/o,d=1/l;return hr.elements[0]*=c,hr.elements[1]*=c,hr.elements[2]*=c,hr.elements[4]*=h,hr.elements[5]*=h,hr.elements[6]*=h,hr.elements[8]*=d,hr.elements[9]*=d,hr.elements[10]*=d,i.setFromRotationMatrix(hr),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=mr,l=!1){let c=this.elements,h=2*n/(i-t),d=2*n/(r-a),u=(i+t)/(i-t),p=(r+a)/(r-a),g,x;if(l)g=n/(s-n),x=s*n/(s-n);else if(o===mr)g=-(s+n)/(s-n),x=-2*s*n/(s-n);else if(o===ys)g=-s/(s-n),x=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=mr,l=!1){let c=this.elements,h=2/(i-t),d=2/(r-a),u=-(i+t)/(i-t),p=-(r+a)/(r-a),g,x;if(l)g=1/(s-n),x=s/(s-n);else if(o===mr)g=-2/(s-n),x=-(s+n)/(s-n);else if(o===ys)g=-1/(s-n),x=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},Ca.prototype.isMatrix4=!0,Ca),Ya=new C,hr=new Ze,Hg=new C(0,0,0),kg=new C(1,1,1),la=new C,Gs=new C,Xi=new C,Yu=new Ze,Zu=new ii,Ur=class Mp{constructor(t=0,i=0,r=0,a=Mp.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],d=a[2],u=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yu,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Zu.setFromEuler(this),this.setFromQuaternion(Zu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ur.DEFAULT_ORDER="XYZ";var bp=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gg=0,Ku=new C,Za=new ii,jr=new Ze,Vs=new C,$n=new C,Vg=new C,Wg=new ii,$u=new C(1,0,0),Ju=new C(0,1,0),Qu=new C(0,0,1),ed={type:"added"},Xg={type:"removed"},Ka={type:"childadded",child:null},Il={type:"childremoved",child:null},ti=class wo extends Na{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wo.DEFAULT_UP.clone();let t=new C,i=new Ur,r=new ii,a=new C(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ze},normalMatrix:{value:new dt}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=wo.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wo.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Za.setFromAxisAngle(t,i),this.quaternion.multiply(Za),this}rotateOnWorldAxis(t,i){return Za.setFromAxisAngle(t,i),this.quaternion.premultiply(Za),this}rotateX(t){return this.rotateOnAxis($u,t)}rotateY(t){return this.rotateOnAxis(Ju,t)}rotateZ(t){return this.rotateOnAxis(Qu,t)}translateOnAxis(t,i){return Ku.copy(t).applyQuaternion(this.quaternion),this.position.add(Ku.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis($u,t)}translateY(t){return this.translateOnAxis(Ju,t)}translateZ(t){return this.translateOnAxis(Qu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Vs.copy(t):Vs.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),$n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jr.lookAt($n,Vs,this.up):jr.lookAt(Vs,$n,this.up),this.quaternion.setFromRotationMatrix(jr),a&&(jr.extractRotation(a.matrixWorld),Za.setFromRotationMatrix(jr),this.quaternion.premultiply(Za.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ed),Ka.child=t,this.dispatchEvent(Ka),Ka.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Xg),Il.child=t,this.dispatchEvent(Il),Il.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jr.multiply(t.parent.matrixWorld)),t.applyMatrix4(jr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ed),Ka.child=t,this.dispatchEvent(Ka),Ka.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($n,t,Vg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($n,Wg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];n(t.shapes,d)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),d=s(t.shapes),u=s(t.skeletons),p=s(t.animations),g=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),d.length>0&&(r.shapes=d),u.length>0&&(r.skeletons=u),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=a,r;function s(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ti.DEFAULT_UP=new C(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hi=class extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}},jg={type:"move"},Pl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let g of e.hand.values()){let x=t.getJointPose(g,i),m=this._getHandJoint(l,g);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=c.position.distanceTo(h.position),u=.02,p=.005;l.inputState.pinching&&d>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(jg)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ca={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function Ll(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=_t.workingColorSpace){if(e=nh(e,1),t=mt(t,0,1),i=mt(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=Ll(n,a,e+1/3),this.g=Ll(n,a,e),this.b=Ll(n,a,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=Gt){function i(a){a!==void 0&&parseFloat(a)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let i=Sp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}copyLinearToSRGB(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return _t.workingToColorSpace(Pi.copy(this),e),Math.round(mt(Pi.r*255,0,255))*65536+Math.round(mt(Pi.g*255,0,255))*256+Math.round(mt(Pi.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(Pi.copy(this),t);let i=Pi.r,r=Pi.g,a=Pi.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,c=(s+n)/2;if(s===n)o=0,l=0;else{let h=n-s;switch(l=c<=.5?h/(n+s):h/(2-n-s),n){case i:o=(r-a)/h+(r<a?6:0);break;case r:o=(a-i)/h+2;break;case a:o=(i-r)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(Pi.copy(this),t),e.r=Pi.r,e.g=Pi.g,e.b=Pi.b,e}getStyle(e=Gt){_t.workingToColorSpace(Pi.copy(this),e);let t=Pi.r,i=Pi.g,r=Pi.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ca),this.setHSL(ca.h+e,ca.s+t,ca.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ca),e.getHSL(Ws);let i=ds(ca.h,Ws.h,t),r=ds(ca.s,Ws.s,t),a=ds(ca.l,Ws.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pi=new be;be.NAMES=Sp;var Tp=class Ep{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(t),this.density=i}clone(){return new Ep(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var wp=class extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ur=new C,qr=new C,Dl=new C,Yr=new C,$a=new C,Ja=new C,td=new C,Nl=new C,Ul=new C,Ol=new C,Fl=new Dt,Bl=new Dt,zl=new Dt,hn=class un{constructor(t=new C,i=new C,r=new C){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),ur.subVectors(t,i),a.cross(ur);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){ur.subVectors(a,i),qr.subVectors(r,i),Dl.subVectors(t,i);let s=ur.dot(ur),o=ur.dot(qr),l=ur.dot(Dl),c=qr.dot(qr),h=qr.dot(Dl),d=s*c-o*o;if(d===0)return n.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,g=(s*h-o*l)*u;return n.set(1-p-g,g,p)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Yr)===null?!1:Yr.x>=0&&Yr.y>=0&&Yr.x+Yr.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Yr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Yr.x),l.addScaledVector(s,Yr.y),l.addScaledVector(o,Yr.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return Fl.setScalar(0),Bl.setScalar(0),zl.setScalar(0),Fl.fromBufferAttribute(t,i),Bl.fromBufferAttribute(t,r),zl.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Fl,n.x),s.addScaledVector(Bl,n.y),s.addScaledVector(zl,n.z),s}static isFrontFacing(t,i,r,a){return ur.subVectors(r,i),qr.subVectors(t,i),ur.cross(qr).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ur.subVectors(this.c,this.b),qr.subVectors(this.a,this.b),ur.cross(qr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return un.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return un.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;$a.subVectors(a,r),Ja.subVectors(n,r),Nl.subVectors(t,r);let l=$a.dot(Nl),c=Ja.dot(Nl);if(l<=0&&c<=0)return i.copy(r);Ul.subVectors(t,a);let h=$a.dot(Ul),d=Ja.dot(Ul);if(h>=0&&d<=h)return i.copy(a);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return s=l/(l-h),i.copy(r).addScaledVector($a,s);Ol.subVectors(t,n);let p=$a.dot(Ol),g=Ja.dot(Ol);if(g>=0&&p<=g)return i.copy(n);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),i.copy(r).addScaledVector(Ja,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return td.subVectors(n,a),o=(d-h)/(d-h+(p-g)),i.copy(a).addScaledVector(td,o);let f=1/(m+x+u);return s=x*f,o=u*f,i.copy(r).addScaledVector($a,s).addScaledVector(Ja,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rr=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=dr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,dr):dr.fromBufferAttribute(a,n),dr.applyMatrix4(e.matrixWorld),this.expandByPoint(dr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xs.copy(i.boundingBox)),Xs.applyMatrix4(e.matrixWorld),this.union(Xs)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dr),dr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jn),js.subVectors(this.max,Jn),Qa.subVectors(e.a,Jn),en.subVectors(e.b,Jn),tn.subVectors(e.c,Jn),ha.subVectors(en,Qa),ua.subVectors(tn,en),Ma.subVectors(Qa,tn);let t=[0,-ha.z,ha.y,0,-ua.z,ua.y,0,-Ma.z,Ma.y,ha.z,0,-ha.x,ua.z,0,-ua.x,Ma.z,0,-Ma.x,-ha.y,ha.x,0,-ua.y,ua.x,0,-Ma.y,Ma.x,0];return!Hl(t,Qa,en,tn,js)||(t=[1,0,0,0,1,0,0,0,1],!Hl(t,Qa,en,tn,js))?!1:(qs.crossVectors(ha,ua),t=[qs.x,qs.y,qs.z],Hl(t,Qa,en,tn,js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zr=[new C,new C,new C,new C,new C,new C,new C,new C],dr=new C,Xs=new rr,Qa=new C,en=new C,tn=new C,ha=new C,ua=new C,Ma=new C,Jn=new C,js=new C,qs=new C,ba=new C;function Hl(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){ba.fromArray(e,n);let o=a.x*Math.abs(ba.x)+a.y*Math.abs(ba.y)+a.z*Math.abs(ba.z),l=t.dot(ba),c=i.dot(ba),h=r.dot(ba);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Jr=qg();function qg(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),r=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(r[l]=0,r[l|256]=32768,a[l]=24,a[l|256]=24):c<-14?(r[l]=1024>>-c-14,r[l|256]=1024>>-c-14|32768,a[l]=-c-1,a[l|256]=-c-1):c<=15?(r[l]=c+15<<10,r[l|256]=c+15<<10|32768,a[l]=13,a[l|256]=13):c<128?(r[l]=31744,r[l|256]=64512,a[l]=24,a[l|256]=24):(r[l]=31744,r[l|256]=64512,a[l]=13,a[l|256]=13)}let n=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,n[l]=c|h}for(let l=1024;l<2048;++l)n[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:r,shiftTable:a,mantissaTable:n,exponentTable:s,offsetTable:o}}function Yg(e){Math.abs(e)>65504&&Ye("DataUtils.toHalfFloat(): Value out of range."),e=mt(e,-65504,65504),Jr.floatView[0]=e;let t=Jr.uint32View[0],i=t>>23&511;return Jr.baseTable[i]+((t&8388607)>>Jr.shiftTable[i])}function Zg(e){let t=e>>10;return Jr.uint32View[0]=Jr.mantissaTable[Jr.offsetTable[t]+(e&1023)]+Jr.exponentTable[t],Jr.floatView[0]}var Ap=class{static toHalfFloat(e){return Yg(e)}static fromHalfFloat(e){return Zg(e)}},li=new C,Ys=new de,Kg=0,Ot=class extends Na{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vp,this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ys.fromBufferAttribute(this,t),Ys.applyMatrix3(e),this.setXY(t,Ys.x,Ys.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)li.fromBufferAttribute(this,t),li.applyMatrix3(e),this.setXYZ(t,li.x,li.y,li.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)li.fromBufferAttribute(this,t),li.applyMatrix4(e),this.setXYZ(t,li.x,li.y,li.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)li.fromBufferAttribute(this,t),li.applyNormalMatrix(e),this.setXYZ(t,li.x,li.y,li.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)li.fromBufferAttribute(this,t),li.transformDirection(e),this.setXYZ(t,li.x,li.y,li.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array),a=Ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Rp=class extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Cp=class extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var $e=class extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}},$g=new rr,Qn=new C,kl=new C,ar=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):$g.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qn.subVectors(e,this.center);let t=Qn.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Qn,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qn.copy(e.center).add(kl)),this.expandByPoint(Qn.copy(e.center).sub(kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jg=0,Qi=new Ze,Gl=new ti,rn=new C,ji=new rr,es=new rr,bi=new C,yt=class Ip extends Na{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pg(t)?Cp:Rp)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new dt().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qi.makeRotationFromQuaternion(t),this.applyMatrix4(Qi),this}rotateX(t){return Qi.makeRotationX(t),this.applyMatrix4(Qi),this}rotateY(t){return Qi.makeRotationY(t),this.applyMatrix4(Qi),this}rotateZ(t){return Qi.makeRotationZ(t),this.applyMatrix4(Qi),this}translate(t,i,r){return Qi.makeTranslation(t,i,r),this.applyMatrix4(Qi),this}scale(t,i,r){return Qi.makeScale(t,i,r),this.applyMatrix4(Qi),this}lookAt(t){return Gl.lookAt(t),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rn).negate(),this.translate(rn.x,rn.y,rn.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new $e(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];ji.setFromBufferAttribute(n),this.morphTargetsRelative?(bi.addVectors(this.boundingBox.min,ji.min),this.boundingBox.expandByPoint(bi),bi.addVectors(this.boundingBox.max,ji.max),this.boundingBox.expandByPoint(bi)):(this.boundingBox.expandByPoint(ji.min),this.boundingBox.expandByPoint(ji.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let r=this.boundingSphere.center;if(ji.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];es.setFromBufferAttribute(o),this.morphTargetsRelative?(bi.addVectors(ji.min,es.min),ji.expandByPoint(bi),bi.addVectors(ji.max,es.max),ji.expandByPoint(bi)):(ji.expandByPoint(es.min),ji.expandByPoint(es.max))}ji.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)bi.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(bi));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bi.fromBufferAttribute(o,c),l&&(rn.fromBufferAttribute(t,c),bi.add(rn)),a=Math.max(a,r.distanceToSquared(bi))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new Ot(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let _=0;_<r.count;_++)o[_]=new C,l[_]=new C;let c=new C,h=new C,d=new C,u=new de,p=new de,g=new de,x=new C,m=new C;function f(_,b,N){c.fromBufferAttribute(r,_),h.fromBufferAttribute(r,b),d.fromBufferAttribute(r,N),u.fromBufferAttribute(n,_),p.fromBufferAttribute(n,b),g.fromBufferAttribute(n,N),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),o[_].add(x),o[b].add(x),o[N].add(x),l[_].add(m),l[b].add(m),l[N].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,b=M.length;_<b;++_){let N=M[_],D=N.start,O=N.count;for(let q=D,U=D+O;q<U;q+=3)f(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let y=new C,v=new C,T=new C,R=new C;function w(_){T.fromBufferAttribute(a,_),R.copy(T);let b=o[_];y.copy(b),y.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(R,b);let N=v.dot(l[_])<0?-1:1;s.setXYZW(_,y.x,y.y,y.z,N)}for(let _=0,b=M.length;_<b;++_){let N=M[_],D=N.start,O=N.count;for(let q=D,U=D+O;q<U;q+=3)w(t.getX(q+0)),w(t.getX(q+1)),w(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ot(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,p=r.count;u<p;u++)r.setXYZ(u,0,0,0);let a=new C,n=new C,s=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);a.fromBufferAttribute(i,g),n.fromBufferAttribute(i,x),s.fromBufferAttribute(i,m),h.subVectors(s,n),d.subVectors(a,n),h.cross(d),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,x),c.fromBufferAttribute(r,m),o.add(h),l.add(h),c.add(h),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(x,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=i.count;u<p;u+=3)a.fromBufferAttribute(i,u+0),n.fromBufferAttribute(i,u+1),s.fromBufferAttribute(i,u+2),h.subVectors(s,n),d.subVectors(a,n),h.cross(d),r.setXYZ(u+0,h.x,h.y,h.z),r.setXYZ(u+1,h.x,h.y,h.z),r.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)bi.fromBufferAttribute(t,i),bi.normalize(),t.setXYZ(i,bi.x,bi.y,bi.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Ot(u,h,d)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Ip,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,r);i.setAttribute(o,c)}let n=this.morphAttributes;for(let o in n){let l=[],c=n[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let c=r[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(a[l]=h,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let c in a){let h=a[c];this.setAttribute(c,h.clone(i))}let n=t.morphAttributes;for(let c in n){let h=[],d=n[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(i));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},oh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vp,this.updateRanges=[],this.version=0,this.uuid=ir()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ir()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ir()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Fi=new C,lh=class Pp{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Fi.fromBufferAttribute(this,i),Fi.applyMatrix4(t),this.setXYZ(i,Fi.x,Fi.y,Fi.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Fi.fromBufferAttribute(this,i),Fi.applyNormalMatrix(t),this.setXYZ(i,Fi.x,Fi.y,Fi.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Fi.fromBufferAttribute(this,i),Fi.transformDirection(t),this.setXYZ(i,Fi.x,Fi.y,Fi.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=pr(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ut(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=pr(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=pr(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=pr(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=pr(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ut(i,this.array),r=Ut(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ut(i,this.array),r=Ut(r,this.array),a=Ut(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ut(i,this.array),r=Ut(r,this.array),a=Ut(a,this.array),n=Ut(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){Lo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new Ot(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Pp(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Lo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vl=new C,Qg=new C,e0=new dt,pa=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Vl.subVectors(i,t).cross(Qg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Vl),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||e0.getNormalMatrix(e),r=this.coplanarPoint(Vl).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},t0=0,vr=class extends Na{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=hs,this.side=ta,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ap,this.blendDst=np,this.blendEquation=cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ra,this.stencilZFail=Ra,this.stencilZPass=Ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new pa().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new de().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var mb=new C,gb=new C,vb=new C,_b=new de,xb=new de,yb=new Ze,Mb=new C,bb=new C,Sb=new C,Tb=new de,Eb=new de,wb=new de;var Ab=new C,Rb=new C;var Kr=new C,Wl=new C,Zs=new C,Ks=new C,Wo=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kr.copy(this.origin).addScaledVector(this.direction,t),Kr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wl.copy(e).add(t).multiplyScalar(.5),Zs.copy(t).sub(e).normalize(),Ks.copy(this.origin).sub(Wl);let a=e.distanceTo(t)*.5,n=-this.direction.dot(Zs),s=Ks.dot(this.direction),o=-Ks.dot(Zs),l=Ks.lengthSq(),c=Math.abs(1-n*n),h,d,u,p;if(c>0)if(h=n*o-s,d=n*s-o,p=a*c,h>=0)if(d>=-p)if(d<=p){let g=1/c;h*=g,d*=g,u=h*(h+n*d+2*s)+d*(n*h+d+2*o)+l}else d=a,h=Math.max(0,-(n*d+s)),u=-h*h+d*(d+2*o)+l;else d=-a,h=Math.max(0,-(n*d+s)),u=-h*h+d*(d+2*o)+l;else d<=-p?(h=Math.max(0,-(-n*a+s)),d=h>0?-a:Math.min(Math.max(-a,-o),a),u=-h*h+d*(d+2*o)+l):d<=p?(h=0,d=Math.min(Math.max(-a,-o),a),u=d*(d+2*o)+l):(h=Math.max(0,-(n*a+s)),d=h>0?a:Math.min(Math.max(-a,-o),a),u=-h*h+d*(d+2*o)+l);else d=n>0?-a:a,h=Math.max(0,-(n*d+s)),u=-h*h+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Wl).addScaledVector(Zs,d),u}intersectSphere(e,t){if(e.radius<0)return null;Kr.subVectors(e.center,this.origin);let i=Kr.dot(this.direction),r=Kr.dot(Kr)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),c>=0?(a=(e.min.y-d.y)*c,n=(e.max.y-d.y)*c):(a=(e.max.y-d.y)*c,n=(e.min.y-d.y)*c),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),h>=0?(s=(e.min.z-d.z)*h,o=(e.max.z-d.z)*h):(s=(e.max.z-d.z)*h,o=(e.min.z-d.z)*h),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Kr)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,c=s.z,h=e.x-n.x,d=e.y-n.y,u=e.z-n.z,p=t.x-n.x,g=t.y-n.y,x=t.z-n.z,m=i.x-n.x,f=i.y-n.y,M=i.z-n.z,y=Math.abs(o),v=Math.abs(l),T=Math.abs(c),R,w,_,b,N,D,O,q,U,L,G,F;if(y>=v&&y>=T?(_=o,D=h,U=p,F=m,o>=0?(R=l,w=c,b=d,N=u,O=g,q=x,L=f,G=M):(R=c,w=l,b=u,N=d,O=x,q=g,L=M,G=f)):v>=T?(_=l,D=d,U=g,F=f,l>=0?(R=c,w=o,b=u,N=h,O=x,q=p,L=M,G=m):(R=o,w=c,b=h,N=u,O=p,q=x,L=m,G=M)):(_=c,D=u,U=x,F=M,c>=0?(R=o,w=l,b=h,N=d,O=p,q=g,L=m,G=f):(R=l,w=o,b=d,N=h,O=g,q=p,L=f,G=m)),_===0)return null;let Q=R/_,V=w/_,Z=1/_,te=b-Q*D,ye=N-V*D,_e=O-Q*U,Ue=q-V*U,Ge=L-Q*F,ie=G-V*F,se=Ge*Ue-ie*_e,pe=te*ie-ye*Ge,Le=_e*ye-Ue*te;if(r){if(se<0||pe<0||Le<0)return null}else if((se<0||pe<0||Le<0)&&(se>0||pe>0||Le>0))return null;let Ne=se+pe+Le;if(Ne===0)return null;let fe=Z*(se*D+pe*U+Le*F);return(Ne>0?fe<0:fe>0)?null:this.at(fe/Ne,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},di=class extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},id=new Ze,Sa=new Wo,$s=new ar,rd=new C,Js=new C,Qs=new C,eo=new C,Xl=new C,to=new C,ad=new C,io=new C,rt=class extends ti{constructor(e=new yt,t=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){to.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let c=s[o],h=a[o];c!==0&&(Xl.fromBufferAttribute(h,e),n?to.addScaledVector(Xl,c):to.addScaledVector(Xl.sub(t),c))}t.add(to)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(a),Sa.copy(e.ray).recast(e.near),!($s.containsPoint(Sa.origin)===!1&&(Sa.intersectSphere($s,rd)===null||Sa.origin.distanceToSquared(rd)>(e.far-e.near)**2))&&(id.copy(a).invert(),Sa.copy(e.ray).applyMatrix4(id),!(i.boundingBox!==null&&Sa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Sa)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,c=a.attributes.uv1,h=a.attributes.normal,d=a.groups,u=a.drawRange;if(s!==null)if(Array.isArray(n))for(let p=0,g=d.length;p<g;p++){let x=d[p],m=n[x.materialIndex],f=Math.max(x.start,u.start),M=Math.min(s.count,Math.min(x.start+x.count,u.start+u.count));for(let y=f,v=M;y<v;y+=3){let T=s.getX(y),R=s.getX(y+1),w=s.getX(y+2);r=ro(this,m,e,i,l,c,h,T,R,w),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let p=Math.max(0,u.start),g=Math.min(s.count,u.start+u.count);for(let x=p,m=g;x<m;x+=3){let f=s.getX(x),M=s.getX(x+1),y=s.getX(x+2);r=ro(this,n,e,i,l,c,h,f,M,y),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let p=0,g=d.length;p<g;p++){let x=d[p],m=n[x.materialIndex],f=Math.max(x.start,u.start),M=Math.min(o.count,Math.min(x.start+x.count,u.start+u.count));for(let y=f,v=M;y<v;y+=3){let T=y,R=y+1,w=y+2;r=ro(this,m,e,i,l,c,h,T,R,w),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let p=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let x=p,m=g;x<m;x+=3){let f=x,M=x+1,y=x+2;r=ro(this,n,e,i,l,c,h,f,M,y),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}};function i0(e,t,i,r,a,n,s,o){let l;if(t.side===Li?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===ta,o),l===null)return null;io.copy(o),io.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(io);return c<i.near||c>i.far?null:{distance:c,point:io.clone(),object:e}}function ro(e,t,i,r,a,n,s,o,l,c){e.getVertexPosition(o,Js),e.getVertexPosition(l,Qs),e.getVertexPosition(c,eo);let h=i0(e,t,i,r,Js,Qs,eo,ad);if(h){let d=new C;hn.getBarycoord(ad,Js,Qs,eo,d),a&&(h.uv=hn.getInterpolatedAttribute(a,o,l,c,d,new de)),n&&(h.uv1=hn.getInterpolatedAttribute(n,o,l,c,d,new de)),s&&(h.normal=hn.getInterpolatedAttribute(s,o,l,c,d,new C),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};hn.getNormal(Js,Qs,eo,u.normal),h.face=u,h.barycoord=d}return h}var ts=new Dt,nd=new Dt,sd=new Dt,r0=new Dt,od=new Ze,ao=new C,jl=new ar,ld=new Ze,ql=new Wo,Lp=class extends rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fu,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new rr),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ao),this.boundingBox.expandByPoint(ao)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ar),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ao),this.boundingSphere.expandByPoint(ao)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jl.copy(this.boundingSphere),jl.applyMatrix4(r),e.ray.intersectsSphere(jl)!==!1&&(ld.copy(r).invert(),ql.copy(e.ray).applyMatrix4(ld),!(this.boundingBox!==null&&ql.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ql)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Dt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rg?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;nd.fromBufferAttribute(r.attributes.skinIndex,e),sd.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(ts.copy(t),t.set(0,0,0,0)):(ts.set(...t,1),t.set(0,0,0)),ts.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){let n=sd.getComponent(a);if(n!==0){let s=nd.getComponent(a);od.multiplyMatrices(i.bones[s].matrixWorld,i.boneInverses[s]),t.addScaledVector(r0.copy(ts).applyMatrix4(od),n)}}return t.isVector4&&(t.w=ts.w),t.applyMatrix4(this.bindMatrixInverse)}},ch=class extends ti{constructor(){super(),this.isBone=!0,this.type="Bone"}},va=class extends Di{constructor(e=null,t=1,i=1,r,a,n,s,o,l=ci,c=ci,h,d){super(null,n,s,o,l,c,r,a,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cd=new Ze,a0=new Ze,Dp=class Np{constructor(t=[],i=[]){this.uuid=ir(),this.bones=t.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),i.length===0)this.calculateInverses();else if(t.length!==i.length){Ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,i=this.bones.length;t<i;t++){let r=new Ze;this.bones[t]&&r.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&r.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){let t=this.bones,i=this.boneInverses,r=this.boneMatrices,a=this.boneTexture;for(let n=0,s=t.length;n<s;n++){let o=t[n]?t[n].matrixWorld:a0;cd.multiplyMatrices(o,i[n]),cd.toArray(r,n*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new Np(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let i=new Float32Array(t*t*4);i.set(this.boneMatrices);let r=new va(i,t,t,tr,er);return r.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=r,this}getBoneByName(t){for(let i=0,r=this.bones.length;i<r;i++){let a=this.bones[i];if(a.name===t)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,i){this.uuid=t.uuid;for(let r=0,a=t.bones.length;r<a;r++){let n=t.bones[r],s=i[n];s===void 0&&(Ye("Skeleton: No bone found with UUID:",n),s=new ch),this.bones.push(s),this.boneInverses.push(new Ze().fromArray(t.boneInverses[r]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let i=this.bones,r=this.boneInverses;for(let a=0,n=i.length;a<n;a++){let s=i[a];t.bones.push(s.uuid);let o=r[a];t.boneInverses.push(o.toArray())}return t}},Yi=class extends Ot{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},an=new Ze,hd=new Ze,no=[],ud=new rr,n0=new Ze,is=new rt,rs=new ar,zi=class extends rt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,n0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,an),ud.copy(e.boundingBox).applyMatrix4(an),this.boundingBox.union(ud)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ar),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,an),rs.copy(e.boundingSphere).applyMatrix4(an),this.boundingSphere.union(rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,n=e*a+1;for(let s=0;s<i.length;s++)i[s]=r[n+s]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(is.geometry=this.geometry,is.material=this.material,is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rs.copy(this.boundingSphere),rs.applyMatrix4(i),e.ray.intersectsSphere(rs)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,an),hd.multiplyMatrices(i,an),is.matrixWorld=hd,is.raycast(e,no);for(let n=0,s=no.length;n<s;n++){let o=no[n];o.instanceId=a,o.object=this,t.push(o)}no.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new va(new Float32Array(r*this.count),r,this.count,ws,er));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<i.length;l++)n+=i[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=r*e;return a[o]=s,a.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ta=new ar,s0=new de(.5,.5),so=new C,Cn=class{constructor(e=new pa,t=new pa,i=new pa,r=new pa,a=new pa,n=new pa){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mr,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],c=a[4],h=a[5],d=a[6],u=a[7],p=a[8],g=a[9],x=a[10],m=a[11],f=a[12],M=a[13],y=a[14],v=a[15];if(r[0].setComponents(l-n,u-c,m-p,v-f).normalize(),r[1].setComponents(l+n,u+c,m+p,v+f).normalize(),r[2].setComponents(l+s,u+h,m+g,v+M).normalize(),r[3].setComponents(l-s,u-h,m-g,v-M).normalize(),i)r[4].setComponents(o,d,x,y).normalize(),r[5].setComponents(l-o,u-d,m-x,v-y).normalize();else if(r[4].setComponents(l-o,u-d,m-x,v-y).normalize(),t===mr)r[5].setComponents(l+o,u+d,m+x,v+y).normalize();else if(t===ys)r[5].setComponents(o,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ta.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ta.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ta)}intersectsSprite(e){Ta.center.set(0,0,0);let t=s0.distanceTo(e.center);return Ta.radius=.7071067811865476+t,Ta.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ta)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(so.x=r.normal.x>0?e.max.x:e.min.x,so.y=r.normal.y>0?e.max.y:e.min.y,so.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},dd=new Ze,o0=class Up{constructor(){this.coordinateSystem=mr,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];dd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new Cn),r[a].setFromProjectionMatrix(dd,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new Cn),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new Up().copy(this)}};var l0=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let a=this.pool,n=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let s=a[this.index];n.push(s),this.index++,s.start=e,s.count=t,s.z=i,s.index=r}reset(){this.list.length=0,this.index=0}},Cb=new Ze,Ib=new be(1,1,1),Pb=new Cn,Lb=new o0,Db=new rr,Nb=new ar,Ub=new C,Ob=new C,Fb=new C,Bb=new l0,zb=new rt;var hh=class extends vr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Do=new C,No=new C,pd=new Ze,as=new Wo,oo=new ar,Yl=new C,fd=new C,Xo=class extends ti{constructor(e=new yt,t=new hh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)Do.fromBufferAttribute(t,r-1),No.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Do.distanceTo(No);e.setAttribute("lineDistance",new $e(i,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(r),oo.radius+=a,e.ray.intersectsSphere(oo)===!1)return;pd.copy(r).invert(),as.copy(e.ray).applyMatrix4(pd);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){let d=Math.max(0,n.start),u=Math.min(c.count,n.start+n.count);for(let p=d,g=u-1;p<g;p+=l){let x=c.getX(p),m=c.getX(p+1),f=lo(this,e,as,o,x,m,p);f&&t.push(f)}if(this.isLineLoop){let p=c.getX(u-1),g=c.getX(d),x=lo(this,e,as,o,p,g,u-1);x&&t.push(x)}}else{let d=Math.max(0,n.start),u=Math.min(h.count,n.start+n.count);for(let p=d,g=u-1;p<g;p+=l){let x=lo(this,e,as,o,p,p+1,p);x&&t.push(x)}if(this.isLineLoop){let p=lo(this,e,as,o,u-1,d,u-1);p&&t.push(p)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function lo(e,t,i,r,a,n,s){let o=e.geometry.attributes.position;if(Do.fromBufferAttribute(o,a),No.fromBufferAttribute(o,n),i.distanceSqToSegment(Do,No,Yl,fd)>r)return;Yl.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo(Yl);if(!(l<t.near||l>t.far))return{distance:l,point:fd.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var md=new C,gd=new C,jo=class extends Xo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)md.fromBufferAttribute(t,r),gd.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+md.distanceTo(gd);e.setAttribute("lineDistance",new $e(i,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Op=class extends Xo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Rs=class extends vr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vd=new Ze,Wc=new Wo,co=new ar,ho=new C,Dn=class extends ti{constructor(e=new yt,t=new Rs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(r),co.radius+=a,e.ray.intersectsSphere(co)===!1)return;vd.copy(r).invert(),Wc.copy(e.ray).applyMatrix4(vd);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,c=i.attributes.position;if(l!==null){let h=Math.max(0,n.start),d=Math.min(l.count,n.start+n.count);for(let u=h,p=d;u<p;u++){let g=l.getX(u);ho.fromBufferAttribute(c,g),_d(ho,g,o,r,e,t,this)}}else{let h=Math.max(0,n.start),d=Math.min(c.count,n.start+n.count);for(let u=h,p=d;u<p;u++)ho.fromBufferAttribute(c,u),_d(ho,u,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function _d(e,t,i,r,a,n,s){let o=Wc.distanceSqToPoint(e);if(o<i){let l=new C;Wc.closestPointToPoint(e,l),l.applyMatrix4(r);let c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;n.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var Fp=class extends Di{constructor(e=[],t=Ia,i,r,a,n,s,o,l,c){super(e,t,i,r,a,n,s,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Or=class extends Di{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bs=class extends Di{constructor(e,t,i=Nr,r,a,n,s=ci,o=ci,l,c=ia,h=1){if(c!==ia&&c!==wa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,a,n,s,o,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},c0=class extends bs{constructor(e,t=Nr,i=Ia,r,a,n=ci,s=ci,o,l=ia){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,r,a,n,s,o,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Bp=class extends Di{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fr=class zp extends yt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,r,i,t,s,n,0),g("z","y","x",1,-1,r,i,-t,s,n,1),g("x","z","y",1,1,t,r,i,a,s,2),g("x","z","y",1,-1,t,r,-i,a,s,3),g("x","y","z",1,-1,t,i,r,a,n,4),g("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(d,2));function g(x,m,f,M,y,v,T,R,w,_,b){let N=v/w,D=T/_,O=v/2,q=T/2,U=R/2,L=w+1,G=_+1,F=0,Q=0,V=new C;for(let Z=0;Z<G;Z++){let te=Z*D-q;for(let ye=0;ye<L;ye++){let _e=ye*N-O;V[x]=_e*M,V[m]=te*y,V[f]=U,c.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[f]=R>0?1:-1,h.push(V.x,V.y,V.z),d.push(ye/w),d.push(1-Z/_),F+=1}}for(let Z=0;Z<_;Z++)for(let te=0;te<w;te++){let ye=u+te+L*Z,_e=u+te+L*(Z+1),Ue=u+(te+1)+L*(Z+1),Ge=u+(te+1)+L*Z;l.push(ye,_e,Ge),l.push(_e,Ue,Ge),Q+=6}o.addGroup(p,Q,b),p+=Q,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zp(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},h0=class Hp extends yt{constructor(t=1,i=1,r=4,a=8,n=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:r,radialSegments:a,heightSegments:n},i=Math.max(0,i),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),n=Math.max(1,Math.floor(n));let s=[],o=[],l=[],c=[],h=i/2,d=Math.PI/2*t,u=i,p=2*d+u,g=r*2+n,x=a+1,m=new C,f=new C;for(let M=0;M<=g;M++){let y=0,v=0,T=0,R=0;if(M<=r){let b=M/r,N=b*Math.PI/2;v=-h-t*Math.cos(N),T=t*Math.sin(N),R=-t*Math.cos(N),y=b*d}else if(M<=r+n){let b=(M-r)/n;v=-h+b*i,T=t,R=0,y=d+b*u}else{let b=(M-r-n)/r,N=b*Math.PI/2;v=h+t*Math.sin(N),T=t*Math.cos(N),R=t*Math.sin(N),y=d+u+b*d}let w=Math.max(0,Math.min(1,y/p)),_=0;M===0?_=.5/a:M===g&&(_=-.5/a);for(let b=0;b<=a;b++){let N=b/a,D=N*Math.PI*2,O=Math.sin(D),q=Math.cos(D);f.x=-T*q,f.y=v,f.z=T*O,o.push(f.x,f.y,f.z),m.set(-T*q,R,T*O),m.normalize(),l.push(m.x,m.y,m.z),c.push(N+_,w)}if(M>0){let b=(M-1)*x;for(let N=0;N<a;N++){let D=b+N,O=b+N+1,q=M*x+N,U=M*x+N+1;s.push(D,O,q),s.push(O,U,q)}}}this.setIndex(s),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hp(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},uh=class kp extends yt{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],c=new C,h=new de;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=i;d++,u+=3){let p=r+d/i*a;c.x=t*Math.cos(p),c.y=t*Math.sin(p),s.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(s[u]/t+1)/2,h.y=(s[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=i;d++)n.push(d,d+1,0);this.setIndex(n),this.setAttribute("position",new $e(s,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kp(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Gp=class Vp extends yt{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let c=this;a=Math.floor(a),n=Math.floor(n);let h=[],d=[],u=[],p=[],g=0,x=[],m=r/2,f=0;M(),s===!1&&(t>0&&y(!0),i>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new $e(d,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(p,2));function M(){let v=new C,T=new C,R=0,w=(i-t)/r;for(let _=0;_<=n;_++){let b=[],N=_/n,D=N*(i-t)+t;for(let O=0;O<=a;O++){let q=O/a,U=q*l+o,L=Math.sin(U),G=Math.cos(U);T.x=D*L,T.y=-N*r+m,T.z=D*G,d.push(T.x,T.y,T.z),v.set(L,w,G).normalize(),u.push(v.x,v.y,v.z),p.push(q,1-N),b.push(g++)}x.push(b)}for(let _=0;_<a;_++)for(let b=0;b<n;b++){let N=x[b][_],D=x[b+1][_],O=x[b+1][_+1],q=x[b][_+1];(t>0||b!==0)&&(h.push(N,D,q),R+=3),(i>0||b!==n-1)&&(h.push(D,O,q),R+=3)}c.addGroup(f,R,0),f+=R}function y(v){let T=g,R=new de,w=new C,_=0,b=v===!0?t:i,N=v===!0?1:-1;for(let O=1;O<=a;O++)d.push(0,m*N,0),u.push(0,N,0),p.push(.5,.5),g++;let D=g;for(let O=0;O<=a;O++){let q=O/a*l+o,U=Math.cos(q),L=Math.sin(q);w.x=b*L,w.y=m*N,w.z=b*U,d.push(w.x,w.y,w.z),u.push(0,N,0),R.x=U*.5+.5,R.y=L*.5*N+.5,p.push(R.x,R.y),g++}for(let O=0;O<a;O++){let q=T+O,U=D+O;v===!0?h.push(U,U+1,q):h.push(U+1,U,q),_+=3}c.addGroup(f,_,v===!0?1:2),f+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},u0=class Wp extends Gp{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new Wp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cs=class Xp extends yt{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let n=[],s=[];o(a),c(r),h(),this.setAttribute("position",new $e(n,3)),this.setAttribute("normal",new $e(n.slice(),3)),this.setAttribute("uv",new $e(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let y=new C,v=new C,T=new C;for(let R=0;R<i.length;R+=3)p(i[R+0],y),p(i[R+1],v),p(i[R+2],T),l(y,v,T,M)}function l(M,y,v,T){let R=T+1,w=[];for(let _=0;_<=R;_++){w[_]=[];let b=M.clone().lerp(v,_/R),N=y.clone().lerp(v,_/R),D=R-_;for(let O=0;O<=D;O++)O===0&&_===R?w[_][O]=b:w[_][O]=b.clone().lerp(N,O/D)}for(let _=0;_<R;_++)for(let b=0;b<2*(R-_)-1;b++){let N=Math.floor(b/2);b%2===0?(u(w[_][N+1]),u(w[_+1][N]),u(w[_][N])):(u(w[_][N+1]),u(w[_+1][N+1]),u(w[_+1][N]))}}function c(M){let y=new C;for(let v=0;v<n.length;v+=3)y.x=n[v+0],y.y=n[v+1],y.z=n[v+2],y.normalize().multiplyScalar(M),n[v+0]=y.x,n[v+1]=y.y,n[v+2]=y.z}function h(){let M=new C;for(let y=0;y<n.length;y+=3){M.x=n[y+0],M.y=n[y+1],M.z=n[y+2];let v=m(M)/2/Math.PI+.5,T=f(M)/Math.PI+.5;s.push(v,1-T)}g(),d()}function d(){for(let M=0;M<s.length;M+=6){let y=s[M+0],v=s[M+2],T=s[M+4],R=Math.max(y,v,T),w=Math.min(y,v,T);R>.9&&w<.1&&(y<.2&&(s[M+0]+=1),v<.2&&(s[M+2]+=1),T<.2&&(s[M+4]+=1))}}function u(M){n.push(M.x,M.y,M.z)}function p(M,y){let v=M*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){let M=new C,y=new C,v=new C,T=new C,R=new de,w=new de,_=new de;for(let b=0,N=0;b<n.length;b+=9,N+=6){M.set(n[b+0],n[b+1],n[b+2]),y.set(n[b+3],n[b+4],n[b+5]),v.set(n[b+6],n[b+7],n[b+8]),R.set(s[N+0],s[N+1]),w.set(s[N+2],s[N+3]),_.set(s[N+4],s[N+5]),T.copy(M).add(y).add(v).divideScalar(3);let D=m(T);x(R,N+0,M,D),x(w,N+2,y,D),x(_,N+4,v,D)}}function x(M,y,v,T){T<0&&M.x===1&&(s[y]=M.x-1),v.x===0&&v.z===0&&(s[y]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xp(t.vertices,t.indices,t.radius,t.detail)}},d0=class jp extends Cs{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=1/r,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,s,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new jp(t.radius,t.detail)}},uo=new C,po=new C,Zl=new C,fo=new hn,p0=class extends yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(vn*t),a=e.getIndex(),n=e.getAttribute("position"),s=a?a.count:n.count,o=[0,0,0],l=["a","b","c"],c=new Array(3),h={},d=[];for(let u=0;u<s;u+=3){a?(o[0]=a.getX(u),o[1]=a.getX(u+1),o[2]=a.getX(u+2)):(o[0]=u,o[1]=u+1,o[2]=u+2);let{a:p,b:g,c:x}=fo;if(p.fromBufferAttribute(n,o[0]),g.fromBufferAttribute(n,o[1]),x.fromBufferAttribute(n,o[2]),fo.getNormal(Zl),c[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,c[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,c[2]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let m=0;m<3;m++){let f=(m+1)%3,M=c[m],y=c[f],v=fo[l[m]],T=fo[l[f]],R=`${M}_${y}`,w=`${y}_${M}`;w in h&&h[w]?(Zl.dot(h[w].normal)<=r&&(d.push(v.x,v.y,v.z),d.push(T.x,T.y,T.z)),h[w]=null):R in h||(h[R]={index0:o[m],index1:o[f],normal:Zl.clone()})}}for(let u in h)if(h[u]){let{index0:p,index1:g}=h[u];uo.fromBufferAttribute(n,p),po.fromBufferAttribute(n,g),d.push(uo.x,uo.y,uo.z),d.push(po.x,po.y,po.z)}this.setAttribute("position",new $e(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Br=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let c=i[r],h=i[r+1]-c,d=(n-c)/h;return(r+d)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new de:new C);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,r=[],a=[],n=[],s=new C,o=new Ze;for(let u=0;u<=e;u++){let p=u/e;r[u]=this.getTangentAt(p,new C)}a[0]=new C,n[0]=new C;let l=Number.MAX_VALUE,c=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=l&&(l=c,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let u=1;u<=e;u++){if(a[u]=a[u-1].clone(),n[u]=n[u-1].clone(),s.crossVectors(r[u-1],r[u]),s.length()>Number.EPSILON){s.normalize();let p=Math.acos(mt(r[u-1].dot(r[u]),-1,1));a[u].applyMatrix4(o.makeRotationAxis(s,p))}n[u].crossVectors(r[u],a[u])}if(t===!0){let u=Math.acos(mt(a[0].dot(a[e]),-1,1));u/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(u=-u);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],u*p)),n[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},dh=class extends Br{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new de){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*c-u*h+this.aX,l=d*h+u*c+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},f0=class extends dh{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function ph(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,c){a(s,o,c*(o-n),c*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,c,h,d){let u=(s-n)/c-(o-n)/(c+h)+(o-s)/h,p=(o-s)/h-(l-s)/(h+d)+(l-o)/d;u*=h,p*=h,a(s,o,u,p)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}var xd=new C,yd=new C,Kl=new ph,$l=new ph,Jl=new ph,m0=class extends Br{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,c;this.closed||s>0?l=r[(s-1)%a]:(yd.subVectors(r[0],r[1]).add(r[0]),l=yd);let h=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?c=r[(s+2)%a]:(xd.subVectors(r[a-1],r[a-2]).add(r[a-1]),c=xd),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(h),u),g=Math.pow(h.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(c),u);g<1e-4&&(g=1),p<1e-4&&(p=g),x<1e-4&&(x=g),Kl.initNonuniformCatmullRom(l.x,h.x,d.x,c.x,p,g,x),$l.initNonuniformCatmullRom(l.y,h.y,d.y,c.y,p,g,x),Jl.initNonuniformCatmullRom(l.z,h.z,d.z,c.z,p,g,x)}else this.curveType==="catmullrom"&&(Kl.initCatmullRom(l.x,h.x,d.x,c.x,this.tension),$l.initCatmullRom(l.y,h.y,d.y,c.y,this.tension),Jl.initCatmullRom(l.z,h.z,d.z,c.z,this.tension));return i.set(Kl.calc(o),$l.calc(o),Jl.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Md(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function g0(e,t){let i=1-e;return i*i*t}function v0(e,t){return 2*(1-e)*e*t}function _0(e,t){return e*e*t}function ps(e,t,i,r){return g0(e,t)+v0(e,i)+_0(e,r)}function x0(e,t){let i=1-e;return i*i*i*t}function y0(e,t){let i=1-e;return 3*i*i*e*t}function M0(e,t){return 3*(1-e)*e*e*t}function b0(e,t){return e*e*e*t}function fs(e,t,i,r,a){return x0(e,t)+y0(e,i)+M0(e,r)+b0(e,a)}var qp=class extends Br{constructor(e=new de,t=new de,i=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new de){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(fs(e,r.x,a.x,n.x,s.x),fs(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},S0=class extends Br{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(fs(e,r.x,a.x,n.x,s.x),fs(e,r.y,a.y,n.y,s.y),fs(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yp=class extends Br{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},T0=class extends Br{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zp=class extends Br{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(ps(e,r.x,a.x,n.x),ps(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kp=class extends Br{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(ps(e,r.x,a.x,n.x),ps(e,r.y,a.y,n.y),ps(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$p=class extends Br{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],c=r[n>r.length-2?r.length-1:n+1],h=r[n>r.length-3?r.length-1:n+2];return i.set(Md(s,o.x,l.x,c.x,h.x),Md(s,o.y,l.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new de().fromArray(r))}return this}},Uo=Object.freeze({__proto__:null,ArcCurve:f0,CatmullRomCurve3:m0,CubicBezierCurve:qp,CubicBezierCurve3:S0,EllipseCurve:dh,LineCurve:Yp,LineCurve3:T0,QuadraticBezierCurve:Zp,QuadraticBezierCurve3:Kp,SplineCurve:$p}),E0=class extends Br{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let c=o[l];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Uo[r.type]().fromJSON(r))}return this}},bd=class extends E0{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Yp(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new Zp(this.currentPoint.clone(),new de(e,t),new de(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new qp(this.currentPoint.clone(),new de(e,t),new de(i,r),new de(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new $p(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new dh(e,t,i,r,a,n,s,o);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Jp=class extends bd{constructor(e){super(e),this.uuid=ir(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new bd().fromJSON(r))}return this}};function w0(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=Qp(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,c;if(r&&(n=P0(e,t,n,i)),e.length>80*i){o=e[0],l=e[1];let h=o,d=l;for(let u=i;u<a;u+=i){let p=e[u],g=e[u+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Ss(n,s,i,o,l,c,0),s}function Qp(e,t,i,r,a){let n;if(a===G0(e,t,i,r)>0)for(let s=t;s<i;s+=r)n=Sd(s/r|0,e[s],e[s+1],n);else for(let s=i-r;s>=t;s-=r)n=Sd(s/r|0,e[s],e[s+1],n);return n&&In(n,n.next)&&(Es(n),n=n.next),n}function Da(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(In(i,i.next)||Jt(i.prev,i,i.next)===0)){if(Es(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Ss(e,t,i,r,a,n,s){if(!e)return;!s&&n&&O0(e,r,a,n);let o=e;for(;e.prev!==e.next;){let l=e.prev,c=e.next;if(n?R0(e,r,a,n):A0(e)){t.push(l.i,e.i,c.i),Es(e),e=c.next,o=c.next;continue}if(e=c,e===o){s?s===1?(e=C0(Da(e),t),Ss(e,t,i,r,a,n,2)):s===2&&I0(e,t,i,r,a,n):Ss(Da(e),t,i,r,a,n,1);break}}}function A0(e){let t=e.prev,i=e,r=e.next;if(Jt(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,c=r.y,h=Math.min(a,n,s),d=Math.min(o,l,c),u=Math.max(a,n,s),p=Math.max(o,l,c),g=r.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&ls(a,o,n,l,s,c,g.x,g.y)&&Jt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function R0(e,t,i,r){let a=e.prev,n=e,s=e.next;if(Jt(a,n,s)>=0)return!1;let o=a.x,l=n.x,c=s.x,h=a.y,d=n.y,u=s.y,p=Math.min(o,l,c),g=Math.min(h,d,u),x=Math.max(o,l,c),m=Math.max(h,d,u),f=Xc(p,g,t,i,r),M=Xc(x,m,t,i,r),y=e.prevZ,v=e.nextZ;for(;y&&y.z>=f&&v&&v.z<=M;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==a&&y!==s&&ls(o,h,l,d,c,u,y.x,y.y)&&Jt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==a&&v!==s&&ls(o,h,l,d,c,u,v.x,v.y)&&Jt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==a&&y!==s&&ls(o,h,l,d,c,u,y.x,y.y)&&Jt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=M;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==a&&v!==s&&ls(o,h,l,d,c,u,v.x,v.y)&&Jt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function C0(e,t){let i=e;do{let r=i.prev,a=i.next.next;!In(r,a)&&tf(r,i,i.next,a)&&Ts(r,a)&&Ts(a,r)&&(t.push(r.i,i.i,a.i),Es(i),Es(i.next),i=e=a),i=i.next}while(i!==e);return Da(i)}function I0(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&z0(s,o)){let l=rf(s,o);s=Da(s,s.next),l=Da(l,l.next),Ss(s,t,i,r,a,n,0),Ss(l,t,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function P0(e,t,i,r){let a=[];for(let n=0,s=t.length;n<s;n++){let o=t[n]*r,l=n<s-1?t[n+1]*r:e.length,c=Qp(e,o,l,r,!1);c===c.next&&(c.steiner=!0),a.push(B0(c))}a.sort(L0);for(let n=0;n<a.length;n++)i=D0(a[n],i);return i}function L0(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let r=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);i=r-a}return i}function D0(e,t){let i=N0(e,t);if(!i)return t;let r=rf(i,e);return Da(r,r.next),Da(i,i.next)}function N0(e,t){let i=t,r=e.x,a=e.y,n=-1/0,s;if(In(e,i))return i;do{if(In(e,i.next))return i.next;if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){let d=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=r&&d>n&&(n=d,s=i.x<i.next.x?i:i.next,d===r))return s}i=i.next}while(i!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0;i=s;do{if(r>=i.x&&i.x>=l&&r!==i.x&&ef(a<c?r:n,a,l,c,a<c?n:r,a,i.x,i.y)){let d=Math.abs(a-i.y)/(r-i.x);Ts(i,e)&&(d<h||d===h&&(i.x>s.x||i.x===s.x&&U0(s,i)))&&(s=i,h=d)}i=i.next}while(i!==o);return s}function U0(e,t){return Jt(e.prev,e,t.prev)<0&&Jt(t.next,e,e.next)<0}function O0(e,t,i,r){let a=e;do a.z===0&&(a.z=Xc(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,F0(a)}function F0(e){let t,i=1;do{let r=e,a;e=null;let n=null;for(t=0;r;){t++;let s=r,o=0;for(let c=0;c<i&&(o++,s=s.nextZ,!!s);c++);let l=i;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(a=r,r=r.nextZ,o--):(a=s,s=s.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=s}n.nextZ=null,i*=2}while(t>1);return e}function Xc(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function B0(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function ef(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function ls(e,t,i,r,a,n,s,o){return!(e===s&&t===o)&&ef(e,t,i,r,a,n,s,o)}function z0(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!H0(e,t)&&(Ts(e,t)&&Ts(t,e)&&k0(e,t)&&(Jt(e.prev,e,t.prev)||Jt(e,t.prev,t))||In(e,t)&&Jt(e.prev,e,e.next)>0&&Jt(t.prev,t,t.next)>0)}function Jt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function In(e,t){return e.x===t.x&&e.y===t.y}function tf(e,t,i,r){let a=go(Jt(e,t,i)),n=go(Jt(e,t,r)),s=go(Jt(i,r,e)),o=go(Jt(i,r,t));return!!(a!==n&&s!==o||a===0&&mo(e,i,t)||n===0&&mo(e,r,t)||s===0&&mo(i,e,r)||o===0&&mo(i,t,r))}function mo(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function go(e){return e>0?1:e<0?-1:0}function H0(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&tf(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Ts(e,t){return Jt(e.prev,e,e.next)<0?Jt(e,t,e.next)>=0&&Jt(e,e.prev,t)>=0:Jt(e,t,e.prev)<0||Jt(e,e.next,t)<0}function k0(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function rf(e,t){let i=jc(e.i,e.x,e.y),r=jc(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function Sd(e,t,i,r){let a=jc(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function Es(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function jc(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function G0(e,t,i,r){let a=0;for(let n=t,s=i-r;n<i;n+=r)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var V0=class{static triangulate(e,t,i=2){return w0(e,t,i)}},Aa=class af{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return af.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];Td(t),Ed(r,t);let s=t.length;i.forEach(Td);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,Ed(r,i[l]);let o=V0.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function Td(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ed(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var W0=class nf extends yt{constructor(t=new Jp([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];s(c)}this.setAttribute("position",new $e(a,3)),this.setAttribute("uv",new $e(n,2)),this.computeVertexNormals();function s(o){let l=[],c=i.curveSegments!==void 0?i.curveSegments:12,h=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,u=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,g=i.bevelSize!==void 0?i.bevelSize:p-.1,x=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,f=i.extrudePath,M=i.UVGenerator!==void 0?i.UVGenerator:X0,y,v=!1,T,R,w,_;if(f){y=f.getSpacedPoints(h),v=!0,u=!1;let ce=f.isCatmullRomCurve3?f.closed:!1;T=f.computeFrenetFrames(h,ce),R=new C,w=new C,_=new C}u||(m=0,p=0,g=0,x=0);let b=o.extractPoints(c),N=b.shape,D=b.holes;if(!Aa.isClockWise(N)){N=N.reverse();for(let ce=0,oe=D.length;ce<oe;ce++){let le=D[ce];Aa.isClockWise(le)&&(D[ce]=le.reverse())}}function O(ce){let oe=10000000000000001e-36,le=ce[0];for(let Re=1;Re<=ce.length;Re++){let Ce=Re%ce.length,Fe=ce[Ce],We=Fe.x-le.x,Qe=Fe.y-le.y,at=We*We+Qe*Qe,B=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(le.x),Math.abs(le.y)),gt=oe*B*B;if(at<=gt){ce.splice(Ce,1),Re--;continue}le=Fe}}O(N),D.forEach(O);let q=D.length,U=N;for(let ce=0;ce<q;ce++){let oe=D[ce];N=N.concat(oe)}function L(ce,oe,le){return oe||ot("ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(oe,le)}let G=N.length;function F(ce,oe,le){let Re,Ce,Fe,We=ce.x-oe.x,Qe=ce.y-oe.y,at=le.x-ce.x,B=le.y-ce.y,gt=We*We+Qe*Qe,ut=We*B-Qe*at;if(Math.abs(ut)>Number.EPSILON){let ct=Math.sqrt(gt),I=Math.sqrt(at*at+B*B),E=oe.x-Qe/ct,k=oe.y+We/ct,ae=le.x-B/I,ue=le.y+at/I,Te=((ae-E)*B-(ue-k)*at)/(We*B-Qe*at);Re=E+We*Te-ce.x,Ce=k+Qe*Te-ce.y;let Ie=Re*Re+Ce*Ce;if(Ie<=2)return new de(Re,Ce);Fe=Math.sqrt(Ie/2)}else{let ct=!1;We>Number.EPSILON?at>Number.EPSILON&&(ct=!0):We<-Number.EPSILON?at<-Number.EPSILON&&(ct=!0):Math.sign(Qe)===Math.sign(B)&&(ct=!0),ct?(Re=-Qe,Ce=We,Fe=Math.sqrt(gt)):(Re=We,Ce=Qe,Fe=Math.sqrt(gt/2))}return new de(Re/Fe,Ce/Fe)}let Q=[];for(let ce=0,oe=U.length,le=oe-1,Re=ce+1;ce<oe;ce++,le++,Re++)le===oe&&(le=0),Re===oe&&(Re=0),Q[ce]=F(U[ce],U[le],U[Re]);let V=[],Z,te=Q.concat();for(let ce=0,oe=q;ce<oe;ce++){let le=D[ce];Z=[];for(let Re=0,Ce=le.length,Fe=Ce-1,We=Re+1;Re<Ce;Re++,Fe++,We++)Fe===Ce&&(Fe=0),We===Ce&&(We=0),Z[Re]=F(le[Re],le[Fe],le[We]);V.push(Z),te=te.concat(Z)}let ye;if(m===0)ye=Aa.triangulateShape(U,D);else{let ce=[],oe=[];for(let le=0;le<m;le++){let Re=le/m,Ce=p*Math.cos(Re*Math.PI/2),Fe=g*Math.sin(Re*Math.PI/2)+x;for(let We=0,Qe=U.length;We<Qe;We++){let at=L(U[We],Q[We],Fe);pe(at.x,at.y,-Ce),Re===0&&ce.push(at)}for(let We=0,Qe=q;We<Qe;We++){let at=D[We];Z=V[We];let B=[];for(let gt=0,ut=at.length;gt<ut;gt++){let ct=L(at[gt],Z[gt],Fe);pe(ct.x,ct.y,-Ce),Re===0&&B.push(ct)}Re===0&&oe.push(B)}}ye=Aa.triangulateShape(ce,oe)}let _e=ye.length,Ue=g+x;for(let ce=0;ce<G;ce++){let oe=u?L(N[ce],te[ce],Ue):N[ce];v?(w.copy(T.normals[0]).multiplyScalar(oe.x),R.copy(T.binormals[0]).multiplyScalar(oe.y),_.copy(y[0]).add(w).add(R),pe(_.x,_.y,_.z)):pe(oe.x,oe.y,0)}for(let ce=1;ce<=h;ce++)for(let oe=0;oe<G;oe++){let le=u?L(N[oe],te[oe],Ue):N[oe];v?(w.copy(T.normals[ce]).multiplyScalar(le.x),R.copy(T.binormals[ce]).multiplyScalar(le.y),_.copy(y[ce]).add(w).add(R),pe(_.x,_.y,_.z)):pe(le.x,le.y,d/h*ce)}for(let ce=m-1;ce>=0;ce--){let oe=ce/m,le=p*Math.cos(oe*Math.PI/2),Re=g*Math.sin(oe*Math.PI/2)+x;for(let Ce=0,Fe=U.length;Ce<Fe;Ce++){let We=L(U[Ce],Q[Ce],Re);pe(We.x,We.y,d+le)}for(let Ce=0,Fe=D.length;Ce<Fe;Ce++){let We=D[Ce];Z=V[Ce];for(let Qe=0,at=We.length;Qe<at;Qe++){let B=L(We[Qe],Z[Qe],Re);v?pe(B.x,B.y+y[h-1].y,y[h-1].x+le):pe(B.x,B.y,d+le)}}}Ge(),ie();function Ge(){let ce=a.length/3;if(u){let oe=0,le=G*oe;for(let Re=0;Re<_e;Re++){let Ce=ye[Re];Le(Ce[2]+le,Ce[1]+le,Ce[0]+le)}oe=h+m*2,le=G*oe;for(let Re=0;Re<_e;Re++){let Ce=ye[Re];Le(Ce[0]+le,Ce[1]+le,Ce[2]+le)}}else{for(let oe=0;oe<_e;oe++){let le=ye[oe];Le(le[2],le[1],le[0])}for(let oe=0;oe<_e;oe++){let le=ye[oe];Le(le[0]+G*h,le[1]+G*h,le[2]+G*h)}}r.addGroup(ce,a.length/3-ce,0)}function ie(){let ce=a.length/3,oe=0;se(U,oe),oe+=U.length;for(let le=0,Re=D.length;le<Re;le++){let Ce=D[le];se(Ce,oe),oe+=Ce.length}r.addGroup(ce,a.length/3-ce,1)}function se(ce,oe){let le=ce.length;for(;--le>=0;){let Re=le,Ce=le-1;Ce<0&&(Ce=ce.length-1);for(let Fe=0,We=h+m*2;Fe<We;Fe++){let Qe=G*Fe,at=G*(Fe+1),B=oe+Re+Qe,gt=oe+Ce+Qe,ut=oe+Ce+at,ct=oe+Re+at;Ne(B,gt,ut,ct)}}}function pe(ce,oe,le){l.push(ce),l.push(oe),l.push(le)}function Le(ce,oe,le){fe(ce),fe(oe),fe(le);let Re=a.length/3,Ce=M.generateTopUV(r,a,Re-3,Re-2,Re-1);Oe(Ce[0]),Oe(Ce[1]),Oe(Ce[2])}function Ne(ce,oe,le,Re){fe(ce),fe(oe),fe(Re),fe(oe),fe(le),fe(Re);let Ce=a.length/3,Fe=M.generateSideWallUV(r,a,Ce-6,Ce-3,Ce-2,Ce-1);Oe(Fe[0]),Oe(Fe[1]),Oe(Fe[3]),Oe(Fe[1]),Oe(Fe[2]),Oe(Fe[3])}function fe(ce){a.push(l[ce*3+0]),a.push(l[ce*3+1]),a.push(l[ce*3+2])}function Oe(ce){n.push(ce.x),n.push(ce.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return j0(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new Uo[a.type]().fromJSON(a)),new nf(r,t.options)}},X0={generateTopUV:function(e,t,i,r,a){let n=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],c=t[a*3],h=t[a*3+1];return[new de(n,s),new de(o,l),new de(c,h)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],c=t[r*3],h=t[r*3+1],d=t[r*3+2],u=t[a*3],p=t[a*3+1],g=t[a*3+2],x=t[n*3],m=t[n*3+1],f=t[n*3+2];return Math.abs(o-h)<Math.abs(s-c)?[new de(s,1-l),new de(c,1-d),new de(u,1-g),new de(x,1-f)]:[new de(o,1-l),new de(h,1-d),new de(p,1-g),new de(m,1-f)]}};function j0(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var fh=class sf extends Cs{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,n,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new sf(t.radius,t.detail)}},q0=class of extends yt{constructor(t=[new de(0,-.5),new de(.5,0),new de(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=mt(a,0,Math.PI*2);let n=[],s=[],o=[],l=[],c=[],h=1/i,d=new C,u=new de,p=new C,g=new C,x=new C,m=0,f=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let M=0;M<=i;M++){let y=r+M*h*a,v=Math.sin(y),T=Math.cos(y);for(let R=0;R<=t.length-1;R++){d.x=t[R].x*v,d.y=t[R].y,d.z=t[R].x*T,s.push(d.x,d.y,d.z),u.x=M/i,u.y=R/(t.length-1),o.push(u.x,u.y);let w=l[3*R+0]*v,_=l[3*R+1],b=l[3*R+0]*T;c.push(w,_,b)}}for(let M=0;M<i;M++)for(let y=0;y<t.length-1;y++){let v=y+M*t.length,T=v,R=v+t.length,w=v+t.length+1,_=v+1;n.push(T,R,_),n.push(w,_,R)}this.setIndex(n),this.setAttribute("position",new $e(s,3)),this.setAttribute("uv",new $e(o,2)),this.setAttribute("normal",new $e(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new of(t.points,t.segments,t.phiStart,t.phiLength)}},mh=class lf extends Cs{constructor(t=1,i=0){let r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new lf(t.radius,t.detail)}},ri=class cf extends yt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),c=o+1,h=l+1,d=t/o,u=i/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let M=f*u-s;for(let y=0;y<c;y++){let v=y*d-n;g.push(v,-M,0),x.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){let y=M+c*f,v=M+c*(f+1),T=M+1+c*(f+1),R=M+1+c*f;p.push(y,v,R),p.push(v,T,R)}this.setIndex(p),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cf(t.width,t.height,t.widthSegments,t.heightSegments)}},gh=class hf extends yt{constructor(t=.5,i=1,r=32,a=1,n=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:n,thetaLength:s},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],c=[],h=[],d=t,u=(i-t)/a,p=new C,g=new de;for(let x=0;x<=a;x++){for(let m=0;m<=r;m++){let f=n+m/r*s;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/i+1)/2,g.y=(p.y/i+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<a;x++){let m=x*(r+1);for(let f=0;f<r;f++){let M=f+m,y=M,v=M+r+1,T=M+r+2,R=M+1;o.push(y,v,R),o.push(v,T,R)}}this.setIndex(o),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hf(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Y0=class uf extends yt{constructor(t=new Jp([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(n,3)),this.setAttribute("uv",new $e(s,2));function c(h){let d=a.length/3,u=h.extractPoints(i),p=u.shape,g=u.holes;Aa.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let M=g[m];Aa.isClockWise(M)===!0&&(g[m]=M.reverse())}let x=Aa.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let M=g[m];p=p.concat(M)}for(let m=0,f=p.length;m<f;m++){let M=p[m];a.push(M.x,M.y,0),n.push(0,0,1),s.push(M.x,M.y)}for(let m=0,f=x.length;m<f;m++){let M=x[m],y=M[0]+d,v=M[1]+d,T=M[2]+d;r.push(y,v,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return Z0(i,t)}static fromJSON(t,i){let r=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=i[t.shapes[a]];r.push(s)}return new uf(r,t.curveSegments)}};function Z0(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var vh=class df extends yt{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),c=0,h=[],d=new C,u=new C,p=[],g=[],x=[],m=[];for(let f=0;f<=r;f++){let M=[],y=f/r,v=s+y*o,T=t*Math.cos(v),R=Math.sqrt(t*t-T*T),w=0;f===0&&s===0?w=.5/i:f===r&&l===Math.PI&&(w=-.5/i);for(let _=0;_<=i;_++){let b=_/i,N=a+b*n;d.x=-R*Math.cos(N),d.y=T,d.z=R*Math.sin(N),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(b+w,1-y),M.push(c++)}h.push(M)}for(let f=0;f<r;f++)for(let M=0;M<i;M++){let y=h[f][M+1],v=h[f][M],T=h[f+1][M],R=h[f+1][M+1];(f!==0||s>0)&&p.push(y,v,R),(f!==r-1||l<Math.PI)&&p.push(v,T,R)}this.setIndex(p),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new df(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},K0=class pf extends Cs{constructor(t=1,i=0){let r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,a,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new pf(t.radius,t.detail)}},_h=class ff extends yt{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=new C,p=new C,g=new C;for(let x=0;x<=r;x++){let m=s+x/r*o;for(let f=0;f<=a;f++){let M=f/a*n;p.x=(t+i*Math.cos(m))*Math.cos(M),p.y=(t+i*Math.cos(m))*Math.sin(M),p.z=i*Math.sin(m),c.push(p.x,p.y,p.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),d.push(f/a),d.push(x/r)}}for(let x=1;x<=r;x++)for(let m=1;m<=a;m++){let f=(a+1)*x+m-1,M=(a+1)*(x-1)+m-1,y=(a+1)*(x-1)+m,v=(a+1)*x+m;l.push(f,M,v),l.push(M,y,v)}this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ff(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},$0=class mf extends yt{constructor(t=1,i=.4,r=64,a=8,n=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:r,radialSegments:a,p:n,q:s},r=Math.floor(r),a=Math.floor(a);let o=[],l=[],c=[],h=[],d=new C,u=new C,p=new C,g=new C,x=new C,m=new C,f=new C;for(let y=0;y<=r;++y){let v=y/r*n*Math.PI*2;M(v,n,s,t,p),M(v+.01,n,s,t,g),m.subVectors(g,p),f.addVectors(g,p),x.crossVectors(m,f),f.crossVectors(x,m),x.normalize(),f.normalize();for(let T=0;T<=a;++T){let R=T/a*Math.PI*2,w=-i*Math.cos(R),_=i*Math.sin(R);d.x=p.x+(w*f.x+_*x.x),d.y=p.y+(w*f.y+_*x.y),d.z=p.z+(w*f.z+_*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(y/r),h.push(T/a)}}for(let y=1;y<=r;y++)for(let v=1;v<=a;v++){let T=(a+1)*(y-1)+(v-1),R=(a+1)*y+(v-1),w=(a+1)*y+v,_=(a+1)*(y-1)+v;o.push(T,R,_),o.push(R,w,_)}this.setIndex(o),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(h,2));function M(y,v,T,R,w){let _=Math.cos(y),b=Math.sin(y),N=T/v*y,D=Math.cos(N);w.x=R*(2+D)*.5*_,w.y=R*(2+D)*b*.5,w.z=R*Math.sin(N)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mf(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},J0=class gf extends yt{constructor(t=new Kp(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new C,l=new C,c=new de,h=new C,d=[],u=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new $e(d,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(p,2));function x(){for(let y=0;y<i;y++)m(y);m(n===!1?i:0),M(),f()}function m(y){h=t.getPointAt(y/i,h);let v=s.normals[y],T=s.binormals[y];for(let R=0;R<=a;R++){let w=R/a*Math.PI*2,_=Math.sin(w),b=-Math.cos(w);l.x=b*v.x+_*T.x,l.y=b*v.y+_*T.y,l.z=b*v.z+_*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+r*l.x,o.y=h.y+r*l.y,o.z=h.z+r*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let y=1;y<=i;y++)for(let v=1;v<=a;v++){let T=(a+1)*(y-1)+(v-1),R=(a+1)*y+(v-1),w=(a+1)*y+v,_=(a+1)*(y-1)+v;g.push(T,R,_),g.push(R,w,_)}}function M(){for(let y=0;y<=i;y++)for(let v=0;v<=a;v++)c.x=y/i,c.y=v/a,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new gf(new Uo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Q0=class extends yt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new C,a=new C;if(e.index!==null){let n=e.attributes.position,s=e.index,o=e.groups;o.length===0&&(o=[{start:0,count:s.count,materialIndex:0}]);for(let l=0,c=o.length;l<c;++l){let h=o[l],d=h.start,u=h.count;for(let p=d,g=d+u;p<g;p+=3)for(let x=0;x<3;x++){let m=s.getX(p+x),f=s.getX(p+(x+1)%3);r.fromBufferAttribute(n,m),a.fromBufferAttribute(n,f),wd(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let n=e.attributes.position;for(let s=0,o=n.count/3;s<o;s++)for(let l=0;l<3;l++){let c=3*s+l,h=3*s+(l+1)%3;r.fromBufferAttribute(n,c),a.fromBufferAttribute(n,h),wd(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new $e(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function wd(e,t,i){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(r)===!0||i.has(a)===!0?!1:(i.add(r),i.add(a),!0)}var Hb=Object.freeze({__proto__:null,BoxGeometry:Fr,CapsuleGeometry:h0,CircleGeometry:uh,ConeGeometry:u0,CylinderGeometry:Gp,DodecahedronGeometry:d0,EdgesGeometry:p0,ExtrudeGeometry:W0,IcosahedronGeometry:fh,LatheGeometry:q0,OctahedronGeometry:mh,PlaneGeometry:ri,PolyhedronGeometry:Cs,RingGeometry:gh,ShapeGeometry:Y0,SphereGeometry:vh,TetrahedronGeometry:K0,TorusGeometry:_h,TorusKnotGeometry:$0,TubeGeometry:J0,WireframeGeometry:Q0});function Pn(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(Ad(a))a.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(Ad(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Bi(e){let t={};for(let i=0;i<e.length;i++){let r=Pn(e[i]);for(let a in r)t[a]=r[a]}return t}function Ad(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ev(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function vf(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_t.workingColorSpace}var nr={clone:Pn,merge:Bi},tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ft=class extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tv,this.fragmentShader=iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pn(e.uniforms),this.uniformsGroups=ev(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new be().setHex(r.value);break;case"v2":this.uniforms[i].value=new de().fromArray(r.value);break;case"v3":this.uniforms[i].value=new C().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Dt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new dt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ze().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xh=class extends Ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qt=class extends vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_r=class extends Qt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var rv=class extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ng,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},av=class extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Ao(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function nv(e){function t(a,n){return e[a]-e[n]}let i=e.length,r=new Array(i);for(let a=0;a!==i;++a)r[a]=a;return r.sort(t),r}function Rd(e,t,i){let r=e.length,a=new e.constructor(r);for(let n=0,s=0;s!==r;++n){let o=i[n]*t;for(let l=0;l!==t;++l)a[s++]=e[o+l]}return a}function sv(e,t,i,r){let a=1,n=e[0];for(;n!==void 0&&n[r]===void 0;)n=e[a++];if(n===void 0)return;let s=n[r];if(s!==void 0)if(Array.isArray(s))do s=n[r],s!==void 0&&(t.push(n.time),i.push(...s)),n=e[a++];while(n!==void 0);else if(s.toArray!==void 0)do s=n[r],s!==void 0&&(t.push(n.time),s.toArray(i,i.length)),n=e[a++];while(n!==void 0);else do s=n[r],s!==void 0&&(t.push(n.time),i.push(s)),n=e[a++];while(n!==void 0)}var Ua=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];e:{t:{let n;i:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break t}n=t.length;break i}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break t}n=i,i=0;break i}break e}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ov=class extends Ua{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zu,endingEnd:zu}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case Hu:a=e,s=2*t-i;break;case ku:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Hu:n=e,o=2*i-t;break;case ku:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,c=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*c,this._offsetNext=n*c}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-t)/(r-t),g=p*p,x=g*p,m=-d*x+2*d*g-d*p,f=(1+d)*x+(-1.5-2*d)*g+(-.5+d)*p+1,M=(-1-u)*x+(1.5+u)*g+.5*p,y=u*x-u*g;for(let v=0;v!==s;++v)a[v]=m*n[c+v]+f*n[l+v]+M*n[o+v]+y*n[h+v];return a}},lv=class extends Ua{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=(i-t)/(r-t),h=1-c;for(let d=0;d!==s;++d)a[d]=n[l+d]*h+n[o+d]*c;return a}},cv=class extends Ua{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},hv=class extends Ua{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this.inTangents,h=this.outTangents;if(!c||!h){let p=(i-t)/(r-t),g=1-p;for(let x=0;x!==s;++x)a[x]=n[l+x]*g+n[o+x]*p;return a}let d=s*2,u=e-1;for(let p=0;p!==s;++p){let g=n[l+p],x=n[o+p],m=u*d+p*2,f=h[m],M=h[m+1],y=e*d+p*2,v=c[y],T=c[y+1],R=dv(i,t,f,v,r);a[p]=_f(R,g,M,T,x)}return a}};function _f(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function uv(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function dv(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=_f(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=uv(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}var xr=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fa(t,this.TimeBufferType),this.values=fa(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:fa(e.times,Array),values:fa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Ao(e.settings)&&(i.settings={inTangents:fa(e.settings.inTangents,Array),outTangents:fa(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ov(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new hv(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case En:t=this.InterpolantFactoryMethodDiscrete;break;case wn:t=this.InterpolantFactoryMethodLinear;break;case El:t=this.InterpolantFactoryMethodSmooth;break;case Bu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ye("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return En;case this.InterpolantFactoryMethodLinear:return wn;case this.InterpolantFactoryMethodSmooth:return El;case this.InterpolantFactoryMethodBezier:return Bu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Ao(this.settings)&&(Cd(this.settings.inTangents,e),Cd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){ot("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){ot("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&fg(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){ot("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===El,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],c=e[s+1];if(l!==c&&(s!==1||l!==e[0]))if(r)o=!0;else{let h=s*i,d=h-i,u=h+i;for(let p=0;p!==i;++p){let g=t[h+p];if(g!==t[d+p]||g!==t[u+p]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let h=s*i,d=n*i;for(let u=0;u!==i;++u)t[d+u]=t[h+u]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ao(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Cd(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}xr.prototype.ValueTypeName="";xr.prototype.TimeBufferType=Float32Array;xr.prototype.ValueBufferType=Float32Array;xr.prototype.DefaultInterpolation=wn;var Nn=class extends xr{constructor(e,t,i){super(e,t,i)}};Nn.prototype.ValueTypeName="bool";Nn.prototype.ValueBufferType=Array;Nn.prototype.DefaultInterpolation=En;Nn.prototype.InterpolantFactoryMethodLinear=void 0;Nn.prototype.InterpolantFactoryMethodSmooth=void 0;var xf=class extends xr{constructor(e,t,i,r){super(e,t,i,r)}};xf.prototype.ValueTypeName="color";var Un=class extends xr{constructor(e,t,i,r){super(e,t,i,r)}};Un.prototype.ValueTypeName="number";var pv=class extends Ua{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let c=l+s;l!==c;l+=4)ii.slerpFlat(a,0,n,l-s,n,l,o);return a}},Oa=class extends xr{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new pv(this.times,this.values,this.getValueSize(),e)}};Oa.prototype.ValueTypeName="quaternion";Oa.prototype.InterpolantFactoryMethodSmooth=void 0;var On=class extends xr{constructor(e,t,i){super(e,t,i)}};On.prototype.ValueTypeName="string";On.prototype.ValueBufferType=Array;On.prototype.DefaultInterpolation=En;On.prototype.InterpolantFactoryMethodLinear=void 0;On.prototype.InterpolantFactoryMethodSmooth=void 0;var Fn=class extends xr{constructor(e,t,i,r){super(e,t,i,r)}};Fn.prototype.ValueTypeName="vector";var yh=class{constructor(e="",t=-1,i=[],r=ag){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ir(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let n=0,s=i.length;n!==s;++n)t.push(mv(i[n]).scale(r));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,n=i.length;a!==n;++a)t.push(xr.toJSON(i[a]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let a=t.length,n=[];for(let s=0;s<a;s++){let o=[],l=[];o.push((s+a-1)%a,s,(s+1)%a),l.push(0,1,0);let c=nv(o);o=Rd(o,1,c),l=Rd(l,1,c),!r&&o[0]===0&&(o.push(a),l.push(l[0])),n.push(new Un(".morphTargetInfluences["+t[s].name+"]",o,l).scale(1/i))}return new this(e,-1,n)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},a=/^([\w-]*?)([\d]+)$/;for(let s=0,o=e.length;s<o;s++){let l=e[s],c=l.name.match(a);if(c&&c.length>1){let h=c[1],d=r[h];d||(r[h]=d=[]),d.push(l)}}let n=[];for(let s in r)n.push(this.CreateFromMorphTargetSequence(s,r[s],t,i));return n}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function fv(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Un;case"vector":case"vector2":case"vector3":case"vector4":return Fn;case"color":return xf;case"quaternion":return Oa;case"bool":case"boolean":return Nn;case"string":return On}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function mv(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=fv(e.type);if(e.times===void 0){let r=[],a=[];sv(e.keys,r,a,"value"),e.times=r,e.values=a}let i;return t.parse!==void 0?i=t.parse(e):i=new t(e.name,e.times,e.values,e.interpolation),Ao(e.settings)&&(i.settings={inTangents:fa(e.settings.inTangents,Float32Array),outTangents:fa(e.settings.outTangents,Float32Array)}),i}var Qr={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Id(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Id(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Id(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var gv=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){s++,a===!1&&r.onStart!==void 0&&r.onStart(c,n,s),a=!0},this.itemEnd=function(c){n++,r.onProgress!==void 0&&r.onProgress(c,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){let u=l[h],p=l[h+1];if(u.global&&(u.lastIndex=0),u.test(c))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vv=new gv,Fa=class{constructor(e){this.manager=e!==void 0?e:vv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var $r={},_v=class extends Error{constructor(e,t){super(e),this.response=t}},Mh=class extends Fa{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=Qr.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if($r[e]!==void 0){$r[e].push({onLoad:t,onProgress:i,onError:r});return}$r[e]=[],$r[e].push({onLoad:t,onProgress:i,onError:r});let n=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),s=this.mimeType,o=this.responseType;fetch(n).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let c=$r[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=d?parseInt(d):0,p=u!==0,g=0,x=new ReadableStream({start(m){f();function f(){h.read().then(({done:M,value:y})=>{if(M)m.close();else{g+=y.byteLength;let v=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:u});for(let T=0,R=c.length;T<R;T++){let w=c[T];w.onProgress&&w.onProgress(v)}m.enqueue(y),f()}},M=>{m.error(M)})}}});return new Response(x)}else throw new _v(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,s));case"json":return l.json();default:if(s==="")return l.text();{let c=/charset="?([^;"\s]*)"?/i.exec(s),h=c&&c[1]?c[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(u=>d.decode(u))}}}).then(l=>{Qr.add(`file:${e}`,l);let c=$r[e];delete $r[e];for(let h=0,d=c.length;h<d;h++){let u=c[h];u.onLoad&&u.onLoad(l)}}).catch(l=>{let c=$r[e];if(c===void 0)throw this.manager.itemError(e),l;delete $r[e];for(let h=0,d=c.length;h<d;h++){let u=c[h];u.onError&&u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var nn=new WeakMap,xv=class extends Fa{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=Qr.get(`image:${e}`);if(n!==void 0){if(n.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0);else{let h=nn.get(n);h===void 0&&(h=[],nn.set(n,h)),h.push({onLoad:t,onError:r})}return n}let s=Ms("img");function o(){c(),t&&t(this);let h=nn.get(this)||[];for(let d=0;d<h.length;d++){let u=h[d];u.onLoad&&u.onLoad(this)}nn.delete(this),a.manager.itemEnd(e)}function l(h){c(),r&&r(h),Qr.remove(`image:${e}`);let d=nn.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onError&&p.onError(h)}nn.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function c(){s.removeEventListener("load",o,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),Qr.add(`image:${e}`,s),a.manager.itemStart(e),s.src=e,s}};var qo=class extends Fa{constructor(e){super(e)}load(e,t,i,r){let a=new Di,n=new xv(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}},Yo=class extends ti{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},yf=class extends Yo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ql=new Ze,Pd=new C,Ld=new C,bh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=qi,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cn,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Pd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pd),Ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ld),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Ql.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ql,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===ys||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(Ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vo=new C,_o=new ii,Cr=new C,Sh=class extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=mr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vo,_o,Cr),Cr.x===1&&Cr.y===1&&Cr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,_o,Cr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(vo,_o,Cr),Cr.x===1&&Cr.y===1&&Cr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,_o,Cr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},da=new C,Dd=new de,Nd=new de,Ai=class extends Sh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rn*2*Math.atan(Math.tan(vn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){da.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(da.x,da.y).multiplyScalar(-e/da.z),da.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(da.x,da.y).multiplyScalar(-e/da.z)}getViewSize(e,t){return this.getViewBounds(e,Dd,Nd),t.subVectors(Nd,Dd)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vn*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},yv=class extends bh{constructor(){super(new Ai(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Rn*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Zo=class extends Yo{constructor(e,t,i=0,r=Math.PI/3,a=0,n=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.distance=i,this.angle=r,this.penumbra=a,this.decay=n,this.map=null,this.shadow=new yv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Mv=class extends bh{constructor(){super(new Ai(90,1,.5,500)),this.isPointLightShadow=!0}},Mf=class extends Yo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Mv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ba=class extends Sh{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=c*this.view.offsetY,o=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bv=class extends bh{constructor(){super(new Ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Is=class extends Yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.shadow=new bv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Bn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},bf=class extends yt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var ec=new WeakMap,Sf=class extends Fa{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ye("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ye("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=Qr.get(`image-bitmap:${e}`);if(n!==void 0){if(a.manager.itemStart(e),n.then){n.then(l=>{ec.has(n)===!0?(r&&r(ec.get(n)),a.manager.itemError(e),a.manager.itemEnd(e)):(t&&t(l),a.manager.itemEnd(e))});return}setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0);return}let s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",s.headers=this.requestHeader,s.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let o=fetch(e,s).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},a.options,{colorSpaceConversion:"none"}))}).then(function(l){return Qr.add(`image-bitmap:${e}`,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){r&&r(l),ec.set(o,l),Qr.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});Qr.add(`image-bitmap:${e}`,o),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var kb=new Ze,Gb=new Ze,Vb=new Ze;var sn=-90,on=1,Sv=class extends ti{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ai(sn,on,e,t);r.layers=this.layers,this.add(r);let a=new Ai(sn,on,e,t);a.layers=this.layers,this.add(a);let n=new Ai(sn,on,e,t);n.layers=this.layers,this.add(n);let s=new Ai(sn,on,e,t);s.layers=this.layers,this.add(s);let o=new Ai(sn,on,e,t);o.layers=this.layers,this.add(o);let l=new Ai(sn,on,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===mr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===ys)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,d,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Tv=class extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Tf=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ev.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ev(){this._document.hidden===!1&&this.reset()}var Wb=new C,Xb=new ii,jb=new C,qb=new C,Yb=new C;var Zb=new C,Kb=new ii,$b=new C,Jb=new C;var Th="\\[\\]\\.:\\/",wv=new RegExp("["+Th+"]","g"),Eh="[^"+Th+"]",Av="[^"+Th.replace("\\.","")+"]",Rv=/((?:WC+[\/:])*)/.source.replace("WC",Eh),Cv=/(WCOD+)?/.source.replace("WCOD",Av),Iv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),Pv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),Lv=new RegExp("^"+Rv+Cv+Iv+Pv+"$"),Dv=["material","materials","bones","map"],Nv=class{constructor(e,t,i){let r=i||Yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Yt=class dn{constructor(t,i,r){this.path=i,this.parsedPath=r||dn.parseTrackName(i),this.node=dn.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new dn.Composite(t,i,r):new dn(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wv,"")}static parseTrackName(t){let i=Lv.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);Dv.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=dn.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let c=i.objectIndex;switch(r){case"materials":if(!t.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(c!==void 0){if(t[c]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[a];if(s===void 0){let c=i.nodeName;ot("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=Nv;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qb=new Float32Array(1);var eS=new Ze;var Sn,tS=(Sn=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},Sn.prototype.isMatrix2=!0,Sn),iS=new de;var rS=new C,aS=new C,nS=new C,sS=new C,oS=new C,lS=new C,cS=new C;var hS=new C;var uS=new C,dS=new Ze,pS=new Ze;var fS=new C,mS=new be,gS=new be;var vS=new C,_S=new C,xS=new C;var yS=new C,MS=new Sh;var bS=new rr;var SS=new C;function Ud(e,t,i,r){let a=Uv(r);switch(i){case dp:return e*t;case ws:return e*t/a.components*a.byteLength;case Qc:return e*t/a.components*a.byteLength;case La:return e*t*2/a.components*a.byteLength;case eh:return e*t*2/a.components*a.byteLength;case pp:return e*t*3/a.components*a.byteLength;case tr:return e*t*4/a.components*a.byteLength;case th:return e*t*4/a.components*a.byteLength;case Mo:case bo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case So:case To:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fc:case gc:return Math.max(e,16)*Math.max(t,8)/4;case pc:case mc:return Math.max(e,8)*Math.max(t,8)/2;case vc:case _c:case yc:case Mc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case xc:case Co:case bc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Tc:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ec:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case wc:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Pc:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Uc:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Oc:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Fc:case Bc:case zc:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Hc:case kc:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Io:case Gc:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Uv(e){switch(e){case qi:case lp:return{byteLength:1,components:1};case _s:case cp:case ui:return{byteLength:2,components:1};case $c:case Jc:return{byteLength:2,components:4};case Nr:case Kc:case er:return{byteLength:4,components:1};case hp:case up:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ef(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Ov(e){let t=new WeakMap;function i(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,c){let h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];e.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:a,remove:n,update:s}}var Fv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bv=`#ifdef USE_ALPHAHASH
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
#endif`,zv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vv=`#ifdef USE_AOMAP
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
#endif`,Wv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xv=`#ifdef USE_BATCHING
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
#endif`,jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kv=`#ifdef USE_IRIDESCENCE
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
#endif`,$v=`#ifdef USE_BUMPMAP
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
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,r_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,a_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,n_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,s_=`#define PI 3.141592653589793
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
} // validated`,o_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l_=`vec3 transformedNormal = objectNormal;
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
#endif`,c_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p_="gl_FragColor = linearToOutputTexel( gl_FragColor );",f_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m_=`#ifdef USE_ENVMAP
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
#endif`,g_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,v_=`#ifdef USE_ENVMAP
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
#endif`,__=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x_=`#ifdef USE_ENVMAP
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
#endif`,y_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T_=`#ifdef USE_GRADIENTMAP
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
}`,E_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,C_=`#ifdef USE_ENVMAP
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
#endif`,I_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N_=`PhysicalMaterial material;
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
#endif`,U_=`uniform sampler2D dfgLUT;
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
}`,O_=`
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
#endif`,F_=`#if defined( RE_IndirectDiffuse )
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
#endif`,B_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,H_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q_=`#if defined( USE_POINTS_UV )
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
#endif`,Y_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q_=`#ifdef USE_MORPHTARGETS
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
#endif`,ex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sx=`#ifdef USE_NORMALMAP
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
#endif`,ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bx=`float getShadowMask() {
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
}`,Sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tx=`#ifdef USE_SKINNING
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
#endif`,Ex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wx=`#ifdef USE_SKINNING
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
#endif`,Ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ix=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Px=`#ifdef USE_TRANSMISSION
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
#endif`,Lx=`#ifdef USE_TRANSMISSION
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bx=`uniform sampler2D t2D;
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`#include <common>
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
}`,Wx=`#if DEPTH_PACKING == 3200
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
}`,Xx=`#define DISTANCE
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
}`,jx=`#define DISTANCE
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`uniform float scale;
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
}`,Kx=`uniform vec3 diffuse;
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
}`,$x=`#include <common>
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
}`,Jx=`uniform vec3 diffuse;
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
}`,Qx=`#define LAMBERT
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
}`,ey=`#define LAMBERT
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
}`,ty=`#define MATCAP
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
}`,iy=`#define MATCAP
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
}`,ry=`#define NORMAL
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
}`,ay=`#define NORMAL
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
}`,ny=`#define PHONG
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
}`,sy=`#define PHONG
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
}`,oy=`#define STANDARD
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
}`,ly=`#define STANDARD
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
}`,cy=`#define TOON
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
}`,hy=`#define TOON
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
}`,uy=`uniform float size;
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
}`,dy=`uniform vec3 diffuse;
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
}`,py=`#include <common>
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
}`,fy=`uniform vec3 color;
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
}`,my=`uniform float rotation;
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
}`,gy=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:Fv,alphahash_pars_fragment:Bv,alphamap_fragment:zv,alphamap_pars_fragment:Hv,alphatest_fragment:kv,alphatest_pars_fragment:Gv,aomap_fragment:Vv,aomap_pars_fragment:Wv,batching_pars_vertex:Xv,batching_vertex:jv,begin_vertex:qv,beginnormal_vertex:Yv,bsdfs:Zv,iridescence_fragment:Kv,bumpmap_pars_fragment:$v,clipping_planes_fragment:Jv,clipping_planes_pars_fragment:Qv,clipping_planes_pars_vertex:e_,clipping_planes_vertex:t_,color_fragment:i_,color_pars_fragment:r_,color_pars_vertex:a_,color_vertex:n_,common:s_,cube_uv_reflection_fragment:o_,defaultnormal_vertex:l_,displacementmap_pars_vertex:c_,displacementmap_vertex:h_,emissivemap_fragment:u_,emissivemap_pars_fragment:d_,colorspace_fragment:p_,colorspace_pars_fragment:f_,envmap_fragment:m_,envmap_common_pars_fragment:g_,envmap_pars_fragment:v_,envmap_pars_vertex:__,envmap_physical_pars_fragment:C_,envmap_vertex:x_,fog_vertex:y_,fog_pars_vertex:M_,fog_fragment:b_,fog_pars_fragment:S_,gradientmap_pars_fragment:T_,lightmap_pars_fragment:E_,lights_lambert_fragment:w_,lights_lambert_pars_fragment:A_,lights_pars_begin:R_,lights_toon_fragment:I_,lights_toon_pars_fragment:P_,lights_phong_fragment:L_,lights_phong_pars_fragment:D_,lights_physical_fragment:N_,lights_physical_pars_fragment:U_,lights_fragment_begin:O_,lights_fragment_maps:F_,lights_fragment_end:B_,lightprobes_pars_fragment:z_,logdepthbuf_fragment:H_,logdepthbuf_pars_fragment:k_,logdepthbuf_pars_vertex:G_,logdepthbuf_vertex:V_,map_fragment:W_,map_pars_fragment:X_,map_particle_fragment:j_,map_particle_pars_fragment:q_,metalnessmap_fragment:Y_,metalnessmap_pars_fragment:Z_,morphinstance_vertex:K_,morphcolor_vertex:$_,morphnormal_vertex:J_,morphtarget_pars_vertex:Q_,morphtarget_vertex:ex,normal_fragment_begin:tx,normal_fragment_maps:ix,normal_pars_fragment:rx,normal_pars_vertex:ax,normal_vertex:nx,normalmap_pars_fragment:sx,clearcoat_normal_fragment_begin:ox,clearcoat_normal_fragment_maps:lx,clearcoat_pars_fragment:cx,iridescence_pars_fragment:hx,opaque_fragment:ux,packing:dx,premultiplied_alpha_fragment:px,project_vertex:fx,dithering_fragment:mx,dithering_pars_fragment:gx,roughnessmap_fragment:vx,roughnessmap_pars_fragment:_x,shadowmap_pars_fragment:xx,shadowmap_pars_vertex:yx,shadowmap_vertex:Mx,shadowmask_pars_fragment:bx,skinbase_vertex:Sx,skinning_pars_vertex:Tx,skinning_vertex:Ex,skinnormal_vertex:wx,specularmap_fragment:Ax,specularmap_pars_fragment:Rx,tonemapping_fragment:Cx,tonemapping_pars_fragment:Ix,transmission_fragment:Px,transmission_pars_fragment:Lx,uv_pars_fragment:Dx,uv_pars_vertex:Nx,uv_vertex:Ux,worldpos_vertex:Ox,background_vert:Fx,background_frag:Bx,backgroundCube_vert:zx,backgroundCube_frag:Hx,cube_vert:kx,cube_frag:Gx,depth_vert:Vx,depth_frag:Wx,distance_vert:Xx,distance_frag:jx,equirect_vert:qx,equirect_frag:Yx,linedashed_vert:Zx,linedashed_frag:Kx,meshbasic_vert:$x,meshbasic_frag:Jx,meshlambert_vert:Qx,meshlambert_frag:ey,meshmatcap_vert:ty,meshmatcap_frag:iy,meshnormal_vert:ry,meshnormal_frag:ay,meshphong_vert:ny,meshphong_frag:sy,meshphysical_vert:oy,meshphysical_frag:ly,meshtoon_vert:cy,meshtoon_frag:hy,points_vert:uy,points_frag:dy,shadow_vert:py,shadow_frag:fy,sprite_vert:my,sprite_frag:gy},Pe={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Pr={basic:{uniforms:Bi([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Bi([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Bi([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Bi([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Bi([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new be(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Bi([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Bi([Pe.points,Pe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Bi([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Bi([Pe.common,Pe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Bi([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Bi([Pe.sprite,Pe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:Bi([Pe.common,Pe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:Bi([Pe.lights,Pe.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Pr.physical={uniforms:Bi([Pr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};var xo={r:0,b:0,g:0},vy=new Ze,wf=new dt;wf.set(-1,0,0,0,1,0,0,0,1);function _y(e,t,i,r,a,n){let s=new be(0),o=a===!0?0:1,l,c,h=null,d=0,u=null;function p(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){let v=M.backgroundBlurriness>0;y=t.get(y,v)}return y}function g(M){let y=!1,v=p(M);v===null?m(s,o):v&&v.isColor&&(m(v,1),y=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,n):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function x(M,y){let v=p(y);v&&(v.isCubeTexture||v.mapping===Go)?(c===void 0&&(c=new rt(new Fr(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:Pn(Pr.backgroundCube.uniforms),vertexShader:Pr.backgroundCube.vertexShader,fragmentShader:Pr.backgroundCube.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vy.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wf),c.material.toneMapped=_t.getTransfer(v.colorSpace)!==Pt,(h!==v||d!==v.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=e.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new rt(new ri(2,2),new Ft({name:"BackgroundMaterial",uniforms:Pn(Pr.background.uniforms),vertexShader:Pr.background.vertexShader,fragmentShader:Pr.background.fragmentShader,side:ta,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=_t.getTransfer(v.colorSpace)!==Pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=e.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,y){M.getRGB(xo,vf(e)),i.buffers.color.setClear(xo.r,xo.g,xo.b,y,n)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(M,y=1){s.set(M),o=y,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(s,o)},render:g,addToRenderList:x,dispose:f}}function xy(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=u(null),n=a,s=!1;function o(D,O,q,U,L){let G=!1,F=d(D,U,q,O);n!==F&&(n=F,c(n.object)),G=p(D,U,q,L),G&&g(D,U,q,L),L!==null&&t.update(L,e.ELEMENT_ARRAY_BUFFER),(G||s)&&(s=!1,v(D,O,q,U),L!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function h(D){return e.deleteVertexArray(D)}function d(D,O,q,U){let L=U.wireframe===!0,G=r[O.id];G===void 0&&(G={},r[O.id]=G);let F=D.isInstancedMesh===!0?D.id:0,Q=G[F];Q===void 0&&(Q={},G[F]=Q);let V=Q[q.id];V===void 0&&(V={},Q[q.id]=V);let Z=V[L];return Z===void 0&&(Z=u(l()),V[L]=Z),Z}function u(D){let O=[],q=[],U=[];for(let L=0;L<i;L++)O[L]=0,q[L]=0,U[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:U,object:D,attributes:{},index:null}}function p(D,O,q,U){let L=n.attributes,G=O.attributes,F=0,Q=q.getAttributes();for(let V in Q)if(Q[V].location>=0){let Z=L[V],te=G[V];if(te===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),Z===void 0||Z.attribute!==te||te&&Z.data!==te.data)return!0;F++}return n.attributesNum!==F||n.index!==U}function g(D,O,q,U){let L={},G=O.attributes,F=0,Q=q.getAttributes();for(let V in Q)if(Q[V].location>=0){let Z=G[V];Z===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));let te={};te.attribute=Z,Z&&Z.data&&(te.data=Z.data),L[V]=te,F++}n.attributes=L,n.attributesNum=F,n.index=U}function x(){let D=n.newAttributes;for(let O=0,q=D.length;O<q;O++)D[O]=0}function m(D){f(D,0)}function f(D,O){let q=n.newAttributes,U=n.enabledAttributes,L=n.attributeDivisors;q[D]=1,U[D]===0&&(e.enableVertexAttribArray(D),U[D]=1),L[D]!==O&&(e.vertexAttribDivisor(D,O),L[D]=O)}function M(){let D=n.newAttributes,O=n.enabledAttributes;for(let q=0,U=O.length;q<U;q++)O[q]!==D[q]&&(e.disableVertexAttribArray(q),O[q]=0)}function y(D,O,q,U,L,G,F){F===!0?e.vertexAttribIPointer(D,O,q,L,G):e.vertexAttribPointer(D,O,q,U,L,G)}function v(D,O,q,U){x();let L=U.attributes,G=q.getAttributes(),F=O.defaultAttributeValues;for(let Q in G){let V=G[Q];if(V.location>=0){let Z=L[Q];if(Z===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),Z!==void 0){let te=Z.normalized,ye=Z.itemSize,_e=t.get(Z);if(_e===void 0)continue;let Ue=_e.buffer,Ge=_e.type,ie=_e.bytesPerElement,se=Ge===e.INT||Ge===e.UNSIGNED_INT||Z.gpuType===Kc;if(Z.isInterleavedBufferAttribute){let pe=Z.data,Le=pe.stride,Ne=Z.offset;if(pe.isInstancedInterleavedBuffer){for(let fe=0;fe<V.locationSize;fe++)f(V.location+fe,pe.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let fe=0;fe<V.locationSize;fe++)m(V.location+fe);e.bindBuffer(e.ARRAY_BUFFER,Ue);for(let fe=0;fe<V.locationSize;fe++)y(V.location+fe,ye/V.locationSize,Ge,te,Le*ie,(Ne+ye/V.locationSize*fe)*ie,se)}else{if(Z.isInstancedBufferAttribute){for(let pe=0;pe<V.locationSize;pe++)f(V.location+pe,Z.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let pe=0;pe<V.locationSize;pe++)m(V.location+pe);e.bindBuffer(e.ARRAY_BUFFER,Ue);for(let pe=0;pe<V.locationSize;pe++)y(V.location+pe,ye/V.locationSize,Ge,te,ye*ie,ye/V.locationSize*pe*ie,se)}}else if(F!==void 0){let te=F[Q];if(te!==void 0)switch(te.length){case 2:e.vertexAttrib2fv(V.location,te);break;case 3:e.vertexAttrib3fv(V.location,te);break;case 4:e.vertexAttrib4fv(V.location,te);break;default:e.vertexAttrib1fv(V.location,te)}}}}M()}function T(){b();for(let D in r){let O=r[D];for(let q in O){let U=O[q];for(let L in U){let G=U[L];for(let F in G)h(G[F].object),delete G[F];delete U[L]}}delete r[D]}}function R(D){if(r[D.id]===void 0)return;let O=r[D.id];for(let q in O){let U=O[q];for(let L in U){let G=U[L];for(let F in G)h(G[F].object),delete G[F];delete U[L]}}delete r[D.id]}function w(D){for(let O in r){let q=r[O];for(let U in q){let L=q[U];if(L[D.id]===void 0)continue;let G=L[D.id];for(let F in G)h(G[F].object),delete G[F];delete L[D.id]}}}function _(D){for(let O in r){let q=r[O],U=D.isInstancedMesh===!0?D.id:0,L=q[U];if(L!==void 0){for(let G in L){let F=L[G];for(let Q in F)h(F[Q].object),delete F[Q];delete L[G]}delete q[U],Object.keys(q).length===0&&delete r[O]}}}function b(){N(),s=!0,n!==a&&(n=a,c(n.object))}function N(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:b,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function yy(e,t,i){let r;function a(l){r=l}function n(l,c){e.drawArrays(r,l,c),i.update(c,r,1)}function s(l,c,h){h!==0&&(e.drawArraysInstanced(r,l,c,h),i.update(c,r,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];i.update(d,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function My(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(w){return!(w!==tr&&r.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let _=w===ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==qi&&w!==er&&!_&&r.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp",h=l(c);h!==c&&(Ye("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=i.logarithmicDepthBuffer===!0,u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&u===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),M=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),R=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,maxSamples:T,samples:R}}function by(e){let t=this,i=null,r=0,a=!1,n=!1,s=new pa,o=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||r!==0||a;return a=u,r=d.length,p},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,u){i=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=e.get(d);if(!a||g===null||g.length===0||n&&!m)n?h(null):c();else{let M=n?0:r,y=M*4,v=f.clippingState||null;l.value=v,v=h(g,u,y,p);for(let T=0;T!==y;++T)v[T]=i[T];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function h(d,u,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=p;y!==x;++y,v+=4)s.copy(d[y]).applyMatrix4(M,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var fn=4,Sy=6,Ty=20,Ey=256,ns=new Ba,Od=new be,tc=null,ic=0,rc=0,ac=!1,wy=new C,Ea=new C,Fd=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=wy}=a;tc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,ic,rc),this._renderer.xr.enabled=ac,e.scissorTest=!1,ln(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ia||e.mapping===Tn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:ui,format:tr,colorSpace:Gi,depthBuffer:!1},r=Bd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bd(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ay(a)),this._blurMaterial=Cy(a,e,t),this._ggxMaterial=Ry(a,e,t)}return r}_compileMaterial(e){let t=new rt(new yt,e);this._renderer.compile(t,ns)}_sceneToCubeUV(e,t,i,r,a){let n=new Ai(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Od),l.toneMapping=Dr,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rt(new Fr,new di({name:"PMREM.Background",side:Li,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,u=d.material,p=!1,g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,p=!0):(u.color.copy(Od),p=!0);for(let x=0;x<6;x++){let m=x%3;m===0?(n.up.set(0,s[x],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[x],a.y,a.z)):m===1?(n.up.set(0,0,s[x]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[x],a.z)):(n.up.set(0,s[x],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[x]));let f=this._cubeSize;ln(r,m*f,x>2?f:0,f,f),l.setRenderTarget(r),p&&l.render(d,n),l.render(e,n)}l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Ia||e.mapping===Tn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zd());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;ln(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,ns)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-c*c),d=l*1.25,u=h*d,{_lodMax:p}=this,g=this._sizeLods[i],x=3*g*(i>p-fn?i-p+fn:0),m=4*(this._cubeSize-g);o.envMap.value=e.texture,o.roughness.value=u,o.mipInt.value=p-t,ln(a,x,m,3*g,2*g),r.setRenderTarget(a),r.render(s,ns),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=p-i,ln(e,x,m,3*g,2*g),r.setRenderTarget(e),r.render(s,ns)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let l=s.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let c=this._sizeLods[r],h=3*c*(r>this._lodMax-fn?r-this._lodMax+fn:0),d=4*(this._cubeSize-c);ln(t,h,d,3*c,2*c),n.setRenderTarget(t),n.render(o,ns)}};function Ay(e){let t=[],i=[],r=e,a=e-fn+1+Sy;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let o=1/(s-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,g=new Float32Array(p*u*d),x=new Float32Array(p*u*d);for(let f=0;f<d;f++){let M=f%3*2/3-1,y=f>2?0:-1,v=[M,y,0,M+2/3,y,0,M+2/3,y+1,0,M,y,0,M+2/3,y+1,0,M,y+1,0];g.set(v,p*u*f);for(let T=0;T<u;T++){let R=h[T*2]*2-1,w=h[T*2+1]*2-1;f===0?Ea.set(1,w,R):f===1?Ea.set(-R,1,-w):f===2?Ea.set(-R,w,1):f===3?Ea.set(-1,w,-R):f===4?Ea.set(-R,-1,w):Ea.set(R,w,-1),Ea.toArray(x,(f*u+T)*p)}}let m=new yt;m.setAttribute("position",new Ot(g,p)),m.setAttribute("outputDirection",new Ot(x,p)),i.push(new rt(m,null)),r>fn&&r--}return{lodMeshes:i,sizeLods:t}}function Bd(e,t,i){let r=new vi(e,t,i);return r.texture.mapping=Go,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ln(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Ry(e,t,i){return new Ft({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ey,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Cy(e,t,i){return new Ft({name:"SphericalGaussianBlur",defines:{SAMPLES:Ty,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function zd(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Hd(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Ko(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Af=class extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Fp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fr(5,5,5),a=new Ft({name:"CubemapFromEquirect",uniforms:Pn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Li,blending:gr});a.uniforms.tEquirect.value=t;let n=new rt(r,a),s=t.minFilter;return t.minFilter===Lr&&(t.minFilter=Vt),new Sv(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function Iy(e){let t=new WeakMap,i=new WeakMap,r=null;function a(u,p=!1){return u==null?null:p?s(u):n(u)}function n(u){if(u&&u.isTexture){let p=u.mapping;if(p===Sl||p===Tl)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new Af(g.height);return x.fromEquirectangularTexture(e,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let p=u.mapping,g=p===Sl||p===Tl,x=p===Ia||p===Tn;if(g||x){let m=i.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return r===null&&(r=new Fd(e)),m=g?r.fromEquirectangular(u,m):r.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||x&&M&&l(M)?(r===null&&(r=new Fd(e)),m=g?r.fromEquirectangular(u):r.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Sl?u.mapping=Ia:p===Tl&&(u.mapping=Tn),u}function l(u){let p=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=i.get(p);g!==void 0&&(i.delete(p),g.dispose())}function d(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:d}}function Py(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&gn("WebGLRenderer: "+r+" extension not supported."),a}}}function Ly(e,t,i,r){let a={},n=new WeakMap;function s(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",s),delete a[u.id];let p=n.get(u);p&&(t.remove(p),n.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function o(d,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,i.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)t.update(u[p],e.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(p!==null){let M=p.array;x=p.version;for(let y=0,v=M.length;y<v;y+=3){let T=M[y+0],R=M[y+1],w=M[y+2];u.push(T,R,R,w,w,T)}}else{let M=g.array;x=g.version;for(let y=0,v=M.length/3-1;y<v;y+=3){let T=y+0,R=y+1,w=y+2;u.push(T,R,R,w,w,T)}}let m=new(g.count>=65535?Cp:Rp)(u,1);m.version=x;let f=n.get(d);f&&t.remove(f),n.set(d,m)}function h(d){let u=n.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return n.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Dy(e,t,i){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,u){e.drawElements(r,u,n,d*s),i.update(u,r,1)}function c(d,u,p){p!==0&&(e.drawElementsInstanced(r,u,n,d*s,p),i.update(u,r,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,n,d,0,p);let g=0;for(let x=0;x<p;x++)g+=u[x];i.update(g,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ny(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:ot("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Uy(e,t,i){let r=new WeakMap,a=new Dt;function n(s,o,l){let c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=r.get(o);if(u===void 0||u.count!==d){let p=function(){_.dispose(),r.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();let g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let T=o.attributes.position.count*v,R=1;T>t.maxTextureSize&&(R=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let w=new Float32Array(T*R*4*d),_=new yp(w,T,R,d);_.type=er,_.needsUpdate=!0;let b=v*4;for(let N=0;N<d;N++){let D=f[N],O=M[N],q=y[N],U=T*R*4*N;for(let L=0;L<D.count;L++){let G=L*b;g===!0&&(a.fromBufferAttribute(D,L),w[U+G+0]=a.x,w[U+G+1]=a.y,w[U+G+2]=a.z,w[U+G+3]=0),x===!0&&(a.fromBufferAttribute(O,L),w[U+G+4]=a.x,w[U+G+5]=a.y,w[U+G+6]=a.z,w[U+G+7]=0),m===!0&&(a.fromBufferAttribute(q,L),w[U+G+8]=a.x,w[U+G+9]=a.y,w[U+G+10]=a.z,w[U+G+11]=q.itemSize===4?a.w:1)}}u={count:d,texture:_,size:new de(T,R)},r.set(o,u),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:n}}function Oy(e,t,i,r,a){let n=new WeakMap;function s(c){let h=a.render.frame,d=c.geometry,u=t.get(c,d);if(n.get(u)!==h&&(t.update(u),n.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),n.get(c)!==h&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),n.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;n.get(p)!==h&&(p.update(),n.set(p,h))}return u}function o(){n=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),r.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:s,dispose:o}}var Fy={[Oo]:"LINEAR_TONE_MAPPING",[Fo]:"REINHARD_TONE_MAPPING",[Bo]:"CINEON_TONE_MAPPING",[Ln]:"ACES_FILMIC_TONE_MAPPING",[Ho]:"AGX_TONE_MAPPING",[ko]:"NEUTRAL_TONE_MAPPING",[zo]:"CUSTOM_TONE_MAPPING"};function By(e,t,i,r,a,n){let s=new vi(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new yt;c.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new $e([0,2,0,0,2,0],2));let h=new xh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new rt(c,h),u=new Ba(-1,1,1,-1,0,1),p=null,g=null,x=!1,m,f=null,M=[],y=!1;this.setSize=function(v,T){s.setSize(v,T),o!==null&&o.setSize(v,T),l!==null&&l.setSize(v,T);for(let R=0;R<M.length;R++){let w=M[R];w.setSize&&w.setSize(v,T)}},this.setEffects=function(v){M=v,y=M.length>0&&M[0].isRenderPass===!0;let T=s.width,R=s.height;M.length>0&&o===null&&(o=new vi(T,R,{type:ui,depthBuffer:!1,stencilBuffer:!1}),l=new vi(T,R,{type:ui,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<M.length;w++){let _=M[w];_.setSize&&_.setSize(T,R)}},this.begin=function(v,T){if(x||v.toneMapping===Dr&&M.length===0)return!1;if(f=T,T!==null){let R=T.width,w=T.height;(s.width!==R||s.height!==w)&&this.setSize(R,w)}return y===!1&&v.setRenderTarget(s),m=v.toneMapping,v.toneMapping=Dr,!0},this.hasRenderPass=function(){return y},this.end=function(v,T){v.toneMapping=m,x=!0;let R=s,w=o;for(let _=0;_<M.length;_++){let b=M[_];b.enabled!==!1&&(b.render(v,w,R,T),b.needsSwap!==!1&&(R=w,w=w===o?l:o))}if(p!==v.outputColorSpace||g!==v.toneMapping){p=v.outputColorSpace,g=v.toneMapping,h.defines={},_t.getTransfer(p)===Pt&&(h.defines.SRGB_TRANSFER="");let _=Fy[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=R.texture,v.setRenderTarget(f),v.render(d,u),f=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Rf=new Di,qc=new bs(1,1),Cf=new yp,If=new zg,Pf=new Fp,kd=[],Gd=[],Vd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function zn(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=kd[a];if(n===void 0&&(n=new Float32Array(a),kd[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function _i(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function xi(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function $o(e,t){let i=Gd[t];i===void 0&&(i=new Int32Array(t),Gd[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function zy(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Hy(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_i(i,t))return;e.uniform2fv(this.addr,t),xi(i,t)}}function ky(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_i(i,t))return;e.uniform3fv(this.addr,t),xi(i,t)}}function Gy(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_i(i,t))return;e.uniform4fv(this.addr,t),xi(i,t)}}function Vy(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(_i(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),xi(i,t)}else{if(_i(i,r))return;Xd.set(r),e.uniformMatrix2fv(this.addr,!1,Xd),xi(i,r)}}function Wy(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(_i(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),xi(i,t)}else{if(_i(i,r))return;Wd.set(r),e.uniformMatrix3fv(this.addr,!1,Wd),xi(i,r)}}function Xy(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(_i(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),xi(i,t)}else{if(_i(i,r))return;Vd.set(r),e.uniformMatrix4fv(this.addr,!1,Vd),xi(i,r)}}function jy(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function qy(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_i(i,t))return;e.uniform2iv(this.addr,t),xi(i,t)}}function Yy(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_i(i,t))return;e.uniform3iv(this.addr,t),xi(i,t)}}function Zy(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_i(i,t))return;e.uniform4iv(this.addr,t),xi(i,t)}}function Ky(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function $y(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_i(i,t))return;e.uniform2uiv(this.addr,t),xi(i,t)}}function Jy(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_i(i,t))return;e.uniform3uiv(this.addr,t),xi(i,t)}}function Qy(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_i(i,t))return;e.uniform4uiv(this.addr,t),xi(i,t)}}function e1(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(qc.compareFunction=i.isReversedDepthBuffer()?ah:rh,n=qc):n=Rf,i.setTexture2D(t||n,a)}function t1(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||If,a)}function i1(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||Pf,a)}function r1(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Cf,a)}function a1(e){switch(e){case 5126:return zy;case 35664:return Hy;case 35665:return ky;case 35666:return Gy;case 35674:return Vy;case 35675:return Wy;case 35676:return Xy;case 5124:case 35670:return jy;case 35667:case 35671:return qy;case 35668:case 35672:return Yy;case 35669:case 35673:return Zy;case 5125:return Ky;case 36294:return $y;case 36295:return Jy;case 36296:return Qy;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return r1}}function n1(e,t){e.uniform1fv(this.addr,t)}function s1(e,t){let i=zn(t,this.size,2);e.uniform2fv(this.addr,i)}function o1(e,t){let i=zn(t,this.size,3);e.uniform3fv(this.addr,i)}function l1(e,t){let i=zn(t,this.size,4);e.uniform4fv(this.addr,i)}function c1(e,t){let i=zn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function h1(e,t){let i=zn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function u1(e,t){let i=zn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function d1(e,t){e.uniform1iv(this.addr,t)}function p1(e,t){e.uniform2iv(this.addr,t)}function f1(e,t){e.uniform3iv(this.addr,t)}function m1(e,t){e.uniform4iv(this.addr,t)}function g1(e,t){e.uniform1uiv(this.addr,t)}function v1(e,t){e.uniform2uiv(this.addr,t)}function _1(e,t){e.uniform3uiv(this.addr,t)}function x1(e,t){e.uniform4uiv(this.addr,t)}function y1(e,t,i){let r=this.cache,a=t.length,n=$o(i,a);_i(r,n)||(e.uniform1iv(this.addr,n),xi(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=qc:s=Rf;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function M1(e,t,i){let r=this.cache,a=t.length,n=$o(i,a);_i(r,n)||(e.uniform1iv(this.addr,n),xi(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||If,n[s])}function b1(e,t,i){let r=this.cache,a=t.length,n=$o(i,a);_i(r,n)||(e.uniform1iv(this.addr,n),xi(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||Pf,n[s])}function S1(e,t,i){let r=this.cache,a=t.length,n=$o(i,a);_i(r,n)||(e.uniform1iv(this.addr,n),xi(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||Cf,n[s])}function T1(e){switch(e){case 5126:return n1;case 35664:return s1;case 35665:return o1;case 35666:return l1;case 35674:return c1;case 35675:return h1;case 35676:return u1;case 5124:case 35670:return d1;case 35667:case 35671:return p1;case 35668:case 35672:return f1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return v1;case 36295:return _1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return S1}}var E1=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=a1(t.type)}},w1=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=T1(t.type)}},A1=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},nc=/(\w+)(\])?(\[|\.)?/g;function jd(e,t){e.seq.push(t),e.map[t.id]=t}function R1(e,t,i){let r=e.name,a=r.length;for(nc.lastIndex=0;;){let n=nc.exec(r),s=nc.lastIndex,o=n[1],l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){jd(i,c===void 0?new E1(o,e,t):new w1(o,e,t));break}else{let h=i.map[o];h===void 0&&(h=new A1(o),jd(i,h)),i=h}}}var Ro=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);R1(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function qd(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var C1=37297,I1=0;function P1(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var Yd=new dt;function L1(e){_t._getMatrix(Yd,_t.workingColorSpace,e);let t=`mat3( ${Yd.elements.map(i=>i.toFixed(4))} )`;switch(_t.getTransfer(e)){case Po:return[t,"LinearTransferOETF"];case Pt:return[t,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Zd(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+P1(e.getShaderSource(t),s)}else return a}function D1(e,t){let i=L1(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var N1={[Oo]:"Linear",[Fo]:"Reinhard",[Bo]:"Cineon",[Ln]:"ACESFilmic",[Ho]:"AgX",[ko]:"Neutral",[zo]:"Custom"};function U1(e,t){let i=N1[t];return i===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var yo=new C;function O1(){_t.getLuminanceCoefficients(yo);let e=yo.x.toFixed(4),t=yo.y.toFixed(4),i=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F1(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function B1(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function z1(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function cs(e){return e!==""}function Kd(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $d(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var H1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(e){return e.replace(H1,G1)}var k1=new Map;function G1(e,t){let i=vt[t];if(i===void 0){let r=k1.get(t);if(r!==void 0)i=vt[r],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Yc(i)}var V1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jd(e){return e.replace(V1,W1)}function W1(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Qd(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var X1={[mn]:"SHADOWMAP_TYPE_PCF",[os]:"SHADOWMAP_TYPE_VSM"};function j1(e){return X1[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var q1={[Ia]:"ENVMAP_TYPE_CUBE",[Tn]:"ENVMAP_TYPE_CUBE",[Go]:"ENVMAP_TYPE_CUBE_UV"};function Y1(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":q1[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var Z1={[Tn]:"ENVMAP_MODE_REFRACTION"};function K1(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Z1[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $1={[sp]:"ENVMAP_BLENDING_MULTIPLY",[tg]:"ENVMAP_BLENDING_MIX",[ig]:"ENVMAP_BLENDING_ADD"};function J1(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":$1[e.combine]||"ENVMAP_BLENDING_NONE"}function Q1(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function eM(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=j1(i),c=Y1(i),h=K1(i),d=J1(i),u=Q1(i),p=F1(i),g=B1(n),x=a.createProgram(),m,f,M=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(cs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(cs).join(`
`),f.length>0&&(f+=`
`)):(m=[Qd(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),f=[Qd(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Dr?"#define TONE_MAPPING":"",i.toneMapping!==Dr?vt.tonemapping_pars_fragment:"",i.toneMapping!==Dr?U1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,D1("linearToOutputTexel",i.outputColorSpace),O1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(cs).join(`
`)),s=Yc(s),s=Kd(s,i),s=$d(s,i),o=Yc(o),o=Kd(o,i),o=$d(o,i),s=Jd(s),o=Jd(o),i.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",i.glslVersion===Gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=M+m+s,v=M+f+o,T=qd(a,a.VERTEX_SHADER,y),R=qd(a,a.FRAGMENT_SHADER,v);a.attachShader(x,T),a.attachShader(x,R),i.index0AttributeName!==void 0?a.bindAttribLocation(x,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function w(D){if(e.debug.checkShaderErrors){let O=a.getProgramInfoLog(x)||"",q=a.getShaderInfoLog(T)||"",U=a.getShaderInfoLog(R)||"",L=O.trim(),G=q.trim(),F=U.trim(),Q=!0,V=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(Q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,x,T,R);else{let Z=Zd(a,T,"vertex"),te=Zd(a,R,"fragment");ot("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+Z+`
`+te)}else L!==""?Ye("WebGLProgram: Program Info Log:",L):(G===""||F==="")&&(V=!1);V&&(D.diagnostics={runnable:Q,programLog:L,vertexShader:{log:G,prefix:m},fragmentShader:{log:F,prefix:f}})}a.deleteShader(T),a.deleteShader(R),_=new Ro(a,x),b=z1(a,x)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=a.getProgramParameter(x,C1)),N},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=I1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=R,this}var tM=0,iM=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new rM(e),t.set(e,i)),i}},rM=class{constructor(e){this.id=tM++,this.code=e,this.usedTimes=0}};function aM(e){return e===La||e===Co||e===Io}function nM(e,t,i,r,a,n){let s=new bp,o=new iM,l=new Set,c=[],h=new Map,d=r.logarithmicDepthBuffer,u=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,b,N,D,O,q){let U=D.fog,L=O.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Q=t.get(_.envMap||G,F),V=Q&&Q.mapping===Go?Q.image.height:null,Z=p[_.type];_.precision!==null&&(u=r.getMaxPrecision(_.precision),u!==_.precision&&Ye("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let te=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ye=te!==void 0?te.length:0,_e=0;L.morphAttributes.position!==void 0&&(_e=1),L.morphAttributes.normal!==void 0&&(_e=2),L.morphAttributes.color!==void 0&&(_e=3);let Ue,Ge,ie,se;if(Z){let nt=Pr[Z];Ue=nt.vertexShader,Ge=nt.fragmentShader}else{Ue=_.vertexShader,Ge=_.fragmentShader;let nt=o.getVertexShaderStage(_),ke=o.getFragmentShaderStage(_);o.update(_,nt,ke),ie=nt.id,se=ke.id}let pe=e.getRenderTarget(),Le=e.state.buffers.depth.getReversed(),Ne=O.isInstancedMesh===!0,fe=O.isBatchedMesh===!0,Oe=!!_.map,ce=!!_.matcap,oe=!!Q,le=!!_.aoMap,Re=!!_.lightMap,Ce=!!_.bumpMap&&_.wireframe===!1,Fe=!!_.normalMap,We=!!_.displacementMap,Qe=!!_.emissiveMap,at=!!_.metalnessMap,B=!!_.roughnessMap,gt=_.anisotropy>0,ut=_.clearcoat>0,ct=_.dispersion>0,I=_.retroreflectivity>0,E=_.iridescence>0,k=_.sheen>0,ae=_.transmission>0,ue=gt&&!!_.anisotropyMap,Te=ut&&!!_.clearcoatMap,Ie=ut&&!!_.clearcoatNormalMap,X=ut&&!!_.clearcoatRoughnessMap,xe=E&&!!_.iridescenceMap,Ee=E&&!!_.iridescenceThicknessMap,He=k&&!!_.sheenColorMap,me=k&&!!_.sheenRoughnessMap,Xe=!!_.specularMap,qe=!!_.specularColorMap,it=!!_.specularIntensityMap,z=ae&&!!_.transmissionMap,S=ae&&!!_.thicknessMap,P=!!_.gradientMap,H=!!_.alphaMap,K=_.alphaTest>0,re=!!_.alphaHash,j=!!_.extensions,he=Dr;_.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(he=e.toneMapping);let ve={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:Ue,fragmentShader:Ge,defines:_.defines,customVertexShaderID:ie,customFragmentShaderID:se,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:fe,batchingColor:fe&&O._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&O.instanceColor!==null,instancingMorph:Ne&&O.morphTexture!==null,outputColorSpace:pe===null?e.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Oe,matcap:ce,envMap:oe,envMapMode:oe&&Q.mapping,envMapCubeUVHeight:V,aoMap:le,lightMap:Re,bumpMap:Ce,normalMap:Fe,displacementMap:We,emissiveMap:Qe,normalMapObjectSpace:Fe&&_.normalMapType===sg,normalMapTangentSpace:Fe&&_.normalMapType===Vc,packedNormalMap:Fe&&_.normalMapType===Vc&&aM(_.normalMap.format),metalnessMap:at,roughnessMap:B,anisotropy:gt,anisotropyMap:ue,clearcoat:ut,clearcoatMap:Te,clearcoatNormalMap:Ie,clearcoatRoughnessMap:X,dispersion:ct,retroreflection:I,iridescence:E,iridescenceMap:xe,iridescenceThicknessMap:Ee,sheen:k,sheenColorMap:He,sheenRoughnessMap:me,specularMap:Xe,specularColorMap:qe,specularIntensityMap:it,transmission:ae,transmissionMap:z,thicknessMap:S,gradientMap:P,opaque:_.transparent===!1&&_.blending===hs&&_.alphaToCoverage===!1,alphaMap:H,alphaTest:K,alphaHash:re,combine:_.combine,mapUv:Oe&&g(_.map.channel),aoMapUv:le&&g(_.aoMap.channel),lightMapUv:Re&&g(_.lightMap.channel),bumpMapUv:Ce&&g(_.bumpMap.channel),normalMapUv:Fe&&g(_.normalMap.channel),displacementMapUv:We&&g(_.displacementMap.channel),emissiveMapUv:Qe&&g(_.emissiveMap.channel),metalnessMapUv:at&&g(_.metalnessMap.channel),roughnessMapUv:B&&g(_.roughnessMap.channel),anisotropyMapUv:ue&&g(_.anisotropyMap.channel),clearcoatMapUv:Te&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:He&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(_.sheenRoughnessMap.channel),specularMapUv:Xe&&g(_.specularMap.channel),specularColorMapUv:qe&&g(_.specularColorMap.channel),specularIntensityMapUv:it&&g(_.specularIntensityMap.channel),transmissionMapUv:z&&g(_.transmissionMap.channel),thicknessMapUv:S&&g(_.thicknessMap.channel),alphaMapUv:H&&g(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Fe||gt),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!L.attributes.uv&&(Oe||H),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&Fe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Le,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:_e,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:he,decodeVideoTexture:Oe&&_.map.isVideoTexture===!0&&_t.getTransfer(_.map.colorSpace)===Pt,decodeVideoTextureEmissive:Qe&&_.emissiveMap.isVideoTexture===!0&&_t.getTransfer(_.emissiveMap.colorSpace)===Pt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ri,flipSided:_.side===Li,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:j&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(j&&_.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function m(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)b.push(N),b.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(f(b,_),M(b,_),b.push(e.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function f(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function M(_,b){s.disableAll(),b.instancing&&s.enable(0),b.instancingColor&&s.enable(1),b.instancingMorph&&s.enable(2),b.matcap&&s.enable(3),b.envMap&&s.enable(4),b.normalMapObjectSpace&&s.enable(5),b.normalMapTangentSpace&&s.enable(6),b.clearcoat&&s.enable(7),b.iridescence&&s.enable(8),b.alphaTest&&s.enable(9),b.vertexColors&&s.enable(10),b.vertexAlphas&&s.enable(11),b.vertexUv1s&&s.enable(12),b.vertexUv2s&&s.enable(13),b.vertexUv3s&&s.enable(14),b.vertexTangents&&s.enable(15),b.anisotropy&&s.enable(16),b.alphaHash&&s.enable(17),b.batching&&s.enable(18),b.dispersion&&s.enable(19),b.retroreflection&&s.enable(24),b.batchingColor&&s.enable(20),b.gradientMap&&s.enable(21),b.packedNormalMap&&s.enable(22),b.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.reversedDepthBuffer&&s.enable(4),b.skinning&&s.enable(5),b.morphTargets&&s.enable(6),b.morphNormals&&s.enable(7),b.morphColors&&s.enable(8),b.premultipliedAlpha&&s.enable(9),b.shadowMapEnabled&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.decodeVideoTextureEmissive&&s.enable(20),b.alphaToCoverage&&s.enable(21),b.numLightProbeGrids>0&&s.enable(22),b.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function y(_){let b=p[_.type],N;if(b){let D=Pr[b];N=nr.clone(D.uniforms)}else N=_.uniforms;return N}function v(_,b){let N=h.get(b);return N!==void 0?++N.usedTimes:(N=new eM(e,b,_,a),c.push(N),h.set(b,N)),N}function T(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function R(_){o.remove(_)}function w(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:y,acquireProgram:v,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:w}}function sM(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function oM(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function ep(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function tp(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,x,m,f){let M=e[t];return M===void 0?(M={id:u.id,object:u,geometry:p,material:g,materialVariant:s(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:f},e[t]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=g,M.materialVariant=s(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=m,M.group=f),t++,M}function l(u,p,g,x,m,f,M){M.reversedDepth===!0&&(m=-m);let y=o(u,p,g,x,m,f);g.transmission>0?r.push(y):g.transparent===!0?a.push(y):i.push(y)}function c(u,p,g,x,m,f){let M=o(u,p,g,x,m,f);g.transmission>0?r.unshift(M):g.transparent===!0?a.unshift(M):i.unshift(M)}function h(u,p){i.length>1&&i.sort(u||oM),r.length>1&&r.sort(p||ep),a.length>1&&a.sort(p||ep)}function d(){for(let u=t,p=e.length;u<p;u++){let g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:c,finish:d,sort:h}}function lM(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new tp,e.set(r,[s])):a>=n.length?(s=new tp,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function cM(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new C,color:new be};break;case"SpotLight":i={position:new C,direction:new C,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new C,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new C,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new C,halfWidth:new C,halfHeight:new C};break}return e[t.id]=i,i}}}function hM(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var uM=0;function dM(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function pM(e){let t=new cM,i=hM(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new C);let a=new C,n=new Ze,s=new Ze;function o(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,M=0,y=0,v=0,T=0,R=0,w=0,_=0,b=0,N=0;c.sort(dM);for(let O=0,q=c.length;O<q;O++){let U=c[O],L=U.color,G=U.intensity,F=U.distance,Q=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===La?Q=U.shadow.map.texture:Q=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=L.r*G,d+=L.g*G,u+=L.b*G;else if(U.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(U.sh.coefficients[V],G);N++}else if(U.isSunLight){let V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Z=U.shadow,te=i.get(U);te.shadowIntensity=Z.intensity,te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),r.sunShadow[g]=te,r.sunShadowMap[g]=Q;let ye=Z.getViewportCount();for(let _e=0;_e<ye;_e++)r.sunShadowMatrix[x+_e]=Z.getMatrix(_e),r.sunShadowCascade[x+_e]=Z._cascadeData[_e];x+=ye,g++}r.sun[p]=V,p++}else if(U.isDirectionalLight){let V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Z=U.shadow,te=i.get(U);te.shadowIntensity=Z.intensity,te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,r.directionalShadow[m]=te,r.directionalShadowMap[m]=Q,r.directionalShadowMatrix[m]=U.shadow.matrix,T++}r.directional[m]=V,m++}else if(U.isSpotLight){let V=t.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(L).multiplyScalar(G),V.distance=F,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,r.spot[M]=V;let Z=U.shadow;if(U.map&&(r.spotLightMap[_]=U.map,_++,Z.updateMatrices(U),U.castShadow&&b++),r.spotLightMatrix[M]=Z.matrix,U.castShadow){let te=i.get(U);te.shadowIntensity=Z.intensity,te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,r.spotShadow[M]=te,r.spotShadowMap[M]=Q,w++}M++}else if(U.isRectAreaLight){let V=t.get(U);V.color.copy(L).multiplyScalar(G),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),r.rectArea[y]=V,y++}else if(U.isPointLight){let V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),V.distance=U.distance,V.decay=U.decay,U.castShadow){let Z=U.shadow,te=i.get(U);te.shadowIntensity=Z.intensity,te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,te.shadowCameraNear=Z.camera.near,te.shadowCameraFar=Z.camera.far,r.pointShadow[f]=te,r.pointShadowMap[f]=Q,r.pointShadowMatrix[f]=U.shadow.matrix,R++}r.point[f]=V,f++}else if(U.isHemisphereLight){let V=t.get(U);V.skyColor.copy(U.color).multiplyScalar(G),V.groundColor.copy(U.groundColor).multiplyScalar(G),r.hemi[v]=V,v++}}y>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=u;let D=r.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==f||D.spotLength!==M||D.rectAreaLength!==y||D.hemiLength!==v||D.numSunShadows!==g||D.numDirectionalShadows!==T||D.numPointShadows!==R||D.numSpotShadows!==w||D.numSpotMaps!==_||D.numLightProbes!==N)&&(r.sun.length=p,r.directional.length=m,r.spot.length=M,r.rectArea.length=y,r.point.length=f,r.hemi.length=v,r.sunShadow.length=g,r.sunShadowMap.length=g,r.sunShadowMatrix.length=x,r.sunShadowCascade.length=x,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.directionalShadowMatrix.length=T,r.pointShadow.length=R,r.pointShadowMap.length=R,r.pointShadowMatrix.length=R,r.spotShadow.length=w,r.spotShadowMap.length=w,r.spotLightMatrix.length=w+_-b,r.spotLightMap.length=_,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=N,D.sunLength=p,D.directionalLength=m,D.pointLength=f,D.spotLength=M,D.rectAreaLength=y,D.hemiLength=v,D.numSunShadows=g,D.numDirectionalShadows=T,D.numPointShadows=R,D.numSpotShadows=w,D.numSpotMaps=_,D.numLightProbes=N,r.version=uM++)}function l(c,h){let d=0,u=0,p=0,g=0,x=0,m=0,f=h.matrixWorldInverse;for(let M=0,y=c.length;M<y;M++){let v=c[M];if(v.isSunLight){let T=r.sun[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),d++}else if(v.isDirectionalLight){let T=r.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),u++}else if(v.isSpotLight){let T=r.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),g++}else if(v.isRectAreaLight){let T=r.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),s.identity(),n.copy(v.matrixWorld),n.premultiply(f),s.extractRotation(n),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),x++}else if(v.isPointLight){let T=r.point[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let T=r.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:r}}function ip(e){let t=new pM(e),i=[],r=[],a=[];function n(u){d.camera=u,i.length=0,r.length=0,a.length=0}function s(u){i.push(u)}function o(u){r.push(u)}function l(u){a.push(u)}function c(){t.setup(i)}function h(u){t.setupView(i,u)}let d={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:d,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function fM(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new ip(e),t.set(a,[o])):n>=s.length?(o=new ip(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var mM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gM=`uniform sampler2D shadow_pass;
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
}`,vM=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],_M=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],rp=new Ze,ss=new C,sc=new C;function xM(e,t,i){let r=new Cn,a=new de,n=new de,s=new Dt,o=new rv,l=new av,c={},h=i.maxTextureSize,d={[ta]:Li,[Li]:ta,[Ri]:Ri},u=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:mM,fragmentShader:gM}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new yt;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new rt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mn;let f=this.type;this.render=function(R,w,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===Om&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mn);let b=e.getRenderTarget(),N=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),O=e.state;O.setBlending(gr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let q=f!==this.type;q&&w.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(L=>L.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,L=R.length;U<L;U++){let G=R[U],F=G.shadow;if(F===void 0){Ye("WebGLShadowMap:",G,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;a.copy(F.mapSize);let Q=F.getFrameExtents();a.multiply(Q),n.copy(F.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(n.x=Math.floor(h/Q.x),a.x=n.x*Q.x,F.mapSize.x=n.x),a.y>h&&(n.y=Math.floor(h/Q.y),a.y=n.y*Q.y,F.mapSize.y=n.y));let V=e.state.buffers.depth.getReversed();if(F.camera._reversedDepth=V,F.map===null||q===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===os){if(G.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new vi(a.x,a.y,{format:La,type:ui,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),F.map.texture.name=G.name+".shadowMap",F.map.depthTexture=new bs(a.x,a.y,er),F.map.depthTexture.name=G.name+".shadowMapDepth",F.map.depthTexture.format=ia,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=ci,F.map.depthTexture.magFilter=ci}else G.isPointLight?(F.map=new Af(a.x),F.map.depthTexture=new c0(a.x,Nr)):(F.map=new vi(a.x,a.y),F.map.depthTexture=new bs(a.x,a.y,Nr)),F.map.depthTexture.name=G.name+".shadowMap",F.map.depthTexture.format=ia,this.type===mn?(F.map.depthTexture.compareFunction=V?ah:rh,F.map.depthTexture.minFilter=Vt,F.map.depthTexture.magFilter=Vt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=ci,F.map.depthTexture.magFilter=ci);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==a.x||F.map.height!==a.y)&&F.map.setSize(a.x,a.y);let Z=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();G.isPointLight!==!0&&F.updateMatrices(G,_);for(let te=0;te<Z;te++){let ye=F.getCamera(te);if(G.isPointLight){let _e=F.camera,Ue=F.matrix,Ge=G.distance||_e.far;Ge!==_e.far&&(_e.far=Ge,_e.updateProjectionMatrix()),ss.setFromMatrixPosition(G.matrixWorld),_e.position.copy(ss),sc.copy(_e.position),sc.add(vM[te]),_e.up.copy(_M[te]),_e.lookAt(sc),_e.updateMatrixWorld(),Ue.makeTranslation(-ss.x,-ss.y,-ss.z),rp.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),F._frustum.setFromProjectionMatrix(rp,_e.coordinateSystem,_e.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)e.setRenderTarget(F.map,te),e.clear();else{te===0&&(e.setRenderTarget(F.map),e.clear());let _e=F.getViewport(te);s.set(n.x*_e.x,n.y*_e.y,n.x*_e.z,n.y*_e.w),O.viewport(s)}r=F.getFrustum(te),v(w,_,ye,G,this.type)}F.isPointLightShadow!==!0&&this.type===os&&M(F,_),F.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(b,N,D)};function M(R,w){let _=t.update(x);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null?R.mapPass=new vi(a.x,a.y,{format:La,type:ui}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(w,null,_,u,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value.set(R.map.width,R.map.height),p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(w,null,_,p,x,null)}function y(R,w,_,b){let N=null,D=_.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)N=D;else if(N=_.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let O=N.uuid,q=w.uuid,U=c[O];U===void 0&&(U={},c[O]=U);let L=U[q];L===void 0&&(L=N.clone(),U[q]=L,w.addEventListener("dispose",T)),N=L}if(N.visible=w.visible,N.wireframe=w.wireframe,b===os?N.side=w.shadowSide!==null?w.shadowSide:w.side:N.side=w.shadowSide!==null?w.shadowSide:d[w.side],N.alphaMap=w.alphaMap,N.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,N.map=w.map,N.clipShadows=w.clipShadows,N.clippingPlanes=w.clippingPlanes,N.clipIntersection=w.clipIntersection,N.displacementMap=w.displacementMap,N.displacementScale=w.displacementScale,N.displacementBias=w.displacementBias,N.wireframeLinewidth=w.wireframeLinewidth,N.linewidth=w.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let O=e.properties.get(N);O.light=_}return N}function v(R,w,_,b,N){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&N===os)&&(!R.frustumCulled||R.intersectsFrustum(r))){R.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,R.matrixWorld);let O=t.update(R),q=R.material;if(Array.isArray(q)){let U=O.groups;for(let L=0,G=U.length;L<G;L++){let F=U[L],Q=q[F.materialIndex];if(Q&&Q.visible){let V=y(R,Q,b,N);R.onBeforeShadow(e,R,w,_,O,V,F),e.renderBufferDirect(_,null,O,V,R,F),R.onAfterShadow(e,R,w,_,O,V,F)}}}else if(q.visible){let U=y(R,q,b,N);R.onBeforeShadow(e,R,w,_,O,U,null),e.renderBufferDirect(_,null,O,U,R,null),R.onAfterShadow(e,R,w,_,O,U,null)}}let D=R.children;for(let O=0,q=D.length;O<q;O++)v(D[O],w,_,b,N)}function T(R){R.target.removeEventListener("dispose",T);for(let w in c){let _=c[w],b=R.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}function yM(e,t){function i(){let S=!1,P=new Dt,H=null,K=new Dt(0,0,0,0);return{setMask:function(re){H!==re&&!S&&(e.colorMask(re,re,re,re),H=re)},setLocked:function(re){S=re},setClear:function(re,j,he,ve,nt){nt===!0&&(re*=ve,j*=ve,he*=ve),P.set(re,j,he,ve),K.equals(P)===!1&&(e.clearColor(re,j,he,ve),K.copy(P))},reset:function(){S=!1,H=null,K.set(-1,0,0,0)}}}function r(){let S=!1,P=!1,H=null,K=null,re=null;return{setReversed:function(j){if(P!==j){let he=t.get("EXT_clip_control");j?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),P=j;let ve=re;re=null,this.setClear(ve)}},getReversed:function(){return P},setTest:function(j){j?pe(e.DEPTH_TEST):Le(e.DEPTH_TEST)},setMask:function(j){H!==j&&!S&&(e.depthMask(j),H=j)},setFunc:function(j){if(P&&(j=vg[j]),K!==j){switch(j){case oc:e.depthFunc(e.NEVER);break;case lc:e.depthFunc(e.ALWAYS);break;case cc:e.depthFunc(e.LESS);break;case ms:e.depthFunc(e.LEQUAL);break;case hc:e.depthFunc(e.EQUAL);break;case uc:e.depthFunc(e.GEQUAL);break;case gs:e.depthFunc(e.GREATER);break;case dc:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}K=j}},setLocked:function(j){S=j},setClear:function(j){re!==j&&(re=j,P&&(j=1-j),e.clearDepth(j))},reset:function(){S=!1,H=null,K=null,re=null,P=!1}}}function a(){let S=!1,P=null,H=null,K=null,re=null,j=null,he=null,ve=null,nt=null;return{setTest:function(ke){S||(ke?pe(e.STENCIL_TEST):Le(e.STENCIL_TEST))},setMask:function(ke){P!==ke&&!S&&(e.stencilMask(ke),P=ke)},setFunc:function(ke,lt,Je){(H!==ke||K!==lt||re!==Je)&&(e.stencilFunc(ke,lt,Je),H=ke,K=lt,re=Je)},setOp:function(ke,lt,Je){(j!==ke||he!==lt||ve!==Je)&&(e.stencilOp(ke,lt,Je),j=ke,he=lt,ve=Je)},setLocked:function(ke){S=ke},setClear:function(ke){nt!==ke&&(e.clearStencil(ke),nt=ke)},reset:function(){S=!1,P=null,H=null,K=null,re=null,j=null,he=null,ve=null,nt=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],x=null,m=!1,f=null,M=null,y=null,v=null,T=null,R=null,w=null,_=new be(0,0,0),b=0,N=!1,D=null,O=null,q=null,U=null,L=null,G=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,Q=0,V=e.getParameter(e.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=Q>=2);let Z=null,te={},ye=e.getParameter(e.SCISSOR_BOX),_e=e.getParameter(e.VIEWPORT),Ue=new Dt().fromArray(ye),Ge=new Dt().fromArray(_e);function ie(S,P,H,K){let re=new Uint8Array(4),j=e.createTexture();e.bindTexture(S,j),e.texParameteri(S,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(S,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let he=0;he<H;he++)S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY?e.texImage3D(P,0,e.RGBA,1,1,K,0,e.RGBA,e.UNSIGNED_BYTE,re):e.texImage2D(P+he,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,re);return j}let se={};se[e.TEXTURE_2D]=ie(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=ie(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=ie(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=ie(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(e.DEPTH_TEST),s.setFunc(ms),Ce(!1),Fe(Nu),pe(e.CULL_FACE),le(gr);function pe(S){h[S]!==!0&&(e.enable(S),h[S]=!0)}function Le(S){h[S]!==!1&&(e.disable(S),h[S]=!1)}function Ne(S,P){return u[S]!==P?(e.bindFramebuffer(S,P),u[S]=P,S===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=P),S===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=P),!0):!1}function fe(S,P){let H=g,K=!1;if(S){H=p.get(P),H===void 0&&(H=[],p.set(P,H));let re=S.textures;if(H.length!==re.length||H[0]!==e.COLOR_ATTACHMENT0){for(let j=0,he=re.length;j<he;j++)H[j]=e.COLOR_ATTACHMENT0+j;H.length=re.length,K=!0}}else H[0]!==e.BACK&&(H[0]=e.BACK,K=!0);K&&e.drawBuffers(H)}function Oe(S){return x!==S?(e.useProgram(S),x=S,!0):!1}let ce={[cn]:e.FUNC_ADD,[Bm]:e.FUNC_SUBTRACT,[zm]:e.FUNC_REVERSE_SUBTRACT};ce[Hm]=e.MIN,ce[km]=e.MAX;let oe={[Gm]:e.ZERO,[Vm]:e.ONE,[Wm]:e.SRC_COLOR,[ap]:e.SRC_ALPHA,[Km]:e.SRC_ALPHA_SATURATE,[Ym]:e.DST_COLOR,[jm]:e.DST_ALPHA,[Xm]:e.ONE_MINUS_SRC_COLOR,[np]:e.ONE_MINUS_SRC_ALPHA,[Zm]:e.ONE_MINUS_DST_COLOR,[qm]:e.ONE_MINUS_DST_ALPHA,[$m]:e.CONSTANT_COLOR,[Jm]:e.ONE_MINUS_CONSTANT_COLOR,[Qm]:e.CONSTANT_ALPHA,[eg]:e.ONE_MINUS_CONSTANT_ALPHA};function le(S,P,H,K,re,j,he,ve,nt,ke){if(S===gr){m===!0&&(Le(e.BLEND),m=!1);return}if(m===!1&&(pe(e.BLEND),m=!0),S!==Fm){if(S!==f||ke!==N){if((M!==cn||T!==cn)&&(e.blendEquation(e.FUNC_ADD),M=cn,T=cn),ke)switch(S){case hs:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ga:e.blendFunc(e.ONE,e.ONE);break;case Uu:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ou:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ot("WebGLState: Invalid blending: ",S);break}else switch(S){case hs:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ga:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Uu:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ou:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",S);break}y=null,v=null,R=null,w=null,_.set(0,0,0),b=0,f=S,N=ke}return}re=re||P,j=j||H,he=he||K,(P!==M||re!==T)&&(e.blendEquationSeparate(ce[P],ce[re]),M=P,T=re),(H!==y||K!==v||j!==R||he!==w)&&(e.blendFuncSeparate(oe[H],oe[K],oe[j],oe[he]),y=H,v=K,R=j,w=he),(ve.equals(_)===!1||nt!==b)&&(e.blendColor(ve.r,ve.g,ve.b,nt),_.copy(ve),b=nt),f=S,N=!1}function Re(S,P){S.side===Ri?Le(e.CULL_FACE):pe(e.CULL_FACE);let H=S.side===Li;P&&(H=!H),Ce(H),S.blending===hs&&S.transparent===!1?le(gr):le(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),s.setFunc(S.depthFunc),s.setTest(S.depthTest),s.setMask(S.depthWrite),n.setMask(S.colorWrite);let K=S.stencilWrite;o.setTest(K),K&&(o.setMask(S.stencilWriteMask),o.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),o.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),Qe(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?pe(e.SAMPLE_ALPHA_TO_COVERAGE):Le(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(S){D!==S&&(S?e.frontFace(e.CW):e.frontFace(e.CCW),D=S)}function Fe(S){S!==Nm?(pe(e.CULL_FACE),S!==O&&(S===Nu?e.cullFace(e.BACK):S===Um?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Le(e.CULL_FACE),O=S}function We(S){S!==q&&(F&&e.lineWidth(S),q=S)}function Qe(S,P,H){S?(pe(e.POLYGON_OFFSET_FILL),(U!==P||L!==H)&&(U=P,L=H,s.getReversed()&&(P=-P),e.polygonOffset(P,H))):Le(e.POLYGON_OFFSET_FILL)}function at(S){S?pe(e.SCISSOR_TEST):Le(e.SCISSOR_TEST)}function B(S){S===void 0&&(S=e.TEXTURE0+G-1),Z!==S&&(e.activeTexture(S),Z=S)}function gt(S,P,H){H===void 0&&(Z===null?H=e.TEXTURE0+G-1:H=Z);let K=te[H];K===void 0&&(K={type:void 0,texture:void 0},te[H]=K),(K.type!==S||K.texture!==P)&&(Z!==H&&(e.activeTexture(H),Z=H),e.bindTexture(S,P||se[S]),K.type=S,K.texture=P)}function ut(){let S=te[Z];S!==void 0&&S.type!==void 0&&(e.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function ct(){try{e.compressedTexImage2D(...arguments)}catch(S){ot("WebGLState:",S)}}function I(){try{e.compressedTexImage3D(...arguments)}catch(S){ot("WebGLState:",S)}}function E(){try{e.texSubImage2D(...arguments)}catch(S){ot("WebGLState:",S)}}function k(){try{e.texSubImage3D(...arguments)}catch(S){ot("WebGLState:",S)}}function ae(){try{e.compressedTexSubImage2D(...arguments)}catch(S){ot("WebGLState:",S)}}function ue(){try{e.compressedTexSubImage3D(...arguments)}catch(S){ot("WebGLState:",S)}}function Te(){try{e.texStorage2D(...arguments)}catch(S){ot("WebGLState:",S)}}function Ie(){try{e.texStorage3D(...arguments)}catch(S){ot("WebGLState:",S)}}function X(){try{e.texImage2D(...arguments)}catch(S){ot("WebGLState:",S)}}function xe(){try{e.texImage3D(...arguments)}catch(S){ot("WebGLState:",S)}}function Ee(S){return d[S]!==void 0?d[S]:e.getParameter(S)}function He(S,P){d[S]!==P&&(e.pixelStorei(S,P),d[S]=P)}function me(S){Ue.equals(S)===!1&&(e.scissor(S.x,S.y,S.z,S.w),Ue.copy(S))}function Xe(S){Ge.equals(S)===!1&&(e.viewport(S.x,S.y,S.z,S.w),Ge.copy(S))}function qe(S,P){let H=c.get(P);H===void 0&&(H=new WeakMap,c.set(P,H));let K=H.get(S);K===void 0&&(K=e.getUniformBlockIndex(P,S.name),H.set(S,K))}function it(S,P){let H=c.get(P).get(S);l.get(P)!==H&&(e.uniformBlockBinding(P,H,S.__bindingPointIndex),l.set(P,H))}function z(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},Z=null,te={},u={},p=new WeakMap,g=[],x=null,m=!1,f=null,M=null,y=null,v=null,T=null,R=null,w=null,_=new be(0,0,0),b=0,N=!1,D=null,O=null,q=null,U=null,L=null,Ue.set(0,0,e.canvas.width,e.canvas.height),Ge.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:pe,disable:Le,bindFramebuffer:Ne,drawBuffers:fe,useProgram:Oe,setBlending:le,setMaterial:Re,setFlipSided:Ce,setCullFace:Fe,setLineWidth:We,setPolygonOffset:Qe,setScissorTest:at,activeTexture:B,bindTexture:gt,unbindTexture:ut,compressedTexImage2D:ct,compressedTexImage3D:I,texImage2D:X,texImage3D:xe,pixelStorei:He,getParameter:Ee,updateUBOMapping:qe,uniformBlockBinding:it,texStorage2D:Te,texStorage3D:Ie,texSubImage2D:E,texSubImage3D:k,compressedTexSubImage2D:ae,compressedTexSubImage3D:ue,scissor:me,viewport:Xe,reset:z}}function MM(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,E){return g?new OffscreenCanvas(I,E):Ms("canvas")}function m(I,E,k){let ae=1,ue=ct(I);if((ue.width>k||ue.height>k)&&(ae=k/Math.max(ue.width,ue.height)),ae<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Te=Math.floor(ae*ue.width),Ie=Math.floor(ae*ue.height);u===void 0&&(u=x(Te,Ie));let X=E?x(Te,Ie):u;return X.width=Te,X.height=Ie,X.getContext("2d").drawImage(I,0,0,Te,Ie),Ye("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Te+"x"+Ie+")."),X}else return"data"in I&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),I;return I}function f(I){return I.generateMipmaps}function M(I){e.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?e.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(I,E,k,ae,ue,Te=!1){if(I!==null){if(e[I]!==void 0)return e[I];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ie;ae&&(Ie=t.get("EXT_texture_norm16"),Ie||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=E;if(E===e.RED&&(k===e.FLOAT&&(X=e.R32F),k===e.HALF_FLOAT&&(X=e.R16F),k===e.UNSIGNED_BYTE&&(X=e.R8),k===e.UNSIGNED_SHORT&&Ie&&(X=Ie.R16_EXT),k===e.SHORT&&Ie&&(X=Ie.R16_SNORM_EXT)),E===e.RED_INTEGER&&(k===e.UNSIGNED_BYTE&&(X=e.R8UI),k===e.UNSIGNED_SHORT&&(X=e.R16UI),k===e.UNSIGNED_INT&&(X=e.R32UI),k===e.BYTE&&(X=e.R8I),k===e.SHORT&&(X=e.R16I),k===e.INT&&(X=e.R32I)),E===e.RG&&(k===e.FLOAT&&(X=e.RG32F),k===e.HALF_FLOAT&&(X=e.RG16F),k===e.UNSIGNED_BYTE&&(X=e.RG8),k===e.UNSIGNED_SHORT&&Ie&&(X=Ie.RG16_EXT),k===e.SHORT&&Ie&&(X=Ie.RG16_SNORM_EXT)),E===e.RG_INTEGER&&(k===e.UNSIGNED_BYTE&&(X=e.RG8UI),k===e.UNSIGNED_SHORT&&(X=e.RG16UI),k===e.UNSIGNED_INT&&(X=e.RG32UI),k===e.BYTE&&(X=e.RG8I),k===e.SHORT&&(X=e.RG16I),k===e.INT&&(X=e.RG32I)),E===e.RGB_INTEGER&&(k===e.UNSIGNED_BYTE&&(X=e.RGB8UI),k===e.UNSIGNED_SHORT&&(X=e.RGB16UI),k===e.UNSIGNED_INT&&(X=e.RGB32UI),k===e.BYTE&&(X=e.RGB8I),k===e.SHORT&&(X=e.RGB16I),k===e.INT&&(X=e.RGB32I)),E===e.RGBA_INTEGER&&(k===e.UNSIGNED_BYTE&&(X=e.RGBA8UI),k===e.UNSIGNED_SHORT&&(X=e.RGBA16UI),k===e.UNSIGNED_INT&&(X=e.RGBA32UI),k===e.BYTE&&(X=e.RGBA8I),k===e.SHORT&&(X=e.RGBA16I),k===e.INT&&(X=e.RGBA32I)),E===e.RGB&&(k===e.UNSIGNED_SHORT&&Ie&&(X=Ie.RGB16_EXT),k===e.SHORT&&Ie&&(X=Ie.RGB16_SNORM_EXT),k===e.UNSIGNED_INT_5_9_9_9_REV&&(X=e.RGB9_E5),k===e.UNSIGNED_INT_10F_11F_11F_REV&&(X=e.R11F_G11F_B10F)),E===e.RGBA){let xe=Te?Po:_t.getTransfer(ue);k===e.FLOAT&&(X=e.RGBA32F),k===e.HALF_FLOAT&&(X=e.RGBA16F),k===e.UNSIGNED_BYTE&&(X=xe===Pt?e.SRGB8_ALPHA8:e.RGBA8),k===e.UNSIGNED_SHORT&&Ie&&(X=Ie.RGBA16_EXT),k===e.SHORT&&Ie&&(X=Ie.RGBA16_SNORM_EXT),k===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),k===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function T(I,E){let k;return I?E===null||E===Nr||E===xs?k=e.DEPTH24_STENCIL8:E===er?k=e.DEPTH32F_STENCIL8:E===_s&&(k=e.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Nr||E===xs?k=e.DEPTH_COMPONENT24:E===er?k=e.DEPTH_COMPONENT32F:E===_s&&(k=e.DEPTH_COMPONENT16),k}function R(I,E){return f(I)===!0||I.isFramebufferTexture&&I.minFilter!==ci&&I.minFilter!==Vt?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function w(I){let E=I.target;E.removeEventListener("dispose",w),b(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&d.delete(E)}function _(I){let E=I.target;E.removeEventListener("dispose",_),D(E)}function b(I){let E=r.get(I);if(E.__webglInit===void 0)return;let k=I.source,ae=p.get(k);if(ae){let ue=ae[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&N(I),Object.keys(ae).length===0&&p.delete(k)}r.remove(I)}function N(I){let E=r.get(I);e.deleteTexture(E.__webglTexture);let k=I.source,ae=p.get(k);delete ae[E.__cacheKey],s.memory.textures--}function D(I){let E=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let ue=0;ue<E.__webglFramebuffer[ae].length;ue++)e.deleteFramebuffer(E.__webglFramebuffer[ae][ue]);else e.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)e.deleteFramebuffer(E.__webglFramebuffer[ae]);else e.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&e.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&e.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&e.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let k=I.textures;for(let ae=0,ue=k.length;ae<ue;ae++){let Te=r.get(k[ae]);Te.__webglTexture&&(e.deleteTexture(Te.__webglTexture),s.memory.textures--),r.remove(k[ae])}r.remove(I)}let O=0;function q(){O=0}function U(){return O}function L(I){O=I}function G(){let I=O;return I>=a.maxTextures&&Ye("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+a.maxTextures),O+=1,I}function F(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function Q(I,E){let k=r.get(I);if(I.isVideoTexture&&gt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&k.__version!==I.version){let ae=I.image;if(ae===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(k,I,E);return}}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,k.__webglTexture,e.TEXTURE0+E)}function V(I,E){let k=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){Le(k,I,E);return}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,k.__webglTexture,e.TEXTURE0+E)}function Z(I,E){let k=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){Le(k,I,E);return}i.bindTexture(e.TEXTURE_3D,k.__webglTexture,e.TEXTURE0+E)}function te(I,E){let k=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&k.__version!==I.version){Ne(k,I,E);return}i.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture,e.TEXTURE0+E)}let ye={[Pa]:e.REPEAT,[fr]:e.CLAMP_TO_EDGE,[vs]:e.MIRRORED_REPEAT},_e={[ci]:e.NEAREST,[Zc]:e.NEAREST_MIPMAP_NEAREST,[pn]:e.NEAREST_MIPMAP_LINEAR,[Vt]:e.LINEAR,[us]:e.LINEAR_MIPMAP_NEAREST,[Lr]:e.LINEAR_MIPMAP_LINEAR},Ue={[og]:e.NEVER,[dg]:e.ALWAYS,[lg]:e.LESS,[rh]:e.LEQUAL,[cg]:e.EQUAL,[ah]:e.GEQUAL,[hg]:e.GREATER,[ug]:e.NOTEQUAL};function Ge(I,E){if(E.type===er&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Vt||E.magFilter===us||E.magFilter===pn||E.magFilter===Lr||E.minFilter===Vt||E.minFilter===us||E.minFilter===pn||E.minFilter===Lr)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(I,e.TEXTURE_WRAP_S,ye[E.wrapS]),e.texParameteri(I,e.TEXTURE_WRAP_T,ye[E.wrapT]),(I===e.TEXTURE_3D||I===e.TEXTURE_2D_ARRAY)&&e.texParameteri(I,e.TEXTURE_WRAP_R,ye[E.wrapR]),e.texParameteri(I,e.TEXTURE_MAG_FILTER,_e[E.magFilter]),e.texParameteri(I,e.TEXTURE_MIN_FILTER,_e[E.minFilter]),E.compareFunction&&(e.texParameteri(I,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(I,e.TEXTURE_COMPARE_FUNC,Ue[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ci||E.minFilter!==pn&&E.minFilter!==Lr||E.type===er&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");e.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ie(I,E){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",w));let ae=E.source,ue=p.get(ae);ue===void 0&&(ue={},p.set(ae,ue));let Te=F(E);if(Te!==I.__cacheKey){ue[Te]===void 0&&(ue[Te]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,k=!0),ue[Te].usedTimes++;let Ie=ue[I.__cacheKey];Ie!==void 0&&(ue[I.__cacheKey].usedTimes--,Ie.usedTimes===0&&N(E)),I.__cacheKey=Te,I.__webglTexture=ue[Te].texture}return k}function se(I,E,k){return Math.floor(Math.floor(I/k)/E)}function pe(I,E,k,ae){let ue=I.updateRanges;if(ue.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,E.width,E.height,k,ae,E.data);else{ue.sort((Ee,He)=>Ee.start-He.start);let Te=0;for(let Ee=1;Ee<ue.length;Ee++){let He=ue[Te],me=ue[Ee],Xe=He.start+He.count,qe=se(me.start,E.width,4),it=se(He.start,E.width,4);me.start<=Xe+1&&qe===it&&se(me.start+me.count-1,E.width,4)===qe?He.count=Math.max(He.count,me.start+me.count-He.start):(++Te,ue[Te]=me)}ue.length=Te+1;let Ie=i.getParameter(e.UNPACK_ROW_LENGTH),X=i.getParameter(e.UNPACK_SKIP_PIXELS),xe=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,E.width);for(let Ee=0,He=ue.length;Ee<He;Ee++){let me=ue[Ee],Xe=Math.floor(me.start/4),qe=Math.ceil(me.count/4),it=Xe%E.width,z=Math.floor(Xe/E.width),S=qe;i.pixelStorei(e.UNPACK_SKIP_PIXELS,it),i.pixelStorei(e.UNPACK_SKIP_ROWS,z),i.texSubImage2D(e.TEXTURE_2D,0,it,z,S,1,k,ae,E.data)}I.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,Ie),i.pixelStorei(e.UNPACK_SKIP_PIXELS,X),i.pixelStorei(e.UNPACK_SKIP_ROWS,xe)}}function Le(I,E,k){let ae=e.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=e.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=e.TEXTURE_3D);let ue=ie(I,E),Te=E.source;i.bindTexture(ae,I.__webglTexture,e.TEXTURE0+k);let Ie=r.get(Te);if(Te.version!==Ie.__version||ue===!0){if(i.activeTexture(e.TEXTURE0+k),!(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)){let P=_t.getPrimaries(_t.workingColorSpace),H=E.colorSpace===ma?null:_t.getPrimaries(E.colorSpace),K=E.colorSpace===ma||P===H?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,K)}i.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment);let X=m(E.image,!1,a.maxTextureSize);X=ut(E,X);let xe=n.convert(E.format,E.colorSpace),Ee=n.convert(E.type),He=v(E.internalFormat,xe,Ee,E.normalized,E.colorSpace,E.isVideoTexture);Ge(ae,E);let me,Xe=E.mipmaps,qe=E.isVideoTexture!==!0,it=Ie.__version===void 0||ue===!0,z=Te.dataReady,S=R(E,X);if(E.isDepthTexture)He=T(E.format===wa,E.type),it&&(qe?i.texStorage2D(e.TEXTURE_2D,1,He,X.width,X.height):i.texImage2D(e.TEXTURE_2D,0,He,X.width,X.height,0,xe,Ee,null));else if(E.isDataTexture)if(Xe.length>0){qe&&it&&i.texStorage2D(e.TEXTURE_2D,S,He,Xe[0].width,Xe[0].height);for(let P=0,H=Xe.length;P<H;P++)me=Xe[P],qe?z&&i.texSubImage2D(e.TEXTURE_2D,P,0,0,me.width,me.height,xe,Ee,me.data):i.texImage2D(e.TEXTURE_2D,P,He,me.width,me.height,0,xe,Ee,me.data);E.generateMipmaps=!1}else qe?(it&&i.texStorage2D(e.TEXTURE_2D,S,He,X.width,X.height),z&&pe(E,X,xe,Ee)):i.texImage2D(e.TEXTURE_2D,0,He,X.width,X.height,0,xe,Ee,X.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){qe&&it&&i.texStorage3D(e.TEXTURE_2D_ARRAY,S,He,Xe[0].width,Xe[0].height,X.depth);for(let P=0,H=Xe.length;P<H;P++)if(me=Xe[P],E.format!==tr)if(xe!==null)if(qe){if(z)if(E.layerUpdates.size>0){let K=Ud(me.width,me.height,E.format,E.type);for(let re of E.layerUpdates){let j=me.data.subarray(re*K/me.data.BYTES_PER_ELEMENT,(re+1)*K/me.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,P,0,0,re,me.width,me.height,1,xe,j)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,P,0,0,0,me.width,me.height,X.depth,xe,me.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,P,He,me.width,me.height,X.depth,0,me.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?z&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,P,0,0,0,me.width,me.height,X.depth,xe,Ee,me.data):i.texImage3D(e.TEXTURE_2D_ARRAY,P,He,me.width,me.height,X.depth,0,xe,Ee,me.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{qe&&it&&i.texStorage2D(e.TEXTURE_2D,S,He,Xe[0].width,Xe[0].height);for(let P=0,H=Xe.length;P<H;P++)me=Xe[P],E.format!==tr?xe!==null?qe?z&&i.compressedTexSubImage2D(e.TEXTURE_2D,P,0,0,me.width,me.height,xe,me.data):i.compressedTexImage2D(e.TEXTURE_2D,P,He,me.width,me.height,0,me.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?z&&i.texSubImage2D(e.TEXTURE_2D,P,0,0,me.width,me.height,xe,Ee,me.data):i.texImage2D(e.TEXTURE_2D,P,He,me.width,me.height,0,xe,Ee,me.data)}else if(E.isDataArrayTexture)if(qe){if(it&&i.texStorage3D(e.TEXTURE_2D_ARRAY,S,He,X.width,X.height,X.depth),z)if(E.layerUpdates.size>0){let P=Ud(X.width,X.height,E.format,E.type);for(let H of E.layerUpdates){let K=X.data.subarray(H*P/X.data.BYTES_PER_ELEMENT,(H+1)*P/X.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,H,X.width,X.height,1,xe,Ee,K)}E.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,xe,Ee,X.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,He,X.width,X.height,X.depth,0,xe,Ee,X.data);else if(E.isData3DTexture)qe?(it&&i.texStorage3D(e.TEXTURE_3D,S,He,X.width,X.height,X.depth),z&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,xe,Ee,X.data)):i.texImage3D(e.TEXTURE_3D,0,He,X.width,X.height,X.depth,0,xe,Ee,X.data);else if(E.isFramebufferTexture){if(it)if(qe)i.texStorage2D(e.TEXTURE_2D,S,He,X.width,X.height);else{let P=X.width,H=X.height;for(let K=0;K<S;K++)i.texImage2D(e.TEXTURE_2D,K,He,P,H,0,xe,Ee,null),P>>=1,H>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in e){let P=e.canvas;if(P.hasAttribute("layoutsubtree")||P.setAttribute("layoutsubtree","true"),X.parentNode!==P){P.appendChild(X),d.add(E),P.onpaint=H=>{let K=H.changedElements;for(let re of d)K.includes(re.image)&&(re.needsUpdate=!0)},P.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,X);else{let H=e.RGBA,K=e.RGBA,re=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,H,K,re,X)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(qe&&it){let P=ct(Xe[0]);i.texStorage2D(e.TEXTURE_2D,S,He,P.width,P.height)}for(let P=0,H=Xe.length;P<H;P++)me=Xe[P],qe?z&&i.texSubImage2D(e.TEXTURE_2D,P,0,0,xe,Ee,me):i.texImage2D(e.TEXTURE_2D,P,He,xe,Ee,me);E.generateMipmaps=!1}else if(qe){if(it){let P=ct(X);i.texStorage2D(e.TEXTURE_2D,S,He,P.width,P.height)}z&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,xe,Ee,X)}else i.texImage2D(e.TEXTURE_2D,0,He,xe,Ee,X);f(E)&&M(ae),Ie.__version=Te.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Ne(I,E,k){if(E.image.length!==6)return;let ae=ie(I,E),ue=E.source;i.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+k);let Te=r.get(ue);if(ue.version!==Te.__version||ae===!0){i.activeTexture(e.TEXTURE0+k);let Ie=_t.getPrimaries(_t.workingColorSpace),X=E.colorSpace===ma?null:_t.getPrimaries(E.colorSpace),xe=E.colorSpace===ma||Ie===X?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Ee=E.isCompressedTexture||E.image[0].isCompressedTexture,He=E.image[0]&&E.image[0].isDataTexture,me=[];for(let j=0;j<6;j++)!Ee&&!He?me[j]=m(E.image[j],!0,a.maxCubemapSize):me[j]=He?E.image[j].image:E.image[j],me[j]=ut(E,me[j]);let Xe=me[0],qe=n.convert(E.format,E.colorSpace),it=n.convert(E.type),z=v(E.internalFormat,qe,it,E.normalized,E.colorSpace),S=E.isVideoTexture!==!0,P=Te.__version===void 0||ae===!0,H=ue.dataReady,K=R(E,Xe);Ge(e.TEXTURE_CUBE_MAP,E);let re;if(Ee){S&&P&&i.texStorage2D(e.TEXTURE_CUBE_MAP,K,z,Xe.width,Xe.height);for(let j=0;j<6;j++){re=me[j].mipmaps;for(let he=0;he<re.length;he++){let ve=re[he];E.format!==tr?qe!==null?S?H&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,0,0,ve.width,ve.height,qe,ve.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,z,ve.width,ve.height,0,ve.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):S?H&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,0,0,ve.width,ve.height,qe,it,ve.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,z,ve.width,ve.height,0,qe,it,ve.data)}}}else{if(re=E.mipmaps,S&&P){re.length>0&&K++;let j=ct(me[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,K,z,j.width,j.height)}for(let j=0;j<6;j++)if(He){S?H&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,me[j].width,me[j].height,qe,it,me[j].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,z,me[j].width,me[j].height,0,qe,it,me[j].data);for(let he=0;he<re.length;he++){let ve=re[he].image[j].image;S?H&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,0,0,ve.width,ve.height,qe,it,ve.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,z,ve.width,ve.height,0,qe,it,ve.data)}}else{S?H&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,qe,it,me[j]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,z,qe,it,me[j]);for(let he=0;he<re.length;he++){let ve=re[he];S?H&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,0,0,qe,it,ve.image[j]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,z,qe,it,ve.image[j])}}}f(E)&&M(e.TEXTURE_CUBE_MAP),Te.__version=ue.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function fe(I,E,k,ae,ue,Te){let Ie=n.convert(k.format,k.colorSpace),X=n.convert(k.type),xe=v(k.internalFormat,Ie,X,k.normalized,k.colorSpace),Ee=r.get(E),He=r.get(k);if(He.__renderTarget=E,!Ee.__hasExternalTextures){let me=Math.max(1,E.width>>Te),Xe=Math.max(1,E.height>>Te);ue===e.TEXTURE_3D||ue===e.TEXTURE_2D_ARRAY?i.texImage3D(ue,Te,xe,me,Xe,E.depth,0,Ie,X,null):i.texImage2D(ue,Te,xe,me,Xe,0,Ie,X,null)}i.bindFramebuffer(e.FRAMEBUFFER,I),B(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ae,ue,He.__webglTexture,0,at(E)):(ue===e.TEXTURE_2D||ue>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,ae,ue,He.__webglTexture,Te),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Oe(I,E,k){if(e.bindRenderbuffer(e.RENDERBUFFER,I),E.depthBuffer){let ae=E.depthTexture,ue=ae&&ae.isDepthTexture?ae.type:null,Te=T(E.stencilBuffer,ue),Ie=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;B(E)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,at(E),Te,E.width,E.height):k?e.renderbufferStorageMultisample(e.RENDERBUFFER,at(E),Te,E.width,E.height):e.renderbufferStorage(e.RENDERBUFFER,Te,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Ie,e.RENDERBUFFER,I)}else{let ae=E.textures;for(let ue=0;ue<ae.length;ue++){let Te=ae[ue],Ie=n.convert(Te.format,Te.colorSpace),X=n.convert(Te.type),xe=v(Te.internalFormat,Ie,X,Te.normalized,Te.colorSpace);B(E)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,at(E),xe,E.width,E.height):k?e.renderbufferStorageMultisample(e.RENDERBUFFER,at(E),xe,E.width,E.height):e.renderbufferStorage(e.RENDERBUFFER,xe,E.width,E.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ce(I,E,k){let ae=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ue=r.get(E.depthTexture);if(ue.__renderTarget=E,(!ue.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ae){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,E.depthTexture.addEventListener("dispose",w)),ue.__webglTexture===void 0){ue.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,ue.__webglTexture),Ge(e.TEXTURE_CUBE_MAP,E.depthTexture);let Ee=n.convert(E.depthTexture.format),He=n.convert(E.depthTexture.type),me;E.depthTexture.format===ia?me=e.DEPTH_COMPONENT24:E.depthTexture.format===wa&&(me=e.DEPTH24_STENCIL8);for(let Xe=0;Xe<6;Xe++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,me,E.width,E.height,0,Ee,He,null)}}else Q(E.depthTexture,0);let Te=ue.__webglTexture,Ie=at(E),X=ae?e.TEXTURE_CUBE_MAP_POSITIVE_X+k:e.TEXTURE_2D,xe=E.depthTexture.format===wa?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(E.depthTexture.format===ia)B(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,xe,X,Te,0,Ie):e.framebufferTexture2D(e.FRAMEBUFFER,xe,X,Te,0);else if(E.depthTexture.format===wa)B(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,xe,X,Te,0,Ie):e.framebufferTexture2D(e.FRAMEBUFFER,xe,X,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(I){let E=r.get(I),k=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let ae=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ae){let ue=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ae.removeEventListener("dispose",ue)};ae.addEventListener("dispose",ue),E.__depthDisposeCallback=ue}E.__boundDepthTexture=ae}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(k)for(let ae=0;ae<6;ae++)ce(E.__webglFramebuffer[ae],I,ae);else{let ae=I.texture.mipmaps;ae&&ae.length>0?ce(E.__webglFramebuffer[0],I,0):ce(E.__webglFramebuffer,I,0)}else if(k){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]===void 0)E.__webglDepthbuffer[ae]=e.createRenderbuffer(),Oe(E.__webglDepthbuffer[ae],I,!1);else{let ue=I.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer[ae];e.bindRenderbuffer(e.RENDERBUFFER,Te),e.framebufferRenderbuffer(e.FRAMEBUFFER,ue,e.RENDERBUFFER,Te)}}else{let ae=I.texture.mipmaps;if(ae&&ae.length>0?i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=e.createRenderbuffer(),Oe(E.__webglDepthbuffer,I,!1);else{let ue=I.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Te),e.framebufferRenderbuffer(e.FRAMEBUFFER,ue,e.RENDERBUFFER,Te)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function le(I,E,k){let ae=r.get(I);E!==void 0&&fe(ae.__webglFramebuffer,I,I.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),k!==void 0&&oe(I)}function Re(I){let E=I.texture,k=r.get(I),ae=r.get(E);I.addEventListener("dispose",_);let ue=I.textures,Te=I.isWebGLCubeRenderTarget===!0,Ie=ue.length>1;if(Ie||(ae.__webglTexture===void 0&&(ae.__webglTexture=e.createTexture()),ae.__version=E.version,s.memory.textures++),Te){k.__webglFramebuffer=[];for(let X=0;X<6;X++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[X]=[];for(let xe=0;xe<E.mipmaps.length;xe++)k.__webglFramebuffer[X][xe]=e.createFramebuffer()}else k.__webglFramebuffer[X]=e.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let X=0;X<E.mipmaps.length;X++)k.__webglFramebuffer[X]=e.createFramebuffer()}else k.__webglFramebuffer=e.createFramebuffer();if(Ie)for(let X=0,xe=ue.length;X<xe;X++){let Ee=r.get(ue[X]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=e.createTexture(),s.memory.textures++)}if(I.samples>0&&B(I)===!1){k.__webglMultisampledFramebuffer=e.createFramebuffer(),k.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let X=0;X<ue.length;X++){let xe=ue[X];k.__webglColorRenderbuffer[X]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,k.__webglColorRenderbuffer[X]);let Ee=n.convert(xe.format,xe.colorSpace),He=n.convert(xe.type),me=v(xe.internalFormat,Ee,He,xe.normalized,xe.colorSpace,I.isXRRenderTarget===!0),Xe=at(I);e.renderbufferStorageMultisample(e.RENDERBUFFER,Xe,me,I.width,I.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+X,e.RENDERBUFFER,k.__webglColorRenderbuffer[X])}e.bindRenderbuffer(e.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=e.createRenderbuffer(),Oe(k.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Te){i.bindTexture(e.TEXTURE_CUBE_MAP,ae.__webglTexture),Ge(e.TEXTURE_CUBE_MAP,E);for(let X=0;X<6;X++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)fe(k.__webglFramebuffer[X][xe],I,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe);else fe(k.__webglFramebuffer[X],I,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);f(E)&&M(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ie){for(let X=0,xe=ue.length;X<xe;X++){let Ee=ue[X],He=r.get(Ee),me=e.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(me,He.__webglTexture),Ge(me,Ee),fe(k.__webglFramebuffer,I,Ee,e.COLOR_ATTACHMENT0+X,me,0),f(Ee)&&M(me)}i.unbindTexture()}else{let X=e.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(X=I.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(X,ae.__webglTexture),Ge(X,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)fe(k.__webglFramebuffer[xe],I,E,e.COLOR_ATTACHMENT0,X,xe);else fe(k.__webglFramebuffer,I,E,e.COLOR_ATTACHMENT0,X,0);f(E)&&M(X),i.unbindTexture()}I.depthBuffer&&oe(I)}function Ce(I){let E=I.textures;for(let k=0,ae=E.length;k<ae;k++){let ue=E[k];if(f(ue)){let Te=y(I),Ie=r.get(ue).__webglTexture;i.bindTexture(Te,Ie),M(Te),i.unbindTexture()}}}let Fe=[],We=[];function Qe(I){if(I.samples>0){if(B(I)===!1){let E=I.textures,k=I.width,ae=I.height,ue=e.COLOR_BUFFER_BIT,Te=I.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ie=r.get(I),X=E.length>1;if(X)for(let Ee=0;Ee<E.length;Ee++)i.bindFramebuffer(e.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Ie.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);let xe=I.texture.mipmaps;xe&&xe.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ee=0;Ee<E.length;Ee++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ue|=e.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ue|=e.STENCIL_BUFFER_BIT)),X){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ee]);let He=r.get(E[Ee]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,He,0)}e.blitFramebuffer(0,0,k,ae,0,0,k,ae,ue,e.NEAREST),l===!0&&(Fe.length=0,We.length=0,Fe.push(e.COLOR_ATTACHMENT0+Ee),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Fe.push(Te),We.push(Te),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,We)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Fe))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),X)for(let Ee=0;Ee<E.length;Ee++){i.bindFramebuffer(e.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ee]);let He=r.get(E[Ee]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Ie.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.TEXTURE_2D,He,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let E=I.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[E])}}}function at(I){return Math.min(a.maxSamples,I.samples)}function B(I){let E=r.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function gt(I){let E=s.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function ut(I,E){let k=I.colorSpace,ae=I.format,ue=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==Gi&&k!==ma&&(_t.getTransfer(k)===Pt?(ae!==tr||ue!==qi)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",k)),E}function ct(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=q,this.getTextureUnits=U,this.setTextureUnits=L,this.setTexture2D=Q,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=te,this.rebindTextures=le,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=B,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function bM(e,t){function i(r,a=ma){let n,s=_t.getTransfer(a);if(r===qi)return e.UNSIGNED_BYTE;if(r===$c)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Jc)return e.UNSIGNED_SHORT_5_5_5_1;if(r===hp)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===up)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===lp)return e.BYTE;if(r===cp)return e.SHORT;if(r===_s)return e.UNSIGNED_SHORT;if(r===Kc)return e.INT;if(r===Nr)return e.UNSIGNED_INT;if(r===er)return e.FLOAT;if(r===ui)return e.HALF_FLOAT;if(r===dp)return e.ALPHA;if(r===pp)return e.RGB;if(r===tr)return e.RGBA;if(r===ia)return e.DEPTH_COMPONENT;if(r===wa)return e.DEPTH_STENCIL;if(r===ws)return e.RED;if(r===Qc)return e.RED_INTEGER;if(r===La)return e.RG;if(r===eh)return e.RG_INTEGER;if(r===th)return e.RGBA_INTEGER;if(r===Mo||r===bo||r===So||r===To)if(s===Pt)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Mo)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bo)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===So)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===To)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Mo)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bo)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===So)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===To)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pc||r===fc||r===mc||r===gc)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===pc)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fc)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mc)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gc)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vc||r===_c||r===xc||r===yc||r===Mc||r===Co||r===bc)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===vc||r===_c)return s===Pt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===xc)return s===Pt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===yc)return n.COMPRESSED_R11_EAC;if(r===Mc)return n.COMPRESSED_SIGNED_R11_EAC;if(r===Co)return n.COMPRESSED_RG11_EAC;if(r===bc)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Sc||r===Tc||r===Ec||r===wc||r===Ac||r===Rc||r===Cc||r===Ic||r===Pc||r===Lc||r===Dc||r===Nc||r===Uc||r===Oc)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Sc)return s===Pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Tc)return s===Pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ec)return s===Pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wc)return s===Pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ac)return s===Pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rc)return s===Pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Cc)return s===Pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ic)return s===Pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pc)return s===Pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lc)return s===Pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Dc)return s===Pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Nc)return s===Pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Uc)return s===Pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Oc)return s===Pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fc||r===Bc||r===zc)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===Fc)return s===Pt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bc)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===zc)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hc||r===kc||r===Io||r===Gc)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===Hc)return n.COMPRESSED_RED_RGTC1_EXT;if(r===kc)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Io)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gc)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xs?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var SM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TM=`
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

}`,EM=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Bp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ft({vertexShader:SM,fragmentShader:TM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new ri(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wM=class extends Na{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,c=null,h=null,d=null,u=null,p=null,g=typeof XRWebGLBinding<"u",x=new EM,m={},f=t.getContextAttributes(),M=null,y=null,v=[],T=[],R=new de,w=null,_=null,b=new Ai;b.viewport=new Dt;let N=new Ai;N.viewport=new Dt;let D=[b,N],O=new Tv,q=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let se=v[ie];return se===void 0&&(se=new Pl,v[ie]=se),se.getTargetRaySpace()},this.getControllerGrip=function(ie){let se=v[ie];return se===void 0&&(se=new Pl,v[ie]=se),se.getGripSpace()},this.getHand=function(ie){let se=v[ie];return se===void 0&&(se=new Pl,v[ie]=se),se.getHandSpace()};function L(ie){let se=T.indexOf(ie.inputSource);if(se===-1)return;let pe=v[se];pe!==void 0&&(pe.update(ie.inputSource,ie.frame,l||n),pe.dispatchEvent({type:ie.type,data:ie.inputSource}))}function G(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",F);for(let ie=0;ie<v.length;ie++){let se=T[ie];se!==null&&(T[ie]=null,v[ie].disconnect(se))}q=null,U=null,x.reset();for(let ie in m)delete m[ie];if(e.setRenderTarget(M),u=null,d=null,h=null,r=null,y=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),_!==null){let ie=_.camera;ie.fov=_.fov,ie.zoom=_.zoom,ie.updateProjectionMatrix(),_=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){a=ie,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){s=ie,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(ie){l=ie},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",G),r.addEventListener("inputsourceschange",F),f.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,pe=null,Le=null;f.depth&&(Le=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=f.stencil?wa:ia,pe=f.stencil?xs:Nr);let Ne={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:a};h=this.getBinding(),d=h.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new vi(d.textureWidth,d.textureHeight,{format:tr,type:qi,depthTexture:new bs(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let se={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new vi(u.framebufferWidth,u.framebufferHeight,{format:tr,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(ie){for(let se=0;se<ie.removed.length;se++){let pe=ie.removed[se],Le=T.indexOf(pe);Le>=0&&(T[Le]=null,v[Le].disconnect(pe))}for(let se=0;se<ie.added.length;se++){let pe=ie.added[se],Le=T.indexOf(pe);if(Le===-1){for(let fe=0;fe<v.length;fe++)if(fe>=T.length){T.push(pe),Le=fe;break}else if(T[fe]===null){T[fe]=pe,Le=fe;break}if(Le===-1)break}let Ne=v[Le];Ne&&Ne.connect(pe)}}let Q=new C,V=new C;function Z(ie,se,pe){Q.setFromMatrixPosition(se.matrixWorld),V.setFromMatrixPosition(pe.matrixWorld);let Le=Q.distanceTo(V),Ne=se.projectionMatrix.elements,fe=pe.projectionMatrix.elements,Oe=Ne[14]/(Ne[10]-1),ce=Ne[14]/(Ne[10]+1),oe=(Ne[9]+1)/Ne[5],le=(Ne[9]-1)/Ne[5],Re=(Ne[8]-1)/Ne[0],Ce=(fe[8]+1)/fe[0],Fe=Oe*Re,We=Oe*Ce,Qe=Le/(-Re+Ce),at=Qe*-Re;if(se.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(at),ie.translateZ(Qe),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ne[10]===-1)ie.projectionMatrix.copy(se.projectionMatrix),ie.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let B=Oe+Qe,gt=ce+Qe,ut=Fe-at,ct=We+(Le-at),I=oe*ce/gt*B,E=le*ce/gt*B;ie.projectionMatrix.makePerspective(ut,ct,I,E,B,gt),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function te(ie,se){se===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(se.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let se=ie.near,pe=ie.far;x.texture!==null&&(x.depthNear>0&&(se=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),O.near=N.near=b.near=se,O.far=N.far=b.far=pe,(q!==O.near||U!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),q=O.near,U=O.far),O.layers.mask=ie.layers.mask|6,b.layers.mask=O.layers.mask&-5,N.layers.mask=O.layers.mask&-3;let Le=ie.parent,Ne=O.cameras;te(O,Le);for(let fe=0;fe<Ne.length;fe++)te(Ne[fe],Le);Ne.length===2?Z(O,b,N):O.projectionMatrix.copy(b.projectionMatrix),_===null&&ie.isPerspectiveCamera&&(_={camera:ie,fov:ie.fov,zoom:ie.zoom}),ye(ie,O,Le)};function ye(ie,se,pe){pe===null?ie.matrix.copy(se.matrixWorld):(ie.matrix.copy(pe.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(se.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(se.projectionMatrix),ie.projectionMatrixInverse.copy(se.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Rn*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&u===null))return o},this.setFoveation=function(ie){o=ie,d!==null&&(d.fixedFoveation=ie),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(O)},this.getCameraTexture=function(ie){return m[ie]};let _e=null;function Ue(ie,se){if(c=se.getViewerPose(l||n),p=se,c!==null){let pe=c.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let Le=!1;pe.length!==O.cameras.length&&(O.cameras.length=0,Le=!0);for(let fe=0;fe<pe.length;fe++){let Oe=pe[fe],ce=null;if(u!==null)ce=u.getViewport(Oe);else{let le=h.getViewSubImage(d,Oe);ce=le.viewport,fe===0&&(e.setRenderTargetTextures(y,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(y))}let oe=D[fe];oe===void 0&&(oe=new Ai,oe.layers.enable(fe),oe.viewport=new Dt,D[fe]=oe),oe.matrix.fromArray(Oe.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Oe.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ce.x,ce.y,ce.width,ce.height),fe===0&&(O.matrix.copy(oe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Le===!0&&O.cameras.push(oe)}let Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){h=i.getBinding();let fe=h.getDepthInformation(pe[0]);fe&&fe.isValid&&fe.texture&&x.init(fe,r.renderState)}if(Ne&&Ne.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let fe=0;fe<pe.length;fe++){let Oe=pe[fe].camera;if(Oe){let ce=m[Oe];ce||(ce=new Bp,m[Oe]=ce);let oe=h.getCameraImage(Oe);ce.sourceTexture=oe}}}}for(let pe=0;pe<v.length;pe++){let Le=T[pe],Ne=v[pe];Le!==null&&Ne!==void 0&&Ne.update(Le,se,l||n)}_e&&_e(ie,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),p=null}let Ge=new Ef;Ge.setAnimationLoop(Ue),this.setAnimationLoop=function(ie){_e=ie},this.dispose=function(){}}},AM=new Ze,Lf=new dt;Lf.set(-1,0,0,0,1,0,0,0,1);function RM(e,t){function i(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,vf(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,M,y,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?n(m,f):f.isMeshLambertMaterial?(n(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(n(m,f),d(m,f)):f.isMeshPhongMaterial?(n(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(n(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(n(m,f),g(m,f)):f.isMeshDepthMaterial?n(m,f):f.isMeshDistanceMaterial?(n(m,f),x(m,f)):f.isMeshNormalMaterial?n(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,i(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Li&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,i(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Li&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,i(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,i(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=t.get(f),y=M.envMap,v=M.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(AM.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Lf),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=y*.5,f.map&&(m.map.value=f.map,i(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Li&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function CM(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let R=T.program;r.uniformBlockBinding(v,R)}function c(v,T){let R=a[v.id];R===void 0&&(m(v),R=h(v),a[v.id]=R,v.addEventListener("dispose",M));let w=T.program;r.updateUBOMapping(v,w);let _=t.render.frame;n[v.id]!==_&&(u(v),n[v.id]=_)}function h(v){let T=d();v.__bindingPointIndex=T;let R=e.createBuffer(),w=v.__size,_=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,R),e.bufferData(e.UNIFORM_BUFFER,w,_),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,R),R}function d(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let T=a[v.id],R=v.uniforms,w=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let _=0,b=R.length;_<b;_++){let N=R[_];if(Array.isArray(N))for(let D=0,O=N.length;D<O;D++)p(N[D],_,D,w);else p(N,_,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(v,T,R,w){if(x(v,T,R,w)===!0){let _=v.__offset,b=v.value;if(Array.isArray(b)){let N=0;for(let D=0;D<b.length;D++){let O=b[D],q=f(O);g(O,v.__data,N),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,_,v.__data)}}function g(v,T,R){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,R)}function x(v,T,R,w){let _=v.value,b=T+"_"+R;if(w[b]===void 0)return typeof _=="number"||typeof _=="boolean"?w[b]=_:ArrayBuffer.isView(_)?w[b]=_.slice():w[b]=_.clone(),!0;{let N=w[b];if(typeof _=="number"||typeof _=="boolean"){if(N!==_)return w[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(N.equals(_)===!1)return N.copy(_),!0}}return!1}function m(v){let T=v.uniforms,R=0,w=16;for(let b=0,N=T.length;b<N;b++){let D=Array.isArray(T[b])?T[b]:[T[b]];for(let O=0,q=D.length;O<q;O++){let U=D[O],L=Array.isArray(U.value)?U.value:[U.value];for(let G=0,F=L.length;G<F;G++){let Q=L[G],V=f(Q),Z=R%w,te=Z%V.boundary,ye=Z+te;R+=te,ye!==0&&w-ye<V.storage&&(R+=w-ye),U.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=R,R+=V.storage}}}let _=R%w;return _>0&&(R+=w-_),v.__size=R,v.__cache={},this}function f(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",v),T}function M(v){let T=v.target;T.removeEventListener("dispose",M);let R=s.indexOf(T.__bindingPointIndex);s.splice(R,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete n[T.id]}function y(){for(let v in a)e.deleteBuffer(a[v]);s=[],a={},n={}}return{bind:l,update:c,dispose:y}}var IM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ir=null;function PM(){return Ir===null&&(Ir=new va(IM,16,16,La,ui),Ir.name="DFG_LUT",Ir.minFilter=Vt,Ir.magFilter=Vt,Ir.wrapS=fr,Ir.wrapT=fr,Ir.generateMipmaps=!1,Ir.needsUpdate=!0),Ir}var Df=class{constructor(e={}){let{canvas:t=mg(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=qi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=n;let g=u,x=new Set([th,eh,Qc]),m=new Set([qi,Nr,_s,xs,$c,Jc]),f=new Uint32Array(4),M=new Int32Array(4),y=new C,v=null,T=null,R=[],w=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,N=!1,D=null,O=null,q=null,U=null;this._outputColorSpace=Gt;let L=0,G=0,F=null,Q=-1,V=null,Z=new Dt,te=new Dt,ye=null,_e=new be(0),Ue=0,Ge=t.width,ie=t.height,se=1,pe=null,Le=null,Ne=new Dt(0,0,Ge,ie),fe=new Dt(0,0,Ge,ie),Oe=!1,ce=new Cn,oe=!1,le=!1,Re=new Ze,Ce=new C,Fe=new Dt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function at(){return F===null?se:1}let B=i;function gt(A,W){return t.getContext(A,W)}let ut,ct,I,E,k,ae,ue,Te,Ie,X,xe,Ee,He,me,Xe,qe,it,z,S,P,H,K,re;try{let A={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",ke,!1),B===null){let W="webgl2";if(B=gt(W,A),B===null)throw gt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}j()}catch(A){throw t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),ot("WebGLRenderer: "+A.message),A}function j(){ut=new Py(B),ut.init(),H=new bM(B,ut),ct=new My(B,ut,e,H),I=new yM(B,ut),ct.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),O=B.createFramebuffer(),q=B.createFramebuffer(),U=B.createFramebuffer(),E=new Ny(B),k=new sM,ae=new MM(B,ut,I,k,ct,H,E),ue=new Iy(b),Te=new Ov(B),K=new xy(B,Te),Ie=new Ly(B,Te,E,K),X=new Oy(B,Ie,Te,K,E),z=new Uy(B,ct,ae),Xe=new by(k),xe=new nM(b,ue,ut,ct,K,Xe),Ee=new RM(b,k),He=new lM,me=new fM(ut),it=new _y(b,ue,I,X,p,o),qe=new xM(b,X,ct),re=new CM(B,E,ct,I),S=new yy(B,ut,E),P=new Dy(B,ut,E),E.programs=xe.programs,b.capabilities=ct,b.extensions=ut,b.properties=k,b.renderLists=He,b.shadowMap=qe,b.state=I,b.info=E}g!==qi&&(_=new By(g,t.width,t.height,s,r,a));let he=new wM(b,B);this.xr=he,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let A=ut.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ut.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(A){A!==void 0&&(se=A,this.setSize(Ge,ie,!1))},this.getSize=function(A){return A.set(Ge,ie)},this.setSize=function(A,W,ne=!0){if(he.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=A,ie=W,t.width=Math.floor(A*se),t.height=Math.floor(W*se),ne===!0&&(t.style.width=A+"px",t.style.height=W+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(Ge*se,ie*se).floor()},this.setDrawingBufferSize=function(A,W,ne){Ge=A,ie=W,se=ne,t.width=Math.floor(A*ne),t.height=Math.floor(W*ne),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(g===qi){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Z)},this.getViewport=function(A){return A.copy(Ne)},this.setViewport=function(A,W,ne,ee){A.isVector4?Ne.set(A.x,A.y,A.z,A.w):Ne.set(A,W,ne,ee),I.viewport(Z.copy(Ne).multiplyScalar(se).round())},this.getScissor=function(A){return A.copy(fe)},this.setScissor=function(A,W,ne,ee){A.isVector4?fe.set(A.x,A.y,A.z,A.w):fe.set(A,W,ne,ee),I.scissor(te.copy(fe).multiplyScalar(se).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(A){I.setScissorTest(Oe=A)},this.setOpaqueSort=function(A){pe=A},this.setTransparentSort=function(A){Le=A},this.getClearColor=function(A){return A.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,ne=!0){let ee=0;if(A){let J=!1;if(F!==null){let Se=F.texture.format;J=x.has(Se)}if(J){let Se=F.texture.type,Ae=m.has(Se),we=it.getClearColor(),Be=it.getClearAlpha(),je=we.r,pt=we.g,xt=we.b;Ae?(f[0]=je,f[1]=pt,f[2]=xt,f[3]=Be,B.clearBufferuiv(B.COLOR,0,f)):(M[0]=je,M[1]=pt,M[2]=xt,M[3]=Be,B.clearBufferiv(B.COLOR,0,M))}else ee|=B.COLOR_BUFFER_BIT}W&&(ee|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(ee|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&B.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),it.dispose(),He.dispose(),me.dispose(),k.dispose(),ue.dispose(),X.dispose(),K.dispose(),re.dispose(),xe.dispose(),he.dispose(),he.removeEventListener("sessionstart",Si),he.removeEventListener("sessionend",ht),zt.stop()};function ve(A){A.preventDefault(),Lo("WebGLRenderer: Context Lost."),N=!0}function nt(){Lo("WebGLRenderer: Context Restored."),N=!1;let A=E.autoReset,W=qe.enabled,ne=qe.autoUpdate,ee=qe.needsUpdate,J=qe.type;j(),E.autoReset=A,qe.enabled=W,qe.autoUpdate=ne,qe.needsUpdate=ee,qe.type=J}function ke(A){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function lt(A){let W=A.target;W.removeEventListener("dispose",lt),Je(W)}function Je(A){Xt(A),k.remove(A)}function Xt(A){let W=k.get(A).programs;W!==void 0&&(W.forEach(function(ne){xe.releaseProgram(ne)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ne,ee,J,Se){W===null&&(W=We);let Ae=J.isMesh&&J.matrixWorld.determinantAffine()<0,we=Ei(A,W,ne,ee,J);I.setMaterial(ee,Ae);let Be=ne.index,je=1;if(ee.wireframe===!0){if(Be=Ie.getWireframeAttribute(ne),Be===void 0)return;je=2}let pt=ne.drawRange,xt=ne.attributes.position,ze=pt.start*je,bt=(pt.start+pt.count)*je;Se!==null&&(ze=Math.max(ze,Se.start*je),bt=Math.min(bt,(Se.start+Se.count)*je)),Be!==null?(ze=Math.max(ze,0),bt=Math.min(bt,Be.count)):xt!=null&&(ze=Math.max(ze,0),bt=Math.min(bt,xt.count));let Zt=bt-ze;if(Zt<0||Zt===1/0)return;K.setup(J,ee,we,ne,Be);let At,Lt=S;if(Be!==null&&(At=Te.get(Be),Lt=P,Lt.setIndex(At)),J.isMesh)ee.wireframe===!0?(I.setLineWidth(ee.wireframeLinewidth*at()),Lt.setMode(B.LINES)):Lt.setMode(B.TRIANGLES);else if(J.isLine){let kt=ee.linewidth;kt===void 0&&(kt=1),I.setLineWidth(kt*at()),J.isLineSegments?Lt.setMode(B.LINES):J.isLineLoop?Lt.setMode(B.LINE_LOOP):Lt.setMode(B.LINE_STRIP)}else J.isPoints?Lt.setMode(B.POINTS):J.isSprite&&Lt.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))Lt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let kt=J._multiDrawStarts,Ve=J._multiDrawCounts,Kt=J._multiDrawCount,wr=Be?Te.get(Be).bytesPerElement:1,Oi=k.get(ee).currentProgram.getUniforms();for(let ki=0;ki<Kt;ki++)Oi.setValue(B,"_gl_DrawID",ki),Lt.render(kt[ki]/wr,Ve[ki])}else if(J.isInstancedMesh)Lt.renderInstances(ze,Zt,J.count);else if(ne.isInstancedBufferGeometry){let kt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ve=Math.min(ne.instanceCount,kt);Lt.renderInstances(ze,Zt,Ve)}else Lt.render(ze,Zt)};function Ci(A,W,ne,ee){D!==null&&A.isNodeMaterial&&D.setObject(ee,A),oe===!0&&Xe.setState(A,ne,!1),A.transparent===!0&&A.side===Ri&&A.forceSinglePass===!1?(A.side=Li,A.needsUpdate=!0,Er(A,W,ee),A.side=ta,A.needsUpdate=!0,Er(A,W,ee),A.side=Ri):Er(A,W,ee)}this.compile=function(A,W,ne=null){ne===null&&(ne=A),D!==null&&D.renderStart(A,W,ne),T=me.get(ne),T.init(W),w.push(T),ne.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),A!==ne&&A.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),T.setupLights(),D!==null&&D.updateLights(T.state.lightsArray),le=this.localClippingEnabled,oe=Xe.init(this.clippingPlanes,le),oe===!0&&Xe.setGlobalState(this.clippingPlanes,W),D!==null&&qe.render(T.state.shadowsArray,ne,W);let ee=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Se=J.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){let we=Se[Ae];Ci(we,ne,W,J),ee.add(we)}else Ci(Se,ne,W,J),ee.add(Se)}),T=w.pop(),D!==null&&D.renderEnd(),ee},this.compileAsync=function(A,W,ne=null){let ee=this.compile(A,W,ne);return new Promise(J=>{function Se(){if(ee.forEach(function(Ae){let we=k.get(Ae).currentProgram;(we===void 0||we.isReady())&&ee.delete(Ae)}),ee.size===0){J(A);return}setTimeout(Se,10)}ut.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let st=null;function Ui(A){st&&st(A)}function Si(){zt.stop()}function ht(){zt.start()}let zt=new Ef;zt.setAnimationLoop(Ui),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(A){st=A,he.setAnimationLoop(A),A===null?zt.stop():zt.start()},he.addEventListener("sessionstart",Si),he.addEventListener("sessionend",ht),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(A,W);let ne=he.enabled===!0&&he.isPresenting===!0,ee=_!==null&&(F===null||ne)&&_.begin(b,F);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(W),W=he.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,W,F),T=me.get(A,w.length),T.init(W),T.state.textureUnits=ae.getTextureUnits(),w.push(T),Re.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ce.setFromProjectionMatrix(Re,mr,W.reversedDepth),le=this.localClippingEnabled,oe=Xe.init(this.clippingPlanes,le),v=He.get(A,R.length),v.init(),R.push(v),he.enabled===!0&&he.isPresenting===!0){let Se=b.xr.getDepthSensingMesh();Se!==null&&Tr(Se,W,-1/0,b.sortObjects)}Tr(A,W,0,b.sortObjects),v.finish(),D!==null&&D.updateLights(T.state.lightsArray),b.sortObjects===!0&&v.sort(pe,Le),Qe=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Qe&&it.addToRenderList(v,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Xe.beginShadows();let J=T.state.shadowsArray;if(qe.render(J,A,W),oe===!0&&Xe.endShadows(),(ee&&_.hasRenderPass())===!1){let Se=v.opaque,Ae=v.transmissive;if(T.setupLights(),W.isArrayCamera){let we=W.cameras;if(Ae.length>0)for(let Be=0,je=we.length;Be<je;Be++){let pt=we[Be];Ti(Se,Ae,A,pt)}Qe&&it.render(A);for(let Be=0,je=we.length;Be<je;Be++){let pt=we[Be];yi(v,A,pt,pt.viewport)}}else Ae.length>0&&Ti(Se,Ae,A,W),Qe&&it.render(A),yi(v,A,W)}F!==null&&G===0&&(ae.updateMultisampleRenderTarget(F),ae.updateRenderTargetMipmap(F)),ee&&_.end(b),A.isScene===!0&&A.onAfterRender(b,A,W),K.resetDefaultState(),Q=-1,V=null,w.pop(),w.length>0?(T=w[w.length-1],ae.setTextureUnits(T.state.textureUnits),oe===!0&&Xe.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?v=R[R.length-1]:v=null,D!==null&&D.renderEnd()};function Tr(A,W,ne,ee){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ce)){ee&&Fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Re);let Se=X.update(A),Ae=A.material;Ae.visible&&v.push(A,Se,Ae,ne,Fe.z,null,W)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ce))){let Se=X.update(A),Ae=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Fe.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Fe.copy(Se.boundingSphere.center)),Fe.applyMatrix4(A.matrixWorld).applyMatrix4(Re)),Array.isArray(Ae)){let we=Se.groups;for(let Be=0,je=we.length;Be<je;Be++){let pt=we[Be],xt=Ae[pt.materialIndex];xt&&xt.visible&&v.push(A,Se,xt,ne,Fe.z,pt,W)}}else Ae.visible&&v.push(A,Se,Ae,ne,Fe.z,null,W)}}let J=A.children;for(let Se=0,Ae=J.length;Se<Ae;Se++)Tr(J[Se],W,ne,ee)}function yi(A,W,ne,ee){let{opaque:J,transmissive:Se,transparent:Ae}=A;T.setupLightsView(ne),oe===!0&&Xe.setGlobalState(b.clippingPlanes,ne),ee&&I.viewport(Z.copy(ee)),J.length>0&&pi(J,W,ne),Se.length>0&&pi(Se,W,ne),Ae.length>0&&pi(Ae,W,ne),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Ti(A,W,ne,ee){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ee.id]===void 0){let xt=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ee.id]=new vi(1,1,{generateMipmaps:!0,type:xt?ui:qi,minFilter:Lr,samples:Math.max(4,ct.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}let J=T.state.transmissionRenderTarget[ee.id],Se=ee.viewport||Z;J.setSize(Se.z*b.transmissionResolutionScale,Se.w*b.transmissionResolutionScale);let Ae=b.getRenderTarget(),we=b.getActiveCubeFace(),Be=b.getActiveMipmapLevel();b.setRenderTarget(J),b.getClearColor(_e),Ue=b.getClearAlpha(),Ue<1&&b.setClearColor(16777215,.5),b.clear(),Qe&&it.render(ne);let je=b.toneMapping;b.toneMapping=Dr;let pt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),T.setupLightsView(ee),oe===!0&&Xe.setGlobalState(b.clippingPlanes,ee),pi(A,ne,ee),ae.updateMultisampleRenderTarget(J),ae.updateRenderTargetMipmap(J),ut.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let ze=0,bt=W.length;ze<bt;ze++){let Zt=W[ze],{object:At,geometry:Lt,material:kt,group:Ve}=Zt;if(kt.side===Ri&&At.layers.test(ee.layers)){let Kt=kt.side;kt.side=Li,kt.needsUpdate=!0,Hi(At,ne,ee,Lt,kt,Ve),kt.side=Kt,kt.needsUpdate=!0,xt=!0}}xt===!0&&(ae.updateMultisampleRenderTarget(J),ae.updateRenderTargetMipmap(J))}b.setRenderTarget(Ae,we,Be),b.setClearColor(_e,Ue),pt!==void 0&&(ee.viewport=pt),b.toneMapping=je}function pi(A,W,ne){let ee=W.isScene===!0?W.overrideMaterial:null;for(let J=0,Se=A.length;J<Se;J++){let Ae=A[J],{object:we,geometry:Be,group:je}=Ae,pt=Ae.material;pt.allowOverride===!0&&ee!==null&&(pt=ee),we.layers.test(ne.layers)&&Hi(we,W,ne,Be,pt,je)}}function Hi(A,W,ne,ee,J,Se){D!==null&&J.isNodeMaterial&&D.setObject(A,J),A.onBeforeRender(b,W,ne,ee,J,Se),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(b,W,ne,ee,A,Se),J.transparent===!0&&J.side===Ri&&J.forceSinglePass===!1?(J.side=Li,J.needsUpdate=!0,b.renderBufferDirect(ne,W,ee,J,A,Se),J.side=ta,J.needsUpdate=!0,b.renderBufferDirect(ne,W,ee,J,A,Se),J.side=Ri):b.renderBufferDirect(ne,W,ee,J,A,Se),A.onAfterRender(b,W,ne,ee,J,Se)}function Er(A,W,ne){W.isScene!==!0&&(W=We);let ee=k.get(A),J=T.state.lights,Se=T.state.shadowsArray,Ae=J.state.version,we=xe.getParameters(A,J.state,Se,W,ne,T.state.lightProbeGridArray),Be=xe.getProgramCacheKey(we),je=ee.programs;ee.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,ee.fog=W.fog;let pt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ee.envMap=ue.get(A.envMap||ee.environment,pt),ee.envMapRotation=ee.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",lt),je=new Map,ee.programs=je);let xt=je.get(Be);if(xt!==void 0){if(ee.currentProgram===xt&&ee.lightsStateVersion===Ae)return wt(A,we),xt}else we.uniforms=xe.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,ne,we),A.onBeforeCompile(we,b),xt=xe.acquireProgram(we,Be),je.set(Be,xt),ee.uniforms=we.uniforms;let ze=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=Xe.uniform),wt(A,we),ee.needsLights=Bs(A),ee.lightsStateVersion=Ae,ee.needsLights&&(ze.ambientLightColor.value=J.state.ambient,ze.lightProbe.value=J.state.probe,ze.sunLights.value=J.state.sun,ze.sunLightShadows.value=J.state.sunShadow,ze.directionalLights.value=J.state.directional,ze.directionalLightShadows.value=J.state.directionalShadow,ze.spotLights.value=J.state.spot,ze.spotLightShadows.value=J.state.spotShadow,ze.rectAreaLights.value=J.state.rectArea,ze.ltc_1.value=J.state.rectAreaLTC1,ze.ltc_2.value=J.state.rectAreaLTC2,ze.pointLights.value=J.state.point,ze.pointLightShadows.value=J.state.pointShadow,ze.hemisphereLights.value=J.state.hemi,ze.sunShadowMatrix.value=J.state.sunShadowMatrix,ze.sunShadowCascade.value=J.state.sunShadowCascade,ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ze.spotLightMatrix.value=J.state.spotLightMatrix,ze.spotLightMap.value=J.state.spotLightMap,ze.pointShadowMatrix.value=J.state.pointShadowMatrix),ee.lightProbeGrid=T.state.lightProbeGridArray.length>0,ee.currentProgram=xt,ee.uniformsList=null,xt}function Vr(A){if(A.uniformsList===null){let W=A.currentProgram.getUniforms();A.uniformsList=Ro.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function wt(A,W){let ne=k.get(A);ne.outputColorSpace=W.outputColorSpace,ne.batching=W.batching,ne.batchingColor=W.batchingColor,ne.instancing=W.instancing,ne.instancingColor=W.instancingColor,ne.instancingMorph=W.instancingMorph,ne.skinning=W.skinning,ne.morphTargets=W.morphTargets,ne.morphNormals=W.morphNormals,ne.morphColors=W.morphColors,ne.morphTargetsCount=W.morphTargetsCount,ne.numClippingPlanes=W.numClippingPlanes,ne.numIntersection=W.numClipIntersection,ne.vertexAlphas=W.vertexAlphas,ne.vertexTangents=W.vertexTangents,ne.toneMapping=W.toneMapping}function jt(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(W.matrixWorld);for(let ne=0,ee=A.length;ne<ee;ne++){let J=A[ne];if(J.texture!==null&&J.boundingBox.containsPoint(y))return J}return null}function Ei(A,W,ne,ee,J){W.isScene!==!0&&(W=We),ae.resetTextureUnits();let Se=W.fog,Ae=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?W.environment:null,we=F===null?b.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:_t.workingColorSpace,Be=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,je=ue.get(ee.envMap||Ae,Be),pt=ee.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,xt=!!ne.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),ze=!!ne.morphAttributes.position,bt=!!ne.morphAttributes.normal,Zt=!!ne.morphAttributes.color,At=Dr;ee.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(At=b.toneMapping);let Lt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,kt=Lt!==void 0?Lt.length:0,Ve=k.get(ee),Kt=T.state.lights;if(oe===!0&&(le===!0||A!==V)){let Ct=A===V&&ee.id===Q;Xe.setState(ee,A,Ct)}let wr=!1;ee.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Kt.state.version||Ve.outputColorSpace!==we||J.isBatchedMesh&&Ve.batching===!1||!J.isBatchedMesh&&Ve.batching===!0||J.isBatchedMesh&&Ve.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Ve.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Ve.instancing===!1||!J.isInstancedMesh&&Ve.instancing===!0||J.isSkinnedMesh&&Ve.skinning===!1||!J.isSkinnedMesh&&Ve.skinning===!0||J.isInstancedMesh&&Ve.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ve.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ve.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ve.instancingMorph===!1&&J.morphTexture!==null||Ve.envMap!==je||ee.fog===!0&&Ve.fog!==Se||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Xe.numPlanes||Ve.numIntersection!==Xe.numIntersection)||Ve.vertexAlphas!==pt||Ve.vertexTangents!==xt||Ve.morphTargets!==ze||Ve.morphNormals!==bt||Ve.morphColors!==Zt||Ve.toneMapping!==At||Ve.morphTargetsCount!==kt||!!Ve.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(wr=!0):(wr=!0,Ve.__version=ee.version);let Oi=Ve.currentProgram;wr===!0&&(Oi=Er(ee,W,J),D&&ee.isNodeMaterial&&D.onUpdateProgram(ee,Oi,Ve));let ki=!1,Wi=!1,Wr=!1,Et=Oi.getUniforms(),qt=Ve.uniforms;if(I.useProgram(Oi.program)&&(ki=!0,Wi=!0,Wr=!0),ee.id!==Q&&(Q=ee.id,Wi=!0),Ve.needsLights){let Ct=jt(T.state.lightProbeGridArray,J);Ve.lightProbeGrid!==Ct&&(Ve.lightProbeGrid=Ct,Wi=!0)}if(ki||V!==A){I.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Et.setValue(B,"projectionMatrix",A.projectionMatrix),Et.setValue(B,"viewMatrix",A.matrixWorldInverse);let Ct=Et.map.cameraPosition;Ct!==void 0&&Ct.setValue(B,Ce.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&Et.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Et.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),V!==A&&(V=A,Wi=!0,Wr=!0)}if(Ve.needsLights&&(Kt.state.sunShadowMap.length>0&&Et.setValue(B,"sunShadowMap",Kt.state.sunShadowMap,ae),Kt.state.directionalShadowMap.length>0&&Et.setValue(B,"directionalShadowMap",Kt.state.directionalShadowMap,ae),Kt.state.spotShadowMap.length>0&&Et.setValue(B,"spotShadowMap",Kt.state.spotShadowMap,ae),Kt.state.pointShadowMap.length>0&&Et.setValue(B,"pointShadowMap",Kt.state.pointShadowMap,ae)),J.isSkinnedMesh){Et.setOptional(B,J,"bindMatrix"),Et.setOptional(B,J,"bindMatrixInverse");let Ct=J.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),Et.setValue(B,"boneTexture",Ct.boneTexture,ae))}J.isBatchedMesh&&(Et.setOptional(B,J,"batchingTexture"),Et.setValue(B,"batchingTexture",J._matricesTexture,ae),Et.setOptional(B,J,"batchingIdTexture"),Et.setValue(B,"batchingIdTexture",J._indirectTexture,ae),Et.setOptional(B,J,"batchingColorTexture"),J._colorsTexture!==null&&Et.setValue(B,"batchingColorTexture",J._colorsTexture,ae));let cr=ne.morphAttributes;if((cr.position!==void 0||cr.normal!==void 0||cr.color!==void 0)&&z.update(J,ne,Oi),(Wi||Ve.receiveShadow!==J.receiveShadow)&&(Ve.receiveShadow=J.receiveShadow,Et.setValue(B,"receiveShadow",J.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&W.environment!==null&&(qt.envMapIntensity.value=W.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=PM()),Wi){if(Et.setValue(B,"toneMappingExposure",b.toneMappingExposure),Ve.needsLights&&jn(qt,Wr),Se&&ee.fog===!0&&Ee.refreshFogUniforms(qt,Se),Ee.refreshMaterialUniforms(qt,ee,se,ie,T.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){let Ct=Ve.lightProbeGrid;qt.probesSH.value=Ct.texture,qt.probesMin.value.copy(Ct.boundingBox.min),qt.probesMax.value.copy(Ct.boundingBox.max),qt.probesResolution.value.copy(Ct.resolution)}Ro.upload(B,Vr(Ve),qt,ae)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ro.upload(B,Vr(Ve),qt,ae),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Et.setValue(B,"center",J.center),Et.setValue(B,"modelViewMatrix",J.modelViewMatrix),Et.setValue(B,"normalMatrix",J.normalMatrix),Et.setValue(B,"modelMatrix",J.matrixWorld),ee.uniformsGroups!==void 0){let Ct=ee.uniformsGroups;for(let na=0,Xr=Ct.length;na<Xr;na++){let Yn=Ct[na];re.update(Yn,Oi),re.bind(Yn,Oi)}}return Oi}function jn(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.sunLights.needsUpdate=W,A.sunLightShadows.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Bs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(A,W,ne){let ee=k.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),k.get(A.texture).__webglTexture=W,k.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ne,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){let ne=k.get(A);ne.__webglFramebuffer=W,ne.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,ne=0){F=A,L=W,G=ne;let ee=null,J=!1,Se=!1;if(A){let Ae=k.get(A);if(Ae.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(B.FRAMEBUFFER,Ae.__webglFramebuffer),Z.copy(A.viewport),te.copy(A.scissor),ye=A.scissorTest,I.viewport(Z),I.scissor(te),I.setScissorTest(ye),Q=-1;return}else if(Ae.__webglFramebuffer===void 0)ae.setupRenderTarget(A);else if(Ae.__hasExternalTextures)ae.rebindTextures(A,k.get(A.texture).__webglTexture,k.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let je=A.depthTexture;if(Ae.__boundDepthTexture!==je){if(je!==null&&k.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(A)}}let we=A.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Se=!0);let Be=k.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[W])?ee=Be[W][ne]:ee=Be[W],J=!0):A.samples>0&&ae.useMultisampledRTT(A)===!1?ee=k.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?ee=Be[ne]:ee=Be,Z.copy(A.viewport),te.copy(A.scissor),ye=A.scissorTest}else Z.copy(Ne).multiplyScalar(se).floor(),te.copy(fe).multiplyScalar(se).floor(),ye=Oe;if(ne!==0&&(ee=O),I.bindFramebuffer(B.FRAMEBUFFER,ee)&&I.drawBuffers(A,ee),I.viewport(Z),I.scissor(te),I.setScissorTest(ye),J){let Ae=k.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ae.__webglTexture,ne)}else if(Se){let Ae=W;for(let we=0;we<A.textures.length;we++){let Be=k.get(A.textures[we]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+we,Be.__webglTexture,ne,Ae)}}else if(A!==null&&ne!==0){let Ae=k.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ae.__webglTexture,ne)}Q=-1};function qn(A){let W=k.get(A);return(W.__readFormat!==A.format||W.__readType!==A.type)&&(W.__readFormat=A.format,W.__readType=A.type,W.__formatReadable=ct.textureFormatReadable(A.format),W.__typeReadable=ct.textureTypeReadable(A.type)),W}this.readRenderTargetPixels=function(A,W,ne,ee,J,Se,Ae,we=0){if(!(A&&A.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=k.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Be=Be[Ae]),Be){I.bindFramebuffer(B.FRAMEBUFFER,Be);try{let je=A.textures[we],pt=je.format,xt=je.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+we);let ze=qn(je);if(ze.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ee&&ne>=0&&ne<=A.height-J&&B.readPixels(W,ne,ee,J,H.convert(pt),H.convert(xt),Se)}finally{let je=F!==null?k.get(F).__webglFramebuffer:null;I.bindFramebuffer(B.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(A,W,ne,ee,J,Se,Ae,we=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=k.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Be=Be[Ae]),Be)if(W>=0&&W<=A.width-ee&&ne>=0&&ne<=A.height-J){I.bindFramebuffer(B.FRAMEBUFFER,Be);let je=A.textures[we],pt=je.format,xt=je.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+we);let ze=qn(je);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,bt),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),B.readPixels(W,ne,ee,J,H.convert(pt),H.convert(xt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Zt=F!==null?k.get(F).__webglFramebuffer:null;I.bindFramebuffer(B.FRAMEBUFFER,Zt);let At=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await gg(B,At,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,bt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(bt),B.deleteSync(At),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,ne=0){let ee=Math.pow(2,-ne),J=Math.floor(A.image.width*ee),Se=Math.floor(A.image.height*ee),Ae=W!==null?W.x:0,we=W!==null?W.y:0;ae.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,ne,0,0,Ae,we,J,Se),I.unbindTexture()},this.copyTextureToTexture=function(A,W,ne=null,ee=null,J=0,Se=0){let Ae,we,Be,je,pt,xt,ze,bt,Zt,At=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(ne!==null)Ae=ne.max.x-ne.min.x,we=ne.max.y-ne.min.y,Be=ne.isBox3?ne.max.z-ne.min.z:1,je=ne.min.x,pt=ne.min.y,xt=ne.isBox3?ne.min.z:0;else{let qt=Math.pow(2,-J);Ae=Math.floor(At.width*qt),we=Math.floor(At.height*qt),A.isDataArrayTexture?Be=At.depth:A.isData3DTexture?Be=Math.floor(At.depth*qt):Be=1,je=0,pt=0,xt=0}ee!==null?(ze=ee.x,bt=ee.y,Zt=ee.z):(ze=0,bt=0,Zt=0);let Lt=H.convert(W.format),kt=H.convert(W.type),Ve;W.isData3DTexture?(ae.setTexture3D(W,0),Ve=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ae.setTexture2DArray(W,0),Ve=B.TEXTURE_2D_ARRAY):(ae.setTexture2D(W,0),Ve=B.TEXTURE_2D),I.activeTexture(B.TEXTURE0),I.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);let Kt=I.getParameter(B.UNPACK_ROW_LENGTH),wr=I.getParameter(B.UNPACK_IMAGE_HEIGHT),Oi=I.getParameter(B.UNPACK_SKIP_PIXELS),ki=I.getParameter(B.UNPACK_SKIP_ROWS),Wi=I.getParameter(B.UNPACK_SKIP_IMAGES);I.pixelStorei(B.UNPACK_ROW_LENGTH,At.width),I.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At.height),I.pixelStorei(B.UNPACK_SKIP_PIXELS,je),I.pixelStorei(B.UNPACK_SKIP_ROWS,pt),I.pixelStorei(B.UNPACK_SKIP_IMAGES,xt);let Wr=A.isDataArrayTexture||A.isData3DTexture,Et=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){let qt=k.get(A),cr=k.get(W),Ct=k.get(qt.__renderTarget),na=k.get(cr.__renderTarget);I.bindFramebuffer(B.READ_FRAMEBUFFER,Ct.__webglFramebuffer),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,na.__webglFramebuffer);for(let Xr=0;Xr<Be;Xr++)Wr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,k.get(A).__webglTexture,J,xt+Xr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,k.get(W).__webglTexture,Se,Zt+Xr)),B.blitFramebuffer(je,pt,Ae,we,ze,bt,Ae,we,B.DEPTH_BUFFER_BIT,B.NEAREST);I.bindFramebuffer(B.READ_FRAMEBUFFER,null),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||k.has(A)){let qt=k.get(A),cr=k.get(W);I.bindFramebuffer(B.READ_FRAMEBUFFER,q),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let Ct=0;Ct<Be;Ct++)Wr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,qt.__webglTexture,J,xt+Ct):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,qt.__webglTexture,J),Et?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,cr.__webglTexture,Se,Zt+Ct):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,cr.__webglTexture,Se),J!==0?B.blitFramebuffer(je,pt,Ae,we,ze,bt,Ae,we,B.COLOR_BUFFER_BIT,B.NEAREST):Et?B.copyTexSubImage3D(Ve,Se,ze,bt,Zt+Ct,je,pt,Ae,we):B.copyTexSubImage2D(Ve,Se,ze,bt,je,pt,Ae,we);I.bindFramebuffer(B.READ_FRAMEBUFFER,null),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Et?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Ve,Se,ze,bt,Zt,Ae,we,Be,Lt,kt,At.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Ve,Se,ze,bt,Zt,Ae,we,Be,Lt,At.data):B.texSubImage3D(Ve,Se,ze,bt,Zt,Ae,we,Be,Lt,kt,At):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Se,ze,bt,Ae,we,Lt,kt,At.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Se,ze,bt,At.width,At.height,Lt,At.data):B.texSubImage2D(B.TEXTURE_2D,Se,ze,bt,Ae,we,Lt,kt,At);I.pixelStorei(B.UNPACK_ROW_LENGTH,Kt),I.pixelStorei(B.UNPACK_IMAGE_HEIGHT,wr),I.pixelStorei(B.UNPACK_SKIP_PIXELS,Oi),I.pixelStorei(B.UNPACK_SKIP_ROWS,ki),I.pixelStorei(B.UNPACK_SKIP_IMAGES,Wi),Se===0&&W.generateMipmaps&&B.generateMipmap(Ve),I.unbindTexture()},this.initRenderTarget=function(A){k.get(A).__webglFramebuffer===void 0&&ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),I.unbindTexture()},this.resetState=function(){L=0,G=0,F=null,I.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};var TS=new C;var Hn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Zi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},LM=new Ba(-1,1,1,-1,0,1),wh=class extends yt{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}},DM=new wh,_a=class{constructor(t){this._mesh=new rt(DM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,LM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ha=class extends Zi{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof Ft?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=nr.clone(t.uniforms),this.material=new Ft({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new _a(this.material)}render(t,i,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ps=class extends Zi{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,r){let a=t.getContext(),n=t.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),n.buffers.stencil.setFunc(a.ALWAYS,s,4294967295),n.buffers.stencil.setClear(o),n.buffers.stencil.setLocked(!0),t.setRenderTarget(r),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(a.EQUAL,1,4294967295),n.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),n.buffers.stencil.setLocked(!0)}},Jo=class extends Zi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Qo=class{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){let r=t.getSize(new de);this._width=r.width,this._height=r.height,i=new vi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ui}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ha(Hn),this.copyPass.material.blending=gr,this.timer=new Tf}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let i=this.renderer.getRenderTarget(),r=!1;for(let a=0,n=this.passes.length;a<n;a++){let s=this.passes[a];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),s.render(this.renderer,this.writeBuffer,this.readBuffer,t,r),s.needsSwap){if(r){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ps!==void 0&&(s instanceof Ps?r=!0:s instanceof Jo&&(r=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){let i=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;let r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(r,a)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var el=class extends Zi{constructor(t,i,r=null,a=null,n=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=r,this.clearColor=a,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new be}render(t,i,r){let a=t.autoClear;t.autoClear=!1;let n,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(n=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(n),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),t.autoClear=a}};var Nf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var kn=class e extends Zi{constructor(t,i=1,r,a){super(),this.strength=i,this.radius=r,this.threshold=a,this.resolution=t!==void 0?new de(t.x,t.y):new de(256,256),this.clearColor=new be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new vi(n,s,{type:ui,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new vi(n,s,{type:ui,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new vi(n,s,{type:ui,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),n=Math.round(n/2),s=Math.round(s/2)}let o=Nf;this.highPassUniforms=nr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ft({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new de(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=nr.clone(Hn.uniforms),this.blendMaterial=new Ft({uniforms:this.copyUniforms,vertexShader:Hn.vertexShader,fragmentShader:Hn.fragmentShader,premultipliedAlpha:!0,blending:ga,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new be,this._oldClearAlpha=1,this._basic=new di,this._fsQuad=new _a(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let r=Math.round(t/2),a=Math.round(i/2);this.renderTargetBright.setSize(r,a);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(r,a),this.renderTargetsVertical[n].setSize(r,a),this.separableBlurMaterials[n].uniforms.invSize.value=new de(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2)}render(t,i,r,a,n){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let s=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),n&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=s}_getSeparableBlurMaterial(t){let i=[],r=t/3;for(let s=0;s<t;s++)i.push(.39894*Math.exp(-.5*s*s/(r*r))/r);let a=[],n=[];for(let s=1;s<t;s+=2){let o=i[s],l=s+1<t?i[s+1]:0,c=o+l;a.push((s*o+(s+1)*l)/c),n.push(c)}return new Ft({defines:{KERNEL_PAIRS:a.length},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},centerWeight:{value:i[0]},gaussianOffsets:{value:a},gaussianWeights:{value:n}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ft({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};kn.BlurDirectionX=new de(1,0);kn.BlurDirectionY=new de(0,1);var Ls={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var tl=class extends Zi{constructor(){super(),this.isOutputPass=!0,this.uniforms=nr.clone(Ls.uniforms),this.material=new xh({name:Ls.name,uniforms:this.uniforms,vertexShader:Ls.vertexShader,fragmentShader:Ls.fragmentShader}),this._fsQuad=new _a(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},_t.getTransfer(this._outputColorSpace)===Pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ln?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ho?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ko?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===zo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Wt={giza:{x:-84,z:-12,biome:"desert",lat:"29.98\xB0N",lon:"31.13\xB0E"},cairo:{x:-58,z:-32,biome:"desert",lat:"30.03\xB0N",lon:"31.26\xB0E"},luxor:{x:-54,z:26,biome:"desert",lat:"25.69\xB0N",lon:"32.64\xB0E"},qinggan:{x:-26,z:-50,biome:"danxia",lat:"40.09\xB0N",lon:"94.67\xB0E"},yunnan:{x:-4,z:30,biome:"meadow",lat:"27.83\xB0N",lon:"99.71\xB0E"},beijing:{x:26,z:-38,biome:"autumn",lat:"39.92\xB0N",lon:"116.39\xB0E"},nanjing:{x:50,z:0,biome:"plane",lat:"32.06\xB0N",lon:"118.80\xB0E"},shanghai:{x:84,z:26,biome:"coast",lat:"31.24\xB0N",lon:"121.50\xB0E"},road:{x:38,z:44,biome:"field",lat:"\u2014",lon:"\u2014"}},yr={x:8,z:4},Ds=e=>-70-Math.sin(e*.06)*4,Rh=e=>6+Math.sin(e*.08)*3,NM=[[-30,4,13,9],[-22,-6,11,8],[-36,16,12,9],[-16,-16,9,7],[-40,30,10,8],[-18,54,13,9],[0,62,15,10],[16,58,11,8],[-64,-58,8,9],[62,-62,9,10],[60,-32,6,8]],ai=(e,t,i)=>{let r=Math.min(1,Math.max(0,(i-e)/(t-e)));return r*r*(3-2*r)};function il(e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453;return i-Math.floor(i)}function Ah(e,t){let i=Math.floor(e),r=Math.floor(t),a=e-i,n=t-r,s=a*a*(3-2*a),o=n*n*(3-2*n),l=il(i,r),c=il(i+1,r),h=il(i,r+1),d=il(i+1,r+1);return l+(c-l)*s+(h-l)*o+(l-c-h+d)*s*o}var sr=(e,t)=>Ah(e,t)*.55+Ah(e*2.1,t*2.1)*.3+Ah(e*4.3,t*4.3)*.15;function or(e,t){let i={},r=0;for(let a in Wt){let n=Wt[a],s=(e-n.x)**2+(t-n.z)**2,o=Math.exp(-s/676);i[n.biome]=(i[n.biome]||0)+o,r+=o}for(let a in i)i[a]/=r||1;return i}function ka(e,t){let i=null,r=1/0;for(let a in Wt){let n=Wt[a],s=Math.hypot(e-n.x,t-n.z);s<r&&(r=s,i=a)}return{key:i,d:r}}var Ns=(e,t)=>Math.pow(Math.pow(Math.abs(e)/112,4)+Math.pow(Math.abs(t)/72,4),.25),UM=[[[8,4],[4,16],[-4,30]],[[-4,30],[-18,42],[-30,46],[-44,38],[-54,26]],[[-54,26],[-62,18],[-72,8],[-80,-2],[-84,-12]],[[-84,-12],[-74,-24],[-58,-32]],[[-58,-32],[-44,-42],[-26,-50]],[[-26,-50],[-12,-36],[-6,-24],[2,-8],[8,4]],[[8,4],[18,-14],[26,-38]],[[8,4],[28,2],[50,0]],[[26,-38],[40,-26],[50,-18],[50,0]],[[50,0],[64,18],[84,26]],[[50,0],[46,22],[38,44]],[[38,44],[16,40],[-4,30]]];function OM(e,t,i,r,a,n){let s=a-i,o=n-r,l=Math.max(0,Math.min(1,((e-i)*s+(t-r)*o)/(s*s+o*o)));return Math.hypot(e-i-s*l,t-r-o*l)}function FM(e,t){let i=1/0;for(let r of UM)for(let a=0;a<r.length-1;a++)i=Math.min(i,OM(e,t,r[a][0],r[a][1],r[a+1][0],r[a+1][1]));return i}var Ch=[];function BM(e,t){let i=.15+(sr(e*.05,t*.05)-.5)*.7,r=or(e,t),a=.5+.5*Math.sin(e*.18+Math.sin(t*.11)*2);i+=((r.desert||0)*.9+(r.danxia||0)*1.2)*(a*a*1.1+sr(e*.09,t*.09)*.9);for(let[l,c,h,d]of NM){let u=(e-l)**2+(t-c)**2;i+=h*Math.exp(-u/(d*d))*(.85+.3*sr(e*.2,t*.2))}let n=Math.abs(e-Ds(t));i-=1.3*(1-ai(2.4,4.8,n))*(1-ai(60,70,Math.abs(t))),i-=1.4*(1-ai(5,11,Math.hypot(e-14,t-38))),i-=1.2*(1-ai(2.5,5,Math.hypot((e+6)*.6,t+52))),e>66&&(i-=1.4*(1-ai(2.6,5,Math.abs(t-Rh(e))))*ai(66,72,e));for(let l in Wt){let c=Wt[l],h=Math.hypot(e-c.x,t-c.z),d=ai(6.5,12,h);i=i*d+.12*(1-d)}for(let[l,c,h,d]of Ch){let u=Math.hypot(e-l,t-c),p=ai(h,h+4,u);i=i*p+d*(1-p)}let s=Math.hypot(e-yr.x,t-yr.z),o=ai(7,13,s);return i=i*o+.12*(1-o),i-=1.75*ai(.86,1.02,Ns(e,t)),i}function Uf(){let e=new Float32Array(38801);for(let s=0;s<=160;s++)for(let o=0;o<=240;o++)e[s*241+o]=BM(-120+o*1,-80+s*1);let t=(s,o)=>e[Math.min(160,Math.max(0,o))*241+Math.min(240,Math.max(0,s))],i=(s,o)=>{let l=(s- -120)/1,c=(o- -80)/1,h=Math.floor(l),d=Math.floor(c),u=l-h,p=c-d;return t(h,d)*(1-u)*(1-p)+t(h+1,d)*u*(1-p)+t(h,d+1)*(1-u)*p+t(h+1,d+1)*u*p},r=new Float32Array((240/2+1)*(160/2+1));for(let s=0;s<=160/2;s++)for(let o=0;o<=240/2;o++)r[s*(240/2+1)+o]=FM(-120+o*2,-80+s*2);return{H:e,at:t,sample:i,slope:(s,o)=>Math.hypot(i(s+1,o)-i(s-1,o),i(s,o+1)-i(s,o-1))/2,road:(s,o)=>{let l=Math.round((s- -120)/2),c=Math.round((o- -80)/2);return r[Math.min(160/2,Math.max(0,c))*(240/2+1)+Math.min(240/2,Math.max(0,l))]}}}var ni={half:{x:1.05,y:.34,z:.66},wheel:{x:.78,y:-.08,z:.7,r:.42,rest:.34},mass:1,com:{x:0,y:-.8,z:0},engine:7.5,boost:12.5,reverse:4.6,brake:.55,idleBrake:.03,handbrake:1.1,top:14,topBoost:21,topReverse:6,steer:.55,steerFast:.22,jump:6.4},zr=1/60,Ga=(e,t,i)=>Math.min(i,Math.max(t,e)),Of=(e,t,i)=>{let r=Ga((i-e)/(t-e),0,1);return r*r*(3-2*r)};function Ff(e,t){let i=new e.World({x:0,y:-18,z:0});i.timestep=zr;let r=new e.EventQueue(!0),a=new Map,n=new Float32Array(38801);for(let L=0;L<=240;L++)for(let G=0;G<=160;G++)n[L*161+G]=t.at(L,G);let s=i.createRigidBody(e.RigidBodyDesc.fixed().setTranslation(-120+240/2,0,-80+160/2)),o=i.createCollider(e.ColliderDesc.heightfield(160,240,n,{x:240,y:1,z:160}).setFriction(.9),s);a.set(o.handle,"ground");let l=i.createRigidBody(e.RigidBodyDesc.fixed()),c=L=>({x:0,y:Math.sin(L/2),z:0,w:Math.cos(L/2)}),h=(L,G)=>(L&&a.set(L.handle,G),L),d={box(L,G,F,Q,V,Z,te=0,ye="stone"){return h(i.createCollider(e.ColliderDesc.cuboid(Q,V,Z).setTranslation(L,G,F).setRotation(c(te)).setFriction(.5),l),ye)},cyl(L,G,F,Q,V,Z="stone"){return h(i.createCollider(e.ColliderDesc.cylinder(Q,V).setTranslation(L,G,F).setFriction(.5),l),Z)},hull(L,G,F,Q,V=0,Z="stone"){let te=e.ColliderDesc.convexHull(new Float32Array(L));return te&&h(i.createCollider(te.setTranslation(G,F,Q).setRotation(c(V)).setFriction(.5),l),Z)}},u=[];function p(L,{x:G,y:F,z:Q,ry:V=0,mass:Z=1,friction:te=.6,restitution:ye=.15,kind:_e="wood",linDamp:Ue=.1,angDamp:Ge=.3}){var pe;let ie=i.createRigidBody(e.RigidBodyDesc.dynamic().setTranslation(G,F,Q).setRotation(c(V)).setCanSleep(!0).setLinearDamping(Ue).setAngularDamping(Ge)),se;return L.type==="box"?se=e.ColliderDesc.cuboid(L.hx,L.hy,L.hz):L.type==="roundcyl"?se=e.ColliderDesc.roundCylinder(L.hh,L.r,(pe=L.b)!=null?pe:.05):L.type==="cone"?se=e.ColliderDesc.cone(L.hh,L.r):L.type==="cyl"?se=e.ColliderDesc.cylinder(L.hh,L.r):se=e.ColliderDesc.ball(L.r),L.rot&&se.setRotation(L.rot),se.setMass(Z).setFriction(te).setRestitution(ye),h(i.createCollider(se,ie),_e),ie.sleep(),u.push(ie),ie}let g=i.createRigidBody(e.RigidBodyDesc.dynamic().setTranslation(0,3,0).setCanSleep(!1).setCcdEnabled(!0).setAngularDamping(.6).setLinearDamping(.08)),x=ni.half,m=i.createCollider(e.ColliderDesc.cuboid(x.x,x.y,x.z).setMassProperties(ni.mass,ni.com,{x:.3,y:.45,z:.32},{x:0,y:0,z:0,w:1}).setFriction(.3).setRestitution(.1).setActiveEvents(e.ActiveEvents.COLLISION_EVENTS),g),f=i.createCollider(e.ColliderDesc.cuboid(.62,.26,.6).setTranslation(-.12,.58,0).setMass(0).setFriction(.3).setActiveEvents(e.ActiveEvents.COLLISION_EVENTS),g),M=new Set([m.handle,f.handle]),y=i.createVehicleController(g),v=ni.wheel,T=[[v.x,v.y,v.z],[v.x,v.y,-v.z],[-v.x,v.y,v.z],[-v.x,v.y,-v.z]];T.forEach(([L,G,F],Q)=>{y.addWheel({x:L,y:G,z:F},{x:0,y:-1,z:0},{x:0,y:0,z:1},v.rest,v.r),y.setWheelSuspensionStiffness(Q,34),y.setWheelSuspensionCompression(Q,3.4),y.setWheelSuspensionRelaxation(Q,2.8),y.setWheelMaxSuspensionTravel(Q,.32),y.setWheelMaxSuspensionForce(Q,200),y.setWheelFrictionSlip(Q,1.5),y.setWheelSideFrictionStiffness(Q,1.6)});let R=(L,G)=>{let{x:F,y:Q,z:V,w:Z}=L,[te,ye,_e]=G,Ue=Z*te+Q*_e-V*ye,Ge=Z*ye+V*te-F*_e,ie=Z*_e+F*ye-Q*te,se=-F*te-Q*ye-V*_e;return[Ue*Z+se*-F+Ge*-V-ie*-Q,Ge*Z+se*-Q+ie*-F-Ue*-V,ie*Z+se*-V+Ue*-Q-Ge*-F]},w=L=>{let G=g.translation(),[F,Q,V]=R(g.rotation(),T[L]);return{x:G.x+F,y:G.y+Q,z:G.z+V}},_=()=>({p:{x:0,y:0,z:0},q:{x:0,y:0,z:0,w:1},travel:[v.rest,v.rest,v.rest,v.rest],steer:[0,0,0,0],spin:[0,0,0,0]}),b=_(),N=_(),D=L=>{var Q,V,Z;let G=g.translation(),F=g.rotation();L.p.x=G.x,L.p.y=G.y,L.p.z=G.z,L.q.x=F.x,L.q.y=F.y,L.q.z=F.z,L.q.w=F.w;for(let te=0;te<4;te++)L.travel[te]=(Q=y.wheelSuspensionLength(te))!=null?Q:v.rest,L.steer[te]=(V=y.wheelSteering(te))!=null?V:0,L.spin[te]=(Z=y.wheelRotation(te))!=null?Z:0},O={body:g,vehicle:y,handles:M,steer:0,upsideT:0,waterDepth:0,contacts:0,rescued:!1,forward(){return R(g.rotation(),[1,0,0])},up(){return R(g.rotation(),[0,1,0])},speed(){let L=g.linvel(),G=O.forward();return L.x*G[0]+L.y*G[1]+L.z*G[2]},yaw(){let L=O.forward();return Math.atan2(-L[2],L[0])},place(L,G,F,Q){g.setTranslation({x:L,y:G,z:F},!0),g.setRotation(c(Q),!0),g.setLinvel({x:0,y:0,z:0},!0),g.setAngvel({x:0,y:0,z:0},!0),O.steer=0,D(b),D(N)},control(L,G={}){let F=O.speed(),Q=Math.abs(F),V=L.boost?ni.topBoost:ni.top,Z=L.gas&&F<-.8||L.brake&&F>.8,te=0,ye=L.gas||L.brake?0:ni.idleBrake;L.gas&&!Z&&(te=(L.boost?ni.boost:ni.engine)*Ga((V-F)/3,0,1)),L.brake&&!Z&&(te=-ni.reverse*Ga((ni.topReverse+F)/2,0,1)),Z&&(ye=ni.brake);let _e=1-Math.max((G.wet||0)*.25,(G.snow||0)*.3),Ue=ni.steer+(ni.steerFast-ni.steer)*Of(3.5,20,Q);O.steer+=((L.left-L.right)*Ue-O.steer)*Math.min(1,zr*12);let Ge=(1.7-.35*Of(6,22,Q))*_e;for(let fe=0;fe<4;fe++){let Oe=fe>=2;y.setWheelEngineForce(fe,te*(Oe?.55:.45)),y.setWheelBrake(fe,L.hand&&Oe?ni.handbrake:ye),y.setWheelSteering(fe,Oe?0:O.steer),y.setWheelFrictionSlip(fe,1.5*_e),y.setWheelSideFrictionStiffness(fe,L.hand&&Oe?.45:Ge)}let ie=0;for(let fe=0;fe<4;fe++)y.wheelIsInContact(fe)&&ie++;O.contacts=ie,L.jump&&ie>=2&&g.linvel().y<1.5&&g.applyImpulse({x:0,y:ni.mass*ni.jump,z:0},!0),g.setAngularDamping(.6+ie*.35);let se=O.up();if(se[1]>.3)for(let fe of[0,2]){let Oe=fe+1;if(!y.wheelIsInContact(fe)||!y.wheelIsInContact(Oe))continue;let ce=y.wheelSuspensionLength(fe),oe=y.wheelSuspensionLength(Oe);if(ce==null||oe==null)continue;let le=Ga((oe-ce)*.9,-.08,.08);g.applyImpulseAtPoint({x:se[0]*le,y:se[1]*le,z:se[2]*le},w(fe),!0),g.applyImpulseAtPoint({x:-se[0]*le,y:-se[1]*le,z:-se[2]*le},w(Oe),!0)}let pe=g.translation(),Le=g.linvel();if(O.waterDepth=Ga(-.45-(pe.y-.55),0,1.6),O.waterDepth>.03){let fe=O.waterDepth,Oe=Math.min(.22,zr*fe*(.9+Math.hypot(Le.x,Le.z)*.25));g.applyImpulse({x:-Le.x*ni.mass*Oe,y:ni.mass*zr*(fe*9-Le.y*1.4*fe),z:-Le.z*ni.mass*Oe},!0)}let Ne=Math.acos(Ga(se[1],-1,1));if(Ne>.6&&ie<2){let fe=(Ne-.6)*.02;g.applyTorqueImpulse({x:se[2]*fe,y:0,z:-se[0]*fe},!0)}O.upsideT=se[1]<.25?O.upsideT+zr:0,O.upsideT>1.6&&(O.place(pe.x,pe.y+1.6,pe.z,O.yaw()),O.upsideT=0,O.rescued=!0)},pose(L){let G=Ga(L,0,1);return{p:{x:b.p.x+(N.p.x-b.p.x)*G,y:b.p.y+(N.p.y-b.p.y)*G,z:b.p.z+(N.p.z-b.p.z)*G},q0:b.q,q1:N.q,a:G,travel:N.travel.map((F,Q)=>b.travel[Q]+(F-b.travel[Q])*G),steer:N.steer.map((F,Q)=>b.steer[Q]+(F-b.steer[Q])*G),spin:N.spin.map((F,Q)=>{let V=F-b.spin[Q];return b.spin[Q]+Math.atan2(Math.sin(V),Math.cos(V))*G})}},wheels(){let L=[];for(let G=0;G<4;G++)L.push({contact:y.wheelIsInContact(G),point:y.wheelContactPoint(G)});return L},WHEELS:T},q=0;function U(L,G,F,Q){q+=Math.min(L,.1);let V=0;for(;q>=zr&&V<5;){let Z=g.linvel();O.control(G,F),G.jump=0,y.updateVehicle(zr,e.QueryFilterFlags.EXCLUDE_SENSORS),i.step(r),[b,N]=[N,b],D(N),r.drainCollisionEvents((te,ye,_e)=>{if(!_e||!Q)return;let Ue=M.has(te)?ye:M.has(ye)?te:null;if(Ue===null)return;let Ge=a.get(Ue)||"stone";if(Ge==="ground")return;let ie=Math.hypot(Z.x,Z.z);if(ie<1.2)return;let se=i.getCollider(Ue),pe=se?se.translation():g.translation();Q(Ge,ie,pe)}),q-=zr,V++}return V===5&&(q=0),q/zr}return D(b),D(N),{R:e,world:i,statics:d,dynamic:p,dynamics:u,car:O,step:U,quatY:c,kinds:a,STEP:zr}}function Ih(e,t=!1){let i=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),n={},s={},o=e[0].morphTargetsRelative,l=new yt,c=0;for(let h=0;h<e.length;++h){let d=e[h],u=0;if(i!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;n[p]===void 0&&(n[p]=[]),n[p].push(d.attributes[p]),u++}if(u!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!a.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.morphAttributes[p])}if(t){let p;if(i)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(i){let h=0,d=[];for(let u=0;u<e.length;++u){let p=e[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=e[u].attributes.position.count}l.setIndex(d)}for(let h in n){let d=Bf(n[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in s){let d=s[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let p=[];for(let x=0;x<s[h].length;++x)p.push(s[h][x][u]);let g=Bf(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Bf(e){let t,i,r,a=-1,n=0;for(let c=0;c<e.length;++c){let h=e[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=h.itemSize),i!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=h.normalized),r!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=h.gpuType),a!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=h.count*i}let s=new t(n),o=new Ot(s,i,r),l=0;for(let c=0;c<e.length;++c){let h=e[c];if(h.isInterleavedBufferAttribute){let d=l/i;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<i;g++){let x=h.getComponent(u,g);o.setComponent(u+d,g,x)}}else s.set(h.array,l);l+=h.count*i}return a!==void 0&&(o.gpuType=a),o}function Ph(e,t){if(t===fp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===As||t===Vo){let i=e.getIndex();if(i===null){let n=[],s=e.getAttribute("position");if(s!==void 0){for(let o=0;o<s.count;o++)n.push(o);e.setIndex(n),i=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let r=i.count-2,a=[];if(t===As)for(let n=1;n<=r;n++)a.push(i.getX(0)),a.push(i.getX(n)),a.push(i.getX(n+1));else for(let n=0;n<r;n++)n%2===0?(a.push(i.getX(n)),a.push(i.getX(n+1)),a.push(i.getX(n+2))):(a.push(i.getX(n+2)),a.push(i.getX(n+1)),a.push(i.getX(n)));return a.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),e.setIndex(a),e.clearGroups(),e}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function zf(e){let t=new Map,i=new Map,r=e.clone();return Hf(e,r,function(a,n){t.set(n,a),i.set(a,n)}),r.traverse(function(a){if(!a.isSkinnedMesh)return;let n=a,s=t.get(a),o=s.skeleton.bones;n.skeleton=s.skeleton.clone(),n.bindMatrix.copy(s.bindMatrix),n.skeleton.bones=o.map(function(l){return i.get(l)}),n.bind(n.skeleton,n.bindMatrix)}),r}function Hf(e,t,i){i(e,t);for(let r=0;r<e.children.length;r++)Hf(e.children[r],t.children[r],i)}var rl=class extends Fa{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(i){return new Bh(i)}),this.register(function(i){return new zh(i)}),this.register(function(i){return new Yh(i)}),this.register(function(i){return new Zh(i)}),this.register(function(i){return new Kh(i)}),this.register(function(i){return new kh(i)}),this.register(function(i){return new Gh(i)}),this.register(function(i){return new Vh(i)}),this.register(function(i){return new Wh(i)}),this.register(function(i){return new Fh(i)}),this.register(function(i){return new Xh(i)}),this.register(function(i){return new Hh(i)}),this.register(function(i){return new qh(i)}),this.register(function(i){return new jh(i)}),this.register(function(i){return new Uh(i)}),this.register(function(i){return new al(i,Mt.EXT_MESHOPT_COMPRESSION)}),this.register(function(i){return new al(i,Mt.KHR_MESHOPT_COMPRESSION)}),this.register(function(i){return new $h(i)})}load(t,i,r,a){let n=this,s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){let c=Bn.extractUrlBase(t);s=Bn.resolveURL(c,this.path)}else s=Bn.extractUrlBase(t);this.manager.itemStart(t);let o=function(c){a?a(c):console.error(c),n.manager.itemError(t),n.manager.itemEnd(t)},l=new Mh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{n.parse(c,s,function(h){i(h),n.manager.itemEnd(t)},o)}catch(h){o(h)}},r,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,i,r,a){let n,s={},o={},l=new TextDecoder;if(typeof t=="string")n=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Xf){try{s[Mt.KHR_BINARY_GLTF]=new Jh(t)}catch(d){a&&a(d);return}n=JSON.parse(s[Mt.KHR_BINARY_GLTF].content)}else n=JSON.parse(l.decode(t));else n=t;if(n.asset===void 0||n.asset.version[0]<2){a&&a(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new nu(n,{path:i||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,s[d.name]=!0}if(n.extensionsUsed)for(let h=0;h<n.extensionsUsed.length;++h){let d=n.extensionsUsed[h],u=n.extensionsRequired||[];switch(d){case Mt.KHR_MATERIALS_UNLIT:s[d]=new Oh;break;case Mt.KHR_DRACO_MESH_COMPRESSION:s[d]=new Qh(n,this.dracoLoader);break;case Mt.KHR_TEXTURE_TRANSFORM:s[d]=new eu;break;case Mt.KHR_MESH_QUANTIZATION:s[d]=new tu;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(r,a)}parseAsync(t,i){let r=this;return new Promise(function(a,n){r.parse(t,i,a,n)})}};function zM(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function oi(e,t,i){let r=e.json.materials[t];return r.extensions&&r.extensions[i]?r.extensions[i]:null}var Mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Uh=class{constructor(t){this.parser=t,this.name=Mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,i=this.parser.json.nodes||[];for(let r=0,a=i.length;r<a;r++){let n=i[r];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(t){let i=this.parser,r="light:"+t,a=i.cache.get(r);if(a)return a;let n=i.json,l=((n.extensions&&n.extensions[this.name]||{}).lights||[])[t],c,h=new be(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Gi);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Is(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Mf(h),c.distance=d;break;case"spot":c=new Zo(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Gr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=i.createUniqueName(l.name||"light_"+t),a=Promise.resolve(c),i.cache.add(r,a),a}getDependency(t,i){if(t==="light")return this._loadLight(i)}createNodeAttachment(t){let i=this,r=this.parser,n=r.json.nodes[t],o=(n.extensions&&n.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return r._getNodeRef(i.cache,o,l)})}},Oh=class{constructor(){this.name=Mt.KHR_MATERIALS_UNLIT}getMaterialType(){return di}extendParams(t,i,r){let a=[];t.color=new be(1,1,1),t.opacity=1;let n=i.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){let s=n.baseColorFactor;t.color.setRGB(s[0],s[1],s[2],Gi),t.opacity=s[3]}n.baseColorTexture!==void 0&&a.push(r.assignTexture(t,"map",n.baseColorTexture,Gt))}return Promise.all(a)}},Fh=class{constructor(t){this.parser=t,this.name=Mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,i){let r=oi(this.parser,t,this.name);return r===null||r.emissiveStrength!==void 0&&(i.emissiveIntensity=r.emissiveStrength),Promise.resolve()}},Bh=class{constructor(t){this.parser=t,this.name=Mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return oi(this.parser,t,this.name)!==null?_r:null}extendMaterialParams(t,i){let r=oi(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];if(r.clearcoatFactor!==void 0&&(i.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&a.push(this.parser.assignTexture(i,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(i.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&a.push(this.parser.assignTexture(i,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(a.push(this.parser.assignTexture(i,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){let n=r.clearcoatNormalTexture.scale;i.clearcoatNormalScale=new de(n,n)}return Promise.all(a)}},zh=class{constructor(t){this.parser=t,this.name=Mt.KHR_MATERIALS_DISPERSION}getMaterialType(t){return oi(this.parser,t,this.name)!==null?_r:null}extendMaterialParams(t,i){let r=oi(this.parser,t,this.name);return r===null||(i.dispersion=r.dispersion!==void 0?r.dispersion:0),Promise.resolve()}},Hh=class{constructor(t){this.parser=t,this.name=Mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return oi(this.parser,t,this.name)!==null?_r:null}extendMaterialParams(t,i){let r=oi(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];return r.iridescenceFactor!==void 0&&(i.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&a.push(this.parser.assignTexture(i,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(i.iridescenceIOR=r.iridescenceIor),i.iridescenceThicknessRange===void 0&&(i.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&a.push(this.parser.assignTexture(i,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(a)}},kh=class{constructor(t){this.parser=t,this.name=Mt.KHR_MATERIALS_SHEEN}getMaterialType(t){return oi(this.parser,t,this.name)!==null?_r:null}extendMaterialParams(t,i){let r=oi(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];if(i.sheenColor=new be(0,0,0),i.sheenRoughness=0,i.sheen=1,r.sheenColorFactor!==void 0){let n=r.sheenColorFactor;i.sheenColor.setRGB(n[0],n[1],n[2],Gi)}return r.sheenRoughnessFactor!==void 0&&(i.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&a.push(this.parser.assignTexture(i,"sheenColorMap",r.sheenColorTexture,Gt)),r.sheenRoughnessTexture!==void 0&&a.push(this.parser.assignTexture(i,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(a)}},Gh=class{constructor(t){this.parser=t,this.name=Mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return oi(this.parser,t,this.name)!==null?_r:null}extendMaterialParams(t,i){let r=oi(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];return r.transmissionFactor!==void 0&&(i.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&a.push(this.parser.assignTexture(i,"transmissionMap",r.transmissionTexture)),Promise.all(a)}},Vh=class{constructor(t){this.parser=t,this.name=Mt.KHR_MATERIALS_VOLUME}getMaterialType(t){return oi(this.parser,t,this.name)!==null?_r:null}extendMaterialParams(t,i){let r=oi(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];i.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&a.push(this.parser.assignTexture(i,"thicknessMap",r.thicknessTexture)),i.attenuationDistance=r.attenuationDistance||1/0;let n=r.attenuationColor||[1,1,1];return i.attenuationColor=new be().setRGB(n[0],n[1],n[2],Gi),Promise.all(a)}},Wh=class{constructor(t){this.parser=t,this.name=Mt.KHR_MATERIALS_IOR}getMaterialType(t){return oi(this.parser,t,this.name)!==null?_r:null}extendMaterialParams(t,i){let r=oi(this.parser,t,this.name);return r===null||(i.ior=r.ior!==void 0?r.ior:1.5,i.ior===0&&(i.ior=1e3)),Promise.resolve()}},Xh=class{constructor(t){this.parser=t,this.name=Mt.KHR_MATERIALS_SPECULAR}getMaterialType(t){return oi(this.parser,t,this.name)!==null?_r:null}extendMaterialParams(t,i){let r=oi(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];i.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&a.push(this.parser.assignTexture(i,"specularIntensityMap",r.specularTexture));let n=r.specularColorFactor||[1,1,1];return i.specularColor=new be().setRGB(n[0],n[1],n[2],Gi),r.specularColorTexture!==void 0&&a.push(this.parser.assignTexture(i,"specularColorMap",r.specularColorTexture,Gt)),Promise.all(a)}},jh=class{constructor(t){this.parser=t,this.name=Mt.EXT_MATERIALS_BUMP}getMaterialType(t){return oi(this.parser,t,this.name)!==null?_r:null}extendMaterialParams(t,i){let r=oi(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];return i.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&a.push(this.parser.assignTexture(i,"bumpMap",r.bumpTexture)),Promise.all(a)}},qh=class{constructor(t){this.parser=t,this.name=Mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return oi(this.parser,t,this.name)!==null?_r:null}extendMaterialParams(t,i){let r=oi(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];return r.anisotropyStrength!==void 0&&(i.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(i.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&a.push(this.parser.assignTexture(i,"anisotropyMap",r.anisotropyTexture)),Promise.all(a)}},Yh=class{constructor(t){this.parser=t,this.name=Mt.KHR_TEXTURE_BASISU}loadTexture(t){let i=this.parser,r=i.json,a=r.textures[t];if(!a.extensions||!a.extensions[this.name])return null;let n=a.extensions[this.name],s=i.options.ktx2Loader;if(!s){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return i.loadTextureImage(t,n.source,s)}},Zh=class{constructor(t){this.parser=t,this.name=Mt.EXT_TEXTURE_WEBP}loadTexture(t){let i=this.name,r=this.parser,a=r.json,n=a.textures[t];if(!n.extensions||!n.extensions[i])return null;let s=n.extensions[i],o=a.images[s.source],l=r.textureLoader;if(o.uri){let c=r.options.manager.getHandler(o.uri);c!==null&&(l=c)}return r.loadTextureImage(t,s.source,l)}},Kh=class{constructor(t){this.parser=t,this.name=Mt.EXT_TEXTURE_AVIF}loadTexture(t){let i=this.name,r=this.parser,a=r.json,n=a.textures[t];if(!n.extensions||!n.extensions[i])return null;let s=n.extensions[i],o=a.images[s.source],l=r.textureLoader;if(o.uri){let c=r.options.manager.getHandler(o.uri);c!==null&&(l=c)}return r.loadTextureImage(t,s.source,l)}},al=class{constructor(t,i){this.name=i,this.parser=t}loadBufferView(t){let i=this.parser.json,r=i.bufferViews[t];if(r.extensions&&r.extensions[this.name]){let a=r.extensions[this.name],n=this.parser.getDependency("buffer",a.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return n.then(function(o){let l=a.byteOffset||0,c=a.byteLength||0,h=a.count,d=a.byteStride,u=new Uint8Array(o,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,d,u,a.mode,a.filter).then(function(p){return p.buffer}):s.ready.then(function(){let p=new ArrayBuffer(h*d);return s.decodeGltfBuffer(new Uint8Array(p),h,d,u,a.mode,a.filter),p})})}else return null}},$h=class{constructor(t){this.name=Mt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let i=this.parser.json,r=i.nodes[t];if(!r.extensions||!r.extensions[this.name]||r.mesh===void 0)return null;let a=i.meshes[r.mesh];for(let c of a.primitives)if(c.mode!==lr.TRIANGLES&&c.mode!==lr.TRIANGLE_STRIP&&c.mode!==lr.TRIANGLE_FAN&&c.mode!==void 0)return null;let s=r.extensions[this.name].attributes,o=[],l={};for(let c in s)o.push(this.parser.getDependency("accessor",s[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(c=>{let h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,p=[];for(let g of d){let x=new Ze,m=new C,f=new ii,M=new C(1,1,1),y=new zi(g.geometry,g.material,u);for(let T=0;T<u;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,T),l.SCALE&&M.fromBufferAttribute(l.SCALE,T),y.setMatrixAt(T,x.compose(m,f,M));let v=null;for(let T in l)if(T==="_COLOR_0"){let R=l[T];y.instanceColor=new Yi(R.array,R.itemSize,R.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(v===null){let w=y.geometry;v=new yt,v.name=w.name;for(let _ in w.attributes)v.setAttribute(_,w.attributes[_]);for(let _ in w.morphAttributes)v.morphAttributes[_]=w.morphAttributes[_];w.index!==null&&v.setIndex(w.index),v.morphTargetsRelative=w.morphTargetsRelative;for(let _ of w.groups)v.addGroup(_.start,_.count,_.materialIndex);w.boundingBox!==null&&(v.boundingBox=w.boundingBox.clone()),w.boundingSphere!==null&&(v.boundingSphere=w.boundingSphere.clone()),v.drawRange.start=w.drawRange.start,v.drawRange.count=w.drawRange.count,v.userData=Object.assign({},w.userData),y.geometry=v}let R=l[T];v.setAttribute(T,new Yi(R.array,R.itemSize,R.normalized))}ti.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Xf="glTF",Us=12,kf={JSON:1313821514,BIN:5130562},Jh=class{constructor(t){this.name=Mt.KHR_BINARY_GLTF,this.content=null,this.body=null;let i=new DataView(t,0,Us),r=new TextDecoder;if(this.header={magic:r.decode(new Uint8Array(t.slice(0,4))),version:i.getUint32(4,!0),length:i.getUint32(8,!0)},this.header.magic!==Xf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let a=this.header.length-Us,n=new DataView(t,Us),s=0;for(;s<a;){let o=n.getUint32(s,!0);s+=4;let l=n.getUint32(s,!0);if(s+=4,l===kf.JSON){let c=new Uint8Array(t,Us+s,o);this.content=r.decode(c)}else if(l===kf.BIN){let c=Us+s;this.body=t.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Qh=class{constructor(t,i){if(!i)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Mt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=i,this.dracoLoader.preload()}decodePrimitive(t,i){let r=this.json,a=this.dracoLoader,n=t.extensions[this.name].bufferView,s=t.extensions[this.name].attributes,o={},l={},c={};for(let h in s){let d=ru[h]||h.toLowerCase();o[d]=s[h]}for(let h in t.attributes){let d=ru[h]||h.toLowerCase();if(s[h]!==void 0){let u=r.accessors[t.attributes[h]],p=Gn[u.componentType];c[d]=p.name,l[d]=u.normalized===!0}}return i.getDependency("bufferView",n).then(function(h){return new Promise(function(d,u){a.decodeDracoFile(h,function(p){for(let g in p.attributes){let x=p.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}d(p)},o,c,Gi,u)})})}},eu=class{constructor(){this.name=Mt.KHR_TEXTURE_TRANSFORM}extendTexture(t,i){if((i.texCoord===void 0||i.texCoord===t.channel)&&i.offset===void 0&&i.rotation===void 0&&i.scale===void 0)return t;if(t=t.clone(),i.texCoord!==void 0&&(t.channel=i.texCoord),i.offset!==void 0&&t.offset.fromArray(i.offset),i.rotation!==void 0&&(t.rotation=i.rotation),i.scale!==void 0&&t.repeat.fromArray(i.scale),i.rotation!==void 0){let r=Math.cos(t.rotation),a=Math.sin(t.rotation);t.matrix.set(t.repeat.x*r,t.repeat.y*a,t.offset.x,-t.repeat.x*a,t.repeat.y*r,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}},tu=class{constructor(){this.name=Mt.KHR_MESH_QUANTIZATION}},nl=class extends Ua{constructor(t,i,r,a){super(t,i,r,a)}copySampleValue_(t){let i=this.resultBuffer,r=this.sampleValues,a=this.valueSize,n=t*a*3+a;for(let s=0;s!==a;s++)i[s]=r[n+s];return i}interpolate_(t,i,r,a){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=a-i,d=(r-i)/h,u=d*d,p=u*d,g=t*c,x=g-c,m=-2*p+3*u,f=p-u,M=1-m,y=f-u+d;for(let v=0;v!==o;v++){let T=s[x+v+o],R=s[x+v+l]*h,w=s[g+v+o],_=s[g+v]*h;n[v]=M*T+y*R+m*w+f*_}return n}},HM=new ii,iu=class extends nl{interpolate_(t,i,r,a){let n=super.interpolate_(t,i,r,a);return HM.fromArray(n).normalize().toArray(n),n}},lr={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Gn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gf={9728:ci,9729:Vt,9984:Zc,9985:us,9986:pn,9987:Lr},Vf={33071:fr,33648:vs,10497:Pa},Lh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ru={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xa={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kM={CUBICSPLINE:void 0,LINEAR:wn,STEP:En},Dh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function GM(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Qt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ta})),e.DefaultMaterial}function Va(e,t,i){for(let r in i.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=i.extensions[r])}function Gr(e,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function VM(e,t,i){let r=!1,a=!1,n=!1;for(let c=0,h=t.length;c<h;c++){let d=t[c];if(d.POSITION!==void 0&&(r=!0),d.NORMAL!==void 0&&(a=!0),d.COLOR_0!==void 0&&(n=!0),r&&a&&n)break}if(!r&&!a&&!n)return Promise.resolve(e);let s=[],o=[],l=[];for(let c=0,h=t.length;c<h;c++){let d=t[c];if(r){let u=d.POSITION!==void 0?i.getDependency("accessor",d.POSITION):e.attributes.position;s.push(u)}if(a){let u=d.NORMAL!==void 0?i.getDependency("accessor",d.NORMAL):e.attributes.normal;o.push(u)}if(n){let u=d.COLOR_0!==void 0?i.getDependency("accessor",d.COLOR_0):e.attributes.color;l.push(u)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],d=c[1],u=c[2];return r&&(e.morphAttributes.position=h),a&&(e.morphAttributes.normal=d),n&&(e.morphAttributes.color=u),e.morphTargetsRelative=!0,e})}function WM(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let i=0,r=t.weights.length;i<r;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++)e.morphTargetDictionary[i[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function XM(e){let t,i=e.extensions&&e.extensions[Mt.KHR_DRACO_MESH_COMPRESSION];if(i?t="draco:"+i.bufferView+":"+i.indices+":"+Nh(i.attributes):t=e.indices+":"+Nh(e.attributes)+":"+e.mode,e.targets!==void 0)for(let r=0,a=e.targets.length;r<a;r++)t+=":"+Nh(e.targets[r]);return t}function Nh(e){let t="",i=Object.keys(e).sort();for(let r=0,a=i.length;r<a;r++)t+=i[r]+":"+e[i[r]]+";";return t}function au(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jM(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var qM=new Ze,nu=class{constructor(t={},i={}){this.json=t,this.extensions={},this.plugins={},this.options=i,this.cache=new zM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,a=-1,n=!1,s=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;r=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);a=r&&l?parseInt(l[1],10):-1,n=o.indexOf("Firefox")>-1,s=n?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||r&&a<17||n&&s<98?this.textureLoader=new qo(this.options.manager):this.textureLoader=new Sf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,i){let r=this,a=this.json,n=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(s){let o={scene:s[0][a.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:a.asset,parser:r,userData:{}};return Va(n,o,a),Gr(o,a),Promise.all(r._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();t(o)})}).catch(i)}_markDefs(){let t=this.json.nodes||[],i=this.json.skins||[],r=this.json.meshes||[];for(let a=0,n=i.length;a<n;a++){let s=i[a].joints;for(let o=0,l=s.length;o<l;o++)t[s[o]].isBone=!0}for(let a=0,n=t.length;a<n;a++){let s=t[a];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(r[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(t,i){i!==void 0&&(t.refs[i]===void 0&&(t.refs[i]=t.uses[i]=0),t.refs[i]++)}_getNodeRef(t,i,r){if(t.refs[i]<=1)return r;let a=r.clone(),n=(s,o)=>{let l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(let[c,h]of s.children.entries())n(h,o.children[c])};return n(r,a),a.name+="_instance_"+t.uses[i]++,a}_invokeOne(t){let i=Object.values(this.plugins);i.push(this);for(let r=0;r<i.length;r++){let a=t(i[r]);if(a)return a}return null}_invokeAll(t){let i=Object.values(this.plugins);i.unshift(this);let r=[];for(let a=0;a<i.length;a++){let n=t(i[a]);n&&r.push(n)}return r}getDependency(t,i){let r=t+":"+i,a=this.cache.get(r);if(!a){switch(t){case"scene":a=this.loadScene(i);break;case"node":a=this._invokeOne(function(n){return n.loadNode&&n.loadNode(i)});break;case"mesh":a=this._invokeOne(function(n){return n.loadMesh&&n.loadMesh(i)});break;case"accessor":a=this.loadAccessor(i);break;case"bufferView":a=this._invokeOne(function(n){return n.loadBufferView&&n.loadBufferView(i)});break;case"buffer":a=this.loadBuffer(i);break;case"material":a=this._invokeOne(function(n){return n.loadMaterial&&n.loadMaterial(i)});break;case"texture":a=this._invokeOne(function(n){return n.loadTexture&&n.loadTexture(i)});break;case"skin":a=this.loadSkin(i);break;case"animation":a=this._invokeOne(function(n){return n.loadAnimation&&n.loadAnimation(i)});break;case"camera":a=this.loadCamera(i);break;default:if(a=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(t,i)}),!a)throw new Error("Unknown type: "+t);break}this.cache.add(r,a)}return a}getDependencies(t){let i=this.cache.get(t);if(!i){let r=this,a=this.json[t+(t==="mesh"?"es":"s")]||[];i=Promise.all(a.map(function(n,s){return r.getDependency(t,s)})),this.cache.add(t,i)}return i}loadBuffer(t){let i=this.json.buffers[t],r=this.fileLoader;if(i.type&&i.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+i.type+" buffer type is not supported.");if(i.uri===void 0&&t===0)return Promise.resolve(this.extensions[Mt.KHR_BINARY_GLTF].body);let a=this.options;return new Promise(function(n,s){r.load(Bn.resolveURL(i.uri,a.path),n,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+i.uri+'".'))})})}loadBufferView(t){let i=this.json.bufferViews[t];return this.getDependency("buffer",i.buffer).then(function(r){let a=i.byteLength||0,n=i.byteOffset||0;return r.slice(n,n+a)})}loadAccessor(t){let i=this,r=this.json,a=this.json.accessors[t];if(a.bufferView===void 0&&a.sparse===void 0){let s=Lh[a.type],o=Gn[a.componentType],l=a.normalized===!0,c=new o(a.count*s);return Promise.resolve(new Ot(c,s,l))}let n=[];return a.bufferView!==void 0?n.push(this.getDependency("bufferView",a.bufferView)):n.push(null),a.sparse!==void 0&&(n.push(this.getDependency("bufferView",a.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",a.sparse.values.bufferView))),Promise.all(n).then(function(s){let o=s[0],l=Lh[a.type],c=Gn[a.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=a.byteOffset||0,p=a.bufferView!==void 0?r.bufferViews[a.bufferView].byteStride:void 0,g=a.normalized===!0,x,m;if(p&&p!==d){let f=Math.floor(u/p),M="InterleavedBuffer:"+a.bufferView+":"+a.componentType+":"+f+":"+a.count,y=i.cache.get(M);y||(x=new c(o,f*p,a.count*p/h),y=new oh(x,p/h),i.cache.add(M,y)),m=new lh(y,l,u%p/h,g)}else o===null?x=new c(a.count*l):x=new c(o,u,a.count*l),m=new Ot(x,l,g);if(a.sparse!==void 0){let f=Lh.SCALAR,M=Gn[a.sparse.indices.componentType],y=a.sparse.indices.byteOffset||0,v=a.sparse.values.byteOffset||0,T=new M(s[1],y,a.sparse.count*f),R=new c(s[2],v,a.sparse.count*l);o!==null&&(m=new Ot(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,_=T.length;w<_;w++){let b=T[w];if(m.setX(b,R[w*l]),l>=2&&m.setY(b,R[w*l+1]),l>=3&&m.setZ(b,R[w*l+2]),l>=4&&m.setW(b,R[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){let i=this.json,r=this.options,n=i.textures[t].source,s=i.images[n],o=this.textureLoader;if(s.uri){let l=r.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(t,n,o)}loadTextureImage(t,i,r){let a=this,n=this.json,s=n.textures[t],o=n.images[i],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(i,r).then(function(h){h.flipY=!1,h.name=s.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(n.samplers||{})[s.sampler]||{};return h.magFilter=Gf[u.magFilter]||Vt,h.minFilter=Gf[u.minFilter]||Lr,h.wrapS=Vf[u.wrapS]||Pa,h.wrapT=Vf[u.wrapT]||Pa,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==ci&&h.minFilter!==Vt,a.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,i){let r=this,a=this.json,n=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());let s=a.images[t],o=self.URL||self.webkitURL,l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=r.getDependency("bufferView",s.bufferView).then(function(d){c=!0;let u=new Blob([d],{type:s.mimeType});return l=o.createObjectURL(u),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(d){return new Promise(function(u,p){let g=u;i.isImageBitmapLoader===!0&&(g=function(x){let m=new Di(x);m.needsUpdate=!0,u(m)}),i.load(Bn.resolveURL(d,n.path),g,void 0,p)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),Gr(d,s),d.userData.mimeType=s.mimeType||jM(s.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[t]=h,h}assignTexture(t,i,r,a){let n=this;return this.getDependency("texture",r.index).then(function(s){if(!s)return null;if(r.texCoord!==void 0&&r.texCoord>0&&(s=s.clone(),s.channel=r.texCoord),n.extensions[Mt.KHR_TEXTURE_TRANSFORM]){let o=r.extensions!==void 0?r.extensions[Mt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=n.associations.get(s);s=n.extensions[Mt.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),n.associations.set(s,l)}}return a!==void 0&&(s.colorSpace=a),t[i]=s,s})}assignFinalMaterial(t){let i=t.geometry,r=t.material,a=i.attributes.tangent===void 0,n=i.attributes.color!==void 0,s=i.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+r.uuid,l=this.cache.get(o);l||(l=new Rs,vr.prototype.copy.call(l,r),l.color.copy(r.color),l.map=r.map,l.sizeAttenuation=!1,this.cache.add(o,l)),r=l}else if(t.isLine){let o="LineBasicMaterial:"+r.uuid,l=this.cache.get(o);l||(l=new hh,vr.prototype.copy.call(l,r),l.color.copy(r.color),l.map=r.map,this.cache.add(o,l)),r=l}if(a||n||s){let o="ClonedMaterial:"+r.uuid+":";a&&(o+="derivative-tangents:"),n&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=r.clone(),n&&(l.vertexColors=!0),s&&(l.flatShading=!0),a&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(r))),r=l}t.material=r}getMaterialType(){return Qt}loadMaterial(t){let i=this,r=this.json,a=this.extensions,n=r.materials[t],s,o={},l=n.extensions||{},c=[];if(l[Mt.KHR_MATERIALS_UNLIT]){let d=a[Mt.KHR_MATERIALS_UNLIT];s=d.getMaterialType(),c.push(d.extendParams(o,n,i))}else{let d=n.pbrMetallicRoughness||{};if(o.color=new be(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Gi),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(i.assignTexture(o,"map",d.baseColorTexture,Gt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(i.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(i.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),s=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,o)})))}n.doubleSided===!0&&(o.side=Ri);let h=n.alphaMode||Dh.OPAQUE;if(h===Dh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Dh.MASK&&(o.alphaTest=n.alphaCutoff!==void 0?n.alphaCutoff:.5)),n.normalTexture!==void 0&&s!==di&&(c.push(i.assignTexture(o,"normalMap",n.normalTexture)),o.normalScale=new de(1,1),n.normalTexture.scale!==void 0)){let d=n.normalTexture.scale;o.normalScale.set(d,d)}if(n.occlusionTexture!==void 0&&s!==di&&(c.push(i.assignTexture(o,"aoMap",n.occlusionTexture)),n.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=n.occlusionTexture.strength)),n.emissiveFactor!==void 0&&s!==di){let d=n.emissiveFactor;o.emissive=new be().setRGB(d[0],d[1],d[2],Gi)}return n.emissiveTexture!==void 0&&s!==di&&c.push(i.assignTexture(o,"emissiveMap",n.emissiveTexture,Gt)),Promise.all(c).then(function(){let d=new s(o);return n.name&&(d.name=n.name),Gr(d,n),i.associations.set(d,{materials:t}),n.extensions&&Va(a,d,n),d})}createUniqueName(t){let i=Yt.sanitizeNodeName(t||"");return i in this.nodeNamesUsed?i+"_"+ ++this.nodeNamesUsed[i]:(this.nodeNamesUsed[i]=0,i)}loadGeometries(t){let i=this,r=this.extensions,a=this.primitiveCache;function n(o){return r[Mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,i).then(function(l){return Wf(l,o,i)})}let s=[];for(let o=0,l=t.length;o<l;o++){let c=t[o],h=XM(c),d=a[h];if(d)s.push(d.promise);else{let u;c.extensions&&c.extensions[Mt.KHR_DRACO_MESH_COMPRESSION]?u=n(c):u=Wf(new yt,c,i),c.mode===lr.TRIANGLE_STRIP?u=u.then(p=>Ph(p,Vo)):c.mode===lr.TRIANGLE_FAN&&(u=u.then(p=>Ph(p,As))),a[h]={primitive:c,promise:u},s.push(u)}}return Promise.all(s)}loadMesh(t){let i=this,r=this.json,a=this.extensions,n=r.meshes[t],s=n.primitives,o=[];for(let l=0,c=s.length;l<c;l++){let h=s[l].material===void 0?GM(this.cache):this.getDependency("material",s[l].material);o.push(h)}return o.push(i.loadGeometries(s)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let p=0,g=h.length;p<g;p++){let x=h[p],m=s[p],f,M=c[p];if(m.mode===lr.TRIANGLES||m.mode===lr.TRIANGLE_STRIP||m.mode===lr.TRIANGLE_FAN||m.mode===void 0){let y=n.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");y&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=y&&v?new Lp(x,M):new rt(x,M),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(m.mode===lr.LINES)f=new jo(x,M);else if(m.mode===lr.LINE_STRIP)f=new Xo(x,M);else if(m.mode===lr.LINE_LOOP)f=new Op(x,M);else if(m.mode===lr.POINTS)f=new Dn(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&WM(f,n),f.name=i.createUniqueName(n.name||"mesh_"+t),Gr(f,n),m.extensions&&Va(a,f,m),i.assignFinalMaterial(f),d.push(f)}for(let p=0,g=d.length;p<g;p++)i.associations.set(d[p],{meshes:t,primitives:p});if(d.length===1)return n.extensions&&Va(a,d[0],n),d[0];let u=new hi;n.extensions&&Va(a,u,n),i.associations.set(u,{meshes:t});for(let p=0,g=d.length;p<g;p++)u.add(d[p]);return u})}loadCamera(t){let i,r=this.json.cameras[t],a=r[r.type];if(!a){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return r.type==="perspective"?i=new Ai(xp.radToDeg(a.yfov),a.aspectRatio||1,a.znear||1,a.zfar||2e6):r.type==="orthographic"&&(i=new Ba(-a.xmag,a.xmag,a.ymag,-a.ymag,a.znear,a.zfar)),r.name&&(i.name=this.createUniqueName(r.name)),Gr(i,r),Promise.resolve(i)}loadSkin(t){let i=this.json.skins[t],r=[];for(let a=0,n=i.joints.length;a<n;a++)r.push(this._loadNodeShallow(i.joints[a]));return i.inverseBindMatrices!==void 0?r.push(this.getDependency("accessor",i.inverseBindMatrices)):r.push(null),Promise.all(r).then(function(a){let n=a.pop(),s=a,o=[],l=[];for(let c=0,h=s.length;c<h;c++){let d=s[c];if(d){o.push(d);let u=new Ze;n!==null&&u.fromArray(n.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',i.joints[c])}return new Dp(o,l)})}loadAnimation(t){let i=this.json,r=this,a=i.animations[t],n=a.name?a.name:"animation_"+t,s=[],o=[],l=[],c=[],h=[];for(let d=0,u=a.channels.length;d<u;d++){let p=a.channels[d],g=a.samplers[p.sampler],x=p.target,m=x.node,f=a.parameters!==void 0?a.parameters[g.input]:g.input,M=a.parameters!==void 0?a.parameters[g.output]:g.output;x.node!==void 0&&(s.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(x))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){let u=d[0],p=d[1],g=d[2],x=d[3],m=d[4],f=[];for(let y=0,v=u.length;y<v;y++){let T=u[y],R=p[y],w=g[y],_=x[y],b=m[y];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let N=r._createAnimationTracks(T,R,w,_,b);if(N)for(let D=0;D<N.length;D++)f.push(N[D])}let M=new yh(n,void 0,f);return Gr(M,a),M})}createNodeMesh(t){let i=this.json,r=this,a=i.nodes[t];return a.mesh===void 0?null:r.getDependency("mesh",a.mesh).then(function(n){let s=r._getNodeRef(r.meshCache,a.mesh,n);return a.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,c=a.weights.length;l<c;l++)o.morphTargetInfluences[l]=a.weights[l]}),s})}loadNode(t){let i=this.json,r=this,a=i.nodes[t],n=r._loadNodeShallow(t),s=[],o=a.children||[];for(let c=0,h=o.length;c<h;c++)s.push(r.getDependency("node",o[c]));let l=a.skin===void 0?Promise.resolve(null):r.getDependency("skin",a.skin);return Promise.all([n,Promise.all(s),l]).then(function(c){let h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(u,qM)});for(let p=0,g=d.length;p<g;p++)h.add(d[p]);if(h.userData.pivot!==void 0&&d.length>0){let p=h.userData.pivot,g=d[0];h.pivot=new C().fromArray(p),h.position.x-=p[0],h.position.y-=p[1],h.position.z-=p[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){let i=this.json,r=this.extensions,a=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let n=i.nodes[t],s=n.name?a.createUniqueName(n.name):"",o=[],l=a._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&o.push(l),n.camera!==void 0&&o.push(a.getDependency("camera",n.camera).then(function(c){return a._getNodeRef(a.cameraCache,n.camera,c)})),a._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){o.push(c)}),this.nodeCache[t]=Promise.all(o).then(function(c){let h;if(n.isBone===!0?h=new ch:c.length>1?h=new hi:c.length===1?h=c[0]:h=new ti,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(n.name&&(h.userData.name=n.name,h.name=s),Gr(h,n),n.extensions&&Va(r,h,n),n.matrix!==void 0){let d=new Ze;d.fromArray(n.matrix),h.applyMatrix4(d)}else n.translation!==void 0&&h.position.fromArray(n.translation),n.rotation!==void 0&&h.quaternion.fromArray(n.rotation),n.scale!==void 0&&h.scale.fromArray(n.scale);if(!a.associations.has(h))a.associations.set(h,{});else if(n.mesh!==void 0&&a.meshCache.refs[n.mesh]>1){let d=a.associations.get(h);a.associations.set(h,{...d})}return a.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let i=this.extensions,r=this.json.scenes[t],a=this,n=new hi;r.name&&(n.name=a.createUniqueName(r.name)),Gr(n,r),r.extensions&&Va(i,n,r);let s=r.nodes||[],o=[];for(let l=0,c=s.length;l<c;l++)o.push(a.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){let u=l[h];u.parent!==null?n.add(zf(u)):n.add(u)}let c=h=>{let d=new Map;for(let[u,p]of a.associations)(u instanceof vr||u instanceof Di)&&d.set(u,p);return h.traverse(u=>{let p=a.associations.get(u);p!=null&&d.set(u,p)}),d};return a.associations=c(n),n})}_createAnimationTracks(t,i,r,a,n){let s=[],o=t.name?t.name:t.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}xa[n.path]===xa.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(o);let h;switch(xa[n.path]){case xa.weights:h=Un;break;case xa.rotation:h=Oa;break;case xa.translation:case xa.scale:h=Fn;break;default:switch(r.itemSize){case 1:h=Un;break;case 2:case 3:default:h=Fn;break}break}let d=a.interpolation!==void 0?kM[a.interpolation]:wn,u=this._getArrayFromAccessor(r);for(let p=0,g=l.length;p<g;p++){let x=new h(l[p]+"."+xa[n.path],i.array,u,d);a.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),s.push(x)}return s}_getArrayFromAccessor(t){let i=t.array;if(t.normalized){let r=au(i.constructor),a=new Float32Array(i.length);for(let n=0,s=i.length;n<s;n++)a[n]=i[n]*r;i=a}return i}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(r){let a=this instanceof Oa?iu:nl;return new a(this.times,this.values,this.getValueSize()/3,r)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function YM(e,t,i){let r=t.attributes,a=new rr;if(r.POSITION!==void 0){let o=i.json.accessors[r.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(a.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),o.normalized){let h=au(Gn[o.componentType]);a.min.multiplyScalar(h),a.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let n=t.targets;if(n!==void 0){let o=new C,l=new C;for(let c=0,h=n.length;c<h;c++){let d=n[c];if(d.POSITION!==void 0){let u=i.json.accessors[d.POSITION],p=u.min,g=u.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),u.normalized){let x=au(Gn[u.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(o)}e.boundingBox=a;let s=new ar;a.getCenter(s.center),s.radius=a.min.distanceTo(a.max)/2,e.boundingSphere=s}function Wf(e,t,i){let r=t.attributes,a=[];function n(s,o){return i.getDependency("accessor",s).then(function(l){e.setAttribute(o,l)})}for(let s in r){let o=ru[s]||s.toLowerCase();o in e.attributes||a.push(n(r[s],o))}if(t.indices!==void 0&&!e.index){let s=i.getDependency("accessor",t.indices).then(function(o){e.setIndex(o)});a.push(s)}return _t.workingColorSpace!==Gi&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${_t.workingColorSpace}" not supported.`),Gr(e,t),YM(e,t,i),Promise.all(a).then(function(){return t.targets!==void 0?VM(e,t.targets,i):e})}var jf=["car","trees","props","landmarks"];async function qf(e,t){let i=new rl,r={},a=0;await Promise.all(jf.map(s=>new Promise((o,l)=>i.load(`${e}${s}.glb`,c=>{c.scene.updateMatrixWorld(!0),c.scene.traverse(h=>{if(!h.isMesh)return;let d=(h.parent&&h.parent!==c.scene?h.parent.name:h.name).replace(/_\d+$/,""),[u,p]=d.split("__"),g=r[u]||(r[u]={parts:[],roles:{},hulls:[]}),x=h.geometry.clone();if(x.applyMatrix4(h.matrixWorld),p&&p.startsWith("col")){g.hulls.push(new Float32Array(x.attributes.position.array));return}let m=h.material;if(m.map&&(m.map.colorSpace=Gt),m.metalness>.3&&(m.metalness=.3,m.roughness=Math.max(m.roughness,.35)),p){g.roles[p]=g.roles[p]||[],g.roles[p].push({geometry:x,material:m});return}g.parts.push({name:m.name,geometry:x,material:m})}),t==null||t(++a/jf.length),o()},void 0,l))));let n={};for(let s in r)for(let o of r[s].parts){let l=o.material.name;n[l]||(n[l]=o.material),o.material=n[l]}return r.__materials=n,r}function ya(e,t,{shadow:i=!0}={}){let r=e[t],a=new hi;if(a.name=t,!r)return console.warn("missing asset",t),a;for(let n of r.parts){let s=new rt(n.geometry,n.material);s.castShadow=i,s.receiveShadow=!0,a.add(s)}return a}function Yf(e,t,i,{shadow:r=!0,patch:a}={}){let n=e[t],s=new hi;if(s.name=t,!n||!i.length)return{group:s,meshes:[]};let o=n.parts.map(l=>{let c=a?a(l.material,l.name):l.material,h=new zi(l.geometry,c,i.length);return i.forEach((d,u)=>h.setMatrixAt(u,d)),h.castShadow=r,h.receiveShadow=!0,h.computeBoundingSphere(),s.add(h),h});return{group:s,meshes:o}}var Ni=-Math.PI/2,su=[["pyramid_big",-90,-30,.08,1],["pyramid_mid",-77,-37,.08,1],["pyramid_small",-98,-12,.08,1],["sphinx",-78,-22,0,1],["mosque",-56,-46,Ni,1],["cairo_house0",-46,-40,Ni,1],["cairo_house1",-48,-50,Ni,1],["cairo_house2",-50,-24,Ni,1],["cairo_house0",-64,-50,Ni,.9],["cairo_house2",-44,-28,0,.9],["luxor_pylon",-54,10,Ni,1],["luxor_colonnade",-54,-1,Ni,1],["obelisk",-49.5,14.5,0,1],["ram",-57.5,16.5,0,1],["ram",-57.5,19,0,1],["ram",-57.5,21.5,0,1],["ram",-50.5,16.5,Math.PI,1],["ram",-50.5,19,Math.PI,1],["ram",-50.5,21.5,Math.PI,1],["pavilion",-6,-59.5,0,1,.45],["yardang",-40,-44,.5,1.2],["yardang",-45,-55,.35,1],["yardang",-36,-60,.6,.85],["yardang",-49,-39,.55,.8],["yardang",-15,-43,.3,.7],["yardang",-33,-38,.45,.6],["stupa",-9,17,0,1.25],["temple",13,18,Ni,1],["naxi_house",-19,24,Ni,1],["naxi_house",-18,36,Ni+.3,1],["naxi_house",-22,30,Ni-.2,.9],["beijing_gate",26,-55,0,1],["corner_tower",6,-48,0,1],["egg",46,-47,0,.9,-.55],["hutong",11,-30,0,1],["hutong",11,-24,0,1],["hutong",40,-31,Math.PI,1],["nanjing_gate",50,-14,0,1],["city_wall",35.5,-14,0,1],["city_wall",64.5,-14,0,1],["zifeng",67,4,0,1],["pearl_tower",78,-5,0,1],["shanghai_tower",90,-7,.3,1],["jinmao",94,0,.2,1],["swfc",85,-13,.4,1],["tower0",71,-8,.1,1],["tower1",80,-16,.2,1],["tower2",68,-14,0,1],["bund_customs",80,16,Ni,1],["bund_bank",73,16.5,Ni,1],["bund_bank",87,16.5,Ni,1],["bund_customs",93,16.5,Ni,.9],["barn",26,55,Ni,1]];Ch.push([-90,-30,10,.3],[-77,-37,8,.3],[-98,-12,5.5,.3],[-78,-22,4,.2],[-56,-46,6,.2],[-54,6,9,.15],[-6,-59.5,4,.45],[-9,17,3.5,.2],[13,18,5,.2],[26,-55,10,.12],[6,-48,5,.12],[46,-47,9,-1.1],[11,-27,5,.12],[50,-14,22,.12],[67,4,3,.12],[82,-8,16,.15],[83,16,14,.15],[26,55,4,.12]);var ou=[...[-6,-3,0,3,6].map(e=>["lantern",26+e,-52.2,0,1,7.1]),...[-4.5,-1.5,1.5,4.5].map(e=>["lantern",26+e,-52.1,0,.9,3.3]),...[70,75,80,85,90,95].map(e=>["lamp_bund",e,12.6,0,1,0]),...[34,40,46].map(e=>["lamp_modern",e,4.6,Math.PI/2,1,0])],Zf=[["camel",-74,-8,2.2,1],["camel",-72,-10,1.6,1],["camel",-12,-54,.4,1],["yak",8,42,.5,1],["yak",11,45,2.4,1],["yak",4,46,1.2,.9],["yak",-12,44,3,1]],Kf=[[-46,8,11],[-40,16,14],[-62,6,9],[-44,28,12.5],[-36,4,16],[-58,-2,13]],$f=[{asset:"felucca",axis:"nile",z0:-50,z1:50,speed:1.4,phase:0},{asset:"felucca",axis:"nile",z0:-50,z1:50,speed:1.1,phase:.55},{asset:"ferry",axis:"huangpu",x0:70,x1:104,speed:2.2,phase:.2}],Jf=[[[-9,4.6,17],[-15,4.6,12]],[[-9,4.6,17],[-2,4.6,11]],[[-9,4.6,17],[-15,4.6,22]],[[-9,4.6,17],[-3,4.6,23]]],Qf=[[-15,12],[-2,11],[-15,22],[-3,23]];function em(){let e=[];for(let t of[40.5,47.5]){for(let i=0;i<11;i++)e.push(["haybale",48+i*1.28,t,0,0]);for(let i=0;i<10;i++)e.push(["haybale",48.64+i*1.28,t,0,1])}for(let[t,i,r]of[[30,38,.3],[33,36,1.2],[44,54,.8],[47,56,2],[32,48,.1]])e.push(["haybale_sq",t,i,r,0]);for(let[t,i]of[[14,6],[15.2,7.4],[16.4,8.8],[12,12],[13,13.2]])e.push(["cone",t,i,0,0]);for(let[t,i]of[[2,8],[2.9,8.2],[2.45,8.1]])e.push(["crate",t,i,.3,0]);return e.push(["crate",2.45,8.1,.6,1]),e}var lu={giza:{plat:"#d9bd8a",accent:"#c8902f",line:"Old Kingdom \xB7 c. 2560 BC"},cairo:{plat:"#d8c7a6",accent:"#2f8f9d",line:"City of a thousand minarets"},luxor:{plat:"#d6b077",accent:"#c8902f",line:"Thebes \xB7 balloons at dawn"},qinggan:{plat:"#c98a64",accent:"#b4482c",line:"Dunhuang \xB7 Zhangye \xB7 Qinghai Lake"},yunnan:{plat:"#eeeae0",accent:"#b8862e",line:"Lijiang \xB7 Shangri-La \xB7 Meili"},beijing:{plat:"#e7e2d6",accent:"#a9322a",line:"The old city"},nanjing:{plat:"#a8aaa5",accent:"#53704a",line:"Plane trees \xB7 Zijin Mountain"},shanghai:{plat:"#c9c6bf",accent:"#c43f78",line:"The Bund \xB7 Lujiazui"},road:{plat:"#cbb07a",accent:"#d9b45c",line:"Everywhere in between"}};var Tt={time:{value:0},snow:{value:0},wet:{value:0},sand:{value:0},night:{value:0},windS:{value:.6},car:{value:new C(0,-99,0)},carR:{value:1.7}},cu={sandstone:"stone",limestone:"stone",granite:"stone",hieroglyph:"stone",bund:"stone",bund_dark:"stone",brick_grey:"brick",brick_dark:"brick",plaster:"plaster",stupa:"plaster",marble:"plaster",white:"plaster",paint_ochre:"plaster",red:"plaster",red_dark:"plaster",concrete:"plaster",sand:"plaster",tile_yellow:"tile",tile_grey:"tile",green_tile:"tile",gold:"tile",glass_city:"glass",glass_dark:"glass",wood:"wood",wood_dark:"wood",crate:"wood",rope:"wood",bark:"bark",bark_light:"bark",bark_white:"birch",fir:"leaf",fir2:"leaf",palm:"leaf",palm_dark:"leaf",ginkgo:"leaf",ginkgo2:"leaf",plane:"leaf",plane2:"leaf",poplar:"leaf",bush:"leaf",shrub:"leaf",blossom:"leaf",reed:"leaf",tuft:"leaf",snow:"snowcap",hay:"hay",hay_end:"hay",wrap:"plaster",steel:"metal",titanium:"metal",iron:"metal",chrome:"metal",verdigris:"metal",stand:"metal",yak:"fur",camel:"fur",cloth_red:"fur",terrazzo:"terrazzo"},ZM={sandstone:[1.1,.55],limestone:[1.3,.6],granite:[.9,.5],hieroglyph:[.5,.35],bund:[.9,.45],bund_dark:[.9,.45],brick_grey:[.46,.2],brick_dark:[.46,.2]},KM=`
  uniform float dTime, dSnow, dWet, dSand, dNight;
  varying vec3 vDW; varying vec3 vDN; varying vec3 vDL; varying vec3 vDR;
  float dH(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float dN(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(dH(i), dH(i + vec3(1,0,0)), f.x), mix(dH(i + vec3(0,1,0)), dH(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(dH(i + vec3(0,0,1)), dH(i + vec3(1,0,1)), f.x), mix(dH(i + vec3(0,1,1)), dH(i + vec3(1,1,1)), f.x), f.y), f.z); }
  float dF(vec3 p){ return dN(p) * 0.5 + dN(p * 2.03) * 0.25 + dN(p * 4.1) * 0.125 + dN(p * 8.3) * 0.0625; }
  vec2 dPlane(vec3 p, vec3 n){ vec3 a = abs(n); return a.y > 0.7 ? p.xz : (a.x > a.z ? p.zy : p.xy); }
  vec3 dPerturb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection){
    vec3 vSigmaX = normalize(dFdx(surf_pos)); vec3 vSigmaY = normalize(dFdy(surf_pos));
    vec3 R1 = cross(vSigmaY, surf_norm); vec3 R2 = cross(surf_norm, vSigmaX);
    float fDet = dot(vSigmaX, R1) * faceDirection;
    vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
    return normalize(abs(fDet) * surf_norm - vGrad);
  }
  float dHt = 0.0; float dLit = 0.0; float dRough = -1.0;
`;function $M(e,t){let[i,r]=ZM[t]||[1,.5];switch(e){case"stone":case"brick":return`{
      vec2 uv = dPlane(vDW, vDN) / vec2(${i.toFixed(2)}, ${r.toFixed(2)});
      float row = floor(uv.y); uv.x += mod(row, 2.0) * 0.5 + dH(vec3(row, 3.0, 1.0)) * 0.3;
      vec2 cell = floor(uv), f = fract(uv);
      float m = min(min(f.x, 1.0 - f.x) * ${i.toFixed(2)}, min(f.y, 1.0 - f.y) * ${r.toFixed(2)});
      float top = step(0.7, abs(vDN.y));
      float mortar = (1.0 - smoothstep(0.01, ${e==="brick"?"0.025":"0.04"}, m)) * (1.0 - top * 0.6);
      float tint = dH(vec3(cell, 7.0));
      float grain = dF(vDW * 3.0);
      col *= mix(0.9 + tint * 0.16, 0.6, mortar) * (0.9 + grain * 0.2);
      col *= mix(0.82, 1.0, smoothstep(0.0, 1.4, vDL.y));
      dHt = (1.0 - mortar) * 0.8 + grain * 0.25 + smoothstep(0.0, 0.06, m) * 0.2;
    }`;case"plaster":return`{
      float g = dF(vDW * 1.4);
      col *= 0.9 + g * 0.18;
      float streak = smoothstep(0.62, 1.0, dN(vec3(vDW.x * 7.0 + vDW.z * 7.0, vDW.y * 0.35, 0.0)));
      col *= 1.0 - streak * 0.08 * (1.0 - abs(vDN.y));
      col *= mix(0.76, 1.0, smoothstep(0.0, 1.1, vDL.y));
      dHt = dF(vDW * 9.0) * 0.35;
    }`;case"terrazzo":return`{
      vec3 q = floor(vDW * 26.0); float r = dH(q);
      vec3 chip = mix(vec3(0.55, 0.52, 0.48), vec3(0.95, 0.93, 0.9), dH(q + 3.0));
      col = mix(col, col * chip * 1.25, step(0.9, r) * 0.6);
      col *= 0.95 + dF(vDW * 2.0) * 0.08;
      dHt = 0.0; dRough = 0.32;
    }`;case"tile":return`{
      if (vDN.y > 0.2 && vDN.y < 0.985) {
        vec2 d = normalize(vDN.xz);
        float along = dot(vDW.xz, vec2(-d.y, d.x));
        float down = dot(vDW.xz, d) - vDW.y * 0.6;
        float ridge = abs(fract(along / 0.26) - 0.5) * 2.0;
        float course = fract(down / 0.34);
        float lip = smoothstep(0.82, 1.0, course);
        col *= mix(1.12, 0.66, ridge * ridge) * (1.0 - lip * 0.25) * (0.94 + dH(vec3(floor(along / 0.26), floor(down / 0.34), 1.0)) * 0.12);
        dHt = (1.0 - ridge * ridge) * 0.9 - lip * 0.4;
      } else { col *= 0.92 + dF(vDW * 3.0) * 0.14; dHt = dF(vDW * 7.0) * 0.2; }
    }`;case"glass":return`{
      float vert = 1.0 - step(0.7, abs(vDN.y));
      vec2 uv = dPlane(vDW, vDN) / vec2(1.05, 1.2);
      vec2 f = fract(uv); vec2 cell = floor(uv);
      float frame = max(1.0 - step(0.07, f.x) * step(f.x, 0.93), 1.0 - step(0.1, f.y) * step(f.y, 0.9)) * vert;
      float sky = smoothstep(-0.2, 1.0, dN(vec3(cell * 0.21, 0.0)));
      col = mix(col * (0.75 + sky * 0.45), vec3(0.62, 0.66, 0.7), frame);
      dLit = (1.0 - frame) * vert * step(0.52, dH(vec3(cell, 11.0)));
      dHt = frame * 0.6; dRough = mix(0.08, 0.5, frame);
    }`;case"wood":return`{
      float g = dN(vec3(vDW.x * 1.2, vDW.y * 14.0, vDW.z * 1.2)) * 0.6 + dN(vec3(vDW.x * 14.0, vDW.y * 1.2, vDW.z * 14.0)) * 0.4;
      col *= 0.82 + g * 0.3; dHt = g * 0.5;
    }`;case"bark":return`{
      float g = dN(vec3(vDW.x * 9.0, vDW.y * 1.4, vDW.z * 9.0));
      float cracks = smoothstep(0.55, 0.85, g);
      col *= 0.7 + (1.0 - cracks) * 0.4 + dF(vDW * 5.0) * 0.1;
      dHt = 1.0 - cracks;
    }`;case"birch":return`{
      float d = step(0.78, dN(vec3(vDW.x * 7.0, vDW.y * 9.0, vDW.z * 7.0)));
      col *= (1.0 - d * 0.62) * (0.92 + dF(vDW * 4.0) * 0.12); dHt = 1.0 - d;
    }`;case"leaf":return`{
      float n = dF(vDW * 2.3 + vDR * 0.37);
      float r = dH(floor(vDR * 3.7));
      col *= 0.66 + n * 0.62;
      col *= vec3(1.0 + (r - 0.5) * 0.14, 1.0 + (r - 0.5) * 0.05, 1.0 - (r - 0.5) * 0.12);
      col *= mix(0.6, 1.06, smoothstep(-0.7, 0.85, vDN.y));
      dHt = n * 1.2;
    }`;case"snowcap":return"{ col *= 0.95 + dF(vDW * 3.0) * 0.08; dHt = dF(vDW * 4.0) * 0.4; }";case"hay":return`{
      float s = dN(vec3(vDW.x * 22.0, vDW.y * 22.0, vDW.z * 3.0)) * 0.5 + dN(vec3(vDW.x * 3.0, vDW.y * 22.0, vDW.z * 22.0)) * 0.5;
      col *= 0.8 + s * 0.35; dHt = s * 0.8;
    }`;case"metal":return"{ col *= 0.9 + dN(vec3(vDW.x * 40.0, vDW.y * 1.2, vDW.z * 40.0)) * 0.14; dHt = 0.0; }";case"fur":return"{ float s = dF(vDW * 14.0); col *= 0.78 + s * 0.35; dHt = s * 0.8; }";default:return"{ col *= 0.94 + dF(vDW * 2.0) * 0.1; }"}}function Vn(e,{kind:t,name:i=e.name,bump:r=.5,wind:a=null,fade:n=!1}={}){let s=t||cu[i];if(!s&&!a)return e;let o=e.onBeforeCompile;e.onBeforeCompile=(c,h)=>{o==null||o.call(e,c,h),Object.assign(c.uniforms,{dTime:Tt.time,dSnow:Tt.snow,dWet:Tt.wet,dSand:Tt.sand,dNight:Tt.night,wS:Tt.windS,wCar:Tt.car,wCarR:Tt.carR});let d=c.vertexShader,u=c.fragmentShader;d=d.replace("#include <common>",`#include <common>
      uniform float dTime, wS, wCarR; uniform vec3 wCar;
      varying vec3 vDW; varying vec3 vDN; varying vec3 vDL; varying vec3 vDR;
      ${n?"attribute float aFade; varying float vFade;":""}`),a&&(d=d.replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec3 wRoot = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
        #else
          vec3 wRoot = vec3(0.0);
        #endif
        float wH = max(0.0, transformed.y - ${a.rigid.toFixed(2)});
        float wPh = wRoot.x * 0.21 + wRoot.z * 0.17;
        float wGust = 0.6 + 0.8 * sin(dTime * 0.7 + wRoot.x * 0.05 - wRoot.z * 0.03);
        float wSw = (sin(dTime * 1.7 + wPh) + 0.4 * sin(dTime * 3.9 + wPh * 2.3)) * wS * wGust;
        transformed.x += wSw * ${a.bend.toFixed(3)} * wH * wH;
        transformed.z += cos(dTime * 1.3 + wPh) * wS * wGust * ${(a.bend*.5).toFixed(3)} * wH * wH;
        ${a.push?`{ vec2 wd = wRoot.xz - wCar.xz; float wl = length(wd);
          float wk = (1.0 - smoothstep(wCarR * 0.4, wCarR, wl)) * step(abs(wRoot.y - wCar.y), 2.5);
          vec2 wdir = wl > 0.001 ? wd / wl : vec2(1.0, 0.0);
          transformed.xz += wdir * wk * ${a.push.toFixed(2)} * transformed.y; transformed.y *= 1.0 - wk * 0.45; }`:""}`)),d=d.replace("#include <project_vertex>",`#include <project_vertex>
      { vec4 dw = vec4(transformed, 1.0); vec3 dn = objectNormal; vec3 dr = vec3(0.0);
        #ifdef USE_INSTANCING
          dw = instanceMatrix * dw; dn = mat3(instanceMatrix) * dn; dr = instanceMatrix[3].xyz;
        #endif
        dw = modelMatrix * dw; vDW = dw.xyz; vDN = normalize(mat3(modelMatrix) * dn); vDL = transformed; vDR = (modelMatrix * vec4(dr, 1.0)).xyz;
        ${n?"vFade = aFade;":""} }`),u=u.replace("#include <common>",`#include <common>
      ${KM}
      ${n?"varying float vFade;":""}`),u=u.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      ${n?"if (vFade > 0.001) { float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))); if (ign < vFade) discard; }":""}`),u=u.replace("#include <color_fragment>",`#include <color_fragment>
      { vec3 col = diffuseColor.rgb;
        ${s?$M(s,i):""}
        // weather on every surface
        float up = smoothstep(0.35, 0.85, vDN.y + (dF(vDW * 1.3) - 0.5) * 0.45);
        col = mix(col, vec3(0.93, 0.95, 1.0), dSnow * up);
        col *= 1.0 - dWet * 0.26;
        col = mix(col, vec3(0.78, 0.6, 0.4), dSand * 0.22 * smoothstep(-0.2, 0.7, vDN.y));
        diffuseColor.rgb = col; }`),u=u.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
      if (dRough >= 0.0) roughnessFactor = dRough;
      roughnessFactor = mix(roughnessFactor, 0.22, dWet * smoothstep(0.4, 0.95, vDN.y));`),u=u.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      normal = dPerturb(-vViewPosition, normal, vec2(dFdx(dHt), dFdy(dHt)) * ${r.toFixed(2)}, faceDirection);`),s==="glass"&&(u=u.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance *= dLit;`)),s==="leaf"&&(u=u.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      { vec3 vd = normalize(vViewPosition); float rim = pow(1.0 - abs(dot(normal, vd)), 3.0); totalEmissiveRadiance += diffuseColor.rgb * rim * 0.22 * (1.0 - dNight); }`)),c.vertexShader=d,c.fragmentShader=u};let l=`${s}|${i}|${r}|${a?`${a.bend}${a.rigid}${a.push||0}`:""}|${n}`;return e.customProgramCacheKey=()=>l,e.needsUpdate=!0,e}var JM={meadow:[.25,.45,.38,1],autumn:[.13,.42,.45,.85],plane:[.24,.42,.36,.9],coast:[.26,.38,.4,.55],field:[.12,.5,.55,.7],danxia:[.1,.3,.5,.45],desert:[.12,.25,.55,.35]};function tm(e,t,{coarse:i=!1,free:r=()=>!0}={}){let a=i?20:27,n=i?3e4:78e3,s=48,o=480,l=320,c=new Uint8Array(o*l*4),h=new be;for(let w=0;w<l;w++)for(let _=0;_<o;_++){let b=-120+(_+.5)/2,N=-80+(w+.5)/2,D=(w*o+_)*4,O=t.sample(b,N);if(O<.05||O>6.2||t.road(b,N)<2.3||t.slope(b,N)>.6||!r(b,N))continue;let q=!1;for(let te in Wt)Math.hypot(b-Wt[te].x,N-Wt[te].z)<7.2&&(q=!0);if(q||Math.hypot(b-yr.x,N-yr.z)<4)continue;let U=or(b,N),L=0,G=0,F=0,Q=0,V=0;for(let te in U){let ye=JM[te];ye&&(L+=ye[0]*U[te],G+=ye[1]*U[te],F+=ye[2]*U[te],Q+=ye[3]*U[te])}V=(U.meadow||0)+(U.autumn||0)*.9+(U.plane||0)*.85+(U.coast||0)*.7+(U.field||0)*.95+(U.danxia||0)*.12+(U.desert||0)*.05;let Z=ai(.3,.6,sr(b*.08,N*.08));V*=.35+.65*Z,V*=ai(2.3,3.6,t.road(b,N)),c[D]=Math.round(Math.min(1,V)*255),c[D+1]=Math.round(Math.min(1,L/.4)*255),c[D+2]=Math.round(Math.min(1,F)*255),c[D+3]=Math.round(Math.min(1,Q*(.75+sr(b*.2+7,N*.2)*.5))*255)}let d=new va(c,o,l);d.magFilter=d.minFilter=Vt,d.needsUpdate=!0;let u=new Uint16Array(38801);for(let w=0;w<t.H.length;w++)u[w]=Ap.toHalfFloat(t.H[w]);let p=new va(u,241,161,ws,ui);p.magFilter=p.minFilter=Vt,p.needsUpdate=!0;let g=[[0,.045],[.35,.04],[.7,.026],[1,0]],x=[],m=[];g.forEach(([w,_],b)=>{_>0?x.push(-_,w,0,_,w,.012):x.push(0,w,.01)});for(let w=0;w<2;w++){let _=w*2;m.push(_,_+1,_+2,_+2,_+1,_+3)}m.push(4,5,6);let f=new bf;f.setAttribute("position",new $e(x,3)),f.setIndex(m);let M=new Float32Array(n*4);for(let w=0;w<n;w++)M[w*4]=(Math.random()*2-1)*a,M[w*4+1]=(Math.random()*2-1)*a,M[w*4+2]=Math.random(),M[w*4+3]=Math.random()*Math.PI*2;f.setAttribute("aOff",new Yi(M,4)),f.instanceCount=n;let y={center:{value:new C},R:{value:a},maskTex:{value:d},hTex:{value:p},t:Tt.time,wind:Tt.windS,car:Tt.car,snow:Tt.snow,wet:Tt.wet,trail:{value:Array.from({length:s},()=>new Dt(0,-99,0,1))},light:{value:new be(1,1,1)},sunDir:{value:new C(0,1,0)},sunCol:{value:new be(1,1,1)}},v=new Ft({uniforms:Object.assign(nr.clone(Pe.fog),y),side:Ri,fog:!0,vertexShader:`#include <fog_pars_vertex>
      uniform vec3 center, car; uniform float R, t, wind, snow; uniform sampler2D maskTex, hTex; uniform vec4 trail[${s}];
      attribute vec4 aOff; varying float vY; varying vec3 vC; varying float vSnow; varying float vFace;
      vec3 hsl2rgb(vec3 c){ vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); return c.z + c.y * (rgb - 0.5) * (1.0 - abs(2.0 * c.z - 1.0)); }
      void main(){
        vec2 wp = mod(aOff.xy - center.xz + R, 2.0 * R) - R + center.xz;
        vec2 uv = vec2((wp.x - ${(-120).toFixed(1)}) / ${240 .toFixed(1)}, (wp.y - ${(-80).toFixed(1)}) / ${160 .toFixed(1)});
        vec4 m = texture2D(maskTex, uv);
        float edge = 1.0 - smoothstep(R * 0.7, R, length(wp - center.xz));
        float dens = m.r;
        float h = (0.28 + aOff.z * 0.42) * m.a * 1.15 * edge * step(aOff.z, dens) * (1.0 - snow * 0.55);
        vec2 huv = uv * vec2(${(240/241).toFixed(5)}, ${(160/161).toFixed(5)}) + vec2(${(.5/241).toFixed(5)}, ${(.5/161).toFixed(5)});
        float gy = texture2D(hTex, huv).r;
        vec3 p = position; vY = p.y;
        float s = sin(aOff.w), c = cos(aOff.w);
        vec3 lp = vec3(p.x * c, p.y * h, p.x * s + p.z);
        vec3 w = vec3(wp.x, gy - 0.02, wp.y) + lp;
        // gusts rolling across the field
        float g = sin(dot(wp, vec2(0.18, 0.07)) - t * 2.2) * 0.5 + 0.5;
        float sway = (sin(t * 2.1 + wp.x * 0.6 + wp.y * 0.4) * 0.35 + g * 0.9) * wind;
        w.x += sway * 0.22 * vY * vY * h; w.z += sway * 0.08 * vY * vY * h;
        // pressed by the tyres, pushed by the car
        float press = 0.0; vec2 dir = vec2(0.0);
        for (int i = 0; i < ${s}; i++) {
          vec2 d = wp - trail[i].xz; float r = length(d);
          float k = (1.0 - smoothstep(0.25, 0.9, r)) * (1.0 - trail[i].w);
          if (k > press) { press = k; dir = r > 0.001 ? d / r : vec2(1.0, 0.0); }
        }
        vec2 dc = wp - car.xz; float rc = length(dc);
        float kc = (1.0 - smoothstep(0.9, 1.9, rc)) * step(abs(gy - car.y), 2.0);
        if (kc > press) { press = kc; dir = rc > 0.001 ? dc / rc : vec2(1.0, 0.0); }
        w.xz += dir * press * vY * h * 0.85; w.y -= press * vY * h * 0.7;
        vC = hsl2rgb(vec3(m.g * 0.4 + (aOff.z - 0.5) * 0.03, 0.35 + m.b * 0.25, m.b * (0.85 + aOff.z * 0.3)));
        vC = pow(vC, vec3(2.2));
        vC *= 1.0 + g * 0.15 * vY;
        vSnow = snow; vFace = c;
        vec4 mvPosition = viewMatrix * vec4(w, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        if (h < 0.01) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
        #include <fog_vertex>
      }`,fragmentShader:`#include <fog_pars_fragment>
      uniform vec3 light, sunCol; uniform float wet; varying float vY; varying vec3 vC; varying float vSnow; varying float vFace;
      void main(){
        vec3 c = mix(vC * 0.35, vC * 1.1, smoothstep(0.0, 1.0, vY));
        c += vC * sunCol * 0.35 * smoothstep(0.55, 1.0, vY);
        c = mix(c, vec3(0.92, 0.95, 1.0) * light, vSnow * (0.35 + 0.6 * smoothstep(0.2, 1.0, vY)));
        c *= mix(light, vec3(1.0), vSnow * 0.5 * smoothstep(0.2, 1.0, vY)) * (1.0 - wet * 0.2);
        gl_FragColor = vec4(c, 1.0);
        #include <fog_fragment>
      }`}),T=new rt(f,v);T.frustumCulled=!1,e.add(T);let R=0;return{U:y,press(w,_,b){y.trail.value[R=(R+1)%s].set(w,b,_,0)},update(w,_){y.center.value.set(_.x,0,_.z);for(let b=0;b<s;b++){let N=y.trail.value[b];N.w=Math.min(1,Math.max(0,(w-N.y)/7))}}}}var Ht=e=>new be(e),QM={desert:Ht("#e7c890"),danxia:Ht("#cf7b52"),meadow:Ht("#86a85a"),autumn:Ht("#b5a65f"),plane:Ht("#8ba45c"),coast:Ht("#a4b37c"),field:Ht("#d3b66c")},eb={desert:Ht("#d2ab72"),danxia:Ht("#b7744f"),meadow:Ht("#a48a62"),autumn:Ht("#a59a86"),plane:Ht("#9b978e"),coast:Ht("#a19d94"),field:Ht("#b49763")},tb=Ht("#7b6a5c"),ib=Ht("#f4f6fb"),rb=Ht("#b9a57a"),ab=Ht("#cfc8b8"),im=(e,{bend:t=.06,push:i=0,rigid:r=.6,fade:a=!1}={},n)=>Vn(e.clone(),{name:n||e.name,wind:{bend:t,push:i,rigid:r},fade:a});function rm(e,t,i,r,{coarse:a=!1}={}){let{sample:n,slope:s,road:o,at:l}=r,c=(()=>{let z=1234567;return()=>(z=z*16807%2147483647)/2147483647})(),h=[],d=new Ze,u=new ii,p=new C,g=new C,x=new C(0,1,0),m=(z,S,P,H=0,K=1)=>new Ze().compose(new C(z,S,P),new ii().setFromAxisAngle(x,H),new C(K,K,K)),f=(z,S,P)=>{for(let H in Wt)if(Math.hypot(z-Wt[H].x,S-Wt[H].z)<P)return!0;return Math.hypot(z-yr.x,S-yr.z)<P},M=new be,y=new ri(240,160,240,160);y.rotateX(-Math.PI/2);let v=y.attributes.position,T=new Float32Array(v.count*3),R=new Float32Array(v.count*3),w=new be,_=new be;for(let z=0;z<v.count;z++){let S=v.getX(z),P=v.getZ(z),H=Math.round(S- -120),K=Math.round(P- -80),re=l(H,K);v.setY(z,re);let j=or(S,P);w.setRGB(0,0,0);for(let ke in j)w.add(M.copy(QM[ke]).multiplyScalar(j[ke]));if(j.danxia>.1){let ke=.5+.5*Math.sin(re*3.4+sr(S*.1,P*.1)*3);w.lerp(M.set(ke>.55?"#e39a62":ke<.3?"#a9533a":"#c86f4a"),j.danxia*.6)}let he=o(S,P);if(he<2.8){_.setRGB(0,0,0);for(let ke in j)_.add(M.copy(eb[ke]).multiplyScalar(j[ke]));w.lerp(_,1-ai(1.4,2.8,he))}for(let ke in Wt){let lt=Wt[ke],Je=Math.hypot(S-lt.x,P-lt.z);Je<8.5&&w.lerp(ab,(1-ai(6.5,8.5,Je))*.45)}let ve=Math.hypot(l(H+1,K)-l(H-1,K),l(H,K+1)-l(H,K-1))/2;w.lerp(tb,ai(.5,1.15,ve)*.8),w.lerp(ib,ai(6,9,re+sr(S*.3,P*.3)*2)),w.lerp(rb,(1-ai(-.25,.2,re))*.85);let nt=(sr(S*.7,P*.7)-.5)*.07;T[z*3]=w.r+nt,T[z*3+1]=w.g+nt,T[z*3+2]=w.b+nt,R[z*3]=(j.desert||0)+(j.danxia||0)*.6,R[z*3+1]=ai(6,9,re),R[z*3+2]=1-ai(1.4,2.8,he)}y.setAttribute("color",new Ot(T,3)),y.setAttribute("aux",new Ot(R,3)),y.computeVertexNormals();let b=new Qt({vertexColors:!0,roughness:.96});b.onBeforeCompile=z=>{Object.assign(z.uniforms,{dTime:Tt.time,dSnow:Tt.snow,dWet:Tt.wet,dSand:Tt.sand}),z.vertexShader=z.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aux; varying vec3 vAux; varying vec3 vWp; varying vec3 vWn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAux = aux; vWp = (modelMatrix * vec4(transformed, 1.0)).xyz; vWn = normal;`),z.fragmentShader=z.fragmentShader.replace("#include <common>",`#include <common>
      uniform float dTime, dSnow, dWet, dSand;
      varying vec3 vAux; varying vec3 vWp; varying vec3 vWn;
      float gH(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float gN(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(gH(i), gH(i+vec2(1,0)), f.x), mix(gH(i+vec2(0,1)), gH(i+vec2(1,1)), f.x), f.y); }
      float gF(vec2 p){ return gN(p) * 0.5 + gN(p * 2.1) * 0.25 + gN(p * 4.3) * 0.125 + gN(p * 8.7) * 0.0625; }
      float gHt = 0.0;`).replace("#include <color_fragment>",`#include <color_fragment>
      float grain = gN(vWp.xz * 1.7) * 0.6 + gN(vWp.xz * 6.0) * 0.4;
      diffuseColor.rgb *= 0.92 + grain * 0.14;
      // patches of darker and lighter ground
      diffuseColor.rgb *= 0.9 + gF(vWp.xz * 0.12) * 0.2;
      // sand ripples, and in a sandstorm they stream across in the wind
      float rip = sin(vWp.x * 2.2 + sin(vWp.z * 0.35) * 2.5 + gN(vWp.xz * 0.4) * 3.0);
      diffuseColor.rgb *= 1.0 - vAux.x * smoothstep(0.55, 1.0, rip) * 0.08;
      float drift = smoothstep(0.6, 1.0, gN(vec2(vWp.x * 0.6 - dTime * 6.0, vWp.z * 4.0))) * dSand;
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.93, 0.78, 0.55), drift * 0.45 * (0.4 + vAux.x));
      // gravel on the roads, two worn tyre lines
      float pebble = step(0.82, gH(floor(vWp.xz * 9.0))) * vAux.z;
      diffuseColor.rgb *= 1.0 - pebble * 0.18 + vAux.z * (gN(vWp.xz * 14.0) - 0.5) * 0.12;
      gHt = rip * vAux.x * 0.3 + pebble * 0.6 + grain * 0.25;
      // snow: the cap on the peaks, and snowfall settling on everything that faces up
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.96, 0.97, 1.0), vAux.y * (0.6 + grain * 0.3));
      float settle = dSnow * smoothstep(0.55, 0.85, vWn.y) * smoothstep(0.2, 0.7, gF(vWp.xz * 0.5) + dSnow * 0.5);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.93, 0.95, 1.0), settle);
      // rain: darker ground and puddles in the low spots
      float puddle = smoothstep(0.62, 0.7, gF(vWp.xz * 0.18)) * dWet * (0.4 + vAux.z * 0.6);
      diffuseColor.rgb *= 1.0 - dWet * 0.3 - puddle * 0.25;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
      roughnessFactor = mix(roughnessFactor, 0.35, dWet * 0.6); roughnessFactor = mix(roughnessFactor, 0.04, puddle);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      { vec3 sp = -vViewPosition; vec3 sx = normalize(dFdx(sp)), sy = normalize(dFdy(sp)); vec3 r1 = cross(sy, normal), r2 = cross(normal, sx);
        float det = dot(sx, r1) * faceDirection; vec2 dh = vec2(dFdx(gHt), dFdy(gHt)) * 0.35 * (1.0 - puddle);
        normal = normalize(abs(det) * normal - sign(det) * (dh.x * r1 + dh.y * r2)); }`)};let N=new rt(y,b);N.receiveShadow=!0,e.add(N);let D=new Uint8Array(38801*4);for(let z=0;z<r.H.length;z++)D[z*4]=Math.max(0,Math.min(255,Math.round((r.H[z]+4)*32))),D[z*4+3]=255;let O=new va(D,241,161);O.needsUpdate=!0,O.magFilter=O.minFilter=Vt;let q=new Ft({transparent:!0,fog:!0,uniforms:{...nr.clone(Pe.fog),t:{value:0},htex:{value:O},deep:{value:Ht("#1e6a8f")},shallow:{value:Ht("#63c6c8")},foam:{value:Ht("#ffffff")},night:{value:0},sky:{value:Ht("#bfe3ff")},car:{value:new C}},vertexShader:`#include <fog_pars_vertex>
      varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,fragmentShader:`#include <fog_pars_fragment>
      uniform float t, night; uniform sampler2D htex; uniform vec3 deep, shallow, foam, sky, car; varying vec3 vW;
      float hs(vec2 q){ return fract(sin(dot(q, vec2(127.1, 311.7))) * 43758.5453); }
      float vn(vec2 q){ vec2 i = floor(q), f = fract(q); f = f*f*(3.-2.*f); return mix(mix(hs(i), hs(i+vec2(1,0)), f.x), mix(hs(i+vec2(0,1)), hs(i+vec2(1,1)), f.x), f.y); }
      void main(){
        vec2 uv = vec2((vW.x + ${(240/2).toFixed(1)}) / ${240 .toFixed(1)}, (vW.z + ${(160/2).toFixed(1)}) / ${160 .toFixed(1)});
        float h = (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) ? -4.0 : texture2D(htex, uv).r * 255.0 / 32.0 - 4.0;
        float depth = ${(-.45).toFixed(2)} - h;
        float n = vn(vW.xz * 0.35 + t * 0.25) * 0.6 + vn(vW.xz * 1.1 - t * 0.4) * 0.4;
        vec3 c = mix(shallow, deep, smoothstep(0.0, 1.6, depth));
        c += sky * 0.14 * smoothstep(0.62, 1.0, n);
        float lines = smoothstep(0.92, 1.0, sin((depth + n * 0.15) * 26.0 - t * 1.6)) * (1.0 - smoothstep(0.05, 0.5, depth));
        float f = smoothstep(0.16, 0.0, depth + (n - 0.5) * 0.1) * 0.8 + lines * 0.35;
        float wk = exp(-pow(length(vW.xz - car.xz), 2.0) * 0.4) * step(car.y, 0.6);
        c = mix(c, foam, clamp(f + wk * 0.6, 0.0, 1.0));
        c *= mix(1.0, 0.3, night); c += foam * f * night * 0.2;
        gl_FragColor = vec4(c, max(clamp(0.5 + depth * 0.35, 0.0, 0.92), f * 0.95));
        #include <fog_fragment>
      }`}),U=new rt(new ri(900,900),q);U.rotation.x=-Math.PI/2,U.position.y=-.45,U.renderOrder=2,e.add(U);let L={},G=(z,S)=>{for(let P of z.hulls){let H=new Float32Array(P.length),K=new C;for(let re=0;re<P.length;re+=3)K.set(P[re],P[re+1],P[re+2]).applyMatrix4(S),H[re]=K.x,H[re+1]=K.y,H[re+2]=K.z;t.statics.hull(H,0,0,0)}},F=(z,S,P)=>{var K;let H=i[z];if(!H){console.warn("missing asset",z);return}for(let re of H.parts){let j=re.geometry.clone().applyMatrix4(S);for(let ve of Object.keys(j.attributes))ve!=="position"&&ve!=="normal"&&j.deleteAttribute(ve);j.index&&(j=j.toNonIndexed());let he=L[P]||(L[P]={});(he[K=re.material.name]||(he[K]={mat:re.material,geos:[]})).geos.push(j)}};for(let[z,S,P,H,K,re=0]of su){let j=m(S,n(S,P)+re,P,H,K);F(z,j,ka(S,P).key),i[z]&&G(i[z],j)}for(let[z,S,P,H,K,re]of ou)F(z,m(S,n(S,P)+re,P,H,K),ka(S,P).key);for(let z in L)for(let S in L[z]){let{mat:P,geos:H}=L[z][S],K=new rt(Ih(H,!1),P);K.castShadow=!0,K.receiveShadow=!0,e.add(K)}let Q=i.__materials;for(let z in Q)cu[z]&&Vn(Q[z]);Q.lantern&&h.push({m:Q.lantern,day:0,night:1.6});for(let[z,S,P,H,K,re]of ou){let j=i[z];if(!(!j||!j.roles.lamp))for(let he of j.roles.lamp){let ve=new rt(he.geometry,he.material);ve.applyMatrix4(m(S,n(S,P)+re,P,H,K)),e.add(ve),h.push({m:he.material,day:0,night:2.4})}}for(let z of["glass_city","glass_dark"])Q[z]&&(Q[z].emissive=Ht("#ffcf8a"),h.push({m:Q[z],day:0,night:.22}));Q.pearl&&(Q.pearl.emissive=Ht("#ff4fa3"),h.push({m:Q.pearl,day:0,night:.9}));let V={},Z=(z,S,P,H=1,K=c()*Math.PI*2)=>{(V[z]||(V[z]=[])).push({x:S,y:n(S,P)-.05,z:P,ry:K,s:H,wob:0,v:0,ax:0,az:0})},te=(z,S,P=2.8)=>o(z,S)>P&&!f(z,S,9)&&n(z,S)>.05&&s(z,S)<.5&&Ns(z,S)<.9,ye=[];for(let[z,S,P,,H]of su)ye.push([S,P,(z.startsWith("pyramid")?12:z==="city_wall"?9:6.5)*(H||1)]);let _e=(z,S)=>ye.every(([P,H,K])=>Math.hypot(z-P,S-H)>K),Ue={autumn:"ginkgo",plane:"plane",coast:"plane",danxia:"poplar",field:"poplar"};for(let z=-120;z<120;z+=1)for(let S=-80;S<80;S+=1){let P=o(z,S);if(P<4.6||P>5.6)continue;let H=or(z,S),K=null,re=.5;for(let j in Ue)(H[j]||0)>re&&(re=H[j],K=j);!K||((z*7+S*13)%5+5)%5!==0||c()>.6||!te(z,S,4.4)||!_e(z,S)||Z(Ue[K],z,S,(Ue[K]==="plane"?.72:.9)+c()*.2)}let Ge=a?9e3:16e3;for(let z=0;z<Ge;z++){let S=-120+c()*240,P=-80+c()*160,H=or(S,P),K=n(S,P);if(K<.3&&K>-.45-.1&&o(S,P)>2.5&&!f(S,P,8)&&c()<.6&&Math.min(n(S+2.5,P),n(S-2.5,P),n(S,P+2.5),n(S,P-2.5))<-.45&&Z("reeds",S,P,.8+c()*.5),!te(S,P)||!_e(S,P))continue;let re=sr(S*.06+3,P*.06),j=Math.abs(S-Ds(P));if(K>2.5&&K<9&&c()<.12){Z(K>5?"fir_snow":"fir",S,P,.7+c()*.5);continue}(H.desert||0)>.5?j>5&&j<10.5&&c()<.22?Z("palm",S,P,.85+c()*.4):c()<.03&&Z("shrub",S,P,.8+c()*.6):(H.danxia||0)>.5?c()<.08?Z("tuft",S,P,1+c()):c()<.01&&Z("shrub",S,P,.7+c()*.5):(H.meadow||0)>.45?re>.5&&c()<.3?Z(K>3.5?"fir_snow":"fir",S,P,.8+c()*.7):c()<.03?Z("blossom",S,P,.8+c()*.5):c()<.04&&Z("bush",S,P,.6+c()*.6):(H.autumn||0)>.45?re>.52&&c()<.12?Z("ginkgo",S,P,.8+c()*.4):c()<.03&&Z("bush",S,P,.6+c()*.4):(H.plane||0)>.45||(H.coast||0)>.45?re>.56&&c()<.1?Z("plane",S,P,.7+c()*.3):c()<.04&&Z("bush",S,P,.6+c()*.5):(H.field||0)>.45&&(re>.62&&c()<.08?Z("poplar",S,P,.9+c()*.3):c()<.02&&Z("bush",S,P,.5+c()*.4))}let ie={fir:.3,fir_snow:.3,palm:.24,ginkgo:.28,plane:.34,poplar:.24,blossom:.2},se={shrub:1,tuft:1,reeds:1,bush:1},pe={};for(let z in V){let S=V[z],{group:P,meshes:H}=Yf(i,z,S.map(K=>m(K.x,K.y,K.z,K.ry,K.s)),{shadow:!se[z],patch:(K,re)=>im(K,se[z]?{bend:.05,push:.9,rigid:.05}:{bend:re.startsWith("bark")?.004:.008,rigid:1.2,fade:!0},re)});if(!se[z])for(let K of H){let re=new Yi(new Float32Array(S.length),1);re.setUsage(ra),K.geometry=K.geometry.clone(),K.geometry.setAttribute("aFade",re)}if(S.forEach(K=>{K.fade=0}),e.add(P),pe[z]=H,ie[z])for(let K of S)t.statics.cyl(K.x,K.y+1.5,K.z,1.5,ie[z]*K.s,"tree")}let Le=new Set;function Ne(z,S,P){if(!(S<1.5))for(let H in ie){let K=V[H];if(K)for(let re=0;re<K.length;re++){let j=K[re],he=j.x-z.x,ve=j.z-z.z,nt=he*he+ve*ve;if(nt>2.2*2.2||Math.abs(j.wob)>.3)continue;let ke=Math.sqrt(nt)||1;j.wob=Math.min(1,.3+S/10),j.v=0,j.ax=ve/ke,j.az=-he/ke,j.type=H,j.i=re,j.phase=0,Le.add(j),P==null||P(j)}}}function fe(z){for(let S of Le){S.v+=(-S.wob*70-S.v*3.5)*z,S.wob+=S.v*z,S.phase+=z,u.setFromAxisAngle(g.set(S.ax,0,S.az),S.wob*.2).multiply(new ii().setFromAxisAngle(x,S.ry)),d.compose(g.set(S.x,S.y,S.z),u,p.set(S.s,S.s,S.s));for(let P of pe[S.type])P.setMatrixAt(S.i,d),P.instanceMatrix.needsUpdate=!0;Math.abs(S.wob)<.004&&Math.abs(S.v)<.03&&S.phase>.4&&(S.wob=0,Le.delete(S))}}let Oe=tm(e,r,{coarse:a,free:_e}),ce=a?1500:3500,oe=new zi(new mh(.08,0).translate(0,.4,0),im(new Qt({roughness:.8,name:"flower"}),{bend:.15,push:1.1,rigid:0}),ce),le=0,Re=["#f4f1e6","#f2c94c","#e88aa8","#a78bd8","#f4f1e6"].map(Ht);for(let z=0;z<ce*30&&le<ce;z++){let S=-120+c()*240,P=-80+c()*160;if((or(S,P).meadow||0)<.55||sr(S*.08,P*.08)<.4)continue;let K=n(S,P);K<.05||K>6||o(S,P)<2.4||f(S,P,7.5)||s(S,P)>.5||!_e(S,P)||(oe.setMatrixAt(le,d.compose(g.set(S,K,P),u.identity(),p.set(1,.8+c()*.6,1))),oe.setColorAt(le,Re[Math.floor(c()*5)]),le++)}oe.count=le,oe.frustumCulled=!1,e.add(oe);let Ce=(()=>{let z=document.createElement("canvas");z.width=z.height=64;let S=z.getContext("2d"),P=S.createRadialGradient(32,32,0,32,32,32);return P.addColorStop(0,"rgba(0,0,0,.55)"),P.addColorStop(1,"rgba(0,0,0,0)"),S.fillStyle=P,S.fillRect(0,0,64,64),new Or(z)})(),Fe=[];for(let z in V)if(ie[z])for(let S of V[z])Fe.push([S.x,S.y+.06,S.z,2.2*S.s]);let We=new zi(new ri(1,1).rotateX(-Math.PI/2),new di({map:Ce,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,opacity:.6}),Math.max(1,Fe.length));Fe.forEach(([z,S,P,H],K)=>We.setMatrixAt(K,d.compose(g.set(z,S,P),u.identity(),p.set(H*2,1,H*2)))),We.count=Fe.length,We.renderOrder=1,e.add(We);let Qe=(()=>{let z=document.createElement("canvas");z.width=z.height=64;let S=z.getContext("2d");return S.fillStyle="#fff",S.beginPath(),S.moveTo(32,60),S.bezierCurveTo(4,40,4,8,32,4),S.bezierCurveTo(60,8,60,40,32,60),S.fill(),new Or(z)})(),at=a?900:1800,B=new zi(new ri(.26,.26).rotateX(-Math.PI/2),new Qt({map:Qe,alphaTest:.5,side:Ri,roughness:.9}),at),gt=[];for(let z=0;z<at*30&&gt.length<at;z++){let S=c()<.5,P=S?V.ginkgo:V.plane;if(!P||!P.length)continue;let H=P[Math.floor(c()*P.length)],K=c()*6.28,re=c()*4.5,j=H.x+Math.cos(K)*re,he=H.z+Math.sin(K)*re,ve=n(j,he);ve<.05||(gt.push({p:new C(j,ve+.03,he),v:new C,rot:c()*6.28,spin:0,tilt:0,air:!1}),B.setColorAt(gt.length-1,M.setHSL(S?.12+c()*.03:.07+c()*.04,S?.8:.55,S?.55+c()*.1:.38+c()*.12)))}B.count=gt.length,B.frustumCulled=!1,B.instanceMatrix.setUsage(ra),B.receiveShadow=!0;let ut=new Ur,ct=z=>{let S=gt[z];d.compose(S.p,u.setFromEuler(ut.set(S.tilt,S.rot,S.tilt*.6)),p.set(1,1,1)),B.setMatrixAt(z,d)};gt.forEach((z,S)=>ct(S)),e.add(B);function I(z,S,P,H){let K=!1;for(let re=0;re<gt.length;re++){let j=gt[re];if(!j.air){if(P<2.5)continue;let ve=j.p.x-z.x,nt=j.p.z-z.z;if(ve*ve+nt*nt>2.6||Math.abs(j.p.y-z.y)>2)continue;j.air=!0;let lt=.25+Math.random()*.4;j.v.set(S.x*lt+ve*1.5,2+Math.random()*P*.35,S.z*lt+nt*1.5),j.spin=(Math.random()-.5)*12}j.v.y-=6*H,j.v.multiplyScalar(1-H*2.2),j.p.addScaledVector(j.v,H),j.rot+=j.spin*H,j.tilt=Math.sin(j.rot*2)*.8;let he=n(j.p.x,j.p.z)+.03;j.p.y<=he&&(j.p.y=he,j.air=!1,j.tilt=0),ct(re),K=!0}K&&(B.instanceMatrix.needsUpdate=!0)}let E=240,k=new zi(new ri(.2,.2),new Qt({map:Qe,alphaTest:.5,side:Ri}),E);k.frustumCulled=!1,k.instanceMatrix.setUsage(ra);for(let z=0;z<E;z++)k.setColorAt(z,M.set("#e8b93a"));let ae=Array.from({length:E},()=>({p:new C(0,-99,0),ph:Math.random()*6,life:0}));e.add(k);let ue={autumn:[.12,.8,.55],plane:[.08,.55,.42],meadow:[.95,.6,.82]};function Te(z,S,P){let H=ka(P.x,P.z),K=Wt[H.key].biome,re=ue[K],j=re&&H.d<34,he=K==="autumn"?V.ginkgo:K==="plane"?V.plane:V.blossom,ve=j&&he?he.filter(ke=>Math.abs(ke.x-P.x)<24&&Math.abs(ke.z-P.z)<18):[],nt=!1;for(let ke=0;ke<E;ke++){let lt=ae[ke];if(lt.life<=0){if(lt.p.y=-99,ve.length&&Math.random()<.03){let Je=ve[Math.floor(Math.random()*ve.length)];lt.p.set(Je.x+(Math.random()-.5)*3,Je.y+2.5+Math.random()*2*Je.s,Je.z+(Math.random()-.5)*3),lt.life=1,k.setColorAt(ke,M.setHSL(re[0]+Math.random()*.04,re[1],re[2]+Math.random()*.1)),nt=!0}}else lt.p.x+=(Math.sin(S*1.3+lt.ph)*.6+Tt.windS.value*.6)*z,lt.p.z+=Math.cos(S*1.1+lt.ph)*.4*z,lt.p.y-=.7*z,lt.p.y<n(lt.p.x,lt.p.z)&&(lt.life=0);d.compose(lt.p,u.setFromEuler(ut.set(Math.sin(S*3+lt.ph)*1.2,S*2+lt.ph,Math.cos(S*2.6+lt.ph))),p.set(1,1,1)),k.setMatrixAt(ke,d)}k.instanceMatrix.needsUpdate=!0,nt&&(k.instanceColor.needsUpdate=!0)}let Ie=["#2f6fd0","#f4f1e6","#d4392e","#3f9a52","#f2c230"].map(Ht),X=[];for(let[[z,S,P],[H,K,re]]of Jf){let j=n(z,P)+S,he=n(H,re)+K,ve=Math.hypot(H-z,re-P),nt=Math.floor(ve/.5);for(let ke=1;ke<nt;ke++){let lt=ke/nt,Je=z+(H-z)*lt,Xt=P+(re-P)*lt,Ci=j+(he-j)*lt-Math.sin(lt*Math.PI)*.9,st=new ri(.34,.42,3,1).translate(0,-.21,0).rotateY(-Math.atan2(re-P,H-z)).translate(Je,Ci,Xt),Ui=Ie[ke%5],Si=new Float32Array(st.attributes.position.count*3);for(let ht=0;ht<Si.length;ht+=3)Si[ht]=Ui.r,Si[ht+1]=Ui.g,Si[ht+2]=Ui.b;st.setAttribute("color",new Ot(Si,3)),st.deleteAttribute("uv"),X.push(st)}}if(X.length){let z=new Qt({vertexColors:!0,side:Ri,roughness:.9});z.onBeforeCompile=P=>{P.uniforms.wT=Tt.time,P.uniforms.wS=Tt.windS,P.vertexShader=P.vertexShader.replace("#include <common>",`#include <common>
uniform float wT, wS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.x += sin(wT * 6.0 + position.x * 3.0 + position.z * 2.0) * 0.08 * (0.6 + wS);
        transformed.z += cos(wT * 5.0 + position.x * 2.0) * 0.08 * (0.6 + wS);`)};let S=new rt(Ih(X),z);S.castShadow=!0,e.add(S)}for(let[z,S]of Qf){let P=ya(i,"flagpole");P.position.set(z,n(z,S),S),e.add(P),t.statics.cyl(z,n(z,S)+2.5,S,2.5,.12)}let xe=Zf.map(([z,S,P,H,K])=>{let re=ya(i,z);return re.scale.setScalar(K),re.position.set(S,n(S,P),P),re.rotation.y=H,e.add(re),{g:re,home:new de(S,P),tgt:new de(S,P),bob:Math.random()*6,speed:0}});function Ee(z,S,P){for(let H of xe){let K=H.g.position,re=Math.hypot(K.x-P.x,K.z-P.z);re<5?(H.tgt.set(K.x+(K.x-P.x)/re*6,K.z+(K.z-P.z)/re*6),H.speed=3.2):Math.random()<z*.08&&(H.tgt.set(H.home.x+(Math.random()-.5)*8,H.home.y+(Math.random()-.5)*8),H.speed=.7);let j=H.tgt.x-K.x,he=H.tgt.y-K.z,ve=Math.hypot(j,he);if(ve>.3&&n(H.tgt.x,H.tgt.y)>.05){let nt=Math.atan2(-he,j)-H.g.rotation.y;nt=Math.atan2(Math.sin(nt),Math.cos(nt)),H.g.rotation.y+=nt*Math.min(1,z*4),K.x+=j/ve*H.speed*z,K.z+=he/ve*H.speed*z,H.g.rotation.z=Math.sin(S*H.speed*4)*.04}else H.speed=0,H.g.rotation.z=Math.sin(S*.8+H.bob)*.02;K.y=n(K.x,K.z)+(H.speed>1?Math.abs(Math.sin(S*H.speed*4))*.06:0)}}let He=Kf.map(([z,S,P],H)=>{var he,ve;let K=ya(i,"balloon");K.position.set(z,P,S),K.scale.setScalar(1.3),e.add(K);let re=(ve=(he=i.balloon)==null?void 0:he.roles.glow)==null?void 0:ve[0],j=null;return re&&(j=new rt(re.geometry,new di({color:"#ffb347"})),K.add(j)),{g:K,x:z,z:S,y:P,ph:H*1.7,flame:j}}),me=$f.map(z=>{let S=ya(i,z.asset);return e.add(S),{...z,g:S}});function Xe(z,S){for(let P of He)P.g.position.y=P.y+Math.sin(S*.3+P.ph)*1.4,P.g.position.x=P.x+Math.sin(S*.04+P.ph)*6,P.g.rotation.y=S*.05+P.ph,P.flame&&(P.flame.visible=Math.sin(S*2.3+P.ph*3)>.4);for(let P of me){let H=S*P.speed*.012+P.phase*Math.PI*2,K=(Math.sin(H)+1)/2,re=Math.cos(H)>0?1:-1;if(P.axis==="nile"){let j=P.z0+(P.z1-P.z0)*K,he=Ds(j),ve=Ds(j+.5);P.g.position.set(he,-.45-.12+Math.sin(S*1.4+P.phase*9)*.05,j),P.g.rotation.y=Math.atan2(-.5*re,(ve-he)*re),P.g.rotation.z=Math.sin(S*1.1+P.phase*5)*.03}else{let j=P.x0+(P.x1-P.x0)*K;P.g.position.set(j,-.45-.2+Math.sin(S*1.2)*.04,Rh(j)),P.g.rotation.y=re>0?0:Math.PI}}}let qe=[];for(let[z,S,P,H,K]of em()){let re=ya(i,z);e.add(re);let j=n(S,P),he;z==="haybale"?he=t.dynamic({type:"roundcyl",hh:.49,r:.56,b:.06,rot:{x:Math.SQRT1_2,y:0,z:0,w:Math.SQRT1_2}},{x:S,y:j+.64+K*1.07,z:P,ry:H,mass:1.2,friction:.8,restitution:.05,kind:"hay"}):z==="haybale_sq"?he=t.dynamic({type:"box",hx:.55,hy:.23,hz:.28},{x:S,y:j+.25,z:P,ry:H,mass:.8,friction:.8,kind:"hay"}):z==="cone"?(he=t.dynamic({type:"cone",hh:.37,r:.3},{x:S,y:j+.39,z:P,ry:H,mass:.15,restitution:.3,kind:"rubber"}),re.children.forEach(ve=>{ve.position.y=-.37})):he=t.dynamic({type:"box",hx:.4,hy:.4,hz:.4},{x:S,y:j+.41+K*.81,z:P,ry:H,mass:.5}),qe.push({g:re,body:he})}let it=z=>{let S=z.body.translation(),P=z.body.rotation();z.g.position.set(S.x,S.y,S.z),z.g.quaternion.set(P.x,P.y,P.z,P.w)};return qe.forEach(it),{terrain:N,water:U,waterMat:q,grassU:Oe.U,glow:h,trees:V,htex:O,pressGrass(z,S,P){Oe.press(z,S,P)},occlude(z,S,P){let H=S.x-z.x,K=S.y-z.y,re=S.z-z.z,j=H*H+K*K+re*re||1;for(let he in ie){let ve=V[he];if(!ve)continue;let nt=!1,ke=he==="plane"?2.6:he==="palm"?2.2:he==="poplar"?1.4:2,lt=he==="poplar"?3.6:he==="palm"?3.4:2.8;for(let Je=0;Je<ve.length;Je++){let Xt=ve[Je],Ci=Xt.x,st=Xt.y+lt*Xt.s,Ui=Xt.z;if(Math.abs(Ci-z.x)>40&&Math.abs(Ci-S.x)>40){Xt.fade>0&&(Xt.fade=0,nt=!0);continue}let Si=((Ci-z.x)*H+(st-z.y)*K+(Ui-z.z)*re)/j;Si=Math.max(0,Math.min(1,Si));let ht=z.x+H*Si-Ci,zt=z.y+K*Si-st,Tr=z.z+re*Si-Ui,yi=Math.sqrt(ht*ht+zt*zt*.6+Tr*Tr),Ti=Si<.97&&yi<ke*Xt.s+.4?1:0,pi=Xt.fade+(Ti-Xt.fade)*Math.min(1,P*(Ti?7:3));(Math.abs(pi-Xt.fade)>.002||Ti===0&&Xt.fade>0&&pi<.01)&&(Xt.fade=pi<.01&&!Ti?0:pi,nt=!0)}if(nt)for(let Je of pe[he]){let Xt=Je.geometry.attributes.aFade;for(let Ci=0;Ci<ve.length;Ci++)Xt.array[Ci]=ve[Ci].fade;Xt.needsUpdate=!0}}},update(z,S,P){Tt.time.value=S,Tt.car.value.copy(P.carPos),Oe.update(S,P.camPos||P.focus),q.uniforms.t.value=S,q.uniforms.car.value.copy(P.carPos),Ne(P.carPos,P.speed,P.onShake),fe(z),I(P.carPos,P.vel,P.speed,z),Te(z,S,P.focus),Ee(z,S,P.carPos),Xe(z,S);for(let H of qe)H.body.isSleeping()||it(H)}}}var nb=(e,t,i)=>Math.min(i,Math.max(t,e));function am(e,{coarse:t=!1,sample:i}={}){let r=new C(56,24,56),a=t?3500:8e3,n=new Float32Array(a*3),s=new Float32Array(a);for(let q=0;q<a;q++)n[q*3]=Math.random(),n[q*3+1]=Math.random(),n[q*3+2]=Math.random(),s[q]=Math.random();let o=new yt;o.setAttribute("position",new Ot(n,3)),o.setAttribute("rnd",new Ot(s,1));let l={t:{value:0},center:{value:new C},box:{value:r},kind:{value:1},amount:{value:0},wind:{value:new de},scale:{value:400},tint:{value:new be(1,1,1)}},c=new Dn(o,new Ft({uniforms:l,transparent:!0,depthWrite:!1,vertexShader:`
      uniform float t, kind, amount, scale; uniform vec3 center, box; uniform vec2 wind; attribute float rnd; varying float vA; varying float vR; varying float vNear;
      void main(){
        vA = step(rnd, amount); vR = rnd;
        vec3 vel;
        if (kind < 1.5) {   // snow: slow, turbulent
          float sz = 0.4 + rnd * 0.6;
          vel = vec3(wind.x * 0.35 + sin(t * 0.7 + rnd * 40.0) * 0.9, -1.1 - sz * 0.9, wind.y * 0.35 + cos(t * 0.6 + rnd * 23.0) * 0.9);
        } else {             // sand: fast, low
          vel = vec3(wind.x * 3.2, sin(t * 3.0 + rnd * 30.0) * 1.4, wind.y * 3.2);
        }
        vec3 p = position * box + vel * t;
        p += vec3(sin(t * 1.3 + rnd * 9.0), 0.0, cos(t * 1.1 + rnd * 7.0)) * (kind < 1.5 ? 0.35 : 0.1);
        vec3 o = center - box * 0.5; o.y = center.y - (kind < 1.5 ? 8.0 : 3.0);
        vec3 b = box; if (kind > 1.5) b.y = 9.0;
        p = mod(p - o, b) + o;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float d = -mv.z;
        vNear = smoothstep(0.6, 3.5, d) * (1.0 - smoothstep(30.0, 50.0, d));
        float sz = kind < 1.5 ? mix(0.05, 0.13, rnd * rnd) : 0.035 + rnd * 0.03;
        gl_PointSize = clamp(sz * scale / d, 1.0, 64.0);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float kind; uniform vec3 tint; varying float vA; varying float vR; varying float vNear;
      void main(){
        if (vA < 0.5) discard;
        vec2 c = gl_PointCoord - 0.5; float a; vec3 col;
        if (kind < 1.5) { a = 1.0 - smoothstep(0.08, 0.5, length(c)); a *= 0.55 + 0.45 * vR; col = vec3(1.0); }
        else { a = (1.0 - smoothstep(0.0, 0.5, length(c * vec2(0.45, 2.6)))) * 0.7; col = vec3(0.88, 0.7, 0.48); }
        gl_FragColor = vec4(col * tint, a * vNear);
      }`}));c.frustumCulled=!1,c.renderOrder=6,e.add(c);let h=t?2200:5e3,d=new Float32Array(h*6),u=new Float32Array(h*2),p=new Float32Array(h*2);for(let q=0;q<h;q++){let U=Math.random(),L=Math.random(),G=Math.random(),F=Math.random();for(let Q=0;Q<2;Q++)d[q*6+Q*3]=U,d[q*6+Q*3+1]=L,d[q*6+Q*3+2]=G,u[q*2+Q]=Q,p[q*2+Q]=F}let g=new yt;g.setAttribute("position",new Ot(d,3)),g.setAttribute("end",new Ot(u,1)),g.setAttribute("rnd",new Ot(p,1));let x={t:l.t,center:l.center,box:l.box,amount:{value:0},wind:l.wind,tint:{value:new be(1,1,1)}},m=new jo(g,new Ft({uniforms:x,transparent:!0,depthWrite:!1,vertexShader:`
      uniform float t, amount; uniform vec3 center, box; uniform vec2 wind; attribute float end; attribute float rnd; varying float vA; varying float vE;
      void main(){
        vA = step(rnd, amount); vE = end;
        vec3 vel = vec3(wind.x * 0.6, -22.0 - rnd * 6.0, wind.y * 0.6);
        vec3 p = position * box + vel * t;
        vec3 o = center - box * 0.5; o.y = center.y - 8.0;
        p = mod(p - o, box) + o;
        p -= vel * 0.035 * end;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vA *= smoothstep(0.8, 3.0, -mv.z) * (1.0 - smoothstep(25.0, 40.0, -mv.z));
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:"uniform vec3 tint; varying float vA; varying float vE; void main(){ if (vA < 0.01) discard; gl_FragColor = vec4(vec3(0.78, 0.84, 0.95) * tint, vA * (0.12 + vE * 0.32)); }"}));m.frustumCulled=!1,m.renderOrder=6,e.add(m);let f=t?90:220,M=new gh(.6,1,20).rotateX(-Math.PI/2),y=new Ft({uniforms:{t:l.t,amount:{value:0}},transparent:!0,depthWrite:!1,vertexShader:`uniform float t; attribute float phase; varying float vK;
      void main(){ float k = fract(t * 1.6 + phase); vK = k; vec3 p = position * (0.03 + k * 0.13);
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(p, 1.0); }`,fragmentShader:"uniform float amount; varying float vK; void main(){ gl_FragColor = vec4(0.85, 0.9, 1.0, (1.0 - vK) * (1.0 - vK) * 0.3 * amount); }"}),v=new zi(M,y,f),T=new Float32Array(f);for(let q=0;q<f;q++)T[q]=Math.random();v.geometry=M.clone(),v.geometry.setAttribute("phase",new Yi(T,1)),v.frustumCulled=!1,v.instanceMatrix.setUsage(ra),v.renderOrder=3,e.add(v);let R=Array.from({length:f},()=>({x:0,z:0,ph:Math.random(),last:-1})),w=(()=>{let q=document.createElement("canvas");q.width=q.height=256;let U=q.getContext("2d");for(let G=0;G<26;G++){let F=60+Math.random()*136,Q=70+Math.random()*116,V=30+Math.random()*60,Z=U.createRadialGradient(F,Q,0,F,Q,V);Z.addColorStop(0,"rgba(255,255,255,.22)"),Z.addColorStop(1,"rgba(255,255,255,0)"),U.fillStyle=Z,U.fillRect(0,0,256,256)}return new Or(q)})(),_=t?22:46,b={t:l.t,center:l.center,wind:l.wind,amount:{value:0},col:{value:new be("#d6a86a")},map:{value:w}},N=new zi(new ri(1,1),new Ft({uniforms:b,transparent:!0,depthWrite:!1,vertexShader:`uniform float t; uniform vec3 center; uniform vec2 wind; attribute vec4 cl; varying vec2 vUv; varying float vA;
      void main(){
        vUv = uv;
        vec3 box = vec3(80.0, 10.0, 80.0);
        vec3 p = cl.xyz * box + vec3(wind.x, 0.0, wind.y) * 2.4 * t;
        vec3 o = center - box * 0.5; o.y = center.y - 3.5;
        p = mod(p - o, box) + o;
        vec4 mv = viewMatrix * vec4(p, 1.0);
        float s = 9.0 + cl.w * 14.0;
        float rot = t * 0.05 * (cl.w - 0.5) + cl.w * 6.0;
        vec2 q = vec2(position.x * cos(rot) - position.y * sin(rot), position.x * sin(rot) + position.y * cos(rot));
        mv.xy += q * s;
        float d = -mv.z;
        vA = smoothstep(1.0, 9.0, d) * (1.0 - smoothstep(40.0, 60.0, d));
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`uniform sampler2D map; uniform vec3 col; uniform float amount; varying vec2 vUv; varying float vA;
      void main(){ float a = texture2D(map, vUv).r * vA * amount; if (a < 0.003) discard; gl_FragColor = vec4(col, a); }`}),_),D=new Float32Array(_*4);for(let q=0;q<_*4;q++)D[q]=Math.random();N.geometry.setAttribute("cl",new Yi(D,4)),N.frustumCulled=!1,N.renderOrder=7,e.add(N);let O=new Ze;return{resize(q,U){l.scale.value=q*U*.9},update(q,U,L,G,F,Q,V,Z,te){l.t.value=U,l.center.value.copy(F),l.wind.value.copy(V);let ye=1-Z*.55;if(l.kind.value=L==="sand"?2:1,l.amount.value=L==="snow"?G:L==="sand"?G*.8:0,l.tint.value.setScalar(ye),x.amount.value=L==="rain"?G:0,x.tint.value.setScalar(ye),y.uniforms.amount.value=L==="rain"?G:0,v.visible=L==="rain"&&G>.02,v.visible){for(let _e=0;_e<f;_e++){let Ue=R[_e],Ge=(U*1.6+Ue.ph)%1;if(Ge<Ue.last||Ue.last<0){let ie=Math.random()*Math.PI*2,se=1.5+Math.random()*13;Ue.x=Q.x+Math.cos(ie)*se,Ue.z=Q.z+Math.sin(ie)*se}Ue.last=Ge,O.makeTranslation(Ue.x,i(Ue.x,Ue.z)+.04,Ue.z),v.setMatrixAt(_e,O)}v.instanceMatrix.needsUpdate=!0}b.amount.value=L==="sand"?G:0,N.visible=b.amount.value>.01,b.col.value.copy(te).lerp(new be("#d9ab6c"),.4)}}}var nm={uniforms:{tDiffuse:{value:null},tint:{value:new C(1,1,1)},sat:{value:1},contrast:{value:1},lift:{value:0},vig:{value:.25},grain:{value:.02},t:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec3 tint; uniform float sat, contrast, lift, vig, grain, t; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec3 col = c.rgb * tint;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, sat);
      col = (col - 0.18) * contrast + 0.18 + lift;
      vec2 d = vUv - 0.5; col *= 1.0 - vig * smoothstep(0.25, 0.85, length(d * vec2(1.2, 1.0)));
      col += (h(vUv * 931.0 + t) - 0.5) * grain * (0.4 + l);
      gl_FragColor = vec4(max(col, 0.0), c.a);
    }`};function sm(e,t,i){let r={clear:[1,1,1,1.06,1.04,0,.22],rain:[.9,.96,1.05,.72,.94,.004,.32],snow:[.98,1.02,1.08,.82,.9,.02,.2],sand:[1.1,.96,.78,.78,.86,.012,.34]},a=r.clear,n=r[e]||a,s=nb(t,0,1),o=a.map((l,c)=>l+(n[c]-l)*s);return o[3]*=1-i*.18,o[6]+=i*.12,o}var sb=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,om=(e,t,i)=>Math.min(i,Math.max(t,e)),Wa=5,hu=5.24,uu=3.1,Mr=.18,Wn=-1.32,Os=1.32,Bt=(e,t,i=0)=>new C(Math.sin(e)*t,i,-Math.cos(e)*t);function du(e,t,i,r,a,n,s=64){let o=[],l=[],c=[],h=(g,x,m,f,M)=>{let y=o.length/3;[g,x,m,f].forEach((v,T)=>{o.push(v.x,v.y,v.z);let R=M[T];l.push(R.x,R.y,R.z)}),c.push(y,y+1,y+2,y,y+2,y+3)},d=new C(0,1,0);for(let g=0;g<s;g++){let x=i+(r-i)*g/s,m=i+(r-i)*(g+1)/s,f=Bt(x,-1),M=Bt(m,-1),y=Bt(x,1),v=Bt(m,1);h(Bt(x,e,a),Bt(x,e,n),Bt(m,e,n),Bt(m,e,a),[f,f,M,M]),h(Bt(m,t,a),Bt(m,t,n),Bt(x,t,n),Bt(x,t,a),[v,v,y,y]),h(Bt(x,e,n),Bt(x,t,n),Bt(m,t,n),Bt(m,e,n),[d,d,d,d])}let u=(g,x)=>{let m=new C(Math.cos(g)*x,0,Math.sin(g)*x);return[m,m,m,m]};h(Bt(i,t,a),Bt(i,t,n),Bt(i,e,n),Bt(i,e,a),u(i,-1)),h(Bt(r,e,a),Bt(r,e,n),Bt(r,t,n),Bt(r,t,a),u(r,1));let p=new yt;return p.setAttribute("position",new $e(o,3)),p.setAttribute("normal",new $e(l,3)),p.setIndex(c),p}function ob(e,t,i,r){let s=document.createElement("canvas");s.width=1100,s.height=1300;let o=s.getContext("2d"),l=Wt[e.key];o.fillStyle="#16171c",o.textBaseline="top",o.font='500 40px "Geist Mono", monospace',o.fillText(`${String(t+1).padStart(2,"0")} \u2014 ${String(i).padStart(2,"0")}`,40,40),o.fillStyle=r.accent,o.fillRect(40,110,90,10),o.fillStyle="#16171c",o.font="600 172px Geist, sans-serif";let c=e.en.split(/\s+/),h=[],d="";for(let g of c){let x=d?`${d} ${g}`:g;o.measureText(x).width>1020&&d?(h.push(d),d=g):d=x}h.push(d);let u=170;for(let g of h.slice(0,2))o.fillText(g,34,u,1030),u+=170;o.font='500 110px "PingFang SC", "Noto Sans SC", "Microsoft YaHei", sans-serif',o.fillStyle="#2a2b31",o.fillText(e.zh,40,u+20),u+=190,o.font='500 38px "Geist Mono", monospace',o.fillStyle="#5b5c63",o.fillText(l.lat!=="\u2014"?`${l.lat}   ${l.lon}`:"ON THE ROAD",40,u),o.font="400 46px Geist, sans-serif",o.fillStyle="#2a2b31",o.fillText(r.line,40,u+70,1020),o.font='500 38px "Geist Mono", monospace',o.fillStyle="#5b5c63",o.fillText(`${e.photos.length} PHOTOGRAPHS \xB7 ENTER \u770B\u7167\u7247`,40,u+150,1020);let p=new Or(s);return p.colorSpace=Gt,p.anisotropy=8,p}function lb(e,t){let i=document.createElement("canvas");i.width=512,i.height=120;let r=i.getContext("2d");r.fillStyle="#f6f4ef",r.fillRect(0,0,512,120),r.fillStyle="#16171c",r.font='500 26px "Geist Mono", monospace',r.fillText(String(e+1).padStart(2,"0"),22,46),r.font="600 30px Geist, sans-serif",r.fillText(t.title||"",80,46,410),r.fillStyle="#5b5c63",r.font='400 26px "PingFang SC", "Noto Sans SC", sans-serif',r.fillText(t.zh||"",80,90,410);let a=new Or(i);return a.colorSpace=Gt,a.anisotropy=4,a}var cb=(()=>{let e=document.createElement("canvas");e.width=128,e.height=256;let t=e.getContext("2d"),i=t.createRadialGradient(64,40,4,64,110,130);return i.addColorStop(0,"rgba(255,236,200,1)"),i.addColorStop(.45,"rgba(255,225,180,.45)"),i.addColorStop(1,"rgba(255,220,170,0)"),t.fillStyle=i,t.fillRect(0,0,128,256),new Or(e)})();function hb(e){let i=document.createElement("canvas");i.width=i.height=1024;let r=i.getContext("2d");r.strokeStyle="rgba(0,0,0,.14)",r.lineWidth=3,r.beginPath(),r.arc(1024/2,1024/2,1024*.47,0,Math.PI*2),r.stroke();for(let n=0;n<96;n++){let s=n/96*Math.PI*2,o=1024*.47,l=1024*(n%8?.458:.44);r.beginPath(),r.moveTo(1024/2+Math.cos(s)*o,1024/2+Math.sin(s)*o),r.lineTo(1024/2+Math.cos(s)*l,1024/2+Math.sin(s)*l),r.stroke()}r.fillStyle="rgba(0,0,0,.07)",r.font="600 280px Geist, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(String(e+1).padStart(2,"0"),1024/2,1024*.64);let a=new Or(i);return a.colorSpace=Gt,a.anisotropy=8,a}function lm(e,t,i,r,a){let n=new qo,s=[],o=a.filter(g=>Wt[g.key]),l=Vn(new Qt({color:"#f1eee7",roughness:.92,name:"plaster"}),{kind:"plaster",bump:.25}),c=new Qt({color:"#1b1d24",roughness:.6}),h=new Qt({color:"#141519",roughness:.45}),d=new Qt({color:"#f7f5f0",roughness:.95}),u=new Qt({color:"#16171c",roughness:.4,metalness:.3});o.forEach((g,x)=>{let m=Wt[g.key],f=lu[g.key]||lu.road,M=r.sample(m.x,m.z),y=new hi;y.position.set(m.x,M,m.z),e.add(y);let v=ya(i,"platform");v.children.forEach(F=>{F.material=Vn(F.material.clone(),{kind:"terrazzo",name:"terrazzo"}),F.material.color.set(f.plat),F.castShadow=!1}),y.add(v),t.statics.cyl(m.x,M+.05,m.z,.12,6,"stone");let T=new rt(new uh(5.9,64),new Qt({map:hb(x),transparent:!0,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));T.rotation.x=-Math.PI/2,T.position.y=Mr+.004,T.receiveShadow=!0,y.add(T);let R=new Qt({color:f.accent,emissive:f.accent,emissiveIntensity:.25,roughness:.35,metalness:.3}),w=new rt(new _h(4.15,.05,6,140),R);w.rotation.x=-Math.PI/2,w.position.y=Mr+.01,y.add(w);let _=new rt(du(Wa,hu,Wn,Os,Mr,Mr+uu),l);_.castShadow=!0,_.receiveShadow=!0,y.add(_),y.add(new rt(du(Wa-.012,hu+.012,Wn-.002,Os+.002,Mr,Mr+.16),c)),y.add(new rt(du(Wa-.01,Wa-.002,Wn,Os,Mr+uu-.09,Mr+uu-.05),new Qt({color:f.accent,roughness:.5})));for(let F=0;F<10;F++){let Q=Wn+(Os-Wn)*(F+.5)/10,V=(Wa+hu)/2,Z=Bt(Q,V);t.statics.box(m.x+Z.x,M+Mr+1.4,m.z+Z.z,V*(Os-Wn)/20+.05,1.4,.2,-Q,"stone")}let b=-1.02,N=2.3,D=2.72,O=ob(g,x,o.length,f),q=new Qt({map:O,transparent:!0,roughness:.9,emissive:"#ffffff",emissiveMap:O,emissiveIntensity:0,polygonOffset:!0,polygonOffsetFactor:-2}),U=new rt(new ri(N,D),q);U.position.copy(Bt(b,Wa-.12,Mr+1.62)),U.rotation.y=-b,y.add(U);let L=Math.min(5,g.photos.length),G=[];for(let F=0;F<L;F++){let Q=g.photos[F],V=L===1?.15:-.42+(1.12+.42)*F/(L-1),Z=Q.ratio||1.5,te=Z>=1?1.05:1.4,ye=te*Z;ye>1.5&&(ye=1.5,te=ye/Z);let _e=new hi;_e.position.copy(Bt(V,Wa-.07,Mr+1.62)),_e.rotation.y=-V,y.add(_e);let Ue=new hi;_e.add(Ue);let Ge=new rt(new Fr(ye+.26,te+.26,.045),h);Ge.castShadow=!0,Ue.add(Ge);let ie=new rt(new ri(ye+.2,te+.2),d);ie.position.z=.024,Ue.add(ie);let se=new di({color:"#333"});n.load(Q.s,Ce=>{Ce.colorSpace=Gt,Ce.anisotropy=8,se.map=Ce,se.color.set("#fff"),se.needsUpdate=!0});let pe=new rt(new ri(ye,te),se);pe.position.z=.026,Ue.add(pe);let Le=new rt(new ri(.86,.2),new Qt({map:lb(F,Q),roughness:.9}));Le.position.set(-(ye+.26)/2+.43,-(te+.26)/2-.22,.012),_e.add(Le);let Ne=(te+.26)/2,fe=new rt(new Fr(.03,.03,.34),u);fe.position.set(0,Ne+.3,.14),_e.add(fe);let Oe=new rt(new Fr(Math.min(.9,ye*.55),.05,.07),u);Oe.position.set(0,Ne+.3,.32),_e.add(Oe);let ce=new di({color:"#fff1d8"}),oe=new rt(new ri(Math.min(.86,ye*.53),.025),ce);oe.rotation.x=Math.PI/2,oe.position.set(0,Ne+.274,.32),_e.add(oe);let le=new di({map:cb,transparent:!0,opacity:0,blending:ga,depthWrite:!1,color:"#ffd9a6"}),Re=new rt(new ri(ye+1.1,te+1.5),le);Re.position.set(0,.05,-.02),_e.add(Re),G.push({inner:Ue,poolMat:le,bulbMat:ce,delay:.12+F*.11,photoMat:se})}s.push({...g,x:m.x,z:m.z,gy:M,root:y,ring:w,ringMat:R,frames:G,textMat:q,lift:0,style:f,focus:new C(m.x+.2,M+2.1,m.z-2.8)})});function p(g,x,m,f){let M=null;for(let y of s){let v=Math.hypot(m.x-y.x,m.z-y.z),T=v<4.9;if(T&&(M=y),y.lift=om(y.lift+(T?g*.7:-g*.9),0,1),!(v>40&&y.lift===0&&!y.dirty)){y.dirty=v<40,y.ringMat.emissiveIntensity=.2+y.lift*1.6+f*.6,y.textMat.emissiveIntensity=f*.5*(.4+y.lift*.6);for(let R of y.frames){let w=sb(om((y.lift-R.delay)/.35,0,1)),_=Math.max(w,f*.45);R.inner.position.z=w*.05,R.poolMat.opacity=_*(.16+f*.55),R.bulbMat.color.setScalar(.45+_*.55),R.photoMat.map&&R.photoMat.color.setScalar(.8+.2*Math.max(_,1-f))}}}return M}return{stops:s,update:p}}var sl=(e,t=0,i=1)=>Math.min(i,Math.max(t,e)),Xn=(e,t,i)=>{let r=sl((i-e)/(t-e));return r*r*(3-2*r)},Fs=[0,7,12,17,23];function cm(){let e,t,i,r=!1,a=null,n=!1,s={},o=900,l=1,c=0,h=0;function d(){let x=e.createBuffer(1,e.sampleRate*3,e.sampleRate),m=x.getChannelData(0),f=1234567,M=0;for(let y=0;y<m.length;y++){f=Math.imul(f,1664525)+1013904223>>>0;let v=f/2147483648-1;M=M*.92+v*.08,m[y]=v*.35+M*2.2}return x}function u(x,m,f=.7){let M=e.createBufferSource();M.buffer=i,M.loop=!0;let y=e.createBiquadFilter();y.type=x,y.frequency.value=m,y.Q.value=f;let v=e.createGain();return v.gain.value=0,M.connect(y).connect(v).connect(t),M.start(e.currentTime+Math.random()),{f:y,g:v}}let p=(x,m,f=.08)=>x.setTargetAtTime(m,e.currentTime,f);async function g(){e=new(window.AudioContext||window.webkitAudioContext);let x=e.createDynamicsCompressor();x.threshold.value=-14,x.ratio.value=4,t=e.createGain(),t.gain.value=0,t.connect(x).connect(e.destination),i=d();let m=e.createWaveShaper(),f=new Float32Array(1024);for(let D=0;D<1024;D++){let O=D/512-1;f[D]=Math.tanh(O*2.4)}m.curve=f;let M=e.createBiquadFilter();M.type="lowpass",M.Q.value=2.2;let y=e.createGain();y.gain.value=0;let v=e.createOscillator(),T=e.createOscillator(),R=e.createOscillator();v.type="sawtooth",T.type="sawtooth",R.type="square";let w=e.createGain(),_=e.createGain(),b=e.createGain();w.gain.value=.5,_.gain.value=.35,b.gain.value=.22,v.connect(w).connect(m),T.connect(_).connect(m),R.connect(b).connect(m),m.connect(M).connect(y).connect(t),[v,T,R].forEach(D=>D.start());let N=u("bandpass",900,1.2);s.engine={o1:v,o2:T,o3:R,ef:M,eg:y,rasp:N},s.gravel=u("lowpass",3200,.5),s.grass=u("bandpass",500,.8),s.water=u("bandpass",1300,.6),s.skid=u("bandpass",1100,3.5),s.wind=u("lowpass",520,.4),s.rain=u("highpass",2600,.5)}return{get on(){return r},async toggle(){return a||(a=g()),await a,r=!r,r&&await e.resume(),p(t.gain,r&&!n?.8:0,.05),r},pause(x){n=x,e&&p(t.gain,r&&!n?.8:0,.15)},drive({speed:x,throttle:m,boost:f,surface:M,wading:y,skid:v,grounded:T,wind:R,rain:w,dt:_}){if(!r||!e)return;c=Math.max(0,c-_);let b=m<0&&x<6;!b&&c===0&&(l<Fs.length-1&&x>Fs[l+1]*(f?1.15:1)&&m>0?(l++,c=.25):l>1&&x<Fs[l]-2&&(l--,c=.2)),(b||x<1)&&(l=1);let N=Fs[l-1]||0,D=Fs[l]||7,O=sl((x-N)/Math.max(4,D-N+4));h+=((Math.abs(m)>0?1:0)-h)*Math.min(1,_*(m?8:4));let q=850+O*3400+h*(T?250:1400)+(f&&m>0?500:0);o+=(q-o)*Math.min(1,_*(c>0?14:7)),c>.12&&(o-=900*_*8);let U=o/60*2,L=s.engine;p(L.o1.frequency,U*.5,.03),p(L.o2.frequency,U*.503,.03),p(L.o3.frequency,U*.25,.03),p(L.ef.frequency,380+o*.32+h*900,.06),p(L.eg.gain,.07+h*.08+Xn(800,4500,o)*.05-(c>.12?.05:0),.05),p(L.rasp.f.frequency,400+o*.25,.08),p(L.rasp.g.gain,h*.05,.08);let G=T?Xn(.6,16,x):0,F=sl(y*1.5);p(s.gravel.g.gain,G*(M==="gravel"||M==="sand"?.32:M==="snow"?.18:.05)*(1-F),.1),p(s.gravel.f.frequency,M==="sand"?1700:M==="snow"?2400:3600,.2),p(s.grass.g.gain,G*(M==="grass"?.26:.02)*(1-F),.1),p(s.water.g.gain,G*F*.55+F*.05,.1),p(s.skid.g.gain,T?Xn(.2,.9,v)*Xn(2,10,x)*(M==="gravel"?.18:.1):0,.05),p(s.wind.g.gain,.03+Xn(3,22,x)*.16+R*.08,.2),p(s.wind.f.frequency,420+x*30,.2),p(s.rain.g.gain,w*.12,.3)},bump(x,m="stone",f=0){if(!r||!e)return;let M=e.currentTime,y=Xn(1,16,x),v=e.createStereoPanner();v.pan.value=sl(f,-.8,.8),v.connect(t);let T=m==="wood"||m==="tree"||m==="crate",R=m==="hay"||m==="rubber",w=m==="metal",_=e.createOscillator(),b=e.createGain();_.type=w||T?"triangle":"sine",_.frequency.setValueAtTime(w?240:T?120:R?70:85,M),_.frequency.exponentialRampToValueAtTime(w?140:45,M+.18),b.gain.setValueAtTime(1e-4,M),b.gain.exponentialRampToValueAtTime((.12+y*.4)*(R?.5:1),M+.006),b.gain.exponentialRampToValueAtTime(1e-4,M+(w?.3:.2)),_.connect(b).connect(v),_.start(M),_.stop(M+.35);let N=e.createBufferSource();N.buffer=i;let D=e.createBiquadFilter();D.type="bandpass",D.frequency.value=w?2600:T?1200:R?380:650,D.Q.value=w?3:.8;let O=e.createGain();O.gain.setValueAtTime(1e-4,M),O.gain.exponentialRampToValueAtTime((.1+y*.35)*(R?.6:1),M+.004),O.gain.exponentialRampToValueAtTime(1e-4,M+(R?.3:.18)),N.connect(D).connect(O).connect(v),N.start(M,Math.random()*2,.4),setTimeout(()=>{v.disconnect()},800)}}}var Ji=e=>String(e!=null?e:"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),aa=(e,t,i)=>Math.min(i,Math.max(t,e)),Xa=(e,t,i)=>{let r=aa((i-e)/(t-e),0,1);return r*r*(3-2*r)},br=(e,t,i)=>e+(t-e)*i,Sr=(e,t,i,r)=>e+(t-e)*(1-Math.exp(-i*r)),ub=(e,t,i,r)=>e+Math.atan2(Math.sin(t-e),Math.cos(t-e))*(1-Math.exp(-i*r)),pu=[{tod:.44,en:"Day",zh:"\u767D\u5929"},{tod:.705,en:"Golden hour",zh:"\u9EC4\u660F"},{tod:.93,en:"Night",zh:"\u591C"},{tod:.255,en:"Dawn",zh:"\u6E05\u6668"}],ol=["auto","clear","rain","snow","sand"],hm={clear:"\u6674 Clear",rain:"\u96E8 Rain",snow:"\u96EA Snow",sand:"\u6C99\u5C18\u66B4 Sandstorm"},db={giza:"sand",cairo:"clear",luxor:"clear",qinggan:"sand",yunnan:"snow",beijing:"clear",nanjing:"rain",shanghai:"rain",road:"clear"},pb={uniforms:{tDiffuse:{value:null},power:{value:0},rect:{value:new Dt(.4,.4,.6,.6)},aspect:{value:1.6}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float power, aspect; uniform vec4 rect; varying vec2 vUv;
    float outside(vec2 uv){ vec2 d = max(rect.xy - uv, uv - rect.zw); return smoothstep(0.0, 0.05, max(d.x, d.y)); }
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - vec2(0.5, 0.46);
      float r = length(d * vec2(aspect, 1.0)) / aspect;
      float e = smoothstep(0.16, 0.5, r) * outside(vUv) * power;
      if (e > 0.01) {
        vec3 sum = c.rgb * 2.0; float tot = 2.0;
        for (int i = 1; i <= 6; i++) {
          float f = float(i) / 6.0;
          vec2 uv = vUv - d * e * 0.085 * f;
          float w = (1.0 - f * 0.6) * outside(uv);
          sum += texture2D(tDiffuse, uv).rgb * w; tot += w;
        }
        c.rgb = sum / tot;
      }
      gl_FragColor = c;
    }`};async function fb(e,{stops:t=[],onClose:i}={}){var bu;let r=matchMedia("(pointer: coarse)").matches,a=matchMedia("(prefers-reduced-motion: reduce)").matches,n=new URLSearchParams(location.search);e.innerHTML=`
    <canvas class="drive__canvas"></canvas>
    <div class="dv-vignette"></div>
    <header class="dv-top">
      <div class="dv-id"><span class="dv-word">Drive<span>.</span></span><span class="dv-sub mono">\u5F00\u8F66\u901B\u7167\u7247 \xB7 On the road</span></div>
      <nav class="dv-nav" aria-label="Drive options">
        <button type="button" data-act="map">\u5730\u56FE <kbd>M</kbd></button>
        <button type="button" data-act="sound" aria-pressed="false">\u58F0\u97F3 <span>\u5173</span></button>
        <button type="button" data-act="view">\u89C6\u89D2 <kbd>V</kbd></button>
        <button type="button" data-act="reset">\u6276\u6B63 <kbd>R</kbd></button>
        <button type="button" data-act="close" class="dv-x" aria-label="Leave drive mode">\u2715</button>
      </nav>
    </header>
    <div class="dv-loc mono"><i></i><span class="dv-place">\u2014</span></div>
    <div class="dv-cond"><button type="button" data-act="time" class="mono" title="N"></button><button type="button" data-act="weather" class="mono" title="T"></button></div>
    <footer class="dv-hud">
      <div class="dv-keys mono">${r?"":"<span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> \u9A7E\u9A76</span><span><kbd>Shift</kbd> \u52A0\u901F</span><span><kbd>Space</kbd> \u8DF3</span><span><kbd>B</kbd> \u624B\u5239</span><span><kbd>Enter</kbd> \u770B\u7167\u7247</span><span><kbd>1\u20139</kbd> \u5230\u7AD9</span><span>\u62D6\u62FD \xB7 \u6EDA\u8F6E \u955C\u5934</span>"}</div>
      <div class="dv-tele"><canvas class="dv-radar" width="192" height="192" aria-hidden="true"></canvas><div class="dv-speed"><output>00</output><span class="mono">KM/H</span></div></div>
    </footer>
    <div class="drive__region" aria-live="polite"></div>
    <div class="drive__card" aria-live="polite"></div>
    <dialog class="dv-mapdlg" aria-label="Island map">
      <div class="dv-maphead"><h2>The island \xB7 \u5730\u56FE</h2><button type="button" data-act="mapclose">\u5173\u95ED \xB7 Esc</button></div>
      <canvas class="dv-fullmap" width="960" height="640"></canvas>
      <div class="dv-mapkey mono"><span class="dv-visited"></span><span>\u70B9\u4E00\u4E2A\u5730\u70B9\u76F4\u63A5\u8FC7\u53BB \xB7 click a place to go there</span></div>
    </dialog>
    <div class="drive__viewer" hidden>
      <div class="dv-vbg"></div>
      <figure><img alt=""><figcaption></figcaption></figure>
      <div class="dv-strip" role="listbox" aria-label="Photographs"></div>
      <button type="button" class="drive__vbtn" data-v="prev" aria-label="Previous">\u2190</button>
      <button type="button" class="drive__vbtn" data-v="next" aria-label="Next">\u2192</button>
      <button type="button" class="drive__vbtn" data-v="close" aria-label="Back to driving">Esc \xB7 \u56DE\u5230\u8F66\u4E0A</button>
    </div>
    <div class="drive__pad" ${r?"":"hidden"}>
      <div><button type="button" data-k="left" aria-label="Steer left">\u25C0</button><button type="button" data-k="right" aria-label="Steer right">\u25B6</button></div>
      <div class="dv-padr"><button type="button" data-k="boost" class="dv-small">\u52A0\u901F</button><button type="button" data-k="jump" class="dv-small">\u8DF3</button><button type="button" data-k="enter" class="dv-small" aria-label="Open photos">\u25CF</button><button type="button" data-k="brake" aria-label="Reverse">\u25BC</button><button type="button" data-k="gas" aria-label="Accelerate">\u25B2</button></div>
    </div>
    <div class="drive__flash"></div>
    <div class="drive__load mono"><span>Building the island \xB7 \u6B63\u5728\u9020\u5C9B</span><i><b></b></i></div>`;let s=Y=>e.querySelector(Y),o=s(".drive__canvas"),l=s(".drive__card"),c=s(".drive__region"),h=s(".drive__viewer"),d=h.querySelector("figure img"),u=h.querySelector("figcaption"),p=s(".drive__flash"),g=s(".dv-place"),x=s(".dv-speed output"),m=s('[data-act="time"]'),f=s('[data-act="weather"]'),M=s('[data-act="sound"]'),y=s(".dv-mapdlg"),v=s(".dv-fullmap"),T=s(".dv-visited"),R=s(".drive__load b"),w=!0,_={rapier:0,assets:0,world:0},b=()=>{R.style.transform=`scaleX(${(_.rapier*.35+_.assets*.5+_.world*.15).toFixed(3)})`},N=()=>{w=!1,i==null||i()};e.addEventListener("click",Y=>{Y.target.closest('[data-act="close"]')&&N()});let D=new URL(".",document.baseURI).href,O=`${D}assets/vendor/rapier/rapier.mjs`,[q,U]=await Promise.all([import(O).then(async Y=>{let $=Y.default||Y;return await $.init(),_.rapier=1,b(),$}),qf(`${D}media/drive/`,Y=>{_.assets=Y,b()})]);if(!w)return{close(){}};await new Promise(Y=>setTimeout(Y,30));let L=new Df({canvas:o,antialias:!0,stencil:!0,powerPreference:"high-performance"});L.setPixelRatio(Math.min(devicePixelRatio,r?1.25:1.7)),L.shadowMap.enabled=!0,L.shadowMap.type=mn,L.toneMapping=Ln;let G=new wp;G.fog=new Tp(12376554,.0085);let F=new Ai(50,1,.12,900),Q=new yf(14478591,9073752,1.1),V=new Is(16777215,2.4);V.castShadow=!0,V.shadow.mapSize.set(r?1024:2048,r?1024:2048),Object.assign(V.shadow.camera,{left:-38,right:38,top:38,bottom:-38,near:1,far:180}),V.shadow.bias=-5e-4,V.shadow.normalBias=.05;let Z=new Is(9085695,0);G.add(Q,V,V.target,Z,Z.target);let te={top:{value:new be},horizon:{value:new be},sunDir:{value:new C(0,1,0)},sunCol:{value:new be},night:{value:0},haze:{value:0}},ye=new rt(new vh(420,32,16),new Ft({uniforms:te,side:Li,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }",fragmentShader:`
      uniform vec3 top, horizon, sunDir, sunCol; uniform float night, haze; varying vec3 vD;
      float h3(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
      void main(){
        vec3 d = normalize(vD); float h = d.y;
        vec3 c = mix(horizon, top, smoothstep(-0.02, 0.45, h) * (1.0 - haze));
        float s = max(dot(d, normalize(sunDir)), 0.0);
        c += sunCol * (pow(s, 900.0) * 6.0 + pow(s, 12.0) * 0.25) * (1.0 - haze * 0.8) * step(0.0, h + 0.05);
        vec3 g = floor(d * 260.0);
        float st = step(0.9965, h3(g)) * smoothstep(0.05, 0.3, h) * night * (1.0 - haze);
        c += vec3(st) * (0.6 + 0.4 * h3(g + 1.0));
        gl_FragColor = vec4(c, 1.0);
      }`}));ye.renderOrder=-1,ye.frustumCulled=!1,G.add(ye);let _e=new vi(2,2,{type:ui,stencilBuffer:!0}),Ue=new Qo(L,_e);Ue.addPass(new el(G,F));let Ge=new kn(new de(256,256),.3,.55,.85);r||Ue.addPass(Ge);let ie=new Ha(pb);a||Ue.addPass(ie);let se=new Ha(nm);Ue.addPass(se),Ue.addPass(new tl);let pe=Uf(),Le=Ff(q,pe),Ne=rm(G,Le,U,pe,{coarse:r}),fe=lm(G,Le,U,pe,t),Oe=fe.stops,{sample:ce}=pe;{let Y=new q.Ball(.45),$={x:0,y:0,z:0,w:1},ge=new C,De=new C,Ke=[];for(let et in Ne.trees)for(let Nt of Ne.trees[et])["shrub","tuft","reeds","bush"].includes(et)||Ke.push([Nt.x,Nt.y+2.8*Nt.s,Nt.z,2.4*Nt.s]);let St=(et,Nt)=>{ge.subVectors(Nt,et);let Rt=ge.length();if(ge.divideScalar(Rt),Le.world.castShape(et,$,ge,Y,0,Rt,!1,q.QueryFilterFlags.EXCLUDE_DYNAMIC))return!1;for(let It=1;It<=12;It++)if(De.copy(et).addScaledVector(ge,Rt*It/12),ce(De.x,De.z)>De.y-.8)return!1;for(let[It,ft,mi,gi]of Ke){let Mi=Math.max(0,Math.min(1,((It-et.x)*ge.x+(ft-et.y)*ge.y+(mi-et.z)*ge.z)/Rt));if(Math.hypot(et.x+ge.x*Rt*Mi-It,et.y+ge.y*Rt*Mi-ft,et.z+ge.z*Rt*Mi-mi)<gi)return!1}return!0};for(let et of fe.stops){let Nt=null;e:for(let Rt of[10.5,9,12,7.5])for(let $t of[0,-.3,.3,-.55,.55,-.8,.8])for(let It of[4.6,3.4]){let ft=new C(et.x+Math.sin($t)*Rt,et.gy+It,et.z+Math.cos($t)*Rt);if(St(et.focus,ft)){Nt=ft;break e}}et.cam=Nt||new C(et.x,et.gy+9,et.z+6)}}_.world=1,b();let oe=cm(),le=Le.car,Re=new hi,Ce=new hi;Re.add(Ce),G.add(Re);let Fe=Y=>Object.assign(Y,{stencilWrite:!0,stencilRef:1,stencilFunc:ih,stencilZPass:mp});for(let Y of U.car_body.parts){let $=new rt(Y.geometry,Fe(Y.material.clone()));$.castShadow=!0,$.receiveShadow=!0,Ce.add($)}let We={};for(let Y of["head","tail","reverse","indL","indR"])for(let $ of((bu=U.car)==null?void 0:bu.roles[Y])||[]){let ge=We[Y]||(We[Y]=Fe($.material.clone()));ge.emissive&&(ge.emissiveIntensity=0),Ce.add(new rt($.geometry,ge))}let Qe=(Y,$)=>{We[Y]&&(We[Y].emissiveIntensity=$)},at=le.WHEELS.map(([Y,$,ge],De)=>{var et;let Ke=new hi,St=new hi;Ke.position.set(Y,$,ge),Ke.add(St),Re.add(Ke);for(let Nt of((et=U.car)==null?void 0:et.roles.wheel)||[]){let Rt=new rt(Nt.geometry,Fe(Nt.material.clone()));Rt.castShadow=!0,St.add(Rt)}return ge<0&&(St.scale.z=-1),{pivot:Ke,spin:St,y:$}}),B=[-.48,.48].map(Y=>{let $=new Zo(16773328,0,46,.5,.6,1);return $.position.set(1.2,.1,Y),$.target.position.set(9,-1.4,Y*2.2),Ce.add($,$.target),$}),gt=new rt(new Fr(2.4,1.3,1.4),new di({color:5926143,transparent:!0,opacity:.35,depthFunc:gs,depthWrite:!1,stencilWrite:!0,stencilRef:1,stencilFunc:gp,stencilFail:Ra,stencilZFail:Ra,stencilZPass:Ra}));gt.position.y=.3,gt.renderOrder=10,Ce.add(gt);let ut=[];for(let Y of[-1.25,1.25])for(let $ of[-.8,1.25])for(let ge of[-.8,.8])ut.push(new C(Y,$,ge));let ct=(Y,$,ge)=>{let De=new zi(new ri(.34,.3).rotateX(-Math.PI/2),new di({color:$,transparent:!0,opacity:ge,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),Y);De.frustumCulled=!1,De.instanceMatrix.setUsage(ra);for(let Ke=0;Ke<Y;Ke++)De.setMatrixAt(Ke,new Ze().makeScale(0,0,0));return De.renderOrder=1,G.add(De),{m:De,i:0,n:Y}},I=ct(1e3,3812386,.22),E=ct(500,1446415,.42),k=[new C(1e9,0,0),new C(1e9,0,0),new C(1e9,0,0),new C(1e9,0,0)],ae=new Ze,ue=new C,Te=new C(0,1,0),Ie=new C,X=(Y,$,ge)=>{ue.set(ge[0],0,ge[2]).normalize(),Ie.crossVectors(ue,Te),ae.makeBasis(ue,Te,Ie).setPosition($.x,$.y+.03,$.z),Y.m.setMatrixAt(Y.i=(Y.i+1)%Y.n,ae),Y.m.instanceMatrix.needsUpdate=!0},xe=200,Ee=new zi(new fh(.16,0),new Qt({color:16777215,roughness:1}),xe);Ee.instanceMatrix.setUsage(ra),Ee.frustumCulled=!1,G.add(Ee);for(let Y=0;Y<xe;Y++)Ee.setColorAt(Y,new be(15326404));let He=Array.from({length:xe},()=>({life:0,p:new C,v:new C,s:1,g:1.5,debris:!1})),me=0,Xe=new Ze,qe=new ii,it=new C,z=new be,S=new Ur,P=(Y,$,ge,De,Ke=1.5,St=!1)=>{let et=He[me=(me+1)%xe];Object.assign(et,{life:1,s:ge,g:Ke,debris:St}),et.p.copy(Y),et.v.copy($),Ee.setColorAt(me,De),Ee.instanceColor.needsUpdate=!0},H=am(G,{coarse:r,sample:ce}),K=260,re=new Float32Array(K*3),j=[];for(let Y=0;Y<K;Y++){let $,ge,De=0;do $=(Math.random()-.5)*240*.8,ge=(Math.random()-.5)*160*.8,De++;while(((or($,ge).meadow||0)<.5||ce($,ge)<.1)&&De<40);j.push([$,ce($,ge)+.6+Math.random()*1.4,ge,Math.random()*6])}let he=new yt;he.setAttribute("position",new Ot(re,3));let ve=new Rs({color:14221178,size:.32,transparent:!0,opacity:0,depthWrite:!1,blending:ga}),nt=new Dn(he,ve);nt.frustumCulled=!1,G.add(nt);let ke=document.createElement("canvas");ke.width=480,ke.height=320;{let Y=ke.getContext("2d"),$=Y.createImageData(240,160),ge=Ne.terrain.geometry.attributes.color,De=Ne.terrain.geometry.attributes.position;for(let St=0;St<De.count;St++){let et=Math.floor((De.getX(St)+240/2)/240*239.99),Rt=(Math.floor((De.getZ(St)+160/2)/160*159.99)*240+et)*4,$t=De.getY(St)<-.45;$.data[Rt]=$t?88:Math.pow(Math.max(0,ge.getX(St)),1/2.2)*255,$.data[Rt+1]=$t?158:Math.pow(Math.max(0,ge.getY(St)),1/2.2)*255,$.data[Rt+2]=$t?190:Math.pow(Math.max(0,ge.getZ(St)),1/2.2)*255,$.data[Rt+3]=255}let Ke=document.createElement("canvas");Ke.width=240,Ke.height=160,Ke.getContext("2d").putImageData($,0,0),Y.imageSmoothingEnabled=!0,Y.drawImage(Ke,0,0,480,320)}let lt=s(".dv-radar"),Je=lt.getContext("2d"),Xt=new Set;function Ci(Y,$){let ge=lt.width,De=ge/2,Ke=2.2;Je.clearRect(0,0,ge,ge),Je.save(),Je.beginPath(),Je.arc(De,De,De-2,0,Math.PI*2),Je.clip(),Je.fillStyle="#4a8ba3",Je.fillRect(0,0,ge,ge),Je.translate(De,De),Je.rotate($),Je.drawImage(ke,(-240/2-Y.x)*Ke,(-160/2-Y.z)*Ke,240*Ke,160*Ke);for(let St of Oe)Je.fillStyle=Xt.has(St.key)?"#fff":"#2233ff",Je.beginPath(),Je.arc((St.x-Y.x)*Ke,(St.z-Y.z)*Ke,5,0,Math.PI*2),Je.fill(),Je.strokeStyle="#0b0c10",Je.lineWidth=1.5,Je.stroke();Je.restore(),Je.fillStyle="#0b0c10",Je.strokeStyle="#fff",Je.lineWidth=2,Je.beginPath(),Je.moveTo(De,De-9),Je.lineTo(De+7,De+7),Je.lineTo(De,De+3),Je.lineTo(De-7,De+7),Je.closePath(),Je.fill(),Je.stroke()}let st=v.getContext("2d"),Ui=v.width/240;function Si(Y,$){let ge=v.width,De=v.height;st.clearRect(0,0,ge,De),st.fillStyle="#4a8ba3",st.fillRect(0,0,ge,De),st.drawImage(ke,0,0,ge,De),st.font="600 15px Geist, sans-serif",st.textBaseline="middle",Oe.forEach((et,Nt)=>{let Rt=(et.x+240/2)*Ui,$t=(et.z+160/2)*Ui,It=Xt.has(et.key);st.fillStyle=It?"#fff":"#2233ff",st.beginPath(),st.arc(Rt,$t,9,0,Math.PI*2),st.fill(),st.strokeStyle="#0b0c10",st.lineWidth=2,st.stroke(),st.fillStyle=It?"#0b0c10":"#fff",st.textAlign="center",st.font='600 11px "Geist Mono", monospace',st.fillText(String(Nt+1),Rt,$t+.5),st.textAlign="left",st.font="600 15px Geist, sans-serif",st.fillStyle="#0b0c10",st.fillText(`${et.en} ${et.zh}`,Rt+14,$t)});let Ke=(Y.x+240/2)*Ui,St=(Y.z+160/2)*Ui;st.save(),st.translate(Ke,St),st.rotate(Math.atan2($[0],-$[2])),st.fillStyle="#ff5a2a",st.strokeStyle="#fff",st.lineWidth=2,st.beginPath(),st.moveTo(0,-12),st.lineTo(9,9),st.lineTo(0,4),st.lineTo(-9,9),st.closePath(),st.fill(),st.stroke(),st.restore(),T.textContent=`\u5DF2\u5230\u8BBF ${Xt.size} / ${Oe.length} \xB7 visited`}v.addEventListener("click",Y=>{let $=v.getBoundingClientRect(),ge=(Y.clientX-$.left)/$.width*v.width,De=(Y.clientY-$.top)/$.height*v.height,Ke=-1,St=40;Oe.forEach((et,Nt)=>{let Rt=Math.hypot((et.x+240/2)*Ui-ge,(et.z+160/2)*Ui-De);Rt<St&&(St=Rt,Ke=Nt)}),Ke>=0&&(y.close(),Ve(Ke))});let ht={gas:0,brake:0,left:0,right:0,hand:0,boost:0,jump:0},zt=null,Tr=0,yi=null,Ti=0,pi=n.has("tod")?parseFloat(n.get("tod")):.42,Hi=null,Er=null,Vr=ol.includes(n.get("wx"))?n.get("wx"):"auto",wt="clear",jt=0,Ei=0,jn=null,Bs=0,qn=pu[0],A=new de,W=n.get("view")==="map"?"map":"chase",ne=0,ee=0,J=.34,Se=9.5,Ae=0,we=null,Be=0,je=W==="map"?1:0,pt=new C,xt=new C,ze=new C,bt=new C,Zt=Math.PI/2,At=(Y,$,ge=Zt)=>le.place(Y,ce(Y,$)+1.3,$,ge),Lt=Oe.find(Y=>Y.key===n.get("at"));Lt?At(Lt.x,Lt.z+9):At(yr.x,yr.z+2);let kt=()=>{let Y=le.body.translation();At(Y.x,Y.z,le.yaw())};function Ve(Y){let $=Oe[Y];$&&(p.classList.remove("is-on"),p.offsetWidth,p.classList.add("is-on"),setTimeout(()=>{At($.x,$.z+10),Kt=!0},180))}let Kt=!0,wr=h.querySelector(".dv-vbg"),Oi=h.querySelector(".dv-strip");function ki(){let Y=yi.photos[Ti];d.classList.remove("is-in");let $=new Image;$.src=Y.m,$.decode().catch(()=>{}).then(()=>{yi&&yi.photos[Ti]===Y&&(d.src=Y.m,requestAnimationFrame(()=>d.classList.add("is-in")))}),wr.style.backgroundImage=`url("${Y.s}")`,u.innerHTML=`<div class="dv-vplace"><span class="mono">${String(Ti+1).padStart(2,"0")} / ${String(yi.photos.length).padStart(2,"0")}</span><strong>${Ji(yi.en)}</strong><span class="zh">${Ji(yi.zh)}</span></div>
      <div class="dv-vtitle"><strong>${Ji(Y.title)}</strong><span class="zh">${Ji(Y.zh)}</span></div>`,Oi.querySelectorAll("button").forEach((ge,De)=>{ge.classList.toggle("is-on",De===Ti),De===Ti&&ge.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth"})})}function Wi(Y){Oi.innerHTML=Y.photos.map(($,ge)=>`<button type="button" data-i="${ge}" aria-label="${Ji($.title)}"><img src="${Ji($.s)}" alt="" loading="lazy"></button>`).join(""),yi=Y,Ti=0,h.hidden=!1,e.classList.add("is-viewing"),Object.keys(ht).forEach($=>{ht[$]=0}),oe.pause(!0),ki()}function Wr(){yi=null,h.hidden=!0,e.classList.remove("is-viewing"),oe.pause(!1)}let Et=Y=>{Ti=(Ti+Y+yi.photos.length)%yi.photos.length,ki()};h.addEventListener("click",Y=>{var De;let $=(De=Y.target.closest("[data-v]"))==null?void 0:De.dataset.v;$==="prev"&&Et(-1),$==="next"&&Et(1);let ge=Y.target.closest("[data-i]");ge&&(Ti=+ge.dataset.i,ki()),($==="close"||Y.target===h||Y.target===wr)&&Wr()});{let Y=null;h.addEventListener("pointerdown",$=>{$.target.closest("button")||(Y=$.clientX)}),h.addEventListener("pointerup",$=>{Y!==null&&Math.abs($.clientX-Y)>50&&Et($.clientX<Y?1:-1),Y=null})}let qt={KeyW:"gas",ArrowUp:"gas",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",KeyB:"hand",ShiftLeft:"boost",ShiftRight:"boost"},cr=()=>{if(y.open){y.close();return}Object.keys(ht).forEach($=>{ht[$]=0});let Y=le.body.translation();Si(Y,le.forward()),y.showModal(),oe.pause(!0)};y.addEventListener("close",()=>oe.pause(!1));let Ct=()=>{W=W==="chase"?"map":"chase"},na=()=>{Vr=ol[(ol.indexOf(Vr)+1)%ol.length]},Xr=Y=>$=>{if(!($.metaKey||$.ctrlKey||$.altKey)&&!y.open){if(yi){if(!Y)return;($.code==="ArrowRight"||$.code==="KeyD")&&Et(1),($.code==="ArrowLeft"||$.code==="KeyA")&&Et(-1),($.code==="Escape"||$.code==="Enter"||$.code==="Backspace")&&Wr(),$.preventDefault();return}qt[$.code]&&(ht[qt[$.code]]=Y?1:0,$.preventDefault()),$.code==="Space"&&(Y&&!$.repeat&&(ht.jump=1),$.preventDefault()),!(!Y||$.repeat)&&($.code==="KeyR"&&kt(),($.code==="Enter"||$.code==="KeyE")&&zt&&Wi(zt),$.code==="Escape"&&N(),$.code==="KeyN"&&ll(),$.code==="KeyT"&&na(),$.code==="KeyM"&&cr(),$.code==="KeyV"&&Ct(),$.code==="KeyL"&&(Er=Er===null?!(Ei>.45):Er?!1:null),/^Digit[1-9]$/.test($.code)&&Ve(+$.code.slice(5)-1))}},Yn=Xr(!0),fu=Xr(!1),mu=()=>Object.keys(ht).forEach(Y=>{ht[Y]=0});addEventListener("keydown",Yn),addEventListener("keyup",fu),addEventListener("blur",mu),e.querySelectorAll(".drive__pad [data-k]").forEach(Y=>{let $=Y.dataset.k;if($==="enter"){Y.addEventListener("click",()=>{zt&&Wi(zt)});return}let ge=Ke=>{var St;Ke.preventDefault(),(St=Y.setPointerCapture)==null||St.call(Y,Ke.pointerId),ht[$]=1},De=()=>{$!=="jump"&&(ht[$]=0)};Y.addEventListener("pointerdown",ge),Y.addEventListener("pointerup",De),Y.addEventListener("pointercancel",De),Y.addEventListener("lostpointercapture",De)}),e.addEventListener("click",async Y=>{var ge;let $=(ge=Y.target.closest("[data-act]"))==null?void 0:ge.dataset.act;if($&&($==="map"&&cr(),$==="mapclose"&&y.close(),$==="view"&&Ct(),$==="reset"&&kt(),$==="time"&&ll(),$==="weather"&&na(),$==="sound")){M.disabled=!0;try{let De=await oe.toggle();M.setAttribute("aria-pressed",String(De)),M.querySelector("span").textContent=De?"\u5F00":"\u5173"}finally{M.disabled=!1}}}),l.addEventListener("click",Y=>{Y.target.closest("[data-open]")&&(Y.preventDefault(),zt&&Wi(zt))}),o.addEventListener("pointerdown",Y=>{Y.button!==0||we||(o.setPointerCapture(Y.pointerId),we={id:Y.pointerId,x:Y.clientX,y:Y.clientY})}),o.addEventListener("pointermove",Y=>{(we==null?void 0:we.id)===Y.pointerId&&(ee-=.007*(Y.clientX-we.x),J=aa(J+.004*(Y.clientY-we.y),.12,1.1),we.x=Y.clientX,we.y=Y.clientY)});for(let Y of["pointerup","pointercancel","lostpointercapture"])o.addEventListener(Y,$=>{(we==null?void 0:we.id)===$.pointerId&&(we=null)});o.addEventListener("wheel",Y=>{Y.preventDefault(),Se=aa(Se+Y.deltaY*.01,6,18)},{passive:!1});function ll(){let Y=[...pu].sort((ge,De)=>ge.tod-De.tod),$=Y.find(ge=>ge.tod>pi%1+.02)||Y[0];Hi={from:pi,to:$.tod>pi%1?Math.floor(pi)+$.tod:Math.floor(pi)+1+$.tod,t:0}}let um=new be("#0c1330"),dm=new be("#c4dfee"),pm=new be("#eaa27a"),fm=new be("#e7b9c6"),mm=new be("#5f9fd6"),gm=new be("#050816"),vm=new be("#6b6fa8"),_m=new be("#d2a466"),xm=new be("#dfe6ee"),ym=new be("#7f8c9c"),sa=new be,oa=new be;function Mm(Y){let $=(pi%1+1)%1,ge=($-.25)*Math.PI*2,De=Math.sin(ge),Ke=Xa(-.1,.22,De);Ei=1-Ke;let St=Math.exp(-Math.pow(De/.2,2));sa.copy(um).lerp(dm,Ke).lerp($<.5?fm:pm,St*.75);let et=jt,Nt=0;wt==="sand"&&(sa.lerp(oa.copy(_m).multiplyScalar(br(.35,1,Ke)),et*.85),Nt=et*.9),wt==="snow"&&(sa.lerp(oa.copy(xm).multiplyScalar(br(.3,1,Ke)),et*.55),Nt=et*.6),wt==="rain"&&(sa.lerp(oa.copy(ym).multiplyScalar(br(.3,1,Ke)),et*.6),Nt=et*.7),G.fog.color.copy(sa),G.fog.density=(W==="map"?.005:.0105)+(wt==="sand"?.042:wt==="snow"?.016:wt==="rain"?.011:0)*et,te.horizon.value.copy(sa),te.top.value.copy(gm).lerp(mm,Ke).lerp(vm,St*.5),te.night.value=Ei,te.haze.value=Nt;let Rt=new C(-Math.cos(ge),Math.sin(ge)*.9+.05,.45).normalize();te.sunDir.value.copy(Rt),te.sunCol.value.set("#ffd9a8").multiplyScalar(Ke);let $t=1-(wt==="clear"?0:et*.35);return V.color.set("#ffb27a").lerp(oa.set("#fff8ee"),Xa(.02,.45,De)),V.intensity=2.6*Ke*$t,V.position.set(Y.x+Rt.x*50,Y.y+Math.max(12,Rt.y*60),Y.z+Rt.z*50),V.target.position.copy(Y),Z.intensity=.9*Ei,Z.position.set(Y.x+20,Y.y+40,Y.z-10),Z.target.position.copy(Y),Q.intensity=(.55+.6*Ke)*$t,Q.color.copy(sa).lerp(oa.set("#ffffff"),.35),Q.groundColor.set("#8a7458").lerp(oa.set("#1a1f33"),Ei),L.toneMappingExposure=br(1.05,1.28,Ei),Ge.strength=.22+Ei*.45,Ne.glow.forEach(It=>{It.m.emissiveIntensity=br(It.day,It.night,Xa(.25,.75,Ei))}),Ne.grassU.light.value.setRGB(br(.13,1,Ke)*$t,br(.17,1,Ke)*$t,br(.3,1,Ke)*$t),Ne.waterMat.uniforms.night.value=Ei,Ne.waterMat.uniforms.sky.value.copy(sa),Tt.night.value=Ei,Ne.grassU.sunCol.value.copy(V.color).multiplyScalar(V.intensity/2.6),ve.opacity=Xa(.5,.9,Ei)*(wt==="clear"?1:1-et),qn=[...pu].sort((It,ft)=>Math.abs(($-It.tod+1.5)%1-.5)-Math.abs(($-ft.tod+1.5)%1-.5))[0],$}let gu={tree:"#6f9a3c",hay:"#d9b45c",wood:"#c89a62",stone:"#cdbb9c",metal:"#c9ccd4"};function bm(Y,$,ge){Ae=Math.max(Ae,Math.min(.5,$*(Y==="hay"?.012:Y==="tree"?.03:.045)));let De=le.body.translation(),Ke=le.forward(),St=aa(((ge.x-De.x)*-Ke[2]+(ge.z-De.z)*Ke[0])*.3,-1,1);oe.bump($,Y,St);let et=Math.min(10,Math.ceil($*.7));for(let Nt=0;Nt<et;Nt++)P(new C(br(De.x,ge.x,.6),De.y+.4,br(De.z,ge.z,.6)),new C((Math.random()-.5)*6,2+Math.random()*3,(Math.random()-.5)*6),.35+Math.random()*.3,oa.set(gu[Y]||gu.stone),10,!0)}let fi=new C,vu=new C,_u=new ii,xu=new ii,cl=()=>{let Y=e.clientWidth,$=e.clientHeight;L.setSize(Y,$,!1),Ue.setSize(Y,$),F.aspect=Y/$,F.updateProjectionMatrix(),H==null||H.resize($,L.getPixelRatio()),ie.uniforms.aspect.value=Y/$};cl(),addEventListener("resize",cl);let yu=performance.now(),hl=0,ul=0,dl=0,pl=0,zs=0,fl=0,ml=new C,Sm=performance.now();s(".drive__load").classList.add("is-done"),setTimeout(()=>{var Y;return(Y=s(".drive__load"))==null?void 0:Y.remove()},700),e.classList.add("is-intro"),requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.add("is-in")));let Tm=new q.Ball(.35),Em={x:0,y:0,z:0,w:1},wm=Y=>Le.kinds.get(Y.handle)!=="tree";function Mu(Y){if(!w)return;Tr=requestAnimationFrame(Mu);let $=Math.min(.08,(Y-yu)/1e3);yu=Y;let ge=(Y-Sm)/1e3;if(y.open)return;if(Hi){Hi.t=Math.min(1,Hi.t+$/2.4);let Me=Hi.t*Hi.t*(3-2*Hi.t);pi=br(Hi.from,Hi.to,Me),Hi.t>=1&&(Hi=null)}else n.has("tod")||(pi+=$/420);let De=le.body.translation(),Ke=or(De.x,De.z),St={wet:wt==="rain"?jt:0,snow:(wt==="snow"?jt*.6:0)+(ce(De.x,De.z)>5.5?.5:0)},et=yi?{gas:0,brake:0,left:0,right:0,hand:1,boost:0,jump:0}:ht,Nt=Ns(De.x,De.z);if(Nt>.95){let Me=(Nt-.95)*60*$,tt=Math.hypot(De.x,De.z)||1;le.body.applyImpulse({x:-De.x/tt*Me,y:0,z:-De.z/tt*Me},!0)}let Rt=Le.step($,et,St,bm);ht.jump=0;let $t=le.body.translation();if($t.y<-.45-4||Math.abs($t.x)>240/2+4||Math.abs($t.z)>160/2+4){let Me=ka($t.x,$t.z);At(Wt[Me.key].x,Wt[Me.key].z+10),Kt=!0}le.rescued&&(le.rescued=!1,Kt=!0);let It=le.pose(Rt),ft=It.p;Re.position.set(ft.x,ft.y,ft.z),_u.set(It.q0.x,It.q0.y,It.q0.z,It.q0.w),xu.set(It.q1.x,It.q1.y,It.q1.z,It.q1.w),Re.quaternion.copy(_u).slerp(xu,It.a);let mi=le.body.linvel(),gi=Math.hypot(mi.x,mi.z),Mi=le.forward(),Hs=le.speed();fi.set(mi.x-ml.x,0,mi.z-ml.z).divideScalar(Math.max($,.001)),ml.set(mi.x,mi.y,mi.z);let Am=fi.x*Mi[0]+fi.z*Mi[2],Rm=fi.x*Mi[2]-fi.z*Mi[0];dl=Sr(dl,aa(-Am*.006,-.06,.06),6,$),pl=Sr(pl,aa(Rm*.008,-.07,.07),6,$),Ce.rotation.set(pl,0,dl),at.forEach((Me,tt)=>{Me.pivot.position.y=Me.y-It.travel[tt],Me.pivot.rotation.y=It.steer[tt],Me.spin.rotation.z=-It.spin[tt]});let Su=ht.brake&&Hs>.6||ht.gas&&Hs<-.6||ht.hand,gl=Er!==null?Er:Ei>.45||wt!=="clear"&&jt>.5;Qe("head",gl?2.2:.3),B.forEach(Me=>{Me.intensity=gl?12:0}),Qe("tail",Su?5:gl?1.4:.15),Qe("reverse",ht.brake&&Hs<-.3?3.5:0);let Tu=Math.sin(ge*Math.PI*3.2)>0?4:0;Qe("indL",ht.left&&!ht.right?Tu:0),Qe("indR",ht.right&&!ht.left?Tu:0),hl+=$;let vl=le.wheels(),_l=ce(ft.x,ft.z)>5.5,Zn=le.waterDepth,xl=Math.abs(mi.x*Mi[2]-mi.z*Mi[0]),Kn=le.contacts>0&&gi>3&&(ht.hand||xl>3.5||Su&&gi>6);if(vl.forEach((Me,tt)=>{!Me.contact||!Me.point||Me.point.y<-.45+.05||(fi.set(Me.point.x,Me.point.y,Me.point.z),fi.distanceTo(k[tt])>.3&&(k[tt].copy(fi),tt>=2&&gi>.5&&X(I,Me.point,Mi),Kn&&(tt>=2||xl>5)&&X(E,Me.point,Mi)))}),hl>.08&&(hl=0,gi>.8))for(let Me of vl)Me.contact&&Me.point&&Ne.pressGrass(Me.point.x,Me.point.z,ge);let ks=or(ft.x,ft.z);if(gi>3&&le.contacts>0||Zn>.05&&gi>1.2||Kn){z.set(Zn>.05?"#f4fbff":_l?"#ffffff":(ks.meadow||0)+(ks.autumn||0)+(ks.plane||0)>.5?"#8a7a5a":(ks.danxia||0)>.4?"#c88b66":"#e9dcc4");for(let Me of[2,3]){let tt=vl[Me].point;!tt||Math.random()>Math.min(.9,gi/16+(Kn?.4:0))||P(fi.set(tt.x,Math.max(tt.y,-.45)+.1,tt.z),vu.set(-mi.x*.1+(Math.random()-.5),(Zn>.05?2.6:.6)+Math.random()*.9,-mi.z*.1+(Math.random()-.5)),(Zn>.05?1.1:Kn?1:.6)+Math.random()*.9,z)}}for(let Me=0;Me<xe;Me++){let tt=He[Me];if(tt.life>0&&(tt.life-=$*(tt.debris?1.6:1.1),tt.p.addScaledVector(tt.v,$),tt.debris||tt.v.multiplyScalar(.95),tt.v.y-=$*tt.g,tt.debris)){let Rr=ce(tt.p.x,tt.p.z);tt.p.y<Rr&&(tt.p.y=Rr,tt.v.multiplyScalar(.3))}let wi=Math.max(0,tt.life);it.setScalar(wi>0?tt.debris?tt.s*Math.min(1,wi*2):tt.s*(1.6-wi)*Math.min(1,wi*3):1e-4),Xe.compose(tt.p,tt.debris?qe.setFromEuler(S.set(ge*6+Me,Me,ge*4)):qe.identity(),it),Ee.setMatrixAt(Me,Xe)}Ee.instanceMatrix.needsUpdate=!0;let Cm=zt;if(yi||(zt=fe.update($,ge,ft,Ei)),zt!==Cm)if(zt){let Me=zt;l.innerHTML=`<p class="mono">${Ji(Me.region||"")}${Me.region?" \xB7 ":""}${Me.photos.length} frames</p><h3>${Ji(Me.en)}<span class="zh">${Ji(Me.zh)}</span></h3>
          <div class="drive__btns"><a class="pill pill--light" href="#" data-open><span class="dot"></span>View photos \xB7 Enter</a>${Me.href?`<a class="pill pill--ghost" href="${Ji(Me.href)}"><span class="dot"></span>${Ji(Me.hrefLabel||"Chapter")} \u2192</a>`:""}</div>`,l.classList.add("is-on")}else l.classList.remove("is-on");for(let Me of Oe)Math.hypot(ft.x-Me.x,ft.z-Me.z)<14&&Xt.add(Me.key);je=Sr(je,W==="map"?1:0,3,$),Be=Sr(Be,zt&&gi<3.5?1:0,1.6,$);let Eu=Math.atan2(Mi[0],Mi[2]);Mi[0]*Mi[0]+Mi[2]*Mi[2]>.2&&(ne=Kt?Eu:ub(ne,Eu,Hs<-1?1.2:4.6,$)),!we&&(ht.gas||ht.brake)&&Math.abs(ee)>.001&&(ee=Sr(ee,0,1.1,$));let wu=ne+ee,yl=Se+(F.aspect<1?2:0),Au=Math.cos(J),Im=Math.sin(J),Ru=Xa(2,11,gi)*2.2;if(bt.set(ft.x+Math.sin(ne)*Ru,ft.y+.85,ft.z+Math.cos(ne)*Ru),ze.set(ft.x-Math.sin(wu)*yl*Au,ft.y+.9+yl*Im,ft.z-Math.cos(wu)*yl*Au),je>.001){let Me=1+Math.min(.35,gi*.016);fi.set(ft.x+9*Me,ft.y+14*Me,ft.z+15*Me),ze.lerp(fi,je),bt.lerp(vu.set(ft.x+mi.x*.35,ft.y*.5,ft.z+mi.z*.35),je)}zt&&Be>.001&&(ze.lerp(zt.cam,Be),bt.lerp(zt.focus,Be));let Cu=ce(ze.x,ze.z);ze.y<Cu+1.3&&(ze.y=Cu+1.3),fi.subVectors(ze,bt);let Ml=fi.length();if(Ml>.5&&je<.5){fi.divideScalar(Ml);let Me=Le.world.castShape(bt,Em,fi,Tm,0,Ml,!1,q.QueryFilterFlags.EXCLUDE_DYNAMIC|q.QueryFilterFlags.EXCLUDE_SENSORS,void 0,void 0,le.body,wm);Me&&ze.copy(bt).addScaledVector(fi,Math.max(1.2,Me.time_of_impact-.15))}Kt&&(pt.copy(ze),xt.copy(bt),Kt=!1),pt.lerp(ze,1-Math.exp(-(we?14:7)*$)),xt.lerp(bt,1-Math.exp(-9*$)),Ae=Sr(Ae,0,7,$),F.position.copy(pt),!a&&Ae>.002&&(F.position.x+=Math.sin(ge*63)*Ae*.5,F.position.y+=Math.cos(ge*82)*Ae*.35),F.lookAt(xt),fl=Sr(fl,ht.boost&&ht.gas&&gi>8?7:0,3,$);let Iu=(F.aspect<1?62:50)*(1-je)+(F.aspect<1?50:36)*je+fl*(1-je);Math.abs(F.fov-Iu)>.01&&(F.fov=Iu,F.updateProjectionMatrix()),F.updateMatrixWorld(),ye.position.copy(F.position),Ne.occlude(F.position,xt,$);{let Me=1,tt=1,wi=0,Rr=0;for(let Dm of ut){fi.copy(Dm).applyMatrix4(Re.matrixWorld).project(F);let Lu=fi.x*.5+.5,Du=fi.y*.5+.5;Me=Math.min(Me,Lu),tt=Math.min(tt,Du),wi=Math.max(wi,Lu),Rr=Math.max(Rr,Du)}ie.uniforms.rect.value.set(Me-.02,tt-.02,wi+.02,Rr+.02);let ja=(Xa(9,17,gi)*.25+Xa(11,22,gi)*(ht.boost?.8:.5))*(1-je)*(1-Be)*(we?0:1)*(1-aa(Ae*2,0,.8));zs=Sr(zs,ja,ja>zs?5:10,$),ie.uniforms.power.value=zs}let Ar=ka(ft.x,ft.z);if(Ar.d<24&&Ar.key!==jn){jn=Ar.key,Bs=ge;let Me=Oe.find(wi=>wi.key===Ar.key),tt=Wt[Ar.key];Me&&(c.innerHTML=`<span class="mono">${tt.lat!=="\u2014"?`${tt.lat} \xB7 ${tt.lon}`:"On the road"}</span><strong>${Ji(Me.en)}</strong><span class="zh">${Ji(Me.zh)}</span>`,c.classList.add("is-on"))}Ar.d>34&&(jn=null),c.classList.contains("is-on")&&ge-Bs>3.4&&c.classList.remove("is-on");let Pu=Vr==="auto"?_l?"snow":Ar.d<26&&db[Ar.key]||"clear":Vr;Pu===wt?jt=Math.min(1,jt+$*.5):(jt=Math.max(0,jt-$*.7),jt===0&&(wt=Pu));let Pm=.5+.5*Math.sin(ge*.7)*Math.sin(ge*.31),bl=wt==="sand"?4+Pm*6:wt==="rain"?2:wt==="snow"?1.2:.6;A.set(bl*1.4*jt+.3,bl*.5*jt),Tt.windS.value=.6+(wt==="clear"?0:jt*bl*.3),Tt.snow.value=Sr(Tt.snow.value,wt==="snow"?jt*.85:0,wt==="snow"?.18:.08,$),Tt.wet.value=Sr(Tt.wet.value,wt==="rain"?jt:0,wt==="rain"?.35:.06,$),Tt.sand.value=Sr(Tt.sand.value,wt==="sand"?jt:0,.6,$);let Lm=Mm(ft);H.update($,ge,wt,jt,F.position,ft,A,Ei,G.fog.color);{let Me=sm(wt,jt,Ei);se.uniforms.tint.value.set(Me[0],Me[1],Me[2]),se.uniforms.sat.value=Me[3],se.uniforms.contrast.value=Me[4],se.uniforms.lift.value=Me[5],se.uniforms.vig.value=Me[6],se.uniforms.t.value=ge%10}if(Ne.update($,ge,{carPos:new C(ft.x,ft.y-.5,ft.z),vel:new C(mi.x,mi.y,mi.z),speed:gi,focus:ft,camPos:F.position,onShake:Me=>{let tt=oa.set(Me.type==="ginkgo"?"#efbd2c":Me.type==="blossom"?"#f2b6c6":Me.type==="palm"?"#6f9a3c":Me.type.startsWith("fir")?"#3b6b47":"#86a24a");for(let wi=0;wi<7;wi++)P(new C(Me.x+(Math.random()-.5)*2,Me.y+2.2+Math.random()*2*Me.s,Me.z+(Math.random()-.5)*2),new C((Math.random()-.5)*1.5,.3,(Math.random()-.5)*1.5),.45,tt,2.5);oe.bump(Math.max(2,gi*.6),"tree",0)}}),ve.opacity>.01&&(j.forEach(([Me,tt,wi,Rr],ja)=>{re[ja*3]=Me+Math.sin(ge*.6+Rr)*1.2,re[ja*3+1]=tt+Math.sin(ge*1.1+Rr*2)*.4,re[ja*3+2]=wi+Math.cos(ge*.5+Rr)*1.2}),he.attributes.position.needsUpdate=!0),oe.drive({speed:gi,throttle:ht.gas-ht.brake,boost:ht.boost,dt:$,grounded:le.contacts>0,wading:aa(Zn,0,1),surface:_l?"snow":(Ke.desert||0)+(Ke.danxia||0)>.5?"sand":Ne.grassU&&(Ke.meadow||0)+(Ke.autumn||0)+(Ke.plane||0)+(Ke.field||0)>.55&&pe.road(ft.x,ft.z)>2.4?"grass":"gravel",skid:Kn?aa(xl/7+(ht.hand?.5:0),0,1):0,wind:wt==="sand"?jt:jt*.3,rain:wt==="rain"?jt:0}),ul-=$,ul<=0){ul=.08,x.value=String(Math.round(gi*3.6)).padStart(2,"0");let Me=Oe.find(wi=>wi.key===Ar.key);g.textContent=Me?Ar.d<26?`${Me.zh} \xB7 ${Me.en}`:`\u53BB\u5F80 ${Me.zh} \xB7 toward ${Me.en}`:"\u2014";let tt=Math.floor(Lm*24*60);m.textContent=`${qn.zh} ${String(Math.floor(tt/60)).padStart(2,"0")}:${String(tt%60).padStart(2,"0")}`,f.textContent=`${wt==="clear"||jt<.2?hm.clear:hm[wt]}${Vr==="auto"?"":" \xB7T"}`,e.querySelector('[data-act="view"]').firstChild.textContent=W==="chase"?"\u4FEF\u89C6 ":"\u8DDF\u8F66 "}Ci(ft,ne+Math.PI),Ue.render()}return Tr=requestAnimationFrame(Mu),N=()=>{var Y;w&&(w=!1,cancelAnimationFrame(Tr),removeEventListener("keydown",Yn),removeEventListener("keyup",fu),removeEventListener("resize",cl),removeEventListener("blur",mu),oe.pause(!0),(Y=Ue.dispose)==null||Y.call(Ue),L.dispose(),e.innerHTML="",i==null||i())},window.__drive={park:Y=>{let $=Oe[Y];le.place($.x,$.gy+1.2,$.z+1.5,Zt),Kt=!0},stops:Oe,get car(){return le.body.translation()},carApi:le,jumpTo:Ve,nextPhase:ll,open:Y=>Wi(Oe[Y]),keys:ht,setTod:Y=>{pi=Y},setWx:Y=>{Vr=Y,wt=Y==="auto"?wt:Y,jt=1,Tt.snow.value=Y==="snow"?.85:0,Tt.wet.value=Y==="rain"?1:0,Tt.sand.value=Y==="sand"?1:0},setView:Y=>{W=Y},setOrbit:(Y,$,ge)=>{ee=Y,$!=null&&(J=$),ge!=null&&(Se=ge)}},{close:()=>N()}}window.X1NG_DRIVE={mount(e,t){let i=fb(e,t);return i.catch(r=>{console.error(r),e.innerHTML='<p class="drive__load mono">Drive mode could not load \xB7 \u52A0\u8F7D\u5931\u8D25</p>',setTimeout(()=>{var a;return(a=t==null?void 0:t.onClose)==null?void 0:a.call(t)},2e3)}),i}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
