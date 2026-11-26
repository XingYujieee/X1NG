(()=>{var mm=0,Mu=1,gm=2;var ln=1,vm=2,$n=3,Wr=0,Ci=1,Ri=2,ur=0,ts=1,vn=2,bu=3,Su=4,_m=5;var tn=100,xm=101,ym=102,Mm=103,bm=104,Sm=200,Tm=201,Em=202,wm=203,Xd=204,jd=205,Am=206,Rm=207,Cm=208,Im=209,Pm=210,Lm=211,Nm=212,Dm=213,Um=214,$l=0,Ql=1,eh=2,ss=3,th=4,ih=5,os=6,rh=7,qd=0,Om=1,Fm=2,Ar=0,Ao=1,Ro=2,Co=3,wn=4,Io=5,Po=6,Lo=7,Tu="attached",Bm="detached",Yd=300,Sa=301,_n=302,fl=303,ml=304,No=306,Ta=1e3,hr=1001,ls=1002,ri=1003,Hh=1004;var sn=1005;var Yt=1006,is=1007;var wr=1008;var Wi=1009,Kd=1010,Zd=1011,hs=1012,kh=1013,Rr=1014,Zi=1015,fi=1016,Gh=1017,Vh=1018,cs=1020,Jd=35902,$d=35899,Qd=1021,ep=1022,Ji=1023,Xr=1026,xa=1027,Wh=1028,Xh=1029,Ea=1030,jh=1031;var qh=1033,uo=33776,po=33777,fo=33778,mo=33779,ah=35840,nh=35841,sh=35842,oh=35843,lh=36196,hh=37492,ch=37496,uh=37488,dh=37489,yo=37490,ph=37491,fh=37808,mh=37809,gh=37810,vh=37811,_h=37812,xh=37813,yh=37814,Mh=37815,bh=37816,Sh=37817,Th=37818,Eh=37819,wh=37820,Ah=37821,Rh=36492,Ch=36494,Ih=36495,Ph=36283,Lh=36284,Mo=36285,Nh=36286;var xn=2300,yn=2301,gl=2302,Eu=2303,wu=2400,Au=2401,Ru=2402,zm=2500;var tp=0,Do=1,vs=2,Hm=3200;var Dh=0,km=1,sa="",Gt="srgb",zi="srgb-linear",bo="linear",Lt="srgb";var Ma=7680,ip=7681;var rp=517;var Yh=519,Gm=512,Vm=513,Wm=514,Kh=515,Xm=516,jm=517,Zh=518,qm=519,ap=35044,An=35048;var Cu="300 es",cr=2e3,us=2001;function Ym(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Km(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ds(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Zm(){let e=ds("canvas");return e.style.display="block",e}var Iu={},Mn=null;function So(...e){let t="THREE."+e.shift();Mn?Mn("log",t,...e):console.log(t,...e)}function np(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Je(...e){e=np(e);let t="THREE."+e.shift();if(Mn)Mn("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function st(...e){e=np(e);let t="THREE."+e.shift();if(Mn)Mn("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function hn(...e){let t=e.join(" ");t in Iu||(Iu[t]=!0,Je(...e))}function Jm(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var $m={[$l]:Ql,[eh]:os,[th]:rh,[ss]:ih,[Ql]:$l,[os]:eh,[rh]:th,[ih]:ss},Aa=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},wi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pu=1234567,cn=Math.PI/180,bn=180/Math.PI;function $i(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wi[e&255]+wi[e>>8&255]+wi[e>>16&255]+wi[e>>24&255]+"-"+wi[t&255]+wi[t>>8&255]+"-"+wi[t>>16&15|64]+wi[t>>24&255]+"-"+wi[i&63|128]+wi[i>>8&255]+"-"+wi[i>>16&255]+wi[i>>24&255]+wi[r&255]+wi[r>>8&255]+wi[r>>16&255]+wi[r>>24&255]).toLowerCase()}function mt(e,t,i){return Math.max(t,Math.min(i,e))}function Jh(e,t){return(e%t+t)%t}function Qm(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function eg(e,t,i){return e!==t?(i-e)/(t-e):0}function rs(e,t,i){return(1-i)*e+i*t}function tg(e,t,i,r){return rs(e,t,1-Math.exp(-i*r))}function ig(e,t=1){return t-Math.abs(Jh(e,t*2)-t)}function rg(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function ag(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function ng(e,t){return e+Math.floor(Math.random()*(t-e+1))}function sg(e,t){return e+Math.random()*(t-e)}function og(e){return e*(.5-Math.random())}function lg(e){e!==void 0&&(Pu=e);let t=Pu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hg(e){return e*cn}function cg(e){return e*bn}function ug(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function dg(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function pg(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function fg(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),h=n((t+r)/2),c=s((t+r)/2),d=n((t-r)/2),u=s((t-r)/2),p=n((r-t)/2),g=s((r-t)/2);switch(a){case"XYX":e.set(o*c,l*d,l*u,o*h);break;case"YZY":e.set(l*u,o*c,l*d,o*h);break;case"ZXZ":e.set(l*d,l*u,o*c,o*h);break;case"XZX":e.set(o*c,l*g,l*p,o*h);break;case"YXY":e.set(l*p,o*c,l*g,o*h);break;case"ZYZ":e.set(l*g,l*p,o*c,o*h);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function lr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ut(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var sp={DEG2RAD:cn,RAD2DEG:bn,generateUUID:$i,clamp:mt,euclideanModulo:Jh,mapLinear:Qm,inverseLerp:eg,lerp:rs,damp:tg,pingpong:ig,smoothstep:rg,smootherstep:ag,randInt:ng,randFloat:sg,randFloatSpread:og,seededRandom:lg,degToRad:hg,radToDeg:cg,isPowerOfTwo:ug,ceilPowerOfTwo:dg,floorPowerOfTwo:pg,setQuaternionFromProperEuler:fg,normalize:Ut,denormalize:lr},dn,pe=(dn=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=mt(this.x,t.x,i.x),this.y=mt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=mt(this.x,t,i),this.y=mt(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dn.prototype.isVector2=!0,dn),Jt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],d=a[n+0],u=a[n+1],p=a[n+2],g=a[n+3];if(c!==g||o!==d||l!==u||h!==p){let x=o*d+l*u+h*p+c*g;x<0&&(d=-d,u=-u,p=-p,g=-g,x=-x);let m=1-s;if(x<.9995){let f=Math.acos(x),y=Math.sin(f);m=Math.sin(m*f)/y,s=Math.sin(s*f)/y,o=o*m+d*s,l=l*m+u*s,h=h*m+p*s,c=c*m+g*s}else{o=o*m+d*s,l=l*m+u*s,h=h*m+p*s,c=c*m+g*s;let f=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=f,l*=f,h*=f,c*=f}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[n],d=a[n+1],u=a[n+2],p=a[n+3];return e[t]=s*p+h*c+o*u-l*d,e[t+1]=o*p+h*d+l*c-s*u,e[t+2]=l*p+h*u+s*d-o*c,e[t+3]=h*p-s*c-o*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),c=s(a/2),d=o(i/2),u=o(r/2),p=o(a/2);switch(n){case"XYZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"YXZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"ZXY":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"ZYX":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"YZX":this._x=d*h*c+l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c-d*u*p;break;case"XZY":this._x=d*h*c-l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c+d*u*p;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10],d=i+s+c;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-o)*u,this._y=(a-l)*u,this._z=(n-r)*u}else if(i>s&&i>c){let u=2*Math.sqrt(1+i-s-c);this._w=(h-o)/u,this._x=.25*u,this._y=(r+n)/u,this._z=(a+l)/u}else if(s>c){let u=2*Math.sqrt(1+s-i-c);this._w=(a-l)/u,this._x=(r+n)/u,this._y=.25*u,this._z=(o+h)/u}else{let u=2*Math.sqrt(1+c-i-s);this._w=(n-r)/u,this._x=(a+l)/u,this._y=(o+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),h=Math.sin(l);o=Math.sin(o*l)/h,t=Math.sin(t*l)/h,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},pn,C=(pn=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Lu.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Lu.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*r),c=2*(o*i-n*a),d=2*(n*r-s*i);return this.x=i+l*h+s*d-o*c,this.y=r+l*c+o*h-n*d,this.z=a+l*d+n*c-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=mt(this.x,t.x,i.x),this.y=mt(this.y,t.y,i.y),this.z=mt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=mt(this.x,t,i),this.y=mt(this.y,t,i),this.z=mt(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return vl.copy(this).projectOnVector(t),this.sub(vl)}reflect(t){return this.sub(vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pn.prototype.isVector3=!0,pn),vl=new C,Lu=new Jt,fn,ut=(fn=class{constructor(t,i,r,a,n,s,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h)}set(t,i,r,a,n,s,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=i,c[4]=n,c[5]=l,c[6]=r,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],c=r[4],d=r[7],u=r[2],p=r[5],g=r[8],x=a[0],m=a[3],f=a[6],y=a[1],M=a[4],v=a[7],T=a[2],w=a[5],A=a[8];return n[0]=s*x+o*y+l*T,n[3]=s*m+o*M+l*w,n[6]=s*f+o*v+l*A,n[1]=h*x+c*y+d*T,n[4]=h*m+c*M+d*w,n[7]=h*f+c*v+d*A,n[2]=u*x+p*y+g*T,n[5]=u*m+p*M+g*w,n[8]=u*f+p*v+g*A,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return i*s*c-i*o*h-r*n*c+r*o*l+a*n*h-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=c*s-o*h,u=o*l-c*n,p=h*n-s*l,g=i*d+r*u+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(a*h-c*r)*x,t[2]=(o*r-a*s)*x,t[3]=u*x,t[4]=(c*i-a*l)*x,t[5]=(a*n-o*i)*x,t[6]=p*x,t[7]=(r*l-h*i)*x,t[8]=(s*i-r*n)*x,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(t,i){return hn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_l.makeScale(t,i)),this}rotate(t){return hn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_l.makeRotation(-t)),this}translate(t,i){return hn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_l.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},fn.prototype.isMatrix3=!0,fn),_l=new ut,Nu=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Du=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mg(){let e={enabled:!0,workingColorSpace:zi,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===Lt&&(a.r=Vr(a.r),a.g=Vr(a.g),a.b=Vr(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Lt&&(a.r=un(a.r),a.g=un(a.g),a.b=un(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===sa?bo:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return hn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return hn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[zi]:{primaries:t,whitePoint:r,transfer:bo,toXYZ:Nu,fromXYZ:Du,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:t,whitePoint:r,transfer:Lt,toXYZ:Nu,fromXYZ:Du,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),e}var ft=mg();function Vr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function un(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Ha,gg=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ha===void 0&&(Ha=ds("canvas")),Ha.width=e.width,Ha.height=e.height;let r=Ha.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ha}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ds("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Vr(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vr(t[i]/255)*255):t[i]=Vr(t[i]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vg=0,$h=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(xl(r[n].image)):a.push(xl(r[n]))}else a=xl(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function xl(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?gg.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var _g=0,yl=new C,Ii=class go extends Aa{constructor(t=go.DEFAULT_IMAGE,i=go.DEFAULT_MAPPING,r=hr,a=hr,n=Yt,s=wr,o=Ji,l=Wi,h=go.DEFAULT_ANISOTROPY,c=sa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=$i(),this.name="",this.source=new $h(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yl).x}get height(){return this.source.getSize(yl).y}get depth(){return this.source.getSize(yl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Je(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Je(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ta:t.x=t.x-Math.floor(t.x);break;case hr:t.x=t.x<0?0:1;break;case ls:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ta:t.y=t.y-Math.floor(t.y);break;case hr:t.y=t.y<0?0:1;break;case ls:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ii.DEFAULT_IMAGE=null;Ii.DEFAULT_MAPPING=Yd;Ii.DEFAULT_ANISOTROPY=1;var mn,Nt=(mn=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],c=s[1],d=s[5],u=s[9],p=s[2],g=s[6],x=s[10];if(Math.abs(l-c)<.01&&Math.abs(h-p)<.01&&Math.abs(u-g)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(o+d+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(o+1)/2,y=(d+1)/2,M=(x+1)/2,v=(l+c)/4,T=(h+p)/4,w=(u+g)/4;return f>y&&f>M?f<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(f),a=v/r,n=T/r):y>M?y<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(y),r=v/a,n=w/a):M<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(M),r=T/n,a=w/n),this.set(r,a,n,i),this}let m=Math.sqrt((g-u)*(g-u)+(h-p)*(h-p)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(g-u)/m,this.y=(h-p)/m,this.z=(c-l)/m,this.w=Math.acos((o+d+x-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=mt(this.x,t.x,i.x),this.y=mt(this.y,t.y,i.y),this.z=mt(this.z,t.z,i.z),this.w=mt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=mt(this.x,t,i),this.y=mt(this.y,t,i),this.z=mt(this.z,t,i),this.w=mt(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mn.prototype.isVector4=!0,mn),xg=class extends Aa{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new Ii(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new $h(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends xg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},op=class extends Ii{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ri,this.minFilter=ri,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yg=class extends Ii{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ri,this.minFilter=ri,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ba,Qe=(ba=class{constructor(t,i,r,a,n,s,o,l,h,c,d,u,p,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h,c,d,u,p,g,x,m)}set(t,i,r,a,n,s,o,l,h,c,d,u,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=i,f[8]=r,f[12]=a,f[1]=n,f[5]=s,f[9]=o,f[13]=l,f[2]=h,f[6]=c,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ba().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/ka.setFromMatrixColumn(t,0).length(),n=1/ka.setFromMatrixColumn(t,1).length(),s=1/ka.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(n),d=Math.sin(n);if(t.order==="XYZ"){let u=s*c,p=s*d,g=o*c,x=o*d;i[0]=l*c,i[4]=-l*d,i[8]=h,i[1]=p+g*h,i[5]=u-x*h,i[9]=-o*l,i[2]=x-u*h,i[6]=g+p*h,i[10]=s*l}else if(t.order==="YXZ"){let u=l*c,p=l*d,g=h*c,x=h*d;i[0]=u+x*o,i[4]=g*o-p,i[8]=s*h,i[1]=s*d,i[5]=s*c,i[9]=-o,i[2]=p*o-g,i[6]=x+u*o,i[10]=s*l}else if(t.order==="ZXY"){let u=l*c,p=l*d,g=h*c,x=h*d;i[0]=u-x*o,i[4]=-s*d,i[8]=g+p*o,i[1]=p+g*o,i[5]=s*c,i[9]=x-u*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let u=s*c,p=s*d,g=o*c,x=o*d;i[0]=l*c,i[4]=g*h-p,i[8]=u*h+x,i[1]=l*d,i[5]=x*h+u,i[9]=p*h-g,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let u=s*l,p=s*h,g=o*l,x=o*h;i[0]=l*c,i[4]=x-u*d,i[8]=g*d+p,i[1]=d,i[5]=s*c,i[9]=-o*c,i[2]=-h*c,i[6]=p*d+g,i[10]=u-x*d}else if(t.order==="XZY"){let u=s*l,p=s*h,g=o*l,x=o*h;i[0]=l*c,i[4]=-d,i[8]=h*c,i[1]=u*d+x,i[5]=s*c,i[9]=p*d-g,i[2]=g*d-p,i[6]=o*c,i[10]=x*d+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mg,t,bg)}lookAt(t,i,r){let a=this.elements;return Gi.subVectors(t,i),Gi.lengthSq()===0&&(Gi.z=1),Gi.normalize(),Qr.crossVectors(r,Gi),Qr.lengthSq()===0&&(Math.abs(r.z)===1?Gi.x+=1e-4:Gi.z+=1e-4,Gi.normalize(),Qr.crossVectors(r,Gi)),Qr.normalize(),Ns.crossVectors(Gi,Qr),a[0]=Qr.x,a[4]=Ns.x,a[8]=Gi.x,a[1]=Qr.y,a[5]=Ns.y,a[9]=Gi.y,a[2]=Qr.z,a[6]=Ns.z,a[10]=Gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],c=r[1],d=r[5],u=r[9],p=r[13],g=r[2],x=r[6],m=r[10],f=r[14],y=r[3],M=r[7],v=r[11],T=r[15],w=a[0],A=a[4],_=a[8],b=a[12],U=a[1],N=a[5],D=a[9],Q=a[13],F=a[2],P=a[6],G=a[10],z=a[14],re=a[3],X=a[7],j=a[11],te=a[15];return n[0]=s*w+o*U+l*F+h*re,n[4]=s*A+o*N+l*P+h*X,n[8]=s*_+o*D+l*G+h*j,n[12]=s*b+o*Q+l*z+h*te,n[1]=c*w+d*U+u*F+p*re,n[5]=c*A+d*N+u*P+p*X,n[9]=c*_+d*D+u*G+p*j,n[13]=c*b+d*Q+u*z+p*te,n[2]=g*w+x*U+m*F+f*re,n[6]=g*A+x*N+m*P+f*X,n[10]=g*_+x*D+m*G+f*j,n[14]=g*b+x*Q+m*z+f*te,n[3]=y*w+M*U+v*F+T*re,n[7]=y*A+M*N+v*P+T*X,n[11]=y*_+M*D+v*G+T*j,n[15]=y*b+M*Q+v*z+T*te,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15],y=l*p-h*u,M=o*p-h*d,v=o*u-l*d,T=s*p-h*c,w=s*u-l*c,A=s*d-o*c;return i*(x*y-m*M+f*v)-r*(g*y-m*T+f*w)+a*(g*M-x*T+f*A)-n*(g*v-x*w+m*A)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10];return i*(s*c-o*h)-r*(n*c-o*l)+a*(n*h-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],y=i*o-r*s,M=i*l-a*s,v=i*h-n*s,T=r*l-a*o,w=r*h-n*o,A=a*h-n*l,_=c*x-d*g,b=c*m-u*g,U=c*f-p*g,N=d*m-u*x,D=d*f-p*x,Q=u*f-p*m,F=y*Q-M*D+v*N+T*U-w*b+A*_;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/F;return t[0]=(o*Q-l*D+h*N)*P,t[1]=(a*D-r*Q-n*N)*P,t[2]=(x*A-m*w+f*T)*P,t[3]=(u*w-d*A-p*T)*P,t[4]=(l*U-s*Q-h*b)*P,t[5]=(i*Q-a*U+n*b)*P,t[6]=(m*v-g*A-f*M)*P,t[7]=(c*A-u*v+p*M)*P,t[8]=(s*D-o*U+h*_)*P,t[9]=(r*U-i*D-n*_)*P,t[10]=(g*w-x*v+f*y)*P,t[11]=(d*v-c*w-p*y)*P,t[12]=(o*b-s*N-l*_)*P,t[13]=(i*N-r*b+a*_)*P,t[14]=(x*M-g*T-m*y)*P,t[15]=(c*T-d*M+u*y)*P,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,h=n*s,c=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+r,c*l-a*s,0,h*l-a*o,c*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,c=s+s,d=o+o,u=n*h,p=n*c,g=n*d,x=s*c,m=s*d,f=o*d,y=l*h,M=l*c,v=l*d,T=r.x,w=r.y,A=r.z;return a[0]=(1-(x+f))*T,a[1]=(p+v)*T,a[2]=(g-M)*T,a[3]=0,a[4]=(p-v)*w,a[5]=(1-(u+f))*w,a[6]=(m+y)*w,a[7]=0,a[8]=(g+M)*A,a[9]=(m-y)*A,a[10]=(1-(u+x))*A,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=ka.set(a[0],a[1],a[2]).length(),o=ka.set(a[4],a[5],a[6]).length(),l=ka.set(a[8],a[9],a[10]).length();n<0&&(s=-s),nr.copy(this);let h=1/s,c=1/o,d=1/l;return nr.elements[0]*=h,nr.elements[1]*=h,nr.elements[2]*=h,nr.elements[4]*=c,nr.elements[5]*=c,nr.elements[6]*=c,nr.elements[8]*=d,nr.elements[9]*=d,nr.elements[10]*=d,i.setFromRotationMatrix(nr),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=cr,l=!1){let h=this.elements,c=2*n/(i-t),d=2*n/(r-a),u=(i+t)/(i-t),p=(r+a)/(r-a),g,x;if(l)g=n/(s-n),x=s*n/(s-n);else if(o===cr)g=-(s+n)/(s-n),x=-2*s*n/(s-n);else if(o===us)g=-s/(s-n),x=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=cr,l=!1){let h=this.elements,c=2/(i-t),d=2/(r-a),u=-(i+t)/(i-t),p=-(r+a)/(r-a),g,x;if(l)g=1/(s-n),x=s/(s-n);else if(o===cr)g=-2/(s-n),x=-(s+n)/(s-n);else if(o===us)g=-1/(s-n),x=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},ba.prototype.isMatrix4=!0,ba),ka=new C,nr=new Qe,Mg=new C(0,0,0),bg=new C(1,1,1),Qr=new C,Ns=new C,Gi=new C,Uu=new Qe,Ou=new Jt,dr=class lp{constructor(t=0,i=0,r=0,a=lp.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],c=a[9],d=a[2],u=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Uu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uu,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dr.DEFAULT_ORDER="XYZ";var hp=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Sg=0,Fu=new C,Ga=new Jt,Or=new Qe,Ds=new C,Gn=new C,Tg=new C,Eg=new Jt,Bu=new C(1,0,0),zu=new C(0,1,0),Hu=new C(0,0,1),ku={type:"added"},wg={type:"removed"},Va={type:"childadded",child:null},Ml={type:"childremoved",child:null},Zt=class vo extends Aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vo.DEFAULT_UP.clone();let t=new C,i=new dr,r=new Jt,a=new C(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Qe},normalMatrix:{value:new ut}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=vo.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vo.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ga.setFromAxisAngle(t,i),this.quaternion.multiply(Ga),this}rotateOnWorldAxis(t,i){return Ga.setFromAxisAngle(t,i),this.quaternion.premultiply(Ga),this}rotateX(t){return this.rotateOnAxis(Bu,t)}rotateY(t){return this.rotateOnAxis(zu,t)}rotateZ(t){return this.rotateOnAxis(Hu,t)}translateOnAxis(t,i){return Fu.copy(t).applyQuaternion(this.quaternion),this.position.add(Fu.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Bu,t)}translateY(t){return this.translateOnAxis(zu,t)}translateZ(t){return this.translateOnAxis(Hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Or.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ds.copy(t):Ds.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Gn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Or.lookAt(Gn,Ds,this.up):Or.lookAt(Ds,Gn,this.up),this.quaternion.setFromRotationMatrix(Or),a&&(Or.extractRotation(a.matrixWorld),Ga.setFromRotationMatrix(Or),this.quaternion.premultiply(Ga.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(st("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ku),Va.child=t,this.dispatchEvent(Va),Va.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(wg),Ml.child=t,this.dispatchEvent(Ml),Ml.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Or.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Or.multiply(t.parent.matrixWorld)),t.applyMatrix4(Or),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ku),Va.child=t,this.dispatchEvent(Va),Va.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gn,t,Tg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gn,Eg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];n(t.shapes,d)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),c=s(t.images),d=s(t.shapes),u=s(t.skeletons),p=s(t.animations),g=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),d.length>0&&(r.shapes=d),u.length>0&&(r.skeletons=u),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=a,r;function s(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Zt.DEFAULT_UP=new C(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=class extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ag={type:"move"},bl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let g of e.hand.values()){let x=t.getJointPose(g,i),m=this._getHandJoint(l,g);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],d=h.position.distanceTo(c.position),u=.02,p=.005;l.inputState.pinching&&d>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Ag)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ai;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ea={h:0,s:0,l:0},Us={h:0,s:0,l:0};function Sl(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Se=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ft.workingColorSpace){if(e=Jh(e,1),t=mt(t,0,1),i=mt(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=Sl(n,a,e+1/3),this.g=Sl(n,a,e),this.b=Sl(n,a,e-1/3)}return ft.colorSpaceToWorking(this,r),this}setStyle(e,t=Gt){function i(a){a!==void 0&&parseFloat(a)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let i=cp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}copyLinearToSRGB(e){return this.r=un(e.r),this.g=un(e.g),this.b=un(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return ft.workingToColorSpace(Ai.copy(this),e),Math.round(mt(Ai.r*255,0,255))*65536+Math.round(mt(Ai.g*255,0,255))*256+Math.round(mt(Ai.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Ai.copy(this),t);let i=Ai.r,r=Ai.g,a=Ai.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=h<=.5?c/(n+s):c/(2-n-s),n){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Ai.copy(this),t),e.r=Ai.r,e.g=Ai.g,e.b=Ai.b,e}getStyle(e=Gt){ft.workingToColorSpace(Ai.copy(this),e);let t=Ai.r,i=Ai.g,r=Ai.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ea),this.setHSL(ea.h+e,ea.s+t,ea.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ea),e.getHSL(Us);let i=rs(ea.h,Us.h,t),r=rs(ea.s,Us.s,t),a=rs(ea.l,Us.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ai=new Se;Se.NAMES=cp;var up=class dp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(t),this.density=i}clone(){return new dp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var pp=class extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dr,this.environmentIntensity=1,this.environmentRotation=new dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},sr=new C,Fr=new C,Tl=new C,Br=new C,Wa=new C,Xa=new C,Gu=new C,El=new C,wl=new C,Al=new C,Rl=new Nt,Cl=new Nt,Il=new Nt,rn=class an{constructor(t=new C,i=new C,r=new C){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),sr.subVectors(t,i),a.cross(sr);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){sr.subVectors(a,i),Fr.subVectors(r,i),Tl.subVectors(t,i);let s=sr.dot(sr),o=sr.dot(Fr),l=sr.dot(Tl),h=Fr.dot(Fr),c=Fr.dot(Tl),d=s*h-o*o;if(d===0)return n.set(0,0,0),null;let u=1/d,p=(h*l-o*c)*u,g=(s*c-o*l)*u;return n.set(1-p-g,g,p)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Br)===null?!1:Br.x>=0&&Br.y>=0&&Br.x+Br.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Br)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Br.x),l.addScaledVector(s,Br.y),l.addScaledVector(o,Br.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return Rl.setScalar(0),Cl.setScalar(0),Il.setScalar(0),Rl.fromBufferAttribute(t,i),Cl.fromBufferAttribute(t,r),Il.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Rl,n.x),s.addScaledVector(Cl,n.y),s.addScaledVector(Il,n.z),s}static isFrontFacing(t,i,r,a){return sr.subVectors(r,i),Fr.subVectors(t,i),sr.cross(Fr).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sr.subVectors(this.c,this.b),Fr.subVectors(this.a,this.b),sr.cross(Fr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return an.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return an.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;Wa.subVectors(a,r),Xa.subVectors(n,r),El.subVectors(t,r);let l=Wa.dot(El),h=Xa.dot(El);if(l<=0&&h<=0)return i.copy(r);wl.subVectors(t,a);let c=Wa.dot(wl),d=Xa.dot(wl);if(c>=0&&d<=c)return i.copy(a);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return s=l/(l-c),i.copy(r).addScaledVector(Wa,s);Al.subVectors(t,n);let p=Wa.dot(Al),g=Xa.dot(Al);if(g>=0&&p<=g)return i.copy(n);let x=p*h-l*g;if(x<=0&&h>=0&&g<=0)return o=h/(h-g),i.copy(r).addScaledVector(Xa,o);let m=c*g-p*d;if(m<=0&&d-c>=0&&p-g>=0)return Gu.subVectors(n,a),o=(d-c)/(d-c+(p-g)),i.copy(a).addScaledVector(Gu,o);let f=1/(m+x+u);return s=x*f,o=u*f,i.copy(r).addScaledVector(Wa,s).addScaledVector(Xa,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qi=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(or.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(or.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=or.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,or):or.fromBufferAttribute(a,n),or.applyMatrix4(e.matrixWorld),this.expandByPoint(or);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Os.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Os.copy(i.boundingBox)),Os.applyMatrix4(e.matrixWorld),this.union(Os)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,or),or.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vn),Fs.subVectors(this.max,Vn),ja.subVectors(e.a,Vn),qa.subVectors(e.b,Vn),Ya.subVectors(e.c,Vn),ta.subVectors(qa,ja),ia.subVectors(Ya,qa),fa.subVectors(ja,Ya);let t=[0,-ta.z,ta.y,0,-ia.z,ia.y,0,-fa.z,fa.y,ta.z,0,-ta.x,ia.z,0,-ia.x,fa.z,0,-fa.x,-ta.y,ta.x,0,-ia.y,ia.x,0,-fa.y,fa.x,0];return!Pl(t,ja,qa,Ya,Fs)||(t=[1,0,0,0,1,0,0,0,1],!Pl(t,ja,qa,Ya,Fs))?!1:(Bs.crossVectors(ta,ia),t=[Bs.x,Bs.y,Bs.z],Pl(t,ja,qa,Ya,Fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,or).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(or).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zr=[new C,new C,new C,new C,new C,new C,new C,new C],or=new C,Os=new Qi,ja=new C,qa=new C,Ya=new C,ta=new C,ia=new C,fa=new C,Vn=new C,Fs=new C,Bs=new C,ma=new C;function Pl(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){ma.fromArray(e,n);let o=a.x*Math.abs(ma.x)+a.y*Math.abs(ma.y)+a.z*Math.abs(ma.z),l=t.dot(ma),h=i.dot(ma),c=r.dot(ma);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var GM=Rg();function Rg(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),r=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(r[l]=0,r[l|256]=32768,a[l]=24,a[l|256]=24):h<-14?(r[l]=1024>>-h-14,r[l|256]=1024>>-h-14|32768,a[l]=-h-1,a[l|256]=-h-1):h<=15?(r[l]=h+15<<10,r[l|256]=h+15<<10|32768,a[l]=13,a[l|256]=13):h<128?(r[l]=31744,r[l|256]=64512,a[l]=24,a[l|256]=24):(r[l]=31744,r[l|256]=64512,a[l]=13,a[l|256]=13)}let n=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;(h&8388608)===0;)h<<=1,c-=8388608;h&=-8388609,c+=947912704,n[l]=h|c}for(let l=1024;l<2048;++l)n[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:r,shiftTable:a,mantissaTable:n,exponentTable:s,offsetTable:o}}var ii=new C,zs=new pe,Cg=0,Vt=class extends Aa{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ap,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.applyMatrix3(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.applyMatrix4(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.applyNormalMatrix(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.transformDirection(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=lr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array),a=Ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var fp=class extends Vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var mp=class extends Vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var tt=class extends Vt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ig=new Qi,Wn=new C,Ll=new C,er=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ig.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wn.subVectors(e,this.center);let t=Wn.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Wn,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wn.copy(e.center).add(Ll)),this.expandByPoint(Wn.copy(e.center).sub(Ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Pg=0,Ki=new Qe,Nl=new Zt,Ka=new C,Vi=new Qi,Xn=new Qi,pi=new C,bt=class gp extends Aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ym(t)?mp:fp)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new ut().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ki.makeRotationFromQuaternion(t),this.applyMatrix4(Ki),this}rotateX(t){return Ki.makeRotationX(t),this.applyMatrix4(Ki),this}rotateY(t){return Ki.makeRotationY(t),this.applyMatrix4(Ki),this}rotateZ(t){return Ki.makeRotationZ(t),this.applyMatrix4(Ki),this}translate(t,i,r){return Ki.makeTranslation(t,i,r),this.applyMatrix4(Ki),this}scale(t,i,r){return Ki.makeScale(t,i,r),this.applyMatrix4(Ki),this}lookAt(t){return Nl.lookAt(t),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ka).negate(),this.translate(Ka.x,Ka.y,Ka.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new tt(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Vi.setFromBufferAttribute(n),this.morphTargetsRelative?(pi.addVectors(this.boundingBox.min,Vi.min),this.boundingBox.expandByPoint(pi),pi.addVectors(this.boundingBox.max,Vi.max),this.boundingBox.expandByPoint(pi)):(this.boundingBox.expandByPoint(Vi.min),this.boundingBox.expandByPoint(Vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let r=this.boundingSphere.center;if(Vi.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];Xn.setFromBufferAttribute(o),this.morphTargetsRelative?(pi.addVectors(Vi.min,Xn.min),Vi.expandByPoint(pi),pi.addVectors(Vi.max,Xn.max),Vi.expandByPoint(pi)):(Vi.expandByPoint(Xn.min),Vi.expandByPoint(Xn.max))}Vi.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)pi.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(pi));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)pi.fromBufferAttribute(o,h),l&&(Ka.fromBufferAttribute(t,h),pi.add(Ka)),a=Math.max(a,r.distanceToSquared(pi))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new Vt(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let _=0;_<r.count;_++)o[_]=new C,l[_]=new C;let h=new C,c=new C,d=new C,u=new pe,p=new pe,g=new pe,x=new C,m=new C;function f(_,b,U){h.fromBufferAttribute(r,_),c.fromBufferAttribute(r,b),d.fromBufferAttribute(r,U),u.fromBufferAttribute(n,_),p.fromBufferAttribute(n,b),g.fromBufferAttribute(n,U),c.sub(h),d.sub(h),p.sub(u),g.sub(u);let N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(N),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(N),o[_].add(x),o[b].add(x),o[U].add(x),l[_].add(m),l[b].add(m),l[U].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,b=y.length;_<b;++_){let U=y[_],N=U.start,D=U.count;for(let Q=N,F=N+D;Q<F;Q+=3)f(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}let M=new C,v=new C,T=new C,w=new C;function A(_){T.fromBufferAttribute(a,_),w.copy(T);let b=o[_];M.copy(b),M.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(w,b);let U=v.dot(l[_])<0?-1:1;s.setXYZW(_,M.x,M.y,M.z,U)}for(let _=0,b=y.length;_<b;++_){let U=y[_],N=U.start,D=U.count;for(let Q=N,F=N+D;Q<F;Q+=3)A(t.getX(Q+0)),A(t.getX(Q+1)),A(t.getX(Q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Vt(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,p=r.count;u<p;u++)r.setXYZ(u,0,0,0);let a=new C,n=new C,s=new C,o=new C,l=new C,h=new C,c=new C,d=new C;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);a.fromBufferAttribute(i,g),n.fromBufferAttribute(i,x),s.fromBufferAttribute(i,m),c.subVectors(s,n),d.subVectors(a,n),c.cross(d),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,x),h.fromBufferAttribute(r,m),o.add(c),l.add(c),h.add(c),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(x,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,p=i.count;u<p;u+=3)a.fromBufferAttribute(i,u+0),n.fromBufferAttribute(i,u+1),s.fromBufferAttribute(i,u+2),c.subVectors(s,n),d.subVectors(a,n),c.cross(d),r.setXYZ(u+0,c.x,c.y,c.z),r.setXYZ(u+1,c.x,c.y,c.z),r.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)pi.fromBufferAttribute(t,i),pi.normalize(),t.setXYZ(i,pi.x,pi.y,pi.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*c;for(let f=0;f<c;f++)u[g++]=h[p++]}return new Vt(u,c,d)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new gp,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let c=0,d=h.length;c<d;c++){let u=h[c],p=t(u,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let p=h[d];c.push(p.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let n=t.morphAttributes;for(let h in n){let c=[],d=n[h];for(let u=0,p=d.length;u<p;u++)c.push(d[u].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,c=s.length;h<c;h++){let d=s[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ap,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Li=new C,ec=class vp{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Li.fromBufferAttribute(this,i),Li.applyMatrix4(t),this.setXYZ(i,Li.x,Li.y,Li.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Li.fromBufferAttribute(this,i),Li.applyNormalMatrix(t),this.setXYZ(i,Li.x,Li.y,Li.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Li.fromBufferAttribute(this,i),Li.transformDirection(t),this.setXYZ(i,Li.x,Li.y,Li.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=lr(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ut(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=lr(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=lr(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=lr(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=lr(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ut(i,this.array),r=Ut(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ut(i,this.array),r=Ut(r,this.array),a=Ut(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ut(i,this.array),r=Ut(r,this.array),a=Ut(a,this.array),n=Ut(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){So("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new Vt(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new vp(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){So("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Dl=new C,Lg=new C,Ng=new ut,aa=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Dl.subVectors(i,t).cross(Lg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Dl),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ng.getNormalMatrix(e),r=this.coplanarPoint(Dl).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Dg=0,pr=class extends Aa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=ts,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=jd,this.blendEquation=tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new aa().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new pe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var VM=new C,WM=new C,XM=new C,jM=new pe,qM=new pe,YM=new Qe,KM=new C,ZM=new C,JM=new C,$M=new pe,QM=new pe,eb=new pe;var tb=new C,ib=new C;var Hr=new C,Ul=new C,Hs=new C,ks=new C,Uo=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hr.copy(this.origin).addScaledVector(this.direction,t),Hr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ul.copy(e).add(t).multiplyScalar(.5),Hs.copy(t).sub(e).normalize(),ks.copy(this.origin).sub(Ul);let a=e.distanceTo(t)*.5,n=-this.direction.dot(Hs),s=ks.dot(this.direction),o=-ks.dot(Hs),l=ks.lengthSq(),h=Math.abs(1-n*n),c,d,u,p;if(h>0)if(c=n*o-s,d=n*s-o,p=a*h,c>=0)if(d>=-p)if(d<=p){let g=1/h;c*=g,d*=g,u=c*(c+n*d+2*s)+d*(n*c+d+2*o)+l}else d=a,c=Math.max(0,-(n*d+s)),u=-c*c+d*(d+2*o)+l;else d=-a,c=Math.max(0,-(n*d+s)),u=-c*c+d*(d+2*o)+l;else d<=-p?(c=Math.max(0,-(-n*a+s)),d=c>0?-a:Math.min(Math.max(-a,-o),a),u=-c*c+d*(d+2*o)+l):d<=p?(c=0,d=Math.min(Math.max(-a,-o),a),u=d*(d+2*o)+l):(c=Math.max(0,-(n*a+s)),d=c>0?a:Math.min(Math.max(-a,-o),a),u=-c*c+d*(d+2*o)+l);else d=n>0?-a:a,c=Math.max(0,-(n*d+s)),u=-c*c+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(Ul).addScaledVector(Hs,d),u}intersectSphere(e,t){if(e.radius<0)return null;Hr.subVectors(e.center,this.origin);let i=Hr.dot(this.direction),r=Hr.dot(Hr)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,n=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,n=(e.min.y-d.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),c>=0?(s=(e.min.z-d.z)*c,o=(e.max.z-d.z)*c):(s=(e.max.z-d.z)*c,o=(e.min.z-d.z)*c),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Hr)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,h=s.z,c=e.x-n.x,d=e.y-n.y,u=e.z-n.z,p=t.x-n.x,g=t.y-n.y,x=t.z-n.z,m=i.x-n.x,f=i.y-n.y,y=i.z-n.z,M=Math.abs(o),v=Math.abs(l),T=Math.abs(h),w,A,_,b,U,N,D,Q,F,P,G,z;if(M>=v&&M>=T?(_=o,N=c,F=p,z=m,o>=0?(w=l,A=h,b=d,U=u,D=g,Q=x,P=f,G=y):(w=h,A=l,b=u,U=d,D=x,Q=g,P=y,G=f)):v>=T?(_=l,N=d,F=g,z=f,l>=0?(w=h,A=o,b=u,U=c,D=x,Q=p,P=y,G=m):(w=o,A=h,b=c,U=u,D=p,Q=x,P=m,G=y)):(_=h,N=u,F=x,z=y,h>=0?(w=o,A=l,b=c,U=d,D=p,Q=g,P=m,G=f):(w=l,A=o,b=d,U=c,D=g,Q=p,P=f,G=m)),_===0)return null;let re=w/_,X=A/_,j=1/_,te=b-re*N,Pe=U-X*N,Te=D-re*F,qe=Q-X*F,He=P-re*z,$=G-X*z,ne=He*qe-$*Te,ue=te*$-Pe*He,Ee=Te*Pe-qe*te;if(r){if(ne<0||ue<0||Ee<0)return null}else if((ne<0||ue<0||Ee<0)&&(ne>0||ue>0||Ee>0))return null;let Ke=ne+ue+Ee;if(Ke===0)return null;let he=j*(ne*N+ue*F+Ee*z);return(Ke>0?he<0:he>0)?null:this.at(he/Ke,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mi=class extends pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vu=new Qe,ga=new Uo,Gs=new er,Wu=new C,Vs=new C,Ws=new C,Xs=new C,Ol=new C,js=new C,Xu=new C,qs=new C,gt=class extends Zt{constructor(e=new bt,t=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){js.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],c=a[o];h!==0&&(Ol.fromBufferAttribute(c,e),n?js.addScaledVector(Ol,h):js.addScaledVector(Ol.sub(t),h))}t.add(js)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere),Gs.applyMatrix4(a),ga.copy(e.ray).recast(e.near),!(Gs.containsPoint(ga.origin)===!1&&(ga.intersectSphere(Gs,Wu)===null||ga.origin.distanceToSquared(Wu)>(e.far-e.near)**2))&&(Vu.copy(a).invert(),ga.copy(e.ray).applyMatrix4(Vu),!(i.boundingBox!==null&&ga.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ga)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,d=a.groups,u=a.drawRange;if(s!==null)if(Array.isArray(n))for(let p=0,g=d.length;p<g;p++){let x=d[p],m=n[x.materialIndex],f=Math.max(x.start,u.start),y=Math.min(s.count,Math.min(x.start+x.count,u.start+u.count));for(let M=f,v=y;M<v;M+=3){let T=s.getX(M),w=s.getX(M+1),A=s.getX(M+2);r=Ys(this,m,e,i,l,h,c,T,w,A),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let p=Math.max(0,u.start),g=Math.min(s.count,u.start+u.count);for(let x=p,m=g;x<m;x+=3){let f=s.getX(x),y=s.getX(x+1),M=s.getX(x+2);r=Ys(this,n,e,i,l,h,c,f,y,M),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let p=0,g=d.length;p<g;p++){let x=d[p],m=n[x.materialIndex],f=Math.max(x.start,u.start),y=Math.min(o.count,Math.min(x.start+x.count,u.start+u.count));for(let M=f,v=y;M<v;M+=3){let T=M,w=M+1,A=M+2;r=Ys(this,m,e,i,l,h,c,T,w,A),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let p=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let x=p,m=g;x<m;x+=3){let f=x,y=x+1,M=x+2;r=Ys(this,n,e,i,l,h,c,f,y,M),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}};function Ug(e,t,i,r,a,n,s,o){let l;if(t.side===Ci?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===Wr,o),l===null)return null;qs.copy(o),qs.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(qs);return h<i.near||h>i.far?null:{distance:h,point:qs.clone(),object:e}}function Ys(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,Vs),e.getVertexPosition(l,Ws),e.getVertexPosition(h,Xs);let c=Ug(e,t,i,r,Vs,Ws,Xs,Xu);if(c){let d=new C;rn.getBarycoord(Xu,Vs,Ws,Xs,d),a&&(c.uv=rn.getInterpolatedAttribute(a,o,l,h,d,new pe)),n&&(c.uv1=rn.getInterpolatedAttribute(n,o,l,h,d,new pe)),s&&(c.normal=rn.getInterpolatedAttribute(s,o,l,h,d,new C),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new C,materialIndex:0};rn.getNormal(Vs,Ws,Xs,u.normal),c.face=u,c.barycoord=d}return c}var jn=new Nt,ju=new Nt,qu=new Nt,Og=new Nt,Yu=new Qe,Ks=new C,Fl=new er,Ku=new Qe,Bl=new Uo,_p=class extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tu,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ks),this.boundingBox.expandByPoint(Ks)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new er),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ks),this.boundingSphere.expandByPoint(Ks)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fl.copy(this.boundingSphere),Fl.applyMatrix4(r),e.ray.intersectsSphere(Fl)!==!1&&(Ku.copy(r).invert(),Bl.copy(e.ray).applyMatrix4(Ku),!(this.boundingBox!==null&&Bl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Nt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Je("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;ju.fromBufferAttribute(r.attributes.skinIndex,e),qu.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(jn.copy(t),t.set(0,0,0,0)):(jn.set(...t,1),t.set(0,0,0)),jn.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){let n=qu.getComponent(a);if(n!==0){let s=ju.getComponent(a);Yu.multiplyMatrices(i.bones[s].matrixWorld,i.boneInverses[s]),t.addScaledVector(Og.copy(jn).applyMatrix4(Yu),n)}}return t.isVector4&&(t.w=jn.w),t.applyMatrix4(this.bindMatrixInverse)}},tc=class extends Zt{constructor(){super(),this.isBone=!0,this.type="Bone"}},_s=class extends Ii{constructor(e=null,t=1,i=1,r,a,n,s,o,l=ri,h=ri,c,d){super(null,n,s,o,l,h,r,a,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zu=new Qe,Fg=new Qe,xp=class yp{constructor(t=[],i=[]){this.uuid=$i(),this.bones=t.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),i.length===0)this.calculateInverses();else if(t.length!==i.length){Je("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,i=this.bones.length;t<i;t++){let r=new Qe;this.bones[t]&&r.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&r.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){let t=this.bones,i=this.boneInverses,r=this.boneMatrices,a=this.boneTexture;for(let n=0,s=t.length;n<s;n++){let o=t[n]?t[n].matrixWorld:Fg;Zu.multiplyMatrices(o,i[n]),Zu.toArray(r,n*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new yp(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let i=new Float32Array(t*t*4);i.set(this.boneMatrices);let r=new _s(i,t,t,Ji,Zi);return r.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=r,this}getBoneByName(t){for(let i=0,r=this.bones.length;i<r;i++){let a=this.bones[i];if(a.name===t)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,i){this.uuid=t.uuid;for(let r=0,a=t.bones.length;r<a;r++){let n=t.bones[r],s=i[n];s===void 0&&(Je("Skeleton: No bone found with UUID:",n),s=new tc),this.bones.push(s),this.boneInverses.push(new Qe().fromArray(t.boneInverses[r]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let i=this.bones,r=this.boneInverses;for(let a=0,n=i.length;a<n;a++){let s=i[a];t.bones.push(s.uuid);let o=r[a];t.boneInverses.push(o.toArray())}return t}},oa=class extends Vt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Za=new Qe,Ju=new Qe,Zs=[],$u=new Qi,Bg=new Qe,qn=new gt,Yn=new er,tr=class extends gt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Bg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Za),$u.copy(e.boundingBox).applyMatrix4(Za),this.boundingBox.union($u)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new er),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Za),Yn.copy(e.boundingSphere).applyMatrix4(Za),this.boundingSphere.union(Yn)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,n=e*a+1;for(let s=0;s<i.length;s++)i[s]=r[n+s]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(qn.geometry=this.geometry,qn.material=this.material,qn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yn.copy(this.boundingSphere),Yn.applyMatrix4(i),e.ray.intersectsSphere(Yn)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Za),Ju.multiplyMatrices(i,Za),qn.matrixWorld=Ju,qn.raycast(e,Zs);for(let n=0,s=Zs.length;n<s;n++){let o=Zs[n];o.instanceId=a,o.object=this,t.push(o)}Zs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new oa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new _s(new Float32Array(r*this.count),r,this.count,Wh,Zi));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<i.length;l++)n+=i[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=r*e;return a[o]=s,a.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},va=new er,zg=new pe(.5,.5),Js=new C,Sn=class{constructor(e=new aa,t=new aa,i=new aa,r=new aa,a=new aa,n=new aa){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=cr,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],h=a[4],c=a[5],d=a[6],u=a[7],p=a[8],g=a[9],x=a[10],m=a[11],f=a[12],y=a[13],M=a[14],v=a[15];if(r[0].setComponents(l-n,u-h,m-p,v-f).normalize(),r[1].setComponents(l+n,u+h,m+p,v+f).normalize(),r[2].setComponents(l+s,u+c,m+g,v+y).normalize(),r[3].setComponents(l-s,u-c,m-g,v-y).normalize(),i)r[4].setComponents(o,d,x,M).normalize(),r[5].setComponents(l-o,u-d,m-x,v-M).normalize();else if(r[4].setComponents(l-o,u-d,m-x,v-M).normalize(),t===cr)r[5].setComponents(l+o,u+d,m+x,v+M).normalize();else if(t===us)r[5].setComponents(o,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),va.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),va.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(va)}intersectsSprite(e){va.center.set(0,0,0);let t=zg.distanceTo(e.center);return va.radius=.7071067811865476+t,va.applyMatrix4(e.matrixWorld),this.intersectsSphere(va)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Js.x=r.normal.x>0?e.max.x:e.min.x,Js.y=r.normal.y>0?e.max.y:e.min.y,Js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Qu=new Qe,Hg=class Mp{constructor(){this.coordinateSystem=cr,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];Qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new Sn),r[a].setFromProjectionMatrix(Qu,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new Sn),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new Mp().copy(this)}};var kg=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let a=this.pool,n=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let s=a[this.index];n.push(s),this.index++,s.start=e,s.count=t,s.z=i,s.index=r}reset(){this.list.length=0,this.index=0}},rb=new Qe,ab=new Se(1,1,1),nb=new Sn,sb=new Hg,ob=new Qi,lb=new er,hb=new C,cb=new C,ub=new C,db=new kg,pb=new gt;var ic=class extends pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},To=new C,Eo=new C,ed=new Qe,Kn=new Uo,$s=new er,zl=new C,td=new C,Oo=class extends Zt{constructor(e=new bt,t=new ic){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)To.fromBufferAttribute(t,r-1),Eo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=To.distanceTo(Eo);e.setAttribute("lineDistance",new tt(i,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(r),$s.radius+=a,e.ray.intersectsSphere($s)===!1)return;ed.copy(r).invert(),Kn.copy(e.ray).applyMatrix4(ed);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=this.isLineSegments?2:1,h=i.index,c=i.attributes.position;if(h!==null){let d=Math.max(0,n.start),u=Math.min(h.count,n.start+n.count);for(let p=d,g=u-1;p<g;p+=l){let x=h.getX(p),m=h.getX(p+1),f=Qs(this,e,Kn,o,x,m,p);f&&t.push(f)}if(this.isLineLoop){let p=h.getX(u-1),g=h.getX(d),x=Qs(this,e,Kn,o,p,g,u-1);x&&t.push(x)}}else{let d=Math.max(0,n.start),u=Math.min(c.count,n.start+n.count);for(let p=d,g=u-1;p<g;p+=l){let x=Qs(this,e,Kn,o,p,p+1,p);x&&t.push(x)}if(this.isLineLoop){let p=Qs(this,e,Kn,o,u-1,d,u-1);p&&t.push(p)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function Qs(e,t,i,r,a,n,s){let o=e.geometry.attributes.position;if(To.fromBufferAttribute(o,a),Eo.fromBufferAttribute(o,n),i.distanceSqToSegment(To,Eo,zl,td)>r)return;zl.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo(zl);if(!(l<t.near||l>t.far))return{distance:l,point:td.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var id=new C,rd=new C,bp=class extends Oo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)id.fromBufferAttribute(t,r),rd.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+id.distanceTo(rd);e.setAttribute("lineDistance",new tt(i,1))}else Je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Sp=class extends Oo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},xs=class extends pr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ad=new Qe,Uh=new Uo,eo=new er,to=new C,ys=class extends Zt{constructor(e=new bt,t=new xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(r),eo.radius+=a,e.ray.intersectsSphere(eo)===!1)return;ad.copy(r).invert(),Uh.copy(e.ray).applyMatrix4(ad);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,h=i.attributes.position;if(l!==null){let c=Math.max(0,n.start),d=Math.min(l.count,n.start+n.count);for(let u=c,p=d;u<p;u++){let g=l.getX(u);to.fromBufferAttribute(h,g),nd(to,g,o,r,e,t,this)}}else{let c=Math.max(0,n.start),d=Math.min(h.count,n.start+n.count);for(let u=c,p=d;u<p;u++)to.fromBufferAttribute(h,u),nd(to,u,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function nd(e,t,i,r,a,n,s){let o=Uh.distanceSqToPoint(e);if(o<i){let l=new C;Uh.closestPointToPoint(e,l),l.applyMatrix4(r);let h=a.ray.origin.distanceTo(l);if(h<a.near||h>a.far)return;n.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var Tp=class extends Ii{constructor(e=[],t=Sa,i,r,a,n,s,o,l,h){super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ms=class extends Ii{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ps=class extends Ii{constructor(e,t,i=Rr,r,a,n,s=ri,o=ri,l,h=Xr,c=1){if(h!==Xr&&h!==xa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:c};super(d,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Gg=class extends ps{constructor(e,t=Rr,i=Sa,r,a,n=ri,s=ri,o,l=Xr){let h={width:e,height:e,depth:1},c=[h,h,h,h,h,h];super(e,e,t,i,r,a,n,s,o,l),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ep=class extends Ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Cr=class wp extends bt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],d=[],u=0,p=0;g("z","y","x",-1,-1,r,i,t,s,n,0),g("z","y","x",1,-1,r,i,-t,s,n,1),g("x","z","y",1,1,t,r,i,a,s,2),g("x","z","y",1,-1,t,r,-i,a,s,3),g("x","y","z",1,-1,t,i,r,a,n,4),g("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(d,2));function g(x,m,f,y,M,v,T,w,A,_,b){let U=v/A,N=T/_,D=v/2,Q=T/2,F=w/2,P=A+1,G=_+1,z=0,re=0,X=new C;for(let j=0;j<G;j++){let te=j*N-Q;for(let Pe=0;Pe<P;Pe++){let Te=Pe*U-D;X[x]=Te*y,X[m]=te*M,X[f]=F,h.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[f]=w>0?1:-1,c.push(X.x,X.y,X.z),d.push(Pe/A),d.push(1-j/_),z+=1}}for(let j=0;j<_;j++)for(let te=0;te<A;te++){let Pe=u+te+P*j,Te=u+te+P*(j+1),qe=u+(te+1)+P*(j+1),He=u+(te+1)+P*j;l.push(Pe,Te,He),l.push(Te,qe,He),re+=6}o.addGroup(p,re,b),p+=re,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wp(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Vg=class Ap extends bt{constructor(t=1,i=1,r=4,a=8,n=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:r,radialSegments:a,heightSegments:n},i=Math.max(0,i),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),n=Math.max(1,Math.floor(n));let s=[],o=[],l=[],h=[],c=i/2,d=Math.PI/2*t,u=i,p=2*d+u,g=r*2+n,x=a+1,m=new C,f=new C;for(let y=0;y<=g;y++){let M=0,v=0,T=0,w=0;if(y<=r){let b=y/r,U=b*Math.PI/2;v=-c-t*Math.cos(U),T=t*Math.sin(U),w=-t*Math.cos(U),M=b*d}else if(y<=r+n){let b=(y-r)/n;v=-c+b*i,T=t,w=0,M=d+b*u}else{let b=(y-r-n)/r,U=b*Math.PI/2;v=c+t*Math.sin(U),T=t*Math.cos(U),w=t*Math.sin(U),M=d+u+b*d}let A=Math.max(0,Math.min(1,M/p)),_=0;y===0?_=.5/a:y===g&&(_=-.5/a);for(let b=0;b<=a;b++){let U=b/a,N=U*Math.PI*2,D=Math.sin(N),Q=Math.cos(N);f.x=-T*Q,f.y=v,f.z=T*D,o.push(f.x,f.y,f.z),m.set(-T*Q,w,T*D),m.normalize(),l.push(m.x,m.y,m.z),h.push(U+_,A)}if(y>0){let b=(y-1)*x;for(let U=0;U<a;U++){let N=b+U,D=b+U+1,Q=y*x+U,F=y*x+U+1;s.push(N,D,Q),s.push(D,F,Q)}}}this.setIndex(s),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ap(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},rc=class Rp extends bt{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],h=new C,c=new pe;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=i;d++,u+=3){let p=r+d/i*a;h.x=t*Math.cos(p),h.y=t*Math.sin(p),s.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(s[u]/t+1)/2,c.y=(s[u+1]/t+1)/2,l.push(c.x,c.y)}for(let d=1;d<=i;d++)n.push(d,d+1,0);this.setIndex(n),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rp(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Cp=class Ip extends bt{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let c=[],d=[],u=[],p=[],g=0,x=[],m=r/2,f=0;y(),s===!1&&(t>0&&M(!0),i>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(p,2));function y(){let v=new C,T=new C,w=0,A=(i-t)/r;for(let _=0;_<=n;_++){let b=[],U=_/n,N=U*(i-t)+t;for(let D=0;D<=a;D++){let Q=D/a,F=Q*l+o,P=Math.sin(F),G=Math.cos(F);T.x=N*P,T.y=-U*r+m,T.z=N*G,d.push(T.x,T.y,T.z),v.set(P,A,G).normalize(),u.push(v.x,v.y,v.z),p.push(Q,1-U),b.push(g++)}x.push(b)}for(let _=0;_<a;_++)for(let b=0;b<n;b++){let U=x[b][_],N=x[b+1][_],D=x[b+1][_+1],Q=x[b][_+1];(t>0||b!==0)&&(c.push(U,N,Q),w+=3),(i>0||b!==n-1)&&(c.push(N,D,Q),w+=3)}h.addGroup(f,w,0),f+=w}function M(v){let T=g,w=new pe,A=new C,_=0,b=v===!0?t:i,U=v===!0?1:-1;for(let D=1;D<=a;D++)d.push(0,m*U,0),u.push(0,U,0),p.push(.5,.5),g++;let N=g;for(let D=0;D<=a;D++){let Q=D/a*l+o,F=Math.cos(Q),P=Math.sin(Q);A.x=b*P,A.y=m*U,A.z=b*F,d.push(A.x,A.y,A.z),u.push(0,U,0),w.x=F*.5+.5,w.y=P*.5*U+.5,p.push(w.x,w.y),g++}for(let D=0;D<a;D++){let Q=T+D,F=N+D;v===!0?c.push(F,F+1,Q):c.push(F+1,F,Q),_+=3}h.addGroup(f,_,v===!0?1:2),f+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ip(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wg=class Pp extends Cp{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new Pp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bs=class Lp extends bt{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let n=[],s=[];o(a),h(r),c(),this.setAttribute("position",new tt(n,3)),this.setAttribute("normal",new tt(n.slice(),3)),this.setAttribute("uv",new tt(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let M=new C,v=new C,T=new C;for(let w=0;w<i.length;w+=3)p(i[w+0],M),p(i[w+1],v),p(i[w+2],T),l(M,v,T,y)}function l(y,M,v,T){let w=T+1,A=[];for(let _=0;_<=w;_++){A[_]=[];let b=y.clone().lerp(v,_/w),U=M.clone().lerp(v,_/w),N=w-_;for(let D=0;D<=N;D++)D===0&&_===w?A[_][D]=b:A[_][D]=b.clone().lerp(U,D/N)}for(let _=0;_<w;_++)for(let b=0;b<2*(w-_)-1;b++){let U=Math.floor(b/2);b%2===0?(u(A[_][U+1]),u(A[_+1][U]),u(A[_][U])):(u(A[_][U+1]),u(A[_+1][U+1]),u(A[_+1][U]))}}function h(y){let M=new C;for(let v=0;v<n.length;v+=3)M.x=n[v+0],M.y=n[v+1],M.z=n[v+2],M.normalize().multiplyScalar(y),n[v+0]=M.x,n[v+1]=M.y,n[v+2]=M.z}function c(){let y=new C;for(let M=0;M<n.length;M+=3){y.x=n[M+0],y.y=n[M+1],y.z=n[M+2];let v=m(y)/2/Math.PI+.5,T=f(y)/Math.PI+.5;s.push(v,1-T)}g(),d()}function d(){for(let y=0;y<s.length;y+=6){let M=s[y+0],v=s[y+2],T=s[y+4],w=Math.max(M,v,T),A=Math.min(M,v,T);w>.9&&A<.1&&(M<.2&&(s[y+0]+=1),v<.2&&(s[y+2]+=1),T<.2&&(s[y+4]+=1))}}function u(y){n.push(y.x,y.y,y.z)}function p(y,M){let v=y*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){let y=new C,M=new C,v=new C,T=new C,w=new pe,A=new pe,_=new pe;for(let b=0,U=0;b<n.length;b+=9,U+=6){y.set(n[b+0],n[b+1],n[b+2]),M.set(n[b+3],n[b+4],n[b+5]),v.set(n[b+6],n[b+7],n[b+8]),w.set(s[U+0],s[U+1]),A.set(s[U+2],s[U+3]),_.set(s[U+4],s[U+5]),T.copy(y).add(M).add(v).divideScalar(3);let N=m(T);x(w,U+0,y,N),x(A,U+2,M,N),x(_,U+4,v,N)}}function x(y,M,v,T){T<0&&y.x===1&&(s[M]=y.x-1),v.x===0&&v.z===0&&(s[M]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lp(t.vertices,t.indices,t.radius,t.detail)}},Xg=class Np extends bs{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=1/r,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,s,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Np(t.radius,t.detail)}},io=new C,ro=new C,Hl=new C,ao=new rn,jg=class extends bt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(cn*t),a=e.getIndex(),n=e.getAttribute("position"),s=a?a.count:n.count,o=[0,0,0],l=["a","b","c"],h=new Array(3),c={},d=[];for(let u=0;u<s;u+=3){a?(o[0]=a.getX(u),o[1]=a.getX(u+1),o[2]=a.getX(u+2)):(o[0]=u,o[1]=u+1,o[2]=u+2);let{a:p,b:g,c:x}=ao;if(p.fromBufferAttribute(n,o[0]),g.fromBufferAttribute(n,o[1]),x.fromBufferAttribute(n,o[2]),ao.getNormal(Hl),h[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){let f=(m+1)%3,y=h[m],M=h[f],v=ao[l[m]],T=ao[l[f]],w=`${y}_${M}`,A=`${M}_${y}`;A in c&&c[A]?(Hl.dot(c[A].normal)<=r&&(d.push(v.x,v.y,v.z),d.push(T.x,T.y,T.z)),c[A]=null):w in c||(c[w]={index0:o[m],index1:o[f],normal:Hl.clone()})}}for(let u in c)if(c[u]){let{index0:p,index1:g}=c[u];io.fromBufferAttribute(n,p),ro.fromBufferAttribute(n,g),d.push(io.x,io.y,io.z),d.push(ro.x,ro.y,ro.z)}this.setAttribute("position",new tt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ir=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let h=i[r],c=i[r+1]-h,d=(n-h)/c;return(r+d)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new pe:new C);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,r=[],a=[],n=[],s=new C,o=new Qe;for(let u=0;u<=e;u++){let p=u/e;r[u]=this.getTangentAt(p,new C)}a[0]=new C,n[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),d<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let u=1;u<=e;u++){if(a[u]=a[u-1].clone(),n[u]=n[u-1].clone(),s.crossVectors(r[u-1],r[u]),s.length()>Number.EPSILON){s.normalize();let p=Math.acos(mt(r[u-1].dot(r[u]),-1,1));a[u].applyMatrix4(o.makeRotationAxis(s,p))}n[u].crossVectors(r[u],a[u])}if(t===!0){let u=Math.acos(mt(a[0].dot(a[e]),-1,1));u/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(u=-u);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],u*p)),n[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ac=class extends Ir{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new pe){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*h-u*c+this.aX,l=d*c+u*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},qg=class extends ac{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function nc(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,c,d){let u=(s-n)/h-(o-n)/(h+c)+(o-s)/c,p=(o-s)/c-(l-s)/(c+d)+(l-o)/d;u*=c,p*=c,a(s,o,u,p)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}var sd=new C,od=new C,kl=new nc,Gl=new nc,Vl=new nc,Yg=class extends Ir{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=r[(s-1)%a]:(od.subVectors(r[0],r[1]).add(r[0]),l=od);let c=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?h=r[(s+2)%a]:(sd.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=sd),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(c),u),g=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(h),u);g<1e-4&&(g=1),p<1e-4&&(p=g),x<1e-4&&(x=g),kl.initNonuniformCatmullRom(l.x,c.x,d.x,h.x,p,g,x),Gl.initNonuniformCatmullRom(l.y,c.y,d.y,h.y,p,g,x),Vl.initNonuniformCatmullRom(l.z,c.z,d.z,h.z,p,g,x)}else this.curveType==="catmullrom"&&(kl.initCatmullRom(l.x,c.x,d.x,h.x,this.tension),Gl.initCatmullRom(l.y,c.y,d.y,h.y,this.tension),Vl.initCatmullRom(l.z,c.z,d.z,h.z,this.tension));return i.set(kl.calc(o),Gl.calc(o),Vl.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ld(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function Kg(e,t){let i=1-e;return i*i*t}function Zg(e,t){return 2*(1-e)*e*t}function Jg(e,t){return e*e*t}function as(e,t,i,r){return Kg(e,t)+Zg(e,i)+Jg(e,r)}function $g(e,t){let i=1-e;return i*i*i*t}function Qg(e,t){let i=1-e;return 3*i*i*e*t}function e0(e,t){return 3*(1-e)*e*e*t}function t0(e,t){return e*e*e*t}function ns(e,t,i,r,a){return $g(e,t)+Qg(e,i)+e0(e,r)+t0(e,a)}var Dp=class extends Ir{constructor(e=new pe,t=new pe,i=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new pe){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(ns(e,r.x,a.x,n.x,s.x),ns(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},i0=class extends Ir{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(ns(e,r.x,a.x,n.x,s.x),ns(e,r.y,a.y,n.y,s.y),ns(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Up=class extends Ir{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},r0=class extends Ir{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Op=class extends Ir{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(as(e,r.x,a.x,n.x),as(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fp=class extends Ir{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(as(e,r.x,a.x,n.x),as(e,r.y,a.y,n.y),as(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bp=class extends Ir{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],c=r[n>r.length-3?r.length-1:n+2];return i.set(ld(s,o.x,l.x,h.x,c.x),ld(s,o.y,l.y,h.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new pe().fromArray(r))}return this}},wo=Object.freeze({__proto__:null,ArcCurve:qg,CatmullRomCurve3:Yg,CubicBezierCurve:Dp,CubicBezierCurve3:i0,EllipseCurve:ac,LineCurve:Up,LineCurve3:r0,QuadraticBezierCurve:Op,QuadraticBezierCurve3:Fp,SplineCurve:Bp}),a0=class extends Ir{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new wo[r.type]().fromJSON(r))}return this}},hd=class extends a0{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Up(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new Op(this.currentPoint.clone(),new pe(e,t),new pe(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new Dp(this.currentPoint.clone(),new pe(e,t),new pe(i,r),new pe(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Bp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new ac(e,t,i,r,a,n,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},zp=class extends hd{constructor(e){super(e),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new hd().fromJSON(r))}return this}};function n0(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=Hp(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h;if(r&&(n=c0(e,t,n,i)),e.length>80*i){o=e[0],l=e[1];let c=o,d=l;for(let u=i;u<a;u+=i){let p=e[u],g=e[u+1];p<o&&(o=p),g<l&&(l=g),p>c&&(c=p),g>d&&(d=g)}h=Math.max(c-o,d-l),h=h!==0?32767/h:0}return fs(n,s,i,o,l,h,0),s}function Hp(e,t,i,r,a){let n;if(a===M0(e,t,i,r)>0)for(let s=t;s<i;s+=r)n=cd(s/r|0,e[s],e[s+1],n);else for(let s=i-r;s>=t;s-=r)n=cd(s/r|0,e[s],e[s+1],n);return n&&Tn(n,n.next)&&(gs(n),n=n.next),n}function wa(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(Tn(i,i.next)||Xt(i.prev,i,i.next)===0)){if(gs(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function fs(e,t,i,r,a,n,s){if(!e)return;!s&&n&&m0(e,r,a,n);let o=e;for(;e.prev!==e.next;){let l=e.prev,h=e.next;if(n?o0(e,r,a,n):s0(e)){t.push(l.i,e.i,h.i),gs(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=l0(wa(e),t),fs(e,t,i,r,a,n,2)):s===2&&h0(e,t,i,r,a,n):fs(wa(e),t,i,r,a,n,1);break}}}function s0(e){let t=e.prev,i=e,r=e.next;if(Xt(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,h=r.y,c=Math.min(a,n,s),d=Math.min(o,l,h),u=Math.max(a,n,s),p=Math.max(o,l,h),g=r.next;for(;g!==t;){if(g.x>=c&&g.x<=u&&g.y>=d&&g.y<=p&&Qn(a,o,n,l,s,h,g.x,g.y)&&Xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function o0(e,t,i,r){let a=e.prev,n=e,s=e.next;if(Xt(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,c=a.y,d=n.y,u=s.y,p=Math.min(o,l,h),g=Math.min(c,d,u),x=Math.max(o,l,h),m=Math.max(c,d,u),f=Oh(p,g,t,i,r),y=Oh(x,m,t,i,r),M=e.prevZ,v=e.nextZ;for(;M&&M.z>=f&&v&&v.z<=y;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=m&&M!==a&&M!==s&&Qn(o,c,l,d,h,u,M.x,M.y)&&Xt(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==a&&v!==s&&Qn(o,c,l,d,h,u,v.x,v.y)&&Xt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=f;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=m&&M!==a&&M!==s&&Qn(o,c,l,d,h,u,M.x,M.y)&&Xt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==a&&v!==s&&Qn(o,c,l,d,h,u,v.x,v.y)&&Xt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function l0(e,t){let i=e;do{let r=i.prev,a=i.next.next;!Tn(r,a)&&Gp(r,i,i.next,a)&&ms(r,a)&&ms(a,r)&&(t.push(r.i,i.i,a.i),gs(i),gs(i.next),i=e=a),i=i.next}while(i!==e);return wa(i)}function h0(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&_0(s,o)){let l=Vp(s,o);s=wa(s,s.next),l=wa(l,l.next),fs(s,t,i,r,a,n,0),fs(l,t,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function c0(e,t,i,r){let a=[];for(let n=0,s=t.length;n<s;n++){let o=t[n]*r,l=n<s-1?t[n+1]*r:e.length,h=Hp(e,o,l,r,!1);h===h.next&&(h.steiner=!0),a.push(v0(h))}a.sort(u0);for(let n=0;n<a.length;n++)i=d0(a[n],i);return i}function u0(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let r=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);i=r-a}return i}function d0(e,t){let i=p0(e,t);if(!i)return t;let r=Vp(i,e);return wa(r,r.next),wa(i,i.next)}function p0(e,t){let i=t,r=e.x,a=e.y,n=-1/0,s;if(Tn(e,i))return i;do{if(Tn(e,i.next))return i.next;if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){let d=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=r&&d>n&&(n=d,s=i.x<i.next.x?i:i.next,d===r))return s}i=i.next}while(i!==t);if(!s)return null;let o=s,l=s.x,h=s.y,c=1/0;i=s;do{if(r>=i.x&&i.x>=l&&r!==i.x&&kp(a<h?r:n,a,l,h,a<h?n:r,a,i.x,i.y)){let d=Math.abs(a-i.y)/(r-i.x);ms(i,e)&&(d<c||d===c&&(i.x>s.x||i.x===s.x&&f0(s,i)))&&(s=i,c=d)}i=i.next}while(i!==o);return s}function f0(e,t){return Xt(e.prev,e,t.prev)<0&&Xt(t.next,e,e.next)<0}function m0(e,t,i,r){let a=e;do a.z===0&&(a.z=Oh(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,g0(a)}function g0(e){let t,i=1;do{let r=e,a;e=null;let n=null;for(t=0;r;){t++;let s=r,o=0;for(let h=0;h<i&&(o++,s=s.nextZ,!!s);h++);let l=i;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(a=r,r=r.nextZ,o--):(a=s,s=s.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=s}n.nextZ=null,i*=2}while(t>1);return e}function Oh(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function v0(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function kp(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function Qn(e,t,i,r,a,n,s,o){return!(e===s&&t===o)&&kp(e,t,i,r,a,n,s,o)}function _0(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!x0(e,t)&&(ms(e,t)&&ms(t,e)&&y0(e,t)&&(Xt(e.prev,e,t.prev)||Xt(e,t.prev,t))||Tn(e,t)&&Xt(e.prev,e,e.next)>0&&Xt(t.prev,t,t.next)>0)}function Xt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Tn(e,t){return e.x===t.x&&e.y===t.y}function Gp(e,t,i,r){let a=so(Xt(e,t,i)),n=so(Xt(e,t,r)),s=so(Xt(i,r,e)),o=so(Xt(i,r,t));return!!(a!==n&&s!==o||a===0&&no(e,i,t)||n===0&&no(e,r,t)||s===0&&no(i,e,r)||o===0&&no(i,t,r))}function no(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function so(e){return e>0?1:e<0?-1:0}function x0(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Gp(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function ms(e,t){return Xt(e.prev,e,e.next)<0?Xt(e,t,e.next)>=0&&Xt(e,e.prev,t)>=0:Xt(e,t,e.prev)<0||Xt(e,e.next,t)<0}function y0(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function Vp(e,t){let i=Fh(e.i,e.x,e.y),r=Fh(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function cd(e,t,i,r){let a=Fh(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function gs(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Fh(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function M0(e,t,i,r){let a=0;for(let n=t,s=i-r;n<i;n+=r)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var b0=class{static triangulate(e,t,i=2){return n0(e,t,i)}},ya=class Wp{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return Wp.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];ud(t),dd(r,t);let s=t.length;i.forEach(ud);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,dd(r,i[l]);let o=b0.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function ud(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function dd(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var S0=class Xp extends bt{constructor(t=new zp([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new tt(a,3)),this.setAttribute("uv",new tt(n,2)),this.computeVertexNormals();function s(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,u=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,g=i.bevelSize!==void 0?i.bevelSize:p-.1,x=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,f=i.extrudePath,y=i.UVGenerator!==void 0?i.UVGenerator:T0,M,v=!1,T,w,A,_;if(f){M=f.getSpacedPoints(c),v=!0,u=!1;let oe=f.isCatmullRomCurve3?f.closed:!1;T=f.computeFrenetFrames(c,oe),w=new C,A=new C,_=new C}u||(m=0,p=0,g=0,x=0);let b=o.extractPoints(h),U=b.shape,N=b.holes;if(!ya.isClockWise(U)){U=U.reverse();for(let oe=0,ae=N.length;oe<ae;oe++){let me=N[oe];ya.isClockWise(me)&&(N[oe]=me.reverse())}}function D(oe){let ae=10000000000000001e-36,me=oe[0];for(let we=1;we<=oe.length;we++){let Le=we%oe.length,Oe=oe[Le],Ve=Oe.x-me.x,at=Oe.y-me.y,it=Ve*Ve+at*at,B=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(me.x),Math.abs(me.y)),wt=ae*B*B;if(it<=wt){oe.splice(Le,1),we--;continue}me=Oe}}D(U),N.forEach(D);let Q=N.length,F=U;for(let oe=0;oe<Q;oe++){let ae=N[oe];U=U.concat(ae)}function P(oe,ae,me){return ae||st("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(ae,me)}let G=U.length;function z(oe,ae,me){let we,Le,Oe,Ve=oe.x-ae.x,at=oe.y-ae.y,it=me.x-oe.x,B=me.y-oe.y,wt=Ve*Ve+at*at,ct=Ve*B-at*it;if(Math.abs(ct)>Number.EPSILON){let ht=Math.sqrt(wt),R=Math.sqrt(it*it+B*B),S=ae.x-at/ht,H=ae.y+Ve/ht,ee=me.x-B/R,ce=me.y+it/R,xe=((ee-S)*B-(ce-H)*it)/(Ve*B-at*it);we=S+Ve*xe-oe.x,Le=H+at*xe-oe.y;let Me=we*we+Le*Le;if(Me<=2)return new pe(we,Le);Oe=Math.sqrt(Me/2)}else{let ht=!1;Ve>Number.EPSILON?it>Number.EPSILON&&(ht=!0):Ve<-Number.EPSILON?it<-Number.EPSILON&&(ht=!0):Math.sign(at)===Math.sign(B)&&(ht=!0),ht?(we=-at,Le=Ve,Oe=Math.sqrt(wt)):(we=Ve,Le=at,Oe=Math.sqrt(wt/2))}return new pe(we/Oe,Le/Oe)}let re=[];for(let oe=0,ae=F.length,me=ae-1,we=oe+1;oe<ae;oe++,me++,we++)me===ae&&(me=0),we===ae&&(we=0),re[oe]=z(F[oe],F[me],F[we]);let X=[],j,te=re.concat();for(let oe=0,ae=Q;oe<ae;oe++){let me=N[oe];j=[];for(let we=0,Le=me.length,Oe=Le-1,Ve=we+1;we<Le;we++,Oe++,Ve++)Oe===Le&&(Oe=0),Ve===Le&&(Ve=0),j[we]=z(me[we],me[Oe],me[Ve]);X.push(j),te=te.concat(j)}let Pe;if(m===0)Pe=ya.triangulateShape(F,N);else{let oe=[],ae=[];for(let me=0;me<m;me++){let we=me/m,Le=p*Math.cos(we*Math.PI/2),Oe=g*Math.sin(we*Math.PI/2)+x;for(let Ve=0,at=F.length;Ve<at;Ve++){let it=P(F[Ve],re[Ve],Oe);ue(it.x,it.y,-Le),we===0&&oe.push(it)}for(let Ve=0,at=Q;Ve<at;Ve++){let it=N[Ve];j=X[Ve];let B=[];for(let wt=0,ct=it.length;wt<ct;wt++){let ht=P(it[wt],j[wt],Oe);ue(ht.x,ht.y,-Le),we===0&&B.push(ht)}we===0&&ae.push(B)}}Pe=ya.triangulateShape(oe,ae)}let Te=Pe.length,qe=g+x;for(let oe=0;oe<G;oe++){let ae=u?P(U[oe],te[oe],qe):U[oe];v?(A.copy(T.normals[0]).multiplyScalar(ae.x),w.copy(T.binormals[0]).multiplyScalar(ae.y),_.copy(M[0]).add(A).add(w),ue(_.x,_.y,_.z)):ue(ae.x,ae.y,0)}for(let oe=1;oe<=c;oe++)for(let ae=0;ae<G;ae++){let me=u?P(U[ae],te[ae],qe):U[ae];v?(A.copy(T.normals[oe]).multiplyScalar(me.x),w.copy(T.binormals[oe]).multiplyScalar(me.y),_.copy(M[oe]).add(A).add(w),ue(_.x,_.y,_.z)):ue(me.x,me.y,d/c*oe)}for(let oe=m-1;oe>=0;oe--){let ae=oe/m,me=p*Math.cos(ae*Math.PI/2),we=g*Math.sin(ae*Math.PI/2)+x;for(let Le=0,Oe=F.length;Le<Oe;Le++){let Ve=P(F[Le],re[Le],we);ue(Ve.x,Ve.y,d+me)}for(let Le=0,Oe=N.length;Le<Oe;Le++){let Ve=N[Le];j=X[Le];for(let at=0,it=Ve.length;at<it;at++){let B=P(Ve[at],j[at],we);v?ue(B.x,B.y+M[c-1].y,M[c-1].x+me):ue(B.x,B.y,d+me)}}}He(),$();function He(){let oe=a.length/3;if(u){let ae=0,me=G*ae;for(let we=0;we<Te;we++){let Le=Pe[we];Ee(Le[2]+me,Le[1]+me,Le[0]+me)}ae=c+m*2,me=G*ae;for(let we=0;we<Te;we++){let Le=Pe[we];Ee(Le[0]+me,Le[1]+me,Le[2]+me)}}else{for(let ae=0;ae<Te;ae++){let me=Pe[ae];Ee(me[2],me[1],me[0])}for(let ae=0;ae<Te;ae++){let me=Pe[ae];Ee(me[0]+G*c,me[1]+G*c,me[2]+G*c)}}r.addGroup(oe,a.length/3-oe,0)}function $(){let oe=a.length/3,ae=0;ne(F,ae),ae+=F.length;for(let me=0,we=N.length;me<we;me++){let Le=N[me];ne(Le,ae),ae+=Le.length}r.addGroup(oe,a.length/3-oe,1)}function ne(oe,ae){let me=oe.length;for(;--me>=0;){let we=me,Le=me-1;Le<0&&(Le=oe.length-1);for(let Oe=0,Ve=c+m*2;Oe<Ve;Oe++){let at=G*Oe,it=G*(Oe+1),B=ae+we+at,wt=ae+Le+at,ct=ae+Le+it,ht=ae+we+it;Ke(B,wt,ct,ht)}}}function ue(oe,ae,me){l.push(oe),l.push(ae),l.push(me)}function Ee(oe,ae,me){he(oe),he(ae),he(me);let we=a.length/3,Le=y.generateTopUV(r,a,we-3,we-2,we-1);Ge(Le[0]),Ge(Le[1]),Ge(Le[2])}function Ke(oe,ae,me,we){he(oe),he(ae),he(we),he(ae),he(me),he(we);let Le=a.length/3,Oe=y.generateSideWallUV(r,a,Le-6,Le-3,Le-2,Le-1);Ge(Oe[0]),Ge(Oe[1]),Ge(Oe[3]),Ge(Oe[1]),Ge(Oe[2]),Ge(Oe[3])}function he(oe){a.push(l[oe*3+0]),a.push(l[oe*3+1]),a.push(l[oe*3+2])}function Ge(oe){n.push(oe.x),n.push(oe.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return E0(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new wo[a.type]().fromJSON(a)),new Xp(r,t.options)}},T0={generateTopUV:function(e,t,i,r,a){let n=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],c=t[a*3+1];return[new pe(n,s),new pe(o,l),new pe(h,c)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],c=t[r*3+1],d=t[r*3+2],u=t[a*3],p=t[a*3+1],g=t[a*3+2],x=t[n*3],m=t[n*3+1],f=t[n*3+2];return Math.abs(o-c)<Math.abs(s-h)?[new pe(s,1-l),new pe(h,1-d),new pe(u,1-g),new pe(x,1-f)]:[new pe(o,1-l),new pe(c,1-d),new pe(p,1-g),new pe(m,1-f)]}};function E0(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var sc=class jp extends bs{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,n,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new jp(t.radius,t.detail)}},w0=class qp extends bt{constructor(t=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=mt(a,0,Math.PI*2);let n=[],s=[],o=[],l=[],h=[],c=1/i,d=new C,u=new pe,p=new C,g=new C,x=new C,m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let y=0;y<=i;y++){let M=r+y*c*a,v=Math.sin(M),T=Math.cos(M);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*v,d.y=t[w].y,d.z=t[w].x*T,s.push(d.x,d.y,d.z),u.x=y/i,u.y=w/(t.length-1),o.push(u.x,u.y);let A=l[3*w+0]*v,_=l[3*w+1],b=l[3*w+0]*T;h.push(A,_,b)}}for(let y=0;y<i;y++)for(let M=0;M<t.length-1;M++){let v=M+y*t.length,T=v,w=v+t.length,A=v+t.length+1,_=v+1;n.push(T,w,_),n.push(A,_,w)}this.setIndex(n),this.setAttribute("position",new tt(s,3)),this.setAttribute("uv",new tt(o,2)),this.setAttribute("normal",new tt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qp(t.points,t.segments,t.phiStart,t.phiLength)}},oc=class Yp extends bs{constructor(t=1,i=0){let r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Yp(t.radius,t.detail)}},Xi=class Kp extends bt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,c=l+1,d=t/o,u=i/l,p=[],g=[],x=[],m=[];for(let f=0;f<c;f++){let y=f*u-s;for(let M=0;M<h;M++){let v=M*d-n;g.push(v,-y,0),x.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let M=y+h*f,v=y+h*(f+1),T=y+1+h*(f+1),w=y+1+h*f;p.push(M,v,w),p.push(v,T,w)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kp(t.width,t.height,t.widthSegments,t.heightSegments)}},A0=class Zp extends bt{constructor(t=.5,i=1,r=32,a=1,n=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:n,thetaLength:s},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],h=[],c=[],d=t,u=(i-t)/a,p=new C,g=new pe;for(let x=0;x<=a;x++){for(let m=0;m<=r;m++){let f=n+m/r*s;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(p.x/i+1)/2,g.y=(p.y/i+1)/2,c.push(g.x,g.y)}d+=u}for(let x=0;x<a;x++){let m=x*(r+1);for(let f=0;f<r;f++){let y=f+m,M=y,v=y+r+1,T=y+r+2,w=y+1;o.push(M,v,w),o.push(v,T,w)}}this.setIndex(o),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zp(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},R0=class Jp extends bt{constructor(t=new zp([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(n,3)),this.setAttribute("uv",new tt(s,2));function h(c){let d=a.length/3,u=c.extractPoints(i),p=u.shape,g=u.holes;ya.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let y=g[m];ya.isClockWise(y)===!0&&(g[m]=y.reverse())}let x=ya.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let y=g[m];p=p.concat(y)}for(let m=0,f=p.length;m<f;m++){let y=p[m];a.push(y.x,y.y,0),n.push(0,0,1),s.push(y.x,y.y)}for(let m=0,f=x.length;m<f;m++){let y=x[m],M=y[0]+d,v=y[1]+d,T=y[2]+d;r.push(M,v,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return C0(i,t)}static fromJSON(t,i){let r=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=i[t.shapes[a]];r.push(s)}return new Jp(r,t.curveSegments)}};function C0(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var lc=class $p extends bt{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),h=0,c=[],d=new C,u=new C,p=[],g=[],x=[],m=[];for(let f=0;f<=r;f++){let y=[],M=f/r,v=s+M*o,T=t*Math.cos(v),w=Math.sqrt(t*t-T*T),A=0;f===0&&s===0?A=.5/i:f===r&&l===Math.PI&&(A=-.5/i);for(let _=0;_<=i;_++){let b=_/i,U=a+b*n;d.x=-w*Math.cos(U),d.y=T,d.z=w*Math.sin(U),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(b+A,1-M),y.push(h++)}c.push(y)}for(let f=0;f<r;f++)for(let y=0;y<i;y++){let M=c[f][y+1],v=c[f][y],T=c[f+1][y],w=c[f+1][y+1];(f!==0||s>0)&&p.push(M,v,w),(f!==r-1||l<Math.PI)&&p.push(v,T,w)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $p(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},I0=class Qp extends bs{constructor(t=1,i=0){let r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,a,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Qp(t.radius,t.detail)}},hc=class ef extends bt{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],d=[],u=new C,p=new C,g=new C;for(let x=0;x<=r;x++){let m=s+x/r*o;for(let f=0;f<=a;f++){let y=f/a*n;p.x=(t+i*Math.cos(m))*Math.cos(y),p.y=(t+i*Math.cos(m))*Math.sin(y),p.z=i*Math.sin(m),h.push(p.x,p.y,p.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),g.subVectors(p,u).normalize(),c.push(g.x,g.y,g.z),d.push(f/a),d.push(x/r)}}for(let x=1;x<=r;x++)for(let m=1;m<=a;m++){let f=(a+1)*x+m-1,y=(a+1)*(x-1)+m-1,M=(a+1)*(x-1)+m,v=(a+1)*x+m;l.push(f,y,v),l.push(y,M,v)}this.setIndex(l),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ef(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},P0=class tf extends bt{constructor(t=1,i=.4,r=64,a=8,n=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:r,radialSegments:a,p:n,q:s},r=Math.floor(r),a=Math.floor(a);let o=[],l=[],h=[],c=[],d=new C,u=new C,p=new C,g=new C,x=new C,m=new C,f=new C;for(let M=0;M<=r;++M){let v=M/r*n*Math.PI*2;y(v,n,s,t,p),y(v+.01,n,s,t,g),m.subVectors(g,p),f.addVectors(g,p),x.crossVectors(m,f),f.crossVectors(x,m),x.normalize(),f.normalize();for(let T=0;T<=a;++T){let w=T/a*Math.PI*2,A=-i*Math.cos(w),_=i*Math.sin(w);d.x=p.x+(A*f.x+_*x.x),d.y=p.y+(A*f.y+_*x.y),d.z=p.z+(A*f.z+_*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),h.push(u.x,u.y,u.z),c.push(M/r),c.push(T/a)}}for(let M=1;M<=r;M++)for(let v=1;v<=a;v++){let T=(a+1)*(M-1)+(v-1),w=(a+1)*M+(v-1),A=(a+1)*M+v,_=(a+1)*(M-1)+v;o.push(T,w,_),o.push(w,A,_)}this.setIndex(o),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(c,2));function y(M,v,T,w,A){let _=Math.cos(M),b=Math.sin(M),U=T/v*M,N=Math.cos(U);A.x=w*(2+N)*.5*_,A.y=w*(2+N)*b*.5,A.z=w*Math.sin(U)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tf(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},L0=class rf extends bt{constructor(t=new Fp(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new C,l=new C,h=new pe,c=new C,d=[],u=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(p,2));function x(){for(let M=0;M<i;M++)m(M);m(n===!1?i:0),y(),f()}function m(M){c=t.getPointAt(M/i,c);let v=s.normals[M],T=s.binormals[M];for(let w=0;w<=a;w++){let A=w/a*Math.PI*2,_=Math.sin(A),b=-Math.cos(A);l.x=b*v.x+_*T.x,l.y=b*v.y+_*T.y,l.z=b*v.z+_*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=c.x+r*l.x,o.y=c.y+r*l.y,o.z=c.z+r*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let M=1;M<=i;M++)for(let v=1;v<=a;v++){let T=(a+1)*(M-1)+(v-1),w=(a+1)*M+(v-1),A=(a+1)*M+v,_=(a+1)*(M-1)+v;g.push(T,w,_),g.push(w,A,_)}}function y(){for(let M=0;M<=i;M++)for(let v=0;v<=a;v++)h.x=M/i,h.y=v/a,p.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new rf(new wo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},N0=class extends bt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new C,a=new C;if(e.index!==null){let n=e.attributes.position,s=e.index,o=e.groups;o.length===0&&(o=[{start:0,count:s.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let c=o[l],d=c.start,u=c.count;for(let p=d,g=d+u;p<g;p+=3)for(let x=0;x<3;x++){let m=s.getX(p+x),f=s.getX(p+(x+1)%3);r.fromBufferAttribute(n,m),a.fromBufferAttribute(n,f),pd(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let n=e.attributes.position;for(let s=0,o=n.count/3;s<o;s++)for(let l=0;l<3;l++){let h=3*s+l,c=3*s+(l+1)%3;r.fromBufferAttribute(n,h),a.fromBufferAttribute(n,c),pd(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new tt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function pd(e,t,i){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(r)===!0||i.has(a)===!0?!1:(i.add(r),i.add(a),!0)}var fb=Object.freeze({__proto__:null,BoxGeometry:Cr,CapsuleGeometry:Vg,CircleGeometry:rc,ConeGeometry:Wg,CylinderGeometry:Cp,DodecahedronGeometry:Xg,EdgesGeometry:jg,ExtrudeGeometry:S0,IcosahedronGeometry:sc,LatheGeometry:w0,OctahedronGeometry:oc,PlaneGeometry:Xi,PolyhedronGeometry:bs,RingGeometry:A0,ShapeGeometry:R0,SphereGeometry:lc,TetrahedronGeometry:I0,TorusGeometry:hc,TorusKnotGeometry:P0,TubeGeometry:L0,WireframeGeometry:N0});function En(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(fd(a))a.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(fd(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Ni(e){let t={};for(let i=0;i<e.length;i++){let r=En(e[i]);for(let a in r)t[a]=r[a]}return t}function fd(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function D0(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function af(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ft.workingColorSpace}var fr={clone:En,merge:Ni},U0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wt=class extends pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U0,this.fragmentShader=O0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=En(e.uniforms),this.uniformsGroups=D0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Se().setHex(r.value);break;case"v2":this.uniforms[i].value=new pe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new C().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Nt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ut().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Qe().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},cc=class extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},mi=class extends pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dh,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mr=class extends mi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var F0=class extends pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},B0=class extends pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function na(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function _o(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function z0(e){function t(a,n){return e[a]-e[n]}let i=e.length,r=new Array(i);for(let a=0;a!==i;++a)r[a]=a;return r.sort(t),r}function md(e,t,i){let r=e.length,a=new e.constructor(r);for(let n=0,s=0;s!==r;++n){let o=i[n]*t;for(let l=0;l!==t;++l)a[s++]=e[o+l]}return a}function H0(e,t,i,r){let a=1,n=e[0];for(;n!==void 0&&n[r]===void 0;)n=e[a++];if(n===void 0)return;let s=n[r];if(s!==void 0)if(Array.isArray(s))do s=n[r],s!==void 0&&(t.push(n.time),i.push(...s)),n=e[a++];while(n!==void 0);else if(s.toArray!==void 0)do s=n[r],s!==void 0&&(t.push(n.time),s.toArray(i,i.length)),n=e[a++];while(n!==void 0);else do s=n[r],s!==void 0&&(t.push(n.time),i.push(s)),n=e[a++];while(n!==void 0)}var Ra=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},k0=class extends Ra{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case Au:a=e,s=2*t-i;break;case Ru:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Au:n=e,o=2*i-t;break;case Ru:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-t)/(r-t),g=p*p,x=g*p,m=-d*x+2*d*g-d*p,f=(1+d)*x+(-1.5-2*d)*g+(-.5+d)*p+1,y=(-1-u)*x+(1.5+u)*g+.5*p,M=u*x-u*g;for(let v=0;v!==s;++v)a[v]=m*n[h+v]+f*n[l+v]+y*n[o+v]+M*n[c+v];return a}},G0=class extends Ra{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),c=1-h;for(let d=0;d!==s;++d)a[d]=n[l+d]*c+n[o+d]*h;return a}},V0=class extends Ra{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},W0=class extends Ra{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this.inTangents,c=this.outTangents;if(!h||!c){let p=(i-t)/(r-t),g=1-p;for(let x=0;x!==s;++x)a[x]=n[l+x]*g+n[o+x]*p;return a}let d=s*2,u=e-1;for(let p=0;p!==s;++p){let g=n[l+p],x=n[o+p],m=u*d+p*2,f=c[m],y=c[m+1],M=e*d+p*2,v=h[M],T=h[M+1],w=j0(i,t,f,v,r);a[p]=nf(w,g,y,T,x)}return a}};function nf(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function X0(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function j0(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=nf(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=X0(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}var gr=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=na(t,this.TimeBufferType),this.values=na(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:na(e.times,Array),values:na(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),_o(e.settings)&&(i.settings={inTangents:na(e.settings.inTangents,Array),outTangents:na(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new V0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new G0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new k0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new W0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case xn:t=this.InterpolantFactoryMethodDiscrete;break;case yn:t=this.InterpolantFactoryMethodLinear;break;case gl:t=this.InterpolantFactoryMethodSmooth;break;case Eu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Je("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xn;case this.InterpolantFactoryMethodLinear:return yn;case this.InterpolantFactoryMethodSmooth:return gl;case this.InterpolantFactoryMethodBezier:return Eu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;_o(this.settings)&&(gd(this.settings.inTangents,e),gd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(st("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(st("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){st("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){st("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&Km(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){st("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===gl,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(r)o=!0;else{let c=s*i,d=c-i,u=c+i;for(let p=0;p!==i;++p){let g=t[c+p];if(g!==t[d+p]||g!==t[u+p]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*i,d=n*i;for(let u=0;u!==i;++u)t[d+u]=t[c+u]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,_o(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function gd(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}gr.prototype.ValueTypeName="";gr.prototype.TimeBufferType=Float32Array;gr.prototype.ValueBufferType=Float32Array;gr.prototype.DefaultInterpolation=yn;var Rn=class extends gr{constructor(e,t,i){super(e,t,i)}};Rn.prototype.ValueTypeName="bool";Rn.prototype.ValueBufferType=Array;Rn.prototype.DefaultInterpolation=xn;Rn.prototype.InterpolantFactoryMethodLinear=void 0;Rn.prototype.InterpolantFactoryMethodSmooth=void 0;var sf=class extends gr{constructor(e,t,i,r){super(e,t,i,r)}};sf.prototype.ValueTypeName="color";var Cn=class extends gr{constructor(e,t,i,r){super(e,t,i,r)}};Cn.prototype.ValueTypeName="number";var q0=class extends Ra{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let h=l+s;l!==h;l+=4)Jt.slerpFlat(a,0,n,l-s,n,l,o);return a}},Ca=class extends gr{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new q0(this.times,this.values,this.getValueSize(),e)}};Ca.prototype.ValueTypeName="quaternion";Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var In=class extends gr{constructor(e,t,i){super(e,t,i)}};In.prototype.ValueTypeName="string";In.prototype.ValueBufferType=Array;In.prototype.DefaultInterpolation=xn;In.prototype.InterpolantFactoryMethodLinear=void 0;In.prototype.InterpolantFactoryMethodSmooth=void 0;var Pn=class extends gr{constructor(e,t,i,r){super(e,t,i,r)}};Pn.prototype.ValueTypeName="vector";var uc=class{constructor(e="",t=-1,i=[],r=zm){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=$i(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let n=0,s=i.length;n!==s;++n)t.push(K0(i[n]).scale(r));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,n=i.length;a!==n;++a)t.push(gr.toJSON(i[a]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let a=t.length,n=[];for(let s=0;s<a;s++){let o=[],l=[];o.push((s+a-1)%a,s,(s+1)%a),l.push(0,1,0);let h=z0(o);o=md(o,1,h),l=md(l,1,h),!r&&o[0]===0&&(o.push(a),l.push(l[0])),n.push(new Cn(".morphTargetInfluences["+t[s].name+"]",o,l).scale(1/i))}return new this(e,-1,n)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},a=/^([\w-]*?)([\d]+)$/;for(let s=0,o=e.length;s<o;s++){let l=e[s],h=l.name.match(a);if(h&&h.length>1){let c=h[1],d=r[c];d||(r[c]=d=[]),d.push(l)}}let n=[];for(let s in r)n.push(this.CreateFromMorphTargetSequence(s,r[s],t,i));return n}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Y0(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cn;case"vector":case"vector2":case"vector3":case"vector4":return Pn;case"color":return sf;case"quaternion":return Ca;case"bool":case"boolean":return Rn;case"string":return In}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function K0(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Y0(e.type);if(e.times===void 0){let r=[],a=[];H0(e.keys,r,a,"value"),e.times=r,e.values=a}let i;return t.parse!==void 0?i=t.parse(e):i=new t(e.name,e.times,e.values,e.interpolation),_o(e.settings)&&(i.settings={inTangents:na(e.settings.inTangents,Float32Array),outTangents:na(e.settings.outTangents,Float32Array)}),i}var Gr={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(vd(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!vd(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function vd(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Z0=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){s++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=l.length;c<d;c+=2){let u=l[c],p=l[c+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},J0=new Z0,Ia=class{constructor(e){this.manager=e!==void 0?e:J0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ia.DEFAULT_MATERIAL_NAME="__DEFAULT";var kr={},$0=class extends Error{constructor(e,t){super(e),this.response=t}},dc=class extends Ia{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=Gr.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(kr[e]!==void 0){kr[e].push({onLoad:t,onProgress:i,onError:r});return}kr[e]=[],kr[e].push({onLoad:t,onProgress:i,onError:r});let n=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),s=this.mimeType,o=this.responseType;fetch(n).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Je("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=kr[e],c=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=d?parseInt(d):0,p=u!==0,g=0,x=new ReadableStream({start(m){f();function f(){c.read().then(({done:y,value:M})=>{if(y)m.close();else{g+=M.byteLength;let v=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:u});for(let T=0,w=h.length;T<w;T++){let A=h[T];A.onProgress&&A.onProgress(v)}m.enqueue(M),f()}},y=>{m.error(y)})}}});return new Response(x)}else throw new $0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,s));case"json":return l.json();default:if(s==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(s),c=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(c);return l.arrayBuffer().then(u=>d.decode(u))}}}).then(l=>{Gr.add(`file:${e}`,l);let h=kr[e];delete kr[e];for(let c=0,d=h.length;c<d;c++){let u=h[c];u.onLoad&&u.onLoad(l)}}).catch(l=>{let h=kr[e];if(h===void 0)throw this.manager.itemError(e),l;delete kr[e];for(let c=0,d=h.length;c<d;c++){let u=h[c];u.onError&&u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ja=new WeakMap,Q0=class extends Ia{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=Gr.get(`image:${e}`);if(n!==void 0){if(n.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0);else{let c=Ja.get(n);c===void 0&&(c=[],Ja.set(n,c)),c.push({onLoad:t,onError:r})}return n}let s=ds("img");function o(){h(),t&&t(this);let c=Ja.get(this)||[];for(let d=0;d<c.length;d++){let u=c[d];u.onLoad&&u.onLoad(this)}Ja.delete(this),a.manager.itemEnd(e)}function l(c){h(),r&&r(c),Gr.remove(`image:${e}`);let d=Ja.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onError&&p.onError(c)}Ja.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){s.removeEventListener("load",o,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),Gr.add(`image:${e}`,s),a.manager.itemStart(e),s.src=e,s}};var Fo=class extends Ia{constructor(e){super(e)}load(e,t,i,r){let a=new Ii,n=new Q0(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}},Bo=class extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},of=class extends Bo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Wl=new Qe,_d=new C,xd=new C,pc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=Wi,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sn,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;_d.setFromMatrixPosition(e.matrixWorld),t.position.copy(_d),xd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Wl,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===us||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(Wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},oo=new C,lo=new Jt,Sr=new C,fc=class extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=cr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oo,lo,Sr),Sr.x===1&&Sr.y===1&&Sr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,lo,Sr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(oo,lo,Sr),Sr.x===1&&Sr.y===1&&Sr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,lo,Sr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ra=new C,yd=new pe,Md=new pe,yi=class extends fc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=bn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(cn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bn*2*Math.atan(Math.tan(cn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ra.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ra.x,ra.y).multiplyScalar(-e/ra.z),ra.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ra.x,ra.y).multiplyScalar(-e/ra.z)}getViewSize(e,t){return this.getViewBounds(e,yd,Md),t.subVectors(Md,yd)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(cn*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ev=class extends pc{constructor(){super(new yi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=bn*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},zo=class extends Bo{constructor(e,t,i=0,r=Math.PI/3,a=0,n=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.distance=i,this.angle=r,this.penumbra=a,this.decay=n,this.map=null,this.shadow=new ev}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},tv=class extends pc{constructor(){super(new yi(90,1,.5,500)),this.isPointLightShadow=!0}},lf=class extends Bo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new tv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Pa=class extends fc{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},iv=class extends pc{constructor(){super(new Pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ss=class extends Bo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new iv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ln=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Xl=new WeakMap,hf=class extends Ia{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Je("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Je("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=Gr.get(`image-bitmap:${e}`);if(n!==void 0){if(a.manager.itemStart(e),n.then){n.then(l=>{Xl.has(n)===!0?(r&&r(Xl.get(n)),a.manager.itemError(e),a.manager.itemEnd(e)):(t&&t(l),a.manager.itemEnd(e))});return}setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0);return}let s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",s.headers=this.requestHeader,s.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let o=fetch(e,s).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},a.options,{colorSpaceConversion:"none"}))}).then(function(l){return Gr.add(`image-bitmap:${e}`,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){r&&r(l),Xl.set(o,l),Gr.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});Gr.add(`image-bitmap:${e}`,o),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var mb=new Qe,gb=new Qe,vb=new Qe;var $a=-90,Qa=1,rv=class extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new yi($a,Qa,e,t);r.layers=this.layers,this.add(r);let a=new yi($a,Qa,e,t);a.layers=this.layers,this.add(a);let n=new yi($a,Qa,e,t);n.layers=this.layers,this.add(n);let s=new yi($a,Qa,e,t);s.layers=this.layers,this.add(s);let o=new yi($a,Qa,e,t);o.layers=this.layers,this.add(o);let l=new yi($a,Qa,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===cr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===us)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(c,d,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},av=class extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},cf=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=nv.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function nv(){this._document.hidden===!1&&this.reset()}var _b=new C,xb=new Jt,yb=new C,Mb=new C,bb=new C;var Sb=new C,Tb=new Jt,Eb=new C,wb=new C;var mc="\\[\\]\\.:\\/",sv=new RegExp("["+mc+"]","g"),gc="[^"+mc+"]",ov="[^"+mc.replace("\\.","")+"]",lv=/((?:WC+[\/:])*)/.source.replace("WC",gc),hv=/(WCOD+)?/.source.replace("WCOD",ov),cv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gc),uv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gc),dv=new RegExp("^"+lv+hv+cv+uv+"$"),pv=["material","materials","bones","map"],fv=class{constructor(e,t,i){let r=i||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},kt=class nn{constructor(t,i,r){this.path=i,this.parsedPath=r||nn.parseTrackName(i),this.node=nn.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new nn.Composite(t,i,r):new nn(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sv,"")}static parseTrackName(t){let i=dv.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);pv.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=nn.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Je("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){st("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){st("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){st("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){st("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){st("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=i.nodeName;st("PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=fv;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ab=new Float32Array(1);var Rb=new Qe;var gn,Cb=(gn=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},gn.prototype.isMatrix2=!0,gn),Ib=new pe;var Pb=new C,Lb=new C,Nb=new C,Db=new C,Ub=new C,Ob=new C,Fb=new C;var Bb=new C;var zb=new C,Hb=new Qe,kb=new Qe;var Gb=new C,Vb=new Se,Wb=new Se;var Xb=new C,jb=new C,qb=new C;var Yb=new C,Kb=new fc;var Zb=new Qi;var Jb=new C;function bd(e,t,i,r){let a=mv(r);switch(i){case Qd:return e*t;case Wh:return e*t/a.components*a.byteLength;case Xh:return e*t/a.components*a.byteLength;case Ea:return e*t*2/a.components*a.byteLength;case jh:return e*t*2/a.components*a.byteLength;case ep:return e*t*3/a.components*a.byteLength;case Ji:return e*t*4/a.components*a.byteLength;case qh:return e*t*4/a.components*a.byteLength;case uo:case po:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fo:case mo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case nh:case oh:return Math.max(e,16)*Math.max(t,8)/4;case ah:case sh:return Math.max(e,8)*Math.max(t,8)/2;case lh:case hh:case uh:case dh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ch:case yo:case ph:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case mh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case gh:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case vh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case _h:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case yh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Mh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case bh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Th:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Eh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case wh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ah:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Rh:case Ch:case Ih:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ph:case Lh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Mo:case Nh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function mv(e){switch(e){case Wi:case Kd:return{byteLength:1,components:1};case hs:case Zd:case fi:return{byteLength:2,components:1};case Gh:case Vh:return{byteLength:2,components:4};case Rr:case kh:case Zi:return{byteLength:4,components:1};case Jd:case $d:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function uf(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function gv(e){let t=new WeakMap;function i(o,l){let h=o.array,c=o.usage,d=h.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=e.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,h){let c=l.array,d=l.updateRanges;if(e.bindBuffer(h,o),d.length===0)e.bufferSubData(h,0,c);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];e.bufferSubData(h,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}var vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_v=`#ifdef USE_ALPHAHASH
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
#endif`,xv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sv=`#ifdef USE_AOMAP
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
#endif`,Tv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ev=`#ifdef USE_BATCHING
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
#endif`,wv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Av=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Iv=`#ifdef USE_IRIDESCENCE
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
#endif`,Pv=`#ifdef USE_BUMPMAP
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
#endif`,Lv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hv=`#define PI 3.141592653589793
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
} // validated`,kv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gv=`vec3 transformedNormal = objectNormal;
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
#endif`,Vv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kv=`#ifdef USE_ENVMAP
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
#endif`,Zv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jv=`#ifdef USE_ENVMAP
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
#endif`,$v=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qv=`#ifdef USE_ENVMAP
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
#endif`,e_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a_=`#ifdef USE_GRADIENTMAP
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
}`,n_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,h_=`#ifdef USE_ENVMAP
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
#endif`,c_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f_=`PhysicalMaterial material;
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
#endif`,m_=`uniform sampler2D dfgLUT;
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
}`,g_=`
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
#endif`,v_=`#if defined( RE_IndirectDiffuse )
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
#endif`,__=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A_=`#if defined( USE_POINTS_UV )
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
#endif`,R_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N_=`#ifdef USE_MORPHTARGETS
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
#endif`,D_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,H_=`#ifdef USE_NORMALMAP
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
#endif`,k_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ix=`float getShadowMask() {
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
}`,rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ax=`#ifdef USE_SKINNING
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
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sx=`#ifdef USE_SKINNING
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
#endif`,ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ux=`#ifdef USE_TRANSMISSION
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
#endif`,dx=`#ifdef USE_TRANSMISSION
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_x=`uniform sampler2D t2D;
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`#include <common>
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
}`,Tx=`#if DEPTH_PACKING == 3200
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
}`,Ex=`#define DISTANCE
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
}`,wx=`#define DISTANCE
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`uniform float scale;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Nx=`#define LAMBERT
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
}`,Dx=`#define LAMBERT
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
}`,Ux=`#define MATCAP
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
}`,Ox=`#define MATCAP
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
}`,Fx=`#define NORMAL
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
}`,Bx=`#define NORMAL
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
}`,zx=`#define PHONG
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
}`,Hx=`#define PHONG
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
}`,kx=`#define STANDARD
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
}`,Gx=`#define STANDARD
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
}`,Vx=`#define TOON
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
}`,Wx=`#define TOON
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
}`,Xx=`uniform float size;
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
}`,jx=`uniform vec3 diffuse;
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
}`,qx=`#include <common>
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
}`,Yx=`uniform vec3 color;
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
}`,Kx=`uniform float rotation;
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
}`,Zx=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:vv,alphahash_pars_fragment:_v,alphamap_fragment:xv,alphamap_pars_fragment:yv,alphatest_fragment:Mv,alphatest_pars_fragment:bv,aomap_fragment:Sv,aomap_pars_fragment:Tv,batching_pars_vertex:Ev,batching_vertex:wv,begin_vertex:Av,beginnormal_vertex:Rv,bsdfs:Cv,iridescence_fragment:Iv,bumpmap_pars_fragment:Pv,clipping_planes_fragment:Lv,clipping_planes_pars_fragment:Nv,clipping_planes_pars_vertex:Dv,clipping_planes_vertex:Uv,color_fragment:Ov,color_pars_fragment:Fv,color_pars_vertex:Bv,color_vertex:zv,common:Hv,cube_uv_reflection_fragment:kv,defaultnormal_vertex:Gv,displacementmap_pars_vertex:Vv,displacementmap_vertex:Wv,emissivemap_fragment:Xv,emissivemap_pars_fragment:jv,colorspace_fragment:qv,colorspace_pars_fragment:Yv,envmap_fragment:Kv,envmap_common_pars_fragment:Zv,envmap_pars_fragment:Jv,envmap_pars_vertex:$v,envmap_physical_pars_fragment:h_,envmap_vertex:Qv,fog_vertex:e_,fog_pars_vertex:t_,fog_fragment:i_,fog_pars_fragment:r_,gradientmap_pars_fragment:a_,lightmap_pars_fragment:n_,lights_lambert_fragment:s_,lights_lambert_pars_fragment:o_,lights_pars_begin:l_,lights_toon_fragment:c_,lights_toon_pars_fragment:u_,lights_phong_fragment:d_,lights_phong_pars_fragment:p_,lights_physical_fragment:f_,lights_physical_pars_fragment:m_,lights_fragment_begin:g_,lights_fragment_maps:v_,lights_fragment_end:__,lightprobes_pars_fragment:x_,logdepthbuf_fragment:y_,logdepthbuf_pars_fragment:M_,logdepthbuf_pars_vertex:b_,logdepthbuf_vertex:S_,map_fragment:T_,map_pars_fragment:E_,map_particle_fragment:w_,map_particle_pars_fragment:A_,metalnessmap_fragment:R_,metalnessmap_pars_fragment:C_,morphinstance_vertex:I_,morphcolor_vertex:P_,morphnormal_vertex:L_,morphtarget_pars_vertex:N_,morphtarget_vertex:D_,normal_fragment_begin:U_,normal_fragment_maps:O_,normal_pars_fragment:F_,normal_pars_vertex:B_,normal_vertex:z_,normalmap_pars_fragment:H_,clearcoat_normal_fragment_begin:k_,clearcoat_normal_fragment_maps:G_,clearcoat_pars_fragment:V_,iridescence_pars_fragment:W_,opaque_fragment:X_,packing:j_,premultiplied_alpha_fragment:q_,project_vertex:Y_,dithering_fragment:K_,dithering_pars_fragment:Z_,roughnessmap_fragment:J_,roughnessmap_pars_fragment:$_,shadowmap_pars_fragment:Q_,shadowmap_pars_vertex:ex,shadowmap_vertex:tx,shadowmask_pars_fragment:ix,skinbase_vertex:rx,skinning_pars_vertex:ax,skinning_vertex:nx,skinnormal_vertex:sx,specularmap_fragment:ox,specularmap_pars_fragment:lx,tonemapping_fragment:hx,tonemapping_pars_fragment:cx,transmission_fragment:ux,transmission_pars_fragment:dx,uv_pars_fragment:px,uv_pars_vertex:fx,uv_vertex:mx,worldpos_vertex:gx,background_vert:vx,background_frag:_x,backgroundCube_vert:xx,backgroundCube_frag:yx,cube_vert:Mx,cube_frag:bx,depth_vert:Sx,depth_frag:Tx,distance_vert:Ex,distance_frag:wx,equirect_vert:Ax,equirect_frag:Rx,linedashed_vert:Cx,linedashed_frag:Ix,meshbasic_vert:Px,meshbasic_frag:Lx,meshlambert_vert:Nx,meshlambert_frag:Dx,meshmatcap_vert:Ux,meshmatcap_frag:Ox,meshnormal_vert:Fx,meshnormal_frag:Bx,meshphong_vert:zx,meshphong_frag:Hx,meshphysical_vert:kx,meshphysical_frag:Gx,meshtoon_vert:Vx,meshtoon_frag:Wx,points_vert:Xx,points_frag:jx,shadow_vert:qx,shadow_frag:Yx,sprite_vert:Kx,sprite_frag:Zx},Ie={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Er={basic:{uniforms:Ni([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Ni([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Ni([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Ni([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Ni([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Se(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Ni([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Ni([Ie.points,Ie.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Ni([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Ni([Ie.common,Ie.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Ni([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Ni([Ie.sprite,Ie.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Ni([Ie.common,Ie.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Ni([Ie.lights,Ie.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Er.physical={uniforms:Ni([Er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var ho={r:0,b:0,g:0},Jx=new Qe,df=new ut;df.set(-1,0,0,0,1,0,0,0,1);function $x(e,t,i,r,a,n){let s=new Se(0),o=a===!0?0:1,l,h,c=null,d=0,u=null;function p(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let v=y.backgroundBlurriness>0;M=t.get(M,v)}return M}function g(y){let M=!1,v=p(y);v===null?m(s,o):v&&v.isColor&&(m(v,1),M=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,n):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function x(y,M){let v=p(M);v&&(v.isCubeTexture||v.mapping===No)?(h===void 0&&(h=new gt(new Cr(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:En(Er.backgroundCube.uniforms),vertexShader:Er.backgroundCube.vertexShader,fragmentShader:Er.backgroundCube.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(df),h.material.toneMapped=ft.getTransfer(v.colorSpace)!==Lt,(c!==v||d!==v.version||u!==e.toneMapping)&&(h.material.needsUpdate=!0,c=v,d=v.version,u=e.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new gt(new Xi(2,2),new Wt({name:"BackgroundMaterial",uniforms:En(Er.background.uniforms),vertexShader:Er.background.vertexShader,fragmentShader:Er.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ft.getTransfer(v.colorSpace)!==Lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||d!==v.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,c=v,d=v.version,u=e.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(ho,af(e)),i.buffers.color.setClear(ho.r,ho.g,ho.b,M,n)}function f(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(y,M=1){s.set(y),o=M,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(s,o)},render:g,addToRenderList:x,dispose:f}}function Qx(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=u(null),n=a,s=!1;function o(N,D,Q,F,P){let G=!1,z=d(N,F,Q,D);n!==z&&(n=z,h(n.object)),G=p(N,F,Q,P),G&&g(N,F,Q,P),P!==null&&t.update(P,e.ELEMENT_ARRAY_BUFFER),(G||s)&&(s=!1,v(N,D,Q,F),P!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return e.createVertexArray()}function h(N){return e.bindVertexArray(N)}function c(N){return e.deleteVertexArray(N)}function d(N,D,Q,F){let P=F.wireframe===!0,G=r[D.id];G===void 0&&(G={},r[D.id]=G);let z=N.isInstancedMesh===!0?N.id:0,re=G[z];re===void 0&&(re={},G[z]=re);let X=re[Q.id];X===void 0&&(X={},re[Q.id]=X);let j=X[P];return j===void 0&&(j=u(l()),X[P]=j),j}function u(N){let D=[],Q=[],F=[];for(let P=0;P<i;P++)D[P]=0,Q[P]=0,F[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Q,attributeDivisors:F,object:N,attributes:{},index:null}}function p(N,D,Q,F){let P=n.attributes,G=D.attributes,z=0,re=Q.getAttributes();for(let X in re)if(re[X].location>=0){let j=P[X],te=G[X];if(te===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(te=N.instanceColor)),j===void 0||j.attribute!==te||te&&j.data!==te.data)return!0;z++}return n.attributesNum!==z||n.index!==F}function g(N,D,Q,F){let P={},G=D.attributes,z=0,re=Q.getAttributes();for(let X in re)if(re[X].location>=0){let j=G[X];j===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(j=N.instanceColor));let te={};te.attribute=j,j&&j.data&&(te.data=j.data),P[X]=te,z++}n.attributes=P,n.attributesNum=z,n.index=F}function x(){let N=n.newAttributes;for(let D=0,Q=N.length;D<Q;D++)N[D]=0}function m(N){f(N,0)}function f(N,D){let Q=n.newAttributes,F=n.enabledAttributes,P=n.attributeDivisors;Q[N]=1,F[N]===0&&(e.enableVertexAttribArray(N),F[N]=1),P[N]!==D&&(e.vertexAttribDivisor(N,D),P[N]=D)}function y(){let N=n.newAttributes,D=n.enabledAttributes;for(let Q=0,F=D.length;Q<F;Q++)D[Q]!==N[Q]&&(e.disableVertexAttribArray(Q),D[Q]=0)}function M(N,D,Q,F,P,G,z){z===!0?e.vertexAttribIPointer(N,D,Q,P,G):e.vertexAttribPointer(N,D,Q,F,P,G)}function v(N,D,Q,F){x();let P=F.attributes,G=Q.getAttributes(),z=D.defaultAttributeValues;for(let re in G){let X=G[re];if(X.location>=0){let j=P[re];if(j===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){let te=j.normalized,Pe=j.itemSize,Te=t.get(j);if(Te===void 0)continue;let qe=Te.buffer,He=Te.type,$=Te.bytesPerElement,ne=He===e.INT||He===e.UNSIGNED_INT||j.gpuType===kh;if(j.isInterleavedBufferAttribute){let ue=j.data,Ee=ue.stride,Ke=j.offset;if(ue.isInstancedInterleavedBuffer){for(let he=0;he<X.locationSize;he++)f(X.location+he,ue.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let he=0;he<X.locationSize;he++)m(X.location+he);e.bindBuffer(e.ARRAY_BUFFER,qe);for(let he=0;he<X.locationSize;he++)M(X.location+he,Pe/X.locationSize,He,te,Ee*$,(Ke+Pe/X.locationSize*he)*$,ne)}else{if(j.isInstancedBufferAttribute){for(let ue=0;ue<X.locationSize;ue++)f(X.location+ue,j.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ue=0;ue<X.locationSize;ue++)m(X.location+ue);e.bindBuffer(e.ARRAY_BUFFER,qe);for(let ue=0;ue<X.locationSize;ue++)M(X.location+ue,Pe/X.locationSize,He,te,Pe*$,Pe/X.locationSize*ue*$,ne)}}else if(z!==void 0){let te=z[re];if(te!==void 0)switch(te.length){case 2:e.vertexAttrib2fv(X.location,te);break;case 3:e.vertexAttrib3fv(X.location,te);break;case 4:e.vertexAttrib4fv(X.location,te);break;default:e.vertexAttrib1fv(X.location,te)}}}}y()}function T(){b();for(let N in r){let D=r[N];for(let Q in D){let F=D[Q];for(let P in F){let G=F[P];for(let z in G)c(G[z].object),delete G[z];delete F[P]}}delete r[N]}}function w(N){if(r[N.id]===void 0)return;let D=r[N.id];for(let Q in D){let F=D[Q];for(let P in F){let G=F[P];for(let z in G)c(G[z].object),delete G[z];delete F[P]}}delete r[N.id]}function A(N){for(let D in r){let Q=r[D];for(let F in Q){let P=Q[F];if(P[N.id]===void 0)continue;let G=P[N.id];for(let z in G)c(G[z].object),delete G[z];delete P[N.id]}}}function _(N){for(let D in r){let Q=r[D],F=N.isInstancedMesh===!0?N.id:0,P=Q[F];if(P!==void 0){for(let G in P){let z=P[G];for(let re in z)c(z[re].object),delete z[re];delete P[G]}delete Q[F],Object.keys(Q).length===0&&delete r[D]}}}function b(){U(),s=!0,n!==a&&(n=a,h(n.object))}function U(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:b,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function ey(e,t,i){let r;function a(l){r=l}function n(l,h){e.drawArrays(r,l,h),i.update(h,r,1)}function s(l,h,c){c!==0&&(e.drawArraysInstanced(r,l,h,c),i.update(h,r,c))}function o(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,c);let d=0;for(let u=0;u<c;u++)d+=h[u];i.update(d,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function ty(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==Ji&&r.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Wi&&A!==Zi&&!_&&r.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(Je("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=i.logarithmicDepthBuffer===!0,u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&u===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,maxSamples:T,samples:w}}function iy(e){let t=this,i=null,r=0,a=!1,n=!1,s=new aa,o=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||r!==0||a;return a=u,r=d.length,p},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,u){i=c(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=e.get(d);if(!a||g===null||g.length===0||n&&!m)n?c(null):h();else{let y=n?0:r,M=y*4,v=f.clippingState||null;l.value=v,v=c(g,u,M,p);for(let T=0;T!==M;++T)v[T]=i[T];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(d,u,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,v=p;M!==x;++M,v+=4)s.copy(d[M]).applyMatrix4(y,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var on=4,ry=6,ay=20,ny=256,Zn=new Pa,Sd=new Se,jl=null,ql=0,Yl=0,Kl=!1,sy=new C,_a=new C,Td=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=sy}=a;jl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jl,ql,Yl),this._renderer.xr.enabled=Kl,e.scissorTest=!1,en(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sa||e.mapping===_n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:fi,format:Ji,colorSpace:zi,depthBuffer:!1},r=Ed(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ed(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=oy(a)),this._blurMaterial=hy(a,e,t),this._ggxMaterial=ly(a,e,t)}return r}_compileMaterial(e){let t=new gt(new bt,e);this._renderer.compile(t,Zn)}_sceneToCubeUV(e,t,i,r,a){let n=new yi(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(Sd),l.toneMapping=Ar,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gt(new Cr,new Mi({name:"PMREM.Background",side:Ci,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,u=d.material,p=!1,g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,p=!0):(u.color.copy(Sd),p=!0);for(let x=0;x<6;x++){let m=x%3;m===0?(n.up.set(0,s[x],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[x],a.y,a.z)):m===1?(n.up.set(0,0,s[x]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[x],a.z)):(n.up.set(0,s[x],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[x]));let f=this._cubeSize;en(r,m*f,x>2?f:0,f,f),l.setRenderTarget(r),p&&l.render(d,n),l.render(e,n)}l.toneMapping=c,l.autoClear=h,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Sa||e.mapping===_n;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wd());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;en(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,Zn)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),c=Math.sqrt(l*l-h*h),d=l*1.25,u=c*d,{_lodMax:p}=this,g=this._sizeLods[i],x=3*g*(i>p-on?i-p+on:0),m=4*(this._cubeSize-g);o.envMap.value=e.texture,o.roughness.value=u,o.mipInt.value=p-t,en(a,x,m,3*g,2*g),r.setRenderTarget(a),r.render(s,Zn),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=p-i,en(e,x,m,3*g,2*g),r.setRenderTarget(e),r.render(s,Zn)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let l=s.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[r],c=3*h*(r>this._lodMax-on?r-this._lodMax+on:0),d=4*(this._cubeSize-h);en(t,c,d,3*h,2*h),n.setRenderTarget(t),n.render(o,Zn)}};function oy(e){let t=[],i=[],r=e,a=e-on+1+ry;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let o=1/(s-2),l=-o,h=1+o,c=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,u=6,p=3,g=new Float32Array(p*u*d),x=new Float32Array(p*u*d);for(let f=0;f<d;f++){let y=f%3*2/3-1,M=f>2?0:-1,v=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];g.set(v,p*u*f);for(let T=0;T<u;T++){let w=c[T*2]*2-1,A=c[T*2+1]*2-1;f===0?_a.set(1,A,w):f===1?_a.set(-w,1,-A):f===2?_a.set(-w,A,1):f===3?_a.set(-1,A,-w):f===4?_a.set(-w,-1,A):_a.set(w,A,-1),_a.toArray(x,(f*u+T)*p)}}let m=new bt;m.setAttribute("position",new Vt(g,p)),m.setAttribute("outputDirection",new Vt(x,p)),i.push(new gt(m,null)),r>on&&r--}return{lodMeshes:i,sizeLods:t}}function Ed(e,t,i){let r=new oi(e,t,i);return r.texture.mapping=No,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function en(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function ly(e,t,i){return new Wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ny,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function hy(e,t,i){return new Wt({name:"SphericalGaussianBlur",defines:{SAMPLES:ay,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function wd(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Ad(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Ho(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var pf=class extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cr(5,5,5),a=new Wt({name:"CubemapFromEquirect",uniforms:En(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ci,blending:ur});a.uniforms.tEquirect.value=t;let n=new gt(r,a),s=t.minFilter;return t.minFilter===wr&&(t.minFilter=Yt),new rv(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function cy(e){let t=new WeakMap,i=new WeakMap,r=null;function a(u,p=!1){return u==null?null:p?s(u):n(u)}function n(u){if(u&&u.isTexture){let p=u.mapping;if(p===fl||p===ml)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new pf(g.height);return x.fromEquirectangularTexture(e,u),t.set(u,x),u.addEventListener("dispose",h),o(x.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let p=u.mapping,g=p===fl||p===ml,x=p===Sa||p===_n;if(g||x){let m=i.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return r===null&&(r=new Td(e)),m=g?r.fromEquirectangular(u,m):r.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return g&&y&&y.height>0||x&&y&&l(y)?(r===null&&(r=new Td(e)),m=g?r.fromEquirectangular(u):r.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",c),m.texture):null}}}return u}function o(u,p){return p===fl?u.mapping=Sa:p===ml&&(u.mapping=_n),u}function l(u){let p=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&p++;return p===g}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=i.get(p);g!==void 0&&(i.delete(p),g.dispose())}function d(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:d}}function uy(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&hn("WebGLRenderer: "+r+" extension not supported."),a}}}function dy(e,t,i,r){let a={},n=new WeakMap;function s(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",s),delete a[u.id];let p=n.get(u);p&&(t.remove(p),n.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function o(d,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,i.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)t.update(u[p],e.ARRAY_BUFFER)}function h(d){let u=[],p=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(p!==null){let y=p.array;x=p.version;for(let M=0,v=y.length;M<v;M+=3){let T=y[M+0],w=y[M+1],A=y[M+2];u.push(T,w,w,A,A,T)}}else{let y=g.array;x=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){let T=M+0,w=M+1,A=M+2;u.push(T,w,w,A,A,T)}}let m=new(g.count>=65535?mp:fp)(u,1);m.version=x;let f=n.get(d);f&&t.remove(f),n.set(d,m)}function c(d){let u=n.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&h(d)}else h(d);return n.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function py(e,t,i){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,u){e.drawElements(r,u,n,d*s),i.update(u,r,1)}function h(d,u,p){p!==0&&(e.drawElementsInstanced(r,u,n,d*s,p),i.update(u,r,p))}function c(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,n,d,0,p);let g=0;for(let x=0;x<p;x++)g+=u[x];i.update(g,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function fy(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:st("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function my(e,t,i){let r=new WeakMap,a=new Nt;function n(s,o,l){let h=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0,u=r.get(o);if(u===void 0||u.count!==d){let p=function(){_.dispose(),r.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();let g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let T=o.attributes.position.count*v,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let A=new Float32Array(T*w*4*d),_=new op(A,T,w,d);_.type=Zi,_.needsUpdate=!0;let b=v*4;for(let U=0;U<d;U++){let N=f[U],D=y[U],Q=M[U],F=T*w*4*U;for(let P=0;P<N.count;P++){let G=P*b;g===!0&&(a.fromBufferAttribute(N,P),A[F+G+0]=a.x,A[F+G+1]=a.y,A[F+G+2]=a.z,A[F+G+3]=0),x===!0&&(a.fromBufferAttribute(D,P),A[F+G+4]=a.x,A[F+G+5]=a.y,A[F+G+6]=a.z,A[F+G+7]=0),m===!0&&(a.fromBufferAttribute(Q,P),A[F+G+8]=a.x,A[F+G+9]=a.y,A[F+G+10]=a.z,A[F+G+11]=Q.itemSize===4?a.w:1)}}u={count:d,texture:_,size:new pe(T,w)},r.set(o,u),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let p=0;for(let x=0;x<h.length;x++)p+=h[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:n}}function gy(e,t,i,r,a){let n=new WeakMap;function s(h){let c=a.render.frame,d=h.geometry,u=t.get(h,d);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),n.get(h)!==c&&(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,e.ARRAY_BUFFER),n.set(h,c))),h.isSkinnedMesh){let p=h.skeleton;n.get(p)!==c&&(p.update(),n.set(p,c))}return u}function o(){n=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),r.releaseStatesOfObject(c),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:s,dispose:o}}var vy={[Ao]:"LINEAR_TONE_MAPPING",[Ro]:"REINHARD_TONE_MAPPING",[Co]:"CINEON_TONE_MAPPING",[wn]:"ACES_FILMIC_TONE_MAPPING",[Po]:"AGX_TONE_MAPPING",[Lo]:"NEUTRAL_TONE_MAPPING",[Io]:"CUSTOM_TONE_MAPPING"};function _y(e,t,i,r,a,n){let s=new oi(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new bt;h.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new tt([0,2,0,0,2,0],2));let c=new cc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new gt(h,c),u=new Pa(-1,1,1,-1,0,1),p=null,g=null,x=!1,m,f=null,y=[],M=!1;this.setSize=function(v,T){s.setSize(v,T),o!==null&&o.setSize(v,T),l!==null&&l.setSize(v,T);for(let w=0;w<y.length;w++){let A=y[w];A.setSize&&A.setSize(v,T)}},this.setEffects=function(v){y=v,M=y.length>0&&y[0].isRenderPass===!0;let T=s.width,w=s.height;y.length>0&&o===null&&(o=new oi(T,w,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new oi(T,w,{type:fi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let _=y[A];_.setSize&&_.setSize(T,w)}},this.begin=function(v,T){if(x||v.toneMapping===Ar&&y.length===0)return!1;if(f=T,T!==null){let w=T.width,A=T.height;(s.width!==w||s.height!==A)&&this.setSize(w,A)}return M===!1&&v.setRenderTarget(s),m=v.toneMapping,v.toneMapping=Ar,!0},this.hasRenderPass=function(){return M},this.end=function(v,T){v.toneMapping=m,x=!0;let w=s,A=o;for(let _=0;_<y.length;_++){let b=y[_];b.enabled!==!1&&(b.render(v,A,w,T),b.needsSwap!==!1&&(w=A,A=A===o?l:o))}if(p!==v.outputColorSpace||g!==v.toneMapping){p=v.outputColorSpace,g=v.toneMapping,c.defines={},ft.getTransfer(p)===Lt&&(c.defines.SRGB_TRANSFER="");let _=vy[g];_&&(c.defines[_]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(f),v.render(d,u),f=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),c.dispose()}}var ff=new Ii,Bh=new ps(1,1),mf=new op,gf=new yg,vf=new Tp,Rd=[],Cd=[],Id=new Float32Array(16),Pd=new Float32Array(9),Ld=new Float32Array(4);function Nn(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=Rd[a];if(n===void 0&&(n=new Float32Array(a),Rd[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function li(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function hi(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function ko(e,t){let i=Cd[t];i===void 0&&(i=new Int32Array(t),Cd[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function xy(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function yy(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(li(i,t))return;e.uniform2fv(this.addr,t),hi(i,t)}}function My(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(li(i,t))return;e.uniform3fv(this.addr,t),hi(i,t)}}function by(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(li(i,t))return;e.uniform4fv(this.addr,t),hi(i,t)}}function Sy(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(li(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),hi(i,t)}else{if(li(i,r))return;Ld.set(r),e.uniformMatrix2fv(this.addr,!1,Ld),hi(i,r)}}function Ty(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(li(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),hi(i,t)}else{if(li(i,r))return;Pd.set(r),e.uniformMatrix3fv(this.addr,!1,Pd),hi(i,r)}}function Ey(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(li(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),hi(i,t)}else{if(li(i,r))return;Id.set(r),e.uniformMatrix4fv(this.addr,!1,Id),hi(i,r)}}function wy(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Ay(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(li(i,t))return;e.uniform2iv(this.addr,t),hi(i,t)}}function Ry(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(li(i,t))return;e.uniform3iv(this.addr,t),hi(i,t)}}function Cy(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(li(i,t))return;e.uniform4iv(this.addr,t),hi(i,t)}}function Iy(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Py(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(li(i,t))return;e.uniform2uiv(this.addr,t),hi(i,t)}}function Ly(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(li(i,t))return;e.uniform3uiv(this.addr,t),hi(i,t)}}function Ny(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(li(i,t))return;e.uniform4uiv(this.addr,t),hi(i,t)}}function Dy(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(Bh.compareFunction=i.isReversedDepthBuffer()?Zh:Kh,n=Bh):n=ff,i.setTexture2D(t||n,a)}function Uy(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||gf,a)}function Oy(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||vf,a)}function Fy(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||mf,a)}function By(e){switch(e){case 5126:return xy;case 35664:return yy;case 35665:return My;case 35666:return by;case 35674:return Sy;case 35675:return Ty;case 35676:return Ey;case 5124:case 35670:return wy;case 35667:case 35671:return Ay;case 35668:case 35672:return Ry;case 35669:case 35673:return Cy;case 5125:return Iy;case 36294:return Py;case 36295:return Ly;case 36296:return Ny;case 35678:case 36198:case 36298:case 36306:case 35682:return Dy;case 35679:case 36299:case 36307:return Uy;case 35680:case 36300:case 36308:case 36293:return Oy;case 36289:case 36303:case 36311:case 36292:return Fy}}function zy(e,t){e.uniform1fv(this.addr,t)}function Hy(e,t){let i=Nn(t,this.size,2);e.uniform2fv(this.addr,i)}function ky(e,t){let i=Nn(t,this.size,3);e.uniform3fv(this.addr,i)}function Gy(e,t){let i=Nn(t,this.size,4);e.uniform4fv(this.addr,i)}function Vy(e,t){let i=Nn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Wy(e,t){let i=Nn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Xy(e,t){let i=Nn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function jy(e,t){e.uniform1iv(this.addr,t)}function qy(e,t){e.uniform2iv(this.addr,t)}function Yy(e,t){e.uniform3iv(this.addr,t)}function Ky(e,t){e.uniform4iv(this.addr,t)}function Zy(e,t){e.uniform1uiv(this.addr,t)}function Jy(e,t){e.uniform2uiv(this.addr,t)}function $y(e,t){e.uniform3uiv(this.addr,t)}function Qy(e,t){e.uniform4uiv(this.addr,t)}function e1(e,t,i){let r=this.cache,a=t.length,n=ko(i,a);li(r,n)||(e.uniform1iv(this.addr,n),hi(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=Bh:s=ff;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function t1(e,t,i){let r=this.cache,a=t.length,n=ko(i,a);li(r,n)||(e.uniform1iv(this.addr,n),hi(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||gf,n[s])}function i1(e,t,i){let r=this.cache,a=t.length,n=ko(i,a);li(r,n)||(e.uniform1iv(this.addr,n),hi(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||vf,n[s])}function r1(e,t,i){let r=this.cache,a=t.length,n=ko(i,a);li(r,n)||(e.uniform1iv(this.addr,n),hi(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||mf,n[s])}function a1(e){switch(e){case 5126:return zy;case 35664:return Hy;case 35665:return ky;case 35666:return Gy;case 35674:return Vy;case 35675:return Wy;case 35676:return Xy;case 5124:case 35670:return jy;case 35667:case 35671:return qy;case 35668:case 35672:return Yy;case 35669:case 35673:return Ky;case 5125:return Zy;case 36294:return Jy;case 36295:return $y;case 36296:return Qy;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return r1}}var n1=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=By(t.type)}},s1=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a1(t.type)}},o1=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},Zl=/(\w+)(\])?(\[|\.)?/g;function Nd(e,t){e.seq.push(t),e.map[t.id]=t}function l1(e,t,i){let r=e.name,a=r.length;for(Zl.lastIndex=0;;){let n=Zl.exec(r),s=Zl.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){Nd(i,h===void 0?new n1(o,e,t):new s1(o,e,t));break}else{let c=i.map[o];c===void 0&&(c=new o1(o),Nd(i,c)),i=c}}}var xo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);l1(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function Dd(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var h1=37297,c1=0;function u1(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var Ud=new ut;function d1(e){ft._getMatrix(Ud,ft.workingColorSpace,e);let t=`mat3( ${Ud.elements.map(i=>i.toFixed(4))} )`;switch(ft.getTransfer(e)){case bo:return[t,"LinearTransferOETF"];case Lt:return[t,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Od(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+u1(e.getShaderSource(t),s)}else return a}function p1(e,t){let i=d1(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var f1={[Ao]:"Linear",[Ro]:"Reinhard",[Co]:"Cineon",[wn]:"ACESFilmic",[Po]:"AgX",[Lo]:"Neutral",[Io]:"Custom"};function m1(e,t){let i=f1[t];return i===void 0?(Je("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var co=new C;function g1(){ft.getLuminanceCoefficients(co);let e=co.x.toFixed(4),t=co.y.toFixed(4),i=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v1(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function _1(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function x1(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function es(e){return e!==""}function Fd(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function zh(e){return e.replace(y1,b1)}var M1=new Map;function b1(e,t){let i=pt[t];if(i===void 0){let r=M1.get(t);if(r!==void 0)i=pt[r],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return zh(i)}var S1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zd(e){return e.replace(S1,T1)}function T1(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Hd(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var E1={[ln]:"SHADOWMAP_TYPE_PCF",[$n]:"SHADOWMAP_TYPE_VSM"};function w1(e){return E1[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var A1={[Sa]:"ENVMAP_TYPE_CUBE",[_n]:"ENVMAP_TYPE_CUBE",[No]:"ENVMAP_TYPE_CUBE_UV"};function R1(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":A1[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var C1={[_n]:"ENVMAP_MODE_REFRACTION"};function I1(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":C1[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var P1={[qd]:"ENVMAP_BLENDING_MULTIPLY",[Om]:"ENVMAP_BLENDING_MIX",[Fm]:"ENVMAP_BLENDING_ADD"};function L1(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":P1[e.combine]||"ENVMAP_BLENDING_NONE"}function N1(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function D1(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=w1(i),h=R1(i),c=I1(i),d=L1(i),u=N1(i),p=v1(i),g=_1(n),x=a.createProgram(),m,f,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(es).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(es).join(`
`),f.length>0&&(f+=`
`)):(m=[Hd(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),f=[Hd(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ar?"#define TONE_MAPPING":"",i.toneMapping!==Ar?pt.tonemapping_pars_fragment:"",i.toneMapping!==Ar?m1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,p1("linearToOutputTexel",i.outputColorSpace),g1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(es).join(`
`)),s=zh(s),s=Fd(s,i),s=Bd(s,i),o=zh(o),o=Fd(o,i),o=Bd(o,i),s=zd(s),o=zd(o),i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",i.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=y+m+s,v=y+f+o,T=Dd(a,a.VERTEX_SHADER,M),w=Dd(a,a.FRAGMENT_SHADER,v);a.attachShader(x,T),a.attachShader(x,w),i.index0AttributeName!==void 0?a.bindAttribLocation(x,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function A(N){if(e.debug.checkShaderErrors){let D=a.getProgramInfoLog(x)||"",Q=a.getShaderInfoLog(T)||"",F=a.getShaderInfoLog(w)||"",P=D.trim(),G=Q.trim(),z=F.trim(),re=!0,X=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(re=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,x,T,w);else{let j=Od(a,T,"vertex"),te=Od(a,w,"fragment");st("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+P+`
`+j+`
`+te)}else P!==""?Je("WebGLProgram: Program Info Log:",P):(G===""||z==="")&&(X=!1);X&&(N.diagnostics={runnable:re,programLog:P,vertexShader:{log:G,prefix:m},fragmentShader:{log:z,prefix:f}})}a.deleteShader(T),a.deleteShader(w),_=new xo(a,x),b=x1(a,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=a.getProgramParameter(x,h1)),U},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=c1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}var U1=0,O1=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new F1(e),t.set(e,i)),i}},F1=class{constructor(e){this.id=U1++,this.code=e,this.usedTimes=0}};function B1(e){return e===Ea||e===yo||e===Mo}function z1(e,t,i,r,a,n){let s=new hp,o=new O1,l=new Set,h=[],c=new Map,d=r.logarithmicDepthBuffer,u=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,b,U,N,D,Q){let F=N.fog,P=D.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,re=t.get(_.envMap||G,z),X=re&&re.mapping===No?re.image.height:null,j=p[_.type];_.precision!==null&&(u=r.getMaxPrecision(_.precision),u!==_.precision&&Je("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let te=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Pe=te!==void 0?te.length:0,Te=0;P.morphAttributes.position!==void 0&&(Te=1),P.morphAttributes.normal!==void 0&&(Te=2),P.morphAttributes.color!==void 0&&(Te=3);let qe,He,$,ne;if(j){let se=Er[j];qe=se.vertexShader,He=se.fragmentShader}else{qe=_.vertexShader,He=_.fragmentShader;let se=o.getVertexShaderStage(_),de=o.getFragmentShaderStage(_);o.update(_,se,de),$=se.id,ne=de.id}let ue=e.getRenderTarget(),Ee=e.state.buffers.depth.getReversed(),Ke=D.isInstancedMesh===!0,he=D.isBatchedMesh===!0,Ge=!!_.map,oe=!!_.matcap,ae=!!re,me=!!_.aoMap,we=!!_.lightMap,Le=!!_.bumpMap&&_.wireframe===!1,Oe=!!_.normalMap,Ve=!!_.displacementMap,at=!!_.emissiveMap,it=!!_.metalnessMap,B=!!_.roughnessMap,wt=_.anisotropy>0,ct=_.clearcoat>0,ht=_.dispersion>0,R=_.retroreflectivity>0,S=_.iridescence>0,H=_.sheen>0,ee=_.transmission>0,ce=wt&&!!_.anisotropyMap,xe=ct&&!!_.clearcoatMap,Me=ct&&!!_.clearcoatNormalMap,W=ct&&!!_.clearcoatRoughnessMap,_e=S&&!!_.iridescenceMap,Re=S&&!!_.iridescenceThicknessMap,Fe=H&&!!_.sheenColorMap,ve=H&&!!_.sheenRoughnessMap,Xe=!!_.specularMap,Ze=!!_.specularColorMap,rt=!!_.specularIntensityMap,St=ee&&!!_.transmissionMap,V=ee&&!!_.thicknessMap,le=!!_.gradientMap,ge=!!_.alphaMap,Ne=_.alphaTest>0,O=!!_.alphaHash,I=!!_.extensions,L=Ar;_.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(L=e.toneMapping);let Z={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:qe,fragmentShader:He,defines:_.defines,customVertexShaderID:$,customFragmentShaderID:ne,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:he,batchingColor:he&&D._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&D.instanceColor!==null,instancingMorph:Ke&&D.morphTexture!==null,outputColorSpace:ue===null?e.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ge,matcap:oe,envMap:ae,envMapMode:ae&&re.mapping,envMapCubeUVHeight:X,aoMap:me,lightMap:we,bumpMap:Le,normalMap:Oe,displacementMap:Ve,emissiveMap:at,normalMapObjectSpace:Oe&&_.normalMapType===km,normalMapTangentSpace:Oe&&_.normalMapType===Dh,packedNormalMap:Oe&&_.normalMapType===Dh&&B1(_.normalMap.format),metalnessMap:it,roughnessMap:B,anisotropy:wt,anisotropyMap:ce,clearcoat:ct,clearcoatMap:xe,clearcoatNormalMap:Me,clearcoatRoughnessMap:W,dispersion:ht,retroreflection:R,iridescence:S,iridescenceMap:_e,iridescenceThicknessMap:Re,sheen:H,sheenColorMap:Fe,sheenRoughnessMap:ve,specularMap:Xe,specularColorMap:Ze,specularIntensityMap:rt,transmission:ee,transmissionMap:St,thicknessMap:V,gradientMap:le,opaque:_.transparent===!1&&_.blending===ts&&_.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ne,alphaHash:O,combine:_.combine,mapUv:Ge&&g(_.map.channel),aoMapUv:me&&g(_.aoMap.channel),lightMapUv:we&&g(_.lightMap.channel),bumpMapUv:Le&&g(_.bumpMap.channel),normalMapUv:Oe&&g(_.normalMap.channel),displacementMapUv:Ve&&g(_.displacementMap.channel),emissiveMapUv:at&&g(_.emissiveMap.channel),metalnessMapUv:it&&g(_.metalnessMap.channel),roughnessMapUv:B&&g(_.roughnessMap.channel),anisotropyMapUv:ce&&g(_.anisotropyMap.channel),clearcoatMapUv:xe&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:Me&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(_.sheenRoughnessMap.channel),specularMapUv:Xe&&g(_.specularMap.channel),specularColorMapUv:Ze&&g(_.specularColorMap.channel),specularIntensityMapUv:rt&&g(_.specularIntensityMap.channel),transmissionMapUv:St&&g(_.transmissionMap.channel),thicknessMapUv:V&&g(_.thicknessMap.channel),alphaMapUv:ge&&g(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Oe||wt),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Ge||ge),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&Oe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ee,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Te,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:L,decodeVideoTexture:Ge&&_.map.isVideoTexture===!0&&ft.getTransfer(_.map.colorSpace)===Lt,decodeVideoTextureEmissive:at&&_.emissiveMap.isVideoTexture===!0&&ft.getTransfer(_.emissiveMap.colorSpace)===Lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ri,flipSided:_.side===Ci,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:I&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(I&&_.extensions.multiDraw===!0||he)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Z.vertexUv1s=l.has(1),Z.vertexUv2s=l.has(2),Z.vertexUv3s=l.has(3),l.clear(),Z}function m(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)b.push(U),b.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(f(b,_),y(b,_),b.push(e.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function f(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function y(_,b){s.disableAll(),b.instancing&&s.enable(0),b.instancingColor&&s.enable(1),b.instancingMorph&&s.enable(2),b.matcap&&s.enable(3),b.envMap&&s.enable(4),b.normalMapObjectSpace&&s.enable(5),b.normalMapTangentSpace&&s.enable(6),b.clearcoat&&s.enable(7),b.iridescence&&s.enable(8),b.alphaTest&&s.enable(9),b.vertexColors&&s.enable(10),b.vertexAlphas&&s.enable(11),b.vertexUv1s&&s.enable(12),b.vertexUv2s&&s.enable(13),b.vertexUv3s&&s.enable(14),b.vertexTangents&&s.enable(15),b.anisotropy&&s.enable(16),b.alphaHash&&s.enable(17),b.batching&&s.enable(18),b.dispersion&&s.enable(19),b.retroreflection&&s.enable(24),b.batchingColor&&s.enable(20),b.gradientMap&&s.enable(21),b.packedNormalMap&&s.enable(22),b.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.reversedDepthBuffer&&s.enable(4),b.skinning&&s.enable(5),b.morphTargets&&s.enable(6),b.morphNormals&&s.enable(7),b.morphColors&&s.enable(8),b.premultipliedAlpha&&s.enable(9),b.shadowMapEnabled&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.decodeVideoTextureEmissive&&s.enable(20),b.alphaToCoverage&&s.enable(21),b.numLightProbeGrids>0&&s.enable(22),b.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function M(_){let b=p[_.type],U;if(b){let N=Er[b];U=fr.clone(N.uniforms)}else U=_.uniforms;return U}function v(_,b){let U=c.get(b);return U!==void 0?++U.usedTimes:(U=new D1(e,b,_,a),h.push(U),c.set(b,U)),U}function T(_){if(--_.usedTimes===0){let b=h.indexOf(_);h[b]=h[h.length-1],h.pop(),c.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:M,acquireProgram:v,releaseProgram:T,releaseShaderCache:w,programs:h,dispose:A}}function H1(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function k1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function kd(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Gd(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,x,m,f){let y=e[t];return y===void 0?(y={id:u.id,object:u,geometry:p,material:g,materialVariant:s(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:f},e[t]=y):(y.id=u.id,y.object=u,y.geometry=p,y.material=g,y.materialVariant=s(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=m,y.group=f),t++,y}function l(u,p,g,x,m,f,y){y.reversedDepth===!0&&(m=-m);let M=o(u,p,g,x,m,f);g.transmission>0?r.push(M):g.transparent===!0?a.push(M):i.push(M)}function h(u,p,g,x,m,f){let y=o(u,p,g,x,m,f);g.transmission>0?r.unshift(y):g.transparent===!0?a.unshift(y):i.unshift(y)}function c(u,p){i.length>1&&i.sort(u||k1),r.length>1&&r.sort(p||kd),a.length>1&&a.sort(p||kd)}function d(){for(let u=t,p=e.length;u<p;u++){let g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:h,finish:d,sort:c}}function G1(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new Gd,e.set(r,[s])):a>=n.length?(s=new Gd,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function V1(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new C,color:new Se};break;case"SpotLight":i={position:new C,direction:new C,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new C,color:new Se,distance:0,decay:0};break;case"HemisphereLight":i={direction:new C,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":i={color:new Se,position:new C,halfWidth:new C,halfHeight:new C};break}return e[t.id]=i,i}}}function W1(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var X1=0;function j1(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function q1(e){let t=new V1,i=W1(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new C);let a=new C,n=new Qe,s=new Qe;function o(h){let c=0,d=0,u=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,y=0,M=0,v=0,T=0,w=0,A=0,_=0,b=0,U=0;h.sort(j1);for(let D=0,Q=h.length;D<Q;D++){let F=h[D],P=F.color,G=F.intensity,z=F.distance,re=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ea?re=F.shadow.map.texture:re=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)c+=P.r*G,d+=P.g*G,u+=P.b*G;else if(F.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(F.sh.coefficients[X],G);U++}else if(F.isSunLight){let X=t.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let j=F.shadow,te=i.get(F);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),r.sunShadow[g]=te,r.sunShadowMap[g]=re;let Pe=j.getViewportCount();for(let Te=0;Te<Pe;Te++)r.sunShadowMatrix[x+Te]=j.getMatrix(Te),r.sunShadowCascade[x+Te]=j._cascadeData[Te];x+=Pe,g++}r.sun[p]=X,p++}else if(F.isDirectionalLight){let X=t.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let j=F.shadow,te=i.get(F);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,r.directionalShadow[m]=te,r.directionalShadowMap[m]=re,r.directionalShadowMatrix[m]=F.shadow.matrix,T++}r.directional[m]=X,m++}else if(F.isSpotLight){let X=t.get(F);X.position.setFromMatrixPosition(F.matrixWorld),X.color.copy(P).multiplyScalar(G),X.distance=z,X.coneCos=Math.cos(F.angle),X.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),X.decay=F.decay,r.spot[y]=X;let j=F.shadow;if(F.map&&(r.spotLightMap[_]=F.map,_++,j.updateMatrices(F),F.castShadow&&b++),r.spotLightMatrix[y]=j.matrix,F.castShadow){let te=i.get(F);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,r.spotShadow[y]=te,r.spotShadowMap[y]=re,A++}y++}else if(F.isRectAreaLight){let X=t.get(F);X.color.copy(P).multiplyScalar(G),X.halfWidth.set(F.width*.5,0,0),X.halfHeight.set(0,F.height*.5,0),r.rectArea[M]=X,M++}else if(F.isPointLight){let X=t.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),X.distance=F.distance,X.decay=F.decay,F.castShadow){let j=F.shadow,te=i.get(F);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,r.pointShadow[f]=te,r.pointShadowMap[f]=re,r.pointShadowMatrix[f]=F.shadow.matrix,w++}r.point[f]=X,f++}else if(F.isHemisphereLight){let X=t.get(F);X.skyColor.copy(F.color).multiplyScalar(G),X.groundColor.copy(F.groundColor).multiplyScalar(G),r.hemi[v]=X,v++}}M>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=d,r.ambient[2]=u;let N=r.hash;(N.sunLength!==p||N.directionalLength!==m||N.pointLength!==f||N.spotLength!==y||N.rectAreaLength!==M||N.hemiLength!==v||N.numSunShadows!==g||N.numDirectionalShadows!==T||N.numPointShadows!==w||N.numSpotShadows!==A||N.numSpotMaps!==_||N.numLightProbes!==U)&&(r.sun.length=p,r.directional.length=m,r.spot.length=y,r.rectArea.length=M,r.point.length=f,r.hemi.length=v,r.sunShadow.length=g,r.sunShadowMap.length=g,r.sunShadowMatrix.length=x,r.sunShadowCascade.length=x,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.directionalShadowMatrix.length=T,r.pointShadow.length=w,r.pointShadowMap.length=w,r.pointShadowMatrix.length=w,r.spotShadow.length=A,r.spotShadowMap.length=A,r.spotLightMatrix.length=A+_-b,r.spotLightMap.length=_,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=U,N.sunLength=p,N.directionalLength=m,N.pointLength=f,N.spotLength=y,N.rectAreaLength=M,N.hemiLength=v,N.numSunShadows=g,N.numDirectionalShadows=T,N.numPointShadows=w,N.numSpotShadows=A,N.numSpotMaps=_,N.numLightProbes=U,r.version=X1++)}function l(h,c){let d=0,u=0,p=0,g=0,x=0,m=0,f=c.matrixWorldInverse;for(let y=0,M=h.length;y<M;y++){let v=h[y];if(v.isSunLight){let T=r.sun[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),d++}else if(v.isDirectionalLight){let T=r.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),u++}else if(v.isSpotLight){let T=r.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),g++}else if(v.isRectAreaLight){let T=r.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),s.identity(),n.copy(v.matrixWorld),n.premultiply(f),s.extractRotation(n),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),x++}else if(v.isPointLight){let T=r.point[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let T=r.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:r}}function Vd(e){let t=new q1(e),i=[],r=[],a=[];function n(u){d.camera=u,i.length=0,r.length=0,a.length=0}function s(u){i.push(u)}function o(u){r.push(u)}function l(u){a.push(u)}function h(){t.setup(i)}function c(u){t.setupView(i,u)}let d={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:d,setupLights:h,setupLightsView:c,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function Y1(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Vd(e),t.set(a,[o])):n>=s.length?(o=new Vd(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var K1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z1=`uniform sampler2D shadow_pass;
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
}`,J1=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],$1=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Wd=new Qe,Jn=new C,Jl=new C;function Q1(e,t,i){let r=new Sn,a=new pe,n=new pe,s=new Nt,o=new F0,l=new B0,h={},c=i.maxTextureSize,d={[Wr]:Ci,[Ci]:Wr,[Ri]:Ri},u=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:K1,fragmentShader:Z1}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new bt;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new gt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ln;let f=this.type;this.render=function(w,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===vm&&(Je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ln);let b=e.getRenderTarget(),U=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),D=e.state;D.setBlending(ur),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let Q=f!==this.type;Q&&A.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(P=>P.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,P=w.length;F<P;F++){let G=w[F],z=G.shadow;if(z===void 0){Je("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);let re=z.getFrameExtents();a.multiply(re),n.copy(z.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/re.x),a.x=n.x*re.x,z.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/re.y),a.y=n.y*re.y,z.mapSize.y=n.y));let X=e.state.buffers.depth.getReversed();if(z.camera._reversedDepth=X,z.map===null||Q===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===$n){if(G.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new oi(a.x,a.y,{format:Ea,type:fi,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new ps(a.x,a.y,Zi),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=Xr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ri,z.map.depthTexture.magFilter=ri}else G.isPointLight?(z.map=new pf(a.x),z.map.depthTexture=new Gg(a.x,Rr)):(z.map=new oi(a.x,a.y),z.map.depthTexture=new ps(a.x,a.y,Rr)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=Xr,this.type===ln?(z.map.depthTexture.compareFunction=X?Zh:Kh,z.map.depthTexture.minFilter=Yt,z.map.depthTexture.magFilter=Yt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ri,z.map.depthTexture.magFilter=ri);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==a.x||z.map.height!==a.y)&&z.map.setSize(a.x,a.y);let j=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();G.isPointLight!==!0&&z.updateMatrices(G,_);for(let te=0;te<j;te++){let Pe=z.getCamera(te);if(G.isPointLight){let Te=z.camera,qe=z.matrix,He=G.distance||Te.far;He!==Te.far&&(Te.far=He,Te.updateProjectionMatrix()),Jn.setFromMatrixPosition(G.matrixWorld),Te.position.copy(Jn),Jl.copy(Te.position),Jl.add(J1[te]),Te.up.copy($1[te]),Te.lookAt(Jl),Te.updateMatrixWorld(),qe.makeTranslation(-Jn.x,-Jn.y,-Jn.z),Wd.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Wd,Te.coordinateSystem,Te.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)e.setRenderTarget(z.map,te),e.clear();else{te===0&&(e.setRenderTarget(z.map),e.clear());let Te=z.getViewport(te);s.set(n.x*Te.x,n.y*Te.y,n.x*Te.z,n.y*Te.w),D.viewport(s)}r=z.getFrustum(te),v(A,_,Pe,G,this.type)}z.isPointLightShadow!==!0&&this.type===$n&&y(z,_),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(b,U,N)};function y(w,A){let _=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new oi(a.x,a.y,{format:Ea,type:fi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(A,null,_,u,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(A,null,_,p,x,null)}function M(w,A,_,b){let U=null,N=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)U=N;else if(U=_.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=U.uuid,Q=A.uuid,F=h[D];F===void 0&&(F={},h[D]=F);let P=F[Q];P===void 0&&(P=U.clone(),F[Q]=P,A.addEventListener("dispose",T)),U=P}if(U.visible=A.visible,U.wireframe=A.wireframe,b===$n?U.side=A.shadowSide!==null?A.shadowSide:A.side:U.side=A.shadowSide!==null?A.shadowSide:d[A.side],U.alphaMap=A.alphaMap,U.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,U.map=A.map,U.clipShadows=A.clipShadows,U.clippingPlanes=A.clippingPlanes,U.clipIntersection=A.clipIntersection,U.displacementMap=A.displacementMap,U.displacementScale=A.displacementScale,U.displacementBias=A.displacementBias,U.wireframeLinewidth=A.wireframeLinewidth,U.linewidth=A.linewidth,_.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let D=e.properties.get(U);D.light=_}return U}function v(w,A,_,b,U){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===$n)&&(!w.frustumCulled||w.intersectsFrustum(r))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let D=t.update(w),Q=w.material;if(Array.isArray(Q)){let F=D.groups;for(let P=0,G=F.length;P<G;P++){let z=F[P],re=Q[z.materialIndex];if(re&&re.visible){let X=M(w,re,b,U);w.onBeforeShadow(e,w,A,_,D,X,z),e.renderBufferDirect(_,null,D,X,w,z),w.onAfterShadow(e,w,A,_,D,X,z)}}}else if(Q.visible){let F=M(w,Q,b,U);w.onBeforeShadow(e,w,A,_,D,F,null),e.renderBufferDirect(_,null,D,F,w,null),w.onAfterShadow(e,w,A,_,D,F,null)}}let N=w.children;for(let D=0,Q=N.length;D<Q;D++)v(N[D],A,_,b,U)}function T(w){w.target.removeEventListener("dispose",T);for(let A in h){let _=h[A],b=w.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}function eM(e,t){function i(){let V=!1,le=new Nt,ge=null,Ne=new Nt(0,0,0,0);return{setMask:function(O){ge!==O&&!V&&(e.colorMask(O,O,O,O),ge=O)},setLocked:function(O){V=O},setClear:function(O,I,L,Z,se){se===!0&&(O*=Z,I*=Z,L*=Z),le.set(O,I,L,Z),Ne.equals(le)===!1&&(e.clearColor(O,I,L,Z),Ne.copy(le))},reset:function(){V=!1,ge=null,Ne.set(-1,0,0,0)}}}function r(){let V=!1,le=!1,ge=null,Ne=null,O=null;return{setReversed:function(I){if(le!==I){let L=t.get("EXT_clip_control");I?L.clipControlEXT(L.LOWER_LEFT_EXT,L.ZERO_TO_ONE_EXT):L.clipControlEXT(L.LOWER_LEFT_EXT,L.NEGATIVE_ONE_TO_ONE_EXT),le=I;let Z=O;O=null,this.setClear(Z)}},getReversed:function(){return le},setTest:function(I){I?ue(e.DEPTH_TEST):Ee(e.DEPTH_TEST)},setMask:function(I){ge!==I&&!V&&(e.depthMask(I),ge=I)},setFunc:function(I){if(le&&(I=$m[I]),Ne!==I){switch(I){case $l:e.depthFunc(e.NEVER);break;case Ql:e.depthFunc(e.ALWAYS);break;case eh:e.depthFunc(e.LESS);break;case ss:e.depthFunc(e.LEQUAL);break;case th:e.depthFunc(e.EQUAL);break;case ih:e.depthFunc(e.GEQUAL);break;case os:e.depthFunc(e.GREATER);break;case rh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Ne=I}},setLocked:function(I){V=I},setClear:function(I){O!==I&&(O=I,le&&(I=1-I),e.clearDepth(I))},reset:function(){V=!1,ge=null,Ne=null,O=null,le=!1}}}function a(){let V=!1,le=null,ge=null,Ne=null,O=null,I=null,L=null,Z=null,se=null;return{setTest:function(de){V||(de?ue(e.STENCIL_TEST):Ee(e.STENCIL_TEST))},setMask:function(de){le!==de&&!V&&(e.stencilMask(de),le=de)},setFunc:function(de,fe,Ye){(ge!==de||Ne!==fe||O!==Ye)&&(e.stencilFunc(de,fe,Ye),ge=de,Ne=fe,O=Ye)},setOp:function(de,fe,Ye){(I!==de||L!==fe||Z!==Ye)&&(e.stencilOp(de,fe,Ye),I=de,L=fe,Z=Ye)},setLocked:function(de){V=de},setClear:function(de){se!==de&&(e.clearStencil(de),se=de)},reset:function(){V=!1,le=null,ge=null,Ne=null,O=null,I=null,L=null,Z=null,se=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,h=new WeakMap,c={},d={},u={},p=new WeakMap,g=[],x=null,m=!1,f=null,y=null,M=null,v=null,T=null,w=null,A=null,_=new Se(0,0,0),b=0,U=!1,N=null,D=null,Q=null,F=null,P=null,G=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,re=0,X=e.getParameter(e.VERSION);X.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=re>=1):X.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=re>=2);let j=null,te={},Pe=e.getParameter(e.SCISSOR_BOX),Te=e.getParameter(e.VIEWPORT),qe=new Nt().fromArray(Pe),He=new Nt().fromArray(Te);function $(V,le,ge,Ne){let O=new Uint8Array(4),I=e.createTexture();e.bindTexture(V,I),e.texParameteri(V,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(V,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let L=0;L<ge;L++)V===e.TEXTURE_3D||V===e.TEXTURE_2D_ARRAY?e.texImage3D(le,0,e.RGBA,1,1,Ne,0,e.RGBA,e.UNSIGNED_BYTE,O):e.texImage2D(le+L,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,O);return I}let ne={};ne[e.TEXTURE_2D]=$(e.TEXTURE_2D,e.TEXTURE_2D,1),ne[e.TEXTURE_CUBE_MAP]=$(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[e.TEXTURE_2D_ARRAY]=$(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ne[e.TEXTURE_3D]=$(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(e.DEPTH_TEST),s.setFunc(ss),Le(!1),Oe(Mu),ue(e.CULL_FACE),me(ur);function ue(V){c[V]!==!0&&(e.enable(V),c[V]=!0)}function Ee(V){c[V]!==!1&&(e.disable(V),c[V]=!1)}function Ke(V,le){return u[V]!==le?(e.bindFramebuffer(V,le),u[V]=le,V===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=le),V===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=le),!0):!1}function he(V,le){let ge=g,Ne=!1;if(V){ge=p.get(le),ge===void 0&&(ge=[],p.set(le,ge));let O=V.textures;if(ge.length!==O.length||ge[0]!==e.COLOR_ATTACHMENT0){for(let I=0,L=O.length;I<L;I++)ge[I]=e.COLOR_ATTACHMENT0+I;ge.length=O.length,Ne=!0}}else ge[0]!==e.BACK&&(ge[0]=e.BACK,Ne=!0);Ne&&e.drawBuffers(ge)}function Ge(V){return x!==V?(e.useProgram(V),x=V,!0):!1}let oe={[tn]:e.FUNC_ADD,[xm]:e.FUNC_SUBTRACT,[ym]:e.FUNC_REVERSE_SUBTRACT};oe[Mm]=e.MIN,oe[bm]=e.MAX;let ae={[Sm]:e.ZERO,[Tm]:e.ONE,[Em]:e.SRC_COLOR,[Xd]:e.SRC_ALPHA,[Pm]:e.SRC_ALPHA_SATURATE,[Cm]:e.DST_COLOR,[Am]:e.DST_ALPHA,[wm]:e.ONE_MINUS_SRC_COLOR,[jd]:e.ONE_MINUS_SRC_ALPHA,[Im]:e.ONE_MINUS_DST_COLOR,[Rm]:e.ONE_MINUS_DST_ALPHA,[Lm]:e.CONSTANT_COLOR,[Nm]:e.ONE_MINUS_CONSTANT_COLOR,[Dm]:e.CONSTANT_ALPHA,[Um]:e.ONE_MINUS_CONSTANT_ALPHA};function me(V,le,ge,Ne,O,I,L,Z,se,de){if(V===ur){m===!0&&(Ee(e.BLEND),m=!1);return}if(m===!1&&(ue(e.BLEND),m=!0),V!==_m){if(V!==f||de!==U){if((y!==tn||T!==tn)&&(e.blendEquation(e.FUNC_ADD),y=tn,T=tn),de)switch(V){case ts:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case vn:e.blendFunc(e.ONE,e.ONE);break;case bu:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Su:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:st("WebGLState: Invalid blending: ",V);break}else switch(V){case ts:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case vn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case bu:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Su:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",V);break}M=null,v=null,w=null,A=null,_.set(0,0,0),b=0,f=V,U=de}return}O=O||le,I=I||ge,L=L||Ne,(le!==y||O!==T)&&(e.blendEquationSeparate(oe[le],oe[O]),y=le,T=O),(ge!==M||Ne!==v||I!==w||L!==A)&&(e.blendFuncSeparate(ae[ge],ae[Ne],ae[I],ae[L]),M=ge,v=Ne,w=I,A=L),(Z.equals(_)===!1||se!==b)&&(e.blendColor(Z.r,Z.g,Z.b,se),_.copy(Z),b=se),f=V,U=!1}function we(V,le){V.side===Ri?Ee(e.CULL_FACE):ue(e.CULL_FACE);let ge=V.side===Ci;le&&(ge=!ge),Le(ge),V.blending===ts&&V.transparent===!1?me(ur):me(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),s.setFunc(V.depthFunc),s.setTest(V.depthTest),s.setMask(V.depthWrite),n.setMask(V.colorWrite);let Ne=V.stencilWrite;o.setTest(Ne),Ne&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),at(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):Ee(e.SAMPLE_ALPHA_TO_COVERAGE)}function Le(V){N!==V&&(V?e.frontFace(e.CW):e.frontFace(e.CCW),N=V)}function Oe(V){V!==mm?(ue(e.CULL_FACE),V!==D&&(V===Mu?e.cullFace(e.BACK):V===gm?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ee(e.CULL_FACE),D=V}function Ve(V){V!==Q&&(z&&e.lineWidth(V),Q=V)}function at(V,le,ge){V?(ue(e.POLYGON_OFFSET_FILL),(F!==le||P!==ge)&&(F=le,P=ge,s.getReversed()&&(le=-le),e.polygonOffset(le,ge))):Ee(e.POLYGON_OFFSET_FILL)}function it(V){V?ue(e.SCISSOR_TEST):Ee(e.SCISSOR_TEST)}function B(V){V===void 0&&(V=e.TEXTURE0+G-1),j!==V&&(e.activeTexture(V),j=V)}function wt(V,le,ge){ge===void 0&&(j===null?ge=e.TEXTURE0+G-1:ge=j);let Ne=te[ge];Ne===void 0&&(Ne={type:void 0,texture:void 0},te[ge]=Ne),(Ne.type!==V||Ne.texture!==le)&&(j!==ge&&(e.activeTexture(ge),j=ge),e.bindTexture(V,le||ne[V]),Ne.type=V,Ne.texture=le)}function ct(){let V=te[j];V!==void 0&&V.type!==void 0&&(e.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ht(){try{e.compressedTexImage2D(...arguments)}catch(V){st("WebGLState:",V)}}function R(){try{e.compressedTexImage3D(...arguments)}catch(V){st("WebGLState:",V)}}function S(){try{e.texSubImage2D(...arguments)}catch(V){st("WebGLState:",V)}}function H(){try{e.texSubImage3D(...arguments)}catch(V){st("WebGLState:",V)}}function ee(){try{e.compressedTexSubImage2D(...arguments)}catch(V){st("WebGLState:",V)}}function ce(){try{e.compressedTexSubImage3D(...arguments)}catch(V){st("WebGLState:",V)}}function xe(){try{e.texStorage2D(...arguments)}catch(V){st("WebGLState:",V)}}function Me(){try{e.texStorage3D(...arguments)}catch(V){st("WebGLState:",V)}}function W(){try{e.texImage2D(...arguments)}catch(V){st("WebGLState:",V)}}function _e(){try{e.texImage3D(...arguments)}catch(V){st("WebGLState:",V)}}function Re(V){return d[V]!==void 0?d[V]:e.getParameter(V)}function Fe(V,le){d[V]!==le&&(e.pixelStorei(V,le),d[V]=le)}function ve(V){qe.equals(V)===!1&&(e.scissor(V.x,V.y,V.z,V.w),qe.copy(V))}function Xe(V){He.equals(V)===!1&&(e.viewport(V.x,V.y,V.z,V.w),He.copy(V))}function Ze(V,le){let ge=h.get(le);ge===void 0&&(ge=new WeakMap,h.set(le,ge));let Ne=ge.get(V);Ne===void 0&&(Ne=e.getUniformBlockIndex(le,V.name),ge.set(V,Ne))}function rt(V,le){let ge=h.get(le).get(V);l.get(le)!==ge&&(e.uniformBlockBinding(le,ge,V.__bindingPointIndex),l.set(le,ge))}function St(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),c={},d={},j=null,te={},u={},p=new WeakMap,g=[],x=null,m=!1,f=null,y=null,M=null,v=null,T=null,w=null,A=null,_=new Se(0,0,0),b=0,U=!1,N=null,D=null,Q=null,F=null,P=null,qe.set(0,0,e.canvas.width,e.canvas.height),He.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:ue,disable:Ee,bindFramebuffer:Ke,drawBuffers:he,useProgram:Ge,setBlending:me,setMaterial:we,setFlipSided:Le,setCullFace:Oe,setLineWidth:Ve,setPolygonOffset:at,setScissorTest:it,activeTexture:B,bindTexture:wt,unbindTexture:ct,compressedTexImage2D:ht,compressedTexImage3D:R,texImage2D:W,texImage3D:_e,pixelStorei:Fe,getParameter:Re,updateUBOMapping:Ze,uniformBlockBinding:rt,texStorage2D:xe,texStorage3D:Me,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:ee,compressedTexSubImage3D:ce,scissor:ve,viewport:Xe,reset:St}}function tM(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new pe,c=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,S){return g?new OffscreenCanvas(R,S):ds("canvas")}function m(R,S,H){let ee=1,ce=ht(R);if((ce.width>H||ce.height>H)&&(ee=H/Math.max(ce.width,ce.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let xe=Math.floor(ee*ce.width),Me=Math.floor(ee*ce.height);u===void 0&&(u=x(xe,Me));let W=S?x(xe,Me):u;return W.width=xe,W.height=Me,W.getContext("2d").drawImage(R,0,0,xe,Me),Je("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+xe+"x"+Me+")."),W}else return"data"in R&&Je("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),R;return R}function f(R){return R.generateMipmaps}function y(R){e.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?e.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(R,S,H,ee,ce,xe=!1){if(R!==null){if(e[R]!==void 0)return e[R];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Me;ee&&(Me=t.get("EXT_texture_norm16"),Me||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=S;if(S===e.RED&&(H===e.FLOAT&&(W=e.R32F),H===e.HALF_FLOAT&&(W=e.R16F),H===e.UNSIGNED_BYTE&&(W=e.R8),H===e.UNSIGNED_SHORT&&Me&&(W=Me.R16_EXT),H===e.SHORT&&Me&&(W=Me.R16_SNORM_EXT)),S===e.RED_INTEGER&&(H===e.UNSIGNED_BYTE&&(W=e.R8UI),H===e.UNSIGNED_SHORT&&(W=e.R16UI),H===e.UNSIGNED_INT&&(W=e.R32UI),H===e.BYTE&&(W=e.R8I),H===e.SHORT&&(W=e.R16I),H===e.INT&&(W=e.R32I)),S===e.RG&&(H===e.FLOAT&&(W=e.RG32F),H===e.HALF_FLOAT&&(W=e.RG16F),H===e.UNSIGNED_BYTE&&(W=e.RG8),H===e.UNSIGNED_SHORT&&Me&&(W=Me.RG16_EXT),H===e.SHORT&&Me&&(W=Me.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(H===e.UNSIGNED_BYTE&&(W=e.RG8UI),H===e.UNSIGNED_SHORT&&(W=e.RG16UI),H===e.UNSIGNED_INT&&(W=e.RG32UI),H===e.BYTE&&(W=e.RG8I),H===e.SHORT&&(W=e.RG16I),H===e.INT&&(W=e.RG32I)),S===e.RGB_INTEGER&&(H===e.UNSIGNED_BYTE&&(W=e.RGB8UI),H===e.UNSIGNED_SHORT&&(W=e.RGB16UI),H===e.UNSIGNED_INT&&(W=e.RGB32UI),H===e.BYTE&&(W=e.RGB8I),H===e.SHORT&&(W=e.RGB16I),H===e.INT&&(W=e.RGB32I)),S===e.RGBA_INTEGER&&(H===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),H===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),H===e.UNSIGNED_INT&&(W=e.RGBA32UI),H===e.BYTE&&(W=e.RGBA8I),H===e.SHORT&&(W=e.RGBA16I),H===e.INT&&(W=e.RGBA32I)),S===e.RGB&&(H===e.UNSIGNED_SHORT&&Me&&(W=Me.RGB16_EXT),H===e.SHORT&&Me&&(W=Me.RGB16_SNORM_EXT),H===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),H===e.UNSIGNED_INT_10F_11F_11F_REV&&(W=e.R11F_G11F_B10F)),S===e.RGBA){let _e=xe?bo:ft.getTransfer(ce);H===e.FLOAT&&(W=e.RGBA32F),H===e.HALF_FLOAT&&(W=e.RGBA16F),H===e.UNSIGNED_BYTE&&(W=_e===Lt?e.SRGB8_ALPHA8:e.RGBA8),H===e.UNSIGNED_SHORT&&Me&&(W=Me.RGBA16_EXT),H===e.SHORT&&Me&&(W=Me.RGBA16_SNORM_EXT),H===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),H===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function T(R,S){let H;return R?S===null||S===Rr||S===cs?H=e.DEPTH24_STENCIL8:S===Zi?H=e.DEPTH32F_STENCIL8:S===hs&&(H=e.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Rr||S===cs?H=e.DEPTH_COMPONENT24:S===Zi?H=e.DEPTH_COMPONENT32F:S===hs&&(H=e.DEPTH_COMPONENT16),H}function w(R,S){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==ri&&R.minFilter!==Yt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){let S=R.target;S.removeEventListener("dispose",A),b(S),S.isVideoTexture&&c.delete(S),S.isHTMLTexture&&d.delete(S)}function _(R){let S=R.target;S.removeEventListener("dispose",_),N(S)}function b(R){let S=r.get(R);if(S.__webglInit===void 0)return;let H=R.source,ee=p.get(H);if(ee){let ce=ee[S.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&U(R),Object.keys(ee).length===0&&p.delete(H)}r.remove(R)}function U(R){let S=r.get(R);e.deleteTexture(S.__webglTexture);let H=R.source,ee=p.get(H);delete ee[S.__cacheKey],s.memory.textures--}function N(R){let S=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(S.__webglFramebuffer[ee]))for(let ce=0;ce<S.__webglFramebuffer[ee].length;ce++)e.deleteFramebuffer(S.__webglFramebuffer[ee][ce]);else e.deleteFramebuffer(S.__webglFramebuffer[ee]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[ee])}else{if(Array.isArray(S.__webglFramebuffer))for(let ee=0;ee<S.__webglFramebuffer.length;ee++)e.deleteFramebuffer(S.__webglFramebuffer[ee]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ee=0;ee<S.__webglColorRenderbuffer.length;ee++)S.__webglColorRenderbuffer[ee]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[ee]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let H=R.textures;for(let ee=0,ce=H.length;ee<ce;ee++){let xe=r.get(H[ee]);xe.__webglTexture&&(e.deleteTexture(xe.__webglTexture),s.memory.textures--),r.remove(H[ee])}r.remove(R)}let D=0;function Q(){D=0}function F(){return D}function P(R){D=R}function G(){let R=D;return R>=a.maxTextures&&Je("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+a.maxTextures),D+=1,R}function z(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function re(R,S){let H=r.get(R);if(R.isVideoTexture&&wt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){let ee=R.image;if(ee===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(H,R,S);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,H.__webglTexture,e.TEXTURE0+S)}function X(R,S){let H=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){Ee(H,R,S);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,H.__webglTexture,e.TEXTURE0+S)}function j(R,S){let H=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){Ee(H,R,S);return}i.bindTexture(e.TEXTURE_3D,H.__webglTexture,e.TEXTURE0+S)}function te(R,S){let H=r.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&H.__version!==R.version){Ke(H,R,S);return}i.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture,e.TEXTURE0+S)}let Pe={[Ta]:e.REPEAT,[hr]:e.CLAMP_TO_EDGE,[ls]:e.MIRRORED_REPEAT},Te={[ri]:e.NEAREST,[Hh]:e.NEAREST_MIPMAP_NEAREST,[sn]:e.NEAREST_MIPMAP_LINEAR,[Yt]:e.LINEAR,[is]:e.LINEAR_MIPMAP_NEAREST,[wr]:e.LINEAR_MIPMAP_LINEAR},qe={[Gm]:e.NEVER,[qm]:e.ALWAYS,[Vm]:e.LESS,[Kh]:e.LEQUAL,[Wm]:e.EQUAL,[Zh]:e.GEQUAL,[Xm]:e.GREATER,[jm]:e.NOTEQUAL};function He(R,S){if(S.type===Zi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Yt||S.magFilter===is||S.magFilter===sn||S.magFilter===wr||S.minFilter===Yt||S.minFilter===is||S.minFilter===sn||S.minFilter===wr)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,Pe[S.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,Pe[S.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,Pe[S.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,Te[S.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,Te[S.minFilter]),S.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,qe[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ri||S.minFilter!==sn&&S.minFilter!==wr||S.type===Zi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function $(R,S){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));let ee=S.source,ce=p.get(ee);ce===void 0&&(ce={},p.set(ee,ce));let xe=z(S);if(xe!==R.__cacheKey){ce[xe]===void 0&&(ce[xe]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,H=!0),ce[xe].usedTimes++;let Me=ce[R.__cacheKey];Me!==void 0&&(ce[R.__cacheKey].usedTimes--,Me.usedTimes===0&&U(S)),R.__cacheKey=xe,R.__webglTexture=ce[xe].texture}return H}function ne(R,S,H){return Math.floor(Math.floor(R/H)/S)}function ue(R,S,H,ee){let ce=R.updateRanges;if(ce.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,H,ee,S.data);else{ce.sort((Re,Fe)=>Re.start-Fe.start);let xe=0;for(let Re=1;Re<ce.length;Re++){let Fe=ce[xe],ve=ce[Re],Xe=Fe.start+Fe.count,Ze=ne(ve.start,S.width,4),rt=ne(Fe.start,S.width,4);ve.start<=Xe+1&&Ze===rt&&ne(ve.start+ve.count-1,S.width,4)===Ze?Fe.count=Math.max(Fe.count,ve.start+ve.count-Fe.start):(++xe,ce[xe]=ve)}ce.length=xe+1;let Me=i.getParameter(e.UNPACK_ROW_LENGTH),W=i.getParameter(e.UNPACK_SKIP_PIXELS),_e=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let Re=0,Fe=ce.length;Re<Fe;Re++){let ve=ce[Re],Xe=Math.floor(ve.start/4),Ze=Math.ceil(ve.count/4),rt=Xe%S.width,St=Math.floor(Xe/S.width),V=Ze;i.pixelStorei(e.UNPACK_SKIP_PIXELS,rt),i.pixelStorei(e.UNPACK_SKIP_ROWS,St),i.texSubImage2D(e.TEXTURE_2D,0,rt,St,V,1,H,ee,S.data)}R.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,Me),i.pixelStorei(e.UNPACK_SKIP_PIXELS,W),i.pixelStorei(e.UNPACK_SKIP_ROWS,_e)}}function Ee(R,S,H){let ee=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ee=e.TEXTURE_3D);let ce=$(R,S),xe=S.source;i.bindTexture(ee,R.__webglTexture,e.TEXTURE0+H);let Me=r.get(xe);if(xe.version!==Me.__version||ce===!0){if(i.activeTexture(e.TEXTURE0+H),!(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)){let le=ft.getPrimaries(ft.workingColorSpace),ge=S.colorSpace===sa?null:ft.getPrimaries(S.colorSpace),Ne=S.colorSpace===sa||le===ge?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}i.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let W=m(S.image,!1,a.maxTextureSize);W=ct(S,W);let _e=n.convert(S.format,S.colorSpace),Re=n.convert(S.type),Fe=v(S.internalFormat,_e,Re,S.normalized,S.colorSpace,S.isVideoTexture);He(ee,S);let ve,Xe=S.mipmaps,Ze=S.isVideoTexture!==!0,rt=Me.__version===void 0||ce===!0,St=xe.dataReady,V=w(S,W);if(S.isDepthTexture)Fe=T(S.format===xa,S.type),rt&&(Ze?i.texStorage2D(e.TEXTURE_2D,1,Fe,W.width,W.height):i.texImage2D(e.TEXTURE_2D,0,Fe,W.width,W.height,0,_e,Re,null));else if(S.isDataTexture)if(Xe.length>0){Ze&&rt&&i.texStorage2D(e.TEXTURE_2D,V,Fe,Xe[0].width,Xe[0].height);for(let le=0,ge=Xe.length;le<ge;le++)ve=Xe[le],Ze?St&&i.texSubImage2D(e.TEXTURE_2D,le,0,0,ve.width,ve.height,_e,Re,ve.data):i.texImage2D(e.TEXTURE_2D,le,Fe,ve.width,ve.height,0,_e,Re,ve.data);S.generateMipmaps=!1}else Ze?(rt&&i.texStorage2D(e.TEXTURE_2D,V,Fe,W.width,W.height),St&&ue(S,W,_e,Re)):i.texImage2D(e.TEXTURE_2D,0,Fe,W.width,W.height,0,_e,Re,W.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ze&&rt&&i.texStorage3D(e.TEXTURE_2D_ARRAY,V,Fe,Xe[0].width,Xe[0].height,W.depth);for(let le=0,ge=Xe.length;le<ge;le++)if(ve=Xe[le],S.format!==Ji)if(_e!==null)if(Ze){if(St)if(S.layerUpdates.size>0){let Ne=bd(ve.width,ve.height,S.format,S.type);for(let O of S.layerUpdates){let I=ve.data.subarray(O*Ne/ve.data.BYTES_PER_ELEMENT,(O+1)*Ne/ve.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,le,0,0,O,ve.width,ve.height,1,_e,I)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,le,0,0,0,ve.width,ve.height,W.depth,_e,ve.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,le,Fe,ve.width,ve.height,W.depth,0,ve.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?St&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,le,0,0,0,ve.width,ve.height,W.depth,_e,Re,ve.data):i.texImage3D(e.TEXTURE_2D_ARRAY,le,Fe,ve.width,ve.height,W.depth,0,_e,Re,ve.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ze&&rt&&i.texStorage2D(e.TEXTURE_2D,V,Fe,Xe[0].width,Xe[0].height);for(let le=0,ge=Xe.length;le<ge;le++)ve=Xe[le],S.format!==Ji?_e!==null?Ze?St&&i.compressedTexSubImage2D(e.TEXTURE_2D,le,0,0,ve.width,ve.height,_e,ve.data):i.compressedTexImage2D(e.TEXTURE_2D,le,Fe,ve.width,ve.height,0,ve.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?St&&i.texSubImage2D(e.TEXTURE_2D,le,0,0,ve.width,ve.height,_e,Re,ve.data):i.texImage2D(e.TEXTURE_2D,le,Fe,ve.width,ve.height,0,_e,Re,ve.data)}else if(S.isDataArrayTexture)if(Ze){if(rt&&i.texStorage3D(e.TEXTURE_2D_ARRAY,V,Fe,W.width,W.height,W.depth),St)if(S.layerUpdates.size>0){let le=bd(W.width,W.height,S.format,S.type);for(let ge of S.layerUpdates){let Ne=W.data.subarray(ge*le/W.data.BYTES_PER_ELEMENT,(ge+1)*le/W.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ge,W.width,W.height,1,_e,Re,Ne)}S.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,_e,Re,W.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Fe,W.width,W.height,W.depth,0,_e,Re,W.data);else if(S.isData3DTexture)Ze?(rt&&i.texStorage3D(e.TEXTURE_3D,V,Fe,W.width,W.height,W.depth),St&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,_e,Re,W.data)):i.texImage3D(e.TEXTURE_3D,0,Fe,W.width,W.height,W.depth,0,_e,Re,W.data);else if(S.isFramebufferTexture){if(rt)if(Ze)i.texStorage2D(e.TEXTURE_2D,V,Fe,W.width,W.height);else{let le=W.width,ge=W.height;for(let Ne=0;Ne<V;Ne++)i.texImage2D(e.TEXTURE_2D,Ne,Fe,le,ge,0,_e,Re,null),le>>=1,ge>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){let le=e.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),W.parentNode!==le){le.appendChild(W),d.add(S),le.onpaint=ge=>{let Ne=ge.changedElements;for(let O of d)Ne.includes(O.image)&&(O.needsUpdate=!0)},le.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,W);else{let ge=e.RGBA,Ne=e.RGBA,O=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ge,Ne,O,W)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(Ze&&rt){let le=ht(Xe[0]);i.texStorage2D(e.TEXTURE_2D,V,Fe,le.width,le.height)}for(let le=0,ge=Xe.length;le<ge;le++)ve=Xe[le],Ze?St&&i.texSubImage2D(e.TEXTURE_2D,le,0,0,_e,Re,ve):i.texImage2D(e.TEXTURE_2D,le,Fe,_e,Re,ve);S.generateMipmaps=!1}else if(Ze){if(rt){let le=ht(W);i.texStorage2D(e.TEXTURE_2D,V,Fe,le.width,le.height)}St&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,_e,Re,W)}else i.texImage2D(e.TEXTURE_2D,0,Fe,_e,Re,W);f(S)&&y(ee),Me.__version=xe.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ke(R,S,H){if(S.image.length!==6)return;let ee=$(R,S),ce=S.source;i.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+H);let xe=r.get(ce);if(ce.version!==xe.__version||ee===!0){i.activeTexture(e.TEXTURE0+H);let Me=ft.getPrimaries(ft.workingColorSpace),W=S.colorSpace===sa?null:ft.getPrimaries(S.colorSpace),_e=S.colorSpace===sa||Me===W?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Re=S.isCompressedTexture||S.image[0].isCompressedTexture,Fe=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let I=0;I<6;I++)!Re&&!Fe?ve[I]=m(S.image[I],!0,a.maxCubemapSize):ve[I]=Fe?S.image[I].image:S.image[I],ve[I]=ct(S,ve[I]);let Xe=ve[0],Ze=n.convert(S.format,S.colorSpace),rt=n.convert(S.type),St=v(S.internalFormat,Ze,rt,S.normalized,S.colorSpace),V=S.isVideoTexture!==!0,le=xe.__version===void 0||ee===!0,ge=ce.dataReady,Ne=w(S,Xe);He(e.TEXTURE_CUBE_MAP,S);let O;if(Re){V&&le&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Ne,St,Xe.width,Xe.height);for(let I=0;I<6;I++){O=ve[I].mipmaps;for(let L=0;L<O.length;L++){let Z=O[L];S.format!==Ji?Ze!==null?V?ge&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+I,L,0,0,Z.width,Z.height,Ze,Z.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+I,L,St,Z.width,Z.height,0,Z.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ge&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+I,L,0,0,Z.width,Z.height,Ze,rt,Z.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+I,L,St,Z.width,Z.height,0,Ze,rt,Z.data)}}}else{if(O=S.mipmaps,V&&le){O.length>0&&Ne++;let I=ht(ve[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Ne,St,I.width,I.height)}for(let I=0;I<6;I++)if(Fe){V?ge&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,ve[I].width,ve[I].height,Ze,rt,ve[I].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,St,ve[I].width,ve[I].height,0,Ze,rt,ve[I].data);for(let L=0;L<O.length;L++){let Z=O[L].image[I].image;V?ge&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+I,L+1,0,0,Z.width,Z.height,Ze,rt,Z.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+I,L+1,St,Z.width,Z.height,0,Ze,rt,Z.data)}}else{V?ge&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,Ze,rt,ve[I]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,St,Ze,rt,ve[I]);for(let L=0;L<O.length;L++){let Z=O[L];V?ge&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+I,L+1,0,0,Ze,rt,Z.image[I]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+I,L+1,St,Ze,rt,Z.image[I])}}}f(S)&&y(e.TEXTURE_CUBE_MAP),xe.__version=ce.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function he(R,S,H,ee,ce,xe){let Me=n.convert(H.format,H.colorSpace),W=n.convert(H.type),_e=v(H.internalFormat,Me,W,H.normalized,H.colorSpace),Re=r.get(S),Fe=r.get(H);if(Fe.__renderTarget=S,!Re.__hasExternalTextures){let ve=Math.max(1,S.width>>xe),Xe=Math.max(1,S.height>>xe);ce===e.TEXTURE_3D||ce===e.TEXTURE_2D_ARRAY?i.texImage3D(ce,xe,_e,ve,Xe,S.depth,0,Me,W,null):i.texImage2D(ce,xe,_e,ve,Xe,0,Me,W,null)}i.bindFramebuffer(e.FRAMEBUFFER,R),B(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ee,ce,Fe.__webglTexture,0,it(S)):(ce===e.TEXTURE_2D||ce>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,ee,ce,Fe.__webglTexture,xe),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ge(R,S,H){if(e.bindRenderbuffer(e.RENDERBUFFER,R),S.depthBuffer){let ee=S.depthTexture,ce=ee&&ee.isDepthTexture?ee.type:null,xe=T(S.stencilBuffer,ce),Me=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;B(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,it(S),xe,S.width,S.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,it(S),xe,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,xe,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Me,e.RENDERBUFFER,R)}else{let ee=S.textures;for(let ce=0;ce<ee.length;ce++){let xe=ee[ce],Me=n.convert(xe.format,xe.colorSpace),W=n.convert(xe.type),_e=v(xe.internalFormat,Me,W,xe.normalized,xe.colorSpace);B(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,it(S),_e,S.width,S.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,it(S),_e,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,_e,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function oe(R,S,H){let ee=S.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ce=r.get(S.depthTexture);if(ce.__renderTarget=S,(!ce.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ee){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),ce.__webglTexture===void 0){ce.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,ce.__webglTexture),He(e.TEXTURE_CUBE_MAP,S.depthTexture);let Re=n.convert(S.depthTexture.format),Fe=n.convert(S.depthTexture.type),ve;S.depthTexture.format===Xr?ve=e.DEPTH_COMPONENT24:S.depthTexture.format===xa&&(ve=e.DEPTH24_STENCIL8);for(let Xe=0;Xe<6;Xe++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,ve,S.width,S.height,0,Re,Fe,null)}}else re(S.depthTexture,0);let xe=ce.__webglTexture,Me=it(S),W=ee?e.TEXTURE_CUBE_MAP_POSITIVE_X+H:e.TEXTURE_2D,_e=S.depthTexture.format===xa?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===Xr)B(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,_e,W,xe,0,Me):e.framebufferTexture2D(e.FRAMEBUFFER,_e,W,xe,0);else if(S.depthTexture.format===xa)B(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,_e,W,xe,0,Me):e.framebufferTexture2D(e.FRAMEBUFFER,_e,W,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ae(R){let S=r.get(R),H=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let ee=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ee){let ce=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ee.removeEventListener("dispose",ce)};ee.addEventListener("dispose",ce),S.__depthDisposeCallback=ce}S.__boundDepthTexture=ee}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let ee=0;ee<6;ee++)oe(S.__webglFramebuffer[ee],R,ee);else{let ee=R.texture.mipmaps;ee&&ee.length>0?oe(S.__webglFramebuffer[0],R,0):oe(S.__webglFramebuffer,R,0)}else if(H){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]===void 0)S.__webglDepthbuffer[ee]=e.createRenderbuffer(),Ge(S.__webglDepthbuffer[ee],R,!1);else{let ce=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=S.__webglDepthbuffer[ee];e.bindRenderbuffer(e.RENDERBUFFER,xe),e.framebufferRenderbuffer(e.FRAMEBUFFER,ce,e.RENDERBUFFER,xe)}}else{let ee=R.texture.mipmaps;if(ee&&ee.length>0?i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Ge(S.__webglDepthbuffer,R,!1);else{let ce=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,xe),e.framebufferRenderbuffer(e.FRAMEBUFFER,ce,e.RENDERBUFFER,xe)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function me(R,S,H){let ee=r.get(R);S!==void 0&&he(ee.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),H!==void 0&&ae(R)}function we(R){let S=R.texture,H=r.get(R),ee=r.get(S);R.addEventListener("dispose",_);let ce=R.textures,xe=R.isWebGLCubeRenderTarget===!0,Me=ce.length>1;if(Me||(ee.__webglTexture===void 0&&(ee.__webglTexture=e.createTexture()),ee.__version=S.version,s.memory.textures++),xe){H.__webglFramebuffer=[];for(let W=0;W<6;W++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[W]=[];for(let _e=0;_e<S.mipmaps.length;_e++)H.__webglFramebuffer[W][_e]=e.createFramebuffer()}else H.__webglFramebuffer[W]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let W=0;W<S.mipmaps.length;W++)H.__webglFramebuffer[W]=e.createFramebuffer()}else H.__webglFramebuffer=e.createFramebuffer();if(Me)for(let W=0,_e=ce.length;W<_e;W++){let Re=r.get(ce[W]);Re.__webglTexture===void 0&&(Re.__webglTexture=e.createTexture(),s.memory.textures++)}if(R.samples>0&&B(R)===!1){H.__webglMultisampledFramebuffer=e.createFramebuffer(),H.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let W=0;W<ce.length;W++){let _e=ce[W];H.__webglColorRenderbuffer[W]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,H.__webglColorRenderbuffer[W]);let Re=n.convert(_e.format,_e.colorSpace),Fe=n.convert(_e.type),ve=v(_e.internalFormat,Re,Fe,_e.normalized,_e.colorSpace,R.isXRRenderTarget===!0),Xe=it(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,Xe,ve,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+W,e.RENDERBUFFER,H.__webglColorRenderbuffer[W])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=e.createRenderbuffer(),Ge(H.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(xe){i.bindTexture(e.TEXTURE_CUBE_MAP,ee.__webglTexture),He(e.TEXTURE_CUBE_MAP,S);for(let W=0;W<6;W++)if(S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)he(H.__webglFramebuffer[W][_e],R,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,_e);else he(H.__webglFramebuffer[W],R,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);f(S)&&y(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Me){for(let W=0,_e=ce.length;W<_e;W++){let Re=ce[W],Fe=r.get(Re),ve=e.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ve=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(ve,Fe.__webglTexture),He(ve,Re),he(H.__webglFramebuffer,R,Re,e.COLOR_ATTACHMENT0+W,ve,0),f(Re)&&y(ve)}i.unbindTexture()}else{let W=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(W=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(W,ee.__webglTexture),He(W,S),S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)he(H.__webglFramebuffer[_e],R,S,e.COLOR_ATTACHMENT0,W,_e);else he(H.__webglFramebuffer,R,S,e.COLOR_ATTACHMENT0,W,0);f(S)&&y(W),i.unbindTexture()}R.depthBuffer&&ae(R)}function Le(R){let S=R.textures;for(let H=0,ee=S.length;H<ee;H++){let ce=S[H];if(f(ce)){let xe=M(R),Me=r.get(ce).__webglTexture;i.bindTexture(xe,Me),y(xe),i.unbindTexture()}}}let Oe=[],Ve=[];function at(R){if(R.samples>0){if(B(R)===!1){let S=R.textures,H=R.width,ee=R.height,ce=e.COLOR_BUFFER_BIT,xe=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Me=r.get(R),W=S.length>1;if(W)for(let Re=0;Re<S.length;Re++)i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let _e=R.texture.mipmaps;_e&&_e.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Re=0;Re<S.length;Re++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ce|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ce|=e.STENCIL_BUFFER_BIT)),W){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Me.__webglColorRenderbuffer[Re]);let Fe=r.get(S[Re]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Fe,0)}e.blitFramebuffer(0,0,H,ee,0,0,H,ee,ce,e.NEAREST),l===!0&&(Oe.length=0,Ve.length=0,Oe.push(e.COLOR_ATTACHMENT0+Re),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Oe.push(xe),Ve.push(xe),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ve)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Oe))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),W)for(let Re=0;Re<S.length;Re++){i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.RENDERBUFFER,Me.__webglColorRenderbuffer[Re]);let Fe=r.get(S[Re]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.TEXTURE_2D,Fe,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let S=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function it(R){return Math.min(a.maxSamples,R.samples)}function B(R){let S=r.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function wt(R){let S=s.render.frame;c.get(R)!==S&&(c.set(R,S),R.update())}function ct(R,S){let H=R.colorSpace,ee=R.format,ce=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==zi&&H!==sa&&(ft.getTransfer(H)===Lt?(ee!==Ji||ce!==Wi)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",H)),S}function ht(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=G,this.resetTextureUnits=Q,this.getTextureUnits=F,this.setTextureUnits=P,this.setTexture2D=re,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=te,this.rebindTextures=me,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=he,this.useMultisampledRTT=B,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function iM(e,t){function i(r,a=sa){let n,s=ft.getTransfer(a);if(r===Wi)return e.UNSIGNED_BYTE;if(r===Gh)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Vh)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Jd)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===$d)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Kd)return e.BYTE;if(r===Zd)return e.SHORT;if(r===hs)return e.UNSIGNED_SHORT;if(r===kh)return e.INT;if(r===Rr)return e.UNSIGNED_INT;if(r===Zi)return e.FLOAT;if(r===fi)return e.HALF_FLOAT;if(r===Qd)return e.ALPHA;if(r===ep)return e.RGB;if(r===Ji)return e.RGBA;if(r===Xr)return e.DEPTH_COMPONENT;if(r===xa)return e.DEPTH_STENCIL;if(r===Wh)return e.RED;if(r===Xh)return e.RED_INTEGER;if(r===Ea)return e.RG;if(r===jh)return e.RG_INTEGER;if(r===qh)return e.RGBA_INTEGER;if(r===uo||r===po||r===fo||r===mo)if(s===Lt)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===uo)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===po)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fo)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mo)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===uo)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===po)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fo)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mo)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ah||r===nh||r===sh||r===oh)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===ah)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nh)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sh)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===oh)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lh||r===hh||r===ch||r===uh||r===dh||r===yo||r===ph)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===lh||r===hh)return s===Lt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===ch)return s===Lt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===uh)return n.COMPRESSED_R11_EAC;if(r===dh)return n.COMPRESSED_SIGNED_R11_EAC;if(r===yo)return n.COMPRESSED_RG11_EAC;if(r===ph)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===fh||r===mh||r===gh||r===vh||r===_h||r===xh||r===yh||r===Mh||r===bh||r===Sh||r===Th||r===Eh||r===wh||r===Ah)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===fh)return s===Lt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mh)return s===Lt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gh)return s===Lt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vh)return s===Lt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_h)return s===Lt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xh)return s===Lt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yh)return s===Lt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mh)return s===Lt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bh)return s===Lt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sh)return s===Lt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Th)return s===Lt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Eh)return s===Lt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wh)return s===Lt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ah)return s===Lt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rh||r===Ch||r===Ih)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===Rh)return s===Lt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ch)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ih)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ph||r===Lh||r===Mo||r===Nh)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===Ph)return n.COMPRESSED_RED_RGTC1_EXT;if(r===Lh)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mo)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nh)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===cs?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var rM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aM=`
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

}`,nM=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ep(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Wt({vertexShader:rM,fragmentShader:aM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new Xi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sM=class extends Aa{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,c=null,d=null,u=null,p=null,g=typeof XRWebGLBinding<"u",x=new nM,m={},f=t.getContextAttributes(),y=null,M=null,v=[],T=[],w=new pe,A=null,_=null,b=new yi;b.viewport=new Nt;let U=new yi;U.viewport=new Nt;let N=[b,U],D=new av,Q=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=v[$];return ne===void 0&&(ne=new bl,v[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=v[$];return ne===void 0&&(ne=new bl,v[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=v[$];return ne===void 0&&(ne=new bl,v[$]=ne),ne.getHandSpace()};function P($){let ne=T.indexOf($.inputSource);if(ne===-1)return;let ue=v[ne];ue!==void 0&&(ue.update($.inputSource,$.frame,l||n),ue.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",z);for(let $=0;$<v.length;$++){let ne=T[$];ne!==null&&(T[$]=null,v[$].disconnect(ne))}Q=null,F=null,x.reset();for(let $ in m)delete m[$];if(e.setRenderTarget(y),u=null,d=null,c=null,r=null,M=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),_!==null){let $=_.camera;$.fov=_.fov,$.zoom=_.zoom,$.updateProjectionMatrix(),_=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,i.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){s=$,i.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return c===null&&g&&(c=new XRWebGLBinding(r,t)),c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",G),r.addEventListener("inputsourceschange",z),f.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,ue=null,Ee=null;f.depth&&(Ee=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=f.stencil?xa:Xr,ue=f.stencil?cs:Rr);let Ke={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:a};c=this.getBinding(),d=c.createProjectionLayer(Ke),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new oi(d.textureWidth,d.textureHeight,{format:Ji,type:Wi,depthTexture:new ps(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ne={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new oi(u.framebufferWidth,u.framebufferHeight,{format:Ji,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function z($){for(let ne=0;ne<$.removed.length;ne++){let ue=$.removed[ne],Ee=T.indexOf(ue);Ee>=0&&(T[Ee]=null,v[Ee].disconnect(ue))}for(let ne=0;ne<$.added.length;ne++){let ue=$.added[ne],Ee=T.indexOf(ue);if(Ee===-1){for(let he=0;he<v.length;he++)if(he>=T.length){T.push(ue),Ee=he;break}else if(T[he]===null){T[he]=ue,Ee=he;break}if(Ee===-1)break}let Ke=v[Ee];Ke&&Ke.connect(ue)}}let re=new C,X=new C;function j($,ne,ue){re.setFromMatrixPosition(ne.matrixWorld),X.setFromMatrixPosition(ue.matrixWorld);let Ee=re.distanceTo(X),Ke=ne.projectionMatrix.elements,he=ue.projectionMatrix.elements,Ge=Ke[14]/(Ke[10]-1),oe=Ke[14]/(Ke[10]+1),ae=(Ke[9]+1)/Ke[5],me=(Ke[9]-1)/Ke[5],we=(Ke[8]-1)/Ke[0],Le=(he[8]+1)/he[0],Oe=Ge*we,Ve=Ge*Le,at=Ee/(-we+Le),it=at*-we;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(it),$.translateZ(at),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ke[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let B=Ge+at,wt=oe+at,ct=Oe-it,ht=Ve+(Ee-it),R=ae*oe/wt*B,S=me*oe/wt*B;$.projectionMatrix.makePerspective(ct,ht,R,S,B,wt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function te($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ne=$.near,ue=$.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),D.near=U.near=b.near=ne,D.far=U.far=b.far=ue,(Q!==D.near||F!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),Q=D.near,F=D.far),D.layers.mask=$.layers.mask|6,b.layers.mask=D.layers.mask&-5,U.layers.mask=D.layers.mask&-3;let Ee=$.parent,Ke=D.cameras;te(D,Ee);for(let he=0;he<Ke.length;he++)te(Ke[he],Ee);Ke.length===2?j(D,b,U):D.projectionMatrix.copy(b.projectionMatrix),_===null&&$.isPerspectiveCamera&&(_={camera:$,fov:$.fov,zoom:$.zoom}),Pe($,D,Ee)};function Pe($,ne,ue){ue===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(ue.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=bn*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&u===null))return o},this.setFoveation=function($){o=$,d!==null&&(d.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(D)},this.getCameraTexture=function($){return m[$]};let Te=null;function qe($,ne){if(h=ne.getViewerPose(l||n),p=ne,h!==null){let ue=h.views;u!==null&&(e.setRenderTargetFramebuffer(M,u.framebuffer),e.setRenderTarget(M));let Ee=!1;ue.length!==D.cameras.length&&(D.cameras.length=0,Ee=!0);for(let he=0;he<ue.length;he++){let Ge=ue[he],oe=null;if(u!==null)oe=u.getViewport(Ge);else{let me=c.getViewSubImage(d,Ge);oe=me.viewport,he===0&&(e.setRenderTargetTextures(M,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(M))}let ae=N[he];ae===void 0&&(ae=new yi,ae.layers.enable(he),ae.viewport=new Nt,N[he]=ae),ae.matrix.fromArray(Ge.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Ge.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(oe.x,oe.y,oe.width,oe.height),he===0&&(D.matrix.copy(ae.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ee===!0&&D.cameras.push(ae)}let Ke=r.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){c=i.getBinding();let he=c.getDepthInformation(ue[0]);he&&he.isValid&&he.texture&&x.init(he,r.renderState)}if(Ke&&Ke.includes("camera-access")&&g){e.state.unbindTexture(),c=i.getBinding();for(let he=0;he<ue.length;he++){let Ge=ue[he].camera;if(Ge){let oe=m[Ge];oe||(oe=new Ep,m[Ge]=oe);let ae=c.getCameraImage(Ge);oe.sourceTexture=ae}}}}for(let ue=0;ue<v.length;ue++){let Ee=T[ue],Ke=v[ue];Ee!==null&&Ke!==void 0&&Ke.update(Ee,ne,l||n)}Te&&Te($,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),p=null}let He=new uf;He.setAnimationLoop(qe),this.setAnimationLoop=function($){Te=$},this.dispose=function(){}}},oM=new Qe,_f=new ut;_f.set(-1,0,0,0,1,0,0,0,1);function lM(e,t){function i(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,af(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,y,M,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?n(m,f):f.isMeshLambertMaterial?(n(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(n(m,f),d(m,f)):f.isMeshPhongMaterial?(n(m,f),c(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(n(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(n(m,f),g(m,f)):f.isMeshDepthMaterial?n(m,f):f.isMeshDistanceMaterial?(n(m,f),x(m,f)):f.isMeshNormalMaterial?n(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,M):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,i(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ci&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,i(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ci&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,i(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,i(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(oM.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_f),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=M*.5,f.map&&(m.map.value=f.map,i(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ci&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function hM(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let w=T.program;r.uniformBlockBinding(v,w)}function h(v,T){let w=a[v.id];w===void 0&&(m(v),w=c(v),a[v.id]=w,v.addEventListener("dispose",y));let A=T.program;r.updateUBOMapping(v,A);let _=t.render.frame;n[v.id]!==_&&(u(v),n[v.id]=_)}function c(v){let T=d();v.__bindingPointIndex=T;let w=e.createBuffer(),A=v.__size,_=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,A,_),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,w),w}function d(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let T=a[v.id],w=v.uniforms,A=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let _=0,b=w.length;_<b;_++){let U=w[_];if(Array.isArray(U))for(let N=0,D=U.length;N<D;N++)p(U[N],_,N,A);else p(U,_,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(v,T,w,A){if(x(v,T,w,A)===!0){let _=v.__offset,b=v.value;if(Array.isArray(b)){let U=0;for(let N=0;N<b.length;N++){let D=b[N],Q=f(D);g(D,v.__data,U),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(U+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,_,v.__data)}}function g(v,T,w){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,w)}function x(v,T,w,A){let _=v.value,b=T+"_"+w;if(A[b]===void 0)return typeof _=="number"||typeof _=="boolean"?A[b]=_:ArrayBuffer.isView(_)?A[b]=_.slice():A[b]=_.clone(),!0;{let U=A[b];if(typeof _=="number"||typeof _=="boolean"){if(U!==_)return A[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(U.equals(_)===!1)return U.copy(_),!0}}return!1}function m(v){let T=v.uniforms,w=0,A=16;for(let b=0,U=T.length;b<U;b++){let N=Array.isArray(T[b])?T[b]:[T[b]];for(let D=0,Q=N.length;D<Q;D++){let F=N[D],P=Array.isArray(F.value)?F.value:[F.value];for(let G=0,z=P.length;G<z;G++){let re=P[G],X=f(re),j=w%A,te=j%X.boundary,Pe=j+te;w+=te,Pe!==0&&A-Pe<X.storage&&(w+=A-Pe),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=X.storage}}}let _=w%A;return _>0&&(w+=A-_),v.__size=w,v.__cache={},this}function f(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",v),T}function y(v){let T=v.target;T.removeEventListener("dispose",y);let w=s.indexOf(T.__bindingPointIndex);s.splice(w,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete n[T.id]}function M(){for(let v in a)e.deleteBuffer(a[v]);s=[],a={},n={}}return{bind:l,update:h,dispose:M}}var cM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Tr=null;function uM(){return Tr===null&&(Tr=new _s(cM,16,16,Ea,fi),Tr.name="DFG_LUT",Tr.minFilter=Yt,Tr.magFilter=Yt,Tr.wrapS=hr,Tr.wrapT=hr,Tr.generateMipmaps=!1,Tr.needsUpdate=!0),Tr}var xf=class{constructor(e={}){let{canvas:t=Zm(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Wi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=n;let g=u,x=new Set([qh,jh,Xh]),m=new Set([Wi,Rr,hs,cs,Gh,Vh]),f=new Uint32Array(4),y=new Int32Array(4),M=new C,v=null,T=null,w=[],A=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,U=!1,N=null,D=null,Q=null,F=null;this._outputColorSpace=Gt;let P=0,G=0,z=null,re=-1,X=null,j=new Nt,te=new Nt,Pe=null,Te=new Se(0),qe=0,He=t.width,$=t.height,ne=1,ue=null,Ee=null,Ke=new Nt(0,0,He,$),he=new Nt(0,0,He,$),Ge=!1,oe=new Sn,ae=!1,me=!1,we=new Qe,Le=new C,Oe=new Nt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function it(){return z===null?ne:1}let B=i;function wt(E,k){return t.getContext(E,k)}let ct,ht,R,S,H,ee,ce,xe,Me,W,_e,Re,Fe,ve,Xe,Ze,rt,St,V,le,ge,Ne,O;try{let E={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",de,!1),B===null){let k="webgl2";if(B=wt(k,E),B===null)throw wt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}I()}catch(E){throw t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",de,!1),st("WebGLRenderer: "+E.message),E}function I(){ct=new uy(B),ct.init(),ge=new iM(B,ct),ht=new ty(B,ct,e,ge),R=new eM(B,ct),ht.reversedDepthBuffer&&d&&R.buffers.depth.setReversed(!0),D=B.createFramebuffer(),Q=B.createFramebuffer(),F=B.createFramebuffer(),S=new fy(B),H=new H1,ee=new tM(B,ct,R,H,ht,ge,S),ce=new cy(b),xe=new gv(B),Ne=new Qx(B,xe),Me=new dy(B,xe,S,Ne),W=new gy(B,Me,xe,Ne,S),St=new my(B,ht,ee),Xe=new iy(H),_e=new z1(b,ce,ct,ht,Ne,Xe),Re=new lM(b,H),Fe=new G1,ve=new Y1(ct),rt=new $x(b,ce,R,W,p,o),Ze=new Q1(b,W,ht),O=new hM(B,S,ht,R),V=new ey(B,ct,S),le=new py(B,ct,S),S.programs=_e.programs,b.capabilities=ht,b.extensions=ct,b.properties=H,b.renderLists=Fe,b.shadowMap=Ze,b.state=R,b.info=S}g!==Wi&&(_=new _y(g,t.width,t.height,s,r,a));let L=new sM(b,B);this.xr=L,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=ct.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ct.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(E){E!==void 0&&(ne=E,this.setSize(He,$,!1))},this.getSize=function(E){return E.set(He,$)},this.setSize=function(E,k,ie=!0){if(L.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}He=E,$=k,t.width=Math.floor(E*ne),t.height=Math.floor(k*ne),ie===!0&&(t.style.width=E+"px",t.style.height=k+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(He*ne,$*ne).floor()},this.setDrawingBufferSize=function(E,k,ie){He=E,$=k,ne=ie,t.width=Math.floor(E*ie),t.height=Math.floor(k*ie),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(g===Wi){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(j)},this.getViewport=function(E){return E.copy(Ke)},this.setViewport=function(E,k,ie,K){E.isVector4?Ke.set(E.x,E.y,E.z,E.w):Ke.set(E,k,ie,K),R.viewport(j.copy(Ke).multiplyScalar(ne).round())},this.getScissor=function(E){return E.copy(he)},this.setScissor=function(E,k,ie,K){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,k,ie,K),R.scissor(te.copy(he).multiplyScalar(ne).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(E){R.setScissorTest(Ge=E)},this.setOpaqueSort=function(E){ue=E},this.setTransparentSort=function(E){Ee=E},this.getClearColor=function(E){return E.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,ie=!0){let K=0;if(E){let q=!1;if(z!==null){let ye=z.texture.format;q=x.has(ye)}if(q){let ye=z.texture.type,Ce=m.has(ye),Ue=rt.getClearColor(),De=rt.getClearAlpha(),Be=Ue.r,lt=Ue.g,ot=Ue.b;Ce?(f[0]=Be,f[1]=lt,f[2]=ot,f[3]=De,B.clearBufferuiv(B.COLOR,0,f)):(y[0]=Be,y[1]=lt,y[2]=ot,y[3]=De,B.clearBufferiv(B.COLOR,0,y))}else K|=B.COLOR_BUFFER_BIT}k&&(K|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",de,!1),rt.dispose(),Fe.dispose(),ve.dispose(),H.dispose(),ce.dispose(),W.dispose(),Ne.dispose(),O.dispose(),_e.dispose(),L.dispose(),L.removeEventListener("sessionstart",Di),L.removeEventListener("sessionend",dt),Si.stop()};function Z(E){E.preventDefault(),So("WebGLRenderer: Context Lost."),U=!0}function se(){So("WebGLRenderer: Context Restored."),U=!1;let E=S.autoReset,k=Ze.enabled,ie=Ze.autoUpdate,K=Ze.needsUpdate,q=Ze.type;I(),S.autoReset=E,Ze.enabled=k,Ze.autoUpdate=ie,Ze.needsUpdate=K,Ze.type=q}function de(E){st("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function fe(E){let k=E.target;k.removeEventListener("dispose",fe),Ye(k)}function Ye(E){nt(E),H.remove(E)}function nt(E){let k=H.get(E).programs;k!==void 0&&(k.forEach(function(ie){_e.releaseProgram(ie)}),E.isShaderMaterial&&_e.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,ie,K,q,ye){k===null&&(k=Ve);let Ce=q.isMesh&&q.matrixWorld.determinantAffine()<0,Ue=Kr(E,k,ie,K,q);R.setMaterial(K,Ce);let De=ie.index,Be=1;if(K.wireframe===!0){if(De=Me.getWireframeAttribute(ie),De===void 0)return;Be=2}let lt=ie.drawRange,ot=ie.attributes.position,je=lt.start*Be,At=(lt.start+lt.count)*Be;ye!==null&&(je=Math.max(je,ye.start*Be),At=Math.min(At,(ye.start+ye.count)*Be)),De!==null?(je=Math.max(je,0),At=Math.min(At,De.count)):ot!=null&&(je=Math.max(je,0),At=Math.min(At,ot.count));let Rt=At-je;if(Rt<0||Rt===1/0)return;Ne.setup(q,K,Ue,ie,De);let Mt,Ot=V;if(De!==null&&(Mt=xe.get(De),Ot=le,Ot.setIndex(Mt)),q.isMesh)K.wireframe===!0?(R.setLineWidth(K.wireframeLinewidth*it()),Ot.setMode(B.LINES)):Ot.setMode(B.TRIANGLES);else if(q.isLine){let Ft=K.linewidth;Ft===void 0&&(Ft=1),R.setLineWidth(Ft*it()),q.isLineSegments?Ot.setMode(B.LINES):q.isLineLoop?Ot.setMode(B.LINE_LOOP):Ot.setMode(B.LINE_STRIP)}else q.isPoints?Ot.setMode(B.POINTS):q.isSprite&&Ot.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))Ot.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Ft=q._multiDrawStarts,ke=q._multiDrawCounts,ui=q._multiDrawCount,rr=De?xe.get(De).bytesPerElement:1,ni=H.get(K).currentProgram.getUniforms();for(let Hi=0;Hi<ui;Hi++)ni.setValue(B,"_gl_DrawID",Hi),Ot.render(Ft[Hi]/rr,ke[Hi])}else if(q.isInstancedMesh)Ot.renderInstances(je,Rt,q.count);else if(ie.isInstancedBufferGeometry){let Ft=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ke=Math.min(ie.instanceCount,Ft);Ot.renderInstances(je,Rt,ke)}else Ot.render(je,Rt)};function Ct(E,k,ie,K){N!==null&&E.isNodeMaterial&&N.setObject(K,E),ae===!0&&Xe.setState(E,ie,!1),E.transparent===!0&&E.side===Ri&&E.forceSinglePass===!1?(E.side=Ci,E.needsUpdate=!0,yr(E,k,K),E.side=Wr,E.needsUpdate=!0,yr(E,k,K),E.side=Ri):yr(E,k,K)}this.compile=function(E,k,ie=null){ie===null&&(ie=E),N!==null&&N.renderStart(E,k,ie),T=ve.get(ie),T.init(k),A.push(T),ie.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),E!==ie&&E.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),me=this.localClippingEnabled,ae=Xe.init(this.clippingPlanes,me),ae===!0&&Xe.setGlobalState(this.clippingPlanes,k),N!==null&&Ze.render(T.state.shadowsArray,ie,k);let K=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let ye=q.material;if(ye)if(Array.isArray(ye))for(let Ce=0;Ce<ye.length;Ce++){let Ue=ye[Ce];Ct(Ue,ie,k,q),K.add(Ue)}else Ct(ye,ie,k,q),K.add(ye)}),T=A.pop(),N!==null&&N.renderEnd(),K},this.compileAsync=function(E,k,ie=null){let K=this.compile(E,k,ie);return new Promise(q=>{function ye(){if(K.forEach(function(Ce){let Ue=H.get(Ce).currentProgram;(Ue===void 0||Ue.isReady())&&K.delete(Ce)}),K.size===0){q(E);return}setTimeout(ye,10)}ct.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let We=null;function yt(E){We&&We(E)}function Di(){Si.stop()}function dt(){Si.start()}let Si=new uf;Si.setAnimationLoop(yt),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(E){We=E,L.setAnimationLoop(E),E===null?Si.stop():Si.start()},L.addEventListener("sessionstart",Di),L.addEventListener("sessionend",dt),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;N!==null&&N.renderStart(E,k);let ie=L.enabled===!0&&L.isPresenting===!0,K=_!==null&&(z===null||ie)&&_.begin(b,z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(L.cameraAutoUpdate===!0&&L.updateCamera(k),k=L.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,k,z),T=ve.get(E,A.length),T.init(k),T.state.textureUnits=ee.getTextureUnits(),A.push(T),we.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),oe.setFromProjectionMatrix(we,cr,k.reversedDepth),me=this.localClippingEnabled,ae=Xe.init(this.clippingPlanes,me),v=Fe.get(E,w.length),v.init(),w.push(v),L.enabled===!0&&L.isPresenting===!0){let ye=b.xr.getDepthSensingMesh();ye!==null&&xr(ye,k,-1/0,b.sortObjects)}xr(E,k,0,b.sortObjects),v.finish(),N!==null&&N.updateLights(T.state.lightsArray),b.sortObjects===!0&&v.sort(ue,Ee),at=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,at&&rt.addToRenderList(v,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Xe.beginShadows();let q=T.state.shadowsArray;if(Ze.render(q,E,k),ae===!0&&Xe.endShadows(),(K&&_.hasRenderPass())===!1){let ye=v.opaque,Ce=v.transmissive;if(T.setupLights(),k.isArrayCamera){let Ue=k.cameras;if(Ce.length>0)for(let De=0,Be=Ue.length;De<Be;De++){let lt=Ue[De];Bt(ye,Ce,E,lt)}at&&rt.render(E);for(let De=0,Be=Ue.length;De<Be;De++){let lt=Ue[De];vt(v,E,lt,lt.viewport)}}else Ce.length>0&&Bt(ye,Ce,E,k),at&&rt.render(E),vt(v,E,k)}z!==null&&G===0&&(ee.updateMultisampleRenderTarget(z),ee.updateRenderTargetMipmap(z)),K&&_.end(b),E.isScene===!0&&E.onAfterRender(b,E,k),Ne.resetDefaultState(),re=-1,X=null,A.pop(),A.length>0?(T=A[A.length-1],ee.setTextureUnits(T.state.textureUnits),ae===!0&&Xe.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?v=w[w.length-1]:v=null,N!==null&&N.renderEnd()};function xr(E,k,ie,K){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)ie=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(oe)){K&&Oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(we);let ye=W.update(E),Ce=E.material;Ce.visible&&v.push(E,ye,Ce,ie,Oe.z,null,k)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(oe))){let ye=W.update(E),Ce=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Oe.copy(E.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Oe.copy(ye.boundingSphere.center)),Oe.applyMatrix4(E.matrixWorld).applyMatrix4(we)),Array.isArray(Ce)){let Ue=ye.groups;for(let De=0,Be=Ue.length;De<Be;De++){let lt=Ue[De],ot=Ce[lt.materialIndex];ot&&ot.visible&&v.push(E,ye,ot,ie,Oe.z,lt,k)}}else Ce.visible&&v.push(E,ye,Ce,ie,Oe.z,null,k)}}let q=E.children;for(let ye=0,Ce=q.length;ye<Ce;ye++)xr(q[ye],k,ie,K)}function vt(E,k,ie,K){let{opaque:q,transmissive:ye,transparent:Ce}=E;T.setupLightsView(ie),ae===!0&&Xe.setGlobalState(b.clippingPlanes,ie),K&&R.viewport(j.copy(K)),q.length>0&&Ui(q,k,ie),ye.length>0&&Ui(ye,k,ie),Ce.length>0&&Ui(Ce,k,ie),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function Bt(E,k,ie,K){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[K.id]===void 0){let ot=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[K.id]=new oi(1,1,{generateMipmaps:!0,type:ot?fi:Wi,minFilter:wr,samples:Math.max(4,ht.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let q=T.state.transmissionRenderTarget[K.id],ye=K.viewport||j;q.setSize(ye.z*b.transmissionResolutionScale,ye.w*b.transmissionResolutionScale);let Ce=b.getRenderTarget(),Ue=b.getActiveCubeFace(),De=b.getActiveMipmapLevel();b.setRenderTarget(q),b.getClearColor(Te),qe=b.getClearAlpha(),qe<1&&b.setClearColor(16777215,.5),b.clear(),at&&rt.render(ie);let Be=b.toneMapping;b.toneMapping=Ar;let lt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),T.setupLightsView(K),ae===!0&&Xe.setGlobalState(b.clippingPlanes,K),Ui(E,ie,K),ee.updateMultisampleRenderTarget(q),ee.updateRenderTargetMipmap(q),ct.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let je=0,At=k.length;je<At;je++){let Rt=k[je],{object:Mt,geometry:Ot,material:Ft,group:ke}=Rt;if(Ft.side===Ri&&Mt.layers.test(K.layers)){let ui=Ft.side;Ft.side=Ci,Ft.needsUpdate=!0,Oi(Mt,ie,K,Ot,Ft,ke),Ft.side=ui,Ft.needsUpdate=!0,ot=!0}}ot===!0&&(ee.updateMultisampleRenderTarget(q),ee.updateRenderTargetMipmap(q))}b.setRenderTarget(Ce,Ue,De),b.setClearColor(Te,qe),lt!==void 0&&(K.viewport=lt),b.toneMapping=Be}function Ui(E,k,ie){let K=k.isScene===!0?k.overrideMaterial:null;for(let q=0,ye=E.length;q<ye;q++){let Ce=E[q],{object:Ue,geometry:De,group:Be}=Ce,lt=Ce.material;lt.allowOverride===!0&&K!==null&&(lt=K),Ue.layers.test(ie.layers)&&Oi(Ue,k,ie,De,lt,Be)}}function Oi(E,k,ie,K,q,ye){N!==null&&q.isNodeMaterial&&N.setObject(E,q),E.onBeforeRender(b,k,ie,K,q,ye),E.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(b,k,ie,K,E,ye),q.transparent===!0&&q.side===Ri&&q.forceSinglePass===!1?(q.side=Ci,q.needsUpdate=!0,b.renderBufferDirect(ie,k,K,q,E,ye),q.side=Wr,q.needsUpdate=!0,b.renderBufferDirect(ie,k,K,q,E,ye),q.side=Ri):b.renderBufferDirect(ie,k,K,q,E,ye),E.onAfterRender(b,k,ie,K,q,ye)}function yr(E,k,ie){k.isScene!==!0&&(k=Ve);let K=H.get(E),q=T.state.lights,ye=T.state.shadowsArray,Ce=q.state.version,Ue=_e.getParameters(E,q.state,ye,k,ie,T.state.lightProbeGridArray),De=_e.getProgramCacheKey(Ue),Be=K.programs;K.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,K.fog=k.fog;let lt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;K.envMap=ce.get(E.envMap||K.environment,lt),K.envMapRotation=K.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",fe),Be=new Map,K.programs=Be);let ot=Be.get(De);if(ot!==void 0){if(K.currentProgram===ot&&K.lightsStateVersion===Ce)return Fi(E,Ue),ot}else Ue.uniforms=_e.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,ie,Ue),E.onBeforeCompile(Ue,b),ot=_e.acquireProgram(Ue,De),Be.set(De,ot),K.uniforms=Ue.uniforms;let je=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(je.clippingPlanes=Xe.uniform),Fi(E,Ue),K.needsLights=ti(E),K.lightsStateVersion=Ce,K.needsLights&&(je.ambientLightColor.value=q.state.ambient,je.lightProbe.value=q.state.probe,je.sunLights.value=q.state.sun,je.sunLightShadows.value=q.state.sunShadow,je.directionalLights.value=q.state.directional,je.directionalLightShadows.value=q.state.directionalShadow,je.spotLights.value=q.state.spot,je.spotLightShadows.value=q.state.spotShadow,je.rectAreaLights.value=q.state.rectArea,je.ltc_1.value=q.state.rectAreaLTC1,je.ltc_2.value=q.state.rectAreaLTC2,je.pointLights.value=q.state.point,je.pointLightShadows.value=q.state.pointShadow,je.hemisphereLights.value=q.state.hemi,je.sunShadowMatrix.value=q.state.sunShadowMatrix,je.sunShadowCascade.value=q.state.sunShadowCascade,je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,je.spotLightMatrix.value=q.state.spotLightMatrix,je.spotLightMap.value=q.state.spotLightMap,je.pointShadowMatrix.value=q.state.pointShadowMatrix),K.lightProbeGrid=T.state.lightProbeGridArray.length>0,K.currentProgram=ot,K.uniformsList=null,ot}function Yi(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=xo.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Fi(E,k){let ie=H.get(E);ie.outputColorSpace=k.outputColorSpace,ie.batching=k.batching,ie.batchingColor=k.batchingColor,ie.instancing=k.instancing,ie.instancingColor=k.instancingColor,ie.instancingMorph=k.instancingMorph,ie.skinning=k.skinning,ie.morphTargets=k.morphTargets,ie.morphNormals=k.morphNormals,ie.morphColors=k.morphColors,ie.morphTargetsCount=k.morphTargetsCount,ie.numClippingPlanes=k.numClippingPlanes,ie.numIntersection=k.numClipIntersection,ie.vertexAlphas=k.vertexAlphas,ie.vertexTangents=k.vertexTangents,ie.toneMapping=k.toneMapping}function pa(E,k){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition(k.matrixWorld);for(let ie=0,K=E.length;ie<K;ie++){let q=E[ie];if(q.texture!==null&&q.boundingBox.containsPoint(M))return q}return null}function Kr(E,k,ie,K,q){k.isScene!==!0&&(k=Ve),ee.resetTextureUnits();let ye=k.fog,Ce=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?k.environment:null,Ue=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ft.workingColorSpace,De=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Be=ce.get(K.envMap||Ce,De),lt=K.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ot=!!ie.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),je=!!ie.morphAttributes.position,At=!!ie.morphAttributes.normal,Rt=!!ie.morphAttributes.color,Mt=Ar;K.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Mt=b.toneMapping);let Ot=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ft=Ot!==void 0?Ot.length:0,ke=H.get(K),ui=T.state.lights;if(ae===!0&&(me===!0||E!==X)){let It=E===X&&K.id===re;Xe.setState(K,E,It)}let rr=!1;K.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ui.state.version||ke.outputColorSpace!==Ue||q.isBatchedMesh&&ke.batching===!1||!q.isBatchedMesh&&ke.batching===!0||q.isBatchedMesh&&ke.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&ke.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&ke.instancing===!1||!q.isInstancedMesh&&ke.instancing===!0||q.isSkinnedMesh&&ke.skinning===!1||!q.isSkinnedMesh&&ke.skinning===!0||q.isInstancedMesh&&ke.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ke.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ke.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ke.instancingMorph===!1&&q.morphTexture!==null||ke.envMap!==Be||K.fog===!0&&ke.fog!==ye||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Xe.numPlanes||ke.numIntersection!==Xe.numIntersection)||ke.vertexAlphas!==lt||ke.vertexTangents!==ot||ke.morphTargets!==je||ke.morphNormals!==At||ke.morphColors!==Rt||ke.toneMapping!==Mt||ke.morphTargetsCount!==Ft||!!ke.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(rr=!0):(rr=!0,ke.__version=K.version);let ni=ke.currentProgram;rr===!0&&(ni=yr(K,k,q),N&&K.isNodeMaterial&&N.onUpdateProgram(K,ni,ke));let Hi=!1,ki=!1,Dr=!1,Et=ni.getUniforms(),Ht=ke.uniforms;if(R.useProgram(ni.program)&&(Hi=!0,ki=!0,Dr=!0),K.id!==re&&(re=K.id,ki=!0),ke.needsLights){let It=pa(T.state.lightProbeGridArray,q);ke.lightProbeGrid!==It&&(ke.lightProbeGrid=It,ki=!0)}if(Hi||X!==E){R.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Et.setValue(B,"projectionMatrix",E.projectionMatrix),Et.setValue(B,"viewMatrix",E.matrixWorldInverse);let It=Et.map.cameraPosition;It!==void 0&&It.setValue(B,Le.setFromMatrixPosition(E.matrixWorld)),ht.logarithmicDepthBuffer&&Et.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Et.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,ki=!0,Dr=!0)}if(ke.needsLights&&(ui.state.sunShadowMap.length>0&&Et.setValue(B,"sunShadowMap",ui.state.sunShadowMap,ee),ui.state.directionalShadowMap.length>0&&Et.setValue(B,"directionalShadowMap",ui.state.directionalShadowMap,ee),ui.state.spotShadowMap.length>0&&Et.setValue(B,"spotShadowMap",ui.state.spotShadowMap,ee),ui.state.pointShadowMap.length>0&&Et.setValue(B,"pointShadowMap",ui.state.pointShadowMap,ee)),q.isSkinnedMesh){Et.setOptional(B,q,"bindMatrix"),Et.setOptional(B,q,"bindMatrixInverse");let It=q.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Et.setValue(B,"boneTexture",It.boneTexture,ee))}q.isBatchedMesh&&(Et.setOptional(B,q,"batchingTexture"),Et.setValue(B,"batchingTexture",q._matricesTexture,ee),Et.setOptional(B,q,"batchingIdTexture"),Et.setValue(B,"batchingIdTexture",q._indirectTexture,ee),Et.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&Et.setValue(B,"batchingColorTexture",q._colorsTexture,ee));let ar=ie.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0)&&St.update(q,ie,ni),(ki||ke.receiveShadow!==q.receiveShadow)&&(ke.receiveShadow=q.receiveShadow,Et.setValue(B,"receiveShadow",q.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&k.environment!==null&&(Ht.envMapIntensity.value=k.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=uM()),ki){if(Et.setValue(B,"toneMappingExposure",b.toneMappingExposure),ke.needsLights&&Dt(Ht,Dr),ye&&K.fog===!0&&Re.refreshFogUniforms(Ht,ye),Re.refreshMaterialUniforms(Ht,K,ne,$,T.state.transmissionRenderTarget[E.id]),ke.needsLights&&ke.lightProbeGrid){let It=ke.lightProbeGrid;Ht.probesSH.value=It.texture,Ht.probesMin.value.copy(It.boundingBox.min),Ht.probesMax.value.copy(It.boundingBox.max),Ht.probesResolution.value.copy(It.resolution)}xo.upload(B,Yi(ke),Ht,ee)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(xo.upload(B,Yi(ke),Ht,ee),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Et.setValue(B,"center",q.center),Et.setValue(B,"modelViewMatrix",q.modelViewMatrix),Et.setValue(B,"normalMatrix",q.normalMatrix),Et.setValue(B,"modelMatrix",q.matrixWorld),K.uniformsGroups!==void 0){let It=K.uniformsGroups;for(let Zr=0,Ur=It.length;Zr<Ur;Zr++){let zn=It[Zr];O.update(zn,ni),O.bind(zn,ni)}}return ni}function Dt(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.sunLights.needsUpdate=k,E.sunLightShadows.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function ti(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(E,k,ie){let K=H.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),H.get(E.texture).__webglTexture=k,H.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ie,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let ie=H.get(E);ie.__webglFramebuffer=k,ie.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,ie=0){z=E,P=k,G=ie;let K=null,q=!1,ye=!1;if(E){let Ce=H.get(E);if(Ce.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(B.FRAMEBUFFER,Ce.__webglFramebuffer),j.copy(E.viewport),te.copy(E.scissor),Pe=E.scissorTest,R.viewport(j),R.scissor(te),R.setScissorTest(Pe),re=-1;return}else if(Ce.__webglFramebuffer===void 0)ee.setupRenderTarget(E);else if(Ce.__hasExternalTextures)ee.rebindTextures(E,H.get(E.texture).__webglTexture,H.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Be=E.depthTexture;if(Ce.__boundDepthTexture!==Be){if(Be!==null&&H.has(Be)&&(E.width!==Be.image.width||E.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(E)}}let Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ye=!0);let De=H.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[k])?K=De[k][ie]:K=De[k],q=!0):E.samples>0&&ee.useMultisampledRTT(E)===!1?K=H.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?K=De[ie]:K=De,j.copy(E.viewport),te.copy(E.scissor),Pe=E.scissorTest}else j.copy(Ke).multiplyScalar(ne).floor(),te.copy(he).multiplyScalar(ne).floor(),Pe=Ge;if(ie!==0&&(K=D),R.bindFramebuffer(B.FRAMEBUFFER,K)&&R.drawBuffers(E,K),R.viewport(j),R.scissor(te),R.setScissorTest(Pe),q){let Ce=H.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ce.__webglTexture,ie)}else if(ye){let Ce=k;for(let Ue=0;Ue<E.textures.length;Ue++){let De=H.get(E.textures[Ue]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ue,De.__webglTexture,ie,Ce)}}else if(E!==null&&ie!==0){let Ce=H.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ce.__webglTexture,ie)}re=-1};function Ti(E){let k=H.get(E);return(k.__readFormat!==E.format||k.__readType!==E.type)&&(k.__readFormat=E.format,k.__readType=E.type,k.__formatReadable=ht.textureFormatReadable(E.format),k.__typeReadable=ht.textureTypeReadable(E.type)),k}this.readRenderTargetPixels=function(E,k,ie,K,q,ye,Ce,Ue=0){if(!(E&&E.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=H.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){R.bindFramebuffer(B.FRAMEBUFFER,De);try{let Be=E.textures[Ue],lt=Be.format,ot=Be.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ue);let je=Ti(Be);if(je.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(je.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-K&&ie>=0&&ie<=E.height-q&&B.readPixels(k,ie,K,q,ge.convert(lt),ge.convert(ot),ye)}finally{let Be=z!==null?H.get(z).__webglFramebuffer:null;R.bindFramebuffer(B.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(E,k,ie,K,q,ye,Ce,Ue=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=H.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(k>=0&&k<=E.width-K&&ie>=0&&ie<=E.height-q){R.bindFramebuffer(B.FRAMEBUFFER,De);let Be=E.textures[Ue],lt=Be.format,ot=Be.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ue);let je=Ti(Be);if(je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let At=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,At),B.bufferData(B.PIXEL_PACK_BUFFER,ye.byteLength,B.STREAM_READ),B.readPixels(k,ie,K,q,ge.convert(lt),ge.convert(ot),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Rt=z!==null?H.get(z).__webglFramebuffer:null;R.bindFramebuffer(B.FRAMEBUFFER,Rt);let Mt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Jm(B,Mt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,At),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ye),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(At),B.deleteSync(Mt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,ie=0){let K=Math.pow(2,-ie),q=Math.floor(E.image.width*K),ye=Math.floor(E.image.height*K),Ce=k!==null?k.x:0,Ue=k!==null?k.y:0;ee.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,ie,0,0,Ce,Ue,q,ye),R.unbindTexture()},this.copyTextureToTexture=function(E,k,ie=null,K=null,q=0,ye=0){let Ce,Ue,De,Be,lt,ot,je,At,Rt,Mt=E.isCompressedTexture?E.mipmaps[ye]:E.image;if(ie!==null)Ce=ie.max.x-ie.min.x,Ue=ie.max.y-ie.min.y,De=ie.isBox3?ie.max.z-ie.min.z:1,Be=ie.min.x,lt=ie.min.y,ot=ie.isBox3?ie.min.z:0;else{let Ht=Math.pow(2,-q);Ce=Math.floor(Mt.width*Ht),Ue=Math.floor(Mt.height*Ht),E.isDataArrayTexture?De=Mt.depth:E.isData3DTexture?De=Math.floor(Mt.depth*Ht):De=1,Be=0,lt=0,ot=0}K!==null?(je=K.x,At=K.y,Rt=K.z):(je=0,At=0,Rt=0);let Ot=ge.convert(k.format),Ft=ge.convert(k.type),ke;k.isData3DTexture?(ee.setTexture3D(k,0),ke=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ee.setTexture2DArray(k,0),ke=B.TEXTURE_2D_ARRAY):(ee.setTexture2D(k,0),ke=B.TEXTURE_2D),R.activeTexture(B.TEXTURE0),R.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),R.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),R.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);let ui=R.getParameter(B.UNPACK_ROW_LENGTH),rr=R.getParameter(B.UNPACK_IMAGE_HEIGHT),ni=R.getParameter(B.UNPACK_SKIP_PIXELS),Hi=R.getParameter(B.UNPACK_SKIP_ROWS),ki=R.getParameter(B.UNPACK_SKIP_IMAGES);R.pixelStorei(B.UNPACK_ROW_LENGTH,Mt.width),R.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Mt.height),R.pixelStorei(B.UNPACK_SKIP_PIXELS,Be),R.pixelStorei(B.UNPACK_SKIP_ROWS,lt),R.pixelStorei(B.UNPACK_SKIP_IMAGES,ot);let Dr=E.isDataArrayTexture||E.isData3DTexture,Et=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let Ht=H.get(E),ar=H.get(k),It=H.get(Ht.__renderTarget),Zr=H.get(ar.__renderTarget);R.bindFramebuffer(B.READ_FRAMEBUFFER,It.__webglFramebuffer),R.bindFramebuffer(B.DRAW_FRAMEBUFFER,Zr.__webglFramebuffer);for(let Ur=0;Ur<De;Ur++)Dr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(E).__webglTexture,q,ot+Ur),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(k).__webglTexture,ye,Rt+Ur)),B.blitFramebuffer(Be,lt,Ce,Ue,je,At,Ce,Ue,B.DEPTH_BUFFER_BIT,B.NEAREST);R.bindFramebuffer(B.READ_FRAMEBUFFER,null),R.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||H.has(E)){let Ht=H.get(E),ar=H.get(k);R.bindFramebuffer(B.READ_FRAMEBUFFER,Q),R.bindFramebuffer(B.DRAW_FRAMEBUFFER,F);for(let It=0;It<De;It++)Dr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ht.__webglTexture,q,ot+It):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ht.__webglTexture,q),Et?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ar.__webglTexture,ye,Rt+It):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ar.__webglTexture,ye),q!==0?B.blitFramebuffer(Be,lt,Ce,Ue,je,At,Ce,Ue,B.COLOR_BUFFER_BIT,B.NEAREST):Et?B.copyTexSubImage3D(ke,ye,je,At,Rt+It,Be,lt,Ce,Ue):B.copyTexSubImage2D(ke,ye,je,At,Be,lt,Ce,Ue);R.bindFramebuffer(B.READ_FRAMEBUFFER,null),R.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Et?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(ke,ye,je,At,Rt,Ce,Ue,De,Ot,Ft,Mt.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(ke,ye,je,At,Rt,Ce,Ue,De,Ot,Mt.data):B.texSubImage3D(ke,ye,je,At,Rt,Ce,Ue,De,Ot,Ft,Mt):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ye,je,At,Ce,Ue,Ot,Ft,Mt.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ye,je,At,Mt.width,Mt.height,Ot,Mt.data):B.texSubImage2D(B.TEXTURE_2D,ye,je,At,Ce,Ue,Ot,Ft,Mt);R.pixelStorei(B.UNPACK_ROW_LENGTH,ui),R.pixelStorei(B.UNPACK_IMAGE_HEIGHT,rr),R.pixelStorei(B.UNPACK_SKIP_PIXELS,ni),R.pixelStorei(B.UNPACK_SKIP_ROWS,Hi),R.pixelStorei(B.UNPACK_SKIP_IMAGES,ki),ye===0&&k.generateMipmaps&&B.generateMipmap(ke),R.unbindTexture()},this.initRenderTarget=function(E){H.get(E).__webglFramebuffer===void 0&&ee.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ee.setTextureCube(E,0):E.isData3DTexture?ee.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ee.setTexture2DArray(E,0):ee.setTexture2D(E,0),R.unbindTexture()},this.resetState=function(){P=0,G=0,z=null,R.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var $b=new C;var Dn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ji=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},dM=new Pa(-1,1,1,-1,0,1),vc=class extends bt{constructor(){super(),this.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tt([0,2,0,0,2,0],2))}},pM=new vc,la=class{constructor(t){this._mesh=new gt(pM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,dM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Un=class extends ji{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof Wt?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=fr.clone(t.uniforms),this.material=new Wt({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new la(this.material)}render(t,i,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ts=class extends ji{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,r){let a=t.getContext(),n=t.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),n.buffers.stencil.setFunc(a.ALWAYS,s,4294967295),n.buffers.stencil.setClear(o),n.buffers.stencil.setLocked(!0),t.setRenderTarget(r),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(a.EQUAL,1,4294967295),n.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),n.buffers.stencil.setLocked(!0)}},Vo=class extends ji{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Wo=class{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){let r=t.getSize(new pe);this._width=r.width,this._height=r.height,i=new oi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Un(Dn),this.copyPass.material.blending=ur,this.timer=new cf}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let i=this.renderer.getRenderTarget(),r=!1;for(let a=0,n=this.passes.length;a<n;a++){let s=this.passes[a];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),s.render(this.renderer,this.writeBuffer,this.readBuffer,t,r),s.needsSwap){if(r){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ts!==void 0&&(s instanceof Ts?r=!0:s instanceof Vo&&(r=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){let i=this.renderer.getSize(new pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;let r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(r,a)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Xo=class extends ji{constructor(t,i,r=null,a=null,n=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=r,this.clearColor=a,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Se}render(t,i,r){let a=t.autoClear;t.autoClear=!1;let n,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(n=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(n),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),t.autoClear=a}};var yf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var On=class e extends ji{constructor(t,i=1,r,a){super(),this.strength=i,this.radius=r,this.threshold=a,this.resolution=t!==void 0?new pe(t.x,t.y):new pe(256,256),this.clearColor=new Se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new oi(n,s,{type:fi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let d=new oi(n,s,{type:fi,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+c,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new oi(n,s,{type:fi,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),n=Math.round(n/2),s=Math.round(s/2)}let o=yf;this.highPassUniforms=fr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new pe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=fr.clone(Dn.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:Dn.vertexShader,fragmentShader:Dn.fragmentShader,premultipliedAlpha:!0,blending:vn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Se,this._oldClearAlpha=1,this._basic=new Mi,this._fsQuad=new la(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let r=Math.round(t/2),a=Math.round(i/2);this.renderTargetBright.setSize(r,a);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(r,a),this.renderTargetsVertical[n].setSize(r,a),this.separableBlurMaterials[n].uniforms.invSize.value=new pe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2)}render(t,i,r,a,n){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let s=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),n&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=s}_getSeparableBlurMaterial(t){let i=[],r=t/3;for(let s=0;s<t;s++)i.push(.39894*Math.exp(-.5*s*s/(r*r))/r);let a=[],n=[];for(let s=1;s<t;s+=2){let o=i[s],l=s+1<t?i[s+1]:0,h=o+l;a.push((s*o+(s+1)*l)/h),n.push(h)}return new Wt({defines:{KERNEL_PAIRS:a.length},uniforms:{colorTexture:{value:null},invSize:{value:new pe(.5,.5)},direction:{value:new pe(.5,.5)},centerWeight:{value:i[0]},gaussianOffsets:{value:a},gaussianWeights:{value:n}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Wt({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};On.BlurDirectionX=new pe(1,0);On.BlurDirectionY=new pe(0,1);var Es={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var jo=class extends ji{constructor(){super(),this.isOutputPass=!0,this.uniforms=fr.clone(Es.uniforms),this.material=new cc({name:Es.name,uniforms:this.uniforms,vertexShader:Es.vertexShader,fragmentShader:Es.fragmentShader}),this._fsQuad=new la(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===Lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ao?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ro?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Co?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wn?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Po?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Io&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var $t={giza:{x:-84,z:-12,biome:"desert",lat:"29.98\xB0N",lon:"31.13\xB0E"},cairo:{x:-58,z:-32,biome:"desert",lat:"30.03\xB0N",lon:"31.26\xB0E"},luxor:{x:-54,z:26,biome:"desert",lat:"25.69\xB0N",lon:"32.64\xB0E"},qinggan:{x:-26,z:-50,biome:"danxia",lat:"40.09\xB0N",lon:"94.67\xB0E"},yunnan:{x:-4,z:30,biome:"meadow",lat:"27.83\xB0N",lon:"99.71\xB0E"},beijing:{x:26,z:-38,biome:"autumn",lat:"39.92\xB0N",lon:"116.39\xB0E"},nanjing:{x:50,z:0,biome:"plane",lat:"32.06\xB0N",lon:"118.80\xB0E"},shanghai:{x:84,z:26,biome:"coast",lat:"31.24\xB0N",lon:"121.50\xB0E"},road:{x:38,z:44,biome:"field",lat:"\u2014",lon:"\u2014"}},ha={x:8,z:4},ws=e=>-70-Math.sin(e*.06)*4,xc=e=>6+Math.sin(e*.08)*3,fM=[[-30,4,13,9],[-22,-6,11,8],[-36,16,12,9],[-16,-16,9,7],[-40,30,10,8],[-18,54,13,9],[0,62,15,10],[16,58,11,8],[-64,-58,8,9],[62,-62,9,10],[60,-32,6,8]],bi=(e,t,i)=>{let r=Math.min(1,Math.max(0,(i-e)/(t-e)));return r*r*(3-2*r)};function qo(e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453;return i-Math.floor(i)}function _c(e,t){let i=Math.floor(e),r=Math.floor(t),a=e-i,n=t-r,s=a*a*(3-2*a),o=n*n*(3-2*n),l=qo(i,r),h=qo(i+1,r),c=qo(i,r+1),d=qo(i+1,r+1);return l+(h-l)*s+(c-l)*o+(l-h-c+d)*s*o}var jr=(e,t)=>_c(e,t)*.55+_c(e*2.1,t*2.1)*.3+_c(e*4.3,t*4.3)*.15;function Pr(e,t){let i={},r=0;for(let a in $t){let n=$t[a],s=(e-n.x)**2+(t-n.z)**2,o=Math.exp(-s/676);i[n.biome]=(i[n.biome]||0)+o,r+=o}for(let a in i)i[a]/=r||1;return i}function La(e,t){let i=null,r=1/0;for(let a in $t){let n=$t[a],s=Math.hypot(e-n.x,t-n.z);s<r&&(r=s,i=a)}return{key:i,d:r}}var As=(e,t)=>Math.pow(Math.pow(Math.abs(e)/112,4)+Math.pow(Math.abs(t)/72,4),.25),mM=[[[8,4],[4,16],[-4,30]],[[-4,30],[-18,42],[-30,46],[-44,38],[-54,26]],[[-54,26],[-62,18],[-72,8],[-80,-2],[-84,-12]],[[-84,-12],[-74,-24],[-58,-32]],[[-58,-32],[-44,-42],[-26,-50]],[[-26,-50],[-12,-36],[-6,-24],[2,-8],[8,4]],[[8,4],[18,-14],[26,-38]],[[8,4],[28,2],[50,0]],[[26,-38],[40,-26],[50,-18],[50,0]],[[50,0],[64,18],[84,26]],[[50,0],[46,22],[38,44]],[[38,44],[16,40],[-4,30]]];function gM(e,t,i,r,a,n){let s=a-i,o=n-r,l=Math.max(0,Math.min(1,((e-i)*s+(t-r)*o)/(s*s+o*o)));return Math.hypot(e-i-s*l,t-r-o*l)}function vM(e,t){let i=1/0;for(let r of mM)for(let a=0;a<r.length-1;a++)i=Math.min(i,gM(e,t,r[a][0],r[a][1],r[a+1][0],r[a+1][1]));return i}var yc=[];function _M(e,t){let i=.15+(jr(e*.05,t*.05)-.5)*.7,r=Pr(e,t),a=.5+.5*Math.sin(e*.18+Math.sin(t*.11)*2);i+=((r.desert||0)*.9+(r.danxia||0)*1.2)*(a*a*1.1+jr(e*.09,t*.09)*.9);for(let[l,h,c,d]of fM){let u=(e-l)**2+(t-h)**2;i+=c*Math.exp(-u/(d*d))*(.85+.3*jr(e*.2,t*.2))}let n=Math.abs(e-ws(t));i-=1.3*(1-bi(2.4,4.8,n))*(1-bi(60,70,Math.abs(t))),i-=1.4*(1-bi(5,11,Math.hypot(e-14,t-38))),i-=1.2*(1-bi(2.5,5,Math.hypot((e+6)*.6,t+52))),e>66&&(i-=1.4*(1-bi(2.6,5,Math.abs(t-xc(e))))*bi(66,72,e));for(let l in $t){let h=$t[l],c=Math.hypot(e-h.x,t-h.z),d=bi(6.5,12,c);i=i*d+.12*(1-d)}for(let[l,h,c,d]of yc){let u=Math.hypot(e-l,t-h),p=bi(c,c+4,u);i=i*p+d*(1-p)}let s=Math.hypot(e-ha.x,t-ha.z),o=bi(7,13,s);return i=i*o+.12*(1-o),i-=1.75*bi(.86,1.02,As(e,t)),i}function Mf(){let e=new Float32Array(38801);for(let s=0;s<=160;s++)for(let o=0;o<=240;o++)e[s*241+o]=_M(-120+o*1,-80+s*1);let t=(s,o)=>e[Math.min(160,Math.max(0,o))*241+Math.min(240,Math.max(0,s))],i=(s,o)=>{let l=(s- -120)/1,h=(o- -80)/1,c=Math.floor(l),d=Math.floor(h),u=l-c,p=h-d;return t(c,d)*(1-u)*(1-p)+t(c+1,d)*u*(1-p)+t(c,d+1)*(1-u)*p+t(c+1,d+1)*u*p},r=new Float32Array((240/2+1)*(160/2+1));for(let s=0;s<=160/2;s++)for(let o=0;o<=240/2;o++)r[s*(240/2+1)+o]=vM(-120+o*2,-80+s*2);return{H:e,at:t,sample:i,slope:(s,o)=>Math.hypot(i(s+1,o)-i(s-1,o),i(s,o+1)-i(s,o-1))/2,road:(s,o)=>{let l=Math.round((s- -120)/2),h=Math.round((o- -80)/2);return r[Math.min(160/2,Math.max(0,h))*(240/2+1)+Math.min(240/2,Math.max(0,l))]}}}var Qt={half:{x:1.05,y:.34,z:.66},wheel:{x:.78,y:-.08,z:.7,r:.42,rest:.34},mass:1,com:{x:0,y:-.8,z:0},engine:7.5,boost:12.5,reverse:4.6,brake:.55,idleBrake:.03,handbrake:1.1,top:14,topBoost:21,topReverse:6,steer:.55,steerFast:.22,jump:6.4},Lr=1/60,Na=(e,t,i)=>Math.min(i,Math.max(t,e)),bf=(e,t,i)=>{let r=Na((i-e)/(t-e),0,1);return r*r*(3-2*r)};function Sf(e,t){let i=new e.World({x:0,y:-18,z:0});i.timestep=Lr;let r=new e.EventQueue(!0),a=new Map,n=new Float32Array(38801);for(let P=0;P<=240;P++)for(let G=0;G<=160;G++)n[P*161+G]=t.at(P,G);let s=i.createRigidBody(e.RigidBodyDesc.fixed().setTranslation(-120+240/2,0,-80+160/2)),o=i.createCollider(e.ColliderDesc.heightfield(160,240,n,{x:240,y:1,z:160}).setFriction(.9),s);a.set(o.handle,"ground");let l=i.createRigidBody(e.RigidBodyDesc.fixed()),h=P=>({x:0,y:Math.sin(P/2),z:0,w:Math.cos(P/2)}),c=(P,G)=>(P&&a.set(P.handle,G),P),d={box(P,G,z,re,X,j,te=0,Pe="stone"){return c(i.createCollider(e.ColliderDesc.cuboid(re,X,j).setTranslation(P,G,z).setRotation(h(te)).setFriction(.5),l),Pe)},cyl(P,G,z,re,X,j="stone"){return c(i.createCollider(e.ColliderDesc.cylinder(re,X).setTranslation(P,G,z).setFriction(.5),l),j)},hull(P,G,z,re,X=0,j="stone"){let te=e.ColliderDesc.convexHull(new Float32Array(P));return te&&c(i.createCollider(te.setTranslation(G,z,re).setRotation(h(X)).setFriction(.5),l),j)}},u=[];function p(P,{x:G,y:z,z:re,ry:X=0,mass:j=1,friction:te=.6,restitution:Pe=.15,kind:Te="wood",linDamp:qe=.1,angDamp:He=.3}){var ue;let $=i.createRigidBody(e.RigidBodyDesc.dynamic().setTranslation(G,z,re).setRotation(h(X)).setCanSleep(!0).setLinearDamping(qe).setAngularDamping(He)),ne;return P.type==="box"?ne=e.ColliderDesc.cuboid(P.hx,P.hy,P.hz):P.type==="roundcyl"?ne=e.ColliderDesc.roundCylinder(P.hh,P.r,(ue=P.b)!=null?ue:.05):P.type==="cone"?ne=e.ColliderDesc.cone(P.hh,P.r):P.type==="cyl"?ne=e.ColliderDesc.cylinder(P.hh,P.r):ne=e.ColliderDesc.ball(P.r),P.rot&&ne.setRotation(P.rot),ne.setMass(j).setFriction(te).setRestitution(Pe),c(i.createCollider(ne,$),Te),$.sleep(),u.push($),$}let g=i.createRigidBody(e.RigidBodyDesc.dynamic().setTranslation(0,3,0).setCanSleep(!1).setCcdEnabled(!0).setAngularDamping(.6).setLinearDamping(.08)),x=Qt.half,m=i.createCollider(e.ColliderDesc.cuboid(x.x,x.y,x.z).setMassProperties(Qt.mass,Qt.com,{x:.3,y:.45,z:.32},{x:0,y:0,z:0,w:1}).setFriction(.3).setRestitution(.1).setActiveEvents(e.ActiveEvents.COLLISION_EVENTS),g),f=i.createCollider(e.ColliderDesc.cuboid(.62,.26,.6).setTranslation(-.12,.58,0).setMass(0).setFriction(.3).setActiveEvents(e.ActiveEvents.COLLISION_EVENTS),g),y=new Set([m.handle,f.handle]),M=i.createVehicleController(g),v=Qt.wheel,T=[[v.x,v.y,v.z],[v.x,v.y,-v.z],[-v.x,v.y,v.z],[-v.x,v.y,-v.z]];T.forEach(([P,G,z],re)=>{M.addWheel({x:P,y:G,z},{x:0,y:-1,z:0},{x:0,y:0,z:1},v.rest,v.r),M.setWheelSuspensionStiffness(re,34),M.setWheelSuspensionCompression(re,3.4),M.setWheelSuspensionRelaxation(re,2.8),M.setWheelMaxSuspensionTravel(re,.32),M.setWheelMaxSuspensionForce(re,200),M.setWheelFrictionSlip(re,1.5),M.setWheelSideFrictionStiffness(re,1.6)});let w=(P,G)=>{let{x:z,y:re,z:X,w:j}=P,[te,Pe,Te]=G,qe=j*te+re*Te-X*Pe,He=j*Pe+X*te-z*Te,$=j*Te+z*Pe-re*te,ne=-z*te-re*Pe-X*Te;return[qe*j+ne*-z+He*-X-$*-re,He*j+ne*-re+$*-z-qe*-X,$*j+ne*-X+qe*-re-He*-z]},A=P=>{let G=g.translation(),[z,re,X]=w(g.rotation(),T[P]);return{x:G.x+z,y:G.y+re,z:G.z+X}},_=()=>({p:{x:0,y:0,z:0},q:{x:0,y:0,z:0,w:1},travel:[v.rest,v.rest,v.rest,v.rest],steer:[0,0,0,0],spin:[0,0,0,0]}),b=_(),U=_(),N=P=>{var re,X,j;let G=g.translation(),z=g.rotation();P.p.x=G.x,P.p.y=G.y,P.p.z=G.z,P.q.x=z.x,P.q.y=z.y,P.q.z=z.z,P.q.w=z.w;for(let te=0;te<4;te++)P.travel[te]=(re=M.wheelSuspensionLength(te))!=null?re:v.rest,P.steer[te]=(X=M.wheelSteering(te))!=null?X:0,P.spin[te]=(j=M.wheelRotation(te))!=null?j:0},D={body:g,vehicle:M,handles:y,steer:0,upsideT:0,waterDepth:0,contacts:0,rescued:!1,forward(){return w(g.rotation(),[1,0,0])},up(){return w(g.rotation(),[0,1,0])},speed(){let P=g.linvel(),G=D.forward();return P.x*G[0]+P.y*G[1]+P.z*G[2]},yaw(){let P=D.forward();return Math.atan2(-P[2],P[0])},place(P,G,z,re){g.setTranslation({x:P,y:G,z},!0),g.setRotation(h(re),!0),g.setLinvel({x:0,y:0,z:0},!0),g.setAngvel({x:0,y:0,z:0},!0),D.steer=0,N(b),N(U)},control(P,G={}){let z=D.speed(),re=Math.abs(z),X=P.boost?Qt.topBoost:Qt.top,j=P.gas&&z<-.8||P.brake&&z>.8,te=0,Pe=P.gas||P.brake?0:Qt.idleBrake;P.gas&&!j&&(te=(P.boost?Qt.boost:Qt.engine)*Na((X-z)/3,0,1)),P.brake&&!j&&(te=-Qt.reverse*Na((Qt.topReverse+z)/2,0,1)),j&&(Pe=Qt.brake);let Te=1-Math.max((G.wet||0)*.25,(G.snow||0)*.3),qe=Qt.steer+(Qt.steerFast-Qt.steer)*bf(3.5,20,re);D.steer+=((P.left-P.right)*qe-D.steer)*Math.min(1,Lr*12);let He=(1.7-.35*bf(6,22,re))*Te;for(let he=0;he<4;he++){let Ge=he>=2;M.setWheelEngineForce(he,te*(Ge?.55:.45)),M.setWheelBrake(he,P.hand&&Ge?Qt.handbrake:Pe),M.setWheelSteering(he,Ge?0:D.steer),M.setWheelFrictionSlip(he,1.5*Te),M.setWheelSideFrictionStiffness(he,P.hand&&Ge?.45:He)}let $=0;for(let he=0;he<4;he++)M.wheelIsInContact(he)&&$++;D.contacts=$,P.jump&&$>=2&&g.linvel().y<1.5&&g.applyImpulse({x:0,y:Qt.mass*Qt.jump,z:0},!0),g.setAngularDamping(.6+$*.35);let ne=D.up();if(ne[1]>.3)for(let he of[0,2]){let Ge=he+1;if(!M.wheelIsInContact(he)||!M.wheelIsInContact(Ge))continue;let oe=M.wheelSuspensionLength(he),ae=M.wheelSuspensionLength(Ge);if(oe==null||ae==null)continue;let me=Na((ae-oe)*.9,-.08,.08);g.applyImpulseAtPoint({x:ne[0]*me,y:ne[1]*me,z:ne[2]*me},A(he),!0),g.applyImpulseAtPoint({x:-ne[0]*me,y:-ne[1]*me,z:-ne[2]*me},A(Ge),!0)}let ue=g.translation(),Ee=g.linvel();if(D.waterDepth=Na(-.45-(ue.y-.55),0,1.6),D.waterDepth>.03){let he=D.waterDepth,Ge=Math.min(.22,Lr*he*(.9+Math.hypot(Ee.x,Ee.z)*.25));g.applyImpulse({x:-Ee.x*Qt.mass*Ge,y:Qt.mass*Lr*(he*9-Ee.y*1.4*he),z:-Ee.z*Qt.mass*Ge},!0)}let Ke=Math.acos(Na(ne[1],-1,1));if(Ke>.6&&$<2){let he=(Ke-.6)*.02;g.applyTorqueImpulse({x:ne[2]*he,y:0,z:-ne[0]*he},!0)}D.upsideT=ne[1]<.25?D.upsideT+Lr:0,D.upsideT>1.6&&(D.place(ue.x,ue.y+1.6,ue.z,D.yaw()),D.upsideT=0,D.rescued=!0)},pose(P){let G=Na(P,0,1);return{p:{x:b.p.x+(U.p.x-b.p.x)*G,y:b.p.y+(U.p.y-b.p.y)*G,z:b.p.z+(U.p.z-b.p.z)*G},q0:b.q,q1:U.q,a:G,travel:U.travel.map((z,re)=>b.travel[re]+(z-b.travel[re])*G),steer:U.steer.map((z,re)=>b.steer[re]+(z-b.steer[re])*G),spin:U.spin.map((z,re)=>{let X=z-b.spin[re];return b.spin[re]+Math.atan2(Math.sin(X),Math.cos(X))*G})}},wheels(){let P=[];for(let G=0;G<4;G++)P.push({contact:M.wheelIsInContact(G),point:M.wheelContactPoint(G)});return P},WHEELS:T},Q=0;function F(P,G,z,re){Q+=Math.min(P,.1);let X=0;for(;Q>=Lr&&X<5;){let j=g.linvel();D.control(G,z),G.jump=0,M.updateVehicle(Lr,e.QueryFilterFlags.EXCLUDE_SENSORS),i.step(r),[b,U]=[U,b],N(U),r.drainCollisionEvents((te,Pe,Te)=>{if(!Te||!re)return;let qe=y.has(te)?Pe:y.has(Pe)?te:null;if(qe===null)return;let He=a.get(qe)||"stone";if(He==="ground")return;let $=Math.hypot(j.x,j.z);if($<1.2)return;let ne=i.getCollider(qe),ue=ne?ne.translation():g.translation();re(He,$,ue)}),Q-=Lr,X++}return X===5&&(Q=0),Q/Lr}return N(b),N(U),{R:e,world:i,statics:d,dynamic:p,dynamics:u,car:D,step:F,quatY:h,kinds:a,STEP:Lr}}function Mc(e,t=!1){let i=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),n={},s={},o=e[0].morphTargetsRelative,l=new bt,h=0;for(let c=0;c<e.length;++c){let d=e[c],u=0;if(i!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;n[p]===void 0&&(n[p]=[]),n[p].push(d.attributes[p]),u++}if(u!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!a.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.morphAttributes[p])}if(t){let p;if(i)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,c),h+=p}}if(i){let c=0,d=[];for(let u=0;u<e.length;++u){let p=e[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+c);c+=e[u].attributes.position.count}l.setIndex(d)}for(let c in n){let d=Tf(n[c]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,d)}for(let c in s){let d=s[c][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let u=0;u<d;++u){let p=[];for(let x=0;x<s[c].length;++x)p.push(s[c][x][u]);let g=Tf(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}}return l}function Tf(e){let t,i,r,a=-1,n=0;for(let h=0;h<e.length;++h){let c=e[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=c.itemSize),i!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=c.normalized),r!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=c.gpuType),a!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=c.count*i}let s=new t(n),o=new Vt(s,i,r),l=0;for(let h=0;h<e.length;++h){let c=e[h];if(c.isInterleavedBufferAttribute){let d=l/i;for(let u=0,p=c.count;u<p;u++)for(let g=0;g<i;g++){let x=c.getComponent(u,g);o.setComponent(u+d,g,x)}}else s.set(c.array,l);l+=c.count*i}return a!==void 0&&(o.gpuType=a),o}function bc(e,t){if(t===tp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===vs||t===Do){let i=e.getIndex();if(i===null){let n=[],s=e.getAttribute("position");if(s!==void 0){for(let o=0;o<s.count;o++)n.push(o);e.setIndex(n),i=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let r=i.count-2,a=[];if(t===vs)for(let n=1;n<=r;n++)a.push(i.getX(0)),a.push(i.getX(n)),a.push(i.getX(n+1));else for(let n=0;n<r;n++)n%2===0?(a.push(i.getX(n)),a.push(i.getX(n+1)),a.push(i.getX(n+2))):(a.push(i.getX(n+2)),a.push(i.getX(n+1)),a.push(i.getX(n)));return a.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),e.setIndex(a),e.clearGroups(),e}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function Ef(e){let t=new Map,i=new Map,r=e.clone();return wf(e,r,function(a,n){t.set(n,a),i.set(a,n)}),r.traverse(function(a){if(!a.isSkinnedMesh)return;let n=a,s=t.get(a),o=s.skeleton.bones;n.skeleton=s.skeleton.clone(),n.bindMatrix.copy(s.bindMatrix),n.skeleton.bones=o.map(function(l){return i.get(l)}),n.bind(n.skeleton,n.bindMatrix)}),r}function wf(e,t,i){i(e,t);for(let r=0;r<e.children.length;r++)wf(e.children[r],t.children[r],i)}var Yo=class extends Ia{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(i){return new Cc(i)}),this.register(function(i){return new Ic(i)}),this.register(function(i){return new zc(i)}),this.register(function(i){return new Hc(i)}),this.register(function(i){return new kc(i)}),this.register(function(i){return new Lc(i)}),this.register(function(i){return new Nc(i)}),this.register(function(i){return new Dc(i)}),this.register(function(i){return new Uc(i)}),this.register(function(i){return new Rc(i)}),this.register(function(i){return new Oc(i)}),this.register(function(i){return new Pc(i)}),this.register(function(i){return new Bc(i)}),this.register(function(i){return new Fc(i)}),this.register(function(i){return new wc(i)}),this.register(function(i){return new Ko(i,_t.EXT_MESHOPT_COMPRESSION)}),this.register(function(i){return new Ko(i,_t.KHR_MESHOPT_COMPRESSION)}),this.register(function(i){return new Gc(i)})}load(t,i,r,a){let n=this,s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){let h=Ln.extractUrlBase(t);s=Ln.resolveURL(h,this.path)}else s=Ln.extractUrlBase(t);this.manager.itemStart(t);let o=function(h){a?a(h):console.error(h),n.manager.itemError(t),n.manager.itemEnd(t)},l=new dc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(h){try{n.parse(h,s,function(c){i(c),n.manager.itemEnd(t)},o)}catch(c){o(c)}},r,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,i,r,a){let n,s={},o={},l=new TextDecoder;if(typeof t=="string")n=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Pf){try{s[_t.KHR_BINARY_GLTF]=new Vc(t)}catch(d){a&&a(d);return}n=JSON.parse(s[_t.KHR_BINARY_GLTF].content)}else n=JSON.parse(l.decode(t));else n=t;if(n.asset===void 0||n.asset.version[0]<2){a&&a(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let h=new Zc(n,{path:i||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){let d=this.pluginCallbacks[c](h);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,s[d.name]=!0}if(n.extensionsUsed)for(let c=0;c<n.extensionsUsed.length;++c){let d=n.extensionsUsed[c],u=n.extensionsRequired||[];switch(d){case _t.KHR_MATERIALS_UNLIT:s[d]=new Ac;break;case _t.KHR_DRACO_MESH_COMPRESSION:s[d]=new Wc(n,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:s[d]=new Xc;break;case _t.KHR_MESH_QUANTIZATION:s[d]=new jc;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}h.setExtensions(s),h.setPlugins(o),h.parse(r,a)}parseAsync(t,i){let r=this;return new Promise(function(a,n){r.parse(t,i,a,n)})}};function xM(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function ei(e,t,i){let r=e.json.materials[t];return r.extensions&&r.extensions[i]?r.extensions[i]:null}var _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},wc=class{constructor(t){this.parser=t,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,i=this.parser.json.nodes||[];for(let r=0,a=i.length;r<a;r++){let n=i[r];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(t){let i=this.parser,r="light:"+t,a=i.cache.get(r);if(a)return a;let n=i.json,l=((n.extensions&&n.extensions[this.name]||{}).lights||[])[t],h,c=new Se(16777215);l.color!==void 0&&c.setRGB(l.color[0],l.color[1],l.color[2],zi);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new Ss(c),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new lf(c),h.distance=d;break;case"spot":h=new zo(c),h.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),Nr(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=i.createUniqueName(l.name||"light_"+t),a=Promise.resolve(h),i.cache.add(r,a),a}getDependency(t,i){if(t==="light")return this._loadLight(i)}createNodeAttachment(t){let i=this,r=this.parser,n=r.json.nodes[t],o=(n.extensions&&n.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return r._getNodeRef(i.cache,o,l)})}},Ac=class{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return Mi}extendParams(t,i,r){let a=[];t.color=new Se(1,1,1),t.opacity=1;let n=i.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){let s=n.baseColorFactor;t.color.setRGB(s[0],s[1],s[2],zi),t.opacity=s[3]}n.baseColorTexture!==void 0&&a.push(r.assignTexture(t,"map",n.baseColorTexture,Gt))}return Promise.all(a)}},Rc=class{constructor(t){this.parser=t,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,i){let r=ei(this.parser,t,this.name);return r===null||r.emissiveStrength!==void 0&&(i.emissiveIntensity=r.emissiveStrength),Promise.resolve()}},Cc=class{constructor(t){this.parser=t,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return ei(this.parser,t,this.name)!==null?mr:null}extendMaterialParams(t,i){let r=ei(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];if(r.clearcoatFactor!==void 0&&(i.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&a.push(this.parser.assignTexture(i,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(i.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&a.push(this.parser.assignTexture(i,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(a.push(this.parser.assignTexture(i,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){let n=r.clearcoatNormalTexture.scale;i.clearcoatNormalScale=new pe(n,n)}return Promise.all(a)}},Ic=class{constructor(t){this.parser=t,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(t){return ei(this.parser,t,this.name)!==null?mr:null}extendMaterialParams(t,i){let r=ei(this.parser,t,this.name);return r===null||(i.dispersion=r.dispersion!==void 0?r.dispersion:0),Promise.resolve()}},Pc=class{constructor(t){this.parser=t,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return ei(this.parser,t,this.name)!==null?mr:null}extendMaterialParams(t,i){let r=ei(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];return r.iridescenceFactor!==void 0&&(i.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&a.push(this.parser.assignTexture(i,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(i.iridescenceIOR=r.iridescenceIor),i.iridescenceThicknessRange===void 0&&(i.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&a.push(this.parser.assignTexture(i,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(a)}},Lc=class{constructor(t){this.parser=t,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(t){return ei(this.parser,t,this.name)!==null?mr:null}extendMaterialParams(t,i){let r=ei(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];if(i.sheenColor=new Se(0,0,0),i.sheenRoughness=0,i.sheen=1,r.sheenColorFactor!==void 0){let n=r.sheenColorFactor;i.sheenColor.setRGB(n[0],n[1],n[2],zi)}return r.sheenRoughnessFactor!==void 0&&(i.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&a.push(this.parser.assignTexture(i,"sheenColorMap",r.sheenColorTexture,Gt)),r.sheenRoughnessTexture!==void 0&&a.push(this.parser.assignTexture(i,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(a)}},Nc=class{constructor(t){this.parser=t,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return ei(this.parser,t,this.name)!==null?mr:null}extendMaterialParams(t,i){let r=ei(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];return r.transmissionFactor!==void 0&&(i.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&a.push(this.parser.assignTexture(i,"transmissionMap",r.transmissionTexture)),Promise.all(a)}},Dc=class{constructor(t){this.parser=t,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(t){return ei(this.parser,t,this.name)!==null?mr:null}extendMaterialParams(t,i){let r=ei(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];i.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&a.push(this.parser.assignTexture(i,"thicknessMap",r.thicknessTexture)),i.attenuationDistance=r.attenuationDistance||1/0;let n=r.attenuationColor||[1,1,1];return i.attenuationColor=new Se().setRGB(n[0],n[1],n[2],zi),Promise.all(a)}},Uc=class{constructor(t){this.parser=t,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(t){return ei(this.parser,t,this.name)!==null?mr:null}extendMaterialParams(t,i){let r=ei(this.parser,t,this.name);return r===null||(i.ior=r.ior!==void 0?r.ior:1.5,i.ior===0&&(i.ior=1e3)),Promise.resolve()}},Oc=class{constructor(t){this.parser=t,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(t){return ei(this.parser,t,this.name)!==null?mr:null}extendMaterialParams(t,i){let r=ei(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];i.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&a.push(this.parser.assignTexture(i,"specularIntensityMap",r.specularTexture));let n=r.specularColorFactor||[1,1,1];return i.specularColor=new Se().setRGB(n[0],n[1],n[2],zi),r.specularColorTexture!==void 0&&a.push(this.parser.assignTexture(i,"specularColorMap",r.specularColorTexture,Gt)),Promise.all(a)}},Fc=class{constructor(t){this.parser=t,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(t){return ei(this.parser,t,this.name)!==null?mr:null}extendMaterialParams(t,i){let r=ei(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];return i.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&a.push(this.parser.assignTexture(i,"bumpMap",r.bumpTexture)),Promise.all(a)}},Bc=class{constructor(t){this.parser=t,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return ei(this.parser,t,this.name)!==null?mr:null}extendMaterialParams(t,i){let r=ei(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];return r.anisotropyStrength!==void 0&&(i.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(i.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&a.push(this.parser.assignTexture(i,"anisotropyMap",r.anisotropyTexture)),Promise.all(a)}},zc=class{constructor(t){this.parser=t,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(t){let i=this.parser,r=i.json,a=r.textures[t];if(!a.extensions||!a.extensions[this.name])return null;let n=a.extensions[this.name],s=i.options.ktx2Loader;if(!s){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return i.loadTextureImage(t,n.source,s)}},Hc=class{constructor(t){this.parser=t,this.name=_t.EXT_TEXTURE_WEBP}loadTexture(t){let i=this.name,r=this.parser,a=r.json,n=a.textures[t];if(!n.extensions||!n.extensions[i])return null;let s=n.extensions[i],o=a.images[s.source],l=r.textureLoader;if(o.uri){let h=r.options.manager.getHandler(o.uri);h!==null&&(l=h)}return r.loadTextureImage(t,s.source,l)}},kc=class{constructor(t){this.parser=t,this.name=_t.EXT_TEXTURE_AVIF}loadTexture(t){let i=this.name,r=this.parser,a=r.json,n=a.textures[t];if(!n.extensions||!n.extensions[i])return null;let s=n.extensions[i],o=a.images[s.source],l=r.textureLoader;if(o.uri){let h=r.options.manager.getHandler(o.uri);h!==null&&(l=h)}return r.loadTextureImage(t,s.source,l)}},Ko=class{constructor(t,i){this.name=i,this.parser=t}loadBufferView(t){let i=this.parser.json,r=i.bufferViews[t];if(r.extensions&&r.extensions[this.name]){let a=r.extensions[this.name],n=this.parser.getDependency("buffer",a.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return n.then(function(o){let l=a.byteOffset||0,h=a.byteLength||0,c=a.count,d=a.byteStride,u=new Uint8Array(o,l,h);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(c,d,u,a.mode,a.filter).then(function(p){return p.buffer}):s.ready.then(function(){let p=new ArrayBuffer(c*d);return s.decodeGltfBuffer(new Uint8Array(p),c,d,u,a.mode,a.filter),p})})}else return null}},Gc=class{constructor(t){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let i=this.parser.json,r=i.nodes[t];if(!r.extensions||!r.extensions[this.name]||r.mesh===void 0)return null;let a=i.meshes[r.mesh];for(let h of a.primitives)if(h.mode!==ir.TRIANGLES&&h.mode!==ir.TRIANGLE_STRIP&&h.mode!==ir.TRIANGLE_FAN&&h.mode!==void 0)return null;let s=r.extensions[this.name].attributes,o=[],l={};for(let h in s)o.push(this.parser.getDependency("accessor",s[h]).then(c=>(l[h]=c,l[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(h=>{let c=h.pop(),d=c.isGroup?c.children:[c],u=h[0].count,p=[];for(let g of d){let x=new Qe,m=new C,f=new Jt,y=new C(1,1,1),M=new tr(g.geometry,g.material,u);for(let T=0;T<u;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,T),l.SCALE&&y.fromBufferAttribute(l.SCALE,T),M.setMatrixAt(T,x.compose(m,f,y));let v=null;for(let T in l)if(T==="_COLOR_0"){let w=l[T];M.instanceColor=new oa(w.array,w.itemSize,w.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(v===null){let A=M.geometry;v=new bt,v.name=A.name;for(let _ in A.attributes)v.setAttribute(_,A.attributes[_]);for(let _ in A.morphAttributes)v.morphAttributes[_]=A.morphAttributes[_];A.index!==null&&v.setIndex(A.index),v.morphTargetsRelative=A.morphTargetsRelative;for(let _ of A.groups)v.addGroup(_.start,_.count,_.materialIndex);A.boundingBox!==null&&(v.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(v.boundingSphere=A.boundingSphere.clone()),v.drawRange.start=A.drawRange.start,v.drawRange.count=A.drawRange.count,v.userData=Object.assign({},A.userData),M.geometry=v}let w=l[T];v.setAttribute(T,new oa(w.array,w.itemSize,w.normalized))}Zt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return c.isGroup?(c.clear(),c.add(...p),c):p[0]}))}},Pf="glTF",Rs=12,Af={JSON:1313821514,BIN:5130562},Vc=class{constructor(t){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;let i=new DataView(t,0,Rs),r=new TextDecoder;if(this.header={magic:r.decode(new Uint8Array(t.slice(0,4))),version:i.getUint32(4,!0),length:i.getUint32(8,!0)},this.header.magic!==Pf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let a=this.header.length-Rs,n=new DataView(t,Rs),s=0;for(;s<a;){let o=n.getUint32(s,!0);s+=4;let l=n.getUint32(s,!0);if(s+=4,l===Af.JSON){let h=new Uint8Array(t,Rs+s,o);this.content=r.decode(h)}else if(l===Af.BIN){let h=Rs+s;this.body=t.slice(h,h+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Wc=class{constructor(t,i){if(!i)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=i,this.dracoLoader.preload()}decodePrimitive(t,i){let r=this.json,a=this.dracoLoader,n=t.extensions[this.name].bufferView,s=t.extensions[this.name].attributes,o={},l={},h={};for(let c in s){let d=Yc[c]||c.toLowerCase();o[d]=s[c]}for(let c in t.attributes){let d=Yc[c]||c.toLowerCase();if(s[c]!==void 0){let u=r.accessors[t.attributes[c]],p=Fn[u.componentType];h[d]=p.name,l[d]=u.normalized===!0}}return i.getDependency("bufferView",n).then(function(c){return new Promise(function(d,u){a.decodeDracoFile(c,function(p){for(let g in p.attributes){let x=p.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}d(p)},o,h,zi,u)})})}},Xc=class{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(t,i){if((i.texCoord===void 0||i.texCoord===t.channel)&&i.offset===void 0&&i.rotation===void 0&&i.scale===void 0)return t;if(t=t.clone(),i.texCoord!==void 0&&(t.channel=i.texCoord),i.offset!==void 0&&t.offset.fromArray(i.offset),i.rotation!==void 0&&(t.rotation=i.rotation),i.scale!==void 0&&t.repeat.fromArray(i.scale),i.rotation!==void 0){let r=Math.cos(t.rotation),a=Math.sin(t.rotation);t.matrix.set(t.repeat.x*r,t.repeat.y*a,t.offset.x,-t.repeat.x*a,t.repeat.y*r,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}},jc=class{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}},Zo=class extends Ra{constructor(t,i,r,a){super(t,i,r,a)}copySampleValue_(t){let i=this.resultBuffer,r=this.sampleValues,a=this.valueSize,n=t*a*3+a;for(let s=0;s!==a;s++)i[s]=r[n+s];return i}interpolate_(t,i,r,a){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,h=o*3,c=a-i,d=(r-i)/c,u=d*d,p=u*d,g=t*h,x=g-h,m=-2*p+3*u,f=p-u,y=1-m,M=f-u+d;for(let v=0;v!==o;v++){let T=s[x+v+o],w=s[x+v+l]*c,A=s[g+v+o],_=s[g+v]*c;n[v]=y*T+M*w+m*A+f*_}return n}},yM=new Jt,qc=class extends Zo{interpolate_(t,i,r,a){let n=super.interpolate_(t,i,r,a);return yM.fromArray(n).normalize().toArray(n),n}},ir={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rf={9728:ri,9729:Yt,9984:Hh,9985:is,9986:sn,9987:wr},Cf={33071:hr,33648:ls,10497:Ta},Sc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ua={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},MM={CUBICSPLINE:void 0,LINEAR:yn,STEP:xn},Tc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bM(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new mi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wr})),e.DefaultMaterial}function Fa(e,t,i){for(let r in i.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=i.extensions[r])}function Nr(e,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function SM(e,t,i){let r=!1,a=!1,n=!1;for(let h=0,c=t.length;h<c;h++){let d=t[h];if(d.POSITION!==void 0&&(r=!0),d.NORMAL!==void 0&&(a=!0),d.COLOR_0!==void 0&&(n=!0),r&&a&&n)break}if(!r&&!a&&!n)return Promise.resolve(e);let s=[],o=[],l=[];for(let h=0,c=t.length;h<c;h++){let d=t[h];if(r){let u=d.POSITION!==void 0?i.getDependency("accessor",d.POSITION):e.attributes.position;s.push(u)}if(a){let u=d.NORMAL!==void 0?i.getDependency("accessor",d.NORMAL):e.attributes.normal;o.push(u)}if(n){let u=d.COLOR_0!==void 0?i.getDependency("accessor",d.COLOR_0):e.attributes.color;l.push(u)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(h){let c=h[0],d=h[1],u=h[2];return r&&(e.morphAttributes.position=c),a&&(e.morphAttributes.normal=d),n&&(e.morphAttributes.color=u),e.morphTargetsRelative=!0,e})}function TM(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let i=0,r=t.weights.length;i<r;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++)e.morphTargetDictionary[i[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function EM(e){let t,i=e.extensions&&e.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(i?t="draco:"+i.bufferView+":"+i.indices+":"+Ec(i.attributes):t=e.indices+":"+Ec(e.attributes)+":"+e.mode,e.targets!==void 0)for(let r=0,a=e.targets.length;r<a;r++)t+=":"+Ec(e.targets[r]);return t}function Ec(e){let t="",i=Object.keys(e).sort();for(let r=0,a=i.length;r<a;r++)t+=i[r]+":"+e[i[r]]+";";return t}function Kc(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wM(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var AM=new Qe,Zc=class{constructor(t={},i={}){this.json=t,this.extensions={},this.plugins={},this.options=i,this.cache=new xM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,a=-1,n=!1,s=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;r=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);a=r&&l?parseInt(l[1],10):-1,n=o.indexOf("Firefox")>-1,s=n?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||r&&a<17||n&&s<98?this.textureLoader=new Fo(this.options.manager):this.textureLoader=new hf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,i){let r=this,a=this.json,n=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(s){let o={scene:s[0][a.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:a.asset,parser:r,userData:{}};return Fa(n,o,a),Nr(o,a),Promise.all(r._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();t(o)})}).catch(i)}_markDefs(){let t=this.json.nodes||[],i=this.json.skins||[],r=this.json.meshes||[];for(let a=0,n=i.length;a<n;a++){let s=i[a].joints;for(let o=0,l=s.length;o<l;o++)t[s[o]].isBone=!0}for(let a=0,n=t.length;a<n;a++){let s=t[a];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(r[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(t,i){i!==void 0&&(t.refs[i]===void 0&&(t.refs[i]=t.uses[i]=0),t.refs[i]++)}_getNodeRef(t,i,r){if(t.refs[i]<=1)return r;let a=r.clone(),n=(s,o)=>{let l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(let[h,c]of s.children.entries())n(c,o.children[h])};return n(r,a),a.name+="_instance_"+t.uses[i]++,a}_invokeOne(t){let i=Object.values(this.plugins);i.push(this);for(let r=0;r<i.length;r++){let a=t(i[r]);if(a)return a}return null}_invokeAll(t){let i=Object.values(this.plugins);i.unshift(this);let r=[];for(let a=0;a<i.length;a++){let n=t(i[a]);n&&r.push(n)}return r}getDependency(t,i){let r=t+":"+i,a=this.cache.get(r);if(!a){switch(t){case"scene":a=this.loadScene(i);break;case"node":a=this._invokeOne(function(n){return n.loadNode&&n.loadNode(i)});break;case"mesh":a=this._invokeOne(function(n){return n.loadMesh&&n.loadMesh(i)});break;case"accessor":a=this.loadAccessor(i);break;case"bufferView":a=this._invokeOne(function(n){return n.loadBufferView&&n.loadBufferView(i)});break;case"buffer":a=this.loadBuffer(i);break;case"material":a=this._invokeOne(function(n){return n.loadMaterial&&n.loadMaterial(i)});break;case"texture":a=this._invokeOne(function(n){return n.loadTexture&&n.loadTexture(i)});break;case"skin":a=this.loadSkin(i);break;case"animation":a=this._invokeOne(function(n){return n.loadAnimation&&n.loadAnimation(i)});break;case"camera":a=this.loadCamera(i);break;default:if(a=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(t,i)}),!a)throw new Error("Unknown type: "+t);break}this.cache.add(r,a)}return a}getDependencies(t){let i=this.cache.get(t);if(!i){let r=this,a=this.json[t+(t==="mesh"?"es":"s")]||[];i=Promise.all(a.map(function(n,s){return r.getDependency(t,s)})),this.cache.add(t,i)}return i}loadBuffer(t){let i=this.json.buffers[t],r=this.fileLoader;if(i.type&&i.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+i.type+" buffer type is not supported.");if(i.uri===void 0&&t===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);let a=this.options;return new Promise(function(n,s){r.load(Ln.resolveURL(i.uri,a.path),n,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+i.uri+'".'))})})}loadBufferView(t){let i=this.json.bufferViews[t];return this.getDependency("buffer",i.buffer).then(function(r){let a=i.byteLength||0,n=i.byteOffset||0;return r.slice(n,n+a)})}loadAccessor(t){let i=this,r=this.json,a=this.json.accessors[t];if(a.bufferView===void 0&&a.sparse===void 0){let s=Sc[a.type],o=Fn[a.componentType],l=a.normalized===!0,h=new o(a.count*s);return Promise.resolve(new Vt(h,s,l))}let n=[];return a.bufferView!==void 0?n.push(this.getDependency("bufferView",a.bufferView)):n.push(null),a.sparse!==void 0&&(n.push(this.getDependency("bufferView",a.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",a.sparse.values.bufferView))),Promise.all(n).then(function(s){let o=s[0],l=Sc[a.type],h=Fn[a.componentType],c=h.BYTES_PER_ELEMENT,d=c*l,u=a.byteOffset||0,p=a.bufferView!==void 0?r.bufferViews[a.bufferView].byteStride:void 0,g=a.normalized===!0,x,m;if(p&&p!==d){let f=Math.floor(u/p),y="InterleavedBuffer:"+a.bufferView+":"+a.componentType+":"+f+":"+a.count,M=i.cache.get(y);M||(x=new h(o,f*p,a.count*p/c),M=new Qh(x,p/c),i.cache.add(y,M)),m=new ec(M,l,u%p/c,g)}else o===null?x=new h(a.count*l):x=new h(o,u,a.count*l),m=new Vt(x,l,g);if(a.sparse!==void 0){let f=Sc.SCALAR,y=Fn[a.sparse.indices.componentType],M=a.sparse.indices.byteOffset||0,v=a.sparse.values.byteOffset||0,T=new y(s[1],M,a.sparse.count*f),w=new h(s[2],v,a.sparse.count*l);o!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,_=T.length;A<_;A++){let b=T[A];if(m.setX(b,w[A*l]),l>=2&&m.setY(b,w[A*l+1]),l>=3&&m.setZ(b,w[A*l+2]),l>=4&&m.setW(b,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){let i=this.json,r=this.options,n=i.textures[t].source,s=i.images[n],o=this.textureLoader;if(s.uri){let l=r.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(t,n,o)}loadTextureImage(t,i,r){let a=this,n=this.json,s=n.textures[t],o=n.images[i],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];let h=this.loadImageSource(i,r).then(function(c){c.flipY=!1,c.name=s.name||o.name||"",c.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(c.name=o.uri);let u=(n.samplers||{})[s.sampler]||{};return c.magFilter=Rf[u.magFilter]||Yt,c.minFilter=Rf[u.minFilter]||wr,c.wrapS=Cf[u.wrapS]||Ta,c.wrapT=Cf[u.wrapT]||Ta,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==ri&&c.minFilter!==Yt,a.associations.set(c,{textures:t}),c}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(t,i){let r=this,a=this.json,n=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());let s=a.images[t],o=self.URL||self.webkitURL,l=s.uri||"",h=!1;if(s.bufferView!==void 0)l=r.getDependency("bufferView",s.bufferView).then(function(d){h=!0;let u=new Blob([d],{type:s.mimeType});return l=o.createObjectURL(u),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let c=Promise.resolve(l).then(function(d){return new Promise(function(u,p){let g=u;i.isImageBitmapLoader===!0&&(g=function(x){let m=new Ii(x);m.needsUpdate=!0,u(m)}),i.load(Ln.resolveURL(d,n.path),g,void 0,p)})}).then(function(d){return h===!0&&o.revokeObjectURL(l),Nr(d,s),d.userData.mimeType=s.mimeType||wM(s.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[t]=c,c}assignTexture(t,i,r,a){let n=this;return this.getDependency("texture",r.index).then(function(s){if(!s)return null;if(r.texCoord!==void 0&&r.texCoord>0&&(s=s.clone(),s.channel=r.texCoord),n.extensions[_t.KHR_TEXTURE_TRANSFORM]){let o=r.extensions!==void 0?r.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=n.associations.get(s);s=n.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),n.associations.set(s,l)}}return a!==void 0&&(s.colorSpace=a),t[i]=s,s})}assignFinalMaterial(t){let i=t.geometry,r=t.material,a=i.attributes.tangent===void 0,n=i.attributes.color!==void 0,s=i.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+r.uuid,l=this.cache.get(o);l||(l=new xs,pr.prototype.copy.call(l,r),l.color.copy(r.color),l.map=r.map,l.sizeAttenuation=!1,this.cache.add(o,l)),r=l}else if(t.isLine){let o="LineBasicMaterial:"+r.uuid,l=this.cache.get(o);l||(l=new ic,pr.prototype.copy.call(l,r),l.color.copy(r.color),l.map=r.map,this.cache.add(o,l)),r=l}if(a||n||s){let o="ClonedMaterial:"+r.uuid+":";a&&(o+="derivative-tangents:"),n&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=r.clone(),n&&(l.vertexColors=!0),s&&(l.flatShading=!0),a&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(r))),r=l}t.material=r}getMaterialType(){return mi}loadMaterial(t){let i=this,r=this.json,a=this.extensions,n=r.materials[t],s,o={},l=n.extensions||{},h=[];if(l[_t.KHR_MATERIALS_UNLIT]){let d=a[_t.KHR_MATERIALS_UNLIT];s=d.getMaterialType(),h.push(d.extendParams(o,n,i))}else{let d=n.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],zi),o.opacity=u[3]}d.baseColorTexture!==void 0&&h.push(i.assignTexture(o,"map",d.baseColorTexture,Gt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(h.push(i.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),h.push(i.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),s=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(t)}),h.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,o)})))}n.doubleSided===!0&&(o.side=Ri);let c=n.alphaMode||Tc.OPAQUE;if(c===Tc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===Tc.MASK&&(o.alphaTest=n.alphaCutoff!==void 0?n.alphaCutoff:.5)),n.normalTexture!==void 0&&s!==Mi&&(h.push(i.assignTexture(o,"normalMap",n.normalTexture)),o.normalScale=new pe(1,1),n.normalTexture.scale!==void 0)){let d=n.normalTexture.scale;o.normalScale.set(d,d)}if(n.occlusionTexture!==void 0&&s!==Mi&&(h.push(i.assignTexture(o,"aoMap",n.occlusionTexture)),n.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=n.occlusionTexture.strength)),n.emissiveFactor!==void 0&&s!==Mi){let d=n.emissiveFactor;o.emissive=new Se().setRGB(d[0],d[1],d[2],zi)}return n.emissiveTexture!==void 0&&s!==Mi&&h.push(i.assignTexture(o,"emissiveMap",n.emissiveTexture,Gt)),Promise.all(h).then(function(){let d=new s(o);return n.name&&(d.name=n.name),Nr(d,n),i.associations.set(d,{materials:t}),n.extensions&&Fa(a,d,n),d})}createUniqueName(t){let i=kt.sanitizeNodeName(t||"");return i in this.nodeNamesUsed?i+"_"+ ++this.nodeNamesUsed[i]:(this.nodeNamesUsed[i]=0,i)}loadGeometries(t){let i=this,r=this.extensions,a=this.primitiveCache;function n(o){return r[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,i).then(function(l){return If(l,o,i)})}let s=[];for(let o=0,l=t.length;o<l;o++){let h=t[o],c=EM(h),d=a[c];if(d)s.push(d.promise);else{let u;h.extensions&&h.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?u=n(h):u=If(new bt,h,i),h.mode===ir.TRIANGLE_STRIP?u=u.then(p=>bc(p,Do)):h.mode===ir.TRIANGLE_FAN&&(u=u.then(p=>bc(p,vs))),a[c]={primitive:h,promise:u},s.push(u)}}return Promise.all(s)}loadMesh(t){let i=this,r=this.json,a=this.extensions,n=r.meshes[t],s=n.primitives,o=[];for(let l=0,h=s.length;l<h;l++){let c=s[l].material===void 0?bM(this.cache):this.getDependency("material",s[l].material);o.push(c)}return o.push(i.loadGeometries(s)),Promise.all(o).then(async function(l){let h=l.slice(0,l.length-1),c=l[l.length-1],d=[];for(let p=0,g=c.length;p<g;p++){let x=c[p],m=s[p],f,y=h[p];if(m.mode===ir.TRIANGLES||m.mode===ir.TRIANGLE_STRIP||m.mode===ir.TRIANGLE_FAN||m.mode===void 0){let M=n.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=M&&v?new _p(x,y):new gt(x,y),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(m.mode===ir.LINES)f=new bp(x,y);else if(m.mode===ir.LINE_STRIP)f=new Oo(x,y);else if(m.mode===ir.LINE_LOOP)f=new Sp(x,y);else if(m.mode===ir.POINTS)f=new ys(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&TM(f,n),f.name=i.createUniqueName(n.name||"mesh_"+t),Nr(f,n),m.extensions&&Fa(a,f,m),i.assignFinalMaterial(f),d.push(f)}for(let p=0,g=d.length;p<g;p++)i.associations.set(d[p],{meshes:t,primitives:p});if(d.length===1)return n.extensions&&Fa(a,d[0],n),d[0];let u=new ai;n.extensions&&Fa(a,u,n),i.associations.set(u,{meshes:t});for(let p=0,g=d.length;p<g;p++)u.add(d[p]);return u})}loadCamera(t){let i,r=this.json.cameras[t],a=r[r.type];if(!a){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return r.type==="perspective"?i=new yi(sp.radToDeg(a.yfov),a.aspectRatio||1,a.znear||1,a.zfar||2e6):r.type==="orthographic"&&(i=new Pa(-a.xmag,a.xmag,a.ymag,-a.ymag,a.znear,a.zfar)),r.name&&(i.name=this.createUniqueName(r.name)),Nr(i,r),Promise.resolve(i)}loadSkin(t){let i=this.json.skins[t],r=[];for(let a=0,n=i.joints.length;a<n;a++)r.push(this._loadNodeShallow(i.joints[a]));return i.inverseBindMatrices!==void 0?r.push(this.getDependency("accessor",i.inverseBindMatrices)):r.push(null),Promise.all(r).then(function(a){let n=a.pop(),s=a,o=[],l=[];for(let h=0,c=s.length;h<c;h++){let d=s[h];if(d){o.push(d);let u=new Qe;n!==null&&u.fromArray(n.array,h*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',i.joints[h])}return new xp(o,l)})}loadAnimation(t){let i=this.json,r=this,a=i.animations[t],n=a.name?a.name:"animation_"+t,s=[],o=[],l=[],h=[],c=[];for(let d=0,u=a.channels.length;d<u;d++){let p=a.channels[d],g=a.samplers[p.sampler],x=p.target,m=x.node,f=a.parameters!==void 0?a.parameters[g.input]:g.input,y=a.parameters!==void 0?a.parameters[g.output]:g.output;x.node!==void 0&&(s.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",y)),h.push(g),c.push(x))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(h),Promise.all(c)]).then(function(d){let u=d[0],p=d[1],g=d[2],x=d[3],m=d[4],f=[];for(let M=0,v=u.length;M<v;M++){let T=u[M],w=p[M],A=g[M],_=x[M],b=m[M];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let U=r._createAnimationTracks(T,w,A,_,b);if(U)for(let N=0;N<U.length;N++)f.push(U[N])}let y=new uc(n,void 0,f);return Nr(y,a),y})}createNodeMesh(t){let i=this.json,r=this,a=i.nodes[t];return a.mesh===void 0?null:r.getDependency("mesh",a.mesh).then(function(n){let s=r._getNodeRef(r.meshCache,a.mesh,n);return a.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,h=a.weights.length;l<h;l++)o.morphTargetInfluences[l]=a.weights[l]}),s})}loadNode(t){let i=this.json,r=this,a=i.nodes[t],n=r._loadNodeShallow(t),s=[],o=a.children||[];for(let h=0,c=o.length;h<c;h++)s.push(r.getDependency("node",o[h]));let l=a.skin===void 0?Promise.resolve(null):r.getDependency("skin",a.skin);return Promise.all([n,Promise.all(s),l]).then(function(h){let c=h[0],d=h[1],u=h[2];u!==null&&c.traverse(function(p){p.isSkinnedMesh&&p.bind(u,AM)});for(let p=0,g=d.length;p<g;p++)c.add(d[p]);if(c.userData.pivot!==void 0&&d.length>0){let p=c.userData.pivot,g=d[0];c.pivot=new C().fromArray(p),c.position.x-=p[0],c.position.y-=p[1],c.position.z-=p[2],g.position.set(0,0,0),delete c.userData.pivot}return c})}_loadNodeShallow(t){let i=this.json,r=this.extensions,a=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let n=i.nodes[t],s=n.name?a.createUniqueName(n.name):"",o=[],l=a._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(t)});return l&&o.push(l),n.camera!==void 0&&o.push(a.getDependency("camera",n.camera).then(function(h){return a._getNodeRef(a.cameraCache,n.camera,h)})),a._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(t)}).forEach(function(h){o.push(h)}),this.nodeCache[t]=Promise.all(o).then(function(h){let c;if(n.isBone===!0?c=new tc:h.length>1?c=new ai:h.length===1?c=h[0]:c=new Zt,c!==h[0])for(let d=0,u=h.length;d<u;d++)c.add(h[d]);if(n.name&&(c.userData.name=n.name,c.name=s),Nr(c,n),n.extensions&&Fa(r,c,n),n.matrix!==void 0){let d=new Qe;d.fromArray(n.matrix),c.applyMatrix4(d)}else n.translation!==void 0&&c.position.fromArray(n.translation),n.rotation!==void 0&&c.quaternion.fromArray(n.rotation),n.scale!==void 0&&c.scale.fromArray(n.scale);if(!a.associations.has(c))a.associations.set(c,{});else if(n.mesh!==void 0&&a.meshCache.refs[n.mesh]>1){let d=a.associations.get(c);a.associations.set(c,{...d})}return a.associations.get(c).nodes=t,c}),this.nodeCache[t]}loadScene(t){let i=this.extensions,r=this.json.scenes[t],a=this,n=new ai;r.name&&(n.name=a.createUniqueName(r.name)),Nr(n,r),r.extensions&&Fa(i,n,r);let s=r.nodes||[],o=[];for(let l=0,h=s.length;l<h;l++)o.push(a.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let c=0,d=l.length;c<d;c++){let u=l[c];u.parent!==null?n.add(Ef(u)):n.add(u)}let h=c=>{let d=new Map;for(let[u,p]of a.associations)(u instanceof pr||u instanceof Ii)&&d.set(u,p);return c.traverse(u=>{let p=a.associations.get(u);p!=null&&d.set(u,p)}),d};return a.associations=h(n),n})}_createAnimationTracks(t,i,r,a,n){let s=[],o=t.name?t.name:t.uuid,l=[];function h(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}ua[n.path]===ua.weights?(h(t),t.isGroup&&t.children.forEach(h)):l.push(o);let c;switch(ua[n.path]){case ua.weights:c=Cn;break;case ua.rotation:c=Ca;break;case ua.translation:case ua.scale:c=Pn;break;default:switch(r.itemSize){case 1:c=Cn;break;case 2:case 3:default:c=Pn;break}break}let d=a.interpolation!==void 0?MM[a.interpolation]:yn,u=this._getArrayFromAccessor(r);for(let p=0,g=l.length;p<g;p++){let x=new c(l[p]+"."+ua[n.path],i.array,u,d);a.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),s.push(x)}return s}_getArrayFromAccessor(t){let i=t.array;if(t.normalized){let r=Kc(i.constructor),a=new Float32Array(i.length);for(let n=0,s=i.length;n<s;n++)a[n]=i[n]*r;i=a}return i}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(r){let a=this instanceof Ca?qc:Zo;return new a(this.times,this.values,this.getValueSize()/3,r)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function RM(e,t,i){let r=t.attributes,a=new Qi;if(r.POSITION!==void 0){let o=i.json.accessors[r.POSITION],l=o.min,h=o.max;if(l!==void 0&&h!==void 0){if(a.set(new C(l[0],l[1],l[2]),new C(h[0],h[1],h[2])),o.normalized){let c=Kc(Fn[o.componentType]);a.min.multiplyScalar(c),a.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let n=t.targets;if(n!==void 0){let o=new C,l=new C;for(let h=0,c=n.length;h<c;h++){let d=n[h];if(d.POSITION!==void 0){let u=i.json.accessors[d.POSITION],p=u.min,g=u.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),u.normalized){let x=Kc(Fn[u.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(o)}e.boundingBox=a;let s=new er;a.getCenter(s.center),s.radius=a.min.distanceTo(a.max)/2,e.boundingSphere=s}function If(e,t,i){let r=t.attributes,a=[];function n(s,o){return i.getDependency("accessor",s).then(function(l){e.setAttribute(o,l)})}for(let s in r){let o=Yc[s]||s.toLowerCase();o in e.attributes||a.push(n(r[s],o))}if(t.indices!==void 0&&!e.index){let s=i.getDependency("accessor",t.indices).then(function(o){e.setIndex(o)});a.push(s)}return ft.workingColorSpace!==zi&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),Nr(e,t),RM(e,t,i),Promise.all(a).then(function(){return t.targets!==void 0?SM(e,t.targets,i):e})}var Lf=["car","trees","props","landmarks"];async function Nf(e,t){let i=new Yo,r={},a=0;await Promise.all(Lf.map(s=>new Promise((o,l)=>i.load(`${e}${s}.glb`,h=>{h.scene.updateMatrixWorld(!0),h.scene.traverse(c=>{if(!c.isMesh)return;let d=(c.parent&&c.parent!==h.scene?c.parent.name:c.name).replace(/_\d+$/,""),[u,p]=d.split("__"),g=r[u]||(r[u]={parts:[],roles:{},hulls:[]}),x=c.geometry.clone();if(x.applyMatrix4(c.matrixWorld),p&&p.startsWith("col")){g.hulls.push(new Float32Array(x.attributes.position.array));return}let m=c.material;if(m.map&&(m.map.colorSpace=Gt),m.metalness>.3&&(m.metalness=.3,m.roughness=Math.max(m.roughness,.35)),p){g.roles[p]=g.roles[p]||[],g.roles[p].push({geometry:x,material:m});return}g.parts.push({name:m.name,geometry:x,material:m})}),t==null||t(++a/Lf.length),o()},void 0,l))));let n={};for(let s in r)for(let o of r[s].parts){let l=o.material.name;n[l]||(n[l]=o.material),o.material=n[l]}return r.__materials=n,r}function qr(e,t,{shadow:i=!0}={}){let r=e[t],a=new ai;if(a.name=t,!r)return console.warn("missing asset",t),a;for(let n of r.parts){let s=new gt(n.geometry,n.material);s.castShadow=i,s.receiveShadow=!0,a.add(s)}return a}function Df(e,t,i,{shadow:r=!0,patch:a}={}){let n=e[t],s=new ai;if(s.name=t,!n||!i.length)return{group:s,meshes:[]};let o=n.parts.map(l=>{let h=a?a(l.material,l.name):l.material,c=new tr(l.geometry,h,i.length);return i.forEach((d,u)=>c.setMatrixAt(u,d)),c.castShadow=r,c.receiveShadow=!0,c.computeBoundingSphere(),s.add(c),c});return{group:s,meshes:o}}var Pi=-Math.PI/2,Jc=[["pyramid_big",-90,-30,.08,1],["pyramid_mid",-77,-37,.08,1],["pyramid_small",-98,-12,.08,1],["sphinx",-78,-22,0,1],["mosque",-56,-46,Pi,1],["cairo_house0",-46,-40,Pi,1],["cairo_house1",-48,-50,Pi,1],["cairo_house2",-50,-24,Pi,1],["cairo_house0",-64,-50,Pi,.9],["cairo_house2",-44,-28,0,.9],["luxor_pylon",-54,10,Pi,1],["luxor_colonnade",-54,-1,Pi,1],["obelisk",-49.5,14.5,0,1],["ram",-57.5,16.5,0,1],["ram",-57.5,19,0,1],["ram",-57.5,21.5,0,1],["ram",-50.5,16.5,Math.PI,1],["ram",-50.5,19,Math.PI,1],["ram",-50.5,21.5,Math.PI,1],["pavilion",-6,-59.5,0,1,.45],["yardang",-40,-44,.5,1.2],["yardang",-45,-55,.35,1],["yardang",-36,-60,.6,.85],["yardang",-49,-39,.55,.8],["yardang",-15,-43,.3,.7],["yardang",-33,-38,.45,.6],["stupa",-9,17,0,1.25],["temple",13,18,Pi,1],["naxi_house",-19,24,Pi,1],["naxi_house",-18,36,Pi+.3,1],["naxi_house",-22,30,Pi-.2,.9],["beijing_gate",26,-55,0,1],["corner_tower",6,-48,0,1],["egg",46,-47,0,.9,-.55],["hutong",11,-30,0,1],["hutong",11,-24,0,1],["hutong",40,-31,Math.PI,1],["nanjing_gate",50,-14,0,1],["city_wall",35.5,-14,0,1],["city_wall",64.5,-14,0,1],["zifeng",67,4,0,1],["pearl_tower",78,-5,0,1],["shanghai_tower",90,-7,.3,1],["jinmao",94,0,.2,1],["swfc",85,-13,.4,1],["tower0",71,-8,.1,1],["tower1",80,-16,.2,1],["tower2",68,-14,0,1],["bund_customs",80,16,Pi,1],["bund_bank",73,16.5,Pi,1],["bund_bank",87,16.5,Pi,1],["bund_customs",93,16.5,Pi,.9],["barn",26,55,Pi,1]];yc.push([-90,-30,10,.3],[-77,-37,8,.3],[-98,-12,5.5,.3],[-78,-22,4,.2],[-56,-46,6,.2],[-54,6,9,.15],[-6,-59.5,4,.45],[-9,17,3.5,.2],[13,18,5,.2],[26,-55,10,.12],[6,-48,5,.12],[46,-47,9,-1.1],[11,-27,5,.12],[50,-14,22,.12],[67,4,3,.12],[82,-8,16,.15],[83,16,14,.15],[26,55,4,.12]);var $c=[...[-6,-3,0,3,6].map(e=>["lantern",26+e,-52.2,0,1,7.1]),...[-4.5,-1.5,1.5,4.5].map(e=>["lantern",26+e,-52.1,0,.9,3.3]),...[70,75,80,85,90,95].map(e=>["lamp_bund",e,12.6,0,1,0]),...[34,40,46].map(e=>["lamp_modern",e,4.6,Math.PI/2,1,0])],Uf=[["camel",-74,-8,2.2,1],["camel",-72,-10,1.6,1],["camel",-12,-54,.4,1],["yak",8,42,.5,1],["yak",11,45,2.4,1],["yak",4,46,1.2,.9],["yak",-12,44,3,1]],Of=[[-46,8,11],[-40,16,14],[-62,6,9],[-44,28,12.5],[-36,4,16],[-58,-2,13]],Ff=[{asset:"felucca",axis:"nile",z0:-50,z1:50,speed:1.4,phase:0},{asset:"felucca",axis:"nile",z0:-50,z1:50,speed:1.1,phase:.55},{asset:"ferry",axis:"huangpu",x0:70,x1:104,speed:2.2,phase:.2}],Bf=[[[-9,4.6,17],[-15,4.6,12]],[[-9,4.6,17],[-2,4.6,11]],[[-9,4.6,17],[-15,4.6,22]],[[-9,4.6,17],[-3,4.6,23]]],zf=[[-15,12],[-2,11],[-15,22],[-3,23]];function Hf(){let e=[];for(let t of[40.5,47.5]){for(let i=0;i<11;i++)e.push(["haybale",48+i*1.28,t,0,0]);for(let i=0;i<10;i++)e.push(["haybale",48.64+i*1.28,t,0,1])}for(let[t,i,r]of[[30,38,.3],[33,36,1.2],[44,54,.8],[47,56,2],[32,48,.1]])e.push(["haybale_sq",t,i,r,0]);for(let[t,i]of[[14,6],[15.2,7.4],[16.4,8.8],[12,12],[13,13.2]])e.push(["cone",t,i,0,0]);for(let[t,i]of[[2,8],[2.9,8.2],[2.45,8.1]])e.push(["crate",t,i,.3,0]);return e.push(["crate",2.45,8.1,.6,1]),e}var Qc={giza:{plat:"#d9bd8a",accent:"#c8902f",line:"Old Kingdom \xB7 c. 2560 BC"},cairo:{plat:"#d8c7a6",accent:"#2f8f9d",line:"City of a thousand minarets"},luxor:{plat:"#d6b077",accent:"#c8902f",line:"Thebes \xB7 balloons at dawn"},qinggan:{plat:"#c98a64",accent:"#b4482c",line:"Dunhuang \xB7 Zhangye \xB7 Qinghai Lake"},yunnan:{plat:"#eeeae0",accent:"#b8862e",line:"Lijiang \xB7 Shangri-La \xB7 Meili"},beijing:{plat:"#e7e2d6",accent:"#a9322a",line:"The old city"},nanjing:{plat:"#a8aaa5",accent:"#53704a",line:"Plane trees \xB7 Zijin Mountain"},shanghai:{plat:"#c9c6bf",accent:"#c43f78",line:"The Bund \xB7 Lujiazui"},road:{plat:"#cbb07a",accent:"#d9b45c",line:"Everywhere in between"}};var zt=e=>new Se(e),CM={desert:zt("#e7c890"),danxia:zt("#cf7b52"),meadow:zt("#86a85a"),autumn:zt("#b5a65f"),plane:zt("#8ba45c"),coast:zt("#a4b37c"),field:zt("#d3b66c")},IM={desert:zt("#d2ab72"),danxia:zt("#b7744f"),meadow:zt("#a48a62"),autumn:zt("#a59a86"),plane:zt("#9b978e"),coast:zt("#a19d94"),field:zt("#b49763")},PM=zt("#7b6a5c"),LM=zt("#f4f6fb"),NM=zt("#b9a57a"),DM=zt("#cfc8b8"),vi={t:{value:0},strength:{value:.6},car:{value:new C(0,-99,0)},carR:{value:1.7},carScreen:{value:new C(-1e4,-1e4,0)},seeR:{value:120}};function kf(e,{bend:t=.06,push:i=0,rigid:r=.6,see:a=!1}={}){let n=e.clone();return n.onBeforeCompile=s=>{Object.assign(s.uniforms,{wT:vi.t,wS:vi.strength,wCar:vi.car,wCarR:vi.carR,wCarS:vi.carScreen,wSeeR:vi.seeR}),a&&(s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
      uniform vec3 wCarS; uniform float wSeeR;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      { vec2 dq = gl_FragCoord.xy - wCarS.xy; float dd = length(dq);
        if (gl_FragCoord.z < wCarS.z - 0.0005 && dd < wSeeR) {
          float k = 1.0 - smoothstep(wSeeR * 0.55, wSeeR, dd);
          float b = fract(dot(floor(gl_FragCoord.xy), vec2(0.5, 0.25)) + fract(floor(gl_FragCoord.y) * 0.5) * 0.5);
          if (b < k * 0.85) discard;
        } }`)),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
      uniform float wT, wS, wCarR; uniform vec3 wCar;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec3 wRoot = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
      #else
        vec3 wRoot = vec3(0.0);
      #endif
      float wH = max(0.0, transformed.y - ${r.toFixed(2)});
      float wPh = wRoot.x * 0.21 + wRoot.z * 0.17;
      float wSw = (sin(wT * 1.7 + wPh) + 0.4 * sin(wT * 3.9 + wPh * 2.3)) * wS;
      transformed.x += wSw * ${t.toFixed(3)} * wH * wH;
      transformed.z += cos(wT * 1.3 + wPh) * wS * ${(t*.5).toFixed(3)} * wH * wH;
      ${i?`vec2 wd = wRoot.xz - wCar.xz; float wl = length(wd);
      float wk = (1.0 - smoothstep(wCarR * 0.4, wCarR, wl)) * step(abs(wRoot.y - wCar.y), 2.5);
      vec2 wdir = wl > 0.001 ? wd / wl : vec2(1.0, 0.0);
      transformed.xz += wdir * wk * ${i.toFixed(2)} * transformed.y; transformed.y *= 1.0 - wk * 0.45;`:""}`)},n.customProgramCacheKey=()=>`wind${t}${i}${r}${a}`,n}function Gf(e,t,i,r,{coarse:a=!1}={}){let{sample:n,slope:s,road:o,at:l}=r,h=(()=>{let O=1234567;return()=>(O=O*16807%2147483647)/2147483647})(),c=[],d=new Qe,u=new Jt,p=new C,g=new C,x=new C(0,1,0),m=(O,I,L,Z=0,se=1)=>new Qe().compose(new C(O,I,L),new Jt().setFromAxisAngle(x,Z),new C(se,se,se)),f=(O,I,L)=>{for(let Z in $t)if(Math.hypot(O-$t[Z].x,I-$t[Z].z)<L)return!0;return Math.hypot(O-ha.x,I-ha.z)<L},y=new Se,M=new Xi(240,160,240,160);M.rotateX(-Math.PI/2);let v=M.attributes.position,T=new Float32Array(v.count*3),w=new Float32Array(v.count*2),A=new Se,_=new Se;for(let O=0;O<v.count;O++){let I=v.getX(O),L=v.getZ(O),Z=Math.round(I- -120),se=Math.round(L- -80),de=l(Z,se);v.setY(O,de);let fe=Pr(I,L);A.setRGB(0,0,0);for(let We in fe)A.add(y.copy(CM[We]).multiplyScalar(fe[We]));if(fe.danxia>.1){let We=.5+.5*Math.sin(de*3.4+jr(I*.1,L*.1)*3);A.lerp(y.set(We>.55?"#e39a62":We<.3?"#a9533a":"#c86f4a"),fe.danxia*.6)}let Ye=o(I,L);if(Ye<2.8){_.setRGB(0,0,0);for(let We in fe)_.add(y.copy(IM[We]).multiplyScalar(fe[We]));A.lerp(_,1-bi(1.4,2.8,Ye))}for(let We in $t){let yt=$t[We],Di=Math.hypot(I-yt.x,L-yt.z);Di<8.5&&A.lerp(DM,(1-bi(6.5,8.5,Di))*.45)}let nt=Math.hypot(l(Z+1,se)-l(Z-1,se),l(Z,se+1)-l(Z,se-1))/2;A.lerp(PM,bi(.5,1.15,nt)*.8),A.lerp(LM,bi(6,9,de+jr(I*.3,L*.3)*2)),A.lerp(NM,(1-bi(-.25,.2,de))*.85);let Ct=(jr(I*.7,L*.7)-.5)*.07;T[O*3]=A.r+Ct,T[O*3+1]=A.g+Ct,T[O*3+2]=A.b+Ct,w[O*2]=(fe.desert||0)+(fe.danxia||0)*.6,w[O*2+1]=bi(6,9,de)}M.setAttribute("color",new Vt(T,3)),M.setAttribute("aux",new Vt(w,2)),M.computeVertexNormals();let b=new mi({vertexColors:!0,roughness:.96});b.onBeforeCompile=O=>{O.vertexShader=O.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aux; varying vec2 vAux; varying vec3 vWp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAux = aux; vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),O.fragmentShader=O.fragmentShader.replace("#include <common>",`#include <common>
      varying vec2 vAux; varying vec3 vWp;
      float gH(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float gN(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(gH(i), gH(i+vec2(1,0)), f.x), mix(gH(i+vec2(0,1)), gH(i+vec2(1,1)), f.x), f.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
      float grain = gN(vWp.xz * 1.7) * 0.6 + gN(vWp.xz * 6.0) * 0.4;
      diffuseColor.rgb *= 0.93 + grain * 0.12;
      float rip = sin(vWp.x * 2.2 + sin(vWp.z * 0.35) * 2.5 + gN(vWp.xz * 0.4) * 3.0);
      diffuseColor.rgb *= 1.0 - vAux.x * smoothstep(0.55, 1.0, rip) * 0.07;
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.96, 0.97, 1.0), vAux.y * (0.6 + grain * 0.3));`)};let U=new gt(M,b);U.receiveShadow=!0,e.add(U);let N=new Uint8Array(38801*4);for(let O=0;O<r.H.length;O++)N[O*4]=Math.max(0,Math.min(255,Math.round((r.H[O]+4)*32))),N[O*4+3]=255;let D=new _s(N,241,161);D.needsUpdate=!0,D.magFilter=D.minFilter=Yt;let Q=new Wt({transparent:!0,fog:!0,uniforms:{...fr.clone(Ie.fog),t:{value:0},htex:{value:D},deep:{value:zt("#1e6a8f")},shallow:{value:zt("#63c6c8")},foam:{value:zt("#ffffff")},night:{value:0},sky:{value:zt("#bfe3ff")},car:{value:new C}},vertexShader:`#include <fog_pars_vertex>
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
      }`}),F=new gt(new Xi(900,900),Q);F.rotation.x=-Math.PI/2,F.position.y=-.45,F.renderOrder=2,e.add(F);let P={},G=(O,I)=>{for(let L of O.hulls){let Z=new Float32Array(L.length),se=new C;for(let de=0;de<L.length;de+=3)se.set(L[de],L[de+1],L[de+2]).applyMatrix4(I),Z[de]=se.x,Z[de+1]=se.y,Z[de+2]=se.z;t.statics.hull(Z,0,0,0)}},z=(O,I,L)=>{var se;let Z=i[O];if(!Z){console.warn("missing asset",O);return}for(let de of Z.parts){let fe=de.geometry.clone().applyMatrix4(I);for(let nt of Object.keys(fe.attributes))nt!=="position"&&nt!=="normal"&&fe.deleteAttribute(nt);fe.index&&(fe=fe.toNonIndexed());let Ye=P[L]||(P[L]={});(Ye[se=de.material.name]||(Ye[se]={mat:de.material,geos:[]})).geos.push(fe)}};for(let[O,I,L,Z,se,de=0]of Jc){let fe=m(I,n(I,L)+de,L,Z,se);z(O,fe,La(I,L).key),i[O]&&G(i[O],fe)}for(let[O,I,L,Z,se,de]of $c)z(O,m(I,n(I,L)+de,L,Z,se),La(I,L).key);for(let O in P)for(let I in P[O]){let{mat:L,geos:Z}=P[O][I],se=new gt(Mc(Z,!1),L);se.castShadow=!0,se.receiveShadow=!0,e.add(se)}let re=i.__materials;re.lantern&&c.push({m:re.lantern,day:0,night:1.6});for(let[O,I,L,Z,se,de]of $c){let fe=i[O];if(!(!fe||!fe.roles.lamp))for(let Ye of fe.roles.lamp){let nt=new gt(Ye.geometry,Ye.material);nt.applyMatrix4(m(I,n(I,L)+de,L,Z,se)),e.add(nt),c.push({m:Ye.material,day:0,night:2.4})}}for(let O of["glass_city","glass_dark"])re[O]&&(re[O].emissive=zt("#ffcf8a"),c.push({m:re[O],day:0,night:.22}));re.pearl&&(re.pearl.emissive=zt("#ff4fa3"),c.push({m:re.pearl,day:0,night:.9}));let X={},j=(O,I,L,Z=1,se=h()*Math.PI*2)=>{(X[O]||(X[O]=[])).push({x:I,y:n(I,L)-.05,z:L,ry:se,s:Z,wob:0,v:0,ax:0,az:0})},te=(O,I,L=2.8)=>o(O,I)>L&&!f(O,I,9)&&n(O,I)>.05&&s(O,I)<.5&&As(O,I)<.9,Pe=[];for(let[O,I,L,,Z]of Jc)Pe.push([I,L,(O.startsWith("pyramid")?12:O==="city_wall"?9:6.5)*(Z||1)]);let Te=(O,I)=>Pe.every(([L,Z,se])=>Math.hypot(O-L,I-Z)>se),qe={autumn:"ginkgo",plane:"plane",coast:"plane",danxia:"poplar",field:"poplar"};for(let O=-120;O<120;O+=1)for(let I=-80;I<80;I+=1){let L=o(O,I);if(L<4.6||L>5.6)continue;let Z=Pr(O,I),se=null,de=.5;for(let fe in qe)(Z[fe]||0)>de&&(de=Z[fe],se=fe);!se||((O*7+I*13)%5+5)%5!==0||h()>.6||!te(O,I,4.4)||!Te(O,I)||j(qe[se],O,I,(qe[se]==="plane"?.72:.9)+h()*.2)}let He=a?9e3:16e3;for(let O=0;O<He;O++){let I=-120+h()*240,L=-80+h()*160,Z=Pr(I,L),se=n(I,L);if(se<.3&&se>-.45-.1&&o(I,L)>2.5&&!f(I,L,8)&&h()<.6&&Math.min(n(I+2.5,L),n(I-2.5,L),n(I,L+2.5),n(I,L-2.5))<-.45&&j("reeds",I,L,.8+h()*.5),!te(I,L)||!Te(I,L))continue;let de=jr(I*.06+3,L*.06),fe=Math.abs(I-ws(L));if(se>2.5&&se<9&&h()<.12){j(se>5?"fir_snow":"fir",I,L,.7+h()*.5);continue}(Z.desert||0)>.5?fe>5&&fe<10.5&&h()<.22?j("palm",I,L,.85+h()*.4):h()<.03&&j("shrub",I,L,.8+h()*.6):(Z.danxia||0)>.5?h()<.08?j("tuft",I,L,1+h()):h()<.01&&j("shrub",I,L,.7+h()*.5):(Z.meadow||0)>.45?de>.5&&h()<.3?j(se>3.5?"fir_snow":"fir",I,L,.8+h()*.7):h()<.03?j("blossom",I,L,.8+h()*.5):h()<.04&&j("bush",I,L,.6+h()*.6):(Z.autumn||0)>.45?de>.52&&h()<.12?j("ginkgo",I,L,.8+h()*.4):h()<.03&&j("bush",I,L,.6+h()*.4):(Z.plane||0)>.45||(Z.coast||0)>.45?de>.56&&h()<.1?j("plane",I,L,.7+h()*.3):h()<.04&&j("bush",I,L,.6+h()*.5):(Z.field||0)>.45&&(de>.62&&h()<.08?j("poplar",I,L,.9+h()*.3):h()<.02&&j("bush",I,L,.5+h()*.4))}let $={fir:.3,fir_snow:.3,palm:.24,ginkgo:.28,plane:.34,poplar:.24,blossom:.2},ne={shrub:1,tuft:1,reeds:1,bush:1},ue={};for(let O in X){let I=X[O],{group:L,meshes:Z}=Df(i,O,I.map(se=>m(se.x,se.y,se.z,se.ry,se.s)),{shadow:!ne[O],patch:(se,de)=>kf(se,ne[O]?{bend:.05,push:.9,rigid:.05}:{bend:de.startsWith("bark")?.004:.008,rigid:1.2,see:!0})});if(e.add(L),ue[O]=Z,$[O])for(let se of I)t.statics.cyl(se.x,se.y+1.5,se.z,1.5,$[O]*se.s)}let Ee=new Set;function Ke(O,I,L){if(!(I<1.5))for(let Z in $){let se=X[Z];if(se)for(let de=0;de<se.length;de++){let fe=se[de],Ye=fe.x-O.x,nt=fe.z-O.z,Ct=Ye*Ye+nt*nt;if(Ct>2.2*2.2||Math.abs(fe.wob)>.3)continue;let We=Math.sqrt(Ct)||1;fe.wob=Math.min(1,.3+I/10),fe.v=0,fe.ax=nt/We,fe.az=-Ye/We,fe.type=Z,fe.i=de,fe.phase=0,Ee.add(fe),L==null||L(fe)}}}function he(O){for(let I of Ee){I.v+=(-I.wob*70-I.v*3.5)*O,I.wob+=I.v*O,I.phase+=O,u.setFromAxisAngle(g.set(I.ax,0,I.az),I.wob*.2).multiply(new Jt().setFromAxisAngle(x,I.ry)),d.compose(g.set(I.x,I.y,I.z),u,p.set(I.s,I.s,I.s));for(let L of ue[I.type])L.setMatrixAt(I.i,d),L.instanceMatrix.needsUpdate=!0;Math.abs(I.wob)<.004&&Math.abs(I.v)<.03&&I.phase>.4&&(I.wob=0,Ee.delete(I))}}let Ge=48,oe={t:vi.t,wind:vi.strength,car:vi.car,trail:{value:Array.from({length:Ge},()=>new Nt(0,-99,0,1))},light:{value:new Se(1,1,1)}},ae=new bt;ae.setAttribute("position",new tt([-.06,0,0,.06,0,0,-.04,.3,0,.04,.3,0,0,.62,0],3)),ae.setIndex([0,1,2,2,1,3,2,3,4]);let me=a?14e3:34e3,we=new tr(ae,new Wt({uniforms:Object.assign(fr.clone(Ie.fog),oe),side:Ri,fog:!0,vertexShader:`#include <fog_pars_vertex>
      uniform float t, wind; uniform vec3 car; uniform vec4 trail[${Ge}]; varying float vY; varying vec3 vC; attribute vec3 tint;
      void main(){
        vec3 p = position; vY = p.y / 0.62; vC = tint;
        vec4 w = instanceMatrix * vec4(p, 1.0);
        vec3 root = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        float s = sin(t * 1.8 + root.x * 0.35 + root.z * 0.27) + sin(t * 3.1 + root.x * 0.9) * 0.35;
        w.x += s * 0.12 * wind * vY * vY; w.z += s * 0.06 * wind * vY * vY;
        float press = 0.0; vec2 dir = vec2(0.0);
        for (int i = 0; i < ${Ge}; i++) {
          vec2 d = root.xz - trail[i].xz; float r = length(d);
          float k = (1.0 - smoothstep(0.3, 1.0, r)) * (1.0 - trail[i].w);
          if (k > press) { press = k; dir = r > 0.001 ? d / r : vec2(1.0, 0.0); }
        }
        vec2 dc = root.xz - car.xz; float rc = length(dc);
        float kc = (1.0 - smoothstep(0.9, 2.0, rc)) * step(abs(root.y - car.y), 2.0);
        if (kc > press) { press = kc; dir = rc > 0.001 ? dc / rc : vec2(1.0, 0.0); }
        w.xz += dir * press * vY * 0.5; w.y -= press * vY * 0.45;
        vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`#include <fog_pars_fragment>
      uniform vec3 light; varying float vY; varying vec3 vC;
      void main(){ vec3 c = mix(vC * 0.5, vC * 1.12, vY) * light; gl_FragColor = vec4(c, 1.0);
        #include <fog_fragment>
      }`}),me),Le=new Float32Array(me*3),Oe={meadow:[.25,.45,.38,1],autumn:[.13,.42,.45,.85],plane:[.24,.42,.36,.9],coast:[.26,.38,.4,.55],field:[.12,.5,.55,.6]},Ve=0,at=a?1500:3500,it=new tr(new oc(.09,0).translate(0,.42,0),kf(new mi({roughness:.8}),{bend:.15,push:1.1,rigid:0}),at),B=0,wt=["#f4f1e6","#f2c94c","#e88aa8","#a78bd8","#f4f1e6"].map(zt);for(let O=0;O<me*8&&Ve<me;O++){let I=-120+h()*240,L=-80+h()*160,Z=Pr(I,L),se=null,de=0;for(let Ct in Oe)(Z[Ct]||0)>de&&(de=Z[Ct],se=Ct);if(!se||h()>de*1.3||jr(I*.08,L*.08)<.36)continue;let fe=n(I,L);if(fe<.05||fe>6||o(I,L)<2.2||f(I,L,7.5)||s(I,L)>.6||!Te(I,L))continue;let Ye=Oe[se],nt=(.7+h()*.7)*Ye[3];d.compose(g.set(I,fe-.02,L),u.setFromEuler(new dr(0,h()*6.28,(h()-.5)*.3)),p.set(nt,nt*(.8+h()*.6),nt)),we.setMatrixAt(Ve,d),y.setHSL(Ye[0]+h()*.05,Ye[1]+h()*.12,Ye[2]+h()*.1),Le.set([y.r,y.g,y.b],Ve*3),Ve++,se==="meadow"&&B<at&&h()<.18&&(it.setMatrixAt(B,d.compose(g.set(I+.2,fe,L+.1),u.identity(),p.set(1,.8+h()*.6,1))),it.setColorAt(B,wt[Math.floor(h()*5)]),B++)}we.count=Ve,it.count=B,we.geometry.setAttribute("tint",new oa(Le,3)),we.frustumCulled=!1,it.frustumCulled=!1,e.add(we,it);let ct=(()=>{let O=document.createElement("canvas");O.width=O.height=64;let I=O.getContext("2d");return I.fillStyle="#fff",I.beginPath(),I.moveTo(32,60),I.bezierCurveTo(4,40,4,8,32,4),I.bezierCurveTo(60,8,60,40,32,60),I.fill(),new Ms(O)})(),ht=a?900:1800,R=new tr(new Xi(.26,.26).rotateX(-Math.PI/2),new mi({map:ct,alphaTest:.5,side:Ri,roughness:.9}),ht),S=[];for(let O=0;O<ht*30&&S.length<ht;O++){let I=h()<.5,L=I?X.ginkgo:X.plane;if(!L||!L.length)continue;let Z=L[Math.floor(h()*L.length)],se=h()*6.28,de=h()*4.5,fe=Z.x+Math.cos(se)*de,Ye=Z.z+Math.sin(se)*de,nt=n(fe,Ye);nt<.05||(S.push({p:new C(fe,nt+.03,Ye),v:new C,rot:h()*6.28,spin:0,tilt:0,air:!1}),R.setColorAt(S.length-1,y.setHSL(I?.12+h()*.03:.07+h()*.04,I?.8:.55,I?.55+h()*.1:.38+h()*.12)))}R.count=S.length,R.frustumCulled=!1,R.instanceMatrix.setUsage(An),R.receiveShadow=!0;let H=new dr,ee=O=>{let I=S[O];d.compose(I.p,u.setFromEuler(H.set(I.tilt,I.rot,I.tilt*.6)),p.set(1,1,1)),R.setMatrixAt(O,d)};S.forEach((O,I)=>ee(I)),e.add(R);function ce(O,I,L,Z){let se=!1;for(let de=0;de<S.length;de++){let fe=S[de];if(!fe.air){if(L<2.5)continue;let nt=fe.p.x-O.x,Ct=fe.p.z-O.z;if(nt*nt+Ct*Ct>2.6||Math.abs(fe.p.y-O.y)>2)continue;fe.air=!0;let yt=.25+Math.random()*.4;fe.v.set(I.x*yt+nt*1.5,2+Math.random()*L*.35,I.z*yt+Ct*1.5),fe.spin=(Math.random()-.5)*12}fe.v.y-=6*Z,fe.v.multiplyScalar(1-Z*2.2),fe.p.addScaledVector(fe.v,Z),fe.rot+=fe.spin*Z,fe.tilt=Math.sin(fe.rot*2)*.8;let Ye=n(fe.p.x,fe.p.z)+.03;fe.p.y<=Ye&&(fe.p.y=Ye,fe.air=!1,fe.tilt=0),ee(de),se=!0}se&&(R.instanceMatrix.needsUpdate=!0)}let xe=240,Me=new tr(new Xi(.2,.2),new mi({map:ct,alphaTest:.5,side:Ri}),xe);Me.frustumCulled=!1,Me.instanceMatrix.setUsage(An);for(let O=0;O<xe;O++)Me.setColorAt(O,y.set("#e8b93a"));let W=Array.from({length:xe},()=>({p:new C(0,-99,0),ph:Math.random()*6,life:0}));e.add(Me);let _e={autumn:[.12,.8,.55],plane:[.08,.55,.42],meadow:[.95,.6,.82]};function Re(O,I,L){let Z=La(L.x,L.z),se=$t[Z.key].biome,de=_e[se],fe=de&&Z.d<34,Ye=se==="autumn"?X.ginkgo:se==="plane"?X.plane:X.blossom,nt=fe&&Ye?Ye.filter(We=>Math.abs(We.x-L.x)<24&&Math.abs(We.z-L.z)<18):[],Ct=!1;for(let We=0;We<xe;We++){let yt=W[We];if(yt.life<=0){if(yt.p.y=-99,nt.length&&Math.random()<.03){let Di=nt[Math.floor(Math.random()*nt.length)];yt.p.set(Di.x+(Math.random()-.5)*3,Di.y+2.5+Math.random()*2*Di.s,Di.z+(Math.random()-.5)*3),yt.life=1,Me.setColorAt(We,y.setHSL(de[0]+Math.random()*.04,de[1],de[2]+Math.random()*.1)),Ct=!0}}else yt.p.x+=(Math.sin(I*1.3+yt.ph)*.6+vi.strength.value*.6)*O,yt.p.z+=Math.cos(I*1.1+yt.ph)*.4*O,yt.p.y-=.7*O,yt.p.y<n(yt.p.x,yt.p.z)&&(yt.life=0);d.compose(yt.p,u.setFromEuler(H.set(Math.sin(I*3+yt.ph)*1.2,I*2+yt.ph,Math.cos(I*2.6+yt.ph))),p.set(1,1,1)),Me.setMatrixAt(We,d)}Me.instanceMatrix.needsUpdate=!0,Ct&&(Me.instanceColor.needsUpdate=!0)}let Fe=["#2f6fd0","#f4f1e6","#d4392e","#3f9a52","#f2c230"].map(zt),ve=[];for(let[[O,I,L],[Z,se,de]]of Bf){let fe=n(O,L)+I,Ye=n(Z,de)+se,nt=Math.hypot(Z-O,de-L),Ct=Math.floor(nt/.5);for(let We=1;We<Ct;We++){let yt=We/Ct,Di=O+(Z-O)*yt,dt=L+(de-L)*yt,Si=fe+(Ye-fe)*yt-Math.sin(yt*Math.PI)*.9,xr=new Xi(.34,.42,3,1).translate(0,-.21,0).rotateY(-Math.atan2(de-L,Z-O)).translate(Di,Si,dt),vt=Fe[We%5],Bt=new Float32Array(xr.attributes.position.count*3);for(let Ui=0;Ui<Bt.length;Ui+=3)Bt[Ui]=vt.r,Bt[Ui+1]=vt.g,Bt[Ui+2]=vt.b;xr.setAttribute("color",new Vt(Bt,3)),xr.deleteAttribute("uv"),ve.push(xr)}}if(ve.length){let O=new mi({vertexColors:!0,side:Ri,roughness:.9});O.onBeforeCompile=L=>{L.uniforms.wT=vi.t,L.uniforms.wS=vi.strength,L.vertexShader=L.vertexShader.replace("#include <common>",`#include <common>
uniform float wT, wS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.x += sin(wT * 6.0 + position.x * 3.0 + position.z * 2.0) * 0.08 * (0.6 + wS);
        transformed.z += cos(wT * 5.0 + position.x * 2.0) * 0.08 * (0.6 + wS);`)};let I=new gt(Mc(ve),O);I.castShadow=!0,e.add(I)}for(let[O,I]of zf){let L=qr(i,"flagpole");L.position.set(O,n(O,I),I),e.add(L),t.statics.cyl(O,n(O,I)+2.5,I,2.5,.12)}let Xe=Uf.map(([O,I,L,Z,se])=>{let de=qr(i,O);return de.scale.setScalar(se),de.position.set(I,n(I,L),L),de.rotation.y=Z,e.add(de),{g:de,home:new pe(I,L),tgt:new pe(I,L),bob:Math.random()*6,speed:0}});function Ze(O,I,L){for(let Z of Xe){let se=Z.g.position,de=Math.hypot(se.x-L.x,se.z-L.z);de<5?(Z.tgt.set(se.x+(se.x-L.x)/de*6,se.z+(se.z-L.z)/de*6),Z.speed=3.2):Math.random()<O*.08&&(Z.tgt.set(Z.home.x+(Math.random()-.5)*8,Z.home.y+(Math.random()-.5)*8),Z.speed=.7);let fe=Z.tgt.x-se.x,Ye=Z.tgt.y-se.z,nt=Math.hypot(fe,Ye);if(nt>.3&&n(Z.tgt.x,Z.tgt.y)>.05){let Ct=Math.atan2(-Ye,fe)-Z.g.rotation.y;Ct=Math.atan2(Math.sin(Ct),Math.cos(Ct)),Z.g.rotation.y+=Ct*Math.min(1,O*4),se.x+=fe/nt*Z.speed*O,se.z+=Ye/nt*Z.speed*O,Z.g.rotation.z=Math.sin(I*Z.speed*4)*.04}else Z.speed=0,Z.g.rotation.z=Math.sin(I*.8+Z.bob)*.02;se.y=n(se.x,se.z)+(Z.speed>1?Math.abs(Math.sin(I*Z.speed*4))*.06:0)}}let rt=Of.map(([O,I,L],Z)=>{var Ye,nt;let se=qr(i,"balloon");se.position.set(O,L,I),se.scale.setScalar(1.3),e.add(se);let de=(nt=(Ye=i.balloon)==null?void 0:Ye.roles.glow)==null?void 0:nt[0],fe=null;return de&&(fe=new gt(de.geometry,new Mi({color:"#ffb347"})),se.add(fe)),{g:se,x:O,z:I,y:L,ph:Z*1.7,flame:fe}}),St=Ff.map(O=>{let I=qr(i,O.asset);return e.add(I),{...O,g:I}});function V(O,I){for(let L of rt)L.g.position.y=L.y+Math.sin(I*.3+L.ph)*1.4,L.g.position.x=L.x+Math.sin(I*.04+L.ph)*6,L.g.rotation.y=I*.05+L.ph,L.flame&&(L.flame.visible=Math.sin(I*2.3+L.ph*3)>.4);for(let L of St){let Z=I*L.speed*.012+L.phase*Math.PI*2,se=(Math.sin(Z)+1)/2,de=Math.cos(Z)>0?1:-1;if(L.axis==="nile"){let fe=L.z0+(L.z1-L.z0)*se,Ye=ws(fe),nt=ws(fe+.5);L.g.position.set(Ye,-.45-.12+Math.sin(I*1.4+L.phase*9)*.05,fe),L.g.rotation.y=Math.atan2(-.5*de,(nt-Ye)*de),L.g.rotation.z=Math.sin(I*1.1+L.phase*5)*.03}else{let fe=L.x0+(L.x1-L.x0)*se;L.g.position.set(fe,-.45-.2+Math.sin(I*1.2)*.04,xc(fe)),L.g.rotation.y=de>0?0:Math.PI}}}let le=[];for(let[O,I,L,Z,se]of Hf()){let de=qr(i,O);e.add(de);let fe=n(I,L),Ye;O==="haybale"?Ye=t.dynamic({type:"roundcyl",hh:.49,r:.56,b:.06,rot:{x:Math.SQRT1_2,y:0,z:0,w:Math.SQRT1_2}},{x:I,y:fe+.64+se*1.07,z:L,ry:Z,mass:1.2,friction:.8,restitution:.05}):O==="haybale_sq"?Ye=t.dynamic({type:"box",hx:.55,hy:.23,hz:.28},{x:I,y:fe+.25,z:L,ry:Z,mass:.8,friction:.8}):O==="cone"?(Ye=t.dynamic({type:"cone",hh:.37,r:.3},{x:I,y:fe+.39,z:L,ry:Z,mass:.15,restitution:.3}),de.children.forEach(nt=>{nt.position.y=-.37})):Ye=t.dynamic({type:"box",hx:.4,hy:.4,hz:.4},{x:I,y:fe+.41+se*.81,z:L,ry:Z,mass:.5}),le.push({g:de,body:Ye})}let ge=O=>{let I=O.body.translation(),L=O.body.rotation();O.g.position.set(I.x,I.y,I.z),O.g.quaternion.set(L.x,L.y,L.z,L.w)};le.forEach(ge);let Ne=0;return{terrain:U,water:F,waterMat:Q,grassU:oe,glow:c,trees:X,htex:D,pressGrass(O,I,L){oe.trail.value[Ne=(Ne+1)%Ge].set(O,L,I,0)},update(O,I,L){vi.t.value=I,vi.car.value.copy(L.carPos);for(let Z=0;Z<Ge;Z++){let se=oe.trail.value[Z];se.w=Math.min(1,Math.max(0,(I-se.y)/7))}Q.uniforms.t.value=I,Q.uniforms.car.value.copy(L.carPos),Ke(L.carPos,L.speed,L.onShake),he(O),ce(L.carPos,L.vel,L.speed,O),Re(O,I,L.focus),Ze(O,I,L.carPos),V(O,I);for(let Z of le)Z.body.isSleeping()||ge(Z)}}}var UM=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;function OM(e,t,i,r){let s=document.createElement("canvas");s.width=640,s.height=900;let o=s.getContext("2d");o.fillStyle="#0d0e13",o.fillRect(0,0,640,900),o.fillStyle=r.accent,o.fillRect(0,0,640,14),o.fillStyle="rgba(255,255,255,.55)",o.font='500 28px "Geist Mono", monospace',o.textBaseline="top",o.fillText(`${String(t+1).padStart(2,"0")} / ${String(i).padStart(2,"0")}`,52,62),o.textAlign="right",o.fillText(`${e.photos.length} FRAMES`,588,62),o.textAlign="left",o.fillStyle="#fff",o.font="600 96px Geist, sans-serif";let l=e.en.split(" "),h=170,c="",d=[];for(let g of l){let x=c?`${c} ${g}`:g;o.measureText(x).width>536&&c?(d.push(c),c=g):c=x}d.push(c);for(let g of d.slice(0,2))o.fillText(g,52,h),h+=100;o.fillStyle="rgba(255,255,255,.82)",o.font='500 64px "PingFang SC", "Noto Sans SC", "Microsoft YaHei", sans-serif',o.fillText(e.zh,52,h+14),h+=120,o.fillStyle="rgba(255,255,255,.18)",o.fillRect(52,h,536,2),o.fillStyle="rgba(255,255,255,.62)",o.font='500 30px "Geist Mono", monospace';let u=$t[e.key];o.fillText(u.lat!=="\u2014"?`${u.lat}  ${u.lon}`:"ON THE ROAD",52,h+34),o.fillStyle="rgba(255,255,255,.75)",o.font="400 34px Geist, sans-serif",o.fillText(r.line,52,h+92,536),o.fillStyle=r.accent,o.fillRect(52,750,60,60),o.fillStyle="#fff",o.font='600 30px "Geist Mono", monospace',o.fillText("\u21B5",70,765),o.fillStyle="rgba(255,255,255,.85)",o.font='500 28px "Geist Mono", monospace',o.fillText("ENTER \xB7 \u770B\u7167\u7247",132,768);let p=new Ms(s);return p.colorSpace=Gt,p.anisotropy=8,p}function FM(e,t){let r=document.createElement("canvas");r.width=r.height=1024;let a=r.getContext("2d");a.clearRect(0,0,1024,1024),a.strokeStyle="rgba(0,0,0,.12)",a.lineWidth=3;for(let s of[.47,.36])a.beginPath(),a.arc(1024/2,1024/2,1024*s,0,Math.PI*2),a.stroke();for(let s=0;s<72;s++){let o=s/72*Math.PI*2,l=1024*.47,h=1024*(s%6?.455:.43);a.beginPath(),a.moveTo(1024/2+Math.cos(o)*l,1024/2+Math.sin(o)*l),a.lineTo(1024/2+Math.cos(o)*h,1024/2+Math.sin(o)*h),a.stroke()}a.fillStyle="rgba(0,0,0,.09)",a.font="600 300px Geist, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(String(e+1).padStart(2,"0"),1024/2,1024*.6);let n=new Ms(r);return n.colorSpace=Gt,n.anisotropy=8,n}function Vf(e,t,i,r,a){let n=new Fo,s=[],o=a.filter(h=>$t[h.key]);o.forEach((h,c)=>{let d=$t[h.key],u=Qc[h.key]||Qc.road,p=r.sample(d.x,d.z),g=new ai;g.position.set(d.x,p,d.z),e.add(g);let x=qr(i,"platform");x.children.forEach(F=>{F.material=F.material.clone(),F.material.color.set(u.plat),F.castShadow=!1}),g.add(x),t.statics.cyl(d.x,p+.05,d.z,.12,6);let m=new gt(new rc(5.9,64),new mi({map:FM(c,u),transparent:!0,roughness:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));m.rotation.x=-Math.PI/2,m.position.y=.185,m.receiveShadow=!0,g.add(m);let f=new mi({color:u.accent,emissive:u.accent,emissiveIntensity:.3,roughness:.4}),y=new gt(new hc(5,.07,6,120),f);y.rotation.x=-Math.PI/2,y.position.y=.2,g.add(y);let M=new Cr(2.3,3.24,.22),v=new mi({color:"#0d0e13",roughness:.5}),T=OM(h,c,o.length,u),w=new mi({map:T,roughness:.6,emissive:"#ffffff",emissiveMap:T,emissiveIntensity:0}),A=new gt(M,[v,v,v,v,w,v]),_=-4.4,b=3.6,U=.55;A.position.set(_,.18+1.62+.25,b),A.rotation.y=U,A.castShadow=!0,g.add(A);let N=new gt(new Cr(2.5,.25,.6),v);N.position.set(_,.3,b),N.rotation.y=U,g.add(N),t.statics.box(d.x+_,p+1.8,d.z+b,1.25,1.8,.3,U);let D=Math.min(5,h.photos.length),Q=[];for(let F=0;F<D;F++){let P=h.photos[F],G=D===1?0:(F/(D-1)-.5)*1.9,z=Math.sin(G)*4.1,re=-Math.cos(G)*4.1+.4,X=-G,j=qr(i,"stand");j.position.set(z,.18,re),j.rotation.y=X+Math.PI,g.add(j),t.statics.box(d.x+z,p+1,d.z+re,.9,1,.25,X);let te=P.ratio||1.5,Pe=te>=1?1.2:1.6,Te=Pe*te,qe=new ai;qe.position.set(z,.18+.62,re+.12*Math.cos(G)),qe.rotation.y=X,g.add(qe);let He=new Mi({color:"#222"});n.load(P.s,Ee=>{Ee.colorSpace=Gt,Ee.anisotropy=4,He.map=Ee,He.color.set("#fff"),He.needsUpdate=!0});let $=new gt(new Cr(Te+.16,Pe+.16,.04),new mi({color:"#f6f3ee",roughness:.8}));$.position.y=(Pe+.16)/2,$.castShadow=!0;let ne=new gt(new Xi(Te,Pe),He);ne.position.set(0,(Pe+.16)/2,.025);let ue=new ai;ue.add($,ne),qe.add(ue),Q.push({card:ue,delay:F*.08,mat:He})}s.push({...h,x:d.x,z:d.z,gy:p,root:g,ring:y,ringMat:f,frames:Q,face:w,lift:0,focus:new C(d.x,p+1.5,d.z-6)})});function l(h,c,d,u){let p=null;for(let g of s){let m=Math.hypot(d.x-g.x,d.z-g.z)<5.6;m&&(p=g),g.lift+=((m?1:0)-g.lift)*Math.min(1,h*(m?2.2:1.6)),g.ringMat.emissiveIntensity=.25+g.lift*2.2+u*.8+Math.sin(c*3)*.1*g.lift,g.ring.scale.setScalar(1+Math.sin(c*2)*.006*g.lift),g.face.emissiveIntensity=u*.75;for(let f of g.frames){let y=UM(Math.min(1,Math.max(0,(g.lift-f.delay)/(1-f.delay*1.5))));f.card.rotation.x=-1.45*(1-y)-.12*y,f.card.position.y=0+.1*y,f.mat.color.setScalar(.8+.2*Math.max(y,1-u))}}return p}return{stops:s,update:l}}var Jo=(e,t=0,i=1)=>Math.min(i,Math.max(t,e)),Bn=(e,t,i)=>{let r=Jo((i-e)/(t-e));return r*r*(3-2*r)},Cs=[0,7,12,17,23];function Wf(){let e,t,i,r=!1,a=null,n=!1,s={},o=900,l=1,h=0,c=0;function d(){let x=e.createBuffer(1,e.sampleRate*3,e.sampleRate),m=x.getChannelData(0),f=1234567,y=0;for(let M=0;M<m.length;M++){f=Math.imul(f,1664525)+1013904223>>>0;let v=f/2147483648-1;y=y*.92+v*.08,m[M]=v*.35+y*2.2}return x}function u(x,m,f=.7){let y=e.createBufferSource();y.buffer=i,y.loop=!0;let M=e.createBiquadFilter();M.type=x,M.frequency.value=m,M.Q.value=f;let v=e.createGain();return v.gain.value=0,y.connect(M).connect(v).connect(t),y.start(e.currentTime+Math.random()),{f:M,g:v}}let p=(x,m,f=.08)=>x.setTargetAtTime(m,e.currentTime,f);async function g(){e=new(window.AudioContext||window.webkitAudioContext);let x=e.createDynamicsCompressor();x.threshold.value=-14,x.ratio.value=4,t=e.createGain(),t.gain.value=0,t.connect(x).connect(e.destination),i=d();let m=e.createWaveShaper(),f=new Float32Array(1024);for(let N=0;N<1024;N++){let D=N/512-1;f[N]=Math.tanh(D*2.4)}m.curve=f;let y=e.createBiquadFilter();y.type="lowpass",y.Q.value=2.2;let M=e.createGain();M.gain.value=0;let v=e.createOscillator(),T=e.createOscillator(),w=e.createOscillator();v.type="sawtooth",T.type="sawtooth",w.type="square";let A=e.createGain(),_=e.createGain(),b=e.createGain();A.gain.value=.5,_.gain.value=.35,b.gain.value=.22,v.connect(A).connect(m),T.connect(_).connect(m),w.connect(b).connect(m),m.connect(y).connect(M).connect(t),[v,T,w].forEach(N=>N.start());let U=u("bandpass",900,1.2);s.engine={o1:v,o2:T,o3:w,ef:y,eg:M,rasp:U},s.gravel=u("lowpass",3200,.5),s.grass=u("bandpass",500,.8),s.water=u("bandpass",1300,.6),s.skid=u("bandpass",1100,3.5),s.wind=u("lowpass",520,.4),s.rain=u("highpass",2600,.5)}return{get on(){return r},async toggle(){return a||(a=g()),await a,r=!r,r&&await e.resume(),p(t.gain,r&&!n?.8:0,.05),r},pause(x){n=x,e&&p(t.gain,r&&!n?.8:0,.15)},drive({speed:x,throttle:m,boost:f,surface:y,wading:M,skid:v,grounded:T,wind:w,rain:A,dt:_}){if(!r||!e)return;h=Math.max(0,h-_);let b=m<0&&x<6;!b&&h===0&&(l<Cs.length-1&&x>Cs[l+1]*(f?1.15:1)&&m>0?(l++,h=.25):l>1&&x<Cs[l]-2&&(l--,h=.2)),(b||x<1)&&(l=1);let U=Cs[l-1]||0,N=Cs[l]||7,D=Jo((x-U)/Math.max(4,N-U+4));c+=((Math.abs(m)>0?1:0)-c)*Math.min(1,_*(m?8:4));let Q=850+D*3400+c*(T?250:1400)+(f&&m>0?500:0);o+=(Q-o)*Math.min(1,_*(h>0?14:7)),h>.12&&(o-=900*_*8);let F=o/60*2,P=s.engine;p(P.o1.frequency,F*.5,.03),p(P.o2.frequency,F*.503,.03),p(P.o3.frequency,F*.25,.03),p(P.ef.frequency,380+o*.32+c*900,.06),p(P.eg.gain,.07+c*.08+Bn(800,4500,o)*.05-(h>.12?.05:0),.05),p(P.rasp.f.frequency,400+o*.25,.08),p(P.rasp.g.gain,c*.05,.08);let G=T?Bn(.6,16,x):0,z=Jo(M*1.5);p(s.gravel.g.gain,G*(y==="gravel"||y==="sand"?.32:y==="snow"?.18:.05)*(1-z),.1),p(s.gravel.f.frequency,y==="sand"?1700:y==="snow"?2400:3600,.2),p(s.grass.g.gain,G*(y==="grass"?.26:.02)*(1-z),.1),p(s.water.g.gain,G*z*.55+z*.05,.1),p(s.skid.g.gain,T?Bn(.2,.9,v)*Bn(2,10,x)*(y==="gravel"?.18:.1):0,.05),p(s.wind.g.gain,.03+Bn(3,22,x)*.16+w*.08,.2),p(s.wind.f.frequency,420+x*30,.2),p(s.rain.g.gain,A*.12,.3)},bump(x,m="stone",f=0){if(!r||!e)return;let y=e.currentTime,M=Bn(1,16,x),v=e.createStereoPanner();v.pan.value=Jo(f,-.8,.8),v.connect(t);let T=m==="wood"||m==="tree"||m==="crate",w=m==="hay"||m==="rubber",A=m==="metal",_=e.createOscillator(),b=e.createGain();_.type=A||T?"triangle":"sine",_.frequency.setValueAtTime(A?240:T?120:w?70:85,y),_.frequency.exponentialRampToValueAtTime(A?140:45,y+.18),b.gain.setValueAtTime(1e-4,y),b.gain.exponentialRampToValueAtTime((.12+M*.4)*(w?.5:1),y+.006),b.gain.exponentialRampToValueAtTime(1e-4,y+(A?.3:.2)),_.connect(b).connect(v),_.start(y),_.stop(y+.35);let U=e.createBufferSource();U.buffer=i;let N=e.createBiquadFilter();N.type="bandpass",N.frequency.value=A?2600:T?1200:w?380:650,N.Q.value=A?3:.8;let D=e.createGain();D.gain.setValueAtTime(1e-4,y),D.gain.exponentialRampToValueAtTime((.1+M*.35)*(w?.6:1),y+.004),D.gain.exponentialRampToValueAtTime(1e-4,y+(w?.3:.18)),U.connect(N).connect(D).connect(v),U.start(y,Math.random()*2,.4),setTimeout(()=>{v.disconnect()},800)}}}var vr=e=>String(e!=null?e:"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Yr=(e,t,i)=>Math.min(i,Math.max(t,e)),Ba=(e,t,i)=>{let r=Yr((i-e)/(t-e),0,1);return r*r*(3-2*r)},_r=(e,t,i)=>e+(t-e)*i,da=(e,t,i,r)=>e+(t-e)*(1-Math.exp(-i*r)),BM=(e,t,i,r)=>e+Math.atan2(Math.sin(t-e),Math.cos(t-e))*(1-Math.exp(-i*r)),eu=[{tod:.44,en:"Day",zh:"\u767D\u5929"},{tod:.705,en:"Golden hour",zh:"\u9EC4\u660F"},{tod:.93,en:"Night",zh:"\u591C"},{tod:.255,en:"Dawn",zh:"\u6E05\u6668"}],$o=["auto","clear","rain","snow","sand"],Xf={clear:"\u6674 Clear",rain:"\u96E8 Rain",snow:"\u96EA Snow",sand:"\u6C99\u5C18\u66B4 Sandstorm"},zM={giza:"sand",cairo:"clear",luxor:"clear",qinggan:"sand",yunnan:"snow",beijing:"clear",nanjing:"rain",shanghai:"rain",road:"clear"},HM={uniforms:{tDiffuse:{value:null},power:{value:0},rect:{value:new Nt(.4,.4,.6,.6)},aspect:{value:1.6}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};async function kM(e,{stops:t=[],onClose:i}={}){var hu;let r=matchMedia("(pointer: coarse)").matches,a=matchMedia("(prefers-reduced-motion: reduce)").matches,n=new URLSearchParams(location.search);e.innerHTML=`
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
      <figure><img alt=""><figcaption class="mono"></figcaption></figure>
      <button type="button" class="drive__vbtn" data-v="prev" aria-label="Previous">\u2190</button>
      <button type="button" class="drive__vbtn" data-v="next" aria-label="Next">\u2192</button>
      <button type="button" class="drive__vbtn" data-v="close" aria-label="Back to driving">Esc \xB7 \u56DE\u5230\u8F66\u4E0A</button>
    </div>
    <div class="drive__pad" ${r?"":"hidden"}>
      <div><button type="button" data-k="left" aria-label="Steer left">\u25C0</button><button type="button" data-k="right" aria-label="Steer right">\u25B6</button></div>
      <div class="dv-padr"><button type="button" data-k="boost" class="dv-small">\u52A0\u901F</button><button type="button" data-k="jump" class="dv-small">\u8DF3</button><button type="button" data-k="enter" class="dv-small" aria-label="Open photos">\u25CF</button><button type="button" data-k="brake" aria-label="Reverse">\u25BC</button><button type="button" data-k="gas" aria-label="Accelerate">\u25B2</button></div>
    </div>
    <div class="drive__flash"></div>
    <div class="drive__load mono"><span>Building the island \xB7 \u6B63\u5728\u9020\u5C9B</span><i><b></b></i></div>`;let s=Y=>e.querySelector(Y),o=s(".drive__canvas"),l=s(".drive__card"),h=s(".drive__region"),c=s(".drive__viewer"),d=c.querySelector("img"),u=c.querySelector("figcaption"),p=s(".drive__flash"),g=s(".dv-place"),x=s(".dv-speed output"),m=s('[data-act="time"]'),f=s('[data-act="weather"]'),y=s('[data-act="sound"]'),M=s(".dv-mapdlg"),v=s(".dv-fullmap"),T=s(".dv-visited"),w=s(".drive__load b"),A=!0,_={rapier:0,assets:0,world:0},b=()=>{w.style.transform=`scaleX(${(_.rapier*.35+_.assets*.5+_.world*.15).toFixed(3)})`},U=()=>{A=!1,i==null||i()};e.addEventListener("click",Y=>{Y.target.closest('[data-act="close"]')&&U()});let N=new URL(".",document.baseURI).href,D=`${N}assets/vendor/rapier/rapier.mjs`,[Q,F]=await Promise.all([import(D).then(async Y=>{let J=Y.default||Y;return await J.init(),_.rapier=1,b(),J}),Nf(`${N}media/drive/`,Y=>{_.assets=Y,b()})]);if(!A)return{close(){}};await new Promise(Y=>setTimeout(Y,30));let P=new xf({canvas:o,antialias:!0,stencil:!0,powerPreference:"high-performance"});P.setPixelRatio(Math.min(devicePixelRatio,r?1.25:1.7)),P.shadowMap.enabled=!0,P.shadowMap.type=ln,P.toneMapping=wn;let G=new pp;G.fog=new up(12376554,.0085);let z=new yi(50,1,.12,900),re=new of(14478591,9073752,1.1),X=new Ss(16777215,2.4);X.castShadow=!0,X.shadow.mapSize.set(r?1024:2048,r?1024:2048),Object.assign(X.shadow.camera,{left:-38,right:38,top:38,bottom:-38,near:1,far:180}),X.shadow.bias=-5e-4,X.shadow.normalBias=.05;let j=new Ss(9085695,0);G.add(re,X,X.target,j,j.target);let te={top:{value:new Se},horizon:{value:new Se},sunDir:{value:new C(0,1,0)},sunCol:{value:new Se},night:{value:0},haze:{value:0}},Pe=new gt(new lc(420,32,16),new Wt({uniforms:te,side:Ci,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }",fragmentShader:`
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
      }`}));Pe.renderOrder=-1,Pe.frustumCulled=!1,G.add(Pe);let Te=new oi(2,2,{type:fi,stencilBuffer:!0}),qe=new Wo(P,Te);qe.addPass(new Xo(G,z));let He=new On(new pe(256,256),.3,.55,.85);r||qe.addPass(He);let $=new Un(HM);a||qe.addPass($),qe.addPass(new jo);let ne=Mf(),ue=Sf(Q,ne),Ee=Gf(G,ue,F,ne,{coarse:r}),Ke=Vf(G,ue,F,ne,t),he=Ke.stops,{sample:Ge}=ne;_.world=1,b();let oe=Wf(),ae=ue.car,me=new ai,we=new ai;me.add(we),G.add(me);let Le=Y=>Object.assign(Y,{stencilWrite:!0,stencilRef:1,stencilFunc:Yh,stencilZPass:ip});for(let Y of F.car_body.parts){let J=new gt(Y.geometry,Le(Y.material.clone()));J.castShadow=!0,J.receiveShadow=!0,we.add(J)}let Oe={};for(let Y of["head","tail","reverse","indL","indR"])for(let J of((hu=F.car)==null?void 0:hu.roles[Y])||[]){let Ae=Oe[Y]||(Oe[Y]=Le(J.material.clone()));Ae.emissive&&(Ae.emissiveIntensity=0),we.add(new gt(J.geometry,Ae))}let Ve=(Y,J)=>{Oe[Y]&&(Oe[Y].emissiveIntensity=J)},at=ae.WHEELS.map(([Y,J,Ae],ze)=>{var Pt;let et=new ai,Tt=new ai;et.position.set(Y,J,Ae),et.add(Tt),me.add(et);for(let di of((Pt=F.car)==null?void 0:Pt.roles.wheel)||[]){let Kt=new gt(di.geometry,Le(di.material.clone()));Kt.castShadow=!0,Tt.add(Kt)}return Ae<0&&(Tt.scale.z=-1),{pivot:et,spin:Tt,y:J}}),it=[-.48,.48].map(Y=>{let J=new zo(16773328,0,46,.5,.6,1);return J.position.set(1.2,.1,Y),J.target.position.set(9,-1.4,Y*2.2),we.add(J,J.target),J}),B=new gt(new Cr(2.4,1.3,1.4),new Mi({color:5926143,transparent:!0,opacity:.35,depthFunc:os,depthWrite:!1,stencilWrite:!0,stencilRef:1,stencilFunc:rp,stencilFail:Ma,stencilZFail:Ma,stencilZPass:Ma}));B.position.y=.3,B.renderOrder=10,we.add(B);let wt=[];for(let Y of[-1.25,1.25])for(let J of[-.8,1.25])for(let Ae of[-.8,.8])wt.push(new C(Y,J,Ae));let ct=(Y,J,Ae)=>{let ze=new tr(new Xi(.34,.3).rotateX(-Math.PI/2),new Mi({color:J,transparent:!0,opacity:Ae,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),Y);ze.frustumCulled=!1,ze.instanceMatrix.setUsage(An);for(let et=0;et<Y;et++)ze.setMatrixAt(et,new Qe().makeScale(0,0,0));return ze.renderOrder=1,G.add(ze),{m:ze,i:0,n:Y}},ht=ct(1e3,3812386,.22),R=ct(500,1446415,.42),S=[new C(1e9,0,0),new C(1e9,0,0),new C(1e9,0,0),new C(1e9,0,0)],H=new Qe,ee=new C,ce=new C(0,1,0),xe=new C,Me=(Y,J,Ae)=>{ee.set(Ae[0],0,Ae[2]).normalize(),xe.crossVectors(ee,ce),H.makeBasis(ee,ce,xe).setPosition(J.x,J.y+.03,J.z),Y.m.setMatrixAt(Y.i=(Y.i+1)%Y.n,H),Y.m.instanceMatrix.needsUpdate=!0},W=200,_e=new tr(new sc(.16,0),new mi({color:16777215,roughness:1}),W);_e.instanceMatrix.setUsage(An),_e.frustumCulled=!1,G.add(_e);for(let Y=0;Y<W;Y++)_e.setColorAt(Y,new Se(15326404));let Re=Array.from({length:W},()=>({life:0,p:new C,v:new C,s:1,g:1.5,debris:!1})),Fe=0,ve=new Qe,Xe=new Jt,Ze=new C,rt=new Se,St=new dr,V=(Y,J,Ae,ze,et=1.5,Tt=!1)=>{let Pt=Re[Fe=(Fe+1)%W];Object.assign(Pt,{life:1,s:Ae,g:et,debris:Tt}),Pt.p.copy(Y),Pt.v.copy(J),_e.setColorAt(Fe,ze),_e.instanceColor.needsUpdate=!0},le=r?3500:9e3,ge=new Float32Array(le*3);for(let Y=0;Y<le*3;Y++)ge[Y]=Math.random();let Ne=new bt;Ne.setAttribute("position",new Vt(ge,3));let O={t:{value:0},center:{value:new C},kind:{value:0},amount:{value:0},wind:{value:new pe},scale:{value:400},night:{value:0}},I=new ys(Ne,new Wt({uniforms:O,transparent:!0,depthWrite:!1,vertexShader:`
      uniform float t, kind, amount, scale; uniform vec3 center; uniform vec2 wind; varying float vA; varying float vK;
      void main(){
        vec3 box = vec3(60.0, 26.0, 60.0);
        float r = fract(position.x * 7.13 + position.z * 3.7);
        vA = step(r, amount); vK = kind;
        vec3 vel = kind < 0.5 ? vec3(wind.x * 0.4, -26.0, wind.y * 0.4)
                 : kind < 1.5 ? vec3(wind.x * 0.25 + sin(t + r * 20.0) * 0.6, -2.2, wind.y * 0.25 + cos(t * 0.8 + r * 13.0) * 0.6)
                 : vec3(wind.x * 2.6, sin(t * 2.0 + r * 30.0) * 1.2, wind.y * 2.6);
        vec3 p = position * box + vel * t;
        vec3 o = center - box * 0.5; o.y = center.y - 8.0;
        p = mod(p - o, box) + o;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = clamp((kind < 0.5 ? 0.22 : 0.16) * scale / -mv.z, 0.0, 40.0);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float night; varying float vA; varying float vK;
      void main(){
        if (vA < 0.5) discard;
        vec2 c = gl_PointCoord - 0.5; float a; vec3 col;
        if (vK < 0.5) { a = (1.0 - smoothstep(0.0, 0.05, abs(c.x + c.y * 0.18))) * (1.0 - smoothstep(0.3, 0.5, abs(c.y))) * 0.55; col = vec3(0.78, 0.86, 1.0); }
        else if (vK < 1.5) { a = (1.0 - smoothstep(0.15, 0.5, length(c))) * 0.9; col = vec3(1.0); }
        else { a = (1.0 - smoothstep(0.0, 0.5, length(c * vec2(0.5, 2.2)))) * 0.75; col = vec3(0.86, 0.66, 0.42); }
        gl_FragColor = vec4(col * mix(1.0, 0.5, night), a);
      }`}));I.frustumCulled=!1,I.renderOrder=5,G.add(I);let L=260,Z=new Float32Array(L*3),se=[];for(let Y=0;Y<L;Y++){let J,Ae,ze=0;do J=(Math.random()-.5)*240*.8,Ae=(Math.random()-.5)*160*.8,ze++;while(((Pr(J,Ae).meadow||0)<.5||Ge(J,Ae)<.1)&&ze<40);se.push([J,Ge(J,Ae)+.6+Math.random()*1.4,Ae,Math.random()*6])}let de=new bt;de.setAttribute("position",new Vt(Z,3));let fe=new xs({color:14221178,size:.32,transparent:!0,opacity:0,depthWrite:!1,blending:vn}),Ye=new ys(de,fe);Ye.frustumCulled=!1,G.add(Ye);let nt=document.createElement("canvas");nt.width=480,nt.height=320;{let Y=nt.getContext("2d"),J=Y.createImageData(240,160),Ae=Ee.terrain.geometry.attributes.color,ze=Ee.terrain.geometry.attributes.position;for(let Tt=0;Tt<ze.count;Tt++){let Pt=Math.floor((ze.getX(Tt)+240/2)/240*239.99),Kt=(Math.floor((ze.getZ(Tt)+160/2)/160*159.99)*240+Pt)*4,si=ze.getY(Tt)<-.45;J.data[Kt]=si?88:Math.pow(Math.max(0,Ae.getX(Tt)),1/2.2)*255,J.data[Kt+1]=si?158:Math.pow(Math.max(0,Ae.getY(Tt)),1/2.2)*255,J.data[Kt+2]=si?190:Math.pow(Math.max(0,Ae.getZ(Tt)),1/2.2)*255,J.data[Kt+3]=255}let et=document.createElement("canvas");et.width=240,et.height=160,et.getContext("2d").putImageData(J,0,0),Y.imageSmoothingEnabled=!0,Y.drawImage(et,0,0,480,320)}let Ct=s(".dv-radar"),We=Ct.getContext("2d"),yt=new Set;function Di(Y,J){let Ae=Ct.width,ze=Ae/2,et=2.2;We.clearRect(0,0,Ae,Ae),We.save(),We.beginPath(),We.arc(ze,ze,ze-2,0,Math.PI*2),We.clip(),We.fillStyle="#4a8ba3",We.fillRect(0,0,Ae,Ae),We.translate(ze,ze),We.rotate(J),We.drawImage(nt,(-240/2-Y.x)*et,(-160/2-Y.z)*et,240*et,160*et);for(let Tt of he)We.fillStyle=yt.has(Tt.key)?"#fff":"#2233ff",We.beginPath(),We.arc((Tt.x-Y.x)*et,(Tt.z-Y.z)*et,5,0,Math.PI*2),We.fill(),We.strokeStyle="#0b0c10",We.lineWidth=1.5,We.stroke();We.restore(),We.fillStyle="#0b0c10",We.strokeStyle="#fff",We.lineWidth=2,We.beginPath(),We.moveTo(ze,ze-9),We.lineTo(ze+7,ze+7),We.lineTo(ze,ze+3),We.lineTo(ze-7,ze+7),We.closePath(),We.fill(),We.stroke()}let dt=v.getContext("2d"),Si=v.width/240;function xr(Y,J){let Ae=v.width,ze=v.height;dt.clearRect(0,0,Ae,ze),dt.fillStyle="#4a8ba3",dt.fillRect(0,0,Ae,ze),dt.drawImage(nt,0,0,Ae,ze),dt.font="600 15px Geist, sans-serif",dt.textBaseline="middle",he.forEach((Pt,di)=>{let Kt=(Pt.x+240/2)*Si,si=(Pt.z+160/2)*Si,qt=yt.has(Pt.key);dt.fillStyle=qt?"#fff":"#2233ff",dt.beginPath(),dt.arc(Kt,si,9,0,Math.PI*2),dt.fill(),dt.strokeStyle="#0b0c10",dt.lineWidth=2,dt.stroke(),dt.fillStyle=qt?"#0b0c10":"#fff",dt.textAlign="center",dt.font='600 11px "Geist Mono", monospace',dt.fillText(String(di+1),Kt,si+.5),dt.textAlign="left",dt.font="600 15px Geist, sans-serif",dt.fillStyle="#0b0c10",dt.fillText(`${Pt.en} ${Pt.zh}`,Kt+14,si)});let et=(Y.x+240/2)*Si,Tt=(Y.z+160/2)*Si;dt.save(),dt.translate(et,Tt),dt.rotate(Math.atan2(J[0],-J[2])),dt.fillStyle="#ff5a2a",dt.strokeStyle="#fff",dt.lineWidth=2,dt.beginPath(),dt.moveTo(0,-12),dt.lineTo(9,9),dt.lineTo(0,4),dt.lineTo(-9,9),dt.closePath(),dt.fill(),dt.stroke(),dt.restore(),T.textContent=`\u5DF2\u5230\u8BBF ${yt.size} / ${he.length} \xB7 visited`}v.addEventListener("click",Y=>{let J=v.getBoundingClientRect(),Ae=(Y.clientX-J.left)/J.width*v.width,ze=(Y.clientY-J.top)/J.height*v.height,et=-1,Tt=40;he.forEach((Pt,di)=>{let Kt=Math.hypot((Pt.x+240/2)*Si-Ae,(Pt.z+160/2)*Si-ze);Kt<Tt&&(Tt=Kt,et=di)}),et>=0&&(M.close(),rr(et))});let vt={gas:0,brake:0,left:0,right:0,hand:0,boost:0,jump:0},Bt=null,Ui=0,Oi=null,yr=0,Yi=n.has("tod")?parseFloat(n.get("tod")):.42,Fi=null,pa=null,Kr=$o.includes(n.get("wx"))?n.get("wx"):"auto",Dt="clear",ti=0,Ti=0,E=null,k=0,ie=eu[0],K=n.get("view")==="map"?"map":"chase",q=0,ye=0,Ce=.34,Ue=9.5,De=0,Be=null,lt=0,ot=K==="map"?1:0,je=new C,At=new C,Rt=new C,Mt=new C,Ot=Math.PI/2,Ft=(Y,J,Ae=Ot)=>ae.place(Y,Ge(Y,J)+1.3,J,Ae),ke=he.find(Y=>Y.key===n.get("at"));ke?Ft(ke.x,ke.z+9):Ft(ha.x,ha.z+2);let ui=()=>{let Y=ae.body.translation();Ft(Y.x,Y.z,ae.yaw())};function rr(Y){let J=he[Y];J&&(p.classList.remove("is-on"),p.offsetWidth,p.classList.add("is-on"),setTimeout(()=>{Ft(J.x,J.z+10),ni=!0},180))}let ni=!0;function Hi(){let Y=Oi.photos[yr];d.classList.remove("is-in"),d.src=Y.m,d.onload=()=>d.classList.add("is-in"),u.innerHTML=`<span>${vr(Oi.en)} \xB7 ${vr(Oi.zh)}</span><span>${vr(Y.title)} <span class="zh">${vr(Y.zh)}</span></span><span>${String(yr+1).padStart(2,"0")} / ${String(Oi.photos.length).padStart(2,"0")}</span>`}function ki(Y){Oi=Y,yr=0,c.hidden=!1,e.classList.add("is-viewing"),Object.keys(vt).forEach(J=>{vt[J]=0}),oe.pause(!0),Hi()}function Dr(){Oi=null,c.hidden=!0,e.classList.remove("is-viewing"),oe.pause(!1)}let Et=Y=>{yr=(yr+Y+Oi.photos.length)%Oi.photos.length,Hi()};c.addEventListener("click",Y=>{var Ae;let J=(Ae=Y.target.closest("[data-v]"))==null?void 0:Ae.dataset.v;J==="prev"&&Et(-1),J==="next"&&Et(1),(J==="close"||Y.target===c)&&Dr()});let Ht={KeyW:"gas",ArrowUp:"gas",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",KeyB:"hand",ShiftLeft:"boost",ShiftRight:"boost"},ar=()=>{if(M.open){M.close();return}Object.keys(vt).forEach(J=>{vt[J]=0});let Y=ae.body.translation();xr(Y,ae.forward()),M.showModal(),oe.pause(!0)};M.addEventListener("close",()=>oe.pause(!1));let It=()=>{K=K==="chase"?"map":"chase"},Zr=()=>{Kr=$o[($o.indexOf(Kr)+1)%$o.length]},Ur=Y=>J=>{if(!(J.metaKey||J.ctrlKey||J.altKey)&&!M.open){if(Oi){if(!Y)return;(J.code==="ArrowRight"||J.code==="KeyD")&&Et(1),(J.code==="ArrowLeft"||J.code==="KeyA")&&Et(-1),(J.code==="Escape"||J.code==="Enter"||J.code==="Backspace")&&Dr(),J.preventDefault();return}Ht[J.code]&&(vt[Ht[J.code]]=Y?1:0,J.preventDefault()),J.code==="Space"&&(Y&&!J.repeat&&(vt.jump=1),J.preventDefault()),!(!Y||J.repeat)&&(J.code==="KeyR"&&ui(),(J.code==="Enter"||J.code==="KeyE")&&Bt&&ki(Bt),J.code==="Escape"&&U(),J.code==="KeyN"&&Qo(),J.code==="KeyT"&&Zr(),J.code==="KeyM"&&ar(),J.code==="KeyV"&&It(),J.code==="KeyL"&&(pa=pa===null?!(Ti>.45):pa?!1:null),/^Digit[1-9]$/.test(J.code)&&rr(+J.code.slice(5)-1))}},zn=Ur(!0),tu=Ur(!1),iu=()=>Object.keys(vt).forEach(Y=>{vt[Y]=0});addEventListener("keydown",zn),addEventListener("keyup",tu),addEventListener("blur",iu),e.querySelectorAll(".drive__pad [data-k]").forEach(Y=>{let J=Y.dataset.k;if(J==="enter"){Y.addEventListener("click",()=>{Bt&&ki(Bt)});return}let Ae=et=>{var Tt;et.preventDefault(),(Tt=Y.setPointerCapture)==null||Tt.call(Y,et.pointerId),vt[J]=1},ze=()=>{J!=="jump"&&(vt[J]=0)};Y.addEventListener("pointerdown",Ae),Y.addEventListener("pointerup",ze),Y.addEventListener("pointercancel",ze),Y.addEventListener("lostpointercapture",ze)}),e.addEventListener("click",async Y=>{var Ae;let J=(Ae=Y.target.closest("[data-act]"))==null?void 0:Ae.dataset.act;if(J&&(J==="map"&&ar(),J==="mapclose"&&M.close(),J==="view"&&It(),J==="reset"&&ui(),J==="time"&&Qo(),J==="weather"&&Zr(),J==="sound")){y.disabled=!0;try{let ze=await oe.toggle();y.setAttribute("aria-pressed",String(ze)),y.querySelector("span").textContent=ze?"\u5F00":"\u5173"}finally{y.disabled=!1}}}),l.addEventListener("click",Y=>{Y.target.closest("[data-open]")&&(Y.preventDefault(),Bt&&ki(Bt))}),o.addEventListener("pointerdown",Y=>{Y.button!==0||Be||(o.setPointerCapture(Y.pointerId),Be={id:Y.pointerId,x:Y.clientX,y:Y.clientY})}),o.addEventListener("pointermove",Y=>{(Be==null?void 0:Be.id)===Y.pointerId&&(ye-=.007*(Y.clientX-Be.x),Ce=Yr(Ce+.004*(Y.clientY-Be.y),.12,1.1),Be.x=Y.clientX,Be.y=Y.clientY)});for(let Y of["pointerup","pointercancel","lostpointercapture"])o.addEventListener(Y,J=>{(Be==null?void 0:Be.id)===J.pointerId&&(Be=null)});o.addEventListener("wheel",Y=>{Y.preventDefault(),Ue=Yr(Ue+Y.deltaY*.01,6,18)},{passive:!1});function Qo(){let Y=[...eu].sort((Ae,ze)=>Ae.tod-ze.tod),J=Y.find(Ae=>Ae.tod>Yi%1+.02)||Y[0];Fi={from:Yi,to:J.tod>Yi%1?Math.floor(Yi)+J.tod:Math.floor(Yi)+1+J.tod,t:0}}let jf=new Se("#0c1330"),qf=new Se("#c4dfee"),Yf=new Se("#eaa27a"),Kf=new Se("#e7b9c6"),Zf=new Se("#5f9fd6"),Jf=new Se("#050816"),$f=new Se("#6b6fa8"),Qf=new Se("#d2a466"),em=new Se("#dfe6ee"),tm=new Se("#7f8c9c"),Jr=new Se,$r=new Se;function im(Y){let J=(Yi%1+1)%1,Ae=(J-.25)*Math.PI*2,ze=Math.sin(Ae),et=Ba(-.1,.22,ze);Ti=1-et;let Tt=Math.exp(-Math.pow(ze/.2,2));Jr.copy(jf).lerp(qf,et).lerp(J<.5?Kf:Yf,Tt*.75);let Pt=ti,di=0;Dt==="sand"&&(Jr.lerp($r.copy(Qf).multiplyScalar(_r(.35,1,et)),Pt*.85),di=Pt*.9),Dt==="snow"&&(Jr.lerp($r.copy(em).multiplyScalar(_r(.3,1,et)),Pt*.55),di=Pt*.6),Dt==="rain"&&(Jr.lerp($r.copy(tm).multiplyScalar(_r(.3,1,et)),Pt*.6),di=Pt*.7),G.fog.color.copy(Jr),G.fog.density=(K==="map"?.0045:.0085)+(Dt==="sand"?.034:Dt==="snow"?.014:Dt==="rain"?.01:0)*Pt,te.horizon.value.copy(Jr),te.top.value.copy(Jf).lerp(Zf,et).lerp($f,Tt*.5),te.night.value=Ti,te.haze.value=di;let Kt=new C(-Math.cos(Ae),Math.sin(Ae)*.9+.05,.45).normalize();te.sunDir.value.copy(Kt),te.sunCol.value.set("#ffd9a8").multiplyScalar(et);let si=1-(Dt==="clear"?0:Pt*.35);return X.color.set("#ffb27a").lerp($r.set("#fff8ee"),Ba(.02,.45,ze)),X.intensity=2.6*et*si,X.position.set(Y.x+Kt.x*50,Y.y+Math.max(12,Kt.y*60),Y.z+Kt.z*50),X.target.position.copy(Y),j.intensity=.9*Ti,j.position.set(Y.x+20,Y.y+40,Y.z-10),j.target.position.copy(Y),re.intensity=(.55+.6*et)*si,re.color.copy(Jr).lerp($r.set("#ffffff"),.35),re.groundColor.set("#8a7458").lerp($r.set("#1a1f33"),Ti),P.toneMappingExposure=_r(1.05,1.28,Ti),He.strength=.22+Ti*.45,Ee.glow.forEach(qt=>{qt.m.emissiveIntensity=_r(qt.day,qt.night,Ba(.25,.75,Ti))}),Ee.grassU.light.value.setRGB(_r(.13,1,et)*si,_r(.17,1,et)*si,_r(.3,1,et)*si),Ee.waterMat.uniforms.night.value=Ti,Ee.waterMat.uniforms.sky.value.copy(Jr),O.night.value=Ti,fe.opacity=Ba(.5,.9,Ti)*(Dt==="clear"?1:1-Pt),ie=[...eu].sort((qt,xt)=>Math.abs((J-qt.tod+1.5)%1-.5)-Math.abs((J-xt.tod+1.5)%1-.5))[0],J}let ru={tree:"#6f9a3c",hay:"#d9b45c",wood:"#c89a62",stone:"#cdbb9c",metal:"#c9ccd4"};function rm(Y,J,Ae){De=Math.max(De,Math.min(.5,J*(Y==="hay"?.012:Y==="tree"?.03:.045)));let ze=ae.body.translation(),et=ae.forward(),Tt=Yr(((Ae.x-ze.x)*-et[2]+(Ae.z-ze.z)*et[0])*.3,-1,1);oe.bump(J,Y,Tt);let Pt=Math.min(10,Math.ceil(J*.7));for(let di=0;di<Pt;di++)V(new C(_r(ze.x,Ae.x,.6),ze.y+.4,_r(ze.z,Ae.z,.6)),new C((Math.random()-.5)*6,2+Math.random()*3,(Math.random()-.5)*6),.35+Math.random()*.3,$r.set(ru[Y]||ru.stone),10,!0)}let jt=new C,au=new C,nu=new Jt,su=new Jt,el=()=>{let Y=e.clientWidth,J=e.clientHeight;P.setSize(Y,J,!1),qe.setSize(Y,J),z.aspect=Y/J,z.updateProjectionMatrix(),O.scale.value=J*P.getPixelRatio()*.9,$.uniforms.aspect.value=Y/J};el(),addEventListener("resize",el);let ou=performance.now(),tl=0,il=0,rl=0,al=0,Is=0,nl=0,sl=new C,am=performance.now();s(".drive__load").classList.add("is-done"),setTimeout(()=>{var Y;return(Y=s(".drive__load"))==null?void 0:Y.remove()},700),e.classList.add("is-intro"),requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.add("is-in")));let nm=new Q.Ball(.35),sm={x:0,y:0,z:0,w:1},om=Y=>ue.kinds.get(Y.handle)!=="tree";function lu(Y){if(!A)return;Ui=requestAnimationFrame(lu);let J=Math.min(.08,(Y-ou)/1e3);ou=Y;let Ae=(Y-am)/1e3;if(M.open)return;if(Fi){Fi.t=Math.min(1,Fi.t+J/2.4);let be=Fi.t*Fi.t*(3-2*Fi.t);Yi=_r(Fi.from,Fi.to,be),Fi.t>=1&&(Fi=null)}else n.has("tod")||(Yi+=J/420);let ze=ae.body.translation(),et=Pr(ze.x,ze.z),Tt={wet:Dt==="rain"?ti:0,snow:(Dt==="snow"?ti*.6:0)+(Ge(ze.x,ze.z)>5.5?.5:0)},Pt=Oi?{gas:0,brake:0,left:0,right:0,hand:1,boost:0,jump:0}:vt,di=As(ze.x,ze.z);if(di>.95){let be=(di-.95)*60*J,$e=Math.hypot(ze.x,ze.z)||1;ae.body.applyImpulse({x:-ze.x/$e*be,y:0,z:-ze.z/$e*be},!0)}let Kt=ue.step(J,Pt,Tt,rm);vt.jump=0;let si=ae.body.translation();if(si.y<-.45-4||Math.abs(si.x)>240/2+4||Math.abs(si.z)>160/2+4){let be=La(si.x,si.z);Ft($t[be.key].x,$t[be.key].z+10),ni=!0}ae.rescued&&(ae.rescued=!1,ni=!0);let qt=ae.pose(Kt),xt=qt.p;me.position.set(xt.x,xt.y,xt.z),nu.set(qt.q0.x,qt.q0.y,qt.q0.z,qt.q0.w),su.set(qt.q1.x,qt.q1.y,qt.q1.z,qt.q1.w),me.quaternion.copy(nu).slerp(su,qt.a);let Ei=ae.body.linvel(),_i=Math.hypot(Ei.x,Ei.z),Bi=ae.forward(),Ps=ae.speed();jt.set(Ei.x-sl.x,0,Ei.z-sl.z).divideScalar(Math.max(J,.001)),sl.set(Ei.x,Ei.y,Ei.z);let lm=jt.x*Bi[0]+jt.z*Bi[2],hm=jt.x*Bi[2]-jt.z*Bi[0];rl=da(rl,Yr(-lm*.006,-.06,.06),6,J),al=da(al,Yr(hm*.008,-.07,.07),6,J),we.rotation.set(al,0,rl),at.forEach((be,$e)=>{be.pivot.position.y=be.y-qt.travel[$e],be.pivot.rotation.y=qt.steer[$e],be.spin.rotation.z=-qt.spin[$e]});let cu=vt.brake&&Ps>.6||vt.gas&&Ps<-.6||vt.hand,ol=pa!==null?pa:Ti>.45||Dt!=="clear"&&ti>.5;Ve("head",ol?2.2:.3),it.forEach(be=>{be.intensity=ol?12:0}),Ve("tail",cu?5:ol?1.4:.15),Ve("reverse",vt.brake&&Ps<-.3?3.5:0);let uu=Math.sin(Ae*Math.PI*3.2)>0?4:0;Ve("indL",vt.left&&!vt.right?uu:0),Ve("indR",vt.right&&!vt.left?uu:0),tl+=J;let ll=ae.wheels(),hl=Ge(xt.x,xt.z)>5.5,Hn=ae.waterDepth,cl=Math.abs(Ei.x*Bi[2]-Ei.z*Bi[0]),kn=ae.contacts>0&&_i>3&&(vt.hand||cl>3.5||cu&&_i>6);if(ll.forEach((be,$e)=>{!be.contact||!be.point||be.point.y<-.45+.05||(jt.set(be.point.x,be.point.y,be.point.z),jt.distanceTo(S[$e])>.3&&(S[$e].copy(jt),$e>=2&&_i>.5&&Me(ht,be.point,Bi),kn&&($e>=2||cl>5)&&Me(R,be.point,Bi)))}),tl>.08&&(tl=0,_i>.8))for(let be of ll)be.contact&&be.point&&Ee.pressGrass(be.point.x,be.point.z,Ae);let Ls=Pr(xt.x,xt.z);if(_i>3&&ae.contacts>0||Hn>.05&&_i>1.2||kn){rt.set(Hn>.05?"#f4fbff":hl?"#ffffff":(Ls.meadow||0)+(Ls.autumn||0)+(Ls.plane||0)>.5?"#8a7a5a":(Ls.danxia||0)>.4?"#c88b66":"#e9dcc4");for(let be of[2,3]){let $e=ll[be].point;!$e||Math.random()>Math.min(.9,_i/16+(kn?.4:0))||V(jt.set($e.x,Math.max($e.y,-.45)+.1,$e.z),au.set(-Ei.x*.1+(Math.random()-.5),(Hn>.05?2.6:.6)+Math.random()*.9,-Ei.z*.1+(Math.random()-.5)),(Hn>.05?1.1:kn?1:.6)+Math.random()*.9,rt)}}for(let be=0;be<W;be++){let $e=Re[be];if($e.life>0&&($e.life-=J*($e.debris?1.6:1.1),$e.p.addScaledVector($e.v,J),$e.debris||$e.v.multiplyScalar(.95),$e.v.y-=J*$e.g,$e.debris)){let br=Ge($e.p.x,$e.p.z);$e.p.y<br&&($e.p.y=br,$e.v.multiplyScalar(.3))}let xi=Math.max(0,$e.life);Ze.setScalar(xi>0?$e.debris?$e.s*Math.min(1,xi*2):$e.s*(1.6-xi)*Math.min(1,xi*3):1e-4),ve.compose($e.p,$e.debris?Xe.setFromEuler(St.set(Ae*6+be,be,Ae*4)):Xe.identity(),Ze),_e.setMatrixAt(be,ve)}_e.instanceMatrix.needsUpdate=!0;let cm=Bt;if(Oi||(Bt=Ke.update(J,Ae,xt,Ti)),Bt!==cm)if(Bt){let be=Bt;l.innerHTML=`<p class="mono">${vr(be.region||"")}${be.region?" \xB7 ":""}${be.photos.length} frames</p><h3>${vr(be.en)}<span class="zh">${vr(be.zh)}</span></h3>
          <div class="drive__btns"><a class="pill pill--light" href="#" data-open><span class="dot"></span>View photos \xB7 Enter</a>${be.href?`<a class="pill pill--ghost" href="${vr(be.href)}"><span class="dot"></span>${vr(be.hrefLabel||"Chapter")} \u2192</a>`:""}</div>`,l.classList.add("is-on")}else l.classList.remove("is-on");for(let be of he)Math.hypot(xt.x-be.x,xt.z-be.z)<14&&yt.add(be.key);ot=da(ot,K==="map"?1:0,3,J),lt=da(lt,Bt&&_i<3.5?1:0,1.6,J);let du=Math.atan2(Bi[0],Bi[2]);Bi[0]*Bi[0]+Bi[2]*Bi[2]>.2&&(q=ni?du:BM(q,du,Ps<-1?1.2:4.6,J)),!Be&&(vt.gas||vt.brake)&&Math.abs(ye)>.001&&(ye=da(ye,0,1.1,J));let pu=q+ye,ul=Ue+(z.aspect<1?2:0),fu=Math.cos(Ce),um=Math.sin(Ce),mu=Ba(2,11,_i)*2.2;if(Mt.set(xt.x+Math.sin(q)*mu,xt.y+.85,xt.z+Math.cos(q)*mu),Rt.set(xt.x-Math.sin(pu)*ul*fu,xt.y+.9+ul*um,xt.z-Math.cos(pu)*ul*fu),ot>.001){let be=1+Math.min(.35,_i*.016);jt.set(xt.x+9*be,xt.y+14*be,xt.z+15*be),Rt.lerp(jt,ot),Mt.lerp(au.set(xt.x+Ei.x*.35,xt.y*.5,xt.z+Ei.z*.35),ot)}Bt&&lt>.001&&(jt.set(Bt.x+3.5,Bt.gy+6.5,Bt.z+15.5),Rt.lerp(jt,lt),Mt.lerp(Bt.focus,lt));let gu=Ge(Rt.x,Rt.z);Rt.y<gu+1.3&&(Rt.y=gu+1.3),jt.subVectors(Rt,Mt);let dl=jt.length();if(dl>.5&&ot<.5){jt.divideScalar(dl);let be=ue.world.castShape(Mt,sm,jt,nm,0,dl,!1,Q.QueryFilterFlags.EXCLUDE_DYNAMIC|Q.QueryFilterFlags.EXCLUDE_SENSORS,void 0,void 0,ae.body,om);be&&Rt.copy(Mt).addScaledVector(jt,Math.max(1.2,be.time_of_impact-.15))}ni&&(je.copy(Rt),At.copy(Mt),ni=!1),je.lerp(Rt,1-Math.exp(-(Be?14:7)*J)),At.lerp(Mt,1-Math.exp(-9*J)),De=da(De,0,7,J),z.position.copy(je),!a&&De>.002&&(z.position.x+=Math.sin(Ae*63)*De*.5,z.position.y+=Math.cos(Ae*82)*De*.35),z.lookAt(At),nl=da(nl,vt.boost&&vt.gas&&_i>8?7:0,3,J);let vu=(z.aspect<1?62:50)*(1-ot)+(z.aspect<1?50:36)*ot+nl*(1-ot);Math.abs(z.fov-vu)>.01&&(z.fov=vu,z.updateProjectionMatrix()),z.updateMatrixWorld(),Pe.position.copy(z.position);{let be=jt.set(xt.x,xt.y+.3,xt.z).project(z),$e=P.getPixelRatio();vi.carScreen.value.set((be.x+1)/2*e.clientWidth*$e,(be.y+1)/2*e.clientHeight*$e,be.z*.5+.5),vi.seeR.value=e.clientHeight*$e*(K==="map"?.12:.16)}{let be=1,$e=1,xi=0,br=0;for(let fm of wt){jt.copy(fm).applyMatrix4(me.matrixWorld).project(z);let xu=jt.x*.5+.5,yu=jt.y*.5+.5;be=Math.min(be,xu),$e=Math.min($e,yu),xi=Math.max(xi,xu),br=Math.max(br,yu)}$.uniforms.rect.value.set(be-.02,$e-.02,xi+.02,br+.02);let za=(Ba(9,17,_i)*.25+Ba(11,22,_i)*(vt.boost?.8:.5))*(1-ot)*(1-lt)*(Be?0:1)*(1-Yr(De*2,0,.8));Is=da(Is,za,za>Is?5:10,J),$.uniforms.power.value=Is}let Mr=La(xt.x,xt.z);if(Mr.d<24&&Mr.key!==E){E=Mr.key,k=Ae;let be=he.find(xi=>xi.key===Mr.key),$e=$t[Mr.key];be&&(h.innerHTML=`<span class="mono">${$e.lat!=="\u2014"?`${$e.lat} \xB7 ${$e.lon}`:"On the road"}</span><strong>${vr(be.en)}</strong><span class="zh">${vr(be.zh)}</span>`,h.classList.add("is-on"))}Mr.d>34&&(E=null),h.classList.contains("is-on")&&Ae-k>3.4&&h.classList.remove("is-on");let _u=Kr==="auto"?hl?"snow":Mr.d<26&&zM[Mr.key]||"clear":Kr;_u===Dt?ti=Math.min(1,ti+J*.5):(ti=Math.max(0,ti-J*.7),ti===0&&(Dt=_u)),O.kind.value=Dt==="rain"?0:Dt==="snow"?1:2,O.amount.value=Dt==="clear"?0:ti*(Dt==="sand"?1:.85),O.t.value=Ae,O.center.value.copy(z.position);let dm=.5+.5*Math.sin(Ae*.7)*Math.sin(Ae*.31),pl=Dt==="sand"?4+dm*6:Dt==="rain"?2:Dt==="snow"?1.2:.6;O.wind.value.set(pl*1.4*ti+.3,pl*.5*ti),vi.strength.value=.6+(Dt==="clear"?0:ti*pl*.3);let pm=im(xt);if(Ee.update(J,Ae,{carPos:new C(xt.x,xt.y-.5,xt.z),vel:new C(Ei.x,Ei.y,Ei.z),speed:_i,focus:xt,onShake:be=>{let $e=$r.set(be.type==="ginkgo"?"#efbd2c":be.type==="blossom"?"#f2b6c6":be.type==="palm"?"#6f9a3c":be.type.startsWith("fir")?"#3b6b47":"#86a24a");for(let xi=0;xi<7;xi++)V(new C(be.x+(Math.random()-.5)*2,be.y+2.2+Math.random()*2*be.s,be.z+(Math.random()-.5)*2),new C((Math.random()-.5)*1.5,.3,(Math.random()-.5)*1.5),.45,$e,2.5);oe.bump(Math.max(2,_i*.6),"tree",0)}}),fe.opacity>.01&&(se.forEach(([be,$e,xi,br],za)=>{Z[za*3]=be+Math.sin(Ae*.6+br)*1.2,Z[za*3+1]=$e+Math.sin(Ae*1.1+br*2)*.4,Z[za*3+2]=xi+Math.cos(Ae*.5+br)*1.2}),de.attributes.position.needsUpdate=!0),oe.drive({speed:_i,throttle:vt.gas-vt.brake,boost:vt.boost,dt:J,grounded:ae.contacts>0,wading:Yr(Hn,0,1),surface:hl?"snow":(et.desert||0)+(et.danxia||0)>.5?"sand":Ee.grassU&&(et.meadow||0)+(et.autumn||0)+(et.plane||0)+(et.field||0)>.55&&ne.road(xt.x,xt.z)>2.4?"grass":"gravel",skid:kn?Yr(cl/7+(vt.hand?.5:0),0,1):0,wind:Dt==="sand"?ti:ti*.3,rain:Dt==="rain"?ti:0}),il-=J,il<=0){il=.08,x.value=String(Math.round(_i*3.6)).padStart(2,"0");let be=he.find(xi=>xi.key===Mr.key);g.textContent=be?Mr.d<26?`${be.zh} \xB7 ${be.en}`:`\u53BB\u5F80 ${be.zh} \xB7 toward ${be.en}`:"\u2014";let $e=Math.floor(pm*24*60);m.textContent=`${ie.zh} ${String(Math.floor($e/60)).padStart(2,"0")}:${String($e%60).padStart(2,"0")}`,f.textContent=`${Dt==="clear"||ti<.2?Xf.clear:Xf[Dt]}${Kr==="auto"?"":" \xB7T"}`,e.querySelector('[data-act="view"]').firstChild.textContent=K==="chase"?"\u4FEF\u89C6 ":"\u8DDF\u8F66 "}Di(xt,q+Math.PI),qe.render()}return Ui=requestAnimationFrame(lu),U=()=>{var Y;A&&(A=!1,cancelAnimationFrame(Ui),removeEventListener("keydown",zn),removeEventListener("keyup",tu),removeEventListener("resize",el),removeEventListener("blur",iu),oe.pause(!0),(Y=qe.dispose)==null||Y.call(qe),P.dispose(),e.innerHTML="",i==null||i())},window.__drive={stops:he,get car(){return ae.body.translation()},carApi:ae,jumpTo:rr,nextPhase:Qo,open:Y=>ki(he[Y]),keys:vt,setTod:Y=>{Yi=Y},setWx:Y=>{Kr=Y,Dt=Y==="auto"?Dt:Y,ti=1},setView:Y=>{K=Y},setOrbit:(Y,J,Ae)=>{ye=Y,J!=null&&(Ce=J),Ae!=null&&(Ue=Ae)}},{close:()=>U()}}window.X1NG_DRIVE={mount(e,t){let i=kM(e,t);return i.catch(r=>{console.error(r),e.innerHTML='<p class="drive__load mono">Drive mode could not load \xB7 \u52A0\u8F7D\u5931\u8D25</p>',setTimeout(()=>{var a;return(a=t==null?void 0:t.onClose)==null?void 0:a.call(t)},2e3)}),i}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
