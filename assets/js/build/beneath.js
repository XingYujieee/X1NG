(()=>{var uc=0,fl=1,cc=2;var Rn=1,dc=2,Sa=3,lr=0,Ht=1,oi=2,di=0,sr=1,pi=2,ml=3,gl=4,pc=5;var Fr=100,fc=101,mc=102,gc=103,vc=104,_c=200,xc=201,yc=202,Mc=203,Ph=204,Ih=205,Sc=206,bc=207,Tc=208,Ec=209,wc=210,Ac=211,Cc=212,Rc=213,Pc=214,$s=0,Qs=1,eo=2,Ca=3,to=4,io=5,ro=6,ao=7,Lh=0,Ic=1,Lc=2,ri=0,Xn=1,jn=2,qn=3,Yn=4,Zn=5,Kn=6,Jn=7;var Dh=300,hr=301,Kr=302,fs=303,ms=304,$n=306,no=1e3,Li=1001,so=1002,Ct=1003,Dc=1004;var Za=1005;var wt=1006,gs=1007;var Di=1008;var Yt=1009,Uh=1010,Nh=1011,Ra=1012,Xo=1013,Mi=1014,hi=1015,Nt=1016,jo=1017,qo=1018,Pa=1020,Oh=35902,Fh=35899,Bh=1021,zh=1022,ui=1023,Ni=1026,ar=1027,Yo=1028,Zo=1029,ur=1030,Ko=1031;var Jo=1033,Pn=33776,In=33777,Ln=33778,Dn=33779,oo=35840,lo=35841,ho=35842,uo=35843,co=36196,po=37492,fo=37496,mo=37488,go=37489,Fn=37490,vo=37491,_o=37808,xo=37809,yo=37810,Mo=37811,So=37812,bo=37813,To=37814,Eo=37815,wo=37816,Ao=37817,Co=37818,Ro=37819,Po=37820,Io=37821,Lo=36492,Do=36494,Uo=36495,No=36283,Oo=36284,Bn=36285,Fo=36286;var zn=2300,Bo=2301,vs=2302,vl=2303,_l=2400,xl=2401,yl=2402;var Uc=3200;var zo=0,Nc=1,ji="",Gt="srgb",Gn="srgb-linear",Vn="linear",st="srgb";var _s=7680;var Oc=519,Fc=512,Bc=513,zc=514,$o=515,Gc=516,Vc=517,Qo=518,Hc=519,Gh=35044;var Ml="300 es",ci=2e3,Ia=2001;function kc(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Wc(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Hn(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Xc(){let e=Hn("canvas");return e.style.display="block",e}var Sl={},Jr=null;function kn(...e){let t="THREE."+e.shift();Jr?Jr("log",t,...e):console.log(t,...e)}function Vh(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ge(...e){e=Vh(e);let t="THREE."+e.shift();if(Jr)Jr("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Ve(...e){e=Vh(e);let t="THREE."+e.shift();if(Jr)Jr("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Hr(...e){let t=e.join(" ");t in Sl||(Sl[t]=!0,Ge(...e))}function jc(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var qc={[$s]:Qs,[eo]:ro,[to]:ao,[Ca]:io,[Qs]:$s,[ro]:eo,[ao]:to,[io]:Ca},dr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bl=1234567,kr=Math.PI/180,La=180/Math.PI;function yi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Lt[e&255]+Lt[e>>8&255]+Lt[e>>16&255]+Lt[e>>24&255]+"-"+Lt[t&255]+Lt[t>>8&255]+"-"+Lt[t>>16&15|64]+Lt[t>>24&255]+"-"+Lt[i&63|128]+Lt[i>>8&255]+"-"+Lt[i>>16&255]+Lt[i>>24&255]+Lt[r&255]+Lt[r>>8&255]+Lt[r>>16&255]+Lt[r>>24&255]).toLowerCase()}function $e(e,t,i){return Math.max(t,Math.min(i,e))}function el(e,t){return(e%t+t)%t}function Yc(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function Zc(e,t,i){return e!==t?(i-e)/(t-e):0}function Ea(e,t,i){return(1-i)*e+i*t}function Kc(e,t,i,r){return Ea(e,t,1-Math.exp(-i*r))}function Jc(e,t=1){return t-Math.abs(el(e,t*2)-t)}function $c(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function Qc(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function ed(e,t){return e+Math.floor(Math.random()*(t-e+1))}function td(e,t){return e+Math.random()*(t-e)}function id(e){return e*(.5-Math.random())}function rd(e){e!==void 0&&(bl=e);let t=bl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ad(e){return e*kr}function nd(e){return e*La}function sd(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function od(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function ld(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function hd(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),h=n((t+r)/2),u=s((t+r)/2),p=n((t-r)/2),c=s((t-r)/2),f=n((r-t)/2),x=s((r-t)/2);switch(a){case"XYX":e.set(o*u,l*p,l*c,o*h);break;case"YZY":e.set(l*c,o*u,l*p,o*h);break;case"ZXZ":e.set(l*p,l*c,o*u,o*h);break;case"XZX":e.set(o*u,l*x,l*f,o*h);break;case"YXY":e.set(l*f,o*u,l*x,o*h);break;case"ZYZ":e.set(l*x,l*f,o*u,o*h);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function li(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ot(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Hh={DEG2RAD:kr,RAD2DEG:La,generateUUID:yi,clamp:$e,euclideanModulo:el,mapLinear:Yc,inverseLerp:Zc,lerp:Ea,damp:Kc,pingpong:Jc,smoothstep:$c,smootherstep:Qc,randInt:ed,randFloat:td,randFloatSpread:id,seededRandom:rd,degToRad:ad,radToDeg:nd,isPowerOfTwo:sd,ceilPowerOfTwo:od,floorPowerOfTwo:ld,setQuaternionFromProperEuler:hd,normalize:ot,denormalize:li},Xr,te=(Xr=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=$e(this.x,t.x,i.x),this.y=$e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=$e(this.x,t,i),this.y=$e(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar($e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos($e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xr.prototype.isVector2=!0,Xr),Zt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],p=a[n+0],c=a[n+1],f=a[n+2],x=a[n+3];if(u!==x||o!==p||l!==c||h!==f){let y=o*p+l*c+h*f+u*x;y<0&&(p=-p,c=-c,f=-f,x=-x,y=-y);let m=1-s;if(y<.9995){let d=Math.acos(y),T=Math.sin(d);m=Math.sin(m*d)/T,s=Math.sin(s*d)/T,o=o*m+p*s,l=l*m+c*s,h=h*m+f*s,u=u*m+x*s}else{o=o*m+p*s,l=l*m+c*s,h=h*m+f*s,u=u*m+x*s;let d=1/Math.sqrt(o*o+l*l+h*h+u*u);o*=d,l*=d,h*=d,u*=d}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],u=a[n],p=a[n+1],c=a[n+2],f=a[n+3];return e[t]=s*f+h*u+o*c-l*p,e[t+1]=o*f+h*p+l*u-s*c,e[t+2]=l*f+h*c+s*p-o*u,e[t+3]=h*f-s*u-o*p-l*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),u=s(a/2),p=o(i/2),c=o(r/2),f=o(a/2);switch(n){case"XYZ":this._x=p*h*u+l*c*f,this._y=l*c*u-p*h*f,this._z=l*h*f+p*c*u,this._w=l*h*u-p*c*f;break;case"YXZ":this._x=p*h*u+l*c*f,this._y=l*c*u-p*h*f,this._z=l*h*f-p*c*u,this._w=l*h*u+p*c*f;break;case"ZXY":this._x=p*h*u-l*c*f,this._y=l*c*u+p*h*f,this._z=l*h*f+p*c*u,this._w=l*h*u-p*c*f;break;case"ZYX":this._x=p*h*u-l*c*f,this._y=l*c*u+p*h*f,this._z=l*h*f-p*c*u,this._w=l*h*u+p*c*f;break;case"YZX":this._x=p*h*u+l*c*f,this._y=l*c*u+p*h*f,this._z=l*h*f-p*c*u,this._w=l*h*u-p*c*f;break;case"XZY":this._x=p*h*u-l*c*f,this._y=l*c*u-p*h*f,this._z=l*h*f+p*c*u,this._w=l*h*u+p*c*f;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],u=t[10],p=i+s+u;if(p>0){let c=.5/Math.sqrt(p+1);this._w=.25/c,this._x=(h-o)*c,this._y=(a-l)*c,this._z=(n-r)*c}else if(i>s&&i>u){let c=2*Math.sqrt(1+i-s-u);this._w=(h-o)/c,this._x=.25*c,this._y=(r+n)/c,this._z=(a+l)/c}else if(s>u){let c=2*Math.sqrt(1+s-i-u);this._w=(a-l)/c,this._x=(r+n)/c,this._y=.25*c,this._z=(o+h)/c}else{let c=2*Math.sqrt(1+u-i-s);this._w=(n-r)/c,this._x=(a+l)/c,this._y=(o+h)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),h=Math.sin(l);o=Math.sin(o*l)/h,t=Math.sin(t*l)/h,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jr,R=(jr=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Tl.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Tl.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*r),u=2*(o*i-n*a),p=2*(n*r-s*i);return this.x=i+l*h+s*p-o*u,this.y=r+l*u+o*h-n*p,this.z=a+l*p+n*u-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=$e(this.x,t.x,i.x),this.y=$e(this.y,t.y,i.y),this.z=$e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=$e(this.x,t,i),this.y=$e(this.y,t,i),this.z=$e(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar($e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return xs.copy(this).projectOnVector(t),this.sub(xs)}reflect(t){return this.sub(xs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos($e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jr.prototype.isVector3=!0,jr),xs=new R,Tl=new Zt,qr,Ye=(qr=class{constructor(t,i,r,a,n,s,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h)}set(t,i,r,a,n,s,o,l,h){let u=this.elements;return u[0]=t,u[1]=a,u[2]=o,u[3]=i,u[4]=n,u[5]=l,u[6]=r,u[7]=s,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],u=r[4],p=r[7],c=r[2],f=r[5],x=r[8],y=a[0],m=a[3],d=a[6],T=a[1],w=a[4],_=a[7],E=a[2],A=a[5],C=a[8];return n[0]=s*y+o*T+l*E,n[3]=s*m+o*w+l*A,n[6]=s*d+o*_+l*C,n[1]=h*y+u*T+p*E,n[4]=h*m+u*w+p*A,n[7]=h*d+u*_+p*C,n[2]=c*y+f*T+x*E,n[5]=c*m+f*w+x*A,n[8]=c*d+f*_+x*C,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8];return i*s*u-i*o*h-r*n*u+r*o*l+a*n*h-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8],p=u*s-o*h,c=o*l-u*n,f=h*n-s*l,x=i*p+r*c+a*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=p*y,t[1]=(a*h-u*r)*y,t[2]=(o*r-a*s)*y,t[3]=c*y,t[4]=(u*i-a*l)*y,t[5]=(a*n-o*i)*y,t[6]=f*y,t[7]=(r*l-h*i)*y,t[8]=(s*i-r*n)*y,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(t,i){return Hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ys.makeScale(t,i)),this}rotate(t){return Hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ys.makeRotation(-t)),this}translate(t,i){return Hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ys.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},qr.prototype.isMatrix3=!0,qr),ys=new Ye,El=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wl=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ud(){let e={enabled:!0,workingColorSpace:Gn,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===st&&(a.r=Ui(a.r),a.g=Ui(a.g),a.b=Ui(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===st&&(a.r=Wr(a.r),a.g=Wr(a.g),a.b=Wr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ji?Vn:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return Hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return Hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Gn]:{primaries:t,whitePoint:r,transfer:Vn,toXYZ:El,fromXYZ:wl,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:t,whitePoint:r,transfer:st,toXYZ:El,fromXYZ:wl,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),e}var et=ud();function Ui(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Wr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var _r,cd=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_r===void 0&&(_r=Hn("canvas")),_r.width=e.width,_r.height=e.height;let r=_r.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=_r}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Ui(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ui(t[i]/255)*255):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},dd=0,tl=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(Ms(r[n].image)):a.push(Ms(r[n]))}else a=Ms(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Ms(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?cd.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var pd=0,Ss=new R,kt=class Un extends dr{constructor(t=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,r=Li,a=Li,n=wt,s=Di,o=ui,l=Yt,h=Un.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=yi(),this.name="",this.source=new tl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ss).x}get height(){return this.source.getSize(Ss).y}get depth(){return this.source.getSize(Ss).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Ge(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Ge(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case no:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case so:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case no:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case so:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Dh;kt.DEFAULT_ANISOTROPY=1;var Yr,ft=(Yr=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],u=s[1],p=s[5],c=s[9],f=s[2],x=s[6],y=s[10];if(Math.abs(l-u)<.01&&Math.abs(h-f)<.01&&Math.abs(c-x)<.01){if(Math.abs(l+u)<.1&&Math.abs(h+f)<.1&&Math.abs(c+x)<.1&&Math.abs(o+p+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let d=(o+1)/2,T=(p+1)/2,w=(y+1)/2,_=(l+u)/4,E=(h+f)/4,A=(c+x)/4;return d>T&&d>w?d<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(d),a=_/r,n=E/r):T>w?T<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(T),r=_/a,n=A/a):w<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(w),r=E/n,a=A/n),this.set(r,a,n,i),this}let m=Math.sqrt((x-c)*(x-c)+(h-f)*(h-f)+(u-l)*(u-l));return Math.abs(m)<.001&&(m=1),this.x=(x-c)/m,this.y=(h-f)/m,this.z=(u-l)/m,this.w=Math.acos((o+p+y-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=$e(this.x,t.x,i.x),this.y=$e(this.y,t.y,i.y),this.z=$e(this.z,t.z,i.z),this.w=$e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=$e(this.x,t,i),this.y=$e(this.y,t,i),this.z=$e(this.z,t,i),this.w=$e(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar($e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yr.prototype.isVector4=!0,Yr),fd=class extends dr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new kt(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new tl(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rt=class extends fd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},kh=class extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var md=class extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var or,Ke=(or=class{constructor(t,i,r,a,n,s,o,l,h,u,p,c,f,x,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h,u,p,c,f,x,y,m)}set(t,i,r,a,n,s,o,l,h,u,p,c,f,x,y,m){let d=this.elements;return d[0]=t,d[4]=i,d[8]=r,d[12]=a,d[1]=n,d[5]=s,d[9]=o,d[13]=l,d[2]=h,d[6]=u,d[10]=p,d[14]=c,d[3]=f,d[7]=x,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new or().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/xr.setFromMatrixColumn(t,0).length(),n=1/xr.setFromMatrixColumn(t,1).length(),s=1/xr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),u=Math.cos(n),p=Math.sin(n);if(t.order==="XYZ"){let c=s*u,f=s*p,x=o*u,y=o*p;i[0]=l*u,i[4]=-l*p,i[8]=h,i[1]=f+x*h,i[5]=c-y*h,i[9]=-o*l,i[2]=y-c*h,i[6]=x+f*h,i[10]=s*l}else if(t.order==="YXZ"){let c=l*u,f=l*p,x=h*u,y=h*p;i[0]=c+y*o,i[4]=x*o-f,i[8]=s*h,i[1]=s*p,i[5]=s*u,i[9]=-o,i[2]=f*o-x,i[6]=y+c*o,i[10]=s*l}else if(t.order==="ZXY"){let c=l*u,f=l*p,x=h*u,y=h*p;i[0]=c-y*o,i[4]=-s*p,i[8]=x+f*o,i[1]=f+x*o,i[5]=s*u,i[9]=y-c*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let c=s*u,f=s*p,x=o*u,y=o*p;i[0]=l*u,i[4]=x*h-f,i[8]=c*h+y,i[1]=l*p,i[5]=y*h+c,i[9]=f*h-x,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let c=s*l,f=s*h,x=o*l,y=o*h;i[0]=l*u,i[4]=y-c*p,i[8]=x*p+f,i[1]=p,i[5]=s*u,i[9]=-o*u,i[2]=-h*u,i[6]=f*p+x,i[10]=c-y*p}else if(t.order==="XZY"){let c=s*l,f=s*h,x=o*l,y=o*h;i[0]=l*u,i[4]=-p,i[8]=h*u,i[1]=c*p+y,i[5]=s*u,i[9]=f*p-x,i[2]=x*p-f,i[6]=o*u,i[10]=y*p+c}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gd,t,vd)}lookAt(t,i,r){let a=this.elements;return Xt.subVectors(t,i),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Gi.crossVectors(r,Xt),Gi.lengthSq()===0&&(Math.abs(r.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Gi.crossVectors(r,Xt)),Gi.normalize(),Ka.crossVectors(Xt,Gi),a[0]=Gi.x,a[4]=Ka.x,a[8]=Xt.x,a[1]=Gi.y,a[5]=Ka.y,a[9]=Xt.y,a[2]=Gi.z,a[6]=Ka.z,a[10]=Xt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],u=r[1],p=r[5],c=r[9],f=r[13],x=r[2],y=r[6],m=r[10],d=r[14],T=r[3],w=r[7],_=r[11],E=r[15],A=a[0],C=a[4],g=a[8],b=a[12],D=a[1],P=a[5],N=a[9],q=a[13],U=a[2],G=a[6],K=a[10],H=a[14],de=a[3],Y=a[7],Z=a[11],ie=a[15];return n[0]=s*A+o*D+l*U+h*de,n[4]=s*C+o*P+l*G+h*Y,n[8]=s*g+o*N+l*K+h*Z,n[12]=s*b+o*q+l*H+h*ie,n[1]=u*A+p*D+c*U+f*de,n[5]=u*C+p*P+c*G+f*Y,n[9]=u*g+p*N+c*K+f*Z,n[13]=u*b+p*q+c*H+f*ie,n[2]=x*A+y*D+m*U+d*de,n[6]=x*C+y*P+m*G+d*Y,n[10]=x*g+y*N+m*K+d*Z,n[14]=x*b+y*q+m*H+d*ie,n[3]=T*A+w*D+_*U+E*de,n[7]=T*C+w*P+_*G+E*Y,n[11]=T*g+w*N+_*K+E*Z,n[15]=T*b+w*q+_*H+E*ie,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],u=t[2],p=t[6],c=t[10],f=t[14],x=t[3],y=t[7],m=t[11],d=t[15],T=l*f-h*c,w=o*f-h*p,_=o*c-l*p,E=s*f-h*u,A=s*c-l*u,C=s*p-o*u;return i*(y*T-m*w+d*_)-r*(x*T-m*E+d*A)+a*(x*w-y*E+d*C)-n*(x*_-y*A+m*C)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],u=t[10];return i*(s*u-o*h)-r*(n*u-o*l)+a*(n*h-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8],p=t[9],c=t[10],f=t[11],x=t[12],y=t[13],m=t[14],d=t[15],T=i*o-r*s,w=i*l-a*s,_=i*h-n*s,E=r*l-a*o,A=r*h-n*o,C=a*h-n*l,g=u*y-p*x,b=u*m-c*x,D=u*d-f*x,P=p*m-c*y,N=p*d-f*y,q=c*d-f*m,U=T*q-w*N+_*P+E*D-A*b+C*g;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/U;return t[0]=(o*q-l*N+h*P)*G,t[1]=(a*N-r*q-n*P)*G,t[2]=(y*C-m*A+d*E)*G,t[3]=(c*A-p*C-f*E)*G,t[4]=(l*D-s*q-h*b)*G,t[5]=(i*q-a*D+n*b)*G,t[6]=(m*_-x*C-d*w)*G,t[7]=(u*C-c*_+f*w)*G,t[8]=(s*N-o*D+h*g)*G,t[9]=(r*D-i*N-n*g)*G,t[10]=(x*A-y*_+d*T)*G,t[11]=(p*_-u*A-f*T)*G,t[12]=(o*b-s*P-l*g)*G,t[13]=(i*P-r*b+a*g)*G,t[14]=(y*w-x*E-m*T)*G,t[15]=(u*E-p*w+c*T)*G,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,h=n*s,u=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,u*o+r,u*l-a*s,0,h*l-a*o,u*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,u=s+s,p=o+o,c=n*h,f=n*u,x=n*p,y=s*u,m=s*p,d=o*p,T=l*h,w=l*u,_=l*p,E=r.x,A=r.y,C=r.z;return a[0]=(1-(y+d))*E,a[1]=(f+_)*E,a[2]=(x-w)*E,a[3]=0,a[4]=(f-_)*A,a[5]=(1-(c+d))*A,a[6]=(m+T)*A,a[7]=0,a[8]=(x+w)*C,a[9]=(m-T)*C,a[10]=(1-(c+y))*C,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=xr.set(a[0],a[1],a[2]).length(),o=xr.set(a[4],a[5],a[6]).length(),l=xr.set(a[8],a[9],a[10]).length();n<0&&(s=-s),ai.copy(this);let h=1/s,u=1/o,p=1/l;return ai.elements[0]*=h,ai.elements[1]*=h,ai.elements[2]*=h,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=p,ai.elements[9]*=p,ai.elements[10]*=p,i.setFromRotationMatrix(ai),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=ci,l=!1){let h=this.elements,u=2*n/(i-t),p=2*n/(r-a),c=(i+t)/(i-t),f=(r+a)/(r-a),x,y;if(l)x=n/(s-n),y=s*n/(s-n);else if(o===ci)x=-(s+n)/(s-n),y=-2*s*n/(s-n);else if(o===Ia)x=-s/(s-n),y=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=c,h[12]=0,h[1]=0,h[5]=p,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=ci,l=!1){let h=this.elements,u=2/(i-t),p=2/(r-a),c=-(i+t)/(i-t),f=-(r+a)/(r-a),x,y;if(l)x=1/(s-n),y=s/(s-n);else if(o===ci)x=-2/(s-n),y=-(s+n)/(s-n);else if(o===Ia)x=-1/(s-n),y=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=c,h[1]=0,h[5]=p,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=x,h[14]=y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},or.prototype.isMatrix4=!0,or),xr=new R,ai=new Ke,gd=new R(0,0,0),vd=new R(1,1,1),Gi=new R,Ka=new R,Xt=new R,Al=new Ke,Cl=new Zt,qi=class Wh{constructor(t=0,i=0,r=0,a=Wh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],u=a[9],p=a[2],c=a[6],f=a[10];switch(i){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,n),this._z=0);break;case"ZXY":this._x=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-$e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(c,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-p,n)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Al,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qi.DEFAULT_ORDER="XYZ";var Xh=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_d=0,Rl=new R,yr=new Zt,Ai=new Ke,Ja=new R,ca=new R,xd=new R,yd=new Zt,Pl=new R(1,0,0),Il=new R(0,1,0),Ll=new R(0,0,1),Dl={type:"added"},Md={type:"removed"},Mr={type:"childadded",child:null},bs={type:"childremoved",child:null},Vt=class Nn extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();let t=new R,i=new qi,r=new Zt,a=new R(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ye}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Il,t)}rotateZ(t){return this.rotateOnAxis(Ll,t)}translateOnAxis(t,i){return Rl.copy(t).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Il,t)}translateZ(t){return this.translateOnAxis(Ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ja.copy(t):Ja.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(ca,Ja,this.up):Ai.lookAt(Ja,ca,this.up),this.quaternion.setFromRotationMatrix(Ai),a&&(Ai.extractRotation(a.matrixWorld),yr.setFromRotationMatrix(Ai),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ve("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dl),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Md),bs.child=t,this.dispatchEvent(bs),bs.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dl),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,t,xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let p=l[h];n(t.shapes,p)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),u=s(t.images),p=s(t.shapes),c=s(t.skeletons),f=s(t.animations),x=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),p.length>0&&(r.shapes=p),c.length>0&&(r.skeletons=c),f.length>0&&(r.animations=f),x.length>0&&(r.nodes=x)}return r.object=a,r;function s(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Vt.DEFAULT_UP=new R(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gr=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sd={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let x of e.hand.values()){let y=t.getJointPose(x,i),m=this._getHandJoint(l,x);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),c=.02,f=.005;l.inputState.pinching&&p>c+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=c-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Sd)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Gr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},$a={h:0,s:0,l:0};function Es(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=el(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=Es(n,a,e+1/3),this.g=Es(n,a,e),this.b=Es(n,a,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=Gt){function i(a){a!==void 0&&parseFloat(a)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let i=jh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return et.workingToColorSpace(Dt.copy(this),e),Math.round($e(Dt.r*255,0,255))*65536+Math.round($e(Dt.g*255,0,255))*256+Math.round($e(Dt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Dt.copy(this),t);let i=Dt.r,r=Dt.g,a=Dt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let u=n-s;switch(l=h<=.5?u/(n+s):u/(2-n-s),n){case i:o=(r-a)/u+(r<a?6:0);break;case r:o=(a-i)/u+2;break;case a:o=(i-r)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Gt){et.workingToColorSpace(Dt.copy(this),e);let t=Dt.r,i=Dt.g,r=Dt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL($a);let i=Ea(Vi.h,$a.h,t),r=Ea(Vi.s,$a.s,t),a=Ea(Vi.l,$a.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dt=new Xe;Xe.NAMES=jh;var qh=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ni=new R,Ci=new R,ws=new R,Ri=new R,Sr=new R,br=new R,Ul=new R,As=new R,Cs=new R,Rs=new R,Ps=new ft,Is=new ft,Ls=new ft,rr=class Br{constructor(t=new R,i=new R,r=new R){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),ni.subVectors(t,i),a.cross(ni);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){ni.subVectors(a,i),Ci.subVectors(r,i),ws.subVectors(t,i);let s=ni.dot(ni),o=ni.dot(Ci),l=ni.dot(ws),h=Ci.dot(Ci),u=Ci.dot(ws),p=s*h-o*o;if(p===0)return n.set(0,0,0),null;let c=1/p,f=(h*l-o*u)*c,x=(s*u-o*l)*c;return n.set(1-f-x,x,f)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Ri.x),l.addScaledVector(s,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return Ps.setScalar(0),Is.setScalar(0),Ls.setScalar(0),Ps.fromBufferAttribute(t,i),Is.fromBufferAttribute(t,r),Ls.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Ps,n.x),s.addScaledVector(Is,n.y),s.addScaledVector(Ls,n.z),s}static isFrontFacing(t,i,r,a){return ni.subVectors(r,i),Ci.subVectors(t,i),ni.cross(Ci).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ni.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Br.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Br.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Br.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Br.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Br.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;Sr.subVectors(a,r),br.subVectors(n,r),As.subVectors(t,r);let l=Sr.dot(As),h=br.dot(As);if(l<=0&&h<=0)return i.copy(r);Cs.subVectors(t,a);let u=Sr.dot(Cs),p=br.dot(Cs);if(u>=0&&p<=u)return i.copy(a);let c=l*p-u*h;if(c<=0&&l>=0&&u<=0)return s=l/(l-u),i.copy(r).addScaledVector(Sr,s);Rs.subVectors(t,n);let f=Sr.dot(Rs),x=br.dot(Rs);if(x>=0&&f<=x)return i.copy(n);let y=f*h-l*x;if(y<=0&&h>=0&&x<=0)return o=h/(h-x),i.copy(r).addScaledVector(br,o);let m=u*x-f*p;if(m<=0&&p-u>=0&&f-x>=0)return Ul.subVectors(n,a),o=(p-u)/(p-u+(f-x)),i.copy(a).addScaledVector(Ul,o);let d=1/(m+y+c);return s=y*d,o=c*d,i.copy(r).addScaledVector(Sr,s).addScaledVector(br,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Oi=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,si):si.fromBufferAttribute(a,n),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qa.copy(i.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),en.subVectors(this.max,da),Tr.subVectors(e.a,da),Er.subVectors(e.b,da),wr.subVectors(e.c,da),Hi.subVectors(Er,Tr),ki.subVectors(wr,Er),$i.subVectors(Tr,wr);let t=[0,-Hi.z,Hi.y,0,-ki.z,ki.y,0,-$i.z,$i.y,Hi.z,0,-Hi.x,ki.z,0,-ki.x,$i.z,0,-$i.x,-Hi.y,Hi.x,0,-ki.y,ki.x,0,-$i.y,$i.x,0];return!Ds(t,Tr,Er,wr,en)||(t=[1,0,0,0,1,0,0,0,1],!Ds(t,Tr,Er,wr,en))?!1:(tn.crossVectors(Hi,ki),t=[tn.x,tn.y,tn.z],Ds(t,Tr,Er,wr,en))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pi=[new R,new R,new R,new R,new R,new R,new R,new R],si=new R,Qa=new Oi,Tr=new R,Er=new R,wr=new R,Hi=new R,ki=new R,$i=new R,da=new R,en=new R,tn=new R,Qi=new R;function Ds(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){Qi.fromArray(e,n);let o=a.x*Math.abs(Qi.x)+a.y*Math.abs(Qi.y)+a.z*Math.abs(Qi.z),l=t.dot(Qi),h=i.dot(Qi),u=r.dot(Qi);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}var x_=bd();function bd(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),r=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(r[l]=0,r[l|256]=32768,a[l]=24,a[l|256]=24):h<-14?(r[l]=1024>>-h-14,r[l|256]=1024>>-h-14|32768,a[l]=-h-1,a[l|256]=-h-1):h<=15?(r[l]=h+15<<10,r[l|256]=h+15<<10|32768,a[l]=13,a[l|256]=13):h<128?(r[l]=31744,r[l|256]=64512,a[l]=24,a[l|256]=24):(r[l]=31744,r[l|256]=64512,a[l]=13,a[l|256]=13)}let n=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,u=0;for(;(h&8388608)===0;)h<<=1,u-=8388608;h&=-8388609,u+=947912704,n[l]=h|u}for(let l=1024;l<2048;++l)n[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:r,shiftTable:a,mantissaTable:n,exponentTable:s,offsetTable:o}}var St=new R,rn=new te,Td=0,Ut=class extends dr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Td++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gh,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXY(t,rn.x,rn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),a=ot(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Yh=class extends Ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Zh=class extends Ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var He=class extends Ut{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ed=new Oi,pa=new R,Us=new R,Fi=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ed.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);let t=pa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(pa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Us.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(Us)),this.expandByPoint(pa.copy(e.center).sub(Us))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wd=0,ii=new Ke,Ns=new Vt,Ar=new R,jt=new Oi,fa=new Oi,Et=new R,ct=class Kh extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kc(t)?Zh:Yh)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new Ye().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,i,r){return ii.makeTranslation(t,i,r),this.applyMatrix4(ii),this}scale(t,i,r){return ii.makeScale(t,i,r),this.applyMatrix4(ii),this}lookAt(t){return Ns.lookAt(t),Ns.updateMatrix(),this.applyMatrix4(Ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new He(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];jt.setFromBufferAttribute(n),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let r=this.boundingSphere.center;if(jt.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];fa.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(jt.min,fa.min),jt.expandByPoint(Et),Et.addVectors(jt.max,fa.max),jt.expandByPoint(Et)):(jt.expandByPoint(fa.min),jt.expandByPoint(fa.max))}jt.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Et.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Et));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Et.fromBufferAttribute(o,h),l&&(Ar.fromBufferAttribute(t,h),Et.add(Ar)),a=Math.max(a,r.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new Ut(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let g=0;g<r.count;g++)o[g]=new R,l[g]=new R;let h=new R,u=new R,p=new R,c=new te,f=new te,x=new te,y=new R,m=new R;function d(g,b,D){h.fromBufferAttribute(r,g),u.fromBufferAttribute(r,b),p.fromBufferAttribute(r,D),c.fromBufferAttribute(n,g),f.fromBufferAttribute(n,b),x.fromBufferAttribute(n,D),u.sub(h),p.sub(h),f.sub(c),x.sub(c);let P=1/(f.x*x.y-x.x*f.y);isFinite(P)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(p,-f.y).multiplyScalar(P),m.copy(p).multiplyScalar(f.x).addScaledVector(u,-x.x).multiplyScalar(P),o[g].add(y),o[b].add(y),o[D].add(y),l[g].add(m),l[b].add(m),l[D].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let g=0,b=T.length;g<b;++g){let D=T[g],P=D.start,N=D.count;for(let q=P,U=P+N;q<U;q+=3)d(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let w=new R,_=new R,E=new R,A=new R;function C(g){E.fromBufferAttribute(a,g),A.copy(E);let b=o[g];w.copy(b),w.sub(E.multiplyScalar(E.dot(b))).normalize(),_.crossVectors(A,b);let D=_.dot(l[g])<0?-1:1;s.setXYZW(g,w.x,w.y,w.z,D)}for(let g=0,b=T.length;g<b;++g){let D=T[g],P=D.start,N=D.count;for(let q=P,U=P+N;q<U;q+=3)C(t.getX(q+0)),C(t.getX(q+1)),C(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ut(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let c=0,f=r.count;c<f;c++)r.setXYZ(c,0,0,0);let a=new R,n=new R,s=new R,o=new R,l=new R,h=new R,u=new R,p=new R;if(t)for(let c=0,f=t.count;c<f;c+=3){let x=t.getX(c+0),y=t.getX(c+1),m=t.getX(c+2);a.fromBufferAttribute(i,x),n.fromBufferAttribute(i,y),s.fromBufferAttribute(i,m),u.subVectors(s,n),p.subVectors(a,n),u.cross(p),o.fromBufferAttribute(r,x),l.fromBufferAttribute(r,y),h.fromBufferAttribute(r,m),o.add(u),l.add(u),h.add(u),r.setXYZ(x,o.x,o.y,o.z),r.setXYZ(y,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let c=0,f=i.count;c<f;c+=3)a.fromBufferAttribute(i,c+0),n.fromBufferAttribute(i,c+1),s.fromBufferAttribute(i,c+2),u.subVectors(s,n),p.subVectors(a,n),u.cross(p),r.setXYZ(c+0,u.x,u.y,u.z),r.setXYZ(c+1,u.x,u.y,u.z),r.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Et.fromBufferAttribute(t,i),Et.normalize(),t.setXYZ(i,Et.x,Et.y,Et.z)}toNonIndexed(){function t(o,l){let h=o.array,u=o.itemSize,p=o.normalized,c=new h.constructor(l.length*u),f=0,x=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let d=0;d<u;d++)c[x++]=h[f++]}return new Ut(c,u,p)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Kh,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let u=0,p=h.length;u<p;u++){let c=h[u],f=t(c,r);l.push(f)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let p=0,c=h.length;p<c;p++){let f=h[p];u.push(f.toJSON(t.data))}u.length>0&&(a[l]=u,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let h in a){let u=a[h];this.setAttribute(h,u.clone(i))}let n=t.morphAttributes;for(let h in n){let u=[],p=n[h];for(let c=0,f=p.length;c<f;c++)u.push(p[c].clone(i));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,u=s.length;h<u;h++){let p=s[h];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ad=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gh,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Bt=new R,Nl=class Jh{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Bt.fromBufferAttribute(this,i),Bt.applyMatrix4(t),this.setXYZ(i,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Bt.fromBufferAttribute(this,i),Bt.applyNormalMatrix(t),this.setXYZ(i,Bt.x,Bt.y,Bt.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Bt.fromBufferAttribute(this,i),Bt.transformDirection(t),this.setXYZ(i,Bt.x,Bt.y,Bt.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=li(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=ot(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=li(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=li(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=li(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=li(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=ot(i,this.array),r=ot(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=ot(i,this.array),r=ot(r,this.array),a=ot(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=ot(i,this.array),r=ot(r,this.array),a=ot(a,this.array),n=ot(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){kn("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new Ut(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Jh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){kn("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Os=new R,Cd=new R,Rd=new Ye,Xi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Os.subVectors(i,t).cross(Cd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Os),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Rd.getNormalMatrix(e),r=this.coplanarPoint(Os).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Pd=0,pr=class extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=sr,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Ih,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Xi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new te().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Fa=class extends pr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cr,ma=new R,Rr=new R,Pr=new R,Ir=new te,ga=new te,$h=new Ke,an=new R,va=new R,nn=new R,Ol=new te,Fs=new te,Fl=new te,Qn=class extends Vt{constructor(e=new Fa){if(super(),this.isSprite=!0,this.type="Sprite",Cr===void 0){Cr=new ct;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ad(t,5);Cr.setIndex([0,1,2,0,2,3]),Cr.setAttribute("position",new Nl(i,3,0,!1)),Cr.setAttribute("uv",new Nl(i,2,3,!1))}this.geometry=Cr,this.material=e,this.center=new te(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rr.setFromMatrixScale(this.matrixWorld),$h.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rr.multiplyScalar(-Pr.z);let i=this.material.rotation,r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));let n=this.center;sn(an.set(-.5,-.5,0),Pr,n,Rr,r,a),sn(va.set(.5,-.5,0),Pr,n,Rr,r,a),sn(nn.set(.5,.5,0),Pr,n,Rr,r,a),Ol.set(0,0),Fs.set(1,0),Fl.set(1,1);let s=e.ray.intersectTriangle(an,va,nn,!1,ma);if(s===null&&(sn(va.set(-.5,.5,0),Pr,n,Rr,r,a),Fs.set(0,1),s=e.ray.intersectTriangle(an,nn,va,!1,ma),s===null))return;let o=e.ray.origin.distanceTo(ma);o<e.near||o>e.far||t.push({distance:o,point:ma.clone(),uv:rr.getInterpolation(ma,an,va,nn,Ol,Fs,Fl,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function sn(e,t,i,r,a,n){Ir.subVectors(e,i).addScalar(.5).multiply(r),a!==void 0?(ga.x=n*Ir.x-a*Ir.y,ga.y=a*Ir.x+n*Ir.y):ga.copy(Ir),e.copy(t),e.x+=ga.x,e.y+=ga.y,e.applyMatrix4($h)}var y_=new R,M_=new R;var Ii=new R,Bs=new R,on=new R,ln=new R,es=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Bs.copy(e).add(t).multiplyScalar(.5),on.copy(t).sub(e).normalize(),ln.copy(this.origin).sub(Bs);let a=e.distanceTo(t)*.5,n=-this.direction.dot(on),s=ln.dot(this.direction),o=-ln.dot(on),l=ln.lengthSq(),h=Math.abs(1-n*n),u,p,c,f;if(h>0)if(u=n*o-s,p=n*s-o,f=a*h,u>=0)if(p>=-f)if(p<=f){let x=1/h;u*=x,p*=x,c=u*(u+n*p+2*s)+p*(n*u+p+2*o)+l}else p=a,u=Math.max(0,-(n*p+s)),c=-u*u+p*(p+2*o)+l;else p=-a,u=Math.max(0,-(n*p+s)),c=-u*u+p*(p+2*o)+l;else p<=-f?(u=Math.max(0,-(-n*a+s)),p=u>0?-a:Math.min(Math.max(-a,-o),a),c=-u*u+p*(p+2*o)+l):p<=f?(u=0,p=Math.min(Math.max(-a,-o),a),c=p*(p+2*o)+l):(u=Math.max(0,-(n*a+s)),p=u>0?a:Math.min(Math.max(-a,-o),a),c=-u*u+p*(p+2*o)+l);else p=n>0?-a:a,u=Math.max(0,-(n*p+s)),c=-u*u+p*(p+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Bs).addScaledVector(on,p),c}intersectSphere(e,t){if(e.radius<0)return null;Ii.subVectors(e.center,this.origin);let i=Ii.dot(this.direction),r=Ii.dot(Ii)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),h>=0?(a=(e.min.y-p.y)*h,n=(e.max.y-p.y)*h):(a=(e.max.y-p.y)*h,n=(e.min.y-p.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),u>=0?(s=(e.min.z-p.z)*u,o=(e.max.z-p.z)*u):(s=(e.max.z-p.z)*u,o=(e.min.z-p.z)*u),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,h=s.z,u=e.x-n.x,p=e.y-n.y,c=e.z-n.z,f=t.x-n.x,x=t.y-n.y,y=t.z-n.z,m=i.x-n.x,d=i.y-n.y,T=i.z-n.z,w=Math.abs(o),_=Math.abs(l),E=Math.abs(h),A,C,g,b,D,P,N,q,U,G,K,H;if(w>=_&&w>=E?(g=o,P=u,U=f,H=m,o>=0?(A=l,C=h,b=p,D=c,N=x,q=y,G=d,K=T):(A=h,C=l,b=c,D=p,N=y,q=x,G=T,K=d)):_>=E?(g=l,P=p,U=x,H=d,l>=0?(A=h,C=o,b=c,D=u,N=y,q=f,G=T,K=m):(A=o,C=h,b=u,D=c,N=f,q=y,G=m,K=T)):(g=h,P=c,U=y,H=T,h>=0?(A=o,C=l,b=u,D=p,N=f,q=x,G=m,K=d):(A=l,C=o,b=p,D=u,N=x,q=f,G=d,K=m)),g===0)return null;let de=A/g,Y=C/g,Z=1/g,ie=b-de*P,Oe=D-Y*P,Ee=N-de*U,tt=q-Y*U,ue=G-de*H,W=K-Y*H,Q=ue*tt-W*Ee,re=ie*W-Oe*ue,Ce=Ee*Oe-tt*ie;if(r){if(Q<0||re<0||Ce<0)return null}else if((Q<0||re<0||Ce<0)&&(Q>0||re>0||Ce>0))return null;let Ie=Q+re+Ce;if(Ie===0)return null;let fe=Z*(Q*P+re*U+Ce*H);return(Ie>0?fe<0:fe>0)?null:this.at(fe/Ie,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ts=class extends pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bl=new Ke,er=new es,hn=new Fi,zl=new R,un=new R,cn=new R,dn=new R,zs=new R,pn=new R,Gl=new R,fn=new R,Pt=class extends Vt{constructor(e=new ct,t=new ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){pn.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],u=a[o];h!==0&&(zs.fromBufferAttribute(u,e),n?pn.addScaledVector(zs,h):pn.addScaledVector(zs.sub(t),h))}t.add(pn)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hn.copy(i.boundingSphere),hn.applyMatrix4(a),er.copy(e.ray).recast(e.near),!(hn.containsPoint(er.origin)===!1&&(er.intersectSphere(hn,zl)===null||er.origin.distanceToSquared(zl)>(e.far-e.near)**2))&&(Bl.copy(a).invert(),er.copy(e.ray).applyMatrix4(Bl),!(i.boundingBox!==null&&er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,er)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,p=a.groups,c=a.drawRange;if(s!==null)if(Array.isArray(n))for(let f=0,x=p.length;f<x;f++){let y=p[f],m=n[y.materialIndex],d=Math.max(y.start,c.start),T=Math.min(s.count,Math.min(y.start+y.count,c.start+c.count));for(let w=d,_=T;w<_;w+=3){let E=s.getX(w),A=s.getX(w+1),C=s.getX(w+2);r=mn(this,m,e,i,l,h,u,E,A,C),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let f=Math.max(0,c.start),x=Math.min(s.count,c.start+c.count);for(let y=f,m=x;y<m;y+=3){let d=s.getX(y),T=s.getX(y+1),w=s.getX(y+2);r=mn(this,n,e,i,l,h,u,d,T,w),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let f=0,x=p.length;f<x;f++){let y=p[f],m=n[y.materialIndex],d=Math.max(y.start,c.start),T=Math.min(o.count,Math.min(y.start+y.count,c.start+c.count));for(let w=d,_=T;w<_;w+=3){let E=w,A=w+1,C=w+2;r=mn(this,m,e,i,l,h,u,E,A,C),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let f=Math.max(0,c.start),x=Math.min(o.count,c.start+c.count);for(let y=f,m=x;y<m;y+=3){let d=y,T=y+1,w=y+2;r=mn(this,n,e,i,l,h,u,d,T,w),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}};function Id(e,t,i,r,a,n,s,o){let l;if(t.side===Ht?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===lr,o),l===null)return null;fn.copy(o),fn.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(fn);return h<i.near||h>i.far?null:{distance:h,point:fn.clone(),object:e}}function mn(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,un),e.getVertexPosition(l,cn),e.getVertexPosition(h,dn);let u=Id(e,t,i,r,un,cn,dn,Gl);if(u){let p=new R;rr.getBarycoord(Gl,un,cn,dn,p),a&&(u.uv=rr.getInterpolatedAttribute(a,o,l,h,p,new te)),n&&(u.uv1=rr.getInterpolatedAttribute(n,o,l,h,p,new te)),s&&(u.normal=rr.getInterpolatedAttribute(s,o,l,h,p,new R),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let c={a:o,b:l,c:h,normal:new R,materialIndex:0};rr.getNormal(un,cn,dn,c.normal),u.face=c,u.barycoord=p}return u}var S_=new ft,b_=new ft,T_=new ft,E_=new ft,w_=new Ke,A_=new R,C_=new Fi,R_=new Ke,P_=new es;var Qh=class extends kt{constructor(e=null,t=1,i=1,r,a,n,s,o,l=Ct,h=Ct,u,p){super(null,n,s,o,l,h,r,a,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},I_=new Ke,L_=new Ke;var Vl=class extends Ut{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Lr=new Ke,Hl=new Ke,gn=[],kl=new Oi,Ld=new Ke,_a=new Pt,xa=new Fi,eu=class extends Pt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Ld)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Lr),kl.copy(e.boundingBox).applyMatrix4(Lr),this.boundingBox.union(kl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Lr),xa.copy(e.boundingSphere).applyMatrix4(Lr),this.boundingSphere.union(xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,n=e*a+1;for(let s=0;s<i.length;s++)i[s]=r[n+s]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(_a.geometry=this.geometry,_a.material=this.material,_a.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(i),e.ray.intersectsSphere(xa)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Lr),Hl.multiplyMatrices(i,Lr),_a.matrixWorld=Hl,_a.raycast(e,gn);for(let n=0,s=gn.length;n<s;n++){let o=gn[n];o.instanceId=a,o.object=this,t.push(o)}gn.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Qh(new Float32Array(r*this.count),r,this.count,Yo,hi));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<i.length;l++)n+=i[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=r*e;return a[o]=s,a.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},tr=new Fi,Dd=new te(.5,.5),vn=new R,$r=class{constructor(e=new Xi,t=new Xi,i=new Xi,r=new Xi,a=new Xi,n=new Xi){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],h=a[4],u=a[5],p=a[6],c=a[7],f=a[8],x=a[9],y=a[10],m=a[11],d=a[12],T=a[13],w=a[14],_=a[15];if(r[0].setComponents(l-n,c-h,m-f,_-d).normalize(),r[1].setComponents(l+n,c+h,m+f,_+d).normalize(),r[2].setComponents(l+s,c+u,m+x,_+T).normalize(),r[3].setComponents(l-s,c-u,m-x,_-T).normalize(),i)r[4].setComponents(o,p,y,w).normalize(),r[5].setComponents(l-o,c-p,m-y,_-w).normalize();else if(r[4].setComponents(l-o,c-p,m-y,_-w).normalize(),t===ci)r[5].setComponents(l+o,c+p,m+y,_+w).normalize();else if(t===Ia)r[5].setComponents(o,p,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){tr.center.set(0,0,0);let t=Dd.distanceTo(e.center);return tr.radius=.7071067811865476+t,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(vn.x=r.normal.x>0?e.max.x:e.min.x,vn.y=r.normal.y>0?e.max.y:e.min.y,vn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vn)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Wl=new Ke,Ud=class tu{constructor(){this.coordinateSystem=ci,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];Wl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new $r),r[a].setFromProjectionMatrix(Wl,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new $r),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new tu().copy(this)}};var Nd=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let a=this.pool,n=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let s=a[this.index];n.push(s),this.index++,s.start=e,s.count=t,s.z=i,s.index=r}reset(){this.list.length=0,this.index=0}},D_=new Ke,U_=new Xe(1,1,1),N_=new $r,O_=new Ud,F_=new Oi,B_=new Fi,z_=new R,G_=new R,V_=new R,H_=new Nd,k_=new Pt;var W_=new R,X_=new R,j_=new Ke,q_=new es,Y_=new Fi,Z_=new R,K_=new R;var J_=new R,$_=new R;var Od=class extends pr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xl=new Ke,Go=new es,_n=new Fi,xn=new R,il=class extends Vt{constructor(e=new ct,t=new Od){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_n.copy(i.boundingSphere),_n.applyMatrix4(r),_n.radius+=a,e.ray.intersectsSphere(_n)===!1)return;Xl.copy(r).invert(),Go.copy(e.ray).applyMatrix4(Xl);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,h=i.attributes.position;if(l!==null){let u=Math.max(0,n.start),p=Math.min(l.count,n.start+n.count);for(let c=u,f=p;c<f;c++){let x=l.getX(c);xn.fromBufferAttribute(h,x),jl(xn,x,o,r,e,t,this)}}else{let u=Math.max(0,n.start),p=Math.min(h.count,n.start+n.count);for(let c=u,f=p;c<f;c++)xn.fromBufferAttribute(h,c),jl(xn,c,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function jl(e,t,i,r,a,n,s){let o=Go.distanceSqToPoint(e);if(o<i){let l=new R;Go.closestPointToPoint(e,l),l.applyMatrix4(r);let h=a.ray.origin.distanceTo(l);if(h<a.near||h>a.far)return;n.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var iu=class extends kt{constructor(e=[],t=hr,i,r,a,n,s,o,l,h){super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ru=class extends kt{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Da=class extends kt{constructor(e,t,i=Mi,r,a,n,s=Ct,o=Ct,l,h=Ni,u=1){if(h!==Ni&&h!==ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:u};super(p,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fd=class extends Da{constructor(e,t=Mi,i=hr,r,a,n=Ct,s=Ct,o,l=Ni){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,a,n,s,o,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},au=class extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},is=class nu extends ct{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],u=[],p=[],c=0,f=0;x("z","y","x",-1,-1,r,i,t,s,n,0),x("z","y","x",1,-1,r,i,-t,s,n,1),x("x","z","y",1,1,t,r,i,a,s,2),x("x","z","y",1,-1,t,r,-i,a,s,3),x("x","y","z",1,-1,t,i,r,a,n,4),x("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new He(h,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(p,2));function x(y,m,d,T,w,_,E,A,C,g,b){let D=_/C,P=E/g,N=_/2,q=E/2,U=A/2,G=C+1,K=g+1,H=0,de=0,Y=new R;for(let Z=0;Z<K;Z++){let ie=Z*P-q;for(let Oe=0;Oe<G;Oe++){let Ee=Oe*D-N;Y[y]=Ee*T,Y[m]=ie*w,Y[d]=U,h.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[d]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),p.push(Oe/C),p.push(1-Z/g),H+=1}}for(let Z=0;Z<g;Z++)for(let ie=0;ie<C;ie++){let Oe=c+ie+G*Z,Ee=c+ie+G*(Z+1),tt=c+(ie+1)+G*(Z+1),ue=c+(ie+1)+G*Z;l.push(Oe,Ee,ue),l.push(Ee,tt,ue),de+=6}o.addGroup(f,de,b),f+=de,c+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Bd=class su extends ct{constructor(t=1,i=1,r=4,a=8,n=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:r,radialSegments:a,heightSegments:n},i=Math.max(0,i),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),n=Math.max(1,Math.floor(n));let s=[],o=[],l=[],h=[],u=i/2,p=Math.PI/2*t,c=i,f=2*p+c,x=r*2+n,y=a+1,m=new R,d=new R;for(let T=0;T<=x;T++){let w=0,_=0,E=0,A=0;if(T<=r){let b=T/r,D=b*Math.PI/2;_=-u-t*Math.cos(D),E=t*Math.sin(D),A=-t*Math.cos(D),w=b*p}else if(T<=r+n){let b=(T-r)/n;_=-u+b*i,E=t,A=0,w=p+b*c}else{let b=(T-r-n)/r,D=b*Math.PI/2;_=u+t*Math.sin(D),E=t*Math.cos(D),A=t*Math.sin(D),w=p+c+b*p}let C=Math.max(0,Math.min(1,w/f)),g=0;T===0?g=.5/a:T===x&&(g=-.5/a);for(let b=0;b<=a;b++){let D=b/a,P=D*Math.PI*2,N=Math.sin(P),q=Math.cos(P);d.x=-E*q,d.y=_,d.z=E*N,o.push(d.x,d.y,d.z),m.set(-E*q,A,E*N),m.normalize(),l.push(m.x,m.y,m.z),h.push(D+g,C)}if(T>0){let b=(T-1)*y;for(let D=0;D<a;D++){let P=b+D,N=b+D+1,q=T*y+D,U=T*y+D+1;s.push(P,N,q),s.push(N,U,q)}}}this.setIndex(s),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(l,3)),this.setAttribute("uv",new He(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new su(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},zd=class ou extends ct{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],h=new R,u=new te;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,c=3;p<=i;p++,c+=3){let f=r+p/i*a;h.x=t*Math.cos(f),h.y=t*Math.sin(f),s.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(s[c]/t+1)/2,u.y=(s[c+1]/t+1)/2,l.push(u.x,u.y)}for(let p=1;p<=i;p++)n.push(p,p+1,0);this.setIndex(n),this.setAttribute("position",new He(s,3)),this.setAttribute("normal",new He(o,3)),this.setAttribute("uv",new He(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ou(t.radius,t.segments,t.thetaStart,t.thetaLength)}},rs=class lu extends ct{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let u=[],p=[],c=[],f=[],x=0,y=[],m=r/2,d=0;T(),s===!1&&(t>0&&w(!0),i>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new He(p,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(f,2));function T(){let _=new R,E=new R,A=0,C=(i-t)/r;for(let g=0;g<=n;g++){let b=[],D=g/n,P=D*(i-t)+t;for(let N=0;N<=a;N++){let q=N/a,U=q*l+o,G=Math.sin(U),K=Math.cos(U);E.x=P*G,E.y=-D*r+m,E.z=P*K,p.push(E.x,E.y,E.z),_.set(G,C,K).normalize(),c.push(_.x,_.y,_.z),f.push(q,1-D),b.push(x++)}y.push(b)}for(let g=0;g<a;g++)for(let b=0;b<n;b++){let D=y[b][g],P=y[b+1][g],N=y[b+1][g+1],q=y[b][g+1];(t>0||b!==0)&&(u.push(D,P,q),A+=3),(i>0||b!==n-1)&&(u.push(P,N,q),A+=3)}h.addGroup(d,A,0),d+=A}function w(_){let E=x,A=new te,C=new R,g=0,b=_===!0?t:i,D=_===!0?1:-1;for(let N=1;N<=a;N++)p.push(0,m*D,0),c.push(0,D,0),f.push(.5,.5),x++;let P=x;for(let N=0;N<=a;N++){let q=N/a*l+o,U=Math.cos(q),G=Math.sin(q);C.x=b*G,C.y=m*D,C.z=b*U,p.push(C.x,C.y,C.z),c.push(0,D,0),A.x=U*.5+.5,A.y=G*.5*D+.5,f.push(A.x,A.y),x++}for(let N=0;N<a;N++){let q=E+N,U=P+N;_===!0?u.push(U,U+1,q):u.push(U+1,U,q),g+=3}h.addGroup(d,g,_===!0?1:2),d+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gd=class hu extends rs{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new hu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ba=class uu extends ct{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let n=[],s=[];o(a),h(r),u(),this.setAttribute("position",new He(n,3)),this.setAttribute("normal",new He(n.slice(),3)),this.setAttribute("uv",new He(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(T){let w=new R,_=new R,E=new R;for(let A=0;A<i.length;A+=3)f(i[A+0],w),f(i[A+1],_),f(i[A+2],E),l(w,_,E,T)}function l(T,w,_,E){let A=E+1,C=[];for(let g=0;g<=A;g++){C[g]=[];let b=T.clone().lerp(_,g/A),D=w.clone().lerp(_,g/A),P=A-g;for(let N=0;N<=P;N++)N===0&&g===A?C[g][N]=b:C[g][N]=b.clone().lerp(D,N/P)}for(let g=0;g<A;g++)for(let b=0;b<2*(A-g)-1;b++){let D=Math.floor(b/2);b%2===0?(c(C[g][D+1]),c(C[g+1][D]),c(C[g][D])):(c(C[g][D+1]),c(C[g+1][D+1]),c(C[g+1][D]))}}function h(T){let w=new R;for(let _=0;_<n.length;_+=3)w.x=n[_+0],w.y=n[_+1],w.z=n[_+2],w.normalize().multiplyScalar(T),n[_+0]=w.x,n[_+1]=w.y,n[_+2]=w.z}function u(){let T=new R;for(let w=0;w<n.length;w+=3){T.x=n[w+0],T.y=n[w+1],T.z=n[w+2];let _=m(T)/2/Math.PI+.5,E=d(T)/Math.PI+.5;s.push(_,1-E)}x(),p()}function p(){for(let T=0;T<s.length;T+=6){let w=s[T+0],_=s[T+2],E=s[T+4],A=Math.max(w,_,E),C=Math.min(w,_,E);A>.9&&C<.1&&(w<.2&&(s[T+0]+=1),_<.2&&(s[T+2]+=1),E<.2&&(s[T+4]+=1))}}function c(T){n.push(T.x,T.y,T.z)}function f(T,w){let _=T*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function x(){let T=new R,w=new R,_=new R,E=new R,A=new te,C=new te,g=new te;for(let b=0,D=0;b<n.length;b+=9,D+=6){T.set(n[b+0],n[b+1],n[b+2]),w.set(n[b+3],n[b+4],n[b+5]),_.set(n[b+6],n[b+7],n[b+8]),A.set(s[D+0],s[D+1]),C.set(s[D+2],s[D+3]),g.set(s[D+4],s[D+5]),E.copy(T).add(w).add(_).divideScalar(3);let P=m(E);y(A,D+0,T,P),y(C,D+2,w,P),y(g,D+4,_,P)}}function y(T,w,_,E){E<0&&T.x===1&&(s[w]=T.x-1),_.x===0&&_.z===0&&(s[w]=E/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function d(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uu(t.vertices,t.indices,t.radius,t.detail)}},Vd=class cu extends Ba{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=1/r,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,s,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new cu(t.radius,t.detail)}},yn=new R,Mn=new R,Gs=new R,Sn=new rr,Hd=class extends ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(kr*t),a=e.getIndex(),n=e.getAttribute("position"),s=a?a.count:n.count,o=[0,0,0],l=["a","b","c"],h=new Array(3),u={},p=[];for(let c=0;c<s;c+=3){a?(o[0]=a.getX(c),o[1]=a.getX(c+1),o[2]=a.getX(c+2)):(o[0]=c,o[1]=c+1,o[2]=c+2);let{a:f,b:x,c:y}=Sn;if(f.fromBufferAttribute(n,o[0]),x.fromBufferAttribute(n,o[1]),y.fromBufferAttribute(n,o[2]),Sn.getNormal(Gs),h[0]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,h[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,h[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){let d=(m+1)%3,T=h[m],w=h[d],_=Sn[l[m]],E=Sn[l[d]],A=`${T}_${w}`,C=`${w}_${T}`;C in u&&u[C]?(Gs.dot(u[C].normal)<=r&&(p.push(_.x,_.y,_.z),p.push(E.x,E.y,E.z)),u[C]=null):A in u||(u[A]={index0:o[m],index1:o[d],normal:Gs.clone()})}}for(let c in u)if(u[c]){let{index0:f,index1:x}=u[c];yn.fromBufferAttribute(n,f),Mn.fromBufferAttribute(n,x),p.push(yn.x,yn.y,yn.z),p.push(Mn.x,Mn.y,Mn.z)}this.setAttribute("position",new He(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let h=i[r],u=i[r+1]-h,p=(n-h)/u;return(r+p)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new te:new R);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,r=[],a=[],n=[],s=new R,o=new Ke;for(let c=0;c<=e;c++){let f=c/e;r[c]=this.getTangentAt(f,new R)}a[0]=new R,n[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),p=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),p<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let c=1;c<=e;c++){if(a[c]=a[c-1].clone(),n[c]=n[c-1].clone(),s.crossVectors(r[c-1],r[c]),s.length()>Number.EPSILON){s.normalize();let f=Math.acos($e(r[c-1].dot(r[c]),-1,1));a[c].applyMatrix4(o.makeRotationAxis(s,f))}n[c].crossVectors(r[c],a[c])}if(t===!0){let c=Math.acos($e(a[0].dot(a[e]),-1,1));c/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(c=-c);for(let f=1;f<=e;f++)a[f].applyMatrix4(o.makeRotationAxis(r[f],c*f)),n[f].crossVectors(r[f],a[f])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},rl=class extends Si{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new te){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=o-this.aX,c=l-this.aY;o=p*h-c*u+this.aX,l=p*u+c*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},kd=class extends rl{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function al(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,u,p){let c=(s-n)/h-(o-n)/(h+u)+(o-s)/u,f=(o-s)/u-(l-s)/(u+p)+(l-o)/p;c*=u,f*=u,a(s,o,c,f)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}var ql=new R,Yl=new R,Vs=new al,Hs=new al,ks=new al,Wd=class extends Si{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new R){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=r[(s-1)%a]:(Yl.subVectors(r[0],r[1]).add(r[0]),l=Yl);let u=r[s%a],p=r[(s+1)%a];if(this.closed||s+2<a?h=r[(s+2)%a]:(ql.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=ql),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(u),c),x=Math.pow(u.distanceToSquared(p),c),y=Math.pow(p.distanceToSquared(h),c);x<1e-4&&(x=1),f<1e-4&&(f=x),y<1e-4&&(y=x),Vs.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,f,x,y),Hs.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,f,x,y),ks.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,f,x,y)}else this.curveType==="catmullrom"&&(Vs.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),Hs.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),ks.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return i.set(Vs.calc(o),Hs.calc(o),ks.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zl(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function Xd(e,t){let i=1-e;return i*i*t}function jd(e,t){return 2*(1-e)*e*t}function qd(e,t){return e*e*t}function wa(e,t,i,r){return Xd(e,t)+jd(e,i)+qd(e,r)}function Yd(e,t){let i=1-e;return i*i*i*t}function Zd(e,t){let i=1-e;return 3*i*i*e*t}function Kd(e,t){return 3*(1-e)*e*e*t}function Jd(e,t){return e*e*e*t}function Aa(e,t,i,r,a){return Yd(e,t)+Zd(e,i)+Kd(e,r)+Jd(e,a)}var du=class extends Si{constructor(e=new te,t=new te,i=new te,r=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new te){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Aa(e,r.x,a.x,n.x,s.x),Aa(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$d=class extends Si{constructor(e=new R,t=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new R){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Aa(e,r.x,a.x,n.x,s.x),Aa(e,r.y,a.y,n.y,s.y),Aa(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pu=class extends Si{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qd=class extends Si{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fu=class extends Si{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(wa(e,r.x,a.x,n.x),wa(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mu=class extends Si{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(wa(e,r.x,a.x,n.x),wa(e,r.y,a.y,n.y),wa(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gu=class extends Si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],u=r[n>r.length-3?r.length-1:n+2];return i.set(Zl(s,o.x,l.x,h.x,u.x),Zl(s,o.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new te().fromArray(r))}return this}},Wn=Object.freeze({__proto__:null,ArcCurve:kd,CatmullRomCurve3:Wd,CubicBezierCurve:du,CubicBezierCurve3:$d,EllipseCurve:rl,LineCurve:pu,LineCurve3:Qd,QuadraticBezierCurve:fu,QuadraticBezierCurve3:mu,SplineCurve:gu}),ep=class extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wn[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Wn[r.type]().fromJSON(r))}return this}},Kl=class extends ep{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new pu(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new fu(this.currentPoint.clone(),new te(e,t),new te(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new du(this.currentPoint.clone(),new te(e,t),new te(i,r),new te(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new gu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new rl(e,t,i,r,a,n,s,o);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vu=class extends Kl{constructor(e){super(e),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Kl().fromJSON(r))}return this}};function tp(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=_u(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h;if(r&&(n=sp(e,t,n,i)),e.length>80*i){o=e[0],l=e[1];let u=o,p=l;for(let c=i;c<a;c+=i){let f=e[c],x=e[c+1];f<o&&(o=f),x<l&&(l=x),f>u&&(u=f),x>p&&(p=x)}h=Math.max(u-o,p-l),h=h!==0?32767/h:0}return Ua(n,s,i,o,l,h,0),s}function _u(e,t,i,r,a){let n;if(a===vp(e,t,i,r)>0)for(let s=t;s<i;s+=r)n=Jl(s/r|0,e[s],e[s+1],n);else for(let s=i-r;s>=t;s-=r)n=Jl(s/r|0,e[s],e[s+1],n);return n&&Qr(n,n.next)&&(Oa(n),n=n.next),n}function cr(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(Qr(i,i.next)||mt(i.prev,i,i.next)===0)){if(Oa(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Ua(e,t,i,r,a,n,s){if(!e)return;!s&&n&&cp(e,r,a,n);let o=e;for(;e.prev!==e.next;){let l=e.prev,h=e.next;if(n?rp(e,r,a,n):ip(e)){t.push(l.i,e.i,h.i),Oa(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=ap(cr(e),t),Ua(e,t,i,r,a,n,2)):s===2&&np(e,t,i,r,a,n):Ua(cr(e),t,i,r,a,n,1);break}}}function ip(e){let t=e.prev,i=e,r=e.next;if(mt(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,h=r.y,u=Math.min(a,n,s),p=Math.min(o,l,h),c=Math.max(a,n,s),f=Math.max(o,l,h),x=r.next;for(;x!==t;){if(x.x>=u&&x.x<=c&&x.y>=p&&x.y<=f&&ba(a,o,n,l,s,h,x.x,x.y)&&mt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function rp(e,t,i,r){let a=e.prev,n=e,s=e.next;if(mt(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,u=a.y,p=n.y,c=s.y,f=Math.min(o,l,h),x=Math.min(u,p,c),y=Math.max(o,l,h),m=Math.max(u,p,c),d=Vo(f,x,t,i,r),T=Vo(y,m,t,i,r),w=e.prevZ,_=e.nextZ;for(;w&&w.z>=d&&_&&_.z<=T;){if(w.x>=f&&w.x<=y&&w.y>=x&&w.y<=m&&w!==a&&w!==s&&ba(o,u,l,p,h,c,w.x,w.y)&&mt(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=f&&_.x<=y&&_.y>=x&&_.y<=m&&_!==a&&_!==s&&ba(o,u,l,p,h,c,_.x,_.y)&&mt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=d;){if(w.x>=f&&w.x<=y&&w.y>=x&&w.y<=m&&w!==a&&w!==s&&ba(o,u,l,p,h,c,w.x,w.y)&&mt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=T;){if(_.x>=f&&_.x<=y&&_.y>=x&&_.y<=m&&_!==a&&_!==s&&ba(o,u,l,p,h,c,_.x,_.y)&&mt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ap(e,t){let i=e;do{let r=i.prev,a=i.next.next;!Qr(r,a)&&yu(r,i,i.next,a)&&Na(r,a)&&Na(a,r)&&(t.push(r.i,i.i,a.i),Oa(i),Oa(i.next),i=e=a),i=i.next}while(i!==e);return cr(i)}function np(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&fp(s,o)){let l=Mu(s,o);s=cr(s,s.next),l=cr(l,l.next),Ua(s,t,i,r,a,n,0),Ua(l,t,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function sp(e,t,i,r){let a=[];for(let n=0,s=t.length;n<s;n++){let o=t[n]*r,l=n<s-1?t[n+1]*r:e.length,h=_u(e,o,l,r,!1);h===h.next&&(h.steiner=!0),a.push(pp(h))}a.sort(op);for(let n=0;n<a.length;n++)i=lp(a[n],i);return i}function op(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let r=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);i=r-a}return i}function lp(e,t){let i=hp(e,t);if(!i)return t;let r=Mu(i,e);return cr(r,r.next),cr(i,i.next)}function hp(e,t){let i=t,r=e.x,a=e.y,n=-1/0,s;if(Qr(e,i))return i;do{if(Qr(e,i.next))return i.next;if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){let p=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(p<=r&&p>n&&(n=p,s=i.x<i.next.x?i:i.next,p===r))return s}i=i.next}while(i!==t);if(!s)return null;let o=s,l=s.x,h=s.y,u=1/0;i=s;do{if(r>=i.x&&i.x>=l&&r!==i.x&&xu(a<h?r:n,a,l,h,a<h?n:r,a,i.x,i.y)){let p=Math.abs(a-i.y)/(r-i.x);Na(i,e)&&(p<u||p===u&&(i.x>s.x||i.x===s.x&&up(s,i)))&&(s=i,u=p)}i=i.next}while(i!==o);return s}function up(e,t){return mt(e.prev,e,t.prev)<0&&mt(t.next,e,e.next)<0}function cp(e,t,i,r){let a=e;do a.z===0&&(a.z=Vo(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,dp(a)}function dp(e){let t,i=1;do{let r=e,a;e=null;let n=null;for(t=0;r;){t++;let s=r,o=0;for(let h=0;h<i&&(o++,s=s.nextZ,!!s);h++);let l=i;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(a=r,r=r.nextZ,o--):(a=s,s=s.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=s}n.nextZ=null,i*=2}while(t>1);return e}function Vo(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function pp(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function xu(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function ba(e,t,i,r,a,n,s,o){return!(e===s&&t===o)&&xu(e,t,i,r,a,n,s,o)}function fp(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!mp(e,t)&&(Na(e,t)&&Na(t,e)&&gp(e,t)&&(mt(e.prev,e,t.prev)||mt(e,t.prev,t))||Qr(e,t)&&mt(e.prev,e,e.next)>0&&mt(t.prev,t,t.next)>0)}function mt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Qr(e,t){return e.x===t.x&&e.y===t.y}function yu(e,t,i,r){let a=Tn(mt(e,t,i)),n=Tn(mt(e,t,r)),s=Tn(mt(i,r,e)),o=Tn(mt(i,r,t));return!!(a!==n&&s!==o||a===0&&bn(e,i,t)||n===0&&bn(e,r,t)||s===0&&bn(i,e,r)||o===0&&bn(i,t,r))}function bn(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Tn(e){return e>0?1:e<0?-1:0}function mp(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&yu(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Na(e,t){return mt(e.prev,e,e.next)<0?mt(e,t,e.next)>=0&&mt(e,e.prev,t)>=0:mt(e,t,e.prev)<0||mt(e,e.next,t)<0}function gp(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function Mu(e,t){let i=Ho(e.i,e.x,e.y),r=Ho(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function Jl(e,t,i,r){let a=Ho(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function Oa(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ho(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vp(e,t,i,r){let a=0;for(let n=t,s=i-r;n<i;n+=r)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var _p=class{static triangulate(e,t,i=2){return tp(e,t,i)}},nr=class Su{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return Su.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];$l(t),Ql(r,t);let s=t.length;i.forEach($l);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,Ql(r,i[l]);let o=_p.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function $l(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ql(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var xp=class bu extends ct{constructor(t=new vu([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new He(a,3)),this.setAttribute("uv",new He(n,2)),this.computeVertexNormals();function s(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,u=i.steps!==void 0?i.steps:1,p=i.depth!==void 0?i.depth:1,c=i.bevelEnabled!==void 0?i.bevelEnabled:!0,f=i.bevelThickness!==void 0?i.bevelThickness:.2,x=i.bevelSize!==void 0?i.bevelSize:f-.1,y=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,d=i.extrudePath,T=i.UVGenerator!==void 0?i.UVGenerator:yp,w,_=!1,E,A,C,g;if(d){w=d.getSpacedPoints(u),_=!0,c=!1;let ee=d.isCatmullRomCurve3?d.closed:!1;E=d.computeFrenetFrames(u,ee),A=new R,C=new R,g=new R}c||(m=0,f=0,x=0,y=0);let b=o.extractPoints(h),D=b.shape,P=b.holes;if(!nr.isClockWise(D)){D=D.reverse();for(let ee=0,J=P.length;ee<J;ee++){let le=P[ee];nr.isClockWise(le)&&(P[ee]=le.reverse())}}function N(ee){let J=10000000000000001e-36,le=ee[0];for(let ve=1;ve<=ee.length;ve++){let _e=ve%ee.length,ye=ee[_e],Ue=ye.x-le.x,Be=ye.y-le.y,ke=Ue*Ue+Be*Be,I=Math.max(Math.abs(ye.x),Math.abs(ye.y),Math.abs(le.x),Math.abs(le.y)),it=J*I*I;if(ke<=it){ee.splice(_e,1),ve--;continue}le=ye}}N(D),P.forEach(N);let q=P.length,U=D;for(let ee=0;ee<q;ee++){let J=P[ee];D=D.concat(J)}function G(ee,J,le){return J||Ve("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(J,le)}let K=D.length;function H(ee,J,le){let ve,_e,ye,Ue=ee.x-J.x,Be=ee.y-J.y,ke=le.x-ee.x,I=le.y-ee.y,it=Ue*Ue+Be*Be,qe=Ue*I-Be*ke;if(Math.abs(qe)>Number.EPSILON){let ne=Math.sqrt(it),M=Math.sqrt(ke*ke+I*I),v=J.x-Be/ne,L=J.y+Ue/ne,z=le.x-I/M,X=le.y+ke/M,ce=((z-v)*I-(X-L)*ke)/(Ue*I-Be*ke);ve=v+Ue*ce-ee.x,_e=L+Be*ce-ee.y;let pe=ve*ve+_e*_e;if(pe<=2)return new te(ve,_e);ye=Math.sqrt(pe/2)}else{let ne=!1;Ue>Number.EPSILON?ke>Number.EPSILON&&(ne=!0):Ue<-Number.EPSILON?ke<-Number.EPSILON&&(ne=!0):Math.sign(Be)===Math.sign(I)&&(ne=!0),ne?(ve=-Be,_e=Ue,ye=Math.sqrt(it)):(ve=Ue,_e=Be,ye=Math.sqrt(it/2))}return new te(ve/ye,_e/ye)}let de=[];for(let ee=0,J=U.length,le=J-1,ve=ee+1;ee<J;ee++,le++,ve++)le===J&&(le=0),ve===J&&(ve=0),de[ee]=H(U[ee],U[le],U[ve]);let Y=[],Z,ie=de.concat();for(let ee=0,J=q;ee<J;ee++){let le=P[ee];Z=[];for(let ve=0,_e=le.length,ye=_e-1,Ue=ve+1;ve<_e;ve++,ye++,Ue++)ye===_e&&(ye=0),Ue===_e&&(Ue=0),Z[ve]=H(le[ve],le[ye],le[Ue]);Y.push(Z),ie=ie.concat(Z)}let Oe;if(m===0)Oe=nr.triangulateShape(U,P);else{let ee=[],J=[];for(let le=0;le<m;le++){let ve=le/m,_e=f*Math.cos(ve*Math.PI/2),ye=x*Math.sin(ve*Math.PI/2)+y;for(let Ue=0,Be=U.length;Ue<Be;Ue++){let ke=G(U[Ue],de[Ue],ye);re(ke.x,ke.y,-_e),ve===0&&ee.push(ke)}for(let Ue=0,Be=q;Ue<Be;Ue++){let ke=P[Ue];Z=Y[Ue];let I=[];for(let it=0,qe=ke.length;it<qe;it++){let ne=G(ke[it],Z[it],ye);re(ne.x,ne.y,-_e),ve===0&&I.push(ne)}ve===0&&J.push(I)}}Oe=nr.triangulateShape(ee,J)}let Ee=Oe.length,tt=x+y;for(let ee=0;ee<K;ee++){let J=c?G(D[ee],ie[ee],tt):D[ee];_?(C.copy(E.normals[0]).multiplyScalar(J.x),A.copy(E.binormals[0]).multiplyScalar(J.y),g.copy(w[0]).add(C).add(A),re(g.x,g.y,g.z)):re(J.x,J.y,0)}for(let ee=1;ee<=u;ee++)for(let J=0;J<K;J++){let le=c?G(D[J],ie[J],tt):D[J];_?(C.copy(E.normals[ee]).multiplyScalar(le.x),A.copy(E.binormals[ee]).multiplyScalar(le.y),g.copy(w[ee]).add(C).add(A),re(g.x,g.y,g.z)):re(le.x,le.y,p/u*ee)}for(let ee=m-1;ee>=0;ee--){let J=ee/m,le=f*Math.cos(J*Math.PI/2),ve=x*Math.sin(J*Math.PI/2)+y;for(let _e=0,ye=U.length;_e<ye;_e++){let Ue=G(U[_e],de[_e],ve);re(Ue.x,Ue.y,p+le)}for(let _e=0,ye=P.length;_e<ye;_e++){let Ue=P[_e];Z=Y[_e];for(let Be=0,ke=Ue.length;Be<ke;Be++){let I=G(Ue[Be],Z[Be],ve);_?re(I.x,I.y+w[u-1].y,w[u-1].x+le):re(I.x,I.y,p+le)}}}ue(),W();function ue(){let ee=a.length/3;if(c){let J=0,le=K*J;for(let ve=0;ve<Ee;ve++){let _e=Oe[ve];Ce(_e[2]+le,_e[1]+le,_e[0]+le)}J=u+m*2,le=K*J;for(let ve=0;ve<Ee;ve++){let _e=Oe[ve];Ce(_e[0]+le,_e[1]+le,_e[2]+le)}}else{for(let J=0;J<Ee;J++){let le=Oe[J];Ce(le[2],le[1],le[0])}for(let J=0;J<Ee;J++){let le=Oe[J];Ce(le[0]+K*u,le[1]+K*u,le[2]+K*u)}}r.addGroup(ee,a.length/3-ee,0)}function W(){let ee=a.length/3,J=0;Q(U,J),J+=U.length;for(let le=0,ve=P.length;le<ve;le++){let _e=P[le];Q(_e,J),J+=_e.length}r.addGroup(ee,a.length/3-ee,1)}function Q(ee,J){let le=ee.length;for(;--le>=0;){let ve=le,_e=le-1;_e<0&&(_e=ee.length-1);for(let ye=0,Ue=u+m*2;ye<Ue;ye++){let Be=K*ye,ke=K*(ye+1),I=J+ve+Be,it=J+_e+Be,qe=J+_e+ke,ne=J+ve+ke;Ie(I,it,qe,ne)}}}function re(ee,J,le){l.push(ee),l.push(J),l.push(le)}function Ce(ee,J,le){fe(ee),fe(J),fe(le);let ve=a.length/3,_e=T.generateTopUV(r,a,ve-3,ve-2,ve-1);je(_e[0]),je(_e[1]),je(_e[2])}function Ie(ee,J,le,ve){fe(ee),fe(J),fe(ve),fe(J),fe(le),fe(ve);let _e=a.length/3,ye=T.generateSideWallUV(r,a,_e-6,_e-3,_e-2,_e-1);je(ye[0]),je(ye[1]),je(ye[3]),je(ye[1]),je(ye[2]),je(ye[3])}function fe(ee){a.push(l[ee*3+0]),a.push(l[ee*3+1]),a.push(l[ee*3+2])}function je(ee){n.push(ee.x),n.push(ee.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return Mp(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new Wn[a.type]().fromJSON(a)),new bu(r,t.options)}},yp={generateTopUV:function(e,t,i,r,a){let n=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],u=t[a*3+1];return[new te(n,s),new te(o,l),new te(h,u)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],u=t[r*3+1],p=t[r*3+2],c=t[a*3],f=t[a*3+1],x=t[a*3+2],y=t[n*3],m=t[n*3+1],d=t[n*3+2];return Math.abs(o-u)<Math.abs(s-h)?[new te(s,1-l),new te(h,1-p),new te(c,1-x),new te(y,1-d)]:[new te(o,1-l),new te(u,1-p),new te(f,1-x),new te(m,1-d)]}};function Mp(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var nl=class Tu extends Ba{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,n,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Tu(t.radius,t.detail)}},Sp=class Eu extends ct{constructor(t=[new te(0,-.5),new te(.5,0),new te(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=$e(a,0,Math.PI*2);let n=[],s=[],o=[],l=[],h=[],u=1/i,p=new R,c=new te,f=new R,x=new R,y=new R,m=0,d=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:m=t[T+1].x-t[T].x,d=t[T+1].y-t[T].y,f.x=d*1,f.y=-m,f.z=d*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[T+1].x-t[T].x,d=t[T+1].y-t[T].y,f.x=d*1,f.y=-m,f.z=d*0,x.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(x)}for(let T=0;T<=i;T++){let w=r+T*u*a,_=Math.sin(w),E=Math.cos(w);for(let A=0;A<=t.length-1;A++){p.x=t[A].x*_,p.y=t[A].y,p.z=t[A].x*E,s.push(p.x,p.y,p.z),c.x=T/i,c.y=A/(t.length-1),o.push(c.x,c.y);let C=l[3*A+0]*_,g=l[3*A+1],b=l[3*A+0]*E;h.push(C,g,b)}}for(let T=0;T<i;T++)for(let w=0;w<t.length-1;w++){let _=w+T*t.length,E=_,A=_+t.length,C=_+t.length+1,g=_+1;n.push(E,A,g),n.push(C,g,A)}this.setIndex(n),this.setAttribute("position",new He(s,3)),this.setAttribute("uv",new He(o,2)),this.setAttribute("normal",new He(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eu(t.points,t.segments,t.phiStart,t.phiLength)}},bp=class wu extends Ba{constructor(t=1,i=0){let r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new wu(t.radius,t.detail)}},za=class Au extends ct{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,u=l+1,p=t/o,c=i/l,f=[],x=[],y=[],m=[];for(let d=0;d<u;d++){let T=d*c-s;for(let w=0;w<h;w++){let _=w*p-n;x.push(_,-T,0),y.push(0,0,1),m.push(w/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){let w=T+h*d,_=T+h*(d+1),E=T+1+h*(d+1),A=T+1+h*d;f.push(w,_,A),f.push(_,E,A)}this.setIndex(f),this.setAttribute("position",new He(x,3)),this.setAttribute("normal",new He(y,3)),this.setAttribute("uv",new He(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Au(t.width,t.height,t.widthSegments,t.heightSegments)}},Tp=class Cu extends ct{constructor(t=.5,i=1,r=32,a=1,n=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:n,thetaLength:s},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],h=[],u=[],p=t,c=(i-t)/a,f=new R,x=new te;for(let y=0;y<=a;y++){for(let m=0;m<=r;m++){let d=n+m/r*s;f.x=p*Math.cos(d),f.y=p*Math.sin(d),l.push(f.x,f.y,f.z),h.push(0,0,1),x.x=(f.x/i+1)/2,x.y=(f.y/i+1)/2,u.push(x.x,x.y)}p+=c}for(let y=0;y<a;y++){let m=y*(r+1);for(let d=0;d<r;d++){let T=d+m,w=T,_=T+r+1,E=T+r+2,A=T+1;o.push(w,_,A),o.push(_,E,A)}}this.setIndex(o),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ep=class Ru extends ct{constructor(t=new vu([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new He(a,3)),this.setAttribute("normal",new He(n,3)),this.setAttribute("uv",new He(s,2));function h(u){let p=a.length/3,c=u.extractPoints(i),f=c.shape,x=c.holes;nr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,d=x.length;m<d;m++){let T=x[m];nr.isClockWise(T)===!0&&(x[m]=T.reverse())}let y=nr.triangulateShape(f,x);for(let m=0,d=x.length;m<d;m++){let T=x[m];f=f.concat(T)}for(let m=0,d=f.length;m<d;m++){let T=f[m];a.push(T.x,T.y,0),n.push(0,0,1),s.push(T.x,T.y)}for(let m=0,d=y.length;m<d;m++){let T=y[m],w=T[0]+p,_=T[1]+p,E=T[2]+p;r.push(w,_,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return wp(i,t)}static fromJSON(t,i){let r=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=i[t.shapes[a]];r.push(s)}return new Ru(r,t.curveSegments)}};function wp(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var Ap=class Pu extends ct{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),h=0,u=[],p=new R,c=new R,f=[],x=[],y=[],m=[];for(let d=0;d<=r;d++){let T=[],w=d/r,_=s+w*o,E=t*Math.cos(_),A=Math.sqrt(t*t-E*E),C=0;d===0&&s===0?C=.5/i:d===r&&l===Math.PI&&(C=-.5/i);for(let g=0;g<=i;g++){let b=g/i,D=a+b*n;p.x=-A*Math.cos(D),p.y=E,p.z=A*Math.sin(D),x.push(p.x,p.y,p.z),c.copy(p).normalize(),y.push(c.x,c.y,c.z),m.push(b+C,1-w),T.push(h++)}u.push(T)}for(let d=0;d<r;d++)for(let T=0;T<i;T++){let w=u[d][T+1],_=u[d][T],E=u[d+1][T],A=u[d+1][T+1];(d!==0||s>0)&&f.push(w,_,A),(d!==r-1||l<Math.PI)&&f.push(_,E,A)}this.setIndex(f),this.setAttribute("position",new He(x,3)),this.setAttribute("normal",new He(y,3)),this.setAttribute("uv",new He(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Cp=class Iu extends Ba{constructor(t=1,i=0){let r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,a,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Iu(t.radius,t.detail)}},Rp=class Lu extends ct{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let l=[],h=[],u=[],p=[],c=new R,f=new R,x=new R;for(let y=0;y<=r;y++){let m=s+y/r*o;for(let d=0;d<=a;d++){let T=d/a*n;f.x=(t+i*Math.cos(m))*Math.cos(T),f.y=(t+i*Math.cos(m))*Math.sin(T),f.z=i*Math.sin(m),h.push(f.x,f.y,f.z),c.x=t*Math.cos(T),c.y=t*Math.sin(T),x.subVectors(f,c).normalize(),u.push(x.x,x.y,x.z),p.push(d/a),p.push(y/r)}}for(let y=1;y<=r;y++)for(let m=1;m<=a;m++){let d=(a+1)*y+m-1,T=(a+1)*(y-1)+m-1,w=(a+1)*(y-1)+m,_=(a+1)*y+m;l.push(d,T,_),l.push(T,w,_)}this.setIndex(l),this.setAttribute("position",new He(h,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Pp=class Du extends ct{constructor(t=1,i=.4,r=64,a=8,n=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:r,radialSegments:a,p:n,q:s},r=Math.floor(r),a=Math.floor(a);let o=[],l=[],h=[],u=[],p=new R,c=new R,f=new R,x=new R,y=new R,m=new R,d=new R;for(let w=0;w<=r;++w){let _=w/r*n*Math.PI*2;T(_,n,s,t,f),T(_+.01,n,s,t,x),m.subVectors(x,f),d.addVectors(x,f),y.crossVectors(m,d),d.crossVectors(y,m),y.normalize(),d.normalize();for(let E=0;E<=a;++E){let A=E/a*Math.PI*2,C=-i*Math.cos(A),g=i*Math.sin(A);p.x=f.x+(C*d.x+g*y.x),p.y=f.y+(C*d.y+g*y.y),p.z=f.z+(C*d.z+g*y.z),l.push(p.x,p.y,p.z),c.subVectors(p,f).normalize(),h.push(c.x,c.y,c.z),u.push(w/r),u.push(E/a)}}for(let w=1;w<=r;w++)for(let _=1;_<=a;_++){let E=(a+1)*(w-1)+(_-1),A=(a+1)*w+(_-1),C=(a+1)*w+_,g=(a+1)*(w-1)+_;o.push(E,A,g),o.push(A,C,g)}this.setIndex(o),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(u,2));function T(w,_,E,A,C){let g=Math.cos(w),b=Math.sin(w),D=E/_*w,P=Math.cos(D);C.x=A*(2+P)*.5*g,C.y=A*(2+P)*b*.5,C.z=A*Math.sin(D)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Du(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Ip=class Uu extends ct{constructor(t=new mu(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new R,l=new R,h=new te,u=new R,p=[],c=[],f=[],x=[];y(),this.setIndex(x),this.setAttribute("position",new He(p,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(f,2));function y(){for(let w=0;w<i;w++)m(w);m(n===!1?i:0),T(),d()}function m(w){u=t.getPointAt(w/i,u);let _=s.normals[w],E=s.binormals[w];for(let A=0;A<=a;A++){let C=A/a*Math.PI*2,g=Math.sin(C),b=-Math.cos(C);l.x=b*_.x+g*E.x,l.y=b*_.y+g*E.y,l.z=b*_.z+g*E.z,l.normalize(),c.push(l.x,l.y,l.z),o.x=u.x+r*l.x,o.y=u.y+r*l.y,o.z=u.z+r*l.z,p.push(o.x,o.y,o.z)}}function d(){for(let w=1;w<=i;w++)for(let _=1;_<=a;_++){let E=(a+1)*(w-1)+(_-1),A=(a+1)*w+(_-1),C=(a+1)*w+_,g=(a+1)*(w-1)+_;x.push(E,A,g),x.push(A,C,g)}}function T(){for(let w=0;w<=i;w++)for(let _=0;_<=a;_++)h.x=w/i,h.y=_/a,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Uu(new Wn[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Lp=class extends ct{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new R,a=new R;if(e.index!==null){let n=e.attributes.position,s=e.index,o=e.groups;o.length===0&&(o=[{start:0,count:s.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let u=o[l],p=u.start,c=u.count;for(let f=p,x=p+c;f<x;f+=3)for(let y=0;y<3;y++){let m=s.getX(f+y),d=s.getX(f+(y+1)%3);r.fromBufferAttribute(n,m),a.fromBufferAttribute(n,d),eh(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let n=e.attributes.position;for(let s=0,o=n.count/3;s<o;s++)for(let l=0;l<3;l++){let h=3*s+l,u=3*s+(l+1)%3;r.fromBufferAttribute(n,h),a.fromBufferAttribute(n,u),eh(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new He(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function eh(e,t,i){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(r)===!0||i.has(a)===!0?!1:(i.add(r),i.add(a),!0)}var Q_=Object.freeze({__proto__:null,BoxGeometry:is,CapsuleGeometry:Bd,CircleGeometry:zd,ConeGeometry:Gd,CylinderGeometry:rs,DodecahedronGeometry:Vd,EdgesGeometry:Hd,ExtrudeGeometry:xp,IcosahedronGeometry:nl,LatheGeometry:Sp,OctahedronGeometry:bp,PlaneGeometry:za,PolyhedronGeometry:Ba,RingGeometry:Tp,ShapeGeometry:Ep,SphereGeometry:Ap,TetrahedronGeometry:Cp,TorusGeometry:Rp,TorusKnotGeometry:Pp,TubeGeometry:Ip,WireframeGeometry:Lp});function ea(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(th(a))a.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(th(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function zt(e){let t={};for(let i=0;i<e.length;i++){let r=ea(e[i]);for(let a in r)t[a]=r[a]}return t}function th(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Dp(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Nu(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:et.workingColorSpace}var bi={clone:ea,merge:zt},Up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gt=class extends pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Up,this.fragmentShader=Np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=Dp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(r.value);break;case"v2":this.uniforms[i].value=new te().fromArray(r.value);break;case"v3":this.uniforms[i].value=new R().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ft().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ke().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},sl=class extends gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ou=class extends pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Op=class extends pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fp=class extends pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Dr(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Ws(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ga=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Bp=class extends Ga{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_l,endingEnd:_l}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case xl:a=e,s=2*t-i;break;case yl:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case xl:n=e,o=2*i-t;break;case yl:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,c=this._weightNext,f=(i-t)/(r-t),x=f*f,y=x*f,m=-p*y+2*p*x-p*f,d=(1+p)*y+(-1.5-2*p)*x+(-.5+p)*f+1,T=(-1-c)*y+(1.5+c)*x+.5*f,w=c*y-c*x;for(let _=0;_!==s;++_)a[_]=m*n[h+_]+d*n[l+_]+T*n[o+_]+w*n[u+_];return a}},zp=class extends Ga{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),u=1-h;for(let p=0;p!==s;++p)a[p]=n[l+p]*u+n[o+p]*h;return a}},Gp=class extends Ga{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Vp=class extends Ga{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this.inTangents,u=this.outTangents;if(!h||!u){let f=(i-t)/(r-t),x=1-f;for(let y=0;y!==s;++y)a[y]=n[l+y]*x+n[o+y]*f;return a}let p=s*2,c=e-1;for(let f=0;f!==s;++f){let x=n[l+f],y=n[o+f],m=c*p+f*2,d=u[m],T=u[m+1],w=e*p+f*2,_=h[w],E=h[w+1],A=kp(i,t,d,_,r);a[f]=Fu(A,x,T,E,y)}return a}};function Fu(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function Hp(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function kp(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=Fu(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=Hp(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}var Ti=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dr(t,this.TimeBufferType),this.values=Dr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Dr(e.times,Array),values:Dr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Ws(e.settings)&&(i.settings={inTangents:Dr(e.settings.inTangents,Array),outTangents:Dr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Gp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vp(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case zn:t=this.InterpolantFactoryMethodDiscrete;break;case Bo:t=this.InterpolantFactoryMethodLinear;break;case vs:t=this.InterpolantFactoryMethodSmooth;break;case vl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ge("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zn;case this.InterpolantFactoryMethodLinear:return Bo;case this.InterpolantFactoryMethodSmooth:return vs;case this.InterpolantFactoryMethodBezier:return vl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Ws(this.settings)&&(ih(this.settings.inTangents,e),ih(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){Ve("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){Ve("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&Wc(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){Ve("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===vs,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(r)o=!0;else{let u=s*i,p=u-i,c=u+i;for(let f=0;f!==i;++f){let x=t[u+f];if(x!==t[p+f]||x!==t[c+f]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let u=s*i,p=n*i;for(let c=0;c!==i;++c)t[p+c]=t[u+c]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ws(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ih(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}Ti.prototype.ValueTypeName="";Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=Bo;var Va=class extends Ti{constructor(e,t,i){super(e,t,i)}};Va.prototype.ValueTypeName="bool";Va.prototype.ValueBufferType=Array;Va.prototype.DefaultInterpolation=zn;Va.prototype.InterpolantFactoryMethodLinear=void 0;Va.prototype.InterpolantFactoryMethodSmooth=void 0;var Wp=class extends Ti{constructor(e,t,i,r){super(e,t,i,r)}};Wp.prototype.ValueTypeName="color";var Xp=class extends Ti{constructor(e,t,i,r){super(e,t,i,r)}};Xp.prototype.ValueTypeName="number";var jp=class extends Ga{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let h=l+s;l!==h;l+=4)Zt.slerpFlat(a,0,n,l-s,n,l,o);return a}},Bu=class extends Ti{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new jp(this.times,this.values,this.getValueSize(),e)}};Bu.prototype.ValueTypeName="quaternion";Bu.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Ti{constructor(e,t,i){super(e,t,i)}};Ha.prototype.ValueTypeName="string";Ha.prototype.ValueBufferType=Array;Ha.prototype.DefaultInterpolation=zn;Ha.prototype.InterpolantFactoryMethodLinear=void 0;Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var qp=class extends Ti{constructor(e,t,i,r){super(e,t,i,r)}};qp.prototype.ValueTypeName="vector";var Yp=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){s++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let c=l[u],f=l[u+1];if(c.global&&(c.lastIndex=0),c.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zp=new Yp,Kp=class{constructor(e){this.manager=e!==void 0?e:Zp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Kp.DEFAULT_MATERIAL_NAME="__DEFAULT";var zu=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Gu=class extends zu{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Xs=new Ke,rh=new R,ah=new R,Jp=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;rh.setFromMatrixPosition(e.matrixWorld),t.position.copy(rh),ah.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ah),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Xs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Xs,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===Ia||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(Xs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},En=new R,wn=new Zt,vi=new R,ol=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(En,wn,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(En,wn,vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(En,wn,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(En,wn,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new R,nh=new te,sh=new te,qt=class extends ol{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=La*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return La*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,nh,sh),t.subVectors(sh,nh)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(kr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ka=class extends ol{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$p=class extends Jp{constructor(){super(new ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vu=class extends zu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new $p}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ex=new Ke,tx=new Ke,ix=new Ke;var Ur=-90,Nr=1,Qp=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qt(Ur,Nr,e,t);r.layers=this.layers,this.add(r);let a=new qt(Ur,Nr,e,t);a.layers=this.layers,this.add(a);let n=new qt(Ur,Nr,e,t);n.layers=this.layers,this.add(n);let s=new qt(Ur,Nr,e,t);s.layers=this.layers,this.add(s);let o=new qt(Ur,Nr,e,t);o.layers=this.layers,this.add(o);let l=new qt(Ur,Nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,p,c),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},ef=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Hu=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=tf.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function tf(){this._document.hidden===!1&&this.reset()}var rx=new R,ax=new Zt,nx=new R,sx=new R,ox=new R;var lx=new R,hx=new Zt,ux=new R,cx=new R;var ll="\\[\\]\\.:\\/",rf=new RegExp("["+ll+"]","g"),hl="[^"+ll+"]",af="[^"+ll.replace("\\.","")+"]",nf=/((?:WC+[\/:])*)/.source.replace("WC",hl),sf=/(WCOD+)?/.source.replace("WCOD",af),of=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hl),lf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hl),hf=new RegExp("^"+nf+sf+of+lf+"$"),uf=["material","materials","bones","map"],cf=class{constructor(e,t,i){let r=i||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},xt=class zr{constructor(t,i,r){this.path=i,this.parsedPath=r||zr.parseTrackName(i),this.node=zr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new zr.Composite(t,i,r):new zr(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rf,"")}static parseTrackName(t){let i=hf.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);uf.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=zr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=i.nodeName;Ve("PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=cf;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dx=new Float32Array(1);var px=new Ke;var Zr,fx=(Zr=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},Zr.prototype.isMatrix2=!0,Zr),mx=new te;var gx=new R,vx=new R,_x=new R,xx=new R,yx=new R,Mx=new R,Sx=new R;var bx=new R;var Tx=new R,Ex=new Ke,wx=new Ke;var Ax=new R,Cx=new Xe,Rx=new Xe;var Px=new R,Ix=new R,Lx=new R;var Dx=new R,Ux=new ol;var Nx=new Oi;var Ox=new R;function oh(e,t,i,r){let a=df(r);switch(i){case Bh:return e*t;case Yo:return e*t/a.components*a.byteLength;case Zo:return e*t/a.components*a.byteLength;case ur:return e*t*2/a.components*a.byteLength;case Ko:return e*t*2/a.components*a.byteLength;case zh:return e*t*3/a.components*a.byteLength;case ui:return e*t*4/a.components*a.byteLength;case Jo:return e*t*4/a.components*a.byteLength;case Pn:case In:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ln:case Dn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case lo:case uo:return Math.max(e,16)*Math.max(t,8)/4;case oo:case ho:return Math.max(e,8)*Math.max(t,8)/2;case co:case po:case mo:case go:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fo:case Fn:case vo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case yo:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case So:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case bo:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case To:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case wo:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Co:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Po:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Io:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Lo:case Do:case Uo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case No:case Oo:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Bn:case Fo:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function df(e){switch(e){case Yt:case Uh:return{byteLength:1,components:1};case Ra:case Nh:case Nt:return{byteLength:2,components:1};case jo:case qo:return{byteLength:2,components:4};case Mi:case Xo:case hi:return{byteLength:4,components:1};case Oh:case Fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ku(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function pf(e){let t=new WeakMap;function i(o,l){let h=o.array,u=o.usage,p=h.byteLength,c=e.createBuffer();e.bindBuffer(l,c),e.bufferData(l,h,u),o.onUploadCallback();let f;if(h instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=e.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=e.SHORT;else if(h instanceof Uint32Array)f=e.UNSIGNED_INT;else if(h instanceof Int32Array)f=e.INT;else if(h instanceof Int8Array)f=e.BYTE;else if(h instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:p}}function r(o,l,h){let u=l.array,p=l.updateRanges;if(e.bindBuffer(h,o),p.length===0)e.bufferSubData(h,0,u);else{p.sort((f,x)=>f.start-x.start);let c=0;for(let f=1;f<p.length;f++){let x=p[c],y=p[f];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++c,p[c]=y)}p.length=c+1;for(let f=0,x=p.length;f<x;f++){let y=p[f];e.bufferSubData(h,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}var ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mf=`#ifdef USE_ALPHAHASH
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
#endif`,gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_f=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yf=`#ifdef USE_AOMAP
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
#endif`,Mf=`#ifdef USE_AOMAP
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
#endif`,bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Af=`#ifdef USE_IRIDESCENCE
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
#endif`,Cf=`#ifdef USE_BUMPMAP
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ff=`#define PI 3.141592653589793
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
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zf=`vec3 transformedNormal = objectNormal;
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
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
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
}`,im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sm=`#ifdef USE_ENVMAP
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
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hm=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cm=`PhysicalMaterial material;
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
#endif`,dm=`uniform sampler2D dfgLUT;
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
}`,pm=`
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
#endif`,fm=`#if defined( RE_IndirectDiffuse )
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tm=`#if defined( USE_POINTS_UV )
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
#endif`,Em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
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
#endif`,Im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fm=`#ifdef USE_NORMALMAP
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
#endif`,Bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qm=`float getShadowMask() {
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
}`,eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,og=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lg=`#ifdef USE_TRANSMISSION
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
#endif`,hg=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mg=`uniform sampler2D t2D;
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
}`,gg=`varying vec3 vWorldDirection;
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
}`,_g=`varying vec3 vWorldDirection;
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
}`,yg=`#include <common>
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
}`,Mg=`#if DEPTH_PACKING == 3200
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
}`,bg=`#define DISTANCE
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`uniform float scale;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Cg=`#include <common>
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Pg=`#define LAMBERT
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
}`,Ig=`#define LAMBERT
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
}`,Lg=`#define MATCAP
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
}`,Dg=`#define MATCAP
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
}`,Ng=`#define NORMAL
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
}`,Og=`#define PHONG
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
}`,Fg=`#define PHONG
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
}`,Bg=`#define STANDARD
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
}`,zg=`#define STANDARD
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
}`,Gg=`#define TOON
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
}`,Vg=`#define TOON
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
}`,kg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,Xg=`uniform vec3 color;
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
}`,jg=`uniform float rotation;
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
}`,qg=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:ff,alphahash_pars_fragment:mf,alphamap_fragment:gf,alphamap_pars_fragment:vf,alphatest_fragment:_f,alphatest_pars_fragment:xf,aomap_fragment:yf,aomap_pars_fragment:Mf,batching_pars_vertex:Sf,batching_vertex:bf,begin_vertex:Tf,beginnormal_vertex:Ef,bsdfs:wf,iridescence_fragment:Af,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Pf,clipping_planes_pars_vertex:If,clipping_planes_vertex:Lf,color_fragment:Df,color_pars_fragment:Uf,color_pars_vertex:Nf,color_vertex:Of,common:Ff,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:zf,displacementmap_pars_vertex:Gf,displacementmap_vertex:Vf,emissivemap_fragment:Hf,emissivemap_pars_fragment:kf,colorspace_fragment:Wf,colorspace_pars_fragment:Xf,envmap_fragment:jf,envmap_common_pars_fragment:qf,envmap_pars_fragment:Yf,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:sm,envmap_vertex:Kf,fog_vertex:Jf,fog_pars_vertex:$f,fog_fragment:Qf,fog_pars_fragment:em,gradientmap_pars_fragment:tm,lightmap_pars_fragment:im,lights_lambert_fragment:rm,lights_lambert_pars_fragment:am,lights_pars_begin:nm,lights_toon_fragment:om,lights_toon_pars_fragment:lm,lights_phong_fragment:hm,lights_phong_pars_fragment:um,lights_physical_fragment:cm,lights_physical_pars_fragment:dm,lights_fragment_begin:pm,lights_fragment_maps:fm,lights_fragment_end:mm,lightprobes_pars_fragment:gm,logdepthbuf_fragment:vm,logdepthbuf_pars_fragment:_m,logdepthbuf_pars_vertex:xm,logdepthbuf_vertex:ym,map_fragment:Mm,map_pars_fragment:Sm,map_particle_fragment:bm,map_particle_pars_fragment:Tm,metalnessmap_fragment:Em,metalnessmap_pars_fragment:wm,morphinstance_vertex:Am,morphcolor_vertex:Cm,morphnormal_vertex:Rm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Im,normal_fragment_begin:Lm,normal_fragment_maps:Dm,normal_pars_fragment:Um,normal_pars_vertex:Nm,normal_vertex:Om,normalmap_pars_fragment:Fm,clearcoat_normal_fragment_begin:Bm,clearcoat_normal_fragment_maps:zm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Vm,opaque_fragment:Hm,packing:km,premultiplied_alpha_fragment:Wm,project_vertex:Xm,dithering_fragment:jm,dithering_pars_fragment:qm,roughnessmap_fragment:Ym,roughnessmap_pars_fragment:Zm,shadowmap_pars_fragment:Km,shadowmap_pars_vertex:Jm,shadowmap_vertex:$m,shadowmask_pars_fragment:Qm,skinbase_vertex:eg,skinning_pars_vertex:tg,skinning_vertex:ig,skinnormal_vertex:rg,specularmap_fragment:ag,specularmap_pars_fragment:ng,tonemapping_fragment:sg,tonemapping_pars_fragment:og,transmission_fragment:lg,transmission_pars_fragment:hg,uv_pars_fragment:ug,uv_pars_vertex:cg,uv_vertex:dg,worldpos_vertex:pg,background_vert:fg,background_frag:mg,backgroundCube_vert:gg,backgroundCube_frag:vg,cube_vert:_g,cube_frag:xg,depth_vert:yg,depth_frag:Mg,distance_vert:Sg,distance_frag:bg,equirect_vert:Tg,equirect_frag:Eg,linedashed_vert:wg,linedashed_frag:Ag,meshbasic_vert:Cg,meshbasic_frag:Rg,meshlambert_vert:Pg,meshlambert_frag:Ig,meshmatcap_vert:Lg,meshmatcap_frag:Dg,meshnormal_vert:Ug,meshnormal_frag:Ng,meshphong_vert:Og,meshphong_frag:Fg,meshphysical_vert:Bg,meshphysical_frag:zg,meshtoon_vert:Gg,meshtoon_frag:Vg,points_vert:Hg,points_frag:kg,shadow_vert:Wg,shadow_frag:Xg,sprite_vert:jg,sprite_frag:qg},xe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},xi={basic:{uniforms:zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:zt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:zt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:zt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:zt([xe.points,xe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:zt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:zt([xe.common,xe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:zt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:zt([xe.sprite,xe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:zt([xe.common,xe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:zt([xe.lights,xe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};xi.physical={uniforms:zt([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var An={r:0,b:0,g:0},Yg=new Ke,Wu=new Ye;Wu.set(-1,0,0,0,1,0,0,0,1);function Zg(e,t,i,r,a,n){let s=new Xe(0),o=a===!0?0:1,l,h,u=null,p=0,c=null;function f(T){let w=T.isScene===!0?T.background:null;if(w&&w.isTexture){let _=T.backgroundBlurriness>0;w=t.get(w,_)}return w}function x(T){let w=!1,_=f(T);_===null?m(s,o):_&&_.isColor&&(m(_,1),w=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,n):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function y(T,w){let _=f(w);_&&(_.isCubeTexture||_.mapping===$n)?(h===void 0&&(h=new Pt(new is(1,1,1),new gt({name:"BackgroundCubeMaterial",uniforms:ea(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Wu),h.material.toneMapped=et.getTransfer(_.colorSpace)!==st,(u!==_||p!==_.version||c!==e.toneMapping)&&(h.material.needsUpdate=!0,u=_,p=_.version,c=e.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Pt(new za(2,2),new gt({name:"BackgroundMaterial",uniforms:ea(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=et.getTransfer(_.colorSpace)!==st,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||p!==_.version||c!==e.toneMapping)&&(l.material.needsUpdate=!0,u=_,p=_.version,c=e.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,w){T.getRGB(An,Nu(e)),i.buffers.color.setClear(An.r,An.g,An.b,w,n)}function d(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(T,w=1){s.set(T),o=w,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(s,o)},render:x,addToRenderList:y,dispose:d}}function Kg(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=c(null),n=a,s=!1;function o(P,N,q,U,G){let K=!1,H=p(P,U,q,N);n!==H&&(n=H,h(n.object)),K=f(P,U,q,G),K&&x(P,U,q,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,_(P,N,q,U),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function h(P){return e.bindVertexArray(P)}function u(P){return e.deleteVertexArray(P)}function p(P,N,q,U){let G=U.wireframe===!0,K=r[N.id];K===void 0&&(K={},r[N.id]=K);let H=P.isInstancedMesh===!0?P.id:0,de=K[H];de===void 0&&(de={},K[H]=de);let Y=de[q.id];Y===void 0&&(Y={},de[q.id]=Y);let Z=Y[G];return Z===void 0&&(Z=c(l()),Y[G]=Z),Z}function c(P){let N=[],q=[],U=[];for(let G=0;G<i;G++)N[G]=0,q[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:U,object:P,attributes:{},index:null}}function f(P,N,q,U){let G=n.attributes,K=N.attributes,H=0,de=q.getAttributes();for(let Y in de)if(de[Y].location>=0){let Z=G[Y],ie=K[Y];if(ie===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),Z===void 0||Z.attribute!==ie||ie&&Z.data!==ie.data)return!0;H++}return n.attributesNum!==H||n.index!==U}function x(P,N,q,U){let G={},K=N.attributes,H=0,de=q.getAttributes();for(let Y in de)if(de[Y].location>=0){let Z=K[Y];Z===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));let ie={};ie.attribute=Z,Z&&Z.data&&(ie.data=Z.data),G[Y]=ie,H++}n.attributes=G,n.attributesNum=H,n.index=U}function y(){let P=n.newAttributes;for(let N=0,q=P.length;N<q;N++)P[N]=0}function m(P){d(P,0)}function d(P,N){let q=n.newAttributes,U=n.enabledAttributes,G=n.attributeDivisors;q[P]=1,U[P]===0&&(e.enableVertexAttribArray(P),U[P]=1),G[P]!==N&&(e.vertexAttribDivisor(P,N),G[P]=N)}function T(){let P=n.newAttributes,N=n.enabledAttributes;for(let q=0,U=N.length;q<U;q++)N[q]!==P[q]&&(e.disableVertexAttribArray(q),N[q]=0)}function w(P,N,q,U,G,K,H){H===!0?e.vertexAttribIPointer(P,N,q,G,K):e.vertexAttribPointer(P,N,q,U,G,K)}function _(P,N,q,U){y();let G=U.attributes,K=q.getAttributes(),H=N.defaultAttributeValues;for(let de in K){let Y=K[de];if(Y.location>=0){let Z=G[de];if(Z===void 0&&(de==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),de==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){let ie=Z.normalized,Oe=Z.itemSize,Ee=t.get(Z);if(Ee===void 0)continue;let tt=Ee.buffer,ue=Ee.type,W=Ee.bytesPerElement,Q=ue===e.INT||ue===e.UNSIGNED_INT||Z.gpuType===Xo;if(Z.isInterleavedBufferAttribute){let re=Z.data,Ce=re.stride,Ie=Z.offset;if(re.isInstancedInterleavedBuffer){for(let fe=0;fe<Y.locationSize;fe++)d(Y.location+fe,re.meshPerAttribute);P.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let fe=0;fe<Y.locationSize;fe++)m(Y.location+fe);e.bindBuffer(e.ARRAY_BUFFER,tt);for(let fe=0;fe<Y.locationSize;fe++)w(Y.location+fe,Oe/Y.locationSize,ue,ie,Ce*W,(Ie+Oe/Y.locationSize*fe)*W,Q)}else{if(Z.isInstancedBufferAttribute){for(let re=0;re<Y.locationSize;re++)d(Y.location+re,Z.meshPerAttribute);P.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let re=0;re<Y.locationSize;re++)m(Y.location+re);e.bindBuffer(e.ARRAY_BUFFER,tt);for(let re=0;re<Y.locationSize;re++)w(Y.location+re,Oe/Y.locationSize,ue,ie,Oe*W,Oe/Y.locationSize*re*W,Q)}}else if(H!==void 0){let ie=H[de];if(ie!==void 0)switch(ie.length){case 2:e.vertexAttrib2fv(Y.location,ie);break;case 3:e.vertexAttrib3fv(Y.location,ie);break;case 4:e.vertexAttrib4fv(Y.location,ie);break;default:e.vertexAttrib1fv(Y.location,ie)}}}}T()}function E(){b();for(let P in r){let N=r[P];for(let q in N){let U=N[q];for(let G in U){let K=U[G];for(let H in K)u(K[H].object),delete K[H];delete U[G]}}delete r[P]}}function A(P){if(r[P.id]===void 0)return;let N=r[P.id];for(let q in N){let U=N[q];for(let G in U){let K=U[G];for(let H in K)u(K[H].object),delete K[H];delete U[G]}}delete r[P.id]}function C(P){for(let N in r){let q=r[N];for(let U in q){let G=q[U];if(G[P.id]===void 0)continue;let K=G[P.id];for(let H in K)u(K[H].object),delete K[H];delete G[P.id]}}}function g(P){for(let N in r){let q=r[N],U=P.isInstancedMesh===!0?P.id:0,G=q[U];if(G!==void 0){for(let K in G){let H=G[K];for(let de in H)u(H[de].object),delete H[de];delete G[K]}delete q[U],Object.keys(q).length===0&&delete r[N]}}}function b(){D(),s=!0,n!==a&&(n=a,h(n.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:b,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:T}}function Jg(e,t,i){let r;function a(l){r=l}function n(l,h){e.drawArrays(r,l,h),i.update(h,r,1)}function s(l,h,u){u!==0&&(e.drawArraysInstanced(r,l,h,u),i.update(h,r,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,u);let p=0;for(let c=0;c<u;c++)p+=h[c];i.update(p,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function $g(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(C){return!(C!==ui&&r.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let g=C===Nt&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Yt&&C!==hi&&!g&&r.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",u=l(h);u!==h&&(Ge("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let p=i.logarithmicDepthBuffer===!0,c=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&c===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),T=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),w=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:c,maxTextures:f,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:_,maxSamples:E,samples:A}}function Qg(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Xi,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c){let f=p.length!==0||c||r!==0||a;return a=c,r=p.length,f},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(p,c){i=u(p,c,0)},this.setState=function(p,c,f){let x=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,d=e.get(p);if(!a||x===null||x.length===0||n&&!m)n?u(null):h();else{let T=n?0:r,w=T*4,_=d.clippingState||null;l.value=_,_=u(x,c,w,f);for(let E=0;E!==w;++E)_[E]=i[E];d.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(p,c,f,x){let y=p!==null?p.length:0,m=null;if(y!==0){if(m=l.value,x!==!0||m===null){let d=f+y*4,T=c.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,_=f;w!==y;++w,_+=4)s.copy(p[w]).applyMatrix4(T,o),s.normal.toArray(m,_),m[_+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Vr=4,e0=6,t0=20,i0=256,ya=new ka,lh=new Xe,js=null,qs=0,Ys=0,Zs=!1,r0=new R,ir=new R,hh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=r0}=a;js=this._renderer.getRenderTarget(),qs=this._renderer.getActiveCubeFace(),Ys=this._renderer.getActiveMipmapLevel(),Zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(js,qs,Ys),this._renderer.xr.enabled=Zs,e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===Kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),js=this._renderer.getRenderTarget(),qs=this._renderer.getActiveCubeFace(),Ys=this._renderer.getActiveMipmapLevel(),Zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Nt,format:ui,colorSpace:Gn,depthBuffer:!1},r=uh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uh(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=a0(a)),this._blurMaterial=s0(a,e,t),this._ggxMaterial=n0(a,e,t)}return r}_compileMaterial(e){let t=new Pt(new ct,e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,i,r,a){let n=new qt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(lh),l.toneMapping=ri,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new is,new ts({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));let p=this._backgroundBox,c=p.material,f=!1,x=e.background;x?x.isColor&&(c.color.copy(x),e.background=null,f=!0):(c.color.copy(lh),f=!0);for(let y=0;y<6;y++){let m=y%3;m===0?(n.up.set(0,s[y],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[y],a.y,a.z)):m===1?(n.up.set(0,0,s[y]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[y],a.z)):(n.up.set(0,s[y],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[y]));let d=this._cubeSize;Or(r,m*d,y>2?d:0,d,d),l.setRenderTarget(r),f&&l.render(p,n),l.render(e,n)}l.toneMapping=u,l.autoClear=h,e.background=x}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===hr||e.mapping===Kr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Or(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,ya)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),p=l*1.25,c=u*p,{_lodMax:f}=this,x=this._sizeLods[i],y=3*x*(i>f-Vr?i-f+Vr:0),m=4*(this._cubeSize-x);o.envMap.value=e.texture,o.roughness.value=c,o.mipInt.value=f-t,Or(a,y,m,3*x,2*x),r.setRenderTarget(a),r.render(s,ya),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=f-i,Or(e,y,m,3*x,2*x),r.setRenderTarget(e),r.render(s,ya)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let l=s.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-Vr?r-this._lodMax+Vr:0),p=4*(this._cubeSize-h);Or(t,u,p,3*h,2*h),n.setRenderTarget(t),n.render(o,ya)}};function a0(e){let t=[],i=[],r=e,a=e-Vr+1+e0;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let o=1/(s-2),l=-o,h=1+o,u=[l,l,h,l,h,h,l,l,h,h,l,h],p=6,c=6,f=3,x=new Float32Array(f*c*p),y=new Float32Array(f*c*p);for(let d=0;d<p;d++){let T=d%3*2/3-1,w=d>2?0:-1,_=[T,w,0,T+2/3,w,0,T+2/3,w+1,0,T,w,0,T+2/3,w+1,0,T,w+1,0];x.set(_,f*c*d);for(let E=0;E<c;E++){let A=u[E*2]*2-1,C=u[E*2+1]*2-1;d===0?ir.set(1,C,A):d===1?ir.set(-A,1,-C):d===2?ir.set(-A,C,1):d===3?ir.set(-1,C,-A):d===4?ir.set(-A,-1,C):ir.set(A,C,-1),ir.toArray(y,(d*c+E)*f)}}let m=new ct;m.setAttribute("position",new Ut(x,f)),m.setAttribute("outputDirection",new Ut(y,f)),i.push(new Pt(m,null)),r>Vr&&r--}return{lodMeshes:i,sizeLods:t}}function uh(e,t,i){let r=new Rt(e,t,i);return r.texture.mapping=$n,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Or(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function n0(e,t,i){return new gt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:i0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:as(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function s0(e,t,i){return new gt({name:"SphericalGaussianBlur",defines:{SAMPLES:t0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:as(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function ch(){return new gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:as(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function dh(){return new gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:as(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function as(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Xu=class extends Rt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new iu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new is(5,5,5),a=new gt({name:"CubemapFromEquirect",uniforms:ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:di});a.uniforms.tEquirect.value=t;let n=new Pt(r,a),s=t.minFilter;return t.minFilter===Di&&(t.minFilter=wt),new Qp(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function o0(e){let t=new WeakMap,i=new WeakMap,r=null;function a(c,f=!1){return c==null?null:f?s(c):n(c)}function n(c){if(c&&c.isTexture){let f=c.mapping;if(f===fs||f===ms)if(t.has(c)){let x=t.get(c).texture;return o(x,c.mapping)}else{let x=c.image;if(x&&x.height>0){let y=new Xu(x.height);return y.fromEquirectangularTexture(e,c),t.set(c,y),c.addEventListener("dispose",h),o(y.texture,c.mapping)}else return null}}return c}function s(c){if(c&&c.isTexture){let f=c.mapping,x=f===fs||f===ms,y=f===hr||f===Kr;if(x||y){let m=i.get(c),d=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==d)return r===null&&(r=new hh(e)),m=x?r.fromEquirectangular(c,m):r.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,i.set(c,m),m.texture;if(m!==void 0)return m.texture;{let T=c.image;return x&&T&&T.height>0||y&&T&&l(T)?(r===null&&(r=new hh(e)),m=x?r.fromEquirectangular(c):r.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,i.set(c,m),c.addEventListener("dispose",u),m.texture):null}}}return c}function o(c,f){return f===fs?c.mapping=hr:f===ms&&(c.mapping=Kr),c}function l(c){let f=0,x=6;for(let y=0;y<x;y++)c[y]!==void 0&&f++;return f===x}function h(c){let f=c.target;f.removeEventListener("dispose",h);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function u(c){let f=c.target;f.removeEventListener("dispose",u);let x=i.get(f);x!==void 0&&(i.delete(f),x.dispose())}function p(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:p}}function l0(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Hr("WebGLRenderer: "+r+" extension not supported."),a}}}function h0(e,t,i,r){let a={},n=new WeakMap;function s(p){let c=p.target;c.index!==null&&t.remove(c.index);for(let x in c.attributes)t.remove(c.attributes[x]);c.removeEventListener("dispose",s),delete a[c.id];let f=n.get(c);f&&(t.remove(f),n.delete(c)),r.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,i.memory.geometries--}function o(p,c){return a[c.id]===!0||(c.addEventListener("dispose",s),a[c.id]=!0,i.memory.geometries++),c}function l(p){let c=p.attributes;for(let f in c)t.update(c[f],e.ARRAY_BUFFER)}function h(p){let c=[],f=p.index,x=p.attributes.position,y=0;if(x===void 0)return;if(f!==null){let T=f.array;y=f.version;for(let w=0,_=T.length;w<_;w+=3){let E=T[w+0],A=T[w+1],C=T[w+2];c.push(E,A,A,C,C,E)}}else{let T=x.array;y=x.version;for(let w=0,_=T.length/3-1;w<_;w+=3){let E=w+0,A=w+1,C=w+2;c.push(E,A,A,C,C,E)}}let m=new(x.count>=65535?Zh:Yh)(c,1);m.version=y;let d=n.get(p);d&&t.remove(d),n.set(p,m)}function u(p){let c=n.get(p);if(c){let f=p.index;f!==null&&c.version<f.version&&h(p)}else h(p);return n.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function u0(e,t,i){let r;function a(p){r=p}let n,s;function o(p){n=p.type,s=p.bytesPerElement}function l(p,c){e.drawElements(r,c,n,p*s),i.update(c,r,1)}function h(p,c,f){f!==0&&(e.drawElementsInstanced(r,c,n,p*s,f),i.update(c,r,f))}function u(p,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,c,0,n,p,0,f);let x=0;for(let y=0;y<f;y++)x+=c[y];i.update(x,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u}function c0(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:Ve("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function d0(e,t,i){let r=new WeakMap,a=new ft;function n(s,o,l){let h=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,c=r.get(o);if(c===void 0||c.count!==p){let f=function(){g.dispose(),r.delete(o),o.removeEventListener("dispose",f)};c!==void 0&&c.texture.dispose();let x=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],_=0;x===!0&&(_=1),y===!0&&(_=2),m===!0&&(_=3);let E=o.attributes.position.count*_,A=1;E>t.maxTextureSize&&(A=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let C=new Float32Array(E*A*4*p),g=new kh(C,E,A,p);g.type=hi,g.needsUpdate=!0;let b=_*4;for(let D=0;D<p;D++){let P=d[D],N=T[D],q=w[D],U=E*A*4*D;for(let G=0;G<P.count;G++){let K=G*b;x===!0&&(a.fromBufferAttribute(P,G),C[U+K+0]=a.x,C[U+K+1]=a.y,C[U+K+2]=a.z,C[U+K+3]=0),y===!0&&(a.fromBufferAttribute(N,G),C[U+K+4]=a.x,C[U+K+5]=a.y,C[U+K+6]=a.z,C[U+K+7]=0),m===!0&&(a.fromBufferAttribute(q,G),C[U+K+8]=a.x,C[U+K+9]=a.y,C[U+K+10]=a.z,C[U+K+11]=q.itemSize===4?a.w:1)}}c={count:p,texture:g,size:new te(E,A)},r.set(o,c),o.addEventListener("dispose",f)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let f=0;for(let y=0;y<h.length;y++)f+=h[y];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",x),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",c.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",c.size)}return{update:n}}function p0(e,t,i,r,a){let n=new WeakMap;function s(h){let u=a.render.frame,p=h.geometry,c=t.get(h,p);if(n.get(c)!==u&&(t.update(c),n.set(c,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),n.get(h)!==u&&(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,e.ARRAY_BUFFER),n.set(h,u))),h.isSkinnedMesh){let f=h.skeleton;n.get(f)!==u&&(f.update(),n.set(f,u))}return c}function o(){n=new WeakMap}function l(h){let u=h.target;u.removeEventListener("dispose",l),r.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null&&i.remove(u.instanceColor)}return{update:s,dispose:o}}var f0={[Xn]:"LINEAR_TONE_MAPPING",[jn]:"REINHARD_TONE_MAPPING",[qn]:"CINEON_TONE_MAPPING",[Yn]:"ACES_FILMIC_TONE_MAPPING",[Kn]:"AGX_TONE_MAPPING",[Jn]:"NEUTRAL_TONE_MAPPING",[Zn]:"CUSTOM_TONE_MAPPING"};function m0(e,t,i,r,a,n){let s=new Rt(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new ct;h.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new He([0,2,0,0,2,0],2));let u=new sl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Pt(h,u),c=new ka(-1,1,1,-1,0,1),f=null,x=null,y=!1,m,d=null,T=[],w=!1;this.setSize=function(_,E){s.setSize(_,E),o!==null&&o.setSize(_,E),l!==null&&l.setSize(_,E);for(let A=0;A<T.length;A++){let C=T[A];C.setSize&&C.setSize(_,E)}},this.setEffects=function(_){T=_,w=T.length>0&&T[0].isRenderPass===!0;let E=s.width,A=s.height;T.length>0&&o===null&&(o=new Rt(E,A,{type:Nt,depthBuffer:!1,stencilBuffer:!1}),l=new Rt(E,A,{type:Nt,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<T.length;C++){let g=T[C];g.setSize&&g.setSize(E,A)}},this.begin=function(_,E){if(y||_.toneMapping===ri&&T.length===0)return!1;if(d=E,E!==null){let A=E.width,C=E.height;(s.width!==A||s.height!==C)&&this.setSize(A,C)}return w===!1&&_.setRenderTarget(s),m=_.toneMapping,_.toneMapping=ri,!0},this.hasRenderPass=function(){return w},this.end=function(_,E){_.toneMapping=m,y=!0;let A=s,C=o;for(let g=0;g<T.length;g++){let b=T[g];b.enabled!==!1&&(b.render(_,C,A,E),b.needsSwap!==!1&&(A=C,C=C===o?l:o))}if(f!==_.outputColorSpace||x!==_.toneMapping){f=_.outputColorSpace,x=_.toneMapping,u.defines={},et.getTransfer(f)===st&&(u.defines.SRGB_TRANSFER="");let g=f0[x];g&&(u.defines[g]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,_.setRenderTarget(d),_.render(p,c),d=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var ju=new kt,ko=new Da(1,1),qu=new kh,Yu=new md,Zu=new iu,ph=[],fh=[],mh=new Float32Array(16),gh=new Float32Array(9),vh=new Float32Array(4);function ta(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=ph[a];if(n===void 0&&(n=new Float32Array(a),ph[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function bt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Tt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function ns(e,t){let i=fh[t];i===void 0&&(i=new Int32Array(t),fh[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function g0(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function v0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bt(i,t))return;e.uniform2fv(this.addr,t),Tt(i,t)}}function _0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(bt(i,t))return;e.uniform3fv(this.addr,t),Tt(i,t)}}function x0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bt(i,t))return;e.uniform4fv(this.addr,t),Tt(i,t)}}function y0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(bt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Tt(i,t)}else{if(bt(i,r))return;vh.set(r),e.uniformMatrix2fv(this.addr,!1,vh),Tt(i,r)}}function M0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(bt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Tt(i,t)}else{if(bt(i,r))return;gh.set(r),e.uniformMatrix3fv(this.addr,!1,gh),Tt(i,r)}}function S0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(bt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Tt(i,t)}else{if(bt(i,r))return;mh.set(r),e.uniformMatrix4fv(this.addr,!1,mh),Tt(i,r)}}function b0(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function T0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bt(i,t))return;e.uniform2iv(this.addr,t),Tt(i,t)}}function E0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bt(i,t))return;e.uniform3iv(this.addr,t),Tt(i,t)}}function w0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bt(i,t))return;e.uniform4iv(this.addr,t),Tt(i,t)}}function A0(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function C0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bt(i,t))return;e.uniform2uiv(this.addr,t),Tt(i,t)}}function R0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bt(i,t))return;e.uniform3uiv(this.addr,t),Tt(i,t)}}function P0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bt(i,t))return;e.uniform4uiv(this.addr,t),Tt(i,t)}}function I0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(ko.compareFunction=i.isReversedDepthBuffer()?Qo:$o,n=ko):n=ju,i.setTexture2D(t||n,a)}function L0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Yu,a)}function D0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||Zu,a)}function U0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||qu,a)}function N0(e){switch(e){case 5126:return g0;case 35664:return v0;case 35665:return _0;case 35666:return x0;case 35674:return y0;case 35675:return M0;case 35676:return S0;case 5124:case 35670:return b0;case 35667:case 35671:return T0;case 35668:case 35672:return E0;case 35669:case 35673:return w0;case 5125:return A0;case 36294:return C0;case 36295:return R0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return U0}}function O0(e,t){e.uniform1fv(this.addr,t)}function F0(e,t){let i=ta(t,this.size,2);e.uniform2fv(this.addr,i)}function B0(e,t){let i=ta(t,this.size,3);e.uniform3fv(this.addr,i)}function z0(e,t){let i=ta(t,this.size,4);e.uniform4fv(this.addr,i)}function G0(e,t){let i=ta(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function V0(e,t){let i=ta(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function H0(e,t){let i=ta(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function k0(e,t){e.uniform1iv(this.addr,t)}function W0(e,t){e.uniform2iv(this.addr,t)}function X0(e,t){e.uniform3iv(this.addr,t)}function j0(e,t){e.uniform4iv(this.addr,t)}function q0(e,t){e.uniform1uiv(this.addr,t)}function Y0(e,t){e.uniform2uiv(this.addr,t)}function Z0(e,t){e.uniform3uiv(this.addr,t)}function K0(e,t){e.uniform4uiv(this.addr,t)}function J0(e,t,i){let r=this.cache,a=t.length,n=ns(i,a);bt(r,n)||(e.uniform1iv(this.addr,n),Tt(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=ko:s=ju;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function $0(e,t,i){let r=this.cache,a=t.length,n=ns(i,a);bt(r,n)||(e.uniform1iv(this.addr,n),Tt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||Yu,n[s])}function Q0(e,t,i){let r=this.cache,a=t.length,n=ns(i,a);bt(r,n)||(e.uniform1iv(this.addr,n),Tt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||Zu,n[s])}function ev(e,t,i){let r=this.cache,a=t.length,n=ns(i,a);bt(r,n)||(e.uniform1iv(this.addr,n),Tt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||qu,n[s])}function tv(e){switch(e){case 5126:return O0;case 35664:return F0;case 35665:return B0;case 35666:return z0;case 35674:return G0;case 35675:return V0;case 35676:return H0;case 5124:case 35670:return k0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return j0;case 5125:return q0;case 36294:return Y0;case 36295:return Z0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return J0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return ev}}var iv=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=N0(t.type)}},rv=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tv(t.type)}},av=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},Ks=/(\w+)(\])?(\[|\.)?/g;function _h(e,t){e.seq.push(t),e.map[t.id]=t}function nv(e,t,i){let r=e.name,a=r.length;for(Ks.lastIndex=0;;){let n=Ks.exec(r),s=Ks.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){_h(i,h===void 0?new iv(o,e,t):new rv(o,e,t));break}else{let u=i.map[o];u===void 0&&(u=new av(o),_h(i,u)),i=u}}}var On=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);nv(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function xh(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var sv=37297,ov=0;function lv(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var yh=new Ye;function hv(e){et._getMatrix(yh,et.workingColorSpace,e);let t=`mat3( ${yh.elements.map(i=>i.toFixed(4))} )`;switch(et.getTransfer(e)){case Vn:return[t,"LinearTransferOETF"];case st:return[t,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Mh(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+lv(e.getShaderSource(t),s)}else return a}function uv(e,t){let i=hv(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var cv={[Xn]:"Linear",[jn]:"Reinhard",[qn]:"Cineon",[Yn]:"ACESFilmic",[Kn]:"AgX",[Jn]:"Neutral",[Zn]:"Custom"};function dv(e,t){let i=cv[t];return i===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Cn=new R;function pv(){et.getLuminanceCoefficients(Cn);let e=Cn.x.toFixed(4),t=Cn.y.toFixed(4),i=Cn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fv(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function mv(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function gv(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Ta(e){return e!==""}function Sh(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(e){return e.replace(vv,xv)}var _v=new Map;function xv(e,t){let i=Je[t];if(i===void 0){let r=_v.get(t);if(r!==void 0)i=Je[r],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Wo(i)}var yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Th(e){return e.replace(yv,Mv)}function Mv(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Eh(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Sv={[Rn]:"SHADOWMAP_TYPE_PCF",[Sa]:"SHADOWMAP_TYPE_VSM"};function bv(e){return Sv[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Tv={[hr]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE",[$n]:"ENVMAP_TYPE_CUBE_UV"};function Ev(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Tv[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var wv={[Kr]:"ENVMAP_MODE_REFRACTION"};function Av(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":wv[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Cv={[Lh]:"ENVMAP_BLENDING_MULTIPLY",[Ic]:"ENVMAP_BLENDING_MIX",[Lc]:"ENVMAP_BLENDING_ADD"};function Rv(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Cv[e.combine]||"ENVMAP_BLENDING_NONE"}function Pv(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Iv(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=bv(i),h=Ev(i),u=Av(i),p=Rv(i),c=Pv(i),f=fv(i),x=mv(n),y=a.createProgram(),m,d,T=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x].filter(Ta).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x].filter(Ta).join(`
`),d.length>0&&(d+=`
`)):(m=[Eh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),d=[Eh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",i.envMap?"#define "+p:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ri?"#define TONE_MAPPING":"",i.toneMapping!==ri?Je.tonemapping_pars_fragment:"",i.toneMapping!==ri?dv("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,uv("linearToOutputTexel",i.outputColorSpace),pv(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ta).join(`
`)),s=Wo(s),s=Sh(s,i),s=bh(s,i),o=Wo(o),o=Sh(o,i),o=bh(o,i),s=Th(s),o=Th(o),i.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",i.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let w=T+m+s,_=T+d+o,E=xh(a,a.VERTEX_SHADER,w),A=xh(a,a.FRAGMENT_SHADER,_);a.attachShader(y,E),a.attachShader(y,A),i.index0AttributeName!==void 0?a.bindAttribLocation(y,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function C(P){if(e.debug.checkShaderErrors){let N=a.getProgramInfoLog(y)||"",q=a.getShaderInfoLog(E)||"",U=a.getShaderInfoLog(A)||"",G=N.trim(),K=q.trim(),H=U.trim(),de=!0,Y=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(de=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,y,E,A);else{let Z=Mh(a,E,"vertex"),ie=Mh(a,A,"fragment");Ve("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+Z+`
`+ie)}else G!==""?Ge("WebGLProgram: Program Info Log:",G):(K===""||H==="")&&(Y=!1);Y&&(P.diagnostics={runnable:de,programLog:G,vertexShader:{log:K,prefix:m},fragmentShader:{log:H,prefix:d}})}a.deleteShader(E),a.deleteShader(A),g=new On(a,y),b=gv(a,y)}let g;this.getUniforms=function(){return g===void 0&&C(this),g};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(y,sv)),D},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ov++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=A,this}var Lv=0,Dv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Uv(e),t.set(e,i)),i}},Uv=class{constructor(e){this.id=Lv++,this.code=e,this.usedTimes=0}};function Nv(e){return e===ur||e===Fn||e===Bn}function Ov(e,t,i,r,a,n){let s=new Xh,o=new Dv,l=new Set,h=[],u=new Map,p=r.logarithmicDepthBuffer,c=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return l.add(g),g===0?"uv":`uv${g}`}function y(g,b,D,P,N,q){let U=P.fog,G=N.geometry,K=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,de=t.get(g.envMap||K,H),Y=de&&de.mapping===$n?de.image.height:null,Z=f[g.type];g.precision!==null&&(c=r.getMaxPrecision(g.precision),c!==g.precision&&Ge("WebGLProgram.getParameters:",g.precision,"not supported, using",c,"instead."));let ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Oe=ie!==void 0?ie.length:0,Ee=0;G.morphAttributes.position!==void 0&&(Ee=1),G.morphAttributes.normal!==void 0&&(Ee=2),G.morphAttributes.color!==void 0&&(Ee=3);let tt,ue,W,Q;if(Z){let vt=xi[Z];tt=vt.vertexShader,ue=vt.fragmentShader}else{tt=g.vertexShader,ue=g.fragmentShader;let vt=o.getVertexShaderStage(g),nt=o.getFragmentShaderStage(g);o.update(g,vt,nt),W=vt.id,Q=nt.id}let re=e.getRenderTarget(),Ce=e.state.buffers.depth.getReversed(),Ie=N.isInstancedMesh===!0,fe=N.isBatchedMesh===!0,je=!!g.map,ee=!!g.matcap,J=!!de,le=!!g.aoMap,ve=!!g.lightMap,_e=!!g.bumpMap&&g.wireframe===!1,ye=!!g.normalMap,Ue=!!g.displacementMap,Be=!!g.emissiveMap,ke=!!g.metalnessMap,I=!!g.roughnessMap,it=g.anisotropy>0,qe=g.clearcoat>0,ne=g.dispersion>0,M=g.retroreflectivity>0,v=g.iridescence>0,L=g.sheen>0,z=g.transmission>0,X=it&&!!g.anisotropyMap,ce=qe&&!!g.clearcoatMap,pe=qe&&!!g.clearcoatNormalMap,F=qe&&!!g.clearcoatRoughnessMap,ae=v&&!!g.iridescenceMap,me=v&&!!g.iridescenceThicknessMap,Te=L&&!!g.sheenColorMap,se=L&&!!g.sheenRoughnessMap,Re=!!g.specularMap,Le=!!g.specularColorMap,We=!!g.specularIntensityMap,rt=z&&!!g.transmissionMap,B=z&&!!g.thicknessMap,$=!!g.gradientMap,oe=!!g.alphaMap,Me=g.alphaTest>0,we=!!g.alphaHash,he=!!g.extensions,Se=ri;g.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Se=e.toneMapping);let Fe={shaderID:Z,shaderType:g.type,shaderName:g.name,vertexShader:tt,fragmentShader:ue,defines:g.defines,customVertexShaderID:W,customFragmentShaderID:Q,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:c,batching:fe,batchingColor:fe&&N._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,instancingMorph:Ie&&N.morphTexture!==null,outputColorSpace:re===null?e.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:je,matcap:ee,envMap:J,envMapMode:J&&de.mapping,envMapCubeUVHeight:Y,aoMap:le,lightMap:ve,bumpMap:_e,normalMap:ye,displacementMap:Ue,emissiveMap:Be,normalMapObjectSpace:ye&&g.normalMapType===Nc,normalMapTangentSpace:ye&&g.normalMapType===zo,packedNormalMap:ye&&g.normalMapType===zo&&Nv(g.normalMap.format),metalnessMap:ke,roughnessMap:I,anisotropy:it,anisotropyMap:X,clearcoat:qe,clearcoatMap:ce,clearcoatNormalMap:pe,clearcoatRoughnessMap:F,dispersion:ne,retroreflection:M,iridescence:v,iridescenceMap:ae,iridescenceThicknessMap:me,sheen:L,sheenColorMap:Te,sheenRoughnessMap:se,specularMap:Re,specularColorMap:Le,specularIntensityMap:We,transmission:z,transmissionMap:rt,thicknessMap:B,gradientMap:$,opaque:g.transparent===!1&&g.blending===sr&&g.alphaToCoverage===!1,alphaMap:oe,alphaTest:Me,alphaHash:we,combine:g.combine,mapUv:je&&x(g.map.channel),aoMapUv:le&&x(g.aoMap.channel),lightMapUv:ve&&x(g.lightMap.channel),bumpMapUv:_e&&x(g.bumpMap.channel),normalMapUv:ye&&x(g.normalMap.channel),displacementMapUv:Ue&&x(g.displacementMap.channel),emissiveMapUv:Be&&x(g.emissiveMap.channel),metalnessMapUv:ke&&x(g.metalnessMap.channel),roughnessMapUv:I&&x(g.roughnessMap.channel),anisotropyMapUv:X&&x(g.anisotropyMap.channel),clearcoatMapUv:ce&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:me&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:se&&x(g.sheenRoughnessMap.channel),specularMapUv:Re&&x(g.specularMap.channel),specularColorMapUv:Le&&x(g.specularColorMap.channel),specularIntensityMapUv:We&&x(g.specularIntensityMap.channel),transmissionMapUv:rt&&x(g.transmissionMap.channel),thicknessMapUv:B&&x(g.thicknessMap.channel),alphaMapUv:oe&&x(g.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ye||it),vertexNormals:!!G.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(je||oe),fog:!!U,useFog:g.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||G.attributes.normal===void 0&&ye===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ce,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Ee,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:Se,decodeVideoTexture:je&&g.map.isVideoTexture===!0&&et.getTransfer(g.map.colorSpace)===st,decodeVideoTextureEmissive:Be&&g.emissiveMap.isVideoTexture===!0&&et.getTransfer(g.emissiveMap.colorSpace)===st,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===oi,flipSided:g.side===Ht,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:he&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&g.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function m(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let D in g.defines)b.push(D),b.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(d(b,g),T(b,g),b.push(e.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function d(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function T(g,b){s.disableAll(),b.instancing&&s.enable(0),b.instancingColor&&s.enable(1),b.instancingMorph&&s.enable(2),b.matcap&&s.enable(3),b.envMap&&s.enable(4),b.normalMapObjectSpace&&s.enable(5),b.normalMapTangentSpace&&s.enable(6),b.clearcoat&&s.enable(7),b.iridescence&&s.enable(8),b.alphaTest&&s.enable(9),b.vertexColors&&s.enable(10),b.vertexAlphas&&s.enable(11),b.vertexUv1s&&s.enable(12),b.vertexUv2s&&s.enable(13),b.vertexUv3s&&s.enable(14),b.vertexTangents&&s.enable(15),b.anisotropy&&s.enable(16),b.alphaHash&&s.enable(17),b.batching&&s.enable(18),b.dispersion&&s.enable(19),b.retroreflection&&s.enable(24),b.batchingColor&&s.enable(20),b.gradientMap&&s.enable(21),b.packedNormalMap&&s.enable(22),b.vertexNormals&&s.enable(23),g.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.reversedDepthBuffer&&s.enable(4),b.skinning&&s.enable(5),b.morphTargets&&s.enable(6),b.morphNormals&&s.enable(7),b.morphColors&&s.enable(8),b.premultipliedAlpha&&s.enable(9),b.shadowMapEnabled&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.decodeVideoTextureEmissive&&s.enable(20),b.alphaToCoverage&&s.enable(21),b.numLightProbeGrids>0&&s.enable(22),b.hasPositionAttribute&&s.enable(23),g.push(s.mask)}function w(g){let b=f[g.type],D;if(b){let P=xi[b];D=bi.clone(P.uniforms)}else D=g.uniforms;return D}function _(g,b){let D=u.get(b);return D!==void 0?++D.usedTimes:(D=new Iv(e,b,g,a),h.push(D),u.set(b,D)),D}function E(g){if(--g.usedTimes===0){let b=h.indexOf(g);h[b]=h[h.length-1],h.pop(),u.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:C}}function Fv(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function Bv(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function wh(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Ah(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(c){let f=0;return c.isInstancedMesh&&(f+=2),c.isSkinnedMesh&&(f+=1),f}function o(c,f,x,y,m,d){let T=e[t];return T===void 0?(T={id:c.id,object:c,geometry:f,material:x,materialVariant:s(c),groupOrder:y,renderOrder:c.renderOrder,z:m,group:d},e[t]=T):(T.id=c.id,T.object=c,T.geometry=f,T.material=x,T.materialVariant=s(c),T.groupOrder=y,T.renderOrder=c.renderOrder,T.z=m,T.group=d),t++,T}function l(c,f,x,y,m,d,T){T.reversedDepth===!0&&(m=-m);let w=o(c,f,x,y,m,d);x.transmission>0?r.push(w):x.transparent===!0?a.push(w):i.push(w)}function h(c,f,x,y,m,d){let T=o(c,f,x,y,m,d);x.transmission>0?r.unshift(T):x.transparent===!0?a.unshift(T):i.unshift(T)}function u(c,f){i.length>1&&i.sort(c||Bv),r.length>1&&r.sort(f||wh),a.length>1&&a.sort(f||wh)}function p(){for(let c=t,f=e.length;c<f;c++){let x=e[c];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:h,finish:p,sort:u}}function zv(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new Ah,e.set(r,[s])):a>=n.length?(s=new Ah,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function Gv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new R,color:new Xe};break;case"SpotLight":i={position:new R,direction:new R,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new R,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new R,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":i={color:new Xe,position:new R,halfWidth:new R,halfHeight:new R};break}return e[t.id]=i,i}}}function Vv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var Hv=0;function kv(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Wv(e){let t=new Gv,i=Vv(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new R);let a=new R,n=new Ke,s=new Ke;function o(h){let u=0,p=0,c=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let f=0,x=0,y=0,m=0,d=0,T=0,w=0,_=0,E=0,A=0,C=0,g=0,b=0,D=0;h.sort(kv);for(let N=0,q=h.length;N<q;N++){let U=h[N],G=U.color,K=U.intensity,H=U.distance,de=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===ur?de=U.shadow.map.texture:de=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=G.r*K,p+=G.g*K,c+=G.b*K;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(U.sh.coefficients[Y],K);D++}else if(U.isSunLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Z=U.shadow,ie=i.get(U);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),r.sunShadow[x]=ie,r.sunShadowMap[x]=de;let Oe=Z.getViewportCount();for(let Ee=0;Ee<Oe;Ee++)r.sunShadowMatrix[y+Ee]=Z.getMatrix(Ee),r.sunShadowCascade[y+Ee]=Z._cascadeData[Ee];y+=Oe,x++}r.sun[f]=Y,f++}else if(U.isDirectionalLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Z=U.shadow,ie=i.get(U);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,r.directionalShadow[m]=ie,r.directionalShadowMap[m]=de,r.directionalShadowMatrix[m]=U.shadow.matrix,E++}r.directional[m]=Y,m++}else if(U.isSpotLight){let Y=t.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(G).multiplyScalar(K),Y.distance=H,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,r.spot[T]=Y;let Z=U.shadow;if(U.map&&(r.spotLightMap[g]=U.map,g++,Z.updateMatrices(U),U.castShadow&&b++),r.spotLightMatrix[T]=Z.matrix,U.castShadow){let ie=i.get(U);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,r.spotShadow[T]=ie,r.spotShadowMap[T]=de,C++}T++}else if(U.isRectAreaLight){let Y=t.get(U);Y.color.copy(G).multiplyScalar(K),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),r.rectArea[w]=Y,w++}else if(U.isPointLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){let Z=U.shadow,ie=i.get(U);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,ie.shadowCameraNear=Z.camera.near,ie.shadowCameraFar=Z.camera.far,r.pointShadow[d]=ie,r.pointShadowMap[d]=de,r.pointShadowMatrix[d]=U.shadow.matrix,A++}r.point[d]=Y,d++}else if(U.isHemisphereLight){let Y=t.get(U);Y.skyColor.copy(U.color).multiplyScalar(K),Y.groundColor.copy(U.groundColor).multiplyScalar(K),r.hemi[_]=Y,_++}}w>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=p,r.ambient[2]=c;let P=r.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==d||P.spotLength!==T||P.rectAreaLength!==w||P.hemiLength!==_||P.numSunShadows!==x||P.numDirectionalShadows!==E||P.numPointShadows!==A||P.numSpotShadows!==C||P.numSpotMaps!==g||P.numLightProbes!==D)&&(r.sun.length=f,r.directional.length=m,r.spot.length=T,r.rectArea.length=w,r.point.length=d,r.hemi.length=_,r.sunShadow.length=x,r.sunShadowMap.length=x,r.sunShadowMatrix.length=y,r.sunShadowCascade.length=y,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.directionalShadowMatrix.length=E,r.pointShadow.length=A,r.pointShadowMap.length=A,r.pointShadowMatrix.length=A,r.spotShadow.length=C,r.spotShadowMap.length=C,r.spotLightMatrix.length=C+g-b,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=D,P.sunLength=f,P.directionalLength=m,P.pointLength=d,P.spotLength=T,P.rectAreaLength=w,P.hemiLength=_,P.numSunShadows=x,P.numDirectionalShadows=E,P.numPointShadows=A,P.numSpotShadows=C,P.numSpotMaps=g,P.numLightProbes=D,r.version=Hv++)}function l(h,u){let p=0,c=0,f=0,x=0,y=0,m=0,d=u.matrixWorldInverse;for(let T=0,w=h.length;T<w;T++){let _=h[T];if(_.isSunLight){let E=r.sun[p];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(d),p++}else if(_.isDirectionalLight){let E=r.directional[c];E.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(d),c++}else if(_.isSpotLight){let E=r.spot[x];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(d),x++}else if(_.isRectAreaLight){let E=r.rectArea[y];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(d),s.identity(),n.copy(_.matrixWorld),n.premultiply(d),s.extractRotation(n),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),y++}else if(_.isPointLight){let E=r.point[f];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(d),f++}else if(_.isHemisphereLight){let E=r.hemi[m];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:r}}function Ch(e){let t=new Wv(e),i=[],r=[],a=[];function n(c){p.camera=c,i.length=0,r.length=0,a.length=0}function s(c){i.push(c)}function o(c){r.push(c)}function l(c){a.push(c)}function h(){t.setup(i)}function u(c){t.setupView(i,c)}let p={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:p,setupLights:h,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function Xv(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Ch(e),t.set(a,[o])):n>=s.length?(o=new Ch(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
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
}`,Yv=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Zv=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Rh=new Ke,Ma=new R,Js=new R;function Kv(e,t,i){let r=new $r,a=new te,n=new te,s=new ft,o=new Op,l=new Fp,h={},u=i.maxTextureSize,p={[lr]:Ht,[Ht]:lr,[oi]:oi},c=new gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:jv,fragmentShader:qv}),f=c.clone();f.defines.HORIZONTAL_PASS=1;let x=new ct;x.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Pt(x,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rn;let d=this.type;this.render=function(A,C,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===dc&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rn);let b=e.getRenderTarget(),D=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),N=e.state;N.setBlending(di),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let q=d!==this.type;q&&C.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(G=>G.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,G=A.length;U<G;U++){let K=A[U],H=K.shadow;if(H===void 0){Ge("WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);let de=H.getFrameExtents();a.multiply(de),n.copy(H.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(n.x=Math.floor(u/de.x),a.x=n.x*de.x,H.mapSize.x=n.x),a.y>u&&(n.y=Math.floor(u/de.y),a.y=n.y*de.y,H.mapSize.y=n.y));let Y=e.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Y,H.map===null||q===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Sa){if(K.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Rt(a.x,a.y,{format:ur,type:Nt,minFilter:wt,magFilter:wt,generateMipmaps:!1}),H.map.texture.name=K.name+".shadowMap",H.map.depthTexture=new Da(a.x,a.y,hi),H.map.depthTexture.name=K.name+".shadowMapDepth",H.map.depthTexture.format=Ni,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ct,H.map.depthTexture.magFilter=Ct}else K.isPointLight?(H.map=new Xu(a.x),H.map.depthTexture=new Fd(a.x,Mi)):(H.map=new Rt(a.x,a.y),H.map.depthTexture=new Da(a.x,a.y,Mi)),H.map.depthTexture.name=K.name+".shadowMap",H.map.depthTexture.format=Ni,this.type===Rn?(H.map.depthTexture.compareFunction=Y?Qo:$o,H.map.depthTexture.minFilter=wt,H.map.depthTexture.magFilter=wt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ct,H.map.depthTexture.magFilter=Ct);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==a.x||H.map.height!==a.y)&&H.map.setSize(a.x,a.y);let Z=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();K.isPointLight!==!0&&H.updateMatrices(K,g);for(let ie=0;ie<Z;ie++){let Oe=H.getCamera(ie);if(K.isPointLight){let Ee=H.camera,tt=H.matrix,ue=K.distance||Ee.far;ue!==Ee.far&&(Ee.far=ue,Ee.updateProjectionMatrix()),Ma.setFromMatrixPosition(K.matrixWorld),Ee.position.copy(Ma),Js.copy(Ee.position),Js.add(Yv[ie]),Ee.up.copy(Zv[ie]),Ee.lookAt(Js),Ee.updateMatrixWorld(),tt.makeTranslation(-Ma.x,-Ma.y,-Ma.z),Rh.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Rh,Ee.coordinateSystem,Ee.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)e.setRenderTarget(H.map,ie),e.clear();else{ie===0&&(e.setRenderTarget(H.map),e.clear());let Ee=H.getViewport(ie);s.set(n.x*Ee.x,n.y*Ee.y,n.x*Ee.z,n.y*Ee.w),N.viewport(s)}r=H.getFrustum(ie),_(C,g,Oe,K,this.type)}H.isPointLightShadow!==!0&&this.type===Sa&&T(H,g),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,e.setRenderTarget(b,D,P)};function T(A,C){let g=t.update(y);c.defines.VSM_SAMPLES!==A.blurSamples&&(c.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,c.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new Rt(a.x,a.y,{format:ur,type:Nt}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),c.uniforms.shadow_pass.value=A.map.depthTexture,c.uniforms.resolution.value.set(A.map.width,A.map.height),c.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(C,null,g,c,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(C,null,g,f,y,null)}function w(A,C,g,b){let D=null,P=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)D=P;else if(D=g.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let N=D.uuid,q=C.uuid,U=h[N];U===void 0&&(U={},h[N]=U);let G=U[q];G===void 0&&(G=D.clone(),U[q]=G,C.addEventListener("dispose",E)),D=G}if(D.visible=C.visible,D.wireframe=C.wireframe,b===Sa?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:p[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,g.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let N=e.properties.get(D);N.light=g}return D}function _(A,C,g,b,D){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===Sa)&&(!A.frustumCulled||A.intersectsFrustum(r))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);let N=t.update(A),q=A.material;if(Array.isArray(q)){let U=N.groups;for(let G=0,K=U.length;G<K;G++){let H=U[G],de=q[H.materialIndex];if(de&&de.visible){let Y=w(A,de,b,D);A.onBeforeShadow(e,A,C,g,N,Y,H),e.renderBufferDirect(g,null,N,Y,A,H),A.onAfterShadow(e,A,C,g,N,Y,H)}}}else if(q.visible){let U=w(A,q,b,D);A.onBeforeShadow(e,A,C,g,N,U,null),e.renderBufferDirect(g,null,N,U,A,null),A.onAfterShadow(e,A,C,g,N,U,null)}}let P=A.children;for(let N=0,q=P.length;N<q;N++)_(P[N],C,g,b,D)}function E(A){A.target.removeEventListener("dispose",E);for(let C in h){let g=h[C],b=A.target.uuid;b in g&&(g[b].dispose(),delete g[b])}}}function Jv(e,t){function i(){let B=!1,$=new ft,oe=null,Me=new ft(0,0,0,0);return{setMask:function(we){oe!==we&&!B&&(e.colorMask(we,we,we,we),oe=we)},setLocked:function(we){B=we},setClear:function(we,he,Se,Fe,vt){vt===!0&&(we*=Fe,he*=Fe,Se*=Fe),$.set(we,he,Se,Fe),Me.equals($)===!1&&(e.clearColor(we,he,Se,Fe),Me.copy($))},reset:function(){B=!1,oe=null,Me.set(-1,0,0,0)}}}function r(){let B=!1,$=!1,oe=null,Me=null,we=null;return{setReversed:function(he){if($!==he){let Se=t.get("EXT_clip_control");he?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),$=he;let Fe=we;we=null,this.setClear(Fe)}},getReversed:function(){return $},setTest:function(he){he?re(e.DEPTH_TEST):Ce(e.DEPTH_TEST)},setMask:function(he){oe!==he&&!B&&(e.depthMask(he),oe=he)},setFunc:function(he){if($&&(he=qc[he]),Me!==he){switch(he){case $s:e.depthFunc(e.NEVER);break;case Qs:e.depthFunc(e.ALWAYS);break;case eo:e.depthFunc(e.LESS);break;case Ca:e.depthFunc(e.LEQUAL);break;case to:e.depthFunc(e.EQUAL);break;case io:e.depthFunc(e.GEQUAL);break;case ro:e.depthFunc(e.GREATER);break;case ao:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Me=he}},setLocked:function(he){B=he},setClear:function(he){we!==he&&(we=he,$&&(he=1-he),e.clearDepth(he))},reset:function(){B=!1,oe=null,Me=null,we=null,$=!1}}}function a(){let B=!1,$=null,oe=null,Me=null,we=null,he=null,Se=null,Fe=null,vt=null;return{setTest:function(nt){B||(nt?re(e.STENCIL_TEST):Ce(e.STENCIL_TEST))},setMask:function(nt){$!==nt&&!B&&(e.stencilMask(nt),$=nt)},setFunc:function(nt,Ot,It){(oe!==nt||Me!==Ot||we!==It)&&(e.stencilFunc(nt,Ot,It),oe=nt,Me=Ot,we=It)},setOp:function(nt,Ot,It){(he!==nt||Se!==Ot||Fe!==It)&&(e.stencilOp(nt,Ot,It),he=nt,Se=Ot,Fe=It)},setLocked:function(nt){B=nt},setClear:function(nt){vt!==nt&&(e.clearStencil(nt),vt=nt)},reset:function(){B=!1,$=null,oe=null,Me=null,we=null,he=null,Se=null,Fe=null,vt=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,h=new WeakMap,u={},p={},c={},f=new WeakMap,x=[],y=null,m=!1,d=null,T=null,w=null,_=null,E=null,A=null,C=null,g=new Xe(0,0,0),b=0,D=!1,P=null,N=null,q=null,U=null,G=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,de=0,Y=e.getParameter(e.VERSION);Y.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=de>=1):Y.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=de>=2);let Z=null,ie={},Oe=e.getParameter(e.SCISSOR_BOX),Ee=e.getParameter(e.VIEWPORT),tt=new ft().fromArray(Oe),ue=new ft().fromArray(Ee);function W(B,$,oe,Me){let we=new Uint8Array(4),he=e.createTexture();e.bindTexture(B,he),e.texParameteri(B,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(B,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Se=0;Se<oe;Se++)B===e.TEXTURE_3D||B===e.TEXTURE_2D_ARRAY?e.texImage3D($,0,e.RGBA,1,1,Me,0,e.RGBA,e.UNSIGNED_BYTE,we):e.texImage2D($+Se,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,we);return he}let Q={};Q[e.TEXTURE_2D]=W(e.TEXTURE_2D,e.TEXTURE_2D,1),Q[e.TEXTURE_CUBE_MAP]=W(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[e.TEXTURE_2D_ARRAY]=W(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Q[e.TEXTURE_3D]=W(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),re(e.DEPTH_TEST),s.setFunc(Ca),_e(!1),ye(fl),re(e.CULL_FACE),le(di);function re(B){u[B]!==!0&&(e.enable(B),u[B]=!0)}function Ce(B){u[B]!==!1&&(e.disable(B),u[B]=!1)}function Ie(B,$){return c[B]!==$?(e.bindFramebuffer(B,$),c[B]=$,B===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=$),B===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=$),!0):!1}function fe(B,$){let oe=x,Me=!1;if(B){oe=f.get($),oe===void 0&&(oe=[],f.set($,oe));let we=B.textures;if(oe.length!==we.length||oe[0]!==e.COLOR_ATTACHMENT0){for(let he=0,Se=we.length;he<Se;he++)oe[he]=e.COLOR_ATTACHMENT0+he;oe.length=we.length,Me=!0}}else oe[0]!==e.BACK&&(oe[0]=e.BACK,Me=!0);Me&&e.drawBuffers(oe)}function je(B){return y!==B?(e.useProgram(B),y=B,!0):!1}let ee={[Fr]:e.FUNC_ADD,[fc]:e.FUNC_SUBTRACT,[mc]:e.FUNC_REVERSE_SUBTRACT};ee[gc]=e.MIN,ee[vc]=e.MAX;let J={[_c]:e.ZERO,[xc]:e.ONE,[yc]:e.SRC_COLOR,[Ph]:e.SRC_ALPHA,[wc]:e.SRC_ALPHA_SATURATE,[Tc]:e.DST_COLOR,[Sc]:e.DST_ALPHA,[Mc]:e.ONE_MINUS_SRC_COLOR,[Ih]:e.ONE_MINUS_SRC_ALPHA,[Ec]:e.ONE_MINUS_DST_COLOR,[bc]:e.ONE_MINUS_DST_ALPHA,[Ac]:e.CONSTANT_COLOR,[Cc]:e.ONE_MINUS_CONSTANT_COLOR,[Rc]:e.CONSTANT_ALPHA,[Pc]:e.ONE_MINUS_CONSTANT_ALPHA};function le(B,$,oe,Me,we,he,Se,Fe,vt,nt){if(B===di){m===!0&&(Ce(e.BLEND),m=!1);return}if(m===!1&&(re(e.BLEND),m=!0),B!==pc){if(B!==d||nt!==D){if((T!==Fr||E!==Fr)&&(e.blendEquation(e.FUNC_ADD),T=Fr,E=Fr),nt)switch(B){case sr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case pi:e.blendFunc(e.ONE,e.ONE);break;case ml:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case gl:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ve("WebGLState: Invalid blending: ",B);break}else switch(B){case sr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case pi:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case ml:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gl:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",B);break}w=null,_=null,A=null,C=null,g.set(0,0,0),b=0,d=B,D=nt}return}we=we||$,he=he||oe,Se=Se||Me,($!==T||we!==E)&&(e.blendEquationSeparate(ee[$],ee[we]),T=$,E=we),(oe!==w||Me!==_||he!==A||Se!==C)&&(e.blendFuncSeparate(J[oe],J[Me],J[he],J[Se]),w=oe,_=Me,A=he,C=Se),(Fe.equals(g)===!1||vt!==b)&&(e.blendColor(Fe.r,Fe.g,Fe.b,vt),g.copy(Fe),b=vt),d=B,D=!1}function ve(B,$){B.side===oi?Ce(e.CULL_FACE):re(e.CULL_FACE);let oe=B.side===Ht;$&&(oe=!oe),_e(oe),B.blending===sr&&B.transparent===!1?le(di):le(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),n.setMask(B.colorWrite);let Me=B.stencilWrite;o.setTest(Me),Me&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Be(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?re(e.SAMPLE_ALPHA_TO_COVERAGE):Ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(B){P!==B&&(B?e.frontFace(e.CW):e.frontFace(e.CCW),P=B)}function ye(B){B!==uc?(re(e.CULL_FACE),B!==N&&(B===fl?e.cullFace(e.BACK):B===cc?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ce(e.CULL_FACE),N=B}function Ue(B){B!==q&&(H&&e.lineWidth(B),q=B)}function Be(B,$,oe){B?(re(e.POLYGON_OFFSET_FILL),(U!==$||G!==oe)&&(U=$,G=oe,s.getReversed()&&($=-$),e.polygonOffset($,oe))):Ce(e.POLYGON_OFFSET_FILL)}function ke(B){B?re(e.SCISSOR_TEST):Ce(e.SCISSOR_TEST)}function I(B){B===void 0&&(B=e.TEXTURE0+K-1),Z!==B&&(e.activeTexture(B),Z=B)}function it(B,$,oe){oe===void 0&&(Z===null?oe=e.TEXTURE0+K-1:oe=Z);let Me=ie[oe];Me===void 0&&(Me={type:void 0,texture:void 0},ie[oe]=Me),(Me.type!==B||Me.texture!==$)&&(Z!==oe&&(e.activeTexture(oe),Z=oe),e.bindTexture(B,$||Q[B]),Me.type=B,Me.texture=$)}function qe(){let B=ie[Z];B!==void 0&&B.type!==void 0&&(e.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ne(){try{e.compressedTexImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function M(){try{e.compressedTexImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function v(){try{e.texSubImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function L(){try{e.texSubImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function z(){try{e.compressedTexSubImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function X(){try{e.compressedTexSubImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function ce(){try{e.texStorage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function pe(){try{e.texStorage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function F(){try{e.texImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function ae(){try{e.texImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function me(B){return p[B]!==void 0?p[B]:e.getParameter(B)}function Te(B,$){p[B]!==$&&(e.pixelStorei(B,$),p[B]=$)}function se(B){tt.equals(B)===!1&&(e.scissor(B.x,B.y,B.z,B.w),tt.copy(B))}function Re(B){ue.equals(B)===!1&&(e.viewport(B.x,B.y,B.z,B.w),ue.copy(B))}function Le(B,$){let oe=h.get($);oe===void 0&&(oe=new WeakMap,h.set($,oe));let Me=oe.get(B);Me===void 0&&(Me=e.getUniformBlockIndex($,B.name),oe.set(B,Me))}function We(B,$){let oe=h.get($).get(B);l.get($)!==oe&&(e.uniformBlockBinding($,oe,B.__bindingPointIndex),l.set($,oe))}function rt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},p={},Z=null,ie={},c={},f=new WeakMap,x=[],y=null,m=!1,d=null,T=null,w=null,_=null,E=null,A=null,C=null,g=new Xe(0,0,0),b=0,D=!1,P=null,N=null,q=null,U=null,G=null,tt.set(0,0,e.canvas.width,e.canvas.height),ue.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:re,disable:Ce,bindFramebuffer:Ie,drawBuffers:fe,useProgram:je,setBlending:le,setMaterial:ve,setFlipSided:_e,setCullFace:ye,setLineWidth:Ue,setPolygonOffset:Be,setScissorTest:ke,activeTexture:I,bindTexture:it,unbindTexture:qe,compressedTexImage2D:ne,compressedTexImage3D:M,texImage2D:F,texImage3D:ae,pixelStorei:Te,getParameter:me,updateUBOMapping:Le,uniformBlockBinding:We,texStorage2D:ce,texStorage3D:pe,texSubImage2D:v,texSubImage3D:L,compressedTexSubImage2D:z,compressedTexSubImage3D:X,scissor:se,viewport:Re,reset:rt}}function $v(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new te,u=new WeakMap,p=new Set,c,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(M,v){return x?new OffscreenCanvas(M,v):Hn("canvas")}function m(M,v,L){let z=1,X=ne(M);if((X.width>L||X.height>L)&&(z=L/Math.max(X.width,X.height)),z<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let ce=Math.floor(z*X.width),pe=Math.floor(z*X.height);c===void 0&&(c=y(ce,pe));let F=v?y(ce,pe):c;return F.width=ce,F.height=pe,F.getContext("2d").drawImage(M,0,0,ce,pe),Ge("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+ce+"x"+pe+")."),F}else return"data"in M&&Ge("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),M;return M}function d(M){return M.generateMipmaps}function T(M){e.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?e.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(M,v,L,z,X,ce=!1){if(M!==null){if(e[M]!==void 0)return e[M];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let pe;z&&(pe=t.get("EXT_texture_norm16"),pe||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let F=v;if(v===e.RED&&(L===e.FLOAT&&(F=e.R32F),L===e.HALF_FLOAT&&(F=e.R16F),L===e.UNSIGNED_BYTE&&(F=e.R8),L===e.UNSIGNED_SHORT&&pe&&(F=pe.R16_EXT),L===e.SHORT&&pe&&(F=pe.R16_SNORM_EXT)),v===e.RED_INTEGER&&(L===e.UNSIGNED_BYTE&&(F=e.R8UI),L===e.UNSIGNED_SHORT&&(F=e.R16UI),L===e.UNSIGNED_INT&&(F=e.R32UI),L===e.BYTE&&(F=e.R8I),L===e.SHORT&&(F=e.R16I),L===e.INT&&(F=e.R32I)),v===e.RG&&(L===e.FLOAT&&(F=e.RG32F),L===e.HALF_FLOAT&&(F=e.RG16F),L===e.UNSIGNED_BYTE&&(F=e.RG8),L===e.UNSIGNED_SHORT&&pe&&(F=pe.RG16_EXT),L===e.SHORT&&pe&&(F=pe.RG16_SNORM_EXT)),v===e.RG_INTEGER&&(L===e.UNSIGNED_BYTE&&(F=e.RG8UI),L===e.UNSIGNED_SHORT&&(F=e.RG16UI),L===e.UNSIGNED_INT&&(F=e.RG32UI),L===e.BYTE&&(F=e.RG8I),L===e.SHORT&&(F=e.RG16I),L===e.INT&&(F=e.RG32I)),v===e.RGB_INTEGER&&(L===e.UNSIGNED_BYTE&&(F=e.RGB8UI),L===e.UNSIGNED_SHORT&&(F=e.RGB16UI),L===e.UNSIGNED_INT&&(F=e.RGB32UI),L===e.BYTE&&(F=e.RGB8I),L===e.SHORT&&(F=e.RGB16I),L===e.INT&&(F=e.RGB32I)),v===e.RGBA_INTEGER&&(L===e.UNSIGNED_BYTE&&(F=e.RGBA8UI),L===e.UNSIGNED_SHORT&&(F=e.RGBA16UI),L===e.UNSIGNED_INT&&(F=e.RGBA32UI),L===e.BYTE&&(F=e.RGBA8I),L===e.SHORT&&(F=e.RGBA16I),L===e.INT&&(F=e.RGBA32I)),v===e.RGB&&(L===e.UNSIGNED_SHORT&&pe&&(F=pe.RGB16_EXT),L===e.SHORT&&pe&&(F=pe.RGB16_SNORM_EXT),L===e.UNSIGNED_INT_5_9_9_9_REV&&(F=e.RGB9_E5),L===e.UNSIGNED_INT_10F_11F_11F_REV&&(F=e.R11F_G11F_B10F)),v===e.RGBA){let ae=ce?Vn:et.getTransfer(X);L===e.FLOAT&&(F=e.RGBA32F),L===e.HALF_FLOAT&&(F=e.RGBA16F),L===e.UNSIGNED_BYTE&&(F=ae===st?e.SRGB8_ALPHA8:e.RGBA8),L===e.UNSIGNED_SHORT&&pe&&(F=pe.RGBA16_EXT),L===e.SHORT&&pe&&(F=pe.RGBA16_SNORM_EXT),L===e.UNSIGNED_SHORT_4_4_4_4&&(F=e.RGBA4),L===e.UNSIGNED_SHORT_5_5_5_1&&(F=e.RGB5_A1)}return(F===e.R16F||F===e.R32F||F===e.RG16F||F===e.RG32F||F===e.RGBA16F||F===e.RGBA32F)&&t.get("EXT_color_buffer_float"),F}function E(M,v){let L;return M?v===null||v===Mi||v===Pa?L=e.DEPTH24_STENCIL8:v===hi?L=e.DEPTH32F_STENCIL8:v===Ra&&(L=e.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mi||v===Pa?L=e.DEPTH_COMPONENT24:v===hi?L=e.DEPTH_COMPONENT32F:v===Ra&&(L=e.DEPTH_COMPONENT16),L}function A(M,v){return d(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ct&&M.minFilter!==wt?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function C(M){let v=M.target;v.removeEventListener("dispose",C),b(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&p.delete(v)}function g(M){let v=M.target;v.removeEventListener("dispose",g),P(v)}function b(M){let v=r.get(M);if(v.__webglInit===void 0)return;let L=M.source,z=f.get(L);if(z){let X=z[v.__cacheKey];X.usedTimes--,X.usedTimes===0&&D(M),Object.keys(z).length===0&&f.delete(L)}r.remove(M)}function D(M){let v=r.get(M);e.deleteTexture(v.__webglTexture);let L=M.source,z=f.get(L);delete z[v.__cacheKey],s.memory.textures--}function P(M){let v=r.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),r.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(v.__webglFramebuffer[z]))for(let X=0;X<v.__webglFramebuffer[z].length;X++)e.deleteFramebuffer(v.__webglFramebuffer[z][X]);else e.deleteFramebuffer(v.__webglFramebuffer[z]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[z])}else{if(Array.isArray(v.__webglFramebuffer))for(let z=0;z<v.__webglFramebuffer.length;z++)e.deleteFramebuffer(v.__webglFramebuffer[z]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let z=0;z<v.__webglColorRenderbuffer.length;z++)v.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[z]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let L=M.textures;for(let z=0,X=L.length;z<X;z++){let ce=r.get(L[z]);ce.__webglTexture&&(e.deleteTexture(ce.__webglTexture),s.memory.textures--),r.remove(L[z])}r.remove(M)}let N=0;function q(){N=0}function U(){return N}function G(M){N=M}function K(){let M=N;return M>=a.maxTextures&&Ge("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+a.maxTextures),N+=1,M}function H(M){let v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function de(M,v){let L=r.get(M);if(M.isVideoTexture&&it(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&L.__version!==M.version){let z=M.image;if(z===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(L,M,v);return}}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,L.__webglTexture,e.TEXTURE0+v)}function Y(M,v){let L=r.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){Ce(L,M,v);return}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,L.__webglTexture,e.TEXTURE0+v)}function Z(M,v){let L=r.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){Ce(L,M,v);return}i.bindTexture(e.TEXTURE_3D,L.__webglTexture,e.TEXTURE0+v)}function ie(M,v){let L=r.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&L.__version!==M.version){Ie(L,M,v);return}i.bindTexture(e.TEXTURE_CUBE_MAP,L.__webglTexture,e.TEXTURE0+v)}let Oe={[no]:e.REPEAT,[Li]:e.CLAMP_TO_EDGE,[so]:e.MIRRORED_REPEAT},Ee={[Ct]:e.NEAREST,[Dc]:e.NEAREST_MIPMAP_NEAREST,[Za]:e.NEAREST_MIPMAP_LINEAR,[wt]:e.LINEAR,[gs]:e.LINEAR_MIPMAP_NEAREST,[Di]:e.LINEAR_MIPMAP_LINEAR},tt={[Fc]:e.NEVER,[Hc]:e.ALWAYS,[Bc]:e.LESS,[$o]:e.LEQUAL,[zc]:e.EQUAL,[Qo]:e.GEQUAL,[Gc]:e.GREATER,[Vc]:e.NOTEQUAL};function ue(M,v){if(v.type===hi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===wt||v.magFilter===gs||v.magFilter===Za||v.magFilter===Di||v.minFilter===wt||v.minFilter===gs||v.minFilter===Za||v.minFilter===Di)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(M,e.TEXTURE_WRAP_S,Oe[v.wrapS]),e.texParameteri(M,e.TEXTURE_WRAP_T,Oe[v.wrapT]),(M===e.TEXTURE_3D||M===e.TEXTURE_2D_ARRAY)&&e.texParameteri(M,e.TEXTURE_WRAP_R,Oe[v.wrapR]),e.texParameteri(M,e.TEXTURE_MAG_FILTER,Ee[v.magFilter]),e.texParameteri(M,e.TEXTURE_MIN_FILTER,Ee[v.minFilter]),v.compareFunction&&(e.texParameteri(M,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(M,e.TEXTURE_COMPARE_FUNC,tt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ct||v.minFilter!==Za&&v.minFilter!==Di||v.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||r.get(v).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");e.texParameterf(M,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),r.get(v).__currentAnisotropy=v.anisotropy}}}function W(M,v){let L=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",C));let z=v.source,X=f.get(z);X===void 0&&(X={},f.set(z,X));let ce=H(v);if(ce!==M.__cacheKey){X[ce]===void 0&&(X[ce]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,L=!0),X[ce].usedTimes++;let pe=X[M.__cacheKey];pe!==void 0&&(X[M.__cacheKey].usedTimes--,pe.usedTimes===0&&D(v)),M.__cacheKey=ce,M.__webglTexture=X[ce].texture}return L}function Q(M,v,L){return Math.floor(Math.floor(M/L)/v)}function re(M,v,L,z){let X=M.updateRanges;if(X.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,v.width,v.height,L,z,v.data);else{X.sort((me,Te)=>me.start-Te.start);let ce=0;for(let me=1;me<X.length;me++){let Te=X[ce],se=X[me],Re=Te.start+Te.count,Le=Q(se.start,v.width,4),We=Q(Te.start,v.width,4);se.start<=Re+1&&Le===We&&Q(se.start+se.count-1,v.width,4)===Le?Te.count=Math.max(Te.count,se.start+se.count-Te.start):(++ce,X[ce]=se)}X.length=ce+1;let pe=i.getParameter(e.UNPACK_ROW_LENGTH),F=i.getParameter(e.UNPACK_SKIP_PIXELS),ae=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,v.width);for(let me=0,Te=X.length;me<Te;me++){let se=X[me],Re=Math.floor(se.start/4),Le=Math.ceil(se.count/4),We=Re%v.width,rt=Math.floor(Re/v.width),B=Le;i.pixelStorei(e.UNPACK_SKIP_PIXELS,We),i.pixelStorei(e.UNPACK_SKIP_ROWS,rt),i.texSubImage2D(e.TEXTURE_2D,0,We,rt,B,1,L,z,v.data)}M.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,pe),i.pixelStorei(e.UNPACK_SKIP_PIXELS,F),i.pixelStorei(e.UNPACK_SKIP_ROWS,ae)}}function Ce(M,v,L){let z=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(z=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(z=e.TEXTURE_3D);let X=W(M,v),ce=v.source;i.bindTexture(z,M.__webglTexture,e.TEXTURE0+L);let pe=r.get(ce);if(ce.version!==pe.__version||X===!0){if(i.activeTexture(e.TEXTURE0+L),!(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)){let $=et.getPrimaries(et.workingColorSpace),oe=v.colorSpace===ji?null:et.getPrimaries(v.colorSpace),Me=v.colorSpace===ji||$===oe?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}i.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment);let F=m(v.image,!1,a.maxTextureSize);F=qe(v,F);let ae=n.convert(v.format,v.colorSpace),me=n.convert(v.type),Te=_(v.internalFormat,ae,me,v.normalized,v.colorSpace,v.isVideoTexture);ue(z,v);let se,Re=v.mipmaps,Le=v.isVideoTexture!==!0,We=pe.__version===void 0||X===!0,rt=ce.dataReady,B=A(v,F);if(v.isDepthTexture)Te=E(v.format===ar,v.type),We&&(Le?i.texStorage2D(e.TEXTURE_2D,1,Te,F.width,F.height):i.texImage2D(e.TEXTURE_2D,0,Te,F.width,F.height,0,ae,me,null));else if(v.isDataTexture)if(Re.length>0){Le&&We&&i.texStorage2D(e.TEXTURE_2D,B,Te,Re[0].width,Re[0].height);for(let $=0,oe=Re.length;$<oe;$++)se=Re[$],Le?rt&&i.texSubImage2D(e.TEXTURE_2D,$,0,0,se.width,se.height,ae,me,se.data):i.texImage2D(e.TEXTURE_2D,$,Te,se.width,se.height,0,ae,me,se.data);v.generateMipmaps=!1}else Le?(We&&i.texStorage2D(e.TEXTURE_2D,B,Te,F.width,F.height),rt&&re(v,F,ae,me)):i.texImage2D(e.TEXTURE_2D,0,Te,F.width,F.height,0,ae,me,F.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Le&&We&&i.texStorage3D(e.TEXTURE_2D_ARRAY,B,Te,Re[0].width,Re[0].height,F.depth);for(let $=0,oe=Re.length;$<oe;$++)if(se=Re[$],v.format!==ui)if(ae!==null)if(Le){if(rt)if(v.layerUpdates.size>0){let Me=oh(se.width,se.height,v.format,v.type);for(let we of v.layerUpdates){let he=se.data.subarray(we*Me/se.data.BYTES_PER_ELEMENT,(we+1)*Me/se.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,we,se.width,se.height,1,ae,he)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,se.width,se.height,F.depth,ae,se.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,$,Te,se.width,se.height,F.depth,0,se.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?rt&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,se.width,se.height,F.depth,ae,me,se.data):i.texImage3D(e.TEXTURE_2D_ARRAY,$,Te,se.width,se.height,F.depth,0,ae,me,se.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Le&&We&&i.texStorage2D(e.TEXTURE_2D,B,Te,Re[0].width,Re[0].height);for(let $=0,oe=Re.length;$<oe;$++)se=Re[$],v.format!==ui?ae!==null?Le?rt&&i.compressedTexSubImage2D(e.TEXTURE_2D,$,0,0,se.width,se.height,ae,se.data):i.compressedTexImage2D(e.TEXTURE_2D,$,Te,se.width,se.height,0,se.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?rt&&i.texSubImage2D(e.TEXTURE_2D,$,0,0,se.width,se.height,ae,me,se.data):i.texImage2D(e.TEXTURE_2D,$,Te,se.width,se.height,0,ae,me,se.data)}else if(v.isDataArrayTexture)if(Le){if(We&&i.texStorage3D(e.TEXTURE_2D_ARRAY,B,Te,F.width,F.height,F.depth),rt)if(v.layerUpdates.size>0){let $=oh(F.width,F.height,v.format,v.type);for(let oe of v.layerUpdates){let Me=F.data.subarray(oe*$/F.data.BYTES_PER_ELEMENT,(oe+1)*$/F.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,oe,F.width,F.height,1,ae,me,Me)}v.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,ae,me,F.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Te,F.width,F.height,F.depth,0,ae,me,F.data);else if(v.isData3DTexture)Le?(We&&i.texStorage3D(e.TEXTURE_3D,B,Te,F.width,F.height,F.depth),rt&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,ae,me,F.data)):i.texImage3D(e.TEXTURE_3D,0,Te,F.width,F.height,F.depth,0,ae,me,F.data);else if(v.isFramebufferTexture){if(We)if(Le)i.texStorage2D(e.TEXTURE_2D,B,Te,F.width,F.height);else{let $=F.width,oe=F.height;for(let Me=0;Me<B;Me++)i.texImage2D(e.TEXTURE_2D,Me,Te,$,oe,0,ae,me,null),$>>=1,oe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in e){let $=e.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),F.parentNode!==$){$.appendChild(F),p.add(v),$.onpaint=oe=>{let Me=oe.changedElements;for(let we of p)Me.includes(we.image)&&(we.needsUpdate=!0)},$.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,F);else{let oe=e.RGBA,Me=e.RGBA,we=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,oe,Me,we,F)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Le&&We){let $=ne(Re[0]);i.texStorage2D(e.TEXTURE_2D,B,Te,$.width,$.height)}for(let $=0,oe=Re.length;$<oe;$++)se=Re[$],Le?rt&&i.texSubImage2D(e.TEXTURE_2D,$,0,0,ae,me,se):i.texImage2D(e.TEXTURE_2D,$,Te,ae,me,se);v.generateMipmaps=!1}else if(Le){if(We){let $=ne(F);i.texStorage2D(e.TEXTURE_2D,B,Te,$.width,$.height)}rt&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ae,me,F)}else i.texImage2D(e.TEXTURE_2D,0,Te,ae,me,F);d(v)&&T(z),pe.__version=ce.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Ie(M,v,L){if(v.image.length!==6)return;let z=W(M,v),X=v.source;i.bindTexture(e.TEXTURE_CUBE_MAP,M.__webglTexture,e.TEXTURE0+L);let ce=r.get(X);if(X.version!==ce.__version||z===!0){i.activeTexture(e.TEXTURE0+L);let pe=et.getPrimaries(et.workingColorSpace),F=v.colorSpace===ji?null:et.getPrimaries(v.colorSpace),ae=v.colorSpace===ji||pe===F?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let me=v.isCompressedTexture||v.image[0].isCompressedTexture,Te=v.image[0]&&v.image[0].isDataTexture,se=[];for(let he=0;he<6;he++)!me&&!Te?se[he]=m(v.image[he],!0,a.maxCubemapSize):se[he]=Te?v.image[he].image:v.image[he],se[he]=qe(v,se[he]);let Re=se[0],Le=n.convert(v.format,v.colorSpace),We=n.convert(v.type),rt=_(v.internalFormat,Le,We,v.normalized,v.colorSpace),B=v.isVideoTexture!==!0,$=ce.__version===void 0||z===!0,oe=X.dataReady,Me=A(v,Re);ue(e.TEXTURE_CUBE_MAP,v);let we;if(me){B&&$&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Me,rt,Re.width,Re.height);for(let he=0;he<6;he++){we=se[he].mipmaps;for(let Se=0;Se<we.length;Se++){let Fe=we[Se];v.format!==ui?Le!==null?B?oe&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se,0,0,Fe.width,Fe.height,Le,Fe.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se,rt,Fe.width,Fe.height,0,Fe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?oe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se,0,0,Fe.width,Fe.height,Le,We,Fe.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se,rt,Fe.width,Fe.height,0,Le,We,Fe.data)}}}else{if(we=v.mipmaps,B&&$){we.length>0&&Me++;let he=ne(se[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Me,rt,he.width,he.height)}for(let he=0;he<6;he++)if(Te){B?oe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,se[he].width,se[he].height,Le,We,se[he].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,se[he].width,se[he].height,0,Le,We,se[he].data);for(let Se=0;Se<we.length;Se++){let Fe=we[Se].image[he].image;B?oe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se+1,0,0,Fe.width,Fe.height,Le,We,Fe.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se+1,rt,Fe.width,Fe.height,0,Le,We,Fe.data)}}else{B?oe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Le,We,se[he]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,Le,We,se[he]);for(let Se=0;Se<we.length;Se++){let Fe=we[Se];B?oe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se+1,0,0,Le,We,Fe.image[he]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se+1,rt,Le,We,Fe.image[he])}}}d(v)&&T(e.TEXTURE_CUBE_MAP),ce.__version=X.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function fe(M,v,L,z,X,ce){let pe=n.convert(L.format,L.colorSpace),F=n.convert(L.type),ae=_(L.internalFormat,pe,F,L.normalized,L.colorSpace),me=r.get(v),Te=r.get(L);if(Te.__renderTarget=v,!me.__hasExternalTextures){let se=Math.max(1,v.width>>ce),Re=Math.max(1,v.height>>ce);X===e.TEXTURE_3D||X===e.TEXTURE_2D_ARRAY?i.texImage3D(X,ce,ae,se,Re,v.depth,0,pe,F,null):i.texImage2D(X,ce,ae,se,Re,0,pe,F,null)}i.bindFramebuffer(e.FRAMEBUFFER,M),I(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,X,Te.__webglTexture,0,ke(v)):(X===e.TEXTURE_2D||X>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,z,X,Te.__webglTexture,ce),i.bindFramebuffer(e.FRAMEBUFFER,null)}function je(M,v,L){if(e.bindRenderbuffer(e.RENDERBUFFER,M),v.depthBuffer){let z=v.depthTexture,X=z&&z.isDepthTexture?z.type:null,ce=E(v.stencilBuffer,X),pe=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;I(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ke(v),ce,v.width,v.height):L?e.renderbufferStorageMultisample(e.RENDERBUFFER,ke(v),ce,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,ce,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,pe,e.RENDERBUFFER,M)}else{let z=v.textures;for(let X=0;X<z.length;X++){let ce=z[X],pe=n.convert(ce.format,ce.colorSpace),F=n.convert(ce.type),ae=_(ce.internalFormat,pe,F,ce.normalized,ce.colorSpace);I(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ke(v),ae,v.width,v.height):L?e.renderbufferStorageMultisample(e.RENDERBUFFER,ke(v),ae,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,ae,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ee(M,v,L){let z=v.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=r.get(v.depthTexture);if(X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z){if(X.__webglInit===void 0&&(X.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),X.__webglTexture===void 0){X.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),ue(e.TEXTURE_CUBE_MAP,v.depthTexture);let me=n.convert(v.depthTexture.format),Te=n.convert(v.depthTexture.type),se;v.depthTexture.format===Ni?se=e.DEPTH_COMPONENT24:v.depthTexture.format===ar&&(se=e.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,se,v.width,v.height,0,me,Te,null)}}else de(v.depthTexture,0);let ce=X.__webglTexture,pe=ke(v),F=z?e.TEXTURE_CUBE_MAP_POSITIVE_X+L:e.TEXTURE_2D,ae=v.depthTexture.format===ar?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ni)I(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ae,F,ce,0,pe):e.framebufferTexture2D(e.FRAMEBUFFER,ae,F,ce,0);else if(v.depthTexture.format===ar)I(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ae,F,ce,0,pe):e.framebufferTexture2D(e.FRAMEBUFFER,ae,F,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function J(M){let v=r.get(M),L=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){let z=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),z){let X=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,z.removeEventListener("dispose",X)};z.addEventListener("dispose",X),v.__depthDisposeCallback=X}v.__boundDepthTexture=z}if(M.depthTexture&&!v.__autoAllocateDepthBuffer)if(L)for(let z=0;z<6;z++)ee(v.__webglFramebuffer[z],M,z);else{let z=M.texture.mipmaps;z&&z.length>0?ee(v.__webglFramebuffer[0],M,0):ee(v.__webglFramebuffer,M,0)}else if(L){v.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(i.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[z]),v.__webglDepthbuffer[z]===void 0)v.__webglDepthbuffer[z]=e.createRenderbuffer(),je(v.__webglDepthbuffer[z],M,!1);else{let X=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer[z];e.bindRenderbuffer(e.RENDERBUFFER,ce),e.framebufferRenderbuffer(e.FRAMEBUFFER,X,e.RENDERBUFFER,ce)}}else{let z=M.texture.mipmaps;if(z&&z.length>0?i.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=e.createRenderbuffer(),je(v.__webglDepthbuffer,M,!1);else{let X=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ce),e.framebufferRenderbuffer(e.FRAMEBUFFER,X,e.RENDERBUFFER,ce)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function le(M,v,L){let z=r.get(M);v!==void 0&&fe(z.__webglFramebuffer,M,M.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),L!==void 0&&J(M)}function ve(M){let v=M.texture,L=r.get(M),z=r.get(v);M.addEventListener("dispose",g);let X=M.textures,ce=M.isWebGLCubeRenderTarget===!0,pe=X.length>1;if(pe||(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=v.version,s.memory.textures++),ce){L.__webglFramebuffer=[];for(let F=0;F<6;F++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[F]=[];for(let ae=0;ae<v.mipmaps.length;ae++)L.__webglFramebuffer[F][ae]=e.createFramebuffer()}else L.__webglFramebuffer[F]=e.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let F=0;F<v.mipmaps.length;F++)L.__webglFramebuffer[F]=e.createFramebuffer()}else L.__webglFramebuffer=e.createFramebuffer();if(pe)for(let F=0,ae=X.length;F<ae;F++){let me=r.get(X[F]);me.__webglTexture===void 0&&(me.__webglTexture=e.createTexture(),s.memory.textures++)}if(M.samples>0&&I(M)===!1){L.__webglMultisampledFramebuffer=e.createFramebuffer(),L.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let F=0;F<X.length;F++){let ae=X[F];L.__webglColorRenderbuffer[F]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,L.__webglColorRenderbuffer[F]);let me=n.convert(ae.format,ae.colorSpace),Te=n.convert(ae.type),se=_(ae.internalFormat,me,Te,ae.normalized,ae.colorSpace,M.isXRRenderTarget===!0),Re=ke(M);e.renderbufferStorageMultisample(e.RENDERBUFFER,Re,se,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+F,e.RENDERBUFFER,L.__webglColorRenderbuffer[F])}e.bindRenderbuffer(e.RENDERBUFFER,null),M.depthBuffer&&(L.__webglDepthRenderbuffer=e.createRenderbuffer(),je(L.__webglDepthRenderbuffer,M,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ce){i.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),ue(e.TEXTURE_CUBE_MAP,v);for(let F=0;F<6;F++)if(v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)fe(L.__webglFramebuffer[F][ae],M,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae);else fe(L.__webglFramebuffer[F],M,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);d(v)&&T(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(pe){for(let F=0,ae=X.length;F<ae;F++){let me=X[F],Te=r.get(me),se=e.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(se=M.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(se,Te.__webglTexture),ue(se,me),fe(L.__webglFramebuffer,M,me,e.COLOR_ATTACHMENT0+F,se,0),d(me)&&T(se)}i.unbindTexture()}else{let F=e.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(F=M.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(F,z.__webglTexture),ue(F,v),v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)fe(L.__webglFramebuffer[ae],M,v,e.COLOR_ATTACHMENT0,F,ae);else fe(L.__webglFramebuffer,M,v,e.COLOR_ATTACHMENT0,F,0);d(v)&&T(F),i.unbindTexture()}M.depthBuffer&&J(M)}function _e(M){let v=M.textures;for(let L=0,z=v.length;L<z;L++){let X=v[L];if(d(X)){let ce=w(M),pe=r.get(X).__webglTexture;i.bindTexture(ce,pe),T(ce),i.unbindTexture()}}}let ye=[],Ue=[];function Be(M){if(M.samples>0){if(I(M)===!1){let v=M.textures,L=M.width,z=M.height,X=e.COLOR_BUFFER_BIT,ce=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=r.get(M),F=v.length>1;if(F)for(let me=0;me<v.length;me++)i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);let ae=M.texture.mipmaps;ae&&ae.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let me=0;me<v.length;me++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(X|=e.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(X|=e.STENCIL_BUFFER_BIT)),F){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);let Te=r.get(v[me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Te,0)}e.blitFramebuffer(0,0,L,z,0,0,L,z,X,e.NEAREST),l===!0&&(ye.length=0,Ue.length=0,ye.push(e.COLOR_ATTACHMENT0+me),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&(ye.push(ce),Ue.push(ce),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ue)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ye))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),F)for(let me=0;me<v.length;me++){i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);let Te=r.get(v[me]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,Te,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){let v=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function ke(M){return Math.min(a.maxSamples,M.samples)}function I(M){let v=r.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function it(M){let v=s.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function qe(M,v){let L=M.colorSpace,z=M.format,X=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||L!==Gn&&L!==ji&&(et.getTransfer(L)===st?(z!==ui||X!==Yt)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",L)),v}function ne(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(h.width=M.naturalWidth||M.width,h.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(h.width=M.displayWidth,h.height=M.displayHeight):(h.width=M.width,h.height=M.height),h}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.getTextureUnits=U,this.setTextureUnits=G,this.setTexture2D=de,this.setTexture2DArray=Y,this.setTexture3D=Z,this.setTextureCube=ie,this.rebindTextures=le,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=I,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Qv(e,t){function i(r,a=ji){let n,s=et.getTransfer(a);if(r===Yt)return e.UNSIGNED_BYTE;if(r===jo)return e.UNSIGNED_SHORT_4_4_4_4;if(r===qo)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Oh)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Fh)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Uh)return e.BYTE;if(r===Nh)return e.SHORT;if(r===Ra)return e.UNSIGNED_SHORT;if(r===Xo)return e.INT;if(r===Mi)return e.UNSIGNED_INT;if(r===hi)return e.FLOAT;if(r===Nt)return e.HALF_FLOAT;if(r===Bh)return e.ALPHA;if(r===zh)return e.RGB;if(r===ui)return e.RGBA;if(r===Ni)return e.DEPTH_COMPONENT;if(r===ar)return e.DEPTH_STENCIL;if(r===Yo)return e.RED;if(r===Zo)return e.RED_INTEGER;if(r===ur)return e.RG;if(r===Ko)return e.RG_INTEGER;if(r===Jo)return e.RGBA_INTEGER;if(r===Pn||r===In||r===Ln||r===Dn)if(s===st)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Pn)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===In)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ln)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Pn)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===In)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ln)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dn)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===oo||r===lo||r===ho||r===uo)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===oo)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lo)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ho)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===uo)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===co||r===po||r===fo||r===mo||r===go||r===Fn||r===vo)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===co||r===po)return s===st?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===fo)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===mo)return n.COMPRESSED_R11_EAC;if(r===go)return n.COMPRESSED_SIGNED_R11_EAC;if(r===Fn)return n.COMPRESSED_RG11_EAC;if(r===vo)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===_o||r===xo||r===yo||r===Mo||r===So||r===bo||r===To||r===Eo||r===wo||r===Ao||r===Co||r===Ro||r===Po||r===Io)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===_o)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xo)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yo)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mo)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===So)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bo)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===To)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Eo)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wo)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ao)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Co)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ro)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Po)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Io)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lo||r===Do||r===Uo)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===Lo)return s===st?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Do)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Uo)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===No||r===Oo||r===Bn||r===Fo)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===No)return n.COMPRESSED_RED_RGTC1_EXT;if(r===Oo)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fo)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Pa?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var e_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t_=`
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

}`,i_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new au(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new gt({vertexShader:e_,fragmentShader:t_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},r_=class extends dr{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,u=null,p=null,c=null,f=null,x=typeof XRWebGLBinding<"u",y=new i_,m={},d=t.getContextAttributes(),T=null,w=null,_=[],E=[],A=new te,C=null,g=null,b=new qt;b.viewport=new ft;let D=new qt;D.viewport=new ft;let P=[b,D],N=new ef,q=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=_[W];return Q===void 0&&(Q=new Ts,_[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=_[W];return Q===void 0&&(Q=new Ts,_[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=_[W];return Q===void 0&&(Q=new Ts,_[W]=Q),Q.getHandSpace()};function G(W){let Q=E.indexOf(W.inputSource);if(Q===-1)return;let re=_[Q];re!==void 0&&(re.update(W.inputSource,W.frame,l||n),re.dispatchEvent({type:W.type,data:W.inputSource}))}function K(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",H);for(let W=0;W<_.length;W++){let Q=E[W];Q!==null&&(E[W]=null,_[W].disconnect(Q))}q=null,U=null,y.reset();for(let W in m)delete m[W];if(e.setRenderTarget(T),c=null,p=null,u=null,r=null,w=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),g!==null){let W=g.camera;W.fov=g.fov,W.zoom=g.zoom,W.updateProjectionMatrix(),g=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){s=W,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return p!==null?p:c},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",K),r.addEventListener("inputsourceschange",H),d.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,re=null,Ce=null;d.depth&&(Ce=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=d.stencil?ar:Ni,re=d.stencil?Pa:Mi);let Ie={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:a};u=this.getBinding(),p=u.createProjectionLayer(Ie),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new Rt(p.textureWidth,p.textureHeight,{format:ui,type:Yt,depthTexture:new Da(p.textureWidth,p.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let Q={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:a};c=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),w=new Rt(c.framebufferWidth,c.framebufferHeight,{format:ui,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),ue.setContext(r),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(W){for(let Q=0;Q<W.removed.length;Q++){let re=W.removed[Q],Ce=E.indexOf(re);Ce>=0&&(E[Ce]=null,_[Ce].disconnect(re))}for(let Q=0;Q<W.added.length;Q++){let re=W.added[Q],Ce=E.indexOf(re);if(Ce===-1){for(let fe=0;fe<_.length;fe++)if(fe>=E.length){E.push(re),Ce=fe;break}else if(E[fe]===null){E[fe]=re,Ce=fe;break}if(Ce===-1)break}let Ie=_[Ce];Ie&&Ie.connect(re)}}let de=new R,Y=new R;function Z(W,Q,re){de.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(re.matrixWorld);let Ce=de.distanceTo(Y),Ie=Q.projectionMatrix.elements,fe=re.projectionMatrix.elements,je=Ie[14]/(Ie[10]-1),ee=Ie[14]/(Ie[10]+1),J=(Ie[9]+1)/Ie[5],le=(Ie[9]-1)/Ie[5],ve=(Ie[8]-1)/Ie[0],_e=(fe[8]+1)/fe[0],ye=je*ve,Ue=je*_e,Be=Ce/(-ve+_e),ke=Be*-ve;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ke),W.translateZ(Be),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ie[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let I=je+Be,it=ee+Be,qe=ye-ke,ne=Ue+(Ce-ke),M=J*ee/it*I,v=le*ee/it*I;W.projectionMatrix.makePerspective(qe,ne,M,v,I,it),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ie(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let Q=W.near,re=W.far;y.texture!==null&&(y.depthNear>0&&(Q=y.depthNear),y.depthFar>0&&(re=y.depthFar)),N.near=D.near=b.near=Q,N.far=D.far=b.far=re,(q!==N.near||U!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),q=N.near,U=N.far),N.layers.mask=W.layers.mask|6,b.layers.mask=N.layers.mask&-5,D.layers.mask=N.layers.mask&-3;let Ce=W.parent,Ie=N.cameras;ie(N,Ce);for(let fe=0;fe<Ie.length;fe++)ie(Ie[fe],Ce);Ie.length===2?Z(N,b,D):N.projectionMatrix.copy(b.projectionMatrix),g===null&&W.isPerspectiveCamera&&(g={camera:W,fov:W.fov,zoom:W.zoom}),Oe(W,N,Ce)};function Oe(W,Q,re){re===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(re.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=La*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(p===null&&c===null))return o},this.setFoveation=function(W){o=W,p!==null&&(p.fixedFoveation=W),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(N)},this.getCameraTexture=function(W){return m[W]};let Ee=null;function tt(W,Q){if(h=Q.getViewerPose(l||n),f=Q,h!==null){let re=h.views;c!==null&&(e.setRenderTargetFramebuffer(w,c.framebuffer),e.setRenderTarget(w));let Ce=!1;re.length!==N.cameras.length&&(N.cameras.length=0,Ce=!0);for(let fe=0;fe<re.length;fe++){let je=re[fe],ee=null;if(c!==null)ee=c.getViewport(je);else{let le=u.getViewSubImage(p,je);ee=le.viewport,fe===0&&(e.setRenderTargetTextures(w,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(w))}let J=P[fe];J===void 0&&(J=new qt,J.layers.enable(fe),J.viewport=new ft,P[fe]=J),J.matrix.fromArray(je.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(je.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(ee.x,ee.y,ee.width,ee.height),fe===0&&(N.matrix.copy(J.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ce===!0&&N.cameras.push(J)}let Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let fe=u.getDepthInformation(re[0]);fe&&fe.isValid&&fe.texture&&y.init(fe,r.renderState)}if(Ie&&Ie.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let fe=0;fe<re.length;fe++){let je=re[fe].camera;if(je){let ee=m[je];ee||(ee=new au,m[je]=ee);let J=u.getCameraImage(je);ee.sourceTexture=J}}}}for(let re=0;re<_.length;re++){let Ce=E[re],Ie=_[re];Ce!==null&&Ie!==void 0&&Ie.update(Ce,Q,l||n)}Ee&&Ee(W,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),f=null}let ue=new ku;ue.setAnimationLoop(tt),this.setAnimationLoop=function(W){Ee=W},this.dispose=function(){}}},a_=new Ke,Ku=new Ye;Ku.set(-1,0,0,0,1,0,0,0,1);function n_(e,t){function i(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function r(m,d){d.color.getRGB(m.fogColor.value,Nu(e)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function a(m,d,T,w,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?n(m,d):d.isMeshLambertMaterial?(n(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(n(m,d),p(m,d)):d.isMeshPhongMaterial?(n(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(n(m,d),c(m,d),d.isMeshPhysicalMaterial&&f(m,d,_)):d.isMeshMatcapMaterial?(n(m,d),x(m,d)):d.isMeshDepthMaterial?n(m,d):d.isMeshDistanceMaterial?(n(m,d),y(m,d)):d.isMeshNormalMaterial?n(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,T,w):d.isSpriteMaterial?h(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function n(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,i(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,i(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ht&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,i(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ht&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,i(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,i(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,i(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let T=t.get(d),w=T.envMap,_=T.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(a_.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ku),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,i(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,i(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,i(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=w*.5,d.map&&(m.map.value=d.map,i(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,i(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function c(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,i(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,i(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,i(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,i(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,i(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,i(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,i(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ht&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,i(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,i(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,i(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,i(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,i(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,i(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,i(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let T=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function s_(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){let A=E.program;r.uniformBlockBinding(_,A)}function h(_,E){let A=a[_.id];A===void 0&&(m(_),A=u(_),a[_.id]=A,_.addEventListener("dispose",T));let C=E.program;r.updateUBOMapping(_,C);let g=t.render.frame;n[_.id]!==g&&(c(_),n[_.id]=g)}function u(_){let E=p();_.__bindingPointIndex=E;let A=e.createBuffer(),C=_.__size,g=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,C,g),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,A),A}function p(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(_){let E=a[_.id],A=_.uniforms,C=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let g=0,b=A.length;g<b;g++){let D=A[g];if(Array.isArray(D))for(let P=0,N=D.length;P<N;P++)f(D[P],g,P,C);else f(D,g,0,C)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(_,E,A,C){if(y(_,E,A,C)===!0){let g=_.__offset,b=_.value;if(Array.isArray(b)){let D=0;for(let P=0;P<b.length;P++){let N=b[P],q=d(N);x(N,_.__data,D),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(D+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(b,_.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,g,_.__data)}}function x(_,E,A){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,A)}function y(_,E,A,C){let g=_.value,b=E+"_"+A;if(C[b]===void 0)return typeof g=="number"||typeof g=="boolean"?C[b]=g:ArrayBuffer.isView(g)?C[b]=g.slice():C[b]=g.clone(),!0;{let D=C[b];if(typeof g=="number"||typeof g=="boolean"){if(D!==g)return C[b]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(D.equals(g)===!1)return D.copy(g),!0}}return!1}function m(_){let E=_.uniforms,A=0,C=16;for(let b=0,D=E.length;b<D;b++){let P=Array.isArray(E[b])?E[b]:[E[b]];for(let N=0,q=P.length;N<q;N++){let U=P[N],G=Array.isArray(U.value)?U.value:[U.value];for(let K=0,H=G.length;K<H;K++){let de=G[K],Y=d(de),Z=A%C,ie=Z%Y.boundary,Oe=Z+ie;A+=ie,Oe!==0&&C-Oe<Y.storage&&(A+=C-Oe),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=A,A+=Y.storage}}}let g=A%C;return g>0&&(A+=C-g),_.__size=A,_.__cache={},this}function d(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",_),E}function T(_){let E=_.target;E.removeEventListener("dispose",T);let A=s.indexOf(E.__bindingPointIndex);s.splice(A,1),e.deleteBuffer(a[E.id]),delete a[E.id],delete n[E.id]}function w(){for(let _ in a)e.deleteBuffer(a[_]);s=[],a={},n={}}return{bind:l,update:h,dispose:w}}var o_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;function l_(){return _i===null&&(_i=new Qh(o_,16,16,ur,Nt),_i.name="DFG_LUT",_i.minFilter=wt,_i.magFilter=wt,_i.wrapS=Li,_i.wrapT=Li,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var Ju=class{constructor(e={}){let{canvas:t=Xc(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1,outputBufferType:c=Yt}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=n;let x=c,y=new Set([Jo,Ko,Zo]),m=new Set([Yt,Mi,Ra,Pa,jo,qo]),d=new Uint32Array(4),T=new Int32Array(4),w=new R,_=null,E=null,A=[],C=[],g=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,D=!1,P=null,N=null,q=null,U=null;this._outputColorSpace=Gt;let G=0,K=0,H=null,de=-1,Y=null,Z=new ft,ie=new ft,Oe=null,Ee=new Xe(0),tt=0,ue=t.width,W=t.height,Q=1,re=null,Ce=null,Ie=new ft(0,0,ue,W),fe=new ft(0,0,ue,W),je=!1,ee=new $r,J=!1,le=!1,ve=new Ke,_e=new R,ye=new ft,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Be=!1;function ke(){return H===null?Q:1}let I=i;function it(S,O){return t.getContext(S,O)}let qe,ne,M,v,L,z,X,ce,pe,F,ae,me,Te,se,Re,Le,We,rt,B,$,oe,Me,we;try{let S={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",nt,!1),I===null){let O="webgl2";if(I=it(O,S),I===null)throw it(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}he()}catch(S){throw t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),Ve("WebGLRenderer: "+S.message),S}function he(){qe=new l0(I),qe.init(),oe=new Qv(I,qe),ne=new $g(I,qe,e,oe),M=new Jv(I,qe),ne.reversedDepthBuffer&&p&&M.buffers.depth.setReversed(!0),N=I.createFramebuffer(),q=I.createFramebuffer(),U=I.createFramebuffer(),v=new c0(I),L=new Fv,z=new $v(I,qe,M,L,ne,oe,v),X=new o0(b),ce=new pf(I),Me=new Kg(I,ce),pe=new h0(I,ce,v,Me),F=new p0(I,pe,ce,Me,v),rt=new d0(I,ne,z),Re=new Qg(L),ae=new Ov(b,X,qe,ne,Me,Re),me=new n_(b,L),Te=new zv,se=new Xv(qe),We=new Zg(b,X,M,F,f,o),Le=new Kv(b,F,ne),we=new s_(I,v,ne,M),B=new Jg(I,qe,v),$=new u0(I,qe,v),v.programs=ae.programs,b.capabilities=ne,b.extensions=qe,b.properties=L,b.renderLists=Te,b.shadowMap=Le,b.state=M,b.info=v}x!==Yt&&(g=new m0(x,t.width,t.height,s,r,a));let Se=new r_(b,I);this.xr=Se,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=qe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=qe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(S){S!==void 0&&(Q=S,this.setSize(ue,W,!1))},this.getSize=function(S){return S.set(ue,W)},this.setSize=function(S,O,j=!0){if(Se.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=S,W=O,t.width=Math.floor(S*Q),t.height=Math.floor(O*Q),j===!0&&(t.style.width=S+"px",t.style.height=O+"px"),g!==null&&g.setSize(t.width,t.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(ue*Q,W*Q).floor()},this.setDrawingBufferSize=function(S,O,j){ue=S,W=O,Q=j,t.width=Math.floor(S*j),t.height=Math.floor(O*j),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(x===Yt){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(Z)},this.getViewport=function(S){return S.copy(Ie)},this.setViewport=function(S,O,j,k){S.isVector4?Ie.set(S.x,S.y,S.z,S.w):Ie.set(S,O,j,k),M.viewport(Z.copy(Ie).multiplyScalar(Q).round())},this.getScissor=function(S){return S.copy(fe)},this.setScissor=function(S,O,j,k){S.isVector4?fe.set(S.x,S.y,S.z,S.w):fe.set(S,O,j,k),M.scissor(ie.copy(fe).multiplyScalar(Q).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(S){M.setScissorTest(je=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){Ce=S},this.getClearColor=function(S){return S.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,j=!0){let k=0;if(S){let V=!1;if(H!==null){let ge=H.texture.format;V=y.has(ge)}if(V){let ge=H.texture.type,be=m.has(ge),Ae=We.getClearColor(),Pe=We.getClearAlpha(),ze=Ae.r,Qe=Ae.g,at=Ae.b;be?(d[0]=ze,d[1]=Qe,d[2]=at,d[3]=Pe,I.clearBufferuiv(I.COLOR,0,d)):(T[0]=ze,T[1]=Qe,T[2]=at,T[3]=Pe,I.clearBufferiv(I.COLOR,0,T))}else k|=I.COLOR_BUFFER_BIT}O&&(k|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),P=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),We.dispose(),Te.dispose(),se.dispose(),L.dispose(),X.dispose(),F.dispose(),Me.dispose(),we.dispose(),ae.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Qt),Se.removeEventListener("sessionend",Zi),ei.stop()};function Fe(S){S.preventDefault(),kn("WebGLRenderer: Context Lost."),D=!0}function vt(){kn("WebGLRenderer: Context Restored."),D=!1;let S=v.autoReset,O=Le.enabled,j=Le.autoUpdate,k=Le.needsUpdate,V=Le.type;he(),v.autoReset=S,Le.enabled=O,Le.autoUpdate=j,Le.needsUpdate=k,Le.type=V}function nt(S){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ot(S){let O=S.target;O.removeEventListener("dispose",Ot),It(O)}function It(S){Wt(S),L.remove(S)}function Wt(S){let O=L.get(S).programs;O!==void 0&&(O.forEach(function(j){ae.releaseProgram(j)}),S.isShaderMaterial&&ae.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,j,k,V,ge){O===null&&(O=Ue);let be=V.isMesh&&V.matrixWorld.determinantAffine()<0,Ae=wi(S,O,j,k,V);M.setMaterial(k,be);let Pe=j.index,ze=1;if(k.wireframe===!0){if(Pe=pe.getWireframeAttribute(j),Pe===void 0)return;ze=2}let Qe=j.drawRange,at=j.attributes.position,Ne=Qe.start*ze,lt=(Qe.start+Qe.count)*ze;ge!==null&&(Ne=Math.max(Ne,ge.start*ze),lt=Math.min(lt,(ge.start+ge.count)*ze)),Pe!==null?(Ne=Math.max(Ne,0),lt=Math.min(lt,Pe.count)):at!=null&&(Ne=Math.max(Ne,0),lt=Math.min(lt,at.count));let Mt=lt-Ne;if(Mt<0||Mt===1/0)return;Me.setup(V,k,Ae,j,Pe);let dt,pt=B;if(Pe!==null&&(dt=ce.get(Pe),pt=$,pt.setIndex(dt)),V.isMesh)k.wireframe===!0?(M.setLineWidth(k.wireframeLinewidth*ke()),pt.setMode(I.LINES)):pt.setMode(I.TRIANGLES);else if(V.isLine){let _t=k.linewidth;_t===void 0&&(_t=1),M.setLineWidth(_t*ke()),V.isLineSegments?pt.setMode(I.LINES):V.isLineLoop?pt.setMode(I.LINE_LOOP):pt.setMode(I.LINE_STRIP)}else V.isPoints?pt.setMode(I.POINTS):V.isSprite&&pt.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let _t=V._multiDrawStarts,De=V._multiDrawCounts,Ft=V._multiDrawCount,Ji=Pe?ce.get(Pe).bytesPerElement:1,ti=L.get(k).currentProgram.getUniforms();for(let gi=0;gi<Ft;gi++)ti.setValue(I,"_gl_DrawID",gi),pt.render(_t[gi]/Ji,De[gi])}else if(V.isInstancedMesh)pt.renderInstances(Ne,Mt,V.count);else if(j.isInstancedBufferGeometry){let _t=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,De=Math.min(j.instanceCount,_t);pt.renderInstances(Ne,Mt,De)}else pt.render(Ne,Mt)};function Ei(S,O,j,k){P!==null&&S.isNodeMaterial&&P.setObject(k,S),J===!0&&Re.setState(S,j,!1),S.transparent===!0&&S.side===oi&&S.forceSinglePass===!1?(S.side=Ht,S.needsUpdate=!0,Ki(S,O,k),S.side=lr,S.needsUpdate=!0,Ki(S,O,k),S.side=oi):Ki(S,O,k)}this.compile=function(S,O,j=null){j===null&&(j=S),P!==null&&P.renderStart(S,O,j),E=se.get(j),E.init(O),C.push(E),j.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),S!==j&&S.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),P!==null&&P.updateLights(E.state.lightsArray),le=this.localClippingEnabled,J=Re.init(this.clippingPlanes,le),J===!0&&Re.setGlobalState(this.clippingPlanes,O),P!==null&&Le.render(E.state.shadowsArray,j,O);let k=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ge=V.material;if(ge)if(Array.isArray(ge))for(let be=0;be<ge.length;be++){let Ae=ge[be];Ei(Ae,j,O,V),k.add(Ae)}else Ei(ge,j,O,V),k.add(ge)}),E=C.pop(),P!==null&&P.renderEnd(),k},this.compileAsync=function(S,O,j=null){let k=this.compile(S,O,j);return new Promise(V=>{function ge(){if(k.forEach(function(be){let Ae=L.get(be).currentProgram;(Ae===void 0||Ae.isReady())&&k.delete(be)}),k.size===0){V(S);return}setTimeout(ge,10)}qe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let fi=null;function $t(S){fi&&fi(S)}function Qt(){ei.stop()}function Zi(){ei.start()}let ei=new ku;ei.setAnimationLoop($t),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(S){fi=S,Se.setAnimationLoop(S),S===null?ei.stop():ei.start()},Se.addEventListener("sessionstart",Qt),Se.addEventListener("sessionend",Zi),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;P!==null&&P.renderStart(S,O);let j=Se.enabled===!0&&Se.isPresenting===!0,k=g!==null&&(H===null||j)&&g.begin(b,H);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(g===null||g.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(O),O=Se.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,O,H),E=se.get(S,C.length),E.init(O),E.state.textureUnits=z.getTextureUnits(),C.push(E),ve.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ee.setFromProjectionMatrix(ve,ci,O.reversedDepth),le=this.localClippingEnabled,J=Re.init(this.clippingPlanes,le),_=Te.get(S,A.length),_.init(),A.push(_),Se.enabled===!0&&Se.isPresenting===!0){let ge=b.xr.getDepthSensingMesh();ge!==null&&mi(ge,O,-1/0,b.sortObjects)}mi(S,O,0,b.sortObjects),_.finish(),P!==null&&P.updateLights(E.state.lightsArray),b.sortObjects===!0&&_.sort(re,Ce),Be=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Be&&We.addToRenderList(_,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),J===!0&&Re.beginShadows();let V=E.state.shadowsArray;if(Le.render(V,S,O),J===!0&&Re.endShadows(),(k&&g.hasRenderPass())===!1){let ge=_.opaque,be=_.transmissive;if(E.setupLights(),O.isArrayCamera){let Ae=O.cameras;if(be.length>0)for(let Pe=0,ze=Ae.length;Pe<ze;Pe++){let Qe=Ae[Pe];qa(ge,be,S,Qe)}Be&&We.render(S);for(let Pe=0,ze=Ae.length;Pe<ze;Pe++){let Qe=Ae[Pe];na(_,S,Qe,Qe.viewport)}}else be.length>0&&qa(ge,be,S,O),Be&&We.render(S),na(_,S,O)}H!==null&&K===0&&(z.updateMultisampleRenderTarget(H),z.updateRenderTargetMipmap(H)),k&&g.end(b),S.isScene===!0&&S.onAfterRender(b,S,O),Me.resetDefaultState(),de=-1,Y=null,C.pop(),C.length>0?(E=C[C.length-1],z.setTextureUnits(E.state.textureUnits),J===!0&&Re.setGlobalState(b.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?_=A[A.length-1]:_=null,P!==null&&P.renderEnd()};function mi(S,O,j,k){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(ee)){k&&ye.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);let ge=F.update(S),be=S.material;be.visible&&_.push(S,ge,be,j,ye.z,null,O)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(ee))){let ge=F.update(S),be=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ye.copy(S.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ye.copy(ge.boundingSphere.center)),ye.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(be)){let Ae=ge.groups;for(let Pe=0,ze=Ae.length;Pe<ze;Pe++){let Qe=Ae[Pe],at=be[Qe.materialIndex];at&&at.visible&&_.push(S,ge,at,j,ye.z,Qe,O)}}else be.visible&&_.push(S,ge,be,j,ye.z,null,O)}}let V=S.children;for(let ge=0,be=V.length;ge<be;ge++)mi(V[ge],O,j,k)}function na(S,O,j,k){let{opaque:V,transmissive:ge,transparent:be}=S;E.setupLightsView(j),J===!0&&Re.setGlobalState(b.clippingPlanes,j),k&&M.viewport(Z.copy(k)),V.length>0&&fr(V,O,j),ge.length>0&&fr(ge,O,j),be.length>0&&fr(be,O,j),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function qa(S,O,j,k){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let at=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new Rt(1,1,{generateMipmaps:!0,type:at?Nt:Yt,minFilter:Di,samples:Math.max(4,ne.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}let V=E.state.transmissionRenderTarget[k.id],ge=k.viewport||Z;V.setSize(ge.z*b.transmissionResolutionScale,ge.w*b.transmissionResolutionScale);let be=b.getRenderTarget(),Ae=b.getActiveCubeFace(),Pe=b.getActiveMipmapLevel();b.setRenderTarget(V),b.getClearColor(Ee),tt=b.getClearAlpha(),tt<1&&b.setClearColor(16777215,.5),b.clear(),Be&&We.render(j);let ze=b.toneMapping;b.toneMapping=ri;let Qe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),J===!0&&Re.setGlobalState(b.clippingPlanes,k),fr(S,j,k),z.updateMultisampleRenderTarget(V),z.updateRenderTargetMipmap(V),qe.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ne=0,lt=O.length;Ne<lt;Ne++){let Mt=O[Ne],{object:dt,geometry:pt,material:_t,group:De}=Mt;if(_t.side===oi&&dt.layers.test(k.layers)){let Ft=_t.side;_t.side=Ht,_t.needsUpdate=!0,sa(dt,j,k,pt,_t,De),_t.side=Ft,_t.needsUpdate=!0,at=!0}}at===!0&&(z.updateMultisampleRenderTarget(V),z.updateRenderTargetMipmap(V))}b.setRenderTarget(be,Ae,Pe),b.setClearColor(Ee,tt),Qe!==void 0&&(k.viewport=Qe),b.toneMapping=ze}function fr(S,O,j){let k=O.isScene===!0?O.overrideMaterial:null;for(let V=0,ge=S.length;V<ge;V++){let be=S[V],{object:Ae,geometry:Pe,group:ze}=be,Qe=be.material;Qe.allowOverride===!0&&k!==null&&(Qe=k),Ae.layers.test(j.layers)&&sa(Ae,O,j,Pe,Qe,ze)}}function sa(S,O,j,k,V,ge){P!==null&&V.isNodeMaterial&&P.setObject(S,V),S.onBeforeRender(b,O,j,k,V,ge),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(b,O,j,k,S,ge),V.transparent===!0&&V.side===oi&&V.forceSinglePass===!1?(V.side=Ht,V.needsUpdate=!0,b.renderBufferDirect(j,O,k,V,S,ge),V.side=lr,V.needsUpdate=!0,b.renderBufferDirect(j,O,k,V,S,ge),V.side=oi):b.renderBufferDirect(j,O,k,V,S,ge),S.onAfterRender(b,O,j,k,V,ge)}function Ki(S,O,j){O.isScene!==!0&&(O=Ue);let k=L.get(S),V=E.state.lights,ge=E.state.shadowsArray,be=V.state.version,Ae=ae.getParameters(S,V.state,ge,O,j,E.state.lightProbeGridArray),Pe=ae.getProgramCacheKey(Ae),ze=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,k.fog=O.fog;let Qe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=X.get(S.envMap||k.environment,Qe),k.envMapRotation=k.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,ze===void 0&&(S.addEventListener("dispose",Ot),ze=new Map,k.programs=ze);let at=ze.get(Pe);if(at!==void 0){if(k.currentProgram===at&&k.lightsStateVersion===be)return la(S,Ae),at}else Ae.uniforms=ae.getUniforms(S),P!==null&&S.isNodeMaterial&&P.build(S,j,Ae),S.onBeforeCompile(Ae,b),at=ae.acquireProgram(Ae,Pe),ze.set(Pe,at),k.uniforms=Ae.uniforms;let Ne=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=Re.uniform),la(S,Ae),k.needsLights=mr(S),k.lightsStateVersion=be,k.needsLights&&(Ne.ambientLightColor.value=V.state.ambient,Ne.lightProbe.value=V.state.probe,Ne.sunLights.value=V.state.sun,Ne.sunLightShadows.value=V.state.sunShadow,Ne.directionalLights.value=V.state.directional,Ne.directionalLightShadows.value=V.state.directionalShadow,Ne.spotLights.value=V.state.spot,Ne.spotLightShadows.value=V.state.spotShadow,Ne.rectAreaLights.value=V.state.rectArea,Ne.ltc_1.value=V.state.rectAreaLTC1,Ne.ltc_2.value=V.state.rectAreaLTC2,Ne.pointLights.value=V.state.point,Ne.pointLightShadows.value=V.state.pointShadow,Ne.hemisphereLights.value=V.state.hemi,Ne.sunShadowMatrix.value=V.state.sunShadowMatrix,Ne.sunShadowCascade.value=V.state.sunShadowCascade,Ne.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ne.spotLightMatrix.value=V.state.spotLightMatrix,Ne.spotLightMap.value=V.state.spotLightMap,Ne.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=at,k.uniformsList=null,at}function oa(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=On.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function la(S,O){let j=L.get(S);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.batchingColor=O.batchingColor,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function ha(S,O){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;w.setFromMatrixPosition(O.matrixWorld);for(let j=0,k=S.length;j<k;j++){let V=S[j];if(V.texture!==null&&V.boundingBox.containsPoint(w))return V}return null}function wi(S,O,j,k,V){O.isScene!==!0&&(O=Ue),z.resetTextureUnits();let ge=O.fog,be=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?O.environment:null,Ae=H===null?b.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:et.workingColorSpace,Pe=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,ze=X.get(k.envMap||be,Pe),Qe=k.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,at=!!j.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ne=!!j.morphAttributes.position,lt=!!j.morphAttributes.normal,Mt=!!j.morphAttributes.color,dt=ri;k.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(dt=b.toneMapping);let pt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_t=pt!==void 0?pt.length:0,De=L.get(k),Ft=E.state.lights;if(J===!0&&(le===!0||S!==Y)){let ut=S===Y&&k.id===de;Re.setState(k,S,ut)}let Ji=!1;k.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ft.state.version||De.outputColorSpace!==Ae||V.isBatchedMesh&&De.batching===!1||!V.isBatchedMesh&&De.batching===!0||V.isBatchedMesh&&De.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&De.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&De.instancing===!1||!V.isInstancedMesh&&De.instancing===!0||V.isSkinnedMesh&&De.skinning===!1||!V.isSkinnedMesh&&De.skinning===!0||V.isInstancedMesh&&De.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&De.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&De.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&De.instancingMorph===!1&&V.morphTexture!==null||De.envMap!==ze||k.fog===!0&&De.fog!==ge||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Re.numPlanes||De.numIntersection!==Re.numIntersection)||De.vertexAlphas!==Qe||De.vertexTangents!==at||De.morphTargets!==Ne||De.morphNormals!==lt||De.morphColors!==Mt||De.toneMapping!==dt||De.morphTargetsCount!==_t||!!De.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ji=!0):(Ji=!0,De.__version=k.version);let ti=De.currentProgram;Ji===!0&&(ti=Ki(k,O,V),P&&k.isNodeMaterial&&P.onUpdateProgram(k,ti,De));let gi=!1,Bi=!1,gr=!1,ht=ti.getUniforms(),yt=De.uniforms;if(M.useProgram(ti.program)&&(gi=!0,Bi=!0,gr=!0),k.id!==de&&(de=k.id,Bi=!0),De.needsLights){let ut=ha(E.state.lightProbeGridArray,V);De.lightProbeGrid!==ut&&(De.lightProbeGrid=ut,Bi=!0)}if(gi||Y!==S){M.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ht.setValue(I,"projectionMatrix",S.projectionMatrix),ht.setValue(I,"viewMatrix",S.matrixWorldInverse);let ut=ht.map.cameraPosition;ut!==void 0&&ut.setValue(I,_e.setFromMatrixPosition(S.matrixWorld)),ne.logarithmicDepthBuffer&&ht.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ht.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),Y!==S&&(Y=S,Bi=!0,gr=!0)}if(De.needsLights&&(Ft.state.sunShadowMap.length>0&&ht.setValue(I,"sunShadowMap",Ft.state.sunShadowMap,z),Ft.state.directionalShadowMap.length>0&&ht.setValue(I,"directionalShadowMap",Ft.state.directionalShadowMap,z),Ft.state.spotShadowMap.length>0&&ht.setValue(I,"spotShadowMap",Ft.state.spotShadowMap,z),Ft.state.pointShadowMap.length>0&&ht.setValue(I,"pointShadowMap",Ft.state.pointShadowMap,z)),V.isSkinnedMesh){ht.setOptional(I,V,"bindMatrix"),ht.setOptional(I,V,"bindMatrixInverse");let ut=V.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),ht.setValue(I,"boneTexture",ut.boneTexture,z))}V.isBatchedMesh&&(ht.setOptional(I,V,"batchingTexture"),ht.setValue(I,"batchingTexture",V._matricesTexture,z),ht.setOptional(I,V,"batchingIdTexture"),ht.setValue(I,"batchingIdTexture",V._indirectTexture,z),ht.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&ht.setValue(I,"batchingColorTexture",V._colorsTexture,z));let zi=j.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&rt.update(V,j,ti),(Bi||De.receiveShadow!==V.receiveShadow)&&(De.receiveShadow=V.receiveShadow,ht.setValue(I,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&O.environment!==null&&(yt.envMapIntensity.value=O.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=l_()),Bi){if(ht.setValue(I,"toneMappingExposure",b.toneMappingExposure),De.needsLights&&At(yt,gr),ge&&k.fog===!0&&me.refreshFogUniforms(yt,ge),me.refreshMaterialUniforms(yt,k,Q,W,E.state.transmissionRenderTarget[S.id]),De.needsLights&&De.lightProbeGrid){let ut=De.lightProbeGrid;yt.probesSH.value=ut.texture,yt.probesMin.value.copy(ut.boundingBox.min),yt.probesMax.value.copy(ut.boundingBox.max),yt.probesResolution.value.copy(ut.resolution)}On.upload(I,oa(De),yt,z)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(On.upload(I,oa(De),yt,z),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ht.setValue(I,"center",V.center),ht.setValue(I,"modelViewMatrix",V.modelViewMatrix),ht.setValue(I,"normalMatrix",V.normalMatrix),ht.setValue(I,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let ut=k.uniformsGroups;for(let ua=0,vr=ut.length;ua<vr;ua++){let pl=ut[ua];we.update(pl,ti),we.bind(pl,ti)}}return ti}function At(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.sunLights.needsUpdate=O,S.sunLightShadows.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function mr(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(S,O,j){let k=L.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),L.get(S.texture).__webglTexture=O,L.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:j,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){let j=L.get(S);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,j=0){H=S,G=O,K=j;let k=null,V=!1,ge=!1;if(S){let be=L.get(S);if(be.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(I.FRAMEBUFFER,be.__webglFramebuffer),Z.copy(S.viewport),ie.copy(S.scissor),Oe=S.scissorTest,M.viewport(Z),M.scissor(ie),M.setScissorTest(Oe),de=-1;return}else if(be.__webglFramebuffer===void 0)z.setupRenderTarget(S);else if(be.__hasExternalTextures)z.rebindTextures(S,L.get(S.texture).__webglTexture,L.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let ze=S.depthTexture;if(be.__boundDepthTexture!==ze){if(ze!==null&&L.has(ze)&&(S.width!==ze.image.width||S.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(S)}}let Ae=S.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ge=!0);let Pe=L.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pe[O])?k=Pe[O][j]:k=Pe[O],V=!0):S.samples>0&&z.useMultisampledRTT(S)===!1?k=L.get(S).__webglMultisampledFramebuffer:Array.isArray(Pe)?k=Pe[j]:k=Pe,Z.copy(S.viewport),ie.copy(S.scissor),Oe=S.scissorTest}else Z.copy(Ie).multiplyScalar(Q).floor(),ie.copy(fe).multiplyScalar(Q).floor(),Oe=je;if(j!==0&&(k=N),M.bindFramebuffer(I.FRAMEBUFFER,k)&&M.drawBuffers(S,k),M.viewport(Z),M.scissor(ie),M.setScissorTest(Oe),V){let be=L.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,j)}else if(ge){let be=O;for(let Ae=0;Ae<S.textures.length;Ae++){let Pe=L.get(S.textures[Ae]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ae,Pe.__webglTexture,j,be)}}else if(S!==null&&j!==0){let be=L.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,be.__webglTexture,j)}de=-1};function Ya(S){let O=L.get(S);return(O.__readFormat!==S.format||O.__readType!==S.type)&&(O.__readFormat=S.format,O.__readType=S.type,O.__formatReadable=ne.textureFormatReadable(S.format),O.__typeReadable=ne.textureTypeReadable(S.type)),O}this.readRenderTargetPixels=function(S,O,j,k,V,ge,be,Ae=0){if(!(S&&S.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=L.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe){M.bindFramebuffer(I.FRAMEBUFFER,Pe);try{let ze=S.textures[Ae],Qe=ze.format,at=ze.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ae);let Ne=Ya(ze);if(Ne.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-k&&j>=0&&j<=S.height-V&&I.readPixels(O,j,k,V,oe.convert(Qe),oe.convert(at),ge)}finally{let ze=H!==null?L.get(H).__webglFramebuffer:null;M.bindFramebuffer(I.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(S,O,j,k,V,ge,be,Ae=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=L.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe)if(O>=0&&O<=S.width-k&&j>=0&&j<=S.height-V){M.bindFramebuffer(I.FRAMEBUFFER,Pe);let ze=S.textures[Ae],Qe=ze.format,at=ze.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ae);let Ne=Ya(ze);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,lt),I.bufferData(I.PIXEL_PACK_BUFFER,ge.byteLength,I.STREAM_READ),I.readPixels(O,j,k,V,oe.convert(Qe),oe.convert(at),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Mt=H!==null?L.get(H).__webglFramebuffer:null;M.bindFramebuffer(I.FRAMEBUFFER,Mt);let dt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await jc(I,dt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,lt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ge),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(lt),I.deleteSync(dt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,j=0){let k=Math.pow(2,-j),V=Math.floor(S.image.width*k),ge=Math.floor(S.image.height*k),be=O!==null?O.x:0,Ae=O!==null?O.y:0;z.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,be,Ae,V,ge),M.unbindTexture()},this.copyTextureToTexture=function(S,O,j=null,k=null,V=0,ge=0){let be,Ae,Pe,ze,Qe,at,Ne,lt,Mt,dt=S.isCompressedTexture?S.mipmaps[ge]:S.image;if(j!==null)be=j.max.x-j.min.x,Ae=j.max.y-j.min.y,Pe=j.isBox3?j.max.z-j.min.z:1,ze=j.min.x,Qe=j.min.y,at=j.isBox3?j.min.z:0;else{let yt=Math.pow(2,-V);be=Math.floor(dt.width*yt),Ae=Math.floor(dt.height*yt),S.isDataArrayTexture?Pe=dt.depth:S.isData3DTexture?Pe=Math.floor(dt.depth*yt):Pe=1,ze=0,Qe=0,at=0}k!==null?(Ne=k.x,lt=k.y,Mt=k.z):(Ne=0,lt=0,Mt=0);let pt=oe.convert(O.format),_t=oe.convert(O.type),De;O.isData3DTexture?(z.setTexture3D(O,0),De=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(z.setTexture2DArray(O,0),De=I.TEXTURE_2D_ARRAY):(z.setTexture2D(O,0),De=I.TEXTURE_2D),M.activeTexture(I.TEXTURE0),M.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),M.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),M.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);let Ft=M.getParameter(I.UNPACK_ROW_LENGTH),Ji=M.getParameter(I.UNPACK_IMAGE_HEIGHT),ti=M.getParameter(I.UNPACK_SKIP_PIXELS),gi=M.getParameter(I.UNPACK_SKIP_ROWS),Bi=M.getParameter(I.UNPACK_SKIP_IMAGES);M.pixelStorei(I.UNPACK_ROW_LENGTH,dt.width),M.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt.height),M.pixelStorei(I.UNPACK_SKIP_PIXELS,ze),M.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),M.pixelStorei(I.UNPACK_SKIP_IMAGES,at);let gr=S.isDataArrayTexture||S.isData3DTexture,ht=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){let yt=L.get(S),zi=L.get(O),ut=L.get(yt.__renderTarget),ua=L.get(zi.__renderTarget);M.bindFramebuffer(I.READ_FRAMEBUFFER,ut.__webglFramebuffer),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,ua.__webglFramebuffer);for(let vr=0;vr<Pe;vr++)gr&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,L.get(S).__webglTexture,V,at+vr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,L.get(O).__webglTexture,ge,Mt+vr)),I.blitFramebuffer(ze,Qe,be,Ae,Ne,lt,be,Ae,I.DEPTH_BUFFER_BIT,I.NEAREST);M.bindFramebuffer(I.READ_FRAMEBUFFER,null),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||L.has(S)){let yt=L.get(S),zi=L.get(O);M.bindFramebuffer(I.READ_FRAMEBUFFER,q),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,U);for(let ut=0;ut<Pe;ut++)gr?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.__webglTexture,V,at+ut):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yt.__webglTexture,V),ht?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,zi.__webglTexture,ge,Mt+ut):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zi.__webglTexture,ge),V!==0?I.blitFramebuffer(ze,Qe,be,Ae,Ne,lt,be,Ae,I.COLOR_BUFFER_BIT,I.NEAREST):ht?I.copyTexSubImage3D(De,ge,Ne,lt,Mt+ut,ze,Qe,be,Ae):I.copyTexSubImage2D(De,ge,Ne,lt,ze,Qe,be,Ae);M.bindFramebuffer(I.READ_FRAMEBUFFER,null),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ht?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(De,ge,Ne,lt,Mt,be,Ae,Pe,pt,_t,dt.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(De,ge,Ne,lt,Mt,be,Ae,Pe,pt,dt.data):I.texSubImage3D(De,ge,Ne,lt,Mt,be,Ae,Pe,pt,_t,dt):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ge,Ne,lt,be,Ae,pt,_t,dt.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ge,Ne,lt,dt.width,dt.height,pt,dt.data):I.texSubImage2D(I.TEXTURE_2D,ge,Ne,lt,be,Ae,pt,_t,dt);M.pixelStorei(I.UNPACK_ROW_LENGTH,Ft),M.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ji),M.pixelStorei(I.UNPACK_SKIP_PIXELS,ti),M.pixelStorei(I.UNPACK_SKIP_ROWS,gi),M.pixelStorei(I.UNPACK_SKIP_IMAGES,Bi),ge===0&&O.generateMipmaps&&I.generateMipmap(De),M.unbindTexture()},this.initRenderTarget=function(S){L.get(S).__webglFramebuffer===void 0&&z.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?z.setTextureCube(S,0):S.isData3DTexture?z.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?z.setTexture2DArray(S,0):z.setTexture2D(S,0),M.unbindTexture()},this.resetState=function(){G=0,K=0,H=null,M.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var Fx=new R;var ia={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Kt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},u_=new ka(-1,1,1,-1,0,1),ul=class extends ct{constructor(){super(),this.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new He([0,2,0,0,2,0],2))}},c_=new ul,Yi=class{constructor(t){this._mesh=new Pt(c_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,u_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ra=class extends Kt{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof gt?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=bi.clone(t.uniforms),this.material=new gt({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Yi(this.material)}render(t,i,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Wa=class extends Kt{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,r){let a=t.getContext(),n=t.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),n.buffers.stencil.setFunc(a.ALWAYS,s,4294967295),n.buffers.stencil.setClear(o),n.buffers.stencil.setLocked(!0),t.setRenderTarget(r),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(a.EQUAL,1,4294967295),n.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),n.buffers.stencil.setLocked(!0)}},ss=class extends Kt{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var os=class{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){let r=t.getSize(new te);this._width=r.width,this._height=r.height,i=new Rt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nt}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ra(ia),this.copyPass.material.blending=di,this.timer=new Hu}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let i=this.renderer.getRenderTarget(),r=!1;for(let a=0,n=this.passes.length;a<n;a++){let s=this.passes[a];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),s.render(this.renderer,this.writeBuffer,this.readBuffer,t,r),s.needsSwap){if(r){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Wa!==void 0&&(s instanceof Wa?r=!0:s instanceof ss&&(r=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){let i=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;let r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(r,a)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ls=class extends Kt{constructor(t,i,r=null,a=null,n=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=r,this.clearColor=a,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Xe}render(t,i,r){let a=t.autoClear;t.autoClear=!1;let n,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(n=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(n),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),t.autoClear=a}};var $u={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var aa=class e extends Kt{constructor(t,i=1,r,a){super(),this.strength=i,this.radius=r,this.threshold=a,this.resolution=t!==void 0?new te(t.x,t.y):new te(256,256),this.clearColor=new Xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Rt(n,s,{type:Nt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new Rt(n,s,{type:Nt,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let c=new Rt(n,s,{type:Nt,depthBuffer:!1});c.texture.name="UnrealBloomPass.v"+u,c.texture.generateMipmaps=!1,this.renderTargetsVertical.push(c),n=Math.round(n/2),s=Math.round(s/2)}let o=$u;this.highPassUniforms=bi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new te(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=bi.clone(ia.uniforms),this.blendMaterial=new gt({uniforms:this.copyUniforms,vertexShader:ia.vertexShader,fragmentShader:ia.fragmentShader,premultipliedAlpha:!0,blending:pi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Xe,this._oldClearAlpha=1,this._basic=new ts,this._fsQuad=new Yi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let r=Math.round(t/2),a=Math.round(i/2);this.renderTargetBright.setSize(r,a);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(r,a),this.renderTargetsVertical[n].setSize(r,a),this.separableBlurMaterials[n].uniforms.invSize.value=new te(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2)}render(t,i,r,a,n){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let s=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),n&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=s}_getSeparableBlurMaterial(t){let i=[],r=t/3;for(let s=0;s<t;s++)i.push(.39894*Math.exp(-.5*s*s/(r*r))/r);let a=[],n=[];for(let s=1;s<t;s+=2){let o=i[s],l=s+1<t?i[s+1]:0,h=o+l;a.push((s*o+(s+1)*l)/h),n.push(h)}return new gt({defines:{KERNEL_PAIRS:a.length},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},centerWeight:{value:i[0]},gaussianOffsets:{value:a},gaussianWeights:{value:n}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new gt({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};aa.BlurDirectionX=new te(1,0);aa.BlurDirectionY=new te(0,1);var Xa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var hs=class extends Kt{constructor(){super(),this.isOutputPass=!0,this.uniforms=bi.clone(Xa.uniforms),this.material=new sl({name:Xa.name,uniforms:this.uniforms,vertexShader:Xa.vertexShader,fragmentShader:Xa.fragmentShader}),this._fsQuad=new Yi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xn?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jn?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qn?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yn?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Kn?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Jn?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Zn&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Qu=11,Ze=()=>(Qu=Qu*16807%2147483647)/2147483647,ja=(e,t,i)=>{let r=Math.min(1,Math.max(0,(i-e)/(t-e)));return r*r*(3-2*r)},cs=(e,t,i)=>e+(t-e)*i,cl=(e,t,i)=>e.map((r,a)=>cs(r,t[a],i)),Jt=[{id:"61",x:.494,head:.4,feet:.609,time:"Noon",zh:"\u6B63\u5348",title:"Hay Bale Canyon",titleZh:"\u8349\u579B\u5CE1\u8C37",place:"On the road",look:{tint:[1.02,1,.98],sat:1.04,light:[1,.93,.8]},fx:{parts:"chaff",sun:[.447,.391]}},{id:"42",x:.358,head:.564,feet:.7,time:"Afternoon",zh:"\u5348\u540E",title:"Framed Summit",titleZh:"\u5CA9\u9699\u4E2D\u7684\u96EA\u5C71",place:"Meili, Yunnan",look:{tint:[.97,1,1.04],sat:1,light:[.82,.9,1]},fx:{parts:"snow"}},{id:"66",x:.418,head:.556,feet:.624,time:"Sunset",zh:"\u65E5\u843D",title:"Red on the Ridge",titleZh:"\u5C71\u810A\u4E0A\u7684\u7EA2",place:"Qinghai\u2013Gansu",look:{tint:[1.05,.99,.93],sat:1.04,light:[1,.82,.6]},fx:{parts:"sand"}},{id:"65",x:.552,head:.588,feet:.655,time:"Night",zh:"\u591C",title:"Star Trails over Yardang",titleZh:"\u96C5\u4E39\u661F\u8F68",place:"Qinghai\u2013Gansu",look:{tint:[.96,.99,1.05],sat:1,light:[.75,.85,1]},fx:{parts:"stars",nebula:[.492,.407],rocks:!0,beam:!0}}],ec={uniforms:{texA:{value:null},texB:{value:null},depA:{value:null},depB:{value:null},aspA:{value:1.5},aspB:{value:1.5},sa:{value:1.78},cA:{value:new te(.5,.5)},cB:{value:new te(.5,.5)},zA:{value:1},zB:{value:1},dollyA:{value:0},dollyB:{value:0},mouse:{value:new te},par:{value:.006},prog:{value:0},t:{value:0},focusD:{value:.5},blurK:{value:0},px:{value:new te(1/1280,1/720)},tint:{value:new R(1,1,1)},sat:{value:1},light:{value:new R(1,1,1)},expo:{value:0},subj:{value:new R(.5,.5,.1)},pool:{value:.18}},vertexShader:"varying vec2 vS; void main(){ vS = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }",fragmentShader:`
    uniform sampler2D texA, texB, depA, depB;
    uniform float aspA, aspB, sa, zA, zB, dollyA, dollyB, par, prog, t, focusD, blurK, sat, expo, pool;
    uniform vec2 cA, cB, mouse, px; uniform vec3 tint, light, subj;
    varying vec2 vS;
    vec2 K(float ia){ return sa > ia ? vec2(1.0, ia / sa) : vec2(sa / ia, 1.0); }
    float depth(sampler2D dp, vec2 u){ return texture2D(dp, vec2(u.x, 1.0 - u.y)).r; }
    // where screen point s lands in the photo, with depth parallax and dolly
    vec2 place(vec2 s, float ia, vec2 c, float z, float dolly, sampler2D dp, out float d){
      vec2 k = K(ia);
      vec2 u0 = c + (s - 0.5) * k / z;
      d = depth(dp, u0);
      return c + (s - 0.5 + mouse * par * d) * k / (z * (1.0 + dolly * d));
    }
    vec3 photo(sampler2D tx, vec2 u){ return texture2D(tx, vec2(u.x, 1.0 - u.y)).rgb; }
    // a lens: blur grows with distance from the focal depth (only while focusing)
    vec3 lens(sampler2D tx, vec2 u, float d, float ia){
      float coc = clamp(abs(d - focusD) * blurK, 0.0, 1.0);
      if (coc < 0.02) return photo(tx, u);
      vec2 k = K(ia);
      vec3 acc = photo(tx, u); float w = 1.0;
      for (int i = 0; i < 12; i++) {
        float a = float(i) * 2.39996, r = sqrt((float(i) + 0.5) / 12.0);
        vec2 o = vec2(cos(a), sin(a)) * r * coc * 9.0 * px * vec2(1.0, 1.0);
        acc += photo(tx, u + o * k); w += 1.0;
      }
      return acc / w;
    }
    float h(vec2 q){ return fract(sin(dot(q, vec2(127.1, 311.7))) * 43758.5453); }
    float vn(vec2 q){ vec2 i = floor(q), f = fract(q); f = f * f * (3. - 2. * f);
      return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
    void main(){
      vec2 s = vec2(vS.x, 1.0 - vS.y);
      float dA, dB;
      vec2 uA = place(s, aspA, cA, zA, dollyA, depA, dA);
      vec3 col;
      if (prog <= 0.0) {
        col = lens(texA, uA, dA, aspA);
      } else {
        vec2 uB = place(s, aspB, cB, zB, dollyB, depB, dB);
        // the horizon sweep: far first, near last, the sky from the top down
        vec2 np = s * vec2(sa, 1.0) * 3.0;
        float n = 0.6 * vn(np + t * 0.05) + 0.4 * vn(np * 2.7 - t * 0.08);
        float key = max(dA, dB) * 0.9 + s.y * 0.12 + (n - 0.5) * 0.1;
        float P = prog * 1.32 - 0.16;
        float m = smoothstep(key - 0.045, key + 0.045, P);
        float front = exp(-pow((P - key) / 0.065, 2.0));
        // the mist bends the light a touch as it passes
        vec2 wob = vec2(0.0, (vn(np * 4.0 + t * 0.3) - 0.5) * 0.004 * front);
        vec3 a = m < 0.999 ? lens(texA, uA + wob, dA, aspA) : vec3(0.0);
        vec3 b = m > 0.001 ? lens(texB, uB + wob, dB, aspB) : vec3(0.0);
        col = mix(a, b, m);
        float land = smoothstep(0.04, 0.22, max(dA, dB));             // the mist lies on the land, the sky just changes
        col = mix(col, light * 0.9, front * 0.13 * land);
      }
      // grade: true to the photo, nudged towards the hour
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(vec3(l), col, sat) * tint;
      // a soft pool of light on him so the eye finds him
      vec2 dd = (s - subj.xy) * vec2(sa, 1.0) / max(subj.z, 0.02);
      col *= 1.0 + pool * exp(-dot(dd, dd) * 0.9);
      // long exposure: the frame gathers light, highlights roll off like film
      col = col * (1.0 + expo * 1.6) / (1.0 + col * expo * 0.55);
      gl_FragColor = vec4(col, 1.0);
    }`},rc=(e,t=128)=>{let i=document.createElement("canvas");i.width=i.height=t,e(i.getContext("2d"),t);let r=new ru(i);return r.colorSpace=Gt,r},tc=rc((e,t)=>{let i=e.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.18,"rgba(240,244,255,0.5)"),i.addColorStop(.5,"rgba(210,220,240,0.1)"),i.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=i,e.fillRect(0,0,t,t)}),d_=rc((e,t)=>{let i=t/2;e.globalCompositeOperation="lighter";for(let a=0;a<12;a++){let n=a*Math.PI/6+a%2*.12,s=a%2?t*.32:t*.48,o=e.createLinearGradient(i,i,i+Math.cos(n)*s,i+Math.sin(n)*s);o.addColorStop(0,"rgba(255,250,235,0.9)"),o.addColorStop(1,"rgba(255,240,210,0)"),e.strokeStyle=o,e.lineWidth=a%2?1.2:2,e.beginPath(),e.moveTo(i,i),e.lineTo(i+Math.cos(n)*s,i+Math.sin(n)*s),e.stroke()}let r=e.createRadialGradient(i,i,0,i,i,t*.2);r.addColorStop(0,"rgba(255,255,250,1)"),r.addColorStop(1,"rgba(255,240,210,0)"),e.fillStyle=r,e.fillRect(0,0,t,t)},256),p_={chaff:{n:160,size:[2.5,7],col:[1,.88,.6],vel:[.35,.22,0],sway:.4,tw:.3,glow:1,band:[0,.95],soft:1,alpha:.9},snow:{n:520,size:[2,9],col:[.96,.98,1],vel:[.14,-.6,0],sway:.25,tw:.1,glow:0,band:[0,1],soft:1,alpha:.85},sand:{n:900,size:[1.4,4],col:[1,.9,.74],vel:[-1.8,.06,0],sway:.1,tw:.2,glow:0,band:[.5,1],soft:.6,alpha:1.3,streak:.7},stars:{n:260,size:[1,3.6],col:[.86,.9,1],vel:[0,.02,0],sway:.02,tw:1,glow:1,band:[0,.6],soft:.3,alpha:1}};function f_(e,t){let i=p_[e],r=new ct,a=new Float32Array(i.n*3),n=new Float32Array(i.n);for(let l=0;l<i.n;l++)a[l*3]=Ze(),a[l*3+1]=Ze(),a[l*3+2]=Ze(),n[l]=Ze();r.setAttribute("position",new Ut(a,3)),r.setAttribute("seed",new Ut(n,1));let s=new gt({transparent:!0,depthWrite:!1,depthTest:!1,blending:i.glow?pi:sr,uniforms:{t:{value:0},k:{value:0},px:{value:1},col:{value:new Xe(...i.col)},box:{value:new R(30,2*t,14)},alpha:{value:i.alpha||1},y0:{value:0},vel:{value:new R(...i.vel)},sway:{value:i.sway},tw:{value:i.tw},smin:{value:i.size[0]},smax:{value:i.size[1]},soft:{value:i.soft},streak:{value:i.streak||0},expo:{value:0},shift:{value:new te}},vertexShader:`uniform float t, px, sway, tw, smin, smax, y0, expo; uniform vec3 box, vel; uniform vec2 shift; attribute float seed; varying float vA; varying float vS;
      void main(){
        vec3 u = fract(position + vel * t * (0.6 + seed * 0.8) / box);
        vec3 q = vec3((u.x - 0.5) * box.x, y0 + u.y * box.y, (u.z - 0.5) * box.z - 1.0);
        q.x += sin(t * (0.6 + seed) + seed * 40.0) * sway; q.y += cos(t * (0.5 + seed * 0.7) + seed * 17.0) * sway * 0.5;
        q.xy += shift * (q.z + 8.0) * 0.08;                    // nearer flakes drift more with the pointer
        vec4 mv = modelViewMatrix * vec4(q, 1.0); gl_Position = projectionMatrix * mv;
        vA = mix(1.0, 0.25 + 0.75 * pow(0.5 + 0.5 * sin(t * (1.0 + seed * 3.0) + seed * 60.0), 2.0), tw)
           * smoothstep(0.0, 0.08, u.y) * smoothstep(1.0, 0.85, u.y) * smoothstep(0.0, 0.1, u.x) * smoothstep(1.0, 0.9, u.x);
        vS = seed;
        gl_PointSize = mix(smin, smax, pow(seed, 2.5)) * px * 20.0 / -mv.z * (1.0 + expo * 1.5); }`,fragmentShader:`uniform float k, soft, streak, alpha, expo; uniform vec3 col; varying float vA; varying float vS;
      void main(){ vec2 d = gl_PointCoord - 0.5; d.y *= mix(1.0, 4.0, clamp(streak + expo, 0.0, 1.0));
        float a = smoothstep(0.5, 0.5 - 0.5 * soft, length(d));
        gl_FragColor = vec4(col, min(1.0, a * vA * k * 0.95 * alpha)); }`}),o=new il(r,s);return o.frustumCulled=!1,o.renderOrder=6,o.userData.P=i,o}function m_(e){let t=new ct,i=new Float32Array(e*3),r=new Float32Array(e*2),a=()=>(Ze()+Ze()+Ze()+Ze()-2)*.87,n=[];for(let l=0;l<70;l++){let h=Math.pow(Ze(),.8)*2.4,u=Ze()*6.283;n.push([Math.cos(u)*h,a()*1.5,Math.sin(u)*h,.25+Ze()*.7])}for(let l=0;l<e;l++){let h,u,p;if(l%5===0)h=a()*2.2,u=a()*2.4,p=a()*2.2;else{let x=n[Math.floor(Ze()*n.length)];h=x[0]+a()*x[3],u=x[1]+a()*x[3]*1.3,p=x[2]+a()*x[3]}let c=Math.hypot(h,p),f=Math.atan2(p,h)+c*.9;i[l*3]=Math.cos(f)*c,i[l*3+1]=u,i[l*3+2]=Math.sin(f)*c,r[l*2]=Ze(),r[l*2+1]=.3+Ze()*Ze()*1.6}t.setAttribute("position",new Ut(i,3)),t.setAttribute("aux",new Ut(r,2));let s=new gt({transparent:!0,depthWrite:!1,depthTest:!1,blending:pi,uniforms:{t:{value:0},px:{value:1},k:{value:1}},vertexShader:`uniform float t; uniform float px; attribute vec2 aux; varying float vA;
      void main(){ vec3 q = position; float r = length(q.xz);
        float ang = t * (0.55 / (r + 0.6)); float c = cos(ang), s = sin(ang); q.xz = mat2(c,-s,s,c) * q.xz;
        q.y += sin(t*0.4 + r*1.7 + aux.x*6.28)*0.12;
        vec4 mv = modelViewMatrix * vec4(q,1.); gl_Position = projectionMatrix * mv;
        float tw = 0.45 + 0.55 * pow(0.5 + 0.5*sin(t*(1.5+aux.x*3.) + aux.x*40.), 3.);
        vA = tw * (1.0 - smoothstep(1.5, 4.0, length(q)) * 0.75);
        gl_PointSize = aux.y * px * 36.0 / -mv.z; }`,fragmentShader:`uniform float k; varying float vA; void main(){ vec2 d = gl_PointCoord - .5; float a = smoothstep(.5, .0, length(d));
      gl_FragColor = vec4(vec3(0.92,0.95,1.0) * a * vA * 0.24 * k, 1.0); }`}),o=new il(t,s);return o.frustumCulled=!1,o}function ic(e,t,i){return Math.sin(e*1.7+Math.sin(t*2.3+i))*Math.cos(i*1.9+Math.sin(e*1.3))}function us(e,t,i){let r=new nl(1,t),a=r.attributes.position,n=new R;for(let s=0;s<a.count;s++){n.fromBufferAttribute(a,s);let o=1+.32*ic(n.x*2+e,n.y*2-e,n.z*2+e*.5)+.12*ic(n.x*6-e,n.y*6,n.z*6+e);n.multiplyScalar(o),n.set(n.x*i[0],n.y*i[1],n.z*i[2]),a.setXYZ(s,n.x,n.y,n.z)}return r.index&&(r=r.toNonIndexed()),r.computeVertexNormals(),r}var g_=()=>new gt({transparent:!0,depthWrite:!1,depthTest:!1,blending:pi,side:oi,uniforms:{k:{value:0}},vertexShader:`varying vec3 vN; varying vec3 vV; varying float vY;
    void main(){ vec4 w = modelMatrix*vec4(position,1.); vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - w.xyz); vY = uv.y; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform float k; varying vec3 vN; varying vec3 vV; varying float vY;
    void main(){ float rim = pow(abs(dot(normalize(vN), vV)), 2.5); float fall = smoothstep(0.0, 0.15, vY) * (0.2 + 0.8 * pow(vY, 1.4));
      gl_FragColor = vec4(vec3(0.8, 0.87, 1.0) * rim * fall * 0.16 * k, 1.0); }`}),v_={uniforms:{tDiffuse:{value:null},t:{value:0},res:{value:new te(1,1)},fade:{value:0},vig:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float t, fade, vig; uniform vec2 res; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)) + t*7.) * 43758.5453); }
    void main(){
      vec3 col = texture2D(tDiffuse, vUv).rgb;
      vec2 e = (vUv - .5) * vec2(res.x / res.y, 1.);
      col *= mix(1.0 - 0.32 * vig, 1.0, smoothstep(1.25, 0.45, length(e * vec2(.7, 1.0))));
      col += (h(vUv * res) - .5) * 0.016;                              // a whisper of grain, no more
      gl_FragColor = vec4(col * fade, 1.);
    }`};function ac(e,t,i,r={}){var qe;let a=(qe=r.lite)!=null?qe:!1,n=new Ju({canvas:e,antialias:!1,powerPreference:"high-performance"}),s=Math.min(window.devicePixelRatio||1,a?1.5:2);n.setPixelRatio(s),n.toneMapping=ri;let o=n.capabilities.getMaxAnisotropy(),l=new qh,h=new qt(30,1,.1,200);h.position.set(0,0,20);let u=20*Math.tan(Hh.degToRad(15)),p=(ne,M)=>{let v=new kt(ne);return M&&(v.colorSpace=Gt),v.anisotropy=o,v.generateMipmaps=!0,v.minFilter=Di,v.magFilter=wt,v.needsUpdate=!0,v},c=t.map(ne=>p(ne,!0)),f=i.map(ne=>p(ne,!1)),x=i.map(ne=>{let v=Math.round(256*ne.height/ne.width),L=document.createElement("canvas");L.width=256,L.height=v;let z=L.getContext("2d",{willReadFrequently:!0});return z.drawImage(ne,0,0,256,v),{w:256,h:v,data:z.getImageData(0,0,256,v).data}}),y=(ne,M,v)=>{let L=x[ne],z=Math.min(L.w-1,Math.max(0,Math.round(M*L.w))),X=Math.min(L.h-1,Math.max(0,Math.round(v*L.h)));return L.data[(X*L.w+z)*4]/255},m=new Pt(new za(2,2),new gt({...ec,uniforms:bi.clone(ec.uniforms),depthWrite:!1,depthTest:!1}));m.frustumCulled=!1,m.renderOrder=-10,l.add(m);let d=m.material.uniforms,T=new Vu(14674175,2.2);T.position.set(0,10,4),l.add(T),l.add(new Gu(9410730,855570,.5));let w=new Gr;l.add(w);let _=new rs(.3,1,1,40,1,!0);_.translate(0,.5,0);let E=new Pt(_,g_());E.renderOrder=2,w.add(E);let A=m_(a?6e3:12e3);A.renderOrder=3,l.add(A);let C=new Qn(new Fa({map:tc,blending:pi,depthWrite:!1,depthTest:!1,opacity:0}));C.renderOrder=3,l.add(C);let g=new Ou({color:7303801,roughness:.95}),b=[us(1.3,1,[1,.75,.9]),us(4.1,1,[1.25,.35,.9]),us(7.7,1,[.55,.55,1.6]),us(2.9,0,[1,.8,1])],D=a?50:100,P=b.map(ne=>{let M=new eu(ne,g,D);return M.frustumCulled=!1,M.renderOrder=4,M.count=0,w.add(M),M}),N=()=>(Ze()+Ze()+Ze()-1.5)/1.5,q=[];for(let ne=0;ne<D;ne++){let M=Ze()<.2;q.push({set:Math.floor(Ze()*b.length),x:M?(Ze()-.5)*7:N()*1.3,z:Ze()<.12?3+Ze()*6:(Ze()-.5)*6,y0:Ze(),v:.006+Math.pow(Ze(),1.8)*.05,dx:(Ze()-.5)*.5,sw:Ze()*6.283,swA:.02+Ze()*.08,s:.003+Math.pow(Ze(),5)*.06+Ze()*.004,sq:[.7+Ze()*.6,.7+Ze()*.6,.7+Ze()*.6],ax:new R(Ze()-.5,Ze()-.5,Ze()-.5).normalize(),spin:(.08+Math.pow(Ze(),2)*1.4)*(Ze()<.5?-1:1),q0:new Zt().setFromEuler(new qi(Ze()*6,Ze()*6,Ze()*6))})}let U=new Qn(new Fa({map:d_,blending:pi,depthWrite:!1,depthTest:!1,color:16774108}));U.renderOrder=7,l.add(U);let G=new Qn(new Fa({map:tc,blending:pi,depthWrite:!1,depthTest:!1,color:16769712}));G.renderOrder=7,l.add(G);let K=Jt.map(ne=>{let M=f_(ne.fx.parts,u);return l.add(M),M}),H=new os(n);H.addPass(new ls(l,h));let de=new aa(new te(256,256),.22,.5,.93);H.addPass(de),H.addPass(new hs);let Y=new ra(v_);H.addPass(Y);let Z=1,ie=1,Oe=1;function Ee(ne,M){ie=ne,Oe=M,Z=ne/M,n.setSize(ne,M,!1),H.setSize(ne,M),h.aspect=Z,h.updateProjectionMatrix(),d.sa.value=Z,d.px.value.set(1/(ne*1),1/(M*1)),Y.uniforms.res.value.set(ne*s,M*s),A.material.uniforms.px.value=s*M/900,K.forEach(v=>{v.material.uniforms.px.value=s*M/900,v.material.uniforms.box.value.set(2*u*Z*1.15,2*u,14)})}let tt=ne=>t[ne].width/t[ne].height,ue=ne=>{let M=tt(ne);return Z>M?[1,M/Z]:[Z/M,1]},W=ne=>[Jt[ne].x,(Jt[ne].head+Jt[ne].feet)/2],Q=(ne,M)=>{let v=ue(ne),[L,z]=W(ne),X=v[0]/M/2+.004,ce=v[1]/M/2+.004;return[Math.min(1-X,Math.max(X,L)),Math.min(1-ce,Math.max(ce,cs(.5,z,.5)))]},re=(ne,M,v,L,z)=>{let X=ue(ne);return[.5+(L-v[0])*M/X[0],.5+(z-v[1])*M/X[1]]},Ce=(ne,M,v,L,z)=>{let X=ue(ne);return[v[0]+(L-.5)*X[0]/M,v[1]+(z-.5)*X[1]/M]},Ie=(ne,M)=>[(ne-.5)*2*u*Z,(.5-M)*2*u],fe=1.07,je=.06,ee=new Ke,J=new Zt,le=new Zt,ve=new R,_e=new R,ye=null;function Ue(ne,M,v){let L=Jt.length;M=Math.min(L-1,Math.max(0,M));let z=Math.min(L-1,Math.floor(M)),X=Math.min(L-1,z+1),ce=M-z,pe=z===X?0:Math.min(1,Math.max(0,(ce-.16)/.68)),F=ja(.2,.8,pe),ae=Jt[z],me=Jt[X],Te=fe+je*ce,se=fe+je*(ce-1),Re=Q(z,Te),Le=Q(X,se);d.texA.value=c[z],d.texB.value=c[X],d.depA.value=f[z],d.depB.value=f[X],d.aspA.value=tt(z),d.aspB.value=tt(X),d.cA.value.set(...Re),d.cB.value.set(...Le),d.zA.value=Te,d.zB.value=se,d.dollyA.value=.035*ce,d.dollyB.value=.035*Math.max(0,ce-1+0),d.mouse.value.set(v.mouse[0],v.mouse[1]),d.prog.value=z===X?0:pe>=1?1.0001:pe,pe>=1&&(d.texA.value=c[X],d.depA.value=f[X],d.aspA.value=tt(X),d.cA.value.set(...Le),d.zA.value=se,d.dollyA.value=0,d.prog.value=0),d.t.value=ne,d.focusD.value=v.focus.d,d.blurK.value=v.focus.k*(pe>0&&pe<1?.3:1);let We=Wt=>cl(ae.look[Wt],me.look[Wt],F);d.tint.value.set(...We("tint")),d.sat.value=cs(ae.look.sat,me.look.sat,F),d.light.value.set(...We("light")),d.expo.value=v.expo;let rt=re(z,Te,Re,ae.x,ae.feet),B=re(z,Te,Re,ae.x,ae.head),$=re(X,se,Le,me.x,me.feet),oe=re(X,se,Le,me.x,me.head),Me=cl(rt,$,F),we=cl(B,oe,F),he=Math.max(.02,Me[1]-we[1]);d.subj.value.set(Me[0],(Me[1]+we[1])/2,he),d.pool.value=.16*(1-pe*(1-pe)*4);let Se=1-F,Fe=F;K.forEach((Wt,Ei)=>{let fi=Ei===z?Se:Ei===X?Fe:0;if(Wt.visible=fi>.01,!Wt.visible)return;let $t=Wt.material.uniforms;$t.t.value=ne,$t.k.value=fi*(1-v.print*.8),$t.expo.value=v.expo,$t.shift.value.set(v.mouse[0],-v.mouse[1]);let Qt=Wt.userData.P.band;$t.y0.value=(.5-Qt[1])*2*u,$t.box.value.y=(Qt[1]-Qt[0])*2*u});let vt=1-ja(0,.35,pe),nt=ja(0,.35,pe),Ot=(ae.fx.sun?vt:0)+(me.fx.sun&&z!==X?nt:0);if(U.visible=G.visible=Ot>.01,Ot>.01){let Wt=ae.fx.sun?ae:me,Ei=ae.fx.sun?z:X,fi=ae.fx.sun?Te:se,$t=ae.fx.sun?Re:Le,[Qt,Zi]=Ie(...re(Ei,fi,$t,...Wt.fx.sun)),ei=(ae.fx.sun?rt[1]-B[1]:$[1]-oe[1])*2*u,mi=1+.05*Math.sin(ne*1.7)+v.expo*.6;U.position.set(Qt,Zi,1),U.scale.setScalar(ei*1.1*mi),U.material.rotation=ne*.04,U.material.opacity=Ot,G.position.set(Qt,Zi,1),G.scale.setScalar(ei*1.7*mi),G.material.opacity=.5*Ot}let It=(ae.fx.nebula?vt:0)+(me.fx.nebula&&z!==X?nt:0);if(A.visible=C.visible=w.visible=It>.01,It>.01){let Wt=ae.fx.nebula?ae:me,Ei=ae.fx.nebula?z:X,fi=ae.fx.nebula?Te:se,$t=ae.fx.nebula?Re:Le,Qt=re(Ei,fi,$t,...Wt.fx.nebula),[Zi,ei]=Ie(Math.min(.85,Math.max(.15,Qt[0])),Math.min(.5,Math.max(.12,Qt[1]))),mi=u*.17;A.position.set(Zi+v.mouse[0]*.15,ei-v.mouse[1]*.1,0),A.scale.setScalar(mi/2.4),A.rotation.set(.45,ne*.05,.15),A.material.uniforms.t.value=ne,A.material.uniforms.k.value=It*(1+v.expo),C.position.copy(A.position),C.scale.set(mi*3,mi*4,1),C.material.opacity=.08*It;let na=ae.fx.nebula?rt:$,qa=ae.fx.nebula?B:oe,[fr,sa]=Ie(...na),Ki=(na[1]-qa[1])*2*u,oa=u*1.3+2-sa;w.position.set(fr,sa,0),w.rotation.y=v.mouse[0]*.3;let la=Math.max(.25,Ki*.9);E.scale.set(la,oa,la),E.material.uniforms.k.value=It*(.8+v.expo);let ha=Math.max(.6,Ki*1.6);P.forEach(wi=>{wi.count=0});for(let wi=0;wi<q.length;wi++){let At=q[wi],mr=(At.y0+ne*At.v)%1,Ya=ja(0,.07,mr)*ja(1,.7,mr)*It;_e.set(At.x*ha+At.dx*mr*ha+Math.sin(ne*.4+At.sw)*At.swA*ha,mr*oa*.98-.3,At.z),le.setFromAxisAngle(At.ax,ne*At.spin),J.copy(At.q0).premultiply(le);let S=At.s*u*2*.3*Ya+1e-4;ve.set(S*At.sq[0],S*At.sq[1],S*At.sq[2]),ee.compose(_e,J,ve);let O=P[At.set];O.setMatrixAt(O.count++,ee)}P.forEach(wi=>{wi.instanceMatrix.needsUpdate=!0})}return Y.uniforms.t.value=ne,Y.uniforms.fade.value=v.fade,Y.uniforms.vig.value=1-v.print*.6,H.render(),ye={ia:z,ib:X,za:Te,zb:se,ca:Re,cb:Le,mixE:F,prog:pe},{scene:F>.5?X:z,prog:pe,subject:{x:(we[0]+Me[0])/2,top:we[1],bottom:Me[1],h:he}}}function Be(ne,M){if(!ye)return .5;let v=ye.mixE>.5,L=v?ye.ib:ye.ia,[z,X]=Ce(L,v?ye.zb:ye.za,v?ye.cb:ye.ca,ne,M);return y(L,z,X)}function ke(ne){let M=Jt[ne];return y(ne,M.x,cs(M.head,M.feet,.6))}let I={n:0,sum:0,lastT:0,scale:1};function it(ne){I.lastT&&(I.sum+=Math.min(100,ne-I.lastT),I.n++),I.lastT=ne,I.n===90&&(I.sum/I.n>24&&I.scale>.55&&(I.scale=Math.max(.55,I.scale*.82),n.setPixelRatio(s*I.scale),H.setPixelRatio(s*I.scale),Y.uniforms.res.value.set(ie*s*I.scale,Oe*s*I.scale)),I.n=0,I.sum=0)}return{resize:Ee,frame:Ue,adapt:it,depthAt:Be,subjectDepth:ke,N:Jt.length}}var ps=(e,t=0,i=1)=>Math.min(i,Math.max(t,e)),nc=(e,t,i)=>{let r=ps((i-e)/(t-e));return r*r*(3-2*r)},sc=e=>new Promise((t,i)=>{let r=new Image;r.decoding="async",r.onload=()=>t(r),r.onerror=i,r.src=e}),ds=e=>String(e).padStart(2,"0"),oc=["1/250","1/125","1/60","1/30","1/15","1/8","1/4","1/2",'1"','2"','4"','8"','15"','30"'],lc={get(e){try{return localStorage.getItem(e)}catch{return null}},set(e,t){try{localStorage.setItem(e,t)}catch{}}};function hc(e,{reduced:t=!1,lenis:i=null}={}){let r=e.querySelector(".vf__stage"),a=e.querySelector("canvas"),n=[...e.querySelectorAll("[data-chapter]")],s=[...e.querySelectorAll("[data-tick]")],o=e.querySelector(".vf__af"),l=e.querySelector(".vf__af b"),h=e.querySelector("[data-vf-info]"),u=e.querySelector(".vf__meter i"),p=e.querySelector("[data-vf-shutter]"),c=e.querySelector("[data-vf-count]"),f=e.querySelector(".vf__curtain"),x=e.querySelector(".vf__flash"),y=Jt.length,m=matchMedia("(max-width: 760px)").matches,d=window.BENEATH_TEX||{},T=null,w=!1,_=!0,E=0,A=0,C=0,g=+(lc.get("x1ng:roll")||0);c.textContent=ds(g%36+1);let b={x:0,y:0,sx:0,sy:0,px:-1,py:-1},D={d:.5,k:0,hunt:-1e9,manual:-1e9,mx:.5,my:.5,md:.5},P={down:!1,t0:0,x:0,y:0,active:!1,expo:0},N=-1,q=0,U=Promise.all(Jt.flatMap(ue=>[sc(d[ue.id]||`media/beneath/${ue.id}.webp`),sc(d[ue.id+"-d"]||`media/beneath/${ue.id}-d.png`)])).then(ue=>{let W=ue.filter((Ce,Ie)=>Ie%2===0),Q=ue.filter((Ce,Ie)=>Ie%2===1);T=ac(a,W,Q,{lite:m});let re=()=>T.resize(r.clientWidth,r.clientHeight);re(),addEventListener("resize",re),D.d=T.subjectDepth(0),Ee(0,!0)}).catch(ue=>{console.warn(ue),e.classList.add("is-fallback")}),G=()=>e.getBoundingClientRect().top+scrollY,K=()=>innerHeight*.9,H=()=>Math.max(1,e.offsetHeight-innerHeight-K()),de=ue=>{let W=G()+H()*ue/(y-1);i?i.scrollTo(W,{duration:1.8}):scrollTo({top:W,behavior:"smooth"})};s.forEach((ue,W)=>ue.addEventListener("click",Q=>{Q.stopPropagation(),de(W)})),new IntersectionObserver(([ue])=>{_=ue.isIntersecting},{rootMargin:"120px"}).observe(e);let Y=ue=>{let W=r.getBoundingClientRect();return[(ue.clientX-W.left)/W.width,(ue.clientY-W.top)/W.height]};r.addEventListener("pointermove",ue=>{let[W,Q]=Y(ue);b.x=W*2-1,b.y=Q*2-1,b.px=W,b.py=Q,P.down&&Math.hypot(ue.clientX-P.x,ue.clientY-P.y)>10&&!P.active&&(P.down=!1)},{passive:!0}),r.addEventListener("pointerleave",()=>{b.x=b.y=0}),r.addEventListener("contextmenu",ue=>{P.active&&ue.preventDefault()});let Z=ue=>ue.target.closest("a, button, [data-tick]");r.addEventListener("pointerdown",ue=>{Z(ue)||ue.button>0||!T||(P.down=!0,P.t0=performance.now(),P.x=ue.clientX,P.y=ue.clientY,P.active=!1)});let ie=ue=>{if(!P.down)return;P.down=!1;let W=performance.now()-P.t0;if(P.active){P.active=!1,e.classList.remove("is-exposing"),Oe(!0);return}if(W<350&&ue&&!Z(ue)){let[Q,re]=Y(ue);D.manual=performance.now(),D.mx=Q,D.my=re,D.md=T.depthAt(Q,re),Oe(!1)}};addEventListener("pointerup",ie),addEventListener("pointercancel",()=>{P.down=!1,P.active=!1,e.classList.remove("is-exposing")});function Oe(ue){g+=1,lc.set("x1ng:roll",String(g)),c.textContent=ds(g%36+1),g%36===0&&(p.dataset.keep="1",p.textContent="REWIND \u25C0\u25C0 \u80F6\u5377\u62CD\u5B8C\u4E86",setTimeout(()=>{delete p.dataset.keep},2200)),f.classList.remove("go"),f.offsetWidth,f.classList.add("go"),ue&&(x.classList.remove("go"),x.offsetWidth,x.classList.add("go")),e.classList.add("is-fired"),setTimeout(()=>e.classList.remove("is-fired"),600)}function Ee(ue,W){let Q=performance.now(),re=Math.min(.1,Math.max(0,ue-C));C=ue;let Ce=scrollY-G(),Ie=ps(Ce/H())*(y-1);A=W?Ie:A+(Ie-A)*(1-Math.exp(-re*7));let fe=ps((Ce-H())/K());e.style.setProperty("--out",Math.min(1,A/.2).toFixed(3)),e.style.setProperty("--print",nc(0,1,fe).toFixed(4)),b.sx+=(b.x-b.sx)*(t?0:.06),b.sy+=(b.y-b.sy)*(t?0:.06),P.down&&!P.active&&Q-P.t0>350&&(P.active=!0,e.classList.add("is-exposing")),P.expo+=((P.active?1:0)-P.expo)*(P.active?1-Math.exp(-re/1.4):1-Math.exp(-re/.35)),p.dataset.keep||(p.textContent=oc[Math.round(Math.sqrt(P.expo)*(oc.length-1))]);let je=Math.abs(A-Math.round(A))<.03;q=je?q+re:0;let ee=Math.round(A);q>.12&&ee!==N&&(N=ee,D.hunt=Q,D.d=T.subjectDepth(ee),e.classList.remove("is-locked"));let J=(Q-D.hunt)/1e3,le=(Q-D.manual)/1e3,ve=0;J<.9&&!t&&(ve=Math.max(ve,1.3*Math.pow(1-J/.9,2)*(.75+.25*Math.cos(J*22)))),le<1.8&&!t?(D.d=D.md,ve=Math.max(ve,le<.12?le/.12*.9:le<1.1?.9:.9*(1-(le-1.1)/.7))):J>=.9&&N>=0&&(D.d=T.subjectDepth(N)),D.k=ve,J>.55&&je?e.classList.add("is-locked"):je||e.classList.remove("is-locked");let _e=T.frame(ue,A,{mouse:[b.sx,b.sy],expo:P.expo,focus:D,fade:ps(ue/1.2),print:fe}),ye=r.clientWidth,Ue=r.clientHeight,Be,ke,I,it;if(le<1.6)I=it=Math.max(56,Ue*.09),Be=D.mx*ye,ke=D.my*Ue,l.textContent="AF-S \xB7 \u70B9\u51FB\u5BF9\u7126";else{let v=_e.subject;it=Math.max(36,v.h*Ue*1.3),I=Math.max(30,it*.62),Be=v.x*ye,ke=(v.top+v.bottom)/2*Ue,l.textContent="AF-C \xB7 SUBJECT \u661F\u5149"}let qe=e.classList.contains("is-locked")?0:_e.prog>0&&_e.prog<1?6:2;o.style.transform=`translate3d(${(Be+(Math.random()-.5)*qe).toFixed(1)}px, ${(ke+(Math.random()-.5)*qe).toFixed(1)}px, 0) translate(-50%, -50%)`,o.style.width=`${I.toFixed(1)}px`,o.style.height=`${it.toFixed(1)}px`,u.style.transform=`translateX(${((P.expo*3+Math.sin(ue*.7)*.08)*16).toFixed(1)}px)`;let ne=Jt[_e.scene],M=`${ds(_e.scene+1)} / ${ds(y)} \xB7 ${ne.time.toUpperCase()} ${ne.zh} \xB7 ${ne.title.toUpperCase()} \u2014 ${ne.place.toUpperCase()}`;return h.textContent!==M&&(h.textContent=M),n.forEach(v=>{let L=+v.dataset.chapter,z=Math.abs(A-L);v.style.opacity=((1-nc(.1,.28,z))*(1-fe*2.2)).toFixed(3),v.style.transform=`translateY(${((A-L)*-50).toFixed(1)}px)`}),s.forEach((v,L)=>v.classList.toggle("on",Math.round(A)===L)),_e}function tt(ue){w&&(requestAnimationFrame(tt),!(!_||!T)&&(Ee(t?3:(ue-E)/1e3,!1),T.adapt(ue)))}return{ready:U,play(){!T||w||(w=!0,E=performance.now(),e.classList.add("is-in"),requestAnimationFrame(tt))},still(ue,W={}){var Q;if(T)return Object.assign(P,{expo:(Q=W.expo)!=null?Q:0}),W.tap&&(D.manual=performance.now()-W.tap*1e3,D.mx=W.x,D.my=W.y,D.md=T.depthAt(W.x,W.y)),e.classList.add("is-in"),C=ue,Ee(ue,!0)}}}var __=matchMedia("(prefers-reduced-motion: reduce)").matches,dl=hc(document.querySelector("[data-vf]"),{reduced:__});new URLSearchParams(location.search).has("still")&&(window.__hero=dl);dl.ready.then(()=>{document.documentElement.classList.add("is-ready"),dl.play()});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
