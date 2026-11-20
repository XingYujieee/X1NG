(()=>{var cc=0,fl=1,dc=2;var Rn=1,pc=2,ba=3,pr=0,kt=1,ui=2,mi=0,cr=1,gi=2,ml=3,gl=4,fc=5;var Vr=100,mc=101,gc=102,vc=103,_c=104,xc=200,yc=201,Mc=202,Sc=203,Ph=204,Ih=205,bc=206,Tc=207,Ec=208,wc=209,Ac=210,Cc=211,Rc=212,Pc=213,Ic=214,$s=0,Qs=1,eo=2,Ra=3,to=4,io=5,ro=6,ao=7,Lh=0,Lc=1,Dc=2,ai=0,Xn=1,jn=2,qn=3,Yn=4,Zn=5,Kn=6,Jn=7;var Dh=300,fr=301,Qr=302,fs=303,ms=304,$n=306,no=1e3,Ui=1001,so=1002,Pt=1003,Uc=1004;var Za=1005;var At=1006,gs=1007;var Ni=1008;var Yt=1009,Uh=1010,Nh=1011,Pa=1012,Xo=1013,Ei=1014,di=1015,Ft=1016,jo=1017,qo=1018,Ia=1020,Oh=35902,Fh=35899,Bh=1021,zh=1022,pi=1023,Fi=1026,lr=1027,Yo=1028,Zo=1029,mr=1030,Ko=1031;var Jo=1033,Pn=33776,In=33777,Ln=33778,Dn=33779,oo=35840,lo=35841,ho=35842,uo=35843,co=36196,po=37492,fo=37496,mo=37488,go=37489,Fn=37490,vo=37491,_o=37808,xo=37809,yo=37810,Mo=37811,So=37812,bo=37813,To=37814,Eo=37815,wo=37816,Ao=37817,Co=37818,Ro=37819,Po=37820,Io=37821,Lo=36492,Do=36494,Uo=36495,No=36283,Oo=36284,Bn=36285,Fo=36286;var zn=2300,Bo=2301,vs=2302,vl=2303,_l=2400,xl=2401,yl=2402;var Nc=3200;var zo=0,Oc=1,$i="",Vt="srgb",Gn="srgb-linear",Vn="linear",st="srgb";var _s=7680;var Fc=519,Bc=512,zc=513,Gc=514,$o=515,Vc=516,Hc=517,Qo=518,kc=519,Gh=35044;var Ml="300 es",fi=2e3,La=2001;function Wc(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Xc(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Hn(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function jc(){let e=Hn("canvas");return e.style.display="block",e}var Sl={},ea=null;function kn(...e){let t="THREE."+e.shift();ea?ea("log",t,...e):console.log(t,...e)}function Vh(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function He(...e){e=Vh(e);let t="THREE."+e.shift();if(ea)ea("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function ke(...e){e=Vh(e);let t="THREE."+e.shift();if(ea)ea("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Xr(...e){let t=e.join(" ");t in Sl||(Sl[t]=!0,He(...e))}function qc(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var Yc={[$s]:Qs,[eo]:ro,[to]:ao,[Ra]:io,[Qs]:$s,[ro]:eo,[ao]:to,[io]:Ra},vr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bl=1234567,jr=Math.PI/180,Da=180/Math.PI;function Ti(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ut[e&255]+Ut[e>>8&255]+Ut[e>>16&255]+Ut[e>>24&255]+"-"+Ut[t&255]+Ut[t>>8&255]+"-"+Ut[t>>16&15|64]+Ut[t>>24&255]+"-"+Ut[i&63|128]+Ut[i>>8&255]+"-"+Ut[i>>16&255]+Ut[i>>24&255]+Ut[r&255]+Ut[r>>8&255]+Ut[r>>16&255]+Ut[r>>24&255]).toLowerCase()}function et(e,t,i){return Math.max(t,Math.min(i,e))}function el(e,t){return(e%t+t)%t}function Zc(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function Kc(e,t,i){return e!==t?(i-e)/(t-e):0}function wa(e,t,i){return(1-i)*e+i*t}function Jc(e,t,i,r){return wa(e,t,1-Math.exp(-i*r))}function $c(e,t=1){return t-Math.abs(el(e,t*2)-t)}function Qc(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function ed(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function td(e,t){return e+Math.floor(Math.random()*(t-e+1))}function id(e,t){return e+Math.random()*(t-e)}function rd(e){return e*(.5-Math.random())}function ad(e){e!==void 0&&(bl=e);let t=bl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nd(e){return e*jr}function sd(e){return e*Da}function od(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function ld(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function hd(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function ud(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),h=n((t+r)/2),u=s((t+r)/2),p=n((t-r)/2),c=s((t-r)/2),f=n((r-t)/2),_=s((r-t)/2);switch(a){case"XYX":e.set(o*u,l*p,l*c,o*h);break;case"YZY":e.set(l*c,o*u,l*p,o*h);break;case"ZXZ":e.set(l*p,l*c,o*u,o*h);break;case"XZX":e.set(o*u,l*_,l*f,o*h);break;case"YXY":e.set(l*f,o*u,l*_,o*h);break;case"ZYZ":e.set(l*_,l*f,o*u,o*h);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ci(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ot(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Hh={DEG2RAD:jr,RAD2DEG:Da,generateUUID:Ti,clamp:et,euclideanModulo:el,mapLinear:Zc,inverseLerp:Kc,lerp:wa,damp:Jc,pingpong:$c,smoothstep:Qc,smootherstep:ed,randInt:td,randFloat:id,randFloatSpread:rd,seededRandom:ad,degToRad:nd,radToDeg:sd,isPowerOfTwo:od,ceilPowerOfTwo:ld,floorPowerOfTwo:hd,setQuaternionFromProperEuler:ud,normalize:ot,denormalize:ci},Yr,ae=(Yr=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=et(this.x,t.x,i.x),this.y=et(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=et(this.x,t,i),this.y=et(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(et(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yr.prototype.isVector2=!0,Yr),Zt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],p=a[n+0],c=a[n+1],f=a[n+2],_=a[n+3];if(u!==_||o!==p||l!==c||h!==f){let y=o*p+l*c+h*f+u*_;y<0&&(p=-p,c=-c,f=-f,_=-_,y=-y);let m=1-s;if(y<.9995){let d=Math.acos(y),b=Math.sin(d);m=Math.sin(m*d)/b,s=Math.sin(s*d)/b,o=o*m+p*s,l=l*m+c*s,h=h*m+f*s,u=u*m+_*s}else{o=o*m+p*s,l=l*m+c*s,h=h*m+f*s,u=u*m+_*s;let d=1/Math.sqrt(o*o+l*l+h*h+u*u);o*=d,l*=d,h*=d,u*=d}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],u=a[n],p=a[n+1],c=a[n+2],f=a[n+3];return e[t]=s*f+h*u+o*c-l*p,e[t+1]=o*f+h*p+l*u-s*c,e[t+2]=l*f+h*c+s*p-o*u,e[t+3]=h*f-s*u-o*p-l*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),u=s(a/2),p=o(i/2),c=o(r/2),f=o(a/2);switch(n){case"XYZ":this._x=p*h*u+l*c*f,this._y=l*c*u-p*h*f,this._z=l*h*f+p*c*u,this._w=l*h*u-p*c*f;break;case"YXZ":this._x=p*h*u+l*c*f,this._y=l*c*u-p*h*f,this._z=l*h*f-p*c*u,this._w=l*h*u+p*c*f;break;case"ZXY":this._x=p*h*u-l*c*f,this._y=l*c*u+p*h*f,this._z=l*h*f+p*c*u,this._w=l*h*u-p*c*f;break;case"ZYX":this._x=p*h*u-l*c*f,this._y=l*c*u+p*h*f,this._z=l*h*f-p*c*u,this._w=l*h*u+p*c*f;break;case"YZX":this._x=p*h*u+l*c*f,this._y=l*c*u+p*h*f,this._z=l*h*f-p*c*u,this._w=l*h*u-p*c*f;break;case"XZY":this._x=p*h*u-l*c*f,this._y=l*c*u-p*h*f,this._z=l*h*f+p*c*u,this._w=l*h*u+p*c*f;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],u=t[10],p=i+s+u;if(p>0){let c=.5/Math.sqrt(p+1);this._w=.25/c,this._x=(h-o)*c,this._y=(a-l)*c,this._z=(n-r)*c}else if(i>s&&i>u){let c=2*Math.sqrt(1+i-s-u);this._w=(h-o)/c,this._x=.25*c,this._y=(r+n)/c,this._z=(a+l)/c}else if(s>u){let c=2*Math.sqrt(1+s-i-u);this._w=(a-l)/c,this._x=(r+n)/c,this._y=.25*c,this._z=(o+h)/c}else{let c=2*Math.sqrt(1+u-i-s);this._w=(n-r)/c,this._x=(a+l)/c,this._y=(o+h)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),h=Math.sin(l);o=Math.sin(o*l)/h,t=Math.sin(t*l)/h,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zr,C=(Zr=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Tl.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Tl.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*r),u=2*(o*i-n*a),p=2*(n*r-s*i);return this.x=i+l*h+s*p-o*u,this.y=r+l*u+o*h-n*p,this.z=a+l*p+n*u-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=et(this.x,t.x,i.x),this.y=et(this.y,t.y,i.y),this.z=et(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=et(this.x,t,i),this.y=et(this.y,t,i),this.z=et(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return xs.copy(this).projectOnVector(t),this.sub(xs)}reflect(t){return this.sub(xs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(et(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zr.prototype.isVector3=!0,Zr),xs=new C,Tl=new Zt,Kr,Ye=(Kr=class{constructor(t,i,r,a,n,s,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h)}set(t,i,r,a,n,s,o,l,h){let u=this.elements;return u[0]=t,u[1]=a,u[2]=o,u[3]=i,u[4]=n,u[5]=l,u[6]=r,u[7]=s,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],u=r[4],p=r[7],c=r[2],f=r[5],_=r[8],y=a[0],m=a[3],d=a[6],b=a[1],w=a[4],v=a[7],T=a[2],A=a[5],R=a[8];return n[0]=s*y+o*b+l*T,n[3]=s*m+o*w+l*A,n[6]=s*d+o*v+l*R,n[1]=h*y+u*b+p*T,n[4]=h*m+u*w+p*A,n[7]=h*d+u*v+p*R,n[2]=c*y+f*b+_*T,n[5]=c*m+f*w+_*A,n[8]=c*d+f*v+_*R,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8];return i*s*u-i*o*h-r*n*u+r*o*l+a*n*h-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8],p=u*s-o*h,c=o*l-u*n,f=h*n-s*l,_=i*p+r*c+a*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=p*y,t[1]=(a*h-u*r)*y,t[2]=(o*r-a*s)*y,t[3]=c*y,t[4]=(u*i-a*l)*y,t[5]=(a*n-o*i)*y,t[6]=f*y,t[7]=(r*l-h*i)*y,t[8]=(s*i-r*n)*y,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(t,i){return Xr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ys.makeScale(t,i)),this}rotate(t){return Xr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ys.makeRotation(-t)),this}translate(t,i){return Xr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ys.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Kr.prototype.isMatrix3=!0,Kr),ys=new Ye,El=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wl=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cd(){let e={enabled:!0,workingColorSpace:Gn,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===st&&(a.r=Oi(a.r),a.g=Oi(a.g),a.b=Oi(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===st&&(a.r=qr(a.r),a.g=qr(a.g),a.b=qr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===$i?Vn:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return Xr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return Xr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Gn]:{primaries:t,whitePoint:r,transfer:Vn,toXYZ:El,fromXYZ:wl,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:t,whitePoint:r,transfer:st,toXYZ:El,fromXYZ:wl,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),e}var it=cd();function Oi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function qr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Sr,dd=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Sr===void 0&&(Sr=Hn("canvas")),Sr.width=e.width,Sr.height=e.height;let r=Sr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Sr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Oi(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oi(t[i]/255)*255):t[i]=Oi(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},pd=0,tl=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(Ms(r[n].image)):a.push(Ms(r[n]))}else a=Ms(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Ms(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?dd.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var fd=0,Ss=new C,Wt=class Un extends vr{constructor(t=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,r=Ui,a=Ui,n=At,s=Ni,o=pi,l=Yt,h=Un.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Ti(),this.name="",this.source=new tl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ss).x}get height(){return this.source.getSize(Ss).y}get depth(){return this.source.getSize(Ss).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){He(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){He(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case no:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case so:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case no:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case so:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Dh;Wt.DEFAULT_ANISOTROPY=1;var Jr,ft=(Jr=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],u=s[1],p=s[5],c=s[9],f=s[2],_=s[6],y=s[10];if(Math.abs(l-u)<.01&&Math.abs(h-f)<.01&&Math.abs(c-_)<.01){if(Math.abs(l+u)<.1&&Math.abs(h+f)<.1&&Math.abs(c+_)<.1&&Math.abs(o+p+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let d=(o+1)/2,b=(p+1)/2,w=(y+1)/2,v=(l+u)/4,T=(h+f)/4,A=(c+_)/4;return d>b&&d>w?d<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(d),a=v/r,n=T/r):b>w?b<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(b),r=v/a,n=A/a):w<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(w),r=T/n,a=A/n),this.set(r,a,n,i),this}let m=Math.sqrt((_-c)*(_-c)+(h-f)*(h-f)+(u-l)*(u-l));return Math.abs(m)<.001&&(m=1),this.x=(_-c)/m,this.y=(h-f)/m,this.z=(u-l)/m,this.w=Math.acos((o+p+y-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=et(this.x,t.x,i.x),this.y=et(this.y,t.y,i.y),this.z=et(this.z,t.z,i.z),this.w=et(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=et(this.x,t,i),this.y=et(this.y,t,i),this.z=et(this.z,t,i),this.w=et(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jr.prototype.isVector4=!0,Jr),md=class extends vr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new Wt(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new tl(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},It=class extends md{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},kh=class extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var gd=class extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var dr,Je=(dr=class{constructor(t,i,r,a,n,s,o,l,h,u,p,c,f,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h,u,p,c,f,_,y,m)}set(t,i,r,a,n,s,o,l,h,u,p,c,f,_,y,m){let d=this.elements;return d[0]=t,d[4]=i,d[8]=r,d[12]=a,d[1]=n,d[5]=s,d[9]=o,d[13]=l,d[2]=h,d[6]=u,d[10]=p,d[14]=c,d[3]=f,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dr().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/br.setFromMatrixColumn(t,0).length(),n=1/br.setFromMatrixColumn(t,1).length(),s=1/br.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),u=Math.cos(n),p=Math.sin(n);if(t.order==="XYZ"){let c=s*u,f=s*p,_=o*u,y=o*p;i[0]=l*u,i[4]=-l*p,i[8]=h,i[1]=f+_*h,i[5]=c-y*h,i[9]=-o*l,i[2]=y-c*h,i[6]=_+f*h,i[10]=s*l}else if(t.order==="YXZ"){let c=l*u,f=l*p,_=h*u,y=h*p;i[0]=c+y*o,i[4]=_*o-f,i[8]=s*h,i[1]=s*p,i[5]=s*u,i[9]=-o,i[2]=f*o-_,i[6]=y+c*o,i[10]=s*l}else if(t.order==="ZXY"){let c=l*u,f=l*p,_=h*u,y=h*p;i[0]=c-y*o,i[4]=-s*p,i[8]=_+f*o,i[1]=f+_*o,i[5]=s*u,i[9]=y-c*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let c=s*u,f=s*p,_=o*u,y=o*p;i[0]=l*u,i[4]=_*h-f,i[8]=c*h+y,i[1]=l*p,i[5]=y*h+c,i[9]=f*h-_,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let c=s*l,f=s*h,_=o*l,y=o*h;i[0]=l*u,i[4]=y-c*p,i[8]=_*p+f,i[1]=p,i[5]=s*u,i[9]=-o*u,i[2]=-h*u,i[6]=f*p+_,i[10]=c-y*p}else if(t.order==="XZY"){let c=s*l,f=s*h,_=o*l,y=o*h;i[0]=l*u,i[4]=-p,i[8]=h*u,i[1]=c*p+y,i[5]=s*u,i[9]=f*p-_,i[2]=_*p-f,i[6]=o*u,i[10]=y*p+c}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vd,t,_d)}lookAt(t,i,r){let a=this.elements;return Xt.subVectors(t,i),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),ji.crossVectors(r,Xt),ji.lengthSq()===0&&(Math.abs(r.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),ji.crossVectors(r,Xt)),ji.normalize(),Ka.crossVectors(Xt,ji),a[0]=ji.x,a[4]=Ka.x,a[8]=Xt.x,a[1]=ji.y,a[5]=Ka.y,a[9]=Xt.y,a[2]=ji.z,a[6]=Ka.z,a[10]=Xt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],u=r[1],p=r[5],c=r[9],f=r[13],_=r[2],y=r[6],m=r[10],d=r[14],b=r[3],w=r[7],v=r[11],T=r[15],A=a[0],R=a[4],g=a[8],M=a[12],I=a[1],P=a[5],B=a[9],Z=a[13],O=a[2],U=a[6],Q=a[10],W=a[14],ce=a[3],Y=a[7],J=a[11],ie=a[15];return n[0]=s*A+o*I+l*O+h*ce,n[4]=s*R+o*P+l*U+h*Y,n[8]=s*g+o*B+l*Q+h*J,n[12]=s*M+o*Z+l*W+h*ie,n[1]=u*A+p*I+c*O+f*ce,n[5]=u*R+p*P+c*U+f*Y,n[9]=u*g+p*B+c*Q+f*J,n[13]=u*M+p*Z+c*W+f*ie,n[2]=_*A+y*I+m*O+d*ce,n[6]=_*R+y*P+m*U+d*Y,n[10]=_*g+y*B+m*Q+d*J,n[14]=_*M+y*Z+m*W+d*ie,n[3]=b*A+w*I+v*O+T*ce,n[7]=b*R+w*P+v*U+T*Y,n[11]=b*g+w*B+v*Q+T*J,n[15]=b*M+w*Z+v*W+T*ie,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],u=t[2],p=t[6],c=t[10],f=t[14],_=t[3],y=t[7],m=t[11],d=t[15],b=l*f-h*c,w=o*f-h*p,v=o*c-l*p,T=s*f-h*u,A=s*c-l*u,R=s*p-o*u;return i*(y*b-m*w+d*v)-r*(_*b-m*T+d*A)+a*(_*w-y*T+d*R)-n*(_*v-y*A+m*R)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],u=t[10];return i*(s*u-o*h)-r*(n*u-o*l)+a*(n*h-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8],p=t[9],c=t[10],f=t[11],_=t[12],y=t[13],m=t[14],d=t[15],b=i*o-r*s,w=i*l-a*s,v=i*h-n*s,T=r*l-a*o,A=r*h-n*o,R=a*h-n*l,g=u*y-p*_,M=u*m-c*_,I=u*d-f*_,P=p*m-c*y,B=p*d-f*y,Z=c*d-f*m,O=b*Z-w*B+v*P+T*I-A*M+R*g;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/O;return t[0]=(o*Z-l*B+h*P)*U,t[1]=(a*B-r*Z-n*P)*U,t[2]=(y*R-m*A+d*T)*U,t[3]=(c*A-p*R-f*T)*U,t[4]=(l*I-s*Z-h*M)*U,t[5]=(i*Z-a*I+n*M)*U,t[6]=(m*v-_*R-d*w)*U,t[7]=(u*R-c*v+f*w)*U,t[8]=(s*B-o*I+h*g)*U,t[9]=(r*I-i*B-n*g)*U,t[10]=(_*A-y*v+d*b)*U,t[11]=(p*v-u*A-f*b)*U,t[12]=(o*M-s*P-l*g)*U,t[13]=(i*P-r*M+a*g)*U,t[14]=(y*w-_*T-m*b)*U,t[15]=(u*T-p*w+c*b)*U,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,h=n*s,u=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,u*o+r,u*l-a*s,0,h*l-a*o,u*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,u=s+s,p=o+o,c=n*h,f=n*u,_=n*p,y=s*u,m=s*p,d=o*p,b=l*h,w=l*u,v=l*p,T=r.x,A=r.y,R=r.z;return a[0]=(1-(y+d))*T,a[1]=(f+v)*T,a[2]=(_-w)*T,a[3]=0,a[4]=(f-v)*A,a[5]=(1-(c+d))*A,a[6]=(m+b)*A,a[7]=0,a[8]=(_+w)*R,a[9]=(m-b)*R,a[10]=(1-(c+y))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=br.set(a[0],a[1],a[2]).length(),o=br.set(a[4],a[5],a[6]).length(),l=br.set(a[8],a[9],a[10]).length();n<0&&(s=-s),oi.copy(this);let h=1/s,u=1/o,p=1/l;return oi.elements[0]*=h,oi.elements[1]*=h,oi.elements[2]*=h,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=p,oi.elements[9]*=p,oi.elements[10]*=p,i.setFromRotationMatrix(oi),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=fi,l=!1){let h=this.elements,u=2*n/(i-t),p=2*n/(r-a),c=(i+t)/(i-t),f=(r+a)/(r-a),_,y;if(l)_=n/(s-n),y=s*n/(s-n);else if(o===fi)_=-(s+n)/(s-n),y=-2*s*n/(s-n);else if(o===La)_=-s/(s-n),y=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=c,h[12]=0,h[1]=0,h[5]=p,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=_,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=fi,l=!1){let h=this.elements,u=2/(i-t),p=2/(r-a),c=-(i+t)/(i-t),f=-(r+a)/(r-a),_,y;if(l)_=1/(s-n),y=s/(s-n);else if(o===fi)_=-2/(s-n),y=-(s+n)/(s-n);else if(o===La)_=-1/(s-n),y=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=c,h[1]=0,h[5]=p,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=_,h[14]=y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},dr.prototype.isMatrix4=!0,dr),br=new C,oi=new Je,vd=new C(0,0,0),_d=new C(1,1,1),ji=new C,Ka=new C,Xt=new C,Al=new Je,Cl=new Zt,Qi=class Wh{constructor(t=0,i=0,r=0,a=Wh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],u=a[9],p=a[2],c=a[6],f=a[10];switch(i){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,n),this._z=0);break;case"ZXY":this._x=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(c,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-p,n)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-et(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-u,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Al,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qi.DEFAULT_ORDER="XYZ";var Xh=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xd=0,Rl=new C,Tr=new Zt,Ri=new Je,Ja=new C,da=new C,yd=new C,Md=new Zt,Pl=new C(1,0,0),Il=new C(0,1,0),Ll=new C(0,0,1),Dl={type:"added"},Sd={type:"removed"},Er={type:"childadded",child:null},bs={type:"childremoved",child:null},Ht=class Nn extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();let t=new C,i=new Qi,r=new Zt,a=new C(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ye}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Tr.setFromAxisAngle(t,i),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(t,i){return Tr.setFromAxisAngle(t,i),this.quaternion.premultiply(Tr),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Il,t)}rotateZ(t){return this.rotateOnAxis(Ll,t)}translateOnAxis(t,i){return Rl.copy(t).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Il,t)}translateZ(t){return this.translateOnAxis(Ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ja.copy(t):Ja.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(da,Ja,this.up):Ri.lookAt(Ja,da,this.up),this.quaternion.setFromRotationMatrix(Ri),a&&(Ri.extractRotation(a.matrixWorld),Tr.setFromRotationMatrix(Ri),this.quaternion.premultiply(Tr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(ke("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dl),Er.child=t,this.dispatchEvent(Er),Er.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Sd),bs.child=t,this.dispatchEvent(bs),bs.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dl),Er.child=t,this.dispatchEvent(Er),Er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,t,yd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,Md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let p=l[h];n(t.shapes,p)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),u=s(t.images),p=s(t.shapes),c=s(t.skeletons),f=s(t.animations),_=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),p.length>0&&(r.shapes=p),c.length>0&&(r.skeletons=c),f.length>0&&(r.animations=f),_.length>0&&(r.nodes=_)}return r.object=a,r;function s(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new C(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hr=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},bd={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let _ of e.hand.values()){let y=t.getJointPose(_,i),m=this._getHandJoint(l,_);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),c=.02,f=.005;l.inputState.pinching&&p>c+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=c-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(bd)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new hr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},$a={h:0,s:0,l:0};function Es(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=el(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=Es(n,a,e+1/3),this.g=Es(n,a,e),this.b=Es(n,a,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=Vt){function i(a){a!==void 0&&parseFloat(a)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let i=jh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return it.workingToColorSpace(Nt.copy(this),e),Math.round(et(Nt.r*255,0,255))*65536+Math.round(et(Nt.g*255,0,255))*256+Math.round(et(Nt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Nt.copy(this),t);let i=Nt.r,r=Nt.g,a=Nt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let u=n-s;switch(l=h<=.5?u/(n+s):u/(2-n-s),n){case i:o=(r-a)/u+(r<a?6:0);break;case r:o=(a-i)/u+2;break;case a:o=(i-r)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Vt){it.workingToColorSpace(Nt.copy(this),e);let t=Nt.r,i=Nt.g,r=Nt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL($a);let i=wa(qi.h,$a.h,t),r=wa(qi.s,$a.s,t),a=wa(qi.l,$a.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nt=new Xe;Xe.NAMES=jh;var qh=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},li=new C,Pi=new C,ws=new C,Ii=new C,wr=new C,Ar=new C,Ul=new C,As=new C,Cs=new C,Rs=new C,Ps=new ft,Is=new ft,Ls=new ft,or=class Hr{constructor(t=new C,i=new C,r=new C){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),li.subVectors(t,i),a.cross(li);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){li.subVectors(a,i),Pi.subVectors(r,i),ws.subVectors(t,i);let s=li.dot(li),o=li.dot(Pi),l=li.dot(ws),h=Pi.dot(Pi),u=Pi.dot(ws),p=s*h-o*o;if(p===0)return n.set(0,0,0),null;let c=1/p,f=(h*l-o*u)*c,_=(s*u-o*l)*c;return n.set(1-f-_,_,f)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Ii.x),l.addScaledVector(s,Ii.y),l.addScaledVector(o,Ii.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return Ps.setScalar(0),Is.setScalar(0),Ls.setScalar(0),Ps.fromBufferAttribute(t,i),Is.fromBufferAttribute(t,r),Ls.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Ps,n.x),s.addScaledVector(Is,n.y),s.addScaledVector(Ls,n.z),s}static isFrontFacing(t,i,r,a){return li.subVectors(r,i),Pi.subVectors(t,i),li.cross(Pi).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),li.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Hr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Hr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Hr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;wr.subVectors(a,r),Ar.subVectors(n,r),As.subVectors(t,r);let l=wr.dot(As),h=Ar.dot(As);if(l<=0&&h<=0)return i.copy(r);Cs.subVectors(t,a);let u=wr.dot(Cs),p=Ar.dot(Cs);if(u>=0&&p<=u)return i.copy(a);let c=l*p-u*h;if(c<=0&&l>=0&&u<=0)return s=l/(l-u),i.copy(r).addScaledVector(wr,s);Rs.subVectors(t,n);let f=wr.dot(Rs),_=Ar.dot(Rs);if(_>=0&&f<=_)return i.copy(n);let y=f*h-l*_;if(y<=0&&h>=0&&_<=0)return o=h/(h-_),i.copy(r).addScaledVector(Ar,o);let m=u*_-f*p;if(m<=0&&p-u>=0&&f-_>=0)return Ul.subVectors(n,a),o=(p-u)/(p-u+(f-_)),i.copy(a).addScaledVector(Ul,o);let d=1/(m+y+c);return s=y*d,o=c*d,i.copy(r).addScaledVector(wr,s).addScaledVector(Ar,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bi=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,hi):hi.fromBufferAttribute(a,n),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qa.copy(i.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),en.subVectors(this.max,pa),Cr.subVectors(e.a,pa),Rr.subVectors(e.b,pa),Pr.subVectors(e.c,pa),Yi.subVectors(Rr,Cr),Zi.subVectors(Pr,Rr),ir.subVectors(Cr,Pr);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-ir.z,ir.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,ir.z,0,-ir.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-ir.y,ir.x,0];return!Ds(t,Cr,Rr,Pr,en)||(t=[1,0,0,0,1,0,0,0,1],!Ds(t,Cr,Rr,Pr,en))?!1:(tn.crossVectors(Yi,Zi),t=[tn.x,tn.y,tn.z],Ds(t,Cr,Rr,Pr,en))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Li=[new C,new C,new C,new C,new C,new C,new C,new C],hi=new C,Qa=new Bi,Cr=new C,Rr=new C,Pr=new C,Yi=new C,Zi=new C,ir=new C,pa=new C,en=new C,tn=new C,rr=new C;function Ds(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){rr.fromArray(e,n);let o=a.x*Math.abs(rr.x)+a.y*Math.abs(rr.y)+a.z*Math.abs(rr.z),l=t.dot(rr),h=i.dot(rr),u=r.dot(rr);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}var y_=Td();function Td(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),r=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(r[l]=0,r[l|256]=32768,a[l]=24,a[l|256]=24):h<-14?(r[l]=1024>>-h-14,r[l|256]=1024>>-h-14|32768,a[l]=-h-1,a[l|256]=-h-1):h<=15?(r[l]=h+15<<10,r[l|256]=h+15<<10|32768,a[l]=13,a[l|256]=13):h<128?(r[l]=31744,r[l|256]=64512,a[l]=24,a[l|256]=24):(r[l]=31744,r[l|256]=64512,a[l]=13,a[l|256]=13)}let n=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,u=0;for(;(h&8388608)===0;)h<<=1,u-=8388608;h&=-8388609,u+=947912704,n[l]=h|u}for(let l=1024;l<2048;++l)n[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:r,shiftTable:a,mantissaTable:n,exponentTable:s,offsetTable:o}}var bt=new C,rn=new ae,Ed=0,Ot=class extends vr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ed++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gh,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXY(t,rn.x,rn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),a=ot(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Yh=class extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Zh=class extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var We=class extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}},wd=new Bi,fa=new C,Us=new C,zi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):wd.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);let t=fa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(fa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Us.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(Us)),this.expandByPoint(fa.copy(e.center).sub(Us))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ad=0,ri=new Je,Ns=new Ht,Ir=new C,jt=new Bi,ma=new Bi,wt=new C,ct=class Kh extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wc(t)?Zh:Yh)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new Ye().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,i,r){return ri.makeTranslation(t,i,r),this.applyMatrix4(ri),this}scale(t,i,r){return ri.makeScale(t,i,r),this.applyMatrix4(ri),this}lookAt(t){return Ns.lookAt(t),Ns.updateMatrix(),this.applyMatrix4(Ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new We(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];jt.setFromBufferAttribute(n),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let r=this.boundingSphere.center;if(jt.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];ma.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(jt.min,ma.min),jt.expandByPoint(wt),wt.addVectors(jt.max,ma.max),jt.expandByPoint(wt)):(jt.expandByPoint(ma.min),jt.expandByPoint(ma.max))}jt.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)wt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(wt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)wt.fromBufferAttribute(o,h),l&&(Ir.fromBufferAttribute(t,h),wt.add(Ir)),a=Math.max(a,r.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new Ot(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let g=0;g<r.count;g++)o[g]=new C,l[g]=new C;let h=new C,u=new C,p=new C,c=new ae,f=new ae,_=new ae,y=new C,m=new C;function d(g,M,I){h.fromBufferAttribute(r,g),u.fromBufferAttribute(r,M),p.fromBufferAttribute(r,I),c.fromBufferAttribute(n,g),f.fromBufferAttribute(n,M),_.fromBufferAttribute(n,I),u.sub(h),p.sub(h),f.sub(c),_.sub(c);let P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(p,-f.y).multiplyScalar(P),m.copy(p).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(P),o[g].add(y),o[M].add(y),o[I].add(y),l[g].add(m),l[M].add(m),l[I].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let g=0,M=b.length;g<M;++g){let I=b[g],P=I.start,B=I.count;for(let Z=P,O=P+B;Z<O;Z+=3)d(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}let w=new C,v=new C,T=new C,A=new C;function R(g){T.fromBufferAttribute(a,g),A.copy(T);let M=o[g];w.copy(M),w.sub(T.multiplyScalar(T.dot(M))).normalize(),v.crossVectors(A,M);let I=v.dot(l[g])<0?-1:1;s.setXYZW(g,w.x,w.y,w.z,I)}for(let g=0,M=b.length;g<M;++g){let I=b[g],P=I.start,B=I.count;for(let Z=P,O=P+B;Z<O;Z+=3)R(t.getX(Z+0)),R(t.getX(Z+1)),R(t.getX(Z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ot(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let c=0,f=r.count;c<f;c++)r.setXYZ(c,0,0,0);let a=new C,n=new C,s=new C,o=new C,l=new C,h=new C,u=new C,p=new C;if(t)for(let c=0,f=t.count;c<f;c+=3){let _=t.getX(c+0),y=t.getX(c+1),m=t.getX(c+2);a.fromBufferAttribute(i,_),n.fromBufferAttribute(i,y),s.fromBufferAttribute(i,m),u.subVectors(s,n),p.subVectors(a,n),u.cross(p),o.fromBufferAttribute(r,_),l.fromBufferAttribute(r,y),h.fromBufferAttribute(r,m),o.add(u),l.add(u),h.add(u),r.setXYZ(_,o.x,o.y,o.z),r.setXYZ(y,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let c=0,f=i.count;c<f;c+=3)a.fromBufferAttribute(i,c+0),n.fromBufferAttribute(i,c+1),s.fromBufferAttribute(i,c+2),u.subVectors(s,n),p.subVectors(a,n),u.cross(p),r.setXYZ(c+0,u.x,u.y,u.z),r.setXYZ(c+1,u.x,u.y,u.z),r.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)wt.fromBufferAttribute(t,i),wt.normalize(),t.setXYZ(i,wt.x,wt.y,wt.z)}toNonIndexed(){function t(o,l){let h=o.array,u=o.itemSize,p=o.normalized,c=new h.constructor(l.length*u),f=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let d=0;d<u;d++)c[_++]=h[f++]}return new Ot(c,u,p)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Kh,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let u=0,p=h.length;u<p;u++){let c=h[u],f=t(c,r);l.push(f)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let p=0,c=h.length;p<c;p++){let f=h[p];u.push(f.toJSON(t.data))}u.length>0&&(a[l]=u,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let h in a){let u=a[h];this.setAttribute(h,u.clone(i))}let n=t.morphAttributes;for(let h in n){let u=[],p=n[h];for(let c=0,f=p.length;c<f;c++)u.push(p[c].clone(i));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,u=s.length;h<u;h++){let p=s[h];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cd=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gh,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},zt=new C,Nl=class Jh{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)zt.fromBufferAttribute(this,i),zt.applyMatrix4(t),this.setXYZ(i,zt.x,zt.y,zt.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)zt.fromBufferAttribute(this,i),zt.applyNormalMatrix(t),this.setXYZ(i,zt.x,zt.y,zt.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)zt.fromBufferAttribute(this,i),zt.transformDirection(t),this.setXYZ(i,zt.x,zt.y,zt.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=ci(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=ot(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=ci(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=ci(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=ci(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=ci(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=ot(i,this.array),r=ot(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=ot(i,this.array),r=ot(r,this.array),a=ot(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=ot(i,this.array),r=ot(r,this.array),a=ot(a,this.array),n=ot(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){kn("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new Ot(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Jh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){kn("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Os=new C,Rd=new C,Pd=new Ye,Ji=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Os.subVectors(i,t).cross(Rd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Os),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Pd.getNormalMatrix(e),r=this.coplanarPoint(Os).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Id=0,_r=class extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=cr,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Ih,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ji().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ae().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ba=class extends _r{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lr,ga=new C,Dr=new C,Ur=new C,Nr=new ae,va=new ae,$h=new Je,an=new C,_a=new C,nn=new C,Ol=new ae,Fs=new ae,Fl=new ae,Qn=class extends Ht{constructor(e=new Ba){if(super(),this.isSprite=!0,this.type="Sprite",Lr===void 0){Lr=new ct;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Cd(t,5);Lr.setIndex([0,1,2,0,2,3]),Lr.setAttribute("position",new Nl(i,3,0,!1)),Lr.setAttribute("uv",new Nl(i,2,3,!1))}this.geometry=Lr,this.material=e,this.center=new ae(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Dr.setFromMatrixScale(this.matrixWorld),$h.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Dr.multiplyScalar(-Ur.z);let i=this.material.rotation,r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));let n=this.center;sn(an.set(-.5,-.5,0),Ur,n,Dr,r,a),sn(_a.set(.5,-.5,0),Ur,n,Dr,r,a),sn(nn.set(.5,.5,0),Ur,n,Dr,r,a),Ol.set(0,0),Fs.set(1,0),Fl.set(1,1);let s=e.ray.intersectTriangle(an,_a,nn,!1,ga);if(s===null&&(sn(_a.set(-.5,.5,0),Ur,n,Dr,r,a),Fs.set(0,1),s=e.ray.intersectTriangle(an,nn,_a,!1,ga),s===null))return;let o=e.ray.origin.distanceTo(ga);o<e.near||o>e.far||t.push({distance:o,point:ga.clone(),uv:or.getInterpolation(ga,an,_a,nn,Ol,Fs,Fl,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function sn(e,t,i,r,a,n){Nr.subVectors(e,i).addScalar(.5).multiply(r),a!==void 0?(va.x=n*Nr.x-a*Nr.y,va.y=a*Nr.x+n*Nr.y):va.copy(Nr),e.copy(t),e.x+=va.x,e.y+=va.y,e.applyMatrix4($h)}var M_=new C,S_=new C;var Di=new C,Bs=new C,on=new C,ln=new C,es=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Bs.copy(e).add(t).multiplyScalar(.5),on.copy(t).sub(e).normalize(),ln.copy(this.origin).sub(Bs);let a=e.distanceTo(t)*.5,n=-this.direction.dot(on),s=ln.dot(this.direction),o=-ln.dot(on),l=ln.lengthSq(),h=Math.abs(1-n*n),u,p,c,f;if(h>0)if(u=n*o-s,p=n*s-o,f=a*h,u>=0)if(p>=-f)if(p<=f){let _=1/h;u*=_,p*=_,c=u*(u+n*p+2*s)+p*(n*u+p+2*o)+l}else p=a,u=Math.max(0,-(n*p+s)),c=-u*u+p*(p+2*o)+l;else p=-a,u=Math.max(0,-(n*p+s)),c=-u*u+p*(p+2*o)+l;else p<=-f?(u=Math.max(0,-(-n*a+s)),p=u>0?-a:Math.min(Math.max(-a,-o),a),c=-u*u+p*(p+2*o)+l):p<=f?(u=0,p=Math.min(Math.max(-a,-o),a),c=p*(p+2*o)+l):(u=Math.max(0,-(n*a+s)),p=u>0?a:Math.min(Math.max(-a,-o),a),c=-u*u+p*(p+2*o)+l);else p=n>0?-a:a,u=Math.max(0,-(n*p+s)),c=-u*u+p*(p+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Bs).addScaledVector(on,p),c}intersectSphere(e,t){if(e.radius<0)return null;Di.subVectors(e.center,this.origin);let i=Di.dot(this.direction),r=Di.dot(Di)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),h>=0?(a=(e.min.y-p.y)*h,n=(e.max.y-p.y)*h):(a=(e.max.y-p.y)*h,n=(e.min.y-p.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),u>=0?(s=(e.min.z-p.z)*u,o=(e.max.z-p.z)*u):(s=(e.max.z-p.z)*u,o=(e.min.z-p.z)*u),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,h=s.z,u=e.x-n.x,p=e.y-n.y,c=e.z-n.z,f=t.x-n.x,_=t.y-n.y,y=t.z-n.z,m=i.x-n.x,d=i.y-n.y,b=i.z-n.z,w=Math.abs(o),v=Math.abs(l),T=Math.abs(h),A,R,g,M,I,P,B,Z,O,U,Q,W;if(w>=v&&w>=T?(g=o,P=u,O=f,W=m,o>=0?(A=l,R=h,M=p,I=c,B=_,Z=y,U=d,Q=b):(A=h,R=l,M=c,I=p,B=y,Z=_,U=b,Q=d)):v>=T?(g=l,P=p,O=_,W=d,l>=0?(A=h,R=o,M=c,I=u,B=y,Z=f,U=b,Q=m):(A=o,R=h,M=u,I=c,B=f,Z=y,U=m,Q=b)):(g=h,P=c,O=y,W=b,h>=0?(A=o,R=l,M=u,I=p,B=f,Z=_,U=m,Q=d):(A=l,R=o,M=p,I=u,B=_,Z=f,U=d,Q=m)),g===0)return null;let ce=A/g,Y=R/g,J=1/g,ie=M-ce*P,Oe=I-Y*P,Ee=B-ce*O,Ke=Z-Y*O,Ge=U-ce*W,K=Q-Y*W,X=Ge*Ke-K*Ee,$=ie*K-Oe*Ge,me=Ee*Oe-Ke*ie;if(r){if(X<0||$<0||me<0)return null}else if((X<0||$<0||me<0)&&(X>0||$>0||me>0))return null;let Ae=X+$+me;if(Ae===0)return null;let de=J*(X*P+$*O+me*W);return(Ae>0?de<0:de>0)?null:this.at(de/Ae,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ts=class extends _r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bl=new Je,ar=new es,hn=new zi,zl=new C,un=new C,cn=new C,dn=new C,zs=new C,pn=new C,Gl=new C,fn=new C,Ct=class extends Ht{constructor(e=new ct,t=new ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){pn.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],u=a[o];h!==0&&(zs.fromBufferAttribute(u,e),n?pn.addScaledVector(zs,h):pn.addScaledVector(zs.sub(t),h))}t.add(pn)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hn.copy(i.boundingSphere),hn.applyMatrix4(a),ar.copy(e.ray).recast(e.near),!(hn.containsPoint(ar.origin)===!1&&(ar.intersectSphere(hn,zl)===null||ar.origin.distanceToSquared(zl)>(e.far-e.near)**2))&&(Bl.copy(a).invert(),ar.copy(e.ray).applyMatrix4(Bl),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ar)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,p=a.groups,c=a.drawRange;if(s!==null)if(Array.isArray(n))for(let f=0,_=p.length;f<_;f++){let y=p[f],m=n[y.materialIndex],d=Math.max(y.start,c.start),b=Math.min(s.count,Math.min(y.start+y.count,c.start+c.count));for(let w=d,v=b;w<v;w+=3){let T=s.getX(w),A=s.getX(w+1),R=s.getX(w+2);r=mn(this,m,e,i,l,h,u,T,A,R),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let f=Math.max(0,c.start),_=Math.min(s.count,c.start+c.count);for(let y=f,m=_;y<m;y+=3){let d=s.getX(y),b=s.getX(y+1),w=s.getX(y+2);r=mn(this,n,e,i,l,h,u,d,b,w),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let f=0,_=p.length;f<_;f++){let y=p[f],m=n[y.materialIndex],d=Math.max(y.start,c.start),b=Math.min(o.count,Math.min(y.start+y.count,c.start+c.count));for(let w=d,v=b;w<v;w+=3){let T=w,A=w+1,R=w+2;r=mn(this,m,e,i,l,h,u,T,A,R),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let f=Math.max(0,c.start),_=Math.min(o.count,c.start+c.count);for(let y=f,m=_;y<m;y+=3){let d=y,b=y+1,w=y+2;r=mn(this,n,e,i,l,h,u,d,b,w),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}};function Ld(e,t,i,r,a,n,s,o){let l;if(t.side===kt?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===pr,o),l===null)return null;fn.copy(o),fn.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(fn);return h<i.near||h>i.far?null:{distance:h,point:fn.clone(),object:e}}function mn(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,un),e.getVertexPosition(l,cn),e.getVertexPosition(h,dn);let u=Ld(e,t,i,r,un,cn,dn,Gl);if(u){let p=new C;or.getBarycoord(Gl,un,cn,dn,p),a&&(u.uv=or.getInterpolatedAttribute(a,o,l,h,p,new ae)),n&&(u.uv1=or.getInterpolatedAttribute(n,o,l,h,p,new ae)),s&&(u.normal=or.getInterpolatedAttribute(s,o,l,h,p,new C),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let c={a:o,b:l,c:h,normal:new C,materialIndex:0};or.getNormal(un,cn,dn,c.normal),u.face=c,u.barycoord=p}return u}var b_=new ft,T_=new ft,E_=new ft,w_=new ft,A_=new Je,C_=new C,R_=new zi,P_=new Je,I_=new es;var Qh=class extends Wt{constructor(e=null,t=1,i=1,r,a,n,s,o,l=Pt,h=Pt,u,p){super(null,n,s,o,l,h,r,a,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},L_=new Je,D_=new Je;var Vl=class extends Ot{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Or=new Je,Hl=new Je,gn=[],kl=new Bi,Dd=new Je,xa=new Ct,ya=new zi,eu=class extends Ct{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Dd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Or),kl.copy(e.boundingBox).applyMatrix4(Or),this.boundingBox.union(kl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Or),ya.copy(e.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(ya)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,n=e*a+1;for(let s=0;s<i.length;s++)i[s]=r[n+s]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ya.copy(this.boundingSphere),ya.applyMatrix4(i),e.ray.intersectsSphere(ya)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Or),Hl.multiplyMatrices(i,Or),xa.matrixWorld=Hl,xa.raycast(e,gn);for(let n=0,s=gn.length;n<s;n++){let o=gn[n];o.instanceId=a,o.object=this,t.push(o)}gn.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Qh(new Float32Array(r*this.count),r,this.count,Yo,di));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<i.length;l++)n+=i[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=r*e;return a[o]=s,a.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},nr=new zi,Ud=new ae(.5,.5),vn=new C,ta=class{constructor(e=new Ji,t=new Ji,i=new Ji,r=new Ji,a=new Ji,n=new Ji){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],h=a[4],u=a[5],p=a[6],c=a[7],f=a[8],_=a[9],y=a[10],m=a[11],d=a[12],b=a[13],w=a[14],v=a[15];if(r[0].setComponents(l-n,c-h,m-f,v-d).normalize(),r[1].setComponents(l+n,c+h,m+f,v+d).normalize(),r[2].setComponents(l+s,c+u,m+_,v+b).normalize(),r[3].setComponents(l-s,c-u,m-_,v-b).normalize(),i)r[4].setComponents(o,p,y,w).normalize(),r[5].setComponents(l-o,c-p,m-y,v-w).normalize();else if(r[4].setComponents(l-o,c-p,m-y,v-w).normalize(),t===fi)r[5].setComponents(l+o,c+p,m+y,v+w).normalize();else if(t===La)r[5].setComponents(o,p,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){nr.center.set(0,0,0);let t=Ud.distanceTo(e.center);return nr.radius=.7071067811865476+t,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(vn.x=r.normal.x>0?e.max.x:e.min.x,vn.y=r.normal.y>0?e.max.y:e.min.y,vn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vn)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Wl=new Je,Nd=class tu{constructor(){this.coordinateSystem=fi,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];Wl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new ta),r[a].setFromProjectionMatrix(Wl,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new ta),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new tu().copy(this)}};var Od=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let a=this.pool,n=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let s=a[this.index];n.push(s),this.index++,s.start=e,s.count=t,s.z=i,s.index=r}reset(){this.list.length=0,this.index=0}},U_=new Je,N_=new Xe(1,1,1),O_=new ta,F_=new Nd,B_=new Bi,z_=new zi,G_=new C,V_=new C,H_=new C,k_=new Od,W_=new Ct;var X_=new C,j_=new C,q_=new Je,Y_=new es,Z_=new zi,K_=new C,J_=new C;var $_=new C,Q_=new C;var Fd=class extends _r{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xl=new Je,Go=new es,_n=new zi,xn=new C,il=class extends Ht{constructor(e=new ct,t=new Fd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_n.copy(i.boundingSphere),_n.applyMatrix4(r),_n.radius+=a,e.ray.intersectsSphere(_n)===!1)return;Xl.copy(r).invert(),Go.copy(e.ray).applyMatrix4(Xl);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,h=i.attributes.position;if(l!==null){let u=Math.max(0,n.start),p=Math.min(l.count,n.start+n.count);for(let c=u,f=p;c<f;c++){let _=l.getX(c);xn.fromBufferAttribute(h,_),jl(xn,_,o,r,e,t,this)}}else{let u=Math.max(0,n.start),p=Math.min(h.count,n.start+n.count);for(let c=u,f=p;c<f;c++)xn.fromBufferAttribute(h,c),jl(xn,c,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function jl(e,t,i,r,a,n,s){let o=Go.distanceSqToPoint(e);if(o<i){let l=new C;Go.closestPointToPoint(e,l),l.applyMatrix4(r);let h=a.ray.origin.distanceTo(l);if(h<a.near||h>a.far)return;n.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var iu=class extends Wt{constructor(e=[],t=fr,i,r,a,n,s,o,l,h){super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ru=class extends Wt{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ua=class extends Wt{constructor(e,t,i=Ei,r,a,n,s=Pt,o=Pt,l,h=Fi,u=1){if(h!==Fi&&h!==lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:u};super(p,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Bd=class extends Ua{constructor(e,t=Ei,i=fr,r,a,n=Pt,s=Pt,o,l=Fi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,a,n,s,o,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},au=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},is=class nu extends ct{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],u=[],p=[],c=0,f=0;_("z","y","x",-1,-1,r,i,t,s,n,0),_("z","y","x",1,-1,r,i,-t,s,n,1),_("x","z","y",1,1,t,r,i,a,s,2),_("x","z","y",1,-1,t,r,-i,a,s,3),_("x","y","z",1,-1,t,i,r,a,n,4),_("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new We(h,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(p,2));function _(y,m,d,b,w,v,T,A,R,g,M){let I=v/R,P=T/g,B=v/2,Z=T/2,O=A/2,U=R+1,Q=g+1,W=0,ce=0,Y=new C;for(let J=0;J<Q;J++){let ie=J*P-Z;for(let Oe=0;Oe<U;Oe++){let Ee=Oe*I-B;Y[y]=Ee*b,Y[m]=ie*w,Y[d]=O,h.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[d]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),p.push(Oe/R),p.push(1-J/g),W+=1}}for(let J=0;J<g;J++)for(let ie=0;ie<R;ie++){let Oe=c+ie+U*J,Ee=c+ie+U*(J+1),Ke=c+(ie+1)+U*(J+1),Ge=c+(ie+1)+U*J;l.push(Oe,Ee,Ge),l.push(Ee,Ke,Ge),ce+=6}o.addGroup(f,ce,M),f+=ce,c+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},zd=class su extends ct{constructor(t=1,i=1,r=4,a=8,n=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:r,radialSegments:a,heightSegments:n},i=Math.max(0,i),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),n=Math.max(1,Math.floor(n));let s=[],o=[],l=[],h=[],u=i/2,p=Math.PI/2*t,c=i,f=2*p+c,_=r*2+n,y=a+1,m=new C,d=new C;for(let b=0;b<=_;b++){let w=0,v=0,T=0,A=0;if(b<=r){let M=b/r,I=M*Math.PI/2;v=-u-t*Math.cos(I),T=t*Math.sin(I),A=-t*Math.cos(I),w=M*p}else if(b<=r+n){let M=(b-r)/n;v=-u+M*i,T=t,A=0,w=p+M*c}else{let M=(b-r-n)/r,I=M*Math.PI/2;v=u+t*Math.sin(I),T=t*Math.cos(I),A=t*Math.sin(I),w=p+c+M*p}let R=Math.max(0,Math.min(1,w/f)),g=0;b===0?g=.5/a:b===_&&(g=-.5/a);for(let M=0;M<=a;M++){let I=M/a,P=I*Math.PI*2,B=Math.sin(P),Z=Math.cos(P);d.x=-T*Z,d.y=v,d.z=T*B,o.push(d.x,d.y,d.z),m.set(-T*Z,A,T*B),m.normalize(),l.push(m.x,m.y,m.z),h.push(I+g,R)}if(b>0){let M=(b-1)*y;for(let I=0;I<a;I++){let P=M+I,B=M+I+1,Z=b*y+I,O=b*y+I+1;s.push(P,B,Z),s.push(B,O,Z)}}}this.setIndex(s),this.setAttribute("position",new We(o,3)),this.setAttribute("normal",new We(l,3)),this.setAttribute("uv",new We(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new su(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Gd=class ou extends ct{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],h=new C,u=new ae;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,c=3;p<=i;p++,c+=3){let f=r+p/i*a;h.x=t*Math.cos(f),h.y=t*Math.sin(f),s.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(s[c]/t+1)/2,u.y=(s[c+1]/t+1)/2,l.push(u.x,u.y)}for(let p=1;p<=i;p++)n.push(p,p+1,0);this.setIndex(n),this.setAttribute("position",new We(s,3)),this.setAttribute("normal",new We(o,3)),this.setAttribute("uv",new We(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ou(t.radius,t.segments,t.thetaStart,t.thetaLength)}},rs=class lu extends ct{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let u=[],p=[],c=[],f=[],_=0,y=[],m=r/2,d=0;b(),s===!1&&(t>0&&w(!0),i>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new We(p,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(f,2));function b(){let v=new C,T=new C,A=0,R=(i-t)/r;for(let g=0;g<=n;g++){let M=[],I=g/n,P=I*(i-t)+t;for(let B=0;B<=a;B++){let Z=B/a,O=Z*l+o,U=Math.sin(O),Q=Math.cos(O);T.x=P*U,T.y=-I*r+m,T.z=P*Q,p.push(T.x,T.y,T.z),v.set(U,R,Q).normalize(),c.push(v.x,v.y,v.z),f.push(Z,1-I),M.push(_++)}y.push(M)}for(let g=0;g<a;g++)for(let M=0;M<n;M++){let I=y[M][g],P=y[M+1][g],B=y[M+1][g+1],Z=y[M][g+1];(t>0||M!==0)&&(u.push(I,P,Z),A+=3),(i>0||M!==n-1)&&(u.push(P,B,Z),A+=3)}h.addGroup(d,A,0),d+=A}function w(v){let T=_,A=new ae,R=new C,g=0,M=v===!0?t:i,I=v===!0?1:-1;for(let B=1;B<=a;B++)p.push(0,m*I,0),c.push(0,I,0),f.push(.5,.5),_++;let P=_;for(let B=0;B<=a;B++){let Z=B/a*l+o,O=Math.cos(Z),U=Math.sin(Z);R.x=M*U,R.y=m*I,R.z=M*O,p.push(R.x,R.y,R.z),c.push(0,I,0),A.x=O*.5+.5,A.y=U*.5*I+.5,f.push(A.x,A.y),_++}for(let B=0;B<a;B++){let Z=T+B,O=P+B;v===!0?u.push(O,O+1,Z):u.push(O+1,O,Z),g+=3}h.addGroup(d,g,v===!0?1:2),d+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vd=class hu extends rs{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new hu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},za=class uu extends ct{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let n=[],s=[];o(a),h(r),u(),this.setAttribute("position",new We(n,3)),this.setAttribute("normal",new We(n.slice(),3)),this.setAttribute("uv",new We(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let w=new C,v=new C,T=new C;for(let A=0;A<i.length;A+=3)f(i[A+0],w),f(i[A+1],v),f(i[A+2],T),l(w,v,T,b)}function l(b,w,v,T){let A=T+1,R=[];for(let g=0;g<=A;g++){R[g]=[];let M=b.clone().lerp(v,g/A),I=w.clone().lerp(v,g/A),P=A-g;for(let B=0;B<=P;B++)B===0&&g===A?R[g][B]=M:R[g][B]=M.clone().lerp(I,B/P)}for(let g=0;g<A;g++)for(let M=0;M<2*(A-g)-1;M++){let I=Math.floor(M/2);M%2===0?(c(R[g][I+1]),c(R[g+1][I]),c(R[g][I])):(c(R[g][I+1]),c(R[g+1][I+1]),c(R[g+1][I]))}}function h(b){let w=new C;for(let v=0;v<n.length;v+=3)w.x=n[v+0],w.y=n[v+1],w.z=n[v+2],w.normalize().multiplyScalar(b),n[v+0]=w.x,n[v+1]=w.y,n[v+2]=w.z}function u(){let b=new C;for(let w=0;w<n.length;w+=3){b.x=n[w+0],b.y=n[w+1],b.z=n[w+2];let v=m(b)/2/Math.PI+.5,T=d(b)/Math.PI+.5;s.push(v,1-T)}_(),p()}function p(){for(let b=0;b<s.length;b+=6){let w=s[b+0],v=s[b+2],T=s[b+4],A=Math.max(w,v,T),R=Math.min(w,v,T);A>.9&&R<.1&&(w<.2&&(s[b+0]+=1),v<.2&&(s[b+2]+=1),T<.2&&(s[b+4]+=1))}}function c(b){n.push(b.x,b.y,b.z)}function f(b,w){let v=b*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function _(){let b=new C,w=new C,v=new C,T=new C,A=new ae,R=new ae,g=new ae;for(let M=0,I=0;M<n.length;M+=9,I+=6){b.set(n[M+0],n[M+1],n[M+2]),w.set(n[M+3],n[M+4],n[M+5]),v.set(n[M+6],n[M+7],n[M+8]),A.set(s[I+0],s[I+1]),R.set(s[I+2],s[I+3]),g.set(s[I+4],s[I+5]),T.copy(b).add(w).add(v).divideScalar(3);let P=m(T);y(A,I+0,b,P),y(R,I+2,w,P),y(g,I+4,v,P)}}function y(b,w,v,T){T<0&&b.x===1&&(s[w]=b.x-1),v.x===0&&v.z===0&&(s[w]=T/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uu(t.vertices,t.indices,t.radius,t.detail)}},Hd=class cu extends za{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=1/r,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,s,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new cu(t.radius,t.detail)}},yn=new C,Mn=new C,Gs=new C,Sn=new or,kd=class extends ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(jr*t),a=e.getIndex(),n=e.getAttribute("position"),s=a?a.count:n.count,o=[0,0,0],l=["a","b","c"],h=new Array(3),u={},p=[];for(let c=0;c<s;c+=3){a?(o[0]=a.getX(c),o[1]=a.getX(c+1),o[2]=a.getX(c+2)):(o[0]=c,o[1]=c+1,o[2]=c+2);let{a:f,b:_,c:y}=Sn;if(f.fromBufferAttribute(n,o[0]),_.fromBufferAttribute(n,o[1]),y.fromBufferAttribute(n,o[2]),Sn.getNormal(Gs),h[0]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,h[1]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){let d=(m+1)%3,b=h[m],w=h[d],v=Sn[l[m]],T=Sn[l[d]],A=`${b}_${w}`,R=`${w}_${b}`;R in u&&u[R]?(Gs.dot(u[R].normal)<=r&&(p.push(v.x,v.y,v.z),p.push(T.x,T.y,T.z)),u[R]=null):A in u||(u[A]={index0:o[m],index1:o[d],normal:Gs.clone()})}}for(let c in u)if(u[c]){let{index0:f,index1:_}=u[c];yn.fromBufferAttribute(n,f),Mn.fromBufferAttribute(n,_),p.push(yn.x,yn.y,yn.z),p.push(Mn.x,Mn.y,Mn.z)}this.setAttribute("position",new We(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},wi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let h=i[r],u=i[r+1]-h,p=(n-h)/u;return(r+p)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new ae:new C);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,r=[],a=[],n=[],s=new C,o=new Je;for(let c=0;c<=e;c++){let f=c/e;r[c]=this.getTangentAt(f,new C)}a[0]=new C,n[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),p=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),p<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let c=1;c<=e;c++){if(a[c]=a[c-1].clone(),n[c]=n[c-1].clone(),s.crossVectors(r[c-1],r[c]),s.length()>Number.EPSILON){s.normalize();let f=Math.acos(et(r[c-1].dot(r[c]),-1,1));a[c].applyMatrix4(o.makeRotationAxis(s,f))}n[c].crossVectors(r[c],a[c])}if(t===!0){let c=Math.acos(et(a[0].dot(a[e]),-1,1));c/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(c=-c);for(let f=1;f<=e;f++)a[f].applyMatrix4(o.makeRotationAxis(r[f],c*f)),n[f].crossVectors(r[f],a[f])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},rl=class extends wi{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new ae){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=o-this.aX,c=l-this.aY;o=p*h-c*u+this.aX,l=p*u+c*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wd=class extends rl{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function al(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,u,p){let c=(s-n)/h-(o-n)/(h+u)+(o-s)/u,f=(o-s)/u-(l-s)/(u+p)+(l-o)/p;c*=u,f*=u,a(s,o,c,f)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}var ql=new C,Yl=new C,Vs=new al,Hs=new al,ks=new al,Xd=class extends wi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=r[(s-1)%a]:(Yl.subVectors(r[0],r[1]).add(r[0]),l=Yl);let u=r[s%a],p=r[(s+1)%a];if(this.closed||s+2<a?h=r[(s+2)%a]:(ql.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=ql),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(u),c),_=Math.pow(u.distanceToSquared(p),c),y=Math.pow(p.distanceToSquared(h),c);_<1e-4&&(_=1),f<1e-4&&(f=_),y<1e-4&&(y=_),Vs.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,f,_,y),Hs.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,f,_,y),ks.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,f,_,y)}else this.curveType==="catmullrom"&&(Vs.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),Hs.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),ks.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return i.set(Vs.calc(o),Hs.calc(o),ks.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zl(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function jd(e,t){let i=1-e;return i*i*t}function qd(e,t){return 2*(1-e)*e*t}function Yd(e,t){return e*e*t}function Aa(e,t,i,r){return jd(e,t)+qd(e,i)+Yd(e,r)}function Zd(e,t){let i=1-e;return i*i*i*t}function Kd(e,t){let i=1-e;return 3*i*i*e*t}function Jd(e,t){return 3*(1-e)*e*e*t}function $d(e,t){return e*e*e*t}function Ca(e,t,i,r,a){return Zd(e,t)+Kd(e,i)+Jd(e,r)+$d(e,a)}var du=class extends wi{constructor(e=new ae,t=new ae,i=new ae,r=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ae){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Ca(e,r.x,a.x,n.x,s.x),Ca(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qd=class extends wi{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Ca(e,r.x,a.x,n.x,s.x),Ca(e,r.y,a.y,n.y,s.y),Ca(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pu=class extends wi{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ep=class extends wi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fu=class extends wi{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Aa(e,r.x,a.x,n.x),Aa(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mu=class extends wi{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Aa(e,r.x,a.x,n.x),Aa(e,r.y,a.y,n.y),Aa(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gu=class extends wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],u=r[n>r.length-3?r.length-1:n+2];return i.set(Zl(s,o.x,l.x,h.x,u.x),Zl(s,o.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ae().fromArray(r))}return this}},Wn=Object.freeze({__proto__:null,ArcCurve:Wd,CatmullRomCurve3:Xd,CubicBezierCurve:du,CubicBezierCurve3:Qd,EllipseCurve:rl,LineCurve:pu,LineCurve3:ep,QuadraticBezierCurve:fu,QuadraticBezierCurve3:mu,SplineCurve:gu}),tp=class extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wn[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Wn[r.type]().fromJSON(r))}return this}},Kl=class extends tp{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new pu(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new fu(this.currentPoint.clone(),new ae(e,t),new ae(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new du(this.currentPoint.clone(),new ae(e,t),new ae(i,r),new ae(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new gu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new rl(e,t,i,r,a,n,s,o);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vu=class extends Kl{constructor(e){super(e),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Kl().fromJSON(r))}return this}};function ip(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=_u(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h;if(r&&(n=op(e,t,n,i)),e.length>80*i){o=e[0],l=e[1];let u=o,p=l;for(let c=i;c<a;c+=i){let f=e[c],_=e[c+1];f<o&&(o=f),_<l&&(l=_),f>u&&(u=f),_>p&&(p=_)}h=Math.max(u-o,p-l),h=h!==0?32767/h:0}return Na(n,s,i,o,l,h,0),s}function _u(e,t,i,r,a){let n;if(a===_p(e,t,i,r)>0)for(let s=t;s<i;s+=r)n=Jl(s/r|0,e[s],e[s+1],n);else for(let s=i-r;s>=t;s-=r)n=Jl(s/r|0,e[s],e[s+1],n);return n&&ia(n,n.next)&&(Fa(n),n=n.next),n}function gr(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(ia(i,i.next)||_t(i.prev,i,i.next)===0)){if(Fa(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Na(e,t,i,r,a,n,s){if(!e)return;!s&&n&&dp(e,r,a,n);let o=e;for(;e.prev!==e.next;){let l=e.prev,h=e.next;if(n?ap(e,r,a,n):rp(e)){t.push(l.i,e.i,h.i),Fa(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=np(gr(e),t),Na(e,t,i,r,a,n,2)):s===2&&sp(e,t,i,r,a,n):Na(gr(e),t,i,r,a,n,1);break}}}function rp(e){let t=e.prev,i=e,r=e.next;if(_t(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,h=r.y,u=Math.min(a,n,s),p=Math.min(o,l,h),c=Math.max(a,n,s),f=Math.max(o,l,h),_=r.next;for(;_!==t;){if(_.x>=u&&_.x<=c&&_.y>=p&&_.y<=f&&Ta(a,o,n,l,s,h,_.x,_.y)&&_t(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function ap(e,t,i,r){let a=e.prev,n=e,s=e.next;if(_t(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,u=a.y,p=n.y,c=s.y,f=Math.min(o,l,h),_=Math.min(u,p,c),y=Math.max(o,l,h),m=Math.max(u,p,c),d=Vo(f,_,t,i,r),b=Vo(y,m,t,i,r),w=e.prevZ,v=e.nextZ;for(;w&&w.z>=d&&v&&v.z<=b;){if(w.x>=f&&w.x<=y&&w.y>=_&&w.y<=m&&w!==a&&w!==s&&Ta(o,u,l,p,h,c,w.x,w.y)&&_t(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=y&&v.y>=_&&v.y<=m&&v!==a&&v!==s&&Ta(o,u,l,p,h,c,v.x,v.y)&&_t(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=d;){if(w.x>=f&&w.x<=y&&w.y>=_&&w.y<=m&&w!==a&&w!==s&&Ta(o,u,l,p,h,c,w.x,w.y)&&_t(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=b;){if(v.x>=f&&v.x<=y&&v.y>=_&&v.y<=m&&v!==a&&v!==s&&Ta(o,u,l,p,h,c,v.x,v.y)&&_t(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function np(e,t){let i=e;do{let r=i.prev,a=i.next.next;!ia(r,a)&&yu(r,i,i.next,a)&&Oa(r,a)&&Oa(a,r)&&(t.push(r.i,i.i,a.i),Fa(i),Fa(i.next),i=e=a),i=i.next}while(i!==e);return gr(i)}function sp(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&mp(s,o)){let l=Mu(s,o);s=gr(s,s.next),l=gr(l,l.next),Na(s,t,i,r,a,n,0),Na(l,t,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function op(e,t,i,r){let a=[];for(let n=0,s=t.length;n<s;n++){let o=t[n]*r,l=n<s-1?t[n+1]*r:e.length,h=_u(e,o,l,r,!1);h===h.next&&(h.steiner=!0),a.push(fp(h))}a.sort(lp);for(let n=0;n<a.length;n++)i=hp(a[n],i);return i}function lp(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let r=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);i=r-a}return i}function hp(e,t){let i=up(e,t);if(!i)return t;let r=Mu(i,e);return gr(r,r.next),gr(i,i.next)}function up(e,t){let i=t,r=e.x,a=e.y,n=-1/0,s;if(ia(e,i))return i;do{if(ia(e,i.next))return i.next;if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){let p=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(p<=r&&p>n&&(n=p,s=i.x<i.next.x?i:i.next,p===r))return s}i=i.next}while(i!==t);if(!s)return null;let o=s,l=s.x,h=s.y,u=1/0;i=s;do{if(r>=i.x&&i.x>=l&&r!==i.x&&xu(a<h?r:n,a,l,h,a<h?n:r,a,i.x,i.y)){let p=Math.abs(a-i.y)/(r-i.x);Oa(i,e)&&(p<u||p===u&&(i.x>s.x||i.x===s.x&&cp(s,i)))&&(s=i,u=p)}i=i.next}while(i!==o);return s}function cp(e,t){return _t(e.prev,e,t.prev)<0&&_t(t.next,e,e.next)<0}function dp(e,t,i,r){let a=e;do a.z===0&&(a.z=Vo(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,pp(a)}function pp(e){let t,i=1;do{let r=e,a;e=null;let n=null;for(t=0;r;){t++;let s=r,o=0;for(let h=0;h<i&&(o++,s=s.nextZ,!!s);h++);let l=i;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(a=r,r=r.nextZ,o--):(a=s,s=s.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=s}n.nextZ=null,i*=2}while(t>1);return e}function Vo(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function fp(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function xu(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function Ta(e,t,i,r,a,n,s,o){return!(e===s&&t===o)&&xu(e,t,i,r,a,n,s,o)}function mp(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!gp(e,t)&&(Oa(e,t)&&Oa(t,e)&&vp(e,t)&&(_t(e.prev,e,t.prev)||_t(e,t.prev,t))||ia(e,t)&&_t(e.prev,e,e.next)>0&&_t(t.prev,t,t.next)>0)}function _t(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function ia(e,t){return e.x===t.x&&e.y===t.y}function yu(e,t,i,r){let a=Tn(_t(e,t,i)),n=Tn(_t(e,t,r)),s=Tn(_t(i,r,e)),o=Tn(_t(i,r,t));return!!(a!==n&&s!==o||a===0&&bn(e,i,t)||n===0&&bn(e,r,t)||s===0&&bn(i,e,r)||o===0&&bn(i,t,r))}function bn(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Tn(e){return e>0?1:e<0?-1:0}function gp(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&yu(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Oa(e,t){return _t(e.prev,e,e.next)<0?_t(e,t,e.next)>=0&&_t(e,e.prev,t)>=0:_t(e,t,e.prev)<0||_t(e,e.next,t)<0}function vp(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function Mu(e,t){let i=Ho(e.i,e.x,e.y),r=Ho(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function Jl(e,t,i,r){let a=Ho(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function Fa(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ho(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _p(e,t,i,r){let a=0;for(let n=t,s=i-r;n<i;n+=r)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var xp=class{static triangulate(e,t,i=2){return ip(e,t,i)}},ur=class Su{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return Su.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];$l(t),Ql(r,t);let s=t.length;i.forEach($l);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,Ql(r,i[l]);let o=xp.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function $l(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ql(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var yp=class bu extends ct{constructor(t=new vu([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new We(a,3)),this.setAttribute("uv",new We(n,2)),this.computeVertexNormals();function s(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,u=i.steps!==void 0?i.steps:1,p=i.depth!==void 0?i.depth:1,c=i.bevelEnabled!==void 0?i.bevelEnabled:!0,f=i.bevelThickness!==void 0?i.bevelThickness:.2,_=i.bevelSize!==void 0?i.bevelSize:f-.1,y=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,d=i.extrudePath,b=i.UVGenerator!==void 0?i.UVGenerator:Mp,w,v=!1,T,A,R,g;if(d){w=d.getSpacedPoints(u),v=!0,c=!1;let ne=d.isCatmullRomCurve3?d.closed:!1;T=d.computeFrenetFrames(u,ne),A=new C,R=new C,g=new C}c||(m=0,f=0,_=0,y=0);let M=o.extractPoints(h),I=M.shape,P=M.holes;if(!ur.isClockWise(I)){I=I.reverse();for(let ne=0,re=P.length;ne<re;ne++){let ue=P[ne];ur.isClockWise(ue)&&(P[ne]=ue.reverse())}}function B(ne){let re=10000000000000001e-36,ue=ne[0];for(let ve=1;ve<=ne.length;ve++){let _e=ve%ne.length,Te=ne[_e],De=Te.x-ue.x,ze=Te.y-ue.y,Be=De*De+ze*ze,L=Math.max(Math.abs(Te.x),Math.abs(Te.y),Math.abs(ue.x),Math.abs(ue.y)),rt=re*L*L;if(Be<=rt){ne.splice(_e,1),ve--;continue}ue=Te}}B(I),P.forEach(B);let Z=P.length,O=I;for(let ne=0;ne<Z;ne++){let re=P[ne];I=I.concat(re)}function U(ne,re,ue){return re||ke("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(re,ue)}let Q=I.length;function W(ne,re,ue){let ve,_e,Te,De=ne.x-re.x,ze=ne.y-re.y,Be=ue.x-ne.x,L=ue.y-ne.y,rt=De*De+ze*ze,qe=De*L-ze*Be;if(Math.abs(qe)>Number.EPSILON){let je=Math.sqrt(rt),E=Math.sqrt(Be*Be+L*L),x=re.x-ze/je,F=re.y+De/je,N=ue.x-L/E,k=ue.y+Be/E,q=((N-x)*L-(k-F)*Be)/(De*L-ze*Be);ve=x+De*q-ne.x,_e=F+ze*q-ne.y;let se=ve*ve+_e*_e;if(se<=2)return new ae(ve,_e);Te=Math.sqrt(se/2)}else{let je=!1;De>Number.EPSILON?Be>Number.EPSILON&&(je=!0):De<-Number.EPSILON?Be<-Number.EPSILON&&(je=!0):Math.sign(ze)===Math.sign(L)&&(je=!0),je?(ve=-ze,_e=De,Te=Math.sqrt(rt)):(ve=De,_e=ze,Te=Math.sqrt(rt/2))}return new ae(ve/Te,_e/Te)}let ce=[];for(let ne=0,re=O.length,ue=re-1,ve=ne+1;ne<re;ne++,ue++,ve++)ue===re&&(ue=0),ve===re&&(ve=0),ce[ne]=W(O[ne],O[ue],O[ve]);let Y=[],J,ie=ce.concat();for(let ne=0,re=Z;ne<re;ne++){let ue=P[ne];J=[];for(let ve=0,_e=ue.length,Te=_e-1,De=ve+1;ve<_e;ve++,Te++,De++)Te===_e&&(Te=0),De===_e&&(De=0),J[ve]=W(ue[ve],ue[Te],ue[De]);Y.push(J),ie=ie.concat(J)}let Oe;if(m===0)Oe=ur.triangulateShape(O,P);else{let ne=[],re=[];for(let ue=0;ue<m;ue++){let ve=ue/m,_e=f*Math.cos(ve*Math.PI/2),Te=_*Math.sin(ve*Math.PI/2)+y;for(let De=0,ze=O.length;De<ze;De++){let Be=U(O[De],ce[De],Te);$(Be.x,Be.y,-_e),ve===0&&ne.push(Be)}for(let De=0,ze=Z;De<ze;De++){let Be=P[De];J=Y[De];let L=[];for(let rt=0,qe=Be.length;rt<qe;rt++){let je=U(Be[rt],J[rt],Te);$(je.x,je.y,-_e),ve===0&&L.push(je)}ve===0&&re.push(L)}}Oe=ur.triangulateShape(ne,re)}let Ee=Oe.length,Ke=_+y;for(let ne=0;ne<Q;ne++){let re=c?U(I[ne],ie[ne],Ke):I[ne];v?(R.copy(T.normals[0]).multiplyScalar(re.x),A.copy(T.binormals[0]).multiplyScalar(re.y),g.copy(w[0]).add(R).add(A),$(g.x,g.y,g.z)):$(re.x,re.y,0)}for(let ne=1;ne<=u;ne++)for(let re=0;re<Q;re++){let ue=c?U(I[re],ie[re],Ke):I[re];v?(R.copy(T.normals[ne]).multiplyScalar(ue.x),A.copy(T.binormals[ne]).multiplyScalar(ue.y),g.copy(w[ne]).add(R).add(A),$(g.x,g.y,g.z)):$(ue.x,ue.y,p/u*ne)}for(let ne=m-1;ne>=0;ne--){let re=ne/m,ue=f*Math.cos(re*Math.PI/2),ve=_*Math.sin(re*Math.PI/2)+y;for(let _e=0,Te=O.length;_e<Te;_e++){let De=U(O[_e],ce[_e],ve);$(De.x,De.y,p+ue)}for(let _e=0,Te=P.length;_e<Te;_e++){let De=P[_e];J=Y[_e];for(let ze=0,Be=De.length;ze<Be;ze++){let L=U(De[ze],J[ze],ve);v?$(L.x,L.y+w[u-1].y,w[u-1].x+ue):$(L.x,L.y,p+ue)}}}Ge(),K();function Ge(){let ne=a.length/3;if(c){let re=0,ue=Q*re;for(let ve=0;ve<Ee;ve++){let _e=Oe[ve];me(_e[2]+ue,_e[1]+ue,_e[0]+ue)}re=u+m*2,ue=Q*re;for(let ve=0;ve<Ee;ve++){let _e=Oe[ve];me(_e[0]+ue,_e[1]+ue,_e[2]+ue)}}else{for(let re=0;re<Ee;re++){let ue=Oe[re];me(ue[2],ue[1],ue[0])}for(let re=0;re<Ee;re++){let ue=Oe[re];me(ue[0]+Q*u,ue[1]+Q*u,ue[2]+Q*u)}}r.addGroup(ne,a.length/3-ne,0)}function K(){let ne=a.length/3,re=0;X(O,re),re+=O.length;for(let ue=0,ve=P.length;ue<ve;ue++){let _e=P[ue];X(_e,re),re+=_e.length}r.addGroup(ne,a.length/3-ne,1)}function X(ne,re){let ue=ne.length;for(;--ue>=0;){let ve=ue,_e=ue-1;_e<0&&(_e=ne.length-1);for(let Te=0,De=u+m*2;Te<De;Te++){let ze=Q*Te,Be=Q*(Te+1),L=re+ve+ze,rt=re+_e+ze,qe=re+_e+Be,je=re+ve+Be;Ae(L,rt,qe,je)}}}function $(ne,re,ue){l.push(ne),l.push(re),l.push(ue)}function me(ne,re,ue){de(ne),de(re),de(ue);let ve=a.length/3,_e=b.generateTopUV(r,a,ve-3,ve-2,ve-1);Fe(_e[0]),Fe(_e[1]),Fe(_e[2])}function Ae(ne,re,ue,ve){de(ne),de(re),de(ve),de(re),de(ue),de(ve);let _e=a.length/3,Te=b.generateSideWallUV(r,a,_e-6,_e-3,_e-2,_e-1);Fe(Te[0]),Fe(Te[1]),Fe(Te[3]),Fe(Te[1]),Fe(Te[2]),Fe(Te[3])}function de(ne){a.push(l[ne*3+0]),a.push(l[ne*3+1]),a.push(l[ne*3+2])}function Fe(ne){n.push(ne.x),n.push(ne.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return Sp(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new Wn[a.type]().fromJSON(a)),new bu(r,t.options)}},Mp={generateTopUV:function(e,t,i,r,a){let n=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],u=t[a*3+1];return[new ae(n,s),new ae(o,l),new ae(h,u)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],u=t[r*3+1],p=t[r*3+2],c=t[a*3],f=t[a*3+1],_=t[a*3+2],y=t[n*3],m=t[n*3+1],d=t[n*3+2];return Math.abs(o-u)<Math.abs(s-h)?[new ae(s,1-l),new ae(h,1-p),new ae(c,1-_),new ae(y,1-d)]:[new ae(o,1-l),new ae(u,1-p),new ae(f,1-_),new ae(m,1-d)]}};function Sp(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var nl=class Tu extends za{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,n,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Tu(t.radius,t.detail)}},bp=class Eu extends ct{constructor(t=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=et(a,0,Math.PI*2);let n=[],s=[],o=[],l=[],h=[],u=1/i,p=new C,c=new ae,f=new C,_=new C,y=new C,m=0,d=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,d=t[b+1].y-t[b].y,f.x=d*1,f.y=-m,f.z=d*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[b+1].x-t[b].x,d=t[b+1].y-t[b].y,f.x=d*1,f.y=-m,f.z=d*0,_.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(_)}for(let b=0;b<=i;b++){let w=r+b*u*a,v=Math.sin(w),T=Math.cos(w);for(let A=0;A<=t.length-1;A++){p.x=t[A].x*v,p.y=t[A].y,p.z=t[A].x*T,s.push(p.x,p.y,p.z),c.x=b/i,c.y=A/(t.length-1),o.push(c.x,c.y);let R=l[3*A+0]*v,g=l[3*A+1],M=l[3*A+0]*T;h.push(R,g,M)}}for(let b=0;b<i;b++)for(let w=0;w<t.length-1;w++){let v=w+b*t.length,T=v,A=v+t.length,R=v+t.length+1,g=v+1;n.push(T,A,g),n.push(R,g,A)}this.setIndex(n),this.setAttribute("position",new We(s,3)),this.setAttribute("uv",new We(o,2)),this.setAttribute("normal",new We(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eu(t.points,t.segments,t.phiStart,t.phiLength)}},Tp=class wu extends za{constructor(t=1,i=0){let r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new wu(t.radius,t.detail)}},aa=class Au extends ct{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,u=l+1,p=t/o,c=i/l,f=[],_=[],y=[],m=[];for(let d=0;d<u;d++){let b=d*c-s;for(let w=0;w<h;w++){let v=w*p-n;_.push(v,-b,0),y.push(0,0,1),m.push(w/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){let w=b+h*d,v=b+h*(d+1),T=b+1+h*(d+1),A=b+1+h*d;f.push(w,v,A),f.push(v,T,A)}this.setIndex(f),this.setAttribute("position",new We(_,3)),this.setAttribute("normal",new We(y,3)),this.setAttribute("uv",new We(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Au(t.width,t.height,t.widthSegments,t.heightSegments)}},Ep=class Cu extends ct{constructor(t=.5,i=1,r=32,a=1,n=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:n,thetaLength:s},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],h=[],u=[],p=t,c=(i-t)/a,f=new C,_=new ae;for(let y=0;y<=a;y++){for(let m=0;m<=r;m++){let d=n+m/r*s;f.x=p*Math.cos(d),f.y=p*Math.sin(d),l.push(f.x,f.y,f.z),h.push(0,0,1),_.x=(f.x/i+1)/2,_.y=(f.y/i+1)/2,u.push(_.x,_.y)}p+=c}for(let y=0;y<a;y++){let m=y*(r+1);for(let d=0;d<r;d++){let b=d+m,w=b,v=b+r+1,T=b+r+2,A=b+1;o.push(w,v,A),o.push(v,T,A)}}this.setIndex(o),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},wp=class Ru extends ct{constructor(t=new vu([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(n,3)),this.setAttribute("uv",new We(s,2));function h(u){let p=a.length/3,c=u.extractPoints(i),f=c.shape,_=c.holes;ur.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,d=_.length;m<d;m++){let b=_[m];ur.isClockWise(b)===!0&&(_[m]=b.reverse())}let y=ur.triangulateShape(f,_);for(let m=0,d=_.length;m<d;m++){let b=_[m];f=f.concat(b)}for(let m=0,d=f.length;m<d;m++){let b=f[m];a.push(b.x,b.y,0),n.push(0,0,1),s.push(b.x,b.y)}for(let m=0,d=y.length;m<d;m++){let b=y[m],w=b[0]+p,v=b[1]+p,T=b[2]+p;r.push(w,v,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return Ap(i,t)}static fromJSON(t,i){let r=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=i[t.shapes[a]];r.push(s)}return new Ru(r,t.curveSegments)}};function Ap(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var Cp=class Pu extends ct{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),h=0,u=[],p=new C,c=new C,f=[],_=[],y=[],m=[];for(let d=0;d<=r;d++){let b=[],w=d/r,v=s+w*o,T=t*Math.cos(v),A=Math.sqrt(t*t-T*T),R=0;d===0&&s===0?R=.5/i:d===r&&l===Math.PI&&(R=-.5/i);for(let g=0;g<=i;g++){let M=g/i,I=a+M*n;p.x=-A*Math.cos(I),p.y=T,p.z=A*Math.sin(I),_.push(p.x,p.y,p.z),c.copy(p).normalize(),y.push(c.x,c.y,c.z),m.push(M+R,1-w),b.push(h++)}u.push(b)}for(let d=0;d<r;d++)for(let b=0;b<i;b++){let w=u[d][b+1],v=u[d][b],T=u[d+1][b],A=u[d+1][b+1];(d!==0||s>0)&&f.push(w,v,A),(d!==r-1||l<Math.PI)&&f.push(v,T,A)}this.setIndex(f),this.setAttribute("position",new We(_,3)),this.setAttribute("normal",new We(y,3)),this.setAttribute("uv",new We(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Rp=class Iu extends za{constructor(t=1,i=0){let r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,a,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Iu(t.radius,t.detail)}},Pp=class Lu extends ct{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let l=[],h=[],u=[],p=[],c=new C,f=new C,_=new C;for(let y=0;y<=r;y++){let m=s+y/r*o;for(let d=0;d<=a;d++){let b=d/a*n;f.x=(t+i*Math.cos(m))*Math.cos(b),f.y=(t+i*Math.cos(m))*Math.sin(b),f.z=i*Math.sin(m),h.push(f.x,f.y,f.z),c.x=t*Math.cos(b),c.y=t*Math.sin(b),_.subVectors(f,c).normalize(),u.push(_.x,_.y,_.z),p.push(d/a),p.push(y/r)}}for(let y=1;y<=r;y++)for(let m=1;m<=a;m++){let d=(a+1)*y+m-1,b=(a+1)*(y-1)+m-1,w=(a+1)*(y-1)+m,v=(a+1)*y+m;l.push(d,b,v),l.push(b,w,v)}this.setIndex(l),this.setAttribute("position",new We(h,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Ip=class Du extends ct{constructor(t=1,i=.4,r=64,a=8,n=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:r,radialSegments:a,p:n,q:s},r=Math.floor(r),a=Math.floor(a);let o=[],l=[],h=[],u=[],p=new C,c=new C,f=new C,_=new C,y=new C,m=new C,d=new C;for(let w=0;w<=r;++w){let v=w/r*n*Math.PI*2;b(v,n,s,t,f),b(v+.01,n,s,t,_),m.subVectors(_,f),d.addVectors(_,f),y.crossVectors(m,d),d.crossVectors(y,m),y.normalize(),d.normalize();for(let T=0;T<=a;++T){let A=T/a*Math.PI*2,R=-i*Math.cos(A),g=i*Math.sin(A);p.x=f.x+(R*d.x+g*y.x),p.y=f.y+(R*d.y+g*y.y),p.z=f.z+(R*d.z+g*y.z),l.push(p.x,p.y,p.z),c.subVectors(p,f).normalize(),h.push(c.x,c.y,c.z),u.push(w/r),u.push(T/a)}}for(let w=1;w<=r;w++)for(let v=1;v<=a;v++){let T=(a+1)*(w-1)+(v-1),A=(a+1)*w+(v-1),R=(a+1)*w+v,g=(a+1)*(w-1)+v;o.push(T,A,g),o.push(A,R,g)}this.setIndex(o),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(u,2));function b(w,v,T,A,R){let g=Math.cos(w),M=Math.sin(w),I=T/v*w,P=Math.cos(I);R.x=A*(2+P)*.5*g,R.y=A*(2+P)*M*.5,R.z=A*Math.sin(I)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Du(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Lp=class Uu extends ct{constructor(t=new mu(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new C,l=new C,h=new ae,u=new C,p=[],c=[],f=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new We(p,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(f,2));function y(){for(let w=0;w<i;w++)m(w);m(n===!1?i:0),b(),d()}function m(w){u=t.getPointAt(w/i,u);let v=s.normals[w],T=s.binormals[w];for(let A=0;A<=a;A++){let R=A/a*Math.PI*2,g=Math.sin(R),M=-Math.cos(R);l.x=M*v.x+g*T.x,l.y=M*v.y+g*T.y,l.z=M*v.z+g*T.z,l.normalize(),c.push(l.x,l.y,l.z),o.x=u.x+r*l.x,o.y=u.y+r*l.y,o.z=u.z+r*l.z,p.push(o.x,o.y,o.z)}}function d(){for(let w=1;w<=i;w++)for(let v=1;v<=a;v++){let T=(a+1)*(w-1)+(v-1),A=(a+1)*w+(v-1),R=(a+1)*w+v,g=(a+1)*(w-1)+v;_.push(T,A,g),_.push(A,R,g)}}function b(){for(let w=0;w<=i;w++)for(let v=0;v<=a;v++)h.x=w/i,h.y=v/a,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Uu(new Wn[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Dp=class extends ct{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new C,a=new C;if(e.index!==null){let n=e.attributes.position,s=e.index,o=e.groups;o.length===0&&(o=[{start:0,count:s.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let u=o[l],p=u.start,c=u.count;for(let f=p,_=p+c;f<_;f+=3)for(let y=0;y<3;y++){let m=s.getX(f+y),d=s.getX(f+(y+1)%3);r.fromBufferAttribute(n,m),a.fromBufferAttribute(n,d),eh(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let n=e.attributes.position;for(let s=0,o=n.count/3;s<o;s++)for(let l=0;l<3;l++){let h=3*s+l,u=3*s+(l+1)%3;r.fromBufferAttribute(n,h),a.fromBufferAttribute(n,u),eh(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new We(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function eh(e,t,i){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(r)===!0||i.has(a)===!0?!1:(i.add(r),i.add(a),!0)}var ex=Object.freeze({__proto__:null,BoxGeometry:is,CapsuleGeometry:zd,CircleGeometry:Gd,ConeGeometry:Vd,CylinderGeometry:rs,DodecahedronGeometry:Hd,EdgesGeometry:kd,ExtrudeGeometry:yp,IcosahedronGeometry:nl,LatheGeometry:bp,OctahedronGeometry:Tp,PlaneGeometry:aa,PolyhedronGeometry:za,RingGeometry:Ep,ShapeGeometry:wp,SphereGeometry:Cp,TetrahedronGeometry:Rp,TorusGeometry:Pp,TorusKnotGeometry:Ip,TubeGeometry:Lp,WireframeGeometry:Dp});function ra(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(th(a))a.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(th(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Gt(e){let t={};for(let i=0;i<e.length;i++){let r=ra(e[i]);for(let a in r)t[a]=r[a]}return t}function th(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Up(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Nu(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:it.workingColorSpace}var vi={clone:ra,merge:Gt},Np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vt=class extends _r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Np,this.fragmentShader=Op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=Up(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(r.value);break;case"v2":this.uniforms[i].value=new ae().fromArray(r.value);break;case"v3":this.uniforms[i].value=new C().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ft().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Je().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},sl=class extends vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ou=class extends _r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Fp=class extends _r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bp=class extends _r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fr(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Ws(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ga=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zp=class extends Ga{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_l,endingEnd:_l}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case xl:a=e,s=2*t-i;break;case yl:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case xl:n=e,o=2*i-t;break;case yl:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,c=this._weightNext,f=(i-t)/(r-t),_=f*f,y=_*f,m=-p*y+2*p*_-p*f,d=(1+p)*y+(-1.5-2*p)*_+(-.5+p)*f+1,b=(-1-c)*y+(1.5+c)*_+.5*f,w=c*y-c*_;for(let v=0;v!==s;++v)a[v]=m*n[h+v]+d*n[l+v]+b*n[o+v]+w*n[u+v];return a}},Gp=class extends Ga{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),u=1-h;for(let p=0;p!==s;++p)a[p]=n[l+p]*u+n[o+p]*h;return a}},Vp=class extends Ga{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Hp=class extends Ga{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this.inTangents,u=this.outTangents;if(!h||!u){let f=(i-t)/(r-t),_=1-f;for(let y=0;y!==s;++y)a[y]=n[l+y]*_+n[o+y]*f;return a}let p=s*2,c=e-1;for(let f=0;f!==s;++f){let _=n[l+f],y=n[o+f],m=c*p+f*2,d=u[m],b=u[m+1],w=e*p+f*2,v=h[w],T=h[w+1],A=Wp(i,t,d,v,r);a[f]=Fu(A,_,b,T,y)}return a}};function Fu(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function kp(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function Wp(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=Fu(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=kp(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}var Ai=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fr(t,this.TimeBufferType),this.values=Fr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fr(e.times,Array),values:Fr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Ws(e.settings)&&(i.settings={inTangents:Fr(e.settings.inTangents,Array),outTangents:Fr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Vp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Hp(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case zn:t=this.InterpolantFactoryMethodDiscrete;break;case Bo:t=this.InterpolantFactoryMethodLinear;break;case vs:t=this.InterpolantFactoryMethodSmooth;break;case vl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return He("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zn;case this.InterpolantFactoryMethodLinear:return Bo;case this.InterpolantFactoryMethodSmooth:return vs;case this.InterpolantFactoryMethodBezier:return vl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Ws(this.settings)&&(ih(this.settings.inTangents,e),ih(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(ke("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){ke("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){ke("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&Xc(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){ke("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===vs,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(r)o=!0;else{let u=s*i,p=u-i,c=u+i;for(let f=0;f!==i;++f){let _=t[u+f];if(_!==t[p+f]||_!==t[c+f]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let u=s*i,p=n*i;for(let c=0;c!==i;++c)t[p+c]=t[u+c]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ws(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ih(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}Ai.prototype.ValueTypeName="";Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=Bo;var Va=class extends Ai{constructor(e,t,i){super(e,t,i)}};Va.prototype.ValueTypeName="bool";Va.prototype.ValueBufferType=Array;Va.prototype.DefaultInterpolation=zn;Va.prototype.InterpolantFactoryMethodLinear=void 0;Va.prototype.InterpolantFactoryMethodSmooth=void 0;var Xp=class extends Ai{constructor(e,t,i,r){super(e,t,i,r)}};Xp.prototype.ValueTypeName="color";var jp=class extends Ai{constructor(e,t,i,r){super(e,t,i,r)}};jp.prototype.ValueTypeName="number";var qp=class extends Ga{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let h=l+s;l!==h;l+=4)Zt.slerpFlat(a,0,n,l-s,n,l,o);return a}},Bu=class extends Ai{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new qp(this.times,this.values,this.getValueSize(),e)}};Bu.prototype.ValueTypeName="quaternion";Bu.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Ai{constructor(e,t,i){super(e,t,i)}};Ha.prototype.ValueTypeName="string";Ha.prototype.ValueBufferType=Array;Ha.prototype.DefaultInterpolation=zn;Ha.prototype.InterpolantFactoryMethodLinear=void 0;Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Yp=class extends Ai{constructor(e,t,i,r){super(e,t,i,r)}};Yp.prototype.ValueTypeName="vector";var Zp=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){s++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let c=l[u],f=l[u+1];if(c.global&&(c.lastIndex=0),c.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kp=new Zp,Jp=class{constructor(e){this.manager=e!==void 0?e:Kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Jp.DEFAULT_MATERIAL_NAME="__DEFAULT";var zu=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Gu=class extends zu{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Xs=new Je,rh=new C,ah=new C,$p=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ta,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;rh.setFromMatrixPosition(e.matrixWorld),t.position.copy(rh),ah.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ah),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Xs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Xs,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===La||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(Xs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},En=new C,wn=new Zt,Mi=new C,ol=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(En,wn,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(En,wn,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(En,wn,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(En,wn,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ki=new C,nh=new ae,sh=new ae,qt=class extends ol{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,nh,sh),t.subVectors(sh,nh)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ka=class extends ol{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qp=class extends $p{constructor(){super(new ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vu=class extends zu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Qp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var tx=new Je,ix=new Je,rx=new Je;var Br=-90,zr=1,ef=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qt(Br,zr,e,t);r.layers=this.layers,this.add(r);let a=new qt(Br,zr,e,t);a.layers=this.layers,this.add(a);let n=new qt(Br,zr,e,t);n.layers=this.layers,this.add(n);let s=new qt(Br,zr,e,t);s.layers=this.layers,this.add(s);let o=new qt(Br,zr,e,t);o.layers=this.layers,this.add(o);let l=new qt(Br,zr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===La)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,p,c),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},tf=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Hu=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=rf.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function rf(){this._document.hidden===!1&&this.reset()}var ax=new C,nx=new Zt,sx=new C,ox=new C,lx=new C;var hx=new C,ux=new Zt,cx=new C,dx=new C;var ll="\\[\\]\\.:\\/",af=new RegExp("["+ll+"]","g"),hl="[^"+ll+"]",nf="[^"+ll.replace("\\.","")+"]",sf=/((?:WC+[\/:])*)/.source.replace("WC",hl),of=/(WCOD+)?/.source.replace("WCOD",nf),lf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hl),hf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hl),uf=new RegExp("^"+sf+of+lf+hf+"$"),cf=["material","materials","bones","map"],df=class{constructor(e,t,i){let r=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},yt=class kr{constructor(t,i,r){this.path=i,this.parsedPath=r||kr.parseTrackName(i),this.node=kr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new kr.Composite(t,i,r):new kr(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(af,"")}static parseTrackName(t){let i=uf.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);cf.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=kr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=i.nodeName;ke("PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=df;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var px=new Float32Array(1);var fx=new Je;var $r,mx=($r=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},$r.prototype.isMatrix2=!0,$r),gx=new ae;var vx=new C,_x=new C,xx=new C,yx=new C,Mx=new C,Sx=new C,bx=new C;var Tx=new C;var Ex=new C,wx=new Je,Ax=new Je;var Cx=new C,Rx=new Xe,Px=new Xe;var Ix=new C,Lx=new C,Dx=new C;var Ux=new C,Nx=new ol;var Ox=new Bi;var Fx=new C;function oh(e,t,i,r){let a=pf(r);switch(i){case Bh:return e*t;case Yo:return e*t/a.components*a.byteLength;case Zo:return e*t/a.components*a.byteLength;case mr:return e*t*2/a.components*a.byteLength;case Ko:return e*t*2/a.components*a.byteLength;case zh:return e*t*3/a.components*a.byteLength;case pi:return e*t*4/a.components*a.byteLength;case Jo:return e*t*4/a.components*a.byteLength;case Pn:case In:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ln:case Dn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case lo:case uo:return Math.max(e,16)*Math.max(t,8)/4;case oo:case ho:return Math.max(e,8)*Math.max(t,8)/2;case co:case po:case mo:case go:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fo:case Fn:case vo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case yo:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case So:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case bo:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case To:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case wo:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Co:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Po:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Io:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Lo:case Do:case Uo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case No:case Oo:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Bn:case Fo:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function pf(e){switch(e){case Yt:case Uh:return{byteLength:1,components:1};case Pa:case Nh:case Ft:return{byteLength:2,components:1};case jo:case qo:return{byteLength:2,components:4};case Ei:case Xo:case di:return{byteLength:4,components:1};case Oh:case Fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ku(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function ff(e){let t=new WeakMap;function i(o,l){let h=o.array,u=o.usage,p=h.byteLength,c=e.createBuffer();e.bindBuffer(l,c),e.bufferData(l,h,u),o.onUploadCallback();let f;if(h instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=e.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=e.SHORT;else if(h instanceof Uint32Array)f=e.UNSIGNED_INT;else if(h instanceof Int32Array)f=e.INT;else if(h instanceof Int8Array)f=e.BYTE;else if(h instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:p}}function r(o,l,h){let u=l.array,p=l.updateRanges;if(e.bindBuffer(h,o),p.length===0)e.bufferSubData(h,0,u);else{p.sort((f,_)=>f.start-_.start);let c=0;for(let f=1;f<p.length;f++){let _=p[c],y=p[f];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++c,p[c]=y)}p.length=c+1;for(let f=0,_=p.length;f<_;f++){let y=p[f];e.bufferSubData(h,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}var mf=`#ifdef USE_ALPHAHASH
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
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yf=`#ifdef USE_ALPHATEST
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
#endif`,Sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bf=`#ifdef USE_BATCHING
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
#endif`,Uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
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
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_FOG
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#endif`,vm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bm=`#ifdef USE_MAP
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
vec3 nonPerturbedNormal = normal;`,Um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nm=`#ifndef FLAT_SHADED
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
#endif`,Hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,km=`#ifdef OPAQUE
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
#endif`,Km=`#ifdef USE_ROUGHNESSMAP
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
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ug=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,vg=`varying vec3 vWorldDirection;
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`uniform samplerCube tCube;
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
}`,Sg=`#if DEPTH_PACKING == 3200
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
}`,bg=`#define DISTANCE
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
}`,Ug=`#define MATCAP
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
}`,Ng=`#define NORMAL
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
}`,Hg=`#define TOON
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
}`,kg=`uniform float size;
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
}`,Qe={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:vf,alphamap_pars_fragment:_f,alphatest_fragment:xf,alphatest_pars_fragment:yf,aomap_fragment:Mf,aomap_pars_fragment:Sf,batching_pars_vertex:bf,batching_vertex:Tf,begin_vertex:Ef,beginnormal_vertex:wf,bsdfs:Af,iridescence_fragment:Cf,bumpmap_pars_fragment:Rf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:If,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:Df,color_fragment:Uf,color_pars_fragment:Nf,color_pars_vertex:Of,color_vertex:Ff,common:Bf,cube_uv_reflection_fragment:zf,defaultnormal_vertex:Gf,displacementmap_pars_vertex:Vf,displacementmap_vertex:Hf,emissivemap_fragment:kf,emissivemap_pars_fragment:Wf,colorspace_fragment:Xf,colorspace_pars_fragment:jf,envmap_fragment:qf,envmap_common_pars_fragment:Yf,envmap_pars_fragment:Zf,envmap_pars_vertex:Kf,envmap_physical_pars_fragment:om,envmap_vertex:Jf,fog_vertex:$f,fog_pars_vertex:Qf,fog_fragment:em,fog_pars_fragment:tm,gradientmap_pars_fragment:im,lightmap_pars_fragment:rm,lights_lambert_fragment:am,lights_lambert_pars_fragment:nm,lights_pars_begin:sm,lights_toon_fragment:lm,lights_toon_pars_fragment:hm,lights_phong_fragment:um,lights_phong_pars_fragment:cm,lights_physical_fragment:dm,lights_physical_pars_fragment:pm,lights_fragment_begin:fm,lights_fragment_maps:mm,lights_fragment_end:gm,lightprobes_pars_fragment:vm,logdepthbuf_fragment:_m,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:ym,logdepthbuf_vertex:Mm,map_fragment:Sm,map_pars_fragment:bm,map_particle_fragment:Tm,map_particle_pars_fragment:Em,metalnessmap_fragment:wm,metalnessmap_pars_fragment:Am,morphinstance_vertex:Cm,morphcolor_vertex:Rm,morphnormal_vertex:Pm,morphtarget_pars_vertex:Im,morphtarget_vertex:Lm,normal_fragment_begin:Dm,normal_fragment_maps:Um,normal_pars_fragment:Nm,normal_pars_vertex:Om,normal_vertex:Fm,normalmap_pars_fragment:Bm,clearcoat_normal_fragment_begin:zm,clearcoat_normal_fragment_maps:Gm,clearcoat_pars_fragment:Vm,iridescence_pars_fragment:Hm,opaque_fragment:km,packing:Wm,premultiplied_alpha_fragment:Xm,project_vertex:jm,dithering_fragment:qm,dithering_pars_fragment:Ym,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:Km,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:$m,shadowmap_vertex:Qm,shadowmask_pars_fragment:eg,skinbase_vertex:tg,skinning_pars_vertex:ig,skinning_vertex:rg,skinnormal_vertex:ag,specularmap_fragment:ng,specularmap_pars_fragment:sg,tonemapping_fragment:og,tonemapping_pars_fragment:lg,transmission_fragment:hg,transmission_pars_fragment:ug,uv_pars_fragment:cg,uv_pars_vertex:dg,uv_vertex:pg,worldpos_vertex:fg,background_vert:mg,background_frag:gg,backgroundCube_vert:vg,backgroundCube_frag:_g,cube_vert:xg,cube_frag:yg,depth_vert:Mg,depth_frag:Sg,distance_vert:bg,distance_frag:Tg,equirect_vert:Eg,equirect_frag:wg,linedashed_vert:Ag,linedashed_frag:Cg,meshbasic_vert:Rg,meshbasic_frag:Pg,meshlambert_vert:Ig,meshlambert_frag:Lg,meshmatcap_vert:Dg,meshmatcap_frag:Ug,meshnormal_vert:Ng,meshnormal_frag:Og,meshphong_vert:Fg,meshphong_frag:Bg,meshphysical_vert:zg,meshphysical_frag:Gg,meshtoon_vert:Vg,meshtoon_frag:Hg,points_vert:kg,points_frag:Wg,shadow_vert:Xg,shadow_frag:jg,sprite_vert:qg,sprite_frag:Yg},Me={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},bi={basic:{uniforms:Gt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Gt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Gt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Gt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Gt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Gt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Gt([Me.points,Me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Gt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Gt([Me.common,Me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Gt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Gt([Me.sprite,Me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Gt([Me.common,Me.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Gt([Me.lights,Me.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};bi.physical={uniforms:Gt([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var An={r:0,b:0,g:0},Zg=new Je,Wu=new Ye;Wu.set(-1,0,0,0,1,0,0,0,1);function Kg(e,t,i,r,a,n){let s=new Xe(0),o=a===!0?0:1,l,h,u=null,p=0,c=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let v=b.backgroundBlurriness>0;w=t.get(w,v)}return w}function _(b){let w=!1,v=f(b);v===null?m(s,o):v&&v.isColor&&(m(v,1),w=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,n):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function y(b,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===$n)?(h===void 0&&(h=new Ct(new is(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:ra(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Wu),h.material.toneMapped=it.getTransfer(v.colorSpace)!==st,(u!==v||p!==v.version||c!==e.toneMapping)&&(h.material.needsUpdate=!0,u=v,p=v.version,c=e.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ct(new aa(2,2),new vt({name:"BackgroundMaterial",uniforms:ra(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=it.getTransfer(v.colorSpace)!==st,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||p!==v.version||c!==e.toneMapping)&&(l.material.needsUpdate=!0,u=v,p=v.version,c=e.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,w){b.getRGB(An,Nu(e)),i.buffers.color.setClear(An.r,An.g,An.b,w,n)}function d(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,w=1){s.set(b),o=w,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(s,o)},render:_,addToRenderList:y,dispose:d}}function Jg(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=c(null),n=a,s=!1;function o(P,B,Z,O,U){let Q=!1,W=p(P,O,Z,B);n!==W&&(n=W,h(n.object)),Q=f(P,O,Z,U),Q&&_(P,O,Z,U),U!==null&&t.update(U,e.ELEMENT_ARRAY_BUFFER),(Q||s)&&(s=!1,v(P,B,Z,O),U!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return e.createVertexArray()}function h(P){return e.bindVertexArray(P)}function u(P){return e.deleteVertexArray(P)}function p(P,B,Z,O){let U=O.wireframe===!0,Q=r[B.id];Q===void 0&&(Q={},r[B.id]=Q);let W=P.isInstancedMesh===!0?P.id:0,ce=Q[W];ce===void 0&&(ce={},Q[W]=ce);let Y=ce[Z.id];Y===void 0&&(Y={},ce[Z.id]=Y);let J=Y[U];return J===void 0&&(J=c(l()),Y[U]=J),J}function c(P){let B=[],Z=[],O=[];for(let U=0;U<i;U++)B[U]=0,Z[U]=0,O[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:O,object:P,attributes:{},index:null}}function f(P,B,Z,O){let U=n.attributes,Q=B.attributes,W=0,ce=Z.getAttributes();for(let Y in ce)if(ce[Y].location>=0){let J=U[Y],ie=Q[Y];if(ie===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),J===void 0||J.attribute!==ie||ie&&J.data!==ie.data)return!0;W++}return n.attributesNum!==W||n.index!==O}function _(P,B,Z,O){let U={},Q=B.attributes,W=0,ce=Z.getAttributes();for(let Y in ce)if(ce[Y].location>=0){let J=Q[Y];J===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));let ie={};ie.attribute=J,J&&J.data&&(ie.data=J.data),U[Y]=ie,W++}n.attributes=U,n.attributesNum=W,n.index=O}function y(){let P=n.newAttributes;for(let B=0,Z=P.length;B<Z;B++)P[B]=0}function m(P){d(P,0)}function d(P,B){let Z=n.newAttributes,O=n.enabledAttributes,U=n.attributeDivisors;Z[P]=1,O[P]===0&&(e.enableVertexAttribArray(P),O[P]=1),U[P]!==B&&(e.vertexAttribDivisor(P,B),U[P]=B)}function b(){let P=n.newAttributes,B=n.enabledAttributes;for(let Z=0,O=B.length;Z<O;Z++)B[Z]!==P[Z]&&(e.disableVertexAttribArray(Z),B[Z]=0)}function w(P,B,Z,O,U,Q,W){W===!0?e.vertexAttribIPointer(P,B,Z,U,Q):e.vertexAttribPointer(P,B,Z,O,U,Q)}function v(P,B,Z,O){y();let U=O.attributes,Q=Z.getAttributes(),W=B.defaultAttributeValues;for(let ce in Q){let Y=Q[ce];if(Y.location>=0){let J=U[ce];if(J===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){let ie=J.normalized,Oe=J.itemSize,Ee=t.get(J);if(Ee===void 0)continue;let Ke=Ee.buffer,Ge=Ee.type,K=Ee.bytesPerElement,X=Ge===e.INT||Ge===e.UNSIGNED_INT||J.gpuType===Xo;if(J.isInterleavedBufferAttribute){let $=J.data,me=$.stride,Ae=J.offset;if($.isInstancedInterleavedBuffer){for(let de=0;de<Y.locationSize;de++)d(Y.location+de,$.meshPerAttribute);P.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let de=0;de<Y.locationSize;de++)m(Y.location+de);e.bindBuffer(e.ARRAY_BUFFER,Ke);for(let de=0;de<Y.locationSize;de++)w(Y.location+de,Oe/Y.locationSize,Ge,ie,me*K,(Ae+Oe/Y.locationSize*de)*K,X)}else{if(J.isInstancedBufferAttribute){for(let $=0;$<Y.locationSize;$++)d(Y.location+$,J.meshPerAttribute);P.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let $=0;$<Y.locationSize;$++)m(Y.location+$);e.bindBuffer(e.ARRAY_BUFFER,Ke);for(let $=0;$<Y.locationSize;$++)w(Y.location+$,Oe/Y.locationSize,Ge,ie,Oe*K,Oe/Y.locationSize*$*K,X)}}else if(W!==void 0){let ie=W[ce];if(ie!==void 0)switch(ie.length){case 2:e.vertexAttrib2fv(Y.location,ie);break;case 3:e.vertexAttrib3fv(Y.location,ie);break;case 4:e.vertexAttrib4fv(Y.location,ie);break;default:e.vertexAttrib1fv(Y.location,ie)}}}}b()}function T(){M();for(let P in r){let B=r[P];for(let Z in B){let O=B[Z];for(let U in O){let Q=O[U];for(let W in Q)u(Q[W].object),delete Q[W];delete O[U]}}delete r[P]}}function A(P){if(r[P.id]===void 0)return;let B=r[P.id];for(let Z in B){let O=B[Z];for(let U in O){let Q=O[U];for(let W in Q)u(Q[W].object),delete Q[W];delete O[U]}}delete r[P.id]}function R(P){for(let B in r){let Z=r[B];for(let O in Z){let U=Z[O];if(U[P.id]===void 0)continue;let Q=U[P.id];for(let W in Q)u(Q[W].object),delete Q[W];delete U[P.id]}}}function g(P){for(let B in r){let Z=r[B],O=P.isInstancedMesh===!0?P.id:0,U=Z[O];if(U!==void 0){for(let Q in U){let W=U[Q];for(let ce in W)u(W[ce].object),delete W[ce];delete U[Q]}delete Z[O],Object.keys(Z).length===0&&delete r[B]}}}function M(){I(),s=!0,n!==a&&(n=a,h(n.object))}function I(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:M,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function $g(e,t,i){let r;function a(l){r=l}function n(l,h){e.drawArrays(r,l,h),i.update(h,r,1)}function s(l,h,u){u!==0&&(e.drawArraysInstanced(r,l,h,u),i.update(h,r,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,u);let p=0;for(let c=0;c<u;c++)p+=h[c];i.update(p,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function Qg(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(R){return!(R!==pi&&r.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let g=R===Ft&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Yt&&R!==di&&!g&&r.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",u=l(h);u!==h&&(He("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let p=i.logarithmicDepthBuffer===!0,c=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&c===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),w=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:c,maxTextures:f,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:v,maxSamples:T,samples:A}}function e0(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Ji,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c){let f=p.length!==0||c||r!==0||a;return a=c,r=p.length,f},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(p,c){i=u(p,c,0)},this.setState=function(p,c,f){let _=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,d=e.get(p);if(!a||_===null||_.length===0||n&&!m)n?u(null):h();else{let b=n?0:r,w=b*4,v=d.clippingState||null;l.value=v,v=u(_,c,w,f);for(let T=0;T!==w;++T)v[T]=i[T];d.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(p,c,f,_){let y=p!==null?p.length:0,m=null;if(y!==0){if(m=l.value,_!==!0||m===null){let d=f+y*4,b=c.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,v=f;w!==y;++w,v+=4)s.copy(p[w]).applyMatrix4(b,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Wr=4,t0=6,i0=20,r0=256,Ma=new ka,lh=new Xe,js=null,qs=0,Ys=0,Zs=!1,a0=new C,sr=new C,hh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=a0}=a;js=this._renderer.getRenderTarget(),qs=this._renderer.getActiveCubeFace(),Ys=this._renderer.getActiveMipmapLevel(),Zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(js,qs,Ys),this._renderer.xr.enabled=Zs,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),js=this._renderer.getRenderTarget(),qs=this._renderer.getActiveCubeFace(),Ys=this._renderer.getActiveMipmapLevel(),Zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:At,minFilter:At,generateMipmaps:!1,type:Ft,format:pi,colorSpace:Gn,depthBuffer:!1},r=uh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uh(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=n0(a)),this._blurMaterial=o0(a,e,t),this._ggxMaterial=s0(a,e,t)}return r}_compileMaterial(e){let t=new Ct(new ct,e);this._renderer.compile(t,Ma)}_sceneToCubeUV(e,t,i,r,a){let n=new qt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(lh),l.toneMapping=ai,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ct(new is,new ts({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));let p=this._backgroundBox,c=p.material,f=!1,_=e.background;_?_.isColor&&(c.color.copy(_),e.background=null,f=!0):(c.color.copy(lh),f=!0);for(let y=0;y<6;y++){let m=y%3;m===0?(n.up.set(0,s[y],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[y],a.y,a.z)):m===1?(n.up.set(0,0,s[y]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[y],a.z)):(n.up.set(0,s[y],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[y]));let d=this._cubeSize;Gr(r,m*d,y>2?d:0,d,d),l.setRenderTarget(r),f&&l.render(p,n),l.render(e,n)}l.toneMapping=u,l.autoClear=h,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===fr||e.mapping===Qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Gr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,Ma)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),p=l*1.25,c=u*p,{_lodMax:f}=this,_=this._sizeLods[i],y=3*_*(i>f-Wr?i-f+Wr:0),m=4*(this._cubeSize-_);o.envMap.value=e.texture,o.roughness.value=c,o.mipInt.value=f-t,Gr(a,y,m,3*_,2*_),r.setRenderTarget(a),r.render(s,Ma),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=f-i,Gr(e,y,m,3*_,2*_),r.setRenderTarget(e),r.render(s,Ma)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let l=s.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-Wr?r-this._lodMax+Wr:0),p=4*(this._cubeSize-h);Gr(t,u,p,3*h,2*h),n.setRenderTarget(t),n.render(o,Ma)}};function n0(e){let t=[],i=[],r=e,a=e-Wr+1+t0;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let o=1/(s-2),l=-o,h=1+o,u=[l,l,h,l,h,h,l,l,h,h,l,h],p=6,c=6,f=3,_=new Float32Array(f*c*p),y=new Float32Array(f*c*p);for(let d=0;d<p;d++){let b=d%3*2/3-1,w=d>2?0:-1,v=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];_.set(v,f*c*d);for(let T=0;T<c;T++){let A=u[T*2]*2-1,R=u[T*2+1]*2-1;d===0?sr.set(1,R,A):d===1?sr.set(-A,1,-R):d===2?sr.set(-A,R,1):d===3?sr.set(-1,R,-A):d===4?sr.set(-A,-1,R):sr.set(A,R,-1),sr.toArray(y,(d*c+T)*f)}}let m=new ct;m.setAttribute("position",new Ot(_,f)),m.setAttribute("outputDirection",new Ot(y,f)),i.push(new Ct(m,null)),r>Wr&&r--}return{lodMeshes:i,sizeLods:t}}function uh(e,t,i){let r=new It(e,t,i);return r.texture.mapping=$n,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Gr(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function s0(e,t,i){return new vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:r0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:as(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function o0(e,t,i){return new vt({name:"SphericalGaussianBlur",defines:{SAMPLES:i0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:as(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ch(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:as(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function dh(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:as(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function as(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Xu=class extends It{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new iu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new is(5,5,5),a=new vt({name:"CubemapFromEquirect",uniforms:ra(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:mi});a.uniforms.tEquirect.value=t;let n=new Ct(r,a),s=t.minFilter;return t.minFilter===Ni&&(t.minFilter=At),new ef(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function l0(e){let t=new WeakMap,i=new WeakMap,r=null;function a(c,f=!1){return c==null?null:f?s(c):n(c)}function n(c){if(c&&c.isTexture){let f=c.mapping;if(f===fs||f===ms)if(t.has(c)){let _=t.get(c).texture;return o(_,c.mapping)}else{let _=c.image;if(_&&_.height>0){let y=new Xu(_.height);return y.fromEquirectangularTexture(e,c),t.set(c,y),c.addEventListener("dispose",h),o(y.texture,c.mapping)}else return null}}return c}function s(c){if(c&&c.isTexture){let f=c.mapping,_=f===fs||f===ms,y=f===fr||f===Qr;if(_||y){let m=i.get(c),d=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==d)return r===null&&(r=new hh(e)),m=_?r.fromEquirectangular(c,m):r.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,i.set(c,m),m.texture;if(m!==void 0)return m.texture;{let b=c.image;return _&&b&&b.height>0||y&&b&&l(b)?(r===null&&(r=new hh(e)),m=_?r.fromEquirectangular(c):r.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,i.set(c,m),c.addEventListener("dispose",u),m.texture):null}}}return c}function o(c,f){return f===fs?c.mapping=fr:f===ms&&(c.mapping=Qr),c}function l(c){let f=0,_=6;for(let y=0;y<_;y++)c[y]!==void 0&&f++;return f===_}function h(c){let f=c.target;f.removeEventListener("dispose",h);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function u(c){let f=c.target;f.removeEventListener("dispose",u);let _=i.get(f);_!==void 0&&(i.delete(f),_.dispose())}function p(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:p}}function h0(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Xr("WebGLRenderer: "+r+" extension not supported."),a}}}function u0(e,t,i,r){let a={},n=new WeakMap;function s(p){let c=p.target;c.index!==null&&t.remove(c.index);for(let _ in c.attributes)t.remove(c.attributes[_]);c.removeEventListener("dispose",s),delete a[c.id];let f=n.get(c);f&&(t.remove(f),n.delete(c)),r.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,i.memory.geometries--}function o(p,c){return a[c.id]===!0||(c.addEventListener("dispose",s),a[c.id]=!0,i.memory.geometries++),c}function l(p){let c=p.attributes;for(let f in c)t.update(c[f],e.ARRAY_BUFFER)}function h(p){let c=[],f=p.index,_=p.attributes.position,y=0;if(_===void 0)return;if(f!==null){let b=f.array;y=f.version;for(let w=0,v=b.length;w<v;w+=3){let T=b[w+0],A=b[w+1],R=b[w+2];c.push(T,A,A,R,R,T)}}else{let b=_.array;y=_.version;for(let w=0,v=b.length/3-1;w<v;w+=3){let T=w+0,A=w+1,R=w+2;c.push(T,A,A,R,R,T)}}let m=new(_.count>=65535?Zh:Yh)(c,1);m.version=y;let d=n.get(p);d&&t.remove(d),n.set(p,m)}function u(p){let c=n.get(p);if(c){let f=p.index;f!==null&&c.version<f.version&&h(p)}else h(p);return n.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function c0(e,t,i){let r;function a(p){r=p}let n,s;function o(p){n=p.type,s=p.bytesPerElement}function l(p,c){e.drawElements(r,c,n,p*s),i.update(c,r,1)}function h(p,c,f){f!==0&&(e.drawElementsInstanced(r,c,n,p*s,f),i.update(c,r,f))}function u(p,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,c,0,n,p,0,f);let _=0;for(let y=0;y<f;y++)_+=c[y];i.update(_,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u}function d0(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:ke("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function p0(e,t,i){let r=new WeakMap,a=new ft;function n(s,o,l){let h=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,c=r.get(o);if(c===void 0||c.count!==p){let f=function(){g.dispose(),r.delete(o),o.removeEventListener("dispose",f)};c!==void 0&&c.texture.dispose();let _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],v=0;_===!0&&(v=1),y===!0&&(v=2),m===!0&&(v=3);let T=o.attributes.position.count*v,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let R=new Float32Array(T*A*4*p),g=new kh(R,T,A,p);g.type=di,g.needsUpdate=!0;let M=v*4;for(let I=0;I<p;I++){let P=d[I],B=b[I],Z=w[I],O=T*A*4*I;for(let U=0;U<P.count;U++){let Q=U*M;_===!0&&(a.fromBufferAttribute(P,U),R[O+Q+0]=a.x,R[O+Q+1]=a.y,R[O+Q+2]=a.z,R[O+Q+3]=0),y===!0&&(a.fromBufferAttribute(B,U),R[O+Q+4]=a.x,R[O+Q+5]=a.y,R[O+Q+6]=a.z,R[O+Q+7]=0),m===!0&&(a.fromBufferAttribute(Z,U),R[O+Q+8]=a.x,R[O+Q+9]=a.y,R[O+Q+10]=a.z,R[O+Q+11]=Z.itemSize===4?a.w:1)}}c={count:p,texture:g,size:new ae(T,A)},r.set(o,c),o.addEventListener("dispose",f)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let f=0;for(let y=0;y<h.length;y++)f+=h[y];let _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",c.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",c.size)}return{update:n}}function f0(e,t,i,r,a){let n=new WeakMap;function s(h){let u=a.render.frame,p=h.geometry,c=t.get(h,p);if(n.get(c)!==u&&(t.update(c),n.set(c,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),n.get(h)!==u&&(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,e.ARRAY_BUFFER),n.set(h,u))),h.isSkinnedMesh){let f=h.skeleton;n.get(f)!==u&&(f.update(),n.set(f,u))}return c}function o(){n=new WeakMap}function l(h){let u=h.target;u.removeEventListener("dispose",l),r.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null&&i.remove(u.instanceColor)}return{update:s,dispose:o}}var m0={[Xn]:"LINEAR_TONE_MAPPING",[jn]:"REINHARD_TONE_MAPPING",[qn]:"CINEON_TONE_MAPPING",[Yn]:"ACES_FILMIC_TONE_MAPPING",[Kn]:"AGX_TONE_MAPPING",[Jn]:"NEUTRAL_TONE_MAPPING",[Zn]:"CUSTOM_TONE_MAPPING"};function g0(e,t,i,r,a,n){let s=new It(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new ct;h.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new We([0,2,0,0,2,0],2));let u=new sl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ct(h,u),c=new ka(-1,1,1,-1,0,1),f=null,_=null,y=!1,m,d=null,b=[],w=!1;this.setSize=function(v,T){s.setSize(v,T),o!==null&&o.setSize(v,T),l!==null&&l.setSize(v,T);for(let A=0;A<b.length;A++){let R=b[A];R.setSize&&R.setSize(v,T)}},this.setEffects=function(v){b=v,w=b.length>0&&b[0].isRenderPass===!0;let T=s.width,A=s.height;b.length>0&&o===null&&(o=new It(T,A,{type:Ft,depthBuffer:!1,stencilBuffer:!1}),l=new It(T,A,{type:Ft,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<b.length;R++){let g=b[R];g.setSize&&g.setSize(T,A)}},this.begin=function(v,T){if(y||v.toneMapping===ai&&b.length===0)return!1;if(d=T,T!==null){let A=T.width,R=T.height;(s.width!==A||s.height!==R)&&this.setSize(A,R)}return w===!1&&v.setRenderTarget(s),m=v.toneMapping,v.toneMapping=ai,!0},this.hasRenderPass=function(){return w},this.end=function(v,T){v.toneMapping=m,y=!0;let A=s,R=o;for(let g=0;g<b.length;g++){let M=b[g];M.enabled!==!1&&(M.render(v,R,A,T),M.needsSwap!==!1&&(A=R,R=R===o?l:o))}if(f!==v.outputColorSpace||_!==v.toneMapping){f=v.outputColorSpace,_=v.toneMapping,u.defines={},it.getTransfer(f)===st&&(u.defines.SRGB_TRANSFER="");let g=m0[_];g&&(u.defines[g]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(d),v.render(p,c),d=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var ju=new Wt,ko=new Ua(1,1),qu=new kh,Yu=new gd,Zu=new iu,ph=[],fh=[],mh=new Float32Array(16),gh=new Float32Array(9),vh=new Float32Array(4);function na(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=ph[a];if(n===void 0&&(n=new Float32Array(a),ph[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function Tt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Et(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function ns(e,t){let i=fh[t];i===void 0&&(i=new Int32Array(t),fh[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function v0(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function _0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tt(i,t))return;e.uniform2fv(this.addr,t),Et(i,t)}}function x0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Tt(i,t))return;e.uniform3fv(this.addr,t),Et(i,t)}}function y0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tt(i,t))return;e.uniform4fv(this.addr,t),Et(i,t)}}function M0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Tt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Et(i,t)}else{if(Tt(i,r))return;vh.set(r),e.uniformMatrix2fv(this.addr,!1,vh),Et(i,r)}}function S0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Tt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Et(i,t)}else{if(Tt(i,r))return;gh.set(r),e.uniformMatrix3fv(this.addr,!1,gh),Et(i,r)}}function b0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Tt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Et(i,t)}else{if(Tt(i,r))return;mh.set(r),e.uniformMatrix4fv(this.addr,!1,mh),Et(i,r)}}function T0(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function E0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tt(i,t))return;e.uniform2iv(this.addr,t),Et(i,t)}}function w0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tt(i,t))return;e.uniform3iv(this.addr,t),Et(i,t)}}function A0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tt(i,t))return;e.uniform4iv(this.addr,t),Et(i,t)}}function C0(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function R0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tt(i,t))return;e.uniform2uiv(this.addr,t),Et(i,t)}}function P0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tt(i,t))return;e.uniform3uiv(this.addr,t),Et(i,t)}}function I0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tt(i,t))return;e.uniform4uiv(this.addr,t),Et(i,t)}}function L0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(ko.compareFunction=i.isReversedDepthBuffer()?Qo:$o,n=ko):n=ju,i.setTexture2D(t||n,a)}function D0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Yu,a)}function U0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||Zu,a)}function N0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||qu,a)}function O0(e){switch(e){case 5126:return v0;case 35664:return _0;case 35665:return x0;case 35666:return y0;case 35674:return M0;case 35675:return S0;case 35676:return b0;case 5124:case 35670:return T0;case 35667:case 35671:return E0;case 35668:case 35672:return w0;case 35669:case 35673:return A0;case 5125:return C0;case 36294:return R0;case 36295:return P0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return N0}}function F0(e,t){e.uniform1fv(this.addr,t)}function B0(e,t){let i=na(t,this.size,2);e.uniform2fv(this.addr,i)}function z0(e,t){let i=na(t,this.size,3);e.uniform3fv(this.addr,i)}function G0(e,t){let i=na(t,this.size,4);e.uniform4fv(this.addr,i)}function V0(e,t){let i=na(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function H0(e,t){let i=na(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function k0(e,t){let i=na(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function W0(e,t){e.uniform1iv(this.addr,t)}function X0(e,t){e.uniform2iv(this.addr,t)}function j0(e,t){e.uniform3iv(this.addr,t)}function q0(e,t){e.uniform4iv(this.addr,t)}function Y0(e,t){e.uniform1uiv(this.addr,t)}function Z0(e,t){e.uniform2uiv(this.addr,t)}function K0(e,t){e.uniform3uiv(this.addr,t)}function J0(e,t){e.uniform4uiv(this.addr,t)}function $0(e,t,i){let r=this.cache,a=t.length,n=ns(i,a);Tt(r,n)||(e.uniform1iv(this.addr,n),Et(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=ko:s=ju;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function Q0(e,t,i){let r=this.cache,a=t.length,n=ns(i,a);Tt(r,n)||(e.uniform1iv(this.addr,n),Et(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||Yu,n[s])}function ev(e,t,i){let r=this.cache,a=t.length,n=ns(i,a);Tt(r,n)||(e.uniform1iv(this.addr,n),Et(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||Zu,n[s])}function tv(e,t,i){let r=this.cache,a=t.length,n=ns(i,a);Tt(r,n)||(e.uniform1iv(this.addr,n),Et(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||qu,n[s])}function iv(e){switch(e){case 5126:return F0;case 35664:return B0;case 35665:return z0;case 35666:return G0;case 35674:return V0;case 35675:return H0;case 35676:return k0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return j0;case 35669:case 35673:return q0;case 5125:return Y0;case 36294:return Z0;case 36295:return K0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}var rv=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=O0(t.type)}},av=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iv(t.type)}},nv=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},Ks=/(\w+)(\])?(\[|\.)?/g;function _h(e,t){e.seq.push(t),e.map[t.id]=t}function sv(e,t,i){let r=e.name,a=r.length;for(Ks.lastIndex=0;;){let n=Ks.exec(r),s=Ks.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){_h(i,h===void 0?new rv(o,e,t):new av(o,e,t));break}else{let u=i.map[o];u===void 0&&(u=new nv(o),_h(i,u)),i=u}}}var On=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);sv(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function xh(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var ov=37297,lv=0;function hv(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var yh=new Ye;function uv(e){it._getMatrix(yh,it.workingColorSpace,e);let t=`mat3( ${yh.elements.map(i=>i.toFixed(4))} )`;switch(it.getTransfer(e)){case Vn:return[t,"LinearTransferOETF"];case st:return[t,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Mh(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+hv(e.getShaderSource(t),s)}else return a}function cv(e,t){let i=uv(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var dv={[Xn]:"Linear",[jn]:"Reinhard",[qn]:"Cineon",[Yn]:"ACESFilmic",[Kn]:"AgX",[Jn]:"Neutral",[Zn]:"Custom"};function pv(e,t){let i=dv[t];return i===void 0?(He("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Cn=new C;function fv(){it.getLuminanceCoefficients(Cn);let e=Cn.x.toFixed(4),t=Cn.y.toFixed(4),i=Cn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mv(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function gv(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function vv(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Ea(e){return e!==""}function Sh(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _v=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(e){return e.replace(_v,yv)}var xv=new Map;function yv(e,t){let i=Qe[t];if(i===void 0){let r=xv.get(t);if(r!==void 0)i=Qe[r],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Wo(i)}var Mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Th(e){return e.replace(Mv,Sv)}function Sv(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Eh(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var bv={[Rn]:"SHADOWMAP_TYPE_PCF",[ba]:"SHADOWMAP_TYPE_VSM"};function Tv(e){return bv[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ev={[fr]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE",[$n]:"ENVMAP_TYPE_CUBE_UV"};function wv(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Ev[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var Av={[Qr]:"ENVMAP_MODE_REFRACTION"};function Cv(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Av[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Rv={[Lh]:"ENVMAP_BLENDING_MULTIPLY",[Lc]:"ENVMAP_BLENDING_MIX",[Dc]:"ENVMAP_BLENDING_ADD"};function Pv(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Rv[e.combine]||"ENVMAP_BLENDING_NONE"}function Iv(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Lv(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=Tv(i),h=wv(i),u=Cv(i),p=Pv(i),c=Iv(i),f=mv(i),_=gv(n),y=a.createProgram(),m,d,b=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(Ea).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(Ea).join(`
`),d.length>0&&(d+=`
`)):(m=[Eh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),d=[Eh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",i.envMap?"#define "+p:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ai?"#define TONE_MAPPING":"",i.toneMapping!==ai?Qe.tonemapping_pars_fragment:"",i.toneMapping!==ai?pv("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,cv("linearToOutputTexel",i.outputColorSpace),fv(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ea).join(`
`)),s=Wo(s),s=Sh(s,i),s=bh(s,i),o=Wo(o),o=Sh(o,i),o=bh(o,i),s=Th(s),o=Th(o),i.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",i.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let w=b+m+s,v=b+d+o,T=xh(a,a.VERTEX_SHADER,w),A=xh(a,a.FRAGMENT_SHADER,v);a.attachShader(y,T),a.attachShader(y,A),i.index0AttributeName!==void 0?a.bindAttribLocation(y,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function R(P){if(e.debug.checkShaderErrors){let B=a.getProgramInfoLog(y)||"",Z=a.getShaderInfoLog(T)||"",O=a.getShaderInfoLog(A)||"",U=B.trim(),Q=Z.trim(),W=O.trim(),ce=!0,Y=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(ce=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,y,T,A);else{let J=Mh(a,T,"vertex"),ie=Mh(a,A,"fragment");ke("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+J+`
`+ie)}else U!==""?He("WebGLProgram: Program Info Log:",U):(Q===""||W==="")&&(Y=!1);Y&&(P.diagnostics={runnable:ce,programLog:U,vertexShader:{log:Q,prefix:m},fragmentShader:{log:W,prefix:d}})}a.deleteShader(T),a.deleteShader(A),g=new On(a,y),M=vv(a,y)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let I=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=a.getProgramParameter(y,ov)),I},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=lv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=A,this}var Dv=0,Uv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Nv(e),t.set(e,i)),i}},Nv=class{constructor(e){this.id=Dv++,this.code=e,this.usedTimes=0}};function Ov(e){return e===mr||e===Fn||e===Bn}function Fv(e,t,i,r,a,n){let s=new Xh,o=new Uv,l=new Set,h=[],u=new Map,p=r.logarithmicDepthBuffer,c=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return l.add(g),g===0?"uv":`uv${g}`}function y(g,M,I,P,B,Z){let O=P.fog,U=B.geometry,Q=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,ce=t.get(g.envMap||Q,W),Y=ce&&ce.mapping===$n?ce.image.height:null,J=f[g.type];g.precision!==null&&(c=r.getMaxPrecision(g.precision),c!==g.precision&&He("WebGLProgram.getParameters:",g.precision,"not supported, using",c,"instead."));let ie=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Oe=ie!==void 0?ie.length:0,Ee=0;U.morphAttributes.position!==void 0&&(Ee=1),U.morphAttributes.normal!==void 0&&(Ee=2),U.morphAttributes.color!==void 0&&(Ee=3);let Ke,Ge,K,X;if(J){let mt=bi[J];Ke=mt.vertexShader,Ge=mt.fragmentShader}else{Ke=g.vertexShader,Ge=g.fragmentShader;let mt=o.getVertexShaderStage(g),nt=o.getFragmentShaderStage(g);o.update(g,mt,nt),K=mt.id,X=nt.id}let $=e.getRenderTarget(),me=e.state.buffers.depth.getReversed(),Ae=B.isInstancedMesh===!0,de=B.isBatchedMesh===!0,Fe=!!g.map,ne=!!g.matcap,re=!!ce,ue=!!g.aoMap,ve=!!g.lightMap,_e=!!g.bumpMap&&g.wireframe===!1,Te=!!g.normalMap,De=!!g.displacementMap,ze=!!g.emissiveMap,Be=!!g.metalnessMap,L=!!g.roughnessMap,rt=g.anisotropy>0,qe=g.clearcoat>0,je=g.dispersion>0,E=g.retroreflectivity>0,x=g.iridescence>0,F=g.sheen>0,N=g.transmission>0,k=rt&&!!g.anisotropyMap,q=qe&&!!g.clearcoatMap,se=qe&&!!g.clearcoatNormalMap,D=qe&&!!g.clearcoatRoughnessMap,te=x&&!!g.iridescenceMap,fe=x&&!!g.iridescenceThicknessMap,xe=F&&!!g.sheenColorMap,oe=F&&!!g.sheenRoughnessMap,ge=!!g.specularMap,Ce=!!g.specularColorMap,Ne=!!g.specularIntensityMap,$e=N&&!!g.transmissionMap,G=N&&!!g.thicknessMap,ee=!!g.gradientMap,le=!!g.alphaMap,be=g.alphaTest>0,Re=!!g.alphaHash,he=!!g.extensions,Se=ai;g.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Se=e.toneMapping);let Ue={shaderID:J,shaderType:g.type,shaderName:g.name,vertexShader:Ke,fragmentShader:Ge,defines:g.defines,customVertexShaderID:K,customFragmentShaderID:X,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:c,batching:de,batchingColor:de&&B._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&B.instanceColor!==null,instancingMorph:Ae&&B.morphTexture!==null,outputColorSpace:$===null?e.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Fe,matcap:ne,envMap:re,envMapMode:re&&ce.mapping,envMapCubeUVHeight:Y,aoMap:ue,lightMap:ve,bumpMap:_e,normalMap:Te,displacementMap:De,emissiveMap:ze,normalMapObjectSpace:Te&&g.normalMapType===Oc,normalMapTangentSpace:Te&&g.normalMapType===zo,packedNormalMap:Te&&g.normalMapType===zo&&Ov(g.normalMap.format),metalnessMap:Be,roughnessMap:L,anisotropy:rt,anisotropyMap:k,clearcoat:qe,clearcoatMap:q,clearcoatNormalMap:se,clearcoatRoughnessMap:D,dispersion:je,retroreflection:E,iridescence:x,iridescenceMap:te,iridescenceThicknessMap:fe,sheen:F,sheenColorMap:xe,sheenRoughnessMap:oe,specularMap:ge,specularColorMap:Ce,specularIntensityMap:Ne,transmission:N,transmissionMap:$e,thicknessMap:G,gradientMap:ee,opaque:g.transparent===!1&&g.blending===cr&&g.alphaToCoverage===!1,alphaMap:le,alphaTest:be,alphaHash:Re,combine:g.combine,mapUv:Fe&&_(g.map.channel),aoMapUv:ue&&_(g.aoMap.channel),lightMapUv:ve&&_(g.lightMap.channel),bumpMapUv:_e&&_(g.bumpMap.channel),normalMapUv:Te&&_(g.normalMap.channel),displacementMapUv:De&&_(g.displacementMap.channel),emissiveMapUv:ze&&_(g.emissiveMap.channel),metalnessMapUv:Be&&_(g.metalnessMap.channel),roughnessMapUv:L&&_(g.roughnessMap.channel),anisotropyMapUv:k&&_(g.anisotropyMap.channel),clearcoatMapUv:q&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:D&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:oe&&_(g.sheenRoughnessMap.channel),specularMapUv:ge&&_(g.specularMap.channel),specularColorMapUv:Ce&&_(g.specularColorMap.channel),specularIntensityMapUv:Ne&&_(g.specularIntensityMap.channel),transmissionMapUv:$e&&_(g.transmissionMap.channel),thicknessMapUv:G&&_(g.thicknessMap.channel),alphaMapUv:le&&_(g.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Te||rt),vertexNormals:!!U.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!U.attributes.uv&&(Fe||le),fog:!!O,useFog:g.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||U.attributes.normal===void 0&&Te===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:me,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Ee,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&I.length>0,shadowMapType:e.shadowMap.type,toneMapping:Se,decodeVideoTexture:Fe&&g.map.isVideoTexture===!0&&it.getTransfer(g.map.colorSpace)===st,decodeVideoTextureEmissive:ze&&g.emissiveMap.isVideoTexture===!0&&it.getTransfer(g.emissiveMap.colorSpace)===st,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ui,flipSided:g.side===kt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:he&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&g.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function m(g){let M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(let I in g.defines)M.push(I),M.push(g.defines[I]);return g.isRawShaderMaterial===!1&&(d(M,g),b(M,g),M.push(e.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function d(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function b(g,M){s.disableAll(),M.instancing&&s.enable(0),M.instancingColor&&s.enable(1),M.instancingMorph&&s.enable(2),M.matcap&&s.enable(3),M.envMap&&s.enable(4),M.normalMapObjectSpace&&s.enable(5),M.normalMapTangentSpace&&s.enable(6),M.clearcoat&&s.enable(7),M.iridescence&&s.enable(8),M.alphaTest&&s.enable(9),M.vertexColors&&s.enable(10),M.vertexAlphas&&s.enable(11),M.vertexUv1s&&s.enable(12),M.vertexUv2s&&s.enable(13),M.vertexUv3s&&s.enable(14),M.vertexTangents&&s.enable(15),M.anisotropy&&s.enable(16),M.alphaHash&&s.enable(17),M.batching&&s.enable(18),M.dispersion&&s.enable(19),M.retroreflection&&s.enable(24),M.batchingColor&&s.enable(20),M.gradientMap&&s.enable(21),M.packedNormalMap&&s.enable(22),M.vertexNormals&&s.enable(23),g.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.reversedDepthBuffer&&s.enable(4),M.skinning&&s.enable(5),M.morphTargets&&s.enable(6),M.morphNormals&&s.enable(7),M.morphColors&&s.enable(8),M.premultipliedAlpha&&s.enable(9),M.shadowMapEnabled&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.transmission&&s.enable(15),M.sheen&&s.enable(16),M.opaque&&s.enable(17),M.pointsUvs&&s.enable(18),M.decodeVideoTexture&&s.enable(19),M.decodeVideoTextureEmissive&&s.enable(20),M.alphaToCoverage&&s.enable(21),M.numLightProbeGrids>0&&s.enable(22),M.hasPositionAttribute&&s.enable(23),g.push(s.mask)}function w(g){let M=f[g.type],I;if(M){let P=bi[M];I=vi.clone(P.uniforms)}else I=g.uniforms;return I}function v(g,M){let I=u.get(M);return I!==void 0?++I.usedTimes:(I=new Lv(e,M,g,a),h.push(I),u.set(M,I)),I}function T(g){if(--g.usedTimes===0){let M=h.indexOf(g);h[M]=h[h.length-1],h.pop(),u.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:R}}function Bv(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function zv(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function wh(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Ah(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(c){let f=0;return c.isInstancedMesh&&(f+=2),c.isSkinnedMesh&&(f+=1),f}function o(c,f,_,y,m,d){let b=e[t];return b===void 0?(b={id:c.id,object:c,geometry:f,material:_,materialVariant:s(c),groupOrder:y,renderOrder:c.renderOrder,z:m,group:d},e[t]=b):(b.id=c.id,b.object=c,b.geometry=f,b.material=_,b.materialVariant=s(c),b.groupOrder=y,b.renderOrder=c.renderOrder,b.z=m,b.group=d),t++,b}function l(c,f,_,y,m,d,b){b.reversedDepth===!0&&(m=-m);let w=o(c,f,_,y,m,d);_.transmission>0?r.push(w):_.transparent===!0?a.push(w):i.push(w)}function h(c,f,_,y,m,d){let b=o(c,f,_,y,m,d);_.transmission>0?r.unshift(b):_.transparent===!0?a.unshift(b):i.unshift(b)}function u(c,f){i.length>1&&i.sort(c||zv),r.length>1&&r.sort(f||wh),a.length>1&&a.sort(f||wh)}function p(){for(let c=t,f=e.length;c<f;c++){let _=e[c];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:h,finish:p,sort:u}}function Gv(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new Ah,e.set(r,[s])):a>=n.length?(s=new Ah,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function Vv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new C,color:new Xe};break;case"SpotLight":i={position:new C,direction:new C,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new C,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new C,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":i={color:new Xe,position:new C,halfWidth:new C,halfHeight:new C};break}return e[t.id]=i,i}}}function Hv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var kv=0;function Wv(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Xv(e){let t=new Vv,i=Hv(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new C);let a=new C,n=new Je,s=new Je;function o(h){let u=0,p=0,c=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let f=0,_=0,y=0,m=0,d=0,b=0,w=0,v=0,T=0,A=0,R=0,g=0,M=0,I=0;h.sort(Wv);for(let B=0,Z=h.length;B<Z;B++){let O=h[B],U=O.color,Q=O.intensity,W=O.distance,ce=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===mr?ce=O.shadow.map.texture:ce=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)u+=U.r*Q,p+=U.g*Q,c+=U.b*Q;else if(O.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(O.sh.coefficients[Y],Q);I++}else if(O.isSunLight){let Y=t.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let J=O.shadow,ie=i.get(O);ie.shadowIntensity=J.intensity,ie.shadowBias=J.bias,ie.shadowNormalBias=J.normalBias,ie.shadowRadius=J.radius,ie.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),r.sunShadow[_]=ie,r.sunShadowMap[_]=ce;let Oe=J.getViewportCount();for(let Ee=0;Ee<Oe;Ee++)r.sunShadowMatrix[y+Ee]=J.getMatrix(Ee),r.sunShadowCascade[y+Ee]=J._cascadeData[Ee];y+=Oe,_++}r.sun[f]=Y,f++}else if(O.isDirectionalLight){let Y=t.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let J=O.shadow,ie=i.get(O);ie.shadowIntensity=J.intensity,ie.shadowBias=J.bias,ie.shadowNormalBias=J.normalBias,ie.shadowRadius=J.radius,ie.shadowMapSize=J.mapSize,r.directionalShadow[m]=ie,r.directionalShadowMap[m]=ce,r.directionalShadowMatrix[m]=O.shadow.matrix,T++}r.directional[m]=Y,m++}else if(O.isSpotLight){let Y=t.get(O);Y.position.setFromMatrixPosition(O.matrixWorld),Y.color.copy(U).multiplyScalar(Q),Y.distance=W,Y.coneCos=Math.cos(O.angle),Y.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Y.decay=O.decay,r.spot[b]=Y;let J=O.shadow;if(O.map&&(r.spotLightMap[g]=O.map,g++,J.updateMatrices(O),O.castShadow&&M++),r.spotLightMatrix[b]=J.matrix,O.castShadow){let ie=i.get(O);ie.shadowIntensity=J.intensity,ie.shadowBias=J.bias,ie.shadowNormalBias=J.normalBias,ie.shadowRadius=J.radius,ie.shadowMapSize=J.mapSize,r.spotShadow[b]=ie,r.spotShadowMap[b]=ce,R++}b++}else if(O.isRectAreaLight){let Y=t.get(O);Y.color.copy(U).multiplyScalar(Q),Y.halfWidth.set(O.width*.5,0,0),Y.halfHeight.set(0,O.height*.5,0),r.rectArea[w]=Y,w++}else if(O.isPointLight){let Y=t.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity),Y.distance=O.distance,Y.decay=O.decay,O.castShadow){let J=O.shadow,ie=i.get(O);ie.shadowIntensity=J.intensity,ie.shadowBias=J.bias,ie.shadowNormalBias=J.normalBias,ie.shadowRadius=J.radius,ie.shadowMapSize=J.mapSize,ie.shadowCameraNear=J.camera.near,ie.shadowCameraFar=J.camera.far,r.pointShadow[d]=ie,r.pointShadowMap[d]=ce,r.pointShadowMatrix[d]=O.shadow.matrix,A++}r.point[d]=Y,d++}else if(O.isHemisphereLight){let Y=t.get(O);Y.skyColor.copy(O.color).multiplyScalar(Q),Y.groundColor.copy(O.groundColor).multiplyScalar(Q),r.hemi[v]=Y,v++}}w>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=p,r.ambient[2]=c;let P=r.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==d||P.spotLength!==b||P.rectAreaLength!==w||P.hemiLength!==v||P.numSunShadows!==_||P.numDirectionalShadows!==T||P.numPointShadows!==A||P.numSpotShadows!==R||P.numSpotMaps!==g||P.numLightProbes!==I)&&(r.sun.length=f,r.directional.length=m,r.spot.length=b,r.rectArea.length=w,r.point.length=d,r.hemi.length=v,r.sunShadow.length=_,r.sunShadowMap.length=_,r.sunShadowMatrix.length=y,r.sunShadowCascade.length=y,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.directionalShadowMatrix.length=T,r.pointShadow.length=A,r.pointShadowMap.length=A,r.pointShadowMatrix.length=A,r.spotShadow.length=R,r.spotShadowMap.length=R,r.spotLightMatrix.length=R+g-M,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=M,r.numLightProbes=I,P.sunLength=f,P.directionalLength=m,P.pointLength=d,P.spotLength=b,P.rectAreaLength=w,P.hemiLength=v,P.numSunShadows=_,P.numDirectionalShadows=T,P.numPointShadows=A,P.numSpotShadows=R,P.numSpotMaps=g,P.numLightProbes=I,r.version=kv++)}function l(h,u){let p=0,c=0,f=0,_=0,y=0,m=0,d=u.matrixWorldInverse;for(let b=0,w=h.length;b<w;b++){let v=h[b];if(v.isSunLight){let T=r.sun[p];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(d),p++}else if(v.isDirectionalLight){let T=r.directional[c];T.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(d),c++}else if(v.isSpotLight){let T=r.spot[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(d),_++}else if(v.isRectAreaLight){let T=r.rectArea[y];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(d),s.identity(),n.copy(v.matrixWorld),n.premultiply(d),s.extractRotation(n),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),y++}else if(v.isPointLight){let T=r.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(d),f++}else if(v.isHemisphereLight){let T=r.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:r}}function Ch(e){let t=new Xv(e),i=[],r=[],a=[];function n(c){p.camera=c,i.length=0,r.length=0,a.length=0}function s(c){i.push(c)}function o(c){r.push(c)}function l(c){a.push(c)}function h(){t.setup(i)}function u(c){t.setupView(i,c)}let p={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:p,setupLights:h,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function jv(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Ch(e),t.set(a,[o])):n>=s.length?(o=new Ch(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yv=`uniform sampler2D shadow_pass;
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
}`,Zv=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Kv=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Rh=new Je,Sa=new C,Js=new C;function Jv(e,t,i){let r=new ta,a=new ae,n=new ae,s=new ft,o=new Fp,l=new Bp,h={},u=i.maxTextureSize,p={[pr]:kt,[kt]:pr,[ui]:ui},c=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:qv,fragmentShader:Yv}),f=c.clone();f.defines.HORIZONTAL_PASS=1;let _=new ct;_.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ct(_,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rn;let d=this.type;this.render=function(A,R,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===pc&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rn);let M=e.getRenderTarget(),I=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),B=e.state;B.setBlending(mi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let Z=d!==this.type;Z&&R.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(U=>U.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,U=A.length;O<U;O++){let Q=A[O],W=Q.shadow;if(W===void 0){He("WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);let ce=W.getFrameExtents();a.multiply(ce),n.copy(W.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(n.x=Math.floor(u/ce.x),a.x=n.x*ce.x,W.mapSize.x=n.x),a.y>u&&(n.y=Math.floor(u/ce.y),a.y=n.y*ce.y,W.mapSize.y=n.y));let Y=e.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Y,W.map===null||Z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ba){if(Q.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new It(a.x,a.y,{format:mr,type:Ft,minFilter:At,magFilter:At,generateMipmaps:!1}),W.map.texture.name=Q.name+".shadowMap",W.map.depthTexture=new Ua(a.x,a.y,di),W.map.depthTexture.name=Q.name+".shadowMapDepth",W.map.depthTexture.format=Fi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Pt,W.map.depthTexture.magFilter=Pt}else Q.isPointLight?(W.map=new Xu(a.x),W.map.depthTexture=new Bd(a.x,Ei)):(W.map=new It(a.x,a.y),W.map.depthTexture=new Ua(a.x,a.y,Ei)),W.map.depthTexture.name=Q.name+".shadowMap",W.map.depthTexture.format=Fi,this.type===Rn?(W.map.depthTexture.compareFunction=Y?Qo:$o,W.map.depthTexture.minFilter=At,W.map.depthTexture.magFilter=At):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Pt,W.map.depthTexture.magFilter=Pt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==a.x||W.map.height!==a.y)&&W.map.setSize(a.x,a.y);let J=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Q.isPointLight!==!0&&W.updateMatrices(Q,g);for(let ie=0;ie<J;ie++){let Oe=W.getCamera(ie);if(Q.isPointLight){let Ee=W.camera,Ke=W.matrix,Ge=Q.distance||Ee.far;Ge!==Ee.far&&(Ee.far=Ge,Ee.updateProjectionMatrix()),Sa.setFromMatrixPosition(Q.matrixWorld),Ee.position.copy(Sa),Js.copy(Ee.position),Js.add(Zv[ie]),Ee.up.copy(Kv[ie]),Ee.lookAt(Js),Ee.updateMatrixWorld(),Ke.makeTranslation(-Sa.x,-Sa.y,-Sa.z),Rh.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Rh,Ee.coordinateSystem,Ee.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)e.setRenderTarget(W.map,ie),e.clear();else{ie===0&&(e.setRenderTarget(W.map),e.clear());let Ee=W.getViewport(ie);s.set(n.x*Ee.x,n.y*Ee.y,n.x*Ee.z,n.y*Ee.w),B.viewport(s)}r=W.getFrustum(ie),v(R,g,Oe,Q,this.type)}W.isPointLightShadow!==!0&&this.type===ba&&b(W,g),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,e.setRenderTarget(M,I,P)};function b(A,R){let g=t.update(y);c.defines.VSM_SAMPLES!==A.blurSamples&&(c.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,c.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new It(a.x,a.y,{format:mr,type:Ft}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),c.uniforms.shadow_pass.value=A.map.depthTexture,c.uniforms.resolution.value.set(A.map.width,A.map.height),c.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(R,null,g,c,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(R,null,g,f,y,null)}function w(A,R,g,M){let I=null,P=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)I=P;else if(I=g.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let B=I.uuid,Z=R.uuid,O=h[B];O===void 0&&(O={},h[B]=O);let U=O[Z];U===void 0&&(U=I.clone(),O[Z]=U,R.addEventListener("dispose",T)),I=U}if(I.visible=R.visible,I.wireframe=R.wireframe,M===ba?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:p[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,g.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let B=e.properties.get(I);B.light=g}return I}function v(A,R,g,M,I){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===ba)&&(!A.frustumCulled||A.intersectsFrustum(r))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);let B=t.update(A),Z=A.material;if(Array.isArray(Z)){let O=B.groups;for(let U=0,Q=O.length;U<Q;U++){let W=O[U],ce=Z[W.materialIndex];if(ce&&ce.visible){let Y=w(A,ce,M,I);A.onBeforeShadow(e,A,R,g,B,Y,W),e.renderBufferDirect(g,null,B,Y,A,W),A.onAfterShadow(e,A,R,g,B,Y,W)}}}else if(Z.visible){let O=w(A,Z,M,I);A.onBeforeShadow(e,A,R,g,B,O,null),e.renderBufferDirect(g,null,B,O,A,null),A.onAfterShadow(e,A,R,g,B,O,null)}}let P=A.children;for(let B=0,Z=P.length;B<Z;B++)v(P[B],R,g,M,I)}function T(A){A.target.removeEventListener("dispose",T);for(let R in h){let g=h[R],M=A.target.uuid;M in g&&(g[M].dispose(),delete g[M])}}}function $v(e,t){function i(){let G=!1,ee=new ft,le=null,be=new ft(0,0,0,0);return{setMask:function(Re){le!==Re&&!G&&(e.colorMask(Re,Re,Re,Re),le=Re)},setLocked:function(Re){G=Re},setClear:function(Re,he,Se,Ue,mt){mt===!0&&(Re*=Ue,he*=Ue,Se*=Ue),ee.set(Re,he,Se,Ue),be.equals(ee)===!1&&(e.clearColor(Re,he,Se,Ue),be.copy(ee))},reset:function(){G=!1,le=null,be.set(-1,0,0,0)}}}function r(){let G=!1,ee=!1,le=null,be=null,Re=null;return{setReversed:function(he){if(ee!==he){let Se=t.get("EXT_clip_control");he?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ee=he;let Ue=Re;Re=null,this.setClear(Ue)}},getReversed:function(){return ee},setTest:function(he){he?$(e.DEPTH_TEST):me(e.DEPTH_TEST)},setMask:function(he){le!==he&&!G&&(e.depthMask(he),le=he)},setFunc:function(he){if(ee&&(he=Yc[he]),be!==he){switch(he){case $s:e.depthFunc(e.NEVER);break;case Qs:e.depthFunc(e.ALWAYS);break;case eo:e.depthFunc(e.LESS);break;case Ra:e.depthFunc(e.LEQUAL);break;case to:e.depthFunc(e.EQUAL);break;case io:e.depthFunc(e.GEQUAL);break;case ro:e.depthFunc(e.GREATER);break;case ao:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}be=he}},setLocked:function(he){G=he},setClear:function(he){Re!==he&&(Re=he,ee&&(he=1-he),e.clearDepth(he))},reset:function(){G=!1,le=null,be=null,Re=null,ee=!1}}}function a(){let G=!1,ee=null,le=null,be=null,Re=null,he=null,Se=null,Ue=null,mt=null;return{setTest:function(nt){G||(nt?$(e.STENCIL_TEST):me(e.STENCIL_TEST))},setMask:function(nt){ee!==nt&&!G&&(e.stencilMask(nt),ee=nt)},setFunc:function(nt,$t,ni){(le!==nt||be!==$t||Re!==ni)&&(e.stencilFunc(nt,$t,ni),le=nt,be=$t,Re=ni)},setOp:function(nt,$t,ni){(he!==nt||Se!==$t||Ue!==ni)&&(e.stencilOp(nt,$t,ni),he=nt,Se=$t,Ue=ni)},setLocked:function(nt){G=nt},setClear:function(nt){mt!==nt&&(e.clearStencil(nt),mt=nt)},reset:function(){G=!1,ee=null,le=null,be=null,Re=null,he=null,Se=null,Ue=null,mt=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,h=new WeakMap,u={},p={},c={},f=new WeakMap,_=[],y=null,m=!1,d=null,b=null,w=null,v=null,T=null,A=null,R=null,g=new Xe(0,0,0),M=0,I=!1,P=null,B=null,Z=null,O=null,U=null,Q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ce=0,Y=e.getParameter(e.VERSION);Y.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=ce>=1):Y.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=ce>=2);let J=null,ie={},Oe=e.getParameter(e.SCISSOR_BOX),Ee=e.getParameter(e.VIEWPORT),Ke=new ft().fromArray(Oe),Ge=new ft().fromArray(Ee);function K(G,ee,le,be){let Re=new Uint8Array(4),he=e.createTexture();e.bindTexture(G,he),e.texParameteri(G,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(G,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Se=0;Se<le;Se++)G===e.TEXTURE_3D||G===e.TEXTURE_2D_ARRAY?e.texImage3D(ee,0,e.RGBA,1,1,be,0,e.RGBA,e.UNSIGNED_BYTE,Re):e.texImage2D(ee+Se,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Re);return he}let X={};X[e.TEXTURE_2D]=K(e.TEXTURE_2D,e.TEXTURE_2D,1),X[e.TEXTURE_CUBE_MAP]=K(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[e.TEXTURE_2D_ARRAY]=K(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),X[e.TEXTURE_3D]=K(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),$(e.DEPTH_TEST),s.setFunc(Ra),_e(!1),Te(fl),$(e.CULL_FACE),ue(mi);function $(G){u[G]!==!0&&(e.enable(G),u[G]=!0)}function me(G){u[G]!==!1&&(e.disable(G),u[G]=!1)}function Ae(G,ee){return c[G]!==ee?(e.bindFramebuffer(G,ee),c[G]=ee,G===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=ee),G===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=ee),!0):!1}function de(G,ee){let le=_,be=!1;if(G){le=f.get(ee),le===void 0&&(le=[],f.set(ee,le));let Re=G.textures;if(le.length!==Re.length||le[0]!==e.COLOR_ATTACHMENT0){for(let he=0,Se=Re.length;he<Se;he++)le[he]=e.COLOR_ATTACHMENT0+he;le.length=Re.length,be=!0}}else le[0]!==e.BACK&&(le[0]=e.BACK,be=!0);be&&e.drawBuffers(le)}function Fe(G){return y!==G?(e.useProgram(G),y=G,!0):!1}let ne={[Vr]:e.FUNC_ADD,[mc]:e.FUNC_SUBTRACT,[gc]:e.FUNC_REVERSE_SUBTRACT};ne[vc]=e.MIN,ne[_c]=e.MAX;let re={[xc]:e.ZERO,[yc]:e.ONE,[Mc]:e.SRC_COLOR,[Ph]:e.SRC_ALPHA,[Ac]:e.SRC_ALPHA_SATURATE,[Ec]:e.DST_COLOR,[bc]:e.DST_ALPHA,[Sc]:e.ONE_MINUS_SRC_COLOR,[Ih]:e.ONE_MINUS_SRC_ALPHA,[wc]:e.ONE_MINUS_DST_COLOR,[Tc]:e.ONE_MINUS_DST_ALPHA,[Cc]:e.CONSTANT_COLOR,[Rc]:e.ONE_MINUS_CONSTANT_COLOR,[Pc]:e.CONSTANT_ALPHA,[Ic]:e.ONE_MINUS_CONSTANT_ALPHA};function ue(G,ee,le,be,Re,he,Se,Ue,mt,nt){if(G===mi){m===!0&&(me(e.BLEND),m=!1);return}if(m===!1&&($(e.BLEND),m=!0),G!==fc){if(G!==d||nt!==I){if((b!==Vr||T!==Vr)&&(e.blendEquation(e.FUNC_ADD),b=Vr,T=Vr),nt)switch(G){case cr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case gi:e.blendFunc(e.ONE,e.ONE);break;case ml:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case gl:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ke("WebGLState: Invalid blending: ",G);break}else switch(G){case cr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case gi:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case ml:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gl:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",G);break}w=null,v=null,A=null,R=null,g.set(0,0,0),M=0,d=G,I=nt}return}Re=Re||ee,he=he||le,Se=Se||be,(ee!==b||Re!==T)&&(e.blendEquationSeparate(ne[ee],ne[Re]),b=ee,T=Re),(le!==w||be!==v||he!==A||Se!==R)&&(e.blendFuncSeparate(re[le],re[be],re[he],re[Se]),w=le,v=be,A=he,R=Se),(Ue.equals(g)===!1||mt!==M)&&(e.blendColor(Ue.r,Ue.g,Ue.b,mt),g.copy(Ue),M=mt),d=G,I=!1}function ve(G,ee){G.side===ui?me(e.CULL_FACE):$(e.CULL_FACE);let le=G.side===kt;ee&&(le=!le),_e(le),G.blending===cr&&G.transparent===!1?ue(mi):ue(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),s.setFunc(G.depthFunc),s.setTest(G.depthTest),s.setMask(G.depthWrite),n.setMask(G.colorWrite);let be=G.stencilWrite;o.setTest(be),be&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ze(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?$(e.SAMPLE_ALPHA_TO_COVERAGE):me(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(G){P!==G&&(G?e.frontFace(e.CW):e.frontFace(e.CCW),P=G)}function Te(G){G!==cc?($(e.CULL_FACE),G!==B&&(G===fl?e.cullFace(e.BACK):G===dc?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):me(e.CULL_FACE),B=G}function De(G){G!==Z&&(W&&e.lineWidth(G),Z=G)}function ze(G,ee,le){G?($(e.POLYGON_OFFSET_FILL),(O!==ee||U!==le)&&(O=ee,U=le,s.getReversed()&&(ee=-ee),e.polygonOffset(ee,le))):me(e.POLYGON_OFFSET_FILL)}function Be(G){G?$(e.SCISSOR_TEST):me(e.SCISSOR_TEST)}function L(G){G===void 0&&(G=e.TEXTURE0+Q-1),J!==G&&(e.activeTexture(G),J=G)}function rt(G,ee,le){le===void 0&&(J===null?le=e.TEXTURE0+Q-1:le=J);let be=ie[le];be===void 0&&(be={type:void 0,texture:void 0},ie[le]=be),(be.type!==G||be.texture!==ee)&&(J!==le&&(e.activeTexture(le),J=le),e.bindTexture(G,ee||X[G]),be.type=G,be.texture=ee)}function qe(){let G=ie[J];G!==void 0&&G.type!==void 0&&(e.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function je(){try{e.compressedTexImage2D(...arguments)}catch(G){ke("WebGLState:",G)}}function E(){try{e.compressedTexImage3D(...arguments)}catch(G){ke("WebGLState:",G)}}function x(){try{e.texSubImage2D(...arguments)}catch(G){ke("WebGLState:",G)}}function F(){try{e.texSubImage3D(...arguments)}catch(G){ke("WebGLState:",G)}}function N(){try{e.compressedTexSubImage2D(...arguments)}catch(G){ke("WebGLState:",G)}}function k(){try{e.compressedTexSubImage3D(...arguments)}catch(G){ke("WebGLState:",G)}}function q(){try{e.texStorage2D(...arguments)}catch(G){ke("WebGLState:",G)}}function se(){try{e.texStorage3D(...arguments)}catch(G){ke("WebGLState:",G)}}function D(){try{e.texImage2D(...arguments)}catch(G){ke("WebGLState:",G)}}function te(){try{e.texImage3D(...arguments)}catch(G){ke("WebGLState:",G)}}function fe(G){return p[G]!==void 0?p[G]:e.getParameter(G)}function xe(G,ee){p[G]!==ee&&(e.pixelStorei(G,ee),p[G]=ee)}function oe(G){Ke.equals(G)===!1&&(e.scissor(G.x,G.y,G.z,G.w),Ke.copy(G))}function ge(G){Ge.equals(G)===!1&&(e.viewport(G.x,G.y,G.z,G.w),Ge.copy(G))}function Ce(G,ee){let le=h.get(ee);le===void 0&&(le=new WeakMap,h.set(ee,le));let be=le.get(G);be===void 0&&(be=e.getUniformBlockIndex(ee,G.name),le.set(G,be))}function Ne(G,ee){let le=h.get(ee).get(G);l.get(ee)!==le&&(e.uniformBlockBinding(ee,le,G.__bindingPointIndex),l.set(ee,le))}function $e(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},p={},J=null,ie={},c={},f=new WeakMap,_=[],y=null,m=!1,d=null,b=null,w=null,v=null,T=null,A=null,R=null,g=new Xe(0,0,0),M=0,I=!1,P=null,B=null,Z=null,O=null,U=null,Ke.set(0,0,e.canvas.width,e.canvas.height),Ge.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:$,disable:me,bindFramebuffer:Ae,drawBuffers:de,useProgram:Fe,setBlending:ue,setMaterial:ve,setFlipSided:_e,setCullFace:Te,setLineWidth:De,setPolygonOffset:ze,setScissorTest:Be,activeTexture:L,bindTexture:rt,unbindTexture:qe,compressedTexImage2D:je,compressedTexImage3D:E,texImage2D:D,texImage3D:te,pixelStorei:xe,getParameter:fe,updateUBOMapping:Ce,uniformBlockBinding:Ne,texStorage2D:q,texStorage3D:se,texSubImage2D:x,texSubImage3D:F,compressedTexSubImage2D:N,compressedTexSubImage3D:k,scissor:oe,viewport:ge,reset:$e}}function Qv(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ae,u=new WeakMap,p=new Set,c,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,x){return _?new OffscreenCanvas(E,x):Hn("canvas")}function m(E,x,F){let N=1,k=je(E);if((k.width>F||k.height>F)&&(N=F/Math.max(k.width,k.height)),N<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let q=Math.floor(N*k.width),se=Math.floor(N*k.height);c===void 0&&(c=y(q,se));let D=x?y(q,se):c;return D.width=q,D.height=se,D.getContext("2d").drawImage(E,0,0,q,se),He("WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+q+"x"+se+")."),D}else return"data"in E&&He("WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),E;return E}function d(E){return E.generateMipmaps}function b(E){e.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(E,x,F,N,k,q=!1){if(E!==null){if(e[E]!==void 0)return e[E];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let se;N&&(se=t.get("EXT_texture_norm16"),se||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let D=x;if(x===e.RED&&(F===e.FLOAT&&(D=e.R32F),F===e.HALF_FLOAT&&(D=e.R16F),F===e.UNSIGNED_BYTE&&(D=e.R8),F===e.UNSIGNED_SHORT&&se&&(D=se.R16_EXT),F===e.SHORT&&se&&(D=se.R16_SNORM_EXT)),x===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(D=e.R8UI),F===e.UNSIGNED_SHORT&&(D=e.R16UI),F===e.UNSIGNED_INT&&(D=e.R32UI),F===e.BYTE&&(D=e.R8I),F===e.SHORT&&(D=e.R16I),F===e.INT&&(D=e.R32I)),x===e.RG&&(F===e.FLOAT&&(D=e.RG32F),F===e.HALF_FLOAT&&(D=e.RG16F),F===e.UNSIGNED_BYTE&&(D=e.RG8),F===e.UNSIGNED_SHORT&&se&&(D=se.RG16_EXT),F===e.SHORT&&se&&(D=se.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(D=e.RG8UI),F===e.UNSIGNED_SHORT&&(D=e.RG16UI),F===e.UNSIGNED_INT&&(D=e.RG32UI),F===e.BYTE&&(D=e.RG8I),F===e.SHORT&&(D=e.RG16I),F===e.INT&&(D=e.RG32I)),x===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(D=e.RGB8UI),F===e.UNSIGNED_SHORT&&(D=e.RGB16UI),F===e.UNSIGNED_INT&&(D=e.RGB32UI),F===e.BYTE&&(D=e.RGB8I),F===e.SHORT&&(D=e.RGB16I),F===e.INT&&(D=e.RGB32I)),x===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(D=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(D=e.RGBA16UI),F===e.UNSIGNED_INT&&(D=e.RGBA32UI),F===e.BYTE&&(D=e.RGBA8I),F===e.SHORT&&(D=e.RGBA16I),F===e.INT&&(D=e.RGBA32I)),x===e.RGB&&(F===e.UNSIGNED_SHORT&&se&&(D=se.RGB16_EXT),F===e.SHORT&&se&&(D=se.RGB16_SNORM_EXT),F===e.UNSIGNED_INT_5_9_9_9_REV&&(D=e.RGB9_E5),F===e.UNSIGNED_INT_10F_11F_11F_REV&&(D=e.R11F_G11F_B10F)),x===e.RGBA){let te=q?Vn:it.getTransfer(k);F===e.FLOAT&&(D=e.RGBA32F),F===e.HALF_FLOAT&&(D=e.RGBA16F),F===e.UNSIGNED_BYTE&&(D=te===st?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT&&se&&(D=se.RGBA16_EXT),F===e.SHORT&&se&&(D=se.RGBA16_SNORM_EXT),F===e.UNSIGNED_SHORT_4_4_4_4&&(D=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(D=e.RGB5_A1)}return(D===e.R16F||D===e.R32F||D===e.RG16F||D===e.RG32F||D===e.RGBA16F||D===e.RGBA32F)&&t.get("EXT_color_buffer_float"),D}function T(E,x){let F;return E?x===null||x===Ei||x===Ia?F=e.DEPTH24_STENCIL8:x===di?F=e.DEPTH32F_STENCIL8:x===Pa&&(F=e.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ei||x===Ia?F=e.DEPTH_COMPONENT24:x===di?F=e.DEPTH_COMPONENT32F:x===Pa&&(F=e.DEPTH_COMPONENT16),F}function A(E,x){return d(E)===!0||E.isFramebufferTexture&&E.minFilter!==Pt&&E.minFilter!==At?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function R(E){let x=E.target;x.removeEventListener("dispose",R),M(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&p.delete(x)}function g(E){let x=E.target;x.removeEventListener("dispose",g),P(x)}function M(E){let x=r.get(E);if(x.__webglInit===void 0)return;let F=E.source,N=f.get(F);if(N){let k=N[x.__cacheKey];k.usedTimes--,k.usedTimes===0&&I(E),Object.keys(N).length===0&&f.delete(F)}r.remove(E)}function I(E){let x=r.get(E);e.deleteTexture(x.__webglTexture);let F=E.source,N=f.get(F);delete N[x.__cacheKey],s.memory.textures--}function P(E){let x=r.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),r.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(x.__webglFramebuffer[N]))for(let k=0;k<x.__webglFramebuffer[N].length;k++)e.deleteFramebuffer(x.__webglFramebuffer[N][k]);else e.deleteFramebuffer(x.__webglFramebuffer[N]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[N])}else{if(Array.isArray(x.__webglFramebuffer))for(let N=0;N<x.__webglFramebuffer.length;N++)e.deleteFramebuffer(x.__webglFramebuffer[N]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let N=0;N<x.__webglColorRenderbuffer.length;N++)x.__webglColorRenderbuffer[N]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[N]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let F=E.textures;for(let N=0,k=F.length;N<k;N++){let q=r.get(F[N]);q.__webglTexture&&(e.deleteTexture(q.__webglTexture),s.memory.textures--),r.remove(F[N])}r.remove(E)}let B=0;function Z(){B=0}function O(){return B}function U(E){B=E}function Q(){let E=B;return E>=a.maxTextures&&He("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+a.maxTextures),B+=1,E}function W(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function ce(E,x){let F=r.get(E);if(E.isVideoTexture&&rt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){let N=E.image;if(N===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{me(F,E,x);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+x)}function Y(E,x){let F=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){me(F,E,x);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+x)}function J(E,x){let F=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){me(F,E,x);return}i.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+x)}function ie(E,x){let F=r.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&F.__version!==E.version){Ae(F,E,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+x)}let Oe={[no]:e.REPEAT,[Ui]:e.CLAMP_TO_EDGE,[so]:e.MIRRORED_REPEAT},Ee={[Pt]:e.NEAREST,[Uc]:e.NEAREST_MIPMAP_NEAREST,[Za]:e.NEAREST_MIPMAP_LINEAR,[At]:e.LINEAR,[gs]:e.LINEAR_MIPMAP_NEAREST,[Ni]:e.LINEAR_MIPMAP_LINEAR},Ke={[Bc]:e.NEVER,[kc]:e.ALWAYS,[zc]:e.LESS,[$o]:e.LEQUAL,[Gc]:e.EQUAL,[Qo]:e.GEQUAL,[Vc]:e.GREATER,[Hc]:e.NOTEQUAL};function Ge(E,x){if(x.type===di&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===At||x.magFilter===gs||x.magFilter===Za||x.magFilter===Ni||x.minFilter===At||x.minFilter===gs||x.minFilter===Za||x.minFilter===Ni)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,Oe[x.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,Oe[x.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,Oe[x.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,Ee[x.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,Ee[x.minFilter]),x.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,Ke[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Pt||x.minFilter!==Za&&x.minFilter!==Ni||x.type===di&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function K(E,x){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",R));let N=x.source,k=f.get(N);k===void 0&&(k={},f.set(N,k));let q=W(x);if(q!==E.__cacheKey){k[q]===void 0&&(k[q]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,F=!0),k[q].usedTimes++;let se=k[E.__cacheKey];se!==void 0&&(k[E.__cacheKey].usedTimes--,se.usedTimes===0&&I(x)),E.__cacheKey=q,E.__webglTexture=k[q].texture}return F}function X(E,x,F){return Math.floor(Math.floor(E/F)/x)}function $(E,x,F,N){let k=E.updateRanges;if(k.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,F,N,x.data);else{k.sort((fe,xe)=>fe.start-xe.start);let q=0;for(let fe=1;fe<k.length;fe++){let xe=k[q],oe=k[fe],ge=xe.start+xe.count,Ce=X(oe.start,x.width,4),Ne=X(xe.start,x.width,4);oe.start<=ge+1&&Ce===Ne&&X(oe.start+oe.count-1,x.width,4)===Ce?xe.count=Math.max(xe.count,oe.start+oe.count-xe.start):(++q,k[q]=oe)}k.length=q+1;let se=i.getParameter(e.UNPACK_ROW_LENGTH),D=i.getParameter(e.UNPACK_SKIP_PIXELS),te=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let fe=0,xe=k.length;fe<xe;fe++){let oe=k[fe],ge=Math.floor(oe.start/4),Ce=Math.ceil(oe.count/4),Ne=ge%x.width,$e=Math.floor(ge/x.width),G=Ce;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(e.UNPACK_SKIP_ROWS,$e),i.texSubImage2D(e.TEXTURE_2D,0,Ne,$e,G,1,F,N,x.data)}E.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,se),i.pixelStorei(e.UNPACK_SKIP_PIXELS,D),i.pixelStorei(e.UNPACK_SKIP_ROWS,te)}}function me(E,x,F){let N=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(N=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(N=e.TEXTURE_3D);let k=K(E,x),q=x.source;i.bindTexture(N,E.__webglTexture,e.TEXTURE0+F);let se=r.get(q);if(q.version!==se.__version||k===!0){if(i.activeTexture(e.TEXTURE0+F),!(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)){let ee=it.getPrimaries(it.workingColorSpace),le=x.colorSpace===$i?null:it.getPrimaries(x.colorSpace),be=x.colorSpace===$i||ee===le?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let D=m(x.image,!1,a.maxTextureSize);D=qe(x,D);let te=n.convert(x.format,x.colorSpace),fe=n.convert(x.type),xe=v(x.internalFormat,te,fe,x.normalized,x.colorSpace,x.isVideoTexture);Ge(N,x);let oe,ge=x.mipmaps,Ce=x.isVideoTexture!==!0,Ne=se.__version===void 0||k===!0,$e=q.dataReady,G=A(x,D);if(x.isDepthTexture)xe=T(x.format===lr,x.type),Ne&&(Ce?i.texStorage2D(e.TEXTURE_2D,1,xe,D.width,D.height):i.texImage2D(e.TEXTURE_2D,0,xe,D.width,D.height,0,te,fe,null));else if(x.isDataTexture)if(ge.length>0){Ce&&Ne&&i.texStorage2D(e.TEXTURE_2D,G,xe,ge[0].width,ge[0].height);for(let ee=0,le=ge.length;ee<le;ee++)oe=ge[ee],Ce?$e&&i.texSubImage2D(e.TEXTURE_2D,ee,0,0,oe.width,oe.height,te,fe,oe.data):i.texImage2D(e.TEXTURE_2D,ee,xe,oe.width,oe.height,0,te,fe,oe.data);x.generateMipmaps=!1}else Ce?(Ne&&i.texStorage2D(e.TEXTURE_2D,G,xe,D.width,D.height),$e&&$(x,D,te,fe)):i.texImage2D(e.TEXTURE_2D,0,xe,D.width,D.height,0,te,fe,D.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ce&&Ne&&i.texStorage3D(e.TEXTURE_2D_ARRAY,G,xe,ge[0].width,ge[0].height,D.depth);for(let ee=0,le=ge.length;ee<le;ee++)if(oe=ge[ee],x.format!==pi)if(te!==null)if(Ce){if($e)if(x.layerUpdates.size>0){let be=oh(oe.width,oe.height,x.format,x.type);for(let Re of x.layerUpdates){let he=oe.data.subarray(Re*be/oe.data.BYTES_PER_ELEMENT,(Re+1)*be/oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,Re,oe.width,oe.height,1,te,he)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,0,oe.width,oe.height,D.depth,te,oe.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ee,xe,oe.width,oe.height,D.depth,0,oe.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?$e&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,0,oe.width,oe.height,D.depth,te,fe,oe.data):i.texImage3D(e.TEXTURE_2D_ARRAY,ee,xe,oe.width,oe.height,D.depth,0,te,fe,oe.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ce&&Ne&&i.texStorage2D(e.TEXTURE_2D,G,xe,ge[0].width,ge[0].height);for(let ee=0,le=ge.length;ee<le;ee++)oe=ge[ee],x.format!==pi?te!==null?Ce?$e&&i.compressedTexSubImage2D(e.TEXTURE_2D,ee,0,0,oe.width,oe.height,te,oe.data):i.compressedTexImage2D(e.TEXTURE_2D,ee,xe,oe.width,oe.height,0,oe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?$e&&i.texSubImage2D(e.TEXTURE_2D,ee,0,0,oe.width,oe.height,te,fe,oe.data):i.texImage2D(e.TEXTURE_2D,ee,xe,oe.width,oe.height,0,te,fe,oe.data)}else if(x.isDataArrayTexture)if(Ce){if(Ne&&i.texStorage3D(e.TEXTURE_2D_ARRAY,G,xe,D.width,D.height,D.depth),$e)if(x.layerUpdates.size>0){let ee=oh(D.width,D.height,x.format,x.type);for(let le of x.layerUpdates){let be=D.data.subarray(le*ee/D.data.BYTES_PER_ELEMENT,(le+1)*ee/D.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,le,D.width,D.height,1,te,fe,be)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,te,fe,D.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,xe,D.width,D.height,D.depth,0,te,fe,D.data);else if(x.isData3DTexture)Ce?(Ne&&i.texStorage3D(e.TEXTURE_3D,G,xe,D.width,D.height,D.depth),$e&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,te,fe,D.data)):i.texImage3D(e.TEXTURE_3D,0,xe,D.width,D.height,D.depth,0,te,fe,D.data);else if(x.isFramebufferTexture){if(Ne)if(Ce)i.texStorage2D(e.TEXTURE_2D,G,xe,D.width,D.height);else{let ee=D.width,le=D.height;for(let be=0;be<G;be++)i.texImage2D(e.TEXTURE_2D,be,xe,ee,le,0,te,fe,null),ee>>=1,le>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){let ee=e.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),D.parentNode!==ee){ee.appendChild(D),p.add(x),ee.onpaint=le=>{let be=le.changedElements;for(let Re of p)be.includes(Re.image)&&(Re.needsUpdate=!0)},ee.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,D);else{let le=e.RGBA,be=e.RGBA,Re=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,le,be,Re,D)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(ge.length>0){if(Ce&&Ne){let ee=je(ge[0]);i.texStorage2D(e.TEXTURE_2D,G,xe,ee.width,ee.height)}for(let ee=0,le=ge.length;ee<le;ee++)oe=ge[ee],Ce?$e&&i.texSubImage2D(e.TEXTURE_2D,ee,0,0,te,fe,oe):i.texImage2D(e.TEXTURE_2D,ee,xe,te,fe,oe);x.generateMipmaps=!1}else if(Ce){if(Ne){let ee=je(D);i.texStorage2D(e.TEXTURE_2D,G,xe,ee.width,ee.height)}$e&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,te,fe,D)}else i.texImage2D(e.TEXTURE_2D,0,xe,te,fe,D);d(x)&&b(N),se.__version=q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Ae(E,x,F){if(x.image.length!==6)return;let N=K(E,x),k=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+F);let q=r.get(k);if(k.version!==q.__version||N===!0){i.activeTexture(e.TEXTURE0+F);let se=it.getPrimaries(it.workingColorSpace),D=x.colorSpace===$i?null:it.getPrimaries(x.colorSpace),te=x.colorSpace===$i||se===D?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let fe=x.isCompressedTexture||x.image[0].isCompressedTexture,xe=x.image[0]&&x.image[0].isDataTexture,oe=[];for(let he=0;he<6;he++)!fe&&!xe?oe[he]=m(x.image[he],!0,a.maxCubemapSize):oe[he]=xe?x.image[he].image:x.image[he],oe[he]=qe(x,oe[he]);let ge=oe[0],Ce=n.convert(x.format,x.colorSpace),Ne=n.convert(x.type),$e=v(x.internalFormat,Ce,Ne,x.normalized,x.colorSpace),G=x.isVideoTexture!==!0,ee=q.__version===void 0||N===!0,le=k.dataReady,be=A(x,ge);Ge(e.TEXTURE_CUBE_MAP,x);let Re;if(fe){G&&ee&&i.texStorage2D(e.TEXTURE_CUBE_MAP,be,$e,ge.width,ge.height);for(let he=0;he<6;he++){Re=oe[he].mipmaps;for(let Se=0;Se<Re.length;Se++){let Ue=Re[Se];x.format!==pi?Ce!==null?G?le&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se,0,0,Ue.width,Ue.height,Ce,Ue.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se,$e,Ue.width,Ue.height,0,Ue.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?le&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se,0,0,Ue.width,Ue.height,Ce,Ne,Ue.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se,$e,Ue.width,Ue.height,0,Ce,Ne,Ue.data)}}}else{if(Re=x.mipmaps,G&&ee){Re.length>0&&be++;let he=je(oe[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,be,$e,he.width,he.height)}for(let he=0;he<6;he++)if(xe){G?le&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,oe[he].width,oe[he].height,Ce,Ne,oe[he].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,$e,oe[he].width,oe[he].height,0,Ce,Ne,oe[he].data);for(let Se=0;Se<Re.length;Se++){let Ue=Re[Se].image[he].image;G?le&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se+1,0,0,Ue.width,Ue.height,Ce,Ne,Ue.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se+1,$e,Ue.width,Ue.height,0,Ce,Ne,Ue.data)}}else{G?le&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ce,Ne,oe[he]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,$e,Ce,Ne,oe[he]);for(let Se=0;Se<Re.length;Se++){let Ue=Re[Se];G?le&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se+1,0,0,Ce,Ne,Ue.image[he]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se+1,$e,Ce,Ne,Ue.image[he])}}}d(x)&&b(e.TEXTURE_CUBE_MAP),q.__version=k.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function de(E,x,F,N,k,q){let se=n.convert(F.format,F.colorSpace),D=n.convert(F.type),te=v(F.internalFormat,se,D,F.normalized,F.colorSpace),fe=r.get(x),xe=r.get(F);if(xe.__renderTarget=x,!fe.__hasExternalTextures){let oe=Math.max(1,x.width>>q),ge=Math.max(1,x.height>>q);k===e.TEXTURE_3D||k===e.TEXTURE_2D_ARRAY?i.texImage3D(k,q,te,oe,ge,x.depth,0,se,D,null):i.texImage2D(k,q,te,oe,ge,0,se,D,null)}i.bindFramebuffer(e.FRAMEBUFFER,E),L(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,N,k,xe.__webglTexture,0,Be(x)):(k===e.TEXTURE_2D||k>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,N,k,xe.__webglTexture,q),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Fe(E,x,F){if(e.bindRenderbuffer(e.RENDERBUFFER,E),x.depthBuffer){let N=x.depthTexture,k=N&&N.isDepthTexture?N.type:null,q=T(x.stencilBuffer,k),se=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;L(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Be(x),q,x.width,x.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,Be(x),q,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,q,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,se,e.RENDERBUFFER,E)}else{let N=x.textures;for(let k=0;k<N.length;k++){let q=N[k],se=n.convert(q.format,q.colorSpace),D=n.convert(q.type),te=v(q.internalFormat,se,D,q.normalized,q.colorSpace);L(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Be(x),te,x.width,x.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,Be(x),te,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,te,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ne(E,x,F){let N=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let k=r.get(x.depthTexture);if(k.__renderTarget=x,(!k.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),N){if(k.__webglInit===void 0&&(k.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),k.__webglTexture===void 0){k.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),Ge(e.TEXTURE_CUBE_MAP,x.depthTexture);let fe=n.convert(x.depthTexture.format),xe=n.convert(x.depthTexture.type),oe;x.depthTexture.format===Fi?oe=e.DEPTH_COMPONENT24:x.depthTexture.format===lr&&(oe=e.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,oe,x.width,x.height,0,fe,xe,null)}}else ce(x.depthTexture,0);let q=k.__webglTexture,se=Be(x),D=N?e.TEXTURE_CUBE_MAP_POSITIVE_X+F:e.TEXTURE_2D,te=x.depthTexture.format===lr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===Fi)L(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,te,D,q,0,se):e.framebufferTexture2D(e.FRAMEBUFFER,te,D,q,0);else if(x.depthTexture.format===lr)L(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,te,D,q,0,se):e.framebufferTexture2D(e.FRAMEBUFFER,te,D,q,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(E){let x=r.get(E),F=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let N=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),N){let k=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,N.removeEventListener("dispose",k)};N.addEventListener("dispose",k),x.__depthDisposeCallback=k}x.__boundDepthTexture=N}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let N=0;N<6;N++)ne(x.__webglFramebuffer[N],E,N);else{let N=E.texture.mipmaps;N&&N.length>0?ne(x.__webglFramebuffer[0],E,0):ne(x.__webglFramebuffer,E,0)}else if(F){x.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[N]),x.__webglDepthbuffer[N]===void 0)x.__webglDepthbuffer[N]=e.createRenderbuffer(),Fe(x.__webglDepthbuffer[N],E,!1);else{let k=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[N];e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,k,e.RENDERBUFFER,q)}}else{let N=E.texture.mipmaps;if(N&&N.length>0?i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Fe(x.__webglDepthbuffer,E,!1);else{let k=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,k,e.RENDERBUFFER,q)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function ue(E,x,F){let N=r.get(E);x!==void 0&&de(N.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&re(E)}function ve(E){let x=E.texture,F=r.get(E),N=r.get(x);E.addEventListener("dispose",g);let k=E.textures,q=E.isWebGLCubeRenderTarget===!0,se=k.length>1;if(se||(N.__webglTexture===void 0&&(N.__webglTexture=e.createTexture()),N.__version=x.version,s.memory.textures++),q){F.__webglFramebuffer=[];for(let D=0;D<6;D++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[D]=[];for(let te=0;te<x.mipmaps.length;te++)F.__webglFramebuffer[D][te]=e.createFramebuffer()}else F.__webglFramebuffer[D]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let D=0;D<x.mipmaps.length;D++)F.__webglFramebuffer[D]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(se)for(let D=0,te=k.length;D<te;D++){let fe=r.get(k[D]);fe.__webglTexture===void 0&&(fe.__webglTexture=e.createTexture(),s.memory.textures++)}if(E.samples>0&&L(E)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let D=0;D<k.length;D++){let te=k[D];F.__webglColorRenderbuffer[D]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[D]);let fe=n.convert(te.format,te.colorSpace),xe=n.convert(te.type),oe=v(te.internalFormat,fe,xe,te.normalized,te.colorSpace,E.isXRRenderTarget===!0),ge=Be(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,ge,oe,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+D,e.RENDERBUFFER,F.__webglColorRenderbuffer[D])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),Fe(F.__webglDepthRenderbuffer,E,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(q){i.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture),Ge(e.TEXTURE_CUBE_MAP,x);for(let D=0;D<6;D++)if(x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)de(F.__webglFramebuffer[D][te],E,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+D,te);else de(F.__webglFramebuffer[D],E,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);d(x)&&b(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(se){for(let D=0,te=k.length;D<te;D++){let fe=k[D],xe=r.get(fe),oe=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(oe=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(oe,xe.__webglTexture),Ge(oe,fe),de(F.__webglFramebuffer,E,fe,e.COLOR_ATTACHMENT0+D,oe,0),d(fe)&&b(oe)}i.unbindTexture()}else{let D=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(D=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(D,N.__webglTexture),Ge(D,x),x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)de(F.__webglFramebuffer[te],E,x,e.COLOR_ATTACHMENT0,D,te);else de(F.__webglFramebuffer,E,x,e.COLOR_ATTACHMENT0,D,0);d(x)&&b(D),i.unbindTexture()}E.depthBuffer&&re(E)}function _e(E){let x=E.textures;for(let F=0,N=x.length;F<N;F++){let k=x[F];if(d(k)){let q=w(E),se=r.get(k).__webglTexture;i.bindTexture(q,se),b(q),i.unbindTexture()}}}let Te=[],De=[];function ze(E){if(E.samples>0){if(L(E)===!1){let x=E.textures,F=E.width,N=E.height,k=e.COLOR_BUFFER_BIT,q=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,se=r.get(E),D=x.length>1;if(D)for(let fe=0;fe<x.length;fe++)i.bindFramebuffer(e.FRAMEBUFFER,se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+fe,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+fe,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let te=E.texture.mipmaps;te&&te.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(k|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(k|=e.STENCIL_BUFFER_BIT)),D){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,se.__webglColorRenderbuffer[fe]);let xe=r.get(x[fe]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,xe,0)}e.blitFramebuffer(0,0,F,N,0,0,F,N,k,e.NEAREST),l===!0&&(Te.length=0,De.length=0,Te.push(e.COLOR_ATTACHMENT0+fe),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(Te.push(q),De.push(q),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,De)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Te))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),D)for(let fe=0;fe<x.length;fe++){i.bindFramebuffer(e.FRAMEBUFFER,se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+fe,e.RENDERBUFFER,se.__webglColorRenderbuffer[fe]);let xe=r.get(x[fe]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+fe,e.TEXTURE_2D,xe,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let x=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function Be(E){return Math.min(a.maxSamples,E.samples)}function L(E){let x=r.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function rt(E){let x=s.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function qe(E,x){let F=E.colorSpace,N=E.format,k=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Gn&&F!==$i&&(it.getTransfer(F)===st?(N!==pi||k!==Yt)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",F)),x}function je(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(h.width=E.naturalWidth||E.width,h.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(h.width=E.displayWidth,h.height=E.displayHeight):(h.width=E.width,h.height=E.height),h}this.allocateTextureUnit=Q,this.resetTextureUnits=Z,this.getTextureUnits=O,this.setTextureUnits=U,this.setTexture2D=ce,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=ie,this.rebindTextures=ue,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=de,this.useMultisampledRTT=L,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function e_(e,t){function i(r,a=$i){let n,s=it.getTransfer(a);if(r===Yt)return e.UNSIGNED_BYTE;if(r===jo)return e.UNSIGNED_SHORT_4_4_4_4;if(r===qo)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Oh)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Fh)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Uh)return e.BYTE;if(r===Nh)return e.SHORT;if(r===Pa)return e.UNSIGNED_SHORT;if(r===Xo)return e.INT;if(r===Ei)return e.UNSIGNED_INT;if(r===di)return e.FLOAT;if(r===Ft)return e.HALF_FLOAT;if(r===Bh)return e.ALPHA;if(r===zh)return e.RGB;if(r===pi)return e.RGBA;if(r===Fi)return e.DEPTH_COMPONENT;if(r===lr)return e.DEPTH_STENCIL;if(r===Yo)return e.RED;if(r===Zo)return e.RED_INTEGER;if(r===mr)return e.RG;if(r===Ko)return e.RG_INTEGER;if(r===Jo)return e.RGBA_INTEGER;if(r===Pn||r===In||r===Ln||r===Dn)if(s===st)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Pn)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===In)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ln)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Pn)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===In)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ln)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dn)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===oo||r===lo||r===ho||r===uo)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===oo)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lo)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ho)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===uo)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===co||r===po||r===fo||r===mo||r===go||r===Fn||r===vo)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===co||r===po)return s===st?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===fo)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===mo)return n.COMPRESSED_R11_EAC;if(r===go)return n.COMPRESSED_SIGNED_R11_EAC;if(r===Fn)return n.COMPRESSED_RG11_EAC;if(r===vo)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===_o||r===xo||r===yo||r===Mo||r===So||r===bo||r===To||r===Eo||r===wo||r===Ao||r===Co||r===Ro||r===Po||r===Io)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===_o)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xo)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yo)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mo)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===So)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bo)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===To)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Eo)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wo)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ao)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Co)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ro)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Po)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Io)return s===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lo||r===Do||r===Uo)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===Lo)return s===st?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Do)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Uo)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===No||r===Oo||r===Bn||r===Fo)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===No)return n.COMPRESSED_RED_RGTC1_EXT;if(r===Oo)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fo)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ia?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var t_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i_=`
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

}`,r_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new au(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new vt({vertexShader:t_,fragmentShader:i_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new aa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},a_=class extends vr{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,u=null,p=null,c=null,f=null,_=typeof XRWebGLBinding<"u",y=new r_,m={},d=t.getContextAttributes(),b=null,w=null,v=[],T=[],A=new ae,R=null,g=null,M=new qt;M.viewport=new ft;let I=new qt;I.viewport=new ft;let P=[M,I],B=new tf,Z=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let X=v[K];return X===void 0&&(X=new Ts,v[K]=X),X.getTargetRaySpace()},this.getControllerGrip=function(K){let X=v[K];return X===void 0&&(X=new Ts,v[K]=X),X.getGripSpace()},this.getHand=function(K){let X=v[K];return X===void 0&&(X=new Ts,v[K]=X),X.getHandSpace()};function U(K){let X=T.indexOf(K.inputSource);if(X===-1)return;let $=v[X];$!==void 0&&($.update(K.inputSource,K.frame,l||n),$.dispatchEvent({type:K.type,data:K.inputSource}))}function Q(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",W);for(let K=0;K<v.length;K++){let X=T[K];X!==null&&(T[K]=null,v[K].disconnect(X))}Z=null,O=null,y.reset();for(let K in m)delete m[K];if(e.setRenderTarget(b),c=null,p=null,u=null,r=null,w=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),g!==null){let K=g.camera;K.fov=g.fov,K.zoom=g.zoom,K.updateProjectionMatrix(),g=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){s=K,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return p!==null?p:c},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",W),d.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,$=null,me=null;d.depth&&(me=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=d.stencil?lr:Fi,$=d.stencil?Ia:Ei);let Ae={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:a};u=this.getBinding(),p=u.createProjectionLayer(Ae),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new It(p.textureWidth,p.textureHeight,{format:pi,type:Yt,depthTexture:new Ua(p.textureWidth,p.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let X={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:a};c=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),w=new It(c.framebufferWidth,c.framebufferHeight,{format:pi,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(K){for(let X=0;X<K.removed.length;X++){let $=K.removed[X],me=T.indexOf($);me>=0&&(T[me]=null,v[me].disconnect($))}for(let X=0;X<K.added.length;X++){let $=K.added[X],me=T.indexOf($);if(me===-1){for(let de=0;de<v.length;de++)if(de>=T.length){T.push($),me=de;break}else if(T[de]===null){T[de]=$,me=de;break}if(me===-1)break}let Ae=v[me];Ae&&Ae.connect($)}}let ce=new C,Y=new C;function J(K,X,$){ce.setFromMatrixPosition(X.matrixWorld),Y.setFromMatrixPosition($.matrixWorld);let me=ce.distanceTo(Y),Ae=X.projectionMatrix.elements,de=$.projectionMatrix.elements,Fe=Ae[14]/(Ae[10]-1),ne=Ae[14]/(Ae[10]+1),re=(Ae[9]+1)/Ae[5],ue=(Ae[9]-1)/Ae[5],ve=(Ae[8]-1)/Ae[0],_e=(de[8]+1)/de[0],Te=Fe*ve,De=Fe*_e,ze=me/(-ve+_e),Be=ze*-ve;if(X.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Be),K.translateZ(ze),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(X.projectionMatrix),K.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let L=Fe+ze,rt=ne+ze,qe=Te-Be,je=De+(me-Be),E=re*ne/rt*L,x=ue*ne/rt*L;K.projectionMatrix.makePerspective(qe,je,E,x,L,rt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ie(K,X){X===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(X.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let X=K.near,$=K.far;y.texture!==null&&(y.depthNear>0&&(X=y.depthNear),y.depthFar>0&&($=y.depthFar)),B.near=I.near=M.near=X,B.far=I.far=M.far=$,(Z!==B.near||O!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),Z=B.near,O=B.far),B.layers.mask=K.layers.mask|6,M.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let me=K.parent,Ae=B.cameras;ie(B,me);for(let de=0;de<Ae.length;de++)ie(Ae[de],me);Ae.length===2?J(B,M,I):B.projectionMatrix.copy(M.projectionMatrix),g===null&&K.isPerspectiveCamera&&(g={camera:K,fov:K.fov,zoom:K.zoom}),Oe(K,B,me)};function Oe(K,X,$){$===null?K.matrix.copy(X.matrixWorld):(K.matrix.copy($.matrixWorld),K.matrix.invert(),K.matrix.multiply(X.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(X.projectionMatrix),K.projectionMatrixInverse.copy(X.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Da*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(p===null&&c===null))return o},this.setFoveation=function(K){o=K,p!==null&&(p.fixedFoveation=K),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(B)},this.getCameraTexture=function(K){return m[K]};let Ee=null;function Ke(K,X){if(h=X.getViewerPose(l||n),f=X,h!==null){let $=h.views;c!==null&&(e.setRenderTargetFramebuffer(w,c.framebuffer),e.setRenderTarget(w));let me=!1;$.length!==B.cameras.length&&(B.cameras.length=0,me=!0);for(let de=0;de<$.length;de++){let Fe=$[de],ne=null;if(c!==null)ne=c.getViewport(Fe);else{let ue=u.getViewSubImage(p,Fe);ne=ue.viewport,de===0&&(e.setRenderTargetTextures(w,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(w))}let re=P[de];re===void 0&&(re=new qt,re.layers.enable(de),re.viewport=new ft,P[de]=re),re.matrix.fromArray(Fe.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Fe.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ne.x,ne.y,ne.width,ne.height),de===0&&(B.matrix.copy(re.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),me===!0&&B.cameras.push(re)}let Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let de=u.getDepthInformation($[0]);de&&de.isValid&&de.texture&&y.init(de,r.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let de=0;de<$.length;de++){let Fe=$[de].camera;if(Fe){let ne=m[Fe];ne||(ne=new au,m[Fe]=ne);let re=u.getCameraImage(Fe);ne.sourceTexture=re}}}}for(let $=0;$<v.length;$++){let me=T[$],Ae=v[$];me!==null&&Ae!==void 0&&Ae.update(me,X,l||n)}Ee&&Ee(K,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),f=null}let Ge=new ku;Ge.setAnimationLoop(Ke),this.setAnimationLoop=function(K){Ee=K},this.dispose=function(){}}},n_=new Je,Ku=new Ye;Ku.set(-1,0,0,0,1,0,0,0,1);function s_(e,t){function i(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function r(m,d){d.color.getRGB(m.fogColor.value,Nu(e)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function a(m,d,b,w,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?n(m,d):d.isMeshLambertMaterial?(n(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(n(m,d),p(m,d)):d.isMeshPhongMaterial?(n(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(n(m,d),c(m,d),d.isMeshPhysicalMaterial&&f(m,d,v)):d.isMeshMatcapMaterial?(n(m,d),_(m,d)):d.isMeshDepthMaterial?n(m,d):d.isMeshDistanceMaterial?(n(m,d),y(m,d)):d.isMeshNormalMaterial?n(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,b,w):d.isSpriteMaterial?h(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function n(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,i(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,i(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===kt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,i(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===kt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,i(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,i(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,i(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let b=t.get(d),w=b.envMap,v=b.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(n_.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ku),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,i(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,i(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,i(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=w*.5,d.map&&(m.map.value=d.map,i(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,i(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function c(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,i(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,i(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,i(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,i(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,i(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,i(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,i(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,i(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,i(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,i(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,i(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,i(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,i(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,i(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let b=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function o_(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let A=T.program;r.uniformBlockBinding(v,A)}function h(v,T){let A=a[v.id];A===void 0&&(m(v),A=u(v),a[v.id]=A,v.addEventListener("dispose",b));let R=T.program;r.updateUBOMapping(v,R);let g=t.render.frame;n[v.id]!==g&&(c(v),n[v.id]=g)}function u(v){let T=p();v.__bindingPointIndex=T;let A=e.createBuffer(),R=v.__size,g=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,R,g),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,A),A}function p(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(v){let T=a[v.id],A=v.uniforms,R=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let g=0,M=A.length;g<M;g++){let I=A[g];if(Array.isArray(I))for(let P=0,B=I.length;P<B;P++)f(I[P],g,P,R);else f(I,g,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(v,T,A,R){if(y(v,T,A,R)===!0){let g=v.__offset,M=v.value;if(Array.isArray(M)){let I=0;for(let P=0;P<M.length;P++){let B=M[P],Z=d(B);_(B,v.__data,I),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(I+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(M,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,g,v.__data)}}function _(v,T,A){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,A)}function y(v,T,A,R){let g=v.value,M=T+"_"+A;if(R[M]===void 0)return typeof g=="number"||typeof g=="boolean"?R[M]=g:ArrayBuffer.isView(g)?R[M]=g.slice():R[M]=g.clone(),!0;{let I=R[M];if(typeof g=="number"||typeof g=="boolean"){if(I!==g)return R[M]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(I.equals(g)===!1)return I.copy(g),!0}}return!1}function m(v){let T=v.uniforms,A=0,R=16;for(let M=0,I=T.length;M<I;M++){let P=Array.isArray(T[M])?T[M]:[T[M]];for(let B=0,Z=P.length;B<Z;B++){let O=P[B],U=Array.isArray(O.value)?O.value:[O.value];for(let Q=0,W=U.length;Q<W;Q++){let ce=U[Q],Y=d(ce),J=A%R,ie=J%Y.boundary,Oe=J+ie;A+=ie,Oe!==0&&R-Oe<Y.storage&&(A+=R-Oe),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=A,A+=Y.storage}}}let g=A%R;return g>0&&(A+=R-g),v.__size=A,v.__cache={},this}function d(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):He("WebGLRenderer: Unsupported uniform value type.",v),T}function b(v){let T=v.target;T.removeEventListener("dispose",b);let A=s.indexOf(T.__bindingPointIndex);s.splice(A,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete n[T.id]}function w(){for(let v in a)e.deleteBuffer(a[v]);s=[],a={},n={}}return{bind:l,update:h,dispose:w}}var l_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function h_(){return Si===null&&(Si=new Qh(l_,16,16,mr,Ft),Si.name="DFG_LUT",Si.minFilter=At,Si.magFilter=At,Si.wrapS=Ui,Si.wrapT=Ui,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var Ju=class{constructor(e={}){let{canvas:t=jc(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1,outputBufferType:c=Yt}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=n;let _=c,y=new Set([Jo,Ko,Zo]),m=new Set([Yt,Ei,Pa,Ia,jo,qo]),d=new Uint32Array(4),b=new Int32Array(4),w=new C,v=null,T=null,A=[],R=[],g=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,I=!1,P=null,B=null,Z=null,O=null;this._outputColorSpace=Vt;let U=0,Q=0,W=null,ce=-1,Y=null,J=new ft,ie=new ft,Oe=null,Ee=new Xe(0),Ke=0,Ge=t.width,K=t.height,X=1,$=null,me=null,Ae=new ft(0,0,Ge,K),de=new ft(0,0,Ge,K),Fe=!1,ne=new ta,re=!1,ue=!1,ve=new Je,_e=new C,Te=new ft,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ze=!1;function Be(){return W===null?X:1}let L=i;function rt(S,z){return t.getContext(S,z)}let qe,je,E,x,F,N,k,q,se,D,te,fe,xe,oe,ge,Ce,Ne,$e,G,ee,le,be,Re;try{let S={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",nt,!1),L===null){let z="webgl2";if(L=rt(z,S),L===null)throw rt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}he()}catch(S){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),ke("WebGLRenderer: "+S.message),S}function he(){qe=new h0(L),qe.init(),le=new e_(L,qe),je=new Qg(L,qe,e,le),E=new $v(L,qe),je.reversedDepthBuffer&&p&&E.buffers.depth.setReversed(!0),B=L.createFramebuffer(),Z=L.createFramebuffer(),O=L.createFramebuffer(),x=new d0(L),F=new Bv,N=new Qv(L,qe,E,F,je,le,x),k=new l0(M),q=new ff(L),be=new Jg(L,q),se=new u0(L,q,x,be),D=new f0(L,se,q,be,x),$e=new p0(L,je,N),ge=new e0(F),te=new Fv(M,k,qe,je,be,ge),fe=new s_(M,F),xe=new Gv,oe=new jv(qe),Ne=new Kg(M,k,E,D,f,o),Ce=new Jv(M,D,je),Re=new o_(L,x,je,E),G=new $g(L,qe,x),ee=new c0(L,qe,x),x.programs=te.programs,M.capabilities=je,M.extensions=qe,M.properties=F,M.renderLists=xe,M.shadowMap=Ce,M.state=E,M.info=x}_!==Yt&&(g=new g0(_,t.width,t.height,s,r,a));let Se=new a_(M,L);this.xr=Se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=qe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=qe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(Ge,K,!1))},this.getSize=function(S){return S.set(Ge,K)},this.setSize=function(S,z,j=!0){if(Se.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=S,K=z,t.width=Math.floor(S*X),t.height=Math.floor(z*X),j===!0&&(t.style.width=S+"px",t.style.height=z+"px"),g!==null&&g.setSize(t.width,t.height),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(Ge*X,K*X).floor()},this.setDrawingBufferSize=function(S,z,j){Ge=S,K=z,X=j,t.width=Math.floor(S*j),t.height=Math.floor(z*j),this.setViewport(0,0,S,z)},this.setEffects=function(S){if(_===Yt){ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let z=0;z<S.length;z++)if(S[z].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(J)},this.getViewport=function(S){return S.copy(Ae)},this.setViewport=function(S,z,j,V){S.isVector4?Ae.set(S.x,S.y,S.z,S.w):Ae.set(S,z,j,V),E.viewport(J.copy(Ae).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(de)},this.setScissor=function(S,z,j,V){S.isVector4?de.set(S.x,S.y,S.z,S.w):de.set(S,z,j,V),E.scissor(ie.copy(de).multiplyScalar(X).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(S){E.setScissorTest(Fe=S)},this.setOpaqueSort=function(S){$=S},this.setTransparentSort=function(S){me=S},this.getClearColor=function(S){return S.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(S=!0,z=!0,j=!0){let V=0;if(S){let H=!1;if(W!==null){let pe=W.texture.format;H=y.has(pe)}if(H){let pe=W.texture.type,ye=m.has(pe),we=Ne.getClearColor(),Pe=Ne.getClearAlpha(),Ve=we.r,tt=we.g,at=we.b;ye?(d[0]=Ve,d[1]=tt,d[2]=at,d[3]=Pe,L.clearBufferuiv(L.COLOR,0,d)):(b[0]=Ve,b[1]=tt,b[2]=at,b[3]=Pe,L.clearBufferiv(L.COLOR,0,b))}else V|=L.COLOR_BUFFER_BIT}z&&(V|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),P=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),Ne.dispose(),xe.dispose(),oe.dispose(),F.dispose(),k.dispose(),D.dispose(),be.dispose(),Re.dispose(),te.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Hi),Se.removeEventListener("sessionend",si),gt.stop()};function Ue(S){S.preventDefault(),kn("WebGLRenderer: Context Lost."),I=!0}function mt(){kn("WebGLRenderer: Context Restored."),I=!1;let S=x.autoReset,z=Ce.enabled,j=Ce.autoUpdate,V=Ce.needsUpdate,H=Ce.type;he(),x.autoReset=S,Ce.enabled=z,Ce.autoUpdate=j,Ce.needsUpdate=V,Ce.type=H}function nt(S){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function $t(S){let z=S.target;z.removeEventListener("dispose",$t),ni(z)}function ni(S){ja(S),F.remove(S)}function ja(S){let z=F.get(S).programs;z!==void 0&&(z.forEach(function(j){te.releaseProgram(j)}),S.isShaderMaterial&&te.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,j,V,H,pe){z===null&&(z=De);let ye=H.isMesh&&H.matrixWorld.determinantAffine()<0,we=ps(S,z,j,V,H);E.setMaterial(V,ye);let Pe=j.index,Ve=1;if(V.wireframe===!0){if(Pe=se.getWireframeAttribute(j),Pe===void 0)return;Ve=2}let tt=j.drawRange,at=j.attributes.position,Le=tt.start*Ve,lt=(tt.start+tt.count)*Ve;pe!==null&&(Le=Math.max(Le,pe.start*Ve),lt=Math.min(lt,(pe.start+pe.count)*Ve)),Pe!==null?(Le=Math.max(Le,0),lt=Math.min(lt,Pe.count)):at!=null&&(Le=Math.max(Le,0),lt=Math.min(lt,at.count));let St=lt-Le;if(St<0||St===1/0)return;be.setup(H,V,we,j,Pe);let dt,pt=G;if(Pe!==null&&(dt=q.get(Pe),pt=ee,pt.setIndex(dt)),H.isMesh)V.wireframe===!0?(E.setLineWidth(V.wireframeLinewidth*Be()),pt.setMode(L.LINES)):pt.setMode(L.TRIANGLES);else if(H.isLine){let xt=V.linewidth;xt===void 0&&(xt=1),E.setLineWidth(xt*Be()),H.isLineSegments?pt.setMode(L.LINES):H.isLineLoop?pt.setMode(L.LINE_LOOP):pt.setMode(L.LINE_STRIP)}else H.isPoints?pt.setMode(L.POINTS):H.isSprite&&pt.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))pt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let xt=H._multiDrawStarts,Ie=H._multiDrawCounts,Bt=H._multiDrawCount,tr=Pe?q.get(Pe).bytesPerElement:1,ii=F.get(V).currentProgram.getUniforms();for(let yi=0;yi<Bt;yi++)ii.setValue(L,"_gl_DrawID",yi),pt.render(xt[yi]/tr,Ie[yi])}else if(H.isInstancedMesh)pt.renderInstances(Le,St,H.count);else if(j.isInstancedBufferGeometry){let xt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ie=Math.min(j.instanceCount,xt);pt.renderInstances(Le,St,Ie)}else pt.render(Le,St)};function ha(S,z,j,V){P!==null&&S.isNodeMaterial&&P.setObject(V,S),re===!0&&ge.setState(S,j,!1),S.transparent===!0&&S.side===ui&&S.forceSinglePass===!1?(S.side=kt,S.needsUpdate=!0,ei(S,z,V),S.side=pr,S.needsUpdate=!0,ei(S,z,V),S.side=ui):ei(S,z,V)}this.compile=function(S,z,j=null){j===null&&(j=S),P!==null&&P.renderStart(S,z,j),T=oe.get(j),T.init(z),R.push(T),j.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),S!==j&&S.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),P!==null&&P.updateLights(T.state.lightsArray),ue=this.localClippingEnabled,re=ge.init(this.clippingPlanes,ue),re===!0&&ge.setGlobalState(this.clippingPlanes,z),P!==null&&Ce.render(T.state.shadowsArray,j,z);let V=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let pe=H.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){let we=pe[ye];ha(we,j,z,H),V.add(we)}else ha(pe,j,z,H),V.add(pe)}),T=R.pop(),P!==null&&P.renderEnd(),V},this.compileAsync=function(S,z,j=null){let V=this.compile(S,z,j);return new Promise(H=>{function pe(){if(V.forEach(function(ye){let we=F.get(ye).currentProgram;(we===void 0||we.isReady())&&V.delete(ye)}),V.size===0){H(S);return}setTimeout(pe,10)}qe.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Gi=null;function Vi(S){Gi&&Gi(S)}function Hi(){gt.stop()}function si(){gt.start()}let gt=new ku;gt.setAnimationLoop(Vi),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(S){Gi=S,Se.setAnimationLoop(S),S===null?gt.stop():gt.start()},Se.addEventListener("sessionstart",Hi),Se.addEventListener("sessionend",si),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P!==null&&P.renderStart(S,z);let j=Se.enabled===!0&&Se.isPresenting===!0,V=g!==null&&(W===null||j)&&g.begin(M,W);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(g===null||g.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(z),z=Se.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,z,W),T=oe.get(S,R.length),T.init(z),T.state.textureUnits=N.getTextureUnits(),R.push(T),ve.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ne.setFromProjectionMatrix(ve,fi,z.reversedDepth),ue=this.localClippingEnabled,re=ge.init(this.clippingPlanes,ue),v=xe.get(S,A.length),v.init(),A.push(v),Se.enabled===!0&&Se.isPresenting===!0){let pe=M.xr.getDepthSensingMesh();pe!==null&&Lt(pe,z,-1/0,M.sortObjects)}Lt(S,z,0,M.sortObjects),v.finish(),P!==null&&P.updateLights(T.state.lightsArray),M.sortObjects===!0&&v.sort($,me),ze=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,ze&&Ne.addToRenderList(v,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&ge.beginShadows();let H=T.state.shadowsArray;if(Ce.render(H,S,z),re===!0&&ge.endShadows(),(V&&g.hasRenderPass())===!1){let pe=v.opaque,ye=v.transmissive;if(T.setupLights(),z.isArrayCamera){let we=z.cameras;if(ye.length>0)for(let Pe=0,Ve=we.length;Pe<Ve;Pe++){let tt=we[Pe];Dt(pe,ye,S,tt)}ze&&Ne.render(S);for(let Pe=0,Ve=we.length;Pe<Ve;Pe++){let tt=we[Pe];Qt(v,S,tt,tt.viewport)}}else ye.length>0&&Dt(pe,ye,S,z),ze&&Ne.render(S),Qt(v,S,z)}W!==null&&Q===0&&(N.updateMultisampleRenderTarget(W),N.updateRenderTargetMipmap(W)),V&&g.end(M),S.isScene===!0&&S.onAfterRender(M,S,z),be.resetDefaultState(),ce=-1,Y=null,R.pop(),R.length>0?(T=R[R.length-1],N.setTextureUnits(T.state.textureUnits),re===!0&&ge.setGlobalState(M.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?v=A[A.length-1]:v=null,P!==null&&P.renderEnd()};function Lt(S,z,j,V){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(ne)){V&&Te.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);let pe=D.update(S),ye=S.material;ye.visible&&v.push(S,pe,ye,j,Te.z,null,z)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(ne))){let pe=D.update(S),ye=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Te.copy(S.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Te.copy(pe.boundingSphere.center)),Te.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(ye)){let we=pe.groups;for(let Pe=0,Ve=we.length;Pe<Ve;Pe++){let tt=we[Pe],at=ye[tt.materialIndex];at&&at.visible&&v.push(S,pe,at,j,Te.z,tt,z)}}else ye.visible&&v.push(S,pe,ye,j,Te.z,null,z)}}let H=S.children;for(let pe=0,ye=H.length;pe<ye;pe++)Lt(H[pe],z,j,V)}function Qt(S,z,j,V){let{opaque:H,transmissive:pe,transparent:ye}=S;T.setupLightsView(j),re===!0&&ge.setGlobalState(M.clippingPlanes,j),V&&E.viewport(J.copy(V)),H.length>0&&Rt(H,z,j),pe.length>0&&Rt(pe,z,j),ye.length>0&&Rt(ye,z,j),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Dt(S,z,j,V){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let at=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new It(1,1,{generateMipmaps:!0,type:at?Ft:Yt,minFilter:Ni,samples:Math.max(4,je.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let H=T.state.transmissionRenderTarget[V.id],pe=V.viewport||J;H.setSize(pe.z*M.transmissionResolutionScale,pe.w*M.transmissionResolutionScale);let ye=M.getRenderTarget(),we=M.getActiveCubeFace(),Pe=M.getActiveMipmapLevel();M.setRenderTarget(H),M.getClearColor(Ee),Ke=M.getClearAlpha(),Ke<1&&M.setClearColor(16777215,.5),M.clear(),ze&&Ne.render(j);let Ve=M.toneMapping;M.toneMapping=ai;let tt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),re===!0&&ge.setGlobalState(M.clippingPlanes,V),Rt(S,j,V),N.updateMultisampleRenderTarget(H),N.updateRenderTargetMipmap(H),qe.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Le=0,lt=z.length;Le<lt;Le++){let St=z[Le],{object:dt,geometry:pt,material:xt,group:Ie}=St;if(xt.side===ui&&dt.layers.test(V.layers)){let Bt=xt.side;xt.side=kt,xt.needsUpdate=!0,xi(dt,j,V,pt,xt,Ie),xt.side=Bt,xt.needsUpdate=!0,at=!0}}at===!0&&(N.updateMultisampleRenderTarget(H),N.updateRenderTargetMipmap(H))}M.setRenderTarget(ye,we,Pe),M.setClearColor(Ee,Ke),tt!==void 0&&(V.viewport=tt),M.toneMapping=Ve}function Rt(S,z,j){let V=z.isScene===!0?z.overrideMaterial:null;for(let H=0,pe=S.length;H<pe;H++){let ye=S[H],{object:we,geometry:Pe,group:Ve}=ye,tt=ye.material;tt.allowOverride===!0&&V!==null&&(tt=V),we.layers.test(j.layers)&&xi(we,z,j,Pe,tt,Ve)}}function xi(S,z,j,V,H,pe){P!==null&&H.isNodeMaterial&&P.setObject(S,H),S.onBeforeRender(M,z,j,V,H,pe),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(M,z,j,V,S,pe),H.transparent===!0&&H.side===ui&&H.forceSinglePass===!1?(H.side=kt,H.needsUpdate=!0,M.renderBufferDirect(j,z,V,H,S,pe),H.side=pr,H.needsUpdate=!0,M.renderBufferDirect(j,z,V,H,S,pe),H.side=ui):M.renderBufferDirect(j,z,V,H,S,pe),S.onAfterRender(M,z,j,V,H,pe)}function ei(S,z,j){z.isScene!==!0&&(z=De);let V=F.get(S),H=T.state.lights,pe=T.state.shadowsArray,ye=H.state.version,we=te.getParameters(S,H.state,pe,z,j,T.state.lightProbeGridArray),Pe=te.getProgramCacheKey(we),Ve=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?z.environment:null,V.fog=z.fog;let tt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=k.get(S.envMap||V.environment,tt),V.envMapRotation=V.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,Ve===void 0&&(S.addEventListener("dispose",$t),Ve=new Map,V.programs=Ve);let at=Ve.get(Pe);if(at!==void 0){if(V.currentProgram===at&&V.lightsStateVersion===ye)return ki(S,we),at}else we.uniforms=te.getUniforms(S),P!==null&&S.isNodeMaterial&&P.build(S,j,we),S.onBeforeCompile(we,M),at=te.acquireProgram(we,Pe),Ve.set(Pe,at),V.uniforms=we.uniforms;let Le=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Le.clippingPlanes=ge.uniform),ki(S,we),V.needsLights=Ya(S),V.lightsStateVersion=ye,V.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.sunLights.value=H.state.sun,Le.sunLightShadows.value=H.state.sunShadow,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.sunShadowMatrix.value=H.state.sunShadowMatrix,Le.sunShadowCascade.value=H.state.sunShadowCascade,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=at,V.uniformsList=null,at}function ti(S){if(S.uniformsList===null){let z=S.currentProgram.getUniforms();S.uniformsList=On.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function ki(S,z){let j=F.get(S);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function xr(S,z){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;w.setFromMatrixPosition(z.matrixWorld);for(let j=0,V=S.length;j<V;j++){let H=S[j];if(H.texture!==null&&H.boundingBox.containsPoint(w))return H}return null}function ps(S,z,j,V,H){z.isScene!==!0&&(z=De),N.resetTextureUnits();let pe=z.fog,ye=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?z.environment:null,we=W===null?M.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:it.workingColorSpace,Pe=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ve=k.get(V.envMap||ye,Pe),tt=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,at=!!j.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Le=!!j.morphAttributes.position,lt=!!j.morphAttributes.normal,St=!!j.morphAttributes.color,dt=ai;V.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(dt=M.toneMapping);let pt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xt=pt!==void 0?pt.length:0,Ie=F.get(V),Bt=T.state.lights;if(re===!0&&(ue===!0||S!==Y)){let ut=S===Y&&V.id===ce;ge.setState(V,S,ut)}let tr=!1;V.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Bt.state.version||Ie.outputColorSpace!==we||H.isBatchedMesh&&Ie.batching===!1||!H.isBatchedMesh&&Ie.batching===!0||H.isBatchedMesh&&Ie.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Ie.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Ie.instancing===!1||!H.isInstancedMesh&&Ie.instancing===!0||H.isSkinnedMesh&&Ie.skinning===!1||!H.isSkinnedMesh&&Ie.skinning===!0||H.isInstancedMesh&&Ie.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ie.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ie.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ie.instancingMorph===!1&&H.morphTexture!==null||Ie.envMap!==Ve||V.fog===!0&&Ie.fog!==pe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ge.numPlanes||Ie.numIntersection!==ge.numIntersection)||Ie.vertexAlphas!==tt||Ie.vertexTangents!==at||Ie.morphTargets!==Le||Ie.morphNormals!==lt||Ie.morphColors!==St||Ie.toneMapping!==dt||Ie.morphTargetsCount!==xt||!!Ie.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(tr=!0):(tr=!0,Ie.__version=V.version);let ii=Ie.currentProgram;tr===!0&&(ii=ei(V,z,H),P&&V.isNodeMaterial&&P.onUpdateProgram(V,ii,Ie));let yi=!1,Wi=!1,yr=!1,ht=ii.getUniforms(),Mt=Ie.uniforms;if(E.useProgram(ii.program)&&(yi=!0,Wi=!0,yr=!0),V.id!==ce&&(ce=V.id,Wi=!0),Ie.needsLights){let ut=xr(T.state.lightProbeGridArray,H);Ie.lightProbeGrid!==ut&&(Ie.lightProbeGrid=ut,Wi=!0)}if(yi||Y!==S){E.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ht.setValue(L,"projectionMatrix",S.projectionMatrix),ht.setValue(L,"viewMatrix",S.matrixWorldInverse);let ut=ht.map.cameraPosition;ut!==void 0&&ut.setValue(L,_e.setFromMatrixPosition(S.matrixWorld)),je.logarithmicDepthBuffer&&ht.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ht.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),Y!==S&&(Y=S,Wi=!0,yr=!0)}if(Ie.needsLights&&(Bt.state.sunShadowMap.length>0&&ht.setValue(L,"sunShadowMap",Bt.state.sunShadowMap,N),Bt.state.directionalShadowMap.length>0&&ht.setValue(L,"directionalShadowMap",Bt.state.directionalShadowMap,N),Bt.state.spotShadowMap.length>0&&ht.setValue(L,"spotShadowMap",Bt.state.spotShadowMap,N),Bt.state.pointShadowMap.length>0&&ht.setValue(L,"pointShadowMap",Bt.state.pointShadowMap,N)),H.isSkinnedMesh){ht.setOptional(L,H,"bindMatrix"),ht.setOptional(L,H,"bindMatrixInverse");let ut=H.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),ht.setValue(L,"boneTexture",ut.boneTexture,N))}H.isBatchedMesh&&(ht.setOptional(L,H,"batchingTexture"),ht.setValue(L,"batchingTexture",H._matricesTexture,N),ht.setOptional(L,H,"batchingIdTexture"),ht.setValue(L,"batchingIdTexture",H._indirectTexture,N),ht.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&ht.setValue(L,"batchingColorTexture",H._colorsTexture,N));let Xi=j.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&$e.update(H,j,ii),(Wi||Ie.receiveShadow!==H.receiveShadow)&&(Ie.receiveShadow=H.receiveShadow,ht.setValue(L,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&z.environment!==null&&(Mt.envMapIntensity.value=z.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=h_()),Wi){if(ht.setValue(L,"toneMappingExposure",M.toneMappingExposure),Ie.needsLights&&qa(Mt,yr),pe&&V.fog===!0&&fe.refreshFogUniforms(Mt,pe),fe.refreshMaterialUniforms(Mt,V,X,K,T.state.transmissionRenderTarget[S.id]),Ie.needsLights&&Ie.lightProbeGrid){let ut=Ie.lightProbeGrid;Mt.probesSH.value=ut.texture,Mt.probesMin.value.copy(ut.boundingBox.min),Mt.probesMax.value.copy(ut.boundingBox.max),Mt.probesResolution.value.copy(ut.resolution)}On.upload(L,ti(Ie),Mt,N)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(On.upload(L,ti(Ie),Mt,N),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ht.setValue(L,"center",H.center),ht.setValue(L,"modelViewMatrix",H.modelViewMatrix),ht.setValue(L,"normalMatrix",H.normalMatrix),ht.setValue(L,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){let ut=V.uniformsGroups;for(let ca=0,Mr=ut.length;ca<Mr;ca++){let pl=ut[ca];Re.update(pl,ii),Re.bind(pl,ii)}}return ii}function qa(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.sunLights.needsUpdate=z,S.sunLightShadows.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function Ya(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(S,z,j){let V=F.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),F.get(S.texture).__webglTexture=z,F.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:j,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,z){let j=F.get(S);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,j=0){W=S,U=z,Q=j;let V=null,H=!1,pe=!1;if(S){let ye=F.get(S);if(ye.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(L.FRAMEBUFFER,ye.__webglFramebuffer),J.copy(S.viewport),ie.copy(S.scissor),Oe=S.scissorTest,E.viewport(J),E.scissor(ie),E.setScissorTest(Oe),ce=-1;return}else if(ye.__webglFramebuffer===void 0)N.setupRenderTarget(S);else if(ye.__hasExternalTextures)N.rebindTextures(S,F.get(S.texture).__webglTexture,F.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ve=S.depthTexture;if(ye.__boundDepthTexture!==Ve){if(Ve!==null&&F.has(Ve)&&(S.width!==Ve.image.width||S.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(S)}}let we=S.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(pe=!0);let Pe=F.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pe[z])?V=Pe[z][j]:V=Pe[z],H=!0):S.samples>0&&N.useMultisampledRTT(S)===!1?V=F.get(S).__webglMultisampledFramebuffer:Array.isArray(Pe)?V=Pe[j]:V=Pe,J.copy(S.viewport),ie.copy(S.scissor),Oe=S.scissorTest}else J.copy(Ae).multiplyScalar(X).floor(),ie.copy(de).multiplyScalar(X).floor(),Oe=Fe;if(j!==0&&(V=B),E.bindFramebuffer(L.FRAMEBUFFER,V)&&E.drawBuffers(S,V),E.viewport(J),E.scissor(ie),E.setScissorTest(Oe),H){let ye=F.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,ye.__webglTexture,j)}else if(pe){let ye=z;for(let we=0;we<S.textures.length;we++){let Pe=F.get(S.textures[we]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+we,Pe.__webglTexture,j,ye)}}else if(S!==null&&j!==0){let ye=F.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ye.__webglTexture,j)}ce=-1};function ua(S){let z=F.get(S);return(z.__readFormat!==S.format||z.__readType!==S.type)&&(z.__readFormat=S.format,z.__readType=S.type,z.__formatReadable=je.textureFormatReadable(S.format),z.__typeReadable=je.textureTypeReadable(S.type)),z}this.readRenderTargetPixels=function(S,z,j,V,H,pe,ye,we=0){if(!(S&&S.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=F.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Pe=Pe[ye]),Pe){E.bindFramebuffer(L.FRAMEBUFFER,Pe);try{let Ve=S.textures[we],tt=Ve.format,at=Ve.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we);let Le=ua(Ve);if(Le.__formatReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-V&&j>=0&&j<=S.height-H&&L.readPixels(z,j,V,H,le.convert(tt),le.convert(at),pe)}finally{let Ve=W!==null?F.get(W).__webglFramebuffer:null;E.bindFramebuffer(L.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(S,z,j,V,H,pe,ye,we=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=F.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Pe=Pe[ye]),Pe)if(z>=0&&z<=S.width-V&&j>=0&&j<=S.height-H){E.bindFramebuffer(L.FRAMEBUFFER,Pe);let Ve=S.textures[we],tt=Ve.format,at=Ve.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we);let Le=ua(Ve);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,lt),L.bufferData(L.PIXEL_PACK_BUFFER,pe.byteLength,L.STREAM_READ),L.readPixels(z,j,V,H,le.convert(tt),le.convert(at),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let St=W!==null?F.get(W).__webglFramebuffer:null;E.bindFramebuffer(L.FRAMEBUFFER,St);let dt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await qc(L,dt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,lt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pe),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(lt),L.deleteSync(dt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,z=null,j=0){let V=Math.pow(2,-j),H=Math.floor(S.image.width*V),pe=Math.floor(S.image.height*V),ye=z!==null?z.x:0,we=z!==null?z.y:0;N.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,ye,we,H,pe),E.unbindTexture()},this.copyTextureToTexture=function(S,z,j=null,V=null,H=0,pe=0){let ye,we,Pe,Ve,tt,at,Le,lt,St,dt=S.isCompressedTexture?S.mipmaps[pe]:S.image;if(j!==null)ye=j.max.x-j.min.x,we=j.max.y-j.min.y,Pe=j.isBox3?j.max.z-j.min.z:1,Ve=j.min.x,tt=j.min.y,at=j.isBox3?j.min.z:0;else{let Mt=Math.pow(2,-H);ye=Math.floor(dt.width*Mt),we=Math.floor(dt.height*Mt),S.isDataArrayTexture?Pe=dt.depth:S.isData3DTexture?Pe=Math.floor(dt.depth*Mt):Pe=1,Ve=0,tt=0,at=0}V!==null?(Le=V.x,lt=V.y,St=V.z):(Le=0,lt=0,St=0);let pt=le.convert(z.format),xt=le.convert(z.type),Ie;z.isData3DTexture?(N.setTexture3D(z,0),Ie=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(N.setTexture2DArray(z,0),Ie=L.TEXTURE_2D_ARRAY):(N.setTexture2D(z,0),Ie=L.TEXTURE_2D),E.activeTexture(L.TEXTURE0),E.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),E.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),E.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);let Bt=E.getParameter(L.UNPACK_ROW_LENGTH),tr=E.getParameter(L.UNPACK_IMAGE_HEIGHT),ii=E.getParameter(L.UNPACK_SKIP_PIXELS),yi=E.getParameter(L.UNPACK_SKIP_ROWS),Wi=E.getParameter(L.UNPACK_SKIP_IMAGES);E.pixelStorei(L.UNPACK_ROW_LENGTH,dt.width),E.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt.height),E.pixelStorei(L.UNPACK_SKIP_PIXELS,Ve),E.pixelStorei(L.UNPACK_SKIP_ROWS,tt),E.pixelStorei(L.UNPACK_SKIP_IMAGES,at);let yr=S.isDataArrayTexture||S.isData3DTexture,ht=z.isDataArrayTexture||z.isData3DTexture;if(S.isDepthTexture){let Mt=F.get(S),Xi=F.get(z),ut=F.get(Mt.__renderTarget),ca=F.get(Xi.__renderTarget);E.bindFramebuffer(L.READ_FRAMEBUFFER,ut.__webglFramebuffer),E.bindFramebuffer(L.DRAW_FRAMEBUFFER,ca.__webglFramebuffer);for(let Mr=0;Mr<Pe;Mr++)yr&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,F.get(S).__webglTexture,H,at+Mr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,F.get(z).__webglTexture,pe,St+Mr)),L.blitFramebuffer(Ve,tt,ye,we,Le,lt,ye,we,L.DEPTH_BUFFER_BIT,L.NEAREST);E.bindFramebuffer(L.READ_FRAMEBUFFER,null),E.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||F.has(S)){let Mt=F.get(S),Xi=F.get(z);E.bindFramebuffer(L.READ_FRAMEBUFFER,Z),E.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let ut=0;ut<Pe;ut++)yr?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.__webglTexture,H,at+ut):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Mt.__webglTexture,H),ht?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xi.__webglTexture,pe,St+ut):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xi.__webglTexture,pe),H!==0?L.blitFramebuffer(Ve,tt,ye,we,Le,lt,ye,we,L.COLOR_BUFFER_BIT,L.NEAREST):ht?L.copyTexSubImage3D(Ie,pe,Le,lt,St+ut,Ve,tt,ye,we):L.copyTexSubImage2D(Ie,pe,Le,lt,Ve,tt,ye,we);E.bindFramebuffer(L.READ_FRAMEBUFFER,null),E.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ht?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Ie,pe,Le,lt,St,ye,we,Pe,pt,xt,dt.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(Ie,pe,Le,lt,St,ye,we,Pe,pt,dt.data):L.texSubImage3D(Ie,pe,Le,lt,St,ye,we,Pe,pt,xt,dt):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pe,Le,lt,ye,we,pt,xt,dt.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pe,Le,lt,dt.width,dt.height,pt,dt.data):L.texSubImage2D(L.TEXTURE_2D,pe,Le,lt,ye,we,pt,xt,dt);E.pixelStorei(L.UNPACK_ROW_LENGTH,Bt),E.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tr),E.pixelStorei(L.UNPACK_SKIP_PIXELS,ii),E.pixelStorei(L.UNPACK_SKIP_ROWS,yi),E.pixelStorei(L.UNPACK_SKIP_IMAGES,Wi),pe===0&&z.generateMipmaps&&L.generateMipmap(Ie),E.unbindTexture()},this.initRenderTarget=function(S){F.get(S).__webglFramebuffer===void 0&&N.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?N.setTextureCube(S,0):S.isData3DTexture?N.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?N.setTexture2DArray(S,0):N.setTexture2D(S,0),E.unbindTexture()},this.resetState=function(){U=0,Q=0,W=null,E.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var Bx=new C;var sa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Kt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},c_=new ka(-1,1,1,-1,0,1),ul=class extends ct{constructor(){super(),this.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new We([0,2,0,0,2,0],2))}},d_=new ul,er=class{constructor(t){this._mesh=new Ct(d_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,c_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var oa=class extends Kt{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof vt?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=vi.clone(t.uniforms),this.material=new vt({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new er(this.material)}render(t,i,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Wa=class extends Kt{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,r){let a=t.getContext(),n=t.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),n.buffers.stencil.setFunc(a.ALWAYS,s,4294967295),n.buffers.stencil.setClear(o),n.buffers.stencil.setLocked(!0),t.setRenderTarget(r),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(a.EQUAL,1,4294967295),n.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),n.buffers.stencil.setLocked(!0)}},ss=class extends Kt{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var os=class{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){let r=t.getSize(new ae);this._width=r.width,this._height=r.height,i=new It(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ft}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new oa(sa),this.copyPass.material.blending=mi,this.timer=new Hu}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let i=this.renderer.getRenderTarget(),r=!1;for(let a=0,n=this.passes.length;a<n;a++){let s=this.passes[a];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),s.render(this.renderer,this.writeBuffer,this.readBuffer,t,r),s.needsSwap){if(r){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Wa!==void 0&&(s instanceof Wa?r=!0:s instanceof ss&&(r=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){let i=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;let r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(r,a)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ls=class extends Kt{constructor(t,i,r=null,a=null,n=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=r,this.clearColor=a,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Xe}render(t,i,r){let a=t.autoClear;t.autoClear=!1;let n,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(n=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(n),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),t.autoClear=a}};var $u={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var la=class e extends Kt{constructor(t,i=1,r,a){super(),this.strength=i,this.radius=r,this.threshold=a,this.resolution=t!==void 0?new ae(t.x,t.y):new ae(256,256),this.clearColor=new Xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new It(n,s,{type:Ft,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new It(n,s,{type:Ft,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let c=new It(n,s,{type:Ft,depthBuffer:!1});c.texture.name="UnrealBloomPass.v"+u,c.texture.generateMipmaps=!1,this.renderTargetsVertical.push(c),n=Math.round(n/2),s=Math.round(s/2)}let o=$u;this.highPassUniforms=vi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vi.clone(sa.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:sa.vertexShader,fragmentShader:sa.fragmentShader,premultipliedAlpha:!0,blending:gi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Xe,this._oldClearAlpha=1,this._basic=new ts,this._fsQuad=new er(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let r=Math.round(t/2),a=Math.round(i/2);this.renderTargetBright.setSize(r,a);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(r,a),this.renderTargetsVertical[n].setSize(r,a),this.separableBlurMaterials[n].uniforms.invSize.value=new ae(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2)}render(t,i,r,a,n){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let s=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),n&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=s}_getSeparableBlurMaterial(t){let i=[],r=t/3;for(let s=0;s<t;s++)i.push(.39894*Math.exp(-.5*s*s/(r*r))/r);let a=[],n=[];for(let s=1;s<t;s+=2){let o=i[s],l=s+1<t?i[s+1]:0,h=o+l;a.push((s*o+(s+1)*l)/h),n.push(h)}return new vt({defines:{KERNEL_PAIRS:a.length},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},centerWeight:{value:i[0]},gaussianOffsets:{value:a},gaussianWeights:{value:n}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new vt({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};la.BlurDirectionX=new ae(1,0);la.BlurDirectionY=new ae(0,1);var Xa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var hs=class extends Kt{constructor(){super(),this.isOutputPass=!0,this.uniforms=vi.clone(Xa.uniforms),this.material=new sl({name:Xa.name,uniforms:this.uniforms,vertexShader:Xa.vertexShader,fragmentShader:Xa.fragmentShader}),this._fsQuad=new er(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xn?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jn?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qn?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yn?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Kn?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Jn?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Zn&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Qu=11,Ze=()=>(Qu=Qu*16807%2147483647)/2147483647,Ci=(e,t,i)=>{let r=Math.min(1,Math.max(0,(i-e)/(t-e)));return r*r*(3-2*r)},cs=(e,t,i)=>e+(t-e)*i,cl=(e,t,i)=>e.map((r,a)=>cs(r,t[a],i)),Jt=[{id:"61",x:.494,head:.4,feet:.609,time:"Noon",zh:"\u6B63\u5348",title:"Hay Bale Canyon",titleZh:"\u8349\u579B\u5CE1\u8C37",place:"On the road",look:{tint:[1.02,1,.98],sat:1.04,light:[1,.93,.8]},fx:{parts:"chaff",sun:[.447,.391]}},{id:"42",x:.358,head:.564,feet:.7,time:"Afternoon",zh:"\u5348\u540E",title:"Framed Summit",titleZh:"\u5CA9\u9699\u4E2D\u7684\u96EA\u5C71",place:"Meili, Yunnan",look:{tint:[.97,1,1.04],sat:1,light:[.82,.9,1]},fx:{parts:"snow"}},{id:"66",x:.418,head:.556,feet:.624,time:"Sunset",zh:"\u65E5\u843D",title:"Red on the Ridge",titleZh:"\u5C71\u810A\u4E0A\u7684\u7EA2",place:"Qinghai\u2013Gansu",look:{tint:[1.05,.99,.93],sat:1.04,light:[1,.82,.6]},fx:{parts:"sand"}},{id:"65",x:.552,head:.588,feet:.655,time:"Night",zh:"\u591C",title:"Star Trails over Yardang",titleZh:"\u96C5\u4E39\u661F\u8F68",place:"Qinghai\u2013Gansu",look:{tint:[.96,.99,1.05],sat:1,light:[.75,.85,1]},fx:{parts:"stars",nebula:[.492,.407],rocks:!0,beam:!0}}],ec={uniforms:{texA:{value:null},texB:{value:null},depA:{value:null},depB:{value:null},aspA:{value:1.5},aspB:{value:1.5},sa:{value:1.78},cA:{value:new ae(.5,.5)},cB:{value:new ae(.5,.5)},zA:{value:1},zB:{value:1},dollyA:{value:0},dollyB:{value:0},mouse:{value:new ae},par:{value:.006},prog:{value:0},t:{value:0},focusD:{value:.5},blurK:{value:0},px:{value:new ae(1/1280,1/720)},tint:{value:new C(1,1,1)},sat:{value:1},light:{value:new C(1,1,1)},expo:{value:0},subj:{value:new C(.5,.5,.1)},pool:{value:.18},dim:{value:0}},vertexShader:"varying vec2 vS; void main(){ vS = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }",fragmentShader:`
    uniform sampler2D texA, texB, depA, depB;
    uniform float aspA, aspB, sa, zA, zB, dollyA, dollyB, par, prog, t, focusD, blurK, sat, expo, pool, dim;
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
      // 3D mode: the flat picture falls back into a dark room behind the diorama
      float lum = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(col, vec3(lum) * vec3(0.16, 0.17, 0.21), dim);
      gl_FragColor = vec4(col, 1.0);
    }`},tc={uniforms:{tex:{value:null},dep:{value:null},disp:{value:0},tilt:{value:0},texel:{value:new ae(1/1024,1/600)},tint:{value:new C(1,1,1)},sat:{value:1},lightDir:{value:new C(.3,.5,1)},relief:{value:0},expo:{value:0}},vertexShader:`
    uniform sampler2D dep; uniform float disp; uniform vec2 texel;
    varying vec2 vUv; varying float vD;
    float D(vec2 u){ return texture2D(dep, u).r; }
    void main(){
      vUv = uv;
      // a little smoothing so cliffs bend instead of tearing
      float d = D(uv) * 0.4 + (D(uv + vec2(texel.x * 2.0, 0.0)) + D(uv - vec2(texel.x * 2.0, 0.0)) + D(uv + vec2(0.0, texel.y * 2.0)) + D(uv - vec2(0.0, texel.y * 2.0))) * 0.15;
      vD = d;
      vec3 p = position; p.z += pow(d, 1.35) * disp;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    }`,fragmentShader:`
    uniform sampler2D tex, dep; uniform vec2 texel; uniform vec3 tint, lightDir; uniform float sat, relief, tilt, expo;
    varying vec2 vUv; varying float vD;
    void main(){
      vec3 col = texture2D(tex, vUv).rgb;
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(vec3(l), col, sat) * tint;
      // relief shading from the depth slope
      float dx = texture2D(dep, vUv + vec2(texel.x * 3.0, 0.0)).r - texture2D(dep, vUv - vec2(texel.x * 3.0, 0.0)).r;
      float dy = texture2D(dep, vUv + vec2(0.0, texel.y * 3.0)).r - texture2D(dep, vUv - vec2(0.0, texel.y * 3.0)).r;
      vec3 n = normalize(vec3(-dx * 9.0, -dy * 9.0, 1.0));
      float lam = clamp(dot(n, normalize(lightDir)), 0.0, 1.0);
      float shade = 0.8 + 0.42 * lam;
      float cliff = smoothstep(0.03, 0.12, abs(dx) + abs(dy));          // torn edges read as dark rock faces
      col *= mix(1.0, shade, relief) * (1.0 - cliff * 0.55 * tilt);
      // plaster wash for the bas-relief look as it lifts, colour returns as it settles
      vec3 plaster = vec3(0.86, 0.84, 0.8) * (0.35 + 0.85 * lam);
      col = mix(col, plaster, relief * 0.05);
      col = col * (1.0 + expo * 1.6) / (1.0 + col * expo * 0.55);
      // the far edge of the print fades into the dark room
      float edge = smoothstep(0.0, 0.035, vUv.x) * smoothstep(1.0, 0.965, vUv.x) * smoothstep(0.0, 0.035, vUv.y) * smoothstep(1.0, 0.965, vUv.y);
      gl_FragColor = vec4(col * mix(1.0, edge, tilt), 1.0);
    }`},ac=(e,t=128)=>{let i=document.createElement("canvas");i.width=i.height=t,e(i.getContext("2d"),t);let r=new ru(i);return r.colorSpace=Vt,r},ic=ac((e,t)=>{let i=e.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.18,"rgba(240,244,255,0.5)"),i.addColorStop(.5,"rgba(210,220,240,0.1)"),i.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=i,e.fillRect(0,0,t,t)}),p_=ac((e,t)=>{let i=t/2;e.globalCompositeOperation="lighter";for(let a=0;a<12;a++){let n=a*Math.PI/6+a%2*.12,s=a%2?t*.32:t*.48,o=e.createLinearGradient(i,i,i+Math.cos(n)*s,i+Math.sin(n)*s);o.addColorStop(0,"rgba(255,250,235,0.9)"),o.addColorStop(1,"rgba(255,240,210,0)"),e.strokeStyle=o,e.lineWidth=a%2?1.2:2,e.beginPath(),e.moveTo(i,i),e.lineTo(i+Math.cos(n)*s,i+Math.sin(n)*s),e.stroke()}let r=e.createRadialGradient(i,i,0,i,i,t*.2);r.addColorStop(0,"rgba(255,255,250,1)"),r.addColorStop(1,"rgba(255,240,210,0)"),e.fillStyle=r,e.fillRect(0,0,t,t)},256),f_={chaff:{n:160,size:[2.5,7],col:[1,.88,.6],vel:[.35,.22,0],sway:.4,tw:.3,glow:1,band:[0,.95],soft:1,alpha:.9},snow:{n:520,size:[2,9],col:[.96,.98,1],vel:[.14,-.6,0],sway:.25,tw:.1,glow:0,band:[0,1],soft:1,alpha:.85},sand:{n:900,size:[1.4,4],col:[1,.9,.74],vel:[-1.8,.06,0],sway:.1,tw:.2,glow:0,band:[.5,1],soft:.6,alpha:1.3,streak:.7},stars:{n:260,size:[1,3.6],col:[.86,.9,1],vel:[0,.02,0],sway:.02,tw:1,glow:1,band:[0,.6],soft:.3,alpha:1}};function m_(e,t){let i=f_[e],r=new ct,a=new Float32Array(i.n*3),n=new Float32Array(i.n);for(let l=0;l<i.n;l++)a[l*3]=Ze(),a[l*3+1]=Ze(),a[l*3+2]=Ze(),n[l]=Ze();r.setAttribute("position",new Ot(a,3)),r.setAttribute("seed",new Ot(n,1));let s=new vt({transparent:!0,depthWrite:!1,depthTest:!1,blending:i.glow?gi:cr,uniforms:{t:{value:0},k:{value:0},px:{value:1},col:{value:new Xe(...i.col)},box:{value:new C(30,2*t,14)},alpha:{value:i.alpha||1},y0:{value:0},vel:{value:new C(...i.vel)},sway:{value:i.sway},tw:{value:i.tw},smin:{value:i.size[0]},smax:{value:i.size[1]},soft:{value:i.soft},streak:{value:i.streak||0},expo:{value:0},shift:{value:new ae}},vertexShader:`uniform float t, px, sway, tw, smin, smax, y0, expo; uniform vec3 box, vel; uniform vec2 shift; attribute float seed; varying float vA; varying float vS;
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
        gl_FragColor = vec4(col, min(1.0, a * vA * k * 0.95 * alpha)); }`}),o=new il(r,s);return o.frustumCulled=!1,o.renderOrder=6,o.userData.P=i,o}function g_(e){let t=new ct,i=new Float32Array(e*3),r=new Float32Array(e*2),a=()=>(Ze()+Ze()+Ze()+Ze()-2)*.87,n=[];for(let l=0;l<70;l++){let h=Math.pow(Ze(),.8)*2.4,u=Ze()*6.283;n.push([Math.cos(u)*h,a()*1.5,Math.sin(u)*h,.25+Ze()*.7])}for(let l=0;l<e;l++){let h,u,p;if(l%5===0)h=a()*2.2,u=a()*2.4,p=a()*2.2;else{let _=n[Math.floor(Ze()*n.length)];h=_[0]+a()*_[3],u=_[1]+a()*_[3]*1.3,p=_[2]+a()*_[3]}let c=Math.hypot(h,p),f=Math.atan2(p,h)+c*.9;i[l*3]=Math.cos(f)*c,i[l*3+1]=u,i[l*3+2]=Math.sin(f)*c,r[l*2]=Ze(),r[l*2+1]=.3+Ze()*Ze()*1.6}t.setAttribute("position",new Ot(i,3)),t.setAttribute("aux",new Ot(r,2));let s=new vt({transparent:!0,depthWrite:!1,depthTest:!1,blending:gi,uniforms:{t:{value:0},px:{value:1},k:{value:1}},vertexShader:`uniform float t; uniform float px; attribute vec2 aux; varying float vA;
      void main(){ vec3 q = position; float r = length(q.xz);
        float ang = t * (0.55 / (r + 0.6)); float c = cos(ang), s = sin(ang); q.xz = mat2(c,-s,s,c) * q.xz;
        q.y += sin(t*0.4 + r*1.7 + aux.x*6.28)*0.12;
        vec4 mv = modelViewMatrix * vec4(q,1.); gl_Position = projectionMatrix * mv;
        float tw = 0.45 + 0.55 * pow(0.5 + 0.5*sin(t*(1.5+aux.x*3.) + aux.x*40.), 3.);
        vA = tw * (1.0 - smoothstep(1.5, 4.0, length(q)) * 0.75);
        gl_PointSize = aux.y * px * 36.0 / -mv.z; }`,fragmentShader:`uniform float k; varying float vA; void main(){ vec2 d = gl_PointCoord - .5; float a = smoothstep(.5, .0, length(d));
      gl_FragColor = vec4(vec3(0.92,0.95,1.0) * a * vA * 0.24 * k, 1.0); }`}),o=new il(t,s);return o.frustumCulled=!1,o}function rc(e,t,i){return Math.sin(e*1.7+Math.sin(t*2.3+i))*Math.cos(i*1.9+Math.sin(e*1.3))}function us(e,t,i){let r=new nl(1,t),a=r.attributes.position,n=new C;for(let s=0;s<a.count;s++){n.fromBufferAttribute(a,s);let o=1+.32*rc(n.x*2+e,n.y*2-e,n.z*2+e*.5)+.12*rc(n.x*6-e,n.y*6,n.z*6+e);n.multiplyScalar(o),n.set(n.x*i[0],n.y*i[1],n.z*i[2]),a.setXYZ(s,n.x,n.y,n.z)}return r.index&&(r=r.toNonIndexed()),r.computeVertexNormals(),r}var v_=()=>new vt({transparent:!0,depthWrite:!1,depthTest:!1,blending:gi,side:ui,uniforms:{k:{value:0}},vertexShader:`varying vec3 vN; varying vec3 vV; varying float vY;
    void main(){ vec4 w = modelMatrix*vec4(position,1.); vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - w.xyz); vY = uv.y; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform float k; varying vec3 vN; varying vec3 vV; varying float vY;
    void main(){ float rim = pow(abs(dot(normalize(vN), vV)), 2.5); float fall = smoothstep(0.0, 0.15, vY) * (0.2 + 0.8 * pow(vY, 1.4));
      gl_FragColor = vec4(vec3(0.8, 0.87, 1.0) * rim * fall * 0.16 * k, 1.0); }`}),__={uniforms:{tDiffuse:{value:null},t:{value:0},res:{value:new ae(1,1)},fade:{value:0},vig:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float t, fade, vig; uniform vec2 res; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)) + t*7.) * 43758.5453); }
    void main(){
      vec3 col = texture2D(tDiffuse, vUv).rgb;
      vec2 e = (vUv - .5) * vec2(res.x / res.y, 1.);
      col *= mix(1.0 - 0.32 * vig, 1.0, smoothstep(1.25, 0.45, length(e * vec2(.7, 1.0))));
      col += (h(vUv * res) - .5) * 0.016;                              // a whisper of grain, no more
      gl_FragColor = vec4(col * fade, 1.);
    }`};function nc(e,t,i,r={}){var F;let a=(F=r.lite)!=null?F:!1,n=new Ju({canvas:e,antialias:!1,powerPreference:"high-performance"}),s=Math.min(window.devicePixelRatio||1,a?1.5:2);n.setPixelRatio(s),n.toneMapping=ai;let o=n.capabilities.getMaxAnisotropy(),l=new qh,h=new qt(30,1,.1,200);h.position.set(0,0,20);let u=20*Math.tan(Hh.degToRad(15)),p=(N,k)=>{let q=new Wt(N);return k&&(q.colorSpace=Vt),q.anisotropy=o,q.generateMipmaps=!0,q.minFilter=Ni,q.magFilter=At,q.needsUpdate=!0,q},c=t.map(N=>p(N,!0)),f=i.map(N=>p(N,!1)),_=i.map(N=>{let q=Math.round(256*N.height/N.width),se=document.createElement("canvas");se.width=256,se.height=q;let D=se.getContext("2d",{willReadFrequently:!0});return D.drawImage(N,0,0,256,q),{w:256,h:q,data:D.getImageData(0,0,256,q).data}}),y=(N,k,q)=>{let se=_[N],D=Math.min(se.w-1,Math.max(0,Math.round(k*se.w))),te=Math.min(se.h-1,Math.max(0,Math.round(q*se.h)));return se.data[(te*se.w+D)*4]/255},m=new Ct(new aa(2,2),new vt({...ec,uniforms:vi.clone(ec.uniforms),depthWrite:!1,depthTest:!1}));m.frustumCulled=!1,m.renderOrder=-10,l.add(m);let d=m.material.uniforms,b=a?150:300,w=new Ct(new aa(1,1,b,b),new vt({...tc,uniforms:vi.clone(tc.uniforms)}));w.frustumCulled=!1,w.renderOrder=1;let v=new hr;v.add(w),l.add(v);let T=w.material.uniforms,A=new Vu(14674175,2.2);A.position.set(0,10,4),l.add(A),l.add(new Gu(9410730,855570,.5));let R=new hr;l.add(R);let g=new rs(.3,1,1,40,1,!0);g.translate(0,.5,0);let M=new Ct(g,v_());M.renderOrder=2,R.add(M);let I=g_(a?6e3:12e3);I.renderOrder=3,l.add(I);let P=new Qn(new Ba({map:ic,blending:gi,depthWrite:!1,depthTest:!1,opacity:0}));P.renderOrder=3,l.add(P);let B=new Ou({color:7303801,roughness:.95}),Z=[us(1.3,1,[1,.75,.9]),us(4.1,1,[1.25,.35,.9]),us(7.7,1,[.55,.55,1.6]),us(2.9,0,[1,.8,1])],O=a?50:100,U=Z.map(N=>{let k=new eu(N,B,O);return k.frustumCulled=!1,k.renderOrder=4,k.count=0,R.add(k),k}),Q=()=>(Ze()+Ze()+Ze()-1.5)/1.5,W=[];for(let N=0;N<O;N++){let k=Ze()<.2;W.push({set:Math.floor(Ze()*Z.length),x:k?(Ze()-.5)*7:Q()*1.3,z:Ze()<.12?3+Ze()*6:(Ze()-.5)*6,y0:Ze(),v:.006+Math.pow(Ze(),1.8)*.05,dx:(Ze()-.5)*.5,sw:Ze()*6.283,swA:.02+Ze()*.08,s:.003+Math.pow(Ze(),5)*.06+Ze()*.004,sq:[.7+Ze()*.6,.7+Ze()*.6,.7+Ze()*.6],ax:new C(Ze()-.5,Ze()-.5,Ze()-.5).normalize(),spin:(.08+Math.pow(Ze(),2)*1.4)*(Ze()<.5?-1:1),q0:new Zt().setFromEuler(new Qi(Ze()*6,Ze()*6,Ze()*6))})}let ce=new Qn(new Ba({map:p_,blending:gi,depthWrite:!1,depthTest:!1,color:16774108}));ce.renderOrder=7,l.add(ce);let Y=new Qn(new Ba({map:ic,blending:gi,depthWrite:!1,depthTest:!1,color:16769712}));Y.renderOrder=7,l.add(Y);let J=Jt.map(N=>{let k=m_(N.fx.parts,u);return l.add(k),k}),ie=new os(n);ie.addPass(new ls(l,h));let Oe=new la(new ae(256,256),.22,.5,.93);ie.addPass(Oe),ie.addPass(new hs);let Ee=new oa(__);ie.addPass(Ee);let Ke=1,Ge=1,K=1;function X(N,k){Ge=N,K=k,Ke=N/k,n.setSize(N,k,!1),ie.setSize(N,k),h.aspect=Ke,h.updateProjectionMatrix(),d.sa.value=Ke,d.px.value.set(1/(N*1),1/(k*1)),Ee.uniforms.res.value.set(N*s,k*s),I.material.uniforms.px.value=s*k/900,J.forEach(q=>{q.material.uniforms.px.value=s*k/900,q.material.uniforms.box.value.set(2*u*Ke*1.15,2*u,14)})}let $=N=>t[N].width/t[N].height,me=N=>{let k=$(N);return Ke>k?[1,k/Ke]:[Ke/k,1]},Ae=N=>[Jt[N].x,(Jt[N].head+Jt[N].feet)/2],de=(N,k)=>{let q=me(N),[se,D]=Ae(N),te=q[0]/k/2+.004,fe=q[1]/k/2+.004;return[Math.min(1-te,Math.max(te,se)),Math.min(1-fe,Math.max(fe,cs(.5,D,.5)))]},Fe=(N,k,q,se,D)=>{let te=me(N);return[.5+(se-q[0])*k/te[0],.5+(D-q[1])*k/te[1]]},ne=(N,k,q,se,D)=>{let te=me(N);return[q[0]+(se-.5)*te[0]/k,q[1]+(D-.5)*te[1]/k]},re=(N,k)=>[(N-.5)*2*u*Ke,(.5-k)*2*u],ue=1.07,ve=.06,_e=new Je,Te=new Zt,De=new Zt,ze=new C,Be=new C,L=null;function rt(N,k,q){let se=Jt.length;k=Math.min(se-1,Math.max(0,k));let D=Math.min(se-1,Math.floor(k)),te=Math.min(se-1,D+1),fe=k-D,xe=D===te?0:Math.min(1,Math.max(0,(fe-.16)/.68)),oe=Ci(.2,.8,xe),ge=Jt[D],Ce=Jt[te],Ne=ue+ve*fe,$e=ue+ve*(fe-1),G=de(D,Ne),ee=de(te,$e);d.texA.value=c[D],d.texB.value=c[te],d.depA.value=f[D],d.depB.value=f[te],d.aspA.value=$(D),d.aspB.value=$(te),d.cA.value.set(...G),d.cB.value.set(...ee),d.zA.value=Ne,d.zB.value=$e,d.dollyA.value=.035*fe,d.dollyB.value=.035*Math.max(0,fe-1+0),d.mouse.value.set(q.mouse[0],q.mouse[1]),d.prog.value=D===te?0:xe>=1?1.0001:xe,xe>=1&&(d.texA.value=c[te],d.depA.value=f[te],d.aspA.value=$(te),d.cA.value.set(...ee),d.zA.value=$e,d.dollyA.value=0,d.prog.value=0),d.t.value=N,d.focusD.value=q.focus.d,d.blurK.value=q.focus.k*(xe>0&&xe<1?.3:1);let le=gt=>cl(ge.look[gt],Ce.look[gt],oe);d.tint.value.set(...le("tint")),d.sat.value=cs(ge.look.sat,Ce.look.sat,oe),d.light.value.set(...le("light")),d.expo.value=q.expo;let be=Fe(D,Ne,G,ge.x,ge.feet),Re=Fe(D,Ne,G,ge.x,ge.head),he=Fe(te,$e,ee,Ce.x,Ce.feet),Se=Fe(te,$e,ee,Ce.x,Ce.head),Ue=cl(be,he,oe),mt=cl(Re,Se,oe),nt=Math.max(.02,Ue[1]-mt[1]);d.subj.value.set(Ue[0],(Ue[1]+mt[1])/2,nt),d.pool.value=.16*(1-xe*(1-xe)*4);let $t=1-oe,ni=oe;J.forEach((gt,Lt)=>{let Qt=Lt===D?$t:Lt===te?ni:0;if(gt.visible=Qt>.01,!gt.visible)return;let Dt=gt.material.uniforms;Dt.t.value=N,Dt.k.value=Qt*(1-q.print*.8),Dt.expo.value=q.expo,Dt.shift.value.set(q.mouse[0],-q.mouse[1]);let Rt=gt.userData.P.band;Dt.y0.value=(.5-Rt[1])*2*u,Dt.box.value.y=(Rt[1]-Rt[0])*2*u});let ja=1-Ci(0,.35,xe),ha=Ci(0,.35,xe),Gi=(ge.fx.sun?ja:0)+(Ce.fx.sun&&D!==te?ha:0);if(ce.visible=Y.visible=Gi>.01,Gi>.01){let gt=ge.fx.sun?ge:Ce,Lt=ge.fx.sun?D:te,Qt=ge.fx.sun?Ne:$e,Dt=ge.fx.sun?G:ee,[Rt,xi]=re(...Fe(Lt,Qt,Dt,...gt.fx.sun)),ei=(ge.fx.sun?be[1]-Re[1]:he[1]-Se[1])*2*u,ti=1+.05*Math.sin(N*1.7)+q.expo*.6;ce.position.set(Rt,xi,1),ce.scale.setScalar(ei*1.1*ti),ce.material.rotation=N*.04,ce.material.opacity=Gi,Y.position.set(Rt,xi,1),Y.scale.setScalar(ei*1.7*ti),Y.material.opacity=.5*Gi}let Vi=(ge.fx.nebula?ja:0)+(Ce.fx.nebula&&D!==te?ha:0);if(I.visible=P.visible=R.visible=Vi>.01,Vi>.01){let gt=ge.fx.nebula?ge:Ce,Lt=ge.fx.nebula?D:te,Qt=ge.fx.nebula?Ne:$e,Dt=ge.fx.nebula?G:ee,Rt=Fe(Lt,Qt,Dt,...gt.fx.nebula),[xi,ei]=re(Math.min(.85,Math.max(.15,Rt[0])),Math.min(.5,Math.max(.12,Rt[1]))),ti=u*.17;I.position.set(xi+q.mouse[0]*.15,ei-q.mouse[1]*.1,0),I.scale.setScalar(ti/2.4),I.rotation.set(.45,N*.05,.15),I.material.uniforms.t.value=N,I.material.uniforms.k.value=Vi*(1+q.expo),P.position.copy(I.position),P.scale.set(ti*3,ti*4,1),P.material.opacity=.08*Vi;let ki=ge.fx.nebula?be:he,xr=ge.fx.nebula?Re:Se,[ps,qa]=re(...ki),Ya=(ki[1]-xr[1])*2*u,ua=u*1.3+2-qa;R.position.set(ps,qa,0),R.rotation.y=q.mouse[0]*.3;let S=Math.max(.25,Ya*.9);M.scale.set(S,ua,S),M.material.uniforms.k.value=Vi*(.8+q.expo);let z=Math.max(.6,Ya*1.6);U.forEach(j=>{j.count=0});for(let j=0;j<W.length;j++){let V=W[j],H=(V.y0+N*V.v)%1,pe=Ci(0,.07,H)*Ci(1,.7,H)*Vi;Be.set(V.x*z+V.dx*H*z+Math.sin(N*.4+V.sw)*V.swA*z,H*ua*.98-.3,V.z),De.setFromAxisAngle(V.ax,N*V.spin),Te.copy(V.q0).premultiply(De);let ye=V.s*u*2*.3*pe+1e-4;ze.set(ye*V.sq[0],ye*V.sq[1],ye*V.sq[2]),_e.compose(Be,Te,ze);let we=U[V.set];we.setMatrixAt(we.count++,_e)}U.forEach(j=>{j.instanceMatrix.needsUpdate=!0})}let Hi=q.dio||{tilt:0,rx:0,ry:0,lx:0,ly:0},si=Hi.tilt;if(v.visible=si>.002,d.dim.value=Ci(0,.5,si)*.92,v.visible){let gt=oe>.5,Lt=gt?te:D,Qt=gt?$e:Ne,Dt=gt?ee:G,Rt=me(Lt),xi=2*u*Ke*Qt/Rt[0],ei=2*u*Qt/Rt[1];w.scale.set(xi,ei,1),w.position.set((.5-Dt[0])*xi,(Dt[1]-.5)*ei,0),T.tex.value=c[Lt],T.dep.value=f[Lt],T.texel.value.set(1/i[Lt].width,1/i[Lt].height);let ti=u*.55;T.disp.value=ti*Ci(0,1,si),T.tilt.value=si,T.relief.value=Ci(.05,.9,si);let ki=gt?Ce:ge;T.tint.value.set(...ki.look.tint),T.sat.value=ki.look.sat,T.expo.value=q.expo,T.lightDir.value.set(.35+Hi.lx*.9,.55-Hi.ly*.9,.9),v.position.set(0,0,0),w.position.z=-ti*.45*Ci(0,1,si),v.rotation.set(Hi.rx,Hi.ry,0),v.scale.setScalar(1-.16*Ci(0,1,si)),J.forEach(xr=>{xr.visible&&(xr.material.uniforms.k.value*=1-si*.6)})}return Ee.uniforms.t.value=N,Ee.uniforms.fade.value=q.fade,Ee.uniforms.vig.value=1-q.print*.6,ie.render(),L={ia:D,ib:te,za:Ne,zb:$e,ca:G,cb:ee,mixE:oe,prog:xe},{scene:oe>.5?te:D,prog:xe,subject:{x:(mt[0]+Ue[0])/2,top:mt[1],bottom:Ue[1],h:nt}}}function qe(N,k){if(!L)return .5;let q=L.mixE>.5,se=q?L.ib:L.ia,[D,te]=ne(se,q?L.zb:L.za,q?L.cb:L.ca,N,k);return y(se,D,te)}function je(N){let k=Jt[N];return y(N,k.x,cs(k.head,k.feet,.6))}let E={n:0,sum:0,lastT:0,scale:1};function x(N){E.lastT&&(E.sum+=Math.min(100,N-E.lastT),E.n++),E.lastT=N,E.n===90&&(E.sum/E.n>24&&E.scale>.55&&(E.scale=Math.max(.55,E.scale*.82),n.setPixelRatio(s*E.scale),ie.setPixelRatio(s*E.scale),Ee.uniforms.res.value.set(Ge*s*E.scale,K*s*E.scale)),E.n=0,E.sum=0)}return{resize:X,frame:rt,adapt:x,depthAt:qe,subjectDepth:je,N:Jt.length}}var _i=(e,t=0,i=1)=>Math.min(i,Math.max(t,e)),sc=(e,t,i)=>{let r=_i((i-e)/(t-e));return r*r*(3-2*r)},oc=e=>new Promise((t,i)=>{let r=new Image;r.decoding="async",r.onload=()=>t(r),r.onerror=i,r.src=e}),ds=e=>String(e).padStart(2,"0"),lc=["1/250","1/125","1/60","1/30","1/15","1/8","1/4","1/2",'1"','2"','4"','8"','15"','30"'],hc={get(e){try{return localStorage.getItem(e)}catch{return null}},set(e,t){try{localStorage.setItem(e,t)}catch{}}};function uc(e,{reduced:t=!1,lenis:i=null}={}){let r=e.querySelector(".vf__stage"),a=e.querySelector("canvas"),n=[...e.querySelectorAll("[data-chapter]")],s=[...e.querySelectorAll("[data-tick]")],o=e.querySelector(".vf__af"),l=e.querySelector(".vf__af b"),h=e.querySelector("[data-vf-info]"),u=e.querySelector(".vf__meter i"),p=e.querySelector("[data-vf-shutter]"),c=e.querySelector("[data-vf-count]"),f=e.querySelector(".vf__curtain"),_=e.querySelector(".vf__flash"),y=Jt.length,m=matchMedia("(max-width: 760px)").matches,d=window.BENEATH_TEX||{},b=null,w=!1,v=!0,T=0,A=0,R=0,g=+(hc.get("x1ng:roll")||0);c.textContent=ds(g%36+1);let M={x:0,y:0,sx:0,sy:0,px:-1,py:-1},I={d:.5,k:0,hunt:-1e9,manual:-1e9,mx:.5,my:.5,md:.5},P={down:!1,t0:0,x:0,y:0,active:!1,expo:0},B=-1,Z=0,O=matchMedia("(hover: hover) and (pointer: fine)").matches,U={on:!1,x0:0,y0:0,tx:0,ty:0,rx:0,ry:0,vx:0,vy:0,tilt:t?0:1,vt:0,intro:t?0:1,lx:0,ly:0};/[?&]still/.test(location.search)&&(window.__dio=U);let Q=Promise.all(Jt.flatMap(X=>[oc(d[X.id]||`media/beneath/${X.id}.webp`),oc(d[X.id+"-d"]||`media/beneath/${X.id}-d.png`)])).then(X=>{let $=X.filter((de,Fe)=>Fe%2===0),me=X.filter((de,Fe)=>Fe%2===1);b=nc(a,$,me,{lite:m});let Ae=()=>b.resize(r.clientWidth,r.clientHeight);Ae(),addEventListener("resize",Ae),I.d=b.subjectDepth(0),Ge(0,!0)}).catch(X=>{console.warn(X),e.classList.add("is-fallback")}),W=()=>e.getBoundingClientRect().top+scrollY,ce=()=>innerHeight*.9,Y=()=>Math.max(1,e.offsetHeight-innerHeight-ce()),J=X=>{let $=W()+Y()*X/(y-1);i?i.scrollTo($,{duration:1.8}):scrollTo({top:$,behavior:"smooth"})};s.forEach((X,$)=>X.addEventListener("click",me=>{me.stopPropagation(),J($)})),new IntersectionObserver(([X])=>{v=X.isIntersecting},{rootMargin:"120px"}).observe(e);let ie=X=>{let $=r.getBoundingClientRect();return[(X.clientX-$.left)/$.width,(X.clientY-$.top)/$.height]};r.addEventListener("pointermove",X=>{let[$,me]=ie(X);M.x=$*2-1,M.y=me*2-1,M.px=$,M.py=me,P.down&&Math.hypot(X.clientX-P.x,X.clientY-P.y)>10&&!P.active&&(P.down=!1,O&&!t&&b&&(U.on=!0,U.intro=0,U.x0=X.clientX,U.y0=X.clientY,e.classList.add("is-orbit"))),U.on&&(U.tx=_i((X.clientX-U.x0)/r.clientWidth*1.9,-.95,.95),U.ty=_i((X.clientY-U.y0)/r.clientHeight*1.3,-.6,.6))},{passive:!0}),r.addEventListener("pointerleave",()=>{M.x=M.y=0}),r.addEventListener("contextmenu",X=>{P.active&&X.preventDefault()});let Oe=X=>X.target.closest("a, button, [data-tick]");r.addEventListener("pointerdown",X=>{Oe(X)||X.button>0||!b||(P.down=!0,P.t0=performance.now(),P.x=X.clientX,P.y=X.clientY,P.active=!1)});let Ee=X=>{if(U.on){U.on=!1,U.tx=U.ty=0,e.classList.remove("is-orbit");return}if(!P.down)return;P.down=!1;let $=performance.now()-P.t0;if(P.active){P.active=!1,e.classList.remove("is-exposing"),Ke(!0);return}if($<350&&X&&!Oe(X)){let[me,Ae]=ie(X);I.manual=performance.now(),I.mx=me,I.my=Ae,I.md=b.depthAt(me,Ae),Ke(!1)}};addEventListener("pointerup",Ee),addEventListener("pointercancel",()=>{P.down=!1,P.active=!1,e.classList.remove("is-exposing")});function Ke(X){g+=1,hc.set("x1ng:roll",String(g)),c.textContent=ds(g%36+1),g%36===0&&(p.dataset.keep="1",p.textContent="REWIND \u25C0\u25C0 \u80F6\u5377\u62CD\u5B8C\u4E86",setTimeout(()=>{delete p.dataset.keep},2200)),f.classList.remove("go"),f.offsetWidth,f.classList.add("go"),X&&(_.classList.remove("go"),_.offsetWidth,_.classList.add("go")),e.classList.add("is-fired"),setTimeout(()=>e.classList.remove("is-fired"),600)}function Ge(X,$){let me=performance.now(),Ae=Math.min(.1,Math.max(0,X-R));R=X;let de=scrollY-W(),Fe=_i(de/Y())*(y-1);A=$?Fe:A+(Fe-A)*(1-Math.exp(-Ae*7));let ne=_i((de-Y())/ce());e.style.setProperty("--out",Math.min(1,A/.2).toFixed(3)),e.style.setProperty("--print",sc(0,1,ne).toFixed(4)),M.sx+=(M.x-M.sx)*(t?0:.06),M.sy+=(M.y-M.sy)*(t?0:.06),P.down&&!P.active&&me-P.t0>350&&(P.active=!0,e.classList.add("is-exposing")),P.expo+=((P.active?1:0)-P.expo)*(P.active?1-Math.exp(-Ae/1.4):1-Math.exp(-Ae/.35)),p.dataset.keep||(p.textContent=lc[Math.round(Math.sqrt(P.expo)*(lc.length-1))]);let re=Math.abs(A-Math.round(A))<.03;Z=re?Z+Ae:0;let ue=Math.round(A);Z>.12&&ue!==B&&(B=ue,I.hunt=me,I.d=b.subjectDepth(ue),e.classList.remove("is-locked"));let ve=(me-I.hunt)/1e3,_e=(me-I.manual)/1e3,Te=0;if(ve<.9&&!t&&(Te=Math.max(Te,1.3*Math.pow(1-ve/.9,2)*(.75+.25*Math.cos(ve*22)))),_e<1.8&&!t?(I.d=I.md,Te=Math.max(Te,_e<.12?_e/.12*.9:_e<1.1?.9:.9*(1-(_e-1.1)/.7))):ve>=.9&&B>=0&&(I.d=b.subjectDepth(B)),I.k=Te,ve>.55&&re?e.classList.add("is-locked"):re||e.classList.remove("is-locked"),U.intro>0){U.intro=Math.max(0,1-X/3.2);let q=1-Math.pow(1-U.intro,3);U.tx=.55*q*Math.sin(X*.9+.6),U.ty=-.32*q}let De=U.on||U.intro>.02?1:0,ze=(q,se,D,te,fe)=>{let xe=(D-q)*te-se*fe;return se+=xe*Ae,[q+se*Ae,se]};t||([U.tilt,U.vt]=ze(U.tilt,U.vt,De,U.on?60:26,U.on?13:7),[U.ry,U.vx]=ze(U.ry,U.vx,U.tx,70,9),[U.rx,U.vy]=ze(U.rx,U.vy,U.ty,70,9),U.tilt=_i(U.tilt,0,1.15)),U.lx+=(M.sx-U.lx)*.1,U.ly+=(M.sy-U.ly)*.1,e.style.setProperty("--orbit",_i(U.tilt).toFixed(3));let Be=b.frame(X,A,{mouse:[M.sx*(1-_i(U.tilt)),M.sy*(1-_i(U.tilt))],expo:P.expo,focus:I,fade:_i(X/1.2),print:ne,dio:{tilt:ne>.02?0:_i(U.tilt),rx:U.rx,ry:U.ry,lx:U.lx,ly:U.ly}}),L=r.clientWidth,rt=r.clientHeight,qe,je,E,x;if(_e<1.6)E=x=Math.max(56,rt*.09),qe=I.mx*L,je=I.my*rt,l.textContent="AF-S \xB7 \u70B9\u51FB\u5BF9\u7126";else{let q=Be.subject;x=Math.max(36,q.h*rt*1.3),E=Math.max(30,x*.62),qe=q.x*L,je=(q.top+q.bottom)/2*rt,l.textContent="AF-C \xB7 SUBJECT \u661F\u5149"}let F=e.classList.contains("is-locked")?0:Be.prog>0&&Be.prog<1?6:2;o.style.transform=`translate3d(${(qe+(Math.random()-.5)*F).toFixed(1)}px, ${(je+(Math.random()-.5)*F).toFixed(1)}px, 0) translate(-50%, -50%)`,o.style.width=`${E.toFixed(1)}px`,o.style.height=`${x.toFixed(1)}px`,u.style.transform=`translateX(${((P.expo*3+Math.sin(X*.7)*.08)*16).toFixed(1)}px)`;let N=Jt[Be.scene],k=`${ds(Be.scene+1)} / ${ds(y)} \xB7 ${N.time.toUpperCase()} ${N.zh} \xB7 ${N.title.toUpperCase()} \u2014 ${N.place.toUpperCase()}`;return h.textContent!==k&&(h.textContent=k),n.forEach(q=>{let se=+q.dataset.chapter,D=Math.abs(A-se);q.style.opacity=((1-sc(.1,.28,D))*(1-ne*2.2)).toFixed(3),q.style.transform=`translateY(${((A-se)*-50).toFixed(1)}px)`}),s.forEach((q,se)=>q.classList.toggle("on",Math.round(A)===se)),Be}function K(X){w&&(requestAnimationFrame(K),!(!v||!b)&&(Ge(t?3:(X-T)/1e3,!1),b.adapt(X)))}return{ready:Q,play(){!b||w||(w=!0,T=performance.now(),e.classList.add("is-in"),requestAnimationFrame(K))},still(X,$={}){var me;if(b)return Object.assign(P,{expo:(me=$.expo)!=null?me:0}),$.dio&&Object.assign(U,$.dio,{intro:0}),$.tap&&(I.manual=performance.now()-$.tap*1e3,I.mx=$.x,I.my=$.y,I.md=b.depthAt($.x,$.y)),e.classList.add("is-in"),R=X,Ge(X,!0)}}}var x_=matchMedia("(prefers-reduced-motion: reduce)").matches,dl=uc(document.querySelector("[data-vf]"),{reduced:x_});new URLSearchParams(location.search).has("still")&&(window.__hero=dl);dl.ready.then(()=>{document.documentElement.classList.add("is-ready"),dl.play()});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
