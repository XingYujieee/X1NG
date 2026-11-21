(()=>{var of=0,Rc=1,lf=2;var Fa=1,hf=2,wn=3,Sr=0,Mi=1,ci=2,Ji=0,Cn=1,ja=2,Cc=3,Ic=4,cf=5;var Pa=100,uf=101,df=102,pf=103,ff=104,mf=200,gf=201,_f=202,vf=203,$u=204,Qu=205,xf=206,yf=207,Mf=208,Sf=209,bf=210,Tf=211,Ef=212,wf=213,Af=214,yl=0,Ml=1,Sl=2,Dn=3,bl=4,Tl=5,Un=6,El=7,ed=0,Rf=1,Cf=2,lr=0,to=1,io=2,ro=3,tn=4,ao=5,no=6,so=7,Pc="attached",If="detached",td=300,Qr=301,qa=302,Oo=303,Fo=304,oo=306,ea=1e3,Zi=1001,On=1002,qt=1003,lh=1004;var Ua=1005;var Ht=1006,In=1007;var or=1008;var wi=1009,id=1010,rd=1011,Fn=1012,hh=1013,hr=1014,Li=1015,ei=1016,ch=1017,uh=1018,Bn=1020,ad=35902,nd=35899,sd=1021,od=1022,Ni=1023,br=1026,Zr=1027,dh=1028,ph=1029,ta=1030,fh=1031;var mh=1033,Hs=33776,ks=33777,Gs=33778,Vs=33779,wl=35840,Al=35841,Rl=35842,Cl=35843,Il=36196,Pl=37492,Ll=37496,Nl=37488,Dl=37489,Ys=37490,Ul=37491,Ol=37808,Fl=37809,Bl=37810,zl=37811,Hl=37812,kl=37813,Gl=37814,Vl=37815,Wl=37816,Xl=37817,jl=37818,ql=37819,Yl=37820,Zl=37821,Kl=36492,Jl=36494,$l=36495,Ql=36283,eh=36284,Zs=36285,th=36286;var Ya=2300,Za=2301,Bo=2302,Lc=2303,Nc=2400,Dc=2401,Uc=2402,Pf=2500;var ld=0,lo=1,Xn=2,Lf=3200;var ih=0,Nf=1,Fr="",Lt="srgb",Si="srgb-linear",Ks="linear",Tt="srgb";var Jr=7680,hd=7681;var cd=517;var gh=519,Df=512,Uf=513,Of=514,_h=515,Ff=516,Bf=517,vh=518,zf=519,ud=35044,rn=35048;var Oc="300 es",Ki=2e3,zn=2001;function Hf(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function kf(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Hn(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Gf(){let e=Hn("canvas");return e.style.display="block",e}var Fc={},Ka=null;function Js(...e){let t="THREE."+e.shift();Ka?Ka("log",t,...e):console.log(t,...e)}function dd(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function We(...e){e=dd(e);let t="THREE."+e.shift();if(Ka)Ka("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function tt(...e){e=dd(e);let t="THREE."+e.shift();if(Ka)Ka("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Ba(...e){let t=e.join(" ");t in Fc||(Fc[t]=!0,We(...e))}function Vf(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var Wf={[yl]:Ml,[Sl]:Un,[bl]:El,[Dn]:Tl,[Ml]:yl,[Un]:Sl,[El]:bl,[Tl]:Dn},ra=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=1234567,za=Math.PI/180,Ja=180/Math.PI;function Di(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(li[e&255]+li[e>>8&255]+li[e>>16&255]+li[e>>24&255]+"-"+li[t&255]+li[t>>8&255]+"-"+li[t>>16&15|64]+li[t>>24&255]+"-"+li[i&63|128]+li[i>>8&255]+"-"+li[i>>16&255]+li[i>>24&255]+li[r&255]+li[r>>8&255]+li[r>>16&255]+li[r>>24&255]).toLowerCase()}function ut(e,t,i){return Math.max(t,Math.min(i,e))}function xh(e,t){return(e%t+t)%t}function Xf(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function jf(e,t,i){return e!==t?(i-e)/(t-e):0}function Pn(e,t,i){return(1-i)*e+i*t}function qf(e,t,i,r){return Pn(e,t,1-Math.exp(-i*r))}function Yf(e,t=1){return t-Math.abs(xh(e,t*2)-t)}function Zf(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function Kf(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function Jf(e,t){return e+Math.floor(Math.random()*(t-e+1))}function $f(e,t){return e+Math.random()*(t-e)}function Qf(e){return e*(.5-Math.random())}function em(e){e!==void 0&&(Bc=e);let t=Bc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tm(e){return e*za}function im(e){return e*Ja}function rm(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function am(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function nm(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function sm(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),h=n((t+r)/2),c=s((t+r)/2),d=n((t-r)/2),u=s((t-r)/2),p=n((r-t)/2),_=s((r-t)/2);switch(a){case"XYX":e.set(o*c,l*d,l*u,o*h);break;case"YZY":e.set(l*u,o*c,l*d,o*h);break;case"ZXZ":e.set(l*d,l*u,o*c,o*h);break;case"XZX":e.set(o*c,l*_,l*p,o*h);break;case"YXY":e.set(l*p,o*c,l*_,o*h);break;case"ZYZ":e.set(l*_,l*p,o*c,o*h);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Yi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function At(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var pd={DEG2RAD:za,RAD2DEG:Ja,generateUUID:Di,clamp:ut,euclideanModulo:xh,mapLinear:Xf,inverseLerp:jf,lerp:Pn,damp:qf,pingpong:Yf,smoothstep:Zf,smootherstep:Kf,randInt:Jf,randFloat:$f,randFloatSpread:Qf,seededRandom:em,degToRad:tm,radToDeg:im,isPowerOfTwo:rm,ceilPowerOfTwo:am,floorPowerOfTwo:nm,setQuaternionFromProperEuler:sm,normalize:At,denormalize:Yi},ka,he=(ka=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ut(this.x,t.x,i.x),this.y=ut(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ut(this.x,t,i),this.y=ut(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ut(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(ut(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ka.prototype.isVector2=!0,ka),kt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],d=a[n+0],u=a[n+1],p=a[n+2],_=a[n+3];if(c!==_||o!==d||l!==u||h!==p){let x=o*d+l*u+h*p+c*_;x<0&&(d=-d,u=-u,p=-p,_=-_,x=-x);let m=1-s;if(x<.9995){let f=Math.acos(x),b=Math.sin(f);m=Math.sin(m*f)/b,s=Math.sin(s*f)/b,o=o*m+d*s,l=l*m+u*s,h=h*m+p*s,c=c*m+_*s}else{o=o*m+d*s,l=l*m+u*s,h=h*m+p*s,c=c*m+_*s;let f=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=f,l*=f,h*=f,c*=f}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[n],d=a[n+1],u=a[n+2],p=a[n+3];return e[t]=s*p+h*c+o*u-l*d,e[t+1]=o*p+h*d+l*c-s*u,e[t+2]=l*p+h*u+s*d-o*c,e[t+3]=h*p-s*c-o*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),c=s(a/2),d=o(i/2),u=o(r/2),p=o(a/2);switch(n){case"XYZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"YXZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"ZXY":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"ZYX":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"YZX":this._x=d*h*c+l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c-d*u*p;break;case"XZY":this._x=d*h*c-l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c+d*u*p;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10],d=i+s+c;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-o)*u,this._y=(a-l)*u,this._z=(n-r)*u}else if(i>s&&i>c){let u=2*Math.sqrt(1+i-s-c);this._w=(h-o)/u,this._x=.25*u,this._y=(r+n)/u,this._z=(a+l)/u}else if(s>c){let u=2*Math.sqrt(1+s-i-c);this._w=(a-l)/u,this._x=(r+n)/u,this._y=.25*u,this._z=(o+h)/u}else{let u=2*Math.sqrt(1+c-i-s);this._w=(n-r)/u,this._x=(a+l)/u,this._y=(o+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),h=Math.sin(l);o=Math.sin(o*l)/h,t=Math.sin(t*l)/h,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ga,I=(Ga=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(zc.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(zc.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*r),c=2*(o*i-n*a),d=2*(n*r-s*i);return this.x=i+l*h+s*d-o*c,this.y=r+l*c+o*h-n*d,this.z=a+l*d+n*c-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ut(this.x,t.x,i.x),this.y=ut(this.y,t.y,i.y),this.z=ut(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ut(this.x,t,i),this.y=ut(this.y,t,i),this.z=ut(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ut(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return zo.copy(this).projectOnVector(t),this.sub(zo)}reflect(t){return this.sub(zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(ut(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ga.prototype.isVector3=!0,Ga),zo=new I,zc=new kt,Va,st=(Va=class{constructor(t,i,r,a,n,s,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h)}set(t,i,r,a,n,s,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=i,c[4]=n,c[5]=l,c[6]=r,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],c=r[4],d=r[7],u=r[2],p=r[5],_=r[8],x=a[0],m=a[3],f=a[6],b=a[1],y=a[4],g=a[7],S=a[2],w=a[5],A=a[8];return n[0]=s*x+o*b+l*S,n[3]=s*m+o*y+l*w,n[6]=s*f+o*g+l*A,n[1]=h*x+c*b+d*S,n[4]=h*m+c*y+d*w,n[7]=h*f+c*g+d*A,n[2]=u*x+p*b+_*S,n[5]=u*m+p*y+_*w,n[8]=u*f+p*g+_*A,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return i*s*c-i*o*h-r*n*c+r*o*l+a*n*h-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=c*s-o*h,u=o*l-c*n,p=h*n-s*l,_=i*d+r*u+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return t[0]=d*x,t[1]=(a*h-c*r)*x,t[2]=(o*r-a*s)*x,t[3]=u*x,t[4]=(c*i-a*l)*x,t[5]=(a*n-o*i)*x,t[6]=p*x,t[7]=(r*l-h*i)*x,t[8]=(s*i-r*n)*x,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(t,i){return Ba("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ho.makeScale(t,i)),this}rotate(t){return Ba("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ho.makeRotation(-t)),this}translate(t,i){return Ba("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ho.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Va.prototype.isMatrix3=!0,Va),Ho=new st,Hc=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kc=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function om(){let e={enabled:!0,workingColorSpace:Si,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===Tt&&(a.r=Mr(a.r),a.g=Mr(a.g),a.b=Mr(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Tt&&(a.r=Ha(a.r),a.g=Ha(a.g),a.b=Ha(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Fr?Ks:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return Ba("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return Ba("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Si]:{primaries:t,whitePoint:r,transfer:Ks,toXYZ:Hc,fromXYZ:kc,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:t,whitePoint:r,transfer:Tt,toXYZ:Hc,fromXYZ:kc,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),e}var ct=om();function Mr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ha(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var ga,lm=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ga===void 0&&(ga=Hn("canvas")),ga.width=e.width,ga.height=e.height;let r=ga.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ga}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Mr(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mr(t[i]/255)*255):t[i]=Mr(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hm=0,yh=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(ko(r[n].image)):a.push(ko(r[n]))}else a=ko(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function ko(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?lm.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var cm=0,Go=new I,ui=class Ws extends ra{constructor(t=Ws.DEFAULT_IMAGE,i=Ws.DEFAULT_MAPPING,r=Zi,a=Zi,n=Ht,s=or,o=Ni,l=wi,h=Ws.DEFAULT_ANISOTROPY,c=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Di(),this.name="",this.source=new yh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Go).x}get height(){return this.source.getSize(Go).y}get depth(){return this.source.getSize(Go).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){We(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){We(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==td)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ea:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case On:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ea:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case On:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=td;ui.DEFAULT_ANISOTROPY=1;var Wa,Rt=(Wa=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],c=s[1],d=s[5],u=s[9],p=s[2],_=s[6],x=s[10];if(Math.abs(l-c)<.01&&Math.abs(h-p)<.01&&Math.abs(u-_)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(o+d+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(o+1)/2,b=(d+1)/2,y=(x+1)/2,g=(l+c)/4,S=(h+p)/4,w=(u+_)/4;return f>b&&f>y?f<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(f),a=g/r,n=S/r):b>y?b<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(b),r=g/a,n=w/a):y<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(y),r=S/n,a=w/n),this.set(r,a,n,i),this}let m=Math.sqrt((_-u)*(_-u)+(h-p)*(h-p)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(_-u)/m,this.y=(h-p)/m,this.z=(c-l)/m,this.w=Math.acos((o+d+x-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ut(this.x,t.x,i.x),this.y=ut(this.y,t.y,i.y),this.z=ut(this.z,t.z,i.z),this.w=ut(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ut(this.x,t,i),this.y=ut(this.y,t,i),this.z=ut(this.z,t,i),this.w=ut(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ut(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wa.prototype.isVector4=!0,Wa),um=class extends ra{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new ui(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new yh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends um{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},fd=class extends ui{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var dm=class extends ui{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var $r,Ye=($r=class{constructor(t,i,r,a,n,s,o,l,h,c,d,u,p,_,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h,c,d,u,p,_,x,m)}set(t,i,r,a,n,s,o,l,h,c,d,u,p,_,x,m){let f=this.elements;return f[0]=t,f[4]=i,f[8]=r,f[12]=a,f[1]=n,f[5]=s,f[9]=o,f[13]=l,f[2]=h,f[6]=c,f[10]=d,f[14]=u,f[3]=p,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $r().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/_a.setFromMatrixColumn(t,0).length(),n=1/_a.setFromMatrixColumn(t,1).length(),s=1/_a.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(n),d=Math.sin(n);if(t.order==="XYZ"){let u=s*c,p=s*d,_=o*c,x=o*d;i[0]=l*c,i[4]=-l*d,i[8]=h,i[1]=p+_*h,i[5]=u-x*h,i[9]=-o*l,i[2]=x-u*h,i[6]=_+p*h,i[10]=s*l}else if(t.order==="YXZ"){let u=l*c,p=l*d,_=h*c,x=h*d;i[0]=u+x*o,i[4]=_*o-p,i[8]=s*h,i[1]=s*d,i[5]=s*c,i[9]=-o,i[2]=p*o-_,i[6]=x+u*o,i[10]=s*l}else if(t.order==="ZXY"){let u=l*c,p=l*d,_=h*c,x=h*d;i[0]=u-x*o,i[4]=-s*d,i[8]=_+p*o,i[1]=p+_*o,i[5]=s*c,i[9]=x-u*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let u=s*c,p=s*d,_=o*c,x=o*d;i[0]=l*c,i[4]=_*h-p,i[8]=u*h+x,i[1]=l*d,i[5]=x*h+u,i[9]=p*h-_,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let u=s*l,p=s*h,_=o*l,x=o*h;i[0]=l*c,i[4]=x-u*d,i[8]=_*d+p,i[1]=d,i[5]=s*c,i[9]=-o*c,i[2]=-h*c,i[6]=p*d+_,i[10]=u-x*d}else if(t.order==="XZY"){let u=s*l,p=s*h,_=o*l,x=o*h;i[0]=l*c,i[4]=-d,i[8]=h*c,i[1]=u*d+x,i[5]=s*c,i[9]=p*d-_,i[2]=_*d-p,i[6]=o*c,i[10]=x*d+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pm,t,fm)}lookAt(t,i,r){let a=this.elements;return Ti.subVectors(t,i),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Ir.crossVectors(r,Ti),Ir.lengthSq()===0&&(Math.abs(r.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Ir.crossVectors(r,Ti)),Ir.normalize(),ls.crossVectors(Ti,Ir),a[0]=Ir.x,a[4]=ls.x,a[8]=Ti.x,a[1]=Ir.y,a[5]=ls.y,a[9]=Ti.y,a[2]=Ir.z,a[6]=ls.z,a[10]=Ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],c=r[1],d=r[5],u=r[9],p=r[13],_=r[2],x=r[6],m=r[10],f=r[14],b=r[3],y=r[7],g=r[11],S=r[15],w=a[0],A=a[4],v=a[8],T=a[12],O=a[1],L=a[5],N=a[9],q=a[13],U=a[2],G=a[6],Q=a[10],X=a[14],ge=a[3],Y=a[7],K=a[11],ae=a[15];return n[0]=s*w+o*O+l*U+h*ge,n[4]=s*A+o*L+l*G+h*Y,n[8]=s*v+o*N+l*Q+h*K,n[12]=s*T+o*q+l*X+h*ae,n[1]=c*w+d*O+u*U+p*ge,n[5]=c*A+d*L+u*G+p*Y,n[9]=c*v+d*N+u*Q+p*K,n[13]=c*T+d*q+u*X+p*ae,n[2]=_*w+x*O+m*U+f*ge,n[6]=_*A+x*L+m*G+f*Y,n[10]=_*v+x*N+m*Q+f*K,n[14]=_*T+x*q+m*X+f*ae,n[3]=b*w+y*O+g*U+S*ge,n[7]=b*A+y*L+g*G+S*Y,n[11]=b*v+y*N+g*Q+S*K,n[15]=b*T+y*q+g*X+S*ae,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],p=t[14],_=t[3],x=t[7],m=t[11],f=t[15],b=l*p-h*u,y=o*p-h*d,g=o*u-l*d,S=s*p-h*c,w=s*u-l*c,A=s*d-o*c;return i*(x*b-m*y+f*g)-r*(_*b-m*S+f*w)+a*(_*y-x*S+f*A)-n*(_*g-x*w+m*A)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10];return i*(s*c-o*h)-r*(n*c-o*l)+a*(n*h-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],p=t[11],_=t[12],x=t[13],m=t[14],f=t[15],b=i*o-r*s,y=i*l-a*s,g=i*h-n*s,S=r*l-a*o,w=r*h-n*o,A=a*h-n*l,v=c*x-d*_,T=c*m-u*_,O=c*f-p*_,L=d*m-u*x,N=d*f-p*x,q=u*f-p*m,U=b*q-y*N+g*L+S*O-w*T+A*v;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/U;return t[0]=(o*q-l*N+h*L)*G,t[1]=(a*N-r*q-n*L)*G,t[2]=(x*A-m*w+f*S)*G,t[3]=(u*w-d*A-p*S)*G,t[4]=(l*O-s*q-h*T)*G,t[5]=(i*q-a*O+n*T)*G,t[6]=(m*g-_*A-f*y)*G,t[7]=(c*A-u*g+p*y)*G,t[8]=(s*N-o*O+h*v)*G,t[9]=(r*O-i*N-n*v)*G,t[10]=(_*w-x*g+f*b)*G,t[11]=(d*g-c*w-p*b)*G,t[12]=(o*T-s*L-l*v)*G,t[13]=(i*L-r*T+a*v)*G,t[14]=(x*y-_*S-m*b)*G,t[15]=(c*S-d*y+u*b)*G,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,h=n*s,c=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+r,c*l-a*s,0,h*l-a*o,c*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,c=s+s,d=o+o,u=n*h,p=n*c,_=n*d,x=s*c,m=s*d,f=o*d,b=l*h,y=l*c,g=l*d,S=r.x,w=r.y,A=r.z;return a[0]=(1-(x+f))*S,a[1]=(p+g)*S,a[2]=(_-y)*S,a[3]=0,a[4]=(p-g)*w,a[5]=(1-(u+f))*w,a[6]=(m+b)*w,a[7]=0,a[8]=(_+y)*A,a[9]=(m-b)*A,a[10]=(1-(u+x))*A,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=_a.set(a[0],a[1],a[2]).length(),o=_a.set(a[4],a[5],a[6]).length(),l=_a.set(a[8],a[9],a[10]).length();n<0&&(s=-s),Xi.copy(this);let h=1/s,c=1/o,d=1/l;return Xi.elements[0]*=h,Xi.elements[1]*=h,Xi.elements[2]*=h,Xi.elements[4]*=c,Xi.elements[5]*=c,Xi.elements[6]*=c,Xi.elements[8]*=d,Xi.elements[9]*=d,Xi.elements[10]*=d,i.setFromRotationMatrix(Xi),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=Ki,l=!1){let h=this.elements,c=2*n/(i-t),d=2*n/(r-a),u=(i+t)/(i-t),p=(r+a)/(r-a),_,x;if(l)_=n/(s-n),x=s*n/(s-n);else if(o===Ki)_=-(s+n)/(s-n),x=-2*s*n/(s-n);else if(o===zn)_=-s/(s-n),x=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=_,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=Ki,l=!1){let h=this.elements,c=2/(i-t),d=2/(r-a),u=-(i+t)/(i-t),p=-(r+a)/(r-a),_,x;if(l)_=1/(s-n),x=s/(s-n);else if(o===Ki)_=-2/(s-n),x=-(s+n)/(s-n);else if(o===zn)_=-1/(s-n),x=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=_,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},$r.prototype.isMatrix4=!0,$r),_a=new I,Xi=new Ye,pm=new I(0,0,0),fm=new I(1,1,1),Ir=new I,ls=new I,Ti=new I,Gc=new Ye,Vc=new kt,Tr=class md{constructor(t=0,i=0,r=0,a=md.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],c=a[9],d=a[2],u=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ut(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,p),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gc,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tr.DEFAULT_ORDER="XYZ";var gd=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mm=0,Wc=new I,va=new kt,fr=new Ye,hs=new I,gn=new I,gm=new I,_m=new kt,Xc=new I(1,0,0),jc=new I(0,1,0),qc=new I(0,0,1),Yc={type:"added"},vm={type:"removed"},xa={type:"childadded",child:null},Vo={type:"childremoved",child:null},Gt=class Xs extends ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xs.DEFAULT_UP.clone();let t=new I,i=new Tr,r=new kt,a=new I(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ye},normalMatrix:{value:new st}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Xs.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xs.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return va.setFromAxisAngle(t,i),this.quaternion.multiply(va),this}rotateOnWorldAxis(t,i){return va.setFromAxisAngle(t,i),this.quaternion.premultiply(va),this}rotateX(t){return this.rotateOnAxis(Xc,t)}rotateY(t){return this.rotateOnAxis(jc,t)}rotateZ(t){return this.rotateOnAxis(qc,t)}translateOnAxis(t,i){return Wc.copy(t).applyQuaternion(this.quaternion),this.position.add(Wc.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Xc,t)}translateY(t){return this.translateOnAxis(jc,t)}translateZ(t){return this.translateOnAxis(qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?hs.copy(t):hs.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),gn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(gn,hs,this.up):fr.lookAt(hs,gn,this.up),this.quaternion.setFromRotationMatrix(fr),a&&(fr.extractRotation(a.matrixWorld),va.setFromRotationMatrix(fr),this.quaternion.premultiply(va.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(tt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yc),xa.child=t,this.dispatchEvent(xa),xa.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(vm),Vo.child=t,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fr.multiply(t.parent.matrixWorld)),t.applyMatrix4(fr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yc),xa.child=t,this.dispatchEvent(xa),xa.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gn,t,gm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gn,_m,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];n(t.shapes,d)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),c=s(t.images),d=s(t.shapes),u=s(t.skeletons),p=s(t.animations),_=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),d.length>0&&(r.shapes=d),u.length>0&&(r.skeletons=u),p.length>0&&(r.animations=p),_.length>0&&(r.nodes=_)}return r.object=a,r;function s(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Gt.DEFAULT_UP=new I(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},xm={type:"move"},Wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let _ of e.hand.values()){let x=t.getJointPose(_,i),m=this._getHandJoint(l,_);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],d=h.position.distanceTo(c.position),u=.02,p=.005;l.inputState.pinching&&d>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(xm)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},_d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},cs={h:0,s:0,l:0};function Xo(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var we=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ct.workingColorSpace){if(e=xh(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=Xo(n,a,e+1/3),this.g=Xo(n,a,e),this.b=Xo(n,a,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,t=Lt){function i(a){a!==void 0&&parseFloat(a)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let i=_d[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return ct.workingToColorSpace(hi.copy(this),e),Math.round(ut(hi.r*255,0,255))*65536+Math.round(ut(hi.g*255,0,255))*256+Math.round(ut(hi.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(hi.copy(this),t);let i=hi.r,r=hi.g,a=hi.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=h<=.5?c/(n+s):c/(2-n-s),n){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(hi.copy(this),t),e.r=hi.r,e.g=hi.g,e.b=hi.b,e}getStyle(e=Lt){ct.workingToColorSpace(hi.copy(this),e);let t=hi.r,i=hi.g,r=hi.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(cs);let i=Pn(Pr.h,cs.h,t),r=Pn(Pr.s,cs.s,t),a=Pn(Pr.l,cs.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hi=new we;we.NAMES=_d;var vd=class xd{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new we(t),this.near=i,this.far=r}clone(){return new xd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},yd=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tr,this.environmentIntensity=1,this.environmentRotation=new Tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ji=new I,mr=new I,jo=new I,gr=new I,ya=new I,Ma=new I,Zc=new I,qo=new I,Yo=new I,Zo=new I,Ko=new Rt,Jo=new Rt,$o=new Rt,La=class Na{constructor(t=new I,i=new I,r=new I){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),ji.subVectors(t,i),a.cross(ji);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){ji.subVectors(a,i),mr.subVectors(r,i),jo.subVectors(t,i);let s=ji.dot(ji),o=ji.dot(mr),l=ji.dot(jo),h=mr.dot(mr),c=mr.dot(jo),d=s*h-o*o;if(d===0)return n.set(0,0,0),null;let u=1/d,p=(h*l-o*c)*u,_=(s*c-o*l)*u;return n.set(1-p-_,_,p)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,gr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,gr.x),l.addScaledVector(s,gr.y),l.addScaledVector(o,gr.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return Ko.setScalar(0),Jo.setScalar(0),$o.setScalar(0),Ko.fromBufferAttribute(t,i),Jo.fromBufferAttribute(t,r),$o.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Ko,n.x),s.addScaledVector(Jo,n.y),s.addScaledVector($o,n.z),s}static isFrontFacing(t,i,r,a){return ji.subVectors(r,i),mr.subVectors(t,i),ji.cross(mr).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ji.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),ji.cross(mr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Na.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Na.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Na.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Na.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Na.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;ya.subVectors(a,r),Ma.subVectors(n,r),qo.subVectors(t,r);let l=ya.dot(qo),h=Ma.dot(qo);if(l<=0&&h<=0)return i.copy(r);Yo.subVectors(t,a);let c=ya.dot(Yo),d=Ma.dot(Yo);if(c>=0&&d<=c)return i.copy(a);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return s=l/(l-c),i.copy(r).addScaledVector(ya,s);Zo.subVectors(t,n);let p=ya.dot(Zo),_=Ma.dot(Zo);if(_>=0&&p<=_)return i.copy(n);let x=p*h-l*_;if(x<=0&&h>=0&&_<=0)return o=h/(h-_),i.copy(r).addScaledVector(Ma,o);let m=c*_-p*d;if(m<=0&&d-c>=0&&p-_>=0)return Zc.subVectors(n,a),o=(d-c)/(d-c+(p-_)),i.copy(a).addScaledVector(Zc,o);let f=1/(m+x+u);return s=x*f,o=u*f,i.copy(r).addScaledVector(ya,s).addScaledVector(Ma,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ui=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,qi):qi.fromBufferAttribute(a,n),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),us.copy(i.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_n),ds.subVectors(this.max,_n),Sa.subVectors(e.a,_n),ba.subVectors(e.b,_n),Ta.subVectors(e.c,_n),Lr.subVectors(ba,Sa),Nr.subVectors(Ta,ba),Wr.subVectors(Sa,Ta);let t=[0,-Lr.z,Lr.y,0,-Nr.z,Nr.y,0,-Wr.z,Wr.y,Lr.z,0,-Lr.x,Nr.z,0,-Nr.x,Wr.z,0,-Wr.x,-Lr.y,Lr.x,0,-Nr.y,Nr.x,0,-Wr.y,Wr.x,0];return!Qo(t,Sa,ba,Ta,ds)||(t=[1,0,0,0,1,0,0,0,1],!Qo(t,Sa,ba,Ta,ds))?!1:(ps.crossVectors(Lr,Nr),t=[ps.x,ps.y,ps.z],Qo(t,Sa,ba,Ta,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_r=[new I,new I,new I,new I,new I,new I,new I,new I],qi=new I,us=new Ui,Sa=new I,ba=new I,Ta=new I,Lr=new I,Nr=new I,Wr=new I,_n=new I,ds=new I,ps=new I,Xr=new I;function Qo(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){Xr.fromArray(e,n);let o=a.x*Math.abs(Xr.x)+a.y*Math.abs(Xr.y)+a.z*Math.abs(Xr.z),l=t.dot(Xr),h=i.dot(Xr),c=r.dot(Xr);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var N1=ym();function ym(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),r=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(r[l]=0,r[l|256]=32768,a[l]=24,a[l|256]=24):h<-14?(r[l]=1024>>-h-14,r[l|256]=1024>>-h-14|32768,a[l]=-h-1,a[l|256]=-h-1):h<=15?(r[l]=h+15<<10,r[l|256]=h+15<<10|32768,a[l]=13,a[l|256]=13):h<128?(r[l]=31744,r[l|256]=64512,a[l]=24,a[l|256]=24):(r[l]=31744,r[l|256]=64512,a[l]=13,a[l|256]=13)}let n=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;(h&8388608)===0;)h<<=1,c-=8388608;h&=-8388609,c+=947912704,n[l]=h|c}for(let l=1024;l<2048;++l)n[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:r,shiftTable:a,mantissaTable:n,exponentTable:s,offsetTable:o}}var jt=new I,fs=new he,Mm=0,Nt=class extends ra{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ud,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fs.fromBufferAttribute(this,t),fs.applyMatrix3(e),this.setXY(t,fs.x,fs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),a=At(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Md=class extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Sd=class extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ke=class extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Sm=new Ui,vn=new I,el=new I,Oi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Sm.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vn.subVectors(e,this.center);let t=vn.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(vn,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vn.copy(e.center).add(el)),this.expandByPoint(vn.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bm=0,Pi=new Ye,tl=new Gt,Ea=new I,Ei=new Ui,xn=new Ui,Qt=new I,xt=class bd extends ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hf(t)?Sd:Md)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new st().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,i,r){return Pi.makeTranslation(t,i,r),this.applyMatrix4(Pi),this}scale(t,i,r){return Pi.makeScale(t,i,r),this.applyMatrix4(Pi),this}lookAt(t){return tl.lookAt(t),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ea).negate(),this.translate(Ea.x,Ea.y,Ea.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ke(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Ei.setFromBufferAttribute(n),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let r=this.boundingSphere.center;if(Ei.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];xn.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Ei.min,xn.min),Ei.expandByPoint(Qt),Qt.addVectors(Ei.max,xn.max),Ei.expandByPoint(Qt)):(Ei.expandByPoint(xn.min),Ei.expandByPoint(xn.max))}Ei.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Qt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Qt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Qt.fromBufferAttribute(o,h),l&&(Ea.fromBufferAttribute(t,h),Qt.add(Ea)),a=Math.max(a,r.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new Nt(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let v=0;v<r.count;v++)o[v]=new I,l[v]=new I;let h=new I,c=new I,d=new I,u=new he,p=new he,_=new he,x=new I,m=new I;function f(v,T,O){h.fromBufferAttribute(r,v),c.fromBufferAttribute(r,T),d.fromBufferAttribute(r,O),u.fromBufferAttribute(n,v),p.fromBufferAttribute(n,T),_.fromBufferAttribute(n,O),c.sub(h),d.sub(h),p.sub(u),_.sub(u);let L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(x.copy(c).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(L),o[v].add(x),o[T].add(x),o[O].add(x),l[v].add(m),l[T].add(m),l[O].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let v=0,T=b.length;v<T;++v){let O=b[v],L=O.start,N=O.count;for(let q=L,U=L+N;q<U;q+=3)f(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let y=new I,g=new I,S=new I,w=new I;function A(v){S.fromBufferAttribute(a,v),w.copy(S);let T=o[v];y.copy(T),y.sub(S.multiplyScalar(S.dot(T))).normalize(),g.crossVectors(w,T);let O=g.dot(l[v])<0?-1:1;s.setXYZW(v,y.x,y.y,y.z,O)}for(let v=0,T=b.length;v<T;++v){let O=b[v],L=O.start,N=O.count;for(let q=L,U=L+N;q<U;q+=3)A(t.getX(q+0)),A(t.getX(q+1)),A(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Nt(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,p=r.count;u<p;u++)r.setXYZ(u,0,0,0);let a=new I,n=new I,s=new I,o=new I,l=new I,h=new I,c=new I,d=new I;if(t)for(let u=0,p=t.count;u<p;u+=3){let _=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);a.fromBufferAttribute(i,_),n.fromBufferAttribute(i,x),s.fromBufferAttribute(i,m),c.subVectors(s,n),d.subVectors(a,n),c.cross(d),o.fromBufferAttribute(r,_),l.fromBufferAttribute(r,x),h.fromBufferAttribute(r,m),o.add(c),l.add(c),h.add(c),r.setXYZ(_,o.x,o.y,o.z),r.setXYZ(x,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,p=i.count;u<p;u+=3)a.fromBufferAttribute(i,u+0),n.fromBufferAttribute(i,u+1),s.fromBufferAttribute(i,u+2),c.subVectors(s,n),d.subVectors(a,n),c.cross(d),r.setXYZ(u+0,c.x,c.y,c.z),r.setXYZ(u+1,c.x,c.y,c.z),r.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Qt.fromBufferAttribute(t,i),Qt.normalize(),t.setXYZ(i,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c),p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*c;for(let f=0;f<c;f++)u[_++]=h[p++]}return new Nt(u,c,d)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new bd,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let c=0,d=h.length;c<d;c++){let u=h[c],p=t(u,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let p=h[d];c.push(p.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let n=t.morphAttributes;for(let h in n){let c=[],d=n[h];for(let u=0,p=d.length;u<p;u++)c.push(d[u].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,c=s.length;h<c;h++){let d=s[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ud,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},mi=new I,Sh=class Td{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)mi.fromBufferAttribute(this,i),mi.applyMatrix4(t),this.setXYZ(i,mi.x,mi.y,mi.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)mi.fromBufferAttribute(this,i),mi.applyNormalMatrix(t),this.setXYZ(i,mi.x,mi.y,mi.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)mi.fromBufferAttribute(this,i),mi.transformDirection(t),this.setXYZ(i,mi.x,mi.y,mi.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Yi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=At(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=At(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=At(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=At(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=At(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Yi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Yi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Yi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Yi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=At(i,this.array),r=At(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=At(i,this.array),r=At(r,this.array),a=At(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=At(i,this.array),r=At(r,this.array),a=At(a,this.array),n=At(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){Js("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new Nt(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Td(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Js("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},il=new I,Tm=new I,Em=new st,Ur=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=il.subVectors(i,t).cross(Tm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(il),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Em.getNormalMatrix(e),r=this.coplanarPoint(il).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},wm=0,$i=class extends ra{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Cn,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$u,this.blendDst=Qu,this.blendEquation=Pa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Dn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new we().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ur().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new he().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var D1=new I,U1=new I,O1=new I,F1=new he,B1=new he,z1=new Ye,H1=new I,k1=new I,G1=new I,V1=new he,W1=new he,X1=new he;var j1=new I,q1=new I;var vr=new I,rl=new I,ms=new I,gs=new I,ho=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){rl.copy(e).add(t).multiplyScalar(.5),ms.copy(t).sub(e).normalize(),gs.copy(this.origin).sub(rl);let a=e.distanceTo(t)*.5,n=-this.direction.dot(ms),s=gs.dot(this.direction),o=-gs.dot(ms),l=gs.lengthSq(),h=Math.abs(1-n*n),c,d,u,p;if(h>0)if(c=n*o-s,d=n*s-o,p=a*h,c>=0)if(d>=-p)if(d<=p){let _=1/h;c*=_,d*=_,u=c*(c+n*d+2*s)+d*(n*c+d+2*o)+l}else d=a,c=Math.max(0,-(n*d+s)),u=-c*c+d*(d+2*o)+l;else d=-a,c=Math.max(0,-(n*d+s)),u=-c*c+d*(d+2*o)+l;else d<=-p?(c=Math.max(0,-(-n*a+s)),d=c>0?-a:Math.min(Math.max(-a,-o),a),u=-c*c+d*(d+2*o)+l):d<=p?(c=0,d=Math.min(Math.max(-a,-o),a),u=d*(d+2*o)+l):(c=Math.max(0,-(n*a+s)),d=c>0?a:Math.min(Math.max(-a,-o),a),u=-c*c+d*(d+2*o)+l);else d=n>0?-a:a,c=Math.max(0,-(n*d+s)),u=-c*c+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(rl).addScaledVector(ms,d),u}intersectSphere(e,t){if(e.radius<0)return null;vr.subVectors(e.center,this.origin);let i=vr.dot(this.direction),r=vr.dot(vr)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,n=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,n=(e.min.y-d.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),c>=0?(s=(e.min.z-d.z)*c,o=(e.max.z-d.z)*c):(s=(e.max.z-d.z)*c,o=(e.min.z-d.z)*c),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,h=s.z,c=e.x-n.x,d=e.y-n.y,u=e.z-n.z,p=t.x-n.x,_=t.y-n.y,x=t.z-n.z,m=i.x-n.x,f=i.y-n.y,b=i.z-n.z,y=Math.abs(o),g=Math.abs(l),S=Math.abs(h),w,A,v,T,O,L,N,q,U,G,Q,X;if(y>=g&&y>=S?(v=o,L=c,U=p,X=m,o>=0?(w=l,A=h,T=d,O=u,N=_,q=x,G=f,Q=b):(w=h,A=l,T=u,O=d,N=x,q=_,G=b,Q=f)):g>=S?(v=l,L=d,U=_,X=f,l>=0?(w=h,A=o,T=u,O=c,N=x,q=p,G=b,Q=m):(w=o,A=h,T=c,O=u,N=p,q=x,G=m,Q=b)):(v=h,L=u,U=x,X=b,h>=0?(w=o,A=l,T=c,O=d,N=p,q=_,G=m,Q=f):(w=l,A=o,T=d,O=c,N=_,q=p,G=f,Q=m)),v===0)return null;let ge=w/v,Y=A/v,K=1/v,ae=T-ge*L,Be=O-Y*L,Re=N-ge*U,ot=q-Y*U,je=G-ge*X,ee=Q-Y*X,de=je*ot-ee*Re,fe=ae*ee-Be*je,Ne=Re*Be-ot*ae;if(r){if(de<0||fe<0||Ne<0)return null}else if((de<0||fe<0||Ne<0)&&(de>0||fe>0||Ne>0))return null;let qe=de+fe+Ne;if(qe===0)return null;let ye=K*(de*L+fe*U+Ne*X);return(qe>0?ye<0:ye>0)?null:this.at(ye/qe,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ni=class extends $i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.combine=ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Kc=new Ye,jr=new ho,_s=new Oi,Jc=new I,vs=new I,xs=new I,ys=new I,al=new I,Ms=new I,$c=new I,Ss=new I,mt=class extends Gt{constructor(e=new xt,t=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){Ms.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],c=a[o];h!==0&&(al.fromBufferAttribute(c,e),n?Ms.addScaledVector(al,h):Ms.addScaledVector(al.sub(t),h))}t.add(Ms)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere),_s.applyMatrix4(a),jr.copy(e.ray).recast(e.near),!(_s.containsPoint(jr.origin)===!1&&(jr.intersectSphere(_s,Jc)===null||jr.origin.distanceToSquared(Jc)>(e.far-e.near)**2))&&(Kc.copy(a).invert(),jr.copy(e.ray).applyMatrix4(Kc),!(i.boundingBox!==null&&jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,d=a.groups,u=a.drawRange;if(s!==null)if(Array.isArray(n))for(let p=0,_=d.length;p<_;p++){let x=d[p],m=n[x.materialIndex],f=Math.max(x.start,u.start),b=Math.min(s.count,Math.min(x.start+x.count,u.start+u.count));for(let y=f,g=b;y<g;y+=3){let S=s.getX(y),w=s.getX(y+1),A=s.getX(y+2);r=bs(this,m,e,i,l,h,c,S,w,A),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let p=Math.max(0,u.start),_=Math.min(s.count,u.start+u.count);for(let x=p,m=_;x<m;x+=3){let f=s.getX(x),b=s.getX(x+1),y=s.getX(x+2);r=bs(this,n,e,i,l,h,c,f,b,y),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let p=0,_=d.length;p<_;p++){let x=d[p],m=n[x.materialIndex],f=Math.max(x.start,u.start),b=Math.min(o.count,Math.min(x.start+x.count,u.start+u.count));for(let y=f,g=b;y<g;y+=3){let S=y,w=y+1,A=y+2;r=bs(this,m,e,i,l,h,c,S,w,A),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let p=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let x=p,m=_;x<m;x+=3){let f=x,b=x+1,y=x+2;r=bs(this,n,e,i,l,h,c,f,b,y),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}};function Am(e,t,i,r,a,n,s,o){let l;if(t.side===Mi?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===Sr,o),l===null)return null;Ss.copy(o),Ss.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(Ss);return h<i.near||h>i.far?null:{distance:h,point:Ss.clone(),object:e}}function bs(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,vs),e.getVertexPosition(l,xs),e.getVertexPosition(h,ys);let c=Am(e,t,i,r,vs,xs,ys,$c);if(c){let d=new I;La.getBarycoord($c,vs,xs,ys,d),a&&(c.uv=La.getInterpolatedAttribute(a,o,l,h,d,new he)),n&&(c.uv1=La.getInterpolatedAttribute(n,o,l,h,d,new he)),s&&(c.normal=La.getInterpolatedAttribute(s,o,l,h,d,new I),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new I,materialIndex:0};La.getNormal(vs,xs,ys,u.normal),c.face=u,c.barycoord=d}return c}var yn=new Rt,Qc=new Rt,eu=new Rt,Rm=new Rt,tu=new Ye,Ts=new I,nl=new Oi,iu=new Ye,sl=new ho,Ed=class extends mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Pc,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ui),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ts),this.boundingBox.expandByPoint(Ts)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Oi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ts),this.boundingSphere.expandByPoint(Ts)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nl.copy(this.boundingSphere),nl.applyMatrix4(r),e.ray.intersectsSphere(nl)!==!1&&(iu.copy(r).invert(),sl.copy(e.ray).applyMatrix4(iu),!(this.boundingBox!==null&&sl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Rt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Pc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===If?this.bindMatrixInverse.copy(this.bindMatrix).invert():We("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;Qc.fromBufferAttribute(r.attributes.skinIndex,e),eu.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(yn.copy(t),t.set(0,0,0,0)):(yn.set(...t,1),t.set(0,0,0)),yn.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){let n=eu.getComponent(a);if(n!==0){let s=Qc.getComponent(a);tu.multiplyMatrices(i.bones[s].matrixWorld,i.boneInverses[s]),t.addScaledVector(Rm.copy(yn).applyMatrix4(tu),n)}}return t.isVector4&&(t.w=yn.w),t.applyMatrix4(this.bindMatrixInverse)}},bh=class extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},jn=class extends ui{constructor(e=null,t=1,i=1,r,a,n,s,o,l=qt,h=qt,c,d){super(null,n,s,o,l,h,r,a,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ru=new Ye,Cm=new Ye,wd=class Ad{constructor(t=[],i=[]){this.uuid=Di(),this.bones=t.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),i.length===0)this.calculateInverses();else if(t.length!==i.length){We("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,i=this.bones.length;t<i;t++){let r=new Ye;this.bones[t]&&r.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&r.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){let t=this.bones,i=this.boneInverses,r=this.boneMatrices,a=this.boneTexture;for(let n=0,s=t.length;n<s;n++){let o=t[n]?t[n].matrixWorld:Cm;ru.multiplyMatrices(o,i[n]),ru.toArray(r,n*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new Ad(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let i=new Float32Array(t*t*4);i.set(this.boneMatrices);let r=new jn(i,t,t,Ni,Li);return r.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=r,this}getBoneByName(t){for(let i=0,r=this.bones.length;i<r;i++){let a=this.bones[i];if(a.name===t)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,i){this.uuid=t.uuid;for(let r=0,a=t.bones.length;r<a;r++){let n=t.bones[r],s=i[n];s===void 0&&(We("Skeleton: No bone found with UUID:",n),s=new bh),this.bones.push(s),this.boneInverses.push(new Ye().fromArray(t.boneInverses[r]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let i=this.bones,r=this.boneInverses;for(let a=0,n=i.length;a<n;a++){let s=i[a];t.bones.push(s.uuid);let o=r[a];t.boneInverses.push(o.toArray())}return t}},Br=class extends Nt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wa=new Ye,au=new Ye,Es=[],nu=new Ui,Im=new Ye,Mn=new mt,Sn=new Oi,Fi=class extends mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Br(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Im)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,wa),nu.copy(e.boundingBox).applyMatrix4(wa),this.boundingBox.union(nu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,wa),Sn.copy(e.boundingSphere).applyMatrix4(wa),this.boundingSphere.union(Sn)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,n=e*a+1;for(let s=0;s<i.length;s++)i[s]=r[n+s]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Mn.geometry=this.geometry,Mn.material=this.material,Mn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sn.copy(this.boundingSphere),Sn.applyMatrix4(i),e.ray.intersectsSphere(Sn)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,wa),au.multiplyMatrices(i,wa),Mn.matrixWorld=au,Mn.raycast(e,Es);for(let n=0,s=Es.length;n<s;n++){let o=Es[n];o.instanceId=a,o.object=this,t.push(o)}Es.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Br(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new jn(new Float32Array(r*this.count),r,this.count,dh,Li));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<i.length;l++)n+=i[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=r*e;return a[o]=s,a.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qr=new Oi,Pm=new he(.5,.5),ws=new I,$a=class{constructor(e=new Ur,t=new Ur,i=new Ur,r=new Ur,a=new Ur,n=new Ur){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ki,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],h=a[4],c=a[5],d=a[6],u=a[7],p=a[8],_=a[9],x=a[10],m=a[11],f=a[12],b=a[13],y=a[14],g=a[15];if(r[0].setComponents(l-n,u-h,m-p,g-f).normalize(),r[1].setComponents(l+n,u+h,m+p,g+f).normalize(),r[2].setComponents(l+s,u+c,m+_,g+b).normalize(),r[3].setComponents(l-s,u-c,m-_,g-b).normalize(),i)r[4].setComponents(o,d,x,y).normalize(),r[5].setComponents(l-o,u-d,m-x,g-y).normalize();else if(r[4].setComponents(l-o,u-d,m-x,g-y).normalize(),t===Ki)r[5].setComponents(l+o,u+d,m+x,g+y).normalize();else if(t===zn)r[5].setComponents(o,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);let t=Pm.distanceTo(e.center);return qr.radius=.7071067811865476+t,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(ws.x=r.normal.x>0?e.max.x:e.min.x,ws.y=r.normal.y>0?e.max.y:e.min.y,ws.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ws)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},su=new Ye,Lm=class Rd{constructor(){this.coordinateSystem=Ki,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new $a),r[a].setFromProjectionMatrix(su,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new $a),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new Rd().copy(this)}};var Nm=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let a=this.pool,n=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let s=a[this.index];n.push(s),this.index++,s.start=e,s.count=t,s.z=i,s.index=r}reset(){this.list.length=0,this.index=0}},Y1=new Ye,Z1=new we(1,1,1),K1=new $a,J1=new Lm,$1=new Ui,Q1=new Oi,eM=new I,tM=new I,iM=new I,rM=new Nm,aM=new mt;var Th=class extends $i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$s=new I,Qs=new I,ou=new Ye,bn=new ho,As=new Oi,ol=new I,lu=new I,co=class extends Gt{constructor(e=new xt,t=new Th){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)$s.fromBufferAttribute(t,r-1),Qs.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=$s.distanceTo(Qs);e.setAttribute("lineDistance",new Ke(i,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere),As.applyMatrix4(r),As.radius+=a,e.ray.intersectsSphere(As)===!1)return;ou.copy(r).invert(),bn.copy(e.ray).applyMatrix4(ou);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=this.isLineSegments?2:1,h=i.index,c=i.attributes.position;if(h!==null){let d=Math.max(0,n.start),u=Math.min(h.count,n.start+n.count);for(let p=d,_=u-1;p<_;p+=l){let x=h.getX(p),m=h.getX(p+1),f=Rs(this,e,bn,o,x,m,p);f&&t.push(f)}if(this.isLineLoop){let p=h.getX(u-1),_=h.getX(d),x=Rs(this,e,bn,o,p,_,u-1);x&&t.push(x)}}else{let d=Math.max(0,n.start),u=Math.min(c.count,n.start+n.count);for(let p=d,_=u-1;p<_;p+=l){let x=Rs(this,e,bn,o,p,p+1,p);x&&t.push(x)}if(this.isLineLoop){let p=Rs(this,e,bn,o,u-1,d,u-1);p&&t.push(p)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function Rs(e,t,i,r,a,n,s){let o=e.geometry.attributes.position;if($s.fromBufferAttribute(o,a),Qs.fromBufferAttribute(o,n),i.distanceSqToSegment($s,Qs,ol,lu)>r)return;ol.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo(ol);if(!(l<t.near||l>t.far))return{distance:l,point:lu.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var hu=new I,cu=new I,Cd=class extends co{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)hu.fromBufferAttribute(t,r),cu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+hu.distanceTo(cu);e.setAttribute("lineDistance",new Ke(i,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Id=class extends co{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},qn=class extends $i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},uu=new Ye,rh=new ho,Cs=new Oi,Is=new I,Yn=class extends Gt{constructor(e=new xt,t=new qn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere),Cs.applyMatrix4(r),Cs.radius+=a,e.ray.intersectsSphere(Cs)===!1)return;uu.copy(r).invert(),rh.copy(e.ray).applyMatrix4(uu);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,h=i.attributes.position;if(l!==null){let c=Math.max(0,n.start),d=Math.min(l.count,n.start+n.count);for(let u=c,p=d;u<p;u++){let _=l.getX(u);Is.fromBufferAttribute(h,_),du(Is,_,o,r,e,t,this)}}else{let c=Math.max(0,n.start),d=Math.min(h.count,n.start+n.count);for(let u=c,p=d;u<p;u++)Is.fromBufferAttribute(h,u),du(Is,u,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function du(e,t,i,r,a,n,s){let o=rh.distanceSqToPoint(e);if(o<i){let l=new I;rh.closestPointToPoint(e,l),l.applyMatrix4(r);let h=a.ray.origin.distanceTo(l);if(h<a.near||h>a.far)return;n.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var Pd=class extends ui{constructor(e=[],t=Qr,i,r,a,n,s,o,l,h){super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zn=class extends ui{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var kn=class extends ui{constructor(e,t,i=hr,r,a,n,s=qt,o=qt,l,h=br,c=1){if(h!==br&&h!==Zr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:c};super(d,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Dm=class extends kn{constructor(e,t=hr,i=Qr,r,a,n=qt,s=qt,o,l=br){let h={width:e,height:e,depth:1},c=[h,h,h,h,h,h];super(e,e,t,i,r,a,n,s,o,l),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ld=class extends ui{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},cr=class Nd extends xt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],d=[],u=0,p=0;_("z","y","x",-1,-1,r,i,t,s,n,0),_("z","y","x",1,-1,r,i,-t,s,n,1),_("x","z","y",1,1,t,r,i,a,s,2),_("x","z","y",1,-1,t,r,-i,a,s,3),_("x","y","z",1,-1,t,i,r,a,n,4),_("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new Ke(h,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(d,2));function _(x,m,f,b,y,g,S,w,A,v,T){let O=g/A,L=S/v,N=g/2,q=S/2,U=w/2,G=A+1,Q=v+1,X=0,ge=0,Y=new I;for(let K=0;K<Q;K++){let ae=K*L-q;for(let Be=0;Be<G;Be++){let Re=Be*O-N;Y[x]=Re*b,Y[m]=ae*y,Y[f]=U,h.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[f]=w>0?1:-1,c.push(Y.x,Y.y,Y.z),d.push(Be/A),d.push(1-K/v),X+=1}}for(let K=0;K<v;K++)for(let ae=0;ae<A;ae++){let Be=u+ae+G*K,Re=u+ae+G*(K+1),ot=u+(ae+1)+G*(K+1),je=u+(ae+1)+G*K;l.push(Be,Re,je),l.push(Re,ot,je),ge+=6}o.addGroup(p,ge,T),p+=ge,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nd(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Um=class Dd extends xt{constructor(t=1,i=1,r=4,a=8,n=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:r,radialSegments:a,heightSegments:n},i=Math.max(0,i),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),n=Math.max(1,Math.floor(n));let s=[],o=[],l=[],h=[],c=i/2,d=Math.PI/2*t,u=i,p=2*d+u,_=r*2+n,x=a+1,m=new I,f=new I;for(let b=0;b<=_;b++){let y=0,g=0,S=0,w=0;if(b<=r){let T=b/r,O=T*Math.PI/2;g=-c-t*Math.cos(O),S=t*Math.sin(O),w=-t*Math.cos(O),y=T*d}else if(b<=r+n){let T=(b-r)/n;g=-c+T*i,S=t,w=0,y=d+T*u}else{let T=(b-r-n)/r,O=T*Math.PI/2;g=c+t*Math.sin(O),S=t*Math.cos(O),w=t*Math.sin(O),y=d+u+T*d}let A=Math.max(0,Math.min(1,y/p)),v=0;b===0?v=.5/a:b===_&&(v=-.5/a);for(let T=0;T<=a;T++){let O=T/a,L=O*Math.PI*2,N=Math.sin(L),q=Math.cos(L);f.x=-S*q,f.y=g,f.z=S*N,o.push(f.x,f.y,f.z),m.set(-S*q,w,S*N),m.normalize(),l.push(m.x,m.y,m.z),h.push(O+v,A)}if(b>0){let T=(b-1)*x;for(let O=0;O<a;O++){let L=T+O,N=T+O+1,q=b*x+O,U=b*x+O+1;s.push(L,N,q),s.push(N,U,q)}}}this.setIndex(s),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dd(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Eh=class Ud extends xt{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],h=new I,c=new he;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=i;d++,u+=3){let p=r+d/i*a;h.x=t*Math.cos(p),h.y=t*Math.sin(p),s.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(s[u]/t+1)/2,c.y=(s[u+1]/t+1)/2,l.push(c.x,c.y)}for(let d=1;d<=i;d++)n.push(d,d+1,0);this.setIndex(n),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(o,3)),this.setAttribute("uv",new Ke(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ud(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Od=class Fd extends xt{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let c=[],d=[],u=[],p=[],_=0,x=[],m=r/2,f=0;b(),s===!1&&(t>0&&y(!0),i>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(p,2));function b(){let g=new I,S=new I,w=0,A=(i-t)/r;for(let v=0;v<=n;v++){let T=[],O=v/n,L=O*(i-t)+t;for(let N=0;N<=a;N++){let q=N/a,U=q*l+o,G=Math.sin(U),Q=Math.cos(U);S.x=L*G,S.y=-O*r+m,S.z=L*Q,d.push(S.x,S.y,S.z),g.set(G,A,Q).normalize(),u.push(g.x,g.y,g.z),p.push(q,1-O),T.push(_++)}x.push(T)}for(let v=0;v<a;v++)for(let T=0;T<n;T++){let O=x[T][v],L=x[T+1][v],N=x[T+1][v+1],q=x[T][v+1];(t>0||T!==0)&&(c.push(O,L,q),w+=3),(i>0||T!==n-1)&&(c.push(L,N,q),w+=3)}h.addGroup(f,w,0),f+=w}function y(g){let S=_,w=new he,A=new I,v=0,T=g===!0?t:i,O=g===!0?1:-1;for(let N=1;N<=a;N++)d.push(0,m*O,0),u.push(0,O,0),p.push(.5,.5),_++;let L=_;for(let N=0;N<=a;N++){let q=N/a*l+o,U=Math.cos(q),G=Math.sin(q);A.x=T*G,A.y=m*O,A.z=T*U,d.push(A.x,A.y,A.z),u.push(0,O,0),w.x=U*.5+.5,w.y=G*.5*O+.5,p.push(w.x,w.y),_++}for(let N=0;N<a;N++){let q=S+N,U=L+N;g===!0?c.push(U,U+1,q):c.push(U+1,U,q),v+=3}h.addGroup(f,v,g===!0?1:2),f+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Om=class Bd extends Od{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new Bd(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Kn=class zd extends xt{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let n=[],s=[];o(a),h(r),c(),this.setAttribute("position",new Ke(n,3)),this.setAttribute("normal",new Ke(n.slice(),3)),this.setAttribute("uv",new Ke(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let y=new I,g=new I,S=new I;for(let w=0;w<i.length;w+=3)p(i[w+0],y),p(i[w+1],g),p(i[w+2],S),l(y,g,S,b)}function l(b,y,g,S){let w=S+1,A=[];for(let v=0;v<=w;v++){A[v]=[];let T=b.clone().lerp(g,v/w),O=y.clone().lerp(g,v/w),L=w-v;for(let N=0;N<=L;N++)N===0&&v===w?A[v][N]=T:A[v][N]=T.clone().lerp(O,N/L)}for(let v=0;v<w;v++)for(let T=0;T<2*(w-v)-1;T++){let O=Math.floor(T/2);T%2===0?(u(A[v][O+1]),u(A[v+1][O]),u(A[v][O])):(u(A[v][O+1]),u(A[v+1][O+1]),u(A[v+1][O]))}}function h(b){let y=new I;for(let g=0;g<n.length;g+=3)y.x=n[g+0],y.y=n[g+1],y.z=n[g+2],y.normalize().multiplyScalar(b),n[g+0]=y.x,n[g+1]=y.y,n[g+2]=y.z}function c(){let b=new I;for(let y=0;y<n.length;y+=3){b.x=n[y+0],b.y=n[y+1],b.z=n[y+2];let g=m(b)/2/Math.PI+.5,S=f(b)/Math.PI+.5;s.push(g,1-S)}_(),d()}function d(){for(let b=0;b<s.length;b+=6){let y=s[b+0],g=s[b+2],S=s[b+4],w=Math.max(y,g,S),A=Math.min(y,g,S);w>.9&&A<.1&&(y<.2&&(s[b+0]+=1),g<.2&&(s[b+2]+=1),S<.2&&(s[b+4]+=1))}}function u(b){n.push(b.x,b.y,b.z)}function p(b,y){let g=b*3;y.x=t[g+0],y.y=t[g+1],y.z=t[g+2]}function _(){let b=new I,y=new I,g=new I,S=new I,w=new he,A=new he,v=new he;for(let T=0,O=0;T<n.length;T+=9,O+=6){b.set(n[T+0],n[T+1],n[T+2]),y.set(n[T+3],n[T+4],n[T+5]),g.set(n[T+6],n[T+7],n[T+8]),w.set(s[O+0],s[O+1]),A.set(s[O+2],s[O+3]),v.set(s[O+4],s[O+5]),S.copy(b).add(y).add(g).divideScalar(3);let L=m(S);x(w,O+0,b,L),x(A,O+2,y,L),x(v,O+4,g,L)}}function x(b,y,g,S){S<0&&b.x===1&&(s[y]=b.x-1),g.x===0&&g.z===0&&(s[y]=S/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zd(t.vertices,t.indices,t.radius,t.detail)}},Fm=class Hd extends Kn{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=1/r,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,s,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Hd(t.radius,t.detail)}},Ps=new I,Ls=new I,ll=new I,Ns=new La,Bm=class extends xt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(za*t),a=e.getIndex(),n=e.getAttribute("position"),s=a?a.count:n.count,o=[0,0,0],l=["a","b","c"],h=new Array(3),c={},d=[];for(let u=0;u<s;u+=3){a?(o[0]=a.getX(u),o[1]=a.getX(u+1),o[2]=a.getX(u+2)):(o[0]=u,o[1]=u+1,o[2]=u+2);let{a:p,b:_,c:x}=Ns;if(p.fromBufferAttribute(n,o[0]),_.fromBufferAttribute(n,o[1]),x.fromBufferAttribute(n,o[2]),Ns.getNormal(ll),h[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[1]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[2]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){let f=(m+1)%3,b=h[m],y=h[f],g=Ns[l[m]],S=Ns[l[f]],w=`${b}_${y}`,A=`${y}_${b}`;A in c&&c[A]?(ll.dot(c[A].normal)<=r&&(d.push(g.x,g.y,g.z),d.push(S.x,S.y,S.z)),c[A]=null):w in c||(c[w]={index0:o[m],index1:o[f],normal:ll.clone()})}}for(let u in c)if(c[u]){let{index0:p,index1:_}=c[u];Ps.fromBufferAttribute(n,p),Ls.fromBufferAttribute(n,_),d.push(Ps.x,Ps.y,Ps.z),d.push(Ls.x,Ls.y,Ls.z)}this.setAttribute("position",new Ke(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ur=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let h=i[r],c=i[r+1]-h,d=(n-h)/c;return(r+d)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new he:new I);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,r=[],a=[],n=[],s=new I,o=new Ye;for(let u=0;u<=e;u++){let p=u/e;r[u]=this.getTangentAt(p,new I)}a[0]=new I,n[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),d<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let u=1;u<=e;u++){if(a[u]=a[u-1].clone(),n[u]=n[u-1].clone(),s.crossVectors(r[u-1],r[u]),s.length()>Number.EPSILON){s.normalize();let p=Math.acos(ut(r[u-1].dot(r[u]),-1,1));a[u].applyMatrix4(o.makeRotationAxis(s,p))}n[u].crossVectors(r[u],a[u])}if(t===!0){let u=Math.acos(ut(a[0].dot(a[e]),-1,1));u/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(u=-u);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],u*p)),n[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},wh=class extends ur{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new he){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*h-u*c+this.aX,l=d*c+u*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zm=class extends wh{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function Ah(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,c,d){let u=(s-n)/h-(o-n)/(h+c)+(o-s)/c,p=(o-s)/c-(l-s)/(c+d)+(l-o)/d;u*=c,p*=c,a(s,o,u,p)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}var pu=new I,fu=new I,hl=new Ah,cl=new Ah,ul=new Ah,Hm=class extends ur{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new I){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=r[(s-1)%a]:(fu.subVectors(r[0],r[1]).add(r[0]),l=fu);let c=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?h=r[(s+2)%a]:(pu.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=pu),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(c),u),_=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),p<1e-4&&(p=_),x<1e-4&&(x=_),hl.initNonuniformCatmullRom(l.x,c.x,d.x,h.x,p,_,x),cl.initNonuniformCatmullRom(l.y,c.y,d.y,h.y,p,_,x),ul.initNonuniformCatmullRom(l.z,c.z,d.z,h.z,p,_,x)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(l.x,c.x,d.x,h.x,this.tension),cl.initCatmullRom(l.y,c.y,d.y,h.y,this.tension),ul.initCatmullRom(l.z,c.z,d.z,h.z,this.tension));return i.set(hl.calc(o),cl.calc(o),ul.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function mu(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function km(e,t){let i=1-e;return i*i*t}function Gm(e,t){return 2*(1-e)*e*t}function Vm(e,t){return e*e*t}function Ln(e,t,i,r){return km(e,t)+Gm(e,i)+Vm(e,r)}function Wm(e,t){let i=1-e;return i*i*i*t}function Xm(e,t){let i=1-e;return 3*i*i*e*t}function jm(e,t){return 3*(1-e)*e*e*t}function qm(e,t){return e*e*e*t}function Nn(e,t,i,r,a){return Wm(e,t)+Xm(e,i)+jm(e,r)+qm(e,a)}var kd=class extends ur{constructor(e=new he,t=new he,i=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new he){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Nn(e,r.x,a.x,n.x,s.x),Nn(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ym=class extends ur{constructor(e=new I,t=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new I){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Nn(e,r.x,a.x,n.x,s.x),Nn(e,r.y,a.y,n.y,s.y),Nn(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gd=class extends ur{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zm=class extends ur{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vd=class extends ur{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Ln(e,r.x,a.x,n.x),Ln(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wd=class extends ur{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Ln(e,r.x,a.x,n.x),Ln(e,r.y,a.y,n.y),Ln(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xd=class extends ur{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],c=r[n>r.length-3?r.length-1:n+2];return i.set(mu(s,o.x,l.x,h.x,c.x),mu(s,o.y,l.y,h.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new he().fromArray(r))}return this}},eo=Object.freeze({__proto__:null,ArcCurve:zm,CatmullRomCurve3:Hm,CubicBezierCurve:kd,CubicBezierCurve3:Ym,EllipseCurve:wh,LineCurve:Gd,LineCurve3:Zm,QuadraticBezierCurve:Vd,QuadraticBezierCurve3:Wd,SplineCurve:Xd}),Km=class extends ur{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new eo[r.type]().fromJSON(r))}return this}},gu=class extends Km{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Gd(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new Vd(this.currentPoint.clone(),new he(e,t),new he(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new kd(this.currentPoint.clone(),new he(e,t),new he(i,r),new he(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Xd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new wh(e,t,i,r,a,n,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},jd=class extends gu{constructor(e){super(e),this.uuid=Di(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new gu().fromJSON(r))}return this}};function Jm(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=qd(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h;if(r&&(n=ig(e,t,n,i)),e.length>80*i){o=e[0],l=e[1];let c=o,d=l;for(let u=i;u<a;u+=i){let p=e[u],_=e[u+1];p<o&&(o=p),_<l&&(l=_),p>c&&(c=p),_>d&&(d=_)}h=Math.max(c-o,d-l),h=h!==0?32767/h:0}return Gn(n,s,i,o,l,h,0),s}function qd(e,t,i,r,a){let n;if(a===pg(e,t,i,r)>0)for(let s=t;s<i;s+=r)n=_u(s/r|0,e[s],e[s+1],n);else for(let s=i-r;s>=t;s-=r)n=_u(s/r|0,e[s],e[s+1],n);return n&&Qa(n,n.next)&&(Wn(n),n=n.next),n}function ia(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(Qa(i,i.next)||Ft(i.prev,i,i.next)===0)){if(Wn(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Gn(e,t,i,r,a,n,s){if(!e)return;!s&&n&&og(e,r,a,n);let o=e;for(;e.prev!==e.next;){let l=e.prev,h=e.next;if(n?Qm(e,r,a,n):$m(e)){t.push(l.i,e.i,h.i),Wn(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=eg(ia(e),t),Gn(e,t,i,r,a,n,2)):s===2&&tg(e,t,i,r,a,n):Gn(ia(e),t,i,r,a,n,1);break}}}function $m(e){let t=e.prev,i=e,r=e.next;if(Ft(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,h=r.y,c=Math.min(a,n,s),d=Math.min(o,l,h),u=Math.max(a,n,s),p=Math.max(o,l,h),_=r.next;for(;_!==t;){if(_.x>=c&&_.x<=u&&_.y>=d&&_.y<=p&&An(a,o,n,l,s,h,_.x,_.y)&&Ft(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Qm(e,t,i,r){let a=e.prev,n=e,s=e.next;if(Ft(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,c=a.y,d=n.y,u=s.y,p=Math.min(o,l,h),_=Math.min(c,d,u),x=Math.max(o,l,h),m=Math.max(c,d,u),f=ah(p,_,t,i,r),b=ah(x,m,t,i,r),y=e.prevZ,g=e.nextZ;for(;y&&y.z>=f&&g&&g.z<=b;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==a&&y!==s&&An(o,c,l,d,h,u,y.x,y.y)&&Ft(y.prev,y,y.next)>=0||(y=y.prevZ,g.x>=p&&g.x<=x&&g.y>=_&&g.y<=m&&g!==a&&g!==s&&An(o,c,l,d,h,u,g.x,g.y)&&Ft(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==a&&y!==s&&An(o,c,l,d,h,u,y.x,y.y)&&Ft(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;g&&g.z<=b;){if(g.x>=p&&g.x<=x&&g.y>=_&&g.y<=m&&g!==a&&g!==s&&An(o,c,l,d,h,u,g.x,g.y)&&Ft(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function eg(e,t){let i=e;do{let r=i.prev,a=i.next.next;!Qa(r,a)&&Zd(r,i,i.next,a)&&Vn(r,a)&&Vn(a,r)&&(t.push(r.i,i.i,a.i),Wn(i),Wn(i.next),i=e=a),i=i.next}while(i!==e);return ia(i)}function tg(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&cg(s,o)){let l=Kd(s,o);s=ia(s,s.next),l=ia(l,l.next),Gn(s,t,i,r,a,n,0),Gn(l,t,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function ig(e,t,i,r){let a=[];for(let n=0,s=t.length;n<s;n++){let o=t[n]*r,l=n<s-1?t[n+1]*r:e.length,h=qd(e,o,l,r,!1);h===h.next&&(h.steiner=!0),a.push(hg(h))}a.sort(rg);for(let n=0;n<a.length;n++)i=ag(a[n],i);return i}function rg(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let r=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);i=r-a}return i}function ag(e,t){let i=ng(e,t);if(!i)return t;let r=Kd(i,e);return ia(r,r.next),ia(i,i.next)}function ng(e,t){let i=t,r=e.x,a=e.y,n=-1/0,s;if(Qa(e,i))return i;do{if(Qa(e,i.next))return i.next;if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){let d=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=r&&d>n&&(n=d,s=i.x<i.next.x?i:i.next,d===r))return s}i=i.next}while(i!==t);if(!s)return null;let o=s,l=s.x,h=s.y,c=1/0;i=s;do{if(r>=i.x&&i.x>=l&&r!==i.x&&Yd(a<h?r:n,a,l,h,a<h?n:r,a,i.x,i.y)){let d=Math.abs(a-i.y)/(r-i.x);Vn(i,e)&&(d<c||d===c&&(i.x>s.x||i.x===s.x&&sg(s,i)))&&(s=i,c=d)}i=i.next}while(i!==o);return s}function sg(e,t){return Ft(e.prev,e,t.prev)<0&&Ft(t.next,e,e.next)<0}function og(e,t,i,r){let a=e;do a.z===0&&(a.z=ah(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,lg(a)}function lg(e){let t,i=1;do{let r=e,a;e=null;let n=null;for(t=0;r;){t++;let s=r,o=0;for(let h=0;h<i&&(o++,s=s.nextZ,!!s);h++);let l=i;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(a=r,r=r.nextZ,o--):(a=s,s=s.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=s}n.nextZ=null,i*=2}while(t>1);return e}function ah(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function hg(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function Yd(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function An(e,t,i,r,a,n,s,o){return!(e===s&&t===o)&&Yd(e,t,i,r,a,n,s,o)}function cg(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ug(e,t)&&(Vn(e,t)&&Vn(t,e)&&dg(e,t)&&(Ft(e.prev,e,t.prev)||Ft(e,t.prev,t))||Qa(e,t)&&Ft(e.prev,e,e.next)>0&&Ft(t.prev,t,t.next)>0)}function Ft(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Qa(e,t){return e.x===t.x&&e.y===t.y}function Zd(e,t,i,r){let a=Us(Ft(e,t,i)),n=Us(Ft(e,t,r)),s=Us(Ft(i,r,e)),o=Us(Ft(i,r,t));return!!(a!==n&&s!==o||a===0&&Ds(e,i,t)||n===0&&Ds(e,r,t)||s===0&&Ds(i,e,r)||o===0&&Ds(i,t,r))}function Ds(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Us(e){return e>0?1:e<0?-1:0}function ug(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Zd(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Vn(e,t){return Ft(e.prev,e,e.next)<0?Ft(e,t,e.next)>=0&&Ft(e,e.prev,t)>=0:Ft(e,t,e.prev)<0||Ft(e,e.next,t)<0}function dg(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function Kd(e,t){let i=nh(e.i,e.x,e.y),r=nh(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function _u(e,t,i,r){let a=nh(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function Wn(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function nh(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pg(e,t,i,r){let a=0;for(let n=t,s=i-r;n<i;n+=r)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var fg=class{static triangulate(e,t,i=2){return Jm(e,t,i)}},Kr=class Jd{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return Jd.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];vu(t),xu(r,t);let s=t.length;i.forEach(vu);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,xu(r,i[l]);let o=fg.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function vu(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function xu(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var mg=class $d extends xt{constructor(t=new jd([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new Ke(a,3)),this.setAttribute("uv",new Ke(n,2)),this.computeVertexNormals();function s(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,u=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,_=i.bevelSize!==void 0?i.bevelSize:p-.1,x=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,f=i.extrudePath,b=i.UVGenerator!==void 0?i.UVGenerator:gg,y,g=!1,S,w,A,v;if(f){y=f.getSpacedPoints(c),g=!0,u=!1;let le=f.isCatmullRomCurve3?f.closed:!1;S=f.computeFrenetFrames(c,le),w=new I,A=new I,v=new I}u||(m=0,p=0,_=0,x=0);let T=o.extractPoints(h),O=T.shape,L=T.holes;if(!Kr.isClockWise(O)){O=O.reverse();for(let le=0,ne=L.length;le<ne;le++){let pe=L[le];Kr.isClockWise(pe)&&(L[le]=pe.reverse())}}function N(le){let ne=10000000000000001e-36,pe=le[0];for(let Ee=1;Ee<=le.length;Ee++){let Ce=Ee%le.length,De=le[Ce],ke=De.x-pe.x,et=De.y-pe.y,$e=ke*ke+et*et,F=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(pe.x),Math.abs(pe.y)),St=ne*F*F;if($e<=St){le.splice(Ce,1),Ee--;continue}pe=De}}N(O),L.forEach(N);let q=L.length,U=O;for(let le=0;le<q;le++){let ne=L[le];O=O.concat(ne)}function G(le,ne,pe){return ne||tt("ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(ne,pe)}let Q=O.length;function X(le,ne,pe){let Ee,Ce,De,ke=le.x-ne.x,et=le.y-ne.y,$e=pe.x-le.x,F=pe.y-le.y,St=ke*ke+et*et,nt=ke*F-et*$e;if(Math.abs(nt)>Number.EPSILON){let rt=Math.sqrt(St),R=Math.sqrt($e*$e+F*F),M=ne.x-et/rt,B=ne.y+ke/rt,Z=pe.x-F/R,se=pe.y+$e/R,ve=((Z-M)*F-(se-B)*$e)/(ke*F-et*$e);Ee=M+ke*ve-le.x,Ce=B+et*ve-le.y;let Me=Ee*Ee+Ce*Ce;if(Me<=2)return new he(Ee,Ce);De=Math.sqrt(Me/2)}else{let rt=!1;ke>Number.EPSILON?$e>Number.EPSILON&&(rt=!0):ke<-Number.EPSILON?$e<-Number.EPSILON&&(rt=!0):Math.sign(et)===Math.sign(F)&&(rt=!0),rt?(Ee=-et,Ce=ke,De=Math.sqrt(St)):(Ee=ke,Ce=et,De=Math.sqrt(St/2))}return new he(Ee/De,Ce/De)}let ge=[];for(let le=0,ne=U.length,pe=ne-1,Ee=le+1;le<ne;le++,pe++,Ee++)pe===ne&&(pe=0),Ee===ne&&(Ee=0),ge[le]=X(U[le],U[pe],U[Ee]);let Y=[],K,ae=ge.concat();for(let le=0,ne=q;le<ne;le++){let pe=L[le];K=[];for(let Ee=0,Ce=pe.length,De=Ce-1,ke=Ee+1;Ee<Ce;Ee++,De++,ke++)De===Ce&&(De=0),ke===Ce&&(ke=0),K[Ee]=X(pe[Ee],pe[De],pe[ke]);Y.push(K),ae=ae.concat(K)}let Be;if(m===0)Be=Kr.triangulateShape(U,L);else{let le=[],ne=[];for(let pe=0;pe<m;pe++){let Ee=pe/m,Ce=p*Math.cos(Ee*Math.PI/2),De=_*Math.sin(Ee*Math.PI/2)+x;for(let ke=0,et=U.length;ke<et;ke++){let $e=G(U[ke],ge[ke],De);fe($e.x,$e.y,-Ce),Ee===0&&le.push($e)}for(let ke=0,et=q;ke<et;ke++){let $e=L[ke];K=Y[ke];let F=[];for(let St=0,nt=$e.length;St<nt;St++){let rt=G($e[St],K[St],De);fe(rt.x,rt.y,-Ce),Ee===0&&F.push(rt)}Ee===0&&ne.push(F)}}Be=Kr.triangulateShape(le,ne)}let Re=Be.length,ot=_+x;for(let le=0;le<Q;le++){let ne=u?G(O[le],ae[le],ot):O[le];g?(A.copy(S.normals[0]).multiplyScalar(ne.x),w.copy(S.binormals[0]).multiplyScalar(ne.y),v.copy(y[0]).add(A).add(w),fe(v.x,v.y,v.z)):fe(ne.x,ne.y,0)}for(let le=1;le<=c;le++)for(let ne=0;ne<Q;ne++){let pe=u?G(O[ne],ae[ne],ot):O[ne];g?(A.copy(S.normals[le]).multiplyScalar(pe.x),w.copy(S.binormals[le]).multiplyScalar(pe.y),v.copy(y[le]).add(A).add(w),fe(v.x,v.y,v.z)):fe(pe.x,pe.y,d/c*le)}for(let le=m-1;le>=0;le--){let ne=le/m,pe=p*Math.cos(ne*Math.PI/2),Ee=_*Math.sin(ne*Math.PI/2)+x;for(let Ce=0,De=U.length;Ce<De;Ce++){let ke=G(U[Ce],ge[Ce],Ee);fe(ke.x,ke.y,d+pe)}for(let Ce=0,De=L.length;Ce<De;Ce++){let ke=L[Ce];K=Y[Ce];for(let et=0,$e=ke.length;et<$e;et++){let F=G(ke[et],K[et],Ee);g?fe(F.x,F.y+y[c-1].y,y[c-1].x+pe):fe(F.x,F.y,d+pe)}}}je(),ee();function je(){let le=a.length/3;if(u){let ne=0,pe=Q*ne;for(let Ee=0;Ee<Re;Ee++){let Ce=Be[Ee];Ne(Ce[2]+pe,Ce[1]+pe,Ce[0]+pe)}ne=c+m*2,pe=Q*ne;for(let Ee=0;Ee<Re;Ee++){let Ce=Be[Ee];Ne(Ce[0]+pe,Ce[1]+pe,Ce[2]+pe)}}else{for(let ne=0;ne<Re;ne++){let pe=Be[ne];Ne(pe[2],pe[1],pe[0])}for(let ne=0;ne<Re;ne++){let pe=Be[ne];Ne(pe[0]+Q*c,pe[1]+Q*c,pe[2]+Q*c)}}r.addGroup(le,a.length/3-le,0)}function ee(){let le=a.length/3,ne=0;de(U,ne),ne+=U.length;for(let pe=0,Ee=L.length;pe<Ee;pe++){let Ce=L[pe];de(Ce,ne),ne+=Ce.length}r.addGroup(le,a.length/3-le,1)}function de(le,ne){let pe=le.length;for(;--pe>=0;){let Ee=pe,Ce=pe-1;Ce<0&&(Ce=le.length-1);for(let De=0,ke=c+m*2;De<ke;De++){let et=Q*De,$e=Q*(De+1),F=ne+Ee+et,St=ne+Ce+et,nt=ne+Ce+$e,rt=ne+Ee+$e;qe(F,St,nt,rt)}}}function fe(le,ne,pe){l.push(le),l.push(ne),l.push(pe)}function Ne(le,ne,pe){ye(le),ye(ne),ye(pe);let Ee=a.length/3,Ce=b.generateTopUV(r,a,Ee-3,Ee-2,Ee-1);it(Ce[0]),it(Ce[1]),it(Ce[2])}function qe(le,ne,pe,Ee){ye(le),ye(ne),ye(Ee),ye(ne),ye(pe),ye(Ee);let Ce=a.length/3,De=b.generateSideWallUV(r,a,Ce-6,Ce-3,Ce-2,Ce-1);it(De[0]),it(De[1]),it(De[3]),it(De[1]),it(De[2]),it(De[3])}function ye(le){a.push(l[le*3+0]),a.push(l[le*3+1]),a.push(l[le*3+2])}function it(le){n.push(le.x),n.push(le.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return _g(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new eo[a.type]().fromJSON(a)),new $d(r,t.options)}},gg={generateTopUV:function(e,t,i,r,a){let n=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],c=t[a*3+1];return[new he(n,s),new he(o,l),new he(h,c)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],c=t[r*3+1],d=t[r*3+2],u=t[a*3],p=t[a*3+1],_=t[a*3+2],x=t[n*3],m=t[n*3+1],f=t[n*3+2];return Math.abs(o-c)<Math.abs(s-h)?[new he(s,1-l),new he(h,1-d),new he(u,1-_),new he(x,1-f)]:[new he(o,1-l),new he(c,1-d),new he(p,1-_),new he(m,1-f)]}};function _g(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var Rh=class Qd extends Kn{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,n,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Qd(t.radius,t.detail)}},vg=class ep extends xt{constructor(t=[new he(0,-.5),new he(.5,0),new he(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=ut(a,0,Math.PI*2);let n=[],s=[],o=[],l=[],h=[],c=1/i,d=new I,u=new he,p=new I,_=new I,x=new I,m=0,f=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,f=t[b+1].y-t[b].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[b+1].x-t[b].x,f=t[b+1].y-t[b].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(_)}for(let b=0;b<=i;b++){let y=r+b*c*a,g=Math.sin(y),S=Math.cos(y);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*g,d.y=t[w].y,d.z=t[w].x*S,s.push(d.x,d.y,d.z),u.x=b/i,u.y=w/(t.length-1),o.push(u.x,u.y);let A=l[3*w+0]*g,v=l[3*w+1],T=l[3*w+0]*S;h.push(A,v,T)}}for(let b=0;b<i;b++)for(let y=0;y<t.length-1;y++){let g=y+b*t.length,S=g,w=g+t.length,A=g+t.length+1,v=g+1;n.push(S,w,v),n.push(A,v,w)}this.setIndex(n),this.setAttribute("position",new Ke(s,3)),this.setAttribute("uv",new Ke(o,2)),this.setAttribute("normal",new Ke(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ep(t.points,t.segments,t.phiStart,t.phiLength)}},Ch=class tp extends Kn{constructor(t=1,i=0){let r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new tp(t.radius,t.detail)}},Ai=class ip extends xt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,c=l+1,d=t/o,u=i/l,p=[],_=[],x=[],m=[];for(let f=0;f<c;f++){let b=f*u-s;for(let y=0;y<h;y++){let g=y*d-n;_.push(g,-b,0),x.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){let y=b+h*f,g=b+h*(f+1),S=b+1+h*(f+1),w=b+1+h*f;p.push(y,g,w),p.push(g,S,w)}this.setIndex(p),this.setAttribute("position",new Ke(_,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ip(t.width,t.height,t.widthSegments,t.heightSegments)}},xg=class rp extends xt{constructor(t=.5,i=1,r=32,a=1,n=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:n,thetaLength:s},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],h=[],c=[],d=t,u=(i-t)/a,p=new I,_=new he;for(let x=0;x<=a;x++){for(let m=0;m<=r;m++){let f=n+m/r*s;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),h.push(0,0,1),_.x=(p.x/i+1)/2,_.y=(p.y/i+1)/2,c.push(_.x,_.y)}d+=u}for(let x=0;x<a;x++){let m=x*(r+1);for(let f=0;f<r;f++){let b=f+m,y=b,g=b+r+1,S=b+r+2,w=b+1;o.push(y,g,w),o.push(g,S,w)}}this.setIndex(o),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rp(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},yg=class ap extends xt{constructor(t=new jd([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(n,3)),this.setAttribute("uv",new Ke(s,2));function h(c){let d=a.length/3,u=c.extractPoints(i),p=u.shape,_=u.holes;Kr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=_.length;m<f;m++){let b=_[m];Kr.isClockWise(b)===!0&&(_[m]=b.reverse())}let x=Kr.triangulateShape(p,_);for(let m=0,f=_.length;m<f;m++){let b=_[m];p=p.concat(b)}for(let m=0,f=p.length;m<f;m++){let b=p[m];a.push(b.x,b.y,0),n.push(0,0,1),s.push(b.x,b.y)}for(let m=0,f=x.length;m<f;m++){let b=x[m],y=b[0]+d,g=b[1]+d,S=b[2]+d;r.push(y,g,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return Mg(i,t)}static fromJSON(t,i){let r=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=i[t.shapes[a]];r.push(s)}return new ap(r,t.curveSegments)}};function Mg(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var Sg=class np extends xt{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),h=0,c=[],d=new I,u=new I,p=[],_=[],x=[],m=[];for(let f=0;f<=r;f++){let b=[],y=f/r,g=s+y*o,S=t*Math.cos(g),w=Math.sqrt(t*t-S*S),A=0;f===0&&s===0?A=.5/i:f===r&&l===Math.PI&&(A=-.5/i);for(let v=0;v<=i;v++){let T=v/i,O=a+T*n;d.x=-w*Math.cos(O),d.y=S,d.z=w*Math.sin(O),_.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(T+A,1-y),b.push(h++)}c.push(b)}for(let f=0;f<r;f++)for(let b=0;b<i;b++){let y=c[f][b+1],g=c[f][b],S=c[f+1][b],w=c[f+1][b+1];(f!==0||s>0)&&p.push(y,g,w),(f!==r-1||l<Math.PI)&&p.push(g,S,w)}this.setIndex(p),this.setAttribute("position",new Ke(_,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new np(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},bg=class sp extends Kn{constructor(t=1,i=0){let r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,a,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new sp(t.radius,t.detail)}},Ih=class op extends xt{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],d=[],u=new I,p=new I,_=new I;for(let x=0;x<=r;x++){let m=s+x/r*o;for(let f=0;f<=a;f++){let b=f/a*n;p.x=(t+i*Math.cos(m))*Math.cos(b),p.y=(t+i*Math.cos(m))*Math.sin(b),p.z=i*Math.sin(m),h.push(p.x,p.y,p.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),_.subVectors(p,u).normalize(),c.push(_.x,_.y,_.z),d.push(f/a),d.push(x/r)}}for(let x=1;x<=r;x++)for(let m=1;m<=a;m++){let f=(a+1)*x+m-1,b=(a+1)*(x-1)+m-1,y=(a+1)*(x-1)+m,g=(a+1)*x+m;l.push(f,b,g),l.push(b,y,g)}this.setIndex(l),this.setAttribute("position",new Ke(h,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new op(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Tg=class lp extends xt{constructor(t=1,i=.4,r=64,a=8,n=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:r,radialSegments:a,p:n,q:s},r=Math.floor(r),a=Math.floor(a);let o=[],l=[],h=[],c=[],d=new I,u=new I,p=new I,_=new I,x=new I,m=new I,f=new I;for(let y=0;y<=r;++y){let g=y/r*n*Math.PI*2;b(g,n,s,t,p),b(g+.01,n,s,t,_),m.subVectors(_,p),f.addVectors(_,p),x.crossVectors(m,f),f.crossVectors(x,m),x.normalize(),f.normalize();for(let S=0;S<=a;++S){let w=S/a*Math.PI*2,A=-i*Math.cos(w),v=i*Math.sin(w);d.x=p.x+(A*f.x+v*x.x),d.y=p.y+(A*f.y+v*x.y),d.z=p.z+(A*f.z+v*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),h.push(u.x,u.y,u.z),c.push(y/r),c.push(S/a)}}for(let y=1;y<=r;y++)for(let g=1;g<=a;g++){let S=(a+1)*(y-1)+(g-1),w=(a+1)*y+(g-1),A=(a+1)*y+g,v=(a+1)*(y-1)+g;o.push(S,w,v),o.push(w,A,v)}this.setIndex(o),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(c,2));function b(y,g,S,w,A){let v=Math.cos(y),T=Math.sin(y),O=S/g*y,L=Math.cos(O);A.x=w*(2+L)*.5*v,A.y=w*(2+L)*T*.5,A.z=w*Math.sin(O)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lp(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Eg=class hp extends xt{constructor(t=new Wd(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new I,l=new I,h=new he,c=new I,d=[],u=[],p=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(p,2));function x(){for(let y=0;y<i;y++)m(y);m(n===!1?i:0),b(),f()}function m(y){c=t.getPointAt(y/i,c);let g=s.normals[y],S=s.binormals[y];for(let w=0;w<=a;w++){let A=w/a*Math.PI*2,v=Math.sin(A),T=-Math.cos(A);l.x=T*g.x+v*S.x,l.y=T*g.y+v*S.y,l.z=T*g.z+v*S.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=c.x+r*l.x,o.y=c.y+r*l.y,o.z=c.z+r*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let y=1;y<=i;y++)for(let g=1;g<=a;g++){let S=(a+1)*(y-1)+(g-1),w=(a+1)*y+(g-1),A=(a+1)*y+g,v=(a+1)*(y-1)+g;_.push(S,w,v),_.push(w,A,v)}}function b(){for(let y=0;y<=i;y++)for(let g=0;g<=a;g++)h.x=y/i,h.y=g/a,p.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new hp(new eo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},wg=class extends xt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new I,a=new I;if(e.index!==null){let n=e.attributes.position,s=e.index,o=e.groups;o.length===0&&(o=[{start:0,count:s.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let c=o[l],d=c.start,u=c.count;for(let p=d,_=d+u;p<_;p+=3)for(let x=0;x<3;x++){let m=s.getX(p+x),f=s.getX(p+(x+1)%3);r.fromBufferAttribute(n,m),a.fromBufferAttribute(n,f),yu(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let n=e.attributes.position;for(let s=0,o=n.count/3;s<o;s++)for(let l=0;l<3;l++){let h=3*s+l,c=3*s+(l+1)%3;r.fromBufferAttribute(n,h),a.fromBufferAttribute(n,c),yu(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new Ke(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function yu(e,t,i){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(r)===!0||i.has(a)===!0?!1:(i.add(r),i.add(a),!0)}var nM=Object.freeze({__proto__:null,BoxGeometry:cr,CapsuleGeometry:Um,CircleGeometry:Eh,ConeGeometry:Om,CylinderGeometry:Od,DodecahedronGeometry:Fm,EdgesGeometry:Bm,ExtrudeGeometry:mg,IcosahedronGeometry:Rh,LatheGeometry:vg,OctahedronGeometry:Ch,PlaneGeometry:Ai,PolyhedronGeometry:Kn,RingGeometry:xg,ShapeGeometry:yg,SphereGeometry:Sg,TetrahedronGeometry:bg,TorusGeometry:Ih,TorusKnotGeometry:Tg,TubeGeometry:Eg,WireframeGeometry:wg});function en(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(Mu(a))a.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(Mu(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function gi(e){let t={};for(let i=0;i<e.length;i++){let r=en(e[i]);for(let a in r)t[a]=r[a]}return t}function Mu(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ag(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function cp(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ct.workingColorSpace}var Qi={clone:en,merge:gi},Rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bt=class extends $i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rg,this.fragmentShader=Cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=en(e.uniforms),this.uniformsGroups=Ag(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new we().setHex(r.value);break;case"v2":this.uniforms[i].value=new he().fromArray(r.value);break;case"v3":this.uniforms[i].value=new I().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Rt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new st().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ye().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ph=class extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ti=class extends $i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},er=class extends ti{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ig=class extends $i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pg=class extends $i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Or(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function js(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function Lg(e){function t(a,n){return e[a]-e[n]}let i=e.length,r=new Array(i);for(let a=0;a!==i;++a)r[a]=a;return r.sort(t),r}function Su(e,t,i){let r=e.length,a=new e.constructor(r);for(let n=0,s=0;s!==r;++n){let o=i[n]*t;for(let l=0;l!==t;++l)a[s++]=e[o+l]}return a}function Ng(e,t,i,r){let a=1,n=e[0];for(;n!==void 0&&n[r]===void 0;)n=e[a++];if(n===void 0)return;let s=n[r];if(s!==void 0)if(Array.isArray(s))do s=n[r],s!==void 0&&(t.push(n.time),i.push(...s)),n=e[a++];while(n!==void 0);else if(s.toArray!==void 0)do s=n[r],s!==void 0&&(t.push(n.time),s.toArray(i,i.length)),n=e[a++];while(n!==void 0);else do s=n[r],s!==void 0&&(t.push(n.time),i.push(s)),n=e[a++];while(n!==void 0)}var aa=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Dg=class extends aa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nc,endingEnd:Nc}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case Dc:a=e,s=2*t-i;break;case Uc:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Dc:n=e,o=2*i-t;break;case Uc:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-t)/(r-t),_=p*p,x=_*p,m=-d*x+2*d*_-d*p,f=(1+d)*x+(-1.5-2*d)*_+(-.5+d)*p+1,b=(-1-u)*x+(1.5+u)*_+.5*p,y=u*x-u*_;for(let g=0;g!==s;++g)a[g]=m*n[h+g]+f*n[l+g]+b*n[o+g]+y*n[c+g];return a}},Ug=class extends aa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),c=1-h;for(let d=0;d!==s;++d)a[d]=n[l+d]*c+n[o+d]*h;return a}},Og=class extends aa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Fg=class extends aa{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this.inTangents,c=this.outTangents;if(!h||!c){let p=(i-t)/(r-t),_=1-p;for(let x=0;x!==s;++x)a[x]=n[l+x]*_+n[o+x]*p;return a}let d=s*2,u=e-1;for(let p=0;p!==s;++p){let _=n[l+p],x=n[o+p],m=u*d+p*2,f=c[m],b=c[m+1],y=e*d+p*2,g=h[y],S=h[y+1],w=zg(i,t,f,g,r);a[p]=up(w,_,b,S,x)}return a}};function up(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function Bg(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function zg(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=up(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=Bg(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}var tr=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Or(t,this.TimeBufferType),this.values=Or(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Or(e.times,Array),values:Or(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),js(e.settings)&&(i.settings={inTangents:Or(e.settings.inTangents,Array),outTangents:Or(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Og(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ug(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Fg(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ya:t=this.InterpolantFactoryMethodDiscrete;break;case Za:t=this.InterpolantFactoryMethodLinear;break;case Bo:t=this.InterpolantFactoryMethodSmooth;break;case Lc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return We("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ya;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return Bo;case this.InterpolantFactoryMethodBezier:return Lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;js(this.settings)&&(bu(this.settings.inTangents,e),bu(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){tt("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){tt("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&kf(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){tt("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Bo,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(r)o=!0;else{let c=s*i,d=c-i,u=c+i;for(let p=0;p!==i;++p){let _=t[c+p];if(_!==t[d+p]||_!==t[u+p]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*i,d=n*i;for(let u=0;u!==i;++u)t[d+u]=t[c+u]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,js(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function bu(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}tr.prototype.ValueTypeName="";tr.prototype.TimeBufferType=Float32Array;tr.prototype.ValueBufferType=Float32Array;tr.prototype.DefaultInterpolation=Za;var an=class extends tr{constructor(e,t,i){super(e,t,i)}};an.prototype.ValueTypeName="bool";an.prototype.ValueBufferType=Array;an.prototype.DefaultInterpolation=Ya;an.prototype.InterpolantFactoryMethodLinear=void 0;an.prototype.InterpolantFactoryMethodSmooth=void 0;var dp=class extends tr{constructor(e,t,i,r){super(e,t,i,r)}};dp.prototype.ValueTypeName="color";var nn=class extends tr{constructor(e,t,i,r){super(e,t,i,r)}};nn.prototype.ValueTypeName="number";var Hg=class extends aa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let h=l+s;l!==h;l+=4)kt.slerpFlat(a,0,n,l-s,n,l,o);return a}},na=class extends tr{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Hg(this.times,this.values,this.getValueSize(),e)}};na.prototype.ValueTypeName="quaternion";na.prototype.InterpolantFactoryMethodSmooth=void 0;var sn=class extends tr{constructor(e,t,i){super(e,t,i)}};sn.prototype.ValueTypeName="string";sn.prototype.ValueBufferType=Array;sn.prototype.DefaultInterpolation=Ya;sn.prototype.InterpolantFactoryMethodLinear=void 0;sn.prototype.InterpolantFactoryMethodSmooth=void 0;var on=class extends tr{constructor(e,t,i,r){super(e,t,i,r)}};on.prototype.ValueTypeName="vector";var Lh=class{constructor(e="",t=-1,i=[],r=Pf){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Di(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let n=0,s=i.length;n!==s;++n)t.push(Gg(i[n]).scale(r));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,n=i.length;a!==n;++a)t.push(tr.toJSON(i[a]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let a=t.length,n=[];for(let s=0;s<a;s++){let o=[],l=[];o.push((s+a-1)%a,s,(s+1)%a),l.push(0,1,0);let h=Lg(o);o=Su(o,1,h),l=Su(l,1,h),!r&&o[0]===0&&(o.push(a),l.push(l[0])),n.push(new nn(".morphTargetInfluences["+t[s].name+"]",o,l).scale(1/i))}return new this(e,-1,n)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},a=/^([\w-]*?)([\d]+)$/;for(let s=0,o=e.length;s<o;s++){let l=e[s],h=l.name.match(a);if(h&&h.length>1){let c=h[1],d=r[c];d||(r[c]=d=[]),d.push(l)}}let n=[];for(let s in r)n.push(this.CreateFromMorphTargetSequence(s,r[s],t,i));return n}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function kg(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return nn;case"vector":case"vector2":case"vector3":case"vector4":return on;case"color":return dp;case"quaternion":return na;case"bool":case"boolean":return an;case"string":return sn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function Gg(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=kg(e.type);if(e.times===void 0){let r=[],a=[];Ng(e.keys,r,a,"value"),e.times=r,e.values=a}let i;return t.parse!==void 0?i=t.parse(e):i=new t(e.name,e.times,e.values,e.interpolation),js(e.settings)&&(i.settings={inTangents:Or(e.settings.inTangents,Float32Array),outTangents:Or(e.settings.outTangents,Float32Array)}),i}var yr={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Tu(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Tu(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Tu(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Vg=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){s++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=l.length;c<d;c+=2){let u=l[c],p=l[c+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wg=new Vg,sa=class{constructor(e){this.manager=e!==void 0?e:Wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};sa.DEFAULT_MATERIAL_NAME="__DEFAULT";var xr={},Xg=class extends Error{constructor(e,t){super(e),this.response=t}},Nh=class extends sa{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=yr.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(xr[e]!==void 0){xr[e].push({onLoad:t,onProgress:i,onError:r});return}xr[e]=[],xr[e].push({onLoad:t,onProgress:i,onError:r});let n=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),s=this.mimeType,o=this.responseType;fetch(n).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&We("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=xr[e],c=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=d?parseInt(d):0,p=u!==0,_=0,x=new ReadableStream({start(m){f();function f(){c.read().then(({done:b,value:y})=>{if(b)m.close();else{_+=y.byteLength;let g=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:u});for(let S=0,w=h.length;S<w;S++){let A=h[S];A.onProgress&&A.onProgress(g)}m.enqueue(y),f()}},b=>{m.error(b)})}}});return new Response(x)}else throw new Xg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,s));case"json":return l.json();default:if(s==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(s),c=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(c);return l.arrayBuffer().then(u=>d.decode(u))}}}).then(l=>{yr.add(`file:${e}`,l);let h=xr[e];delete xr[e];for(let c=0,d=h.length;c<d;c++){let u=h[c];u.onLoad&&u.onLoad(l)}}).catch(l=>{let h=xr[e];if(h===void 0)throw this.manager.itemError(e),l;delete xr[e];for(let c=0,d=h.length;c<d;c++){let u=h[c];u.onError&&u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Aa=new WeakMap,jg=class extends sa{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=yr.get(`image:${e}`);if(n!==void 0){if(n.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0);else{let c=Aa.get(n);c===void 0&&(c=[],Aa.set(n,c)),c.push({onLoad:t,onError:r})}return n}let s=Hn("img");function o(){h(),t&&t(this);let c=Aa.get(this)||[];for(let d=0;d<c.length;d++){let u=c[d];u.onLoad&&u.onLoad(this)}Aa.delete(this),a.manager.itemEnd(e)}function l(c){h(),r&&r(c),yr.remove(`image:${e}`);let d=Aa.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onError&&p.onError(c)}Aa.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){s.removeEventListener("load",o,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),yr.add(`image:${e}`,s),a.manager.itemStart(e),s.src=e,s}};var uo=class extends sa{constructor(e){super(e)}load(e,t,i,r){let a=new ui,n=new jg(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}},po=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},pp=class extends po{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},dl=new Ye,Eu=new I,wu=new I,Dh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $a,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eu),wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(dl,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===zn||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Os=new I,Fs=new kt,ar=new I,Uh=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Os,Fs,ar),ar.x===1&&ar.y===1&&ar.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Os,Fs,ar.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Os,Fs,ar),ar.x===1&&ar.y===1&&ar.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Os,Fs,ar.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Dr=new I,Au=new he,Ru=new he,ai=class extends Uh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,Au,Ru),t.subVectors(Ru,Au)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(za*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qg=class extends Dh{constructor(){super(new ai(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Ja*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},fo=class extends po{constructor(e,t,i=0,r=Math.PI/3,a=0,n=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=i,this.angle=r,this.penumbra=a,this.decay=n,this.map=null,this.shadow=new qg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Yg=class extends Dh{constructor(){super(new ai(90,1,.5,500)),this.isPointLightShadow=!0}},fp=class extends po{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Yg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},oa=class extends Uh{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zg=class extends Dh{constructor(){super(new oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jn=class extends po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Zg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ln=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var pl=new WeakMap,mp=class extends sa{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&We("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&We("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=yr.get(`image-bitmap:${e}`);if(n!==void 0){if(a.manager.itemStart(e),n.then){n.then(l=>{pl.has(n)===!0?(r&&r(pl.get(n)),a.manager.itemError(e),a.manager.itemEnd(e)):(t&&t(l),a.manager.itemEnd(e))});return}setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0);return}let s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",s.headers=this.requestHeader,s.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let o=fetch(e,s).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},a.options,{colorSpaceConversion:"none"}))}).then(function(l){return yr.add(`image-bitmap:${e}`,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){r&&r(l),pl.set(o,l),yr.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});yr.add(`image-bitmap:${e}`,o),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var sM=new Ye,oM=new Ye,lM=new Ye;var Ra=-90,Ca=1,Kg=class extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ai(Ra,Ca,e,t);r.layers=this.layers,this.add(r);let a=new ai(Ra,Ca,e,t);a.layers=this.layers,this.add(a);let n=new ai(Ra,Ca,e,t);n.layers=this.layers,this.add(n);let s=new ai(Ra,Ca,e,t);s.layers=this.layers,this.add(s);let o=new ai(Ra,Ca,e,t);o.layers=this.layers,this.add(o);let l=new ai(Ra,Ca,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===zn)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(c,d,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Jg=class extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},gp=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=$g.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function $g(){this._document.hidden===!1&&this.reset()}var hM=new I,cM=new kt,uM=new I,dM=new I,pM=new I;var fM=new I,mM=new kt,gM=new I,_M=new I;var Oh="\\[\\]\\.:\\/",Qg=new RegExp("["+Oh+"]","g"),Fh="[^"+Oh+"]",e0="[^"+Oh.replace("\\.","")+"]",t0=/((?:WC+[\/:])*)/.source.replace("WC",Fh),i0=/(WCOD+)?/.source.replace("WCOD",e0),r0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fh),a0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fh),n0=new RegExp("^"+t0+i0+r0+a0+"$"),s0=["material","materials","bones","map"],o0=class{constructor(e,t,i){let r=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class Da{constructor(t,i,r){this.path=i,this.parsedPath=r||Da.parseTrackName(i),this.node=Da.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new Da.Composite(t,i,r):new Da(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qg,"")}static parseTrackName(t){let i=n0.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);s0.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=Da.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=i.nodeName;tt("PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=o0;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vM=new Float32Array(1);var xM=new Ye;var Xa,yM=(Xa=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},Xa.prototype.isMatrix2=!0,Xa),MM=new he;var SM=new I,bM=new I,TM=new I,EM=new I,wM=new I,AM=new I,RM=new I;var CM=new I;var IM=new I,PM=new Ye,LM=new Ye;var NM=new I,DM=new we,UM=new we;var OM=new I,FM=new I,BM=new I;var zM=new I,HM=new Uh;var kM=new Ui;var GM=new I;function Cu(e,t,i,r){let a=l0(r);switch(i){case sd:return e*t;case dh:return e*t/a.components*a.byteLength;case ph:return e*t/a.components*a.byteLength;case ta:return e*t*2/a.components*a.byteLength;case fh:return e*t*2/a.components*a.byteLength;case od:return e*t*3/a.components*a.byteLength;case Ni:return e*t*4/a.components*a.byteLength;case mh:return e*t*4/a.components*a.byteLength;case Hs:case ks:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Gs:case Vs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Al:case Cl:return Math.max(e,16)*Math.max(t,8)/4;case wl:case Rl:return Math.max(e,8)*Math.max(t,8)/2;case Il:case Pl:case Nl:case Dl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ll:case Ys:case Ul:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case zl:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case kl:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case jl:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ql:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Kl:case Jl:case $l:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ql:case eh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Zs:case th:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function l0(e){switch(e){case wi:case id:return{byteLength:1,components:1};case Fn:case rd:case ei:return{byteLength:2,components:1};case ch:case uh:return{byteLength:2,components:4};case hr:case hh:case Li:return{byteLength:4,components:1};case ad:case nd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function _p(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function h0(e){let t=new WeakMap;function i(o,l){let h=o.array,c=o.usage,d=h.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=e.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,h){let c=l.array,d=l.updateRanges;if(e.bindBuffer(h,o),d.length===0)e.bufferSubData(h,0,c);else{d.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<d.length;p++){let _=d[u],x=d[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,_=d.length;p<_;p++){let x=d[p];e.bufferSubData(h,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}var c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u0=`#ifdef USE_ALPHAHASH
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
#endif`,d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g0=`#ifdef USE_AOMAP
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
#endif`,_0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v0=`#ifdef USE_BATCHING
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
#endif`,x0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b0=`#ifdef USE_IRIDESCENCE
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
#endif`,T0=`#ifdef USE_BUMPMAP
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,N0=`#define PI 3.141592653589793
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
} // validated`,D0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U0=`vec3 transformedNormal = objectNormal;
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
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",k0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
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
}`,$0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,i_=`#ifdef USE_ENVMAP
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
#endif`,r_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o_=`PhysicalMaterial material;
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
#endif`,l_=`uniform sampler2D dfgLUT;
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
}`,h_=`
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
#endif`,c_=`#if defined( RE_IndirectDiffuse )
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
#endif`,u_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,p_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,__=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y_=`#if defined( USE_POINTS_UV )
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
#endif`,M_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w_=`#ifdef USE_MORPHTARGETS
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
#endif`,A_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,N_=`#ifdef USE_NORMALMAP
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
#endif`,D_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,H_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z_=`float getShadowMask() {
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
}`,K_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J_=`#ifdef USE_SKINNING
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
#endif`,$_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q_=`#ifdef USE_SKINNING
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
#endif`,ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,av=`#ifdef USE_TRANSMISSION
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
#endif`,nv=`#ifdef USE_TRANSMISSION
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uv=`uniform sampler2D t2D;
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
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`#include <common>
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
}`,_v=`#if DEPTH_PACKING == 3200
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
}`,vv=`#define DISTANCE
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
}`,xv=`#define DISTANCE
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
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`uniform float scale;
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
}`,bv=`uniform vec3 diffuse;
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
}`,Tv=`#include <common>
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
}`,Ev=`uniform vec3 diffuse;
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
}`,wv=`#define LAMBERT
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
}`,Av=`#define LAMBERT
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
}`,Rv=`#define MATCAP
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
}`,Cv=`#define MATCAP
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
}`,Iv=`#define NORMAL
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
}`,Pv=`#define NORMAL
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
}`,Lv=`#define PHONG
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
}`,Nv=`#define PHONG
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
}`,Dv=`#define STANDARD
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
}`,Uv=`#define STANDARD
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
}`,Ov=`#define TOON
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
}`,Fv=`#define TOON
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
}`,Bv=`uniform float size;
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
}`,zv=`uniform vec3 diffuse;
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
}`,Hv=`#include <common>
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
}`,kv=`uniform vec3 color;
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
}`,Gv=`uniform float rotation;
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
}`,Vv=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:c0,alphahash_pars_fragment:u0,alphamap_fragment:d0,alphamap_pars_fragment:p0,alphatest_fragment:f0,alphatest_pars_fragment:m0,aomap_fragment:g0,aomap_pars_fragment:_0,batching_pars_vertex:v0,batching_vertex:x0,begin_vertex:y0,beginnormal_vertex:M0,bsdfs:S0,iridescence_fragment:b0,bumpmap_pars_fragment:T0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:w0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:R0,color_fragment:C0,color_pars_fragment:I0,color_pars_vertex:P0,color_vertex:L0,common:N0,cube_uv_reflection_fragment:D0,defaultnormal_vertex:U0,displacementmap_pars_vertex:O0,displacementmap_vertex:F0,emissivemap_fragment:B0,emissivemap_pars_fragment:z0,colorspace_fragment:H0,colorspace_pars_fragment:k0,envmap_fragment:G0,envmap_common_pars_fragment:V0,envmap_pars_fragment:W0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:i_,envmap_vertex:j0,fog_vertex:q0,fog_pars_vertex:Y0,fog_fragment:Z0,fog_pars_fragment:K0,gradientmap_pars_fragment:J0,lightmap_pars_fragment:$0,lights_lambert_fragment:Q0,lights_lambert_pars_fragment:e_,lights_pars_begin:t_,lights_toon_fragment:r_,lights_toon_pars_fragment:a_,lights_phong_fragment:n_,lights_phong_pars_fragment:s_,lights_physical_fragment:o_,lights_physical_pars_fragment:l_,lights_fragment_begin:h_,lights_fragment_maps:c_,lights_fragment_end:u_,lightprobes_pars_fragment:d_,logdepthbuf_fragment:p_,logdepthbuf_pars_fragment:f_,logdepthbuf_pars_vertex:m_,logdepthbuf_vertex:g_,map_fragment:__,map_pars_fragment:v_,map_particle_fragment:x_,map_particle_pars_fragment:y_,metalnessmap_fragment:M_,metalnessmap_pars_fragment:S_,morphinstance_vertex:b_,morphcolor_vertex:T_,morphnormal_vertex:E_,morphtarget_pars_vertex:w_,morphtarget_vertex:A_,normal_fragment_begin:R_,normal_fragment_maps:C_,normal_pars_fragment:I_,normal_pars_vertex:P_,normal_vertex:L_,normalmap_pars_fragment:N_,clearcoat_normal_fragment_begin:D_,clearcoat_normal_fragment_maps:U_,clearcoat_pars_fragment:O_,iridescence_pars_fragment:F_,opaque_fragment:B_,packing:z_,premultiplied_alpha_fragment:H_,project_vertex:k_,dithering_fragment:G_,dithering_pars_fragment:V_,roughnessmap_fragment:W_,roughnessmap_pars_fragment:X_,shadowmap_pars_fragment:j_,shadowmap_pars_vertex:q_,shadowmap_vertex:Y_,shadowmask_pars_fragment:Z_,skinbase_vertex:K_,skinning_pars_vertex:J_,skinning_vertex:$_,skinnormal_vertex:Q_,specularmap_fragment:ev,specularmap_pars_fragment:tv,tonemapping_fragment:iv,tonemapping_pars_fragment:rv,transmission_fragment:av,transmission_pars_fragment:nv,uv_pars_fragment:sv,uv_pars_vertex:ov,uv_vertex:lv,worldpos_vertex:hv,background_vert:cv,background_frag:uv,backgroundCube_vert:dv,backgroundCube_frag:pv,cube_vert:fv,cube_frag:mv,depth_vert:gv,depth_frag:_v,distance_vert:vv,distance_frag:xv,equirect_vert:yv,equirect_frag:Mv,linedashed_vert:Sv,linedashed_frag:bv,meshbasic_vert:Tv,meshbasic_frag:Ev,meshlambert_vert:wv,meshlambert_frag:Av,meshmatcap_vert:Rv,meshmatcap_frag:Cv,meshnormal_vert:Iv,meshnormal_frag:Pv,meshphong_vert:Lv,meshphong_frag:Nv,meshphysical_vert:Dv,meshphysical_frag:Uv,meshtoon_vert:Ov,meshtoon_frag:Fv,points_vert:Bv,points_frag:zv,shadow_vert:Hv,shadow_frag:kv,sprite_vert:Gv,sprite_frag:Vv},Te={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},sr={basic:{uniforms:gi([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:gi([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new we(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:gi([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:gi([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:gi([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new we(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:gi([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:gi([Te.points,Te.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:gi([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:gi([Te.common,Te.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:gi([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:gi([Te.sprite,Te.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:gi([Te.common,Te.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:gi([Te.lights,Te.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};sr.physical={uniforms:gi([sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Bs={r:0,b:0,g:0},Wv=new Ye,vp=new st;vp.set(-1,0,0,0,1,0,0,0,1);function Xv(e,t,i,r,a,n){let s=new we(0),o=a===!0?0:1,l,h,c=null,d=0,u=null;function p(b){let y=b.isScene===!0?b.background:null;if(y&&y.isTexture){let g=b.backgroundBlurriness>0;y=t.get(y,g)}return y}function _(b){let y=!1,g=p(b);g===null?m(s,o):g&&g.isColor&&(m(g,1),y=!0);let S=e.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,n):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function x(b,y){let g=p(y);g&&(g.isCubeTexture||g.mapping===oo)?(h===void 0&&(h=new mt(new cr(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:en(sr.backgroundCube.uniforms),vertexShader:sr.backgroundCube.vertexShader,fragmentShader:sr.backgroundCube.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(y.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(vp),h.material.toneMapped=ct.getTransfer(g.colorSpace)!==Tt,(c!==g||d!==g.version||u!==e.toneMapping)&&(h.material.needsUpdate=!0,c=g,d=g.version,u=e.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new mt(new Ai(2,2),new Bt({name:"BackgroundMaterial",uniforms:en(sr.background.uniforms),vertexShader:sr.background.vertexShader,fragmentShader:sr.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ct.getTransfer(g.colorSpace)!==Tt,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(c!==g||d!==g.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,c=g,d=g.version,u=e.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,y){b.getRGB(Bs,cp(e)),i.buffers.color.setClear(Bs.r,Bs.g,Bs.b,y,n)}function f(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,y=1){s.set(b),o=y,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(s,o)},render:_,addToRenderList:x,dispose:f}}function jv(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=u(null),n=a,s=!1;function o(L,N,q,U,G){let Q=!1,X=d(L,U,q,N);n!==X&&(n=X,h(n.object)),Q=p(L,U,q,G),Q&&_(L,U,q,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(Q||s)&&(s=!1,g(L,N,q,U),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function h(L){return e.bindVertexArray(L)}function c(L){return e.deleteVertexArray(L)}function d(L,N,q,U){let G=U.wireframe===!0,Q=r[N.id];Q===void 0&&(Q={},r[N.id]=Q);let X=L.isInstancedMesh===!0?L.id:0,ge=Q[X];ge===void 0&&(ge={},Q[X]=ge);let Y=ge[q.id];Y===void 0&&(Y={},ge[q.id]=Y);let K=Y[G];return K===void 0&&(K=u(l()),Y[G]=K),K}function u(L){let N=[],q=[],U=[];for(let G=0;G<i;G++)N[G]=0,q[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:U,object:L,attributes:{},index:null}}function p(L,N,q,U){let G=n.attributes,Q=N.attributes,X=0,ge=q.getAttributes();for(let Y in ge)if(ge[Y].location>=0){let K=G[Y],ae=Q[Y];if(ae===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),K===void 0||K.attribute!==ae||ae&&K.data!==ae.data)return!0;X++}return n.attributesNum!==X||n.index!==U}function _(L,N,q,U){let G={},Q=N.attributes,X=0,ge=q.getAttributes();for(let Y in ge)if(ge[Y].location>=0){let K=Q[Y];K===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));let ae={};ae.attribute=K,K&&K.data&&(ae.data=K.data),G[Y]=ae,X++}n.attributes=G,n.attributesNum=X,n.index=U}function x(){let L=n.newAttributes;for(let N=0,q=L.length;N<q;N++)L[N]=0}function m(L){f(L,0)}function f(L,N){let q=n.newAttributes,U=n.enabledAttributes,G=n.attributeDivisors;q[L]=1,U[L]===0&&(e.enableVertexAttribArray(L),U[L]=1),G[L]!==N&&(e.vertexAttribDivisor(L,N),G[L]=N)}function b(){let L=n.newAttributes,N=n.enabledAttributes;for(let q=0,U=N.length;q<U;q++)N[q]!==L[q]&&(e.disableVertexAttribArray(q),N[q]=0)}function y(L,N,q,U,G,Q,X){X===!0?e.vertexAttribIPointer(L,N,q,G,Q):e.vertexAttribPointer(L,N,q,U,G,Q)}function g(L,N,q,U){x();let G=U.attributes,Q=q.getAttributes(),X=N.defaultAttributeValues;for(let ge in Q){let Y=Q[ge];if(Y.location>=0){let K=G[ge];if(K===void 0&&(ge==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),ge==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){let ae=K.normalized,Be=K.itemSize,Re=t.get(K);if(Re===void 0)continue;let ot=Re.buffer,je=Re.type,ee=Re.bytesPerElement,de=je===e.INT||je===e.UNSIGNED_INT||K.gpuType===hh;if(K.isInterleavedBufferAttribute){let fe=K.data,Ne=fe.stride,qe=K.offset;if(fe.isInstancedInterleavedBuffer){for(let ye=0;ye<Y.locationSize;ye++)f(Y.location+ye,fe.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ye=0;ye<Y.locationSize;ye++)m(Y.location+ye);e.bindBuffer(e.ARRAY_BUFFER,ot);for(let ye=0;ye<Y.locationSize;ye++)y(Y.location+ye,Be/Y.locationSize,je,ae,Ne*ee,(qe+Be/Y.locationSize*ye)*ee,de)}else{if(K.isInstancedBufferAttribute){for(let fe=0;fe<Y.locationSize;fe++)f(Y.location+fe,K.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let fe=0;fe<Y.locationSize;fe++)m(Y.location+fe);e.bindBuffer(e.ARRAY_BUFFER,ot);for(let fe=0;fe<Y.locationSize;fe++)y(Y.location+fe,Be/Y.locationSize,je,ae,Be*ee,Be/Y.locationSize*fe*ee,de)}}else if(X!==void 0){let ae=X[ge];if(ae!==void 0)switch(ae.length){case 2:e.vertexAttrib2fv(Y.location,ae);break;case 3:e.vertexAttrib3fv(Y.location,ae);break;case 4:e.vertexAttrib4fv(Y.location,ae);break;default:e.vertexAttrib1fv(Y.location,ae)}}}}b()}function S(){T();for(let L in r){let N=r[L];for(let q in N){let U=N[q];for(let G in U){let Q=U[G];for(let X in Q)c(Q[X].object),delete Q[X];delete U[G]}}delete r[L]}}function w(L){if(r[L.id]===void 0)return;let N=r[L.id];for(let q in N){let U=N[q];for(let G in U){let Q=U[G];for(let X in Q)c(Q[X].object),delete Q[X];delete U[G]}}delete r[L.id]}function A(L){for(let N in r){let q=r[N];for(let U in q){let G=q[U];if(G[L.id]===void 0)continue;let Q=G[L.id];for(let X in Q)c(Q[X].object),delete Q[X];delete G[L.id]}}}function v(L){for(let N in r){let q=r[N],U=L.isInstancedMesh===!0?L.id:0,G=q[U];if(G!==void 0){for(let Q in G){let X=G[Q];for(let ge in X)c(X[ge].object),delete X[ge];delete G[Q]}delete q[U],Object.keys(q).length===0&&delete r[N]}}}function T(){O(),s=!0,n!==a&&(n=a,h(n.object))}function O(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:T,resetDefaultState:O,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function qv(e,t,i){let r;function a(l){r=l}function n(l,h){e.drawArrays(r,l,h),i.update(h,r,1)}function s(l,h,c){c!==0&&(e.drawArraysInstanced(r,l,h,c),i.update(h,r,c))}function o(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,c);let d=0;for(let u=0;u<c;u++)d+=h[u];i.update(d,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function Yv(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==Ni&&r.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let v=A===ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==wi&&A!==Li&&!v&&r.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(We("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=i.logarithmicDepthBuffer===!0,u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&u===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),g=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:g,maxSamples:S,samples:w}}function Zv(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Ur,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||r!==0||a;return a=u,r=d.length,p},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,u){i=c(d,u,0)},this.setState=function(d,u,p){let _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=e.get(d);if(!a||_===null||_.length===0||n&&!m)n?c(null):h();else{let b=n?0:r,y=b*4,g=f.clippingState||null;l.value=g,g=c(_,u,y,p);for(let S=0;S!==y;++S)g[S]=i[S];f.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(d,u,p,_){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,_!==!0||m===null){let f=p+x*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,g=p;y!==x;++y,g+=4)s.copy(d[y]).applyMatrix4(b,o),s.normal.toArray(m,g),m[g+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Oa=4,Kv=6,Jv=20,$v=256,Tn=new oa,Iu=new we,fl=null,ml=0,gl=0,_l=!1,Qv=new I,Yr=new I,Pu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=Qv}=a;fl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fl,ml,gl),this._renderer.xr.enabled=_l,e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===qa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:ei,format:Ni,colorSpace:Si,depthBuffer:!1},r=Lu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ex(a)),this._blurMaterial=ix(a,e,t),this._ggxMaterial=tx(a,e,t)}return r}_compileMaterial(e){let t=new mt(new xt,e);this._renderer.compile(t,Tn)}_sceneToCubeUV(e,t,i,r,a){let n=new ai(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(Iu),l.toneMapping=lr,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mt(new cr,new ni({name:"PMREM.Background",side:Mi,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,u=d.material,p=!1,_=e.background;_?_.isColor&&(u.color.copy(_),e.background=null,p=!0):(u.color.copy(Iu),p=!0);for(let x=0;x<6;x++){let m=x%3;m===0?(n.up.set(0,s[x],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[x],a.y,a.z)):m===1?(n.up.set(0,0,s[x]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[x],a.z)):(n.up.set(0,s[x],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[x]));let f=this._cubeSize;Ia(r,m*f,x>2?f:0,f,f),l.setRenderTarget(r),p&&l.render(d,n),l.render(e,n)}l.toneMapping=c,l.autoClear=h,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Qr||e.mapping===qa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Ia(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,Tn)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),c=Math.sqrt(l*l-h*h),d=l*1.25,u=c*d,{_lodMax:p}=this,_=this._sizeLods[i],x=3*_*(i>p-Oa?i-p+Oa:0),m=4*(this._cubeSize-_);o.envMap.value=e.texture,o.roughness.value=u,o.mipInt.value=p-t,Ia(a,x,m,3*_,2*_),r.setRenderTarget(a),r.render(s,Tn),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=p-i,Ia(e,x,m,3*_,2*_),r.setRenderTarget(e),r.render(s,Tn)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let l=s.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[r],c=3*h*(r>this._lodMax-Oa?r-this._lodMax+Oa:0),d=4*(this._cubeSize-h);Ia(t,c,d,3*h,2*h),n.setRenderTarget(t),n.render(o,Tn)}};function ex(e){let t=[],i=[],r=e,a=e-Oa+1+Kv;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let o=1/(s-2),l=-o,h=1+o,c=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,u=6,p=3,_=new Float32Array(p*u*d),x=new Float32Array(p*u*d);for(let f=0;f<d;f++){let b=f%3*2/3-1,y=f>2?0:-1,g=[b,y,0,b+2/3,y,0,b+2/3,y+1,0,b,y,0,b+2/3,y+1,0,b,y+1,0];_.set(g,p*u*f);for(let S=0;S<u;S++){let w=c[S*2]*2-1,A=c[S*2+1]*2-1;f===0?Yr.set(1,A,w):f===1?Yr.set(-w,1,-A):f===2?Yr.set(-w,A,1):f===3?Yr.set(-1,A,-w):f===4?Yr.set(-w,-1,A):Yr.set(w,A,-1),Yr.toArray(x,(f*u+S)*p)}}let m=new xt;m.setAttribute("position",new Nt(_,p)),m.setAttribute("outputDirection",new Nt(x,p)),i.push(new mt(m,null)),r>Oa&&r--}return{lodMeshes:i,sizeLods:t}}function Lu(e,t,i){let r=new Zt(e,t,i);return r.texture.mapping=oo,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ia(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function tx(e,t,i){return new Bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$v,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mo(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function ix(e,t,i){return new Bt({name:"SphericalGaussianBlur",defines:{SAMPLES:Jv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:mo(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Nu(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mo(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Du(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function mo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xp=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Pd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new cr(5,5,5),a=new Bt({name:"CubemapFromEquirect",uniforms:en(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mi,blending:Ji});a.uniforms.tEquirect.value=t;let n=new mt(r,a),s=t.minFilter;return t.minFilter===or&&(t.minFilter=Ht),new Kg(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function rx(e){let t=new WeakMap,i=new WeakMap,r=null;function a(u,p=!1){return u==null?null:p?s(u):n(u)}function n(u){if(u&&u.isTexture){let p=u.mapping;if(p===Oo||p===Fo)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let x=new xp(_.height);return x.fromEquirectangularTexture(e,u),t.set(u,x),u.addEventListener("dispose",h),o(x.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let p=u.mapping,_=p===Oo||p===Fo,x=p===Qr||p===qa;if(_||x){let m=i.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return r===null&&(r=new Pu(e)),m=_?r.fromEquirectangular(u,m):r.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return _&&b&&b.height>0||x&&b&&l(b)?(r===null&&(r=new Pu(e)),m=_?r.fromEquirectangular(u):r.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",c),m.texture):null}}}return u}function o(u,p){return p===Oo?u.mapping=Qr:p===Fo&&(u.mapping=qa),u}function l(u){let p=0,_=6;for(let x=0;x<_;x++)u[x]!==void 0&&p++;return p===_}function h(u){let p=u.target;p.removeEventListener("dispose",h);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function c(u){let p=u.target;p.removeEventListener("dispose",c);let _=i.get(p);_!==void 0&&(i.delete(p),_.dispose())}function d(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:d}}function ax(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Ba("WebGLRenderer: "+r+" extension not supported."),a}}}function nx(e,t,i,r){let a={},n=new WeakMap;function s(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",s),delete a[u.id];let p=n.get(u);p&&(t.remove(p),n.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function o(d,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,i.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)t.update(u[p],e.ARRAY_BUFFER)}function h(d){let u=[],p=d.index,_=d.attributes.position,x=0;if(_===void 0)return;if(p!==null){let b=p.array;x=p.version;for(let y=0,g=b.length;y<g;y+=3){let S=b[y+0],w=b[y+1],A=b[y+2];u.push(S,w,w,A,A,S)}}else{let b=_.array;x=_.version;for(let y=0,g=b.length/3-1;y<g;y+=3){let S=y+0,w=y+1,A=y+2;u.push(S,w,w,A,A,S)}}let m=new(_.count>=65535?Sd:Md)(u,1);m.version=x;let f=n.get(d);f&&t.remove(f),n.set(d,m)}function c(d){let u=n.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&h(d)}else h(d);return n.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function sx(e,t,i){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,u){e.drawElements(r,u,n,d*s),i.update(u,r,1)}function h(d,u,p){p!==0&&(e.drawElementsInstanced(r,u,n,d*s,p),i.update(u,r,p))}function c(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,n,d,0,p);let _=0;for(let x=0;x<p;x++)_+=u[x];i.update(_,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function ox(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:tt("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function lx(e,t,i){let r=new WeakMap,a=new Rt;function n(s,o,l){let h=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0,u=r.get(o);if(u===void 0||u.count!==d){let p=function(){v.dispose(),r.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();let _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],g=0;_===!0&&(g=1),x===!0&&(g=2),m===!0&&(g=3);let S=o.attributes.position.count*g,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let A=new Float32Array(S*w*4*d),v=new fd(A,S,w,d);v.type=Li,v.needsUpdate=!0;let T=g*4;for(let O=0;O<d;O++){let L=f[O],N=b[O],q=y[O],U=S*w*4*O;for(let G=0;G<L.count;G++){let Q=G*T;_===!0&&(a.fromBufferAttribute(L,G),A[U+Q+0]=a.x,A[U+Q+1]=a.y,A[U+Q+2]=a.z,A[U+Q+3]=0),x===!0&&(a.fromBufferAttribute(N,G),A[U+Q+4]=a.x,A[U+Q+5]=a.y,A[U+Q+6]=a.z,A[U+Q+7]=0),m===!0&&(a.fromBufferAttribute(q,G),A[U+Q+8]=a.x,A[U+Q+9]=a.y,A[U+Q+10]=a.z,A[U+Q+11]=q.itemSize===4?a.w:1)}}u={count:d,texture:v,size:new he(S,w)},r.set(o,u),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let p=0;for(let x=0;x<h.length;x++)p+=h[x];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:n}}function hx(e,t,i,r,a){let n=new WeakMap;function s(h){let c=a.render.frame,d=h.geometry,u=t.get(h,d);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),n.get(h)!==c&&(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,e.ARRAY_BUFFER),n.set(h,c))),h.isSkinnedMesh){let p=h.skeleton;n.get(p)!==c&&(p.update(),n.set(p,c))}return u}function o(){n=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),r.releaseStatesOfObject(c),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:s,dispose:o}}var cx={[to]:"LINEAR_TONE_MAPPING",[io]:"REINHARD_TONE_MAPPING",[ro]:"CINEON_TONE_MAPPING",[tn]:"ACES_FILMIC_TONE_MAPPING",[no]:"AGX_TONE_MAPPING",[so]:"NEUTRAL_TONE_MAPPING",[ao]:"CUSTOM_TONE_MAPPING"};function ux(e,t,i,r,a,n){let s=new Zt(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new xt;h.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let c=new Ph({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new mt(h,c),u=new oa(-1,1,1,-1,0,1),p=null,_=null,x=!1,m,f=null,b=[],y=!1;this.setSize=function(g,S){s.setSize(g,S),o!==null&&o.setSize(g,S),l!==null&&l.setSize(g,S);for(let w=0;w<b.length;w++){let A=b[w];A.setSize&&A.setSize(g,S)}},this.setEffects=function(g){b=g,y=b.length>0&&b[0].isRenderPass===!0;let S=s.width,w=s.height;b.length>0&&o===null&&(o=new Zt(S,w,{type:ei,depthBuffer:!1,stencilBuffer:!1}),l=new Zt(S,w,{type:ei,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<b.length;A++){let v=b[A];v.setSize&&v.setSize(S,w)}},this.begin=function(g,S){if(x||g.toneMapping===lr&&b.length===0)return!1;if(f=S,S!==null){let w=S.width,A=S.height;(s.width!==w||s.height!==A)&&this.setSize(w,A)}return y===!1&&g.setRenderTarget(s),m=g.toneMapping,g.toneMapping=lr,!0},this.hasRenderPass=function(){return y},this.end=function(g,S){g.toneMapping=m,x=!0;let w=s,A=o;for(let v=0;v<b.length;v++){let T=b[v];T.enabled!==!1&&(T.render(g,A,w,S),T.needsSwap!==!1&&(w=A,A=A===o?l:o))}if(p!==g.outputColorSpace||_!==g.toneMapping){p=g.outputColorSpace,_=g.toneMapping,c.defines={},ct.getTransfer(p)===Tt&&(c.defines.SRGB_TRANSFER="");let v=cx[_];v&&(c.defines[v]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,g.setRenderTarget(f),g.render(d,u),f=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),c.dispose()}}var yp=new ui,sh=new kn(1,1),Mp=new fd,Sp=new dm,bp=new Pd,Uu=[],Ou=[],Fu=new Float32Array(16),Bu=new Float32Array(9),zu=new Float32Array(4);function hn(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=Uu[a];if(n===void 0&&(n=new Float32Array(a),Uu[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function Kt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Jt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function go(e,t){let i=Ou[t];i===void 0&&(i=new Int32Array(t),Ou[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function dx(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function px(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Kt(i,t))return;e.uniform2fv(this.addr,t),Jt(i,t)}}function fx(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Kt(i,t))return;e.uniform3fv(this.addr,t),Jt(i,t)}}function mx(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Kt(i,t))return;e.uniform4fv(this.addr,t),Jt(i,t)}}function gx(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Kt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Jt(i,t)}else{if(Kt(i,r))return;zu.set(r),e.uniformMatrix2fv(this.addr,!1,zu),Jt(i,r)}}function _x(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Kt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Jt(i,t)}else{if(Kt(i,r))return;Bu.set(r),e.uniformMatrix3fv(this.addr,!1,Bu),Jt(i,r)}}function vx(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Kt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Jt(i,t)}else{if(Kt(i,r))return;Fu.set(r),e.uniformMatrix4fv(this.addr,!1,Fu),Jt(i,r)}}function xx(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function yx(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Kt(i,t))return;e.uniform2iv(this.addr,t),Jt(i,t)}}function Mx(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Kt(i,t))return;e.uniform3iv(this.addr,t),Jt(i,t)}}function Sx(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Kt(i,t))return;e.uniform4iv(this.addr,t),Jt(i,t)}}function bx(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Tx(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Kt(i,t))return;e.uniform2uiv(this.addr,t),Jt(i,t)}}function Ex(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Kt(i,t))return;e.uniform3uiv(this.addr,t),Jt(i,t)}}function wx(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Kt(i,t))return;e.uniform4uiv(this.addr,t),Jt(i,t)}}function Ax(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(sh.compareFunction=i.isReversedDepthBuffer()?vh:_h,n=sh):n=yp,i.setTexture2D(t||n,a)}function Rx(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Sp,a)}function Cx(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||bp,a)}function Ix(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Mp,a)}function Px(e){switch(e){case 5126:return dx;case 35664:return px;case 35665:return fx;case 35666:return mx;case 35674:return gx;case 35675:return _x;case 35676:return vx;case 5124:case 35670:return xx;case 35667:case 35671:return yx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return bx;case 36294:return Tx;case 36295:return Ex;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Ix}}function Lx(e,t){e.uniform1fv(this.addr,t)}function Nx(e,t){let i=hn(t,this.size,2);e.uniform2fv(this.addr,i)}function Dx(e,t){let i=hn(t,this.size,3);e.uniform3fv(this.addr,i)}function Ux(e,t){let i=hn(t,this.size,4);e.uniform4fv(this.addr,i)}function Ox(e,t){let i=hn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Fx(e,t){let i=hn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Bx(e,t){let i=hn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function zx(e,t){e.uniform1iv(this.addr,t)}function Hx(e,t){e.uniform2iv(this.addr,t)}function kx(e,t){e.uniform3iv(this.addr,t)}function Gx(e,t){e.uniform4iv(this.addr,t)}function Vx(e,t){e.uniform1uiv(this.addr,t)}function Wx(e,t){e.uniform2uiv(this.addr,t)}function Xx(e,t){e.uniform3uiv(this.addr,t)}function jx(e,t){e.uniform4uiv(this.addr,t)}function qx(e,t,i){let r=this.cache,a=t.length,n=go(i,a);Kt(r,n)||(e.uniform1iv(this.addr,n),Jt(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=sh:s=yp;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function Yx(e,t,i){let r=this.cache,a=t.length,n=go(i,a);Kt(r,n)||(e.uniform1iv(this.addr,n),Jt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||Sp,n[s])}function Zx(e,t,i){let r=this.cache,a=t.length,n=go(i,a);Kt(r,n)||(e.uniform1iv(this.addr,n),Jt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||bp,n[s])}function Kx(e,t,i){let r=this.cache,a=t.length,n=go(i,a);Kt(r,n)||(e.uniform1iv(this.addr,n),Jt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||Mp,n[s])}function Jx(e){switch(e){case 5126:return Lx;case 35664:return Nx;case 35665:return Dx;case 35666:return Ux;case 35674:return Ox;case 35675:return Fx;case 35676:return Bx;case 5124:case 35670:return zx;case 35667:case 35671:return Hx;case 35668:case 35672:return kx;case 35669:case 35673:return Gx;case 5125:return Vx;case 36294:return Wx;case 36295:return Xx;case 36296:return jx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Kx}}var $x=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Px(t.type)}},Qx=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jx(t.type)}},ey=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},vl=/(\w+)(\])?(\[|\.)?/g;function Hu(e,t){e.seq.push(t),e.map[t.id]=t}function ty(e,t,i){let r=e.name,a=r.length;for(vl.lastIndex=0;;){let n=vl.exec(r),s=vl.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){Hu(i,h===void 0?new $x(o,e,t):new Qx(o,e,t));break}else{let c=i.map[o];c===void 0&&(c=new ey(o),Hu(i,c)),i=c}}}var qs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);ty(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function ku(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var iy=37297,ry=0;function ay(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var Gu=new st;function ny(e){ct._getMatrix(Gu,ct.workingColorSpace,e);let t=`mat3( ${Gu.elements.map(i=>i.toFixed(4))} )`;switch(ct.getTransfer(e)){case Ks:return[t,"LinearTransferOETF"];case Tt:return[t,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Vu(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+ay(e.getShaderSource(t),s)}else return a}function sy(e,t){let i=ny(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var oy={[to]:"Linear",[io]:"Reinhard",[ro]:"Cineon",[tn]:"ACESFilmic",[no]:"AgX",[so]:"Neutral",[ao]:"Custom"};function ly(e,t){let i=oy[t];return i===void 0?(We("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var zs=new I;function hy(){ct.getLuminanceCoefficients(zs);let e=zs.x.toFixed(4),t=zs.y.toFixed(4),i=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cy(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rn).join(`
`)}function uy(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function dy(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Rn(e){return e!==""}function Wu(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var py=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(e){return e.replace(py,my)}var fy=new Map;function my(e,t){let i=ht[t];if(i===void 0){let r=fy.get(t);if(r!==void 0)i=ht[r],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return oh(i)}var gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(e){return e.replace(gy,_y)}function _y(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function qu(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var vy={[Fa]:"SHADOWMAP_TYPE_PCF",[wn]:"SHADOWMAP_TYPE_VSM"};function xy(e){return vy[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yy={[Qr]:"ENVMAP_TYPE_CUBE",[qa]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE_UV"};function My(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":yy[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var Sy={[qa]:"ENVMAP_MODE_REFRACTION"};function by(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Sy[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ty={[ed]:"ENVMAP_BLENDING_MULTIPLY",[Rf]:"ENVMAP_BLENDING_MIX",[Cf]:"ENVMAP_BLENDING_ADD"};function Ey(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Ty[e.combine]||"ENVMAP_BLENDING_NONE"}function wy(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Ay(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=xy(i),h=My(i),c=by(i),d=Ey(i),u=wy(i),p=cy(i),_=uy(n),x=a.createProgram(),m,f,b=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(Rn).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(Rn).join(`
`),f.length>0&&(f+=`
`)):(m=[qu(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rn).join(`
`),f=[qu(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==lr?"#define TONE_MAPPING":"",i.toneMapping!==lr?ht.tonemapping_pars_fragment:"",i.toneMapping!==lr?ly("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,sy("linearToOutputTexel",i.outputColorSpace),hy(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Rn).join(`
`)),s=oh(s),s=Wu(s,i),s=Xu(s,i),o=oh(o),o=Wu(o,i),o=Xu(o,i),s=ju(s),o=ju(o),i.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",i.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=b+m+s,g=b+f+o,S=ku(a,a.VERTEX_SHADER,y),w=ku(a,a.FRAGMENT_SHADER,g);a.attachShader(x,S),a.attachShader(x,w),i.index0AttributeName!==void 0?a.bindAttribLocation(x,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function A(L){if(e.debug.checkShaderErrors){let N=a.getProgramInfoLog(x)||"",q=a.getShaderInfoLog(S)||"",U=a.getShaderInfoLog(w)||"",G=N.trim(),Q=q.trim(),X=U.trim(),ge=!0,Y=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(ge=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,x,S,w);else{let K=Vu(a,S,"vertex"),ae=Vu(a,w,"fragment");tt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+K+`
`+ae)}else G!==""?We("WebGLProgram: Program Info Log:",G):(Q===""||X==="")&&(Y=!1);Y&&(L.diagnostics={runnable:ge,programLog:G,vertexShader:{log:Q,prefix:m},fragmentShader:{log:X,prefix:f}})}a.deleteShader(S),a.deleteShader(w),v=new qs(a,x),T=dy(a,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let O=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=a.getProgramParameter(x,iy)),O},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ry++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}var Ry=0,Cy=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Iy(e),t.set(e,i)),i}},Iy=class{constructor(e){this.id=Ry++,this.code=e,this.usedTimes=0}};function Py(e){return e===ta||e===Ys||e===Zs}function Ly(e,t,i,r,a,n){let s=new gd,o=new Cy,l=new Set,h=[],c=new Map,d=r.logarithmicDepthBuffer,u=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,T,O,L,N,q){let U=L.fog,G=N.geometry,Q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ge=t.get(v.envMap||Q,X),Y=ge&&ge.mapping===oo?ge.image.height:null,K=p[v.type];v.precision!==null&&(u=r.getMaxPrecision(v.precision),u!==v.precision&&We("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let ae=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Be=ae!==void 0?ae.length:0,Re=0;G.morphAttributes.position!==void 0&&(Re=1),G.morphAttributes.normal!==void 0&&(Re=2),G.morphAttributes.color!==void 0&&(Re=3);let ot,je,ee,de;if(K){let te=sr[K];ot=te.vertexShader,je=te.fragmentShader}else{ot=v.vertexShader,je=v.fragmentShader;let te=o.getVertexShaderStage(v),oe=o.getFragmentShaderStage(v);o.update(v,te,oe),ee=te.id,de=oe.id}let fe=e.getRenderTarget(),Ne=e.state.buffers.depth.getReversed(),qe=N.isInstancedMesh===!0,ye=N.isBatchedMesh===!0,it=!!v.map,le=!!v.matcap,ne=!!ge,pe=!!v.aoMap,Ee=!!v.lightMap,Ce=!!v.bumpMap&&v.wireframe===!1,De=!!v.normalMap,ke=!!v.displacementMap,et=!!v.emissiveMap,$e=!!v.metalnessMap,F=!!v.roughnessMap,St=v.anisotropy>0,nt=v.clearcoat>0,rt=v.dispersion>0,R=v.retroreflectivity>0,M=v.iridescence>0,B=v.sheen>0,Z=v.transmission>0,se=St&&!!v.anisotropyMap,ve=nt&&!!v.clearcoatMap,Me=nt&&!!v.clearcoatNormalMap,k=nt&&!!v.clearcoatRoughnessMap,xe=M&&!!v.iridescenceMap,_e=M&&!!v.iridescenceThicknessMap,Ue=B&&!!v.sheenColorMap,me=B&&!!v.sheenRoughnessMap,Ie=!!v.specularMap,Pe=!!v.specularColorMap,Qe=!!v.specularIntensityMap,at=Z&&!!v.transmissionMap,z=Z&&!!v.thicknessMap,re=!!v.gradientMap,ce=!!v.alphaMap,Ae=v.alphaTest>0,D=!!v.alphaHash,C=!!v.extensions,P=lr;v.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(P=e.toneMapping);let j={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:ot,fragmentShader:je,defines:v.defines,customVertexShaderID:ee,customFragmentShaderID:de,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:ye,batchingColor:ye&&N._colorsTexture!==null,instancing:qe,instancingColor:qe&&N.instanceColor!==null,instancingMorph:qe&&N.morphTexture!==null,outputColorSpace:fe===null?e.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:it,matcap:le,envMap:ne,envMapMode:ne&&ge.mapping,envMapCubeUVHeight:Y,aoMap:pe,lightMap:Ee,bumpMap:Ce,normalMap:De,displacementMap:ke,emissiveMap:et,normalMapObjectSpace:De&&v.normalMapType===Nf,normalMapTangentSpace:De&&v.normalMapType===ih,packedNormalMap:De&&v.normalMapType===ih&&Py(v.normalMap.format),metalnessMap:$e,roughnessMap:F,anisotropy:St,anisotropyMap:se,clearcoat:nt,clearcoatMap:ve,clearcoatNormalMap:Me,clearcoatRoughnessMap:k,dispersion:rt,retroreflection:R,iridescence:M,iridescenceMap:xe,iridescenceThicknessMap:_e,sheen:B,sheenColorMap:Ue,sheenRoughnessMap:me,specularMap:Ie,specularColorMap:Pe,specularIntensityMap:Qe,transmission:Z,transmissionMap:at,thicknessMap:z,gradientMap:re,opaque:v.transparent===!1&&v.blending===Cn&&v.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ae,alphaHash:D,combine:v.combine,mapUv:it&&_(v.map.channel),aoMapUv:pe&&_(v.aoMap.channel),lightMapUv:Ee&&_(v.lightMap.channel),bumpMapUv:Ce&&_(v.bumpMap.channel),normalMapUv:De&&_(v.normalMap.channel),displacementMapUv:ke&&_(v.displacementMap.channel),emissiveMapUv:et&&_(v.emissiveMap.channel),metalnessMapUv:$e&&_(v.metalnessMap.channel),roughnessMapUv:F&&_(v.roughnessMap.channel),anisotropyMapUv:se&&_(v.anisotropyMap.channel),clearcoatMapUv:ve&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(v.sheenRoughnessMap.channel),specularMapUv:Ie&&_(v.specularMap.channel),specularColorMapUv:Pe&&_(v.specularColorMap.channel),specularIntensityMapUv:Qe&&_(v.specularIntensityMap.channel),transmissionMapUv:at&&_(v.transmissionMap.channel),thicknessMapUv:z&&_(v.thicknessMap.channel),alphaMapUv:ce&&_(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(De||St),vertexNormals:!!G.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(it||ce),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&De===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ne,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:Re,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&O.length>0,shadowMapType:e.shadowMap.type,toneMapping:P,decodeVideoTexture:it&&v.map.isVideoTexture===!0&&ct.getTransfer(v.map.colorSpace)===Tt,decodeVideoTextureEmissive:et&&v.emissiveMap.isVideoTexture===!0&&ct.getTransfer(v.emissiveMap.colorSpace)===Tt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ci,flipSided:v.side===Mi,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:C&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(C&&v.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return j.vertexUv1s=l.has(1),j.vertexUv2s=l.has(2),j.vertexUv3s=l.has(3),l.clear(),j}function m(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let O in v.defines)T.push(O),T.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(f(T,v),b(T,v),T.push(e.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function f(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function b(v,T){s.disableAll(),T.instancing&&s.enable(0),T.instancingColor&&s.enable(1),T.instancingMorph&&s.enable(2),T.matcap&&s.enable(3),T.envMap&&s.enable(4),T.normalMapObjectSpace&&s.enable(5),T.normalMapTangentSpace&&s.enable(6),T.clearcoat&&s.enable(7),T.iridescence&&s.enable(8),T.alphaTest&&s.enable(9),T.vertexColors&&s.enable(10),T.vertexAlphas&&s.enable(11),T.vertexUv1s&&s.enable(12),T.vertexUv2s&&s.enable(13),T.vertexUv3s&&s.enable(14),T.vertexTangents&&s.enable(15),T.anisotropy&&s.enable(16),T.alphaHash&&s.enable(17),T.batching&&s.enable(18),T.dispersion&&s.enable(19),T.retroreflection&&s.enable(24),T.batchingColor&&s.enable(20),T.gradientMap&&s.enable(21),T.packedNormalMap&&s.enable(22),T.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),T.numLightProbeGrids>0&&s.enable(22),T.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function y(v){let T=p[v.type],O;if(T){let L=sr[T];O=Qi.clone(L.uniforms)}else O=v.uniforms;return O}function g(v,T){let O=c.get(T);return O!==void 0?++O.usedTimes:(O=new Ay(e,T,v,a),h.push(O),c.set(T,O)),O}function S(v){if(--v.usedTimes===0){let T=h.indexOf(v);h[T]=h[h.length-1],h.pop(),c.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:y,acquireProgram:g,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:A}}function Ny(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function Dy(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Yu(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Zu(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,x,m,f){let b=e[t];return b===void 0?(b={id:u.id,object:u,geometry:p,material:_,materialVariant:s(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:f},e[t]=b):(b.id=u.id,b.object=u,b.geometry=p,b.material=_,b.materialVariant=s(u),b.groupOrder=x,b.renderOrder=u.renderOrder,b.z=m,b.group=f),t++,b}function l(u,p,_,x,m,f,b){b.reversedDepth===!0&&(m=-m);let y=o(u,p,_,x,m,f);_.transmission>0?r.push(y):_.transparent===!0?a.push(y):i.push(y)}function h(u,p,_,x,m,f){let b=o(u,p,_,x,m,f);_.transmission>0?r.unshift(b):_.transparent===!0?a.unshift(b):i.unshift(b)}function c(u,p){i.length>1&&i.sort(u||Dy),r.length>1&&r.sort(p||Yu),a.length>1&&a.sort(p||Yu)}function d(){for(let u=t,p=e.length;u<p;u++){let _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:h,finish:d,sort:c}}function Uy(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new Zu,e.set(r,[s])):a>=n.length?(s=new Zu,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function Oy(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new I,color:new we};break;case"SpotLight":i={position:new I,direction:new I,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new I,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new I,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new I,halfWidth:new I,halfHeight:new I};break}return e[t.id]=i,i}}}function Fy(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var By=0;function zy(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Hy(e){let t=new Oy,i=Fy(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new I);let a=new I,n=new Ye,s=new Ye;function o(h){let c=0,d=0,u=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let p=0,_=0,x=0,m=0,f=0,b=0,y=0,g=0,S=0,w=0,A=0,v=0,T=0,O=0;h.sort(zy);for(let N=0,q=h.length;N<q;N++){let U=h[N],G=U.color,Q=U.intensity,X=U.distance,ge=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===ta?ge=U.shadow.map.texture:ge=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)c+=G.r*Q,d+=G.g*Q,u+=G.b*Q;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(U.sh.coefficients[Y],Q);O++}else if(U.isSunLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let K=U.shadow,ae=i.get(U);ae.shadowIntensity=K.intensity,ae.shadowBias=K.bias,ae.shadowNormalBias=K.normalBias,ae.shadowRadius=K.radius,ae.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),r.sunShadow[_]=ae,r.sunShadowMap[_]=ge;let Be=K.getViewportCount();for(let Re=0;Re<Be;Re++)r.sunShadowMatrix[x+Re]=K.getMatrix(Re),r.sunShadowCascade[x+Re]=K._cascadeData[Re];x+=Be,_++}r.sun[p]=Y,p++}else if(U.isDirectionalLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let K=U.shadow,ae=i.get(U);ae.shadowIntensity=K.intensity,ae.shadowBias=K.bias,ae.shadowNormalBias=K.normalBias,ae.shadowRadius=K.radius,ae.shadowMapSize=K.mapSize,r.directionalShadow[m]=ae,r.directionalShadowMap[m]=ge,r.directionalShadowMatrix[m]=U.shadow.matrix,S++}r.directional[m]=Y,m++}else if(U.isSpotLight){let Y=t.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(G).multiplyScalar(Q),Y.distance=X,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,r.spot[b]=Y;let K=U.shadow;if(U.map&&(r.spotLightMap[v]=U.map,v++,K.updateMatrices(U),U.castShadow&&T++),r.spotLightMatrix[b]=K.matrix,U.castShadow){let ae=i.get(U);ae.shadowIntensity=K.intensity,ae.shadowBias=K.bias,ae.shadowNormalBias=K.normalBias,ae.shadowRadius=K.radius,ae.shadowMapSize=K.mapSize,r.spotShadow[b]=ae,r.spotShadowMap[b]=ge,A++}b++}else if(U.isRectAreaLight){let Y=t.get(U);Y.color.copy(G).multiplyScalar(Q),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),r.rectArea[y]=Y,y++}else if(U.isPointLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){let K=U.shadow,ae=i.get(U);ae.shadowIntensity=K.intensity,ae.shadowBias=K.bias,ae.shadowNormalBias=K.normalBias,ae.shadowRadius=K.radius,ae.shadowMapSize=K.mapSize,ae.shadowCameraNear=K.camera.near,ae.shadowCameraFar=K.camera.far,r.pointShadow[f]=ae,r.pointShadowMap[f]=ge,r.pointShadowMatrix[f]=U.shadow.matrix,w++}r.point[f]=Y,f++}else if(U.isHemisphereLight){let Y=t.get(U);Y.skyColor.copy(U.color).multiplyScalar(Q),Y.groundColor.copy(U.groundColor).multiplyScalar(Q),r.hemi[g]=Y,g++}}y>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=d,r.ambient[2]=u;let L=r.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==f||L.spotLength!==b||L.rectAreaLength!==y||L.hemiLength!==g||L.numSunShadows!==_||L.numDirectionalShadows!==S||L.numPointShadows!==w||L.numSpotShadows!==A||L.numSpotMaps!==v||L.numLightProbes!==O)&&(r.sun.length=p,r.directional.length=m,r.spot.length=b,r.rectArea.length=y,r.point.length=f,r.hemi.length=g,r.sunShadow.length=_,r.sunShadowMap.length=_,r.sunShadowMatrix.length=x,r.sunShadowCascade.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.directionalShadowMatrix.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.pointShadowMatrix.length=w,r.spotShadow.length=A,r.spotShadowMap.length=A,r.spotLightMatrix.length=A+v-T,r.spotLightMap.length=v,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=O,L.sunLength=p,L.directionalLength=m,L.pointLength=f,L.spotLength=b,L.rectAreaLength=y,L.hemiLength=g,L.numSunShadows=_,L.numDirectionalShadows=S,L.numPointShadows=w,L.numSpotShadows=A,L.numSpotMaps=v,L.numLightProbes=O,r.version=By++)}function l(h,c){let d=0,u=0,p=0,_=0,x=0,m=0,f=c.matrixWorldInverse;for(let b=0,y=h.length;b<y;b++){let g=h[b];if(g.isSunLight){let S=r.sun[d];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(f),d++}else if(g.isDirectionalLight){let S=r.directional[u];S.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(f),u++}else if(g.isSpotLight){let S=r.spot[_];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(f),_++}else if(g.isRectAreaLight){let S=r.rectArea[x];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(f),s.identity(),n.copy(g.matrixWorld),n.premultiply(f),s.extractRotation(n),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),x++}else if(g.isPointLight){let S=r.point[p];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(f),p++}else if(g.isHemisphereLight){let S=r.hemi[m];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:r}}function Ku(e){let t=new Hy(e),i=[],r=[],a=[];function n(u){d.camera=u,i.length=0,r.length=0,a.length=0}function s(u){i.push(u)}function o(u){r.push(u)}function l(u){a.push(u)}function h(){t.setup(i)}function c(u){t.setupView(i,u)}let d={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:d,setupLights:h,setupLightsView:c,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function ky(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Ku(e),t.set(a,[o])):n>=s.length?(o=new Ku(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var Gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vy=`uniform sampler2D shadow_pass;
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
}`,Wy=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Xy=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Ju=new Ye,En=new I,xl=new I;function jy(e,t,i){let r=new $a,a=new he,n=new he,s=new Rt,o=new Ig,l=new Pg,h={},c=i.maxTextureSize,d={[Sr]:Mi,[Mi]:Sr,[ci]:ci},u=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Gy,fragmentShader:Vy}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new xt;_.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new mt(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fa;let f=this.type;this.render=function(w,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===hf&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fa);let T=e.getRenderTarget(),O=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),N=e.state;N.setBlending(Ji),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let q=f!==this.type;q&&A.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(G=>G.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,G=w.length;U<G;U++){let Q=w[U],X=Q.shadow;if(X===void 0){We("WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;a.copy(X.mapSize);let ge=X.getFrameExtents();a.multiply(ge),n.copy(X.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/ge.x),a.x=n.x*ge.x,X.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/ge.y),a.y=n.y*ge.y,X.mapSize.y=n.y));let Y=e.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||q===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===wn){if(Q.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Zt(a.x,a.y,{format:ta,type:ei,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),X.map.texture.name=Q.name+".shadowMap",X.map.depthTexture=new kn(a.x,a.y,Li),X.map.depthTexture.name=Q.name+".shadowMapDepth",X.map.depthTexture.format=br,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=qt,X.map.depthTexture.magFilter=qt}else Q.isPointLight?(X.map=new xp(a.x),X.map.depthTexture=new Dm(a.x,hr)):(X.map=new Zt(a.x,a.y),X.map.depthTexture=new kn(a.x,a.y,hr)),X.map.depthTexture.name=Q.name+".shadowMap",X.map.depthTexture.format=br,this.type===Fa?(X.map.depthTexture.compareFunction=Y?vh:_h,X.map.depthTexture.minFilter=Ht,X.map.depthTexture.magFilter=Ht):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=qt,X.map.depthTexture.magFilter=qt);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==a.x||X.map.height!==a.y)&&X.map.setSize(a.x,a.y);let K=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Q.isPointLight!==!0&&X.updateMatrices(Q,v);for(let ae=0;ae<K;ae++){let Be=X.getCamera(ae);if(Q.isPointLight){let Re=X.camera,ot=X.matrix,je=Q.distance||Re.far;je!==Re.far&&(Re.far=je,Re.updateProjectionMatrix()),En.setFromMatrixPosition(Q.matrixWorld),Re.position.copy(En),xl.copy(Re.position),xl.add(Wy[ae]),Re.up.copy(Xy[ae]),Re.lookAt(xl),Re.updateMatrixWorld(),ot.makeTranslation(-En.x,-En.y,-En.z),Ju.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Ju,Re.coordinateSystem,Re.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)e.setRenderTarget(X.map,ae),e.clear();else{ae===0&&(e.setRenderTarget(X.map),e.clear());let Re=X.getViewport(ae);s.set(n.x*Re.x,n.y*Re.y,n.x*Re.z,n.y*Re.w),N.viewport(s)}r=X.getFrustum(ae),g(A,v,Be,Q,this.type)}X.isPointLightShadow!==!0&&this.type===wn&&b(X,v),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(T,O,L)};function b(w,A){let v=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Zt(a.x,a.y,{format:ta,type:ei}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(A,null,v,u,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(A,null,v,p,x,null)}function y(w,A,v,T){let O=null,L=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)O=L;else if(O=v.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=O.uuid,q=A.uuid,U=h[N];U===void 0&&(U={},h[N]=U);let G=U[q];G===void 0&&(G=O.clone(),U[q]=G,A.addEventListener("dispose",S)),O=G}if(O.visible=A.visible,O.wireframe=A.wireframe,T===wn?O.side=A.shadowSide!==null?A.shadowSide:A.side:O.side=A.shadowSide!==null?A.shadowSide:d[A.side],O.alphaMap=A.alphaMap,O.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,O.map=A.map,O.clipShadows=A.clipShadows,O.clippingPlanes=A.clippingPlanes,O.clipIntersection=A.clipIntersection,O.displacementMap=A.displacementMap,O.displacementScale=A.displacementScale,O.displacementBias=A.displacementBias,O.wireframeLinewidth=A.wireframeLinewidth,O.linewidth=A.linewidth,v.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let N=e.properties.get(O);N.light=v}return O}function g(w,A,v,T,O){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===wn)&&(!w.frustumCulled||w.intersectsFrustum(r))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let N=t.update(w),q=w.material;if(Array.isArray(q)){let U=N.groups;for(let G=0,Q=U.length;G<Q;G++){let X=U[G],ge=q[X.materialIndex];if(ge&&ge.visible){let Y=y(w,ge,T,O);w.onBeforeShadow(e,w,A,v,N,Y,X),e.renderBufferDirect(v,null,N,Y,w,X),w.onAfterShadow(e,w,A,v,N,Y,X)}}}else if(q.visible){let U=y(w,q,T,O);w.onBeforeShadow(e,w,A,v,N,U,null),e.renderBufferDirect(v,null,N,U,w,null),w.onAfterShadow(e,w,A,v,N,U,null)}}let L=w.children;for(let N=0,q=L.length;N<q;N++)g(L[N],A,v,T,O)}function S(w){w.target.removeEventListener("dispose",S);for(let A in h){let v=h[A],T=w.target.uuid;T in v&&(v[T].dispose(),delete v[T])}}}function qy(e,t){function i(){let z=!1,re=new Rt,ce=null,Ae=new Rt(0,0,0,0);return{setMask:function(D){ce!==D&&!z&&(e.colorMask(D,D,D,D),ce=D)},setLocked:function(D){z=D},setClear:function(D,C,P,j,te){te===!0&&(D*=j,C*=j,P*=j),re.set(D,C,P,j),Ae.equals(re)===!1&&(e.clearColor(D,C,P,j),Ae.copy(re))},reset:function(){z=!1,ce=null,Ae.set(-1,0,0,0)}}}function r(){let z=!1,re=!1,ce=null,Ae=null,D=null;return{setReversed:function(C){if(re!==C){let P=t.get("EXT_clip_control");C?P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT):P.clipControlEXT(P.LOWER_LEFT_EXT,P.NEGATIVE_ONE_TO_ONE_EXT),re=C;let j=D;D=null,this.setClear(j)}},getReversed:function(){return re},setTest:function(C){C?fe(e.DEPTH_TEST):Ne(e.DEPTH_TEST)},setMask:function(C){ce!==C&&!z&&(e.depthMask(C),ce=C)},setFunc:function(C){if(re&&(C=Wf[C]),Ae!==C){switch(C){case yl:e.depthFunc(e.NEVER);break;case Ml:e.depthFunc(e.ALWAYS);break;case Sl:e.depthFunc(e.LESS);break;case Dn:e.depthFunc(e.LEQUAL);break;case bl:e.depthFunc(e.EQUAL);break;case Tl:e.depthFunc(e.GEQUAL);break;case Un:e.depthFunc(e.GREATER);break;case El:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Ae=C}},setLocked:function(C){z=C},setClear:function(C){D!==C&&(D=C,re&&(C=1-C),e.clearDepth(C))},reset:function(){z=!1,ce=null,Ae=null,D=null,re=!1}}}function a(){let z=!1,re=null,ce=null,Ae=null,D=null,C=null,P=null,j=null,te=null;return{setTest:function(oe){z||(oe?fe(e.STENCIL_TEST):Ne(e.STENCIL_TEST))},setMask:function(oe){re!==oe&&!z&&(e.stencilMask(oe),re=oe)},setFunc:function(oe,ue,Ge){(ce!==oe||Ae!==ue||D!==Ge)&&(e.stencilFunc(oe,ue,Ge),ce=oe,Ae=ue,D=Ge)},setOp:function(oe,ue,Ge){(C!==oe||P!==ue||j!==Ge)&&(e.stencilOp(oe,ue,Ge),C=oe,P=ue,j=Ge)},setLocked:function(oe){z=oe},setClear:function(oe){te!==oe&&(e.clearStencil(oe),te=oe)},reset:function(){z=!1,re=null,ce=null,Ae=null,D=null,C=null,P=null,j=null,te=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,h=new WeakMap,c={},d={},u={},p=new WeakMap,_=[],x=null,m=!1,f=null,b=null,y=null,g=null,S=null,w=null,A=null,v=new we(0,0,0),T=0,O=!1,L=null,N=null,q=null,U=null,G=null,Q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ge=0,Y=e.getParameter(e.VERSION);Y.indexOf("WebGL")!==-1?(ge=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=ge>=1):Y.indexOf("OpenGL ES")!==-1&&(ge=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=ge>=2);let K=null,ae={},Be=e.getParameter(e.SCISSOR_BOX),Re=e.getParameter(e.VIEWPORT),ot=new Rt().fromArray(Be),je=new Rt().fromArray(Re);function ee(z,re,ce,Ae){let D=new Uint8Array(4),C=e.createTexture();e.bindTexture(z,C),e.texParameteri(z,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(z,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let P=0;P<ce;P++)z===e.TEXTURE_3D||z===e.TEXTURE_2D_ARRAY?e.texImage3D(re,0,e.RGBA,1,1,Ae,0,e.RGBA,e.UNSIGNED_BYTE,D):e.texImage2D(re+P,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,D);return C}let de={};de[e.TEXTURE_2D]=ee(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ee(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ee(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ee(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(e.DEPTH_TEST),s.setFunc(Dn),Ce(!1),De(Rc),fe(e.CULL_FACE),pe(Ji);function fe(z){c[z]!==!0&&(e.enable(z),c[z]=!0)}function Ne(z){c[z]!==!1&&(e.disable(z),c[z]=!1)}function qe(z,re){return u[z]!==re?(e.bindFramebuffer(z,re),u[z]=re,z===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=re),z===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=re),!0):!1}function ye(z,re){let ce=_,Ae=!1;if(z){ce=p.get(re),ce===void 0&&(ce=[],p.set(re,ce));let D=z.textures;if(ce.length!==D.length||ce[0]!==e.COLOR_ATTACHMENT0){for(let C=0,P=D.length;C<P;C++)ce[C]=e.COLOR_ATTACHMENT0+C;ce.length=D.length,Ae=!0}}else ce[0]!==e.BACK&&(ce[0]=e.BACK,Ae=!0);Ae&&e.drawBuffers(ce)}function it(z){return x!==z?(e.useProgram(z),x=z,!0):!1}let le={[Pa]:e.FUNC_ADD,[uf]:e.FUNC_SUBTRACT,[df]:e.FUNC_REVERSE_SUBTRACT};le[pf]=e.MIN,le[ff]=e.MAX;let ne={[mf]:e.ZERO,[gf]:e.ONE,[_f]:e.SRC_COLOR,[$u]:e.SRC_ALPHA,[bf]:e.SRC_ALPHA_SATURATE,[Mf]:e.DST_COLOR,[xf]:e.DST_ALPHA,[vf]:e.ONE_MINUS_SRC_COLOR,[Qu]:e.ONE_MINUS_SRC_ALPHA,[Sf]:e.ONE_MINUS_DST_COLOR,[yf]:e.ONE_MINUS_DST_ALPHA,[Tf]:e.CONSTANT_COLOR,[Ef]:e.ONE_MINUS_CONSTANT_COLOR,[wf]:e.CONSTANT_ALPHA,[Af]:e.ONE_MINUS_CONSTANT_ALPHA};function pe(z,re,ce,Ae,D,C,P,j,te,oe){if(z===Ji){m===!0&&(Ne(e.BLEND),m=!1);return}if(m===!1&&(fe(e.BLEND),m=!0),z!==cf){if(z!==f||oe!==O){if((b!==Pa||S!==Pa)&&(e.blendEquation(e.FUNC_ADD),b=Pa,S=Pa),oe)switch(z){case Cn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ja:e.blendFunc(e.ONE,e.ONE);break;case Cc:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ic:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:tt("WebGLState: Invalid blending: ",z);break}else switch(z){case Cn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ja:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Cc:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",z);break}y=null,g=null,w=null,A=null,v.set(0,0,0),T=0,f=z,O=oe}return}D=D||re,C=C||ce,P=P||Ae,(re!==b||D!==S)&&(e.blendEquationSeparate(le[re],le[D]),b=re,S=D),(ce!==y||Ae!==g||C!==w||P!==A)&&(e.blendFuncSeparate(ne[ce],ne[Ae],ne[C],ne[P]),y=ce,g=Ae,w=C,A=P),(j.equals(v)===!1||te!==T)&&(e.blendColor(j.r,j.g,j.b,te),v.copy(j),T=te),f=z,O=!1}function Ee(z,re){z.side===ci?Ne(e.CULL_FACE):fe(e.CULL_FACE);let ce=z.side===Mi;re&&(ce=!ce),Ce(ce),z.blending===Cn&&z.transparent===!1?pe(Ji):pe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),n.setMask(z.colorWrite);let Ae=z.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),et(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):Ne(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(z){L!==z&&(z?e.frontFace(e.CW):e.frontFace(e.CCW),L=z)}function De(z){z!==of?(fe(e.CULL_FACE),z!==N&&(z===Rc?e.cullFace(e.BACK):z===lf?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ne(e.CULL_FACE),N=z}function ke(z){z!==q&&(X&&e.lineWidth(z),q=z)}function et(z,re,ce){z?(fe(e.POLYGON_OFFSET_FILL),(U!==re||G!==ce)&&(U=re,G=ce,s.getReversed()&&(re=-re),e.polygonOffset(re,ce))):Ne(e.POLYGON_OFFSET_FILL)}function $e(z){z?fe(e.SCISSOR_TEST):Ne(e.SCISSOR_TEST)}function F(z){z===void 0&&(z=e.TEXTURE0+Q-1),K!==z&&(e.activeTexture(z),K=z)}function St(z,re,ce){ce===void 0&&(K===null?ce=e.TEXTURE0+Q-1:ce=K);let Ae=ae[ce];Ae===void 0&&(Ae={type:void 0,texture:void 0},ae[ce]=Ae),(Ae.type!==z||Ae.texture!==re)&&(K!==ce&&(e.activeTexture(ce),K=ce),e.bindTexture(z,re||de[z]),Ae.type=z,Ae.texture=re)}function nt(){let z=ae[K];z!==void 0&&z.type!==void 0&&(e.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function rt(){try{e.compressedTexImage2D(...arguments)}catch(z){tt("WebGLState:",z)}}function R(){try{e.compressedTexImage3D(...arguments)}catch(z){tt("WebGLState:",z)}}function M(){try{e.texSubImage2D(...arguments)}catch(z){tt("WebGLState:",z)}}function B(){try{e.texSubImage3D(...arguments)}catch(z){tt("WebGLState:",z)}}function Z(){try{e.compressedTexSubImage2D(...arguments)}catch(z){tt("WebGLState:",z)}}function se(){try{e.compressedTexSubImage3D(...arguments)}catch(z){tt("WebGLState:",z)}}function ve(){try{e.texStorage2D(...arguments)}catch(z){tt("WebGLState:",z)}}function Me(){try{e.texStorage3D(...arguments)}catch(z){tt("WebGLState:",z)}}function k(){try{e.texImage2D(...arguments)}catch(z){tt("WebGLState:",z)}}function xe(){try{e.texImage3D(...arguments)}catch(z){tt("WebGLState:",z)}}function _e(z){return d[z]!==void 0?d[z]:e.getParameter(z)}function Ue(z,re){d[z]!==re&&(e.pixelStorei(z,re),d[z]=re)}function me(z){ot.equals(z)===!1&&(e.scissor(z.x,z.y,z.z,z.w),ot.copy(z))}function Ie(z){je.equals(z)===!1&&(e.viewport(z.x,z.y,z.z,z.w),je.copy(z))}function Pe(z,re){let ce=h.get(re);ce===void 0&&(ce=new WeakMap,h.set(re,ce));let Ae=ce.get(z);Ae===void 0&&(Ae=e.getUniformBlockIndex(re,z.name),ce.set(z,Ae))}function Qe(z,re){let ce=h.get(re).get(z);l.get(re)!==ce&&(e.uniformBlockBinding(re,ce,z.__bindingPointIndex),l.set(re,ce))}function at(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),c={},d={},K=null,ae={},u={},p=new WeakMap,_=[],x=null,m=!1,f=null,b=null,y=null,g=null,S=null,w=null,A=null,v=new we(0,0,0),T=0,O=!1,L=null,N=null,q=null,U=null,G=null,ot.set(0,0,e.canvas.width,e.canvas.height),je.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:fe,disable:Ne,bindFramebuffer:qe,drawBuffers:ye,useProgram:it,setBlending:pe,setMaterial:Ee,setFlipSided:Ce,setCullFace:De,setLineWidth:ke,setPolygonOffset:et,setScissorTest:$e,activeTexture:F,bindTexture:St,unbindTexture:nt,compressedTexImage2D:rt,compressedTexImage3D:R,texImage2D:k,texImage3D:xe,pixelStorei:Ue,getParameter:_e,updateUBOMapping:Pe,uniformBlockBinding:Qe,texStorage2D:ve,texStorage3D:Me,texSubImage2D:M,texSubImage3D:B,compressedTexSubImage2D:Z,compressedTexSubImage3D:se,scissor:me,viewport:Ie,reset:at}}function Yy(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new he,c=new WeakMap,d=new Set,u,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return _?new OffscreenCanvas(R,M):Hn("canvas")}function m(R,M,B){let Z=1,se=rt(R);if((se.width>B||se.height>B)&&(Z=B/Math.max(se.width,se.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ve=Math.floor(Z*se.width),Me=Math.floor(Z*se.height);u===void 0&&(u=x(ve,Me));let k=M?x(ve,Me):u;return k.width=ve,k.height=Me,k.getContext("2d").drawImage(R,0,0,ve,Me),We("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ve+"x"+Me+")."),k}else return"data"in R&&We("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function f(R){return R.generateMipmaps}function b(R){e.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?e.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function g(R,M,B,Z,se,ve=!1){if(R!==null){if(e[R]!==void 0)return e[R];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Me;Z&&(Me=t.get("EXT_texture_norm16"),Me||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=M;if(M===e.RED&&(B===e.FLOAT&&(k=e.R32F),B===e.HALF_FLOAT&&(k=e.R16F),B===e.UNSIGNED_BYTE&&(k=e.R8),B===e.UNSIGNED_SHORT&&Me&&(k=Me.R16_EXT),B===e.SHORT&&Me&&(k=Me.R16_SNORM_EXT)),M===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(k=e.R8UI),B===e.UNSIGNED_SHORT&&(k=e.R16UI),B===e.UNSIGNED_INT&&(k=e.R32UI),B===e.BYTE&&(k=e.R8I),B===e.SHORT&&(k=e.R16I),B===e.INT&&(k=e.R32I)),M===e.RG&&(B===e.FLOAT&&(k=e.RG32F),B===e.HALF_FLOAT&&(k=e.RG16F),B===e.UNSIGNED_BYTE&&(k=e.RG8),B===e.UNSIGNED_SHORT&&Me&&(k=Me.RG16_EXT),B===e.SHORT&&Me&&(k=Me.RG16_SNORM_EXT)),M===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(k=e.RG8UI),B===e.UNSIGNED_SHORT&&(k=e.RG16UI),B===e.UNSIGNED_INT&&(k=e.RG32UI),B===e.BYTE&&(k=e.RG8I),B===e.SHORT&&(k=e.RG16I),B===e.INT&&(k=e.RG32I)),M===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(k=e.RGB8UI),B===e.UNSIGNED_SHORT&&(k=e.RGB16UI),B===e.UNSIGNED_INT&&(k=e.RGB32UI),B===e.BYTE&&(k=e.RGB8I),B===e.SHORT&&(k=e.RGB16I),B===e.INT&&(k=e.RGB32I)),M===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(k=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(k=e.RGBA16UI),B===e.UNSIGNED_INT&&(k=e.RGBA32UI),B===e.BYTE&&(k=e.RGBA8I),B===e.SHORT&&(k=e.RGBA16I),B===e.INT&&(k=e.RGBA32I)),M===e.RGB&&(B===e.UNSIGNED_SHORT&&Me&&(k=Me.RGB16_EXT),B===e.SHORT&&Me&&(k=Me.RGB16_SNORM_EXT),B===e.UNSIGNED_INT_5_9_9_9_REV&&(k=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(k=e.R11F_G11F_B10F)),M===e.RGBA){let xe=ve?Ks:ct.getTransfer(se);B===e.FLOAT&&(k=e.RGBA32F),B===e.HALF_FLOAT&&(k=e.RGBA16F),B===e.UNSIGNED_BYTE&&(k=xe===Tt?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT&&Me&&(k=Me.RGBA16_EXT),B===e.SHORT&&Me&&(k=Me.RGBA16_SNORM_EXT),B===e.UNSIGNED_SHORT_4_4_4_4&&(k=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(k=e.RGB5_A1)}return(k===e.R16F||k===e.R32F||k===e.RG16F||k===e.RG32F||k===e.RGBA16F||k===e.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function S(R,M){let B;return R?M===null||M===hr||M===Bn?B=e.DEPTH24_STENCIL8:M===Li?B=e.DEPTH32F_STENCIL8:M===Fn&&(B=e.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===hr||M===Bn?B=e.DEPTH_COMPONENT24:M===Li?B=e.DEPTH_COMPONENT32F:M===Fn&&(B=e.DEPTH_COMPONENT16),B}function w(R,M){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==Ht?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){let M=R.target;M.removeEventListener("dispose",A),T(M),M.isVideoTexture&&c.delete(M),M.isHTMLTexture&&d.delete(M)}function v(R){let M=R.target;M.removeEventListener("dispose",v),L(M)}function T(R){let M=r.get(R);if(M.__webglInit===void 0)return;let B=R.source,Z=p.get(B);if(Z){let se=Z[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&O(R),Object.keys(Z).length===0&&p.delete(B)}r.remove(R)}function O(R){let M=r.get(R);e.deleteTexture(M.__webglTexture);let B=R.source,Z=p.get(B);delete Z[M.__cacheKey],s.memory.textures--}function L(R){let M=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let se=0;se<M.__webglFramebuffer[Z].length;se++)e.deleteFramebuffer(M.__webglFramebuffer[Z][se]);else e.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)e.deleteFramebuffer(M.__webglFramebuffer[Z]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let B=R.textures;for(let Z=0,se=B.length;Z<se;Z++){let ve=r.get(B[Z]);ve.__webglTexture&&(e.deleteTexture(ve.__webglTexture),s.memory.textures--),r.remove(B[Z])}r.remove(R)}let N=0;function q(){N=0}function U(){return N}function G(R){N=R}function Q(){let R=N;return R>=a.maxTextures&&We("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+a.maxTextures),N+=1,R}function X(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function ge(R,M){let B=r.get(R);if(R.isVideoTexture&&St(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let Z=R.image;if(Z===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(B,R,M);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+M)}function Y(R,M){let B=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Ne(B,R,M);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+M)}function K(R,M){let B=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Ne(B,R,M);return}i.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+M)}function ae(R,M){let B=r.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){qe(B,R,M);return}i.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+M)}let Be={[ea]:e.REPEAT,[Zi]:e.CLAMP_TO_EDGE,[On]:e.MIRRORED_REPEAT},Re={[qt]:e.NEAREST,[lh]:e.NEAREST_MIPMAP_NEAREST,[Ua]:e.NEAREST_MIPMAP_LINEAR,[Ht]:e.LINEAR,[In]:e.LINEAR_MIPMAP_NEAREST,[or]:e.LINEAR_MIPMAP_LINEAR},ot={[Df]:e.NEVER,[zf]:e.ALWAYS,[Uf]:e.LESS,[_h]:e.LEQUAL,[Of]:e.EQUAL,[vh]:e.GEQUAL,[Ff]:e.GREATER,[Bf]:e.NOTEQUAL};function je(R,M){if(M.type===Li&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ht||M.magFilter===In||M.magFilter===Ua||M.magFilter===or||M.minFilter===Ht||M.minFilter===In||M.minFilter===Ua||M.minFilter===or)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,Be[M.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,Be[M.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,Be[M.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,Re[M.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,Re[M.minFilter]),M.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,ot[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qt||M.minFilter!==Ua&&M.minFilter!==or||M.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function ee(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));let Z=M.source,se=p.get(Z);se===void 0&&(se={},p.set(Z,se));let ve=X(M);if(ve!==R.__cacheKey){se[ve]===void 0&&(se[ve]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,B=!0),se[ve].usedTimes++;let Me=se[R.__cacheKey];Me!==void 0&&(se[R.__cacheKey].usedTimes--,Me.usedTimes===0&&O(M)),R.__cacheKey=ve,R.__webglTexture=se[ve].texture}return B}function de(R,M,B){return Math.floor(Math.floor(R/B)/M)}function fe(R,M,B,Z){let se=R.updateRanges;if(se.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,M.width,M.height,B,Z,M.data);else{se.sort((_e,Ue)=>_e.start-Ue.start);let ve=0;for(let _e=1;_e<se.length;_e++){let Ue=se[ve],me=se[_e],Ie=Ue.start+Ue.count,Pe=de(me.start,M.width,4),Qe=de(Ue.start,M.width,4);me.start<=Ie+1&&Pe===Qe&&de(me.start+me.count-1,M.width,4)===Pe?Ue.count=Math.max(Ue.count,me.start+me.count-Ue.start):(++ve,se[ve]=me)}se.length=ve+1;let Me=i.getParameter(e.UNPACK_ROW_LENGTH),k=i.getParameter(e.UNPACK_SKIP_PIXELS),xe=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,M.width);for(let _e=0,Ue=se.length;_e<Ue;_e++){let me=se[_e],Ie=Math.floor(me.start/4),Pe=Math.ceil(me.count/4),Qe=Ie%M.width,at=Math.floor(Ie/M.width),z=Pe;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Qe),i.pixelStorei(e.UNPACK_SKIP_ROWS,at),i.texSubImage2D(e.TEXTURE_2D,0,Qe,at,z,1,B,Z,M.data)}R.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,Me),i.pixelStorei(e.UNPACK_SKIP_PIXELS,k),i.pixelStorei(e.UNPACK_SKIP_ROWS,xe)}}function Ne(R,M,B){let Z=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=e.TEXTURE_3D);let se=ee(R,M),ve=M.source;i.bindTexture(Z,R.__webglTexture,e.TEXTURE0+B);let Me=r.get(ve);if(ve.version!==Me.__version||se===!0){if(i.activeTexture(e.TEXTURE0+B),!(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)){let re=ct.getPrimaries(ct.workingColorSpace),ce=M.colorSpace===Fr?null:ct.getPrimaries(M.colorSpace),Ae=M.colorSpace===Fr||re===ce?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}i.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment);let k=m(M.image,!1,a.maxTextureSize);k=nt(M,k);let xe=n.convert(M.format,M.colorSpace),_e=n.convert(M.type),Ue=g(M.internalFormat,xe,_e,M.normalized,M.colorSpace,M.isVideoTexture);je(Z,M);let me,Ie=M.mipmaps,Pe=M.isVideoTexture!==!0,Qe=Me.__version===void 0||se===!0,at=ve.dataReady,z=w(M,k);if(M.isDepthTexture)Ue=S(M.format===Zr,M.type),Qe&&(Pe?i.texStorage2D(e.TEXTURE_2D,1,Ue,k.width,k.height):i.texImage2D(e.TEXTURE_2D,0,Ue,k.width,k.height,0,xe,_e,null));else if(M.isDataTexture)if(Ie.length>0){Pe&&Qe&&i.texStorage2D(e.TEXTURE_2D,z,Ue,Ie[0].width,Ie[0].height);for(let re=0,ce=Ie.length;re<ce;re++)me=Ie[re],Pe?at&&i.texSubImage2D(e.TEXTURE_2D,re,0,0,me.width,me.height,xe,_e,me.data):i.texImage2D(e.TEXTURE_2D,re,Ue,me.width,me.height,0,xe,_e,me.data);M.generateMipmaps=!1}else Pe?(Qe&&i.texStorage2D(e.TEXTURE_2D,z,Ue,k.width,k.height),at&&fe(M,k,xe,_e)):i.texImage2D(e.TEXTURE_2D,0,Ue,k.width,k.height,0,xe,_e,k.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Pe&&Qe&&i.texStorage3D(e.TEXTURE_2D_ARRAY,z,Ue,Ie[0].width,Ie[0].height,k.depth);for(let re=0,ce=Ie.length;re<ce;re++)if(me=Ie[re],M.format!==Ni)if(xe!==null)if(Pe){if(at)if(M.layerUpdates.size>0){let Ae=Cu(me.width,me.height,M.format,M.type);for(let D of M.layerUpdates){let C=me.data.subarray(D*Ae/me.data.BYTES_PER_ELEMENT,(D+1)*Ae/me.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,D,me.width,me.height,1,xe,C)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,k.depth,xe,me.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,re,Ue,me.width,me.height,k.depth,0,me.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?at&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,k.depth,xe,_e,me.data):i.texImage3D(e.TEXTURE_2D_ARRAY,re,Ue,me.width,me.height,k.depth,0,xe,_e,me.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Pe&&Qe&&i.texStorage2D(e.TEXTURE_2D,z,Ue,Ie[0].width,Ie[0].height);for(let re=0,ce=Ie.length;re<ce;re++)me=Ie[re],M.format!==Ni?xe!==null?Pe?at&&i.compressedTexSubImage2D(e.TEXTURE_2D,re,0,0,me.width,me.height,xe,me.data):i.compressedTexImage2D(e.TEXTURE_2D,re,Ue,me.width,me.height,0,me.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?at&&i.texSubImage2D(e.TEXTURE_2D,re,0,0,me.width,me.height,xe,_e,me.data):i.texImage2D(e.TEXTURE_2D,re,Ue,me.width,me.height,0,xe,_e,me.data)}else if(M.isDataArrayTexture)if(Pe){if(Qe&&i.texStorage3D(e.TEXTURE_2D_ARRAY,z,Ue,k.width,k.height,k.depth),at)if(M.layerUpdates.size>0){let re=Cu(k.width,k.height,M.format,M.type);for(let ce of M.layerUpdates){let Ae=k.data.subarray(ce*re/k.data.BYTES_PER_ELEMENT,(ce+1)*re/k.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ce,k.width,k.height,1,xe,_e,Ae)}M.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,xe,_e,k.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Ue,k.width,k.height,k.depth,0,xe,_e,k.data);else if(M.isData3DTexture)Pe?(Qe&&i.texStorage3D(e.TEXTURE_3D,z,Ue,k.width,k.height,k.depth),at&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,xe,_e,k.data)):i.texImage3D(e.TEXTURE_3D,0,Ue,k.width,k.height,k.depth,0,xe,_e,k.data);else if(M.isFramebufferTexture){if(Qe)if(Pe)i.texStorage2D(e.TEXTURE_2D,z,Ue,k.width,k.height);else{let re=k.width,ce=k.height;for(let Ae=0;Ae<z;Ae++)i.texImage2D(e.TEXTURE_2D,Ae,Ue,re,ce,0,xe,_e,null),re>>=1,ce>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in e){let re=e.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),k.parentNode!==re){re.appendChild(k),d.add(M),re.onpaint=ce=>{let Ae=ce.changedElements;for(let D of d)Ae.includes(D.image)&&(D.needsUpdate=!0)},re.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,k);else{let ce=e.RGBA,Ae=e.RGBA,D=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ce,Ae,D,k)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Pe&&Qe){let re=rt(Ie[0]);i.texStorage2D(e.TEXTURE_2D,z,Ue,re.width,re.height)}for(let re=0,ce=Ie.length;re<ce;re++)me=Ie[re],Pe?at&&i.texSubImage2D(e.TEXTURE_2D,re,0,0,xe,_e,me):i.texImage2D(e.TEXTURE_2D,re,Ue,xe,_e,me);M.generateMipmaps=!1}else if(Pe){if(Qe){let re=rt(k);i.texStorage2D(e.TEXTURE_2D,z,Ue,re.width,re.height)}at&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,xe,_e,k)}else i.texImage2D(e.TEXTURE_2D,0,Ue,xe,_e,k);f(M)&&b(Z),Me.__version=ve.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function qe(R,M,B){if(M.image.length!==6)return;let Z=ee(R,M),se=M.source;i.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+B);let ve=r.get(se);if(se.version!==ve.__version||Z===!0){i.activeTexture(e.TEXTURE0+B);let Me=ct.getPrimaries(ct.workingColorSpace),k=M.colorSpace===Fr?null:ct.getPrimaries(M.colorSpace),xe=M.colorSpace===Fr||Me===k?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let _e=M.isCompressedTexture||M.image[0].isCompressedTexture,Ue=M.image[0]&&M.image[0].isDataTexture,me=[];for(let C=0;C<6;C++)!_e&&!Ue?me[C]=m(M.image[C],!0,a.maxCubemapSize):me[C]=Ue?M.image[C].image:M.image[C],me[C]=nt(M,me[C]);let Ie=me[0],Pe=n.convert(M.format,M.colorSpace),Qe=n.convert(M.type),at=g(M.internalFormat,Pe,Qe,M.normalized,M.colorSpace),z=M.isVideoTexture!==!0,re=ve.__version===void 0||Z===!0,ce=se.dataReady,Ae=w(M,Ie);je(e.TEXTURE_CUBE_MAP,M);let D;if(_e){z&&re&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Ae,at,Ie.width,Ie.height);for(let C=0;C<6;C++){D=me[C].mipmaps;for(let P=0;P<D.length;P++){let j=D[P];M.format!==Ni?Pe!==null?z?ce&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,P,0,0,j.width,j.height,Pe,j.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,P,at,j.width,j.height,0,j.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ce&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,P,0,0,j.width,j.height,Pe,Qe,j.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,P,at,j.width,j.height,0,Pe,Qe,j.data)}}}else{if(D=M.mipmaps,z&&re){D.length>0&&Ae++;let C=rt(me[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Ae,at,C.width,C.height)}for(let C=0;C<6;C++)if(Ue){z?ce&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,me[C].width,me[C].height,Pe,Qe,me[C].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,at,me[C].width,me[C].height,0,Pe,Qe,me[C].data);for(let P=0;P<D.length;P++){let j=D[P].image[C].image;z?ce&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,P+1,0,0,j.width,j.height,Pe,Qe,j.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,P+1,at,j.width,j.height,0,Pe,Qe,j.data)}}else{z?ce&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,Pe,Qe,me[C]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,at,Pe,Qe,me[C]);for(let P=0;P<D.length;P++){let j=D[P];z?ce&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,P+1,0,0,Pe,Qe,j.image[C]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,P+1,at,Pe,Qe,j.image[C])}}}f(M)&&b(e.TEXTURE_CUBE_MAP),ve.__version=se.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ye(R,M,B,Z,se,ve){let Me=n.convert(B.format,B.colorSpace),k=n.convert(B.type),xe=g(B.internalFormat,Me,k,B.normalized,B.colorSpace),_e=r.get(M),Ue=r.get(B);if(Ue.__renderTarget=M,!_e.__hasExternalTextures){let me=Math.max(1,M.width>>ve),Ie=Math.max(1,M.height>>ve);se===e.TEXTURE_3D||se===e.TEXTURE_2D_ARRAY?i.texImage3D(se,ve,xe,me,Ie,M.depth,0,Me,k,null):i.texImage2D(se,ve,xe,me,Ie,0,Me,k,null)}i.bindFramebuffer(e.FRAMEBUFFER,R),F(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,se,Ue.__webglTexture,0,$e(M)):(se===e.TEXTURE_2D||se>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Z,se,Ue.__webglTexture,ve),i.bindFramebuffer(e.FRAMEBUFFER,null)}function it(R,M,B){if(e.bindRenderbuffer(e.RENDERBUFFER,R),M.depthBuffer){let Z=M.depthTexture,se=Z&&Z.isDepthTexture?Z.type:null,ve=S(M.stencilBuffer,se),Me=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;F(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,$e(M),ve,M.width,M.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,$e(M),ve,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,ve,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Me,e.RENDERBUFFER,R)}else{let Z=M.textures;for(let se=0;se<Z.length;se++){let ve=Z[se],Me=n.convert(ve.format,ve.colorSpace),k=n.convert(ve.type),xe=g(ve.internalFormat,Me,k,ve.normalized,ve.colorSpace);F(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,$e(M),xe,M.width,M.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,$e(M),xe,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,xe,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function le(R,M,B){let Z=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=r.get(M.depthTexture);if(se.__renderTarget=M,(!se.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z){if(se.__webglInit===void 0&&(se.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),se.__webglTexture===void 0){se.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,se.__webglTexture),je(e.TEXTURE_CUBE_MAP,M.depthTexture);let _e=n.convert(M.depthTexture.format),Ue=n.convert(M.depthTexture.type),me;M.depthTexture.format===br?me=e.DEPTH_COMPONENT24:M.depthTexture.format===Zr&&(me=e.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,me,M.width,M.height,0,_e,Ue,null)}}else ge(M.depthTexture,0);let ve=se.__webglTexture,Me=$e(M),k=Z?e.TEXTURE_CUBE_MAP_POSITIVE_X+B:e.TEXTURE_2D,xe=M.depthTexture.format===Zr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(M.depthTexture.format===br)F(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,xe,k,ve,0,Me):e.framebufferTexture2D(e.FRAMEBUFFER,xe,k,ve,0);else if(M.depthTexture.format===Zr)F(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,xe,k,ve,0,Me):e.framebufferTexture2D(e.FRAMEBUFFER,xe,k,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(R){let M=r.get(R),B=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let Z=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){let se=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",se)};Z.addEventListener("dispose",se),M.__depthDisposeCallback=se}M.__boundDepthTexture=Z}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let Z=0;Z<6;Z++)le(M.__webglFramebuffer[Z],R,Z);else{let Z=R.texture.mipmaps;Z&&Z.length>0?le(M.__webglFramebuffer[0],R,0):le(M.__webglFramebuffer,R,0)}else if(B){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(i.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=e.createRenderbuffer(),it(M.__webglDepthbuffer[Z],R,!1);else{let se=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=M.__webglDepthbuffer[Z];e.bindRenderbuffer(e.RENDERBUFFER,ve),e.framebufferRenderbuffer(e.FRAMEBUFFER,se,e.RENDERBUFFER,ve)}}else{let Z=R.texture.mipmaps;if(Z&&Z.length>0?i.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=e.createRenderbuffer(),it(M.__webglDepthbuffer,R,!1);else{let se=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=M.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ve),e.framebufferRenderbuffer(e.FRAMEBUFFER,se,e.RENDERBUFFER,ve)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function pe(R,M,B){let Z=r.get(R);M!==void 0&&ye(Z.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&ne(R)}function Ee(R){let M=R.texture,B=r.get(R),Z=r.get(M);R.addEventListener("dispose",v);let se=R.textures,ve=R.isWebGLCubeRenderTarget===!0,Me=se.length>1;if(Me||(Z.__webglTexture===void 0&&(Z.__webglTexture=e.createTexture()),Z.__version=M.version,s.memory.textures++),ve){B.__webglFramebuffer=[];for(let k=0;k<6;k++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[k]=[];for(let xe=0;xe<M.mipmaps.length;xe++)B.__webglFramebuffer[k][xe]=e.createFramebuffer()}else B.__webglFramebuffer[k]=e.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let k=0;k<M.mipmaps.length;k++)B.__webglFramebuffer[k]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(Me)for(let k=0,xe=se.length;k<xe;k++){let _e=r.get(se[k]);_e.__webglTexture===void 0&&(_e.__webglTexture=e.createTexture(),s.memory.textures++)}if(R.samples>0&&F(R)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let k=0;k<se.length;k++){let xe=se[k];B.__webglColorRenderbuffer[k]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[k]);let _e=n.convert(xe.format,xe.colorSpace),Ue=n.convert(xe.type),me=g(xe.internalFormat,_e,Ue,xe.normalized,xe.colorSpace,R.isXRRenderTarget===!0),Ie=$e(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie,me,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+k,e.RENDERBUFFER,B.__webglColorRenderbuffer[k])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),it(B.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ve){i.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),je(e.TEXTURE_CUBE_MAP,M);for(let k=0;k<6;k++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ye(B.__webglFramebuffer[k][xe],R,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+k,xe);else ye(B.__webglFramebuffer[k],R,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);f(M)&&b(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Me){for(let k=0,xe=se.length;k<xe;k++){let _e=se[k],Ue=r.get(_e),me=e.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(me,Ue.__webglTexture),je(me,_e),ye(B.__webglFramebuffer,R,_e,e.COLOR_ATTACHMENT0+k,me,0),f(_e)&&b(me)}i.unbindTexture()}else{let k=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(k=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(k,Z.__webglTexture),je(k,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ye(B.__webglFramebuffer[xe],R,M,e.COLOR_ATTACHMENT0,k,xe);else ye(B.__webglFramebuffer,R,M,e.COLOR_ATTACHMENT0,k,0);f(M)&&b(k),i.unbindTexture()}R.depthBuffer&&ne(R)}function Ce(R){let M=R.textures;for(let B=0,Z=M.length;B<Z;B++){let se=M[B];if(f(se)){let ve=y(R),Me=r.get(se).__webglTexture;i.bindTexture(ve,Me),b(ve),i.unbindTexture()}}}let De=[],ke=[];function et(R){if(R.samples>0){if(F(R)===!1){let M=R.textures,B=R.width,Z=R.height,se=e.COLOR_BUFFER_BIT,ve=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Me=r.get(R),k=M.length>1;if(k)for(let _e=0;_e<M.length;_e++)i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let xe=R.texture.mipmaps;xe&&xe.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=e.STENCIL_BUFFER_BIT)),k){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);let Ue=r.get(M[_e]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ue,0)}e.blitFramebuffer(0,0,B,Z,0,0,B,Z,se,e.NEAREST),l===!0&&(De.length=0,ke.length=0,De.push(e.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(De.push(ve),ke.push(ve),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ke)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,De))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),k)for(let _e=0;_e<M.length;_e++){i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);let Ue=r.get(M[_e]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,Ue,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let M=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[M])}}}function $e(R){return Math.min(a.maxSamples,R.samples)}function F(R){let M=r.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function St(R){let M=s.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function nt(R,M){let B=R.colorSpace,Z=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Si&&B!==Fr&&(ct.getTransfer(B)===Tt?(Z!==Ni||se!==wi)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",B)),M}function rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=Q,this.resetTextureUnits=q,this.getTextureUnits=U,this.setTextureUnits=G,this.setTexture2D=ge,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=ae,this.rebindTextures=pe,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=F,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Zy(e,t){function i(r,a=Fr){let n,s=ct.getTransfer(a);if(r===wi)return e.UNSIGNED_BYTE;if(r===ch)return e.UNSIGNED_SHORT_4_4_4_4;if(r===uh)return e.UNSIGNED_SHORT_5_5_5_1;if(r===ad)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===nd)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===id)return e.BYTE;if(r===rd)return e.SHORT;if(r===Fn)return e.UNSIGNED_SHORT;if(r===hh)return e.INT;if(r===hr)return e.UNSIGNED_INT;if(r===Li)return e.FLOAT;if(r===ei)return e.HALF_FLOAT;if(r===sd)return e.ALPHA;if(r===od)return e.RGB;if(r===Ni)return e.RGBA;if(r===br)return e.DEPTH_COMPONENT;if(r===Zr)return e.DEPTH_STENCIL;if(r===dh)return e.RED;if(r===ph)return e.RED_INTEGER;if(r===ta)return e.RG;if(r===fh)return e.RG_INTEGER;if(r===mh)return e.RGBA_INTEGER;if(r===Hs||r===ks||r===Gs||r===Vs)if(s===Tt)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Hs)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ks)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gs)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vs)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Hs)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ks)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gs)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vs)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wl||r===Al||r===Rl||r===Cl)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===wl)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Al)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rl)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cl)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Il||r===Pl||r===Ll||r===Nl||r===Dl||r===Ys||r===Ul)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===Il||r===Pl)return s===Tt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Ll)return s===Tt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===Nl)return n.COMPRESSED_R11_EAC;if(r===Dl)return n.COMPRESSED_SIGNED_R11_EAC;if(r===Ys)return n.COMPRESSED_RG11_EAC;if(r===Ul)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ol||r===Fl||r===Bl||r===zl||r===Hl||r===kl||r===Gl||r===Vl||r===Wl||r===Xl||r===jl||r===ql||r===Yl||r===Zl)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Ol)return s===Tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fl)return s===Tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bl)return s===Tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zl)return s===Tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hl)return s===Tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kl)return s===Tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gl)return s===Tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vl)return s===Tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wl)return s===Tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xl)return s===Tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jl)return s===Tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ql)return s===Tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yl)return s===Tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zl)return s===Tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Kl||r===Jl||r===$l)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===Kl)return s===Tt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jl)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$l)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ql||r===eh||r===Zs||r===th)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===Ql)return n.COMPRESSED_RED_RGTC1_EXT;if(r===eh)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zs)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===th)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bn?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var Ky=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jy=`
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

}`,$y=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ld(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Bt({vertexShader:Ky,fragmentShader:Jy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new Ai(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qy=class extends ra{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,c=null,d=null,u=null,p=null,_=typeof XRWebGLBinding<"u",x=new $y,m={},f=t.getContextAttributes(),b=null,y=null,g=[],S=[],w=new he,A=null,v=null,T=new ai;T.viewport=new Rt;let O=new ai;O.viewport=new Rt;let L=[T,O],N=new Jg,q=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=g[ee];return de===void 0&&(de=new Wo,g[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=g[ee];return de===void 0&&(de=new Wo,g[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=g[ee];return de===void 0&&(de=new Wo,g[ee]=de),de.getHandSpace()};function G(ee){let de=S.indexOf(ee.inputSource);if(de===-1)return;let fe=g[de];fe!==void 0&&(fe.update(ee.inputSource,ee.frame,l||n),fe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Q(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",X);for(let ee=0;ee<g.length;ee++){let de=S[ee];de!==null&&(S[ee]=null,g[ee].disconnect(de))}q=null,U=null,x.reset();for(let ee in m)delete m[ee];if(e.setRenderTarget(b),u=null,d=null,c=null,r=null,y=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),v!==null){let ee=v.camera;ee.fov=v.fov,ee.zoom=v.zoom,ee.updateProjectionMatrix(),v=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){a=ee,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){s=ee,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return c===null&&_&&(c=new XRWebGLBinding(r,t)),c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",X),f.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,fe=null,Ne=null;f.depth&&(Ne=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=f.stencil?Zr:br,fe=f.stencil?Bn:hr);let qe={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:a};c=this.getBinding(),d=c.createProjectionLayer(qe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Zt(d.textureWidth,d.textureHeight,{format:Ni,type:wi,depthTexture:new kn(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let de={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Zt(u.framebufferWidth,u.framebufferHeight,{format:Ni,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(ee){for(let de=0;de<ee.removed.length;de++){let fe=ee.removed[de],Ne=S.indexOf(fe);Ne>=0&&(S[Ne]=null,g[Ne].disconnect(fe))}for(let de=0;de<ee.added.length;de++){let fe=ee.added[de],Ne=S.indexOf(fe);if(Ne===-1){for(let ye=0;ye<g.length;ye++)if(ye>=S.length){S.push(fe),Ne=ye;break}else if(S[ye]===null){S[ye]=fe,Ne=ye;break}if(Ne===-1)break}let qe=g[Ne];qe&&qe.connect(fe)}}let ge=new I,Y=new I;function K(ee,de,fe){ge.setFromMatrixPosition(de.matrixWorld),Y.setFromMatrixPosition(fe.matrixWorld);let Ne=ge.distanceTo(Y),qe=de.projectionMatrix.elements,ye=fe.projectionMatrix.elements,it=qe[14]/(qe[10]-1),le=qe[14]/(qe[10]+1),ne=(qe[9]+1)/qe[5],pe=(qe[9]-1)/qe[5],Ee=(qe[8]-1)/qe[0],Ce=(ye[8]+1)/ye[0],De=it*Ee,ke=it*Ce,et=Ne/(-Ee+Ce),$e=et*-Ee;if(de.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX($e),ee.translateZ(et),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),qe[10]===-1)ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let F=it+et,St=le+et,nt=De-$e,rt=ke+(Ne-$e),R=ne*le/St*F,M=pe*le/St*F;ee.projectionMatrix.makePerspective(nt,rt,R,M,F,St),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ae(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let de=ee.near,fe=ee.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(fe=x.depthFar)),N.near=O.near=T.near=de,N.far=O.far=T.far=fe,(q!==N.near||U!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),q=N.near,U=N.far),N.layers.mask=ee.layers.mask|6,T.layers.mask=N.layers.mask&-5,O.layers.mask=N.layers.mask&-3;let Ne=ee.parent,qe=N.cameras;ae(N,Ne);for(let ye=0;ye<qe.length;ye++)ae(qe[ye],Ne);qe.length===2?K(N,T,O):N.projectionMatrix.copy(T.projectionMatrix),v===null&&ee.isPerspectiveCamera&&(v={camera:ee,fov:ee.fov,zoom:ee.zoom}),Be(ee,N,Ne)};function Be(ee,de,fe){fe===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(fe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ja*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&u===null))return o},this.setFoveation=function(ee){o=ee,d!==null&&(d.fixedFoveation=ee),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(N)},this.getCameraTexture=function(ee){return m[ee]};let Re=null;function ot(ee,de){if(h=de.getViewerPose(l||n),p=de,h!==null){let fe=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let Ne=!1;fe.length!==N.cameras.length&&(N.cameras.length=0,Ne=!0);for(let ye=0;ye<fe.length;ye++){let it=fe[ye],le=null;if(u!==null)le=u.getViewport(it);else{let pe=c.getViewSubImage(d,it);le=pe.viewport,ye===0&&(e.setRenderTargetTextures(y,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(y))}let ne=L[ye];ne===void 0&&(ne=new ai,ne.layers.enable(ye),ne.viewport=new Rt,L[ye]=ne),ne.matrix.fromArray(it.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(it.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(le.x,le.y,le.width,le.height),ye===0&&(N.matrix.copy(ne.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ne===!0&&N.cameras.push(ne)}let qe=r.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){c=i.getBinding();let ye=c.getDepthInformation(fe[0]);ye&&ye.isValid&&ye.texture&&x.init(ye,r.renderState)}if(qe&&qe.includes("camera-access")&&_){e.state.unbindTexture(),c=i.getBinding();for(let ye=0;ye<fe.length;ye++){let it=fe[ye].camera;if(it){let le=m[it];le||(le=new Ld,m[it]=le);let ne=c.getCameraImage(it);le.sourceTexture=ne}}}}for(let fe=0;fe<g.length;fe++){let Ne=S[fe],qe=g[fe];Ne!==null&&qe!==void 0&&qe.update(Ne,de,l||n)}Re&&Re(ee,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),p=null}let je=new _p;je.setAnimationLoop(ot),this.setAnimationLoop=function(ee){Re=ee},this.dispose=function(){}}},e1=new Ye,Tp=new st;Tp.set(-1,0,0,0,1,0,0,0,1);function t1(e,t){function i(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,cp(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,b,y,g){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?n(m,f):f.isMeshLambertMaterial?(n(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(n(m,f),d(m,f)):f.isMeshPhongMaterial?(n(m,f),c(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(n(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,g)):f.isMeshMatcapMaterial?(n(m,f),_(m,f)):f.isMeshDepthMaterial?n(m,f):f.isMeshDistanceMaterial?(n(m,f),x(m,f)):f.isMeshNormalMaterial?n(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,b,y):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,i(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Mi&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,i(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Mi&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,i(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,i(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=t.get(f),y=b.envMap,g=b.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(e1.makeRotationFromEuler(g)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Tp),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=y*.5,f.map&&(m.map.value=f.map,i(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Mi&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function i1(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,S){let w=S.program;r.uniformBlockBinding(g,w)}function h(g,S){let w=a[g.id];w===void 0&&(m(g),w=c(g),a[g.id]=w,g.addEventListener("dispose",b));let A=S.program;r.updateUBOMapping(g,A);let v=t.render.frame;n[g.id]!==v&&(u(g),n[g.id]=v)}function c(g){let S=d();g.__bindingPointIndex=S;let w=e.createBuffer(),A=g.__size,v=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,A,v),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,S,w),w}function d(){for(let g=0;g<o;g++)if(s.indexOf(g)===-1)return s.push(g),g;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(g){let S=a[g.id],w=g.uniforms,A=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,S);for(let v=0,T=w.length;v<T;v++){let O=w[v];if(Array.isArray(O))for(let L=0,N=O.length;L<N;L++)p(O[L],v,L,A);else p(O,v,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,S,w,A){if(x(g,S,w,A)===!0){let v=g.__offset,T=g.value;if(Array.isArray(T)){let O=0;for(let L=0;L<T.length;L++){let N=T[L],q=f(N);_(N,g.__data,O),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(O+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,g.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,v,g.__data)}}function _(g,S,w){typeof g=="number"||typeof g=="boolean"?S[0]=g:g.isMatrix3?(S[0]=g.elements[0],S[1]=g.elements[1],S[2]=g.elements[2],S[3]=0,S[4]=g.elements[3],S[5]=g.elements[4],S[6]=g.elements[5],S[7]=0,S[8]=g.elements[6],S[9]=g.elements[7],S[10]=g.elements[8],S[11]=0):ArrayBuffer.isView(g)?S.set(new g.constructor(g.buffer,g.byteOffset,S.length)):g.toArray(S,w)}function x(g,S,w,A){let v=g.value,T=S+"_"+w;if(A[T]===void 0)return typeof v=="number"||typeof v=="boolean"?A[T]=v:ArrayBuffer.isView(v)?A[T]=v.slice():A[T]=v.clone(),!0;{let O=A[T];if(typeof v=="number"||typeof v=="boolean"){if(O!==v)return A[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(O.equals(v)===!1)return O.copy(v),!0}}return!1}function m(g){let S=g.uniforms,w=0,A=16;for(let T=0,O=S.length;T<O;T++){let L=Array.isArray(S[T])?S[T]:[S[T]];for(let N=0,q=L.length;N<q;N++){let U=L[N],G=Array.isArray(U.value)?U.value:[U.value];for(let Q=0,X=G.length;Q<X;Q++){let ge=G[Q],Y=f(ge),K=w%A,ae=K%Y.boundary,Be=K+ae;w+=ae,Be!==0&&A-Be<Y.storage&&(w+=A-Be),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=w,w+=Y.storage}}}let v=w%A;return v>0&&(w+=A-v),g.__size=w,g.__cache={},this}function f(g){let S={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(S.boundary=4,S.storage=4):g.isVector2?(S.boundary=8,S.storage=8):g.isVector3||g.isColor?(S.boundary=16,S.storage=12):g.isVector4?(S.boundary=16,S.storage=16):g.isMatrix3?(S.boundary=48,S.storage=48):g.isMatrix4?(S.boundary=64,S.storage=64):g.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(S.boundary=16,S.storage=g.byteLength):We("WebGLRenderer: Unsupported uniform value type.",g),S}function b(g){let S=g.target;S.removeEventListener("dispose",b);let w=s.indexOf(S.__bindingPointIndex);s.splice(w,1),e.deleteBuffer(a[S.id]),delete a[S.id],delete n[S.id]}function y(){for(let g in a)e.deleteBuffer(a[g]);s=[],a={},n={}}return{bind:l,update:h,dispose:y}}var r1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),nr=null;function a1(){return nr===null&&(nr=new jn(r1,16,16,ta,ei),nr.name="DFG_LUT",nr.minFilter=Ht,nr.magFilter=Ht,nr.wrapS=Zi,nr.wrapT=Zi,nr.generateMipmaps=!1,nr.needsUpdate=!0),nr}var Ep=class{constructor(e={}){let{canvas:t=Gf(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1,outputBufferType:u=wi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=n;let _=u,x=new Set([mh,fh,ph]),m=new Set([wi,hr,Fn,Bn,ch,uh]),f=new Uint32Array(4),b=new Int32Array(4),y=new I,g=null,S=null,w=[],A=[],v=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,O=!1,L=null,N=null,q=null,U=null;this._outputColorSpace=Lt;let G=0,Q=0,X=null,ge=-1,Y=null,K=new Rt,ae=new Rt,Be=null,Re=new we(0),ot=0,je=t.width,ee=t.height,de=1,fe=null,Ne=null,qe=new Rt(0,0,je,ee),ye=new Rt(0,0,je,ee),it=!1,le=new $a,ne=!1,pe=!1,Ee=new Ye,Ce=new I,De=new Rt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function $e(){return X===null?de:1}let F=i;function St(E,H){return t.getContext(E,H)}let nt,rt,R,M,B,Z,se,ve,Me,k,xe,_e,Ue,me,Ie,Pe,Qe,at,z,re,ce,Ae,D;try{let E={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",oe,!1),F===null){let H="webgl2";if(F=St(H,E),F===null)throw St(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}C()}catch(E){throw t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),tt("WebGLRenderer: "+E.message),E}function C(){nt=new ax(F),nt.init(),ce=new Zy(F,nt),rt=new Yv(F,nt,e,ce),R=new qy(F,nt),rt.reversedDepthBuffer&&d&&R.buffers.depth.setReversed(!0),N=F.createFramebuffer(),q=F.createFramebuffer(),U=F.createFramebuffer(),M=new ox(F),B=new Ny,Z=new Yy(F,nt,R,B,rt,ce,M),se=new rx(T),ve=new h0(F),Ae=new jv(F,ve),Me=new nx(F,ve,M,Ae),k=new hx(F,Me,ve,Ae,M),at=new lx(F,rt,Z),Ie=new Zv(B),xe=new Ly(T,se,nt,rt,Ae,Ie),_e=new t1(T,B),Ue=new Uy,me=new ky(nt),Qe=new Xv(T,se,R,k,p,o),Pe=new jy(T,k,rt),D=new i1(F,M,rt,R),z=new qv(F,nt,M),re=new sx(F,nt,M),M.programs=xe.programs,T.capabilities=rt,T.extensions=nt,T.properties=B,T.renderLists=Ue,T.shadowMap=Pe,T.state=R,T.info=M}_!==wi&&(v=new ux(_,t.width,t.height,s,r,a));let P=new Qy(T,F);this.xr=P,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(E){E!==void 0&&(de=E,this.setSize(je,ee,!1))},this.getSize=function(E){return E.set(je,ee)},this.setSize=function(E,H,$=!0){if(P.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}je=E,ee=H,t.width=Math.floor(E*de),t.height=Math.floor(H*de),$===!0&&(t.style.width=E+"px",t.style.height=H+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(je*de,ee*de).floor()},this.setDrawingBufferSize=function(E,H,$){je=E,ee=H,de=$,t.width=Math.floor(E*$),t.height=Math.floor(H*$),this.setViewport(0,0,E,H)},this.setEffects=function(E){if(_===wi){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let H=0;H<E.length;H++)if(E[H].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(K)},this.getViewport=function(E){return E.copy(qe)},this.setViewport=function(E,H,$,W){E.isVector4?qe.set(E.x,E.y,E.z,E.w):qe.set(E,H,$,W),R.viewport(K.copy(qe).multiplyScalar(de).round())},this.getScissor=function(E){return E.copy(ye)},this.setScissor=function(E,H,$,W){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,H,$,W),R.scissor(ae.copy(ye).multiplyScalar(de).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(E){R.setScissorTest(it=E)},this.setOpaqueSort=function(E){fe=E},this.setTransparentSort=function(E){Ne=E},this.getClearColor=function(E){return E.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,$=!0){let W=0;if(E){let V=!1;if(X!==null){let Se=X.texture.format;V=x.has(Se)}if(V){let Se=X.texture.type,be=m.has(Se),Le=Qe.getClearColor(),Oe=Qe.getClearAlpha(),Je=Le.r,dt=Le.g,vt=Le.b;be?(f[0]=Je,f[1]=dt,f[2]=vt,f[3]=Oe,F.clearBufferuiv(F.COLOR,0,f)):(b[0]=Je,b[1]=dt,b[2]=vt,b[3]=Oe,F.clearBufferiv(F.COLOR,0,b))}else W|=F.COLOR_BUFFER_BIT}H&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Qe.dispose(),Ue.dispose(),me.dispose(),B.dispose(),se.dispose(),k.dispose(),Ae.dispose(),D.dispose(),xe.dispose(),P.dispose(),P.removeEventListener("sessionstart",oi),P.removeEventListener("sessionend",pa),Ci.stop()};function j(E){E.preventDefault(),Js("WebGLRenderer: Context Lost."),O=!0}function te(){Js("WebGLRenderer: Context Restored."),O=!1;let E=M.autoReset,H=Pe.enabled,$=Pe.autoUpdate,W=Pe.needsUpdate,V=Pe.type;C(),M.autoReset=E,Pe.enabled=H,Pe.autoUpdate=$,Pe.needsUpdate=W,Pe.type=V}function oe(E){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ue(E){let H=E.target;H.removeEventListener("dispose",ue),Ge(H)}function Ge(E){Ze(E),B.remove(E)}function Ze(E){let H=B.get(E).programs;H!==void 0&&(H.forEach(function($){xe.releaseProgram($)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,$,W,V,Se){H===null&&(H=ke);let be=V.isMesh&&V.matrixWorld.determinantAffine()<0,Le=Ro(E,H,$,W,V);R.setMaterial(W,be);let Oe=$.index,Je=1;if(W.wireframe===!0){if(Oe=Me.getWireframeAttribute($),Oe===void 0)return;Je=2}let dt=$.drawRange,vt=$.attributes.position,Ve=dt.start*Je,bt=(dt.start+dt.count)*Je;Se!==null&&(Ve=Math.max(Ve,Se.start*Je),bt=Math.min(bt,(Se.start+Se.count)*Je)),Oe!==null?(Ve=Math.max(Ve,0),bt=Math.min(bt,Oe.count)):vt!=null&&(Ve=Math.max(Ve,0),bt=Math.min(bt,vt.count));let Dt=bt-Ve;if(Dt<0||Dt===1/0)return;Ae.setup(V,W,Le,$,Oe);let Et,wt=z;if(Oe!==null&&(Et=ve.get(Oe),wt=re,wt.setIndex(Et)),V.isMesh)W.wireframe===!0?(R.setLineWidth(W.wireframeLinewidth*$e()),wt.setMode(F.LINES)):wt.setMode(F.TRIANGLES);else if(V.isLine){let Ct=W.linewidth;Ct===void 0&&(Ct=1),R.setLineWidth(Ct*$e()),V.isLineSegments?wt.setMode(F.LINES):V.isLineLoop?wt.setMode(F.LINE_LOOP):wt.setMode(F.LINE_STRIP)}else V.isPoints?wt.setMode(F.POINTS):V.isSprite&&wt.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))wt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ct=V._multiDrawStarts,Fe=V._multiDrawCounts,Ut=V._multiDrawCount,Vi=Oe?ve.get(Oe).bytesPerElement:1,xi=B.get(W).currentProgram.getUniforms();for(let bi=0;bi<Ut;bi++)xi.setValue(F,"_gl_DrawID",bi),wt.render(Ct[bi]/Vi,Fe[bi])}else if(V.isInstancedMesh)wt.renderInstances(Ve,Dt,V.count);else if($.isInstancedBufferGeometry){let Ct=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Fe=Math.min($.instanceCount,Ct);wt.renderInstances(Ve,Dt,Fe)}else wt.render(Ve,Dt)};function Mt(E,H,$,W){L!==null&&E.isNodeMaterial&&L.setObject(W,E),ne===!0&&Ie.setState(E,$,!1),E.transparent===!0&&E.side===ci&&E.forceSinglePass===!1?(E.side=Mi,E.needsUpdate=!0,Vr(E,H,W),E.side=Sr,E.needsUpdate=!0,Vr(E,H,W),E.side=ci):Vr(E,H,W)}this.compile=function(E,H,$=null){$===null&&($=E),L!==null&&L.renderStart(E,H,$),S=me.get($),S.init(H),A.push(S),$.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),E!==$&&E.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),S.setupLights(),L!==null&&L.updateLights(S.state.lightsArray),pe=this.localClippingEnabled,ne=Ie.init(this.clippingPlanes,pe),ne===!0&&Ie.setGlobalState(this.clippingPlanes,H),L!==null&&Pe.render(S.state.shadowsArray,$,H);let W=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Se=V.material;if(Se)if(Array.isArray(Se))for(let be=0;be<Se.length;be++){let Le=Se[be];Mt(Le,$,H,V),W.add(Le)}else Mt(Se,$,H,V),W.add(Se)}),S=A.pop(),L!==null&&L.renderEnd(),W},this.compileAsync=function(E,H,$=null){let W=this.compile(E,H,$);return new Promise(V=>{function Se(){if(W.forEach(function(be){let Le=B.get(be).currentProgram;(Le===void 0||Le.isReady())&&W.delete(be)}),W.size===0){V(E);return}setTimeout(Se,10)}nt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let yt=null;function _t(E){yt&&yt(E)}function oi(){Ci.stop()}function pa(){Ci.start()}let Ci=new _p;Ci.setAnimationLoop(_t),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(E){yt=E,P.setAnimationLoop(E),E===null?Ci.stop():Ci.start()},P.addEventListener("sessionstart",oi),P.addEventListener("sessionend",pa),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;L!==null&&L.renderStart(E,H);let $=P.enabled===!0&&P.isPresenting===!0,W=v!==null&&(X===null||$)&&v.begin(T,X);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(P.cameraAutoUpdate===!0&&P.updateCamera(H),H=P.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,H,X),S=me.get(E,A.length),S.init(H),S.state.textureUnits=Z.getTextureUnits(),A.push(S),Ee.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),le.setFromProjectionMatrix(Ee,Ki,H.reversedDepth),pe=this.localClippingEnabled,ne=Ie.init(this.clippingPlanes,pe),g=Ue.get(E,w.length),g.init(),w.push(g),P.enabled===!0&&P.isPresenting===!0){let Se=T.xr.getDepthSensingMesh();Se!==null&&Hi(Se,H,-1/0,T.sortObjects)}Hi(E,H,0,T.sortObjects),g.finish(),L!==null&&L.updateLights(S.state.lightsArray),T.sortObjects===!0&&g.sort(fe,Ne),et=P.enabled===!1||P.isPresenting===!1||P.hasDepthSensing()===!1,et&&Qe.addToRenderList(g,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ne===!0&&Ie.beginShadows();let V=S.state.shadowsArray;if(Pe.render(V,E,H),ne===!0&&Ie.endShadows(),(W&&v.hasRenderPass())===!1){let Se=g.opaque,be=g.transmissive;if(S.setupLights(),H.isArrayCamera){let Le=H.cameras;if(be.length>0)for(let Oe=0,Je=Le.length;Oe<Je;Oe++){let dt=Le[Oe];Gi(Se,be,E,dt)}et&&Qe.render(E);for(let Oe=0,Je=Le.length;Oe<Je;Oe++){let dt=Le[Oe];ki(g,E,dt,dt.viewport)}}else be.length>0&&Gi(Se,be,E,H),et&&Qe.render(E),ki(g,E,H)}X!==null&&Q===0&&(Z.updateMultisampleRenderTarget(X),Z.updateRenderTargetMipmap(X)),W&&v.end(T),E.isScene===!0&&E.onAfterRender(T,E,H),Ae.resetDefaultState(),ge=-1,Y=null,A.pop(),A.length>0?(S=A[A.length-1],Z.setTextureUnits(S.state.textureUnits),ne===!0&&Ie.setGlobalState(T.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?g=w[w.length-1]:g=null,L!==null&&L.renderEnd()};function Hi(E,H,$,W){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(le)){W&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ee);let Se=k.update(E),be=E.material;be.visible&&g.push(E,Se,be,$,De.z,null,H)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(le))){let Se=k.update(E),be=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),De.copy(Se.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(Ee)),Array.isArray(be)){let Le=Se.groups;for(let Oe=0,Je=Le.length;Oe<Je;Oe++){let dt=Le[Oe],vt=be[dt.materialIndex];vt&&vt.visible&&g.push(E,Se,vt,$,De.z,dt,H)}}else be.visible&&g.push(E,Se,be,$,De.z,null,H)}}let V=E.children;for(let Se=0,be=V.length;Se<be;Se++)Hi(V[Se],H,$,W)}function ki(E,H,$,W){let{opaque:V,transmissive:Se,transparent:be}=E;S.setupLightsView($),ne===!0&&Ie.setGlobalState(T.clippingPlanes,$),W&&R.viewport(K.copy(W)),V.length>0&&fi(V,H,$),Se.length>0&&fi(Se,H,$),be.length>0&&fi(be,H,$),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function Gi(E,H,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[W.id]===void 0){let vt=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[W.id]=new Zt(1,1,{generateMipmaps:!0,type:vt?ei:wi,minFilter:or,samples:Math.max(4,rt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let V=S.state.transmissionRenderTarget[W.id],Se=W.viewport||K;V.setSize(Se.z*T.transmissionResolutionScale,Se.w*T.transmissionResolutionScale);let be=T.getRenderTarget(),Le=T.getActiveCubeFace(),Oe=T.getActiveMipmapLevel();T.setRenderTarget(V),T.getClearColor(Re),ot=T.getClearAlpha(),ot<1&&T.setClearColor(16777215,.5),T.clear(),et&&Qe.render($);let Je=T.toneMapping;T.toneMapping=lr;let dt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),S.setupLightsView(W),ne===!0&&Ie.setGlobalState(T.clippingPlanes,W),fi(E,$,W),Z.updateMultisampleRenderTarget(V),Z.updateRenderTargetMipmap(V),nt.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let Ve=0,bt=H.length;Ve<bt;Ve++){let Dt=H[Ve],{object:Et,geometry:wt,material:Ct,group:Fe}=Dt;if(Ct.side===ci&&Et.layers.test(W.layers)){let Ut=Ct.side;Ct.side=Mi,Ct.needsUpdate=!0,pn(Et,$,W,wt,Ct,Fe),Ct.side=Ut,Ct.needsUpdate=!0,vt=!0}}vt===!0&&(Z.updateMultisampleRenderTarget(V),Z.updateRenderTargetMipmap(V))}T.setRenderTarget(be,Le,Oe),T.setClearColor(Re,ot),dt!==void 0&&(W.viewport=dt),T.toneMapping=Je}function fi(E,H,$){let W=H.isScene===!0?H.overrideMaterial:null;for(let V=0,Se=E.length;V<Se;V++){let be=E[V],{object:Le,geometry:Oe,group:Je}=be,dt=be.material;dt.allowOverride===!0&&W!==null&&(dt=W),Le.layers.test($.layers)&&pn(Le,H,$,Oe,dt,Je)}}function pn(E,H,$,W,V,Se){L!==null&&V.isNodeMaterial&&L.setObject(E,V),E.onBeforeRender(T,H,$,W,V,Se),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(T,H,$,W,E,Se),V.transparent===!0&&V.side===ci&&V.forceSinglePass===!1?(V.side=Mi,V.needsUpdate=!0,T.renderBufferDirect($,H,W,V,E,Se),V.side=Sr,V.needsUpdate=!0,T.renderBufferDirect($,H,W,V,E,Se),V.side=ci):T.renderBufferDirect($,H,W,V,E,Se),E.onAfterRender(T,H,$,W,V,Se)}function Vr(E,H,$){H.isScene!==!0&&(H=ke);let W=B.get(E),V=S.state.lights,Se=S.state.shadowsArray,be=V.state.version,Le=xe.getParameters(E,V.state,Se,H,$,S.state.lightProbeGridArray),Oe=xe.getProgramCacheKey(Le),Je=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,W.fog=H.fog;let dt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;W.envMap=se.get(E.envMap||W.environment,dt),W.envMapRotation=W.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,Je===void 0&&(E.addEventListener("dispose",ue),Je=new Map,W.programs=Je);let vt=Je.get(Oe);if(vt!==void 0){if(W.currentProgram===vt&&W.lightsStateVersion===be)return mn(E,Le),vt}else Le.uniforms=xe.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,$,Le),E.onBeforeCompile(Le,T),vt=xe.acquireProgram(Le,Oe),Je.set(Oe,vt),W.uniforms=Le.uniforms;let Ve=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=Ie.uniform),mn(E,Le),W.needsLights=Io(E),W.lightsStateVersion=be,W.needsLights&&(Ve.ambientLightColor.value=V.state.ambient,Ve.lightProbe.value=V.state.probe,Ve.sunLights.value=V.state.sun,Ve.sunLightShadows.value=V.state.sunShadow,Ve.directionalLights.value=V.state.directional,Ve.directionalLightShadows.value=V.state.directionalShadow,Ve.spotLights.value=V.state.spot,Ve.spotLightShadows.value=V.state.spotShadow,Ve.rectAreaLights.value=V.state.rectArea,Ve.ltc_1.value=V.state.rectAreaLTC1,Ve.ltc_2.value=V.state.rectAreaLTC2,Ve.pointLights.value=V.state.point,Ve.pointLightShadows.value=V.state.pointShadow,Ve.hemisphereLights.value=V.state.hemi,Ve.sunShadowMatrix.value=V.state.sunShadowMatrix,Ve.sunShadowCascade.value=V.state.sunShadowCascade,Ve.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ve.spotLightMatrix.value=V.state.spotLightMatrix,Ve.spotLightMap.value=V.state.spotLightMap,Ve.pointShadowMatrix.value=V.state.pointShadowMatrix),W.lightProbeGrid=S.state.lightProbeGridArray.length>0,W.currentProgram=vt,W.uniformsList=null,vt}function fn(E){if(E.uniformsList===null){let H=E.currentProgram.getUniforms();E.uniformsList=qs.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function mn(E,H){let $=B.get(E);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function as(E,H){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(H.matrixWorld);for(let $=0,W=E.length;$<W;$++){let V=E[$];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function Ro(E,H,$,W,V){H.isScene!==!0&&(H=ke),Z.resetTextureUnits();let Se=H.fog,be=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?H.environment:null,Le=X===null?T.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ct.workingColorSpace,Oe=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Je=se.get(W.envMap||be,Oe),dt=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vt=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ve=!!$.morphAttributes.position,bt=!!$.morphAttributes.normal,Dt=!!$.morphAttributes.color,Et=lr;W.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Et=T.toneMapping);let wt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ct=wt!==void 0?wt.length:0,Fe=B.get(W),Ut=S.state.lights;if(ne===!0&&(pe===!0||E!==Y)){let He=E===Y&&W.id===ge;Ie.setState(W,E,He)}let Vi=!1;W.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Ut.state.version||Fe.outputColorSpace!==Le||V.isBatchedMesh&&Fe.batching===!1||!V.isBatchedMesh&&Fe.batching===!0||V.isBatchedMesh&&Fe.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Fe.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Fe.instancing===!1||!V.isInstancedMesh&&Fe.instancing===!0||V.isSkinnedMesh&&Fe.skinning===!1||!V.isSkinnedMesh&&Fe.skinning===!0||V.isInstancedMesh&&Fe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Fe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Fe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Fe.instancingMorph===!1&&V.morphTexture!==null||Fe.envMap!==Je||W.fog===!0&&Fe.fog!==Se||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ie.numPlanes||Fe.numIntersection!==Ie.numIntersection)||Fe.vertexAlphas!==dt||Fe.vertexTangents!==vt||Fe.morphTargets!==Ve||Fe.morphNormals!==bt||Fe.morphColors!==Dt||Fe.toneMapping!==Et||Fe.morphTargetsCount!==Ct||!!Fe.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Vi=!0):(Vi=!0,Fe.__version=W.version);let xi=Fe.currentProgram;Vi===!0&&(xi=Vr(W,H,V),L&&W.isNodeMaterial&&L.onUpdateProgram(W,xi,Fe));let bi=!1,Ii=!1,pr=!1,J=xi.getUniforms(),ie=Fe.uniforms;if(R.useProgram(xi.program)&&(bi=!0,Ii=!0,pr=!0),W.id!==ge&&(ge=W.id,Ii=!0),Fe.needsLights){let He=as(S.state.lightProbeGridArray,V);Fe.lightProbeGrid!==He&&(Fe.lightProbeGrid=He,Ii=!0)}if(bi||Y!==E){R.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),J.setValue(F,"projectionMatrix",E.projectionMatrix),J.setValue(F,"viewMatrix",E.matrixWorldInverse);let He=J.map.cameraPosition;He!==void 0&&He.setValue(F,Ce.setFromMatrixPosition(E.matrixWorld)),rt.logarithmicDepthBuffer&&J.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&J.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),Y!==E&&(Y=E,Ii=!0,pr=!0)}if(Fe.needsLights&&(Ut.state.sunShadowMap.length>0&&J.setValue(F,"sunShadowMap",Ut.state.sunShadowMap,Z),Ut.state.directionalShadowMap.length>0&&J.setValue(F,"directionalShadowMap",Ut.state.directionalShadowMap,Z),Ut.state.spotShadowMap.length>0&&J.setValue(F,"spotShadowMap",Ut.state.spotShadowMap,Z),Ut.state.pointShadowMap.length>0&&J.setValue(F,"pointShadowMap",Ut.state.pointShadowMap,Z)),V.isSkinnedMesh){J.setOptional(F,V,"bindMatrix"),J.setOptional(F,V,"bindMatrixInverse");let He=V.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),J.setValue(F,"boneTexture",He.boneTexture,Z))}V.isBatchedMesh&&(J.setOptional(F,V,"batchingTexture"),J.setValue(F,"batchingTexture",V._matricesTexture,Z),J.setOptional(F,V,"batchingIdTexture"),J.setValue(F,"batchingIdTexture",V._indirectTexture,Z),J.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&J.setValue(F,"batchingColorTexture",V._colorsTexture,Z));let Xe=$.morphAttributes;if((Xe.position!==void 0||Xe.normal!==void 0||Xe.color!==void 0)&&at.update(V,$,xi),(Ii||Fe.receiveShadow!==V.receiveShadow)&&(Fe.receiveShadow=V.receiveShadow,J.setValue(F,"receiveShadow",V.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&H.environment!==null&&(ie.envMapIntensity.value=H.environmentIntensity),ie.dfgLUT!==void 0&&(ie.dfgLUT.value=a1()),Ii){if(J.setValue(F,"toneMappingExposure",T.toneMappingExposure),Fe.needsLights&&Co(ie,pr),Se&&W.fog===!0&&_e.refreshFogUniforms(ie,Se),_e.refreshMaterialUniforms(ie,W,de,ee,S.state.transmissionRenderTarget[E.id]),Fe.needsLights&&Fe.lightProbeGrid){let He=Fe.lightProbeGrid;ie.probesSH.value=He.texture,ie.probesMin.value.copy(He.boundingBox.min),ie.probesMax.value.copy(He.boundingBox.max),ie.probesResolution.value.copy(He.resolution)}qs.upload(F,fn(Fe),ie,Z)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(qs.upload(F,fn(Fe),ie,Z),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&J.setValue(F,"center",V.center),J.setValue(F,"modelViewMatrix",V.modelViewMatrix),J.setValue(F,"normalMatrix",V.normalMatrix),J.setValue(F,"modelMatrix",V.matrixWorld),W.uniformsGroups!==void 0){let He=W.uniformsGroups;for(let lt=0,Ot=He.length;lt<Ot;lt++){let $t=He[lt];D.update($t,xi),D.bind($t,xi)}}return xi}function Co(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.sunLights.needsUpdate=H,E.sunLightShadows.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function Io(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(E,H,$){let W=B.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),B.get(E.texture).__webglTexture=H,B.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){let $=B.get(E);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,$=0){X=E,G=H,Q=$;let W=null,V=!1,Se=!1;if(E){let be=B.get(E);if(be.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(F.FRAMEBUFFER,be.__webglFramebuffer),K.copy(E.viewport),ae.copy(E.scissor),Be=E.scissorTest,R.viewport(K),R.scissor(ae),R.setScissorTest(Be),ge=-1;return}else if(be.__webglFramebuffer===void 0)Z.setupRenderTarget(E);else if(be.__hasExternalTextures)Z.rebindTextures(E,B.get(E.texture).__webglTexture,B.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Je=E.depthTexture;if(be.__boundDepthTexture!==Je){if(Je!==null&&B.has(Je)&&(E.width!==Je.image.width||E.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(E)}}let Le=E.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Se=!0);let Oe=B.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[H])?W=Oe[H][$]:W=Oe[H],V=!0):E.samples>0&&Z.useMultisampledRTT(E)===!1?W=B.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?W=Oe[$]:W=Oe,K.copy(E.viewport),ae.copy(E.scissor),Be=E.scissorTest}else K.copy(qe).multiplyScalar(de).floor(),ae.copy(ye).multiplyScalar(de).floor(),Be=it;if($!==0&&(W=N),R.bindFramebuffer(F.FRAMEBUFFER,W)&&R.drawBuffers(E,W),R.viewport(K),R.scissor(ae),R.setScissorTest(Be),V){let be=B.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,be.__webglTexture,$)}else if(Se){let be=H;for(let Le=0;Le<E.textures.length;Le++){let Oe=B.get(E.textures[Le]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Le,Oe.__webglTexture,$,be)}}else if(E!==null&&$!==0){let be=B.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,be.__webglTexture,$)}ge=-1};function ns(E){let H=B.get(E);return(H.__readFormat!==E.format||H.__readType!==E.type)&&(H.__readFormat=E.format,H.__readType=E.type,H.__formatReadable=rt.textureFormatReadable(E.format),H.__typeReadable=rt.textureTypeReadable(E.type)),H}this.readRenderTargetPixels=function(E,H,$,W,V,Se,be,Le=0){if(!(E&&E.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=B.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Oe=Oe[be]),Oe){R.bindFramebuffer(F.FRAMEBUFFER,Oe);try{let Je=E.textures[Le],dt=Je.format,vt=Je.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Le);let Ve=ns(Je);if(Ve.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-W&&$>=0&&$<=E.height-V&&F.readPixels(H,$,W,V,ce.convert(dt),ce.convert(vt),Se)}finally{let Je=X!==null?B.get(X).__webglFramebuffer:null;R.bindFramebuffer(F.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(E,H,$,W,V,Se,be,Le=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=B.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Oe=Oe[be]),Oe)if(H>=0&&H<=E.width-W&&$>=0&&$<=E.height-V){R.bindFramebuffer(F.FRAMEBUFFER,Oe);let Je=E.textures[Le],dt=Je.format,vt=Je.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Le);let Ve=ns(Je);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,bt),F.bufferData(F.PIXEL_PACK_BUFFER,Se.byteLength,F.STREAM_READ),F.readPixels(H,$,W,V,ce.convert(dt),ce.convert(vt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Dt=X!==null?B.get(X).__webglFramebuffer:null;R.bindFramebuffer(F.FRAMEBUFFER,Dt);let Et=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Vf(F,Et,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,bt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Se),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(bt),F.deleteSync(Et),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,$=0){let W=Math.pow(2,-$),V=Math.floor(E.image.width*W),Se=Math.floor(E.image.height*W),be=H!==null?H.x:0,Le=H!==null?H.y:0;Z.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,be,Le,V,Se),R.unbindTexture()},this.copyTextureToTexture=function(E,H,$=null,W=null,V=0,Se=0){let be,Le,Oe,Je,dt,vt,Ve,bt,Dt,Et=E.isCompressedTexture?E.mipmaps[Se]:E.image;if($!==null)be=$.max.x-$.min.x,Le=$.max.y-$.min.y,Oe=$.isBox3?$.max.z-$.min.z:1,Je=$.min.x,dt=$.min.y,vt=$.isBox3?$.min.z:0;else{let ie=Math.pow(2,-V);be=Math.floor(Et.width*ie),Le=Math.floor(Et.height*ie),E.isDataArrayTexture?Oe=Et.depth:E.isData3DTexture?Oe=Math.floor(Et.depth*ie):Oe=1,Je=0,dt=0,vt=0}W!==null?(Ve=W.x,bt=W.y,Dt=W.z):(Ve=0,bt=0,Dt=0);let wt=ce.convert(H.format),Ct=ce.convert(H.type),Fe;H.isData3DTexture?(Z.setTexture3D(H,0),Fe=F.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Z.setTexture2DArray(H,0),Fe=F.TEXTURE_2D_ARRAY):(Z.setTexture2D(H,0),Fe=F.TEXTURE_2D),R.activeTexture(F.TEXTURE0),R.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),R.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),R.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);let Ut=R.getParameter(F.UNPACK_ROW_LENGTH),Vi=R.getParameter(F.UNPACK_IMAGE_HEIGHT),xi=R.getParameter(F.UNPACK_SKIP_PIXELS),bi=R.getParameter(F.UNPACK_SKIP_ROWS),Ii=R.getParameter(F.UNPACK_SKIP_IMAGES);R.pixelStorei(F.UNPACK_ROW_LENGTH,Et.width),R.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Et.height),R.pixelStorei(F.UNPACK_SKIP_PIXELS,Je),R.pixelStorei(F.UNPACK_SKIP_ROWS,dt),R.pixelStorei(F.UNPACK_SKIP_IMAGES,vt);let pr=E.isDataArrayTexture||E.isData3DTexture,J=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){let ie=B.get(E),Xe=B.get(H),He=B.get(ie.__renderTarget),lt=B.get(Xe.__renderTarget);R.bindFramebuffer(F.READ_FRAMEBUFFER,He.__webglFramebuffer),R.bindFramebuffer(F.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let Ot=0;Ot<Oe;Ot++)pr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,B.get(E).__webglTexture,V,vt+Ot),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,B.get(H).__webglTexture,Se,Dt+Ot)),F.blitFramebuffer(Je,dt,be,Le,Ve,bt,be,Le,F.DEPTH_BUFFER_BIT,F.NEAREST);R.bindFramebuffer(F.READ_FRAMEBUFFER,null),R.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||B.has(E)){let ie=B.get(E),Xe=B.get(H);R.bindFramebuffer(F.READ_FRAMEBUFFER,q),R.bindFramebuffer(F.DRAW_FRAMEBUFFER,U);for(let He=0;He<Oe;He++)pr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ie.__webglTexture,V,vt+He):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ie.__webglTexture,V),J?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xe.__webglTexture,Se,Dt+He):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Xe.__webglTexture,Se),V!==0?F.blitFramebuffer(Je,dt,be,Le,Ve,bt,be,Le,F.COLOR_BUFFER_BIT,F.NEAREST):J?F.copyTexSubImage3D(Fe,Se,Ve,bt,Dt+He,Je,dt,be,Le):F.copyTexSubImage2D(Fe,Se,Ve,bt,Je,dt,be,Le);R.bindFramebuffer(F.READ_FRAMEBUFFER,null),R.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else J?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Fe,Se,Ve,bt,Dt,be,Le,Oe,wt,Ct,Et.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(Fe,Se,Ve,bt,Dt,be,Le,Oe,wt,Et.data):F.texSubImage3D(Fe,Se,Ve,bt,Dt,be,Le,Oe,wt,Ct,Et):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Se,Ve,bt,be,Le,wt,Ct,Et.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Se,Ve,bt,Et.width,Et.height,wt,Et.data):F.texSubImage2D(F.TEXTURE_2D,Se,Ve,bt,be,Le,wt,Ct,Et);R.pixelStorei(F.UNPACK_ROW_LENGTH,Ut),R.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Vi),R.pixelStorei(F.UNPACK_SKIP_PIXELS,xi),R.pixelStorei(F.UNPACK_SKIP_ROWS,bi),R.pixelStorei(F.UNPACK_SKIP_IMAGES,Ii),Se===0&&H.generateMipmaps&&F.generateMipmap(Fe),R.unbindTexture()},this.initRenderTarget=function(E){B.get(E).__webglFramebuffer===void 0&&Z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),R.unbindTexture()},this.resetState=function(){G=0,Q=0,X=null,R.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var VM=new I;var cn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ri=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},n1=new oa(-1,1,1,-1,0,1),Bh=class extends xt{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}},s1=new Bh,zr=class{constructor(t){this._mesh=new mt(s1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,n1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var vo=class extends Ri{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof Bt?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Qi.clone(t.uniforms),this.material=new Bt({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new zr(this.material)}render(t,i,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var $n=class extends Ri{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,r){let a=t.getContext(),n=t.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),n.buffers.stencil.setFunc(a.ALWAYS,s,4294967295),n.buffers.stencil.setClear(o),n.buffers.stencil.setLocked(!0),t.setRenderTarget(r),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(a.EQUAL,1,4294967295),n.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),n.buffers.stencil.setLocked(!0)}},xo=class extends Ri{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var yo=class{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){let r=t.getSize(new he);this._width=r.width,this._height=r.height,i=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ei}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vo(cn),this.copyPass.material.blending=Ji,this.timer=new gp}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let i=this.renderer.getRenderTarget(),r=!1;for(let a=0,n=this.passes.length;a<n;a++){let s=this.passes[a];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),s.render(this.renderer,this.writeBuffer,this.readBuffer,t,r),s.needsSwap){if(r){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}$n!==void 0&&(s instanceof $n?r=!0:s instanceof xo&&(r=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){let i=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;let r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(r,a)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Mo=class extends Ri{constructor(t,i,r=null,a=null,n=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=r,this.clearColor=a,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new we}render(t,i,r){let a=t.autoClear;t.autoClear=!1;let n,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(n=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(n),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),t.autoClear=a}};var wp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new we(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var un=class e extends Ri{constructor(t,i=1,r,a){super(),this.strength=i,this.radius=r,this.threshold=a,this.resolution=t!==void 0?new he(t.x,t.y):new he(256,256),this.clearColor=new we(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(n,s,{type:ei,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let d=new Zt(n,s,{type:ei,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+c,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Zt(n,s,{type:ei,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),n=Math.round(n/2),s=Math.round(s/2)}let o=wp;this.highPassUniforms=Qi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new he(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Qi.clone(cn.uniforms),this.blendMaterial=new Bt({uniforms:this.copyUniforms,vertexShader:cn.vertexShader,fragmentShader:cn.fragmentShader,premultipliedAlpha:!0,blending:ja,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new we,this._oldClearAlpha=1,this._basic=new ni,this._fsQuad=new zr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let r=Math.round(t/2),a=Math.round(i/2);this.renderTargetBright.setSize(r,a);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(r,a),this.renderTargetsVertical[n].setSize(r,a),this.separableBlurMaterials[n].uniforms.invSize.value=new he(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2)}render(t,i,r,a,n){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let s=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),n&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=s}_getSeparableBlurMaterial(t){let i=[],r=t/3;for(let s=0;s<t;s++)i.push(.39894*Math.exp(-.5*s*s/(r*r))/r);let a=[],n=[];for(let s=1;s<t;s+=2){let o=i[s],l=s+1<t?i[s+1]:0,h=o+l;a.push((s*o+(s+1)*l)/h),n.push(h)}return new Bt({defines:{KERNEL_PAIRS:a.length},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},centerWeight:{value:i[0]},gaussianOffsets:{value:a},gaussianWeights:{value:n}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Bt({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};un.BlurDirectionX=new he(1,0);un.BlurDirectionY=new he(0,1);var Qn={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var So=class extends Ri{constructor(){super(),this.isOutputPass=!0,this.uniforms=Qi.clone(Qn.uniforms),this.material=new Ph({name:Qn.name,uniforms:this.uniforms,vertexShader:Qn.vertexShader,fragmentShader:Qn.fragmentShader}),this._fsQuad=new zr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===Tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===to?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===io?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ro?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===tn?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===no?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===so?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ao&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Vt={giza:{x:-84,z:-12,biome:"desert",lat:"29.98\xB0N",lon:"31.13\xB0E"},cairo:{x:-58,z:-32,biome:"desert",lat:"30.03\xB0N",lon:"31.26\xB0E"},luxor:{x:-54,z:26,biome:"desert",lat:"25.69\xB0N",lon:"32.64\xB0E"},qinggan:{x:-26,z:-50,biome:"danxia",lat:"40.09\xB0N",lon:"94.67\xB0E"},yunnan:{x:-4,z:30,biome:"meadow",lat:"27.83\xB0N",lon:"99.71\xB0E"},beijing:{x:26,z:-38,biome:"autumn",lat:"39.92\xB0N",lon:"116.39\xB0E"},nanjing:{x:50,z:0,biome:"plane",lat:"32.06\xB0N",lon:"118.80\xB0E"},shanghai:{x:84,z:26,biome:"coast",lat:"31.24\xB0N",lon:"121.50\xB0E"},road:{x:38,z:44,biome:"field",lat:"\u2014",lon:"\u2014"}},Hr={x:8,z:4},es=e=>-70-Math.sin(e*.06)*4,Hh=e=>6+Math.sin(e*.08)*3,o1=[[-30,4,13,9],[-22,-6,11,8],[-36,16,12,9],[-16,-16,9,7],[-40,30,10,8],[-18,54,13,9],[0,62,15,10],[16,58,11,8],[-64,-58,8,9],[62,-62,9,10],[60,-32,6,8]],si=(e,t,i)=>{let r=Math.min(1,Math.max(0,(i-e)/(t-e)));return r*r*(3-2*r)};function bo(e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453;return i-Math.floor(i)}function zh(e,t){let i=Math.floor(e),r=Math.floor(t),a=e-i,n=t-r,s=a*a*(3-2*a),o=n*n*(3-2*n),l=bo(i,r),h=bo(i+1,r),c=bo(i,r+1),d=bo(i+1,r+1);return l+(h-l)*s+(c-l)*o+(l-h-c+d)*s*o}var Er=(e,t)=>zh(e,t)*.55+zh(e*2.1,t*2.1)*.3+zh(e*4.3,t*4.3)*.15;function wr(e,t){let i={},r=0;for(let a in Vt){let n=Vt[a],s=(e-n.x)**2+(t-n.z)**2,o=Math.exp(-s/676);i[n.biome]=(i[n.biome]||0)+o,r+=o}for(let a in i)i[a]/=r||1;return i}function la(e,t){let i=null,r=1/0;for(let a in Vt){let n=Vt[a],s=Math.hypot(e-n.x,t-n.z);s<r&&(r=s,i=a)}return{key:i,d:r}}var ts=(e,t)=>Math.pow(Math.pow(Math.abs(e)/112,4)+Math.pow(Math.abs(t)/72,4),.25),l1=[[[8,4],[4,16],[-4,30]],[[-4,30],[-18,42],[-30,46],[-44,38],[-54,26]],[[-54,26],[-62,18],[-72,8],[-80,-2],[-84,-12]],[[-84,-12],[-74,-24],[-58,-32]],[[-58,-32],[-44,-42],[-26,-50]],[[-26,-50],[-12,-36],[-6,-24],[2,-8],[8,4]],[[8,4],[18,-14],[26,-38]],[[8,4],[28,2],[50,0]],[[26,-38],[40,-26],[50,-18],[50,0]],[[50,0],[64,18],[84,26]],[[50,0],[46,22],[38,44]],[[38,44],[16,40],[-4,30]]];function h1(e,t,i,r,a,n){let s=a-i,o=n-r,l=Math.max(0,Math.min(1,((e-i)*s+(t-r)*o)/(s*s+o*o)));return Math.hypot(e-i-s*l,t-r-o*l)}function c1(e,t){let i=1/0;for(let r of l1)for(let a=0;a<r.length-1;a++)i=Math.min(i,h1(e,t,r[a][0],r[a][1],r[a+1][0],r[a+1][1]));return i}var kh=[];function u1(e,t){let i=.15+(Er(e*.05,t*.05)-.5)*.7,r=wr(e,t),a=.5+.5*Math.sin(e*.18+Math.sin(t*.11)*2);i+=((r.desert||0)*.9+(r.danxia||0)*1.2)*(a*a*1.1+Er(e*.09,t*.09)*.9);for(let[l,h,c,d]of o1){let u=(e-l)**2+(t-h)**2;i+=c*Math.exp(-u/(d*d))*(.85+.3*Er(e*.2,t*.2))}let n=Math.abs(e-es(t));i-=1.3*(1-si(2.4,4.8,n))*(1-si(60,70,Math.abs(t))),i-=1.4*(1-si(5,11,Math.hypot(e-14,t-38))),i-=1.2*(1-si(2.5,5,Math.hypot((e+6)*.6,t+52))),e>66&&(i-=1.4*(1-si(2.6,5,Math.abs(t-Hh(e))))*si(66,72,e));for(let l in Vt){let h=Vt[l],c=Math.hypot(e-h.x,t-h.z),d=si(6.5,12,c);i=i*d+.12*(1-d)}for(let[l,h,c,d]of kh){let u=Math.hypot(e-l,t-h),p=si(c,c+4,u);i=i*p+d*(1-p)}let s=Math.hypot(e-Hr.x,t-Hr.z),o=si(7,13,s);return i=i*o+.12*(1-o),i-=1.75*si(.86,1.02,ts(e,t)),i}function Ap(){let e=new Float32Array(38801);for(let s=0;s<=160;s++)for(let o=0;o<=240;o++)e[s*241+o]=u1(-120+o*1,-80+s*1);let t=(s,o)=>e[Math.min(160,Math.max(0,o))*241+Math.min(240,Math.max(0,s))],i=(s,o)=>{let l=(s- -120)/1,h=(o- -80)/1,c=Math.floor(l),d=Math.floor(h),u=l-c,p=h-d;return t(c,d)*(1-u)*(1-p)+t(c+1,d)*u*(1-p)+t(c,d+1)*(1-u)*p+t(c+1,d+1)*u*p},r=new Float32Array((240/2+1)*(160/2+1));for(let s=0;s<=160/2;s++)for(let o=0;o<=240/2;o++)r[s*(240/2+1)+o]=c1(-120+o*2,-80+s*2);return{H:e,at:t,sample:i,slope:(s,o)=>Math.hypot(i(s+1,o)-i(s-1,o),i(s,o+1)-i(s,o-1))/2,road:(s,o)=>{let l=Math.round((s- -120)/2),h=Math.round((o- -80)/2);return r[Math.min(160/2,Math.max(0,h))*(240/2+1)+Math.min(240/2,Math.max(0,l))]}}}var di={half:{x:1.05,y:.34,z:.66},wheel:{x:.78,y:-.08,z:.7,r:.42,rest:.34},mass:1,com:{x:0,y:-.8,z:0},engine:7.5,reverse:4.2,brake:.55,idleBrake:.025,handbrake:.9,top:13,topReverse:6,steer:.55,steerFast:.24};function Rp(e,t){let i=new e.World({x:0,y:-18,z:0});i.timestep=1/60;let r=new Float32Array(38801);for(let y=0;y<=240;y++)for(let g=0;g<=160;g++)r[y*161+g]=t.at(y,g);let a=i.createRigidBody(e.RigidBodyDesc.fixed().setTranslation(-120+240/2,0,-80+160/2));i.createCollider(e.ColliderDesc.heightfield(160,240,r,{x:240,y:1,z:160}).setFriction(.9),a);let n=i.createRigidBody(e.RigidBodyDesc.fixed()),s=y=>({x:0,y:Math.sin(y/2),z:0,w:Math.cos(y/2)}),o={box(y,g,S,w,A,v,T=0){return i.createCollider(e.ColliderDesc.cuboid(w,A,v).setTranslation(y,g,S).setRotation(s(T)).setFriction(.5),n)},cyl(y,g,S,w,A){return i.createCollider(e.ColliderDesc.cylinder(w,A).setTranslation(y,g,S).setFriction(.5),n)},ball(y,g,S,w){return i.createCollider(e.ColliderDesc.ball(w).setTranslation(y,g,S),n)},hull(y,g,S,w,A=0){let v=e.ColliderDesc.convexHull(new Float32Array(y));return v&&i.createCollider(v.setTranslation(g,S,w).setRotation(s(A)).setFriction(.5),n)}},l=[];function h(y,{x:g,y:S,z:w,ry:A=0,mass:v=1,friction:T=.6,restitution:O=.15,ccd:L=!1,sleep:N=!0,linDamp:q=.1,angDamp:U=.3}){var X;let G=i.createRigidBody(e.RigidBodyDesc.dynamic().setTranslation(g,S,w).setRotation(s(A)).setCanSleep(N).setCcdEnabled(L).setLinearDamping(q).setAngularDamping(U)),Q;return y.type==="box"?Q=e.ColliderDesc.cuboid(y.hx,y.hy,y.hz):y.type==="cyl"?Q=e.ColliderDesc.cylinder(y.hh,y.r):y.type==="roundcyl"?Q=e.ColliderDesc.roundCylinder(y.hh,y.r,(X=y.b)!=null?X:.05):y.type==="cone"?Q=e.ColliderDesc.cone(y.hh,y.r):Q=e.ColliderDesc.ball(y.r),y.rot&&Q.setRotation(y.rot),Q.setMass(v).setFriction(T).setRestitution(O),i.createCollider(Q,G),G.sleep(),l.push(G),G}let c=i.createRigidBody(e.RigidBodyDesc.dynamic().setTranslation(0,3,0).setCanSleep(!1).setCcdEnabled(!0).setAngularDamping(1.2).setLinearDamping(.05)),d=di.half;i.createCollider(e.ColliderDesc.cuboid(d.x,d.y,d.z).setMassProperties(di.mass,di.com,{x:.3,y:.45,z:.32},{x:0,y:0,z:0,w:1}).setFriction(.3).setRestitution(.1),c),i.createCollider(e.ColliderDesc.cuboid(.62,.26,.6).setTranslation(-.12,.58,0).setMass(0).setFriction(.3),c);let u=i.createVehicleController(c),p=di.wheel;[[p.x,p.y,p.z],[p.x,p.y,-p.z],[-p.x,p.y,p.z],[-p.x,p.y,-p.z]].forEach(([y,g,S],w)=>{u.addWheel({x:y,y:g,z:S},{x:0,y:-1,z:0},{x:0,y:0,z:1},p.rest,p.r),u.setWheelSuspensionStiffness(w,34),u.setWheelSuspensionCompression(w,3.2),u.setWheelSuspensionRelaxation(w,2.6),u.setWheelMaxSuspensionTravel(w,.32),u.setWheelMaxSuspensionForce(w,200),u.setWheelFrictionSlip(w,1.4),u.setWheelSideFrictionStiffness(w,1.6)});let _=y=>[y.x,y.y,y.z],x=(y,g)=>{let{x:S,y:w,z:A,w:v}=y,[T,O,L]=g,N=v*T+w*L-A*O,q=v*O+A*T-S*L,U=v*L+S*O-w*T,G=-S*T-w*O-A*L;return[N*v+G*-S+q*-A-U*-w,q*v+G*-w+U*-S-N*-A,U*v+G*-A+N*-w-q*-S]},m={body:c,vehicle:u,steer:0,upsideT:0,forward(){return x(c.rotation(),[1,0,0])},up(){return x(c.rotation(),[0,1,0])},speed(){let y=c.linvel(),g=m.forward();return y.x*g[0]+y.y*g[1]+y.z*g[2]},place(y,g,S,w){c.setTranslation({x:y,y:g,z:S},!0),c.setRotation(s(w),!0),c.setLinvel({x:0,y:0,z:0},!0),c.setAngvel({x:0,y:0,z:0},!0)},yaw(){let y=m.forward();return Math.atan2(-y[2],y[0])},drive(y,g){let S=m.speed(),w=Math.abs(S),A=0,v=di.idleBrake*(y.gas||y.brake?0:1);y.gas&&(A=S<di.top?di.engine:0),y.brake&&(S>.6?v=di.brake:A=S>-di.topReverse?-di.reverse:0),y.gas&&S<-.6&&(v=di.brake),y.hand&&(v=di.handbrake);let T=(y.left-y.right)*(di.steer+(di.steerFast-di.steer)*Math.min(1,w/di.top));m.steer+=(T-m.steer)*Math.min(1,g*10);for(let N=0;N<4;N++)u.setWheelEngineForce(N,A*(N<2?.45:.55)),u.setWheelBrake(N,y.hand&&N<2?v*.2:v),u.setWheelSteering(N,N<2?m.steer:0);u.setWheelSideFrictionStiffness(2,y.hand?.55:1.6),u.setWheelSideFrictionStiffness(3,y.hand?.55:1.6);let O=m.up(),L=Math.acos(Math.max(-1,Math.min(1,O[1])));if(L>.5){let N=[O[2],0,-O[0]],q=(L-.5)*.12;c.applyTorqueImpulse({x:N[0]*q,y:0,z:N[2]*q},!0)}if(m.upsideT=O[1]<.2?m.upsideT+g:0,m.upsideT>1.6){let N=c.translation();m.place(N.x,N.y+1.5,N.z,m.yaw()),m.upsideT=0}},wheels(){let y=[];for(let g=0;g<4;g++)y.push({contact:u.wheelIsInContact(g),steer:u.wheelSteering(g),rot:u.wheelRotation(g),susp:u.wheelSuspensionLength(g),point:u.wheelContactPoint(g),hard:u.wheelHardPoint(g)});return y}},f=0;function b(y){f+=Math.min(y,.1);let g=0;for(;f>=i.timestep&&g<4;)u.updateVehicle(i.timestep),i.step(),f-=i.timestep,g++;g===4&&(f=0)}return{R:e,world:i,statics:o,dynamic:h,dynamics:l,car:m,step:b,quatY:s,v3:_}}function Gh(e,t=!1){let i=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),n={},s={},o=e[0].morphTargetsRelative,l=new xt,h=0;for(let c=0;c<e.length;++c){let d=e[c],u=0;if(i!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;n[p]===void 0&&(n[p]=[]),n[p].push(d.attributes[p]),u++}if(u!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!a.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.morphAttributes[p])}if(t){let p;if(i)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,c),h+=p}}if(i){let c=0,d=[];for(let u=0;u<e.length;++u){let p=e[u].index;for(let _=0;_<p.count;++_)d.push(p.getX(_)+c);c+=e[u].attributes.position.count}l.setIndex(d)}for(let c in n){let d=Cp(n[c]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,d)}for(let c in s){let d=s[c][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let u=0;u<d;++u){let p=[];for(let x=0;x<s[c].length;++x)p.push(s[c][x][u]);let _=Cp(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(_)}}}return l}function Cp(e){let t,i,r,a=-1,n=0;for(let h=0;h<e.length;++h){let c=e[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=c.itemSize),i!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=c.normalized),r!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=c.gpuType),a!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=c.count*i}let s=new t(n),o=new Nt(s,i,r),l=0;for(let h=0;h<e.length;++h){let c=e[h];if(c.isInterleavedBufferAttribute){let d=l/i;for(let u=0,p=c.count;u<p;u++)for(let _=0;_<i;_++){let x=c.getComponent(u,_);o.setComponent(u+d,_,x)}}else s.set(c.array,l);l+=c.count*i}return a!==void 0&&(o.gpuType=a),o}function Vh(e,t){if(t===ld)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===Xn||t===lo){let i=e.getIndex();if(i===null){let n=[],s=e.getAttribute("position");if(s!==void 0){for(let o=0;o<s.count;o++)n.push(o);e.setIndex(n),i=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let r=i.count-2,a=[];if(t===Xn)for(let n=1;n<=r;n++)a.push(i.getX(0)),a.push(i.getX(n)),a.push(i.getX(n+1));else for(let n=0;n<r;n++)n%2===0?(a.push(i.getX(n)),a.push(i.getX(n+1)),a.push(i.getX(n+2))):(a.push(i.getX(n+2)),a.push(i.getX(n+1)),a.push(i.getX(n)));return a.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),e.setIndex(a),e.clearGroups(),e}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function Ip(e){let t=new Map,i=new Map,r=e.clone();return Pp(e,r,function(a,n){t.set(n,a),i.set(a,n)}),r.traverse(function(a){if(!a.isSkinnedMesh)return;let n=a,s=t.get(a),o=s.skeleton.bones;n.skeleton=s.skeleton.clone(),n.bindMatrix.copy(s.bindMatrix),n.skeleton.bones=o.map(function(l){return i.get(l)}),n.bind(n.skeleton,n.bindMatrix)}),r}function Pp(e,t,i){i(e,t);for(let r=0;r<e.children.length;r++)Pp(e.children[r],t.children[r],i)}var To=class extends sa{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(i){return new Kh(i)}),this.register(function(i){return new Jh(i)}),this.register(function(i){return new sc(i)}),this.register(function(i){return new oc(i)}),this.register(function(i){return new lc(i)}),this.register(function(i){return new Qh(i)}),this.register(function(i){return new ec(i)}),this.register(function(i){return new tc(i)}),this.register(function(i){return new ic(i)}),this.register(function(i){return new Zh(i)}),this.register(function(i){return new rc(i)}),this.register(function(i){return new $h(i)}),this.register(function(i){return new nc(i)}),this.register(function(i){return new ac(i)}),this.register(function(i){return new qh(i)}),this.register(function(i){return new Eo(i,gt.EXT_MESHOPT_COMPRESSION)}),this.register(function(i){return new Eo(i,gt.KHR_MESHOPT_COMPRESSION)}),this.register(function(i){return new hc(i)})}load(t,i,r,a){let n=this,s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){let h=ln.extractUrlBase(t);s=ln.resolveURL(h,this.path)}else s=ln.extractUrlBase(t);this.manager.itemStart(t);let o=function(h){a?a(h):console.error(h),n.manager.itemError(t),n.manager.itemEnd(t)},l=new Nh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(h){try{n.parse(h,s,function(c){i(c),n.manager.itemEnd(t)},o)}catch(c){o(c)}},r,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,i,r,a){let n,s={},o={},l=new TextDecoder;if(typeof t=="string")n=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Op){try{s[gt.KHR_BINARY_GLTF]=new cc(t)}catch(d){a&&a(d);return}n=JSON.parse(s[gt.KHR_BINARY_GLTF].content)}else n=JSON.parse(l.decode(t));else n=t;if(n.asset===void 0||n.asset.version[0]<2){a&&a(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let h=new _c(n,{path:i||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){let d=this.pluginCallbacks[c](h);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,s[d.name]=!0}if(n.extensionsUsed)for(let c=0;c<n.extensionsUsed.length;++c){let d=n.extensionsUsed[c],u=n.extensionsRequired||[];switch(d){case gt.KHR_MATERIALS_UNLIT:s[d]=new Yh;break;case gt.KHR_DRACO_MESH_COMPRESSION:s[d]=new uc(n,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:s[d]=new dc;break;case gt.KHR_MESH_QUANTIZATION:s[d]=new pc;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}h.setExtensions(s),h.setPlugins(o),h.parse(r,a)}parseAsync(t,i){let r=this;return new Promise(function(a,n){r.parse(t,i,a,n)})}};function d1(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function Wt(e,t,i){let r=e.json.materials[t];return r.extensions&&r.extensions[i]?r.extensions[i]:null}var gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},qh=class{constructor(t){this.parser=t,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,i=this.parser.json.nodes||[];for(let r=0,a=i.length;r<a;r++){let n=i[r];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(t){let i=this.parser,r="light:"+t,a=i.cache.get(r);if(a)return a;let n=i.json,l=((n.extensions&&n.extensions[this.name]||{}).lights||[])[t],h,c=new we(16777215);l.color!==void 0&&c.setRGB(l.color[0],l.color[1],l.color[2],Si);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new Jn(c),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new fp(c),h.distance=d;break;case"spot":h=new fo(c),h.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),dr(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=i.createUniqueName(l.name||"light_"+t),a=Promise.resolve(h),i.cache.add(r,a),a}getDependency(t,i){if(t==="light")return this._loadLight(i)}createNodeAttachment(t){let i=this,r=this.parser,n=r.json.nodes[t],o=(n.extensions&&n.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return r._getNodeRef(i.cache,o,l)})}},Yh=class{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return ni}extendParams(t,i,r){let a=[];t.color=new we(1,1,1),t.opacity=1;let n=i.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){let s=n.baseColorFactor;t.color.setRGB(s[0],s[1],s[2],Si),t.opacity=s[3]}n.baseColorTexture!==void 0&&a.push(r.assignTexture(t,"map",n.baseColorTexture,Lt))}return Promise.all(a)}},Zh=class{constructor(t){this.parser=t,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,i){let r=Wt(this.parser,t,this.name);return r===null||r.emissiveStrength!==void 0&&(i.emissiveIntensity=r.emissiveStrength),Promise.resolve()}},Kh=class{constructor(t){this.parser=t,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Wt(this.parser,t,this.name)!==null?er:null}extendMaterialParams(t,i){let r=Wt(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];if(r.clearcoatFactor!==void 0&&(i.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&a.push(this.parser.assignTexture(i,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(i.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&a.push(this.parser.assignTexture(i,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(a.push(this.parser.assignTexture(i,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){let n=r.clearcoatNormalTexture.scale;i.clearcoatNormalScale=new he(n,n)}return Promise.all(a)}},Jh=class{constructor(t){this.parser=t,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Wt(this.parser,t,this.name)!==null?er:null}extendMaterialParams(t,i){let r=Wt(this.parser,t,this.name);return r===null||(i.dispersion=r.dispersion!==void 0?r.dispersion:0),Promise.resolve()}},$h=class{constructor(t){this.parser=t,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Wt(this.parser,t,this.name)!==null?er:null}extendMaterialParams(t,i){let r=Wt(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];return r.iridescenceFactor!==void 0&&(i.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&a.push(this.parser.assignTexture(i,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(i.iridescenceIOR=r.iridescenceIor),i.iridescenceThicknessRange===void 0&&(i.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&a.push(this.parser.assignTexture(i,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(a)}},Qh=class{constructor(t){this.parser=t,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(t){return Wt(this.parser,t,this.name)!==null?er:null}extendMaterialParams(t,i){let r=Wt(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];if(i.sheenColor=new we(0,0,0),i.sheenRoughness=0,i.sheen=1,r.sheenColorFactor!==void 0){let n=r.sheenColorFactor;i.sheenColor.setRGB(n[0],n[1],n[2],Si)}return r.sheenRoughnessFactor!==void 0&&(i.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&a.push(this.parser.assignTexture(i,"sheenColorMap",r.sheenColorTexture,Lt)),r.sheenRoughnessTexture!==void 0&&a.push(this.parser.assignTexture(i,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(a)}},ec=class{constructor(t){this.parser=t,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Wt(this.parser,t,this.name)!==null?er:null}extendMaterialParams(t,i){let r=Wt(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];return r.transmissionFactor!==void 0&&(i.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&a.push(this.parser.assignTexture(i,"transmissionMap",r.transmissionTexture)),Promise.all(a)}},tc=class{constructor(t){this.parser=t,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(t){return Wt(this.parser,t,this.name)!==null?er:null}extendMaterialParams(t,i){let r=Wt(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];i.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&a.push(this.parser.assignTexture(i,"thicknessMap",r.thicknessTexture)),i.attenuationDistance=r.attenuationDistance||1/0;let n=r.attenuationColor||[1,1,1];return i.attenuationColor=new we().setRGB(n[0],n[1],n[2],Si),Promise.all(a)}},ic=class{constructor(t){this.parser=t,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(t){return Wt(this.parser,t,this.name)!==null?er:null}extendMaterialParams(t,i){let r=Wt(this.parser,t,this.name);return r===null||(i.ior=r.ior!==void 0?r.ior:1.5,i.ior===0&&(i.ior=1e3)),Promise.resolve()}},rc=class{constructor(t){this.parser=t,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Wt(this.parser,t,this.name)!==null?er:null}extendMaterialParams(t,i){let r=Wt(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];i.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&a.push(this.parser.assignTexture(i,"specularIntensityMap",r.specularTexture));let n=r.specularColorFactor||[1,1,1];return i.specularColor=new we().setRGB(n[0],n[1],n[2],Si),r.specularColorTexture!==void 0&&a.push(this.parser.assignTexture(i,"specularColorMap",r.specularColorTexture,Lt)),Promise.all(a)}},ac=class{constructor(t){this.parser=t,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(t){return Wt(this.parser,t,this.name)!==null?er:null}extendMaterialParams(t,i){let r=Wt(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];return i.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&a.push(this.parser.assignTexture(i,"bumpMap",r.bumpTexture)),Promise.all(a)}},nc=class{constructor(t){this.parser=t,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Wt(this.parser,t,this.name)!==null?er:null}extendMaterialParams(t,i){let r=Wt(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];return r.anisotropyStrength!==void 0&&(i.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(i.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&a.push(this.parser.assignTexture(i,"anisotropyMap",r.anisotropyTexture)),Promise.all(a)}},sc=class{constructor(t){this.parser=t,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(t){let i=this.parser,r=i.json,a=r.textures[t];if(!a.extensions||!a.extensions[this.name])return null;let n=a.extensions[this.name],s=i.options.ktx2Loader;if(!s){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return i.loadTextureImage(t,n.source,s)}},oc=class{constructor(t){this.parser=t,this.name=gt.EXT_TEXTURE_WEBP}loadTexture(t){let i=this.name,r=this.parser,a=r.json,n=a.textures[t];if(!n.extensions||!n.extensions[i])return null;let s=n.extensions[i],o=a.images[s.source],l=r.textureLoader;if(o.uri){let h=r.options.manager.getHandler(o.uri);h!==null&&(l=h)}return r.loadTextureImage(t,s.source,l)}},lc=class{constructor(t){this.parser=t,this.name=gt.EXT_TEXTURE_AVIF}loadTexture(t){let i=this.name,r=this.parser,a=r.json,n=a.textures[t];if(!n.extensions||!n.extensions[i])return null;let s=n.extensions[i],o=a.images[s.source],l=r.textureLoader;if(o.uri){let h=r.options.manager.getHandler(o.uri);h!==null&&(l=h)}return r.loadTextureImage(t,s.source,l)}},Eo=class{constructor(t,i){this.name=i,this.parser=t}loadBufferView(t){let i=this.parser.json,r=i.bufferViews[t];if(r.extensions&&r.extensions[this.name]){let a=r.extensions[this.name],n=this.parser.getDependency("buffer",a.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return n.then(function(o){let l=a.byteOffset||0,h=a.byteLength||0,c=a.count,d=a.byteStride,u=new Uint8Array(o,l,h);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(c,d,u,a.mode,a.filter).then(function(p){return p.buffer}):s.ready.then(function(){let p=new ArrayBuffer(c*d);return s.decodeGltfBuffer(new Uint8Array(p),c,d,u,a.mode,a.filter),p})})}else return null}},hc=class{constructor(t){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let i=this.parser.json,r=i.nodes[t];if(!r.extensions||!r.extensions[this.name]||r.mesh===void 0)return null;let a=i.meshes[r.mesh];for(let h of a.primitives)if(h.mode!==Bi.TRIANGLES&&h.mode!==Bi.TRIANGLE_STRIP&&h.mode!==Bi.TRIANGLE_FAN&&h.mode!==void 0)return null;let s=r.extensions[this.name].attributes,o=[],l={};for(let h in s)o.push(this.parser.getDependency("accessor",s[h]).then(c=>(l[h]=c,l[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(h=>{let c=h.pop(),d=c.isGroup?c.children:[c],u=h[0].count,p=[];for(let _ of d){let x=new Ye,m=new I,f=new kt,b=new I(1,1,1),y=new Fi(_.geometry,_.material,u);for(let S=0;S<u;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,S),l.SCALE&&b.fromBufferAttribute(l.SCALE,S),y.setMatrixAt(S,x.compose(m,f,b));let g=null;for(let S in l)if(S==="_COLOR_0"){let w=l[S];y.instanceColor=new Br(w.array,w.itemSize,w.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(g===null){let A=y.geometry;g=new xt,g.name=A.name;for(let v in A.attributes)g.setAttribute(v,A.attributes[v]);for(let v in A.morphAttributes)g.morphAttributes[v]=A.morphAttributes[v];A.index!==null&&g.setIndex(A.index),g.morphTargetsRelative=A.morphTargetsRelative;for(let v of A.groups)g.addGroup(v.start,v.count,v.materialIndex);A.boundingBox!==null&&(g.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(g.boundingSphere=A.boundingSphere.clone()),g.drawRange.start=A.drawRange.start,g.drawRange.count=A.drawRange.count,g.userData=Object.assign({},A.userData),y.geometry=g}let w=l[S];g.setAttribute(S,new Br(w.array,w.itemSize,w.normalized))}Gt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),p.push(y)}return c.isGroup?(c.clear(),c.add(...p),c):p[0]}))}},Op="glTF",is=12,Lp={JSON:1313821514,BIN:5130562},cc=class{constructor(t){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;let i=new DataView(t,0,is),r=new TextDecoder;if(this.header={magic:r.decode(new Uint8Array(t.slice(0,4))),version:i.getUint32(4,!0),length:i.getUint32(8,!0)},this.header.magic!==Op)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let a=this.header.length-is,n=new DataView(t,is),s=0;for(;s<a;){let o=n.getUint32(s,!0);s+=4;let l=n.getUint32(s,!0);if(s+=4,l===Lp.JSON){let h=new Uint8Array(t,is+s,o);this.content=r.decode(h)}else if(l===Lp.BIN){let h=is+s;this.body=t.slice(h,h+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},uc=class{constructor(t,i){if(!i)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=i,this.dracoLoader.preload()}decodePrimitive(t,i){let r=this.json,a=this.dracoLoader,n=t.extensions[this.name].bufferView,s=t.extensions[this.name].attributes,o={},l={},h={};for(let c in s){let d=mc[c]||c.toLowerCase();o[d]=s[c]}for(let c in t.attributes){let d=mc[c]||c.toLowerCase();if(s[c]!==void 0){let u=r.accessors[t.attributes[c]],p=dn[u.componentType];h[d]=p.name,l[d]=u.normalized===!0}}return i.getDependency("bufferView",n).then(function(c){return new Promise(function(d,u){a.decodeDracoFile(c,function(p){for(let _ in p.attributes){let x=p.attributes[_],m=l[_];m!==void 0&&(x.normalized=m)}d(p)},o,h,Si,u)})})}},dc=class{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(t,i){if((i.texCoord===void 0||i.texCoord===t.channel)&&i.offset===void 0&&i.rotation===void 0&&i.scale===void 0)return t;if(t=t.clone(),i.texCoord!==void 0&&(t.channel=i.texCoord),i.offset!==void 0&&t.offset.fromArray(i.offset),i.rotation!==void 0&&(t.rotation=i.rotation),i.scale!==void 0&&t.repeat.fromArray(i.scale),i.rotation!==void 0){let r=Math.cos(t.rotation),a=Math.sin(t.rotation);t.matrix.set(t.repeat.x*r,t.repeat.y*a,t.offset.x,-t.repeat.x*a,t.repeat.y*r,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}},pc=class{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}},wo=class extends aa{constructor(t,i,r,a){super(t,i,r,a)}copySampleValue_(t){let i=this.resultBuffer,r=this.sampleValues,a=this.valueSize,n=t*a*3+a;for(let s=0;s!==a;s++)i[s]=r[n+s];return i}interpolate_(t,i,r,a){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,h=o*3,c=a-i,d=(r-i)/c,u=d*d,p=u*d,_=t*h,x=_-h,m=-2*p+3*u,f=p-u,b=1-m,y=f-u+d;for(let g=0;g!==o;g++){let S=s[x+g+o],w=s[x+g+l]*c,A=s[_+g+o],v=s[_+g]*c;n[g]=b*S+y*w+m*A+f*v}return n}},p1=new kt,fc=class extends wo{interpolate_(t,i,r,a){let n=super.interpolate_(t,i,r,a);return p1.fromArray(n).normalize().toArray(n),n}},Bi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},dn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Np={9728:qt,9729:Ht,9984:lh,9985:In,9986:Ua,9987:or},Dp={33071:Zi,33648:On,10497:ea},Wh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},f1={CUBICSPLINE:void 0,LINEAR:Za,STEP:Ya},Xh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function m1(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new ti({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Sr})),e.DefaultMaterial}function da(e,t,i){for(let r in i.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=i.extensions[r])}function dr(e,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function g1(e,t,i){let r=!1,a=!1,n=!1;for(let h=0,c=t.length;h<c;h++){let d=t[h];if(d.POSITION!==void 0&&(r=!0),d.NORMAL!==void 0&&(a=!0),d.COLOR_0!==void 0&&(n=!0),r&&a&&n)break}if(!r&&!a&&!n)return Promise.resolve(e);let s=[],o=[],l=[];for(let h=0,c=t.length;h<c;h++){let d=t[h];if(r){let u=d.POSITION!==void 0?i.getDependency("accessor",d.POSITION):e.attributes.position;s.push(u)}if(a){let u=d.NORMAL!==void 0?i.getDependency("accessor",d.NORMAL):e.attributes.normal;o.push(u)}if(n){let u=d.COLOR_0!==void 0?i.getDependency("accessor",d.COLOR_0):e.attributes.color;l.push(u)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(h){let c=h[0],d=h[1],u=h[2];return r&&(e.morphAttributes.position=c),a&&(e.morphAttributes.normal=d),n&&(e.morphAttributes.color=u),e.morphTargetsRelative=!0,e})}function _1(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let i=0,r=t.weights.length;i<r;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++)e.morphTargetDictionary[i[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function v1(e){let t,i=e.extensions&&e.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(i?t="draco:"+i.bufferView+":"+i.indices+":"+jh(i.attributes):t=e.indices+":"+jh(e.attributes)+":"+e.mode,e.targets!==void 0)for(let r=0,a=e.targets.length;r<a;r++)t+=":"+jh(e.targets[r]);return t}function jh(e){let t="",i=Object.keys(e).sort();for(let r=0,a=i.length;r<a;r++)t+=i[r]+":"+e[i[r]]+";";return t}function gc(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function x1(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var y1=new Ye,_c=class{constructor(t={},i={}){this.json=t,this.extensions={},this.plugins={},this.options=i,this.cache=new d1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,a=-1,n=!1,s=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;r=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);a=r&&l?parseInt(l[1],10):-1,n=o.indexOf("Firefox")>-1,s=n?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||r&&a<17||n&&s<98?this.textureLoader=new uo(this.options.manager):this.textureLoader=new mp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,i){let r=this,a=this.json,n=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(s){let o={scene:s[0][a.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:a.asset,parser:r,userData:{}};return da(n,o,a),dr(o,a),Promise.all(r._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();t(o)})}).catch(i)}_markDefs(){let t=this.json.nodes||[],i=this.json.skins||[],r=this.json.meshes||[];for(let a=0,n=i.length;a<n;a++){let s=i[a].joints;for(let o=0,l=s.length;o<l;o++)t[s[o]].isBone=!0}for(let a=0,n=t.length;a<n;a++){let s=t[a];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(r[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(t,i){i!==void 0&&(t.refs[i]===void 0&&(t.refs[i]=t.uses[i]=0),t.refs[i]++)}_getNodeRef(t,i,r){if(t.refs[i]<=1)return r;let a=r.clone(),n=(s,o)=>{let l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(let[h,c]of s.children.entries())n(c,o.children[h])};return n(r,a),a.name+="_instance_"+t.uses[i]++,a}_invokeOne(t){let i=Object.values(this.plugins);i.push(this);for(let r=0;r<i.length;r++){let a=t(i[r]);if(a)return a}return null}_invokeAll(t){let i=Object.values(this.plugins);i.unshift(this);let r=[];for(let a=0;a<i.length;a++){let n=t(i[a]);n&&r.push(n)}return r}getDependency(t,i){let r=t+":"+i,a=this.cache.get(r);if(!a){switch(t){case"scene":a=this.loadScene(i);break;case"node":a=this._invokeOne(function(n){return n.loadNode&&n.loadNode(i)});break;case"mesh":a=this._invokeOne(function(n){return n.loadMesh&&n.loadMesh(i)});break;case"accessor":a=this.loadAccessor(i);break;case"bufferView":a=this._invokeOne(function(n){return n.loadBufferView&&n.loadBufferView(i)});break;case"buffer":a=this.loadBuffer(i);break;case"material":a=this._invokeOne(function(n){return n.loadMaterial&&n.loadMaterial(i)});break;case"texture":a=this._invokeOne(function(n){return n.loadTexture&&n.loadTexture(i)});break;case"skin":a=this.loadSkin(i);break;case"animation":a=this._invokeOne(function(n){return n.loadAnimation&&n.loadAnimation(i)});break;case"camera":a=this.loadCamera(i);break;default:if(a=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(t,i)}),!a)throw new Error("Unknown type: "+t);break}this.cache.add(r,a)}return a}getDependencies(t){let i=this.cache.get(t);if(!i){let r=this,a=this.json[t+(t==="mesh"?"es":"s")]||[];i=Promise.all(a.map(function(n,s){return r.getDependency(t,s)})),this.cache.add(t,i)}return i}loadBuffer(t){let i=this.json.buffers[t],r=this.fileLoader;if(i.type&&i.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+i.type+" buffer type is not supported.");if(i.uri===void 0&&t===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);let a=this.options;return new Promise(function(n,s){r.load(ln.resolveURL(i.uri,a.path),n,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+i.uri+'".'))})})}loadBufferView(t){let i=this.json.bufferViews[t];return this.getDependency("buffer",i.buffer).then(function(r){let a=i.byteLength||0,n=i.byteOffset||0;return r.slice(n,n+a)})}loadAccessor(t){let i=this,r=this.json,a=this.json.accessors[t];if(a.bufferView===void 0&&a.sparse===void 0){let s=Wh[a.type],o=dn[a.componentType],l=a.normalized===!0,h=new o(a.count*s);return Promise.resolve(new Nt(h,s,l))}let n=[];return a.bufferView!==void 0?n.push(this.getDependency("bufferView",a.bufferView)):n.push(null),a.sparse!==void 0&&(n.push(this.getDependency("bufferView",a.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",a.sparse.values.bufferView))),Promise.all(n).then(function(s){let o=s[0],l=Wh[a.type],h=dn[a.componentType],c=h.BYTES_PER_ELEMENT,d=c*l,u=a.byteOffset||0,p=a.bufferView!==void 0?r.bufferViews[a.bufferView].byteStride:void 0,_=a.normalized===!0,x,m;if(p&&p!==d){let f=Math.floor(u/p),b="InterleavedBuffer:"+a.bufferView+":"+a.componentType+":"+f+":"+a.count,y=i.cache.get(b);y||(x=new h(o,f*p,a.count*p/c),y=new Mh(x,p/c),i.cache.add(b,y)),m=new Sh(y,l,u%p/c,_)}else o===null?x=new h(a.count*l):x=new h(o,u,a.count*l),m=new Nt(x,l,_);if(a.sparse!==void 0){let f=Wh.SCALAR,b=dn[a.sparse.indices.componentType],y=a.sparse.indices.byteOffset||0,g=a.sparse.values.byteOffset||0,S=new b(s[1],y,a.sparse.count*f),w=new h(s[2],g,a.sparse.count*l);o!==null&&(m=new Nt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,v=S.length;A<v;A++){let T=S[A];if(m.setX(T,w[A*l]),l>=2&&m.setY(T,w[A*l+1]),l>=3&&m.setZ(T,w[A*l+2]),l>=4&&m.setW(T,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(t){let i=this.json,r=this.options,n=i.textures[t].source,s=i.images[n],o=this.textureLoader;if(s.uri){let l=r.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(t,n,o)}loadTextureImage(t,i,r){let a=this,n=this.json,s=n.textures[t],o=n.images[i],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];let h=this.loadImageSource(i,r).then(function(c){c.flipY=!1,c.name=s.name||o.name||"",c.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(c.name=o.uri);let u=(n.samplers||{})[s.sampler]||{};return c.magFilter=Np[u.magFilter]||Ht,c.minFilter=Np[u.minFilter]||or,c.wrapS=Dp[u.wrapS]||ea,c.wrapT=Dp[u.wrapT]||ea,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==qt&&c.minFilter!==Ht,a.associations.set(c,{textures:t}),c}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(t,i){let r=this,a=this.json,n=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());let s=a.images[t],o=self.URL||self.webkitURL,l=s.uri||"",h=!1;if(s.bufferView!==void 0)l=r.getDependency("bufferView",s.bufferView).then(function(d){h=!0;let u=new Blob([d],{type:s.mimeType});return l=o.createObjectURL(u),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let c=Promise.resolve(l).then(function(d){return new Promise(function(u,p){let _=u;i.isImageBitmapLoader===!0&&(_=function(x){let m=new ui(x);m.needsUpdate=!0,u(m)}),i.load(ln.resolveURL(d,n.path),_,void 0,p)})}).then(function(d){return h===!0&&o.revokeObjectURL(l),dr(d,s),d.userData.mimeType=s.mimeType||x1(s.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[t]=c,c}assignTexture(t,i,r,a){let n=this;return this.getDependency("texture",r.index).then(function(s){if(!s)return null;if(r.texCoord!==void 0&&r.texCoord>0&&(s=s.clone(),s.channel=r.texCoord),n.extensions[gt.KHR_TEXTURE_TRANSFORM]){let o=r.extensions!==void 0?r.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=n.associations.get(s);s=n.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),n.associations.set(s,l)}}return a!==void 0&&(s.colorSpace=a),t[i]=s,s})}assignFinalMaterial(t){let i=t.geometry,r=t.material,a=i.attributes.tangent===void 0,n=i.attributes.color!==void 0,s=i.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+r.uuid,l=this.cache.get(o);l||(l=new qn,$i.prototype.copy.call(l,r),l.color.copy(r.color),l.map=r.map,l.sizeAttenuation=!1,this.cache.add(o,l)),r=l}else if(t.isLine){let o="LineBasicMaterial:"+r.uuid,l=this.cache.get(o);l||(l=new Th,$i.prototype.copy.call(l,r),l.color.copy(r.color),l.map=r.map,this.cache.add(o,l)),r=l}if(a||n||s){let o="ClonedMaterial:"+r.uuid+":";a&&(o+="derivative-tangents:"),n&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=r.clone(),n&&(l.vertexColors=!0),s&&(l.flatShading=!0),a&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(r))),r=l}t.material=r}getMaterialType(){return ti}loadMaterial(t){let i=this,r=this.json,a=this.extensions,n=r.materials[t],s,o={},l=n.extensions||{},h=[];if(l[gt.KHR_MATERIALS_UNLIT]){let d=a[gt.KHR_MATERIALS_UNLIT];s=d.getMaterialType(),h.push(d.extendParams(o,n,i))}else{let d=n.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Si),o.opacity=u[3]}d.baseColorTexture!==void 0&&h.push(i.assignTexture(o,"map",d.baseColorTexture,Lt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(h.push(i.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),h.push(i.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),s=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(t)}),h.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,o)})))}n.doubleSided===!0&&(o.side=ci);let c=n.alphaMode||Xh.OPAQUE;if(c===Xh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===Xh.MASK&&(o.alphaTest=n.alphaCutoff!==void 0?n.alphaCutoff:.5)),n.normalTexture!==void 0&&s!==ni&&(h.push(i.assignTexture(o,"normalMap",n.normalTexture)),o.normalScale=new he(1,1),n.normalTexture.scale!==void 0)){let d=n.normalTexture.scale;o.normalScale.set(d,d)}if(n.occlusionTexture!==void 0&&s!==ni&&(h.push(i.assignTexture(o,"aoMap",n.occlusionTexture)),n.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=n.occlusionTexture.strength)),n.emissiveFactor!==void 0&&s!==ni){let d=n.emissiveFactor;o.emissive=new we().setRGB(d[0],d[1],d[2],Si)}return n.emissiveTexture!==void 0&&s!==ni&&h.push(i.assignTexture(o,"emissiveMap",n.emissiveTexture,Lt)),Promise.all(h).then(function(){let d=new s(o);return n.name&&(d.name=n.name),dr(d,n),i.associations.set(d,{materials:t}),n.extensions&&da(a,d,n),d})}createUniqueName(t){let i=Pt.sanitizeNodeName(t||"");return i in this.nodeNamesUsed?i+"_"+ ++this.nodeNamesUsed[i]:(this.nodeNamesUsed[i]=0,i)}loadGeometries(t){let i=this,r=this.extensions,a=this.primitiveCache;function n(o){return r[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,i).then(function(l){return Up(l,o,i)})}let s=[];for(let o=0,l=t.length;o<l;o++){let h=t[o],c=v1(h),d=a[c];if(d)s.push(d.promise);else{let u;h.extensions&&h.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?u=n(h):u=Up(new xt,h,i),h.mode===Bi.TRIANGLE_STRIP?u=u.then(p=>Vh(p,lo)):h.mode===Bi.TRIANGLE_FAN&&(u=u.then(p=>Vh(p,Xn))),a[c]={primitive:h,promise:u},s.push(u)}}return Promise.all(s)}loadMesh(t){let i=this,r=this.json,a=this.extensions,n=r.meshes[t],s=n.primitives,o=[];for(let l=0,h=s.length;l<h;l++){let c=s[l].material===void 0?m1(this.cache):this.getDependency("material",s[l].material);o.push(c)}return o.push(i.loadGeometries(s)),Promise.all(o).then(async function(l){let h=l.slice(0,l.length-1),c=l[l.length-1],d=[];for(let p=0,_=c.length;p<_;p++){let x=c[p],m=s[p],f,b=h[p];if(m.mode===Bi.TRIANGLES||m.mode===Bi.TRIANGLE_STRIP||m.mode===Bi.TRIANGLE_FAN||m.mode===void 0){let y=n.isSkinnedMesh===!0,g=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");y&&g===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=y&&g?new Ed(x,b):new mt(x,b),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(m.mode===Bi.LINES)f=new Cd(x,b);else if(m.mode===Bi.LINE_STRIP)f=new co(x,b);else if(m.mode===Bi.LINE_LOOP)f=new Id(x,b);else if(m.mode===Bi.POINTS)f=new Yn(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&_1(f,n),f.name=i.createUniqueName(n.name||"mesh_"+t),dr(f,n),m.extensions&&da(a,f,m),i.assignFinalMaterial(f),d.push(f)}for(let p=0,_=d.length;p<_;p++)i.associations.set(d[p],{meshes:t,primitives:p});if(d.length===1)return n.extensions&&da(a,d[0],n),d[0];let u=new Yt;n.extensions&&da(a,u,n),i.associations.set(u,{meshes:t});for(let p=0,_=d.length;p<_;p++)u.add(d[p]);return u})}loadCamera(t){let i,r=this.json.cameras[t],a=r[r.type];if(!a){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return r.type==="perspective"?i=new ai(pd.radToDeg(a.yfov),a.aspectRatio||1,a.znear||1,a.zfar||2e6):r.type==="orthographic"&&(i=new oa(-a.xmag,a.xmag,a.ymag,-a.ymag,a.znear,a.zfar)),r.name&&(i.name=this.createUniqueName(r.name)),dr(i,r),Promise.resolve(i)}loadSkin(t){let i=this.json.skins[t],r=[];for(let a=0,n=i.joints.length;a<n;a++)r.push(this._loadNodeShallow(i.joints[a]));return i.inverseBindMatrices!==void 0?r.push(this.getDependency("accessor",i.inverseBindMatrices)):r.push(null),Promise.all(r).then(function(a){let n=a.pop(),s=a,o=[],l=[];for(let h=0,c=s.length;h<c;h++){let d=s[h];if(d){o.push(d);let u=new Ye;n!==null&&u.fromArray(n.array,h*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',i.joints[h])}return new wd(o,l)})}loadAnimation(t){let i=this.json,r=this,a=i.animations[t],n=a.name?a.name:"animation_"+t,s=[],o=[],l=[],h=[],c=[];for(let d=0,u=a.channels.length;d<u;d++){let p=a.channels[d],_=a.samplers[p.sampler],x=p.target,m=x.node,f=a.parameters!==void 0?a.parameters[_.input]:_.input,b=a.parameters!==void 0?a.parameters[_.output]:_.output;x.node!==void 0&&(s.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",b)),h.push(_),c.push(x))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(h),Promise.all(c)]).then(function(d){let u=d[0],p=d[1],_=d[2],x=d[3],m=d[4],f=[];for(let y=0,g=u.length;y<g;y++){let S=u[y],w=p[y],A=_[y],v=x[y],T=m[y];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let O=r._createAnimationTracks(S,w,A,v,T);if(O)for(let L=0;L<O.length;L++)f.push(O[L])}let b=new Lh(n,void 0,f);return dr(b,a),b})}createNodeMesh(t){let i=this.json,r=this,a=i.nodes[t];return a.mesh===void 0?null:r.getDependency("mesh",a.mesh).then(function(n){let s=r._getNodeRef(r.meshCache,a.mesh,n);return a.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,h=a.weights.length;l<h;l++)o.morphTargetInfluences[l]=a.weights[l]}),s})}loadNode(t){let i=this.json,r=this,a=i.nodes[t],n=r._loadNodeShallow(t),s=[],o=a.children||[];for(let h=0,c=o.length;h<c;h++)s.push(r.getDependency("node",o[h]));let l=a.skin===void 0?Promise.resolve(null):r.getDependency("skin",a.skin);return Promise.all([n,Promise.all(s),l]).then(function(h){let c=h[0],d=h[1],u=h[2];u!==null&&c.traverse(function(p){p.isSkinnedMesh&&p.bind(u,y1)});for(let p=0,_=d.length;p<_;p++)c.add(d[p]);if(c.userData.pivot!==void 0&&d.length>0){let p=c.userData.pivot,_=d[0];c.pivot=new I().fromArray(p),c.position.x-=p[0],c.position.y-=p[1],c.position.z-=p[2],_.position.set(0,0,0),delete c.userData.pivot}return c})}_loadNodeShallow(t){let i=this.json,r=this.extensions,a=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let n=i.nodes[t],s=n.name?a.createUniqueName(n.name):"",o=[],l=a._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(t)});return l&&o.push(l),n.camera!==void 0&&o.push(a.getDependency("camera",n.camera).then(function(h){return a._getNodeRef(a.cameraCache,n.camera,h)})),a._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(t)}).forEach(function(h){o.push(h)}),this.nodeCache[t]=Promise.all(o).then(function(h){let c;if(n.isBone===!0?c=new bh:h.length>1?c=new Yt:h.length===1?c=h[0]:c=new Gt,c!==h[0])for(let d=0,u=h.length;d<u;d++)c.add(h[d]);if(n.name&&(c.userData.name=n.name,c.name=s),dr(c,n),n.extensions&&da(r,c,n),n.matrix!==void 0){let d=new Ye;d.fromArray(n.matrix),c.applyMatrix4(d)}else n.translation!==void 0&&c.position.fromArray(n.translation),n.rotation!==void 0&&c.quaternion.fromArray(n.rotation),n.scale!==void 0&&c.scale.fromArray(n.scale);if(!a.associations.has(c))a.associations.set(c,{});else if(n.mesh!==void 0&&a.meshCache.refs[n.mesh]>1){let d=a.associations.get(c);a.associations.set(c,{...d})}return a.associations.get(c).nodes=t,c}),this.nodeCache[t]}loadScene(t){let i=this.extensions,r=this.json.scenes[t],a=this,n=new Yt;r.name&&(n.name=a.createUniqueName(r.name)),dr(n,r),r.extensions&&da(i,n,r);let s=r.nodes||[],o=[];for(let l=0,h=s.length;l<h;l++)o.push(a.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let c=0,d=l.length;c<d;c++){let u=l[c];u.parent!==null?n.add(Ip(u)):n.add(u)}let h=c=>{let d=new Map;for(let[u,p]of a.associations)(u instanceof $i||u instanceof ui)&&d.set(u,p);return c.traverse(u=>{let p=a.associations.get(u);p!=null&&d.set(u,p)}),d};return a.associations=h(n),n})}_createAnimationTracks(t,i,r,a,n){let s=[],o=t.name?t.name:t.uuid,l=[];function h(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}Gr[n.path]===Gr.weights?(h(t),t.isGroup&&t.children.forEach(h)):l.push(o);let c;switch(Gr[n.path]){case Gr.weights:c=nn;break;case Gr.rotation:c=na;break;case Gr.translation:case Gr.scale:c=on;break;default:switch(r.itemSize){case 1:c=nn;break;case 2:case 3:default:c=on;break}break}let d=a.interpolation!==void 0?f1[a.interpolation]:Za,u=this._getArrayFromAccessor(r);for(let p=0,_=l.length;p<_;p++){let x=new c(l[p]+"."+Gr[n.path],i.array,u,d);a.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),s.push(x)}return s}_getArrayFromAccessor(t){let i=t.array;if(t.normalized){let r=gc(i.constructor),a=new Float32Array(i.length);for(let n=0,s=i.length;n<s;n++)a[n]=i[n]*r;i=a}return i}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(r){let a=this instanceof na?fc:wo;return new a(this.times,this.values,this.getValueSize()/3,r)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function M1(e,t,i){let r=t.attributes,a=new Ui;if(r.POSITION!==void 0){let o=i.json.accessors[r.POSITION],l=o.min,h=o.max;if(l!==void 0&&h!==void 0){if(a.set(new I(l[0],l[1],l[2]),new I(h[0],h[1],h[2])),o.normalized){let c=gc(dn[o.componentType]);a.min.multiplyScalar(c),a.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let n=t.targets;if(n!==void 0){let o=new I,l=new I;for(let h=0,c=n.length;h<c;h++){let d=n[h];if(d.POSITION!==void 0){let u=i.json.accessors[d.POSITION],p=u.min,_=u.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),u.normalized){let x=gc(dn[u.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(o)}e.boundingBox=a;let s=new Oi;a.getCenter(s.center),s.radius=a.min.distanceTo(a.max)/2,e.boundingSphere=s}function Up(e,t,i){let r=t.attributes,a=[];function n(s,o){return i.getDependency("accessor",s).then(function(l){e.setAttribute(o,l)})}for(let s in r){let o=mc[s]||s.toLowerCase();o in e.attributes||a.push(n(r[s],o))}if(t.indices!==void 0&&!e.index){let s=i.getDependency("accessor",t.indices).then(function(o){e.setIndex(o)});a.push(s)}return ct.workingColorSpace!==Si&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),dr(e,t),M1(e,t,i),Promise.all(a).then(function(){return t.targets!==void 0?g1(e,t.targets,i):e})}var Fp=["car","trees","props","landmarks"];async function Bp(e,t){let i=new To,r={},a=0;await Promise.all(Fp.map(s=>new Promise((o,l)=>i.load(`${e}${s}.glb`,h=>{h.scene.updateMatrixWorld(!0),h.scene.traverse(c=>{if(!c.isMesh)return;let d=(c.parent&&c.parent!==h.scene?c.parent.name:c.name).replace(/_\d+$/,""),[u,p]=d.split("__"),_=r[u]||(r[u]={parts:[],roles:{},hulls:[]}),x=c.geometry.clone();if(x.applyMatrix4(c.matrixWorld),p&&p.startsWith("col")){_.hulls.push(new Float32Array(x.attributes.position.array));return}let m=c.material;if(m.map&&(m.map.colorSpace=Lt),m.metalness>.3&&(m.metalness=.3,m.roughness=Math.max(m.roughness,.35)),p){_.roles[p]=_.roles[p]||[],_.roles[p].push({geometry:x,material:m});return}_.parts.push({name:m.name,geometry:x,material:m})}),t==null||t(++a/Fp.length),o()},void 0,l))));let n={};for(let s in r)for(let o of r[s].parts){let l=o.material.name;n[l]||(n[l]=o.material),o.material=n[l]}return r.__materials=n,r}function Ar(e,t,{shadow:i=!0}={}){let r=e[t],a=new Yt;if(a.name=t,!r)return console.warn("missing asset",t),a;for(let n of r.parts){let s=new mt(n.geometry,n.material);s.castShadow=i,s.receiveShadow=!0,a.add(s)}return a}function zp(e,t,i,{shadow:r=!0,patch:a}={}){let n=e[t],s=new Yt;if(s.name=t,!n||!i.length)return{group:s,meshes:[]};let o=n.parts.map(l=>{let h=a?a(l.material,l.name):l.material,c=new Fi(l.geometry,h,i.length);return i.forEach((d,u)=>c.setMatrixAt(u,d)),c.castShadow=r,c.receiveShadow=!0,c.computeBoundingSphere(),s.add(c),c});return{group:s,meshes:o}}var pi=-Math.PI/2,vc=[["pyramid_big",-90,-30,.08,1],["pyramid_mid",-77,-37,.08,1],["pyramid_small",-98,-12,.08,1],["sphinx",-78,-22,0,1],["mosque",-56,-46,pi,1],["cairo_house0",-46,-40,pi,1],["cairo_house1",-48,-50,pi,1],["cairo_house2",-50,-24,pi,1],["cairo_house0",-64,-50,pi,.9],["cairo_house2",-44,-28,0,.9],["luxor_pylon",-54,10,pi,1],["luxor_colonnade",-54,-1,pi,1],["obelisk",-49.5,14.5,0,1],["ram",-57.5,16.5,0,1],["ram",-57.5,19,0,1],["ram",-57.5,21.5,0,1],["ram",-50.5,16.5,Math.PI,1],["ram",-50.5,19,Math.PI,1],["ram",-50.5,21.5,Math.PI,1],["pavilion",-6,-59.5,0,1,.45],["yardang",-40,-44,.5,1.2],["yardang",-45,-55,.35,1],["yardang",-36,-60,.6,.85],["yardang",-49,-39,.55,.8],["yardang",-15,-43,.3,.7],["yardang",-33,-38,.45,.6],["stupa",-9,17,0,1.25],["temple",13,18,pi,1],["naxi_house",-19,24,pi,1],["naxi_house",-18,36,pi+.3,1],["naxi_house",-22,30,pi-.2,.9],["beijing_gate",26,-55,0,1],["corner_tower",6,-48,0,1],["egg",46,-47,0,.9,-.55],["hutong",11,-30,0,1],["hutong",11,-24,0,1],["hutong",40,-31,Math.PI,1],["nanjing_gate",50,-14,0,1],["city_wall",35.5,-14,0,1],["city_wall",64.5,-14,0,1],["zifeng",67,4,0,1],["pearl_tower",78,-5,0,1],["shanghai_tower",90,-7,.3,1],["jinmao",94,0,.2,1],["swfc",85,-13,.4,1],["tower0",71,-8,.1,1],["tower1",80,-16,.2,1],["tower2",68,-14,0,1],["bund_customs",80,16,pi,1],["bund_bank",73,16.5,pi,1],["bund_bank",87,16.5,pi,1],["bund_customs",93,16.5,pi,.9],["barn",26,55,pi,1]];kh.push([-90,-30,10,.3],[-77,-37,8,.3],[-98,-12,5.5,.3],[-78,-22,4,.2],[-56,-46,6,.2],[-54,6,9,.15],[-6,-59.5,4,.45],[-9,17,3.5,.2],[13,18,5,.2],[26,-55,10,.12],[6,-48,5,.12],[46,-47,9,-1.1],[11,-27,5,.12],[50,-14,22,.12],[67,4,3,.12],[82,-8,16,.15],[83,16,14,.15],[26,55,4,.12]);var xc=[...[-6,-3,0,3,6].map(e=>["lantern",26+e,-52.2,0,1,7.1]),...[-4.5,-1.5,1.5,4.5].map(e=>["lantern",26+e,-52.1,0,.9,3.3]),...[70,75,80,85,90,95].map(e=>["lamp_bund",e,12.6,0,1,0]),...[34,40,46].map(e=>["lamp_modern",e,4.6,Math.PI/2,1,0])],Hp=[["camel",-74,-8,2.2,1],["camel",-72,-10,1.6,1],["camel",-12,-54,.4,1],["yak",8,42,.5,1],["yak",11,45,2.4,1],["yak",4,46,1.2,.9],["yak",-12,44,3,1]],kp=[[-46,8,11],[-40,16,14],[-62,6,9],[-44,28,12.5],[-36,4,16],[-58,-2,13]],Gp=[{asset:"felucca",axis:"nile",z0:-50,z1:50,speed:1.4,phase:0},{asset:"felucca",axis:"nile",z0:-50,z1:50,speed:1.1,phase:.55},{asset:"ferry",axis:"huangpu",x0:70,x1:104,speed:2.2,phase:.2}],Vp=[[[-9,4.6,17],[-15,4.6,12]],[[-9,4.6,17],[-2,4.6,11]],[[-9,4.6,17],[-15,4.6,22]],[[-9,4.6,17],[-3,4.6,23]]],Wp=[[-15,12],[-2,11],[-15,22],[-3,23]];function Xp(){let e=[];for(let t of[40.5,47.5]){for(let i=0;i<11;i++)e.push(["haybale",48+i*1.28,t,0,0]);for(let i=0;i<10;i++)e.push(["haybale",48.64+i*1.28,t,0,1])}for(let[t,i,r]of[[30,38,.3],[33,36,1.2],[44,54,.8],[47,56,2],[32,48,.1]])e.push(["haybale_sq",t,i,r,0]);for(let[t,i]of[[14,6],[15.2,7.4],[16.4,8.8],[12,12],[13,13.2]])e.push(["cone",t,i,0,0]);for(let[t,i]of[[2,8],[2.9,8.2],[2.45,8.1]])e.push(["crate",t,i,.3,0]);return e.push(["crate",2.45,8.1,.6,1]),e}var yc={giza:{plat:"#d9bd8a",accent:"#c8902f",line:"Old Kingdom \xB7 c. 2560 BC"},cairo:{plat:"#d8c7a6",accent:"#2f8f9d",line:"City of a thousand minarets"},luxor:{plat:"#d6b077",accent:"#c8902f",line:"Thebes \xB7 balloons at dawn"},qinggan:{plat:"#c98a64",accent:"#b4482c",line:"Dunhuang \xB7 Zhangye \xB7 Qinghai Lake"},yunnan:{plat:"#eeeae0",accent:"#b8862e",line:"Lijiang \xB7 Shangri-La \xB7 Meili"},beijing:{plat:"#e7e2d6",accent:"#a9322a",line:"The old city"},nanjing:{plat:"#a8aaa5",accent:"#53704a",line:"Plane trees \xB7 Zijin Mountain"},shanghai:{plat:"#c9c6bf",accent:"#c43f78",line:"The Bund \xB7 Lujiazui"},road:{plat:"#cbb07a",accent:"#d9b45c",line:"Everywhere in between"}};var It=e=>new we(e),S1={desert:It("#e7c890"),danxia:It("#cf7b52"),meadow:It("#86a85a"),autumn:It("#b5a65f"),plane:It("#8ba45c"),coast:It("#a4b37c"),field:It("#d3b66c")},b1={desert:It("#d2ab72"),danxia:It("#b7744f"),meadow:It("#a48a62"),autumn:It("#a59a86"),plane:It("#9b978e"),coast:It("#a19d94"),field:It("#b49763")},T1=It("#7b6a5c"),E1=It("#f4f6fb"),w1=It("#b9a57a"),A1=It("#cfc8b8"),ii={t:{value:0},strength:{value:.6},car:{value:new I(0,-99,0)},carR:{value:1.7},carScreen:{value:new I(-1e4,-1e4,0)},seeR:{value:120}};function jp(e,{bend:t=.06,push:i=0,rigid:r=.6,see:a=!1}={}){let n=e.clone();return n.onBeforeCompile=s=>{Object.assign(s.uniforms,{wT:ii.t,wS:ii.strength,wCar:ii.car,wCarR:ii.carR,wCarS:ii.carScreen,wSeeR:ii.seeR}),a&&(s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
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
      transformed.xz += wdir * wk * ${i.toFixed(2)} * transformed.y; transformed.y *= 1.0 - wk * 0.45;`:""}`)},n.customProgramCacheKey=()=>`wind${t}${i}${r}${a}`,n}function qp(e,t,i,r,{coarse:a=!1}={}){let{sample:n,slope:s,road:o,at:l}=r,h=(()=>{let D=1234567;return()=>(D=D*16807%2147483647)/2147483647})(),c=[],d=new Ye,u=new kt,p=new I,_=new I,x=new I(0,1,0),m=(D,C,P,j=0,te=1)=>new Ye().compose(new I(D,C,P),new kt().setFromAxisAngle(x,j),new I(te,te,te)),f=(D,C,P)=>{for(let j in Vt)if(Math.hypot(D-Vt[j].x,C-Vt[j].z)<P)return!0;return Math.hypot(D-Hr.x,C-Hr.z)<P},b=new we,y=new Ai(240,160,240,160);y.rotateX(-Math.PI/2);let g=y.attributes.position,S=new Float32Array(g.count*3),w=new Float32Array(g.count*2),A=new we,v=new we;for(let D=0;D<g.count;D++){let C=g.getX(D),P=g.getZ(D),j=Math.round(C- -120),te=Math.round(P- -80),oe=l(j,te);g.setY(D,oe);let ue=wr(C,P);A.setRGB(0,0,0);for(let yt in ue)A.add(b.copy(S1[yt]).multiplyScalar(ue[yt]));if(ue.danxia>.1){let yt=.5+.5*Math.sin(oe*3.4+Er(C*.1,P*.1)*3);A.lerp(b.set(yt>.55?"#e39a62":yt<.3?"#a9533a":"#c86f4a"),ue.danxia*.6)}let Ge=o(C,P);if(Ge<2.8){v.setRGB(0,0,0);for(let yt in ue)v.add(b.copy(b1[yt]).multiplyScalar(ue[yt]));A.lerp(v,1-si(1.4,2.8,Ge))}for(let yt in Vt){let _t=Vt[yt],oi=Math.hypot(C-_t.x,P-_t.z);oi<8.5&&A.lerp(A1,(1-si(6.5,8.5,oi))*.45)}let Ze=Math.hypot(l(j+1,te)-l(j-1,te),l(j,te+1)-l(j,te-1))/2;A.lerp(T1,si(.5,1.15,Ze)*.8),A.lerp(E1,si(6,9,oe+Er(C*.3,P*.3)*2)),A.lerp(w1,(1-si(-.25,.2,oe))*.85);let Mt=(Er(C*.7,P*.7)-.5)*.07;S[D*3]=A.r+Mt,S[D*3+1]=A.g+Mt,S[D*3+2]=A.b+Mt,w[D*2]=(ue.desert||0)+(ue.danxia||0)*.6,w[D*2+1]=si(6,9,oe)}y.setAttribute("color",new Nt(S,3)),y.setAttribute("aux",new Nt(w,2)),y.computeVertexNormals();let T=new ti({vertexColors:!0,roughness:.96});T.onBeforeCompile=D=>{D.vertexShader=D.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aux; varying vec2 vAux; varying vec3 vWp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAux = aux; vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),D.fragmentShader=D.fragmentShader.replace("#include <common>",`#include <common>
      varying vec2 vAux; varying vec3 vWp;
      float gH(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float gN(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(gH(i), gH(i+vec2(1,0)), f.x), mix(gH(i+vec2(0,1)), gH(i+vec2(1,1)), f.x), f.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
      float grain = gN(vWp.xz * 1.7) * 0.6 + gN(vWp.xz * 6.0) * 0.4;
      diffuseColor.rgb *= 0.93 + grain * 0.12;
      float rip = sin(vWp.x * 2.2 + sin(vWp.z * 0.35) * 2.5 + gN(vWp.xz * 0.4) * 3.0);
      diffuseColor.rgb *= 1.0 - vAux.x * smoothstep(0.55, 1.0, rip) * 0.07;
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.96, 0.97, 1.0), vAux.y * (0.6 + grain * 0.3));`)};let O=new mt(y,T);O.receiveShadow=!0,e.add(O);let L=new Uint8Array(38801*4);for(let D=0;D<r.H.length;D++)L[D*4]=Math.max(0,Math.min(255,Math.round((r.H[D]+4)*32))),L[D*4+3]=255;let N=new jn(L,241,161);N.needsUpdate=!0,N.magFilter=N.minFilter=Ht;let q=new Bt({transparent:!0,fog:!0,uniforms:{...Qi.clone(Te.fog),t:{value:0},htex:{value:N},deep:{value:It("#1e6a8f")},shallow:{value:It("#63c6c8")},foam:{value:It("#ffffff")},night:{value:0},sky:{value:It("#bfe3ff")},car:{value:new I}},vertexShader:`#include <fog_pars_vertex>
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
      }`}),U=new mt(new Ai(900,900),q);U.rotation.x=-Math.PI/2,U.position.y=-.45,U.renderOrder=2,e.add(U);let G={},Q=(D,C)=>{for(let P of D.hulls){let j=new Float32Array(P.length),te=new I;for(let oe=0;oe<P.length;oe+=3)te.set(P[oe],P[oe+1],P[oe+2]).applyMatrix4(C),j[oe]=te.x,j[oe+1]=te.y,j[oe+2]=te.z;t.statics.hull(j,0,0,0)}},X=(D,C,P)=>{var te;let j=i[D];if(!j){console.warn("missing asset",D);return}for(let oe of j.parts){let ue=oe.geometry.clone().applyMatrix4(C);for(let Ze of Object.keys(ue.attributes))Ze!=="position"&&Ze!=="normal"&&ue.deleteAttribute(Ze);ue.index&&(ue=ue.toNonIndexed());let Ge=G[P]||(G[P]={});(Ge[te=oe.material.name]||(Ge[te]={mat:oe.material,geos:[]})).geos.push(ue)}};for(let[D,C,P,j,te,oe=0]of vc){let ue=m(C,n(C,P)+oe,P,j,te);X(D,ue,la(C,P).key),i[D]&&Q(i[D],ue)}for(let[D,C,P,j,te,oe]of xc)X(D,m(C,n(C,P)+oe,P,j,te),la(C,P).key);for(let D in G)for(let C in G[D]){let{mat:P,geos:j}=G[D][C],te=new mt(Gh(j,!1),P);te.castShadow=!0,te.receiveShadow=!0,e.add(te)}let ge=i.__materials;ge.lantern&&c.push({m:ge.lantern,day:0,night:1.6});for(let[D,C,P,j,te,oe]of xc){let ue=i[D];if(!(!ue||!ue.roles.lamp))for(let Ge of ue.roles.lamp){let Ze=new mt(Ge.geometry,Ge.material);Ze.applyMatrix4(m(C,n(C,P)+oe,P,j,te)),e.add(Ze),c.push({m:Ge.material,day:0,night:2.4})}}for(let D of["glass_city","glass_dark"])ge[D]&&(ge[D].emissive=It("#ffcf8a"),c.push({m:ge[D],day:0,night:.22}));ge.pearl&&(ge.pearl.emissive=It("#ff4fa3"),c.push({m:ge.pearl,day:0,night:.9}));let Y={},K=(D,C,P,j=1,te=h()*Math.PI*2)=>{(Y[D]||(Y[D]=[])).push({x:C,y:n(C,P)-.05,z:P,ry:te,s:j,wob:0,v:0,ax:0,az:0})},ae=(D,C,P=2.8)=>o(D,C)>P&&!f(D,C,9)&&n(D,C)>.05&&s(D,C)<.5&&ts(D,C)<.9,Be=[];for(let[D,C,P,,j]of vc)Be.push([C,P,(D.startsWith("pyramid")?12:D==="city_wall"?9:6.5)*(j||1)]);let Re=(D,C)=>Be.every(([P,j,te])=>Math.hypot(D-P,C-j)>te),ot={autumn:"ginkgo",plane:"plane",coast:"plane",danxia:"poplar",field:"poplar"};for(let D=-120;D<120;D+=1)for(let C=-80;C<80;C+=1){let P=o(D,C);if(P<4.6||P>5.6)continue;let j=wr(D,C),te=null,oe=.5;for(let ue in ot)(j[ue]||0)>oe&&(oe=j[ue],te=ue);!te||((D*7+C*13)%5+5)%5!==0||h()>.6||!ae(D,C,4.4)||!Re(D,C)||K(ot[te],D,C,(ot[te]==="plane"?.72:.9)+h()*.2)}let je=a?9e3:16e3;for(let D=0;D<je;D++){let C=-120+h()*240,P=-80+h()*160,j=wr(C,P),te=n(C,P);if(te<.3&&te>-.45-.1&&o(C,P)>2.5&&!f(C,P,8)&&h()<.6&&Math.min(n(C+2.5,P),n(C-2.5,P),n(C,P+2.5),n(C,P-2.5))<-.45&&K("reeds",C,P,.8+h()*.5),!ae(C,P)||!Re(C,P))continue;let oe=Er(C*.06+3,P*.06),ue=Math.abs(C-es(P));if(te>2.5&&te<9&&h()<.12){K(te>5?"fir_snow":"fir",C,P,.7+h()*.5);continue}(j.desert||0)>.5?ue>5&&ue<10.5&&h()<.22?K("palm",C,P,.85+h()*.4):h()<.03&&K("shrub",C,P,.8+h()*.6):(j.danxia||0)>.5?h()<.08?K("tuft",C,P,1+h()):h()<.01&&K("shrub",C,P,.7+h()*.5):(j.meadow||0)>.45?oe>.5&&h()<.3?K(te>3.5?"fir_snow":"fir",C,P,.8+h()*.7):h()<.03?K("blossom",C,P,.8+h()*.5):h()<.04&&K("bush",C,P,.6+h()*.6):(j.autumn||0)>.45?oe>.52&&h()<.12?K("ginkgo",C,P,.8+h()*.4):h()<.03&&K("bush",C,P,.6+h()*.4):(j.plane||0)>.45||(j.coast||0)>.45?oe>.56&&h()<.1?K("plane",C,P,.7+h()*.3):h()<.04&&K("bush",C,P,.6+h()*.5):(j.field||0)>.45&&(oe>.62&&h()<.08?K("poplar",C,P,.9+h()*.3):h()<.02&&K("bush",C,P,.5+h()*.4))}let ee={fir:.3,fir_snow:.3,palm:.24,ginkgo:.28,plane:.34,poplar:.24,blossom:.2},de={shrub:1,tuft:1,reeds:1,bush:1},fe={};for(let D in Y){let C=Y[D],{group:P,meshes:j}=zp(i,D,C.map(te=>m(te.x,te.y,te.z,te.ry,te.s)),{shadow:!de[D],patch:(te,oe)=>jp(te,de[D]?{bend:.05,push:.9,rigid:.05}:{bend:oe.startsWith("bark")?.004:.008,rigid:1.2,see:!0})});if(e.add(P),fe[D]=j,ee[D])for(let te of C)t.statics.cyl(te.x,te.y+1.5,te.z,1.5,ee[D]*te.s)}let Ne=new Set;function qe(D,C,P){if(!(C<1.5))for(let j in ee){let te=Y[j];if(te)for(let oe=0;oe<te.length;oe++){let ue=te[oe],Ge=ue.x-D.x,Ze=ue.z-D.z,Mt=Ge*Ge+Ze*Ze;if(Mt>2.2*2.2||Math.abs(ue.wob)>.3)continue;let yt=Math.sqrt(Mt)||1;ue.wob=Math.min(1,.3+C/10),ue.v=0,ue.ax=Ze/yt,ue.az=-Ge/yt,ue.type=j,ue.i=oe,ue.phase=0,Ne.add(ue),P==null||P(ue)}}}function ye(D){for(let C of Ne){C.v+=(-C.wob*70-C.v*3.5)*D,C.wob+=C.v*D,C.phase+=D,u.setFromAxisAngle(_.set(C.ax,0,C.az),C.wob*.2).multiply(new kt().setFromAxisAngle(x,C.ry)),d.compose(_.set(C.x,C.y,C.z),u,p.set(C.s,C.s,C.s));for(let P of fe[C.type])P.setMatrixAt(C.i,d),P.instanceMatrix.needsUpdate=!0;Math.abs(C.wob)<.004&&Math.abs(C.v)<.03&&C.phase>.4&&(C.wob=0,Ne.delete(C))}}let it=48,le={t:ii.t,wind:ii.strength,car:ii.car,trail:{value:Array.from({length:it},()=>new Rt(0,-99,0,1))},light:{value:new we(1,1,1)}},ne=new xt;ne.setAttribute("position",new Ke([-.06,0,0,.06,0,0,-.04,.3,0,.04,.3,0,0,.62,0],3)),ne.setIndex([0,1,2,2,1,3,2,3,4]);let pe=a?14e3:34e3,Ee=new Fi(ne,new Bt({uniforms:Object.assign(Qi.clone(Te.fog),le),side:ci,fog:!0,vertexShader:`#include <fog_pars_vertex>
      uniform float t, wind; uniform vec3 car; uniform vec4 trail[${it}]; varying float vY; varying vec3 vC; attribute vec3 tint;
      void main(){
        vec3 p = position; vY = p.y / 0.62; vC = tint;
        vec4 w = instanceMatrix * vec4(p, 1.0);
        vec3 root = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        float s = sin(t * 1.8 + root.x * 0.35 + root.z * 0.27) + sin(t * 3.1 + root.x * 0.9) * 0.35;
        w.x += s * 0.12 * wind * vY * vY; w.z += s * 0.06 * wind * vY * vY;
        float press = 0.0; vec2 dir = vec2(0.0);
        for (int i = 0; i < ${it}; i++) {
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
      }`}),pe),Ce=new Float32Array(pe*3),De={meadow:[.25,.45,.38,1],autumn:[.13,.42,.45,.85],plane:[.24,.42,.36,.9],coast:[.26,.38,.4,.55],field:[.12,.5,.55,.6]},ke=0,et=a?1500:3500,$e=new Fi(new Ch(.09,0).translate(0,.42,0),jp(new ti({roughness:.8}),{bend:.15,push:1.1,rigid:0}),et),F=0,St=["#f4f1e6","#f2c94c","#e88aa8","#a78bd8","#f4f1e6"].map(It);for(let D=0;D<pe*8&&ke<pe;D++){let C=-120+h()*240,P=-80+h()*160,j=wr(C,P),te=null,oe=0;for(let Mt in De)(j[Mt]||0)>oe&&(oe=j[Mt],te=Mt);if(!te||h()>oe*1.3||Er(C*.08,P*.08)<.36)continue;let ue=n(C,P);if(ue<.05||ue>6||o(C,P)<2.2||f(C,P,7.5)||s(C,P)>.6||!Re(C,P))continue;let Ge=De[te],Ze=(.7+h()*.7)*Ge[3];d.compose(_.set(C,ue-.02,P),u.setFromEuler(new Tr(0,h()*6.28,(h()-.5)*.3)),p.set(Ze,Ze*(.8+h()*.6),Ze)),Ee.setMatrixAt(ke,d),b.setHSL(Ge[0]+h()*.05,Ge[1]+h()*.12,Ge[2]+h()*.1),Ce.set([b.r,b.g,b.b],ke*3),ke++,te==="meadow"&&F<et&&h()<.18&&($e.setMatrixAt(F,d.compose(_.set(C+.2,ue,P+.1),u.identity(),p.set(1,.8+h()*.6,1))),$e.setColorAt(F,St[Math.floor(h()*5)]),F++)}Ee.count=ke,$e.count=F,Ee.geometry.setAttribute("tint",new Br(Ce,3)),Ee.frustumCulled=!1,$e.frustumCulled=!1,e.add(Ee,$e);let nt=(()=>{let D=document.createElement("canvas");D.width=D.height=64;let C=D.getContext("2d");return C.fillStyle="#fff",C.beginPath(),C.moveTo(32,60),C.bezierCurveTo(4,40,4,8,32,4),C.bezierCurveTo(60,8,60,40,32,60),C.fill(),new Zn(D)})(),rt=a?900:1800,R=new Fi(new Ai(.26,.26).rotateX(-Math.PI/2),new ti({map:nt,alphaTest:.5,side:ci,roughness:.9}),rt),M=[];for(let D=0;D<rt*30&&M.length<rt;D++){let C=h()<.5,P=C?Y.ginkgo:Y.plane;if(!P||!P.length)continue;let j=P[Math.floor(h()*P.length)],te=h()*6.28,oe=h()*4.5,ue=j.x+Math.cos(te)*oe,Ge=j.z+Math.sin(te)*oe,Ze=n(ue,Ge);Ze<.05||(M.push({p:new I(ue,Ze+.03,Ge),v:new I,rot:h()*6.28,spin:0,tilt:0,air:!1}),R.setColorAt(M.length-1,b.setHSL(C?.12+h()*.03:.07+h()*.04,C?.8:.55,C?.55+h()*.1:.38+h()*.12)))}R.count=M.length,R.frustumCulled=!1,R.instanceMatrix.setUsage(rn),R.receiveShadow=!0;let B=new Tr,Z=D=>{let C=M[D];d.compose(C.p,u.setFromEuler(B.set(C.tilt,C.rot,C.tilt*.6)),p.set(1,1,1)),R.setMatrixAt(D,d)};M.forEach((D,C)=>Z(C)),e.add(R);function se(D,C,P,j){let te=!1;for(let oe=0;oe<M.length;oe++){let ue=M[oe];if(!ue.air){if(P<2.5)continue;let Ze=ue.p.x-D.x,Mt=ue.p.z-D.z;if(Ze*Ze+Mt*Mt>2.6||Math.abs(ue.p.y-D.y)>2)continue;ue.air=!0;let _t=.25+Math.random()*.4;ue.v.set(C.x*_t+Ze*1.5,2+Math.random()*P*.35,C.z*_t+Mt*1.5),ue.spin=(Math.random()-.5)*12}ue.v.y-=6*j,ue.v.multiplyScalar(1-j*2.2),ue.p.addScaledVector(ue.v,j),ue.rot+=ue.spin*j,ue.tilt=Math.sin(ue.rot*2)*.8;let Ge=n(ue.p.x,ue.p.z)+.03;ue.p.y<=Ge&&(ue.p.y=Ge,ue.air=!1,ue.tilt=0),Z(oe),te=!0}te&&(R.instanceMatrix.needsUpdate=!0)}let ve=240,Me=new Fi(new Ai(.2,.2),new ti({map:nt,alphaTest:.5,side:ci}),ve);Me.frustumCulled=!1,Me.instanceMatrix.setUsage(rn);for(let D=0;D<ve;D++)Me.setColorAt(D,b.set("#e8b93a"));let k=Array.from({length:ve},()=>({p:new I(0,-99,0),ph:Math.random()*6,life:0}));e.add(Me);let xe={autumn:[.12,.8,.55],plane:[.08,.55,.42],meadow:[.95,.6,.82]};function _e(D,C,P){let j=la(P.x,P.z),te=Vt[j.key].biome,oe=xe[te],ue=oe&&j.d<34,Ge=te==="autumn"?Y.ginkgo:te==="plane"?Y.plane:Y.blossom,Ze=ue&&Ge?Ge.filter(yt=>Math.abs(yt.x-P.x)<24&&Math.abs(yt.z-P.z)<18):[],Mt=!1;for(let yt=0;yt<ve;yt++){let _t=k[yt];if(_t.life<=0){if(_t.p.y=-99,Ze.length&&Math.random()<.03){let oi=Ze[Math.floor(Math.random()*Ze.length)];_t.p.set(oi.x+(Math.random()-.5)*3,oi.y+2.5+Math.random()*2*oi.s,oi.z+(Math.random()-.5)*3),_t.life=1,Me.setColorAt(yt,b.setHSL(oe[0]+Math.random()*.04,oe[1],oe[2]+Math.random()*.1)),Mt=!0}}else _t.p.x+=(Math.sin(C*1.3+_t.ph)*.6+ii.strength.value*.6)*D,_t.p.z+=Math.cos(C*1.1+_t.ph)*.4*D,_t.p.y-=.7*D,_t.p.y<n(_t.p.x,_t.p.z)&&(_t.life=0);d.compose(_t.p,u.setFromEuler(B.set(Math.sin(C*3+_t.ph)*1.2,C*2+_t.ph,Math.cos(C*2.6+_t.ph))),p.set(1,1,1)),Me.setMatrixAt(yt,d)}Me.instanceMatrix.needsUpdate=!0,Mt&&(Me.instanceColor.needsUpdate=!0)}let Ue=["#2f6fd0","#f4f1e6","#d4392e","#3f9a52","#f2c230"].map(It),me=[];for(let[[D,C,P],[j,te,oe]]of Vp){let ue=n(D,P)+C,Ge=n(j,oe)+te,Ze=Math.hypot(j-D,oe-P),Mt=Math.floor(Ze/.5);for(let yt=1;yt<Mt;yt++){let _t=yt/Mt,oi=D+(j-D)*_t,pa=P+(oe-P)*_t,Ci=ue+(Ge-ue)*_t-Math.sin(_t*Math.PI)*.9,Hi=new Ai(.34,.42,3,1).translate(0,-.21,0).rotateY(-Math.atan2(oe-P,j-D)).translate(oi,Ci,pa),ki=Ue[yt%5],Gi=new Float32Array(Hi.attributes.position.count*3);for(let fi=0;fi<Gi.length;fi+=3)Gi[fi]=ki.r,Gi[fi+1]=ki.g,Gi[fi+2]=ki.b;Hi.setAttribute("color",new Nt(Gi,3)),Hi.deleteAttribute("uv"),me.push(Hi)}}if(me.length){let D=new ti({vertexColors:!0,side:ci,roughness:.9});D.onBeforeCompile=P=>{P.uniforms.wT=ii.t,P.uniforms.wS=ii.strength,P.vertexShader=P.vertexShader.replace("#include <common>",`#include <common>
uniform float wT, wS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.x += sin(wT * 6.0 + position.x * 3.0 + position.z * 2.0) * 0.08 * (0.6 + wS);
        transformed.z += cos(wT * 5.0 + position.x * 2.0) * 0.08 * (0.6 + wS);`)};let C=new mt(Gh(me),D);C.castShadow=!0,e.add(C)}for(let[D,C]of Wp){let P=Ar(i,"flagpole");P.position.set(D,n(D,C),C),e.add(P),t.statics.cyl(D,n(D,C)+2.5,C,2.5,.12)}let Ie=Hp.map(([D,C,P,j,te])=>{let oe=Ar(i,D);return oe.scale.setScalar(te),oe.position.set(C,n(C,P),P),oe.rotation.y=j,e.add(oe),{g:oe,home:new he(C,P),tgt:new he(C,P),bob:Math.random()*6,speed:0}});function Pe(D,C,P){for(let j of Ie){let te=j.g.position,oe=Math.hypot(te.x-P.x,te.z-P.z);oe<5?(j.tgt.set(te.x+(te.x-P.x)/oe*6,te.z+(te.z-P.z)/oe*6),j.speed=3.2):Math.random()<D*.08&&(j.tgt.set(j.home.x+(Math.random()-.5)*8,j.home.y+(Math.random()-.5)*8),j.speed=.7);let ue=j.tgt.x-te.x,Ge=j.tgt.y-te.z,Ze=Math.hypot(ue,Ge);if(Ze>.3&&n(j.tgt.x,j.tgt.y)>.05){let Mt=Math.atan2(-Ge,ue)-j.g.rotation.y;Mt=Math.atan2(Math.sin(Mt),Math.cos(Mt)),j.g.rotation.y+=Mt*Math.min(1,D*4),te.x+=ue/Ze*j.speed*D,te.z+=Ge/Ze*j.speed*D,j.g.rotation.z=Math.sin(C*j.speed*4)*.04}else j.speed=0,j.g.rotation.z=Math.sin(C*.8+j.bob)*.02;te.y=n(te.x,te.z)+(j.speed>1?Math.abs(Math.sin(C*j.speed*4))*.06:0)}}let Qe=kp.map(([D,C,P],j)=>{var Ge,Ze;let te=Ar(i,"balloon");te.position.set(D,P,C),te.scale.setScalar(1.3),e.add(te);let oe=(Ze=(Ge=i.balloon)==null?void 0:Ge.roles.glow)==null?void 0:Ze[0],ue=null;return oe&&(ue=new mt(oe.geometry,new ni({color:"#ffb347"})),te.add(ue)),{g:te,x:D,z:C,y:P,ph:j*1.7,flame:ue}}),at=Gp.map(D=>{let C=Ar(i,D.asset);return e.add(C),{...D,g:C}});function z(D,C){for(let P of Qe)P.g.position.y=P.y+Math.sin(C*.3+P.ph)*1.4,P.g.position.x=P.x+Math.sin(C*.04+P.ph)*6,P.g.rotation.y=C*.05+P.ph,P.flame&&(P.flame.visible=Math.sin(C*2.3+P.ph*3)>.4);for(let P of at){let j=C*P.speed*.012+P.phase*Math.PI*2,te=(Math.sin(j)+1)/2,oe=Math.cos(j)>0?1:-1;if(P.axis==="nile"){let ue=P.z0+(P.z1-P.z0)*te,Ge=es(ue),Ze=es(ue+.5);P.g.position.set(Ge,-.45-.12+Math.sin(C*1.4+P.phase*9)*.05,ue),P.g.rotation.y=Math.atan2(-.5*oe,(Ze-Ge)*oe),P.g.rotation.z=Math.sin(C*1.1+P.phase*5)*.03}else{let ue=P.x0+(P.x1-P.x0)*te;P.g.position.set(ue,-.45-.2+Math.sin(C*1.2)*.04,Hh(ue)),P.g.rotation.y=oe>0?0:Math.PI}}}let re=[];for(let[D,C,P,j,te]of Xp()){let oe=Ar(i,D);e.add(oe);let ue=n(C,P),Ge;D==="haybale"?Ge=t.dynamic({type:"roundcyl",hh:.49,r:.56,b:.06,rot:{x:Math.SQRT1_2,y:0,z:0,w:Math.SQRT1_2}},{x:C,y:ue+.64+te*1.07,z:P,ry:j,mass:1.2,friction:.8,restitution:.05}):D==="haybale_sq"?Ge=t.dynamic({type:"box",hx:.55,hy:.23,hz:.28},{x:C,y:ue+.25,z:P,ry:j,mass:.8,friction:.8}):D==="cone"?(Ge=t.dynamic({type:"cone",hh:.37,r:.3},{x:C,y:ue+.39,z:P,ry:j,mass:.15,restitution:.3}),oe.children.forEach(Ze=>{Ze.position.y=-.37})):Ge=t.dynamic({type:"box",hx:.4,hy:.4,hz:.4},{x:C,y:ue+.41+te*.81,z:P,ry:j,mass:.5}),re.push({g:oe,body:Ge})}let ce=D=>{let C=D.body.translation(),P=D.body.rotation();D.g.position.set(C.x,C.y,C.z),D.g.quaternion.set(P.x,P.y,P.z,P.w)};re.forEach(ce);let Ae=0;return{terrain:O,water:U,waterMat:q,grassU:le,glow:c,trees:Y,htex:N,pressGrass(D,C,P){le.trail.value[Ae=(Ae+1)%it].set(D,P,C,0)},update(D,C,P){ii.t.value=C,ii.car.value.copy(P.carPos);for(let j=0;j<it;j++){let te=le.trail.value[j];te.w=Math.min(1,Math.max(0,(C-te.y)/7))}q.uniforms.t.value=C,q.uniforms.car.value.copy(P.carPos),qe(P.carPos,P.speed,P.onShake),ye(D),se(P.carPos,P.vel,P.speed,D),_e(D,C,P.focus),Pe(D,C,P.carPos),z(D,C);for(let j of re)j.body.isSleeping()||ce(j)}}}var R1=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;function C1(e,t,i,r){let s=document.createElement("canvas");s.width=640,s.height=900;let o=s.getContext("2d");o.fillStyle="#0d0e13",o.fillRect(0,0,640,900),o.fillStyle=r.accent,o.fillRect(0,0,640,14),o.fillStyle="rgba(255,255,255,.55)",o.font='500 28px "Geist Mono", monospace',o.textBaseline="top",o.fillText(`${String(t+1).padStart(2,"0")} / ${String(i).padStart(2,"0")}`,52,62),o.textAlign="right",o.fillText(`${e.photos.length} FRAMES`,588,62),o.textAlign="left",o.fillStyle="#fff",o.font="600 96px Geist, sans-serif";let l=e.en.split(" "),h=170,c="",d=[];for(let _ of l){let x=c?`${c} ${_}`:_;o.measureText(x).width>536&&c?(d.push(c),c=_):c=x}d.push(c);for(let _ of d.slice(0,2))o.fillText(_,52,h),h+=100;o.fillStyle="rgba(255,255,255,.82)",o.font='500 64px "PingFang SC", "Noto Sans SC", "Microsoft YaHei", sans-serif',o.fillText(e.zh,52,h+14),h+=120,o.fillStyle="rgba(255,255,255,.18)",o.fillRect(52,h,536,2),o.fillStyle="rgba(255,255,255,.62)",o.font='500 30px "Geist Mono", monospace';let u=Vt[e.key];o.fillText(u.lat!=="\u2014"?`${u.lat}  ${u.lon}`:"ON THE ROAD",52,h+34),o.fillStyle="rgba(255,255,255,.75)",o.font="400 34px Geist, sans-serif",o.fillText(r.line,52,h+92,536),o.fillStyle=r.accent,o.fillRect(52,750,60,60),o.fillStyle="#fff",o.font='600 30px "Geist Mono", monospace',o.fillText("\u21B5",70,765),o.fillStyle="rgba(255,255,255,.85)",o.font='500 28px "Geist Mono", monospace',o.fillText("ENTER \xB7 \u770B\u7167\u7247",132,768);let p=new Zn(s);return p.colorSpace=Lt,p.anisotropy=8,p}function I1(e,t){let r=document.createElement("canvas");r.width=r.height=1024;let a=r.getContext("2d");a.clearRect(0,0,1024,1024),a.strokeStyle="rgba(0,0,0,.12)",a.lineWidth=3;for(let s of[.47,.36])a.beginPath(),a.arc(1024/2,1024/2,1024*s,0,Math.PI*2),a.stroke();for(let s=0;s<72;s++){let o=s/72*Math.PI*2,l=1024*.47,h=1024*(s%6?.455:.43);a.beginPath(),a.moveTo(1024/2+Math.cos(o)*l,1024/2+Math.sin(o)*l),a.lineTo(1024/2+Math.cos(o)*h,1024/2+Math.sin(o)*h),a.stroke()}a.fillStyle="rgba(0,0,0,.09)",a.font="600 300px Geist, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(String(e+1).padStart(2,"0"),1024/2,1024*.6);let n=new Zn(r);return n.colorSpace=Lt,n.anisotropy=8,n}function Yp(e,t,i,r,a){let n=new uo,s=[],o=a.filter(h=>Vt[h.key]);o.forEach((h,c)=>{let d=Vt[h.key],u=yc[h.key]||yc.road,p=r.sample(d.x,d.z),_=new Yt;_.position.set(d.x,p,d.z),e.add(_);let x=Ar(i,"platform");x.children.forEach(U=>{U.material=U.material.clone(),U.material.color.set(u.plat),U.castShadow=!1}),_.add(x),t.statics.cyl(d.x,p+.05,d.z,.12,6);let m=new mt(new Eh(5.9,64),new ti({map:I1(c,u),transparent:!0,roughness:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));m.rotation.x=-Math.PI/2,m.position.y=.185,m.receiveShadow=!0,_.add(m);let f=new ti({color:u.accent,emissive:u.accent,emissiveIntensity:.3,roughness:.4}),b=new mt(new Ih(5,.07,6,120),f);b.rotation.x=-Math.PI/2,b.position.y=.2,_.add(b);let y=new cr(2.3,3.24,.22),g=new ti({color:"#0d0e13",roughness:.5}),S=C1(h,c,o.length,u),w=new ti({map:S,roughness:.6,emissive:"#ffffff",emissiveMap:S,emissiveIntensity:0}),A=new mt(y,[g,g,g,g,w,g]),v=-4.4,T=3.6,O=.55;A.position.set(v,.18+1.62+.25,T),A.rotation.y=O,A.castShadow=!0,_.add(A);let L=new mt(new cr(2.5,.25,.6),g);L.position.set(v,.3,T),L.rotation.y=O,_.add(L),t.statics.box(d.x+v,p+1.8,d.z+T,1.25,1.8,.3,O);let N=Math.min(5,h.photos.length),q=[];for(let U=0;U<N;U++){let G=h.photos[U],Q=N===1?0:(U/(N-1)-.5)*1.9,X=Math.sin(Q)*4.1,ge=-Math.cos(Q)*4.1+.4,Y=-Q,K=Ar(i,"stand");K.position.set(X,.18,ge),K.rotation.y=Y+Math.PI,_.add(K),t.statics.box(d.x+X,p+1,d.z+ge,.9,1,.25,Y);let ae=G.ratio||1.5,Be=ae>=1?1.2:1.6,Re=Be*ae,ot=new Yt;ot.position.set(X,.18+.62,ge+.12*Math.cos(Q)),ot.rotation.y=Y,_.add(ot);let je=new ni({color:"#222"});n.load(G.s,Ne=>{Ne.colorSpace=Lt,Ne.anisotropy=4,je.map=Ne,je.color.set("#fff"),je.needsUpdate=!0});let ee=new mt(new cr(Re+.16,Be+.16,.04),new ti({color:"#f6f3ee",roughness:.8}));ee.position.y=(Be+.16)/2,ee.castShadow=!0;let de=new mt(new Ai(Re,Be),je);de.position.set(0,(Be+.16)/2,.025);let fe=new Yt;fe.add(ee,de),ot.add(fe),q.push({card:fe,delay:U*.08,mat:je})}s.push({...h,x:d.x,z:d.z,gy:p,root:_,ring:b,ringMat:f,frames:q,face:w,lift:0,focus:new I(d.x,p+1.5,d.z-6)})});function l(h,c,d,u){let p=null;for(let _ of s){let m=Math.hypot(d.x-_.x,d.z-_.z)<5.6;m&&(p=_),_.lift+=((m?1:0)-_.lift)*Math.min(1,h*(m?2.2:1.6)),_.ringMat.emissiveIntensity=.25+_.lift*2.2+u*.8+Math.sin(c*3)*.1*_.lift,_.ring.scale.setScalar(1+Math.sin(c*2)*.006*_.lift),_.face.emissiveIntensity=u*.75;for(let f of _.frames){let b=R1(Math.min(1,Math.max(0,(_.lift-f.delay)/(1-f.delay*1.5))));f.card.rotation.x=-1.45*(1-b)-.12*b,f.card.position.y=0+.1*b,f.mat.color.setScalar(.8+.2*Math.max(b,1-u))}}return p}return{stops:s,update:l}}var ir=e=>String(e!=null?e:"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),rs=(e,t,i)=>{let r=Math.min(1,Math.max(0,(i-e)/(t-e)));return r*r*(3-2*r)},ri=(e,t,i)=>e+(t-e)*i,Zp=[{tod:.44,en:"Day",zh:"\u767D\u5929"},{tod:.705,en:"Golden hour",zh:"\u9EC4\u660F"},{tod:.93,en:"Night",zh:"\u591C"},{tod:.255,en:"Dawn",zh:"\u6E05\u6668"}],Ao=["auto","clear","rain","snow","sand"],Kp={clear:"Clear \xB7 \u6674",rain:"Rain \xB7 \u96E8",snow:"Snow \xB7 \u96EA",sand:"Sandstorm \xB7 \u6C99\u5C18\u66B4"},P1={giza:"sand",cairo:"clear",luxor:"clear",qinggan:"sand",yunnan:"snow",beijing:"clear",nanjing:"rain",shanghai:"rain",road:"clear"};async function L1(e,{stops:t=[],onClose:i}={}){var pr;let r=matchMedia("(pointer: coarse)").matches,a=new URLSearchParams(location.search);e.innerHTML=`
    <canvas class="drive__canvas"></canvas>
    <div class="drive__hud mono">
      <span class="drive__title">Drive \xB7 \u5F00\u8F66\u901B\u7167\u7247</span>
      <span class="drive__status"></span>
      <span class="drive__keys">${r?"Use the pad \xB7 \u6309\u94AE\u9A7E\u9A76":"WASD / arrows \xB7 Space handbrake \xB7 Enter photos \xB7 N day/night \xB7 T weather \xB7 L lights \xB7 1\u20139 jump \xB7 R reset"}</span>
    </div>
    <div class="drive__region" aria-live="polite"></div>
    <canvas class="drive__map" width="240" height="160" aria-hidden="true"></canvas>
    <button class="drive__close" type="button" aria-label="Leave drive mode">\u2715</button>
    <div class="drive__card" aria-live="polite"></div>
    <div class="drive__viewer" hidden>
      <figure><img alt=""><figcaption class="mono"></figcaption></figure>
      <button type="button" class="drive__vbtn" data-v="prev" aria-label="Previous">\u2190</button>
      <button type="button" class="drive__vbtn" data-v="next" aria-label="Next">\u2192</button>
      <button type="button" class="drive__vbtn" data-v="close" aria-label="Back to driving">Esc \xB7 \u56DE\u5230\u8F66\u4E0A</button>
    </div>
    <div class="drive__pad" ${r?"":"hidden"}>
      <button type="button" data-k="left" aria-label="Steer left">\u25C0</button><button type="button" data-k="right" aria-label="Steer right">\u25B6</button>
      <button type="button" data-k="enter" aria-label="Open photos">\u25CF</button>
      <button type="button" data-k="brake" aria-label="Reverse">\u25BC</button><button type="button" data-k="gas" aria-label="Accelerate">\u25B2</button>
    </div>
    <div class="drive__flash"></div>
    <div class="drive__load mono"><span>Building the island \xB7 \u6B63\u5728\u9020\u5C9B</span><i><b></b></i></div>`;let n=J=>e.querySelector(J),s=n(".drive__canvas"),o=n(".drive__card"),l=n(".drive__status"),h=n(".drive__region"),c=n(".drive__viewer"),d=c.querySelector("img"),u=c.querySelector("figcaption"),p=n(".drive__flash"),_=n(".drive__load b"),x=!0,m={rapier:0,assets:0,world:0},f=()=>{_.style.transform=`scaleX(${(m.rapier*.35+m.assets*.5+m.world*.15).toFixed(3)})`},b=()=>{x=!1,i==null||i()};n(".drive__close").addEventListener("click",()=>b());let y=new URL(".",document.baseURI).href,g=`${y}assets/vendor/rapier/rapier.mjs`,[S,w]=await Promise.all([import(g).then(async J=>{let ie=J.default||J;return await ie.init(),m.rapier=1,f(),ie}),Bp(`${y}media/drive/`,J=>{m.assets=J,f()})]);if(!x)return{close(){}};await new Promise(J=>setTimeout(J,30));let A=new Ep({canvas:s,antialias:!0,stencil:!0,powerPreference:"high-performance"});A.setPixelRatio(Math.min(devicePixelRatio,r?1.25:1.75)),A.shadowMap.enabled=!0,A.shadowMap.type=Fa,A.toneMapping=tn;let v=new yd;v.background=new we,v.fog=new vd(12376554,50,140);let T=new ai(36,1,.5,500),O=new pp(14478591,9073752,1.1),L=new Jn(16777215,2.4);L.castShadow=!0,L.shadow.mapSize.set(r?1024:2048,r?1024:2048),Object.assign(L.shadow.camera,{left:-34,right:34,top:34,bottom:-34,near:1,far:160}),L.shadow.bias=-5e-4,L.shadow.normalBias=.05;let N=new Jn(9085695,0);v.add(O,L,L.target,N,N.target);let q=new yo(A,new Zt(2,2,{type:ei,stencilBuffer:!0}));q.addPass(new Mo(v,T));let U=new un(new he(256,256),.3,.55,.85);r||q.addPass(U),q.addPass(new So);let G=Ap(),Q=Rp(S,G),X=qp(v,Q,w,G,{coarse:r}),ge=Yp(v,Q,w,G,t),Y=ge.stops,{sample:K}=G;m.world=1,f();let ae=Q.car,Be=new Yt,Re=new Yt;Be.add(Re),v.add(Be);let ot=J=>Object.assign(J,{stencilWrite:!0,stencilRef:1,stencilFunc:gh,stencilZPass:hd});for(let J of w.car_body.parts){let ie=new mt(J.geometry,ot(J.material.clone()));ie.castShadow=!0,ie.receiveShadow=!0,Re.add(ie)}let je={};for(let J of["head","tail","reverse","indL","indR"])for(let ie of((pr=w.car)==null?void 0:pr.roles[J])||[]){let Xe=je[J]||(je[J]=ot(ie.material.clone()));Xe.emissive&&(Xe.emissiveIntensity=0),Re.add(new mt(ie.geometry,Xe))}let ee=(J,ie)=>{je[J]&&(je[J].emissiveIntensity=ie)},de=[0,1,2,3].map(J=>{var He;let ie=new Yt,Xe=new Yt;ie.add(Xe);for(let lt of((He=w.car)==null?void 0:He.roles.wheel)||[]){let Ot=new mt(lt.geometry,ot(lt.material.clone()));Ot.castShadow=!0,Xe.add(Ot)}return J%2&&(Xe.scale.z=-1),v.add(ie),{g:ie,inner:Xe}}),fe=[-.48,.48].map(J=>{let ie=new fo(16773328,0,40,.5,.6,1);return ie.position.set(1.2,.1,J),ie.target.position.set(9,-1.4,J*2.2),Re.add(ie,ie.target),ie}),Ne=new mt(new cr(2.4,1.3,1.4),new ni({color:5926143,transparent:!0,opacity:.35,depthFunc:Un,depthWrite:!1,stencilWrite:!0,stencilRef:1,stencilFunc:cd,stencilFail:Jr,stencilZFail:Jr,stencilZPass:Jr}));Ne.position.y=.3,Ne.renderOrder=10,Re.add(Ne);let qe=1e3,ye=new Fi(new Ai(.34,.3).rotateX(-Math.PI/2),new ni({color:3812386,transparent:!0,opacity:.24,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),qe);ye.frustumCulled=!1,ye.instanceMatrix.setUsage(rn);for(let J=0;J<qe;J++)ye.setMatrixAt(J,new Ye().makeScale(0,0,0));ye.renderOrder=1,v.add(ye);let it=0,le=[new I(1e9,0,0),new I(1e9,0,0)],ne=180,pe=new Fi(new Rh(.16,0),new ti({color:16777215,roughness:1}),ne);pe.instanceMatrix.setUsage(rn),pe.frustumCulled=!1,v.add(pe);for(let J=0;J<ne;J++)pe.setColorAt(J,new we(15326404));let Ee=Array.from({length:ne},()=>({life:0,p:new I,v:new I,s:1,g:1.5})),Ce=0,De=new Ye,ke=new kt,et=new I,$e=new we,F=(J,ie,Xe,He,lt=1.5)=>{let Ot=Ee[Ce=(Ce+1)%ne];Ot.life=1,Ot.s=Xe,Ot.g=lt,Ot.p.copy(J),Ot.v.copy(ie),pe.setColorAt(Ce,He),pe.instanceColor.needsUpdate=!0},St=r?3500:9e3,nt=new Float32Array(St*3);for(let J=0;J<St*3;J++)nt[J]=Math.random();let rt=new xt;rt.setAttribute("position",new Nt(nt,3));let R={t:{value:0},center:{value:new I},kind:{value:0},amount:{value:0},wind:{value:new he},scale:{value:400},night:{value:0}},M=new Yn(rt,new Bt({uniforms:R,transparent:!0,depthWrite:!1,vertexShader:`
      uniform float t, kind, amount, scale; uniform vec3 center; uniform vec2 wind; varying float vA; varying float vK;
      void main(){
        vec3 box = vec3(74.0, 30.0, 74.0);
        float r = fract(position.x * 7.13 + position.z * 3.7);
        vA = step(r, amount); vK = kind;
        vec3 vel = kind < 0.5 ? vec3(wind.x * 0.4, -26.0, wind.y * 0.4)
                 : kind < 1.5 ? vec3(wind.x * 0.25 + sin(t + r * 20.0) * 0.6, -2.2, wind.y * 0.25 + cos(t * 0.8 + r * 13.0) * 0.6)
                 : vec3(wind.x * 2.6, sin(t * 2.0 + r * 30.0) * 1.2, wind.y * 2.6);
        vec3 p = position * box + vel * t;
        vec3 o = center - box * 0.5; o.y = center.y - 4.0;
        p = mod(p - o, box) + o;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = (kind < 0.5 ? 0.22 : 0.16) * scale / -mv.z;
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
      }`}));M.frustumCulled=!1,M.renderOrder=5,v.add(M);let B=260,Z=new Float32Array(B*3),se=[];for(let J=0;J<B;J++){let ie,Xe,He=0;do ie=(Math.random()-.5)*240*.8,Xe=(Math.random()-.5)*160*.8,He++;while(((wr(ie,Xe).meadow||0)<.5||K(ie,Xe)<.1)&&He<40);se.push([ie,K(ie,Xe)+.6+Math.random()*1.4,Xe,Math.random()*6])}let ve=new xt;ve.setAttribute("position",new Nt(Z,3));let Me=new qn({color:14221178,size:.32,transparent:!0,opacity:0,depthWrite:!1,blending:ja}),k=new Yn(ve,Me);k.frustumCulled=!1,v.add(k);let xe=n(".drive__map"),_e=xe.getContext("2d"),Ue=document.createElement("canvas");Ue.width=240,Ue.height=160;{let J=Ue.getContext("2d"),ie=J.createImageData(240,160),Xe=X.terrain.geometry.attributes.color,He=X.terrain.geometry.attributes.position;for(let lt=0;lt<He.count;lt++){let Ot=Math.floor((He.getX(lt)+240/2)/240*239.99),pt=(Math.floor((He.getZ(lt)+160/2)/160*159.99)*240+Ot)*4,Wi=He.getY(lt)<-.45;ie.data[pt]=Wi?70:Math.pow(Math.max(0,Xe.getX(lt)),1/2.2)*255,ie.data[pt+1]=Wi?150:Math.pow(Math.max(0,Xe.getY(lt)),1/2.2)*255,ie.data[pt+2]=Wi?185:Math.pow(Math.max(0,Xe.getZ(lt)),1/2.2)*255,ie.data[pt+3]=255}J.putImageData(ie,0,0)}let me=(J,ie)=>[(J+240/2)/240*240,(ie+160/2)/160*160],Ie={gas:0,brake:0,left:0,right:0,hand:0},Pe=null,Qe=0,at=null,z=0,re=a.has("tod")?parseFloat(a.get("tod")):.44,ce=null,Ae=null,D=Ao.includes(a.get("wx"))?a.get("wx"):"auto",C="clear",P=0,j="",te=0,oe=null,ue=0,Ge=new I,Ze=new I,Mt=+(a.get("cam")||1),yt=Math.PI/2,_t=(J,ie,Xe=yt)=>ae.place(J,K(J,ie)+1.3,ie,Xe),oi=Y.find(J=>J.key===a.get("at"));oi?_t(oi.x,oi.z+9):_t(Hr.x,Hr.z+2);let pa=()=>{let J=ae.body.translation();_t(J.x,J.z,ae.yaw())};function Ci(J){let ie=Y[J];ie&&(p.classList.remove("is-on"),p.offsetWidth,p.classList.add("is-on"),setTimeout(()=>{_t(ie.x,ie.z+10),T.position.set(ie.x+9,30,ie.z+26),Ze.set(ie.x,ie.gy,ie.z+8)},180))}function Hi(){let J=at.photos[z];d.classList.remove("is-in"),d.src=J.m,d.onload=()=>d.classList.add("is-in"),u.innerHTML=`<span>${ir(at.en)} \xB7 ${ir(at.zh)}</span><span>${ir(J.title)} <span class="zh">${ir(J.zh)}</span></span><span>${String(z+1).padStart(2,"0")} / ${String(at.photos.length).padStart(2,"0")}</span>`}function ki(J){at=J,z=0,c.hidden=!1,e.classList.add("is-viewing"),Object.keys(Ie).forEach(ie=>{Ie[ie]=0}),Hi()}function Gi(){at=null,c.hidden=!0,e.classList.remove("is-viewing")}let fi=J=>{z=(z+J+at.photos.length)%at.photos.length,Hi()};c.addEventListener("click",J=>{var Xe;let ie=(Xe=J.target.closest("[data-v]"))==null?void 0:Xe.dataset.v;ie==="prev"&&fi(-1),ie==="next"&&fi(1),(ie==="close"||J.target===c)&&Gi()});let pn={KeyW:"gas",ArrowUp:"gas",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"hand"},Vr=J=>ie=>{if(at){if(!J)return;(ie.code==="ArrowRight"||ie.code==="KeyD")&&fi(1),(ie.code==="ArrowLeft"||ie.code==="KeyA")&&fi(-1),(ie.code==="Escape"||ie.code==="Enter"||ie.code==="Backspace")&&Gi(),ie.preventDefault();return}pn[ie.code]&&(Ie[pn[ie.code]]=J?1:0,ie.preventDefault()),J&&(ie.code==="KeyR"&&pa(),ie.code==="Enter"&&Pe&&ki(Pe),ie.code==="Escape"&&Ii(),ie.code==="KeyN"&&as(),ie.code==="KeyT"&&(D=Ao[(Ao.indexOf(D)+1)%Ao.length]),ie.code==="KeyL"&&(Ae=Ae===null?!(te>.45):Ae?!1:null),/^Digit[1-9]$/.test(ie.code)&&Ci(+ie.code.slice(5)-1))},fn=Vr(!0),mn=Vr(!1);addEventListener("keydown",fn),addEventListener("keyup",mn),e.querySelectorAll(".drive__pad [data-k]").forEach(J=>{let ie=J.dataset.k;if(ie==="enter"){J.addEventListener("click",()=>{Pe&&ki(Pe)});return}let Xe=lt=>{lt.preventDefault(),Ie[ie]=1},He=()=>{Ie[ie]=0};J.addEventListener("pointerdown",Xe),J.addEventListener("pointerup",He),J.addEventListener("pointerleave",He),J.addEventListener("pointercancel",He)}),b=()=>Ii(),o.addEventListener("click",J=>{J.target.closest("[data-open]")&&(J.preventDefault(),Pe&&ki(Pe))});function as(){let J=[...Zp].sort((Xe,He)=>Xe.tod-He.tod),ie=J.find(Xe=>Xe.tod>re%1+.02)||J[0];ce={from:re,to:ie.tod>re%1?Math.floor(re)+ie.tod:Math.floor(re)+1+ie.tod,t:0}}let Ro=new we("#0c1330"),Co=new we("#bcdcee"),Io=new we("#eaa27a"),ns=new we("#e7b9c6"),E=new we("#d2a466"),H=new we("#dfe6ee"),$=new we("#7f8c9c"),W=new we,V=new we;function Se(J){let ie=(re%1+1)%1,Xe=(ie-.25)*Math.PI*2,He=Math.sin(Xe),lt=rs(-.1,.22,He);te=1-lt;let Ot=Math.exp(-Math.pow(He/.2,2));W.copy(Ro).lerp(Co,lt).lerp(ie<.5?ns:Io,Ot*.75);let $t=P;C==="sand"&&W.lerp(V.copy(E).multiplyScalar(ri(.35,1,lt)),$t*.85),C==="snow"&&W.lerp(V.copy(H).multiplyScalar(ri(.3,1,lt)),$t*.55),C==="rain"&&W.lerp(V.copy($).multiplyScalar(ri(.3,1,lt)),$t*.6),v.background.copy(W),v.fog.color.copy(W),v.fog.near=C==="sand"?ri(50,6,$t):C==="snow"?ri(50,16,$t):C==="rain"?ri(50,22,$t):50,v.fog.far=C==="sand"?ri(140,62,$t):C==="snow"?ri(140,74,$t):C==="rain"?ri(140,85,$t):140;let pt=1-(C==="clear"?0:$t*.35);L.color.set("#ffb27a").lerp(V.set("#fff8ee"),rs(.02,.45,He)),L.intensity=2.6*lt*pt,L.position.set(J.x-Math.cos(Xe)*40,14+Math.max(.1,He)*44,J.z+22),L.target.position.copy(J),N.intensity=.9*te,N.position.set(J.x+20,40,J.z-10),N.target.position.copy(J),O.intensity=(.55+.6*lt)*pt,O.color.copy(W).lerp(V.set("#ffffff"),.35),O.groundColor.set("#8a7458").lerp(V.set("#1a1f33"),te),A.toneMappingExposure=ri(1,1.25,te),U.strength=.22+te*.45,X.glow.forEach(Xt=>{Xt.m.emissiveIntensity=ri(Xt.day,Xt.night,rs(.25,.75,te))}),X.grassU.light.value.setRGB(ri(.13,1,lt)*pt,ri(.17,1,lt)*pt,ri(.3,1,lt)*pt),X.waterMat.uniforms.night.value=te,X.waterMat.uniforms.sky.value.copy(W),R.night.value=te,Me.opacity=rs(.5,.9,te)*(C==="clear"?1:1-$t);let Wi=[...Zp].sort((Xt,rr)=>Math.abs((ie-Xt.tod+1.5)%1-.5)-Math.abs((ie-rr.tod+1.5)%1-.5))[0];j=`${Wi.en} \xB7 ${Wi.zh}`}let be=new I,Le=new I,Oe=new kt,Je=new kt,dt=new kt,vt=new I(0,0,1),Ve=new I(0,1,0),bt=()=>{let J=e.clientWidth,ie=e.clientHeight;A.setSize(J,ie,!1),q.setSize(J,ie),T.aspect=J/ie,T.fov=T.aspect<.8?50:36,T.updateProjectionMatrix(),R.scale.value=ie*A.getPixelRatio()*.9};bt(),addEventListener("resize",bt);let Dt=performance.now(),Et=0,wt="",Ct=0,Fe=0,Ut=0,Vi=new I,xi=performance.now();{let J=ae.body.translation();Ze.set(J.x,0,J.z),T.position.set(J.x+30,90,J.z+60),T.lookAt(Ze)}n(".drive__load").classList.add("is-done"),setTimeout(()=>{var J;return(J=n(".drive__load"))==null?void 0:J.remove()},700),e.classList.add("is-intro"),requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.add("is-in")));function bi(J){if(!x)return;Qe=requestAnimationFrame(bi);let ie=Math.min(.05,(J-Dt)/1e3);Dt=J;let Xe=(J-xi)/1e3;if(ce){ce.t=Math.min(1,ce.t+ie/2.4);let ze=ce.t*ce.t*(3-2*ce.t);re=ri(ce.from,ce.to,ze),ce.t>=1&&(ce=null)}else a.has("tod")||(re+=ie/420);ae.drive(at?{gas:0,brake:0,left:0,right:0,hand:1}:Ie,ie);let He=ae.body,lt=He.translation(),Ot=He.linvel();lt.y<-.45+.5&&He.setLinvel({x:Ot.x*(1-Math.min(.5,ie*1.6)),y:Ot.y,z:Ot.z*(1-Math.min(.5,ie*1.6))},!0);let $t=ts(lt.x,lt.z);if($t>.95){let ze=($t-.95)*60*ie,ft=Math.hypot(lt.x,lt.z)||1;He.applyImpulse({x:-lt.x/ft*ze,y:0,z:-lt.z/ft*ze},!0)}Q.step(ie);let pt=He.translation(),Wi=He.rotation(),Xt=He.linvel();if(pt.y<-.45-4||Math.abs(pt.x)>240/2+4||Math.abs(pt.z)>160/2+4){let ze=la(pt.x,pt.z);_t(Vt[ze.key].x,Vt[ze.key].z+10)}let rr=Math.hypot(Xt.x,Xt.z),Rr=ae.forward(),Mc=ae.speed();Be.position.set(pt.x,pt.y,pt.z),Be.quaternion.set(Wi.x,Wi.y,Wi.z,Wi.w),be.set(Xt.x-Vi.x,0,Xt.z-Vi.z).divideScalar(Math.max(ie,.001)),Vi.set(Xt.x,Xt.y,Xt.z);let Jp=be.x*Rr[0]+be.z*Rr[2],$p=be.x*Rr[2]-be.z*Rr[0];Ct+=(Math.max(-.06,Math.min(.06,-Jp*.006))-Ct)*Math.min(1,ie*6),Fe+=(Math.max(-.07,Math.min(.07,$p*.008))-Fe)*Math.min(1,ie*6),Re.rotation.set(Fe,0,Ct);let fa=ae.wheels(),Po=Le.set(0,-1,0).applyQuaternion(Be.quaternion);fa.forEach((ze,ft)=>{let zt=ze.hard;zt&&(de[ft].g.position.set(zt.x+Po.x*ze.susp,zt.y+Po.y*ze.susp,zt.z+Po.z*ze.susp),Oe.copy(Be.quaternion).multiply(Je.setFromAxisAngle(Ve,ze.steer||0)).multiply(dt.setFromAxisAngle(vt,-(ze.rot||0))),de[ft].g.quaternion.copy(Oe))});let Qp=Ie.brake&&Mc>.6||Ie.hand,Lo=Ae!==null?Ae:te>.45||C!=="clear"&&P>.5;ee("head",Lo?2.2:.3),fe.forEach(ze=>{ze.intensity=Lo?10:0}),ee("tail",Qp?5:Lo?1.4:.15),ee("reverse",Ie.brake&&Mc<-.3?3.5:0);let Sc=Math.sin(Xe*Math.PI*3.2)>0?4:0;ee("indL",Ie.left&&!Ie.right?Sc:0),ee("indR",Ie.right&&!Ie.left?Sc:0),Et+=ie;let ss=wr(pt.x,pt.z),bc=K(pt.x,pt.z)>5.5,os=pt.y<-.45+.6;if([2,3].forEach((ze,ft)=>{let zt=fa[ze];if(!zt.contact||!zt.point)return;let yi=zt.point;if(!(yi.y<-.45+.05)&&(be.set(yi.x,yi.y,yi.z),be.distanceTo(le[ft])>.3)){le[ft].copy(be);let ma=new I(Rr[0],0,Rr[2]).normalize(),Ac=new I(0,1,0),sf=new I().crossVectors(ma,Ac);De.makeBasis(ma,Ac,sf).setPosition(yi.x,yi.y+.03,yi.z),ye.setMatrixAt(it=(it+1)%qe,De),ye.instanceMatrix.needsUpdate=!0}}),Et>.08&&(Et=0,rr>.8))for(let ze of fa)ze.contact&&ze.point&&X.pressGrass(ze.point.x,ze.point.z,Xe);if(rr>3&&(fa[2].contact||fa[3].contact)||os&&rr>1.2){$e.set(os?"#f4fbff":bc?"#ffffff":(ss.meadow||0)+(ss.autumn||0)+(ss.plane||0)>.5?"#8a7a5a":(ss.danxia||0)>.4?"#c88b66":"#e9dcc4");for(let ze of[2,3]){let ft=fa[ze].point;!ft||Math.random()>Math.min(.9,rr/16)||F(be.set(ft.x,ft.y+.1,ft.z),Le.set(-Xt.x*.1+(Math.random()-.5),(os?2.4:.6)+Math.random()*.9,-Xt.z*.1+(Math.random()-.5)),(os?1.1:.6)+Math.random()*.9,$e)}}for(let ze=0;ze<ne;ze++){let ft=Ee[ze];ft.life>0&&(ft.life-=ie*1.1,ft.p.addScaledVector(ft.v,ie),ft.v.multiplyScalar(.95),ft.v.y-=ie*ft.g);let zt=Math.max(0,ft.life);et.setScalar(zt>0?ft.s*(1.6-zt)*Math.min(1,zt*3):1e-4),De.compose(ft.p,ke,et),pe.setMatrixAt(ze,De)}pe.instanceMatrix.needsUpdate=!0;let ef=Pe;if(at||(Pe=ge.update(ie,Xe,pt,te)),Pe!==ef)if(Pe){let ze=Pe;o.innerHTML=`<p class="mono">${ir(ze.region||"")}${ze.region?" \xB7 ":""}${ze.photos.length} frames</p><h3>${ir(ze.en)}<span class="zh">${ir(ze.zh)}</span></h3>
          <div class="drive__btns"><a class="pill pill--light" href="#" data-open><span class="dot"></span>View photos \xB7 Enter</a>${ze.href?`<a class="pill pill--ghost" href="${ir(ze.href)}"><span class="dot"></span>${ir(ze.hrefLabel||"Chapter")} \u2192</a>`:""}</div>`,o.classList.add("is-on")}else o.classList.remove("is-on");Ut+=((Pe&&rr<4?1:0)-Ut)*Math.min(1,ie*1.4);let tf=be.set(Xt.x,0,Xt.z).multiplyScalar(.35*(1-Ut)),Tc=Le.set(pt.x,pt.y*.5,pt.z).add(tf);Pe&&Tc.lerp(Pe.focus,Ut*.85),Ze.lerp(Tc,Math.min(1,ie*3));let No=1+Math.min(.35,rr*.016);Ge.set(Ze.x+ri(9*No,3,Ut)*Mt,Ze.y+ri((14+Math.min(4,rr*.2))*No,10.5,Ut)*Mt,Ze.z+ri(15*No,21,Ut)*Mt);let Ec=rs(0,2.4,Xe);T.position.lerp(Ge,Ec<1?Math.min(1,ie*(.8+Ec*3)):Math.min(1,ie*3.5)),T.lookAt(Ze),T.updateMatrixWorld();{let ze=be.set(pt.x,pt.y+.3,pt.z).project(T),ft=A.getPixelRatio();ii.carScreen.value.set((ze.x+1)/2*e.clientWidth*ft,(ze.y+1)/2*e.clientHeight*ft,ze.z*.5+.5),ii.seeR.value=e.clientHeight*ft*.12}let Cr=la(pt.x,pt.z);if(Cr.d<24&&Cr.key!==oe){oe=Cr.key,ue=Xe;let ze=Y.find(zt=>zt.key===Cr.key),ft=Vt[Cr.key];ze&&(h.innerHTML=`<span class="mono">${ft.lat!=="\u2014"?`${ft.lat} \xB7 ${ft.lon}`:"On the road"}</span><strong>${ir(ze.en)}</strong><span class="zh">${ir(ze.zh)}</span>`,h.classList.add("is-on"))}Cr.d>34&&(oe=null),h.classList.contains("is-on")&&Xe-ue>3.4&&h.classList.remove("is-on");let wc=D==="auto"?bc?"snow":Cr.d<26&&P1[Cr.key]||"clear":D;wc===C?P=Math.min(1,P+ie*.5):(P=Math.max(0,P-ie*.7),P===0&&(C=wc)),R.kind.value=C==="rain"?0:C==="snow"?1:2,R.amount.value=C==="clear"?0:P*(C==="sand"?1:.85),R.t.value=Xe,R.center.value.copy(Ze);let rf=.5+.5*Math.sin(Xe*.7)*Math.sin(Xe*.31),Do=C==="sand"?4+rf*6:C==="rain"?2:C==="snow"?1.2:.6;R.wind.value.set(Do*1.4*P+.3,Do*.5*P),ii.strength.value=.6+(C==="clear"?0:P*Do*.3),Se(Ze),X.update(ie,Xe,{carPos:new I(pt.x,pt.y-.5,pt.z),vel:new I(Xt.x,Xt.y,Xt.z),speed:rr,focus:Ze,onShake:ze=>{let ft=V.set(ze.type==="ginkgo"?"#efbd2c":ze.type==="blossom"?"#f2b6c6":ze.type==="palm"?"#6f9a3c":ze.type.startsWith("fir")?"#3b6b47":"#86a24a");for(let zt=0;zt<7;zt++)F(new I(ze.x+(Math.random()-.5)*2,ze.y+2.2+Math.random()*2*ze.s,ze.z+(Math.random()-.5)*2),new I((Math.random()-.5)*1.5,.3,(Math.random()-.5)*1.5),.45,ft,2.5)}}),Me.opacity>.01&&(se.forEach(([ze,ft,zt,yi],ma)=>{Z[ma*3]=ze+Math.sin(Xe*.6+yi)*1.2,Z[ma*3+1]=ft+Math.sin(Xe*1.1+yi*2)*.4,Z[ma*3+2]=zt+Math.cos(Xe*.5+yi)*1.2}),ve.attributes.position.needsUpdate=!0);let Uo=`${j} \xB7 ${C==="clear"||P<.2?Kp.clear:Kp[C]}${D==="auto"?"":" (T)"}`;Uo!==wt&&(l.textContent=Uo,wt=Uo),_e.clearRect(0,0,240,160),_e.drawImage(Ue,0,0),Y.forEach((ze,ft)=>{let[zt,yi]=me(ze.x,ze.z);_e.fillStyle=ze===Pe?"#fff":"rgba(34,51,255,.95)",_e.beginPath(),_e.arc(zt,yi,4.5,0,7),_e.fill(),_e.fillStyle="#fff",_e.font="600 9px Geist Mono, monospace",_e.fillText(String(ft+1),zt+6,yi+3)});let[af,nf]=me(pt.x,pt.z);_e.save(),_e.translate(af,nf),_e.rotate(Math.atan2(Rr[0],-Rr[2])),_e.fillStyle="#0b0c10",_e.beginPath(),_e.moveTo(0,-6),_e.lineTo(4.5,5),_e.lineTo(-4.5,5),_e.closePath(),_e.fill(),_e.strokeStyle="#fff",_e.lineWidth=1.5,_e.stroke(),_e.restore(),q.render()}Qe=requestAnimationFrame(bi);function Ii(){var J;x&&(x=!1,cancelAnimationFrame(Qe),removeEventListener("keydown",fn),removeEventListener("keyup",mn),removeEventListener("resize",bt),(J=q.dispose)==null||J.call(q),A.dispose(),e.innerHTML="",i==null||i())}return window.__drive={setCam:J=>{Mt=J},stops:Y,get car(){return ae.body.translation()},carApi:ae,jumpTo:Ci,nextPhase:as,open:J=>ki(Y[J]),setTod:J=>{re=J},setWx:J=>{D=J,C=J==="auto"?C:J,P=1},keys:Ie},{close:Ii}}window.X1NG_DRIVE={mount(e,t){let i=L1(e,t);return i.catch(r=>{console.error(r),e.innerHTML='<p class="drive__load mono">Drive mode could not load \xB7 \u52A0\u8F7D\u5931\u8D25</p>',setTimeout(()=>{var a;return(a=t==null?void 0:t.onClose)==null?void 0:a.call(t)},2e3)}),i}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
